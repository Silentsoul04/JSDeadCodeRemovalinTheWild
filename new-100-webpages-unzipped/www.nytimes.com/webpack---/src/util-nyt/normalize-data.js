import safeChain from 'safe-chain';
import Logger from 'src/util/logger';
import checkCookie from 'src/util/check-cookie';
import selectVideoRendition from './select-video-rendition';
import selectImageRendition from './select-image-rendition';
import selectPlaybackType from './select-playback-type';

const logger = new Logger('vhs');

//
// Helpers
//

function ensureHttps(url) {
    if (typeof url === 'string') {
        return url.replace('http://', 'https://');
    }
    return url;
}

function pickValue(values, defaultValue) {
    for (let i = 0; i < values.length; i += 1) {
        if (typeof values[i] !== 'undefined' && values[i] !== null)
            return values[i];
    }
    return Boolean(defaultValue);
}

//
// Normalizers
//

function normalizeId(rawData, options) {
    return rawData.sourceId || rawData.data_id || options.id || 'unknown';
}

function normalizeHeadline(rawData, options) {
    return (
        (typeof rawData.headline === 'object' && rawData.headline.default) ||
        (typeof rawData.headline === 'string' && rawData.headline) ||
        rawData.promotionalHeadline ||
        options.headline ||
        ''
    );
}

function normalizeByline(rawData, options) {
    return (
        (rawData.bylines &&
            rawData.bylines.length &&
            rawData.bylines[0].renderedRepresentation) ||
        rawData.byline ||
        options.byline ||
        ''
    );
}

function normalizeSummary(rawData, options) {
    return rawData.promotionalSummary || rawData.summary || options.summary || '';
}

function normalizeSeries(rawData, options) {
    return (
        rawData.contentSeries ||
        (rawData.content_series && rawData.content_series.name) ||
        options.series ||
        ''
    );
}

function normalizeDuration(rawData, options) {
    return (
        Math.round(rawData.duration / 1000) ||
        Math.round(options.duration / 1000) ||
        0
    );
}

function normalizeIsLive(rawData, options) {
    return pickValue([rawData.isLive, rawData.is_live, options.live], false);
}

function normalizeIs360(rawData, options) {
    return pickValue([rawData.is360, rawData.is_360, options.is360], false);
}

function normalizeIsEmbeddedOnly(rawData, options) {
    return pickValue([rawData.embedded, options.embeddedOnly], false);
}

/**
 * @returns {boolean}
 */
function normalizeGDPR() {
    const hasGDPR = checkCookie('nyt-gdpr=1');
    const hasNYTOUT = checkCookie('nyt-t=out');

    if (hasGDPR && hasNYTOUT) {
        return true;
    }
    return false;
}

/**
 * @param {string} name
 * @returns {string}
 */
function getCookie(name) {
    try {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        return parts.length === 2 ?
            parts
            .pop()
            .split(';')
            .shift() :
            null;
    } catch (error) {
        return '';
    }
}

// This function checks to see if the user is part of
// project Socrates. The project enables schools that agree
// to access the Times without any subscriptions or advertising
// except for one ad from the sponsor of the project.
function normalizeSocrates() {
    const hasPurr = getCookie('nyt-purr');
    return hasPurr && hasPurr.substring(1, 2) === 's';
}

function normalizeAds(rawData, options) {
    if (
        normalizeGDPR() ||
        normalizeSocrates() ||
        normalizeIs360(rawData, options) ||
        (typeof rawData.advertisingProperties === 'object' &&
            rawData.advertisingProperties.sensitivity === 'TRAGEDY') ||
        rawData.advertising_sensitivity === 'noads' ||
        options.adSensitivity === 'TRAGEDY' ||
        options.adSensitivity === 'noads'
    ) {
        return false;
    }
    return Boolean(options.ads);
}

function normalizeAdSensitivity(rawData, options) {
    if (
        typeof rawData.advertisingProperties === 'object' &&
        rawData.advertisingProperties.sensitivity
    ) {
        return rawData.advertisingProperties.sensitivity;
    } else if (options.adSensitivity) {
        return options.adSensitivity;
    }
    return undefined;
}

function normalizeUrl(rawData, options) {
    return rawData.url || options.url || '';
}

function normalizeShortUrl(rawData, options) {
    return rawData.shortUrl || rawData.short_url || options.shortUrl || '';
}

function normalizeSponsorFor(rawData, options) {
    return rawData.sponsor_for || options.sponsorFor || null;
}

function normalizeCatalogueKeywords(rawData, options) {
    return rawData.catalogue_keywords || options.catalogueKeywords || [];
}

function normalizeTimesTags(rawData, options) {
    return (rawData.timesTags || options.timesTags || []).filter(x => x);
}

