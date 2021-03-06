require('./es6.array.iterator');
var global = require('./_global'),
    hide = require('./_hide'),
    Iterators = require('./_iterators'),
    TO_STRING_TAG = require('./_wks')('toStringTag');

for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
    var NAME = collections[i],
        Collection = global[NAME],
        proto = Collection && Collection.prototype;
    if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = Iterators.Array;
}


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/web.dom.iterable.js
// module id = 67
// module chunks = 1 2