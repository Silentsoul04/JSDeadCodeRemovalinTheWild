const isHlsjsSupported = () => {
    window.MediaSource = window.MediaSource || window.WebKitMediaSource;
    return (
        window.MediaSource &&
        typeof window.MediaSource.isTypeSupported === 'function' &&
        window.MediaSource.isTypeSupported(
            'video/mp4; codecs="avc1.42E01E,mp4a.40.2"'
        )
    );
};

export default isHlsjsSupported;



// WEBPACK FOOTER //
// ./src/util/is-hlsjs-supported.js