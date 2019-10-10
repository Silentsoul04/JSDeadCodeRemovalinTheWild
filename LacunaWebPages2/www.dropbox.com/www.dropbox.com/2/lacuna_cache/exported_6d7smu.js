
        /* global: ensemble is from ensemble_appshell.js */
        /* global: configureRequire comes from the
            fake_require_snippet (ui/page/script_tags.py) */
        /* global: addRequireLoadCallback comes from init_requirejs.ts */
        /* global: execTiers comes from require_init.ts */
        /* global: requirejs defined by alameda_bundle */
        ensemble.processChunk("embedded-app", "done-1", function() {
            ensemble.setupPagelet("embedded-app", "embedded-app-placeholder", {
                    "stylesheets": ["https://cfl.dropboxstatic.com/static/css/index/planks/product_tour-vfljRHfxQ.css", "https://cfl.dropboxstatic.com/static/css/index/obsidian/logo-vflbo_vhR.css", "https://cfl.dropboxstatic.com/static/css/index/rebrand_page-vflLg_VeF.css", "https://cfl.dropboxstatic.com/static/css/index/planks/zeus_rebrand_sub_hero-vflXrHzJn.css", "https://cfl.dropboxstatic.com/static/css/index/components/zeus_arrow_button-vflknw2-O.css", "https://cfl.dropboxstatic.com/static/css/index/planks/zeus_rebrand_sidekick-vfl4PwtNs.css", "https://cfl.dropboxstatic.com/static/css/index/zeus_rebrand_page-vflMd42Yn.css", "https://cfl.dropboxstatic.com/static/css/rebrand/elements/homepage_login_register_panel-vfl6sZUf-.css", "https://cfl.dropboxstatic.com/static/css/index/components/rebrand_navigation-vflKKYn78.css", "https://cfl.dropboxstatic.com/static/css/index/planks/zeus_rebrand_hero-vfl7JfmfH.css"],
                    "delayRender": false,
                    "html": "",
                    "driver": "js_only",
                    "name": "index__index_rpc"
                }, false,
                function() {
                    addRequireLoadCallback(function() {
                        execTiers(requirejs.config({
                            "context": "4a55e199e52b6cf0688cc4cd0270f40f827aa860"
                        }), function() {}, [
                            [
                                [
                                    ["modules/clean/react/index/zeus_rebrand_page", "modules/clean/init_react", "modules/clean/api_v2/transport/jquery", "external/lodash", "modules/clean/perf_tools/resource_utils", "external/redux-thunk", "modules/clean/react/placeholder_img", "modules/clean/react/async/loadable", "modules/clean/react/index/constants", "modules/clean/react/index/components/rebrand_hero", "spectrum-arbor/util/breakpoint_class_generator", "external/react-dom-factories", "modules/constants/locales", "spectrum-arbor/atoms/arbor_grid_element", "modules/clean/react/index/planks/product_tour", "spectrum-arbor/atoms/arbor_picture", "modules/core/uri", "modules/clean/react/index/components/rebrand_video", "spectrum/util/raf_throttle", "modules/clean/js_client_stopwatch", "modules/clean/stormcrow/experiment", "modules/constants/page_load", "spectrum-arbor/atoms/arbor_grid_container", "spectrum-arbor/util/devices", "modules/core/exception", "modules/clean/ux_analytics_utils", "external/tracekit", "modules/clean/react/index/interfaces/interfaces", "modules/clean/ajax", "modules/clean/react/index/planks/zeus_rebrand_hero", "modules/clean/devtools/panels/performance/perf_hub_action_types", "modules/core/notify", "modules/clean/js_basic_stopwatch", "modules/clean/react/index/store", "spectrum/util/debounce", "modules/clean/storage", "modules/clean/dbmodal_stack", "modules/clean/react/index/planks/zeus_rebrand_pre_footer", "external/tslib", "modules/clean/redux/devtools", "modules/clean/react/helpers", "modules/core/cancelable_promise", "modules/core/accessible_announce", "modules/constants/viewer", "spectrum-arbor/planks/arbor_pre_footer", "spectrum-arbor/atoms/arbor_aspect_box", "modules/clean/devtools/panels/performance/perf_hub_actions", "modules/clean/react/locale_selector", "modules/clean/intl_router_utils", "external/classnames", "modules/clean/perf_tools/web_timing_utils", "modules/clean/event_load", "modules/clean/css", "modules/clean/react/index/components/rebrand_logo", "modules/clean/react/button", "modules/clean/viewer", "modules/clean/redux/unsupported", "apex-metrics", "modules/clean/global_constants", "modules/clean/raf_throttle", "modules/clean/react/css", "modules/clean/perf_tools/cpu_utils", "modules/constants/ajax_strings", "modules/clean/api_v2/error", "prop-types", "modules/clean/react/index/components/rebrand_footer_plane", "modules/clean/user", "modules/core/exception_tag_registry", "modules/clean/csrf", "modules/core/xhr", "langpack", "modules/clean/react/index/components/zeus_arrow_button", "modules/clean/react/rebrand/elements/rebrand_arbor_footer_component", "modules/clean/react/index/components/rebrand_sidekick", "modules/clean/react_format", "modules/clean/job_progress", "spectrum-arbor/atoms/arbor_headline", "modules/clean/window_util", "modules/clean/keycode", "modules/core/browser_detection", "modules/clean/api_v2/types", "modules/clean/api_v2/client_base", "spectrum-arbor/atoms/arbor_link", "modules/clean/react/index/components/rebrand_navigation", "external/sha1", "modules/clean/react/index/components/rebrand_media", "modules/constants/env", "modules/clean/react/image", "jquery", "modules/clean/react/index/components/rebrand_plane", "modules/clean/api_v2/noauth_client", "modules/clean/react/index/components/rebrand_creation", "modules/clean/web_module_timing", "modules/clean/flux/dispatcher", "modules/clean/react/index/planks/zeus_rebrand_sidekick", "hoist-non-react-statics", "modules/clean/react/sprite", "modules/clean/react/modal", "modules/clean/react/document", "spectrum-arbor/atoms/arbor_copy", "modules/clean/react/growth_pages/planks/pre_footer", "modules/core/i18n", "modules/clean/metrics", "modules/constants/request", "modules/pagelet_config", "spectrum-arbor/atoms/arbor_button", "modules/clean/react/rebrand/elements/inline_video", "modules/clean/react/rebrand/elements/device_size", "modules/clean/perf_tools/browser_perf_utils", "modules/core/cookies", "external/flux", "modules/shims/tracekit", "__unstubbed_external/purify", "react", "modules/clean/react/index/planks/zeus_rebrand_sub_hero", "modules/constants/debug", "modules/clean/react/arbor/birch/helpers/easings", "modules/core/dom", "modules/core/browser", "react-dom", "modules/clean/web_timing_logger", "modules/clean/react/index/components/rebrand_mobile_navigation", "modules/clean/react/index/rebrand_page", "modules/core/html", "redux", "modules/clean/perf_tools/web_timing_logger_types", "modules/clean/static_urls", "modules/constants/webtiming"], (function(mod, InitReact) {
                                        InitReact.mountComponent(mod, {
                                            "module_name": "modules/clean/react/index/zeus_rebrand_page",
                                            "props": {
                                                "content": {
                                                    "preFooter": {
                                                        "headline": "Learn more about the benefits of Dropbox",
                                                        "cta": {
                                                            "text": "See features",
                                                            "href": "/features",
                                                            "trackingId": "home_feature_zeus"
                                                        }
                                                    },
                                                    "hero": {
                                                        "body": "Dropbox is the world\u2019s first smart workspace. We bring all your team\u2019s content together while letting you use the tools you love. And we help cut through the clutter, surfacing what matters most.",
                                                        "header": "Focus on the work that matters",
                                                        "cta": "Sign up for free"
                                                    },
                                                    "sidekick": {
                                                        "headline": "Find the right Dropbox plan for you",
                                                        "individual": {
                                                            "heading": "For freelancers and solo workers",
                                                            "cta": {
                                                                "text": "Get Dropbox",
                                                                "href": "/individual",
                                                                "trackingId": "home_prefooter_ind_zeus"
                                                            }
                                                        },
                                                        "team": {
                                                            "heading": "For businesses and teams of any size",
                                                            "cta": {
                                                                "text": "Get Dropbox Business",
                                                                "href": "/business",
                                                                "trackingId": "home_prefooter_biz_zeus"
                                                            }
                                                        }
                                                    },
                                                    "subHero": {
                                                        "body": "Most \u201cproductivity\u201d tools get in your way and constantly disrupt your flow. There\u2019s a more enlightened way to work. Dropbox helps people be organized, stay focused, and get in sync with their teams.",
                                                        "header": "Say goodbye to busywork",
                                                        "imgSrc": "https://cfl.dropboxstatic.com/static/images/index/zeus/home-hero-vflUW4JkN.jpg",
                                                        "imgSrcHiRes": "https://cfl.dropboxstatic.com/static/images/index/zeus/home-hero@2x-vflHykH2Y.jpg"
                                                    },
                                                    "meta": {
                                                        "description": "Dropbox is a modern workspace designed to reduce busywork-so you can focus on the things that matter. Sign in and put your creative energy to work.",
                                                        "title": {
                                                            "base-title": "Dropbox"
                                                        }
                                                    },
                                                    "productTour": {
                                                        "headline": "File storage and sharing are just the beginning",
                                                        "nav": [{
                                                            "imgSrcHiRes": "https://cfl.dropboxstatic.com/static/images/index/zeus/product_tour/home-producttour-organized@2x-vflhgirSc.png",
                                                            "imgSrc": "https://cfl.dropboxstatic.com/static/images/index/zeus/product_tour/home-producttour-organized-vflk9pMET.png",
                                                            "heading": "Be organized",
                                                            "text": "Bring traditional files, cloud content, Dropbox Paper docs, and web shortcuts together in one place\u2014and work the way that works for you."
                                                        }, {
                                                            "imgSrcHiRes": "https://cfl.dropboxstatic.com/static/images/index/zeus/product_tour/home-producttour-focused@2x-vflxKflmW.png",
                                                            "imgSrc": "https://cfl.dropboxstatic.com/static/images/index/zeus/product_tour/home-producttour-focused-vfl_rL0eT.png",
                                                            "heading": "Stay focused",
                                                            "text": "Personalized suggestions give you files and folders when you need them so you spend less time searching."
                                                        }, {
                                                            "imgSrcHiRes": "https://cfl.dropboxstatic.com/static/images/index/zeus/product_tour/home-producttour-insync@2x-vflt3MoK5.png",
                                                            "imgSrc": "https://cfl.dropboxstatic.com/static/images/index/zeus/product_tour/home-producttour-insync-vfl6Niyho.png",
                                                            "heading": "Get in sync",
                                                            "text": "Coordinate with your team and push projects forward with the tools you use every day\u2014all within Dropbox."
                                                        }]
                                                    }
                                                },
                                                "footerContent": [{
                                                    "section": "Dropbox",
                                                    "links": [{
                                                        "href": "/install",
                                                        "label": "Desktop app"
                                                    }, {
                                                        "href": "/mobile",
                                                        "label": "Mobile apps"
                                                    }, {
                                                        "href": "/plans?trigger=homepagefoot",
                                                        "label": "Plans"
                                                    }, {
                                                        "href": "/security",
                                                        "label": "Security"
                                                    }, {
                                                        "href": "/features?trigger=footer",
                                                        "label": "Features"
                                                    }]
                                                }, {
                                                    "section": "Products",
                                                    "links": [{
                                                        "href": "/plus?trigger=foot_global",
                                                        "label": "Plus"
                                                    }, {
                                                        "href": "/pro?trigger=foot_global",
                                                        "label": "Professional"
                                                    }, {
                                                        "href": "/business",
                                                        "label": "Business"
                                                    }, {
                                                        "href": "/enterprise",
                                                        "label": "Enterprise"
                                                    }]
                                                }, {
                                                    "section": "Company",
                                                    "links": [{
                                                        "href": "/about",
                                                        "label": "About us"
                                                    }, {
                                                        "href": null,
                                                        "label": null
                                                    }, {
                                                        "href": "https://bit.ly/dbxdotcomapps",
                                                        "label": "Jobs"
                                                    }, {
                                                        "href": "/news",
                                                        "label": "Press"
                                                    }, {
                                                        "href": "https://investors.dropbox.com/",
                                                        "label": "Investor relations"
                                                    }, {
                                                        "href": "https://blogs.dropbox.com/dropbox",
                                                        "label": "Blog"
                                                    }]
                                                }, {
                                                    "section": "Support",
                                                    "links": [{
                                                        "href": "/help",
                                                        "label": "Help center"
                                                    }, {
                                                        "href": "/contact",
                                                        "label": "Contact us"
                                                    }, {
                                                        "href": "/terms/cookies",
                                                        "label": "Cookies"
                                                    }, {
                                                        "href": "/privacy",
                                                        "label": "Privacy \u0026 terms"
                                                    }, {
                                                        "href": null,
                                                        "label": null
                                                    }, {
                                                        "href": "/sitemap",
                                                        "label": "Sitemap"
                                                    }]
                                                }, {
                                                    "section": "Community",
                                                    "links": [{
                                                        "href": "/developers",
                                                        "label": "Developers"
                                                    }, {
                                                        "href": "/referrals",
                                                        "label": "Referrals"
                                                    }, {
                                                        "href": "https://www.dropboxforum.com",
                                                        "label": "Forum"
                                                    }]
                                                }],
                                                "experiments": {
                                                    "expDiscoChat": "OFF",
                                                    "expBrandCamp2018HpTest": "OFF",
                                                    "expSubgrowthProAXHomepage": "ON"
                                                },
                                                "gates": {
                                                    "isZeusOn": true,
                                                    "homePreloadJsInHomepage": true,
                                                    "seoFooter": false
                                                },
                                                "locale": "en",
                                                "isEdge": false,
                                                "isInternetExplorer": false,
                                                "experimentsContent": null
                                            },
                                            "elem_id": "component7300294629107814292",
                                            "component_name": "IndexZeusRebrandPage"
                                        });
                                    }), "require-tier-init_react_modules/clean/react/index/zeus_rebrand_page-IndexZeusRebrandPage"
                                ]
                            ],
                            [
                                [
                                    ["external/react"], (function(React) {
                                        /* global declaration: React is for devtools */
                                        window.React = React;;
                                    }), "require-tier-react-element-set-global"
                                ],
                                [
                                    ["modules/clean/auth/login/form", "modules/clean/init_react", "modules/clean/react/portal", "modules/clean/auth/login/api", "modules/clean/auth/login/2fa/trust_checkbox", "modules/constants/login_and_register", "modules/clean/auth/login/2fa/phone_form", "modules/clean/profile_services/popup_handler", "modules/clean/auth/authenticator", "modules/clean/abuse/recaptcha_helper", "modules/clean/react/overlay", "modules/clean/auth/login/2fa/seckey_form", "modules/clean/auth/login/google_login_button", "modules/clean/auth/common/types", "spectrum/snackbar/snackbar", "modules/clean/react/free_positioned", "spectrum/button/button", "modules/clean/security/crypto", "spectrum/icon_status/bundle", "spectrum/snackbar", "modules/clean/profile_services/profile_services_constants", "modules/clean/security/util", "spectrum/icon_status", "spectrum/svg_icon_bundle", "modules/clean/auth/common/inputs/text", "modules/clean/auth/login/types", "spectrum/button", "modules/clean/auth/common/utils", "modules/clean/auth/login/apple_login_button", "modules/clean/auth/common/error", "modules/clean/auth/login/sso_utils", "modules/clean/auth/login/2fa/email_form", "modules/clean/auth/u2f", "external/u2f-api", "modules/clean/profile_services/profile_services_link", "spectrum/icon_templates/css_utils", "modules/clean/auth/login/login_error", "modules/clean/react/tooltip", "modules/clean/react/bubble_dropdown_v2", "spectrum/progress_bar", "modules/clean/react/sprite_div", "modules/clean/auth/login/2fa/authenticator_form", "modules/clean/auth/common/inputs/checkbox", "modules/clean/security/passwords", "spectrum/svg_icon_bundle/svg_icon_bundle", "modules/clean/ajax_as_promised", "modules/clean/components/password_strength_meter", "modules/clean/react/snackbar", "spectrum/icon_templates/status", "modules/clean/auth/webauthn", "spectrum/progress_bar/progress_bar", "modules/clean/auth/login/credentials_form", "modules/clean/auth/common/recaptcha"], (function(mod, InitReact) {
                                        InitReact.mountComponent(mod, {
                                            "module_name": "modules/clean/auth/login/form",
                                            "props": {
                                                "encryptionOptions": {
                                                    "timestamp": 1570705891.192979,
                                                    "plaintextFallback": true,
                                                    "version": 0,
                                                    "type": "RSA-OAEP",
                                                    "key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4QceIUbBKmuxVA342hEs0rIn7YXfiUukAhzU4Z8nHvjKALxWkyVW8zojOj8xDc28sNrXvBskPXtUVahIF8ii3UML-U7i5XRCEDi_aCyyrVxfOJlKWi9Pn_GproYm4qN7aVkcmt2bjjQZjomA5VZlusmeQ2hPVF5CgvEWELv5IHvDKkmUzpmL8z5vopkl_d46Uc_mX_71P8v3GbcPl5EmnQnVnJqpuJ_f27hH8T_d3ZNyFRMiLCQeadhveSjS4lkHRklT6mJhM6TGby2V8m_anVpcW5D4oHLjeVXcow4vPLoqMCLudrbuU9VkiPm2qgb6gNQUYTQSfSHRSZGHWCCDEwIDAQAB"
                                                },
                                                "continuationUrl": "/",
                                                "variant": "small",
                                                "showAppleLogin": false,
                                                "twoFactorTrustCheckboxProps": {
                                                    "tooltipPosition": "RIGHT"
                                                },
                                                "rememberMeCheckboxProps": {
                                                    "checked": true
                                                },
                                                "appleLoginProps": {
                                                    "signupEndpoint": "index",
                                                    "positionBelow": true
                                                },
                                                "googleLoginProps": {
                                                    "signupEndpoint": "index",
                                                    "positionBelow": true
                                                }
                                            },
                                            "elem_id": "component7300294629107814293",
                                            "component_name": "LoginForm"
                                        });
                                    }), "require-tier-init_react_modules/clean/auth/login/form-LoginForm"
                                ],
                                [
                                    ["modules/clean/auth/register/form", "modules/clean/init_react", "modules/clean/auth/register/name_fields", "modules/clean/web_register_logging_data", "modules/clean/profile_services/auth_callback_handler", "modules/clean/query_string_helpers", "modules/clean/auth/register/view", "modules/clean/auth/register/types", "modules/clean/form_util/name_parser", "modules/clean/auth/register/google_register_button"], (function(mod, InitReact) {
                                        InitReact.mountComponent(mod, {
                                            "module_name": "modules/clean/auth/register/form",
                                            "props": {
                                                "marketingOptInProps": {
                                                    "checked": false,
                                                    "show": true
                                                },
                                                "submitButtonProps": {
                                                    "text": "Sign up"
                                                },
                                                "googleRegisterProps": {},
                                                "className": "index",
                                                "signupEndpoint": "index",
                                                "additionalParams": {
                                                    "signup": 1,
                                                    "signup_tag": "index_web"
                                                },
                                                "passwordProps": {
                                                    "measureStrength": true,
                                                    "strengthMeterProps": {
                                                        "position": "BOTTOM_LEFT"
                                                    }
                                                }
                                            },
                                            "elem_id": "component7300294629107814294",
                                            "component_name": "RegisterForm"
                                        });
                                    }), "require-tier-init_react_modules/clean/auth/register/form-RegisterForm"
                                ],
                                [
                                    ["modules/clean/index_rebrand", "modules/clean/insecure_uuid", "modules/clean/auth_event_logger", "modules/clean/analytics"], (function(_m0) {
                                        var RebrandIndex = _m0["RebrandIndex"];
                                        new RebrandIndex(true);;
                                    }), ""
                                ],
                                [
                                    ["modules/clean/marketing_tracker"], (function(MarketingTracker) {
                                        MarketingTracker.MarketingTracker.push({
                                            src: "https://marketing.dropbox.com/?landing=dbv2\u0026referrer=",
                                            dataLayer: {
                                                "event": "dataReady",
                                                "session_id": "AADFrEVSfyqoL2R65ZvTuP1crUjXd4FwSBcVErps_DkR-Q",
                                                "landing": "dbv2",
                                                "tealium_event": "dataReady"
                                            },
                                            config: {
                                                "gtm_id": "GTM-K8WT2R",
                                                "tealium_enabled": true,
                                                "tealium_profile": "main",
                                                "gtm_disabled": false,
                                                "default_marketing_data": {
                                                    "landing": "dbv2",
                                                    "session_id": "AADFrEVSfyqoL2R65ZvTuP1crUjXd4FwSBcVErps_DkR-Q",
                                                    "tealium_event": "dataReady"
                                                },
                                                "tealium_env": "prod"
                                            }
                                        });;
                                    }), ""
                                ],
                                [
                                    ["modules/clean/web_timing_logger"], (function(mod) {
                                        mod.initialize_module({
                                            "ttv_at_dom_interactive": false,
                                            "is_dws": true,
                                            "url": null,
                                            "is_pagelet": true,
                                            "source_type": "mobile",
                                            "is_dws2": false,
                                            "tti_at_dom_interactive": true,
                                            "log_time_to_interactive": true,
                                            "subtypes": {
                                                "js_preloading": false,
                                                "metro": 0
                                            },
                                            "log_time_to_view": false,
                                            "is_early_ensemble": false
                                        });
                                    }), "require-tier-require-and-configure-modules/clean/web_timing_logger"
                                ]
                            ]
                        ]);
                    })
                }
            )
        });
    