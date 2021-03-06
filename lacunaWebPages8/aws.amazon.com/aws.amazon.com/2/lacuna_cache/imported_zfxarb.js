! function($) {
  var librastandardlib_obj_utils_assign, librastandardlib_test_helpers_browser_globals_window, librastandardlib_id_utils_generateUUID, librastandardlib_url_utils_buildQueryString, librastandardlib_url_utils_getQueryStringParam, librastandardlib_aws_page_settings, librastandardlib_logger_logger, librastandardlib_aws_aws_namespace, target_util, target_feature_detects, librastandardlib_test_helpers_browser_globals_document, target_cookie_manager, target_current_user, target_data_cookie_facade, target_validator, target_parameter_fetcher, librastandardlib_obj_utils_mixin, librastandardlib_event_utils_polling_registrar, target_request_state, target_mbox_controller, target_mbox_base, target_target_request_data_builder, target_requester, target_target_requester, target_aws_requester, target_language_helper, target_url_utils, target_offer, target_mbox, target_page_mbox, target_target_mediator;
  ! function() {
    librastandardlib_obj_utils_assign = function assign(target, args) {
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
    };
    librastandardlib_test_helpers_browser_globals_window = function() {
      return window
    }();
    librastandardlib_id_utils_generateUUID = function generateUUID() {
      var d = (new Date).getTime();
      var id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : r & 3 | 8).toString(16)
      });
      return id
    };
    librastandardlib_url_utils_buildQueryString = function buildQueryString(params) {
      var parts = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          parts[parts.length] = encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
        }
      }
      return parts.join("&")
    };
    librastandardlib_url_utils_getQueryStringParam = function getQueryStringParam(name, querySrting) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var re = new RegExp("[\\?&]" + name + "=([^&#]*)");
      var res = re.exec(querySrting);
      if (res === null) {
        return ""
      }
      return decodeURIComponent(res[1].replace(/\+/g, " "))
    };
    librastandardlib_aws_page_settings = function(_assign) {
      var defaults = {
        staticAssetPath: "https://a0.awsstatic.com",
        jsAssetPath: "https://a0.awsstatic.com/libra/1",
        isLoggingEnabled: true
      };
      var PageSettings = {};
      if (typeof AWS === "object" && typeof AWS.PageSettings === "object") {
        _assign(PageSettings, AWS.PageSettings)
      }
      var tagSettings = document.getElementsByTagName("html").dataset;
      if (tagSettings) {
        PageSettings.staticAssetPath = tagSettings.staticAssets;
        PageSettings.jsAssetPath = PageSettings.staticAssetPath + "/libra/" + tagSettings.jsVersion
      }
      PageSettings = _assign({}, defaults, PageSettings);
      if (typeof AWS === "object" && typeof AWS.PageSettings === "object") {
        AWS.PageSettings = PageSettings
      }
      return PageSettings
    }(librastandardlib_obj_utils_assign);
    librastandardlib_logger_logger = function(window, _assign, generateUUID, buildQueryString, getQueryStringParam, PageSettings) {
      var Logger = function() {
        var LOG_LEVELS = {
          info: {
            warn: true,
            error: true
          },
          warn: {
            error: true
          },
          error: {},
          debug: {
            info: true,
            warn: true,
            error: true
          }
        };
        var RAW_ENDPOINT = "https://fls-na.amazon.com/1/aws-mktg/1/OE/";
        var AI_ENDPOINT = "https://fls-na.amazon.com/1/action-impressions/1/OE/aws-mktg/action/";
        var COMMON_AI_PARAMS = {
          marketplaceId: "A12QK8IU0H0XW5",
          requestId: "ABCDEFGHIJKLMNOPQRST",
          session: "123-1234567-1234567"
        };
        var DEFAULT_AI_UNITS = "ms";
        var DEFAULT_AI_VALUE_SET = "count";
        var AI_VALUE_SETS = {
          count: {
            value: "1",
            units: "c"
          },
          timeSinceResponseEnd: {
            valueFunction: "getElapsedTimeSincePageLoad",
            units: "ms"
          }
        };
        var HOSTNAMES_TO_SERVICES = [{
          hostname: "console.aws.amazon.com",
          service: "console"
        }, {
          hostname: "aws.amazon.com",
          service: "awsm"
        }, {
          hostname: "amazonaws-china.com",
          service: "awsm"
        }, {
          hostname: "www.amazonaws.cn",
          service: "cn"
        }];
        var LogType = {
          RAW: "RAW",
          AI: "AI",
          LOCAL: "LOCAL"
        };
        var PlatformType = {
          CMS: "CMS",
          DEFAULT: "DEFAULT"
        };
        var SERVICES_TO_PLATFORM_TYPES = {
          awsm: PlatformType.CMS,
          cn: PlatformType.CMS,
          console: PlatformType.DEFAULT,
          marketplace: PlatformType.CMS
        };
        var MARKETPLACE_SERVICE = "marketplace";
        var CONSOLE_SERVICE_NAME_PREFIX = "console-";
        var SERVICE_NAME_REGEX = /console\.(aws\.amazon\.com|amazonaws\.cn)\/([a-z0-9]+)\//;
        var ALLOWED_HOSTNAME_SUFFIXES = ["console.aws.amazon.com", "console.amazonaws.cn"];
        var ALLOWED_EXACT_MATCH_HOSTNAMES = {
          "aws.amazon.com": 1,
          "amazonaws-china.com": 1,
          "www.amazonaws.cn": 1
        };
        var pageRequestId = null;
        var instances = {};

        function Logger(namespace, logLevel) {
          if (instances.hasOwnProperty(namespace)) {
            instances[namespace].logLevel = logLevel || instances[namespace].logLevel;
            return instances[namespace]
          }
          this.namespace = namespace;
          this.logLevel = logLevel || this.getLogLevelByQueryString();
          this.pageRequestId = this.getPageRequestId();
          this.dataSet = this.getDataSet();
          this.service = this.getService();
          this.instance = this.getInstance(this.service);
          this.longLanguage = this.getLongLanguage();
          this.client = this.getClient();
          this.host = this.getHost();
          instances[namespace] = this
        }
        Logger.prototype = {
          getService: function() {
            if (typeof window.location.hostname !== "undefined" && typeof window.location.pathname !== "undefined") {
              if (PageSettings.isMarketplace) {
                return MARKETPLACE_SERVICE
              }
              var consoleServiceNameMatch = (window.location.hostname + window.location.pathname).match(SERVICE_NAME_REGEX);
              if (consoleServiceNameMatch && consoleServiceNameMatch.length === 3) {
                return CONSOLE_SERVICE_NAME_PREFIX + consoleServiceNameMatch[2]
              }
            }
            for (var i = 0, len = HOSTNAMES_TO_SERVICES.length; i < len; i++) {
              var hostname = HOSTNAMES_TO_SERVICES[i].hostname;
              var re = new RegExp(hostname + "\\/");
              if (re.test(window.location.hostname + "/") || re.test(window.location.pathname) || re.test(window.location.hash)) {
                return HOSTNAMES_TO_SERVICES[i].service
              }
            }
            return "NA"
          },
          getHost: function() {
            if (typeof window.location.hostname !== "undefined") {
              var hostname = window.location.hostname;
              if (ALLOWED_EXACT_MATCH_HOSTNAMES.hasOwnProperty(hostname)) {
                return hostname
              }
              for (var i = 0; i < ALLOWED_HOSTNAME_SUFFIXES.length; i++) {
                var currentHost = ALLOWED_HOSTNAME_SUFFIXES[i];
                var indexOf = hostname.indexOf(currentHost);
                var endsWithCurrentHost = indexOf >= 0 && indexOf === hostname.length - currentHost.length;
                if (endsWithCurrentHost) {
                  return currentHost
                }
              }
            }
            return "NA"
          },
          getLongLanguage: function() {
            var langAttr = $("html").attr("lang");
            if (typeof langAttr !== "undefined") {
              return langAttr.replace("-", "_")
            }
            return "NA"
          },
          getInstance: function(service) {
            var platformType = PlatformType.DEFAULT;
            if (SERVICES_TO_PLATFORM_TYPES.hasOwnProperty(service)) {
              platformType = SERVICES_TO_PLATFORM_TYPES[service]
            }
            if (platformType === PlatformType.CMS) {
              if (window.location.pathname.indexOf(".html") === window.location.pathname.length - 5) {
                if ("logInstance" in PageSettings) {
                  return PageSettings.logInstance
                }
                return "NA"
              }
              return "LIVE"
            }
            return "LIVE"
          },
          getDataSet: function() {
            if ("logDataSet" in PageSettings) {
              return PageSettings.logDataSet
            }
            return "NA"
          },
          getClient: function() {
            var re = new RegExp(/iPhone|iPod|iPad|Android|(?=.*\bAndroid\b)(?=.*\bMobile\b)|IEMobile|(?=.*\bWindows\b)(?=.*\bTouch\b)|Windows Phone|Opera Mini|(?=.*\bFirefox\b)(?=.*\bMobile\b)|BlackBerry|Nexus 7|BNTV250|Kindle Fire|Silk|webOS|GT-P1000/i);
            if (re.test(window.navigator.userAgent)) {
              return "mobile"
            }
            return "dsk"
          },
          logAI: function(metric, params) {
            params = params || {};
            var valueSet;
            if (params.hasOwnProperty("valueSet")) {
              if (AI_VALUE_SETS.hasOwnProperty(params.valueSet)) {
                valueSet = AI_VALUE_SETS[params.valueSet];
                params.units = valueSet.units;
                if (valueSet.hasOwnProperty("valueFunction")) {
                  params.value = this[valueSet.valueFunction]()
                } else {
                  params.value = valueSet.value
                }
              } else {
                valueSet = AI_VALUE_SETS[DEFAULT_AI_VALUE_SET];
                params.value = valueSet.value;
                params.units = valueSet.units
              }
            } else if (!params.hasOwnProperty("value")) {
              valueSet = AI_VALUE_SETS[DEFAULT_AI_VALUE_SET];
              params.value = valueSet.value;
              params.units = valueSet.units
            }
            if (!params.hasOwnProperty("units")) {
              params.units = DEFAULT_AI_UNITS
            }
            var url = AI_ENDPOINT + metric + "@v=" + encodeURIComponent(params.value) + ":u=" + encodeURIComponent(params.units);
            var standardParams = {
              dataset: this.dataSet,
              instance: this.instance,
              service: this.service,
              marketplace: this.longLanguage,
              client: this.client,
              host: this.host
            };
            var queryStringParams = _assign(standardParams, COMMON_AI_PARAMS);
            url += "?" + buildQueryString(queryStringParams);
            this.logUrl(url)
          },
          logRaw: function(logLevel, msg, currentTime, pageTime, customParams) {
            var standardParams = {
              cat: this.namespace,
              level: logLevel,
              msg: msg,
              currentTime: currentTime,
              pageTime: pageTime,
              pageRequestId: pageRequestId,
              page: window.location.toString()
            };
            var params = _assign({}, customParams, standardParams);
            var url = RAW_ENDPOINT + "?" + buildQueryString(params);
            this.logUrl(url)
          },
          logUrl: function(url) {
            if (PageSettings.isLoggingEnabled) {
              setTimeout(function() {
                (new Image).src = url
              }, 0);
              this._lastImageUrl = url
            }
          },
          getLogLevelByQueryString: function() {
            var level = getQueryStringParam("debug" + this.namespace, window.location.search);
            if (level === "") {
              return null
            }
            return level
          },
          getElapsedTimeSincePageLoad: function() {
            if ("performance" in window && "timing" in window.performance) {
              return (new Date).getTime() - window.performance.timing.responseEnd
            }
            return -1
          },
          getPageRequestId: function() {
            pageRequestId = pageRequestId || generateUUID();
            return pageRequestId
          },
          _rawEndpoint: RAW_ENDPOINT,
          _aiEndpoint: AI_ENDPOINT
        };
        for (var level in LOG_LEVELS) {
          if (LOG_LEVELS.hasOwnProperty(level)) {
            ! function(level) {
              Logger.prototype[level] = function(msg, logType, params) {
                logType = logType || "LOCAL";
                var currentTime = (new Date).getTime();
                var pageTime = this.getElapsedTimeSincePageLoad();
                var logLevelStr = level.toUpperCase();
                if (logType === LogType.AI) {
                  this.logAI(msg, params)
                } else if (logType === LogType.RAW) {
                  this.logRaw(logLevelStr, msg, currentTime, pageTime, params)
                }
                if (this.logLevel !== null) {
                  if (level === this.logLevel || LOG_LEVELS[this.logLevel].hasOwnProperty(level)) {
                    if (LogType.hasOwnProperty(logType)) {
                      var out = "[" + logLevelStr + "][" + LogType[logType] + "] " + this.namespace + ": " + msg + "; @" + pageTime + "ms";
                      if (typeof params !== "undefined") {
                        out += "; " + JSON.stringify(params)
                      }
                      console.log(out);
                      this._lastConsoleLog = out
                    } else {
                      var args = Array.prototype.slice.call(arguments);
                      var logObjPrefix = "[" + logLevelStr + "][" + LogType.LOCAL + "] " + this.namespace + ": " + args[0];
                      console.log(logObjPrefix, [].concat(args.slice(1)))
                    }
                  }
                }
              }
            }(level)
          }
        }
        return Logger
      }();
      return Logger
    }(librastandardlib_test_helpers_browser_globals_window, librastandardlib_obj_utils_assign, librastandardlib_id_utils_generateUUID, librastandardlib_url_utils_buildQueryString, librastandardlib_url_utils_getQueryStringParam, librastandardlib_aws_page_settings);
    librastandardlib_aws_aws_namespace = function() {
      if (typeof AWS !== "object") {
        AWS = {}
      }
      return AWS
    }();
    target_util = function() {
      var Util = {
        generateRandomId: function() {
          return (new Date).getTime() + "-" + Math.floor(Math.random() * 999999)
        }
      };
      return Util
    }();
    target_feature_detects = function() {
      var FeatureDetects = {
        hasCORSSupport: function() {
          return "withCredentials" in new XMLHttpRequest
        }
      };
      return FeatureDetects
    }();
    librastandardlib_test_helpers_browser_globals_document = function() {
      return document
    }();
    target_cookie_manager = function(document) {
      var defaults = {
        domain: ".amazon.com",
        path: "/",
        expireSeconds: 86400
      };

      function CookieManager(name, options) {
        var opts = JSON.parse(JSON.stringify(defaults));
        for (var key in options) {
          if (options.hasOwnProperty(key)) {
            opts[key] = options[key]
          }
        }
        this.options = opts;
        this.name = name;
        this.exists = false;
        this.rawValue = null;
        this.value = null;
        if (window.location.hostname === "localhost") {
          this.options.domain = ""
        }
        if (document.cookie.length && document.cookie.indexOf(this.name) !== -1) {
          this.exists = true
        }
      }
      CookieManager.prototype = {
        write: function() {
          var expiresDate;
          if (typeof this.options.expireSeconds === "number") {
            expiresDate = new Date;
            expiresDate.setSeconds(expiresDate.getSeconds() + this.options.expireSeconds)
          }
          var ret = document.cookie = [this.name, "=", this.rawValue, expiresDate ? "; expires=" + expiresDate.toUTCString() : "", this.options.path ? "; path=" + this.options.path : "", this.options.domain ? "; domain=" + this.options.domain : ""].join("");
          if (ret) {
            this.exists = true
          }
          return ret
        },
        read: function() {
          var found = false;
          if (document.cookie.length) {
            var cookieStart = document.cookie.indexOf(this.name);
            if (cookieStart !== -1) {
              found = true;
              var valueStart = cookieStart + this.name.length + 1;
              var cookieEnd = document.cookie.indexOf(";", valueStart);
              if (cookieEnd === -1) {
                cookieEnd = document.cookie.length
              }
              this.rawValue = document.cookie.substring(valueStart, cookieEnd)
            }
          }
          if (!found) {
            this.exists = false
          }
          return found
        },
        remove: function() {},
        encode: function() {
          this.rawValue = encodeURIComponent(this.value)
        },
        decode: function() {},
        stringify: function() {
          try {
            this.rawValue = JSON.stringify(this.value);
            this.rawValue = encodeURIComponent(this.rawValue)
          } catch (ex) {
            throw new Error("CookieManagerStringifyError: Failed to stringify cookie '" + this.name + "'")
          }
        },
        parse: function() {}
      };
      return CookieManager
    }(librastandardlib_test_helpers_browser_globals_document);
    target_current_user = function(document, AWS, CookieManager) {
      function getRegistrationStatus() {
        if (typeof AWS.CurrentUser !== "undefined" && typeof AWS.CurrentUser.registrationStatus !== "undefined") {
          return AWS.CurrentUser.registrationStatus
        } else {
          var cookie = new CookieManager("regStatus");
          if (cookie.exists) {
            cookie.read();
            return cookie.rawValue
          } else {
            return "pre-register"
          }
        }
      }

      function getIsIAMUser() {
        if (typeof AWS.CurrentUser !== "undefined" && typeof AWS.CurrentUser.isIAMUser !== "undefined") {
          return AWS.CurrentUser.isIAMUser
        } else {
          return new CookieManager("aws-account-alias").exists
        }
      }
      return {
        registrationStatus: getRegistrationStatus(),
        isIAMUser: getIsIAMUser()
      }
    }(librastandardlib_test_helpers_browser_globals_document, librastandardlib_aws_aws_namespace, target_cookie_manager);
    target_data_cookie_facade = function(Logger, CookieManager) {
      function DataCookieFacade() {
        this.logger = new Logger("TargetMediator");
        this.expireSeconds = 33696e3;
        this.cookie = new CookieManager("aws-target-data", {
          expireSeconds: this.expireSeconds
        });
        this.values = {};
        this.allowedKeys = {
          support: null,
          campaignId: null,
          environmentId: null,
          mboxPage: null,
          mbox: null
        };
        this.read()
      }
      DataCookieFacade.prototype = {
        read: function() {
          try {
            this.cookie.read();
            if (this.cookie.rawValue !== null) {
              this.cookie.parse();
              this.setValues(this.cookie.value)
            }
          } catch (ex) {
            this.cookie.remove();
            this.logger.error("awsm_:tm_CorruptDataCookieError", "AI", {
              msg: ex.message
            })
          }
        },
        write: function(pairs) {
          this.setValues(pairs);
          this.cookie.value = this.values;
          this.cookie.stringify();
          this.cookie.write()
        },
        setValues: function(pairs) {
          for (var key in pairs) {
            if (pairs.hasOwnProperty(key)) {
              if (key in this.allowedKeys) {
                if (typeof pairs[key] === "undefined" || pairs[key] === null) {
                  delete this.values[key]
                } else {
                  this.values[key] = pairs[key]
                }
              }
            }
          }
        },
        hasCompleteParamsSet: function() {
          var requiredKeys = ["campaignId", "environmentId", "mboxPage", "mbox"];
          for (var i = 0, len = requiredKeys.length; i < len; i++) {
            if (!this.values[requiredKeys[i]]) {
              return false
            }
          }
          return true
        }
      };
      return DataCookieFacade
    }(librastandardlib_logger_logger, target_cookie_manager);
    target_validator = function() {
      var Validator = {
        isValidVisitorId: function(str) {
          var validVisitorIdRegexp = /^[0-9\-]{6,40}(\.[0-9]{1,3}_[0-9]{1,3})?$/;
          return validVisitorIdRegexp.test(str)
        },
        isValidSessionId: function(str) {}
      };
      return Validator
    }();
    target_parameter_fetcher = function(window, document, _assign, Logger, CookieManager, Util, Validator) {
      function ParameterFetcher(dataCookie, customParams) {
        this.logger = new Logger("TargetMediator");
        this.dataCookie = dataCookie;
        this.customParams = customParams;
        this.mboxPCId = null;
        this.mboxSessionId = null;
        this.mboxPageId = null;
        this.mboxXDomain = null;
        this.mboxNoRedirect = null;
        this.mboxHost = null;
        this.screenWidth = null;
        this.screenHeight = null;
        this.screenColorDepth = null;
        this.browserWidth = null;
        this.browserHeight = null;
        this.browserTimeOffset = null;
        this.currentUrl = null;
        this.referringUrl = null;
        this.sessionCookie = new CookieManager("aws-target-session-id", {
          expireSeconds: 1800
        });
        this.visitorCookie = new CookieManager("aws-target-visitor-id", {
          expireSeconds: 33696e3
        })
      }
      ParameterFetcher.prototype = {
        fetch: function() {
          this.mboxXDomain = this.getMboxXDomain();
          this.mboxNoRedirect = this.getMboxNoRedirect();
          this.mboxHost = this.getHostname();
          this.screenWidth = this.getScreenWidth();
          this.screenHeight = this.getScreenHeight();
          this.screenColorDepth = this.getScreenColorDepth();
          this.browserWidth = this.getBrowserWidth();
          this.browserHeight = this.getBrowserHeight();
          this.browserTimeOffset = this.getBrowserTimeOffset();
          this.currentUrl = this.getCurrentUrl();
          this.referringUrl = this.getReferringUrl();
          this.dataCookie.read();
          this.pageMboxName = this.getPageMboxName();
          this.mboxPageId = this.getMboxPageId();
          this.campaignId = this.getCampaignId();
          this.environmentId = this.getEnvironmentId();
          this.sessionCookie.read();
          this.getSessionId();
          this.visitorCookie.read();
          this.getVisitorId()
        },
        getClientParamsSet: function() {
          var ret = {
            mboxPC: this.mboxPCId,
            mboxSession: this.mboxSessionId,
            mboxPage: this.mboxPageId,
            mboxXDomain: this.mboxXDomain,
            mboxNoRedirect: this.mboxNoRedirect,
            mboxHost: this.mboxHost,
            screenWidth: this.screenWidth,
            screenHeight: this.screenHeight,
            colorDepth: this.screenColorDepth,
            browserWidth: this.browserWidth,
            browserHeight: this.browserHeight,
            browserTimeOffset: this.browserTimeOffset,
            mboxUrl: this.currentUrl,
            mboxReferrer: this.referringUrl
          };
          return _assign({}, this.customParams, ret)
        },
        getServerParamsSet: function() {
          var ret = {
            mboxPC: this.mboxPCId,
            mboxSession: this.mboxSessionId,
            mboxPage: this.mboxPageId,
            mboxXDomain: this.mboxXDomain,
            mboxNoRedirect: this.mboxNoRedirect,
            mboxHost: this.mboxHost,
            browserTimeOffset: this.browserTimeOffset,
            mboxUrl: this.currentUrl,
            mboxReferrer: this.referringUrl
          };
          return _assign({}, this.customParams, ret)
        },
        getPageMboxParamsSet: function() {},
        generateMboxPCId: function() {
          return Util.generateRandomId()
        },
        generateMboxSessionId: function() {
          return Util.generateRandomId()
        },
        getMboxPageId: function() {
          var val = this.dataCookie.values.mboxPage;
          if (typeof val === "undefined" || val === null || val === "") {
            return Util.generateRandomId()
          } else {
            return val
          }
        },
        getMboxXDomain: function() {
          return "disabled"
        },
        getMboxNoRedirect: function() {
          return 1
        },
        getScreenWidth: function() {
          return window.screen.width
        },
        getScreenHeight: function() {
          return window.screen.height
        },
        getScreenColorDepth: function() {
          return window.screen.pixelDepth
        },
        getBrowserWidth: function() {
          return window.innerWidth ? window.innerWidth : document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth
        },
        getBrowserHeight: function() {
          return window.innerHeight ? window.innerHeight : document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight
        },
        getBrowserTimeOffset: function() {
          return -(new Date).getTimezoneOffset()
        },
        getCurrentUrl: function() {
          return window.location.toString()
        },
        getReferringUrl: function() {
          var referringUrl = document.referrer;
          if (referringUrl.length < 2e3) {
            return referringUrl
          } else {
            return ""
          }
        },
        getHostname: function() {
          return window.location.hostname
        },
        getSessionId: function() {
          var regenerateId = false;
          if (this.sessionCookie.exists) {
            try {
              this.sessionCookie.decode()
            } catch (ex) {
              regenerateId = true;
              this.logger.error("awsm_:tm_UndecodableExistingSessionIdError", "AI", {
                sessionId: this.sessionCookie.rawValue
              })
            }
            if (!regenerateId) {
              if (Validator.isValidSessionId(this.sessionCookie.value)) {
                this.mboxSessionId = this.sessionCookie.value
              } else {
                regenerateId = true;
                this.logger.error("awsm_:tm_InvalidExistingSessionIdError", "AI", {
                  sessionId: this.sessionCookie.value
                })
              }
            }
          } else {
            regenerateId = true;
            this.logger.debug("Cookie '" + this.sessionCookie.name + "' does not exist yet so create it")
          }
          if (regenerateId) {
            this.mboxSessionId = this.generateMboxSessionId();
            this.sessionCookie.value = this.mboxSessionId;
            this.sessionCookie.encode()
          }
          this.sessionCookie.write()
        },
        getVisitorId: function() {
          var regenerateId = false;
          if (this.visitorCookie.exists) {
            try {
              this.visitorCookie.decode()
            } catch (ex) {
              regenerateId = true;
              this.logger.error("awsm_:tm_UndecodableExistingVisitorIdError", "AI", {
                visitorId: this.visitorCookie.rawValue
              })
            }
            if (!regenerateId) {
              if (Validator.isValidVisitorId(this.visitorCookie.value)) {
                this.mboxPCId = this.visitorCookie.value
              } else {
                regenerateId = true;
                this.logger.error("awsm_:tm_InvalidExistingVisitorIdError", "AI", {
                  visitorId: this.visitorCookie.value
                })
              }
            }
          } else {
            regenerateId = true;
            this.logger.debug("Cookie '" + this.visitorCookie.name + "' does not exist yet so create it")
          }
          if (regenerateId) {
            this.mboxPCId = this.generateMboxPCId();
            this.visitorCookie.value = this.mboxPCId;
            this.visitorCookie.encode()
          }
          this.visitorCookie.write()
        },
        getPageMboxName: function() {
          return this.dataCookie.values.mbox
        },
        getCampaignId: function() {
          return this.dataCookie.values.campaignId
        },
        getEnvironmentId: function() {
          return this.dataCookie.values.environmentId
        }
      };
      return ParameterFetcher
    }(librastandardlib_test_helpers_browser_globals_window, librastandardlib_test_helpers_browser_globals_document, librastandardlib_obj_utils_assign, librastandardlib_logger_logger, target_cookie_manager, target_util, target_validator);
    librastandardlib_obj_utils_mixin = function mixin(target, source) {
      if (typeof target !== "object" || typeof source !== "object") {
        return target
      }
      Object.keys(source).forEach(function(key) {
        if (!target.hasOwnProperty(key)) {
          target[key] = source[key]
        }
      });
      return target
    };
    librastandardlib_event_utils_polling_registrar = function() {
      var pollGroups = {};
      var evtCount = 0;

      function loop(pollGroup) {
        var key;
        for (key in pollGroup.events) {
          if (pollGroup.events.hasOwnProperty(key)) {
            pollGroup.events[key].isActive = true
          }
        }
        for (key in pollGroup.events) {
          if (pollGroup.events.hasOwnProperty(key)) {
            var evt = pollGroup.events[key];
            if (evt.isActive) {
              if (evt.condition()) {
                evt.resolve()
              } else if ((new Date).getTime() - evt.startTime > evt.timeout) {
                evt.reject()
              }
            }
          }
        }
        var hasEvents = false;
        for (key in pollGroup.events) {
          if (pollGroup.events.hasOwnProperty(key)) {
            hasEvents = true;
            break
          }
        }
        if (hasEvents) {
          setTimeout(function() {
            loop(pollGroup)
          }, pollGroup.interval)
        } else {
          pollGroup.isPolling = false
        }
      }
      return {
        register: function(condition, done, fail, timeout, interval) {
          var evt = {
            key: (++evtCount).toString(),
            isActive: false,
            startTime: (new Date).getTime(),
            condition: condition,
            done: done,
            fail: fail,
            timeout: timeout,
            interval: interval,
            resolve: function() {
              var fct = this.done;
              this.destroy();
              fct()
            },
            reject: function() {},
            destroy: function() {
              delete pollGroups[this.interval].events[this.key]
            }
          };
          var pollGroup;
          if (!pollGroups.hasOwnProperty(interval)) {
            pollGroup = {};
            pollGroup.events = {};
            pollGroup.interval = interval;
            pollGroup.isPolling = false;
            pollGroups[interval] = pollGroup
          } else {
            pollGroup = pollGroups[interval]
          }
          pollGroup.events[evt.key] = evt;
          if (!pollGroup.isPolling) {
            pollGroup.isPolling = true;
            loop(pollGroup)
          }
        },
        _pollGroups: pollGroups
      }
    }();
    target_request_state = function() {
      var RequestState = {
        PENDING: "pending",
        RESOLVED: "resolved",
        REJECTED: "rejected",
        TIMEOUT: "timeout"
      };
      return RequestState
    }();
    target_mbox_controller = function(document, Logger, PollingRegistrar, RequestState) {
      var logger = new Logger("TargetMediator");
      var MboxController = {
        mboxRegistry: {},
        mboxClickRegistry: {},
        pageTimeout: 3e4,
        allMboxesResolved: function() {},
        allClicksResolved: function() {},
        hasEncounteredPageEnd: function(bool) {},
        checkJqueryReadyHold: function() {},
        hideAllMboxes: function() {
          $('<style class="js-mbox-style">.js-mbox{visibility:hidden;}</style>').appendTo(document.head)
        },
        showAllMboxes: function() {},
        findMboxes: function(Mbox, TargetMediator) {},
        pollToFindMboxes: function(Mbox, TargetMediator) {
          var that = this;
          PollingRegistrar.register(function() {
            var elems = $(".js-mbox:not([data-mbox-registered])");
            for (var i = 0, len = elems.length; i < len; i++) {
              var $elem = $(elems[i]);
              $elem.attr("data-mbox-registered", "true");
              new Mbox($elem, TargetMediator).fetch()
            }
            if (document.getElementById("aws-page-end")) {
              return true
            }
            return false
          }, function() {}, function() {}, this.pageTimeout, 100)
        },
        _seenPageEnd: false
      };
      return MboxController
    }(librastandardlib_test_helpers_browser_globals_document, librastandardlib_logger_logger, librastandardlib_event_utils_polling_registrar, target_request_state);
    target_mbox_base = function(window, Logger, Util, MboxController, RequestState) {
      var logger = new Logger("TargetMediator");
      var MboxBase = {
        additionalParameters: {},
        getMboxTime: function() {
          var now = new Date;
          return now.getTime() - now.getTimezoneOffset() * 6e4
        },
        getMboxTarget: function() {},
        getMboxParamsSet: function(isClickRequest) {
          var ret = {
            mbox: this.name,
            mboxTime: this.time
          };
          for (var attr in this.additionalParameters) {
            if (this.additionalParameters.hasOwnProperty(attr)) {
              ret[attr] = this.additionalParameters[attr]
            }
          }
          if (isClickRequest) {
            ret.mboxTarget = this.getMboxTarget();
            ret.mbox += "-clicked";
            ret.mboxTime = this.getMboxTime()
          }
          return ret
        },
        handleClickResponse: function() {},
        isReportableClickUrl: function(url, $a) {},
        isNewWindowClick: function(e, $a) {},
        isRightClick: function(e) {}
      };
      return MboxBase
    }(librastandardlib_test_helpers_browser_globals_window, librastandardlib_logger_logger, target_util, target_mbox_controller, target_request_state);
    target_target_request_data_builder = function(buildQueryString, Util) {
      var ENDPOINT = "https://amazonwebservicesinc.tt.omtrdc.net/m2/amazonwebservicesinc/ubox/raw";

      function TargetRequestDataBuilder(paramsArray, isClickRequest) {
        this.paramsArray = paramsArray;
        this.isClickRequest = isClickRequest;
        this.postParams = null;
        this.url = ENDPOINT;
        this.build()
      }
      TargetRequestDataBuilder.prototype = {
        build: function() {
          this.postParams = {};
          for (var i = 0; i < this.paramsArray.length; i++) {
            var params = this.paramsArray[i];
            for (var key in params) {
              if (params.hasOwnProperty(key)) {
                this.postParams[key] = params[key]
              }
            }
          }
          this.url = this.url + "?" + buildQueryString({
            mboxPC: this.postParams.mboxPC,
            mboxSession: this.postParams.mboxSession,
            uniq: Util.generateRandomId()
          })
        },
        _endpoint: ENDPOINT
      };
      return TargetRequestDataBuilder
    }(librastandardlib_url_utils_buildQueryString, target_util);
    target_requester = function(_assign, PollingRegistrar, RequestState) {
      var POLLING_INTERVAL = 100;
      var ajaxCorsParams = {
        crossDomain: true,
        xhrFields: {
          withCredentials: false
        }
      };
      var Requester = {
        get: function(done, fail) {
          this.makeAjaxCall(done, fail, {
            type: "GET",
            url: this.url
          })
        },
        post: function(done, fail, data) {
          this.makeAjaxCall(done, fail, {
            type: "POST",
            url: this.url,
            data: data
          })
        },
        makeAjaxCall: function(done, fail, params) {
          var that = this;
          _assign(params, ajaxCorsParams);
          this.requestStartTime = (new Date).getTime();
          var promise = $.ajax(params).done(function(data, textStatus, jqXHR) {
            done.call(that, data, textStatus, jqXHR)
          }).fail(function(data, textStatus, jqXHR) {
            fail.call(that, data, textStatus, jqXHR)
          });
          this.register(promise)
        },
        register: function(promise) {
          var that = this;
          PollingRegistrar.register(function() {
            return promise.state() !== RequestState.PENDING
          }, function() {}, function() {}, this.requestTimeout, POLLING_INTERVAL)
        },
        getRequestStartTime: function() {
          return this.requestStartTime
        },
        setRequestTimeout: function(timeout) {
          this.requestTimeout = Math.min(timeout, this.maxRequestTimeout);
          return this
        },
        getRequestTimeout: function() {},
        setAllTimeouts: function(timeout) {
          this.maxRequestTimeout = timeout;
          this.requestTimeout = timeout
        },
        getMaxRequestTimeout: function() {},
        setUrl: function(url) {
          this.url = url;
          return this
        },
        getPollingInterval: function() {
          return POLLING_INTERVAL
        }
      };
      return Requester
    }(librastandardlib_obj_utils_assign, librastandardlib_event_utils_polling_registrar, target_request_state);
    target_target_requester = function(mixin, Logger, Requester, RequestState) {
      var MAXIMUM_TIMEOUT = 6e3;
      var offerRegistry = {};

      function TargetRequester(callback, targetRequestDataBuilder, isClickRequest) {
        this.logger = new Logger("TargetMediator");
        this.callback = callback;
        this.url = targetRequestDataBuilder.url;
        this.postData = targetRequestDataBuilder.postParams;
        this.isClickRequest = isClickRequest;
        this.response = null;
        this.state = RequestState.PENDING;
        this.setAllTimeouts(MAXIMUM_TIMEOUT)
      }
      TargetRequester.prototype = {
        fetch: function() {
          this.logger.debug("awsm_:tm_TargetRequesterXHRStart", "AI", {
            locationName: this.postData.mbox,
            isClickRequest: this.isClickRequest
          });
          this.post(this.done, this.fail, this.postData)
        },
        done: function(data) {
          var roundTripTime = (new Date).getTime() - this.requestStartTime;
          this.logger.info("TargetRequester success for '" + this.postData.mbox + "' returned: " + data);
          this.logger.info("awsm_:tm_TargetRequesterXHRSuccess", "AI", {
            value: roundTripTime,
            locationName: this.postData.mbox,
            isClickRequest: this.isClickRequest
          });
          this.logger.info("TargetRequesterXHRSuccess", "RAW", {
            value: roundTripTime,
            locationName: this.postData.mbox
          });
          this.processResponseData(data);
          this.callback(this.response, this.state)
        },
        fail: function(data, textStatus) {},
        processResponseData: function(data) {
          if (this.isClickRequest) {
            this.state = RequestState.RESOLVED
          } else if (this.isUnassociatedOffer(data)) {
            this.logger.error("UnassociatedOfferError", "LOCAL", {
              locationName: this.postData.mbox,
              isClickRequest: this.isClickRequest
            });
            this.state = RequestState.REJECTED
          } else if (this.isValidRegularOffer(data) || this.isValidTransitionRegularOffer(data)) {
            this.response = this.parseResponseData(data);
            if (this.response) {
              if (this.isDuplicateOffer(this.response.url)) {
                this.logger.error("awsm_:tm_DuplicateOfferError", "AI", {
                  locationName: this.postData.mbox,
                  isClickRequest: this.isClickRequest
                });
                this.state = RequestState.REJECTED
              } else {
                offerRegistry[this.response.url] = true;
                this.state = RequestState.RESOLVED
              }
            } else {
              this.state = RequestState.REJECTED
            }
          } else if (this.isValidDefaultOffer(data)) {
            this.response = this.parseResponseData(data);
            if (this.response) {
              this.state = RequestState.RESOLVED
            } else {
              this.state = RequestState.REJECTED
            }
          } else if (this.isErrorOffer(data)) {
            this.logger.error("awsm_:tm_TargetRequesterParameterError", "AI", {
              locationName: this.postData.mbox,
              isClickRequest: this.isClickRequest,
              data: data
            });
            this.state = RequestState.REJECTED
          } else {
            this.logger.error("awsm_:tm_InvalidOfferError", "AI", {
              locationName: this.postData.mbox,
              isClickRequest: this.isClickRequest
            });
            this.logger.error("InvalidOfferError: " + this.postData.mbox, "RAW");
            this.state = RequestState.REJECTED
          }
        },
        parseResponseData: function(data) {
          try {
            return JSON.parse(data)
          } catch (ex) {
            this.logger.error("awsm_:tm_UnparsableOfferError", "AI", {
              locationName: this.postData.mbox,
              isClickRequest: this.isClickRequest
            });
            return {}
          }
        },
        isUnassociatedOffer: function(str) {
          return str === "success"
        },
        isErrorOffer: function(str) {},
        isValidDefaultOffer: function(str) {},
        isValidRegularOffer: function(str) {
          var validRegularOfferRegexp = /^\{"url":"\/[a-z]{2}_[A-Z]{2}\/[a-zA-Z0-9\/_\.\-%\+\,\'\?\\#\$\&]+","campaignId":"[0-9]{1,40}","environmentId":"[0-9]{1,40}","userPCId":"[0-9\.\-_]{10,40}"\}$/;
          return validRegularOfferRegexp.test(str)
        },
        isValidTransitionRegularOffer: function(str) {},
        isDuplicateOffer: function(url) {
          return url in offerRegistry
        }
      };
      mixin(TargetRequester.prototype, Requester);
      return TargetRequester
    }(librastandardlib_obj_utils_mixin, librastandardlib_logger_logger, target_requester, target_request_state);
    target_aws_requester = function(mixin, Logger, Requester, RequestState) {
      var MAXIMUM_TIMEOUT = 4e3;

      function AWSRequester(callback) {
        this.logger = new Logger("TargetMediator");
        this.callback = callback;
        this.data = null;
        this.state = RequestState.PENDING;
        this.setAllTimeouts(MAXIMUM_TIMEOUT)
      }
      AWSRequester.prototype = {
        fetch: function() {
          this.logger.debug("awsm_:tm_AWSRequesterXHRStart", "AI", {
            offerUrl: this.url
          });
          this.get(this.done, this.fail)
        },
        done: function(data) {},
        fail: function(data, textStatus) {
          if (this.state === RequestState.TIMEOUT) {
            this.logger.error("awsm_:tm_AWSRequesterTimeoutError", "AI", {
              value: (new Date).getTime() - this.requestStartTime,
              offerUrl: this.url
            })
          } else {
            this.logger.error("awsm_:tm_AWSRequesterXHRError", "AI", {
              value: (new Date).getTime() - this.requestStartTime,
              offerUrl: this.url,
              msg: textStatus
            });
            this.logger.error("AWSRequesterXHRError: " + this.url, "RAW")
          }
          this.state = RequestState.REJECTED;
          this.callback(this.data, this.state)
        }
      };
      mixin(AWSRequester.prototype, Requester);
      return AWSRequester
    }(librastandardlib_obj_utils_mixin, librastandardlib_logger_logger, target_requester, target_request_state);
    target_language_helper = function() {
      var LanguageHelper = {
        pageLanguage: "en",
        defaultLanguage: "en",
        supportedLangCodes: ["en"],
        supportedLangCodesHash: null,
        langCodeMapping: {
          "ar-SA": "ar",
          "en-US": "en",
          "es-ES": "es",
          "de-DE": "de",
          "fr-FR": "fr",
          "id-ID": "id",
          "it-IT": "it",
          "ja-JP": "jp",
          "ko-KR": "ko",
          "pt-BR": "pt",
          "ru-RU": "ru",
          "th-TH": "th",
          "tr-TR": "tr",
          "vi-VN": "vi",
          "zh-CN": "cn",
          "zh-TW": "tw"
        },
        getLongLangCodeByShortcode: function(shortcode) {},
        isSupportedMboxName: function(name) {
          if (this.supportedLangCodesHash === null) {
            this.makeSupportedLangCodesHash()
          }
          var underscorePart = name.substr(2, 1);
          if (underscorePart === "_") {
            var codePart = name.substring(0, 2);
            return codePart in this.supportedLangCodesHash
          }
          return false
        },
        isMboxNameMatchingPageLang: function(name) {},
        isPageLangSupported: function() {
          if (this.supportedLangCodesHash === null) {
            this.makeSupportedLangCodesHash()
          }
          return this.pageLanguage in this.supportedLangCodesHash
        },
        makeSupportedLangCodesHash: function() {
          this.supportedLangCodesHash = {};
          for (var i = 0, len = this.supportedLangCodes.length; i < len; i++) {
            this.supportedLangCodesHash[this.supportedLangCodes[i]] = true
          }
        }
      };
      return LanguageHelper
    }();
    target_url_utils = function(window) {
      var UrlUtils = {
        replaceOrigin: function(url, origin) {},
        replaceOriginWithCurrent: function(url) {}
      };
      return UrlUtils
    }(librastandardlib_test_helpers_browser_globals_window);
    target_offer = function(window, UrlUtils, LanguageHelper) {
      function Offer(responseUrl, origin, fileSuffix, contentPath, queryString) {
        this.responseUrl = responseUrl;
        this.origin = origin;
        this.fileSuffix = fileSuffix;
        this.queryString = queryString;
        this.contentPath = contentPath
      }
      Offer.prototype = {
        getUrl: function() {
          var url = this.responseUrl;
          var isTransitionUrl = /^https?:\/\/aws\.amazon\.com\//.test(url);
          if (this.origin === "/") {
            if (!isTransitionUrl) {
              url = "https://s0.awsstatic.com" + url
            }
            url = UrlUtils.replaceOriginWithCurrent(url)
          } else {
            if (isTransitionUrl) {
              url = UrlUtils.replaceOrigin(url, this.origin)
            } else {
              url = this.origin + url
            }
          }
          url = this.appendUrlFileSuffix(url);
          url = this.appendUrlQueryString(url);
          url = this.prependUrlPathname(url);
          if (isTransitionUrl) {
            var re = /\/[a-z]{2}\/s\//;
            var match = url.match(re);
            if (match !== null) {
              var shortcode = match[0].substring(1, 3);
              var longLangCode = LanguageHelper.getLongLangCodeByShortcode(shortcode);
              url = url.replace(re, "/" + longLangCode.replace("-", "_") + "/")
            } else {
              url = url.replace(/\/s\//, "/en_US/")
            }
          }
          return url
        },
        appendUrlFileSuffix: function(url) {
          if (url.match(/\/$/g)) {
            if (this.fileSuffix === "/") {
              return url
            } else {
              return url.substr(0, url.length - 1) + this.fileSuffix
            }
          } else {
            return url + this.fileSuffix
          }
        },
        appendUrlQueryString: function(url) {
          return url + this.queryString
        },
        prependUrlPathname: function(url) {
          if (this.contentPath !== "") {
            var indexOfProtocolEnd = url.indexOf("//");
            var indexOfPathname = url.indexOf("/", indexOfProtocolEnd + 2);
            return url.substr(0, indexOfPathname) + this.contentPath + url.substr(indexOfPathname, url.length)
          }
          return url
        }
      };
      return Offer
    }(librastandardlib_test_helpers_browser_globals_window, target_url_utils, target_language_helper);
    target_mbox = function(mixin, Logger, MboxBase, MboxController, TargetRequestDataBuilder, TargetRequester, AWSRequester, CookieManager, Validator, LanguageHelper, Offer, RequestState) {
      var TargetMediator;

      function Mbox($elem, pTargetMediator) {
        TargetMediator = pTargetMediator;
        this.logger = new Logger("TargetMediator");
        this.$elem = $elem;
        this.name = this.getName($elem);
        this.time = this.getMboxTime();
        this.additionalParameters = this.getAdditionalParameters($elem);
        this.logger.info("Instantiate mbox '" + this.name + "'");
        MboxController.mboxRegistry[this.name] = {
          state: RequestState.PENDING
        }
      }
      Mbox.prototype = {
        fetch: function() {
          this.targetRequestDataBuilder = new TargetRequestDataBuilder([this.getMboxParamsSet(false), TargetMediator.clientParamsSet], false);
          this.awsRequester = new AWSRequester(this.handleContentResponse.bind(this));
          this.targetRequester = new TargetRequester(this.handleOfferResponse.bind(this), this.targetRequestDataBuilder, false);
          this.targetRequester.setRequestTimeout(TargetMediator.options.offerTimeout).fetch()
        },
        handleOfferResponse: function(res, state) {
          if (state === RequestState.RESOLVED) {
            this.updateVisitorId(res);
            this.environmentId = res.environmentId;
            this.campaignId = res.campaignId;
            MboxController.mboxRegistry[this.name].campaignId = this.campaignId;
            MboxController.mboxRegistry[this.name].environmentId = this.environmentId
          }
          if (state === RequestState.RESOLVED && typeof res.defaultOffer === "undefined") {
            MboxController.mboxRegistry[this.name].offerUrl = res.url;
            var offer = new Offer(res.url, TargetMediator.options.offerOrigin, TargetMediator.options.offerFileSuffix, TargetMediator.options.offerContentPath, TargetMediator.options.offerQueryString);
            this.fetchOffer(offer.getUrl())
          } else if (state === RequestState.RESOLVED && typeof res.defaultOffer === "boolean" && res.defaultOffer) {
            MboxController.mboxRegistry[this.name].isDefault = true;
            this.showDefault(RequestState.RESOLVED);
            this.setClickHandler()
          } else {
            this.showDefault(RequestState.REJECTED)
          }
        },
        fetchOffer: function(offerUrl) {
          var targetRequesterElapsedTime = Date.now() - this.targetRequester.getRequestStartTime();
          var awsRequesterTimeout = TargetMediator.options.offerTimeout - targetRequesterElapsedTime;
          var hasTimeToMakeOfferRequest = awsRequesterTimeout > this.awsRequester.getPollingInterval();
          if (hasTimeToMakeOfferRequest) {
            this.awsRequester.setUrl(offerUrl).setRequestTimeout(awsRequesterTimeout).fetch()
          } else {
            this.showDefault(RequestState.REJECTED)
          }
        },
        handleContentResponse: function(res, state) {
          if (state === RequestState.RESOLVED) {
            this.$elem.html(res);
            this.showOffer(RequestState.RESOLVED);
            this.setClickHandler()
          } else {
            this.showDefault(RequestState.REJECTED)
          }
        },
        setClickHandler: function() {},
        getName: function($mbox) {
          var name = $mbox.attr("data-mbox");
          this.validateName(name);
          if (name.indexOf(LanguageHelper.defaultLanguage) === 0) {
            var namePart = name.substring(2, name.length);
            name = LanguageHelper.pageLanguage + namePart
          }
          return name
        },
        validateName: function(name) {
          if (typeof name === "undefined") {
            this.showDefault(RequestState.REJECTED);
            this.logger.error("awsm_:tm_MboxNameError", "AI", {
              msg: "'data-mbox' attribute is undefined"
            });
            return
          }
          if (name.length > 250) {
            this.showDefault(RequestState.REJECTED);
            this.logger.error("awsm_:tm_MboxNameError", "AI", {
              msg: "'" + name + "' exceeds max length of 250 characters"
            });
            return
          }
          if (/\s+$/.test(name)) {
            this.showDefault(RequestState.REJECTED);
            this.logger.error("awsm_:tm_MboxNameError", "AI", {
              msg: "'" + name + "' has trailing whitespace"
            });
            return
          }
          if (name in MboxController.mboxRegistry) {
            this.showDefault(RequestState.REJECTED);
            this.logger.error("awsm_:tm_MboxNameError", "AI", {
              msg: "'" + name + "' is already registered in the current page"
            });
            return
          }
          if (!LanguageHelper.isSupportedMboxName(name)) {
            this.showDefault(RequestState.REJECTED);
            this.logger.error("awsm_:tm_MboxNameError", "AI", {
              msg: "'" + name + "' does not have a supported preceding locale code"
            });
            return
          }
          if (name.indexOf(LanguageHelper.defaultLanguage) !== 0) {
            if (!LanguageHelper.isMboxNameMatchingPageLang(name)) {
              this.showDefault(RequestState.REJECTED);
              this.logger.error("awsm_:tm_MboxNameError", "AI", {
                msg: "'" + name + "' is not in the current page language"
              });
              return
            }
          }
        },
        getAdditionalParameters: function($mbox) {
          var params = {};
          var dataParams = $mbox.attr("data-params");
          if (typeof dataParams !== "undefined") {
            try {
              params = JSON.parse(dataParams)
            } catch (ex) {
              this.logger.error("awsm_:tm_MboxParameterInvalidJsonError", "AI", {
                msg: "'" + dataParams + "' is not a valid JSON string"
              })
            }
          }
          return params
        },
        updateVisitorId: function(res) {
          var visitorId = res.userPCId;
          if (TargetMediator.clientParamsSet.mboxPC !== visitorId) {
            if (Validator.isValidVisitorId(visitorId)) {
              TargetMediator.clientParamsSet.mboxPC = visitorId;
              TargetMediator.serverParamsSet.mboxPC = visitorId;
              var visitorCookie = new CookieManager("aws-target-visitor-id", {
                expireSeconds: 33696e3
              });
              visitorCookie.value = visitorId;
              visitorCookie.encode();
              visitorCookie.write()
            } else {
              this.logger.error("awsm_:tm_InvalidVisitorIdFromTargetError", "AI", {
                visitorId: visitorId
              })
            }
          }
        },
        showDefault: function(state) {
          this.show("default content", state)
        },
        showOffer: function(state) {},
        show: function(offerType, state) {
          if (typeof this.name !== "undefined") {
            MboxController.mboxRegistry[this.name].state = state
          }
          this.$elem[0].style.visibility = "visible";
          this.$elem[0].removeAttribute("data-lb-comp-ignore");
          this.logger.debug("Show " + offerType + " for '" + this.name + "' with state '" + state + "'");
          $(document).trigger("custom_libra_require_new-content");
          $(document).trigger("custom_aws_da_new-content");
          if (TargetMediator.options.holdJqueryReady) {
            MboxController.checkJqueryReadyHold()
          }
        }
      };
      mixin(Mbox.prototype, MboxBase);
      return Mbox
    }(librastandardlib_obj_utils_mixin, librastandardlib_logger_logger, target_mbox_base, target_mbox_controller, target_target_request_data_builder, target_target_requester, target_aws_requester, target_cookie_manager, target_validator, target_language_helper, target_offer, target_request_state);
    target_page_mbox = function(mixin, Logger, MboxBase, MboxController, TargetRequestDataBuilder, TargetRequester, RequestState) {
      function PageMbox(pageMboxParams, serverParamsSet) {}
      PageMbox.prototype = {
        setClickHandler: function() {}
      };
      mixin(PageMbox.prototype, MboxBase);
      return PageMbox
    }(librastandardlib_obj_utils_mixin, librastandardlib_logger_logger, target_mbox_base, target_mbox_controller, target_target_request_data_builder, target_target_requester, target_request_state);
    target_target_mediator = function(_assign, Logger, AWS, Util, FeatureDetects, CookieManager, CurrentUser, DataCookieFacade, ParameterFetcher, Mbox, MboxController, PageMbox, LanguageHelper) {
      var logger = new Logger("TargetMediator");
      var TargetMediator = {
        init: function() {
          var configOptions = typeof AWS.TargetMediator !== "undefined" ? AWS.TargetMediator : {};
          this.options = _assign({}, this.defaults, configOptions);
          var isValidPageMbox = false;
          var dataCookie = new DataCookieFacade;
          if (dataCookie.hasCompleteParamsSet()) {
            isValidPageMbox = true
          } else {
            logger.debug("Invalid data cookie. Not handling clicks for a page test.");
            isValidPageMbox = false
          }
          var staticCookie = new CookieManager("aws-target-static-id", {
            expireSeconds: 31536e4
          });
          if (!staticCookie.exists) {
            staticCookie.value = Util.generateRandomId();
            staticCookie.encode();
            staticCookie.write()
          }
          var parameterFetcher = new ParameterFetcher(dataCookie, this.options.customParams);
          parameterFetcher.fetch();
          TargetMediator.clientParamsSet = parameterFetcher.getClientParamsSet();
          TargetMediator.serverParamsSet = parameterFetcher.getServerParamsSet();
          var hasCORSSupport = FeatureDetects.hasCORSSupport();
          dataCookie.write({
            support: (+hasCORSSupport).toString(),
            campaignId: null,
            environmentId: null,
            mboxPage: null,
            mbox: null
          });
          if (!hasCORSSupport) {
            logger.error("awsm_:tm_CORSUnsupported", "AI", {
              msg: "Mboxes not initialized because CORS is not supported"
            });
            MboxController.showAllMboxes();
            return
          }
          LanguageHelper.supportedLangCodes = this.options.supportedLanguages;
          LanguageHelper.pageLanguage = this.options.pageLanguage;
          LanguageHelper.defaultLanguage = this.options.defaultLanguage;
          if (!LanguageHelper.isPageLangSupported()) {
            logger.error("awsm_:tm_PageLangUnsupported", "AI", {
              msg: "Mboxes not initialized because the page lang is not supported"
            });
            MboxController.showAllMboxes();
            return
          }
          if (this.options.holdJqueryReady) {
            $.holdReady(true)
          }
          if (this.options.isLoadedAtPageEnd) {
            MboxController.findMboxes(Mbox, this)
          } else {
            MboxController.hideAllMboxes();
            MboxController.pollToFindMboxes(Mbox, this)
          }
          var that = this;
          $(document).on("custom_tm_new-content", function() {});
          if (isValidPageMbox) {
            var pageMbox = new PageMbox(parameterFetcher.getPageMboxParamsSet(), TargetMediator.serverParamsSet);
            pageMbox.setClickHandler()
          }
        },
        clientParamsSet: {},
        serverParamsSet: {},
        MboxController: MboxController,
        defaults: {
          hasLoaded: true,
          pageLanguage: "en",
          defaultLanguage: "en",
          supportedLanguages: ["en"],
          offerFileSuffix: "/index.html",
          offerContentPath: "",
          offerQueryString: "",
          offerOrigin: "https://s0.awsstatic.com",
          offerTimeout: 1e4,
          holdJqueryReady: false,
          isLoadedAtPageEnd: false,
          customParams: {
            registrationStatus: CurrentUser.registrationStatus,
            isIAMUser: CurrentUser.isIAMUser
          }
        }
      };
      TargetMediator.init();
      AWS.TargetMediator = TargetMediator;
      return TargetMediator
    }(librastandardlib_obj_utils_assign, librastandardlib_logger_logger, librastandardlib_aws_aws_namespace, target_util, target_feature_detects, target_cookie_manager, target_current_user, target_data_cookie_facade, target_parameter_fetcher, target_mbox, target_mbox_controller, target_page_mbox, target_language_helper)
  }()
}(jQuery);