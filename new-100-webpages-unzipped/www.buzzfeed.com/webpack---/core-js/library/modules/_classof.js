// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof'),
    TAG = require('./_wks')('toStringTag')
    // ES3 wrong here
    ,
    ARG = cof(function() {
        return arguments;
    }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (e) { /* empty */ }
};

module.exports = function(it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        :
        typeof(T = tryGet(O = Object(it), TAG)) == 'string' ? T
        // builtinTag case
        :
        ARG ? cof(O)
        // ES3 arguments fallback
        :
        (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_classof.js
// module id = 100
// module chunks = 1 2