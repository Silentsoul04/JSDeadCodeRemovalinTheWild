var shared = require('./_shared')('keys'),
    uid = require('./_uid');
module.exports = function(key) {
    return shared[key] || (shared[key] = uid(key));
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_shared-key.js
// module id = 34
// module chunks = 1 2