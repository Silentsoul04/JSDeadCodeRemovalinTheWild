// check on default Array iterator
var Iterators = require('./_iterators'),
    ITERATOR = require('./_wks')('iterator'),
    ArrayProto = Array.prototype;

module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_is-array-iter.js
// module id = 108
// module chunks = 1 2