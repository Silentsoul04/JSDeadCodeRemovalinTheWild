var isObject = require('./_is-object');
module.exports = function(it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_an-object.js
// module id = 14
// module chunks = 1 2