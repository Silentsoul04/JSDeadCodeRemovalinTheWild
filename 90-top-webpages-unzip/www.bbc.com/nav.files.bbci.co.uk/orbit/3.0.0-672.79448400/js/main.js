/** @lint */

/**
    @overview Bootstrap for the ORB JavaScript preprocessing.
 */

var dependencies =  [
    // order matters
    'orb/features/_skiplinks',
    'orb/features/masthead/_layoutprimarynav'
];

function removeElement(array, elementToRemove) {
    return array.filter(function(element) {
        element !== elementToRemove
    });
}

if (window.bbcpage.isModal()) {
    dependencies = removeElement(dependencies, 'orb/features/masthead/_layoutprimarynav');
}

require(dependencies, function () {
        'use strict';
        for (var i = 0, l = arguments.length; i < l; i++) {
            arguments[i]();
        }
    }
);
