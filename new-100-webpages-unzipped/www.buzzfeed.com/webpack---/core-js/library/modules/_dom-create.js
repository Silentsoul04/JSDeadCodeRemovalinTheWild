var isObject = require('./_is-object'),
    document = require('./_global').document
    // in old IE typeof document.createElement is 'object'
    ,
    is = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return is ? document.createElement(it) : {};
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_dom-create.js
// module id = 19
// module chunks = 1 2