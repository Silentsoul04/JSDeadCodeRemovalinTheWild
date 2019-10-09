webpackJsonp([0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FbsCarousel"] = factory();
	else
		root["FbsCarousel"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hasWindow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hasDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBS_CAROUSEL_CONFIG_ID_ATTRIBUTE; });
/* unused harmony export hasMatchmedia */
/* harmony export (immutable) */ __webpack_exports__["b"] = findCurrentConfiguration;
/* harmony export (immutable) */ __webpack_exports__["c"] = generateActiveConfiguration;
/* harmony export (immutable) */ __webpack_exports__["g"] = loopIndexOrder;
/* harmony export (immutable) */ __webpack_exports__["f"] = loopIndex;
/* harmony export (immutable) */ __webpack_exports__["d"] = getDistances;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_fbs_carousel_config__ = __webpack_require__(1);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

/**
 * Use this to stop erroring out on server (even if invalid isServerPrerender flag is sent)
 */
var hasWindow = typeof window !== 'undefined';
var hasDocument = typeof document !== 'undefined';
var FBS_CAROUSEL_CONFIG_ID_ATTRIBUTE = 'data-fbs-carousel-config-id';
var EMPTY_BREAKPOINT = { breakpoints: [] };
/**
 * Who doesn't support matchmedia? Check for it regardless, but expect diminished functionality.
 */
var hasMatchmedia = hasWindow && !!window.matchMedia;
/**
 * Finds the current carousel configuration from all allowed locations
 *
 * If rendering on a client, look for configuration objects on the window object
 * First look for ID, then the special `data-fbs-carousel-config-id` attribute if not found
 * Config will be used if it exists on the window.FbsCarouselConfig object
 *
 * E.G.
 * `<fbs-carousel id="carousel-1"></fbs-carousel>`
 * would use the config from
 * `window.FbsCarouselConfig['carousel-1]: FbsCarouselConfig` configuration object
 *
 * while
 * `<fbs-carousel data-fbs-carousel-config-id="carousel-2"></fbs-carousel>`
 * would use the config from
 * `window.FbsCarouselConfig['carousel-2]: FbsCarouselConfig` configuration object
 * @param config Configuration value passed to carousel initialization. If present, supercedes all others.
 * @param el Parent element of fbs-carousel or fbs-slider.
 */
function findCurrentConfiguration(config, el) {
    /**
     * Performs housekeeping for storing unmodified, unflattened configuration values for server prerender
     * @param config Current unflattened configuration
     * @returns Current active unflattened configuration minus server prerender values
     */
    var cb = function (config) {
        var _config = __assign({}, config);
        delete _config.serverDomEngine;
        delete _config.isServerPrerender;
        return _config;
    };
    // If a config was passed to the carousel initialization, use it.
    if (config) {
        config.originalConfig = cb(config);
        return config;
    }
    // Looks for config on window objects otherwise
    var windowConfig;
    if (hasWindow) {
        if (el.id && (windowConfig = (window.FbsCarouselConfig || {})[el.id])) {
            // Inline assignment because it's long
        }
        else {
            var attribute = el.getAttribute(FBS_CAROUSEL_CONFIG_ID_ATTRIBUTE);
            windowConfig = attribute && (window.FbsCarouselConfig || {})[attribute];
        }
    }
    if (windowConfig) {
        windowConfig.originalConfig = cb(windowConfig);
    }
    // If no allowable configuration was provided, just use the default
    return windowConfig || __WEBPACK_IMPORTED_MODULE_0__models_fbs_carousel_config__["a" /* FBS_CAROUSEL_DEFAULTS */];
}
/**
 * Recursively loops over the passed carousel configuration options to match provided breakpoints
 * and create a single flattened ruleset for the current window size
 *
 * @param config Global configuration object passed to FbsCarousel
 * @param bypassDefaults When true, doesn't combine current config rules with FBS_CAROUSEL_DEFAULTS
 */
function generateActiveConfiguration(config, bypassDefaults) {
    var _config = __assign({}, config);
    var cleanup = function () {
        _config.slidesToScroll = Math.min(_config.inView || 1, _config.slidesToScroll || 1);
        _config.currentOffset = Math.max(0, Math.min(_config.currentOffset, _config.inView - 1));
    };
    if (!bypassDefaults) {
        _config = __assign({}, __WEBPACK_IMPORTED_MODULE_0__models_fbs_carousel_config__["a" /* FBS_CAROUSEL_DEFAULTS */], config);
    }
    // Don't flatten the config object if it's rendering for server view -
    // Breakpoint data is required for inline styles
    // Additionally, allow graceful degredation for IE9- or other browsers that don't have css matchmedia support
    if (_config.isServerPrerender || !hasWindow || !hasMatchmedia) {
        // On server prerender, we need to know the *largest possible* number of slides to display
        // regardless of breakpoint registered. The easiest way is to just recursively check all breakpoints
        // and set the top level inView to the largest one found.
        if (_config.isServerPrerender) {
            var largestInView = _config.inView;
            var hasDisabledBreakpoint = _config.enabled === false;
            var breakpoints = (_config.breakpoints || []).slice(0);
            while (breakpoints.length) {
                var b = breakpoints.shift();
                hasDisabledBreakpoint = hasDisabledBreakpoint || b.config.enabled === false;
                if (b.config.inView > largestInView) {
                    largestInView = b.config.inView;
                }
            }
            _config.inView = largestInView;
            _config.hasDisabledBreakpoint = hasDisabledBreakpoint;
        }
        cleanup();
        return _config;
    }
    // Start flattening breakpoint specific rules
    if ((_config.breakpoints || []).length) {
        for (var i = 0; i < _config.breakpoints.length; i++) {
            var breakpoint = _config.breakpoints[i];
            // Only allow valid breakpoint definitions
            if (!breakpoint.breakpoint) {
                continue;
            }
            if (window.matchMedia(breakpoint.breakpoint.substr(7)).matches) {
                // Flatten current breakpoint level and check for matching children to flatten
                _config = generateActiveConfiguration(__assign({}, _config, EMPTY_BREAKPOINT, breakpoint.config), true);
                // Only flatten first matched rule per level
                break;
            }
        }
    }
    cleanup();
    return _config;
}
/**
 * Gets slide at specified index, looping around boundaries
 * E.G. array ['a', 'b', 'c'] with i `-1` returns 'c'
 * @param order Slide order object of carousel
 * @param i Index of slide to retrieve
 */
function loopIndexOrder(order, i) {
    return order[loopIndex(i, order.length)];
}
/**
 * Gets loop-adjusted index value after modifications
 * Ranges number between 0 inclusive and len, non inclusive
 * @param i Index to loop
 * @param len Maximum size of i
 */
function loopIndex(i, len) {
    while (i < len) {
        i += len;
    }
    return (len + i) % len;
}
/**
 * Calculates straight line distance between two points on a bidirectionally linked array
 * E. G. ['a', 'b', 'c', 'd', 'e'], using points 0 and 3 would take [2, 3]. 2 steps left, 3 steps right.
 * Straight line distance will always equal array.length
 * @param a First point
 * @param b Second point
 * @param len Length of source array
 */
function getDistances(a, b, len) {
    return a > b ? [a - b, len - a + b] : [len - b + a, b - a];
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBS_CAROUSEL_DEFAULTS; });
var FBS_CAROUSEL_DEFAULTS = {
    currentOffset: 0,
    inView: 1,
    speed: 500,
    showControls: true,
    imagePreloadAttribute: 'data-bg-image',
    initialIndex: 0,
    isServerPrerender: false,
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SLIDE_WRAPPER_CLASS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SLIDE_TRACK_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SLIDE_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTROL_WRAPPER_CLASS; });
/* unused harmony export CONTROL_DISABLED_WRAPPER_CLASS */
/* unused harmony export CONTROL_LEFT_CLASS */
/* unused harmony export CONTROL_RIGHT_CLASS */
/* unused harmony export CONTROL_DISABLED_CLASS */
/* unused harmony export SLIDER_INITIALIZED_CLASS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SLIDER_SLIDE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SLIDER_PRERENDER_STYLES; });
/* unused harmony export SLIDER_UNIQUE_ID */
/* harmony export (immutable) */ __webpack_exports__["g"] = initFromDom;
/* unused harmony export createControls */
/* unused harmony export createSlideNode */
/* harmony export (immutable) */ __webpack_exports__["f"] = generateSlideId;
/* unused harmony export toggleControls */
/* harmony export (immutable) */ __webpack_exports__["h"] = updateSlides;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__serverHelpers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_forbes_fbs_icons__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_forbes_fbs_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_forbes_fbs_icons__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var SLIDE_WRAPPER_CLASS = 'fbs-slider__slides-wrapper';
var SLIDE_TRACK_CLASS = 'fbs-slider__slides';
var SLIDE_CLASS = 'fbs-slider__slide';
var CONTROL_WRAPPER_CLASS = 'fbs-slider__controls';
var CONTROL_DISABLED_WRAPPER_CLASS = 'fbs-slider--no-controls';
var CONTROL_LEFT_CLASS = 'fbs-slider__control-left';
var CONTROL_RIGHT_CLASS = 'fbs-slider__control-right';
var CONTROL_DISABLED_CLASS = 'disabled';
var SLIDER_INITIALIZED_CLASS = 'fbs-slider--initialized';
var SLIDER_SLIDE_ID = 'data-fbs-carousel-slide-id';
var SLIDER_PRERENDER_STYLES = 'data-fbs-carousel-prerender-styles';
var SLIDER_UNIQUE_ID = 'data-fbs-carousel-id';
/**
 * Parses a carousel state out of HTML elements present inside of `el`.
 * @param el Parent <fbs-carousel> or `fbs-slider` element
 * @param config Current carousel active configuration
 */
function initFromDom(el, config) {
    var _document = __WEBPACK_IMPORTED_MODULE_1__utility__["e" /* hasDocument */] ? document : config.serverDomEngine;
    var state = {
        __slides: new Map(),
        __order: [],
        __index: config.initialIndex || 0,
    };
    var slideWrapper;
    var slides = [];
    var uniqueId = '';
    el.classList.add('fbs-slider');
    // If carousel has no ID, give it a unique string for server side styles to apply
    if (el.id) {
        uniqueId = "#" + el.id;
    }
    else if (el.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__utility__["a" /* FBS_CAROUSEL_CONFIG_ID_ATTRIBUTE */])) {
        uniqueId = el.getAttribute(__WEBPACK_IMPORTED_MODULE_1__utility__["a" /* FBS_CAROUSEL_CONFIG_ID_ATTRIBUTE */]);
        el.classList.add(uniqueId);
    }
    else {
        uniqueId = "_" + generateSlideId(state.__slides);
        el.setAttribute(__WEBPACK_IMPORTED_MODULE_1__utility__["a" /* FBS_CAROUSEL_CONFIG_ID_ATTRIBUTE */], uniqueId);
        el.classList.add(uniqueId);
    }
    for (var i = 0; i < el.children.length; i++) {
        var child = el.children.item(i);
        // Handle importing existing control buttons
        if (child.classList.contains(CONTROL_WRAPPER_CLASS)) {
            // Only one controls allowed
            if (state.__controls) {
                child.remove();
                i--;
                continue;
            }
            var left = child.querySelector("." + CONTROL_LEFT_CLASS);
            var right = child.querySelector("." + CONTROL_RIGHT_CLASS);
            state.__controls = {
                __wrapper: child,
                __left: left,
                __right: right,
            };
            // Import slide wrapper and store for later use
        }
        else if (child.classList.contains(SLIDE_WRAPPER_CLASS)) {
            // Only one slide wrapper allowed
            if (slideWrapper) {
                child.remove();
                i--;
                continue;
            }
            slideWrapper = child;
            // By this point it's probably a slide
        }
        else {
            slides.push(child);
        }
    }
    /**
     * Converts all remaining elements to valid slides.
     * @param slides Array of all remaining matched nodes
     * @param removeMatched Detach DOM node after converting to valid slide?
     *                      Required for converting from trackless slide
     */
    var validateSlides = function (slides, removeMatched) {
        // Populate the state slides array
        slides.forEach(function (slide) {
            // If a slides array was present the only nodes allowed are prerendered ID'ed content
            if (config.slides) {
                var found = void 0;
                var attribute = slide.getAttribute(SLIDER_SLIDE_ID);
                for (var i = 0; i < config.slides.length; i++) {
                    if (attribute && attribute === config.slides[i].id) {
                        found = config.slides[i];
                        break;
                    }
                }
                if (found) {
                    found.domNode = slide;
                    state.__slides.set(found.id, found);
                }
                else {
                    slide.remove();
                }
                // Otherwise, all slides are valid. Run initial construction
            }
            else {
                var slideMeta = {
                    id: generateSlideId(state.__slides),
                    domNode: slide,
                    scope: {},
                };
                createSlideNode(slideMeta, config);
                state.__slides.set(slideMeta.id, slideMeta);
                state.__order.push(slideMeta.id);
            }
            if (removeMatched) {
                el.removeChild(slide);
            }
        });
    };
    if (slideWrapper) {
        state.__track = slideWrapper.querySelector("." + SLIDE_TRACK_CLASS);
        validateSlides(Array.prototype.slice.call(state.__track.children));
        // If a slide wrapper was found, all other remaining nodes are invalid
        slides.forEach(function (slide) {
            slide.remove();
        });
    }
    else {
        validateSlides(slides, true);
        slideWrapper = _document.createElement('div');
        slideWrapper.classList.add(SLIDE_WRAPPER_CLASS);
        state.__track = _document.createElement('div');
        state.__track.classList.add(SLIDE_TRACK_CLASS);
        slideWrapper.appendChild(state.__track);
        el.insertBefore(slideWrapper, el.childNodes[0]);
    }
    state.__wrapper = slideWrapper;
    // Handle control creation/removal
    if (!state.__controls) {
        state.__controls = {};
    }
    // When carousel uses slide configuration over DOM, all slides must be preloded
    // into __slides on init
    if (config.slides) {
        for (var i = 0; i < config.slides.length; i++) {
            var slideConfig = {};
            if (!config.slides[i].id) {
                slideConfig.id = generateSlideId(state.__slides);
            }
            if (!state.__slides.has(slideConfig.id)) {
                slideConfig = __assign({}, slideConfig, config.slides[i]);
                state.__slides.set(slideConfig.id, slideConfig);
            }
            state.__order.push(slideConfig.id);
        }
    }
    // @TODO find somewhere better for this
    if (config.looping &&
        config.inView + (config.slidesToScroll * 2) > state.__order.length) {
        config.looping = false;
    }
    state.__active_slides = updateSlides(el, state, config, true);
    // Now that slides have been created/indexed, dump prerender styles and carousel
    // initialization state to the client
    Object(__WEBPACK_IMPORTED_MODULE_0__serverHelpers__["a" /* prerenderBootstrapHelper */])(el, config, state, uniqueId);
    return state;
}
/**
 * Creates missing control elements if required
 * @param controls Current controls object on the state
 * @param _document Current document render context
 * Returns new control state
 */
function createControls(controls, _document) {
    if (!controls.__wrapper) {
        var controlWrapper = _document.createElement('div');
        controlWrapper.classList.add(CONTROL_WRAPPER_CLASS);
        controls.__wrapper = controlWrapper;
    }
    ['left', 'right'].forEach(function (dir) {
        if (!controls["__" + dir]) {
            var control = _document.createElement('button');
            var svgName = "arrow" + (dir === 'left' ? 'Left' : 'Right');
            control.innerHTML = __WEBPACK_IMPORTED_MODULE_2__node_modules_forbes_fbs_icons___default.a[svgName];
            control.classList.add(dir === 'left' ? CONTROL_LEFT_CLASS : CONTROL_RIGHT_CLASS);
            controls.__wrapper.appendChild(control);
            controls["__" + dir] = control;
        }
    });
    return controls;
}
/**
 * Creates a new DOM node with the slide content.
 * If one already exists and is stored, it returns that instead of creating a new one.
 *
 * @TODO - Too many slide nodes created at once will bog down the browser from detached DOM trees.
 * Perhaps implement some kind of LRU cache purge of old slide domNodes?
 * @param slideData
 * @param config
 */
function createSlideNode(slideData, config) {
    var node;
    var _document = __WEBPACK_IMPORTED_MODULE_1__utility__["e" /* hasDocument */] ? document : config.serverDomEngine;
    if (slideData.domNode) {
        node = slideData.domNode;
    }
    else if (slideData.textContent) {
        var container = _document.createElement('div');
        container.innerHTML = slideData.textContent;
        delete slideData.textContent;
        if (container.firstElementChild.classList.contains(SLIDE_CLASS)) {
            container = container.firstElementChild;
        }
        node = container;
    }
    else if (config.slideGenerator) {
        node = config.slideGenerator(slideData.scope, __WEBPACK_IMPORTED_MODULE_1__utility__["e" /* hasDocument */] ? document : config.serverDomEngine);
    }
    else {
        console.error("WARNING: Slide " + slideData.id + " was generated with no content! Provide a generator function.");
        node = _document.createElement('div');
    }
    node.classList.add(SLIDE_CLASS);
    node.setAttribute(SLIDER_SLIDE_ID, slideData.id);
    // Load async images from slide
    // Don't load image attributes when server-side rendering, it's handled later during the style dump
    // @TODO ...maybe rethink this
    if (!config.isServerPrerender) {
        var datasetLocation = config.imagePreloadAttribute.split('-')
            .filter(function (val) { return val.toLowerCase() !== 'data'; })
            .map(function (val, idx) { return idx === 0 ? val : "" + val.slice(0, 1).toUpperCase() + val.slice(1); })
            .join('');
        if (node.imagesPreloaded !== datasetLocation) {
            var imagePreload = node.querySelectorAll("*[" + config.imagePreloadAttribute + "]");
            for (var i = 0; i < imagePreload.length; i++) {
                imagePreload[i].style.backgroundImage = "url(" + imagePreload[i].dataset[datasetLocation] + ")";
            }
            // Don't try to load this image again
            node.imagesPreloaded = datasetLocation;
        }
    }
    slideData.domNode = node;
    // Callback for the first time createSlideNode is called on a slide
    if (!node.fbsCalledback) {
        if (config.slideGeneratedCallback) {
            config.slideGeneratedCallback(slideData);
            // Don't try to load this image again
            node.fbsCalledback = true;
        }
    }
    return node;
}
/**
 * Generates a new, random slide ID. No duplicates.
 * @param slides Existing slide pool to check for duplicates
 */
function generateSlideId(slides) {
    var slideId;
    do {
        slideId = (Math.random() * 1e20).toString(28);
    } while (slides.has(slideId));
    return slideId;
}
/**
 * Inserts and removes controls based on active configuration. Adds enabled/disabled classes if non-looping and required
 * @param el Parent <fbs-carousel> or `fbs-slider` element
 * @param state Current carousel state.
 * @param config Carousel active configuration.
 */
function toggleControls(el, state, config) {
    var controlsActive = config.showControls && config.enabled !== false;
    if (controlsActive && !state.__controls.__wrapper) {
        var _document = __WEBPACK_IMPORTED_MODULE_1__utility__["e" /* hasDocument */] ? document : config.serverDomEngine;
        state.__controls = createControls(state.__controls, _document);
        el.insertBefore(state.__controls.__wrapper, state.__wrapper.nextSibling);
    }
    else if (state.__controls.__wrapper) {
        if (controlsActive) {
            el.classList.remove(CONTROL_DISABLED_WRAPPER_CLASS);
        }
        else {
            el.classList.add(CONTROL_DISABLED_WRAPPER_CLASS);
        }
    }
    // Enable/disable control arrows for non-looping carousels
    // Also disables control arrows for server prerenders
    var cb = function (el, enabled) {
        if (enabled) {
            el.classList.remove(CONTROL_DISABLED_CLASS);
        }
        else {
            el.classList.add(CONTROL_DISABLED_CLASS);
        }
    };
    var left = state.__controls.__left;
    var right = state.__controls.__right;
    if (left) {
        cb(left, !((!config.looping && state.__index === 0) || config.isServerPrerender));
    }
    if (right) {
        cb(right, !((!config.looping && state.__index + config.inView === state.__order.length) || config.isServerPrerender));
    }
}
/**
 * Updates carousel display state to match new state.__order
 * @param el Parent <fbs-carousel> or `fbs-slider` element
 * @param state Current carousel state.
 * @param config Carousel active configuration.
 * @param resized Has a resize event happened since the last time this ran?
 */
