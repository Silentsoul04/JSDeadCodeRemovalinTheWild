/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		16: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return serverData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adBlockClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return adId; });
/* unused harmony export adZone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return advoiceBrand; });
/* unused harmony export authorSlug */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return barChartYears; });
/* unused harmony export blogSlug */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return bucket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return categoryCookieName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return channelColor; });
/* unused harmony export channelId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return channelName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return cookieName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return currentTabName; });
/* unused harmony export division */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return hasWriters; });
/* unused harmony export is404 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isE2E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isPreview; });
/* unused harmony export lazyLoadData */
/* unused harmony export name */
/* unused harmony export naturalId */
/* unused harmony export pageLocation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return premiumProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return playerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return premiumPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return region; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return relativeVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return retracted; });
/* unused harmony export sectionId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return specialSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return streamSourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return streamSourceValue; });
/* unused harmony export subBlog */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return swimLane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isEurope; });
/* harmony export (immutable) */ __webpack_exports__["l"] = getTracking;
/* unused harmony export adAccount */
/* unused harmony export adSite */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return fullAdZone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_mobile__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__is_mobile__);


// TODO Remake for arbitrary data
var serverData = (window.forbes || {})['simple-site'] || {};

var adBlockClasses = serverData.adBlockClasses,
    adId = serverData.adId,
    adZone = serverData.adZone,
    advoiceBrand = serverData.advoiceBrand,
    authorSlug = serverData.authorSlug,
    barChartYears = serverData.barChartYears,
    blogSlug = serverData.blogSlug,
    bucket = serverData.bucket,
    categoryCookieName = serverData.categoryCookieName,
    channelColor = serverData.channelColor,
    channelId = serverData.channelId,
    channelName = serverData.channelName,
    cookieName = serverData.cookieName,
    currentTabName = serverData.currentTabName,
    division = serverData.division,
    hasWriters = serverData.hasWriters,
    is404 = serverData.is404,
    isBlog = serverData.isBlog,
    isE2E = serverData.isE2E,
    isLocal = serverData.isLocal,
    isPreview = serverData.isPreview,
    lazyLoadData = serverData.lazyLoadData,
    name = serverData.name,
    naturalId = serverData.naturalId,
    pageLocation = serverData.pageLocation,
    premiumProfile = serverData.premiumProfile,
    playerId = serverData.playerId,
    premiumPage = serverData.premiumPage,
    region = serverData.region,
    relativeVideo = serverData.relativeVideo,
    retracted = serverData.retracted,
    sectionId = serverData.sectionId,
    specialSlot = serverData.specialSlot,
    streamSourceType = serverData.streamSourceType,
    streamSourceValue = serverData.streamSourceValue,
    subBlog = serverData.subBlog,
    swimLane = serverData.swimLane;

// isEurope is needed early in the page for GDPR



var _ref = window.forbes || {};

var isEurope = _ref.isEurope;



function getTracking() {
	var trackingData = ((window.forbes || {})['simple-site'] || {}).tracking;
	if ((trackingData || {}).pageType === '404') {
		trackingData.fastSu = 'https://www.forbes.com' + window.location.pathname;
	}

	return trackingData;
}

var adAccount = '7175';
var adSite = __WEBPACK_IMPORTED_MODULE_0__is_mobile__["isMobile"] ? 'fdcmobile' : 'fdc.forbes';
var fullAdZone = '/' + adAccount + '/' + adSite + '/' + adZone;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var checkIsMobile = function checkIsMobile() {
	var _navigator = navigator,
	    userAgent = _navigator.userAgent;

	if (userAgent.match(/iP(hone|od)/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Android/i) && userAgent.match(/Mobile/i) || userAgent.match(/Nokia|NOKIA/i) && userAgent.match(/Symbian|Windows Phone/i)) {
		return true;
	}
	return false;
};

var checkIsTablet = function checkIsTablet() {
	return !!navigator.userAgent.match(/Tablet|iPad/i);
};

var isMobile = checkIsMobile();
var isTablet = checkIsTablet();
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

module.exports = {
	isMobile: isMobile,
	isTablet: isTablet,
	isIOS: isIOS
};

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);
var core = __webpack_require__(16);
var hide = __webpack_require__(31);
var redefine = __webpack_require__(32);
var ctx = __webpack_require__(33);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(72)('wks');
var uid = __webpack_require__(47);
var Symbol = __webpack_require__(12).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fbs_ad__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_performance_utilities__ = __webpack_require__(91);


__WEBPACK_IMPORTED_MODULE_1__utils_performance_utilities__["a" /* PerformanceUtilities */].mark('Loaded');
function defineAd() {
    customElements.define('fbs-ad', __WEBPACK_IMPORTED_MODULE_0__fbs_ad__["a" /* FbsAd */]);
}
if (window['fbsads'] && window['fbsads'].apiReady) {
    defineAd();
}
else {
    document.addEventListener('FbsAdsBootstrapped', defineAd);
}
//# sourceMappingURL=main.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(45);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
var fails = __webpack_require__(13);
var defined = __webpack_require__(34);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(96);
var toPrimitive = __webpack_require__(62);
var dP = Object.defineProperty;

exports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(34);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(13);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(49);
var defined = __webpack_require__(34);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3);
var core = __webpack_require__(16);
var fails = __webpack_require__(13);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(20);
var createDesc = __webpack_require__(43);
module.exports = __webpack_require__(24) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);
var hide = __webpack_require__(31);
var has = __webpack_require__(27);
var SRC = __webpack_require__(47)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(16).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(28);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadScript;
/* harmony export (immutable) */ __webpack_exports__["b"] = loadStyle;
var loadedMap = new Map();
/**
 * Loads given script and calls callback onload
 */
function loadScript(src, cb) {
    if (!src.includes('.js')) {
        throw new Error('You can only load JS files with this function.');
    }
    var script = loadedMap.get(src); // Grab an exsiting subject if available
    // If none existing, make a new one
    if (!script) {
        script = document.createElement('script');
        loadedMap.set(src, script);
        script.dataset.loaded = 'false';
        Object.assign(script, {
            async: true,
            defer: true,
            src: src
        });
        script.addEventListener('load', function () { return script.dataset.loaded = 'true'; });
        script.addEventListener('load', cb);
        document.head.appendChild(script);
    }
    else if (script.dataset.loaded !== 'false') {
        cb();
    }
    else {
        script.addEventListener('load', cb);
    }
    return script;
}
/**
 * Loads given stylesheet and calls callback onload
 */
function loadStyle(src, cb) {
    if (!src.includes('.css')) {
        throw new Error('You can only load CSS files with this function.');
    }
    var style = loadedMap.get(src); // Grab an exsiting style if available
    // If none existing, make a new one
    if (!style) {
        style = document.createElement('link');
        loadedMap.set(src, style);
        style.dataset.loaded = 'false';
        Object.assign(style, {
            href: src,
            rel: 'stylesheet',
            type: 'text/css'
        });
        style.addEventListener('load', function () { return style.dataset.loaded = 'true'; });
        style.addEventListener('load', cb);
        document.head.appendChild(style);
    }
    else if (style.dataset.loaded !== 'false') {
        cb();
    }
    else {
        style.addEventListener('load', cb);
    }
    return style;
}
//# sourceMappingURL=main.js.map

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(63);
var createDesc = __webpack_require__(43);
var toIObject = __webpack_require__(25);
var toPrimitive = __webpack_require__(62);
var has = __webpack_require__(27);
var IE8_DOM_DEFINE = __webpack_require__(96);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(24) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(33);
var IObject = __webpack_require__(49);
var toObject = __webpack_require__(21);
var toLength = __webpack_require__(15);
var asc = __webpack_require__(208);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(98);
var enumBugKeys = __webpack_require__(73);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(47)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(27);
var setDesc = __webpack_require__(20).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(13)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(97);
var enumBugKeys = __webpack_require__(73);
var IE_PROTO = __webpack_require__(71)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(70)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(74).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(37);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(45);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(20).f;
var has = __webpack_require__(27);
var TAG = __webpack_require__(11)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(27);
var toObject = __webpack_require__(21);
var IE_PROTO = __webpack_require__(71)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(78)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(79)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(11)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(31)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getSwimlane"] = getSwimlane;
/* harmony export (immutable) */ __webpack_exports__["updateAdParams"] = updateAdParams;
/* harmony export (immutable) */ __webpack_exports__["applyConfig"] = applyConfig;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_ads_dist_main__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forbes_fbs_ads__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_mobile__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__is_mobile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracking__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adsConfig__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adsConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__adsConfig__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clientConfigService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adblock__ = __webpack_require__(270);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









// E2E tests are having issues on certain ad creative loads. Try to get amazon bidding test creatives instead
if (__WEBPACK_IMPORTED_MODULE_5__clientConfigService__["o" /* isE2E */]) {
	localStorage.setItem('apstagDebug', 'true');
}

window.fbsads = window.fbsads || new __WEBPACK_IMPORTED_MODULE_1__forbes_fbs_ads__["a" /* FbsAdsService */]();
var adService = window.fbsads;

/**
 * Return the "ss" (swimlane) query parameter if it exists.
 * @return {undefined|String}
 */
function getSwimlane() {
	var queryParams = window.location.search.replace('?', '').split('&');
	var swimlaneParams = queryParams.map(function (param) {
		return param.split('=');
	}).find(function (item) {
		return item[0] === 'ss' && item[1];
	});

	return swimlaneParams && swimlaneParams[1];
}

/**
 * Apparently, you cannot pass a blank string to GPT and have it
 * show up in the Ad Inspector as a page level target. Adops expects
 * certain keys to appear in the bookmarklet even if they are blank. To
 * force those keys as page level targeting and show up in the bookmarket,
 * you can pass an empty array to GPT.
 *
 * Ad Inspector: https://github.com/forbes/ad-inspector
 *
 * @param {String} value
 * @return {Array|String}
 */
function checkForNone(value) {
	return value === 'none' ? [] : value;
}

var desktopConfig = void 0;
var mobileConfig = void 0;

function removeSpaceAndLowerCase(param) {
	if (typeof param === 'string') {
		return (param || '').replace(/\s*/gi, '').toLowerCase();
	}
	return param;
}

/**
 * Chooses the correct ad config for a template and allows mobile article ads to get the right templat
 * @param {boolean} isMobile True if the client is using a mobile device.
 * @returns {Object} The ad config to use.
 */
function getConfig() {
	var isMobilePreview = __WEBPACK_IMPORTED_MODULE_5__clientConfigService__["r" /* isPreview */] && window.location.pathname.includes('/preview/mobile');
	return __WEBPACK_IMPORTED_MODULE_2__is_mobile__["isMobile"] || isMobilePreview ? mobileConfig : desktopConfig;
}

/**
 * Sets the window external_services object for MOAT/mnet. Supposedly the ad targeting data isn't enough.
 * @param {*} config GPT configuration object for fbs-ads
 */
function setExternalServices(config) {
	config.params = config.params || {};
	var siteZone = (config.ad_unit_path || '').split('/') || [];
	window.external_services = _extends(window.external_services || {}, {
		site: siteZone[2],
		zone: (siteZone.slice(3) || []).join('/'),
		author: config.additionalMoatParams.author || '',
		brandvoice: config.params.type === 'ad',
		channel: config.params.channel,
		editorialSlot: config.params.editSlot,
		hashtags: config.params.ht,
		section: config.params.section,
		specialSlot: config.params.specialslot
	});
}

function updateAdParams() {
	var tracking = Object(__WEBPACK_IMPORTED_MODULE_5__clientConfigService__["l" /* getTracking */])();
	var swimlaneUrl = __WEBPACK_IMPORTED_MODULE_5__clientConfigService__["c" /* advoiceBrand */] ? '' : getSwimlane();
	var swimLaneValue = __WEBPACK_IMPORTED_MODULE_5__clientConfigService__["C" /* swimLane */] || swimlaneUrl;
	var tab = __WEBPACK_IMPORTED_MODULE_5__clientConfigService__["j" /* currentTabName */] || '';

	var params = {
		ab: Object(__WEBPACK_IMPORTED_MODULE_6__adblock__["a" /* default */])(),
		author: removeSpaceAndLowerCase(checkForNone(tracking.author)),
		bbgterm: Object(__WEBPACK_IMPORTED_MODULE_3__tracking__["getBbgTerm"])(),
		channel: [removeSpaceAndLowerCase(checkForNone(tracking.channelNames || tracking.channel)) || ''],
		editSlot: tracking.edit || '',
		fvid: Object(__WEBPACK_IMPORTED_MODULE_3__tracking__["getFvid"])(),
		ht: checkForNone(tracking.hashtags),
		id: __WEBPACK_IMPORTED_MODULE_5__clientConfigService__["b" /* adId */] || tracking.naturalID || '', // allows adops to specifically target ad sizes to these pages
		login: false,
		section: [removeSpaceAndLowerCase(checkForNone(tracking.sectionNames || tracking.section)) || ''],
		specialslot: swimLaneValue ? '' : tracking.slot || '',
		swimlane: swimLaneValue,
		tab: tab,
		templatetype: tracking.templateType,
		type: removeSpaceAndLowerCase(checkForNone(tracking.contribType || tracking.type)),
		badges: tracking.badges
	};

	if (__WEBPACK_IMPORTED_MODULE_5__clientConfigService__["u" /* premiumProfile */]) {
		params.premiumProfile = __WEBPACK_IMPORTED_MODULE_5__clientConfigService__["u" /* premiumProfile */];
	}

	var additionalMoatParams = {
		author: checkForNone(tracking.author)
	};

	if (tracking.editorsPick) {
		params.ep = tracking.editorsPick;
	}

	if (tracking.coverStory) {
		params.coverstory = tracking.coverStory;
	}

	if (tracking.bertieBadgeSlugs) {
		params.badges = tracking.bertieBadgeSlugs;
	}

	if (tracking.negativeSentimentCompanies) {
		params.ns = tracking.negativeSentimentCompanies;
	}

	if ((tracking.entitySegments || []).length > 0) {
		params.es = tracking.entitySegments.join(',');
		params.essrc = tracking.entitySegments.map(function (segment) {
			return '' + (window.fbsads.getTargetingSource() ? window.fbsads.getTargetingSource() + '_' : '') + segment;
		}).join(',');
	}

	if (tracking.sentimentCompanies) {
		params.co = tracking.sentimentCompanies;
	}

	// Special slot or swimlane beat all
	if (params.specialslot || params.swimlane) {
		params.channel = '';
		params.section = '';
		params.displaychannel = '';
		params.displaysection = '';
		if (params.swimlane) {
			params.specialslot = '';
		}
	}

	if (tracking.brandVoice) {
		params.advoice = tracking.brandVoice;
	}

	desktopConfig = _extends({}, __WEBPACK_IMPORTED_MODULE_4__adsConfig__["desktopAdConfig"], {
		bypass_validate_moat_yield: __WEBPACK_IMPORTED_MODULE_5__clientConfigService__["o" /* isE2E */],
		params: params,
		additionalMoatParams: additionalMoatParams,
		ad_unit_path: __WEBPACK_IMPORTED_MODULE_5__clientConfigService__["k" /* fullAdZone */],
		isEurope: __WEBPACK_IMPORTED_MODULE_5__clientConfigService__["p" /* isEurope */]
	});

	mobileConfig = _extends({}, __WEBPACK_IMPORTED_MODULE_4__adsConfig__["mobileAdConfig"], {
		bypass_validate_moat_yield: __WEBPACK_IMPORTED_MODULE_5__clientConfigService__["o" /* isE2E */],
		params: params,
		additionalMoatParams: additionalMoatParams,
		ad_unit_path: __WEBPACK_IMPORTED_MODULE_5__clientConfigService__["k" /* fullAdZone */],
		isEurope: __WEBPACK_IMPORTED_MODULE_5__clientConfigService__["p" /* isEurope */]
	});
}

/**
 * Allows specialSlot and mobileConfig configuration update after adService is bootstrapped.
 * @param {String} specialSlot
 * @param {Boolean} noHeroMobile true if we want to remove hero sizes ([7, 1]) from the mobile position.
 */
function applyConfig(specialSlot) {
	var noHeroMobile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var config = getConfig();

	if (specialSlot !== false) {
		config.params.specialslot = specialSlot;
	}

	// remove the [7, 1] ad size from the mobile position on the mobileConfig.
	if (noHeroMobile && config.positions.mobile.sizes) {
		config.positions.mobile.sizes.splice(2, 1);
	}

	setExternalServices(config);
	adService.applyConfig(config);
}

updateAdParams();
setExternalServices(getConfig());

