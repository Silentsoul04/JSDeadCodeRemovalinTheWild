/* global parent */
/* eslint-disable no-restricted-globals */

const getParentHostname = () => {
    try {
        return parent.window.location.hostname;
    } catch (e) {
        return '';
    }
};

export default getParentHostname;



// WEBPACK FOOTER //
// ./src/util/get-parent-hostname.js