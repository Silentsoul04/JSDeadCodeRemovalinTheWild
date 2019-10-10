// @flow
/**
 * Binds an handler to a desired context.
 * @param {any} thisObj - The handler context.
 * @param {Function} fn - The handler.
 * @returns {Function} - The new bound function.
 * @public
 */
function bindMethod(thisObj: any, fn: Function): Function {
    return function() {
        fn.apply(thisObj, arguments);
    };
}

export {
    bindMethod
};



// WEBPACK FOOTER //
// ./utils/bind-method.js


// WEBPACK FOOTER //
// ui/utils/bind-method.js