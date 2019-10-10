var global = require('./_global'),
    SHARED = '__core-js_shared__',
    store = global[SHARED] || (global[SHARED] = {});
module.exports = function(key) {
    return store[key] || (store[key] = {});
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_shared.js
// module id = 35
// module chunks = 1 2