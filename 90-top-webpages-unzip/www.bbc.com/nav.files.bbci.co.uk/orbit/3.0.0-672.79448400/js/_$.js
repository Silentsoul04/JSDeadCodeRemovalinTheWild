/** @lint */

/**
 * @module orb/_$
 */

define('orb/lib/_$',
    [
        'orb/lib/_nut',
        'orb/lib/_ready',
        'orb/lib/_anim',
        'orb/lib/_dom',
        'orb/lib/_event',
        'orb/lib/_classy',
        'orb/lib/_attr',
        'orb/lib/_str',
        'orb/lib/_script',
        'orb/lib/_template',
        'orb/lib/_onloadCSS'
    ],
    function (nut, ready, animator, dom, event, classy, attr, str, script, template, onloadCSS) {
        'use strict';

        var $ = nut,
            banner = $('#orb-banner')[0],
            header = $('#orb-header')[0];

        $.anim = animator.animate;
        $.ready = ready;
        $.remove = dom.remove;
        $.addEvent = event.addEvent;
        $.addClass = classy.addClass;
        $.removeClass = classy.removeClass;
        $.hasClass = classy.hasClass;
        $.getAttr = attr.getAttr;
        $.setAttr = attr.setAttr;
        $.str = str;
        $.script = script;
        $.template = template;
        $.onloadCSS = onloadCSS;

        $.client = {
            old_ie: $.hasClass(banner, 'orb-old-ie'),
            ie8: $.hasClass(banner, 'orb-ie8'),
            ie7: $.hasClass(banner, 'orb-ie7'),
            ie6: $.hasClass(banner, 'orb-ie6')
        };

        $.config = {
            fixed: $.hasClass(header, 'orb-fixed-width') || ($.client.old_ie),
            rtl: ($.getAttr(header, 'dir') === 'rtl')
        };

        /**
         Add CSS to the page.
         @param {String} the CSS string to be inserted into the page.
         */
        $.addCSS = function (css) {
            if (typeof css !== 'string' || css === '') {
                return false;
            }

            try {
                /* Work around for IE issue:
                 * IE wont play ball as .innerHMTL and .text on the head & style tag is read only for IE8
                 * See: http://msdn.microsoft.com/en-us/library/ms533897%28v=VS.85%29.aspx
                 */
                var styleElement = document.createElement('style');

                styleElement.type = 'text/css';

                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = css;
                }
                else {
                    styleElement.appendChild(document.createTextNode(css));
                }

                document.getElementsByTagName('head')[0].appendChild(styleElement);

                return true;
            }
            catch (e) {
                return false;
            }
        };

        /**
         Add HTML to the page.
         @param {element} the HTML node.
         @param {string} the HTML string to be inserted into the page.
         */
        $.addHTML = function (node, html) {
            if (node && node.tagName && html !== "") {
                node.innerHTML = html;
                return true;
            }
            else {
                return false;
            }
        };

        return $;
    }
);

