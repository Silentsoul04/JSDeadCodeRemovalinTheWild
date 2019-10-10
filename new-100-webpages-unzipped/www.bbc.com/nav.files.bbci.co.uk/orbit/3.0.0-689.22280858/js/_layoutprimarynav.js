/** @lint */

/**
 * @module orb/features/masthead/_layoutprimarynav
 */

define('orb/features/masthead/_layoutprimarynav', ['orb/lib/_$', 'orb/lib/_event', 'orb/api', 'orb/features/masthead/_linkmanager', 'orb/fig', 'orb/features/_drawerManager', 'orb/features/_moreDrawer'],
    function($, event, api, LinkManager, orbFig, drawerManager, moreDrawer) {
        'use strict';

        /**
         Hide or show any nav items that can fit in the masthead at the current width.
         @author Michael Mathews
         */

        var linkManager = new LinkManager($('.orb-nav-links li').slice(0, -1)), // slice excludes more link
            layoutDone = false,
            search = $('.orb-nav-search')[0],
            menu = $('#orb-nav-more')[0],
            header = $('#orb-header')[0],
            container = $('.orb-nav-pri-container')[0],
            DYNAMIC_CLASS = 'orb-nav-dyn',
            EMPTY_CLASS = 'orb-nav-empty',
            LOCK_CLASS = 'orb-nav-lock',
            MIN_LINKS_TO_SHOW = 1,
            currentWidth = 0,
            menuLink = $('#orb-nav-more a')[0],
            menuText = menuLink.firstChild.data, // Menu
            moreText = $.getAttr(menuLink, 'data-alt'); // More

        function exports() {

            /**
             Replace primary links for the worldwide ones if the worldwide
             header or footer nav links are present
             */
            function replacePrimaryLinks() {
                var links = $('.orb-nav-links ul li');
                var worldWideNavLinksHtml = window.orb.worldwideNavlinks;

                if (worldWideNavLinksHtml) {
                    // replace domestic footer links
                    $('.orb-footer-primary-links ul')[0].innerHTML = worldWideNavLinksHtml;

                    // remove the domestic header links
                    for (var i = 0, l = links.length; i < l; i++) {
                        var link = links[i];
                        if (link.id !== 'orb-nav-more') {
                            $.remove(link);
                        }
                    }

                    // insert worldwide header links
                    $('#orb-nav-more')[0].insertAdjacentHTML('beforebegin', worldWideNavLinksHtml);
                }

                var worldwideFooterLinksHtml = window.orb.worldwideFooterlinks;

                if (worldwideFooterLinksHtml) {
                    // add worldwide advertisement links to the footer
                    $('#orb-contentinfo ul')[0].insertAdjacentHTML('beforeend', worldwideFooterLinksHtml);
                }

                // swap href for blocks
                var blocksEl = $('.orb-nav-blocks')[0].firstChild;
                var blocksHref = $.getAttr(blocksEl, 'href').replace('co.uk', 'com');

                $.setAttr(blocksEl, 'href', blocksHref);

                // create a new instance of the link manager if worldwide
                linkManager = new LinkManager($('.orb-nav-links li').slice(0, -1));
            }

            /**
             Hide or show navigation links.
             @fires $.events.beforeLayout
             @fires $.events.afterLayout
             */
            function hideShowNavItems() {
                var beforeLayout,
                    afterLayout,
                    e,
                    containerTop;

                beforeLayout = exports.event('beforeLayout');
                afterLayout = exports.event('afterLayout');
                e = {
                    links: linkManager.links
                };
                containerTop = container.offsetTop;

                // run any beforeLayout event handlers
                beforeLayout.fire(e);

                // hide the menu - maybe we won't need it
                hideMenu();

                // show all nav links
                linkManager.showAll();

                var lastItem = linkManager.getLastItem();

                if (search.offsetTop !== containerTop || !lastItem || lastItem.offsetTop !== containerTop) {

                    unhideMenuAndSetDefaults();

                    // hide as many nav links as needed to bring the more link back to the top
                    linkManager.hideToFit(function keepHidingWhile(index) {
                        if (menu.offsetTop !== containerTop || search.offsetTop !== containerTop) {
                            return true;
                        }
                    }, MIN_LINKS_TO_SHOW);

                }
                // run any afterLayout event handlers
                afterLayout.fire(e);
            }

            function hideMenu() {
                $.addClass(menu, 'orb-nav-hide');
            }

            function unhideMenuAndSetDefaults() {
                var moreWidth,
                    menuWidth,
                    maxWidth;

                $.removeClass(menu, 'orb-nav-hide');

                /**
                 * Reserve space for the larger of the two possible words ('Menu' or 'More')
                 * The width is initially calculated with "Menu"
                 * which in some languages may be much shorter than "More".
                 * In these cases, when "More" replaces "Menu" after layout
                 * there is not enough space for the word and it overflows from the <li>.
                 */
                // save More Link's style attribute to restore later
                var originalStyleAttribute = menuLink.getAttribute('style');
                menu.style.width = 'auto';
                menuLink.style.textIndent = '0';

                menuLink.firstChild.data = moreText;
                moreWidth = menu.offsetWidth;

                menuLink.firstChild.data = menuText;
                menuWidth = menu.offsetWidth;

                // Set the more item width to the width of the longest word
                maxWidth = Math.max(moreWidth, menuWidth);
                menu.style.width = maxWidth + 'px';

                // restore More Link's style attribute
                menuLink.setAttribute('style', originalStyleAttribute);
            }

            /**
             Keep wrapped nav items in the masthead from pushing the page content
             around during a window resize.
             */
            function lockMasthead() {
                $.addClass(container, LOCK_CLASS);
            }

            function unlockMasthead() {
                $.removeClass(container, LOCK_CLASS);
                api.trigger('layout', {
                    width: container.offsetWidth,
                    height: container.offsetHeight
                });
            }

            /**
             Responsible for deciding when to re-layout the masthead
             */
            function handleResize() {
                var throttle;
                var currentWidth = 0;

                return function() {
                    // FWGEL-754: Don't resize unless the width has changed
                    // iPhones fire window.resize when the address bar comes in/out of view
                    if (window.innerWidth === currentWidth) {
                        return;
                    }

                    currentWidth = window.innerWidth;

                    lockMasthead();

                    // we only run the layout code when a window resize has stopped
                    if (throttle) {
                        clearTimeout(throttle);
                    }
                    throttle = setTimeout(function() {
                        hideShowNavItems();
                        moreDrawer.layoutMorePanelContent();
                        unlockMasthead();
                    }, 100); // PAN
                }
            }

            /**
             Rearrange the layout in case notification comes after our layout is loaded
             */
            exports.recalculateLayout = function() {
                if (layoutDone) {
                    lockMasthead();
                    hideShowNavItems();
                    moreDrawer.layoutMorePanelContent();
                    handleExpandMenuItem();
                    unlockMasthead();
                }
            };

            /**
             If the primary nav has links showing we use the word "More" otherwise "Menu"
             @author Michael Mathews
             */
            function handleMenuOrMore() {

                /**
                 @param {object} e The event object
                 @param {DOMArray} e.links
                 */
                function onAfterLayout(e) {
                    if (linkManager.hasVisible()) {
                        menuLink.firstChild.data = moreText;
                    } else {
                        menuLink.firstChild.data = menuText;
                    }
                }

                exports.event('afterLayout').add(onAfterLayout);
            }

            /**
             Expand the width of the menu/more nav item to take up any remain space.
             @author Nikos Tsouknidas
             */
            function handleExpandMenuItem() {
                var nullElement = {
                        isNull: true,
                        offsetLeft: -1,
                        offsetWidth: 0
                    },
                    search = $('.orb-nav-search')[0] || nullElement,
                    links = $('#orb-nav-links')[0] || nullElement,
                    more = $('#orb-nav-more')[0] || nullElement,
                    id = $('.orb-nav-id')[0] || nullElement,
                    availableSpace = 0;

                if ($.config.rtl) {
                    if ($.client.ie6 || $.client.ie7) {
                        availableSpace = function() {
                            return search.offsetLeft + more.offsetLeft + 1; //PAN for IE7
                        };
                    } else {
                        availableSpace = function() {
                            return more.offsetLeft - (search.offsetLeft + search.offsetWidth);
                        };
                    }
                } else {
                    availableSpace = function() {
                        return search.offsetLeft - links.offsetLeft - links.offsetWidth;
                    };
                }

                /**
                 */
                function resizeMoreLink() {
                    more.style.width = more.offsetWidth + availableSpace() - 3 + 'px'; //PAN to try to account for rounding errors in subpixel css positioning
                }

                /**
                 */
                function onAfterLayout(e) {
                    resizeMoreLink();
                }

                exports.event('afterLayout').add(onAfterLayout);
            }

            function doLayout(fig) {
                var location = {
                    'uk': fig.geo.isUK()
                };

                if (window.orb && !location.uk) {
                    replacePrimaryLinks();
                }

                var maxLinks = (location.uk ? $.getAttr(header, 'data-max-d') : $.getAttr(header, 'data-max-w'));

                if (maxLinks !== '') {
                    linkManager.applyMaximum(maxLinks);
                }

                handleMenuOrMore(linkManager);
                handleExpandMenuItem();

                lockMasthead();
                $.addClass(header, DYNAMIC_CLASS);
                $.removeClass(header, EMPTY_CLASS);
                hideShowNavItems();
                unlockMasthead();

                layoutDone = true;

                drawerManager(exports);
                moreDrawer();

                if (!$.config.fixed) { // don't do resize for old versions of IE or fixed width pages
                    $.addEvent(window, 'resize', handleResize());

                    // handle rotation of device, re-layout after rotation is complete
                    $.addEvent(window, 'orientationchange', function() {
                        setTimeout(handleResize(), 100);
                    });
                }

            }

            // Do layout even if fig fails (using default UK data is fine)
            orbFig.load(doLayout, doLayout);

        }

        event.mixin(exports);
        return exports;

    });