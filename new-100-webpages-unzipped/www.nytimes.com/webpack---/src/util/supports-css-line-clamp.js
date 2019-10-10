export default () => {
    try {
        return CSS.supports('-webkit-line-clamp', '2');
    } catch (error) {
        return false;
    }
};



// WEBPACK FOOTER //
// ./src/util/supports-css-line-clamp.js