import {
    FbsTrackingService
} from '@forbes/fbs-tracking';
import {
    isMobile
} from './is-mobile';
import {
    getTracking,
    isLocal,
    isEurope
} from './clientConfigService';

window.trackingService = window.trackingService || new FbsTrackingService();
const {
    trackingService
} = window;
trackingService.setEnvironment(isLocal ? 'staging' : 'prod'); // For now: 'staging' on local, 'prod' on stage and prod
trackingService.isEurope = isEurope;

/**
 * Uses fbsTracking package to generate or get the ClientId for the fvid targeting parameter
 * @returns {string} - the client Id
 */
export const getFvid = () => trackingService.getOrCreateClientId();

/**
 * Checks if the source=bloomberg query parameter is in the current window.location
 * @returns {string} - returns 'true' if source=bloomberg is in the query parameters, '' otherwise.
 */
export const getBbgTerm = () => {
    const queryString = window.location.search.substr(1);
    const queryParamList = queryString.split('&');
    const isBbg = queryParamList.find(element => element.match(/(^|&)source=bloomberg($|&)/));

    return isBbg ? 'true' : 'false';
};

/**
 * Populates cd62. The logic for this field tells GTM how the current article wound up in the current stream.
 * @param {Object} tracking Current tracking information for the current article
 * @returns {string} Tracking value for how the current article wound up in the stream
 */
export const getBvLeftRailHeadlineMobile = (tracking) => {
    // First article, or pages that are not articles should have 'none' default value
    if (!tracking.index) {
        return 'none';

        // On second article on a non-brandvoice landing article page, change value whether the article was served
        // through the ntv-contentm position or the standard topStories response data
    } else if (!tracking.startFromBrandvoice && tracking.index === 1) {
        return tracking.fromNtvAd ? 'mobilead' : 'mobile scheduler';

        // On brandvoice landing article pages, the first 3 articles are from the topStories recommended stream inserted by API
        // as related brandvoice articles from the same partner
    } else if (tracking.startFromBrandvoice && tracking.index < 4) {
        return 'mobilerecommend';
    }

    return 'mobileother';
};

/**
 * Prepare tracking data to be sent to GTM.
 *
 * Takes page specific data from the server and augments it with default values, data only available on the client, and data that isn't
 * page specific.
 *
 * @param {boolean} virtualPageview Is this a virtual page view, false or omitted for the initial page view and updating dataLayer values.
 *
 * @returns {Object} The data needed by @forbes/fbs-tracking
 */
const prepareTracking = (virtualPageview) => {
    const tracking = getTracking();
    const trackingData = {
        author: tracking.author || 'none',
        site: tracking.siteSlug || 'none',
        contribType: tracking.contribType || 'none',
        blogType: tracking.blogType || 'none',
        brandVoice: tracking.brandVoice || 'none',
        channel: tracking.channel || 'none', // cd4
        slot: tracking.slot || 'none', // cd 5
        bertie: tracking.bertie || 'false', // cd10
        pageType: tracking.pageType || 'none', // cd13
        DFPSite: isMobile ? 'fdcmobile' : 'fdc.forbes', // cd15. Our site identifier for desktop and mobile.
        DFPZone: tracking.dfpZone || 'none', // cd16. The zone the page belongs to, e.g. 'home', 'pictures', 'profile', etc.
        published: tracking.publishDate || 'none', // cd17
        paragraphs: `${tracking.paragraphs || 'none'}`, // cd18
        categories: tracking.categories || 'none', // cd19
        edit: tracking.edit || 'none', // cd20
        hashtags: tracking.hashtags || 'none', // cd21
        naturalID: tracking.naturalID || 'none', // cd24
        wordCount: tracking.wordCount || 'none', // cd30
        pageNumber: `${tracking.pageNumber || 'none'}`, // cd33
        pageTotal: `${tracking.pageTotal || 'none'}`, // cd34
        publishHour: tracking.publishHour || 'none', // cd35
        updateDate: tracking.updateDate || 'none', // cd36
        updateHour: tracking.updateHour || 'none', // cd37
        section: tracking.section || 'none', // cd38
        videoPlacement: tracking.videoLocation || 'none', // cd42
        login: 'false', // cd46
        trendingHashtags: tracking.hashtagsTrending || 'none', // cd47
        heroImage: tracking.heroImage || 'none', // cd48
        imageCount: typeof tracking.imageCount === 'number' ? tracking.imageCount.toString() : 'none', // cd49
        customPage: tracking.customPage || 'none', // cd50
        weekdayPublish: tracking.weekdayPublish || 'none', // cd51
        contribActive: tracking.contribActive || 'none', // cd56
        primaryChannel: tracking.primaryChannel || 'none', // cd59
        primarySection: tracking.primarySection || 'none', // cd60
        bvContentSource: (tracking.brandVoice && tracking.bvContentSource) || 'none', // cd61
        bvLeftRailHeadline: getBvLeftRailHeadlineMobile(tracking), // cd62. This is only set in the stream.
        streamPosition: typeof tracking.streamPosition === 'number' ? tracking.streamPosition : 'none', // cd64
        DFPLineItemID: tracking.ntvContentmLineItemId || 'none', // cd65. This is only set in the stream.
        bvProgramType: tracking.bvProgramType || 'none', // cd68
        coreBrands: tracking.coreBrands || 'none', // cd69
        contribDivision: tracking.contribDivision || 'none', // cd70
        insights: tracking.insights || 'none', // cd78
        coAuthorControl: tracking.coAuthorControl, // cd79
        newsKeywords: tracking.newsKeywords || 'none', // cd80
        coAuthor: tracking.coAuthor || 'none', // cd81
        channelNames: tracking.channelNames || 'none',
        sectionNames: tracking.sectionNames || 'none',
        cbSections: tracking.sections || '',
        cbPath: document.location.pathname,
        fastCh: tracking.fastCh || '',
        fastSe: tracking.fastSe || '',
        fastSu: tracking.fastSu || '',
        fastPt: tracking.fastPt || '',
        fastI: tracking.naturalID || '',
        fastAu: tracking.fastAu || '',
        fastAt: tracking.fastAt || '',
        fastN: '',
        version: tracking.version || '',
        description: tracking.description || '',
        seniorContributor: tracking.seniorContributor || 'none',
        paidContentType: tracking.paidContentType || 'none', // cd92
        paidContentBrand: tracking.paidContentBrand || 'none', // cd93
        premiumProfiles: tracking.premiumProfiles || 'none', // cd98
        templateType: tracking.templateType || 'none',
    };

    if (virtualPageview) {
        trackingData.event = 'analyticsVPV';
        trackingData.path = window.location.pathname;
        trackingData.virtualPage = 'true';
        trackingData.cbTitle = tracking.title || '';
    }

    return trackingData;
};

/**
 * Fire virtual tracking
 *
 * @param {boolean} virtualPageview Is this a page view, false for just updating dataLayer values.
 */
export const virtualTrack = (virtualPageview) => {
    trackingService.track(prepareTracking(virtualPageview), virtualPageview);
};

// We do not want to fire tracking on bertie preview mode
if (!window.forbes['simple-site'].isPreview) {
    trackingService.track(prepareTracking(), true);
}



// WEBPACK FOOTER //
// ./src/assets/js/shared/tracking.js