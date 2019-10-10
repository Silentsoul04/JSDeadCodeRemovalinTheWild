/* Author: Custom Format Group */
window.ebO && ebO.extensionHooks && ebO.extensionHooks.push(function(adConfig) {
    "use strict";
    //=================================================
    // Variables
    //-------------------------------------------------
    var scriptName = "PL_DeluxeBanner";
    var scriptVersion = "2.0.0"; //you'll increase this by 0.0.1 each version until released, when it becomes 1.0.0
    var lastModified = "2017-11-02";
    var lastUploaded = "2017-11-02"; //this might be different to modified if it was uploaded 3 days later for example
    var templateVersion = "2.0.24"; //template version on which this custom script is based
    var isDebug = false; //For enabling/disabling the _self.log function (Set this to false on release)
    var useRequestLog = false;
    var progFormatID = 23; // change this to the ID of your format in the programmatic tool

    var adId = adConfig.adId; //we can't use API yet because EBG.ads is not populated yet
    var rnd = adConfig.rnd; //so none of the functions that take a uid as first parameter will work
    var uid = adConfig.uid; //including the one that gets or sets adConfig values
    var _self; //our custom object with our functions and properties (not the same as ad)
    var ad; //the ad object that we no longer extend
    var os;
    var browser;
    var adFilter = {
        myAd: uid
    };

    adConfig.enablePoliteForCS = true;
    // Below disables centering of placement, since we start off as a 1x1 we can't use this
    if (EBG.isMRAID()) adConfig.centerPlaceholderDiv = false;
    EBG.customFormats = EBG.customFormats || {};
    EBG.customFormats[uid] = EBG.customFormats[uid] || {};

    try {
        if (parent.EBG) {
            parent.EBG.customFormats = parent.EBG.customFormats || {};
            parent.EBG.customFormats[uid] = EBG.customFormats[uid];
        }
    } catch (e) {}
    //-------------------------------------------------

    var adSelf = null;

    var MyAd = function(adConfig) {
        EBG.callSuperConstructor(MyAd, this, [adConfig]);
    };

    MyAd.prototype = {
        _show: function() {
            adSelf = this;

            var shex = EBG.API.Ad.getAdData(uid, "uponShow") > 1 && EBG.API.Ad.shouldExpand(uid);

            _self.defaultCustomFormatVars = {
                //auto generated vars, not coming from platform

                mdIsAutoExpand: shex,
                mdWasAutoExpand: shex,
                mdAdBuilder: !!EBG.API.Ad.getAdData(uid, "adBuilder"),

                //vars that optionally come from the platform but are given defaults in case they're not set in the platform
                mdParentLevelsToResize: 0, //(if we see it's not 0 then we know it was set from platform and it triggers the code
                mdBackupImgPath: undefined, //e.g. "someassetpath" (if we see it's still undefined then we know it wasn't set from platform)
                mdAutoRepositionInterval: 0,
                mdIsDomainConfigEnabled: false,
                mdProgSettingsFolderPath: "//services.serving-sys.com/programmatic/DomainList/",
                mdResizeBehavior: "responsive",
                mdAlignment: "center",
                mdAnimateResize: false,
                mdAdaptiveBreakpoints: "300,600,900,1200",
                mdWidthDependency: "advertiserDiv",
                mdHeightDependency: "advertiserDiv",
                mdAspectRatio: "undefined",
                mdMinimumWidth: 0,
                mdMinimumHeight: 0,
                mdMaximumWidth: 0,
                mdMaximumHeight: 0,
                mdFixedWidth: 0,
                mdFixedHeight: 0,
                mdAutoHeightThreshold: 1,
                mdResizeFriendlyIframe: false
            };
            if (useRequestLog) _self.requestLog("Enabling Request debugger");
            _self.initCustomVarDefaults();

            //if custom vars testing function exists, call it now giving it the uid and _self
            if (window["ebCSOverride_" + adConfig.adId])
                window["ebCSOverride_" + adConfig.adId](uid, _self);

            var repos = parseInt(_self.mdAutoRepositionInterval, 10);
            if (!isNaN(repos) && repos > 0) {
                EBG.API.Ad.setAdData(uid, {
                    locationPolling: EBG.Initializer._setLocationPolling(repos), //force repos to between 10 and 100
                    forceLocationPolling: true //ensure client doesn't use mutationobserver
                });
            }

            var progMan = new _self.ProgrammaticManager(function(result) {
                // result is a key value object; key is file url and value is the call response.
                // we handle the result directly in our Programmatic Manager, however, so result is unused here

                //if custom vars testing function for after programmatic exists, call it now giving it the uid and _self
                if (window["ebCSOverrideAP_" + adConfig.adId])
                    window["ebCSOverrideAP_" + adConfig.adId](uid, _self);
                if (_self.isDebug) {
                    _self.log("Custom Var Values after programmatic logic");
                    for (var cusvar in adConfig.customJSVars) {
                        if (adConfig.customJSVars.hasOwnProperty(cusvar)) {
                            _self.log("[" + cusvar + "] == [" + adConfig.customJSVars[cusvar] + "]");
                        }
                    }
                }

                // Wait for MRAID to be ready if we're in an mraid environment, don't just load the ad yet without checking
                if (EBG.isMRAID() && typeof mraid.getState == "function" && mraid.getState() !== "default") {
                    _self.log("mraid not yet loaded -- state = " + mraid.getState());
                    mraid.addEventListener('ready', (function() {
                        return function() {
                            _self.log("mraid has now finished loading, about to show ad -- state = " + mraid.getState());
                            EBG.callSuperFunction(MyAd, adSelf, "_show", [adConfig]);
                        };
                    })());
                    return;
                }

                EBG.callSuperFunction(MyAd, adSelf, "_show", [adConfig]);
            });
        }
    };

    var eventSub = new EBG.Events.EventSubscription(EBG.Events.EventNames.CREATE_AD,
        function(event) {
            EBG.declareClass(MyAd, event.eventData.currentClass);
            event.eventData.currentClass = MyAd;
        });
    eventSub.timing = EBG.Events.EventTiming.BEFORE;
    eventSub.dispatcherFilters = {
        "_adConfig.rnd": rnd
    };
    EBG.eventMgr.subscribeToEvent(eventSub);

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

        EBG.API.EventManager.subscribeToEvent(EBG.Events.EventNames.SHOW_AD, _self.handlers.handleBeforeShowAd, EBG.Events.EventTiming.BEFORE, adFilter);

        // How to unsubscribe:
        // EBG.API.EventManager.unsubscribeFromEvent(EBG.Events.EventNames.SHOW_AD,_self.handlers.handleBeforeShowAd,EBG.Events.EventTiming.BEFORE,adFilter);
    }
    //-------------------------------------------------

    //-------------------------------------------------------------------------------------------------------------------------------------------------------

    //=================================================
    // Public methods/functions/properties
    //-------------------------------------------------
    CustomFormat.prototype = {
        isDebug: isDebug, //this is only here so it can be overridden by a custom script plugin
        defaultCustomFormatVars: undefined,
        isPolite: undefined,
        wasPolite: undefined,
        repositionInterval: undefined,
        displayWin: undefined,
        pageWin: undefined,
        subs: undefined,
        ebDiv: undefined,
        panels: undefined,
        iframe: undefined,
        bannerDiv: undefined,
        subscribedRSO: undefined,
        CCs: undefined,
        curScrollPos: {},
        capturedEyeDiv: null,
        isBannerReady: false,
        previewPosInterval: undefined,
        orientationTimeout: undefined,
        reposResizeTimeoutID: undefined,
        isAnimationEnabled: false,
        adDivAdapRecheck: function() {},
        pm: null,
        stylesheetOnLoad: undefined,
        //if you want to override an event handler, overwrite its entry in the handlers object to point to your function
        //=================================================
        // Event Handlers
        //-------------------------------------------------
        handlers: {
            // In the event of having more than 1 subscription for a specific event/timing pair, just number each one (including the first, e.g.: SHOW_AD_BEFORE1)
            handleBeforeShowAd: function() {
                return _self._handleBeforeShowAd.apply(this, arguments);
            },
            handleAfterShowAd: function() {
                return _self._handleAfterShowAd.apply(this, arguments);
            },
            handleCounterInteraction: function() {
                return _self._handleCounterInteraction.apply(this, arguments);
            },
            handleBeforeAddCreatives: function() {
                return _self._handleBeforeAddCreatives.apply(this, arguments);
            },
            handleAfterAddCreatives: function() {
                return _self._handleAfterAddCreatives.apply(this, arguments);
            },
            handleOntimePageResize: function() {
                return _self._handleOntimePageResize.apply(this, arguments);
            },
            handleOntimePageScroll: function() {
                return _self._handleOntimePageScroll.apply(this, arguments);
            },
            handleOntimeOrientation: function() {
                return _self._handleOntimeOrientation.apply(this, arguments);
            },
            handleAfterPageLoad: function() {
                return _self._handleAfterPageLoad.apply(this, arguments);
            },
            handleCreativeContainerReady: function() {
                return _self._handleCreativeContainerReady.apply(this, arguments);
            },
            handleBeforeAdUnload: function() {
                return _self._handleBeforeAdUnload.apply(this, arguments);
            },
            handleMessageReceived: function() {
                return _self._handleMessageReceived.apply(this, arguments);
            } //no comma
        },

        _handleBeforeShowAd: function(event) {
            _self.log("_handleBeforeShowAd: isDefaultImage=" + event.eventData.isDefaultImage + ", dlm=" + EBG.API.Ad.getAdData(uid, "dlm") + ", uponShow=" + EBG.API.Ad.getAdData(uid, "uponShow")); //add ,event if you want to see all properties traced
            EBG.API.EventManager.subscribeToEvent(EBG.Events.EventNames.SHOW_AD, _self.handlers.handleAfterShowAd, EBG.Events.EventTiming.AFTER, adFilter);
            if (event.eventData.isDefaultImage) return; // don't do anything else if we're just serving a default image
            ad = event.dispatcher;
            os = EBG.API.os;
            browser = EBG.API.browser;
            _self.isPolite = _self.wasPolite = EBG.API.Ad.getAdData(uid, "dlm") === 1;
            _self.repositionInterval = undefined;
            _self.displayWin = EBG.API.Adaptor.getDisplayWin();
            _self.pageWin = EBG.API.Adaptor.getPageWin();
            _self.displayWin.gEbPIT = _self.displayWin.gEbPIT || {};
            _self.subs = _self.displayWin.gEbPIT.subscriptions = _self.displayWin.gEbPIT.subscriptions || {};

            EBG.API.Adaptor.origSetStyleToElems = EBG.API.Adaptor.setStyleToElems;
            EBG.API.Adaptor.setStyleToElems = _self.setStyleToElems;

            EBG.API.EventManager.subscribeToEvent(EBG.Events.EventNames.ADD_CREATIVES, _self.handlers.handleBeforeAddCreatives, EBG.Events.EventTiming.BEFORE, adFilter);
            EBG.API.EventManager.subscribeToEvent(EBG.Events.EventNames.ADD_CREATIVES, _self.handlers.handleAfterAddCreatives, EBG.Events.EventTiming.AFTER, adFilter);
            EBG.API.EventManager.subscribeToEvent(EBG.Events.EventNames.CREATIVE_CONTAINER_READY, _self.handlers.handleCreativeContainerReady, EBG.Events.EventTiming.ONTIME, adFilter);
            EBG.API.EventManager.subscribeToEvent(EBG.Events.EventNames.AD_UNLOAD, _self.handlers.handleBeforeAdUnload, EBG.Events.EventTiming.BEFORE);
            _self.addWindowListener("message", "handleMessageReceived", _self.handlers["handleMessageReceived"]);
            //special safeframe handling for messages due to 'fake' pm messages
            if (EBG.adaptor.isSafeFrame()) {
                //this will subscribe to messages that are safeframe compatible
                for (var key in _self.messageHandlers) {
                    if (!_self.messageHandlers.hasOwnProperty(key)) continue;
                    //this line is for safeframe compatible pm message handling
                    EBG.pm.bind(key, _self.handlers["handleMessageReceived"], _self, _self.displayWin); //note: json will arrive in 'params', not 'event'
                }
            }
            EBG.API.EventManager.subscribeToEvent(EBG.Events.EventNames.PAGE_LOAD, _self.handlers.handleAfterPageLoad, EBG.Events.EventTiming.AFTER, adFilter);
            _self.pageWin.document.addEventListener("DOMContentLoaded", function() {
                _self.initializeResponsiveSizing();
            });
            _self.ebDiv = EBG.API.Ad.getPlaceholder(uid);
            _self.mdResizeBehavior = _self.mdResizeBehavior.toLowerCase();
            _self.mdAdaptiveBreakpoints = _self.parseAdaptiveBreakpoints(_self.mdAdaptiveBreakpoints);
            _self.mdAspectRatio = _self.parseAspectRatio(_self.mdAspectRatio);
            if (!_self.isPolite) {
                _self._subscribeToResizeScrollOrientation("_handleBeforeShowAd:not polite");
            }
        },

        _handleAfterShowAd: function(event) {
            _self.log("_handleAfterShowAd: isDefaultImage=" + event.eventData.isDefaultImage + ", dlm=" + EBG.API.Ad.getAdData(uid, "dlm") + ", uponShow=" + EBG.API.Ad.getAdData(uid, "uponShow")); //add ,event if you want to see all properties traced
            if (event.eventData.isDefaultImage && _self.mdBackupImgPath !== undefined) {
                _self.showFullSizedBackupImage(); //show full sized backup image and return
                return;
            }
            if (!_self.wasPolite) {
                // Since ad isn't set to be polite, this is when the creative is actually going to show
                _self.iframe = EBG.API.Banner.getElements(uid).banner;
                _self.bannerDiv = EBG.API.Banner.getElements(uid).bannerDiv;

                _self._onloadInjectCSSandJS(event); //if we aren't a polite load, now is the onload time to call this
                _self.initializeResponsiveSizing();
            }
        },

        _onloadInjectCSSandJS: function(event) {
            // Execute JS and inject CSS if any was used in Programmatic Settings
            if (EBG.API.Ad.getCustomVar(uid, "_mdCssOnLoad")) {
                _self.stylesheetOnLoad = _self.addStylesheetToHead(_self.tokenReplace(EBG.API.Ad.getCustomVar(uid, "_mdCssOnLoad"), event.dispatcher));
                _self.log("_onloadInjectCSSandJS: Injecting CSS on load; removing on unload? " + EBG.API.Ad.getCustomVar(uid, "_mdCssOnLoadRemoveOnUnload"), EBG.API.Ad.getCustomVar(uid, "_mdCssOnLoad"));
            }
            if (EBG.API.Ad.getCustomVar(uid, "_mdJsOnLoad")) {
                _self.execJS(_self.tokenReplace(EBG.API.Ad.getCustomVar(uid, "_mdJsOnLoad"), event.dispatcher));
                _self.log("_onloadInjectCSSandJS: Executing JS on load", EBG.API.Ad.getCustomVar(uid, "_mdJsOnLoad"));
            }
        },

        _handleBeforeAddCreatives: function(event) {
            _self.log("_handleBeforeAddCreatives:" + event.eventData.creativeType + ":panelName=" + (event.eventData.panelName || "banner")); //add ,event if you want to see all properties traced

            //check in event data for whether this is a banner or panel, and if a panel, which panel is it
            //you can then modify what you need to before the banner/panel are created. You can modify
            //the expand/collapse parameters here too. The ADD_CREATIVES is dispatched after the panel's
            //CC object is created with all the default parameters, but just before the HTML tags are
            //written to the page, so in addition to modify the expand/collapse params, you can also
            //modify the HTML tags that are about to be written.

            //if (event.eventData.creativeType === EBG.Events.EventNames.ADD_BANNER_PRELOAD_IMAGE_CREATIVE) {	//adding the preload img
            //}

            if (event.eventData.creativeType === EBG.Events.EventNames.ADD_HTML5_MAIN_CREATIVE) { //adding the HTML5 banner
                if (_self.isPolite) {
                    _self._subscribeToResizeScrollOrientation("_handleBeforeAddCreatives:banner:was polite");
                    _self.isPolite = false; //not polite anymore (note: we still have _self.wasPolite if we want to know if we 'were')
                }
            }
        },

        _handleAfterAddCreatives: function(event) {
            _self.log("_handleAfterAddCreatives:" + event.eventData.creativeType + ":panelName=" + (event.eventData.panelName || "banner")); //add ,event if you want to see all properties traced
        },

        _subscribeToResizeScrollOrientationDisplayWindow: function() {
            EBG.API.EventManager.subscribeToEvent(EBG.Events.EventNames.PAGE_RESIZE, _self.handlers.handleOntimePageResize, EBG.Events.EventTiming.ONTIME, adFilter);
            EBG.API.EventManager.subscribeToEvent(EBG.Events.EventNames.PAGE_SCROLL, _self.handlers.handleOntimePageScroll, EBG.Events.EventTiming.ONTIME, adFilter);
            EBG.API.EventManager.subscribeToEvent(EBG.Events.EventNames.SCREEN_ORIENTATION, _self.handlers.handleOntimeOrientation, EBG.Events.EventTiming.ONTIME);
        },

        _subscribeToResizeScrollOrientation: function(trig) {
            if (!_self.subscribedRSO) { //time to subscribe to Resize/Scroll/Orientation events, as long as we didn't already do that
                if (window != _self.pm.topWin) {
                    try {
                        EBG.API.EventManager.subscribeToElementEvent(_self.pm.topWin.document.body, "scroll", _self.handlers.handleOntimePageScroll, EBG.Events.EventTiming.ONTIME);
                    } catch (err) {}
                }
                _self._subscribeToResizeScrollOrientationDisplayWindow();
                _self.subscribedRSO = true;
                _self.log("_subscribeToResizeScrollOrientation: triggered by " + trig);
            }
        },

        _handleMessageReceived: function(event, params) {
            try {
                var msg = typeof event == "object" && event.data ? JSON.parse(event.data) :
                    /*typeof event == "undefined" && typeof params == "object" && params.data && typeof params.data == "string" ? JSON.parse(params.data) : // new for safeframe pm 'fake' dispatches
                    typeof params == "object" ? params : {};
                    */
                    typeof params == "object" && params.data && typeof params.data == "string" ? JSON.parse(params.data) :
                    typeof params == "object" && params.data && params.data.uid ? params : {};
                //only messages with matching uid are handled.
                //Don't change this code to match what your assets send, change your
                //assets to match this (you NEED to send uid for multiple ads on a page).
                if (msg.type && msg.data && msg.data.uid && msg.data.uid === uid && _self.messageHandlers.hasOwnProperty(msg.type)) {
                    _self.messageHandlers[msg.type](msg);
                }
            } catch (e) {
                //_self.log("_handleMessageReceived:catch", e);
            }
        },

        messageHandlers: {
            addCustomScriptEventListener: function(msg) {
                _self.subs[msg.data.listenerId] = msg.data;
                if (msg && msg.data && msg.data.eventName && msg.data.eventName == "pageScroll") {
                    _self.dispatchScrollPos();
                }
            },

            dispatchCustomScriptEvent: function(msg) {
                for (var i in _self.subs) {
                    if (!_self.subs[i]) continue;
                    var isEventMatch = _self.subs[i].eventName === msg.data.eventName;
                    var isCurrentAd = msg.data.uid === _self.subs[i].uid;
                    var isOutOfAdScope = !isCurrentAd && !msg.data.interAd;
                    if (!isEventMatch || isOutOfAdScope) continue;
                    if (_self.subs[i].callback) {
                        try {
                            _self.subs[i].callback(msg.data);
                        } catch (e) {
                            delete _self.subs[i]; //delete 'lost' listener
                        }
                    } else {
                        var listenerIds = [];
                        listenerIds[listenerIds.length] = _self.subs[i].listenerId;
                        msg.data.listenerIds = listenerIds;
                        try {
                            // need to send data type as a property in msg data for safe frames
                            msg.data.type = "eventCallback";
                            _self.CCs[_self.subs[i].creativeIFrameId]._sendMessage("eventCallback", msg.data);
                        } catch (error) {}
                    }
                }
            },

            removeCustomScriptEventListener: function(msg) {
                delete _self.subs[msg.data.listenerId];
            },

            removeAd: function() {
                _self.removeAd();
            },

            setCreativeVersion: function(msg) {
                if (msg.data.creativeVersion) {
                    _self.handleSetCreativeVersion(msg.data);
                    // wait to dispatch the scroll position to be sure the subscription to scroll event has completed

                    window.setTimeout(function() {
                        _self.isBannerReady = true;
                        _self.dispatchScrollPos();
                    }, 250);

                }
            },

            dispatchScrollPos: function() {
                // dispatch current scroll position so the banner knows where it is, if it's listening
                _self.dispatchScrollPos(true);
            }
        },

        _handleOntimePageResize: function(event) {
            _self.dispatchScrollPos();

            // Special case for when serving in an iframe and using responsive resizing
            // Fixes an issue where the width is incorrectly detected and never decreases, but only increases
            if ((EBG.isMRAID()) || (_self.mdResizeBehavior == "responsive" && _self.pm.topWin != _self.displayWin)) {

                // _self.removeFromFlowResize(isMRAID && os.ios);
                _self.removeFromFlowResize();

            } else {
                if (!_self.isOrientationChange && !_self.isResizing) {
                    _self.resize();
                }
            }
        },

        _handleOntimePageScroll: function(event) {
            _self.dispatchScrollPos();
        },

        _handleOntimeOrientation: function(event) {
            // resizing was not occurring correctly on rotation, below code handles it
            _self.removeFromFlowResize();

            _self.isOrientationChange = true;
            clearTimeout(_self.orientationTimeout);
            _self.orientationTimeout = setTimeout(function() {
                _self.isOrientationChange = false;
                _self.removeFromFlowResize();
            }, 1000);

        },

        _handleCreativeContainerReady: function(event) {
            _self.log("_handleCreativeContainerReady: " + (event.dispatcher.panelName || "banner"));
            if (_self.wasPolite && !event.dispatcher.panelName) {
                // since ad WAS polite, this is when the creative is actually going to load
                _self.iframe = EBG.API.Banner.getElements(uid).banner;
                _self.bannerDiv = EBG.API.Banner.getElements(uid).bannerDiv;
                _self._onloadInjectCSSandJS(event); //if we were a polite load, banner ready is our onload time to call this
                _self.initializeResponsiveSizing();
            }
            var ifrmCC = event.dispatcher;
            _self.CCs = _self.CCs || {};
            _self.CCs[ifrmCC.iframeId] = ifrmCC;
            ifrmCC._sendMessage("sendCreativeId", {
                type: "sendCreativeId",
                creativeIFrameId: ifrmCC.iframeId,
                uid: uid,
                viewport: EBG.API.Adaptor.getViewPortMetrics()
            });
        },

        _handleBeforeAdUnload: function(event) {
            //If anything is added to the publisher's page by us, this is where we need to remove it.

            _self.log("_handleBeforeAdUnload");
            // Execute JS and inject CSS if any was used in Programmatic Settings

            // remove any css that was injected on ad load if option selected to remove on ad unload
            if (EBG.API.Ad.getCustomVar(uid, "_mdCssOnLoad") && EBG.API.Ad.getCustomVar(uid, "_mdCssOnLoadRemoveOnUnload")) {
                _self.stylesheetOnLoad.parentNode.removeChild(_self.stylesheetOnLoad);
            }

            if (EBG.API.Ad.getCustomVar(uid, "_mdCssOnUnload")) {
                // inject CSS to top window
                _self.addStylesheetToHead(_self.tokenReplace(EBG.API.Ad.getCustomVar(uid, "_mdCssOnUnload"), event.dispatcher));
            }
            if (EBG.API.Ad.getCustomVar(uid, "_mdJsOnUnload")) {
                // execute JS on top window
                _self.execJS(_self.tokenReplace(EBG.API.Ad.getCustomVar(uid, "_mdJsOnUnload"), event.dispatcher));
            }
        },

        _handleAfterPageLoad: function(event) {
            _self.log("_handleAfterPageLoad: calling initializeResponsiveSizing");
            _self.initializeResponsiveSizing();
        },

        //-------------------------------------------------
        //End of Event Handlers Section
        //=================================================

        //=================================================
        // Custom Event Methods
        //-------------------------------------------------

        dispatchCustomScriptEvent: function(eventName, params) {
            var paramsData = {
                type: "dispatchCustomScriptEvent",
                data: params || {}
            };
            paramsData.data.uid = uid;
            paramsData.data.eventName = eventName;
            _self._handleMessageReceived(undefined, paramsData);
        },

        addCustomScriptEventListener: function(eventName, callback, interAd) {
            var data = {
                uid: uid,
                listenerId: Math.ceil(Math.random() * 1000000000),
                eventName: eventName,
                interAd: !!(interAd),
                callback: callback
            };
            _self._handleMessageReceived(undefined, {
                data: data,
                type: "addCustomScriptEventListener"
            });
            return data.listenerId;
        },

        removeCustomScriptEventListener: function(listenerId) {
            _self._handleMessageReceived(undefined, {
                data: {
                    uid: uid,
                    listenerId: listenerId
                },
                type: "removeCustomScriptEventListener"
            });
        },

        //-------------------------------------------------
        //End of Custom Event Methods
        //=================================================

        //=================================================
        // Custom Vars Related Functions
        //-------------------------------------------------
        initCustomVarDefaults: function() {
            //_self.log("initCustomVarDefaults", _self.defaultCustomFormatVars);
            for (var cv in _self.defaultCustomFormatVars) {
                if (!_self.defaultCustomFormatVars.hasOwnProperty(cv)) continue;
                _self.setDefault(cv, _self.defaultCustomFormatVars[cv]); // once undefined allowed to be set by type (not "undefined"), replace this line with API setCustomVar
            }
            _self.setDefaultWithAppend("mdCustomFormatScriptVer", scriptName + "," + scriptVersion, "|");
        },

        setDefault: function(varName, defaultValue, optional_override) {
            EBG.API.Ad.setCustomVar(uid, varName, defaultValue, !!optional_override);
            _self[varName] = EBG.API.Ad.getCustomVar(uid, varName);
        },

        //this one lets you append strings to an existing string custom var, with optional delimiter
        setDefaultWithAppend: function(varName, defaultValue, optionalDelimiter) {
            var delim = optionalDelimiter || "";
            var val = EBG.API.Ad.getCustomVar(uid, varName); //see if we already have a string in there
            val = typeof val === "string" ? (val + delim + defaultValue) : defaultValue;
            _self.setDefault(varName, val, true);
        },

        parseAdaptiveBreakpoints: function(string) {
            var breakpointStrings = string.split(/\s*,\s*/);
            var breakpoints = [];

            for (var i = 0; i < breakpointStrings.length; i++) {
                var dimensionsArray = breakpointStrings[i].split(/\D+/);
                var dimensions = {};

                if (dimensionsArray.length > 0) {
                    dimensions.width = dimensionsArray[0];
                }

                if (dimensionsArray.length > 1) {
                    dimensions.height = dimensionsArray[1];
                }

                breakpoints.push(dimensions);
            }

            return breakpoints;
        },

        parseAspectRatio: function(string) {
            var aspectRatio;

            if (string) {
                var dimensionsArray = string.split(/\D+/);
                if (dimensionsArray.length === 2) {
                    aspectRatio = {
                        width: dimensionsArray[0],
                        height: dimensionsArray[1]
                    };
                }
            }

            return aspectRatio;
        },
        //-------------------------------------------------
        //End of Custom Vars Related Functions Section
        //=================================================

        //=================================================
        // Responsive Functions Section
        //-------------------------------------------------
        initializeResponsiveSizing: function(event) {
            _self.handlePreviewEnvironment();
            _self.initializeFriendlyIframeResizing();
            _self.initializeAlignment();
            _self.initializeMinimumWidth();
            _self.initializeMinimumHeight();
            _self.initializeMaximimumWidth();
            _self.initializeMaximimumHeight();
            _self.initializeResponsiveWidth();
            _self.initializeResponsiveHeight();
            _self.initializeResizeBehavior();
            _self.resize();
            _self.initializeAnimation();
            var repos = parseInt(_self.mdAutoRepositionInterval, 10);
            if (!isNaN(repos) && repos > 0 && _self.reposResizeTimeoutID === undefined) {
                _self.repositionInterval = EBG.Initializer._setLocationPolling(repos);
                _self.reposResizeTimeoutID = setTimeout(_self.reposResize, _self.repositionInterval);
            }
        },

        initializeFriendlyIframeResizing: function() {
            var errCaught = false;
            try {
                var topDoc = window.top.document;
                if (topDoc === undefined) errCaught = true;
            } catch (err) {
                errCaught = true;
            }

            if (errCaught) {
                _self.isInFriendlyIframe = false;
            } else {
                _self.isInFriendlyIframe = (_self.displayWin.inFIF || _self.displayWin.inDAPIF) || (window.top != window);
            }
        },

        handlePreviewEnvironment: function() {
            if (EBG.isPreview && !_self.previewPosInterval) {
                _self.resizePreviewWindow();
            }
        },

        resizePreviewWindow: function() {
            var vm = EBG.API.Adaptor.getViewPortMetrics();
            EBG.API.Adaptor.setStyle(_self.ebDiv.parentNode, {
                left: "0px",
                top: "0px",
                minHeight: EBG.px(vm.height),
                minWidth: EBG.px(vm.width)
            });
            if (_self.previewPosInterval) window.clearTimeout(_self.previewPosInterval);
            _self.previewPosInterval = window.setTimeout(_self.resizePreviewWindow, 150);
        },

        initializeAlignment: function() {
            switch (_self.mdAlignment.toLowerCase()) {
                case "right":
                case "r":
                    EBG.API.Adaptor.setStyle(_self.ebDiv, {
                        marginRight: 0
                    });
                    break;
                case "left":
                case "l":
                    EBG.API.Adaptor.setStyle(_self.ebDiv, {
                        marginLeft: 0
                    });
                    break;
            }
        },

        initializeMinimumWidth: function() {
            if (_self.mdMinimumWidth > 0) {
                EBG.API.Adaptor.setStyleToElems([_self.ebDiv, _self.iframe], {
                    minWidth: EBG.px(_self.mdMinimumWidth)
                });
            }
        },

        initializeMinimumHeight: function() {
            if (_self.mdMinimumHeight > 0) {
                EBG.API.Adaptor.setStyleToElems([_self.ebDiv, _self.iframe], {
                    minHeight: EBG.px(_self.mdMinimumHeight)
                });
            }
        },

        initializeMaximimumWidth: function() {
            if (_self.mdMaximumWidth > 0) {
                EBG.API.Adaptor.setStyleToElems([_self.ebDiv, _self.iframe], {
                    maxWidth: EBG.px(_self.mdMaximumWidth)
                });
            }
        },

        initializeMaximimumHeight: function() {
            if (_self.mdMaximumHeight > 0) {
                EBG.API.Adaptor.setStyleToElems([_self.ebDiv, _self.iframe], {
                    maxHeight: EBG.px(_self.mdMaximumHeight)
                });
            }
        },

        initializeResponsiveWidth: function() {
            switch (_self.mdWidthDependency.toLowerCase()) {
                case "advertiserdiv":
                case "1":
                    _self.mdWidthDependencyElement = _self.ebDiv.parentNode;
                    break;
                case "browser":
                case "2":
                    _self.getAvailableWidth = _self.getBrowserWidth;
                    break;
                case "aspectratio":
                case "3":
                    _self.getAvailableWidth = _self.getAspectRatioWidth;
                    _self.getWidth = _self.getAspectRatioWidth;
                    break;
                case "fixed":
                case "4":
                    _self.getAvailableWidth = _self.getFixedWidth;
                    _self.getWidth = _self.getFixedWidth;
                    break;
                default:
                    _self.mdWidthDependencyElement = _self.pageWin.document.querySelector(_self.mdWidthDependency) || _self.ebDiv.parentNode;
                    break;
            }

            if (_self.mdWidthDependencyElement) {
                // if mraid (and no specified width dependency element), use mraid width, if NOT mraid, use getContainerWidth)
                _self.getAvailableWidth = (EBG.isMRAID() && _self.mdWidthDependencyElement === _self.ebDiv.parentNode) ? _self.getMRAIDWidth : _self.getContainerWidth;
            }

        },

        initializeResponsiveHeight: function() {
            switch (_self.mdHeightDependency.toLowerCase()) {
                case "advertiserdiv":
                case "1":
                    _self.mdHeightDependencyElement = _self.ebDiv.parentNode;
                    break;
                case "browser":
                case "2":
                    _self.getAvailableHeight = _self.getBrowserHeight;
                    break;
                case "aspectratio":
                case "3":
                    _self.getAvailableHeight = _self.getAspectRatioHeight;
                    _self.getHeight = _self.getAspectRatioHeight;
                    break;
                case "fixed":
                case "4":
                    _self.getAvailableHeight = _self.getFixedHeight;
                    _self.getHeight = _self.getFixedHeight;
                    break;
                case "advertiserdiv_adaptive":
                case "5":
                    _self.autoAdHeight();

                    // define this fuction to no longer be a blank function
                    // this function is called in the resize() function, before the resize
                    // it will re-check the height of the advertiser div, and determine which method of resizing to use
                    _self.adDivAdapRecheck = _self.autoAdHeight;
                    break;
                default:
                    _self.mdHeightDependencyElement = _self.pageWin.document.querySelector(_self.mdHeightDependency) || _self.ebDiv.parentNode;
                    break;
            }

            if (_self.mdHeightDependencyElement) {
                _self.getAvailableHeight = (EBG.isMRAID() && _self.mdHeightDependencyElement === _self.ebDiv.parentNode) ? _self.getMRAIDHeight : _self.getContainerHeight;
            }
        },

        autoAdHeight: function() {
            if (parseInt(EBG.API.Adaptor.getStyle(_self.ebDiv.parentNode, "height")) > _self.mdAutoHeightThreshold) {
                // advertiserdiv behavior, since height of parent is greater than mdAutoHeightThreshold
                _self.mdHeightDependencyElement = _self.ebDiv.parentNode;
                _self.getAvailableHeight = EBG.isMRAID() ? _self.getMRAIDHeight : _self.getContainerHeight;
            } else {
                // Adaptive Behavior since height of parent div is not greater than mdAutoHeightThreshold
                _self.mdHeightDependencyElement = undefined;
                _self.getAvailableHeight = _self.getAdaptiveHeight;
                _self.getHeight = _self.getAdaptiveHeight;
            }
        },

        initializeResizeBehavior: function() {
            // When below not present, unable to grab correct size of parent container element (always returning too large)
            EBG.API.Adaptor.setStyle(_self.ebDiv, {
                display: "block"
            });

            switch (_self.mdResizeBehavior.toLowerCase()) {
                case "adaptive":
                case "a":
                case "1":
                    _self.getWidth = _self.getAdaptiveWidth;
                    _self.getHeight = _self.getHeight || _self.getAdaptiveHeight;
                    break;
                case "responsive":
                case "r":
                case "2":
                    _self.getWidth = _self.getResponsiveWidth;
                    _self.getHeight = _self.getHeight || _self.getResponsiveHeight;
                    break;
                case "fixed":
                case "f":
                case "3":
                    _self.getWidth = _self.getFixedWidth;
                    _self.getHeight = _self.getFixedHeight;
                    break;
                case "responsive_adaptive":
                case "ra":
                case "4":
                    _self.getWidth = _self.getResponsiveWidth;
                    _self.getHeight = _self.getHeight || _self.getAdaptiveHeight;
                    break;
            }
        },

        initializeAnimation: function() {
            if (_self.mdAnimateResize) {
                if (!_self.isAnimationEnabled) {
                    _self.isAnimationEnabled = true;
                    setTimeout(function() {
                        var settings = {
                            transition: "width 500ms, height 500ms"
                        };
                        EBG.API.Adaptor.setStyleToElems([_self.ebDiv, _self.iframe], settings);
                    }, 200);
                }
            }
        },

        reposResize: function() {
            _self._handleOntimePageResize();
            if (_self.repositionInterval !== undefined) {
                if (_self.reposResizeTimeoutID) window.clearTimeout(_self.reposResizeTimeoutID);
                _self.reposResizeTimeoutID = window.setTimeout(_self.reposResize, _self.repositionInterval);
            }
        },

        resize: function() {
            _self.adDivAdapRecheck(); // this function is empty unless it's the AdvertiserDiv_Adaptive mdHeightDependency setting
            _self.resizeBanner(_self.getWidth(), _self.getHeight());
        },

        getFixedWidth: function() {
            _self.log("getFixedWidth");
            return _self.getBoundedWidth(_self.mdFixedWidth);
        },

        getFixedHeight: function() {
            _self.log("getFixedHeight");
            return _self.getBoundedHeight(_self.mdFixedHeight);
        },

        getResponsiveWidth: function() {
            _self.log("getResponsiveWidth");
            var width = _self.getAvailableWidth();
            return _self.getBoundedWidth(width);
        },

        getResponsiveHeight: function() {
            _self.log("getResponsiveHeight");
            var height = _self.getAvailableHeight();
            return _self.getBoundedHeight(height);
        },

        getAspectRatioWidth: function() {
            _self.log("getAspectRatioWidth");
            var width;
            var height = _self.getHeight();

            if (_self.mdAspectRatio) {
                var ratio = _self.mdAspectRatio.width / _self.mdAspectRatio.height;
                if (ratio) {
                    width = height * ratio;
                }
            }

            return _self.getBoundedWidth(width);
        },

        getAspectRatioHeight: function() {
            _self.log("getAspectRatioHeight");
            var height = _self.getWidth();

            if (_self.mdAspectRatio) {
                var ratio = _self.mdAspectRatio.height / _self.mdAspectRatio.width;
                if (ratio) {
                    height *= ratio;
                }
            }

            return _self.getBoundedHeight(height);
        },

        getElementMetrics: function(el) {
            if (el.tagName && el.tagName.toLowerCase() == "body") {
                var doc = el.ownerDocument;
                var win = doc.defaultView || doc.parentWindow;
                return EBG.API.Adaptor.getViewPortMetrics(win);
            } else {
                return EBG.API.Adaptor.getElementMetrics(el);
            }
        },

        getAvailableWidth: function() {
            _self.log("getAvailableWidth");
            return _self.getElementMetrics(_self.ebDiv.parentNode).width;
        },

        getAvailableHeight: function() {
            _self.log("getAvailableHeight");
            return _self.getElementMetrics(_self.ebDiv.parentNode).height;
        },

        getContainerWidth: function() {
            _self.log("getContainerWidth");
            return _self.getElementMetrics(_self.mdWidthDependencyElement).width;
        },

        getContainerHeight: function() {
            _self.log("getContainerHeight");
            return _self.getElementMetrics(_self.mdHeightDependencyElement).height;
        },

        getBrowserWidth: function() {
            _self.log("getBrowserWidth");
            return EBG.API.Adaptor.getViewPortMetrics().width;
        },

        getBrowserHeight: function() {
            _self.log("getBrowserHeight");
            return EBG.API.Adaptor.getViewPortMetrics().height;
        },

        getAdaptiveWidth: function() {
            _self.log("getAdaptiveWidth");
            var currentBreakpoint = _self.getCurrentBreakpoint();
            var width = 0;
            if (currentBreakpoint >= 0) {
                width = _self.mdAdaptiveBreakpoints[currentBreakpoint].width;
            }

            return _self.getBoundedWidth(width);
        },

        getAdaptiveHeight: function() {
            _self.log("getAdaptiveHeight");
            var currentBreakpoint = _self.getCurrentBreakpoint();
            // check height default value
            var height = 0;
            if (currentBreakpoint >= 0) {
                height = _self.mdAdaptiveBreakpoints[currentBreakpoint].height || EBG.API.Ad.getAdData(uid, "height");
            }

            return _self.getBoundedHeight(height);
        },

        getMRAIDWidth: function() {
            var retWidth = mraid.getCurrentPosition().width;
            return retWidth;
        },

        getMRAIDHeight: function() {
            var retHeight = mraid.getCurrentPosition().height;
            return retHeight;
        },

        getCurrentBreakpoint: function() {
            var availableWidth = _self.getAvailableWidth();
            var i = _self.mdAdaptiveBreakpoints.length - 1;
            while (i >= 0 && availableWidth < _self.mdAdaptiveBreakpoints[i].width) {
                i--;
            }

            return i;
        },

        getBoundedWidth: function(width) {
            return _self.getBoundedValue(width, _self.mdMaximumWidth, _self.mdMinimumWidth);
        },

        getBoundedHeight: function(height) {
            return _self.getBoundedValue(height, _self.mdMaximumHeight, _self.mdMinimumHeight);
        },

        getBoundedValue: function(value, max, min) {
            if (max) {
                value = Math.min(value, max);
            }

            if (min) {
                value = Math.max(value, min);
            }

            return value;
        },

        resizeBanner: function(width, height) {
            if (!isNaN(width) && !isNaN(height)) {
                var elems = [_self.iframe, _self.ebDiv];
                if (_self.isInFriendlyIframe && _self.displayWin.frameElement && _self.mdResizeFriendlyIframe && !EBG.isPreview) {
                    elems.push(_self.displayWin.frameElement);
                }

                EBG.API.Adaptor.setStyleToElems(elems, {
                    width: EBG.px(width),
                    height: EBG.px(height)
                });
                EBG.API.Ad.setAdData(uid, {
                    width: width,
                    height: height
                });
            }
        },

        //-------------------------------------------------
        //End of Responsive Functions Section
        //=================================================

        //=================================================
        // Utility Functions
        //-------------------------------------------------

        dispatchScrollPos: function(useDelay) {
            if (useDelay) {
                window.setTimeout(_self.dispatchScrollPos, 250);
                return;
            }
            var scrollPos = _self.getScrollPos();
            if (_self.isBannerReady && (_self.curScrollPos.scrollXPercent != scrollPos.scrollXPercent || _self.curScrollPos.scrollYPercent != scrollPos.scrollYPercent)) {
                _self.curScrollPos.scrollXPercent = scrollPos.scrollXPercent;
                _self.curScrollPos.scrollYPercent = scrollPos.scrollYPercent;
                _self.dispatchCustomScriptEvent('pageScroll', scrollPos);
            }
        },

        getScrollPos: function() {
            var pageMetrics = EBG.API.Adaptor.getPageMetrics(_self.pm.topWin);
            var vp = EBG.API.Adaptor.getViewPortMetrics(_self.pm.topWin);
            var scrollYPercent = 0;
            var scrollXPercent = 0;
            if ((pageMetrics.scrollWidth - vp.width) > 0) {
                scrollXPercent = parseInt((pageMetrics.scrollLeft / (pageMetrics.scrollWidth - vp.width)) * 100);
            }
            if ((pageMetrics.scrollHeight - vp.height) > 0) {
                scrollYPercent = parseInt((pageMetrics.scrollTop / (pageMetrics.scrollHeight - vp.height)) * 100);
            }
            return {
                scrollXPercent: Math.min(Math.max(scrollXPercent, 0), 100),
                scrollYPercent: Math.min(Math.max(scrollYPercent, 0), 100)
            };
        },

        setStyleToElems: function(nodeArr, style, usePrefix) {
            // for some reason, Adaptor version was working, so we adjusted to use this.
            // there was a fix supposedly put in place, but it still wasn't working for us at release time
            // had to do with when certain elements in the array weren't defined yet (ebIframe vs ebDiv)
            var usePrefix = EBG.isDefined(usePrefix) ? usePrefix : true;
            var curElem;
            var newNodeArr = [];
            for (curElem = 0; curElem < nodeArr.length; curElem++) {
                if (nodeArr[curElem]) newNodeArr.push(nodeArr[curElem]);
            }
            EBG.API.Adaptor.origSetStyleToElems(newNodeArr, style, usePrefix);
        },

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

        requestLog: function() {
            if (_self.isDebug) {
                if (!_self.plainLog) {
                    _self.plainLog = _self.log;
                    _self.log = _self.requestLog;
                }
                var img = new Image();
                var src = "//" + (document.location.protocol == "https:" ? "secure-" : "");
                src += "ds.serving-sys.com/debug.debug?" + _self.plainLog.apply(_self, arguments);
                img.src = src;
            }
        },

        removeAd: function() {
            EBG.API.Ad.unload(uid);
        },

        addWindowListener: function(eventName, handlerIndex, func) { //add an overrideable listener
            _self.handlers[handlerIndex] = function() {
                return func.apply(this, arguments);
            }; //make this handler overrideable by plugin script
            if (_self.displayWin.addEventListener)
                _self.displayWin.addEventListener(eventName, _self.handlers[handlerIndex], false);
            else if (_self.displayWin.attachEvent)
                _self.displayWin.attachEvent("on" + eventName, _self.handlers[handlerIndex]);
        },

        removeWindowListener: function(eventName, handlerIndex, func) { //remove an overrideable listener
            if (_self.displayWin.removeEventListener)
                _self.displayWin.removeEventListener(eventName, _self.handlers[handlerIndex], false);
            else if (_self.displayWin.detachEvent)
                _self.displayWin.detachEvent("on" + eventName, _self.handlers[handlerIndex]);
            delete _self.handlers[handlerIndex];
        },

        handleSetCreativeVersion: function(event) { //handle the setCreativeVersion event received from the HTML5 Banner
            _self.versions["creativeIds"] += ((_self.versions["creativeIds"] !== "" ? "|" : "") + event.creativeId);
            _self.versions["creativeVers"] += ((_self.versions["creativeVers"] !== "" ? "|" : "") + event.creativeVersion);
            _self.versions["creativeLastMods"] += ((_self.versions["creativeLastMods"] !== "" ? "|" : "") + event.creativeLastModified);
        },

        showFullSizedBackupImage: function() {
            try {
                var backupImg = EBG.API.Ad.getAdData(uid, "assets")[_self.mdBackupImgPath];
                if (!backupImg) return;

                if (!_self.ebDiv) {
                    _self.ebDiv = EBG.API.Ad.getPlaceholder(uid);
                }

                var img = _self.ebDiv.firstChild;
                var w = img.width = backupImg.width;
                var h = img.height = backupImg.height;
                var path = backupImg.dsPath;

                //resize the placeholder div to our backup image's width and height
                EBG.API.Adaptor.setStyleToElems([_self.ebDiv, img], {
                    width: EBG.px(w),
                    height: EBG.px(h)
                });

                img.src = EBG.API.Ad.getAdData(uid, "resourcePath") + path;

                //if any parent div's need updating, do that here
                //e.g. one parent level: _self.ebDiv.parentNode.style.width = EBG.px(w); _self.ebDiv.parentNode.style.height = EBG.px(h);
                //e.g. two parent levels: _self.ebDiv.parentNode.parentNode.style.width = EBG.px(w); _self.ebDiv.parentNode.parentNode.style.height = EBG.px(h);
                //e.g. three parent levels: _self.ebDiv.parentNode.parentNode.parentNode.style.width = EBG.px(w); _self.ebDiv.parentNode.parentNode.parentNode.style.height = EBG.px(h);

                if (_self.mdParentLevelsToResize > 0) {
                    setTimeout(function() {
                        _self.resizeBackupImageParentNodes(w, h, _self.mdParentLevelsToResize);
                    }, 100);
                }
            } catch (e) {}
        },

        resizeBackupImageParentNodes: function(w, h, nodes) {
            try {
                var parentNodes = [
                    _self.ebDiv.parentNode,
                ];
                //fill up the array with ever higher parent nodes to the length instructed
                for (var n = 1; n < nodes; n++) {
                    parentNodes[n] = parentNodes[n - 1].parentNode;
                }

                var parentMetrics;
                for (var i = 0; i < parentNodes.length; i++) {
                    var parentNode = parentNodes[i];

                    if (parentNode) {
                        parentMetrics = EBG.API.Adaptor.getElementMetrics(parentNode);
                        if (parentMetrics.width < w) {
                            EBG.API.Adaptor.setStyle(parentNode, {
                                minWidth: EBG.px(w)
                            });
                        }

                        if (parentMetrics.height < h) {
                            EBG.API.Adaptor.setStyle(parentNode, {
                                minHeight: EBG.px(h)
                            });
                        }
                    }
                }
            } catch (e) {}
        },

        removeFromFlowResize: function(useDisplay) {
            //useDisplay = !!useDisplay;
            // position seemed to not work in many scenarios ... 
            // maybe only need to to display when using browser as sizing dependency?

            useDisplay = true;

            var attr = useDisplay ? "display" : "position";
            var styleObj = {};
            styleObj[attr] = useDisplay ? "none" : "absolute";
            var prevVal = EBG.API.Adaptor.getStyle(_self.ebDiv, attr);
            EBG.API.Adaptor.setStyle(_self.ebDiv, styleObj);
            _self.resize();
            styleObj[attr] = prevVal;
            EBG.API.Adaptor.setStyle(_self.ebDiv, styleObj);
        },

        tokenReplace: function(str, panel) {
            var replaced = str.replace(/\%ebDivID\%/g, _self.ebDiv.id);
            if (panel && panel.panelName) {
                replaced = replaced.replace(/\%panelIframeID\%/g, panel.iframeId);

                // sometimes the div is already removed, you can't access the ID, so when this happens, just don't replace
                if (panel._iframe.parentNode && panel._iframe.parentNode.id) replaced = replaced.replace(/\%panelDivID\%/g, panel._iframe.parentNode.id);
            }
            replaced = replaced.replace(/\%bannerIframeID\%/g, _self.iframe.id);
            replaced = replaced.replace(/\%bannerDivID\%/g, _self.iframe.parentNode.id);
            replaced = replaced.replace(/\%adid\%/g, adId);
            replaced = replaced.replace(/\%rnd\%/g, rnd);
            replaced = replaced.replace(/\%uid\%/g, uid);
            replaced = _self.htmlUnencode(replaced);
            return replaced;
        },

        htmlUnencode: function(str) {
            var elem = document.createElement("div");
            elem.innerHTML = str;
            return (elem.innerText || elem.text || elem.textContent);
        },

        addStylesheetToHead: function(styleSheetRules, optionalTargetDoc) {
            var targetDoc = optionalTargetDoc || _self.pm.topDoc;
            var styleElement = targetDoc.createElement('style');
            styleElement.setAttribute('type', 'text/css');
            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = styleSheetRules;
            } else {
                styleElement.appendChild(targetDoc.createTextNode(styleSheetRules));
            }
            targetDoc.getElementsByTagName('head')[0].appendChild(styleElement);
            return styleElement;
        },

        execJS: function(jsToExec) {
            try {
                _self.pm.topWin.eval(jsToExec);
            } catch (err) {}
        },

        reportCFVersions: function() { //report 'our' versions in this ad, may or may not be called by our own reportCFV function
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
            "templateVer": templateVersion,
            "creativeIds": "",
            "creativeVers": "",
            "creativeLastMods": ""
        },
        //-------------------------------------------------
        //End of Utility Functions
        //=================================================

        //-------------------------------------------------
        //Start of ProgrammaticManager Class
        //=================================================

        ProgrammaticManager: function(progReadyCallback) {
            /** start constructor **/
            _self.pm = this;
            _self.pm.constructor = function() {
                _self.pm.readyCallback = progReadyCallback;
                _self.pm.topWin = _self.pm.getTopWin(window);
                _self.pm.topDoc = _self.pm.topWin.document;
                _self.pm.PROGRAMMATIC_SETTINGS_FILENAME = "ProgrammaticSettings_" + progFormatID + ".json";
                _self.pm.DEFAULT_PROGRAMMATIC_SETTING_FOLDER = "_default_";
                _self.pm.mdSettingsFolderPath = EBG.API.Ad.getCustomVar(uid, "mdProgSettingsFolderPath");
                _self.pm.currentFileRequested = null;
                _self.pm.currentDetectMethod = null;
                var enabled = false;
                if (adConfig.customJSVars.hasOwnProperty("mdIsDomainConfigEnabled")) { //preferred, newest
                    enabled = EBG.API.Ad.getCustomVar(uid, "mdIsDomainConfigEnabled");
                }
                if (!enabled && adConfig.customJSVars.hasOwnProperty("mdIsProgEnabled")) { //next most recent [now deprecated]
                    enabled = EBG.API.Ad.getCustomVar(uid, "mdIsProgEnabled");
                }
                if (!enabled && adConfig.customJSVars.hasOwnProperty("mdProgEnabled")) { //mis-used one [now deprecated]
                    enabled = EBG.API.Ad.getCustomVar(uid, "mdProgEnabled");
                }
                if (!enabled && adConfig.customJSVars.hasOwnProperty("mdProgEnable")) { //oldest [now deprecated]
                    enabled = EBG.API.Ad.getCustomVar(uid, "mdProgEnable");
                }

                // getter
                _self.pm.isEnabled = function() {
                    return (!!enabled);
                };

                if (_self.pm.isEnabled()) {
                    _self.pm.getProgrammaticSettings();
                } else {
                    _self.pm.beginExperience();
                }
            };

            _self.pm.getProgrammaticSettings = function() {
                _self.log("getProgrammaticSettings");
                var queries = _self.pm.getQueryVariables();
                var domainName;
                // detect domain using cookie settings or querystring force
                // When using ProgrammaticPreview, query string values are used
                if (queries && queries.domain) {
                    _self.pm.currentDetectMethod = "queries";
                    domainName = queries.domain;
                    _self.log("getProgrammaticSettings: got domain name from queries as " + domainName);
                } else {
                    // first try determining the domain using cookies. Quick and no requests necessary
                    _self.pm.currentDetectMethod = "cookies";
                    _self.log("getProgrammaticSettings: trying cookies");
                    domainName = _self.pm.getDomainUsingCookies(_self.pm.topDoc.domain);
                    //if (domainName == _self.pm.DEFAULT_PROGRAMMATIC_SETTING_FOLDER) domainName = '';
                    //domainName = '';
                    // if we didn't detect the domain using cookies, try using our known TLD list
                    if (!domainName) {
                        _self.log("getProgrammaticSettings: didn't get domain from cookies, trying known TLDs");
                        var tldLength = _self.pm.knownTLD(_self.pm.topDoc.domain);
                        if (tldLength) {
                            _self.log("getProgrammaticSettings: Was a known TLD...");
                            // we know the domain is using a "known" tld, so we just grab the section immediately before that
                            _self.pm.currentDetectMethod = "tld";
                            domainName = _self.pm.topDoc.domain;
                            domainName = domainName.substring(Math.max(domainName.lastIndexOf(".", domainName.length - tldLength - 1), 0) + 1);
                        }
                    }
                }
                // if testing using cookies and it fails, we end up setting domain to default at end
                if (domainName) { // domain detected, ready to load
                    _self.log("getProgrammaticSettings: we have a domain name: " + domainName);
                    _self.pm.loadSettingsFile(domainName);
                } else { // detect domain attempting to load settings file
                    _self.log("getProgrammaticSettings: still no domain name, trying to use client load method");
                    _self.pm.getDomainUsingClientLoad(_self.pm.topDoc.domain);
                }
            };
            _self.pm.getTopWin = function(thisWin) { // taken from PL_DetectServingEnvironment_All.js
                thisWin = thisWin || window;
                var topWin;
                try { // first just try to grab top document. If we're in a friendly iframe, or script tag, this will work fine
                    topWin = top.document && top;
                    if (typeof topWin == "undefined") {
                        throw "MacSafariTopWinUFIF"; //force getParentest...
                    }
                } catch (err) { // if we fail/error out on getting top, try looping through parents to get the top-most window
                    topWin = _self.pm.getParentestFriendlyWin(thisWin);
                }
                if (typeof topWin == "undefined") topWin = _self.pm.getParentestFriendlyWin(thisWin);
                return topWin;
            };
            _self.pm.getParentestFriendlyWin = function(curWin, refWin) { // using curWin as our current window, try to determine how high up through parents we can go to find
                //	the top most friendly window object.
                var pfWin;
                try {
                    refWin = refWin || curWin.parent;
                    pfWin = curWin.document && curWin;
                    if (typeof pfWin == "undefined") {
                        throw "MacSafariWinUFIF";
                    }
                    if (refWin !== curWin) {
                        pfWin = refWin.document && refWin;
                        if (typeof pfWin == "undefined") {
                            return curWin.document && curWin;
                        }
                        if (refWin !== top) {
                            pfWin = _self.pm.getParentestFriendlyWin(refWin) || pfWin;
                        }
                    }
                } catch (err) {
                    if (refWin !== top) {
                        pfWin = _self.pm.getParentestFriendlyWin(refWin) || pfWin;
                    }
                }

                if (typeof pfWin == "undefined") {
                    //Ad must be stuck in an unfriendly iframe, unable to get any higher in DOM.
                    try {
                        pfWin = curWin.document && curWin;
                    } catch (err) {}
                }
                return pfWin;
            };
            _self.pm.getQueryVariables = function() {
                var qsv = {}; // query string variables object
                var kv = {}; // key value pairs object
                var query = _self.pm.topWin.location.search.substring(1); // remove leading questionmark from querystring
                var vars = query.split("&");
                for (var i = 0; i < vars.length; i++) {
                    kv.name = decodeURIComponent(vars[i].substring(0, vars[i].indexOf("=")));
                    kv.value = decodeURIComponent(vars[i].substring(vars[i].indexOf("=") + 1));
                    qsv[kv.name] = kv.value;
                }
                return qsv;
            };
            _self.pm.loadSettingsFile = function(domain) {
                _self.pm.currentFileRequested = domain;
                if (!EBG.getDataFromRemoteServer(_self.pm.buildSettingsURL(domain), _self.pm.parseJSON, _self.pm, true)) {
                    _self.pm.beginExperience();
                }
            };
            // this function returns the length of the TLD if the TLD is known, otherwise returns 0
            _self.pm.knownTLD = function(testDomain) {
                // this list of TLDs provided by R&D from top 10000 sites that served impressions for ads
                var knownTLDs = ['.com', '.net', '.mobi', '.cci.fr', '.fr', '.com.au', '.es', '.co.uk', '.de', '.com.cn', '.it', '.be', '.fi', '.co.il', '.co.jp', '.ne.jp', '.jp', '.nl', '.me', '.com.pl', '.pl', '.tv', '.qc.ca', '.ca', '.io', '.io.', '.com.vn', '.net.vn', '.vn', '.com.br', '.gr', '.com.ar', '.com.tr', '.co.th', '.cz', '.ch', '.dk', '.org', '.no', '.biz', '.co.nz', '.se', '.pt', '.com.my', '.co', '.co.in', '.ro', '.com.hk', '.fm', '.com.tw', '.com.al', '.al', '.cc', '.web.id', '.co.za', '.com.mx', '.video', '.at', '.info', '.trade', '.cl', '.sk', '.to', '.pe', '.cn', '.us', '.in', '.lt', '.mx', '.bg', '.eu', '.co.id', '.com.sg', '.gg', '.hn', '.my', '.la', '.com.pk', '.pk', '.com.kw', '.guru', '.hk', '.hr', '.lv', '.rs', '.ee', '.com.uy', '.asia', '.mus.br', '.cat', '.gov.au', '.id', '.ru', '.gov.uk', '.com.cy', '.tw', '.nu', '.online', '.ie', '.in.th', '.hu', '.news', '.free', '.tf', '.com.sa', '.sa', '.lk', '.website', '.ba', '.sc', '.com.ph', '.ph', '.media', '.pr', '.xyz', '.az', '.app', '.gen.tr', '.md', '.net.br', '.cf', '.com.gh', '.club', '.lu', '.com.do', '.ws', '.co.kr', '.eus', '.one', '.net.au', '.social', '.si', '.am', '.pw', '.mk', '.im', '.best', '.com.ua', '.ua', '.lat', '.pm', '.com.lb', '.ae', '.dj', '.win', '.tt'];
                for (var i = 0; i < knownTLDs.length; i++) {
                    if (testDomain.substr(-knownTLDs[i].length) === knownTLDs[i]) return knownTLDs[i].length;
                }
                return 0;
            };
            _self.pm.getDomainUsingCookies = function(testDomain) {
                _self.log("getDomainUsingCookies: value of navigator.cookieEnabled = " + navigator.cookieEnabled);
                if (!_self.pm.topDoc || !navigator.cookieEnabled) return false;
                try {
                    var i = 0;
                    var s = "_" + uid + "_" + (new Date()).getTime();
                    var p = testDomain.split(".");
                    while (i < (p.length - 1) && _self.pm.topDoc.cookie.indexOf(s + "=" + s) === -1) {
                        testDomain = p.slice(-1 - (++i)).join(".");
                        _self.pm.topDoc.cookie = s + "=" + s + ";domain=" + testDomain + ";";
                    }
                    if (_self.pm.topDoc.cookie.indexOf(s + "=" + s) === -1) testDomain = "";
                    try {
                        _self.pm.topDoc.cookie = s + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + testDomain + ";";
                    } catch (err) {}
                    return testDomain;
                } catch (err) {
                    return false;
                }
            };
            _self.pm.getDomainUsingClientLoad = function(docDomain, domsToIgnore) {
                var domainAsArray;
                var domainParts = 0;
                var checkDomain = '';
                var checkURL = '';
                var filesToCheck = [];
                domsToIgnore = [].concat(domsToIgnore);

                _self.pm.currentDetectMethod = "clientLoad";

                domainAsArray = docDomain.split(".");

                while (domainParts < domainAsArray.length - 1) {
                    checkDomain = domainAsArray.slice(-1 - (++domainParts)).join(".");
                    if (domsToIgnore.indexOf(checkDomain) >= 0) continue;
                    checkURL = _self.pm.buildSettingsURL(checkDomain);
                    filesToCheck[filesToCheck.length] = checkURL;
                }

                filesToCheck[filesToCheck.length] = _self.pm.buildSettingsURL(_self.pm.DEFAULT_PROGRAMMATIC_SETTING_FOLDER);

                function loadFile(url) {
                    return EBG.getDataFromRemoteServer(url, function(result) {
                        if (result) {
                            _self.pm.parseJSON(result);
                        } else {
                            if (filesToCheck.length > 0) {
                                if (!loadFile(filesToCheck.shift())) {
                                    _self.pm.beginExperience();
                                }
                            } else {
                                // No settings were found, load ad anyway without override
                                _self.pm.beginExperience();
                            }
                        }
                    }, _self.pm, true);
                }

                if (!loadFile(filesToCheck.shift())) {
                    _self.pm.beginExperience();
                }
            };
            _self.pm.buildSettingsURL = function(domainToBuild) {
                return _self.pm.topDoc.location.protocol + _self.pm.mdSettingsFolderPath + domainToBuild + "/" + _self.pm.PROGRAMMATIC_SETTINGS_FILENAME + "?ord=" + uid;
            };
            _self.pm.unbuildSettingsURL = function(urlToUnbuild) {
                var pattern = new RegExp(_self.pm.topDoc.location.protocol + _self.pm.mdSettingsFolderPath + "(.*)/" + _self.pm.PROGRAMMATIC_SETTINGS_FILENAME + "\\?ord=" + uid);
                return pattern.exec(urlToUnbuild)[1];
            };
            _self.pm.parseJSON = function(response) {
                if (!response) {
                    // If we don't have a response, it could mean we need to try loading our default folder
                    // It could also mean, if it came from the KnownTLD, we must now use the regular requests method.
                    // if our default setting file WAS the one that had no response, no other option
                    // must simply load the ad without any programmatic settings
                    if (_self.pm.currentDetectMethod === "tld") {
                        // need to get files by client request, IGNORING the current file which was part of the known TLD....
                        _self.pm.getDomainUsingClientLoad(_self.pm.topDoc.domain, _self.pm.currentFileRequested);
                        return;
                    } else if (_self.pm.currentFileRequested !== _self.pm.DEFAULT_PROGRAMMATIC_SETTING_FOLDER) {
                        _self.pm.loadSettingsFile(_self.pm.DEFAULT_PROGRAMMATIC_SETTING_FOLDER, _self.pm.parseJSON);
                        return;
                    } else {
                        _self.pm.beginExperience();
                        return;
                    }
                }

                try {
                    // wrapped in try/catch in case anything breaks we still are able to load our ad experience

                    // read setting file, apply custom variable settings, then do the below line to show the panel
                    var responseSettings = JSON.parse(response).programmaticSettings;
                    var queries = _self.pm.getQueryVariables();
                    var programmaticSettings = null;

                    if (queries && queries.settingType) {
                        switch (queries.settingType) {
                            case "Folder":
                                if (responseSettings.hasOwnProperty("folder") && responseSettings.folder.hasOwnProperty(queries.settingDetail)) {
                                    programmaticSettings = responseSettings.folder[queries.settingDetail];
                                }
                                break;
                            case "Subdomain":
                                if (responseSettings.hasOwnProperty("subdomain") && responseSettings.subdomain.hasOwnProperty(queries.settingDetail)) {
                                    programmaticSettings = responseSettings.subdomain[queries.settingDetail];
                                }
                                break;
                            case "Global":
                                if (responseSettings.hasOwnProperty("global")) {
                                    programmaticSettings = responseSettings.global;
                                }
                                break;
                        }
                    } else {
                        var setting;
                        if (!programmaticSettings && responseSettings.folder) {
                            var f = responseSettings.folder;
                            for (setting in f) {
                                if (!f.hasOwnProperty(setting)) continue;
                                if (_self.pm.hasFolder(setting)) {
                                    programmaticSettings = f[setting];
                                    break;
                                }
                            }
                        }
                        if (!programmaticSettings && responseSettings.subdomain) {
                            var s = responseSettings.subdomain;
                            for (setting in s) {
                                if (!s.hasOwnProperty(setting)) continue;
                                if (_self.pm.hasSubdomain(setting)) {
                                    programmaticSettings = s[setting];
                                    break;
                                }
                            }
                        }
                        if (!programmaticSettings && responseSettings.global) {
                            programmaticSettings = responseSettings.global;
                            // simply grab first "global" setting and apply it to custom vars
                        }
                    }

                    // If it is NOT ready, then add an event handler to do the below once it IS ready
                    if (programmaticSettings) _self.pm.setProgrammaticSettings(programmaticSettings);
                    _self.pm.beginExperience();
                } catch (err) {
                    // if anything broke during parsing, simply begin the ad experience
                    _self.pm.beginExperience();
                }
            };
            _self.pm.hasFolder = function(folderToTest) {
                return (_self.pm.topDoc.location.pathname.indexOf(folderToTest) !== -1);
            };
            _self.pm.hasSubdomain = function(subdomainToTest) {
                return (_self.pm.topDoc.location.hostname.indexOf(subdomainToTest) !== -1 || _self.pm.topDoc.location.host.indexOf(subdomainToTest) !== -1);
            };
            _self.pm.setProgrammaticSettings = function(programmaticSettings) {
                for (var customVar in programmaticSettings) {
                    if (!programmaticSettings.hasOwnProperty(customVar)) continue;
                    _self.setDefault(customVar, programmaticSettings[customVar], true);
                }
            };
            _self.pm.beginExperience = function() {
                if (_self.pm.readyCallback) window.setTimeout(_self.pm.readyCallback, 1);
            };

            _self.pm.constructor(); // call constructor
        }
        //-------------------------------------------------
        //End of ProgrammaticManager Class
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