// Defalult settings here: https://github.forbes.com/Templates/fbs-ads-2/blob/master/src/fbs-ads/defaults.ts
adService.bootstrap(getConfig());

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(66);
var test = {};
test[__webpack_require__(11)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(32)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(37);
var TAG = __webpack_require__(11)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(66);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(195);
var redefine = __webpack_require__(32);
var hide = __webpack_require__(31);
var fails = __webpack_require__(13);
var defined = __webpack_require__(34);
var wks = __webpack_require__(11);
var regexpExec = __webpack_require__(83);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFvid", function() { return getFvid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBbgTerm", function() { return getBbgTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBvLeftRailHeadlineMobile", function() { return getBvLeftRailHeadlineMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "virtualTrack", function() { return virtualTrack; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_tracking__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_mobile__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__is_mobile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientConfigService__ = __webpack_require__(0);




window.trackingService = window.trackingService || new __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_tracking__["a" /* FbsTrackingService */]();
var _window = window,
    trackingService = _window.trackingService;

trackingService.setEnvironment(__WEBPACK_IMPORTED_MODULE_2__clientConfigService__["q" /* isLocal */] ? 'staging' : 'prod'); // For now: 'staging' on local, 'prod' on stage and prod
trackingService.isEurope = __WEBPACK_IMPORTED_MODULE_2__clientConfigService__["p" /* isEurope */];

/**
 * Uses fbsTracking package to generate or get the ClientId for the fvid targeting parameter
 * @returns {string} - the client Id
 */
var getFvid = function getFvid() {
	return trackingService.getOrCreateClientId();
};

/**
 * Checks if the source=bloomberg query parameter is in the current window.location
 * @returns {string} - returns 'true' if source=bloomberg is in the query parameters, '' otherwise.
 */
var getBbgTerm = function getBbgTerm() {
	var queryString = window.location.search.substr(1);
	var queryParamList = queryString.split('&');
	var isBbg = queryParamList.find(function (element) {
		return element.match(/(^|&)source=bloomberg($|&)/);
	});

	return isBbg ? 'true' : 'false';
};

/**
 * Populates cd62. The logic for this field tells GTM how the current article wound up in the current stream.
 * @param {Object} tracking Current tracking information for the current article
 * @returns {string} Tracking value for how the current article wound up in the stream
 */
var getBvLeftRailHeadlineMobile = function getBvLeftRailHeadlineMobile(tracking) {
	// First article, or pages that are not articles should have 'none' default value
	if (!tracking.index) {
		return 'none';

		// On second article on a non-brandvoice landing article page, change value whether the article was served
		// through the ntv-contentm position or the standard topStories response data
	} else if (!tracking.startFromBrandvoice && tracking.index === 1) {
		return tracking.fromNtvAd ? 'mobilead' : 'mobile scheduler';

		// On brandvoice landing article pages, the first 3 articles are from the topStories recommended stream inserted by API
		// as related brandvoice articles from the same partner
	} else if (tracking.startFromBrandvoice && tracking.index < 4) {
		return 'mobilerecommend';
	}

	return 'mobileother';
};

/**
 * Prepare tracking data to be sent to GTM.
 *
 * Takes page specific data from the server and augments it with default values, data only available on the client, and data that isn't
 * page specific.
 *
 * @param {boolean} virtualPageview Is this a virtual page view, false or omitted for the initial page view and updating dataLayer values.
 *
 * @returns {Object} The data needed by @forbes/fbs-tracking
 */
var prepareTracking = function prepareTracking(virtualPageview) {
	var tracking = Object(__WEBPACK_IMPORTED_MODULE_2__clientConfigService__["l" /* getTracking */])();
	var trackingData = {
		author: tracking.author || 'none',
		site: tracking.siteSlug || 'none',
		contribType: tracking.contribType || 'none',
		blogType: tracking.blogType || 'none',
		brandVoice: tracking.brandVoice || 'none',
		channel: tracking.channel || 'none', // cd4
		slot: tracking.slot || 'none', // cd 5
		bertie: tracking.bertie || 'false', // cd10
		pageType: tracking.pageType || 'none', // cd13
		DFPSite: __WEBPACK_IMPORTED_MODULE_1__is_mobile__["isMobile"] ? 'fdcmobile' : 'fdc.forbes', // cd15. Our site identifier for desktop and mobile.
		DFPZone: tracking.dfpZone || 'none', // cd16. The zone the page belongs to, e.g. 'home', 'pictures', 'profile', etc.
		published: tracking.publishDate || 'none', // cd17
		paragraphs: '' + (tracking.paragraphs || 'none'), // cd18
		categories: tracking.categories || 'none', // cd19
		edit: tracking.edit || 'none', // cd20
		hashtags: tracking.hashtags || 'none', // cd21
		naturalID: tracking.naturalID || 'none', // cd24
		wordCount: tracking.wordCount || 'none', // cd30
		pageNumber: '' + (tracking.pageNumber || 'none'), // cd33
		pageTotal: '' + (tracking.pageTotal || 'none'), // cd34
		publishHour: tracking.publishHour || 'none', // cd35
		updateDate: tracking.updateDate || 'none', // cd36
		updateHour: tracking.updateHour || 'none', // cd37
		section: tracking.section || 'none', // cd38
		videoPlacement: tracking.videoLocation || 'none', // cd42
		login: 'false', // cd46
		trendingHashtags: tracking.hashtagsTrending || 'none', // cd47
		heroImage: tracking.heroImage || 'none', // cd48
		imageCount: typeof tracking.imageCount === 'number' ? tracking.imageCount.toString() : 'none', // cd49
		customPage: tracking.customPage || 'none', // cd50
		weekdayPublish: tracking.weekdayPublish || 'none', // cd51
		contribActive: tracking.contribActive || 'none', // cd56
		primaryChannel: tracking.primaryChannel || 'none', // cd59
		primarySection: tracking.primarySection || 'none', // cd60
		bvContentSource: tracking.brandVoice && tracking.bvContentSource || 'none', // cd61
		bvLeftRailHeadline: getBvLeftRailHeadlineMobile(tracking), // cd62. This is only set in the stream.
		streamPosition: typeof tracking.streamPosition === 'number' ? tracking.streamPosition : 'none', // cd64
		DFPLineItemID: tracking.ntvContentmLineItemId || 'none', // cd65. This is only set in the stream.
		bvProgramType: tracking.bvProgramType || 'none', // cd68
		coreBrands: tracking.coreBrands || 'none', // cd69
		contribDivision: tracking.contribDivision || 'none', // cd70
		insights: tracking.insights || 'none', // cd78
		coAuthorControl: tracking.coAuthorControl, // cd79
		newsKeywords: tracking.newsKeywords || 'none', // cd80
		coAuthor: tracking.coAuthor || 'none', // cd81
		channelNames: tracking.channelNames || 'none',
		sectionNames: tracking.sectionNames || 'none',
		cbSections: tracking.sections || '',
		cbPath: document.location.pathname,
		fastCh: tracking.fastCh || '',
		fastSe: tracking.fastSe || '',
		fastSu: tracking.fastSu || '',
		fastPt: tracking.fastPt || '',
		fastI: tracking.naturalID || '',
		fastAu: tracking.fastAu || '',
		fastAt: tracking.fastAt || '',
		fastN: '',
		version: tracking.version || '',
		description: tracking.description || '',
		seniorContributor: tracking.seniorContributor || 'none',
		paidContentType: tracking.paidContentType || 'none', // cd92
		paidContentBrand: tracking.paidContentBrand || 'none', // cd93
		premiumProfiles: tracking.premiumProfiles || 'none', // cd98
		templateType: tracking.templateType || 'none'
	};

	if (virtualPageview) {
		trackingData.event = 'analyticsVPV';
		trackingData.path = window.location.pathname;
		trackingData.virtualPage = 'true';
		trackingData.cbTitle = tracking.title || '';
	}

	return trackingData;
};

/**
 * Fire virtual tracking
 *
 * @param {boolean} virtualPageview Is this a page view, false for just updating dataLayer values.
 */
var virtualTrack = function virtualTrack(virtualPageview) {
	trackingService.track(prepareTracking(virtualPageview), virtualPageview);
};

// We do not want to fire tracking on bertie preview mode
if (!window.forbes['simple-site'].isPreview) {
	trackingService.track(prepareTracking(), true);
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(12).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(72)('keys');
var uid = __webpack_require__(47);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(16);
var global = __webpack_require__(12);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(51) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(12).document;
module.exports = document && document.documentElement;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(98);
var hiddenKeys = __webpack_require__(73).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(8);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(33)(Function.call, __webpack_require__(38).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(37);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(45);
var defined = __webpack_require__(34);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(51);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(32);
var hide = __webpack_require__(31);
var Iterators = __webpack_require__(55);
var $iterCreate = __webpack_require__(101);
var setToStringTag = __webpack_require__(52);
var getPrototypeOf = __webpack_require__(53);
var ITERATOR = __webpack_require__(11)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(105);
var defined = __webpack_require__(34);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(11)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(78)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(196);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(11)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(12);
var dP = __webpack_require__(20);
var DESCRIPTORS = __webpack_require__(24);
var SPECIES = __webpack_require__(11)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(112);
var getKeys = __webpack_require__(44);
var redefine = __webpack_require__(32);
var global = __webpack_require__(12);
var hide = __webpack_require__(31);
var Iterators = __webpack_require__(55);
var wks = __webpack_require__(11);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(33);
var call = __webpack_require__(107);
var isArrayIter = __webpack_require__(108);
var anObject = __webpack_require__(8);
var toLength = __webpack_require__(15);
var getIterFn = __webpack_require__(110);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(32);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceUtilities; });
var PerformanceUtilities = (function () {
    function PerformanceUtilities() {
    }
    /**
     * Mark the current time since navigation start
     */
    PerformanceUtilities.mark = function (markName) {
        if (window['performance'] && performance.mark) {
            performance.mark("FbsAds_" + markName.replace(' ', '_'));
        }
    };
    return PerformanceUtilities;
}());

//# sourceMappingURL=performance.utilities.js.map

/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(24) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(70)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(20);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(44);

module.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(27);
var toIObject = __webpack_require__(25);
var arrayIndexOf = __webpack_require__(99)(false);
var IE_PROTO = __webpack_require__(71)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(25);
var toLength = __webpack_require__(15);
var toAbsoluteIndex = __webpack_require__(50);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(48);
var descriptor = __webpack_require__(43);
var setToStringTag = __webpack_require__(52);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(31)(IteratorPrototype, __webpack_require__(11)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(11);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(25);
var gOPN = __webpack_require__(75).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(9);
var cof = __webpack_require__(37);
var MATCH = __webpack_require__(11)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(8);
var aFunction = __webpack_require__(28);
var SPECIES = __webpack_require__(11)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(55);
var ITERATOR = __webpack_require__(11)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(20);
var createDesc = __webpack_require__(43);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(66);
var ITERATOR = __webpack_require__(11)('iterator');
var Iterators = __webpack_require__(55);
module.exports = __webpack_require__(16).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(28);
var toObject = __webpack_require__(21);
var IObject = __webpack_require__(49);
var toLength = __webpack_require__(15);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(56);
var step = __webpack_require__(113);
var Iterators = __webpack_require__(55);
var toIObject = __webpack_require__(25);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(79)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(33);
var invoke = __webpack_require__(100);
var html = __webpack_require__(74);
var cel = __webpack_require__(70);
var global = __webpack_require__(12);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(37)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(28);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(20).f;
var create = __webpack_require__(48);
var redefineAll = __webpack_require__(89);
var ctx = __webpack_require__(33);
var anInstance = __webpack_require__(87);
var forOf = __webpack_require__(88);
var $iterDefine = __webpack_require__(79);
var step = __webpack_require__(113);
var setSpecies = __webpack_require__(85);
var DESCRIPTORS = __webpack_require__(24);
var fastKey = __webpack_require__(46).fastKey;
var validate = __webpack_require__(90);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(12);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(32);
var redefineAll = __webpack_require__(89);
var meta = __webpack_require__(46);
var forOf = __webpack_require__(88);
var anInstance = __webpack_require__(87);
var isObject = __webpack_require__(9);
var fails = __webpack_require__(13);
var $iterDetect = __webpack_require__(84);
var setToStringTag = __webpack_require__(52);
var inheritIfRequired = __webpack_require__(233);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = performanceMark;
function performanceMark(markName) {
    if (window['performance'] && !!performance.mark) {
        performance.mark('Fbs Video: ' + markName);
    }
}
//# sourceMappingURL=performance.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsService; });
/**
 * This is a FbsAdsService which controls the ads.
 *
 * [Implementation](https://github.forbes.com/Templates/fbs-ads-2#forbes-ads-2)
 */
var AdsService = (function () {
    function AdsService() {
        /**
         * Tells if this service has been bootstrapped
         */
        this.apiReady = false;
    }
    return AdsService;
}());

//# sourceMappingURL=ads.service.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmazonBiddingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__ = __webpack_require__(35);

var amazonId = '3038';
/**
 * Handles Amazon Header Bidding
 *
 * https://jira.forbes.com/secure/attachment/27468/apstag_javascript_integration_NEW.pdf
 */
var AmazonBiddingService = (function () {
    function AmazonBiddingService() {
    }
    Object.defineProperty(AmazonBiddingService.prototype, "apstag", {
        get: function () {
            return window['apstag'];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize Amazon Header Bidding
     */
    AmazonBiddingService.prototype.init = function (configParam) {
        this.initAmazon(configParam);
        this.subscribeToRemoveTargeting();
    };
    /**
     * Fetch bids for the configured slots from Amazon and store them until the slot is created.
     */
    AmazonBiddingService.prototype.fetchBids = function (amazonSlots) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if ((amazonSlots || []).length) {
                _this.apstag.fetchBids({
                    slots: amazonSlots,
                    timeout: 2000
                }, function (bids) {
                    resolve(bids);
                });
            }
        });
    };
    /**
     * Deprecated
     * Do not use
     */
    AmazonBiddingService.prototype.resetAmazonSlots = function () {
        // TODO: remove this function
    };
    /**
     * Set variables and load and initialize Amazon's js.
     */
    AmazonBiddingService.prototype.initAmazon = function (shoppingInsightsGroup) {
        window['apstagDEBUG'] = { testBidTimeout: 90 }; // Make sure test bids return before our 100ms timeout.
        this.amazonSetup();
        var apstagConfig = {
            pubID: amazonId,
            adServer: 'googletag',
            deals: true
        };
        if (shoppingInsightsGroup) {
            apstagConfig.params = {
                si_pageview: shoppingInsightsGroup
            };
        }
        this.apstag.init(apstagConfig);
    };
    /**
     * Code to setup and load Amazon. Taken from their documentation and partially unminified.
     */
    AmazonBiddingService.prototype.amazonSetup = function () {
        if (window['apstag']) {
            return;
        }
        function q(c, r) {
            window['apstag']._Q.push([c, r]);
        }
        window['apstag'] = {
            init: function () {
                q('i', arguments);
            },
            fetchBids: function () {
                q('f', arguments);
            },
            setDisplayBids: function () { },
            _Q: []
        };
        Object(__WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__["a" /* loadScript */])('//c.amazon-adsystem.com/aax2/apstag.js');
    };
    /**
     * Add Amazon's key/value pairs to the slot (if any) and remove the now used bid.
     */
    AmazonBiddingService.prototype.setAmazonTargeting = function (slot, bids) {
        var position = (slot.getTargeting('pos') || [])[0];
        if (!bids) {
            return;
        }
        bids
            .filter(function (bid) { return bid && bid.slotID === position; })
            .forEach(function (bid) {
            ((bid.helpers || {}).targetingKeys || []).forEach(function (key) {
                slot.setTargeting(key, bid.targeting[key]);
            });
            bids.splice(bids.indexOf(bid), 1);
        });
    };
    /**
     * Remove Amazon's key/values from the ad slots.
     *
     * Amazon's bids are only good for one ad call. Remove them once the ad loads so they won't still be there if the ad is refreshed.
     */
    AmazonBiddingService.prototype.subscribeToRemoveTargeting = function () {
        var _this = this;
        document.addEventListener('fbs-ad-render', function (renderEvent) {
            var event = renderEvent.detail;
            _this.apstag.targetingKeys().forEach(function (key) {
                event.slot.clearTargeting(key);
            });
        });
    };
    return AmazonBiddingService;
}());

//# sourceMappingURL=amazon-bidding.service.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__criteo_bidding_service__ = __webpack_require__(249);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__criteo_bidding_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__criteo_bidding_service__["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__googletag_interfaces__ = __webpack_require__(252);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__googletag_proxy__ = __webpack_require__(253);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__googletag_proxy__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultAdConfig; });
var defaultAdConfig = {
    mobile: false,
    ad_unit_path: '7175/fdc.forbes/article-d',
    positions: {
        top: {
            slot_id: 'top',
            sizes: [
                [728, 90],
                [970, 250],
                [970, 90],
                [970, 66],
                [1, 1],
                'fluid'
            ],
            criteoZoneId: 1168047
        },
        rec: {
            slot_id: 'rec',
            sizes: [
                [300, 250],
                [336, 280],
                [300, 600],
                [1, 1],
                'fluid'
            ],
            criteoZoneId: 1168043
        },
        mobile: {
            slot_id: 'mobile',
            sizes: [
                [300, 50],
                [320, 50],
                [1, 1]
            ]
        },
        mobilerec: {
            slot_id: 'mobilerec',
            sizes: [
                [300, 250],
                [300, 50],
                [320, 180],
                [320, 50],
                [1, 1]
            ]
        }
    },
    params: {},
    isEurope: false
};
//# sourceMappingURL=defaults.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__google_analytics_service__ = __webpack_require__(267);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__google_analytics_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingUtil; });
var TrackingUtil = /** @class */ (function () {
    function TrackingUtil() {
    }
    /**
     * Generates unique client id based on URL, timestamp and random numbers
     *
     * @return {string} client id
     */
    TrackingUtil.generateClientId = function () {
        var _this = this;
        var hash = this.hash31(window.location.pathname + window.location.hash); // 31 bits
        var time = new Date().getTime() & 0x7FFFFFFF; // 31 bits
        var arr = [];
        var clientId = '';
        for (var i = 0; i < 5; i++) {
            arr[i] = Math.random() * 0x10000000 & 0x7FFFFFFF; // 28 bits
        }
        arr[0] = arr[0] ^ (hash & 0xFFFFFFF); // xor 28 bits of hash
        arr[1] = arr[1] ^ (time & 0xFFFFFFF); // xor 28 bits of time
        arr[2] = arr[2] ^ (((time >> 28) << 3) | (hash >> 28)); // xor remaining 3 bits of time and 3 bits of hash
        arr.forEach(function (value) {
            clientId += _this.pad(value.toString(16), 7, '0', false);
        });
        return clientId;
    };
    /**
     * Generates 31 bit hash from a given string
     * @param {string} input string
     * @return {number} hash
     */
    TrackingUtil.hash31 = function (input) {
        var hash = 2147483647, i = input.length;
        while (i--) {
            hash = ((hash << 5) - hash + input.charCodeAt(i)) & 0x7FFFFFFF;
        }
        return hash;
    };
    /**
     * Pad string to certain length
     * E.G. pad('3', 5, '0') creates '00003'
     *      pad('3', 5, '0', true) creates '30000'
     *      pad('5', 3, '-') creates '--5'
     *      pad('5', 1, '-', true) creates '5'
     *
     * @param input     String to be padded
     * @param limit     Length string should be padded to
     * @param padStr    String to pad with
     * @param padToEnd  Direction to pad on, send false for left, true for right padding
     * @return          Padded string
     */
    TrackingUtil.pad = function (input, limit, padStr, padToEnd) {
        input = '' + input;
        while (input.length < limit) {
            input = (padToEnd) ? input + padStr : padStr + input;
        }
        return input;
    };
    return TrackingUtil;
}());

//# sourceMappingURL=fbs-tracking.util.js.map

/***/ }),
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
__webpack_require__(131);
__webpack_require__(148);
__webpack_require__(169);
__webpack_require__(200);
__webpack_require__(225);
__webpack_require__(231);
__webpack_require__(234);
__webpack_require__(236);
__webpack_require__(237);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(57);
__webpack_require__(69);
__webpack_require__(271);
__webpack_require__(272);
module.exports = __webpack_require__(273);


/***/ }),
/* 130 */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

(function() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    var ce = new window.CustomEvent('test', { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function(event, params) {
      var evt, origPrevent;
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      origPrevent = evt.preventDefault;
      evt.preventDefault = function() {
        origPrevent.call(this);
        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function() {
              return true;
            }
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
__webpack_require__(133);
__webpack_require__(135);
__webpack_require__(136);
__webpack_require__(137);
__webpack_require__(138);
__webpack_require__(139);
__webpack_require__(140);
__webpack_require__(141);
__webpack_require__(142);
__webpack_require__(143);
__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(147);
module.exports = __webpack_require__(16).Reflect;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(3);
var aFunction = __webpack_require__(28);
var anObject = __webpack_require__(8);
var rApply = (__webpack_require__(12).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(13)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(3);
var create = __webpack_require__(48);
var aFunction = __webpack_require__(28);
var anObject = __webpack_require__(8);
var isObject = __webpack_require__(9);
var fails = __webpack_require__(13);
var bind = __webpack_require__(134);
var rConstruct = (__webpack_require__(12).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(28);
var isObject = __webpack_require__(9);
var invoke = __webpack_require__(100);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(20);
var $export = __webpack_require__(3);
var anObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(62);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(13)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(3);
var gOPD = __webpack_require__(38).f;
var anObject = __webpack_require__(8);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(3);
var anObject = __webpack_require__(8);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(101)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(38);
var getPrototypeOf = __webpack_require__(53);
var has = __webpack_require__(27);
var $export = __webpack_require__(3);
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(8);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(38);
var $export = __webpack_require__(3);
var anObject = __webpack_require__(8);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(3);
var getProto = __webpack_require__(53);
var anObject = __webpack_require__(8);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(3);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(3);
var anObject = __webpack_require__(8);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(3);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(144) });


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(75);
var gOPS = __webpack_require__(64);
var anObject = __webpack_require__(8);
var Reflect = __webpack_require__(12).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(3);
var anObject = __webpack_require__(8);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(20);
var gOPD = __webpack_require__(38);
var getPrototypeOf = __webpack_require__(53);
var has = __webpack_require__(27);
var $export = __webpack_require__(3);
var createDesc = __webpack_require__(43);
var anObject = __webpack_require__(8);
var isObject = __webpack_require__(9);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(3);
var setProto = __webpack_require__(76);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
__webpack_require__(155);
__webpack_require__(156);
__webpack_require__(157);
__webpack_require__(158);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(161);
__webpack_require__(162);
__webpack_require__(163);
__webpack_require__(164);
__webpack_require__(165);
__webpack_require__(167);
__webpack_require__(168);
__webpack_require__(65);

module.exports = __webpack_require__(16).Object;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(12);
var has = __webpack_require__(27);
var DESCRIPTORS = __webpack_require__(24);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(32);
var META = __webpack_require__(46).KEY;
var $fails = __webpack_require__(13);
var shared = __webpack_require__(72);
var setToStringTag = __webpack_require__(52);
var uid = __webpack_require__(47);
var wks = __webpack_require__(11);
var wksExt = __webpack_require__(102);
var wksDefine = __webpack_require__(150);
var enumKeys = __webpack_require__(151);
var isArray = __webpack_require__(77);
var anObject = __webpack_require__(8);
var isObject = __webpack_require__(9);
var toIObject = __webpack_require__(25);
var toPrimitive = __webpack_require__(62);
var createDesc = __webpack_require__(43);
var _create = __webpack_require__(48);
var gOPNExt = __webpack_require__(103);
var $GOPD = __webpack_require__(38);
var $DP = __webpack_require__(20);
var $keys = __webpack_require__(44);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(63).f = $propertyIsEnumerable;
  __webpack_require__(64).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(51)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(31)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);
var core = __webpack_require__(16);
var LIBRARY = __webpack_require__(51);
var wksExt = __webpack_require__(102);
var defineProperty = __webpack_require__(20).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(44);
var gOPS = __webpack_require__(64);
var pIE = __webpack_require__(63);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(48) });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(24), 'Object', { defineProperty: __webpack_require__(20).f });


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(24), 'Object', { defineProperties: __webpack_require__(97) });


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(25);
var $getOwnPropertyDescriptor = __webpack_require__(38).f;

__webpack_require__(26)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(21);
var $getPrototypeOf = __webpack_require__(53);

__webpack_require__(26)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(21);
var $keys = __webpack_require__(44);

__webpack_require__(26)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(26)('getOwnPropertyNames', function () {
  return __webpack_require__(103).f;
});


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(9);
var meta = __webpack_require__(46).onFreeze;

__webpack_require__(26)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(9);
var meta = __webpack_require__(46).onFreeze;

__webpack_require__(26)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(9);
var meta = __webpack_require__(46).onFreeze;

__webpack_require__(26)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(9);

__webpack_require__(26)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(9);

__webpack_require__(26)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(9);

__webpack_require__(26)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(3);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(166) });


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(44);
var gOPS = __webpack_require__(64);
var pIE = __webpack_require__(63);
var toObject = __webpack_require__(21);
var IObject = __webpack_require__(49);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(13)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { is: __webpack_require__(104) });


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(76).set });


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(170);
__webpack_require__(171);
__webpack_require__(172);
__webpack_require__(54);
__webpack_require__(175);
__webpack_require__(176);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(197);
__webpack_require__(198);
__webpack_require__(199);
module.exports = __webpack_require__(16).String;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
var toAbsoluteIndex = __webpack_require__(50);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
var toIObject = __webpack_require__(25);
var toLength = __webpack_require__(15);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(173)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
var defined = __webpack_require__(34);
var fails = __webpack_require__(13);
var spaces = __webpack_require__(174);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var $at = __webpack_require__(78)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(3);
var toLength = __webpack_require__(15);
var context = __webpack_require__(80);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(81)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(3);
var context = __webpack_require__(80);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(81)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(179)
});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(45);
var defined = __webpack_require__(34);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(3);
var toLength = __webpack_require__(15);
var context = __webpack_require__(80);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(81)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(17)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(17)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(17)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(17)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(17)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(17)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(17)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(17)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(17)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(17)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(17)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(17)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(17)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(8);
var toLength = __webpack_require__(15);
var advanceStringIndex = __webpack_require__(82);
var regExpExec = __webpack_require__(67);

// @@match logic
__webpack_require__(68)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(83);
__webpack_require__(3)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(8);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(8);
var toObject = __webpack_require__(21);
var toLength = __webpack_require__(15);
var toInteger = __webpack_require__(45);
var advanceStringIndex = __webpack_require__(82);
var regExpExec = __webpack_require__(67);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(68)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(8);
var sameValue = __webpack_require__(104);
var regExpExec = __webpack_require__(67);

// @@search logic
__webpack_require__(68)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(105);
var anObject = __webpack_require__(8);
var speciesConstructor = __webpack_require__(106);
var advanceStringIndex = __webpack_require__(82);
var toLength = __webpack_require__(15);
var callRegExpExec = __webpack_require__(67);
var regexpExec = __webpack_require__(83);
var fails = __webpack_require__(13);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(68)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(201);
__webpack_require__(202);
__webpack_require__(203);
__webpack_require__(204);
__webpack_require__(205);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(210);
__webpack_require__(211);
__webpack_require__(212);
__webpack_require__(213);
__webpack_require__(214);
__webpack_require__(215);
__webpack_require__(216);
__webpack_require__(217);
__webpack_require__(218);
__webpack_require__(220);
__webpack_require__(222);
__webpack_require__(223);
__webpack_require__(224);
__webpack_require__(112);
module.exports = __webpack_require__(16).Array;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(3);

$export($export.S, 'Array', { isArray: __webpack_require__(77) });


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(33);
var $export = __webpack_require__(3);
var toObject = __webpack_require__(21);
var call = __webpack_require__(107);
var isArrayIter = __webpack_require__(108);
var toLength = __webpack_require__(15);
var createProperty = __webpack_require__(109);
var getIterFn = __webpack_require__(110);

