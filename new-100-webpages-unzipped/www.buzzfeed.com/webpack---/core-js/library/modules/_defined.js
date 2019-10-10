// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_defined.js
// module id = 29
// module chunks = 1 2