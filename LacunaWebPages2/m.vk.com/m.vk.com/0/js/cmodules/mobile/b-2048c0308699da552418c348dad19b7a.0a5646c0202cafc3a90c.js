(window.webpackJsonp = window.webpackJsonp || []).push([
    ["b-2048c0308699da552418c348dad19b7a"], {
        J8bf: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getCookie = function(e) {
                return function() {
                    window._cookies = {};
                    for (var e = document.cookie.split(";"), t = /^[\s]*([^\s]+?)$/i, r = 0, o = e.length; r < o; r++) {
                        var n = e[r].split("=");
                        2 === n.length && (_cookies[n[0].match(t)[1]] = unescape(n[1].match(t) ? n[1].match(t)[1] : ""))
                    }
                }(), _cookies[e]
            }, t.setCookie = function(e, t, r, n) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "None",
                    a = window.locDomain,
                    s = browser.chrome && parseInt(browser.version) >= 71 && (0, o.partConfigEnabled)("cookie_class_samesite") ? "; SameSite=".concat(i) : "",
                    l = e + "=" + escape(t),
                    c = "; path=/" + (a ? "; domain=." + a : ""),
                    u = n && "https:" === location.protocol ? "; secure" : "",
                    d = "";
                if (r) {
                    var f = new Date;
                    f.setTime(f.getTime() + 24 * r * 60 * 60 * 1e3), d = "; expires=" + f.toGMTString()
                }
                document.cookie = l + d + c + s + u
            }, t.initCookies = function() {
                window._cookies = {}
            };
            var o = r("W9Tc")
        },
        OcsD: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.flatten = flatten, exports.flatArray = flatArray, exports.formatTime = formatTime, exports.setDocumentDomain = setDocumentDomain, exports.bind = bind, exports.intval = intval, exports.floatval = floatval, exports.qs2obj = qs2obj, exports.obj2qs = obj2qs, exports.parseJSON = parseJSON, exports.ssCheck = ssCheck, exports.ssSet = ssSet, exports.ssGet = ssGet, exports.getValues = getValues, exports.len = len, exports.realSubstr = realSubstr, exports.hashCode = hashCode, exports.formatNum = formatNum, exports.addEvent = addEvent, exports.removeEvent = removeEvent, exports.preventEvent = preventEvent, exports.stopEvent = stopEvent, exports.cancelEvent = cancelEvent, exports.checkEvent = checkEvent, exports.onCtrlEnter = onCtrlEnter, exports.submitBtn = submitBtn, exports.createIframe = createIframe, exports.winToUtf = winToUtf, exports.shortCurrency = shortCurrency, exports.checkNav = checkNav, exports.checkElementNav = checkElementNav, exports.checkTouchHover = checkTouchHover, exports.parseCyr = parseCyr, exports.parseLat = parseLat, exports.parseRusKeys = parseRusKeys, exports.parseLatKeys = parseLatKeys, exports.scrollLeft = scrollLeft, exports.scrollTop = scrollTop, exports.se = se, exports.onBodyScrollForce = onBodyScrollForce, exports.sgFix = sgFix, exports.hideUnvisibleItems = hideUnvisibleItems, exports.initObjectsHideByScroll = initObjectsHideByScroll, exports.checkPostsSeen = checkPostsSeen, exports.initPostsStats = initPostsStats, exports.initAutoScroll = initAutoScroll, exports.autoScroll = autoScroll, exports.scrollToEl = scrollToEl, exports.scrollToHash = scrollToHash, exports.lockButton = lockButton, exports.unlockButton = unlockButton, exports.extend = extend, exports.ge = ge, exports.geByClass = geByClass, exports.geByClass1 = geByClass1, exports.gpeByClass = gpeByClass, exports.geByTag = geByTag, exports.geByTag1 = geByTag1, exports.gpeByTag = gpeByTag, exports.geBySel = geBySel, exports.geBySel1 = geBySel1, exports.domNS = domNS, exports.domPS = domPS, exports.append = append, exports.before = before, exports.after = after, exports.replace = replace, exports.remove = remove, exports.clone = clone, exports.reflow = reflow, exports.tag = tag, exports.outer = outer, exports.show = show, exports.hide = hide, exports.isVisible = isVisible, exports.toggle = toggle, exports.ce = ce, exports.elfocus = elfocus, exports.elblur = elblur, exports.val = val, exports.attr = attr, exports.cssToJs = cssToJs, exports.getCssPropertyName = getCssPropertyName, exports.cssValue = cssValue, exports.getStyle = getStyle, exports.setStyle = setStyle, exports.hasClass = hasClass, exports.addClass = addClass, exports.removeClass = removeClass, exports.toggleClass = toggleClass, exports.replaceClass = replaceClass, exports.switchClass = switchClass, exports.getXY = getXY, exports.getX = getX, exports.getY = getY, exports.getW = getW, exports.getH = getH, exports.getSize = getSize, exports.getCw = getCw, exports.getCh = getCh, exports.evalJs = evalJs, exports.alLoadingFix = alLoadingFix, exports.getHref = getHref, exports.indexOf = indexOf, exports.langSex = langSex, exports.langNumeric = langNumeric, exports.langWordNumeric = langWordNumeric, exports.langDate = langDate, exports.setNotify = setNotify, exports.getNotify = getNotify, exports.canUploadFile = canUploadFile, exports.uploadFile = uploadFile, exports.readFile = readFile, exports.trim = trim, exports.domClosestOverflowHidden = domClosestOverflowHidden, exports.copyToClipboard = copyToClipboard, exports.blinkItem = blinkItem, exports.domPN = domPN, exports.domCA = domCA, exports.getLang = getLang, exports.domData = domData, exports.throttle = throttle, exports.debounce = debounce, exports.scrollGetX = scrollGetX, exports.scrollGetY = scrollGetY, exports.domChildIndex = domChildIndex, exports.domChildren = domChildren, exports.safeGet = safeGet, exports.disableFlex = disableFlex, exports.domQuery = domQuery, exports.domQuery1 = domQuery1, exports.domFC = domFC, exports.domLC = domLC, exports.domInsertAfter = domInsertAfter, exports.domInsertBefore = domInsertBefore, exports.alwaysArray = alwaysArray, exports.need = need, exports.ceFromString = ceFromString, exports.isIosWebView = isIosWebView, exports.isAndroidWebView = isAndroidWebView, exports.isVkWebView = isVkWebView, exports.statlogsValueEvent = statlogsValueEvent, exports.ajaxRequest = ajaxRequest, exports.asc = asc, exports.desc = desc, exports.unique = unique, exports.first = first, exports.last = last, exports.toInt = toInt, exports.toArray = toArray, exports.groupBy = groupBy, exports.domInsert = domInsert, exports.openApp = openApp, exports.domCreate = domCreate, exports.rs = rs, exports.getPreloadData = getPreloadData, exports.getImageOrientation = getImageOrientation, exports.matchesSelector = matchesSelector, Object.defineProperty(exports, "isUndefined", {
                enumerable: !0,
                get: function() {
                    return _common.isUndefined
                }
            }), Object.defineProperty(exports, "isFunction", {
                enumerable: !0,
                get: function() {
                    return _common.isFunction
                }
            }), Object.defineProperty(exports, "isArray", {
                enumerable: !0,
                get: function() {
                    return _common.isArray
                }
            }), Object.defineProperty(exports, "isObject", {
                enumerable: !0,
                get: function() {
                    return _common.isObject
                }
            }), Object.defineProperty(exports, "isEmpty", {
                enumerable: !0,
                get: function() {
                    return _common.isEmpty
                }
            }), Object.defineProperty(exports, "escapeRE", {
                enumerable: !0,
                get: function() {
                    return _common.escapeRE
                }
            }), Object.defineProperty(exports, "htsc", {
                enumerable: !0,
                get: function() {
                    return _common.htsc
                }
            }), Object.defineProperty(exports, "escapeAttr", {
                enumerable: !0,
                get: function() {
                    return _common.escapeAttr
                }
            }), Object.defineProperty(exports, "isString", {
                enumerable: !0,
                get: function() {
                    return _common.isString
                }
            }), Object.defineProperty(exports, "irand", {
                enumerable: !0,
                get: function() {
                    return _common.irand
                }
            }), Object.defineProperty(exports, "unescapeAttr", {
                enumerable: !0,
                get: function() {
                    return _common.unescapeAttr
                }
            }), Object.defineProperty(exports, "replaceEntities", {
                enumerable: !0,
                get: function() {
                    return _common.replaceEntities
                }
            }), Object.defineProperty(exports, "escapeStr", {
                enumerable: !0,
                get: function() {
                    return _common.escapeStr
                }
            }), Object.defineProperty(exports, "stripTags", {
                enumerable: !0,
                get: function() {
                    return _common.stripTags
                }
            }), Object.defineProperty(exports, "rand", {
                enumerable: !0,
                get: function() {
                    return _common.rand
                }
            }), Object.defineProperty(exports, "srand", {
                enumerable: !0,
                get: function() {
                    return _common.srand
                }
            }), Object.defineProperty(exports, "utf2win", {
                enumerable: !0,
                get: function() {
                    return _common.utf2win
                }
            }), Object.defineProperty(exports, "isHttpHref", {
                enumerable: !0,
                get: function() {
                    return _common.isHttpHref
                }
            }), Object.defineProperty(exports, "vkNow", {
                enumerable: !0,
                get: function() {
                    return _common.vkNow
                }
            }), Object.defineProperty(exports, "each", {
                enumerable: !0,
                get: function() {
                    return _common.each
                }
            }), Object.defineProperty(exports, "copy", {
                enumerable: !0,
                get: function() {
                    return _common.copy
                }
            }), Object.defineProperty(exports, "arrayRemove", {
                enumerable: !0,
                get: function() {
                    return _Array.arrayRemove
                }
            }), Object.defineProperty(exports, "arrayIntersects", {
                enumerable: !0,
                get: function() {
                    return _Array.arrayIntersects
                }
            }), exports.registeredEvents = exports.lsRemove = exports.lsGet = exports.lsSet = exports.lsCheck = exports.re = exports.onBodyResize = exports.onBodyScroll = void 0;
            var _ls = _interopRequireDefault(__webpack_require__("Xrg9")),
                _browser = _interopRequireDefault(__webpack_require__("jk6M")),
                _common = __webpack_require__("jE6c"),
                _Dollars = __webpack_require__("UxAg"),
                _Array = __webpack_require__("cq4b"),
                _select = _interopRequireDefault(__webpack_require__("gvr7")),
                _cookies = __webpack_require__("J8bf"),
                registeredEvents, onBodyScroll, onBodyResize;

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            exports.registeredEvents = registeredEvents, window.registeredEvents ? exports.registeredEvents = registeredEvents = window.registeredEvents : exports.registeredEvents = registeredEvents = [], exports.onBodyScroll = onBodyScroll, window.onBodyScroll ? exports.onBodyScroll = onBodyScroll = window.onBodyScroll : exports.onBodyScroll = onBodyScroll = se(scrollTop), exports.onBodyResize = onBodyResize, window.onBodyResize ? exports.onBodyResize = onBodyResize = window.onBodyResize : exports.onBodyResize = onBodyResize = se();
            var re = remove;
            exports.re = re;
            var lsCheck = _ls.default.checkVersion;
            exports.lsCheck = lsCheck;
            var lsRemove = _ls.default.remove;
            exports.lsRemove = lsRemove;
            var lsSet = _ls.default.set;
            exports.lsSet = lsSet;
            var lsGet = _ls.default.get,
                _logTimer;

            function need(e) {
                var t = safeGet(window, e);
                if (void 0 === t) throw "Unable to get `window.".concat(e, "`");
                return t
            }

            function setDocumentDomain() {
                var e = (document.domain || "").match(/(m\.)?([a-zA-Z]+\.[a-zA-Z]+\.?)$/);
                window.locDomain = "https:" == location.protocol ? e[2] : e[0];
                var t = navigator.userAgent.toLowerCase();
                !/opera/i.test(t) && /msie 6/i.test(t) && document.domain == window.locDomain || (document.domain = window.locDomain)
            }

            function bind() {
                var e = Array.prototype.slice.call(arguments),
                    t = e.shift(),
                    r = e.shift();
                return function() {
                    var o = Array.prototype.slice.call(arguments);
                    return t.apply(r, e.concat(o))
                }
            }

            function intval(e) {
                return !0 === e ? 1 : parseInt(e) || 0
            }

            function floatval(e) {
                return !0 === e ? 1 : parseFloat(e) || 0
            }

            function qs2obj(e) {
                if (!e) return {};
                for (var t = {}, r = e.toString().split("&"), o = 0, n = r.length; o < n; o++) {
                    var i = r[o].split("=");
                    i[0] && (t[decodeURIComponent(i[0])] = decodeURIComponent(i[1] || ""))
                }
                return t
            }

            function obj2qs(e) {
                if (!e) return "";
                var t = [];
                for (var r in e) t.push(encodeURIComponent(r) + (e[r] ? "=" + encodeURIComponent(e[r].toString() || "") : ""));
                return t.length ? "?" + t.join("&") : ""
            }

            function parseJSON(obj) {
                try {
                    return JSON.parse(obj)
                } catch (e) {
                    return eval("(" + obj + ")")
                }
            }

            function ssCheck() {
                return void 0 !== window.sessionStorage && void 0 !== window.JSON
            }

            function ssSet(e, t) {
                if (void 0 !== t) try {
                    return sessionStorage.setItem(e, JSON.stringify(t))
                } catch (e) {} else try {
                    return sessionStorage.removeItem(e)
                } catch (e) {}
                return !1
            }

            function ssGet(e) {
                try {
                    return JSON.parse(sessionStorage.getItem(e))
                } catch (e) {}
                return !1
            }

            function getValues(e) {
                if (!(0, _common.isArray)(e)) return e.call ? e() : e;
                for (var t = [], r = 0, o = e.length; r < o; r++) t.push(getValues(e[r]));
                return t
            }

            function len(e) {
                if ((0, _common.isArray)(e)) return e.length;
                if ((0, _common.isObject)(e)) {
                    var t = 0;
                    for (var r in e) t++;
                    return t
                }
                return 0
            }

            function realSubstr(e, t) {
                return (e = e || "").length > t && (e = (e = (e = (e = e.substr(0, t - 3)).replace(/&[^;]{0,6}$/, "")).replace(/<[^>]*$/, "")).replace(/(\s|<br\s*\/?>)+$/, ""), e += ".."), e
            }

            function hashCode(e) {
                var t = 0;
                if (0 === e.length) return t;
                for (var r = 0, o = e.length; r < o; r++) {
                    t = (t << 5) - t + e.charCodeAt(r), t |= 0
                }
                return t
            }

            function formatNum(e) {
                if (!window.langConfig) return e;
                for (var t = e.toString().split("."), r = [], o = t[0].length - 3; o > -3; o -= 3) r.unshift(t[0].slice(o > 0 ? o : 0, o + 3));
                return t[0] = r.join(window.langConfig.numDel), e = t.join(window.langConfig.numDec)
            }
            exports.lsGet = lsGet, window._UtilsInited || (Object.assign(window, {
                onBodyScroll: onBodyScroll,
                onBodyResize: onBodyResize,
                re: re,
                flatten: flatten,
                flatArray: flatArray,
                formatTime: formatTime,
                setDocumentDomain: setDocumentDomain,
                isUndefined: _common.isUndefined,
                isFunction: _common.isFunction,
                isArray: _common.isArray,
                isObject: _common.isObject,
                isEmpty: _common.isEmpty,
                escapeRE: _common.escapeRE,
                htsc: _common.htsc,
                escapeAttr: _common.escapeAttr,
                unescapeAttr: _common.unescapeAttr,
                replaceEntities: _common.replaceEntities,
                escapeStr: _common.escapeStr,
                stripTags: _common.stripTags,
                rand: _common.rand,
                srand: _common.srand,
                utf2win: _common.utf2win,
                isHttpHref: _common.isHttpHref,
                vkNow: _common.vkNow,
                bind: bind,
                intval: intval,
                floatval: floatval,
                qs2obj: qs2obj,
                obj2qs: obj2qs,
                parseJSON: parseJSON,
                lsCheck: lsCheck,
                lsSet: lsSet,
                lsGet: lsGet,
                ssCheck: ssCheck,
                lsRemove: lsRemove,
                ssSet: ssSet,
                ssGet: ssGet,
                getValues: getValues,
                len: len,
                realSubstr: realSubstr,
                hashCode: hashCode,
                formatNum: formatNum,
                each: _common.each,
                copy: _common.copy,
                addEvent: addEvent,
                removeEvent: removeEvent,
                preventEvent: preventEvent,
                stopEvent: stopEvent,
                cancelEvent: cancelEvent,
                checkEvent: checkEvent,
                onCtrlEnter: onCtrlEnter,
                submitBtn: submitBtn,
                createIframe: createIframe,
                winToUtf: winToUtf,
                shortCurrency: shortCurrency,
                checkNav: checkNav,
                checkElementNav: checkElementNav,
                checkTouchHover: checkTouchHover,
                parseCyr: parseCyr,
                parseLat: parseLat,
                parseRusKeys: parseRusKeys,
                parseLatKeys: parseLatKeys,
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                se: se,
                onBodyScrollForce: onBodyScrollForce,
                sgFix: sgFix,
                hideUnvisibleItems: hideUnvisibleItems,
                initObjectsHideByScroll: initObjectsHideByScroll,
                checkPostsSeen: checkPostsSeen,
                initPostsStats: initPostsStats,
                initAutoScroll: initAutoScroll,
                autoScroll: autoScroll,
                scrollToEl: scrollToEl,
                scrollToHash: scrollToHash,
                lockButton: lockButton,
                unlockButton: unlockButton,
                extend: extend,
                ge: ge,
                geByClass: geByClass,
                geByClass1: geByClass1,
                gpeByClass: gpeByClass,
                geByTag: geByTag,
                geByTag1: geByTag1,
                gpeByTag: gpeByTag,
                geBySel: geBySel,
                geBySel1: geBySel1,
                domNS: domNS,
                domPS: domPS,
                append: append,
                before: before,
                after: after,
                replace: replace,
                remove: remove,
                clone: clone,
                reflow: reflow,
                tag: tag,
                outer: outer,
                show: show,
                hide: hide,
                isVisible: isVisible,
                toggle: toggle,
                ce: ce,
                elfocus: elfocus,
                elblur: elblur,
                val: val,
                attr: attr,
                cssToJs: cssToJs,
                getCssPropertyName: getCssPropertyName,
                cssValue: cssValue,
                getStyle: getStyle,
                setStyle: setStyle,
                hasClass: hasClass,
                addClass: addClass,
                removeClass: removeClass,
                toggleClass: toggleClass,
                replaceClass: replaceClass,
                switchClass: switchClass,
                getXY: getXY,
                getX: getX,
                getY: getY,
                getW: getW,
                getH: getH,
                getSize: getSize,
                getCw: getCw,
                getCh: getCh,
                evalJs: evalJs,
                alLoadingFix: alLoadingFix,
                getHref: getHref,
                indexOf: indexOf,
                langSex: langSex,
                langNumeric: langNumeric,
                langWordNumeric: langWordNumeric,
                langDate: langDate,
                setNotify: setNotify,
                getNotify: getNotify,
                canUploadFile: canUploadFile,
                uploadFile: uploadFile,
                readFile: readFile,
                registeredEvents: registeredEvents,
                trim: trim,
                domClosestOverflowHidden: domClosestOverflowHidden,
                copyToClipboard: copyToClipboard,
                blinkItem: blinkItem,
                domPN: domPN,
                domCA: domCA,
                getLang: getLang,
                domData: domData,
                throttle: throttle,
                debounce: debounce,
                scrollGetX: scrollGetX,
                scrollGetY: scrollGetY,
                domChildIndex: domChildIndex,
                domChildren: domChildren,
                safeGet: safeGet,
                disableFlex: disableFlex,
                domQuery: domQuery,
                domQuery1: domQuery1,
                domFC: domFC,
                domLC: domLC,
                domInsertAfter: domInsertAfter,
                domInsertBefore: domInsertBefore,
                alwaysArray: alwaysArray,
                need: need,
                isString: _common.isString,
                ceFromString: ceFromString,
                isIosWebView: isIosWebView,
                isAndroidWebView: isAndroidWebView,
                isVkWebView: isVkWebView,
                statlogsValueEvent: statlogsValueEvent,
                ajaxRequest: ajaxRequest,
                arrayRemove: _Array.arrayRemove,
                arrayIntersects: _Array.arrayIntersects,
                asc: asc,
                desc: desc,
                unique: unique,
                first: first,
                last: last,
                toInt: toInt,
                toArray: toArray,
                groupBy: groupBy,
                domInsert: domInsert,
                openApp: openApp,
                rs: rs,
                domCreate: domCreate,
                getPreloadData: getPreloadData,
                getImageOrientation: getImageOrientation,
                matchesSelector: matchesSelector
            }), window._UtilsInited = !0), _logTimer = (0, _common.vkNow)(), window.clog = function(e) {
                var t = window,
                    r = t.vk;
                if (r && r.__debug) try {
                    if (window.console && console.log) {
                        var o = Array.prototype.slice.call(arguments);
                        o.unshift("[" + ((0, _common.vkNow)() - _logTimer) / 1e3 + "] ");
                        var n = window,
                            i = n.browser;
                        i.msie || i.mobile && !i.safari_mobile ? console.log(o.join(" ")) : console.log.apply(console, o)
                    }
                } catch (e) {}
            };
            var rf = function() {
                    return !1
                },
                eventPassiveSupported = !1,
                isReady, readyList, ready, doc, frag, elem, range;
            try {
                var options = Object.defineProperty({}, "passive", {
                    get: function() {
                        eventPassiveSupported = !0
                    }
                });
                window.addEventListener("test", null, options), window.removeEventListener("test", null, options)
            } catch (e) {}

            function addEvent(e, t, r, o) {
                var n = !!o && !0 === o.capture,
                    i = !!o && !0 === o.passive;
                if (e = ge(e), r = r || rf, e && 3 != e.nodeType && 8 != e.nodeType) {
                    e.setInterval && e != window && (e = window);
                    for (var a = 0, s = (t = t.split(" ")).length; a < s; a++) {
                        var l = t[a];
                        e.addEventListener ? e.addEventListener(l, r, eventPassiveSupported ? {
                            passive: i,
                            capture: n
                        } : n) : e.attachEvent && e.attachEvent("on" + l, r), registeredEvents.push([e, l, r])
                    }
                }
            }

            function removeEvent(e, t, r, o) {
                var n = !!o && !0 === o.capture,
                    i = !!o && !0 === o.passive;
                if (e = ge(e), r = r || rf, e && 3 != e.nodeType && 8 != e.nodeType)
                    for (var a = 0, s = (t = t.split(" ")).length; a < s; a++) {
                        var l = t[a];
                        e.removeEventListener ? e.removeEventListener(l, r, eventPassiveSupported ? {
                            passive: i,
                            capture: n
                        } : n) : e.detachEvent && e.detachEvent("on" + l, r)
                    }
            }

            function preventEvent(e) {
                return !!(e = e || window.event) && ((e = e.originalEvent || e).preventDefault && e.preventDefault(), e.returnValue = !1, !1)
            }

            function stopEvent(e) {
                return !!(e = e || window.event) && ((e = e.originalEvent || e).stopPropagation && e.stopPropagation(), e.cancelBubble = !0, !1)
            }

            function cancelEvent(e) {
                return !!(e = e || window.event) && ((e = e.originalEvent || e).preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0, e.returnValue = !1, !1)
            }

            function checkEvent(e) {
                var t = window.PointerEvent;
                return (e = e || window.event) && (!t || !(e instanceof t)) && ("click" == e.type || "mousedown" == e.type || "mouseup" == e.type) && (e.which > 1 || e.button > 1 || e.ctrlKey || e.shiftKey || e.metaKey)
            }

            function onCtrlEnter(e, t, r) {
                var o = window.browser;
                if (10 == (t = t || window.event).keyCode || 13 == t.keyCode && (t.ctrlKey || t.metaKey && o.mac)) {
                    if ((0, _common.isUndefined)(r)) {
                        var n = submitBtn(e);
                        n && n.click()
                    } else r.call(e);
                    cancelEvent(t)
                }
            }

            function submitBtn(e) {
                if (!e) return !1;
                var t = "form" === tag(e) ? e : e.form || gpeByTag("form", e);
                if (!t) return !1;
                for (var r in t) {
                    var o = t[r],
                        n = tag(o);
                    if ("button" === n && "submit" === o.type || "input" === n && "submit" === o.type && /(^|\\s)(small_)?button(\\s|$)/i.test(o.className) && !o.name) return o
                }
                return !1
            }

            function createIframe(e, t) {
                var r = ce("iframe", e = extend(e || {}, {
                    border: "0"
                }), t = extend(t || {}, {
                    position: "absolute",
                    width: 1,
                    height: 1,
                    left: 10
                }));
                return append(r, "vk_utils"), r
            }

            function winToUtf(e) {
                return e.replace(/&#(\d\d+);/g, function(e, t) {
                    return (t = intval(t)) >= 32 ? String.fromCharCode(t) : e
                }).replace(/&quot;/gi, '"').replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
            }

            function shortCurrency() {
                var e = {};
                (0, _common.each)(geByClass("_short_currency"), function() {
                    var t = this.getAttribute("data-short") || "",
                        r = winToUtf(t).length,
                        o = getStyle(this, "fontFamily") || "tahoma,arial,sans-serif";
                    if (!t) return !0;
                    if ((0, _common.isUndefined)(e[o])) {
                        for (var n = "", i = r - 1; i >= 0; i--) n += "&#8399;";
                        var a = ce("div", {
                                innerHTML: "<b>" + t + "</b><b>" + n + "</b>"
                            }, {
                                fontFamily: o,
                                fontSize: "24px"
                            }),
                            s = ge("vk_utils");
                        s && s.appendChild(a), e[o] = Math.abs(a.firstChild.offsetWidth - a.lastChild.offsetWidth) >= 2 * r, remove(a)
                    }
                    e[o] && val(this, t)
                })
            }

            function checkNav(e, t) {
                if (!(e = ge(e))) return !1;
                do {
                    if (checkElementNav(e, t)) return e
                } while (e = e.parentNode);
                return !1
            }

            function checkElementNav(e, t) {
                var r = window.al;
                if (!r || !r.ver) return !1;
                if (!e) return !1;
                if (t = t || {}, "a" == tag(e)) {
                    if ((t.skip_onclick || e.getAttribute("data-skiponclick") || !e.getAttribute("onclick")) && (e.getAttribute("href") || e.getAttribute("data-href")) || hasClass("al_nav", e)) {
                        if (e.hostname) var o = e.hostname;
                        else {
                            var n = e.href || attr(e, "data-href");
                            o = (/^(https?:)\/\/([^:\/]+)?(?::(\d+))?\/?(.*)$/i.exec(n) || [])[2]
                        }
                        if ("_blank" === e.target && t.skip_blank || t.skip_clicable) return !0;
                        if ("_blank" !== e.target && (0, _common.isHttpHref)(n)) {
                            if (!o || o == location.hostname) return !0;
                            if (t.allow_post_away && o && e.getAttribute("data-post-id") && e.getAttribute("data-post-click-type")) return e.setAttribute("data-change-location-with-post-away", 1), !0
                        }
                    }
                } else if ("input" == tag(e) || "button" === tag(e) && e.form && !e.form.getAttribute("onsubmit")) {
                    if (e.form && ("submit" == e.type || "image" == e.type) && (t.skip_onclick || e.getAttribute("data-skiponclick") || !e.getAttribute("onclick")) || hasClass("al_nav", e)) return !0
                } else if ("label" == tag(e) && t.skip_clicable && (e.htmlFor || geByTag1("input", e) && (t.skip_onclick || e.getAttribute("data-skiponclick") || !e.getAttribute("onclick")) || hasClass("al_nav", e))) return !0;
                return !1
            }

            function checkTouchHover(e) {
                if (!(e = ge(e))) return !1;
                do {
                    if ("a" == tag(e) || hasClass("al_photo", e)) return e;
                    if (hasClass(Btn.className, e)) return e;
                    if ("label" == tag(e) && hasClass("option_row", e)) return e;
                    if (hasClass("_touched", e)) return e;
                    if (e.getAttribute && "button" === e.getAttribute("role")) return e
                } while (e = e.parentNode);
                return !1
            }

            function trim(e) {
                return (e || "").trim()
            }

            function parseCyr(e, t) {
                for (var r = e, o = ["yo", "zh", "kh", "ts", "ch", "sch", "shch", "sh", "eh", "yu", "ya", "YO", "ZH", "KH", "TS", "CH", "SCH", "SHCH", "SH", "EH", "YU", "YA", "'"], n = ["ё", "ж", "х", "ц", "ч", "щ", "щ", "ш", "э", "ю", "я", "Ё", "Ж", "Х", "Ц", "Ч", "Щ", "Щ", "Ш", "Э", "Ю", "Я", "ь"], i = 0, a = o.length; i < a; i++) r = t ? r.split(o[i]).join(n[i]) : r.split(n[i]).join(o[i]);
                var s = "abvgdezijklmnoprstufhcyABVGDEZIJKLMNOPRSTUFHCYёЁ",
                    l = "абвгдезийклмнопрстуфхцыАБВГДЕЗИЙКЛМНОПРСТУФХЦЫеЕ";
                for (i = 0, a = s.length; i < a; i++) r = t ? r.split(s.charAt(i)).join(l.charAt(i)) : r.split(l.charAt(i)).join(s.charAt(i));
                return r == e ? null : r
            }

            function parseLat(e) {
                return parseCyr(e, !0)
            }

            function parseRusKeys(e, t, r) {
                if (!t) return null;
                for (var o = e, n = "qwertyuiop[]asdfghjkl;'zxcvbnm,./`QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?~", i = "йцукенгшщзхъфывапролджэячсмитьбю.ёЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,Ё", a = 0, s = n.length; a < s; a++) o = r ? o.split(n.charAt(a)).join(i.charAt(a)) : o.split(i.charAt(a)).join(n.charAt(a));
                return o == e ? null : o
            }

            function parseLatKeys(e, t) {
                return parseRusKeys(e, t, !0)
            }

            function scrollLeft() {
                var e = window,
                    t = e.htmlNode,
                    r = e.bodyNode,
                    o = e.scrollBodyNode;
                return t && t.scrollLeft || o && o.scrollLeft || r && r.scrollLeft || window.scrollX || 0
            }

            function scrollTop(e, t) {
                var r = window,
                    o = r.htmlNode,
                    n = r.bodyNode,
                    i = r.scrollBodyNode,
                    a = ge("mcont"),
                    s = hasClass("vk_custom_scroll", n) && a;
                if (void 0 === e) return s ? a && a.scrollTop || 0 : o && o.scrollTop || i && i.scrollTop || n && n.scrollTop || window.scrollY || 0;
                t ? s ? setTimeout(function() {
                    a.scrollTop = Math.max(0, e)
                }, t) : setTimeout(function() {
                    window.scrollTo(0, Math.max(0, e))
                }, t) : s ? a.scrollTop = Math.max(0, e) : window.scrollTo(0, Math.max(0, e))
            }

            function se() {
                var e = [],
                    t = Array.prototype.slice.call(arguments);
                return function(r, o) {
                    if (r)
                        if (r.apply) e.push(r);
                        else if ("__clear" === r)
                        if (o) {
                            for (var n = 0, i = e.length; n < i; n++)
                                if (e[n] === o) {
                                    e.splice(n, 1);
                                    break
                                }
                        } else e = [];
                    else {
                        var a = Array.prototype.slice.call(arguments);
                        a.shift();
                        var s = 0;
                        for (i = e.length; s < i; s++) e[s].apply(window, getValues(t).concat(a))
                    }
                }
            }

            function onBodyScrollForce(e) {
                var t = window,
                    r = t.onBodyScroll,
                    o = t.onDOMReady;
                e ? setTimeout(function() {
                    r(!0)
                }, e) : o(function() {
                    r(!0)
                })
            }

            function sgFix() {
                var e = window,
                    t = e._ua,
                    r = e.ajax,
                    o = e.page,
                    n = e.clog;
                /galaxy|gt\-/i.test(t) && (window.vkSGi = 0, window.vkAjax = r, window.vkPage = o, function e() {
                    if (!(++window.vkSGi > 25)) return r !== window.vkAjax || o !== window.vkPage ? (r = window.vkAjax, o = window.vkPage, n("SG fixed"), void delete window.vkSGi) : void setTimeout(e, 200);
                    delete window.vkSGi
                }())
            }

            function hideUnvisibleItems(e) {
                var t = window.cur;
                if (t.alHiddenObjects) {
                    var r = getValues(t.alHiddenObjects);
                    if (r) {
                        var o = (e = e || {}).delta || 3 * getCh(),
                            n = scrollTop(),
                            i = n + getCh(),
                            a = n - o,
                            s = i + o,
                            l = [],
                            c = [],
                            u = null,
                            d = null;
                        if ((0, _common.each)(r, function(e, t) {
                                var r = gpeByClass("ali_wrap", t);
                                if (!r) return !0;
                                var o = r.offsetHeight,
                                    n = getY(r),
                                    i = n + o,
                                    f = isVisible(t);
                                i < a || n > s ? f && l.push([r, t, o]) : f ? u || (u = r, d = n) : c.push([r, t])
                            }), (0, _common.each)(c, function(e, t) {
                                var r = t[0],
                                    o = t[1];
                                setStyle(r, "height", "auto"), show(o)
                            }), (0, _common.each)(l, function(e, t) {
                                var r = t[0],
                                    o = t[1];
                                setStyle(r, "height", t[2]), hide(o)
                            }), u && d) {
                            var f = getY(u);
                            f != d && scrollTop(n + (f - d))
                        }
                    }
                }
            }

            function initObjectsHideByScroll(e, t) {
                var r = window,
                    o = r.cur,
                    n = r.onBodyScroll,
                    i = r.onDOMReady;
                o && e && (o.alHiddenObjects = e, n(function() {
                    hideUnvisibleItems(t)
                }), i(function() {
                    hideUnvisibleItems(t)
                }))
            }

            function checkPostsSeen() {
                var e = window,
                    t = e.cur,
                    r = e.pStats;
                if (t && t.alPostsStatsObjects) {
                    var o = getValues(t.alPostsStatsObjects);
                    if (o) {
                        var n = scrollTop(),
                            i = n + getCh(),
                            a = [];
                        o.forEach(function(e, t) {
                            if (attr(e, "data-ignore")) return !0;
                            var o = getY(e),
                                s = o + e.offsetHeight,
                                l = (isVisible(e), attr(e, "data-clicked")),
                                c = e.bits || 0;
                            return c >= 3 || (s < n || o > i || (c |= o >= n && o < i || l ? 1 : 0, void((c |= s >= n && s < i || l ? 2 : 0) && (e.bits = c, 3 == c && (a.push(r.postsGetRaws(e)), r.viewed(e))))))
                        }), r.seen(a)
                    }
                }
            }

            function initPostsStats(e) {
                var t = window,
                    r = t.cur,
                    o = t.onBodyScroll,
                    n = t.onDOMReady;
                r && e && (r.alPostsStatsObjects = e, o(function() {
                    checkPostsSeen()
                }), n(function() {
                    checkPostsSeen()
                }))
            }

            function initAutoScroll(e, t, r) {
                var o = window.onBodyScroll;
                if (e && t) {
                    var n = (r = r || {}).delta || !1;
                    o(throttle(function(r) {
                        var o = e();
                        if (o) {
                            var i = getY(o),
                                a = getCh();
                            i > 0 && i - r - a < (n || 2 * a) && t.call(o)
                        }
                    }, 33))
                }
            }

            function autoScroll(e, t, r) {
                var o = window.ajax;
                r = r || {};
                var n = getValues(e),
                    i = ge("show_more_loading"),
                    a = r.no_cache || !1,
                    s = function() {
                        o.click(this, t, {
                            use_cache: !a
                        })
                    };
                !n && i && s.call(i), initAutoScroll(e, s, r), r.hide_objects && initObjectsHideByScroll(r.hide_objects)
            }

            function scrollToEl(e, t, r) {
                t = t || 0, scrollTop(((e = ge(e) || window) === window ? 1 : getY(e)) - t, r)
            }

            function scrollToHash(e) {
                var t = window.nav;
                if ("#" === (e = e || t.hash || location.hash)[0] && (e = e.substr(1)), e) {
                    var r = geBySel("a[name]");
                    !1 === r && (r = geByTag("a")), (0, _common.each)(r, function(t, r) {
                        if (r.name == e) return scrollToEl(r), !1
                    })
                }
            }

            function lockButton(e) {
                var t = ge(e);
                if (/(^|\s)(small_)?button(\s|$)/i.test(t.className)) {
                    var r = ce("button", {
                        id: t.id,
                        className: t.className,
                        innerHTML: '<span class="button_locked"><b class="button_locked_label">' + (0, _common.htsc)(val(t)) + "</b></span>",
                        onclick: function(e) {
                            return cancelEvent(e)
                        },
                        real_btn: t
                    });
                    t.fake_btn = r, before(r, t), remove(t)
                }
            }

            function unlockButton(e) {
                var t = ge(e);
                t.real_btn ? (before(t.real_btn, t), remove(t), t.real_btn.fake_btn = null, t.real_btn = null) : t.fake_btn && (before(t, t.fake_btn), remove(t.fake_btn), t.fake_btn.real_btn = null, t.fake_btn = null)
            }

            function extend() {
                var e = Array.prototype.slice.call(arguments),
                    t = e.shift();
                if (!e.length) return t;
                for (var r = 0, o = e.length; r < o; r++)
                    for (var n in e[r]) "layerX" != n && "layerY" != n && (t[n] = e[r][n]);
                return t
            }

            function ge(e) {
                return "string" == typeof e ? document.getElementById(e) : e
            }

            function geByClass(e, t, r) {
                if (r = r || "*", (t = ge(t) || document).getElementsByClassName) {
                    var o = t.getElementsByClassName(e);
                    if ("*" == r) return Array.prototype.slice.call(o);
                    var n = [];
                    r = r.toUpperCase();
                    for (var i = 0, a = o.length; i < a; i++) o[i].tagName.toUpperCase() == r && n.push(o[i]);
                    return n
                }
                o = geByTag(r, t), n = [];
                var s = new RegExp("(^|\\s)" + (0, _common.escapeRE)(e) + "(\\s|$)");
                for (i = 0, a = o.length; i < a; i++) s.test(o[i].className) && n.push(o[i]);
                return n
            }

            function geByClass1(e, t, r) {
                return geByClass(e, t, r)[0]
            }

            function gpeByClass(e, t) {
                if (!(t = ge(t))) return null;
                for (; t = t.parentNode;)
                    if (hasClass(e, t)) return t;
                return null
            }

            function geByTag(e, t) {
                return (ge(t) || document).getElementsByTagName(e)
            }

            function geByTag1(e, t) {
                return geByTag(e, t)[0]
            }

            function gpeByTag(e, t) {
                if (!(t = ge(t))) return null;
                for (e = e.toUpperCase(); t = t.parentNode;)
                    if (t.tagName && t.tagName.toUpperCase() == e) return t;
                return null
            }

            function geBySel(e, t) {
                return !!(t = ge(t) || document).querySelectorAll && t.querySelectorAll(e)
            }

            function geBySel1(e, t) {
                return !!(t = ge(t) || document).querySelector && t.querySelector(e)
            }

            function append(e, t) {
                return e = ge(e), t = ge(t), e && t && t.appendChild(e) || !1
            }

            function before(e, t) {
                return (t = ge(t)) && t.parentNode && t.parentNode.insertBefore(ge(e), t) || !1
            }

            function after(e, t) {
                return (t = ge(t)) && t.parentNode && t.parentNode.insertBefore(ge(e), t.nextSibling) || !1
            }

            function replace(e, t) {
                before(e, t) && remove(t)
            }

            function remove(e) {
                return !(!(e = ge(e)) || !e.parentNode) && e.parentNode.removeChild(e)
            }

            function clone(e) {
                return !!(e = ge(e)) && e.cloneNode(!0)
            }

            function reflow(e) {
                e = ge(e);
                try {
                    e.offsetWidth, e.offsetHeight
                } catch (e) {}
            }

            function tag(e) {
                return ((e = ge(e)) && e.tagName || "").toLowerCase()
            }

            function outer(e) {
                return (e = ge(e)) ? val(ce("div").appendChild(clone(e)).parentNode) : ""
            }

            function show(e) {
                var t = ge(e);
                t && (t.style.display = t.oldstyle || (hasClass("_ib", t) ? "inline-block" : hasClass("_i", t) || "span" == tag(t) ? "inline" : "block"))
            }

            function hide(e) {
                var t = ge(e);
                t && ("none" != t.style.display && (t.oldstyle = t.style.display), t.style.display = "none")
            }

            function isVisible(e) {
                var t = ge(e);
                return !(!t || !t.style) && "none" != t.style.display
            }

            function toggle(e, t) {
                void 0 === t && (t = !isVisible(e)), t && isVisible(e) || (t || isVisible(e)) && (t ? show : hide)(e)
            }

            function ce(e, t, r) {
                var o = document.createElement(e);
                return t && extend(o, t), r && setStyle(o, r), o
            }

            function elfocus(e, t, r) {
                e = ge(e);
                try {
                    if (e.focus(), void 0 !== t && !1 !== t || (t = e.value.length), void 0 !== r && !1 !== r || (r = t), e.createTextRange) {
                        var o = e.createTextRange();
                        o.collapse(!0), o.moveEnd("character", t), o.moveStart("character", r), o.select()
                    } else e.setSelectionRange && e.setSelectionRange(t, r)
                } catch (e) {}
            }

            function elblur(e) {
                (e = ge(e)) && e.blur && e.blur()
            }

            function val(e, t) {
                if (!(e = ge(e))) return "";
                var r = e.tagName.toLowerCase(),
                    o = "input" == r || "textarea" == r || "select" == r,
                    n = o && ("radio" == e.type || "checkbox" == e.type);
                if (void 0 === t) return o ? n ? e.checked : e.value : e.innerHTML;
                if (o) n ? e.checked = t : e.value = t;
                else {
                    e.innerHTML = t;
                    var i = window.ajax;
                    "a" != r && (i.prepare_click(e), i.onPrepared(!0, e))
                }
            }

            function attr(e, t, r) {
                if (e = ge(e)) return void 0 === r ? "data-" == t.substr(0, 5) && e.dataset ? e.dataset[t.substr(5).replace(/-([a-z0-9])/, function(e, t) {
                    return t.toUpperCase()
                })] || !1 : e.getAttribute && e.getAttribute(t) || !1 : !1 === r ? e.removeAttribute && e.removeAttribute(t) || !1 : void(e.setAttribute && e.setAttribute(t, r))
            }

            function cssToJs(e, t) {
                return t ? t + (e || "").replace(/(?:^|-)([a-z])/g, function(e, t) {
                    return (t || "").toUpperCase()
                }) : (e || "").replace(/-([a-z])/g, function(e, t) {
                    return (t || "").toUpperCase()
                })
            }

            function getCssPropertyName(e, t, r) {
                e = ge(e) || ce("div");
                for (var o = ["webkit", "Moz", "ms", "O", ""], n = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0, a = o.length; i < a; i++) {
                    var s = cssToJs(t, o[i]);
                    if (void 0 !== e.style[s]) return r ? n[i] + t : s
                }
                return !1
            }

            function cssValue(e, t) {
                if ("number" == typeof e) {
                    e = Math.round(1e7 * e) / 1e7 + (t || "")
                }
                return e
            }

            function getStyle(e, t, r) {
                if (!(e = ge(e))) return !1;
                if ((0, _common.isArray)(t)) {
                    var o = {};
                    return (0, _common.each)(t, function(t, r) {
                        o[r] = getStyle(e, r)
                    }), o
                }
                if ((0, _common.isUndefined)(r) && (r = !0), /transform(-origin)?|transition(-duration)?/i.test(t) && !(t = getCssPropertyName(e, t))) return !1;
                var n = window.browser;
                if (!r && "opacity" == t && n.msie) return (l = e.style.filter) ? l.indexOf("opacity=") >= 0 ? parseFloat(l.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1" : "";
                if (!r && e.style && (e.style[t] || "height" == t)) return e.style[t];
                var i, a = document.defaultView || window;
                if (a.getComputedStyle) {
                    t = t.replace(/([A-Z])/g, "-$1").toLowerCase();
                    var s = a.getComputedStyle(e, null);
                    s && (i = s.getPropertyValue(t))
                } else if (e.currentStyle) {
                    var l;
                    if ("opacity" == t && n.msie) return (l = e.currentStyle.filter) && l.indexOf("opacity=") >= 0 ? parseFloat(l.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1";
                    var c = t.replace(/\-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    });
                    "auto" == (i = e.currentStyle[t] || e.currentStyle[c]) && (i = 0), i = (i + "").split(" "), (0, _common.each)(i, function(t, r) {
                        if (!/^\d+(px)?$/i.test(r) && /^\d/.test(r)) {
                            var o = e.style,
                                n = o.left,
                                a = e.runtimeStyle.left;
                            e.runtimeStyle.left = e.currentStyle.left, o.left = r || 0, i[t] = o.pixelLeft + "px", o.left = n, e.runtimeStyle.left = a
                        }
                    }), i = i.join(" ")
                }
                if (r && ("width" == t || "height" == t)) {
                    var u = "width" == t ? getW(e) : getH(e);
                    i = (intval(i) ? Math.max(floatval(i), u) : u) + "px"
                }
                return i
            }

            function setStyle(e, t, r) {
                if ((e = ge(e)) && e.style) {
                    if ((0, _common.isObject)(t)) return (0, _common.each)(t, function(t, r) {
                        setStyle(e, t, r)
                    });
                    var o = "number" == typeof r;
                    o && /height|width/i.test(t) && (r = Math.abs(r)), /transform(-origin)?|transition(-duration)?/i.test(t) && !(t = getCssPropertyName(e, t)) || (e.style[t] = o && !/z-?index|font-?weight|opacity|zoom|line-?height/i.test(t) ? r + "px" : r)
                }
            }

            function hasClass(e, t, r) {
                if ("string" == typeof t && "string" != typeof e) {
                    var o = [t, e];
                    e = o[0], t = o[1]
                }
                if (t = ge(t)) return new RegExp("(^|\\s)" + (r ? e : (0, _common.escapeRE)(e)) + "(\\s|$)").test(t.className)
            }

            function addClass(e, t) {
                if ("string" == typeof t && "string" != typeof e) {
                    var r = [t, e];
                    e = r[0], t = r[1]
                }(t = ge(t)) && !hasClass(e, t) && (t.className = (t.className ? t.className + " " : "") + e)
            }

            function removeClass(e, t, r) {
                if ("string" == typeof t && "string" != typeof e) {
                    var o = [t, e];
                    e = o[0], t = o[1]
                }(t = ge(t)) && hasClass(e, t, r) && (t.className = (t.className || "").replace(new RegExp("(^|\\s)" + (r ? e : (0, _common.escapeRE)(e)) + "(\\s|$)"), function(e, t, r) {
                    return t && r ? " " : ""
                }))
            }

            function toggleClass(e, t, r) {
                (void 0 === r ? hasClass(e, t) : !r) ? removeClass(e, t): addClass(e, t)
            }

            function replaceClass(e, t, r, o) {
                removeClass(e, r, o), addClass(t, r)
            }

            function switchClass(e, t, r) {
                hasClass(e, r) ? replaceClass(e, t, r) : replaceClass(t, e, r)
            }

            function getXY(e) {
                if (!(e = ge(e))) return [0, 0];
                if ("function" == typeof e.getBoundingClientRect) {
                    var t = e.getBoundingClientRect(),
                        r = t.left,
                        o = t.top;
                    return [r + scrollLeft(), o + scrollTop()]
                }
                var n = 0,
                    i = 0;
                if (e.offsetParent)
                    do {
                        n += e.offsetLeft, i += e.offsetTop
                    } while (e = e.offsetParent);
                return [n, i]
            }

            function getX(e) {
                return getXY(e)[0]
            }

            function getY(e) {
                return getXY(e)[1]
            }

            function getW(e) {
                return (e = ge(e)) && e.offsetWidth || 0
            }

            function getH(e) {
                return (e = ge(e)) && e.offsetHeight || 0
            }

            function getSize(e) {
                return [getW(e = ge(e)), getH(e)]
            }

            function getCw() {
                return Math.max(window.innerWidth || 0, (window.htmlNode || {}).clientWidth || 0)
            }

            function getCh() {
                return Math.max(window.innerHeight || 0, (window.htmlNode || {}).clientHeight || 0)
            }

            function evalJs(e) {
                window.execScript ? window.execScript(e) : eval.call(window, e)
            }

            function domData(e, t, r) {
                return e ? void 0 !== r ? (null === r ? e.removeAttribute("data-" + t) : e.setAttribute("data-" + t, r), r) : e.getAttribute("data-" + t) : null
            }

            function alLoadingFix(e, t) {
                var r = ge(t = t || "al_loading");
                if (r) {
                    if (!e && !hasClass("BottomMenu__preloader", r)) {
                        var o = ge("m").offsetHeight || 0,
                            n = ge("mfoot") && ge("mfoot").offsetHeight || 0;
                        e = getCh() - o + n
                    }
                    r.style.height = e + "px", addClass(t, r)
                }
            }

            function getHref(e) {
                if (!e) return !1;
                var t = !1;
                return e.getAttribute && (t = e.getAttribute("data-href") || e.getAttribute("href")), t || (e.pathname ? t = e.pathname + e.search + e.hash : tag(e) || (t = e)), t || !1
            }

            function indexOf(e, t, r) {
                for (var o = r || 0, n = (e || []).length; o < n; o++)
                    if (e[o] == t) return o;
                return -1
            }

            function isToday(e) {
                var t = new Date;
                return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
            }

            function isYesterday(e) {
                return isToday(new Date(e.getTime() + 864e5))
            }

            function isTomorrow(e) {
                return isToday(new Date(e.getTime() - 864e5))
            }

            function isSameDate(e, t) {
                var r = new Date(e),
                    o = new Date(t);
                return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth() && r.getDate() === o.getDate()
            }

            function leadingZero(e) {
                return e >= 10 ? e : "0" + e
            }

            function langSex(e, t) {
                if (!(0, _common.isArray)(t)) return t;
                var r = t[1];
                return window.langConfig ? ((0, _common.each)(langConfig.sexRules, function(o, n) {
                    return "*" == n[0] ? (r = t[n[1]], !1) : e == n[0] && t[n[1]] ? (r = t[n[1]], !1) : void 0
                }), r) : r
            }

            function langNumeric(e, t, r) {
                var o, n = window.langConfig;
                if (!t || !n) return e;
                if ((0, _common.isArray)(t) ? (o = t[1], e != Math.floor(e) ? o = t[n.numRules.float] : (0, _common.each)(n.numRules.int, function(r, n) {
                        if ("*" == n[0]) return o = t[n[2]], !1;
                        var i = n[0] ? e % n[0] : e;
                        return -1 != indexOf(n[1], i) ? (o = t[n[2]], !1) : void 0
                    })) : o = t, r) {
                    for (var i = e.toString().split("."), a = [], s = i[0].length - 3; s > -3; s -= 3) a.unshift(i[0].slice(s > 0 ? s : 0, s + 3));
                    i[0] = a.join(n.numDel), e = i.join(n.numDec)
                }
                return o = (o || "%s").replace("%s", e)
            }

            function langWordNumeric(e, t, r) {
                return (0, _common.isArray)(t) && e < t.length ? t[e] : langNumeric(e, r)
            }

            function langDate(e, t, r, o, n, i) {
                var a, s = window.langConfig;
                if (i || (i = ""), (0, _common.isArray)(t) || (t = ["", t, t, t, t]), "number" == typeof e || "string" == typeof e ? (e > 2147483646e3 && (e = 0), e += r, a = new Date(e)) : a = e, n) t = t[1];
                else {
                    var l = "";
                    !(l = isToday(a) ? t[3] : isYesterday(a) ? t[2] : isTomorrow(a) ? t[4] : t[1]) && t[1] && (l = t[1]), t = l
                }
                var c = "",
                    u = {
                        hours: a.getHours(),
                        minutes: a.getMinutes(),
                        seconds: a.getSeconds(),
                        day: a.getDate(),
                        month: a.getMonth() + 1,
                        year: a.getFullYear()
                    };
                switch (3 === s.id && (c = a.getHours() > 11 ? "pm" : "am", u.hours = a.getHours() % 12 == 0 ? 12 : a.getHours() % 12), s.id) {
                    case 1:
                        switch (a.getHours()) {
                            case 11:
                                t = t.replace(" о ", " об ");
                                break;
                            case 0:
                                t = t.replace(" о ", " в ")
                        }
                        break;
                    case 3:
                        !isToday(a) || isYesterday(a) || isTomorrow(a) || (t = i + t);
                        break;
                    case 12:
                    case 73:
                        1 == a.getHours() && (t = t.replace(" &#224;s ", " &#224; "))
                }
                return 68 === s.id && (u.year = u.year + 543), t.replace("{hour}", u.hours).replace("{num_hour}", leadingZero(u.hours)).replace("{minute}", leadingZero(u.minutes)).replace("{day}", u.day).replace("{num_day}", leadingZero(u.day)).replace("{month}", o[u.month]).replace("{year}", u.year).replace("{short_year}", u.year % 100).replace("{second}", leadingZero(u.seconds)).replace("{am_pm}", c)
            }

            function setNotify(e) {
                var t = intval(e),
                    r = ge("header_msgs"),
                    o = geByClass1("pcont", "l");
                if (r && (window.isNewMail ? val(r, '<div class="hb_btn mhi_notify">' + (t > 0 ? '<em class="mh_notify_counter">' + t + "</em>" : "") + "</div>") : val(r, '<div class="hb_btn mhi_notify">' + (t > 0 ? '<em class="mh_notify_counter">' + t + "</em>" : "&nbsp;") + "</div>"), t > 0 ? removeClass("mhb_no_notify", r) : addClass("mhb_no_notify", r), o)) {
                    var n = geByClass1("mmi_mail", o),
                        i = geByClass1("mmi_wrap", n),
                        a = geByClass1("mm_counter", i);
                    if (!n) return;
                    t > 0 ? a ? val(a, t) : append(ce("em", {
                        className: "mm_counter",
                        innerHTML: t
                    }), i) : remove(a)
                }
            }

            function getNotify() {
                var e = ge("header_msgs");
                return e ? intval(val(geByTag1("em", e))) : 0
            }

            function canUploadFile() {
                return (window.XMLHttpRequest || window.XDomainRequest) && (window.FormData || window.FileReader && (window.XMLHttpRequest && XMLHttpRequest.sendAsBinary || window.ArrayBuffer && window.Uint8Array && (window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder)))
            }

            function uploadFile(e, t, r) {
                var o = window.XDomainRequest || window.XMLHttpRequest,
                    n = new o;
                n.open("POST", e, !0), n.upload.addEventListener("progress", r.onProgress || rf, !1), n.onload = r.onComplete || rf, n.onerror = r.onError || rf;
                var i = r.onStart || rf;
                if (window.FormData) {
                    var a = new FormData;
                    for (var s in t) a.append(s, t[s]);
                    return n.send(a), i(n), n
                }
                try {
                    if (o && !o.prototype.sendAsBinary && window.ArrayBuffer && window.Uint8Array) {
                        var l = window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder;
                        l && (o.prototype.sendAsBinary = function(e) {
                            for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t, 0), o = 0; o < e.length; o++) r[o] = 255 & e.charCodeAt(o);
                            var n = new l;
                            n.append(t);
                            var i = n.getBlob();
                            this.send(i)
                        })
                    }
                    var c = "----VkComFormBoundary-" + (0, _common.srand)(),
                        u = "",
                        d = 0,
                        f = function(e, t, r) {
                            r += "--" + t + "--", e.setRequestHeader("Content-type", 'multipart/form-data; boundary="' + t + '"'), e.sendAsBinary(r), i(e)
                        };
                    for (var s in t)
                        if ("function" == typeof t[s].getAsBinary) {
                            d++;
                            var p = new FileReader,
                                m = t[s],
                                g = m.fileName || m.name || "";
                            p.onload = function() {
                                u += "--" + c + '\r\nContent-Disposition: form-data; name="' + (0, _common.utf2win)(s) + '"; filename="' + (0, _common.utf2win)(g) + '"\r\nContent-Type: application/octet-stream\r\n', p.result, --d || f(n, c, u)
                            }, p.readAsBinaryString(m)
                        } else u += "--" + c + '\r\nContent-Disposition: form-data; name="' + (0, _common.utf2win)(s) + '"\r\n\r\n' + (0, _common.utf2win)(t[s]) + "\r\n";
                    return d || f(n, c, u), n
                } catch (e) {
                    return !1
                }
                return !1
            }

            function readFile(e, t) {
                if (window.FileReader && window.vk.iu_ex) {
                    var r = new FileReader;
                    r.onload = function() {
                        t && t(r.result), r = null
                    }, r.readAsDataURL(e)
                }
            }

            function formatTime(e) {
                var t, r, o, n = e < 0;
                return t = (r = (e = Math.round(n ? -e : e)) % 60) < 10 ? "0" + r : r, t = (o = (e = Math.floor(e / 60)) % 60) + ":" + t, (e = Math.floor(e / 60)) > 0 && (o < 10 && (t = "0" + t), t = e + ":" + t), n && (t = "-" + t), t
            }

            function domClosestOverflowHidden(e) {
                for (var t, r, o, n, i = e = ge(e); i && i.tagName && i !== bodyNode && (t = getStyle(i, "position"), r = getStyle(i, "overflow"), o = getStyle(i, "transform"), i === e || "visible" === r || ("static" === t ? n && "relative" !== n : "fixed" === n));) "none" !== o ? n = void 0 : "static" !== t && "fixed" !== n && (n = t), i = (i || {}).parentNode;
                return i
            }

            function copyToClipboard(e) {
                var t;
                (0, _select.default)(e);
                try {
                    t = document.execCommand("copy")
                } catch (e) {
                    t = !1
                }
                return t
            }

            function blinkItem(e, t) {
                setStyle(e, {
                    opacity: 1
                }), setTimeout(function() {
                    return setStyle(e, {
                        opacity: 0
                    })
                }, t)
            }

            function domPN(e) {
                return (e || {}).parentNode
            }

            function matchesSelector(e, t) {
                return !(!(e = ge(e)) || e == document) && (e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || function(e) {
                    for (var t = (this.parentNode || this.document || this.ownerDocument).querySelectorAll(e), r = t.length; --r >= 0 && t[r] !== this;);
                    return r > -1
                }).call(e, t)
            }

            function domCA(e, t) {
                do {
                    e = domPN(e)
                } while (e && !matchesSelector(e, t));
                return e
            }

            function getLang() {
                try {
                    var e = Array.prototype.slice.call(arguments),
                        t = e.shift();
                    if (!t) return "...";
                    var r = window.cur && window.cur.lang && window.cur.lang[t] || window.lang && window.lang[t] || window.langpack && window.langpack[t] || window[t];
                    if (!r) {
                        var o = t.split("_");
                        return o.shift(), o.join(" ")
                    }
                    return (0, _common.isFunction)(r) ? r.apply(null, e) : void 0 === e[0] && !(0, _common.isArray)(r) || "raw" === e[0] ? r : langNumeric(e[0], r, e[1])
                } catch (e) {
                    console.log("lang error:" + e.message + "(" + Array.prototype.slice.call(arguments).join(", ") + ")")
                }
            }

            function throttle(e, t) {
                var r;
                return function() {
                    r || (e.apply(this, arguments), r = setTimeout(function() {
                        r = !1
                    }, t))
                }
            }

            function debounce(e, t) {
                return function r() {
                    r._timer && clearTimeout(r._timer);
                    var o = this,
                        n = arguments;
                    r._timer = setTimeout(function() {
                        r._timer = null, e.apply(o, n)
                    }, t)
                }
            }

            function scrollGetX() {
                return window.pageXOffset || scrollNode.scrollLeft || document.documentElement.scrollLeft
            }

            function scrollGetY() {
                return window.pageYOffset ? window.pageYOffset : window.scrollNode ? window.scrollNode.scrollTop : document.documentElement ? document.documentElement.scrollTop : 0
            }

            function domEL(e, t) {
                for (t = t ? "previousSibling" : "nextSibling"; e && !e.tagName;) e = e[t];
                return e
            }

            function domPS(e) {
                return domEL((e || {}).previousSibling, 1)
            }

            function domNS(e) {
                return domEL((e || {}).nextSibling)
            }

            function domFC(e) {
                return domEL((e || {}).firstChild)
            }

            function domLC(e) {
                return domEL((e || {}).lastChild, 1)
            }

            function domInsertAfter(e, t) {
                var r = domPN(t);
                return r && r.insertBefore(e, domNS(t))
            }

            function domInsertBefore(e, t) {
                var r = domPN(t);
                return r && r.insertBefore(e, t)
            }

            function domChildIndex(e) {
                for (var t = 0; null != (e = domPS(e));) t++;
                return t
            }

            function domChildren(e) {
                for (var t = [], r = e.childNodes, o = 0; o < r.length; o++) r[o].tagName && t.push(r[o]);
                return t
            }

            function safeGet(e, t) {
                for (var r = t.split("."), o = r.length, n = e, i = 0; i < o; i++)
                    if (!(n = n[r[i]])) return;
                return n
            }

            function alwaysArray(e) {
                return Array.isArray(e) ? e : [e]
            }

            function disableFlex() {
                var e = (0, _Dollars.$)(".vk"),
                    t = Array.from((0, _Dollars.$$)("*")),
                    r = ["A", "IMG", "SPAN"];
                e.classList.remove("vk_flex_yes"), e.classList.add("vk_flex_no"), t.filter(function(e) {
                    return e instanceof Element && "flex" === getComputedStyle(e).display
                }).forEach(function(e) {
                    r.includes(e.tagName) ? e.style.display = "inline" : e.style.display = "block"
                })
            }

            function flatArray(e) {
                return Array.isArray(e) ? flatten(e) : [e]
            }

            function domQuery1(e, t) {
                return (t || document).querySelector(e)
            }

            function domQuery(e, t) {
                return (t || document).querySelectorAll(e)
            }

            function flatten(e) {
                var t = [];
                return e.forEach(function(e) {
                    (0, _common.isArray)(e) ? t = t.concat(flatten(e)): t.push(e)
                }), t
            }

            function ceFromString(e) {
                var t = document.createElement("div");
                return t.innerHTML = e.trim(), t.firstChild
            }

            function isIosWebView() {
                return window.webkit && window.webkit.messageHandlers
            }

            function isAndroidWebView() {
                return window.AndroidBridge
            }

            function isVkWebView() {
                return isIosWebView() ? "function" == typeof window.webkit.messageHandlers.VKWebAppInit : !!isAndroidWebView() && "function" == typeof window.AndroidBridge.VKWebAppInit
            }

            function acquireLock(e, t, r) {
                var o = "lock_" + e;
                if (lsCheck()) {
                    if (!0 !== lsGet(o)) {
                        lsSet(o, !0);
                        try {
                            t()
                        } catch (e) {}
                        return void lsSet(o, !1)
                    }
                    r || setTimeout(acquireLock.bind(window, e, t, !0), 100)
                } else t()
            }

            function statlogsValueEvent(e, t) {
                if (void 0 !== e && void 0 !== t) {
                    var r, o = [].slice.call(arguments, 2);
                    acquireLock("m_stats_cookie_lock", function() {
                        try {
                            r = (r = JSON.parse((0, _cookies.getCookie)("remixmsts"))).data
                        } catch (e) {
                            r = []
                        }
                        r.push([Math.round(Date.now() / 1e3), e, t].concat(o)), r = r.slice(r.length - 100);
                        var n = Math.round((0, _common.rand)(0, 1e9));
                        (0, _cookies.setCookie)("remixmsts", JSON.stringify({
                            data: r,
                            uniqueId: n
                        }), .01)
                    })
                }
            }

            function ajaxRequest(e, t, r, o) {
                r || (r = function() {}), t._ajax = 1;
                var n = nav.getQuery("community");
                return n && !t.community && (t.community = n), ajax.post(e, t, {
                    onDone: r,
                    onFail: o
                })
            }

            function asc(e, t) {
                return e - t
            }

            function desc(e, t) {
                return t - e
            }

            function unique(e, t, r) {
                return r.indexOf(e) === t
            }

            function first(e, t) {
                return 1 === arguments.length ? e[0] : t.slice(0, e)
            }

            function last(e, t) {
                return 1 === arguments.length ? e[e.length - 1] : t.slice(-e)
            }

            function toInt(e) {
                return parseInt(e, 10)
            }

            function toArray(e) {
                return "[object Object]" === Object.prototype.toString.call(e) ? Object.keys(e).map(function(t) {
                    return e[t]
                }) : Array.isArray(e) ? e : [e]
            }

            function groupBy(e, t) {
                var r = {};
                return e.forEach(function(e) {
                    var o = t(e);
                    (r[o] || (r[o] = [])).push(e)
                }), r
            }

            function domInsert(e, t, r) {
                var o = "string" == typeof t ? domCreate(t) : t;
                r >= 0 && e.children[r] ? e.insertBefore(o, e.children[r]) : e.appendChild(o)
            }

            function openApp(e) {
                e.startsWith("/") ? window.location = "vk://vk.com".concat(e) : window.location = "vk://".concat(e), setTimeout(function() {
                    window.location = "/?act=go2app"
                }, 25)
            }

            function domCreate(e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.children[0]
            }

            function rs(e, t) {
                return e.replace(/%([^%]+?)%/g, function(e) {
                    return e = e.slice(1, -1), t.hasOwnProperty(e) ? t[e] : ""
                })
            }

            function getPreloadData() {
                var e = ge("preload_data");
                return e ? JSON.parse(e.innerHTML.replace("\x3c!--", "").replace("--\x3e", "")) : []
            }

            function base64ToArrayBuffer(e) {
                0 === e.indexOf("data:") && (e = e.split(",")[1]);
                for (var t = window.atob(e), r = t.length, o = new Uint8Array(r), n = 0; n < r; n++) o[n] = t.charCodeAt(n);
                return o.buffer
            }

            function getImageOrientation(e) {
                var t = base64ToArrayBuffer(e),
                    r = new DataView(t);
                if (65496 !== r.getUint16(0, !1)) return -2;
                for (var o = r.byteLength, n = 2; n < o;) {
                    var i = r.getUint16(n, !1);
                    if (n += 2, 65505 === i) {
                        if (1165519206 !== r.getUint32(n += 2, !1)) return -1;
                        var a = 18761 === r.getUint16(n += 6, !1);
                        n += r.getUint32(n + 4, a);
                        var s = r.getUint16(n, a);
                        n += 2;
                        for (var l = 0; l < s; l++)
                            if (274 === r.getUint16(n + 12 * l, a)) return r.getUint16(n + 12 * l + 8, a)
                    } else {
                        if (65280 != (65280 & i)) break;
                        n += r.getUint16(n, !1)
                    }
                }
                return -1
            }
            extend(getStyle, {
                transform: function(e) {
                    var t, r = getStyle(e, "transform");
                    return r ? {
                        scale: (t = r.match(/(^|\s+)scale\(([0-9.]+)\)(\s+|$)/)) && t[2] || 1,
                        scale3d: (t = r.match(/(^|\s+)scale3d\(([0-9.]+,\s+([0-9.]+),\s+([0-9.]+))\)(\s+|$)/)) && t[2] || 1,
                        rotate: (t = r.match(/(^|\s+)rotate\(([0-9.-]+)(deg)?\)(\s+|$)/)) && +t[2] || 0,
                        translate: (t = r.match(/(^|\s+)translate\(([0-9.-]+)(px)?(?:,\s+([0-9.-]+)(px)?)\)(\s+|$)/)) && [+t[2], +t[4]] || [0, 0],
                        translate3d: (t = r.match(/(^|\s+)translate3d\(([0-9.-]+)(px)?(?:,\s+([0-9.-]+)(px)?)(?:,\s+([0-9.-]+)(px)?)\)(\s+|$)/)) && [+t[2], +t[4], +t[6]] || [0, 0, 0]
                    } : {
                        scale: 1,
                        rotate: 0,
                        translate: [0, 0]
                    }
                }
            }), extend(setStyle, {
                animate: function(e, t, r, o) {
                    if (getCssPropertyName(e, "transition")) {
                        if (!t) return e.onAnimationEnd ? e.onAnimationEnd() : setStyle.transition(e), setStyle;
                        var n = ((0, _common.isObject)(r) ? r.duration : r) || 200,
                            i = r.func || "ease";
                        setStyle.transition(e, t, n, i);
                        var a = window.browser;
                        e.onAnimationEnd && (a.opera ? e.removeEventListener("oTransitionEnd", e.onAnimationEnd) : removeEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd)), e.onAnimationEnd = function() {
                            return a.opera ? e.removeEventListener("oTransitionEnd", e.onAnimationEnd) : removeEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd), e.onAnimationEnd = null, setStyle.transition(e), o && o(e), !1
                        }, a.opera ? e.addEventListener("oTransitionEnd", e.onAnimationEnd) : addEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd)
                    }
                    return setStyle
                },
                transform: function(e, t, r, o) {
                    var n = window.has3d,
                        i = [];
                    if ((0, _common.isObject)(t)) {
                        n && (t.scale3d = t.scale, t.translate3d = t.translate);
                        var a = extend(getStyle.transform(e), t);
                        t = n ? a.scale3d : a.scale, o = a.rotate, r = n ? a.translate3d : a.translate
                    }
                    if ((0, _common.isArray)(t) ? n ? i.push("scale3d(" + cssValue(t[0]) + ", " + cssValue(t[1]) + ", 1)") : i.push("scale(" + cssValue(t[0]) + ", " + cssValue(t[1]) + ")") : void 0 !== t && (n ? i.push("scale3d(" + cssValue(t) + ", " + cssValue(t) + ", 1)") : i.push("scale(" + cssValue(t) + ")")), void 0 !== o && i.push("rotate(" + cssValue(o, "deg") + ")"), void 0 !== r && (n ? i.push("translate3d(" + cssValue(r[0], "px") + ", " + cssValue(r[1], "px") + ", 0)") : i.push("translate(" + cssValue(r[0], "px") + ", " + cssValue(r[1], "px") + ")")), !i.length) return setStyle(e, "transform", "none");
                    setStyle(e, "transform", i.join(" "))
                },
                transformOrigin: function(e, t, r) {
                    (0, _common.isArray)(t) && (r = t[1], t = t[0]), setStyle(e, "transform-origin", cssValue(t, "px") + " " + cssValue(r, "px"))
                },
                transition: function(e, t, r, o) {
                    var n = [];
                    if (!t) return setStyle(e, "transition", "none");
                    (0, _common.isArray)(t) || (t = t.split(/\s*,\s*/)), r = cssValue(r, "ms"), (0, _common.each)(t, function() {
                        var t = getCssPropertyName(e, this, !0),
                            i = [];
                        t && (i.push(t), i.push(r), o && i.push(o), n.push(i.join(" ")))
                    }), setStyle(e, "transition", n.join(","))
                }
            }), isReady = !1, readyList = [], ready = function() {
                if (!isReady && (isReady = !0, window.htmlNode = geByTag1("html"), window.bodyNode = geByTag1("body"), readyList)) {
                    for (var e = null; e = readyList.shift();) e.call(document);
                    readyList = null
                }
            }, document.addEventListener ? document.addEventListener("DOMContentLoaded", function e() {
                document.removeEventListener("DOMContentLoaded", e, !1), ready()
            }, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function e() {
                "complete" === document.readyState && (document.detachEvent("onreadystatechange", e), ready())
            }), window.addEventListener ? window.addEventListener("load", ready, !1) : window.attachEvent ? window.attachEvent("onload", ready) : window.onload = ready, window.onDOMReady = function(e) {
                isReady ? e.call(document) : readyList.push(e)
            }, window.cdf = (doc = document, frag = doc.createDocumentFragment(), elem = doc.createElement("div"), range = doc.createRange && doc.createRange(), frag && frag.appendChild(elem), range && range.selectNodeContents && range.selectNodeContents(elem), frag ? range && range.createContextualFragment ? function(e) {
                return e ? range.createContextualFragment(e) : doc.createDocumentFragment()
            } : function(e) {
                if (!e) return doc.createDocumentFragment();
                elem.innerHTML = e;
                for (var t = doc.createDocumentFragment(); elem.firstChild;) t.appendChild(elem.firstChild);
                return t
            } : function(e) {
                return ce("div", {
                    innerHTML: e
                })
            }), onDOMReady(function() {
                _browser.default.chrome || _browser.default.msie_edge ? window.scrollNode = document.scrollingElement || bodyNode : window.scrollNode = _browser.default.safari ? bodyNode : htmlNode
            })
        },
        UxAg: function(e, t, r) {
            "use strict";

            function o(e) {
                return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).querySelector(e)
            }

            function n(e) {
                return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).querySelectorAll(e)
            }
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.$ = o, t.$$ = n, window.$ = o, window.$$ = n,
                function() {
                    HTMLElement.prototype.$ = HTMLElement.prototype.querySelector, HTMLElement.prototype.$$ = HTMLElement.prototype.querySelectorAll;
                    try {
                        SVGElement.prototype.$ = SVGElement.prototype.querySelector, SVGElement.prototype.$$ = SVGElement.prototype.querySelectorAll
                    } catch (e) {}
                }()
        },
        W9Tc: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.partConfigEnabled = function(e) {
                var t = window.vk.pe;
                return !!(void 0 === t ? {} : t)[e]
            }, t.calculateTimeOffsets = function() {
                var e = window.vk.ts;
                if (e && !window.browser.opera_mobile) {
                    var t = new Date,
                        r = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()) / 1e3 - e;
                    r -= 10800, r = (r /= 60).toFixed(0), (r *= 60) < -55800 ? r += 86400 : r > 37800 && (r -= 86400);
                    var n = 0,
                        i = Math.abs(r);
                    [-12, -11, -10, -9.5, -9, -8, -7, -6, -5, -4.5, -4, -3.5, -3, -2, -1, 0, 1, 2, 3, 3.5, 4, 4.5, 5, 5.5, 5.75, 6, 6.5, 7, 8, 8.75, 9, 9.5, 10, 10.5, 11, 12, 12.75, 13, 14].forEach(function(e) {
                        var t = Math.round(3600 * (e - 3)),
                            o = Math.abs(r - t);
                        o < i && (i = o, n = t)
                    });
                    var a = (0, o.getCookie)("remixdt");
                    return void 0 !== a && intval(a) === n || (0, o.setCookie)("remixdt", n, 365), n
                }
                return 0
            };
            var o = r("J8bf")
        },
        Xrg9: function(e, t, r) {
            "use strict";

            function o() {
                return void 0 !== window.localStorage && null !== window.localStorage && void 0 !== window.JSON
            }

            function n(e) {
                try {
                    localStorage.removeItem(e)
                } catch (e) {}
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = {
                checkVersion: o,
                remove: n,
                get: function(e) {
                    if (!o()) return !1;
                    try {
                        return JSON.parse(localStorage.getItem(e))
                    } catch (e) {
                        return !1
                    }
                },
                set: function(e, t) {
                    n(e);
                    try {
                        return !!o() && localStorage.setItem(e, JSON.stringify(t))
                    } catch (e) {
                        return !1
                    }
                }
            };
            t.default = i
        },
        cq4b: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayContains = function(e, t) {
                return -1 !== e.indexOf(t)
            }, t.arrayRemove = function(e, t) {
                for (;;) {
                    var r = e.indexOf(t);
                    if (!(r >= 0)) break;
                    e.splice(r, 1)
                }
            }, t.arrayIntersects = function(e, t) {
                return e.some(function(e) {
                    return -1 !== t.indexOf(e)
                })
            }
        },
        jE6c: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isHttpHref = function(e) {
                var t = (e + "").split(":"),
                    r = t[1] && t[0] ? t[0] + ":" : location.protocol;
                return "http:" === r || "https:" === r
            }, t.each = function(e, t) {
                if (!e) return e;
                if (i(e) || void 0 === e.length) {
                    for (var r in e)
                        if (e.hasOwnProperty(r) && !1 === t.call(e[r], r, e[r])) break
                } else
                    for (var o = 0, n = e.length; o < n; o++) {
                        var a = e[o];
                        if (!1 === t.call(a, o, a)) break
                    }
                return e
            }, t.copy = function(e) {
                if (n(e)) return e.concat([]);
                if (i(e)) return extend({}, e);
                return e
            }, t.stripTags = t.srand = t.utf2win = t.unescapeAttr = t.locBase = t.vkNow = t.htsc = t.escapeStr = t.escapeRE = t.escapeAttr = t.irand = t.isUndefined = t.isString = t.isObject = t.isFunction = t.isEmpty = t.isArray = t.replaceEntities = t.rand = void 0;
            t.locBase = function() {
                return location.toString().replace(/#.+$/, "")
            };
            var o = function(e, t) {
                return Math.random() * (t - e + 1) + e
            };
            t.rand = o;
            t.isUndefined = function(e) {
                return void 0 === e
            };
            t.isFunction = function(e) {
                return e && "[object Function]" === Object.prototype.toString.call(e)
            };
            t.isString = function(e) {
                return "string" == typeof e
            };
            var n = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            t.isArray = n;
            var i = function(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            };
            t.isObject = i;
            t.isEmpty = function(e) {
                if (!i(e)) return !1;
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            };
            t.escapeRE = function(e) {
                return e ? e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1") : ""
            };
            t.htsc = function(e) {
                return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;").replace(/%/g, "&#37;")
            };
            t.escapeAttr = function(e) {
                return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;")
            };
            t.unescapeAttr = function(e) {
                return e.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
            };
            t.replaceEntities = function(e) {
                return ce("textarea", {
                    innerHTML: (e || "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }).value
            };
            t.escapeStr = function(e) {
                return e.replace(/\'/g, "\\'")
            };
            t.stripTags = function(e) {
                return e.replace(/<[^>]+>/g, "")
            };
            t.srand = function() {
                return Math.random().toString(36).substr(2)
            };
            t.irand = function(e, t) {
                return Math.floor(o(e, t))
            };
            t.utf2win = function(e) {
                return unescape(encodeURIComponent(e))
            };
            t.vkNow = function() {
                return +new Date
            }
        },
        jk6M: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.has3d = t.isTouch = t.mobPlatforms = t._ua = t.default = void 0;
            var o = window,
                n = o.ce,
                i = o.getCssPropertyName,
                a = window._ua;
            t._ua = a, a || (t._ua = a = navigator.userAgent.toLowerCase());
            var s = {
                version: (a.match(/.+(?:me|ox|on|rv|it|era|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
                amigo: /amigo.*mrchrome soc/i.test(a),
                opera: /opera/i.test(a),
                msie: /msie/i.test(a) && !/opera/i.test(a),
                msie6: /msie 6/i.test(a) && !/opera/i.test(a),
                msie7: /msie 7/i.test(a) && !/opera/i.test(a),
                msie8: /msie 8/i.test(a) && !/opera/i.test(a),
                msie9: /msie 9/i.test(a) && !/opera/i.test(a),
                mozilla: /firefox/i.test(a),
                chrome: /chrome/i.test(a) || /crios/i.test(a),
                safari: !/crios/i.test(a) && !/chrome/i.test(a) && /webkit|safari|khtml/i.test(a),
                iphone: /iphone/i.test(a),
                ipod: /ipod/i.test(a),
                iphone4: /iphone.*OS 4/i.test(a),
                ipod4: /ipod.*OS 4/i.test(a),
                ipad: /ipad/i.test(a),
                ios: +(a.match(/.+(?:ipod|ipad|iphone.*os) ([\d.]+)_/i) || [0, 0])[1],
                android: /android/i.test(a),
                bada: /bada/i.test(a),
                opera_mini: /opera mini/i.test(a),
                uc_mini: /mobile safari.*ucbrowser/i.test(a),
                mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile/i.test(a),
                msie_mobile: /iemobile/i.test(a),
                msie_edge: /edge/i.test(a) && !/opera/i.test(a),
                safari_mobile: /iphone|ipod|ipad/i.test(a),
                opera_mobile: /opera mini|opera mobi/i.test(a),
                mac: /mac/i.test(a),
                mi: /miuibrowser/i.test(a),
                meizu: /MZBrowser/i.test(a)
            };
            if (s.android) {
                var l = a.match(/android (\d[\.\d]*)/i);
                s.android_version = l ? l[1] : void 0
            }
            s.desktop = (s.opera || s.msie || s.mozilla || s.chrome || s.safari) && !s.mobile, s.wkwebview = function() {
                if (!s.ios) return !1;
                if (window.webkit && window.webkit.messageHandlers) return !0;
                var e = /constructor/i.test(window.HTMLElement),
                    t = !!window.indexedDB;
                if (-1 === a.indexOf("safari") || -1 === a.indexOf("version") || navigator.standalone) {
                    if (!t && e || !window.statusbar || !window.statusbar.visible);
                    else if (!e || t) return !0
                } else;
                return !1
            }();
            var c = {
                1: 1,
                2: 1,
                3: 1,
                4: 1,
                5: 1
            };
            t.mobPlatforms = c;
            var u = "ontouchstart" in window;
            t.isTouch = u;
            var d = function(e) {
                if ("WebKitCSSMatrix" in e && "m11" in new e.WebKitCSSMatrix) return !0;
                if ("MSCSSMatrix" in e && "m11" in new e.MSCSSMatrix) return !0;
                if ("CSSMatrix" in e && "m11" in new e.CSSMatrix) return !0;
                try {
                    var t = n("div"),
                        r = i(t, "transform");
                    return !!r && (t.style[r] = "translate3d(1px,1px,1px)", t.style[r] && "none" != t.style[r])
                } catch (e) {
                    return !1
                }
            }(window);
            t.has3d = d;
            var f = s;
            t.default = f, Object.assign(window, {
                browser: s,
                _ua: a,
                mobPlatforms: c,
                isTouch: u,
                has3d: d
            })
        }
    }
]);