"use strict";

if (typeof window.console === "undefined") {
    window.console = {
        log: function() {},
        debug: function() {}
    };
}

if (typeof JSON === "undefined") {
    JSON = {
        stringify: function() {},
        parse: function() {}
    };
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elt) {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = from < 0 ? Math.ceil(from) : Math.floor(from);
        if (from < 0) {
            from += len;
        }
        for (; from < len; from++) {
            if (from in this && this[from] === elt) return from;
        }
        return -1;
    };
}

if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
    };
}

if (typeof Object.assign != "function") {
    Object.assign = function(target, varArgs) {
        "use strict";
        if (target == null) {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];
            if (nextSource != null) {
                for (var nextKey in nextSource) {
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}

Object.keys || (Object.keys = function() {
    var a = Object.prototype.hasOwnProperty,
        b = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        d = c.length;
    return function(e) {
        if ("object" != typeof e && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
        var g, h, f = [];
        for (g in e) a.call(e, g) && f.push(g);
        if (b)
            for (h = 0; d > h; h++) a.call(e, c[h]) && f.push(c[h]);
        return f;
    };
}());

if (!Array.prototype.some) {
    Array.prototype.some = function(fun) {
        if (this == null) {
            throw new TypeError("Array.prototype.some called on null or undefined");
        }
        if (typeof fun !== "function") {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(thisArg, t[i], i, t)) {
                return true;
            }
        }
        return false;
    };
}

var __extends = this && this.__extends || function() {
    var extendStatics = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function(d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        "use strict";
        if (!search) {
            return false;
        }
        if (typeof start !== "number") {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

window.Demandbase = window.Demandbase || {};

window.Demandbase.Config = window.Demandbase.Config || {};

window.Demandbase.Config.hooks = window.Demandbase.Config.hooks || {};

window.Demandbase.Config.ads = window.Demandbase.Config.ads || {};

window.Demandbase.Config.analytics = window.Demandbase.Config.analytics || {};

window.Demandbase.Config.tokens = window.Demandbase.Config.tokens || {};

window.Demandbase.Config.forms = window.Demandbase.Config.forms || {};

window.Demandbase.Config.SiteOptimization = window.Demandbase.Config.SiteOptimization || {};

window.Demandbase.Connectors = window.Demandbase.Connectors || {};

var Demandbase;

(function(Demandbase) {
    var Config;
    (function(Config) {
        Config.ads = window.Demandbase.Config.ads || {};
        Config.analytics = window.Demandbase.Config.analytics || {};
        Config.conditions = window.Demandbase.Config.conditions || {};
        Config.content = window.Demandbase.Config.content || {};
        Config.forms = window.Demandbase.Config.forms || {};
        Config.segments = window.Demandbase.Config.segments || {};
        Config.emptyWatchDefault = window.Demandbase.Config.emptyWatchDefault || null;
        Config.hooks = window.Demandbase.Config.hooks || {};
        Config.isInIFrame = window.Demandbase.Config.isInIFrame || null;
        Config.key = window.Demandbase.Config.key || null;
        Config.logging = window.Demandbase.Config.logging || null;
        Config.nonCompanyDefault = window.Demandbase.Config.nonCompanyDefault || null;
        Config.nonWatchDefault = window.Demandbase.Config.nonWatchDefault || null;
        Config.testDomain = window.Demandbase.Config.testDomain || undefined;
        Config.testIp = window.Demandbase.Config.testIp || undefined;
        Config.tokens = window.Demandbase.Config.tokens || {};
        Config.useTestDomain = window.Demandbase.Config.useTestDomain || false;
        Config.useTestIp = window.Demandbase.Config.useTestIp || false;
        Config.Advertising = window.Demandbase.Config.Advertising || {};
        Config.AssetReporter = window.Demandbase.Config.AssetReporter || {};
        Config.Content = window.Demandbase.Config.Content || {};
        Config.ErrorReporter = window.Demandbase.Config.ErrorReporter || {};
        Config.Forms = window.Demandbase.Config.Forms || {};
        Config.Google_Analytics = window.Demandbase.Config.Google_Analytics || {};
        Config.Google_TagManager = window.Demandbase.Config.Google_TagManager || {};
        Config.IpApiModule = Demandbase.Config.IpApiModule || {};
        Config.SiteOptimization = window.Demandbase.Config.SiteOptimization || {};
        Config.EmailDomainReporter = window.Demandbase.Config.EmailDomainReporter || {};
    })(Config = Demandbase.Config || (Demandbase.Config = {}));
    var Connectors;
    (function(Connectors) {})(Connectors = Demandbase.Connectors || (Demandbase.Connectors = {}));
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    Demandbase.version = "8.0.7";
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var Utilities;
    (function(Utilities) {
        var ErrorStackParser;
        (function(ErrorStackParser) {
            var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
            var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
            var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

            function parse(error) {
                if (typeof error["stacktrace"] !== "undefined" || typeof error["opera#sourceloc"] !== "undefined") {
                    return this.parseOpera(error);
                } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                    return this.parseV8OrIE(error);
                } else if (error.stack) {
                    return this.parseFFOrSafari(error);
                } else {
                    return undefined;
                }
            }
            ErrorStackParser.parse = parse;

            function extractLocation(urlLike) {
                if (urlLike.indexOf(":") === -1) {
                    return [urlLike];
                }
                var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
                var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ""));
                return [parts[1], parts[2] || undefined, parts[3] || undefined];
            }
            ErrorStackParser.extractLocation = extractLocation;

            function _parseInt(string, radix) {
                if (radix === void 0) {
                    radix = 10;
                }
                if (!string) {
                    return undefined;
                }
                return parseInt(string, radix);
            }
            ErrorStackParser._parseInt = _parseInt;

            function parseV8OrIE(error) {
                var filtered = error.stack.split("\n").filter(function(line) {
                    return !!line.match(CHROME_IE_STACK_REGEXP);
                }, this);
                return filtered.map(function(line) {
                    if (line.indexOf("(eval ") > -1) {
                        line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, "");
                    }
                    var tokens = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1);
                    var locationParts = this.extractLocation(tokens.pop());
                    var functionName = tokens.join(" ") || undefined;
                    var fileName = ["eval", "<anonymous>"].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
                    return {
                        function: functionName,
                        file: fileName,
                        line: this._parseInt(locationParts[1]),
                        column: this._parseInt(locationParts[2])
                    };
                }, this);
            }
            ErrorStackParser.parseV8OrIE = parseV8OrIE;

            function parseFFOrSafari(error) {
                var filtered = error.stack.split("\n").filter(function(line) {
                    return !line.match(SAFARI_NATIVE_CODE_REGEXP);
                }, this);
                return filtered.map(function(line) {
                    if (line.indexOf(" > eval") > -1) {
                        line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1");
                    }
                    if (line.indexOf("@") === -1 && line.indexOf(":") === -1) {
                        return {
                            function: line
                        };
                    } else {
                        var tokens = line.split("@");
                        var locationParts = this.extractLocation(tokens.pop());
                        var functionName = tokens.join("@") || undefined;
                        return {
                            function: functionName,
                            file: locationParts[0],
                            line: this._parseInt(locationParts[1]),
                            column: this._parseInt(locationParts[2])
                        };
                    }
                }, this);
            }
            ErrorStackParser.parseFFOrSafari = parseFFOrSafari;

            function parseOpera(e) {
                if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
                    return this.parseOpera9(e);
                } else if (!e.stack) {
                    return this.parseOpera10(e);
                } else {
                    return this.parseOpera11(e);
                }
            }
            ErrorStackParser.parseOpera = parseOpera;

            function parseOpera9(e) {
                var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
                var lines = e.message.split("\n");
                var result = [];
                for (var i = 2, len = lines.length; i < len; i += 2) {
                    var match = lineRE.exec(lines[i]);
                    if (match) {
                        result.push({
                            file: match[2],
                            line: this._parseInt(match[1])
                        });
                    }
                }
                return result;
            }
            ErrorStackParser.parseOpera9 = parseOpera9;

            function parseOpera10(e) {
                var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
                var lines = e.stacktrace.split("\n");
                var result = [];
                for (var i = 0, len = lines.length; i < len; i += 2) {
                    var match = lineRE.exec(lines[i]);
                    if (match) {
                        result.push({
                            function: match[3] || undefined,
                            file: match[2],
                            line: this._parseInt(match[1])
                        });
                    }
                }
                return result;
            }
            ErrorStackParser.parseOpera10 = parseOpera10;

            function parseOpera11(error) {
                var filtered = error.stack.split("\n").filter(function(line) {
                    return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
                }, this);
                return filtered.map(function(line) {
                    var tokens = line.split("@");
                    var locationParts = this.extractLocation(tokens.pop());
                    var functionCall = tokens.shift() || "";
                    var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined;
                    var argsRaw;
                    if (functionCall.match(/\(([^\)]*)\)/)) {
                        argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, "$1");
                    }
                    var args = argsRaw === undefined || argsRaw === "[arguments not available]" ? undefined : argsRaw.split(",");
                    return {
                        function: functionName,
                        file: locationParts[0],
                        line: this._parseInt(locationParts[1]),
                        column: this._parseInt(locationParts[2])
                    };
                }, this);
            }
            ErrorStackParser.parseOpera11 = parseOpera11;
        })(ErrorStackParser = Utilities.ErrorStackParser || (Utilities.ErrorStackParser = {}));
    })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var Utilities;
    (function(Utilities) {
        var Api;
        (function(Api) {
            function buildApiParamString(params) {
                var allParams = {
                    referrer: document.referrer,
                    page: document.URL,
                    page_title: document.title
                };
                if (Demandbase.Config.isInIFrame) {
                    try {
                        allParams.page = window.top.document.URL;
                        allParams.referrer = window.top.document.referrer;
                        allParams.page_title = window.top.document.title;
                    } catch (error) {
                        allParams.page = document.referrer;
                        allParams.referrer = null;
                        allParams.page_title = "3rd Party iFrame";
                    }
                }
                allParams = Object.assign(allParams, params);
                return buildQueryString(allParams);
            }
            Api.buildApiParamString = buildApiParamString;

            function buildApiUrl(base, params) {
                var url = base || Utilities.Constants.URL_IP_API;
                url += buildApiParamString(params);
                return url;
            }
            Api.buildApiUrl = buildApiUrl;

            function buildQueryString(params) {
                var qs = "?";
                for (var name_1 in params) {
                    if (params.hasOwnProperty(name_1) && params[name_1] !== undefined) {
                        qs += name_1 + "=" + encodeURIComponent(params[name_1]) + "&";
                    }
                }
                qs = qs.substring(0, qs.length - 1);
                return qs;
            }
            Api.buildQueryString = buildQueryString;
        })(Api = Utilities.Api || (Utilities.Api = {}));
    })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

(function(window) {
    window.Demandbase.utils = window.Demandbase.utils || {};
    Object.assign(window.Demandbase.utils, window.Demandbase.utils, {
        buildApiParamString: Demandbase.Utilities.Api.buildApiParamString,
        buildApiUrl: Demandbase.Utilities.Api.buildApiUrl,
        buildQueryString: Demandbase.Utilities.Api.buildQueryString
    });
})(window);

var Demandbase;

