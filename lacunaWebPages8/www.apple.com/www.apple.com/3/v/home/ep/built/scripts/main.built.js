! function() {
    function e(t, i, n) {
        function r(o, a) {
            if (!i[o]) {
                if (!t[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(o, !0);
                    if (s) return s(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = i[o] = {
                    exports: {}
                };
                t[o][0].call(u.exports, function(e) {
                    var i = t[o][1][e];
                    return r(i ? i : e)
                }, u, u.exports, e, t, i, n)
            }
            return i[o].exports
        }
        for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
        return r
    }
    return e
}()({
    1: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = function() {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? window.navigator.userAgent : arguments[0];
                    n(this, e);
                    var i = t.toLowerCase(),
                        r = /intel mac os x (\d+)[_.](\d+)[_.]?(\d+)?/;
                    if (this.isEdge = /\sedge\//.test(i), this.isChrome = !this.isEdge && /chrome/.test(i), this.isSafari = !this.isEdge && !this.isChrome && /safari/.test(i), this.isFirefox = !this.isEdge && !this.isChrome && !this.isSafari && /firefox/.test(i), this.isOpera = !this.isEdge && !this.isChrome && !this.isSafari && /opera|opr/.test(i), this.isOperaMini = !this.isEdge && !this.isChrome && !this.isSafari && /opera\s*mini/.test(i), this.isIE = !this.isEdge && !this.isChrome && !this.isSafari && !this.isFirefox && /trident|msie/.test(i), this.isMobile = /mobile/.test(i) || this.isOperaMini, this.isAndroid = /android/.test(i), this.isiOS = this.isMobile && /iphone|ipad|ipod/.test(i), this.isEdgeHTML = this.isEdge, this.isWebKit = !this.isEdgeHTML && /applewebkit/.test(i) && !/edge/.test(i), this.isTrident = !this.isEdgeHTML && !this.isWebKit && /trident/.test(i), this.isGecko = !this.isEdgeHTML && !this.isWebKit && !this.isTrident && /gecko/.test(i), this.isEdge ? this.engineVersion = i.match(/(?:edge).(\d+)/) : (this.version = i.match(/(?:chrome|version|firefox|msie|rv).(\d+)\.(\d+)/), this.engineVersion = i.match(/(?:applewebkit|gecko|trident).(\d+)/)), this.version && (this.majorVersion = parseInt(this.version[1], 10), this.minorVersion = parseInt(this.version[2], 10)), this.engineVersion && (this.engineMajorVersion = parseInt(this.engineVersion[1], 10)), this.isChromeOS = !this.isMobile && /CrOS/.test(i), this.ismacOS = !this.isMobile && /macintosh/.test(i), this.ismacOS) {
                        var s = i.match(r);
                        s[1] && (this.macOSMajorVersion = parseInt(s[1], 10)), s[2] && (this.macOSMinorVersion = parseInt(s[2], 10))
                    }
                    this.isAtLeastMojave = this.ismacOS && this.macOSMajorVersion >= 10 && this.macOSMinorVersion >= 14, this.isAtLeastMojavePlusOne = this.ismacOS && this.macOSMajorVersion >= 10 && this.macOSMinorVersion >= 15, this.isLinux = !this.isMobile && /linux/.test(i), this.isTizen = /tizen/.test(i), this.isWebOS = /web0s|webos/.test(i), this.isWindows = !this.isMobile && /windows/.test(i)
                }
                return r(e, [{
                    key: "couldSupportScheme",
                    value: null
                }]), e
            }();
        i["default"] = s
    }, {}],
    2: [function(e, t, i) {
        "use strict";

        
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("../helpers/url"),
            o = {
                app: ["8"],
                audiobook: ["11", "13"],
                book: ["11", "13"],
                "mac-app": ["12"],
                podcast: ["2"]
            },
            a = {
                audiobook: /\/audiobook\//,
                book: /\/book\//,
                course: /\/course\//,
                "mac-app": /\/mac-app\//,
                story: /\/story\//,
                music: /\/(album|artist|music-video|show|episode)\//,
                podcast: /\/podcast\//,
                tv: /\/(episode|movie)\//
            },
            l = function() {
                
                return r(e, null, [{
                    key: "forURL",
                    value: null
                }, {
                    key: "isApple",
                    value: null
                }]), r(e, [{
                    key: "_is",
                    value: null
                }, {
                    key: "isApps",
                    get: null
                }, {
                    key: "isAudiobook",
                    get: null
                }, {
                    key: "isBook",
                    get: null
                }, {
                    key: "isCobalt",
                    get: null
                }, {
                    key: "isMacApp",
                    get: null
                }, {
                    key: "isStory",
                    get: null
                }, {
                    key: "isMessages",
                    get: null
                }, {
                    key: "isMusic",
                    get: null
                }, {
                    key: "isPodcast",
                    get: null
                }, {
                    key: "isTV",
                    get: null
                }, {
                    key: "isWatch",
                    get: null
                }]), e
            }();
        i["default"] = l
    }, {
        "../helpers/url": 4
    }],
    3: [function(e, t, i) {
        "use strict";

        

        
        i.appendFrame = n, i.removeFrame = r;
        var s = "client-detect-frame";
        i.FRAME_ID = s
    }, {}],
    4: [function(e, t, i) {
        "use strict";

        

        
        var s = function() {
            
            return null
        }();
        i.parseSearch = n, i.parseURL = r;
        var o = /([^?&=]+)=?([^&]*)/g
    }, {}],
    5: [function(e, t, i) {
        "use strict";

        

        
        var s = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }();
        i.registerGlobal = r;
        var o = e("./detect/browser"),
            a = e("./detect/scheme"),
            l = e("./launch"),
            c = 1,
            u = 0,
            h = -1,
            m = function() {
                
                return s(e, null, [{
                    key: "browser",
                    value: function(e) {
                        return new o["default"](e)
                    }
                }, {
                    key: "couldHaveAppStore",
                    value: null
                }, {
                    key: "couldHaveBookStore",
                    value: null
                }, {
                    key: "couldHaveiTunes",
                    value: null
                }, {
                    key: "couldHaveiTunesU",
                    value: null
                }, {
                    key: "couldHaveMacAppStore",
                    value: null
                }, {
                    key: "couldHaveMessages",
                    value: null
                }, {
                    key: "couldHaveMusic",
                    value: null
                }, {
                    key: "couldHavePodcasts",
                    value: null
                }, {
                    key: "couldHaveTV",
                    value: null
                }, {
                    key: "couldHaveWatch",
                    value: null
                }, {
                    key: "schemeForURL",
                    value: null
                }, {
                    key: "launchClient",
                    value: null
                }]), e
            }();
        i.ClientDetect = m, i["default"] = m
    }, {
        "./detect/browser": 1,
        "./detect/scheme": 2,
        "./launch": 10
    }],
    6: [function(e, t, i) {
        "use strict";
        i["default"] = null
    }, {}],
    7: [function(e, t, i) {
        "use strict";
        var n = e("../helpers/dom");
        i["default"] = null
    }, {
        "../helpers/dom": 3
    }],
    8: [function(e, t, i) {
        "use strict";
        var n = e("../helpers/dom");
        i["default"] = null
    }, {
        "../helpers/dom": 3
    }],
    9: [function(e, t, i) {
        "use strict";
        var n = "client-detect-popup";
        i.POPUP_ID = n, i["default"] = null
    }, {}],
    10: [function(e, t, i) {
        "use strict";
        var n = e("./default"),
            r = e("./chrome"),
            s = e("./firefox"),
            o = e("./ie"),
            a = e("./ios"),
            l = e("./mac");
        i["default"] = {
            chrome: r["default"],
            firefox: s["default"],
            ie: o["default"],
            ios: a["default"],
            mac: l["default"],
            "default": n["default"]
        }
    }, {
        "./chrome": 6,
        "./default": 7,
        "./firefox": 8,
        "./ie": 9,
        "./ios": 11,
        "./mac": 12
    }],
    11: [function(e, t, i) {
        "use strict";
        i["default"] = null
    }, {}],
    12: [function(e, t, i) {
        "use strict";
        var n = e("../detect/scheme"),
            r = e("../helpers/dom");
        i["default"] = null
    }, {
        "../detect/scheme": 2,
        "../helpers/dom": 3
    }],
    13: [function(e, t, i) {
        "use strict";
        var n = e("./helpers/TabManager"),
            r = e("./helpers/hideSiblingElements"),
            s = e("./helpers/showSiblingElements"),
            o = null,
            a = o.prototype;
        a.start = null, a.stop = null, a.updateTabbables = null, a._handleOnFocus = null, a.destroy = null, t.exports = o
    }, {
        "./helpers/TabManager": 15,
        "./helpers/hideSiblingElements": 17,
        "./helpers/showSiblingElements": 21
    }],
    14: [function(e, t, i) {
        "use strict";

        function n() {
            this._createElemnts(), this._bindEvents()
        }
        var r = n.prototype;
        r._bindEvents = function() {
            this._onResize = this._resize.bind(this)
        }, r._createElemnts = function() {
            this.span = document.createElement("span");
            var e = this.span.style;
            e.visibility = "hidden", e.position = "absolute", e.top = "0", e.bottom = "0", e.zIndex = "-1", this.span.innerHTML = "&nbsp;", this.iframe = document.createElement("iframe");
            var t = this.iframe.style;
            t.position = "absolute", t.top = "0", t.left = "0", t.width = "100%", t.height = "100%", this.span.appendChild(this.iframe), document.body.appendChild(this.span)
        }, r.detect = function(e) {
            this.originalSize = e || 17, this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.currentSize > this.originalSize && this._onResize(), this.isDetecting || (this.iframe.contentWindow.addEventListener("resize", this._onResize), this.isDetecting = !0)
        }, r._resize = null, r.remove = null, r.destroy = null, t.exports = new n
    }, {}],
    15: [function(e, t, i) {
        "use strict";
        var n = e("./../maps/focusableElement"),
            r = function() {
                this.focusableSelectors = n.join(",")
            },
            s = r.prototype;
        s.isFocusableElement = null, s.isTabbableElement = null, s._isDisplayed = null, s.getTabbableElements = null, s.getFocusableElements = null, t.exports = new r
    }, {
        "./../maps/focusableElement": 23
    }],
    16: [function(e, t, i) {
        "use strict";
        var n = e("./setAttributes"),
            r = e("./../maps/ariaMap"),
            s = e("./TabManager"),
            o = "data-original-",
            a = "tabindex",
            l = null;
        t.exports = null
    }, {
        "./../maps/ariaMap": 22,
        "./TabManager": 15,
        "./setAttributes": 19
    }],
    17: [function(e, t, i) {
        "use strict";
        var n = e("./hide");
        t.exports = null
    }, {
        "./hide": 16
    }],
    18: [function(e, t, i) {
        "use strict";
        var n = null,
            r = null;
        t.exports = r
    }, {}],
    19: [function(e, t, i) {
        "use strict";
        var n = null,
            r = null;
        t.exports = r
    }, {}],
    20: [function(e, t, i) {
        "use strict";
        var n = e("./removeAttributes"),
            r = e("./setAttributes"),
            s = e("./../maps/ariaMap"),
            o = "data-original-",
            a = "tabindex",
            l = null;
        t.exports = null
    }, {
        "./../maps/ariaMap": 22,
        "./removeAttributes": 18,
        "./setAttributes": 19
    }],
    21: [function(e, t, i) {
        "use strict";
        var n = e("./show");
        t.exports = null
    }, {
        "./show": 20
    }],
    22: [function(e, t, i) {
        "use strict";
        t.exports = {
            AUTOCOMPLETE: "aria-autocomplete",
            CHECKED: "aria-checked",
            DISABLED: "aria-disabled",
            EXPANDED: "aria-expanded",
            HASPOPUP: "aria-haspopup",
            HIDDEN: "aria-hidden",
            INVALID: "aria-invalid",
            LABEL: "aria-label",
            LEVEL: "aria-level",
            MULTILINE: "aria-multiline",
            MULTISELECTABLE: "aria-multiselectable",
            ORIENTATION: "aria-orientation",
            PRESSED: "aria-pressed",
            READONLY: "aria-readonly",
            REQUIRED: "aria-required",
            SELECTED: "aria-selected",
            SORT: "aria-sort",
            VALUEMAX: "aria-valuemax",
            VALUEMIN: "aria-valuemin",
            VALUENOW: "aria-valuenow",
            VALUETEXT: "aria-valuetext",
            ATOMIC: "aria-atomic",
            BUSY: "aria-busy",
            LIVE: "aria-live",
            RELEVANT: "aria-relevant",
            DROPEFFECT: "aria-dropeffect",
            GRABBED: "aria-grabbed",
            ACTIVEDESCENDANT: "aria-activedescendant",
            CONTROLS: "aria-controls",
            DESCRIBEDBY: "aria-describedby",
            FLOWTO: "aria-flowto",
            LABELLEDBY: "aria-labelledby",
            OWNS: "aria-owns",
            POSINSET: "aria-posinset",
            SETSIZE: "aria-setsize"
        }
    }, {}],
    23: [function(e, t, i) {
        "use strict";
        t.exports = ["input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "*[tabindex]", "*[contenteditable]"]
    }, {}],
    24: [function(e, t, i) {
        "use strict";
        e("@marcom/ac-polyfills/Array/prototype.slice"), e("@marcom/ac-polyfills/Element/prototype.classList");
        var n = e("./className/add");
        t.exports = null
    }, {
        "./className/add": 25,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0
    }],
    25: [function(e, t, i) {
        "use strict";
        var n = e("./contains");
        t.exports = null
    }, {
        "./contains": 26
    }],
    26: [function(e, t, i) {
        "use strict";
        var n = e("./getTokenRegExp");
        t.exports = null
    }, {
        "./getTokenRegExp": 27
    }],
    27: [function(e, t, i) {
        "use strict";
        t.exports = null
    }, {}],
    28: [function(e, t, i) {
        "use strict";
        var n = e("./contains"),
            r = e("./getTokenRegExp");
        t.exports = null
    }, {
        "./contains": 26,
        "./getTokenRegExp": 27
    }],
    29: [function(e, t, i) {
        "use strict";
        e("@marcom/ac-polyfills/Array/prototype.slice"), e("@marcom/ac-polyfills/Element/prototype.classList");
        var n = e("./className/remove");
        t.exports = null
    }, {
        "./className/remove": 28,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0
    }],
    30: [function(e, t, i) {
        "use strict";
        t.exports = {
            addEventListener: e("./addEventListener"),
            dispatchEvent: e("./dispatchEvent"),
            removeEventListener: e("./removeEventListener")
        }
    }, {
        "./addEventListener": 31,
        "./dispatchEvent": 32,
        "./removeEventListener": 33
    }],
    31: [function(e, t, i) {
        "use strict";
        var n = e("./shared/getEventType");
        t.exports = null
    }, {
        "./shared/getEventType": 34
    }],
    32: [function(e, t, i) {
        "use strict";
        var n = e("./shared/getEventType");
        t.exports = null
    }, {
        "./shared/getEventType": 34
    }],
    33: [function(e, t, i) {
        "use strict";
        var n = e("./shared/getEventType");
        t.exports = null
    }, {
        "./shared/getEventType": 34
    }],
    34: [function(e, t, i) {
        "use strict";
        var n = e("@marcom/ac-prefixer/getEventType");
        t.exports = null
    }, {
        "@marcom/ac-prefixer/getEventType": 94
    }],
    35: [function(e, t, i) {
        "use strict";
        t.exports = function(e, t) {
            var i;
            return t ? (i = e.getBoundingClientRect(), {
                width: i.width,
                height: i.height
            }) : {
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        }
    }, {}],
    36: [function(e, t, i) {
        "use strict";
        var n = e("./getDimensions"),
            r = e("./getScrollX"),
            s = e("./getScrollY");
        t.exports = function(e, t) {
            var i, o, a, l;
            if (t) return i = e.getBoundingClientRect(), o = r(), a = s(), {
                top: i.top + a,
                right: i.right + o,
                bottom: i.bottom + a,
                left: i.left + o
            };
            for (l = n(e, t), i = {
                    top: e.offsetTop,
                    left: e.offsetLeft,
                    width: l.width,
                    height: l.height
                }; e = e.offsetParent;) i.top += e.offsetTop, i.left += e.offsetLeft;
            return {
                top: i.top,
                right: i.left + i.width,
                bottom: i.top + i.height,
                left: i.left
            }
        }
    }, {
        "./getDimensions": 35,
        "./getScrollX": 37,
        "./getScrollY": 38
    }],
    37: [function(e, t, i) {
        "use strict";
        t.exports = null
    }, {}],
    38: [function(e, t, i) {
        "use strict";
        t.exports = function(e) {
            return e = e || window, e === window ? window.scrollY || window.pageYOffset : e.scrollTop
        }
    }, {}],
    39: [function(e, t, i) {
        "use strict";
        t.exports = 8
    }, {}],
    40: [function(e, t, i) {
        "use strict";
        t.exports = 11
    }, {}],
    41: [function(e, t, i) {
        "use strict";
        t.exports = 1
    }, {}],
    42: [function(e, t, i) {
        "use strict";
        t.exports = 3
    }, {}],
    43: [function(e, t, i) {
        "use strict";
        var n = e("../isNode");
        t.exports = function(e, t) {
            return !!n(e) && ("number" == typeof t ? e.nodeType === t : t.indexOf(e.nodeType) !== -1)
        }
    }, {
        "../isNode": 46
    }],
    44: [function(e, t, i) {
        "use strict";
        var n = e("./isNodeType"),
            r = e("../COMMENT_NODE"),
            s = e("../DOCUMENT_FRAGMENT_NODE"),
            o = e("../ELEMENT_NODE"),
            a = e("../TEXT_NODE"),
            l = [o, a, r, s],
            c = " must be an Element, TextNode, Comment, or Document Fragment",
            u = [o, a, r],
            h = " must be an Element, TextNode, or Comment",
            m = [o, s],
            d = " must be an Element, or Document Fragment",
            f = " must have a parentNode";
        t.exports = {
            parentNode: null,
            childNode: null,
            insertNode: null,
            hasParentNode: null
        }
    }, {
        "../COMMENT_NODE": 39,
        "../DOCUMENT_FRAGMENT_NODE": 40,
        "../ELEMENT_NODE": 41,
        "../TEXT_NODE": 42,
        "./isNodeType": 43
    }],
    45: [function(e, t, i) {
        "use strict";
        var n = e("./internal/isNodeType"),
            r = e("./ELEMENT_NODE");
        t.exports = function(e) {
            return n(e, r)
        }
    }, {
        "./ELEMENT_NODE": 41,
        "./internal/isNodeType": 43
    }],
    46: [function(e, t, i) {
        "use strict";
        t.exports = function(e) {
            return !(!e || !e.nodeType)
        }
    }, {}],
    47: [function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? null : null,
            r = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        t.exports = null
    }, {}],
    48: [function(e, t, i) {
        "use strict";
        var n = e("./internal/validate");
        t.exports = null
    }, {
        "./internal/validate": 44
    }],
    49: [function(e, t, i) {
        "use strict";
        var n = e("./ac-element-engagement/ElementEngagement");
        t.exports = new n, t.exports.ElementEngagement = n
    }, {
        "./ac-element-engagement/ElementEngagement": 50
    }],
    50: [function(e, t, i) {
        "use strict";
        var n, r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = {
                defaults: e("@marcom/ac-object/defaults"),
                extend: e("@marcom/ac-object/extend")
            },
            o = e("@marcom/ac-element-tracker").ElementTracker,
            a = {
                timeToEngage: 500,
                inViewThreshold: .75,
                stopOnEngaged: !0
            },
            l = {
                thresholdEnterTime: 0,
                thresholdExitTime: 0,
                inThreshold: !1,
                engaged: !1,
                tracking: !0
            },
            c = function(e) {
                o.call(this, null, e), r.call(this), this._thresholdEnter = this._thresholdEnter.bind(this), this._thresholdExit = this._thresholdExit.bind(this), this._enterView = this._enterView.bind(this), this._exitView = this._exitView.bind(this)
            };
        n = c.prototype = Object.create(o.prototype), n = s.extend(n, r.prototype), n._decorateTrackedElement = function(e, t) {
            var i;
            i = s.defaults(a, t || {}), s.extend(e, i), s.extend(e, l)
        }, n._attachElementListeners = function(e) {
            e.on("thresholdenter", this._thresholdEnter, this), e.on("thresholdexit", this._thresholdExit, this), e.on("enterview", this._enterView, this), e.on("exitview", this._exitView, this)
        }, n._removeElementListeners = function(e) {
            e.off("thresholdenter", this._thresholdEnter), e.off("thresholdexit", this._thresholdExit), e.off("enterview", this._enterView), e.off("exitview", this._exitView)
        }, n._attachAllElementListeners = function() {
            this.elements.forEach(function(e) {
                e.stopOnEngaged ? e.engaged || this._attachElementListeners(e) : this._attachElementListeners(e)
            }, this)
        }, n._removeAllElementListeners = null, n._elementInViewPastThreshold = function(e) {
            var t = !1;
            return t = e.pixelsInView === this._windowHeight || e.percentInView > e.inViewThreshold
        }, n._ifInView = function(e, t) {
            var i = e.inThreshold;
            o.prototype._ifInView.apply(this, arguments), !i && this._elementInViewPastThreshold(e) && (e.inThreshold = !0, e.trigger("thresholdenter", e), "number" == typeof e.timeToEngage && e.timeToEngage >= 0 && (e.engagedTimeout = window.setTimeout(this._engaged.bind(this, e), e.timeToEngage)))
        }, n._ifAlreadyInView = function(e) {
            var t = e.inThreshold;
            o.prototype._ifAlreadyInView.apply(this, arguments), t && !this._elementInViewPastThreshold(e) && (e.inThreshold = !1, e.trigger("thresholdexit", e), e.engagedTimeout && (window.clearTimeout(e.engagedTimeout), e.engagedTimeout = null))
        }, n._engaged = function(e) {
            e.engagedTimeout = null, this._elementEngaged(e), e.trigger("engaged", e), this.trigger("engaged", e)
        }, n._thresholdEnter = function(e) {
            e.thresholdEnterTime = Date.now(), e.thresholdExitTime = 0, this.trigger("thresholdenter", e)
        }, n._thresholdExit = null, n._enterView = null, n._exitView = null, n._elementEngaged = function(e) {
            e.engaged = !0, e.stopOnEngaged && this.stop(e)
        }, n.stop = function(e) {
            this.tracking && !e && (this._removeAllElementListeners(), o.prototype.stop.call(this)), e && e.tracking && (e.tracking = !1, this._removeElementListeners(e), this.removeElement(e))
        }, n.start = function(e) {
            e || this._attachAllElementListeners(), e && !e.tracking && (e.stopOnEngaged ? e.engaged || (e.tracking = !0, this._attachElementListeners(e)) : (e.tracking = !0, this._attachElementListeners(e))), this.tracking ? (this.refreshAllElementMetrics(), this.refreshAllElementStates()) : o.prototype.start.call(this)
        }, n.addElement = function(e, t) {
            t = t || {};
            var i = o.prototype.addElement.call(this, e, t.useRenderedPosition);
            return this._decorateTrackedElement(i, t), i
        }, n.addElements = null, t.exports = c
    }, {
        "@marcom/ac-element-tracker": 51,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-object/defaults": 92,
        "@marcom/ac-object/extend": 93
    }],
    51: [function(e, t, i) {
        "use strict";
        var n = e("./ac-element-tracker/ElementTracker"),
            r = e("./ac-element-tracker/TrackedElement");
        t.exports = new n, t.exports.ElementTracker = n, t.exports.TrackedElement = r
    }, {
        "./ac-element-tracker/ElementTracker": 52,
        "./ac-element-tracker/TrackedElement": 53
    }],
    52: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            this.options = a.clone(c), this.options = "object" === ("undefined" == typeof t ? "undefined" : r(t)) ? a.extend(this.options, t) : this.options, this._scrollY = this._getScrollY(), this._windowHeight = this._getWindowHeight(), this.tracking = !1, this.elements = [], e && (Array.isArray(e) || s.isNodeList(e) || s.isElement(e)) && this.addElements(e), this.refreshAllElementStates = this.refreshAllElementStates.bind(this), this.refreshAllElementMetrics = this.refreshAllElementMetrics.bind(this), this.options.autoStart && this.start()
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? null : null,
            s = {
                isNodeList: e("@marcom/ac-dom-nodes/isNodeList"),
                isElement: e("@marcom/ac-dom-nodes/isElement")
            },
            o = {
                getDimensions: e("@marcom/ac-dom-metrics/getDimensions"),
                getPagePosition: e("@marcom/ac-dom-metrics/getPagePosition"),
                getScrollY: e("@marcom/ac-dom-metrics/getScrollY")
            },
            a = {
                clone: e("@marcom/ac-object/clone"),
                extend: e("@marcom/ac-object/extend")
            },
            l = e("./TrackedElement"),
            c = {
                autoStart: !1,
                useRenderedPosition: !1
            },
            u = n.prototype;
        u.destroy = null, u._registerTrackedElements = function(e) {
            var t = [].concat(e);
            t.forEach(function(e) {
                this._elementInDOM(e.element) && (e.offsetTop = e.element.offsetTop, this.elements.push(e))
            }, this)
        }, u._elementInDOM = function(e) {
            var t = !1,
                i = document.getElementsByTagName("body")[0];
            return s.isElement(e) && i.contains(e) && (t = !0), t
        }, u._elementPercentInView = function(e) {
            return e.pixelsInView / e.height
        }, u._elementPixelsInView = function(e) {
            var t = e.top - this._scrollY,
                i = e.bottom - this._scrollY;
            return t > this._windowHeight || i < 0 ? 0 : Math.min(i, this._windowHeight) - Math.max(t, 0)
        }, u._ifInView = function(e, t) {
            t || e.trigger("enterview", e)
        }, u._ifAlreadyInView = function(e) {
            e.inView || e.trigger("exitview", e)
        }, u.addElements = null, u.addElement = function(e, t) {
            var i = null;
            if ("undefined" == typeof t && (t = this.options.useRenderedPosition), !s.isElement(e)) throw new TypeError("ElementTracker: " + e + " is not a valid DOM element");
            return i = new l(e, t), this._registerTrackedElements(i), this.refreshElementMetrics(i), this.refreshElementState(i), i
        }, u.removeElement = function(e) {
            var t, i = [];
            this.elements.forEach(function(t, n) {
                t !== e && t.element !== e || i.push(n)
            }), t = this.elements.filter(function(e, t) {
                return i.indexOf(t) < 0
            }), this.elements = t
        }, u.start = function() {
            this.tracking === !1 && (this.tracking = !0, window.addEventListener("resize", this.refreshAllElementMetrics), window.addEventListener("orientationchange", this.refreshAllElementMetrics), window.addEventListener("scroll", this.refreshAllElementStates), this.refreshAllElementMetrics())
        }, u.stop = null, u.refreshAllElementMetrics = function(e, t) {
            "number" != typeof e && (e = this._getScrollY()), "number" != typeof t && (t = this._getWindowHeight()), this._scrollY = e, this._windowHeight = t, this.elements.forEach(this.refreshElementMetrics, this)
        }, u.refreshElementMetrics = function(e) {
            if (!e.isActive) return e;
            var t = o.getDimensions(e.element, e.useRenderedPosition),
                i = o.getPagePosition(e.element, e.useRenderedPosition);
            return e = a.extend(e, t, i), this.refreshElementState(e)
        }, u.refreshAllElementStates = null, u.refreshElementState = function(e) {
            if (!e.isActive) return e;
            var t = e.inView;
            return e.pixelsInView = this._elementPixelsInView(e), e.percentInView = this._elementPercentInView(e), e.inView = e.pixelsInView > 0, e.inView && this._ifInView(e, t), t && this._ifAlreadyInView(e), e
        }, u.pauseElementTracking = null, u.resumeElementTracking = null, u._getWindowHeight = function() {
            return window.innerHeight
        }, u._getScrollY = function() {
            return o.getScrollY()
        }, t.exports = n
    }, {
        "./TrackedElement": 53,
        "@marcom/ac-dom-metrics/getDimensions": 35,
        "@marcom/ac-dom-metrics/getPagePosition": 36,
        "@marcom/ac-dom-metrics/getScrollY": 38,
        "@marcom/ac-dom-nodes/isElement": 45,
        "@marcom/ac-dom-nodes/isNodeList": 47,
        "@marcom/ac-object/clone": 90,
        "@marcom/ac-object/extend": 93
    }],
    53: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!r.isElement(e)) throw new TypeError("TrackedElement: " + e + " is not a valid DOM element");
            s.call(this), this.element = e, this.inView = !1, this.isActive = !0, this.percentInView = 0, this.pixelsInView = 0, this.offsetTop = 0, this.top = 0, this.right = 0, this.bottom = 0, this.left = 0, this.width = 0, this.height = 0, this.useRenderedPosition = t || !1
        }
        var r = {
                isElement: e("@marcom/ac-dom-nodes/isElement")
            },
            s = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            o = s.prototype,
            a = n.prototype = Object.create(o);
        a.destroy = null, t.exports = n
    }, {
        "@marcom/ac-dom-nodes/isElement": 45,
        "@marcom/ac-event-emitter-micro": 54
    }],
    54: [function(e, t, i) {
        "use strict";
        t.exports = {
            EventEmitterMicro: e("./ac-event-emitter-micro/EventEmitterMicro")
        }
    }, {
        "./ac-event-emitter-micro/EventEmitterMicro": 55
    }],
    55: [function(e, t, i) {
        "use strict";

        function n() {
            this._events = {}
        }
        var r = n.prototype;
        r.on = function(e, t) {
            this._events[e] = this._events[e] || [], this._events[e].unshift(t)
        }, r.once = function(e, t) {
            function i(r) {
                n.off(e, i), void 0 !== r ? t(r) : t()
            }
            var n = this;
            this.on(e, i)
        }, r.off = function(e, t) {
            if (this.has(e)) {
                if (1 === arguments.length) return this._events[e] = null, void delete this._events[e];
                var i = this._events[e].indexOf(t);
                i !== -1 && this._events[e].splice(i, 1)
            }
        }, r.trigger = function(e, t) {
            if (this.has(e))
                for (var i = this._events[e].length - 1; i >= 0; i--) void 0 !== t ? this._events[e][i](t) : this._events[e][i]()
        }, r.has = function(e) {
            return e in this._events != !1 && 0 !== this._events[e].length
        }, r.destroy = null, t.exports = n
    }, {}],
    56: [function(e, t, i) {
        "use strict";
        t.exports = {
            getWindow: null,
            getDocument: null,
            getNavigator: null
        }
    }, {}],
    57: [function(e, t, i) {
        "use strict";

        
        var r = e("@marcom/useragent-detect").os,
            s = e("./touchAvailable").original,
            o = e("./helpers/globals"),
            a = e("@marcom/ac-function/once");
        t.exports = a(n), t.exports.original = n
    }, {
        "./helpers/globals": 56,
        "./touchAvailable": 59,
        "@marcom/ac-function/once": 60,
        "@marcom/useragent-detect": 160
    }],
    58: [function(e, t, i) {
        "use strict";

        
        var r = e("./isDesktop").original,
            s = e("./helpers/globals"),
            o = e("@marcom/ac-function/once"),
            a = 600;
        t.exports = o(n), t.exports.original = n
    }, {
        "./helpers/globals": 56,
        "./isDesktop": 57,
        "@marcom/ac-function/once": 60
    }],
    59: [function(e, t, i) {
        "use strict";

        
        var r = e("./helpers/globals"),
            s = e("@marcom/ac-function/once");
        t.exports = s(n), t.exports.original = n
    }, {
        "./helpers/globals": 56,
        "@marcom/ac-function/once": 60
    }],
    60: [function(e, t, i) {
        "use strict";
        t.exports = function(e) {
            var t;
            return null
        }
    }, {}],
    61: [function(e, t, i) {
        "use strict";

        function n() {
            var e = document.createElement("div");
            e.setAttribute("windowDimensionsTracker", "true"), e.style.position = "absolute", e.style.top = "0", e.style.width = "100%", e.style.height = "100vh", e.style.pointerEvents = "none", e.style.visibility = "hidden", e.style.zIndex = "-1", document.documentElement.appendChild(e);
            var t = e.clientWidth,
                i = e.clientHeight;
            o.on("ON_DOM_GROUPS_CREATED", function() {
                return a.pageMetrics.windowHeight = i
            }), o.on("ON_RESIZE_IMMEDIATE", null), window.removeEventListener("resize", o.onResizeImmediate), window.addEventListener("resize", null)
        }

        function r() {
            var e = 0;
            Array.from(document.querySelectorAll(u)).forEach(function(t, i) {
                var n = parseInt(window.getComputedStyle(t).getPropertyValue("--columns-for-analytics-only"));
                if (!isNaN(n)) {
                    var r = Array.from(t.querySelectorAll(m));
                    if (r && r.length > 0) {
                        var o = 0;
                        r.forEach(function(t, i) {
                            var r = i + 1;
                            o = Math.ceil(r / n);
                            var a = e + o,
                                l = r - (o - 1) * n;
                            s(t, a, o, l, n)
                        }), e += o
                    } else {
                        e++;
                        var a = e + 0,
                            l = n,
                            l = 1;
                        s(t, a, o, l, n)
                    }
                }
            })
        }

        function s(e, t, i, n, r) {
            Array.from(e.querySelectorAll("a")).forEach(function(i, s) {
                var o = 1 === r ? 0 : n,
                    a = i.getAttribute("data-analytics-title") || i.getAttribute("aria-label") || i.innerText;
                if (!/\w/.test(a)) {
                    var l = e.getAttribute("data-module-template"),
                        c = e.getAttribute("data-unit-id");
                    if (c) {
                        for (var u = e.parentNode; !l;) l = u.getAttribute("data-module-template"), u = u.parentNode;
                        a = l + " " + c
                    } else a = l;
                    /\w/.test(i.className) && (a += " " + i.className)
                }
                a = a.split("’").join("").split(/[^\w]+/).join(" ").toLowerCase();
                var h = {
                    eVar102: t + "." + o + ":" + a,
                    eVar103: "abcdefghijklmnopqrstuvwxyz".charAt(n - 1)
                };
                i.addEventListener("click", null)
            })
        }
        var o = (e("@marcom/ac-dom-events").addEventListener, e("@marcom/ac-feature/isTablet"), e("@marcom/ac-feature/touchAvailable"), e("@marcom/viewport-emitter"), e("@marcom/anim-system")),
            a = e("@marcom/anim-system/Model/AnimSystemModel"),
            l = e("./js/TextZoomManager.js"),
            c = (new l, "data-module-template"),
            u = "[" + c + "]",
            h = "data-unit-id",
            m = "[" + h + "]",
            d = null;
        try {
            d = e("@marcom/ac-analytics")
        } catch (f) {}
        var p = e("./js/extendedHomepageSectionsLib.built.js");
        t.exports = function() {
            function e() {
                var e, t, i, n = document.querySelector("meta[property=analytics-track]");
                if (n && n.content && (i = document.querySelector("[data-module-template]"), i && (e = i.querySelector("[data-analytics-section-engagement]"), e && e.hasAttribute("data-analytics-section-engagement") && (t = e.getAttribute("data-analytics-section-engagement").split(":")[1])))) return "0. " + n.content.toLowerCase() + " - " + t + " - section engaged .0"
            }

            function t() {
                r();
                var t = {
                        page: {
                            data: {}
                        }
                    },
                    i = e();
                i && (t.page.data.prop34 = i), d.createBasicObserverSuite(t)
            }
            var i = [];
            n(), o.initialize(), o.on("ON_DOM_KEYFRAMES_CREATED", function() {
                [].forEach.call(document.querySelectorAll(u), function(e, t) {
                    var n = e.getAttribute(c),
                        r = p[n].SectionClass,
                        s = p[n].collectionUnits;
                    i.push(new r(e, t, s, o))
                })
            }), d && t()
        }
    }, {
        "./js/TextZoomManager.js": 65,
        "./js/extendedHomepageSectionsLib.built.js": 66,
        "@marcom/ac-analytics": void 0,
        "@marcom/ac-dom-events": 30,
        "@marcom/ac-feature/isTablet": 58,
        "@marcom/ac-feature/touchAvailable": 59,
        "@marcom/anim-system": 137,
        "@marcom/anim-system/Model/AnimSystemModel": 142,
        "@marcom/viewport-emitter": 171
    }],
    62: [function(e, t, i) {
        "use strict";

        function n(e, t, i) {
            r.apply(this, arguments)
        }
        var r = e("../../js/BaseHomepageSection.js"),
            s = r.prototype,
            o = n.prototype = Object.create(s);
        o.destroy = null, t.exports = n
    }, {
        "../../js/BaseHomepageSection.js": 63
    }],
    63: [function(e, t, i) {
        "use strict";

        function n(t, i, n, s) {
            r.apply(this), this.sectionElement = t, this.sectionIndex = i, this.moduleTemplateName = t.getAttribute("data-module-template"), this.viewportEmitter = e("@marcom/viewport-emitter"), this.AnimSystem = s, this.sectionAnalyticsRegion = t.getAttribute("data-analytics-region"), this.collectionUnits = this.sectionElement.querySelectorAll("[data-unit-id]"), this.elementEngagement = new o, this.setProgressiveImageLoading(), this.elementEngagement.start(), this.collectionUnitObjs = {}, this._setDebouncedResizeEvents(500), this.initContentUnitClasses(n)
        }
        var r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = r.prototype,
            o = e("@marcom/ac-element-engagement").ElementEngagement,
            a = e("@marcom/ac-progressive-image-loader/ProgressiveImageLoader"),
            l = e("./BaseHomepageUnit"),
            c = n.prototype = Object.create(s);
        c.initContentUnitClasses = function(e) {
            Array.from(this.collectionUnits).forEach(function(t) {
                var i = t.getAttribute("data-unit-id"),
                    n = e[i] ? e[i] : l;
                this.collectionUnitObjs[i] = new n(t, i, this)
            }.bind(this))
        }, c.destroy = null, c.addWrapperClass = null, c.removeWrapperClass = null, c.setProgressiveImageLoading = function() {
            this.sectionImageLoaderEngagement = this.elementEngagement.addElement(this.sectionElement, {
                timeToEngage: 0,
                inViewThreshold: .001
            }), this.sectionImageLoaderEngagement.once("engaged", function() {
                this.sectionImageLoader = new a({
                    container: this.sectionElement,
                    includeContainer: !0
                }), this.sectionImageLoader.load({
                    imageAnimate: !1
                })
            }.bind(this))
        }, c._setDebouncedResizeEvents = function(e) {
            var t = !1;
            window.addEventListener("resize", null.bind(this))
        }, t.exports = n
    }, {
        "./BaseHomepageUnit": 64,
        "@marcom/ac-element-engagement": 49,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-progressive-image-loader/ProgressiveImageLoader": 99,
        "@marcom/viewport-emitter": 171
    }],
    64: [function(e, t, i) {
        "use strict";

        function n(e, t, i) {
            r.apply(this), this.collectionUnitElement = e, this.unitWrapperElement = this.collectionUnitElement.querySelector(".unit-wrapper"), this.id = t, this.sectionObj = i, this.AnimSystem = i.AnimSystem, this.handleLinkAccessibilityConcerns()
        }
        var r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = r.prototype,
            o = n.prototype = Object.create(s);
        o.setVoiceoverCopy = null, o.handleLinkAccessibilityConcerns = function() {
            if (this.unitWrapperElement) {
                var e = this.unitWrapperElement.querySelector("a.unit-link"),
                    t = e ? e.href : null,
                    i = e ? e.getAttribute("aria-label") : null,
                    n = this.unitWrapperElement.querySelectorAll(".cta-links a"),
                    r = function() {
                        var e = [];
                        return n.forEach(function(t, i) {
                            e.push(t.href)
                        }), e
                    }(),
                    s = t && r.indexOf(t) >= 0,
                    o = !i || !/\w/.test(i);
                if (t)
                    if (s) e.removeAttribute("aria-label"), e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", "-1");
                    else if (o) {
                    var a = this.unitWrapperElement.querySelector(".unit-copy-wrapper>*:not(a)"),
                        l = a.innerText && "" != a.innerText ? a.innerText : a.textContent;
                    e.setAttribute("aria-label", l)
                }
            }
        }, o.destroy = null, t.exports = n
    }, {
        "@marcom/ac-event-emitter-micro": 54
    }],
    65: [function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
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
        var a = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            l = e("@marcom/useragent-detect"),
            c = (n(l), e("@marcom/ac-raf-emitter")),
            u = e("@marcom/ac-event-emitter-micro"),
            h = e("@marcom/ac-accessibility/TextZoom"),
            m = "textZoomChange",
            d = "data-text-zoom",
            f = 17,
            p = [1.2, 1.44, 1.72, 2.07, 2.48, 2.98],
            v = function(e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
                    r(this, t);
                    var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.baseFontSize = e, n.fontSizeDeltas = i, h.detect(n.baseFontSize), n._cachedTextZoomDeltaFloat = 1, n._cachedTextZoomFactor = 0, n._rafEmitter = new c.RAFEmitter, n._htmlElement = document.querySelector("html"), n._listenForChanges(), n._checkForTextZoomChange(), n
                }
                return o(t, e), a(t, [{
                    key: "_listenForChanges",
                    value: function() {
                        var e = this;
                        window.addEventListener("resize", null)
                    }
                }, {
                    key: "_checkForTextZoomChange",
                    value: function() {
                        var e = this,
                            t = 4;
                        this._rafEmitter.on("update", function() {
                            t--;
                            var i = e.getTextZoomDeltaAsFloat();
                            i != e._cachedTextZoomDeltaFloat ? (e._cachedTextZoomDeltaFloat = i, e._cachedTextZoomDeltaFactor = e.getTextZoomAsFactor(), e._setTextZoomDataAttribute(), e.trigger(m, {
                                zoomAsFloat: e._cachedTextZoomDeltaFloat,
                                zoomAsFactor: e._cachedTextZoomDeltaFactor
                            })) : t > 0 && e._rafEmitter.run()
                        }), this._rafEmitter.run()
                    }
                }, {
                    key: "_setTextZoomDataAttribute",
                    value: null
                }, {
                    key: "getTextZoomAsFactor",
                    value: null
                }, {
                    key: "getTextZoomDeltaAsFloat",
                    value: function() {
                        return parseFloat(h.currentSize) / this.baseFontSize
                    }
                }]), t
            }(u.EventEmitterMicro);
        t.exports = v
    }, {
        "@marcom/ac-accessibility/TextZoom": 14,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-raf-emitter": 105,
        "@marcom/useragent-detect": 160
    }],
    66: [function(e, t, i) {
        "use strict";
        t.exports = {
            generic: {
                SectionClass: e("../built-in-module-templates/generic/generic.js"),
                collectionUnits: e("../../../../../tmp/collection-units.generic.built.js")
            },
            heroes: {
                SectionClass: e("../built-in-module-templates/generic/generic.js"),
                collectionUnits: e("../../../../../tmp/collection-units.heroes.built.js")
            },
            promos: {
                SectionClass: e("../built-in-module-templates/generic/generic.js"),
                collectionUnits: e("../../../../../tmp/collection-units.promos.built.js")
            },
            "supports-shared-modals": {
                SectionClass: e("../built-in-module-templates/generic/generic.js"),
                collectionUnits: e("../../../../../tmp/collection-units.supports-shared-modals.built.js")
            }
        }
    }, {
        "../../../../../tmp/collection-units.generic.built.js": 192,
        "../../../../../tmp/collection-units.heroes.built.js": 193,
        "../../../../../tmp/collection-units.promos.built.js": 194,
        "../../../../../tmp/collection-units.supports-shared-modals.built.js": 195,
        "../built-in-module-templates/generic/generic.js": 62
    }],
    67: [function(e, t, i) {
        "use strict";
        t.exports = function(e, t, i, n) {
            return e.addEventListener ? e.addEventListener(t, i, !!n) : e.attachEvent("on" + t, i), e
        }
    }, {}],
    68: [function(e, t, i) {
        "use strict";
        t.exports = null
    }, {}],
    69: [function(e, t, i) {
        "use strict";

        function n(e) {
            this._keysDown = {}, this._DOMKeyDown = this._DOMKeyDown.bind(this), this._DOMKeyUp = this._DOMKeyUp.bind(this), this._context = e || document, s(this._context, c, this._DOMKeyDown, !0), s(this._context, u, this._DOMKeyUp, !0), r.call(this)
        }
        var r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = e("@marcom/ac-dom-events/utils/addEventListener"),
            o = e("@marcom/ac-dom-events/utils/removeEventListener"),
            a = e("@marcom/ac-object/create"),
            l = e("./internal/KeyEvent"),
            c = "keydown",
            u = "keyup",
            h = n.prototype = a(r.prototype);
        h.onDown = null, h.onceDown = null, h.offDown = null, h.onUp = null, h.onceUp = null, h.offUp = null, h.isDown = null, h.isUp = null, h.destroy = null, h._DOMKeyDown = null, h._DOMKeyUp = null, h._normalizeKeyboardEvent = null, h._trackKeyUp = null, h._trackKeyDown = null, t.exports = n
    }, {
        "./internal/KeyEvent": 71,
        "@marcom/ac-dom-events/utils/addEventListener": 67,
        "@marcom/ac-dom-events/utils/removeEventListener": 68,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-object/create": 91
    }],
    70: [function(e, t, i) {
        "use strict";
        var n = e("./Keyboard");
        t.exports = new n
    }, {
        "./Keyboard": 69
    }],
    71: [function(e, t, i) {
        "use strict";

        
        var r = ["keyLocation"];
        n.prototype = {
            preventDefault: null,
            stopPropagation: null
        }, t.exports = n
    }, {}],
    72: [function(e, t, i) {
        "use strict";
        t.exports = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            COMMAND: 91,
            CAPSLOCK: 20,
            ESCAPE: 27,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            NUMPAD_ZERO: 96,
            NUMPAD_ONE: 97,
            NUMPAD_TWO: 98,
            NUMPAD_THREE: 99,
            NUMPAD_FOUR: 100,
            NUMPAD_FIVE: 101,
            NUMPAD_SIX: 102,
            NUMPAD_SEVEN: 103,
            NUMPAD_EIGHT: 104,
            NUMPAD_NINE: 105,
            NUMPAD_ASTERISK: 106,
            NUMPAD_PLUS: 107,
            NUMPAD_DASH: 109,
            NUMPAD_DOT: 110,
            NUMPAD_SLASH: 111,
            NUMPAD_EQUALS: 187,
            TICK: 192,
            LEFT_BRACKET: 219,
            RIGHT_BRACKET: 221,
            BACKSLASH: 220,
            SEMICOLON: 186,
            APOSTRAPHE: 222,
            APOSTROPHE: 222,
            SPACEBAR: 32,
            CLEAR: 12,
            COMMA: 188,
            DOT: 190,
            SLASH: 191
        }
    }, {}],
    73: [function(e, t, i) {
        "use strict";
        var n = e("./utils/addEventListener"),
            r = e("./shared/getEventType");
        t.exports = null
    }, {
        "./shared/getEventType": 75,
        "./utils/addEventListener": 77
    }],
    74: [function(e, t, i) {
        "use strict";
        var n = e("./utils/removeEventListener"),
            r = e("./shared/getEventType");
        t.exports = null
    }, {
        "./shared/getEventType": 75,
        "./utils/removeEventListener": 78
    }],
    75: [function(e, t, i) {
        "use strict";
        var n = e("@marcom/ac-prefixer/getEventType");
        t.exports = null
    }, {
        "@marcom/ac-prefixer/getEventType": 94
    }],
    76: [function(e, t, i) {
        "use strict";
        t.exports = null
    }, {}],
    77: [function(e, t, i) {
        arguments[4][67][0].apply(i, arguments)
    }, {
        dup: 67
    }],
    78: [function(e, t, i) {
        arguments[4][68][0].apply(i, arguments)
    }, {
        dup: 68
    }],
    79: [function(e, t, i) {
        "use strict";
        t.exports = null
    }, {}],
    80: [function(e, t, i) {
        "use strict";
        t.exports = null
    }, {}],
    81: [function(e, t, i) {
        "use strict";
        t.exports = {
            Modal: e("./ac-modal-basic/Modal"),
            Renderer: e("./ac-modal-basic/Renderer"),
            classNames: e("./ac-modal-basic/classNames"),
            dataAttributes: e("./ac-modal-basic/dataAttributes")
        }
    }, {
        "./ac-modal-basic/Modal": 82,
        "./ac-modal-basic/Renderer": 83,
        "./ac-modal-basic/classNames": 84,
        "./ac-modal-basic/dataAttributes": 85
    }],
    82: [function(e, t, i) {
        "use strict";

        
        var r = {
                addEventListener: e("@marcom/ac-dom-events/addEventListener"),
                removeEventListener: e("@marcom/ac-dom-events/removeEventListener"),
                target: e("@marcom/ac-dom-events/target")
            },
            s = {
                getScrollX: e("@marcom/ac-dom-metrics/getScrollX"),
                getScrollY: e("@marcom/ac-dom-metrics/getScrollY")
            },
            o = {
                create: e("@marcom/ac-object/create"),
                defaults: e("@marcom/ac-object/defaults")
            },
            a = e("@marcom/ac-keyboard"),
            l = e("@marcom/ac-keyboard/keyMap"),
            c = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            u = e("./Renderer"),
            h = {
                retainScrollPosition: !1
            },
            m = n.prototype = o.create(c.prototype);
        m.open = null, m.close = null, m.render = null, m.appendContent = null, m.removeContent = null, m.destroy = null, m.addKeyToClose = null, m.removeKeyToClose = null, m._bindKeyToClose = null, m._releaseKeyToClose = null, m._removeEvents = null, m._attachEvents = null, m._restoreScrollPosition = null, m._saveScrollPosition = null, t.exports = n
    }, {
        "./Renderer": 83,
        "@marcom/ac-dom-events/addEventListener": 73,
        "@marcom/ac-dom-events/removeEventListener": 74,
        "@marcom/ac-dom-events/target": 76,
        "@marcom/ac-dom-metrics/getScrollX": 79,
        "@marcom/ac-dom-metrics/getScrollY": 80,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-keyboard": 70,
        "@marcom/ac-keyboard/keyMap": 72,
        "@marcom/ac-object/create": 91,
        "@marcom/ac-object/defaults": 92
    }],
    83: [function(e, t, i) {
        "use strict";
        var n = {
                add: e("@marcom/ac-classlist/add"),
                remove: e("@marcom/ac-classlist/remove")
            },
            r = {
                defaults: e("@marcom/ac-object/defaults")
            },
            s = {
                remove: e("@marcom/ac-dom-nodes/remove"),
                isElement: e("@marcom/ac-dom-nodes/isElement")
            },
            o = e("./classNames"),
            a = e("./dataAttributes"),
            l = {
                modalElement: null,
                contentElement: null,
                closeButton: null,
                classNames: o,
                dataAttributes: a
            },
            c = null,
            u = c.prototype;
        u.render = null, u.renderCloseButton = null, u.renderModalElement = null, u.renderContentElement = null, u.appendContent = null, u.removeContent = null, u.open = null, u.close = null, u.destroy = null, u._renderElement = null, u._emptyContent = null, t.exports = c
    }, {
        "./classNames": 84,
        "./dataAttributes": 85,
        "@marcom/ac-classlist/add": 24,
        "@marcom/ac-classlist/remove": 29,
        "@marcom/ac-dom-nodes/isElement": 45,
        "@marcom/ac-dom-nodes/remove": 48,
        "@marcom/ac-object/defaults": 92
    }],
    84: [function(e, t, i) {
        "use strict";
        t.exports = {
            modalElement: "modal",
            modalOpen: "modal-open",
            documentElement: "has-modal",
            contentElement: "modal-content",
            closeButton: "modal-close"
        }
    }, {}],
    85: [function(e, t, i) {
        "use strict";
        t.exports = {
            close: "data-modal-close"
        }
    }, {}],
    86: [function(e, t, i) {
        "use strict";
        t.exports = {
            Modal: e("./ac-modal/Modal"),
            createStandardModal: e("./ac-modal/factory/createStandardModal"),
            createFullViewportModal: e("./ac-modal/factory/createFullViewportModal")
        }
    }, {
        "./ac-modal/Modal": 87,
        "./ac-modal/factory/createFullViewportModal": 88,
        "./ac-modal/factory/createStandardModal": 89
    }],
    87: [function(e, t, i) {
        "use strict";

        
        var r = e("@marcom/ac-modal-basic").Modal,
            s = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            o = e("@marcom/ac-accessibility/CircularTab"),
            a = n.prototype = Object.create(s.prototype);
        a.open = null, a.close = null, a.appendContent = null, a.removeContent = null, a.destroy = null, a.addKeyToClose = null, a.removeKeyToClose = null, a._render = null, a._bindEvents = null, a._releaseEvents = null, a._onWillOpen = null, a._onOpen = null, a._onWillClose = null, a._onClose = null, a._giveModalFocus = null, a._removeModalFocus = null, t.exports = n
    }, {
        "@marcom/ac-accessibility/CircularTab": 13,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-modal-basic": 81
    }],
    88: [function(e, t, i) {
        "use strict";

        
        var r = e("../Modal"),
            s = e("@marcom/ac-modal-basic").classNames,
            o = {
                retainScrollPosition: !0,
                renderer: {
                    classNames: {
                        documentElement: [s.documentElement].concat("has-modal-full-viewport"),
                        modalElement: [s.modalElement].concat("modal-full-viewport")
                    }
                }
            };
        t.exports = n
    }, {
        "../Modal": 87,
        "@marcom/ac-modal-basic": 81
    }],
    89: [function(e, t, i) {
        "use strict";

        
        var r = e("../Modal"),
            s = e("@marcom/ac-modal-basic").classNames,
            o = e("@marcom/ac-modal-basic").dataAttributes,
            a = {
                add: e("@marcom/ac-classlist/add")
            },
            l = {
                renderer: {
                    classNames: {
                        documentElement: [s.documentElement].concat("has-modal-standard"),
                        modalElement: [s.modalElement].concat("modal-standard")
                    }
                }
            };
        t.exports = n
    }, {
        "../Modal": 87,
        "@marcom/ac-classlist/add": 24,
        "@marcom/ac-modal-basic": 81
    }],
    90: [function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? null : null;
        e("@marcom/ac-polyfills/Array/isArray");
        var r = e("./extend"),
            s = Object.prototype.hasOwnProperty,
            o = null;
        t.exports = function(e, t) {
            return t ? o({}, e) : r({}, e)
        }
    }, {
        "./extend": 93,
        "@marcom/ac-polyfills/Array/isArray": void 0
    }],
    91: [function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : null,
            r = null;
        t.exports = function(e) {
            if (arguments.length > 1) throw new Error("Second argument not supported");
            if (null === e || "object" !== ("undefined" == typeof e ? "undefined" : n(e))) throw new TypeError("Object prototype may only be an Object.");
            return "function" == typeof Object.create ? Object.create(e) : (r.prototype = e, new r)
        }
    }, {}],
    92: [function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : null,
            r = e("./extend");
        t.exports = function(e, t) {
            if ("object" !== ("undefined" == typeof e ? "undefined" : n(e))) throw new TypeError("defaults: must provide a defaults object");
            if (t = t || {}, "object" !== ("undefined" == typeof t ? "undefined" : n(t))) throw new TypeError("defaults: options must be a typeof object");
            return r({}, e, t)
        }
    }, {
        "./extend": 93
    }],
    93: [function(e, t, i) {
        "use strict";
        e("@marcom/ac-polyfills/Array/prototype.forEach");
        var n = Object.prototype.hasOwnProperty;
        t.exports = function() {
            var e, t;
            return e = arguments.length < 2 ? [{}, arguments[0]] : [].slice.call(arguments), t = e.shift(), e.forEach(function(e) {
                if (null != e)
                    for (var i in e) n.call(e, i) && (t[i] = e[i])
            }), t
        }
    }, {
        "@marcom/ac-polyfills/Array/prototype.forEach": void 0
    }],
    94: [function(e, t, i) {
        "use strict";
        var n = e("./utils/eventTypeAvailable"),
            r = e("./shared/camelCasedEventTypes"),
            s = e("./shared/windowFallbackEventTypes"),
            o = e("./shared/prefixHelper"),
            a = {};
        t.exports = null
    }, {
        "./shared/camelCasedEventTypes": 95,
        "./shared/prefixHelper": 96,
        "./shared/windowFallbackEventTypes": 97,
        "./utils/eventTypeAvailable": 98
    }],
    95: [function(e, t, i) {
        "use strict";
        t.exports = {
            transitionend: ["webkitTransitionEnd", "MSTransitionEnd"],
            animationstart: ["webkitAnimationStart", "MSAnimationStart"],
            animationend: ["webkitAnimationEnd", "MSAnimationEnd"],
            animationiteration: ["webkitAnimationIteration", "MSAnimationIteration"],
            fullscreenchange: ["MSFullscreenChange"],
            fullscreenerror: ["MSFullscreenError"]
        }
    }, {}],
    96: [function(e, t, i) {
        "use strict";
        var n = ["-webkit-", "-moz-", "-ms-"],
            r = ["Webkit", "Moz", "ms"],
            s = ["webkit", "moz", "ms"],
            o = function() {
                this.initialize()
            },
            a = o.prototype;
        a.initialize = function() {
            this.reduced = !1, this.css = n, this.dom = r, this.evt = s
        }, a.reduce = null, t.exports = new o
    }, {}],
    97: [function(e, t, i) {
        "use strict";
        t.exports = ["transitionend", "animationstart", "animationend", "animationiteration"]
    }, {}],
    98: [function(e, t, i) {
        "use strict";
        var n = {
            window: window,
            document: document
        };
        t.exports = null
    }, {}],
    99: [function(e, t, i) {
        "use strict";

        function n(e) {
            o.call(this), this.options = r(c, e), this.loadingOptions = null, this.els = [], this.loadingQueue = null, this._queueItems = [], this._queueItemsObj = {}, this._loadOrder = [], this._timeout = null, this._didCallLoad = !1
        }
        var r = e("@marcom/ac-object/defaults"),
            s = e("@marcom/ac-queue").LiveQueue,
            o = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            a = e("@marcom/ac-raf-emitter/update"),
            l = e("@marcom/ac-raf-emitter/draw"),
            c = {
                container: document.body,
                includeContainer: !1
            },
            u = {
                loadingPoolSize: 8,
                timeout: null,
                imageDataAttribute: "data-progressive-image",
                imageAnimate: !0,
                imageAnimateClass: "progressive-image-animated"
            };
        n.Events = {
            ImageLoad: "image-load",
            Complete: "complete"
        };
        var h = n.prototype = Object.create(o.prototype);
        h.load = function(e) {
            this._didCallLoad || (this._didCallLoad = !0, this.loadingOptions = r(u, e), this.loadingQueue = new s(this.loadingOptions.loadingPoolSize), this.els = Array.from(this._getProgressiveImageElements()), this.options.includeContainer && this.options.container.hasAttribute(this._getProgressiveImageDataAttribute()) && this.els.unshift(this.options.container), l(function() {
                var e, t, i = this.els.length;
                for (e = 0; e < i; e++) t = {
                    queueItem: this.loadingQueue.enqueue(this._loadNextItem.bind(this, e), e),
                    el: this.els[e],
                    id: e
                }, this._queueItems.push(t), this._queueItemsObj[e] = t, this.loadingOptions.imageAnimate && this.els[e].classList.add(this.loadingOptions.imageAnimateClass);
                a(function() {
                    this.loadingQueue.start(), "number" == typeof this.loadingOptions.timeout && (this._timeout = setTimeout(this.cancel.bind(this), this.loadingOptions.timeout))
                }.bind(this))
            }.bind(this)))
        }, h.setVisible = function(e) {
            return new Promise(function(t, i) {
                l(function() {
                    e.removeAttribute(this._getProgressiveImageDataAttribute()), t(), e = null
                }.bind(this))
            }.bind(this))
        }, h.cancel = null, h.destroy = null, h._loadNextItem = function(e) {
            return new Promise(function(e, t, i) {
                var n = this._queueItemsObj[e];
                this._loadAndSetVisible(n.el).then(null.bind(this))
            }.bind(this, e))
        }, h._loadAndSetVisible = function(e) {
            return new Promise(function(t, i) {
                this.setVisible(e).then(function() {
                    this._getBackgroundImageSrc(e).then(function(i) {
                        this._loadImage(i).then(t), e = null
                    }.bind(this))
                }.bind(this))
            }.bind(this))
        }, h._getBackgroundImageSrc = function(e) {
            return new Promise(function(t, i) {
                a(function() {
                    var i = e.currentStyle;
                    return i || (i = window.getComputedStyle(e, !1)), e = null, 0 === i.backgroundImage.indexOf("url(") ? void t(i.backgroundImage.slice(4, -1).replace(/"/g, "")) : void t(null)
                }.bind(this))
            }.bind(this))
        }, h._getProgressiveImageDataAttribute = function() {
            return this.loadingOptions.imageDataAttribute
        }, h._getProgressiveImageCSSQuery = function() {
            return "[" + this._getProgressiveImageDataAttribute() + "]"
        }, h._getProgressiveImageElements = function() {
            return this.options.container.querySelectorAll(this._getProgressiveImageCSSQuery()) || []
        }, h._loadImage = function(e) {
            return new Promise(this._loadImagePromiseFunc.bind(this, e))
        }, h._loadImagePromiseFunc = function(e, t, i) {
            
            if (!e) return void t(null);
            var r = new Image;
            r.addEventListener("load", n), r.src = e
        }, h._clearTimeout = null, h._handleImageLoad = null, h._handleLoadingComplete = null, t.exports = n
    }, {
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-object/defaults": 92,
        "@marcom/ac-queue": 100,
        "@marcom/ac-raf-emitter/draw": 114,
        "@marcom/ac-raf-emitter/update": 116
    }],
    100: [function(e, t, i) {
        "use strict";
        t.exports = {
            Queue: e("./ac-queue/Queue"),
            QueueItem: e("./ac-queue/QueueItem"),
            LiveQueue: e("./ac-queue/LiveQueue")
        }
    }, {
        "./ac-queue/LiveQueue": 101,
        "./ac-queue/Queue": 102,
        "./ac-queue/QueueItem": 103
    }],
    101: [function(e, t, i) {
        "use strict";

        function n(e) {
            this._queue = new r, this._maxProcesses = e || 1, this._availableSlots = this._maxProcesses, this._rafId = 0, this._isRunning = !1, this._boundFunctions = {
                _run: this._run.bind(this),
                _releaseSlot: this._releaseSlot.bind(this)
            }
        }
        e("@marcom/ac-polyfills/Promise"), e("@marcom/ac-polyfills/requestAnimationFrame"), e("@marcom/ac-polyfills/Function/prototype.bind");
        var r = e("./Queue"),
            s = e("./QueueItem"),
            o = n.prototype;
        o.start = function() {
            this._isRunning && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(this._boundFunctions._run), this._isRunning = !0
        }, o.pause = null, o.stop = null, o.enqueue = function(e, t) {
            if ("function" != typeof e) throw new Error("LiveQueue can only enqueue functions");
            void 0 === t && (t = r.PRIORITY_DEFAULT);
            var i = new s(e, t);
            return this.enqueueQueueItem(i)
        }, o.enqueueQueueItem = function(e) {
            return this._queue.enqueueQueueItem(e), this._isRunning && 0 === this._rafId && this.start(), e
        }, o.dequeueQueueItem = null, o.clear = null, o.destroy = null, o.count = null, o.pending = null, o.isEmpty = null, o._run = function() {
            if (this._isRunning && (this._rafId = requestAnimationFrame(this._boundFunctions._run), !this._queue.isEmpty() && 0 !== this._availableSlots)) {
                var e = this._queue.dequeue(),
                    t = e.data();
                this._isPromise(t) && (this._retainSlot(), t.then(this._boundFunctions._releaseSlot, this._boundFunctions._releaseSlot)), this._stopRunningIfDone()
            }
        }, o._retainSlot = function() {
            this._availableSlots--
        }, o._releaseSlot = null, o._stopRunningIfDone = function() {
            0 != this._rafId && 0 === this._queue.count() && this._availableSlots == this._maxProcesses && (cancelAnimationFrame(this._rafId), this._rafId = 0)
        }, o._isPromise = function(e) {
            return !(!e || "function" != typeof e.then)
        }, t.exports = n
    }, {
        "./Queue": 102,
        "./QueueItem": 103,
        "@marcom/ac-polyfills/Function/prototype.bind": void 0,
        "@marcom/ac-polyfills/Promise": void 0,
        "@marcom/ac-polyfills/requestAnimationFrame": void 0
    }],
    102: [function(e, t, i) {
        "use strict";

        function n() {
            this._items = []
        }
        var r = e("./QueueItem"),
            s = n.prototype;
        s.enqueue = null, s.enqueueQueueItem = function(e) {
            return this._items.indexOf(e) === -1 && this._items.push(e), e
        }, s.dequeue = function() {
            this._heapSort();
            var e = this._items.length - 1,
                t = this._items[0];
            return this._items[0] = this._items[e], this._items.pop(), t
        }, s.dequeueQueueItem = null, s.peek = null, s.isEmpty = function() {
            return 0 === this._items.length
        }, s.count = function() {
            return this._items.length
        }, s.toString = null, s._heapSort = function() {
            for (var e = 0, t = this._items.length - 1; t >= 0; t--)
                for (var i = t; i > 0;) {
                    e++;
                    var n = Math.floor((i - 1) / 2);
                    if (this._items[i].compareTo(this._items[n]) >= 0) break;
                    var r = this._items[i];
                    this._items[i] = this._items[n], this._items[n] = r, i = n
                }
        }, n.PRIORITY_LOW = 10, n.PRIORITY_DEFAULT = 5, n.PRIORITY_HIGH = 1, t.exports = n
    }, {
        "./QueueItem": 103
    }],
    103: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            this.priority = t, this.data = e, this.insertionOrder = r++
        }
        var r = 0,
            s = n.prototype;
        s.compareTo = function(e) {
            return this.priority < e.priority ? -1 : this.priority > e.priority ? 1 : this.insertionOrder < e.insertionOrder ? -1 : 1
        }, s.toString = null, t.exports = n
    }, {}],
    104: [function(e, t, i) {
        "use strict";
        var n = e("@marcom/ac-shared-instance").SharedInstance,
            r = "ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance",
            s = "1.0.3",
            o = function() {
                this._currentID = 0
            };
        o.prototype.getNewID = function() {
            return this._currentID++, "raf:" + this._currentID
        }, t.exports = n.share(r, s, o)
    }, {
        "@marcom/ac-shared-instance": 119
    }],
    105: [function(e, t, i) {
        "use strict";
        t.exports = {
            RAFEmitter: e("./ac-raf-emitter/RAFEmitter"),
            ThrottledRAFEmitter: e("./ac-raf-emitter/ThrottledRAFEmitter"),
            update: e("./ac-raf-emitter/update"),
            external: e("./ac-raf-emitter/external"),
            draw: e("./ac-raf-emitter/draw"),
            cancelUpdate: e("./ac-raf-emitter/cancelUpdate"),
            cancelExternal: e("./ac-raf-emitter/cancelExternal"),
            cancelDraw: e("./ac-raf-emitter/cancelDraw")
        }
    }, {
        "./ac-raf-emitter/RAFEmitter": 106,
        "./ac-raf-emitter/ThrottledRAFEmitter": 110,
        "./ac-raf-emitter/cancelDraw": 111,
        "./ac-raf-emitter/cancelExternal": 112,
        "./ac-raf-emitter/cancelUpdate": 113,
        "./ac-raf-emitter/draw": 114,
        "./ac-raf-emitter/external": 115,
        "./ac-raf-emitter/update": 116
    }],
    106: [function(e, t, i) {
        "use strict";

        function n(e) {
            e = e || {}, s.call(this), this.id = a.getNewID(), this.executor = e.executor || o, this._reset(), this._willRun = !1, this._didDestroy = !1
        }
        var r, s = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            o = e("@marcom/ac-raf-executor/sharedRAFExecutorInstance"),
            a = e("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");
        r = n.prototype = Object.create(s.prototype), r.run = function() {
            return this._willRun || (this._willRun = !0), this._subscribe()
        }, r.cancel = null, r.destroy = null, r.willRun = null, r.isRunning = null, r._subscribe = function() {
            return this.executor.subscribe(this)
        }, r._unsubscribe = null, r._onAnimationFrameStart = function(e) {
            this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", e))
        }, r._onAnimationFrameEnd = function(e) {
            this._willRun || (this.trigger("stop", e), this._reset())
        }, r._reset = function() {
            this._didEmitFrameData = !1, this._isRunning = !1
        }, t.exports = n
    }, {
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 104,
        "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 118
    }],
    107: [function(e, t, i) {
        "use strict";
        var n = e("./SingleCallRAFEmitter"),
            r = function(e) {
                this.rafEmitter = new n, this.rafEmitter.on(e, this._onRAFExecuted.bind(this)), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._frameCallbacks = [], this._nextFrameCallbacks = [], this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
            },
            s = r.prototype;
        s.requestAnimationFrame = function(e) {
            return this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, e), this._nextFrameCallbacksLength += 2, this._currentFrameID
        }, s.cancelAnimationFrame = null, s._onRAFExecuted = function(e) {
            for (this._frameCallbacks = this._nextFrameCallbacks, this._frameCallbackLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks = [], this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e)
        }, t.exports = r
    }, {
        "./SingleCallRAFEmitter": 109
    }],
    108: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterface"),
            r = function() {
                this.events = {}
            },
            s = r.prototype;
        s.requestAnimationFrame = function(e) {
            return this.events[e] || (this.events[e] = new n(e)), this.events[e].requestAnimationFrame
        }, s.cancelAnimationFrame = function(e) {
            return this.events[e] || (this.events[e] = new n(e)), this.events[e].cancelAnimationFrame
        }, t.exports = new r
    }, {
        "./RAFInterface": 107
    }],
    109: [function(e, t, i) {
        "use strict";
        var n = e("./RAFEmitter"),
            r = function(e) {
                n.call(this, e)
            },
            s = r.prototype = Object.create(n.prototype);
        s._subscribe = function() {
            return this.executor.subscribe(this, !0)
        }, t.exports = r
    }, {
        "./RAFEmitter": 106
    }],
    110: [function(e, t, i) {
        "use strict";

        
        var r, s = e("./RAFEmitter"),
            o = e("@marcom/ac-object/clone"),
            a = e("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        r = n.prototype = Object.create(a.prototype), r.setFps = null, r.getFps = null, r.run = null, r.cancel = null, r.willRun = null, r.isRunning = null, r.destroy = null, r._onRAFEmitterUpdate = null, r._onRAFEmitterDraw = null, r._onRAFEmitterStop = null, t.exports = n
    }, {
        "./RAFEmitter": 106,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-object/clone": 90
    }],
    111: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.cancelAnimationFrame("draw")
    }, {
        "./RAFInterfaceController": 108
    }],
    112: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.cancelAnimationFrame("external")
    }, {
        "./RAFInterfaceController": 108
    }],
    113: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.cancelAnimationFrame("update")
    }, {
        "./RAFInterfaceController": 108
    }],
    114: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("draw")
    }, {
        "./RAFInterfaceController": 108
    }],
    115: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("external")
    }, {
        "./RAFInterfaceController": 108
    }],
    116: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("update")
    }, {
        "./RAFInterfaceController": 108
    }],
    117: [function(e, t, i) {
        "use strict";

        function n(e) {
            e = e || {}, this._reset(), this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
        }
        e("@marcom/ac-polyfills/performance/now");
        var r;
        r = n.prototype, r.subscribe = function(e, t) {
            return this._totalSubscribeCount++, this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id), this._nextFrameSubscribers[e.id] = e, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
        }, r.unsubscribe = null, r.trigger = function(e, t) {
            var i;
            for (i = 0; i < this._subscriberArrayLength; i++) null !== this._subscribers[this._subscribersOrder[i]] && this._subscribers[this._subscribersOrder[i]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[i]].trigger(e, t)
        }, r.destroy = null, r.useExternalAnimationFrame = null, r._run = function() {
            if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), !0
        }, r._cancel = null, r._onSubscribersAnimationFrameStart = function(e) {
            var t;
            for (t = 0; t < this._subscriberArrayLength; t++) null !== this._subscribers[this._subscribersOrder[t]] && this._subscribers[this._subscribersOrder[t]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[t]]._onAnimationFrameStart(e)
        }, r._onSubscribersAnimationFrameEnd = function(e) {
            var t;
            for (t = 0; t < this._subscriberArrayLength; t++) null !== this._subscribers[this._subscribersOrder[t]] && this._subscribers[this._subscribersOrder[t]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[t]]._onAnimationFrameEnd(e)
        }, r._onAnimationFrame = function(e) {
            this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = e - this.lastFrameTime, this.lastFrameTime = e, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = e, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this._onSubscribersAnimationFrameStart(this._rafData), this.trigger("update", this._rafData), this.trigger("external", this._rafData), this.trigger("draw", this._rafData), this._onSubscribersAnimationFrameEnd(this._rafData), this._willRun || this._reset()
        }, r._onExternalAnimationFrame = null, r._reset = function() {
            this._rafData = {
                time: 0,
                delta: 0,
                fps: 0,
                naturalFps: 0,
                timeNow: 0
            }, this._subscribers = {}, this._subscribersOrder = [], this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0
        }, t.exports = n
    }, {
        "@marcom/ac-polyfills/performance/now": void 0
    }],
    118: [function(e, t, i) {
        "use strict";
        var n = e("@marcom/ac-shared-instance").SharedInstance,
            r = "ac-raf-executor:sharedRAFExecutorInstance",
            s = "2.0.1",
            o = e("./RAFExecutor");
        t.exports = n.share(r, s, o)
    }, {
        "./RAFExecutor": 117,
        "@marcom/ac-shared-instance": 119
    }],
    119: [function(e, t, i) {
        "use strict";
        t.exports = {
            SharedInstance: e("./ac-shared-instance/SharedInstance")
        }
    }, {
        "./ac-shared-instance/SharedInstance": 120
    }],
    120: [function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? null : null,
            r = window,
            s = "AC",
            o = "SharedInstance",
            a = r[s],
            l = function() {
                var e = {};
                return {
                    get: function(t, i) {
                        var n = null;
                        return e[t] && e[t][i] && (n = e[t][i]), n
                    },
                    set: function(t, i, n) {
                        return e[t] || (e[t] = {}), "function" == typeof n ? e[t][i] = new n : e[t][i] = n, e[t][i]
                    },
                    share: function(e, t, i) {
                        var n = this.get(e, t);
                        return n || (n = this.set(e, t, i)), n
                    },
                    remove: null
                }
            }();
        a || (a = r[s] = {}), a[o] || (a[o] = l), t.exports = a[o]
    }, {}],
    121: [function(e, t, i) {
        arguments[4][54][0].apply(i, arguments)
    }, {
        "./ac-event-emitter-micro/EventEmitterMicro": 122,
        dup: 54
    }],
    122: [function(e, t, i) {
        arguments[4][55][0].apply(i, arguments)
    }, {
        dup: 55
    }],
    123: [function(e, t, i) {
        "use strict";
        t.exports = {
            majorVersionNumber: "3.x"
        }
    }, {}],
    124: [function(e, t, i) {
        "use strict";

        function n(e) {
            e = e || {}, s.call(this), this.id = a.getNewID(), this.executor = e.executor || o, this._reset(), this._willRun = !1, this._didDestroy = !1
        }
        var r, s = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            o = e("./sharedRAFExecutorInstance"),
            a = e("./sharedRAFEmitterIDGeneratorInstance");
        r = n.prototype = Object.create(s.prototype), r.run = function() {
            return this._willRun || (this._willRun = !0), this._subscribe()
        }, r.cancel = null, r.destroy = null, r.willRun = null, r.isRunning = null, r._subscribe = null, r._unsubscribe = null, r._onAnimationFrameStart = function(e) {
            this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", e))
        }, r._onAnimationFrameEnd = function(e) {
            this._willRun || (this.trigger("stop", e), this._reset())
        }, r._reset = function() {
            this._didEmitFrameData = !1, this._isRunning = !1
        }, t.exports = n
    }, {
        "./sharedRAFEmitterIDGeneratorInstance": 132,
        "./sharedRAFExecutorInstance": 133,
        "@marcom/ac-event-emitter-micro": 121
    }],
    125: [function(e, t, i) {
        "use strict";

        function n(e) {
            e = e || {}, this._reset(), this.updatePhases(), this.eventEmitter = new s, this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
        }
        var r, s = e("@marcom/ac-event-emitter-micro/EventEmitterMicro");
        r = n.prototype, r.frameRequestedPhase = "requested", r.startPhase = "start", r.runPhases = ["update", "external", "draw"], r.endPhase = "end", r.disabledPhase = "disabled", r.beforePhaseEventPrefix = "before:", r.afterPhaseEventPrefix = "after:", r.subscribe = function(e, t) {
            return this._totalSubscribeCount++, this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id), this._nextFrameSubscribers[e.id] = e, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
        }, r.subscribeImmediate = null, r.unsubscribe = null, r.getSubscribeID = null, r.destroy = null, r.useExternalAnimationFrame = null, r.updatePhases = function() {
            this.phases || (this.phases = []), this.phases.length = 0, this.phases.push(this.frameRequestedPhase), this.phases.push(this.startPhase), Array.prototype.push.apply(this.phases, this.runPhases), this.phases.push(this.endPhase), this._runPhasesLength = this.runPhases.length, this._phasesLength = this.phases.length
        }, r._run = function() {
            if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this.phase === this.disabledPhase && (this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex]), !0
        }, r._cancel = null, r._onAnimationFrame = function(e) {
            for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = e - this.lastFrameTime, this.lastFrameTime = e, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = e, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
            for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
                for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
                this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
            }
            for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy === !1 && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
            this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
        }, r._onExternalAnimationFrame = null, r._reset = function() {
            this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
        }, t.exports = n
    }, {
        "@marcom/ac-event-emitter-micro/EventEmitterMicro": 122
    }],
    126: [function(e, t, i) {
        "use strict";
        var n = e("./SingleCallRAFEmitter"),
            r = function(e) {
                this.phase = e, this.rafEmitter = new n, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
            },
            s = r.prototype;
        s.requestAnimationFrame = function(e, t) {
            return t === !0 && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, e), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, e), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, e), this._nextFrameCallbacksLength += 2), this._currentFrameID
        }, s.cancelAnimationFrame = null, s._onRAFExecuted = function(e) {
            for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e);
            this._frameCallbacks.length = 0, this._frameCallbackLength = 0
        }, s._onBeforeRAFExecutorStart = function() {
            Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)), this._currentFrameCallbacksLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks.length = 0, this._nextFrameCallbacksLength = 0
        }, s._onBeforeRAFExecutorPhase = function() {
            this._phaseActive = !0, Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)), this._frameCallbackLength = this._currentFrameCallbacksLength, this._currentFrameCallbacks.length = 0, this._currentFrameCallbacksLength = 0
        }, s._onAfterRAFExecutorPhase = function() {
            this._phaseActive = !1
        }, s._cachePhaseIndex = function() {
            this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
        }, s._cancelRunningAnimationFrame = null, s._cancelCurrentAnimationFrame = null, s._cancelNextAnimationFrame = null, t.exports = r
    }, {
        "./SingleCallRAFEmitter": 128
    }],
    127: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterface"),
            r = function() {
                this.events = {}
            },
            s = r.prototype;
        s.requestAnimationFrame = function(e) {
            return this.events[e] || (this.events[e] = new n(e)), this.events[e].requestAnimationFrame
        }, s.cancelAnimationFrame = function(e) {
            return this.events[e] || (this.events[e] = new n(e)), this.events[e].cancelAnimationFrame
        }, t.exports = new r
    }, {
        "./RAFInterface": 126
    }],
    128: [function(e, t, i) {
        "use strict";
        var n = e("./RAFEmitter"),
            r = function(e) {
                n.call(this, e)
            },
            s = r.prototype = Object.create(n.prototype);
        s._subscribe = function() {
            return this.executor.subscribe(this, !0)
        }, t.exports = r
    }, {
        "./RAFEmitter": 124
    }],
    129: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.cancelAnimationFrame("update")
    }, {
        "./RAFInterfaceController": 127
    }],
    130: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("draw")
    }, {
        "./RAFInterfaceController": 127
    }],
    131: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("external")
    }, {
        "./RAFInterfaceController": 127
    }],
    132: [function(e, t, i) {
        "use strict";
        var n = e("@marcom/ac-shared-instance").SharedInstance,
            r = e("../.release-info.js").majorVersionNumber,
            s = function() {
                this._currentID = 0
            };
        s.prototype.getNewID = function() {
            return this._currentID++, "raf:" + this._currentID
        }, t.exports = n.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", r, s)
    }, {
        "../.release-info.js": 123,
        "@marcom/ac-shared-instance": 135
    }],
    133: [function(e, t, i) {
        "use strict";
        var n = e("@marcom/ac-shared-instance").SharedInstance,
            r = e("../.release-info.js").majorVersionNumber,
            s = e("./RAFExecutor");
        t.exports = n.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", r, s)
    }, {
        "../.release-info.js": 123,
        "./RAFExecutor": 125,
        "@marcom/ac-shared-instance": 135
    }],
    134: [function(e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("update")
    }, {
        "./RAFInterfaceController": 127
    }],
    135: [function(e, t, i) {
        arguments[4][119][0].apply(i, arguments)
    }, {
        "./ac-shared-instance/SharedInstance": 136,
        dup: 119
    }],
    136: [function(e, t, i) {
        arguments[4][120][0].apply(i, arguments)
    }, {
        dup: 120
    }],
    137: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
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
        var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            l = e("./Model/AnimSystemModel"),
            c = e("./Keyframes/Keyframe"),
            u = e("./Keyframes/KeyframeCSSClass"),
            h = e("./Keyframes/KeyframeDiscreteEvent"),
            m = e("./ScrollGroup"),
            d = e("./TimeGroup"),
            f = e("./utils/arrayToObject"),
            p = {
                create: e("@marcom/ac-raf-emitter/RAFEmitter"),
                update: e("@marcom/ac-raf-emitter/update"),
                cancelUpdate: e("@marcom/ac-raf-emitter/cancelUpdate"),
                external: e("@marcom/ac-raf-emitter/external"),
                draw: e("@marcom/ac-raf-emitter/draw")
            },
            v = null,
            _ = function(e) {
                function t() {
                    n(this, t);
                    var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    if (v) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
                    return v = e, e.groups = [], e.scrollSystems = [], e.timeSystems = [], e._forceUpdateRAFId = -1, e.setupEvents(), e
                }
                return s(t, e), o(t, [{
                    key: "initialize",
                    value: function() {
                        this.initializeModel(), this.createDOMGroups(), this.createDOMKeyframes()
                    }
                }, {
                    key: "destroy",
                    value: null
                }, {
                    key: "createTimeGroup",
                    value: null
                }, {
                    key: "createScrollGroup",
                    value: function(e) {
                        if (!e) throw "AnimSystem scroll based groups must supply an HTMLElement";
                        var t = new m(e, this);
                        return this.groups.push(t), this.scrollSystems.push(t), this.trigger(l.EVENTS.ON_GROUP_CREATED, t), t
                    }
                }, {
                    key: "removeGroup",
                    value: null
                }, {
                    key: "createDOMGroups",
                    value: function() {
                        var e = this;
                        document.body.setAttribute("data-anim-scroll-group", "body"), document.querySelectorAll("[data-anim-scroll-group]").forEach(function(t) {
                            return e.createScrollGroup(t)
                        }), document.querySelectorAll("[data-anim-time-group]").forEach(null), this.trigger(l.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
                    }
                }, {
                    key: "createDOMKeyframes",
                    value: function() {
                        var e = this,
                            t = [];
                        [c.DATA_ATTRIBUTE, u.DATA_ATTRIBUTE, h.DATA_ATTRIBUTE].forEach(function(e) {
                            for (var i = 0; i < 12; i++) t.push(e + (0 === i ? "" : "-" + (i - 1)))
                        });
                        for (var i = 0; i < t.length; i++)
                            for (var n = t[i], r = document.querySelectorAll("[" + n + "]"), s = 0; s < r.length; s++) {
                                var o = r[s],
                                    a = JSON.parse(o.getAttribute(n));
                                this.addKeyframe(o, a)
                            }
                        p.update(function() {
                            return e.groups.forEach(function(e) {
                                return e.onKeyframesDirty({
                                    preventOnScroll: !0
                                })
                            })
                        }, !0), p.update(function() {
                            e.groups.forEach(function(e) {
                                return e.trigger(l.EVENTS.ON_DOM_KEYFRAMES_CREATED, e)
                            }), e.trigger(l.EVENTS.ON_DOM_KEYFRAMES_CREATED, e), e.groups.forEach(function(e) {
                                return e.reconcile()
                            }), e.onScroll()
                        }, !0)
                    }
                }, {
                    key: "initializeModel",
                    value: function() {
                        l.pageMetrics.windowHeight = window.innerHeight, l.pageMetrics.windowWidth = window.innerWidth, l.pageMetrics.scrollY = window.scrollY || window.pageYOffset, l.pageMetrics.scrollX = window.scrollX || window.pageXOffset, l.pageMetrics.breakpoint = l.getBreakpoint();
                        var e = document.documentElement.getBoundingClientRect();
                        l.pageMetrics.documentOffsetX = e.left + l.pageMetrics.scrollX, l.pageMetrics.documentOffsetY = e.top + l.pageMetrics.scrollY
                    }
                }, {
                    key: "setupEvents",
                    value: function() {
                        this.onScroll = this.onScroll.bind(this), this.onResizedDebounced = this.onResizedDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), window.addEventListener("scroll", this.onScroll), window.addEventListener("resize", this.onResizeImmediate)
                    }
                }, {
                    key: "determineActiveKeyframes",
                    value: null
                }, {
                    key: "onScroll",
                    value: function() {
                        l.pageMetrics.scrollY = window.scrollY || window.pageYOffset, l.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
                        for (var e = 0, t = this.scrollSystems.length; e < t; e++) this.scrollSystems[e]._onScroll();
                        this.trigger(l.PageEvents.ON_SCROLL, l.pageMetrics)
                    }
                }, {
                    key: "onResizeImmediate",
                    value: null
                }, {
                    key: "onResizedDebounced",
                    value: null
                }, {
                    key: "forceUpdate",
                    value: null
                }, {
                    key: "addKeyframe",
                    value: null
                }, {
                    key: "getGroupForTarget",
                    value: null
                }, {
                    key: "getControllerForTarget",
                    value: null
                }]), t
            }(a);
        t.exports = new _
    }, {
        "./Keyframes/Keyframe": 139,
        "./Keyframes/KeyframeCSSClass": 140,
        "./Keyframes/KeyframeDiscreteEvent": 141,
        "./Model/AnimSystemModel": 142,
        "./ScrollGroup": 151,
        "./TimeGroup": 152,
        "./utils/arrayToObject": 153,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-raf-emitter/RAFEmitter": 124,
        "@marcom/ac-raf-emitter/cancelUpdate": 129,
        "@marcom/ac-raf-emitter/draw": 130,
        "@marcom/ac-raf-emitter/external": 131,
        "@marcom/ac-raf-emitter/update": 134
    }],
    138: [function(e, t, i) {
        "use strict";

        

        

        function s(e, t) {
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
        var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = null,
            l = e("./Model/AnimSystemModel"),
            c = (e("./Keyframes/Keyframe"), e("./Keyframes/KeyframeCSSClass")),
            u = e("./Model/InferKeyframeFromProps"),
            h = e("./utils/arrayToObject"),
            m = e("./Model/UUID"),
            d = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            f = e("@marcom/decompose-css-transform"),
            p = {
                update: e("@marcom/ac-raf-emitter/update"),
                external: e("@marcom/ac-raf-emitter/external"),
                draw: e("@marcom/ac-raf-emitter/draw")
            },
            v = function(e) {
                
                return s(t, e), o(t, [{
                    key: "destroy",
                    value: null
                }, {
                    key: "remove",
                    value: null
                }, {
                    key: "updateCachedValuesFromElement",
                    value: null
                }, {
                    key: "addKeyframe",
                    value: null
                }, {
                    key: "needsUpdate",
                    value: null
                }, {
                    key: "updateLocalProgress",
                    value: null
                }, {
                    key: "reconcile",
                    value: null
                }, {
                    key: "determineActiveKeyframes",
                    value: null
                }, {
                    key: "onDOMRead",
                    value: null
                }, {
                    key: "onDOMWrite",
                    value: null
                }, {
                    key: "onDOMWriteForObject",
                    value: null
                }, {
                    key: "onDOMWriteForElement",
                    value: null
                }, {
                    key: "handleEventDispatch",
                    value: null
                }, {
                    key: "updateAnimationConstraints",
                    value: null
                }, {
                    key: "refreshMetrics",
                    value: null
                }, {
                    key: "updateDeferredPropertyValues",
                    value: null
                }, {
                    key: "getBounds",
                    value: null
                }, {
                    key: "getNearestKeyframeForAttribute",
                    value: null
                }, {
                    key: "getAllKeyframesForAttribute",
                    value: null
                }, {
                    key: "updateKeyframe",
                    value: null
                }, {
                    key: "removeKeyframe",
                    value: null
                }, {
                    key: "updateAnimation",
                    value: null
                }]), t
            }(d);
        Object.defineProperty(v.prototype, "parentElementMetrics", {
            get: null
        }), t.exports = v
    }, {
        "./Keyframes/Keyframe": 139,
        "./Keyframes/KeyframeCSSClass": 140,
        "./Model/AnimSystemModel": 142,
        "./Model/InferKeyframeFromProps": 145,
        "./Model/UUID": 146,
        "./utils/arrayToObject": 153,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-raf-emitter/draw": 130,
        "@marcom/ac-raf-emitter/external": 131,
        "@marcom/ac-raf-emitter/update": 134,
        "@marcom/decompose-css-transform": 155
    }],
    139: [function(e, t, i) {
        "use strict";

        
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("../Model/AnimSystemModel"),
            o = e("@marcom/sm-math-utils"),
            a = e("../Model/EasingFunctions"),
            l = e("../Model/UnitBezier"),
            c = e("../utils/arrayToObject"),
            u = function() {
                
                return r(e, [{
                    key: "destroy",
                    value: null
                }, {
                    key: "remove",
                    value: null
                }, {
                    key: "parseOptions",
                    value: null
                }, {
                    key: "overwriteProps",
                    value: null
                }, {
                    key: "updateLocalProgress",
                    value: null
                }, {
                    key: "reconcile",
                    value: null
                }, {
                    key: "reset",
                    value: null
                }, {
                    key: "onDOMRead",
                    value: null
                }, {
                    key: "isInRange",
                    value: null
                }, {
                    key: "setEnabled",
                    value: null
                }, {
                    key: "updateAnimationConstraints",
                    value: null
                }, {
                    key: "updateAnimatedValueConstraints",
                    value: null
                }]), e
            }();
        u.DATA_ATTRIBUTE = "data-anim-tween", t.exports = u
    }, {
        "../Model/AnimSystemModel": 142,
        "../Model/EasingFunctions": 143,
        "../Model/UnitBezier": 147,
        "../utils/arrayToObject": 153,
        "@marcom/sm-math-utils": 156
    }],
    140: [function(e, t, i) {
        "use strict";

        

        

        function s(e, t) {
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
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? null : null,
            a = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            l = e("./Keyframe"),
            c = e("../Model/AnimSystemModel.js"),
            u = function(e) {
                
                return s(t, e), a(t, [{
                    key: "parseOptions",
                    value: null
                }, {
                    key: "updateLocalProgress",
                    value: null
                }, {
                    key: "_apply",
                    value: null
                }, {
                    key: "_unapply",
                    value: null
                }, {
                    key: "isValidStyleProperty",
                    value: null
                }, {
                    key: "reconcile",
                    value: null
                }, {
                    key: "onDOMRead",
                    value: null
                }, {
                    key: "updateAnimatedValueConstraints",
                    value: null
                }]), t
            }(l);
        u.TRIGGER_TYPE_CSS_CLASS = 0, u.TRIGGER_TYPE_STYLE_PROPERTY = 1, u.DATA_ATTRIBUTE = "data-anim-classname", t.exports = u
    }, {
        "../Model/AnimSystemModel.js": 142,
        "./Keyframe": 139
    }],
    141: [function(e, t, i) {
        "use strict";

        

        

        function s(e, t) {
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
        var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = null,
            l = e("./Keyframe"),
            c = e("../Model/AnimSystemModel.js"),
            u = function(e) {
                
                return s(t, e), o(t, [{
                    key: "parseOptions",
                    value: null
                }, {
                    key: "updateLocalProgress",
                    value: null
                }, {
                    key: "_trigger",
                    value: null
                }, {
                    key: "updateAnimationConstraints",
                    value: null
                }, {
                    key: "reset",
                    value: null
                }, {
                    key: "onDOMRead",
                    value: null
                }, {
                    key: "reconcile",
                    value: null
                }, {
                    key: "updateAnimatedValueConstraints",
                    value: null
                }]), t
            }(l);
        u.DATA_ATTRIBUTE = "data-anim-event", t.exports = u
    }, {
        "../Model/AnimSystemModel.js": 142,
        "./Keyframe": 139
    }],
    142: [function(e, t, i) {
        "use strict";
        var n = {
            GUI_INSTANCE: null,
            ANIM_INSTANCE: null,
            VIEWPORT_EMITTER_ELEMENT: void 0,
            LOCAL_STORAGE_KEYS: {
                GuiPosition: "GuiPosition-0"
            },
            RESIZE_TIMEOUT: -1,
            BREAKPOINTS: [{
                name: "S",
                longName: "small",
                mediaQuery: "only screen and (max-width: 735px)"
            }, {
                name: "M",
                longName: "medium",
                mediaQuery: "only screen and (max-width: 1068px)"
            }, {
                name: "L",
                longName: "xlarge",
                mediaQuery: "only screen and (min-width: 1442px)"
            }, {
                name: "L",
                longName: "large",
                mediaQuery: "only screen and (min-width: 1069px)"
            }],
            getBreakpoint: function() {
                for (var e = 0; e < n.BREAKPOINTS.length; e++) {
                    var t = n.BREAKPOINTS[e],
                        i = window.matchMedia(t.mediaQuery);
                    if (i.matches) return t.name
                }
            },
            KeyframeDefaults: {
                ease: .1,
                epsilon: .05,
                easeFunctionString: "linear",
                easeFunction: "linear",
                hold: !1,
                snapAtCreation: !1,
                toggle: !1,
                breakpointMask: "SMLX",
                event: "",
                disabledWhen: [],
                cssClass: ""
            },
            KeyframeTypes: {
                Interpolation: 0,
                InterpolationForward: 1,
                CSSClass: 2,
                Event: 3
            },
            EVENTS: {
                ON_DOM_KEYFRAMES_CREATED: "ON_DOM_KEYFRAMES_CREATED",
                ON_DOM_GROUPS_CREATED: "ON_DOM_GROUPS_CREATED",
                ON_GROUP_CREATED: "ON_GROUP_CREATED",
                ON_KEYFRAME_UPDATED: "ON_KEYFRAME_UPDATED",
                ON_TIMELINE_START: "ON_TIMELINE_START",
                ON_TIMELINE_UPDATE: "ON_TIMELINE_UPDATE",
                ON_TIMELINE_COMPLETE: "ON_TIMELINE_COMPLETE"
            },
            PageEvents: {
                ON_SCROLL: "ON_SCROLL",
                ON_RESIZE_IMMEDIATE: "ON_RESIZE_IMMEDIATE",
                ON_RESIZE_DEBOUNCED: "ON_RESIZE_DEBOUNCED",
                ON_BREAKPOINT_CHANGE: "ON_BREAKPOINT_CHANGE"
            },
            KeyframeJSONReservedWords: ["event", "cssClass", "style", "relativeTo", "start", "end", "epsilon", "easeFunction", "ease", "breakpointMask", "disabledWhen"],
            TargetValue: null,
            Timeline: function() {
                this.local = 0, this.localUnclamped = 0
            },
            ViewableRange: function(e, t) {
                this.a = e.top - t, this.a < 0 && (this.a = e.top), this.b = e.top, this.d = e.bottom, this.c = Math.max(this.d - t, this.b)
            },
            pageMetrics: new function() {
                this.scrollX = 0, this.scrollY = 0, this.windowWidth = 0, this.windowHeight = 0, this.documentOffsetX = 0, this.documentOffsetY = 0, this.previousBreakpoint = "", this.breakpoint = ""
            },
            EventObject: null,
            KeyframeComparison: null,
            AnimInfo: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.isGroup = i, this.group = e, this.controller = t, this.controllers = []
            }
        };
        t.exports = n
    }, {}],
    143: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function s() {
            n(this, s), this.linear = null, this.easeInQuad = null, this.easeOutQuad = null, this.easeInOutQuad = null, this.easeInSin = null, this.easeOutSin = null, this.easeInOutSin = null, this.easeInElastic = null, this.easeOutElastic = null, this.easeInOutElastic = null, this.easeOutBack = null, this.easeInCubic = null, this.easeOutCubic = null, this.easeInOutCubic = null, this.easeInQuart = null, this.easeOutQuart = null, this.easeInOutQuart = null, this.easeInQuint = null, this.easeOutQuint = null, this.easeInOutQuint = null
        };
        t.exports = new r
    }, {}],
    144: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("./AnimSystemModel"),
            o = null,
            a = function() {
                function e() {
                    n(this, e), this._metrics = new WeakMap
                }
                return r(e, [{
                    key: "destroy",
                    value: null
                }, {
                    key: "add",
                    value: function(e) {
                        var t = this._metrics.get(e);
                        if (t) return t;
                        var i = new l(e);
                        return this._metrics.set(e, i), this._refreshMetrics(e, i)
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        return this._metrics.get(e)
                    }
                }, {
                    key: "refreshCollection",
                    value: null
                }, {
                    key: "refreshMetrics",
                    value: null
                }, {
                    key: "_refreshMetrics",
                    value: function(e, t) {
                        if (t = t || this._metrics.get(e), !(e instanceof Element)) return t.width = o(e.width, 0), t.height = o(e.height, 0), t.top = o(e.top, 0), t.left = o(e.left, 0), t.right = t.left + t.width, t.bottom = t.top + t.height, t;
                        if (void 0 === e.offsetWidth) {
                            var i = e.getBoundingClientRect();
                            return t.width = i.width, t.height = i.height, t.top = s.pageMetrics.scrollY + i.top, t.left = s.pageMetrics.scrollX + i.left, t.right = t.left + t.width, t.bottom = t.top + t.height, t
                        }
                        t.width = e.offsetWidth, t.height = e.offsetHeight, t.top = s.pageMetrics.documentOffsetY, t.left = s.pageMetrics.documentOffsetX;
                        for (var n = e; n;) t.top += n.offsetTop, t.left += n.offsetLeft, n = n.offsetParent;
                        return t.right = t.left + t.width, t.bottom = t.top + t.height, t
                    }
                }]), e
            }(),
            l = function() {
                function e(t) {
                    n(this, e), this.top = 0, this.bottom = 0, this.left = 0, this.right = 0, this.height = 0, this.width = 0
                }
                return r(e, [{
                    key: "toString",
                    value: null
                }, {
                    key: "toObject",
                    value: null
                }]), e
            }();
        t.exports = a
    }, {
        "./AnimSystemModel": 142
    }],
    145: [function(e, t, i) {
        "use strict";
        var n = e("./AnimSystemModel"),
            r = e("../Keyframes/Keyframe"),
            s = e("../Keyframes/KeyframeDiscreteEvent"),
            o = e("../Keyframes/KeyframeCSSClass"),
            a = null;
        t.exports = null
    }, {
        "../Keyframes/Keyframe": 139,
        "../Keyframes/KeyframeCSSClass": 140,
        "../Keyframes/KeyframeDiscreteEvent": 141,
        "./AnimSystemModel": 142
    }],
    146: [function(e, t, i) {
        "use strict";
        t.exports = null
    }, {}],
    147: [function(e, t, i) {
        "use strict";

        
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = 1e-5,
            o = Math.abs,
            a = 5,
            l = function() {
                
                return r(e, [{
                    key: "sampleCurveX",
                    value: null
                }, {
                    key: "sampleCurveY",
                    value: null
                }, {
                    key: "sampleCurveDerivativeX",
                    value: null
                }, {
                    key: "solveCurveX",
                    value: null
                }, {
                    key: "solve",
                    value: null
                }]), e
            }(),
            c = /\d*\.?\d+/g;
        l.fromCSSString = null, t.exports = l
    }, {}],
    148: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("../Model/AnimSystemModel"),
            o = e("./Operations"),
            a = /([-|+])?(\d+\.?\d*)(px|vh|vw|pw|ph|%w|%h|rw|rh|%)?|([-+*\/])/g,
            l = /^[-+]?(?:[0-9]{0,30}\.)?[0-9]{1,30}(?:[Ee][-+]?[1-2]?[0-9])?$/g,
            c = function() {
                function e(t) {
                    n(this, e), this.group = t
                }
                return r(e, [{
                    key: "parse",
                    value: null
                }, {
                    key: "parseArray",
                    value: null
                }, {
                    key: "parseExpression",
                    value: null
                }, {
                    key: "parseSplitUnit",
                    value: null
                }, {
                    key: "captureParenthesis",
                    value: null
                }, {
                    key: "isUnitlessNumber",
                    value: null
                }, {
                    key: "destroy",
                    value: null
                }, {
                    key: "logParts",
                    value: null
                }]), e
            }();
        t.exports = c
    }, {
        "../Model/AnimSystemModel": 142,
        "./Operations": 149
    }],
    149: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function s() {
            n(this, s), this.add = null, this.sub = null, this.mul = null, this.div = null, this.add.friendlyName = "add", this.sub.friendlyName = "sub", this.mul.friendlyName = "mul", this.div.friendlyName = "div", this.add.priority = 0, this.sub.priority = 0, this.mul.priority = 1, this.div.priority = 1, this.GetOpCode = null
        };
        t.exports = new r
    }, {}],
    150: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = function() {
                function e(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    n(this, e), this.group = t, this.groupIsTimeBased = i
                }
                return r(e, [{
                    key: "parse",
                    value: null
                }, {
                    key: "destroy",
                    value: null
                }]), e
            }();
        t.exports = s
    }, {}],
    151: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
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
        var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = null,
            l = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            c = e("@marcom/sm-math-utils"),
            u = e("./utils/arrayToObject"),
            h = e("./Model/AnimSystemModel"),
            m = e("./Model/ElementMetricsLookup"),
            d = e("./Parsing/ExpressionParser"),
            f = e("./Parsing/TimeParser"),
            p = e("./KeyframeController"),
            v = {
                create: e("@marcom/ac-raf-emitter/RAFEmitter"),
                update: e("@marcom/ac-raf-emitter/update"),
                draw: e("@marcom/ac-raf-emitter/draw")
            },
            _ = function(e) {
                function t(e, i) {
                    n(this, t);
                    var s = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return s.anim = i, s.element = e, s.name = s.name || e.getAttribute("data-anim-scroll-group"), s.isEnabled = !0, s.timelines = new h.Timeline, s.metrics = new m, s.metrics.add(s.element), s.expressionParser = new d(s), s.timeParser = new f(s), s.boundsMin = 0, s.boundsMax = 0, s.lastPosition = 0, s.timelineUpdateRequired = !1, s._keyframesDirty = !1, s.viewableRange = s.createViewableRange(), s.defaultEase = h.KeyframeDefaults.ease, s.keyframeControllers = [], s.updateProgress(s.getPosition()), s.onDOMRead = s.onDOMRead.bind(s), s.onDOMWrite = s.onDOMWrite.bind(s), s.gui = null, s.finalizeInit(), s
                }
                return s(t, e), o(t, [{
                    key: "finalizeInit",
                    value: function() {
                        this.element._animInfo = new h.AnimInfo(this, null, (!0)), this.setupRAFEmitter()
                    }
                }, {
                    key: "destroy",
                    value: null
                }, {
                    key: "removeKeyframeController",
                    value: null
                }, {
                    key: "remove",
                    value: null
                }, {
                    key: "setupRAFEmitter",
                    value: function(e) {
                        var t = this;
                        this.rafEmitter && this.rafEmitter.destroy(), this.rafEmitter = e || new v.create, this.rafEmitter.on("update", this.onDOMRead), this.rafEmitter.on("draw", this.onDOMWrite), this.rafEmitter.once("external", null)
                    }
                }, {
                    key: "requestDOMChange",
                    value: null
                }, {
                    key: "onDOMRead",
                    value: null
                }, {
                    key: "onDOMWrite",
                    value: null
                }, {
                    key: "needsUpdate",
                    value: null
                }, {
                    key: "addKeyframe",
                    value: null
                }, {
                    key: "forceUpdate",
                    value: null
                }, {
                    key: "onKeyframesDirty",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.preventOnScroll,
                            i = void 0 !== t && t;
                        this.determineActiveKeyframes(), this.keyframesDirty = !1;
                        for (var n = 0, r = this.keyframeControllers.length; n < r; n++) this.keyframeControllers[n].updateAnimationConstraints();
                        this.updateProgress(this.getPosition()), this.updateBounds(), i || this._onScroll(), this.gui && this.gui.create()
                    }
                }, {
                    key: "refreshActiveMetrics",
                    value: null
                }, {
                    key: "reconcile",
                    value: function() {
                        for (var e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].reconcile()
                    }
                }, {
                    key: "determineActiveKeyframes",
                    value: function(e) {
                        e = e || u(Array.from(document.documentElement.classList));
                        for (var t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].determineActiveKeyframes(e)
                    }
                }, {
                    key: "updateBounds",
                    value: function() {
                        if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
                        for (var e = {
                                min: Number.POSITIVE_INFINITY,
                                max: Number.NEGATIVE_INFINITY
                            }, t = 0, i = this.keyframeControllers.length; t < i; t++) this.keyframeControllers[t].getBounds(e);
                        var n = this.convertTValueToScrollPosition(e.min),
                            r = this.convertTValueToScrollPosition(e.max);
                        r - n < h.pageMetrics.windowHeight ? (e.min = this.convertScrollPositionToTValue(n - .5 * h.pageMetrics.windowHeight), e.max = this.convertScrollPositionToTValue(r + .5 * h.pageMetrics.windowHeight)) : (e.min -= .001, e.max += .001), this.boundsMin = e.min, this.boundsMax = e.max, this.timelineUpdateRequired = !0
                    }
                }, {
                    key: "createViewableRange",
                    value: function() {
                        return new h.ViewableRange(this.metrics.get(this.element), h.pageMetrics.windowHeight)
                    }
                }, {
                    key: "_onBreakpointChange",
                    value: null
                }, {
                    key: "updateProgress",
                    value: function(e) {
                        return this.hasDuration() ? void(this.timelines.localUnclamped = (e - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a)) : void(this.timelines.local = this.timelines.localUnclamped = 0)
                    }
                }, {
                    key: "performTimelineDispatch",
                    value: null
                }, {
                    key: "_onScroll",
                    value: function(e) {
                        if (!this.isEnabled) return !1;
                        void 0 === e && (e = this.getPosition()), this.updateProgress(e);
                        var t = this.lastPosition === this.boundsMin || this.lastPosition === this.boundsMax,
                            i = this.timelines.localUnclamped === this.boundsMin || this.timelines.localUnclamped === this.boundsMax;
                        if (!this.timelineUpdateRequired && t && i && this.lastPosition === e) return void(this.timelines.local = this.timelines.localUnclamped);
                        if (this.timelineUpdateRequired || this.timelines.localUnclamped > this.boundsMin && this.timelines.localUnclamped < this.boundsMax) return this.timelines.local = c.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax), this.performTimelineDispatch(), this.requestDOMChange(), void(this.lastPosition = this.timelines.localUnclamped);
                        var n = this.lastPosition > this.boundsMin && this.lastPosition < this.boundsMax,
                            r = this.timelines.localUnclamped <= this.boundsMin || this.timelines.localUnclamped >= this.boundsMax;
                        return n && r ? (this.timelines.local = c.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax), this.performTimelineDispatch(), this.requestDOMChange(), void(this.lastPosition = this.timelines.localUnclamped)) : void(null !== this.gui && this.gui.onScrollUpdate(this.timelines))
                    }
                }, {
                    key: "convertScrollPositionToTValue",
                    value: null
                }, {
                    key: "convertTValueToScrollPosition",
                    value: null
                }, {
                    key: "hasDuration",
                    value: function() {
                        return this.viewableRange.a !== this.viewableRange.d
                    }
                }, {
                    key: "getPosition",
                    value: function() {
                        return h.pageMetrics.scrollY
                    }
                }, {
                    key: "getControllerForTarget",
                    value: null
                }, {
                    key: "trigger",
                    value: function(e, t) {
                        if ("undefined" != typeof this._events[e])
                            for (var i = this._events[e].length - 1; i >= 0; i--) void 0 !== t ? this._events[e][i](t) : this._events[e][i]()
                    }
                }, {
                    key: "keyframesDirty",
                    set: function(e) {
                        this._keyframesDirty = e, this._keyframesDirty && this.requestDOMChange()
                    },
                    get: null
                }, {
                    key: "keyFrames",
                    get: null
                }]), t
            }(l);
        t.exports = _
    }, {
        "./KeyframeController": 138,
        "./Model/AnimSystemModel": 142,
        "./Model/ElementMetricsLookup": 144,
        "./Parsing/ExpressionParser": 148,
        "./Parsing/TimeParser": 150,
        "./utils/arrayToObject": 153,
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-raf-emitter/RAFEmitter": 124,
        "@marcom/ac-raf-emitter/draw": 130,
        "@marcom/ac-raf-emitter/update": 134,
        "@marcom/sm-math-utils": 156
    }],
    152: [function(e, t, i) {
        "use strict";

        

        

        function s(e, t) {
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
        var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = null,
            l = e("./ScrollGroup"),
            c = e("@marcom/sm-math-utils"),
            u = 0,
            h = {
                create: e("@marcom/ac-raf-emitter/RAFEmitter")
            },
            m = function(e) {
                
                return s(t, e), o(t, [{
                    key: "finalizeInit",
                    value: null
                }, {
                    key: "progress",
                    value: null
                }, {
                    key: "time",
                    value: null
                }, {
                    key: "play",
                    value: null
                }, {
                    key: "reverse",
                    value: null
                }, {
                    key: "reversed",
                    value: null
                }, {
                    key: "restart",
                    value: null
                }, {
                    key: "pause",
                    value: null
                }, {
                    key: "paused",
                    value: null
                }, {
                    key: "onPlayTimeUpdate",
                    value: null
                }, {
                    key: "updateProgress",
                    value: null
                }, {
                    key: "updateBounds",
                    value: null
                }, {
                    key: "setupRAFEmitter",
                    value: null
                }, {
                    key: "timeScale",
                    value: null
                }, {
                    key: "repeats",
                    value: null
                }, {
                    key: "getPosition",
                    value: null
                }, {
                    key: "convertScrollPositionToTValue",
                    value: null
                }, {
                    key: "convertTValueToScrollPosition",
                    value: null
                }, {
                    key: "hasDuration",
                    value: null
                }, {
                    key: "destroy",
                    value: null
                }, {
                    key: "duration",
                    get: null
                }]), t
            }(l);
        m.REPEAT_FOREVER = -1, t.exports = m
    }, {
        "./ScrollGroup": 151,
        "@marcom/ac-raf-emitter/RAFEmitter": 124,
        "@marcom/sm-math-utils": 156
    }],
    153: [function(e, t, i) {
        "use strict";
        var n = function(e) {
            return e.reduce(function(e, t) {
                return e[t] = t, e
            }, {})
        };
        t.exports = n
    }, {}],
    154: [function(e, t, i) {
        "use strict";

        
        var r = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = e("@apple/client-detect").ClientDetect,
            o = s.browser(),
            a = {
                dataAttr: "data-download-button",
                dataAttrDisclaimer: "data-download-disclaimer"
            },
            l = function() {
                
                return r(e, [{
                    key: "initialize",
                    value: null
                }, {
                    key: "destroy",
                    value: null
                }, {
                    key: "addButton",
                    value: null
                }, {
                    key: "removeButton",
                    value: null
                }, {
                    key: "_handleBtnClick",
                    value: null
                }, {
                    key: "_addEventListener",
                    value: null
                }, {
                    key: "_removeEventListener",
                    value: null
                }, {
                    key: "_handleDisclaimers",
                    value: null
                }, {
                    key: "_titleCaseStr",
                    value: null
                }]), e
            }();
        t.exports = l
    }, {
        "@apple/client-detect": 5
    }],
    155: [function(e, t, i) {
        "use strict";
        var n = {
                create: e("gl-mat4/create"),
                invert: e("gl-mat4/invert"),
                clone: e("gl-mat4/clone"),
                transpose: e("gl-mat4/transpose")
            },
            r = {
                create: e("gl-vec3/create"),
                dot: e("gl-vec3/dot"),
                normalize: e("gl-vec3/normalize"),
                length: e("gl-vec3/length"),
                cross: e("gl-vec3/cross"),
                fromValues: e("gl-vec3/fromValues")
            },
            s = {
                create: e("gl-vec4/create"),
                transformMat4: e("gl-vec4/transformMat4"),
                fromValues: e("gl-vec4/fromValues")
            },
            o = (Math.PI / 180, 180 / Math.PI),
            a = 0,
            l = 1,
            c = 3,
            u = 4,
            h = 5,
            m = 7,
            d = 11,
            f = 12,
            p = 13,
            v = 15,
            _ = null,
            y = null,
            g = null,
            b = null,
            E = null;
        t.exports = null
    }, {
        "gl-mat4/clone": 172,
        "gl-mat4/create": 173,
        "gl-mat4/invert": 174,
        "gl-mat4/transpose": 175,
        "gl-vec3/create": 176,
        "gl-vec3/cross": 177,
        "gl-vec3/dot": 178,
        "gl-vec3/fromValues": 179,
        "gl-vec3/length": 180,
        "gl-vec3/normalize": 181,
        "gl-vec4/create": 182,
        "gl-vec4/fromValues": 183,
        "gl-vec4/transformMat4": 184
    }],
    156: [function(e, t, i) {
        "use strict";
        t.exports = {
            lerp: null,
            map: null,
            mapClamp: null,
            norm: null,
            clamp: null,
            randFloat: null,
            randInt: null
        }
    }, {}],
    157: [function(e, t, i) {
        "use strict";
        t.exports = {
            browser: {
                safari: !1,
                chrome: !1,
                firefox: !1,
                ie: !1,
                opera: !1,
                android: !1,
                edge: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0,
                    documentMode: !1
                }
            },
            os: {
                osx: !1,
                ios: !1,
                android: !1,
                windows: !1,
                linux: !1,
                fireos: !1,
                chromeos: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0
                }
            }
        }
    }, {}],
    158: [function(e, t, i) {
        "use strict";
        t.exports = {
            browser: [{
                name: "edge",
                userAgent: "Edge",
                version: ["rv", "Edge"],
                test: function(e) {
                    return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua
                }
            }, {
                name: "chrome",
                userAgent: "Chrome"
            }, {
                name: "firefox",
                test: null,
                version: "Firefox"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "safari",
                test: null,
                version: "Version"
            }, {
                name: "ie",
                test: null,
                version: ["MSIE", "rv"],
                parseDocumentMode: null
            }, {
                name: "opera",
                userAgent: "Opera",
                version: ["Version", "Opera"]
            }],
            os: [{
                name: "windows",
                test: function(e) {
                    return e.ua.indexOf("Windows") > -1
                },
                version: "Windows NT"
            }, {
                name: "osx",
                userAgent: "Mac",
                test: function(e) {
                    return e.ua.indexOf("Macintosh") > -1
                }
            }, {
                name: "ios",
                test: null,
                version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux",
                userAgent: "Linux",
                test: null
            }, {
                name: "fireos",
                test: null,
                version: "rv"
            }, {
                name: "android",
                userAgent: "Android",
                test: null
            }, {
                name: "chromeos",
                userAgent: "CrOS"
            }]
        }
    }, {}],
    159: [function(e, t, i) {
        "use strict";

        function n(e) {
            return new RegExp(e + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
        }

        function r(e, t) {
            if ("function" == typeof e.parseVersion) return e.parseVersion(t);
            var i = e.version || e.userAgent;
            "string" == typeof i && (i = [i]);
            for (var r, s = i.length, o = 0; o < s; o++)
                if (r = t.match(n(i[o])), r && r.length > 1) return r[1].replace(/_/g, ".");
            return !1
        }

        function s(e, t, i) {
            for (var n, s, o = e.length, a = 0; a < o; a++)
                if ("function" == typeof e[a].test ? e[a].test(i) === !0 && (n = e[a].name) : i.ua.indexOf(e[a].userAgent) > -1 && (n = e[a].name), n) {
                    if (t[n] = !0, s = r(e[a], i.ua), "string" == typeof s) {
                        var l = s.split(".");
                        t.version.string = s, l && l.length > 0 && (t.version.major = parseInt(l[0] || 0), t.version.minor = parseInt(l[1] || 0), t.version.patch = parseInt(l[2] || 0))
                    } else "edge" === n && (t.version.string = "12.0.0", t.version.major = "12", t.version.minor = "0", t.version.patch = "0");
                    return "function" == typeof e[a].parseDocumentMode && (t.version.documentMode = e[a].parseDocumentMode()), t
                }
            return t
        }

        function o(e) {
            var t = {};
            return t.browser = s(l.browser, a.browser, e), t.os = s(l.os, a.os, e), t
        }
        var a = e("./defaults"),
            l = e("./dictionary");
        t.exports = o
    }, {
        "./defaults": 157,
        "./dictionary": 158
    }],
    160: [function(e, t, i) {
        "use strict";
        var n = {
            ua: window.navigator.userAgent,
            platform: window.navigator.platform,
            vendor: window.navigator.vendor
        };
        t.exports = e("./parseUserAgent")(n)
    }, {
        "./parseUserAgent": 159
    }],
    161: [function(e, t, i) {
        arguments[4][123][0].apply(i, arguments)
    }, {
        dup: 123
    }],
    162: [function(e, t, i) {
        arguments[4][124][0].apply(i, arguments)
    }, {
        "./sharedRAFEmitterIDGeneratorInstance": 167,
        "./sharedRAFExecutorInstance": 168,
        "@marcom/ac-event-emitter-micro": 54,
        dup: 124
    }],
    163: [function(e, t, i) {
        arguments[4][125][0].apply(i, arguments)
    }, {
        "@marcom/ac-event-emitter-micro/EventEmitterMicro": 55,
        dup: 125
    }],
    164: [function(e, t, i) {
        arguments[4][126][0].apply(i, arguments)
    }, {
        "./SingleCallRAFEmitter": 166,
        dup: 126
    }],
    165: [function(e, t, i) {
        arguments[4][127][0].apply(i, arguments)
    }, {
        "./RAFInterface": 164,
        dup: 127
    }],
    166: [function(e, t, i) {
        arguments[4][128][0].apply(i, arguments)
    }, {
        "./RAFEmitter": 162,
        dup: 128
    }],
    167: [function(e, t, i) {
        arguments[4][132][0].apply(i, arguments)
    }, {
        "../.release-info.js": 161,
        "@marcom/ac-shared-instance": 119,
        dup: 132
    }],
    168: [function(e, t, i) {
        arguments[4][133][0].apply(i, arguments)
    }, {
        "../.release-info.js": 161,
        "./RAFExecutor": 163,
        "@marcom/ac-shared-instance": 119,
        dup: 133
    }],
    169: [function(e, t, i) {
        arguments[4][134][0].apply(i, arguments)
    }, {
        "./RAFInterfaceController": 165,
        dup: 134
    }],
    170: [function(e, t, i) {
        "use strict";

        function n(e, t) {
            r.call(this), this._id = e || o.ID, this._options = Object.assign({}, o.OPTIONS, t), this._allowDOMEventDispatch = !1, this._allowElementStateData = !1, this._options.removeNamespace = "boolean" != typeof this._options.removeNamespace || this._options.removeNamespace, this._el = this._initViewportEl(this._id), this._resizing = !1, this._mediaQueryLists = {
                resolution: {
                    retina: window.matchMedia(c.RETINA)
                },
                orientation: {
                    portrait: window.matchMedia(c.PORTRAIT),
                    landscape: window.matchMedia(c.LANDSCAPE)
                }
            }, this._viewport = this._getViewport(this._options.removeNamespace), this._retina = this._getRetina(this._mediaQueryLists.resolution.retina), this._orientation = this._initOrientation(), this._addListeners(), this._updateElementStateData()
        }
        var r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = e("@marcom/ac-raf-emitter/update"),
            o = {
                ID: "viewport-emitter",
                OPTIONS: {
                    removeNamespace: !0
                }
            },
            a = {
                DOM_DISPATCH: "data-viewport-emitter-dispatch",
                STATE: "data-viewport-emitter-state"
            },
            l = "::before",
            c = {
                RETINA: "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
                PORTRAIT: "only screen and (orientation: portrait)",
                LANDSCAPE: "only screen and (orientation: landscape)"
            },
            u = {
                any: "change:any",
                orientation: "change:orientation",
                retina: "change:retina",
                viewport: "change:viewport"
            };
        Object.defineProperty(n, "DOM_DISPATCH_ATTRIBUTE", {
            get: null
        }), Object.defineProperty(n, "DOM_STATE_ATTRIBUTE", {
            get: null
        });
        var h = n.prototype = Object.create(r.prototype);
        Object.defineProperty(h, "id", {
            get: null
        }), Object.defineProperty(h, "element", {
            get: null
        }), Object.defineProperty(h, "mediaQueryLists", {
            get: null
        }), Object.defineProperty(h, "viewport", {
            get: null
        }), Object.defineProperty(h, "retina", {
            get: null
        }), Object.defineProperty(h, "orientation", {
            get: null
        }), Object.defineProperty(h, "hasDomDispatch", {
            get: null
        }), h.destroy = null, h._initViewportEl = function(e) {
            var t = document.getElementById(e);
            return t || (t = document.createElement("div"), t.id = e, t = document.body.appendChild(t)), t.hasAttribute(a.DOM_DISPATCH) || (t.setAttribute(a.DOM_DISPATCH, ""), this._allowDOMEventDispatch = !0), t.hasAttribute(a.STATE) || (this._allowElementStateData = !0), t
        }, h._dispatch = null, h._addListeners = function() {
            this._onOrientationChange = this._onOrientationChange.bind(this), this._onRetinaChange = this._onRetinaChange.bind(this), this._onViewportChange = this._onViewportChange.bind(this), this._onViewportChangeUpdate = this._onViewportChangeUpdate.bind(this), this._mediaQueryLists.orientation.portrait.addListener(this._onOrientationChange), this._mediaQueryLists.orientation.landscape.addListener(this._onOrientationChange), this._mediaQueryLists.resolution.retina.addListener(this._onRetinaChange), window.addEventListener("resize", this._onViewportChange)
        }, h._removeListeners = null, h._updateElementStateData = function() {
            if (this._allowElementStateData) {
                var e = JSON.stringify({
                    viewport: this._viewport,
                    orientation: this._orientation,
                    retina: this._retina
                });
                this._el.setAttribute(a.STATE, e)
            }
        }, h._getViewport = function(e) {
            var t = window.getComputedStyle(this._el, l).content;
            return t ? (t = t.replace(/["']/g, ""), e ? t.split(":").pop() : t) : null
        }, h._getRetina = function(e) {
            return e.matches
        }, h._getOrientation = function(e) {
            var t = this._orientation;
            if (e.matches) {
                var i = /portrait|landscape/;
                return e.media.match(i)[0]
            }
            return t
        }, h._initOrientation = function() {
            var e = this._getOrientation(this._mediaQueryLists.orientation.portrait);
            return e ? e : this._getOrientation(this._mediaQueryLists.orientation.landscape)
        }, h._onViewportChange = null, h._onViewportChangeUpdate = null, h._onRetinaChange = null, h._onOrientationChange = null, t.exports = n
    }, {
        "@marcom/ac-event-emitter-micro": 54,
        "@marcom/ac-raf-emitter/update": 169
    }],
    171: [function(e, t, i) {
        "use strict";
        var n = e("./ViewportEmitter");
        t.exports = new n
    }, {
        "./ViewportEmitter": 170
    }],
    172: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    173: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    174: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    175: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    176: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    177: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    178: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    179: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    180: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    181: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    182: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    183: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    184: [function(e, t, i) {
        
        t.exports = n
    }, {}],
    185: [function(e, t, i) {
        function n(e, t, i) {
            this.applyButton(), r.apply(this, arguments)
        }
        var r = e("../../supports-shared-modals/collection-unit-support/collection-unit-support.js"),
            s = r.prototype,
            o = e("@marcom/useragent-detect"),
            a = n.prototype = Object.create(s);
        a.applyButton = function() {
            var e = document.querySelector(".try-button"),
                t = document.documentElement.classList.contains("touch"),
                i = o.os.version.major,
                n = o.os.version.minor,
                r = o.os.ios && i >= 13,
                s = o.os.osx && i >= 10 && n >= 15 && t,
                a = o.os.osx && i >= 10 && n >= 15;
            (r || s || a) && (e.setAttribute("href", e.getAttribute("data-apply-action")), e.setAttribute("data-rid-relay", '{"288":"itsct"}'), e.setAttribute("data-analytics-exit-link", ""), e.removeAttribute("data-analytics-intrapage-link"), e.removeAttribute("data-analytics-click"))
        }, t.exports = n
    }, {
        "../../supports-shared-modals/collection-unit-support/collection-unit-support.js": 189,
        "@marcom/useragent-detect": 160
    }],
    186: [function(e, t, i) {
        function n(e, t, i) {
            r.apply(this, arguments), this.applyButton()
        }
        var r = e("@marcom/ac-homepage/BaseHomepageUnit"),
            s = r.prototype,
            o = n.prototype = Object.create(s);
        o.applyButton = function() {
            var e = 7,
                t = document.documentElement.classList.contains("touch") && window.ApplePaySession && window.ApplePaySession.supportsVersion(e) && window.ApplePaySession.canMakePayments(),
                i = document.querySelector(".apply-now");
            t && (i.setAttribute("href", i.getAttribute("data-apply-action")), i.addEventListener("click", null))
        }, t.exports = n
    }, {
        "@marcom/ac-homepage/BaseHomepageUnit": 64
    }],
    187: [function(e, t, i) {
        
        var r = e("@marcom/ac-homepage/BaseHomepageSection"),
            s = r.prototype,
            o = e("@marcom/client-detect"),
            a = n.prototype = Object.create(s);
        a.initialize = null, t.exports = n
    }, {
        "@marcom/ac-homepage/BaseHomepageSection": 63,
        "@marcom/client-detect": 154
    }],
    188: [function(e, t, i) {
        t.exports = e("../../supports-shared-modals/collection-unit-support/collection-unit-support.js")
    }, {
        "../../supports-shared-modals/collection-unit-support/collection-unit-support.js": 189
    }],
    189: [function(e, t, i) {
        function n(e, t, i) {
            r.apply(this, arguments), this._attachModalClickEvents()
        }
        var r = e("@marcom/ac-homepage/BaseHomepageUnit"),
            s = r.prototype;
        const o = e("@marcom/ac-modal").createStandardModal,
            a = (e("@marcom/ac-raf-emitter/update"), e("@marcom/ac-raf-emitter/draw")),
            l = e("@marcom/ac-accessibility/CircularTab");
        var c = n.prototype = Object.create(s);
        c._openModal = null, c._createModal = null, c._attachModalClickEvents = function() {
            this.collectionUnitElement.querySelectorAll("a[href$=modal]").forEach(function(e) {
                e.addEventListener("click", null.bind(this))
            }.bind(this))
        }, t.exports = n
    }, {
        "@marcom/ac-accessibility/CircularTab": 13,
        "@marcom/ac-homepage/BaseHomepageUnit": 64,
        "@marcom/ac-modal": 86,
        "@marcom/ac-raf-emitter/draw": 114,
        "@marcom/ac-raf-emitter/update": 116
    }],
    190: [function(e, t, i) {
        "use strict";
        e("@marcom/ac-homepage/src/ac-homepage-main")(), e("./shame.js")()
    }, {
        "./shame.js": 191,
        "@marcom/ac-homepage/src/ac-homepage-main": 61
    }],
    191: [function(e, t, i) {
        "use strict";
        t.exports = function() {}
    }, {}],
    192: [function(e, t, i) {
        var n = {};
        t.exports = n
    }, {}],
    193: [function(e, t, i) {
        arguments[4][192][0].apply(i, arguments)
    }, {
        dup: 192
    }],
    194: [function(e, t, i) {
        var n = {};
        n["apple-tv-plus"] = e("../src/content/modules/promos/apple-tv-plus/apple-tv-plus.js"), n["apple-music"] = e("../src/content/modules/promos/apple-music/apple-music.js"), n["apple-card"] = e("../src/content/modules/promos/apple-card/apple-card.js"), n["apple-arcade"] = e("../src/content/modules/promos/apple-arcade/apple-arcade.js"), t.exports = n
    }, {
        "../src/content/modules/promos/apple-arcade/apple-arcade.js": 185,
        "../src/content/modules/promos/apple-card/apple-card.js": 186,
        "../src/content/modules/promos/apple-music/apple-music.js": 187,
        "../src/content/modules/promos/apple-tv-plus/apple-tv-plus.js": 188
    }],
    195: [function(e, t, i) {
        var n = {};
        n["collection-unit-support"] = e("../src/content/modules/supports-shared-modals/collection-unit-support/collection-unit-support.js"), t.exports = n
    }, {
        "../src/content/modules/supports-shared-modals/collection-unit-support/collection-unit-support.js": 189
    }]
}, {}, [190]);