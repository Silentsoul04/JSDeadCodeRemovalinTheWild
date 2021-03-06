var toInteger = require('./_to-integer'),
    defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING) {
    return function(that, pos) {
        var s = String(defined(that)),
            i = toInteger(pos),
            l = s.length,
            a, b;
        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ?
            TO_STRING ? s.charAt(i) : a :
            TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_string-at.js
// module id = 55
// module chunks = 1 2