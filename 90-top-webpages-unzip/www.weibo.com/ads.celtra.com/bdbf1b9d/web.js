
(function() {
    // Dynamic values from page request
    
var script = document.getElementById("celtra-script-1");
if (!script || script.tagName.toLowerCase() !== 'script')
    throw 'Element with id equal to scriptId does not exist or is not a script.';
  
    var runtimeParams = {"tagVersion":"6","deviceInfo":{"deviceType":"Phone","primaryHardwareType":"Mobile Phone","mobileDevice":true,"osName":"Android","osVersion":"6.0","platform":"Android","platformVersion":"6.0","browserName":"Chrome Mobile","browserVersion":"77.0.3865.90","browserRenderingEngine":"WebKit","vendor":"Google","model":"D820"},"weather":{"windy":"0","currentCondition":"rain","apparentTemperature":12.0,"temperature":11.7,"windSpeed":2,"cloudCoverage":44,"conditions":[{"name":"rain","weight":2},{"name":"cloudy","weight":0}]},"ipCountryCode":"NL","ipRegionCode":null,"ipPrincipalSubdivisionCode":"NH","ipCityGeonameId":"2759794","ipCity":"Amsterdam","ipPostalCode":"1091","ipLat":52.35,"ipLng":4.91669,"accountId":"66c652e3","folderId":"7779914c","placementId":"bdbf1b9d","supplierId":null,"sessionId":"s1570627911x80770577756524x91801722","purpose":"live","secure":1,"clientTimestamp":"1570627910.764","clientTimeZoneOffsetInMinutes":420,"clientIp":"145.108.80.166","gpsLat":null,"gpsLng":null,"language":"en","acceptLanguage":"en-US,en;q=0.9","platformAdvId":null,"platformAdvIdTrackingLimited":null,"userIdentifiers":{},"variantChoices":{"CreativeLocation/4c6e3a7b/98003":"Netherlands","CreativeLocation/4c6e3a7b/100146":"Netherlands","CreativeLocation/4c6e3a7b/93729":"Netherlands","CreativeLocation/4c6e3a7b/99996":"Netherlands","CreativeLocation/4c6e3a7b/99860":"Netherlands","CreativeLocation/4c6e3a7b/100320":"Netherlands","CreativeLocation/4c6e3a7b/87659":"Netherlands","UseNewUnitViewabilityLogic":"newGeometryWithoutSampling","CreativeLocation/4c6e3a7b/99663":"Netherlands"},"neustarSegment":null,"authBasis":"1570627911782,4c6e3a7b,bdbf1b9d","authToken":"eda08d7b0d7db40ae0b1b6551ee408f1","customAudiences":{},"derivedAudiences":{},"destinationDefinitions":[{"campaignId":null,"placementId":null,"creativeId":"4c6e3a7b","eventName":"click","reportLabel":"","destinationUrl":"{celtraExternalDestinationUrl}","destination":{"url":"{celtraExternalDestinationUrl}","clazz":"Fixed"},"impressionUrl":null}],"dynamicContent":[{"feedId":"94385f90","fields":[{"id":"af16e982","isUsed":true,"name":"Body_No_Break","fieldType":"text"},{"id":"3b868747","isUsed":true,"name":"Disclaimer 728x90","fieldType":"text"},{"id":"3cbb38c9","isUsed":true,"name":"Layout Alt [160x600]","fieldType":"choice"},{"id":"3b0521ee","isUsed":true,"name":"Disclaimer Position","fieldType":"choice"},{"id":"c01bda0b","isUsed":true,"name":"Image","fieldType":"image"},{"id":"7bd8bdfb","isUsed":true,"name":"Body_Line_Break","fieldType":"text"},{"id":"85015f1e","isUsed":true,"name":"Headline_Break","fieldType":"text"},{"id":"29c5ab88","isUsed":true,"name":"Headline 728x90","fieldType":"text"},{"id":"af0eaff0","isUsed":true,"name":"CTA","fieldType":"text"},{"id":"acb79c81","isUsed":true,"name":"Header/Body","fieldType":"choice"},{"id":"fdd097cb","isUsed":true,"name":"Image 160x600","fieldType":"image"},{"id":"b5123906","isUsed":true,"name":"Headline 320x50","fieldType":"text"},{"id":"968c81eb","isUsed":true,"name":"Image 300x250","fieldType":"image"},{"id":"bfe82418","isUsed":true,"name":"Headline 160x600","fieldType":"text"},{"id":"57126e52","isUsed":true,"name":"Disclaimer Alt","fieldType":"text"},{"id":"90576f7f","isUsed":true,"name":"Layout_300x50","fieldType":"choice"},{"id":"9bc0a42a","isUsed":true,"name":"Headline","fieldType":"text"},{"id":"21e5a1c3","isUsed":true,"name":"Body_alt","fieldType":"text"},{"id":"b792b47e","isUsed":true,"name":"Body 728x90","fieldType":"text"},{"id":"a177a4ea","isUsed":true,"name":"Disclaimer_Line_Break","fieldType":"text"},{"id":"48da944f","isUsed":true,"name":"Image_position","fieldType":"choice"},{"id":"2a16d35d","isUsed":true,"name":"Body","fieldType":"text"},{"id":"cc96c811","isUsed":true,"name":"Headline 320x480","fieldType":"text"},{"id":"7c4c5c69","isUsed":true,"name":"Color","fieldType":"choice"},{"id":"b21b70ec","isUsed":true,"name":"Layout","fieldType":"choice"},{"id":"da508efe","isUsed":true,"name":"Image 320x480","fieldType":"image"},{"id":"0da6d2b3","isUsed":true,"name":"Image 300x600","fieldType":"image"},{"id":"59cacfa4","isUsed":true,"name":"Image Small","fieldType":"image"},{"id":"a5f6a647","isUsed":true,"name":"Color_BG","fieldType":"image"},{"id":"524aa1e6","isUsed":true,"name":"Disclaimer","fieldType":"text"},{"id":"a6839577","isUsed":true,"name":"Image 970x250","fieldType":"image"},{"id":"2d095431","isUsed":true,"name":"Headline 300x250","fieldType":"text"},{"id":"73d65645","isUsed":false,"name":"Font Alignment","fieldType":"choice"},{"id":"0f975796","isUsed":true,"name":"Layout Alt [970x250]","fieldType":"choice"},{"id":"2b9eef5b","isUsed":true,"name":"Body_LineBreak_160x600","fieldType":"text"},{"id":"91820cca","isUsed":true,"name":"Button Color","fieldType":"choice"},{"id":"97359d92","isUsed":false,"name":"Body_alt 2","fieldType":"text"},{"id":"b9abfee5","isUsed":true,"name":"Button Length","fieldType":"choice"},{"id":"439ea110","isUsed":true,"name":"Headline_Alt","fieldType":"text"},{"id":"0126feb2","isUsed":true,"name":"Headline 970x250","fieldType":"text"},{"id":"9c961839","isUsed":true,"name":"Layout Alt [320x480]","fieldType":"choice"}],"rows":[]}],"tuneIosQueryStringFragment":null,"tuneAndroidQueryStringFragment":null,"tuneCustomAttributes":{},"admarvel_format":null,"overrides":{"placementId":"bdbf1b9d","customAudiences":{},"derivedAudiences":{},"deviceInfo":{"deviceType":"Phone","primaryHardwareType":"Mobile Phone","mobileDevice":true,"osName":"Android","osVersion":"6.0","platform":"Android","platformVersion":"6.0","browserName":"Chrome Mobile","browserVersion":"77.0.3865.90","browserRenderingEngine":"WebKit","vendor":"Google","model":"D820"},"language":"en","ipCountryCode":"NL","ipRegionCode":null,"ipPrincipalSubdivisionCode":"NH","ipCityGeonameId":"2759794","ipCity":"Amsterdam","weather":{"windy":"0","currentCondition":"rain","apparentTemperature":12.0,"temperature":11.7,"windSpeed":2,"cloudCoverage":44,"conditions":[{"name":"rain","weight":2},{"name":"cloudy","weight":0}]},"clientTimestamp":"1570627910.764","clientTimeZoneOffsetInMinutes":420},"utSignals":null,"_mraidCheck":null,"fallbackSdk":null,"externalAdServer":"DCM","externalCreativeId":"120449248","externalCreativeName":null,"externalPlacementId":"256155702","externalPlacementName":null,"externalSiteId":"4129736","externalSiteName":null,"externalSupplierId":null,"externalSupplierName":null,"externalLineItemId":"452698885","externalSessionId":null,"externalBundleId":null,"externalCreativeWidth":300,"externalCreativeHeight":250,"externalCampaignId":"23000643","externalCampaignName":null,"externalAdvertiserId":null,"externalDestinationUrl":"https://t.myvisualiq.net/click_pixel?et=c&ago=212&ao=796&aca=23000643&si=4129736&ci=120449248&pi=256155702&ad=452698885&sv1=-7&advt=4720433&chnl=-7&vndr=115&sz=6742&u=red=https://www.spotify.com/premium?utm_source=dv360_nl_na_na_subs&utm_medium=display&utm_campaign=2019q3_markets_single_premiumbusiness_3monthfree&utm_content=&utm_term=23000643_256155702_120449248&dclid=%edclid!","clickUrl":"https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuiLqmjgiu8zxIOZtGRJX5A08LQi762UTgZRVMBQPwS_fXlDVKRtiqS5NVoVb2qci_FFT3lvpXTcLg0jqbOStSDenfVGacynXbdRgvgopaYEdb4KOHntWoz02eGBOnm5CMbsmh_8C8Rwc0iVH8X87QrSL3kvWgPMzFkxiGxcbtyjFC7qqW8E67nlBBU-pwcpr2dBm-OMgwgLEoXHpk-VRq3jta1HW5cxv3mssxco-8sUVba1R8nGA650A_DBLCcc2_d4guePMI0d8qiyLBSVB8NGUahozpE2sEU1bTLTp6mlBp1GoUv_7II2eyhbC5cOcasZEHSUYGGMLLnlygREs5tm60gePLtK0mApZIrlpY1KtWc6RyNVbxWvxl9569GJT4wjUYrSWrCP0eIUBZowAF6EyYsjwq3ODZIQEqHYg2mj4SjGzy_zLd8J0Fd2yGfcRxBenXALhQ5zzCc8rN96W-_5Okly8C3aO6izVuSVjwMQQ19D6PrP6pxB9jGErMcHQ5YZeCGJOs_awo4oAm736Q6CCclwq4-Ges6gL17t2b5CpkNeVGSoRQ5MGeMRAuV29tVgFk4qa1TtTCwDzCSaTPMWKSfn3rWWsz2Dqe-eNdTlADF7IN_9-YHiWogCpGq3oiXJAMhThrPv4VWLuCzm-3PCvyvOqK5iv_yyYH-n92Xz7ArtHx9RbsR1ov8JlEQZlT-G8w60P1WeaFNdHgY6xQyJWB3oAKdTBYUPH6voYKcQ0Y5tXsgx59t2i7tYRRSV0QdTo_agRZV5x99d5VcGd4CxF1SWEuwrfhO5qQB-DC9s7dGmMlfD0jWTfFiymZtwf7nL2ZYxMEg9Gsn6X9iH65kObrDp_ljTKwAUpA_sbN2FYKYRaZDSBYkN8mM18zfXcL-LOtWYw15PSsaPesRfFT61vE7Q0XXUyjOoxjKsd7PNEas0aQ0JZnb-1s6IhTfZpcZQX07yfgkIVlRz15-7lt-Mm2ol94dIy3GkRO8w-mDQFbxfKy_aEGfnVpFlu4Bxtqeji-jRu4pjIu8QsDWP-VtflvFIJiXbA5gzagvt-lPLOZ5cgbW2A88UqR8g2KfoOwUideavLnDFZW462ZrzLFJ0tIQk_4g9MMvfWwEEzoxbNTMCEAicuah0_qfTFGL0P6tHSg5aw9lxJMz3niohzlGuNS09mEU48ebNPQQxQx4zhc3xphUUZASNSHklUSDr5axbKPiotRFCDbd99ZzFhPaKUWrBY0bJ8se7_FYrv5jD6FaROcE_7JwCiw&sai=AMfl-YQbHy27okVaV7gqmmaVL1L9-ipOB4OIs_a_XwCe7XyDsz19EwZCyMkPPmE2G6vs33G4UuM-1m4bejEBmQdPmu3ydu6fV4yJOtEvWgZxSERXvbIC8fwHZ6e6CKlctXM0tqOZMc9vWpHSqB645by7Nr9rRI4TmKJgHGmRtGU0IM155VI&sig=Cg0ArKJSzI0hDoETQPf9EAE&urlfix=1&adurl=","useClickAsDestination":null,"scriptId":"celtra-script-1","firehoseUrl":null,"clickEvent":"advertiser","clickUrlNeedsDest":null,"ncu":null,"firstPage":1,"dataURIsEnabled":0,"universalAndAppLinksInMRAID":0,"monotypeProjectId":"c46ed090-3671-4163-a85b-b06b4038ae38","iosAdvId":null,"iosAdvIdTrackingLimited":null,"androidAdvId":null,"androidAdvIdTrackingLimited":null,"moatRandom":{"first":1712615898,"second":260969},"skipOffset":null,"_enablePoliteLoading":null,"fontSubsetterIsDisabled":null,"_politeImageUrl":null,"_politeClickThrough":null,"sticky":null,"_mopubExt":null,"enabledServices":[],"creativeVariantLockSize":null,"vastVersion":null,"country":"US","productCategoryCode":null,"campaignName":"W1_3MT_FREE | Display | MASTERS","agencyId":null,"customPartnerAttributeBrandId":null,"suppressCloseButton":null,"preferredClickThroughWindow":"new","externalUserId":"0","externalCreativeSize":"300x250","expandDirection":"undefined","hostPageLoadId":"9711031491504911"};
    runtimeParams.overridableClickThroughDestinationUrl = true;
    runtimeParams.redirectJsClientTimestamp = new Date() / 1000;
    
    
var macros = function (x) {
    if (x instanceof Array) {
        return x.map(macros);
    } else {
        var macroTags = [
            ['%%CACHEBUSTER%%', (Math.random()+'').slice(2)]
,['%ecid!', "120449248"]
,['%n', (Math.random()+'').slice(2)]
,['%s', "https"]
,['{celtraAccountId}', "66c652e3"]
,['{celtraAgencyId}', ""]
,['{celtraAndroidAdvIdTrackingLimitedBoolStr}', ""]
,['{celtraAndroidAdvIdTrackingLimited}', ""]
,['{celtraAndroidAdvId}', ""]
,['{celtraCampaignId:int}', "2004455756"]
,['{celtraCampaignId}', "7779914c"]
,['{celtraCampaignName}', "W1_3MT_FREE%20%7C%20Display%20%7C%20MASTERS"]
,['{celtraCountryCode}', "US"]
,['{celtraCreativeId:int}', "1282292347"]
,['{celtraCreativeId}', "4c6e3a7b"]
,['{celtraCreativeVariant:urlenc}', "Netherlands%7CNetherlands%7CNetherlands%7CNetherlands%7CNetherlands%7CNetherlands%7CNetherlands%7CNetherlands"]
,['{celtraCreativeVariant}', "Netherlands|Netherlands|Netherlands|Netherlands|Netherlands|Netherlands|Netherlands|Netherlands"]
,['{celtraCustomPartnerAttribute\\[code\\]}', ""]
,['{celtraExternalAdServer}', "DCM"]
,['{celtraExternalAdvertiserId}', ""]
,['{celtraExternalBundleId}', ""]
,['{celtraExternalCampaignId}', "23000643"]
,['{celtraExternalCampaignName}', ""]
,['{celtraExternalCreativeId}', "120449248"]
,['{celtraExternalCreativeName}', ""]
,['{celtraExternalDestinationUrl}', "https://t.myvisualiq.net/click_pixel?et=c&ago=212&ao=796&aca=23000643&si=4129736&ci=120449248&pi=256155702&ad=452698885&sv1=-7&advt=4720433&chnl=-7&vndr=115&sz=6742&u=red=https://www.spotify.com/premium?utm_source=dv360_nl_na_na_subs&utm_medium=display&utm_campaign=2019q3_markets_single_premiumbusiness_3monthfree&utm_content=&utm_term=23000643_256155702_120449248&dclid=%edclid!"]
,['{celtraExternalLineItemId}', "452698885"]
,['{celtraExternalPlacementId}', "256155702"]
,['{celtraExternalPlacementName}', ""]
,['{celtraExternalSessionId}', ""]
,['{celtraExternalSiteId}', "4129736"]
,['{celtraExternalSiteName}', ""]
,['{celtraExternalSupplierId}', ""]
,['{celtraExternalSupplierName}', ""]
,['{celtraFeedReportLabel}', "94385f90%3D"]
,['{celtraIosAdvIdTrackingLimitedBoolStr}', ""]
,['{celtraIosAdvIdTrackingLimited}', ""]
,['{celtraIosAdvId}', ""]
,['{celtraPlacementId:int}', "3183418269"]
,['{celtraPlacementId}', "bdbf1b9d"]
,['{celtraPlatformAdvIdTrackingLimited}', ""]
,['{celtraPlatformAdvId}', ""]
,['{celtraProductCategoryCode}', ""]
,['{celtraProto}', "https"]
,['{celtraRandom}', (Math.random()+'').slice(2)]
,['{celtraSessionId}', "s1570627911x80770577756524x91801722"]
,['{celtraSupplierId:int}', ""]
,['{celtraSupplierId}', ""]

        ];
        return macroTags.reduce(function(str, replacementRule, idx, arr) {
            return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
        }, x);
    }
};

    // Dynamic values that we do not want to pass forward in urls,
    // so we look them up on every page request based on runtimeParams
    var urlOpenedOverrideUrls = {};
    var storeOpenedOverrideUrls = {};
    var urlOpenedUrlAppendage = "";
    var clickThroughDestinationUrl = "{celtraExternalDestinationUrl}";

    // Less dynamic values for payload request
    var payloadBase = "https://cache-ssl.celtra.com/api/creatives/4c6e3a7b/compiled/web.js";
    var cacheParams = {"v": "757-e62791e034", "secure": 1, "cachedVariantChoices": "W10-", "inmobi": typeof imraid !== 'undefined' && typeof _im_imai !== 'undefined' ? '1' : '0'};

    
    var trackers = (function() {
    return [
        // 3rd-party tracker (regular)
function(event) {
    if (event.name == 'adLoading')
        return {urls: macros([])};

    if (event.name == 'firstInteraction')
        return {urls: macros([])};

    if (event.name == 'creativeLoaded')
        return {urls: macros([])};

    if (event.name == 'creativeRendered')
        return {urls: macros([])};

    if (event.name == 'viewable00')
        return {urls: macros([])};

    if (event.name == 'viewable501')
        return {urls: macros([])};

    if (event.name == 'expandRequested')
        return {urls: macros([])};

    if (event.name == 'videoPlayInitiated')
        return {urls: macros([])};

    if (event.name == 'videoStart')
        return {urls: macros([])};

    if (event.name == 'videoFirstQuartile')
        return {urls: macros([])};

    if (event.name == 'videoMidpoint')
        return {urls: macros([])};

    if (event.name == 'videoThirdQuartile')
        return {urls: macros([])};

    if (event.name == 'videoComplete')
        return {urls: macros([])};

    if (event.name == 'videoPause')
        return {urls: macros([])};

    if (event.name == 'videoMuted')
        return {urls: macros([])};

    if (event.name == 'videoUnmuted')
        return {urls: macros([])};

    if (event.name == 'custom')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'urlOpened')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'storeOpened')
        return {urls: macros({}[event.label] || [])};
},
// 3rd-party tracker (click regular)
function(event) {
    if (event.name === "clickThroughDestinationOpened")
        return {urls: macros([]), events: [{name: 'click'}] };
},
// Ad server tracker
function(event) {
    if (event.name === "clickThroughDestinationOpened")
        return {urls: macros(["https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuiLqmjgiu8zxIOZtGRJX5A08LQi762UTgZRVMBQPwS_fXlDVKRtiqS5NVoVb2qci_FFT3lvpXTcLg0jqbOStSDenfVGacynXbdRgvgopaYEdb4KOHntWoz02eGBOnm5CMbsmh_8C8Rwc0iVH8X87QrSL3kvWgPMzFkxiGxcbtyjFC7qqW8E67nlBBU-pwcpr2dBm-OMgwgLEoXHpk-VRq3jta1HW5cxv3mssxco-8sUVba1R8nGA650A_DBLCcc2_d4guePMI0d8qiyLBSVB8NGUahozpE2sEU1bTLTp6mlBp1GoUv_7II2eyhbC5cOcasZEHSUYGGMLLnlygREs5tm60gePLtK0mApZIrlpY1KtWc6RyNVbxWvxl9569GJT4wjUYrSWrCP0eIUBZowAF6EyYsjwq3ODZIQEqHYg2mj4SjGzy_zLd8J0Fd2yGfcRxBenXALhQ5zzCc8rN96W-_5Okly8C3aO6izVuSVjwMQQ19D6PrP6pxB9jGErMcHQ5YZeCGJOs_awo4oAm736Q6CCclwq4-Ges6gL17t2b5CpkNeVGSoRQ5MGeMRAuV29tVgFk4qa1TtTCwDzCSaTPMWKSfn3rWWsz2Dqe-eNdTlADF7IN_9-YHiWogCpGq3oiXJAMhThrPv4VWLuCzm-3PCvyvOqK5iv_yyYH-n92Xz7ArtHx9RbsR1ov8JlEQZlT-G8w60P1WeaFNdHgY6xQyJWB3oAKdTBYUPH6voYKcQ0Y5tXsgx59t2i7tYRRSV0QdTo_agRZV5x99d5VcGd4CxF1SWEuwrfhO5qQB-DC9s7dGmMlfD0jWTfFiymZtwf7nL2ZYxMEg9Gsn6X9iH65kObrDp_ljTKwAUpA_sbN2FYKYRaZDSBYkN8mM18zfXcL-LOtWYw15PSsaPesRfFT61vE7Q0XXUyjOoxjKsd7PNEas0aQ0JZnb-1s6IhTfZpcZQX07yfgkIVlRz15-7lt-Mm2ol94dIy3GkRO8w-mDQFbxfKy_aEGfnVpFlu4Bxtqeji-jRu4pjIu8QsDWP-VtflvFIJiXbA5gzagvt-lPLOZ5cgbW2A88UqR8g2KfoOwUideavLnDFZW462ZrzLFJ0tIQk_4g9MMvfWwEEzoxbNTMCEAicuah0_qfTFGL0P6tHSg5aw9lxJMz3niohzlGuNS09mEU48ebNPQQxQx4zhc3xphUUZASNSHklUSDr5axbKPiotRFCDbd99ZzFhPaKUWrBY0bJ8se7_FYrv5jD6FaROcE_7JwCiw&sai=AMfl-YQbHy27okVaV7gqmmaVL1L9-ipOB4OIs_a_XwCe7XyDsz19EwZCyMkPPmE2G6vs33G4UuM-1m4bejEBmQdPmu3ydu6fV4yJOtEvWgZxSERXvbIC8fwHZ6e6CKlctXM0tqOZMc9vWpHSqB645by7Nr9rRI4TmKJgHGmRtGU0IM155VI&sig=Cg0ArKJSzI0hDoETQPf9EAE&urlfix=1&adurl="]), events: [{name: 'clickReportedToSupplier'}] };
}
    ]
})();
    trackers.urlsAndEventsFor = function(event) {
        return this.reduce(function(acc, tracker) {
            var ue = tracker(event) || {};
            return {
                urls:   acc.urls.concat(ue.urls || []),
                events: acc.events.concat(ue.events || [])
            };
        }, {urls: [], events: []});
    };
       

    
var adLoadingEvent = {"name":"adLoading","sessionId":"s1570627911x80770577756524x91801722"};
adLoadingEvent.clientTimestamp = new Date/1000;

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
    } catch(e) {}
});
    

    
(function () {
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
        var blob = new Blob([ab], {type: 'image/png'});
        url = URL.createObjectURL(blob);
    } catch(error) {
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

    
// Request and run payload
var payload = document.createElement('script');
payload.src = payloadUrl;
payload.onload = function() {

runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
window.celtraDeviceInfoRuntimeParams = runtimeParams.deviceInfo;
window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl);
    
};
script.parentNode.insertBefore(payload, script.nextSibling);
    
    
    
})();
  