// most Object methods by ES6 should accept primitives
var $export = require('./_export'),
    core = require('./_core'),
    fails = require('./_fails');
module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
        fn(1);
    }), 'Object', exp);
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_object-sap.js
// module id = 50
// module chunks = 1 2