$export($export.S + $export.F * !__webpack_require__(84)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var createProperty = __webpack_require__(109);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(13)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(3);
var toIObject = __webpack_require__(25);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(49) != Object || !__webpack_require__(22)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var html = __webpack_require__(74);
var cof = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(50);
var toLength = __webpack_require__(15);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(13)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var aFunction = __webpack_require__(28);
var toObject = __webpack_require__(21);
var fails = __webpack_require__(13);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(22)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var $forEach = __webpack_require__(39)(0);
var STRICT = __webpack_require__(22)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(209);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var isArray = __webpack_require__(77);
var SPECIES = __webpack_require__(11)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var $map = __webpack_require__(39)(1);

$export($export.P + $export.F * !__webpack_require__(22)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var $filter = __webpack_require__(39)(2);

$export($export.P + $export.F * !__webpack_require__(22)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var $some = __webpack_require__(39)(3);

$export($export.P + $export.F * !__webpack_require__(22)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var $every = __webpack_require__(39)(4);

$export($export.P + $export.F * !__webpack_require__(22)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var $reduce = __webpack_require__(111);

$export($export.P + $export.F * !__webpack_require__(22)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var $reduce = __webpack_require__(111);

$export($export.P + $export.F * !__webpack_require__(22)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var $indexOf = __webpack_require__(99)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(22)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var toIObject = __webpack_require__(25);
var toInteger = __webpack_require__(45);
var toLength = __webpack_require__(15);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(22)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(3);

$export($export.P, 'Array', { copyWithin: __webpack_require__(219) });

__webpack_require__(56)('copyWithin');


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(21);
var toAbsoluteIndex = __webpack_require__(50);
var toLength = __webpack_require__(15);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(3);

$export($export.P, 'Array', { fill: __webpack_require__(221) });

__webpack_require__(56)('fill');


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(21);
var toAbsoluteIndex = __webpack_require__(50);
var toLength = __webpack_require__(15);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(3);
var $find = __webpack_require__(39)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(56)(KEY);


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(3);
var $find = __webpack_require__(39)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(56)(KEY);


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85)('Array');


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
__webpack_require__(54);
__webpack_require__(86);
__webpack_require__(226);
module.exports = __webpack_require__(16).Promise;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(51);
var global = __webpack_require__(12);
var ctx = __webpack_require__(33);
var classof = __webpack_require__(66);
var $export = __webpack_require__(3);
var isObject = __webpack_require__(9);
var aFunction = __webpack_require__(28);
var anInstance = __webpack_require__(87);
var forOf = __webpack_require__(88);
var speciesConstructor = __webpack_require__(106);
var task = __webpack_require__(114).set;
var microtask = __webpack_require__(227)();
var newPromiseCapabilityModule = __webpack_require__(115);
var perform = __webpack_require__(228);
var userAgent = __webpack_require__(229);
var promiseResolve = __webpack_require__(230);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(11)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(89)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(52)($Promise, PROMISE);
__webpack_require__(85)(PROMISE);
Wrapper = __webpack_require__(16)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(84)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);
var macrotask = __webpack_require__(114).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(37)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var isObject = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(115);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
__webpack_require__(54);
__webpack_require__(86);
__webpack_require__(232);
module.exports = __webpack_require__(16).Map;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(116);
var validate = __webpack_require__(90);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(117)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var setPrototypeOf = __webpack_require__(76).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
__webpack_require__(54);
__webpack_require__(86);
__webpack_require__(235);
module.exports = __webpack_require__(16).Set;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(116);
var validate = __webpack_require__(90);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(117)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable */
/*
 * This is almost directly copied from @webcomponents/custom-elements minified custom elements.
 * Look for @changed annotations to see what changes were made and why. Blame AMP for this terrible idea
 */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
    var curr;
    function c() {
        function a() {
            b.C = !0;
            b.b(f.childNodes);
        }
        var b = this;
        this.a = new Map();
        this.j = new Map();
        this.h = new Map();
        this.m = new Set();
        this.v = new MutationObserver(this.A.bind(this));
        this.f = null;
        this.B = new Set();
        this.enableFlush = !0;
        this.C = !1;
        this.G = this.c(f);
        window.HTMLImports ? window.HTMLImports.whenReady(a) : a();
        curr = this;
    }

    function g() {
        /* @changed
         * Changed from `return window.customElements` to avoid conflicts when AMP custom element polyfill loads and clobbers it
         */
        return curr;
    }

    function k(a) {
        if (!/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a) || -1 !== q.indexOf(a)) return Error("The element name '" + a + "' is not valid.");
    }

    function l(a, b, d, e) {
        var c = g();
        a = r.call(a, b, d);
        (b = c.a.get(b.toLowerCase())) && c.D(a, b, e);
        c.c(a);
        return a;
    }

    function m(a, b, d, e) {
        b = b.toLowerCase();
        var c = a.getAttribute(b);
        e.call(a, b, d);
        1 == a.__$CE_upgraded && (e = g().a.get(a.localName), d = e.w, (e = e.i) && 0 <= d.indexOf(b) && (d = a.getAttribute(b), d !== c && e.call(a, b, c, d, null)));
    }
    var f = document,
        h = window;
    if (g() && (g().g = function () {}, !g().forcePolyfill)) return;
    var q = "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ");
    c.prototype.K = function (a, b) {
        function d(a) {
            var b = g[a];
            if (void 0 !== b && "function" !== typeof b) throw Error(c + " '" + a + "' is not a Function");
            return b;
        }
        if ("function" !== typeof b) throw new TypeError("constructor must be a Constructor");
        var e = k(a);
        if (e) throw e;
        if (this.a.has(a)) throw Error("An element with name '" + a + "' is already defined");
        if (this.j.has(b)) throw Error("Definition failed for '" + a + "': The constructor is already used.");
        var c = a,
            g = b.prototype;
        if ("object" !== (typeof g === "undefined" ? "undefined" : _typeof(g))) throw new TypeError("Definition failed for '" + a + "': constructor.prototype must be an object");
        var e = d("connectedCallback"),
            h = d("disconnectedCallback"),
            n = d("attributeChangedCallback");
        this.a.set(c, {
            name: a,
            localName: c,
            constructor: b,
            o: e,
            s: h,
            i: n,
            w: n && b.observedAttributes || []
        });
        this.j.set(b, c);
        this.C && this.b(f.childNodes);
        if (a = this.h.get(c)) a.resolve(void 0), this.h.delete(c);
    };
    c.prototype.get = function (a) {
        return (a = this.a.get(a)) ? a.constructor : void 0;
    };
    c.prototype.L = function (a) {
        var b = k(a);
        if (b) return Promise.reject(b);
        if (this.a.has(a)) return Promise.resolve();
        if (b = this.h.get(a)) return b.M;
        var d,
            e = new Promise(function (a) {
            d = a;
        }),
            b = {
            M: e,
            resolve: d
        };
        this.h.set(a, b);
        return e;
    };
    c.prototype.g = function () {
        this.enableFlush && (this.l(this.G.takeRecords()), this.A(this.v.takeRecords()), this.m.forEach(function (a) {
            this.l(a.takeRecords());
        }, this));
    };
    c.prototype.I = function (a) {
        this.f = a;
    };
    c.prototype.c = function (a) {
        if (null != a.__$CE_observer) return a.__$CE_observer;
        a.__$CE_observer = new MutationObserver(this.l.bind(this));
        a.__$CE_observer.observe(a, {
            childList: !0,
            subtree: !0
        });
        this.enableFlush && this.m.add(a.__$CE_observer);
        return a.__$CE_observer;
    };
    c.prototype.J = function (a) {
        null != a.__$CE_observer && (a.__$CE_observer.disconnect(), this.enableFlush && this.m.delete(a.__$CE_observer), a.__$CE_observer = null);
    };
    c.prototype.l = function (a) {
        for (var b = 0; b < a.length; b++) {
            var d = a[b];
            if ("childList" === d.type) {
                var e = d.removedNodes;
                this.b(d.addedNodes);
                this.H(e);
            }
        }
    };
    c.prototype.b = function (a, b) {
        b = b || new Set();
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (e.nodeType === Node.ELEMENT_NODE) {
                this.J(e);
                e = f.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, null, !1);
                do {
                    this.F(e.currentNode, b);
                } while (e.nextNode());
            }
        }
    };
    c.prototype.F = function (a, b) {
        if (!b.has(a)) {
            b.add(a);
            var d = this.a.get(a.localName);
            if (d) {
                a.__$CE_upgraded || this.D(a, d, !0);
                var e;
                if (e = a.__$CE_upgraded && !a.__$CE_attached) a: {
                    e = a;do {
                        if (e.__$CE_attached || e.nodeType === Node.DOCUMENT_NODE) {
                            e = !0;
                            break a;
                        }
                        e = e.parentNode || e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host;
                    } while (e);e = !1;
                }
                e && (a.__$CE_attached = !0, d.o && d.o.call(a));
            }
            a.shadowRoot && this.b(a.shadowRoot.childNodes, b);
            "LINK" === a.tagName && a.rel && -1 !== a.rel.toLowerCase().split(" ").indexOf("import") && this.u(a, b);
        }
    };
    c.prototype.u = function (a, b) {
        var d = a.import;
        if (d) b.has(d) || (b.add(d), d.__$CE_observer || this.c(d), this.b(d.childNodes, b));else if (b = a.href, !this.B.has(b)) {
            this.B.add(b);
            var e = this,
                c = function c() {
                a.removeEventListener("load", c);
                a.import.__$CE_observer || e.c(a.import);
                e.b(a.import.childNodes);
            };
            a.addEventListener("load", c);
        }
    };
    c.prototype.H = function (a) {
        for (var b = 0; b < a.length; b++) {
            var d = a[b];
            if (d.nodeType === Node.ELEMENT_NODE) {
                this.c(d);
                d = f.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, null, !1);
                do {
                    var e = d.currentNode;
                    if (e.__$CE_upgraded && e.__$CE_attached) {
                        e.__$CE_attached = !1;
                        var c = this.a.get(e.localName);
                        c && c.s && c.s.call(e);
                    }
                } while (d.nextNode());
            }
        }
    };
    c.prototype.D = function (a, b, d) {
        a.__proto__ = b.constructor.prototype;
        d && (this.I(a), new b.constructor(), a.__$CE_upgraded = !0, console.assert(!this.f));
        d = b.w;
        if ((b = b.i) && 0 < d.length) {
            this.v.observe(a, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: d
            });
            for (var e = 0; e < d.length; e++) {
                var c = d[e];
                if (a.hasAttribute(c)) {
                    var f = a.getAttribute(c);
                    b.call(a, c, null, f, null);
                }
            }
        }
    };
    c.prototype.A = function (a) {
        for (var b = 0; b < a.length; b++) {
            var d = a[b];
            if ("attributes" === d.type) {
                var e = d.target,
                    c = this.a.get(e.localName),
                    f = d.attributeName,
                    g = d.oldValue,
                    h = e.getAttribute(f);
                h !== g && c.i.call(e, f, g, h, d.attributeNamespace);
            }
        }
    };
    /* @changed
     * Wrapped in an "isWriteable" if statement to avoid erroring out when the AMP custom element polyfill loads in and clobbers the custom
     * element registry with a read-only property
     */
    if ((Object.getOwnPropertyDescriptor(window, 'CustomElementRegistry') || {}).writable !== false) {
        window.CustomElementRegistry = c;
    }
    c.prototype.define = c.prototype.K;
    c.prototype.get = c.prototype.get;
    c.prototype.whenDefined = c.prototype.L;
    c.prototype.flush = c.prototype.g;
    c.prototype.polyfilled = !0;
    c.prototype._observeRoot = c.prototype.c;
    c.prototype._addImport = c.prototype.u;
    var t = h.HTMLElement;
    h.HTMLElement = function () {
        var a = g();
        if (a.f) {
            var b = a.f;
            a.f = null;
            return b;
        }
        if (this.constructor) return a = a.j.get(this.constructor), l(f, a, void 0, !1);
        throw Error("Unknown constructor. Did you call customElements.define()?");
    };
    h.HTMLElement.prototype = Object.create(t.prototype, {
        constructor: {
            value: h.HTMLElement,
            configurable: !0,
            writable: !0
        }
    });
    var r = f.createElement;
    f.createElement = function (a, b) {
        return l(f, a, b, !0);
    };
    var u = f.createElementNS;
    f.createElementNS = function (a, b) {
        return "http://www.w3.org/1999/xhtml" === a ? f.createElement(b) : u.call(f, a, b);
    };
    var p = Element.prototype.attachShadow;
    p && Object.defineProperty(Element.prototype, "attachShadow", {
        value: function value(a) {
            a = p.call(this, a);
            g().c(a);
            return a;
        }
    });
    var v = f.importNode;
    f.importNode = function (a, b) {
        a = v.call(f, a, b);
        g().b(a.nodeType === Node.ELEMENT_NODE ? [a] : a.childNodes);
        return a;
    };
    var w = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function (a, b) {
        m(this, a, b, w);
    };
    var x = Element.prototype.removeAttribute;
    Element.prototype.removeAttribute = function (a) {
        m(this, a, null, x);
    };
    Object.defineProperty(window, "customElements", {
        value: new c(),
        configurable: !0,
        enumerable: !0
    });
    window.CustomElements = {
        takeRecords: function takeRecords() {
            g().g && g().g();
        }
    };
})();

//# sourceMappingURL=custom-elements.min.js.map

/***/ }),
/* 237 */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * This shim allows elements written in, or compiled to, ES5 to work on native
 * implementations of Custom Elements v1. It sets new.target to the value of
 * this.constructor so that the native HTMLElement constructor can access the
 * current under-construction element's definition.
 *
 * Because `new.target` is a syntax error in VMs that don't support it, this
 * shim must only be loaded in browsers that do.
 */
(function () {
  var origHTMLElement = HTMLElement;
  // TODO(justinfagnani): Tests!!
  window.HTMLElement = function _target() {
    // prefer new.target for elements that call super() constructors or
    // Reflect.construct directly
    var newTarget = (this instanceof _target ? this.constructor : void 0) || this.constructor;
    return Reflect.construct(origHTMLElement, [], newTarget);
  };
  HTMLElement.prototype = Object.create(origHTMLElement.prototype, {
    constructor: { value: HTMLElement, configurable: true, writable: true }
  });
})();

