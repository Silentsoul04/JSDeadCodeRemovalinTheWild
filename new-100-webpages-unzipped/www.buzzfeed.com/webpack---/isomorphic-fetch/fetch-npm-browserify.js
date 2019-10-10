/*** IMPORTS FROM imports-loader ***/
(function() {

    // the whatwg-fetch polyfill installs the fetch() function
    // on the global object (window or self)
    //
    // Return that as the export for use in Webpack, Browserify etc.
    require('whatwg-fetch');
    module.exports = self.fetch.bind(self);


    /*** EXPORTS FROM exports-loader ***/
    module.exports = global.fetch;
}.call(global));


//////////////////
// WEBPACK FOOTER
// ./~/imports-loader?this=>global!./~/exports-loader?global.fetch!./~/isomorphic-fetch/fetch-npm-browserify.js
// module id = 42
// module chunks = 1 2