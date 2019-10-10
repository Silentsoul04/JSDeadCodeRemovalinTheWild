(function() {
    // Dynamic values from page request

    var script = document.getElementById("celtra-script-1");
    if (!script || script.tagName.toLowerCase() !== 'script')
        throw 'Element with id equal to scriptId does not exist or is not a script.';

    var runtimeParams = {
        "tagVersion": "6",
        "deviceInfo": {
            "deviceType": "Phone",
            "primaryHardwareType": "Mobile Phone",
            "mobileDevice": true,
            "osName": "Android",
            "osVersion": "6.0",
            "platform": "Android",
            "platformVersion": "6.0",
            "browserName": "Chrome Mobile",
            "browserVersion": "77.0.3865.90",
            "browserRenderingEngine": "WebKit",
            "vendor": "Google",
            "model": "D820"
        },
        "weather": {
            "windy": "0",
            "currentCondition": "sunny",
            "apparentTemperature": 14.0,
            "temperature": 13.9,
            "windSpeed": 6,
            "cloudCoverage": 19,
            "conditions": [{
                "name": "sunny",
                "weight": 1
            }]
        },
        "ipCountryCode": "NL",
        "ipRegionCode": null,
        "ipPrincipalSubdivisionCode": "NH",
        "ipCityGeonameId": "2759794",
        "ipCity": "Amsterdam",
        "ipPostalCode": "1083",
        "ipLat": 52.3302,
        "ipLng": 4.8844,
        "accountId": "de81895a",
        "folderId": "c5ffa7e1",
        "placementId": "1290ad8c",
        "supplierId": null,
        "sessionId": "s1570705716x0850d117d45369x02362134",
        "purpose": "live",
        "secure": 1,
        "clientTimestamp": "1570705714.217",
        "clientTimeZoneOffsetInMinutes": 420,
        "clientIp": "80.113.225.15",
        "gpsLat": null,
        "gpsLng": null,
        "language": "en",
        "acceptLanguage": "en-US,en;q=0.9",
        "platformAdvId": null,
        "platformAdvIdTrackingLimited": null,
        "userIdentifiers": {},
        "variantChoices": {
            "EventMetadata": "newMeta"
        },
        "neustarSegment": null,
        "authBasis": "1570705716548,46f4a037,1290ad8c",
        "authToken": "e78b7007d4d6652101f358b823402943",
        "customAudiences": {},
        "derivedAudiences": {},
        "destinationDefinitions": [{
            "campaignId": null,
            "placementId": null,
            "creativeId": "46f4a037",
            "eventName": "urlOpened",
            "reportLabel": "http:// www.olgreen.nl?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-branding&utm_campaign=132536_olgreen_functietitel/employerbranding",
            "destinationUrl": "https://www.olgreen.nl/opdrachtgevers/?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-",
            "destination": {
                "url": "https://www.olgreen.nl/opdrachtgevers/?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-",
                "clazz": "Fixed"
            },
            "impressionUrl": null
        }],
        "dynamicContent": [],
        "tuneIosQueryStringFragment": null,
        "tuneAndroidQueryStringFragment": null,
        "tuneCustomAttributes": {},
        "admarvel_format": null,
        "overrides": {
            "placementId": "1290ad8c",
            "customAudiences": {},
            "derivedAudiences": {},
            "deviceInfo": {
                "deviceType": "Phone",
                "primaryHardwareType": "Mobile Phone",
                "mobileDevice": true,
                "osName": "Android",
                "osVersion": "6.0",
                "platform": "Android",
                "platformVersion": "6.0",
                "browserName": "Chrome Mobile",
                "browserVersion": "77.0.3865.90",
                "browserRenderingEngine": "WebKit",
                "vendor": "Google",
                "model": "D820"
            },
            "language": "en",
            "ipCountryCode": "NL",
            "ipRegionCode": null,
            "ipPrincipalSubdivisionCode": "NH",
            "ipCityGeonameId": "2759794",
            "ipCity": "Amsterdam",
            "weather": {
                "windy": "0",
                "currentCondition": "sunny",
                "apparentTemperature": 14.0,
                "temperature": 13.9,
                "windSpeed": 6,
                "cloudCoverage": 19,
                "conditions": [{
                    "name": "sunny",
                    "weight": 1
                }]
            },
            "clientTimestamp": "1570705714.217",
            "clientTimeZoneOffsetInMinutes": 420
        },
        "utSignals": null,
        "_mraidCheck": null,
        "fallbackSdk": null,
        "externalAdServer": "Mediasmart",
        "externalCreativeId": "cr-g2p9bisi89c2eb5bxrotgkwf4nhhomvq",
        "externalCreativeName": null,
        "externalPlacementId": null,
        "externalPlacementName": "unknown",
        "externalSiteId": "222448",
        "externalSiteName": "https://www.buzzfeed.com",
        "externalSupplierId": "186022",
        "externalSupplierName": "186022",
        "externalLineItemId": null,
        "externalSessionId": null,
        "externalBundleId": "unknown",
        "externalCreativeWidth": null,
        "externalCreativeHeight": null,
        "externalCampaignId": null,
        "externalCampaignName": "AdverOnline-Olgreen%20-%20Event-Google%20Cloud%20Summit%202019%20-%2010Oct",
        "externalAdvertiserId": null,
        "externalDestinationUrl": null,
        "clickUrl": "https://ecads.mspremium.io/m/aclk?ms_op_code=11_08w00mgvd8&r=",
        "useClickAsDestination": null,
        "scriptId": "celtra-script-1",
        "firehoseUrl": null,
        "track.creativeLoads": "https://ecads.mspremium.io/m/adloaded?ms_op_code=11_08w00mgvd8",
        "clickEvent": "advertiser",
        "clickUrlNeedsDest": null,
        "ncu": null,
        "firstPage": 1,
        "dataURIsEnabled": 0,
        "universalAndAppLinksInMRAID": 0,
        "monotypeProjectId": "c46ed090-3671-4163-a85b-b06b4038ae38",
        "iosAdvId": null,
        "iosAdvIdTrackingLimited": null,
        "androidAdvId": null,
        "androidAdvIdTrackingLimited": null,
        "moatRandom": {
            "first": 2059209676,
            "second": 1611044621
        },
        "skipOffset": null,
        "_enablePoliteLoading": null,
        "fontSubsetterIsDisabled": null,
        "_politeImageUrl": null,
        "_politeClickThrough": null,
        "sticky": null,
        "_mopubExt": null,
        "enabledServices": ["googleMaps"],
        "creativeVariantLockSize": null,
        "vastVersion": null,
        "country": "NL",
        "productCategoryCode": null,
        "campaignName": "Olgreen",
        "agencyId": null,
        "customPartnerAttributeBrandId": null,
        "suppressCloseButton": null,
        "mediasmart_domain": "www.buzzfeed.com",
        "mediasmart_tagid": "false",
        "mediasmart_zipcode": "unknown",
        "mediasmart_rtbcategories": "IAB14",
        "mediasmart_exchange": "index",
        "mediasmart_parentcampaignname": "AdverOnline-Olgreen%20-%20Event-Google%20Cloud%20Summit%202019%20-%2010Oct",
        "mediasmart_appname": "unknown",
        "mediasmart_environment": "web",
        "mediasmart_page": "https://www.buzzfeed.com",
        "mediasmart_areatext": "Europaplein%2024_Amsterdam",
        "mediasmart_distance": "unknown",
        "mediasmart_creativesize": "300x250",
        "mediasmart_mscategories": "society",
        "hostPageLoadId": "20158260303420938"
    };
    runtimeParams.overridableClickThroughDestinationUrl = false;
    runtimeParams.redirectJsClientTimestamp = new Date() / 1000;


    var macros = function(x) {
        if (x instanceof Array) {
            return x.map(macros);
        } else {
            var macroTags = [
                ['%%CACHEBUSTER%%', (Math.random() + '').slice(2)],
                ['%creative%', "cr-g2p9bisi89c2eb5bxrotgkwf4nhhomvq"],
                ['%n', (Math.random() + '').slice(2)],
                ['%s', "https"],
                ['{celtraAccountId}', "de81895a"],
                ['{celtraAgencyId}', ""],
                ['{celtraAndroidAdvIdTrackingLimitedBoolStr}', ""],
                ['{celtraAndroidAdvIdTrackingLimited}', ""],
                ['{celtraAndroidAdvId}', ""],
                ['{celtraCampaignId:int}', "3321866209"],
                ['{celtraCampaignId}', "c5ffa7e1"],
                ['{celtraCampaignName}', "Olgreen"],
                ['{celtraCountryCode}', "NL"],
                ['{celtraCreativeId:int}', "1190436919"],
                ['{celtraCreativeId}', "46f4a037"],
                ['{celtraCreativeVariant:urlenc}', ""],
                ['{celtraCreativeVariant}', ""],
                ['{celtraCustomPartnerAttribute\\[code\\]}', ""],
                ['{celtraExternalAdServer}', "Mediasmart"],
                ['{celtraExternalAdvertiserId}', ""],
                ['{celtraExternalBundleId}', "unknown"],
                ['{celtraExternalCampaignId}', ""],
                ['{celtraExternalCampaignName}', "AdverOnline-Olgreen%20-%20Event-Google%20Cloud%20Summit%202019%20-%2010Oct"],
                ['{celtraExternalCreativeId}', "cr-g2p9bisi89c2eb5bxrotgkwf4nhhomvq"],
                ['{celtraExternalCreativeName}', ""],
                ['{celtraExternalDestinationUrl}', ""],
                ['{celtraExternalLineItemId}', ""],
                ['{celtraExternalPlacementId}', ""],
                ['{celtraExternalPlacementName}', "unknown"],
                ['{celtraExternalSessionId}', ""],
                ['{celtraExternalSiteId}', "222448"],
                ['{celtraExternalSiteName}', "https://www.buzzfeed.com"],
                ['{celtraExternalSupplierId}', "186022"],
                ['{celtraExternalSupplierName}', "186022"],
                ['{celtraFeedReportLabel}', ""],
                ['{celtraIosAdvIdTrackingLimitedBoolStr}', ""],
                ['{celtraIosAdvIdTrackingLimited}', ""],
                ['{celtraIosAdvId}', ""],
                ['{celtraPlacementId:int}', "311471500"],
                ['{celtraPlacementId}', "1290ad8c"],
                ['{celtraPlatformAdvIdTrackingLimited}', ""],
                ['{celtraPlatformAdvId}', ""],
                ['{celtraProductCategoryCode}', ""],
                ['{celtraProto}', "https"],
                ['{celtraRandom}', (Math.random() + '').slice(2)],
                ['{celtraSessionId}', "s1570705716x0850d117d45369x02362134"],
                ['{celtraSupplierId:int}', ""],
                ['{celtraSupplierId}', ""]

            ];
            return macroTags.reduce(function(str, replacementRule, idx, arr) {
                return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
            }, x);
        }
    };

    // Dynamic values that we do not want to pass forward in urls,
    // so we look them up on every page request based on runtimeParams
    var urlOpenedOverrideUrls = {
        "http:// www.olgreen.nl?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-branding&utm_campaign=132536_olgreen_functietitel/employerbranding": "https://www.olgreen.nl/opdrachtgevers/?utm_source=adveronline_mobile-display-advertising&utm_medium=employer-"
    };
    var storeOpenedOverrideUrls = {};
    var urlOpenedUrlAppendage = "";
    var clickThroughDestinationUrl = null;

    // Less dynamic values for payload request
    var payloadBase = "https://cache-ssl.celtra.com/api/creatives/46f4a037/compiled/mraid-ad.js";
    var cacheParams = {
        "v": "14-e62791e034",
        "secure": 1,
        "cachedVariantChoices": "W10-",
        "eventMetadataExperiment": 'newMeta',
        "inmobi": typeof imraid !== 'undefined' && typeof _im_imai !== 'undefined' ? '1' : '0'
    };


    var trackers = (function() {
        return [
            // 3rd-party tracker (regular)
            function(event) {
                if (event.name == 'adLoading')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'firstInteraction')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'creativeLoaded')
                    return {
                        urls: macros(["https://ecads.mspremium.io/m/adloaded?ms_op_code=11_08w00mgvd8"])
                    };

                if (event.name == 'creativeRendered')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'viewable00')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'viewable501')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'expandRequested')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'videoPlayInitiated')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'videoStart')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'videoFirstQuartile')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'videoMidpoint')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'videoThirdQuartile')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'videoComplete')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'videoPause')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'videoMuted')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'videoUnmuted')
                    return {
                        urls: macros([])
                    };

                if (event.name == 'custom')
                    return {
                        urls: macros({}[event.label] || [])
                    };

                if (event.name == 'urlOpened')
                    return {
                        urls: macros({}[event.label] || [])
                    };

                if (event.name == 'storeOpened')
                    return {
                        urls: macros({}[event.label] || [])
                    };
            },
            // 3rd-party tracker (click regular)
            function(event) {
                if (event.name === "firstInteraction")
                    return {
                        urls: macros([]),
                        events: [{
                            name: 'click'
                        }]
                    };
            },
            // Ad server tracker
            function(event) {
                if (event.name === "firstInteraction")
                    return {
                        urls: macros(["https://ecads.mspremium.io/m/aclk?ms_op_code=11_08w00mgvd8&r="]),
                        events: [{
                            name: 'clickReportedToSupplier'
                        }]
                    };
            }
        ]
    })();
    trackers.urlsAndEventsFor = function(event) {
        return this.reduce(function(acc, tracker) {
            var ue = tracker(event) || {};
            return {
                urls: acc.urls.concat(ue.urls || []),
                events: acc.events.concat(ue.events || [])
            };
        }, {
            urls: [],
            events: []
        });
    };



    var adLoadingEvent = {
        "name": "adLoading",
        "sessionId": "s1570705716x0850d117d45369x02362134"
    };
    adLoadingEvent.clientTimestamp = new Date / 1000;

    trackers.urlsAndEventsFor(adLoadingEvent).urls.forEach(function(url) {
        // On IE 8+ URLs containing '%' character sometimes throw an error and
        // stop current JS run loop. One solution  would be to look for that
        // and replace it with '%25', but we've decided not to modify incoming
        // URLs, because this issue is really a combination of two external
        // problems: broken URL on a buggy browser.
        // https://celtra.atlassian.net/browse/MAB-4476
        try {
            var img = new Image;

            img.src = url;
        } catch (e) {}
    });



    (function() {
        runtimeParams.protoLoading = {};

        var base64img = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wEKCBsN103sxwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAC0lEQVQI12NgAAIAAAUAAeImBZsAAAAASUVORK5CYII=";

        runtimeParams.protoLoading.dataLoadStatus = null;
        // Test if CSP is blocking "data:" source for images
        var dataImg = new Image();
        dataImg.onload = function() {
            runtimeParams.protoLoading.dataLoadStatus = "supported";
        };
        dataImg.onerror = function(e) {
            runtimeParams.protoLoading.dataLoadStatus = "blocked";
        };
        dataImg.src = "data:image/png;base64," + base64img;

        runtimeParams.protoLoading.blobLoadStatus = null;
        // Test if CSP is blocking "blob:" source for images
        var url = null;
        try {
            var binaryImg = atob(base64img);
            var length = binaryImg.length;
            var ab = new ArrayBuffer(length);
            var ua = new Uint8Array(ab);
            for (var i = 0; i < length; i++) {
                ua[i] = binaryImg.charCodeAt(i);
            }
            var blob = new Blob([ab], {
                type: 'image/png'
            });
            url = URL.createObjectURL(blob);
        } catch (error) {
            runtimeParams.protoLoading.blobLoadStatus = "error";
            runtimeParams.protoLoading.blobErrorMessage = error.name + ': ' + error.message;
            return;
        }
        var blobImg = new Image();
        blobImg.onload = function() {
            runtimeParams.protoLoading.blobLoadStatus = "supported";
            URL.revokeObjectURL(url);
        };
        blobImg.onerror = function(e) {
            runtimeParams.protoLoading.blobLoadStatus = "blocked";
        };
        blobImg.src = url;
    })();


    function buildPayloadUrl(payloadBase) {
        var pairs = [];
        for (var k in cacheParams)
            pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
        return payloadBase + '?' + pairs.join('&');
    }

    var payloadUrl = buildPayloadUrl(payloadBase);


    if (runtimeParams.fallbackSdk === '1' && typeof mraid === 'undefined') {
        runtimeParams.fallbackSdkUsed = '1';
        payloadUrl = buildPayloadUrl("https://cache-ssl.celtra.com/api/creatives/46f4a037/compiled/web.js");
    }

    // Request and run payload
    var payload = document.createElement('script');
    payload.src = payloadUrl;
    payload.onload = function() {

        runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
        window.celtraDeviceInfoRuntimeParams = runtimeParams.deviceInfo;
        window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl);

    };
    script.parentNode.insertBefore(payload, script.nextSibling);



    // Set creative height
    document.body.style.minHeight = '250px';


})();