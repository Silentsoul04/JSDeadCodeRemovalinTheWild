// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject'),
    gOPN = require('./_object-gopn').f,
    toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ?
    Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it) {
    try {
        return gOPN(it);
    } catch (e) {
        return windowNames.slice();
    }
};

module.exports.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};



//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_object-gopn-ext.js
// module id = 80
// module chunks = 1 2