function updateSlides(el, state, config, resized) {
    if (resized === void 0) { resized = false; }
    var displayedSlides = [];
    // @TODO: Support looping element cloning
    // Preload slidesToScroll slides left, if available
    // If running a server render, only show visible slides
    var startIndex = config.isServerPrerender ? state.__index : state.__index - config.slidesToScroll;
    if (!config.looping) {
        startIndex = Math.max(0, startIndex);
    }
    // Show inView slides, then preload slidesToScroll slides right
    // If running a server prerender, only show visible slides
    var endIndex = state.__index + config.inView + (config.isServerPrerender ? 0 : config.slidesToScroll);
    if (!config.looping) {
        endIndex = Math.min(state.__order.length, endIndex);
    }
    // If any breakpoint in the carousel has a disabled attribute, then need to dump every slide regardless of preloading rules
    if (config.enabled === false || (config.isServerPrerender && config.hasDisabledBreakpoint)) {
        startIndex = 0;
        endIndex = state.__order.length;
    }
    // Track all current children
    for (var i = 0; i < state.__track.childNodes.length; i++) {
        state.__track.removeChild(state.__track.childNodes[0]);
        i--;
    }
    // Only need to reset carousel/track level sizings on parent resize
    if (resized) {
        state.__viewWidth = state.__wrapper.getBoundingClientRect().width;
        state.__slideWidth = state.__viewWidth / config.inView;
        // Server track size is controlled by dumped CSS
        if (!config.isServerPrerender && config.enabled !== false) {
            state.__track.style.width = (state.__slideWidth) * (endIndex - startIndex) + "px";
        }
        else {
            state.__track.style.width = '100%';
        }
    }
    // @TODO - Don't reset this number if not strictly required
    // Needed on slide change and resize
    var offset = -(state.__slideWidth * config.slidesToScroll);
    if (!config.looping) {
        offset = -(state.__slideWidth * Math.min(config.slidesToScroll, state.__index));
    }
    if (config.isServerPrerender || config.enabled === false) {
        offset = 0;
    }
    state.__track.style.transform = "translateX(" + offset + "px)";
    state.__translationOffset = offset;
    for (var i = startIndex; i < endIndex; i++) {
        var currentSlideId = Object(__WEBPACK_IMPORTED_MODULE_1__utility__["g" /* loopIndexOrder */])(state.__order, i);
        var currentSlide = state.__slides.get(currentSlideId);
        var slide = createSlideNode(currentSlide, config);
        var inView = i >= state.__index && i < state.__index + config.inView;
        displayedSlides.push({
            inView: inView,
            slideData: currentSlide,
        });
        if (inView && i === state.__index + config.currentOffset) {
            slide.classList.add('active', 'primary');
        }
        else if (inView) {
            slide.classList.add('active');
            slide.classList.remove('primary');
        }
        else {
            slide.classList.remove('active', 'primary');
        }
        if (!config.isServerPrerender && config.enabled !== false) {
            slide.style.width = (state.__slideWidth) + "px";
        }
        else if (config.enabled === false) {
            slide.style.width = '';
        }
        state.__track.appendChild(slide);
    }
    // If the number of slides changed, and not on the server, then update the track width
    if (displayedSlides.length !== (state.__active_slides || []).length && !config.isServerPrerender && config.enabled !== false) {
        state.__track.style.width = (state.__slideWidth) * (endIndex - startIndex) + "px";
    }
    toggleControls(el, state, config);
    return displayedSlides;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbsCarousel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_dom__ = __webpack_require__(2);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var FbsCarousel = /** @class */ (function () {
    /**
     * Creates a new fbs-carousel from scratch
     * @param el HTML element of base level element. Required. Must be either <fbs-carousel> or have class `fbs-slider`
     * @param config Optional configuration value to use. If not passed loads from window, or defaults.
     *               See `Utility.findCurrentConfiguration` for more.
     */
    function FbsCarousel(el, config) {
        this.el = el;
        this.isAnimating = false;
        this.__config = config;
    }
    FbsCarousel.prototype.init = function () {
        // An element is required to configure a carousel correctly.
        if (!this.el) {
            return;
        }
        this.loadConfiguration(this.__config);
        this.loadState();
        this.el.classList.add('fbs-slider--initialized');
        this.registerEvents();
        this.triggerEvent('sliderInitialized', {
            currentSlide: this.getCurrentSlide(),
        });
    };
    FbsCarousel.prototype.uninit = function () {
        this.unregisterEvents();
        this.triggerEvent('sliderDestroyed', {
            currentSlide: this.getCurrentSlide(),
        });
    };
    /**
     * Sets global and active configurations
     * @param config Starting configuration to use, otherwise load from default locations
     */
    FbsCarousel.prototype.loadConfiguration = function (config) {
        this.__config = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utility__["b" /* findCurrentConfiguration */])(config, this.el);
        this.__active_config = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utility__["c" /* generateActiveConfiguration */])(this.__config);
    };
    /**
     * Initializes carousel state from loaded config.
     * This function should *only* be called from init(), and will reset a carousel back to initial configuration values.
     *
     * Only use this function when actually necessary. It's extremely expensive.
     */
    FbsCarousel.prototype.loadState = function () {
        // Generate initial carousel state from child DOM elements
        this.__state = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom__["g" /* initFromDom */])(this.el, this.__active_config);
    };
    /**
     * Registers event handlers for touch and mouse drag, window resize, orientation change
     */
    FbsCarousel.prototype.registerEvents = function () {
        var _this = this;
        // Register prev/next buttons
        if (this.__state.__controls.__left) {
            this.__state.__controls.__left.addEventListener('click', function () { return _this.goPrev(); });
        }
        if (this.__state.__controls.__right) {
            this.__state.__controls.__right.addEventListener('click', function () { return _this.goNext(); });
        }
        this.handleSwipe();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.resize.bind(this));
            window.addEventListener('orientationchange', this.resize.bind(this));
        }
    };
    /**
     * Don't leak your listeners
     */
    FbsCarousel.prototype.unregisterEvents = function () {
        // @TODO
    };
    /**
     * Changes slide index
     * @param slidesToChange Number of slides to move left/right
     * @returns True if carousel is attempting to change slide index, false if it failed for any reason
     */
    FbsCarousel.prototype.go = function (slidesToChange) {
        var _this = this;
        if (slidesToChange === void 0) { slidesToChange = 0; }
        var delta = slidesToChange;
        // Bail if currently mid-slide change
        if (this.isAnimating) {
            return false;
        }
        // If not an infinite looping carousel, normalize to maximum distance allowed
        if (!this.__active_config.looping) {
            if (this.__state.__index + delta < 0) {
                delta = -this.__state.__index;
            }
            if (this.__state.__index + delta + this.__active_config.inView > this.__state.__order.length) {
                delta = Math.max(0, this.__state.__order.length - (this.__state.__index + this.__active_config.inView));
            }
        }
        // Don't do anything if you're not actually going anywhere
        if (this.__active_config.enabled === false || delta % this.__state.__order.length === 0) {
            return false;
        }
        // Broadcast the slide we are going to next.
        var currentSlide = this.getCurrentSlide();
        var targetSlide = this.__state.__slides.get(Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utility__["g" /* loopIndexOrder */])(this.__state.__order, this.__state.__index + delta + this.__active_config.currentOffset));
        this.triggerEvent('slideChangeStart', {
            currentSlide: currentSlide,
            targetSlide: targetSlide,
        });
        /**
         * Update the carousel index and rerender the slides.
         * Also fires the completed `slideChanged` event
         * Called either after transition if within viewing distance, or immediately if out of range.
         */
        var changeSlide = (function () {
            _this.__state.__index = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utility__["f" /* loopIndex */])(_this.__state.__index + delta, _this.__state.__order.length);
            _this.__state.__active_slides = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom__["h" /* updateSlides */])(_this.el, _this.__state, _this.__active_config, false);
            _this.triggerEvent('slideChanged', {
                previousSlide: currentSlide,
                currentSlide: targetSlide,
            });
        }).bind(this);
        // Figure out how many slides left and right need to transition
        var distances = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utility__["d" /* getDistances */])(this.__state.__index, Object(__WEBPACK_IMPORTED_MODULE_0__helpers_utility__["f" /* loopIndex */])(this.__state.__index + delta, this.__state.__order.length), this.__state.__order.length);
        // If moving more than the maximum allowable slides, don't animate.
        // In a looping carousel, use straight line distance left/right to calculate maximums
        if ((this.__active_config.looping &&
            distances[0] > this.__active_config.slidesToScroll &&
            distances[1] > this.__active_config.slidesToScroll) ||
            // In a non-looping, use simple slide change index value
            (!this.__active_config.looping && Math.abs(delta) > this.__active_config.slidesToScroll)) {
            // Bypass animations
            changeSlide();
            return true;
        }
        // Start sliding in the direction requested
        this.isAnimating = true;
        this.__state.__track.classList.add(FbsCarousel.ANIMATING_CLASS);
        // Calculate translate pixel distance based on number of slides to transition and apply it.
        // Give it a quick timeout to allow the classList add to complete and give the transitions
        var transitionOffset = this.__active_config.looping ?
            (distances[0] > distances[1] ? distances[1] : -distances[0]) : delta;
        var offset = this.__state.__translationOffset - (this.__state.__slideWidth * transitionOffset);
        setTimeout(function () {
            _this.__state.__track.style.transform = "translateX(" + offset + "px)";
        }, 0);
        // After transform has finished CSS transitioning, remove transition class and rerender the
        // slide list
        setTimeout(function () {
            _this.isAnimating = false;
            _this.__state.__track.classList.remove(FbsCarousel.ANIMATING_CLASS);
            changeSlide();
        }, this.__active_config.speed);
        return true;
    };
    /**
     * Handy go() aliases
     */
    FbsCarousel.prototype.goPrev = function () {
        return this.go(-(this.__active_config.slidesToScroll));
    };
    FbsCarousel.prototype.goNext = function () {
        return this.go(this.__active_config.slidesToScroll);
    };
    FbsCarousel.prototype.goToIndex = function (index) {
        return this.go(index - this.__state.__index);
    };
    FbsCarousel.prototype.goToSlideById = function (slideId) {
        var index = this.__state.__order.indexOf(slideId);
        return index === -1 ? false : this.goToIndex(index);
    };
    // @TODO Refactor touch events again after SSR is handled more sanely
    FbsCarousel.prototype.handleSwipe = function () {
        var _this = this;
        var touchstartX = 0;
        var touchendX = 0;
        var startWinY = 0;
        var thresholdX = 50;
        var thresholdY = 50;
        function tooMuchY(start, end) {
            if (start > end) {
                return start - end > thresholdY;
            }
            else {
                return end - start > thresholdY;
            }
        }
        this.el.addEventListener('touchstart', function (event) {
            touchstartX = event.changedTouches[0].screenX;
            startWinY = window.pageYOffset;
        }, false);
        this.el.addEventListener('touchend', function (event) {
            touchendX = event.changedTouches[0].screenX;
            if (!tooMuchY(startWinY, window.pageYOffset)) {
                if (touchendX < touchstartX && (touchstartX - touchendX > thresholdX)) {
                    _this.go(_this.__active_config.slidesToScroll);
                }
                else if (touchendX > touchstartX && (touchendX - touchstartX > thresholdX)) {
                    _this.go(-_this.__active_config.slidesToScroll);
                }
            }
        }, false);
    };
    /**
     * Custom event interceptor
     * @TODO - Add window object level callbacks in config
     * @param event Event name
     * @param detail Data to pass alongside event
     */
    FbsCarousel.prototype.triggerEvent = function (event, detail) {
        if (typeof CustomEvent !== 'undefined') {
            this.el.dispatchEvent(new CustomEvent(event, {
                detail: __assign({}, detail, { activeSlides: this.__state.__active_slides }),
            }));
        }
    };
    /**
     * Resizes the carousel
     * Rerenders the current slide state with updated width information
     * Fires on window resize and orientation change
     * Can be manually called by the custom element, or class interface
     */
    FbsCarousel.prototype.resize = function () {
        this.loadConfiguration(this.__config);
        // @TODO find somewhere better for this
        // Disable looping if the carousel is too small for it at this breakpoint
        if (this.__active_config.looping &&
            this.__active_config.inView + (this.__active_config.slidesToScroll * 2) > this.__state.__order.length) {
            this.__active_config.looping = false;
        }
        // Move back a slide if you change the number of visible slides on us
        if (!this.__active_config.looping && this.__state.__index + this.__active_config.inView > this.__state.__order.length) {
            this.__state.__index = this.__state.__order.length - this.__active_config.inView;
        }
        this.__state.__active_slides = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom__["h" /* updateSlides */])(this.el, this.__state, this.__active_config, true);
        this.triggerEvent('sliderResized', {
            currentSlide: this.getCurrentSlide(),
        });
    };
    /**
     * Returns current active slide data. Only returns data for __index, not all inView slides.
     */
    FbsCarousel.prototype.getCurrentSlide = function () {
        return this.__state.__slides.get(this.__state.__order[this.__state.__index + this.__active_config.currentOffset]);
    };
    /**
     * Returns list of all slides currently added to dom.
     */
    FbsCarousel.prototype.getActiveSlides = function () {
        return this.__state.__active_slides;
    };
    /**
     * Adds slides to the carousel at provided index.
     * If no index is provided, then slide will be inserted at the end.
     * @param slideData[] Slide data used to generate the new slide(s)
     * @param index Location to insert the slide. Default end.
     * @param adjustIndex If slides are inserted before the currently visible slide, adjust
     * 					  index to keep user on the intended slide?
     * @returns Slide IDs if slides were inserted successfully
     */
    FbsCarousel.prototype.addSlides = function (slideData, index, adjustIndex) {
        if (adjustIndex === void 0) { adjustIndex = true; }
        var _a;
        if (!index && index !== 0) {
            index = this.__state.__order.length;
        }
        var slides = [];
        for (var i = 0; i < slideData.length; i++) {
            if (!slideData[i].id || this.__state.__slides.has(slideData[i].id)) {
                slideData[i].id = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom__["f" /* generateSlideId */])(this.__state.__slides);
            }
            this.__state.__slides.set(slideData[i].id, slideData[i]);
            slides.push(slideData[i].id);
        }
        (_a = this.__state.__order).splice.apply(_a, [Math.max(0, Math.min(this.__state.__order.length, index)), 0].concat(slides));
        if (adjustIndex && this.__state.__index >= index) {
            this.__state.__index += slides.length;
        }
        // @TODO - Resize may stop working depending on how the diffing algorithm changes
        this.resize();
        return slides;
    };
    FbsCarousel.prototype.addSlide = function (slideData, index, adjustIndex) {
        if (adjustIndex === void 0) { adjustIndex = true; }
        return this.addSlides([slideData], index, adjustIndex)[0];
    };
    /**
     * Removes slides by ID. Not limited to any specific index groupings.
     * @param slideIds Array of slide ID strings to remove
     * @param adjustIndex If slides are removed before the currently visible slide, adjust
     * 					  index to keep user on the intended slide?
     * @returns List of slide IDs that were successfully removed
     */
    FbsCarousel.prototype.removeSlides = function (slideIds, adjustIndex) {
        if (adjustIndex === void 0) { adjustIndex = true; }
        var success = [];
        var adjustment = 0;
        for (var i = 0; i < slideIds.length; i++) {
            var index = this.__state.__order.indexOf(slideIds[i]);
            if (index !== -1) {
                var slideId = this.__state.__order[index];
                if (index < this.__state.__index) {
                    adjustment--;
                }
                success.push(slideId);
                this.__state.__slides.delete(slideId);
                this.__state.__order.splice(index, 1);
            }
        }
        if (adjustIndex) {
            this.__state.__index += adjustment;
        }
        // @TODO - Resize may stop working depending on how the diffing algorithm changes
        this.resize();
        return success;
    };
    FbsCarousel.prototype.removeSlide = function (slideId, adjustIndex) {
        if (adjustIndex === void 0) { adjustIndex = true; }
        return this.removeSlides([slideId], adjustIndex)[0];
    };
    /**
     * Helper function to remove slides by ID. By using the function removeSlide which uses IDs alone,
     * there are no issues with slide removal batching. No need to progressively adjust indexes!
     * @param index Array of slide indexes to remove
     * @param adjustIndex If slides are removed before the currently visible slide, adjust
     * 					  index to keep user on the intended slide?
     * @return List of slide IDs that were successfully removed
     */
    FbsCarousel.prototype.removeSlidesByIndex = function (index, adjustIndex) {
        if (adjustIndex === void 0) { adjustIndex = true; }
        var slides = [];
        for (var i = 0; i < index.length; i++) {
            var slide = this.__state.__order[index[i]];
            if (slide && slides.indexOf(slide) === -1) {
                slides.push(slide);
            }
        }
        if (slides.length > 0) {
            return this.removeSlides(slides, adjustIndex);
        }
        return [];
    };
    FbsCarousel.prototype.removeSlideByIndex = function (index, adjustIndex) {
        if (adjustIndex === void 0) { adjustIndex = true; }
        return this.removeSlidesByIndex([index], adjustIndex)[0];
    };
    FbsCarousel.prototype.getEl = function () {
        return this.el;
    };
    FbsCarousel.ANIMATING_CLASS = 'is-animating';
    return FbsCarousel;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = prerenderBootstrapHelper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_fbs_carousel_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom__ = __webpack_require__(2);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



/**
 * Creates all required settings for client-side rendering and bootstrap
 * @param el Parent <fbs-carousel> or `fbs-slider` element
 * @param config Current carousel active configuration
 * @param state Current carousel state
 * @param id Current unique identifier for the carousel
 */
function prerenderBootstrapHelper(el, config, state, id) {
    // If running server-side prerender, dump style tag with complete render information
    if (config.isServerPrerender) {
        var start_1 = config.hasDisabledBreakpoint ? 0 : state.__index;
        var end_1 = config.hasDisabledBreakpoint ? state.__active_slides.length : state.__index + config.inView;
        var visibleSlides_1 = [];
        // If a slides array is present in configuration, update slide IDs stored
        // so that the client will correctly import the rendered slides on bootstrap
        if ((config.originalConfig.slides || []).length) {
            state.__order.slice(start_1, end_1).forEach(function (slide, i) {
                var slideData = state.__slides.get(slide);
                visibleSlides_1.push(slideData);
                config.originalConfig.slides[start_1 + i].id = slideData.id;
            });
            // If no config or slide list was provided, then we need to save slide state or some will be missing.
        }
        else {
            config.originalConfig.slides = [];
            state.__order.forEach(function (slide, index) {
                var slideData = __assign({}, state.__slides.get(slide));
                // If a slide is out of view, then need to dump the textContent so we don't lose the slide
                if (index < start_1 || index >= end_1) {
                    slideData.textContent = slideData.domNode.outerHTML;
                    delete slideData.id;
                }
                else {
                    visibleSlides_1.push(__assign({}, slideData));
                }
                delete slideData.domNode;
                config.originalConfig.slides.push(slideData);
            });
        }
        // Handle style output
        var _document = __WEBPACK_IMPORTED_MODULE_1__utility__["e" /* hasDocument */] ? document : config.serverDomEngine;
        var styles = _document.createElement('style');
        var stylePrefix_1 = id.indexOf('#') === 0 ? id : "." + id;
        var baseStyle = "\n\t\t\tfbs-carousel {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t" + stylePrefix_1 + " ." + __WEBPACK_IMPORTED_MODULE_2__dom__["e" /* SLIDE_TRACK_CLASS */] + " {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t";
        var imageIndex_1 = 0;
        // Array to store all breakpoints that still need parsed.
        // Unlike elsewhere that checks the original configuration values (Without defaults), this needs to use
        // default values on the top level if and only if no custom configuration was provided.
        var breakpointTree = [{
                config: __assign({}, __WEBPACK_IMPORTED_MODULE_0__models_fbs_carousel_config__["a" /* FBS_CAROUSEL_DEFAULTS */], (Object.keys(config.originalConfig).length > 0 ? config.originalConfig : config)),
            }];
        var breakpointCss_1 = [baseStyle];
        var cb = function (breakpoint) {
            var _config = breakpoint.config;
            // Dump mediaquery if present
            if (breakpoint.breakpoint) {
                breakpointCss_1.push(breakpoint.breakpoint + " {");
            }
            // Show/hide controls at this breakpoint
            breakpointCss_1.push("\n\t\t\t\t" + stylePrefix_1 + " ." + __WEBPACK_IMPORTED_MODULE_2__dom__["a" /* CONTROL_WRAPPER_CLASS */] + " {\n\t\t\t\t\tdisplay: " + (_config.enabled !== false && _config.showControls !== false ? 'block' : 'none') + ";\n\t\t\t\t}\n\t\t\t");
            // Loop over slides currently visible at this breakpoint
            for (var i = 0; i < visibleSlides_1.length; i++) {
                var slide = visibleSlides_1[i];
                breakpointCss_1.push(stylePrefix_1 + " ." + __WEBPACK_IMPORTED_MODULE_2__dom__["d" /* SLIDE_CLASS */] + "[" + __WEBPACK_IMPORTED_MODULE_2__dom__["c" /* SLIDER_SLIDE_ID */] + "=\"" + slide.id + "\"] {");
                // If the slide is in view, set it visible and give it a width in percentage
                if (i < _config.inView || _config.enabled === false) {
                    breakpointCss_1.push("\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\twidth: " + (_config.enabled === false ? 'auto' : 100 / _config.inView + "%") + ";}\n\t\t\t\t\t");
                    // In-view slides get a background-image if it found one!
                    if (slide.domNode) {
                        var selector = _config.imagePreloadAttribute || 'data-bg-image';
                        var images = slide.domNode.querySelectorAll("*[" + selector + "]");
                        for (var index = 0; index < images.length; index++) {
                            var node = images.item(index);
                            breakpointCss_1.push("\n\t\t\t\t\t\t\t \t" + stylePrefix_1 + " ." + __WEBPACK_IMPORTED_MODULE_2__dom__["d" /* SLIDE_CLASS */] + "[" + __WEBPACK_IMPORTED_MODULE_2__dom__["c" /* SLIDER_SLIDE_ID */] + "=\"" + slide.id + "\"] .ssr-i-" + imageIndex_1 + " {\n\t\t\t\t\t\t\t\tbackground-image: url(" + node.getAttribute(selector) + ");}\n\t\t\t\t\t\t\t");
                            node.classList.add("ssr-i-" + imageIndex_1++);
                        }
                    }
                    // Otherwise hide it
                }
                else {
                    breakpointCss_1.push('display: none;}');
                }
            }
            // If a mediaquery was started, need to end it
            if (breakpoint.breakpoint) {
                breakpointCss_1.push('}');
            }
        };
        var _loop_1 = function () {
            var breakpoint = breakpointTree.pop();
            if (((breakpoint.config || {}).breakpoints || []).length) {
                breakpointTree.push.apply(breakpointTree, breakpoint.config.breakpoints.map(function (childBreakpoint) { return (__assign({}, childBreakpoint, { config: __assign({}, breakpoint.config, { breakpoints: [] }, childBreakpoint.config) })); }));
            }
            cb(breakpoint);
        };
        while (breakpointTree.length > 0) {
            _loop_1();
        }
        styles.setAttribute(__WEBPACK_IMPORTED_MODULE_2__dom__["b" /* SLIDER_PRERENDER_STYLES */], '');
        styles.setAttribute('type', 'text/css');
        styles.innerHTML = breakpointCss_1.join('\n').replace(/\t/gi, '');
        el.insertBefore(styles, el.firstElementChild);
        // Handle script output
        // Super easy, comparatively
        var script = _document.createElement('script');
        script.appendChild(_document.createTextNode(("\n\t\twindow.FbsCarouselConfig = window.FbsCarouselConfig || {};\n\t\twindow.FbsCarouselConfig['" + stylePrefix_1.slice(1) + "'] = " + JSON.stringify(config.originalConfig) + ";\n\t\t").replace(/\t/gi, '')));
        el.appendChild(script);
    }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
	arrowLeft: '<svg class="fs-icon fs-icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 10h16v2h-16z"/><path transform="rotate(-45.001 4.5 8.877)" d="M.5 7.9h8v2h-8z"/><path transform="rotate(45.001 4.5 13.124)" d="M.5 12.1h8v2h-8z"/></svg>',
	arrowRight: '<svg class="fs-icon fs-icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(-180 8.964 11)" d="M1 10h16v2H1z"/><path transform="rotate(134.999 14.965 13.124)" d="M11 12.1h8v2h-8z"/><path transform="rotate(-134.999 14.965 8.877)" d="M11 7.9h8v2h-8z"/></svg>',
	chevronDown: '<svg class="fs-icon fs-icon--chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/><path transform="rotate(-45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/></svg>',
	chevronLeft: '<svg class="fs-icon fs-icon--chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-45.001 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/><path transform="rotate(45.001 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/></svg>',
	chevronRight: '<svg class="fs-icon fs-icon--chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(134.999 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/><path transform="rotate(-134.999 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/></svg>',
	chevronUp: '<svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/><path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/></svg>',
	close: '<svg class="fs-icon fs-icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(45.001 10 10)" d="M2 9h16v2H2z"/><path transform="rotate(134.999 10 10)" d="M2 9h16v2H2z"/></svg>',
	forbesLogo: '<svg class="fs-icon fs-icon--forbes-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 54"><path d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z"/></svg>',
	hamburger: '<svg class="fs-icon fs-icon--hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 5.5h16v2H2zM2 9.5h16v2H2zM2 13.5h16v2H2z"/></svg>',
	play: '<svg class="fs-icon fs-icon--play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 2v16.9l11.1-8.5z"/></svg>',
	search: '<svg class="fs-icon fs-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="2" cx="8.5" cy="9" r="6"/><path transform="rotate(45.001 14.922 15.421)" d="M12 14.4h5.9v2H12z"/></svg>',
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbsCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fbs_carousel__ = __webpack_require__(3);
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

var FbsCarouselComponent = /** @class */ (function (_super) {
    __extends(FbsCarouselComponent, _super);
    function FbsCarouselComponent(el) {
        var _this = _super.call(this) || this;
        _this.carousel = new __WEBPACK_IMPORTED_MODULE_0__fbs_carousel__["a" /* FbsCarousel */](_this);
        return _this;
    }
    FbsCarouselComponent.prototype.connectedCallback = function () {
        this.carousel.init();
    };
    FbsCarouselComponent.prototype.disconnectedCallback = function () {
        this.carousel.uninit();
    };
    Object.defineProperty(FbsCarouselComponent.prototype, "currentSlide", {
        /**
         * The following are simple interfaces to interact with the exposed members of the FbsCarousel class
         * See the method documentation for more information.
         */
        get: function () {
            return this.carousel.getCurrentSlide();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbsCarouselComponent.prototype, "activeSlides", {
        get: function () {
            return this.carousel.getActiveSlides();
        },
        enumerable: true,
        configurable: true
    });
    FbsCarouselComponent.prototype.rerender = function () {
        this.carousel.resize();
    };
    FbsCarouselComponent.prototype.prevSlide = function () {
        return this.carousel.goPrev();
    };
    FbsCarouselComponent.prototype.nextSlide = function () {
        return this.carousel.goNext();
    };
    FbsCarouselComponent.prototype.go = function (slidesToScroll) {
        return this.carousel.go(slidesToScroll);
    };
    FbsCarouselComponent.prototype.goToIndex = function (index) {
        return this.carousel.goToIndex(index);
    };
    FbsCarouselComponent.prototype.goToSlideById = function (slideId) {
        return this.carousel.goToSlideById(slideId);
    };
    FbsCarouselComponent.prototype.addSlide = function (slideData, index, adjustIndex) {
        if (adjustIndex === void 0) { adjustIndex = true; }
        return this.carousel.addSlide(slideData, index, adjustIndex);
    };
    FbsCarouselComponent.prototype.addSlides = function (slideData, index, adjustIndex) {
        if (adjustIndex === void 0) { adjustIndex = true; }
        return this.carousel.addSlides(slideData, index, adjustIndex);
    };
    FbsCarouselComponent.prototype.removeSlide = function (slideIds, adjustIndex) {
        if (adjustIndex === void 0) { adjustIndex = true; }
        return this.carousel.removeSlide(slideIds, adjustIndex);
    };
    FbsCarouselComponent.prototype.removeSlides = function (slideIds, adjustIndex) {
        if (adjustIndex === void 0) { adjustIndex = true; }
        return this.carousel.removeSlides(slideIds, adjustIndex);
    };
    FbsCarouselComponent.prototype.removeSlideByIndex = function (index, adjustIndex) {
        if (adjustIndex === void 0) { adjustIndex = true; }
        return this.carousel.removeSlideByIndex(index, adjustIndex);
    };
    FbsCarouselComponent.prototype.removeSlidesByIndex = function (index, adjustIndex) {
        if (adjustIndex === void 0) { adjustIndex = true; }
        return this.carousel.removeSlidesByIndex(index, adjustIndex);
    };
    return FbsCarouselComponent;
}(HTMLElement));



/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fbs_carousel__ = __webpack_require__(21);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FbsCarousel", function() { return __WEBPACK_IMPORTED_MODULE_0__fbs_carousel__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FbsCarouselComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__fbs_carousel__["b"]; });



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fbs_carousel__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fbs_carousel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbs_carousel_component__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__fbs_carousel_component__["a"]; });




/***/ })
/******/ ]);
});

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dataVizList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dataVizView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataVizController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DataVizController__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataVizView__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DataVizModel__ = __webpack_require__(300);




var dataVizActiveUsers = document.querySelector('.data-viz__active-number');
var dataVizList = document.querySelector('.data-viz__list');
var dataVizView = new __WEBPACK_IMPORTED_MODULE_1__DataVizView__["a" /* default */](dataVizList, dataVizActiveUsers);
var dataVizModel = new __WEBPACK_IMPORTED_MODULE_2__DataVizModel__["a" /* default */]();
var dataVizController = new __WEBPACK_IMPORTED_MODULE_0__DataVizController__["a" /* default */](dataVizModel, dataVizView);



/***/ }),

