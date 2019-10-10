import playbackTypes from '../player/playback/types';
import isNativeHlsSupported from '../util/is-native-hls-supported';
import isHlsjsSupported from '../util/is-hlsjs-supported';

const selectPlaybackType = ({
    options = {},
    src,
    source,
    is360 = false
}) => {
    const hasHlsRendition =
        (typeof src === 'string' && src.indexOf('.m3u8') !== -1) ||
        (src !== null && typeof src === 'object' && src.HLS);

    const isAudio =
        (typeof src === 'string' && src.match(/\.(mp3|wav)$/)) ||
        (source !== null &&
            typeof source === 'object' &&
            Object.keys(source).some(type => type.indexOf('audio') === 0));

    let playbackType;
    if (options.type === 'cinemagraph') {
        playbackType = playbackTypes.CINEMAGRAPH;
    } else if (isAudio) {
        playbackType = playbackTypes.AUDIO;
    } else if (hasHlsRendition) {
        if (is360 && isHlsjsSupported()) {
            playbackType = playbackTypes.THREESIXTY_HLSJS;
        } else if (isNativeHlsSupported()) {
            playbackType = playbackTypes.HLS;
        } else if (isHlsjsSupported()) {
            playbackType = playbackTypes.HLSJS;
        }
    } else {
        playbackType = is360 ?
            playbackTypes.THREESIXTY_PROGRESSIVE_DOWNLOAD :
            playbackTypes.PROGRESSIVE_DOWNLOAD;
    }
    return playbackType;
};

export default selectPlaybackType;



// WEBPACK FOOTER //
// ./src/util-nyt/select-playback-type.js