/***/ }),
/* 238 */
/***/ (function(module, exports) {

/* eslint-disable func-names, prefer-rest-params */

// Stub window.performance for Safari
window.performance = window.performance || false;

// Polyfill element.remove for IE11
// See https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove#Polyfill
(function (arr) {
	arr.forEach(function (item) {
		if (Object.prototype.hasOwnProperty.call(item, 'remove')) {
			return;
		}
		Object.defineProperty(item, 'remove', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function remove() {
				this.parentNode.removeChild(this);
			}
		});
	});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

// There's a load order issue between the AMP runtime v0.js custom element polyfill and the @webcomponents/custom-elements version.
// On Safari devices the polyfill looks for HTMLElement.addEventListener that it defines accessible through getOwnPropertyDescriptors.
// Since the @webcomponents/custom-elements polyfill overwrites HTMLElement with a custom class later that relies on
// prototypical inheritance instead, it doesn't exist. Just add this as a passthrough until a better solution can be found.
(function (arr) {
	arr.forEach(function (item) {
		if (Object.prototype.hasOwnProperty.call(item, 'addEventListener')) {
			return;
		}
		var oldListener = item.addEventListener;
		Object.defineProperty(item, 'addEventListener', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function addEventListener() {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				oldListener.apply(this, args);
			}
		});
	});
})([HTMLElement.prototype]);

// Polyfill element.append for IE11
// See https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append#Polyfill
(function (arr) {
	arr.forEach(function (item) {
		if (Object.prototype.hasOwnProperty.call(item, 'append')) {
			return;
		}
		Object.defineProperty(item, 'append', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function append() {
				var argArr = Array.prototype.slice.call(arguments);
				var docFrag = document.createDocumentFragment();

				argArr.forEach(function (argItem) {
					var isNode = argItem instanceof Node;
					docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
				});

				this.appendChild(docFrag);
			}
		});
	});
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

/***/ }),
/* 239 */
/***/ (function(module, exports) {

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProgressiveImage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_utilities__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_thumbor_utilities__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ProgressiveImage = /** @class */ (function (_super) {
    __extends(ProgressiveImage, _super);
    function ProgressiveImage() {
        var _this = _super.call(this) || this;
        _this.imageEnhancedEventListener = _this.imageEnhanced.bind(_this);
        _this.handleImageErrorEventListener = _this.handleImageError.bind(_this);
        // create the image tag
        _this.imgTag = document.createElement('img');
        _this.imgTag.style.display = 'none';
        return _this;
    }
    Object.defineProperty(ProgressiveImage, "observedAttributes", {
        /**
         * Attributes which fire attributeChangedCallback
         */
        get: function () {
            return [
                'src',
                'background-image',
                'width',
                'enhanced',
                'alt'
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressiveImage.prototype, "src", {
        /**
         * This is the image src.
         */
        get: function () {
            return this.getAttribute('src');
        },
        set: function (src) {
            this.setAttribute('src', src);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressiveImage.prototype, "backgroundImage", {
        /**
         * Optional background image property will override image source
         * and load image as background image instead of child image element
         */
        get: function () {
            return this.getAttribute('background-image');
        },
        set: function (img) {
            this.setAttribute('background-image', img);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressiveImage.prototype, "width", {
        /**
         * This is the width of the image you want to load.
         */
        get: function () {
            return parseInt(this.getAttribute('width')) || 960;
        },
        set: function (width) {
            this.setAttribute('width', "" + width);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressiveImage.prototype, "alt", {
        /**
         * This is the alt text of the image.
         */
        get: function () {
            return this.getAttribute('alt');
        },
        set: function (alt) {
            this.setAttribute('alt', alt);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressiveImage.prototype, "enhanced", {
        /**
         * This is a flag to denote that an image has been enhanced.
         */
        get: function () {
            return this.hasAttribute('enhanced') && this.getAttribute('enhanced') !== 'false';
        },
        set: function (enhanced) {
            if (enhanced) {
                this.setAttribute('enhanced', '');
            }
            else {
                this.removeAttribute('enhanced');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This is a standard Custom Element Lifecycle hook for when the element is attached to the DOM
     */
    ProgressiveImage.prototype.connectedCallback = function () {
        this.init();
    };
    /**
     * This is a standard Custom Element lifecycle hook for when any attrs change on the element.
     */
    ProgressiveImage.prototype.attributeChangedCallback = function (attributeName, oldValue, newValue) {
        if (newValue === oldValue) {
            return;
        }
        switch (attributeName) {
            case 'src':
            case 'background-image':
                // If it's a gif, just load the full res version
                if (newValue.indexOf('.gif') > -1) {
                    this.isGif = true;
                    this.highResSrc = newValue;
                    this.enhanceImage();
                    return;
                }
                this.highResSrc = __WEBPACK_IMPORTED_MODULE_1__utilities_thumbor_utilities__["a" /* ThumborUtilities */].prependThumbor(newValue, this.width, 1);
                if (this.shouldEnhanceImage()) {
                    this.enhanceImage();
                }
                break;
            case 'alt':
                this.imgTag.alt = newValue || '';
                break;
        }
    };
    /**
     * registerScrollHandler
     * handles image enhancement checks onScroll
     *
     */
    ProgressiveImage.prototype.registerScrollHandler = function () {
        var _this = this;
        document.addEventListener('scroll', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["a" /* throttle */])(function () {
            if (_this.shouldEnhanceImage()) {
                _this.enhanceImage();
            }
        }));
    };
    /**
     * shouldEnhanceImage
     * checks if the element has passed the threshold
     * where it should swap the lowResSrc for the highResSrc
     *
     * @returns boolean
     */
    ProgressiveImage.prototype.shouldEnhanceImage = function () {
        return !this.enhanced && this.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop <= (window.innerHeight * 2) + window.pageYOffset;
    };
    /**
     * enhanceImage
     * Sets the image src to a high-res version
     *
     * @memberOf ProgressiveImage
     */
    ProgressiveImage.prototype.enhanceImage = function () {
        this.imgTag.src = this.highResSrc;
        this.imgTag.addEventListener('load', this.imageEnhancedEventListener);
        if (this.isGif) {
            this.classList.add('initial-width');
        }
    };
    /**
     * Flags image as enhanced and removes load event listener
     */
    ProgressiveImage.prototype.imageEnhanced = function () {
        if (this.backgroundImage) {
            this.style.backgroundImage = "url(" + this.highResSrc + ")";
        }
        else {
            this.imgTag.style.display = 'block';
        }
        this.classList.add('show-img');
        this.enhanced = true;
        this.imgTag.removeEventListener('load', this.imageEnhancedEventListener);
    };
    /**
     * Handle the case where image load errors, stop trying to load image
     */
    ProgressiveImage.prototype.handleImageError = function () {
        this.enhanced = true;
    };
    /**
     * Initialize image and attach listeners
     */
    ProgressiveImage.prototype.init = function () {
        this.imgTag.alt = this.alt || '';
        this.imgTag.addEventListener('load', this.imageEnhancedEventListener);
        this.imgTag.addEventListener('error', this.handleImageErrorEventListener);
        if (!this.backgroundImage) {
            this.appendChild(this.imgTag);
        }
        if (this.enhanced) {
            return;
        }
        this.registerScrollHandler();
    };
    return ProgressiveImage;
}(HTMLElement));

customElements.define('progressive-image', ProgressiveImage);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./progressive-image.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./progressive-image.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progressive_image_progressive_image_component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_progressive_image_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_progressive_image_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_progressive_image_scss__);




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumborUtilities; });
var ThumborUtilities = /** @class */ (function () {
    function ThumborUtilities() {
    }
    /**
     * Make urls https
     * @param url
     *
     * @returns string
    **/
    ThumborUtilities.httpsUrl = function (url) {
        return (url || '').replace(/^http:/, 'https:');
    };
    /**
     * Prepend relative images with blogs-images
     * @param url
     *
     * @returns string
    **/
    ThumborUtilities.normalizeImageDomain = function (url) {
        var fullUrl = '';
        url = url || '';
        if (url.startsWith('//')) {
            fullUrl = "https:" + url;
        }
        else if (url.startsWith('/')) {
            fullUrl = "https://blogs-images.forbes.com" + url;
        }
        else {
            fullUrl = ThumborUtilities.httpsUrl(url);
        }
        return fullUrl;
    };
    ThumborUtilities.adjustExistingThumborUrl = function (url, factor) {
        var sizeString = url.match(/[0-9]+x[0-9]+/)[0];
        var width = parseInt(sizeString.split('x')[0]) || 0;
        var height = parseInt(sizeString.split('x')[1]) || 0;
        width *= factor;
        height *= factor;
        return url.replace(sizeString, width + "x" + height);
    };
    /**
     * Prepend image urls with thumbor path
     * @param url
     * @param width
     * @param height
     *
     * @returns string
    **/
    ThumborUtilities.prependThumbor = function (url, width, factor) {
        if (url === void 0) { url = ''; }
        if ((url || '').indexOf('thumbor') > -1) {
            return this.adjustExistingThumborUrl(url, factor);
        }
        if ((url || '').indexOf('gravatar') > -1) {
            return url;
        }
        var normalizedUrl = this.normalizeImageDomain(url);
        if (!this.isOnThumborWhitelist(normalizedUrl)) {
            return normalizedUrl;
        }
        var encodedUrl = encodeURIComponent(normalizedUrl);
        return "https://thumbor.forbes.com/thumbor/" + width * factor + "x0/" + encodedUrl;
    };
    /**
     * isOnThumborWhitelist
     * checks to see if an image is permitted to pass through our Thumbor server
     *
     * @param url
     *
     * @returns boolean
    **/
    ThumborUtilities.isOnThumborWhitelist = function (url) {
        return !!this.thumborWhitelist.find(function (thumborUrl) { return url.indexOf(thumborUrl) > -1; });
    };
    ThumborUtilities.thumborWhitelist = [
        'specials-images.forbes.com',
        'specials-images.forbesimg.com',
        'i.forbesimg.com',
        'b-i.forbesimg.com',
        'images.forbes.com',
        'blogs-images.forbes.com'
    ];
    return ThumborUtilities;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;
function throttle(fn) {
    var _this = this;
    var threshold = 100;
    var last;
    var deferTimer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = _this || {};
        var now = +new Date();
        if (last && (now < last + threshold)) {
            clearTimeout(deferTimer);
            var next = threshold + now + 1;
            deferTimer = setTimeout(function () {
                last = now;
                context.deferred = true;
                fn.apply(context, args);
            }, next - last);
        }
        else {
            last = now;
            fn.apply(context, args);
        }
    };
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "progressive-image {\n  position: relative;\n  display: block; }\n  progressive-image:before {\n    content: '';\n    display: block;\n    padding-bottom: 56.25%; }\n  progressive-image.show-img::before {\n    content: none; }\n  progressive-image.initial-width {\n    display: inline-block; }\n    progressive-image.initial-width img {\n      padding-right: 0.5rem;\n      width: initial; }\n  progressive-image img {\n    display: none;\n    width: 100%; }\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWZhYjQ2ZDY5NmZmMzY3ZjkwZDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2dyZXNzaXZlLWltYWdlL3Byb2dyZXNzaXZlLWltYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3Byb2dyZXNzaXZlLWltYWdlLnNjc3M/ZDY1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL3RodW1ib3IudXRpbGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdXRpbGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcHJvZ3Jlc3NpdmUtaW1hZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9maXhVcmxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVrRDtBQUNnQjtBQUVsRTtJQUFzQyxvQ0FBVztJQWdGaEQ7UUFBQSxZQUNDLGlCQUFPLFNBS1A7UUFyRU8sZ0NBQTBCLEdBQWtCLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQzFFLG1DQUE2QixHQUFrQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBaUV2Rix1QkFBdUI7UUFDdkIsS0FBSSxDQUFDLE1BQU0sR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOztJQUNwQyxDQUFDO0lBbEZELHNCQUFXLHNDQUFrQjtRQUg3Qjs7V0FFRzthQUNIO1lBQ0MsT0FBTztnQkFDTixLQUFLO2dCQUNMLGtCQUFrQjtnQkFDbEIsT0FBTztnQkFDUCxVQUFVO2dCQUNWLEtBQUs7YUFDTCxDQUFDO1FBQ0gsQ0FBQzs7O09BQUE7SUFXRCxzQkFBVyxpQ0FBRztRQUhkOztXQUVHO2FBQ0g7WUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQzthQUVELFVBQWUsR0FBVztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQVVELHNCQUFXLDZDQUFlO1FBSjFCOzs7V0FHRzthQUNIO1lBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUMsQ0FBQzthQUVELFVBQTJCLEdBQVc7WUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDOzs7T0FKQTtJQVNELHNCQUFXLG1DQUFLO1FBSGhCOztXQUVHO2FBQ0g7WUFDQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ3BELENBQUM7YUFFRCxVQUFpQixLQUFhO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUcsS0FBTyxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BSkE7SUFTRCxzQkFBVyxpQ0FBRztRQUhkOztXQUVHO2FBQ0g7WUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQzthQUVELFVBQWUsR0FBVztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQVNELHNCQUFXLHNDQUFRO1FBSG5COztXQUVHO2FBQ0g7WUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxPQUFPLENBQUM7UUFDbkYsQ0FBQzthQUVELFVBQW9CLFFBQWlCO1lBQ3BDLElBQUksUUFBUSxFQUFFO2dCQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDakM7UUFDRixDQUFDOzs7T0FSQTtJQWtCRDs7T0FFRztJQUNJLDRDQUFpQixHQUF4QjtRQUNDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRDs7T0FFRztJQUNJLG1EQUF3QixHQUEvQixVQUFnQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7UUFDaEUsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQzFCLE9BQU87U0FDUDtRQUVELFFBQVEsYUFBYSxFQUFFO1lBQ3RCLEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxrQkFBa0I7Z0JBQ3RCLGdEQUFnRDtnQkFDaEQsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7b0JBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsT0FBTztpQkFDUDtnQkFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLHNGQUFnQixDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFM0UsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNwQjtnQkFDRixNQUFNO1lBRU4sS0FBSyxLQUFLO2dCQUNULElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLFFBQVEsSUFBSSxFQUFFLENBQUM7Z0JBQ2pDLE1BQU07U0FDUDtJQUNGLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssZ0RBQXFCLEdBQTdCO1FBQUEsaUJBTUM7UUFMQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLDZGQUFRLENBQUM7WUFDNUMsSUFBSSxLQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDOUIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3BCO1FBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyw2Q0FBa0IsR0FBMUI7UUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN0SyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx1Q0FBWSxHQUFuQjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFdEUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDcEM7SUFDRixDQUFDO0lBRUQ7O09BRUc7SUFDSyx3Q0FBYSxHQUFyQjtRQUNDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFPLElBQUksQ0FBQyxVQUFVLE1BQUcsQ0FBQztTQUN2RDthQUFNO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUNwQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7T0FFRztJQUNLLDJDQUFnQixHQUF4QjtRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNLLCtCQUFJLEdBQVo7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUUxRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDLENBN01xQyxXQUFXLEdBNk1oRDs7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDLENBQUM7Ozs7Ozs7QUNsTjdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7OztBQ3BCeUQ7QUFDaEI7Ozs7Ozs7O0FDRHpDO0FBQUE7SUFBQTtJQXlGQSxDQUFDO0lBL0VBOzs7OztPQUtJO0lBQ1UseUJBQVEsR0FBdEIsVUFBdUIsR0FBVztRQUNqQyxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7OztPQUtJO0lBQ1cscUNBQW9CLEdBQW5DLFVBQW9DLEdBQVc7UUFDOUMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1FBRWhCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QixPQUFPLEdBQUcsV0FBUyxHQUFLLENBQUM7U0FDekI7YUFBTSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxHQUFHLG9DQUFrQyxHQUFLLENBQUM7U0FDbEQ7YUFBTTtZQUNOLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekM7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBRWMseUNBQXdCLEdBQXZDLFVBQXdDLEdBQVcsRUFBRSxNQUFjO1FBQ2xFLElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckQsS0FBSyxJQUFJLE1BQU0sQ0FBQztRQUNoQixNQUFNLElBQUksTUFBTSxDQUFDO1FBRWpCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUssS0FBSyxTQUFJLE1BQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7OztPQU9JO0lBQ1UsK0JBQWMsR0FBNUIsVUFBNkIsR0FBZ0IsRUFBRSxLQUFhLEVBQUUsTUFBYztRQUEvQyw4QkFBZ0I7UUFDNUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDekMsT0FBTyxHQUFHLENBQUM7U0FDWDtRQUVELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzlDLE9BQU8sYUFBYSxDQUFDO1NBQ3JCO1FBRUQsSUFBTSxVQUFVLEdBQUcsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsT0FBTyx3Q0FBc0MsS0FBSyxHQUFHLE1BQU0sV0FBTSxVQUFZLENBQUM7SUFDL0UsQ0FBQztJQUVEOzs7Ozs7O09BT0k7SUFDVSxxQ0FBb0IsR0FBbEMsVUFBbUMsR0FBVztRQUM3QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQUMsVUFBVSxJQUFLLFVBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBdkZjLGlDQUFnQixHQUFHO1FBQ2pDLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0IsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIseUJBQXlCO0tBQ3pCLENBQUM7SUFpRkgsdUJBQUM7Q0FBQTtBQXpGNEI7Ozs7Ozs7OztBQ0F2QixrQkFBbUIsRUFBWTtJQUFyQyxpQkFzQkM7SUFyQkcsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLElBQUksSUFBSSxDQUFDO0lBQ1QsSUFBSSxVQUFVLENBQUM7SUFFZixPQUFPO1FBQUMsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFDWCxJQUFNLE9BQU8sR0FBUSxLQUFJLElBQUksRUFBRSxDQUFDO1FBQ2hDLElBQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsU0FBUyxDQUFDLEVBQUU7WUFDbEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pCLElBQU0sSUFBSSxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQ3BCLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ1gsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVCLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDbkI7YUFBTTtZQUNILElBQUksR0FBRyxHQUFHLENBQUM7WUFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7QUN0QkQ7QUFDQTs7O0FBR0E7QUFDQSw0Q0FBNkMsdUJBQXVCLG1CQUFtQixFQUFFLDhCQUE4QixrQkFBa0IscUJBQXFCLDZCQUE2QixFQUFFLHdDQUF3QyxvQkFBb0IsRUFBRSxxQ0FBcUMsNEJBQTRCLEVBQUUsMkNBQTJDLDhCQUE4Qix1QkFBdUIsRUFBRSwyQkFBMkIsb0JBQW9CLGtCQUFrQixFQUFFOztBQUVuZTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0Esa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxnQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFmYWI0NmQ2OTZmZjM2N2Y5MGQ5IiwiaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICcuLi91dGlsaXRpZXMvdXRpbGl0aWVzJztcbmltcG9ydCB7IFRodW1ib3JVdGlsaXRpZXMgfSBmcm9tICcuLi91dGlsaXRpZXMvdGh1bWJvci51dGlsaXRpZXMnO1xuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NpdmVJbWFnZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0LyoqXG5cdCAqIEF0dHJpYnV0ZXMgd2hpY2ggZmlyZSBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcblx0ICovXG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQnc3JjJyxcblx0XHRcdCdiYWNrZ3JvdW5kLWltYWdlJyxcblx0XHRcdCd3aWR0aCcsXG5cdFx0XHQnZW5oYW5jZWQnLFxuXHRcdFx0J2FsdCdcblx0XHRdO1xuXHR9XG5cblx0cHVibGljIGltZ1RhZzogSFRNTEltYWdlRWxlbWVudDtcblx0cHVibGljIGhpZ2hSZXNTcmM6IHN0cmluZztcblx0cHJpdmF0ZSBpc0dpZjogYm9vbGVhbjtcblx0cHJpdmF0ZSBpbWFnZUVuaGFuY2VkRXZlbnRMaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciA9IHRoaXMuaW1hZ2VFbmhhbmNlZC5iaW5kKHRoaXMpO1xuXHRwcml2YXRlIGhhbmRsZUltYWdlRXJyb3JFdmVudExpc3RlbmVyOiBFdmVudExpc3RlbmVyID0gdGhpcy5oYW5kbGVJbWFnZUVycm9yLmJpbmQodGhpcyk7XG5cblx0LyoqXG5cdCAqIFRoaXMgaXMgdGhlIGltYWdlIHNyYy5cblx0ICovXG5cdHB1YmxpYyBnZXQgc3JjKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgc3JjKHNyYzogc3RyaW5nKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG5cdH1cblxuXHQvKipcblx0ICogT3B0aW9uYWwgYmFja2dyb3VuZCBpbWFnZSBwcm9wZXJ0eSB3aWxsIG92ZXJyaWRlIGltYWdlIHNvdXJjZVxuXHQgKiBhbmQgbG9hZCBpbWFnZSBhcyBiYWNrZ3JvdW5kIGltYWdlIGluc3RlYWQgb2YgY2hpbGQgaW1hZ2UgZWxlbWVudFxuXHQgKi9cblx0cHVibGljIGdldCBiYWNrZ3JvdW5kSW1hZ2UoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2JhY2tncm91bmQtaW1hZ2UnKTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgYmFja2dyb3VuZEltYWdlKGltZzogc3RyaW5nKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2JhY2tncm91bmQtaW1hZ2UnLCBpbWcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgaXMgdGhlIHdpZHRoIG9mIHRoZSBpbWFnZSB5b3Ugd2FudCB0byBsb2FkLlxuXHQgKi9cblx0cHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBwYXJzZUludCh0aGlzLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSkgfHwgOTYwO1xuXHR9XG5cblx0cHVibGljIHNldCB3aWR0aCh3aWR0aDogbnVtYmVyKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7d2lkdGh9YCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhpcyBpcyB0aGUgYWx0IHRleHQgb2YgdGhlIGltYWdlLlxuXHQgKi9cblx0cHVibGljIGdldCBhbHQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FsdCcpO1xuXHR9XG5cblx0cHVibGljIHNldCBhbHQoYWx0OiBzdHJpbmcpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIGlzIGEgZmxhZyB0byBkZW5vdGUgdGhhdCBhbiBpbWFnZSBoYXMgYmVlbiBlbmhhbmNlZC5cblx0ICovXG5cdHB1YmxpYyBnZXQgZW5oYW5jZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdlbmhhbmNlZCcpICYmIHRoaXMuZ2V0QXR0cmlidXRlKCdlbmhhbmNlZCcpICE9PSAnZmFsc2UnO1xuXHR9XG5cblx0cHVibGljIHNldCBlbmhhbmNlZChlbmhhbmNlZDogYm9vbGVhbikge1xuXHRcdGlmIChlbmhhbmNlZCkge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2VuaGFuY2VkJywgJycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZW5oYW5jZWQnKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Ly8gY3JlYXRlIHRoZSBpbWFnZSB0YWdcblx0XHR0aGlzLmltZ1RhZyA9IDxIVE1MSW1hZ2VFbGVtZW50PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHR0aGlzLmltZ1RhZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgaXMgYSBzdGFuZGFyZCBDdXN0b20gRWxlbWVudCBMaWZlY3ljbGUgaG9vayBmb3Igd2hlbiB0aGUgZWxlbWVudCBpcyBhdHRhY2hlZCB0byB0aGUgRE9NXG5cdCAqL1xuXHRwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhpcyBpcyBhIHN0YW5kYXJkIEN1c3RvbSBFbGVtZW50IGxpZmVjeWNsZSBob29rIGZvciB3aGVuIGFueSBhdHRycyBjaGFuZ2Ugb24gdGhlIGVsZW1lbnQuXG5cdCAqL1xuXHRwdWJsaWMgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk6IHZvaWQge1xuXHRcdGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKGF0dHJpYnV0ZU5hbWUpIHtcblx0XHRcdGNhc2UgJ3NyYyc6XG5cdFx0XHRjYXNlICdiYWNrZ3JvdW5kLWltYWdlJzpcblx0XHRcdFx0Ly8gSWYgaXQncyBhIGdpZiwganVzdCBsb2FkIHRoZSBmdWxsIHJlcyB2ZXJzaW9uXG5cdFx0XHRcdGlmIChuZXdWYWx1ZS5pbmRleE9mKCcuZ2lmJykgPiAtMSkge1xuXHRcdFx0XHRcdHRoaXMuaXNHaWYgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuaGlnaFJlc1NyYyA9IG5ld1ZhbHVlO1xuXHRcdFx0XHRcdHRoaXMuZW5oYW5jZUltYWdlKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5oaWdoUmVzU3JjID0gVGh1bWJvclV0aWxpdGllcy5wcmVwZW5kVGh1bWJvcihuZXdWYWx1ZSwgdGhpcy53aWR0aCwgMSk7XG5cblx0XHRcdFx0aWYgKHRoaXMuc2hvdWxkRW5oYW5jZUltYWdlKCkpIHtcblx0XHRcdFx0XHR0aGlzLmVuaGFuY2VJbWFnZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnYWx0Jzpcblx0XHRcdFx0dGhpcy5pbWdUYWcuYWx0ID0gbmV3VmFsdWUgfHwgJyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiByZWdpc3RlclNjcm9sbEhhbmRsZXJcblx0ICogaGFuZGxlcyBpbWFnZSBlbmhhbmNlbWVudCBjaGVja3Mgb25TY3JvbGxcblx0ICpcblx0ICovXG5cdHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxIYW5kbGVyKCk6IHZvaWQge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLnNob3VsZEVuaGFuY2VJbWFnZSgpKSB7XG5cdFx0XHRcdHRoaXMuZW5oYW5jZUltYWdlKCk7XG5cdFx0XHR9XG5cdFx0fSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHNob3VsZEVuaGFuY2VJbWFnZVxuXHQgKiBjaGVja3MgaWYgdGhlIGVsZW1lbnQgaGFzIHBhc3NlZCB0aGUgdGhyZXNob2xkXG5cdCAqIHdoZXJlIGl0IHNob3VsZCBzd2FwIHRoZSBsb3dSZXNTcmMgZm9yIHRoZSBoaWdoUmVzU3JjXG5cdCAqXG5cdCAqIEByZXR1cm5zIGJvb2xlYW5cblx0ICovXG5cdHByaXZhdGUgc2hvdWxkRW5oYW5jZUltYWdlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5lbmhhbmNlZCAmJiB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgPD0gKHdpbmRvdy5pbm5lckhlaWdodCAqIDIpICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHR9XG5cblx0LyoqXG5cdCAqIGVuaGFuY2VJbWFnZVxuXHQgKiBTZXRzIHRoZSBpbWFnZSBzcmMgdG8gYSBoaWdoLXJlcyB2ZXJzaW9uXG5cdCAqXG5cdCAqIEBtZW1iZXJPZiBQcm9ncmVzc2l2ZUltYWdlXG5cdCAqL1xuXHRwdWJsaWMgZW5oYW5jZUltYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMuaW1nVGFnLnNyYyA9IHRoaXMuaGlnaFJlc1NyYztcblx0XHR0aGlzLmltZ1RhZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy5pbWFnZUVuaGFuY2VkRXZlbnRMaXN0ZW5lcik7XG5cblx0XHRpZiAodGhpcy5pc0dpZikge1xuXHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKCdpbml0aWFsLXdpZHRoJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEZsYWdzIGltYWdlIGFzIGVuaGFuY2VkIGFuZCByZW1vdmVzIGxvYWQgZXZlbnQgbGlzdGVuZXJcblx0ICovXG5cdHByaXZhdGUgaW1hZ2VFbmhhbmNlZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5iYWNrZ3JvdW5kSW1hZ2UpIHtcblx0XHRcdHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuaGlnaFJlc1NyY30pYDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pbWdUYWcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0fVxuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZCgnc2hvdy1pbWcnKTtcblx0XHR0aGlzLmVuaGFuY2VkID0gdHJ1ZTtcblx0XHR0aGlzLmltZ1RhZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy5pbWFnZUVuaGFuY2VkRXZlbnRMaXN0ZW5lcik7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlIHRoZSBjYXNlIHdoZXJlIGltYWdlIGxvYWQgZXJyb3JzLCBzdG9wIHRyeWluZyB0byBsb2FkIGltYWdlXG5cdCAqL1xuXHRwcml2YXRlIGhhbmRsZUltYWdlRXJyb3IoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmhhbmNlZCA9IHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSBpbWFnZSBhbmQgYXR0YWNoIGxpc3RlbmVyc1xuXHQgKi9cblx0cHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuaW1nVGFnLmFsdCA9IHRoaXMuYWx0IHx8ICcnO1xuXHRcdHRoaXMuaW1nVGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLmltYWdlRW5oYW5jZWRFdmVudExpc3RlbmVyKTtcblx0XHR0aGlzLmltZ1RhZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuaGFuZGxlSW1hZ2VFcnJvckV2ZW50TGlzdGVuZXIpO1xuXG5cdFx0aWYgKCF0aGlzLmJhY2tncm91bmRJbWFnZSkge1xuXHRcdFx0dGhpcy5hcHBlbmRDaGlsZCh0aGlzLmltZ1RhZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZW5oYW5jZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnJlZ2lzdGVyU2Nyb2xsSGFuZGxlcigpO1xuXHR9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncHJvZ3Jlc3NpdmUtaW1hZ2UnLCBQcm9ncmVzc2l2ZUltYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9ncmVzc2l2ZS1pbWFnZS9wcm9ncmVzc2l2ZS1pbWFnZS5jb21wb25lbnQudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9wcm9ncmVzc2l2ZS1pbWFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcHJvZ3Jlc3NpdmUtaW1hZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9wcm9ncmVzc2l2ZS1pbWFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvcHJvZ3Jlc3NpdmUtaW1hZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJy4vcHJvZ3Jlc3NpdmUtaW1hZ2UvcHJvZ3Jlc3NpdmUtaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCAnLi9zdHlsZXMvcHJvZ3Jlc3NpdmUtaW1hZ2Uuc2Nzcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi50cyIsImV4cG9ydCBjbGFzcyBUaHVtYm9yVXRpbGl0aWVzIHtcblx0cHJpdmF0ZSBzdGF0aWMgdGh1bWJvcldoaXRlbGlzdCA9IFtcblx0XHQnc3BlY2lhbHMtaW1hZ2VzLmZvcmJlcy5jb20nLFxuXHRcdCdzcGVjaWFscy1pbWFnZXMuZm9yYmVzaW1nLmNvbScsXG5cdFx0J2kuZm9yYmVzaW1nLmNvbScsXG5cdFx0J2ItaS5mb3JiZXNpbWcuY29tJyxcblx0XHQnaW1hZ2VzLmZvcmJlcy5jb20nLFxuXHRcdCdibG9ncy1pbWFnZXMuZm9yYmVzLmNvbSdcblx0XTtcblxuXHQvKipcblx0ICogTWFrZSB1cmxzIGh0dHBzXG5cdCAqIEBwYXJhbSB1cmxcblx0ICogXG5cdCAqIEByZXR1cm5zIHN0cmluZ1xuIFx0KiovXG5cdHB1YmxpYyBzdGF0aWMgaHR0cHNVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHJldHVybiAodXJsIHx8ICcnKS5yZXBsYWNlKC9eaHR0cDovLCAnaHR0cHM6Jyk7XG5cdH1cblxuXHQvKipcblx0ICogUHJlcGVuZCByZWxhdGl2ZSBpbWFnZXMgd2l0aCBibG9ncy1pbWFnZXNcblx0ICogQHBhcmFtIHVybFxuXHQgKiBcblx0ICogQHJldHVybnMgc3RyaW5nXG4gXHQqKi9cblx0cHJpdmF0ZSBzdGF0aWMgbm9ybWFsaXplSW1hZ2VEb21haW4odXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGxldCBmdWxsVXJsID0gJyc7XG5cdFx0dXJsID0gdXJsIHx8ICcnO1xuXG5cdFx0aWYgKHVybC5zdGFydHNXaXRoKCcvLycpKSB7XG5cdFx0XHRmdWxsVXJsID0gYGh0dHBzOiR7dXJsfWA7XG5cdFx0fSBlbHNlIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSB7XG5cdFx0XHRmdWxsVXJsID0gYGh0dHBzOi8vYmxvZ3MtaW1hZ2VzLmZvcmJlcy5jb20ke3VybH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmdWxsVXJsID0gVGh1bWJvclV0aWxpdGllcy5odHRwc1VybCh1cmwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmdWxsVXJsO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgYWRqdXN0RXhpc3RpbmdUaHVtYm9yVXJsKHVybDogc3RyaW5nLCBmYWN0b3I6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0Y29uc3Qgc2l6ZVN0cmluZyA9IHVybC5tYXRjaCgvWzAtOV0reFswLTldKy8pWzBdO1xuXHRcdGxldCB3aWR0aCA9IHBhcnNlSW50KHNpemVTdHJpbmcuc3BsaXQoJ3gnKVswXSkgfHwgMDtcblx0XHRsZXQgaGVpZ2h0ID0gcGFyc2VJbnQoc2l6ZVN0cmluZy5zcGxpdCgneCcpWzFdKSB8fCAwO1xuXG5cdFx0d2lkdGggKj0gZmFjdG9yO1xuXHRcdGhlaWdodCAqPSBmYWN0b3I7XG5cblx0XHRyZXR1cm4gdXJsLnJlcGxhY2Uoc2l6ZVN0cmluZywgYCR7d2lkdGh9eCR7aGVpZ2h0fWApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByZXBlbmQgaW1hZ2UgdXJscyB3aXRoIHRodW1ib3IgcGF0aFxuXHQgKiBAcGFyYW0gdXJsXG5cdCAqIEBwYXJhbSB3aWR0aFxuXHQgKiBAcGFyYW0gaGVpZ2h0XG5cdCAqIFxuXHQgKiBAcmV0dXJucyBzdHJpbmdcbiBcdCoqL1xuXHRwdWJsaWMgc3RhdGljIHByZXBlbmRUaHVtYm9yKHVybDogc3RyaW5nID0gJycsIHdpZHRoOiBudW1iZXIsIGZhY3RvcjogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRpZiAoKHVybCB8fCAnJykuaW5kZXhPZigndGh1bWJvcicpID4gLTEpIHtcblx0XHRcdHJldHVybiB0aGlzLmFkanVzdEV4aXN0aW5nVGh1bWJvclVybCh1cmwsIGZhY3Rvcik7XG5cdFx0fVxuXG5cdFx0aWYgKCh1cmwgfHwgJycpLmluZGV4T2YoJ2dyYXZhdGFyJykgPiAtMSkge1xuXHRcdFx0cmV0dXJuIHVybDtcblx0XHR9XG5cblx0XHRjb25zdCBub3JtYWxpemVkVXJsID0gdGhpcy5ub3JtYWxpemVJbWFnZURvbWFpbih1cmwpO1xuXHRcdGlmICghdGhpcy5pc09uVGh1bWJvcldoaXRlbGlzdChub3JtYWxpemVkVXJsKSkge1xuXHRcdFx0cmV0dXJuIG5vcm1hbGl6ZWRVcmw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZW5jb2RlZFVybCA9IGVuY29kZVVSSUNvbXBvbmVudChub3JtYWxpemVkVXJsKTtcblx0XHRyZXR1cm4gYGh0dHBzOi8vdGh1bWJvci5mb3JiZXMuY29tL3RodW1ib3IvJHt3aWR0aCAqIGZhY3Rvcn14MC8ke2VuY29kZWRVcmx9YDtcblx0fVxuXG5cdC8qKlxuXHQgKiBpc09uVGh1bWJvcldoaXRlbGlzdFxuXHQgKiBjaGVja3MgdG8gc2VlIGlmIGFuIGltYWdlIGlzIHBlcm1pdHRlZCB0byBwYXNzIHRocm91Z2ggb3VyIFRodW1ib3Igc2VydmVyXG5cdCAqIFxuXHQgKiBAcGFyYW0gdXJsXG5cdCAqIFxuXHQgKiBAcmV0dXJucyBib29sZWFuXG4gXHQqKi9cblx0cHVibGljIHN0YXRpYyBpc09uVGh1bWJvcldoaXRlbGlzdCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMudGh1bWJvcldoaXRlbGlzdC5maW5kKCh0aHVtYm9yVXJsKSA9PiB1cmwuaW5kZXhPZih0aHVtYm9yVXJsKSA+IC0xKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxpdGllcy90aHVtYm9yLnV0aWxpdGllcy50cyIsImV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShmbjogRnVuY3Rpb24pOiBhbnkge1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IDEwMDtcbiAgICBsZXQgbGFzdDtcbiAgICBsZXQgZGVmZXJUaW1lcjtcblxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBjb250ZXh0OiBhbnkgPSB0aGlzIHx8IHt9O1xuICAgICAgICBjb25zdCBub3cgPSArbmV3IERhdGUoKTtcblxuICAgICAgICBpZiAobGFzdCAmJiAobm93IDwgbGFzdCArIHRocmVzaG9sZCkpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB0aHJlc2hvbGQgKyBub3cgKyAxO1xuICAgICAgICAgICAgZGVmZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxhc3QgPSBub3c7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kZWZlcnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9LCBuZXh0IC0gbGFzdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsaXRpZXMvdXRpbGl0aWVzLnRzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJwcm9ncmVzc2l2ZS1pbWFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcbiAgcHJvZ3Jlc3NpdmUtaW1hZ2U6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlOyB9XFxuICBwcm9ncmVzc2l2ZS1pbWFnZS5zaG93LWltZzo6YmVmb3JlIHtcXG4gICAgY29udGVudDogbm9uZTsgfVxcbiAgcHJvZ3Jlc3NpdmUtaW1hZ2UuaW5pdGlhbC13aWR0aCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgICBwcm9ncmVzc2l2ZS1pbWFnZS5pbml0aWFsLXdpZHRoIGltZyB7XFxuICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgICAgIHdpZHRoOiBpbml0aWFsOyB9XFxuICBwcm9ncmVzc2l2ZS1pbWFnZSBpbWcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3N0eWxlcy9wcm9ncmVzc2l2ZS1pbWFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0XHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdFx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlciBcblx0XHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0XHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0XHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG5cdH0pLFxuXHRnZXRFbGVtZW50ID0gKGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW8gPSB7fTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHRcdH07XG5cdH0pKGZ1bmN0aW9uIChzdHlsZVRhcmdldCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0eWxlVGFyZ2V0KVxuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdLFxuXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vZml4VXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0SW50byA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cdGlmICghc3R5bGVUYXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHN0eWxlVGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIHN0eWxlVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0c3R5bGVUYXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZVRhcmdldC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHN0eWxlVGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YXR0YWNoVGFnQXR0cnMoc3R5bGVFbGVtZW50LCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhdHRhY2hUYWdBdHRycyhsaW5rRWxlbWVudCwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XG5cdHJldHVybiBsaW5rRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXR0YWNoVGFnQXR0cnMoZWxlbWVudCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0LyogSWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpe1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XG5cblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKVxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9maXhVcmxzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fbs_video_fbs_video_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbs_video_fbs_video_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_performance__ = __webpack_require__(118);



Object(__WEBPACK_IMPORTED_MODULE_2__utils_performance__["a" /* performanceMark */])('Loaded');
window['fbs-video'] = new __WEBPACK_IMPORTED_MODULE_1__fbs_video_fbs_video_service__["a" /* FbsVideoService */]();
customElements.define('fbs-video', __WEBPACK_IMPORTED_MODULE_0__fbs_video_fbs_video_component__["a" /* FbsVideo */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbsVideo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_performance__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_throttle__ = __webpack_require__(242);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/**
 * This is a Custom Element for the Forbes Video Player
 * See Implementation Guide:
 *
 * https://github.forbes.com/Templates/fbs-video
 */
var FbsVideo = /** @class */ (function (_super) {
    __extends(FbsVideo, _super);
    function FbsVideo() {
        var _this = _super.call(this) || this;
        _this.init = false;
        _this.attributeHasChanged = false;
        /**
         * This is the Video Service
         */
        _this.videoService = window['fbs-video'];
        _this.windowBlurEventListener = _this.handleWindowBlur.bind(_this);
        _this.windowFocusEventListener = _this.handleWindowFocus.bind(_this);
        _this.windowScrollEventListener = Object(__WEBPACK_IMPORTED_MODULE_1__utils_throttle__["a" /* throttle */])(_this.handleWindowScroll, 50, _this);
        _this.videoPlayingEventListener = _this.handleVideoPlaying.bind(_this);
        _this.closeButtonTriggered = false;
        return _this;
    }
    Object.defineProperty(FbsVideo, "observedAttributes", {
        /**
         * List of attributes which trigger attributeChangedCallback
         */
        get: function () {
            return [
                'video-id',
                'player-id',
                'autoplay',
                'report-autoplay',
                'rendition-selection',
                'key-value-string',
                'muted',
                'ad-unit-path',
                'ads-disabled'
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "playing", {
        /**
         * This is the state of whether the video is playing or not
         */
        get: function () {
            var videoPlaying = this.videoPlayer && !this.videoPlayer.paused() && this.videoPlayer.currentTime() !== this.videoPlayer.duration();
            return this.adPlaying || videoPlaying || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "adPlaying", {
        /**
         * This is the state of whether an ad is playing or not
         */
        get: function () {
            return this.adPlayer && !this.adPlayer.paused() && this.adPlayer.currentTime() !== this.adPlayer.duration();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "duration", {
        /**
         * This is the state of whether an ad is playing or not
         */
        get: function () {
            return this.videoPlayer && this.videoPlayer.mediainfo && this.videoPlayer.mediainfo.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "pauseAd", {
        /**
         * Whether to pause the ad when scrolled out of view
         */
        get: function () {
            return this.hasAttribute('pause-ad') && this.getAttribute('pause-ad') !== 'false';
        },
        set: function (pauseAd) {
            if (pauseAd) {
                this.setAttribute('pause-ad', '');
            }
            else {
                this.removeAttribute('pause-ad');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "videoId", {
        /**
         * This is the ID of the Video Content
         */
        get: function () {
            return this.getAttribute('video-id');
        },
        set: function (videoId) {
            if (!videoId) {
                return;
            }
            this.setAttribute('video-id', videoId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "adsDisabled", {
        /**
         * Disables ads on this video player
         */
        get: function () {
            return this.hasAttribute('ads-disabled') && this.getAttribute('ads-disabled') !== 'false';
        },
        set: function (disabled) {
            if (disabled) {
                this.setAttribute('ads-disabled', '');
            }
            else {
                this.removeAttribute('ads-disabled');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "adUnitPath", {
        /**
         * This is the ad unit path
         */
        get: function () {
            return this.getAttribute('ad-unit-path') || this.getAdUnitPath();
        },
        set: function (adUnitPath) {
            if (!adUnitPath) {
                return;
            }
            this.setAttribute('ad-unit-path', adUnitPath);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "playerId", {
        /**
         * This is the ID of the Video Player
         */
        get: function () {
            return this.getAttribute('player-id');
        },
        set: function (playerId) {
            if (!playerId) {
                return;
            }
            this.setAttribute('player-id', playerId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "autoplay", {
        /**
         * This tells the video to autoplay on instantiation
         */
        get: function () {
            return this.hasAttribute('autoplay') && this.getAttribute('autoplay') !== 'false';
        },
        set: function (autoplay) {
            if (autoplay) {
                this.setAttribute('autoplay', '');
            }
            else {
                this.removeAttribute('autoplay');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "muted", {
        /**
         * This tells the video to muted on instantiation
         */
        get: function () {
            return this.hasAttribute('muted') && this.getAttribute('muted') !== 'false';
        },
        set: function (muted) {
            if (muted) {
                this.setAttribute('muted', '');
            }
            else {
                this.removeAttribute('muted');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "secretAutoplay", {
        /**
         * This hides autoplay from ads params for cases where autoplay videos are click to play
         */
        get: function () {
            return this.hasAttribute('secret-autoplay') && this.getAttribute('secret-autoplay') !== 'false';
        },
        set: function (secretAutoplay) {
            if (secretAutoplay) {
                this.setAttribute('secret-autoplay', '');
            }
            else {
                this.removeAttribute('secret-autoplay');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "renditionSelection", {
        /**
         * This is the resolution of the video
         */
        get: function () {
            return this.getAttribute('rendition-selection');
        },
        set: function (renditionSelection) {
            if (!renditionSelection) {
                return;
            }
            this.setAttribute('rendition-selection', renditionSelection);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "keyValueString", {
        /**
         * This is the key value string for ads. Key-value string should be in the form
         * "key1=value1&key2=value2&key3=value3"
         */
        get: function () {
            return this.getAttribute('key-value-string');
        },
        set: function (keyValueString) {
            if (!keyValueString) {
                return;
            }
            this.setAttribute('key-value-string', keyValueString);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "attrsSnapshot", {
        get: function () {
            return {
                videoId: this.videoId,
                playerId: this.playerId,
                autoplay: this.autoplay,
                secretAutoplay: this.secretAutoplay,
                renditionSelection: this.renditionSelection,
                keyValueString: this.keyValueString,
                videoElementId: this.videoElementId,
                adUnitPath: this.adUnitPath,
                adsDisabled: this.adsDisabled
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsVideo.prototype, "adPlayer", {
        /**
         * Return the underlying ad video player if one exists
         */
        get: function () {
            if (this.videoPlayer && this.videoPlayer.ima3 && !(this.videoPlayer.ima3 instanceof Function) && this.videoPlayer.ima3.adsManager) {
                return this.videoPlayer.ima3.adPlayer;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This is a standard attribute changed callback
     */
    FbsVideo.prototype.attributeChangedCallback = function (attributeName, oldValue, newValue) {
        this.attributeHasChanged = true;
        if (this.init && attributeName === 'video-id') {
            this.changeVideo(newValue);
        }
    };
    /**
     * This is a standard Custom Element Lifecycle hook for when the element is attached to the DOM
     */
    FbsVideo.prototype.connectedCallback = function () {
        var _this = this;
        this.isFocused = document.hasFocus();
        this.isVideoInView = this.checkIsVideoInView();
        // Wait until attribute has not changed during the interval
        var debounceInterval = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
            var playerData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.attributeHasChanged) return [3 /*break*/, 2];
                        clearInterval(debounceInterval);
                        this.videoElementId = this.attrsSnapshot.videoElementId = this.videoService.generateId();
                        this.insertVideoElement();
                        this.insertCloseButton();
                        return [4 /*yield*/, this.videoService.init(this.attrsSnapshot)];
                    case 1:
                        playerData = _a.sent();
                        this.init = true;
                        this.playerData = playerData;
                        this.videoPlayer = playerData.player;
                        this.videoElement.title = this.videoPlayer.mediainfo.name;
                        this.attachPlayEventListeners();
                        this.attachCustomSocialOptions();
                        this.dispatchEvent(new CustomEvent('init'));
                        if (this.autoplay) {
                            this.subscribeForHiddenPause();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.attributeHasChanged = false;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); }, 10);
    };
    /**
     * This is a standard Custom Element lifecycle hook for when the element is removed from the DOM.
     */
    FbsVideo.prototype.disconnectedCallback = function () {
        this.removeWindowFocusEvents();
        document.removeEventListener('fbs-video-playing', this.videoPlayingEventListener);
        window.removeEventListener('scroll', this.windowScrollEventListener);
        if (this.videoPlayer) {
            this.videoPlayer.off('play');
            this.videoPlayer.off('pause');
            this.videoPlayer.off('ads-play');
            this.videoPlayer.off('ads-pause');
            this.videoPlayer.off('ended');
        }
        this.videoService.dispose(this.playerData);
    };
    /**
     * Play a different video in this player
     */
    FbsVideo.prototype.changeVideo = function (videoId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.playerData.videoId = videoId;
                        return [4 /*yield*/, this.videoService.handleVideoJsReady(this.playerData)];
                    case 1:
                        _a.sent();
                        this.videoElement.title = this.videoPlayer.mediainfo.name;
                        this.attachCustomSocialOptions();
                        if (this.autoplay) {
                            if (this.muted) {
                                this.mute();
                                this.attachAdLoadedHandler();
                            }
                            this.play();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FbsVideo.prototype.mute = function () {
        if (this.videoPlayer) {
            this.videoPlayer.muted(true);
        }
        if (this.adPlayer) {
            this.muteAd();
        }
    };
    /**
     * Play the current video
     */
    FbsVideo.prototype.play = function () {
        if (this.videoPlayer) {
            this.videoPlayer.play();
        }
        if (this.adPlayer) {
            this.adPlayer.play();
        }
    };
    /**
     * Pause the current video
     */
    FbsVideo.prototype.pause = function () {
        if (this.videoPlayer) {
            this.videoPlayer.pause();
        }
        if (this.adPlayer) {
            this.adPlayer.pause();
        }
    };
    /**
     * Play or Pause the current video
     */
    FbsVideo.prototype.togglePlay = function () {
        if (this.playing) {
            this.pause();
        }
        else {
            this.play();
        }
    };
    /**
     * Switch to fullscreen mode
     * Only works in response to user action (not on timer, etc.)
     */
    FbsVideo.prototype.requestFullscreen = function () {
        if (this.videoPlayer) {
            this.videoPlayer.requestFullscreen();
        }
        return new Promise(function () { });
    };
    /**
     * Custom social options allow control of share url
     */
    FbsVideo.prototype.attachCustomSocialOptions = function () {
        if (this.videoPlayer.social) {
            this.videoPlayer.social({
                url: "https://www.forbes.com/video/" + this.videoId + "/",
            });
        }
    };
    FbsVideo.prototype.insertCloseButton = function () {
        this.closeButton = document.createElement('div');
        this.closeButton.innerHTML = '<i class="icon icon-close fs-text-s"></i>';
        this.closeButton.classList.add('video-close');
        this.closeButton.classList.add('hidden');
        this.closeButton.setAttribute('data-ga-track', 'sticky close');
        this.appendChild(this.closeButton);
    };
    /**
     * This displays the video dismiss button if needed
     * Close button should be shown under following scenarios
     * Show video close button if ads ended
     * Show video close button if !hideAdCloseButton
     * Show video close button if ads error out
     * Show video close button if ads disabled
     */
    FbsVideo.prototype.showCloseButton = function () {
        if (!this.useCloseButton || this.closeButtonTriggered) {
            return;
        }
        if (this.closeButton.classList.contains('hidden')) {
            this.closeButton.classList.remove('hidden');
        }
        this.closeButtonTriggered = true;
    };
    FbsVideo.prototype.hideAdCloseButton = function () {
        if (!(this.videoPlayer &&
            this.videoPlayer.ima3 &&
            this.videoPlayer.ima3['adsManager'] &&
            this.videoPlayer.ima3['adsManager'].getCurrentAd)) {
            return false;
        }
        // Hide the close button for ads not served by AdSense, AdX, or by certain provider ids
        // If it's a native video ad, we don't need to show the close button
        var currentAd = this.videoPlayer.ima3['adsManager'].getCurrentAd();
        var allowedIds = ['126949942', '126954142', '939010822', '1286113822', '1286115742', '4430278527', '4430286386', '1362247942'];
        var adProvider = (currentAd && currentAd.getAdSystem().toLowerCase()) || '';
        return currentAd &&
            (adProvider.indexOf('adsense') === -1 ||
                adProvider.indexOf('adx') === -1 ||
                allowedIds.indexOf(currentAd.getAdId()) === -1);
    };
    /**
     * This (re)inserts the video element into this element
     */
    FbsVideo.prototype.insertVideoElement = function () {
        this.videoElement = document.createElement('video');
        Object.assign(this.videoElement.dataset, {
            account: '2097119709001',
            embed: 'default',
            player: this.playerId
        });
        this.videoElement.className = 'video-js brightcove_perform playable-rectangle';
        this.videoElement.setAttribute('controls', '');
        this.videoElement.setAttribute('crossorigin', '');
        this.videoElement.setAttribute('playsinline', '');
        if (this.autoplay) {
            this.videoElement.setAttribute('autoplay', '');
        }
        if (this.muted) {
            this.videoElement.setAttribute('muted', '');
        }
        this.videoElement.id = this.videoElementId;
        // TODO: set this as actual video name
        this.innerHTML = '';
        this.appendChild(this.videoElement);
    };
    FbsVideo.prototype.getAdUnitPath = function () {
        var adsService = window['fbsads'];
        if (adsService) {
            return adsService.adUnitPath;
        }
        return '/7175/fdcvideo';
    };
    FbsVideo.prototype.attachPlayEventListeners = function () {
        this.attachPlayEventHandler();
        this.attachAdsTiming();
        this.attachPlayEndedEventListener();
        this.attachAdsStartedEventListener();
        this.attachAdsErrorEventHandler();
        this.attachAdsEndedEventListener();
        this.attachPauseEventHandler();
        this.subscribeForPause();
    };
    FbsVideo.prototype.attachAdsTiming = function () {
        var _this = this;
        this.videoPlayer.on('ads-request', function () {
            Object(__WEBPACK_IMPORTED_MODULE_0__utils_performance__["a" /* performanceMark */])('Ad Requested ' + _this.videoElementId);
            _this.videoPlayer.off('ads-request');
        });
        this.videoPlayer.on('adscanceled', function () {
            _this.showCloseButton();
            _this.videoPlayer.off('adscanceled');
        });
        this.videoPlayer.on('ads-load', function () {
            Object(__WEBPACK_IMPORTED_MODULE_0__utils_performance__["a" /* performanceMark */])('Ad Loaded ' + _this.videoElementId);
            _this.videoPlayer.off('ads-load');
            _this.muteAd();
        });
    };
    FbsVideo.prototype.attachPlayEndedEventListener = function () {
        var _this = this;
        this.videoPlayer.on('ended', function () {
            if (!_this.videoComplete && !_this.playing) {
                _this.videoComplete = true;
                _this.removeWindowFocusEvents();
                window.removeEventListener('scroll', _this.windowScrollEventListener);
                _this.dispatchEvent(new CustomEvent('ended'));
            }
        });
    };
    FbsVideo.prototype.attachAdsStartedEventListener = function () {
        var _this = this;
        this.videoPlayer.on('ads-ad-started', function () {
            // if close button should not be hidden, now is the time to show it
            if (!_this.hideAdCloseButton()) {
                _this.showCloseButton();
            }
            _this.dispatchEvent(new CustomEvent('ad-started'));
        });
    };
    FbsVideo.prototype.attachAdsEndedEventListener = function () {
        var _this = this;
        this.videoPlayer.on('ads-ad-ended', function () {
            // show close button
            _this.showCloseButton();
            _this.dispatchEvent(new CustomEvent('ad-ended'));
        });
    };
    /**
     * Attach event handler for playback started or unpaused
     */
    FbsVideo.prototype.attachPlayEventHandler = function () {
        var _this = this;
        this.videoPlayer.on('play', function () {
            _this.setAttribute('playing', '');
            // User initiated play for non-autoplaying player disables hidden pause mechanic for all players
            if (!_this.autoplay || _this.secretAutoplay) {
                _this.videoService.hiddenPauseEnabled = false;
            }
            if (_this.adsDisabled && _this.useCloseButton) {
                // show close button if ads disabled and need to use close button
                _this.showCloseButton();
            }
            _this.videoComplete = false;
            _this.videoService.setMediaSessionDetails(_this.playerData);
            _this.videoService.trackPlay(_this.playerData);
            _this.videoService.notifyPlaying(_this.videoElementId);
            // Fallback for video close-button, if close-button has not been triggered
            // Delay 37 seconds
            if (!_this.closeButtonTriggered || !_this.closeButtonTimeout) {
                _this.closeButtonTimeout = setTimeout(function () {
                    _this.showCloseButton();
                }, 37000);
            }
            _this.dispatchEvent(new CustomEvent('play'));
        });
        this.videoPlayer.on('ads-play', function () {
            _this.setAttribute('playing', '');
            _this.videoService.notifyPlaying(_this.videoElementId);
            _this.dispatchEvent(new CustomEvent('play'));
        });
    };
    /**
     * Attach event handler for playback started or unpaused
     */
    FbsVideo.prototype.attachPauseEventHandler = function () {
        var _this = this;
        this.videoPlayer.on('pause', function () {
            _this.removeAttribute('playing');
            _this.dispatchEvent(new CustomEvent('pause'));
        });
        this.videoPlayer.on('ads-pause', function () {
            _this.removeAttribute('playing');
            _this.dispatchEvent(new CustomEvent('pause'));
        });
    };
    /**
     * Attach event for Ad Loaded
     */
    FbsVideo.prototype.attachAdLoadedHandler = function () {
        var _this = this;
        this.videoPlayer.on('ima3-loaded', function () {
            if (_this.adPlayer) {
                _this.muteAd();
            }
        });
    };
    /**
     * Attach event for Ad Error
     */
    FbsVideo.prototype.attachAdsErrorEventHandler = function () {
        var _this = this;
        this.videoPlayer.on('ima3-ad-error', function () {
            _this.showCloseButton();
        });
    };
    /**
     * Subscribe to pause when other videos are playing
     */
    FbsVideo.prototype.subscribeForPause = function () {
        document.addEventListener('fbs-video-playing', this.videoPlayingEventListener);
    };
    /**
     * Handler for custom event dispatched by fbs-video service when video starts playing
     * @param videoPlayingEvent Custom event object with detail = { videoElementId: string }
     */
    FbsVideo.prototype.handleVideoPlaying = function (videoPlayingEvent) {
        if (videoPlayingEvent.detail && videoPlayingEvent.detail.videoElementId !== this.videoElementId) {
            this.pause();
        }
    };
    /**
     * Handle window blur event by pausing if hidden pause is enabled.
     */
    FbsVideo.prototype.handleWindowBlur = function () {
        this.isFocused = false;
        this.pauseToggleCheck();
    };
    /**
     * Handle window focus event by pausing if hidden pause is enabled.
     */
    FbsVideo.prototype.handleWindowFocus = function () {
        this.isFocused = true;
        this.pauseToggleCheck();
    };
    /**
     * Toggle play/pause when video scrolls into/out of view
     */
    FbsVideo.prototype.handleWindowScroll = function () {
        // if the video has been paused, we no longer need to check if the video is in view
        if (this.videoElement && this.videoElement.paused && (!this.pauseAd || !this.adPlaying)) {
            return;
        }
        // this handler is triggered by window scroll events. If a scroll happens, we
        // determine if the video is out of view with checkIsVideoInView(), if that is false
        // and isVideoInView is true, that means the video went out of view on this scroll event
        // and we need to toggle pause. If it was already out of view (isVideoInView === false) we do nothing.
        if (this.isVideoInView && !this.checkIsVideoInView()) {
            this.isVideoInView = false;
            this.pauseToggleCheck();
            // same as above but opposite, checking for now in view but wasn't before
        }
        else if (!this.isVideoInView && this.checkIsVideoInView()) {
            this.isVideoInView = true;
            this.pauseToggleCheck();
        }
        // any other condition requires no action
    };
    /**
     * Called durring certain events to toggle play/pause for video
     */
    FbsVideo.prototype.pauseToggleCheck = function () {
        if (this.videoService.hiddenPauseEnabled) {
            if (this.isFocused && this.isVideoInView) {
                this.play();
            }
            else {
                this.pause();
            }
        }
    };
    /**
     * Stop listening for window blur/focus events
     */
    FbsVideo.prototype.removeWindowFocusEvents = function () {
        window.removeEventListener('blur', this.windowBlurEventListener);
        window.removeEventListener('focus', this.windowFocusEventListener);
    };
    /**
     * This subscribes to the appropriate thing and toggles playing/pause when the video is/isn't hidden
     */
    FbsVideo.prototype.subscribeForHiddenPause = function () {
        window.addEventListener('blur', this.windowBlurEventListener);
        window.addEventListener('focus', this.windowFocusEventListener);
        window.addEventListener('scroll', this.windowScrollEventListener);
        this.addEventListener('click', this.removeWindowFocusEvents.bind(this));
    };
    FbsVideo.prototype.checkIsVideoInView = function () {
        var rect = this.getBoundingClientRect();
        return (this.playing ? rect.bottom : rect.top) > 0;
    };
    /**
     * Clobber uncooperative ads that don't like to mute
     */
    FbsVideo.prototype.muteAd = function () {
        var _this = this;
        if (this.adPlayer) {
            var count_1 = 0;
            var interval_1 = setInterval(function () {
                count_1++ < 30 && _this.adPlayer ? _this.adPlayer.muted(true) : clearInterval(interval_1);
            }, 20);
        }
    };
    return FbsVideo;
}(HTMLElement));

//# sourceMappingURL=fbs-video.component.js.map

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;
/**
* Prevents functions from firing repeatedly. Will fire each time the threshold is met.
* @param  {Function} fn
* @param  {Number}   threshold
* @param  {Object}   scope
*/
function throttle(fn, threshold, scope) {
    var last;
    var deferTimer;
    if (!threshold) {
        threshold = 100;
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = scope || {};
        var now = +new Date();
        if (last && (now < last + threshold)) {
            clearTimeout(deferTimer);
            var next = threshold + now + 1;
            deferTimer = setTimeout(function () {
                last = now;
                context.deferred = true;
                fn.apply(context, args);
            }, next - last);
        }
        else {
            last = now;
            fn.apply(context, args);
        }
    };
}
//# sourceMappingURL=throttle.js.map

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export thumbnailDimensions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbsVideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_player_data__ = __webpack_require__(244);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var thumbnailDimensions = [
    384,
    768,
    1024,
    1280,
    1600,
    1920,
];
/**
 * This is a service which controlls video players on Forbes pages.
 */
var FbsVideoService = /** @class */ (function () {
    function FbsVideoService() {
        this.ima3Config = {
            serverUrl: '',
            requestMode: 'onplay',
            adTechOrder: ['html5', 'flash'],
            vpaidMode: 'ENABLED',
            timeout: 8000,
            showVpaidControls: true
        };
        this.bc = window['bc'];
        this.videojs = window['videojs'];
        this.srVideoInit = window['srVideoInit'];
        // playerData keeps track of state of any on page (in DOM) player instance
        this.playerData = new Map();
        this.idCount = 0;
        this.playerCount = 0; // Number of players on the page.
        this.PID = '50e4a8434240cf5c4b000009'; // SimpleReach PID
        this.amazonBids = {};
        this.hiddenPauseEnabled = true;
    }
    FbsVideoService.prototype.generateId = function () {
        return 'brightcove_perform_' + this.idCount++;
    };
    /**
     * Initialize Brightcove Perform video player
     */
    FbsVideoService.prototype.init = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var playerData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fbsAdsService = window['fbsads'];
                        playerData = this.playerData.get(options.videoElementId);
                        playerData = playerData ? Object.assign(playerData, options) : new __WEBPACK_IMPORTED_MODULE_1__utils_player_data__["a" /* PlayerData */](options);
                        this.playerData.set(options.videoElementId, playerData);
                        playerData.amazonId = 'videoSlot' + ++this.playerCount;
                        return [4 /*yield*/, this.waitforGdpr()];
                    case 1:
                        _a.sent();
                        // mnet load script
                        return [4 /*yield*/, this.loadMnet()];
                    case 2:
                        // mnet load script
                        _a.sent();
                        // Load player specific videojs
                        return [4 /*yield*/, this.loadVideojs(playerData)];
                    case 3:
                        // Load player specific videojs
                        _a.sent();
                        return [4 /*yield*/, this.loadIma3()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.initPlayer(playerData)];
                    case 5:
                        _a.sent();
                        this.callSimpleReach(playerData);
                        this.setSimpleReachEvents(playerData);
                        return [2 /*return*/, playerData];
                }
            });
        });
    };
    FbsVideoService.prototype.waitforGdpr = function () {
        return __awaiter(this, void 0, void 0, function () {
            var trackingService, promise;
            return __generator(this, function (_a) {
                trackingService = window['trackingService'] || {};
                promise = new Promise(function (resolve) {
                    var submitPreferencesHandler = function (message) {
                        try {
                            var result = JSON.parse(message.data);
                            if (result && result.source === 'preference_manager' && result.message === 'submit_preferences') {
                                resolve();
                                message.currentTarget.removeEventListener(message.type, submitPreferencesHandler);
                            }
                        }
                        catch (e) { }
                    };
                    if (trackingService.isEurope && document.cookie.indexOf('notice_gdpr_prefs=') === -1) {
                        window.addEventListener('message', submitPreferencesHandler);
                    }
                    else {
                        resolve();
                    }
                });
                return [2 /*return*/, promise];
            });
        });
    };
    FbsVideoService.prototype.requestMnetBids = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.fbsAdsService) {
                    return [2 /*return*/, ''];
                }
                return [2 /*return*/, Promise.race([
                        this.fbsAdsService.fetchMediaNetVideoBids(),
                        new Promise(function (resolve) {
                            setTimeout(resolve, 2000);
                        }).then(function () { return ''; })
                    ])];
            });
        });
    };
    FbsVideoService.prototype.loadMnet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.fbsAdsService.initMediaNetVideoBidding()) {
                    return [2 /*return*/, this.fbsAdsService.initMediaNetVideoBidding()];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Notify the service of a video beginning to play
     */
    FbsVideoService.prototype.notifyPlaying = function (videoElementId) {
        var videoPlayEvent = new CustomEvent('fbs-video-playing', {
            detail: { videoElementId: videoElementId },
        });
        document.dispatchEvent(videoPlayEvent);
    };
    /**
     * Set up init function for Simple Reach for the page.
     */
    FbsVideoService.prototype.simpleReachCall = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window['srVideoInit'] = function (_v, _p) {
                    if (window['SimplereachVideo']) {
                        window[_v] = window['SimplereachVideo'].video(_p);
                    }
                    return window[_v];
                };
                return [2 /*return*/];
            });
        });
    };
    /**
     * Load player specific videojs
     * @return {Observable} that emits when videojs is ready
     */
    FbsVideoService.prototype.loadVideojs = function (playerData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadScript("//players.brightcove.net/2097119709001/" + playerData.playerId + "_default/index.min.js")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript("//d8rk54i4mohrb.cloudfront.net/js/video.js")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.simpleReachCall()];
                    case 3:
                        _a.sent();
                        // Set variables on first load
                        this.videojs = window['videojs'];
                        this.srVideoInit = window['srVideoInit'];
                        this.bc = window['bc'];
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Initialize Simple Reach data for a player.
     */
    FbsVideoService.prototype.callSimpleReach = function (playerData, event) {
        if (event === void 0) { event = 'init'; }
        var info = playerData['player']['mediainfo'];
        this.srVideoInit(playerData.id, {
            pid: this.PID,
            video_id: info.id,
            title: info['name'],
            description: info['description'],
            article_id: '',
            length: Math.trunc(info['duration']),
            thumbnail_url: info['thumbnail'],
            tags: info['tags'],
            date: info['createdAt'],
            ignore_errors: false,
            event_name: event,
        });
    };
    /**
     * Fire Simple Reach events.
     *
     * Set up listeners on a player for events from Brightcove, and use them to fire Simple Reach's events.
     */
    FbsVideoService.prototype.setSimpleReachEvents = function (playerData) {
        var player = this.videojs.getPlayer(playerData.id);
        var elapsedThresholdsToTrack = [3, 15, 30, 45];
        var currentTime;
        var quartile = 0;
        var elapsed = 0;
        player.on('timeupdate', function (e) {
            if (parseInt(currentTime) !== Math.floor(player.currentTime())) {
                if (typeof currentTime === 'undefined') {
                    window[playerData.id].start(playerData.autoplay ? 'auto' : 'click');
                }
                currentTime = Math.floor(player.currentTime());
                var loadPercentage = Math.floor((player.currentTime() / player.duration()) * 100);
                // loadPercentage sometimes skips over a percent or two, so check if we're at least another quarter through the video.
                // Handle 100% quartile with ended event.
                if (loadPercentage >= quartile + 25 && loadPercentage < 100) {
                    quartile += 25;
                    window[playerData.id].quartile(quartile);
                }
                // Fire elapsed every 15 seconds. Check if at least 15 seconds have passed since the exact amount may be skipped over.
                if (currentTime >= elapsed + 15) {
                    elapsed += 15;
                    window[playerData.id].elapsed(15);
                }
                if (currentTime >= elapsedThresholdsToTrack[0]) {
                    window[playerData.id].elapsedThreshold(elapsedThresholdsToTrack.shift());
                }
            }
        });
        player.on('ended', function (e) {
            window[playerData.id].quartile(quartile);
            window[playerData.id].complete();
        });
    };
    FbsVideoService.prototype.loadScript = function (src) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__["a" /* loadScript */])(src, resolve);
                    })];
            });
        });
    };
    FbsVideoService.prototype.loadStyle = function (src) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__["b" /* loadStyle */])(src, resolve);
                    })];
            });
        });
    };
    /**
     * Load IMA3 advertising module
     */
    FbsVideoService.prototype.loadIma3 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.loadStyle('//players.brightcove.net/videojs-ima3/2/videojs.ima3.min.css'),
                            this.loadScript('//players.brightcove.net/videojs-ima3/2/videojs.ima3.min.js')
                        ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Initialize IMA3 advertising module with custom key value pairs
     */
    FbsVideoService.prototype.setAdTargeting = function (playerData) {
        return __awaiter(this, void 0, void 0, function () {
            var serverUrl, requestMode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!playerData.player.ima3) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getAdServerUrl(playerData)];
                    case 1:
                        serverUrl = _a.sent();
                        requestMode = playerData.autoplay ? 'onload' : 'onplay';
                        // Override in case initIma3 is called on a page that already has preconfigured ads
                        if (playerData.player.ima3 instanceof Function) {
                            this.ima3Config.serverUrl = serverUrl;
                            this.ima3Config.requestMode = requestMode;
                            playerData.player.ima3(this.ima3Config);
                        }
                        else {
                            playerData.player.ima3.settings.requestMode = requestMode;
                            playerData.player.ima3.settings.serverUrl = serverUrl;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get Ad Server URL for ads given a player data
     */
    FbsVideoService.prototype.getAdServerUrl = function (playerData) {
        return __awaiter(this, void 0, void 0, function () {
            var pageTargeting, videoTargeting, keyValuesPairs, keyValues, rect, targeting, qsParams, customParams, key, videoUrl, nonPersonalizedAds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPageTargeting()];
                    case 1:
                        pageTargeting = _a.sent();
                        videoTargeting = this.getVideoAdTargeting(playerData);
                        keyValuesPairs = (playerData.keyValueString || '').split('&');
                        keyValues = (keyValuesPairs || []).reduce(function (acc, current) {
                            var _a = current.split('='), key = _a[0], value = _a[1];
                            // values will sometimes contain '&' character, so are encoded since we are splitting on '&'
                            // will throw error for malformed uri sequences
                            try {
                                acc[key] = decodeURIComponent(value || '');
                            }
                            catch (err) {
                                console.error(err);
                                acc[key] = '';
                            }
                            return acc;
                        }, {});
                        rect = playerData.player.el_.getBoundingClientRect();
                        // check if height is 300 and has a 4:3 aspect ratio or higher
                        if (rect.height === 300 && rect.width / rect.height >= 1.33) {
                            keyValues['vh'] = '300plus';
                        }
                        targeting = __assign({}, pageTargeting, videoTargeting, keyValues);
                        qsParams = ((this.amazonBids[playerData.amazonId] || {})['helpers'] || {})['qsParams'] || '';
                        if (typeof qsParams === 'function') {
                            // Amazon's documentation says this should be a string but it's actually a function.
                            qsParams = qsParams();
                        }
                        customParams = '';
                        if (qsParams.length > 1) {
                            customParams += (customParams ? qsParams : qsParams.substring(1));
                            delete this.amazonBids[playerData.amazonId];
                        }
                        for (key in targeting) {
                            if (targeting.hasOwnProperty(key)) {
                                customParams += (customParams ? '&' : '') + key + '=' + targeting[key];
                            }
                        }
                        if (this.mnetBids) {
                            customParams += (customParams ? '&' : '') + this.mnetBids;
                            this.mnetBids = '';
                        }
                        customParams = encodeURIComponent(customParams);
                        videoUrl = encodeURIComponent("https://www.forbes.com/video/" + playerData.videoId + "/");
                        if (document.cookie.match(/notice_gdpr_prefs=0(?:,1)?:/)) {
                            nonPersonalizedAds = '&npa=1';
                        }
                        /* tslint:disable-next-line: max-line-length */
                        return [2 /*return*/, "https://pubads.g.doubleclick.net/gampad/ads?sz=620x350|480x320&ciu_sz=s&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1" + nonPersonalizedAds + "&iu=" + playerData.adUnitPath + "&cust_params=" + customParams + "&url=[referrer_url]&correlator=[timestamp]&description_url=" + videoUrl];
                }
            });
        });
    };
    /**
     * Get Page Level Ad Targeting
     */
    FbsVideoService.prototype.getPageTargeting = function () {
        return __awaiter(this, void 0, void 0, function () {
            var targeting, pageTargeting_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targeting = {};
                        if (!this.fbsAdsService) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fbsAdsService.getPageTargeting()];
                    case 1:
                        pageTargeting_1 = _a.sent();
                        Object.keys(pageTargeting_1)
                            .filter(function (key) {
                            // Don't pull in page-level header bidding
                            return !(key.startsWith('mnet') || key.startsWith('fb_') || key.startsWith('amzn'));
                        }).forEach(function (key) {
                            targeting[key] = pageTargeting_1[key].join();
                        });
                        return [2 /*return*/, targeting];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get Ad Targeting Specific to Video Information
     * @param playerData Player data to get targeting for
     * NOTE:
     * 'channelsection' === channel
     * 'channelsection2' === section
     * these values are defined in brightcove and, while confusing, can't be changed
     */
    FbsVideoService.prototype.getVideoAdTargeting = function (playerData) {
        var _a = this.getMediaInformation(playerData), duration = _a.duration, _b = _a.customFields, customFields = _b === void 0 ? {} : _b;
        var videoId = playerData.videoId, secretAutoplay = playerData.secretAutoplay, autoplay = playerData.autoplay;
        return {
            'vid': videoId,
            'vl': duration ? (duration <= 60 ? '1min' : 'not1min') : 'unknown',
            'vss': customFields.videospecialslot || '',
            'autoplay': !secretAutoplay && autoplay ? 'yes' : 'no',
            'vchan': this.parseChannelSection(customFields.channelsection) || '',
            'vsec': this.parseChannelSection(customFields.channelsection2) || ''
        };
    };
    /**
     * Parse Channel/Section strings from Brightcove
     * it comes to us in the format "Leadership :channel_6"
     * @param channelSection Channel/section name
     */
    FbsVideoService.prototype.parseChannelSection = function (channelSection) {
        if (channelSection === void 0) { channelSection = ''; }
        return channelSection.split(':')[0].trim().replace(/\s/g, '');
    };
    /**
     * Initialize player
     * @return Observable that emits when player is ready
     */
    FbsVideoService.prototype.initPlayer = function (playerData) {
        return __awaiter(this, void 0, void 0, function () {
            var player, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.bc) {
                            return [2 /*return*/, playerData];
                        }
                        if (!playerData.adsDisabled) {
                            this.getAmazonHeaderBidding(playerData);
                        }
                        try {
                            player = this.bc(playerData.id);
                            if (!playerData.adsDisabled && typeof player.ima3 === 'function') {
                                player.ima3(this.ima3Config);
                            }
                        }
                        catch (e) {
                            console.error(e);
                        }
                        _a = playerData;
                        return [4 /*yield*/, this.prepareVideo(playerData.id)];
                    case 1:
                        _a.player = _c.sent();
                        if (!!playerData.adsDisabled) return [3 /*break*/, 3];
                        _b = this;
                        return [4 /*yield*/, this.requestMnetBids()];
                    case 2:
                        _b.mnetBids = _c.sent();
                        _c.label = 3;
                    case 3: return [4 /*yield*/, this.handleVideoJsReady(playerData)];
                    case 4:
                        _c.sent();
                        return [2 /*return*/, playerData];
                }
            });
        });
    };
    FbsVideoService.prototype.getAmazonHeaderBidding = function (playerData) {
        var _this = this;
        // Make the call to Amazon header bidding for the video ad.
        if (this.fbsAdsService) {
            this.fbsAdsService.fetchAmazonBids([{
                    slotID: playerData.amazonId,
                    mediaType: 'video'
                }]).then(function (bids) {
                _this.amazonBids[playerData.amazonId] = (bids || []).find(function (bid) {
                    return bid.slotID === playerData.amazonId;
                });
            });
        }
    };
    FbsVideoService.prototype.getMediaInformation = function (playerData) {
        if (!playerData.player) {
            return null;
        }
        return playerData.player.mediainfo;
    };
    FbsVideoService.prototype.prepareVideo = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.videojs(id).ready(function () {
                            resolve(this);
                        });
                    })];
            });
        });
    };
    FbsVideoService.prototype.handleVideoJsReady = function (playerData) {
        return __awaiter(this, void 0, void 0, function () {
            var mediaInfo, rect;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            playerData.player.catalog.getVideo(playerData.videoId, function (error, video) {
                                if (error || typeof video === 'string') {
                                    reject(error);
                                }
                                else {
                                    resolve(video);
                                }
                            });
                        })];
                    case 1:
                        mediaInfo = _a.sent();
                        rect = document.getElementById(playerData.videoElementId).getBoundingClientRect();
                        mediaInfo = this.processVideoThumbnail(mediaInfo, rect);
                        this.handleCatalogVideo(playerData, mediaInfo);
                        if (!!playerData.adsDisabled) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setAdTargeting(playerData)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, mediaInfo];
                }
            });
        });
    };
    FbsVideoService.prototype.processVideoThumbnail = function (media, rect) {
        var horizontal = rect.width > rect.height;
        var majorDimension = horizontal ? rect.width : rect.height;
        var dimension = thumbnailDimensions.find(function (dim) { return dim >= majorDimension; }) || thumbnailDimensions[thumbnailDimensions.length - 1];
        var size = horizontal ? dimension + "x0" : "0x" + dimension;
        // Returning new media object instead of modyfying existing
        return __assign({}, media, { poster: "https://thumbor.forbes.com/thumbor/" + size + "/" + media.poster, thumbnail: "https://thumbor.forbes.com/thumbor/" + size + "/" + media.thumbnail });
    };
    FbsVideoService.prototype.handleCatalogVideo = function (playerData, video) {
        playerData.player.catalog.load(video);
        // select_rendition === 'closest' - use rendition closest to player size
        // select_rendition === 'max' - use rendition closest to screen size
        // select_rendition =~ 'WxH' - use rendition closest to given Width and Height
        // select_rendition is missing - use Brightcove defaults
        if (playerData.renditionSelection) {
            playerData.mediainfo = null;
            switch (playerData.renditionSelection) {
                case 'closest':
                    var playerElement = document.getElementById(playerData.id);
                    playerData.mediainfo = this.selectRendition(playerData, playerElement.offsetWidth, playerElement.offsetHeight);
                    break;
                case 'max':
                    playerData.mediainfo = this.selectRendition(playerData, screen.width, screen.height);
                    break;
                default:
                    var match = playerData.renditionSelection.match(/(\d+)x(\d+)/i);
                    if (match) {
                        playerData.mediainfo = this.selectRendition(playerData, Number(match[1]), Number(match[2]));
                    }
                    break;
            }
        }
        if (playerData.mediainfo) {
            playerData.player.src({
                type: 'video/mp4',
                src: playerData.mediainfo.src
            });
        }
        return playerData;
    };
    /**
     *
     * Rendition selection
     *
     * @method selectRendition
     * @param {string} unique player div id
     * @param {int} target player width
     * @param {int} target player height
     * @return {Object} structure with selected renditions dimensions and source
     *
     */
    FbsVideoService.prototype.selectRendition = function (playerData, width, height) {
        // Pythagorean to turn height and width into a single numeric score
        var diagonal = Math.pow(width, 2) + Math.pow(height, 2);
        var minDistance = Number.MAX_VALUE;
        var candidate;
        this.playerData.get(playerData.id).player.mediainfo.sources.forEach(function (source) {
            if (source.container === 'MP4' && source.width && source.height && source.src) {
                // Pythagorean score difference
                var distance = source.width * source.width + source.height * source.height - diagonal;
                // Downscaling is better than upscaling but we will upscale if we have to
                //  - anything is better than nothing
                //  - positive distance (downscale) is better than any negative distance (upscale)
                //  - do not consider negative distance (upscale) when you've seen positive distance (downscale)
                if (!candidate ||
                    (minDistance < 0 && distance >= 0) ||
                    ((minDistance < 0 || (minDistance >= 0 && distance >= 0)) && (Math.abs(distance) < Math.abs(minDistance)))) {
                    candidate = source;
                    minDistance = distance;
                }
            }
        });
        return candidate;
    };
    /**
     * Dispose of player related data structures
     */
    FbsVideoService.prototype.dispose = function (playerData) {
        if (playerData) {
            this.playerData.delete(playerData.id);
            if (playerData.player && playerData.player.dispose) {
                playerData.player.dispose();
            }
        }
    };
    /**
     * Set the video details in the notification for currently playing video
     */
    FbsVideoService.prototype.setMediaSessionDetails = function (playerData) {
        if ('mediaSession' in navigator) {
            var mediainfo = this.getMediaInformation(playerData);
            navigator.mediaSession.metadata = new MediaMetadata({
                title: mediainfo.name,
                artist: 'Forbes Media',
                album: 'Forbes.com',
                artwork: [
                    { src: mediainfo.thumbnail }
                ]
            });
        }
    };
    /**
     * Track the play for a video
     */
    FbsVideoService.prototype.trackPlay = function (playerData) {
        if (playerData.playTracked) {
            return;
        }
        playerData.playTracked = true;
        var trackingService = window['trackingService'];
        if (!(trackingService && trackingService.track)) {
            console.warn('No trackingService provided for video');
            return;
        }
        trackingService.track({
            event: 'fastVideo',
            fastN: 'video',
            fastSu: document.location.protocol + '//www.forbes.com/video/' + playerData.videoId + '/',
            fastPt: 'video',
            fastI: 'video/brightcove/' + playerData.videoId,
            fastRe: document.location.host
        }, false);
    };
    return FbsVideoService;
}());

//# sourceMappingURL=fbs-video.service.js.map

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerData; });
var PlayerData = /** @class */ (function () {
    function PlayerData(playerOptions) {
        /**
         * Id of the player type
         */
        this.playerId = 'default';
        // DOM control
        this.videoEnabled = false;
        // autoplay
        this.autoplay = false;
        this.secretAutoplay = false;
        // ads
        this.sz = '620x350';
        this.adUnitPath = '/7175/fdcvideo';
        // tracking
        this.playTracked = false;
        Object.assign(this, playerOptions);
        this.id = playerOptions.videoElementId;
    }
    return PlayerData;
}());

//# sourceMappingURL=player-data.js.map

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fbs_ad_component__ = __webpack_require__(246);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fbs_ad_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbsAd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_performance_utilities__ = __webpack_require__(91);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FbsAd = (function (_super) {
    __extends(FbsAd, _super);
    function FbsAd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * This is a reference to the ad service on the page.
         */
        _this.adsService = window['fbsads'];
        /**
         * Save reference to event listeners so they can be properly cleaned up later
         */
        _this.renderEventListener = _this.handleRender.bind(_this);
        _this.viewableEventListener = _this.handleViewable.bind(_this);
        return _this;
    }
    Object.defineProperty(FbsAd, "observedAttributes", {
        /**
         * Attributes which fire attributeChangedCallback
         */
        get: function () {
            return [
                'batched',
                'position',
                'ad-id',
                'custom-targeting'
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsAd.prototype, "adId", {
        /**
         * This is the id of the div which contains the ad.
         */
        get: function () {
            return this.getAttribute('ad-id');
        },
        set: function (adId) {
            if (!adId) {
                return;
            }
            this.setAttribute('ad-id', adId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsAd.prototype, "position", {
        /**
         * This is the position of the ad.
         */
        get: function () {
            return this.getAttribute('position');
        },
        set: function (position) {
            if (!position) {
                return;
            }
            this.setAttribute('position', position);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsAd.prototype, "customTargeting", {
        /**
         * Custom targeting parameters. should be a comma separated list of the form:
         * 'key1:value1,key2:value2,key3:value3'
         */
        get: function () {
            return this.getAttribute('custom-targeting');
        },
        set: function (targeting) {
            if (!targeting) {
                return;
            }
            this.setAttribute('custom-targeting', targeting);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsAd.prototype, "progressive", {
        /**
         * Setting this will not display the ad at first.
         * You must call .display() to show it.
         */
        get: function () {
            return this.hasAttribute('progressive') && this.getAttribute('progressive') !== 'false';
        },
        set: function (progressive) {
            if (progressive) {
                this.setAttribute('progressive', '');
            }
            else {
                this.removeAttribute('progressive');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsAd.prototype, "batched", {
        /**
         * Setting this will not display the ad at first.
         * You must call .display() to show it.
         */
        get: function () {
            return this.hasAttribute('batched') && this.getAttribute('batched') !== 'false';
        },
        set: function (batched) {
            if (batched) {
                this.setAttribute('batched', '');
            }
            else {
                this.removeAttribute('batched');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsAd.prototype, "hideEmpty", {
        /**
         * This will default the ad to display: none
         * And only display the ad if it doesn't return empty
         */
        get: function () {
            return this.hasAttribute('hide-empty') && this.getAttribute('hide-empty') !== 'false';
        },
        set: function (progressive) {
            if (progressive) {
                this.setAttribute('hide-empty', '');
            }
            else {
                this.removeAttribute('hide-empty');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsAd.prototype, "empty", {
        /**
         * Tells if the ad came back empty or not
         */
        get: function () {
            return this.currentSlotInfo && (this.currentSlotInfo.isEmpty || this.currentSlotInfo.size[0] < 10);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsAd.prototype, "attrsSnapshot", {
        get: function () {
            return {
                batched: this.batched,
                position: this.position,
                adId: this.adId
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This displays the ad.
     */
    FbsAd.prototype.display = function () {
        if (this.div) {
            this.adsService.display(this.div.id);
            this.displayCalled = true;
        }
    };
    /**
     * This refreshes the ad.
     */
    FbsAd.prototype.refresh = function () {
        this.adsService.refresh(this.div.id);
    };
    /**
     * This creates the ad position
     */
    FbsAd.prototype.create = function () {
        this.adsService.createSlot(this.position, this.adId, this.customTargeting);
        this.insert();
    };
    /**
     * Gets the current slot level targetted value of the key
     */
    FbsAd.prototype.getTargeting = function (key) {
        return this.currentSlotInfo.slot.getTargeting(key);
    };
    /**
     * Gets all of the current slot level targetting values
     */
    FbsAd.prototype.getSlotTargeting = function () {
        var _this = this;
        return this.currentSlotInfo.slot.getTargetingKeys().reduce(function (targeting, key) {
            targeting[key] = _this.getTargeting(key);
            return targeting;
        }, {});
    };
    /**
     * Handle position render event
     * @param renderEvent Custom event with render event data
     */
    FbsAd.prototype.handleRender = function (renderEvent) {
        var event = renderEvent.detail;
        if (!this.div || this.div.id !== event.slot.getSlotElementId()) {
            return;
        }
        var customEvent = new CustomEvent('render', {
            detail: event
        });
        this.currentSlotInfo = event;
        __WEBPACK_IMPORTED_MODULE_0__utils_performance_utilities__["a" /* PerformanceUtilities */].mark("Rendered " + event.slot.getSlotElementId());
        if (this.hideEmpty && !this.empty) {
            this.style.display = ''; // This brings back the original display
        }
        this.dispatchEvent(customEvent);
    };
    /**
     * This listens to the render of the position.
     */
    FbsAd.prototype.listenToRender = function () {
        document.addEventListener('fbs-ad-render', this.renderEventListener);
    };
    FbsAd.prototype.handleViewable = function (viewableEvent) {
        var event = viewableEvent.detail;
        if (!this.div || (this.div.id || this.getDivId()) !== event.slot.getSlotElementId()) {
            return;
        }
        var customEvent = new CustomEvent('viewable', {
            detail: event
        });
        __WEBPACK_IMPORTED_MODULE_0__utils_performance_utilities__["a" /* PerformanceUtilities */].mark("Viewable " + event.slot.getSlotElementId());
        this.dispatchEvent(customEvent);
    };
    /**
     * This emits an event when the ad becomes viewable.
     */
    FbsAd.prototype.listenToViewable = function () {
        document.addEventListener('fbs-ad-viewable', this.viewableEventListener);
    };
    /**
     * This inserts the div into the DOM.
     */
    FbsAd.prototype.insert = function () {
        if (!this.position) {
            return;
        }
        var id = this.getDivId();
        var existing = document.getElementById(id);
        if (existing) {
            console.warn(this, 'was removed because an element', existing, "with the id " + id + " already exists");
            return;
        }
        if (this.div) {
            this.div.id = id;
            return;
        }
        this.div = document.createElement('div');
        this.div.id = id;
        if (this.hideEmpty) {
            this.style.display = 'none'; // Hide the ad for now
        }
        this.appendChild(this.div);
        this.addAccessibilityAttributes();
        if (this.position === 'hero') {
            this.hideHero();
        }
    };
    FbsAd.prototype.getDivId = function () {
        return this.adsService.getDivId(this.position, this.adId);
    };
    /**
     * Hide hero ad from screen readers
     */
    FbsAd.prototype.hideHero = function () {
        var _this = this.parentNode;
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                var heroAd = _this.querySelector('.fto');
                if (heroAd) {
                    var activeElements = Array.from(heroAd.querySelectorAll('button ,a'));
                    activeElements.forEach(function (element) {
                        element.setAttribute('tabindex', '-1');
                        element.setAttribute('aria-hidden', 'true');
                    });
                }
            });
        });
        observer.observe(_this, {
            attributes: false,
            childList: true,
            characterData: false
        });
    };
    /**
     * Add Accessibility attributes
     */
    FbsAd.prototype.addAccessibilityAttributes = function () {
        var _this = this;
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (!_this.div) {
                    return;
                }
                var adIframe = _this.div.querySelector('iframe');
                if (adIframe && !adIframe.hasAttribute('aria-hidden')) {
                    adIframe.setAttribute('tabindex', '-1');
                    adIframe.setAttribute('aria-hidden', 'true');
                    adIframe.setAttribute('title', 'Ad content');
                }
            });
        });
        observer.observe(this.div, {
            attributes: true,
            childList: true,
            characterData: false
        });
    };
    /**
     * This destroys the ad and div
     */
    FbsAd.prototype.destroyAd = function () {
        document.removeEventListener('fbs-ad-render', this.renderEventListener);
        document.removeEventListener('fbs-ad-viewable', this.viewableEventListener);
        this.dispatchEvent(new CustomEvent('destroyed'));
        if (this.div) {
            this.adsService.destroySlots(this.div.id);
            this.div.remove();
            delete this.div;
        }
        this.displayCalled = false;
    };
    /**
     * This initializes the ad
     */
    FbsAd.prototype.initializeAd = function () {
        var _this = this;
        this.listenToRender();
        this.listenToViewable();
        var interval = setInterval(function () {
            if (!_this.attrsSnapshot.position) {
                return;
            }
            _this.create();
            if (!_this.batched && !_this.progressive && !_this.displayCalled) {
                _this.display();
            }
            clearInterval(interval);
        }, 10);
    };
    /**
     * This is a standard Custom Element Lifecycle hook for when the element is attached to the DOM
     */
    FbsAd.prototype.connectedCallback = function () {
        this.initializeAd();
    };
    /**
     * This is a standard Custom Element lifecycle hook for when the element is removed from the DOM.
     */
    FbsAd.prototype.disconnectedCallback = function () {
        this.destroyAd();
    };
    return FbsAd;
}(HTMLElement));

//# sourceMappingURL=fbs-ad.component.js.map

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ads_service__ = __webpack_require__(119);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amznads__ = __webpack_require__(248);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__criteo__ = __webpack_require__(121);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fbs_ads__ = __webpack_require__(250);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__fbs_ads__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__googletag__ = __webpack_require__(122);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__medianet__ = __webpack_require__(258);
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__amazon_bidding_service__ = __webpack_require__(120);
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lineItemRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriteoBiddingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__ = __webpack_require__(35);

// Criteo documentation: http://demo.criteo.com/support/publisher/cdb/#introduction
// See Criteo docs for more information on line item ranges
var lineItemRanges = [
    {
        min: 0,
        max: 15,
        increment: '0.04'
    },
    {
        min: 15,
        max: 40,
        increment: '0.20'
    },
    {
        min: 40,
        max: 100,
        increment: '1.00'
    }
];
var CriteoBiddingService = (function () {
    function CriteoBiddingService() {
    }
    CriteoBiddingService.prototype.init = function () {
        return this.loadCriteo();
    };
    CriteoBiddingService.prototype.setTargeting = function () {
        this.criteo.SetDFPKeyValueTargeting();
    };
    CriteoBiddingService.prototype.fetchBids = function (adUnits, bidRanges) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.criteo.events.push(function () {
                try {
                    _this.criteo.SetLineItemRanges(_this.stringifyLineItemRanges(bidRanges));
                    _this.criteo.RequestBids(adUnits, resolve);
                }
                catch (e) {
                    reject(e);
                }
            });
        }).catch(function (error) {
            console.error(error);
            return;
        });
    };
    /**
     * stringifyLineItemRanges
     * @returns string
     *
     * Criteo expects a string for line item ranges with the following format:
     * 'min..max:increment;min..max:increment;min..max:increment'
     */
    CriteoBiddingService.prototype.stringifyLineItemRanges = function (bidRanges) {
        return bidRanges
            .map(function (itemRange) { return itemRange.min + ".." + itemRange.max + ":" + itemRange.increment; })
            .join(';');
    };
    CriteoBiddingService.prototype.loadCriteo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__["a" /* loadScript */])('https://static.criteo.net/js/ld/publishertag.js', function () {
                _this.criteo = window['Criteo'] = window['Criteo'] || {};
                _this.criteo.events = _this.criteo.events || [];
                resolve();
            });
        });
    };
    return CriteoBiddingService;
}());

//# sourceMappingURL=criteo-bidding.service.js.map

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fbs_ads_service__ = __webpack_require__(251);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fbs_ads_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaults__ = __webpack_require__(123);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbsAdsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ads_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_performance_utilities__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__googletag__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__amznads_amazon_bidding_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaults__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__medianet_medianet_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__medianet_medianet_video_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_url_utilities__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__criteo__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__moat_moat_bidding__ = __webpack_require__(257);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var targetingSourceMap = {
    'google': 'goog-o',
    'news.google': 'goog-news',
    'news.url.google': 'goog-news',
    'bing': 'bing-o',
    'search.yahoo': 'yaho-o',
    'yahoo': 'yaho-ref',
    'facebook': 'fb',
    'm.facebook': 'fb',
    'linkedin': 'li',
    'twitter': 'twtr',
    'mobile.twitter': 'twtr'
};
/**
 * This is a FbsAdsService which controls the ads.
 *
 * [Implementation](https://github.forbes.com/Templates/fbs-ads-2#forbes-ads-2)
 */
var FbsAdsService = (function (_super) {
    __extends(FbsAdsService, _super);
    function FbsAdsService() {
        var _this = _super.call(this) || this;
        _this.googletag = window['googletag'] = window['googletag'] || {
            cmd: []
        };
        _this.googleTagProxy = new __WEBPACK_IMPORTED_MODULE_3__googletag__["a" /* GoogleTagProxy */](_this.googletag);
        _this._config = __WEBPACK_IMPORTED_MODULE_5__defaults__["a" /* defaultAdConfig */];
        _this.initialized = false;
        _this.adSlots = new Map();
        _this.adCounts = {};
        _this.bids = [];
        _this.medianetService = new __WEBPACK_IMPORTED_MODULE_6__medianet_medianet_service__["a" /* MedianetBiddingService */]();
        _this.medianetVideoService = new __WEBPACK_IMPORTED_MODULE_7__medianet_medianet_video_service__["a" /* MediaNetVideoBiddingService */]();
        _this.amazonBiddingService = new __WEBPACK_IMPORTED_MODULE_4__amznads_amazon_bidding_service__["a" /* AmazonBiddingService */]();
        _this.criteoBiddingService = new __WEBPACK_IMPORTED_MODULE_9__criteo__["a" /* CriteoBiddingService */]();
        return _this;
    }
    Object.defineProperty(FbsAdsService.prototype, "adUnitPath", {
        get: function () {
            return this._config.ad_unit_path;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check user consents.
     * @param {string} isEurope
     * @returns {boolean} true if the user chose a consent option or consent isn't required.
     */
    FbsAdsService.prototype.metConsentRequirement = function (isEurope) {
        return (!isEurope || document.cookie.match(/notice_gdpr_prefs=/));
    };
    /**
     * This bootstraps the Service with the given config.
     *
     * It applies page level targeting.
     */
    FbsAdsService.prototype.bootstrap = function (config) {
        var _this = this;
        if (!config) {
            return;
        }
        var submitPreferencesHandler = function (message) {
            try {
                var result = JSON.parse(message.data);
                if (result && result.source === 'preference_manager' && result.message === 'submit_preferences') {
                    setTimeout(function () {
                        _this.bootstrap(config);
                        message.currentTarget.removeEventListener(message.type, submitPreferencesHandler);
                    });
                }
            }
            catch (e) { }
        };
        if (!this.metConsentRequirement(config.isEurope)) {
            window.addEventListener('message', submitPreferencesHandler);
            return;
        }
        this.apiReady = true;
        if (config) {
            this.medianetService.init(config);
            if (!config.mobile) {
                this.criteoBiddingService.init();
            }
        }
        var shoppingInsightsGroup = config && this.getShoppingInsightsGroup(config.params || {});
        this.amazonBiddingService.init(shoppingInsightsGroup);
        Object(__WEBPACK_IMPORTED_MODULE_10__moat_moat_bidding__["a" /* initMoatYield */])();
        if (config) {
            this.applyConfig(config);
        }
        this.loadGoogletag();
        this.setup();
        __WEBPACK_IMPORTED_MODULE_2__utils_performance_utilities__["a" /* PerformanceUtilities */].mark('Service Bootstrap');
    };
    /**
     * This sets up ads and gives header bidding 100ms to complete.
     * This should be called after all third party scripts are loaded and configs are set.
    */
    FbsAdsService.prototype.setup = function () {
        this.setEventListeners();
        var event = new CustomEvent('FbsAdsBootstrapped');
        document.dispatchEvent(event);
        this.enableAds();
    };
    /**
     * This applies a config and overwrites the existing config.
     */
    FbsAdsService.prototype.applyConfig = function (config) {
        var _this = this;
        // Copy the current and input so the originals are not altered
        var newConfig = Object.assign({}, config);
        var oldConfig = Object.assign({}, this._config);
        // Apply The new options onto the old config
        oldConfig.positions = Object.assign({}, oldConfig.positions, newConfig.positions);
        oldConfig.ad_unit_path = newConfig.ad_unit_path || this.adUnitPath;
        oldConfig.mobile = newConfig.mobile || oldConfig.mobile;
        newConfig.params = newConfig.params || {};
        newConfig.params.src = this.getTargetingSource(); // Attach src to the targeting
        this._config = Object.assign({}, newConfig, oldConfig); // Finally merge the old config back onto the new config
        this.applyTargeting(newConfig.params); // Apply the new targeting
        var _a = newConfig.params, _b = _a.channel, channel = _b === void 0 ? [] : _b, _c = _a.section, section = _c === void 0 ? [] : _c;
        this.medianetService.setChannelSection({
            channel: channel,
            section: section
        });
        this.fetchAmazonBids(config.amazonSlots)
            .then(function (bids) {
            _this.bids = bids;
        });
    };
    /**
     * Initialize MediaNet video bidding
     *
     * Invoked externally from video package because not all pages have video
     */
    FbsAdsService.prototype.initMediaNetVideoBidding = function () {
        return this.medianetVideoService.init();
    };
    /**
     * Fetches MediaNet video bid string
     */
    FbsAdsService.prototype.fetchMediaNetVideoBids = function () {
        return this.medianetVideoService.fetchMediaNetBids();
    };
    /**
     * This fetches Amazon header bids.
     */
    FbsAdsService.prototype.fetchAmazonBids = function (amazonSlots) {
        return this.amazonBiddingService.fetchBids(amazonSlots);
    };
    /**
     * This fetches Criteo header bids.
     */
    FbsAdsService.prototype.fetchCriteoBids = function (adUnits, bidRanges) {
        return this.criteoBiddingService.fetchBids(adUnits, bidRanges);
    };
    /**
     * This sets Criteo DFP Targeting.
     */
    FbsAdsService.prototype.setCriteoTargeting = function () {
        var _this = this;
        this.googleTagProxy.push(function () {
            _this.criteoBiddingService.setTargeting();
        });
    };
    /**
     * This enables the ads. Should only be called after all initializion has been completed.
     */
    FbsAdsService.prototype.enableAds = function () {
        var _this = this;
        setTimeout(function () {
            _this.googleTagProxy.pushFirst(function () {
                // Lazy loading ads configuration
                if (_this._config.single_request) {
                    _this.googletag.pubads().enableSingleRequest();
                    _this.googletag.pubads().disableInitialLoad();
                }
                if (_this._config.safe_frame) {
                    _this.googletag.pubads().setSafeFrameConfig({
                        sandbox: true
                    });
                }
                _this.googletag.pubads().enableAsyncRendering();
                _this.googletag.pubads().collapseEmptyDivs();
                _this.setRequestNonPersonalizedAds();
                __WEBPACK_IMPORTED_MODULE_2__utils_performance_utilities__["a" /* PerformanceUtilities */].mark("Enable Services");
                _this.googletag.enableServices();
            });
            _this.googleTagProxy.enable();
        }, 100);
    };
    /**
     * This creates a new slot.
     * @param positionName Name of the position to be created
     * @param adId ad-id which overwrites
     */
    FbsAdsService.prototype.createSlot = function (positionName, adId, customTargeting) {
        var _this = this;
        var position = this.getPosition(positionName);
        var incrementalId = (adId || position.slot_id || '').replace(/-\d+$/, '');
        if (position.incremental) {
            this.incrementAd(incrementalId);
        }
        var incrementalCount = this.adCounts[incrementalId];
        adId = this.getDivId(position.slot_id, adId);
        if (this.adSlots.get(adId)) {
            return;
        }
        if (position.criteoZoneId) {
            var criteoParams = {
                placements: [
                    {
                        slotid: adId,
                        zoneid: position.criteoZoneId
                    }
                ]
            };
            this.fetchCriteoBids(criteoParams, __WEBPACK_IMPORTED_MODULE_9__criteo__["b" /* lineItemRanges */])
                .then(function () { return _this.setCriteoTargeting(); });
        }
        this.googleTagProxy.push(function () {
            __WEBPACK_IMPORTED_MODULE_2__utils_performance_utilities__["a" /* PerformanceUtilities */].mark("Created " + adId);
            var slot;
            try {
                slot = _this.googletag
                    .defineSlot(position.ad_unit_path || _this.adUnitPath, position.sizes, adId);
            }
            catch (e) {
                return;
            }
            if (!slot) {
                return;
            }
            _this.adSlots.set(adId, slot
                .setTargeting('pos', position.slot_id)
                .setTargeting('slotId', adId)
                .addService(_this.googletag.pubads()));
            var slots = Array.from(_this.adSlots.keys());
            var slotsEvent = new CustomEvent('fbs-ad-slots', {
                detail: slots
            });
            document.dispatchEvent(slotsEvent);
            _this.amazonBiddingService.setAmazonTargeting(slot, _this.bids);
            Object(__WEBPACK_IMPORTED_MODULE_10__moat_moat_bidding__["b" /* targetYieldSlot */])(slot);
            _this.applyTargeting(position.params, _this.adSlots.get(adId));
            if (position.incremental) {
                _this.adSlots.get(adId).setTargeting(position.slot_id, incrementalCount.toString());
            }
            if (position.slot_id === 'rec') {
                // add recx=0 custom parameter to rec ad calls
                _this.adSlots.get(adId).setTargeting('recx', '0');
            }
            else if (position.slot_id === 'mobilerec') {
                // add mobilex=0 custom parameter to rec ad calls
                _this.adSlots.get(adId).setTargeting('mobilex', '0');
            }
            if (customTargeting) {
                var kvs = customTargeting.split(',');
                kvs.forEach(function (kv) {
                    var keyValuePair = kv.split(':');
                    _this.adSlots.get(adId).setTargeting(keyValuePair[0] || '', keyValuePair[1] || '');
                });
            }
            if (_this._config.single_request) {
                _this.googletag.pubads().enableSingleRequest();
                _this.googletag.pubads().disableInitialLoad();
            }
            _this.googletag.enableServices();
        });
    };
    /**
     * Displays Performance Timings
     */
    FbsAdsService.prototype.checkPerformance = function () {
        var perf = [];
        performance.getEntriesByType('mark').forEach(function (mark) {
            perf.push([mark.name, mark.startTime]);
        });
        console.table(perf);
        return perf;
    };
    /**
     * This displays the given ad element id
     */
    FbsAdsService.prototype.display = function (adElementId) {
        var _this = this;
        this.googleTagProxy.push(function () {
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_2__utils_performance_utilities__["a" /* PerformanceUtilities */].mark("Called " + adElementId);
                _this.googletag.display(adElementId);
                if (!_this._config.single_request) {
                    return;
                }
                _this.refresh(adElementId);
            });
        });
    };
    /**
     * Load batch of ads in one request (SRA)
     */
    FbsAdsService.prototype.displayBatch = function (batchPositions) {
        var _this = this;
        var batch = batchPositions.map(function (position) { return _this.adSlots.get(position); });
        this.googleTagProxy.push(function () {
            setTimeout(function () {
                _this.googletag.pubads().refresh(batch, {
                    changeCorrelator: false
                });
            });
        });
    };
    /**
     * This refreshes the given ad element id.
     */
    FbsAdsService.prototype.refresh = function (adElementId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.googleTagProxy.push(function () {
                var slot = _this.adSlots.get(adElementId);
                resolve(_this.googletag.pubads().refresh([slot], {
                    changeCorrelator: false
                }));
            });
        });
    };
    /**
     * This destroys the given position.
     */
    FbsAdsService.prototype.destroySlots = function (divId) {
        var _this = this;
        var slot = this.adSlots.get(divId);
        this.adSlots.delete(divId);
        this.googleTagProxy.push(function () { return _this.googletag.destroySlots([slot]); });
    };
    /**
     * This resets the increments of a dynamic ad position.
     * @param position This should be the adId of the ad if it has one, or the position otherwise.
     */
    FbsAdsService.prototype.resetIncrements = function (position) {
        this.adCounts[position] = 0;
    };
    /**
     * This gets the configuration of the given position.
     */
    FbsAdsService.prototype.getPosition = function (position) {
        if (!this._config.positions[position]) {
            var error = new Error("The position " + position + " was not defined in the config.\r\nPlease use another position or define it.");
            throw error;
        }
        return this._config.positions[position];
    };
    /**
     * This gets the site out of the ad unit path.
     */
    FbsAdsService.prototype.getSite = function () {
        return this.adUnitPath.split('/')[2];
    };
    /**
     * This gets the zone and subzones out of the ad unit path.
     */
    FbsAdsService.prototype.getZone = function () {
        var parts = this.adUnitPath.split('/');
        parts.splice(0, 3);
        return parts.join('/');
    };
    /**
     * This gets the ID of the div of a certain position.
     */
    FbsAdsService.prototype.isIncremental = function (position) {
        var adPosition = this.getPosition(position);
        return adPosition.incremental;
    };
    /**
     * This gets the ID of the div of a certain position.
     */
    FbsAdsService.prototype.getDivId = function (position, adId) {
        var adPosition = this.getPosition(position);
        adId = adId || adPosition.ad_id || adPosition.slot_id;
        if (!this.isIncremental(position) || adId.match(/-\d+$/)) {
            return adId;
        }
        return adId + "-" + this.adCounts[adId];
    };
    /**
     * This gets the Slot ID of a given position.
     *
     * They are usually the same.
     */
    FbsAdsService.prototype.getSlotId = function (position) {
        return this.getPosition(position).slot_id;
    };
    /**
     * This gets the sizes targetted by the given position.
     */
    FbsAdsService.prototype.getSizes = function (position) {
        try {
            return this.getPosition(position).sizes;
        }
        catch (e) {
            console.error(e.stack);
            return [[0, 0]];
        }
    };
    /**
     * This gets the maximum width targetted by the given position.
     */
    FbsAdsService.prototype.getMaxWidth = function (position) {
        var maxWidth = 0;
        this.getSizes(position).forEach(function (size) {
            if (Array.isArray(size)) {
                maxWidth = size[0] > maxWidth ? size[0] : maxWidth;
            }
        });
        return maxWidth;
    };
    /**
     * This gets the maximum height targetted by the given position.
     */
    FbsAdsService.prototype.getMaxHeight = function (position) {
        var maxHeight = 0;
        this.getSizes(position).forEach(function (size) {
            if (Array.isArray(size)) {
                maxHeight = size[1] > maxHeight ? size[1] : maxHeight;
            }
        });
        return maxHeight;
    };
    /**
     * This gets the maximum possible size targetted by the given position.
     */
    FbsAdsService.prototype.getMaxSize = function (position) {
        return [this.getMaxWidth(position), this.getMaxHeight(position)];
    };
    /**
     * Gets the current page level targetted value of the key
     */
    FbsAdsService.prototype.getTargeting = function (key) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.googleTagProxy.push(function () {
                resolve(_this.googletag.pubads().getTargeting(key));
            });
        });
    };
    /**
     * Gets all of the current page level targeting data
     */
    FbsAdsService.prototype.getPageTargeting = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.googleTagProxy.push(function () {
                var targetingKeys = _this.googletag.pubads().getTargetingKeys().reduce(function (targeting, key) {
                    targeting[key] = _this.googletag.pubads().getTargeting(key);
                    return targeting;
                }, {});
                resolve(targetingKeys);
            });
        });
    };
    FbsAdsService.prototype.resetAmazonSlots = function () {
        this.amazonBiddingService.resetAmazonSlots();
    };
    /**
     * This increments a dynamic ad.
     */
    FbsAdsService.prototype.incrementAd = function (adId) {
        if (!adId) {
            return;
        }
        this.adCounts[adId] = this.adCounts[adId] || 0;
        this.adCounts[adId]++;
    };
    /**
     * This sets eventl isteners for render and viewable ads
     */
    FbsAdsService.prototype.setEventListeners = function () {
        this.listenToRender();
        this.listenToViewable();
    };
    /**
     * This initiates the slot Render Ended Listener.
     */
    FbsAdsService.prototype.listenToRender = function () {
        var _this = this;
        this.googleTagProxy.push(function () {
            _this.googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                var renderEvent = new CustomEvent('fbs-ad-render', {
                    detail: event
                });
                document.dispatchEvent(renderEvent);
            });
        });
        // Support AAX Slot Render Ended Function.
        window['aax'] = window['aax'] || {};
        window['aax'].cmd = window['aax'].cmd || [];
        window['aax'].cmd.push(function () {
            window['aax'].addEventListener('slotRenderEnded', function (event) {
                event.dfpDetails['aax'] = true;
                var size = event.dfpDetails.size;
                // Acceptable Ad Exchange 'aax'
                // sends the sizes back as a string
                // i.e. '300x250'
                // which breaks everything, so we have to change it
                // to an array of Numbers
                if (!Array.isArray(size)) {
                    var newSize = size.split('x').map(Number);
                    event.dfpDetails.size = newSize;
                }
                var renderEvent = new CustomEvent('fbs-ad-render', {
                    detail: event.dfpDetails
                });
                document.dispatchEvent(renderEvent);
            });
        });
    };
    /**
     * This initiates the slot Viewable Listener.
     */
    FbsAdsService.prototype.listenToViewable = function () {
        var _this = this;
        this.googleTagProxy.push(function () {
            _this.googletag.pubads().addEventListener('impressionViewable', function (event) {
                var viewableEvent = new CustomEvent('fbs-ad-viewable', {
                    detail: event
                });
                document.dispatchEvent(viewableEvent);
            });
        });
    };
    FbsAdsService.prototype.loadGoogletag = function () {
        Object(__WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__["a" /* loadScript */])('//www.googletagservices.com/tag/js/gpt.js', function () { });
    };
    /**
     * This applies targeting.
     */
    FbsAdsService.prototype.applyTargeting = function (params, target) {
        var _this = this;
        if (!params) {
            return;
        }
        // check for ad_target_override parameter in the url
        params = this.setCustomParams(window, params);
        this.googleTagProxy.push(function () {
            target = target || _this.googletag.pubads();
            Object.keys(params).forEach(function (key) {
                var value = params[key];
                value = !Array.isArray(value) && value !== null && value !== undefined && value.toString ? value.toString() : value;
                if (value) {
                    target.setTargeting(key, value);
                }
                else {
                    target.clearTargeting(key);
                }
            });
        });
    };
    FbsAdsService.prototype.getTargetingSource = function () {
        if (this.originalSource) {
            return this.originalSource;
        }
        var trackingService = window['trackingService'];
        var url = trackingService ? trackingService.getPreviousUrl() : document.referrer;
        if (!url) {
            return '';
        }
        var domain = __WEBPACK_IMPORTED_MODULE_8__utils_url_utilities__["a" /* UrlUtilities */].getDomain(url).replace('www.', '');
        domain = domain.slice(0, domain.lastIndexOf('.'));
        this.originalSource = targetingSourceMap[domain] || '';
        return this.originalSource;
    };
    /**
     * Helper method to get correct channel/section string for Amazon
     */
    FbsAdsService.prototype.getChannelSection = function (data) {
        return Array.isArray(data) ? data[0] : (data || '').toString().split(',')[0];
    };
    /**
     * Amazon can only accept one key value pair
     * Filters config parameters so that value with the
     * highest priority is sent.
     *
     * specialslot > section[] > channel[]
     */
    FbsAdsService.prototype.getShoppingInsightsGroup = function (configParameters) {
        var specialslot = configParameters.specialslot, section = configParameters.section, channel = configParameters.channel, displaychannel = configParameters.displaychannel, displaysection = configParameters.displaysection;
        var insightsSection = this.getChannelSection(section) || displaysection;
        var insightsChannel = this.getChannelSection(channel) || displaychannel;
        return specialslot || insightsSection || insightsChannel;
    };
    /**
     * Adds or overrides key value pair to ad targeting params when added to the url as a query parameter
     * example: https://www.forbes.com/sites/some-article/?ad_target_override=test:true
     *
     * Note - the window object is being passed solely for the purpose of unit testing
     */
    FbsAdsService.prototype.setCustomParams = function (window, targetParams) {
        var queryParams = (window.location.search).substring(1).split('&');
        var adTargetOverride;
        for (var i = 0; i < queryParams.length; i++) {
            var paramKey = decodeURIComponent((queryParams[i] || '')).split('=');
            if (paramKey[0].indexOf('ad_target_override') > -1) {
                adTargetOverride = (paramKey[1] || '').split(',');
            }
        }
        if (!adTargetOverride) {
            return targetParams;
        }
        for (var i = 0; i < adTargetOverride.length; i++) {
            var params = adTargetOverride[i].split(':');
            if (params[0]) {
                targetParams[params[0]] = params[1] || '';
            }
        }
        return targetParams;
    };
    /**
     * Serving non-personalized ads for EU users who do not provide GDPR consent
     */
    FbsAdsService.prototype.setRequestNonPersonalizedAds = function () {
        var _this = this;
        if (document.cookie.match(/notice_gdpr_prefs=0(?:,1)?:/)) {
            this.googleTagProxy.push(function () {
                _this.googletag.pubads().setRequestNonPersonalizedAds(1);
            });
        }
    };
    return FbsAdsService;
}(__WEBPACK_IMPORTED_MODULE_1__ads_service__["a" /* AdsService */]));

//# sourceMappingURL=fbs-ads.service.js.map

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Pubads */
/* unused harmony export GoogleTag */
var Pubads = (function () {
    function Pubads() {
    }
    Pubads.prototype.collapseEmptyDivs = function () {
        return false;
    };
    Pubads.prototype.enableAsyncRendering = function () {
        return false;
    };
    Pubads.prototype.enableSingleRequest = function () { };
    Pubads.prototype.disableInitialLoad = function () { };
    Pubads.prototype.clearTargeting = function (id) { };
    Pubads.prototype.refresh = function (slots, options) { };
    Pubads.prototype.addEventListener = function (name, callback) { };
    Pubads.prototype.setSafeFrameConfig = function (config) { };
    Pubads.prototype.setTargeting = function (key, value) {
        return this;
    };
    Pubads.prototype.getTargeting = function (key) {
        return [];
    };
    Pubads.prototype.getTargetingKeys = function () {
        return [];
    };
    Pubads.prototype.setRequestNonPersonalizedAds = function (val) { };
    return Pubads;
}());

// tslint:disable-next-line:max-classes-per-file
var GoogleTag = (function () {
    function GoogleTag() {
        this.apiReady = false;
        this.pubadsReady = false;
        this.cmd = [];
        this.dummyAd = {
            setTargeting: function (key, value) {
                return this;
            },
            getTargeting: function (key) {
                return [];
            },
            getTargetingKeys: function () {
                return [];
            },
            clearTargeting: function (key) {
                return this;
            },
            addService: function (service) {
                return this;
            },
            getSlotElementId: function () {
                return '';
            }
        };
    }
    GoogleTag.prototype.pubads = function () {
        return new Pubads();
    };
    GoogleTag.prototype.enableServices = function () { };
    GoogleTag.prototype.disableInitialLoad = function () { };
    GoogleTag.prototype.defineSlot = function (siteZone, sizes, id) {
        return this.dummyAd;
    };
    GoogleTag.prototype.display = function (id) { };
    GoogleTag.prototype.destroySlots = function (slotArray) {
        return false;
    };
    return GoogleTag;
}());

//# sourceMappingURL=googletag.interfaces.js.map

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleTagProxy; });
var GoogleTagProxy = (function () {
    function GoogleTagProxy(googletag) {
        this.enabled = false;
        this.queue = [];
        this.googletag = googletag;
    }
    GoogleTagProxy.prototype.push = function (cb) {
        this.queue.push(cb);
        if (this.enabled) {
            this.flush();
        }
    };
    GoogleTagProxy.prototype.pushFirst = function (cb) {
        this.queue.unshift(cb);
        if (this.enabled) {
            this.flush();
        }
    };
    GoogleTagProxy.prototype.flush = function () {
        while (this.queue.length) {
            this.googletag.cmd.push(this.queue.shift());
        }
    };
    GoogleTagProxy.prototype.enable = function () {
        this.enabled = true;
        this.flush();
    };
    GoogleTagProxy.prototype.disable = function () {
        this.enabled = false;
    };
    return GoogleTagProxy;
}());

//# sourceMappingURL=googletag-proxy.js.map

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedianetBiddingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__ = __webpack_require__(35);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

/**
 * Handles Medianet Header Bidding
 */
var MedianetBiddingService = (function () {
    function MedianetBiddingService() {
        this.advBidxc = {
            setTargetingForAdUnitsGPTAsync: function () { },
            next: function () { }
        };
        this.channel = '';
        this.section = '';
    }
    Object.defineProperty(MedianetBiddingService.prototype, "isLoaded", {
        get: function () {
            return this.advBidxc.isLoaded;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize Medianet Header Bidding
     */
    MedianetBiddingService.prototype.init = function (config) {
        var _a = config.params, _b = _a === void 0 ? {} : _a, _c = _b.channel, channel = _c === void 0 ? [] : _c, _d = _b.section, section = _d === void 0 ? [] : _d;
        this.setChannelSection({
            channel: channel,
            section: section
        });
        this.loadMedianet(config.mobile);
    };
    /**
     * Apply Targeting for Medianet Header Bidding
     */
    MedianetBiddingService.prototype.applyConfig = function (data) {
        if (!data) {
            return;
        }
        this.data = data || this.data;
        this.advBidxc.channel = data.channel || this.channel;
        this.advBidxc.section = data.section || this.section;
        this.advBidxc.version = 4.1;
        this.advBidxc.domain = window.location.hostname;
        window['advBidxc'] = __assign({}, window['advBidxc'], this.advBidxc);
    };
    /**
     * Prefetch bids
     */
    MedianetBiddingService.prototype.prefetchBids = function () {
        if (this.advBidxc) {
            this.advBidxc.next();
        }
    };
    /**
     * Load medianet script
     */
    MedianetBiddingService.prototype.loadMedianet = function (mobile) {
        var _this = this;
        // @TODO - This is some pretty haphazard code. Fix it later
        // If the application loads the medianet script earlier than ads bootstrap, tell us not to load it again
        // App handles running the callback at the appropriate time
        if ((window['forbes'] || {}).fastFetchMedianet) {
            window['forbes'].fastFetchMedianetCb(function () {
                _this.advBidxc = __assign({}, window['advBidxc'], _this.advBidxc);
                _this.applyConfig(_this.advBidxc);
            });
        }
        else {
            var cid = mobile ? '8CUQ517Y2' : '8CUX956JU';
            Object(__WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__["a" /* loadScript */])("https://contextual.media.net/bidexchange.js?cid=" + cid + "&https=1", function () {
                _this.advBidxc = __assign({}, window['advBidxc'], _this.advBidxc);
                _this.applyConfig(_this.advBidxc);
            });
        }
    };
    MedianetBiddingService.prototype.setChannelSection = function (channelSection) {
        var channel = channelSection.channel, section = channelSection.section;
        this.channel = (channel || []).join(',');
        this.section = (section || []).map(function (sectionName) { return sectionName.split(':')[1]; }).join(',');
        if (this.advBidxc) {
            this.advBidxc.channel = this.channel;
            this.advBidxc.section = this.section;
        }
        this.applyConfig({ channel: this.channel, section: this.section });
    };
    return MedianetBiddingService;
}());

//# sourceMappingURL=medianet.service.js.map

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaNetVideoBiddingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__ = __webpack_require__(35);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var MediaNetVideoBiddingService = (function () {
    function MediaNetVideoBiddingService() {
    }
    MediaNetVideoBiddingService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.mnHandleX = window['_mNHandleX'] = window['_mNHandleX'] || {};
                this.mnHandleX.queue = this.mnHandleX.queue || [];
                this.mnX = window['_mNX'] = window['_mNX'] || {};
                this.mnX.videoAdvBidxc = this.mnX.videoAdvBidxc || {};
                this.mnX.crid = '545004763';
                window['medianetX_requrl'] = 'https://forbes.com';
                return [2 /*return*/, new Promise(function (resolve) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__["a" /* loadScript */])('https://adservex.media.net/videoAds.js?cid=8CU2Y65FS&crid=545004763&https=1&dn=forbes.com', resolve);
                    })];
            });
        });
    };
    MediaNetVideoBiddingService.prototype.fetchMediaNetBids = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.mnHandleX.queue.push(function () {
                            try {
                                _this.mnX.videoAdvBidxc.setImaCallback(resolve);
                            }
                            catch (e) {
                                reject(e);
                            }
                        });
                    }).then(function () {
                        _this.mnX.videoAdvBidxc.mnetDfpCallParamsConsumed = true;
                        return _this.mnX.videoAdvBidxc.mnetDfpCallParams || '';
                    }).catch(function (error) {
                        console.error(error);
                        return '';
                    })];
            });
        });
    };
    return MediaNetVideoBiddingService;
}());

