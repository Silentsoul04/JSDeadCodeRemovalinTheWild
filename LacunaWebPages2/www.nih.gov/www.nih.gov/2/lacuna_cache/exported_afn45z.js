
        jQuery.extend(Drupal.settings, {
            "basePath": "\/",
            "pathPrefix": "",
            "instances": "{\u0022default\u0022:{\u0022content\u0022:{\u0022text\u0022:\u0022\u0022},\u0022style\u0022:{\u0022tip\u0022:false,\u0022classes\u0022:\u0022\u0022},\u0022position\u0022:{\u0022at\u0022:\u0022bottom right\u0022,\u0022adjust\u0022:{\u0022method\u0022:\u0022\u0022},\u0022my\u0022:\u0022top left\u0022,\u0022viewport\u0022:false},\u0022show\u0022:{\u0022event\u0022:\u0022mouseenter \u0022},\u0022hide\u0022:{\u0022event\u0022:\u0022mouseleave \u0022}}}",
            "qtipDebug": "{\u0022leaveElement\u0022:0}",
            "shadowbox": {
                "animate": true,
                "animateFade": true,
                "animSequence": "wh",
                "auto_enable_all_images": 1,
                "auto_gallery": 1,
                "autoplayMovies": true,
                "continuous": false,
                "counterLimit": 10,
                "counterType": "default",
                "displayCounter": true,
                "displayNav": true,
                "enableKeys": true,
                "fadeDuration": 0.34999999999999998,
                "handleOversize": "resize",
                "handleUnsupported": "link",
                "initialHeight": 160,
                "initialWidth": 320,
                "language": "en",
                "modal": false,
                "overlayColor": "#000",
                "overlayOpacity": 0.80000000000000004,
                "resizeDuration": 0.55000000000000004,
                "showMovieControls": true,
                "slideshowDelay": 0,
                "viewportPadding": 20,
                "useSizzle": false
            },
            "picture": {
                "mappings": [
                    ["Sidebar media mappings", "sidebar_media_mappings"],
                    ["Floated media mappings", "floated_media_mappings"],
                    ["Not Set", "not_set"]
                ],
                "label": "Image size (required)"
            },
            "extlink": {
                "extTarget": "_blank",
                "extClass": "ext",
                "extLabel": "(link is external)",
                "extImgClass": 0,
                "extIconPlacement": "append",
                "extSubdomains": 1,
                "extExclude": "(.\\.nih\\.gov.)|(.\\.cancer\\.gov.)|(.\\.genome\\.gov.)|(.\\.drugabuse\\.gov.)|(locatorplus\\.gov.)|(.\\.govdelivery\\.com.)|(.\\.hatchbuck\\.com.)|(nihseniorhealth\\.gov.)|(clinicaltrials\\.gov.)|(search\\.usa\\.gov\\\/search\\?affiliate\\=hip.)|(search\\.gov\\\/search\\?affiliate\\=hip.)|(drugabuse\\.gov.)|(medlineplus\\.gov.)|(collegedrinkingprevention\\.gov.)|(smokefree\\.gov.)",
                "extInclude": "",
                "extCssExclude": ".media, .emergency-message, .slideshow-main, .bean-home-slideshow-2l-block",
                "extCssExplicit": "",
                "extAlert": "_blank",
                "extAlertText": "You are leaving the NIH website.\r\n\r\nThis external link provides additional information that is consistent with the intended purpose of this site. NIH cannot attest to the accuracy of a non-federal site.\r\n\r\nLinking to a non-federal site does not constitute an endorsement by NIH or any of its employees of the sponsors or the information and products presented on the site. You will be subject to the destination site\u2019s privacy policy when you follow the link.",
                "mailtoClass": "mailto",
                "mailtoLabel": "(link sends e-mail)"
            },
            "flexslider": {
                "optionsets": {
                    "nih_slides_preset": {
                        "namespace": "flex-",
                        "selector": ".slides \u003E li",
                        "easing": "swing",
                        "direction": "horizontal",
                        "reverse": false,
                        "smoothHeight": false,
                        "startAt": 0,
                        "animationSpeed": 500,
                        "initDelay": 0,
                        "useCSS": false,
                        "touch": true,
                        "video": false,
                        "keyboard": true,
                        "multipleKeyboard": false,
                        "mousewheel": 0,
                        "controlsContainer": ".flex-control-nav-container",
                        "sync": "",
                        "asNavFor": "",
                        "itemWidth": 0,
                        "itemMargin": 0,
                        "minItems": 5,
                        "maxItems": 5,
                        "move": 0,
                        "animation": "slide",
                        "slideshow": true,
                        "slideshowSpeed": "10000",
                        "directionNav": true,
                        "controlNav": true,
                        "prevText": "Previous",
                        "nextText": "Next",
                        "pausePlay": false,
                        "pauseText": "Pause",
                        "playText": "Play",
                        "randomize": false,
                        "thumbCaptions": false,
                        "thumbCaptionsBoth": false,
                        "animationLoop": false,
                        "pauseOnAction": true,
                        "pauseOnHover": true,
                        "manualControls": "",
                        "colorboxEnabled": false,
                        "colorboxImageStyle": "featured_media_mappings"
                    }
                },
                "instances": {
                    "flexslider-1": "nih_slides_preset"
                }
            },
            "field_group": {
                "html-element": "itn_block"
            }
        });
    