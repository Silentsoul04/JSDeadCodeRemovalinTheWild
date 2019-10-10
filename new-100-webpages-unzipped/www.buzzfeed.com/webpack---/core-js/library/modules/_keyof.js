var getKeys = require('./_object-keys'),
    toIObject = require('./_to-iobject');
module.exports = function(object, el) {
    var O = toIObject(object),
        keys = getKeys(O),
        length = keys.length,
        index = 0,
        key;
    while (length > index)
        if (O[key = keys[index++]] === el) return key;
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_keyof.js
// module id = 77
// module chunks = 1 2