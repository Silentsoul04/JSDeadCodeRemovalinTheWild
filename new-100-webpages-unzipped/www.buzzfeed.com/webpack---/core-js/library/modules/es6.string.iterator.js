'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated) {
    this._t = String(iterated); // target
    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
        value: undefined,
        done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
        value: point,
        done: false
    };
});


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/es6.string.iterator.js
// module id = 54
// module chunks = 1 2