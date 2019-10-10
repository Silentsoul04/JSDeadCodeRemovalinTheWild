// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function() {
    return Object.defineProperty({}, 'a', {
        get: function() {
            return 7;
        }
    }).a != 7;
});


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_descriptors.js
// module id = 17
// module chunks = 1 2