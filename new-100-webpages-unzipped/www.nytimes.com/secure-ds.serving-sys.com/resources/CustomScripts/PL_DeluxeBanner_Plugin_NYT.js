//***************
// NYTimes App does not properly/fullysupport MRAID, so we must disable the MRAID object so our ad serves as a normal web display ad.
if (window.mraid) {
    // we save a copy of the MRAID object so even though we don't serve as MRAID, we still can query the MRAID object for info
    window.szMraid = window.mraid;
    window.mraid = undefined;
    try {
        delete window.mraid;
    } catch (e) {}
}

// Turn off the feature flag that triggers asynchronous loading of mraid.js if window.mraid isn't found
if (window.ebO && ebO.ffs) ebO.ffs.CFF_DetectMraid = false;

// set the flag to disable mraid, regardless of tag type or window.mraid availability
if (window.ebO && ebO.adConfig) {
    if (!ebO.adConfig.customJSVars) ebO.adConfig.customJSVars = {};
    ebO.adConfig.customJSVars.mdForceDisableMRAID = true;
}

/* Author: Custom Format Group */

window.ebO && ebO.extensionHooks && ebO.extensionHooks.push(function(adConfig) {
    "use strict";

    //=================================================
    // Variables
    //-------------------------------------------------
    var scriptName = "PL_DeluxeBanner_Plugin_NYT";

    var scriptVersion = "2.1.4"; //you'll increase this by 0.0.1 each version until released, when it becomes 1.0.0
    var lastModified = "2018-08-20";
    var lastUploaded = "2018-08-20"; //this might be different to modified if it was uploaded 3 days later for example

    var templateVersion = "2.0.24"; //template version on which this custom script is based
    var isDebug = false; //For enabling/disabling the _self.log function

    var targetScript = "PL_DeluxeBanner"; //this is the script we'll be targeting for our overriding operations

    var adId = adConfig.adId;
    var rnd = adConfig.rnd;
    var uid = adConfig.uid;
    var _self; //our custom object with our functions and properties (not the same as ad or other script's _self)
    var targetScriptSelf; //the target script's _self object

    var adFilter = {
        myAd: uid
    };

    EBG.customFormats = EBG.customFormats || {};
    EBG.customFormats[uid] = EBG.customFormats[uid] || {};

    try {
        if (parent.EBG) {
            parent.EBG.customFormats = parent.EBG.customFormats || {};
            parent.EBG.customFormats[uid] = EBG.customFormats[uid];
        }
    } catch (e) {}
    //-------------------------------------------------

    //=================================================
    // Constructor
    //-------------------------------------------------
    /**
     * Creates the CustomFormat object.
     *
     * @constructor
     * @this {CustomFormat}
     */
    function CustomFormat() {
        _self = this; //use _self instead of this for guaranteed reference to this object and not window (on event handlers)

        EBG.API.EventManager.subscribeToEvent(EBG.Events.EventNames.CREATE_AD, _self.handlers.handleBeforeCreateAd, EBG.Events.EventTiming.BEFORE, adFilter);
    }
    //-------------------------------------------------

    //-------------------------------------------------------------------------------------------------------------------------------------------------------
    //=================================================
    // Public methods/functions/properties
    //-------------------------------------------------
    CustomFormat.prototype = {
        isDebug: isDebug, //this is only here so it can be overridden by a custom script plugin
        exclusionElementQuerySelector: undefined,
        exclusionHeight: 0, // this is the element that we'll be excluding from our height calculations
        prevExclusionHeight: undefined, // the previously-calculated exclusion height
        curWidth: undefined, // store current width to know if we should dispatch event for resize or not
        curHeight: undefined, // store current height to kno wif we should dipatch event for resize or not
        curGeomWin: {
            w: undefined,
            h: undefined
        }, // holder for cur safeframe API geom() win dimensions
        safeFrameFixTimeout: undefined, // timeout ID holder for publisher-based incorrect safeframe height fix
        currentOrientation: undefined, // store current orientation
        isFirstLandscape: undefined, // flag for first time we're processing a landscape after rotation
        isFirstPortrait: undefined, // flag for first time we're processing a portrait after rotation
        isBrokenSafeframe: false, // flag for storing whether the safeframe's height is broken in this orientation
        orientationFiredOnce: false, // flag for first orientation event firing
        checkIfResizedOnLoad: false, // flag to set if initial resize verification is required
        //if you want to override an event handler, overwrite its entry in the handlers object to point to your function
        //=================================================
        // Event Handlers
        //-------------------------------------------------
        handlers: {
            // In the event of having more than 1 subscription for a specific event/timing pair, just number each one (including the first, e.g.: SHOW_AD_BEFORE1)
            handleBeforeCreateAd: function() {
                return _self._handleBeforeCreateAd.apply(this, arguments);
            },
            handleBeforeShowAdOverrider: function() {
                return _self._handleBeforeShowAdOverrider.apply(this, arguments);
            },
            handleCreativeContainerReadyOverrider: function() {
                return _self._handleCreativeContainerReadyOverrider.apply(this, arguments);
            },
            registerListeners: function() {
                return _self._registerListeners.apply(this, arguments);
            },
            mraidError: function() {
                return _self._mraidError.apply(this, arguments);
            },
            mraidStateChange: function() {
                return _self._mraidStateChange.apply(this, arguments);
            },
            mraidViewableChange: function() {
                return _self._mraidViewableChange.apply(this, arguments);
            },
            mraidSizeChange: function() {
                return _self._mraidSizeChange.apply(this, arguments);
            }
        },

        messageHandlers: {
            setCreativeVersion: function(msg) {
                if (msg.data.creativeVersion) {
                    targetScriptSelf.handleSetCreativeVersion(msg.data);
                    // wait to dispatch the scroll position to be sure the subscription to scroll event has completed

                    window.setTimeout(function() {
                        targetScriptSelf.isBannerReady = true;
                        targetScriptSelf.dispatchScrollPos();

                        if (window.$sf && $sf.ext && $sf.ext.geom) {
                            var sfObj = {};
                            sfObj.sfGeomObj = $sf.ext.geom();
                            targetScriptSelf.dispatchCustomScriptEvent('creativeResize', sfObj);
                        }

                        // even if NOT in MRAID, send viewability once, to let creative know that we shouldn't use CustomScriptEvent-based viewability
                        _self.sendViewability();
                    }, 250);

                }
            },
        },

        _handleBeforeCreateAd: function(event) {
            //we're only targeting one script here, we could loop through all in customFormats and overwrite something in all of them if we wanted
            _self.log("handleBeforeCreateAd");
            targetScriptSelf = EBG.customFormats[uid][targetScript];
            if (targetScriptSelf) {
                if (typeof targetScriptSelf.pluginScriptsPresent == "undefined") {
                    targetScriptSelf.pluginScriptsPresent = {};
                }
                targetScriptSelf.pluginScriptsPresent[scriptName] = {}; //put anything in that object you wish to share (or use a boolean)

                targetScriptSelf.originalBeforeShowAdHandler = targetScriptSelf._handleBeforeShowAd;
                targetScriptSelf._handleBeforeShowAd = _self.handlers.handleBeforeShowAdOverrider; //override original with this one's

            } else {
                _self.log("Could not find EBG.customFormats['" + uid + "']['" + targetScript + "']");
            }
        },

        _handleBeforeShowAdOverrider: function(event) {
            _self.log("_handleBeforeShowAdOverrider was executed");
            var heightReduxArray = targetScriptSelf.mdHeightDependency.split("|");
            var heightDependency = heightReduxArray.shift().toLowerCase();
            if (targetScriptSelf.mdWidthDependency.toLowerCase() == "browser_portrait" && heightDependency == "browser_portrait") {

                _self.checkIfResizedOnLoad = true;

                _self.exclusionElementQuerySelector = heightReduxArray.join(", ");

                // reset behavior back to "browser"
                targetScriptSelf.setDefault("mdWidthDependency", "browser", true);
                targetScriptSelf.setDefault("mdHeightDependency", "browser", true);

                targetScriptSelf.originalGetBrowserWidth = targetScriptSelf.getBrowserWidth;
                targetScriptSelf.originalGetBrowserHeight = targetScriptSelf.getBrowserHeight;
                targetScriptSelf.originalInitializeFriendlyIframeResizing = targetScriptSelf.initializeFriendlyIframeResizing;
                targetScriptSelf.originalResizeBanner = targetScriptSelf.resizeBanner;
                targetScriptSelf.originalDispatchScrollPos = targetScriptSelf.dispatchScrollPos;
                targetScriptSelf.originalCreativeContainerReadyHandler = targetScriptSelf._handleCreativeContainerReady;
                targetScriptSelf._handleCreativeContainerReady = _self.handlers.handleCreativeContainerReadyOverrider;

                // Subscribe to resize events for safeframes if we're in a safeframe environment
                if (window.$sf) {
                    targetScriptSelf.original_subscribeToResizeScrollOrientationDisplayWindow = targetScriptSelf._subscribeToResizeScrollOrientationDisplayWindow;
                    targetScriptSelf._subscribeToResizeScrollOrientationDisplayWindow = _self._subscribeToResizeScrollOrientationDisplayWindowOverrider;

                    targetScriptSelf.original_handleOntimeOrientation = targetScriptSelf._handleOntimeOrientation;
                    targetScriptSelf._handleOntimeOrientation = _self._handleOntimeOrientationOverrider;

                    targetScriptSelf.original_handleSetCreativeVersion = targetScriptSelf.handleSetCreativeVersion;
                    targetScriptSelf.handleSetCreativeVersion = _self.handleSetCreativeVersionOverrider;
                }

                targetScriptSelf.initializeFriendlyIframeResizing = _self.initializeFriendlyIframeResizingOverrider;
                targetScriptSelf.resizeBanner = _self.resizeBannerOverrider;
                targetScriptSelf.dispatchScrollPos = _self.dispatchScrollPosOverrider;

                if (window.szMraid) {
                    // override width/height detection to use MRAID functionality
                    targetScriptSelf.getBrowserWidth = _self.getBrowserWidthMRAID;
                    targetScriptSelf.getBrowserHeight = _self.getBrowserHeightMRAID;

                } else {
                    // functionality for getting width/height when not in mraid, but in NYT environment
                    targetScriptSelf.getBrowserWidth = _self.getBrowserWidthOverrider;
                    targetScriptSelf.getBrowserHeight = _self.getBrowserHeightOverrider;
                }
            }

            // sendMessage() Received Handlers (auto-bound in the originalBeforeShowAdHandler() for safeframe compatibility)
            targetScriptSelf.messageHandlers.setCreativeVersion = _self.messageHandlers.setCreativeVersion;

            if (window.szMraid) {
                if (szMraid.getState() === 'loading') {
                    szMraid.addEventListener('ready', _self.handlers.registerListeners);
                } else {
                    _self.handlers.registerListeners();
                }
            }

            // call original function from base script, passing it's return value back to the event dispatcher
            var retVal = targetScriptSelf.originalBeforeShowAdHandler(event);

            return retVal;
        },

        _registerListeners: function() {
            szMraid.addEventListener('error', _self.handlers.mraidError);
            szMraid.addEventListener('stateChange', _self.handlers.mraidStateChange);
            szMraid.addEventListener('viewableChange', _self.handlers.mraidViewableChange);
            szMraid.addEventListener('sizeChange', _self.handlers.mraidSizeChange);
            try {
                targetScriptSelf.resize();
            } catch (err) {
                _self.log("Registerred Listeners, Resize errored out, just catching and ignoring");
            }

        },

        _handleCreativeContainerReadyOverrider: function(event) {
            targetScriptSelf.originalCreativeContainerReadyHandler(event);

            if (_self.checkIfResizedOnLoad === true) {
                _self.checkIfResized();
            }
        },

        _mraidError: function(msg, action) {
            _self.log("mraidError msg: " + msg + " | action: " + action);
        },

        _mraidStateChange: function(state) {
            _self.log("mraidStateChange to " + state);
        },

        _mraidViewableChange: function(isViewable) {
            _self.log("mraidViewableChange : " + isViewable);
            _self.sendViewability();
        },

        _mraidSizeChange: function(w, h) {
            _self.log("mraidSizeChange to " + w + " x " + h);
        },

        //-------------------------------------------------
        //End of Event Handlers Section
        //=================================================
        getBrowserWidthMRAID: function(win) {
            var metrics;
            if (window.szMraid.getMaxSize) {
                metrics = szMraid.getMaxSize();
            } else {
                metrics = EBG.API.Adaptor.getViewPortMetrics(win);
            }
            return metrics.width;
        },

        getBrowserHeightMRAID: function(win) {
            var metrics;
            // use MRAID to get full browser height if possible
            if (window.szMraid.getMaxSize) {
                metrics = szMraid.getMaxSize();
            } else {
                // if MRAID fails to give us a value, we'll use our API instead
                metrics = EBG.API.Adaptor.getViewPortMetrics(win);
            }

            // height is portrait height always, so we simply get the larger of the two values
            return Math.max(metrics.width, metrics.height);
        },

        getBrowserWidthOverrider: function(win) {
            var widthTarget;
            if (targetScriptSelf.isInFriendlyIframe) {
                // If in friendly iframe, grab parent of that friendly iframe for width element
                widthTarget = targetScriptSelf.displayWin.frameElement.parentNode;
            } else {
                // Not in friendly iframe, setting target element to ebDiv's double parent element (the iframe's container itself)
                widthTarget = targetScriptSelf.ebDiv.parentNode.parentNode;
            }

            var metrics = targetScriptSelf.getElementMetrics(widthTarget);
            var returnWidth = metrics.width;
            if (window.$sf && $sf.ext && $sf.ext.geom) {
                var sfGeomObj = $sf.ext.geom();

                // only use the safeframe window width in portrait, since in landscape the window
                //  width is too wide, so we want to use the above getElementMetrics method instead
                if (sfGeomObj.win.h > sfGeomObj.win.w) {
                    returnWidth = sfGeomObj.win.w;
                }
            }
            return returnWidth;
        },

        getBrowserHeightOverrider: function(win) {
            var returnHeight;
            var isLandscape;
            if (window.$sf) {
                // in a safe frame, so using safe frame to detect browser height
                var sfGeomWin = $sf.ext.geom().win;
                isLandscape = sfGeomWin.w > sfGeomWin.h;

                // always get the larger of the two values, since the height is supposed to be the same in both orientations, and fullscreen in portrait
                returnHeight = Math.max(sfGeomWin.w, sfGeomWin.h);
            } else {
                // no safe frame, so using viewport metrics to get height
                var vpm = EBG.API.Adaptor.getViewPortMetrics(win);
                isLandscape = vpm.width > vpm.height;
                returnHeight = isLandscape ? Math.max(vpm.width, vpm.height) : vpm.height - _self.exclusionHeight;
            }
            _self.initializeFriendlyIframeResizingOverrider();

            return returnHeight;
        },

        calcExclusionHeight: function() {
            if (_self.exclusionElementQuerySelector) {
                var doc = targetScriptSelf.isInFriendlyIframe ? targetScriptSelf.pm.topWin.document : document;

                var exclusionElement = doc.querySelector(_self.exclusionElementQuerySelector);
                if (!exclusionElement) return;
                var exclElMetrics = targetScriptSelf.getElementMetrics(exclusionElement);
                var articleElem = doc.querySelector(".article-page"); // max-height of sticky-ness
                if (!articleElem) return;
                var artElMetrics = targetScriptSelf.getElementMetrics(articleElem);
                var pageMetrics = EBG.API.Adaptor.getPageMetrics(targetScriptSelf.pm.topWin);

                _self.exclusionHeight = exclusionElement ? Math.min(exclElMetrics.height, Math.max(0, artElMetrics.height - pageMetrics.scrollTop + exclElMetrics.height)) : 0;
                if (_self.exclusionHeight != _self.prevExclusionHeight) {
                    _self.prevExclusionHeight = _self.exclusionHeight;
                    targetScriptSelf.resize();
                }
            }
        },

        dispatchScrollPosOverrider: function(useDelay) {
            targetScriptSelf.originalDispatchScrollPos(useDelay);
            if (!useDelay) {
                _self.calcExclusionHeight();
            }

        },

        initializeFriendlyIframeResizingOverrider: function() {
            targetScriptSelf.originalInitializeFriendlyIframeResizing();
            _self.calcExclusionHeight();

        },

        resizeBannerOverrider: function(w, h) {
            // only process resize event if we're changing sizes, otherwise no point
            if (_self.curWidth == w && _self.curHeight == h) return;

            targetScriptSelf.originalResizeBanner(w, h);
            var sfObj;
            if (w != _self.curWidth || h != _self.curHeight) {
                sfObj = {
                    width: w,
                    height: h
                };
                if (window.$sf && $sf.ext && $sf.ext.geom) sfObj.sfGeomObj = $sf.ext.geom();
                targetScriptSelf.dispatchCustomScriptEvent('creativeResize', sfObj);
                _self.curWidth = w;
                _self.curHeight = h;
            }

            if (window.$sf) _self.safeFrameFix();
        },

        // safeFrameFix only used with mdWidthDependency of browser_portrait (AKA Mobile Flex XL)
        safeFrameFix: function() {
            if (window.$sf) {
                var safeframeFixFunc = function() {
                    var sfGeomObj = $sf.ext.geom();
                    var w = sfGeomObj.self.w;
                    var h = sfGeomObj.self.h;
                    // if (h != _self.curHeight && h >= targetScriptSelf.mdMinimumHeight) { // tg removed
                    if ((h != _self.curHeight && h >= targetScriptSelf.mdMinimumHeight) || (w != _self.curWidth && w >= targetScriptSelf.mdMinimumWidth)) { // tg added check for width
                        _self.isBrokenSafeFrame = true;
                        targetScriptSelf.originalResizeBanner(w, h);
                        targetScriptSelf.dispatchCustomScriptEvent('creativeResize', {
                            "width": w,
                            "height": h,
                            "sfGeomObj": sfGeomObj
                        });
                        _self.curWidth = w;
                        _self.curHeight = h;
                    }
                };
                if (_self.safeFrameFixTimeout) window.clearTimeout(_self.safeFrameFixTimeout);
                _self.safeFrameFixTimeout = window.setTimeout(safeframeFixFunc, 500);
            }
        },

        // checkIfResized only used with mdWidthDependency of browser_portrait (AKA Mobile Flex XL)
        checkIfResized: function() {
            _self.log("checkIfResized");

            var bnrIFrmBoundRect = EBG.API.Adaptor.getElementMetrics(EBG.API.Banner.getElements(uid).banner);

            if ((bnrIFrmBoundRect.width <= targetScriptSelf.mdMinimumWidth) || (bnrIFrmBoundRect.height <= targetScriptSelf.mdMinimumHeight)) {
                _self.resizeBannerOverrider();
            }
        },

        _handleOntimeOrientationOverrider: function(event) {
            // resizing was not occurring correctly on rotation, below code handles it
            targetScriptSelf.original_handleOntimeOrientation(event); // keep original 1 second

            if (!_self.orientationFiredOnce && window.$sf) {
                _self.safeFrameFix();
                window.setTimeout(_self.safeFrameFix, 600);
                _self.orientationFiredOnce = true;
            }
        },

        _subscribeToResizeScrollOrientationDisplayWindowOverrider: function() {
            // fake size register, doesn't effect the ad, but gives us access to the callback
            $sf && $sf.ext && $sf.ext.register(1, 1, _self._sfCallback);

            // call the original function we're overriding
            targetScriptSelf.original_subscribeToResizeScrollOrientationDisplayWindow();
        },

        handleSetCreativeVersionOverrider: function(event) {
            targetScriptSelf.original_handleSetCreativeVersion(event);

            var sfObj = {};
            if (window.$sf && $sf.ext && $sf.ext.geom) sfObj.sfGeomObj = $sf.ext.geom();
            targetScriptSelf.dispatchCustomScriptEvent('creativeResize', sfObj);


            if (_self.checkIfResizedOnLoad === true) {
                _self.checkIfResized();
            }
        },

        _sfCallback: function(id, msgName, data) {
            if (id == "geom-update") {
                var geomData = $sf.ext.geom();
                if (geomData.win.h > geomData.win.w) { // currently in portrait
                    if (_self.currentOrientation != "portrait") {
                        _self.isFirstPortrait = true;
                    } else {
                        _self.isFirstPortrait = false;
                    }

                    _self.isFirstLandscape = false;
                    _self.currentOrientation = "portrait";
                } else { // currently in landscape
                    if (_self.currentOrientation != "landscape") {
                        _self.isFirstLandscape = true;
                    } else {
                        _self.isFirstLandscape = false;
                    }

                    _self.isFirstPortrait = false;
                    _self.currentOrientation = "landscape";
                }

                // reset our flag
                if (_self.isFirstPortrait || _self.isFirstLandscape) {
                    _self.isBrokenSafeFrame = false;
                }

                // we don't care about iframe resize events in landscape, except when it's the FIRST time we are in landscape per rotation
                // we also don't want to do any resize attempts if the safeframe is detected as currently being broken
                // and only reacting if this height is different from our previous height
                if (!_self.isBrokenSafeFrame && (_self.curGeomWin.h != geomData.win.h) && (_self.currentOrientation == "portrait" || _self.isFirstLandscape)) {
                    targetScriptSelf.handlers.handleOntimePageResize();
                    _self.curGeomWin.w = geomData.win.w;
                    _self.curGeomWin.h = geomData.win.h;
                }
            }
        },

        sendViewability: function(viewEventName) {
            viewEventName = viewEventName || "viewabilityChange";
            _self.log("sendViewability() with event name " + viewEventName);
            if (!window.szMraid) {
                // even if NOT in MRAID, send viewability once, with isMRAID false property, to let creative know that we shouldn't use CustomScriptEvent-based viewability
                _self.log("sendViewability() - NOT in mraid, so telling that and cancelling this function");
                targetScriptSelf.dispatchCustomScriptEvent(viewEventName, {
                    "isMRAID": false
                });

                // set current function to empty function so we never send another event
                _self.sendViewability = function() {};
            } else {
                var isCurrentlyViewable = szMraid.isViewable();
                _self.log("sendViewability() - In mraid, so telling creative in MRAID and saying viewability is currently " + isCurrentlyViewable);
                targetScriptSelf.dispatchCustomScriptEvent(viewEventName, {
                    "isMRAID": true,
                    "isViewable": isCurrentlyViewable
                });
            }
        },

        //=================================================
        // Utility Functions
        //-------------------------------------------------
        log: function() { // this is a closure-compiled version of the original code
            if (_self.isDebug) {
                var b, a;
                b = Array.prototype.slice.call(arguments);
                a = new Date();
                a = scriptName + " (" + a.getFullYear() + "-" + a.getMonth() + "-" + a.getDate() + " " + a.getHours() + ":" + (("0" + a.getMinutes()).slice(-2)) + ":" + (("0" + a.getSeconds()).slice(-2)) + "." + (("00" + a.getMilliseconds()).slice(-3)) + "): ";
                b.unshift(a);
                try {
                    window.console && console.log && (console.log.apply ? console.log.apply(console, b) : console.log(b));
                } catch (d) {}
                return b;
            }
        },

        reportCFVersions: function() {
            var saveDebug = _self.isDebug; //save current debug state
            _self.isDebug = true; //ensure it's true for this version log
            var delim = "",
                s = "reportCFVersions:uid:" + uid + ": ";
            for (var v in _self.versions) {
                if (_self.versions.hasOwnProperty(v)) {
                    s += (delim + v + ": " + _self.versions[v]);
                    delim = ", ";
                }
            }
            _self.log(s);
            _self.isDebug = saveDebug; //restore debug to what it was
        },

        versions: {
            "scriptVer": scriptVersion,
            "scriptLastMod": lastModified,
            "templateVer": templateVersion
        }
        //-------------------------------------------------
        //End of Utility Functions
        //=================================================
    };

    EBG.reportCFV = function() {
        for (var i in EBG.customFormats) {
            if (EBG.customFormats.hasOwnProperty(i)) {
                for (var x in EBG.customFormats[i]) {
                    if (EBG.customFormats[i].hasOwnProperty(x)) {
                        try {
                            EBG.customFormats[i][x].reportCFVersions();
                        } catch (e) {}
                    }
                }
            }
        }
    };

    /**************************************************************************/
    /*Initialization : Must be down here after the prototype is fully defined */
    /**************************************************************************/
    EBG.customFormats[uid][scriptName] = new CustomFormat(); //create our '_self' class object which holds all of our functionality
});