//# sourceMappingURL=medianet-video.service.js.map

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlUtilities; });
var UrlUtilities = (function () {
    function UrlUtilities() {
    }
    /**
     * Domain of the URL
     * @param url URL to get domain of
     */
    UrlUtilities.getDomain = function (url) {
        if (!url) {
            return '';
        }
        return url.replace(/http(s)?:\/\//, '').split('/')[0];
    };
    return UrlUtilities;
}());

//# sourceMappingURL=url.utilities.js.map

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initMoatYield;
/* harmony export (immutable) */ __webpack_exports__["b"] = targetYieldSlot;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__ = __webpack_require__(35);

function initMoatYield() {
    Object(__WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__["a" /* loadScript */])('//z.moatads.com/forbesprebidheader122641196143/yi.js');
}
function targetYieldSlot(slot) {
    try {
        window['moatPrebidApi'].setMoatTargetingForSlot(slot);
    }
    catch (e) {
        console.error('Error targeting MOAT yield for slot', slot.getSlotElementId());
    }
}
//# sourceMappingURL=moat-bidding.js.map

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__medianet_interfaces__ = __webpack_require__(259);
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MediaNet */
var MediaNet = (function () {
    function MediaNet() {
        // indicates if the medianet js script is loaded
        this.isLoaded = false;
    }
    // sets medianet key value pair for slot(s)
    MediaNet.prototype.setTargetingForAdUnitsGPTAsync = function () { };
    MediaNet.prototype.next = function () { };
    return MediaNet;
}());

//# sourceMappingURL=medianet.interfaces.js.map

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_fbs_tracking__ = __webpack_require__(261);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_fbs_tracking__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__(262);
/* unused harmony reexport TrackingService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbs_tracking_service__ = __webpack_require__(263);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__fbs_tracking_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fbs_tracking_util__ = __webpack_require__(125);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__google_analytics__ = __webpack_require__(124);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TrackingService */
/**
 * This is a service for tracking to Google Analytics/GTM.
 */
var TrackingService = /** @class */ (function () {
    function TrackingService() {
    }
    return TrackingService;
}());

//# sourceMappingURL=tracking.service.js.map

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbsTrackingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookies__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_analytics__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fbs_tracking_util__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sharing_hash_sharing_hash_service__ = __webpack_require__(268);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




/**
 * This service is used to fire tracking of any sort.
 *
 * [Implementation](https://github.forbes.com/Templates/fbs-tracking-2/blob/master/readme.md)
 */
var FbsTrackingService = /** @class */ (function () {
    function FbsTrackingService() {
        this.gaPreviousUrl = null;
        this.previousUrl = null;
        this.previousPath = null;
        this.cookiesService = new __WEBPACK_IMPORTED_MODULE_0__cookies__["a" /* CookiesService */]();
        this.googleAnalyticsService = new __WEBPACK_IMPORTED_MODULE_1__google_analytics__["a" /* GoogleAnalyticsService */]();
        this.sharingHashService = new __WEBPACK_IMPORTED_MODULE_3__sharing_hash_sharing_hash_service__["a" /* SharingHashService */]();
        this.trackingCalls = [];
        this.isEurope = false;
    }
    FbsTrackingService.prototype.metConsentRequirement = function () {
        return !this.isEurope || document.cookie.match(/notice_gdpr_prefs=/);
    };
    /**
     * This tracks the given data.
     */
    FbsTrackingService.prototype.track = function (trackingData, isPageview) {
        var _this = this;
        if (!this.metConsentRequirement()) {
            var submitPreferencesHandler_1 = function (message) {
                try {
                    var result = JSON.parse(message.data);
                    if (result && result.source === 'preference_manager' && result.message === 'submit_preferences') {
                        setTimeout(function () {
                            _this.track(trackingData, isPageview);
                            message.currentTarget.removeEventListener(message.type, submitPreferencesHandler_1);
                        });
                    }
                }
                catch (e) { }
            };
            window.addEventListener('message', submitPreferencesHandler_1);
            return;
        }
        if (!trackingData) {
            return;
        }
        if (isPageview) {
            this.updatePreviousUrl();
            this.sharingHashService.setHash();
        }
        var parentHash = this.sharingHashService.getParentHash() || 'none';
        var childHash = this.sharingHashService.getChildHash() || 'none';
        trackingData = __assign({}, trackingData, { shareParent: parentHash, shareChild: childHash, referrer: this.gaPreviousUrl, fastSu: trackingData.fastSu ? trackingData.fastSu + '#' + this.sharingHashService.getHash() : '', fastCi: this.getOrCreateClientId(), fastRe: trackingData.fastRe || this.previousUrl, isEurope: this.isEurope.toString() });
        this.googleAnalyticsService.track(trackingData);
        // Collect calls for e2e testing
        this.trackingCalls.push(trackingData);
    };
    /**
     * Generates or retrieves client_id
     */
    FbsTrackingService.prototype.getOrCreateClientId = function () {
        var clientId = this.cookiesService.get('client_id') || __WEBPACK_IMPORTED_MODULE_2__fbs_tracking_util__["a" /* TrackingUtil */].generateClientId();
        var expiresDate = new Date();
        expiresDate.setFullYear(expiresDate.getFullYear() + 2);
        this.cookiesService.set('client_id', clientId, { 'expires': expiresDate });
        return clientId;
    };
    /**
     * Set the environment
     *
     * This defaults to dev but it should really be set according to the environment where it is running
     */
    FbsTrackingService.prototype.setEnvironment = function (environmentName) {
        this.googleAnalyticsService.setEnvironment(environmentName);
    };
    /**
     * Get the previous URL of the page which has WA and not have WA.
     */
    FbsTrackingService.prototype.getPreviousUrl = function () {
        return this.previousUrl || this.cookiesService.get('refURL') || document.referrer || '';
    };
    /**
     * Get the previous URL of the page and page scorll only for GA.
     */
    FbsTrackingService.prototype.getGAPreviousUrl = function () {
        return this.gaPreviousUrl || document.referrer || '';
    };
    /**
     * This updates the previous URL of the page.
     *
     * This takes into consideration that the welcome ad is not a real page.
     *
     * It should run exactly once per page view.
     */
    FbsTrackingService.prototype.updatePreviousUrl = function () {
        if (this.previousPath && this.previousPath !== window.location.pathname) {
            this.previousUrl = window.location.protocol + '//' + window.location.host + this.previousPath;
            this.gaPreviousUrl = window.location.protocol + '//' + window.location.host + this.previousPath;
        }
        else {
            this.gaPreviousUrl = this.getGAPreviousUrl();
            this.previousUrl = this.getPreviousUrl();
            this.cookiesService.remove('refURL', { 'path': '/', 'domain': '.forbes.com' });
            this.cookiesService.remove('toURL', { 'path': '/', 'domain': '.forbes.com' });
        }
        this.previousPath = window.location.pathname;
    };
    return FbsTrackingService;
}());

//# sourceMappingURL=fbs-tracking.service.js.map

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookies_service__ = __webpack_require__(265);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cookies_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);

