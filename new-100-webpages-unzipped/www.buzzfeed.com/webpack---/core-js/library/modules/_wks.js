var store = require('./_shared')('wks'),
    uid = require('./_uid'),
    Symbol = require('./_global').Symbol,
    USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name) {
    return store[name] || (store[name] =
        USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_wks.js
// module id = 65
// module chunks = 1 2