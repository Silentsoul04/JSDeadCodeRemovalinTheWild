/** @lint */

/**
 * @module orb/features/_drawerManager
 */
define('orb/features/_drawerManager', ['orb/lib/_$', 'orb/features/masthead/_drawer'], function ($, Drawer) {
    'use strict';

    var drawerElement = $('#orb-panels')[0];
    var mastheadDrawer = new Drawer(drawerElement);
    var header = $('#orb-header')[0],
        NAV_HILITE = 'orb-nav-focus-on',
        ANIM_DURATION = 400,
        ACTIVE_PANEL_CLASS = 'orb-panel-active',
        ACTIVE_HEADER_CLASS = 'orb-nav-active',
        FIRST_VISIBLE_CLASS = 'orb-first-visible';

    /**
       Determine if a given DOM node currently has focus.
       @param {HTMLDOMNode | HTMLDOMNode[]} nodes - A node or an array of nodes.
       @returns {boolean}
    */
    function hasFocus(nodes) {
        var i;

        if (typeof nodes.length === 'undefined') {
            nodes = [nodes];
        }

        i = nodes.length;

        while (i--) {
            if (document.activeElement && document.activeElement === nodes[i]) {
                return true;
            }
            else if (document.focusNode && document.focusNode === nodes[i]) {
                return true;
            }
        }
        return false;
    }

    /**
        Implement the masthead drawer and panel feature.
        @author Michael Mathews
        @author Robin Murphy
        @author Nikos Tsouknidas
        @author Philip Whitehall
     */
    function exports(primaryNav) {

        var templateText,
            closePanelTimer = null;

        /**
            Dynamically calculate the equivalent pixel size of 1em within
            a given container element.
         */
        var getSizeOf1Em = (function () {
            if (window.getComputedStyle) {
                return function (el) {
                    el = el || document.body;
                    return (window.getComputedStyle(el).fontSize.replace('px', ''));
                };
            }
            else {
                return function (el) {
                    var testEl,
                        emSize;

                    el = el || document.body;
                    testEl = document.createElement('div');
                    testEl.style.margin = '0px';
                    testEl.style.padding = '0px';
                    testEl.style.border = 'none';
                    testEl.style.height = '1em';

                    el.appendChild(testEl);
                    emSize = testEl.offsetHeight;
                    el.removeChild(testEl);
                    return emSize;
                };
            }
        }());

        /**
            The masthead drawer/panel HTML is stored in the page DOM as a template.
            Note this method should only be called once.
         */
        function initDrawerDom() {
            var templateNode = $('#orb-panel-template')[0];

            if (templateNode) {
                templateText = templateNode.innerHTML;
                templateNode.parentNode.removeChild(templateNode);
            }
        }

        /**
            Given a parent node, return the first child of that parent node that is an element node.
            @param {HTMLDOMNode} parentNode
            @returns {HTMLDOMNode | null}
         */
        function firstElement(parentNode) {
            var ELEMENT_NODE = 1, // built-in browser constant
                node = parentNode.firstChild;

            while (node) {
                if (node.nodeType === ELEMENT_NODE) {
                    return node;
                }
                node = node.nextSibling;
            }
            return null;
        }

        /**
            Given the name of a panel, returns the HTML source code content to be displayed in the panel.
            @param {string} panelName - The name of the panel.
            @returns {string} The HTML source code to display in the panel.
         */
        function getPanelContent(panelName) {
            if (panelName === 'more') {
                return '<h2 id="orb-panel-more-title"></h2><ul>' + $('#orb-aside .orb-footer-primary-links ul')[0].innerHTML + '</ul>';
            }
            else {
                return '';
            }
        }

        /**
            Given the name of a panel, initialises the DOM content of that panel.
            @param {string} panelName - The name of the panel.
            @param {HTMLDOMNode} drawerElement - The DOM element that will contain the panel DOM.
            @returns {object} The DOM nodes representing the "control" and the "content" elements.
         */
        exports.initPanelDom = function (panelName, drawerElement) {
            var panelHTML,
                template = $.template(templateText),
                panelNode = document.createElement('div'),
                panelControl;

            panelHTML = template({
                panelcontent: getPanelContent(panelName),
                panelname: panelName
            });

            panelNode.innerHTML = panelHTML;
            panelNode = firstElement(panelNode).cloneNode(true);
            drawerElement.appendChild(panelNode);

            $.addClass($('.orb-panel-content')[0], 'orb-nav-sec');

            panelControl = $('#' + panelNode.getAttribute('aria-labelledby'))[0];
            if (panelControl) {
                $.setAttr(panelControl, 'aria-controls', panelNode.id);
            }

            return {control: panelControl, content: panelNode};
        };

        /**
            Given a panel object, perform the steps to animate that panel from a closed appearance to an open one.
            @param {Drawer.Panel} panel - The panel object to be opened.
         */
        function animPanelOpen(panel) {
            var controlElement = panel.control,
                panelHeight,
                focusTarget;

            if (!panel) {  // protect against timing edge cases possibly caused by multiple fast clicks
                return;
            }

            clearTimeout(closePanelTimer);

            // Add underline to panel link
            if (controlElement) {
                $.addClass(controlElement, NAV_HILITE);
            }

            // Open the drawer to the panel content's height
            mastheadDrawer.content.style.height = '0';
            panel.content.style.display = 'block';
            panelHeight = panel.content.offsetHeight;
            if (header.navMode === 'mouse') {
                $.anim(mastheadDrawer.content, {
                    height: panelHeight,
                    duration: ANIM_DURATION
                });
                $.setAttr(panel.content, 'tabindex', '-1');
                panel.content.focus();
            }
            else {
                $.anim(mastheadDrawer.content, {
                    height: panelHeight,
                    duration: 0
                });

                focusTarget = $('.' + FIRST_VISIBLE_CLASS + ' a', panel.content)[0] || $('.' + FIRST_VISIBLE_CLASS + ' a', panel.content)[0] || $('.orb-focus-target', panel.content)[0];
                if (focusTarget) {
                    focusTarget.focus();
                }
            }

            $.setAttr(mastheadDrawer.content, 'aria-expanded', 'true');
            $.addClass(mastheadDrawer.content, ACTIVE_PANEL_CLASS);
            $.addClass(header, ACTIVE_HEADER_CLASS);

        }

        /**
            Given a panel object, perform the steps to animate that panel from a open appearance to a closed one.
            @param {Drawer.Panel} panel - The panel object to be closed.
         */
        function animPanelClose(panel) {
            var controlElement = panel.control;

            if (!panel) { // prevent timing edge cases caused by double clicks
                return;
            }

            clearTimeout(closePanelTimer);

            if (header.navMode === 'mouse') {
                $.anim(mastheadDrawer.content, {
                    height: 0,
                    duration: ANIM_DURATION
                });
            }
            else {
                $.anim(mastheadDrawer.content, {
                    height: 0,
                    duration: 0
                });
            }

            closePanelTimer = setTimeout(function () {
                panel.content.style.display = 'none';
                $.removeClass(mastheadDrawer.content, ACTIVE_PANEL_CLASS);
                $.removeClass(header, ACTIVE_HEADER_CLASS);
                $.setAttr(mastheadDrawer.content, 'aria-expanded', 'false');

                if (controlElement) {
                    $.removeClass(controlElement, NAV_HILITE);
                }

            }, (header.navMode === 'mouse') ? ANIM_DURATION : 0);
        }

        /**
            Given two panel objects, perform the steps to animate the swap of these panels.
            @param {Drawer.Panel} currentPanel - The current panel object.
            @param {Drawer.Panel} activatedPanel - The panel object that was just activated.
         */
        function animPanelSwap(currentPanel, activatedPanel) {
            var currentControlElement = currentPanel.control,
                activatedControlElement = activatedPanel.control,
                panelHeight;

            currentPanel.content.style.display = 'none';
            activatedPanel.content.style.display = 'block';
            panelHeight = activatedPanel.content.offsetHeight;
            if (header.navMode === 'mouse') {
                $.anim(mastheadDrawer.content, {
                    height: panelHeight,
                    duration: ANIM_DURATION
                });
                $.setAttr(activatedPanel.content, 'tabindex', '-1');
                activatedPanel.content.focus();
            }
            else {
                $.anim(mastheadDrawer.content, {
                    height: panelHeight,
                    duration: 0
                });
                $('.' + FIRST_VISIBLE_CLASS + ' a', activatedPanel.content)[0].focus();
            }
            $.removeClass(currentControlElement, NAV_HILITE);
            $.addClass(activatedControlElement, NAV_HILITE);
        }

        /**
            The masthead tracks whether the user is navigating by mouse or keyboard, and
            exposes that as a property named "navmode".
         */
        function addMastheadEvents() {
            // feature behaviours may vary depending on the user's current mode of navigation
            $.addEvent(header, 'mousemove', function (e) {
                header.navMode = 'mouse';
            });
            $.addEvent(header, 'mousedown', function (e) {
                header.navMode = 'mouse';
            });
            $.addEvent(header, 'keydown', function (e) {
                header.navMode = 'keyboard';
            });
        }

        function resizePanelHeight(panel) {
            // If the drawer is open, resize it when the window resizes.
            if ($.hasClass(mastheadDrawer.content, ACTIVE_PANEL_CLASS)) {
                mastheadDrawer.content.style.height = panel.content.offsetHeight / getSizeOf1Em(mastheadDrawer.content) + 'em';
            }
        }

        /**
         * Re-flows panel layout in response to changes in the window dimensions
         */
        function layoutPanelContent() {

            //BLQDEV-149: Get the active panel
            var currentPanel = mastheadDrawer.getCurrentPanel();

            // Resizing the height of the active panel (if there is an active one)
            if (currentPanel !== null) {
                resizePanelHeight(currentPanel);
            }
        }

        // when the DOM is ready, we can initialise the more panel and the drawer that holds it
        $.ready(function () {
            initDrawerDom();

            header.drawer = mastheadDrawer;
            mastheadDrawer.event('onActivate').add(function () {
                var panel = mastheadDrawer.getPanel(mastheadDrawer.panelName);
                animPanelOpen(panel);
            });
            mastheadDrawer.event('onDeactivate').add(function () {
                var panel = mastheadDrawer.getPanel();
                animPanelClose(panel);
            });
            mastheadDrawer.event('onSwapContents').add(function () {
                var currentPanel = mastheadDrawer.panels[mastheadDrawer.deactivatedPanelName],
                    activatedPanel = mastheadDrawer.getPanel();

                animPanelSwap(currentPanel, activatedPanel);
            });

            layoutPanelContent();

            addMastheadEvents();

            primaryNav.event('afterLayout').add(layoutPanelContent);

        });

        exports.refreshNav = function() {
            primaryNav.recalculateLayout();
        };

     }

    /**
     Given a panel, add click handler to the panel's control which will tell
     the drawer to show that panel's content. Adds both mouse and keyboard
     navigation event handlers.
     @param {Drawer.Panel} panel - The panel to adent handlers to.
     */
    exports.addPanelEvents = function (panel) {
        var panelName = panel.name;
        // user pressed mouse, or return key, etc, on our panel link
        $.addEvent(panel.control, 'click', function (e) {
            panel.event('beforeshow').fire(e);
            mastheadDrawer.showPanel(panelName);
            panel.event('show').fire(e);

            if (e.preventDefault) {
                e.preventDefault();
            }
            else {
                e.returnValue = false;
            }

            return false;
        });

        // if escape key pressed while any panel has focus
        $.addEvent(header, 'keydown', function (e) {
            var charCode = (typeof e.which === 'number') ? e.which : e.keyCode;
            // close the drawer if either the drawer, an interactive element on the drawer or the drawer opener has focus
            if (charCode === 27 && (hasFocus(panel.control) || hasFocus($('a,button', panel.content)) || hasFocus(panel.content))) {

                mastheadDrawer.hidePanel(panelName);
                var controlLink = $('a', panel.control)[0];
                if (controlLink) {
                  controlLink.focus();
                }
            }
        });

    };

    exports.getMastheadDrawer = function() {
        return mastheadDrawer;
    };

    return exports;
});