/**
 * Default Cookie Options
 */
var defaultOptions = {
    path: '/',
    domain: '.forbes.com'
};
/**
 * Cookie Service
 */
var CookiesService = /** @class */ (function () {
    function CookiesService() {
    }
    /**
     * Get Cookie data by name
     */
    CookiesService.prototype.get = function (prop) {
        return __WEBPACK_IMPORTED_MODULE_0_js_cookie__["get"](prop);
    };
    /**
     * Set Cookie data
     */
    CookiesService.prototype.set = function (prop, value, options) {
        options = this.getOptions(options);
        __WEBPACK_IMPORTED_MODULE_0_js_cookie__["set"](prop, value, options);
    };
    /**
     * Remove cookie by name
     */
    CookiesService.prototype.remove = function (name, options) {
        options = this.getOptions(options);
        __WEBPACK_IMPORTED_MODULE_0_js_cookie__["remove"](name, options);
    };
    /**
     * get options on top of default options
     */
    CookiesService.prototype.getOptions = function (options) {
        return Object.assign({}, defaultOptions, options);
    };
    return CookiesService;
}());

//# sourceMappingURL=cookies.service.js.map

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__ = __webpack_require__(35);

var gtmContainers = {
    prod: 'GTM-NMQJM4',
    staging: 'GTM-KRRS9R'
};
/**
 * This is a service for tracking to GoogleAnalytics through GTM
 */
