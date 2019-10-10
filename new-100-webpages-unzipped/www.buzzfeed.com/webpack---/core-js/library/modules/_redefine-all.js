var hide = require('./_hide');
module.exports = function(target, src, safe) {
    for (var key in src) {
        if (safe && target[key]) target[key] = src[key];
        else hide(target, key, src[key]);
    }
    return target;
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_redefine-all.js
// module id = 113
// module chunks = 1 2