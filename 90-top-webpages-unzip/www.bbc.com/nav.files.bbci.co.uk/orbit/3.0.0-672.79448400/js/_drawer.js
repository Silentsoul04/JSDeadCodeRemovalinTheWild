/** @lint */

/**
 * @module orb/features/masthead/_drawer
 */
define('orb/features/masthead/_drawer', ['orb/lib/_$', 'orb/lib/_event'], function ($, event) {
    'use strict';

    /**
        A Drawer is a kind of Widget that opens and can have multiple panels of content.
        @public
        @class Drawer
        @memberof module:orb/masthead
        
        @param {HTMLDOMElement} contentElement - The HTML element that contains the panel content. This will animate open and closed as appropriate.
        @property {module:orb/masthead.Drawer.Panel | null} _currentPanel - Which panel is currently shown?
        @property {Object<{string} name: {module:orb/masthead.Drawer.Panel} panel>} panels - A list of all panels in this panel.
     */

    var Drawer = function (contentElement) {
        event.mixin(this);
        this.content = contentElement;
        this._currentPanel = null; // The currently active panel
        this.panels = {};
        this.panelName = null; // The panel that is being activated - may not be fully active
    };

    /**
        Add a panel to this drawer.
        @public
        @method addPanel
        @memberof module:orb/masthead.Drawer.prototype

        @param {module:orb/masthead.Drawer.Panel} panel - A panel to add to this drawer.
     */
    Drawer.prototype.addPanel = function (panel) {
        this.panels[panel.name] = panel;
        panel.drawer = this;
        return this;
    };
    
    /**
        Get the named panel. If no name is given, return whatever the current panel is.
        @public
        @method getPanel
        @memberof module:orb/masthead.Drawer.prototype

        @param {string} [name] - The unique string identifer that names this panel.
     */
    Drawer.prototype.getPanel = function (name) {
        if (name) {
            return this.panels[name];
        }
        else {
            return this._currentPanel;
        }
    };

    // TODO Content has changed, need to make the drawer the right size
    Drawer.prototype.resize = function (name) {
        if (this._currentPanel && this._currentPanel.name === name) {
            var newHeight = this.panels[name].content.offsetHeight + 'px';
            $('#orb-panels')[0].style.height = newHeight;
        }
    };

    /**
        Show the panel with the given name if it is not currently shown.
        @public
        @method showPanel
        @memberof module:orb/masthead.Drawer.prototype

        @param {string} panelName - The name of the {@link module:orb/masthead.Drawer.Panel} to show.
        If state is changing from no panel shown then the drawer content element will animate open.
     */
    Drawer.prototype.showPanel = function (panelName) {
        var current = this._currentPanel;
        // no panel is showing, so the containing drawer must be inactive, so activate it
        if (current === null) {
            this.panelName = panelName;
            this.event('onActivate').fire({});
            this._currentPanel = this.panels[panelName];

            // Publish the new state of the panel
            this._currentPanel.publishState('shown');
        }
        // the panel being shown is already showing, so hide it
        else if (current && current.name === panelName) {
            this.hidePanel();
        }
        // some other panel is showing, so swap out the old panel for the new panel
        else {
            this.deactivatedPanelName = this._currentPanel.name;
            
            // Call the state change callback of the deactivated panel to give the new state
            this._currentPanel.publishState('hidden');

            this.panelName = panelName;
            this._currentPanel = this.panels[panelName];
            this.event('onSwapContents').fire({});
            this._currentPanel.publishState('shown');
        }
    };

    /**
        Hide the currently shown {@link module:orb/masthead.Drawer.Panel}, if any. If state is changing from any panel shown then the drawer content element will animate closed.
        @public
        @method hidePanel
        @memberof module:orb/masthead.Drawer.prototype
     */
    Drawer.prototype.hidePanel = function () {
        var current = this._currentPanel;
        
        // some panel is showing, so close it
        if (current !== null) {
            this.event('onDeactivate').fire({});
            current.publishState('hidden');
            
            this.panelName = null;
            this._currentPanel = null;
        }
    };
    
    Drawer.prototype.activate = function () {
        if (this._currentPanel) {
            this.showPanel(this._currentPanel.name); // fires onActivate
        }
    };
    
    Drawer.prototype.deactivate = function () {
        this.hidePanel(); // fires onDeactivate
    };

    Drawer.prototype.getCurrentPanel = function() {
        return this._currentPanel;
    }

    //-------------------------------------------------------------------//

    /**
        A Panel represents some content to be displayed inside a Drawer.
        @public
        @class Panel
        @memberof module:orb/masthead.Drawer
        
        @param {string} name
        @param {object} panelDom
        @param {HTMLDOMElement} panelDom.control
        @param {HTMLDOMElement} panelDom.content
        @param {function} stateChangeCallback
     */

    Drawer.Panel = function (name, panelDom, stateChangeCallback) {
        this.name = name;
        if (panelDom) {
            this.control = panelDom.control;
            this.content = panelDom.content;
        }
            
        this.publishState = function(newState) {
            
            if (typeof this.stateChangeCallback == 'function') {
                
                // Call the callback with global context
                this.stateChangeCallback.call(null, newState);
            }
        };
            
        if (typeof stateChangeCallback === 'function') {
            this.stateChangeCallback = stateChangeCallback;
        }
        event.mixin(this);
    };

    return Drawer;
});