/***/ 127:
/***/ (function(module, exports) {

module.exports = {
	amazonBooks: '<svg class="fs-icon fs-icon--amazon-books" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 6.1s3.8-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1zM10.5 6.1s3.9-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1z"/></svg>',
	arrowDown: '<svg class="fs-icon fs-icon--arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#020202" d="M30 60l25-30H40V0H20v30H5l25 30z"/></svg>',
	arrowLeft: '<svg class="fs-icon fs-icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 10h16v2h-16z"/><path transform="rotate(-45.001 4.5 8.877)" d="M.5 7.9h8v2h-8z"/><path transform="rotate(45.001 4.5 13.124)" d="M.5 12.1h8v2h-8z"/></svg>',
	arrowRight: '<svg class="fs-icon fs-icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(-180 8.964 11)" d="M1 10h16v2H1z"/><path transform="rotate(134.999 14.965 13.124)" d="M11 12.1h8v2h-8z"/><path transform="rotate(-134.999 14.965 8.877)" d="M11 7.9h8v2h-8z"/></svg>',
	arrowUp: '<svg class="fs-icon fs-icon--arrow-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#020202" d="M30 0L5 30h15v30h20V30h15L30 0z"/></svg>',
	chevronDown: '<svg class="fs-icon fs-icon--chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/><path transform="rotate(-45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/></svg>',
	chevronLeft: '<svg class="fs-icon fs-icon--chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-45.001 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/><path transform="rotate(45.001 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/></svg>',
	chevronRight: '<svg class="fs-icon fs-icon--chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(134.999 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/><path transform="rotate(-134.999 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/></svg>',
	chevronUp: '<svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/><path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/></svg>',
	clock: '<svg class="fs-icon fs-icon--clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.9 13.1l-2.7-2.7V6.7h1.7v3l2.3 2.3-1.3 1.1zM10 3.3a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4zM10 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/></svg>',
	close: '<svg class="fs-icon fs-icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(45.001 10 10)" d="M2 9h16v2H2z"/><path transform="rotate(134.999 10 10)" d="M2 9h16v2H2z"/></svg>',
	email: '<svg class="fs-icon fs-icon--email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF106_" d="M17 15.2H3.2l5.2-4.3.6.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4l.6-.5 5.2 4.4zm.6-9.2v8l-4.8-4 4.8-4zm-15 8V6l4.8 4-4.8 4zm7.8-3.6c-.2.2-.4.2-.6 0L3.6 5.2h13l-6.2 5.2z"/></svg>',
	facebook: '<svg class="fs-icon fs-icon--facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M32.9 49H25V30h-3.9v-6.6H25v-3.9c0-5.4 2.2-8.5 8.5-8.5h5.2v6.6h-3.3c-2.5 0-2.6.9-2.6 2.6v3.3h5.9l-.5 6.5H33v19h-.1z"/></svg>',
	flame: '<svg class="fs-icon fs-icon--flame" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.7 6.2C8.7 3.6 10.6 1 10.6 1 6.7 3.2 5.8 6.7 6.8 11 5.4 9.8 5.2 8.5 5.2 6.7c-1.8 1.9-2.1 3.9-2 6.1.2 3.5 3.1 6.2 6.6 6.2 3.4 0 6.2-2.8 6.4-6.2.1-2.9-1.1-5-3.5-6.6zM9.8 17c-.6 0-1.2-.1-1.7-.3-.7-.3-1.3-.7-1.8-1.3h.1c2-.3 3.7-1.8 4-3.8.1.3.1.6.1.9 0 .9-.2 1.7-.6 2.4 1.4-.8 2.4-2.3 2.4-4.1 0-1.2-.4-2.3-1.2-3.1 2 .5 3.5 2.4 3.5 4.5 0 2.7-2.1 4.8-4.8 4.8z"/></svg>',
	forbesF: '<svg class="fs-icon fs-icon--forbes-f" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.5 7l-.8.2C15 4.9 13.8 3.7 12 3.7H9.5C9.4 5 9.4 7 9.4 9.9h1.7c.9 0 1.6-.7 1.9-2.1h.6V13H13c-.3-1.4-.9-2.1-1.9-2.2H9.4c0 1.6.1 3.1.2 4.4.1.7.2 1.2.4 1.5.2.3.6.5 1.1.6l.8.1v.6H3.6v-.6l.7-.1c.9-.1 1.4-.8 1.5-2.1.3-3.3.3-6.5 0-9.6-.1-1.3-.6-2-1.5-2.1l-.7-.2v-.6h12.8l.1 4.3z"/></svg>',
	forbesLogo: '<svg class="fs-icon fs-icon--forbes-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 54"><path d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z"/></svg>',
	georgiaUaquo: '<svg class="fs-icon fs-icon--georgia-uaquo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#010101" d="M9.9 9.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.6-5.3L2.3 19l-.8-1 6.8-7.2.6-.6c.3-.2.6-.4 1-.4zm0-7.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.5-5.3-7.5 5.3-.8-1 6.8-7.2c.1-.2.4-.3.7-.6.1-.2.5-.3.8-.3z"/></svg>',
	hamburger: '<svg class="fs-icon fs-icon--hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 5.5h16v2H2zM2 9.5h16v2H2zM2 13.5h16v2H2z"/></svg>',
	info: '<svg class="fs-icon fs-icon--info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#010101" d="M28.3 38.4h3.3v-10h-3.3v10zM30 13.3c-9.2 0-16.7 7.5-16.7 16.7S20.8 46.7 30 46.7 46.7 39.2 46.7 30 39.2 13.3 30 13.3zm0 30.1c-7.4 0-13.4-6-13.4-13.4s6-13.4 13.4-13.4 13.4 6 13.4 13.4-6 13.4-13.4 13.4zM28.3 25h3.3v-3.3h-3.3V25z"/></svg>',
	instagram: '<svg class="fs-icon fs-icon--instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" d="M38.6 46.3H21.4c-4.3 0-7.7-3.5-7.7-7.7V21.4c0-4.3 3.5-7.7 7.7-7.7h17.1c4.3 0 7.7 3.5 7.7 7.7v17.1c.1 4.3-3.4 7.8-7.6 7.8z"/><circle fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" cx="30" cy="30" r="7.4"/><circle cx="38.7" cy="19.3" r="1.8"/></svg>',
	linkedin: '<svg class="fs-icon fs-icon--linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M44.9 33.2v11h-6.4V34c0-2.6-.9-4.3-3.2-4.3-1.8 0-2.8 1.2-3.3 2.3-.2.4-.2 1-.2 1.6v10.7h-6.4s.1-17.4 0-19.2h6.4V27.9v-.1c.8-1.3 2.4-3.2 5.8-3.2 4.1 0 7.3 2.7 7.3 8.6zM18.7 15.8c-2.2 0-3.6 1.4-3.6 3.3 0 1.8 1.4 3.3 3.5 3.3 2.2 0 3.6-1.5 3.6-3.3 0-1.9-1.3-3.3-3.5-3.3zm-3.2 28.4h6.4V25h-6.4v19.2z"/></svg>',
	phone: '<svg class="fs-icon fs-icon--phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF14E_" d="M2.6 7.6c-.2-.8-.1-1.5.3-2.3S3.7 4 4.4 3.7c.2-.1.4-.1.6.1l3 3c.3.3.2.5 0 .8-.5.6-.8 1-.8 1.3s.2.7.8 1.3c.4.5 1.2 1.2 2.2 2 .6.5 1 .4 1.4-.1.3-.5.5-.7.7-.7s.5.1.9.5l.9.6c.3.2.7.5 1 .7.4.3.7.5.9.6.4.3.4.6.2.9-1.8 2.5-3.9 2.9-6.4 1.2-2.9-2.1-5.1-4.5-6.6-7.1 0-.1-.1-.3-.4-.8l-.2-.2v-.2zm7.2-3.4c1.5.1 2.7.7 3.7 1.7s1.6 2.3 1.7 3.8c0 .3-.1.5-.4.5-.3 0-.5-.1-.5-.4-.1-1.2-.6-2.3-1.5-3.1-.9-.9-1.9-1.4-3.1-1.5-.1 0-.2 0-.3-.1-.1-.2-.2-.3-.2-.4 0-.3.2-.5.6-.5zm-.3-1.8c0-.3.2-.4.5-.4 2.1.1 3.9.8 5.3 2.2s2.2 3.2 2.2 5.3c0 .3-.1.5-.4.5-.1 0-.2 0-.3-.1-.1-.1-.2-.2-.2-.3-.1-1.9-.7-3.5-2-4.7s-2.8-1.9-4.7-2c-.1 0-.2 0-.3-.1-.1-.2-.1-.3-.1-.4z"/></svg>',
	play: '<svg class="fs-icon fs-icon--play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 2v16.9l11.1-8.5z"/></svg>',
	previewEye: '<svg class="fs-icon fs-icon--preview-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 4.1C5.9 4.1 2.3 6.5.5 10c1.8 3.6 5.4 6 9.5 6s7.7-2.4 9.5-5.9c-1.8-3.6-5.4-6-9.5-6zm4.7 3.2c1.1.7 2.1 1.7 2.8 2.8-.7 1.1-1.7 2.1-2.8 2.8-1.4.9-3 1.4-4.7 1.4-1.7 0-3.3-.5-4.7-1.4-1.1-.7-2.1-1.7-2.8-2.8.8-1.2 1.7-2.1 2.8-2.8.1 0 .1-.1.2-.1-.1.4-.3 1-.3 1.6 0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8c0-.6-.1-1.1-.3-1.6 0 0 .1 0 .2.1zm-5.1 1c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z"/></svg>',
	reddit: '<svg class="fs-icon fs-icon--reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30"/><path fill="#FFF" d="M50 30c0-2.4-2-4.4-4.4-4.4-1.2 0-2.2.5-3 1.2-3-2.2-7.1-3.6-11.7-3.7l2-9.4 6.5 1.4c.1 1.7 1.4 3 3.1 3 1.7 0 3.1-1.4 3.1-3.1s-1.4-3.1-3.1-3.1c-1.2 0-2.3.7-2.8 1.7l-7.3-1.5c-.2 0-.4 0-.6.1-.2.1-.3.3-.3.5l-2.2 10.5c-4.7.1-8.8 1.5-11.9 3.7-.8-.8-1.9-1.2-3-1.2-2.4 0-4.4 2-4.4 4.4 0 1.8 1.1 3.3 2.6 4-.1.4-.1.9-.1 1.3 0 6.7 7.8 12.2 17.5 12.2s17.5-5.5 17.5-12.2c0-.4 0-.9-.1-1.3 1.5-.8 2.6-2.3 2.6-4.1zm-30 3.1c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7.1-3.1-1.3-3.1-3.1zm17.4 8.3c-2.1 2.1-6.2 2.3-7.4 2.3-1.2 0-5.3-.2-7.4-2.3-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0 1.3 1.3 4.2 1.8 6.3 1.8s4.9-.5 6.3-1.8c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1zm-.5-5.1c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z"/></svg>',
	reply: '<svg class="fs-icon fs-icon--reply" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3.3 2.8C1.5 7.5 7.7 9.8 13 9V5.6l5.5 6.2-5.5 6.1v-3.4c-3.5.1-6.3-.7-8.2-2.1-3-2.2-3.8-5.8-1.5-9.6z"/></svg>',
	rss: '<svg class="fs-icon fs-icon--rss" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.2 13.6c-.6 0-1.1.2-1.5.6-.5.5-.7 1-.7 1.6 0 .6.2 1.1.6 1.5.5.5 1 .7 1.6.7.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5s-.2-1.1-.6-1.5c-.4-.6-.9-.8-1.5-.8zm0 0M9.2 10.8c-.9-.9-1.8-1.6-2.9-2.1-1.1-.5-2.3-.8-3.5-.9h-.1c-.2 0-.3.1-.5.2-.1.1-.2.3-.2.5V10c0 .2.1.4.2.5.1.1.3.2.5.2 1.7.2 3.2.9 4.4 2.1C8.3 14 9 15.5 9.2 17.2c0 .2.1.3.2.5.2.2.3.3.5.3h1.5c.2 0 .4-.1.5-.2.1-.2.2-.3.2-.5-.1-1.2-.4-2.4-.9-3.5-.4-1.2-1.1-2.1-2-3zm0 0"/><path d="M16.6 11.5c-.8-1.8-1.9-3.4-3.3-4.8s-3-2.5-4.8-3.3C6.6 2.6 4.7 2.1 2.8 2c-.3 0-.4.1-.6.2-.1.1-.2.3-.2.5v1.6c0 .2.1.4.2.5.1.2.3.3.5.3 1.6.1 3.2.5 4.6 1.2 1.5.7 2.7 1.6 3.8 2.6 1.1 1.1 2 2.4 2.6 3.8.7 1.5 1.1 3 1.1 4.6 0 .2.1.3.2.5.1.1.3.2.5.2h1.6c.2 0 .4-.1.5-.2.2-.2.2-.3.2-.5.1-2-.4-3.9-1.2-5.8zm0 0"/></svg>',
	search: '<svg class="fs-icon fs-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="2" cx="8.5" cy="9" r="6"/><path transform="rotate(45.001 14.922 15.421)" d="M12 14.4h5.9v2H12z"/></svg>',
	share: '<svg class="fs-icon fs-icon--share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#010101" d="M34 19.6V4.9L59.2 28 34 51.2V36.5C17.3 32.9 1.8 38.5.8 55.4-1 40.8 3.9 31.1 11.3 25.5c6.3-4.8 15.2-6.6 22.7-5.9z"/></svg>',
	snapchat: '<svg class="fs-icon fs-icon--snapchat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M47.7 38.3c-.2-.2-.4-.4-.7-.4-2.3-.4-3.9-1.7-5-3s-1.7-2.5-1.7-2.6v-.1c-.1-.2-.3-.5-.3-.7v-.4c.2-.6.3-.8 1.3-1.1 0 0 .1 0 .3-.1.1 0 .2-.1.3-.1.7-.3 1.4-.6 1.9-1.1.2-.2.5-.6.5-1-.1-.4-.2-.8-.6-1.1-.6-.4-1.6-.2-2.2 0-.4.1-1.2.5-1.5.1v-.5c.1-1.9.3-3.8 0-5.6-.1-.6-.2-1.1-.5-1.6-.9-2.1-2.3-3.6-3.9-4.5-1.4-.8-3-1.2-4.6-1.3-1.6-.1-3.3.1-4.9.6-.5.2-1 .4-1.4.7-1.7.9-3 2.4-3.9 4.5-.2.5-.4 1.1-.5 1.6-.3 1.9-.1 3.8 0 5.6v.5c-.3.3-1.2 0-1.5-.1-.7-.2-1.6-.4-2.2 0-.4.3-.5.6-.6 1.1-.1.3.2.7.5 1 .5.5 1.2.8 1.9 1.1.1 0 .2.1.3.1.2.1.2.1.3.1 1 .3 1.1.6 1.3 1.1 0 .1.1.2 0 .4 0 .2-.2.4-.3.7 0 .1-.6 1.3-1.7 2.6s-2.8 2.7-5 3c-.3 0-.5.2-.7.4-.2.2-.3.5-.2.8v.2c0 .1 0 .1.1.2.2.5.8.9 1.6 1.3.8.3 1.8.6 3.1.8 0 .1.1.4.1.6 0 .1.1.3.1.4 0 .1.1.3.1.4.1.2.2.5.4.7.2.1.4.2.8.2h.4c.1 0 .3 0 .4-.1.2 0 .5-.1.8-.1.3 0 .6-.1 1-.1h.6c.2 0 .4 0 .6.1.8.1 1.5.6 2.4 1.2 1.9 1.3 3.5 2 5.2 2 1.7 0 3.4-.7 5.2-2 .8-.6 1.6-1.1 2.4-1.2.2 0 .4-.1.6-.1h.6c.4 0 .7 0 1 .1.3 0 .6.1.8.1.2 0 .3.1.4.1h.4c.3 0 .6-.1.8-.2.3-.2.4-.4.4-.7 0-.2.1-.3.1-.4 0-.1.1-.3.1-.4 0-.2.1-.4.1-.6 1.3-.2 2.3-.5 3.1-.8.9-.4 1.4-.8 1.6-1.3 0-.1.1-.2.1-.2V39c.2-.2.1-.5-.1-.7z"/></svg>',
	twitter: '<svg class="fs-icon fs-icon--twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M22.2 38.9c-3.4-.3-6.1-1.7-7.5-5.1h3.6c-3.9-1.4-5.6-4.3-5.9-8.4 1.2.6 2.3.7 3.5.7-2.1-1.6-3.6-3.4-3.7-6.1-.1-1.5.5-2.8 1.3-4 4.4 5 9.7 8.3 16.5 8.9v-2.7c.1-1.9.6-3.6 1.9-5.1 2.5-2.8 6.9-3.1 9.8-.7.2.2.5.4.7.6.2.2.4.2.7.2 1.1-.3 2-.9 3-1.4.5-.3 1.1-.6 1.7-1-.4 1.1-.9 2-1.5 2.8-.6.8-1.3 1.6-2.2 2.2 1.6-.2 3.2-.6 4.8-1.1-.3.4-.6.8-.9 1.1l-2.7 2.4c-.1.1-.2.3-.2.4.1 3.3-.6 6.5-1.9 9.6-1.9 4.2-4.7 7.5-8.6 9.9-2.5 1.5-5.2 2.4-8.1 2.9-5.5.8-10.5-.5-15.1-3.3-.1 0-.1-.1-.2-.1h.2c1.1.5 2.2.4 3.3.3 2.3-.2 4.5-.9 6.6-2.1l.9-.6v-.3z"/></svg>',
	website: '<svg class="fs-icon fs-icon--website" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF10E_" d="M14.7 7.4l2.8 2.6v.4h-1.9V17h-3.7v-4.2H8.1V17H4.4v-6.6H2.5V10L10 3l2.8 2.6v-.9h1.9z"/></svg>',
	youtube: '<svg class="fs-icon fs-icon--youtube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.2 12.5V7.7l4.6 2.4-4.6 2.4zm9.5-7.3c-.7-.7-1.4-.7-1.7-.7-2.4-.2-6-.2-6-.2s-3.6 0-6 .2c-.3 0-1.1 0-1.7.7-.5.5-.6 1.7-.6 1.7s-.2 1.4-.2 2.8V11c0 1.4.2 2.8.2 2.8s.2 1.2.7 1.7c.6.6 1.4.5 1.8.6 1.4.1 5.8.2 5.8.2s3.6 0 6-.2c.3 0 1.1 0 1.7-.7.5-.5.7-1.7.7-1.7s.2-1.4.2-2.8V9.7c0-1.4-.2-2.8-.2-2.8s-.2-1.2-.7-1.7z"/></svg>',
};


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.multiclamp=t():e.multiclamp=t()}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return;new r(e,t<=0?2:t,n).init()};var r=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.numLines=n,this.allowResize=i,this.prevWidth=0,this.prevHeight=0,this.textCtx=!1,this.LINE_CLAMP_RULES={LINE_CLAMP:"-webkit-line-clamp",BOX:"-webkit-box",BOX_ORIENT:"-webkit-box-orient"}}return i(e,[{key:"init",value:function(){if(this.LINE_CLAMP_RULES.LINE_CLAMP in document.body.style)this.element.style.display=this.LINE_CLAMP_RULES.BOX,this.element.style[this.LINE_CLAMP_RULES.BOX_ORIENT]="vertical",this.element.style[this.LINE_CLAMP_RULES.LINE_CLAMP]=this.numLines;else{var e=document.createElement("canvas");this.textCtx=e.getContext("2d"),this.clamp(),this.allowResize&&requestAnimationFrame(this.resize.bind(this))}}},{key:"clamp",value:function(){var e=getComputedStyle(this.element),t=e.fontFamily,n=e.fontSize,i=e.fontWeight,r=e.lineHeight,l=(parseInt(r,10)||0)*this.numLines;if(this.element.scrollHeight>l||this.element.dataset.fullText){var o=this.element.dataset.fullText||this.element.innerText,s=o.split(" "),u=this.element.getBoundingClientRect().width;this.textCtx.font=i+" "+n+" "+t;for(var a="",f=0,h=0;h<this.numLines-1;h+=1){for(var c="";this.textCtx.measureText(c+" "+s[f]).width<u&&f<s.length-1;)c=""===c?s[f]:c+" "+s[f],f+=1;a=""===a?c:a+" "+c}for(var d=o.slice(o.indexOf(s[f]));this.textCtx.measureText(d+"...").width>u;)d=d.substring(0,d.length-1);var m=a+" "+d;m===o?(this.element.innerText=o,this.element.dataset.fullText&&delete this.element.dataset.fullText):(this.element.innerText=m+"...",this.element.dataset.fullText||(this.element.dataset.fullText=o))}}},{key:"resize",value:function(){if(this.allowResize){var e=this.element.getBoundingClientRect(),t=e.width,n=e.height;this.prevWidth===t&&this.prevHeight===n||(this.clamp(),this.prevWidth=t,this.prevHeight=n),requestAnimationFrame(this.resize.bind(this))}}}]),e}()}])});

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkStatus;
/**
	 * Check server response status and throw error for status code out of range
	 * @param {Object} response server response object
	 * @returns {Object} response object from the server if no error is thrown
	 */
function checkStatus(response) {
	if (response.status < 200 || response.status >= 300) {
		var error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
	return response;
}

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = insertMedianet;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adObservable; });
/* harmony export (immutable) */ __webpack_exports__["b"] = insertAd;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_ads_dist_main__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_mobile__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__is_mobile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientConfigService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__throttle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Observable__ = __webpack_require__(5);






var progressiveAds = [];

/**
 * Check position of ad to see if it is close enough to load
 * @param {FbsAd} ad The ad to check
 * @return {boolean} is the ad in view (or close enough - 25% of window height away) that it should be loaded
 */
function progressiveAdShouldLoad(ad) {
	var PROGRESSIVE_LOAD_PERCENTAGE = 0.25;

	var _ad$getBoundingClient = ad.getBoundingClientRect(),
	    bottom = _ad$getBoundingClient.bottom;

	var editoolsOpen = document.documentElement.classList.contains('et-on');

	return !editoolsOpen && bottom - window.innerHeight < window.innerHeight * PROGRESSIVE_LOAD_PERCENTAGE;
}

/**
 * Displays ad that is in view or ads to progressiveAds collection to
 * be displayed on scroll
 * @param {FbsAd} ad The ad to insert
 */
function insertProgressiveAd(ad) {
	if (progressiveAdShouldLoad(ad)) {
		ad.display();
	} else {
		progressiveAds.push(ad);
	}
}

/**
 * Handler for window.scroll event to check if any progressive ads are ready to display
 */
function progressiveAdScrollHandler() {
	progressiveAds.forEach(function (ad) {
		if (progressiveAdShouldLoad(ad)) {
			ad.display();
			progressiveAds.splice(progressiveAds.indexOf(ad), 1);
		}
	});
}

window.addEventListener('scroll', Object(__WEBPACK_IMPORTED_MODULE_3__throttle__["a" /* default */])(progressiveAdScrollHandler));

// Add tabIndex attribute to ad iframe to skip the ad by tab key - Accessibility
function addTabindex(ad, position) {
	if (position === 'ntv-home' || position === 'ntv-deskchannel') {
		return;
	}
	var counter = 0;
	var iframeInterval = setInterval(function () {
		var adiframe = ad.querySelector('iframe');
		var modified = false;
		if (adiframe && !adiframe.hasAttribute('tabindex')) {
			adiframe.setAttribute('tabindex', '-1');
			modified = true;
		}
		if (!modified && (adiframe || counter++ < 100)) {
			clearInterval(iframeInterval);
		}
	}, 100);
}

/**
 * Injects medianet ad into specified position.
 * @param {String} position Position name for the parent wrapper
 * @param {String} size Medianet create sizes to request
 * @param {String} crid Tag ID to request from medianet
 */
function insertMedianet(position) {
	var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '300x250';
	var crid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '311139641';

	var wrapper = document.querySelector('.fbs-ad--' + position + '-wrapper');
	if (wrapper) {
		var ad = document.createElement('div');
		ad.setAttribute('id', position);
		wrapper.appendChild(ad);
		var script = document.createElement('script');
		script.text = '\n\t\t\ttry {\n\t\t\t\twindow._mNHandle.queue.push(function () {\n\t\t\t\t\twindow._mNDetails.loadTag(\'' + position + '\', \'' + size + '\', \'' + crid + '\');\n\t\t\t\t});\n\t\t\t} catch (error) {}\n\t\t';
		wrapper.appendChild(script);
	}
}

var adObservable = new __WEBPACK_IMPORTED_MODULE_4__Observable__["a" /* default */](); // needs to be exported for ad logic in universal-header.js

/**
 * Handles logic for top ad onRender event
 * @param {Event} event
 */
function topAdRenderCallback(event) {
	var _event$detail = event.detail;
	_event$detail = _event$detail === undefined ? {} : _event$detail;
	var _event$detail$size = _event$detail.size,
	    size = _event$detail$size === undefined ? [] : _event$detail$size;


	var adWrapper = document.querySelector('.fbs-ad--top-wrapper');
	var ad = document.querySelector('fbs-ad[position="top"]');
	var mainContent = document.querySelector('.main-content');
	var header = document.querySelector('.header');
	var paddingTopBottom = 24;

	// takeover ad
	if (size[0] === 7) {
		adWrapper.classList.add('fbs-ad--top-wrapper--takeover');
	}

	// fluid ad
	if (size.every(function (pos) {
		return pos === 0;
	})) {
		var initialAdHeight = 114;
		ad.classList.add('fbs-ad--fluid-top');
		var interval = setInterval(function () {
			if (ad.clientHeight !== 0 && ad.clientHeight !== initialAdHeight) {
				adObservable.notify(ad.clientHeight);
				clearInterval(interval);
			}
		}, 100);
	}

	// regular ads
	if (size.every(function (pos) {
		return pos !== 0 && pos !== 1;
	})) {
		adObservable.notify(size[1] + paddingTopBottom);
	}

	// no ad targeted
	if (size.every(function (pos) {
		return pos === 1;
	})) {
		adWrapper.style.height = 0;
		mainContent.style.paddingTop = header.clientHeight + 'px';
	}
}

/**
 * Handles logic for spon-logo ad onRender event
 * @param {Event} event
 */
function sponLogoRenderCallback(event) {
	var _event$detail2 = event.detail;
	_event$detail2 = _event$detail2 === undefined ? {} : _event$detail2;
	var _event$detail2$size = _event$detail2.size,
	    size = _event$detail2$size === undefined ? [] : _event$detail2$size;

	var modalContent = document.querySelector('.modal__content');

	if (size[0] && size[0] !== 1) {
		var sponsor = modalContent.querySelector('.sponsor');
		if (sponsor) {
			sponsor.classList.add('sponsor--loaded');
		}
		modalContent.classList.add('modal__content--has-sponsor');
	} else {
		modalContent.classList.remove('modal__content--has-sponsor');
	}
}

