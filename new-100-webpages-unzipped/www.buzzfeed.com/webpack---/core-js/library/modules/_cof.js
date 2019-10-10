var toString = {}.toString;

module.exports = function(it) {
    return toString.call(it).slice(8, -1);
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_cof.js
// module id = 28
// module chunks = 1 2