/**
 * MediaSource helper
 */

export function getMediaSource() {
    if (typeof window !== 'undefined') {
        return window.MediaSource || window.WebKitMediaSource;
    }
}



// WEBPACK FOOTER //
// webpack://Hls/src/utils/mediasource-helper.js