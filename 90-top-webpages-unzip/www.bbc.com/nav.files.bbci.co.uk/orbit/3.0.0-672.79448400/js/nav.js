/** @lint */

/**
 * @module orb/features/nav
 */
define('orb/nav', ['orb/lib/_$', 'orb/features/_drawerManager', 'orb/features/masthead/_drawer'], function ($, drawerManager, Drawer) {
    'use strict';

    var api = {
        loadCss: function (url, callback) {
            var stylesheet = loadCSS(url);

            if (typeof callback == 'function') {
                $.onloadCSS(stylesheet, callback);
            }
        },

        loadJs: function (url) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = url;
            script.async = true;
            document.getElementsByTagName("body")[0].appendChild(script);
        },

        addDrawer: function (panelName, control, content, stateChangeCallback) {

            var drawerElement = $('#orb-panels')[0];
            drawerElement.appendChild(content);

            var panel = new Drawer.Panel(panelName, {control: control, content: content}, stateChangeCallback);
            drawerManager.getMastheadDrawer().addPanel(panel);
            drawerManager.addPanelEvents(panel);
        },

        getDrawerState: function (panelName) {
            var drawer = drawerManager.getMastheadDrawer(),
                currentPanel = drawer.getCurrentPanel();

            return (currentPanel === null || currentPanel.name != panelName) ? 'hidden' : 'shown';
        },

        updateDrawerHeight: function (panelName) {
            var drawer = drawerManager.getMastheadDrawer();
            drawer.resize(panelName);
        },

        getMastheadDrawer: function () {
            return drawerManager.getMastheadDrawer();
        },

        refresh: function () {
            if (drawerManager.refreshNav) {
                drawerManager.refreshNav();
            }
        }
    };

    return api;
});
