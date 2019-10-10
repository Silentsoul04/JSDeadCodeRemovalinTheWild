/** @lint */

/**
 * @module orb/features/masthead/_linkmanager
 */

define('orb/features/masthead/_linkmanager', ['orb/lib/_$'], function($) {
    'use strict';

    var HIDE_CLASS = 'orb-nav-hide',
        exports;

    // TODO: Optimise this by using native Array.protoype.forEach if available
    var forEach = function(callback) {
        var that = this;

        if (typeof that.links === 'undefined') {
            return;
        }
        for (var i = 0, len = that.links.length; i < len; i++) {
            callback(that.links[i], i);
        }
    };

    exports = function(linkElements) {
        this.links = [];
        for (var i = 0, len = linkElements.length; i < len; i++) {
            this.links[i] = linkElements[i];
            //add linktrack data
            var text = (this.links[i].innerText || this.links[i].textContent).trim();
            this.links[i].linktrack = {
                'nav_link': text
            };
        }
    };

    exports.prototype.removeLink = function(index) {
        $.remove(this.links[index]);
        delete(this.links[index]);
    };

    exports.prototype.showAll = function() {
        forEach.call(this, function(link) {
            $.removeClass(link, HIDE_CLASS);
        });
    };

    /**
        Progressively hide links in reverse order
        @param {function} callback  A callback that returns true if a link is to be hidden
        @param {int} minimumLinks Minimum number of links to be shown. Below this, all are hidden
    */
    exports.prototype.hideToFit = function(callback, minimumLinks) {
        var hideAllLinks = false;

        var l = this.links.length;

        while (l--) {
            if (hideAllLinks || callback()) {
                $.addClass(this.links[l], HIDE_CLASS);
            } else {
                if (l < minimumLinks - 1) {
                    hideAllLinks = true;
                    l++;
                } else {
                    break;
                }
            }
        }
    };

    /**
        Remove links over a maximum limit
        @param {int} maximumLinks maximum to be applied
    */
    exports.prototype.applyMaximum = function(maximumLinks) {
        var that = this;
        forEach.call(this, function(link, index) {
            if (index >= maximumLinks) {
                that.removeLink(index);
            }
        });

        var newLinks = [];
        forEach.call(this, function(link) {
            if (link) {
                newLinks.push(link);
            }
        });

        this.links = newLinks;
    };

    /**
        Determine if the first link is visible in the current set
        @return {bool}
    */
    exports.prototype.hasVisible = function() {
        return (this.links[0] && this.links[0].className.indexOf(HIDE_CLASS) === -1);
    };

    /**
     * Get last link in the current set
     */
    exports.prototype.getLastItem = function() {
        return this.links.length ? this.links[this.links.length - 1] : null;
    };

    return exports;
});