function normalizeRelated(rawData, options) {
    return (
        (rawData.related &&
            rawData.related.length && [{
                headline: rawData.related[0].promotionalHeadline,
                url: rawData.related[0].url
            }]) ||
        safeChain(rawData, 'regions.related.modules[0].modules') ||
        options.related || []
    );
}

function normalizeImages(rawData, options) {
    let images = [];
    if (
        rawData.promotionalMedia &&
        rawData.promotionalMedia.crops &&
        rawData.promotionalMedia.crops.length
    ) {
        images = rawData.promotionalMedia.crops.reduce(
            (acc, next) => (next.renditions ? acc.concat(next.renditions) : acc), []
        );
    } else if (
        rawData.promotional_media &&
        rawData.promotional_media.proportions &&
        rawData.promotional_media.proportions.length
    ) {
        images = rawData.promotional_media.proportions.reduce(
            (acc, next) => acc.concat(next.crops), []
        );
    } else if (options.images) {
        images = options.images;
    }

    for (let i = 0; i < images.length; i += 1) {
        // Do not mutate this object, because Apollo will throw an error locally.
        images[i] = {
            ...images[i],
            url: ensureHttps(images[i].url)
        };
    }

    return images;
}

function normalizeVideoCues(rawData, options) {
    return rawData.cues || rawData.video_cues || options.videoCues || [];
}

function normalizeRatio(rawData, options) {
    return options.ratio || null;
}

function normalizeRenditions(rawData, options) {
    let renditions =
        rawData.renditions || rawData.video_files || options.sources || [];

    let liveUrls = [];
    if (options.liveUrls && options.liveUrls.length > 0) {
        liveUrls = liveUrls.concat(
            options.liveUrls.map(url => (typeof url === 'string' && {
                url
            }) || url)
        );
    }
    if (rawData.liveUrls && rawData.liveUrls.length > 0) {
        liveUrls = liveUrls.concat(
            rawData.liveUrls.map(url => (typeof url === 'string' && {
                url
            }) || url)
        );
    }
    if (rawData.live_urls && rawData.live_urls.length > 0) {
        liveUrls = liveUrls.concat(
            rawData.live_urls.map(url => (typeof url === 'string' && {
                url
            }) || url)
        );
    }
    renditions = renditions.concat(liveUrls);
    for (
        let i = 0, renditionLength = renditions.length; i < renditionLength; i += 1
    ) {
        // do not mutate this object, because Apollo will throw an error locally
        renditions[i] = {
            ...renditions[i],
            url: ensureHttps(renditions[i].url)
        };
    }

    return renditions;
}

function normalizeSource(rawData, options) {
    return options.source ?
        Object.keys(options.source).reduce((sources, mediaType) => {
            sources[mediaType] = ensureHttps(options.source[mediaType]);
            return sources;
        }, {}) :
        null;
}

function normalizePosterUrl(data, container, staticBaseUrl, rawData, options) {
    if (options.posterUrl) return ensureHttps(options.posterUrl);

    return selectImageRendition(
        data.images,
        data.ratio,
        container.offsetWidth,
        staticBaseUrl
    );
}

function normalizeSrc(rawData, options, data) {
    let src;

    if (typeof rawData === 'object' && rawData.src) {
        src = rawData.src;
    } else if (typeof options === 'object' && options.src) {
        src = options.src;
    } else {
        src = selectVideoRendition(data.renditions, data.is360);
    }

    return src;
}

function normalizeHdSrc(data) {
    if (typeof data.src === 'object') {
        return data.src.HD;
    }

    return '';
}

function normalizeSdSrc(data) {
    if (typeof data.src === 'object') {
        return data.src.SD;
    }

    return '';
}

function normalizeHlsSrc(data) {
    if (typeof data.src === 'object') {
        return data.src.HLS;
    }

    return '';
}

function normalizeHlsHdSrc(data) {
    if (typeof data.src === 'object') {
        return data.src.HLSHD;
    }

    return '';
}

function normalizePreload(rawData, options) {
    return options.autoplay ? 'auto' : options.preload;
}

function normalizeSection(rawData, options) {
    return (
        (rawData.section && rawData.section.name) ||
        (options.section && options.section.name) ||
        ''
    );
}

function normalizeSubsection(rawData, options) {
    return (
        (rawData.subsection && rawData.subsection.name) ||
        (options.subsection && options.subsection.name) ||
        ''
    );
}

