import '@forbes/fbs-ads/dist/main';
import {
    FbsAdsService
} from '@forbes/fbs-ads';
import {
    isMobile
} from './is-mobile';
import {
    getBbgTerm,
    getFvid
} from './tracking';
import {
    desktopAdConfig,
    mobileAdConfig
} from './../adsConfig';
import {
    adId,
    advoiceBrand,
    currentTabName,
    fullAdZone,
    getTracking,
    isEurope,
    isE2E,
    isPreview,
    swimLane,
    premiumProfile,
} from './clientConfigService';
import getAbParam from './adblock';

// E2E tests are having issues on certain ad creative loads. Try to get amazon bidding test creatives instead
if (isE2E) {
    localStorage.setItem('apstagDebug', 'true');
}

window.fbsads = window.fbsads || new FbsAdsService();
const adService = window.fbsads;

/**
 * Return the "ss" (swimlane) query parameter if it exists.
 * @return {undefined|String}
 */
export function getSwimlane() {
    const queryParams = window.location.search.replace('?', '').split('&');
    const swimlaneParams = queryParams.map(param => param.split('='))
        .find(item => item[0] === 'ss' && item[1]);

    return swimlaneParams && swimlaneParams[1];
}

/**
 * Apparently, you cannot pass a blank string to GPT and have it
 * show up in the Ad Inspector as a page level target. Adops expects
 * certain keys to appear in the bookmarklet even if they are blank. To
 * force those keys as page level targeting and show up in the bookmarket,
 * you can pass an empty array to GPT.
 *
 * Ad Inspector: https://github.com/forbes/ad-inspector
 *
 * @param {String} value
 * @return {Array|String}
 */
function checkForNone(value) {
    return value === 'none' ? [] : value;
}

let desktopConfig;
let mobileConfig;

function removeSpaceAndLowerCase(param) {
    if (typeof param === 'string') {
        return (param || '').replace(/\s*/gi, '').toLowerCase();
    }
    return param;
}

/**
 * Chooses the correct ad config for a template and allows mobile article ads to get the right templat
 * @param {boolean} isMobile True if the client is using a mobile device.
 * @returns {Object} The ad config to use.
 */
function getConfig() {
    const isMobilePreview = isPreview && window.location.pathname.includes('/preview/mobile');
    return isMobile || isMobilePreview ? mobileConfig : desktopConfig;
}

/**
 * Sets the window external_services object for MOAT/mnet. Supposedly the ad targeting data isn't enough.
 * @param {*} config GPT configuration object for fbs-ads
 */
function setExternalServices(config) {
    config.params = config.params || {};
    const siteZone = (config.ad_unit_path || '').split('/') || [];
    window.external_services = Object.assign(window.external_services || {}, {
        site: siteZone[2],
        zone: (siteZone.slice(3) || []).join('/'),
        author: config.additionalMoatParams.author || '',
        brandvoice: config.params.type === 'ad',
        channel: config.params.channel,
        editorialSlot: config.params.editSlot,
        hashtags: config.params.ht,
        section: config.params.section,
        specialSlot: config.params.specialslot,
    });
}

export function updateAdParams() {
    const tracking = getTracking();
    const swimlaneUrl = advoiceBrand ? '' : getSwimlane();
    const swimLaneValue = swimLane || swimlaneUrl;
    const tab = currentTabName || '';

    const params = {
        ab: getAbParam(),
        author: removeSpaceAndLowerCase(checkForNone(tracking.author)),
        bbgterm: getBbgTerm(),
        channel: [removeSpaceAndLowerCase(checkForNone(tracking.channelNames || tracking.channel)) || ''],
        editSlot: tracking.edit || '',
        fvid: getFvid(),
        ht: checkForNone(tracking.hashtags),
        id: adId || tracking.naturalID || '', // allows adops to specifically target ad sizes to these pages
        login: false,
        section: [removeSpaceAndLowerCase(checkForNone(tracking.sectionNames || tracking.section)) || ''],
        specialslot: swimLaneValue ? '' : (tracking.slot || ''),
        swimlane: swimLaneValue,
        tab,
        templatetype: tracking.templateType,
        type: removeSpaceAndLowerCase(checkForNone(tracking.contribType || tracking.type)),
        badges: tracking.badges,
    };

    if (premiumProfile) {
        params.premiumProfile = premiumProfile;
    }

    const additionalMoatParams = {
        author: checkForNone(tracking.author),
    };

    if (tracking.editorsPick) {
        params.ep = tracking.editorsPick;
    }

    if (tracking.coverStory) {
        params.coverstory = tracking.coverStory;
    }

    if (tracking.bertieBadgeSlugs) {
        params.badges = tracking.bertieBadgeSlugs;
    }

    if (tracking.negativeSentimentCompanies) {
        params.ns = tracking.negativeSentimentCompanies;
    }

    if ((tracking.entitySegments || []).length > 0) {
        params.es = tracking.entitySegments.join(',');
        params.essrc = tracking.entitySegments.map(segment => `${window.fbsads.getTargetingSource() ? `${window.fbsads.getTargetingSource()}_` : ''}${segment}`).join(',');
    }

    if (tracking.sentimentCompanies) {
        params.co = tracking.sentimentCompanies;
    }

    // Special slot or swimlane beat all
    if (params.specialslot || params.swimlane) {
        params.channel = '';
        params.section = '';
        params.displaychannel = '';
        params.displaysection = '';
        if (params.swimlane) {
            params.specialslot = '';
        }
    }

    if (tracking.brandVoice) {
        params.advoice = tracking.brandVoice;
    }

    desktopConfig = {
        ...desktopAdConfig,
        bypass_validate_moat_yield: isE2E,
        params,
        additionalMoatParams,
        ad_unit_path: fullAdZone,
        isEurope,
    };

    mobileConfig = {
        ...mobileAdConfig,
        bypass_validate_moat_yield: isE2E,
        params,
        additionalMoatParams,
        ad_unit_path: fullAdZone,
        isEurope,
    };
}

/**
 * Allows specialSlot and mobileConfig configuration update after adService is bootstrapped.
 * @param {String} specialSlot
 * @param {Boolean} noHeroMobile true if we want to remove hero sizes ([7, 1]) from the mobile position.
 */
export function applyConfig(specialSlot, noHeroMobile = false) {
    const config = getConfig();

    if (specialSlot !== false) {
        config.params.specialslot = specialSlot;
    }

    // remove the [7, 1] ad size from the mobile position on the mobileConfig.
    if (noHeroMobile && config.positions.mobile.sizes) {
        config.positions.mobile.sizes.splice(2, 1);
    }

    setExternalServices(config);
    adService.applyConfig(config);
}

updateAdParams();
setExternalServices(getConfig());

// Defalult settings here: https://github.forbes.com/Templates/fbs-ads-2/blob/master/src/fbs-ads/defaults.ts
adService.bootstrap(getConfig());



// WEBPACK FOOTER //
// ./src/assets/js/shared/adUtilities.js