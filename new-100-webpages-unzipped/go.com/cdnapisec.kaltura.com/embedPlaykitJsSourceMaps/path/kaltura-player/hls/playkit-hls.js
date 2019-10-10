(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("@playkit-js/playkit-js"), require("hls.js"));
    else if (typeof define === 'function' && define.amd)
        define(["playkit-js", "hls.js"], factory);
    else if (typeof exports === 'object')
        exports["hls"] = factory(require("@playkit-js/playkit-js"), require("hls.js"));
    else
        root["playkit"] = root["playkit"] || {}, root["playkit"]["hls"] = factory(root["playkit"]["core"], root["Hls"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
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
        return __webpack_require__(__webpack_require__.s = 2);
        /******/
    })
    /************************************************************************/
    /******/
    ([
        /* 0 */
        /***/
        (function(module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

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
            exports.NAME = exports.VERSION = undefined;

            var _playkitJs = __webpack_require__(0);

            var _hlsAdapter = __webpack_require__(3);

            var _hlsAdapter2 = _interopRequireDefault(_hlsAdapter);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            exports.default = _hlsAdapter2.default;
            exports.VERSION = "1.12.1";
            exports.NAME = "@playkit-js/playkit-js-hls";

            // Register hls adapter to the media source adapter provider.

            if (_hlsAdapter2.default.isSupported()) {
                (0, _playkitJs.registerMediaSourceAdapter)(_hlsAdapter2.default);
            }

            /***/
        }),
        /* 3 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _get = function get(object, property, receiver) {
                if (object === null) object = Function.prototype;
                var desc = Object.getOwnPropertyDescriptor(object, property);
                if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);
                    if (parent === null) {
                        return undefined;
                    } else {
                        return get(parent, property, receiver);
                    }
                } else if ("value" in desc) {
                    return desc.value;
                } else {
                    var getter = desc.get;
                    if (getter === undefined) {
                        return undefined;
                    }
                    return getter.call(receiver);
                }
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

            var _hls = __webpack_require__(1);

            var _hls2 = _interopRequireDefault(_hls);

            var _defaultConfig = __webpack_require__(4);

            var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

            var _errors = __webpack_require__(5);

            var _playkitJs = __webpack_require__(0);

            var _jsonpPloader = __webpack_require__(6);

            var _jsonpPloader2 = _interopRequireDefault(_jsonpPloader);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

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

            /**
             * Adapter of hls.js lib for hls content.
             * @classdesc
             */
            var HlsAdapter = function(_BaseMediaSourceAdapt) {
                _inherits(HlsAdapter, _BaseMediaSourceAdapt);

                _createClass(HlsAdapter, null, [{
                    key: 'createAdapter',


                    /**
                     * Factory method to create media source adapter.
                     * @function createAdapter
                     * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
                     * @param {PKMediaSourceObject} source - The source Object.
                     * @param {Object} config - The player configuration.
                     * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter.
                     * @static
                     */

                    /**
                     * Reference to _onVideoError function
                     * @member {?Function} - _onVideoErrorCallback
                     * @type {?Function}
                     * @private
                     */


                    /**
                     * Reference to _onRecoveredCallback function
                     * @member {?Function} - _onRecoveredCallback
                     * @type {?Function}
                     * @private
                     */


                    /**
                     * indicate if external redirect was performed
                     * @type {boolean}
                     * @private
                     */

                    /**
                     * The hls player instance.
                     * @member {any} _hls
                     * @private
                     */


                    /**
                     * last recover date from decoding error
                     * @type {number}
                     * @private
                     */


                    /**
                     * last recover date from audio swap codec operation
                     * @type {number}
                     * @private
                     */

                    /**
                     * The adapter logger.
                     * @member {any} _logger
                     * @static
                     * @private
                     */
                    value: function createAdapter(videoElement, source, config) {
                        var adapterConfig = _playkitJs.Utils.Object.copyDeep(_defaultConfig2.default);
                        if (_playkitJs.Utils.Object.hasPropertyPath(config, 'sources.options')) {
                            var options = config.sources.options;
                            adapterConfig.forceRedirectExternalStreams = options.forceRedirectExternalStreams;
                            adapterConfig.redirectExternalStreamsHandler = options.redirectExternalStreamsHandler;
                            adapterConfig.redirectExternalStreamsTimeout = options.redirectExternalStreamsTimeout;
                            _jsonpPloader2.default.redirectExternalStreamsHandler = adapterConfig.redirectExternalStreamsHandler;
                            _jsonpPloader2.default.redirectExternalStreamsTimeout = adapterConfig.redirectExternalStreamsTimeout;
                        }
                        if (_playkitJs.Utils.Object.hasPropertyPath(config, 'playback.startTime')) {
                            var startTime = _playkitJs.Utils.Object.getPropertyPath(config, 'playback.startTime');
                            if (startTime > -1) {
                                adapterConfig.hlsConfig.startPosition = config.playback.startTime;
                            }
                        }
                        if (_playkitJs.Utils.Object.hasPropertyPath(config, 'playback.useNativeTextTrack')) {
                            adapterConfig.subtitleDisplay = _playkitJs.Utils.Object.getPropertyPath(config, 'playback.useNativeTextTrack');
                        }
                        if (_playkitJs.Utils.Object.hasPropertyPath(config, 'abr.fpsDroppedFramesInterval')) {
                            adapterConfig.hlsConfig.fpsDroppedFramesInterval = config.abr.fpsDroppedFramesInterval;
                        }
                        if (_playkitJs.Utils.Object.hasPropertyPath(config, 'abr.fpsDroppedMonitoringThreshold')) {
                            adapterConfig.hlsConfig.fpsDroppedMonitoringThreshold = config.abr.fpsDroppedMonitoringThreshold;
                        }
                        if (_playkitJs.Utils.Object.hasPropertyPath(config, 'abr.capLevelOnFPSDrop')) {
                            adapterConfig.hlsConfig.capLevelOnFPSDrop = config.abr.capLevelOnFPSDrop;
                        }
                        adapterConfig.hlsConfig.enableCEA708Captions = config.playback.enableCEA708Captions;
                        adapterConfig.hlsConfig.captionsTextTrack1Label = config.playback.captionsTextTrack1Label;
                        adapterConfig.hlsConfig.captionsTextTrack1LanguageCode = config.playback.captionsTextTrack1LanguageCode;
                        adapterConfig.hlsConfig.captionsTextTrack2Label = config.playback.captionsTextTrack2Label;
                        adapterConfig.hlsConfig.captionsTextTrack2LanguageCode = config.playback.captionsTextTrack2LanguageCode;

                        if (_playkitJs.Utils.Object.hasPropertyPath(config, 'abr')) {
                            var abr = config.abr;
                            if (typeof abr.enabled === 'boolean') {
                                adapterConfig.abr.enabled = abr.enabled;
                            }
                            if (typeof abr.capLevelToPlayerSize === 'boolean') {
                                adapterConfig.hlsConfig.capLevelToPlayerSize = abr.capLevelToPlayerSize;
                            }
                            if (abr.defaultBandwidthEstimate) {
                                adapterConfig.hlsConfig.abrEwmaDefaultEstimate = abr.defaultBandwidthEstimate;
                            }

                            if (abr.restrictions) {
                                if (abr.restrictions.minBitrate > 0) {
                                    adapterConfig.hlsConfig.minAutoBitrate = abr.restrictions.minBitrate;
                                }
                                if (abr.restrictions.maxBitrate < Infinity) {
                                    //You can either set capping by size or bitrate, if bitrate is set then disable size capping
                                    adapterConfig.hlsConfig.capLevelToPlayerSize = false;
                                    adapterConfig.abr.restrictions = abr.restrictions;
                                }
                            }
                        }
                        if (_playkitJs.Utils.Object.hasPropertyPath(config, 'playback.options.html5.hls')) {
                            _playkitJs.Utils.Object.mergeDeep(adapterConfig.hlsConfig, config.playback.options.html5.hls);
                        }
                        return new this(videoElement, source, adapterConfig);
                    }

                    /**
                     * Checks if hls adapter can play a given mime type.
                     * @function canPlayType
                     * @param {string} mimeType - The mime type to check.
                     * @returns {boolean} - Whether the hls adapter can play a specific mime type.
                     * @static
                     */

                    /**
                     * stream start time in seconds
                     * @type {?number}
                     * @private
                     */


                    /**
                     * The load promise
                     * @member {Promise<Object>} - _loadPromise
                     * @type {Promise<Object>}
                     * @private
                     */


                    /**
                     * Reference to the player tracks.
                     * @member {Array<Track>} - _playerTracks
                     * @type {Array<Track>}
                     * @private
                     */

                    /**
                     * The supported mime types by the hls adapter.
                     * @member {Array<string>} _hlsMimeType
                     * @static
                     * @private
                     */

                    /**
                     * The id of the adapter.
                     * @member {string} id
                     * @static
                     * @private
                     */

                }, {
                    key: 'canPlayType',
                    value: function canPlayType(mimeType) {
                        var canHlsPlayType = typeof mimeType === 'string' ? HlsAdapter._hlsMimeTypes.includes(mimeType.toLowerCase()) : false;
                        HlsAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canHlsPlayType.toString());
                        return canHlsPlayType;
                    }

                    /**
                     * Checks if hls adapter can play a given drm data.
                     * For hls.js it always returns false.
                     * @returns {boolean} - Whether the hls adapter can play a specific drm data.
                     * @static
                     */

                }, {
                    key: 'canPlayDrm',
                    value: function canPlayDrm() {
                        HlsAdapter._logger.warn('canPlayDrm result is false');
                        return false;
                    }

                    /**
                     * Checks if the hls adapter is supported.
                     * @function isSupported
                     * @returns {boolean} - Whether hls is supported.
                     * @static
                     */

                }, {
                    key: 'isSupported',
                    value: function isSupported() {
                        var isHlsSupported = _hls2.default.isSupported();
                        HlsAdapter._logger.debug('isSupported:' + isHlsSupported);
                        return isHlsSupported;
                    }

                    /**
                     * @constructor
                     * @param {HTMLVideoElement} videoElement - The video element which will bind to the hls adapter
                     * @param {PKMediaSourceObject} source - The source object
                     * @param {Object} config - The media source adapter configuration
                     */

                }]);

                function HlsAdapter(videoElement, source, config) {
                    _classCallCheck(this, HlsAdapter);

                    HlsAdapter._logger.debug('Creating adapter. Hls version: ' + _hls2.default.version);

                    var _this = _possibleConstructorReturn(this, (HlsAdapter.__proto__ || Object.getPrototypeOf(HlsAdapter)).call(this, videoElement, source, config));

                    _this._triedReloadWithRedirect = false;
                    _this._startTime = 0;

                    _this._config = _playkitJs.Utils.Object.mergeDeep({}, _defaultConfig2.default, _this._config);
                    if (_this._config.forceRedirectExternalStreams) {
                        _this._config.hlsConfig['pLoader'] = _jsonpPloader2.default;
                    }
                    _this._hls = new _hls2.default(_this._config.hlsConfig);
                    _this._capabilities.fpsControl = true;
                    _this._hls.subtitleDisplay = _this._config.subtitleDisplay;
                    _this._addBindings();
                    return _this;
                }

                /**
                 * Adds the required bindings locally and with hls.js.
                 * @function _addBindings
                 * @private
                 * @returns {void}
                 */


                _createClass(HlsAdapter, [{
                    key: '_addBindings',
                    value: function _addBindings() {
                        var _this2 = this;

                        this._hls.on(_hls2.default.Events.ERROR, function(e, data) {
                            return _this2._onError(data);
                        });
                        this._hls.on(_hls2.default.Events.MANIFEST_LOADED, this._onManifestLoaded.bind(this));
                        this._hls.on(_hls2.default.Events.LEVEL_SWITCHED, this._onLevelSwitched.bind(this));
                        this._hls.on(_hls2.default.Events.AUDIO_TRACK_SWITCHED, this._onAudioTrackSwitched.bind(this));
                        this._hls.on(_hls2.default.Events.FPS_DROP, function(e, data) {
                            return _this2._onFpsDrop(data);
                        });
                        this._mediaAttachedPromise = new Promise(function(resolve) {
                            return _this2._onMediaAttached = resolve;
                        });
                        this._hls.on(_hls2.default.Events.MEDIA_ATTACHED, function() {
                            return _this2._onMediaAttached();
                        });
                        this._onRecoveredCallback = function() {
                            return _this2._onRecovered();
                        };
                        this._onAddTrack = this._onAddTrack.bind(this);
                        this._videoElement.addEventListener('addtrack', this._onAddTrack);
                        this._videoElement.textTracks.onaddtrack = this._onAddTrack;
                    }
                }, {
                    key: '_onFpsDrop',
                    value: function _onFpsDrop(data) {
                        this._trigger(_playkitJs.EventType.FPS_DROP, data);
                    }
                }, {
                    key: '_onAddTrack',
                    value: function _onAddTrack(event) {
                        if (!this._hls.subtitleTracks.length) {
                            // parse CEA 608/708 captions that not exposed on hls.subtitleTracks API
                            var CEATextTrack = this._parseCEATextTrack(event.track);
                            if (CEATextTrack) {
                                HlsAdapter._logger.debug('A CEA 608/708 caption has found', CEATextTrack);
                                this._playerTracks.push(CEATextTrack);
                                this._trigger(_playkitJs.EventType.TRACKS_CHANGED, {
                                    tracks: this._playerTracks
                                });
                            }
                        }
                    }

                    /**
                     * video error event handler.
                     * @param {MediaError} error - the media error
                     * @public
                     * @returns {boolean} if hls-adapter will try to recover
                     */

                }, {
                    key: 'handleMediaError',
                    value: function handleMediaError(error) {
                        if (error.code === error.MEDIA_ERR_DECODE) {
                            HlsAdapter._logger.debug('The video playback was aborted due to a corruption problem or because the video used features your browser did not support.', error.message);
                            return this._handleMediaError();
                        } else {
                            return false;
                        }
                    }

                    /**
                     * Load the video source
                     * @function load
                     * @param {number} startTime - Optional time to start the video from.
                     * @returns {Promise<Object>} - The loaded data
                     * @override
                     */

                }, {
                    key: 'load',
                    value: function load(startTime) {
                        var _this3 = this;

                        if (!this._loadPromise) {
                            this._startTime = startTime;
                            this._loadPromise = new Promise(function(resolve) {
                                _this3._resolveLoad = resolve;
                                _this3._loadInternal();
                            });
                        }
                        return this._loadPromise;
                    }

                    /**
                     * Load the video source
                     * @function load
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_loadInternal',
                    value: function _loadInternal() {
                        if (this._sourceObj && this._sourceObj.url) {
                            this._hls.loadSource(this._sourceObj.url);
                            this._hls.attachMedia(this._videoElement);
                            this._trigger(_playkitJs.EventType.ABR_MODE_CHANGED, {
                                mode: this.isAdaptiveBitrateEnabled() ? 'auto' : 'manual'
                            });
                        }
                    }

                    /**
                     * Load the video source with installed playlist loader
                     * @function _reloadWithDirectManifest
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_reloadWithDirectManifest',
                    value: function _reloadWithDirectManifest() {
                        // Mark that we tried once to redirect
                        this._triedReloadWithRedirect = true;
                        // reset hls.js
                        this._reset();
                        // re-init hls.js with the external redirect playlist loader
                        this._config.hlsConfig['pLoader'] = _jsonpPloader2.default;
                        this._hls = new _hls2.default(this._config.hlsConfig);
                        this._addBindings();
                        this._loadInternal();
                    }

                    /**
                     * Remove the loadedmetadata listener, when recovering from media error.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_removeRecoveredCallbackListener',
                    value: function _removeRecoveredCallbackListener() {
                        if (this._onRecoveredCallback) {
                            this._videoElement.removeEventListener(_playkitJs.EventType.LOADED_METADATA, this._onRecoveredCallback);
                            this._onRecoveredCallback = null;
                        }
                    }

                    /**
                     * Destroys the hls adapter.
                     * @function destroy
                     * @override
                     * @returns {Promise<*>} - The destroy promise.
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this4 = this;

                        return _get(HlsAdapter.prototype.__proto__ || Object.getPrototypeOf(HlsAdapter.prototype), 'destroy', this).call(this).then(function() {
                            HlsAdapter._logger.debug('destroy');
                            _this4._loadPromise = null;
                            _this4._playerTracks = [];
                            _this4._reset();
                        });
                    }

                    /**
                     * reset hls.js instance and its bindings
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_reset',
                    value: function _reset() {
                        this._removeBindings();
                        clearTimeout(this._resolveLoadTimeout);
                        this._hls.detachMedia();
                        this._hls.destroy();
                    }

                    /**
                     * Parse the hls tracks into player tracks.
                     * @returns {Array<Track>} - The parsed tracks.
                     * @private
                     */

                }, {
                    key: '_parseTracks',
                    value: function _parseTracks() {
                        var audioTracks = this._parseAudioTracks(this._hls.audioTracks || []);
                        var videoTracks = this._parseVideoTracks(this._hls.levels || []);
                        var textTracks = this._parseTextTracks(this._hls.subtitleTracks || []);
                        return audioTracks.concat(videoTracks).concat(textTracks);
                    }

                    /**
                     * Parse hls audio tracks into player audio tracks.
                     * @param {Array<Object>} hlsAudioTracks - The hls audio tracks.
                     * @returns {Array<AudioTrack>} - The parsed audio tracks.
                     * @private
                     */

                }, {
                    key: '_parseAudioTracks',
                    value: function _parseAudioTracks(hlsAudioTracks) {
                        var audioTracks = [];
                        for (var i = 0; i < hlsAudioTracks.length; i++) {
                            // Create audio tracks
                            var settings = {
                                id: hlsAudioTracks[i].id,
                                active: this._hls.audioTrack === hlsAudioTracks[i].id,
                                label: hlsAudioTracks[i].name,
                                language: hlsAudioTracks[i].lang,
                                index: i
                            };
                            audioTracks.push(new _playkitJs.AudioTrack(settings));
                        }
                        return audioTracks;
                    }

                    /**
                     * Parse hls video tracks into player video tracks.
                     * @param {Array<Object>} hlsVideoTracks - The hls video tracks.
                     * @returns {Array<VideoTrack>} - The parsed video tracks.
                     * @private
                     */

                }, {
                    key: '_parseVideoTracks',
                    value: function _parseVideoTracks(hlsVideoTracks) {
                        var videoTracks = [];
                        for (var i = 0; i < hlsVideoTracks.length; i++) {
                            // Create video tracks
                            var settings = {
                                active: this._hls.startLevel === i,
                                bandwidth: hlsVideoTracks[i].bitrate,
                                width: hlsVideoTracks[i].width,
                                height: hlsVideoTracks[i].height,
                                language: '',
                                index: i
                            };
                            videoTracks.push(new _playkitJs.VideoTrack(settings));
                        }
                        return videoTracks;
                    }

                    /**
                     * Parse hls text tracks into player text tracks.
                     * @param {Array<Object>} hlsTextTracks - The hls text tracks.
                     * @returns {Array<TextTrack>} - The parsed text tracks.
                     * @private
                     */

                }, {
                    key: '_parseTextTracks',
                    value: function _parseTextTracks(hlsTextTracks) {
                        var textTracks = [];
                        for (var i = 0; i < hlsTextTracks.length; i++) {
                            // Create text tracks
                            var settings = {
                                id: hlsTextTracks[i].id,
                                active: hlsTextTracks[i].default,
                                label: hlsTextTracks[i].name,
                                kind: hlsTextTracks[i].type.toLowerCase(),
                                language: hlsTextTracks[i].lang,
                                index: i
                            };
                            textTracks.push(new _playkitJs.TextTrack(settings));
                        }
                        return textTracks;
                    }

                    /**
                     * Parse a CEA 608/708 text track which not expose on hlsjs api into player text tracks.
                     * @param {Object} CEATextTrack - A video element text track.
                     * @returns {?TextTrack} - A parsed text track if the param is a CEA 608/708 caption.
                     * @private
                     */

                }, {
                    key: '_parseCEATextTrack',
                    value: function _parseCEATextTrack(CEATextTrack) {
                        var textTrack = null;
                        if (CEATextTrack.kind === 'captions') {
                            var settings = {
                                id: CEATextTrack.id,
                                active: CEATextTrack.mode === 'showing',
                                label: CEATextTrack.label,
                                kind: CEATextTrack.kind,
                                language: CEATextTrack.language,
                                index: this._playerTracks.filter(function(track) {
                                    return track instanceof _playkitJs.TextTrack;
                                }).length
                            };
                            textTrack = new _playkitJs.TextTrack(settings);
                        }
                        return textTrack;
                    }

                    /**
                     * Select an audio track.
                     * @function selectAudioTrack
                     * @param {AudioTrack} audioTrack - the audio track to select.
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'selectAudioTrack',
                    value: function selectAudioTrack(audioTrack) {
                        if (audioTrack instanceof _playkitJs.AudioTrack && !audioTrack.active && this._hls.audioTracks) {
                            this._hls.audioTrack = audioTrack.id;
                        }
                    }

                    /**
                     * Select a video track.
                     * @function selectVideoTrack
                     * @param {VideoTrack} videoTrack - the track to select.
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'selectVideoTrack',
                    value: function selectVideoTrack(videoTrack) {
                        if (videoTrack instanceof _playkitJs.VideoTrack && (!videoTrack.active || this.isAdaptiveBitrateEnabled()) && this._hls.levels) {
                            if (this.isAdaptiveBitrateEnabled()) {
                                this._trigger(_playkitJs.EventType.ABR_MODE_CHANGED, {
                                    mode: 'manual'
                                });
                            }
                            this._hls.currentLevel = videoTrack.index;
                        }
                    }

                    /**
                     * Select a text track.
                     * @function selectTextTrack
                     * @param {TextTrack} textTrack - the track to select.
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'selectTextTrack',
                    value: function selectTextTrack(textTrack) {
                        if (textTrack instanceof _playkitJs.TextTrack && !textTrack.active) {
                            if (this._hls.subtitleTracks.length) {
                                this._hls.subtitleTrack = textTrack.id;
                                this._notifyTrackChanged(textTrack);
                            } else {
                                this._selectNativeTextTrack(textTrack);
                            }
                        }
                    }

                    /**
                     * Select a video element text track.
                     * @function _selectNativeTextTrack
                     * @param {TextTrack} textTrack - the track to select.
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_selectNativeTextTrack',
                    value: function _selectNativeTextTrack(textTrack) {
                        var selectedTrack = Array.from(this._videoElement.textTracks).find(function(track) {
                            return track.language === textTrack.language;
                        });
                        if (selectedTrack) {
                            this._disableNativeTextTracks();
                            selectedTrack.mode = this._config.subtitleDisplay ? 'showing' : 'hidden';
                            this._notifyTrackChanged(textTrack);
                        }
                    }
                }, {
                    key: '_notifyTrackChanged',
                    value: function _notifyTrackChanged(textTrack) {
                        HlsAdapter._logger.debug('Text track changed', textTrack);
                        this._onTrackChanged(textTrack);
                    }

                    /**
                     * Disables all the video element text tracks.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_disableNativeTextTracks',
                    value: function _disableNativeTextTracks() {
                        Array.from(this._videoElement.textTracks).forEach(function(track) {
                            track.mode = 'disabled';
                        });
                    }

                    /** Hide the text track
                     * @function hideTextTrack
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'hideTextTrack',
                    value: function hideTextTrack() {
                        if (this._hls.subtitleTracks.length) {
                            this._hls.subtitleTrack = -1;
                        } else {
                            this._disableNativeTextTracks();
                        }
                    }

                    /**
                     * Enables adaptive bitrate switching according to hls.js logic.
                     * @function enableAdaptiveBitrate
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'enableAdaptiveBitrate',
                    value: function enableAdaptiveBitrate() {
                        if (!this.isAdaptiveBitrateEnabled()) {
                            this._trigger(_playkitJs.EventType.ABR_MODE_CHANGED, {
                                mode: 'auto'
                            });
                            this._hls.nextLevel = -1;
                        }
                    }

                    /**
                     * Checking if adaptive bitrate switching is enabled.
                     * @function isAdaptiveBitrateEnabled
                     * @returns {boolean} - Whether adaptive bitrate is enabled.
                     * @public
                     */

                }, {
                    key: 'isAdaptiveBitrateEnabled',
                    value: function isAdaptiveBitrateEnabled() {
                        return this._hls.autoLevelEnabled;
                    }

                    /**
                     * Returns the details of hls level
                     * @function _getLevelDetails
                     * @returns {Object} - Level details
                     * @private
                     */

                }, {
                    key: '_getLevelDetails',
                    value: function _getLevelDetails() {
                        var level = this._hls.levels[this._hls.currentLevel] || this._hls.levels[this._hls.nextLevel] || this._hls.levels[this._hls.nextAutoLevel] || this._hls.levels[this._hls.nextLoadLevel];
                        return level && level.details ? level.details : {};
                    }

                    /**
                     * Returns the live edge
                     * @returns {number} - live edge
                     * @private
                     */

                }, {
                    key: '_getLiveEdge',
                    value: function _getLiveEdge() {
                        try {
                            var liveEdge = void 0;
                            if (this._hls.liveSyncPosition) {
                                liveEdge = this._hls.liveSyncPosition;
                            } else if (this._hls.config.liveSyncDuration) {
                                liveEdge = this._videoElement.duration - this._hls.config.liveSyncDuration;
                            } else {
                                liveEdge = this._videoElement.duration - this._hls.config.liveSyncDurationCount * this._getLevelDetails().targetduration;
                            }
                            return liveEdge > 0 ? liveEdge : this._videoElement.duration;
                        } catch (e) {
                            HlsAdapter._logger.debug('Live edge calculation failed, fall back to duration');
                            return this._videoElement.duration;
                        }
                    }

                    /**
                     * Seeking to live edge, calculated according hls configuration - liveSyncDuration or liveSyncDurationCount.
                     * @function seekToLiveEdge
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'seekToLiveEdge',
                    value: function seekToLiveEdge() {
                        try {
                            this._videoElement.currentTime = this._getLiveEdge();
                        } catch (e) {
                            return;
                        }
                    }

                    /**
                     * Checking if the current playback is live.
                     * @function isLive
                     * @returns {boolean} - Whether playback is live.
                     * @public
                     */

                }, {
                    key: 'isLive',
                    value: function isLive() {
                        try {
                            return !!this._getLevelDetails().live;
                        } catch (e) {
                            return false;
                        }
                    }

                    /**
                     * Fired after manifest has been loaded.
                     * @function _onManifestLoaded
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_onManifestLoaded',
                    value: function _onManifestLoaded() {
                        var _this5 = this;

                        HlsAdapter._logger.debug('The source has been loaded successfully');
                        if (!this._hls.config.autoStartLoad) {
                            this._hls.startLoad(this._startTime);
                        }
                        this._playerTracks = this._parseTracks();
                        this._maybeApplyAbrRestrictions();
                        this._mediaAttachedPromise.then(function() {
                            _this5._resolveLoad({
                                tracks: _this5._playerTracks
                            });
                        });
                    }

                    /**
                     * apply ABR restrictions
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_maybeApplyAbrRestrictions',
                    value: function _maybeApplyAbrRestrictions() {
                        if (this._config.abr.enabled) {
                            if (this._config.abr.restrictions) {
                                var restrictions = this._config.abr.restrictions;
                                if (restrictions.maxBitrate) {
                                    var minBitrate = restrictions.minBitrate ? restrictions.minBitrate : 0;
                                    if (restrictions.maxBitrate > minBitrate) {
                                        //Get the first level that is above our bitrate restriction
                                        //If the corresponding level is not in the edges (level 0 or last level) then get the previous level index
                                        //which has a bitrate value which is lower then the max bitrate restriction
                                        var maxLevel = this._hls.levels.findIndex(function(level) {
                                            return level.bitrate > restrictions.maxBitrate;
                                        });
                                        if (maxLevel > 0) {
                                            maxLevel = maxLevel - 1;
                                        }
                                        this._hls.autoLevelCapping = maxLevel;
                                    } else {
                                        HlsAdapter._logger.warn('Invalid maxBitrate restriction, maxBitrate must be greater than minBitrate', minBitrate, restrictions.maxBitrate);
                                    }
                                }
                            }
                        } else {
                            this._hls.currentLevel = 0;
                        }
                    }

                    /**
                     * Triggers on video track selection (auto or manually) the 'videotrackchanged' event forward.
                     * @function _onLevelSwitched
                     * @param {string} event - The event name.
                     * @param {any} data - The event data object.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_onLevelSwitched',
                    value: function _onLevelSwitched(event, data) {
                        var videoTrack = this._playerTracks.find(function(track) {
                            return track instanceof _playkitJs.VideoTrack && track.index === data.level;
                        });
                        HlsAdapter._logger.debug('Video track changed', videoTrack);
                        this._onTrackChanged(videoTrack);
                    }

                    /**
                     * Triggers on audio track selection (auto or manually) the 'audiotrackchanged' event forward.
                     * @function _onAudioTrackSwitched
                     * @param {string} event - The event name.
                     * @param {any} data - The event data object.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_onAudioTrackSwitched',
                    value: function _onAudioTrackSwitched(event, data) {
                        var audioTrack = this._playerTracks.find(function(track) {
                            return track instanceof _playkitJs.AudioTrack && track.id === data.id;
                        });
                        HlsAdapter._logger.debug('Audio track changed', audioTrack);
                        this._onTrackChanged(audioTrack);
                        this._handleWaitingUponAudioTrackSwitch();
                    }

                    /**
                     * Trigger a playing event whenever an audio track is changed & time_update event is fired.
                     * This align Edge and IE behaviour to other browsers. When an audio track changed in IE & Edge, they trigger
                     * waiting event but not playing event.
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_handleWaitingUponAudioTrackSwitch',
                    value: function _handleWaitingUponAudioTrackSwitch() {
                        var _this6 = this;

                        var affectedBrowsers = ['IE', 'Edge'];
                        if (affectedBrowsers.includes(_playkitJs.Env.browser.name)) {
                            var timeUpdateListener = function timeUpdateListener() {
                                _this6._trigger(_playkitJs.EventType.PLAYING);
                                _this6._videoElement.removeEventListener(_playkitJs.EventType.TIME_UPDATE, timeUpdateListener);
                            };
                            this._videoElement.addEventListener(_playkitJs.EventType.TIME_UPDATE, timeUpdateListener);
                        }
                    }

                    /**
                     * Handles hls errors.
                     * @param {any} data - The event data object.
                     * @private
                     * @returns {void}
                     */

                }, {
                    key: '_onError',
                    value: function _onError(data) {
                        var errorType = data.type;
                        var errorDetails = data.details;
                        var errorFatal = data.fatal;
                        if (errorFatal) {
                            var error = void 0;
                            switch (errorType) {
                                case _hls2.default.ErrorTypes.NETWORK_ERROR:
                                    if ([_hls2.default.ErrorDetails.MANIFEST_LOAD_ERROR, _hls2.default.ErrorDetails.MANIFEST_LOAD_TIMEOUT].includes(errorDetails) && !this._triedReloadWithRedirect && !this._config.forceRedirectExternalStreams) {
                                        this._reloadWithDirectManifest();
                                    } else {
                                        error = new _playkitJs.Error(_playkitJs.Error.Severity.CRITICAL, _playkitJs.Error.Category.NETWORK, _playkitJs.Error.Code.HTTP_ERROR, errorDetails);
                                    }
                                    break;
                                case _hls2.default.ErrorTypes.MEDIA_ERROR:
                                    if (this._handleMediaError()) {
                                        error = new _playkitJs.Error(_playkitJs.Error.Severity.RECOVERABLE, _playkitJs.Error.Category.MEDIA, _playkitJs.Error.Code.HLS_FATAL_MEDIA_ERROR, errorDetails);
                                    } else {
                                        error = new _playkitJs.Error(_playkitJs.Error.Severity.CRITICAL, _playkitJs.Error.Category.MEDIA, _playkitJs.Error.Code.HLS_FATAL_MEDIA_ERROR, errorDetails);
                                    }
                                    break;
                                default:
                                    error = new _playkitJs.Error(_playkitJs.Error.Severity.CRITICAL, _playkitJs.Error.Category.PLAYER, _playkitJs.Error.Code.HLS_FATAL_MEDIA_ERROR, errorDetails);
                                    break;
                            }
                            this._trigger(_playkitJs.EventType.ERROR, error);
                            if (error && error.severity === _playkitJs.Error.Severity.CRITICAL) {
                                this.destroy();
                            }
                        } else {
                            var _ref = _errors.HlsJsErrorMap[errorDetails] || {
                                    category: 0,
                                    code: 0
                                },
                                category = _ref.category,
                                code = _ref.code;

                            HlsAdapter._logger.warn(new _playkitJs.Error(_playkitJs.Error.Severity.RECOVERABLE, category, code, errorDetails));
                        }
                    }

                    /**
                     * Tries to handle media errors via hls.js error handlers
                     * @returns {boolean} - if media error is handled or not
                     * @private
                     */

                }, {
                    key: '_handleMediaError',
                    value: function _handleMediaError() {
                        var now = performance.now();
                        var recover = true;
                        if (this._checkTimeDeltaHasPassed(now, this._recoverDecodingErrorDate, this._config.recoverDecodingErrorDelay)) {
                            this._videoElement.addEventListener(_playkitJs.EventType.LOADED_METADATA, this._onRecoveredCallback);
                            this._recoverDecodingError();
                        } else {
                            if (this._checkTimeDeltaHasPassed(now, this._recoverSwapAudioCodecDate, this._config.recoverSwapAudioCodecDelay)) {
                                this._videoElement.addEventListener(_playkitJs.EventType.LOADED_METADATA, this._onRecoveredCallback);
                                this._recoverSwapAudioCodec();
                            } else {
                                recover = false;
                                HlsAdapter._logger.error('cannot recover, last media error recovery failed');
                            }
                        }
                        return recover;
                    }

                    /**
                     * trigger mediarecovered event if metadata is loaded (means the recovery succeeded)
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_onRecovered',
                    value: function _onRecovered() {
                        this._trigger(_playkitJs.EventType.MEDIA_RECOVERED);
                        this._videoElement.removeEventListener(_playkitJs.EventType.LOADED_METADATA, this._onRecoveredCallback);
                    }

                    /**
                     * Check if time ahs passed a certain delta
                     * @param {number} now - current time
                     * @param {number} then - previous time
                     * @param {number} delay - time delta in ms
                     * @returns {boolean} - if time delta has
                     * @private
                     */

                }, {
                    key: '_checkTimeDeltaHasPassed',
                    value: function _checkTimeDeltaHasPassed(now, then, delay) {
                        return !then || now - then > delay;
                    }

                    /**
                     * handle recover from decoding error
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_recoverDecodingError',
                    value: function _recoverDecodingError() {
                        this._recoverDecodingErrorDate = performance.now();
                        HlsAdapter._logger.warn('try to recover media Error');
                        this._hls.recoverMediaError();
                    }

                    /**
                     * handle recover from decoding error by swaping audio codec
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_recoverSwapAudioCodec',
                    value: function _recoverSwapAudioCodec() {
                        this._recoverSwapAudioCodecDate = performance.now();
                        HlsAdapter._logger.warn('try to swap Audio Codec and recover media Error');
                        this._hls.swapAudioCodec();
                        this._hls.recoverMediaError();
                    }

                    /**
                     * Removes hls.js bindings.
                     * @returns {void}
                     * @private
                     */

                }, {
                    key: '_removeBindings',
                    value: function _removeBindings() {
                        this._hls.off(_hls2.default.Events.ERROR, this._onError);
                        this._hls.off(_hls2.default.Events.LEVEL_SWITCHED, this._onLevelSwitched);
                        this._hls.off(_hls2.default.Events.AUDIO_TRACK_SWITCHED, this._onAudioTrackSwitched);
                        this._hls.off(_hls2.default.Events.MANIFEST_LOADED, this._onManifestLoaded);
                        this._hls.off(_hls2.default.Events.FPS_DROP, this._onFpsDrop);
                        this._videoElement.textTracks.onaddtrack = null;
                        this._videoElement.removeEventListener('addtrack', this._onAddTrack);
                        this._removeRecoveredCallbackListener();
                    }

                    /**
                     * Get the start time of DVR window in live playback in seconds.
                     * @returns {Number} - start time of DVR window.
                     * @public
                     */

                }, {
                    key: 'getStartTimeOfDvrWindow',
                    value: function getStartTimeOfDvrWindow() {
                        if (this.isLive()) {
                            try {
                                var nextLoadLevel = this._hls.levels[this._hls.nextLoadLevel],
                                    details = nextLoadLevel.details,
                                    fragments = details.fragments,
                                    fragLength = fragments.length,
                                    start = fragments[0].start + fragments[0].duration,
                                    end = fragments[fragLength - 1].start + fragments[fragLength - 1].duration,
                                    maxLatency = this._hls.config.liveMaxLatencyDuration !== undefined ? this._hls.config.liveMaxLatencyDuration : this._hls.config.liveMaxLatencyDurationCount * details.targetduration,
                                    minPosToSeek = Math.max(start - this._hls.config.maxFragLookUpTolerance, end - maxLatency);
                                return minPosToSeek;
                            } catch (e) {
                                HlsAdapter._logger.debug('Unable obtain the start of DVR window');
                                return 0;
                            }
                        } else {
                            return 0;
                        }
                    }
                }]);

                return HlsAdapter;
            }(_playkitJs.BaseMediaSourceAdapter);

            HlsAdapter.id = 'HlsAdapter';
            HlsAdapter._logger = _playkitJs.BaseMediaSourceAdapter.getLogger(HlsAdapter.id);
            HlsAdapter._hlsMimeTypes = ['application/x-mpegurl', 'application/vnd.apple.mpegurl', 'audio/mpegurl', 'audio/x-mpegurl', 'video/x-mpegurl', 'video/mpegurl', 'application/mpegurl'];
            exports.default = HlsAdapter;

            /***/
        }),
        /* 4 */
        /***/
        (function(module, exports) {

            module.exports = {
                "recoverDecodingErrorDelay": 3000,
                "recoverSwapAudioCodecDelay": 3000,
                "abr": {
                    "enabled": true,
                    "restrictions": {}
                },
                "hlsConfig": {
                    "fragLoadingMaxRetry": 4,
                    "maxMaxBufferLength": 60
                }
            };

            /***/
        }),
        /* 5 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.HlsJsErrorMap = undefined;

            var _HlsJsErrorMap;

            var _hls = __webpack_require__(1);

            var _hls2 = _interopRequireDefault(_hls);

            var _playkitJs = __webpack_require__(0);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }

            var HlsJsErrorMap = (_HlsJsErrorMap = {}, _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.MANIFEST_LOAD_ERROR, {
                category: _playkitJs.Error.Category.MANIFEST,
                code: _playkitJs.Error.Code.HTTP_ERROR
            }), _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.MANIFEST_LOAD_TIMEOUT, {
                category: _playkitJs.Error.Category.MANIFEST,
                code: _playkitJs.Error.Code.TIMEOUT
            }), _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.MANIFEST_PARSING_ERROR, {
                category: _playkitJs.Error.Category.MANIFEST,
                code: _playkitJs.Error.Code.HLSJS_CANNOT_PARSE
            }), _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.LEVEL_LOAD_ERROR, {
                category: _playkitJs.Error.Category.NETWORK,
                code: _playkitJs.Error.Code.HTTP_ERROR
            }), _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.LEVEL_LOAD_TIMEOUT, {
                category: _playkitJs.Error.Category.NETWORK,
                code: _playkitJs.Error.Code.TIMEOUT
            }), _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.LEVEL_SWITCH_ERROR, {
                category: _playkitJs.Error.Category.PLAYER,
                code: _playkitJs.Error.Code.BITRATE_SWITCH_ISSUE
            }), _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.FRAG_LOAD_ERROR, {
                category: _playkitJs.Error.Category.NETWORK,
                code: _playkitJs.Error.Code.HTTP_ERROR
            }), _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.FRAG_LOOP_LOADING_ERROR, {
                category: _playkitJs.Error.Category.NETWORK,
                code: _playkitJs.Error.Code.HTTP_ERROR
            }), _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.FRAG_LOAD_TIMEOUT, {
                category: _playkitJs.Error.Category.NETWORK,
                code: _playkitJs.Error.Code.TIMEOUT
            }), _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.FRAG_PARSING_ERROR, {
                category: _playkitJs.Error.Category.MEDIA,
                code: _playkitJs.Error.Code.HLS_FRAG_PARSING_ERROR
            }), _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.BUFFER_APPEND_ERROR, {
                category: _playkitJs.Error.Category.MEDIA,
                code: _playkitJs.Error.Code.HLS_BUFFER_APPEND_ISSUE
            }), _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.BUFFER_APPENDING_ERROR, {
                category: _playkitJs.Error.Category.MEDIA,
                code: _playkitJs.Error.Code.HLS_BUFFER_APPENDING_ISSUE
            }), _defineProperty(_HlsJsErrorMap, _hls2.default.ErrorDetails.BUFFER_STALLED_ERROR, {
                category: _playkitJs.Error.Category.MEDIA,
                code: _playkitJs.Error.Code.HLS_BUFFER_STALLED_ERROR
            }), _HlsJsErrorMap);

            exports.HlsJsErrorMap = HlsJsErrorMap;

            /***/
        }),
        /* 6 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _playkitJs = __webpack_require__(0);

            var _hls = __webpack_require__(1);

            var _hls2 = _interopRequireDefault(_hls);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

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

            /**
             * A plugin override for the loader function in hls.js.
             * It checks if it should use jsonp for the manifest first, else - the regular
             * loader is called.
             */
            var pLoader = function(_Hlsjs$DefaultConfig$) {
                _inherits(pLoader, _Hlsjs$DefaultConfig$);

                /**
                 * @constructor
                 * @param {Object} config - hlsjs config object. it also contains the jsonp callback function
                 */
                function pLoader(config) {
                    _classCallCheck(this, pLoader);

                    var _this = _possibleConstructorReturn(this, (pLoader.__proto__ || Object.getPrototypeOf(pLoader)).call(this, config));

                    var loadOrig = _this.load.bind(_this);
                    var callback = pLoader.redirectExternalStreamsHandler;
                    _this.load = function(context, config, callbacks) {
                        var url = context.url;
                        if (context.type === 'manifest') {
                            _playkitJs.Utils.Http.jsonp(url, callback, {
                                timeout: pLoader.redirectExternalStreamsTimeout
                            }).then(function(uri) {
                                context.url = uri;
                                loadOrig(context, config, callbacks);
                            }).catch(function() {
                                return loadOrig(context, config, callbacks);
                            });
                        } else {
                            loadOrig(context, config, callbacks);
                        }
                    };
                    return _this;
                }
                /**
                 * redirect external stream handler function
                 * @param {string} uri - the original uri
                 * @returns {string} uri - the redirected URI
                 * @static
                 */


                return pLoader;
            }(_hls2.default.DefaultConfig.loader);

            pLoader.redirectExternalStreamsHandler = function(uri) {
                return uri;
            };

            exports.default = pLoader;

            /***/
        })
        /******/
    ]);
});


// WEBPACK FOOTER //
// playkit-hls.js


// WEBPACK FOOTER //
// hls/playkit-hls.js