var GoogleAnalyticsService = /** @class */ (function () {
    function GoogleAnalyticsService() {
        this.initialized = false;
        this.dataLayer = window['dataLayer'] = window['dataLayer'] || [];
        this.containerId = gtmContainers.staging; // This is the default container ID
    }
    GoogleAnalyticsService.convertData = function (data) {
        if (data.eventLabel) {
            data['event label'] = data.eventLabel;
        }
        if (data.eventCategory) {
            data['event category'] = data.eventCategory;
        }
        if (data.eventAction) {
            data['event action'] = data.eventAction;
        }
        if (data.eventValue) {
            data['event value'] = data.eventValue;
        }
        delete data.eventLabel;
        delete data.eventCategory;
        delete data.eventAction;
        delete data.eventValue;
    };
    /**
     * This fires a GA Call via GTM
     */
    GoogleAnalyticsService.prototype.track = function (data) {
        if (!data) {
            return;
        }
        GoogleAnalyticsService.convertData(data);
        this.dataLayerPush(data);
        if (!this.initialized) {
            this.init();
        }
    };
    /**
     * Set the container to match environment
     */
    GoogleAnalyticsService.prototype.setEnvironment = function (environment) {
        this.containerId = gtmContainers[environment];
    };
    /**
     * This puts necessary GA Variables on the page.
     */
    GoogleAnalyticsService.prototype.init = function () {
        this.initialized = true;
        this.dataLayerPush({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        window['analyticsEvent']
            = window['analyticsSocial']
                = window['analyticsVPV']
                    = window['analyticsClearVPV']
                        = window['analyticsForm']
                            = function () { };
        Object(__WEBPACK_IMPORTED_MODULE_0__forbes_fbs_assets_loader__["a" /* loadScript */])('https://www.googletagmanager.com/gtm.js?id=' + this.containerId, function () {
            var event = new CustomEvent('fbs-gtm-init');
            window.dispatchEvent(event);
        });
    };
    /**
     * Just a wrapper around dataLayer.push
     */
    GoogleAnalyticsService.prototype.dataLayerPush = function (data) {
        this.dataLayer.push(data);
    };
    return GoogleAnalyticsService;
}());

//# sourceMappingURL=google-analytics.service.js.map

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharingHashService; });
var SharingHashService = /** @class */ (function () {
    function SharingHashService() {
        this.hash = '';
    }
    /**
     * Get the parent half of the current hash.
     * @returns {string} The parent half of the hash, or the empty string if the page started without a hash.
     */
    SharingHashService.prototype.getParentHash = function () {
        return this.hash.slice(0, 12) !== '2715e4857a0b' ? this.hash.slice(0, 12) : '';
    };
    SharingHashService.prototype.getChildHash = function () {
        return this.hash.slice(12);
    };
    SharingHashService.prototype.getHash = function () {
        return this.hash;
    };
    SharingHashService.prototype.setHash = function () {
        var hash = this.harvestSharingHashTree(location.hash.slice(1));
        history.replaceState(history.state || null, '', "" + location.pathname + location.search + "#" + hash.slice(12));
    };
    /**
    * Extracts sharing hash tree data from current hash in url
    * @param hash The url hash, without the leading '#' character
    **/
    SharingHashService.prototype.harvestSharingHashTree = function (hash) {
        var newHash;
        // Hash can be 12 or 24 characters depending on when it was generated - urls were shortened to only show 12 characters on 1/21/16 build.
        // Fastpixel call still sends full 24 character data.
        if (hash && (hash.length === 12 || hash.length === 24)) {
            hash = hash.slice(hash.length - 12);
        }
        else {
            var parentHash = this.hash31('WhereDidYouComeFromWhereDidYouGo').toString(16), childHash = this.hash31('SomethingSomethingCottonEyedJoe').toString(16);
            hash = ("" + parentHash + childHash).slice(0, 12);
        }
        newHash = (((Math.floor(Math.random() * 4096) << 20) | (+new Date() & 0xFFFFF)) & 0x7FFFFFFF).toString(16);
        newHash += this.pad(this.hash31(location.protocol + "//" + location.host + location.pathname).toString(16), 4, '0');
        newHash += this.pad(newHash, 4, '0');
        newHash = this.pad(newHash, 12, '0').slice(0, 12);
        this.hash = hash += newHash;
        return hash;
    };
    /**
    * Generates 31 bit hash from a given string
    **/
    SharingHashService.prototype.hash31 = function (input) {
        var hash = 2147483647, pointer = input.length;
        while (pointer--) {
            hash = ((hash << 5) - hash + input.charCodeAt(pointer)) & 0x7FFFFFFF;
        }
        return hash;
    };
    /**
        * Pad string to certain length
        * E.G. pad('3', 5, '0') creates '00003'
        *      pad('3', 5, '0', true) creates '30000'
        *      pad('5', 3, '-') creates '--5'
        *      pad('5', 1, '-', true) creates '5'
        */
    SharingHashService.prototype.pad = function (input, limit, padStr, direction) {
        input = '' + input;
        while (input.length < limit) {
            input = (direction) ? input + padStr : padStr + input;
        }
        return input;
    };
    return SharingHashService;
}());

