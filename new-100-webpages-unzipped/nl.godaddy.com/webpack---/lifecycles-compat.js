/**
 * This is a stub for the `react-lifecycles-compat` library. We don't need
 * that compat library, but some components may end up pulling it in, so
 * we're replacing it here with an identity function.
 *
 * @param {*} thing It could be anything
 * @returns {*} The thing you gave me
 */
export function polyfill(thing) {
    return thing;
}



// WEBPACK FOOTER //
// ./lifecycles-compat.js