/**
 * Handles logic for mobile sticky ad onRender event
 * @param {Event} event
 */
function mobileStickyRenderCallback(event) {
	var _event$detail3 = event.detail;
	_event$detail3 = _event$detail3 === undefined ? {} : _event$detail3;
	var _event$detail3$size = _event$detail3.size,
	    size = _event$detail3$size === undefined ? [] : _event$detail3$size;

	var ad = document.querySelector('fbs-ad[position="mobile"]');

	var footerContainer = document.querySelector('.footer');
	var adClose = document.createElement('button');
	var adCloseX = document.createElement('span');

	var footerMobileClass = 'footer--mobile';
	var fbsAdMobileClass = 'fbs-ad--mobile';

	adCloseX.classList.add('close');
	adCloseX.innerHTML = 'x';
	adClose.append(adCloseX);
	adClose.onclick = function () {
		document.querySelector('.' + fbsAdMobileClass + '-wrapper fbs-ad').classList.add('fbs-ad--mobile-hidden');
		footerContainer.classList.remove(footerMobileClass, footerMobileClass + '-fluid');
		adClose.classList.remove('fbs-ad--mobile-close');
	};

	if (size[0] !== 7) {
		if (footerContainer) {
			footerContainer.classList.add(footerMobileClass);
		}

		if (size[1] === 0) {
			if (!document.querySelector('.' + fbsAdMobileClass + '-close')) {
				document.querySelector('.' + fbsAdMobileClass + '-wrapper').append(adClose);

				ad.classList.add(fbsAdMobileClass + '-fluid');
				footerContainer.classList.add(footerMobileClass + '-fluid');

				setTimeout(function () {
					adClose.classList.add(fbsAdMobileClass + '-close');
				}, 5000);
			}
		} else {
			ad.classList.add(fbsAdMobileClass);
		}
	} else if (size[0] === 7) {
		var adWrapper = document.querySelector('.fbs-ad--top-wrapper');
		if (adWrapper) {
			adWrapper.classList.add('fbs-ad--top-wrapper--mobile');
		}
	}
}

/**
 * Maps ad positions to their render callback
 */
var renderCallbackMap = {
	top: topAdRenderCallback,
	'spon-logo': sponLogoRenderCallback,
	mobile: mobileStickyRenderCallback,
	'mobile-sticky': mobileStickyRenderCallback
};

/**
 * Adds render listener to ads that have render event callbacks
 * @param {FbsAd} ad
 * @param {string} position
 */
function addRenderEventCallback(ad, position) {
	if (renderCallbackMap[position] && ad) {
		ad.addEventListener('render', renderCallbackMap[position]);
	}
}

/**
 * Injects all ads of a type into the page.
 * You can optionally pass in a context.
 * @param {String} position The ad position name.
 * @param {Object} [context]  Optional DOM node to narrow scope.
 * @param {String} customAdId ID to pass to component child
 */
function insertAd(position) {
	var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	var customAdId = arguments[2];
	var classList = context.classList;

	var isArticleAdRail = classList && classList.contains('ad-rail');
	var wrapperName = isArticleAdRail ? customAdId : position;
	var wrappers = context.querySelectorAll('.fbs-ad--' + wrapperName + '-wrapper');

	var _loop = function _loop(i) {
		var ad = document.createElement('fbs-ad');

		['progressive', 'batched'].forEach(function (type) {
			if (wrappers[i].classList.contains('fbs-ad--' + type)) {
				ad.setAttribute(type, true);
			}
		});

		// Give ads that are already in view a chance to load before displaying
		// Batched ad calls will be handled by their respective pages
		if (ad.getAttribute('progressive') && !ad.getAttribute('batched')) {
			setTimeout(function () {
				insertProgressiveAd(ad);
			}, 100);
		}

		ad.setAttribute('position', position);

		if (wrappers[i].dataset.customTargeting) {
			ad.setAttribute('custom-targeting', wrappers[i].dataset.customTargeting);
		}

		if (customAdId) {
			ad.setAttribute('ad-id', customAdId);
		}

		addTabindex(ad, position);
		// Add aria-hidden attribute to the wrapper - Accessibility
		if (!position === 'ntv-home' && !position === 'ntv-deskchannel') {
			if (!wrappers[i].hasAttribute('aria-hidden')) {
				wrappers[i].setAttribute('aria-hidden', 'true');
				wrappers[i].setAttribute('role', 'presentation');
			}
		}

		addRenderEventCallback(ad, position);

		wrappers[i].appendChild(ad);
	};

	for (var i = 0; i < wrappers.length; i++) {
		_loop(i);
	}
}

function init() {
	// TODO: This will go away somehow
	if (__WEBPACK_IMPORTED_MODULE_1__is_mobile__["isMobile"]) {
		// this is mainly for AMP Plus, when landing on an AMP Plus article with a relativeVideo,
		// we cannot insert a sticky ad at the bottom of the article. Super specific use case but
		// I don't know where else to put it. **shrug**.
		if (!__WEBPACK_IMPORTED_MODULE_2__clientConfigService__["w" /* relativeVideo */]) {
			insertAd('mobile', document, 'mobile-sticky');
		}
		insertAd('mobilex');
		insertAd('mobilerec');
		insertAd('spon-logo');
		insertAd('ntv-mobhome');
		insertAd('ntv-mobchannel');
		insertAd('mobsearch');
		insertMedianet('mobile-medianet');
	} else {
		insertAd('top');
		insertAd('rec');
		insertAd('recx');
		insertAd('text');
		insertAd('topx');
		insertAd('spon-logo');
		insertAd('ntv-home');
		insertAd('ntv-deskchannel');
		insertAd('bottom');
		insertAd('moreon');
		insertMedianet('body-medianet');
	}
}

if (!__WEBPACK_IMPORTED_MODULE_2__clientConfigService__["x" /* retracted */]) {
	init();
}

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_edittools__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_adInsertion__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_universal_header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_search_modal__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_native_ads__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_native_ads___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__shared_native_ads__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_sliders_featured__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_video_overlay__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__homepage_pop_picks__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_brandvoice_setup__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_brandvoice_setup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__homepage_brandvoice_setup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_edition_dropdown__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_edition_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__homepage_edition_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__homepage_lazy_load__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__homepage_marketo__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__homepage_marketo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__homepage_marketo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__homepage_404_disclaimer__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__homepage_404_disclaimer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__homepage_404_disclaimer__);
















/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_carousel__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__forbes_fbs_carousel__);


customElements.define('fbs-carousel', __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_carousel__["FbsCarouselComponent"]);
document.addEventListener('DOMContentLoaded', function () {
	var featuredSliderClass = '.featured__carousel';
	var slideBgImgClass = '.featured__slide-bg';
	var backgroundImageCurrentClass = 'featured__bg-image--current';
	var backgroundImageNextClass = 'featured__bg-image--next';
	var backgroundImageFadeClass = 'featured__bg-image--fade';
	var currentSlideClass = 'fbs-slider__slide--current';
	var featuredSlider = document.querySelector(featuredSliderClass);
	var currentFocusedSlide = void 0;

	if (!featuredSlider) {
		return;
	}

	featuredSlider.addEventListener('slideChangeStart', function (e) {
		currentFocusedSlide.domNode.classList.remove(currentSlideClass);
		currentFocusedSlide = e.detail.targetSlide;
		currentFocusedSlide.domNode.classList.add(currentSlideClass);

		var currentSliderBgImg = document.querySelector('.' + backgroundImageCurrentClass);
		var nextSliderBgImg = document.querySelector('.' + backgroundImageNextClass);
		var slideBgImg = currentFocusedSlide.domNode.querySelector(slideBgImgClass);
		nextSliderBgImg.style.backgroundImage = 'url(' + slideBgImg.dataset.bgImage + ')';
		nextSliderBgImg.style.display = 'block';
		currentSliderBgImg.classList.add(backgroundImageFadeClass);
		setTimeout(function () {
			nextSliderBgImg.classList.remove(backgroundImageNextClass);
			nextSliderBgImg.classList.add(backgroundImageCurrentClass);
			currentSliderBgImg.style.display = 'none';
			currentSliderBgImg.classList.remove(backgroundImageFadeClass);
			currentSliderBgImg.classList.add(backgroundImageNextClass);
			currentSliderBgImg.classList.remove(backgroundImageCurrentClass);
		}, 500);
	});

	featuredSlider.addEventListener('sliderResized', function (e) {
		var currentSlide = e.detail.currentSlide;


		if (currentSlide !== currentFocusedSlide) {
			featuredSlider.nextSlide();
		}
	});

	function initSlider() {
		if (!featuredSlider.activeSlides.length) {
			return;
		}

		var fbsSliderControls = featuredSlider.querySelector('.fbs-slider__controls');
		fbsSliderControls.classList.add('fs-content');

		currentFocusedSlide = featuredSlider.currentSlide;

		var slideBgImg = currentFocusedSlide.domNode.querySelector(slideBgImgClass);
		var currentBgImage = document.querySelector('.' + backgroundImageCurrentClass);

		currentFocusedSlide.domNode.classList.add(currentSlideClass);
		currentBgImage.style.backgroundImage = 'url(' + slideBgImg.dataset.bgImage + ')';

		// largest version of slider will have 5 active slides, in this case the first slide should be in the middle
		// so trigger a previous slide to move the first slide over one
		if (featuredSlider.activeSlides.length === 5) {
			featuredSlider.prevSlide();
		}
	}

	initSlider();
});

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_clientConfigService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataVizSingleton__ = __webpack_require__(126);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




document.addEventListener('DOMContentLoaded', function () {
	var body = document.querySelector('body');
	var modal = document.getElementById('modal__box');
	var videoModalBody = document.getElementsByClassName('modal__content')[0];
	var sliders = [].concat(_toConsumableArray(document.querySelectorAll('fbs-carousel')));
	var closeButton = modal.querySelector('.close');

	function openModal(videoCard) {
		body.classList.add('body--modal-open');
		__WEBPACK_IMPORTED_MODULE_1__DataVizSingleton__["a" /* dataVizController */].clearTimer();

		var fbsVideo = document.createElement('fbs-video');
		fbsVideo.setAttribute('video-id', videoCard.dataset.videoId);
		fbsVideo.setAttribute('player-id', __WEBPACK_IMPORTED_MODULE_0__shared_clientConfigService__["s" /* playerId */]);
		fbsVideo.setAttribute('ad-unit-path', __WEBPACK_IMPORTED_MODULE_0__shared_clientConfigService__["k" /* fullAdZone */]);
		fbsVideo.setAttribute('autoplay', '');
		fbsVideo.setAttribute('controls', 'true');
		fbsVideo.setAttribute('secret-autoplay', '');
		fbsVideo.setAttribute('key-value-string', 'pos=vid-overlay');

		var title = document.createElement('div');
		title.classList.add('modal__title');
		title.append(videoCard.dataset.videoTitle);

		videoModalBody.append(fbsVideo, title);
	}

	function handleVideoClick(wrapper) {
		var el = wrapper || document;
		var videoCards = [].concat(_toConsumableArray(el.getElementsByClassName('card--video')));
		videoCards.forEach(function (videoCard) {
			videoCard.onclick = function (event) {
				if (!body.classList.contains('body--modal-open')) {
					openModal(videoCard);
				}
				event.preventDefault();
			};
		});
	}

	handleVideoClick();

	/**
  * Depending on how many slides is in view, if a slide is neither in view or
  * to the left or right of what's in view, it will not be in the DOM.
  * Click handler needs to be attached to slideChanged event so that DOM can
  * requery elements with the video class whenever what's in view changes.
  */
	sliders.forEach(function (slider) {
		slider.addEventListener('slideChanged', function () {
			handleVideoClick();
		});
	});

	document.addEventListener('fbs-channel-response', function (channelResponseEvent) {
		handleVideoClick(channelResponseEvent.detail);
	});

	if (closeButton) {
		closeButton.addEventListener('click', function () {
			__WEBPACK_IMPORTED_MODULE_1__DataVizSingleton__["a" /* dataVizController */].startTimer();
			body.classList.remove('body--modal-open');
			videoModalBody.innerHTML = '';
			videoModalBody.appendChild(closeButton);
		});
	}

	window.addEventListener('click', function (event) {
		if (event.target === modal) {
			__WEBPACK_IMPORTED_MODULE_1__DataVizSingleton__["a" /* dataVizController */].startTimer();
			body.classList.remove('body--modal-open');
			videoModalBody.innerHTML = '';
		}
	});
});

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DataVizCanvas__ = __webpack_require__(297);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Create singleton by creating a null instance variable scoped to module
 * and assigning the 'this' keyword inside class constructor. This will
 * return the unique instance (the first created).
 * https://medium.com/@dmnsgn/singleton-pattern-in-es6-d2d021d150ae
 */
var instance = null;

var DataVizController = function () {
	function DataVizController(dataVizModel, dataVizView) {
		_classCallCheck(this, DataVizController);

		if (!instance) {
			instance = this;
		}

		this.dataVizModel = dataVizModel;
		this.dataVizView = dataVizView;
		this.dataVizCanvas = new __WEBPACK_IMPORTED_MODULE_0__DataVizCanvas__["a" /* default */]();
		this.dataVizCanvas.init();

		this.currentDataVizList = {};
		this.newDataVizList = {};

		this.dataIndex = 0;
		this.timer = null;

		return instance;
	}

	_createClass(DataVizController, [{
		key: 'getNewData',
		value: function getNewData() {
			return (this.dataVizModel.dataModel.data[this.dataIndex] || {}).pages || [];
		}
	}, {
		key: 'getNewPageInfo',
		value: function getNewPageInfo() {
			return this.dataVizModel.dataModel.pageInfo || {};
		}
	}, {
		key: 'getActiveUsers',
		value: function getActiveUsers() {
			return Math.max(0, (this.dataVizModel.dataModel.data[this.dataIndex] || {}).siteVisits || 0);
		}
	}, {
		key: 'mapNewData',
		value: function mapNewData(pages, pageInfo) {
			var _this = this;

			var pageIndex = 0;
			return pages.forEach(function (page) {
				if (!_this.newDataVizList[page.id]) {
					_this.newDataVizList[page.id] = {
						index: pageIndex,
						views: page.val.toLocaleString(),
						pageInfo: pageInfo[page.id]
					};
					pageIndex++;
				}
			});
		}
	}, {
		key: 'leave',
		value: function leave(oldKeys, newKeys) {
			var _this2 = this;

			var leavingKeys = oldKeys.filter(function (key) {
				return newKeys.indexOf(key) === -1;
			});
			if (leavingKeys) {
				leavingKeys.forEach(function (key) {
					delete _this2.currentDataVizList[key];
					_this2.dataVizView.leaving(key);
				});
			}
		}
	}, {
		key: 'reposition',
		value: function reposition(oldKeys, newKeys) {
			var _this3 = this;

			var repositioningKeys = [].concat(_toConsumableArray(new Set(oldKeys.filter(function (key) {
				return newKeys.indexOf(key) !== -1;
			}))));
			if (repositioningKeys) {
				repositioningKeys.forEach(function (key) {
					var direction = _this3.currentDataVizList[key].views < _this3.newDataVizList[key].views ? 'up' : 'down';
					_this3.currentDataVizList[key] = _this3.newDataVizList[key];
					_this3.dataVizView.repositioning(key, _this3.newDataVizList, direction);
				});
			}
		}
	}, {
		key: 'enter',
		value: function enter(oldKeys, newKeys) {
			var _this4 = this;

			var enteringKeys = newKeys.filter(function (key) {
				return oldKeys.indexOf(key) === -1;
			});
			if (enteringKeys) {
				enteringKeys.forEach(function (key) {
					_this4.currentDataVizList[key] = _this4.newDataVizList[key];
					_this4.dataVizView.entering(key, _this4.newDataVizList);
				});
			}
		}
	}, {
		key: 'renderUpdatedUsersAndCanvas',
		value: function renderUpdatedUsersAndCanvas() {
			this.dataVizView.renderUsers(this.getActiveUsers());
			this.dataVizCanvas.changeNumber(this.getActiveUsers());
		}

		/**
   * if page is in both current and new object, just need to update index (reposition)
   * if page is in current, but not in new, remove from current object (leave)
   * if page is in new, but not in current, add it to current object (enter)
   */

	}, {
		key: 'renderUpdatedList',
		value: function renderUpdatedList() {
			var oldKeys = Object.keys(this.currentDataVizList);
			var newKeys = Object.keys(this.newDataVizList);

			this.leave(oldKeys, newKeys);
			this.reposition(oldKeys, newKeys);
			this.enter(oldKeys, newKeys);
			this.dataVizView.hideItemsOutOfView();

			this.renderUpdatedUsersAndCanvas();
		}
	}, {
		key: 'renderInitialList',
		value: function renderInitialList() {
			var _this5 = this;

			if (Object.keys(this.currentDataVizList).length === 0) {
				var initialList = Object.keys(this.newDataVizList);
				initialList.forEach(function (key) {
					_this5.dataVizView.loadInitialList(key, _this5.newDataVizList);
					_this5.dataVizView.hideItemsOutOfView();
				});
			}

			this.renderUpdatedUsersAndCanvas();
		}
	}, {
		key: 'renderMobileList',
		value: function renderMobileList() {
			var _this6 = this;

			var oldKeys = Object.keys(this.currentDataVizList);
			var newKeys = Object.keys(this.newDataVizList);

			// mobile implementation does not care about leaving items
			var repositioningKeys = [].concat(_toConsumableArray(new Set(oldKeys.filter(function (key) {
				return newKeys.indexOf(key) !== -1;
			}))));
			var enteringKeys = newKeys.filter(function (key) {
				return oldKeys.indexOf(key) === -1;
			});
			var mobileArr = repositioningKeys.concat(enteringKeys);

			mobileArr.forEach(function (key) {
				if (_this6.newDataVizList[key].index < 10) {
					var increaseViews = _this6.currentDataVizList[key] && _this6.currentDataVizList[key].views < _this6.newDataVizList[key].views;
					var direction = increaseViews || !_this6.currentDataVizList[key] ? 'up' : 'down';
					_this6.dataVizView.loadMobileList(key, _this6.newDataVizList, direction);
				}
			});

			this.renderUpdatedUsersAndCanvas();
			this.dataVizView.hideItemsOutOfView();
		}
	}, {
		key: 'updateData',
		value: function updateData(type) {
			this.dataIndex++;
			this.mapNewData(this.getNewData(), this.getNewPageInfo());

			if (type === 'mobile') {
				this.renderUpdatedUsersAndCanvas();
			} else {
				this.renderUpdatedList();
			}
		}
	}, {
		key: 'getData',
		value: function getData(type) {
			var _this7 = this;

			this.clearTimer();
			this.dataVizModel.refetchData().then(function () {
				_this7.dataIndex = 0;
				_this7.mapNewData(_this7.getNewData(), _this7.getNewPageInfo());

				if (type === 'mobile') {
					_this7.renderUpdatedUsersAndCanvas();
				} else {
					_this7.renderUpdatedList();
				}

				_this7.startTimer(type);
			});
		}
	}, {
		key: 'clearTimer',
		value: function clearTimer() {
			if (this.timer) {
				clearInterval(this.timer);
				this.timer = null;
			}
		}
	}, {
		key: 'startTimer',
		value: function startTimer(type) {
			var _this8 = this;

			if (this.timer) return;

			if (this.hasData()) {
				this.timer = setInterval(function () {
					_this8.newDataVizList = {}; // reset new data

					/**
      * get new data when data viz is on last dataset.
      * otherwise, continue going through array to update data.
      */
					if (_this8.dataIndex === _this8.dataVizModel.dataModel.data.length - 1) {
						_this8.getData(type);
					} else {
						_this8.updateData(type);
					}
				}, 5000);
			}
		}
	}, {
		key: 'hasData',
		value: function hasData() {
			return this.dataVizModel.dataModel && this.dataVizModel.dataModel.data;
		}
	}, {
		key: 'initializeMobileList',
		value: function initializeMobileList() {
			if (Object.keys(this.currentDataVizList).length === 0) {
				this.mapNewData(this.getNewData(), this.getNewPageInfo());
				this.currentDataVizList = this.newDataVizList;
			}

			this.dataIndex++;
			this.newDataVizList = {};

			this.mapNewData(this.getNewData(), this.getNewPageInfo());
			this.renderMobileList();
		}
	}, {
		key: 'initialize',
		value: function initialize() {
			if (this.hasData()) {
				this.mapNewData(this.getNewData(), this.getNewPageInfo());
				this.renderInitialList();

				// current data is set to new data only after initial list is rendered
				if (Object.keys(this.currentDataVizList).length === 0) {
					this.currentDataVizList = this.newDataVizList;
				}

				this.startTimer();
			}
		}
	}]);

	return DataVizController;
}();

/* harmony default export */ __webpack_exports__["a"] = (DataVizController);

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
	FOR REFERENCE CANVAS DRAWING METHODS
	ctx.save() - save current state of canvas context
	ctx.restore() - restore canvas context to state of last save
	ctx.translate(x, y) - translate the coordinate system by x, y
	ctx.rotate(r) - rotate the coordinate system by r radians
	ctx.beginPath() - starts a new path
	ctx.closePath() - move back to the starting point of the current path
	ctx.stroke() - stroke the shape of the current path
	ctx.fill() - fill the shape of the current path
	ctx.moveTo(x, y) - move position to x,y
	ctx.lineTo(x, y) - draw line from current position to x, y
	ctx.arc(x, y, radius, startAngle, endAngle) - draw arc at x,y
	ctx.strokeStyle - the stroke color ('rgb(x,x,x)' | '#xxxxxx' | 'color')
	ctx.fillSTyle - the fill color ('rgb(x,x,x)' | '#xxxxxx' | 'color')
*/

