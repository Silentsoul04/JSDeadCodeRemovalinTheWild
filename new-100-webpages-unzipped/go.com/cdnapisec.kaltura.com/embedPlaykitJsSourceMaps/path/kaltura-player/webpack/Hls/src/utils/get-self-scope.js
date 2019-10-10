export function getSelfScope() {
    // see https://stackoverflow.com/a/11237259/589493
    if (typeof window === 'undefined') {
        /* eslint-disable-next-line no-undef */
        return self;
    } else {
        return window;
    }
}



// WEBPACK FOOTER //
// webpack://Hls/src/utils/get-self-scope.js