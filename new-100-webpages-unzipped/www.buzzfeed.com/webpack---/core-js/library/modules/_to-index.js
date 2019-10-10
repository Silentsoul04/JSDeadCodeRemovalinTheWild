var toInteger = require('./_to-integer'),
    max = Math.max,
    min = Math.min;
module.exports = function(index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_to-index.js
// module id = 33
// module chunks = 1 2