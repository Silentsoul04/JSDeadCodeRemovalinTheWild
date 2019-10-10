import isNativeHlsSupported from 'src/util/is-native-hls-supported';
import isSafari from 'src/util/is-safari';
import getSupportedType from 'src/util/get-supported-type';
import isDesktop from 'src/util/is-desktop';
import isHlsjsSupported from 'src/util/is-hlsjs-supported';
import isSmartphone from 'src/util/is-smartphone';

/**
 * Get the closest rendition to the target dimensions
 *
 * @method closest
 * @param {Array} arr Array of renditions
 * @param {String} prop The prop of the rendition object to use i.e. 'height'
 * @param {Number} target The target number to be closest to
 * @return {Object} Returns the closest rendition to the target height
 */
const closest = (arr, target) => {
    if (arr.length === 0) return null;
    let smallest = arr[arr.length - 1];
    const prop = smallest.width < smallest.height ? 'width' : 'height';
    let smallestDiff = Math.abs(smallest[prop] - target);

    arr.forEach(rendition => {
        const diff = Math.abs(rendition[prop] - target);
        if (diff < smallestDiff) {
            smallest = rendition;
            smallestDiff = diff;
        }
    });
    return smallest;
};

/**
 * Get an array of renditions with just one file type extension
 *
 * @method filterByFileType
 * @param {String} type The file extension of the video to filter on i.e. 'mp4', 'webm', 'm3u8'
 * @param {Array} renditions An array of rendition objects
 * @return {Array} Returns an array of renditions of the specified extension i.e. mp4, webm
 */
const filterByFileType = (type, renditions) => {
    const heights = {};
    const arr = [];

    if (!Array.isArray(renditions)) {
        return arr;
    }

    renditions.forEach(rendition => {
        if (!(rendition.height in heights) &&
            rendition &&
            rendition.url &&
            rendition.url.indexOf(type) > -1
        ) {
            arr.push(rendition);
            heights[rendition.height] = true;
        }
    });

    return arr;
};

/**
 * Select the appropriate rendition for the browser and platform
 *
 * @method selectVideoRendition
 * @param {Array} renditions An array of rendition objects
 * @param {Boolean} is360 Whether or not a video is 360
 * @return {String || Object} Returns A string of the
 *                    selected rendition or an object
 *                    or HD and SD renditions
 */
const selectVideoRendition = (renditions, is360) => {
    const selectedRenditionUrls = {
        SD: '',
        HD: '',
        HLS: '',
        HLSHD: ''
    };
    const isPhone = isSmartphone();
    const shouldUseHls =
        (isNativeHlsSupported() || isHlsjsSupported()) && !(is360 && isSafari());
    if (shouldUseHls) {
        const desktopHlsRendition = renditions.find(
            rendition =>
            rendition.type === 'hls' ||
            (rendition.url &&
                ((rendition.url.indexOf('master.m3u8') !== -1 ||
                        rendition.url.indexOf('video.m3u8') !== -1) &&
                    rendition.url.indexOf('_mobile') === -1))
        );
        if (desktopHlsRendition) {
            selectedRenditionUrls.HLS = desktopHlsRendition.url;
            selectedRenditionUrls.HLSHD = desktopHlsRendition.url
                .replace('/master.m3u8', '__HD/master.m3u8')
                .replace('/video.m3u8', '__HD/video.m3u8');
        }
        if (isPhone) {
            const mobileHLSRendition = renditions.find(
                rendition => rendition.type === 'hls_mobile'
            );
            if (mobileHLSRendition) {
                selectedRenditionUrls.HLS = mobileHLSRendition.url;
                selectedRenditionUrls.HLSHD = mobileHLSRendition.url
                    .replace('/master.m3u8', '__HD/master.m3u8')
                    .replace('/video.m3u8', '__HD/video.m3u8');
            }
        }
    }

    // fallback progressive download
    const targetHeightSD = isDesktop() || is360 ? 480 : 360;
    const targetHeightHD = 720;
    const filteredRenditions = filterByFileType(
        `.${getSupportedType()}`,
        renditions
    );
    filteredRenditions.sort((a, b) => a.height - b.height);
    let renditionSD = closest(filteredRenditions, targetHeightSD);
    let renditionHD = closest(filteredRenditions, targetHeightHD);

    if (isPhone) {
        const filteredMobileRenditions = filterByFileType(
            `.${getSupportedType()}`,
            renditions.filter(
                rendition =>
                rendition.url &&
                rendition.url.indexOf('_mobile') !== -1 &&
                rendition.type.indexOf('hls') === -1
            )
        );
        if (filteredMobileRenditions.length) {
            renditionSD = closest(filteredMobileRenditions, targetHeightSD);
            renditionHD = closest(filteredMobileRenditions, targetHeightHD);
        }
    }

    if (renditionSD && renditionSD.url && renditionHD && renditionHD.url) {
        // If there is NO HLS rendition use the SD rendition selected
        if (!selectedRenditionUrls.SD) {
            selectedRenditionUrls.SD = renditionSD.url;
        }

        if (renditionSD !== renditionHD) {
            selectedRenditionUrls.HD = renditionHD.url;
        }
    }
    return selectedRenditionUrls;
};

export default selectVideoRendition;



// WEBPACK FOOTER //
// ./src/util-nyt/select-video-rendition.js