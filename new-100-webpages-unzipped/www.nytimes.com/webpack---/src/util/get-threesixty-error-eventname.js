import isWebglSupported from './is-webgl-supported';
import isWebglEnabled from './is-webgl-enabled';

const getThreeSixtyErrorEventname = () => {
    let eventName = '360-error';
    if (!isWebglSupported()) {
        eventName = '360-webgl-not-supported';
    } else if (isWebglSupported() && !isWebglEnabled()) {
        eventName = '360-webgl-not-enabled';
    }
    return eventName;
};

export default getThreeSixtyErrorEventname;



// WEBPACK FOOTER //
// ./src/util/get-threesixty-error-eventname.js