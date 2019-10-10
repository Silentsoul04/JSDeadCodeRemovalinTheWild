// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function() {

    var data = {
        "resource": {
            "version": "206",

            "macros": [{
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 0], 8, 16], ".closest(\"[data-cta-type]\").dataset.ctaType})();"]
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pageHasVideo"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pageHasDownload"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "testPilotUser"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "(not set)",
                "vtp_name": "accurate"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "(not set)",
                "vtp_name": "version"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "(not set)",
                "vtp_name": "channel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "(not set)",
                "vtp_name": "isESR"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "(not set)",
                "vtp_name": "isUpToDate"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pageId"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 11],
                "vtp_map": ["list", ["map", "key", "\/firefox\/desktop\/", "value", "product page"],
                    ["map", "key", "\/firefox\/android\/", "value", "product page"],
                    ["map", "key", "\/firefox\/ios\/", "value", "product page"],
                    ["map", "key", "\/firefox\/hello\/", "value", "feature page"],
                    ["map", "key", "\/firefox\/sync\/", "value", "feature page"],
                    ["map", "key", "\/firefox\/private-browsing\/", "value", "feature page"],
                    ["map", "key", "\/firefox\/accounts\/", "value", "feature page"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 11],
                "vtp_defaultValue": "false",
                "vtp_map": ["list", ["map", "key", "\/firefox\/desktop\/", "value", "true"],
                    ["map", "key", "\/firefox\/android\/", "value", "true"],
                    ["map", "key", "\/firefox\/ios\/", "value", "true"],
                    ["map", "key", "\/firefox\/hello\/", "value", "true"],
                    ["map", "key", "\/firefox\/sync\/", "value", "true"],
                    ["map", "key", "\/firefox\/private-browsing\/", "value", "true"]
                ]
            }, {
                "function": "__j",
                "vtp_name": "navigator.userAgent"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pageVersion"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-cta-position"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-link-group"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-link-position"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "xv",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "v",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data-ex-name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data-ex-variant"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "54", "dimension", ["macro", 3]],
                    ["map", "index", "55", "dimension", ["macro", 4]],
                    ["map", "index", "51", "dimension", ["macro", 5]],
                    ["map", "index", "40", "dimension", ["macro", 6]],
                    ["map", "index", "41", "dimension", ["macro", 7]],
                    ["map", "index", "42", "dimension", ["macro", 8]],
                    ["map", "index", "44", "dimension", ["macro", 9]],
                    ["map", "index", "43", "dimension", ["macro", 10]],
                    ["map", "index", "52", "dimension", ["macro", 12]],
                    ["map", "index", "53", "dimension", ["macro", 13]],
                    ["map", "index", "56", "dimension", ["macro", 14]],
                    ["map", "index", "57", "dimension", ["macro", 15]],
                    ["map", "index", "58", "dimension", ["macro", 11]],
                    ["map", "index", "9", "dimension", ["macro", 16]],
                    ["map", "index", "13", "dimension", ["macro", 17]],
                    ["map", "index", "14", "dimension", ["macro", 18]],
                    ["map", "index", "8", "dimension", ["macro", 19]],
                    ["map", "index", "12", "dimension", ["macro", 20]],
                    ["map", "index", "69", "dimension", ["macro", 21]],
                    ["map", "index", "70", "dimension", ["macro", 22]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-36116321-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "browserAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "location"
            }, {
                "function": "__c",
                "vtp_value": "63"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "browser"
            }, {
                "function": "__c",
                "vtp_value": "64"
            }, {
                "function": "__dbg"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 29],
                "vtp_defaultValue": "UA-36116321-1",
                "vtp_map": ["list", ["map", "key", "true", "value", "UA-36116321-1"],
                    ["map", "key", "false", "value", "UA-36116321-1"]
                ]
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "interaction"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 32],
                "vtp_map": ["list", ["map", "key", "fxa-loaded", "value", "load"],
                    ["map", "key", "fxa-signup", "value", "sign up"],
                    ["map", "key", "fxa-verified", "value", "verified"],
                    ["map", "key", "fxa-login", "value", "logged in"],
                    ["map", "key", "email opt-in", "value", "email opt-in"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 33],
                "vtp_defaultValue": "0",
                "vtp_map": ["list", ["map", "key", "load", "value", "1"]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "slide"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "videoTitle"
            }, {
                "function": "__c",
                "vtp_value": "4"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "firefoxVersionStatus"
            }, {
                "function": "__c",
                "vtp_value": "59"
            }, {
                "function": "__d",
                "vtp_elementSelector": "html",
                "vtp_attributeName": "data-latest-firefox",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ["macro", 40],
                "vtp_name": "releaseVersionWindow"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "previousLanguage"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "languageSelected"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "contributeCategory"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "outcome"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "reason"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "question"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "direction"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "quoteNumber"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "quote"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "newsletter"
            }, {
                "function": "__c",
                "vtp_value": "6"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "section"
            }, {
                "function": "__c",
                "vtp_value": "1"
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "f",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "page.variation"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 57],
                "vtp_defaultValue": ["macro", 56],
                "vtp_map": ["list", ["map", "key", "1", "value", ["template", ["macro", 56], "-1"]],
                    ["map", "key", "2", "value", ["template", ["macro", 56], "-2"]]
                ]
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "input"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 59],
                "vtp_map": ["list", ["map", "key", "phone-number", "value", "sms"],
                    ["map", "key", "email-address", "value", "email"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "label"
            }, {
                "function": "__c",
                "vtp_value": "10"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "variation"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 11],
                "vtp_map": ["list", ["map", "key", "\/firefox\/desktop\/", "value", "firefox\/desktop\/ Interactions"],
                    ["map", "key", "\/firefox\/os", "value", "FxOs Consumer Page"],
                    ["map", "key", "\/contribute\/", "value", "Contribute Landing Interactions"],
                    ["map", "key", "\/", "value", "Homepage Interactions"],
                    ["map", "key", "\/firefox\/desktop\/trust\/", "value", "firefox\/desktop\/ Interactions"],
                    ["map", "key", "\/firefox\/desktop\/fast\/", "value", "firefox\/desktop\/ Interactions"],
                    ["map", "key", "\/firefox\/desktop\/customize\/", "value", "firefox\/desktop\/ Interactions"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 32],
                "vtp_map": ["list", ["map", "key", "default-yes", "value", "browser as default: yes"],
                    ["map", "key", "default-no", "value", "browser as default: no"],
                    ["map", "key", "default-unknown", "value", "browser as default: unknown"],
                    ["map", "key", "set-default-cta-click", "value", "default cta click"],
                    ["map", "key", "default-set", "value", "browser successfully set as default"],
                    ["map", "key", "tab-visible", "value", "tab visibile"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 32],
                "vtp_map": ["list", ["map", "key", "play joy of coding", "value", "play video"],
                    ["map", "key", "completed joy of coding", "value", "complete video"],
                    ["map", "key", "install whimsy", "value", "button click"],
                    ["map", "key", "follow mozparticipate", "value", "button click"],
                    ["map", "key", "joy of coding exit link", "value", "link click"],
                    ["map", "key", "link click - tell friends about ios or android", "value", "link click"],
                    ["map", "key", "foxfooding exit link", "value", "button click"],
                    ["map", "key", "devtools challenger exit link", "value", "button click"],
                    ["map", "key", "download firefox dev edition", "value", "button click"],
                    ["map", "key", "Try another task?", "value", "link click"],
                    ["map", "key", "I want to pick a different task.", "value", "link click"],
                    ["map", "key", "follow startmozilla", "value", "button click"],
                    ["map", "key", "AMO exit link", "value", "link click"],
                    ["map", "key", "tweeted to @startmozilla", "value", "button click"],
                    ["map", "key", "followed @startmozilla", "value", "button click"],
                    ["map", "key", "Find your local community exit link", "value", "link click"],
                    ["map", "key", "Take the pledge", "value", "button click"],
                    ["map", "key", "challenger exit link", "value", "button click"],
                    ["map", "key", "Install stumbler exit link", "value", "button click"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 32],
                "vtp_map": ["list", ["map", "key", "play joy of coding", "value", "The Joy of Coding"],
                    ["map", "key", "completed joy of coding", "value", "The Joy of Coding"],
                    ["map", "key", "install whimsy", "value", "Install Whimsy"],
                    ["map", "key", "follow mozparticipate", "value", "Follow Moz Participate on Twitter"],
                    ["map", "key", "joy of coding exit link", "value", "Exit to Joy of Coding on AirMo"],
                    ["map", "key", "link click - tell friends about ios or android", "value", "Tell friends about Firefox on Mobile"],
                    ["map", "key", "foxfooding exit link", "value", "Start Foxfooding"],
                    ["map", "key", "devtools challenger exit link", "value", "Visit devtoolschallenger"],
                    ["map", "key", "download firefox dev edition", "value", "Download Firefox Dev Edition Task"],
                    ["map", "key", "Try another task?", "value", "Try another task"],
                    ["map", "key", "I want to pick a different task.", "value", "I want to pick a different task"],
                    ["map", "key", "follow startmozilla", "value", "Follow Start Mozilla on Twitter"],
                    ["map", "key", "AMO exit link", "value", "Sign Into Our Add-Ons Site and Rate Whimsy"],
                    ["map", "key", "Find your local community exit link", "value", "Find your local community exit link"],
                    ["map", "key", "Take the pledge", "value", "Take the pledge"],
                    ["map", "key", "tweeted to @startmozilla", "value", "Share on Twitter"],
                    ["map", "key", "followed @startmozilla", "value", "Follow @startmozilla"],
                    ["map", "key", "challenger exit link", "value", "Visit Dev Tools Challenger"],
                    ["map", "key", "Install stumbler exit link", "value", "Install Stumbler"]
                ]
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": true,
                "vtp_varType": "ATTRIBUTE",
                "vtp_defaultValue": "unavailable",
                "vtp_attribute": "data-button-name"
            }, {
                "function": "__c",
                "vtp_value": "65"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "(not set)",
                "vtp_name": "FxASegment"
            }, {
                "function": "__c",
                "vtp_value": "66"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "(not set)",
                "vtp_name": "FxAMultiDesktopSync"
            }, {
                "function": "__c",
                "vtp_value": "67"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "(not set)",
                "vtp_name": "FxALogin"
            }, {
                "function": "__c",
                "vtp_value": "68"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "(not set)",
                "vtp_name": "FxAMobileSync"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "total-plugins"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "plugin-vulnerable-count"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "plugin-outdated-count"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "plugin-up-to-date-count"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "plugin-unknown-count"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "nextPage"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "virtualUrl"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-element-action"
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "TEXT"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": true,
                "vtp_varType": "ATTRIBUTE",
                "vtp_defaultValue": "unavailable",
                "vtp_attribute": "data-link-type"
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "newClickHref"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/itunes.apple.com\/us\/app\/apple-store\/id989804926?pt=373246\u0026mt=8\u0026ct=mozorg-contribute_page-appstore-button", "value", "Firefox for iOS"],
                    ["map", "key", "https:\/\/advocacy.mozilla.org\/encrypt\/social\/1", "value", "Learn more about encryption"],
                    ["map", "key", "https:\/\/twitter.com\/mike_conley", "value", "@mike_conley"],
                    ["map", "key", "https:\/\/air.mozilla.org\/channels\/livehacking\/", "value", "View more Joy of Coding videos on Air Mozilla"],
                    ["map", "key", "https:\/\/wiki.mozilla.org\/Contribute\/Coding", "value", "Join the Coding Community"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Firefox Privacy"],
                    ["map", "key", "https:\/\/wiki.mozilla.org\/Contribute\/Webdev", "value", "Join the Webdev Contribute Group"],
                    ["map", "key", "https:\/\/location.services.mozilla.com\/", "value", "Learn more about Mozilla Location Services"]
                ]
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": true,
                "vtp_varType": "ATTRIBUTE",
                "vtp_defaultValue": "unavailable",
                "vtp_attribute": "data-download-os"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/itunes.apple.com\/us\/app\/apple-store\/id989804926?pt=373246\u0026mt=8\u0026ct=mozorg-contribute_page-appstore-button", "value", "Firefox Download"],
                    ["map", "key", "https:\/\/advocacy.mozilla.org\/encrypt\/social\/1", "value", "link click"],
                    ["map", "key", "https:\/\/twitter.com\/mike_conley", "value", "link click"],
                    ["map", "key", "https:\/\/air.mozilla.org\/channels\/livehacking\/", "value", "link click"],
                    ["map", "key", "https:\/\/wiki.mozilla.org\/Contribute\/Coding", "value", "link click"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "link click"],
                    ["map", "key", "https:\/\/wiki.mozilla.org\/Contribute\/Webdev", "value", "link click"],
                    ["map", "key", "https:\/\/location.services.mozilla.com\/", "value", "link click"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "gtm.element.localName"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-display-name"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "gtm.element.parentNode.parentNode.parentNode.parentNode.id"
            }, {
                "function": "__u",
                "vtp_component": "FRAGMENT",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-download-product"
            }, {
                "function": "__c",
                "vtp_value": "3"
            }, {
                "function": "__c",
                "vtp_value": "27"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-download-version"
            }, {
                "function": "__c",
                "vtp_value": "28"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-download-language"
            }, {
                "function": "__c",
                "vtp_value": "9"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 105],
                "vtp_defaultValue": "Primary",
                "vtp_map": ["list", ["map", "key", "cta-android-footer", "value", "Secondary"],
                    ["map", "key", "cta-ios-footer", "value", "Secondary"]
                ]
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "gtm.element.parentNode.parentNode.parentNode.id"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 107],
                "vtp_map": ["list", ["map", "key", "download-button-desktop-release", "value", "Primary"],
                    ["map", "key", "fx-modal-download", "value", "Secondary"],
                    ["map", "key", "test-primary-ctas", "value", "Secondary"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 107],
                "vtp_map": ["list", ["map", "key", "nav-download-firefox", "value", "Nav"]]
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "gtm.element.parentNode.id"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 110],
                "vtp_defaultValue": "Primary",
                "vtp_map": ["list", ["map", "key", "send-to-device-footer", "value", "Secondary"]]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 94],
                "vtp_defaultValue": "Nav",
                "vtp_map": ["list", ["map", "key", "btn-apple-appstore", "value", "Primary"]]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 107],
                "vtp_map": ["list", ["map", "key", "intro_download_desktop", "value", "Primary"],
                    ["map", "key", "download-button-desktop-release", "value", "Secondary"],
                    ["map", "key", "sticky-download-desktop", "value", "Nav"]
                ]
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "gtm.element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 114],
                "vtp_map": ["list", ["map", "key", "container", "value", "Primary"],
                    ["map", "key", "cta", "value", "Secondary"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 107],
                "vtp_map": ["list", ["map", "key", "download-fx-primary", "value", "Primary"],
                    ["map", "key", "download-fx-secondary", "value", "Secondary"],
                    ["map", "key", "download-button-desktop-release", "value", "Nav"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 107],
                "vtp_map": ["list", ["map", "key", "download-intro", "value", "Primary"],
                    ["map", "key", "global-nav-download-firefox", "value", "Nav"],
                    ["map", "key", "footer-download", "value", "Secondary"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 107],
                "vtp_defaultValue": "Secondary",
                "vtp_map": ["list", ["map", "key", "header-firefox", "value", "Primary"],
                    ["map", "key", "header-focus", "value", "Primary"],
                    ["map", "key", "sub-nav-download-firefox", "value", "Nav"],
                    ["map", "key", "global-nav-download-firefox", "value", "Nav"],
                    ["map", "key", "", "value", "Secondary"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 11],
                "vtp_map": ["list", ["map", "key", "\/firefox\/sync\/", "value", ["macro", 106]],
                    ["map", "key", "\/firefox\/new\/", "value", ["macro", 108]],
                    ["map", "key", "Homepage", "value", ["macro", 109]],
                    ["map", "key", "\/firefox\/android\/", "value", ["macro", 111]],
                    ["map", "key", "\/firefox\/ios\/", "value", "Primary"],
                    ["map", "key", "\/plugincheck\/", "value", "Primary"],
                    ["map", "key", "\/firefox\/desktop\/trust\/", "value", "Secondary"],
                    ["map", "key", "\/firefox\/desktop\/customize\/", "value", "Secondary"],
                    ["map", "key", "\/firefox\/desktop\/fast\/", "value", "Secondary"],
                    ["map", "key", "\/firefox\/products\/", "value", ["macro", 112]],
                    ["map", "key", "\/firefox\/desktop\/", "value", ["macro", 113]],
                    ["map", "key", "\/firefox\/private-browsing\/", "value", ["macro", 115]],
                    ["map", "key", "\/firefox\/hello\/", "value", ["macro", 116]],
                    ["map", "key", "\/firefox\/", "value", ["macro", 117]],
                    ["map", "key", "\/firefox\/mobile\/", "value", ["macro", 118]]
                ]
            }, {
                "function": "__c",
                "vtp_value": "5"
            }, {
                "function": "__c",
                "vtp_value": "15"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-download-location"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/addons.mozilla.org\/", "value", "Add-ons"],
                    ["map", "key", "https:\/\/careers.mozilla.org\/", "value", "Careers"],
                    ["map", "key", "https:\/\/support.mozilla.org\/", "value", "Need help?"],
                    ["map", "key", "\/firefox\/products\/", "value", "Firefox - Discover More"],
                    ["map", "key", "https:\/\/advocacy.mozilla.org\/encrypt\/", "value", "Our Impact - Stand Up for Encryption"],
                    ["map", "key", "https:\/\/donate.mozilla.org\/en-US\/?presets=100,50,25,15\u0026amount=50\u0026ref=EOYFR2015\u0026utm_campaign=EOYFR2015\u0026utm_source=mozilla.org\u0026utm_medium=referral\u0026utm_content=home_test_a\u0026currency=usd", "value", "Donate"],
                    ["map", "key", "\/#action", "value", "Mozilla in Action"],
                    ["map", "key", "\/#innovation", "value", "Web Innovation"],
                    ["map", "key", "\/#firefox", "value", "Firefox - Browse Freely"],
                    ["map", "key", "https:\/\/donate.mozilla.org\/", "value", "Donate"],
                    ["map", "key", "https:\/\/aframe.io\/", "value", "Web Innovation - A Frame"],
                    ["map", "key", "https:\/\/learning.mozilla.org\/", "value", "Our Impact - Teach The Web"],
                    ["map", "key", "\/about\/policy\/lean-data\/", "value", "Our Impact - Lean Data"],
                    ["map", "key", "https:\/\/games.mozilla.org\/", "value", "Web Innovations - Gaming on the Web"],
                    ["map", "key", "https:\/\/servo.org\/", "value", "Web Innovations - Servo"],
                    ["map", "key", "https:\/\/research.mozilla.org\/rust\/", "value", "Web Innovations - Rust"],
                    ["map", "key", "\/firefox\/new\/", "value", "Firefox - Get Firefox Today"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/opendesign\/", "value", "Learn More at the Mozilla Open Design Blog"],
                    ["map", "key", "https:\/\/internethealthreport.org\/", "value", "Our Impact - Internet Health Report"],
                    ["map", "key", "https:\/\/vr.mozilla.org\/", "value", "Web Innovations - VR"],
                    ["map", "key", "\/firefox\/quantum\/", "value", "Firefox Quantum Banner"],
                    ["map", "key", "https:\/\/research.mozilla.org\/servo-engines\/", "value", "Web Innovations - Servo"],
                    ["map", "key", "https:\/\/www.mozilla.org\/en-US\/privacy\/firefox\/", "value", "Firefox Privacy"],
                    ["map", "key", "https:\/\/voice.mozilla.org\/en", "value", "Web Innovations - Common Voice"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/blog\/2017\/08\/08\/mozilla-information-trust-initiative-building-movement-fight-misinformation-online\/", "value", "Our Impact - Info Trust Initiative"],
                    ["map", "key", "https:\/\/learning.mozilla.org\/blog\/new-partnership-with-un-women-to-teach-key-digital-skills-to-women", "value", "Our Impact - Empowering Women"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/blog\/2017\/09\/06\/mozilla-washington-post-reinventing-online-comments\/", "value", "Our Impact - Coral Project"],
                    ["map", "key", "https:\/\/www.mozilla.org\/en-US\/privacy\/firefox\/", "value", "Firefox Privacy"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/blog\/2017\/08\/08\/mozilla-information-trust-initiative-building-movement-fight-misinformation-online\/?utm_source=www.mozilla.org\u0026utm_medium=referral\u0026utm_campaign=homepage\u0026utm_content=v-b", "value", "Our Impact - Info Trust Initiative"],
                    ["map", "key", "https:\/\/learning.mozilla.org\/blog\/new-partnership-with-un-women-to-teach-key-digital-skills-to-women\/?utm_source=www.mozilla.org\u0026utm_medium=referral\u0026utm_campaign=homepage\u0026utm_content=v-b", "value", "Our Impact - Empowering Women"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/blog\/2017\/09\/06\/mozilla-washington-post-reinventing-online-comments\/?utm_source=www.mozilla.org\u0026utm_medium=referral\u0026utm_campaign=homepage\u0026utm_content=v-b", "value", "Our Impact - Coral Project"],
                    ["map", "key", "https:\/\/internethealthreport.org\/?utm_source=www.mozilla.org\u0026utm_medium=referral\u0026utm_campaign=homepage\u0026utm_content=v-b", "value", "Our Impact - Internet Health Report"],
                    ["map", "key", "https:\/\/voice.mozilla.org\/?utm_source=www.mozilla.org\u0026utm_medium=referral\u0026utm_campaign=homepage\u0026utm_content=v-b", "value", "Web Innovations - Common Voice"],
                    ["map", "key", "https:\/\/vr.mozilla.org\/?utm_source=www.mozilla.org\u0026utm_medium=referral\u0026utm_campaign=homepage\u0026utm_content=v-b", "value", "Web Innovations - VR"],
                    ["map", "key", "https:\/\/research.mozilla.org\/servo-engines\/?utm_source=www.mozilla.org\u0026utm_medium=referral\u0026utm_campaign=homepage\u0026utm_content=v-b", "value", "Web Innovations - Servo"],
                    ["map", "key", "https:\/\/research.mozilla.org\/rust\/?utm_source=www.mozilla.org\u0026utm_medium=referral\u0026utm_campaign=homepage\u0026utm_content=v-b", "value", "Web Innovations - Rust"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/firefox\/system-requirements\/", "value", "Check the system requirements"],
                    ["map", "key", "\/firefox\/notes\/", "value", "Release notes"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/firefox\/android\/all\/", "value", "Systems \u0026 Languages"],
                    ["map", "key", "\/firefox\/android\/notes\/", "value", "Release notes"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/will-firefox-work-my-mobile-device", "value", "Supported devices"],
                    ["map", "key", "\/firefox\/sync\/", "value", "Learn more about Sync"],
                    ["map", "key", "\/firefox\/private-browsing\/", "value", "Learn more about Private Browsing"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/clear-your-browsing-history-and-other-personal-dat", "value", "Learn how to clear your history"],
                    ["map", "key", "https:\/\/www.youtube.com\/watch?v=u6Ww0udnVA0\u0026index=16\u0026list=PLA8ABF6B7A66A0C5E", "value", "Learn how to share your browser"],
                    ["map", "key", "https:\/\/www.youtube.com\/watch?v=a5nNPf-Uosc\u0026index=12\u0026list=PLA8ABF6B7A66A0C5E", "value", "See how it works - Smarter sharing for all"],
                    ["map", "key", "\/privacy\/websites\/#campaigns", "value", "Learn more"],
                    ["map", "key", "https:\/\/www.youtube.com\/watch?v=alW2g7Gnh6U\u0026list=PLA8ABF6B7A66A0C5E\u0026index=18", "value", "See how it works - All your faves, front and center"],
                    ["map", "key", "https:\/\/www.youtube.com\/watch?v=HKvyr0TIKF0\u0026index=14\u0026list=PLA8ABF6B7A66A0C5E", "value", "Learn more - A touch more personal"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/set-and-manage-default-search-engines-firefox-android", "value", "See how it works - Any search you like"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/save-web-pages-your-reading-list-firefox-android", "value", "Learn more about Reading List"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/view-articles-reader-view-firefox-android", "value", "Learn more about Reader View"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/change-default-language-firefox-android", "value", "Learn more - Change your language"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/use-firefox-android-send-videos-chromecast", "value", "Learn more - Take it to the big screen"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/support.mozilla.org\/kb\/clear-browsing-history-firefox-ios", "value", "Learn how to clear your history"],
                    ["map", "key", "\/firefox\/private-browsing\/", "value", "Learn more about Private Browsing"],
                    ["map", "key", "\/firefox\/android\/", "value", "Get Firefox for Android"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/firefox\/beta\/all\/", "value", "Systems \u0026 Languages - Beta"],
                    ["map", "key", "\/firefox\/beta\/notes\/", "value", "What's New - Beta"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Privacy"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/will-firefox-work-my-mobile-device", "value", "Supported Devices"],
                    ["map", "key", "\/privacy\/firefox\/#telemetry", "value", "Learn More"],
                    ["map", "key", "https:\/\/input.mozilla.com\/feedback", "value", "Give us feedback"],
                    ["map", "key", "\/firefox\/android\/beta\/all\/", "value", "Systems \u0026 Languages - Beta Android"],
                    ["map", "key", "\/firefox\/android\/beta\/notes\/", "value", "What's New - Beta Android"],
                    ["map", "key", "\/firefox\/all\/", "value", "Systems \u0026 Languages - Firefox"],
                    ["map", "key", "\/firefox\/notes\/", "value", "What’s New - Firefox"],
                    ["map", "key", "\/firefox\/android\/all\/", "value", "Systems \u0026 Languages - Firefox Android"],
                    ["map", "key", "\/firefox\/android\/notes\/", "value", "What’s New - Firefox Android"],
                    ["map", "key", "\/firefox\/", "value", "Learn more about Firefox"],
                    ["map", "key", "\/firefox\/developer\/all\/", "value", "Systems \u0026 Languages - Developer"],
                    ["map", "key", "\/firefox\/developer\/notes\/", "value", "What’s New - Developer"],
                    ["map", "key", "https:\/\/archive.mozilla.org\/pub\/mobile\/nightly\/latest-mozilla-aurora-android-api-9\/fennec-47.0a2.multi.android-arm.apk", "value", "Gingerbread"],
                    ["map", "key", "https:\/\/archive.mozilla.org\/pub\/mobile\/nightly\/latest-mozilla-aurora-android-x86\/fennec-47.0a2.multi.android-i386.apk", "value", "x86"],
                    ["map", "key", "\/firefox\/android\/aurora\/notes\/", "value", "What’s New - Aurora"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/legal\/privacy", "value", "Privacy Notice"],
                    ["map", "key", "\/legal\/terms", "value", "Terms of Service"],
                    ["map", "key", "\/signin", "value", "Have an account? Sign in."],
                    ["map", "key", "https:\/\/support.mozilla.org\/en-US\/kb\/use-search-bar-firefox", "value", "Yahoo Search"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/firefox\/all\/", "value", "Systems \u0026 Languages - Desktop"],
                    ["map", "key", "\/firefox\/notes\/", "value", "What's New - Desktop"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Privacy"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/will-firefox-work-my-mobile-device", "value", "Supported Devices"],
                    ["map", "key", "\/firefox\/android\/all\/", "value", "Systems \u0026 Languages - Android"],
                    ["map", "key", "\/firefox\/android\/notes\/", "value", "What’s New - Android"],
                    ["map", "key", "\/plugincheck\/#top", "value", "Back to Top"],
                    ["map", "key", "https:\/\/support.mozilla.org\/", "value", "support.mozilla.org"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "http:\/\/www.tomshardware.com\/reviews\/chrome-27-firefox-21-opera-next,3534.html", "value", "Tom’s Hardware Web Browser Grand Prix XVI"],
                    ["map", "key", "http:\/\/www.tomshardware.com\/reviews\/chrome-27-firefox-21-opera-next,3534.html", "value", "speed king"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/javascript\/2014\/01\/23\/the-monkeys-in-2013\/", "value", "Learn more about how we're pushing the limits of speed"],
                    ["map", "key", "\/firefox\/all\/", "value", "Systems \u0026 Languages"],
                    ["map", "key", "\/firefox\/notes\/", "value", "What's New"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Privacy"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/blog.mozilla.org\/blog\/2015\/01\/27\/get-smart-on-international-data-privacy-day\/", "value", "Learn more"],
                    ["map", "key", "\/firefox\/private-browsing\/", "value", "Learn more about Private Browsing"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/forget-button-quickly-delete-your-browsing-history", "value", "Add the Forget Button to your toolbar"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/how-do-i-tell-if-my-connection-is-secure", "value", "Learn more - Secure Connections"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/how-does-phishing-and-malware-protection-work", "value", "Learn more - World Class Protection"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/update-firefox-latest-version", "value", "Learn more - Automatic Security Updates"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/how-stay-safe-web", "value", "How to stay safe online"],
                    ["map", "key", "https:\/\/support.mozilla.org\/products\/firefox\/privacy-and-security", "value", "Privacy \u0026 security FAQ"],
                    ["map", "key", "https:\/\/addons.mozilla.org\/firefox\/extensions\/privacy-security\/", "value", "Privacy \u0026 security add-ons"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/privacy\/", "value", "Privacy blog"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/security\/", "value", "Security blog"],
                    ["map", "key", "\/firefox\/all\/", "value", "Systems \u0026 Languages"],
                    ["map", "key", "\/firefox\/notes\/", "value", "What's New"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Privacy"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/firefox\/all\/", "value", "Systems \u0026 Languages"],
                    ["map", "key", "\/firefox\/notes\/", "value", "What's New"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Privacy"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/how-do-i-set-up-firefox-sync", "value", "Get help with Sync"],
                    ["map", "key", "https:\/\/addons.mozilla.org\/firefox\/themes\/", "value", "Try it now"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/find-and-install-add-ons-add-features-to-firefox", "value", "Learn more - Add-ons"],
                    ["map", "key", "\/firefox\/desktop\/customize\/#", "value", "Replay"],
                    ["map", "key", "https:\/\/addons.mozilla.org\/firefox\/extensions\/?sort=featured", "value", "Here are a few of our favorites"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/use-themes-change-look-of-firefox", "value", "Learn more - Themes"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/awesome-bar-find-your-bookmarks-history-and-tabs", "value", "See what it can do for you"],
                    ["map", "key", "\/firefox\/desktop\/customize\/#add-ons", "value", "Next - Themes"],
                    ["map", "key", "\/firefox\/desktop\/customize\/#awesome-bar", "value", "Next - Add-ons"],
                    ["map", "key", "\/firefox\/desktop\/customize\/#themes", "value", "Next - Awesome Bar"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/blog.mozilla.org\/press\/category\/firefox-os\/", "value", "See more"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/blog\/2016\/02\/29\/firefox-os-will-power-new-line-up-of-panasonic-ultra-hd-tvs\/", "value", "Firefox OS will Power New Line-up of Panasonic Ultra HD TVs"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/blog\/2016\/01\/05\/firefox-os-will-power-new-panasonic-uhd-tvs-unveiled-at-ces\/", "value", "Firefox OS will Power New Panasonic UHD TVs Unveiled at CES"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/blog\/2015\/12\/09\/firefox-os-pivot-to-connected-devices\/", "value", "Firefox OS Pivot to Connected Devices"],
                    ["map", "key", "https:\/\/firefoxos.mozilla.community\/", "value", "Check it out"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/en-US\/docs\/Mozilla\/Firefox_OS", "value", "Visit MDN"],
                    ["map", "key", "https:\/\/firefoxos.mozilla.community\/devices\/", "value", "Flash your phone"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/firefox\/all\/", "value", "Systems \u0026 Languages"],
                    ["map", "key", "\/firefox\/notes\/", "value", "What's New"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Privacy"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/which-browsers-will-work-firefox-hello-video-chat", "value", "even if they don’t use Firefox"],
                    ["map", "key", "https:\/\/support.mozilla.org\/products\/firefox\/chat-and-share\/firefox-hello-webrtc", "value", "Visit Mozilla Support"],
                    ["map", "key", "\/firefox\/desktop\/", "value", "Learn more"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/firefox\/all\/", "value", "Systems \u0026 Languages - Desktop"],
                    ["map", "key", "\/firefox\/notes\/", "value", "What's New - Desktop"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Privacy"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/will-firefox-work-my-mobile-device", "value", "Supported Devices"],
                    ["map", "key", "\/firefox\/android\/all\/", "value", "Systems \u0026 Languages - Android"],
                    ["map", "key", "\/firefox\/android\/notes\/", "value", "What's New - Android"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/contact\/communities\/", "value", "Mozilla communities"],
                    ["map", "key", "\/about\/forums\/", "value", "Mailing lists"],
                    ["map", "key", "https:\/\/wiki.mozilla.org\/IRC", "value", "IRC channels"],
                    ["map", "key", "https:\/\/input.mozilla.org\/feedback", "value", "Submit Firefox feedback"],
                    ["map", "key", "https:\/\/careers.mozilla.org\/", "value", "Explore Mozilla careers"],
                    ["map", "key", "https:\/\/support.mozilla.org\/", "value", "Get help with Firefox"],
                    ["map", "key", "https:\/\/reps.mozilla.org\/events\/period\/future\/ical\/", "value", "Subscribe to community events"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/#contact", "value", "contact us"],
                    ["map", "key", "\/manifesto\/", "value", "mission of being open"],
                    ["map", "key", "\/privacy\/archive\/", "value", "Outdated Policies"],
                    ["map", "key", "https:\/\/wiki.mozilla.org\/Privacy", "value", "Mozilla’s privacy team wiki"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/privacy\/", "value", "Privacy \u0026 Data Safety Blog"],
                    ["map", "key", "https:\/\/groups.google.com\/forum\/?fromgroups#!forum\/mozilla.governance", "value", "subscribe to Mozilla’s Governance Group"],
                    ["map", "key", "\/privacy\/thunderbird\/", "value", "Thunderbird"],
                    ["map", "key", "\/persona\/privacy-policy\/", "value", "Persona"],
                    ["map", "key", "\/privacy\/firefox-hello\/", "value", "Firefox Hello"],
                    ["map", "key", "https:\/\/marketplace.firefox.com\/privacy-policy", "value", "Firefox Marketplace"],
                    ["map", "key", "\/privacy\/firefox-cloud\/", "value", "Firefox Cloud Services"],
                    ["map", "key", "\/privacy\/firefox-os\/", "value", "Firefox OS"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Firefox Browser"],
                    ["map", "key", "\/privacy\/websites\/", "value", "Mozilla Websites, Communications \u0026 Cookies"],
                    ["map", "key", "\/privacy\/principles\/", "value", "Read More"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/support.mozilla.org\/kb\/get-started-firefox-overview-main-features", "value", "Tour"],
                    ["map", "key", "\/firefox\/desktop\/", "value", "Features"],
                    ["map", "key", "\/firefox\/products\/", "value", "Mobile"],
                    ["map", "key", "https:\/\/addons.mozilla.org\/", "value", "Add-ons"],
                    ["map", "key", "https:\/\/support.mozilla.org\/", "value", "Support"],
                    ["map", "key", "\/about\/", "value", "About"],
                    ["map", "key", "\/firefox\/private-browsing\/?c=fx-fall-15", "value", "Learn more about this"],
                    ["map", "key", "\/teach\/smarton\/tracking\/?c=fx-fall-15", "value", "Get smart on data tracking"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/privacy\/websites\/", "value", "Website Privacy Notice"],
                    ["map", "key", "http:\/\/www.pewinternet.org\/2015\/05\/20\/americans-attitudes-about-privacy-security-and-surveillance\/", "value", "(Pew Research Center, May 2015)"],
                    ["map", "key", "\/lightbeam\/", "value", "Lightbeam"],
                    ["map", "key", "https:\/\/www.google.com\/ads\/preferences", "value", "Google"],
                    ["map", "key", "https:\/\/info.yahoo.com\/privacy\/us\/yahoo\/opt_out\/targeting\/details.html", "value", "Yahoo!"],
                    ["map", "key", "https:\/\/www.facebook.com\/settings?tab=ads\u0026amp;view", "value", "Facebook ads"],
                    ["map", "key", "https:\/\/aboutthedata.com\/", "value", "edit data that’s been collected about you by Acxiom"],
                    ["map", "key", "https:\/\/support.apple.com\/HT203033", "value", "iOS"],
                    ["map", "key", "https:\/\/support.google.com\/googleplay\/answer\/6014972", "value", "Android"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/how-do-i-turn-do-not-track-feature", "value", "Firefox"],
                    ["map", "key", "https:\/\/support.google.com\/chrome\/answer\/2392969", "value", "Chrome"],
                    ["map", "key", "http:\/\/windows.microsoft.com\/en-us\/internet-explorer\/ie-do-not-track", "value", "Internet Explorer"],
                    ["map", "key", "https:\/\/support.apple.com\/kb\/PH19219", "value", "Safari"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/tracking-protection-pbm", "value", "Firefox"],
                    ["map", "key", "https:\/\/support.google.com\/chrome\/answer\/95464", "value", "Chrome"],
                    ["map", "key", "http:\/\/windows.microsoft.com\/en-US\/internet-explorer\/products\/ie-9\/features\/in-private", "value", "Internet Explorer"],
                    ["map", "key", "http:\/\/windows.microsoft.com\/en-hk\/windows-10\/browse-inprivate-in-microsoft-edge", "value", "Edge"],
                    ["map", "key", "https:\/\/support.apple.com\/kb\/PH19216", "value", "Safari"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/firefox-android-tracking-protection", "value", "Firefox for Android"],
                    ["map", "key", "https:\/\/support.google.com\/chrome\/answer\/95464", "value", "Chrome"],
                    ["map", "key", "https:\/\/support.apple.com\/HT203036", "value", "Safari"],
                    ["map", "key", "https:\/\/support.mozilla.org\/products\/firefox\/protect-your-privacy", "value", "Firefox"],
                    ["map", "key", "https:\/\/support.google.com\/chrome\/answer\/114836", "value", "Chrome"],
                    ["map", "key", "http:\/\/www.microsoft.com\/security\/online-privacy\/ie.aspx", "value", "Internet Explorer"],
                    ["map", "key", "http:\/\/windows.microsoft.com\/en-US\/windows-10\/edge-privacy-faq", "value", "Edge"],
                    ["map", "key", "https:\/\/support.apple.com\/kb\/PH19250", "value", "Safari"],
                    ["map", "key", "https:\/\/support.mozilla.org\/products\/mobile\/protect-your-privacy-firefox-android", "value", "Firefox for Android"],
                    ["map", "key", "https:\/\/support.google.com\/chrome\/answer\/2392969", "value", "Chrome"],
                    ["map", "key", "https:\/\/support.apple.com\/HT201265", "value", "Safari"],
                    ["map", "key", "\/firefox\/private-browsing\/", "value", "Give it a try!"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/forget-button-quickly-delete-your-browsing-history", "value", "removes browsing information from your computer after the fact"],
                    ["map", "key", "https:\/\/addons.mozilla.org\/firefox\/collections\/mozilla\/privacy\/", "value", "a collection of Firefox add-ons"],
                    ["map", "key", "https:\/\/teach.mozilla.org\/clubs\/", "value", "Mozilla Club"],
                    ["map", "key", "https:\/\/teach.mozilla.org\/activities\/privacy-basics", "value", "a simple lesson on tracking"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/firefox\/all\/", "value", "Systems \u0026 Languages"],
                    ["map", "key", "\/firefox\/notes\/", "value", "What's New"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Privacy"],
                    ["map", "key", "https:\/\/support.mozilla.org\/en-US\/kb\/private-browsing-use-firefox-without-history", "value", "Learn more about Private Browsing"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/control-center-site-privacy-and-security-firefox", "value", "Learn more about the Control Center"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/firefox\/all\/", "value", "Systems \u0026 Languages - Desktop"],
                    ["map", "key", "\/firefox\/notes\/", "value", "What's New - Desktop"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Privacy"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/get-started-firefox-overview-main-features", "value", "Tour"],
                    ["map", "key", "\/firefox\/desktop\/", "value", "Features"],
                    ["map", "key", "\/firefox\/products\/", "value", "Mobile"],
                    ["map", "key", "https:\/\/addons.mozilla.org\/", "value", "Add-ons"],
                    ["map", "key", "https:\/\/support.mozilla.org\/", "value", "Support"],
                    ["map", "key", "\/about\/", "value", "About"],
                    ["map", "key", "https:\/\/support.mozilla.org\/products\/firefox?utm_source=mozilla.org\u0026utm_medium=referral\u0026utm_campaign=need-help-link", "value", "Need help?"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/refresh-firefox-reset-add-ons-and-settings?utm_source=mozilla.org\u0026utm_medium=referral\u0026utm_campaign=learn-more-link", "value", "Learn more"],
                    ["map", "key", "\/firefox\/all\/#en-US", "value", "Download a fresh copy"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/will-firefox-work-my-mobile-device", "value", "Supported Devices"],
                    ["map", "key", "\/firefox\/android\/all\/", "value", "Systems \u0026 Languages - Android"],
                    ["map", "key", "\/firefox\/android\/notes\/", "value", "What's New - Android"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/update-firefox-latest-version", "value", "Update to stay fast and safe"],
                    ["map", "key", "https:\/\/support.mozilla.org\/products\/firefox", "value", "Need more help?"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/refresh-firefox-reset-add-ons-and-settings", "value", "Reset your add-ons and settings"],
                    ["map", "key", "https:\/\/support.mozilla.org\/products\/?utm_source=mozilla.org\u0026utm_medium=referral\u0026utm_campaign=need-help-link", "value", "Need Help?"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/firefox\/quantum-performance-test\/?utm_source=mozilla.org\u0026utm_medium=referral\u0026utm_campaign=new-2xfaster\u0026utm_content=twice-as-fast", "value", "Twice as Fast"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/firefox\/quantum-performance-test\/?utm_source=mozilla.org\u0026utm_medium=referral\u0026utm_campaign=new-2xfaster\u0026utm_content=lighter-than-chrome", "value", "Lighter than Chrome"],
                    ["map", "key", "\/firefox\/developer\/", "value", "Dev Edition - Learn More"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/firefox\/all\/", "value", "Systems \u0026 Languages"],
                    ["map", "key", "\/firefox\/notes\/", "value", "What's New"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Privacy"],
                    ["map", "key", "\/firefox\/desktop\/fast\/", "value", "Find out what makes this the fastest Firefox yet"],
                    ["map", "key", "\/firefox\/desktop\/customize\/", "value", "Find out what makes Firefox the most flexible browser there is"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/blog\/2015\/01\/27\/get-smart-on-international-data-privacy-day\/", "value", "Most Trusted Internet Company for Privacy"],
                    ["map", "key", "\/firefox\/desktop\/trust\/", "value", "Find out what makes Firefox the most trusted browser on the Web"],
                    ["map", "key", "http:\/\/www.tomshardware.com\/reviews\/chrome-27-firefox-21-opera-next,3534.html", "value", "Tom’s Hardware Web Browser Grand Prix XVI"],
                    ["map", "key", "\/firefox\/desktop\/#", "value", "Replay"],
                    ["map", "key", "https:\/\/support.mozilla.org\/products\/firefox", "value", "Need help with anything?"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/support.mozilla.org\/products\/firefox", "value", "Need help?"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/common-questions-after-updating-to-new-firefox", "value", "Frequently asked questions"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/learn-more-about-the-design-of-new-firefox", "value", "Learn about the new design"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/what-happened-to-the-add-on-bar", "value", "Where did my add-on bar go?"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/shapeoftheweb.mozilla.org\/trust\/security", "value", "Shape of the Web"],
                    ["map", "key", "http:\/\/cbsphishingquiz.mcafee.com\/", "value", "Test your phishing knowledge"],
                    ["map", "key", "https:\/\/www.cigionline.org\/sites\/default\/files\/survey\/slides.pdf", "value", "(CIGI IPSOS, November 2014)"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/create-secure-passwords-keep-your-identity-safe", "value", "tips for creating a strong password for every device and account"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/password-manager-remember-delete-change-passwords", "value", "Keep track with a password manager"],
                    ["map", "key", "http:\/\/stopthinkconnect.org\/2stepsahead\/resources", "value", "Find out more."],
                    ["map", "key", "https:\/\/www.staysafeonline.org\/stay-safe-online\/keep-a-clean-machine\/hacked-accounts", "value", "if you think your account has been compromised"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/update-firefox-latest-version", "value", "Firefox update"],
                    ["map", "key", "\/plugincheck\/", "value", "Firefox plugin check"],
                    ["map", "key", "https:\/\/support.google.com\/chrome\/answer\/95414", "value", "Chrome update"],
                    ["map", "key", "https:\/\/support.google.com\/chrome\/answer\/1181003", "value", "Chrome plugin check"],
                    ["map", "key", "http:\/\/pcsupport.about.com\/od\/browsers\/fl\/internet-explorer-version.htm", "value", "Internet Explorer update"],
                    ["map", "key", "http:\/\/windows.microsoft.com\/en-us\/internet-explorer\/manage-add-ons", "value", "Internet Explorer plugin check"],
                    ["map", "key", "https:\/\/support.apple.com\/HT204416", "value", "Safari update"],
                    ["map", "key", "https:\/\/support.apple.com\/HT202819", "value", "Safari plugin check"],
                    ["map", "key", "http:\/\/windows.microsoft.com\/en-US\/windows7\/products\/features\/windows-update", "value", "Windows"],
                    ["map", "key", "https:\/\/support.apple.com\/HT201541", "value", "Mac"],
                    ["map", "key", "https:\/\/www.avast.com\/", "value", "Avast"],
                    ["map", "key", "http:\/\/www.bitdefender.com\/solutions\/free.html", "value", "BitDefender"],
                    ["map", "key", "https:\/\/addons.mozilla.org\/firefox\/addon\/long-url-please\/", "value", "Long URL please"],
                    ["map", "key", "https:\/\/addons.mozilla.org\/firefox\/addon\/url-tooltip\/", "value", "URL Tooltip"],
                    ["map", "key", "https:\/\/teach.mozilla.org\/clubs\/", "value", "Mozilla Club"],
                    ["map", "key", "https:\/\/teach.mozilla.org\/activities\/privacy-basics", "value", "simple lesson in cybersecurity"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/shapeoftheweb.mozilla.org\/trust\/governmentSurveillance", "value", "turn over your information to governments"],
                    ["map", "key", "\/privacy\/principles\/", "value", "This is what we practice at Mozilla"],
                    ["map", "key", "https:\/\/www.cigionline.org\/sites\/default\/files\/survey\/slides.pdf", "value", "(CIGI IPSOS, November 2014)"],
                    ["map", "key", "\/newsletter\/", "value", "Mozilla newsletter"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/how-do-i-tell-if-my-connection-is-secure#w_green-padlock", "value", "Find out more"],
                    ["map", "key", "https:\/\/www.onguardonline.gov\/articles\/0014-tips-using-public-wi-fi-networks", "value", "Find out more"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/create-secure-passwords-keep-your-identity-safe", "value", "tips for creating a strong password for every device and account"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/password-manager-remember-delete-change-passwords", "value", "Firefox"],
                    ["map", "key", "https:\/\/support.google.com\/chrome\/answer\/95606", "value", "Chrome"],
                    ["map", "key", "http:\/\/windows.microsoft.com\/en-us\/internet-explorer\/fill-in-forms-remember-passwords-autocomplete", "value", "Internet Explorer"],
                    ["map", "key", "https:\/\/support.apple.com\/kb\/PH19249", "value", "Safari"],
                    ["map", "key", "http:\/\/help.opera.com\/Windows\/12.00\/en\/password.html", "value", "Opera"],
                    ["map", "key", "http:\/\/stopthinkconnect.org\/2stepsahead\/resources", "value", "Find out more"],
                    ["map", "key", "https:\/\/play.google.com\/store\/apps\/details?id=org.thoughtcrime.securesms", "value", "Signal"],
                    ["map", "key", "https:\/\/itunes.apple.com\/app\/signal-private-messenger\/id874139669", "value", "Signal"],
                    ["map", "key", "https:\/\/support.apple.com\/HT204837", "value", "FileVault"],
                    ["map", "key", "https:\/\/support.google.com\/nexus\/answer\/2844831?vid=1-635761320342085866-3234499977", "value", "See instructions here"],
                    ["map", "key", "http:\/\/windows.microsoft.com\/en-us\/windows-8\/bitlocker-drive-encryption", "value", "BitLocker"],
                    ["map", "key", "https:\/\/diskcryptor.net\/wiki\/Main_Page", "value", "Diskcryptor"],
                    ["map", "key", "https:\/\/support.apple.com\/HT202064", "value", "See instructions here"],
                    ["map", "key", "https:\/\/teach.mozilla.org\/clubs\/", "value", "Mozilla Club"],
                    ["map", "key", "https:\/\/teach.mozilla.org\/activities\/", "value", "simple lesson on government surveillance"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/contact\/communities\/", "value", "Mozilla communities"],
                    ["map", "key", "\/about\/forums\/", "value", "Mailing lists"],
                    ["map", "key", "https:\/\/wiki.mozilla.org\/IRC", "value", "IRC channels"],
                    ["map", "key", "https:\/\/input.mozilla.org\/feedback", "value", "Submit Firefox feedback"],
                    ["map", "key", "https:\/\/careers.mozilla.org\/", "value", "Explore Mozilla careers"],
                    ["map", "key", "https:\/\/support.mozilla.org\/", "value", "Get help with Firefox"],
                    ["map", "key", "https:\/\/reps.mozilla.org\/events\/period\/future\/ical\/", "value", "Subscribe to community events"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/twitter.com\/search?q=%23IAmAMozillian", "value", "#IAmAMozillian"],
                    ["map", "key", "\/contact\/communities\/", "value", "Mozilla communities"],
                    ["map", "key", "\/about\/forums\/", "value", "Mailing lists"],
                    ["map", "key", "https:\/\/wiki.mozilla.org\/IRC", "value", "IRC channels"],
                    ["map", "key", "https:\/\/input.mozilla.org\/feedback", "value", "Submit Firefox feedback"],
                    ["map", "key", "https:\/\/careers.mozilla.org\/", "value", "Explore Mozilla careers"],
                    ["map", "key", "https:\/\/support.mozilla.org\/", "value", "Get help with Firefox"],
                    ["map", "key", "https:\/\/reps.mozilla.org\/events\/period\/future\/ical\/", "value", "Subscribe to community events"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Learn", "value", "Learn To Code"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools", "value", "Use Firefox Dev Tools"],
                    ["map", "key", "https:\/\/aframe.io\/", "value", "Explore A-Frame"],
                    ["map", "key", "https:\/\/aframe.io\/blog\/", "value", "Visit the A-Frame Blog"],
                    ["map", "key", "https:\/\/wiki.mozilla.org\/Connected_Devices", "value", "Visit the Wiki (Internet of Things)"],
                    ["map", "key", "https:\/\/wiki.mozilla.org\/Connected_Devices\/Participation", "value", "Start Contributing (Internet of Things)"],
                    ["map", "key", "https:\/\/www.rust-lang.org\/", "value", "Visit Rust"],
                    ["map", "key", "https:\/\/www.rust-lang.org\/contribute.html", "value", "Get Involved (Rust)"],
                    ["map", "key", "https:\/\/servo.org\/", "value", "Visit Servo"],
                    ["map", "key", "https:\/\/blog.servo.org\/", "value", "Read the Blog (Servo)"],
                    ["map", "key", "https:\/\/letsencrypt.org\/", "value", "Learn More (Encrypt)"],
                    ["map", "key", "https:\/\/letsencrypt.org\/getinvolved\/", "value", "Contribute (Encrypt)"],
                    ["map", "key", "https:\/\/games.mozilla.org\/", "value", "Learn More (Gaming)"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Games", "value", "Start Building (Gaming)"],
                    ["map", "key", "https:\/\/mozvr.com\/#showcase", "value", "Making Virtual Reality a reality for all"],
                    ["map", "key", "https:\/\/www.openwebgames.com\/#\/demos.html", "value", "Using the web to Change the game"],
                    ["map", "key", "https:\/\/connected.mozilla.org\/2016\/08\/26\/the-project-sensorweb-poster-experiment\/", "value", "Adding Trust to the Internet of Things"],
                    ["map", "key", "https:\/\/medium.com\/@osunick\/context-graph-its-time-to-bring-context-back-to-the-web-a7542fe45cf3#.76ofcthq2", "value", "Building a browser that gets you"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Mozilla\/Rust", "value", "Inventing a safer programming language"],
                    ["map", "key", "https:\/\/testpilot.firefox.com\/experiments\/activity-stream\/", "value", "Try it Now (Building a Browser)"],
                    ["map", "key", "https:\/\/wiki.mozilla.org\/Context_Graph", "value", "Visit the Wiki (Building a Browser)"],
                    ["map", "key", "https:\/\/vr.mozilla.org\/", "value", "Learn More (VR)"],
                    ["map", "key", "https:\/\/research.mozilla.org\/mixed-reality\/", "value", "Learn about WebVR"],
                    ["map", "key", "https:\/\/www.mozilla.org\/en-US\/firefox\/developer\/", "value", "Learn More (Firefox Developer Edition)"],
                    ["map", "key", "https:\/\/research.mozilla.org\/servo-engines\/", "value", "Check out Servo"],
                    ["map", "key", "https:\/\/hacks.mozilla.org\/2017\/08\/inside-a-super-fast-css-engine-quantum-css-aka-stylo\/", "value", "Learn about Quantum CSS"],
                    ["map", "key", "https:\/\/research.mozilla.org\/webassembly\/", "value", "Meet WebAssembly"],
                    ["map", "key", "https:\/\/iot.mozilla.org\/", "value", "Get Started (Web of Things)"],
                    ["map", "key", "https:\/\/hacks.mozilla.org\/2017\/06\/building-the-web-of-things\/", "value", "Learn more (Web of Things)"],
                    ["map", "key", "https:\/\/github.com\/mozilla-iot", "value", "Start contributing (Web of Things)"],
                    ["map", "key", "https:\/\/testpilot.firefox.com\/experiments\/activity-stream", "value", "Try it now (Building a Browser)"],
                    ["map", "key", "https:\/\/research.mozilla.org\/rust\/", "value", "Learn about Rust"],
                    ["map", "key", "https:\/\/www.rust-lang.org\/en-US\/", "value", "Visit Rust"],
                    ["map", "key", "https:\/\/www.rust-lang.org\/en-US\/contribute.html", "value", "Get involved (Rust)"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/teach\/smarton\/", "value", "Get privacy and security tips"],
                    ["map", "key", "https:\/\/theglassroomnyc.org\/?utm_source=mozilla.org\u0026utm_medium=website\u0026utm_campaign=the-glass-room\u0026utm_content=IHLandingPage", "value", "Visit the Glass Room"],
                    ["map", "key", "https:\/\/toolkit.mozilla.org\/", "value", "Explore our Open Innovation Toolkit"],
                    ["map", "key", "https:\/\/science.mozilla.org\/", "value", "Visit the Mozilla Science Lab"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/internetcitizen\/2016\/11\/15\/rise-digital-empires\/", "value", "Read more from Mozilla Foundation’s Mark Surman"],
                    ["map", "key", "https:\/\/mozilla.github.io\/womenandweb\/", "value", "Check out Mozilla’s Women \u0026 Web Literacy program"],
                    ["map", "key", "https:\/\/learning.mozilla.org\/", "value", "Get started with the Mozilla Learning Network"],
                    ["map", "key", "https:\/\/internethealthreport.org\/", "value", "Read up on what's helping"],
                    ["map", "key", "\/internet-health\/privacy-security\/", "value", "Exercise Your Right to Privacy"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "https:\/\/saucelabs.com\/cross-browser-testing-tutorial", "value", "Get Started"],
                    ["map", "key", "https:\/\/github.com\/mdn\/crossbrowser-testing-lab\/wiki#get-acquainted-with-cross-browser-testing-best-practices", "value", "Get acquainted with cross-browser testing best practices"],
                    ["map", "key", "https:\/\/github.com\/mdn\/crossbrowser-testing-lab\/wiki#learn-how-to-test-manually-with-any-browser-and-os-combination", "value", "Learn how to test manually on any browser and OS combination"],
                    ["map", "key", "https:\/\/github.com\/mdn\/crossbrowser-testing-lab\/wiki#accelerate-your-testing-by-learning-how-to-write-automated-tests-in-selenium", "value", "Accelerate your testing by learning how to write automated tests in Selenium"],
                    ["map", "key", "https:\/\/github.com\/mdn\/crossbrowser-testing-lab\/wiki#run-automated-tests-across-multiple-browsers-in-parallel-on-sauce-labs", "value", "Run automated tests across multiple browsers in parallel on Sauce Labs"],
                    ["map", "key", "https:\/\/github.com\/mdn\/crossbrowser-testing-lab\/wiki#integrate-with-your-ci-server-to-run-automated-tests-every-time-you-commit-your-code", "value", "Integrate with your CI Server to run automated tests every time you commit your code"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/internet-health\/privacy-security\/#control", "value", "Anchor: User Control"],
                    ["map", "key", "\/internet-health\/privacy-security\/#security", "value", "Anchor: Cyber Security"],
                    ["map", "key", "\/internet-health\/privacy-security\/#surveillance", "value", "Anchor: Government Surveillance"],
                    ["map", "key", "http:\/\/www.pewinternet.org\/2015\/05\/20\/americans-attitudes-about-privacy-security-and-surveillance\/", "value", "Pew Research Center"],
                    ["map", "key", "https:\/\/support.apple.com\/HT203033", "value", "User Control - iOS"],
                    ["map", "key", "https:\/\/support.google.com\/googleplay\/answer\/6014972", "value", "User Control - Android"],
                    ["map", "key", "https:\/\/www.google.com\/ads\/preferences", "value", "User Control - Google"],
                    ["map", "key", "https:\/\/info.yahoo.com\/privacy\/us\/yahoo\/opt_out\/targeting\/details.html", "value", "User Control - Yahoo"],
                    ["map", "key", "https:\/\/www.facebook.com\/settings?tab=ads\u0026amp;view", "value", "User Control - Facebook"],
                    ["map", "key", "\/privacy\/", "value", "User Control - Privacy Policy"],
                    ["map", "key", "https:\/\/aboutthedata.com\/", "value", "User Control - Acxiom"],
                    ["map", "key", "https:\/\/en.wikipedia.org\/wiki\/List_of_data_breaches", "value", "Cyber Security - Data Breaches"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/create-secure-passwords-keep-your-identity-safe", "value", "Cyber Security - Strong pins"],
                    ["map", "key", "https:\/\/www.wired.com\/2016\/01\/you-need-a-password-manager\/", "value", "Cyber Security - Password manager"],
                    ["map", "key", "https:\/\/www.lockdownyourlogin.com\/", "value", "Cyber Security - 2-factor"],
                    ["map", "key", "https:\/\/advocacy.mozilla.org\/encrypt\/codemoji\/", "value", "Cyber Security - encryption"],
                    ["map", "key", "https:\/\/letsencrypt.org\/", "value", "Cyber Security - Universal Adoption"],
                    ["map", "key", "\/about\/policy\/lean-data\/", "value", "Cyber Security - Lean Data"],
                    ["map", "key", "https:\/\/www.cigionline.org\/internet-survey-2016", "value", "Surveillance - CIGI-Ipsos"],
                    ["map", "key", "http:\/\/www.greenbot.com\/article\/3119449\/android\/the-best-messaging-apps-with-end-to-end-encryption.html", "value", "Surveillance - Encrypted Apps"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/create-secure-passwords-keep-your-identity-safe?surveillance", "value", "Surveillance - Strong Passwords"],
                    ["map", "key", "https:\/\/www.wired.com\/2016\/01\/you-need-a-password-manager\/?surveillance", "value", "Surveillance - Password Manager"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/netpolicy\/2016\/09\/19\/improving-government-disclosure-of-security-vulnerabilities\/", "value", "Surveillance - Reform at the policy level"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/netpolicy\/2015\/06\/02\/mozilla-applauds-u-s-senates-passage-of-the-usa-freedom-act\/", "value", "Surveillance - USA freedom act"],
                    ["map", "key", "http:\/\/cyberlaw.stanford.edu\/events\/government-hacking-rule-41", "value", "Surveillance - Stanford's Center for Internet"],
                    ["map", "key", "https:\/\/internethealthreport.org\/", "value", "Internet Health Report"],
                    ["map", "key", "https:\/\/itunes.apple.com\/us\/app\/firefox-focus-privacy-browser\/id1055677337?mt=8", "value", "Cyber Security - Firefox Focus"],
                    ["map", "key", "\/about\/policy\/lean-data\/?control", "value", "User Control - Lean data"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/internet-health\/digital-inclusion\/#diversity", "value", "Anchor - Promote Diversity"],
                    ["map", "key", "\/internet-health\/digital-inclusion\/#respect", "value", "Anchor - Practice Respect"],
                    ["map", "key", "\/internet-health\/digital-inclusion\/#access", "value", "Anchor - Support Universal Access"],
                    ["map", "key", "http:\/\/webfoundation.org\/about\/research\/womens-rights-online-2015\/", "value", "Promote Diversity - World Wide Web Foundation"],
                    ["map", "key", "https:\/\/donate.wikimedia.org\/", "value", "Promote Diversity - Wikipedia - Donate"],
                    ["map", "key", "https:\/\/wikipedia.org\/wiki\/Wikipedia:Who_writes_Wikipedia", "value", "Promote Diversity - Wikipedia - Build"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Learn\/Accessibility", "value", "Promote Diversity - Accessibility Team"],
                    ["map", "key", "https:\/\/learning.mozilla.org\/blog\/new-partnership-with-un-women-to-teach-key-digital-skills-to-women", "value", "Promote Diversity - Partner with UN Women"],
                    ["map", "key", "http:\/\/www.pewinternet.org\/2014\/10\/22\/online-harassment\/", "value", "Respect - Pew Research"],
                    ["map", "key", "http:\/\/cyberbullying.org\/advice-for-adult-victims-of-cyberbullying", "value", "Respect - Report Bullying"],
                    ["map", "key", "http:\/\/www.connectsafely.org\/tips-to-help-stop-cyberbullying\/", "value", "Respect - Talk to your kids"],
                    ["map", "key", "https:\/\/d157rqmxrxj6ey.cloudfront.net\/amira\/33977\/", "value", "Respect - Teachers"],
                    ["map", "key", "https:\/\/coralproject.net\/", "value", "Respect - Coral Project"],
                    ["map", "key", "https:\/\/coralproject.net\/products\/talk.html", "value", "Respect - Coral Project - Talk"],
                    ["map", "key", "https:\/\/d157rqmxrxj6ey.cloudfront.net\/amira\/33977\/", "value", "Respect - Teaching Kit"],
                    ["map", "key", "https:\/\/www.accessnow.org\/keepiton\/", "value", "Access - AccessNow"],
                    ["map", "key", "http:\/\/www.dell.com\/learn\/us\/en\/uscorp1\/corp-comm\/us-goodwill-reconnect", "value", "Access - Donate Tech - Reconnect"],
                    ["map", "key", "https:\/\/en.wikipedia.org\/wiki\/StRUT", "value", "Access - Donate Tech - Student Recycling"],
                    ["map", "key", "http:\/\/interconnection.org\/", "value", "Access - Donate Tech - Interconnection"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/netpolicy\/category\/net-neutrality\/", "value", "Access - Donate Tech - Interconnection"],
                    ["map", "key", "https:\/\/equalrating.com\/", "value", "Access - Equal Rating Innovation Challenge"],
                    ["map", "key", "https:\/\/internethealthreport.org\/", "value", "Internet Health Report"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 89],
                "vtp_map": ["list", ["map", "key", "https:\/\/www.w3.org\/TR\/css3-grid-layout\/#fr-unit", "value", "Example 1: Fractional Unit"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Web\/CSS\/z-index", "value", "Example 2: z-index"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Page_Inspector\/How_to\/Examine_grid_layouts", "value", "Inspect the Design: Grid Inspector Tool"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Web\/CSS\/CSS_Grid_Layout", "value", "Learn More: MDN Reference Documentation"],
                    ["map", "key", "http:\/\/gridbyexample.com\/", "value", "Learn More: Rachel Andrew's Grid by Example"],
                    ["map", "key", "http:\/\/labs.jensimmons.com\/", "value", "Learn More: Jen Simmons' Layout Lab"],
                    ["map", "key", "http:\/\/jensimmons.com\/post\/feb-27-2017\/learn-css-grid", "value", "Learn More: Learn CSS Grid"],
                    ["map", "key", "http:\/\/jensimmons.com\/post\/feb-28-2017\/benefits-learning-how-code-layouts-css", "value", "Learn More: The benefits of learning how to code layouts with CSS"],
                    ["map", "key", "https:\/\/rachelandrew.co.uk\/archives\/2017\/02\/20\/a-box-alignment-cheatsheet\/", "value", "Learn More: A Box Alignment Cheat Sheet"],
                    ["map", "key", "http:\/\/jensimmons.com\/", "value", "Further Reading: Jen Simmons' website"],
                    ["map", "key", "https:\/\/rachelandrew.co.uk\/", "value", "Further Reading: Rachel Andrew's website"],
                    ["map", "key", "https:\/\/www.w3.org\/TR\/css-grid-1\/", "value", "Further Reading: CSS Grid Layout Module 1"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Web\/CSS\/CSS_Grid_Layout\/Basic_Concepts_of_Grid_Layout", "value", "Further Reading: Basic Concepts of Grid Layout"],
                    ["map", "key", "https:\/\/github.com\/rachelandrew\/cssgrid-ama", "value", "Further Reading: CSS AMA on Github"],
                    ["map", "key", "http:\/\/gridbyexample.com\/learn\/2016\/12\/17\/learning-grid-day17\/", "value", "Further Reading: Video Demo of CSS Grid Inspector"],
                    ["map", "key", "https:\/\/hacks.mozilla.org\/2016\/12\/css-grid-and-grid-highlighter-now-in-firefox-developer-edition\/", "value", "Further Reading: Css Grid and Grid Highlighter Now in Firefox Developer Edition"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Page_Inspector\/How_to\/Examine_grid_layouts", "value", "Further Reading: How to Examine Grid Layouts"],
                    ["map", "key", "https:\/\/hacks.mozilla.org\/2015\/09\/the-future-of-layout-with-css-grid-layouts\/", "value", "Further Reading: The future of layout with CSS: Grid Layouts"],
                    ["map", "key", "http:\/\/gridbyexample.com\/browsers\/", "value", "Further Reading: gridbyexample.com\/browsers"],
                    ["map", "key", "http:\/\/caniuse.com\/#feat=css-grid", "value", "Further Reading: caniuse"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 89],
                "vtp_map": ["list", ["map", "key", "\/privacy\/firefox\/", "value", "Firefox Privacy"],
                    ["map", "key", "\/developer\/css-grid\/", "value", "CSS Grid"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Debugger", "value", "Learn More - Debugger"],
                    ["map", "key", "https:\/\/discourse.mozilla-community.org\/c\/devtools", "value", "Join the Conversation"],
                    ["map", "key", "https:\/\/devtools-html.github.io\/", "value", "Get Involved"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Page_Inspector", "value", "Feature - Inspector"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Web_Console", "value", "Feature - Console"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Debugger", "value", "Feature - Debugger"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Network_Monitor", "value", "Feature - Network"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Storage_Inspector", "value", "Feature - Storage Panel"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Responsive_Design_Mode", "value", "Feature - Responsive Design Mode"],
                    ["map", "key", "https:\/\/hacks.mozilla.org\/2015\/11\/developer-edition-44-creative-tools-and-more\/", "value", "Feature - Visual Editing"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Performance", "value", "Feature - Performance"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Memory", "value", "Feature - Memory"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Web_Audio_Editor", "value", "Feature - Web Audio"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Scratchpad", "value", "Feature - Scratchpad"],
                    ["map", "key", "https:\/\/developer.mozilla.org\/docs\/Tools\/Style_Editor", "value", "Feature - Style Editor"],
                    ["map", "key", "\/privacy\/firefox\/#telemetry", "value", "Feedback to Mozilla"],
                    ["map", "key", "https:\/\/hacks.mozilla.org\/2017\/08\/inside-a-super-fast-css-engine-quantum-css-aka-stylo\/", "value", "Lean More - CSS Engine"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 89],
                "vtp_map": ["list", ["map", "key", "https:\/\/www.digitaltrends.com\/web\/firefox-quantum-hands-on-review\/", "value", "What's New - Digital Trends"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/firefox\/quantum-performance-test\/", "value", "2x Faster - Powerful Browser Engine"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/firefox\/quantum-performance-test\/", "value", "30% Lighter than Chrome -  Less memory usage"],
                    ["map", "key", "\/privacy\/firefox\/", "value", "Privacy"],
                    ["map", "key", "https:\/\/blog.mozilla.org\/firefox\/tracking-protection-study\/", "value", "Seriously Private Browsing - Pages Load 44% Faster"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 89],
                "vtp_defaultValue": "link not added",
                "vtp_map": ["list", ["map", "key", "\/privacy\/firefox\/", "value", "Firefox Privacy Notice"],
                    ["map", "key", "https:\/\/support.mozilla.org\/kb\/switching-chrome-firefox", "value", "Switching is Easy - Learn More"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 11],
                "vtp_defaultValue": "page not added",
                "vtp_map": ["list", ["map", "key", "Homepage", "value", ["macro", 124]],
                    ["map", "key", "\/firefox\/all\/", "value", ["macro", 125]],
                    ["map", "key", "\/firefox\/android\/", "value", ["macro", 126]],
                    ["map", "key", "\/firefox\/ios\/", "value", ["macro", 127]],
                    ["map", "key", "\/firefox\/channel\/", "value", ["macro", 128]],
                    ["map", "key", "\/firefox\/firstrun\/", "value", ["macro", 129]],
                    ["map", "key", "\/plugincheck\/", "value", ["macro", 130]],
                    ["map", "key", "\/firefox\/desktop\/fast\/", "value", ["macro", 131]],
                    ["map", "key", "\/firefox\/desktop\/trust\/", "value", ["macro", 132]],
                    ["map", "key", "\/firefox\/desktop\/customize\/", "value", ["macro", 133]],
                    ["map", "key", "\/firefox\/os\/", "value", ["macro", 134]],
                    ["map", "key", "\/firefox\/hello\/", "value", ["macro", 135]],
                    ["map", "key", "\/firefox\/sync\/", "value", ["macro", 136]],
                    ["map", "key", "\/contribute\/", "value", ["macro", 137]],
                    ["map", "key", "\/privacy\/", "value", ["macro", 138]],
                    ["map", "key", "\/firefox\/choose\/", "value", ["macro", 139]],
                    ["map", "key", "\/teach\/smarton\/tracking\/", "value", ["macro", 140]],
                    ["map", "key", "\/firefox\/private-browsing\/", "value", ["macro", 141]],
                    ["map", "key", "\/firefox\/new\/", "value", ["macro", 142]],
                    ["map", "key", "\/firefox\/desktop\/", "value", ["macro", 143]],
                    ["map", "key", "\/firefox\/whatsnew\/", "value", ["macro", 144]],
                    ["map", "key", "\/teach\/smarton\/security\/", "value", ["macro", 145]],
                    ["map", "key", "\/teach\/smarton\/surveillance\/", "value", ["macro", 146]],
                    ["map", "key", "\/contribute\/events\/", "value", ["macro", 147]],
                    ["map", "key", "\/contribute\/stories\/", "value", ["macro", 148]],
                    ["map", "key", "\/contribute\/stories\/shreyas\/", "value", ["macro", 148]],
                    ["map", "key", "\/contribute\/stories\/faye\/", "value", ["macro", 148]],
                    ["map", "key", "\/contribute\/stories\/ruben\/", "value", ["macro", 148]],
                    ["map", "key", "\/contribute\/stories\/michael\/", "value", ["macro", 148]],
                    ["map", "key", "\/technology\/", "value", ["macro", 149]],
                    ["map", "key", "\/internet-health\/", "value", ["macro", 150]],
                    ["map", "key", "\/developer\/browsertest\/", "value", ["macro", 151]],
                    ["map", "key", "\/internet-health\/privacy-security\/", "value", ["macro", 152]],
                    ["map", "key", "\/internet-health\/digital-inclusion\/", "value", ["macro", 153]],
                    ["map", "key", "\/developer\/css-grid\/", "value", ["macro", 154]],
                    ["map", "key", "\/firefox\/developer\/", "value", ["macro", 155]],
                    ["map", "key", "\/firefox\/", "value", ["macro", 156]],
                    ["map", "key", "\/firefox\/switch\/", "value", ["macro", 157]]
                ]
            }, {
                "function": "__c",
                "vtp_value": "2"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-link-name"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "customReferrer"
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 162],
                "vtp_defaultValue": ["macro", 162],
                "vtp_map": ["list", ["map", "key", "undefined", "value", ["macro", 163]],
                    ["map", "key", "direct", "value", ""]
                ]
            }, {
                "function": "__c",
                "vtp_value": "6"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data-banner-present"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "f",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__c",
                "vtp_value": "16"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data-ex-experiment"
            }, {
                "function": "__c",
                "vtp_value": "62"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data-ex-present"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "win10SUser"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_defaultPages": ["list"],
                "vtp_component": "PATH",
                "vtp_varType": "URL"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": true,
                "vtp_varType": "ATTRIBUTE",
                "vtp_defaultValue": "unavailable",
                "vtp_attribute": "data-ctorig"
            }, {
                "function": "__c",
                "vtp_value": "5"
            }, {
                "function": "__c",
                "vtp_value": "33"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "(not set)",
                "vtp_name": "search-query"
            }, {
                "function": "__c",
                "vtp_value": "4"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ad-content"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eLabel"
            }, {
                "function": "__c",
                "vtp_value": "7"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data-banner-click"
            }, {
                "function": "__c",
                "vtp_value": "8"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data-banner-dismissal"
            }, {
                "function": "__c",
                "vtp_value": "17"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data-banner-name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "secondary-nav-heading"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data-banner-impression"
            }, {
                "function": "__c",
                "vtp_value": "10"
            }, {
                "function": "__c",
                "vtp_value": "12"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": true,
                "vtp_varType": "ATTRIBUTE",
                "vtp_defaultValue": ["macro", 88],
                "vtp_attribute": "data-cta-text"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__ctv"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__ua",
                "priority": 99,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Firefox Download",
                "vtp_eventLabel": ["template", "Firefox for ", ["macro", 91]],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 99], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 100], "dimension", ["macro", 101]],
                    ["map", "index", ["macro", 102], "dimension", ["macro", 103]],
                    ["map", "index", ["macro", 104], "dimension", ["macro", 119]],
                    ["map", "index", ["macro", 120], "dimension", ["macro", 88]],
                    ["map", "index", ["macro", 121], "dimension", ["macro", 122]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Firefox Download"],
                    ["map", "index", ["macro", 69], "dimension", ["macro", 70]],
                    ["map", "index", ["macro", 71], "dimension", ["macro", 72]],
                    ["map", "index", ["macro", 73], "dimension", ["macro", 74]],
                    ["map", "index", ["macro", 75], "dimension", ["macro", 76]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 764
            }, {
                "function": "__ua",
                "priority": 99,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["template", ["macro", 98], " Download"],
                "vtp_eventLabel": ["template", ["macro", 98], " for ", ["macro", 91]],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 190], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 100], "dimension", ["macro", 101]],
                    ["map", "index", ["macro", 102], "dimension", ["macro", 103]],
                    ["map", "index", ["macro", 104], "dimension", ["macro", 119]],
                    ["map", "index", ["macro", 120], "dimension", ["macro", 88]],
                    ["map", "index", ["macro", 121], "dimension", ["macro", 122]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Firefox Focus Download"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 803
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "Contribute Landing Interactions",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["macro", 24],
                "vtp_eventLabel": ["macro", 25],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Page Interaction - Contribute Landing"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 457
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "\/contribute Interactions",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Video Interactions",
                "vtp_eventLabel": "Video ended",
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Page Interaction - Contribute Video Finished"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 463
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "\/desktop\/tips\/ Interactions",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "page load",
                "vtp_eventLabel": ["macro", 31],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Page Interaction - Desktop Load - Tips"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 466
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": ["macro", 34],
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["macro", 33],
                "vtp_eventLabel": "Firefox Account",
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Page Interaction - Firstrun FxA"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 477
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "Mozillian Stories Interaction",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["macro", 24],
                "vtp_eventLabel": ["macro", 25],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Page Interaction - Mozillian Stories"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 488
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "mozilla15 Slideshow",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["macro", 32],
                "vtp_eventLabel": ["macro", 35],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Event - Slideshow Interaction - Mozilla 15"]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 502
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["macro", 32],
                "vtp_eventLabel": ["template", ["macro", 36], " video"],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": true,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 39], "dimension", ["macro", 41]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Video Interaction"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 512
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "change language",
                "vtp_eventLabel": ["template", ["macro", 42], " to ", ["macro", 43]],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Change Language"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 518
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "download calendar .ics file",
                "vtp_eventLabel": "event subscription",
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Community Events Subscribe"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 520
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "form submit",
                "vtp_eventLabel": ["macro", 44],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Contribute Interactions - Form Submit"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 521
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "button click",
                "vtp_eventLabel": ["macro", 44],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Contribution Interactions - Button Click"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 522
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "firefox account",
                "vtp_eventLabel": ["template", "create account: ", ["macro", 45], " ", ["macro", 46]],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Create Account"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 523
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "firefox account",
                "vtp_eventLabel": "create account button click",
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Create Account - Button Click"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 524
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["template", "Question ", ["macro", 32]],
                "vtp_eventLabel": ["macro", 47],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - FAQ Expand or Collapse"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 525
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "quote arrow click",
                "vtp_eventLabel": ["template", ["macro", 48], ": ", ["macro", 49], " - ", ["macro", 50]],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Manifesto Quote Arrow Click"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 541
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "quote click",
                "vtp_eventLabel": ["template", ["macro", 49], " - ", ["macro", 50]],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Manifesto Quote Click"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 542
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "social share",
                "vtp_eventLabel": ["macro", 50],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Manifesto Quote Share"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 543
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "newsletter subscription",
                "vtp_eventLabel": ["macro", 51],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 52], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Newsletter Signups"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 544
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "scroll",
                "vtp_eventLabel": ["macro", 53],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 54], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Scroll Tracking"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 546
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": true,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_gaSettings": ["macro", 23],
                "vtp_dimension": ["list", ["map", "index", "7", "dimension", ["macro", 58]],
                    ["map", "index", ["macro", 28], "dimension", "GA Pageview - Campaign - First Run"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 559
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Firefox Download",
                "vtp_eventLabel": ["template", "Send Firefox to ", ["macro", 60]],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": true,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Event - Campaign - Send to Device Success"]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 683
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "email opt-in",
                "vtp_eventLabel": ["macro", 61],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Event - Email Opt-in Tag"]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 684
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "button click",
                "vtp_eventLabel": ["macro", 32],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 62], "dimension", ["macro", 63]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Get Involved - Task Selection"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 685
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 64],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "scroll",
                "vtp_eventLabel": ["macro", 53],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 54], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Page Interaction - Scroll Tracking"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 690
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "\/windows-10\/welcome\/ Interactions",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["macro", 65],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Page Interaction - Windows 10 Welcome"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 692
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["macro", 66],
                "vtp_eventLabel": ["macro", 67],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 62], "dimension", ["macro", 63]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Get Involved - Task Interaction"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 694
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "\/firefox\/accounts\/ Interactions",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["macro", 32],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Event - Account Page - Interaction"]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 696
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "button click",
                "vtp_eventLabel": ["macro", 68],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Event - Button Clicks - Data Attribute"],
                    ["map", "index", ["macro", 69], "dimension", ["macro", 70]],
                    ["map", "index", ["macro", 71], "dimension", ["macro", 72]],
                    ["map", "index", ["macro", 73], "dimension", ["macro", 74]],
                    ["map", "index", ["macro", 75], "dimension", ["macro", 76]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 697
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "\/firefox\/firstrun\/learnmore\/ Interactions",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "tab visible",
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - FC - Learn More Page - Tab Visible"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 701
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "\/firefox\/whatsnew\/ Interactions",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "tab visible",
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - FC - Whats New Page - Tab Visible"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 703
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Firefox Download",
                "vtp_eventLabel": "Firefox for Desktop - Thank You",
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Event - Firefox - Download - Thank You"]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 711
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "page load",
                "vtp_eventLabel": "capture plugin counts",
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "46", "dimension", ["macro", 77]],
                    ["map", "index", "47", "dimension", ["macro", 78]],
                    ["map", "index", "48", "dimension", ["macro", 79]],
                    ["map", "index", "49", "dimension", ["macro", 80]],
                    ["map", "index", "50", "dimension", ["macro", 81]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Plugin Check - Page Load"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 720
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["template", "Carousel: ", ["macro", 48]],
                "vtp_eventLabel": ["template", "Navigate to ", ["macro", 82]],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Event - Firefox Channel - Carousel Interaction"]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 728
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_gaSettings": ["macro", 23],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "\u0026dp", "value", ["macro", 83]]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Pageview - Virtual Pageview"]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 731
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "\/os\/devices\/ Interactions",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Get a Phone Overlay Exits",
                "vtp_eventLabel": ["macro", 86],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Page Interaction - Devices - Overlay Exit"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 757
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "event link click",
                "vtp_eventLabel": ["macro", 88],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Community Events - Click"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 761
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["macro", 92],
                "vtp_eventLabel": ["macro", 90],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 62], "dimension", ["macro", 63]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Contribute Task Pages - Other Link Clicks"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 762
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "footer click",
                "vtp_eventLabel": "Creative Commons license",
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Event - Creative Commons License - Click"]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 763
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Firefox Download",
                "vtp_eventLabel": "Firefox Aurora",
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 99], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 100], "dimension", ["macro", 101]],
                    ["map", "index", ["macro", 102], "dimension", ["macro", 103]],
                    ["map", "index", ["macro", 104], "dimension", ["macro", 119]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Firefox Download - Android Aurora"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 765
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Firefox Download",
                "vtp_eventLabel": "Firefox Beta Android",
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 99], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 100], "dimension", ["macro", 101]],
                    ["map", "index", ["macro", 102], "dimension", ["macro", 103]],
                    ["map", "index", ["macro", 104], "dimension", ["macro", 119]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Firefox Download - Android Beta"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 766
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Firefox Download",
                "vtp_eventLabel": "Firefox for Desktop",
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 99], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 100], "dimension", ["macro", 101]],
                    ["map", "index", ["macro", 102], "dimension", ["macro", 103]],
                    ["map", "index", ["macro", 104], "dimension", ["macro", 119]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Firefox Download - Click Here New Page"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 767
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Firefox Download",
                "vtp_eventLabel": "Firefox Beta",
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 99], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 100], "dimension", ["macro", 101]],
                    ["map", "index", ["macro", 102], "dimension", ["macro", 103]],
                    ["map", "index", ["macro", 104], "dimension", ["macro", 119]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Firefox Download - Desktop Beta"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 768
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Firefox Download",
                "vtp_eventLabel": "Firefox Developer Edition",
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 99], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 100], "dimension", ["macro", 101]],
                    ["map", "index", ["macro", 102], "dimension", ["macro", 103]],
                    ["map", "index", ["macro", 104], "dimension", ["macro", 119]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Firefox Download - Desktop Developer"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 769
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "device type click",
                "vtp_eventLabel": ["macro", 88],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Firefox OS - Device Type"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 771
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "mailto click",
                "vtp_eventLabel": ["macro", 123],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Mailto Click"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 773
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "link click",
                "vtp_eventLabel": ["macro", 158],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 159], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Master - Link Clicks"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 774
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["template", ["macro", 87], " click"],
                "vtp_eventLabel": ["macro", 160],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 159], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Link Clicks - Data Attribute"],
                    ["map", "index", ["macro", 69], "dimension", ["macro", 70]],
                    ["map", "index", ["macro", 71], "dimension", ["macro", 72]],
                    ["map", "index", ["macro", 73], "dimension", ["macro", 74]],
                    ["map", "index", ["macro", 75], "dimension", ["macro", 76]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 778
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_gaSettings": ["macro", 23],
                "vtp_overrideGaSettings": true,
                "vtp_setTrackerName": false,
                "vtp_doubleClick": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"],
                    ["map", "fieldName", "anonymizeIp", "value", "true"],
                    ["map", "fieldName", "cookieDomain", "value", "auto"],
                    ["map", "fieldName", "referrer", "value", ["macro", 164]]
                ],
                "vtp_metric": ["list", ["map", "index", ["macro", 165], "metric", ["macro", 166]]],
                "vtp_enableLinkId": true,
                "vtp_dimension": ["list", ["map", "index", ["macro", 37], "dimension", ["macro", 38]],
                    ["map", "index", ["macro", 39], "dimension", ["macro", 41]],
                    ["map", "index", "11", "dimension", ["macro", 167]],
                    ["map", "index", ["macro", 62], "dimension", ["macro", 22]],
                    ["map", "index", ["macro", 168], "dimension", ["macro", 169]],
                    ["map", "index", ["macro", 170], "dimension", ["macro", 171]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Pageview - Core Tracking"],
                    ["map", "index", ["macro", 69], "dimension", ["macro", 70]],
                    ["map", "index", ["macro", 71], "dimension", ["macro", 72]],
                    ["map", "index", ["macro", 73], "dimension", ["macro", 74]],
                    ["map", "index", ["macro", 75], "dimension", ["macro", 76]],
                    ["map", "index", "32", "dimension", ["macro", 172]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 779
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Firefox Download",
                "vtp_eventLabel": "Firefox Nightly Edition",
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 99], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 100], "dimension", ["macro", 101]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Firefox Download - Desktop Nightly"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 786
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "link click",
                "vtp_eventLabel": "Systems \u0026 Languages - Desktop",
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 159], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Page Interaction - Other Platform - New"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 787
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "link click",
                "vtp_eventLabel": ["template", "Blog: ", ["macro", 173]],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 159], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Event - Embed Blog - Link Clicks"]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 788
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Search Results Click",
                "vtp_eventLabel": ["macro", 174],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": true,
                "vtp_setTrackerName": false,
                "vtp_eventValue": "1",
                "vtp_metric": ["list", ["map", "index", ["macro", 175], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 176], "dimension", ["macro", 177]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Site Search Results Click"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 789
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Search Results Submit",
                "vtp_eventLabel": ["macro", 177],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": true,
                "vtp_setTrackerName": false,
                "vtp_eventValue": "1",
                "vtp_metric": ["list", ["map", "index", ["macro", 178], "metric", "1"]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 176], "dimension", ["macro", 177]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Site Search Submit"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 790
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["macro", 32],
                "vtp_eventLabel": ["macro", 179],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": true,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Event - Site Banner Impression"]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 791
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["macro", 32],
                "vtp_eventLabel": ["macro", 179],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Event - Site Banner Click"]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 792
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["macro", 180],
                "vtp_eventLabel": ["macro", 181],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 159], "metric", "1"],
                    ["map", "index", ["macro", 182], "metric", ["macro", 183]],
                    ["map", "index", ["macro", 184], "metric", ["macro", 185]]
                ],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 186], "dimension", ["macro", 187]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Master - In Page Engagements"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 793
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "nav click",
                "vtp_eventLabel": ["template", ["macro", 32], " ", ["macro", 188], " ", ["macro", 43], " ", ["macro", 42]],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 28], "dimension", "GA Event - Global Nav"]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 795
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["template", ["macro", 11], " Interactions"],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": "Non-Interactions",
                "vtp_eventLabel": ["macro", 181],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_metric": ["list", ["map", "index", ["macro", 165], "metric", ["macro", 189]]],
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", ["macro", 186], "dimension", ["macro", 187]],
                    ["map", "index", ["macro", 62], "dimension", ["macro", 22]],
                    ["map", "index", ["macro", 168], "dimension", ["macro", 169]],
                    ["map", "index", ["macro", 170], "dimension", ["macro", 171]],
                    ["map", "index", ["macro", 26], "dimension", ["macro", 27]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Master - In page - Non-interaction"]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 30],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 796
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "cta click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", ["macro", 191], "metric", "1"]],
                "vtp_gaSettings": ["macro", 23],
                "vtp_eventAction": ["template", "cta: ", ["macro", 1]],
                "vtp_eventLabel": ["macro", 192],
                "vtp_dimension": ["list", ["map", "index", ["macro", 104], "dimension", ["macro", 16]],
                    ["map", "index", ["macro", 28], "dimension", "GA Event - Generic CTA Click"]
                ],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 806
            }, {
                "function": "__cl",
                "tag_id": 807
            }, {
                "function": "__cl",
                "tag_id": 808
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_836",
                "tag_id": 809
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_924",
                "tag_id": 810
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_927",
                "tag_id": 811
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_928",
                "tag_id": 812
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": true,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_930",
                "tag_id": 813
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_937",
                "tag_id": 814
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_938",
                "tag_id": 815
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_939",
                "tag_id": 816
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_940",
                "tag_id": 817
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_941",
                "tag_id": 818
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_942",
                "tag_id": 819
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_943",
                "tag_id": 820
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_944",
                "tag_id": 821
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_945",
                "tag_id": 822
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_946",
                "tag_id": 823
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_947",
                "tag_id": 824
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_948",
                "tag_id": 825
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_951",
                "tag_id": 826
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_954",
                "tag_id": 827
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_955",
                "tag_id": 828
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_956",
                "tag_id": 829
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "1",
                "vtp_uniqueTriggerId": "1075029_958",
                "tag_id": 830
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_1006",
                "tag_id": 831
            }, {
                "function": "__lcl",
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "1075029_1012",
                "tag_id": 832
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "1075029_1027",
                "tag_id": 833
            }, {
                "function": "__cl",
                "tag_id": 834
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "200",
                "vtp_uniqueTriggerId": "1075029_1096",
                "tag_id": 835
            }, {
                "function": "__cl",
                "tag_id": 836
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "contribute-landing-interactions"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "contribute-video-ended"
            }, {
                "function": "_re",
                "arg0": ["macro", 31],
                "arg1": "\/.*\/firefox\/desktop\/tips.*"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "gtm.dom"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "firstrun-fxa"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "mozillian-stories-interaction"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "mozilla-slideshow"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "video-interaction"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "change-language"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "download-events-calendar"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "contribute-signup-submit"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "contribute-signup-interaction"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "create-account"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "create-account-click"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "accordion-interaction"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "manifesto-quote-click-arrow"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "manifesto-quote-click"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "manifesto-quote-share"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "newsletter-signup-success"
            }, {
                "function": "_cn",
                "arg0": ["macro", 11],
                "arg1": "\/firefox\/quantum\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "scroll-section"
            }, {
                "function": "_re",
                "arg0": ["macro", 55],
                "arg1": "\/.*\/firefox\/38.0.5\/firstrun",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "dataLayer-initialized"
            }, {
                "function": "_eq",
                "arg0": ["macro", 56],
                "arg1": "39"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "send-to-device-success"
            }, {
                "function": "_cn",
                "arg0": ["macro", 32],
                "arg1": "email opt-in"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": ".*"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "get-involved-task-selection"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "scroll-tracking"
            }, {
                "function": "_re",
                "arg0": ["macro", 31],
                "arg1": "\/teach\/smarton\/",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 32],
                "arg1": "scroll"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "smarton-interactions"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "windows-10-welcome"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "get-involved-task-interaction"
            }, {
                "function": "_re",
                "arg0": ["macro", 32],
                "arg1": "Get involved exit link clicked",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "accounts"
            }, {
                "function": "_re",
                "arg0": ["macro", 68],
                "arg1": "unavailable"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "gtm.click"
            }, {
                "function": "_eq",
                "arg0": ["macro", 32],
                "arg1": "tab-visible"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "firstrun-interactions"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "whatsnew-interactions"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "\/firefox\/download\/thanks\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "plugincheck-load"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "channel-carousel-interaction"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "virtual-pageview"
            }, {
                "function": "_eq",
                "arg0": ["macro", 84],
                "arg1": "overlay exit"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_930($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 87],
                "arg1": "event"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_924($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 90],
                "arg1": "link not added"
            }, {
                "function": "_re",
                "arg0": ["macro", 91],
                "arg1": "Desktop|Android|iOS",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_927($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 89],
                "arg1": "\/foundation\/licensing\/website-content\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_928($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 91],
                "arg1": "unavailable"
            }, {
                "function": "_eq",
                "arg0": ["macro", 93],
                "arg1": "button"
            }, {
                "function": "_eq",
                "arg0": ["macro", 87],
                "arg1": "download"
            }, {
                "function": "_re",
                "arg0": ["macro", 14],
                "arg1": "MSIE (8|7|6).0",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_836($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_938($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 94],
                "arg1": "download-link"
            }, {
                "function": "_re",
                "arg0": ["macro", 31],
                "arg1": "\/contribute\/task\/devtools-challenger\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_937($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 95],
                "arg1": "Android Ice Cream Sandwich+"
            }, {
                "function": "_eq",
                "arg0": ["macro", 91],
                "arg1": "Android"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_939($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_940($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "aurora-desktop"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_941($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 97],
                "arg1": "developer|firefox",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_942($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 96],
                "arg1": "beta-desktop"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_943($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 89],
                "arg1": "nightly|firefox-devedition",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 91],
                "arg1": "Desktop"
            }, {
                "function": "_re",
                "arg0": ["macro", 31],
                "arg1": "\/channel\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_944($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 31],
                "arg1": "\/installer-help\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_945($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 89],
                "arg1": "product=firefox-devedition"
            }, {
                "function": "_re",
                "arg0": ["macro", 31],
                "arg1": "\/channel\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_946($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 31],
                "arg1": "\/developer\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_947($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_948($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 89],
                "arg1": "firefox-nightly"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_1006($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 98],
                "arg1": "Focus"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_1096($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 105],
                "arg1": "direct-download-link"
            }, {
                "function": "_re",
                "arg0": ["macro", 31],
                "arg1": "\/firefox\/new\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_951($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 105],
                "arg1": "device-nav-smartphones|device-nav-tvs",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_958($|,)))"
            }, {
                "function": "_sw",
                "arg0": ["macro", 123],
                "arg1": "mailto:"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_955($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 87],
                "arg1": "unavailable"
            }, {
                "function": "_eq",
                "arg0": ["macro", 158],
                "arg1": "link not added"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_956($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 87],
                "arg1": "(^download$|unavailable)"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_954($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 17],
                "arg1": "nav element"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "core-datalayer-loaded"
            }, {
                "function": "_sw",
                "arg0": ["macro", 161],
                "arg1": "https:\/\/www.mozilla.org\/media\/img\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "alternate-version"
            }, {
                "function": "_css",
                "arg0": ["macro", 0],
                "arg1": "#blogs a"
            }, {
                "function": "_re",
                "arg0": ["macro", 31],
                "arg1": "(\/technology\/)|(\/internet-health\/)"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_1012($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 94],
                "arg1": "gs-title"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "(^$|((^|,)1075029_1027($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "gcs-search"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "ad-impression"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "ad-click"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "in-page-interaction"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "global-nav"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "non-interaction"
            }, {
                "function": "_css",
                "arg0": ["macro", 0],
                "arg1": "[data-cta-type],[data-cta-type] *"
            }, {
                "function": "_cn",
                "arg0": ["macro", 55],
                "arg1": "contribute\/events\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 31],
                "arg1": "\/contribute\/task\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 31],
                "arg1": ".*"
            }, {
                "function": "_cn",
                "arg0": ["macro", 55],
                "arg1": "\/firefox\/os\/devices\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 161],
                "arg1": ".*"
            }, {
                "function": "_eq",
                "arg0": ["macro", 158],
                "arg1": "page not added"
            }, {
                "function": "_cn",
                "arg0": ["macro", 161],
                "arg1": "firefox\/os\/devices\/"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 2]
                ],
                [
                    ["if", 1],
                    ["add", 3]
                ],
                [
                    ["if", 2, 3],
                    ["add", 4]
                ],
                [
                    ["if", 4],
                    ["add", 5]
                ],
                [
                    ["if", 5],
                    ["add", 6]
                ],
                [
                    ["if", 6],
                    ["add", 7]
                ],
                [
                    ["if", 7],
                    ["add", 8]
                ],
                [
                    ["if", 8],
                    ["add", 9]
                ],
                [
                    ["if", 9],
                    ["add", 10]
                ],
                [
                    ["if", 10],
                    ["add", 11]
                ],
                [
                    ["if", 11],
                    ["add", 12]
                ],
                [
                    ["if", 12],
                    ["add", 13]
                ],
                [
                    ["if", 13],
                    ["add", 14]
                ],
                [
                    ["if", 14],
                    ["add", 15]
                ],
                [
                    ["if", 15],
                    ["add", 16]
                ],
                [
                    ["if", 16],
                    ["add", 17]
                ],
                [
                    ["if", 17],
                    ["add", 18]
                ],
                [
                    ["if", 18],
                    ["add", 19]
                ],
                [
                    ["if", 20],
                    ["unless", 19],
                    ["add", 20]
                ],
                [
                    ["if", 21, 22],
                    ["add", 21]
                ],
                [
                    ["if", 21, 23, 24],
                    ["add", 21]
                ],
                [
                    ["if", 25],
                    ["add", 22]
                ],
                [
                    ["if", 26, 27],
                    ["add", 23],
                    ["block", 28]
                ],
                [
                    ["if", 28],
                    ["add", 24]
                ],
                [
                    ["if", 29],
                    ["add", 25]
                ],
                [
                    ["if", 33],
                    ["add", 26]
                ],
                [
                    ["if", 34],
                    ["add", 27]
                ],
                [
                    ["if", 36],
                    ["add", 28]
                ],
                [
                    ["if", 38],
                    ["unless", 37],
                    ["add", 29]
                ],
                [
                    ["if", 39, 40],
                    ["add", 30]
                ],
                [
                    ["if", 39, 41],
                    ["add", 31]
                ],
                [
                    ["if", 24, 42],
                    ["add", 32],
                    ["block", 35]
                ],
                [
                    ["if", 43],
                    ["add", 33]
                ],
                [
                    ["if", 44],
                    ["add", 34]
                ],
                [
                    ["if", 45],
                    ["add", 35]
                ],
                [
                    ["if", 46, 47, 48],
                    ["add", 36]
                ],
                [
                    ["if", 47, 49, 50],
                    ["add", 37]
                ],
                [
                    ["if", 47, 53],
                    ["unless", 51, 52],
                    ["add", 38]
                ],
                [
                    ["if", 47, 54, 55],
                    ["add", 39]
                ],
                [
                    ["if", 38, 57],
                    ["unless", 56],
                    ["add", 0]
                ],
                [
                    ["if", 47, 58, 59, 60],
                    ["add", 0]
                ],
                [
                    ["if", 47, 58, 61],
                    ["unless", 59],
                    ["add", 0]
                ],
                [
                    ["if", 47, 58, 65, 66, 67],
                    ["add", 40],
                    ["block", 0]
                ],
                [
                    ["if", 47, 58, 66, 68],
                    ["add", 40],
                    ["block", 0]
                ],
                [
                    ["if", 47, 58, 66, 69, 70],
                    ["add", 40],
                    ["block", 0]
                ],
                [
                    ["if", 47, 58, 66, 72],
                    ["unless", 65, 71],
                    ["add", 41],
                    ["block", 0]
                ],
                [
                    ["if", 47, 58, 66, 73, 74],
                    ["add", 41],
                    ["block", 0]
                ],
                [
                    ["if", 47, 91, 92, 93],
                    ["add", 42]
                ],
                [
                    ["if", 47, 58, 76, 77, 78],
                    ["unless", 75],
                    ["add", 43],
                    ["block", 0]
                ],
                [
                    ["if", 47, 58, 73, 76, 79, 80],
                    ["add", 43],
                    ["block", 0]
                ],
                [
                    ["if", 47, 62, 63, 64],
                    ["add", 44],
                    ["block", 0]
                ],
                [
                    ["if", 47, 58, 76, 81, 82, 83],
                    ["add", 44],
                    ["block", 0]
                ],
                [
                    ["if", 47, 58, 76, 84, 85],
                    ["add", 44],
                    ["block", 0]
                ],
                [
                    ["if", 47, 58, 69, 76, 79, 86],
                    ["add", 44],
                    ["block", 0]
                ],
                [
                    ["if", 47, 94, 95],
                    ["add", 45]
                ],
                [
                    ["if", 47, 96, 97],
                    ["add", 46]
                ],
                [
                    ["if", 47, 98, 100],
                    ["unless", 99],
                    ["add", 47]
                ],
                [
                    ["if", 47, 102],
                    ["unless", 101],
                    ["add", 48]
                ],
                [
                    ["if", 38, 103],
                    ["add", 48]
                ],
                [
                    ["if", 104],
                    ["add", 49]
                ],
                [
                    ["if", 47, 58, 76, 82, 87, 88],
                    ["add", 50],
                    ["block", 0]
                ],
                [
                    ["if", 106],
                    ["add", 51]
                ],
                [
                    ["if", 47, 107, 108, 109],
                    ["add", 52]
                ],
                [
                    ["if", 47, 110, 111],
                    ["add", 53]
                ],
                [
                    ["if", 112],
                    ["add", 54]
                ],
                [
                    ["if", 113],
                    ["add", 55]
                ],
                [
                    ["if", 114],
                    ["add", 56]
                ],
                [
                    ["if", 115],
                    ["add", 57]
                ],
                [
                    ["if", 116],
                    ["add", 58]
                ],
                [
                    ["if", 117],
                    ["add", 59]
                ],
                [
                    ["if", 47, 58, 89, 90],
                    ["add", 1],
                    ["block", 0]
                ],
                [
                    ["if", 38, 118],
                    ["add", 60]
                ],
                [
                    ["if", 24],
                    ["add", 61, 62, 63, 68, 75, 76, 77, 78, 79, 80, 85, 86, 87, 88, 90]
                ],
                [
                    ["if", 24, 119],
                    ["add", 64]
                ],
                [
                    ["if", 24, 120],
                    ["add", 65]
                ],
                [
                    ["if", 24, 121],
                    ["add", 66, 69, 81, 89]
                ],
                [
                    ["if", 24, 122],
                    ["add", 67]
                ],
                [
                    ["if", 24, 82],
                    ["add", 70, 73]
                ],
                [
                    ["if", 24, 84],
                    ["add", 71]
                ],
                [
                    ["if", 24, 79],
                    ["add", 72, 74]
                ],
                [
                    ["if", 24, 123],
                    ["add", 82]
                ],
                [
                    ["if", 24],
                    ["unless", 124],
                    ["add", 83]
                ],
                [
                    ["if", 24, 125],
                    ["add", 84]
                ],
                [
                    ["if", 30, 31, 32],
                    ["block", 25]
                ],
                [
                    ["if", 34, 35],
                    ["block", 27]
                ],
                [
                    ["if", 104, 105],
                    ["block", 49]
                ]
            ]
        },
        "runtime": [
            [],
            []
        ]



    };
    var aa, ba = this || self,
        ca = function(a) {
            return "boolean" == typeof a
        },
        fa = /^[\w+/_-]+[=]{0,2}$/,
        ha = null;
    var ia = function() {},
        ja = function(a) {
            return "function" == typeof a
        },
        ka = function(a) {
            return "string" == typeof a
        },
        la = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        ma = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        f = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        na = function(a, b) {
            if (a && ma(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        pa = function(a, b) {
            if (!la(a) ||
                !la(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        ra = function(a, b) {
            for (var c = new qa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        sa = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        ta = function(a) {
            return Math.round(Number(a)) || 0
        },
        ua = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        va = function(a) {
            var b = [];
            if (ma(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        wa = function(a) {
            return a ?
                a.replace(/^\s+|\s+$/g, "") : ""
        },
        xa = function() {
            return (new Date).getTime()
        },
        qa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    qa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    qa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    qa.prototype.contains = function(a) {
        return void 0 !== this.get(a)
    };
    var ya = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        za = function(a) {
            var b = !1;
            return function() {
                if (!b) try {
                    a()
                } catch (c) {}
                b = !0
            }
        },
        Ca = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Da = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ea = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Fa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Ga = function(a) {
            if (null == a) return String(a);
            var b = Fa.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ha = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ia = function(a) {
            if (!a || "object" != Ga(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ha(a, "constructor") && !Ha(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ha(a, b)
        },
        u = function(a, b) {
            var c = b || ("array" == Ga(a) ? [] : {}),
                d;
            for (d in a)
                if (Ha(a, d)) {
                    var e = a[d];
                    "array" == Ga(e) ? ("array" != Ga(c[d]) && (c[d] = []), c[d] = u(e, c[d])) : Ia(e) ? (Ia(c[d]) || (c[d] = {}), c[d] = u(e, c[d])) : c[d] = e
                }
            return c
        };
    var Ja = [],
        Ka = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        La = function(a) {
            return Ka[a]
        },
        Ma = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var Qa = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        Ra = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        Va = function(a) {
            return Ra[a]
        };
    Ja[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Qa, Va) + "'"
        }
    };
    var cb = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        db = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        eb = function(a) {
            return db[a]
        };
    Ja[16] = function(a) {
        return a
    };
    var hb;
    var ib = [],
        jb = [],
        kb = [],
        lb = [],
        mb = [],
        nb = {},
        pb, qb, rb, sb = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        tb = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = !!nb[c],
                e = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e[d ? g : g.substr(4)] = a[g]);
            return d ? nb[c](e) : hb(c, e, b)
        },
        vb = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = ub(a[e], b, c));
            return d
        },
        wb =
        function(a) {
            var b = a["function"];
            if (!b) throw "Error: No function name given for function call.";
            var c = nb[b];
            return c ? c.priorityOverride || 0 : 0
        },
        ub = function(a, b, c) {
            if (ma(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(ub(a[e], b, c));
                        return d;
                    case "macro":
                        var g = a[1];
                        if (c[g]) return;
                        var h = ib[g];
                        if (!h || b.Ac(h)) return;
                        c[g] = !0;
                        try {
                            var k = vb(h, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = tb(k, b);
                            rb && (d = rb.Ff(d, k))
                        } catch (w) {
                            b.Yd && b.Yd(w, Number(g)), d = !1
                        }
                        c[g] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[ub(a[l], b, c)] = ub(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var m = !1, n = 1; n < a.length; n++) {
                            var p = ub(a[n], b, c);
                            qb && (m = m || p === qb.vb);
                            d.push(p)
                        }
                        return qb && m ? qb.If(d) : d.join("");
                    case "escape":
                        d = ub(a[1], b, c);
                        if (qb && ma(a[1]) && "macro" === a[1][0] && qb.jg(a)) return qb.vg(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Ja[a[t]] && (d = Ja[a[t]](d));
                        return d;
                    case "tag":
                        var q = a[1];
                        if (!lb[q]) throw Error("Unable to resolve tag reference " + q + ".");
                        return d = {
                            Kd: a[2],
                            index: q
                        };
                    case "zb":
                        var r = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        r["function"] = a[1];
                        var v = xb(r, b, c);
                        a[4] && (v = !v);
                        return v;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        xb = function(a, b, c) {
            try {
                return pb(vb(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return null
        };
    var yb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            cd: a("convert_case_to"),
            dd: a("convert_false_to"),
            ed: a("convert_null_to"),
            fd: a("convert_true_to"),
            gd: a("convert_undefined_to"),
            bh: a("debug_mode_metadata"),
            ia: a("function"),
            Se: a("instance_name"),
            Te: a("live_only"),
            Ue: a("malware_disabled"),
            Ve: a("metadata"),
            eh: a("original_vendor_template_id"),
            We: a("once_per_event"),
            yd: a("once_per_load"),
            zd: a("setup_tags"),
            Ad: a("tag_id"),
            Bd: a("teardown_tags")
        }
    }();
    var zb = null,
        Cb = function(a) {
            function b(p) {
                for (var t = 0; t < p.length; t++) d[p[t]] = !0
            }
            var c = [],
                d = [];
            zb = Ab(a);
            for (var e = 0; e < jb.length; e++) {
                var g = jb[e],
                    h = Bb(g);
                if (h) {
                    for (var k = g.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || [])
            }
            for (var m = [], n = 0; n < lb.length; n++) c[n] && !d[n] && (m[n] = !0);
            return m
        },
        Bb = function(a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) {
                var d = zb(b[c]);
                if (!d) return null === d ? null : !1
            }
            for (var e = a.unless || [], g = 0; g < e.length; g++) {
                var h = zb(e[g]);
                if (null === h) return null;
                if (h) return !1
            }
            return !0
        },
        Ab = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = xb(kb[c], a));
                return b[c]
            }
        };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    for (var Fb = "floor ceil round max min abs pow sqrt".split(" "), Gb = 0; Gb < Fb.length; Gb++) Math.hasOwnProperty(Fb[Gb]);
    var C = window,
        D = document,
        Hb = navigator,
        Ib = D.currentScript && D.currentScript.src,
        Jb = function(a, b) {
            var c = C[a];
            C[a] = void 0 === c ? b : c;
            return C[a]
        },
        Kb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Lb = function(a, b, c) {
            var d = D.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            Kb(d, b);
            c && (d.onerror = c);
            var e;
            if (null === ha) b: {
                var g = ba.document,
                    h = g.querySelector && g.querySelector("script[nonce]");
                if (h) {
                    var k = h.nonce || h.getAttribute("nonce");
                    if (k && fa.test(k)) {
                        ha = k;
                        break b
                    }
                }
                ha = ""
            }
            e = ha;
            e && d.setAttribute("nonce", e);
            var l = D.getElementsByTagName("script")[0] || D.body || D.head;
            l.parentNode.insertBefore(d, l);
            return d
        },
        Mb = function() {
            if (Ib) {
                var a = Ib.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Nb = function(a, b) {
            var c = D.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = D.body && D.body.lastChild ||
                D.body || D.head;
            d.parentNode.insertBefore(c, d);
            Kb(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Ob = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Pb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Qb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            C.setTimeout(a, 0)
        },
        Rb = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Sb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Tb = function(a) {
            var b = D.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Ub = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var g = a, h = 0; g && h <= c; h++) {
                if (d[String(g.tagName).toLowerCase()]) return g;
                g = g.parentElement
            }
            return null
        },
        Vb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    var H = {
        Yb: "event_callback",
        La: "event_timeout",
        V: "gtag.config",
        O: "allow_ad_personalization_signals",
        R: "cookie_expires",
        Ka: "cookie_update",
        va: "session_duration"
    };
    var jc = /[A-Z]+/,
        kc = /\s/,
        lc = function(a) {
            if (ka(a) && (a = wa(a), !kc.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (jc.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            h: d
                        }
                    }
                }
            }
        },
        nc = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = lc(a[c]);
                d && (b[d.id] = d)
            }
            mc(b);
            var e = [];
            sa(b, function(g, h) {
                e.push(h)
            });
            return e
        };

    function mc(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.h[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var oc = {},
        pc = null,
        qc = Math.random();
    oc.m = "GTM-MW3R8V";
    oc.zb = "9p0";
    var rc = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0,
            __paused: !0
        },
        sc = "www.googletagmanager.com/gtm.js";
    var tc = sc,
        uc = null,
        vc = null,
        wc = null,
        xc = "//www.googletagmanager.com/a?id=" + oc.m + "&cv=206",
        yc = {},
        zc = {},
        Ac = function() {
            var a = pc.sequence || 0;
            pc.sequence = a + 1;
            return a
        };
    var Bc = {},
        Dc = function(a, b) {
            Bc[a] = Bc[a] || [];
            Bc[a][b] = !0
        },
        Ec = function(a) {
            for (var b = [], c = Bc[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var Fc = function() {
            return "&tc=" + lb.filter(function(a) {
                return a
            }).length
        },
        Pc = function() {
            Gc && (C.clearTimeout(Gc), Gc = void 0);
            void 0 === Hc || Ic[Hc] && !Jc || (Kc[Hc] || Lc.lg() || 0 >= Mc-- ? (Dc("GTM", 1), Kc[Hc] = !0) : (Lc.Gg(), Ob(Nc()), Ic[Hc] = !0, Oc = Jc = ""))
        },
        Nc = function() {
            var a = Hc;
            if (void 0 === a) return "";
            var b = Ec("GTM"),
                c = Ec("TAGGING");
            return [Qc, Ic[a] ? "" : "&es=1", Rc[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", Fc(), Jc, Oc, "&z=0"].join("")
        },
        Sc = function() {
            return [xc, "&v=3&t=t", "&pid=" + pa(), "&rv=" + oc.zb].join("")
        },
        Tc = "0.005000" >
        Math.random(),
        Qc = Sc(),
        Uc = function() {
            Qc = Sc()
        },
        Ic = {},
        Jc = "",
        Oc = "",
        Hc = void 0,
        Rc = {},
        Kc = {},
        Gc = void 0,
        Lc = function(a, b) {
            var c = 0,
                d = 0;
            return {
                lg: function() {
                    if (c < a) return !1;
                    xa() - d >= b && (c = 0);
                    return c >= a
                },
                Gg: function() {
                    xa() - d >= b && (c = 0);
                    c++;
                    d = xa()
                }
            }
        }(2, 1E3),
        Mc = 1E3,
        Vc = function(a, b) {
            if (Tc && !Kc[a] && Hc !== a) {
                Pc();
                Hc = a;
                Jc = "";
                var c;
                c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
                Rc[a] = "&e=" + c + "&eid=" + a;
                Gc || (Gc = C.setTimeout(Pc, 500))
            }
        },
        Wc = function(a, b, c) {
            if (Tc && !Kc[a] && b) {
                a !== Hc && (Pc(), Hc = a);
                var d = String(b[yb.ia] || "").replace(/_/g,
                    "");
                0 === d.indexOf("cvt") && (d = "cvt");
                var e = c + d;
                Jc = Jc ? Jc + "." + e : "&tr=" + e;
                Gc || (Gc = C.setTimeout(Pc, 500));
                2022 <= Nc().length && Pc()
            }
        };
    var Xc = {},
        Yc = new qa,
        Zc = {},
        $c = {},
        dd = {
            name: "dataLayer",
            set: function(a, b) {
                u(ad(a, b), Zc);
                bd()
            },
            get: function(a) {
                return cd(a, 2)
            },
            reset: function() {
                Yc = new qa;
                Zc = {};
                bd()
            }
        },
        cd = function(a, b) {
            if (2 != b) {
                var c = Yc.get(a);
                if (Tc) {
                    var d = ed(a);
                    c !== d && Dc("GTM", 5)
                }
                return c
            }
            return ed(a)
        },
        ed = function(a, b, c) {
            var d = a.split("."),
                e = !1,
                g = void 0;
            return e ? g : gd(d)
        },
        gd = function(a) {
            for (var b = Zc, c = 0; c < a.length; c++) {
                if (null === b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        };
    var jd = function(a, b) {
            $c.hasOwnProperty(a) || (Yc.set(a, b), u(ad(a, b), Zc), bd())
        },
        ad = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        bd = function(a) {
            sa($c, function(b, c) {
                Yc.set(b, c);
                u(ad(b, void 0), Zc);
                u(ad(b, c), Zc);
                a && delete $c[b]
            })
        },
        kd = function(a, b, c) {
            Xc[a] = Xc[a] || {};
            var d = 1 !== c ? ed(b) : Yc.get(b);
            "array" === Ga(d) || "object" === Ga(d) ? Xc[a][b] = u(d) : Xc[a][b] = d
        },
        ld = function(a, b) {
            if (Xc[a]) return Xc[a][b]
        };
    var md = function() {
        var a = !1;
        return a
    };
    var J = function(a, b, c, d) {
            return (2 === nd() || d || "http:" != C.location.protocol ? a : b) + c
        },
        nd = function() {
            var a = Mb(),
                b;
            if (1 === a) a: {
                var c = tc;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, g = 1, h = D.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === g && 0 === l.indexOf(d) && (g = 2)
                    }
                }
                b = g
            }
            else b = a;
            return b
        };
    var Cd = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Dd = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Ed = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Fd = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Hd = function(a) {
            var b = cd("gtm.whitelist");
            b && Dc("GTM", 9);
            var c = b && Ea(va(b), Dd),
                d = cd("gtm.blacklist");
            d || (d = cd("tagTypeBlacklist")) && Dc("GTM", 3);
            d ? Dc("GTM", 8) : d = [];
            Gd() && (d = va(d), d.push("nonGooglePixels", "nonGoogleScripts"));
            0 <= f(va(d), "google") && Dc("GTM", 2);
            var e = d && Ea(va(d), Ed),
                g = {};
            return function(h) {
                var k = h && h[yb.ia];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== g[k]) return g[k];
                var l = zc[k] || [],
                    m = a(k, l);
                if (b) {
                    var n;
                    if (n = m) a: {
                        if (0 > f(c, k))
                            if (l && 0 < l.length)
                                for (var p = 0; p < l.length; p++) {
                                    if (0 >
                                        f(c, l[p])) {
                                        Dc("GTM", 11);
                                        n = !1;
                                        break a
                                    }
                                } else {
                                    n = !1;
                                    break a
                                }
                        n = !0
                    }
                    m = n
                }
                var t = !1;
                if (d) {
                    var q = 0 <= f(e, k);
                    if (q) t = q;
                    else {
                        var r = ra(e, l || []);
                        r && Dc("GTM", 10);
                        t = r
                    }
                }
                var v = !m || t;
                v || !(0 <= f(l, "sandboxedScripts")) || c && -1 !== f(c, "sandboxedScripts") || (v = ra(e, Fd));
                return g[k] = v
            }
        },
        Gd = function() {
            return Cd.test(C.location && C.location.hostname)
        };
    var Id = {
        Ff: function(a, b) {
            b[yb.cd] && "string" === typeof a && (a = 1 == b[yb.cd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(yb.ed) && null === a && (a = b[yb.ed]);
            b.hasOwnProperty(yb.gd) && void 0 === a && (a = b[yb.gd]);
            b.hasOwnProperty(yb.fd) && !0 === a && (a = b[yb.fd]);
            b.hasOwnProperty(yb.dd) && !1 === a && (a = b[yb.dd]);
            return a
        }
    };
    var Jd = {
            active: !0,
            isWhitelisted: function() {
                return !0
            }
        },
        Kd = function(a) {
            var b = pc.zones;
            !b && a && (b = pc.zones = a());
            return b
        };
    var Ld = !1,
        Md = 0,
        Nd = [];

    function Od(a) {
        if (!Ld) {
            var b = D.createEventObject,
                c = "complete" == D.readyState,
                d = "interactive" == D.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Ld = !0;
                for (var e = 0; e < Nd.length; e++) G(Nd[e])
            }
            Nd.push = function() {
                for (var g = 0; g < arguments.length; g++) G(arguments[g]);
                return 0
            }
        }
    }

    function Pd() {
        if (!Ld && 140 > Md) {
            Md++;
            try {
                D.documentElement.doScroll("left"), Od()
            } catch (a) {
                C.setTimeout(Pd, 50)
            }
        }
    }
    var Qd = function(a) {
        Ld ? a() : Nd.push(a)
    };
    var Rd = {},
        Sd = {},
        Td = function(a, b, c, d) {
            if (!Sd[a] || rc[b] || "__zone" === b) return -1;
            var e = {};
            Ia(d) && (e = u(d, e));
            e.id = c;
            e.status = "timeout";
            return Sd[a].tags.push(e) - 1
        },
        Ud = function(a, b, c, d) {
            if (Sd[a]) {
                var e = Sd[a].tags[b];
                e && (e.status = c, e.executionTime = d)
            }
        };

    function Vd(a) {
        for (var b = Rd[a] || [], c = 0; c < b.length; c++) b[c]();
        Rd[a] = {
            push: function(d) {
                d(oc.m, Sd[a])
            }
        }
    }
    var Yd = function(a, b, c) {
            Sd[a] = {
                tags: []
            };
            ja(b) && Wd(a, b);
            c && C.setTimeout(function() {
                return Vd(a)
            }, Number(c));
            return Xd(a)
        },
        Wd = function(a, b) {
            Rd[a] = Rd[a] || [];
            Rd[a].push(za(function() {
                return G(function() {
                    b(oc.m, Sd[a])
                })
            }))
        };

    function Xd(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function() {
                c++;
                return za(function() {
                    b++;
                    d && b >= c && Vd(a)
                })
            },
            nf: function() {
                d = !0;
                b >= c && Vd(a)
            }
        }
    };
    var Zd = function() {
        function a(d) {
            return !la(d) || 0 > d ? 0 : d
        }
        if (!pc._li && C.performance && C.performance.timing) {
            var b = C.performance.timing.navigationStart,
                c = la(dd.get("gtm.start")) ? dd.get("gtm.start") : 0;
            pc._li = {
                cst: a(c - b),
                cbt: a(vc - b)
            }
        }
    };
    var ce = !1,
        de = function() {
            return C.GoogleAnalyticsObject && C[C.GoogleAnalyticsObject]
        },
        ee = !1;
    var fe = function(a) {
            C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || "ga");
            var b = C.GoogleAnalyticsObject;
            if (C[b]) C.hasOwnProperty(b) || Dc("GTM", 12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                C[b] = c
            }
            Zd();
            return C[b]
        },
        ge = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = de();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var ie = function() {},
        he = function() {
            return C.GoogleAnalyticsObject || "ga"
        };
    var ke = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var le = /:[0-9]+$/,
        me = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var g = d[e].split("=");
                if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) {
                    var h = g.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        },
        pe = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = ne(a.protocol) || ne(C.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : C.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || C.location.hostname).replace(le, "").toLowerCase());
            var g = b,
                h, k = ne(a.protocol);
            g && (g = String(g).toLowerCase());
            switch (g) {
                case "url_no_fragment":
                    h = oe(a);
                    break;
                case "protocol":
                    h = k;
                    break;
                case "host":
                    h = a.hostname.replace(le, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(h);
                        l && l[0] && (h = h.substr(l[0].length))
                    }
                    break;
                case "port":
                    h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Dc("TAGGING", 1);
                    h = "/" == a.pathname.substr(0, 1) ? a.pathname :
                        "/" + a.pathname;
                    var m = h.split("/");
                    0 <= f(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    h = m.join("/");
                    break;
                case "query":
                    h = a.search.replace("?", "");
                    e && (h = me(h, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    h = 1 < n.length ? n[n.length - 1] : "";
                    h = h.split("/")[0];
                    break;
                case "fragment":
                    h = a.hash.replace("#", "");
                    break;
                default:
                    h = a && a.href
            }
            return h
        },
        ne = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        oe = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        qe = function(a) {
            var b = D.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Dc("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(le, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        };
    var we = function(a) {};

    function ve(a, b) {
        a.containerId = oc.m;
        var c = {
            type: "GENERIC",
            value: a
        };
        b.length && (c.trace = b);
        return c
    };

    function xe(a, b, c, d) {
        var e = lb[a],
            g = ye(a, b, c, d);
        if (!g) return null;
        var h = ub(e[yb.zd], c, []);
        if (h && h.length) {
            var k = h[0];
            g = xe(k.index, {
                J: g,
                T: 1 === k.Kd ? b.terminate : g,
                terminate: b.terminate
            }, c, d)
        }
        return g
    }

    function ye(a, b, c, d) {
        function e() {
            if (g[yb.Ue]) k();
            else {
                var w = vb(g, c, []),
                    y = Td(c.id, String(g[yb.ia]), Number(g[yb.Ad]), w[yb.Ve]),
                    x = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!x) {
                        x = !0;
                        var B = xa() - z;
                        Wc(c.id, lb[a], "5");
                        Ud(c.id, y, "success", B);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!x) {
                        x = !0;
                        var B = xa() - z;
                        Wc(c.id, lb[a], "6");
                        Ud(c.id, y, "failure", B);
                        k()
                    }
                };
                w.vtp_gtmTagId = g.tag_id;
                w.vtp_gtmEventId = c.id;
                Wc(c.id, g, "1");
                var A = function(B) {
                    var E = xa() - z;
                    we(B);
                    Wc(c.id, g, "7");
                    Ud(c.id, y, "exception", E);
                    x || (x = !0, k())
                };
                var z = xa();
                try {
                    tb(w, c)
                } catch (B) {
                    A(B)
                }
            }
        }
        var g = lb[a],
            h = b.J,
            k = b.T,
            l = b.terminate;
        if (c.Ac(g)) return null;
        var m = ub(g[yb.Bd], c, []);
        if (m && m.length) {
            var n = m[0],
                p = xe(n.index, {
                    J: h,
                    T: k,
                    terminate: l
                }, c, d);
            if (!p) return null;
            h = p;
            k = 2 === n.Kd ? l : p
        }
        if (g[yb.yd] || g[yb.We]) {
            var t = g[yb.yd] ? mb : c.Pg,
                q = h,
                r = k;
            if (!t[a]) {
                e = za(e);
                var v = ze(a, t, e);
                h = v.J;
                k = v.T
            }
            return function() {
                t[a](q, r)
            }
        }
        return e
    }

    function ze(a, b, c) {
        var d = [],
            e = [];
        b[a] = Ae(d, e, c);
        return {
            J: function() {
                b[a] = Be;
                for (var g = 0; g < d.length; g++) d[g]()
            },
            T: function() {
                b[a] = Ce;
                for (var g = 0; g < e.length; g++) e[g]()
            }
        }
    }

    function Ae(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Be(a) {
        a()
    }

    function Ce(a, b) {
        b()
    };
    var Fe = function(a, b) {
        for (var c = [], d = 0; d < lb.length; d++)
            if (a.cb[d]) {
                var e = lb[d];
                var g = b.add();
                try {
                    var h = xe(d, {
                        J: g,
                        T: g,
                        terminate: g
                    }, a, d);
                    h ? c.push({
                        oe: d,
                        de: wb(e),
                        Qf: h
                    }) : (De(d, a), g())
                } catch (l) {
                    g()
                }
            }
        b.nf();
        c.sort(Ee);
        for (var k = 0; k < c.length; k++) c[k].Qf();
        return 0 < c.length
    };

    function Ee(a, b) {
        var c, d = b.de,
            e = a.de;
        c = d > e ? 1 : d < e ? -1 : 0;
        var g;
        if (0 !== c) g = c;
        else {
            var h = a.oe,
                k = b.oe;
            g = h > k ? 1 : h < k ? -1 : 0
        }
        return g
    }

    function De(a, b) {
        if (!Tc) return;
        var c = function(d) {
            var e = b.Ac(lb[d]) ? "3" : "4",
                g = ub(lb[d][yb.zd], b, []);
            g && g.length && c(g[0].index);
            Wc(b.id, lb[d], e);
            var h = ub(lb[d][yb.Bd], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var Ge = !1,
        He = function(a, b, c, d, e) {
            if ("gtm.js" == b) {
                if (Ge) return !1;
                Ge = !0
            }
            Vc(a, b);
            var g = Yd(a, d, e);
            kd(a, "event", 1);
            kd(a, "ecommerce", 1);
            kd(a, "gtm");
            var h = {
                id: a,
                name: b,
                Ac: Hd(c),
                cb: [],
                Pg: [],
                Yd: function(n) {
                    Dc("GTM", 6);
                    we(n)
                }
            };
            h.cb = Cb(h);
            var k = Fe(h, g);
            if (!k) return k;
            for (var l = 0; l < h.cb.length; l++)
                if (h.cb[l]) {
                    var m = lb[l];
                    if (m && !rc[String(m[yb.ia])]) return !0
                }
            return !1
        };
    var Je = function(a, b, c, d, e) {
        var g = this;
        this.eventModel = a;
        this.containerConfig = c || {};
        this.targetConfig = b || {};
        this.containerConfig = c || {};
        this.fb = d || {};
        this.globalConfig = e || {};
        this.getWithConfig = function(h) {
            if (void 0 !== g.eventModel[h]) return g.eventModel[h];
            if (void 0 !== g.targetConfig[h]) return g.targetConfig[h];
            if (void 0 !== g.containerConfig[h]) return g.containerConfig[h];
            if (void 0 !== g.fb[h]) return g.fb[h];
            if (void 0 !== g.globalConfig[h]) return g.globalConfig[h]
        }
    };
    var Ke = {},
        Le = ["G"];
    Ke.pe = "";
    var Me = Ke.pe.split(",");

    function Ne() {
        var a = pc;
        return a.gcq = a.gcq || new Oe
    }
    var Pe = function(a, b) {
            Ne().register(a, b, void 0)
        },
        Qe = function(a, b, c, d) {
            Ne().push("event", [b, a], c, d)
        },
        Re = function(a, b) {
            Ne().push("config", [a], b)
        },
        Se = {},
        Te = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.fb = {};
            this.ee = null;
            this.Ud = !1
        },
        Ue = function(a, b, c, d, e) {
            this.type = a;
            this.Ug = b;
            this.N = c || "";
            this.Cb = d;
            this.defer = e
        },
        Oe = function() {
            this.Gd = {};
            this.Pd = {};
            this.Xa = []
        },
        Ve = function(a, b) {
            var c = lc(b);
            return a.Gd[c.containerId] = a.Gd[c.containerId] || new Te
        },
        We = function(a, b, c, d) {
            if (d.N) {
                var e =
                    Ve(a, d.N),
                    g = e.ee;
                if (g) {
                    var h = u(c),
                        k = u(e.targetConfig[d.N]),
                        l = u(e.containerConfig),
                        m = u(e.fb),
                        n = u(a.Pd),
                        p = new Je(h, k, l, m, n);
                    try {
                        g(b, d.Ug, p)
                    } catch (t) {}
                }
            }
        };
    Oe.prototype.register = function(a, b, c) {
        if (3 !== Ve(this, a).status) {
            Ve(this, a).ee = b;
            Ve(this, a).status = 3;
            c && (Ve(this, a).fb = c);
            var d = lc(a),
                e = Se[d.containerId];
            if (void 0 !== e) {
                var g = cd("gtm.uniqueEventId"),
                    h = d.prefix,
                    k = xa() - e;
                if (Tc && !Kc[g]) {
                    g !== Hc && (Pc(), Hc = g);
                    var l = "" + h + Math.floor(k);
                    Oc = Oc ? Oc + "." + l : "&cl=" + l
                }
                delete Se[d.containerId]
            }
            this.flush()
        }
    };
    Oe.prototype.push = function(a, b, c, d) {
        var e = Math.floor(xa() / 1E3);
        if (c) {
            var g = lc(c),
                h;
            if (h = g) {
                var k;
                if (k = 1 === Ve(this, c).status) a: {
                    var l = g.prefix;k = !0
                }
                h = k
            }
            if (h && (Ve(this, c).status = 2, this.push("require", [], g.containerId), Se[g.containerId] = xa(), !md())) {
                var m = encodeURIComponent(g.containerId);
                Lb(("http:" != C.location.protocol ? "https:" :
                    "http:") + ("//www.googletagmanager.com/gtag/js?id=" + m + "&l=dataLayer&cx=c"))
            }
        }
        this.Xa.push(new Ue(a, e, c, b, d));
        d || this.flush()
    };
    Oe.prototype.flush = function(a) {
        for (var b = this; this.Xa.length;) {
            var c = this.Xa[0];
            if (c.defer) c.defer = !1, this.Xa.push(c);
            else switch (c.type) {
                case "require":
                    if (3 !== Ve(this, c.N).status && !a) return;
                    break;
                case "set":
                    sa(c.Cb[0], function(l, m) {
                        b.Pd[l] = m
                    });
                    break;
                case "config":
                    var d = c.Cb[0],
                        e = !!d[H.tb];
                    delete d[H.tb];
                    var g = Ve(this, c.N),
                        h = lc(c.N),
                        k = h.containerId === h.id;
                    e || (k ? g.containerConfig = {} : g.targetConfig[c.N] = {});
                    g.Ud && e || We(this, H.V, d, c);
                    g.Ud = !0;
                    k ? u(d, g.containerConfig) : u(d, g.targetConfig[c.N]);
                    break;
                case "event":
                    We(this,
                        c.Cb[1], c.Cb[0], c)
            }
            this.Xa.shift()
        }
    };
    var Xe = function(a, b, c) {
            for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
                var h = e[g].split("="),
                    k = h[0].replace(/^\s*|\s*$/g, "");
                if (k && k == a) {
                    var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    l && c && (l = decodeURIComponent(l));
                    d.push(l)
                }
            }
            return d
        },
        af = function(a, b, c, d) {
            var e = Ye(a, d);
            if (1 === e.length) return e[0].id;
            if (0 !== e.length) {
                e = Ze(e, function(g) {
                    return g.Hb
                }, b);
                if (1 === e.length) return e[0].id;
                e = Ze(e, function(g) {
                    return g.eb
                }, c);
                return e[0] ? e[0].id : void 0
            }
        };

    function bf(a, b, c) {
        var d = document.cookie;
        document.cookie = a;
        var e = document.cookie;
        return d != e || void 0 != c && 0 <= Xe(b, e).indexOf(c)
    }
    var ef = function(a, b, c, d, e, g) {
        d = d || "auto";
        var h = {
            path: c || "/"
        };
        e && (h.expires = e);
        "none" !== d && (h.domain = d);
        var k;
        a: {
            var l = b,
                m;
            if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else {
                g && (l = encodeURIComponent(l));
                var n = l;
                n && 1200 < n.length && (n = n.substring(0, 1200));
                l = n;
                m = a + "=" + l
            }
            var p = void 0,
                t = void 0,
                q;
            for (q in h)
                if (h.hasOwnProperty(q)) {
                    var r = h[q];
                    if (null != r) switch (q) {
                        case "secure":
                            r && (m += "; secure");
                            break;
                        case "domain":
                            p = r;
                            break;
                        default:
                            "path" == q && (t = r), "expires" == q && r instanceof Date && (r =
                                r.toUTCString()), m += "; " + q + "=" + r
                    }
                }
            if ("auto" === p) {
                for (var v = cf(), w = 0; w < v.length; ++w) {
                    var y = "none" != v[w] ? v[w] : void 0;
                    if (!df(y, t) && bf(m + (y ? "; domain=" + y : ""), a, l)) {
                        k = !0;
                        break a
                    }
                }
                k = !1
            } else p && "none" != p && (m += "; domain=" + p),
            k = !df(p, t) && bf(m, a, l)
        }
        return k
    };

    function Ze(a, b, c) {
        for (var d = [], e = [], g, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Ye(a, b) {
        for (var c = [], d = Xe(a), e = 0; e < d.length; e++) {
            var g = d[e].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), c.push({
                    id: g.join("."),
                    Hb: 1 * k[0] || 1,
                    eb: 1 * k[1] || 1
                }))
            }
        }
        return c
    }
    var ff = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        gf = /(^|\.)doubleclick\.net$/i,
        df = function(a, b) {
            return gf.test(document.location.hostname) || "/" === b && ff.test(a)
        },
        cf = function() {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = document.location.hostname;
            gf.test(e) || ff.test(e) || a.push("none");
            return a
        };
    var hf = "".split(/,/),
        jf = null,
        kf = {},
        lf = {},
        mf, nf = function(a, b) {
            var c = {
                event: a
            };
            b && (c.eventModel = u(b), b[H.Yb] && (c.eventCallback = b[H.Yb]), b[H.La] && (c.eventTimeout = b[H.La]));
            return c
        };
    var tf = {
            config: function(a) {},
            event: function(a) {
                var b =
                    a[1];
                if (ka(b) && !(3 < a.length)) {
                    var c;
                    if (2 < a.length) {
                        if (!Ia(a[2]) && void 0 != a[2]) return;
                        c = a[2]
                    }
                    var d = nf(b, c);
                    return d
                }
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) return {
                    event: "gtm.js",
                    "gtm.start": a[1].getTime()
                }
            },
            policy: function(a) {
                3 === a.length && (void 0).ih(a[1], a[2])
            },
            set: function(a) {
                var b;
                2 == a.length && Ia(a[1]) ? b = u(a[1]) : 3 == a.length && ka(a[1]) && (b = {}, Ia(a[2]) || ma(a[2]) ? b[a[1]] = u(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    b._clear = !0;
                    return b
                }
            }
        },
        uf = {
            policy: !0
        };
    var wf = function(a) {
            return vf ? D.querySelectorAll(a) : null
        },
        xf = function(a, b) {
            if (!vf) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!D.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        yf = !1;
    if (D.querySelectorAll) try {
        var zf = D.querySelectorAll(":root");
        zf && 1 == zf.length && zf[0] == D.documentElement && (yf = !0)
    } catch (a) {}
    var vf = yf;
    var Gf = function(a) {
        if (Ff(a)) return a;
        this.Xg = a
    };
    Gf.prototype.Xf = function() {
        return this.Xg
    };
    var Ff = function(a) {
        return !a || "object" !== Ga(a) || Ia(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    Gf.prototype.getUntrustedUpdateValue = Gf.prototype.Xf;
    var Hf = !1,
        If = [];

    function Jf() {
        if (!Hf) {
            Hf = !0;
            for (var a = 0; a < If.length; a++) G(If[a])
        }
    }
    var Kf = function(a) {
        Hf ? G(a) : If.push(a)
    };
    var Lf = [],
        Mf = !1,
        Nf = function(a) {
            return C["dataLayer"].push(a)
        },
        Of = function(a) {
            var b = pc["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0;
            return function() {
                ++d === c && a()
            }
        },
        Qf = function(a) {
            var b = a._clear;
            sa(a, function(g, h) {
                "_clear" !== g && (b && jd(g, void 0), jd(g, h))
            });
            uc || (uc = a["gtm.start"]);
            var c = a.event;
            if (!c) return !1;
            var d = a["gtm.uniqueEventId"];
            d || (d = Ac(), a["gtm.uniqueEventId"] = d, jd("gtm.uniqueEventId", d));
            wc = c;
            var e = Pf(a);
            wc = null;
            switch (c) {
                case "gtm.init":
                    Dc("GTM", 19), e && Dc("GTM", 20)
            }
            return e
        };

    function Pf(a) {
        var b = a.event,
            c = a["gtm.uniqueEventId"],
            d, e = pc.zones;
        d = e ? e.checkState(oc.m, c) : Jd;
        return d.active ? He(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }
    var Rf = function() {
            for (var a = !1; !Mf && 0 < Lf.length;) {
                Mf = !0;
                delete Zc.eventModel;
                bd();
                var b = Lf.shift();
                if (null != b) {
                    var c = Ff(b);
                    if (c) {
                        var d = b;
                        b = Ff(d) ? d.getUntrustedUpdateValue() : void 0;
                        for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < e.length; g++) {
                            var h = e[g],
                                k = cd(h, 1);
                            if (ma(k) || Ia(k)) k = u(k);
                            $c[h] = k
                        }
                    }
                    try {
                        if (ja(b)) try {
                            b.call(dd)
                        } catch (v) {} else if (ma(b)) {
                            var l = b;
                            if (ka(l[0])) {
                                var m =
                                    l[0].split("."),
                                    n = m.pop(),
                                    p = l.slice(1),
                                    t = cd(m.join("."), 2);
                                if (void 0 !== t && null !== t) try {
                                    t[n].apply(t, p)
                                } catch (v) {}
                            }
                        } else {
                            var q = b;
                            if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee"))) {
                                a: {
                                    if (b.length && ka(b[0])) {
                                        var r = tf[b[0]];
                                        if (r && (!c || !uf[b[0]])) {
                                            b = r(b);
                                            break a
                                        }
                                    }
                                    b = void 0
                                }
                                if (!b) {
                                    Mf = !1;
                                    continue
                                }
                            }
                            a = Qf(b) || a
                        }
                    } finally {
                        c && bd(!0)
                    }
                }
                Mf = !1
            }
            return !a
        },
        Sf = function() {
            var a = Rf();
            try {
                var b = oc.m,
                    c = C["dataLayer"].hide;
                if (c && void 0 !== c[b] && c.end) {
                    c[b] = !1;
                    var d = !0,
                        e;
                    for (e in c)
                        if (c.hasOwnProperty(e) && !0 === c[e]) {
                            d = !1;
                            break
                        }
                    d && (c.end(), c.end = null)
                }
            } catch (g) {}
            return a
        },
        Tf = function() {
            var a = Jb("dataLayer", []),
                b = Jb("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Qd(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Kf(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers ||
                0) + 1;
            var c = a.push;
            a.push = function() {
                var d;
                if (0 < pc.SANDBOXED_JS_SEMAPHORE) {
                    d = [];
                    for (var e = 0; e < arguments.length; e++) d[e] = new Gf(arguments[e])
                } else d = [].slice.call(arguments, 0);
                var g = c.apply(a, d);
                Lf.push.apply(Lf, d);
                if (300 < this.length)
                    for (Dc("GTM", 4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return Rf() && h
            };
            Lf.push.apply(Lf, a.slice(0));
            G(Sf)
        };
    var Uf;
    var pg = {};
    pg.vb = new String("undefined");
    var qg = function(a) {
        this.resolve = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === pg.vb ? b : a[d]);
            return c.join("")
        }
    };
    qg.prototype.toString = function() {
        return this.resolve("undefined")
    };
    qg.prototype.valueOf = qg.prototype.toString;
    pg.Ye = qg;
    pg.jc = {};
    pg.If = function(a) {
        return new qg(a)
    };
    var rg = {};
    pg.Hg = function(a, b) {
        var c = Ac();
        rg[c] = [a, b];
        return c
    };
    pg.Hd = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = rg[c];
            if (d && "function" === typeof d[b]) d[b]();
            rg[c] = void 0
        }
    };
    pg.jg = function(a) {
        for (var b = !1, c = !1,
                d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    pg.vg = function(a) {
        if (a === pg.vb) return a;
        var b = Ac();
        pg.jc[b] = a;
        return 'google_tag_manager["' + oc.m + '"].macro(' + b + ")"
    };
    pg.ng = function(a, b, c) {
        a instanceof pg.Ye && (a = a.resolve(pg.Hg(b, c)), b = ia);
        return {
            yc: a,
            J: b
        }
    };
    var sg = function(a, b, c) {
            function d(g, h) {
                var k = g[h];
                return k
            }
            var e = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": d(a, "className"),
                "gtm.elementId": a["for"] || Rb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || d(a, "target") || ""
            };
            c && (e["gtm.triggers"] = c.join(","));
            e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase ||
                "";
            return e
        },
        tg = function(a) {
            pc.hasOwnProperty("autoEventsSettings") || (pc.autoEventsSettings = {});
            var b = pc.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        ug = function(a, b, c) {
            tg(a)[b] = c
        },
        vg = function(a, b, c, d) {
            var e = tg(a),
                g = ya(e, b, d);
            e[b] = c(g)
        },
        wg = function(a, b, c) {
            var d = tg(a);
            return ya(d, b, c)
        };
    var xg = function() {
            for (var a = Hb.userAgent + (D.cookie || "") + (D.referrer || ""), b = a.length, c = C.history.length; 0 < c;) a += c-- ^ b++;
            var d = 1,
                e, g, h;
            if (a)
                for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
            return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(xa() / 1E3)].join(".")
        },
        Ag = function(a, b, c, d) {
            var e = yg(b);
            return af(a, e, zg(c), d)
        },
        Bg = function(a, b, c, d) {
            var e = "" + yg(c),
                g = zg(d);
            1 < g && (e += "-" + g);
            return [b, e, a].join(".")
        },
        yg = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        zg = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };
    var Cg = ["1"],
        Dg = {},
        Hg = function(a, b, c, d) {
            var e = Eg(a);
            Dg[e] || Fg(e, b, c) || (Gg(e, xg(), b, c, d), Fg(e, b, c))
        };

    function Gg(a, b, c, d, e) {
        var g = Bg(b, "1", d, c);
        ef(a, g, c, d, 0 == e ? void 0 : new Date(xa() + 1E3 * (void 0 == e ? 7776E3 : e)))
    }

    function Fg(a, b, c) {
        var d = Ag(a, b, c, Cg);
        d && (Dg[a] = d);
        return d
    }

    function Eg(a) {
        return (a || "_gcl") + "_au"
    };
    var Ig = function() {
        for (var a = [], b = D.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({
                Wc: e[1],
                value: e[2]
            })
        }
        var g = {};
        if (!a || !a.length) return g;
        for (var h = 0; h < a.length; h++) {
            var k = a[h].value.split(".");
            "1" == k[0] && 3 == k.length && k[1] && (g[a[h].Wc] || (g[a[h].Wc] = []), g[a[h].Wc].push({
                timestamp: k[1],
                Uf: k[2]
            }))
        }
        return g
    };

    function Jg() {
        for (var a = Kg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Lg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Kg, Mg, Ng = function(a) {
            Kg = Kg || Lg();
            Mg = Mg || Jg();
            for (var b = [], c = 0; c < a.length; c += 3) {
                var d = c + 1 < a.length,
                    e = c + 2 < a.length,
                    g = a.charCodeAt(c),
                    h = d ? a.charCodeAt(c + 1) : 0,
                    k = e ? a.charCodeAt(c + 2) : 0,
                    l = g >> 2,
                    m = (g & 3) << 4 | h >> 4,
                    n = (h & 15) << 2 | k >> 6,
                    p = k & 63;
                e || (p = 64, d || (n = 64));
                b.push(Kg[l], Kg[m], Kg[n], Kg[p])
            }
            return b.join("")
        },
        Og = function(a) {
            function b(l) {
                for (; d < a.length;) {
                    var m = a.charAt(d++),
                        n = Mg[m];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
                }
                return l
            }
            Kg = Kg || Lg();
            Mg = Mg ||
                Jg();
            for (var c = "", d = 0;;) {
                var e = b(-1),
                    g = b(0),
                    h = b(64),
                    k = b(64);
                if (64 === k && -1 === e) return c;
                c += String.fromCharCode(e << 2 | g >> 4);
                64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
            }
        };
    var Pg;

    function Qg(a, b) {
        if (!a || b === D.location.hostname) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] instanceof RegExp) {
                if (a[c].test(b)) return !0
            } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }
    var Ug = function() {
            var a = Rg,
                b = Sg,
                c = Tg(),
                d = function(h) {
                    a(h.target || h.srcElement || {})
                },
                e = function(h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                Pb(D, "mousedown", d);
                Pb(D, "keyup", d);
                Pb(D, "submit", e);
                var g = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    g.call(this)
                };
                c.init = !0
            }
        },
        Tg = function() {
            var a = Jb("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = {
                decorators: []
            }, a.gl = b);
            return b
        };
    var Vg = /(.*?)\*(.*?)\*(.*)/,
        Wg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Xg = /^(?:www\.|m\.|amp\.)+/,
        Yg = /([^?#]+)(\?[^#]*)?(#.*)?/,
        Zg = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
        ah = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Ng(String(d))))
                }
            var e = b.join("*");
            return ["1", $g(e), e].join("*")
        },
        $g = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
                    window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a
                ].join("*"),
                d;
            if (!(d = Pg)) {
                for (var e = Array(256), g = 0; 256 > g; g++) {
                    for (var h = g, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[g] = h
                }
                d = e
            }
            Pg = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ Pg[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        ch = function() {
            return function(a) {
                var b = qe(C.location.href),
                    c = b.search.replace("?", ""),
                    d = me(c, "_gl", !0) || "";
                a.query = bh(d) || {};
                var e = pe(b, "fragment").match(Zg);
                a.fragment = bh(e && e[3] ||
                    "") || {}
            }
        },
        dh = function() {
            var a = ch(),
                b = Tg();
            b.data || (b.data = {
                query: {},
                fragment: {}
            }, a(b.data));
            var c = {},
                d = b.data;
            d && (Ca(c, d.query), Ca(c, d.fragment));
            return c
        },
        bh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var g = Vg.exec(d);
                            if (g) {
                                c = g;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var m = h[2], n = 0; n < b; ++n)
                                if (m === $g(k, n)) {
                                    l = !0;
                                    break a
                                }
                            l = !1
                        }
                        if (l) {
                            for (var p = {}, t = k ? k.split("*") : [], q = 0; q < t.length; q += 2) p[t[q]] = Og(t[q + 1]);
                            return p
                        }
                    }
                }
            } catch (r) {}
        };

    function eh(a, b, c) {
        function d(m) {
            var n = m,
                p = Zg.exec(n),
                t = n;
            if (p) {
                var q = p[2],
                    r = p[4];
                t = p[1];
                r && (t = t + q + r)
            }
            m = t;
            var v = m.charAt(m.length - 1);
            m && "&" !== v && (m += "&");
            return m + l
        }
        c = void 0 === c ? !1 : c;
        var e = Yg.exec(b);
        if (!e) return "";
        var g = e[1],
            h = e[2] || "",
            k = e[3] || "",
            l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + g + h + k
    }

    function fh(a, b, c) {
        for (var d = {}, e = {}, g = Tg().decorators, h = 0; h < g.length; ++h) {
            var k = g[h];
            (!c || k.forms) && Qg(k.domains, b) && (k.fragment ? Ca(e, k.callback()) : Ca(d, k.callback()))
        }
        if (Da(d)) {
            var l = ah(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var n = a.childNodes || [], p = !1, t = 0; t < n.length; t++) {
                            var q = n[t];
                            if ("_gl" === q.name) {
                                q.setAttribute("value", l);
                                p = !0;
                                break
                            }
                        }
                        if (!p) {
                            var r = D.createElement("input");
                            r.setAttribute("type", "hidden");
                            r.setAttribute("name", "_gl");
                            r.setAttribute("value",
                                l);
                            a.appendChild(r)
                        }
                    } else if ("post" === m) {
                        var v = eh(l, a.action);
                        ke.test(v) && (a.action = v)
                    }
                }
            } else gh(l, a, !1)
        }
        if (!c && Da(e)) {
            var w = ah(e);
            gh(w, a, !0)
        }
    }

    function gh(a, b, c) {
        if (b.href) {
            var d = eh(a, b.href, void 0 === c ? !1 : c);
            ke.test(d) && (b.href = d)
        }
    }
    var Rg = function(a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var g = e.protocol;
                    "http:" !== g && "https:" !== g || fh(e, e.hostname, !1)
                }
            } catch (h) {}
        },
        Sg = function(a) {
            try {
                if (a.action) {
                    var b = pe(qe(a.action), "host");
                    fh(a, b, !0)
                }
            } catch (c) {}
        },
        hh = function(a, b, c, d) {
            Ug();
            var e = {
                callback: a,
                domains: b,
                fragment: "fragment" === c,
                forms: !!d
            };
            Tg().decorators.push(e)
        },
        ih = function() {
            var a = D.location.hostname,
                b = Wg.exec(D.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var g = c.split("/"),
                    h = g[1];
                e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(Xg, ""),
                l = e.replace(Xg, ""),
                m;
            if (!(m = k === l)) {
                var n = "." + l;
                m = k.substring(k.length - n.length, k.length) === n
            }
            return m
        },
        jh = function(a, b) {
            return !1 === a ? !1 : a || b || ih()
        };
    var kh = {};
    var lh = /^\w+$/,
        mh = /^[\w-]+$/,
        nh = /^~?[\w-]+$/,
        oh = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha"
        };

    function ph(a) {
        return a && "string" == typeof a && a.match(lh) ? a : "_gcl"
    }
    var rh = function() {
        var a = qe(C.location.href),
            b = pe(a, "query", !1, void 0, "gclid"),
            c = pe(a, "query", !1, void 0, "gclsrc"),
            d = pe(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || me(e, "gclid", void 0);
            c = c || me(e, "gclsrc", void 0)
        }
        return qh(b, c, d)
    };

    function qh(a, b, c) {
        var d = {},
            e = function(g, h) {
                d[h] || (d[h] = []);
                d[h].push(g)
            };
        if (void 0 !== a && a.match(mh)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                (void 0 == kh.gtm_3pds ? 0 : kh.gtm_3pds) && e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return d
    }
    var th = function(a) {
        var b = rh();
        sh(b, a)
    };

    function sh(a, b, c) {
        function d(p, t) {
            var q = uh(p, e);
            q && ef(q, t, h, g, l, !0)
        }
        b = b || {};
        var e = ph(b.prefix),
            g = b.domain || "auto",
            h = b.path || "/",
            k = void 0 == b.Hc ? 7776E3 : b.Hc;
        c = c || xa();
        var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
            m = Math.round(c / 1E3),
            n = function(p) {
                return ["GCL", m, p].join(".")
            };
        a.aw && (!0 === b.Dh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
        a.dc && d("dc", n(a.dc[0]));
        a.gf && d("gf", n(a.gf[0]));
        a.ha && d("ha", n(a.ha[0]))
    }
    var wh = function(a, b, c, d, e) {
            for (var g = dh(), h = ph(b), k = 0; k < a.length; ++k) {
                var l = a[k];
                if (void 0 !== oh[l]) {
                    var m = uh(l, h),
                        n = g[m];
                    if (n) {
                        var p = Math.min(vh(n), xa()),
                            t;
                        b: {
                            for (var q = p, r = Xe(m, D.cookie), v = 0; v < r.length; ++v)
                                if (vh(r[v]) > q) {
                                    t = !0;
                                    break b
                                }
                            t = !1
                        }
                        t || ef(m, n, c, d, 0 == e ? void 0 : new Date(p + 1E3 * (null == e ? 7776E3 : e)), !0)
                    }
                }
            }
            var w = {
                prefix: b,
                path: c,
                domain: d
            };
            sh(qh(g.gclid, g.gclsrc), w)
        },
        uh = function(a, b) {
            var c = oh[a];
            if (void 0 !== c) return b + c
        },
        vh = function(a) {
            var b = a.split(".");
            return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) ||
                0)
        };

    function xh(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
    }
    var yh = function(a, b, c, d, e) {
            if (ma(b)) {
                var g = ph(e);
                hh(function() {
                    for (var h = {}, k = 0; k < a.length; ++k) {
                        var l = uh(a[k], g);
                        if (l) {
                            var m = Xe(l, D.cookie);
                            m.length && (h[l] = m.sort()[m.length - 1])
                        }
                    }
                    return h
                }, b, c, d)
            }
        },
        zh = function(a) {
            return a.filter(function(b) {
                return nh.test(b)
            })
        },
        Ah = function(a) {
            for (var b = ["aw", "dc"], c = ph(a && a.prefix), d = {}, e = 0; e < b.length; e++) oh[b[e]] && (d[b[e]] = oh[b[e]]);
            sa(d, function(g, h) {
                var k = Xe(c + h, D.cookie);
                if (k.length) {
                    var l = k[0],
                        m = vh(l),
                        n = {};
                    n[g] = [xh(l)];
                    sh(n, a, m)
                }
            })
        };
    var Bh = /^\d+\.fls\.doubleclick\.net$/;

    function Ch(a) {
        var b = qe(C.location.href),
            c = pe(b, "host", !1);
        if (c && c.match(Bh)) {
            var d = pe(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function Dh(a, b) {
        if ("aw" == a || "dc" == a) {
            var c = Ch("gcl" + a);
            if (c) return c.split(".")
        }
        var d = ph(b);
        if ("_gcl" == d) {
            var e;
            e = rh()[a] || [];
            if (0 < e.length) return e
        }
        var g = uh(a, d),
            h;
        if (g) {
            var k = [];
            if (D.cookie) {
                var l = Xe(g, D.cookie);
                if (l && 0 != l.length) {
                    for (var m = 0; m < l.length; m++) {
                        var n = xh(l[m]);
                        n && -1 === f(k, n) && k.push(n)
                    }
                    h = zh(k)
                } else h = k
            } else h = k
        } else h = [];
        return h
    }
    var Eh = function() {
            var a = Ch("gac");
            if (a) return decodeURIComponent(a);
            var b = Ig(),
                c = [];
            sa(b, function(d, e) {
                for (var g = [], h = 0; h < e.length; h++) g.push(e[h].Uf);
                g = zh(g);
                g.length && c.push(d + ":" + g.join(","))
            });
            return c.join(";")
        },
        Fh = function(a, b, c, d, e) {
            Hg(b, c, d, e);
            var g = Dg[Eg(b)],
                h = rh().dc || [],
                k = !1;
            if (g && 0 < h.length) {
                var l = pc.joined_au = pc.joined_au || {},
                    m = b || "_gcl";
                if (!l[m])
                    for (var n = 0; n < h.length; n++) {
                        var p = "https://adservice.google.com/ddm/regclk",
                            t = p = p + "?gclid=" + h[n] + "&auiddc=" + g;
                        Hb.sendBeacon && Hb.sendBeacon(t) || Ob(t);
                        k = l[m] = !0
                    }
            }
            null == a && (a = k);
            if (a && g) {
                var q = Eg(b),
                    r = Dg[q];
                r && Gg(q, r, c, d, e)
            }
        };
    var Gh;
    if (3 === oc.zb.length) Gh = "g";
    else {
        var Hh = "G";
        Gh = Hh
    }
    var Jh = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Gh,
            OPT: "o"
        },
        Kh = function(a) {
            var b = oc.m.split("-"),
                c = b[0].toUpperCase(),
                d = Jh[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                g;
            if (3 === oc.zb.length) {
                var h = void 0;
                g = "2" + (h || "w")
            } else g =
                "";
            return g + d + oc.zb + e
        };
    var Ph = ["input", "select", "textarea"],
        Qh = ["button", "hidden", "image", "reset", "submit"],
        Rh = function(a) {
            var b = a.tagName.toLowerCase();
            return !na(Ph, function(c) {
                return c === b
            }) || "input" === b && na(Qh, function(c) {
                return c === a.type.toLowerCase()
            }) ? !1 : !0
        },
        Sh = function(a) {
            return a.form ? a.form.tagName ? a.form : D.getElementById(a.form) : Ub(a, ["form"], 100)
        },
        Th = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.getAttribute(c), e = 0, g = 1; e < a.elements.length; e++) {
                var h = a.elements[e];
                if (Rh(h)) {
                    if (h.getAttribute(c) === d) return g;
                    g++
                }
            }
            return 0
        };
    var Wh = !!C.MutationObserver,
        Xh = void 0,
        Yh = function(a) {
            if (!Xh) {
                var b = function() {
                    var c = D.body;
                    if (c)
                        if (Wh)(new MutationObserver(function() {
                            for (var e = 0; e < Xh.length; e++) G(Xh[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Pb(c, "DOMNodeInserted", function() {
                                d || (d = !0, G(function() {
                                    d = !1;
                                    for (var e = 0; e < Xh.length; e++) G(Xh[e])
                                }))
                            })
                        }
                };
                Xh = [];
                D.body ? b() : G(b)
            }
            Xh.push(a)
        };
    var zi = C.clearTimeout,
        Ai = C.setTimeout,
        K = function(a, b, c) {
            if (md()) {
                b && G(b)
            } else return Lb(a, b, c)
        },
        Bi = function() {
            return C.location.href
        },
        Ci = function(a) {
            return pe(qe(a), "fragment")
        },
        Di = function(a) {
            return oe(qe(a))
        },
        Ei = null;
    var Fi = function(a, b) {
            return cd(a, b || 2)
        },
        Gi = function(a, b, c) {
            b && (a.eventCallback = b, c && (a.eventTimeout = c));
            return Nf(a)
        },
        Hi = function(a, b) {
            C[a] = b
        },
        W = function(a, b, c) {
            b && (void 0 === C[a] || c && !C[a]) && (C[a] = b);
            return C[a]
        },
        Ii = function(a, b, c) {
            return Xe(a, b, void 0 === c ? !0 : !!c)
        },
        Ji = function(a, b, c, d) {
            var e = {
                prefix: a,
                path: b,
                domain: c,
                Hc: d
            };
            th(e);
            Ah(e)
        },
        Ki = function(a, b, c, d, e) {
            wh(a, b, c, d, e);
        },
        Li = function(a, b, c, d, e) {
            yh(a, b, c, d, e);
        },
        Mi = function(a, b) {
            if (md()) {
                b && G(b)
            } else Nb(a, b)
        },
        Ni = function(a) {
            return !!wg(a, "init", !1)
        },
        Oi = function(a) {
            ug(a, "init", !0)
        },
        Pi = function(a, b, c) {
            var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : tc;
            d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            b && sa(b, function(e, g) {
                g && (d += "&" + e + "=" + encodeURIComponent(g))
            });
            K(J("https://", "http://", d))
        },
        Qi = function(a, b) {
            var c = a[b];
            return c
        };
    var Si = pg.ng;
    var Ti = new qa,
        Ui = function(a, b) {
            function c(h) {
                var k = qe(h),
                    l = pe(k, "protocol"),
                    m = pe(k, "host", !0),
                    n = pe(k, "port"),
                    p = pe(k, "path").toLowerCase().replace(/\/$/, "");
                if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web", n = "default";
                return [l, m, n, p]
            }
            for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)
                if (d[g] !== e[g]) return !1;
            return !0
        },
        Vi = function(a) {
            var b = a.arg0,
                c = a.arg1;
            if (a.any_of && ma(c)) {
                for (var d = 0; d < c.length; d++)
                    if (Vi({
                            "function": a["function"],
                            arg0: b,
                            arg1: c[d]
                        })) return !0;
                return !1
            }
            switch (a["function"]) {
                case "_cn":
                    return 0 <=
                        String(b).indexOf(String(c));
                case "_css":
                    var e;
                    a: {
                        if (b) {
                            var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                            try {
                                for (var h = 0; h < g.length; h++)
                                    if (b[g[h]]) {
                                        e = b[g[h]](c);
                                        break a
                                    }
                            } catch (v) {}
                        }
                        e = !1
                    }
                    return e;
                case "_ew":
                    var k, l;
                    k = String(b);
                    l = String(c);
                    var m = k.length - l.length;
                    return 0 <= m && k.indexOf(l, m) == m;
                case "_eq":
                    return String(b) == String(c);
                case "_ge":
                    return Number(b) >= Number(c);
                case "_gt":
                    return Number(b) > Number(c);
                case "_lc":
                    var n;
                    n = String(b).split(",");
                    return 0 <= f(n, String(c));
                case "_le":
                    return Number(b) <= Number(c);
                case "_lt":
                    return Number(b) < Number(c);
                case "_re":
                    var p;
                    var t = a.ignore_case ? "i" : void 0;
                    try {
                        var q = String(c) + t,
                            r = Ti.get(q);
                        r || (r = new RegExp(c, t), Ti.set(q, r));
                        p = r.test(b)
                    } catch (v) {
                        p = !1
                    }
                    return p;
                case "_sw":
                    return 0 == String(b).indexOf(String(c));
                case "_um":
                    return Ui(b, c)
            }
            return !1
        };
    var Xi = {},
        Yi = function() {
            if (C._gtmexpgrp && C._gtmexpgrp.hasOwnProperty(1)) return C._gtmexpgrp[1];
            void 0 === Xi[1] && (Xi[1] = Math.floor(2 * Math.random()));
            return Xi[1]
        };
    var Zi = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var $i = {},
        aj = encodeURI,
        X = encodeURIComponent,
        bj = Ob;
    var cj = function(a, b) {
        if (!a) return !1;
        var c = pe(qe(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var g = c.length - e.length;
                0 < g && "." != e.charAt(0) && (g--, e = "." + e);
                if (0 <= g && c.indexOf(e, g) == g) return !0
            }
        }
        return !1
    };
    var dj = function(a, b, c) {
        for (var d = {}, e = !1, g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0);
        return e ? d : null
    };
    $i.kg = function() {
        var a = !1;
        return a
    };
    var Ej = function() {
        var a = C.gaGlobal = C.gaGlobal || {};
        a.hid = a.hid || pa();
        return a.hid
    };
    var nk = window,
        ok = document,
        pk = function(a) {
            var b = nk._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === nk["ga-disable-" + a]) return !0;
            try {
                var c = nk.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (g) {}
            for (var d = Xe("AMP_TOKEN", ok.cookie, !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return ok.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var uk = function(a, b, c) {
            Qe(b, c, a)
        },
        vk = function(a, b, c) {
            Qe(b, c, a, !0)
        },
        xk = function(a, b) {},
        wk = function(a, b) {},
        yk = function(a) {
            return "_" === a.charAt(0)
        },
        zk = function(a) {
            sa(a, function(c) {
                yk(c) && delete a[c]
            });
            var b = a[H.ub] || {};
            sa(b, function(c) {
                yk(c) && delete b[c]
            })
        };
    var Z = {
        a: {}
    };
    Z.a.ctv = ["google"],
        function() {
            (function(a) {
                Z.__ctv = a;
                Z.__ctv.b = "ctv";
                Z.__ctv.g = !0;
                Z.__ctv.priorityOverride = 0
            })(function() {
                return "206"
            })
        }();

    Z.a.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.b = "jsm";
                Z.__jsm.g = !0;
                Z.__jsm.priorityOverride = 0
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = W("google_tag_manager");
                        return c && c.e && c.e(b)
                    } catch (d) {}
                }
            })
        }();
    Z.a.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.b = "c";
                Z.__c.g = !0;
                Z.__c.priorityOverride = 0
            })(function(a) {
                return a.vtp_value
            })
        }();
    Z.a.d = ["google"],
        function() {
            (function(a) {
                Z.__d = a;
                Z.__d.b = "d";
                Z.__d.g = !0;
                Z.__d.priorityOverride = 0
            })(function(a) {
                var b = null,
                    c = null,
                    d = a.vtp_attributeName;
                if ("CSS" == a.vtp_selectorType) {
                    var e = wf(a.vtp_elementSelector);
                    e && 0 < e.length && (b = e[0])
                } else b = D.getElementById(a.vtp_elementId);
                b && (c = d ? Rb(b, d) : Sb(b));
                return wa(String(b && c))
            })
        }();
    Z.a.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.b = "e";
                Z.__e.g = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                return String(ld(a.vtp_gtmEventId, "event"))
            })
        }();
    Z.a.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.b = "f";
                Z.__f.g = !0;
                Z.__f.priorityOverride = 0
            })(function(a) {
                var b = Fi("gtm.referrer", 1) || D.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? pe(qe(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Di(String(b)) : String(b)
            })
        }();
    Z.a.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = sg(c, "gtm.click");
                    Gi(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.b = "cl";
                Z.__cl.g = !0;
                Z.__cl.priorityOverride = 0
            })(function(b) {
                if (!Ni("cl")) {
                    var c = W("document");
                    Pb(c, "click", a, !0);
                    Oi("cl")
                }
                G(b.vtp_gtmOnSuccess)
            })
        }();
    Z.a.j = ["google"],
        function() {
            (function(a) {
                Z.__j = a;
                Z.__j.b = "j";
                Z.__j.g = !0;
                Z.__j.priorityOverride = 0
            })(function(a) {
                for (var b = String(a.vtp_name).split("."), c = W(b.shift()), d = 0; d < b.length; d++) c = c && c[b[d]];
                return c
            })
        }();

    Z.a.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.b = "u";
                Z.__u.g = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Fi("gtm.url", 1)) || Bi();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Di(String(c));
                var e = qe(String(c)),
                    g;
                if ("QUERY" === d) a: {
                    var h = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] || "",
                        l = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        m;m = h ? ma(k) ? k : String(k).replace(/\s+/g,
                        "").split(",") : [String(k)];
                    for (var n = 0; n < m.length; n++) {
                        var p = pe(e, "QUERY", void 0, void 0, m[n]);
                        if (void 0 != p && (!l || "" !== p)) {
                            g = p;
                            break a
                        }
                    }
                    g = void 0
                }
                else g = pe(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return g
            })
        }();
    Z.a.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.b = "v";
                Z.__v.g = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Fi(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
                return void 0 !== c ? c : a.vtp_defaultValue
            })
        }();
    Z.a.ua = ["google"],
        function() {
            var a, b = {},
                c = function(d) {
                    var e = {},
                        g = {},
                        h = {},
                        k = {},
                        l = {},
                        m = void 0;
                    if (d.vtp_gaSettings) {
                        var n = d.vtp_gaSettings;
                        u(dj(n.vtp_fieldsToSet, "fieldName", "value"), g);
                        u(dj(n.vtp_contentGroup, "index", "group"), h);
                        u(dj(n.vtp_dimension, "index", "dimension"), k);
                        u(dj(n.vtp_metric, "index", "metric"), l);
                        d.vtp_gaSettings = null;
                        n.vtp_fieldsToSet = void 0;
                        n.vtp_contentGroup = void 0;
                        n.vtp_dimension = void 0;
                        n.vtp_metric = void 0;
                        var p = u(n);
                        d = u(d, p)
                    }
                    u(dj(d.vtp_fieldsToSet, "fieldName", "value"), g);
                    u(dj(d.vtp_contentGroup,
                        "index", "group"), h);
                    u(dj(d.vtp_dimension, "index", "dimension"), k);
                    u(dj(d.vtp_metric, "index", "metric"), l);
                    var t = fe(d.vtp_functionName);
                    if (ja(t)) {
                        var q = "",
                            r = "";
                        d.vtp_setTrackerName && "string" == typeof d.vtp_trackerName ? "" !== d.vtp_trackerName && (r = d.vtp_trackerName, q = r + ".") : (r = "gtm" + Ac(), q = r + ".");
                        var v = {
                                name: !0,
                                clientId: !0,
                                sampleRate: !0,
                                siteSpeedSampleRate: !0,
                                alwaysSendReferrer: !0,
                                allowAnchor: !0,
                                allowLinker: !0,
                                cookieName: !0,
                                cookieDomain: !0,
                                cookieExpires: !0,
                                cookiePath: !0,
                                cookieUpdate: !0,
                                legacyCookieDomain: !0,
                                legacyHistoryImport: !0,
                                storage: !0,
                                useAmpClientId: !0,
                                storeGac: !0
                            },
                            w = {
                                allowAnchor: !0,
                                allowLinker: !0,
                                alwaysSendReferrer: !0,
                                anonymizeIp: !0,
                                cookieUpdate: !0,
                                exFatal: !0,
                                forceSSL: !0,
                                javaEnabled: !0,
                                legacyHistoryImport: !0,
                                nonInteraction: !0,
                                useAmpClientId: !0,
                                useBeacon: !0,
                                storeGac: !0,
                                allowAdFeatures: !0
                            },
                            y = function(S) {
                                var O = [].slice.call(arguments, 0);
                                O[0] = q + O[0];
                                t.apply(window, O)
                            },
                            x = function(S, O) {
                                return void 0 === O ? O : S(O)
                            },
                            A = function(S, O) {
                                if (O)
                                    for (var oa in O) O.hasOwnProperty(oa) && y("set", S + oa, O[oa])
                            },
                            z = function() {},
                            B = function(S, O, oa) {
                                var Sa = 0;
                                if (S)
                                    for (var Aa in S)
                                        if (S.hasOwnProperty(Aa) && (oa && v[Aa] || !oa && void 0 === v[Aa])) {
                                            var Ta = w[Aa] ? ua(S[Aa]) : S[Aa];
                                            "anonymizeIp" != Aa || Ta || (Ta = void 0);
                                            O[Aa] = Ta;
                                            Sa++
                                        }
                                return Sa
                            },
                            E = {
                                name: r
                            };
                        B(g, E, !0);
                        t("create", d.vtp_trackingId || e.trackingId, E);
                        y("set", "&gtm", Kh(!0));
                        d.vtp_enableRecaptcha && y("require", "recaptcha", "recaptcha.js");
                        (function(S, O) {
                            void 0 !== d[O] && y("set", S, d[O])
                        })("nonInteraction", "vtp_nonInteraction");
                        A("contentGroup", h);
                        A("dimension", k);
                        A("metric", l);
                        var F = {};
                        B(g, F, !1) && y("set", F);
                        var M;
                        d.vtp_enableLinkId && y("require", "linkid", "linkid.js");
                        y("set", "hitCallback", function() {
                            var S = g && g.hitCallback;
                            ja(S) && S();
                            d.vtp_gtmOnSuccess()
                        });
                        if ("TRACK_EVENT" == d.vtp_trackType) {
                            d.vtp_enableEcommerce && (y("require", "ec", "ec.js"), z());
                            var N = {
                                hitType: "event",
                                eventCategory: String(d.vtp_eventCategory || e.category),
                                eventAction: String(d.vtp_eventAction || e.action),
                                eventLabel: x(String, d.vtp_eventLabel || e.label),
                                eventValue: x(ta, d.vtp_eventValue ||
                                    e.value)
                            };
                            B(M, N, !1);
                            y("send", N);
                        } else if ("TRACK_SOCIAL" == d.vtp_trackType) {} else if ("TRACK_TRANSACTION" == d.vtp_trackType) {} else if ("TRACK_TIMING" ==
                            d.vtp_trackType) {} else if ("DECORATE_LINK" == d.vtp_trackType) {} else if ("DECORATE_FORM" == d.vtp_trackType) {} else if ("TRACK_DATA" == d.vtp_trackType) {} else {
                            d.vtp_enableEcommerce && (y("require", "ec", "ec.js"), z());
                            if (d.vtp_doubleClick || "DISPLAY_FEATURES" == d.vtp_advertisingFeaturesType) {
                                var Y =
                                    "_dc_gtm_" + String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                                y("require", "displayfeatures", void 0, {
                                    cookieName: Y
                                })
                            }
                            if ("DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == d.vtp_advertisingFeaturesType) {
                                var da = "_dc_gtm_" + String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                                y("require", "adfeatures", {
                                    cookieName: da
                                })
                            }
                            M ? y("send", "pageview", M) : y("send", "pageview");
                        }
                        if (!a) {
                            var ea = d.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                            d.vtp_useInternalVersion && !d.vtp_useDebugVersion && (ea = "internal/" + ea);
                            a = !0;
                            var Ba = J("https:", "http:", "//www.google-analytics.com/" + ea, g && g.forceSSL);
                            K(Ba, function() {
                                var S = de();
                                S && S.loaded || d.vtp_gtmOnFailure();
                            }, d.vtp_gtmOnFailure)
                        }
                    } else G(d.vtp_gtmOnFailure)
                };
            Z.__ua = c;
            Z.__ua.b = "ua";
            Z.__ua.g = !0;
            Z.__ua.priorityOverride = 0
        }();



    Z.a.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.b = "cid";
                Z.__cid.g = !0;
                Z.__cid.priorityOverride = 0
            })(function() {
                return oc.m
            })
        }();


    Z.a.aev = ["google"],
        function() {
            function a(q, r) {
                var v = ld(q, "gtm");
                if (v) return v[r]
            }

            function b(q, r, v, w) {
                w || (w = "element");
                var y = q + "." + r,
                    x;
                if (n.hasOwnProperty(y)) x = n[y];
                else {
                    var A = a(q, w);
                    if (A && (x = v(A), n[y] = x, p.push(y), 35 < p.length)) {
                        var z = p.shift();
                        delete n[z]
                    }
                }
                return x
            }

            function c(q, r, v) {
                var w = a(q, t[r]);
                return void 0 !== w ? w : v
            }

            function d(q, r) {
                if (!q) return !1;
                var v = e(Bi());
                ma(r) || (r = String(r || "").replace(/\s+/g, "").split(","));
                for (var w = [v], y = 0; y < r.length; y++)
                    if (r[y] instanceof RegExp) {
                        if (r[y].test(q)) return !1
                    } else {
                        var x =
                            r[y];
                        if (0 != x.length) {
                            if (0 <= e(q).indexOf(x)) return !1;
                            w.push(e(x))
                        }
                    }
                return !cj(q, w)
            }

            function e(q) {
                m.test(q) || (q = "http://" + q);
                return pe(qe(q), "HOST", !0)
            }

            function g(q, r, v) {
                switch (q) {
                    case "SUBMIT_TEXT":
                        return b(r, "FORM." + q, h, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = b(r, "FORM." + q, k);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return l(r, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return l(r, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return l(r, "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var y = a(r, "interactedFormFieldPosition");
                        return void 0 === y ? v : y;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var x = a(r, "interactSequenceNumber");
                        return void 0 === x ? v : x;
                    default:
                        return v
                }
            }

            function h(q) {
                switch (q.tagName.toLowerCase()) {
                    case "input":
                        return Rb(q, "value");
                    case "button":
                        return Sb(q);
                    default:
                        return null
                }
            }

            function k(q) {
                if ("form" === q.tagName.toLowerCase() && q.elements) {
                    for (var r = 0, v = 0; v < q.elements.length; v++) Rh(q.elements[v]) && r++;
                    return r
                }
            }

            function l(q, r, v) {
                var w = a(q, "interactedFormField");
                return w && Rb(w, r) || v
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                t = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(q) {
                Z.__aev = q;
                Z.__aev.b = "aev";
                Z.__aev.g = !0;
                Z.__aev.priorityOverride = 0
            })(function(q) {
                var r = q.vtp_gtmEventId,
                    v = q.vtp_defaultValue,
                    w = q.vtp_varType;
                switch (w) {
                    case "TAG_NAME":
                        var y = a(r, "element");
                        return y && y.tagName ||
                            v;
                    case "TEXT":
                        return b(r, w, Sb) || v;
                    case "URL":
                        var x;
                        a: {
                            var A = String(a(r, "elementUrl") || v || ""),
                                z = qe(A),
                                B = String(q.vtp_component || "URL");
                            switch (B) {
                                case "URL":
                                    x = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    x = d(A, q.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    x = pe(z, B, q.vtp_stripWww, q.vtp_defaultPages, q.vtp_queryKey)
                            }
                        }
                        return x;
                    case "ATTRIBUTE":
                        var E;
                        if (void 0 === q.vtp_attribute) E = c(r, w, v);
                        else {
                            var F = q.vtp_attribute,
                                M = a(r, "element");
                            E = M && Rb(M, F) || v || ""
                        }
                        return E;
                    case "MD":
                        var N = q.vtp_mdValue,
                            U = b(r, "MD", li);
                        return N && U ? oi(U, N) ||
                            v : U || v;
                    case "FORM":
                        return g(String(q.vtp_component || "SUBMIT_TEXT"), r, v);
                    default:
                        return c(r, w, v)
                }
            })
        }();
    Z.a.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.b = "gas";
                Z.__gas.g = !0;
                Z.__gas.priorityOverride = 0
            })(function(a) {
                var b = u(a),
                    c = b;
                c[yb.ia] = null;
                c[yb.Se] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();
    Z.a.smm = ["google"],
        function() {
            (function(a) {
                Z.__smm = a;
                Z.__smm.b = "smm";
                Z.__smm.g = !0;
                Z.__smm.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_input,
                    c = dj(a.vtp_map, "key", "value") || {};
                return c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue
            })
        }();






    Z.a.dbg = ["google"],
        function() {
            (function(a) {
                Z.__dbg = a;
                Z.__dbg.b = "dbg";
                Z.__dbg.g = !0;
                Z.__dbg.priorityOverride = 0
            })(function() {
                return !1
            })
        }();




    Z.a.lcl = [],
        function() {
            function a() {
                var c = W("document"),
                    d = 0,
                    e = function(g) {
                        var h = g.target;
                        if (h && 3 !== g.which && (!g.timeStamp || g.timeStamp !== d)) {
                            d = g.timeStamp;
                            h = Ub(h, ["a", "area"], 100);
                            if (!h) return g.returnValue;
                            var k = g.defaultPrevented || !1 === g.returnValue,
                                l = wg("lcl", k ? "nv.mwt" : "mwt", 0),
                                m;
                            m = k ? wg("lcl", "nv.ids", []) : wg("lcl", "ids", []);
                            if (m.length) {
                                var n = sg(h, "gtm.linkClick", m);
                                if (b(g, h, c) && !k && l && h.href) {
                                    var p = W((Qi(h, "target") || "_self").substring(1)),
                                        t = !0;
                                    if (Gi(n, Of(function() {
                                            t && p && (p.location.href = Qi(h,
                                                "href"))
                                        }), l)) t = !1;
                                    else return g.preventDefault && g.preventDefault(), g.returnValue = !1
                                } else Gi(n, function() {}, l || 2E3);
                                return !0
                            }
                        }
                    };
                Pb(c, "click", e, !1);
                Pb(c, "auxclick", e, !1)
            }

            function b(c, d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var g = Qi(d, "href"),
                    h = g.indexOf("#"),
                    k = Qi(d, "target");
                if (k && "_self" !== k && "_parent" !== k && "_top" !== k || 0 === h) return !1;
                if (0 < h) {
                    var l = Di(g),
                        m = Di(e.location);
                    return l !== m
                }
                return !0
            }(function(c) {
                Z.__lcl = c;
                Z.__lcl.b = "lcl";
                Z.__lcl.g = !0;
                Z.__lcl.priorityOverride =
                    0
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    g = Number(c.vtp_waitForTagsTimeout);
                if (!g || 0 >= g) g = 2E3;
                var h = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var k = function(m) {
                        return Math.max(g, m)
                    };
                    vg("lcl", "mwt", k, 0);
                    e || vg("lcl", "nv.mwt", k, 0)
                }
                var l = function(m) {
                    m.push(h);
                    return m
                };
                vg("lcl", "ids", l, []);
                e || vg("lcl", "nv.ids", l, []);
                Ni("lcl") || (a(), Oi("lcl"));
                G(c.vtp_gtmOnSuccess)
            })
        }();

    var Ik = {};
    Ik.macro = function(a) {
        if (pg.jc.hasOwnProperty(a)) return pg.jc[a]
    }, Ik.onHtmlSuccess = pg.Hd(!0), Ik.onHtmlFailure = pg.Hd(!1);
    Ik.dataLayer = dd;
    Ik.callback = function(a) {
        yc.hasOwnProperty(a) && ja(yc[a]) && yc[a]();
        delete yc[a]
    };
    Ik.tf = function() {
        pc[oc.m] = Ik;
        Ca(zc, Z.a);
        qb = qb || pg;
        rb = Id
    };
    Ik.fg = function() {
        kh.gtm_3pds = !0;
        pc = C.google_tag_manager = C.google_tag_manager || {};
        if (pc[oc.m]) {
            var a = pc.zones;
            a && a.unregisterChild(oc.m)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) ib.push(c[d]);
            for (var e = b.tags || [], g = 0; g < e.length; g++) lb.push(e[g]);
            for (var h = b.predicates || [],
                    k = 0; k < h.length; k++) kb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, t = 0; t < n.length; t++) p[n[t][0]] = Array.prototype.slice.call(n[t], 1);
                jb.push(p)
            }
            nb = Z;
            pb = Vi;
            Ik.tf();
            Tf();
            Ld = !1;
            Md = 0;
            if ("interactive" == D.readyState && !D.createEventObject || "complete" == D.readyState) Od();
            else {
                Pb(D, "DOMContentLoaded", Od);
                Pb(D, "readystatechange", Od);
                if (D.createEventObject && D.documentElement.doScroll) {
                    var q = !0;
                    try {
                        q = !C.frameElement
                    } catch (y) {}
                    q && Pd()
                }
                Pb(C, "load", Od)
            }
            Hf = !1;
            "complete" === D.readyState ? Jf() :
                Pb(C, "load", Jf);
            a: {
                if (!Tc) break a;C.setInterval(Uc, 864E5);
            }
            vc = (new Date).getTime();
        }
    };
    (0, Ik.fg)();

})()