var DataVizCanvas = function () {
	function DataVizCanvas() {
		_classCallCheck(this, DataVizCanvas);

		// animation/timing constants
		this.ANGLE_BETWEEN_MARKS = Math.PI / 20;
		this.RANGE_MIN = 0;
		this.RANGE_MAX = Math.PI;
		this.FPS = 30;
		this.INTERVAL = 1000 / this.FPS;
		this.PI = Math.PI;
		this.TWO_PI = Math.PI * 2;
		this.TOTAL_ITERATIONS = {
			IDLE: 10,
			OVERDRIVE: 1.5
		};
		this.ANIMATION_AMPLITUDES = {
			IDLE: 80,
			OVERDRIVE: 50
		};
		this.OVERDRIVE_THRESHOLD = 5000;
		this.ANIMATION_TYPES = {
			IDLE: 'IDLE',
			OVERDRIVE: 'OVERDRIVE'
		};

		// drawing constants
		this.GAUGE_RADIUS = 30;
		this.GAUGE_MARK_LENGTH = 50;
		this.NEEDLE_LENGTH = 60;
		this.NEEDLE_BASE_WIDTH = 2;
		this.NEEDLE_TIP_WIDTH = 1;
		this.NEEDLE_FILLSTYLE = '#6e6e6e';
		this.BACKGROUND_COLOR = '#fcfcfc';
		this.STANDARD_MARK_WIDTH = 1;
		this.CLOSE_MARK_WIDTH = 2;
		this.MATCHING_MARK_WIDTH = 3;

		this.MIN_USER_COUNT = 0;
		this.MAX_USER_COUNT = 60000;
		this.canvas = null;
		this.ctx = null;
		this.lastTime = performance.now();
		this.currentAngle = 0;
		this.nextAngle = 0;
		this.currentPerfectAngle = 0;
		this.currentValueIndex = 0;
		this.idleOffset = 0;
		this.idleDirection = 1;
		this.currentIteration = 0;
		this.startValue = 0;
		this.changeInValue = 0;
		this.totalIterations = this.TOTAL_ITERATIONS.IDLE;
		this.animationAmplitude = this.ANIMATION_AMPLITUDES.IDLE;
	}

	/**
  * Return value of a number in one arbitrary range mapped to another arbitrary range
  * credit to xposedbones - https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
  * class methods that do not use "this" should be static
  */


	_createClass(DataVizCanvas, [{
		key: 'easeOutCubic',


		/**
   * Easing function for prettier animation
   * credit to Kirupa - https://www.kirupa.com/html5/animating_with_easing_functions_in_javascript.htm
   */
		value: function easeOutCubic() {
			return this.changeInValue * (Math.pow(this.currentIteration / this.totalIterations - 1, 3) + 1) + this.startValue;
		}

		/**
   * Draw gauge marks on canvas
   */

	}, {
		key: 'drawGauge',
		value: function drawGauge() {
			for (var i = 2; i < 19; i++) {
				this.ctx.save();

				var tickAngle = i * this.ANGLE_BETWEEN_MARKS;
				var diff = 1 - Math.abs(this.currentAngle - tickAngle) / this.PI;
				var colorValue = 0;

				// the last 5 ticks will fade into red
				if (i > 13) {
					var redValue = (1 - 0.15 * (18 - i)) * 255;
					var alphaValue = redValue / 255;
					colorValue = 'rgba(' + redValue + ', 0, 0, ' + alphaValue + ')';
				} else {
					colorValue = '#ccc';
				}

				// most markers are of thickness 1
				this.ctx.lineWidth = this.STANDARD_MARK_WIDTH;
				// if a gauge marker is very close to current angle it should be thickest marker
				if (diff >= 0.99) {
					this.ctx.lineWidth = this.MATCHING_MARK_WIDTH;
					// other markers that are relatively close should be slightly thicker
				} else if (diff >= 0.93) {
					this.ctx.lineWidth = this.CLOSE_MARK_WIDTH;
				}

				this.ctx.translate(this.canvas.width / 2, this.canvas.height - 10);
				this.ctx.rotate(tickAngle);
				this.ctx.beginPath();
				this.ctx.moveTo(-this.GAUGE_RADIUS, 0);
				this.ctx.lineTo(-this.GAUGE_MARK_LENGTH, 0);
				this.ctx.strokeStyle = colorValue;
				this.ctx.stroke();

				this.ctx.restore();
			}
		}

		/**
   * Draw gauge needle at current angle
   */

	}, {
		key: 'drawNeedle',
		value: function drawNeedle() {
			this.ctx.save();
			this.ctx.translate(this.canvas.width / 2, this.canvas.height - 10);
			this.ctx.rotate(this.currentAngle);
			this.ctx.beginPath();
			this.ctx.moveTo(0, this.NEEDLE_BASE_WIDTH);
			this.ctx.lineTo(0, -this.NEEDLE_BASE_WIDTH);
			this.ctx.lineTo(-this.NEEDLE_LENGTH, -this.NEEDLE_TIP_WIDTH);
			this.ctx.lineTo(-this.NEEDLE_LENGTH, this.NEEDLE_TIP_WIDTH);
			this.ctx.fillStyle = this.NEEDLE_FILLSTYLE;
			this.ctx.closePath();
			this.ctx.fill();

			this.ctx.beginPath();
			this.ctx.arc(-this.NEEDLE_LENGTH, 0, this.NEEDLE_TIP_WIDTH, 0, this.TWO_PI);
			this.ctx.fill();

			this.ctx.restore();
		}

		/**
   * Clear the canvas in between frames
   */

	}, {
		key: 'clear',
		value: function clear() {
			this.ctx.save();

			this.ctx.fillStyle = this.BACKGROUND_COLOR;
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

			this.ctx.restore();
		}

		/**
   * Calculate consistent tick rate
   */

	}, {
		key: 'tick',
		value: function tick() {
			var now = performance.now();
			var delta = now - this.lastTime;

			if (delta > this.INTERVAL) {
				this.lastTime = now - delta % this.INTERVAL;

				return true;
			}

			return false;
		}
	}, {
		key: 'drawLabels',
		value: function drawLabels() {
			this.ctx.font = '9px "Work Sans"';
			this.ctx.fillStyle = '#737373';
			this.ctx.fillText('0', 15, 60);
			this.ctx.fillText('60k', 90, 60);
		}

		/**
   * Call all necessary draw methods for a frame
   */

	}, {
		key: 'draw',
		value: function draw() {
			this.clear();
			this.drawGauge();
			this.drawLabels();
			this.drawNeedle();
		}

		/**
   * Update method calculates the current angle and draws each frame
   */

	}, {
		key: 'update',
		value: function update() {
			if (this.tick()) {
				this.currentIteration++;
				if (this.currentIteration < this.totalIterations) {
					this.currentAngle = this.easeOutCubic();
					this.draw();
				} else {
					this.idleOffset = Math.random() / this.animationAmplitude;
					this.idleDirection *= -1;
					this.currentIteration = 0;
					this.nextAngle = this.currentPerfectAngle + this.idleOffset * this.idleDirection;
					this.startValue = this.currentAngle;
					this.changeInValue = this.nextAngle - this.currentAngle;
				}
			}

			// for performance only request animation frame if we are not done with an animation
			if (this.currentIteration < this.totalIterations) {
				requestAnimationFrame(this.update.bind(this));
			}
		}

		/**
   * Sets variables to values needed for the current type of animation for the needle
   * @param {string} type the type of animation for the needle, 'OVERDRIVE' | 'IDLE'
   */

	}, {
		key: 'setNeedleAnimation',
		value: function setNeedleAnimation(type) {
			this.animationAmplitude = this.ANIMATION_AMPLITUDES[type];
			this.totalIterations = this.TOTAL_ITERATIONS[type];
		}

		/**
   * Change target number for gauge to animate to
   */

	}, {
		key: 'changeNumber',
		value: function changeNumber(num) {
			var displayNumber = num > this.MAX_USER_COUNT ? this.MAX_USER_COUNT : num;

			if (displayNumber >= this.MAX_USER_COUNT - this.OVERDRIVE_THRESHOLD) {
				this.setNeedleAnimation(this.ANIMATION_TYPES.OVERDRIVE);
			} else {
				this.setNeedleAnimation(this.ANIMATION_TYPES.IDLE);
			}
			this.currentPerfectAngle = DataVizCanvas.mapNumberOntoRange(displayNumber, this.MIN_USER_COUNT, this.MAX_USER_COUNT, this.RANGE_MIN, this.RANGE_MAX);
			this.idleOffset = Math.random() / this.animationAmplitude;
			this.idleDirection = 1;
			this.nextAngle = this.currentPerfectAngle + this.idleOffset * this.idleDirection;
			this.currentIteration = 0;
			this.startValue = this.currentAngle;
			this.changeInValue = this.nextAngle - this.currentAngle;
			requestAnimationFrame(this.update.bind(this));
		}

		/**
   * Initialize canvas
   */

	}, {
		key: 'init',
		value: function init() {
			this.canvas = document.querySelector('.data-viz__canvas-gauge');
			if (this.canvas) {
				this.ctx = this.canvas.getContext('2d');
				this.draw();
				this.changeNumber(this.MIN_USER_COUNT);
			}
		}
	}], [{
		key: 'mapNumberOntoRange',
		value: function mapNumberOntoRange(num, inMin, inMax, outMin, outMax) {
			return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
		}
	}]);

	return DataVizCanvas;
}();

/* harmony default export */ __webpack_exports__["a"] = (DataVizCanvas);

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_icons__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__forbes_fbs_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forbesmedia_multiclamp__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forbesmedia_multiclamp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__forbesmedia_multiclamp__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var CountUp = __webpack_require__(299);

var DataVizView = function () {
	function DataVizView(dataVizList, dataVizActiveUsers) {
		_classCallCheck(this, DataVizView);

		this.easeInCubic = function (t, b, c, d) {
			t /= d;
			return c * Math.pow(t, 3) + b;
		};

		this.easeOutCubic = function (t, b, c, d) {
			t /= d;
			t--;
			return c * (Math.pow(t, 3) + 1) + b;
		};

		this.dataVizList = dataVizList;
		this.dataVizActiveUsers = dataVizActiveUsers;
		this.updateListItemHeight();

		// CountUp configuration options
		this.easeInOptions = {
			easingFn: this.easeInCubic,
			useEasing: true,
			useGrouping: true,
			separator: ',',
			decimal: '.'
		};
		this.noEasingOptions = {
			useEasing: false,
			useGrouping: true,
			separator: ',',
			decimal: '.'
		};
		this.easeOutOptions = {
			easingFn: this.easeOutCubic,
			useEasing: true,
			useGrouping: true,
			separator: ',',
			decimal: '.'
		};
		var textCanvas = document.createElement('canvas');
		this.textCtx = textCanvas.getContext('2d');
	}

	_createClass(DataVizView, [{
		key: 'updateListItemHeight',
		value: function updateListItemHeight() {
			if (document.body.clientWidth <= 480) {
				this.listItemHeight = 75;
			} else if (document.body.clientWidth <= 1024) {
				this.listItemHeight = 90;
			} else {
				this.listItemHeight = 100;
			}
		}

		// easing functions credit to http://gizma.com/easing/#cub3

	}, {
		key: 'countUp',
		value: function countUp(startVal, endVal, timing, options, callback) {
			// params for CountUp(target, start value, end value, number of decimal places, animation duration, configuration options)
			var countUp = new CountUp(this.dataVizActiveUsers, startVal, endVal, 0, timing, options);
			if (!countUp.error) {
				countUp.start(callback);
			} else {
				this.dataVizActiveUsers.innerText = endVal;
			}
		}
	}, {
		key: 'renderUsers',
		value: function renderUsers(users) {
			var _this = this;

			var currentUserCount = parseInt(this.dataVizActiveUsers.innerText.replace(',', ''), 10) || 0;
			var halfway = (currentUserCount + users) / 2;
			// ease out is applied to the last 50 to emphasize easing at the end of animation
			var fiftyShy = Math.max(0, currentUserCount < users ? users - 50 : users + 50);
			var easeOutCallback = function easeOutCallback() {
				_this.countUp(fiftyShy, users, 1.0, _this.easeOutOptions);
			};
			var easeInCallback = function easeInCallback() {
				_this.countUp(halfway, fiftyShy, 1.5, _this.noEasingOptions, easeOutCallback);
			};

			this.countUp(currentUserCount, halfway, 2.5, this.easeInOptions, easeInCallback);
		}
	}, {
		key: 'setInitialAnimation',
		value: function setInitialAnimation(item) {
			var _this2 = this;

			item.style.transform = 'translateY(1500px)';
			requestAnimationFrame(function () {
				item.style.transform = 'translateY(' + item.dataset.index * _this2.listItemHeight + 'px)';
			});
		}
	}, {
		key: 'hideItemsOutOfView',
		value: function hideItemsOutOfView() {
			this.resetHiddenItems();

			var numItemsInView = Math.floor(this.dataVizList.clientHeight / this.listItemHeight);

			var listItems = [].concat(_toConsumableArray(this.dataVizList.querySelectorAll('li')));
			listItems.forEach(function (item) {
				if (item.dataset.index >= numItemsInView) {
					item.classList.add('data-viz__hide');
				}
			});

			var lastElementInView = this.dataVizList.querySelector('[data-index="' + (numItemsInView - 1) + '"]');
			if (lastElementInView) {
				lastElementInView.classList.add('data-viz__hide-border-bottom');
			}
		}
	}, {
		key: 'resetHiddenItems',
		value: function resetHiddenItems() {
			var itemWithHiddenBorderBottom = this.dataVizList.querySelector('.data-viz__hide-border-bottom');
			if (itemWithHiddenBorderBottom) {
				itemWithHiddenBorderBottom.classList.remove('data-viz__hide-border-bottom');
			}

			var itemsOutOfView = [].concat(_toConsumableArray(this.dataVizList.querySelectorAll('.data-viz__hide')));
			itemsOutOfView.forEach(function (item) {
				item.classList.remove('data-viz__hide');
			});
		}
	}, {
		key: 'loadInitialList',
		value: function loadInitialList(key, newDataVizList) {
			var listItem = DataVizView.createListItem(key, newDataVizList);
			this.setInitialAnimation(listItem);
			this.dataVizList.appendChild(listItem);
			// need timeout to give item a chance to attach to the DOM
			setTimeout(function () {
				var title = listItem.querySelector('.data-viz__title');
				__WEBPACK_IMPORTED_MODULE_1__forbesmedia_multiclamp___default()(title, 2, false);
			});
		}
	}, {
		key: 'loadMobileList',
		value: function loadMobileList(key, newDataVizList, direction) {
			var index = newDataVizList[key].index;

			var listItem = DataVizView.createListItem(key, newDataVizList);
			listItem.style.transform = 'translateY(' + listItem.dataset.index * this.listItemHeight + 'px)';
			this.dataVizList.appendChild(listItem);

			// need timeout to give item a chance to attach to the DOM
			setTimeout(function () {
				var title = listItem.querySelector('.data-viz__title');
				__WEBPACK_IMPORTED_MODULE_1__forbesmedia_multiclamp___default()(title, 2, false);
			});

			var element = this.dataVizList.querySelector('[data-key="' + key + '"]');
			DataVizView.updateViewNumber(element, key, index, newDataVizList);
			DataVizView.updateArrowDirection(element, direction);
		}
	}, {
		key: 'leaving',
		value: function leaving(key) {
			var element = this.dataVizList.querySelector('[data-key="' + key + '"]');
			if (element) {
				element.style.transform = 'translateY(1500px)';
				setTimeout(function () {
					element.parentNode.removeChild(element);
				}, 500);
			}
		}
	}, {
		key: 'repositioning',
		value: function repositioning(key, newDataVizList, direction) {
			var index = newDataVizList[key].index;

			var element = this.dataVizList.querySelector('[data-key="' + key + '"]');
			if (element) {
				element.style.transform = 'translateY(' + index * this.listItemHeight + 'px)';
				DataVizView.updateViewNumber(element, key, index, newDataVizList);
				DataVizView.updateArrowDirection(element, direction);
			}
		}
	}, {
		key: 'entering',
		value: function entering(key, newDataVizList) {
			var _this3 = this;

			var listItem = DataVizView.createListItem(key, newDataVizList);
			var index = newDataVizList[key].index;


			if (listItem) {
				listItem.style.transform = 'translateY(1500px)';
				this.dataVizList.appendChild(listItem);
				// need timeout to give item a chance to attach to the DOM
				setTimeout(function () {
					var title = listItem.querySelector('.data-viz__title');
					__WEBPACK_IMPORTED_MODULE_1__forbesmedia_multiclamp___default()(title, 2, false);
				});
				requestAnimationFrame(function () {
					listItem.style.transform = 'translateY(' + index * _this3.listItemHeight + 'px)';
				});
			}
		}
	}], [{
		key: 'createNumberContainer',
		value: function createNumberContainer(newItem) {
			var numberContainer = document.createElement('div');
			numberContainer.classList.add('data-viz__number-container');

			var numberEl = document.createElement('h4');
			var numberText = document.createTextNode(newItem.views);
			numberEl.classList.add('data-viz__value');
			numberEl.appendChild(numberText);

			var arrow = document.createElement('div');
			arrow.setAttribute('class', 'data-viz__arrow-wrapper');
			arrow.innerHTML = __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_icons__["play"];
			numberContainer.append(numberEl, arrow);

			return numberContainer;
		}
	}, {
		key: 'createBrandVoiceContainer',
		value: function createBrandVoiceContainer(newItem) {
			var brandVoiceContainer = document.createElement('div');
			brandVoiceContainer.classList.add('data-viz__brand-voice-container');

			var brandvoiceNameEl = document.createElement('span');
			var brandvoiceNameText = document.createTextNode(newItem.pageInfo.advoiceBrand);
			brandvoiceNameEl.classList.add('data-viz__brand-voice-name');
			brandvoiceNameEl.appendChild(brandvoiceNameText);

			var brandvoiceLogoEl = document.createElement('span');
			var brandvoiceLogoText = document.createTextNode('Brandvoice');
			brandvoiceLogoEl.classList.add('data-viz__brand-voice-logo');
			brandvoiceLogoEl.appendChild(brandvoiceLogoText);

			brandVoiceContainer.append(brandvoiceNameEl, brandvoiceLogoEl);

			return brandVoiceContainer;
		}
	}, {
		key: 'createForbesInsightsContainer',
		value: function createForbesInsightsContainer() {
			var insightsContainer = document.createElement('div');
			var insightsLabel = document.createTextNode('FORBES INSIGHTS');
			insightsContainer.classList.add('card__insights');
			insightsContainer.appendChild(insightsLabel);

			return insightsContainer;
		}
	}, {
		key: 'createPaidContentContainer',
		value: function createPaidContentContainer(newItem) {
			var paidContentContainer = document.createElement('div');
			paidContentContainer.classList.add('data-viz__paid-content-container');

			var paidContentNameEl = document.createElement('span');
			var paidContentNameText = document.createTextNode(newItem.paidContentData.companyName);
			paidContentNameEl.classList.add('data-viz__paid-content-name');
			paidContentNameEl.appendChild(paidContentNameText);

			var paidContentLogoEl = document.createElement('span');
			var paidContentLogoText = document.createTextNode(' ' + newItem.paidContentData.label);
			paidContentLogoEl.classList.add('data-viz__paid-content-logo');
			paidContentLogoEl.style.color = newItem.paidContentData.primaryColor;
			paidContentLogoEl.appendChild(paidContentLogoText);

			paidContentContainer.append(paidContentNameEl, paidContentLogoEl);

			return paidContentContainer;
		}
	}, {
		key: 'createTitleContainer',
		value: function createTitleContainer(newItem) {
			var titleContainer = document.createElement('div');
			titleContainer.classList.add('data-viz__title-container');
			var titleEl = document.createElement('a');
			var titleText = document.createTextNode(newItem.pageInfo.title);
			titleEl.setAttribute('href', newItem.pageInfo.url);
			titleEl.setAttribute('data-ga-track', 'Trending - Article - ' + newItem.pageInfo.title);
			titleEl.setAttribute('title', newItem.pageInfo.title);
			titleEl.classList.add('data-viz__title', 'body--dense-merriweather');
			titleEl.appendChild(titleText);

			if (newItem.pageInfo.advoiceBrand) {
				var brandVoiceContainer = DataVizView.createBrandVoiceContainer(newItem);
				titleContainer.append(brandVoiceContainer, titleEl);
			} else if (newItem.blogType === 'insights') {
				var insightsContainer = DataVizView.createForbesInsightsContainer();
				titleContainer.append(insightsContainer, titleEl);
			} else if (newItem.paidContentData) {
				var paidContentContainer = DataVizView.createPaidContentContainer(newItem);
				titleContainer.append(paidContentContainer, titleEl);
			} else {
				titleContainer.append(titleEl);
			}
			return titleContainer;
		}
	}, {
		key: 'createListItem',
		value: function createListItem(key, newDataVizList) {
			var newItem = newDataVizList[key];

			var numberContainer = DataVizView.createNumberContainer(newItem);
			var titleContainer = DataVizView.createTitleContainer(newItem);

			var listItem = document.createElement('li');
			listItem.setAttribute('data-index', newItem.index);
			listItem.setAttribute('data-key', key);
			listItem.classList.add('data-viz__item');
			listItem.append(numberContainer, titleContainer);

			return listItem;
		}
	}, {
		key: 'updateViewNumber',
		value: function updateViewNumber(element, key, index, newDataVizList) {
			element.setAttribute('data-index', index);
			var updatedItem = newDataVizList[key];
			var valueEl = element.querySelector('.data-viz__value');
			valueEl.innerHTML = updatedItem.views;
		}
	}, {
		key: 'updateArrowDirection',
		value: function updateArrowDirection(element, direction) {
			var arrow = element.querySelector('.data-viz__arrow-wrapper');
			var downArrowClass = 'data-viz__arrow--down';

			if (direction === 'up') {
				if (arrow.classList.contains(downArrowClass)) {
					arrow.classList.remove(downArrowClass);
				}
			} else if (direction === 'down') {
				if (!arrow.classList.contains(downArrowClass)) {
					arrow.classList.add(downArrowClass);
				}
			}
		}
	}]);

	return DataVizView;
}();

/* harmony default export */ __webpack_exports__["a"] = (DataVizView);

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,n){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=n(require,exports,module):a.CountUp=n()}(this,function(a,n,t){var e=function(a,n,t,e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;t=i}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a]})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n}function u(a){return"number"==typeof a&&!isNaN(a)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e)},e);return d=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return e});

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_clientConfigService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_checkStatus__ = __webpack_require__(19);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var DataVizModel = function () {
	function DataVizModel() {
		_classCallCheck(this, DataVizModel);

		this.dataModel = __WEBPACK_IMPORTED_MODULE_0__shared_clientConfigService__["y" /* serverData */].dataVizModel;
	}

	/**
  * Retrieves more data from the api.
  */


	_createClass(DataVizModel, [{
		key: 'refetchData',
		value: function refetchData() {
			var _this = this;

			var url = __WEBPACK_IMPORTED_MODULE_0__shared_clientConfigService__["y" /* serverData */].division ? '/simple-data/data-viz/?division=' + __WEBPACK_IMPORTED_MODULE_0__shared_clientConfigService__["y" /* serverData */].division : '/simple-data/data-viz/';
			return fetch(url).then(function (response) {
				return Object(__WEBPACK_IMPORTED_MODULE_1__shared_checkStatus__["a" /* default */])(response);
			}).then(function (res) {
				return res.json();
			}).then(function (res) {
				_this.dataModel = res;
				return _this.dataModel;
			}).catch(function (error) {
				return console.error(error);
			});
		}
	}]);

	return DataVizModel;
}();

/* harmony default export */ __webpack_exports__["a"] = (DataVizModel);

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbesmedia_multiclamp__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbesmedia_multiclamp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__forbesmedia_multiclamp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_is_mobile__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_is_mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_is_mobile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_clientConfigService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_throttle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_checkStatus__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dist_templates_editorsPicks__ = __webpack_require__(302);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }








// eslint-disable-next-line import/no-unresolved, import/extensions


