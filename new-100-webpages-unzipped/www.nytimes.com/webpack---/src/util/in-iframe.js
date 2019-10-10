const inIframe = () => {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
};

export default inIframe;



// WEBPACK FOOTER //
// ./src/util/in-iframe.js