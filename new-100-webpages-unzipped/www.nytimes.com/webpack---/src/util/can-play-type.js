const canPlayType = codec => {
    const videoElement = document.createElement('video');

    return (
        typeof videoElement.canPlayType === 'function' &&
        videoElement.canPlayType(codec) !== ''
    );
};

export default canPlayType;



// WEBPACK FOOTER //
// ./src/util/can-play-type.js