document.addEventListener('DOMContentLoaded', function () {
	var popPicks = document.querySelector('.channel__sidebar--pop-picks');
	var popularBtn = popPicks.querySelector('.pop-picks__nav-btn--popular');
	var picksBtn = popPicks.querySelector('.pop-picks__nav-btn--picks');
	var popularContent = popPicks.querySelector('.pop-picks__content--popular');
	var picksContent = popPicks.querySelector('.pop-picks__content--picks');
	var popularOnScreen = true;
	var picksData = null;
	var picksItems = void 0;

	function hideLargeScreenPicks() {
		var contentHeight = picksContent.clientHeight;
		var previousLastVisible = document.querySelector('.editors-pick--last-visible');
		if (previousLastVisible) {
			previousLastVisible.classList.remove('editors-pick--last-visible');
		}

		var lastVisibileItem = void 0;

		(picksItems || []).forEach(function (pick) {
			if (pick.offsetTop + pick.clientHeight > contentHeight - 20) {
				pick.classList.add('editors-pick--hidden');
				pick.setAttribute('aria-hidden', 'true');
				pick.setAttribute('tabindex', '-1');
				lastVisibileItem.classList.add('editors-pick--last-visible');
			} else {
				pick.classList.remove('editors-pick--hidden');
				pick.removeAttribute('aria-hidden', 'true');
				pick.removeAttribute('tabindex', '-1');
				lastVisibileItem = pick;
			}
		});
	}

	function checkToHidePicks() {
		if (window.innerWidth > 768) {
			hideLargeScreenPicks();
		}
	}

	function insertPicks() {
		var data = {
			picksData: picksData
		};
		var html = Object(__WEBPACK_IMPORTED_MODULE_6__dist_templates_editorsPicks__["a" /* template */])(data);
		picksContent.innerHTML = html;
		picksItems = [].concat(_toConsumableArray(picksContent.querySelectorAll('.editors-pick')));
		setTimeout(function () {
			var titles = [].concat(_toConsumableArray(picksContent.querySelectorAll('.data-viz__title')));
			titles.forEach(function (title) {
				__WEBPACK_IMPORTED_MODULE_0__forbesmedia_multiclamp___default()(title, 2, false);
			});
		});
		setTimeout(function () {
			checkToHidePicks();
		}, 100);
	}

	function getPicksData() {
		fetch('/simple-data/editors-picks/').then(function (response) {
			return Object(__WEBPACK_IMPORTED_MODULE_5__shared_checkStatus__["a" /* default */])(response);
		}).then(function (res) {
			return res.json();
		}).then(function (res) {
			picksData = res;
			insertPicks();
		}).catch(function (error) {
			return console.error(error);
		});
	}

	function onClickPopular() {
		if (!popularOnScreen) {
			popularOnScreen = true;
			popularBtn.classList.add('pop-picks__nav-btn--active');
			picksBtn.classList.remove('pop-picks__nav-btn--active');
			popularContent.classList.add('pop-picks__content--active');
			picksContent.classList.remove('pop-picks__content--active');
			if (!__WEBPACK_IMPORTED_MODULE_1__shared_is_mobile__["isMobile"] && !__WEBPACK_IMPORTED_MODULE_1__shared_is_mobile__["isTablet"]) {
				__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["a" /* dataVizController */].startTimer();
			}
		}
	}

	function onClickPicks() {
		if (popularOnScreen) {
			popularOnScreen = false;
			__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["a" /* dataVizController */].clearTimer();
			popularBtn.classList.remove('pop-picks__nav-btn--active');
			picksBtn.classList.add('pop-picks__nav-btn--active');
			popularContent.classList.remove('pop-picks__content--active');
			picksContent.classList.add('pop-picks__content--active');

			if (!picksData) {
				getPicksData();
			}
		}
	}

	function initializeDataViz() {
		if (__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["a" /* dataVizController */].hasData()) {
			if (__WEBPACK_IMPORTED_MODULE_1__shared_is_mobile__["isMobile"] || __WEBPACK_IMPORTED_MODULE_1__shared_is_mobile__["isTablet"]) {
				__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["a" /* dataVizController */].initializeMobileList();
			} else {
				__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["a" /* dataVizController */].initialize();
			}
		} else {
			// TODO Client side fetch?
			// See https://jira.forbes.com/browse/PROD-2110
			onClickPicks(); // Trigger Editor's Picks
		}
	}

	function setUpEventHandlers() {
		if (!__WEBPACK_IMPORTED_MODULE_1__shared_is_mobile__["isMobile"] && !__WEBPACK_IMPORTED_MODULE_1__shared_is_mobile__["isTablet"]) {
			window.addEventListener('focus', function () {
				if (popularOnScreen) {
					__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["a" /* dataVizController */].startTimer();
				}
			});

			window.addEventListener('blur', function () {
				if (popularOnScreen) {
					__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["a" /* dataVizController */].clearTimer();
				}
			});

			if (__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["b" /* dataVizList */]) {
				__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["b" /* dataVizList */].addEventListener('mouseenter', Object(__WEBPACK_IMPORTED_MODULE_4__shared_throttle__["a" /* default */])(function () {
					return __WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["a" /* dataVizController */].clearTimer();
				}));
				__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["b" /* dataVizList */].addEventListener('mouseleave', Object(__WEBPACK_IMPORTED_MODULE_4__shared_throttle__["a" /* default */])(function () {
					return __WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["a" /* dataVizController */].startTimer();
				}));
			}
		}

		window.addEventListener('resize', Object(__WEBPACK_IMPORTED_MODULE_4__shared_throttle__["a" /* default */])(function () {
			if (popularOnScreen) {
				__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["c" /* dataVizView */].updateListItemHeight();
				__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["c" /* dataVizView */].hideItemsOutOfView();
			} else {
				checkToHidePicks();
			}
		}, 200));

		popularBtn.onclick = onClickPopular;
		picksBtn.onclick = onClickPicks;
	}

	function internationalize() {
		if (__WEBPACK_IMPORTED_MODULE_3__shared_clientConfigService__["v" /* region */] !== 'usa') {
			__WEBPACK_IMPORTED_MODULE_2__DataVizSingleton__["b" /* dataVizList */].classList.add('data-viz__list--international');
		}
	}

	initializeDataViz();
	setUpEventHandlers();
	internationalize();
});

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = template;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function pug_attr(t, e, n, f) {
  return !1 !== e && null != e && (e || "class" !== t && "style" !== t) ? !0 === e ? " " + (f ? t : t + '="' + t + '"') : ("function" == typeof e.toJSON && (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'") : "";
}
function pug_escape(e) {
  var a = "" + e,
      t = pug_match_html.exec(a);if (!t) return e;var r,
      c,
      n,
      s = "";for (r = t.index, c = 0; r < a.length; r++) {
    switch (a.charCodeAt(r)) {case 34:
        n = "&quot;";break;case 38:
        n = "&amp;";break;case 60:
        n = "&lt;";break;case 62:
        n = "&gt;";break;default:
        continue;}c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
  }return c !== r ? s + a.substring(c, r) : s;
}
var pug_has_own_property = Object.prototype.hasOwnProperty;
var pug_match_html = /["&<>]/;
function pug_style(r) {
  if (!r) return "";if ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r))) {
    var t = "";for (var e in r) {
      pug_has_own_property.call(r, e) && (t = t + e + ":" + r[e] + ";");
    }return t;
  }return r + "";
}function template(locals) {
  var pug_html = "",
      pug_mixins = {},
      _pug_interp3;;var locals_for_with = locals || {};(function (picksData) {
    pug_mixins["bylineAuthor"] = _pug_interp3 = function pug_interp(author, rowTitle, rowLetterId, trackingIndex, isCoAuthor) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      if ((author || {}).name) {
        pug_html = pug_html + "<div class=\"byline__author\">";
        if (isCoAuthor) {
          pug_html = pug_html + "<span class=\"byline__by-space\">&nbsp;</span><span class=\"byline__by\">and</span>";
        } else {
          pug_html = pug_html + "<span class=\"byline__by\">By</span>";
        }
        pug_html = pug_html + "<a" + (" class=\"byline__author-name\"" + pug_attr("href", author.url, true, false) + pug_attr("data-ga-track", rowTitle === 'editors picks' ? "Cover Story - Position 0 - " + author.name : "Channel - Block " + rowLetterId + " - " + rowTitle + " - Position " + trackingIndex + " - " + author.name, true, false)) + ">" + pug_escape(null == (_pug_interp3 = author.name) ? "" : _pug_interp3) + "</a>";
        if (author.displayType) {
          pug_html = pug_html + "<span class=\"byline__author-type\">" + pug_escape(null == (_pug_interp3 = author.displayType) ? "" : _pug_interp3) + "</span>";
        }
        pug_html = pug_html + "</div>";
      }
    };
    pug_mixins["byline"] = _pug_interp3 = function _pug_interp(item, rowTitle, rowLetterId) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      if (item.type !== 'video') {
        pug_html = pug_html + "<span class=\"byline\"><div class=\"byline__author-group\">";
        pug_mixins["bylineAuthor"](item.author, rowTitle, rowLetterId, item.trackingIndex || 0, false);
        // iterate (item.coAuthors || [])
        ;(function () {
          var $$obj = item.coAuthors || [];
          if ('number' == typeof $$obj.length) {
            for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
              var coAuthor = $$obj[pug_index0];
              pug_mixins["bylineAuthor"](coAuthor, rowTitle, rowLetterId, item.trackingIndex || 0, true);
            }
          } else {
            var $$l = 0;
            for (var pug_index0 in $$obj) {
              $$l++;
              var coAuthor = $$obj[pug_index0];
              pug_mixins["bylineAuthor"](coAuthor, rowTitle, rowLetterId, item.trackingIndex || 0, true);
            }
          }
        }).call(this);

        pug_html = pug_html + "</div></span>";
      }
    };

    pug_mixins["icon"] = _pug_interp3 = function _pug_interp(iconName) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      switch (iconName) {
        case 'amazon-books':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--amazon-books\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M1 6.1s3.8-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1zM10.5 6.1s3.9-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1z\"/></svg>";
          break;
        case 'arrowLeft':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--arrow-left\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M2.5 10h16v2h-16z\"/><path transform=\"rotate(-45.001 4.5 8.877)\" d=\"M.5 7.9h8v2h-8z\"/><path transform=\"rotate(45.001 4.5 13.124)\" d=\"M.5 12.1h8v2h-8z\"/></svg>";
          break;
        case 'arrowRight':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--arrow-right\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path transform=\"rotate(-180 8.964 11)\" d=\"M1 10h16v2H1z\"/><path transform=\"rotate(134.999 14.965 13.124)\" d=\"M11 12.1h8v2h-8z\"/><path transform=\"rotate(-134.999 14.965 8.877)\" d=\"M11 7.9h8v2h-8z\"/></svg>";
          break;
        case 'arrowUp':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--arrow-up\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><path fill=\"#020202\" d=\"M30 0L5 30h15v30h20V30h15L30 0z\"/></svg>";
          break;
        case 'arrowDown':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--arrow-down\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><path fill=\"#020202\" d=\"M30 60l25-30H40V0H20v30H5l25 30z\"/></svg>";
          break;
        case 'chevronDown':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--chevron-down\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 19.8 19.8\"><path transform=\"rotate(-134.999 7.586 10.187)\" d=\"M2.8 9h9.5v2.4H2.8z\"/><path transform=\"rotate(-45.001 12.615 10.187)\" d=\"M7.9 9h9.5v2.4H7.9z\"/></svg>";
          break;
        case 'chevronLeft':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--chevron-left\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 19.8 19.8\"><path transform=\"rotate(-45.001 10.1 7.672)\" d=\"M5.4 6.5h9.5v2.4H5.4z\"/><path transform=\"rotate(45.001 10.1 12.701)\" d=\"M5.4 11.5h9.5v2.4H5.4z\"/></svg>";
          break;
        case 'chevronRight':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--chevron-right\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 19.8 19.8\"><path transform=\"rotate(134.999 10.1 12.701)\" d=\"M5.4 11.5h9.5v2.4H5.4z\"/><path transform=\"rotate(-134.999 10.1 7.672)\" d=\"M5.4 6.5h9.5v2.4H5.4z\"/></svg>";
          break;
        case 'chevronUp':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--chevron-up\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 19.8 19.8\"><path transform=\"rotate(45.001 12.615 10.187)\" d=\"M7.9 9h9.5v2.4H7.9z\"/><path transform=\"rotate(134.999 7.586 10.187)\" d=\"M2.8 9h9.5v2.4H2.8z\"/></svg>";
          break;
        case 'clock':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--clock\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M11.9 13.1l-2.7-2.7V6.7h1.7v3l2.3 2.3-1.3 1.1zM10 3.3a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4zM10 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z\"/></svg>";
          break;
        case 'close':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--close\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path transform=\"rotate(45.001 10 10)\" d=\"M2 9h16v2H2z\"/><path transform=\"rotate(134.999 10 10)\" d=\"M2 9h16v2H2z\"/></svg>";
          break;
        case 'email':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--email\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path class=\"fs-icon fs-icon--_xF106_\" d=\"M17 15.2H3.2l5.2-4.3.6.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4l.6-.5 5.2 4.4zm.6-9.2v8l-4.8-4 4.8-4zm-15 8V6l4.8 4-4.8 4zm7.8-3.6c-.2.2-.4.2-.6 0L3.6 5.2h13l-6.2 5.2z\"/></svg>";
          break;
        case 'facebook':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--facebook\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><path d=\"M32.9 49H25V30h-3.9v-6.6H25v-3.9c0-5.4 2.2-8.5 8.5-8.5h5.2v6.6h-3.3c-2.5 0-2.6.9-2.6 2.6v3.3h5.9l-.5 6.5H33v19h-.1z\"/></svg>";
          break;
        case 'forbesF':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--forbes-f\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M16.5 7l-.8.2C15 4.9 13.8 3.7 12 3.7H9.5C9.4 5 9.4 7 9.4 9.9h1.7c.9 0 1.6-.7 1.9-2.1h.6V13H13c-.3-1.4-.9-2.1-1.9-2.2H9.4c0 1.6.1 3.1.2 4.4.1.7.2 1.2.4 1.5.2.3.6.5 1.1.6l.8.1v.6H3.6v-.6l.7-.1c.9-.1 1.4-.8 1.5-2.1.3-3.3.3-6.5 0-9.6-.1-1.3-.6-2-1.5-2.1l-.7-.2v-.6h12.8l.1 4.3z\"/></svg>";
          break;
        case 'forbesLogo':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--forbes-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 54\"><path d=\"M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z\"/></svg>";
          break;
        case 'georgia-uaquo':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--georgia-uaquo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path fill=\"#010101\" d=\"M9.9 9.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.6-5.3L2.3 19l-.8-1 6.8-7.2.6-.6c.3-.2.6-.4 1-.4zm0-7.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.5-5.3-7.5 5.3-.8-1 6.8-7.2c.1-.2.4-.3.7-.6.1-.2.5-.3.8-.3z\"/></svg>";
          break;
        case 'hamburger':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--hamburger\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M2 5.5h16v2H2zM2 9.5h16v2H2zM2 13.5h16v2H2z\"/></svg>";
          break;
        case 'info':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--info\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><path fill=\"#010101\" d=\"M28.3 38.4h3.3v-10h-3.3v10zM30 13.3c-9.2 0-16.7 7.5-16.7 16.7S20.8 46.7 30 46.7 46.7 39.2 46.7 30 39.2 13.3 30 13.3zm0 30.1c-7.4 0-13.4-6-13.4-13.4s6-13.4 13.4-13.4 13.4 6 13.4 13.4-6 13.4-13.4 13.4zM28.3 25h3.3v-3.3h-3.3V25z\"/></svg>";
          break;
        case 'instagram':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--instagram\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"3\" stroke-miterlimit=\"10\" d=\"M38.6 46.3H21.4c-4.3 0-7.7-3.5-7.7-7.7V21.4c0-4.3 3.5-7.7 7.7-7.7h17.1c4.3 0 7.7 3.5 7.7 7.7v17.1c.1 4.3-3.4 7.8-7.6 7.8z\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"3\" stroke-miterlimit=\"10\" cx=\"30\" cy=\"30\" r=\"7.4\"/><circle cx=\"38.7\" cy=\"19.3\" r=\"1.8\"/></svg>";
          break;
        case 'linkedin':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--linkedin\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><path d=\"M44.9 33.2v11h-6.4V34c0-2.6-.9-4.3-3.2-4.3-1.8 0-2.8 1.2-3.3 2.3-.2.4-.2 1-.2 1.6v10.7h-6.4s.1-17.4 0-19.2h6.4V27.9v-.1c.8-1.3 2.4-3.2 5.8-3.2 4.1 0 7.3 2.7 7.3 8.6zM18.7 15.8c-2.2 0-3.6 1.4-3.6 3.3 0 1.8 1.4 3.3 3.5 3.3 2.2 0 3.6-1.5 3.6-3.3 0-1.9-1.3-3.3-3.5-3.3zm-3.2 28.4h6.4V25h-6.4v19.2z\"/></svg>";
          break;
        case 'phone':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--phone\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path class=\"fs-icon fs-icon--_xF14E_\" d=\"M2.6 7.6c-.2-.8-.1-1.5.3-2.3S3.7 4 4.4 3.7c.2-.1.4-.1.6.1l3 3c.3.3.2.5 0 .8-.5.6-.8 1-.8 1.3s.2.7.8 1.3c.4.5 1.2 1.2 2.2 2 .6.5 1 .4 1.4-.1.3-.5.5-.7.7-.7s.5.1.9.5l.9.6c.3.2.7.5 1 .7.4.3.7.5.9.6.4.3.4.6.2.9-1.8 2.5-3.9 2.9-6.4 1.2-2.9-2.1-5.1-4.5-6.6-7.1 0-.1-.1-.3-.4-.8l-.2-.2v-.2zm7.2-3.4c1.5.1 2.7.7 3.7 1.7s1.6 2.3 1.7 3.8c0 .3-.1.5-.4.5-.3 0-.5-.1-.5-.4-.1-1.2-.6-2.3-1.5-3.1-.9-.9-1.9-1.4-3.1-1.5-.1 0-.2 0-.3-.1-.1-.2-.2-.3-.2-.4 0-.3.2-.5.6-.5zm-.3-1.8c0-.3.2-.4.5-.4 2.1.1 3.9.8 5.3 2.2s2.2 3.2 2.2 5.3c0 .3-.1.5-.4.5-.1 0-.2 0-.3-.1-.1-.1-.2-.2-.2-.3-.1-1.9-.7-3.5-2-4.7s-2.8-1.9-4.7-2c-.1 0-.2 0-.3-.1-.1-.2-.1-.3-.1-.4z\"/></svg>";
          break;
        case 'play':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--play\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M7 2v16.9l11.1-8.5z\"/></svg>";
          break;
        case 'preview-eye':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--preview-eye\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M10 4.1C5.9 4.1 2.3 6.5.5 10c1.8 3.6 5.4 6 9.5 6s7.7-2.4 9.5-5.9c-1.8-3.6-5.4-6-9.5-6zm4.7 3.2c1.1.7 2.1 1.7 2.8 2.8-.7 1.1-1.7 2.1-2.8 2.8-1.4.9-3 1.4-4.7 1.4-1.7 0-3.3-.5-4.7-1.4-1.1-.7-2.1-1.7-2.8-2.8.8-1.2 1.7-2.1 2.8-2.8.1 0 .1-.1.2-.1-.1.4-.3 1-.3 1.6 0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8c0-.6-.1-1.1-.3-1.6 0 0 .1 0 .2.1zm-5.1 1c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z\"/></svg>";
          break;
        case 'reddit':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--reddit\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><circle cx=\"30\" cy=\"30\" r=\"30\"/><path fill=\"#FFF\" d=\"M50 30c0-2.4-2-4.4-4.4-4.4-1.2 0-2.2.5-3 1.2-3-2.2-7.1-3.6-11.7-3.7l2-9.4 6.5 1.4c.1 1.7 1.4 3 3.1 3 1.7 0 3.1-1.4 3.1-3.1s-1.4-3.1-3.1-3.1c-1.2 0-2.3.7-2.8 1.7l-7.3-1.5c-.2 0-.4 0-.6.1-.2.1-.3.3-.3.5l-2.2 10.5c-4.7.1-8.8 1.5-11.9 3.7-.8-.8-1.9-1.2-3-1.2-2.4 0-4.4 2-4.4 4.4 0 1.8 1.1 3.3 2.6 4-.1.4-.1.9-.1 1.3 0 6.7 7.8 12.2 17.5 12.2s17.5-5.5 17.5-12.2c0-.4 0-.9-.1-1.3 1.5-.8 2.6-2.3 2.6-4.1zm-30 3.1c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7.1-3.1-1.3-3.1-3.1zm17.4 8.3c-2.1 2.1-6.2 2.3-7.4 2.3-1.2 0-5.3-.2-7.4-2.3-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0 1.3 1.3 4.2 1.8 6.3 1.8s4.9-.5 6.3-1.8c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1zm-.5-5.1c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z\"/></svg>";
          break;
        case 'rss':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--rss\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4.2 13.6c-.6 0-1.1.2-1.5.6-.5.5-.7 1-.7 1.6 0 .6.2 1.1.6 1.5.5.5 1 .7 1.6.7.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5s-.2-1.1-.6-1.5c-.4-.6-.9-.8-1.5-.8zm0 0M9.2 10.8c-.9-.9-1.8-1.6-2.9-2.1-1.1-.5-2.3-.8-3.5-.9h-.1c-.2 0-.3.1-.5.2-.1.1-.2.3-.2.5V10c0 .2.1.4.2.5.1.1.3.2.5.2 1.7.2 3.2.9 4.4 2.1C8.3 14 9 15.5 9.2 17.2c0 .2.1.3.2.5.2.2.3.3.5.3h1.5c.2 0 .4-.1.5-.2.1-.2.2-.3.2-.5-.1-1.2-.4-2.4-.9-3.5-.4-1.2-1.1-2.1-2-3zm0 0\"/><path d=\"M16.6 11.5c-.8-1.8-1.9-3.4-3.3-4.8s-3-2.5-4.8-3.3C6.6 2.6 4.7 2.1 2.8 2c-.3 0-.4.1-.6.2-.1.1-.2.3-.2.5v1.6c0 .2.1.4.2.5.1.2.3.3.5.3 1.6.1 3.2.5 4.6 1.2 1.5.7 2.7 1.6 3.8 2.6 1.1 1.1 2 2.4 2.6 3.8.7 1.5 1.1 3 1.1 4.6 0 .2.1.3.2.5.1.1.3.2.5.2h1.6c.2 0 .4-.1.5-.2.2-.2.2-.3.2-.5.1-2-.4-3.9-1.2-5.8zm0 0\"/></svg>";
          break;
        case 'star':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--star\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\"><path d=\"M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z\"></path><path fill=\"none\" d=\"M0 0h18v18H0z\"></path></svg>";
          break;
        case 'search':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--search\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"2\" cx=\"8.5\" cy=\"9\" r=\"6\"/><path transform=\"rotate(45.001 14.922 15.421)\" d=\"M12 14.4h5.9v2H12z\"/></svg>";
          break;
        case 'snapchat':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--snapchat\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><path d=\"M47.7 38.3c-.2-.2-.4-.4-.7-.4-2.3-.4-3.9-1.7-5-3s-1.7-2.5-1.7-2.6v-.1c-.1-.2-.3-.5-.3-.7v-.4c.2-.6.3-.8 1.3-1.1 0 0 .1 0 .3-.1.1 0 .2-.1.3-.1.7-.3 1.4-.6 1.9-1.1.2-.2.5-.6.5-1-.1-.4-.2-.8-.6-1.1-.6-.4-1.6-.2-2.2 0-.4.1-1.2.5-1.5.1v-.5c.1-1.9.3-3.8 0-5.6-.1-.6-.2-1.1-.5-1.6-.9-2.1-2.3-3.6-3.9-4.5-1.4-.8-3-1.2-4.6-1.3-1.6-.1-3.3.1-4.9.6-.5.2-1 .4-1.4.7-1.7.9-3 2.4-3.9 4.5-.2.5-.4 1.1-.5 1.6-.3 1.9-.1 3.8 0 5.6v.5c-.3.3-1.2 0-1.5-.1-.7-.2-1.6-.4-2.2 0-.4.3-.5.6-.6 1.1-.1.3.2.7.5 1 .5.5 1.2.8 1.9 1.1.1 0 .2.1.3.1.2.1.2.1.3.1 1 .3 1.1.6 1.3 1.1 0 .1.1.2 0 .4 0 .2-.2.4-.3.7 0 .1-.6 1.3-1.7 2.6s-2.8 2.7-5 3c-.3 0-.5.2-.7.4-.2.2-.3.5-.2.8v.2c0 .1 0 .1.1.2.2.5.8.9 1.6 1.3.8.3 1.8.6 3.1.8 0 .1.1.4.1.6 0 .1.1.3.1.4 0 .1.1.3.1.4.1.2.2.5.4.7.2.1.4.2.8.2h.4c.1 0 .3 0 .4-.1.2 0 .5-.1.8-.1.3 0 .6-.1 1-.1h.6c.2 0 .4 0 .6.1.8.1 1.5.6 2.4 1.2 1.9 1.3 3.5 2 5.2 2 1.7 0 3.4-.7 5.2-2 .8-.6 1.6-1.1 2.4-1.2.2 0 .4-.1.6-.1h.6c.4 0 .7 0 1 .1.3 0 .6.1.8.1.2 0 .3.1.4.1h.4c.3 0 .6-.1.8-.2.3-.2.4-.4.4-.7 0-.2.1-.3.1-.4 0-.1.1-.3.1-.4 0-.2.1-.4.1-.6 1.3-.2 2.3-.5 3.1-.8.9-.4 1.4-.8 1.6-1.3 0-.1.1-.2.1-.2V39c.2-.2.1-.5-.1-.7z\"/></svg>";
          break;
        case 'twitter':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--twitter\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><path d=\"M22.2 38.9c-3.4-.3-6.1-1.7-7.5-5.1h3.6c-3.9-1.4-5.6-4.3-5.9-8.4 1.2.6 2.3.7 3.5.7-2.1-1.6-3.6-3.4-3.7-6.1-.1-1.5.5-2.8 1.3-4 4.4 5 9.7 8.3 16.5 8.9v-2.7c.1-1.9.6-3.6 1.9-5.1 2.5-2.8 6.9-3.1 9.8-.7.2.2.5.4.7.6.2.2.4.2.7.2 1.1-.3 2-.9 3-1.4.5-.3 1.1-.6 1.7-1-.4 1.1-.9 2-1.5 2.8-.6.8-1.3 1.6-2.2 2.2 1.6-.2 3.2-.6 4.8-1.1-.3.4-.6.8-.9 1.1l-2.7 2.4c-.1.1-.2.3-.2.4.1 3.3-.6 6.5-1.9 9.6-1.9 4.2-4.7 7.5-8.6 9.9-2.5 1.5-5.2 2.4-8.1 2.9-5.5.8-10.5-.5-15.1-3.3-.1 0-.1-.1-.2-.1h.2c1.1.5 2.2.4 3.3.3 2.3-.2 4.5-.9 6.6-2.1l.9-.6v-.3z\"/></svg>";
          break;
        case 'website':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--website\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path class=\"fs-icon fs-icon--_xF10E_\" d=\"M14.7 7.4l2.8 2.6v.4h-1.9V17h-3.7v-4.2H8.1V17H4.4v-6.6H2.5V10L10 3l2.8 2.6v-.9h1.9z\"/></svg>";
          break;
        case 'youtube':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--youtube\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M8.2 12.5V7.7l4.6 2.4-4.6 2.4zm9.5-7.3c-.7-.7-1.4-.7-1.7-.7-2.4-.2-6-.2-6-.2s-3.6 0-6 .2c-.3 0-1.1 0-1.7.7-.5.5-.6 1.7-.6 1.7s-.2 1.4-.2 2.8V11c0 1.4.2 2.8.2 2.8s.2 1.2.7 1.7c.6.6 1.4.5 1.8.6 1.4.1 5.8.2 5.8.2s3.6 0 6-.2c.3 0 1.1 0 1.7-.7.5-.5.7-1.7.7-1.7s.2-1.4.2-2.8V9.7c0-1.4-.2-2.8-.2-2.8s-.2-1.2-.7-1.7z\"/></svg>";
          break;
        case 'sharrow':
          pug_html = pug_html + "<svg class=\"fs-icon fs-icon--share\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><path fill=\"#010101\" d=\"M34 19.6V4.9L59.2 28 34 51.2V36.5C17.3 32.9 1.8 38.5.8 55.4-1 40.8 3.9 31.1 11.3 25.5c6.3-4.8 15.2-6.6 22.7-5.9z\"/></svg>";
          break;
      }
    };
    pug_mixins["paidContentLabel"] = _pug_interp3 = function _pug_interp(pick) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_html = pug_html + "<span class=\"data-viz__paid-content-name\">" + pug_escape(null == (_pug_interp3 = pick.paidContentData.brandName) ? "" : _pug_interp3) + "</span><span" + (" class=\"data-viz__paid-content-logo\"" + pug_attr("style", pug_style({ 'color': pick.paidContentData.primaryColor }), true, false)) + ">" + pug_escape(null == (_pug_interp3 = " " + pick.paidContentData.label) ? "" : _pug_interp3) + "</span>";
    };
    pug_mixins["pickItem"] = _pug_interp3 = function _pug_interp2(pick) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_html = pug_html + "<div class=\"editors-pick\"><div class=\"data-viz__timestamp\">" + pug_escape(null == (_pug_interp3 = pick.timestamp) ? "" : _pug_interp3) + "</div>";
      if (pick.paidContentData) {
        pug_html = pug_html + "<div class=\"data-viz__paid-content-container\">";
        pug_mixins["paidContentLabel"](pick);
        pug_html = pug_html + "</div>";
      }
      pug_html = pug_html + "<a" + (" class=\"data-viz__title\"" + pug_attr("href", pick.uri, true, false) + pug_attr("title", pick.title, true, false)) + ">" + pug_escape(null == (_pug_interp3 = pick.title) ? "" : _pug_interp3) + "</a>";
      pug_mixins["byline"](pick, 'test', 'test');
      pug_html = pug_html + "</div>";
    };
    if (picksData) {
      pug_html = pug_html + "<div class=\"editors-picks\">";
      // iterate picksData
      ;(function () {
        var $$obj = picksData;
        if ('number' == typeof $$obj.length) {
          for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
            var pick = $$obj[pug_index1];
            pug_mixins["pickItem"](pick);
          }
        } else {
          var $$l = 0;
          for (var pug_index1 in $$obj) {
            $$l++;
            var pick = $$obj[pug_index1];
            pug_mixins["pickItem"](pick);
          }
        }
      }).call(this);

      pug_html = pug_html + "<a class=\"editors-picks__see-all\" href=\"https://www.forbes.com/editors-picks/\"><span>See All</span>";
      pug_mixins["icon"]('arrowRight');
      pug_html = pug_html + "</a></div>";
    }
  }).call(this, "picksData" in locals_for_with ? locals_for_with.picksData : typeof picksData !== "undefined" ? picksData : undefined);;return pug_html;
}

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

