var core = require('../../modules/_core'),
    $JSON = core.JSON || (core.JSON = {
        stringify: JSON.stringify
    });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
    return $JSON.stringify.apply($JSON, arguments);
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/fn/json/stringify.js
// module id = 87
// module chunks = 1 2