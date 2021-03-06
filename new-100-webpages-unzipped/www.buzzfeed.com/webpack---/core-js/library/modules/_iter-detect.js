var ITERATOR = require('./_wks')('iterator'),
    SAFE_CLOSING = false;

try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
        SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
        throw 2;
    });
} catch (e) { /* empty */ }

module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
        var arr = [7],
            iter = arr[ITERATOR]();
        iter.next = function() {
            return {
                done: safe = true
            };
        };
        arr[ITERATOR] = function() {
            return iter;
        };
        exec(arr);
    } catch (e) { /* empty */ }
    return safe;
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_iter-detect.js
// module id = 115
// module chunks = 1 2