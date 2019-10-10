import supportH264 from './support-h264';
import supportWebM from './support-webm';

const getSupportedType = () => {
    if (supportH264()) {
        return 'mp4';
    } else if (supportWebM()) {
        return 'webm';
    }

    return '';
};

export default getSupportedType;



// WEBPACK FOOTER //
// ./src/util/get-supported-type.js