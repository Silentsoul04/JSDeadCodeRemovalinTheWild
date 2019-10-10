(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("playkit-js"));
    else if (typeof define === 'function' && define.amd)
        define(["playkit-js"], factory);
    else if (typeof exports === 'object')
        exports["kanalytics"] = factory(require("playkit-js"));
    else
        root["playkit"] = root["playkit"] || {}, root["playkit"]["kanalytics"] = factory(root["playkit"]["core"]);
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
            exports.NAME = exports.VERSION = undefined;

            var _playkitJs = __webpack_require__(0);

            var _kanalytics = __webpack_require__(2);

            var _kanalytics2 = _interopRequireDefault(_kanalytics);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            exports.default = _kanalytics2.default;
            exports.VERSION = "0.10.0";
            exports.NAME = "@playkit-js/playkit-js-kanalytics";


            var pluginName = 'kanalytics';
            /**
             * Register the plugin in the playkit-js plugin framework.
             */
            (0, _playkitJs.registerPlugin)(pluginName, _kanalytics2.default);

            /***/
        }),
        /* 2 */
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

            var _playkitJs = __webpack_require__(0);

            var _playkitStatsService = __webpack_require__(3);

            var _eventTypes = __webpack_require__(4);

            var _eventTypes2 = _interopRequireDefault(_eventTypes);

            var _event = __webpack_require__(5);

            var _event2 = _interopRequireDefault(_event);

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

            var SEEK_OFFSET = 2000;
            var LIVE = 'Live';

            /**
             * @classdesc
             */

            var KAnalytics = function(_BasePlugin) {
                _inherits(KAnalytics, _BasePlugin);

                _createClass(KAnalytics, null, [{
                    key: 'isValid',


                    /**
                     * @static
                     * @public
                     * @returns {boolean} - Whether the plugin is valid.
                     */
                    value: function isValid() {
                        return true;
                    }

                    /**
                     * The time of the last seek event
                     * @private
                     */

                    /**
                     * @static
                     */

                    /**
                     * Whether seeking occurred
                     * @private
                     */

                    /**
                     * The ended flag
                     * @private
                     */

                    /**
                     * The Kaltura session
                     * @private
                     */

                    /**
                     * Indicate whether time percent event already sent
                     * @private
                     */

                    /**
                     * Indicate whether widget loaded event already sent
                     * @private
                     */

                }]);

                /**
                 * @constructor
                 * @param {string} name - The plugin name.
                 * @param {Player} player - The player reference.
                 * @param {Object} config - The plugin configuration.
                 */
                function KAnalytics(name, player, config) {
                    _classCallCheck(this, KAnalytics);

                    var _this = _possibleConstructorReturn(this, (KAnalytics.__proto__ || Object.getPrototypeOf(KAnalytics)).call(this, name, player, config));

                    _this._lastSeekEvent = 0;
                    _this._hasSeeked = false;
                    _this._ended = false;
                    _this._ks = '';
                    _this._timePercentEvent = {};
                    _this._widgetLoadedEventSent = false;

                    _this._registerListeners();
                    return _this;
                }

                /**
                 * Reset the plugin flags
                 * @return {void}
                 */


                _createClass(KAnalytics, [{
                    key: 'reset',
                    value: function reset() {
                        this._hasSeeked = false;
                        this._ended = false;
                        this._ks = '';
                        this._timePercentEvent = {};
                    }

                    /**
                     * @public
                     * @return {void}
                     */

                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.eventManager.destroy();
                    }

                    /**
                     * Register the player event listeners
                     * @private
                     * @return {void}
                     */

                }, {
                    key: '_registerListeners',
                    value: function _registerListeners() {
                        var PlayerEvent = this.player.Event;
                        this.eventManager.listen(this.player, PlayerEvent.SOURCE_SELECTED, this._onSourceSelected.bind(this));
                        this.eventManager.listen(this.player, PlayerEvent.FIRST_PLAY, this._sendAnalytics.bind(this, _eventTypes2.default.PLAY));
                        this.eventManager.listen(this.player, PlayerEvent.PLAY, this._onPlay.bind(this));
                        this.eventManager.listen(this.player, PlayerEvent.ENDED, this._onEnded.bind(this));
                        this.eventManager.listen(this.player, PlayerEvent.SEEKED, this._sendSeekAnalytic.bind(this));
                        this.eventManager.listen(this.player, PlayerEvent.TIME_UPDATE, this._sendTimePercentAnalytic.bind(this));
                        this.eventManager.listen(this.player, PlayerEvent.PLAYER_STATE_CHANGED, this._onPlayerStateChanged.bind(this));
                    }

                    /**
                     * The source selected event listener
                     * @private
                     * @return {void}
                     */

                }, {
                    key: '_onSourceSelected',
                    value: function _onSourceSelected() {
                        var _this2 = this;

                        if (!this._widgetLoadedEventSent) {
                            this._sendAnalytics(_eventTypes2.default.WIDGET_LOADED);
                            this._widgetLoadedEventSent = true;
                        }
                        this.player.ready().then(function() {
                            _this2._sendAnalytics(_eventTypes2.default.MEDIA_LOADED);
                        });
                    }

                    /**
                     * The play event listener
                     * @private
                     * @return {void}
                     */

                }, {
                    key: '_onPlay',
                    value: function _onPlay() {
                        if (this._ended) {
                            this._ended = false;
                            this._sendAnalytics(_eventTypes2.default.REPLAY);
                        }
                    }

                    /**
                     * The ended event listener
                     * @private
                     * @return {void}
                     */

                }, {
                    key: '_onEnded',
                    value: function _onEnded() {
                        this._ended = true;
                    }

                    /**
                     * The player state changed event listener
                     * @param {any} event - the event
                     * @private
                     * @return {void}
                     */

                }, {
                    key: '_onPlayerStateChanged',
                    value: function _onPlayerStateChanged(event) {
                        if (event.payload.newState.type === this.player.State.BUFFERING) {
                            this._sendAnalytics(_eventTypes2.default.BUFFER_START);
                        }
                        if (event.payload.oldState.type === this.player.State.BUFFERING) {
                            this._sendAnalytics(_eventTypes2.default.BUFFER_END);
                        }
                    }

                    /**
                     * Send seek analytic
                     * @private
                     * @return {void}
                     */

                }, {
                    key: '_sendSeekAnalytic',
                    value: function _sendSeekAnalytic() {
                        var now = new Date().getTime();
                        if (this._lastSeekEvent + SEEK_OFFSET < now && (this.player.config.type !== LIVE || this.player.config.dvr)) {
                            // avoid sending lots of seeking while scrubbing
                            this._sendAnalytics(_eventTypes2.default.SEEK);
                            this._hasSeeked = true;
                        }
                        this._lastSeekEvent = now;
                    }

                    /**
                     * Send time percent analytic
                     * @private
                     * @return {void}
                     */

                }, {
                    key: '_sendTimePercentAnalytic',
                    value: function _sendTimePercentAnalytic() {
                        if (this.player.config.type !== LIVE) {
                            var percent = this.player.currentTime / this.player.duration;
                            if (!this._timePercentEvent.PLAY_REACHED_25 && percent >= 0.25) {
                                this._timePercentEvent.PLAY_REACHED_25 = true;
                                this._sendAnalytics(_eventTypes2.default.PLAY_REACHED_25);
                            }
                            if (!this._timePercentEvent.PLAY_REACHED_50 && percent >= 0.5) {
                                this._timePercentEvent.PLAY_REACHED_50 = true;
                                this._sendAnalytics(_eventTypes2.default.PLAY_REACHED_50);
                            }
                            if (!this._timePercentEvent.PLAY_REACHED_75 && percent >= 0.75) {
                                this._timePercentEvent.PLAY_REACHED_75 = true;
                                this._sendAnalytics(_eventTypes2.default.PLAY_REACHED_75);
                            }
                            if (!this._timePercentEvent.PLAY_REACHED_100 && percent >= 1) {
                                this._timePercentEvent.PLAY_REACHED_100 = true;
                                this._sendAnalytics(_eventTypes2.default.PLAY_REACHED_100);
                            }
                        }
                    }

                    /**
                     * Get the player params which relevant to analytics request
                     * @private
                     * @return {Object} - The player params
                     */

                }, {
                    key: '_sendAnalytics',


                    /**
                     * Register the player event listeners
                     * @param {number} eventType - The event type
                     * @private
                     * @return {void}
                     */
                    value: function _sendAnalytics(eventType) {
                        var _this3 = this;

                        if (!this._validate()) {
                            return;
                        }
                        var statsEvent = new _event2.default(eventType);
                        statsEvent.currentPoint = this.player.currentTime;
                        statsEvent.duration = this.player.duration;
                        statsEvent.seek = this._hasSeeked;
                        Object.assign(statsEvent, this._playerParams);
                        var eventData = {
                            event: statsEvent,
                            hasKanalony: this.config.hasKanalony
                        };
                        var request = _playkitStatsService.OVPStatsService.collect(this.config.serviceUrl, this._ks, this.config.playerVersion, eventData);
                        request.doHttpRequest().then(function() {
                            _this3.logger.debug('Analytics event sent ', statsEvent);
                        }, function(err) {
                            _this3.logger.error('Failed to send analytics event ', statsEvent, err);
                        });
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
                        this.logger.warn('block report because of missing param ' + missingParam);
                    }
                }, {
                    key: '_playerParams',
                    get: function get() {
                        this._ks = this.config.ks;
                        var params = {
                            clientVer: this.config.playerVersion,
                            entryId: this.config.entryId,
                            sessionId: this.config.sessionId,
                            uiConfId: this.config.uiConfId || 0,
                            partnerId: this.config.partnerId,
                            widgetId: this.config.partnerId ? '_' + this.config.partnerId : '',
                            referrer: this.config.referrer
                        };
                        if (this.config.playlistId) {
                            params['playlistId'] = this.config.playlistId;
                        }
                        return params;
                    }
                }]);

                return KAnalytics;
            }(_playkitJs.BasePlugin);

            KAnalytics.defaultConfig = {
                serviceUrl: '//stats.kaltura.com/api_v3/index.php',
                hasKanalony: false
            };
            exports.default = KAnalytics;

            /***/
        }),
        /* 3 */
        /***/
        (function(module, exports, __webpack_require__) {

            ! function(e, t) {
                true ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.stats = t() : (e.playkit = e.playkit || {}, e.playkit.services = e.playkit.services || {}, e.playkit.services.stats = t())
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
                    }, t.p = "", t(t.s = 16)
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
                        d = r(v),
                        y = function(e) {
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
                    y._logger = (0, p.default)("MultiRequestBuilder"), t.default = y;
                    var b = t.MultiRequestResult = function e(t) {
                        var n = this;
                        i(this, e), this.results = [], this.success = !0, (t.result ? t.result : t).forEach(function(t) {
                            var r = new d.default(t);
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
                }, , , function(e, t, n) {
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
                        d = n(9),
                        y = function(e) {
                            function t() {
                                return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                            }
                            return u(t, e), a(t, null, [{
                                key: "collect",
                                value: function(e, t, n, r) {
                                    var o = v.default.get(),
                                        i = {};
                                    Object.assign(i, o.serviceParams, {
                                        ks: t,
                                        clientTag: "html5:v" + n
                                    }, r);
                                    var u = new f.default;
                                    return u.service = "stats", u.action = "collect", u.method = "GET", u.tag = "stats-collect", u.params = i, u.url = e + "?service=" + u.service + "&action=" + u.action + "&" + (0, d.param)(u.params), u
                                }
                            }]), t
                        }(s.default);
                    t.default = y
                }, , , , function(e, t, n) {
                    "use strict";

                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.VERSION = t.NAME = t.RequestBuilder = t.OVPConfiguration = t.OVPStatsService = void 0;
                    var o = n(0),
                        i = r(o),
                        u = n(1),
                        a = r(u),
                        c = n(12),
                        s = r(c);
                    t.OVPStatsService = s.default, t.OVPConfiguration = a.default, t.RequestBuilder = i.default, t.NAME = "playkit-js-providers-stats-service", t.VERSION = "2.5.0"
                }])
            });
            //# sourceMappingURL=playkit-stats-service.js.map

            /***/
        }),
        /* 4 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var EVENT_TYPES = {
                WIDGET_LOADED: 1,
                MEDIA_LOADED: 2,
                PLAY: 3,
                PLAY_REACHED_25: 4,
                PLAY_REACHED_50: 5,
                PLAY_REACHED_75: 6,
                PLAY_REACHED_100: 7,
                OPEN_EDIT: 8,
                OPEN_VIRAL: 9,
                OPEN_DOWNLOAD: 10,
                OPEN_REPORT: 11,
                BUFFER_START: 12,
                BUFFER_END: 13,
                OPEN_FULL_SCREEN: 14,
                CLOSE_FULL_SCREEN: 15,
                REPLAY: 16,
                SEEK: 17,
                OPEN_UPLOAD: 18,
                SAVE_PUBLISH: 19,
                CLOSE_EDITOR: 20,
                PRE_BUMPER_PLAYED: 21,
                POST_BUMPER_PLAYED: 22,
                BUMPER_CLICKED: 23,
                PREROLL_STARTED: 24,
                MIDROLL_STARTED: 25,
                POSTROLL_STARTED: 26,
                OVERLAY_STARTED: 27,
                PREROLL_CLICKED: 28,
                MIDROLL_CLICKED: 29,
                POSTROLL_CLICKED: 30,
                OVERLAY_CLICKED: 31,
                PREROLL_25: 32,
                PREROLL_50: 33,
                PREROLL_75: 34,
                MIDROLL_25: 35,
                MIDROLL_50: 36,
                MIDROLL_75: 37,
                POSTROLL_25: 38,
                POSTROLL_50: 39,
                POSTROLL_75: 40
            };

            exports.default = EVENT_TYPES;

            /***/
        }),
        /* 5 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var Event =

                /**
                 * @constructor
                 * @param {number} eventType - The event type
                 */

                /**
                 * The feature type
                 */

                /**
                 * The kaltura application name
                 */

                /**
                 * The referrer of the client
                 */

                /**
                 * The duration of the video in milliseconds
                 */

                /**
                 * The partner's user id
                 */

                /**
                 * The widget id
                 */

                /**
                 * The entry id
                 */

                /**
                 * The session id. A unique string generated by the client that will represent the client-side session
                 * */

                /**
                 * The event type
                 */
                function Event(eventType) {
                    _classCallCheck(this, Event);

                    this.eventType = eventType;
                    this.isFirstInSession = false;
                    this.eventTimestamp = new Date().getTime();
                }
            /**
             * Whether kanalony plugin is enabled
             */

            /**
             * The context id
             */

            /**
             * Whether the event is thrown for the first video in the session
             */

            /**
             * Whether the user ever used seek in this session
             */

            /**
             * The timestamp along the video when the event happened
             */

            /**
             * The uiconf id
             */

            /**
             * The playlist id
             */

            /**
             * The partner id
             */

            /**
             * The client's timestamp of this event
             */

            /**
             * The client version
             */
            ;

            exports.default = Event;

            /***/
        })
        /******/
    ]);
});


// WEBPACK FOOTER //
// playkit-kanalytics.js


// WEBPACK FOOTER //
// kanalytics/playkit-kanalytics.js