// 7.1.4 ToInteger
var ceil = Math.ceil,
    floor = Math.floor;
module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_to-integer.js
// module id = 32
// module chunks = 1 2