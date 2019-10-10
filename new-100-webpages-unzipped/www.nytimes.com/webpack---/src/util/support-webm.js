import canPlayType from './can-play-type';

const supportWebm = () => {
    const webm = 'video/webm; codecs="vp8, vorbis"';

    return canPlayType(webm);
};

export default supportWebm;



// WEBPACK FOOTER //
// ./src/util/support-webm.js