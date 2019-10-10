
        var CNN = CNN || {},
            CNNI = CNNI || {},
            FAVE = FAVE || {};
        window.document.domain = 'cnn.com';
        if (typeof window.console === 'undefined') {
            window.console = {
                debug: function() {
                    return true;
                },
                error: function() {
                    return true;
                },
                info: function() {
                    return false;
                },
                warn: function() {
                    return false;
                },
                log: function() {
                    return false;
                },
                timeStamp: function() {
                    return false;
                }
            }
        }
        CNN.isWebview = false;
        CNNI.adTargets = {
            protocol: "ssl"
        };
        CNN.adTargets = CNNI.adTargets;
        CNN.AdsConfig = {
            adfuelServicesHost: 'adfuel.api.cnn.io',
            bigSky: {
                "enabled": true,
                "selector": "#jpsuperheaderwrapper"
            },
            browsi: {
                "src": "//middycdn-a.akamaihd.net/bootstrap/bootstrap.js",
                "id": "browsi-tag",
                "siteKey": "cnn",
                "match": {
                    "sections": ["homepage", "intl_homepage"]
                }
            },
            enableAdLock: false,
            enableAisGdpr: false,
            enableGalleryAdRefresh: true,
            galleryAdClicks: 4,
            amazon: {
                "amznkey": "3288"
            },
            companionAdStates: [{
                "label": "small",
                "minWidth": 0
            }, {
                "label": "large",
                "minWidth": 768
            }],
            topBannerAd: "ad_bnr_atf_01",
            desktopSSID: 'edition.cnn.com_main_homepage',
            mobileSSID: 'edition.cnn.com_mobile_mobileweb_homepage',
            fwNetworkId: 48804,
            fwProfile: 'cnn_mobile_web_linktag2',
            fallbackAssetId: 145856012
        };
        CNN.analyticsConfig = {
            "rollups": {},
            "zion": {
                "accessKey": "mXFw59FFEpUNOu3aeVJChKAsqAlZ4NEf",
                "bridgeEnabled": false,
                "bufferSize": 20,
                "enabled": true,
                "enableLogging": false,
                "trackScreens": false,
                "trackLifecycle": false,
                "trackPurchases": false,
                "trackNotifications": false,
                "trackDeeplink": false,
                "trackAdvertising": false,
                "trackLocation": false,
                "trackBluetooth": false
            },
            "zionEnv": "Prod"
        };
        CNN.analyticsConfig.ucStates = {
            ensighten: ["performance"],
            jsmd: ["performance"],
            segment: ["performance", "personalization"],
            zion: ["performance", "personalization"]
        };
        CNN.BannerBreakpoints = "c0.0:0, c8.5:600, c9.5:680, c10.5:760, c11.5:840, c12.5:920, c13.5:1000, c14.5:1080";
        CNN.CNNXStreamUrl = "http://go.cnn.com/?stream=";
        CNN.DemandLoadConfig = {
            "enableForCarousels": true,
            "enableForImages": true,
            "loadTimeOut": 5000,
            "threshold": 300
        };
        CNN.Edition = "international";
        CNN.EditionCookie = "PreferredEdition";
        CNN.Features = {
            enableAdFuelUtilities: true,
            enableAdsHeaderBidding: true,
            enableAmazonDisplayAds: true,
            enableAppia: false,
            enableBeemray: true,
            enableBounceX: true,
            enableCep: true,
            enableCreativeReview: true,
            enableCriteoAds: false,
            enableEpicAds: true,
            enableFreewheel: true,
            enableGalleryAds: true,
            enableGigyaLogin: false,
            enableIndexExchange: false,
            enableIntegralAdScience: true,
            enableInViewRefresh: true,
            enableLocalKeypress: true,
            enableLocalPrebid: true,
            enableKrux: true,
            enableTopBannerAdAboveNav: true,
            enablePrebid: true,
            enableProximic: true,
            enableSourcePoint: true,
            enableAmazonVideoAds: false,
            enableAnalytics: true,
            enableAspen: false,
            enableAspenForTOS: false,
            enableAutoplayBlock: false,
            enableAutoplayMuted: false,
            enableAutoplayMutedVR: false,
            enableAutoplayMutedLive: false,
            enableBizReact: true,
            enableBizTickerRibbon: true,
            enableBizMostActiveStocks: true,
            enableBizTickerRibbonFutures: true,
            enableBreakingNews: true,
            enableBrowsi: false,
            enableChartbeat: true,
            enableChartbeatMAB: true,
            enableContainerInjection: false,
            enableEditionPicker: true,
            enableEnsighten: true,
            enableFave: true,
            enableFollowNotify: false,
            enableJsmd: false,
            enableJumbotronAutoScroll: false,
            enableLazyLoadImages: true,
            enableLiveVideoGeoCheck: false,
            enableMobileWebFloatingPlayer: false,
            enableMyFinance: false,
            enableOmniture: true,
            enableOneClickToPlay: false,
            enableOneTapCustomFullscreen: false,
            enableOneTapToPlay: true,
            enableOneTrust: true,
            enableOutbrainOneTapToPlay: true,
            enableOptimizely: true,
            enableOutbrain: true,
            enableOutbrainVideoKPI: true,
            enableZoneOutbrain: true,
            enablePiiAdFilter: true,
            enableRefreshTimers: true,
            enablePushAlerts: false,
            enableSegmentAnalytics: true,
            enableShareButtons: true,
            enableSpark: false,
            enableTiming: true,
            enableTopAdScrollover: false,
            enableUserConsent: true,
            enableUserMessage: true,
            enableWatchLiveButton: true,
            enableVideoEndSlate: true,
            enableVideoExperienceUnification: true,
            enableVideoExperienceUnificationVideoPinning: true,
            enableVideoPinning: true,
            enableVisualRevenueVideo: false,
            enableWeather: true,
            enableZion: true
        };
        CNN.Chartbeat = {
            "MABsrc": "//static.chartbeat.com/js/chartbeat_mab.js",
            "mab": {
                "optClass": "optanon-category-2",
                "src": "//static.chartbeat.com/js/chartbeat_mab.js",
                "ucStates": ["performance"]
            },
            "optClass": "optanon-category-2",
            "src": "//static.chartbeat.com/js/chartbeat_video.js",
            "ucStates": ["performance"],
            "uid": 37612
        };
        CNN.Feeds = {
            "breakingNews": {
                "match": {
                    "verticals": ["-business", "*"]
                },
                "ttl": 120000,
                "url": "//data.cnn.com/jsonp/breaking_news/international.json"
            }
        };
        CNN.GoFreePreviewConfig = {
            "adobeEnvironment": "prod",
            "adobeSwfPath": "/.element/apps/cvp/3.0/swf/AccessEnablerLoader.swf",
            "aspenContext": "prev10",
            "endSlate": {
                "ctaText": "Sign in to your TV Service Provider",
                "messageText": "Keep watching CNN anytime, anywhere with CNNgo.\u003cbr/>Sign in to your TV service provider to get access to\u003cbr/>all of your favorite CNN shows and specials.",
                "titleText": "Your CNNgo preview has expired"
            },
            "errorSlate": {
                "defaultText": "An error has occurred. Click OK to refresh.",
                "subscriptionErrorText": "Your pay TV subscription does not include CNN. Please contact your TV Service Provider.",
                "troubleShootingText": "If error persists, see \u003ca href=\"//www.cnn.com/help/cnngo-troubleshooting.html\" class=\"troubleshooting-link\" target=\"_blank\">troubleshooting instructions.\u003c/a>"
            },
            "goSmartLink": "http://cnn.it/go",
            "helpLink": "//edition.cnn.com/help",
            "mvpdConfigUrl": "https://tvem.cdn.turner.com/v2/getConfig",
            "persistentCta": {
                "cobrandingText": "In partnership with",
                "countdownText": "Preview expires in",
                "persistentCtaText": "Experience"
            },
            "removeMinimumDimensionsTimeout": 1500,
            "softwareStatement": "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyY2QwZTZiZC01ZjFlLTRhMjItYTRhMC01Njg3YzNjOWI3NTEiLCJuYmYiOjE1MzcxOTA3NTcsImlzcyI6ImF1dGguYWRvYmUuY29tIiwiaWF0IjoxNTM3MTkwNzU3fQ.tBxO0aQhj8sy6RPiDMeThvvZgBkYRNVr1VseVCV3soJZdQJO7dWCcjeNghS8Qg2pc4u7vy6MQNtABcMU25BnCEBH8xKBf4HWb49NaFQLnmdXQULpfc1Uts5_CY0ALAtMgmfEdI_lzB9a80FuEiZ4VZcGxSpy7QTgZZivBqaq9hk71Yynhik9nsCv8pcHUKBkdq5W4lMyMGbDVGlCcHepmjj3yohzyc-4_gsfqtkaJHQBBAXSSqYVTKkg6bM-1GmKm2nBhjDBTHngM3vyA0YjpZ5dVsrGkRpGdfXLnCYB_9T91h-dYV8tle_V0HiLAn_8EVOmuQmKl7BzBJlERwo8JA",
            "temppass": "TempPass_CNN10min",
            "tokenService": {
                "appId": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNubi1jbm4td2ViLTk1am96MCIsIm5ldHdvcmsiOiJjbm4iLCJwbGF0Zm9ybSI6IndlYiIsInByb2R1Y3QiOiJjbm4iLCJpYXQiOjE1MjQ2ODQwMzB9.Uw8riFJwARLjeE35ffMwSa-37RNxCcQUEp2pqwG9TvM"
            }
        };
        CNN.Host = {
            assetPath: "https://edition.i.cdn.cnn.com/.a/2.171.2",
            alt: "",
            chrome: "//cdn.cnn.com/cnn",
            cssPath: "/css/2.171.2",
            domain: "https://edition.cnn.com",
            main: "edition.cnn.com",
            sponsorContent: "https://s3.amazonaws.com/cnn-sponsored-content",
            protocol: "https",
            intl: "https://edition.cnn.com",
            nowPlaying: "https://data.cnn.com",
            us: "https://us.cnn.com",
            www: "https://www.cnn.com"
        };
        CNN.ImageBreakpoints = {
            "full16x9": 1101,
            "large": 781,
            "medium": 461,
            "mini": 0,
            "small": 308,
            "xsmall": 221
        };
        CNN.JumbotronConfig = {
            "autoScrollEnabled": false,
            "autoScrollInterval": 8000,
            "pauseAutoscrollWhenInvisible": true,
            "pauseVideoWhenInvisible": true,
            "responsiveContainerConstraints": {
                "mobile": 480,
                "tablet": 800,
                "desktop": 2500
            },
            "scrollPausesJumbotronInterval": 5000
        };
        CNN.LazyLoad = true;
        CNN.Mailchimp = {
            "section": {
                "media": {
                    "enableFooter": false,
                    "enableInclude": true
                },
                "entertainment": {
                    "enableFooter": false,
                    "enableInclude": true
                },
                "health": {
                    "enableFooter": false,
                    "enableInclude": true
                },
                "homepage": {
                    "enableFooter": false,
                    "enableInclude": false
                },
                "intl_homepage": {
                    "enableFooter": false,
                    "enableInclude": false
                },
                "living": {
                    "enableFooter": false,
                    "enableInclude": true
                },
                "politics": {
                    "enableFooter": false,
                    "enableInclude": true
                },
                "tech": {
                    "enableFooter": false,
                    "enableInclude": true
                },
                "travel": {
                    "enableFooter": false,
                    "enableInclude": true
                },
                "us": {
                    "enableFooter": false,
                    "enableInclude": true
                },
                "world": {
                    "enableFooter": false,
                    "enableInclude": true
                },
                "specials": {
                    "enableFooter": false,
                    "enableInclude": true
                }
            }
        };
        CNN.MarketsConfig = {
            "converterService": "/common/modules/iframe/currencyConverter.asp",
            "lookupService": "/services/cnndotcom/lookup.asp",
            "serviceHost": "//markets.money.cnn.com",
            "graphqlURI": "//markets.money.cnn.io/graphql"
        };
        CNN.MetaRefreshRate = 1800;
        CNN.newsLetterConfig = {
            "title": "CNN Newsletters",
            "EUDisabledText": "We are currently unavailable in your region but actively exploring solutions to make our content available to you again.",
            "description": "CNN News, delivered. Select from our newsletters below and enter your email to subscribe.",
            "zoneName": "Content Newsletters",
            "selectedButtonText": "Added",
            "submitButtonText": "Subscribe",
            "submittedButtonText": "Submitted",
            "mailchimpUrl": "https://bulletin.cnn.io/api/v1/subscribe/",
            "confirmation": {
                "title": "Thanks For Signing Up!",
                "description": "Once your request has been validated, we'll start delivering your newsletter.\u003cbr/>Thanks for choosing CNN Newsletters",
                "successIcon": "//cdn.cnn.com/cnn/.element/img/4.0/subscription/checkmark.png",
                "alsoLike": "You might also like this",
                "signMeUp": "Sign Me Up",
                "noThanksButtonText": "View today's top stories",
                "optIntelligencePID": "25413608"
            },
            "values": [{
                "name": "BreakingNews",
                "subTitle": "Breaking News: U.S. Edition",
                "mailchimpId": "textbreakingnews",
                "newsletterID": "textbreakingnews",
                "isGigya": true,
                "subImage": "//cdn.cnn.com/cnn/.element/img/4.0/subscription/breaking-news-alert.jpg",
                "buttonText": "Click Here to Add Now.",
                "description": "We cover the world to bring you the most important moments at home and abroad – and CNN's best storytelling – through email alerts 24/7."
            }, {
                "name": "Five Things",
                "subTitle": "Up to Speed. Out The Door.",
                "mailchimpId": "6da287d761",
                "newsletterID": "6da287d761",
                "subImage": "//cdn.cnn.com/cnn/.element/img/4.0/subscription/fivethings.jpg",
                "buttonText": "Know in 5 and Add Now.",
                "description": "You give us 5 minutes and we'll brief you on all the news and buzz that people will be talking about."
            }, {
                "name": "Fareed's Global Briefing",
                "subTitle": "Global insights and analysis.",
                "mailchimpId": "6f2e93382a",
                "newsletterID": "6f2e93382a",
                "subImage": "//cdn.cnn.com/cnn/.element/img/4.0/subscription/Fareed_SubscriptionHub.jpg",
                "buttonText": "Add Now and Be Informed.",
                "description": "Insights, analysis and must reads from CNN's Fareed Zakaria and the Global Public Square team."
            }, {
                "name": "Before the Bell",
                "subTitle": "Before markets open. Start your day smart.",
                "mailchimpId": "1d49e2a168",
                "newsletterID": "1d49e2a168",
                "subImage": "//cdn.cnn.com/cnnnext/dam/assets/190814135221-20190814-before-the-bell-promo-image-large-169.png",
                "buttonText": "Sign up for market insights",
                "description": "CNN Business' expert reporters lead you through the latest news in the fast-changing world of global markets, with sharp insights, essential context, and exclusive interviews so you can make the most of the business day ahead. Daily newsletter, Sunday through Friday."
            }, {
                "name": "CNN's Meanwhile in America",
                "subTitle": "The state of the States for the rest of the world.",
                "mailchimpId": "8638c1ac9c",
                "newsletterID": "8638c1ac9c",
                "subImage": "//cdn.cnn.com/cnn/.element/img/4.0/subscription/meanwhile-in-america.jpg",
                "buttonText": "Add now and be informed.",
                "description": "A daily analysis of US politics for global readers. CNN’s White House reporter Stephen Collinson explains how we got here, what it means — and where America and the world are heading next."
            }, {
                "name": "CNN Money Markets Now",
                "subTitle": "Global markets snapshot. In your inbox. Every afternoon.",
                "mailchimpId": "c58d95e6d3",
                "newsletterID": "c58d95e6d3",
                "subImage": "//cdn.cnn.com/cnn/.element/img/4.0/subscription/markets-now-subscription.jpg",
                "buttonText": "Add now and invest wisely.",
                "description": "Every weekday afternoon, get a snapshot of global markets, along with key company, economic, and world news of the day."
            }, {
                "name": "Great Big Story",
                "subTitle": "Feed Your Feed.",
                "mailchimpId": "e874dc92ae",
                "newsletterID": "e874dc92ae",
                "subImage": "//cdn.cnn.com/cnn/.element/img/4.0/subscription/greatbigstorycnnnewsletter.jpg",
                "buttonText": "Add and Be Amazed.",
                "description": "We call them great because they are. Stories so big, so moving or just plain weird, it takes a globetrotting team of curiosity-fueled videographers just to capture it."
            }, {
                "name": "Provoke/Persuade",
                "subTitle": "The strongest, smartest opinion takes of the week.",
                "mailchimpId": "c892c19280",
                "newsletterID": "c892c19280",
                "subImage": "//cdn.cnn.com/cnn/.element/img/4.0/subscription/provoke_persuade.jpg",
                "buttonText": "Hear all sides. Add now.",
                "description": "Each weekend, the CNN Opinion team will keep you updated on the strongest and smartest opinions of the week. We'll wrap up our favorites and highlight some of the best offerings elsewhere."
            }, {
                "name": "The Good Stuff",
                "subTitle": "A newsletter for the good in life.",
                "mailchimpId": "4cbecb3309",
                "newsletterID": "4cbecb3309",
                "subImage": "//cdn.cnn.com/cnn/.element/img/4.0/subscription/goodstuff_340x205.jpg",
                "buttonText": "Brighten your day. Add now.",
                "description": "Take a break from the heavy stuff with this weekly collection of the best uplifting, inspiring, humanity-affirming news."
            }]
        };
        CNN.MobileWebFloatingPlayer = {
            "enablePinnedDuringPause": false,
            "transition": {
                "style": "slide",
                "duration": 750
            }
        };
        CNN.OneClick = {
            "bigSkyPollDuration": 15000,
            "onboarding": {
                "enabled": true,
                "firstVisit": {
                    "expiry": 99999,
                    "overlayAnimationTime": 1500,
                    "overlayEnabled": false,
                    "sidePanelAnimationTime": 1000,
                    "tooltipAnimationTime": 1500,
                    "tooltipEnabled": true
                },
                "partialOnboarding": {
                    "enabled": true,
                    "tooltipHoverDuration": 3000
                },
                "secondVisit": {
                    "expiry": 99999,
                    "minTimeAfterFirstVisit": 30000,
                    "tooltipEnabled": true,
                    "tooltipHoverTime": 500
                },
                "tooltipPollInterval": 1000
            },
            "playlists": [{
                "id": "moreVideo",
                "title": "More Video",
                "baseThumbnailUrl": "",
                "collapsible": true,
                "collapsedLength": 3,
                "enabled": true,
                "thumbnailSize": "small",
                "urlTemplate": "/data/ocs/playlist/videos/{{videoId}}:*/views/json/video-collection.json",
                "isDefault": true
            }, {
                "id": "topNews",
                "title": "Today's Top News",
                "baseThumbnailUrl": "",
                "collapsible": false,
                "collapsedLength": 3,
                "enabled": true,
                "thumbnailSize": "large",
                "urlTemplate": "/playlist/top-news-videos/index.json",
                "isDefault": false
            }],
            "sidePanel": {
                "equalizer": true,
                "expandBrowserNotifier": {
                    "enabled": true,
                    "dismissTime": 4000,
                    "timeToPopup": 1000
                },
                "minWidthToGetSidePanel": 1320,
                "sharebar": true,
                "theme": "light",
                "userPathing": {
                    "enabled": true,
                    "expiry": 99999
                }
            },
            "videoPlayer": {
                "enabled": true,
                "theaterModeEnabled": true,
                "theaterMode": {
                    "enableScalingVideoPlayer": true,
                    "paddingOfPlayerFromContent": 20,
                    "theaterIconPositioningRight": 19,
                    "scrollingThreshold": 50,
                    "videoPlayerMinHeight": 420
                },
                "timerToHideExitTheaterIcon": 1500,
                "tooltips": {
                    "enabled": true,
                    "text": {
                        "enterTheaterModeIcon": "Expand",
                        "exitTheaterModeIcon": "Collapse",
                        "muteIcon": "Mute",
                        "pauseIcon": "Pause",
                        "playIcon": "Play",
                        "unmuteIcon": "Unmute"
                    }
                }
            }
        };
        CNN.OneTap = {
            "carousel": {
                "animationTime": 1000,
                "enabled": true
            },
            "live": {
                "enabled": true,
                "enabledLiveStreams": ["cvplive/cvpstream0", "cvplive/cvpstream1", "cvplive/cvpstream2", "cvplive/cvpstream3", "cvplive/cvpstream4"]
            },
            "shareIcons": {
                "enabled": true,
                "enableWhatsappButton": true
            },
            "timer": {
                "duration": 10,
                "enabled": true
            },
            "transition": {
                "animationTime": 250,
                "duration": 500,
                "enabled": true,
                "fadeout": 200,
                "positionFromViewPort": 40,
                "theme": "light"
            }
        };
        CNN.OptimizelyConfig = {
            "optClass": "optanon-category-2-3",
            "ucStates": ["performance", "personalization"],
            "url": "/optimizelyjs/128727546.js"
        };
        CNN.OutbrainVideoKPISrc = "";
        CNN.ToggleOutbrain = {
            "entertainment": {
                "zone": {
                    "adId": "ad_rect_btf_02",
                    "outBrainId": "AR_38"
                }
            },
            "health": {
                "zone": {
                    "adId": "ad_rect_atf_01",
                    "outBrainId": "SF_8"
                }
            },
            "living": {
                "zone": {
                    "adId": "ad_rect_atf_01",
                    "outBrainId": "SF_9"
                }
            },
            "politics": {
                "zone": {
                    "adId": "ad_rect_atf_01",
                    "outBrainId": "SF_6"
                }
            },
            "tech": {
                "zone": {
                    "adId": "ad_rect_atf_01",
                    "outBrainId": "SF_7"
                }
            },
            "travel": {
                "zone": {
                    "adId": "ad_rect_atf_01",
                    "outBrainId": "SF_10"
                }
            },
            "us": {
                "zone": {
                    "adId": "ad_rect_atf_01",
                    "outBrainId": "SF_4"
                }
            },
            "world": {
                "zone": {
                    "adId": "ad_rect_atf_01",
                    "outBrainId": "SF_5"
                }
            }
        };
        CNN.PushAlertsConfig = {
            "optClass": "optanon-category-3",
            "ucStates": ["personalization"]
        };
        CNN.adTimers = {};
        CNN.eventTimers = {};
        CNN.QuantCast = {
            enableLabels: false
        };
        CNN.rightRailConfig = {
            "longArticle": {
                "articleLength": 6400,
                "enableAdLock": true,
                "epic": [{
                    "adId": "ad_rect_btf_01",
                    "columnPosition": 1,
                    "position": "desktop",
                    "zonePosition": 1
                }],
                "outbrain": {
                    "widgetId": "AR_42"
                }
            },
            "shortArticle": {
                "epic": [{
                    "adId": "ad_rect_atf_03",
                    "columnPosition": 0,
                    "position": "desktop",
                    "zonePosition": 3
                }]
            },
            "pinningThreshold": 2000
        };
        CNN.Search = {
            queryUrl: "http://searchapp.cnn.com/search/query.jsp",
            searchUrl: "/search/"
        };
        CNN.SectionConfig = {
            "desktop": {
                "section": "international",
                "contexts": {
                    "default": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_misc_default_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_misc_default_t1",
                            "const-article-inpage": "edition.cnn.com_misc_default_inpage",
                            "const-article-pagetop": "edition.cnn.com_misc_default_t1",
                            "const-video-leaf": "edition.cnn.com_misc_default_t1"
                        },
                        "adsection": "edition.cnn.com_misc_default_t1",
                        "analytics": {
                            "jsmdNewAPI": {
                                "metadata": {}
                            }
                        },
                        "autostart": false,
                        "cvpContext": "expansion",
                        "cvpNetwork": "cnn-test",
                        "cvpProfile": "expansion",
                        "height": "100%",
                        "iframeConfig": {
                            "iframeHost": "//edition.cnn.com",
                            "iframeHtml": "/.element/widget/video/videoapi/html/latest/iframeclient.html",
                            "relativeUrlHosts": ["localhost.cnn.com:3000", "localhost.next.cnn.com", "localhost.next.cnn.com:8080", "edition.dev.next.cnn.com", "edition.enable.next.cnn.com", "edition.politics.next.cnn.com", "edition.sweet.next.cnn.com", "edition.terra.next.cnn.com", "edition.video.next.cnn.com", "edition.etrain.next.cnn.com", "edition.stage.next.cnn.com", "edition.ref.next.cnn.com"]
                        },
                        "type": "embedded",
                        "width": "100%"
                    },
                    "africa": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_africa_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_africa_t1",
                            "const-article-inpage": "edition.cnn.com_africa_inpage",
                            "const-article-pagetop": "edition.cnn.com_africa_t1",
                            "const-video-leaf": "edition.cnn.com_africa_t1"
                        },
                        "adsection": "edition.cnn.com_africa_misc",
                        "autostart": false
                    },
                    "americas": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_latinamerica_main_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_latinamerica_main_t1",
                            "const-article-inpage": "edition.cnn.com_latinamerica_main_inpage",
                            "const-article-pagetop": "edition.cnn.com_latinamerica_main_t1",
                            "const-video-leaf": "edition.cnn.com_latinamerica_main_t1"
                        },
                        "adsection": "edition.cnn.com_latinamerica_misc",
                        "autostart": false
                    },
                    "architecture": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_style_architecture_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_style_architecture_t1",
                            "const-article-inpage": "edition.cnn.com_style_architecture_inpage",
                            "const-article-pagetop": "edition.cnn.com_style_architecture_t1",
                            "const-video-leaf": "edition.cnn.com_style_architecture_t1"
                        },
                        "adsection": "edition.cnn.com_style_architecture_misc"
                    },
                    "arts": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_style_arts_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_style_arts_t1",
                            "const-article-inpage": "edition.cnn.com_style_arts_inpage",
                            "const-article-pagetop": "edition.cnn.com_style_arts_t1",
                            "const-video-leaf": "edition.cnn.com_style_arts_t1"
                        },
                        "adsection": "edition.cnn.com_style_arts_misc"
                    },
                    "asia": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_asia_main_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_asia_t1",
                            "const-article-inpage": "edition.cnn.com_asia_main_inpage",
                            "const-article-pagetop": "edition.cnn.com_asia_t1",
                            "const-video-leaf": "edition.cnn.com_asia_t1"
                        },
                        "adsection": "edition.cnn.com_asia_misc",
                        "autostart": false
                    },
                    "autos": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_style_autos_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_style_autos_t1",
                            "const-article-inpage": "edition.cnn.com_style_autos_inpage",
                            "const-article-pagetop": "edition.cnn.com_style_autos_t1",
                            "const-video-leaf": "edition.cnn.com_style_autos_t1"
                        },
                        "adsection": "edition.cnn.com_style_autos_misc"
                    },
                    "aviation": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_travel_aviation_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_travel_aviation_t1",
                            "const-article-inpage": "edition.cnn.com_travel_aviation_inpage",
                            "const-article-pagetop": "edition.cnn.com_travel_aviation_t1",
                            "const-video-leaf": "edition.cnn.com_travel_aviation_t1"
                        },
                        "adsection": "edition.cnn.com_travel_aviation_misc"
                    },
                    "before-the-bell": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_investing_beforethebell_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_investing_beforethebell_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_investing_beforethebell_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_investing_beforethebell_t1",
                            "const-video-leaf": "edition.cnnbusiness_investing_beforethebell_videopage"
                        },
                        "adsection": "edition.cnnbusiness_investing_beforethebell_misc"
                    },
                    "bestoftv": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_bestoftv_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_bestoftv_t1",
                            "const-article-inpage": "edition.cnn.com_bestoftv_inpage",
                            "const-article-pagetop": "edition.cnn.com_bestoftv_t1",
                            "const-video-leaf": "edition.cnn.com_bestoftv_t1"
                        },
                        "adsection": "edition.cnn.com_bestoftv_misc"
                    },
                    "biz-frontiers": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_business_bizfrontiers_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_business_bizfrontiers_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_business_bizfrontiers_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_business_bizfrontiers_t1",
                            "const-video-leaf": "edition.cnnbusiness_business_bizfrontiers_videopage"
                        },
                        "adsection": "edition.cnnbusiness_business_bizfrontiers_misc"
                    },
                    "biz-leisure": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_success_bizleisure_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_success_bizleisure_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_success_bizleisure_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_success_bizleisure_t1",
                            "const-video-leaf": "edition.cnnbusiness_success_bizleisure_videopage"
                        },
                        "adsection": "edition.cnnbusiness_success_bizleisure_misc"
                    },
                    "boss-files": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_success_bossfiles_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_success_bossfiles_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_success_bossfiles_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_success_bossfiles_t1",
                            "const-video-leaf": "edition.cnnbusiness_success_bossfiles_videopage"
                        },
                        "adsection": "edition.cnnbusiness_success_bossfiles_misc"
                    },
                    "business": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_business_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_business_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_business_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_business_t1",
                            "const-video-leaf": "edition.cnnbusiness_business_videopage"
                        },
                        "adsection": "edition.cnnbusiness_business_misc",
                        "autostart": true
                    },
                    "business-center-piece": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_business_centerpiece_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_business_centerpiece_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_business_centerpiece_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_business_centerpiece_t1",
                            "const-video-leaf": "edition.cnnbusiness_business_centerpiece_videopage"
                        },
                        "adsection": "edition.cnnbusiness_business_centerpiece_misc"
                    },
                    "cars": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_success_cars_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_success_cars_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_success_cars_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_success_cars_t1",
                            "const-video-leaf": "edition.cnnbusiness_success_cars_videopage"
                        },
                        "adsection": "edition.cnnbusiness_success_cars_misc"
                    },
                    "cnnmoney": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_cnnmoney_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_cnnmoney_t1",
                            "const-article-inpage": "edition.cnn.com_cnnmoney_inpage",
                            "const-article-pagetop": "edition.cnn.com_cnnmoney_t1",
                            "const-video-leaf": "edition.cnn.com_cnnmoney_t1"
                        },
                        "adsection": "edition.cnn.com_cnnmoney_misc"
                    },
                    "crime": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_crime_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_crime_t1",
                            "const-article-inpage": "edition.cnn.com_crime_inpage",
                            "const-article-pagetop": "edition.cnn.com_crime_t1",
                            "const-video-leaf": "edition.cnn.com_crime_t1"
                        },
                        "adsection": "edition.cnn.com_crime_misc"
                    },
                    "design": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_style_design_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_style_design_t1",
                            "const-article-inpage": "edition.cnn.com_style_design_inpage",
                            "const-article-pagetop": "edition.cnn.com_style_design_t1",
                            "const-video-leaf": "edition.cnn.com_style_design_t1"
                        },
                        "adsection": "edition.cnn.com_style_design_misc"
                    },
                    "destinations": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_travel_destinations_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_travel_destinations_carousel_t1",
                            "const-article-inpage": "edition.cnn.com_travel_destinations_inpage",
                            "const-article-pagetop": "edition.cnn.com_travel_destinations_t1",
                            "const-video-leaf": "edition.cnn.com_travel_destinations_videopage"
                        },
                        "adsection": "edition.cnn.com_travel_destinations_misc"
                    },
                    "economy": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_economy_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_economy_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_economy_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_economy_t1",
                            "const-video-leaf": "edition.cnnbusiness_economy_videopage"
                        },
                        "adsection": "edition.cnnbusiness_economy_misc"
                    },
                    "energy": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_energy_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_energy_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_energy_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_energy_t1",
                            "const-video-leaf": "edition.cnnbusiness_energy_videopage"
                        },
                        "adsection": "edition.cnnbusiness_energy_misc"
                    },
                    "entertainment": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_entertainment_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_entertainment_t1",
                            "const-article-inpage": "edition.cnn.com_entertainment_inpage",
                            "const-article-pagetop": "edition.cnn.com_entertainment_t1",
                            "const-video-leaf": "edition.cnn.com_entertainment_t1"
                        },
                        "adsection": "edition.cnn.com_entertainment_section_misc"
                    },
                    "europe": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_europe_main_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_europe_main_t1",
                            "const-article-inpage": "edition.cnn.com_europe_main_inpage",
                            "const-article-pagetop": "edition.cnn.com_europe_main_t1",
                            "const-video-leaf": "edition.cnn.com_europe_main_t1"
                        },
                        "adsection": "edition.cnn.com_europe_misc"
                    },
                    "fashion": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_style_fashion_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_style_fashion_t1",
                            "const-article-inpage": "edition.cnn.com_style_fashion_inpage",
                            "const-article-pagetop": "edition.cnn.com_style_fashion_t1",
                            "const-video-leaf": "edition.cnn.com_style_fashion_t1"
                        },
                        "adsection": "edition.cnn.com_style_fashion_misc"
                    },
                    "foodanddrink": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_travel_foodanddrink_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_travel_foodanddrink_t1",
                            "const-article-inpage": "edition.cnn.com_travel_foodanddrink_inpage",
                            "const-article-pagetop": "edition.cnn.com_travel_foodanddrink_t1",
                            "const-video-leaf": "edition.cnn.com_travel_foodanddrink_t1"
                        },
                        "adsection": "edition.cnn.com_travel_foodanddrink_misc"
                    },
                    "football": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_worldsport_football_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_worldsport_football_t1",
                            "const-article-inpage": "edition.cnn.com_worldsport_football_inpage",
                            "const-article-pagetop": "edition.cnn.com_worldsport_football_t1",
                            "const-video-leaf": "edition.cnn.com_worldsport_football_t1"
                        },
                        "adsection": "edition.cnn.com_worldsport_football_misc"
                    },
                    "fresh-money": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_success_freshmoney_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_success_freshmoney_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_success_freshmoney_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_success_freshmoney_t1",
                            "const-video-leaf": "edition.cnnbusiness_success_freshmoney_videopage"
                        },
                        "adsection": "edition.cnnbusiness_success_freshmoney_misc"
                    },
                    "gadget": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_tech_gadget_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_tech_gadget_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_tech_gadget_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_tech_gadget_t1",
                            "const-video-leaf": "edition.cnnbusiness_tech_gadget_videopage"
                        },
                        "adsection": "edition.cnnbusiness_tech_gadget_misc"
                    },
                    "general": {
                        "adsection": "edition.cnn.com_videos_cinema_mode"
                    },
                    "general_iframe": {
                        "adsection": "edition.cnn.com_videos_cinema_mode",
                        "analytics": {
                            "jsmdNewAPI": {}
                        },
                        "type": "iframe"
                    },
                    "general_noads": {
                        "autostart": false,
                        "cvpAdPolicyContext": "adFree"
                    },
                    "golf": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_worldsport_golf_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_worldsport_golf_t1",
                            "const-article-inpage": "edition.cnn.com_worldsport_golf_inpage",
                            "const-article-pagetop": "edition.cnn.com_worldsport_golf_t1",
                            "const-video-leaf": "edition.cnn.com_worldsport_golf_t1"
                        },
                        "adsection": "edition.cnn.com_worldsport_worldsport_golf_misc"
                    },
                    "health": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_health_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_health_t1",
                            "const-article-inpage": "edition.cnn.com_health_inpage",
                            "const-article-pagetop": "edition.cnn.com_health_t1",
                            "const-video-leaf": "edition.cnn.com_health_t1"
                        },
                        "adsection": "edition.cnn.com_health_section_misc"
                    },
                    "homes": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_success_homes_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_success_homes_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_success_homes_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_success_homes_t1",
                            "const-video-leaf": "edition.cnnbusiness_success_homes_videopage"
                        },
                        "adsection": "edition.cnnbusiness_success_homes_misc"
                    },
                    "hotels": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_travel_hotels_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_travel_hotels_t1",
                            "const-article-inpage": "edition.cnn.com_travel_hotels_inpage",
                            "const-article-pagetop": "edition.cnn.com_travel_hotels_t1",
                            "const-video-leaf": "edition.cnn.com_travel_hotels_t1"
                        },
                        "adsection": "edition.cnn.com_travel_hotels_misc"
                    },
                    "impact-investing": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_investing_impactinvesting_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_investing_impactinvesting_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_investing_impactinvesting_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_investing_impactinvesting_t1",
                            "const-video-leaf": "edition.cnnbusiness_investing_impactinvesting_videopage"
                        },
                        "adsection": "edition.cnnbusiness_investing_impactinvesting_misc"
                    },
                    "india": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_asia_india_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_asia_india_t1",
                            "const-article-inpage": "edition.cnn.com_asia_india_inpage",
                            "const-article-pagetop": "edition.cnn.com_asia_india_t1",
                            "const-video-leaf": "edition.cnn.com_asia__videopage"
                        },
                        "adsection": "edition.cnn.com_asia_india_misc"
                    },
                    "innovate": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_tech_innovate_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_tech_innovate_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_tech_innovate_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_tech_innovate_t1",
                            "const-video-leaf": "edition.cnnbusiness_tech_innovate_videopage"
                        },
                        "adsection": "edition.cnnbusiness_tech_innovate_misc"
                    },
                    "innovative-cities": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_tech_innovativecities_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_tech_innovativecities_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_tech_innovativecities_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_tech_innovativecities_t1",
                            "const-video-leaf": "edition.cnnbusiness_tech_innovativecities_videopage"
                        },
                        "adsection": "edition.cnnbusiness_tech_innovativecities_misc"
                    },
                    "investing": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_investing_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_investing_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_investing_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_investing_t1",
                            "const-video-leaf": "edition.cnnbusiness_investing_videopage"
                        },
                        "adsection": "edition.cnnbusiness_investing_misc"
                    },
                    "justice": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_justice_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_justice_t1",
                            "const-article-inpage": "edition.cnn.com_justice_inpage",
                            "const-article-pagetop": "edition.cnn.com_justice_t1",
                            "const-video-leaf": "edition.cnn.com_justice_t1"
                        },
                        "adsection": "edition.cnn.com_justice_misc"
                    },
                    "living": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_living_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_living_t1",
                            "const-article-inpage": "edition.cnn.com_living_inpage",
                            "const-article-pagetop": "edition.cnn.com_living_t1",
                            "const-video-leaf": "edition.cnn.com_living_t1"
                        },
                        "adsection": "edition.cnn.com_living_misc"
                    },
                    "luxury": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_style_luxury_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_style_luxury_t1",
                            "const-article-inpage": "edition.cnn.com_style_luxury_inpage",
                            "const-article-pagetop": "edition.cnn.com_style_luxury_t1",
                            "const-video-leaf": "edition.cnn.com_style_luxury_t1"
                        },
                        "adsection": "edition.cnn.com_style_luxury_misc"
                    },
                    "markets": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_markets_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_markets_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_markets_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_markets_t1",
                            "const-video-leaf": "edition.cnnbusiness_markets_videopage"
                        },
                        "adsection": "edition.cnnbusiness_markets_misc"
                    },
                    "markets-now": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_markets_marketsnow_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_markets_marketsnow_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_markets_marketsnow_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_markets_marketsnow_t1",
                            "const-video-leaf": "edition.cnnbusiness_markets_marketsnow_videopage"
                        },
                        "adsection": "edition.cnnbusiness_markets_marketsnow_misc"
                    },
                    "media": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_media_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_media_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_media_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_media_t1",
                            "const-video-leaf": "edition.cnnbusiness_media_videopage"
                        },
                        "adsection": "edition.cnnbusiness_media_misc"
                    },
                    "middleeast": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_middleeast_main_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_middleeast_main_t1",
                            "const-article-inpage": "edition.cnn.com_middleeast_main_inpage",
                            "const-article-pagetop": "edition.cnn.com_middleeast_main_t1",
                            "const-video-leaf": "edition.cnn.com_middleeast_main_t1"
                        },
                        "adsection": "edition.cnn.com_middleeast_misc"
                    },
                    "mission-ahead": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_tech_missionahead_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_tech_missionahead_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_tech_missionahead_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_tech_missionahead_t1",
                            "const-video-leaf": "edition.cnnbusiness_tech_missionahead_videopage"
                        },
                        "adsection": "edition.cnnbusiness_tech_missionahead_misc"
                    },
                    "money-moves": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_success_moneymoves_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_success_moneymoves_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_success_moneymoves_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_success_moneymoves_t1",
                            "const-video-leaf": "edition.cnnbusiness_success_moneymoves_videopage"
                        },
                        "adsection": "edition.cnnbusiness_success_moneymoves_misc"
                    },
                    "motorsport": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_worldsport_motorsport_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_worldsport_motorsport_t1",
                            "const-article-inpage": "edition.cnn.com_worldsport_motorsport_inpage",
                            "const-article-pagetop": "edition.cnn.com_worldsport_motorsport_t1",
                            "const-video-leaf": "edition.cnn.com_worldsport_motorsport_t1"
                        },
                        "adsection": "edition.cnn.com_worldsport_motorsport_misc"
                    },
                    "on-germany": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_business_ongermany_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_business_ongermany_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_business_ongermany_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_business_ongermany_t1",
                            "const-video-leaf": "edition.cnnbusiness_business_ongermany_videopage"
                        },
                        "adsection": "edition.cnnbusiness_business_ongermany_misc"
                    },
                    "opinion": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_opinion_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_opinion_t1",
                            "const-article-inpage": "edition.cnn.com_opinion_inpage",
                            "const-article-pagetop": "edition.cnn.com_opinion_t1",
                            "const-video-leaf": "edition.cnn.com_opinion_t1"
                        },
                        "adsection": "edition.cnn.com_opinions_misc"
                    },
                    "opinions": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_opinion_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_opinion_t1",
                            "const-article-inpage": "edition.cnn.com_opinion_inpage",
                            "const-article-pagetop": "edition.cnn.com_opinion_t1",
                            "const-video-leaf": "edition.cnn.com_opinion_t1"
                        },
                        "adsection": "edition.cnn.com_opinions_misc"
                    },
                    "passion-to-portfolio": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_business_passiontoportfolio_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_business_passiontoportfolio_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_business_passiontoportfolio_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_business_passiontoportfolio_t1",
                            "const-video-leaf": "edition.cnnbusiness_business_passiontoportfolio_videopage"
                        },
                        "adsection": "edition.cnnbusiness_business_passiontoportfolio_misc"
                    },
                    "perspectives": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_perspectives_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_perspectives_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_perspectives_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_perspectives_t1",
                            "const-video-leaf": "edition.cnnbusiness_perspectives_videopage"
                        },
                        "adsection": "edition.cnnbusiness_perspectives_misc"
                    },
                    "play": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_travel_play_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_travel_play_carousel_t1",
                            "const-article-inpage": "edition.cnn.com_travel_play_inpage",
                            "const-article-pagetop": "edition.cnn.com_travel_play_t1",
                            "const-video-leaf": "edition.cnn.com_travel_play_videopage"
                        },
                        "adsection": "edition.cnn.com_travel_play_misc"
                    },
                    "politics": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_politics_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_politics_t1",
                            "const-article-inpage": "edition.cnn.com_politics_inpage",
                            "const-article-pagetop": "edition.cnn.com_politics_t1",
                            "const-video-leaf": "edition.cnn.com_politics_t1"
                        },
                        "adsection": "edition.cnn.com_politics_section_misc"
                    },
                    "reliable-sources": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_media_reliablesources_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_media_reliablesources_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_media_reliablesources_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_media_reliablesources_t1",
                            "const-video-leaf": "edition.cnnbusiness_media_reliablesources_videopage"
                        },
                        "adsection": "edition.cnnbusiness_media_reliablesources_misc"
                    },
                    "sailing": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_whatson_mainsail_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_whatson_mainsail_t1",
                            "const-article-inpage": "edition.cnn.com_whatson_mainsail_inpage",
                            "const-article-pagetop": "edition.cnn.com_whatson_mainsail_t1",
                            "const-video-leaf": "edition.cnn.com_whatson_mainsail_t1"
                        },
                        "adsection": "edition.cnn.com_whatson_mainsail_misc",
                        "autostart": true
                    },
                    "showbiz": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_entertainment_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_entertainment_t1",
                            "const-article-inpage": "edition.cnn.com_entertainment_inpage",
                            "const-article-pagetop": "edition.cnn.com_entertainment_t1",
                            "const-video-leaf": "edition.cnn.com_entertainment_t1"
                        },
                        "adsection": "edition.cnn.com_entertainment_misc"
                    },
                    "skiing": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_specialreports_alpineedge_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_specialreports_alpineedge_t1",
                            "const-article-inpage": "edition.cnn.com_specialreports_alpineedge_inpage",
                            "const-article-pagetop": "edition.cnn.com_specialreports_alpineedge_t1",
                            "const-video-leaf": "edition.cnn.com_specialreports_alpineedge_t1"
                        },
                        "adsection": "edition.cnn.com_specialreports_alpineedge_misc",
                        "autostart": true
                    },
                    "spanish": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "cnnespanol.cnn.com_spanish_default_inpage",
                            "const-article-carousel-pagetop": "cnnespanol.cnn.com_spanish_default_t1",
                            "const-article-inpage": "cnnespanol.cnn.com_spanish_default_inpage",
                            "const-article-pagetop": "cnnespanol.cnn.com_spanish_default_t1",
                            "const-video-leaf": "cnnespanol.cnn.com_spanish_default_t1"
                        },
                        "adsection": "cnnespanol.cnn.com_spanish_default_misc",
                        "autostart": true
                    },
                    "spanish_shows": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "cnnespanol.cnn.com_spanish_shows_inpage",
                            "const-article-carousel-pagetop": "cnnespanol.cnn.com_spanish_shows_t1",
                            "const-article-inpage": "cnnespanol.cnn.com_spanish_shows_inpage",
                            "const-article-pagetop": "cnnespanol.cnn.com_spanish_shows_t1",
                            "const-video-leaf": "cnnespanol.cnn.com_spanish_shows_t1"
                        },
                        "adsection": "cnnespanol.cnn.com_spanish_shows_misc",
                        "autostart": true
                    },
                    "spanish_specials": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "cnnespanol.cnn.com_spanish_specials_inpage",
                            "const-article-carousel-pagetop": "cnnespanol.cnn.com_spanish_specials_t1",
                            "const-article-inpage": "cnnespanol.cnn.com_spanish_specials_inpage",
                            "const-article-pagetop": "cnnespanol.cnn.com_spanish_specials_t1",
                            "const-video-leaf": "cnnespanol.cnn.com_spanish_specials_t1"
                        },
                        "adsection": "cnnespanol.cnn.com_spanish_specials_misc",
                        "autostart": true
                    },
                    "sport": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_us_worldsport_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_us_worldsport_t1",
                            "const-article-inpage": "edition.cnn.com_us_worldsport_inpage",
                            "const-article-pagetop": "edition.cnn.com_us_worldsport_t1",
                            "const-video-leaf": "edition.cnn.com_us_worldsport_t1"
                        },
                        "adsection": "edition.cnn.com_worldsport_misc"
                    },
                    "stay": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_travel_stay_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_travel_stay_carousel_t1",
                            "const-article-inpage": "edition.cnn.com_travel_stay_inpage",
                            "const-article-pagetop": "edition.cnn.com_travel_stay_t1",
                            "const-video-leaf": "edition.cnn.com_travel_stay_videopage"
                        },
                        "adsection": "edition.cnn.com_travel_stay_misc"
                    },
                    "style": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_style_t1",
                            "const-article-carousel-pagetop": "edition.cnn.com_style_inpage",
                            "const-article-inpage": "edition.cnn.com_style_inpage",
                            "const-article-pagetop": "edition.cnn.com_style_t1",
                            "const-video-leaf": "edition.cnn.com_style_t1"
                        },
                        "adsection": "edition.cnn.com_style_misc"
                    },
                    "success": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_success_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_success_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_success_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_success_t1",
                            "const-video-leaf": "edition.cnnbusiness_success_videopage"
                        },
                        "adsection": "edition.cnnbusiness_success_misc"
                    },
                    "tech": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_tech_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_tech_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_tech_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_tech_t1",
                            "const-video-leaf": "edition.cnnbusiness_tech_videopage"
                        },
                        "adsection": "edition.cnnbusiness_tech_misc"
                    },
                    "technology": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_technology_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_technology_t1",
                            "const-article-inpage": "edition.cnn.com_technology_inpage",
                            "const-article-pagetop": "edition.cnn.com_technology_t1",
                            "const-video-leaf": "edition.cnn.com_technology_t1"
                        },
                        "adsection": "edition.cnn.com_technology_misc",
                        "autostart": false
                    },
                    "tennis": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_worldsport_tennis_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_worldsport_tennis_t1",
                            "const-article-inpage": "edition.cnn.com_worldsport_tennis_inpage",
                            "const-article-pagetop": "edition.cnn.com_worldsport_tennis_t1",
                            "const-video-leaf": "edition.cnn.com_worldsport_tennis_t1"
                        },
                        "adsection": "edition.cnn.com_worldsport_tennis_misc"
                    },
                    "topvideos": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_topvideos_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_topvideos_t1",
                            "const-article-inpage": "edition.cnn.com_topvideos_inpage",
                            "const-article-pagetop": "edition.cnn.com_topvideos_t1",
                            "const-video-leaf": "edition.cnn.com_topvideos_t1"
                        },
                        "adsection": "edition.cnn.com_topvideos_misc"
                    },
                    "traders": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_business_traders_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_business_traders_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_business_traders_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_business_traders_t1",
                            "const-video-leaf": "edition.cnnbusiness_business_traders_videopage"
                        },
                        "adsection": "edition.cnnbusiness_business_traders_misc"
                    },
                    "travel": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_travel_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_travel_t1",
                            "const-article-inpage": "edition.cnn.com_travel_inpage",
                            "const-article-pagetop": "edition.cnn.com_travel_t1",
                            "const-video-leaf": "edition.cnn.com_travel_t1"
                        },
                        "adsection": "edition.cnn.com_travel_misc"
                    },
                    "tve_prev": {
                        "adsection": "cnn.com_main_homepage_rightrail_muted",
                        "allowAutoPause": false,
                        "analytics": "none",
                        "autostart": false,
                        "cvpContext": "tve_prev",
                        "cvpProfile": "expansion",
                        "height": "169",
                        "width": "300"
                    },
                    "upstarts": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_tech_upstarts_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_tech_upstarts_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_tech_upstarts_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_tech_upstarts_t1",
                            "const-video-leaf": "edition.cnnbusiness_tech_upstarts_videopage"
                        },
                        "adsection": "edition.cnnbusiness_tech_upstarts_misc"
                    },
                    "us": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_us_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_us_t1",
                            "const-article-inpage": "edition.cnn.com_us_inpage",
                            "const-article-pagetop": "edition.cnn.com_us_t1",
                            "const-video-leaf": "edition.cnn.com_us_t1"
                        },
                        "adsection": "edition.cnn.com_us_misc"
                    },
                    "videos": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_misc_default_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_misc_default_t1",
                            "const-article-inpage": "edition.cnn.com_misc_default_inpage",
                            "const-article-pagetop": "edition.cnn.com_misc_default_t1",
                            "const-video-leaf": "edition.cnn.com_misc_default_t1"
                        },
                        "adsection": "edition.cnn.com_main_videosection"
                    },
                    "watch_cnn": {
                        "adsection": "cnn.com_videos_live_tv",
                        "analytics": {
                            "jsmdTVEAPI": {}
                        },
                        "cvpContext": "watchcnn",
                        "cvpProfile": "expansion"
                    },
                    "weather": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_weather_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_weather_t1",
                            "const-article-inpage": "edition.cnn.com_weather_inpage",
                            "const-article-pagetop": "edition.cnn.com_weather_t1",
                            "const-video-leaf": "edition.cnn.com_weather_t1"
                        },
                        "adsection": "edition.cnn.com_weather_misc",
                        "autostart": true
                    },
                    "work-transformed": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnnbusiness_tech_worktransformed_carousel_inpage",
                            "const-article-carousel-pagetop": "edition.cnnbusiness_tech_worktransformed_carousel_t1",
                            "const-article-inpage": "edition.cnnbusiness_tech_worktransformed_inpage",
                            "const-article-pagetop": "edition.cnnbusiness_tech_worktransformed_t1",
                            "const-video-leaf": "edition.cnnbusiness_tech_worktransformed_videopage"
                        },
                        "adsection": "edition.cnnbusiness_tech_worktransformed_misc"
                    },
                    "world": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_world_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_world_t1",
                            "const-article-inpage": "edition.cnn.com_world_inpage",
                            "const-article-pagetop": "edition.cnn.com_world_t1",
                            "const-video-leaf": "edition.cnn.com_world_t1"
                        },
                        "adsection": "edition.cnn.com_world_misc"
                    },
                    "worldsport": {
                        "adSectionOverrideKeys": {
                            "const-article-carousel-inpage": "edition.cnn.com_worldsport_inpage",
                            "const-article-carousel-pagetop": "edition.cnn.com_worldsport_t1",
                            "const-article-inpage": "edition.cnn.com_worldsport_inpage",
                            "const-article-pagetop": "edition.cnn.com_worldsport_t1",
                            "const-video-leaf": "edition.cnn.com_worldsport_t1"
                        },
                        "adsection": "edition.cnn.com_worldsport_misc"
                    }
                }
            },
            "mobile": {
                "section": "international",
                "contexts": {
                    "africa": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_africa",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "americas": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_americas",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "architecture": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_style_architecture"
                    },
                    "arts": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_style_arts"
                    },
                    "asia": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_asia",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "autos": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_style_autos"
                    },
                    "aviation": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_travel_aviation",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "before-the-bell": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_investing_beforethebell",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "bestoftv": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_main",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "biz-frontiers": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_business_bizfrontiers",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "biz-leisure": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_success_bizleisure",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "boss-files": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_success_bossfiles",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "business": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_business",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "business-center-piece": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_business_centerpiece",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "cars": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_success_cars",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "cnnmoney": {
                        "adsection": "com_mobile_mobileweb_main",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "crime": {
                        "adsection": "com_mobile_mobileweb_main",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "design": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_style_design"
                    },
                    "destinations": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_travel_destinations",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "economy": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_economy",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "energy": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_energy",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "entertainment": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_entertainment",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "europe": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_europe",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "fashion": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_style_fashion"
                    },
                    "foodanddrink": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_travel_foodanddrink",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "football": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_world_sport_football",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "fresh-money": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_success_freshmoney",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "gadget": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_tech_gadget",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "general_iframe": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_misc_default",
                        "analytics": {
                            "jsmdNewAPI": {}
                        },
                        "autostart": false,
                        "height": "100%",
                        "type": "iframe",
                        "width": "100%"
                    },
                    "general_noads": {
                        "cvpAdPolicyContext": "adFree",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "golf": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_worldsportgolf",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "health": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_health",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "homepage": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_homepage",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "homes": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_success_homes",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "hotels": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_travel_hotels",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "impact-investing": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_investing_impactinvesting",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "india": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_asia_india",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "innovate": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_tech_innovate",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "innovative-cities": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_tech_innovativecities",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "investing": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_investing",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "justice": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_justice",
                        "cvpContext": "expansion",
                        "cvpNetwork": "cnn-test",
                        "cvpProfile": "expansion"
                    },
                    "living": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_living",
                        "cvpContext": "expansion",
                        "cvpNetwork": "cnn-test",
                        "cvpProfile": "expansion"
                    },
                    "luxury": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_style_luxury"
                    },
                    "markets": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_markets",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "markets-now": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_markets_marketsnow",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "middleeast": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_middleeast",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "mission-ahead": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_tech_missionahead",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "money-moves": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_success_moneymoves",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "motorsport": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_world_sport",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "on-germany": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_business_ongermany",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "opinion": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_opinion",
                        "cvpContext": "expansion",
                        "cvpNetwork": "cnn-test",
                        "cvpProfile": "expansion"
                    },
                    "opinions": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_opinion",
                        "cvpContext": "expansion",
                        "cvpNetwork": "cnn-test",
                        "cvpProfile": "expansion"
                    },
                    "passion-to-portfolio": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_business_passiontoportfolio",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "perspectives": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_perspectives",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "play": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_travel_play",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "politics": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_politics",
                        "cvpContext": "expansion",
                        "cvpNetwork": "cnn-test",
                        "cvpProfile": "expansion"
                    },
                    "reliable-sources": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_media_reliablesources",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "sailing": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_mainsail",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "showbiz": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_entertainment",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "skiing": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_alpineedge",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "spanish": {
                        "adsection": "cnnespanol.cnn.com_mobile_mobileweb_spanish_default",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "spanish_shows": {
                        "adSectionOverrideKeys": {
                            "const-video-leaf": "cnnespanol.cnn.com_mobile_mobileweb_spanish_shows"
                        },
                        "adsection": "cnnespanol.cnn.com_mobile_mobileweb_spanish_shows",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "spanish_specials": {
                        "adSectionOverrideKeys": {
                            "const-video-leaf": "cnnespanol.cnn.com_mobile_mobileweb_spanish_specials"
                        },
                        "adsection": "cnnespanol.cnn.com_mobile_mobileweb_spanish_specials",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "sport": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_world_sport",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "sports": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_world_sport",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "stay": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_travel_stay",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "style": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_style"
                    },
                    "success": {
                        "adsection": "cnnbusiness_mobile_mobileweb_success",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "tech": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_tech",
                        "cvpContext": "expansion",
                        "cvpNetwork": "cnn-test",
                        "cvpProfile": "expansion"
                    },
                    "technology": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_technology",
                        "cvpContext": "expansion",
                        "cvpNetwork": "cnn-test",
                        "cvpProfile": "expansion"
                    },
                    "tennis": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_worldsporttennis",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "traders": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_business_traders",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "travel": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_travel",
                        "cvpContext": "expansion",
                        "cvpNetwork": "cnn-test",
                        "cvpProfile": "expansion"
                    },
                    "tv": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_main",
                        "cvpContext": "expansion",
                        "cvpNetwork": "cnn-test",
                        "cvpProfile": "expansion"
                    },
                    "tve_prev": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_main",
                        "allowAutoPause": false,
                        "analytics": "none",
                        "cvpProfile": "expansion",
                        "height": "169",
                        "width": "300"
                    },
                    "upstarts": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_tech_upstarts",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "us": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_us",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "videolanding": {
                        "adsection": "com_mobile_mobileweb_misc_default",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "videos": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_videosection",
                        "cvpContext": "expansion",
                        "cvpNetwork": "cnn-test",
                        "cvpProfile": "expansion"
                    },
                    "watch_cnn": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_misc_default",
                        "analytics": {
                            "jsmdTVEAPI": {}
                        },
                        "cvpContext": "watchcnn",
                        "cvpProfile": "expansion"
                    },
                    "work-transformed": {
                        "adsection": "edition.cnnbusiness_mobile_mobileweb_tech_worktransformed",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "world": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_world",
                        "cvpContext": "expansion",
                        "cvpNetwork": "cnn-test",
                        "cvpProfile": "expansion"
                    },
                    "worldsport": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_world_sport",
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion"
                    },
                    "default": {
                        "adsection": "edition.cnn.com_mobile_mobileweb_misc_default",
                        "analytics": {
                            "jsmdNewAPI": {
                                "metadata": {}
                            }
                        },
                        "cvpContext": "expansion",
                        "cvpProfile": "expansion",
                        "height": "100%",
                        "iframeConfig": {
                            "iframeHost": "//edition.cnn.com",
                            "iframeHtml": "/.element/widget/video/videoapi/html/latest/iframeclient.html",
                            "relativeUrlHosts": ["localhost.cnn.com:3000", "localhost.next.cnn.com", "localhost.next.cnn.com:8080", "edition.dev.next.cnn.com", "edition.enable.next.cnn.com", "edition.politics.next.cnn.com", "edition.sweet.next.cnn.com", "edition.terra.next.cnn.com", "edition.video.next.cnn.com", "edition.etrain.next.cnn.com", "edition.stage.next.cnn.com", "edition.ref.next.cnn.com"]
                        },
                        "type": "embedded",
                        "width": "100%"
                    }
                }
            }
        };
        CNN.segment = {
            "cutoffPercent": 0.05,
            "key": "bk1t7q5dtNuNthlYSCDL07u9BJMd2rj6",
            "keyNewsletter": "FMVW7mcyjCIRGbsEiLkmHQRXjizx2fXr",
            "optClass": "optanon-category-2-3",
            "queueInterval": 1667,
            "queueTimeout": 60000,
            "segmentFile": "/analytics.min.js",
            "segmentUrl": "https://cdn.segment.com/analytics.js/v1/",
            "source": "Michonne",
            "ucStates": ["performance", "personalization"]
        };
        CNN.SiteLocation = {
            "site": "edition",
            "vertical": "",
            "sectionList": ["intl_homepage"]
        };
        CNN.SocialConfig = {
            "avatar": {
                "host": "avatar.cnn.com"
            },
            "inlineShareBar": {
                "pageType": ["article"]
            },
            "embedscripts": {
                "instagramjs": "//platform.instagram.com/en_US/embeds.js",
                "twitterjs": "//platform.twitter.com/widgets.js"
            },
            "facebookMessenger": {
                "appId": 989591237802489,
                "pageId": 5550296508,
                "buttonColor": "blue",
                "buttonSize": "xlarge",
                "verbiage": "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds."
            },
            "gigya": {
                "appId": "3_gtUbleJNtrRITgx-1mM_ci7GcIrH8xL9W_VfAbzSa4zpFrRwnpq_eYd8QTRkr7VC",
                "enableOnLeaf": true,
                "enableOnFirstZone": true
            },
            "livefyre": {
                "key": "azjgDYu+5pGDaNSl4JUIDK/EqSU=",
                "mobileCommentsBaseUrl": "//cnn.bootstrap.fyre.co/api/1.1/public/comments/ncomments/",
                "network": "cnn.fyre.co",
                "networkName": "cnn",
                "siteId": 353270,
                "srcDomain": "//cdn.livefyre.com",
                "appembed": "app-embed#1.0.4",
                "timeLineModulePollInterval": 1,
                "tokenEndpoint": "//login.cnn.com/services/livefyre/authtoken",
                "pingEndpoint": "//login.cnn.com/services/livefyre/pingforpull"
            },
            "msib": {
                "authUrl": "cnn-comments://livefyre/authentication",
                "baseUrl": "https://audience.cnn.com/services/cnn",
                "errorUrl": "cnn-comments://livefyre/error",
                "loginUrl": "cnn-comments://livefyre/login"
            },
            "whatsapp": {
                "baseUrl": "whatsapp://send?text=CNN story:"
            }
        };
        CNN.SPConfig = {
            "accountId": "328",
            "mmsDomain": "mms.cnn.com",
            "optClass": "optanon-category-3",
            "ucStates": ["personalization"],
            "waitForChoice": false
        };
        CNN.Spark = {
            "optClass": "optanon-category-2",
            "src": "//player.h-cdn.com/loader.js?customer=cnn",
            "ucStates": ["performance"]
        };
        CNN.Stack = {};
        CNN.TripAdvisor = {
            "affiliate": {
                "optClass": "optanon-category-4",
                "script": "//cdn.cnn.com/cnn/.e/widget/tripadvisor/affiliate.linker/cnntravel.affiliate-linker.min.js",
                "ucStates": ["advertising"]
            },
            "partnerHotels": {
                "apiKey": "E6E67BB01FD2467688ED25D5F5BC095A",
                "apiBaseUrl": "//api.tripadvisor.com/api/partner/2.0/location/",
                "servicePath": "/services/travel/partnerHotels/"
            },
            "widget": {
                "apiKey": "E6E67BB01FD2467688ED25D5F5BC095A",
                "css": "//cdn.cnn.com/cnn/.e/widget/tripadvisor/service.info/css/cnntravel.maps.min.css",
                "map": {
                    "api": "Mapbox",
                    "apiKey": "pk.eyJ1IjoiY25uZGlnaXRhbCIsImEiOiJhMmI0NTFkNWMzNmMyODU4NTQyMjQzNWFkM2I5OGFkMCJ9.S01hv9vVgIbHvy1QuAsoyQ",
                    "optionsKey": "mapbox_access_token"
                },
                "optClass": "optanon-category-4",
                "script": "//cdn.cnn.com/cnn/.e/widget/tripadvisor/service.info/cnntravel.maps.bundle.min.js",
                "ucStates": ["advertising"]
            }
        };
        CNN.Truste = {
            modal: "//preferences.truste.com/webservices/js?domain=turner.com&type=turner&js=responsive",
            notice: "//consent.truste.com/notice?domain=cnn.com&c=m-truste&text=true"
        };
        CNN.UnderscoreNewsLetterConfig = {};
        CNN.UserConsentConfig = {
            "confirmCookie": "OptanonAlertBoxClosed",
            "consentCookie": "OptanonConsent",
            "gdprAppliesGlobally": false,
            "src": "https://cdn.cookielaw.org/geoswitch/d22a6b50-6c73-4070-8922-86c722dd1f35.js?_vers=1"
        };
        CNN.UserMessageConfig = [{
            "dismissCookie": {
                "expiration": "Tue, 01 Jan 2115 00:00:00 UTC",
                "expirationPeriod": 2592000000,
                "name": "NotifiedIEUnSupport",
                "value": true
            },
            "headerText": "Your version of Internet Explorer is no longer supported",
            "height": {
                "small": 140,
                "medium": 120,
                "large": 130
            },
            "id": "ieUnsupported",
            "messageText": "Thank you for your interest in CNN.com. We&prime;ve detected that you are using a browser version of Internet Explorer that we no longer support. Please update to a more current browser version."
        }, {
            "dismissCookie": {
                "expiration": "Tue, 01 Jan 2115 00:00:00 UTC",
                "expirationPeriod": 2592000000,
                "name": "NotifyIE11User",
                "value": true
            },
            "headerText": "Video playback not supported in your browser",
            "height": {
                "small": 150,
                "medium": 130,
                "large": 140
            },
            "id": "ie11VideoUnsupported",
            "messageText": "Thank you for visiting CNN.com. We&prime;ve detected that you are using a browser that may have problems with video playback. For a better experience, we recommend you upgrade to Windows 10 with \u003ca href=\"https://www.microsoft.com/en-us/download/details.aspx?id=48126\">Microsoft Edge\u003c/a> or visit us on your mobile device."
        }, {
            "dismissCookie": {
                "expiration": "Tue, 01 Jan 2115 00:00:00 UTC",
                "name": "CNNtosAgreed",
                "oldCookieExpiration": "Tue, 01 Sep 2015 00:00:00 UTC",
                "oldCookieName": "tosAgreed",
                "value": true
            },
            "headerText": "",
            "height": {
                "small": 120,
                "medium": 90,
                "large": 90
            },
            "id": "tos",
            "messageText": "By continuing to browse our site you agree to our use of \u003ca href=\"/cookie\">cookies\u003c/a>, \u003ca href=\"/privacy\">revised Privacy Policy\u003c/a> and \u003ca href=\"/terms\">Terms of Service\u003c/a>. More information about \u003ca href=\"/cookie\">cookies\u003c/a>\u003cdiv class=\"user-msg--agree js-user-msg--agree\">I agree\u003c/div>"
        }];
        CNN.useReactHeader = true;
        CNN.VideoConfig = {
            "api": {
                "loaderBaseURLFULLPATH": "//www.cnn.com/.element/widget/video/videoapi/api/",
                "loaderBaseURL": "/.element/widget/video/videoapi/api/",
                "loaderBaseURLLocal": "http://localhost.cnn.com:3000/build/api/",
                "useLegacyVideoLoader": false,
                "version": "latest"
            },
            "autoStartWhenCmsEnabled": {
                "enableSectionFronts": true,
                "mutePlayer": true,
                "rememberMutePlayerTime": 0
            },
            "collection": {
                "playNextVideoTimeout": 1500,
                "delayVideoCarousel": true
            },
            "goFreePreview": {
                "adobeEnvironment": "prod",
                "adobeSwfPath": "/.element/apps/cvp/3.0/swf/AccessEnablerLoader.swf",
                "aspenContext": "prev10",
                "endSlate": {
                    "ctaText": "Sign in to your TV Service Provider",
                    "messageText": "Keep watching CNN anytime, anywhere with CNNgo.\u003cbr/>Sign in to your TV service provider to get access to\u003cbr/>all of your favorite CNN shows and specials.",
                    "titleText": "Your CNNgo preview has expired"
                },
                "errorSlate": {
                    "defaultText": "An error has occurred. Click OK to refresh.",
                    "subscriptionErrorText": "Your pay TV subscription does not include CNN. Please contact your TV Service Provider.",
                    "troubleShootingText": "If error persists, see \u003ca href=\"//www.cnn.com/help/cnngo-troubleshooting.html\" class=\"troubleshooting-link\" target=\"_blank\">troubleshooting instructions.\u003c/a>"
                },
                "goSmartLink": "http://cnn.it/go",
                "helpLink": "//edition.cnn.com/help",
                "mvpdConfigUrl": "https://tvem.cdn.turner.com/v2/getConfig",
                "persistentCta": {
                    "cobrandingText": "In partnership with",
                    "countdownText": "Preview expires in",
                    "persistentCtaText": "Experience"
                },
                "removeMinimumDimensionsTimeout": 1500,
                "softwareStatement": "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyY2QwZTZiZC01ZjFlLTRhMjItYTRhMC01Njg3YzNjOWI3NTEiLCJuYmYiOjE1MzcxOTA3NTcsImlzcyI6ImF1dGguYWRvYmUuY29tIiwiaWF0IjoxNTM3MTkwNzU3fQ.tBxO0aQhj8sy6RPiDMeThvvZgBkYRNVr1VseVCV3soJZdQJO7dWCcjeNghS8Qg2pc4u7vy6MQNtABcMU25BnCEBH8xKBf4HWb49NaFQLnmdXQULpfc1Uts5_CY0ALAtMgmfEdI_lzB9a80FuEiZ4VZcGxSpy7QTgZZivBqaq9hk71Yynhik9nsCv8pcHUKBkdq5W4lMyMGbDVGlCcHepmjj3yohzyc-4_gsfqtkaJHQBBAXSSqYVTKkg6bM-1GmKm2nBhjDBTHngM3vyA0YjpZ5dVsrGkRpGdfXLnCYB_9T91h-dYV8tle_V0HiLAn_8EVOmuQmKl7BzBJlERwo8JA",
                "temppass": "TempPass_CNN10min",
                "tokenService": {
                    "appId": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNubi1jbm4td2ViLTk1am96MCIsIm5ldHdvcmsiOiJjbm4iLCJwbGF0Zm9ybSI6IndlYiIsInByb2R1Y3QiOiJjbm4iLCJpYXQiOjE1MjQ2ODQwMzB9.Uw8riFJwARLjeE35ffMwSa-37RNxCcQUEp2pqwG9TvM"
                }
            },
            "fave": {
                "amazonA9": {
                    "enabled": true,
                    "refreshedTargetingData": {
                        "timeout": 1000
                    },
                    "targetingData": {
                        "timeout": 500
                    }
                },
                "autoplayMuteEnabledPages": {
                    "sections": ["entertainment", "health", "homepage", "intl_homepage", "opinions", "politics", "us", "videos", "vr", "world"]
                },
                "chartbeat": {
                    "enabled": true
                },
                "conviva": {
                    "applicationName": "CNN-FAVE",
                    "custom": {
                        "applicationName": "CNN-Web",
                        "applicationNameByVertical": {
                            "business": "CNN-Web-Business"
                        }
                    },
                    "customerKey": "a6709203f34992a5095d2bc7ceaf2ec504f651a8",
                    "enabled": true,
                    "gatewayUrl": "",
                    "integration": "conviva"
                },
                "cssUrl": "//registry.api.cnn.io/bundles/fave/latest-2.x/css",
                "enabledPageTypes": {
                    "exclude": {
                        "article": ["studentnews"],
                        "section": ["studentnews"],
                        "video": ["studentnews"]
                    }
                },
                "freewheel": {
                    "assetIdPrefix": "cnn-",
                    "constantSsidPrefix": "const-",
                    "enableOutOfFocusAdRequest": true,
                    "focusKeyName": "inFocus",
                    "globalAdTimer": {
                        "adComplete": {
                            "errorCode": {
                                "skip": "SKIP_CURRENT_AD_COMPLETE",
                                "stop": "STOP_CURRENT_AD_COMPLETE"
                            },
                            "timeout": 30000,
                            "type": "adComplete"
                        },
                        "adWaterfall": {
                            "errorCode": {
                                "skip": "SKIP_CURRENT_AD_WATERFALL",
                                "stop": "STOP_CURRENT_AD_WATERFALL"
                            },
                            "timeout": 30000,
                            "type": "adWaterfall"
                        },
                        "enabled": true,
                        "errorInfo": {
                            "skip": "A custom global ad timeout of {timeout} milliseconds caused the skipCurrentAd() function to be invoked. Attempt {skipCurrentAdAttempts} of {maxSkipCurrentAdAttempts}. Type: {type}",
                            "stop": "The maximum of {maxSkipCurrentAdAttempts} skip current ad attempts has been exceeded causing the stop() function to be invoked. Timeout: {timeout} milliseconds. Type: {type}."
                        },
                        "maxSkipCurrentAdAttempts": 0
                    },
                    "htmlAdLoadTimeout": 5000,
                    "midrollTemporalSlotName": "MID",
                    "networkSuffix": ":turner_html5_pem",
                    "playername": "theo",
                    "postrollTemporalSlotName": "POST",
                    "prerollTemporalSlotName": "PRE",
                    "profileId": "cnn_bvp_player",
                    "queryParams": {
                        "adNetworkId": {
                            "dev": 42448,
                            "prod": 48804
                        },
                        "adServerRootUrl": {
                            "dev": "//bea4.v.fwmrm.net/ad/g/1?",
                            "prod": "//bea4.cnn.com/ad/g/1?"
                        }
                    },
                    "serverUrl": "//bea4.cnn.com/ad/g/1?",
                    "setRequestMode": true,
                    "submitRequestTimeout": 5,
                    "videoProgressDetectTimeout": 5000,
                    "videoStartDetectTimeout": 5000,
                    "vpaidCreativeTimeoutDelay": 5000
                },
                "iframe": "\u003ciframe width=\"416\" height=\"234\" src=\"//fave.api.cnn.io/v1/fav/?video={video}&customer=cnn&edition={edition}&env={env}\" frameborder=\"0\">\u003c/iframe>",
                "injectCss": false,
                "injectorJs": {
                    "featureName": "cnn-fave-lib",
                    "source": "//registry.api.cnn.io/bundles/fave/latest-2.x/js"
                },
                "jsmd": {
                    "videoPlayer": "theo"
                },
                "live": {
                    "enabled": true,
                    "enabledLiveStreams": ["cvplive/cvpstream0", "cvplive/cvpstream1", "cvplive/cvpstream2", "cvplive/cvpstream3", "cvplive/cvpstream4", "cvplive/cnngo", "cvplive/cnniuk"]
                },
                "mediaSession": {
                    "defaultPoster": "//cdn.cnn.com/cnn/.e1mo/img/4.0/logos/CNN_logo_400x400.png",
                    "seekTime": 10
                },
                "oneTapEnabledPages": {
                    "pageTypes": ["section"],
                    "sections": ["homepage", "intl_homepage", "health", "opinions", "politics", "us", "world"]
                },
                "oneClickEnabledPages": {
                    "pageTypes": ["section"],
                    "sections": ["homepage", "intl_homepage"]
                },
                "optimizely": {
                    "enabled": true
                },
                "player": {
                    "adMode": "standard",
                    "allowStreamTriggeredAdBreaksOnIOS": true,
                    "autoplay": {
                        "compatibility": {
                            "maxDuration": 10000,
                            "maxRetries": 10,
                            "testMobile": false,
                            "videoUrl": "data:video/mp4;base64,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"
                        },
                        "muted": {
                            "desktop": {
                                "enabled": true,
                                "viewportChange": {
                                    "enableForAllVideos": false,
                                    "pauseVideoOnViewportChange": false,
                                    "pauseMutedVideoOnViewportChange": false,
                                    "playerInViewportPercent": 75,
                                    "throttleMillisecondLimit": 1000
                                }
                            },
                            "mobile": {
                                "enabled": true,
                                "viewportChange": {
                                    "enableForAllVideos": false,
                                    "pauseVideoOnViewportChange": false,
                                    "pauseMutedVideoOnViewportChange": false,
                                    "playerInViewportPercent": 75,
                                    "throttleMillisecondLimit": 1000
                                }
                            },
                            "unmuteCTA": {
                                "variant": {
                                    "shrink": false,
                                    "wave": false
                                }
                            }
                        },
                        "unmuted": {
                            "desktop": {
                                "playOnDocumentInteraction": false
                            }
                        }
                    },
                    "closedCaptionsCustomMenu": {
                        "enabled": true
                    },
                    "closedCaptionsOn": false,
                    "closedCaptionsThreshold": 0.2,
                    "fullscreenMaxBitrate": "Infinity",
                    "maxBitrate": "1500000",
                    "message": {
                        "liveOffline": "The live stream went offline.\u003cbr/>Player will resume on rebroadcast.",
                        "error": "The video player encountered an error."
                    },
                    "onAdEnd": {
                        "token": "Completed"
                    },
                    "onAdPlay": {
                        "token": ""
                    },
                    "onTrackingContentBegin": {
                        "playOptionsThumb": "none",
                        "contentMode": "vod",
                        "contentSource": "cnn"
                    },
                    "onTrackingContentStart": {
                        "contentType": "VOD"
                    },
                    "poster": {
                        "big": "768x432",
                        "small": "640x360",
                        "override": true,
                        "overrideImages": {
                            "big": "medium",
                            "small": "small"
                        }
                    },
                    "preferredFileType": "",
                    "preload": "auto",
                    "progressFixedDecimal": 3,
                    "progressTrackingInterval": 40,
                    "sourcePlaceholderAsset": "data:video/mp4;base64,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",
                    "stateRemembrance": {
                        "closedCaptions": {
                            "enabled": true,
                            "storageName": "fave_closed_captions",
                            "onStateId": "On",
                            "offStateId": "Off"
                        },
                        "muted": {
                            "defaultValue": false,
                            "storageName": "muted"
                        },
                        "volume": {
                            "defaultValue": 1,
                            "storageName": "volume"
                        }
                    },
                    "vr": {
                        "clickAndDragCta": {
                            "clickDragText": "Click and drag to explore",
                            "enabled": true,
                            "fadeInDelay": 3000,
                            "fadeOutDelay": 7000
                        },
                        "grabCursorTimeout": 100
                    }
                },
                "server": {
                    "customer": "cnn",
                    "url": "//fave.api.cnn.io/v1/video"
                },
                "theoplayer": {
                    "allowNativeFullscreen": false,
                    "allowTextTrackStyle": true,
                    "initialRendition": "first",
                    "isEmbeddable": true,
                    "targetBuffer": 20
                },
                "tokenService": {
                    "authTokenPrefix": "hdnea=",
                    "url": "//token.vgtf.net/token/token_spe"
                },
                "userTracking": {
                    "enabled": true,
                    "features": {
                        "ads": true,
                        "analytics": true,
                        "personalization": true,
                        "social": true
                    }
                },
                "windows7PreferredFileType": "mp4"
            },
            "liveStream": {
                "blockSlate": {
                    "messageText": "We are sorry but this video is not available in your country or region.",
                    "titleText": "Video Not Available",
                    "imageUrl": "//cdn.cnn.com/cnn/images/geoslate/02_genericdark_geoslate.png"
                },
                "flashSlate": {
                    "enabled": true,
                    "instructionsUrl": "https://get.adobe.com/flashplayer/"
                },
                "geoCheckEnabled": true,
                "geoCheckTargets": ["*", "-#AF", "-JP", "-MY", "-SH", "-TH", "-YT"],
                "pageRefreshTime": 360
            },
            "mutedPlayer": {
                "startTime": 0,
                "stopInterval": 30,
                "stopTime": 0,
                "timeZone": "GMT"
            },
            "embedLinks": {
                "clipboardOperationsSWF": "//cdn.cnn.com/cnn/video/assets/CNNVideoClipboardCopy.swf",
                "buttonImage": "{cdnassetpath}/assets/embed_video_button.png",
                "imageButtonXOffset": 0,
                "imageButtonYOffset": 3,
                "embedLinkPattern": "\u003ciframe width='416' height='234' src='https://fave.api.cnn.io/v1/fav/?customer=cnn&edition=international&env=prod&video={videoId}' frameborder='0'>\u003c/iframe>"
            },
            "mobileWebFloatingPlayer": {
                "enablePinnedDuringPause": false,
                "transition": {
                    "style": "slide",
                    "duration": 750
                }
            },
            "mobileWebPinnedPlayer": {
                "enablePinnedDuringPause": false,
                "transition": {
                    "style": "slide",
                    "duration": 750
                }
            },
            "network": "cnn",
            "oneClick": {
                "bigSkyPollDuration": 15000,
                "onboarding": {
                    "enabled": true,
                    "firstVisit": {
                        "expiry": 99999,
                        "overlayAnimationTime": 1500,
                        "overlayEnabled": false,
                        "sidePanelAnimationTime": 1000,
                        "tooltipAnimationTime": 1500,
                        "tooltipEnabled": true
                    },
                    "partialOnboarding": {
                        "enabled": true,
                        "tooltipHoverDuration": 3000
                    },
                    "secondVisit": {
                        "expiry": 99999,
                        "minTimeAfterFirstVisit": 30000,
                        "tooltipEnabled": true,
                        "tooltipHoverTime": 500
                    },
                    "tooltipPollInterval": 1000
                },
                "playlists": [{
                    "id": "moreVideo",
                    "title": "More Video",
                    "baseThumbnailUrl": "",
                    "collapsible": true,
                    "collapsedLength": 3,
                    "enabled": true,
                    "thumbnailSize": "small",
                    "urlTemplate": "/data/ocs/playlist/videos/{{videoId}}:*/views/json/video-collection.json",
                    "isDefault": true
                }, {
                    "id": "topNews",
                    "title": "Today's Top News",
                    "baseThumbnailUrl": "",
                    "collapsible": false,
                    "collapsedLength": 3,
                    "enabled": true,
                    "thumbnailSize": "large",
                    "urlTemplate": "/playlist/top-news-videos/index.json",
                    "isDefault": false
                }],
                "sidePanel": {
                    "equalizer": true,
                    "expandBrowserNotifier": {
                        "enabled": true,
                        "dismissTime": 4000,
                        "timeToPopup": 1000
                    },
                    "minWidthToGetSidePanel": 1320,
                    "sharebar": true,
                    "theme": "light",
                    "userPathing": {
                        "enabled": true,
                        "expiry": 99999
                    }
                },
                "videoPlayer": {
                    "enabled": true,
                    "theaterModeEnabled": true,
                    "theaterMode": {
                        "enableScalingVideoPlayer": true,
                        "paddingOfPlayerFromContent": 20,
                        "theaterIconPositioningRight": 19,
                        "scrollingThreshold": 50,
                        "videoPlayerMinHeight": 420
                    },
                    "timerToHideExitTheaterIcon": 1500,
                    "tooltips": {
                        "enabled": true,
                        "text": {
                            "enterTheaterModeIcon": "Expand",
                            "exitTheaterModeIcon": "Collapse",
                            "muteIcon": "Mute",
                            "pauseIcon": "Pause",
                            "playIcon": "Play",
                            "unmuteIcon": "Unmute"
                        }
                    }
                }
            },
            "oneTap": {
                "carousel": {
                    "animationTime": 1000,
                    "enabled": true
                },
                "live": {
                    "enabled": true,
                    "enabledLiveStreams": ["cvplive/cvpstream0", "cvplive/cvpstream1", "cvplive/cvpstream2", "cvplive/cvpstream3", "cvplive/cvpstream4"]
                },
                "shareIcons": {
                    "enabled": true,
                    "enableWhatsappButton": true
                },
                "timer": {
                    "duration": 10,
                    "enabled": true
                },
                "transition": {
                    "animationTime": 250,
                    "duration": 500,
                    "enabled": true,
                    "fadeout": 200,
                    "positionFromViewPort": 40,
                    "theme": "light"
                }
            }
        };
        CNN.WatchLiveCountries = ["US", "CA", "PR", "VI"];
        CNN.WeatherConfig = {
            "citySearch": "/citySearch",
            "countryMap": {
                "AU": "AS",
                "BH": "BA",
                "CH": "SZ",
                "CN": "CH",
                "DE": "GM",
                "ES": "SP",
                "GB": "UK",
                "HK": "CH",
                "JP": "JA",
                "KR": "KS",
                "MA": "MO",
                "NG": "NI",
                "OM": "MU",
                "SE": "SW",
                "SG": "SN",
                "ZA": "SF"
            },
            "enableInHeader": true,
            "enableInFooter": true,
            "getForecast": "/getForecast",
            "serviceCitySearchHost": "//data.api.cnn.io/weather",
            "serviceForecastHost": "//data.api.cnn.io/weather",
            "storedLocationsAmount": 6,
            "useCNNService": true,
            "weatherLocationCookie": "w-loc",
            "weatherUnitsCookie": "w-units"
        };
        try {
            CNN.WebpackAssets = [{
                'name': '../../views/css/cards/tools/appia.css',
                'size': 82,
                'chunks': [5],
                'chunkNames': ['cards/tools/appia'],
                'emitted': true
            }, {
                'name': '../../views/css/cards/tools/iframe.css',
                'size': 248,
                'chunks': [6],
                'chunkNames': ['cards/tools/iframe'],
                'emitted': true
            }, {
                'name': '../../views/css/cards/tools/ireport.css',
                'size': 197,
                'chunks': [7],
                'chunkNames': ['cards/tools/ireport'],
                'emitted': true
            }, {
                'name': '../../views/css/cards/tools/live_player.css',
                'size': 1659,
                'chunks': [8],
                'chunkNames': ['cards/tools/live_player'],
                'emitted': true
            }, {
                'name': '../../views/css/cards/tools/mailchimp-subscribe.css',
                'size': 21235,
                'chunks': [9],
                'chunkNames': ['cards/tools/mailchimp-subscribe'],
                'emitted': true
            }, {
                'name': '../../views/css/cards/tools/muted-player.css',
                'size': 877,
                'chunks': [10],
                'chunkNames': ['cards/tools/muted-player'],
                'emitted': true
            }, {
                'name': '../../views/css/cards/tools/partner-hotels.css',
                'size': 292,
                'chunks': [11],
                'chunkNames': ['cards/tools/partner-hotels'],
                'emitted': true
            }, {
                'name': '../../views/css/cards/tools/social-description.css',
                'size': 14316,
                'chunks': [12],
                'chunkNames': ['cards/tools/social-description'],
                'emitted': true
            }, {
                'name': '../../views/css/cards/tools/social-feed.css',
                'size': 33127,
                'chunks': [13],
                'chunkNames': ['cards/tools/social-feed'],
                'emitted': true
            }, {
                'name': '../../views/css/cards/tools/text-block.css',
                'size': 683,
                'chunks': [14],
                'chunkNames': ['cards/tools/text-block'],
                'emitted': true
            }, {
                'name': '../../views/css/cards/tools/tv-schedule-header.css',
                'size': 5402,
                'chunks': [15],
                'chunkNames': ['cards/tools/tv-schedule-header'],
                'emitted': true
            }, {
                'name': '../../views/css/containers/jumbotron.css',
                'size': 32774,
                'chunks': [16],
                'chunkNames': ['containers/jumbotron'],
                'emitted': true
            }, {
                'name': '../../views/css/containers/most-popular.css',
                'size': 1545,
                'chunks': [17],
                'chunkNames': ['containers/most-popular'],
                'emitted': true
            }, {
                'name': '../../views/css/containers/video-collection-player.css',
                'size': 108476,
                'chunks': [18],
                'chunkNames': ['containers/video-collection-player'],
                'emitted': true
            }, {
                'name': '../../views/css/global.css',
                'size': 178234,
                'chunks': [23],
                'chunkNames': ['global'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/business.css',
                'size': 107698,
                'chunks': [35],
                'chunkNames': ['pages/business'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/common/comments.css',
                'size': 39621,
                'chunks': [36],
                'chunkNames': ['pages/common/comments'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/entertainment.css',
                'size': 125338,
                'chunks': [37],
                'chunkNames': ['pages/entertainment'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/login.css',
                'size': 1356,
                'chunks': [38],
                'chunkNames': ['pages/login'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/page.css',
                'size': 572862,
                'chunks': [39],
                'chunkNames': ['pages/page'],
                'emitted': true,
                'isOverSizeLimit': true
            }, {
                'name': '../../views/css/pages/politics.css',
                'size': 110317,
                'chunks': [40],
                'chunkNames': ['pages/politics'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/sitemap.css',
                'size': 5088,
                'chunks': [41],
                'chunkNames': ['pages/sitemap'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/special-article.css',
                'size': 18666,
                'chunks': [42],
                'chunkNames': ['pages/special-article'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/static-edition-picker.css',
                'size': 3516,
                'chunks': [43],
                'chunkNames': ['pages/static-edition-picker'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/static-footer.css',
                'size': 68877,
                'chunks': [44],
                'chunkNames': ['pages/static-footer'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/static-header-skinny.css',
                'size': 96936,
                'chunks': [46],
                'chunkNames': ['pages/static-header-skinny'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/static-header-sponsor.css',
                'size': 34115,
                'chunks': [47],
                'chunkNames': ['pages/static-header-sponsor'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/static-header-white-label.css',
                'size': 866,
                'chunks': [48],
                'chunkNames': ['pages/static-header-white-label'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/static-header.css',
                'size': 229344,
                'chunks': [45],
                'chunkNames': ['pages/static-header'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/subhub.css',
                'size': 521369,
                'chunks': [49],
                'chunkNames': ['pages/subhub'],
                'emitted': true,
                'isOverSizeLimit': true
            }, {
                'name': '../../views/css/pages/unfurled.css',
                'size': 10039,
                'chunks': [50],
                'chunkNames': ['pages/unfurled'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/vr.css',
                'size': 71261,
                'chunks': [51],
                'chunkNames': ['pages/vr'],
                'emitted': true
            }, {
                'name': '../../views/css/pages/webview.css',
                'size': 116,
                'chunks': [52],
                'chunkNames': ['pages/webview'],
                'emitted': true
            }, {
                'name': '../../views/css/preview-bar.css',
                'size': 1258,
                'chunks': [53],
                'chunkNames': ['preview-bar'],
                'emitted': true
            }, {
                'name': '../../views/css/wp-video.css',
                'size': 37192,
                'chunks': [65],
                'chunkNames': ['wp-video'],
                'emitted': true
            }, {
                'name': 'adzones.3afed68e4054dbdf1fdc.bundle.js',
                'size': 8340,
                'chunks': [0],
                'chunkNames': ['adzones'],
                'emitted': true
            }, {
                'name': 'animations.cb3a769e66680af8c565.bundle.js',
                'size': 7414,
                'chunks': [1],
                'chunkNames': ['animations'],
                'emitted': true
            }, {
                'name': 'bootstrapper.78df546a1ec2b21d232a.bundle.js',
                'size': 3019,
                'chunks': [2],
                'chunkNames': ['bootstrapper'],
                'emitted': true
            }, {
                'name': 'breakoutmedia.63434f6ab0cccd7fcf25.bundle.js',
                'size': 1962,
                'chunks': [3],
                'chunkNames': ['breakoutmedia'],
                'emitted': true
            }, {
                'name': 'byline.138e2f35c811196de570.bundle.js',
                'size': 2279,
                'chunks': [4],
                'chunkNames': ['byline'],
                'emitted': true
            }, {
                'name': 'cards/tools/appia.4e8135c21c9c93121e9c.bundle.js',
                'size': 81,
                'chunks': [5],
                'chunkNames': ['cards/tools/appia'],
                'emitted': true
            }, {
                'name': 'cards/tools/iframe.3d96f5e3ce41129ece22.bundle.js',
                'size': 81,
                'chunks': [6],
                'chunkNames': ['cards/tools/iframe'],
                'emitted': true
            }, {
                'name': 'cards/tools/ireport.7b77cd00f25f86196120.bundle.js',
                'size': 81,
                'chunks': [7],
                'chunkNames': ['cards/tools/ireport'],
                'emitted': true
            }, {
                'name': 'cards/tools/live_player.fc7776236083ddd68fe1.bundle.js',
                'size': 81,
                'chunks': [8],
                'chunkNames': ['cards/tools/live_player'],
                'emitted': true
            }, {
                'name': 'cards/tools/mailchimp-subscribe.751b2aef606ac4db0a6e.bundle.js',
                'size': 81,
                'chunks': [9],
                'chunkNames': ['cards/tools/mailchimp-subscribe'],
                'emitted': true
            }, {
                'name': 'cards/tools/muted-player.30ce0f8974e7c3b96ab6.bundle.js',
                'size': 82,
                'chunks': [10],
                'chunkNames': ['cards/tools/muted-player'],
                'emitted': true
            }, {
                'name': 'cards/tools/partner-hotels.beda68ecf54284cd7da0.bundle.js',
                'size': 82,
                'chunks': [11],
                'chunkNames': ['cards/tools/partner-hotels'],
                'emitted': true
            }, {
                'name': 'cards/tools/social-description.c8143a88afaddbcc5686.bundle.js',
                'size': 82,
                'chunks': [12],
                'chunkNames': ['cards/tools/social-description'],
                'emitted': true
            }, {
                'name': 'cards/tools/social-feed.2cca25c44a2f18c3c3e4.bundle.js',
                'size': 82,
                'chunks': [13],
                'chunkNames': ['cards/tools/social-feed'],
                'emitted': true
            }, {
                'name': 'cards/tools/text-block.06768e100fe192747067.bundle.js',
                'size': 82,
                'chunks': [14],
                'chunkNames': ['cards/tools/text-block'],
                'emitted': true
            }, {
                'name': 'cards/tools/tv-schedule-header.4ae90cd09212b496d80d.bundle.js',
                'size': 82,
                'chunks': [15],
                'chunkNames': ['cards/tools/tv-schedule-header'],
                'emitted': true
            }, {
                'name': 'containers/jumbotron.97c08563934cb6dc20ce.bundle.js',
                'size': 82,
                'chunks': [16],
                'chunkNames': ['containers/jumbotron'],
                'emitted': true
            }, {
                'name': 'containers/most-popular.e9b9ba3f404a8f52f38b.bundle.js',
                'size': 82,
                'chunks': [17],
                'chunkNames': ['containers/most-popular'],
                'emitted': true
            }, {
                'name': 'containers/video-collection-player.f60c9c02bd52e1651dd5.bundle.js',
                'size': 82,
                'chunks': [18],
                'chunkNames': ['containers/video-collection-player'],
                'emitted': true
            }, {
                'name': 'facebook.625b71bc9eea85026f90.bundle.js',
                'size': 1738,
                'chunks': [19],
                'chunkNames': ['facebook'],
                'emitted': true
            }, {
                'name': 'fave.f2e9c09021e92a71539c.bundle.js',
                'size': 13490,
                'chunks': [20],
                'chunkNames': ['fave'],
                'emitted': true
            }, {
                'name': 'faveFreePreview.54044e1702084a6ef31c.bundle.js',
                'size': 159943,
                'chunks': [21],
                'chunkNames': ['faveFreePreview'],
                'emitted': true
            }, {
                'name': 'financial_libs.feb7b4d70b55e71dd689.bundle.js',
                'size': 6927,
                'chunks': [22],
                'chunkNames': ['financial_libs'],
                'emitted': true
            }, {
                'name': 'global.791e28a7848b86bd20b0.bundle.js',
                'size': 82,
                'chunks': [23],
                'chunkNames': ['global'],
                'emitted': true
            }, {
                'name': 'grid_resize.b4f9ad2b12b54e7f1d3a.bundle.js',
                'size': 2109,
                'chunks': [24],
                'chunkNames': ['grid_resize'],
                'emitted': true
            }, {
                'name': 'header.4be3533a5cd80f9c2e2b.bundle.js',
                'size': 247660,
                'chunks': [25],
                'chunkNames': ['header'],
                'emitted': true
            }, {
                'name': 'listexpandable.ba4be35111c20547417a.bundle.js',
                'size': 1394,
                'chunks': [26],
                'chunkNames': ['listexpandable'],
                'emitted': true
            }, {
                'name': 'loaded.3f1759b92252bdd0a700.bundle.js',
                'size': 936,
                'chunks': [27],
                'chunkNames': ['loaded'],
                'emitted': true
            }, {
                'name': 'locator.8cf5ff27ad3e2152af68.bundle.js',
                'size': 2716,
                'chunks': [28],
                'chunkNames': ['locator'],
                'emitted': true
            }, {
                'name': 'mailchimp.4fa3ba008b7b48c19830.bundle.js',
                'size': 7565,
                'chunks': [29],
                'chunkNames': ['mailchimp'],
                'emitted': true
            }, {
                'name': 'maps.4a6f6a2b20165bea8dd1.bundle.js',
                'size': 5277,
                'chunks': [30],
                'chunkNames': ['maps'],
                'emitted': true
            }, {
                'name': 'metadata.8d12eb6403b24cbef961.bundle.js',
                'size': 1387,
                'chunks': [31],
                'chunkNames': ['metadata'],
                'emitted': true
            }, {
                'name': 'oneClickDesktop.ab71caa548665c0d1f6a.bundle.js',
                'size': 314675,
                'chunks': [32],
                'chunkNames': ['oneClickDesktop'],
                'emitted': true,
                'isOverSizeLimit': true
            }, {
                'name': 'oneTapMobile.539c40722c117fb03bd2.bundle.js',
                'size': 24884,
                'chunks': [33],
                'chunkNames': ['oneTapMobile'],
                'emitted': true
            }, {
                'name': 'one_tap.e8514c0d8d58ea6bcd3a.bundle.js',
                'size': 1330,
                'chunks': [34],
                'chunkNames': ['one_tap'],
                'emitted': true
            }, {
                'name': 'pages/business.18deaee7c6f10146a0c1.bundle.js',
                'size': 82,
                'chunks': [35],
                'chunkNames': ['pages/business'],
                'emitted': true
            }, {
                'name': 'pages/common/comments.35084a9c3b363d13a8b4.bundle.js',
                'size': 82,
                'chunks': [36],
                'chunkNames': ['pages/common/comments'],
                'emitted': true
            }, {
                'name': 'pages/entertainment.38724343cdf402e081e0.bundle.js',
                'size': 82,
                'chunks': [37],
                'chunkNames': ['pages/entertainment'],
                'emitted': true
            }, {
                'name': 'pages/login.d367bc653926965ab054.bundle.js',
                'size': 82,
                'chunks': [38],
                'chunkNames': ['pages/login'],
                'emitted': true
            }, {
                'name': 'pages/page.05875dbadd77c988c189.bundle.js',
                'size': 82,
                'chunks': [39],
                'chunkNames': ['pages/page'],
                'emitted': true
            }, {
                'name': 'pages/politics.03f0a23d4d765e753e09.bundle.js',
                'size': 82,
                'chunks': [40],
                'chunkNames': ['pages/politics'],
                'emitted': true
            }, {
                'name': 'pages/sitemap.10dced1740497701efc9.bundle.js',
                'size': 82,
                'chunks': [41],
                'chunkNames': ['pages/sitemap'],
                'emitted': true
            }, {
                'name': 'pages/special-article.8a7bcec96dba6035751e.bundle.js',
                'size': 82,
                'chunks': [42],
                'chunkNames': ['pages/special-article'],
                'emitted': true
            }, {
                'name': 'pages/static-edition-picker.79678d27afb755b09a5b.bundle.js',
                'size': 82,
                'chunks': [43],
                'chunkNames': ['pages/static-edition-picker'],
                'emitted': true
            }, {
                'name': 'pages/static-footer.497d6863174a0271df82.bundle.js',
                'size': 82,
                'chunks': [44],
                'chunkNames': ['pages/static-footer'],
                'emitted': true
            }, {
                'name': 'pages/static-header-skinny.e5b65d91f50e49441f59.bundle.js',
                'size': 82,
                'chunks': [46],
                'chunkNames': ['pages/static-header-skinny'],
                'emitted': true
            }, {
                'name': 'pages/static-header-sponsor.f78da975ff89a49f250c.bundle.js',
                'size': 82,
                'chunks': [47],
                'chunkNames': ['pages/static-header-sponsor'],
                'emitted': true
            }, {
                'name': 'pages/static-header-white-label.9910d6e59af0865f631c.bundle.js',
                'size': 82,
                'chunks': [48],
                'chunkNames': ['pages/static-header-white-label'],
                'emitted': true
            }, {
                'name': 'pages/static-header.92a50fde76675418e5af.bundle.js',
                'size': 82,
                'chunks': [45],
                'chunkNames': ['pages/static-header'],
                'emitted': true
            }, {
                'name': 'pages/subhub.649097a953e80532d8d5.bundle.js',
                'size': 82,
                'chunks': [49],
                'chunkNames': ['pages/subhub'],
                'emitted': true
            }, {
                'name': 'pages/unfurled.a7219417bf70a9446d0b.bundle.js',
                'size': 82,
                'chunks': [50],
                'chunkNames': ['pages/unfurled'],
                'emitted': true
            }, {
                'name': 'pages/vr.5c97c2351642e1e09d0f.bundle.js',
                'size': 82,
                'chunks': [51],
                'chunkNames': ['pages/vr'],
                'emitted': true
            }, {
                'name': 'pages/webview.04eea04eda9ac21d49ae.bundle.js',
                'size': 82,
                'chunks': [52],
                'chunkNames': ['pages/webview'],
                'emitted': true
            }, {
                'name': 'preview-bar.3addfc1077e77b1e872e.bundle.js',
                'size': 82,
                'chunks': [53],
                'chunkNames': ['preview-bar'],
                'emitted': true
            }, {
                'name': 'preview_bar.2c14193a1eb1b23bd48a.bundle.js',
                'size': 1848,
                'chunks': [54],
                'chunkNames': ['preview_bar'],
                'emitted': true
            }, {
                'name': 'styles.50e3693569f51c796416.bundle.js',
                'size': 1853,
                'chunks': [55],
                'chunkNames': ['styles'],
                'emitted': true
            }, {
                'name': 'subhub.53ca153b8bd0def51bdb.bundle.js',
                'size': 22650,
                'chunks': [56],
                'chunkNames': ['subhub'],
                'emitted': true
            }, {
                'name': 'tvschedule.53f75e7f5bd623cd602b.bundle.js',
                'size': 3261,
                'chunks': [57],
                'chunkNames': ['tvschedule'],
                'emitted': true
            }, {
                'name': 'unfurled.9259b354bbcac76e92df.bundle.js',
                'size': 9242,
                'chunks': [58],
                'chunkNames': ['unfurled'],
                'emitted': true
            }, {
                'name': 'usabilla.f0484fbfc4b837455d06.bundle.js',
                'size': 2994,
                'chunks': [59],
                'chunkNames': ['usabilla'],
                'emitted': true
            }, {
                'name': 'video.89c218c366f13b02de23.bundle.js',
                'size': 24330,
                'chunks': [60],
                'chunkNames': ['video'],
                'emitted': true
            }, {
                'name': 'videoLoader.919d643053b32ff5d82d.bundle.js',
                'size': 492377,
                'chunks': [61],
                'chunkNames': ['videoLoader'],
                'emitted': true,
                'isOverSizeLimit': true
            }, {
                'name': 'videoLoaderFreePreview.4749f6e8cc369cb50517.bundle.js',
                'size': 161382,
                'chunks': [62],
                'chunkNames': ['videoLoaderFreePreview'],
                'emitted': true
            }, {
                'name': 'videx.9704d640dc981a0bc72b.bundle.js',
                'size': 5275,
                'chunks': [63],
                'chunkNames': ['videx'],
                'emitted': true
            }, {
                'name': 'weather.07f0e9098552971977d9.bundle.js',
                'size': 24064,
                'chunks': [64],
                'chunkNames': ['weather'],
                'emitted': true
            }, {
                'name': 'wp-video.4063404d6de6c56aed7c.bundle.js',
                'size': 82,
                'chunks': [65],
                'chunkNames': ['wp-video'],
                'emitted': true
            }];
        } catch (err) {
            CNN.WebpackAssets = [];
        }
        CNN.Zones = {
            "enableIntelligentLoad": true,
            "enablePictureFill": false,
            "lazyLoad": true,
            "loadAllZonesLazy": true,
            "preLoadZones": {
                "0": 2,
                "640": 3,
                "800": 3
            },
            "zones": {
                "baseUri": "index.html",
                "minWidth": {
                    "0": [{
                        "id": "intl_homepage-injection-zone-1",
                        "uri": "_intl-homepage-zone-injection/index.html"
                    }, {
                        "id": "intl_homepage1-zone-1"
                    }, {
                        "id": "intl_homepage-magellan-zone-1",
                        "uri": "intl_index3.html"
                    }, {
                        "id": "intl_homepage-magellan-zone-2",
                        "uri": "intl_index3.html"
                    }, {
                        "id": "intl_homepage-magellan-zone-3",
                        "uri": "intl_index3.html"
                    }, {
                        "id": "intl_homepage-magellan-zone-4",
                        "uri": "intl_index3.html"
                    }, {
                        "id": "intl_homepage3-zone-4"
                    }],
                    "640": [{
                        "id": "intl_homepage-injection-zone-1",
                        "uri": "_intl-homepage-zone-injection/index.html"
                    }, {
                        "id": "intl_homepage1-zone-1"
                    }, {
                        "id": "intl_homepage-injection-zone-2",
                        "uri": "_intl-homepage-zone-injection/index.html"
                    }, {
                        "id": "intl_homepage1-zone-2"
                    }, {
                        "id": "intl_homepage-injection-zone-3",
                        "uri": "_intl-homepage-zone-injection/index.html"
                    }, {
                        "id": "intl_homepage1-zone-3"
                    }, {
                        "id": "intl_homepage-injection-zone-4",
                        "uri": "_intl-homepage-zone-injection/index.html"
                    }, {
                        "id": "intl_homepage1-zone-4"
                    }, {
                        "id": "intl_homepage2-zone-1"
                    }, {
                        "id": "intl_homepage3-zone-1"
                    }, {
                        "id": "intl_homepage3-zone-2"
                    }, {
                        "id": "intl_homepage3-zone-3"
                    }, {
                        "id": "intl_homepage3-zone-4"
                    }],
                    "800": [{
                        "id": "intl_homepage-injection-zone-1",
                        "uri": "_intl-homepage-zone-injection/index.html"
                    }, {
                        "id": "intl_homepage1-zone-1"
                    }, {
                        "id": "intl_homepage-injection-zone-2",
                        "uri": "_intl-homepage-zone-injection/index.html"
                    }, {
                        "id": "intl_homepage1-zone-2"
                    }, {
                        "id": "intl_homepage-injection-zone-3",
                        "uri": "_intl-homepage-zone-injection/index.html"
                    }, {
                        "id": "intl_homepage1-zone-3"
                    }, {
                        "id": "intl_homepage-injection-zone-4",
                        "uri": "_intl-homepage-zone-injection/index.html"
                    }, {
                        "id": "intl_homepage1-zone-4"
                    }, {
                        "id": "intl_homepage2-zone-1"
                    }, {
                        "id": "intl_homepage3-zone-1"
                    }, {
                        "id": "intl_homepage3-zone-2"
                    }, {
                        "id": "intl_homepage3-zone-3"
                    }, {
                        "id": "intl_homepage3-zone-4"
                    }]
                }
            }
        };
        CNN.SiblingNavigation = {
            threshold: 1200,
            disableHoverThreshold: 1
        };
        CNN.BylineImages = {
            threshold: 640
        };
        CNN.bundleHost = '//edition.i.cdn.cnn.com/.a/bundles/';
        CNN.contentModel = {
            hasVideo: false,
            layout: "no-rail",
            sectionName: "intl_homepage",
            pageType: "section",
            env: "prod",
            type: "page",
            analytics: {
                "pageTop": {},
                "headline": "",
                "author": "",
                "showName": "",
                "subSectionName": "",
                "isArticleVideoCollection": false,
                "publishDate": "2014-02-24T14:45:54Z",
                "lastUpdatedDate": "2019-10-10T11:04:54Z",
                "pageBranding": "default",
                "chartbeat": {
                    "sections": ""
                },
                "branding_content_page": "default",
                "branding_content_zone": ["default"],
                "branding_content_container": ["default", "space-and-science"],
                "branding_content_card": [""]
            },
            edition: "international",
            sourceId: "section_intl_homepage1",
            title: "CNN International - Breaking News, US News, World News and Video",
            siblings: {
                "articleList": [{
                    "uri": "/2019/10/09/politics/turkey-syria-us-anger-ramifications/index.html",
                    "headline": "\u003cstrong>Republican anger at Trump grows over Turkey's 'sickening' attack on US allies in northern Syria\u003c/strong>",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009105750-02-turkey-syria-offensive-1009-small-11.jpg",
                    "duration": "",
                    "description": "Turkey launched its \u003ca href=\"/middleeast/live-news/syria-turkey-military-offensive-dle-intl/index.html\" target=\"_blank\">military operation\u003c/a> to flush Kurds allied with the US out of northeastern Syria Wednesday, sparking outrage in Congress and creating rare bipartisan unity about the risks to Kurds, US national security interests, regional stability and the fight against ISIS. ",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/politics/isis-prisoners-turkey-syria/index.html",
                    "headline": "Trump on ISIS prisoners: 'They're going to be escaping to Europe'",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009145448-01-turkey-syria-unfurled-small-11.jpg",
                    "duration": "",
                    "description": "Fears are growing among American officials that thousands of ISIS fighters may escape from prisons in Syria as the Kurdish personnel guarding them gear up for a fight with Turkey, which \u003ca href=\"https://www.cnn.com/2019/10/09/politics/syria-turkey-invasion-intl-hnk/index.html\" target=\"_blank\">launched a military offensive\u003c/a> in northeastern Syria on Wednesday.",
                    "layout": ""
                }, {
                    "uri": "/middleeast/live-news/syria-turkey-military-offensive-dle-intl/index.html",
                    "headline": "8 killed on first day of Turkish offensive in Syria",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009105750-02-turkey-syria-offensive-1009-small-11.jpg",
                    "duration": "",
                    "description": "",
                    "layout": ""
                }, {
                    "uri": "/2019/10/10/politics/syria-turkey-offensive-displaced-intl-hnk/index.html",
                    "headline": "Fears over humanitarian impact of Turkey's military offensive ",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009191136-13-turkey-syria-offensive-1009-small-11.jpg",
                    "duration": "",
                    "description": "Concerns are growing over the humanitarian impact caused by Turkey's \u003ca href=\"https://cnn.com/2019/10/09/politics/syria-turkey-invasion-intl-hnk/index.html\" target=\"_blank\">military offensive\u003c/a> into northeastern Syria, \u003ca href=\"https://www.cnn.com/middleeast/live-news/syria-turkey-military-offensive-dle-intl/index.html\" target=\"_blank\">an operation\u003c/a> that has sparked a political firestorm in the United States over the fate of US-allied Kurds in the area.",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/world/kurds-in-syria-explainer-trnd/index.html",
                    "headline": "Who are the Kurds and why are they under attack?",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009144627-09-turkey-syria-offensive-1009-small-11.jpg",
                    "duration": "",
                    "description": "Hundreds of people living in northern Syria near the Turkish border are fleeing, herding their loved ones and running from an unknown fate as fires blaze behind them.",
                    "layout": ""
                }, {
                    "uri": "/videos/world/2019/10/09/syria-turkey-kurds-offensive-ward-crn-vpx.cnn",
                    "headline": "CNN reporter details scene of Turkish strikes against Kurds",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009133211-fleeing-kurdish-civilians-2-small-11.jpg",
                    "duration": "01:53",
                    "description": "CNN's Clarissa Ward reports from Northern Syria as Turkey conducts military operations against US-backed Kurdish forces in the region.",
                    "layout": "",
                    "iconType": "video"
                }, {
                    "uri": "/2019/10/10/world/syria-turkey-trump-meanwhile-oct-10-intl/index.html",
                    "headline": "4 ways to think about Trump's decision ",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009152827-10-turkey-syria-unfurled-small-11.jpg",
                    "duration": "",
                    "description": "This might be Donald Trump's most unpopular foreign policy decision yet. ",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/politics/donald-trump-impeachment-mitch-mcconnell/index.html",
                    "headline": "Trump warns Senate leader about disloyal Republicans",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/190214165421-trump-mcconnell-national-emergency-04-small-11.jpg",
                    "duration": "",
                    "description": "\u003ca href=\"http://www.cnn.com/politics/live-news/impeachment-inquiry-10-10-2019/index.html\" target=\"_blank\">• \u003cstrong>LIVE: \u003c/strong>Trump tweets about his accomplishments\u003c/a>\u003cbr />\u003ca href=\"https://www.cnn.com/2019/10/10/world/bernie-sanders-and-the-exhausting-campaign-trail-intl/index.html\" target=\"_blank\">• \u003cstrong>ANALYSIS: \u003c/strong>America's presidential race is most grueling experience in politics\u003c/a>\u003cbr />• \u003ca href=\"https://edition.cnn.com/2019/10/09/media/matt-drudge-trump-impeachment/index.html\">Influential conservative sours on Trump\u003c/a>",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/sport/rugby-world-cup-cancel-intl-hnk/index.html",
                    "headline": "\u003cstrong>Rugby World Cup chaos as games canceled \u003c/strong>",
                    "thumbnail": "",
                    "duration": "",
                    "description": "\u003ca href=\"https://edition.cnn.com/2019/10/07/weather/super-typhoon-hagibis/index.html\" target=\"_blank\">• Hagibis is longest-lived super typhoon this year\u003c/a>\u003cbr />\u003ca href=\"https://edition.cnn.com/travel/article/typhoon-hagibis-travel-japan-intl-hnk/index.html\" target=\"_blank\">• How Typhoon Hagibis may affect Japan travel\u003c/a>",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/business/nba-china-partners/index.html",
                    "headline": "All of NBA's official Chinese partners have suspended ties with the league",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009051543-nba-basketball-billboard-china-small-11.jpg",
                    "duration": "",
                    "description": "• \u003ca href=\"http://edition.cnn.com/2019/10/09/us/nba-fan-hong-kong-ejected-trnd/index.html\" target=\"_blank\">NBA fan supporting HK ejected from game\u003c/a>",
                    "layout": ""
                }, {
                    "uri": "/2019/10/10/sport/popovich-donald-trump-kerr-nba-china-spt-intl/index.html",
                    "headline": "Trump criticizes NBA coaches on China",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191010103108-popovich-spt-intl-small-11.jpg",
                    "duration": "",
                    "description": "US President Donald Trump has spoken for the first time about the \u003ca href=\"http://www.cnn.com/2019/10/09/sport/nba-china-houston-rockets-basketball-spt-intl/index.html\" target=\"_blank\">escalating tensions between the NBA and China\u003c/a> as he took aim at the coaches of the San Antonio Spurs and Golden State Warriors.",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/business/singapore-world-economic-forum/index.html",
                    "headline": "US no longer most competitive economy",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009023646-singapore-economy-report-small-11.jpg",
                    "duration": "",
                    "description": "\u003ca href=\"http://www.cnn.com/travel/article/singapore-50-reasons/index.html\" target=\"_blank\">Singapore\u003c/a> has knocked the United States out of the top spot in the World Economic Forum's \u003ca href=\"https://www.weforum.org/reports/global-competitiveness-report-2019-searching-for-the-win-win-policy-space\" target=\"_blank\">annual competitiveness report\u003c/a>. ",
                    "layout": ""
                }, {
                    "uri": "/videos/politics/2019/10/10/fox-news-impeachment-poll-sot-ctn-vpx.cnn",
                    "headline": "Fox News: Voters support impeachment",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009234452-01-donald-trump-october-9-2019-small-11.jpg",
                    "duration": "00:56",
                    "description": "A new Fox News poll shows that a majority of registered voters are for the impeachment and removal of President Donald Trump from office, up 9 points from polling in July.",
                    "layout": "",
                    "iconType": "video"
                }, {
                    "uri": "/2019/10/09/us/halle-germany-synagogue-attack-video/index.html",
                    "headline": "German synagogue gunman couldn't break down the door. That saved lives",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009090927-05-germany-incident-1009-small-11.jpg",
                    "duration": "",
                    "description": "Streaming live from a camera mounted on his helmet, a gunman pushed on the doors of a synagogue, fired several shots at a lock on the door, stuck an explosive in a door jam and lit it.",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/middleeast/iraq-protests-footage-arwa-damon-color-intl/index.html",
                    "headline": "Iraqi protesters say they have videos of government atrocities",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009121729-baghdad-protestor-killed-iraq-intl-vpx-small-11.jpg",
                    "duration": "",
                    "description": "By night, \u003ca href=\"https://cnn.com/2013/10/30/world/meast/iraq-history-fast-facts/index.html\" target=\"_blank\">Baghdad's\u003c/a> streets are eerily quiet, punctuated with smatterings of gunfire -- be it a single shot or something more sustained and intense.",
                    "layout": ""
                }, {
                    "uri": "/2019/10/10/business/hurun-china-rich-list-jack-ma/index.html",
                    "headline": "Tech billionaires dominate China's rich list",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191010002458-jack-ma-chinese-billionaires-restricted-small-11.jpg",
                    "duration": "",
                    "description": "China's wealth is becoming increasingly concentrated in the hands of \u003ca href=\"http://www.cnn.com/2019/09/09/tech/jack-ma-retire-alibaba/index.html\" target=\"_blank\">tech entrepreneurs\u003c/a>, although some pharmaceutical moguls and pig farmers are breaking into the ranks of the \u003ca href=\"http://www.hurun.net/EN/Article/Details?num=CE08472BB47D\" target=\"_blank\">super rich\u003c/a>. ",
                    "layout": ""
                }, {
                    "uri": "/videos/politics/2019/10/10/matt-drudge-trump-impeachment-sot-vpx-nr.cnn",
                    "headline": "Trump's conservative ally may be turning",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009105320-01-trump-1008-small-11.jpg",
                    "duration": "01:20",
                    "description": "President Donald Trump, facing an ever-deepening scandal that threatens to swallow his presidency, appears to have lost a key ally in conservative media: The Drudge Report.",
                    "layout": "",
                    "iconType": "video"
                }, {
                    "uri": "/2019/10/09/tech/europe-5g-attack/index.html",
                    "headline": "EU's stark warning on 5G ",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009090731-5g-technology-europe-restricted-small-11.jpg",
                    "duration": "",
                    "description": "The European Union has warned that \u003ca href=\"https://edition.cnn.com/2019/08/09/tech/5g-review/index.html\" target=\"_blank\">5G networks\u003c/a> could be left vulnerable to attack from state-backed hackers if operators use too many parts from a single supplier. ",
                    "layout": ""
                }, {
                    "uri": "/travel/article/virgin-atlantic-sexual-harassment-seat-messaging-video/index.html",
                    "headline": "Time's up for Virgin's airplane 'flirt' tool",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/130809084617-virgin-atlantic-plane-small-11.jpg",
                    "duration": "",
                    "description": "\"I've been in my share of compromising positions,\" says the guy in the airline company video. \"Here's my guide to getting lucky at 35,000 feet.\"",
                    "layout": ""
                }, {
                    "uri": "/travel/article/france-watch-stolen-intl-hnk-scli/index.html",
                    "headline": "$800,000 watch stolen from wrist in Paris",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009084429-richard-mille-diamond-twister-watch-small-11.jpg",
                    "duration": "",
                    "description": "A Japanese businessman had a watch worth more than $800,000 seized from his wrist outside a five-star hotel in Paris, police said. ",
                    "layout": ""
                }, {
                    "uri": "/2019/10/10/world/nobel-peace-prize-2019-favorites-scli-intl/index.html",
                    "headline": "\u003cstrong>The Nobel Peace Prize favorites\u003c/strong>",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009094013-greta-thunberg-190918-small-11.jpg",
                    "duration": "",
                    "description": "\u003ca href=\"https://cnn.com/2019/09/23/weather/greta-thunberg-unga-climate-speech-intl/index.html\" target=\"_blank\">Greta Thunberg\u003c/a>, the 16-year-old climate activist, is widely considered by bookmakers to be the favorite to win the 100th \u003ca href=\"https://cnn.com/2013/09/12/world/nobel-prize-fast-facts/index.html\" target=\"_blank\">Nobel\u003c/a> Peace Prize. ",
                    "layout": ""
                }, {
                    "uri": "/2019/10/10/football/petr-cech-ice-hockey-spt-intl/index.html",
                    "headline": "Former Chelsea keeper signs for English ice hockey team",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191010101920-petr-cech-ice-hockey-1-small-11.jpg",
                    "duration": "",
                    "description": "Petr Cech clearly hates goals.",
                    "layout": ""
                }, {
                    "uri": "/videos/media/2019/10/10/dems-candidates-one-question-stephen-colbert-late-night-laughs-orig-vpx.cnn",
                    "headline": "'Late Show' staffers have fun with candidates",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191010022633-democratic-candidates-stephen-colbert-late-night-laughs-orig-small-11.jpg",
                    "duration": "01:24",
                    "description": "2020 Democratic candidates Sen. Bernie Sanders (I-VT), Sen. Elizabeth Warren (D-MA), and Mayor Pete Buttigieg participate in the \"Just One Question\" segment on \"The Late Show with Stephen Colbert.\" ",
                    "layout": "",
                    "iconType": "video"
                }, {
                    "uri": "/2019/10/10/health/humans-salamander-regenerate-intl-hnk-scli-scn/index.html",
                    "headline": "Humans have a 'salamander-like' ability to regrow cartilage, study finds",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191010122644-spotted-salamander-small-11.jpeg",
                    "duration": "",
                    "description": "Humans may not be able to regrow amputated limbs like salamanders can -- but we do have a \"salamander-like\" ability to regrow damaged cartilage, a new study has found. ",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/us/north-carolina-no-laundry-trnd/index.html",
                    "headline": "Town told to not wash any clothes for 5 days ",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/160120164932-laundry-tease-small-11.jpg",
                    "duration": "",
                    "description": "Residents of a North Carolina beach town have \u003ca href=\"https://www.cnn.com/2019/09/27/health/washing-machine-bacteria-wellness/index.html\" target=\"_blank\">given up on laundry\u003c/a> for the week -- after the government asked them to. ",
                    "layout": ""
                }, {
                    "uri": "/videos/travel-play/2018/04/25/jessica-nabongo.cnn",
                    "headline": "Meet the first black woman to visit every country",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/180419111915-jessica-nabongo-cartagena-small-11.jpg",
                    "duration": "02:18",
                    "description": "Jessica Nabongo completes her goal in visiting 195 countries",
                    "layout": "",
                    "iconType": "video"
                }, {
                    "uri": "/2019/10/09/africa/bobi-wine-concert-ban-intl/index.html",
                    "headline": "Popstar escapes house arrest in daring motorbike stunt",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/190131172814-bobi-wine-campaign-small-11.jpg",
                    "duration": "",
                    "description": "Police and military have surrounded the home of Ugandan popstar and presidential hopeful Bobi Wine after his Independence Day concert was canceled, the singer said.",
                    "layout": ""
                }, {
                    "uri": "/travel/article/hanoi-train-street-close-cafes-intl-hnk/index.html",
                    "headline": "\u003cstrong>Hanoi to shut down 'train street' cafes\u003c/strong>",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/181119103147-hanoi-train-tracks-small-11.jpg",
                    "duration": "",
                    "description": "Authorities are clamping down on the cafes that line one of Hanoi's most famous roads, citing overtourism and safety concerns.  ",
                    "layout": ""
                }, {
                    "uri": "/style/article/architectural-digest-100-years/index.html",
                    "headline": "The best A-list celebrity homes of the past 100 years",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/190923003311-07-architectural-digest-100-years-small-11.jpg",
                    "duration": "",
                    "description": "From silent movie-era stars to the social media influencers of the 21st century, the public's desire to see inside private sanctuaries of the wealthy and famous has endured, even as celebrity culture has progressed from one phase to the next.",
                    "layout": ""
                }, {
                    "uri": "/style/article/remember-when-kurt-cobain-mtv-cardigan/index.html",
                    "headline": "Remember when Kurt Cobain effortlessly defined 'grunge' style? ",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/190823040817-kurt-cobain-sweater-card-restricted-small-11.jpg",
                    "duration": "",
                    "description": "Remember when Nirvana frontman Kurt Cobain defined \"grunge\" without even trying?",
                    "layout": ""
                }, {
                    "uri": "/2019/10/08/world/david-de-rothschild-modern-explorers/index.html",
                    "headline": "David de Rothschild: 'We are at war with nature'",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/190917150208-david-de-rothschild-2019-4-small-11.jpg",
                    "duration": "",
                    "description": "In an era when there's nowhere left on earth to plant a flag, exploration is changing. A new generation of modern explorers, less concerned with feats of athleticism than they are with saving what remains of nature, has the floor.",
                    "layout": ""
                }, {
                    "uri": "/travel/article/tourists-behaving-badly/index.html",
                    "headline": "Are tourists becoming worse than ever?",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/190701140209-overtourism-small-11.jpg",
                    "duration": "",
                    "description": "Whether it's skinny dipping in Venetian canals, chasing geishas down the street in Japan, or simply turning up in unsustainable numbers, tourists have been making headlines for all the wrong reasons recently.",
                    "layout": ""
                }, {
                    "uri": "/style/article/court-blocks-vitruvian-man-intl-scli/index.html",
                    "headline": "Court blocks loan of da Vinci's famed 'Vitruvian Man' to Louvre ",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009103929-01-vitruvian-man-small-11.jpg",
                    "duration": "",
                    "description": "An Italian court has blocked the loan of a famed sketch by \u003ca href=\"https://cnn.com/style/article/isleworth-mona-lisa/index.html\" target=\"_blank\">Leonardo da Vinci\u003c/a> to the \u003ca href=\"https://cnn.com/travel/article/private-tour-louvre-paris/index.html\" target=\"_blank\">Louvre\u003c/a> museum in Paris, ahead of a highly anticipated exhibition of the artist's greatest works. ",
                    "layout": ""
                }, {
                    "uri": "/travel/article/democracy-and-human-rights-memorial-hall-seoul/index.html",
                    "headline": "Human rights museum opens in former Seoul torture site",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009035415-seoul-human-rights-museum-small-11.jpg",
                    "duration": "",
                    "description": "A museum dedicated to human rights has opened in a notorious building in \u003ca href=\"https://www.cnn.com/travel/destinations/seoul\" target=\"_blank\">Seoul\u003c/a> where South Korean pro-democracy activists were once tortured.",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/us/counterfeit-nike-shoes-trnd/index.html",
                    "headline": "These 14,000 Nikes were worth almost $2 million. Except they were fake",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009162107-01-counterfeit-nikes-small-11.jpg",
                    "duration": "",
                    "description": "A large shipment of popular retro Nike shoes turned out to be counterfeits.",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/sport/tattersalls-horse-racing-godolphin-sheikh-mohammed-spt-intl/index.html",
                    "headline": "\u003cstrong>Dubai ruler spends more than $4M on horse\u003c/strong>",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009105310-sheikh-mohammed-racing-small-11.jpg",
                    "duration": "",
                    "description": "",
                    "layout": ""
                }, {
                    "uri": "/2019/10/10/sport/blaine-scully-usa-rugby-world-cup-spt-intl/index.html",
                    "headline": "Rugby World Cup: US tournament would be a 'catapult to the future'",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191008102119-usa-rugby-small-11.jpg",
                    "duration": "",
                    "description": "Japan's \u003ca href=\"https://edition.cnn.com/2019/09/28/sport/rugby-world-cup-japan-celebrates-famous-victory/index.html\" target=\"_blank\">unexpected defeat of Ireland\u003c/a> at the \u003ca href=\"https://edition.cnn.com/specials/sport/rugby-world-cup-japan-2019-spt-intl\" target=\"_blank\">Rugby World Cup\u003c/a> will no doubt have drawn envious glances from teams that no so long ago viewed the Brave Blossoms as close rivals.",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/football/rebekah-vardy-coleen-rooney-leaked-stories-instagram-spt-intl/index.html",
                    "headline": "Wives of football stars embroiled in social media spat over 'leaked stories'",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009140559-coleen-rooney-small-11.jpg",
                    "duration": "",
                    "description": "The wives of former England football internationals Wayne Rooney and Jamie Vardy have become embroiled in a social media row over \"leaked stories.\"",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/opinions/trumps-secrecy-defines-him-dantonio/index.html",
                    "headline": "\u003cstrong>Michael D'Antonio:\u003c/strong> Secrecy is Donald Trump's Achilles heel",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009105320-01-trump-1008-small-11.jpg",
                    "duration": "",
                    "description": "Secrecy has always been \u003ca href=\"https://www.crainsnewyork.com/markets/why-trumps-are-fighting-keep-their-business-secrets\" target=\"_blank\">Donald Trump's thing\u003c/a>. His net worth? It's hidden in private companies that produce no reliable public reports. His charitable giving?  Listed on tax forms that were also kept secret.  Profits on investments? Indebtedness? Business traffic at his properties? Secret. Secret. Secret.  How ironic, then, that he's now on the path to possible impeachment thanks to what looks like a scheme he couldn't hide. ",
                    "layout": ""
                }, {
                    "uri": "/2019/10/09/opinions/bernie-sanders-health-kassam-eschenheimer/index.html",
                    "headline": "\u003cstrong>Physicians:\u003c/strong> Bernie Sanders had a heart attack, but of COURSE he could still be president",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191009164905-sanders-softball-small-11.jpg",
                    "duration": "",
                    "description": "The suggestion that Sanders should stand down and endorse another candidate because of a health condition that many Americans live and work with is not only callous, but carries a bitter flavor of discrimination, write Adam Kassam and Ben Eschenheimer.",
                    "layout": ""
                }, {
                    "uri": "/2019/10/08/opinions/ellen-degeneres-george-w-bush-granderson/index.html",
                    "headline": "\u003cstrong>LZ Granderson:\u003c/strong> What Ellen DeGeneres' critics get totally wrong",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191008090152-ellen-george-w-bush-split-1-small-11.jpg",
                    "duration": "",
                    "description": "One of my good friends and one of the kindest human beings I have ever met worked to make me a second-class citizen. Matthew Dowd was President George W. Bush's chief strategist during the 2004 presidential election, an election cycle that saw the leader of the free world \u003ca href=\"https://www.nytimes.com/2004/02/24/politics/bush-backs-ban-in-constitution-on-gay-marriage.html\" target=\"_blank\">endorse a constitutional amendment banning same-sex marriage,\u003c/a> thus weaponizing bigotry to get re-elected. ",
                    "layout": ""
                }, {
                    "uri": "/2019/10/08/opinions/syria-kurds-republicans-filipovic/index.html",
                    "headline": "\u003cstrong>Jill Filipovic:\u003c/strong> Even Republicans know that Trump can't do the job of president ",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/191008170654-trump-filipovic-small-11.jpg",
                    "duration": "",
                    "description": "President Donald Trump has finally managed to do something so egregious that some key Republican colleagues have taken the near-unprecedented step of... \u003ca href=\"https://www.washingtonpost.com/politics/mcconnell-joins-other-republicans-in-rebuking-trumps-syria-withdrawal/2019/10/07/aef0d11e-e914-11e9-9306-47cb0324fd44_story.html\" target=\"_blank\">criticizing him\u003c/a>. ",
                    "layout": ""
                }, {
                    "uri": "/2019/09/25/sport/gallery/2019-rugby-world-cup/index.html",
                    "headline": "Rugby World Cup in pictures",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/190924115937-22-what-a-shot-0922-copy-restricted-small-11.jpg",
                    "duration": "",
                    "description": "",
                    "layout": "",
                    "iconType": "gallery"
                }, {
                    "uri": "/travel/gallery/ireland-best-hotels-and-vacation-rentals/index.html",
                    "headline": "Best castle stays in Ireland",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/190213114655-01-worlds-best-hotel-secrets-small-11.jpg",
                    "duration": "",
                    "description": "",
                    "layout": "",
                    "iconType": "gallery"
                }, {
                    "uri": "/2019/01/07/sport/gallery/beautiful-horse-racecourses-spt-intl/index.html",
                    "headline": "The world's most beautiful racecourses",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/181220145241-meydan-racecourse-small-11.jpg",
                    "duration": "",
                    "description": "From beaches and chateaux, to glorious greensward, snow-covered lakes and tracks squeezed amongst skyscrapers, the sport of kings offers some spectacular venues.",
                    "layout": "",
                    "iconType": "gallery"
                }, {
                    "uri": "/style/gallery/plane-graveyards-troy-paiva/index.html",
                    "headline": "A look at California's eerie plane graveyards",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/190625122448-california-plane-graveyards-5-small-11.jpg",
                    "duration": "",
                    "description": "",
                    "layout": "",
                    "iconType": "gallery"
                }, {
                    "uri": "/travel/gallery/mozambique-bazaruto-archipelago-photos/index.html",
                    "headline": "Mozambique's luxury escapes with horses",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/180515111309-mozambique-horse-safari-story---vilankulo-small-11.jpg",
                    "duration": "",
                    "description": "",
                    "layout": "",
                    "iconType": "gallery"
                }, {
                    "uri": "/style/gallery/ian-weldon-wedding-photos/index.html",
                    "headline": "Photographer captures weddings in their candid glory",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/190702151929-alternative-wedding-photos-1-small-11.jpg",
                    "duration": "",
                    "description": "Opting for spontaneous snapshots over staged portraits, Ian Weldon is a wedding photographer like no other.",
                    "layout": "",
                    "iconType": "gallery"
                }, {
                    "uri": "/2019/09/29/asia/china-beijing-mao-october-1-70-intl-hnk/index.html",
                    "headline": "\u003cstrong>They were born at the start of Communist China. 70 years later, their country is unrecognizable \u003c/strong>",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/190926174447-02-xiao-anniversary-photo-small-11.jpg",
                    "duration": "",
                    "description": "",
                    "layout": ""
                }, {
                    "uri": "/2019/09/27/world/ted-turner-captain-planet-intl/index.html",
                    "headline": "\u003cstrong>Is Ted Turner the real Captain Planet?\u003c/strong>",
                    "thumbnail": "//cdn.cnn.com/cnnnext/dam/assets/190919102058-ted-turner-smile-small-11.jpg",
                    "duration": "",
                    "description": "",
                    "layout": ""
                }]
            },
            registryURL: "//cdn.cnn.com/ads/cnni/cnni_homepage.json",
            entitlementSingletons: [{
                "id": "ad_mod_85a882a72",
                "scriptName": "//cdn.cnn.com/ads/cnni/singles/cnni_entitlement_01.js"
            }, {
                "id": "ad_mod_e74dbd68d",
                "scriptName": "//cdn.cnn.com/ads/cnni/singles/cnni_entitlement_02.js"
            }, {
                "id": "ad_mod_596291844",
                "scriptName": "//cdn.cnn.com/ads/cnni/singles/cnni_entitlement_03.js"
            }, {
                "id": "ad_mod_9a979d11",
                "scriptName": "//cdn.cnn.com/ads/cnni/singles/cnni_entitlement_04.js"
            }, {
                "id": "ad_mod_2b3ba0432",
                "scriptName": "//cdn.cnn.com/ads/cnni/singles/cnni_entitlement_05.js"
            }],
            zoneIds: ["intl_homepage1-zone-1", "intl_homepage1-zone-2", "intl_homepage1-zone-3", "intl_homepage1-zone-4", "intl_homepage2-zone-1", "intl_homepage3-zone-1", "intl_homepage3-zone-3", "intl_homepage3-zone-4"],
            loadAllZonesLazy: true,
            lazyLoad: true,
            enableIntelligentLoad: true,
            feedback: {
                "apiEndpoint": "https://mailcar.cnn.io/api/v1/",
                "ui": "https://mailcar.ui.cnn.io/"
            },
            uri: "/intl_index.html",
            canonicalUrl: "https://edition.cnn.com",
            editionizedUrl: "https://edition.cnn.com"
        };
        FAVE.settings = {
            "amazonA9": {
                "enabled": true,
                "refreshedTargetingData": {
                    "timeout": 1000
                },
                "targetingData": {
                    "timeout": 500
                }
            },
            "autoplayMuteEnabledPages": {
                "sections": ["entertainment", "health", "homepage", "intl_homepage", "opinions", "politics", "us", "videos", "vr", "world"]
            },
            "chartbeat": {
                "enabled": true
            },
            "conviva": {
                "applicationName": "CNN-FAVE",
                "custom": {
                    "applicationName": "CNN-Web",
                    "applicationNameByVertical": {
                        "business": "CNN-Web-Business"
                    }
                },
                "customerKey": "a6709203f34992a5095d2bc7ceaf2ec504f651a8",
                "enabled": true,
                "gatewayUrl": "",
                "integration": "conviva"
            },
            "cssUrl": "//registry.api.cnn.io/bundles/fave/latest-2.x/css",
            "enabledPageTypes": {
                "exclude": {
                    "article": ["studentnews"],
                    "section": ["studentnews"],
                    "video": ["studentnews"]
                }
            },
            "freewheel": {
                "assetIdPrefix": "cnn-",
                "constantSsidPrefix": "const-",
                "enableOutOfFocusAdRequest": true,
                "focusKeyName": "inFocus",
                "globalAdTimer": {
                    "adComplete": {
                        "errorCode": {
                            "skip": "SKIP_CURRENT_AD_COMPLETE",
                            "stop": "STOP_CURRENT_AD_COMPLETE"
                        },
                        "timeout": 30000,
                        "type": "adComplete"
                    },
                    "adWaterfall": {
                        "errorCode": {
                            "skip": "SKIP_CURRENT_AD_WATERFALL",
                            "stop": "STOP_CURRENT_AD_WATERFALL"
                        },
                        "timeout": 30000,
                        "type": "adWaterfall"
                    },
                    "enabled": true,
                    "errorInfo": {
                        "skip": "A custom global ad timeout of {timeout} milliseconds caused the skipCurrentAd() function to be invoked. Attempt {skipCurrentAdAttempts} of {maxSkipCurrentAdAttempts}. Type: {type}",
                        "stop": "The maximum of {maxSkipCurrentAdAttempts} skip current ad attempts has been exceeded causing the stop() function to be invoked. Timeout: {timeout} milliseconds. Type: {type}."
                    },
                    "maxSkipCurrentAdAttempts": 0
                },
                "htmlAdLoadTimeout": 5000,
                "midrollTemporalSlotName": "MID",
                "networkSuffix": ":turner_html5_pem",
                "playername": "theo",
                "postrollTemporalSlotName": "POST",
                "prerollTemporalSlotName": "PRE",
                "profileId": "cnn_bvp_player",
                "queryParams": {
                    "adNetworkId": {
                        "dev": 42448,
                        "prod": 48804
                    },
                    "adServerRootUrl": {
                        "dev": "//bea4.v.fwmrm.net/ad/g/1?",
                        "prod": "//bea4.cnn.com/ad/g/1?"
                    }
                },
                "serverUrl": "//bea4.cnn.com/ad/g/1?",
                "setRequestMode": true,
                "submitRequestTimeout": 5,
                "videoProgressDetectTimeout": 5000,
                "videoStartDetectTimeout": 5000,
                "vpaidCreativeTimeoutDelay": 5000
            },
            "iframe": "\u003ciframe width=\"416\" height=\"234\" src=\"//fave.api.cnn.io/v1/fav/?video={video}&customer=cnn&edition={edition}&env={env}\" frameborder=\"0\">\u003c/iframe>",
            "injectCss": false,
            "injectorJs": {
                "featureName": "cnn-fave-lib",
                "source": "//registry.api.cnn.io/bundles/fave/latest-2.x/js"
            },
            "jsmd": {
                "videoPlayer": "theo"
            },
            "live": {
                "enabled": true,
                "enabledLiveStreams": ["cvplive/cvpstream0", "cvplive/cvpstream1", "cvplive/cvpstream2", "cvplive/cvpstream3", "cvplive/cvpstream4", "cvplive/cnngo", "cvplive/cnniuk"]
            },
            "mediaSession": {
                "defaultPoster": "//cdn.cnn.com/cnn/.e1mo/img/4.0/logos/CNN_logo_400x400.png",
                "seekTime": 10
            },
            "oneTapEnabledPages": {
                "pageTypes": ["section"],
                "sections": ["homepage", "intl_homepage", "health", "opinions", "politics", "us", "world"]
            },
            "oneClickEnabledPages": {
                "pageTypes": ["section"],
                "sections": ["homepage", "intl_homepage"]
            },
            "optimizely": {
                "enabled": true
            },
            "player": {
                "adMode": "standard",
                "allowStreamTriggeredAdBreaksOnIOS": true,
                "autoplay": {
                    "compatibility": {
                        "maxDuration": 10000,
                        "maxRetries": 10,
                        "testMobile": false,
                        "videoUrl": "data:video/mp4;base64,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"
                    },
                    "muted": {
                        "desktop": {
                            "enabled": true,
                            "viewportChange": {
                                "enableForAllVideos": false,
                                "pauseVideoOnViewportChange": false,
                                "pauseMutedVideoOnViewportChange": false,
                                "playerInViewportPercent": 75,
                                "throttleMillisecondLimit": 1000
                            }
                        },
                        "mobile": {
                            "enabled": true,
                            "viewportChange": {
                                "enableForAllVideos": false,
                                "pauseVideoOnViewportChange": false,
                                "pauseMutedVideoOnViewportChange": false,
                                "playerInViewportPercent": 75,
                                "throttleMillisecondLimit": 1000
                            }
                        },
                        "unmuteCTA": {
                            "variant": {
                                "shrink": false,
                                "wave": false
                            }
                        }
                    },
                    "unmuted": {
                        "desktop": {
                            "playOnDocumentInteraction": false
                        }
                    }
                },
                "closedCaptionsCustomMenu": {
                    "enabled": true
                },
                "closedCaptionsOn": false,
                "closedCaptionsThreshold": 0.2,
                "fullscreenMaxBitrate": "Infinity",
                "maxBitrate": "1500000",
                "message": {
                    "liveOffline": "The live stream went offline.\u003cbr/>Player will resume on rebroadcast.",
                    "error": "The video player encountered an error."
                },
                "onAdEnd": {
                    "token": "Completed"
                },
                "onAdPlay": {
                    "token": ""
                },
                "onTrackingContentBegin": {
                    "playOptionsThumb": "none",
                    "contentMode": "vod",
                    "contentSource": "cnn"
                },
                "onTrackingContentStart": {
                    "contentType": "VOD"
                },
                "poster": {
                    "big": "768x432",
                    "small": "640x360",
                    "override": true,
                    "overrideImages": {
                        "big": "medium",
                        "small": "small"
                    }
                },
                "preferredFileType": "",
                "preload": "auto",
                "progressFixedDecimal": 3,
                "progressTrackingInterval": 40,
                "sourcePlaceholderAsset": "data:video/mp4;base64,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",
                "stateRemembrance": {
                    "closedCaptions": {
                        "enabled": true,
                        "storageName": "fave_closed_captions",
                        "onStateId": "On",
                        "offStateId": "Off"
                    },
                    "muted": {
                        "defaultValue": false,
                        "storageName": "muted"
                    },
                    "volume": {
                        "defaultValue": 1,
                        "storageName": "volume"
                    }
                },
                "vr": {
                    "clickAndDragCta": {
                        "clickDragText": "Click and drag to explore",
                        "enabled": true,
                        "fadeInDelay": 3000,
                        "fadeOutDelay": 7000
                    },
                    "grabCursorTimeout": 100
                }
            },
            "server": {
                "customer": "cnn",
                "url": "//fave.api.cnn.io/v1/video"
            },
            "theoplayer": {
                "allowNativeFullscreen": false,
                "allowTextTrackStyle": true,
                "initialRendition": "first",
                "isEmbeddable": true,
                "targetBuffer": 20
            },
            "tokenService": {
                "authTokenPrefix": "hdnea=",
                "url": "//token.vgtf.net/token/token_spe"
            },
            "userTracking": {
                "enabled": true,
                "features": {
                    "ads": true,
                    "analytics": true,
                    "personalization": true,
                    "social": true
                }
            },
            "windows7PreferredFileType": "mp4"
        };
        FAVE.settings.enabled = true;
        FAVE.settings.oneTapEnabledPage = true;
        FAVE.settings.oneClickEnabledPage = true;
        FAVE.settings.autoplayMutedEnabledPage = true;
        FAVE.settings.server.edition = "international";
        FAVE.settings.server.environment = "prod";
        FAVE.settings.conviva.custom.applicationName = CNN.contentModel.vertical && FAVE.settings.conviva.custom.applicationNameByVertical && FAVE.settings.conviva.custom.applicationNameByVertical[CNN.contentModel.vertical] || FAVE.settings.conviva.custom.applicationName;
    