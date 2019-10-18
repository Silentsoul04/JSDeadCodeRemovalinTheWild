! function(modules) {
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      exports: {},
      id: moduleId,
      loaded: !1
    };
    return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = !0, module.exports
  }
  var installedModules = {};
  return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "", __webpack_require__(0)
}([function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _tracertCore = __webpack_require__(12),
    _tracertCore2 = _interopRequireDefault(_tracertCore),
    _tracertAp = __webpack_require__(9),
    _tracertAp2 = _interopRequireDefault(_tracertAp),
    _tracertWap = __webpack_require__(34),
    _tracertWap2 = _interopRequireDefault(_tracertWap),
    _tracertPluginTb = __webpack_require__(33),
    _tracertPluginTb2 = _interopRequireDefault(_tracertPluginTb),
    _tracertPluginAutoClick = __webpack_require__(13),
    _tracertPluginAutoClick2 = _interopRequireDefault(_tracertPluginAutoClick),
    _tracertPluginAutoExpo = __webpack_require__(15),
    _tracertPluginAutoExpo2 = _interopRequireDefault(_tracertPluginAutoExpo),
    _tracertPluginLx = __webpack_require__(31),
    _tracertPluginLx2 = _interopRequireDefault(_tracertPluginLx),
    _tracertPluginQn = __webpack_require__(32),
    _tracertPluginQn2 = _interopRequireDefault(_tracertPluginQn),
    _tracertPluginDtmonitor = __webpack_require__(17),
    _tracertPluginDtmonitor2 = _interopRequireDefault(_tracertPluginDtmonitor),
    _tracertPluginSem = __webpack_require__(19),
    _tracertPluginSem2 = _interopRequireDefault(_tracertPluginSem),
    _tracertPluginFulllinkParams = __webpack_require__(18),
    _tracertPluginFulllinkParams2 = _interopRequireDefault(_tracertPluginFulllinkParams),
    _helper = __webpack_require__(27),
    _helper2 = _interopRequireDefault(_helper),
    win = window;
  if (!win.Tracert || win.Tracert._isInit) {
    var Tracert = new _tracertCore2["default"],
      appInfo = _helper2["default"].checkApp(win.navigator.userAgent);
    /(AP|AF|BK|AM|APHK|KB)/.test(appInfo.name) ? (Tracert.loadPlugins([_tracertWap2["default"], _tracertAp2["default"], _tracertPluginDtmonitor2["default"], _tracertPluginAutoClick2["default"], _tracertPluginAutoExpo2["default"], _tracertPluginSem2["default"], _tracertPluginFulllinkParams2["default"]]), Tracert.call("info", {
      seedId: "H5_TRACERT_USE_LOG",
      logLevel: "3",
      mdata: {
        "tracert-version": "3.0.7"
      }
    })) : /(TB|TM|JU)/.test(appInfo.name) ? Tracert.loadPlugins([_tracertWap2["default"], _tracertPluginTb2["default"], _tracertPluginAutoClick2["default"], _tracertPluginAutoExpo2["default"]]) : /LX/.test(appInfo.name) ? Tracert.loadPlugins([_tracertWap2["default"], _tracertPluginLx2["default"], _tracertPluginAutoClick2["default"], _tracertPluginAutoExpo2["default"]]) : /QN/.test(appInfo.name) ? Tracert.loadPlugins([_tracertWap2["default"], _tracertPluginQn2["default"], _tracertPluginAutoClick2["default"], _tracertPluginAutoExpo2["default"]]) : Tracert.loadPlugins([_tracertWap2["default"], _tracertPluginAutoClick2["default"], _tracertPluginAutoExpo2["default"]]), _helper2["default"].disableBizLog(), _helper2["default"].initTracert(Tracert), _helper2["default"].runBizlogLoader(Tracert)
  }
  exports["default"] = win.Tracert, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {},
    _event = __webpack_require__(4),
    _event2 = _interopRequireDefault(_event),
    _expo = __webpack_require__(24),
    _expo2 = _interopRequireDefault(_expo),
    _format = __webpack_require__(5),
    _format2 = _interopRequireDefault(_format),
    _index = __webpack_require__(2),
    _index2 = _interopRequireDefault(_index),
    _dom = __webpack_require__(23),
    _dom2 = _interopRequireDefault(_dom),
    _temporary_storage = __webpack_require__(25),
    _temporary_storage2 = _interopRequireDefault(_temporary_storage),
    _uuid = __webpack_require__(26),
    _uuid2 = _interopRequireDefault(_uuid);
  exports["default"] = _extends({}, _event2["default"], _expo2["default"], _format2["default"], _index2["default"], _dom2["default"], {
    storage: _temporary_storage2["default"],
    uuid: _uuid2["default"]
  }), module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _event = __webpack_require__(4);
  exports["default"] = {
    load: function(callback) {
      "interactive" === document.readyState || "complete" === document.readyState ? callback() : (0, _event.addEvent)("DOMContentLoaded", document, callback)
    },
    requestIdleCallback: function(_requestIdleCallback) {
      function requestIdleCallback(_x) {}
      return requestIdleCallback.toString = function() {}, requestIdleCallback
    }(function(callback) {}),
    dealExtra: function(extra) {},
    objectAssign: function(target, obj) {
      var tar = target || {};
      for (var key in obj) obj.hasOwnProperty(key) && void 0 !== obj[key] && (tar[key] = obj[key]);
      return tar
    },
    getValue: function(name) {
      var val = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.search;
      if (!name) return "";
      var result = "",
        AliJSBridge = window.AlipayJSBridge;
      try {
        var pattern = new RegExp("(?=\\?|\\&|\\b|^)" + name + "\\=(.+?)(?=\\&|$)");
        result = pattern.exec(val), result = result ? "" + result[1] : "", result = decodeURIComponent(result)
      } catch (ex) {
        console.warn(ex)
      }
      return "" === result && (result = AliJSBridge && AliJSBridge.startupParams && AliJSBridge.startupParams[name]), result
    },
    getApFloatVersion: function(userAgent) {},
    loadPlugin: function(tracert) {},
    cookiesPrefix: "_TRACERT_COOKIE_"
  }, module.exports = exports["default"]
}, function(module, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), exports["default"] = function(top, height, clientHeight) {}, module.exports = exports["default"]
}, function(module, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), exports["default"] = {
    addEvent: function(evnt, ele, func) {
      var elem = ele || window.document;
      elem.addEventListener ? elem.addEventListener(evnt, func, !0) : elem.attachEvent ? elem.attachEvent("on" + evnt, func) : elem[evnt] = func
    },
    removeEvent: function(evnt, ele, func) {},
    debounce: function(func, wait) {}
  }, module.exports = exports["default"]
}, function(module, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), exports["default"] = {
    objToStr: function(obj) {
      var spliter = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "^",
        strArr = [],
        prop = void 0;
      if (obj instanceof Array) strArr = obj;
      else if (obj instanceof Object)
        for (prop in obj) obj.hasOwnProperty(prop) && strArr.push(prop + "=" + obj[prop]);
      return strArr.join(spliter)
    },
    strToObj: function(str) {}
  }, module.exports = exports["default"]
}, function(module, exports) {
  var checkApp = function(ua) {
    var app = {},
      aliApp = ua.match(/AliApp\S+\b\)/gi);
    return app.is = !!/(T-UA)|(TBIOS)|(WindVane)|(AliApp)/i.test(ua), app.name = aliApp ? aliApp[0].match(/\(\w+\-*\w*/)[0].split("(")[1] : "", app.version = aliApp ? aliApp[0].match(/(\d+\.*)+/gi)[0] : "", app
  };
  module.exports = checkApp
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _base = __webpack_require__(3),
    _base2 = _interopRequireDefault(_base),
    win = window,
    doc = win.document,
    docEl = doc.documentElement;
  exports["default"] = function(el) {}, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _base = __webpack_require__(3),
    _base2 = _interopRequireDefault(_base),
    win = window,
    doc = win.document,
    docEl = doc.documentElement;
  exports["default"] = function(el) {}, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _context = __webpack_require__(10),
    _context2 = _interopRequireDefault(_context),
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    ap = function(tracert, callback) {};
  window.tracertAp = ap, exports["default"] = ap, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {},
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {} : function(obj) {},
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    _helper = __webpack_require__(11),
    _helper2 = _interopRequireDefault(_helper);
  exports["default"] = {
    _calledLogPv: !1,
    init: function() {},
    remoteLog: function() {},
    _logPv: function() {},
    report: function() {},
    pageMonitor: function(obj) {},
    available: function(options) {}
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {} : function(obj) {},
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil);
  exports["default"] = {
    initFromStartParams: function(tracert, _ref) {},
    expoMerge: function(tracert, _ref2) {},
    checkSubPage: function(tracert) {},
    formatRemoteParams: function(tracert) {}
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }

  function _toConsumableArray(arr) {}

  function _toArray(arr) {}

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj
    } : function(obj) {},
    _extends = Object.assign || function(target) {},
    _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
      }
      return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
      }
    }(),
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    deprecated = function(text) {},
    doc = document,
    Core = function() {
      function Core() {
        var opt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        _classCallCheck(this, Core);
        var props = {
          autoLogPv: !0,
          eventType: "click",
          autoExpo: !1,
          bizType: "H5behavior",
          state: "",
          name: "",
          logLevel: "2",
          mdata: {},
          seedIdPrefix: "",
          seedIdSuffix: "",
          spmAPos: "",
          spmBPos: "",
          bizScenario: _tracertUtil2["default"].getValue("bizScenario") || "",
          paramPrefix: "",
          debug: !1,
          server: "",
          lastClkSpm: "",
          url: location.href.split(/\?|#|;jsessionid=/)[0],
          referSPM: "",
          srcSpm: "",
          sessionIdKey: "tracert-session-key",
          seedIdCfg: {
            pageSeedId: "H5_MTRACKER_AP_PAGE",
            clkSeedId: "H5_MTRACKER_AP_CLK",
            calcSeedId: "H5_MTRACKER_AP_CALC",
            expoSeedId: "H5_MTRACKER_AP_EXPO",
            syslogSeedId: "H5_MTRACKER_AP_SYSLOG"
          },
          _plugins: [],
          platformType: "",
          ready: !1,
          apiCashList: [],
          timeMap: {},
          expoOnce: !1,
          _wap_intervalEx: 400,
          _wap_interval: 300,
          _wap_mgObjIndex: 0,
          _wap_exObjIndex: 0,
          _wap_mgTdObjIndex: 0,
          _expoMergeItvObj: 0,
          hasExpoMerge: !1,
          fmtedExObjArr: [],
          fmtedExObj: {},
          fmtedExOptions: {},
          cacheExObjArr: [],
          cacheMrExObjArr: [],
          expotTimeout: 300,
          expoObj: {},
          expoType: function(callback) {},
          expoSection: [-.3, .3],
          _beforeEvObj: {
            logPv: [],
            click: [],
            expo: [],
            set: [],
            send: []
          },
          _afterEvObj: {
            start: [],
            logPv: [],
            click: [],
            expo: []
          },
          _pluginLoadCnt: 0,
          sysInfo: {}
        };
        _tracertUtil2["default"].objectAssign(props, opt), _tracertUtil2["default"].objectAssign(this, props);
        var loadList = window.TracertCmdCache;
        if (loadList && loadList.length)
          for (var i = 0; i < loadList.length; i++) {
            var _slice$call = [].slice.call(loadList[i]),
              _slice$call2 = _toArray(_slice$call),
              fn = _slice$call2[0],
              args = _slice$call2.slice(1);
            this.call.apply(this, [fn].concat(_toConsumableArray(args)))
          }
        this._start()
      }
      return _createClass(Core, [{
        key: "before",
        value: function(fnName, fn) {
          var beforEventObj = this._beforeEvObj;
          if (!beforEventObj[fnName]) throw new Error("\u76ee\u6807\u65b9\u6cd5\u4e0d\u652f\u6301\u8be5\u4e8b\u4ef6");
          if ("function" != typeof fn) throw new Error("\u76d1\u542c\u5668\u4e0d\u662f\u51fd\u6570");
          beforEventObj[fnName].push(fn)
        }
      }, {
        key: "_runBeforeFns",
        value: function(fn, args) {
          var beforEventObj = this._beforeEvObj[fn] || [];
          if (!beforEventObj || !beforEventObj.length) return !0;
          for (var i = 0; i < beforEventObj.length; i++) {
            var res = beforEventObj[i].call(this, args);
            if (res === !1) return console && console.debug && console.debug("Tracert before fns: " + fn + " stop propagation"), !1
          }
          return !0
        }
      }, {
        key: "after",
        value: function(fnName, fn) {}
      }, {
        key: "_runAfterFns",
        value: function(fn, args) {
          var afterEventObj = this._afterEvObj[fn] || [];
          if (afterEventObj && afterEventObj.length)
            for (var i = 0; i < afterEventObj.length; i++) afterEventObj[i].call(this, args)
        }
      }, {
        key: "init",
        value: function() {}
      }, {
        key: "load",
        value: function(callback) {
          _tracertUtil2["default"].load(callback)
        }
      }, {
        key: "onReady",
        value: function(callback) {}
      }, {
        key: "_start",
        value: function() {
          var _this = this,
            callback = function() {
              _this.load(function() {
                if (!_this.ready) {
                  var metaInfo = _tracertUtil2["default"].getMetaSpm();
                  metaInfo.spmAPos = _this.spmAPos || metaInfo.spmAPos, _this.spmBPos || (metaInfo.spmBPos = _tracertUtil2["default"].getSpmBPos()), _this.set(metaInfo), _this.ready = !0;
                  for (var i = 0; i < _this.apiCashList.length; i++) {
                    var args = _this.apiCashList[i];
                    _this.call.apply(_this, args)
                  }
                  _this._runAfterFns("start"), _this.apiCashList = []
                }
              })
            };
          this.pluginReady && this.started ? callback() : (document.addEventListener("TracertPluginReady", function() {
            _this.started && callback()
          }), document.addEventListener("TracertStart", function() {
            _this.pluginReady && callback()
          }))
        }
      }, {
        key: "start",
        value: function() {}
      }, {
        key: "run",
        value: function() {
          var opt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.set(_extends({}, opt, {
            started: !0
          }));
          var event = document.createEvent("HTMLEvents");
          event.initEvent("TracertStart", !0, !0), document.dispatchEvent(event), this.autoLogPv && this.call("logPv")
        }
      }, {
        key: "loadPlugins",
        value: function(ps) {
          if (ps && ps.length) {
            this._plugins = ps;
            for (var i = 0; i < ps.length; i++) {
              var plugin = ps[i];
              this.loadPlugin(plugin)
            }
          }
        }
      }, {
        key: "loadPlugin",
        value: function(p) {
          var _this2 = this;
          if (p && (window["tracert" + p] && "function" == typeof window["tracert" + p] || "function" == typeof p)) {
            var fn = "function" == typeof p ? p : window["tracert" + p];
            fn(this, function() {
              if (_this2._pluginLoadCnt++, _this2._pluginLoadCnt === _this2._plugins.length) {
                _this2.set({
                  pluginReady: !0
                });
                var event = document.createEvent("HTMLEvents");
                event.initEvent("TracertPluginReady", !0, !0), document.dispatchEvent(event)
              }
            })
          }
        }
      }, {
        key: "call",
        value: function() {
          var args = [].slice.call(arguments),
            result = void 0;
          if (!args[0] || "run" !== args[0] && "start" !== args[0] || this.set({
              started: !0
            }), this.ready) {
            if (!this[args[0]] || "function" != typeof this[args[0]]) return console.warn("\u672a\u627e\u5230\u65b9\u6cd5\uff1a" + args[0]), null;
            var options = args.slice(1);
            options = this.optionsHandle(options), result = this[args[0]].apply(this, options)
          } else this.apiCashList.push(args);
          return result
        }
      }, {
        key: "optionsHandle",
        value: function(options) {
          return options && options.length ? (options.forEach(function(op) {
            var opz = op;
            opz && (opz.spmid && (opz.spmId = opz.spmid), opz.seedid && (opz.seedId = opz.seedid), opz.ucid && (opz.ucId = opz.ucid))
          }), options) : options
        }
      }, {
        key: "get",
        value: function(key) {}
      }, {
        key: "set",
        value: function() {
          var opt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            options = opt;
          this._runBeforeFns("set", options), options.eventName && _tracertUtil2["default"].objectAssign(options, {
            eventType: options.eventName
          }), "object" === _typeof(options.mdata) && (options.mdata = _extends({}, this.mdata, options.mdata)), _tracertUtil2["default"].objectAssign(this, options)
        }
      }, {
        key: "getSysInfo",
        value: function(key) {}
      }, {
        key: "setSysInfo",
        value: function() {}
      }, {
        key: "config",
        value: function() {}
      }, {
        key: "remoteLog",
        value: function() {}
      }, {
        key: "logPv",
        value: function() {
          var obj = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            res = this._runBeforeFns("logPv", obj);
          res && (this._logPv(obj), this._runAfterFns("logPv", obj))
        }
      }, {
        key: "_logPv",
        value: function() {}
      }, {
        key: "report",
        value: function() {}
      }, {
        key: "pageState",
        value: function() {}
      }, {
        key: "pageName",
        value: function() {}
      }, {
        key: "setPageState",
        value: function() {}
      }, {
        key: "time",
        value: function() {}
      }, {
        key: "timeEnd",
        value: function() {}
      }, {
        key: "_goRemotelog",
        value: function() {}
      }, {
        key: "info",
        value: function() {}
      }, {
        key: "error",
        value: function() {}
      }, {
        key: "click",
        value: function() {}
      }, {
        key: "expo",
        value: function() {}
      }, {
        key: "calc",
        value: function() {}
      }]), Core
    }();
  exports["default"] = Core, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {},
    _context = __webpack_require__(14),
    _context2 = _interopRequireDefault(_context),
    autoClick = function(Tracert, cb) {
      return Tracert.set(_extends({}, _context2["default"])), Tracert.spmClickEvent(), Tracert.before("set", function(opt) {
        var options = opt;
        options.eventType = options.eventType || options.eventName;
        var originEvent = !!options.eventType && Tracert.eventType;
        Tracert.spmClickEvent(originEvent, options.eventType)
      }), cb(), Tracert
    };
  window.tracertAutoClick = autoClick, exports["default"] = autoClick, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }

  function spmEventHandler(e) {}
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {} : function(obj) {},
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    spmAbTest = "data-aspm-ab",
    spmEntityid = "data-aspm-entityid";
  exports["default"] = {
    spmClickEvent: function(originEventType, targetEventType) {
      originEventType && _tracertUtil2["default"].removeEvent(originEventType, window.document, spmEventHandler), _tracertUtil2["default"].addEvent(targetEventType || this.eventType, window.document, spmEventHandler)
    },
    getClickSpm: function(el) {}
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {},
    _context = __webpack_require__(16),
    _context2 = _interopRequireDefault(_context),
    autoExpo = function(tracert, cb) {
      var Tracert = tracert;
      return Tracert.set(_extends({}, _context2["default"])), Tracert.before("set", function(options) {
        options.autoExpo && Tracert.call("startAutoExpo")
      }), cb(), Tracert
    };
  window.tracertAutoExpo = autoExpo, exports["default"] = autoExpo, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {} : function(obj) {},
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    _y = __webpack_require__(8),
    _y2 = _interopRequireDefault(_y),
    _x = __webpack_require__(7),
    _x2 = _interopRequireDefault(_x);
  exports["default"] = {
    _getYStatus: function(el) {},
    _getXStatus: function(el) {},
    _doExpo: function(expoVal, dom, expoEl) {},
    expoCheck: function() {},
    startAutoExpo: function() {},
    getExpoSpmCPos: function(el) {},
    getExpoSpmDPos: function(el) {}
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {} : function(obj) {},
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    whitelistRegex = new RegExp("^http(s)?://.*[.](taobao|alitrip|alipay|1688|antfortune|taopiaopiao|koubei|ssdata|tmall|alipayobjects|alipay|taobao|alipayobjects|tmall|taopiaopiao|antfortune|1688|alicdn|amap|cainiao|xiami|alibaba|aliyun|alitrip|koubei|weibo|etao|laiwang|taobaocdn|fliggy|yunos|alimama|taohua|antsdaq|juhuasuan|alipay-inc|ssdata|cainiao-inc|xiami|tmall|alibaba|zhimaxy|taobao|alipay|mybank|weibo|etao|taobao|tbcdn|alipay|tmall|fliggy|alitrip|zmxy|sweetmartmarketing|bangdao-tech|alipay-eco|e-mallchina|in66|taeapp|miyapay|10010|10661911|ubike|itoyo|ele|campusnews|qufenqi|aliapp|chidaoni)[.](com|net|hk|me)$", "g"),
    origin = window.location.origin,
    init = function(tracert) {},
    dtmonitor = function(tracert, callback) {};
  window.tracertDtmonitor = dtmonitor, exports["default"] = dtmonitor, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }

  function _classCallCheck(instance, Constructor) {}

  function emptyCb() {}

  function _AlipayJSBridgeReady(callback) {}
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
      }
      return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
      }
    }(),
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    FullLinkParamsLogger = function() {
      function FullLinkParamsLogger(tracert) {}
      return _createClass(FullLinkParamsLogger, [{
        key: "start",
        value: function() {}
      }, {
        key: "getChinfoChain",
        value: function(cb) {}
      }, {
        key: "_setPageInfo",
        value: function() {}
      }, {
        key: "_setChinfo",
        value: function() {}
      }]), FullLinkParamsLogger
    }(),
    fulllinkParams = function(tracert, callback) {};
  exports["default"] = fulllinkParams, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {},
    _context = __webpack_require__(20),
    _context2 = _interopRequireDefault(_context),
    sem = function(Tracert, cb) {};
  window.sem = sem, exports["default"] = sem, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }

  function semEventHandler(e) {}
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {} : function(obj) {},
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    _helper = __webpack_require__(21),
    _helper2 = _interopRequireDefault(_helper);
  exports["default"] = {
    lastClkSem: "",
    semClickEvent: function(originEventType, targetEventType) {},
    setLastClkSem: function(options) {},
    sem: function(options) {}
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    semKey = "data-asem",
    semParamsKey = "data-asem-params";
  exports["default"] = {
    getSemDom: function(el) {},
    getSemId: function(el) {},
    getSemParams: function(el) {},
    getClickSem: function(el) {},
    formatRemoteParams: function(tracert) {}
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _jsCookie = __webpack_require__(28),
    _jsCookie2 = _interopRequireDefault(_jsCookie);
  exports["default"] = {
    get: function(key) {},
    set: function(key, value) {},
    remove: function(key, opt) {}
  }, module.exports = exports["default"]
}, function(module, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {} : function(obj) {},
    spmDataKey = "data-aspm",
    spmDPosMarkAttr = "data-aspm-click",
    spmDPosTagPattern = /^a|area$/i;
  exports["default"] = {
    nodeListToArray: function(nodes) {
      var arr = void 0,
        length = void 0;
      try {
        return arr = [].slice.call(nodes)
      } catch (err) {
        arr = [], length = nodes.length;
        for (var i = 0; i < length; i++) arr.push(nodes[i]);
        return arr
      }
    },
    getAttr: function(element, attrName) {
      return element && element.getAttribute ? element.getAttribute(attrName) || "" : ""
    },
    isDom: function(dom) {},
    isViewDom: function(dom) {},
    getMetaSpm: function(metas) {
      for (var metaList = this.nodeListToArray(metas || document.getElementsByTagName("meta")), len = metaList.length, metaItem = void 0, name = void 0, content = void 0, bizType = void 0, spmAPos = void 0, i = 0; i < len; i++) {
        switch (metaItem = metaList[i], name = this.getAttr(metaItem, "name"), content = this.getAttr(metaItem, "content"), name) {
          case spmDataKey:
            spmAPos = content;
            break;
          case "data-bizType":
            bizType = content
        }
        if (spmAPos && bizType) break
      }
      var ret = {};
      return spmAPos && (ret.spmAPos = spmAPos), bizType && (ret.bizType = bizType), ret
    },
    getSpmBPos: function() {
      var spmBPos = this.getAttr(document.body, spmDataKey);
      return spmBPos
    },
    getSpmCPos: function(el) {},
    getDPosDom: function(el) {},
    getSpmDPos: function(el) {},
    getDomParam: function(dom) {},
    getMetaPageName: function() {}
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {} : function(obj) {},
    _index = __webpack_require__(2),
    _format = __webpack_require__(5);
  exports["default"] = {
    addMexOption: function(_mexObj, _options) {},
    addToExObj: function(_exObj, _options) {},
    formatExObj: function(exObj, mexObj) {}
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }

  function _defineProperty(obj, key, value) {}

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
      }
      return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
      }
    }(),
    _cookies = __webpack_require__(22),
    _cookies2 = _interopRequireDefault(_cookies),
    _index = __webpack_require__(2),
    TemporaryStorage = function() {
      function TemporaryStorage() {
        _classCallCheck(this, TemporaryStorage)
      }
      return _createClass(TemporaryStorage, [{
        key: "set",
        value: function() {}
      }, {
        key: "get",
        value: function(key) {}
      }, {
        key: "_set",
        value: function(obj) {}
      }]), TemporaryStorage
    }();
  exports["default"] = new TemporaryStorage, module.exports = exports["default"]
}, function(module, exports) {
  "use strict";

  function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = 16 * Math.random() | 0,
        v = "x" === c ? r : 3 & r | 8;
      return v.toString(16)
    })
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), exports["default"] = uuid, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    _checkApp2 = __webpack_require__(6),
    _checkApp3 = _interopRequireDefault(_checkApp2),
    win = window;
  exports["default"] = {
    checkApp: function(ua) {
      return (0, _checkApp3["default"])(ua)
    },
    disableBizLog: function() {
      win.BizLog && "function" == typeof win.BizLog.call && (win.BizLog.call("config", {
        disabled: !0
      }), "function" == typeof document.addEventListener && document.addEventListener("AlipayJSBridgeReady", function() {}, !1))
    },
    runBizlogLoader: function(Tracert) {
      if (win.BizLog) {
        var _readyToRun = win.BizLog._readyToRun,
          BizLog = win.BizLog || {};
        if (BizLog.call = function() {}, _readyToRun && _readyToRun.length)
          for (var i = 0; i < _readyToRun.length; i++) {
            var fn = _readyToRun[i];
            try {
              fn()
            } catch (e) {
              console.warn(e)
            }
          }
        win.BizLog = BizLog
      }
    },
    initTracert: function(tracert) {
      if (win.Tracert && win.Tracert._isInit) {
        var _readyToRun = win.Tracert._readyToRun;
        if (win.Tracert.call = function() {}, _readyToRun && _readyToRun.length)
          for (var i = 0; i < _readyToRun.length; i++) {
            var fn = _readyToRun[i];
            try {
              fn()
            } catch (e) {
              console.warn(e)
            }
          }
      }
      var lanInfo = _tracertUtil2["default"].getValue("lanInfo") || _tracertUtil2["default"].getValue("laninfo");
      lanInfo && tracert.set({
        mdata: {
          lanInfo: lanInfo
        }
      }), tracert.set(window._to || {}), tracert.set(window._tracert_loader_cfg || {}), tracert.set({
        parse: _tracertUtil2["default"].strToObj,
        stringify: _tracertUtil2["default"].objToStr
      }), tracert.run(), win.Tracert = tracert
    }
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
  ! function(factory) {
    var registeredInModuleLoader = !1;
    if (__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), registeredInModuleLoader = !0, module.exports = factory(), registeredInModuleLoader = !0, !registeredInModuleLoader) {
      var OldCookies = window.Cookies,
        api = window.Cookies = factory();
      api.noConflict = function() {}
    }
  }(function() {
    function extend() {}

    function init(converter) {
      function api(key, value, attributes) {}
      return api.set = api, api.get = function(key) {}, api.getJSON = function() {}, api.defaults = {}, api.remove = function(key, attributes) {}, api.withConverter = init, api
    }
    return init(function() {})
  })
}, function(module, exports, __webpack_require__) {
  var animaDetect = __webpack_require__(30);
  module.exports = animaDetect
}, function(module, exports, __webpack_require__) {
  function toString(object) {
    return Object.prototype.toString.call(object)
  }

  function isObject(object) {
    return "[object Object]" === toString(object)
  }

  function isFunction(object) {
    return "[object Function]" === toString(object)
  }

  function each(object, factory, argument) {
    for (var i = 0, l = object.length; i < l && factory.call(object, object[i], i) !== !1; i++);
  }

  function detector(name, expression, ua) {
    var expr = isFunction(expression) ? expression.call(null, ua) : expression;
    if (!expr) return null;
    var info = {
      name: name,
      version: NA_VERSION,
      codename: ""
    };
    "android" === name && (info.type = ua.indexOf("Mobi") > -1 ? "phone" : "pad"), "ios" === name && (info.type = ua.indexOf("iPhone") > -1 ? "phone" : "pad");
    var t = toString(expr);
    if (expr === !0) return info;
    if ("[object String]" === t) {
      if (ua.indexOf(expr) !== -1) return info
    } else {
      if (isObject(expr)) return expr.hasOwnProperty("version") && (info.version = expr.version), info;
      if (expr.exec) {
        var m = expr.exec(ua);
        if (m) return m.length >= 2 && m[1] ? info.version = m[1].replace(/_/g, ".") : info.version = NA_VERSION, info
      }
    }
  }

  function init(ua, patterns, factory, detect) {
    var detected = na;
    each(patterns, function(pattern) {
      var d = detector(pattern[0], pattern[1], ua);
      if (d) return detected = d, !1
    }), factory.call(detect, detected.name, detected.version)
  }
  var detect = {},
    NA_VERSION = "-1",
    userAgent = navigator.userAgent || "",
    appVersion = navigator.appVersion || "",
    vendor = navigator.vendor || "",
    re_msie = (window.external, /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/),
    CheckApp = __webpack_require__(6),
    OS = [
      ["wp", function(ua) {
        return ua.indexOf("windows phone ") !== -1 ? /\bwindows phone (?:os )?([0-9.]+)/ : ua.indexOf("xblwp") !== -1 ? /\bxblwp([0-9.]+)/ : ua.indexOf("zunewp") !== -1 ? /\bzunewp([0-9.]+)/ : "windows phone"
      }],
      ["ios", function(ua) {
        return /\bcpu(?: iphone)? os /.test(ua) ? /\bcpu(?: iphone)? os ([0-9._]+)/ : ua.indexOf("iph os ") !== -1 ? /\biph os ([0-9_]+)/ : /\bios\b/
      }],
      ["yunos", /\baliyunos ([0-9.]+)/],
      ["android", /\bandroid[\/\- ]?([0-9.x]+)?/],
      ["linux", "linux"]
    ],
    BROWSER = [
      ["qq", /\bm?qqbrowser\/([0-9.]+)/],
      ["ie", re_msie],
      ["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/],
      ["uc", function(ua) {}],
      ["android", function(ua) {}],
      ["safari", /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//],
      ["webview", /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/]
    ],
    na = {
      name: "na",
      version: NA_VERSION
    },
    parse = function(ua) {
      ua = (ua || "").toLowerCase();
      var d = {};
      return init(ua, OS, function(name, version) {
        var v = parseFloat(version);
        d.os = {
          name: name,
          version: v,
          fullVersion: version
        }, d.os[name] = v
      }, d), init(ua, BROWSER, function(name, version) {
        var v = parseFloat(version);
        d.browser = {
          name: name,
          version: v,
          fullVersion: version
        }, d.browser[name] = v
      }, d), d
    };
  detect = parse(userAgent + " " + appVersion + " " + vendor), detect.parse = parse, detect._checkApp = CheckApp, detect.app = detect._checkApp(userAgent), module.exports = detect
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    lx = function(tracert, callback) {};
  window.tracertLx = lx, exports["default"] = lx, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    qn = function(tracert, callback) {};
  window.tracertQn = qn, exports["default"] = qn, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    tb = function(tracert, callback) {};
  window.tracertTb = tb, exports["default"] = tb, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {},
    _context = __webpack_require__(35),
    _context2 = _interopRequireDefault(_context),
    wap = function(tracert, cb) {
      var Tracert = tracert;
      return Tracert.set(_extends({}, _context2["default"])), Tracert.call("init"), cb(), Tracert
    };
  window.tracertWap = wap, exports["default"] = wap, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj
    } : function(obj) {},
    _extends = Object.assign || function(target) {},
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    _helper = __webpack_require__(36),
    _helper2 = _interopRequireDefault(_helper),
    _animaDetect = __webpack_require__(29),
    _animaDetect2 = _interopRequireDefault(_animaDetect);
  exports["default"] = {
    server: "https://mdap.alipay.com/loggw/dwcookieLogGet.do",
    seedIdCfg: {
      pageSeedId: "pageMonitor",
      clkSeedId: "clicked",
      calcSeedId: "calc",
      expoSeedId: "exposure",
      syslogSeedId: "syslog"
    },
    refUrl: document.referrer || "-",
    clientIdKey: "tracert-client-key",
    init: function() {
      _helper2["default"]._initSessionId(this), _helper2["default"]._initClientId(this), _helper2["default"]._initPageId(this), _helper2["default"]._initChInfo(this), _helper2["default"]._initRefs(this)
    },
    get: function(key) {
      if ("pageId" === key && !this[key]) {
        if (window._tracert_loader_cfg = window._tracert_loader_cfg || {}, window._tracert_loader_cfg.pageId) return this.set({
          pageId: window._tracert_loader_cfg.pageId
        }), window._tracert_loader_cfg.pageId;
        var metaInfo = _tracertUtil2["default"].getMetaSpm();
        metaInfo.spmBPos = _tracertUtil2["default"].getSpmBPos();
        var spma = metaInfo.spmAPos,
          spmb = metaInfo.spmBPos,
          pageId = spma && spmb ? spma + "." + spmb + "_" + _helper2["default"]._guid() + "_" + Date.now() : "-_" + _helper2["default"]._guid() + "_" + Date.now();
        return window._tracert_loader_cfg.pageId = pageId, this.set({
          pageId: pageId
        }), pageId
      }
      return this[key]
    },
    _logPv: function() {
      var opt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        cityid = _tracertUtil2["default"].getValue("cityId"),
        pageSpm = this.spmAPos && this.spmBPos ? [this.spmAPos, this.spmBPos].join(".") : "",
        params = {
          seedId: this.seedIdCfg.pageSeedId,
          actionId: this.seedIdCfg.pageSeedId,
          spmId: pageSpm,
          param1: this.url,
          param2: "",
          param3: "",
          param4: _extends({
            cityid: cityid
          }, opt)
        };
      this.call("remoteLog", params)
    },
    sendExpose: function() {},
    sendMergeExpose: function() {},
    remoteLog: function(options) {
      var self = this,
        params = _helper2["default"]._formatParam(this, options);
      if ("mergeExpose" === params.actionId && params.spmId && 3 === params.spmId.split(".").length && params.param4) return this._wap_timer && clearTimeout(this._wap_timer), this.fmtedExOptions = _tracertUtil2["default"].addMexOption(this.fmtedExOptions, _tracertUtil2["default"].objectAssign({}, params)), this.fmtedExObj = _tracertUtil2["default"].addToExObj(this.fmtedExObj, _tracertUtil2["default"].objectAssign({}, params)), this.fmtedExObjArr = _tracertUtil2["default"].formatExObj(this.fmtedExObj, this.fmtedExOptions), void(this._wap_timer = setTimeout(function() {}, this._wap_interval));
      if ("exposure" === params.actionId && params.spmId && 3 === params.spmId.split(".").length) return this._wap_timerEx && clearTimeout(this._wap_timerEx), this.cacheExObjArr.push(params), void(this._wap_timerEx = setTimeout(function() {}, this._wap_intervalEx));
      var data = this._packFinalData(params);
      this._send(data)
    },
    _packFinalData: function(obj) {
      if ("function" == typeof this._beforePackFinalData && this._beforePackFinalData(obj), "object" === _typeof(obj.param4)) {
        var p = obj.param4;
        for (var k in p)
          if (p.hasOwnProperty(k) && "string" == typeof p[k]) {
            var item = p[k].replace(/,/g, "%2C");
            p[k] = "fullURL" === k && item.length > 300 ? item.slice(0, 300) : item
          }
      }
      "clicked" === obj.actionId && this.set({
        lastClkSpm: obj.spmId
      });
      for (var refspm = this.refSpm || this.referSPM || "", data = ["DW-COOKIE", this.sessionId || "", this.role_id || this.roleId || "", obj.actionId || "", obj.spmId || obj.seedId || "", refspm || "", this.url && this.url.length > 300 ? this.url.slice(0, 300) : this.url || "", this.ref || "" + refspm, "object" === _typeof(obj.param4) ? _tracertUtil2["default"].objToStr(obj.param4) : obj.param4, this.chInfo || "", this.platformType || "", this.pageId || "", navigator.userAgent ? navigator.userAgent.replace(/,/g, "%2C") : "", "na" === _animaDetect2["default"].os.name ? "PC" : "H5", _animaDetect2["default"].app.name + "/" + _animaDetect2["default"].app.version + "|" + _animaDetect2["default"].browser.name + "/" + _animaDetect2["default"].browser.fullVersion + "|" + _animaDetect2["default"].os.name + "/" + _animaDetect2["default"].os.fullVersion, this.srcSpm || "", this.referPageId || "", this.bizType || "", "", window.innerWidth || "", window.innerHeight || "", window.devicePixelRatio || "", "object" === _typeof(this.sysInfo) ? _tracertUtil2["default"].objToStr(this.sysInfo) : "", this.darwinExpId || ""], i = 0; i < data.length; i++) "string" == typeof data[i] && (data[i] = data[i].replace(/,/g, "%2C"));
      return data
    },
    _send: function(data) {
      var _encode = window.encodeURIComponent;
      if (this.debug && console.log(data), !this.server) return void console.warn("\u8bf7\u914d\u7f6eTracert\u670d\u52a1\u63a5\u6536\u5730\u5740");
      var image = new Image;
      image.src = this.server + "?data=" + _encode(data.join()) + "&time=" + (new Date).getTime()
    },
    send: function() {}
  }, module.exports = exports["default"]
}, function(module, exports, __webpack_require__) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var _extends = Object.assign || function(target) {},
    _tracertUtil = __webpack_require__(1),
    _tracertUtil2 = _interopRequireDefault(_tracertUtil),
    _nameStorage = __webpack_require__(37),
    _nameStorage2 = _interopRequireDefault(_nameStorage),
    REF_PREFIX = "TRACERT_REF_";
  exports["default"] = {
    _guid: function() {
      return _tracertUtil2["default"].uuid()
    },
    _initSessionId: function(tracert) {
      var sessionStorage = window.sessionStorage,
        key = tracert.sessionIdKey;
      sessionStorage && (sessionStorage[key] || (sessionStorage[key] = this._guid() + "_" + Date.now()), tracert.set({
        sessionId: sessionStorage[key]
      }))
    },
    _initClientId: function(tracert) {
      var localStorage = window.localStorage,
        key = tracert.sessionIdKey;
      localStorage && (localStorage[key] || (localStorage[key] = this._guid() + "_" + Date.now()), tracert.set({
        clientId: localStorage[key]
      }))
    },
    _initPageId: function(tracert) {
      if (!tracert.get("pageId")) {
        var pageId = tracert.spmAPos + "." + tracert.spmBPos + "_" + this._guid() + "_" + Date.now();
        tracert.set({
          pageId: pageId
        })
      }
    },
    _initChInfo: function(tracert) {
      if (!tracert.chInfo) {
        var chInfo = _tracertUtil2["default"].getValue("chInfo") || _tracertUtil2["default"].getValue("chinfo");
        chInfo && tracert.set({
          chInfo: chInfo
        })
      }
    },
    _initFromUrlOrStorage: function(tracert, keys) {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i],
          value = _tracertUtil2["default"].getValue(key) || _nameStorage2["default"].getItem("" + REF_PREFIX + key);
        if (value) {
          var obj = {};
          obj[key] = value, tracert.set(obj)
        }
      }
    },
    _initRefs: function(tracert) {
      var keys = ["srcSpm", "referPageId", "dtLogMonitor", "referSPM"];
      this._initFromUrlOrStorage(tracert, keys);
      var srcSpm = tracert.get("srcSpm"),
        referPageId = tracert.get("referPageId");
      srcSpm && referPageId && tracert.set({
        ref: srcSpm + "|" + referPageId
      }), tracert.ignoreNameStorage || (_nameStorage2["default"].setItem(REF_PREFIX + "referPageId", tracert.get("pageId")), _nameStorage2["default"].setItem(REF_PREFIX + "dtLogMonitor", tracert.get("dtLogMonitor")), window.onunload = function() {
        var pageSpm = tracert.spmAPos && tracert.spmBPos ? [tracert.spmAPos, tracert.spmBPos].join(".") : "";
        pageSpm && _nameStorage2["default"].setItem(REF_PREFIX + "referSPM", pageSpm), srcSpm = tracert.get("lastClkSpm"), srcSpm && _nameStorage2["default"].setItem(REF_PREFIX + "srcSpm", srcSpm)
      })
    },
    _formatParam: function(tracert, _param) {
      var param = _param || {},
        spmAPos = tracert.spmAPos,
        spmBPos = tracert.spmBPos,
        spmId = param.spmId || "",
        spmAPosrr = spmId.split("."),
        arrLen = spmAPosrr.length,
        extraParam = {
          version: tracert.version,
          mBizScenario: tracert.bizScenario,
          mPageState: tracert.state,
          role_id: tracert.roleId || tracert.role_id,
          fullURL: tracert.fullURL || location.href,
          ref: tracert.refUrl,
          clientID: tracert.clientId
        };
      if (tracert.chInfo && (extraParam.chInfo = tracert.chInfo), tracert.dtLogMonitor && (extraParam.dtLogMonitor = tracert.dtLogMonitor), spmAPos && spmBPos) {
        if (_param.seedId !== tracert.seedIdCfg.pageSeedId) switch (arrLen) {
          case 1:
            if ("" === spmId) {
              delete param.spmId;
              break
            }
            param.spmId = [spmAPos, spmBPos, spmId].join(".");
            break;
          case 2:
            param.spmId = [spmAPos, spmBPos, spmId].join(".");
            break;
          case 3:
            break;
          case 4:
            break;
          default:
            param.param2 = spmId, delete param.spmId
        }
      } else delete param.spmId;
      return !param.param2 && param.spmId && (param.param2 = param.spmId), param.param4 ? _tracertUtil2["default"].objectAssign(param.param4, extraParam) : param.param4 = extraParam, param.param4 = _extends({}, tracert.mdata, param.param4), param
    }
  }, module.exports = exports["default"]
}, function(module, exports) {
  function save() {
    var value, pairs = [],
      empty = !0;
    for (var key in STORAGE) STORAGE.hasOwnProperty(key) && (empty = !1, value = STORAGE[key] || "", pairs.push(encode(key) + EQ + encode(value)));
    win.name = empty ? ORIGIN_NAME : SCHEME + encode(ORIGIN_NAME) + Q + pairs.join(AND)
  }

  function addEventListener(element, eventName, handler) {
    element && (element.addEventListener ? element.addEventListener(eventName, handler, !1) : element.attachEvent && element.attachEvent("on" + eventName, function(evt) {}))
  }
  var ORIGIN_NAME, win = window,
    SCHEME = "nameStorage:",
    RE_PAIR = /^([^=]+)(?:=(.*))?$/,
    Q = "?",
    EQ = "=",
    AND = "&",
    encode = encodeURIComponent,
    decode = decodeURIComponent,
    STORAGE = {},
    nameStorage = {};
  ! function(name) {
    if (name && 0 === name.indexOf(SCHEME)) {
      var match = name.split(/[:?]/);
      match.shift(), ORIGIN_NAME = decode(match.shift()) || "";
      for (var pair, key, value, params = match.join(""), pairs = params.split(AND), i = 0, l = pairs.length; i < l; i++) pair = pairs[i].match(RE_PAIR), pair && pair[1] && (key = decode(pair[1]), value = decode(pair[2]) || "", STORAGE[key] = value)
    } else ORIGIN_NAME = name || ""
  }(win.name), nameStorage.setItem = function(key, value) {
    key && "undefined" != typeof value && (STORAGE[key] = String(value), save())
  }, nameStorage.getItem = function(key) {
    return STORAGE.hasOwnProperty(key) ? STORAGE[key] : null
  }, nameStorage.removeItem = function(key) {}, nameStorage.clear = function() {}, nameStorage.valueOf = function() {}, nameStorage.toString = function() {}, addEventListener(win, "beforeunload", function() {
    save()
  }), win.nameStorage = nameStorage, module.exports = nameStorage
}]);