document.addEventListener('DOMContentLoaded', function () {
	var bvLabels = [].concat(_toConsumableArray(document.querySelectorAll('.brand-voice-label')));
	bvLabels.forEach(function (label) {
		label.addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
		});
	});
});

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	var editionDropdown = document.querySelector('.edition-dropdown');
	var editionDropdownButton = document.querySelector('.edition-dropdown__button');

	if (editionDropdownButton) {
		editionDropdownButton.addEventListener('click', function () {
			editionDropdown.classList.toggle('edition-dropdown--open');
		});
	}
});

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_icons__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__forbes_fbs_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_throttle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_clientConfigService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_is_mobile__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_is_mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__shared_is_mobile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_adInsertion__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dist_templates_homepageChannelContent__ = __webpack_require__(306);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }







// eslint-disable-next-line import/no-unresolved, import/extensions


document.addEventListener('DOMContentLoaded', function () {
	var lazyLoadData = __WEBPACK_IMPORTED_MODULE_2__shared_clientConfigService__["y" /* serverData */].lazyLoadData;


	var checkOffset = function checkOffset(el) {
		return el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop <= window.innerHeight + (window.pageYOffset - 200);
	};

	var lazyContent = [].concat(_toConsumableArray(document.querySelectorAll('.channel--normal')));
	var scrollHandler = void 0;

	/**
  * Add event listener to 'Show More' button in channel row to show text cards on mobile
  * @param {any} row The channel row with the hidden text cards
  */
	function handleShowMore(row) {
		var showMoreButton = row.querySelector('.channel__show-more-btn');
		if (showMoreButton) {
			showMoreButton.addEventListener('click', function () {
				showMoreButton.parentNode.removeChild(showMoreButton);
				var cardsToShow = [].concat(_toConsumableArray(row.querySelectorAll('.card--show-more')));
				cardsToShow.forEach(function (card) {
					card.classList.remove('card--show-more');
				});
			});
		}
	}

	/**
  * Handles scroll events by checking offset of rows and lazy loads when in view
  */
	function handler() {
		for (var i = 0; i < lazyContent.length; i++) {
			var item = lazyContent[i];
			if (checkOffset(item)) {
				(function () {
					var index = (item.getAttribute('id') || '').split('-')[1] || '';
					var lazyIndex = item.dataset.lazyIndex;

					var data = {
						row: lazyLoadData[lazyIndex || 0] || {},
						index: index,
						svgIcons: __WEBPACK_IMPORTED_MODULE_0__forbes_fbs_icons__
					};
					var wrapper = document.createElement('div');
					wrapper.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_5__dist_templates_homepageChannelContent__["a" /* template */])(data);
					item.appendChild(wrapper);
					Object(__WEBPACK_IMPORTED_MODULE_4__shared_adInsertion__["b" /* insertAd */])(__WEBPACK_IMPORTED_MODULE_3__shared_is_mobile__["isMobile"] ? 'ntv-mobchannel' : 'ntv-deskchannel', wrapper);
					handleShowMore(wrapper);
					setTimeout(function () {
						wrapper.classList.add('channel__content--lazy-loaded');
						var channelResponseEvent = new CustomEvent('fbs-channel-response', {
							detail: wrapper
						});
						document.dispatchEvent(channelResponseEvent);
					});
					lazyContent.splice(i, 1);
					i--;
				})();
			} else {
				break;
			}
		}
		if (lazyContent.length === 0) {
			window.removeEventListener('scroll', scrollHandler);
		}
	}

	scrollHandler = Object(__WEBPACK_IMPORTED_MODULE_1__shared_throttle__["a" /* default */])(handler, 200);
	window.addEventListener('scroll', scrollHandler);
});

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = template;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function pug_attr(t, e, n, f) {
  return !1 !== e && null != e && (e || "class" !== t && "style" !== t) ? !0 === e ? " " + (f ? t : t + '="' + t + '"') : ("function" == typeof e.toJSON && (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'") : "";
}
function pug_classes(s, r) {
  return Array.isArray(s) ? pug_classes_array(s, r) : s && "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) ? pug_classes_object(s) : s || "";
}
function pug_classes_array(r, a) {
  for (var s, e = "", u = "", c = Array.isArray(a), g = 0; g < r.length; g++) {
    (s = pug_classes(r[g])) && (c && a[g] && (s = pug_escape(s)), e = e + u + s, u = " ");
  }return e;
}
function pug_classes_object(r) {
  var a = "",
      n = "";for (var o in r) {
    o && r[o] && pug_has_own_property.call(r, o) && (a = a + n + o, n = " ");
  }return a;
}
function pug_escape(e) {
  var a = "" + e,
      t = pug_match_html.exec(a);if (!t) return e;var r,
      c,
      n,
      s = "";for (r = t.index, c = 0; r < a.length; r++) {
    switch (a.charCodeAt(r)) {case 34:
        n = "&quot;";break;case 38:
        n = "&amp;";break;case 60:
        n = "&lt;";break;case 62:
        n = "&gt;";break;default:
        continue;}c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
  }return c !== r ? s + a.substring(c, r) : s;
}
var pug_has_own_property = Object.prototype.hasOwnProperty;
var pug_match_html = /["&<>]/;
function pug_style(r) {
  if (!r) return "";if ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r))) {
    var t = "";for (var e in r) {
      pug_has_own_property.call(r, e) && (t = t + e + ":" + r[e] + ";");
    }return t;
  }return r + "";
}function template(locals) {
  var pug_html = "",
      pug_mixins = {},
      _pug_interp12;;var locals_for_with = locals || {};(function (row, rowLetterId, rowTitle, showDescription, svgIcons) {
    pug_mixins["iconPreview"] = _pug_interp12 = function pug_interp(item) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      if (item.type === 'video') {
        pug_html = pug_html + "<div class=\"card__icon card__icon--preview\">" + (null == (_pug_interp12 = svgIcons.play) ? "" : _pug_interp12) + "</div>";
      }
    };

    pug_mixins["previewLarge"] = _pug_interp12 = function _pug_interp(item, rowTitle, rowLetterId) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_html = pug_html + "<a" + (" class=\"preview ratio16x9\"" + pug_attr("href", item.url, true, false) + pug_attr("aria-label", item.title, true, false) + pug_attr("data-ga-track", rowTitle === 'editors picks' ? "Cover Story - " + item.type + " - Position 0 - " + item.title : "Channel - Block " + rowLetterId + " - " + rowTitle + " - " + item.type + " - Position " + item.trackingIndex + " - " + item.title, true, false)) + "><div class=\"preview__overflow-wrapper\">";
      if (rowTitle === 'editors picks') {
        pug_html = pug_html + "<div" + (" class=\"preview__image preview__image--non-progressive\"" + pug_attr("style", pug_style("background-image: url(" + item.image + ")"), true, false)) + "></div>";
      } else {
        pug_html = pug_html + "<progressive-image" + (" class=\"preview__image\"" + pug_attr("background-image", item.image, true, false)) + "></progressive-image>";
      }
      pug_mixins["iconPreview"](item, rowTitle, rowLetterId);
      pug_html = pug_html + "</div>";
      if (item.eyebrows) {
        pug_html = pug_html + "<h3" + pug_attr("class", pug_classes(["preview__eyebrows", rowTitle !== 'editors picks' ? 'preview__eyebrows--mobile-left' : ''], [false, true]), false, false) + "><span" + pug_attr("class", pug_classes([item.color ? "preview__eyebrows--color-" + item.color : ''], [true]), false, false) + ">" + pug_escape(null == (_pug_interp12 = item.eyebrows) ? "" : _pug_interp12) + "</span></h3>";
      }
      pug_mixins["photoCreditLarge"](item);
      pug_html = pug_html + "<div" + pug_attr("class", pug_classes(["card--large__color-bar", item.color ? "card__color--" + item.color : ''], [false, true]), false, false) + "></div></a>";
    };
    pug_mixins["previewSmall"] = _pug_interp12 = function _pug_interp2(item, rowTitle, rowLetterId, isList) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_html = pug_html + "<a" + (" class=\"preview ratio16x9\"" + pug_attr("href", item.url, true, false) + pug_attr("aria-label", item.title, true, false) + pug_attr("data-ga-track", isList ? "Homepage Forbes List - " + item.title : "Channel - Block " + rowLetterId + " - " + rowTitle + " - " + item.type + " - Position " + item.trackingIndex + " - " + item.title, true, false)) + "><progressive-image" + (" class=\"preview__image\"" + pug_attr("background-image", item.image, true, false)) + "></progressive-image>";
      pug_mixins["iconPreview"](item, rowTitle, rowLetterId);
      pug_html = pug_html + "</a>";
    };
    pug_mixins["photoCreditLarge"] = _pug_interp12 = function _pug_interp2(item) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      if (item.photoCredit) {
        pug_html = pug_html + "<div class=\"card__photocredit--large\">" + pug_escape(null == (_pug_interp12 = item.photoCredit) ? "" : _pug_interp12) + "</div>";
      }
    };
    pug_mixins["photoCreditSmall"] = _pug_interp12 = function _pug_interp3(item) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      if (item.photoCredit) {
        pug_html = pug_html + "<div class=\"card__photocredit--small\">" + pug_escape(null == (_pug_interp12 = item.photoCredit) ? "" : _pug_interp12) + "</div>";
      }
    };
    pug_mixins["previewText"] = _pug_interp12 = function _pug_interp4(item) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_html = pug_html + "<div class=\"preview\"><a" + (" class=\"preview__link ratio1x2\"" + pug_attr("href", item.url, true, false) + pug_attr("aria-label", item.title, true, false) + pug_attr("data-ga-track", "Channel - Block " + rowLetterId + " - " + rowTitle + " - " + item.type + " - Position " + item.trackingIndex + " - " + item.title, true, false)) + "><progressive-image" + (" class=\"preview__image\"" + pug_attr("background-image", item.image, true, false)) + "></progressive-image>";
      pug_mixins["iconPreview"](item, rowTitle, rowLetterId);
      pug_html = pug_html + "</a></div>";
    };
    pug_mixins["bylineAuthor"] = _pug_interp12 = function _pug_interp4(author, rowTitle, rowLetterId, trackingIndex, isCoAuthor) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      if ((author || {}).name) {
        pug_html = pug_html + "<div class=\"byline__author\">";
        if (isCoAuthor) {
          pug_html = pug_html + "<span class=\"byline__by-space\">&nbsp;</span><span class=\"byline__by\">and</span>";
        } else {
          pug_html = pug_html + "<span class=\"byline__by\">By</span>";
        }
        pug_html = pug_html + "<a" + (" class=\"byline__author-name\"" + pug_attr("href", author.url, true, false) + pug_attr("data-ga-track", rowTitle === 'editors picks' ? "Cover Story - Position 0 - " + author.name : "Channel - Block " + rowLetterId + " - " + rowTitle + " - Position " + trackingIndex + " - " + author.name, true, false)) + ">" + pug_escape(null == (_pug_interp12 = author.name) ? "" : _pug_interp12) + "</a>";
        if (author.displayType) {
          pug_html = pug_html + "<span class=\"byline__author-type\">" + pug_escape(null == (_pug_interp12 = author.displayType) ? "" : _pug_interp12) + "</span>";
        }
        pug_html = pug_html + "</div>";
      }
    };
    pug_mixins["byline"] = _pug_interp12 = function _pug_interp5(item, rowTitle, rowLetterId) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      if (item.type !== 'video') {
        pug_html = pug_html + "<span class=\"byline\"><div class=\"byline__author-group\">";
        pug_mixins["bylineAuthor"](item.author, rowTitle, rowLetterId, item.trackingIndex || 0, false);
        // iterate (item.coAuthors || [])
        ;(function () {
          var $$obj = item.coAuthors || [];
          if ('number' == typeof $$obj.length) {
            for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
              var coAuthor = $$obj[pug_index0];
              pug_mixins["bylineAuthor"](coAuthor, rowTitle, rowLetterId, item.trackingIndex || 0, true);
            }
          } else {
            var $$l = 0;
            for (var pug_index0 in $$obj) {
              $$l++;
              var coAuthor = $$obj[pug_index0];
              pug_mixins["bylineAuthor"](coAuthor, rowTitle, rowLetterId, item.trackingIndex || 0, true);
            }
          }
        }).call(this);

        pug_html = pug_html + "</div></span>";
      }
    };
    pug_mixins["bylineStatsLarge"] = _pug_interp12 = function _pug_interp5(item, rowTitle, rowLetterId) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_html = pug_html + "<p class=\"byline-stats byline-stats--large\">";
      pug_mixins["byline"](item, rowTitle, rowLetterId);
      pug_html = pug_html + "</p>";
    };
    pug_mixins["bylineStatsSmall"] = _pug_interp12 = function _pug_interp5(item, rowTitle, rowLetterId) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_html = pug_html + "<p class=\"byline-stats byline-stats--small\">";
      pug_mixins["byline"](item, rowTitle, rowLetterId);
      pug_html = pug_html + "</p>";
    };
    pug_mixins["iconPreview"] = _pug_interp12 = function _pug_interp5(item) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      if (item.type === 'video') {
        pug_html = pug_html + "<div class=\"card__icon card__icon--preview\">" + (null == (_pug_interp12 = svgIcons.play) ? "" : _pug_interp12) + "</div>";
      }
    };

    pug_mixins["brandvoice"] = _pug_interp12 = function _pug_interp6(item) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_html = pug_html + "<span class=\"brand\">" + pug_escape(null == (_pug_interp12 = item.brandVoiceBrand) ? "" : _pug_interp12) + "</span><span class=\"brand-voice\">" + pug_escape(null == (_pug_interp12 = ' BRANDVOICE') ? "" : _pug_interp12) + "</span>";
    };
    pug_mixins["paidContentLabel"] = _pug_interp12 = function _pug_interp7(item) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_html = pug_html + "<span class=\"paid-content__brand-name\">" + pug_escape(null == (_pug_interp12 = item.paidContentData.brandName) ? "" : _pug_interp12) + "</span><span" + (" class=\"paid-content__type\"" + pug_attr("style", pug_style({ 'color': item.paidContentData.primaryColor }), true, false)) + ">" + pug_escape(null == (_pug_interp12 = " " + item.paidContentData.label) ? "" : _pug_interp12) + "</span>";
    };
    pug_mixins["card"] = _pug_interp12 = function _pug_interp8(item, type, showDescription, rowTitle, rowLetterId, csfBlock, index) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_html = pug_html + "<div" + (pug_attr("class", pug_classes(["card", item.cardClass, { 'csf-block': csfBlock }, { 'channel__content__lazy-item': type === 'small' }, { 'channel__content__lazy-item-delay-400': type === 'small' && index !== 0 }], [false, true, true, true, true]), false, false) + pug_attr("data-video-id", item.videoId, true, false) + pug_attr("data-video-title", item.videoTitle, true, false)) + ">";
      switch (type) {
        case 'large':
          pug_mixins["cardLarge"](item, showDescription, rowTitle, rowLetterId);
          break;
        case 'small':
          pug_mixins["cardSmall"](item, rowTitle, rowLetterId);
          break;
        case 'text':
          pug_mixins["cardText"](item, rowTitle, rowLetterId);
          break;
        case 'smallForbesLists':
          pug_mixins["cardSmallForbesLists"](item);
          break;
      }
      pug_html = pug_html + "</div>";
    };
    pug_mixins["cardLarge"] = _pug_interp12 = function _pug_interp8(item) {
      var showDescription = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var rowTitle = arguments[2];
      var rowLetterId = arguments[3];

      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_mixins["previewLarge"](item, rowTitle, rowLetterId);
      if (item.brandVoiceBrand) {
        pug_html = pug_html + "<div class=\"card--large__brand-voice-container brand-voice-label\">";
        pug_mixins["brandvoice"](item);
        pug_html = pug_html + "</div>";
      }
      if (item.paidContentData) {
        pug_html = pug_html + "<div class=\"card--large__paid-content-container card--paid-content-label\">";
        pug_mixins["paidContentLabel"](item);
        pug_html = pug_html + "</div>";
      } else if (item.isInsights) {
        pug_html = pug_html + "<div class=\"card--large__insights card__insights\">" + pug_escape(null == (_pug_interp12 = 'FORBES INSIGHTS') ? "" : _pug_interp12) + "</div>";
      }
      pug_html = pug_html + "<div class=\"card--large__title\"><a" + (pug_attr("class", pug_classes(["headlink", "h1--dense", item.color ? "card__color--" + item.color : ''], [false, false, true]), false, false) + pug_attr("href", item.url, true, false) + pug_attr("data-ga-track", rowTitle === 'editors picks' ? "Cover Story - " + item.type + " - Position 0 - " + item.title : "Channel - Block " + rowLetterId + " - " + rowTitle + " - " + item.type + " - Position " + item.trackingIndex + " - " + item.title, true, false)) + ">" + pug_escape(null == (_pug_interp12 = item.title) ? "" : _pug_interp12) + "</a>";
      if (item.video) {
        pug_html = pug_html + "<span class=\"byline__duration\">| " + pug_escape(null == (_pug_interp12 = item.video.duration || '') ? "" : _pug_interp12) + "</span>";
      }
      pug_html = pug_html + "</div>";
      if (item.author) {
        if ((item.paidContentData || {}).showByline || !item.paidContentData) {
          pug_mixins["bylineStatsLarge"](item, rowTitle, rowLetterId);
        }
      }
      if (showDescription) {
        pug_html = pug_html + "<h2 class=\"card__description\">" + pug_escape(null == (_pug_interp12 = item.description) ? "" : _pug_interp12) + "</h2>";
      }
      pug_mixins["photoCreditLarge"](item);
    };
    pug_mixins["cardSmall"] = _pug_interp12 = function _pug_interp9(item, rowTitle, rowLetterId) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      if (!item.isMobile) {
        pug_mixins["previewSmall"](item, rowTitle, rowLetterId, false);
      }
      pug_mixins["photoCreditSmall"](item);
      if (item.brandVoiceBrand) {
        pug_html = pug_html + "<div class=\"card--small__brand-voice-container brand-voice-label\">";
        pug_mixins["brandvoice"](item);
        pug_html = pug_html + "</div>";
      }
      if (item.paidContentData) {
        pug_html = pug_html + "<div class=\"card--small__paid-content-container card--paid-content-label\">";
        pug_mixins["paidContentLabel"](item);
        pug_html = pug_html + "</div>";
      } else if (item.isInsights) {
        pug_html = pug_html + "<div class=\"card--small__insights card__insights\">" + pug_escape(null == (_pug_interp12 = 'FORBES INSIGHTS') ? "" : _pug_interp12) + "</div>";
      }
      pug_html = pug_html + "<a" + (" class=\"headlink\"" + pug_attr("href", item.url, true, false) + pug_attr("data-ga-track", "Channel - Block " + rowLetterId + " - " + rowTitle + " - " + item.type + " - Position " + item.trackingIndex + " - " + item.title, true, false)) + "><h3 class=\"h3--dense\">";
      if (item.video) {
        pug_html = pug_html + "<span class=\"card__watch-video\">" + pug_escape(null == (_pug_interp12 = 'Watch: ') ? "" : _pug_interp12) + "</span>";
      }
      pug_html = pug_html + ("<span>" + pug_escape(null == (_pug_interp12 = item.title) ? "" : _pug_interp12));
      if (item.video) {
        pug_html = pug_html + "<span class=\"byline__duration\">| " + pug_escape(null == (_pug_interp12 = item.video.duration || '') ? "" : _pug_interp12) + "</span>";
      }
      pug_html = pug_html + "</span></h3></a>";
      if (item.author) {
        if ((item.paidContentData || {}).showByline || !item.paidContentData) {
          pug_mixins["bylineStatsSmall"](item, rowTitle, rowLetterId);
        }
      }
    };
    pug_mixins["cardText"] = _pug_interp12 = function _pug_interp10(item, rowTitle, rowLetterId) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      if (item.image && !item.isMobile) {
        pug_mixins["previewText"](item);
      }
      pug_html = pug_html + "<div class=\"card__text\">";
      if (item.brandVoiceBrand) {
        pug_html = pug_html + "<div class=\"card--text__brand-voice-container brand-voice-label\">";
        pug_mixins["brandvoice"](item);
        pug_html = pug_html + "</div>";
      }
      if (item.paidContentData) {
        pug_html = pug_html + "<div class=\"card--text__paid-content-container card--paid-content-label\">";
        pug_mixins["paidContentLabel"](item);
        pug_html = pug_html + "</div>";
      } else if (item.isInsights) {
        pug_html = pug_html + "<div class=\"card--text__insights card__insights\">" + pug_escape(null == (_pug_interp12 = 'FORBES INSIGHTS') ? "" : _pug_interp12) + "</div>";
      }
      pug_html = pug_html + "<a" + (" class=\"headlink h4--dense\"" + pug_attr("href", item.url, true, false) + pug_attr("data-ga-track", "Channel - Block " + rowLetterId + " - " + rowTitle + " - " + item.type + " - Position " + item.trackingIndex + " - " + item.title, true, false)) + ">";
      if (item.video) {
        pug_html = pug_html + "<span class=\"card__watch-video\">" + pug_escape(null == (_pug_interp12 = 'Watch: ') ? "" : _pug_interp12) + "</span>";
      }
      pug_html = pug_html + "<span>" + pug_escape(null == (_pug_interp12 = item.title) ? "" : _pug_interp12) + "</span></a>";
      if (item.video) {
        pug_html = pug_html + "<span class=\"byline__duration\">| " + pug_escape(null == (_pug_interp12 = item.video.duration || '') ? "" : _pug_interp12) + "</span>";
      }
      pug_mixins["byline"](item, rowTitle, rowLetterId);
      pug_html = pug_html + "</div>";
    };
    pug_mixins["cardSmallForbesLists"] = _pug_interp12 = function _pug_interp11(item) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_mixins["previewSmall"](item, null, null, true);
      pug_html = pug_html + "<h2 class=\"card__fl-logo\">FORBES&nbsp;<span>" + pug_escape(null == (_pug_interp12 = item.eyebrows) ? "" : _pug_interp12) + "</span></h2><a" + (" class=\"headlink\"" + pug_attr("href", item.url, true, false) + pug_attr("data-ga-track", "Homepage Forbes List - " + item.title, true, false)) + "><h3 class=\"h3--dense\">" + pug_escape(null == (_pug_interp12 = item.title) ? "" : _pug_interp12) + "</h3></a><p class=\"body--dense list--description\">" + pug_escape(null == (_pug_interp12 = item.description) ? "" : _pug_interp12) + "</p><a" + (" class=\"card__fl-link\"" + pug_attr("href", item.url, true, false) + pug_attr("data-ga-track", "Homepage Forbes List - View List - " + item.title, true, false)) + "><span>" + pug_escape(null == (_pug_interp12 = item.linkLabel) ? "" : _pug_interp12) + "</span><span>" + (null == (_pug_interp12 = svgIcons.arrowRight) ? "" : _pug_interp12) + "</span></a>";
    };
    pug_mixins["ntvLoadingPlaceholder"] = _pug_interp12 = function _pug_interp12(isChannel) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_html = pug_html + "<div class=\"ntv-loading\"><div" + pug_attr("class", pug_classes(["ntv-loading__image", isChannel ? 'ratio1x2' : 'ratio16x9'], [false, true]), false, false) + "></div><div class=\"ntv-loading__text\"><div class=\"ntv-loading__small-text\"></div>";
      var i = 0;
      var numLines = isChannel ? 3 : 4;
      pug_html = pug_html + "<ul>";
      while (++i <= numLines) {
        pug_html = pug_html + "<li" + pug_attr("class", pug_classes(["ntv-loading__large-text ntv-loading__large-text--" + i], [true]), false, false) + "></li>";
      }
      pug_html = pug_html + "</ul></div></div>";
    };
    pug_mixins["channelSidebar"] = _pug_interp12 = function _pug_interp12(row, index) {
      var block = this && this.block,
          attributes = this && this.attributes || {};
      pug_html = pug_html + "<div class=\"channel__sidebar\">";
      // iterate row.blocks[0].items.smallCards
      ;(function () {
        var $$obj = row.blocks[0].items.smallCards;
        if ('number' == typeof $$obj.length) {
          for (var position = 0, $$l = $$obj.length; position < $$l; position++) {
            var smallCard = $$obj[position];
            pug_mixins["card"](smallCard, 'small', showDescription = false, rowTitle = row.title, rowLetterId = row.rowIdLetter, null, position);
          }
        } else {
          var $$l = 0;
          for (var position in $$obj) {
            $$l++;
            var smallCard = $$obj[position];
            pug_mixins["card"](smallCard, 'small', showDescription = false, rowTitle = row.title, rowLetterId = row.rowIdLetter, null, position);
          }
        }
      }).call(this);

      pug_html = pug_html + "</div>";
    };
    if ((row.blocks || []).length > 0) {
      pug_html = pug_html + "<div class=\"channel__content\"><div class=\"channel__content__lazy-item\">";
      pug_mixins["card"](row.blocks[0].items.largeCard, 'large', false, row.title, row.rowIdLetter);
      pug_html = pug_html + "</div>";
      pug_mixins["channelSidebar"](row);
      pug_html = pug_html + "<div class=\"channel__divider\"></div><div class=\"channel__columns channel__content__lazy-item channel__content__lazy-item-delay-600\"><div class=\"channel__column\"><div" + (" class=\"fbs-ad--ntv-mobchannel-wrapper fbs-ad--progressive\"" + pug_attr("data-custom-targeting", "ntv-channel:" + row.title.replace(/(-? ?RD|(New))/g, '').toLowerCase().trim(), true, false)) + ">";
      pug_mixins["ntvLoadingPlaceholder"](true);
      pug_html = pug_html + "</div>";
      // iterate row.blocks[0].items.leftColumn.listCards
      ;(function () {
        var $$obj = row.blocks[0].items.leftColumn.listCards;
        if ('number' == typeof $$obj.length) {
          for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
            var listCard = $$obj[pug_index2];
            pug_mixins["card"](listCard, 'text', showDescription = false, rowTitle = row.title, rowLetterId = row.rowIdLetter);
          }
        } else {
          var $$l = 0;
          for (var pug_index2 in $$obj) {
            $$l++;
            var listCard = $$obj[pug_index2];
            pug_mixins["card"](listCard, 'text', showDescription = false, rowTitle = row.title, rowLetterId = row.rowIdLetter);
          }
        }
      }).call(this);

      pug_html = pug_html + "</div><div class=\"channel__column\">";
      // iterate row.blocks[0].items.rightColumn.listCards
      ;(function () {
        var $$obj = row.blocks[0].items.rightColumn.listCards;
        if ('number' == typeof $$obj.length) {
          for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
            var listCard = $$obj[pug_index3];
            pug_mixins["card"](listCard, 'text', showDescription = false, rowTitle = row.title, rowLetterId = row.rowIdLetter);
          }
        } else {
          var $$l = 0;
          for (var pug_index3 in $$obj) {
            $$l++;
            var listCard = $$obj[pug_index3];
            pug_mixins["card"](listCard, 'text', showDescription = false, rowTitle = row.title, rowLetterId = row.rowIdLetter);
          }
        }
      }).call(this);

      pug_html = pug_html + "<div" + (" class=\"fbs-ad--ntv-deskchannel-wrapper fbs-ad--progressive\"" + " tabindex=\"-1\" aria-hidden=\"true\"" + pug_attr("data-custom-targeting", "ntv-channel:" + row.title.replace(/(-? ?RD|(New))/g, '').toLowerCase().trim(), true, false)) + ">";
      pug_mixins["ntvLoadingPlaceholder"](true);
      pug_html = pug_html + "</div></div><button class=\"channel__show-more-btn\"><span>Show More</span><span>" + (null == (_pug_interp12 = svgIcons.arrowRight) ? "" : _pug_interp12) + "</span></button></div></div>";
    }
  }).call(this, "row" in locals_for_with ? locals_for_with.row : typeof row !== "undefined" ? row : undefined, "rowLetterId" in locals_for_with ? locals_for_with.rowLetterId : typeof rowLetterId !== "undefined" ? rowLetterId : undefined, "rowTitle" in locals_for_with ? locals_for_with.rowTitle : typeof rowTitle !== "undefined" ? rowTitle : undefined, "showDescription" in locals_for_with ? locals_for_with.showDescription : typeof showDescription !== "undefined" ? showDescription : undefined, "svgIcons" in locals_for_with ? locals_for_with.svgIcons : typeof svgIcons !== "undefined" ? svgIcons : undefined);;return pug_html;
}

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	var marketoForm = document.querySelector('.consumer__mktoForm');
	var confirmationText = document.querySelector('.consumer-marketing__confirmation');

	function insertLibrary() {
		var script = document.createElement('script');
		script.src = 'https://app-ab13.marketo.com/js/forms2/js/forms2.min.js';
		marketoForm.parentElement.appendChild(script);
	}

	function executeInterval() {
		var counter = 0;

		var executionInterval = setInterval(function () {
			counter++;
			if (counter >= 20) {
				clearInterval(executeInterval);
			} else if (window.MktoForms2) {
				clearInterval(executionInterval);
				var formId = (marketoForm.id || '').replace('mktoForm_', '');
				window.MktoForms2.loadForm('https://app-ab13.marketo.com', '790-SNV-353', formId, function (form) {
					form.onSuccess(function () {
						form.getFormElem().hide();
						confirmationText.style.display = 'block';
						return false;
					});
				});
			}
		}, 500);
	}

	if (marketoForm) {
		insertLibrary();
		executeInterval();
	}
});

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('.error-banner__close');
	var input = document.querySelector('.error-banner__search-input');

	function handleButtonClick() {
		document.body.classList.remove('error-messaging');
	}

	if (button) {
		button.addEventListener('click', handleButtonClick);
	}

	function handleSearchInput() {
		window.location.href = '/search/?q=' + input.value;
	}

	if (input) {
		input.addEventListener('keyup', function (e) {
			e.preventDefault();
			if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
				handleSearchInput();
			}
		});
	}
});

