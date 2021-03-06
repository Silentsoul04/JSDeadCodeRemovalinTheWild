// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal'),
    hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_object-gopn.js
// module id = 81
// module chunks = 1 2