// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_iobject.js
// module id = 27
// module chunks = 1 2