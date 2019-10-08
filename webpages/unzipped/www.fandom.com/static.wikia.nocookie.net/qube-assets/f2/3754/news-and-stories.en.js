webpackJsonp([6], {
    100: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($) {
            var __WEBPACK_IMPORTED_MODULE_0_throttle_debounce__ = __webpack_require__(12),
                __WEBPACK_IMPORTED_MODULE_1_components_utils_has_rail__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_throttle_debounce__), __webpack_require__(23));
            __webpack_exports__.a = {
                init: function() {
                    if (Object(__WEBPACK_IMPORTED_MODULE_1_components_utils_has_rail__.b)()) {
                        var $win = $(window),
                            $boxad = $(".feed-bottom-boxad"),
                            $rail = $(".feed-layout__right-rail");
                        $win.on("scroll", Object(__WEBPACK_IMPORTED_MODULE_0_throttle_debounce__.throttle)(10, function() {
                            ! function($win) {
                                return $win.scrollTop() + 56 < $('.feed-item[data-feed-index="10"]').offset().top
                            }($win) ? function($win, $rail, height) {
                                return $win.scrollTop() + height > $rail.offset().top + $rail.height()
                            }($win, $rail, $boxad.height()) ? ($boxad.addClass("is-bottom"), $boxad.addClass("is-sticky")) : ($boxad.removeClass("is-bottom"), $boxad.addClass("is-sticky")) : ($boxad.removeClass("is-sticky"), $boxad.removeClass("is-bottom"))
                        }))
                    }
                }
            }
        }).call(__webpack_exports__, __webpack_require__(0))
    },
    11: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($) {
            var __WEBPACK_IMPORTED_MODULE_0__templates_loading_indicator_handlebars__ = __webpack_require__(32),
                __WEBPACK_IMPORTED_MODULE_0__templates_loading_indicator_handlebars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__templates_loading_indicator_handlebars__);
            __webpack_exports__.a = {
                show: function() {
                    var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        context = {
                            container: options.container || document.body,
                            size: options.size || 72,
                            outerStyle: "",
                            innerStyle: ""
                        },
                        outerStyle = {},
                        innerStyle = {
                            "border-width": "".concat(context.size <= 36 ? 2 : 3, "px"),
                            height: "".concat(context.size, "px"),
                            width: "".concat(context.size, "px")
                        };
                    options.color && (innerStyle["border-top-color"] = options.color, innerStyle["border-bottom-color"] = options.color, innerStyle["border-left-color"] = options.color);
                    var $container = $(context.container);
                    $container.is("body") ? outerStyle["z-index"] = 501e4 : options.fullScreen || (outerStyle.position = "absolute"), options.background && (outerStyle["background-color"] = options.background), Object.keys(outerStyle).forEach(function(key) {
                        context.outerStyle = "".concat(context.outerStyle).concat(key, ": ").concat(outerStyle[key], ";")
                    }), Object.keys(innerStyle).forEach(function(key) {
                        context.innerStyle = "".concat(context.innerStyle).concat(key, ": ").concat(innerStyle[key], ";")
                    }), $container.prepend(__WEBPACK_IMPORTED_MODULE_0__templates_loading_indicator_handlebars___default()(context))
                },
                hide: function() {
                    var context = {
                        container: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).container || document.body
                    };
                    $(context.container).find(".loading-indicator").remove()
                }
            }
        }).call(__webpack_exports__, __webpack_require__(0))
    },
    12: function(module, exports, __webpack_require__) {
        var throttle = __webpack_require__(15),
            debounce = __webpack_require__(30);
        module.exports = {
            throttle: throttle,
            debounce: debounce
        }
    },
    15: function(module, exports) {
        module.exports = function(delay, noTrailing, callback, debounceMode) {
            var timeoutID, lastExec = 0;
            return "boolean" != typeof noTrailing && (debounceMode = callback, callback = noTrailing, noTrailing = void 0),
                function() {
                    var self = this,
                        elapsed = Number(new Date) - lastExec,
                        args = arguments;

                    function exec() {
                        lastExec = Number(new Date), callback.apply(self, args)
                    }
                    debounceMode && !timeoutID && exec(), timeoutID && clearTimeout(timeoutID), void 0 === debounceMode && elapsed > delay ? exec() : !0 !== noTrailing && (timeoutID = setTimeout(debounceMode ? function() {
                        timeoutID = void 0
                    } : exec, void 0 === debounceMode ? delay - elapsed : delay))
                }
        }
    },
    23: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        function hasRightRail() {
            return window.innerWidth >= 1024
        }

        function hasLeftRail() {
            return window.innerWidth >= 1280
        }
        __webpack_exports__.b = hasRightRail, __webpack_exports__.a = hasLeftRail
    },
    24: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var events, __WEBPACK_IMPORTED_MODULE_0_throttle_debounce__ = __webpack_require__(12),
            registry = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_throttle_debounce__), new Map),
            elementId = 1,
            defaultVisibleAmount = 10;

        function isVisible(element) {
            var amount = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : defaultVisibleAmount,
                boundingRect = element.getBoundingClientRect();
            if (null === element.offsetParent || 0 === boundingRect.top && 0 === boundingRect.bottom) return !1;
            var pxAmount = amount > 1 ? amount : boundingRect.height * amount;
            return window.innerHeight > pxAmount && (boundingRect.top >= 0 && boundingRect.top + pxAmount <= window.innerHeight || boundingRect.top < 0 && boundingRect.bottom >= 0 && boundingRect.bottom >= pxAmount)
        }

        function checkVisibility() {
            registry.forEach(function(element, key) {
                isVisible(element.node, element.visibleAmount) ? (!1 === element.isVisible && (element.isVisible = !0, element.visibleCallback && element.visibleCallback(element.node)), "once" === element.mode && (element.notVisibleCallback ? element.visibleCallback = null : registry.delete(key))) : (!0 === element.isVisible && element.notVisibleCallback && (element.notVisibleCallback(element.node), "once" === element.mode && registry.delete(key)), element.isVisible = !1)
            })
        }

        function register(element, options) {
            events || (events = ["load", "resize", "scroll"]).forEach(function(event) {
                return window.addEventListener(event, Object(__WEBPACK_IMPORTED_MODULE_0_throttle_debounce__.throttle)(250, !1, checkVisibility))
            }), registry.set(elementId++, {
                mode: options.mode,
                node: element,
                visibleCallback: options.visible,
                notVisibleCallback: options.notVisible,
                visibleAmount: options.amount,
                isVisible: !1
            })
        }
        __webpack_exports__.a = {
            once: function(selector, options) {
                for (var elements = document.querySelectorAll(selector), i = 0; i < elements.length; i++) register(elements[i], Object.assign(options, {
                    mode: "once"
                }))
            },
            always: function(selector, options) {
                for (var elements = document.querySelectorAll(selector), i = 0; i < elements.length; i++) register(elements[i], Object.assign(options, {
                    mode: "always"
                }))
            },
            isVisible: isVisible
        }
    },
    285: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($, log) {
            var __WEBPACK_IMPORTED_MODULE_0_throttle_debounce__ = __webpack_require__(12),
                __WEBPACK_IMPORTED_MODULE_1_components_tracking_tracking_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_throttle_debounce__), __webpack_require__(17)),
                __WEBPACK_IMPORTED_MODULE_2_components_loading_indicator_loading_indicator_js__ = __webpack_require__(11),
                __WEBPACK_IMPORTED_MODULE_3_components_utils_came_from_home_page__ = __webpack_require__(286),
                __WEBPACK_IMPORTED_MODULE_4_components_ads_helper__ = __webpack_require__(62),
                __WEBPACK_IMPORTED_MODULE_5_components_utils_accessors__ = __webpack_require__(5),
                __WEBPACK_IMPORTED_MODULE_6_components_utils_has_rail__ = __webpack_require__(23),
                __WEBPACK_IMPORTED_MODULE_7_components_feed_feed__ = __webpack_require__(76),
                __WEBPACK_IMPORTED_MODULE_8_components_utils_when_visible__ = __webpack_require__(24),
                longArticleMinHeight = 2200;

            function lazyLoadFeed(topics) {
                log.debug("Lazy-loading feed");
                var $feedPlaceholder = $(".feed-container.is-placeholder").first(),
                    isLongEnough = $(".article-content h2, .article-content h3").eq(2).length && $(".article-content").height() > longArticleMinHeight,
                    url = $feedPlaceholder.attr("data-endpoint-feed");
                $feedPlaceholder.length && $.ajax({
                    data: {
                        articleSlug: __WEBPACK_IMPORTED_MODULE_5_components_utils_accessors__.c.get("article.slug", ""),
                        cameFromHomePage: Object(__WEBPACK_IMPORTED_MODULE_3_components_utils_came_from_home_page__.a)(),
                        topics: topics
                    },
                    url: url
                }).then(function(response) {
                    var insertMethod;
                    $feedPlaceholder.replaceWith(response), __WEBPACK_IMPORTED_MODULE_7_components_feed_feed__.a.init(), isLongEnough || (log.debug("Insert feed ad"), insertMethod = Object(__WEBPACK_IMPORTED_MODULE_6_components_utils_has_rail__.b)() ? function(content) {
                        return $(".featured-block.in-area-right").before(content)
                    } : function(content) {
                        return $(".feed-layout__container .feed-item").eq(3).before(content)
                    }, __WEBPACK_IMPORTED_MODULE_4_components_ads_helper__.a.insertAd("feed_boxad", insertMethod, "feed-block-ad feed-boxad"))
                }, function(data) {
                    log.error(data)
                })
            }

            function loadVideoClip(selector) {
                $(selector).each(function(index, element) {
                    var videoId = element.getAttribute("data-jwplayer-id"),
                        $element = $(element);
                    videoId ? $.ajax({
                        url: "https://cdn.jwplayer.com/v2/media/".concat(videoId),
                        success: function(response) {
                            var videoFile, sources = response.playlist && response.playlist[0] && response.playlist[0].sources;
                            sources ? (sources.some(function(source) {
                                return "video/mp4" === source.type && (videoFile = source.file, source.width >= window.innerWidth)
                            }), videoFile ? ($element.html('<video class="fandom-video-clip__video" src="'.concat(videoFile, '" loop muted\n\t\t\t\t\t\t\tposter="https://cdn.jwplayer.com/thumbs/').concat(videoId, '-720.jpg"></video>')), __WEBPACK_IMPORTED_MODULE_8_components_utils_when_visible__.a.always(".fandom-video-clip__video", {
                                visible: function(vid) {
                                    return vid.play()
                                },
                                notVisible: function(vid) {
                                    return vid.pause()
                                },
                                amount: .2
                            })) : log.error("No video file found for ID ".concat(videoId))) : log.error("No video sources found for ID ".concat(videoId))
                        },
                        error: function() {
                            $element.remove()
                        }
                    }) : $element.remove()
                })
            }
            __webpack_exports__.a = {
                init: function() {
                    var $nav, plusNavigationCheckStyles, $selectedHeader, insertMethod;
                    loadVideoClip(".article-plus-header__video"), $(".article-content .embedded-article").each(function(index, element) {
                        var slug = element.getAttribute("data-slug"),
                            $element = $(element);
                        slug ? (__WEBPACK_IMPORTED_MODULE_2_components_loading_indicator_loading_indicator_js__.a.show({
                            background: "#f2f5f5",
                            container: element
                        }), $.ajax({
                            url: "/f2/api/article/embed/".concat(slug),
                            success: function(response) {
                                $element.html(response)
                            },
                            error: function() {
                                $element.remove()
                            }
                        })) : $element.remove()
                    }), loadVideoClip(".article-content figure.video-clip"), $(".pull-quote").css("background-image", "url(".concat(__WEBPACK_IMPORTED_MODULE_5_components_utils_accessors__.c.get("article.featuredImage"), ")")), $("body.article-show").on("mousedown", ".article p a", function() {
                        __WEBPACK_IMPORTED_MODULE_1_components_tracking_tracking_js__.a.track({
                            action: __WEBPACK_IMPORTED_MODULE_5_components_utils_accessors__.c.get("article.id", ""),
                            label: "link.click",
                            category: "article"
                        })
                    }), ($("body").hasClass("article-show") || $("body").hasClass("article-preview")) && (__WEBPACK_IMPORTED_MODULE_5_components_utils_accessors__.c.get("article.isArticlePlus") ? ($nav = $(".article-plus-nav"), plusNavigationCheckStyles = Object(__WEBPACK_IMPORTED_MODULE_0_throttle_debounce__.throttle)(10, function() {
                        var top = $(window).scrollTop(),
                            hasClass = $nav.hasClass("is-detached");
                        0 === top && hasClass ? $nav.removeClass("is-detached") : top > 0 && !hasClass && $nav.addClass("is-detached"), $nav.hasClass("is-loaded") || $nav.addClass("is-loaded")
                    }), $(window).on("scroll resize", plusNavigationCheckStyles), plusNavigationCheckStyles()) : ("article" === __WEBPACK_IMPORTED_MODULE_5_components_utils_accessors__.c.get("pageType") && (insertMethod = Object(__WEBPACK_IMPORTED_MODULE_6_components_utils_has_rail__.b)() ? function(content) {
                        return $(".article-layout__rail").prepend(content)
                    } : $(".article-header__title").hasClass("is-video") ? function(content) {
                        return $(".article-layout__content").append(content)
                    } : function(content) {
                        return $(".article-content.entry-content p:first-child").after(content)
                    }, log.debug("Inserting top-boxad", insertMethod), __WEBPACK_IMPORTED_MODULE_4_components_ads_helper__.a.insertAd("top_boxad", insertMethod, "article-layout__top-box-ad")), ($selectedHeader = $(".article-content h2, .article-content h3").eq(2)).length && $(".article-content").height() > longArticleMinHeight && (log.debug("Inserting in-content ad"), __WEBPACK_IMPORTED_MODULE_4_components_ads_helper__.a.insertAd("incontent_boxad", function(content) {
                        return $selectedHeader.before(content)
                    }, "article-layout__incontent-ad"), $(".article-layout__rail").addClass("has-incontent-ad"))), $("body").hasClass("article-preview") || lazyLoadFeed(["united-kingdom" === __WEBPACK_IMPORTED_MODULE_5_components_utils_accessors__.c.get("user.region") ? "home-page-uk" : "home-page"]))
                }
            }
        }).call(__webpack_exports__, __webpack_require__(0), __webpack_require__(3))
    },
    286: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_exports__.a = function() {
            var parser = document.createElement("a");
            return parser.href = document.referrer, homePagePaths.indexOf(parser.pathname) >= 0
        };
        var homePagePaths = ["/", "/fandom"]
    },
    287: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, factory;
        factory = function(module, _clipboardAction, _tinyEmitter, _goodListener) {
            "use strict";
            var _clipboardAction2 = _interopRequireDefault(_clipboardAction),
                _tinyEmitter2 = _interopRequireDefault(_tinyEmitter),
                _goodListener2 = _interopRequireDefault(_goodListener);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                }
            }
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            };
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
            }();
            var Clipboard = function(_Emitter) {
                function Clipboard(trigger, options) {
                    ! function(instance, Constructor) {
                        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
                    }(this, Clipboard);
                    var _this = function(self, call) {
                        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !call || "object" != typeof call && "function" != typeof call ? self : call
                    }(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));
                    return _this.resolveOptions(options), _this.listenClick(trigger), _this
                }
                return function(subClass, superClass) {
                    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
                }(Clipboard, _tinyEmitter2.default), _createClass(Clipboard, [{
                    key: "resolveOptions",
                    value: function() {
                        var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof options.action ? options.action : this.defaultAction, this.target = "function" == typeof options.target ? options.target : this.defaultTarget, this.text = "function" == typeof options.text ? options.text : this.defaultText, this.container = "object" === _typeof(options.container) ? options.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(trigger) {
                        var _this2 = this;
                        this.listener = (0, _goodListener2.default)(trigger, "click", function(e) {
                            return _this2.onClick(e)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(e) {
                        var trigger = e.delegateTarget || e.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new _clipboardAction2.default({
                            action: this.action(trigger),
                            target: this.target(trigger),
                            text: this.text(trigger),
                            container: this.container,
                            trigger: trigger,
                            emitter: this
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(trigger) {
                        return getAttributeValue("action", trigger)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(trigger) {
                        var selector = getAttributeValue("target", trigger);
                        if (selector) return document.querySelector(selector)
                    }
                }, {
                    key: "defaultText",
                    value: function(trigger) {
                        return getAttributeValue("text", trigger)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                    }
                }], [{
                    key: "isSupported",
                    value: function() {
                        var action = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                            actions = "string" == typeof action ? [action] : action,
                            support = !!document.queryCommandSupported;
                        return actions.forEach(function(action) {
                            support = support && !!document.queryCommandSupported(action)
                        }), support
                    }
                }]), Clipboard
            }();

            function getAttributeValue(suffix, element) {
                var attribute = "data-clipboard-" + suffix;
                if (element.hasAttribute(attribute)) return element.getAttribute(attribute)
            }
            module.exports = Clipboard
        }, __WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(288), __webpack_require__(290), __webpack_require__(291)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof(__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    },
    288: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, factory;
        factory = function(module, _select) {
            "use strict";
            var obj, _select2 = (obj = _select) && obj.__esModule ? obj : {
                default: obj
            };
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            };
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
                ClipboardAction = function() {
                    function ClipboardAction(options) {
                        ! function(instance, Constructor) {
                            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
                        }(this, ClipboardAction), this.resolveOptions(options), this.initSelection()
                    }
                    return _createClass(ClipboardAction, [{
                        key: "resolveOptions",
                        value: function() {
                            var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = options.action, this.container = options.container, this.emitter = options.emitter, this.target = options.target, this.text = options.text, this.trigger = options.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake",
                        value: function() {
                            var _this = this,
                                isRTL = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() {
                                return _this.removeFake()
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[isRTL ? "right" : "left"] = "-9999px";
                            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = yPosition + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, _select2.default)(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = (0, _select2.default)(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText",
                        value: function() {
                            var succeeded = void 0;
                            try {
                                succeeded = document.execCommand(this.action)
                            } catch (err) {
                                succeeded = !1
                            }
                            this.handleResult(succeeded)
                        }
                    }, {
                        key: "handleResult",
                        value: function(succeeded) {
                            this.emitter.emit(succeeded ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFake()
                        }
                    }, {
                        key: "action",
                        set: function() {
                            var action = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = action, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        },
                        get: function() {
                            return this._action
                        }
                    }, {
                        key: "target",
                        set: function(target) {
                            if (void 0 !== target) {
                                if (!target || "object" !== (void 0 === target ? "undefined" : _typeof(target)) || 1 !== target.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && target.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = target
                            }
                        },
                        get: function() {
                            return this._target
                        }
                    }]), ClipboardAction
                }();
            module.exports = ClipboardAction
        }, __WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(289)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof(__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    },
    289: function(module, exports) {
        module.exports = function(element) {
            var selectedText;
            if ("SELECT" === element.nodeName) element.focus(), selectedText = element.value;
            else if ("INPUT" === element.nodeName || "TEXTAREA" === element.nodeName) {
                var isReadOnly = element.hasAttribute("readonly");
                isReadOnly || element.setAttribute("readonly", ""), element.select(), element.setSelectionRange(0, element.value.length), isReadOnly || element.removeAttribute("readonly"), selectedText = element.value
            } else {
                element.hasAttribute("contenteditable") && element.focus();
                var selection = window.getSelection(),
                    range = document.createRange();
                range.selectNodeContents(element), selection.removeAllRanges(), selection.addRange(range), selectedText = selection.toString()
            }
            return selectedText
        }
    },
    290: function(module, exports) {
        function E() {}
        E.prototype = {
            on: function(name, callback, ctx) {
                var e = this.e || (this.e = {});
                return (e[name] || (e[name] = [])).push({
                    fn: callback,
                    ctx: ctx
                }), this
            },
            once: function(name, callback, ctx) {
                var self = this;

                function listener() {
                    self.off(name, listener), callback.apply(ctx, arguments)
                }
                return listener._ = callback, this.on(name, listener, ctx)
            },
            emit: function(name) {
                for (var data = [].slice.call(arguments, 1), evtArr = ((this.e || (this.e = {}))[name] || []).slice(), i = 0, len = evtArr.length; i < len; i++) evtArr[i].fn.apply(evtArr[i].ctx, data);
                return this
            },
            off: function(name, callback) {
                var e = this.e || (this.e = {}),
                    evts = e[name],
                    liveEvents = [];
                if (evts && callback)
                    for (var i = 0, len = evts.length; i < len; i++) evts[i].fn !== callback && evts[i].fn._ !== callback && liveEvents.push(evts[i]);
                return liveEvents.length ? e[name] = liveEvents : delete e[name], this
            }
        }, module.exports = E
    },
    291: function(module, exports, __webpack_require__) {
        var is = __webpack_require__(292),
            delegate = __webpack_require__(293);
        module.exports = function(target, type, callback) {
            if (!target && !type && !callback) throw new Error("Missing required arguments");
            if (!is.string(type)) throw new TypeError("Second argument must be a String");
            if (!is.fn(callback)) throw new TypeError("Third argument must be a Function");
            if (is.node(target)) return function(node, type, callback) {
                return node.addEventListener(type, callback), {
                    destroy: function() {
                        node.removeEventListener(type, callback)
                    }
                }
            }(target, type, callback);
            if (is.nodeList(target)) return function(nodeList, type, callback) {
                return Array.prototype.forEach.call(nodeList, function(node) {
                    node.addEventListener(type, callback)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(nodeList, function(node) {
                            node.removeEventListener(type, callback)
                        })
                    }
                }
            }(target, type, callback);
            if (is.string(target)) return function(selector, type, callback) {
                return delegate(document.body, selector, type, callback)
            }(target, type, callback);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
        }
    },
    292: function(module, exports) {
        exports.node = function(value) {
            return void 0 !== value && value instanceof HTMLElement && 1 === value.nodeType
        }, exports.nodeList = function(value) {
            var type = Object.prototype.toString.call(value);
            return void 0 !== value && ("[object NodeList]" === type || "[object HTMLCollection]" === type) && "length" in value && (0 === value.length || exports.node(value[0]))
        }, exports.string = function(value) {
            return "string" == typeof value || value instanceof String
        }, exports.fn = function(value) {
            return "[object Function]" === Object.prototype.toString.call(value)
        }
    },
    293: function(module, exports, __webpack_require__) {
        var closest = __webpack_require__(294);

        function _delegate(element, selector, type, callback, useCapture) {
            var listenerFn = function(element, selector, type, callback) {
                return function(e) {
                    e.delegateTarget = closest(e.target, selector), e.delegateTarget && callback.call(element, e)
                }
            }.apply(this, arguments);
            return element.addEventListener(type, listenerFn, useCapture), {
                destroy: function() {
                    element.removeEventListener(type, listenerFn, useCapture)
                }
            }
        }
        module.exports = function(elements, selector, type, callback, useCapture) {
            return "function" == typeof elements.addEventListener ? _delegate.apply(null, arguments) : "function" == typeof type ? _delegate.bind(null, document).apply(null, arguments) : ("string" == typeof elements && (elements = document.querySelectorAll(elements)), Array.prototype.map.call(elements, function(element) {
                return _delegate(element, selector, type, callback, useCapture)
            }))
        }
    },
    294: function(module, exports) {
        var DOCUMENT_NODE_TYPE = 9;
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var proto = Element.prototype;
            proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector
        }
        module.exports = function(element, selector) {
            for (; element && element.nodeType !== DOCUMENT_NODE_TYPE;) {
                if ("function" == typeof element.matches && element.matches(selector)) return element;
                element = element.parentNode
            }
        }
    },
    30: function(module, exports, __webpack_require__) {
        var throttle = __webpack_require__(15);
        module.exports = function(delay, atBegin, callback) {
            return void 0 === callback ? throttle(delay, atBegin, !1) : throttle(delay, callback, !1 !== atBegin)
        }
    },
    32: function(module, exports, __webpack_require__) {
        var Handlebars = __webpack_require__(4);
        module.exports = (Handlebars.default || Handlebars).template({
            compiler: [7, ">= 4.0.0"],
            main: function(container, depth0, helpers, partials, data) {
                var helper, alias1 = null != depth0 ? depth0 : container.nullContext || {},
                    alias2 = helpers.helperMissing,
                    alias4 = container.escapeExpression;
                return '<div class="loading-indicator" style="' + alias4("function" == typeof(helper = null != (helper = helpers.outerStyle || (null != depth0 ? depth0.outerStyle : depth0)) ? helper : alias2) ? helper.call(alias1, {
                    name: "outerStyle",
                    hash: {},
                    data: data
                }) : helper) + '">\n\t<div class="loading-indicator__animation" style="' + alias4("function" == typeof(helper = null != (helper = helpers.innerStyle || (null != depth0 ? depth0.innerStyle : depth0)) ? helper : alias2) ? helper.call(alias1, {
                    name: "innerStyle",
                    hash: {},
                    data: data
                }) : helper) + '"></div>\n</div>\n'
            },
            useData: !0
        })
    },
    45: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($, log) {
            __webpack_exports__.c = setUpJwplayerVideo, __webpack_exports__.b = removeVideo;
            var __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__ = __webpack_require__(28),
                __WEBPACK_IMPORTED_MODULE_1_components_tracking_tracking__ = __webpack_require__(17),
                __WEBPACK_IMPORTED_MODULE_2_components_tracking_scripts_google_analytics__ = __webpack_require__(60),
                __WEBPACK_IMPORTED_MODULE_3__react_app_utils_get_initial_mute__ = __webpack_require__(57),
                __WEBPACK_IMPORTED_MODULE_4__utils_accessors__ = __webpack_require__(5),
                videoEventCategory = "fandom-video";
            var playerList = {};

            function setUpJwplayerVideo(videoContainer, videoId, options) {
                if (!0 == (void 0 !== (trackingOptIn = __WEBPACK_IMPORTED_MODULE_4__utils_accessors__.c.get("trackingOptIn")) && void 0 !== trackingOptIn.hasUserConsented())) {
                    var trackingOptIn, containerId = "jwplayer-video-".concat(videoId),
                        setupOptions = Object.assign({}, {
                            autoplay: !1,
                            featured: !1,
                            mute: !0,
                            onReady: function() {}
                        }, options);
                    "0" === __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__.D.queryString.get("autoplay") && (setupOptions.autoplay = !1), videoContainer.setAttribute("id", containerId),
                        function(videoId) {
                            __WEBPACK_IMPORTED_MODULE_4__utils_accessors__.c.has("jwVideoPlaylist") || __WEBPACK_IMPORTED_MODULE_4__utils_accessors__.c.set("jwVideoPlaylist", {});
                            var jwVideoPlaylist = __WEBPACK_IMPORTED_MODULE_4__utils_accessors__.c.get("jwVideoPlaylist");
                            return jwVideoPlaylist[videoId] ? Promise.resolve(jwVideoPlaylist[videoId]) : $.ajax({
                                dataType: "json",
                                method: "GET",
                                url: __WEBPACK_IMPORTED_MODULE_4__utils_accessors__.c.get("endpoints.getVideoPlaylist"),
                                data: {
                                    videoId: videoId
                                }
                            }).then(function(response) {
                                return response.playlist ? response.playlist : (log.error("Invalid response for video playlist (ID: ".concat(videoId, ")")), null)
                            }).catch(function() {
                                return log.error("Unable to get video playlist (ID: ".concat(videoId, ")")), null
                            })
                        }(videoId).then(function(playlist) {
                            if (playlist) {
                                var playerOptions = {
                                    autoplay: setupOptions.autoplay,
                                    mute: setupOptions.mute,
                                    settings: {
                                        showAutoplayToggle: !1,
                                        showQuality: !0
                                    },
                                    videoDetails: {
                                        description: playlist[0].description,
                                        title: playlist[0].title,
                                        playlist: playlist
                                    },
                                    related: {
                                        autoplay: !0,
                                        playlistId: "pvpR4uUl",
                                        time: 3
                                    },
                                    logger: {
                                        clientName: "f2"
                                    },
                                    tracking: {
                                        category: videoEventCategory,
                                        track: function(data) {
                                            var title, image, metadata, video = playlist[0];
                                            data.label.match(/^played-seconds-\d+?/) ? log.debug("Skipping played-seconds track", data) : ("autoplay-start" !== data.label && "user-start" !== data.label || function(videoId, parselyMetadata) {
                                                window.PARSELY && window.PARSELY.video ? window.PARSELY.video.trackPlay(videoId, parselyMetadata) : log.debug("Tracking Parsely video played failed due to PARSELY")
                                            }(data.videoId, (title = video.title, image = video.image, (metadata = {}).title = title, metadata.image_url = image, "article" === __WEBPACK_IMPORTED_MODULE_4__utils_accessors__.c.get("pageType") && (metadata.section = __WEBPACK_IMPORTED_MODULE_4__utils_accessors__.c.get("article.topicNames.0", ""), metadata.tags = __WEBPACK_IMPORTED_MODULE_4__utils_accessors__.c.get("article.tags"), metadata.pub_date_tmsp = Date.parse(__WEBPACK_IMPORTED_MODULE_4__utils_accessors__.c.get("article.publishedTime"))), metadata)), "paused" === data.label && function(videoId) {
                                                window.PARSELY && window.PARSELY.video ? window.PARSELY.video.trackPause(videoId) : log.debug("Tracking Parsely video played failed due to PARSELY not loaded.")
                                            }(data.videoId), __WEBPACK_IMPORTED_MODULE_2_components_tracking_scripts_google_analytics__.a.setCategoryDimension(videoEventCategory, "9", videoId), __WEBPACK_IMPORTED_MODULE_2_components_tracking_scripts_google_analytics__.a.setCategoryDimension(videoEventCategory, "10", playlist[0].title), __WEBPACK_IMPORTED_MODULE_1_components_tracking_tracking__.a.track(data))
                                        },
                                        setCustomDimension: function(dimension, value) {
                                            __WEBPACK_IMPORTED_MODULE_2_components_tracking_scripts_google_analytics__.a.setCategoryDimension(videoEventCategory, dimension, value)
                                        }
                                    }
                                };
                                wikiaJWPlayer(containerId, playerOptions, function(player) {
                                    playerList[videoId] = player, setupOptions.onReady(player), __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__.l.get("state.isSteam") || __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__.l.push("state.userConsentQueue", function() {
                                        __WEBPACK_IMPORTED_MODULE_0__wikia_ad_engine__.p.create({
                                            audio: !playerOptions.mute,
                                            autoplay: playerOptions.autoplay,
                                            featured: setupOptions.featured,
                                            videoId: videoId
                                        }).register(player, {
                                            plist: "pvpR4uUl",
                                            vtags: playlist.length && playlist[0].tags ? playlist[0].tags : ""
                                        })
                                    })
                                })
                            } else log.error("Unable to load video (ID: ".concat(videoId, ")"))
                        })
                } else window.setTimeout(function() {
                    return setUpJwplayerVideo(videoContainer, videoId, options)
                }, 250)
            }

            function setUpVideos($videos) {
                $videos.each(function(index, video) {
                    var videoContainer = video.querySelector(".fandom-video__container"),
                        videoId = video.getAttribute("data-jwplayer-id"),
                        autoplay = video.hasAttribute("data-autoplay"),
                        featured = video.hasAttribute("data-featured"),
                        shouldMute = autoplay;
                    featured && (shouldMute = Object(__WEBPACK_IMPORTED_MODULE_3__react_app_utils_get_initial_mute__.a)()), videoId && setUpJwplayerVideo(videoContainer, videoId, {
                        autoplay: autoplay,
                        featured: featured,
                        mute: shouldMute
                    })
                })
            }

            function removeVideo(videoId) {
                var mute = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    player = playerList[videoId];
                player ? (log.debug("Removing video (ID: ".concat(videoId, ")")), mute && player.setMute(!0), player.stop(), player.remove()) : log.error("Can't remove video (ID: ".concat(videoId, ")"))
            }
            __webpack_exports__.a = {
                init: function() {
                    setUpVideos($(".fandom-video"))
                },
                setUpVideos: setUpVideos,
                setUpJwplayerVideo: setUpJwplayerVideo,
                removeVideo: removeVideo
            }
        }).call(__webpack_exports__, __webpack_require__(0), __webpack_require__(3))
    },
    55: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($) {
            var __WEBPACK_IMPORTED_MODULE_0_throttle_debounce__ = __webpack_require__(12);
            __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_throttle_debounce__);
            var getGlobalNavOffset = function() {
                var $navWrapper = $(".wds-global-navigation-wrapper");
                return $navWrapper.hasClass("logged-in") ? 0 : $navWrapper.outerHeight()
            };
            __webpack_exports__.a = function SetUpStickyModule(stickyModule, isRailFn) {
                var _this = this,
                    topSpacing = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 18;
                ! function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
                }(this, SetUpStickyModule);
                var $window = $(window),
                    $body = $("body"),
                    $stickyModule = $(stickyModule),
                    $feedCard = $('.feed-item[data-feed-index="9"]'),
                    navOffset = getGlobalNavOffset(),
                    position = "top",
                    initialStickyModuleTop = $stickyModule.offset().top;
                new MutationObserver(function() {
                    $body.hasClass("has-bfaa") && (position = "top", $stickyModule.removeClass("".concat("is-sticky", " ").concat("is-bottom")), _this.adjustPosition())
                }).observe(document.body, {
                    attributes: !0,
                    attributeFilter: ["class"]
                }), this.adjustPosition = function() {
                    if (isRailFn()) {
                        var shouldStopAtBfab = $body.hasClass("show-feed") && $body.hasClass("has-bfaa"),
                            windowTop = $window.scrollTop() + navOffset + topSpacing,
                            windowBottom = windowTop + $stickyModule.outerHeight(),
                            bottom = shouldStopAtBfab ? Math.floor($feedCard.offset().top + $feedCard.outerHeight()) : $(".wds-global-footer").offset().top - topSpacing;
                        if ("top" === position) {
                            var stickyModuleTop = $stickyModule.offset().top;
                            initialStickyModuleTop = stickyModuleTop, windowTop > stickyModuleTop && (position = "sticky", $stickyModule.addClass("is-sticky"), $stickyModule.css("top", navOffset + topSpacing))
                        } else if ("sticky" === position) {
                            if (windowTop <= initialStickyModuleTop) position = "top", $stickyModule.removeClass("is-sticky");
                            else if (windowBottom >= bottom) {
                                position = "bottom", $stickyModule.removeClass("is-sticky"), $stickyModule.addClass("is-bottom");
                                var stickyModulePosition = $stickyModule.outerHeight() + topSpacing + $(".feed-layout").offset().top;
                                $stickyModule.css("top", bottom - stickyModulePosition + 12)
                            }
                        } else windowBottom < bottom && (position = "sticky", $stickyModule.addClass("is-sticky"), $stickyModule.removeClass("is-bottom"), $stickyModule.css("top", navOffset + topSpacing))
                    }
                }, $window.on("scroll resize", Object(__WEBPACK_IMPORTED_MODULE_0_throttle_debounce__.throttle)(20, this.adjustPosition)), $.subscribe("global-navigation-loaded", function() {
                    navOffset = getGlobalNavOffset()
                })
            }
        }).call(__webpack_exports__, __webpack_require__(0))
    },
    57: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function(log) {
            __webpack_exports__.a = function() {
                var referrer = document ? document.referrer : "",
                    muted = !unmutedFrom.some(function(rx) {
                        return rx.test(referrer)
                    });
                return log.debug("".concat(muted ? "Muting" : "Unmuting", " video player"), referrer), muted
            };
            var unmutedFrom = [/^https?:\/\/(\w*\.)*(wikia|fandom)\.com.*/i]
        }).call(__webpack_exports__, __webpack_require__(3))
    },
    62: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function(log) {
            var __WEBPACK_IMPORTED_MODULE_0_components_utils_accessors__ = __webpack_require__(5);
            __webpack_exports__.a = {
                insertAd: function(slotName, insertMethod) {
                    var wrapperClass = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    log.debug("Inserting ad ".concat(slotName)), insertMethod('<div class="'.concat(wrapperClass, '"><div class="gpt-ad" id="').concat(slotName, '"></div></div>')), __WEBPACK_IMPORTED_MODULE_0_components_utils_accessors__.c.get("ads.adStack").push(slotName)
                }
            }
        }).call(__webpack_exports__, __webpack_require__(3))
    },
    67: function(module, exports) {
        ! function(e) {
            function i(e) {
                var t = n(f.back);
                return "left" === e ? t.classList.add("wikia-jw-settings__back-icon") : t.classList.add("wikia-jw-settings__right-arrow-icon"), t
            }

            function a(e) {
                if (e)
                    for (; e.childElementCount > 1;) e.removeChild(e.firstChild)
            }

            function n(e) {
                return x.parseFromString(e, "image/svg+xml").documentElement
            }

            function s(e) {
                e && (e.style.display = "block")
            }

            function o(e) {
                e && (e.style.display = "none")
            }

            function c(e, t) {
                e.on("ready", function() {
                    var a = e.id,
                        n = document.getElementById(a),
                        s = n.querySelector(".jw-title"),
                        o = n.querySelector(".jw-title-primary"),
                        l = document.createElement("div"),
                        r = document.createElement("span"),
                        c = document.createElement("span");
                    l.className = "wikia-jw-title-duration", r.className = "wikia-jw-title-duration-watch", c.className = "wikia-jw-title-duration-time", r.innerText = t.watch, c.innerText = function(e) {
                        var t = Math.floor(e / 60),
                            i = e % 60;
                        return i < 10 && (i = "0" + i), t < 10 && (t = "0" + t), t + ":" + i
                    }(e.getDuration()), l.appendChild(r), l.appendChild(c), s.insertBefore(l, o)
                })
            }

            function u(e) {
                function i(e, i) {
                    l <= s.error && (console.error(n, e, i), function(e, t) {
                        var i = new XMLHttpRequest,
                            s = {
                                name: n + " " + e
                            };
                        t && (s.description = "string" == typeof t ? t : JSON.stringify(t)), r && (s.client = r), c && (s.client_version = c), i.open("POST", a, !0), i.setRequestHeader("Content-type", "application/json"), i.send(JSON.stringify(s))
                    }(e, i))
                }
                var a = "https://" + (e.servicesDomain || "services.wikia.com") + "/event-logger/error",
                    n = "JWPlayer",
                    s = {
                        info: 1,
                        warn: 2,
                        error: 3,
                        off: 4
                    },
                    o = e.logger || {},
                    l = o.logLevel ? s[o.logLevel] : s.error,
                    r = o.clientName,
                    c = o.clientVersion;
                return {
                    info: function(e, t) {
                        l <= s.info && console.info(n, e, t)
                    },
                    warn: function(e, t) {
                        l <= s.warn && console.warn(n, e, t)
                    },
                    error: i,
                    subscribeToPlayerErrors: function(e) {
                        e.on("setupError", function(e) {
                            i("setupError", e)
                        }), e.on("error", function(e) {
                            i("error", e)
                        })
                    }
                }
            }

            function d(e) {
                function t(e, t) {
                    if (e) {
                        var i = a.parseFromString(t, "image/svg+xml").documentElement;
                        i.setAttribute("class", e.getAttribute("class")), e.parentNode.replaceChild(i, e)
                    }
                }
                var a = new DOMParser;
                e.on("ready", function() {
                    ! function(e) {
                        var i = e.querySelector(".jw-controlbar"),
                            a = e.querySelector(".jw-display");
                        [{
                            selector: ".jw-svg-icon-play",
                            iconName: "play"
                        }, {
                            selector: ".jw-svg-icon-pause",
                            iconName: "pause"
                        }, {
                            selector: ".jw-svg-icon-fullscreen-on",
                            iconName: "fullScreenOn"
                        }, {
                            selector: ".jw-svg-icon-fullscreen-off",
                            iconName: "fullScreenOff"
                        }, {
                            selector: ".jw-svg-icon-settings",
                            iconName: "settings"
                        }, {
                            selector: ".jw-svg-icon-volume-0",
                            iconName: "volumeOff"
                        }, {
                            selector: ".jw-svg-icon-volume-50",
                            iconName: "volumeOn"
                        }, {
                            selector: ".jw-svg-icon-volume-100",
                            iconName: "volumeOn"
                        }].forEach(function(e) {
                            t(i.querySelector(e.selector), f[e.iconName])
                        }), [{
                            selector: ".jw-svg-icon-play",
                            iconName: "displayPlay"
                        }, {
                            selector: ".jw-svg-icon-pause",
                            iconName: "pause"
                        }].forEach(function(e) {
                            t(a.querySelector(e.selector), f[e.iconName])
                        })
                    }(e.getContainer())
                })
            }

            function p(e, t, i) {
                this.player = e, this.container = i, this.wikiaSettingsElement = document.createElement("div"), this.buttonID = "wikiaSettings", this.config = t, this.documentClickHandler = this.documentClickHandler.bind(this), this.container.classList.add("wikia-jw-settings__plugin"), this.wikiaSettingsElement.classList.add("wikia-jw-settings"), this.addSettingsContent(this.wikiaSettingsElement), this.container.appendChild(this.wikiaSettingsElement), this.player.on("levels", this.onQualityLevelsChange.bind(this)), this.player.on("captionsList", this.onCaptionsChange.bind(this)), document.addEventListener("click", this.documentClickHandler), document.addEventListener("touchend", this.documentClickHandler)
            }

            function g(e, t) {
                var a = !1;
                document.addEventListener("visibilitychange", function() {
                    (function(t) {
                        return !document.hidden && t && (-1 === ["playing", "paused", "complete"].indexOf(e.getState()) || a)
                    })(t) && (e.play(!0), a = !1)
                }, !1), e.on("relatedVideoPlay", function() {
                    document.hidden && (e.pause(), a = !0)
                })
            }

            function y(e, t, i) {
                this.player = e, this.container = i, this.config = t, this.watermarkElement = this.getWatermarkElement(), this.watermarkElement.addEventListener("click", function() {
                    e.trigger("watermarkClicked")
                }), this.container.classList.add("wikia-watermark-container"), this.container.appendChild(this.watermarkElement), this.isEnabled = !!this.player.getPlaylistItem(0).watermark, this.player.on("play", this.update.bind(this)), this.player.on("pause", this.update.bind(this)), this.player.on("idle", this.update.bind(this)), this.player.on("relatedVideoPlay", this.onVideoChange.bind(this))
            }
            var v = {
                    de: {
                        admessage: "Die Werbung endet in xx Sekunden",
                        autoplayVideos: "Automatische Wiedergabe",
                        back: "Zurück",
                        captions: "Untertitel",
                        close: "Schließen",
                        cuetext: "Werbung",
                        fullscreen: "Vollbild",
                        next: "Nächstes",
                        nextUp: "Als nächstes",
                        nextUpInSeconds: "Als nächstes in xx Sekunden",
                        pause: "Pause",
                        play: "Abspielen",
                        playback: "Wiedergabe starten",
                        player: "Video-Player",
                        prev: "Vorheriges",
                        replay: "Erneut abspielen",
                        settings: "Einstellungen",
                        skipmessage: "Werbung überspringen in xx Sekunden",
                        skiptext: "Überspringen",
                        videoQuality: "Video-Qualität",
                        volume: "Lautstärke",
                        watch: "ansehen"
                    },
                    en: {
                        admessage: "The ad will end in xx seconds",
                        autoplayVideos: "Autoplay Videos",
                        back: "Back",
                        captions: "Captions",
                        close: "Close",
                        cuetext: "Advertisement",
                        fullscreen: "Fullscreen",
                        next: "Next",
                        nextUp: "Next Up",
                        nextUpInSeconds: "Next up in xx",
                        pause: "Pause",
                        play: "Play",
                        playback: "Start playback",
                        player: "Video Player",
                        prev: "Previous",
                        replay: "Replay",
                        settings: "Settings",
                        skipmessage: "Skip ad in xx",
                        skiptext: "Skip",
                        videoQuality: "Video Quality",
                        volume: "Volume",
                        watch: "watch"
                    },
                    es: {
                        admessage: "El anuncio termina en xx segundos",
                        autoplayVideos: "Videos autoreproducidos",
                        back: "Atrás",
                        captions: "Subtítulos",
                        close: "Cerrar",
                        cuetext: "Anuncio",
                        fullscreen: "Pantalla completa",
                        next: "Siguiente",
                        nextUp: "Siguiente",
                        nextUpInSeconds: "Siguiente en xx",
                        pause: "Pausa",
                        play: "Play",
                        playback: "Iniciar la reproducción",
                        player: "Reproductor de video",
                        prev: "Anterior",
                        replay: "Replay",
                        settings: "Configuración",
                        skipmessage: "Pasar anuncio en xx",
                        skiptext: "Pasar",
                        videoQuality: "Calidad de video",
                        volume: "Volumen",
                        watch: "mirar"
                    },
                    fr: {
                        admessage: "Fin de la publicité dans xx secondes",
                        autoplayVideos: "Lecture automatique des vidéos",
                        back: "Retour",
                        captions: "Sous-titres",
                        close: "Fermer",
                        cuetext: "Publicité",
                        fullscreen: "Plein écran",
                        next: "Suivante",
                        nextUp: "À suivre",
                        nextUpInSeconds: "À suivre dans xx",
                        pause: "Pause",
                        play: "Lecture",
                        playback: "Démarrer la lecture",
                        player: "Lecteur vidéo",
                        prev: "Précédente",
                        replay: "Revoir",
                        settings: "Paramètres",
                        skipmessage: "Ignorer la publicité dans xx",
                        skiptext: "Ignorer",
                        videoQuality: "Qualité vidéo",
                        volume: "Volume",
                        watch: "regarder"
                    },
                    it: {
                        admessage: "L'annuncio terminerà in xx secondi",
                        autoplayVideos: "Riproduzione automatica",
                        back: "Indietro",
                        captions: "Didascalie",
                        close: "Chiudi",
                        cuetext: "Pubblicità",
                        fullscreen: "Schermo intero",
                        next: "Successivo",
                        nextUp: "Prossimo",
                        nextUpInSeconds: "Prossimo in xx",
                        pause: "Pausa",
                        play: "Riproduci",
                        playback: "Avvia la riproduzione",
                        player: "Lettore video",
                        prev: "Precedente",
                        replay: "Replay",
                        settings: "Impostazioni",
                        skipmessage: "Salta annuncio in xx",
                        skiptext: "Salta",
                        videoQuality: "Qualità video",
                        volume: "Volume",
                        watch: "guarda"
                    },
                    ja: {
                        admessage: "広告はxx秒後に終了します",
                        autoplayVideos: "動画を自動再生",
                        back: "戻る",
                        captions: "字幕",
                        close: "閉じる",
                        cuetext: "広告",
                        fullscreen: "全画面",
                        next: "次へ",
                        nextUp: "次の動画",
                        nextUpInSeconds: "次の動画まであとxx秒",
                        pause: "一時停止",
                        play: "再生",
                        playback: "再生をスタート",
                        player: "動画プレーヤー",
                        prev: "前へ",
                        replay: "もう一回見る",
                        settings: "設定",
                        skipmessage: "xx秒後に広告をスキップ",
                        skiptext: "スキップ",
                        videoQuality: "動画の品質",
                        volume: "音量",
                        watch: "再生時間"
                    },
                    pl: {
                        admessage: "Reklama skończy się za xx sek.",
                        autoplayVideos: "Odtwarzaj automatycznie",
                        back: "Wstecz",
                        captions: "Napisy",
                        close: "Zamknij",
                        cuetext: "Reklama",
                        fullscreen: "Pełny ekran",
                        next: "Następny",
                        nextUp: "Następny",
                        nextUpInSeconds: "Następny za xx",
                        pause: "Wstrzymaj",
                        play: "Odtwarzaj",
                        playback: "Rozpocznij odtwarzanie",
                        player: "Odtwarzacz wideo",
                        prev: "Poprzedni",
                        replay: "Odtwarzaj ponownie",
                        settings: "Ustawienia",
                        skipmessage: "Pomiń reklamę za xx",
                        skiptext: "Pomiń",
                        videoQuality: "Jakość obrazu",
                        volume: "Głośność",
                        watch: "obejrzyj"
                    },
                    pt: {
                        admessage: "O anúncio vai acabar em xx segundos",
                        autoplayVideos: "Vídeos AutoPlay",
                        back: "Voltar",
                        captions: "Legendas",
                        close: "Fechar",
                        cuetext: "Anúncio",
                        fullscreen: "Tela cheia",
                        next: "Próximo",
                        nextUp: "Próximo",
                        nextUpInSeconds: "Próximo em xx",
                        pause: "Pausa",
                        play: "Tocar",
                        playback: "Iniciar a reprodução",
                        player: "Player de vídeo",
                        prev: "Anterior",
                        replay: "Repetição",
                        settings: "Configurações",
                        skipmessage: "Pular anúncio em xx",
                        skiptext: "Pular",
                        videoQuality: "Qualidade de vídeo",
                        volume: "Volume",
                        watch: "assistir"
                    },
                    ru: {
                        admessage: "Реклама закончится через xx секунд(ы)",
                        autoplayVideos: "Автовоспроизведение",
                        back: "Назад",
                        captions: "Описания",
                        close: "Закрыть",
                        cuetext: "Реклама",
                        fullscreen: "Во весь экран",
                        next: "Далее",
                        nextUp: "Следующее",
                        nextUpInSeconds: "Следующее видео через xx сек.",
                        pause: "Пауза",
                        play: "Воспроизвести",
                        playback: "Начать",
                        player: "Видеоплеер",
                        prev: "Предыдущее",
                        replay: "Повторить",
                        settings: "Настройки",
                        skipmessage: "Пропустить рекламу через xx",
                        skiptext: "Пропустить",
                        videoQuality: "Качество видео",
                        volume: "Громкость",
                        watch: "длительность"
                    },
                    zh: {
                        admessage: "广告将在xx秒结束",
                        autoplayVideos: "自动播放视频",
                        back: "返回",
                        captions: "标题",
                        close: "关闭",
                        cuetext: "广告",
                        fullscreen: "全屏",
                        next: "下一个",
                        nextUp: "即将播放",
                        nextUpInSeconds: "等待xx秒即将播放",
                        pause: "暂停",
                        play: "播放",
                        playback: "重新播放",
                        player: "视频播放器",
                        prev: "上一个",
                        replay: "重播",
                        settings: "设置",
                        skipmessage: "等待xx秒跳过广告",
                        skiptext: "跳过",
                        videoQuality: "视频质量",
                        volume: "音量",
                        watch: "观看"
                    },
                    "zh-hant": {
                        admessage: "廣告將在xx秒後結束",
                        autoplayVideos: "自動播放影片",
                        back: "返回",
                        captions: "標題",
                        close: "關閉",
                        cuetext: "廣告",
                        fullscreen: "全螢幕",
                        next: "下一個",
                        nextUp: "即將播放",
                        nextUpInSeconds: "等待xx秒即將播放",
                        pause: "暫停",
                        play: "播放",
                        playback: "重新播放",
                        player: "影片播放器",
                        prev: "上一個",
                        replay: "重新播放",
                        settings: "設置",
                        skipmessage: "在xx中跳過廣告",
                        skiptext: "跳過",
                        videoQuality: "影片品質",
                        volume: "音量",
                        watch: "觀看"
                    }
                },
                f = {
                    displayPlay: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 180 180"><defs><rect id="b" width="150" height="150" rx="75"/><filter id="a" width="130%" height="130%" x="-15%" y="-15%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="7.5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/></filter></defs><g fill="none" fill-rule="evenodd"><g opacity=".9" transform="rotate(90 75 90)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/></g><path fill="#00D6D6" fill-rule="nonzero" d="M80.87 58.006l34.32 25.523c3.052 2.27 3.722 6.632 1.496 9.745a6.91 6.91 0 0 1-1.497 1.527l-34.32 25.523c-3.054 2.27-7.33 1.586-9.56-1.527A7.07 7.07 0 0 1 70 114.69V63.643c0-3.854 3.063-6.977 6.84-6.977 1.45 0 2.86.47 4.03 1.34z"/></g></svg>',
                    play: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M14.767 9.437L3.858 16.903a.553.553 0 0 1-.565.037.531.531 0 0 1-.293-.473V1.533c0-.199.113-.381.293-.473a.557.557 0 0 1 .565.036l10.91 7.467A.53.53 0 0 1 15 9a.53.53 0 0 1-.233.437z" fill-rule="evenodd"/></svg>',
                    pause: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><rect width="5" height="16" rx="1" x="2" y="1"/><rect x="11" width="5" height="16" rx="1" y="1"/></g></svg>',
                    fullScreenOn: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.249 7H1V2h5v2.25H3.249zm11.502 0H17V2h-5v2.25h2.751zM3.249 11H1v5h5v-2.25H3.249zm11.502 0H17v5h-5v-2.25h2.751z" fill-rule="evenodd"/></svg>',
                    fullScreenOff: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M3.751 2H6v5H1V4.75h2.751zm10.498 0H12v5h5V4.75h-2.751zM3.751 16H6v-5H1v2.25h2.751zm10.498 0H12v-5h5v2.25h-2.751z" fill-rule="evenodd"/></svg>',
                    settings: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 7.09a1.909 1.909 0 1 1 0 3.819A1.909 1.909 0 0 1 9 7.09m-4.702-.03a1.07 1.07 0 0 1-.99.667h-.672A.637.637 0 0 0 2 8.364v1.272c0 .352.285.637.636.637h.672c.436 0 .824.264.99.667l.006.013c.167.403.08.864-.229 1.172L3.6 12.6a.636.636 0 0 0 0 .9l.9.9a.636.636 0 0 0 .9 0l.475-.475a1.072 1.072 0 0 1 1.185-.223c.403.166.667.554.667.99v.672c0 .35.285.636.637.636h1.272a.637.637 0 0 0 .637-.636v-.672c0-.436.264-.824.667-.99l.013-.006a1.07 1.07 0 0 1 1.172.229l.475.475a.636.636 0 0 0 .9 0l.9-.9a.636.636 0 0 0 0-.9l-.475-.475a1.072 1.072 0 0 1-.229-1.172l.006-.013a1.07 1.07 0 0 1 .99-.667h.672A.637.637 0 0 0 16 9.636V8.364a.637.637 0 0 0-.636-.637h-.672a1.07 1.07 0 0 1-.996-.68 1.072 1.072 0 0 1 .229-1.172L14.4 5.4a.636.636 0 0 0 0-.9l-.9-.9a.636.636 0 0 0-.9 0l-.475.475c-.308.308-.77.396-1.172.229l-.013-.006a1.07 1.07 0 0 1-.667-.99v-.672A.637.637 0 0 0 9.636 2H8.364a.637.637 0 0 0-.637.636v.672a1.07 1.07 0 0 1-.68.996 1.07 1.07 0 0 1-1.172-.229L5.4 3.6a.636.636 0 0 0-.9 0l-.9.9a.636.636 0 0 0 0 .9l.475.475a1.072 1.072 0 0 1 .223 1.185" fill-rule="evenodd"/></svg>',
                    volumeOff: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M8.45 2.17L4.664 6.28H1.036C.256 6.28 0 6.739 0 7.175v3.522c0 .436.256.985 1.036.985h3.646l3.785 4.176a1.1 1.1 0 0 0 .533.143.964.964 0 0 0 .5-.137c.33-.185.5-.526.5-.897V3.013c0-.37-.17-.713-.5-.898-.33-.186-.72-.13-1.05.054zm7.192 7.33l2.121-2.122a.807.807 0 1 0-1.142-1.141l-2.122 2.12-2.12-2.12a.808.808 0 0 0-1.142 1.141L13.358 9.5l-2.121 2.121a.807.807 0 1 0 1.142 1.142l2.12-2.12 2.122 2.12a.805.805 0 0 0 1.142 0 .807.807 0 0 0 0-1.142L15.642 9.5z" fill-rule="evenodd"/></svg>',
                    volumeOn: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M8.45 2.17L4.664 6.28H1.036C.256 6.28 0 6.739 0 7.175v3.522c0 .436.256.985 1.036.985h3.646l3.785 4.176a1.1 1.1 0 0 0 .533.143.964.964 0 0 0 .5-.137c.33-.185.5-.526.5-.897V3.013c0-.37-.17-.713-.5-.898-.33-.186-.72-.13-1.05.054zm4.95 10.156a4.393 4.393 0 0 0 0-6.19.708.708 0 0 0-1.004 1 2.978 2.978 0 0 1 0 4.192.707.707 0 1 0 1.003.998z"/><path d="M17.515 9.231A6.186 6.186 0 0 0 15.7 4.84a.707.707 0 1 0-1.003.998A4.777 4.777 0 0 1 16.1 9.231a4.778 4.778 0 0 1-1.4 3.394.708.708 0 1 0 1.002.999 6.186 6.186 0 0 0 1.814-4.393z"/></g></svg>',
                    back: '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.003 10.002a.997.997 0 0 1-.707-.293L.293 4.707a.999.999 0 1 1 1.414-1.414l4.296 4.295 4.293-4.293A.999.999 0 1 1 11.71 4.71l-5 5a.997.997 0 0 1-.707.293" fill-rule="evenodd"/></svg>',
                    quality: '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-quality-100" viewBox="0 0 240 240"><path d="M55,200H35c-3,0-5-2-5-4c0,0,0,0,0-1v-30c0-3,2-5,4-5c0,0,0,0,1,0h20c3,0,5,2,5,4c0,0,0,0,0,1v30C60,198,58,200,55,200L55,200z M110,195v-70c0-3-2-5-4-5c0,0,0,0-1,0H85c-3,0-5,2-5,4c0,0,0,0,0,1v70c0,3,2,5,4,5c0,0,0,0,1,0h20C108,200,110,198,110,195L110,195z M160,195V85c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v110c0,3,2,5,4,5c0,0,0,0,1,0h20C158,200,160,198,160,195L160,195z M210,195V45c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v150c0,3,2,5,4,5c0,0,0,0,1,0h20C208,200,210,198,210,195L210,195z"></path></svg>',
                    fandomLogo: '<svg width="164" height="35" viewBox="0 0 164 35" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 0 1-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 0 1-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 0 1 .592 0l11.736 11.603a3.158 3.158 0 0 1 0 4.5l-3.503 3.462a.423.423 0 0 1-.59 0L5.732 11.89a3.132 3.132 0 0 1-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 0 1 2.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 0 1 0 .585l-5.64 5.576a.419.419 0 0 1-.59 0l-5.77-5.704a.411.411 0 0 1 0-.585zm14.56-.687L26.014.475a.869.869 0 0 0-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 0 0 8.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 0 0 1.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z" fill="#ccc"/><path d="M62.852 20.51l2.58-6.716a.468.468 0 0 1 .87 0l2.58 6.717h-6.03zm5.856-12.428c-.184-.48-.65-.8-1.17-.8h-3.342c-.52 0-.986.32-1.17.8l-7.083 18.5c-.21.552.2 1.14.796 1.14h2.753c.353 0 .67-.215.796-.542l.738-1.922a.849.849 0 0 1 .795-.542h8.088a.85.85 0 0 1 .796.542l.74 1.922c.125.327.44.543.795.543h2.754a.843.843 0 0 0 .796-1.14l-7.082-18.5zm93.504-.8h-2.715a1.86 1.86 0 0 0-1.677 1.047l-5.393 11.162-5.393-11.163a1.858 1.858 0 0 0-1.677-1.047h-2.715a.889.889 0 0 0-.893.883V26.84c0 .487.4.883.892.883h2.608a.889.889 0 0 0 .893-.883v-9.686l4.945 10.072c.15.304.46.497.803.497h1.073a.893.893 0 0 0 .803-.497l4.945-10.072v9.686c0 .487.4.883.894.883h2.608a.889.889 0 0 0 .893-.883V8.166c0-.487-.4-.883-.893-.883zm-106.972 8.8h-8.63V11.49h10.918a.88.88 0 0 0 .83-.578l.888-2.464a.872.872 0 0 0-.83-1.163h-15.18c-.486 0-.88.39-.88.87v18.7c0 .48.394.87.88.87h2.492c.486 0 .88-.39.88-.87V20.29h7.743a.88.88 0 0 0 .83-.578l.89-2.464a.872.872 0 0 0-.83-1.163zm51.76 7.61h-3.615V11.315H107c3.828 0 6.41 2.517 6.41 6.188 0 3.672-2.582 6.19-6.41 6.19zm-.124-16.41h-7.128c-.486 0-.88.39-.88.872v18.698c0 .48.394.87.88.87h7.128c6.453 0 10.912-4.44 10.912-10.16v-.117c0-5.72-4.46-10.162-10.912-10.162zm-11.947.03h-2.642a.87.87 0 0 0-.876.866v12.36l-8.755-12.72a1.242 1.242 0 0 0-1.023-.535H78.32a.873.873 0 0 0-.876.867v18.706c0 .48.393.867.877.867h2.64a.872.872 0 0 0 .878-.867V14.71l8.608 12.478c.23.334.613.535 1.022.535h3.46a.872.872 0 0 0 .877-.867V8.178a.87.87 0 0 0-.876-.867zm40.71 10.3c0 3.323-2.712 6.016-6.056 6.016-3.345 0-6.056-2.693-6.056-6.015v-.22c0-3.322 2.71-6.015 6.056-6.015 3.344 0 6.055 2.693 6.055 6.015v.22zm-6.056-10.44c-5.694 0-10.31 4.576-10.31 10.22v.22c0 5.646 4.616 10.22 10.31 10.22 5.693 0 10.308-4.574 10.308-10.22v-.22c0-5.644-4.615-10.22-10.308-10.22z" fill="#ccc"/></g></svg>'
                };
            window.wikiaJWPlayerIdleScreen = c;
            var w = [];
            window.wikiaJWPlayer = function(e, t, i) {
                ! function(e, t, i) {
                    "undefined" != typeof jwplayer ? i() : (w.push(i), 1 === w.length && function(e, t) {
                        var i = document.createElement("script"),
                            a = document.getElementById(e);
                        i.onload = function() {
                            p.register(), w.forEach(function(e) {
                                e()
                            })
                        }, i.async = !0, i.src = t || "https://content.jwplatform.com/libraries/VXc5h4Tf.js", a.parentNode.insertBefore(i, a.nextSibling)
                    }(e, t))
                }(e, t.playerURL, function() {
                    var a = u(t),
                        s = t.lang || "en",
                        o = v[s] || v.en,
                        p = function(e, t, i, a, n) {
                            var s = jwplayer(e),
                                o = t.videoDetails.playlist[0].mediaid,
                                l = t.autoplay,
                                r = a.substr(0, 2),
                                c = {
                                    advertising: {
                                        autoplayadsmuted: l,
                                        client: "googima",
                                        vpaidcontrols: !0,
                                        admessage: n.admessage,
                                        cuetext: n.cuetext,
                                        skipmessage: n.skipmessage,
                                        skiptext: n.skiptext,
                                        setLocale: r
                                    },
                                    autostart: l && !document.hidden,
                                    description: t.videoDetails.description,
                                    image: "//content.jwplatform.com/thumbs/" + o + "-640.jpg",
                                    mute: t.mute,
                                    playlist: t.videoDetails.playlist,
                                    title: t.videoDetails.title,
                                    localization: n,
                                    plugins: {}
                                };
                            return t.settings && (c.plugins.wikiaSettings = {
                                showAutoplayToggle: t.settings.showAutoplayToggle,
                                showQuality: t.settings.showQuality,
                                showCaptions: t.settings.showCaptions,
                                autoplay: t.autoplay,
                                selectedCaptionsLanguage: t.selectedCaptionsLanguage,
                                i18n: n
                            }), t.related && (c.related = {
                                autoplaytimer: t.related.time || 3,
                                file: "//cdn.jwplayer.com/v2/playlists/" + t.related.playlistId + "?related_media_id=" + o,
                                oncomplete: t.related.autoplay ? "autoplay" : "show",
                                autoplaymessage: n.nextUpInSeconds
                            }), !1 !== t.watermark && (c.plugins.wikiaWatermark = {}), i.info("setupPlayer"), s.setup(c), i.info("after setup"), i.subscribeToPlayerErrors(s), s
                        }(e, t, a, s, o);
                    c(p, o), d(p),
                        function(e, t, i) {
                            function n(t, i) {
                                var a = Math.floor(i.position),
                                    n = Math.floor(100 * a / i.duration);
                                a > s[t].progress.durationWatched && a % 5 == 0 && (e.trigger(t + "SecondsPlayed", {
                                    value: a
                                }), s[t].progress.durationWatched = a), n >= 25 && !s[t].wasFirstQuartileTriggered && (e.trigger(t + "FirstQuartile"), s[t].wasFirstQuartileTriggered = !0), n >= 50 && !s[t].wasMidPointTriggered && (e.trigger(t + "MidPoint"), s[t].wasMidPointTriggered = !0), n >= 75 && !s[t].wasThirdQuartileTriggered && (e.trigger(t + "ThirdQuartile"), s[t].wasThirdQuartileTriggered = !0), n > s[t].progress.percentWatched && n % 10 == 0 && (e.trigger(t + "PercentPlayed", {
                                    value: n
                                }), s[t].progress.percentWatched = n)
                            }
                            var s = {
                                    ad: {
                                        wasFirstQuartileTriggered: !1,
                                        wasMidPointTriggered: !1,
                                        wasThirdQuartileTriggered: !1,
                                        progress: {
                                            durationWatched: 0,
                                            percentWatched: 0
                                        }
                                    },
                                    video: {
                                        wasFirstQuartileTriggered: !1,
                                        wasMidPointTriggered: !1,
                                        wasThirdQuartileTriggered: !1,
                                        progress: {
                                            durationWatched: 0,
                                            percentWatched: 0
                                        }
                                    }
                                },
                                o = !1,
                                l = 0,
                                r_ad = "ad",
                                r_video = "video",
                                c = !1;
                            i.info("before ready"), e.once("ready", function() {
                                i.info("player ready");
                                var t = e.getPlugin("related");
                                t.on("open", function() {
                                    i.info("related plugin open"), e.trigger("relatedVideoImpression"), s[r_video] = {
                                        wasFirstQuartileTriggered: !1,
                                        wasMidPointTriggered: !1,
                                        wasThirdQuartileTriggered: !1,
                                        progress: {
                                            durationWatched: 0,
                                            percentWatched: 0
                                        }
                                    }
                                }), t.on("play", function(t) {
                                    i.info("related plugin play"), l++, e.trigger("relatedVideoPlay", {
                                        auto: t.auto,
                                        item: t.item,
                                        position: t.position,
                                        depth: l
                                    })
                                })
                            }), e.on("play", function(t) {
                                c && (e.trigger("videoResumed", t), i.info("videoResumed triggered")), c = !1
                            }), e.on("pause", function() {
                                c = !0
                            }), e.on("firstFrame", function() {
                                0 === l && (e.trigger("playerStart", {
                                    auto: t
                                }), i.info("playerStart triggered")), e.trigger("videoStart"), i.info("videoStart triggered")
                            }), e.on("mute", function() {
                                e.getMute() || o || (e.trigger("firstUnmute"), o = !0)
                            }), e.on("time", function(e) {
                                n(r_video, e)
                            }), e.on("adTime", function(e) {
                                n(r_ad, e)
                            }), e.on("adRequest", function() {
                                s[r_ad] = {
                                    wasFirstQuartileTriggered: !1,
                                    wasMidPointTriggered: !1,
                                    wasThirdQuartileTriggered: !1,
                                    progress: {
                                        durationWatched: 0,
                                        percentWatched: 0
                                    }
                                }
                            })
                        }(p, t.autoplay, a), t.related && function(e) {
                            e.on("relatedVideoPlay", function(t) {
                                t.auto || e.setMute(!1)
                            })
                        }(p), t.tracking && (t.tracking.pixel = t.videoDetails.playlist[0].pixel, function(e, t, i) {
                            function a(e) {
                                "function" == typeof i.setCustomDimension && (i.setCustomDimension(34, e.mediaid), i.setCustomDimension(35, e.title), i.setCustomDimension(36, e.tags))
                            }

                            function n(e, t) {
                                var i = document.getElementById(e);
                                i && i.parentElement.removeChild(i);
                                var a = document.createElement("img");
                                a.src = t, a.id = e, document.body.appendChild(a)
                            }

                            function s() {
                                i.comscore && n("comscoreVideoMetrixTrack", "http://b.scorecardresearch.com/p?C1=1&C2=6177433&C5=04")
                            }

                            function o(e) {
                                e && n("wikiaJWPlayerCustomPixel", e)
                            }

                            function l(t) {
                                if (!t.label) throw new Error("No tracking label provided");
                                var a = {
                                    action: t.action || "click",
                                    category: c,
                                    label: t.label,
                                    value: Number(e.getMute()),
                                    eventName: r,
                                    videoId: e.getPlaylistItem().mediaid,
                                    player: "jwplayer",
                                    onScroll: u,
                                    trackingMethod: "analytics"
                                };
                                i.track(a)
                            }
                            var r = "videoplayerevent",
                                c = i.category || "featured-video",
                                u = !1,
                                d = 0;
                            "function" == typeof i.setCustomDimension && i.setCustomDimension(37, t ? "Yes" : "No"), e.once("ready", function() {
                                a(e.getPlaylistItem()), l({
                                    label: "load",
                                    action: "impression"
                                })
                            }), e.on("relatedVideoImpression", function() {
                                l({
                                    label: "recommended-video",
                                    action: "impression"
                                })
                            }), e.on("relatedVideoPlay", function(e) {
                                a(e.item), l({
                                    label: (e.auto ? "recommended-video-autoplay-" : "recommended-video-select-") + e.position,
                                    action: "impression"
                                }), l({
                                    label: "recommended-video-depth-" + e.depth,
                                    action: "impression"
                                }), s(), o(e.item.pixel)
                            }), e.on("videoResumed", function(e) {
                                "interaction" === e.playReason && l({
                                    label: "play-resumed"
                                })
                            }), e.on("playerStart", function(e) {
                                l(e.auto ? {
                                    label: "autoplay-start",
                                    action: "impression"
                                } : {
                                    label: "user-start"
                                }), s(), o(i.pixel)
                            }), e.on("pause", function(e) {
                                "interaction" === e.pauseReason && l({
                                    label: "paused"
                                })
                            }), e.on("firstUnmute", function() {
                                l({
                                    label: "unmuted"
                                })
                            }), e.on("videoPercentPlayed", function(e) {
                                l({
                                    label: "played-percentage-" + (d = e.value),
                                    action: "view"
                                })
                            }), e.on("complete", function() {
                                l({
                                    label: "completed",
                                    action: "impression"
                                })
                            }), e.on("onScrollStateChanged", function(e) {
                                "closed" === e.state && l({
                                    label: "played-percentage-" + d,
                                    action: "close"
                                }), u = "active" === e.state, i.setCustomDimension(38, u ? "Yes" : "No")
                            }), e.on("videoFeedbackImpression", function() {
                                l({
                                    label: "feedback",
                                    action: "impression"
                                })
                            }), e.on("videoFeedbackThumbUp", function() {
                                l({
                                    label: "feedback-thumb-up",
                                    action: "click"
                                })
                            }), e.on("videoFeedbackThumbDown", function() {
                                l({
                                    label: "feedback-thumb-down",
                                    action: "click"
                                })
                            }), e.on("videoFeedbackClosed", function() {
                                l({
                                    label: "feedback",
                                    action: "close"
                                })
                            }), e.on("autoplayToggle", function(e) {
                                l({
                                    label: "autoplay-" + (e.enabled ? "enabled" : "disabled")
                                })
                            }), e.on("captionsSelected", function(e) {
                                l({
                                    label: "language-selected-" + e.selectedLang.toLowerCase()
                                })
                            }), e.on("watermarkClicked", function(e) {
                                l({
                                    label: "watermark-fandom"
                                })
                            })
                        }(p, t.autoplay, t.tracking)), g(p, t.autoplay),
                        function(e) {
                            e.on("playerStart", function() {
                                var t = document.querySelector(".jw-autostart-mute");
                                t && (e.getContainer().classList.remove("jw-flag-autostart"), t.style.display = "none")
                            })
                        }(p), !1 !== t.watermark && y.register(), i && i(p)
                })
            };
            var x = new DOMParser;
            p.prototype.isSettingsMenuOrSettingsButton = function(e) {
                var t = this.getSettingsButtonElement();
                return t && (t === e || t.contains(e) || this.wikiaSettingsElement === e || this.wikiaSettingsElement.contains(e))
            }, p.prototype.getSettingsButtonElement = function() {
                return this.player.getContainer().querySelector("[button=" + this.buttonID + "]")
            }, p.prototype.documentClickHandler = function(e) {
                !this.isSettingsMenuOrSettingsButton(e.target) && this.container.style.display && this.close()
            }, p.prototype.addButton = function() {
                var e = n(f.settings);
                e.classList.add("jw-svg-icon"), e.classList.add("jw-svg-icon-wikia-settings"), this.player.addButton(e.outerHTML, this.config.i18n.settings, function() {
                    this.wikiaSettingsElement.style.display ? this.close() : this.open()
                }.bind(this), this.buttonID, "wikia-jw-settings-button")
            }, p.prototype.removeButton = function() {
                this.player.removeButton(this.buttonID)
            }, p.prototype.close = function() {
                this.showSettingsList(), this.container.style.display = null, this.player.getContainer().classList.remove("wikia-jw-settings-open")
            }, p.prototype.open = function() {
                s(this.container), this.player.getContainer().classList.add("wikia-jw-settings-open")
            }, p.prototype.hide = function() {
                this.close(), this.removeButton()
            }, p.prototype.show = function() {
                this.getSettingsButtonElement() || this.addButton()
            }, p.prototype.showSettingsList = function() {
                s(this.settingsList), o(this.qualityLevelsList), o(this.captionsList)
            }, p.prototype.addSettingsContent = function(e) {
                return e.classList.add("wikia-jw-settings"), e.classList.remove("jw-reset"), e.classList.remove("jw-plugin"), this.settingsList = this.createSettingsListElement(), e.appendChild(this.settingsList), this.config.showQuality && (this.createQualityLevelsList(), e.appendChild(this.qualityLevelsList)), this.config.showCaptions && (this.createCaptionsList(), e.appendChild(this.captionsList)), e
            }, p.prototype.createSettingsListElement = function() {
                var e = document.createElement("ul");
                return e.className = "wikia-jw-settings__list wds-list", this.config.showQuality && e.appendChild(this.createQualityButton()), this.config.showCaptions && e.appendChild(this.createCaptionsButton()), this.config.showAutoplayToggle && (e.appendChild(this.createAutoplayToggle()), this.show()), e
            }, p.prototype.createSubmenuWrapper = function() {
                var e = document.createElement("li"),
                    t = document.createElement("ul");
                return e.className = "wikia-jw-settings__back", e.innerHTML = i("left").outerHTML + " " + this.config.i18n.back, e.addEventListener("click", this.showSettingsList.bind(this)), t.className = "wikia-jw-settings__submenu wds-list", t.appendChild(e), t
            }, p.prototype.createAutoplayToggle = function() {
                var e = function(e) {
                    var t = document.createElement("li"),
                        i = document.createElement("input"),
                        a = document.createElement("label");
                    return t.className = "wikia-jw-settings__toggle", i.className = "wds-toggle__input", i.id = e.id, i.type = "checkbox", i.checked = e.checked, a.className = "wds-toggle__label", a.setAttribute("for", e.id), a.appendChild(document.createTextNode(e.label)), t.appendChild(i), t.appendChild(a), t
                }({
                    id: this.player.getContainer().id + "-videoAutoplayToggle",
                    label: this.config.i18n.autoplayVideos,
                    checked: this.config.autoplay
                });
                return e.querySelector("label").addEventListener("click", function(e) {
                    this.player.trigger("autoplayToggle", {
                        enabled: !e.target.previousSibling.checked
                    })
                }.bind(this)), e
            }, p.prototype.createQualityButton = function() {
                var e = document.createElement("li");
                return e.className = "wikia-jw-settings__quality-button", e.innerHTML = this.config.i18n.videoQuality + i("right").outerHTML, e.addEventListener("click", function() {
                    o(this.settingsList), s(this.qualityLevelsList)
                }.bind(this)), e
            }, p.prototype.createQualityLevelsList = function() {
                this.qualityLevelsList = this.createSubmenuWrapper(), this.player.on("levelsChanged", this.updateCurrentQuality.bind(this))
            }, p.prototype.onQualityLevelsChange = function(e) {
                var t = !e.levels.length || 1 === e.levels.length && "0" === e.levels[0].label,
                    i = !t && this.config.showQuality || this.config.showAutoplayToggle;
                t ? this.wikiaSettingsElement.classList.add("is-quality-list-empty") : this.wikiaSettingsElement.classList.remove("is-quality-list-empty"), i && this.show(), this.qualityLevelsList && this.updateQualityLevelsList(e.levels)
            }, p.prototype.updateQualityLevelsList = function(e) {
                a(this.qualityLevelsList), e.forEach(function(e, t) {
                    var i = document.createElement("li");
                    i.addEventListener("click", function() {
                        this.player.setCurrentQuality(t), this.close()
                    }.bind(this)), this.player.getCurrentQuality() === t && i.classList.add("is-active"), i.appendChild(document.createTextNode(e.label)), this.qualityLevelsList.insertBefore(i, this.qualityLevelsList.lastElementChild)
                }, this)
            }, p.prototype.updateCurrentQuality = function(e) {
                for (var t = 0; t < this.qualityLevelsList.childNodes.length; t++) {
                    var i = this.qualityLevelsList.childNodes[t];
                    e.currentQuality === t ? i.classList.add("is-active") : i.classList.remove("is-active")
                }
            }, p.prototype.onCaptionsChange = function(e) {
                var t = this.getSuitableCaptionsIndex(this.config.selectedCaptionsLanguage || this.captionLangMap[this.getUserLang()], e.tracks);
                a(this.captionsList), this.captionsList && e.tracks.length > 1 ? (e.tracks.forEach(this.createCaptionsListItem, this), this.wikiaSettingsElement.classList.remove("are-captions-empty"), this.show(), !1 !== this.config.selectedCaptionsLanguage && -1 !== t ? this.player.setCurrentCaptions(t) : this.player.setCurrentCaptions(0)) : this.wikiaSettingsElement.classList.add("are-captions-empty")
            }, p.prototype.createCaptionsList = function() {
                this.captionsList = this.createSubmenuWrapper(), this.player.on("captionsChanged", this.updateCurrentCaptions.bind(this))
            }, p.prototype.createCaptionsListItem = function(e, t) {
                var i = document.createElement("li"),
                    a = "Off" === e.label ? "No captions" : e.label;
                i.dataset.track = t, i.addEventListener("click", function() {
                    this.player.setCurrentCaptions(t), this.close(), this.player.trigger("captionsSelected", {
                        selectedLang: e.label
                    })
                }.bind(this)), i.appendChild(document.createTextNode(a)), this.captionsList.insertBefore(i, this.captionsList.firstElementChild)
            }, p.prototype.createCaptionsButton = function() {
                var e = document.createElement("li");
                return e.className = "wikia-jw-settings__captions-button", e.innerHTML = this.config.i18n.captions + i("right").outerHTML, e.addEventListener("click", function() {
                    o(this.settingsList), s(this.captionsList)
                }.bind(this)), e
            }, p.prototype.getUserLang = function() {
                return (window.navigator.userLanguage || window.navigator.language).slice(0, 2)
            }, p.prototype.getSuitableCaptionsIndex = function(e, t) {
                return t.map(function(e) {
                    return e.label
                }).indexOf(e)
            }, p.prototype.updateCurrentCaptions = function(e) {
                for (var t = 0; t < this.captionsList.childNodes.length; t++) this.captionsList.childNodes[t].classList.remove("is-active");
                this.captionsList.querySelector('[data-track="' + e.track + '"]').classList.add("is-active")
            }, p.prototype.captionLangMap = {
                en: "English",
                pl: "Polish",
                fr: "French",
                de: "German",
                it: "Italian",
                ja: "Japanese",
                pt: "Portuguese",
                ru: "Russian",
                es: "Spanish",
                zh: "Chinese"
            }, p.register = function() {
                jwplayer().registerPlugin("wikiaSettings", "8.0.0", p)
            }, y.prototype.getWatermarkElement = function() {
                var e = f.fandomLogo,
                    t = document.createElement("a");
                return t.classList.add("wikia-watermark"), t.innerHTML = e, t.href = "https://fandom.com", t
            }, y.prototype.update = function() {
                this.isEnabled && "playing" === this.player.getState() ? this.container.style.display = "block" : this.container.style.display = ""
            }, y.prototype.onVideoChange = function(e) {
                this.isEnabled = !!e.item.watermark, this.update()
            }, y.register = function() {
                jwplayer().registerPlugin("wikiaWatermark", "8.0.0", y)
            }
        }("undefined" == typeof wikiaJWPlayer ? wikiaJWPlayer = {} : wikiaJWPlayer)
    },
    76: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($, log) {
            var __WEBPACK_IMPORTED_MODULE_0_object_fit_images__ = __webpack_require__(120),
                __WEBPACK_IMPORTED_MODULE_0_object_fit_images___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_fit_images__),
                __WEBPACK_IMPORTED_MODULE_1_components_ads_helper__ = __webpack_require__(62),
                __WEBPACK_IMPORTED_MODULE_2_components_utils_has_rail__ = __webpack_require__(23),
                __WEBPACK_IMPORTED_MODULE_3_components_utils_accessors__ = __webpack_require__(5),
                __WEBPACK_IMPORTED_MODULE_4_components_utils_when_visible__ = __webpack_require__(24),
                __WEBPACK_IMPORTED_MODULE_5_components_tracking_tracking__ = __webpack_require__(17),
                __WEBPACK_IMPORTED_MODULE_6_components_feed_blocks_feed_blocks__ = __webpack_require__(94),
                __WEBPACK_IMPORTED_MODULE_7_components_lightbox_lightbox__ = __webpack_require__(98),
                __WEBPACK_IMPORTED_MODULE_8_components_region_switcher_region_switcher__ = __webpack_require__(136),
                __WEBPACK_IMPORTED_MODULE_9__scripts_feed_bottom_boxad__ = __webpack_require__(100);

            function loadCard($card) {
                if ($card.hasClass("is-placeholder") && !$card.hasClass("is-loading")) {
                    $card.addClass("is-loading");
                    var url = $card.attr("data-endpoint-post");
                    $.ajax({
                        url: url
                    }).then(function(response) {
                        $card.replaceWith(response), __WEBPACK_IMPORTED_MODULE_0_object_fit_images___default()()
                    }, function(data) {
                        log.error("Error loading feed", data), $card.removeClass("is-loading")
                    })
                }
            }
            __webpack_exports__.a = {
                init: function() {
                    var pageType;
                    "home" !== (pageType = __WEBPACK_IMPORTED_MODULE_3_components_utils_accessors__.c.get("pageType")) && "topic" !== pageType || (Object(__WEBPACK_IMPORTED_MODULE_2_components_utils_has_rail__.b)() ? (__WEBPACK_IMPORTED_MODULE_1_components_ads_helper__.a.insertAd("top_boxad", function(content) {
                        return $(".feed-layout__right-rail").prepend(content)
                    }, "feed-block-ad feed-top-boxad"), __WEBPACK_IMPORTED_MODULE_1_components_ads_helper__.a.insertAd("feed_boxad", function(content) {
                        return $(".feed-layout .feed-item").eq(10).before(content)
                    }, "feed-block-ad feed-bottom-boxad"), __WEBPACK_IMPORTED_MODULE_9__scripts_feed_bottom_boxad__.a.init()) : (__WEBPACK_IMPORTED_MODULE_1_components_ads_helper__.a.insertAd("top_boxad", function(content) {
                        return $(".feed-layout .feed-item").eq(1).before(content)
                    }, "feed-block-ad feed-top-boxad"), __WEBPACK_IMPORTED_MODULE_1_components_ads_helper__.a.insertAd("feed_boxad", function(content) {
                        return $(".feed-layout .feed-item").eq(6).before(content)
                    }, "feed-block-ad feed-bottom-boxad"))), __WEBPACK_IMPORTED_MODULE_4_components_utils_when_visible__.a.once(".feed-item", {
                        visible: function(element) {
                            ! function(element) {
                                var $element = $(element),
                                    currentIndex = parseInt($element.attr("data-feed-index"), 10),
                                    $forwardFeedItems = $element.nextUntil("[data-feed-index=".concat(currentIndex + 5, "]")),
                                    $backFeedItems = $element.prevUntil("[data-feed-index=".concat(currentIndex - 5, "]"));
                                loadCard($element.find(".card")), $forwardFeedItems.each(function() {
                                    loadCard($(this).find(".card"))
                                }), $backFeedItems.each(function() {
                                    loadCard($(this).find(".card"))
                                })
                            }(element),
                            function(element) {
                                var $feedItem = $(element).find(".card").parents("[data-feed-index]"),
                                    index = $feedItem.data("feed-index"),
                                    cardId = $feedItem.data("card-id");
                                __WEBPACK_IMPORTED_MODULE_5_components_tracking_tracking__.a.track({
                                    a: cardId,
                                    action: cardId,
                                    c_loc: index,
                                    category: "card",
                                    label: "view.item-".concat(index),
                                    nonInteraction: parseInt(index, 10) < 2
                                })
                            }(element)
                        },
                        amount: .3
                    }), __WEBPACK_IMPORTED_MODULE_6_components_feed_blocks_feed_blocks__.a.init(), __WEBPACK_IMPORTED_MODULE_7_components_lightbox_lightbox__.a.init(), __WEBPACK_IMPORTED_MODULE_8_components_region_switcher_region_switcher__.a.init()
                }
            }
        }).call(__webpack_exports__, __webpack_require__(0), __webpack_require__(3))
    },
    855: function(module, exports, __webpack_require__) {
        __webpack_require__(13), __webpack_require__(14), __webpack_require__(856), module.exports = __webpack_require__(866)
    },
    856: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            }),
            function($) {
                var __WEBPACK_IMPORTED_MODULE_0_jwplayer_fandom_dist_wikiajwplayer_js__ = __webpack_require__(67),
                    __WEBPACK_IMPORTED_MODULE_1_components_ads_ads_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jwplayer_fandom_dist_wikiajwplayer_js__), __webpack_require__(153)),
                    __WEBPACK_IMPORTED_MODULE_2_components_article_article_js__ = __webpack_require__(285),
                    __WEBPACK_IMPORTED_MODULE_3_components_card_share_card_share_js__ = __webpack_require__(857),
                    __WEBPACK_IMPORTED_MODULE_4_components_feed_feed_js__ = __webpack_require__(76),
                    __WEBPACK_IMPORTED_MODULE_5_components_inline_video_player_inline_video_player_js__ = __webpack_require__(858),
                    __WEBPACK_IMPORTED_MODULE_6_components_ios_card_size_tweak_ios_card_size_tweak_js__ = __webpack_require__(864),
                    __WEBPACK_IMPORTED_MODULE_7_components_konami_konami_js__ = __webpack_require__(865),
                    __WEBPACK_IMPORTED_MODULE_8_components_smart_banner_smart_banner_js__ = __webpack_require__(191),
                    __WEBPACK_IMPORTED_MODULE_9_components_video_player_video_player_js__ = __webpack_require__(45);
                $(function() {
                    $("body").hasClass("show-feed") && __WEBPACK_IMPORTED_MODULE_4_components_feed_feed_js__.a.init(), __WEBPACK_IMPORTED_MODULE_6_components_ios_card_size_tweak_ios_card_size_tweak_js__.a.init(), __WEBPACK_IMPORTED_MODULE_5_components_inline_video_player_inline_video_player_js__.a.init(), __WEBPACK_IMPORTED_MODULE_2_components_article_article_js__.a.init(), __WEBPACK_IMPORTED_MODULE_9_components_video_player_video_player_js__.a.init(), __WEBPACK_IMPORTED_MODULE_1_components_ads_ads_js__.a.init(), __WEBPACK_IMPORTED_MODULE_3_components_card_share_card_share_js__.a.init(), __WEBPACK_IMPORTED_MODULE_8_components_smart_banner_smart_banner_js__.a.init(), __WEBPACK_IMPORTED_MODULE_7_components_konami_konami_js__.a.init()
                })
            }.call(__webpack_exports__, __webpack_require__(0))
    },
    857: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($, log) {
            var __WEBPACK_IMPORTED_MODULE_0_clipboard__ = __webpack_require__(287),
                __WEBPACK_IMPORTED_MODULE_0_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_clipboard__),
                isTouchScreen = "ontouchend" in document,
                $body = $("body"),
                nonShareElements = ":not(.card-share, .card-share-notification)";
            __webpack_exports__.a = {
                init: function() {
                    var clipboard;
                    isTouchScreen || ($body.on("mouseenter", ".card-share", function(event) {
                        var $cardShare = $(event.target).closest(".card-share");
                        if (!$cardShare.hasClass("is-expanded")) {
                            $cardShare.addClass("is-hover");
                            var $cardInfo = $cardShare.parent(".card__info");
                            $cardInfo.length && $cardShare.find(".card-share__button.is-toggle").is(":visible") && $cardInfo.children(nonShareElements).hide()
                        }
                    }), $body.on("mouseleave", ".card-share", function(event) {
                        var $cardShare = $(event.target).closest(".card-share");
                        $cardShare.removeClass("is-hover"), $cardShare.hasClass("is-expanded") || $cardShare.parent(".card__info").children(nonShareElements).show()
                    })), $body.on("click", ".card-share__button.is-toggle", function(event) {
                        event.preventDefault();
                        var $cardShare = $(event.target).closest(".card-share");
                        $cardShare.toggleClass("is-expanded"), $cardShare.hasClass("is-expanded") ? ($cardShare.removeClass("is-hover"), $cardShare.parent(".card__info").children(nonShareElements).hide()) : $cardShare.parent(".card__info").children(nonShareElements).show()
                    }), $body.on("click", ".card-share__button.is-copy", function(event) {
                        event.preventDefault()
                    }), $body.on("click", "a[data-open-in-window]", function(event) {
                        event.stopPropagation(), event.preventDefault();
                        var win = window.parent,
                            $link = $(this),
                            url = $link.prop("href"),
                            title = $link.prop("title"),
                            h = Math.floor(win.innerHeight / 2),
                            w = Math.floor(win.innerWidth / 2);
                        win.open(url, title, "width=".concat(w, ",height=").concat(h))
                    }), (clipboard = new __WEBPACK_IMPORTED_MODULE_0_clipboard___default.a("[data-clipboard-text]")).on("success", function(event) {
                        var $this = $(event.trigger).closest(".card-share");
                        $this.removeClass("is-hover is-expanded");
                        var $notification = $this.siblings(".card-share-notification");
                        $notification.addClass("is-shown"), setTimeout(function() {
                            $notification.removeClass("is-shown")
                        }, 2e3)
                    }), clipboard.on("error", function(event) {
                        log.debug("Copy failed", event.action, event.trigger)
                    })
                }
            }
        }).call(__webpack_exports__, __webpack_require__(0), __webpack_require__(3))
    },
    858: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function(log, $) {
            var __WEBPACK_IMPORTED_MODULE_0__video_player_video_player__ = __webpack_require__(45),
                __WEBPACK_IMPORTED_MODULE_1__scripts_providers_js__ = __webpack_require__(859),
                __WEBPACK_IMPORTED_MODULE_2__inline_video_player_iframe_handlebars__ = __webpack_require__(862),
                __WEBPACK_IMPORTED_MODULE_2__inline_video_player_iframe_handlebars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__inline_video_player_iframe_handlebars__),
                __WEBPACK_IMPORTED_MODULE_3__inline_video_player_empty_handlebars__ = __webpack_require__(863),
                __WEBPACK_IMPORTED_MODULE_3__inline_video_player_empty_handlebars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__inline_video_player_empty_handlebars__);

            function removePlayingVideo($videoWrapper) {
                var $card = $videoWrapper.closest(".card");
                if ("jwplayer" === $card.attr("data-video-provider")) {
                    var videoId = $card.attr("data-video-id");
                    Object(__WEBPACK_IMPORTED_MODULE_0__video_player_video_player__.b)(videoId)
                }
                $card.removeClass("is-playing-video"), $videoWrapper.remove()
            }

            function closeOtherInlineVideos() {
                $(".inline-video-player__wrapper").each(function(index, element) {
                    return removePlayingVideo($(element))
                })
            }

            function initVideos() {
                $("body").on("click", ".card[data-video-provider] .fandom-video-button", function(ev) {
                    ev.preventDefault(), ev.stopPropagation(), closeOtherInlineVideos();
                    var $card = $(this).closest(".card");
                    $card.addClass("is-playing-video"),
                        function($card) {
                            var provider = $card.data("video-provider"),
                                id = $card.data("video-id"),
                                url = $card.data("video-url");
                            if (id || url) switch (Object(__WEBPACK_IMPORTED_MODULE_1__scripts_providers_js__.c)(provider)) {
                                case "iframe":
                                    var iframeUrl = id ? Object(__WEBPACK_IMPORTED_MODULE_1__scripts_providers_js__.a)(provider, id) : url,
                                        html = __WEBPACK_IMPORTED_MODULE_2__inline_video_player_iframe_handlebars___default()({
                                            url: iframeUrl
                                        });
                                    return void $card.append(html);
                                case "function":
                                    var randomId = Math.floor(1e7 + 89999999 * Math.random()).toString(36),
                                        elementId = "fandom-inline-video-".concat(randomId),
                                        _html = __WEBPACK_IMPORTED_MODULE_3__inline_video_player_empty_handlebars___default()({
                                            elementId: elementId,
                                            providerName: provider
                                        });
                                    return $card.append(_html), void Object(__WEBPACK_IMPORTED_MODULE_1__scripts_providers_js__.b)(provider, elementId, id);
                                default:
                                    log.error("Unsupported video provider", provider, id), setTimeout(function() {
                                        window.location = $card.find(".fandom-video-button").attr("href")
                                    }, 500)
                            } else log.error("No video data available")
                        }($card)
                }).on("click", ".inline-video-player__close", function(ev) {
                    ev.preventDefault(), ev.stopPropagation(), removePlayingVideo($(this).closest(".inline-video-player__wrapper"))
                })
            }
            __webpack_exports__.a = {
                init: function() {
                    initVideos(), $("body").on("click", ".card[data-has-embed] .fandom-video-button", function(ev) {
                        ev.preventDefault(), ev.stopPropagation(), closeOtherInlineVideos();
                        var $card = $(this).closest(".card"),
                            embed = $card.find(".card__embed-content").data("embed-content"),
                            html = __WEBPACK_IMPORTED_MODULE_2__inline_video_player_iframe_handlebars___default()({
                                html: embed
                            });
                        $card.append(html)
                    })
                }
            }
        }).call(__webpack_exports__, __webpack_require__(3), __webpack_require__(0))
    },
    859: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var fandom_jwplayer = __webpack_require__(860),
            youtube = __webpack_require__(861);
        __webpack_exports__.c = supportedStatus, __webpack_exports__.a = getIframeUrl, __webpack_exports__.b = function(providerName, elementId, id) {
            providers.forEach(function(provider) {
                provider.name === providerName && provider.handle(elementId, id)
            })
        };
        var providers = [fandom_jwplayer.a, {
            name: "twitter",
            type: "iframe"
        }, youtube.a];

        function getSupportedProvidersList() {
            return providers.map(function(p) {
                return p.name
            })
        }

        function supportedStatus(providerName) {
            var providerId = getSupportedProvidersList().indexOf(providerName);
            return providerId > -1 && providers[providerId].type
        }

        function getIframeUrl(providerName, id) {
            return providers.reduce(function(url, provider) {
                return provider.name === providerName ? provider.getUrl(id) : url
            }, "")
        }
    },
    860: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($) {
            var __WEBPACK_IMPORTED_MODULE_0_components_video_player_video_player_js__ = __webpack_require__(45),
                videoAspectRatio = .5625;
            __webpack_exports__.a = {
                name: "jwplayer",
                type: "function",
                handle: function(elementId, videoId) {
                    ! function($player) {
                        var aspectRatio = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : videoAspectRatio,
                            $parent = $player.closest(".inline-video-player"),
                            finalWidth = 0,
                            finalHeight = 0,
                            maxWidth = $parent.width(),
                            maxHeight = $parent.height(),
                            desiredWidth = maxHeight / aspectRatio;
                        desiredWidth <= maxWidth ? (finalWidth = desiredWidth, finalHeight = maxHeight) : (finalWidth = maxWidth, finalHeight = maxWidth * aspectRatio), $player.css({
                            width: "".concat(finalWidth, "px"),
                            height: "".concat(finalHeight, "px")
                        })
                    }($("#".concat(elementId)).closest(".inline-video-player__player"));
                    var playerWrapper = document.getElementById(elementId);
                    Object(__WEBPACK_IMPORTED_MODULE_0_components_video_player_video_player_js__.c)(playerWrapper, videoId, {
                        autoplay: !0,
                        mute: !1
                    })
                }
            }
        }).call(__webpack_exports__, __webpack_require__(0))
    },
    861: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($) {
            __webpack_exports__.a = {
                name: "youtube",
                type: "iframe",
                getUrl: function(id) {
                    return "https://www.youtube.com/embed/".concat(id, "?").concat($.param({
                        autoplay: 1,
                        iv_load_policy: 3,
                        modestbranding: 1,
                        playsinline: 1,
                        rel: 0,
                        showinfo: 0
                    }))
                }
            }
        }).call(__webpack_exports__, __webpack_require__(0))
    },
    862: function(module, exports, __webpack_require__) {
        var Handlebars = __webpack_require__(4);
        module.exports = (Handlebars.default || Handlebars).template({
            1: function(container, depth0, helpers, partials, data) {
                var helper;
                return '\t\t\t<iframe width="100%" height="100%" src="' + container.escapeExpression("function" == typeof(helper = null != (helper = helpers.url || (null != depth0 ? depth0.url : depth0)) ? helper : helpers.helperMissing) ? helper.call(null != depth0 ? depth0 : container.nullContext || {}, {
                    name: "url",
                    hash: {},
                    data: data
                }) : helper) + '" frameborder="0" allowfullscreen></iframe>\n'
            },
            3: function(container, depth0, helpers, partials, data) {
                var stack1;
                return null != (stack1 = helpers.if.call(null != depth0 ? depth0 : container.nullContext || {}, null != depth0 ? depth0.html : depth0, {
                    name: "if",
                    hash: {},
                    fn: container.program(4, data, 0),
                    inverse: container.noop,
                    data: data
                })) ? stack1 : ""
            },
            4: function(container, depth0, helpers, partials, data) {
                var stack1, helper;
                return "\t\t\t\t" + (null != (stack1 = "function" == typeof(helper = null != (helper = helpers.html || (null != depth0 ? depth0.html : depth0)) ? helper : helpers.helperMissing) ? helper.call(null != depth0 ? depth0 : container.nullContext || {}, {
                    name: "html",
                    hash: {},
                    data: data
                }) : helper) ? stack1 : "") + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(container, depth0, helpers, partials, data) {
                var stack1;
                return '<div class="inline-video-player__wrapper">\n\t<div class="inline-video-player has-iframe">\n' + (null != (stack1 = helpers.if.call(null != depth0 ? depth0 : container.nullContext || {}, null != depth0 ? depth0.url : depth0, {
                    name: "if",
                    hash: {},
                    fn: container.program(1, data, 0),
                    inverse: container.program(3, data, 0),
                    data: data
                })) ? stack1 : "") + '\t\t<div class="inline-video-player__close">\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n\t\t\t\t<g fill="#fff" fill-rule="nonzero">\n\t\t\t\t\t<path d="M14.621 1.258L1.258 14.62a1.5 1.5 0 0 0 2.12 2.121L16.743 3.38a1.5 1.5 0 0 0-2.12-2.121z"/>\n\t\t\t\t\t<path d="M16.742 14.621L3.38 1.258a1.5 1.5 0 1 0-2.121 2.12L14.62 16.743a1.5 1.5 0 0 0 2.121-2.12z"/>\n\t\t\t\t</g>\n\t\t\t</svg>\n\t\t</div>\n\t</div>\n</div>\n'
            },
            useData: !0
        })
    },
    863: function(module, exports, __webpack_require__) {
        var Handlebars = __webpack_require__(4);
        module.exports = (Handlebars.default || Handlebars).template({
            compiler: [7, ">= 4.0.0"],
            main: function(container, depth0, helpers, partials, data) {
                var helper, alias1 = null != depth0 ? depth0 : container.nullContext || {},
                    alias2 = helpers.helperMissing,
                    alias4 = container.escapeExpression;
                return '<div class="inline-video-player__wrapper">\n\t<div class="inline-video-player is-' + alias4("function" == typeof(helper = null != (helper = helpers.providerName || (null != depth0 ? depth0.providerName : depth0)) ? helper : alias2) ? helper.call(alias1, {
                    name: "providerName",
                    hash: {},
                    data: data
                }) : helper) + '">\n\t\t<div class="inline-video-player__player">\n\t\t\t<div id="' + alias4("function" == typeof(helper = null != (helper = helpers.elementId || (null != depth0 ? depth0.elementId : depth0)) ? helper : alias2) ? helper.call(alias1, {
                    name: "elementId",
                    hash: {},
                    data: data
                }) : helper) + '"></div>\n\t\t</div>\n\n\t\t<div class="inline-video-player__close">\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n\t\t\t\t<g fill="#fff" fill-rule="nonzero">\n\t\t\t\t\t<path d="M14.621 1.258L1.258 14.62a1.5 1.5 0 0 0 2.12 2.121L16.743 3.38a1.5 1.5 0 0 0-2.12-2.121z"/>\n\t\t\t\t\t<path d="M16.742 14.621L3.38 1.258a1.5 1.5 0 1 0-2.121 2.12L14.62 16.743a1.5 1.5 0 0 0 2.121-2.12z"/>\n\t\t\t\t</g>\n\t\t\t</svg>\n\t\t</div>\n\t</div>\n</div>\n'
            },
            useData: !0
        })
    },
    864: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($, log) {
            var __WEBPACK_IMPORTED_MODULE_0_components_utils_environment_js__ = __webpack_require__(36),
                $body = $("body"),
                $window = $(window);

            function recalculateHeight() {
                $("#ios-card-size-tweak").remove();
                var $fakeItemWell = $('<div class="feed-item__well"></div>').appendTo($body),
                    height = $fakeItemWell.height();
                $fakeItemWell.remove();
                var extraCss = '<style id="ios-card-size-tweak">.feed-item__well { height: '.concat(height, "px; }</style>");
                $body.append(extraCss)
            }
            __webpack_exports__.a = {
                init: function() {
                    "iOS" === Object(__WEBPACK_IMPORTED_MODULE_0_components_utils_environment_js__.c)() && (log.debug("detected iOS, applying the card size fix"), recalculateHeight(), $window.on("orientationchange", recalculateHeight))
                }
            }
        }).call(__webpack_exports__, __webpack_require__(0), __webpack_require__(3))
    },
    865: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var allowedKeys = {
                13: "enter",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                65: "a",
                66: "b"
            },
            konamiCode = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a", "enter"],
            konamiCodePosition = 0;
        __webpack_exports__.a = {
            init: function() {
                document.addEventListener("keydown", function(e) {
                    var key = allowedKeys[e.keyCode],
                        requiredKey = konamiCode[konamiCodePosition];
                    key && requiredKey && key === requiredKey ? (konamiCodePosition += 1) === konamiCode.length && window.open("http://contra.wikia.com/wiki/Konami_Code", "_blank") : konamiCodePosition = 0
                })
            }
        }
    },
    866: function(module, exports) {},
    94: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($) {
            var __WEBPACK_IMPORTED_MODULE_0_components_utils_when_visible__ = __webpack_require__(24),
                __WEBPACK_IMPORTED_MODULE_1_components_tracking_tracking__ = __webpack_require__(17),
                __WEBPACK_IMPORTED_MODULE_2__scripts_trending_topics_js__ = __webpack_require__(95),
                __WEBPACK_IMPORTED_MODULE_3__scripts_hot_block_js__ = __webpack_require__(96),
                __WEBPACK_IMPORTED_MODULE_4__scripts_quick_links_js__ = __webpack_require__(97);
            __webpack_exports__.a = {
                init: function() {
                    __WEBPACK_IMPORTED_MODULE_2__scripts_trending_topics_js__.a.init(), __WEBPACK_IMPORTED_MODULE_3__scripts_hot_block_js__.a.init(), __WEBPACK_IMPORTED_MODULE_4__scripts_quick_links_js__.a.init(), ["in-area-left", "in-area-main", "in-area-right"].forEach(function(className) {
                        $(".trending-topics.".concat(className, ":visible")).length && __WEBPACK_IMPORTED_MODULE_0_components_utils_when_visible__.a.once(".trending-topics.".concat(className), {
                            visible: function() {
                                __WEBPACK_IMPORTED_MODULE_1_components_tracking_tracking__.a.track({
                                    action: "view",
                                    category: "interrupt",
                                    label: "view.all-topics"
                                })
                            }
                        }), $(".featured-block.".concat(className, ":visible")).length && __WEBPACK_IMPORTED_MODULE_0_components_utils_when_visible__.a.once(".featured-block.".concat(className), {
                            visible: function() {
                                __WEBPACK_IMPORTED_MODULE_1_components_tracking_tracking__.a.track({
                                    action: "view",
                                    category: "interrupt",
                                    label: "view.featured-module"
                                })
                            }
                        }), $(".topic_explore-wikis.".concat(className, ":visible")).length && __WEBPACK_IMPORTED_MODULE_0_components_utils_when_visible__.a.once(".topic_explore-wikis.".concat(className), {
                            visible: function() {
                                __WEBPACK_IMPORTED_MODULE_1_components_tracking_tracking__.a.track({
                                    action: "view",
                                    category: "topic",
                                    label: "view.related-wikis"
                                })
                            }
                        })
                    })
                }
            }
        }).call(__webpack_exports__, __webpack_require__(0))
    },
    95: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($) {
            var __WEBPACK_IMPORTED_MODULE_0_components_utils_has_rail__ = __webpack_require__(23),
                __WEBPACK_IMPORTED_MODULE_1__sticky_module__ = __webpack_require__(55);
            __webpack_exports__.a = {
                init: function() {
                    $(".trending-topics__item").on("mouseenter", function() {
                        var $this = $(this);
                        $this.addClass("is-hover").css("background-color", $this.data("color"))
                    }).on("mouseleave", function() {
                        $(this).removeClass("is-hover").css("background-color", "transparent")
                    }), $(".trending-topics__more-btn").on("click", function() {
                        $(".more-trending-topics").fadeIn(200), $("body").addClass("no-scroll")
                    }), $(".more-trending-topics__close").on("click", function() {
                        $(this).closest(".more-trending-topics").fadeOut(200), $("body").removeClass("no-scroll")
                    }), new __WEBPACK_IMPORTED_MODULE_1__sticky_module__.a(".trending-topics.in-area-left", __WEBPACK_IMPORTED_MODULE_0_components_utils_has_rail__.a)
                }
            }
        }).call(__webpack_exports__, __webpack_require__(0))
    },
    96: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($, log) {
            var __WEBPACK_IMPORTED_MODULE_0_components_utils_when_visible__ = __webpack_require__(24),
                __WEBPACK_IMPORTED_MODULE_1_components_tracking_tracking__ = __webpack_require__(17),
                __WEBPACK_IMPORTED_MODULE_2_components_utils_accessors__ = __webpack_require__(5);
            __webpack_exports__.a = {
                init: function() {
                    $.ajax({
                        url: __WEBPACK_IMPORTED_MODULE_2_components_utils_accessors__.c.get("feed.hotContentModuleUrl")
                    }).then(function(response) {
                        log.debug("Hot content loaded ".concat(response.length, " bytes")), response.length && ($(".hot-block.is-placeholder").html(response).removeClass("is-placeholder"), ["in-area-left", "in-area-main", "in-area-right"].forEach(function(className) {
                            $(".hot-block.".concat(className, ":visible")).length && __WEBPACK_IMPORTED_MODULE_0_components_utils_when_visible__.a.once(".hot-block.".concat(className), {
                                visible: function() {
                                    __WEBPACK_IMPORTED_MODULE_1_components_tracking_tracking__.a.track({
                                        action: "view",
                                        category: "interrupt",
                                        label: "view.hot-module"
                                    })
                                }
                            })
                        }))
                    }, function(data) {
                        log.error(data)
                    })
                }
            }
        }).call(__webpack_exports__, __webpack_require__(0), __webpack_require__(3))
    },
    97: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_components_utils_has_rail__ = __webpack_require__(23),
            __WEBPACK_IMPORTED_MODULE_1__sticky_module__ = __webpack_require__(55);
        __webpack_exports__.a = {
            init: function() {
                new __WEBPACK_IMPORTED_MODULE_1__sticky_module__.a(".quick-links.in-area-right", __WEBPACK_IMPORTED_MODULE_0_components_utils_has_rail__.b, 5)
            }
        }
    },
    98: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function($) {
            var __WEBPACK_IMPORTED_MODULE_0_components_dialogs_dialogs_js__ = __webpack_require__(7),
                __WEBPACK_IMPORTED_MODULE_1_components_tracking_tracking_js__ = __webpack_require__(17),
                __WEBPACK_IMPORTED_MODULE_2__templates_lightbox_handlebars__ = __webpack_require__(99),
                __WEBPACK_IMPORTED_MODULE_2__templates_lightbox_handlebars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__templates_lightbox_handlebars__);
            __webpack_exports__.a = {
                init: function() {
                    $(".feed-layout__container").on("click", ".card__social-image", function(e) {
                        var $target = $(e.target),
                            src = $target.data("image"),
                            contentId = $target.closest(".feed-item").data("card-id");
                        __WEBPACK_IMPORTED_MODULE_0_components_dialogs_dialogs_js__.a.openEmptyModal({
                            content: __WEBPACK_IMPORTED_MODULE_2__templates_lightbox_handlebars___default()({
                                source: src
                            }),
                            className: "lightbox__wrapper"
                        }), __WEBPACK_IMPORTED_MODULE_1_components_tracking_tracking_js__.a.track({
                            category: "card",
                            label: "image.click",
                            action: contentId,
                            post_id: contentId
                        }), $("body").addClass("has-lightbox")
                    }), $("body").on("click", ".lightbox__close-btn", function(e) {
                        var lightboxId = $(e.target).closest(".lightbox__wrapper").attr("id");
                        __WEBPACK_IMPORTED_MODULE_0_components_dialogs_dialogs_js__.a.remove(lightboxId), $("body").removeClass("has-lightbox")
                    })
                }
            }
        }).call(__webpack_exports__, __webpack_require__(0))
    },
    99: function(module, exports, __webpack_require__) {
        var Handlebars = __webpack_require__(4);
        module.exports = (Handlebars.default || Handlebars).template({
            compiler: [7, ">= 4.0.0"],
            main: function(container, depth0, helpers, partials, data) {
                var helper;
                return '<div class="lightbox__container">\n\t<svg xmlns="http://www.w3.org/2000/svg" class="lightbox__close-btn" width="18" height="18" viewBox="0 0 18 18">\n\t\t<g fill="#fff" fill-rule="nonzero">\n\t\t\t<path d="M14.621 1.258L1.258 14.62a1.5 1.5 0 0 0 2.12 2.121L16.743 3.38a1.5 1.5 0 0 0-2.12-2.121z"/>\n\t\t\t<path d="M16.742 14.621L3.38 1.258a1.5 1.5 0 1 0-2.121 2.12L14.62 16.743a1.5 1.5 0 0 0 2.121-2.12z"/>\n\t\t</g>\n\t</svg>\n\t<div class="lightbox__image" style=\'background-image:url(' + container.escapeExpression("function" == typeof(helper = null != (helper = helpers.source || (null != depth0 ? depth0.source : depth0)) ? helper : helpers.helperMissing) ? helper.call(null != depth0 ? depth0 : container.nullContext || {}, {
                    name: "source",
                    hash: {},
                    data: data
                }) : helper) + ")'></div>\n</div>\n"
            },
            useData: !0
        })
    }
}, [855]);