/***/ }),

/***/ 4:
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
	var _this = this;

	var last = void 0;
	var deferTimer = void 0;

	if (!threshold) {
		threshold = 100;
	}

	return function () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var context = scope || _this || {};
		var now = +new Date();

		if (last && now < last + threshold) {
			clearTimeout(deferTimer);
			var next = threshold + now + 1;
			deferTimer = setTimeout(function () {
				last = now;
				context.deferred = true;
				fn.apply(context, args);
			}, next - last);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
}

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/

var Observable = function () {
	// each instance of the Observer class
	// starts with an empty array of things (observers)
	// that react to a state change
	function Observable() {
		_classCallCheck(this, Observable);

		this.observers = [];
	}

	// add the ability to subscribe to a new object / DOM element
	// essentially, add something to the observers array


	_createClass(Observable, [{
		key: "subscribe",
		value: function subscribe(f) {
			this.observers.push(f);
		}

		// add the ability to unsubscribe from a particular object
		// essentially, remove something from the observers array

	}, {
		key: "unsubscribe",
		value: function unsubscribe(f) {
			this.observers = this.observers.filter(function (subscriber) {
				return subscriber !== f;
			});
		}

		// update all subscribed objects / DOM elements
		// and pass some data to each of them

	}, {
		key: "notify",
		value: function notify(data) {
			this.observers.forEach(function (observer) {
				return observer(data);
			});
		}
	}]);

	return Observable;
}();

/* harmony default export */ __webpack_exports__["a"] = (Observable);

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_mobile__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__is_mobile__);


document.addEventListener('DOMContentLoaded', function () {
	var html = document.querySelector('html');
	var body = document.querySelector('body');
	var searchModal = document.querySelector('.search-modal');
	var searchInput = document.querySelector('.search-modal__input');
	var closeIcon = searchModal.querySelector('.search-modal__icon--close-circle');
	var searchIcon = document.querySelector('.header .icon--search');
	var submitIcon = document.querySelector('.search-modal__submit');

	// On initial load, set the value to '' for weird Chrome back button issues:
	// https://jira.forbes.com/browse/HDRFTR-66
	if (searchInput) {
		searchInput.value = '';
	}

	function handleClickSearchIcon(e) {
		if (!body.classList.contains('body--search-modal-open')) {
			body.classList.add('body--search-modal-open');

			if (__WEBPACK_IMPORTED_MODULE_0__is_mobile__["isIOS"]) {
				html.classList.add('touch-screen-input-fixed-modal');
				body.classList.add('touch-screen-input-fixed-modal');
			}
		}
		e.preventDefault();
	}

	if (searchIcon) {
		searchIcon.addEventListener('click', function (e) {
			handleClickSearchIcon(e);
		});

		searchIcon.addEventListener('keyup', function (e) {
			if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
				handleClickSearchIcon(e);
			}
		});
	}

	if (closeIcon) {
		closeIcon.addEventListener('click', function () {
			body.classList.remove('body--search-modal-open');

			if (__WEBPACK_IMPORTED_MODULE_0__is_mobile__["isIOS"]) {
				html.classList.remove('touch-screen-input-fixed-modal');
				body.classList.remove('touch-screen-input-fixed-modal');
			}
		});

		closeIcon.addEventListener('keyup', function (e) {
			if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
				body.classList.remove('body--search-modal-open');
			}
		});
	}

	function handleClickSubmitIcon(e) {
		e.preventDefault();
		window.location.href = '/search/?q=' + searchInput.value;
	}

	if (submitIcon) {
		submitIcon.addEventListener('click', function (e) {
			handleClickSubmitIcon(e);
		});

		submitIcon.addEventListener('keyup', function (e) {
			if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
				handleClickSubmitIcon(e);
			}
		});
	}
});

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clientConfigService__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var authorSlug = __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].authorSlug,
    blogSlug = __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].blogSlug,
    channelColor = __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].channelColor,
    channelId = __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].channelId,
    channelName = __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].channelName,
    edittools = __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].edittools,
    is404 = __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].is404,
    name = __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].name,
    sectionId = __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].sectionId,
    subBlog = __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].subBlog,
    subBlogLocation = __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].subBlogLocation,
    variantUri = __WEBPACK_IMPORTED_MODULE_0__clientConfigService__["y" /* serverData */].variantUri;


document.addEventListener('DOMContentLoaded', function () {
	var htmlElement = document.getElementsByTagName('html')[0];
	var headElement = document.getElementsByTagName('head')[0];
	var mainRowsContainer = document.querySelector('body>.main-content>main');

	var promotedContentCache = {};

	var isEditToolsInitialized = false;

	/**
  * Check for edittools cookie
  */
	function editToolsCookieExists() {
		return document.cookie.indexOf('forbeseditor') !== -1;
	}

	/**
  * Prevent scenario where a user could edit production data built to a staging server.
  * Also prevent edittools from editing HP content on 404 page.
  */
	function allowEditTools() {
		var isProdEdittools = edittools === 'edittools.forbes.com';
		var isStagingUrl = window.location.host.indexOf('www-staging') !== -1;
		var allow = true;
		if (isProdEdittools && isStagingUrl || is404) {
			allow = false;
		}
		return allow;
	}

	/**
  * Insert jQuery onto the page so that edittools loader
  * (that is dependent on jQuery) doesn't blow up.
  */
	function insertJQueryScript() {
		var script = document.createElement('script');
		script.src = 'https://i.forbesimg.com/assets/js/core/jquery-1.7.2.min.js';

		document.body.appendChild(script);
	}

	/**
  * Insert the edittools loader script.
  */
	function insertEditToolsScript() {
		var script = document.createElement('script');
		script.src = 'https://' + edittools + '/tools/init';

		document.body.appendChild(script);
	}

	/**
  * Insert the fbs-typography stylesheet from headend.
  */
	function insertFbsTypographyStylesheet() {
		var link = document.createElement('link');
		link.href = 'https://images.forbes.com/assets/fonts/fbs-typography/0233/fbs-typography-2.33.css';
		link.type = 'text/css';
		link.rel = 'stylesheet';
		headElement.appendChild(link);
	}

	/**
  * Insert HTML and run scripts that may be in it
  */
	function insertHtml(text) {
		var div = document.createElement('div');
		div.innerHTML = text;

		var fragment = new DocumentFragment();
		fragment.appendChild(div);

		var scripts = fragment.querySelectorAll('script');
		scripts.forEach(function (element) {
			var script = document.createElement('script');
			script.innerText = element.innerText;

			headElement.appendChild(script);

			element.remove();
		});

		mainRowsContainer.innerHTML = '';

		var node = div.firstChild;
		while (node) {
			mainRowsContainer.appendChild(node);
			mainRowsContainer.classList.add('injectButtons');
			node = div.firstChild;
		}

		mainRowsContainer.classList.add('injectButtons');
	}

	/**
  * Fetch server rendered HTML for rows given Edit Tools data
  */
	function fetchAndRenderRows(promotedContent) {
		var channelSectionData = void 0;
		var reqBody = {};

		if (channelId) {
			channelSectionData = {
				id: sectionId ? channelId.concat(sectionId) : channelId,
				sectionId: sectionId,
				channelName: channelName,
				sectionName: name
			};
			reqBody.channelSectionData = channelSectionData;
			reqBody.color = channelColor;
			reqBody.promotedContent = promotedContent;
		} else if (blogSlug) {
			reqBody = {
				content: {
					promotedContent: promotedContent
				},
				subBlogLocation: subBlogLocation
			};
		} else {
			reqBody = _extends({}, promotedContent);
		}

		// TODO - just do this server side and pass the edittools path for all in clientConfigService
		var path = void 0;
		if (blogSlug && authorSlug) {
			path = '/simple-data/contributor-homepage/rows/' + blogSlug + '/people/' + authorSlug;
		} else if (blogSlug) {
			path = '/simple-data/contributor-homepage/rows/' + blogSlug;
			if (subBlog) {
				path += '/' + subBlog;
			}
		} else if (channelId) {
			path = '/simple-data/chansec/' + name + '/rows';
		} else if (variantUri) {
			path = '/simple-data/homepage/' + variantUri + '/rows';
		}

		fetch(path, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(reqBody)
		}).then(function (data) {
			return data.text();
		}).then(function (text) {
			insertHtml(text);
			window.jQuery('.injectButtons').trigger('change');
		});
	}

	/**
  * Listen to Edit Tools jQuery events
  */
	function attachEventListeners() {
		window.jQuery(document).on('editToolsPreviewInit', function (event, response) {
			promotedContentCache = response.data.promotedContent;
			fetchAndRenderRows(promotedContentCache);
		}).on('editToolsPreviewUpdate', function (event, response) {
			Object.keys(response.data.promotedContent).forEach(function (key) {
				promotedContentCache[key] = response.data.promotedContent[key];
			});
			fetchAndRenderRows(promotedContentCache);
		});
	}

	/**
  * Do necessary things to put edittools onto the page.
  */
	function launchEditTools() {
		window.fbs_settings = {};

		insertJQueryScript();

		var jQueryInterval = setInterval(function () {
			if (window.jQuery) {
				clearInterval(jQueryInterval);

				attachEventListeners();
				insertEditToolsScript();
			}
		}, 200);
	}

	/**
  * Check for edit tools initialization and toggle sidebar
  */
	function createEditToolsButtonHandler(labelElement) {
		return function () {
			// Check to see if ET is initialized
			if (!isEditToolsInitialized) {
				launchEditTools();
				isEditToolsInitialized = true;
				labelElement.textContent = 'Hide Tools';
			} else if (isEditToolsInitialized && !htmlElement.classList.contains('et-on')) {
				// Hide sidebar
				htmlElement.classList.add('et-on');
				labelElement.textContent = 'Hide Tools';
			} else if (isEditToolsInitialized && htmlElement.classList.contains('et-on')) {
				// Show sidebar
				htmlElement.classList.remove('et-on');
				labelElement.textContent = 'Show Tools';
			}
		};
	}

	/**
  * Add UI element that allows a logged in user to launch edittools.
  */
	function insertLaunchButton() {
		insertFbsTypographyStylesheet();

		var button = document.createElement('button');
		var icon = document.createElement('i');
		var label = document.createElement('span');
		icon.setAttribute('class', 'icon icon-cog');
		label.setAttribute('class', 'et-label');
		label.textContent = 'Edit This Page';
		button.setAttribute('class', 'edittools-btn');
		button.appendChild(label);
		button.appendChild(icon);
		button.onclick = createEditToolsButtonHandler(label);
		document.body.appendChild(button);
	}

	/**
  * Get this party started.
  */
	function init() {
		if (editToolsCookieExists() && allowEditTools()) {
			insertLaunchButton();
		}
	}

	init();
});

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_mobile__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__is_mobile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adInsertion__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientConfigService__ = __webpack_require__(0);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





document.addEventListener('DOMContentLoaded', function () {
	var header = document.querySelector('.header');
	var headerNav = document.querySelector('.header__nav');
	var hamburgerIcon = header.querySelector('.icon--hamburger');
	var closeIcon = header.querySelector('.icon--close');
	var headerNavOpenClass = 'header__nav--is-open';
	var headerNavCloseClass = 'header__nav--is-closed';

	var channelLiElements = [].concat(_toConsumableArray(document.querySelectorAll('.header__channel')));
	var sectionLiElements = [].concat(_toConsumableArray(document.querySelectorAll('.header__section')));
	var channelAnchorSpanElements = [].concat(_toConsumableArray(document.querySelectorAll('.header__title')));

	var subnav = document.querySelector('.header__subnav');

	var searchIcon = header.querySelector('.icon--search');
	var lastChannel = document.querySelector('.header__channels').lastChild;

	var headerChannelLinkOpen = 'header__channel--is-open';
	var headerChannelLinkClose = 'header__channel--is-closed';

	var body = document.querySelector('body');
	var bodyPreventScrolling = 'body__prevent-scrolling';
	var scrollPosition = void 0;

	function handleOpenHamburger() {
		headerNav.classList.remove(headerNavCloseClass);
		headerNav.classList.add(headerNavOpenClass);
		body.classList.add(bodyPreventScrolling);
		scrollPosition = window.pageYOffset;
	}

	if (hamburgerIcon) {
		hamburgerIcon.addEventListener('click', function () {
			handleOpenHamburger();
		});

		hamburgerIcon.addEventListener('keyup', function (e) {
			if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
				handleOpenHamburger();
			}
		});
	}

	function handleCloseIcon() {
		headerNav.classList.remove(headerNavOpenClass);
		headerNav.classList.add(headerNavCloseClass);
		body.classList.remove(bodyPreventScrolling);
		window.scrollTo(0, scrollPosition);
	}

	if (closeIcon) {
		closeIcon.addEventListener('click', function () {
			handleCloseIcon();
		});

		closeIcon.addEventListener('keyup', function (e) {
			if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
				handleCloseIcon();
			}
		});
	}

	function handleChannelLinkClick(e) {
		var openItem = document.querySelector('.' + headerChannelLinkOpen);
		var link = e.target.classList.contains('header__title') ? e.target.parentNode : e.target;
		var isChannel = link.classList.contains('header__channel');

		if (openItem && isChannel && !openItem.isSameNode(link)) {
			openItem.classList.remove(headerChannelLinkOpen);
		}

		if (link.classList.contains(headerChannelLinkOpen)) {
			link.classList.remove(headerChannelLinkOpen);
			link.classList.add(headerChannelLinkClose);
			link.setAttribute('data-ga-track', 'U18 - Channel: ' + link.dataset.title + ' - Position ' + link.dataset.position + ' - Channel Expanded');
			subnav.setAttribute('aria-hidden', 'true');
		} else {
			link.classList.remove(headerChannelLinkClose);

			// hide divider and subnav if there are no section links for channel
			if ([].concat(_toConsumableArray(link.querySelectorAll('.header__section'))).length > 1) {
				link.classList.add(headerChannelLinkOpen);
			} else {
				link.classList.add('header__channel--no-sections');
			}

			link.removeAttribute('data-ga-track');
			subnav.setAttribute('aria-hidden', 'false');
		}
	}

	if (__WEBPACK_IMPORTED_MODULE_0__is_mobile__["isMobile"] || __WEBPACK_IMPORTED_MODULE_0__is_mobile__["isTablet"]) {
		channelLiElements.forEach(function (link) {
			// handles tapping channels on mobile
			link.setAttribute('data-ga-track', 'U18 - Channel: ' + link.dataset.title + ' - Position ' + link.dataset.position + ' - Channel Expanded');
			link.addEventListener('click', function (e) {
				handleChannelLinkClick(e);
			});
		});
	} else {
		/**
   * trigger hover states only on desktop using a class
   * so that click events don't trigger hover styles on devices
   */
		[].concat(_toConsumableArray(channelLiElements), _toConsumableArray(sectionLiElements)).forEach(function (link) {
			// hide divider and subnav if there are no section links for channel
			if (link.classList.contains('header__channel')) {
				if ([].concat(_toConsumableArray(link.querySelectorAll('.header__section'))).length > 1) {
					link.classList.add('header__hoverable');
				} else {
					link.classList.add('header__channel--no-sections');
				}
			} else {
				link.classList.add('header__hoverable');
			}

			// handles case when user is tabbing and then hovers on different item
			link.addEventListener('mouseenter', function () {
				var openItem = document.querySelector('.' + headerChannelLinkOpen);
				if (openItem) {
					openItem.classList.remove(headerChannelLinkOpen);
					document.activeElement.blur();
				}
			});
		});

		channelAnchorSpanElements.forEach(function (link) {
			// handles focus events/tabbing for accessibility on non devices
			link.addEventListener('focus', function (e) {
				handleChannelLinkClick(e);
			});
		});

		if (searchIcon) {
			searchIcon.addEventListener('focus', function () {
				lastChannel.classList.remove(headerChannelLinkOpen);
			});
		}
	}

	var lastScrollTop = 0;

	var topAdWrapper = document.querySelector('.fbs-ad--top-wrapper');
	var topAdUpClass = 'fbs-ad--top-wrapper--up';
	var topAdStickyClass = 'fbs-ad--top-wrapper--sticky';
	var headerNavUp = 'header__nav--up';
	var mainContentBodyBlock = document.querySelector('.main-content--body');

	function handleScrollingDown() {
		header.classList.add(headerNavUp);
		if (topAdWrapper && !__WEBPACK_IMPORTED_MODULE_2__clientConfigService__["t" /* premiumPage */]) {
			topAdWrapper.classList.add(topAdUpClass);
		}
	}

	function handleScrollingUp() {
		header.classList.remove(headerNavUp);
		if (topAdWrapper && !__WEBPACK_IMPORTED_MODULE_2__clientConfigService__["t" /* premiumPage */]) {
			topAdWrapper.classList.remove(topAdUpClass);
		}
	}

	function onScroll() {
		var currentScrollTop = window.pageYOffset;
		if (currentScrollTop > lastScrollTop && currentScrollTop > header.clientHeight) {
			handleScrollingDown();
		} else {
			handleScrollingUp();
		}

		// stores previous scrollTop value
		lastScrollTop = currentScrollTop;
	}

	function unstickyAd() {
		mainContentBodyBlock.classList.remove('main-content__body--animating');
		mainContentBodyBlock.style.paddingTop = 0;
		if (topAdWrapper && !__WEBPACK_IMPORTED_MODULE_2__clientConfigService__["t" /* premiumPage */]) {
			topAdWrapper.classList.remove(topAdStickyClass);
			topAdWrapper.style.height = 'auto';
		}
	}

	function updateNormalAndFluidAds(height) {
		if (topAdWrapper && !__WEBPACK_IMPORTED_MODULE_2__clientConfigService__["t" /* premiumPage */]) {
			mainContentBodyBlock.classList.add('main-content__body--animating');
			mainContentBodyBlock.style.paddingTop = height + 'px';
			topAdWrapper.classList.add(topAdStickyClass);
			topAdWrapper.style.height = height + 'px';
		}
	}

	var takeOverAdHeight = 7;
	var firstRun = true;

	function updateAdHeight(height) {
		if (height !== takeOverAdHeight && firstRun) {
			firstRun = false;
			updateNormalAndFluidAds(height);
			setTimeout(function () {
				unstickyAd();
				window.addEventListener('scroll', onScroll);
			}, 5000);
		}
	}

	__WEBPACK_IMPORTED_MODULE_1__adInsertion__["a" /* adObservable */].subscribe(updateAdHeight);

	if (__WEBPACK_IMPORTED_MODULE_0__is_mobile__["isMobile"]) {
		mainContentBodyBlock.style.paddingTop = 0;
	} else if (topAdWrapper && !__WEBPACK_IMPORTED_MODULE_2__clientConfigService__["t" /* premiumPage */]) {
		topAdWrapper.classList.add('fbs-ad--top-wrapper--desktop');
	} else {
		window.addEventListener('scroll', onScroll);
	}

	/**
  * Applies channel color to header.
  * @param {Object} headerChannelItems querySelector of header items.
  */
	function applyColor(headerChannelItems) {
		headerChannelItems.forEach(function (channel) {
			if (channel.querySelector('.header__title').innerText === __WEBPACK_IMPORTED_MODULE_2__clientConfigService__["h" /* channelName */]) {
				channel.classList.add('header__current');
			}
		});
	}

	/**
  * Highlight current channel color and removes color on hover and re-applies it on hover out.
  */
	function handleHeaderHighlight() {
		if (!(__WEBPACK_IMPORTED_MODULE_2__clientConfigService__["h" /* channelName */] && __WEBPACK_IMPORTED_MODULE_2__clientConfigService__["g" /* channelColor */])) {
			return;
		}

		var headerChannelItems = document.querySelectorAll('.header__channels .header__channel');

		document.querySelector('.channel__indicator').classList.add('channel__indicator--' + __WEBPACK_IMPORTED_MODULE_2__clientConfigService__["g" /* channelColor */]);
		headerChannelItems.forEach(function (channel) {
			channel.addEventListener('mouseover', function () {
				var headerCurrentElement = document.querySelector('.header__current');
				var sectionList = channel.querySelectorAll('.header__subnav .header__section');
				if (sectionList.length > 1 && headerCurrentElement) {
					headerCurrentElement.classList.remove('header__current');
				}
			});
			channel.addEventListener('mouseout', function () {
				return applyColor(headerChannelItems);
			});
		});

		applyColor(headerChannelItems);
	}

	handleHeaderHighlight();
});

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	document.addEventListener('fbs-ad-render', function (event) {
		var renderEndedEvent = event.detail;
		if (!renderEndedEvent.slot) {
			return;
		}

		var removePlaceholder = function removePlaceholder(wrapper) {
			var placeholder = wrapper.querySelector('.ntv-loading');
			if (placeholder) {
				placeholder.parentNode.removeChild(placeholder);
			}
		};

		var targetingMap = renderEndedEvent.slot.getTargetingMap();
		var position = renderEndedEvent.slot.getSlotElementId();
		var id = targetingMap['ntv-deskchannel'] || targetingMap['ntv-mobchannel'];
		// id will be defined for all the ntv-deskchannel-X/ntv-mobchannel-X ads on the page, in which case
		// we need to select the specific ad wrapper that matches the id for the ad that rendered.
		if (id) {
			var pos = targetingMap['ntv-deskchannel'] ? 'deskchannel' : 'mobchannel';
			var ad = document.querySelector('#ntv-' + pos + '-' + id);
			if (!ad) {
				return;
			}
			var wrapper = ad.parentNode.parentNode;
			removePlaceholder(wrapper);
			// if no id exists but the position includes 'ntv-' then it is either the ntv-home
			// or ntv-mobhome position. There is only one of these on the page so the wrapper can
			// just be selected by the position
		} else if (position.includes('ntv-')) {
			var _wrapper = document.querySelector('.fbs-ad--' + position + '-wrapper');
			if (_wrapper) {
				removePlaceholder(_wrapper);
			}
		}
	});
});

/***/ })

},[293]);


// WEBPACK FOOTER //
// homepage-0d4322602e6c9a46b771.js