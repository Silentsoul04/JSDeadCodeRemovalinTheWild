(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("@playkit-js/playkit-js"));
    else if (typeof define === 'function' && define.amd)
        define("flash", ["playkit-js"], factory);
    else if (typeof exports === 'object')
        exports["flash"] = factory(require("@playkit-js/playkit-js"));
    else
        root["playkit"] = root["playkit"] || {}, root["playkit"]["flash"] = factory(root["KalturaPlayer"]["core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
        return __webpack_require__(__webpack_require__.s = 1);
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
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.NAME = exports.VERSION = exports.Engine = undefined;

            var _playkitJs = __webpack_require__(0);

            var _flash = __webpack_require__(2);

            exports.Engine = _flash.Flash;
            exports.VERSION = "1.2.3";
            exports.NAME = "@playkit-js/playkit-js-flash";


            if (_flash.Flash.isSupported()) {
                (0, _playkitJs.registerEngine)(_flash.Flash.id, _flash.Flash);
            }

            /***/
        }),
        /* 2 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Flash = undefined;

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

            var _playkitJs = __webpack_require__(0);

            var _flashhlsAdapter = __webpack_require__(3);

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

            var Flash = function(_FakeEventTarget) {
                _inherits(Flash, _FakeEventTarget);

                _createClass(Flash, null, [{
                    key: 'createEngine',


                    /**
                     * Factory method to create an engine.
                     * @param {PKMediaSourceObject} source - The selected source object.
                     * @param {Object} config - The player configuration.
                     * @returns {IEngine} - New instance of the run time engine.
                     * @public
                     * @static
                     */


                    /**
                     * The Flash class logger.
                     * @type {any}
                     * @static
                     * @private
                     */


                    /**
                     * The video element.
                     * @type {HTMLDivElement}
                     * @private
                     */


                    /**
                     * The event manager of the engine.
                     * @type {EventManager}
                     * @private
                     */
                    value: function createEngine(source, config) {
                        return new this(source, config);
                    }

                    /**
                     * Checks if the engine can play a given source.
                     * @param {PKMediaSourceObject} source - The source object to check.
                     * @param {boolean} preferNative - prefer native flag
                     * @returns {boolean} - Whether the engine can play the source.
                     * @public
                     * @static
                     */
                    // eslint-disable-next-line no-unused-vars

                    /**
                     * The supported mime types by FLASH HLS Engine.
                     * @member {Array<string>} _hlsMimeType
                     * @static
                     * @private
                     */

                }, {
                    key: 'canPlaySource',
                    value: function canPlaySource(source, preferNative) {
                        if (source && source.mimetype) {
                            return typeof source.mimetype === 'string' ? Flash._hlsMimeTypes.includes(source.mimetype.toLowerCase()) : false;
                        }
                        return false;
                    }

                    /**
                     * empty implementation
                     * @returns {void}
                     * @private
                     * @public
                     */

                }, {
                    key: 'prepareVideoElement',
                    value: function prepareVideoElement() {}

                    /**
                     * Checks if flash is supported.
                     * @returns {boolean} - Whether the flash engine is supported.
                     */

                }, {
                    key: 'isSupported',
                    value: function isSupported() {
                        var version = '0,0,0';
                        try {
                            version = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
                        } catch (e) {
                            try {
                                if (window.navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                                    version = (window.navigator.plugins['Shockwave Flash 2.0'] || window.navigator.plugins['Shockwave Flash']).description.replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
                                }
                            } catch (err) {
                                // ignore
                            }
                        }
                        var majorVersion = parseInt(version.split(',')[0]);
                        return majorVersion >= 10;
                    }

                    /**
                     * Runs the flash capabilities tests.
                     * @returns {void}
                     * @public
                     * @static
                     */

                }, {
                    key: 'runCapabilities',
                    value: function runCapabilities() {}

                    /**
                     * Gets the flash capabilities.
                     * @return {Promise<Object>} - The flash capabilities object.
                     * @public
                     * @static
                     */

                }, {
                    key: 'getCapabilities',
                    value: function getCapabilities() {
                        return Promise.resolve(_defineProperty({}, Flash.id, {
                            autoplay: true,
                            mutedAutoPlay: true
                        }));
                    }

                    /**
                     * @constructor
                     * @param {PKMediaSourceObject} source - The selected source object.
                     * @param {Object} config - The player configuration.
                     */

                }]);

                function Flash(source, config) {
                    _classCallCheck(this, Flash);

                    var _this = _possibleConstructorReturn(this, (Flash.__proto__ || Object.getPrototypeOf(Flash)).call(this));

                    _this._el = _playkitJs.Utils.Dom.createElement('div');
                    _this._init(source, config);
                    return _this;
                }

                _createClass(Flash, [{
                    key: 'hideTextTrack',
                    value: function hideTextTrack() {}
                }, {
                    key: 'resetAllCues',
                    value: function resetAllCues() {}
                }, {
                    key: 'enterPictureInPicture',
                    value: function enterPictureInPicture() {}
                }, {
                    key: 'exitPictureInPicture',
                    value: function exitPictureInPicture() {}
                }, {
                    key: '_init',
                    value: function _init(source, config) {
                        this._eventManager = new _playkitJs.EventManager();
                        if (this._el) {
                            this._api = new _flashhlsAdapter.FlashHLSAdapter(source, config, this._el);
                            this._api.attach();
                            this._addBindings();
                            this._srcToLoad = source.url;
                        }
                    }
                }, {
                    key: 'reset',
                    value: function reset() {
                        if (this._api) {
                            this._api.reset();
                        }
                        this._src = null;
                        this._volume = null;
                        this._volumeBeforeMute = null;
                        this._srcToLoad = null;
                    }

                    /**
                     * Restores the engine.
                     * @param {PKMediaSourceObject} source - The selected source object.
                     * @param {Object} config - The player configuration.
                     * @returns {void}
                     */

                }, {
                    key: 'restore',
                    value: function restore(source, config) {
                        this.destroy();
                        this._init(source, config);
                    }

                    /**
                     * get the playback rates
                     * @return {number[]} - playback rates
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        if (this._api) {
                            this._api.destroy();
                            this._eventManager.destroy();
                            this.reset();
                        }
                    }
                }, {
                    key: '_addBindings',
                    value: function _addBindings() {
                        var _this2 = this;

                        if (this._api) {
                            var events = [_playkitJs.EventType.ABR_MODE_CHANGED, _playkitJs.EventType.TRACKS_CHANGED, _playkitJs.EventType.ERROR, _playkitJs.EventType.PLAYING, _playkitJs.EventType.TIME_UPDATE, _playkitJs.EventType.PAUSE, _playkitJs.EventType.LOADED_METADATA, _playkitJs.EventType.LOADED_DATA, _playkitJs.EventType.PLAY, _playkitJs.EventType.VOLUME_CHANGE, _playkitJs.EventType.WAITING, _playkitJs.EventType.SEEKING, _playkitJs.EventType.SEEKED, _playkitJs.EventType.ENDED, _playkitJs.EventType.VIDEO_TRACK_CHANGED, _playkitJs.EventType.AUDIO_TRACK_CHANGED];
                            events.forEach(function(eventName) {
                                _this2._eventManager.listen(_this2._api, eventName, function(event) {
                                    return _this2.dispatchEvent(event);
                                });
                            });
                        } else {
                            Flash._logger.warn('Unable to attach flash - api is missing');
                        }
                    }

                    /**
                     * @returns {HTMLDivElement} - The flash wrapper element.
                     * @public
                     */

                }, {
                    key: 'getVideoElement',
                    value: function getVideoElement() {
                        return this._el;
                    }

                    /**
                     * Select an audio track
                     * @function selectAudioTrack
                     * @param {AudioTrack} audioTrack - the  audio track to select
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'selectAudioTrack',
                    value: function selectAudioTrack(audioTrack) {
                        if (this._api) {
                            this._api.selectAudioTrack(audioTrack);
                        }
                    }

                    /**
                     * Select a video track
                     * @function selectVideoTrack
                     * @param {VideoTrack} videoTrack - the track to select
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'selectVideoTrack',
                    value: function selectVideoTrack(videoTrack) {
                        if (this._api) {
                            this._api.selectVideoTrack(videoTrack);
                        }
                    }

                    /**
                     * Enables adaptive bitrate
                     * @function enableAdaptiveBitrate
                     * @returns {void}
                     * @public
                     */

                }, {
                    key: 'enableAdaptiveBitrate',
                    value: function enableAdaptiveBitrate() {
                        if (this._api) {
                            this._api.setABR();
                        }
                    }

                    /**
                     * Checking if adaptive bitrate switching is enabled.
                     * For progressive playback will always returns false.
                     * For adaptive playback will always returns true.
                     * @function isAdaptiveBitrateEnabled
                     * @returns {boolean} - Whether adaptive bitrate is enabled.
                     * @public
                     */

                }, {
                    key: 'isAdaptiveBitrateEnabled',
                    value: function isAdaptiveBitrateEnabled() {
                        var isAdaptive = false;
                        if (this._api) {
                            isAdaptive = this._api.isABR();
                        }
                        return isAdaptive;
                    }

                    /**
                     * Set a source.
                     * @param {string} source - Source to set.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'load',


                    /**
                     * Load media.
                     * @param {number} startTime - Optional time to start the video from.
                     * @public
                     * @returns {Promise<Object>} - The loaded data
                     */
                    value: function load(startTime) {
                        if (!this._api) {
                            Flash._logger.warn('Missing API - Flash is not ready');
                            return Promise.reject('Flash is not ready');
                        }
                        this._src = this._srcToLoad;
                        this._loadPromise = this._api.load(startTime);
                        return this._loadPromise;
                    }

                    /**
                     * Start/resume playback.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'play',
                    value: function play() {
                        var _this3 = this;

                        this._loadPromise.then(function() {
                            if (_this3._api) {
                                _this3._api.play();
                            }
                        });
                    }
                }, {
                    key: 'pause',
                    value: function pause() {
                        if (this._api) {
                            this._api.pause();
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
                        return false;
                    }

                    /**
                     * Get the current time in seconds.
                     * @returns {Number} - The current playback time.
                     * @public
                     */

                }, {
                    key: 'getStartTimeOfDvrWindow',


                    /**
                     * Get the start time of DVR window in live playback in seconds.
                     * @returns {Number} - start time of DVR window.
                     * @public
                     */
                    value: function getStartTimeOfDvrWindow() {
                        return 0;
                    }

                    /**
                     * The ended property returns whether the playback of the audio/video has ended.
                     * @returns {boolean} - The ended value.
                     * @public
                     */

                }, {
                    key: 'seekToLiveEdge',


                    /**
                     * Seeking to live edge.
                     * @function seekToLiveEdge
                     * @returns {void}
                     * @public
                     */
                    value: function seekToLiveEdge() {
                        this.currentTime = this.duration - 1;
                    }
                }, {
                    key: 'playbackRates',
                    get: function get() {
                        return [1];
                    }

                    /**
                     * Sets the current playback speed of the audio/video.
                     * @param {Number} playbackRate - The playback speed value.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'playbackRate',
                    set: function set(playbackRate) {
                            if (playbackRate != 1) {
                                Flash._logger.debug('This engine doesnt support playback rate <> 1');
                            }
                        }

                        /**
                         * Gets the current playback speed of the audio/video.
                         * @returns {Number} - The current playback speed value.
                         * @public
                         */
                        ,
                    get: function get() {
                        return 1;
                    }

                    /**
                     * Gets the default playback speed of the audio/video.
                     * @returns {Number} - The default playback speed value.
                     * @public
                     */

                }, {
                    key: 'defaultPlaybackRate',
                    get: function get() {
                        return 1;
                    }

                    /**
                     * Get the engine's id
                     * @public
                     * @returns {string} the engine's id
                     */

                }, {
                    key: 'id',
                    get: function get() {
                        return Flash.id;
                    }
                }, {
                    key: 'src',
                    set: function set(source) {
                            this._src = source;
                        }

                        /**
                         * Get the source url.
                         * @returns {string} - The source url.
                         * @public
                         */
                        ,
                    get: function get() {
                        if (this._src) {
                            return this._src;
                        }
                        return '';
                    }
                }, {
                    key: 'currentTime',
                    get: function get() {
                            if (this._api && this._api.currentTime) {
                                return this._api.currentTime;
                            }
                            return 0;
                        }

                        /**
                         * Set the current time in seconds.
                         * @param {Number} to - The number to set in seconds.
                         * @public
                         * @returns {void}
                         */
                        ,
                    set: function set(to) {
                        if (this._api) {
                            this._api.seek(to);
                        }
                    }

                    /**
                     * Get the duration in seconds.
                     * @returns {Number} - The playback duration.
                     * @public
                     */

                }, {
                    key: 'duration',
                    get: function get() {
                        var duration = 0;
                        if (this._api) {
                            duration = this._api.duration ? this._api.duration : this._api.getDuration();
                        }
                        return duration;
                    }

                    /**
                     * Set playback volume.
                     * @param {Number} vol - The volume to set.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'volume',
                    set: function set(vol) {
                            if (this._muted) {
                                this._volumeBeforeMute = vol;
                            } else {
                                this._volume = vol;
                                if (this._api) {
                                    this._api.volume(vol);
                                }
                            }
                        }

                        /**
                         * Get playback volume.
                         * @returns {Number} - The volume value of the video element.
                         * @public
                         */
                        ,
                    get: function get() {
                        return this._volume || 0;
                    }

                    /**
                     * Get paused state.
                     * @returns {boolean} - The paused value of the video element.
                     * @public
                     */

                }, {
                    key: 'paused',
                    get: function get() {
                        if (this._api) {
                            return this._api.paused;
                        }
                        return true;
                    }

                    /**
                     * Get seeking state.
                     * @returns {boolean} - The seeking value of the video element.
                     * @public
                     */

                }, {
                    key: 'seeking',
                    get: function get() {
                        if (this._api) {
                            return this._api.seeking;
                        }
                        return false;
                    }

                    /**
                     * Get the first seekable range (part) of the video in seconds.
                     * @returns {TimeRanges} - First seekable range (part) of the video in seconds.
                     * @public
                     */

                }, {
                    key: 'seekable',
                    get: function get() {
                        return this.buffered;
                    }

                    /**
                     * Get the first played range (part) of the video in seconds.
                     * @returns {TimeRanges} - First played range (part) of the video in seconds.
                     * @public
                     */

                }, {
                    key: 'played',
                    get: function get() {
                        var _this4 = this;

                        return {
                            length: 1,
                            start: function start() {
                                return 0;
                            },
                            end: function end() {
                                if (_this4._api) {
                                    return _this4._api.watched;
                                } else return 0;
                            }
                        };
                    }

                    /**
                     * Get the first buffered range (part) of the video in seconds.
                     * @returns {TimeRanges} - First buffered range (part) of the video in seconds.
                     * @public
                     */

                }, {
                    key: 'buffered',
                    get: function get() {
                        var bufferLength = 0;
                        var backBufferLength = 0;
                        var currentTime = 0;
                        if (this._api) {
                            var api = this._api;
                            backBufferLength = api.getBackBufferLength();
                            bufferLength = api.getBufferLength();
                            currentTime = api.currentTime ? api.currentTime : 0;
                        }
                        return {
                            length: 1,
                            start: function start() {
                                return currentTime - backBufferLength;
                            },
                            end: function end() {
                                return currentTime + bufferLength;
                            }
                        };
                    }

                    /**
                     * Set player muted state.
                     * @param {boolean} mute - The new mute value.
                     * @public
                     * @returns {void}
                     */

                }, {
                    key: 'muted',
                    set: function set(mute) {
                            if (mute) {
                                this.volume = 0;
                                this._muted = true;
                                this._volumeBeforeMute = this.volume;
                            } else {
                                this._muted = false;
                                if (this._volumeBeforeMute) {
                                    this.volume = this._volumeBeforeMute;
                                } else {
                                    this.volume = 1;
                                }
                            }
                        }

                        /**
                         * Get player muted state.
                         * @returns {boolean} - The muted value of the video element.
                         * @public
                         */
                        ,
                    get: function get() {
                        return this.volume == 0;
                    }

                    /**
                     * Get the default mute value.
                     * @returns {boolean} - The defaultMuted of the video element.
                     * @public
                     */

                }, {
                    key: 'defaultMuted',
                    get: function get() {
                        return false;
                    }
                }, {
                    key: 'ended',
                    get: function get() {
                        if (this._api) {
                            return this._api.ended;
                        }
                        return false;
                    }
                }]);

                return Flash;
            }(_playkitJs.FakeEventTarget);

            Flash._hlsMimeTypes = ['application/x-mpegurl', 'application/vnd.apple.mpegurl', 'audio/mpegurl', 'audio/x-mpegurl', 'video/x-mpegurl', 'video/mpegurl', 'application/mpegurl'];
            Flash._logger = (0, _playkitJs.getLogger)('Flash');
            Flash.id = 'flash';
            exports.Flash = Flash;

            /***/
        }),
        /* 3 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.FlashHLSAdapter = undefined;

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

            var _playkitJs = __webpack_require__(0);

            var _flashApi = __webpack_require__(4);

            var _defaultConfig = __webpack_require__(5);

            var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

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

            var FlashHLSAdapter = function(_FakeEventTarget) {
                _inherits(FlashHLSAdapter, _FakeEventTarget);

                _createClass(FlashHLSAdapter, null, [{
                    key: 'getFlashCode',
                    value: function getFlashCode(swf, flashVars, params, attributes) {
                        var objTag = '<object type="application/x-shockwave-flash" ';
                        var flashVarsString = '';
                        var paramsString = '';
                        var attrsString = '';

                        // Convert flash vars to string
                        if (flashVars) {
                            Object.getOwnPropertyNames(flashVars).forEach(function(key) {
                                flashVarsString += key + '=' + flashVars[key] + '&amp;';
                            });
                        }

                        // Add swf, flashVars, and other default params
                        params = _playkitJs.Utils.Object.mergeDeep({
                            movie: swf,
                            flashvars: flashVarsString,
                            // Required to talk to swf
                            allowScriptAccess: 'always',
                            // All should be default, but having security issues.
                            allowNetworking: 'all',
                            wmode: 'transparent',
                            bgColor: '#0',
                            quality: 'autohigh'
                        }, params);

                        // Create param tags string
                        Object.getOwnPropertyNames(params).forEach(function(key) {
                            paramsString += '<param name="' + key + '" value="' + params[key] + '" />';
                        });

                        attributes = _playkitJs.Utils.Object.mergeDeep({
                            // Add swf to attributes (need both for IE and Others to work)
                            data: swf,

                            // Default to 100% width/height
                            width: '100%',
                            height: '100%'
                        }, attributes);

                        // Create Attributes string
                        Object.getOwnPropertyNames(attributes).forEach(function(key) {
                            attrsString += key + '="' + attributes[key] + '" ';
                        });

                        return '' + objTag + attrsString + '>' + paramsString + '</object>';
                    }
                }]);

                function FlashHLSAdapter(source, config, el) {
                    _classCallCheck(this, FlashHLSAdapter);

                    var _this = _possibleConstructorReturn(this, (FlashHLSAdapter.__proto__ || Object.getPrototypeOf(FlashHLSAdapter)).call(this));

                    _this._firstPlay = true;
                    _this._loadReported = false;
                    _this.paused = true;
                    _this.ended = false;
                    _this.seeking = false;

                    var flashConfig = _playkitJs.Utils.Object.getPropertyPath(config, 'playback.options.flash');
                    flashConfig = _playkitJs.Utils.Object.mergeDeep(_defaultConfig2.default, flashConfig);
                    _this._config = flashConfig;
                    _this._src = source;
                    _this._el = el;
                    _this._apiLoadPromise = new Promise(function(resolve) {
                        _this._apiLoadResolve = resolve;
                    });
                    return _this;
                }

                _createClass(FlashHLSAdapter, [{
                    key: 'destroy',
                    value: function destroy() {
                        if (this._el && this._el.parentNode) {
                            this._el.innerHTML = '';
                        }
                    }
                }, {
                    key: 'attach',
                    value: function attach() {
                        var _this2 = this;

                        if (!this._config.flashvars) {
                            this._config.flashvars = {};
                        }
                        this._config.flashvars.callback = 'flashlsCallback';
                        this._el.innerHTML = FlashHLSAdapter.getFlashCode(this._config.swfUrl, this._config.flashvars, this._config.params, this._config.attributes);

                        var flashlsEvents = {
                            ready: function ready() {
                                _this2._api = new _flashApi.FlashAPI(_this2._el.firstElementChild);
                                if (_this2._initialVolume != null) {
                                    _this2.volume(_this2._initialVolume);
                                }
                                if (_this2._config.debug) {
                                    _this2._api.playerSetLogDebug(true);
                                    _this2._api.playerSetLogDebug2(true);
                                }
                                _this2._apiLoadResolve();
                            },
                            levelLoaded: function levelLoaded(loadmetrics) {
                                if (!_this2._loadReported) {
                                    _this2._trigger(_playkitJs.EventType.LOADED_DATA, loadmetrics);
                                    _this2._trigger(_playkitJs.EventType.LOADED_METADATA, loadmetrics);
                                    _this2._loadReported = true;
                                }
                            },
                            complete: function complete() {
                                _this2._firstPlay = true;
                                _this2.ended = true;
                                _this2._trigger(_playkitJs.EventType.ENDED);
                            },
                            position: function position(timemetrics) {
                                _this2.paused = false;
                                _this2.duration = timemetrics.duration;
                                _this2.buffer = timemetrics.buffer;
                                _this2.watched = timemetrics.watched;
                                if (_this2.currentTime != timemetrics.position || _this2.ended) {
                                    _this2.currentTime = timemetrics.position;
                                    _this2._trigger(_playkitJs.EventType.TIME_UPDATE, timemetrics);
                                }
                            },
                            error: function error(code, url, message) {
                                var error = new _playkitJs.Error(_playkitJs.Error.Severity.CRITICAL, _playkitJs.Error.Category.MEDIA, _playkitJs.Error.Code.VIDEO_ERROR, {
                                    code: code,
                                    extended: url,
                                    message: message
                                });
                                _this2._trigger(_playkitJs.EventType.ERROR, error);
                            },
                            manifest: function manifest(duration, levels_) {
                                var audioTracks = _this2._api.getAudioTrackList();
                                var parsedAudioTracks = [];
                                if (audioTracks) {
                                    for (var i = 0; i < audioTracks.length; i++) {
                                        var settings = {
                                            id: audioTracks[i].id,
                                            active: audioTracks[i].isDefault,
                                            label: audioTracks[i].title,
                                            language: audioTracks[i].title, //TODO: Get language?!?
                                            index: i
                                        };
                                        parsedAudioTracks.push(new _playkitJs.AudioTrack(settings));
                                    }
                                }

                                var videoTracks = [];
                                for (var _i = 0; _i < levels_.length; _i++) {
                                    // Create video tracks
                                    var _settings = {
                                        active: 0 === _i,
                                        bandwidth: levels_[_i].bitrate,
                                        width: levels_[_i].width,
                                        height: levels_[_i].height,
                                        language: '',
                                        index: _i
                                    };
                                    videoTracks.push(new _playkitJs.VideoTrack(_settings));
                                }
                                if (_this2._resolveLoad) {
                                    _this2._resolveLoad({
                                        tracks: videoTracks.concat(parsedAudioTracks)
                                    });
                                    _this2._resolveLoad = null;
                                }
                                _this2._trigger(_playkitJs.EventType.TRACKS_CHANGED, {
                                    tracks: videoTracks.concat(parsedAudioTracks)
                                });
                            },
                            seekState: function seekState(newState) {
                                if (_this2._firstPlay) {
                                    return;
                                }
                                if (newState === 'SEEKING') {
                                    _this2.seeking = true;
                                    _this2._trigger(_playkitJs.EventType.SEEKING);
                                    _this2._trigger(_playkitJs.EventType.WAITING);
                                }
                                if (newState === 'SEEKED') {
                                    _this2.seeking = false;
                                    _this2._trigger(_playkitJs.EventType.SEEKED);
                                }
                            },
                            state: function state(newState) {
                                //IDLE/PLAYING/PAUSED/PLAYING_BUFFERING/PAUSED_BUFFERING
                                switch (newState) {
                                    case 'IDLE':
                                        return;
                                    case 'PLAYING':
                                        _this2._trigger(_playkitJs.EventType.PLAYING);
                                        _this2._firstPlay = false;
                                        break;
                                    case 'PAUSED_BUFFERING':
                                        _this2._trigger(_playkitJs.EventType.WAITING);
                                        break;
                                    case 'PAUSED':
                                        _this2._trigger(_playkitJs.EventType.PAUSE);
                                        _this2.paused = true;
                                        break;
                                }
                            }
                        };
                        // Create a single global callback function and pass it's name
                        // to the SWF with the name `callback` in the FlashVars parameter.
                        window.flashlsCallback = function(eventName, args) {
                            if (flashlsEvents[eventName]) {
                                flashlsEvents[eventName].apply(null, args);
                            }
                        };
                        return this._el;
                    }
                }, {
                    key: 'load',
                    value: function load(startTime) {
                        var _this3 = this;

                        this._loadPromise = new Promise(function(resolve) {
                            _this3._resolveLoad = resolve;
                            if (startTime) {
                                _this3._startTime = startTime;
                            }
                            _this3._apiLoadPromise.then(function() {
                                _this3._api.load(_this3._src.url);
                            });
                        });
                        return this._loadPromise;
                    }
                }, {
                    key: 'play',
                    value: function play() {
                        var _this4 = this;

                        this._apiLoadPromise.then(function() {
                            if (_this4._firstPlay) {
                                _this4.ended = false;
                                _this4._api.play(_this4._startTime ? _this4._startTime : -1);
                            } else {
                                _this4._api.resume();
                            }
                            _this4._trigger(_playkitJs.EventType.PLAY);
                        });
                    }
                }, {
                    key: 'pause',
                    value: function pause() {
                        if (this._api) {
                            this._api.pause();
                        }
                    }
                }, {
                    key: 'seek',
                    value: function seek(to) {
                        if (this._api) {
                            this._api.seek(to);
                        }
                    }
                }, {
                    key: 'volume',
                    value: function volume(vol) {
                        if (this._api) {
                            this._api.volume(vol * 100);
                            this._trigger(_playkitJs.EventType.VOLUME_CHANGE);
                        } else {
                            this._initialVolume = vol;
                        }
                    }
                }, {
                    key: 'getDuration',
                    value: function getDuration() {
                        if (this._api) {
                            return this._api.getDuration();
                        } else {
                            return Number.NaN;
                        }
                    }
                }, {
                    key: 'selectAudioTrack',
                    value: function selectAudioTrack(audioTrack) {
                        if (this._api) {
                            this._api.setAudioTrack(audioTrack.id);
                            this._trigger(_playkitJs.EventType.AUDIO_TRACK_CHANGED, {
                                selectedAudioTrack: audioTrack
                            });
                        }
                    }
                }, {
                    key: 'selectVideoTrack',
                    value: function selectVideoTrack(videoTrack) {
                        if (this._api) {
                            if (this.isABR()) {
                                this._trigger(_playkitJs.EventType.ABR_MODE_CHANGED, {
                                    mode: 'manual'
                                });
                            }
                            this._api.setCurrentLevel(videoTrack.index);
                            this._trigger(_playkitJs.EventType.VIDEO_TRACK_CHANGED, {
                                selectedVideoTrack: videoTrack
                            });
                        }
                    }
                }, {
                    key: 'setABR',
                    value: function setABR() {
                        if (this._api) {
                            this._api.setCurrentLevel(-1);
                            this._trigger(_playkitJs.EventType.ABR_MODE_CHANGED, {
                                mode: 'auto'
                            });
                        }
                    }
                }, {
                    key: 'isABR',
                    value: function isABR() {
                        if (this._api) {
                            return this._api.getAutoLevel();
                        }
                        return false;
                    }
                }, {
                    key: 'getBufferLength',
                    value: function getBufferLength() {
                        if (this._api) {
                            return this._api.getbufferLength();
                        }
                        return 0;
                    }
                }, {
                    key: 'getBackBufferLength',
                    value: function getBackBufferLength() {
                        if (this._api) {
                            return this._api.getbackBufferLength();
                        }
                        return 0;
                    }
                }, {
                    key: '_trigger',
                    value: function _trigger(name, payload) {
                        this.dispatchEvent(new _playkitJs.FakeEvent(name, payload));
                    }
                }, {
                    key: 'reset',
                    value: function reset() {
                        this.paused = true;
                        this.ended = false;
                        this.seeking = false;
                        this.duration = null;
                        this.buffer = null;
                        this.watched = null;
                    }
                }]);

                return FlashHLSAdapter;
            }(_playkitJs.FakeEventTarget);

            exports.FlashHLSAdapter = FlashHLSAdapter;

            /***/
        }),
        /* 4 */
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

            var FlashAPI = function() {
                function FlashAPI(flashObject) {
                    _classCallCheck(this, FlashAPI);

                    this.flashObject = flashObject;
                }

                _createClass(FlashAPI, [{
                    key: "load",
                    value: function load(url) {
                        this.flashObject.playerLoad(url);
                    }
                }, {
                    key: "play",
                    value: function play(offset) {
                        this.flashObject.playerPlay(offset);
                    }
                }, {
                    key: "pause",
                    value: function pause() {
                        this.flashObject.playerPause();
                    }
                }, {
                    key: "resume",
                    value: function resume() {
                        this.flashObject.playerResume();
                    }
                }, {
                    key: "seek",
                    value: function seek(offset) {
                        this.flashObject.playerSeek(offset);
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        this.flashObject.playerStop();
                    }
                }, {
                    key: "volume",
                    value: function volume(_volume) {
                        this.flashObject.playerVolume(_volume);
                    }
                }, {
                    key: "setCurrentLevel",
                    value: function setCurrentLevel(level) {
                        this.flashObject.playerSetCurrentLevel(level);
                    }
                }, {
                    key: "setNextLevel",
                    value: function setNextLevel(level) {
                        this.flashObject.playerSetNextLevel(level);
                    }
                }, {
                    key: "setLoadLevel",
                    value: function setLoadLevel(level) {
                        this.flashObject.playerSetLoadLevel(level);
                    }
                }, {
                    key: "setMaxBufferLength",
                    value: function setMaxBufferLength(len) {
                        this.flashObject.playerSetmaxBufferLength(len);
                    }
                }, {
                    key: "getPosition",
                    value: function getPosition() {
                        return this.flashObject.getPosition();
                    }
                }, {
                    key: "getDuration",
                    value: function getDuration() {
                        return this.flashObject.getDuration();
                    }
                }, {
                    key: "getbufferLength",
                    value: function getbufferLength() {
                        return this.flashObject.getbufferLength();
                    }
                }, {
                    key: "getbackBufferLength",
                    value: function getbackBufferLength() {
                        return this.flashObject.getbackBufferLength();
                    }
                }, {
                    key: "getLowBufferLength",
                    value: function getLowBufferLength() {
                        return this.flashObject.getlowBufferLength();
                    }
                }, {
                    key: "getMinBufferLength",
                    value: function getMinBufferLength() {
                        return this.flashObject.getminBufferLength();
                    }
                }, {
                    key: "getMaxBufferLength",
                    value: function getMaxBufferLength() {
                        return this.flashObject.getmaxBufferLength();
                    }
                }, {
                    key: "getLevels",
                    value: function getLevels() {
                        return this.flashObject.getLevels();
                    }
                }, {
                    key: "getAutoLevel",
                    value: function getAutoLevel() {
                        return this.flashObject.getAutoLevel();
                    }
                }, {
                    key: "getCurrentLevel",
                    value: function getCurrentLevel() {
                        return this.flashObject.getCurrentLevel();
                    }
                }, {
                    key: "getNextLevel",
                    value: function getNextLevel() {
                        return this.flashObject.getNextLevel();
                    }
                }, {
                    key: "getLoadLevel",
                    value: function getLoadLevel() {
                        return this.flashObject.getLoadLevel();
                    }
                }, {
                    key: "getAudioTrackList",
                    value: function getAudioTrackList() {
                        return this.flashObject.getAudioTrackList();
                    }
                }, {
                    key: "getStats",
                    value: function getStats() {
                        return this.flashObject.getStats();
                    }
                }, {
                    key: "setAudioTrack",
                    value: function setAudioTrack(trackId) {
                        this.flashObject.playerSetAudioTrack(trackId);
                    }
                }, {
                    key: "playerSetLogDebug",
                    value: function playerSetLogDebug(state) {
                        this.flashObject.playerSetLogDebug(state);
                    }
                }, {
                    key: "getLogDebug",
                    value: function getLogDebug() {
                        return this.flashObject.getLogDebug();
                    }
                }, {
                    key: "playerSetLogDebug2",
                    value: function playerSetLogDebug2(state) {
                        this.flashObject.playerSetLogDebug2(state);
                    }
                }, {
                    key: "getLogDebug2",
                    value: function getLogDebug2() {
                        return this.flashObject.getLogDebug2();
                    }
                }, {
                    key: "playerSetUseHardwareVideoDecoder",
                    value: function playerSetUseHardwareVideoDecoder(state) {
                        this.flashObject.playerSetUseHardwareVideoDecoder(state);
                    }
                }, {
                    key: "getUseHardwareVideoDecoder",
                    value: function getUseHardwareVideoDecoder() {
                        return this.flashObject.getUseHardwareVideoDecoder();
                    }
                }, {
                    key: "playerSetflushLiveURLCache",
                    value: function playerSetflushLiveURLCache(state) {
                        this.flashObject.playerSetflushLiveURLCache(state);
                    }
                }, {
                    key: "getflushLiveURLCache",
                    value: function getflushLiveURLCache() {
                        return this.flashObject.getflushLiveURLCache();
                    }
                }, {
                    key: "playerSetJSURLStream",
                    value: function playerSetJSURLStream(state) {
                        this.flashObject.playerSetJSURLStream(state);
                    }
                }, {
                    key: "getJSURLStream",
                    value: function getJSURLStream() {
                        return this.flashObject.getJSURLStream();
                    }
                }, {
                    key: "playerCapLeveltoStage",
                    value: function playerCapLeveltoStage(state) {
                        this.flashObject.playerCapLeveltoStage(state);
                    }
                }, {
                    key: "getCapLeveltoStage",
                    value: function getCapLeveltoStage() {
                        return this.flashObject.getCapLeveltoStage();
                    }
                }, {
                    key: "playerSetAutoLevelCapping",
                    value: function playerSetAutoLevelCapping(level) {
                        this.flashObject.playerSetAutoLevelCapping(level);
                    }
                }, {
                    key: "getAutoLevelCapping",
                    value: function getAutoLevelCapping() {
                        return this.flashObject.getAutoLevelCapping();
                    }
                }]);

                return FlashAPI;
            }();

            exports.FlashAPI = FlashAPI;

            /***/
        }),
        /* 5 */
        /***/
        (function(module, exports) {

            module.exports = {
                "swfUrl": "https://cdnapisec.kaltura.com/html5/static/flashhls/v0.4.4.24/flashlsChromeless.swf?inline=1"
            }

            /***/
        })
        /******/
    ]);
});


// WEBPACK FOOTER //
// playkit-flash.js