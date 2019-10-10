import isWebglSupported from './is-webgl-supported';
import isWebglEnabled from './is-webgl-enabled';

const getThreeSixtyErrorMessage = () => {
    let message = '';
    if (!isWebglSupported() || !isWebglEnabled()) {
        message = "Your browser doesn't support 360 videos.";
    } else {
        message =
            'There was an error loading the 360 video. Please refresh to try again.';
    }
    return message;
};

export default getThreeSixtyErrorMessage;



// WEBPACK FOOTER //
// ./src/util/get-threesixty-error-message.js