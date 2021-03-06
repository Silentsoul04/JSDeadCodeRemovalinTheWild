var classof = require('./_classof'),
    ITERATOR = require('./_wks')('iterator'),
    Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it) {
    if (it != undefined) return it[ITERATOR] ||
        it['@@iterator'] ||
        Iterators[classof(it)];
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/core.get-iterator-method.js
// module id = 99
// module chunks = 1 2