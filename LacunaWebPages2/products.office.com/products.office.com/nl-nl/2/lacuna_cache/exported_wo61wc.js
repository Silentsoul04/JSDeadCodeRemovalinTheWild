
        requirejs.config({
            paths: {
                "platform": "//www.microsoft.com/onerfstatics/marketingsites-neu-prod/officeproducts/_scrf/js/themes=default/2f-63ce8f/2d-7a9063/dc-7e9864/4f-5115f8/7d-266f10/4a-abd94b/78-4c7d22/39-97e6ff/16-4c1a9d/cd-23d3b0/6d-1e7ed0/b7-cadaa7/ca-40b7b0/4e-ee3a55/3e-f5c39b/c3-6454d7/f9-7592d3/92-10345d/f8-73a5f2/79-499886/7e-cda2d3/62-95a6e7/93-283c2d/91-97a04f/1f-100dea/33-abe4df/d6-c4d640/e3-082b89?ver=2.0",
                "partner": "//www.microsoft.com/onerfstatics/marketingsites-neu-prod/officeproducts/_scrf/js/themes=default/f4-41840f/56-f8bdd2/5c-06c605/27-cc0f80/78-5ced20/b5-23ef91/96-4a7408/15-548f7d/f5-7e27a5?ver=2.0",
                "telem": "//www.microsoft.com/onerfstatics/marketingsites-neu-prod/officeproducts/_scrf/js/themes=default/f0-8efc89/1e-fd610f?ver=2.0",
                "redtux": "https://www.microsoft.com/mwf/js/MWF_20190920_18409164/alert/areaheading/autosuggest/button/combo/dialog/divider/glyph/heading/hero/heroitem/image/imageintro/list/mosaic/mosaicplacement/pagebehaviors/progress/select/selectmenu/skiptomain/social?apiVersion=1.0"
            },
            bundles: {
                "platform": ["requireJS", "ariaWebTelemetry", "html5Shiv", "html5ShivMin", "modernizrMin", "pictureFillMin", "RedTiger_telemetry"],
                "partner": null,
                "telem": ["trackHelper", "jsll"],
                "redtux": ["copyrightHeader", "iController", "iCollectionItem", "videoClosedCaptions", "videoControls", "keycodes", "viewportCollision", "utility", "swipe", "stringExtensions", "removeFocus", "publisher", "observableComponent", "htmlExtensions", "handleImageError", "componentFactory", "breakpointTracker", "actionToggle", "additionalInformation", "alert", "areaHeading", "autosuggest", "backToTop", "banner", "biProductPlacement", "obsoleteCarousel", "checkbox", "combo", "compareChart", "contentPlacement", "contentPlacementItem", "contentToggle", "contentRichBlock", "dateTimePicker", "deviceActions", "dialog", "drawer", "emailSignUp", "feature", "featureChannel", "featureGroup", "file", "flyout", "groupCallToAction", "heading", "hero", "heroItem", "highlightFeature", "histogram", "hyperlinkGroup", "image", "imageIntro", "immersiveHero", "immersiveHeroItem", "inPageNavigation", "linkNavigation", "liveGoldBadge", "media", "mediaGallery", "mosaic", "multiColumn", "multiFeature", "mWFComponentsAll", "mWFPage", "pageBar", "pageBehaviors", "pagination", "panes", "panesProductPlacementItem", "pivot", "productPlacement", "productPlacementItem", "ratingsAndReviews", "refineItem", "refinements", "refineMenu", "richHeading", "searchHelp", "searchResults", "sequenceIndicator", "select", "selectButton", "selectMenu", "skipToMain", "slider", "social", "structuredList", "supplementalNavigation", "systemRequirements", "table", "toggle", "tooltip", "trackList", "typographicIntro", "video", "rating", "multiFeatureCarousel", "multiHeroItem", "multiHero", "feedHero", "feedHeroItem", "carouselBase", "multiSlideCarousel", "singleSlideCarousel", "logoController", "heroItemBase", "button", "actionMenu", "navigationMenu", "rangeSlider", "videoPlayer", "review", "splitReveal", "ageGate", "productDetailOverview", "productDetailHeroDigital", "reportReviewForm", "productDetailHero", "mixedProductPlacement", "list", "flipper", "divider", "glyph", "navigationBar", "mosaicPlacement", "fullBundle", "persona", "cards", "quote", "channelPlacement", "channelPlacementItem", "textArea", "callToAction", "tag", "logo", "parallax", "metadataBadge", "sticky", "actionBar", "ageRating", "ambientVideo", "badge", "blockquote", "breadcrumb", "contextMenu", "explicit", "footer", "paragraph", "password", "price", "progress", "search", "subheading", "channelPivot", "expansionPanel", "tslib"]
            },
            onNodeCreated: function(n, c, m, u) {
                if ('platform' === m || 'telem' === m || 'partner' === m || 'redtux' === m) return n.setAttribute('crossorigin', 'anonymous'), n
            }
        });
        require(['platform']);
        require(['partner']);
        require(['telem']);
        require(['redtux']);
    