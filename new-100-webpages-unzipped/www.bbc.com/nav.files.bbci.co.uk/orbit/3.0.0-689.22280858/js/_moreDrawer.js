define('orb/features/_moreDrawer', ['orb/lib/_$', 'orb/nav'], function($, nav) {

    var navButton = $('#orb-nav-more')[0],
        FIRST_VISIBLE_CLASS = 'orb-first-visible';

    var content = document.createElement('div');
    content.setAttribute('id', 'orb-panel-more');
    $.addClass(content, 'orb-panel');


    function generateLinks() {

        var html = '<div class="orb-panel-content b-g-p b-r orb-nav-sec"><h2 id="orb-panel-more-title"></h2><ul>' + $('#orb-aside .orb-footer-primary-links ul')[0].innerHTML + '</ul></div>';
        content.innerHTML = html;
    }

    function layoutMorePanelContent() {
        // re-flow layout in response to changes
        // in the window dimensions
        var links = $('.orb-nav-links li'),
            morePanelLinks = $('#orb-panel-more li'),
            firstVisible = $('.orb-panel-content .' + FIRST_VISIBLE_CLASS),
            HIDE_CLASS = 'orb-panel-hide',
            visibleLinks = 0,
            mastheadDrawer = nav.getMastheadDrawer();


        for (var i = 0, len = links.length; i < len - 1; i++) { // length -1 for more link
            if (links[i].className.indexOf('orb-nav-hide') !== -1) {
                break;
            }
            visibleLinks++;
        }

        for (var j = 0, lenj = morePanelLinks.length; j < lenj; j++) {
            if (j < visibleLinks) {
                $.addClass(morePanelLinks[j], HIDE_CLASS);
            } else {
                $.removeClass(morePanelLinks[j], HIDE_CLASS);
            }
        }

        if (firstVisible.length) {
            $.removeClass(firstVisible[0], FIRST_VISIBLE_CLASS);
        }

        if (visibleLinks < morePanelLinks.length) {
            // some links are hidden (so we need a "more" menu)
            $.addClass(morePanelLinks[visibleLinks], FIRST_VISIBLE_CLASS);
        } else if (visibleLinks === morePanelLinks.length) {
            // all links are visible, hide the more panel
            var currentPanel = mastheadDrawer.getCurrentPanel();

            if (currentPanel && currentPanel.name === 'more') {
                mastheadDrawer.hidePanel();
            }
        }

        $('#orb-panel-more-title')[0].innerHTML = $('#orb-nav-more a')[0].innerHTML;
    }

    function exports() {
        nav.addDrawer('more', navButton, content);
        generateLinks();
        layoutMorePanelContent();
        $.addClass($('html')[0], 'orb-more-loaded');
    }

    exports.layoutMorePanelContent = layoutMorePanelContent;

    return exports;
});