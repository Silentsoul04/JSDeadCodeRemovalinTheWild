var anObject = require('./_an-object'),
    get = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it) {
    var iterFn = get(it);
    if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/core.get-iterator.js
// module id = 98
// module chunks = 1 2