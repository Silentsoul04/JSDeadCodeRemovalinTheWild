// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_is-array.js
// module id = 79
// module chunks = 1 2