//# sourceMappingURL=sharing-hash.service.js.map

/***/ }),
/* 269 */
/***/ (function(module, exports) {

var desktopAdConfig = {
	single_request: true,
	positions: {
		top: {
			slot_id: 'top',
			sizes: [[728, 90], [970, 66], [970, 250], [970, 90], [7, 1], [1, 1], 'fluid'],
			params: {
				hero: 'true'
			}
		},
		topx: {
			slot_id: 'topx',
			sizes: [[728, 90], [970, 66], [970, 250], [970, 90], [1, 1], 'fluid'],
			incremental: true
		},
		rec: {
			slot_id: 'rec',
			sizes: [[300, 250], [300, 600], [1, 1], 'fluid']
		},
		recx: {
			slot_id: 'recx',
			sizes: [[300, 250], [300, 600], [1, 1], 'fluid'],
			incremental: true
		},
		moreon: {
			slot_id: 'moreon',
			sizes: [[820, 236], [620, 529], [300, 250], [620, 236], 'fluid'],
			incremental: true
		},
		'spon-logo': {
			slot_id: 'spon-logo',
			sizes: [[120, 40], [300, 170], [300, 100], [1, 1]]
		},
		bottom: {
			slot_id: 'bottom',
			sizes: [[728, 90], [970, 250], [1, 1], 'fluid']
		},
		'ntv-home': {
			slot_id: 'ntv-home',
			sizes: [[2, 3], [1, 1], 'fluid'],
			params: {
				strnativekey: 'QLWstPVbbpcwuyqK5ijhxZvL'
			}
		},
		'ntv-deskchannel': {
			slot_id: 'ntv-deskchannel',
			sizes: [[2, 3], [1, 1], 'fluid'],
			params: {
				strnativekey: 'e5tSBXbDmvyVwXbVB7dymzCc'
			},
			incremental: true
		}
	},
	amazonSlots: [{
		slotID: 'rec',
		sizes: [[300, 250]]
	}, {
		slotID: 'recx',
		sizes: [[300, 250]]
	}, {
		slotID: 'top',
		sizes: [[728, 90], [970, 250]]
	}, {
		slotID: 'topx',
		sizes: [[728, 90], [970, 250]]
	}, {
		slotID: 'bottom',
		sizes: [[728, 90], [970, 250]]
	}]
};

var mobileAdConfig = {
	mobile: true,
	safe_frame: true,
	single_request: true,
	positions: {
		artbottom: {
			slot_id: 'artbottom',
			sizes: [[1, 1], 'fluid']
		},
		inread: {
			slot_id: 'inread',
			sizes: [[600, 575], [1, 1], 'fluid']
		},
		'mob-logo': {
			slot_id: 'mob-logo',
			sizes: [[300, 50], [300, 75], [1, 1], 'fluid']
		},
		mobile: {
			slot_id: 'mobile',
			sizes: [[300, 50], [320, 50], [7, 1], [1, 1], 'fluid'],
			params: {
				hero: 'true'
			}
		},
		mobilerec: {
			slot_id: 'mobilerec',
			sizes: [[300, 250], [300, 251], [300, 50], [320, 50], [1, 1], 'fluid'],
			params: {
				strnativekey: '13b84c32'
			}
		},
		mobileint: {
			slot_id: 'mobileint',
			sizes: [[320, 480], [300, 600], [300, 250], [300, 50], [320, 50], [1, 1], 'fluid'],
			incremental: true
		},
		mobilex: {
			slot_id: 'mobilex',
			sizes: [[300, 250], [300, 50], [320, 50], [1, 1], 'fluid'],
			params: {
				strnativekey: '13b84c32'
			},
			incremental: true
		},
		'ntv-article': {
			slot_id: 'ntv-article',
			sizes: [[300, 250], [300, 50], [320, 50], [2, 3], [1, 1], 'fluid'],
			params: {
				strnativekey: 'twzGG8q5aVPXGmiCccciYeT7'
			}
		},
		'ntv-contentm': {
			slot_id: 'ntv-contentm',
			sizes: [[1, 1]],
			params: {
				strnativekey: '6kez5JUH4RdqUg4xdkwSNADy'
			}
		},
		'ntv-mobhome': {
			slot_id: 'ntv-mobhome',
			sizes: [[2, 3], [1, 1], 'fluid'],
			params: {
				strnativekey: 'QLWstPVbbpcwuyqK5ijhxZvL'
			}
		},
		'ntv-mobchannel': {
			slot_id: 'ntv-mobchannel',
			sizes: [[2, 3], [1, 1], 'fluid'],
			params: {
				strnativekey: 'e5tSBXbDmvyVwXbVB7dymzCc'
			},
			incremental: true
		},
		rec: {
			slot_id: 'rec',
			sizes: [[300, 250], [300, 600], [1, 1], 'fluid']
		},
		recx: {
			slot_id: 'recx',
			sizes: [[300, 250], [300, 600], [1, 1], 'fluid']
		},
		'spon-logo': {
			slot_id: 'spon-logo',
			sizes: [[120, 40], [300, 170], [300, 100], [1, 1]]
		},
		mobsearch: {
			slot_id: 'mobsearch',
			sizes: [[300, 250], [1, 1], 'fluid'],
			incremental: true
		}
	},
	amazonSlots: [{
		slotID: 'mobileint',
		sizes: [[320, 50], [300, 50]]
	}, {
		slotID: 'mobile',
		sizes: [[320, 50]]
	}, {
		slotID: 'mobilerec',
		sizes: [[300, 250], [320, 50]]
	}, {
		slotID: 'mobilex',
		sizes: [[300, 250], [320, 50]]
	}]
};

module.exports = {
	desktopAdConfig: desktopAdConfig,
	mobileAdConfig: mobileAdConfig
};

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAbParam; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clientConfigService__ = __webpack_require__(0);


/**
 * Checks to see if Cookie exists.
 * @return {Boolean}
 */
function getABCookie() {
  return document.cookie.indexOf('forbes_ab') !== -1;
}

/**
 * Checks to see if AdBlock is running by adding an element with
 * banned classes to the DOM to see if they are hidden by default.
 * @return {Boolean}
 */
function getABRunning() {
  var adBlockDiv = document.createElement('div');
  adBlockDiv.setAttribute('class', __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["a" /* adBlockClasses */]);
  document.body.append(adBlockDiv);
  return window.getComputedStyle(adBlockDiv).display === 'none';
}

/**
 * Creates proper value for ad reporting. Nothing (undefined) should be
 * reported by default. If the user was flagged by the welcome ad
 * as an adblock user, report whether they kept it "on" or turned it
 * "off".
 * @return {undefined|String}
 */
function getAbParam() {
  var abParam = void 0;
  if (getABCookie()) {
    abParam = getABRunning() ? 'on' : 'off';
  }
  return abParam;
}



/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clientConfigService__ = __webpack_require__(0);


/**
 * Load trustarc popup.
 */
function loadConsentScript() {
	var borderTab = document.createElement('a');
	borderTab.id = 'borderTab';
	var teconsent = document.createElement('div');
	teconsent.id = 'teconsent';
	var trustarcScript = document.createElement('script');
	trustarcScript.src = '//consent.truste.com/notice?domain=forbes.com&c=teconsent&behavior=expressed';
	teconsent.appendChild(trustarcScript);
	borderTab.appendChild(teconsent);
	document.body.appendChild(borderTab);
}

document.addEventListener('DOMContentLoaded', function () {
	if (__WEBPACK_IMPORTED_MODULE_0__clientConfigService__["p" /* isEurope */] && document.cookie.indexOf('notice_gdpr_prefs=') === -1) {
		loadConsentScript();

		var canonical = (window.forbes['simple-site'].tracking || {}).fastSu || '';

		var img = document.createElement('img');
		img.width = 1;
		img.height = 1;
		img.alt = '';
		img.src = 'https://www.google-analytics.com/collect?v=1&tid=UA-5883199-3&cid=0&t=event&ec=gdpr&ea=consent&aip=&dl=' + encodeURIComponent(canonical);
		document.body.appendChild(img);
	}
});

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["Headers"] = Headers;
/* harmony export (immutable) */ __webpack_exports__["Request"] = Request;
/* harmony export (immutable) */ __webpack_exports__["Response"] = Response;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (immutable) */ __webpack_exports__["fetch"] = fetch;
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clientConfigService__ = __webpack_require__(0);


document.addEventListener('DOMContentLoaded', function () {
	if (__WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].isE2E) {
		window.isE2EBootstrapped = true;
	}
});

/***/ })
/******/ ]);


// WEBPACK FOOTER //
// common-6168c99b3728dab8d339.js