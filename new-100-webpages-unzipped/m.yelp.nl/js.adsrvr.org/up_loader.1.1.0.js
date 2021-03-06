var ttd_dom_ready = function() {
    var readyList, DOMContentLoaded, class2type = {};
    class2type["[object Boolean]"] = "boolean";
    class2type["[object Number]"] = "number";
    class2type["[object String]"] = "string";
    class2type["[object Function]"] = "function";
    class2type["[object Array]"] = "array";
    class2type["[object Date]"] = "date";
    class2type["[object RegExp]"] = "regexp";
    class2type["[object Object]"] = "object";
    var ReadyObj = {
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
            if (hold) {
                ReadyObj.readyWait++
            } else {
                ReadyObj.ready(true)
            }
        },
        ready: function(wait) {
            if (wait === true && !--ReadyObj.readyWait || wait !== true && !ReadyObj.isReady) {
                if (!document.body) {
                    return setTimeout(ReadyObj.ready, 1)
                }
                ReadyObj.isReady = true;
                if (wait !== true && --ReadyObj.readyWait > 0) {
                    return
                }
                readyList.resolveWith(document, [ReadyObj])
            }
        },
        bindReady: function() {
            if (readyList) {
                return
            }
            readyList = ReadyObj._Deferred();
            if (document.readyState === "complete") {
                return setTimeout(ReadyObj.ready, 1)
            }
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
                window.addEventListener("load", ReadyObj.ready, false)
            } else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", DOMContentLoaded);
                window.attachEvent("onload", ReadyObj.ready);
                var toplevel = false;
                try {
                    toplevel = window.frameElement == null
                } catch (e) {}
                if (document.documentElement.doScroll && toplevel) {
                    doScrollCheck()
                }
            }
        },
        _Deferred: function() {
            var callbacks = [],
                fired, firing, cancelled, deferred = {
                    done: function() {
                        if (!cancelled) {
                            var args = arguments,
                                i, length, elem, type, _fired;
                            if (fired) {
                                _fired = fired;
                                fired = 0
                            }
                            for (i = 0, length = args.length; i < length; i++) {
                                elem = args[i];
                                type = ReadyObj.type(elem);
                                if (type === "array") {
                                    deferred.done.apply(deferred, elem)
                                } else if (type === "function") {
                                    callbacks.push(elem)
                                }
                            }
                            if (_fired) {
                                deferred.resolveWith(_fired[0], _fired[1])
                            }
                        }
                        return this
                    },
                    resolveWith: function(context, args) {
                        if (!cancelled && !fired && !firing) {
                            args = args || [];
                            firing = 1;
                            try {
                                while (callbacks[0]) {
                                    callbacks.shift().apply(context, args)
                                }
                            } finally {
                                fired = [context, args];
                                firing = 0
                            }
                        }
                        return this
                    },
                    resolve: function() {
                        deferred.resolveWith(this, arguments);
                        return this
                    },
                    isResolved: function() {
                        return !!(firing || fired)
                    },
                    cancel: function() {
                        cancelled = 1;
                        callbacks = [];
                        return this
                    }
                };
            return deferred
        },
        type: function(obj) {
            return obj == null ? String(obj) : class2type[Object.prototype.toString.call(obj)] || "object"
        }
    };

    function doScrollCheck() {
        if (ReadyObj.isReady) {
            return
        }
        try {
            document.documentElement.doScroll("left")
        } catch (e) {
            setTimeout(doScrollCheck, 1);
            return
        }
        ReadyObj.ready()
    }
    if (document.addEventListener) {
        DOMContentLoaded = function() {
            document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
            ReadyObj.ready()
        }
    } else if (document.attachEvent) {
        DOMContentLoaded = function() {
            if (document.readyState === "complete") {
                document.detachEvent("onreadystatechange", DOMContentLoaded);
                ReadyObj.ready()
            }
        }
    }

    function ready(fn) {
        ReadyObj.bindReady();
        var type = ReadyObj.type(fn);
        readyList.done(fn)
    }
    return ready
}();

