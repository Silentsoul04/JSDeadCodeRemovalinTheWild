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
"use strict";

function _defineProperty(e, t, r) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[49:212]", functionData => eval(functionData))}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest()
}

function _nonIterableRest() {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[360:443]", functionData => eval(functionData))}

function _iterableToArrayLimit(e, t) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[482:883]", functionData => eval(functionData))}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var a = t[r];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
}

function _typeof(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[1453:1740]", functionData => eval(functionData))}
require = function() {
    return function e(t, r, a) {
        function i(n, s) {
            if (!r[n]) {
                if (!t[n]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(n, !0);
                    if (o) return o(n, !0);
                    var c = new Error("Cannot find module '" + n + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = r[n] = {
                    exports: {}
                };
                t[n][0].call(u.exports, function(e) {
                    return i(t[n][1][e] || e)
                }, u, u.exports, e, t, r, a)
            }
            return r[n].exports
        }
        for (var o = "function" == typeof require && require, n = 0; n < a.length; n++) i(a[n]);
        return i
    }
}()({
    1: [function(e, t, r) {
        var a = !1,
            i = window || self;
        try {
            a = !!i.localStorage.getItem("f7c9180f-5c45-47b4-8de4-428015f096c0")
        } catch (e) {}
        t.exports = a
    }, {}],
    2: [function(e, t, r) {
        var a = e("../enabled");
        t.exports = function(e) {
            return function() {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[2957:3145]", functionData => eval(functionData))}
        }
    }, {
        "../enabled": 1
    }],
    3: [function(e, t, r) {
        t.exports = e("./internal/expose")("log")
    }, {
        "./internal/expose": 2
    }],
    "@marcom/data-relay": [function(e, t, r) {
        var a, i = e("@marcom/ac-console/log");
        try {
            a = e("@marcom/ac-analytics")
        } catch (e) {
            i(e)
        }
        var o = {
                properties: {
                    absoluteUrlRegex: new RegExp("^(?:[a-z]+:)+//", "i"),
                    analyticsTitle: "data relayed",
                    cidQueryParam: "cid",
                    cookieDomain: ".apple.com",
                    cookieMaxKeyLength: 5,
                    cookieName: "aw_rid",
                    cookieValueSeparator: "|",
                    cookieValueEntrySeparator: ":",
                    customAnalyticsAttribute: "",
                    dataMaxLength: 100,
                    deferNavigationTimeout: 400,
                    interactionEvent: "mouseup",
                    internalLinkAttribute: "data-analytics-intrapage-link",
                    parseRelativeUrlRegex: new RegExp("^([./]*)(.+)"),
                    prefixAllowedCharacters: /^[A-Za-z0-9_]+$/,
                    prefixMaxLength: 3,
                    relayButtonUrlAttribute: "data-url",
                    ridQueryParam: "rid",
                    ridRelayAttribute: "data-rid-relay",
                    ridRelaySelector: "[data-rid-relay]",
                    ridStoreAttribute: "data-rid-store",
                    ridStoreSelector: "[data-rid-store]",
                    ridPrefixSeparator: "-",
                    trackingDataSeparator: "|",
                    trackingProperty: "eVar17",
                    urlFormatHostName: "https://apple.com/",
                    urlSeparator: ",",
                    valueAllowedCharacters: /^[A-Za-z0-9-_%]+$/
                },
                options: {
                    automaticMode: !0,
                    canDeferNavigation: !0,
                    trackCid: !1,
                    useJsonStorageFormat: !1,
                    useSecureCookie: !0
                },
                passiveTracking: {
                    overwriteStorageItem: !1,
                    overwriteStorageItemValues: !0,
                    overwriteAppMeasurementValues: !0,
                    overwriteAppMeasurementEvents: !0
                }
            },
            n = function() {
                function e(t) {
                    _classCallCheck(this, e), this._isSupported() && this._initialize(t)
                }
                return _createClass(e, [{
                    key: "_isSupported",
                    value: function() {
                        if (!(window && document && document.documentElement && Array.prototype.includes)) return !1;
                        try {
                            var e = new window.URL("x", "http://w");
                            return e.pathname = "y%20z", "http://w/y%20z" === e.href && void 0 !== e.searchParams
                        } catch (e) {
                            return !1
                        }
                    }
                }, {
                    key: "_initialize",
                    value: function(e) {
                        if (this.options = o.options, this.properties = o.properties, this.passiveTracking = o.passiveTracking, this.analytics = a, this._applyConfigurations(e), this.options.automaticMode) {
                            var t = this.getRidFromUrl(window.location.href);
                            this.storeRid(t), this._setupEventHandlers()
                        }
                    }
                }, {
                    key: "_applyConfigurations",
                    value: function(e) {
                        var t = this;
                        if (e) {
                            var r = Object.keys(o);
                            Object.keys(e).forEach(function(a) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[7139:7254]", functionData => eval(functionData))})
                        }
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleClick = this._handleClick.bind(this), document.documentElement.addEventListener(this.properties.interactionEvent, this._handleClick)
                    }
                }, {
                    key: "_handleClick",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[7705:8297]", functionData => eval(functionData))}
                }, {
                    key: "storeRid",
                    value: function(e) {
                        if (e) {
                            var t = this.getRidFromCookie();
                            t ? (i("Data Relay - cookie was already there, combining the new data with the current cookie data"), i("Data Relay - current data stored in cookie", t), i("Data Relay - the rid that is currently in the URL that is overwriting the current rid", e), i("Data Relay - the combined value of the old and new rid data"), this.writeCookieFromObj(this._prepareCookieData(e, t))) : (i("Data Relay - cookie was not already there - just created now"), i('Data Relay - wrote the following string to the cookie:"', JSON.stringify(e) + '"'), this.writeCookieFromObj(this._prepareCookieData(e)))
                        }
                    }
                }, {
                    key: "_prepareCookieData",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[9255:10035]", functionData => eval(functionData))}
                }, {
                    key: "writeCookieFromObj",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[10143:10571]", functionData => eval(functionData))}
                }, {
                    key: "_formatCookieData",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[10678:10857]", functionData => eval(functionData))}
                }, {
                    key: "_createSimpleFormatCookieData",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[10976:11435]", functionData => eval(functionData))}
                }, {
                    key: "_handleRidRelay",
                    value: function(e, t) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[11543:12062]", functionData => eval(functionData))}
                }, {
                    key: "_handleRidStore",
                    value: function(e, t) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[12170:12469]", functionData => eval(functionData))}
                }, {
                    key: "_trackAnalyticsData",
                    value: function(e, t, r, a) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[12587:13511]", functionData => eval(functionData))}
                }, {
                    key: "_createTrackingData",
                    value: function(e, t, r) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[13626:14163]", functionData => eval(functionData))}
                }, {
                    key: "_buildEventsString",
                    value: function(e, t) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[14274:14627]", functionData => eval(functionData))}
                }, {
                    key: "getTrackingDataForEl",
                    value: function(e, t) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[14740:16658]", functionData => eval(functionData))}
                }, {
                    key: "relayDataToElement",
                    value: function(e, t, r) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[16772:18397]", functionData => eval(functionData))}
                }, {
                    key: "getRidFromCookie",
                    value: function() {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[18502:18931]", functionData => eval(functionData))}
                }, {
                    key: "_readCookie",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[19032:19199]", functionData => eval(functionData))}
                }, {
                    key: "_readSimpleFormatCookie",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[19312:19786]", functionData => eval(functionData))}
                }, {
                    key: "destroy",
                    value: function() {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[19882:20027]", functionData => eval(functionData))}
                }, {
                    key: "getRidMappingFromEl",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[20136:20252]", functionData => eval(functionData))}
                }, {
                    key: "getRidStorageDataFromEl",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[20365:20567]", functionData => eval(functionData))}
                }, {
                    key: "getRidFromUrl",
                    value: function(e) {
                        var t = this.getQueryString(e),
                            r = t[this.properties.ridQueryParam],
                            a = {};
                        if (r && (a = this._parseRidStringData(r)), this.options.trackCid) {
                            var i, o = t[this.properties.cidQueryParam];
                            o && (i = this._parseCidStringData(o)), i && Object.assign(a, i)
                        }
                        return this._isEmpty(a) && (a = null), a
                    }
                }, {
                    key: "getRelayData",
                    value: function(e, t, r, a) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[21312:23000]", functionData => eval(functionData))}
                }, {
                    key: "get",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[23093:23239]", functionData => eval(functionData))}
                }, {
                    key: "set",
                    value: function(e, t) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[23335:23494]", functionData => eval(functionData))}
                }, {
                    key: "_listToString",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[23597:23819]", functionData => eval(functionData))}
                }, {
                    key: "getQueryString",
                    value: function(e) {
                        var t = {};
                        return e.substring(e.indexOf("?") + 1).split("&").forEach(function(e) {
                            var r = _slicedToArray(e.split("="), 2),
                                a = r[0],
                                i = r[1];
                            t[a] = i
                        }), t
                    }
                }, {
                    key: "_deleteInvalidValues",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[24408:24786]", functionData => eval(functionData))}
                }, {
                    key: "_isEmpty",
                    value: function(e) {
                        return 0 === Object.keys(e).length
                    }
                }, {
                    key: "_parseRidStringData",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[25075:26002]", functionData => eval(functionData))}
                }, {
                    key: "_formatUrl",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[26102:26647]", functionData => eval(functionData))}
                }, {
                    key: "_parseCidStringData",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[26756:26886]", functionData => eval(functionData))}
                }, {
                    key: "_ancestor",
                    value: function(e, t) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[26988:27375]", functionData => eval(functionData))}
                }, {
                    key: "_getRandomArrayItem",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[27484:27588]", functionData => eval(functionData))}
                }, {
                    key: "_isIntraPageLink",
                    value: function(e) {lacuna_lazy_load("/metrics/data-relay/1.1.4/scripts/data-relay.js[27694:27990]", functionData => eval(functionData))}
                }]), e
            }();
        t.exports = n
    }, {
        "@marcom/ac-analytics": "@marcom/ac-analytics",
        "@marcom/ac-console/log": 3
    }]
}, {}, []);