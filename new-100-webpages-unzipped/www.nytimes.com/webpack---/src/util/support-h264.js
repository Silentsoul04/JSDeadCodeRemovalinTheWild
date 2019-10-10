import canPlayType from './can-play-type';

const supportH264 = () => {
    const codec1 = 'video/mp4; codecs="avc1.42E01E"';
    const codec2 = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

    return canPlayType(codec1) || canPlayType(codec2);
};

export default supportH264;



// WEBPACK FOOTER //
// ./src/util/support-h264.js