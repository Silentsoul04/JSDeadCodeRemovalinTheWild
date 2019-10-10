(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("@playkit-js/playkit-js"));
    else if (typeof define === 'function' && define.amd)
        define(["playkit-js"], factory);
    else if (typeof exports === 'object')
        exports["kava"] = factory(require("@playkit-js/playkit-js"));
    else
        root["KalturaPlayer"] = root["KalturaPlayer"] || {}, root["KalturaPlayer"]["plugins"] = root["KalturaPlayer"]["plugins"] || {}, root["KalturaPlayer"]["plugins"]["kava"] = factory(root["KalturaPlayer"]["core"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/
            if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
            };
            /******/
            /******/ // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/
        __webpack_require__.d = function(exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                    /******/
                    configurable: false,
                    /******/
                    enumerable: true,
                    /******/
                    get: getter
                    /******/
                });
                /******/
            }
            /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ?
                /******/
                function getDefault() {
                    return module['default'];
                } :
                /******/
                function getModuleExports() {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/ // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 3);
        /******/
    })
    /************************************************************************/
    /******/
    ([
        /* 0 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.KavaEventType = exports.KavaEventModel = undefined;
            exports.getEventModel = getEventModel;

            var _kavaModel = __webpack_require__(2);

            /**
             * @name KavaEventType
             * @enum
             */
            var KavaEventModel = exports.KavaEventModel = {
                /**
                 * @type {string} VIEW
                 * @memberof KavaEventType
                 */
                VIEW: {
                    type: 'VIEW',
                    index: 99,
                    getEventModel: function getEventModel(model) {
                        return {
                            playTimeSum: model.getPlayTimeSum(),
                            bufferTime: model.getBufferTime(),
                            bufferTimeSum: model.getBufferTimeSum(),
                            actualBitrate: model.getActualBitrate(),
                            averageBitrate: model.getAverageBitrate(),
                            audioLanguage: model.getLanguage(),
                            captionsLanguage: model.getCaption()
                        };
                    }
                },
                /**
                 * @type {string} IMPRESSION
                 * @memberof KavaEventType
                 */
                IMPRESSION: {
                    type: 'IMPRESSION',
                    index: 1,
                    getEventModel: function getEventModel() {
                        return {};
                    }
                },
                /**
                 * @type {string} PLAY_REQUEST
                 * @memberof KavaEventType
                 */
                PLAY_REQUEST: {
                    type: 'PLAY_REQUEST',
                    index: 2,
                    getEventModel: function getEventModel() {
                        return {};
                    }
                },
                /**
                 * @type {string} PLAY
                 * @memberof KavaEventType
                 */
                PLAY: {
                    type: 'PLAY',
                    index: 3,
                    getEventModel: function getEventModel(model) {
                        return {
                            bufferTime: model.getBufferTime(),
                            bufferTimeSum: model.getBufferTimeSum(),
                            actualBitrate: model.getActualBitrate(),
                            joinTime: model.getJoinTime(),
                            canPlay: model.getCanPlayTime()
                        };
                    }
                },
                /**
                 * @type {string} RESUME
                 * @memberof KavaEventType
                 */
                RESUME: {
                    type: 'RESUME',
                    index: 4,
                    getEventModel: function getEventModel(model) {
                        return {
                            bufferTime: model.getBufferTime(),
                            bufferTimeSum: model.getBufferTimeSum(),
                            actualBitrate: model.getActualBitrate()
                        };
                    }
                },
                /**
                 * @type {string} PAUSE
                 * @memberof KavaEventType
                 */
                PAUSE: {
                    type: 'PAUSE',
                    index: 33,
                    getEventModel: function getEventModel() {
                        return {};
                    }
                },
                /**
                 * @type {string} BUFFER_START
                 * @memberof KavaEventType
                 */
                BUFFER_START: {
                    type: 'BUFFER_START',
                    index: 45,
                    getEventModel: function getEventModel() {
                        return {};
                    }
                },
                /**
                 * @type {string} BUFFER_END
                 * @memberof KavaEventType
                 */
                BUFFER_END: {
                    type: 'BUFFER_END',
                    index: 46,
                    getEventModel: function getEventModel() {
                        return {};
                    }
                },
                /**
                 * @type {string} REPLAY
                 * @memberof KavaEventType
                 */
                REPLAY: {
                    type: 'REPLAY',
                    index: 34,
                    getEventModel: function getEventModel() {
                        return {};
                    }
                },
                /**
                 * @type {string} SEEK
                 * @memberof KavaEventType
                 */
                SEEK: {
                    type: 'SEEK',
                    index: 35,
                    getEventModel: function getEventModel(model) {
                        return {
                            targetPosition: model.getTargetPosition()
                        };
                    }
                },
                /**
                 * @type {string} PLAY_REACHED_25_PERCENT
                 * @memberof KavaEventType
                 */
                PLAY_REACHED_25_PERCENT: {
                    type: 'PLAY_REACHED_25_PERCENT',
                    index: 11,
                    getEventModel: function getEventModel() {
                        return {};
                    }
                },
                /**
                 * @type {string} PLAY_REACHED_50_PERCENT
                 * @memberof KavaEventType
                 */
                PLAY_REACHED_50_PERCENT: {
                    type: 'PLAY_REACHED_50_PERCENT',
                    index: 12,
                    getEventModel: function getEventModel() {
                        return {};
                    }
                },
                /**
                 * @type {string} PLAY_REACHED_75_PERCENT
                 * @memberof KavaEventType
                 */
                PLAY_REACHED_75_PERCENT: {
                    type: 'PLAY_REACHED_75_PERCENT',
                    index: 13,
                    getEventModel: function getEventModel() {
                        return {};
                    }
                },
                /**
                 * @type {string} PLAY_REACHED_100_PERCENT
                 * @memberof KavaEventType
                 */
                PLAY_REACHED_100_PERCENT: {
                    type: 'PLAY_REACHED_100_PERCENT',
                    index: 14,
                    getEventModel: function getEventModel() {
                        return {};
                    }
                },
                /**
                 * @type {string} SOURCE_SELECTED
                 * @memberof KavaEventType
                 */
                SOURCE_SELECTED: {
                    type: 'SOURCE_SELECTED',
                    index: 39,
                    getEventModel: function getEventModel(model) {
                        return {
                            actualBitrate: model.getActualBitrate()
                        };
                    }
                },
                /**
                 * @type {string} AUDIO_SELECTED
                 * @memberof KavaEventType
                 */
                AUDIO_SELECTED: {
                    type: 'AUDIO_SELECTED',
                    index: 42,
                    getEventModel: function getEventModel(model) {
                        return {
                            language: model.getLanguage()
                        };
                    }
                },
                /**
                 * @type {string} FLAVOR_SWITCH
                 * @memberof KavaEventType
                 */
                FLAVOR_SWITCH: {
                    type: 'FLAVOR_SWITCH',
                    index: 43,
                    getEventModel: function getEventModel(model) {
                        return {
                            actualBitrate: model.getActualBitrate()
                        };
                    }
                },
                /**
                 * @type {string} CAPTIONS
                 * @memberof KavaEventType
                 */
                CAPTIONS: {
                    type: 'CAPTIONS',
                    index: 38,
                    getEventModel: function getEventModel(model) {
                        return {
                            caption: model.getCaption()
                        };
                    }
                },
                /**
                 * @type {string} ERROR
                 * @memberof KavaEventType
                 */
                ERROR: {
                    type: 'ERROR',
                    index: 98,
                    getEventModel: function getEventModel(model) {
                        return {
                            errorCode: model.getErrorCode()
                        };
                    }
                }
            };
            var KavaEventType = exports.KavaEventType = function(eventType) {
                Object.keys(KavaEventModel).forEach(function(k) {
                    return eventType[k] = k;
                });
                return eventType;
            }({});

            /**
             * Gets the full event model for a certain event object including the common params.
             * @private
             * @param {KavaEvent} eventObj - The event model.
             * @param {KavaModel} model - The plugin model store.
             * @returns {Object} - The full event model.
             */
            function getEventModel(eventObj, model) {
                var commonModel = {
                    eventType: eventObj.index,
                    partnerId: model.getPartnerId(),
                    entryId: model.getEntryId(),
                    sessionId: model.getSessionId(),
                    eventIndex: model.getEventIndex(),
                    referrer: model.getReferrer(),
                    deliveryType: model.getDeliveryType(),
                    playbackType: model.getPlaybackType(),
                    clientVer: model.getClientVer(),
                    clientTag: model.getClientTag(),
                    position: model.getPosition()
                };
                if (model.getSessionStartTime()) {
                    commonModel.sessionStartTime = model.getSessionStartTime();
                }
                if (model.getKS()) {
                    commonModel.ks = model.getKS();
                }
                if (model.getUIConfId()) {
                    commonModel.uiConfId = model.getUIConfId();
                }
                if (model.getPlaylistId()) {
                    commonModel.playlistId = model.getPlaylistId();
                }
                if (model.getCustomVar1()) {
                    commonModel.customVar1 = model.getCustomVar1();
                }
                if (model.getCustomVar2()) {
                    commonModel.customVar2 = model.getCustomVar2();
                }
                if (model.getCustomVar3()) {
                    commonModel.customVar3 = model.getCustomVar3();
                }
                if (model.getPlaybackContext()) {
                    commonModel.playbackContext = model.getPlaybackContext();
                }
                if (model.getApplicationVersion()) {
                    commonModel.applicationVersion = model.getApplicationVersion();
                }
                var eventModel = eventObj.getEventModel(model);
                return Object.assign(eventModel, commonModel);
            }

            /***/
        }),
        /* 1 */
        /***/
        (function(module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

            /***/
        }),
        /* 2 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.KavaModel = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _kavaEventModel = __webpack_require__(0);

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * The KAVA model that stores data.
             * @class KavaModel
             * @private
             * @param {?Object} - Initial model.
             */
            var KavaModel = function() {
                function KavaModel(model) {
                    _classCallCheck(this, KavaModel);

                    if (model) {
                        this.updateModel(model);
                    }
                }

                /**
                 * Gets the total play time.
                 * @returns {number} - The play time sum.
                 * @memberof KavaModel
                 * @instance
                 */


                _createClass(KavaModel, [{
                    key: 'getPlayTimeSum',
                    value: function getPlayTimeSum() {
                        return this.playTimeSum;
                    }
                }, {
                    key: 'getCanPlayTime',
                    value: function getCanPlayTime() {
                        return this.canPlayTime;
                    }

                    /**
                     * Gets the buffer time.
                     * @returns {number} - The buffer time.
                     * @memberof KavaModel
                     * @instance
                     */

                }, {
                    key: 'getBufferTime',
                    value: function getBufferTime() {
                        return this.bufferTime;
                    }

                    /**
                     * Gets the total buffer time.
                     * @returns {number} - The total buffer time.
                     * @memberof KavaModel
                     * @instance
                     */

                }, {
                    key: 'getBufferTimeSum',
                    value: function getBufferTimeSum() {
                        return this.bufferTimeSum;
                    }

                    /**
                     * Gets the join time.
                     * @returns {number} - The join time.
                     * @memberof KavaModel
                     * @instance
                     */

                }, {
                    key: 'getJoinTime',
                    value: function getJoinTime() {
                        return this.joinTime;
                    }

                    /**
                     * Gets a target position
                     * @returns {number} - The target position.
                     * @memberof KavaModel
                     * @instance
                     */

                }, {
                    key: 'getTargetPosition',
                    value: function getTargetPosition() {
                        return this.targetPosition;
                    }

                    /**
                     * Gets an audio language.
                     * @returns {string} - The audio language.
                     * @memberof KavaModel
                     * @instance
                     */

                }, {
                    key: 'getLanguage',
                    value: function getLanguage() {
                        return this.language;
                    }

                    /**
                     * Gets a caption language.
                     * @returns {string} - The caption language.
                     * @memberof KavaModel
                     * @instance
                     */

                }, {
                    key: 'getCaption',
                    value: function getCaption() {
                        return this.caption;
                    }

                    /**
                     * Gets the error code.
                     * @returns {number} - The error code.
                     * @memberof KavaModel
                     * @instance
                     */

                }, {
                    key: 'getErrorCode',
                    value: function getErrorCode() {
                        return this.errorCode;
                    }

                    /**
                     * Gets the event index counter.
                     * @returns {number} - The event index counter.
                     * @memberof KavaModel
                     * @instance
                     */

                }, {
                    key: 'getEventIndex',
                    value: function getEventIndex() {
                        return this.eventIndex;
                    }

                    /**
                     * Gets the session start time.
                     * @returns {number} - The session start time.
                     * @memberof KavaModel
                     * @instance
                     */

                }, {
                    key: 'getSessionStartTime',
                    value: function getSessionStartTime() {
                        return this.sessionStartTime;
                    }

                    /**
                     * Updates the model.
                     * @param {Object} obj - A partial or full updated model.
                     * @returns {void}
                     * @memberof KavaModel
                     * @instance
                     */

                }, {
                    key: 'updateModel',
                    value: function updateModel(obj) {
                        Object.assign(this, obj);
                    }

                    /**
                     * Gets the model for a certain event.
                     * @param {KavaEvent} eventObj - The event object.
                     * @returns {Object} - The event model.
                     * @memberof KavaModel
                     * @instance
                     */

                }, {
                    key: 'getModel',
                    value: function getModel(eventObj) {
                        return (0, _kavaEventModel.getEventModel)(eventObj, this);
                    }
                }]);

                return KavaModel;
            }();

            exports.KavaModel = KavaModel;

            /***/
        }),
        /* 3 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.NAME = exports.VERSION = exports.EventType = exports.Plugin = undefined;

            var _kavaEventModel = __webpack_require__(0);

            Object.defineProperty(exports, 'EventType', {
                enumerable: true,
                get: function get() {
                    return _kavaEventModel.KavaEventType;
                }
            });

            var _playkitJs = __webpack_require__(1);

            var _kava = __webpack_require__(4);

            exports.Plugin = _kava.Kava;
            exports.VERSION = "0.7.1";
            exports.NAME = "@playkit-js/playkit-js-kava";


            var pluginName = 'kava';

            (0, _playkitJs.registerPlugin)(pluginName, _kava.Kava);

            /***/
        }),
        /* 4 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Kava = undefined;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _playkitJs = __webpack_require__(1);

            var _playkitAnalyticsService = __webpack_require__(5);

            var _kavaEventModel = __webpack_require__(0);

            var _kavaRateHandler = __webpack_require__(6);

            var _kavaTimer = __webpack_require__(7);

            var _kavaModel = __webpack_require__(2);

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var DIVIDER = 1024;

            /**
             * Kaltura Advanced Analytics plugin.
             * @class Kava
             * @param {string} name - The plugin name.
             * @param {Player} player - The player instance.
             * @param {KavaConfigObject} config - The plugin config.
             */

            var Kava = function(_BasePlugin) {
                _inherits(Kava, _BasePlugin);

                _createClass(Kava, null, [{
                    key: 'isValid',


                    /**
                     * @static
                     * @return {boolean} - Whether the plugin is valid in the current environment.
                     * @memberof Kava
                     */
                    value: function isValid() {
                        return true;
                    }

                    /**
                     * Default config of the plugin.
                     * @type {Object}
                     * @static
                     * @memberof Kava
                     */

                }]);

                function Kava(name, player, config) {
                    _classCallCheck(this, Kava);

                    var _this = _possibleConstructorReturn(this, (Kava.__proto__ || Object.getPrototypeOf(Kava)).call(this, name, player, config));

                    _this._rateHandler = new _kavaRateHandler.KavaRateHandler();
                    _this._model = new _kavaModel.KavaModel();
                    _this._setModelDelegates();
                    _this._timer = new _kavaTimer.KavaTimer({
                        resetCounter: _this.config.resetSessionCountdown,
                        eventCounter: _this.config.viewEventCountdown
                    });
                    _this._viewEventEnabled = true;
                    _this._resetFlags();
                    _this._addBindings();
                    _this._model.updateModel({
                        eventIndex: 1,
                        bufferTime: 0.0,
                        bufferTimeSum: 0.0,
                        playTimeSum: 0.0
                    });
                    return _this;
                }

                /**
                 * Destroys the plugin.
                 * @return {void}
                 * @memberof Kava
                 * @instance
                 */


                _createClass(Kava, [{
                    key: 'destroy',
                    value: function destroy() {
                        this.eventManager.destroy();
                        this._timer.destroy();
                        this._rateHandler.destroy();
                    }

                    /**
                     * Reset the plugin.
                     * @return {void}
                     * @memberof Kava
                     * @instance
                     */

                }, {
                    key: 'reset',
                    value: function reset() {
                        this.eventManager.removeAll();
                        this._rateHandler.destroy();
                        this._timer.destroy();
                        this._resetFlags();
                        this._addBindings();
                        this._model.updateModel({
                            eventIndex: 1,
                            bufferTime: 0.0,
                            bufferTimeSum: 0.0,
                            playTimeSum: 0.0,
                            sessionStartTime: null
                        });
                    }

                    /**
                     * Gets the model object for a certain event.
                     * @param {string} event - Event name.
                     * @returns {Object} - Model object.
                     * @instance
                     * @memberof Kava
                     * @example
                     * const kava = player.plugins.kava;
                     * const viewModel = kava.getEventModel(kava.EventType.VIEW);
                     * kava.sendAnalytics(viewModel);
                     */

                }, {
                    key: 'getEventModel',
                    value: function getEventModel(event) {
                        if (event) {
                            return this._model.getModel(_kavaEventModel.KavaEventModel[event]);
                        }
                    }

                    /**
                     * @returns {KavaEventType} - The kava events list.
                     * @instance
                     * @memberof Kava
                     */

                }, {
                    key: 'sendAnalytics',


                    /**
                     * Sends KAVA analytics event to analytics service.
                     * @param {Object} model - Event model.
                     * @returns {Promise} - Promise to indicate request succeed or failed.
                     * @instance
                     * @memberof Kava
                     * @example
                     * player.plugins.kava.sendAnalytics({...})
                     * .then(() => {
                     *   console.log('kava analytics sent successfully');
                     * })
                     * .catch(e => {
                     *   console.log('kava analytics send failed', e);
                     * });
                     */
                    value: function sendAnalytics(model) {
                        var _this2 = this;

                        return new Promise(function(resolve, reject) {
                            _playkitAnalyticsService.OVPAnalyticsService.trackEvent(_this2.config.serviceUrl, model).doHttpRequest().then(function(response) {
                                _this2._handleServerResponseSuccess(response, model);
                                resolve();
                            }, function(err) {
                                _this2._handleServerResponseFailed(err, model);
                                reject(err);
                            });
                            _this2._model.updateModel({
                                eventIndex: _this2._model.getEventIndex() + 1
                            });
                        });
                    }
                }, {
                    key: '_resetFlags',
                    value: function _resetFlags() {
                        this._previousCurrentTime = 0;
                        this._isPlaying = false;
                        this._isFirstPlay = true;
                        this._isEnded = false;
                        this._isPaused = false;
                        this._isBuffering = false;
                        this._timePercentEvent = {
                            PLAY_REACHED_25_PERCENT: false,
                            PLAY_REACHED_50_PERCENT: false,
                            PLAY_REACHED_75_PERCENT: false,
                            PLAY_REACHED_100_PERCENT: false
                        };
                    }
                }, {
                    key: '_resetSession',
                    value: function _resetSession() {
                        this.logger.debug('Reset KAVA session');
                        this._rateHandler.reset();
                        this._model.updateModel({
                            eventIndex: 1,
                            bufferTimeSum: 0.0,
                            playTimeSum: 0.0
                        });
                    }
                }, {
                    key: '_sendAnalytics',
                    value: function _sendAnalytics(eventObj) {
                        if (!this._validate()) {
                            return;
                        }
                        if (this._isBuffering) {
                            this._updateBufferModel();
                            this._bufferStartTime = Date.now();
                        }
                        var model = this._model.getModel(eventObj);
                        if (typeof this.config.tamperAnalyticsHandler === 'function') {
                            var sendRequest = this.config.tamperAnalyticsHandler(model);
                            if (!sendRequest) {
                                this.logger.debug('Cancel KAVA request', model);
                                return;
                            }
                        }
                        this.logger.debug('Sending KAVA event ' + model.eventType + ':' + eventObj.type);
                        this.sendAnalytics(model);
                    }
                }, {
                    key: '_handleServerResponseSuccess',
                    value: function _handleServerResponseSuccess(response, model) {
                        this.logger.debug('KAVA event sent', model);
                        this._updateSessionStartTimeModel(response);
                    }
                }, {
                    key: '_handleServerResponseFailed',
                    value: function _handleServerResponseFailed(err, model) {
                        this.logger.error('Failed to send KAVA event', model, err);
                    }
                }, {
                    key: '_addBindings',
                    value: function _addBindings() {
                        var _this3 = this;

                        this.eventManager.listen(this._timer, _kavaTimer.KavaTimer.Event.TICK, function() {
                            return _this3._rateHandler.countCurrent();
                        });
                        this.eventManager.listen(this._timer, _kavaTimer.KavaTimer.Event.REPORT, function() {
                            return _this3._onReport();
                        });
                        this.eventManager.listen(this._timer, _kavaTimer.KavaTimer.Event.RESET, function() {
                            return _this3._resetSession();
                        });
                        this.eventManager.listen(this.player, this.player.Event.SOURCE_SELECTED, function() {
                            return _this3._onSourceSelected();
                        });
                        this.eventManager.listen(this.player, this.player.Event.ERROR, function(event) {
                            return _this3._onError(event);
                        });
                        this.eventManager.listen(this.player, this.player.Event.FIRST_PLAY, function() {
                            return _this3._onFirstPlay();
                        });
                        this.eventManager.listen(this.player, this.player.Event.TRACKS_CHANGED, function() {
                            return _this3._setInitialTracks();
                        });
                        this.eventManager.listen(this.player, this.player.Event.PLAYING, function() {
                            return _this3._onPlaying();
                        });
                        this.eventManager.listen(this.player, this.player.Event.FIRST_PLAYING, function() {
                            return _this3._onFirstPlaying();
                        });
                        this.eventManager.listen(this.player, this.player.Event.SEEKING, function() {
                            return _this3._onSeeking();
                        });
                        this.eventManager.listen(this.player, this.player.Event.PAUSE, function() {
                            return _this3._onPause();
                        });
                        this.eventManager.listen(this.player, this.player.Event.ENDED, function() {
                            return _this3._onEnded();
                        });
                        this.eventManager.listen(this.player, this.player.Event.TIME_UPDATE, function() {
                            return _this3._onTimeUpdate();
                        });
                        this.eventManager.listen(this.player, this.player.Event.VIDEO_TRACK_CHANGED, function(event) {
                            return _this3._onVideoTrackChanged(event);
                        });
                        this.eventManager.listen(this.player, this.player.Event.AUDIO_TRACK_CHANGED, function(event) {
                            return _this3._onAudioTrackChanged(event);
                        });
                        this.eventManager.listen(this.player, this.player.Event.TEXT_TRACK_CHANGED, function(event) {
                            return _this3._onTextTrackChanged(event);
                        });
                        this.eventManager.listen(this.player, this.player.Event.PLAYER_STATE_CHANGED, function(event) {
                            return _this3._onPlayerStateChanged(event);
                        });
                        this.eventManager.listen(this.player, this.player.Event.CAN_PLAY, function() {
                            return _this3._onCanPlay();
                        });
                        this.eventManager.listen(this.player, this.player.Event.LOAD_START, function() {
                            return _this3._onLoadStart();
                        });
                    }
                }, {
                    key: '_onFirstPlaying',
                    value: function _onFirstPlaying() {
                        this._isPlaying = true;
                    }
                }, {
                    key: '_onLoadStart',
                    value: function _onLoadStart() {
                        this._loadStartTime = Date.now();
                    }
                }, {
                    key: '_getRates',
                    value: function _getRates() {
                        var rates = [];
                        var videoTracks = this.player.getTracks(this.player.Track.VIDEO);
                        videoTracks.forEach(function(videoTrack) {
                            return rates.push(videoTrack.bandwidth / DIVIDER);
                        });
                        return rates;
                    }
                }, {
                    key: '_setInitialTracks',
                    value: function _setInitialTracks() {
                        var rates = this._getRates();
                        var activeTracks = this.player.getActiveTracks();
                        this._rateHandler.setRates(rates);
                        if (activeTracks.video) {
                            this._rateHandler.setCurrent(activeTracks.video.bandwidth / DIVIDER);
                        }
                        if (activeTracks.audio) {
                            this._model.updateModel({
                                language: activeTracks.audio.language
                            });
                        }
                        if (activeTracks.text) {
                            this._model.updateModel({
                                caption: activeTracks.text.language
                            });
                        }
                    }
                }, {
                    key: '_onReport',
                    value: function _onReport() {
                        if (this._viewEventEnabled) {
                            this._updatePlayTimeSumModel();
                            this._sendAnalytics(_kavaEventModel.KavaEventModel.VIEW);
                        } else {
                            this.logger.warn('VIEW event blocked because server response of viewEventsEnabled=false');
                        }
                        this._model.updateModel({
                            bufferTime: 0
                        });
                    }
                }, {
                    key: '_onPlaying',
                    value: function _onPlaying() {
                        if (this._isFirstPlay) {
                            this._timer.start();
                            this._isFirstPlay = false;
                            this._model.updateModel({
                                joinTime: Kava._getTimeDifferenceInSeconds(this._firstPlayRequestTime)
                            });
                            this._sendAnalytics(_kavaEventModel.KavaEventModel.PLAY);
                        } else if (this._isEnded) {
                            this._timer.start();
                            this._isEnded = false;
                            this._sendAnalytics(_kavaEventModel.KavaEventModel.REPLAY);
                        } else if (this._isPaused) {
                            this._timer.resume();
                            this._isPaused = false;
                            this._sendAnalytics(_kavaEventModel.KavaEventModel.RESUME);
                        }
                    }
                }, {
                    key: '_onCanPlay',
                    value: function _onCanPlay() {
                        this._model.updateModel({
                            canPlayTime: Kava._getTimeDifferenceInSeconds(this._loadStartTime)
                        });
                    }
                }, {
                    key: '_onFirstPlay',
                    value: function _onFirstPlay() {
                        this._firstPlayRequestTime = Date.now();
                        this._sendAnalytics(_kavaEventModel.KavaEventModel.PLAY_REQUEST);
                    }
                }, {
                    key: '_onSourceSelected',
                    value: function _onSourceSelected() {
                        this._sendAnalytics(_kavaEventModel.KavaEventModel.IMPRESSION);
                    }
                }, {
                    key: '_onSeeking',
                    value: function _onSeeking() {
                        this._previousCurrentTime = this.player.currentTime;
                        this._model.updateModel({
                            targetPosition: this.player.currentTime
                        });
                        this._sendAnalytics(_kavaEventModel.KavaEventModel.SEEK);
                    }
                }, {
                    key: '_onPause',
                    value: function _onPause() {
                        this._isPaused = true;
                        this._timer.stop();
                        this._sendAnalytics(_kavaEventModel.KavaEventModel.PAUSE);
                    }
                }, {
                    key: '_onEnded',
                    value: function _onEnded() {
                        this._isEnded = true;
                        this._onTimeUpdate();
                        this._model.updateModel({
                            bufferTime: 0
                        });
                    }
                }, {
                    key: '_onTimeUpdate',
                    value: function _onTimeUpdate() {
                        if (!this.player.isLive()) {
                            this._updatePlayTimeSumModel();
                            var percent = parseFloat((this.player.currentTime / this.player.duration).toFixed(2));
                            if (!this._timePercentEvent.PLAY_REACHED_25 && percent >= 0.25) {
                                this._timePercentEvent.PLAY_REACHED_25 = true;
                                this._sendAnalytics(_kavaEventModel.KavaEventModel.PLAY_REACHED_25_PERCENT);
                            }
                            if (!this._timePercentEvent.PLAY_REACHED_50 && percent >= 0.5) {
                                this._timePercentEvent.PLAY_REACHED_50 = true;
                                this._sendAnalytics(_kavaEventModel.KavaEventModel.PLAY_REACHED_50_PERCENT);
                            }
                            if (!this._timePercentEvent.PLAY_REACHED_75 && percent >= 0.75) {
                                this._timePercentEvent.PLAY_REACHED_75 = true;
                                this._sendAnalytics(_kavaEventModel.KavaEventModel.PLAY_REACHED_75_PERCENT);
                            }
                            if (!this._timePercentEvent.PLAY_REACHED_100 && percent === 1) {
                                this._timePercentEvent.PLAY_REACHED_100 = true;
                                this._sendAnalytics(_kavaEventModel.KavaEventModel.PLAY_REACHED_100_PERCENT);
                            }
                        }
                    }
                }, {
                    key: '_onVideoTrackChanged',
                    value: function _onVideoTrackChanged(event) {
                        var videoTrack = event.payload.selectedVideoTrack;
                        this._rateHandler.setCurrent(videoTrack.bandwidth / DIVIDER);
                        if (this.player.isAdaptiveBitrateEnabled()) {
                            this._sendAnalytics(_kavaEventModel.KavaEventModel.FLAVOR_SWITCH);
                        } else {
                            this._sendAnalytics(_kavaEventModel.KavaEventModel.SOURCE_SELECTED);
                        }
                    }
                }, {
                    key: '_onAudioTrackChanged',
                    value: function _onAudioTrackChanged(event) {
                        var audioTrack = event.payload.selectedAudioTrack;
                        this._model.updateModel({
                            language: audioTrack.language
                        });
                        this._sendAnalytics(_kavaEventModel.KavaEventModel.AUDIO_SELECTED);
                    }
                }, {
                    key: '_onTextTrackChanged',
                    value: function _onTextTrackChanged(event) {
                        if (this._isPlaying) {
                            var textTrack = event.payload.selectedTextTrack;
                            this._model.updateModel({
                                caption: textTrack.language
                            });
                            this._sendAnalytics(_kavaEventModel.KavaEventModel.CAPTIONS);
                        }
                    }
                }, {
                    key: '_onError',
                    value: function _onError(event) {
                        if (event.payload && event.payload.severity === _playkitJs.Error.Severity.CRITICAL) {
                            this._model.updateModel({
                                errorCode: event.payload.code
                            });
                            this._sendAnalytics(_kavaEventModel.KavaEventModel.ERROR);
                            this.reset();
                        }
                    }
                }, {
                    key: '_onPlayerStateChanged',
                    value: function _onPlayerStateChanged(event) {
                        var oldState = event.payload.oldState;
                        var newState = event.payload.newState;
                        if (oldState.type === this.player.State.BUFFERING) {
                            this._isBuffering = false;
                            this._updateBufferModel();
                            this._sendAnalytics(_kavaEventModel.KavaEventModel.BUFFER_END);
                        }
                        if (newState.type === this.player.State.BUFFERING) {
                            this._isBuffering = true;
                            this._bufferStartTime = Date.now();
                            this._sendAnalytics(_kavaEventModel.KavaEventModel.BUFFER_START);
                        }
                    }
                }, {
                    key: '_updateSessionStartTimeModel',
                    value: function _updateSessionStartTimeModel(response) {
                        if (!this._model.getSessionStartTime() && response) {
                            if ((typeof response === 'undefined' ? 'undefined' : _typeof(response)) === 'object') {
                                this._model.updateModel({
                                    sessionStartTime: response.time
                                });
                                this._viewEventEnabled = response.viewEventsEnabled;
                            } else {
                                this._model.updateModel({
                                    sessionStartTime: response
                                });
                            }
                        }
                        if (this._timer.isStopped()) {
                            this._model.updateModel({
                                sessionStartTime: null
                            });
                        }
                    }
                }, {
                    key: '_updateBufferModel',
                    value: function _updateBufferModel() {
                        var duration = Kava._getTimeDifferenceInSeconds(this._bufferStartTime);
                        this._model.updateModel({
                            bufferTime: this._model.getBufferTime() + duration,
                            bufferTimeSum: this._model.getBufferTimeSum() + duration
                        });
                    }
                }, {
                    key: '_updatePlayTimeSumModel',
                    value: function _updatePlayTimeSumModel() {
                        var delta = void 0;
                        if (this.player.isLive()) {
                            delta = this.config.viewEventCountdown - this._model.getBufferTime();
                        } else {
                            delta = this.player.currentTime - this._previousCurrentTime;
                            this._previousCurrentTime = this.player.currentTime;
                        }
                        this._model.updateModel({
                            playTimeSum: this._model.getPlayTimeSum() + delta
                        });
                    }
                }, {
                    key: '_setModelDelegates',
                    value: function _setModelDelegates() {
                        var _this4 = this;

                        this._model.getActualBitrate = function() {
                            return _this4._rateHandler.getCurrent();
                        };
                        this._model.getAverageBitrate = function() {
                            return _this4._rateHandler.getAverage();
                        };
                        this._model.getPartnerId = function() {
                            return _this4.config.partnerId;
                        };
                        this._model.getEntryId = function() {
                            return _this4.config.entryId;
                        };
                        this._model.getPlaylistId = function() {
                            return _this4.config.playlistId;
                        };
                        this._model.getSessionId = function() {
                            return _this4.config.sessionId;
                        };
                        this._model.getClientVer = function() {
                            return _this4.config.playerVersion;
                        };
                        this._model.getClientTag = function() {
                            return 'html5:v' + _this4.config.playerVersion;
                        };
                        this._model.getKS = function() {
                            return _this4.config.ks;
                        };
                        this._model.getUIConfId = function() {
                            return _this4.config.uiConfId;
                        };
                        this._model.getReferrer = function() {
                            return _this4.config.referrer;
                        };
                        this._model.getCustomVar1 = function() {
                            return _this4.config.customVar1;
                        };
                        this._model.getCustomVar2 = function() {
                            return _this4.config.customVar2;
                        };
                        this._model.getCustomVar3 = function() {
                            return _this4.config.customVar3;
                        };
                        this._model.getPosition = function() {
                            return _this4._getPosition();
                        };
                        this._model.getDeliveryType = function() {
                            return _this4._getDeliveryType();
                        };
                        this._model.getPlaybackType = function() {
                            return _this4._getPlaybackType();
                        };
                        this._model.getPlaybackContext = function() {
                            return _this4.config.playbackContext;
                        };
                        this._model.getApplicationVersion = function() {
                            return _this4.config.applicationVersion;
                        };
                    }
                }, {
                    key: '_getPosition',
                    value: function _getPosition() {
                        if (this.player.isLive()) {
                            if (!Number.isNaN(this.player.duration)) {
                                if (this.player.duration - this.player.currentTime < 1) {
                                    return 0;
                                }
                                return -(this.player.duration - this.player.currentTime);
                            }
                            return 0;
                        }
                        return this.player.currentTime;
                    }
                }, {
                    key: '_getDeliveryType',
                    value: function _getDeliveryType() {
                        if (this.player.streamType === this.player.StreamType.PROGRESSIVE) {
                            return 'url';
                        }
                        return this.player.streamType;
                    }
                }, {
                    key: '_getPlaybackType',
                    value: function _getPlaybackType() {
                        if (this.player.isLive()) {
                            if (this.player.isDvr()) {
                                var distanceFromLiveEdge = this.player.duration - this.player.currentTime;
                                if (distanceFromLiveEdge >= this.config.dvrThreshold) {
                                    return 'dvr';
                                }
                            }
                            return 'live';
                        }
                        return 'vod';
                    }
                }, {
                    key: '_validate',
                    value: function _validate() {
                        if (!this.config.partnerId) {
                            this._logMissingParam('partnerId');
                            return false;
                        }
                        if (!this.config.entryId) {
                            this._logMissingParam('entryId');
                            return false;
                        }
                        return true;
                    }
                }, {
                    key: '_logMissingParam',
                    value: function _logMissingParam(missingParam) {
                        this.logger.warn('Kava analytics block report because of missing param ' + missingParam);
                    }
                }, {
                    key: 'EventType',
                    get: function get() {
                        return _playkitJs.Utils.Object.copyDeep(_kavaEventModel.KavaEventType);
                    }
                }], [{
                    key: '_getTimeDifferenceInSeconds',
                    value: function _getTimeDifferenceInSeconds(time) {
                        return (Date.now() - time) / 1000.0;
                    }
                }]);

                return Kava;
            }(_playkitJs.BasePlugin);

            Kava.defaultConfig = {
                serviceUrl: '//analytics.kaltura.com/api_v3/index.php',
                viewEventCountdown: 10,
                resetSessionCountdown: 30,
                dvrThreshold: 120,
                playbackContext: '',
                applicationVersion: ''
            };
            exports.Kava = Kava;

            /***/
        }),
        /* 5 */
        /***/
        (function(module, exports, __webpack_require__) {

            ! function(e, t) {
                true ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.analytics = t() : (e.playkit = e.playkit || {}, e.playkit.services = e.playkit.services || {}, e.playkit.services.analytics = t())
            }(this, function() {
                return function(e) {
                    function t(r) {
                        if (n[r]) return n[r].exports;
                        var o = n[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.i = function(e) {
                        return e
                    }, t.d = function(e, n, r) {
                        t.o(e, n) || Object.defineProperty(e, n, {
                            configurable: !1,
                            enumerable: !0,
                            get: r
                        })
                    }, t.n = function(e) {
                        var n = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(n, "a", n), n
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 15)
                }([function(e, t, n) {
                    "use strict";

                    function r(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        i = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        u = function() {
                            function e() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map;
                                r(this, e), this.headers = t
                            }
                            return i(e, [{
                                key: "getUrl",
                                value: function(e) {
                                    return e + "/service/" + this.service + (this.action ? "/action/" + this.action : "")
                                }
                            }, {
                                key: "doHttpRequest",
                                value: function() {
                                    var e = this;
                                    if (!this.url) throw new Error("serviceUrl is mandatory for request builder");
                                    var t = new XMLHttpRequest;
                                    return new Promise(function(n, r) {
                                        t.onreadystatechange = function() {
                                            if (4 === t.readyState)
                                                if (200 === t.status) {
                                                    var e = void 0;
                                                    try {
                                                        e = JSON.parse(t.responseText)
                                                    } catch (e) {
                                                        return r(e.message + ", " + t.responseText)
                                                    }
                                                    e && "object" === (void 0 === e ? "undefined" : o(e)) && e.code && e.message ? r(e) : n(e)
                                                } else r(t.responseText)
                                        }, t.open(e.method, e.url), e.headers.forEach(function(e, n) {
                                            t.setRequestHeader(n, e)
                                        }), t.send(e.params)
                                    })
                                }
                            }]), e
                        }();
                    t.default = u
                }, function(e, t, n) {
                    "use strict";

                    function r(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.OVPConfiguration = void 0;
                    var o = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        i = n(4),
                        u = {
                            serviceUrl: "https://cdnapisec.kaltura.com/api_v3",
                            cdnUrl: "//cdnapisec.kaltura.com",
                            serviceParams: {
                                apiVersion: "3.3.0",
                                format: 1
                            }
                        },
                        a = function() {
                            function e() {
                                r(this, e)
                            }
                            return o(e, null, [{
                                key: "set",
                                value: function(e) {
                                    e && Object.assign(u, e)
                                }
                            }, {
                                key: "get",
                                value: function() {
                                    return (0, i.clone)(u)
                                }
                            }]), e
                        }();
                    t.default = a, t.OVPConfiguration = a
                }, function(e, t, n) {
                    "use strict";

                    function r(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = function e(t) {
                        r(this, e), this.hasError = !1, "KalturaAPIException" === t.objectType ? (this.hasError = !0, this.error = new i(t.code, t.message)) : t.error && "KalturaAPIException" === t.error.objectType ? (this.hasError = !0, this.error = new i(t.error.code, t.error.message)) : this.data = t
                    };
                    t.default = o;
                    var i = function e(t, n) {
                        r(this, e), this.code = t, this.message = n
                    }
                }, function(e, t, n) {
                    "use strict";

                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function o(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }

                    function i(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function u(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }

                    function a(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.MultiRequestResult = void 0;
                    var c = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        s = n(0),
                        l = r(s),
                        f = n(5),
                        p = r(f),
                        v = n(2),
                        y = r(v),
                        d = function(e) {
                            function t() {
                                var e, n, r, o;
                                i(this, t);
                                for (var a = arguments.length, c = Array(a), s = 0; s < a; s++) c[s] = arguments[s];
                                return n = r = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))), r.requests = [], o = n, u(r, o)
                            }
                            return a(t, e), c(t, [{
                                key: "add",
                                value: function(e) {
                                    this.requests.push(e);
                                    var t = {},
                                        n = {
                                            service: e.service,
                                            action: e.action
                                        };
                                    return Object.assign(t, o({}, this.requests.length, Object.assign(n, e.params))), Object.assign(t, this.params), this.params = t, this
                                }
                            }, {
                                key: "execute",
                                value: function() {
                                    var e = this;
                                    try {
                                        this.params = JSON.stringify(this.params)
                                    } catch (e) {
                                        t._logger.error("" + e.message)
                                    }
                                    return new Promise(function(t, n) {
                                        e.doHttpRequest().then(function(e) {
                                            t(new b(e))
                                        }, function(e) {
                                            n("Error on multiRequest execution, error <" + e + ">.")
                                        })
                                    })
                                }
                            }]), t
                        }(l.default);
                    d._logger = (0, p.default)("MultiRequestBuilder"), t.default = d;
                    var b = t.MultiRequestResult = function e(t) {
                        var n = this;
                        i(this, e), this.results = [], this.success = !0, (t.result ? t.result : t).forEach(function(t) {
                            var r = new y.default(t);
                            if (n.results.push(r), r.hasError) return e._logger.error("Service returned an error with error code: " + r.error.code + " and message: " + r.error.message + "."), void(n.success = !1)
                        })
                    };
                    b._logger = (0, p.default)("MultiRequestResult")
                }, function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        o = function e(t) {
                            var n = void 0;
                            return Array.isArray(t) ? (n = t.length > 0 ? t.slice(0) : [], n.forEach(function(t, o) {
                                ("object" === (void 0 === t ? "undefined" : r(t)) && t !== {} || Array.isArray(t) && t.length > 0) && (n[o] = e(t))
                            })) : "object" === (void 0 === t ? "undefined" : r(t)) ? (n = Object.assign({}, t), Object.keys(n).forEach(function(t) {
                                ("object" === r(n[t]) && n[t] !== {} || Array.isArray(n[t]) && n[t].length > 0) && (n[t] = e(n[t]))
                            })) : n = t, n
                        };
                    t.clone = o
                }, function(e, t, n) {
                    "use strict";

                    function r(e) {
                        return e ? a.get(e) : a
                    }

                    function o(e) {
                        return r(e).getLevel()
                    }

                    function i(e, t) {
                        r(t).setLevel(e)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.setLogLevel = t.getLogLevel = t.LogLevel = void 0;
                    var u = n(6),
                        a = function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            return t.default = e, t
                        }(u),
                        c = {
                            DEBUG: a.DEBUG,
                            INFO: a.INFO,
                            TIME: a.TIME,
                            WARN: a.WARN,
                            ERROR: a.ERROR,
                            OFF: a.OFF
                        };
                    a.useDefaults({
                        defaultLevel: a.ERROR
                    }), t.default = r, t.LogLevel = c, t.getLogLevel = o, t.setLogLevel = i
                }, function(e, t, n) {
                    var r, o;
                    /*!
                     * js-logger - http://github.com/jonnyreeves/js-logger
                     * Jonny Reeves, http://jonnyreeves.co.uk/
                     * js-logger may be freely distributed under the MIT license.
                     */
                    ! function(i) {
                        "use strict";
                        var u = {};
                        u.VERSION = "1.4.1";
                        var a, c = {},
                            s = function(e, t) {
                                return function() {
                                    return t.apply(e, arguments)
                                }
                            },
                            l = function() {
                                var e, t, n = arguments,
                                    r = n[0];
                                for (t = 1; t < n.length; t++)
                                    for (e in n[t]) e in r || !n[t].hasOwnProperty(e) || (r[e] = n[t][e]);
                                return r
                            },
                            f = function(e, t) {
                                return {
                                    value: e,
                                    name: t
                                }
                            };
                        u.DEBUG = f(1, "DEBUG"), u.INFO = f(2, "INFO"), u.TIME = f(3, "TIME"), u.WARN = f(4, "WARN"), u.ERROR = f(8, "ERROR"), u.OFF = f(99, "OFF");
                        var p = function(e) {
                            this.context = e, this.setLevel(e.filterLevel), this.log = this.info
                        };
                        p.prototype = {
                            setLevel: function(e) {
                                e && "value" in e && (this.context.filterLevel = e)
                            },
                            getLevel: function() {
                                return this.context.filterLevel
                            },
                            enabledFor: function(e) {
                                var t = this.context.filterLevel;
                                return e.value >= t.value
                            },
                            debug: function() {
                                this.invoke(u.DEBUG, arguments)
                            },
                            info: function() {
                                this.invoke(u.INFO, arguments)
                            },
                            warn: function() {
                                this.invoke(u.WARN, arguments)
                            },
                            error: function() {
                                this.invoke(u.ERROR, arguments)
                            },
                            time: function(e) {
                                "string" == typeof e && e.length > 0 && this.invoke(u.TIME, [e, "start"])
                            },
                            timeEnd: function(e) {
                                "string" == typeof e && e.length > 0 && this.invoke(u.TIME, [e, "end"])
                            },
                            invoke: function(e, t) {
                                a && this.enabledFor(e) && a(t, l({
                                    level: e
                                }, this.context))
                            }
                        };
                        var v = new p({
                            filterLevel: u.OFF
                        });
                        ! function() {
                            var e = u;
                            e.enabledFor = s(v, v.enabledFor), e.debug = s(v, v.debug), e.time = s(v, v.time), e.timeEnd = s(v, v.timeEnd), e.info = s(v, v.info), e.warn = s(v, v.warn), e.error = s(v, v.error), e.log = e.info
                        }(), u.setHandler = function(e) {
                            a = e
                        }, u.setLevel = function(e) {
                            v.setLevel(e);
                            for (var t in c) c.hasOwnProperty(t) && c[t].setLevel(e)
                        }, u.getLevel = function() {
                            return v.getLevel()
                        }, u.get = function(e) {
                            return c[e] || (c[e] = new p(l({
                                name: e
                            }, v.context)))
                        }, u.createDefaultHandler = function(e) {
                            e = e || {}, e.formatter = e.formatter || function(e, t) {
                                t.name && e.unshift("[" + t.name + "]")
                            };
                            var t = {},
                                n = function(e, t) {
                                    Function.prototype.apply.call(e, console, t)
                                };
                            return "undefined" == typeof console ? function() {} : function(r, o) {
                                r = Array.prototype.slice.call(r);
                                var i, a = console.log;
                                o.level === u.TIME ? (i = (o.name ? "[" + o.name + "] " : "") + r[0], "start" === r[1] ? console.time ? console.time(i) : t[i] = (new Date).getTime() : console.timeEnd ? console.timeEnd(i) : n(a, [i + ": " + ((new Date).getTime() - t[i]) + "ms"])) : (o.level === u.WARN && console.warn ? a = console.warn : o.level === u.ERROR && console.error ? a = console.error : o.level === u.INFO && console.info ? a = console.info : o.level === u.DEBUG && console.debug && (a = console.debug), e.formatter(r, o), n(a, r))
                            }
                        }, u.useDefaults = function(e) {
                            u.setLevel(e && e.defaultLevel || u.DEBUG), u.setHandler(u.createDefaultHandler(e))
                        }, r = u, void 0 !== (o = "function" == typeof r ? r.call(t, n, t, e) : r) && (e.exports = o)
                    }()
                }, , function(e, t, n) {
                    "use strict";

                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function o(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        u = n(3),
                        a = r(u),
                        c = n(1),
                        s = r(c),
                        l = function() {
                            function e() {
                                o(this, e)
                            }
                            return i(e, null, [{
                                key: "getMultiRequest",
                                value: function(e, t, n) {
                                    var r = s.default.get(),
                                        o = r.serviceParams;
                                    Object.assign(o, {
                                        ks: t,
                                        clientTag: "html5:v" + e
                                    }), n && Object.assign(o, {
                                        partnerId: n
                                    });
                                    var i = new Map;
                                    i.set("Content-Type", "application/json");
                                    var u = new a.default(i);
                                    return u.method = "POST", u.service = "multirequest", u.url = u.getUrl(r.serviceUrl), u.params = o, u
                                }
                            }]), e
                        }();
                    t.default = l
                }, function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        o = function(e) {
                            var t = [],
                                n = /\[\]$/,
                                o = function(e) {
                                    return "[object Array]" === Object.prototype.toString.call(e)
                                },
                                i = function(e, n) {
                                    n = "function" == typeof n ? n() : null === n ? "" : void 0 === n ? "" : n, t[t.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n)
                                };
                            return function e(u, a) {
                                var c = void 0,
                                    s = void 0,
                                    l = void 0;
                                if (u)
                                    if (o(a))
                                        for (c = 0, s = a.length; c < s; c++) n.test(u) ? i(u, a[c]) : e(u + ":" + ("object" === r(a[c]) ? c : ""), a[c]);
                                    else if (a && "[object Object]" === String(a))
                                    for (l in a) e(u + ":" + l, a[l]);
                                else i(u, a);
                                else if (o(a))
                                    for (c = 0, s = a.length; c < s; c++) i(a[c].name, a[c].value);
                                else
                                    for (l in a) e(l, a[l]);
                                return t
                            }("", e).join("&").replace(/%20/g, "+")
                        };
                    t.param = o
                }, , function(e, t, n) {
                    "use strict";

                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function o(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }

                    function u(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        c = n(8),
                        s = r(c),
                        l = n(0),
                        f = r(l),
                        p = n(1),
                        v = r(p),
                        y = n(9),
                        d = function(e) {
                            function t() {
                                return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                            }
                            return u(t, e), a(t, null, [{
                                key: "trackEvent",
                                value: function(e, t) {
                                    var n = v.default.get(),
                                        r = {};
                                    Object.assign(r, n.serviceParams, t);
                                    var o = new f.default;
                                    return o.service = "analytics", o.action = "trackEvent", o.method = "GET", o.tag = "analytics-trackEvent", o.params = r, o.url = e + "?service=" + o.service + "&action=" + o.action + "&" + (0, y.param)(o.params), o
                                }
                            }]), t
                        }(s.default);
                    t.default = d
                }, , , , function(e, t, n) {
                    "use strict";

                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.VERSION = t.NAME = t.RequestBuilder = t.OVPConfiguration = t.OVPAnalyticsService = void 0;
                    var o = n(0),
                        i = r(o),
                        u = n(1),
                        a = r(u),
                        c = n(11),
                        s = r(c);
                    t.OVPAnalyticsService = s.default, t.OVPConfiguration = a.default, t.RequestBuilder = i.default, t.NAME = "playkit-js-providers-analytics-service", t.VERSION = "2.7.0"
                }])
            });
            //# sourceMappingURL=playkit-analytics-service.js.map

            /***/
        }),
        /* 6 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /**
             * Manage the video rates for the KAVA plugin.
             * @private
             * @class KavaRateHandler
             */
            var KavaRateHandler = function() {
                function KavaRateHandler() {
                    _classCallCheck(this, KavaRateHandler);

                    this._rates = [];

                    this._rates = [];
                }

                /**
                 * Sets the video rates.
                 * @param {Array<number>} rates - The video rates.
                 * @returns {void}
                 * @memberof KavaRateHandler
                 * @instance
                 */


                _createClass(KavaRateHandler, [{
                    key: "setRates",
                    value: function setRates(rates) {
                        var _this = this;

                        this._rates = [];
                        rates.forEach(function(rate) {
                            _this._rates.push({
                                rate: rate,
                                active: false,
                                duration: 0
                            });
                        });
                    }

                    /**
                     * Sets the current rate.
                     * @param {number} rate - The current rate.
                     * @returns {void}
                     * @memberof KavaRateHandler
                     * @instance
                     */

                }, {
                    key: "setCurrent",
                    value: function setCurrent(rate) {
                        this._rates.forEach(function(o) {
                            return o.active = false;
                        });
                        var obj = this._rates.find(function(o) {
                            return o.rate === rate;
                        });
                        if (obj) {
                            obj.active = true;
                        }
                    }

                    /**
                     * Gets the current rate.
                     * @returns {number} - The current rate.
                     * @memberof KavaRateHandler
                     * @instance
                     */

                }, {
                    key: "getCurrent",
                    value: function getCurrent() {
                        var current = this._rates.find(function(o) {
                            return o.active;
                        });
                        return current ? current.rate : -1;
                    }

                    /**
                     * Increases the duration of the current rate.
                     * @returns {void}
                     * @memberof KavaRateHandler
                     * @instance
                     */

                }, {
                    key: "countCurrent",
                    value: function countCurrent() {
                        var current = this._rates.find(function(o) {
                            return o.active;
                        });
                        if (current) {
                            current.duration++;
                        }
                    }

                    /**
                     * Gets the average rate.
                     * @returns {number} - The average rate.
                     * @memberof KavaRateHandler
                     * @instance
                     */

                }, {
                    key: "getAverage",
                    value: function getAverage() {
                        var totalDuration = 0;
                        var sum = 0;
                        this._rates.forEach(function(o) {
                            sum += o.rate * o.duration;
                            totalDuration += o.duration;
                        });
                        return totalDuration ? sum / totalDuration : 0;
                    }

                    /**
                     * Resets the duration of all rates.
                     * @returns {void}
                     * @memberof KavaRateHandler
                     * @instance
                     */

                }, {
                    key: "reset",
                    value: function reset() {
                        this._rates.forEach(function(o) {
                            return o.duration = 0;
                        });
                    }

                    /**
                     * Destroys the class.
                     * @returns {void}
                     * @memberof KavaRateHandler
                     * @instance
                     */

                }, {
                    key: "destroy",
                    value: function destroy() {
                        this._rates = [];
                    }
                }]);

                return KavaRateHandler;
            }();

            exports.KavaRateHandler = KavaRateHandler;

            /***/
        }),
        /* 7 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.KavaTimer = undefined;

            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _playkitJs = __webpack_require__(1);

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var SECOND = 1000;

            /**
             * Mange a timer and dispatches related events.
             * @private
             * @class KavaTimer
             * @param {Object} config - The timer config.
             */

            var KavaTimer = function(_FakeEventTarget) {
                _inherits(KavaTimer, _FakeEventTarget);

                function KavaTimer(config) {
                    _classCallCheck(this, KavaTimer);

                    var _this = _possibleConstructorReturn(this, (KavaTimer.__proto__ || Object.getPrototypeOf(KavaTimer)).call(this));

                    _this._config = config;
                    return _this;
                }

                /**
                 * Starts the timer interval.
                 * @returns {void}
                 * @memberof KavaTimer
                 * @instance
                 */


                _createClass(KavaTimer, [{
                    key: 'start',
                    value: function start() {
                        var _this2 = this;

                        this._clearTimeout();
                        this._stopped = false;
                        this._resetCounter = 0;
                        this._eventCounter = 0;
                        this._intervalId = setInterval(function() {
                            return _this2._monitor();
                        }, SECOND);
                    }

                    /**
                     * Continues the timer to dispatch REPORT.
                     * @returns {void}
                     * @memberof KavaTimer
                     * @instance
                     */

                }, {
                    key: 'resume',
                    value: function resume() {
                        this._stopped = false;
                        this._resetCounter = 0;
                    }

                    /**
                     * Stops the timer from dispatch REPORT and starts the timer to dispatch RESET.
                     * @returns {void}
                     * @memberof KavaTimer
                     * @instance
                     */

                }, {
                    key: 'stop',
                    value: function stop() {
                        this._stopped = true;
                    }

                    /**
                     * @returns {boolean} - Whether the timer is stopped.
                     * @memberof KavaTimer
                     * @instance
                     */

                }, {
                    key: 'isStopped',
                    value: function isStopped() {
                        return this._stopped;
                    }

                    /**
                     * Destroys the timer.
                     * @returns {void}
                     * @memberof KavaTimer
                     * @instance
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this._clearTimeout();
                    }
                }, {
                    key: '_clearTimeout',
                    value: function _clearTimeout() {
                        if (this._intervalId) {
                            clearInterval(this._intervalId);
                            this._intervalId = null;
                        }
                    }
                }, {
                    key: '_monitor',
                    value: function _monitor() {
                        if (this._stopped) {
                            if (this._resetCounter === this._config.resetCounter) {
                                this.dispatchEvent(new _playkitJs.FakeEvent(KavaTimer.Event.RESET));
                                this._resetCounter = 0;
                                this._eventCounter = 0;
                            }
                            this._resetCounter++;
                        } else {
                            this.dispatchEvent(new _playkitJs.FakeEvent(KavaTimer.Event.TICK));
                            if (this._eventCounter === this._config.eventCounter) {
                                this.dispatchEvent(new _playkitJs.FakeEvent(KavaTimer.Event.REPORT));
                                this._eventCounter = 0;
                            }
                            this._eventCounter++;
                        }
                    }
                }]);

                return KavaTimer;
            }(_playkitJs.FakeEventTarget);

            KavaTimer.Event = {
                TICK: 'tick',
                RESET: 'reset',
                REPORT: 'report'
            };
            exports.KavaTimer = KavaTimer;

            /***/
        })
        /******/
    ]);
});


// WEBPACK FOOTER //
// playkit-kava.js


// WEBPACK FOOTER //
// kava/playkit-kava.js