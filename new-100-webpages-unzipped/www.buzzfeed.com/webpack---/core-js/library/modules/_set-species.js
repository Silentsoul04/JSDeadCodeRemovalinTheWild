'use strict';
var global = require('./_global'),
    core = require('./_core'),
    dP = require('./_object-dp'),
    DESCRIPTORS = require('./_descriptors'),
    SPECIES = require('./_wks')('species');

module.exports = function(KEY) {
    var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
        configurable: true,
        get: function() {
            return this;
        }
    });
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_set-species.js
// module id = 114
// module chunks = 1 2