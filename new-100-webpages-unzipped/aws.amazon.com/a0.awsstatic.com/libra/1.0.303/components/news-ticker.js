(function() {
    define("librastandardlib/obj-utils/mixin", [], function() {
        "use strict";
        return function mixin(target, source) {
            if (typeof target !== "object" || typeof source !== "object") {
                return target
            }
            Object.keys(source).forEach(function(key) {
                if (!target.hasOwnProperty(key)) {
                    target[key] = source[key]
                }
            });
            return target
        }
    });
    define("directories/directories-utils/validation-utils", [], function() {
        var ValidationUtils = {
            isAbsoluteUrl: function(url) {
                var re = new RegExp(/^https?:\/\//i);
                return re.test(url)
            }
        };
        return ValidationUtils
    });
    define("directories/directories-utils/data-utils", ["directories/directories-utils/validation-utils", "librastandardlib/logger/logger"], function(ValidationUtils, Logger) {
        var logger = new Logger("Directories");
        var DataUtils = {
            removeEmptyString: function(objArr) {
                var newArr = objArr.map(function(obj) {
                    var fields = obj.additionalFields || obj.item.additionalFields;
                    if (fields) {
                        fields = Object.keys(fields).reduce(function(additionalFields, key) {
                            additionalFields[key.trim()] = fields[key];
                            return additionalFields
                        }, {});
                        if (obj.additionalFields) {
                            obj.additionalFields = fields
                        } else {
                            obj.item.additionalFields = fields
                        }
                    }
                    return obj
                });
                return newArr
            },
            strToBool: function(value) {
                switch (value) {
                    case "1":
                        return true;
                    case "0":
                        return false;
                    default:
                        return false
                }
            },
            splitJSONByFieldValue: function(fldName, fldVals, items) {
                var splitData = {};
                items.forEach(function(item) {
                    var fldVal = item.additionalFields[fldName];
                    if (fldVals[fldVal]) {
                        splitData[fldVal] = splitData[fldVal] || [];
                        splitData[fldVal].push(item)
                    }
                });
                return splitData
            },
            removeItemWithInvalidUrl: function(items, idx, url) {
                if (!ValidationUtils.isAbsoluteUrl(url)) {
                    items.splice(idx, 1)
                }
                return items
            },
            mapAdditionalFields: function(item, fields, fieldTypes) {
                var additionalFields = item.additionalFields;
                var mappedFields = {};
                Object.keys(fields).forEach(function(key) {
                    var fldValue = this.getFieldValue(additionalFields, fields[key].trim(), fieldTypes);
                    mappedFields[key] = fldValue !== undefined ? fldValue : ""
                }.bind(this));
                Object.keys(additionalFields).forEach(function(key) {
                    if (!mappedFields.hasOwnProperty(key)) {
                        var fldVal = this.getFieldValue(additionalFields, key, fieldTypes);
                        if (fldVal !== undefined) {
                            mappedFields[key] = fldVal
                        }
                    }
                }.bind(this));
                return mappedFields
            },
            fieldTypeMap: {
                LongText: function(_fldValue) {
                    return {
                        type: "LongText",
                        value: _fldValue
                    }
                },
                Boolean: function(_fldValue) {
                    return DataUtils.strToBool(_fldValue)
                },
                Asset: function(_fldValue) {
                    try {
                        var assetObj = JSON.parse(_fldValue);
                        var publicUrl = assetObj.publicUrl;
                        if (!publicUrl) {
                            throw new Error("publicUrl is not found: " + _fldValue)
                        }
                        if (publicUrl.indexOf("https://") === 0) {
                            return publicUrl
                        }
                        return "https://" + publicUrl
                    } catch (e) {
                        logger.debug("JSON parsing error: " + e.message + ", " + _fldValue);
                        return ""
                    }
                }
            },
            getFieldValue: function(additionalFields, fldName, fieldTypes) {
                if (fldName === "" || !additionalFields.hasOwnProperty(fldName)) {
                    return
                }
                var fldValue = additionalFields[fldName];
                if (fieldTypes === undefined || !fieldTypes.hasOwnProperty(fldName)) {
                    return fldValue
                }
                var fldType = fieldTypes[fldName];
                if (this.fieldTypeMap[fldType] === undefined) {
                    return fldValue
                }
                return this.fieldTypeMap[fldType](fldValue)
            }
        };
        return DataUtils
    });
    define("librastandardlib/obj-utils/assign", [], function() {
        return function assign(target, args) {
            "use strict";
            if (target === null) {
                throw new TypeError("Cannot convert undefined or null to object")
            }
            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                if (source !== null) {
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            to[key] = source[key]
                        }
                    }
                }
            }
            return to
        }
    });
    define("librastandardlib/test-helpers/browser-globals/window", [], function() {
        return window
    });
    define("librastandardlib/dom-utils/isInViewport", ["librastandardlib/test-helpers/browser-globals/window"], function(window) {
        return function isInViewport($elem, top, left, width, height, viewPercentage, $window) {
            if (viewPercentage < 0 || viewPercentage > 100) {
                throw new Error("Invalid range for 'viewPercentage'")
            }
            if ($elem.css("visibility") === "hidden") {
                return false
            }
            $window = $window || $(window);
            var viewportTop = $window.scrollTop();
            var viewportHeight = $window.height();
            var viewportBottom = viewportTop + viewportHeight;
            var viewportLeft = $window.scrollLeft();
            var viewportWidth = $window.width();
            var viewportRight = viewportLeft + viewportWidth;
            var bottom = top + height;
            var right = left + width;
            var middleTop = top + height * viewPercentage / 100;
            var middleBottom = top + height - height * viewPercentage / 100;
            var horizViewPercentage = 80;
            var middleLeft = left + width * horizViewPercentage / 100;
            var middleRight = left + width - width * horizViewPercentage / 100;
            var isMiddleTopInViewport = viewportTop <= middleTop && middleTop <= viewportBottom;
            var isTopInViewport = viewportTop <= top && top <= viewportBottom;
            var isMiddleBottomInViewport = viewportTop <= middleBottom && middleBottom <= viewportBottom;
            var isBottomInViewport = viewportTop <= bottom && bottom <= viewportBottom;
            var isVerticallySpanningViewport = top <= viewportTop && viewportBottom <= bottom;
            if (isMiddleTopInViewport && isTopInViewport || isMiddleBottomInViewport && isBottomInViewport || isVerticallySpanningViewport) {
                var isMiddleLeftInViewport = viewportLeft <= middleLeft && middleLeft <= viewportRight;
                var isLeftInViewport = viewportLeft <= left && left <= viewportRight;
                var isMiddleRightInViewport = viewportLeft <= middleRight && middleRight <= viewportRight;
                var isRightInViewport = viewportLeft <= right && right <= viewportRight;
                var isHorizontallySpanningViewport = left <= viewportLeft && viewportRight <= right;
                if (isMiddleLeftInViewport && isLeftInViewport || isMiddleRightInViewport && isRightInViewport || isHorizontallySpanningViewport) {
                    return true
                }
            }
            return false
        }
    });
    define("librastandardlib/dom-utils/viewport-tracker", ["librastandardlib/obj-utils/assign", "librastandardlib/dom-utils/isInViewport"], function(_assign, isInViewport) {
        "use strict";
        var defaults = {
            viewPercentageIn: 50,
            viewPercentageOut: 0,
            viewTime: 500,
            startDelay: 0,
            activateOnce: false
        };
        var viewportQueue = {};
        var count = 0;

        function processViewportQueueItem(key, item) {
            if (!item.locked) {
                var check = item.check(item.active);
                if (check === 1) {
                    item.locked = true;
                    setTimeout(function() {
                        if (viewportQueue.hasOwnProperty(key)) {
                            if (item.check(item.active) === 1) {
                                item.active = true;
                                setTimeout(function() {
                                    if (viewportQueue.hasOwnProperty(key)) {
                                        item.locked = false;
                                        item.onActivate();
                                        if (item.activateOnce) {
                                            delete viewportQueue[key]
                                        }
                                    }
                                }, item.startDelay)
                            } else {
                                item.locked = false
                            }
                        }
                    }, item.viewTime)
                } else if (check === -1) {
                    item.active = false;
                    item.onDeactivate()
                }
            }
        }

        function processViewportQueue() {
            for (var key in viewportQueue) {
                if (viewportQueue.hasOwnProperty(key)) {
                    processViewportQueueItem(key, viewportQueue[key])
                }
            }
        }
        var ViewportItem = function() {
            function Item(item) {
                this.item = item
            }
            Item.prototype = {
                activate: function() {
                    if (!this.item.active) {
                        this.item.active = true;
                        this.item.onActivate()
                    }
                },
                deactivate: function() {
                    if (this.item.active) {
                        this.item.active = false;
                        this.item.onDeactivate()
                    }
                },
                processQueue: function() {
                    processViewportQueue()
                }
            };
            return Item
        }();
        var ViewportTracker = {
            watch: function($elem, onActivate, onDeactivate, options) {
                options = _assign({}, defaults, options);
                var elem = $elem[0];
                var check = function(isActive) {
                    var offset = $elem.offset();
                    var top = offset.top;
                    var left = offset.left;
                    if (!isActive && isInViewport($elem, top, left, elem.clientWidth, elem.clientHeight, options.viewPercentageIn)) {
                        return 1
                    } else if (isActive && !isInViewport($elem, top, left, elem.clientWidth, elem.clientHeight, options.viewPercentageOut)) {
                        return -1
                    }
                    return 0
                };
                var item = {
                    check: check,
                    onActivate: onActivate,
                    onDeactivate: onDeactivate,
                    viewTime: options.viewTime,
                    startDelay: options.startDelay,
                    activateOnce: options.activateOnce,
                    active: false
                };
                viewportQueue[++count] = item;
                processViewportQueue();
                return new ViewportItem(item)
            }
        };
        var ticking = false;
        window.addEventListener("scroll", function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    processViewportQueue();
                    ticking = false
                });
                ticking = true
            }
        }, false);
        return ViewportTracker
    });
    define("libra/dom-utils/component-viewport-tracker", ["librastandardlib/dom-utils/viewport-tracker"], function(ViewportTracker) {
        "use strict";
        var defaults = {
            carouselSelector: ".lb-carousel",
            contentRevealEvent: "custom_lb-comp-content-container_reveal",
            tabsSelector: ".lb-tabs",
            tabsChangeEvent: "custom_lb-tabs_change"
        };

        function watchCarousel($elem, tracker) {
            var $carousel = $elem.parents(defaults.carouselSelector);
            if ($carousel.length) {
                $carousel.first().on(defaults.contentRevealEvent, function() {
                    tracker.processQueue()
                })
            }
        }

        function watchTabs($elem, tracker) {
            var $tabs = $elem.parents(defaults.tabsSelector);
            if ($tabs.length) {
                $tabs.first().on(defaults.tabsChangeEvent, function(e) {
                    if ($.contains(e.target, $elem[0])) {
                        tracker.deactivate();
                        tracker.activate()
                    } else {
                        tracker.deactivate()
                    }
                })
            }
        }
        return {
            watch: function($elem, onActivate, onDeactivate, options) {
                var tracker = ViewportTracker.watch($elem, onActivate, onDeactivate, options);
                watchCarousel($elem, tracker);
                watchTabs($elem, tracker);
                return tracker
            }
        }
    });
    define("libra/components/news-ticker", ["directories/directories-bundle", "librastandardlib/obj-utils/mixin", "directories/directories-utils/data-utils", "libra/dom-utils/component-viewport-tracker", "librastandardlib/logger/logger"], function(DirectoriesBundle, mixin, DataUtils, Tracker, Logger) {
        var logger = new Logger("NewsTicker");
        var METRIC_PREFIX = "awsm_v2_:comp_newsticker_";
        var options = {
            componentName: "NewsTicker",
            itemsConfig: {
                selector: ".m-news-ticker",
                containerClass: ".m-news-ticker-items-container"
            }
        };
        var defaults = {
            showClass: "m-show",
            scrollClass: "m-scroll",
            stopClass: "m-stop",
            closeSelector: ".m-close",
            sessionKey: "awsm:hide-news-ticker-" + location.pathname,
            transitionEnd: "otransitionend oTransitionEnd msTransitionEnd transitionend"
        };
        var intervalId;

        function NewsTicker(elem) {
            if (this.isSetToHide()) {
                return
            }
            this.$elem = $(elem);
            this.init(options);
            if (this.template) {
                this.loadData()
            }
        }
        NewsTicker.prototype = {
            processData: function(data, replaceContent) {
                data.items = this.mapFields(data);
                this.displayItems(data, replaceContent);
                this.$itemsContainer = $(this.options.itemsConfig.containerClass);
                this.$elem.addClass(defaults.showClass);
                this.bindEvents()
            },
            isSetToHide: function() {
                return window.sessionStorage && window.sessionStorage.getItem(defaults.sessionKey)
            },
            mapFields: function(data) {
                var mapping = this.options.mapping;
                var items = data.items;
                items.forEach(function(item) {
                    item.mappedFields = DataUtils.mapAdditionalFields(item, mapping, data.fieldTypes)
                });
                return items
            },
            bindEvents: function() {
                Tracker.watch(this.$elem, function() {
                    this.startScroll(this.options.interval)
                }.bind(this), function() {
                    this.stopScroll()
                }.bind(this), this.options);
                this.$itemsContainer.on(defaults.transitionEnd, function(e) {
                    if (e.target === this.$itemsContainer.get(0)) {
                        this.$itemsContainer.append(this.$itemsContainer.find("li").first());
                        this.$itemsContainer.removeClass(defaults.scrollClass).addClass(defaults.stopClass)
                    }
                }.bind(this));
                $(defaults.closeSelector).on("click", function() {
                    this.$elem.removeClass(defaults.showClass);
                    this.stopScroll();
                    if (window.sessionStorage) {
                        window.sessionStorage.setItem(defaults.sessionKey, true)
                    }
                    logger.debug(METRIC_PREFIX + "NewsTickerClosed", "AI")
                }.bind(this))
            },
            startScroll: function(interval) {
                intervalId = setInterval(function() {
                    this.$itemsContainer.addClass(defaults.scrollClass).removeClass(defaults.stopClass)
                }.bind(this), interval)
            },
            stopScroll: function() {
                clearInterval(intervalId)
            }
        };
        mixin(NewsTicker.prototype, DirectoriesBundle.DirectoriesMixin);
        Libra.Comp.register({
            name: "news-ticker",
            initFct: function(elem) {
                new NewsTicker(elem)
            },
            initTime: "immediate"
        });
        return NewsTicker
    })
})();