function TTDUniversalPixelApi(optionalTopLevelUrl) {
    var upLoaderScriptVersion = "1.1.0";
    this.getVersion = function() {
        return upLoaderScriptVersion
    };
    this.init = function(adv, tag_ids, base_src, dyn_params) {
        if (typeof arguments[3] === "string") {
            arguments[3] = null;
            if (arguments.length > 4) {
                for (var i = 4; i < arguments.length; i++) {
                    arguments[i - 1] = arguments[i]
                }
            }
        }
        if (!adv || adv == "" || !tag_ids || tag_ids.length <= 0) {
            return
        }
        var embedElem = document.getElementsByTagName("body")[0];
        if (!embedElem) {
            return
        }
        var src_with_params = "";
        var paramMap = {
            MonetaryValue: "v",
            MonetaryValueFormat: "vf"
        };
        var optionalParams = [];
        if (typeof _pixelParams !== "undefined") {
            for (var i in _pixelParams) {
                var value = _pixelParams[i];
                var key = paramMap[i];
                if (key && value && !/%%.*%%/i.test(value)) optionalParams.push(key + "=" + encodeURIComponent(value))
            }
        }
        var advParam = "adv=" + adv;
        var upParams = "upid=" + tag_ids.join(",");
        var ref = optionalTopLevelUrl || TryFindTopMostReferrer();
        src_with_params = base_src + "?" + advParam + "&ref=" + encodeURIComponent(ref) + "&" + upParams + "&upv=" + this.getVersion();
        if (dyn_params) {
            for (var param in dyn_params) {
                src_with_params = src_with_params + "&" + param + "=" + dyn_params[param]
            }
        }
        if (optionalParams.length > 0) src_with_params = src_with_params + "&" + optionalParams.join("&");
        if (typeof __cmp === "function") {
            __cmp("getConsentData", null, firePixel)
        } else {
            firePixel()
        }

        function firePixel(cmpResult) {
            function getGdprAppliesParam(gdprApplies) {
                return gdprApplies ? "1" : "0"
            }
            if (cmpResult != null) {
                src_with_params = src_with_params + "&gdpr=" + getGdprAppliesParam(cmpResult.gdprApplies) + "&gdpr_consent=" + cmpResult.consentData
            }
            var iframe = document.createElement("iframe");
            iframe.setAttribute("id", "universal_pixel");
            iframe.setAttribute("allowTransparency", true);
            iframe.setAttribute("height", 0);
            iframe.setAttribute("width", 0);
            iframe.setAttribute("style", "display:none;");
            iframe.setAttribute("src", src_with_params);
            iframe.setAttribute("title", "TTD Universal Pixel");

            function addIframe() {
                embedElem.appendChild(iframe)
            }
            if (document.readyState === "complete") {
                setTimeout(addIframe, 0)
            } else if (window.addEventListener) {
                window.addEventListener("load", addIframe)
            } else if (window.attachEvent) {
                window.attachEvent("onload", addIframe)
            } else {
                addIframe()
            }
        }
    };

    function GetQueryStringValue(url, name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(url);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
    }

    function TryFindTopMostReferrer() {
        var currentWindow = window;
        var referrerTrace = "";
        var hasError = false;
        try {
            if (top.location.href) {
                referrerTrace = top.location.href
            }
        } catch (error) {
            hasError = true
        }
        if (hasError) {
            while (true) {
                try {
                    referrerTrace = currentWindow.document.referrer;
                    if (window.parent != currentWindow) {
                        currentWindow = window.parent
                    } else {
                        break
                    }
                } catch (error) {
                    break
                }
            }
        }
        if (-1 < referrerTrace.indexOf("cloudfront.net")) referrerTrace = GetQueryStringValue(referrerTrace, "url") || referrerTrace;
        return referrerTrace
    }
}