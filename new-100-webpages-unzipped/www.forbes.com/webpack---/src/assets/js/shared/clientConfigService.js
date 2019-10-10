import {
    isMobile
} from './is-mobile';

// TODO Remake for arbitrary data
export const serverData = ((window.forbes || {})['simple-site'] || {});

export const {
    adBlockClasses,
    adId,
    adZone,
    advoiceBrand,
    authorSlug,
    barChartYears,
    blogSlug,
    bucket,
    categoryCookieName,
    channelColor,
    channelId,
    channelName,
    cookieName,
    currentTabName,
    division,
    hasWriters,
    is404,
    isBlog,
    isE2E,
    isLocal,
    isPreview,
    lazyLoadData,
    name,
    naturalId,
    pageLocation,
    premiumProfile,
    playerId,
    premiumPage,
    region,
    relativeVideo,
    retracted,
    sectionId,
    specialSlot,
    streamSourceType,
    streamSourceValue,
    subBlog,
    swimLane,
} = serverData;

// isEurope is needed early in the page for GDPR
export const {
    isEurope
} = window.forbes || {};

export function getTracking() {
    const trackingData = ((window.forbes || {})['simple-site'] || {}).tracking;
    if ((trackingData || {}).pageType === '404') {
        trackingData.fastSu = `https://www.forbes.com${window.location.pathname}`;
    }

    return trackingData;
}

export const adAccount = '7175';
export const adSite = isMobile ? 'fdcmobile' : 'fdc.forbes';
export const fullAdZone = `/${adAccount}/${adSite}/${adZone}`;



// WEBPACK FOOTER //
// ./src/assets/js/shared/clientConfigService.js