module.exports = function(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
        throw TypeError(name + ': incorrect invocation!');
    }
    return it;
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_an-instance.js
// module id = 105
// module chunks = 1 2