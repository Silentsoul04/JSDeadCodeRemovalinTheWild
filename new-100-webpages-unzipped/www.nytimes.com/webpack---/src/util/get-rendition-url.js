const getRenditionUrl = (src, isMediaHD) => {
    let selectedUrl;
    if (typeof src === 'object') {
        if (isMediaHD && src.HD) {
            selectedUrl = src.HD;
        } else if (src.HLS) {
            selectedUrl = src.HLS;
        } else {
            selectedUrl = src.SD;
        }
    } else {
        selectedUrl = src;
    }
    return selectedUrl;
};

export default getRenditionUrl;



// WEBPACK FOOTER //
// ./src/util/get-rendition-url.js