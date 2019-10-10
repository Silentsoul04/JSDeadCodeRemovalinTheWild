import getDocument from './get-document';

/**
 * A method to load a script via the script tag to avoid cross-origin policy restrictions.
 * This is needed to load external libraries since they do not have CORS enabled.
 * Requires the page to have a head or body tag.
 *
 * @method getScriptNative
 * @param {Object} config A config object
 * @param {String} config.url The url of the script to load
 * @param {String} config.success The callback function on successful load
 * @param {String} config.error The callback function on error
 *
 * @returns {HTMLElement} script element
 */
const getScriptNative = (config, doc = getDocument()) => {
    let body;
    const scriptTag = document.createElement('script');
    const url = config.url;
    const callback = config.success;
    const errorCallback = config.error;

    scriptTag.type = 'text/javascript';
    scriptTag.src = url;
    scriptTag.onload = () => {
        if (typeof callback === 'function') {
            callback();
        }
    };
    scriptTag.onerror = error => {
        if (typeof errorCallback === 'function') {
            errorCallback(error);
        }
    };

    // Ensure we have a head or body to append the script tag to
    const head = doc.getElementsByTagName('head')[0];
    if (head) {
        head.appendChild(scriptTag);
    } else {
        body = doc.getElementsByTagName('body')[0];
        if (body) {
            body.appendChild(scriptTag);
        }
    }

    return scriptTag;
};

export default getScriptNative;



// WEBPACK FOOTER //
// ./src/util/get-script-native.js