(function(Demandbase) {
    var Utilities;
    (function(Utilities) {
        var Callbacks;
        (function(Callbacks) {
            Callbacks.callbackStack = [];

            function callback(data) {
                var _loop_1 = function(i) {
                    var callback_1 = Callbacks.callbackStack[i];
                    Demandbase.ErrorReporter.wrap(function() {
                        callback_1.call(Demandbase, data);
                    })();
                };
                for (var i = 0; i < Callbacks.callbackStack.length; i++) {
                    _loop_1(i);
                }
            }
            Callbacks.callback = callback;

            function domScriptCallback(data) {
                Demandbase.IpApi.CompanyProfile = Demandbase.Utilities.flatten(data);
                this.callback(data);
            }
            Callbacks.domScriptCallback = domScriptCallback;

            function registerCallback(callback) {
                if (Callbacks.callbackStack.indexOf(callback) !== -1) {
                    return;
                }
                Callbacks.callbackStack.push(callback);
                if (Demandbase.IpApi.CompanyProfile) {
                    Demandbase.ErrorReporter.wrap(function() {
                        callback.call(Demandbase, Demandbase.IpApi.CompanyProfile);
                    })();
                }
            }
            Callbacks.registerCallback = registerCallback;
        })(Callbacks = Utilities.Callbacks || (Utilities.Callbacks = {}));
    })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

(function(window) {
    window.Demandbase.utils = window.Demandbase.utils || {};
    Object.assign(window.Demandbase.utils, window.Demandbase.utils, {
        callback: Demandbase.Utilities.Callbacks.callback.bind(Demandbase.Utilities.Callbacks),
        registerCallback: Demandbase.Utilities.Callbacks.registerCallback.bind(Demandbase.Utilities.Callbacks)
    });
})(window);

var Demandbase;

(function(Demandbase) {
    var Utilities;
    (function(Utilities) {
        var Constants;
        (function(Constants) {
            Constants.QS_USE_TEST_DOMAIN = "db_useTestDomain";
            Constants.QS_QUERY_DOMAIN = "db_domain";
            Constants.QS_ENABLE_LOG = "db_logging";
            Constants.QS_PREVIEW_TOKEN = "db_preview_token";
            Constants.DFLT_NON_COMPANY = "(Non-Company Visitor)";
            Constants.DFLT_AW_EMPTY = "(AccountWatch Empty)";
            Constants.DFLT_NON_AW = "(Non-AccountWatch Visitor)";
            Constants.DFLT_EVENT_TYPE = "click";
            Constants.URL_IP_API = "api.company-target.com/api/v2/ip.json";
            Constants.URL_DOMAIN_API = "api.demandbase.com/api/v1/domain.json";
            Constants.URL_BW_AD_PIXEL = Demandbase.Config.tokens.URL_BW_AD_PIXEL || "match.prod.bidr.io/cookie-sync/demandbase";
            Constants.PARDOT_VISITOR_COOKIE_REGEX = /^visitor_id[\d]+$/;
            Constants.NON_HUMAN_DEVICES = [/adsbot-google/i, /googlebot/i];
            Constants.URL_CURRENT = function() {
                var pg = document.URL;
                if (Demandbase.Config.isInIFrame) {
                    pg = document.referrer;
                }
                pg = encodeURIComponent(pg);
                return pg;
            }();
            Constants.PROTOCOL = function() {
                return "https:" == document.location.protocol ? "https://" : "http://";
            }();
        })(Constants = Utilities.Constants || (Utilities.Constants = {}));
    })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

(function(window) {
    window.Demandbase.utils = window.Demandbase.utils || {};
    Object.assign(window.Demandbase.utils, window.Demandbase.utils, {
        tokens: Demandbase.Utilities.Constants
    });
})(window);

var Demandbase;

(function(Demandbase) {
    var DBContent = function() {
        function DBContent(values) {
            if (values === void 0) {
                values = {};
            }
            this.name = values.name || "";
            this.modify = values.modify || null;
            this.segments = values.segments || [];
            this.url = values.url || [];
            if (!this.modify) {
                this.modify = function() {
                    Demandbase.Utilities.Logging.log("DBContent: modify function not defined");
                };
            }
            if (typeof this.segments === "string") this.segments = [this.segments];
            if (typeof this.url === "string") this.url = [this.url];
        }
        DBContent.prototype.run = function() {
            var urlMatch = false;
            for (var index in this.url) {
                if (this.url.hasOwnProperty(index)) {
                    var url = this.url[index];
                    if (Demandbase.Utilities.isCurrentPage(url)) {
                        urlMatch = true;
                    }
                }
            }
            if (urlMatch) {
                var segMatch = false;
                for (var index in this.segments) {
                    if (this.segments.hasOwnProperty(index)) {
                        var segmentName = this.segments[index],
                            segment = window.Demandbase.Segments[segmentName];
                        if (typeof segment !== "undefined" && segment) {
                            segMatch = true;
                        }
                    }
                }
                if (!segMatch) {
                    Demandbase.Utilities.Logging.log("DBContent modify " + this.name + " not fired.  Segment " + segmentName);
                    return false;
                }
                Demandbase.Utilities.Logging.log("DBContent: running modify function for: " + this.name);
                this.modify.call(document);
                return true;
            } else {
                Demandbase.Utilities.Logging.log("DBContent modify " + this.name + " not fired. no URL match with: " + this.url);
                return false;
            }
        };
        return DBContent;
    }();
    Demandbase.DBContent = DBContent;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var DBContentBuilder;
    (function(DBContentBuilder) {
        function isValid(config) {
            if (!config) return false;
            var reqdPropsList = ["name", "segments", "pages", "modify"];
            if ("function" !== typeof config["modify"]) {
                //!config['pages'] instanceof Array ||
                //!config['segments'] instanceof Array
                Demandbase.Utilities.Logging.log("DBContentBuilder: invalid type in config.");
                return false;
            }
            for (var i = 0; i < reqdPropsList.length; i++) {
                if (typeof config[reqdPropsList[i]] === "undefined") {
                    Demandbase.Utilities.Logging.log("DBContentBuilder: invalid config missing: " + reqdPropsList[i]);
                    return false;
                }
            }
            return true;
        }
        DBContentBuilder.isValid = isValid;

        function build(config) {
            if (isValid(config)) {
                if (typeof config.pages === "string") {
                    config.url = [config.pages];
                } else {
                    config.url = config.pages;
                }
                if (typeof config.segments === "string") {
                    config.segments = [config.segments];
                }
                return new Demandbase.DBContent(config);
            } else {
                return null;
            }
        }
        DBContentBuilder.build = build;
    })(DBContentBuilder = Demandbase.DBContentBuilder || (Demandbase.DBContentBuilder = {}));
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var Utilities;
    (function(Utilities) {
        var Events;
        (function(Events) {
            function add(eventObj) {
                var result = true;
                if (!isValid(eventObj)) {
                    Demandbase.Utilities.Logging.log("Event not added.");
                    return false;
                }
                var eventType = eventObj.type || Demandbase.Utilities.Constants.DFLT_EVENT_TYPE;
                var elements = eventObj.elements;
                var elmConstructor = elements.constructor;
                if (elmConstructor === HTMLCollection || elmConstructor === NodeList) {
                    for (var eaElm in elements) {
                        var added = false;
                        if (elements.hasOwnProperty(eaElm)) {
                            added = _attachListener(elements[eaElm], eventType, eventObj.listener);
                            if (!added) {
                                result = false;
                                Demandbase.Utilities.Logging.log("Event not added to" + elements[eaElm]);
                            }
                        }
                    }
                } else {
                    return _attachListener(eventObj.elements, eventType, eventObj.listener);
                }
                return result;
            }
            Events.add = add;

            function _attachListener(element, eventName, listener) {
                if (!element) {
                    Demandbase.Utilities.Logging.log("Event not registered - invalid element/s.");
                    return null;
                }
                if (element.jquery) {
                    element = element[0];
                }
                Demandbase.Utilities.addEventListener(element, eventName, listener);
                Demandbase.Utilities.Logging.log("Event Listener bind to: " + element + " on event " + eventName);
                return true;
            }
            Events._attachListener = _attachListener;

            function isValid(eventObj) {
                var result = false;
                var reqdPropsList = ["elements", "listener"];
                var elms = eventObj.elements || null;
                var listener = eventObj.listener || null;
                for (var i = 0; i < reqdPropsList.length; i++) {
                    if (typeof eventObj[reqdPropsList[i]] === "undefined" || !eventObj[reqdPropsList[i]]) {
                        Demandbase.Utilities.Logging.log("Invalid Event object. Missing: " + reqdPropsList[i]);
                        return false;
                    }
                }
                if ("function" !== typeof listener) {
                    Demandbase.Utilities.Logging.log('Invalid Event: "listener" must be a function. Got (' + listener + ")");
                    return false;
                }
                if (elms instanceof Node || elms instanceof NodeList || elms instanceof HTMLElement || elms instanceof HTMLCollection || elms instanceof Window || elms instanceof Document || typeof elms === "function" || typeof window.Demandbase.jQuery !== "undefined" && elms instanceof window.Demandbase.jQuery) {
                    result = true;
                } else {
                    Demandbase.Utilities.Logging.log("Invalid Event:  element: " + elms + ' has type: "' + elms.constructor + '" which is not proper instance type.');
                }
                return result;
            }
            Events.isValid = isValid;
        })(Events = Utilities.Events || (Utilities.Events = {}));
    })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

(function(window) {
    window.Demandbase.utils = window.Demandbase.utils || {};
    Object.assign(window.Demandbase.utils, window.Demandbase.utils, {
        events: Demandbase.Utilities.Events
    });
})(window);

var Demandbase;

(function(Demandbase) {
    var Utilities;
    (function(Utilities) {
        var Logging;
        (function(Logging) {
            Logging.logging = false;
            Logging.debug = false;

            function alert(message) {
                log(message);
            }
            Logging.alert = alert;

            function log(message) {
                if (Demandbase.Config.logging || Demandbase.Utilities.getQueryParam(Demandbase.Utilities.Constants.QS_ENABLE_LOG) === "true") {
                    console.log("DB: " + message);
                }
            }
            Logging.log = log;
        })(Logging = Utilities.Logging || (Utilities.Logging = {}));
    })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

(function(window) {
    window.Demandbase.utils = window.Demandbase.utils || {};
    Object.assign(window.Demandbase.utils, window.Demandbase.utils, {
        logging: Demandbase.Utilities.Logging.logging,
        debug: Demandbase.Utilities.Logging.debug,
        alert: Demandbase.Utilities.Logging.alert.bind(Demandbase.Utilities.Logging),
        log: Demandbase.Utilities.Logging.log.bind(Demandbase.Utilities.Logging)
    });
})(window);

var Demandbase;

(function(Demandbase) {
    var Utilities;
    (function(Utilities) {
        function getCookiesByRegex(regex, _document) {
            var extractedCookies = {};
            _document.cookie.split(";").forEach(function(cookieString) {
                var cookie = cookieString.split("=");
                var cookieKey = cookie[0].trim();
                if (regex.test(cookieKey) && cookie.length > 1) {
                    extractedCookies[cookieKey] = cookie[1].trim();
                }
            });
            return extractedCookies;
        }
        Utilities.getCookiesByRegex = getCookiesByRegex;

        function addEventListener(target, type, listener) {
            if (target.addEventListener) {
                target.addEventListener(type, listener);
            } else if (target.attachEvent) {
                target.attachEvent(type, listener);
            }
        }
        Utilities.addEventListener = addEventListener;

        function detectIFrame() {
            return window.top !== window.self;
        }
        Utilities.detectIFrame = detectIFrame;

        function dig(target) {
            var keys = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                keys[_i - 1] = arguments[_i];
            }
            var digged = target;
            for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                var key = keys_1[_a];
                if (typeof digged === "undefined") {
                    return undefined;
                }
                if (typeof key === "function") {
                    digged = key(digged);
                } else {
                    digged = digged[key];
                }
            }
            return digged;
        }
        Utilities.dig = dig;

        function flatten(object) {
            for (var key in object) {
                var value = object[key];
                if (typeof value !== "object" || value === null || !object.hasOwnProperty(key)) {
                    continue;
                }
                for (var nestedKey in value) {
                    object[key + "_" + nestedKey] = value[nestedKey];
                }
                delete object[key];
            }
            return object;
        }
        Utilities.flatten = flatten;

        function getAttributeValue(data, attrName) {
            var registryMap = {
                city: "registry_city",
                state: "registry_state",
                zip: "registry_zip_code",
                country: "registry_country_code",
                country_name: "registry_country",
                latitude: "registry_latitude",
                longitude: "registry_longitude"
            };
            var dflt = Demandbase.Config.nonCompanyDefault || Demandbase.Utilities.Constants.DFLT_NON_COMPANY;
            var awDflt = Demandbase.Config.emptyWatchDefault || Demandbase.Utilities.Constants.DFLT_AW_EMPTY;
            var regName = registryMap[attrName] || "";
            var attrValue = data[attrName] || data[regName] || dflt;
            var isCompany = (data["company_name"] || dflt) !== dflt;
            var isAcctWatch = Object.keys(data).some(function(k) {
                return k.indexOf("watch_list_") === 0;
            });
            if (data[attrName] === false) {
                return "false";
            }
            if (attrName.indexOf("watch_list_") !== -1 && isCompany) {
                if (!isAcctWatch) {
                    awDflt = Demandbase.Config.nonWatchDefault || Demandbase.Utilities.Constants.DFLT_NON_AW;
                }
                attrValue = data[attrName] || awDflt;
            }
            return attrValue;
        }
        Utilities.getAttributeValue = getAttributeValue;

        function getDocumentReadyState() {
            return document.readyState;
        }
        Utilities.getDocumentReadyState = getDocumentReadyState;

        function getElementByIdOrName(elementIdentifier) {
            return document.getElementById(elementIdentifier) || document.getElementsByName(elementIdentifier)[0] || null;
        }
        Utilities.getElementByIdOrName = getElementByIdOrName;

        function getQueryParam(param, _window) {
            var _window = _window || window || {
                location: {
                    search: "",
                    hash: ""
                }
            };
            var params = {};
            var qs = _window.location.search.substring(1) || _window.location.hash && _window.location.hash.split("?")[1];
            if (!qs) return "";
            var pairs = qs.split("&");
            for (var i = 0; i < pairs.length; i++) {
                var nvArray = pairs[i].split("=");
                var name = nvArray[0];
                var value = nvArray[1];
                params[name] = value;
            }
            return params[param] || "";
        }
        Utilities.getQueryParam = getQueryParam;

        function insertScript(url, id) {
            if (!url) {
                return;
            }
            Demandbase._loadedScripts = Demandbase._loadedScripts || {};
            if (Demandbase._loadedScripts[url]) {
                return;
            } else {
                Demandbase._loadedScripts[url] = true;
            }
            var element = document.createElement("script");
            var firstScript = document.getElementsByTagName("script")[0];
            element.async = true;
            element.id = id || "";
            element.src = "https://" + url.replace(/(^\/\/)|(^http:\/\/)|(^https:\/\/)/, "");
            firstScript.parentNode.insertBefore(element, firstScript);
        }
        Utilities.insertScript = insertScript;

        function isCookieEnabled() {
            try {
                if (window.navigator.cookieEnabled) {
                    document.cookie = "COOKIE_TEST=TEST";
                    if (document.cookie.indexOf("COOKIE_TEST=TEST") !== -1) {
                        document.cookie = "COOKIE_TEST=PASSED_TEST";
                        return true;
                    }
                }
                return false;
            } catch (error) {
                return false;
            }
        }
        Utilities.isCookieEnabled = isCookieEnabled;

        function getCurrentUrl(currUrl) {
            var currentUrl = document.location.href;
            if (Demandbase.Config.isInIFrame) {
                currentUrl = document.referrer;
            }
            if (currUrl) {
                currentUrl = currUrl;
            }
            return currentUrl;
        }

        function isCurrentPage(testUrl, currUrl) {
            var qm = "?";
            var pound = "#";
            var hash = document.location.hash;
            var search = document.location.search;
            var currentUrl = getCurrentUrl(currUrl);
            if (currUrl) {
                var searchEnd = currUrl.indexOf(pound);
                if (searchEnd === -1) {
                    searchEnd = currUrl.length;
                }
                hash = currUrl.substring(currUrl.indexOf(pound), currUrl.length);
                search = currUrl.substring(currUrl.indexOf(qm), searchEnd);
                currentUrl = currUrl;
            }

            function stripProtocol(str) {
                var doubleSlash = "//";
                if (str.indexOf(doubleSlash) === 0) {
                    return str.substring(doubleSlash.length, str.length);
                }
                return str.replace(/^.*?:\/\//g, "");
            }

            function stripWww(str) {
                return str.replace(/^(www\.)/g, "");
            }

            function stripTail(str) {
                var slash = "/";
                if (str.indexOf(pound, str.length - pound.length) !== -1) {
                    str = str.substring(0, str.length - 1);
                }
                if (str.indexOf(slash, str.length - slash.length) !== -1) {
                    str = str.substring(0, str.length - 1);
                }
                return str;
            }
            testUrl = stripProtocol(testUrl);
            testUrl = stripWww(testUrl);
            testUrl = stripTail(testUrl);
            currentUrl = stripProtocol(currentUrl);
            currentUrl = stripWww(currentUrl);
            currentUrl = stripTail(currentUrl);
            if (testUrl.indexOf(pound) === -1 && currentUrl.indexOf(pound) !== -1) {
                currentUrl = currentUrl.substring(0, currentUrl.length - hash.length);
            }
            if (testUrl.indexOf(qm) === -1 && currentUrl.indexOf(qm) !== -1) {
                currentUrl = currentUrl.substring(0, currentUrl.length - search.length);
            }
            currentUrl = stripTail(currentUrl);
            return currentUrl === testUrl;
        }
        Utilities.isCurrentPage = isCurrentPage;

        function isCurrentPageRegex(testRegex, currUrl) {
            if (!testRegex) return false;
            if (testRegex.length <= 0) return false;
            if (testRegex[0] !== "^") {
                testRegex = "^" + testRegex;
            }
            var end = testRegex.length - 1;
            if (testRegex[end] !== "$") {
                testRegex = testRegex + "$";
            }
            var currentUrl = getCurrentUrl(currUrl);
            return new RegExp(testRegex).test(currentUrl);
        }
        Utilities.isCurrentPageRegex = isCurrentPageRegex;

        function isStorageEnabled(type) {
            try {
                var storage = window[type.toString()];
                storage.setItem("STORAGE_CHECK", "STORAGE_CHECK");
                var test = storage.getItem("STORAGE_CHECK");
                storage.removeItem("STORAGE_CHECK");
                return true;
            } catch (error) {
                return false;
            }
        }
        Utilities.isStorageEnabled = isStorageEnabled;

        function isOldBrowserOrUserAgentUnavailable() {
            try {
                return window.navigator.userAgent.indexOf("MSIE ") > 0;
            } catch (error) {
                return true;
            }
        }
        Utilities.isOldBrowserOrUserAgentUnavailable = isOldBrowserOrUserAgentUnavailable;

        function jqid(id) {
            return !id ? null : "#" + id.replace(/(:|\.|\[|\]|,)/g, "\\$1");
        }
        Utilities.jqid = jqid;

        function includesAny(haystack, needles) {
            for (var i = 0; i < needles.length; i++) {
                if (haystack.includes(needles[i])) return true;
            }
            return false;
        }
        Utilities.includesAny = includesAny;

        function isValidEmail(str) {
            var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regexp.test(str);
        }
        Utilities.isValidEmail = isValidEmail;

        function escapeRegExp(str) {
            return str.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&");
        }
        Utilities.escapeRegExp = escapeRegExp;

        function nodeListToArray(nodeList) {
            var output = [];
            for (var i = 0; i < nodeList.length; i++) output.push(nodeList[i]);
            return output;
        }
        Utilities.nodeListToArray = nodeListToArray;

        function b64EncodeUnicode(str) {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
                return String.fromCharCode(parseInt("0x" + p1, 16));
            }));
        }
        Utilities.b64EncodeUnicode = b64EncodeUnicode;

        function generateDeprecationMessage(name, version) {
            return name + " has been deprecated since version " + version;
        }
        Utilities.generateDeprecationMessage = generateDeprecationMessage;
    })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

(function(window) {
    window.Demandbase.utils = window.Demandbase.utils || {};
    Object.assign(window.Demandbase.utils, window.Demandbase.utils, Demandbase.Utilities);
    Object.assign(window.Demandbase.utils, Demandbase.utils, {
        loadScript: Demandbase.Utilities.insertScript,
        flattenData: Demandbase.Utilities.flatten,
        getAttrValue: Demandbase.Utilities.getAttributeValue
    });
})(window);

var Demandbase;

(function(Demandbase) {
    var ModuleFactory = function() {
        function ModuleFactory(config, moduleNameToConstructorMap, nameSpace) {
            this.config = config;
            this.moduleNameToConstructorMap = moduleNameToConstructorMap;
            this.nameSpace = nameSpace;
        }
        ModuleFactory.prototype.build = function() {
            this._parseConfig();
        };
        ModuleFactory.prototype._parseConfig = function() {
            var _this = this;
            Object.keys(this.config).forEach(function(configKey) {
                var configGroups = _this._testConfigForKey(configKey);
                if (configGroups && configGroups.length === 3) {
                    var moduleName = configGroups[1];
                    var moduleConstructor = _this.moduleNameToConstructorMap[moduleName];
                    if (_this.nameSpace[configKey]) {
                        Demandbase.ErrorReporter.send(new Error("Failed to dynamically create configuration for " + configKey + " due to previously existing configuration with the same name."));
                        return;
                    }
                    if (!moduleConstructor) {
                        Demandbase.ErrorReporter.send(new Error("No constructor available in moduleNameToConstructor map for module: " + moduleName));
                        return;
                    }
                    _this.nameSpace[configKey] = new moduleConstructor(_this.config[configKey]);
                    if (_this.nameSpace[configKey].isEnabled()) {
                        _this.nameSpace[configKey].initialize();
                    }
                }
            });
        };
        ModuleFactory.prototype._testConfigForKey = function(configKey) {
            return ModuleFactory.REGEX_CUSTOM_MODULE_NAME.exec(configKey);
        };
        ModuleFactory.REGEX_CUSTOM_MODULE_NAME = /(.*)__(.*)/;
        return ModuleFactory;
    }();
    Demandbase.ModuleFactory = ModuleFactory;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var BaseModule = function() {
        function BaseModule() {
            this.configuration = {};
        }
        BaseModule.prototype.isEnabled = function() {
            return this.configuration.enabled;
        };
        BaseModule.prototype.mergeConfigs = function() {
            var configs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                configs[_i] = arguments[_i];
            }
            Object.assign.apply(Object, [this.configuration].concat(configs));
        };
        return BaseModule;
    }();
    Demandbase.BaseModule = BaseModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var AdvertisingModule = function(_super) {
        __extends(AdvertisingModule, _super);

        function AdvertisingModule(config) {
            var _this = _super.call(this) || this;
            _this.ADVERTISING_PIXEL_ID = "ad";
            _this.CONVERSION_PIXEL_ID = "cn";
            _this.RETARGETING_PIXEL_ID = "rt";
            _this.DEFAULT_CONFIGURATION = {
                enabled: true,
                key: null,
                reportingOnly: false,
                enableBW: true
            };
            _this.configuration = {};
            _this.trackConversion = _this.trackConversionListener;
            _this.load = _this.initialize;
            _this.loadPixels = _this.insertPixels;
            _this._loadPixel = _this.insertPixel;
            _this._setCampaign = _this.loadCampaign;
            _this._setEvents = _this.registerEvents;
            _super.prototype.mergeConfigs.call(_this, _this.DEFAULT_CONFIGURATION, config ? config : Demandbase.Config.Advertising);
            _super.prototype.mergeConfigs.call(_this, config ? config : Demandbase.Config.ads);
            return _this;
        }
        AdvertisingModule.prototype.initialize = function() {
            this.insertPixels();
            if (this.configuration.reportingOnly === true && this.configuration.key && this.configuration.key !== Demandbase.Config.key) {
                Demandbase.IpApiReportingOnly.get(this.configuration.key, false);
            }
        };
        AdvertisingModule.prototype.isConversionPage = function() {
            throw new Error(Demandbase.Utilities.generateDeprecationMessage("AdvertisingModule.isConversionPage", "8.0.0"));
        };
        AdvertisingModule.prototype.insertPixels = function() {
            if (this.configuration.enableBW) {
                this.insertBWPixel(this.ADVERTISING_PIXEL_ID);
            }
        };
        AdvertisingModule.prototype.createAndAppendPixel = function(id, src) {
            var element = document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0];
            var img = document.createElement("img");
            img.setAttribute("style", "display:none");
            img.setAttribute("alt", "");
            img.setAttribute("aria-hidden", "true");
            img.id = id;
            img.src = src;
            element.appendChild(img);
        };
        AdvertisingModule.prototype.insertBWPixel = function(name) {
            var id = "db_bw_pixel_" + name;
            var src = Demandbase.Utilities.Constants.PROTOCOL + Demandbase.Utilities.Constants.URL_BW_AD_PIXEL;
            this.createAndAppendPixel(id, src);
        };
        AdvertisingModule.prototype.insertPixel = function(name) {
            throw new Error(Demandbase.Utilities.generateDeprecationMessage("AdvertisingModule.insertPixel", "8.0.0"));
        };
        AdvertisingModule.prototype.loadCampaign = function() {
            throw new Error(Demandbase.Utilities.generateDeprecationMessage("AdvertisingModule.loadCampaign", "8.0.0"));
        };
        AdvertisingModule.prototype.registerEvents = function() {
            throw new Error(Demandbase.Utilities.generateDeprecationMessage("AdvertisingModule.registerEvents", "8.0.0"));
        };
        AdvertisingModule.prototype.trackConversionListener = function() {
            throw new Error(Demandbase.Utilities.generateDeprecationMessage("AdvertisingModule.trackConversionListener", "8.0.0"));
        };
        AdvertisingModule.prototype.virtualPageViewListener = function() {
            throw new Error(Demandbase.Utilities.generateDeprecationMessage("AdvertisingModule.virtualPageViewListener", "8.0.0"));
        };
        return AdvertisingModule;
    }(Demandbase.BaseModule);
    Demandbase.AdvertisingModule = AdvertisingModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var AssetReporterModule = function(_super) {
        __extends(AssetReporterModule, _super);

        function AssetReporterModule(config) {
            var _this = _super.call(this) || this;
            _this.DEFAULT_CONFIGURATION = {
                enabled: true,
                assetList: ["api.demandbase.com/autocomplete/widget.js", "api.demandbase.com/autocomplete/widget.min.js", "autocomplete.demandbase.com/autocomplete/widget.js", "autocomplete.demandbase.com/autocomplete/widget.min.js", "scripts.demandbase.com/formWidget.js", "scripts.demandbase.com/formWidgetDebug.js", "scripts.demandbase.com/demandbase-sdk.js", "scripts.demandbase.com/demandbase-sdk-debug.js", "scripts.demandbase.com/forms.js", "scripts.demandbase.com/forms.min.js"]
            };
            _this.ERROR_MESSAGE_PREFIX = "Legacy Asset Detected: ";
            _this.configuration = {};
            _this.values = {};
            _super.prototype.mergeConfigs.call(_this, _this.DEFAULT_CONFIGURATION, config ? config : Demandbase.Config.AssetReporter);
            return _this;
        }
        AssetReporterModule.prototype.initialize = function() {
            if (Demandbase.Utilities.getDocumentReadyState() === "complete") {
                this.read();
            } else {
                Demandbase.Utilities.addEventListener(window, "load", Demandbase.ErrorReporter.wrap(this.read.bind(this)));
            }
        };
        AssetReporterModule.prototype.read = function() {
            var assetQty = this.configuration.assetList.length;
            for (var i = 0; i < assetQty; i++) {
                var assetUrl = this.configuration.assetList[i];
                var asset = document.querySelector("script[src='" + Demandbase.Utilities.Constants.PROTOCOL + assetUrl + "']");
                if (asset) {
                    this.values[assetUrl] = true;
                    this.send(assetUrl);
                } else {
                    this.values[assetUrl] = false;
                }
            }
        };
        AssetReporterModule.prototype.send = function(message) {
            var error = new Error(this.ERROR_MESSAGE_PREFIX + message);
            Demandbase.ErrorReporter.send(error);
        };
        return AssetReporterModule;
    }(Demandbase.BaseModule);
    Demandbase.AssetReporterModule = AssetReporterModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var ContentModule = function(_super) {
        __extends(ContentModule, _super);

        function ContentModule(config) {
            var _this = _super.call(this) || this;
            _this.DEFAULT_CONFIGURATION = {
                enabled: true
            };
            _this.configuration = {};
            _this.mods = {};
            _super.prototype.mergeConfigs.call(_this, _this.DEFAULT_CONFIGURATION, config ? config : Demandbase.Config.Content);
            Object.assign(_this.configuration, config ? config : Demandbase.Config.content);
            return _this;
        }
        ContentModule.prototype.initialize = function() {
            Demandbase.Utilities.Callbacks.registerCallback(this.callback.bind(this));
            this.setup();
        };
        ContentModule.prototype.callback = function() {
            this.setup();
            this.modify();
        };
        ContentModule.prototype.setup = function() {
            if (typeof Demandbase.Config.content !== "undefined") {
                for (var index in Demandbase.Config.content) {
                    var modObj = Demandbase.Config.content[index];
                    var dbContent = window.Demandbase.DBContentBuilder.build(modObj);
                    if (dbContent) {
                        this.mods[dbContent.name] = dbContent;
                    }
                }
            }
        };
        ContentModule.prototype.modify = function() {
            var _this = this;
            return Demandbase.ErrorReporter.wrap(function() {
                var isMod = false;
                for (var eachMod in _this.mods) {
                    if (_this.mods.hasOwnProperty(eachMod)) {
                        var modObj = _this.mods[eachMod];
                        var isRunMod = modObj.run();
                        if (isRunMod) isMod = true;
                    }
                }
            })();
        };
        return ContentModule;
    }(Demandbase.BaseModule);
    Demandbase.ContentModule = ContentModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var EmailDomainReporterModule = function(_super) {
        __extends(EmailDomainReporterModule, _super);

        function EmailDomainReporterModule(config) {
            var _this = _super.call(this) || this;
            _this.DEFAULT_CONFIGURATION = {
                enabled: false,
                formInputSelectors: ['input[type="text"]', 'input[type="email"]'],
                inputSearchTerms: ["email", "user", "login"]
            };
            _this.configuration = {};
            _this.baseUrl = "https://segments.company-target.com";
            _this.activeSetTimeout = 0;
            _super.prototype.mergeConfigs.call(_this, _this.DEFAULT_CONFIGURATION, config ? config : Demandbase.Config.EmailDomainReporter);
            return _this;
        }
        EmailDomainReporterModule.prototype.initialize = function() {
            this.sendDataIfAlreadyPresent();
            this.attachListenersIfDocumentReady();
        };
        EmailDomainReporterModule.prototype.sendDataIfAlreadyPresent = function() {
            var _this = this;
            var emailInputs = this.suspectedEmailInputs();
            if (emailInputs.length < 1) return;
            emailInputs.forEach(function(input) {
                var value = input.value;
                if (!Demandbase.Utilities.isValidEmail(value)) return;
                var domain = value.split("@")[1].toLowerCase();
                _this.send(domain);
            });
        };
        EmailDomainReporterModule.prototype.attachListenersIfDocumentReady = function() {
            var _this = this;
            if (Demandbase.Utilities.getDocumentReadyState() === "loading") {
                document.addEventListener("DOMContentLoaded", this.attachListenersIfDocumentReady.bind(this));
                return;
            }
            this.suspectedEmailInputs().forEach(function(input) {
                input.addEventListener("input", function() {
                    var value = input.value;
                    if (!Demandbase.Utilities.isValidEmail(value)) return;
                    var domain = value.split("@")[1].toLowerCase();
                    window.clearTimeout(_this.activeSetTimeout);
                    _this.activeSetTimeout = window.setTimeout(function() {
                        _this.send(domain);
                    }, 400);
                });
            });
        };
        EmailDomainReporterModule.prototype.suspectedEmailInputs = function() {
            var _this = this;
            var allInputsOnPage = Demandbase.Utilities.nodeListToArray(document.querySelectorAll(this.configuration.formInputSelectors.join(","))).map(function(element) {
                return element;
            });
            var suspectedEmailInputs = allInputsOnPage.filter(function(inputElement) {
                var name = inputElement.name.toLowerCase();
                var id = inputElement.id.toLowerCase();
                var searchTerms = _this.configuration.inputSearchTerms;
                if (Demandbase.Utilities.includesAny(name, searchTerms)) return true;
                if (Demandbase.Utilities.includesAny(id, searchTerms)) return true;
                return false;
            });
            return suspectedEmailInputs;
        };
        EmailDomainReporterModule.prototype.send = function(domain) {
            var xhttp;
            if (window.XMLHttpRequest) {
                xhttp = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            var token = Demandbase.Config.key || Demandbase.Utilities.dig(Demandbase.Config, "analytics", "key") || Demandbase.Utilities.dig(Demandbase.Config, "ads", "key") || Demandbase.Utilities.dig(Demandbase.Config, "forms", "key") || "";
            var qsB64 = Demandbase.Utilities.b64EncodeUnicode("vendor=mariposa&p1=" + domain + "&token=" + token);
            var url = this.baseUrl + "/l/" + qsB64;
            try {
                xhttp.open("GET", url);
                xhttp.withCredentials = true;
                xhttp.setRequestHeader("Content-type", "application/json");
                xhttp.send();
            } catch (requestError) {
                throw requestError;
            }
        };
        EmailDomainReporterModule.prototype.responseHandler = function(request) {};
        return EmailDomainReporterModule;
    }(Demandbase.BaseModule);
    Demandbase.EmailDomainReporterModule = EmailDomainReporterModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var ErrorReporterModule = function(_super) {
        __extends(ErrorReporterModule, _super);

        function ErrorReporterModule(config) {
            var _this = _super.call(this) || this;
            _this.VERSION = "0.0.0";
            _this.PROJECT_ID = "141580";
            _this.PROJECT_KEY = "9a0a3519e930259f5886a7af53b0ccaa";
            _this.SENTRY_PROJECT_ID = "1190150";
            _this.SENTRY_PUBLIC_KEY = "3c9d467f8a9d4295b0f8320ae852091d";
            _this.DEFAULT_CONFIGURATION = {
                environment: "production",
                ignorableErrors: []
            };
            _this.configuration = {};
            _super.prototype.mergeConfigs.call(_this, _this.DEFAULT_CONFIGURATION, config ? config : Demandbase.Config.ErrorReporter);
            return _this;
        }
        ErrorReporterModule.prototype.initialize = function() {};
        ErrorReporterModule.prototype.send = function(error) {
            if (this.configuration.ignorableErrors.indexOf(error.name) > -1 || this.configuration.ignorableErrors.indexOf(error.message) > -1) {
                return;
            }
            var sentryXhttp;
            if (window.XMLHttpRequest) {
                sentryXhttp = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                sentryXhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            var sentryUrl = "https://sentry.io/api/" + this.SENTRY_PROJECT_ID + "/store/?sentry_version=7&sentry_key=" + this.SENTRY_PUBLIC_KEY;
            try {
                sentryXhttp.open("POST", sentryUrl, true);
                sentryXhttp.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                sentryXhttp.send(this.formatMessage(error, true));
            } catch (requestError) {}
        };
        ErrorReporterModule.prototype.wrap = function(method) {
            var _this = this;
            if (typeof method !== "function") {
                throw new Error("Invalid Function: " + method);
            }
            return function() {
                var parameters = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    parameters[_i] = arguments[_i];
                }
                try {
                    if (typeof method !== "undefined" && typeof method.apply === "function") {
                        return method.apply(_this, parameters);
                    }
                } catch (error) {
                    _this.send(error);
                    Demandbase.Utilities.Logging.alert("Error: " + error + "\n" + error.stack);
                }
            };
        };
        ErrorReporterModule.prototype.formatMessage = function(error, forSentry) {
            if (forSentry === void 0) {
                forSentry = false;
            }
            var errorDetails = this.parseError(error);
            var context = this.parseContext();
            var environment = this.parseEnviroment();
            var session = this.parseSession();
            var params = this.parseParams();
            if (forSentry) {
                var sentryFormattedError = this.formatErrorForSentry(errorDetails);
                return JSON.stringify({
                    logger: context.notifier.name,
                    platform: "javascript",
                    release: context.version,
                    environment: context.environment,
                    request: {
                        url: context.url
                    },
                    contexts: {
                        browser: {
                            userAgent: context.userAgent
                        }
                    },
                    tags: {
                        clientId: environment.config.clientId
                    },
                    extra: {
                        readyState: context.readyState,
                        config: environment.config,
                        companyProfile: session
                    },
                    exception: {
                        values: [sentryFormattedError]
                    }
                });
            }
            return JSON.stringify({
                errors: [errorDetails],
                context: context,
                environment: environment,
                session: session,
                params: params
            });
        };
        ErrorReporterModule.prototype.formatErrorForSentry = function(errorDetails) {
            var stacktrace = [];
            for (var _i = 0, _a = errorDetails.backtrace; _i < _a.length; _i++) {
                var frame = _a[_i];
                stacktrace.push({
                    function: frame.function,
                    filename: frame.file,
                    lineno: frame.line,
                    colno: frame.column
                });
            }
            return {
                type: errorDetails.type,
                value: errorDetails.message,
                stacktrace: {
                    frames: stacktrace
                }
            };
        };
        ErrorReporterModule.prototype.parseError = function(error) {
            return {
                type: error.name,
                message: error.message,
                backtrace: Demandbase.Utilities.ErrorStackParser.parse(error)
            };
        };
        ErrorReporterModule.prototype.parseContext = function() {
            return {
                notifier: {
                    name: "ErrorReporterModule",
                    version: this.VERSION
                },
                environment: this.configuration.environment,
                version: Demandbase.version,
                url: window.location.href,
                userAgent: navigator.userAgent,
                rootDirectory: window.location.origin,
                readyState: document.readyState
            };
        };
        ErrorReporterModule.prototype.parseEnviroment = function() {
            return {
                config: Demandbase.Utilities.dig(Demandbase, "Config")
            };
        };
        ErrorReporterModule.prototype.parseSession = function() {
            return {
                companyProfile: Demandbase.Utilities.dig(Demandbase, "IP", "CompanyProfile")
            };
        };
        ErrorReporterModule.prototype.parseParams = function() {
            return {};
        };
        return ErrorReporterModule;
    }(Demandbase.BaseModule);
    Demandbase.ErrorReporterModule = ErrorReporterModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var FormsLoaderModule = function(_super) {
        __extends(FormsLoaderModule, _super);

        function FormsLoaderModule(config) {
            var _this = _super.call(this) || this;
            _this.REMOTE_MODULE_URL = "tag.demandbase.com/shared/forms.min.js";
            _this.DEFAULT_CONFIGURATION = {
                enabled: undefined,
                emailID: null,
                emailFields: []
            };
            _this.configuration = {};
            _this.inserted = false;
            _this.setConfiguration(config);
            return _this;
        }
        FormsLoaderModule.prototype.initialize = function() {
            Demandbase.Utilities.Callbacks.registerCallback(this.whenReady.bind(this));
        };
        FormsLoaderModule.prototype.whenReady = function() {
            if (this.isMktoForms2Installed()) {
                window.MktoForms2.whenReady(Demandbase.ErrorReporter.wrap(this.load.bind(this)));
            } else {
                this.load();
            }
        };
        FormsLoaderModule.prototype.load = function() {
            var isFormPage = false;
            if (typeof Demandbase.Config.isFormPage === "function") {
                isFormPage = Demandbase.Config.isFormPage();
                this.setConfiguration();
                isFormPage = Demandbase.Config.isFormPage();
            } else {
                isFormPage = this.isFormPage();
            }
            if (!isFormPage || this.inserted) {
                return;
            }
            this.insertForms();
        };
        FormsLoaderModule.prototype.isFormPage = function() {
            var emailFieldList = this.configuration.emailFields;
            if (this.configuration.emailID) {
                emailFieldList.push(this.configuration.emailID);
            }
            for (var i = 0; i < emailFieldList.length; i++) {
                if (Demandbase.Utilities.getElementByIdOrName(emailFieldList[i])) {
                    return true;
                }
            }
            return false;
        };
        FormsLoaderModule.prototype.isMktoForms2Installed = function() {
            return window.MktoForms2 !== undefined && window.MktoForms2.whenReady !== undefined;
        };
        FormsLoaderModule.prototype.insertForms = function() {
            this.inserted = true;
            Demandbase.Connectors.initWebForm = this.initializeWebForm;
            Demandbase.Utilities.insertScript(Demandbase.FormsLoader.REMOTE_MODULE_URL, "db_form_module");
        };
        FormsLoaderModule.prototype.initializeWebForm = function(config) {
            config = config || Demandbase.Config.forms || Demandbase.Config.Forms || {};
            window.Demandbase.Connectors.WebForm.connect(config);
        };
        FormsLoaderModule.prototype.setConfiguration = function(config) {
            _super.prototype.mergeConfigs.call(this, this.DEFAULT_CONFIGURATION, config ? config : Demandbase.Config.Forms);
            if (this.configuration.enabled === undefined && Demandbase.Config.Forms !== undefined) {
                this.configuration.enabled = true;
            }
            _super.prototype.mergeConfigs.call(this, this.DEFAULT_CONFIGURATION, config ? config : Demandbase.Config.forms);
            if (this.configuration.enabled === undefined && Demandbase.Config.forms !== undefined) {
                this.configuration.enabled = true;
            }
        };
        return FormsLoaderModule;
    }(Demandbase.BaseModule);
    Demandbase.FormsLoaderModule = FormsLoaderModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var SiteOptimizationLoaderModule = function(_super) {
        __extends(SiteOptimizationLoaderModule, _super);

        function SiteOptimizationLoaderModule(config) {
            var _this = _super.call(this) || this;
            _this.REMOTE_MODULE_URL = "https://tag.demandbase.com/shared/siteOptimization.min.js";
            _this.REMOTE_STYLESHEET_URL = "https://tag.demandbase.com/shared/siteOptimization.css";
            _this.DEFAULT_CONFIGURATION = {
                additionalClass: null,
                backgroundColorClass: null,
                closedTitle: "Recommended Content",
                companyProfile: null,
                cssFileURL: _this.REMOTE_STYLESHEET_URL,
                delay: 0,
                enabled: undefined,
                fadeIn: 0,
                fontColor: null,
                fontName: null,
                googleAnalyticsTrackerName: null,
                isGoogleAnalyticsEnabled: false,
                isRippleAnimation: true,
                isSwitchersDots: true,
                isSwitchersArrows: false,
                itemBackgroundColor: null,
                mainClass: "defaultBlock",
                openByDefault: false,
                openTitle: null,
                recommendationApiURL: "https://site-optimization-api.company-target.com/recommend/",
                recommendationCompanyName: null,
                recommendationCompanyId: null,
                recommendationKey: null,
                recommendationsProtocol: "forceHTTPS",
                recommendationUrl: window.location.href,
                showCloseButton: true,
                showCompanyName: true,
                showFeedbackLink: false,
                showIndicatorArrows: true,
                showLogo: true,
                showLogoWhenClosed: true,
                showLogoWhenOpen: false,
                showOnlyOnScroll: false,
                showTitleWhenClosed: true,
                showTitleWhenOpen: true,
                switcherArrowsColor: "#444",
                state: {
                    openedRecommendationBlock: null
                },
                widgetBackgroundColor: null,
                widgetContainerId: null
            };
            _this.configuration = {};
            _this.inserted = false;
            _super.prototype.mergeConfigs.call(_this, _this.DEFAULT_CONFIGURATION, config ? config : Demandbase.Config.SiteOptimization);
            _this.configuration.recommendationKey = Demandbase.Config.key;
            return _this;
        }
        SiteOptimizationLoaderModule.prototype.initialize = function() {
            Demandbase.Utilities.Callbacks.registerCallback(this.callback.bind(this));
        };
        SiteOptimizationLoaderModule.prototype.callback = function(data) {
            this.configuration.companyProfile = data;
            this.insertSiteOptimization();
        };
        SiteOptimizationLoaderModule.prototype.insertSiteOptimization = function() {
            this.inserted = true;
            Demandbase.Utilities.insertScript(Demandbase.SiteOptimizationLoader.REMOTE_MODULE_URL, "db_site_optimization_module");
        };
        return SiteOptimizationLoaderModule;
    }(Demandbase.BaseModule);
    Demandbase.SiteOptimizationLoaderModule = SiteOptimizationLoaderModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var Google_AnalyticsModule = function(_super) {
        __extends(Google_AnalyticsModule, _super);

        function Google_AnalyticsModule(config) {
            var _this = _super.call(this) || this;
            _this.DEFAULT_CONFIGURATION = {
                enabled: true,
                events: null,
                fieldMap: null,
                googleAnalyticsClassicScope: 2,
                trackerName: null,
                trackerId: null
            };
            _this.configuration = {};
            _this.gType = "";
            _this._cEvent = _this.sendEvent;
            _super.prototype.mergeConfigs.call(_this, _this.DEFAULT_CONFIGURATION, config ? config : Demandbase.Config.Google_Analytics);
            _super.prototype.mergeConfigs.call(_this, config ? config : Demandbase.Config.analytics);
            return _this;
        }
        Google_AnalyticsModule.prototype.initialize = function() {
            this._detectG();
            this._setTrackerName();
            if (this.configuration.fieldMap && "{}" !== JSON.stringify(this.configuration.fieldMap)) {
                Demandbase.Utilities.Callbacks.registerCallback(this.callback.bind(this));
            }
            this._setEvents();
        };
        Google_AnalyticsModule.prototype.sendEvent = function(category, action, label) {
            if (this.gType === "ga") {
                this._trackEvent(category, action, label);
            } else {
                window.ga(function() {
                    Demandbase.Connectors.Google_Analytics._sendEvent(category, action, label);
                });
            }
            Demandbase.Utilities.Logging.log("Sent Custom Event:" + category + "/" + action + "/" + label);
        };
        Google_AnalyticsModule.prototype.getTrackerInfo = function() {
            var classicInfo = [];
            var universalInfo = [];
            if (typeof window._gaq !== "undefined" && typeof window._gat !== "undefined" && typeof window._gat._getTrackers === "function") {
                var classicTrackers = window._gat._getTrackers();
                classicTrackers.forEach(function(classicTracker) {
                    if (classicTracker._getName().length > 0) {
                        classicInfo.push({
                            type: "classic",
                            trackerId: classicTracker._getAccount(),
                            name: classicTracker._getName()
                        });
                    }
                });
            }
            if (typeof window.ga !== "undefined" && typeof window.ga.getAll !== "undefined") {
                var universalTrackers = window.ga.getAll();
                universalTrackers.forEach(function(universalTracker) {
                    universalInfo.push({
                        type: "universal",
                        trackerId: universalTracker.get("trackingId"),
                        name: universalTracker.get("name")
                    });
                });
            }
            return universalInfo.concat(classicInfo);
        };
        Google_AnalyticsModule.prototype._setTrackerName = function() {
            var _this = this;
            if (this.configuration.trackerName) return;
            var foundUaMethod = typeof window.ga !== "undefined";
            var foundClassicMethod = typeof window._gat !== "undefined" && typeof window._gat._getTrackers === "function";
            if (foundClassicMethod) {
                var trackers = _gat._getTrackers();
                if (typeof trackers.length !== "undefined" && trackers.length > 0) {
                    if (this.configuration.trackerId) {
                        for (var i = 0; i < trackers.length; i++) {
                            if (trackers[i]._getName().length > 0) {
                                var name_1 = trackers[i]._getName();
                                if (trackers[i]._getAccount() === this.configuration.trackerId) {
                                    if (!this.configuration.trackerName) {
                                        this.configuration.trackerName = name_1;
                                        return;
                                    }
                                }
                            }
                        }
                    }
                    var tracker = trackers[0] || null;
                    if (tracker && typeof tracker._getName === "function") {
                        var name_2 = tracker._getName() || null;
                        if (!this.configuration.trackerName) {
                            this.configuration.trackerName = name_2;
                        }
                    }
                }
            }
            if (foundUaMethod) {
                window.ga(function() {
                    var trackers = window.ga.getAll() || [];
                    if (_this.configuration.trackerId) {
                        for (var i = 0; i < trackers.length; i++) {
                            var tracker = trackers[i];
                            var name_3 = tracker.get("name");
                            if (tracker.get("trackingId") === _this.configuration.trackerId) {
                                _this.configuration.trackerName = name_3;
                                return;
                            }
                        }
                    }
                    if (typeof trackers.length !== "undefined" && trackers.length > 0) {
                        var tracker = trackers[0] || null;
                        if (tracker && typeof tracker.get === "function") {
                            var name_4 = tracker.get("name") || null;
                            _this.configuration.trackerName = name_4;
                        }
                    }
                });
            }
        };
        Google_AnalyticsModule.prototype.callback = function(data) {
            try {
                if (!data) {
                    throw new Error("Error - no data passed to callback");
                }
                var self = Demandbase.Connectors.Google_Analytics;
                self._detectG();
                self._setTrackerName();
                for (var field in self.configuration.fieldMap) {
                    if (self.configuration.fieldMap.hasOwnProperty(field)) {
                        var num = +field;
                        var lbl = self.configuration.fieldMap[field];
                        var val = Demandbase.Utilities.getAttributeValue(data, lbl);
                        self._var(num, lbl, val.toString());
                    }
                }
                self.sendEvent("Demandbase", "API Resolution", "IP API");
            } catch (e) {
                Demandbase.Utilities.Logging.log("GA Error: " + e + "\n" + e.stack);
                Demandbase.Connectors.Google_Analytics.sendEvent("Demandbase", "API Resolution", "Callback Error");
            }
        };
        Google_AnalyticsModule.prototype._detectG = function() {
            if (window._gaq) {
                this.gType = "ga";
                _gaq.push(["_addDevId", "NE7T9"]);
            } else {
                this.gType = null;
            }
            this._setGaObject();
            try {
                window.ga(function() {
                    Demandbase.Connectors.Google_Analytics.gType = "ua";
                });
            } catch (error) {
                Demandbase.Connectors.Google_Analytics.gType = "ua";
            }
            Demandbase.Utilities.Logging.log("Detected Google version: " + this.gType);
        };
        Google_AnalyticsModule.prototype._sendEvent = function(category, action, label) {
            var command = this.configuration.trackerName ? this.configuration.trackerName + ".send" : "send";
            window.ga(command, "event", {
                eventCategory: category,
                eventAction: action,
                eventLabel: label,
                nonInteraction: true
            });
        };
        Google_AnalyticsModule.prototype._setCustomDimension = function(index, value) {
            var command = this.configuration.trackerName ? this.configuration.trackerName + ".set" : "set";
            window.ga(command, "dimension" + index, value);
        };
        Google_AnalyticsModule.prototype._setCustomVariable = function(index, name, value) {
            var command = this.configuration.trackerName ? this.configuration.trackerName + "._setCustomVar" : "_setCustomVar";
            var scope = this.configuration.googleAnalyticsClassicScope || 2;
            window._gaq.push([command, index >> 0, name, value, scope]);
        };
        Google_AnalyticsModule.prototype._setEvents = function() {
            var eventList = this.configuration.events || [];
            if (eventList) {
                for (var i in eventList) {
                    if (eventList.hasOwnProperty(i)) {
                        var eventObj = eventList[i];
                        if (eventObj.data) {
                            var cat = eventObj.data.category || "";
                            var act = eventObj.data.action || "";
                            var lbl = eventObj.data.label || "";
                            if (typeof eventObj.listener === "undefined" && cat && act && lbl) {
                                eventObj.listener = function() {
                                    Demandbase.Connectors.Google_Analytics.sendEvent(cat, act, lbl);
                                    Demandbase.Utilities.Logging.log("Event listener ran");
                                };
                            } else if (!cat || !act || !lbl) {
                                Demandbase.Utilities.Logging.log("Need to define a custom listener function or set data with category/action/label");
                            }
                        }
                        Demandbase.Utilities.Events.add(eventObj);
                    }
                }
            }
        };
        Google_AnalyticsModule.prototype._setGaObject = function() {
            if (typeof window.ga === "undefined") {
                window["ga"] = window["ga"] || function() {
                    (window["ga"].q = window["ga"].q || []).push(arguments);
                };
                window["ga"].l = +new Date();
            }
        };
        Google_AnalyticsModule.prototype._trackEvent = function(category, action, label) {
            var command = this.configuration.trackerName ? this.configuration.trackerName + "._trackEvent" : "_trackEvent";
            window._gaq.push([command, category, action, label, 0, 1]);
        };
        Google_AnalyticsModule.prototype._var = function(index, name, value) {
            if (this.gType === "ga") {
                this._setCustomVariable(index, name, value);
            } else {
                window.ga(function() {
                    Demandbase.Connectors.Google_Analytics._setCustomDimension(index, value);
                });
            }
            Demandbase.Utilities.Logging.log(index + " " + name + " : " + value);
        };
        return Google_AnalyticsModule;
    }(Demandbase.BaseModule);
    Demandbase.Google_AnalyticsModule = Google_AnalyticsModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var Google_TagManagerModule = function(_super) {
        __extends(Google_TagManagerModule, _super);

        function Google_TagManagerModule(config) {
            var _this = _super.call(this) || this;
            _this.DEFAULT_CONFIGURATION = {
                enabled: true
            };
            _this.configuration = {};
            _super.prototype.mergeConfigs.call(_this, _this.DEFAULT_CONFIGURATION, config ? config : Demandbase.Config.Google_TagManager);
            return _this;
        }
        Google_TagManagerModule.prototype.initialize = function() {
            Demandbase.Utilities.Callbacks.registerCallback(this.callback.bind(this));
        };
        Google_TagManagerModule.prototype.callback = function(data) {
            Demandbase.Connectors.Google_TagManager.pushToDataLayer(data);
        };
        Google_TagManagerModule.prototype.pushToDataLayer = function(data, id) {
            if (!window.google_tag_manager || !window.dataLayer || typeof dataLayer.push !== "function") {
                return false;
            }
            var eventLabel = id ? "_" + id : "";
            dataLayer.push(data);
            dataLayer.push({
                event: "Demandbase_Loaded" + eventLabel
            });
            Demandbase.Utilities.Logging.log("Pushed to GTM dataLayer");
            return true;
        };
        return Google_TagManagerModule;
    }(Demandbase.BaseModule);
    Demandbase.Google_TagManagerModule = Google_TagManagerModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var IpApiModule = function(_super) {
        __extends(IpApiModule, _super);

        function IpApiModule(config) {
            var _this = _super.call(this) || this;
            _this.TEST_MODE_ENABLED = "db_useTestIp";
            _this.TEST_MODE_VALUE = "db_ip";
            _this.API_ENDPOINT = "api.company-target.com/api/v2/ip.json";
            _this.DEFAULT_CONFIGURATION = {
                apiKey: null,
                baseUrl: _this.API_ENDPOINT,
                testModeEnabled: false,
                testModeValue: null,
                masIntegrations: {
                    pardot: false
                },
                enablePardotPolling: true
            };
            _this.configuration = {};
            _this.initialized = false;
            _this.pollForPardotStart = 0;
            _this.pardotMaxPollWindow = 5e3;
            _this.key = _this.configuration.apiKey;
            _this.useTestValue = _this.configuration.testModeEnabled;
            _this.testValue = _this.configuration.testModeValue;
            _this.load = _this.get;
            _this._loadOnce = _this.getOnce;
            _this.CompanyProfile = undefined;
            _this.isCalled = false;
            try {
                _super.prototype.mergeConfigs.call(_this, _this.DEFAULT_CONFIGURATION, {
                    apiKey: Demandbase.Config.key || Demandbase.Utilities.dig(Demandbase.Config, "analytics", "key") || Demandbase.Utilities.dig(Demandbase.Config, "ads", "key") || Demandbase.Utilities.dig(Demandbase.Config, "forms", "key"),
                    testModeEnabled: Demandbase.Utilities.getQueryParam(_this.TEST_MODE_ENABLED) || Demandbase.Config.useTestIp,
                    testModeValue: Demandbase.Utilities.getQueryParam(_this.TEST_MODE_VALUE) || Demandbase.Config.testIp
                }, config ? config : Demandbase.Config.IpApiModule);
                _this.initialized = true;
            } catch (e) {
                _this.initialized = false;
            }
            return _this;
        }
        IpApiModule.prototype.initialize = function() {
            try {
                Object.assign(this.configuration, this.configuration, {
                    apiKey: Demandbase.Config.key || Demandbase.Utilities.dig(Demandbase.Config, "analytics", "key") || Demandbase.Utilities.dig(Demandbase.Config, "ads", "key") || Demandbase.Utilities.dig(Demandbase.Config, "forms", "key"),
                    testModeEnabled: Demandbase.Utilities.getQueryParam(this.TEST_MODE_ENABLED) || Demandbase.Config.useTestIp,
                    testModeValue: Demandbase.Utilities.getQueryParam(this.TEST_MODE_VALUE) || Demandbase.Config.testIp
                });
                this.initialized = true;
            } catch (e) {
                this.initialized = false;
                Demandbase.ErrorReporter.send(e);
            }
        };
        IpApiModule.prototype.get = function(apiKey, triggerCallback) {
            var _this = this;
            if (apiKey === void 0) {
                apiKey = undefined;
            }
            if (triggerCallback === void 0) {
                triggerCallback = true;
            }
            if (!this.initialized) {
                this.initialize();
            }
            var request;
            if (window.XMLHttpRequest) {
                request = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            if (!request || Demandbase.Utilities.isOldBrowserOrUserAgentUnavailable()) {
                this.getByDomScript(apiKey, triggerCallback);
                return Demandbase.Utilities.Logging.log("IP API query via DOM tag");
            }
            var params = {
                key: apiKey || this.configuration.apiKey,
                query: this.fetchIpAddress(),
                mas_integrations: undefined,
                src: "tag"
            };
            var previewToken = Demandbase.Utilities.getQueryParam(Demandbase.Utilities.Constants.QS_PREVIEW_TOKEN);
            if (previewToken) params["preview_token"] = previewToken;
            if (!params.key) {
                return Demandbase.Utilities.Logging.log("IP API query cancelled - check auth key.");
            }
            var thereIsAValidPardotIntegration = this.configuration.masIntegrations && this.configuration.masIntegrations.pardot;
            if (!thereIsAValidPardotIntegration) {
                Demandbase.Utilities.Logging.log("No Pardot integration in config, skipping cookie sync");
            } else {
                params.mas_integrations = Demandbase.Utilities.b64EncodeUnicode(JSON.stringify({
                    pardot: this.fetchOrPollForPardotCookie() || {}
                }));
            }
            if (triggerCallback) {
                request.onreadystatechange = Demandbase.ErrorReporter.wrap(function() {
                    _this.responseHandler(request);
                });
            }
            try {
                request.open("GET", "https://" + Demandbase.Utilities.Api.buildApiUrl(this.configuration.baseUrl, params));
                if (typeof request.withCredentials !== "undefined") {
                    request.withCredentials = true;
                }
                request.send();
            } catch (error) {
                if (request.status === 0) {
                    if (!this.isIgnorableDevice()) {
                        throw new Error("IP API Request Blocked");
                    }
                } else {
                    throw error;
                }
            }
        };
        IpApiModule.prototype.isIgnorableDevice = function() {
            for (var i = 0; i < Demandbase.Utilities.Constants.NON_HUMAN_DEVICES.length; i++) {
                if (Demandbase.Utilities.Constants.NON_HUMAN_DEVICES[i].test(window.navigator.userAgent)) {
                    return true;
                }
            }
            return false;
        };
        IpApiModule.prototype.getByDomScript = function(apiKey, triggerCallback) {
            if (apiKey === void 0) {
                apiKey = undefined;
            }
            if (triggerCallback === void 0) {
                triggerCallback = true;
            }
            var params = {
                key: apiKey || this.configuration.apiKey,
                query: this.fetchIpAddress(),
                callback: triggerCallback ? "Demandbase.Utilities.Callbacks.domScriptCallback" : ""
            };
            if (!params.key) {
                return Demandbase.Utilities.Logging.log("IP API query cancelled - check auth key.");
            }
            Demandbase.Utilities.insertScript(Demandbase.Utilities.Api.buildApiUrl(this.configuration.baseUrl, params), "db_ip_api");
        };
        IpApiModule.prototype.getOnce = function() {
            if (this.isCalled) {
                Demandbase.Utilities.Logging.log("IP API call halted. Already called.");
                return;
            }
            this.isCalled = true;
            this.get();
        };
        IpApiModule.prototype.fetchIpAddress = function() {
            if (this.configuration.testModeEnabled) {
                return this.configuration.testModeValue;
            }
            return undefined;
        };
        IpApiModule.prototype.responseHandler = function(request) {
            if (request.readyState !== 4 || request.status !== 200) {
                return;
            }
            var responseData = JSON.parse(request.responseText);
            this.CompanyProfile = Demandbase.Utilities.flatten(responseData);
            Demandbase.Utilities.Callbacks.callback(this.CompanyProfile);
        };
        IpApiModule.prototype.fetchOrPollForPardotCookie = function() {
            var thereIsAValidPardotIntegration = this.configuration.masIntegrations && this.configuration.masIntegrations.pardot;
            if (!thereIsAValidPardotIntegration) {
                Demandbase.Utilities.Logging.log("No Pardot integration in config, skipping cookie sync");
                return;
            }
            var pardotCookie = Demandbase.Utilities.getCookiesByRegex(Demandbase.Utilities.Constants.PARDOT_VISITOR_COOKIE_REGEX, document);
            if (typeof pardotCookie === "object" && Object.keys(pardotCookie).length > 0) {
                Demandbase.Utilities.Logging.log("Found Pardot cookie, including in API request");
                return pardotCookie;
            }
            var pollingShouldBeInitiated = this.configuration.enablePardotPolling && this.pollForPardotStart === 0;
            if (pollingShouldBeInitiated === false) return;
            Demandbase.Utilities.Logging.log("Pardot cookie not found, initiating polling");
            this.pollForPardotCookie();
        };
        IpApiModule.prototype.pollForPardotCookie = function() {
            var _this = this;
            if (this.pollForPardotStart === 0) {
                this.pollForPardotStart = Date.now();
                Demandbase.Utilities.Logging.log("Pardot cookie polling started at " + this.pollForPardotStart);
            }
            var millisSincePollingStarted = Date.now() - this.pollForPardotStart;
            var pollingWindowExceeded = millisSincePollingStarted > this.pardotMaxPollWindow;
            if (pollingWindowExceeded) {
                Demandbase.Utilities.Logging.log("Pardot cookie not found within " + this.pardotMaxPollWindow + " ms");
                return;
            }
            var pardotCookieIsReady = this.fetchOrPollForPardotCookie();
            if (pardotCookieIsReady) {
                Demandbase.Utilities.Logging.log("Pardot cookie found, making second API call");
                this.get(undefined, false);
                return;
            }
            window.setTimeout(function() {
                _this.pollForPardotCookie();
            }, 100);
        };
        return IpApiModule;
    }(Demandbase.BaseModule);
    Demandbase.IpApiModule = IpApiModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
    var Domain = function() {
        function Domain() {}
        Domain._callback = function(data) {
            if (!data.domain && !data.person) {
                Demandbase.Utilities.Logging.log("Demandbase.Domain: No company profile available for domain: " + this.getDomain());
                return;
            }
            data = data.domain || data.person;
            var flatData = Demandbase.Utilities.flatten(data);
            this.CompanyProfile = data;
        };
        Domain.load = function() {
            if (typeof Demandbase.Config.getDomain === "function" && this.key !== undefined) {
                var queryDomain = "";
                var params = {};
                if (this.useTestValue) {
                    queryDomain = this.testValue;
                } else {
                    queryDomain = this.getDomain();
                }
                params = {
                    key: this.key,
                    callback: "Demandbase.Domain._callback",
                    query: queryDomain,
                    src: "tag"
                };
                Demandbase.Utilities.Logging.log("Calling Domain API...");
                Demandbase.Utilities.insertScript(Demandbase.Utilities.Api.buildApiUrl(Demandbase.Utilities.Constants.URL_DOMAIN_API, params), "db_domain_api");
            } else {
                Demandbase.Utilities.Logging.log("Domain API query cancelled - check auth key or Config.getDomain");
            }
        };
        Domain.getDomain = function() {
            if (this.useTestValue) {
                return this.testValue;
            } else if (typeof Demandbase.Config.getDomain === "function") {
                return Demandbase.Config.getDomain.call(Demandbase.Config);
            } else {
                Demandbase.Utilities.Logging.log("Warning: Config.getDomain fcn not defined.");
                return "getDomain function is not defined";
            }
        };
        Domain.key = Demandbase.Utilities.dig(Demandbase, "Config", "key") || Demandbase.Utilities.dig(Demandbase, "Config", "analytics", "key") || Demandbase.Utilities.dig(Demandbase, "Config", "ads", "key") || Demandbase.Utilities.dig(Demandbase, "Config", "forms", "key") || "ERR_NO_AUTH_KEY";
        Domain.CompanyProfile = null;
        Domain.useTestValue = Demandbase.Utilities.getQueryParam(Demandbase.Utilities.Constants.QS_USE_TEST_DOMAIN) === "true" || Demandbase.Config.useTestDomain || false;
        Domain.testValue = Demandbase.Utilities.getQueryParam(Demandbase.Utilities.Constants.QS_QUERY_DOMAIN) || Demandbase.Config.testDomain || "No Test Domain Set";
        return Domain;
    }();
    Demandbase.Domain = Domain;
})(Demandbase || (Demandbase = {}));

if (typeof window.__db === "undefined") {
    var __db = {
        segments: null,
        conditions: null
    };
}

window.Demandbase.DBCondition = function(name, attrVal, op, val, attrName) {
    this.name = name;
    this.attributeValue = attrVal;
    this.operator = op;
    this.value = val;
    this.attributeName = attrName;
    this._checkValue = function(chkVal) {
        switch (op) {
            case "equals":
                return this.attributeValue == chkVal;

            case "not equals":
                return this.attributeValue !== chkVal;

            case "contains":
                return this.attributeValue.indexOf(chkVal) !== -1;

            default:
                return false;
        }
    };
    this.evaluate = function() {
        op = this.operator.toLowerCase();
        op = window.Demandbase.DBCondition.prototype.supportedOperators[op];
        if (typeof this.value === "object") {
            for (var eachVal in this.value) {
                if (this._checkValue(this.value[eachVal]) === true) {
                    return true;
                }
            }
            return false;
        } else {
            return this._checkValue(this.value);
        }
    };
};

window.Demandbase.DBCondition.prototype.name = "DBCondition";

window.Demandbase.DBCondition.prototype.supportedOperators = {
    "=": "equals",
    "==": "equals",
    equal: "equals",
    equals: "equals",
    "!=": "not equals",
    "!==": "not equals",
    "not equal": "not equals",
    "not equals": "not equals",
    contains: "contains",
    contain: "contains"
};

window.Demandbase.DBConditionBuilder = {
    isValid: function(condition) {
        var reqdPropsList = ["name", "attributeValue", "operator", "value", "attributeName"];
        for (var i = 0; i < reqdPropsList.length; i++) {
            if (typeof condition[reqdPropsList[i]] === "undefined") {
                return false;
            } else {}
        }
        return true;
    },
    build: function(condition, data) {
        if (condition && !condition.name) return null;
        if (typeof condition.constructor.prototype.name !== "undefined" && condition.constructor.prototype.name === "DBCondition") {
            return condition;
        }
        if (!condition.attributeName) condition.attributeName = condition.attribute || "NO_ATTR_SET";
        condition.attributeValue = data[condition.attribute] || "";
        if (!this.isValid(condition)) return null;
        var name = condition["name"],
            apiValue = condition["attributeValue"],
            op = condition["operator"],
            val = condition["value"],
            apiName = condition["attributeName"];
        var condObj = new window.Demandbase.DBCondition(name, apiValue, op, val, apiName);
        return condObj;
    }
};

var DBSegment = function(n, c) {
    this.name = n;
    this.rules = [];
    this.operator = "";
    this.addCondition = function(c) {
        if (!c || !c.evaluate) {
            if (typeof c.constructor.prototype.name === "undefined" || c.constructor.prototype.name !== "DBCondition") {
                var c = window.Demandbase.DBConditionBuilder.build(c, window.Demandbase.Segments.CompanyProfile);
                if (!c) {
                    throw new Error("Invalid Condition: " + c.name);
                } else {
                    Demandbase.Utilities.Logging.log("DBSegmentBuilder converted condition successfully...");
                }
            }
        }
        this.rules.push(c);
        var op = this.operator || DBSegment.prototype.supportedOperators["any"];
        switch (op) {
            case "and":
                return this.value = this.value && c.evaluate();

            case "or":
                return this.value = this.value || c.evaluate();

            default:
                return c.evaluate();
        }
    };
    this.value = this.addCondition(c);
};

DBSegment.prototype.name = "DBSegment";

DBSegment.prototype.supportedOperators = {
    "&&": "and",
    "&": "and",
    and: "and",
    "||": "or",
    "|": "or",
    or: "or",
    any: "or",
    all: "and"
};

window.Demandbase.DBSegmentBuilder = {
    isValid: function(segment) {
        var reqdPropsList = ["name", "operator", "rules"];
        for (var i = 0; i < reqdPropsList.length; i++) {
            if (typeof segment[reqdPropsList[i]] === "undefined") {
                return false;
            } else {}
        }
        if (!Array.isArray(segment.rules)) return false;
        return true;
    },
    build: function(segment) {
        if (!this.isValid(segment)) {
            return null;
        }
        var segmentObj, name = segment["name"],
            condition = segment["rules"][0],
            op = segment["operator"];
        if (condition) {
            segmentObj = new DBSegment(name, condition);
            segmentObj.operator = DBSegment.prototype.supportedOperators[op] || DBSegment.prototype.supportedOperators["any"];
            if (segment["rules"].length > 1) {
                for (var i = 1; i < segment["rules"].length; i = i + 1) {
                    var condition = segment["rules"][i];
                    if (typeof condition.constructor.prototype.name === "undefined" || condition.constructor.prototype.name !== "DBCondition") {
                        var dbCond = window.Demandbase.DBConditionBuilder.build(condition, undefined);
                        if (dbCond) condition = dbCond;
                    }
                    segmentObj.addCondition(condition);
                }
            }
            return segmentObj;
        }
    }
};

window.Demandbase.Segments = window.Demandbase.Segments || {
    name: "Demandbase Segments",
    CompanyProfile: null,
    AccountWatchVisitor: false,
    IsCompany: false,
    version: "1.2.2",
    _debug: false,
    _allConditions: [],
    _allSegments: [],
    _isInitialized: false,
    _setup: function() {
        if (this._isInitialized) {
            this._reset();
        }
        if (!this.CompanyProfile && (window.Demandbase.IP || window.Demandbase.Domain)) {
            this.CompanyProfile = window.Demandbase.IP.CompanyProfile || window.Demandbase.Domain.CompanyProfile || {};
        }
        if (this.CompanyProfile.information_level === "Detailed") {
            this.IsCompany = true;
        }
        for (var eachAttr in this.CompanyProfile) {
            if (this.CompanyProfile.hasOwnProperty(eachAttr)) {
                if (eachAttr.indexOf("watch_list_") === 0) {
                    this.AccountWatchVisitor = true;
                }
            }
        }
        for (var eachCond in this._allConditions) {
            if (this._allConditions.hasOwnProperty(eachCond) && this._allConditions[eachCond] && (typeof this._allConditions[eachCond].constructor.prototype.name === "undefined" || this._allConditions[eachCond].constructor.prototype.name !== "DBCondition")) {
                this.add("condition", this._allConditions[eachCond]);
            }
        }
        for (var eachSegment in this._allSegments) {
            if (this._allSegments.hasOwnProperty(eachSegment) && this._allSegments[eachSegment].name && (typeof this._allSegments[eachSegment].constructor.prototype.name === "undefined" || this._allSegments[eachSegment].constructor.prototype.name !== "DBSegment")) {
                this.add("segment", this._allSegments[eachSegment]);
            }
        }
    },
    _reset: function() {
        this._allConditions = Demandbase.Config.conditions || __db.conditions || [];
        this._allSegments = Demandbase.Config.segments || __db.segments || [];
    },
    load: function() {
        Demandbase.Utilities.Callbacks.registerCallback(this.init.bind(this));
    },
    init: function(data) {
        window.Demandbase.Segments._debug = Demandbase.Utilities.Logging.debug || false;
        window.Demandbase.Segments._allConditions = Demandbase.Config.conditions || __db.conditions || [];
        window.Demandbase.Segments._allSegments = Demandbase.Config.segments || __db.segments || [];
        var dbs = window.Demandbase.Segments;
        dbs.CompanyProfile = data;
        dbs._setup();
        dbs._isInitialized = true;
    },
    getActiveSegments: function() {
        var segList = [];
        for (var eachSegment in this._allSegments) {
            if (this._allSegments.hasOwnProperty(eachSegment)) {
                if (this._allSegments[eachSegment].value) {
                    segList.push(this._allSegments[eachSegment]);
                }
            }
        }
        return segList;
    },
    getInactiveSegments: function() {
        var segList = [];
        for (var eachSegment in this._allSegments) {
            if (this._allSegments.hasOwnProperty(eachSegment)) {
                if (!this._allSegments[eachSegment].value) {
                    segList.push(this._allSegments[eachSegment]);
                }
            }
        }
        return segList;
    },
    add: function(type, newObject) {
        if (!type || !newObject || newObject == {}) {
            Demandbase.Utilities.Logging.log("Demandbase.Segments.add operation failed due to invalid/empty parameters.");
            return null;
        }
        if (type === "condition") {
            var newCondObj, condPos = this._allConditions.length;
            for (var eachCond = 0; eachCond < this._allConditions.length; eachCond++) {
                if (this._allConditions[eachCond].name === newObject.name) {
                    condPos = eachCond;
                    break;
                }
            }
            newCondObj = window.Demandbase.DBConditionBuilder.build(newObject, this.CompanyProfile);
            if (newCondObj) {
                this._allConditions[condPos] = newCondObj;
            } else {
                Demandbase.Utilities.Logging.log("Invalid Condition (not created) from: " + JSON.stringify(newObject));
            }
            if (typeof newObject.standalone === "undefined" || newObject.standalone !== false) {
                var condName = newObject.name;
                this.add("segment", {
                    name: condName,
                    rules: [condName],
                    operator: DBSegment.prototype.supportedOperators.any
                });
            }
        } else if (type === "segment") {
            if (this.isValid(newObject) !== "segment") {
                return null;
            }
            var newSegName = newObject["name"],
                newSegmentObj, condObj, segPos = this._allSegments.length,
                segArr = newObject.rules || [];
            for (var eachSeg = 0; eachSeg < this._allSegments.length; eachSeg++) {
                if (this._allSegments[eachSeg].name === newObject.name) {
                    segPos = eachSeg;
                    break;
                }
            }
            for (var eachItem = 0; eachItem < segArr.length; eachItem++) {
                var segItem = segArr[eachItem];
                if (DBSegment.prototype.supportedOperators[segItem]) continue;
                if (!DBSegment.prototype.supportedOperators[segItem]) {
                    condObj = this.get("condition", segItem);
                }
                if (condObj) {
                    segArr[eachItem] = condObj;
                } else {
                    Demandbase.Utilities.Logging.log("Segment: " + newObject + " uses a Condition (" + segArr[eachItem] + ") that is not defined.");
                }
            }
            newObject.rules = segArr;
            newSegmentObj = window.Demandbase.DBSegmentBuilder.build(newObject);
            if (newSegmentObj) {
                this._allSegments[segPos] = newSegmentObj;
                if (this.hasOwnProperty(newSegmentObj.name)) {
                    this[newSegmentObj.name] = newSegmentObj;
                } else {
                    try {
                        Object.defineProperty(this, newSegmentObj.name, {
                            value: newSegmentObj.value,
                            writable: true
                        });
                    } catch (error) {
                        window.Demandbase.Segments[newSegmentObj.name] = newSegmentObj.value;
                    }
                }
            } else {
                Demandbase.Utilities.Logging.log("Invalid Segment (not created) from: " + JSON.stringify(newObject));
            }
        } else {
            Demandbase.Utilities.Logging.log('Invalid "type" parameter (' + type + ') passed to "add" function.  Must be "segment" or "condition".');
        }
    },
    get: function(type, itemName) {
        var itList = [];
        if (arguments.length === 1) itemName = type;
        if (type === "condition") {
            if (typeof itemName.constructor.prototype.name !== "undefined" && itemName.constructor.prototype.name === "DBCondition") {
                return itemName;
            }
            itList = this._allConditions;
        } else {
            if (typeof itemName.constructor.prototype.name !== "undefined" && itemName.constructor.prototype.name === "DBSegment") {
                return itemName;
            }
            itList = this._allSegments;
        }
        for (var eachCond in itList) {
            if (this._allConditions[eachCond].name === itemName) {
                return this._allConditions[eachCond];
            }
        }
        if (!DBSegment.prototype.supportedOperators[itemName]) {
            Demandbase.Utilities.Logging.log('No item with type: "' + type + '" found with name: ' + itemName);
        }
        return null;
    },
    isValid: function(objToCheck) {
        var result;
        var retCondition = "condition";
        var retSegment = "segment";
        var segProps = ["name", "rules"];
        var condProps = ["name", "attribute", "operator", "value"];
        if (!objToCheck) return false;
        if (typeof objToCheck.constructor.prototype.name !== "undefined" && objToCheck.constructor.prototype.name === "DBSegment") return retSegment;
        if (typeof objToCheck.constructor.prototype.name !== "undefined" && objToCheck.constructor.prototype.name === "DBCondition") return retCondition;
        try {
            if (objToCheck.hasOwnProperty("name") && objToCheck.hasOwnProperty("rules")) {
                if (typeof objToCheck.rules === "object") {
                    return retSegment;
                }
            } else {
                for (var prop in segProps) {
                    if (!objToCheck.hasOwnProperty(segProps[prop])) {
                        Demandbase.Utilities.Logging.log('Invalid DBSegment definition.  Missing property:"' + segProps[prop] + '"');
                        return false;
                    }
                }
            }
            if (result) return result;
            for (var prop in condProps) {
                if (objToCheck.hasOwnProperty(condProps[prop])) {
                    result = retCondition;
                } else {
                    Demandbase.Utilities.Logging.log('Invalid DBCondition definition.  Missing property:"' + condProps[prop] + '"');
                    return false;
                }
            }
            return result;
        } catch (error) {
            Demandbase.ErrorReporter.send(error);
            return false;
        }
    }
};

var Demandbase;

(function(Demandbase) {
    function initialize(force) {
        if (Demandbase._isInitialized && !force) return;
        Demandbase._isInitialized = true;
        if (Demandbase.Config.isInIFrame == null) {
            Demandbase.Config.isInIFrame = Demandbase.Utilities.detectIFrame();
        }
        Demandbase.AssetReporter = new Demandbase.AssetReporterModule();
        if (Demandbase.AssetReporter.isEnabled()) {
            Demandbase.AssetReporter.initialize();
        }
        Demandbase.Advertising = new Demandbase.AdvertisingModule();
        Demandbase.Ads = Demandbase.Advertising;
        if (Demandbase.Advertising.isEnabled()) {
            Demandbase.IpApiReportingOnly = new Demandbase.IpApiModule();
            Demandbase.Advertising.initialize();
        }
        Demandbase.IpApi = new Demandbase.IpApiModule();
        Demandbase.IP = Demandbase.IpApi;
        Demandbase.IpApi.getOnce();
        window.Demandbase.Segments.load();
        if (Demandbase.Config.callback) {
            Demandbase.Utilities.Callbacks.registerCallback(Demandbase.Config.callback);
        }
        Demandbase.FormsLoader = new Demandbase.FormsLoaderModule();
        if (Demandbase.FormsLoader.isEnabled()) {
            Demandbase.FormsLoader.initialize();
            window.Demandbase.utils.loadFormModule = Demandbase.FormsLoader.load.bind(Demandbase.FormsLoader);
            window.Demandbase.utils.isFormPage = Demandbase.FormsLoader.isFormPage.bind(Demandbase.FormsLoader);
        }
        Demandbase.SiteOptimizationLoader = new Demandbase.SiteOptimizationLoaderModule();
        if (Demandbase.SiteOptimizationLoader.isEnabled()) {
            Demandbase.SiteOptimizationLoader.initialize();
        }
        Demandbase.Connectors.Google_Analytics = new Demandbase.Google_AnalyticsModule();
        if (Demandbase.Connectors.Google_Analytics.isEnabled()) {
            Demandbase.Connectors.Google_Analytics.initialize();
        }
        Demandbase.Connectors.Google_TagManager = new Demandbase.Google_TagManagerModule();
        if (Demandbase.Connectors.Google_TagManager.isEnabled()) {
            Demandbase.Connectors.Google_TagManager.initialize();
        }
        Demandbase.Content = new Demandbase.ContentModule();
        if (Demandbase.Content.isEnabled()) {
            Demandbase.Content.initialize();
        }
        if (typeof Demandbase.Config.getDomain === "function") {
            var domain = Demandbase.Config.getDomain();
            if (domain) {
                Demandbase.Domain.load();
            }
        }
        Demandbase.EmailDomainReporter = new Demandbase.EmailDomainReporterModule();
        if (Demandbase.EmailDomainReporter.isEnabled()) {
            Demandbase.EmailDomainReporter.initialize();
        }
        var ConfigPropToConstructorMap = {
            Advertising: Demandbase.AdvertisingModule,
            AssetReporter: Demandbase.AssetReporterModule,
            Content: Demandbase.ContentModule,
            ErrorReporter: Demandbase.ErrorReporterModule,
            Google_Analytics: Demandbase.Google_AnalyticsModule
        };
        new Demandbase.ModuleFactory(Demandbase.Config, ConfigPropToConstructorMap, Demandbase).build();
        if (typeof Demandbase.Config.onLoad === "function") {
            Demandbase.Config.onLoad.call(Demandbase);
        }
    }
    Demandbase.initialize = initialize;
})(Demandbase || (Demandbase = {}));

/*! */
/***************************************************/
/***************************************************/
/***************** READ ME FIRST *******************/
/***************************************************/
/***************************************************

This is a complex custom forms integration. For more notes and documentation,
check Box. I have made a copy of this config and added a number of notes
there. I was worried about breaking something accidentally in this config if I 
made those notes here. To see a live example of this form, see this page:

https://www.adobe.com/request-consultation/experience-cloud.html 
*/


Demandbase.Config.clientId = 'qQQxkRp0';
Demandbase.Config.key = 'b561357daf8504abd0ca9cc239218ae0';
Demandbase.Config.releaseChannel = 'beta';
//Demandbase.Config.isInIFrame = false; //iframe act like normal pages
Demandbase.Config.Advertising = {
    pixels: {
        ad: '1421361246',
        rt: '1421361512',
    },
    campaigns: [{
            name: '1',
            pixels: {
                cn: "15348910538807"
            },
            // pages: ["stock.adobe.com"],
            pagesRegex: ["^http[s]{0,1}:\/\/stock.adobe.com.*$"],
            conversionTriggers: {
                // pages: ["stock.adobe.com"],
                pagesRegex: ["^http[s]{0,1}:\/\/stock.adobe.com.*$"],
                events: {}
            },
        },
        {
            name: '2',
            pixels: {
                cn: "15348910762329"
            },
            pages: ["https://landing.adobe.com/en/na/products/creative-cloud/ctir-4625-stock-for-enterprise/index.html"],
            conversionTriggers: {
                pages: ["https://landing.adobe.com/en/na/products/creative-cloud/ctir-4625-stock-for-enterprise/index.html"],
                events: {}
            },
        },
        {
            name: '3',
            pixels: {
                cn: "15349620289062"
            },
            pages: ["https://www.adobe.com/creativecloud.html"],
            conversionTriggers: {
                pages: ["https://www.adobe.com/creativecloud.html"],
                events: {}
            },
        },
        {
            name: '4',
            pixels: {
                cn: "15349620483264"
            },
            pages: ["https://www.adobe.com/modal-offers/digitaltrends-creative.html"],
            conversionTriggers: {
                pages: ["https://www.adobe.com/modal-offers/digitaltrends-creative.html"],
                events: {}
            },
        },
    ],
};
Demandbase.Config.isFormPage = function() {
    if ((typeof window.Demandbase.formCheck !== "undefined") && (window.Demandbase.formCheck === true)) {
        // // 	&& (document.location.href === "https://campaign-stg.adobe.com/webApp/adbeAjayDemandbaseForm"||document.location.href==="http://www.adobe.com/products/request-consultation/marketing-cloud.html" || document.location.href==="http://www.adobe.com")) {
        // 		//disabling in staging temporarily.
        return true;
    } else if (window.Demandbase.utils.getQueryParam("forms-mode") === "db") {
        // if(window.Demandbase.utils.getQueryParam("forms-mode")==="db"){
        // if((document.location.href === "http://www.stage.adobe.com/products/request-consultation/creative-cloud.html") ||(document.location.href === "https://campaign-stg.adobe.com/webApp/adbeAjayDemandbaseForm")){
        // window.Demandbase.Config.demandbaseFormLoad();
        return true;
    } else {
        return false;
    }
};

window.Demandbase.Config.forms = {
    // 	companyID: document.querySelector("form input[name='id']") ? "Form" + document.querySelector("form input[name='id']").value + "_10" : "db_company_check",
    // 	emailID: document.querySelector("form input[name='id']") ? "Form" + document.querySelector("form input[name='id']").value + "_1" : "db_email_check",
    companyID: "Company",
    emailID: "Email",
    fieldMap: {
        industry: "Industry",
        employee_range: "Employee_Range__c",
        country_name: "Country"
    },
    autocompleteLabel: "{company_name}<br><span>{street_address}, {city}, {state}</span>",
    priorityMap: {
        "company": 3,
        "ip": 2,
        "domain": 1
    },
    autocompleteCount: 35,
    // TODO: Fix unsafe chaining of methods and use of .value
    // TODO: Reuse this: var document.querySelector("form input[name='id']") instead of making multiple/expensive DOM queries
    autocompleteFilters: {
        country: function() {
            if (document.querySelector("form input[name='id']")) {
                // TODO: Fix me - this breaks when element not on page!
                return window.Demandbase.Config.forms.countryHelper(
                    document.getElementById(("Form" + document.querySelector("form input[name='id']").value + '_14')).value
                );
            }
        },
        state: function() {
            if (document.querySelector("form input[name='id']")) {
                // TODO: Fix me - this breaks when element not on page!
                return window.Demandbase.Config.forms.stateHelper(
                    document.getElementById(("Form" + document.querySelector("form input[name='id']").value + '_15')).value
                );
            }
        }
    },
    countryHelper: function(val) {
        var cntryMap = window.Demandbase.Config.countryMapping;
        for (var cntry in cntryMap) {
            if (cntryMap[cntry] === val) {
                return cntry;
            }
        }
        return "";
    },
    stateHelper: function(val) {
        var stateMap = window.Demandbase.Config.stateMapping;
        for (var state in stateMap) {
            if (stateMap[state] === val) {
                return state;
            }
        }
        return "";
    },
    adobe_custom_mapping: function(data) {
        data = JSON.parse(JSON.stringify(data));
        try {
            window.faasSid(data["demandbase_sid"]);
            window.faasIndustryCode(data["industry"]);
            window.faasEmpRangeCode(data["employee_count"]);
            window.faasAddress1(data["street_address"]);
            window.faasCity(data["city"]);
            window.faasZipCode(data["zip"]);
            window.faasBizPhone(data["phone"]);
            window.faasAnnualSales(data["annual_sales"]);
            window.faasWebsite(data["web_site"]);
            window.faasSic(data["primary_sic"]);
        } catch (e) {
            window.Demandbase.utils.log(e);
        }
    },
    hooks: {
        pre_init: function() {
            if (typeof window.faasIP === "function") {
                window.faasIp(window.Demandbase.IP.CompanyProfile.ip);
            }
        },
        //TODO: Store this in-memory and reuse: $("form input[name='id']").val()
        response: function(data) {
            var sources = window.Demandbase.Connectors.WebForm._sourceChecker.sources;
            var comp_field = 'Form' + document.querySelector("form input[name='id']").value + "_10";
            if (data.pick) {
                $("#Form" + $("form input[name='id']").val() + "_16").val('');
                $("#Form" + $("form input[name='id']").val() + "_120").val('success');
                window.Demandbase.Autocomplete = {};
                window.Demandbase.Autocomplete.CompanyProfile = data.pick;
                $("#Form" + $("form input[name='id']").val() + "_129").val(window.Demandbase.IP.CompanyProfile.company_name);
                return window.Demandbase.Config.forms.adobe_custom_mapping(data.pick);
            } else if (data.input_match) {
                $("#Form" + $("form input[name='id']").val() + "_125").val('');
                $("#Form" + $("form input[name='id']").val() + "_18").val('');
                $("#Form" + $("form input[name='id']").val() + "_17").val('');
                $("#Form" + $("form input[name='id']").val() + "_126").val('');
                $("#Form" + $("form input[name='id']").val() + "_115").val('');
                $("#Form" + $("form input[name='id']").val() + "_122").val('');
                $("#Form" + $("form input[name='id']").val() + "_16").val('');
                $("#Form" + $("form input[name='id']").val() + "_123").val('');
                $("#Form" + $("form input[name='id']").val() + "_127").val('');
                $("#Form" + $("form input[name='id']").val() + "_104").val('');
                $("#Form" + $("form input[name='id']").val() + "_33").val('');
                $("#Form" + $("form input[name='id']").val() + "_120").val('failure');

                $("#Form" + $("form input[name='id']").val() + "_129").val(window.Demandbase.IP.CompanyProfile.company_name);
                // document.getElementById(comp_field).removeEventListener("focusout", selectOffCompanyField)
                return window.Demandbase.Config.forms.adobe_custom_mapping(window.Demandbase.IP.CompanyProfile);
            }
            //length of company field can't be 0
        }
    }
};
// TODO: Document me!
window.Demandbase.Config.demandbase_loaded = function(Demandbase, data) {};
window.Demandbase.Config.callback = function(data) {
    if (!data) return;
    else {
        try {
            if (typeof window.Demandbase.Config.demandbase_loaded.call !== 'undefined') {
                window.Demandbase.Config.demandbase_loaded.call(window.Demandbase, data);
            }
            window.Demandbase.Config.data_ip = data;
        } catch (e) {
            window.Demandbase.utils.log(e);
        }
    }
};
window.Demandbase.Config.data_ip = {};
window.Demandbase.Config.data_person = {};
window.Demandbase.Config.countryMapping = {
    "AD": "546",
    "AE": "547",
    "AF": "555",
    "AG": "556",
    "AI": "557",
    "AL": "558",
    "AM": "559",
    "AN": "560",
    "AO": "561",
    "AQ": "562",
    "AR": "563",
    "AT": "590",
    "AU": "600",
    "AW": "609",
    "AZ": "610",
    "BA": "611",
    "BB": "612",
    "BD": "613",
    "BE": "614",
    "BF": "624",
    "BG": "625",
    "BH": "635",
    "BI": "636",
    "BJ": "637",
    "BM": "638",
    "BN": "639",
    "BO": "640",
    "BR": "641",
    "BS": "669",
    "BT": "670",
    "BW": "671",
    "BY": "672",
    "BZ": "673",
    "CA": "674",
    "CC": "688",
    "CD": "689",
    "CF": "690",
    "CG": "691",
    "CH": "692",
    "CI": "719",
    "CK": "720",
    "CL": "721",
    "CM": "737",
    "CN": "738",
    "CO": "771",
    "CR": "807",
    "CV": "810",
    "CX": "811",
    "CY": "812",
    "CZ": "813",
    "DE": "822",
    "DJ": "839",
    "DK": "840",
    "DM": "857",
    "DO": "858",
    "DZ": "859",
    "EC": "860",
    "EE": "862",
    "EG": "863",
    "EH": "867",
    "ER": "868",
    "ES": "869",
    "ET": "920",
    "FI": "921",
    "FJ": "928",
    "FK": "929",
    "FM": "930",
    "FO": "931",
    "FR": "932",
    "GA": "1034",
    "GB": "1035",
    "GD": "1230",
    "GE": "1231",
    "GF": "1232",
    "GH": "1233",
    "GI": "1234",
    "GL": "1235",
    "GM": "1236",
    "GN": "1237",
    "GP": "1238",
    "GQ": "1239",
    "GR": "1240",
    "GS": "1294",
    "GT": "1295",
    "GW": "1296",
    "GY": "1297",
    "HK": "1298",
    "HN": "1305",
    "HR": "1306",
    "HT": "1328",
    "HU": "1329",
    "ID": "1370",
    "IE": "1398",
    "IL": "1425",
    "IN": "1432",
    "IO": "1468",
    "IQ": "1469",
    "IS": "1471",
    "IT": "1472",
    "JM": "1577",
    "JO": "1578",
    "JP": "1579",
    "KE": "1627",
    "KG": "1629",
    "KH": "1630",
    "KI": "1631",
    "KM": "1632",
    "KN": "1633",
    "KR": "1635",
    "KW": "1653",
    "KY": "1654",
    "KZ": "1655",
    "LA": "1669",
    "LB": "1670",
    "LC": "1671",
    "LI": "1672",
    "LK": "1673",
    "LR": "1674",
    "LS": "1675",
    "LT": "1676",
    "LU": "1677",
    "LV": "1678",
    "LY": "1679",
    "MA": "1680",
    "MC": "1681",
    "MD": "1682",
    "ME": "1725",
    "MG": "1726",
    "MH": "1727",
    "MK": "1728",
    "ML": "1729",
    "MM": "1730",
    "MN": "1731",
    "MO": "1732",
    "MQ": "1733",
    "MR": "1734",
    "MS": "1735",
    "MT": "1736",
    "MU": "1737",
    "MV": "1738",
    "MW": "1739",
    "MX": "1740",
    "MY": "1774",
    "MZ": "1793",
    "NA": "1794",
    "NC": "1795",
    "NE": "1796",
    "NF": "1797",
    "NG": "1798",
    "NI": "1799",
    "NL": "1800",
    "NO": "1817",
    "NP": "1837",
    "NR": "1838",
    "NU": "1842",
    "NZ": "1843",
    "OM": "1856",
    "PA": "1857",
    "PE": "1858",
    "PF": "1883",
    "PG": "1884",
    "PH": "1885",
    "PK": "1986",
    "PL": "1994",
    "PM": "2044",
    "PN": "2045",
    "PS": "2046",
    "PT": "2047",
    "PY": "2088",
    "QA": "2089",
    "RE": "2090",
    "RO": "2091",
    "RS": "2134",
    "RU": "2135",
    "RW": "2247",
    "SA": "2248",
    "SB": "2249",
    "SC": "2250",
    "SE": "2252",
    "SG": "2274",
    "SH": "2276",
    "SI": "2277",
    "SJ": "2338",
    "SK": "2339",
    "SL": "2344",
    "SM": "2345",
    "SN": "2346",
    "SO": "2347",
    "SR": "2348",
    "ST": "2349",
    "SV": "2350",
    "SZ": "2352",
    "TC": "2353",
    "TD": "2354",
    "TG": "2355",
    "TH": "2356",
    "TJ": "2437",
    "TK": "2438",
    "TL": "2439",
    "TM": "2440",
    "TN": "2441",
    "TO": "2442",
    "TR": "2443",
    "TT": "2523",
    "TV": "2524",
    "TW": "2525",
    "TZ": "2547",
    "UA": "2548",
    "UG": "2578",
    "UM": "2579",
    "US": "2580",
    "UY": "2641",
    "UZ": "2644",
    "VA": "2645",
    "VC": "2646",
    "VE": "2647",
    "VG": "2674",
    "VN": "2679",
    "VU": "2681",
    "WF": "2682",
    "WS": "2683",
    "YE": "2684",
    "YT": "2685",
    "ZA": "2686",
    "ZM": "2699",
    "ZW": "2700"
};
window.Demandbase.Config.stateMapping = {
    "AA": "2581",
    "AE": "2582",
    "AK": "2583",
    "AL": "2584",
    "AP": "2585",
    "AR": "2586",
    "AS": "2587",
    "AZ": "2588",
    "CA": "2589",
    "CO": "2590",
    "CT": "2591",
    "DC": "2592",
    "DE": "2593",
    "FL": "2594",
    "GA": "2595",
    "GU": "2596",
    "HI": "2597",
    "IA": "2598",
    "ID": "2599",
    "IL": "2600",
    "IN": "2601",
    "KS": "2602",
    "KY": "2603",
    "LA": "2604",
    "MA": "2605",
    "MD": "2606",
    "ME": "2607",
    "MI": "2608",
    "MN": "2609",
    "MO": "2610",
    "MP": "2611",
    "MS": "2612",
    "MT": "2613",
    "NC": "2614",
    "ND": "2615",
    "NE": "2616",
    "NH": "2617",
    "NJ": "2618",
    "NM": "2619",
    "NV": "2620",
    "NY": "2621",
    "OH": "2622",
    "OK": "2623",
    "OR": "2624",
    "PA": "2625",
    "PR": "2626",
    "PW": "2627",
    "RI": "2628",
    "SC": "2629",
    "SD": "2630",
    "TN": "2631",
    "TX": "2632",
    "UT": "2633",
    "VA": "2634",
    "VI": "2635",
    "VT": "2636",
    "WA": "2637",
    "WI": "2638",
    "WV": "2639",
    "WY": "2640",
    "AB": "675",
    "BC": "676",
    "MB": "677",
    "NB": "678",
    "NL": "679",
    "NS": "680",
    "NT": "681",
    "NU": "682",
    "ON": "683",
    "PE": "684",
    "QC": "685",
    "SK": "686",
    "YT": "687"
};
// TODO: Cleanup indentation and code rot
window.Demandbase.checkForElements = function(counter, poll_interval, MAX_RETRIES) {
    try {
        //      window.Demandbase.Config.forms.companyID = "db_company_check";
        // 		window.Demandbase.Config.forms.emailID = "db_email_check";
        if (counter === MAX_RETRIES) {
            // Stop trying -- not a form page
            // clearInterval(iid);
            //TODO: make isFormPage return false
            return false;
        } else if ((typeof window.Demandbase.CompanyAutocomplete === "undefined") || (document.querySelector("form input[name='id']") === null) || ((typeof window.Demandbase.IP.CompanyProfile === "undefined") ||
                //   (typeof window.Demandbase.Webforms === "undefined") ||
                ((window.faasIp !== null) && (typeof window.faasIp !== "function"))) && (window.Demandbase.Config.forms.companyID === "db_company_check")) {
            // (keep polling)
            counter++;
            setTimeout(window.Demandbase.checkForElements, poll_interval, counter, poll_interval, MAX_RETRIES);
        } else { // (elements found)
            // isFormPage returns true, loadFormModule gets called by Tag
            clearTimeout(counter);
            //adding so the client can call forms from their side - will switch to callback after rollout
            // TODO: Store me to a variable: document.querySelector("form input[name='id']").value
            window.Demandbase.FormsLoader.configuration.companyID = "Form" + document.querySelector("form input[name='id']").value + "_10";
            window.Demandbase.FormsLoader.configuration.emailID = "Form" + document.querySelector("form input[name='id']").value + "_1";
            if ((window.Demandbase.Config.isFormPage() === true) && (typeof window.Demandbase.utils !== "undefined")) {
                window.Demandbase.CompanyAutocomplete.initialized = false;
                window.Demandbase.Connectors.WebForm.connect(window.Demandbase.FormsLoader.configuration);
                //fix for z-index for modals
                var css = '#demandbase-company-autocomplete-widget > ul {z-index: 300 !important;}',
                    style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }
                document.getElementsByTagName('head')[0].appendChild(style);
                //end fix
                //TODO: Use new API
                window.Demandbase.utils.loadFormModule();
            }
        }
    } catch (e) {
        // TODO: FIXME - This is swalling errrors!!!
        window.Demandbase.utils.log(e)
        return false
    }
};
window.Demandbase.Config.demandbaseFormLoad = function() {
    window.Demandbase.formCheck = true;
    // TODO: Use aliased method   instead of loadScript.  In appropriate copying of constant into Config
    // Equivalent of: loadFormModule
    window.Demandbase.utils.loadScript("scripts.demandbase.com/forms.min.js");
    var counter = 0;
    var poll_interval = 50;
    var MAX_RETRIES = 75;
    window.Demandbase.checkForElements(counter, poll_interval, MAX_RETRIES);
};
// TODO: Use Advertising.conersionTriggers or campaigns with a "virtualPageview" instead of custom code
// https://github.com/Demandbase/tag/blob/develop/docs/advertising.md#conversiontriggers
window.Demandbase.Config.runSecondApiCall = function() {
    var webEngagementReportingKey = "cdd81de96c428bab16422a9b25714d73";
    // these are all the non-Adobe Stock pages that need to be tracked in the Web Engagement Score
    var whitelist = ["http://www.cmo.com/", "http://blogs.adobe.com/",
        // "https://www.behance.net/",
        "https://stock.adobe.com/", "http://www.adobe.com/products/photoshop.html", "http://www.adobe.com/products/illustrator.html", "http://www.adobe.com/products/indesign.html", "http://www.adobe.com/products/premiere.html", "http://www.adobe.com/products/experience-design.html", "https://landing.adobe.com/en/na/products/creative-cloud/283747-adobe-stock-for-enterprise.html", "http://www.adobe.com/creativecloud/business/enterprise.html", "http://www.adobe.com/creativecloud/business/enterprise/use-cases.html", "http://www.adobe.com/creativecloud/business/enterprise/deploy-and-manage.html", "http://www.adobe.com/creativecloud/business/teams/plans.html", "http://www.adobe.com/creativecloud/business/enterprise/deploy-and-manage.html", "http://www.adobe.com/creativecloud/stock/hovering.html?v=enterprise", "http://www.adobe.com/creativecloud.html",
    ];
    window.Demandbase.IpApiWebReporting = new window.Demandbase.IpApiModule();
    // here we only fire the second API call if the current page is in the whitelist
    if (whitelist.indexOf(document.URL) !== -1) {
        window.Demandbase.IpApiWebReporting.get(webEngagementReportingKey, false);
    }
};

window.Demandbase.Config.runThirdApiCall = function() {
    var domains = ["stock.adobe.com/uk/", "stock.adobe.com/de/", "stock.adobe.com/fr/", "landing.adobe.com/en/uk/products/creative-cloud/283747-adobe-stock-for-enterprise.html", "landing.adobe.com/fr/fr/products/creative-cloud/283747-adobe-stock-for-enterprise.html", "landing.adobe.com/de/de/products/creative-cloud/283747-adobe-stock-for-enterprise.html"];
    var webEngagementReportingKey = "5cdd46213f160f38373817975224099c";
    window.Demandbase.IpApiWebReporting = new window.Demandbase.IpApiModule();
    var domainEnabled = window.Demandbase.Config.isDomainEnabled(domains);
    if (domainEnabled) {
        window.Demandbase.IpApiWebReporting.get(webEngagementReportingKey, false);
    }
};

window.Demandbase.Config.isDomainEnabled = function(domains) {
    for (var i = 0; i < domains.length; i++) {
        if (window.document.URL.includes(domains[i])) {
            return true;
        }
    }
    return false;
};
window.Demandbase.Config.onLoad = function() {
    window.Demandbase.Config.runSecondApiCall();
    window.Demandbase.Config.runThirdApiCall();
};
/* !*/
Demandbase.ErrorReporter = new Demandbase.ErrorReporterModule();

Demandbase.ErrorReporter.initialize();

Demandbase.ErrorReporter.wrap(Demandbase.initialize.bind(Demandbase))();