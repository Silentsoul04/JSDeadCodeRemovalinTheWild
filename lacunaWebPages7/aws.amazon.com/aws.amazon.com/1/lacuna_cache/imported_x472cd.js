// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
! function() {
  var librastandardlib_event_utils_onWindowLoad, librastandardlib_event_utils_onDOMContentLoaded, librastandardlib_id_utils_generateUUID, pre_offer_content_sitePriv_main;
  ! function() {
    librastandardlib_event_utils_onWindowLoad = function onWindowLoad(cb, context) {
      context = context || this;
      if (document.readyState === "complete") {
        cb.call(context)
      } else {
        document.addEventListener("readystatechange", function() {
          if (document.readyState === "complete") {
            cb.call(context)
          }
        }, false)
      }
    };
    librastandardlib_event_utils_onDOMContentLoaded = function(onWindowLoad) {
      return function onDOMContentLoaded(cb, context) {
        context = context || this;
        var resolved = false;
        if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
          resolved = true;
          cb.call(context)
        } else {
          document.addEventListener("DOMContentLoaded", function() {
            if (!resolved) {
              resolved = true;
              cb.call(context)
            }
          }, false);
          onWindowLoad(function() {
            if (!resolved) {
              resolved = true;
              cb.call(context)
            }
          })
        }
      }
    }(librastandardlib_event_utils_onWindowLoad);
    librastandardlib_id_utils_generateUUID = function generateUUID() {
      var d = (new Date).getTime();
      var id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : r & 3 | 8).toString(16)
      });
      return id
    };
    pre_offer_content_sitePriv_main = function(onDOMContentLoaded, generateUUID) {
      var C_NAME = "aws-priv";
      var C_VERSION = 1;
      var C_EXPS = 94672800;
      var pageRequestId;

      function getLang() {
        var DEFAULT_LANG = "en_US";
        var codes = {
          ar_SA: "ar",
          en_US: "en",
          es_ES: "es",
          de_DE: "de",
          fr_FR: "fr",
          id_ID: "id",
          it_IT: "it",
          ja_JP: "jp",
          ko_KR: "ko",
          pt_BR: "pt",
          ru_RU: "ru",
          th_TH: "th",
          tr_TR: "tr",
          vi_VN: "vi",
          zh_CN: "cn",
          zh_TW: "tw"
        };
        var tags = document.getElementsByTagName("HTML");
        var attr;
        if (tags.length) {
          attr = tags[0].getAttribute("lang")
        }
        if (!attr) {
          return DEFAULT_LANG
        } else if (attr.length === 5) {
          attr = attr.replace("-", "_");
          if (attr in codes) {
            return attr
          }
        } else if (attr.length === 2) {
          for (var key in codes) {
            if (attr === codes[key]) {
              return key
            }
          }
        }
        return DEFAULT_LANG
      }

      function prependUrlOrigin(url, origin) {
        if (origin === "/") {
          return url
        }
        return origin + url
      }

      function appendUrlFileSuffix(url, fileSuffix) {
        return url + fileSuffix
      }

      function appendUrlQueryString(url, qs) {
        return url + qs
      }

      function prependUrlPath(url, path) {
        return path + url
      }

      function replaceUrlLang(url, lang) {
        return url.replace("{lang}", lang)
      }

      function getUrl(lang) {
        var OFFER_PATH = "/{lang}/predefined/site-privacy-notification";
        var origin = "https://s0.awsstatic.com";
        var fileSuffix = "/index.html";
        var path = "";
        var queryString = "";
        if ("AWS" in window && "TargetMediator" in AWS && AWS.TargetMediator.options && AWS.TargetMediator.options.hasLoaded) {
          path = AWS.TargetMediator.options.offerContentPath;
          origin = AWS.TargetMediator.options.offerOrigin;
          fileSuffix = AWS.TargetMediator.options.offerFileSuffix;
          queryString = AWS.TargetMediator.options.offerQueryString
        }
        url = prependUrlPath(OFFER_PATH, path);
        url = prependUrlOrigin(url, origin);
        url = appendUrlFileSuffix(url, fileSuffix);
        url = appendUrlQueryString(url, queryString);
        return replaceUrlLang(url, lang)
      }

      function show() {
        var c = getCookie(C_NAME);
        if (typeof c !== "object") {
          return true
        }
        if (c.st) {
          return false
        }
        if ("eu" in c && !c.eu) {
          return false
        }
        return true
      }

      function seen() {lacuna_lazy_load("lacuna_cache/imported_x472cd.js[4686:4906]", functionData => eval(functionData))}

      function log(msg) {
        var metricName = "awsm_:comp_priv_" + msg;
        var time = (new Date).getTime();
        var pageTime = -1;
        if ("performance" in window && "timing" in window.performance) {
          pageTime = time - window.performance.timing.responseEnd
        }
        var page = encodeURIComponent(window.location.toString());
        pageRequestId = pageRequestId || generateUUID();
        var logDataSet = "NA";
        var logInstance = "LIVE";
        if ("AWS" in window && "PageSettings" in AWS) {
          if (AWS.PageSettings.isLoggingEnabled === false) {
            return
          }
          if (AWS.PageSettings.logDataSet) {
            logDataSet = encodeURIComponent(AWS.PageSettings.logDataSet)
          }
          if (AWS.PageSettings.logInstance) {
            logInstance = AWS.PageSettings.logInstance
          }
        }
        var AI_LOG = "https://fls-na.amazon.com/1/action-impressions/1/OE/aws-mktg/action/" + metricName + "@v=1:u=c?dataset=" + logDataSet + "&instance=" + logInstance + "&service=awsm&marketplace=NA&client=dsk&host=aws.amazon.com&marketplaceId=A12QK8IU0H0XW5&requestId=ABCDEFGHIJKLMNOPQRST&session=123-1234567-1234567";
        var RAW_LOG = "https://fls-na.amazon.com/1/aws-mktg/1/OE/?cat=SitePriv&level=INFO&msg=" + msg + "&currentTime=" + time + "&pageTime=" + pageTime + "&pageRequestId=" + pageRequestId + "&page=" + page;
        logCall(AI_LOG);
        logCall(RAW_LOG)
      }

      function logCall(url) {
        setTimeout(function() {
          (new Image).src = url
        }, 0)
      }

      function onDone(data) {lacuna_lazy_load("lacuna_cache/imported_x472cd.js[6526:6943]", functionData => eval(functionData))}

      function onInject() {lacuna_lazy_load("lacuna_cache/imported_x472cd.js[6971:7681]", functionData => eval(functionData))}

      function onFail(msg) {
        log(msg)
      }

      function setCookie(name, val, expSecs) {lacuna_lazy_load("lacuna_cache/imported_x472cd.js[7783:8210]", functionData => eval(functionData))}

      function getCookie(name) {
        var v = document.cookie.split(name + "=")[1];
        if (v) {
          v = v.split(";")[0];
          if (v) {
            v = v.replace(/\"/g, "");
            try {
              return JSON.parse(atob(v))
            } catch (e) {
              return false
            }
          }
        }
        return false
      }

      function fetch(lang) {
        var url = getUrl(lang);
        var xhr = new XMLHttpRequest;
        xhr.open("GET", url);
        if ("withCredentials" in xhr) {
          xhr.withCredentials = false
        } else {
          return
        }
        xhr.onreadystatechange = function() {
          if (this.readyState === 4) {
            if (this.status === 200) {
              onDone(xhr.responseText)
            } else {
              onFail("XHRError")
            }
          }
        };
        xhr.send()
      }
      onDOMContentLoaded(function() {
        if (!show()) {
          return
        }
        var lang = getLang();
        fetch(lang)
      })
    }(librastandardlib_event_utils_onDOMContentLoaded, librastandardlib_id_utils_generateUUID)
  }()
}();