function normalizePlaylist(rawData, options) {
    let playlistId;
    let playlistName;
    let playlistUrl;
    let playlistSponsored;
    let playlistSponsoredBy;
    let playlistIsSponsor;
    let playlistSection;
    let playlistVideos;

    if (rawData.playlist) {
        playlistId = rawData.playlist.sourceId;
        playlistName = rawData.playlist.promotionalHeadline;
        playlistUrl = rawData.playlist.url;
        playlistSection = safeChain(rawData, 'playlist.section.displayName');

        try {
            playlistVideos = rawData.playlist.videos.edges
                .filter(curVideo => curVideo !== undefined)
                .map(edge => {
                    const {
                        url,
                        headline,
                        promotionalMedia,
                        renditions,
                        duration,
                        sourceId,
                        section,
                        advertisingProperties
                    } = edge.node;
                    return {
                        url,
                        duration,
                        section: section.name,
                        id: sourceId,
                        headline: headline && headline.default,
                        adSensitivity: advertisingProperties && advertisingProperties.sensitivity,
                        images:
                            (promotionalMedia &&
                                promotionalMedia.crops &&
                                promotionalMedia.crops.length &&
                                promotionalMedia.crops.reduce(
                                    (acc, next) =>
                                    next.renditions ? acc.concat(next.renditions) : acc, []
                                )) || [],
                        renditions
                    };
                });
        } catch (error) {
            logger.error(error);
        }
    } else if (rawData.playlist_refs) {
        const primaryPlaylist = rawData.playlist_refs.filter(
            playlist => playlist.is_primary
        )[0];
        if (primaryPlaylist) {
            playlistId = primaryPlaylist.data_id;
            playlistName = primaryPlaylist.headline;
            playlistUrl = primaryPlaylist.url;
            playlistSponsored = primaryPlaylist.sponsored;
            playlistSponsoredBy = primaryPlaylist.sponsored_by;
            playlistIsSponsor = primaryPlaylist.is_sponsor;
        }
    }

    return {
        id: playlistId || options.playlistId || '',
        headline: playlistName || options.playlistName || '',
        url: playlistUrl || options.playlistUrl || '',
        sponsored: pickValue([playlistSponsored, options.playlistSponsored], false),
        sponsoredBy: playlistSponsoredBy || options.playlistSponsoredBy || '',
        isPaidPost: pickValue(
            [playlistIsSponsor, options.playlistIsSponsor],
            false
        ),
        section: playlistSection,
        videos: playlistVideos || options.playlistVideos || []
    };
}

function normalizePlaybackType(data, options) {
    return selectPlaybackType({
        options,
        src: data.src,
        source: data.source,
        is360: data.is360
    });
}

//
// API
//

function normalizeData(rawData = {}, player) {
    const {
        container,
        staticBaseUrl
    } = player;
    const options = player.store.getState().player.options;

    const data = {};
    data.id = normalizeId(rawData, options);
    data.headline = normalizeHeadline(rawData, options);
    data.byline = normalizeByline(rawData, options);
    data.summary = normalizeSummary(rawData, options);
    data.series = normalizeSeries(rawData, options);
    data.duration = normalizeDuration(rawData, options);
    data.isLive = normalizeIsLive(rawData, options);
    data.is360 = normalizeIs360(rawData, options);
    data.isEmbeddedOnly = normalizeIsEmbeddedOnly(rawData, options);
    data.isDGPR = normalizeGDPR();
    data.ads = normalizeAds(rawData, options);
    data.adSensitivity = normalizeAdSensitivity(rawData, options);
    data.url = normalizeUrl(rawData, options);
    data.shortUrl = normalizeShortUrl(rawData, options);
    data.sponsorFor = normalizeSponsorFor(rawData, options);
    data.catalogueKeywords = normalizeCatalogueKeywords(rawData, options);
    data.timesTags = normalizeTimesTags(rawData, options);
    data.related = normalizeRelated(rawData, options);
    data.images = normalizeImages(rawData, options);
    data.videoCues = normalizeVideoCues(rawData, options);
    data.ratio = normalizeRatio(rawData, options);
    data.renditions = normalizeRenditions(rawData, options);
    data.source = normalizeSource(rawData, options);
    data.posterUrl = normalizePosterUrl(
        data,
        container,
        staticBaseUrl,
        rawData,
        options
    );
    data.src = normalizeSrc(rawData, options, data);
    data.hdSrc = normalizeHdSrc(data);
    data.sdSrc = normalizeSdSrc(data);
    data.hlsSrc = normalizeHlsSrc(data);
    data.hlsHdSrc = normalizeHlsHdSrc(data);
    data.preload = normalizePreload(rawData, options);
    data.section = normalizeSection(rawData, options);
    data.subsection = normalizeSubsection(rawData, options);
    data.playlist = normalizePlaylist(rawData, options);
    data.playbackType = normalizePlaybackType(data, options);

    return data;
}

export default normalizeData;



// WEBPACK FOOTER //
// ./src/util-nyt/normalize-data.js