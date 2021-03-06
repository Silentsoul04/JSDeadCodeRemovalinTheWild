// 7.1.15 ToLength
var toInteger = require('./_to-integer'),
    min = Math.min;
module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_to-length.js
// module id = 31
// module chunks = 1 2