! function(e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "https://static.quantcast.mgr.consensu.org/v25/", t(t.s = 25)
}([function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.isUnsupportedBrowser = n.isValidUrl = n.isValidNonIabVendorListUrl = n.isValidPublisherVendorListUrl = n.isValidMarkdownLink = n.isPositiveInt = n.isNonEmptyString = n.isObjectAllFalse = n.displayPersistentConsentLink = n.isArrayAllFalse = n.isObject = n.isArray = n.doCallbackApply = n.doCallback = n.executePendingCalls = n.CallbackArray = n.logWarning = n.logError = n.getJson = n.MILLISEC_DAY = void 0;
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = t(1),
        a = t(7),
        s = (n.MILLISEC_DAY = 864e5, n.getJson = function(e, n) {
            var t = new XMLHttpRequest;
            t.onreadystatechange = function() {
                n(t)
            }, t.open("GET", e.url), t.withCredentials = !!e.withCredentials, t.responseType = "json", t.send()
        }, n.logError = function(e, n) {
            console.error(e + ": " + n + (n && n.stack ? "\n" + n.stack : ""))
        }),
        r = (n.logWarning = function(e, n) {
            console.warn(e + ": " + n + (n && n.stack ? "\n" + n.stack : ""))
        }, n.CallbackArray = function() {
            return {
                cbArray: [],
                push: function(e) {
                    if ("function" != typeof e) throw "Should push only functions into Callback array. Trying to push " + (void 0 === e ? "undefined" : o(e));
                    var n = [].slice.call(arguments, 1);
                    this.cbArray.push({
                        func: e,
                        args: n
                    })
                },
                call: function() {
                    for (; this.cbArray.length > 0;) {
                        var e = this.cbArray.shift(),
                            n = [].slice.call(arguments);
                        this.asyncCall(e, n)
                    }
                    this.cbArray = []
                },
                asyncCall: function(e, n) {
                    setTimeout(function() {
                        e.func.apply(null, e.args.concat(n))
                    }, 0)
                },
                size: function() {
                    return this.cbArray.length
                }
            }
        }, n.executePendingCalls = function(e) {
            for (; e.length > 0;) try {
                var n = e.shift();
                if (!n) continue;
                window.__cmp.apply(null, n)
            } catch (e) {
                s("Error running pending call", e)
            }
        }, n.doCallback = function(e) {
            if ("function" == typeof e) return e.apply(null, [].slice.call(arguments, 1))
        }, n.doCallbackApply = function(e, n) {
            if ("function" == typeof e) return e.apply(null, n)
        }, n.isArray = function(e) {
            return e && "object" === (void 0 === e ? "undefined" : o(e)) && e.constructor === Array
        }),
        l = n.isObject = function(e) {
            return e && "object" === (void 0 === e ? "undefined" : o(e)) && e.constructor === Object
        };
    n.isArrayAllFalse = function(e) {
        return !!r(e) && e.every(function(e) {
            return !e
        })
    }, n.displayPersistentConsentLink = function(e) {
        if ((e && e.displayPersistentConsentLink || e.softOptInEnabled) && !document.querySelector(".qc-cmp-persistent-link")) {
            var n = i.PERSISTENT_LINK_POSITIONS[e.persistentConsentLinkLocation],
                t = document.createElement("a");
            t.addEventListener("click", function() {
                window.__cmp("displayConsentUi", 2, !0)
            }), t.innerHTML = i.COG_SVG_ICON + e.persistentConsentLinkLabel, t.classList.add("qc-cmp-persistent-link"), t.style.cssText = i.PERSISTENT_LINK_STYLE + n, document.getElementsByTagName("body")[0].appendChild(t)
        }
    }, n.isObjectAllFalse = function(e) {
        if (!l(e)) return !1;
        for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n) && e[n]) return !1;
        return !0
    }, n.isNonEmptyString = function(e) {
        return e && e.length && e.trim()
    }, n.isPositiveInt = function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e && e >= 0
    }, n.isValidMarkdownLink = function(e) {
        if ("string" == typeof e) {
            var n = e.match(i.MARKDOWN_LINK_REGEX);
            return n && a.isUri(n[2])
        }
    }, n.isValidPublisherVendorListUrl = function(e) {
        return a.isUri(e) && -1 != e.indexOf("/.well-known/pubvendors.json")
    }, n.isValidNonIabVendorListUrl = function(e) {
        return a.isUri(e) && -1 != e.indexOf("/.well-known/noniab-vendorlist.json")
    }, n.isValidUrl = function(e) {
        return a.isUri(e)
    }, n.isUnsupportedBrowser = function() {
        return window.navigator.userAgent.match(/MSIE [2-9]\.(0|5)/)
    }
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    n.VENDOR_CONSENT_COOKIE_NAME = "euconsent", n.PUBLISHER_CONSENT_COOKIE_NAME = "eupubconsent", n.GOOGLE_CONSENT_COOKIE_NAME = "googlepersonalization", n.NONIABVENDOR_CONSENT_COOKIE_NAME = "noniabvendorconsent", n.BLOCKED_HASH_COOKIE_NAME = "_cmpBlockedVendorsHash", n.NON_IAB_HASH_COOKIE_NAME = "_cmpNonIabVendorsHash", n.REPROMPT_OPTIONS_COOKIE_NAME = "_cmpRepromptOptions", n.NOT_VALID_CMP_IDS = [0, 1], n.MAX_VALID_CMP_ID = 299, n.COOKIE_MAX_AGE = 33696e3, n.CONSENT_STRING_VERSION = 1, n.BETA_MAX_VENDOR_ID = 4020, n.MARKDOWN_LINK_REGEX = /^\[(.+)\]\((http\:\/\/.+|https\:\/\/.+)\)$/, n.DEFAULT_LANGUAGE = "en", n.PERSISTENT_LINK_POSITIONS = {
        1: "top: 0; left: 0; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px;",
        2: "top: 0; right: 0; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px;",
        3: "bottom: 0; right: 0; border-top-left-radius: 3px; border-top-right-radius: 3px;",
        4: "bottom: 0; left: 0; border-top-left-radius: 3px; border-top-right-radius: 3px;"
    }, n.PERSISTENT_LINK_STYLE = "cursor: pointer; position: fixed; background-color: #368bd6; padding: 5px 15px; color: #FFFFFF; display: flex; align-items: center; max-height: 30px; z-index: 2147483640;", n.COG_SVG_ICON = '<svg width="16px" height="17px" viewBox="0 0 16 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-right: 5px; height: 17px;"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="cog" fill="#FFFFFF" fill-rule="nonzero"><path d="M15.596917,9.98326938 L14.5041079,9.33798816 C14.5728064,8.7815386 14.5728064,8.2184614 14.5041079,7.66201184 L15.596917,7.01673062 C15.9178229,6.82726259 16.0726124,6.43742732 15.9670848,6.0741546 C15.5912871,4.78033611 14.9223646,3.61573153 14.0390021,2.66061113 C13.7831755,2.38401797 13.3749053,2.32348965 13.0525249,2.51384881 L11.9613243,3.15813608 C11.5248519,2.81840117 11.0481221,2.53648663 10.542482,2.31910255 L10.542482,1.02991108 C10.542482,0.648438733 10.2860522,0.316869683 9.92305592,0.229024792 C8.66155,-0.07632446 7.33871809,-0.0763587342 6.07694408,0.229024792 C5.71398131,0.316869683 5.457518,0.648404458 5.457518,1.02991108 L5.457518,2.31910255 C4.95187406,2.53647872 4.47514334,2.81839382 4.03867572,3.15813608 L2.94747511,2.51384881 C2.62506122,2.32348965 2.21679094,2.38401797 1.96099786,2.66061113 C1.07763542,3.61573153 0.40871289,4.78037038 0.0329152236,6.0741546 C-0.072612407,6.43742732 0.0821770899,6.82722832 0.403082962,7.01673062 L1.49589212,7.66201184 C1.42719356,8.2184614 1.42719356,8.7815386 1.49589212,9.33798816 L0.403082962,9.98326938 C0.0821770899,10.1727374 -0.072612407,10.5625727 0.0329152236,10.9258454 C0.40871289,12.2196296 1.07763542,13.3842685 1.96099786,14.3393889 C2.21682445,14.615982 2.62509474,14.6765103 2.94747511,14.4861855 L4.03867572,13.8418982 C4.47514096,14.1816349 4.95187243,14.4635389 5.457518,14.6808975 L5.457518,15.9700889 C5.457518,16.3515613 5.7139478,16.6831303 6.07694408,16.7709752 C7.33848351,17.0763245 8.66128191,17.0763587 9.92305592,16.7709752 C10.2860187,16.6831303 10.542482,16.3515955 10.542482,15.9700889 L10.542482,14.6808975 C11.0481183,14.4635198 11.5248475,14.1816171 11.9613243,13.8418982 L13.0525249,14.4861855 C13.3749053,14.6765446 13.7831755,14.6160163 14.0390021,14.3393889 C14.9223646,13.3842685 15.5912871,12.2196296 15.9670848,10.9258454 C16.0726124,10.5625727 15.9178229,10.1727717 15.596917,9.98326938 Z M13.4026193,13.4264943 L11.8507364,12.510001 C10.9463288,13.3007421 10.6255905,13.4997041 9.47011484,13.9172673 L9.47011484,15.7502196 C8.50024808,15.9548373 7.49975192,15.9548373 6.52988516,15.7502196 L6.52988516,13.9172673 C5.4031959,13.5101235 5.07699522,13.3210668 4.14926358,12.510001 L2.59738075,13.4264943 C1.9368696,12.6693763 1.43490124,11.7817076 1.12525522,10.8230912 L2.67780828,9.90659789 C2.4588108,8.69270694 2.45871027,8.30790999 2.67780828,7.09340211 L1.12525522,6.17690879 C1.43490124,5.21829242 1.93690311,4.33058946 2.59738075,3.57312864 L4.14926358,4.49030745 C5.0667072,3.68712478 5.39129933,3.4941265 6.52988516,3.08269846 L6.52988516,1.24978037 C7.49971774,1.04482059 8.50028226,1.04482059 9.47011484,1.24978037 L9.47011484,3.08273274 C10.6087677,3.49419505 10.9333933,3.6872276 11.8507364,4.49034172 L13.4026193,3.57316291 C14.0630969,4.33058946 14.5650988,5.21829242 14.8747448,6.17694306 L13.3221917,7.09343638 C13.5412227,8.3076358 13.5412897,8.69212428 13.3221917,9.90663217 L14.8747448,10.8231255 C14.5650988,11.7817076 14.0631304,12.6694105 13.4026193,13.4264943 Z M8,5.20968958 C6.22607014,5.20968958 4.78289853,6.68570996 4.78289853,8.50001714 C4.78289853,10.3143243 6.22607014,11.7903447 8,11.7903447 C9.77392986,11.7903447 11.2171015,10.3143243 11.2171015,8.50001714 C11.2171015,6.68570996 9.77392986,5.20968958 8,5.20968958 Z M8,10.6935688 C6.81738009,10.6935688 5.85526568,9.70955526 5.85526568,8.50001714 C5.85526568,7.29047902 6.81738009,6.30646543 8,6.30646543 C9.18261991,6.30646543 10.1447343,7.29047902 10.1447343,8.50001714 C10.1447343,9.70955526 9.18261991,10.6935688 8,10.6935688 Z" id="Shape"></path></g></g></svg>', n.THIRD_PARTY_COOKIE_CHECK_TIMEOUT = 3e3, n.THIRD_PARTY_COOKIE_MARK = "_cmpQcif3pcsupported", n.COOKIE_TYPE = {
        GROUP: "GROUP",
        FIRST_PARTY: "1p",
        THIRD_PARTY: "3p",
        LOCAL_STORAGE: "LOCAL_STORAGE"
    }, n.COOKIE_ACCESS_IFRAME_ID = "_qc_cookie_access", n.COOKIE_ACCESS_IFRAME_TIMEOUT = 50
}, function(e, n, t) {
    "use strict";
    var o;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.initializeConfig = n.getConfig = n.isParentOrSameDomain = n.isParentOrSamePath = n.isConfigInitialized = n.config = void 0;
    var i = t(0),
        a = t(1),
        s = t(5);

    function r(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e
    }
    var l = n.config = {},
        c = (n.isConfigInitialized = !1, function(e) {
            return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
        }),
        d = n.isParentOrSamePath = function(e, n) {
            return !!n.match(new RegExp("^" + c(e) + ("/" === e[e.length - 1] ? "" : "($|/)")))
        },
        u = n.isParentOrSameDomain = function(e, n) {
            return !!n.match(new RegExp("(^|\\.)" + c(e) + "$"))
        },
        p = (r(o = {
            pCode: {
                publicConfigKey: "PCode",
                getDefaultValue: function() {
                    return null
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            googlePersonalization: {
                publicConfigKey: "Google Personalization",
                getDefaultValue: function() {
                    return !0
                },
                isValidValue: function(e) {
                    return "boolean" == typeof e
                },
                validValue: "a boolean"
            },
            displayUi: {
                publicConfigKey: "Display UI",
                getDefaultValue: function() {
                    return window.__cmp.gdprAppliesGlobally ? "always" : "inEU"
                },
                isValidValue: function(e) {
                    var n = !1;
                    return ["never", "inEU", "always"].forEach(function(t) {
                        t === e && (n = !0)
                    }), n
                },
                validValue: "one of 'never', 'inEU', or 'always'"
            },
            uiLayout: {
                publicConfigKey: "UI Layout",
                getDefaultValue: function() {
                    return "popup"
                },
                isValidValue: function(e) {
                    var n = !1;
                    return ["popup", "banner"].forEach(function(t) {
                        t === e && (n = !0)
                    }), n
                },
                validValue: "one of 'popup', or 'banner'"
            },
            vendorListUpdateFreq: {
                publicConfigKey: "Min Days Between UI Displays",
                getDefaultValue: function() {
                    return 30
                },
                isValidValue: i.isPositiveInt,
                validValue: "a positive integer"
            },
            nonconsentDisplayFrequency: {
                publicConfigKey: "Non-Consent Display Frequency",
                getDefaultValue: function() {
                    return 1
                },
                isValidValue: i.isPositiveInt,
                validValue: "a positive integer"
            },
            cookieDomain: {
                publicConfigKey: "Cookie Domain",
                getDefaultValue: function() {
                    return window.location.hostname
                },
                isValidValue: function(e) {
                    return u(e, window.location.hostname)
                },
                validValue: "a parent of, or equal to, the current domain"
            },
            cookiePath: {
                publicConfigKey: "Cookie Path",
                getDefaultValue: function() {
                    return "/"
                },
                isValidValue: function(e) {
                    return d(e, window.location.pathname)
                },
                validValue: "a parent of, or equal to, the current URL's path"
            },
            consentScope: {
                publicConfigKey: "Consent Scope",
                getDefaultValue: function() {
                    return "global"
                },
                isValidValue: function(e) {
                    return ["global", "service", "global group", "service group"].includes(e)
                },
                validValue: "one of 'global', 'service', 'global group', 'service group'",
                hasDependency: function() {
                    var e = p.groupCookieAccessHostUrl.isValidValue(l.groupCookieAccessHostUrl) || p.consentScopeGroupURL.isValidValue(l.consentScopeGroupURL);
                    return ["global", "service"].includes(l.consentScope) ? {
                        dependentConfig: null,
                        isValid: !0,
                        invalidValueMessage: ""
                    } : e ? {
                        dependentConfig: p.groupCookieAccessHostUrl.isValidValue(l.groupCookieAccessHostUrl) ? p.groupCookieAccessHostUrl.publicConfigKey : p.consentScopeGroupURL.publicConfigKey,
                        isValid: !0,
                        invalidValueMessage: ""
                    } : (l.consentScope = "global group" === l.consentScope ? "global" : "service", {
                        dependentConfig: p.consentScopeGroupURL.publicConfigKey,
                        isValid: !1,
                        invalidValueMessage: p.consentScopeGroupURL.publicConfigKey + " must be " + p.consentScopeGroupURL.validValue + " when " + this.publicConfigKey + " is 'global group', or 'service group'. Resetting it to " + l.consentScope
                    })
                }
            },
            consentScopeGroupURL: {
                publicConfigKey: "Consent Scope Group URL",
                getDefaultValue: function() {
                    return ""
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty domain",
                hasDependency: function() {
                    return ["global group", "service group"].includes(l.consentScope) ? {
                        dependentConfig: p.consentScope.publicConfigKey,
                        isValid: !0,
                        invalidValueMessage: ""
                    } : {
                        dependentConfig: p.consentScope.publicConfigKey,
                        isValid: !1,
                        invalidValueMessage: p.consentScope.publicConfigKey + " should be either 'global group', or 'service group' for Group Url to be effective. Group Url will be ignored"
                    }
                }
            },
            rejectConsentRedirectUrl: {
                publicConfigKey: "Post Consent Page",
                getDefaultValue: function() {
                    return null
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            publisherName: {
                publicConfigKey: "Publisher Name",
                getDefaultValue: function() {
                    return "[Company Name]"
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            publisherPurposeIds: {
                publicConfigKey: "Publisher Purpose IDs",
                getDefaultValue: function() {
                    return []
                },
                isValidValue: function(e) {
                    return (0, i.isArray)(e) && e.reduce(function(e, n) {
                        return e && (0, i.isPositiveInt)(n)
                    }, !0)
                },
                validValue: "an array containing purpose ids"
            },
            publisherPurposeLegitimateInterestIds: {
                publicConfigKey: "Publisher Purpose Legitimate Interest IDs",
                getDefaultValue: function() {
                    return []
                },
                isValidValue: function(e) {
                    return (0, i.isArray)(e) && e.reduce(function(e, n) {
                        return e && (0, i.isPositiveInt)(n)
                    }, !0)
                },
                validValue: "an array containing only purpose ids listed in the Publisher Purpose IDs array",
                hasDependency: function() {
                    return l.publisherPurposeLegitimateInterestIds.every(function(e) {
                        return l.publisherPurposeIds.includes(e)
                    }) ? {
                        dependentConfig: p.publisherPurposeIds.publicConfigKey,
                        isValid: !0,
                        invalidValueMessage: ""
                    } : {
                        dependentConfig: p.publisherPurposeIds.publicConfigKey,
                        isValid: !1,
                        invalidValueMessage: "Publisher Purpose Legitimate Interest IDs must be an array containing only purpose IDs contained in the Publisher Purpose IDs array, the following purpose IDs will be ignored: " + l.publisherPurposeLegitimateInterestIds.filter(function(e) {
                            if (!l.publisherPurposeIds.includes(e)) return e
                        }).join(", ")
                    }
                }
            },
            publisherLogo: {
                publicConfigKey: "Publisher Logo",
                getDefaultValue: function() {
                    return ""
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            displayPersistentConsentLink: {
                publicConfigKey: "Display Persistent Consent Link",
                getDefaultValue: function() {
                    return !0
                },
                isValidValue: function(e) {
                    return "boolean" == typeof e
                },
                validValue: "a boolean"
            },
            softOptInEnabled: {
                publicConfigKey: "Soft Opt-in Enabled",
                getDefaultValue: function() {
                    return !1
                },
                isValidValue: function(e) {
                    return "boolean" == typeof e
                },
                validValue: "a boolean"
            },
            persistentConsentLinkLocation: {
                publicConfigKey: "Persistent Consent Link Location",
                getDefaultValue: function() {
                    return 3
                },
                isValidValue: function(e) {
                    return [1, 2, 3, 4].includes(e)
                },
                validValue: "one of the following values: {1, 2, 3, 4}"
            },
            defaultToggleValue: {
                publicConfigKey: "Default Value for Toggles",
                getDefaultValue: function() {
                    return "off"
                },
                isValidValue: function(e) {
                    return ["on", "off"].indexOf(e) >= 0
                },
                validValue: "one of either 'on', or 'off'"
            },
            language: {
                publicConfigKey: "Language",
                getValue: function(e) {
                    return e.toLowerCase()
                },
                getDefaultValue: function() {
                    return a.DEFAULT_LANGUAGE
                },
                isValidValue: function(e) {
                    return !(!e || !s.IAB_SUPPORTED_LANGUAGES.includes(e.toLowerCase()) && !s.QC_SUPPORTED_LANGUAGES.includes(e.toLowerCase()))
                },
                validValue: "one of the following languages: {" + s.IAB_SUPPORTED_LANGUAGES + "}"
            },
            softOptInAlertTitle: {
                publicConfigKey: "Soft Opt-in Alert Title Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "SOFT_OPT_IN_ALERT_TITLE_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            softOptInAlertBody: {
                publicConfigKey: "Soft Opt-in Alert Body Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "SOFT_OPT_IN_ALERT_BODY_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenTitle: {
                publicConfigKey: "Initial Screen Title Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_TITLE_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenBodyTextOption: {
                publicConfigKey: "Initial Screen Body Text Option",
                getDefaultValue: function() {
                    return 1
                },
                isValidValue: function(e) {
                    return [1, 2, 3, 4].includes(e)
                },
                validValue: "one of the following values: {1, 2, 3, 4}"
            },
            initScreenBody: {
                publicConfigKey: "Initial Screen Body Text",
                getDefaultValue: function() {
                    return l.publisherName + " and our partners use technology such as cookies on our site to personalize content and ads, provide social media features, and analyze our traffic. Click below to consent to the use of this technology by " + l.publisherName + " and these 3rd parties across the web. You can change your mind and revisit your consent choices at anytime by returning to this site."
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            customInitScreenBodyText: {
                publicConfigKey: "Custom Initial Screen Body Text",
                getDefaultValue: function() {
                    return ""
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenRejectButton: {
                publicConfigKey: "Initial Screen Reject Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_REJECT_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenRejectButtonAsLink: {
                publicConfigKey: "Display No Button as Link",
                getDefaultValue: function() {
                    return !1
                },
                isValidValue: function(e) {
                    return "boolean" == typeof e
                },
                validValue: "a boolean"
            },
            initScreenRejectButtonShowing: {
                publicConfigKey: "No Option",
                getDefaultValue: function() {
                    return !0
                },
                isValidValue: function(e) {
                    return "boolean" == typeof e
                },
                validValue: "a boolean"
            },
            initScreenSettingsButton: {
                publicConfigKey: "Initial Screen Settings Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_SETTINGS_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenAcceptButton: {
                publicConfigKey: "Initial Screen Accept Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_ACCEPT_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenPurposeLink: {
                publicConfigKey: "Initial Screen Purpose Link Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_PURPOSE_LINK_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenCustomLinks: {
                publicConfigKey: "Custom Links Displayed on Initial Screen",
                getDefaultValue: function() {
                    return []
                },
                isValidValue: function(e) {
                    return e.length <= 2 && e.every(function(e) {
                        return (0, i.isValidMarkdownLink)(e)
                    })
                },
                validValue: 'an array of 2 or fewer markdown links: "[link text](url)"'
            },
            initScreenAttributionText: {
                publicConfigKey: "Initial Screen Attribution Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_ATTRIBUTION_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenHeaderTitle: {
                publicConfigKey: "Purpose Screen Header Title Text",
                getDefaultValue: function() {
                    return "Privacy Settings"
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenTitle: {
                publicConfigKey: "Purpose Screen Title Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PURPOSE_SCREEN_TITLE_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenBody: {
                publicConfigKey: "Purpose Screen Body Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PURPOSE_SCREEN_BODY_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenEnableAllButtonLabel: {
                publicConfigKey: "Purpose Screen Enable All Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "ACCEPT_ALL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenDisableAllButtonLabel: {
                publicConfigKey: "Purpose Screen Disable All Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "REJECT_ALL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenVendorLink: {
                publicConfigKey: "Purpose Screen Vendor Link Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PURPOSE_SCREEN_VENDOR_LINK_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenCancelButton: {
                publicConfigKey: "Purpose Screen Cancel Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PURPOSE_SCREEN_CANCEL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenSaveAndExitButton: {
                publicConfigKey: "Purpose Screen Save and Exit Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenTitle: {
                publicConfigKey: "Vendor Screen Title Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "VENDOR_SCREEN_TITLE_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenBody: {
                publicConfigKey: "Vendor Screen Body Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "VENDOR_SCREEN_BODY_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenRejectAllButton: {
                publicConfigKey: "Vendor Screen Reject All Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "REJECT_ALL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenAcceptAllButton: {
                publicConfigKey: "Vendor Screen Accept All Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "ACCEPT_ALL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenPurposesLink: {
                publicConfigKey: "Vendor Screen Purposes Link Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "VENDOR_SCREEN_PURPOSES_LINK_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenCancelButton: {
                publicConfigKey: "Vendor Screen Cancel Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "VENDOR_SCREEN_CANCEL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenSaveAndExitButton: {
                publicConfigKey: "Vendor Screen Save and Exit Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorWhiteBlackList: {
                publicConfigKey: "Vendor White List or Black List",
                getDefaultValue: function() {
                    return {}
                },
                isValidValue: function(e) {
                    if (void 0 === e.isWhitelist || "boolean" != typeof e.isWhitelist) return !1;
                    if (!(0, i.isArray)(e.vendorIds) || !e.vendorIds.length) return !1;
                    for (var n = 0; n < e.vendorIds.length; n++)
                        if (!(0, i.isPositiveInt)(e.vendorIds[n])) return !1;
                    return !0
                },
                validValue: "{ isWhitelist: <true/false>, vendorIds: <an array of vendor ID> }"
            },
            publisherVendorListUrl: {
                publicConfigKey: "Publisher Vendor List URL",
                getDefaultValue: function() {
                    return ""
                },
                isValidValue: i.isValidPublisherVendorListUrl,
                validValue: "a valid URL containing /.well-known/pubvendors.json"
            },
            nonIabVendorListUrl: {
                publicConfigKey: "Non IAB Vendor List URL",
                getDefaultValue: function() {
                    return ""
                },
                isValidValue: i.isValidNonIabVendorListUrl,
                validValue: "a valid URL containing /.well-known/noniab-vendorlist.json"
            },
            backLabel: {
                publicConfigKey: "Back Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "BACK_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            persistentConsentLinkLabel: {
                publicConfigKey: "Persistent Consent Link Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "CONSENT_LINK_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non empty string"
            },
            viewCompaniesLabel: {
                publicConfigKey: "View Companies Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "VIEW_COMPANIES_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            hideCompaniesLabel: {
                publicConfigKey: "Hide Companies Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "HIDE_COMPANIES_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            thirdPartyVendorsLabel: {
                publicConfigKey: "Third Party Vendors Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "THIRD_PARTY_VENDORS_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            onLabel: {
                publicConfigKey: "On Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "ON_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            offLabel: {
                publicConfigKey: "Off Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "OFF_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            offOnLabel: {
                publicConfigKey: "Off On Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "OFF_ON_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            companyLabel: {
                publicConfigKey: "Company Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "COMPANY_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            otherLabel: {
                publicConfigKey: "Other",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "OTHER")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            nonIabVendorsLabel: {
                publicConfigKey: "Non-IAB Vendors",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "NON_IAB_TITLE")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            googlePurposesText: {
                publicConfigKey: "Google purposes text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "GOOGLE_PURPOSES_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            featuresLabel: {
                publicConfigKey: "Feature Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "FEATURES_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            descriptionLabel: {
                publicConfigKey: "Description",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "DESCRIPTION")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            requiredLabel: {
                publicConfigKey: "Required Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "REQUIRED_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            privacyPolicyLabel: {
                publicConfigKey: "Privacy Policy Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PRIVACY_POLICY_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposesLabel: {
                publicConfigKey: "Purposes Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PURPOSES_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            }
        }, "featuresLabel", {
            publicConfigKey: "Features Label",
            getDefaultValue: function() {
                return (0, s.getTranslationOrDefault)(l.language, "FEATURES_LABEL")
            },
            isValidValue: i.isNonEmptyString,
            validValue: "a non-empty string"
        }), r(o, "legitimateInterestPurposesLabel", {
            publicConfigKey: "Legitimate Interest Purposes Label",
            getDefaultValue: function() {
                return (0, s.getTranslationOrDefault)(l.language, "LEGITIMATE_INTEREST_PURPOSES_LABEL")
            },
            isValidValue: i.isNonEmptyString,
            validValue: "a non-empty string"
        }), r(o, "groupCookieAccessHostUrl", {
            publicConfigKey: "Group Hosted HTML Cookie Access URL",
            getDefaultValue: function() {
                return null
            },
            isValidValue: i.isValidUrl,
            validValue: "a valid URL",
            hasDependency: function() {
                return ["global group", "service group"].includes(l.consentScope) ? {
                    dependentConfig: p.consentScope.publicConfigKey,
                    isValid: !0,
                    invalidValueMessage: ""
                } : {
                    dependentConfig: p.consentScope.publicConfigKey,
                    isValid: !1,
                    invalidValueMessage: p.consentScope.publicConfigKey + " should be either 'global group', or 'service group' for Group Hosted HTML Cookie Access URL to be effective. Group Hosted HTML Cookie Access URL will be ignored"
                }
            }
        }), o);
    n.getConfig = function() {
        var e = {};
        if ("external" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "external")) {
            for (var n in l) e[p[n].publicConfigKey] = l[n];
            return e
        }
        return l
    }, n.initializeConfig = function(e) {
        for (var t in e = e || {}, p) {
            var o = e[p[t].publicConfigKey];
            if (void 0 !== o)
                if (p[t].isValidValue(o)) void 0 !== p[t].getValue ? l[t] = p[t].getValue(o) : l[t] = o;
                else {
                    l[t] = p[t].getDefaultValue();
                    var i = p[t].publicConfigKey,
                        a = o + " is not a valid value for the config option " + i + ". ",
                        r = i + " must be " + p[t].validValue;
                    console.warn(a + r)
                }
            else l[t] = p[t].getDefaultValue()
        }
        for (var t in p)
            if (e[p[t].publicConfigKey] && p[t].hasDependency) {
                var c = p[t].hasDependency();
                c.isValid || console.warn("Dependency check failed for " + p[t].publicConfigKey + ": " + c.invalidValueMessage)
            }! function(e) {
            var n = e[p.initScreenBodyTextOption.publicConfigKey],
                t = e[p.language.publicConfigKey],
                o = e[p.initScreenBody.publicConfigKey];
            if (e[p.softOptInEnabled.publicConfigKey]) l.initScreenBody = (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_BODY_TEXT").softOptIn;
            else if (4 === n) {
                var i = JSON.parse(l.customInitScreenBodyText);
                l.initScreenBody = i[l.language], void 0 === l.initScreenBody && (l.initScreenBody = i.en)
            } else {
                if (p.initScreenBodyTextOption.isValidValue(n) && p.language.isValidValue(t)) return void(l.initScreenBody = (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_BODY_TEXT")[l.initScreenBodyTextOption]);
                p.initScreenBody.isValidValue(o) || (l.initScreenBody = l.initScreenBody = (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_BODY_TEXT")[l.initScreenBodyTextOption])
            }
        }(e), n.isConfigInitialized = !0
    };
    n.default = l
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = t(2),
        i = t(0),
        a = t(4),
        s = t(1),
        r = t(6),
        l = t(0),
        c = null,
        d = null,
        u = window.localStorage,
        p = {},
        E = {},
        m = {},
        T = !1,
        g = !1,
        _ = void 0,
        f = function(e, n, t, o) {
            if (n && n.trim()) {
                n = n.trim();
                var i = N(n);
                i.isNonGDPRCookie || i.isRepromptOptionsCookie ? v(n, t, o) : !T || i.isGlobalGroupVendorCookie || i.isNonGroupConsent ? null == e || "" === e ? v(n, t, o) : O(e, n, t, o) : k("set", n, t, o)
            } else "function" == typeof o && o({
                status: "error",
                message: "Cookie name cannot be empty"
            }, !1)
        },
        h = function(e, n, t) {
            if (n && n.trim())
                if (n = n.trim(), void 0 == p[n]) {
                    var o = N(n);
                    if (o.isNonGDPRCookie || o.isRepromptOptionsCookie) return b(n, t);
                    if (!T || o.isGlobalGroupVendorCookie || o.isNonGroupConsent) {
                        if (null == e || "" === e) return b(n, t);
                        y(e, n, t)
                    } else k("get", n, void 0, t)
                } else "function" == typeof t && t(p[n], !0);
            else "function" == typeof t && t({
                status: "error",
                message: "Cookie name cannot be empty"
            }, !1)
        },
        N = function(e) {
            var n = (0, o.getConfig)("internal");
            return {
                isNonGroupConsent: "service" === n.consentScope || "global" === n.consentScope,
                isGlobalGroupVendorCookie: e === s.VENDOR_CONSENT_COOKIE_NAME && "global group" === n.consentScope,
                isNonGDPRCookie: e === s.GOOGLE_CONSENT_COOKIE_NAME || e === s.NONIABVENDOR_CONSENT_COOKIE_NAME,
                isRepromptOptionsCookie: e === s.REPROMPT_OPTIONS_COOKIE_NAME
            }
        },
        v = function(e, n, t) {
            if (e && e.trim()) {
                e = e.trim();
                var i = new Date(Date.now() + 1e3 * s.COOKIE_MAX_AGE).toUTCString(),
                    a = (0, o.getConfig)("internal");
                document.cookie = e + "=" + n + ";path=" + a.cookiePath + ";max-age=" + s.COOKIE_MAX_AGE + ";expires=" + i + ";domain=" + a.cookieDomain, p[e] = {
                    value: n,
                    status: "found"
                }, (0, r.logSetCookieEvent)({
                    type: s.COOKIE_TYPE.FIRST_PARTY,
                    name: e,
                    value: n
                }), "function" == typeof t && t(p[e], !0)
            } else "function" == typeof t && t({
                status: "error",
                message: "empty cookie name"
            }, !1)
        },
        b = function(e, n) {
            if (e && e.trim()) {
                e = e.trim();
                var t = document.cookie.split(";").filter(function(n) {
                        return n.trim().startsWith(e + "=")
                    }).map(function(n) {
                        return n.trim().substring(e.length + 1)
                    }),
                    o = C(e, t);
                return p[e] = {
                    value: o,
                    status: o ? "found" : "notfound"
                }, "function" == typeof n && n(p[e], !0), p[e]
            }
            "function" == typeof n && n({
                status: "error",
                message: "empty cookie name"
            }, !1)
        },
        C = function(e, n) {
            var t;
            if ((0, i.isArray)(n) && 0 !== n.length) {
                if (e === s.VENDOR_CONSENT_COOKIE_NAME) t = a.VendorConsentAccess;
                else if (e === s.NONIABVENDOR_CONSENT_COOKIE_NAME) t = a.NonIabVendorConsentAccess;
                else if (e === s.PUBLISHER_CONSENT_COOKIE_NAME) t = a.PublisherConsentAccess;
                else if (e === s.GOOGLE_CONSENT_COOKIE_NAME) t = a.GoogleConsentAccess;
                else {
                    if (e !== s.REPROMPT_OPTIONS_COOKIE_NAME) return e === s.BLOCKED_HASH_COOKIE_NAME || e === s.NON_IAB_HASH_COOKIE_NAME ? n[0] : void 0;
                    t = a.RepromptOptionsAccess
                }
                for (var o, r, l = 0; l < n.length; l++) {
                    var c = new t,
                        d = n[l];
                    if (c.setAll(d)) {
                        var u = c.getLastUpdated();
                        (void 0 === o || u > o) && (o = u, r = d)
                    }
                }
                return r
            }
        },
        O = function(e, n, t, o) {
            if (e && n && n.trim()) {
                n = n.trim();
                var i = new XMLHttpRequest;
                i.onreadystatechange = function() {
                    I(n, t, i, o)
                }, i.open("POST", e), i.setRequestHeader("Content-Type", "application/json"), i.withCredentials = !0;
                var a = {};
                a[n] = t, i.send(JSON.stringify(a)), (0, r.logSetCookieEvent)({
                    type: s.COOKIE_TYPE.THIRD_PARTY,
                    name: n,
                    value: t
                })
            } else "function" == typeof o && o({
                status: "error",
                message: "Could not set cookie for " + n + " using api : " + e
            }, !1)
        },
        y = function(e, n, t) {
            e && n && n.trim() ? (n = n.trim(), E[n] ? E[n].push(t) : (E[n] = new i.CallbackArray, E[n].push(t), (0, i.getJson)({
                url: e,
                withCredentials: !0
            }, function(e) {
                S(n, e, function(e, t) {
                    E[n].call(e, t), E[n] = void 0
                })
            }))) : "function" == typeof t && t({
                status: "error",
                message: "Could not get cookie for " + n + " using api : " + e
            }, !1)
        },
        I = function(e, n, t, o) {
            if (4 === t.readyState) {
                var i, a = !0;
                if (200 === t.status ? i = p[e] = {
                        value: n,
                        status: "found"
                    } : ((0, l.logWarning)("Setting cookie for " + e + " with value " + n + " failed with httpRequest status", t.status), i = {
                        status: "error"
                    }, a = !1), 404 === t.status) return !1;
                "function" == typeof o && o(i, a)
            }
        },
        S = function(e, n, t) {
            if (4 === n.readyState) {
                var o, a = !0;
                if (200 === n.status) {
                    var s = {};
                    if ("string" == typeof n.response) try {
                        s = JSON.parse(n.response)
                    } catch (e) {
                        (0, i.logError)("error parsing cookie response", e)
                    } else s = n.response;
                    s ? o = s[e] ? p[e] = {
                        value: s[e],
                        status: "found"
                    } : p[e] = {
                        value: null,
                        status: "notfound"
                    } : (o = p[e] = {
                        value: void 0,
                        status: "error"
                    }, a = !1)
                } else 404 === n.status ? o = p[e] = {
                    value: null,
                    status: "notfound"
                } : ((0, i.logError)("error fetching cookie response for " + e + " with status ", n.status), o = p[e] = {
                    value: void 0,
                    status: "error"
                }, a = !1);
                "function" == typeof t && t(o, a)
            }
        },
        k = function e(n, t, o, i) {
            g ? L(n, t, o, i) : setTimeout(function() {
                e(n, t, o, i)
            }, s.COOKIE_ACCESS_IFRAME_TIMEOUT)
        },
        L = function(e, n, t, i) {
            var a = Math.random().toString(),
                r = {
                    callId: a,
                    __qcCmpCookieAccessCall: {
                        cmd: e,
                        cookieName: n
                    }
                },
                l = (0, o.getConfig)("internal");
            if ("set" === e) {
                m[a] = {
                    cb: i,
                    cookieName: n,
                    cookieValue: t
                };
                var c = new Date(Date.now() + 1e3 * s.COOKIE_MAX_AGE).toUTCString();
                r.__qcCmpCookieAccessCall.cookieValue = t, r.__qcCmpCookieAccessCall.cookiePath = l.cookiePath, r.__qcCmpCookieAccessCall.expires = c, p[n] = {
                    value: t,
                    status: "found"
                }
            } else m[a] = {
                cb: i,
                cookieName: n
            };
            _.contentWindow.postMessage(r, "*")
        },
        A = function(e, n) {
            var t = document.body,
                o = document.createElement("iframe");
            o.src = e, o.style.display = "none", o.id = n, t.appendChild(o), _ = o
        },
        R = function(e) {
            var n, t = "string" == typeof e.data,
                a = (0, o.getConfig)("internal");
            if ((n = t ? -1 !== e.data.indexOf("__qcCmpCookieAccessReturn") ? JSON.parse(e.data) : {} : e.data).__qcCmpCookieAccessReturn) {
                if (n.__qcCmpCookieAccessReturn.isHandlerRegistered) return void(g = !0);
                var l = n.__qcCmpCookieAccessReturn,
                    c = m[n.callId];
                if (c.cb) {
                    if ("get" === l.cmd) {
                        var d = l.isSuccess ? C(c.cookieName, l.cookies) : null;
                        p[c.cookieName] = {
                            value: d,
                            status: l.isSuccess && d ? "found" : "notfound"
                        }, (0, i.doCallback)(c.cb, p[c.cookieName], !0)
                    } else(0, i.doCallback)(c.cb, p[c.cookieName], !0);
                    delete m[n.callId]
                }(0, r.logSetCookieEvent)({
                    type: s.COOKIE_TYPE.GROUP,
                    name: c.cookieName,
                    value: c.cookieValue,
                    cookieDomain: a.cookieDomain
                })
            }
        },
        P = function(e, n, t, i) {
            var a = (0, o.getConfig)("internal");
            try {
                u.setItem(e, n), "function" == typeof t && t(u.getItem(e), null !== u.getItem(e) && "" !== u.getItem(e)), i && (document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; max-age=-1; domain=" + a.cookieDomain), (0, r.logSetCookieEvent)({
                    type: s.COOKIE_TYPE.LOCAL_STORAGE,
                    name: e,
                    value: n
                })
            } catch (o) {
                f(null, e, n, t)
            }
        },
        w = function(e, n) {
            var t = u.getItem(e),
                i = h(null, e, null),
                a = (0, o.getConfig)("internal");
            return t && "function" == typeof n ? (i && i.value && (document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; max-age=-1; domain=" + a.cookieDomain), n(t, null !== t && "" !== t)) : !t && i.value || t && i.value ? P(e, i.value, n, !0) : "function" == typeof n && n(null, !1), t || i.value
        },
        V = {
            isGlobalScope: !1,
            cookie: p,
            setPublisherConsentCookie: function(e, n) {
                e && e.trim() ? f(d, s.PUBLISHER_CONSENT_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty publisher purpose cookie value"
                }, !1)
            },
            fetchPublisherConsentCookie: function(e) {
                h(d, s.PUBLISHER_CONSENT_COOKIE_NAME, e)
            },
            setVendorConsentCookie: function(e, n) {
                e && e.trim() ? f(c, s.VENDOR_CONSENT_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty vendor purpose cookie value"
                }, !1)
            },
            fetchVendorConsentCookie: function(e) {
                h(c, s.VENDOR_CONSENT_COOKIE_NAME, e)
            },
            setGoogleConsentCookie: function(e, n) {
                e && e.trim() ? f(null, s.GOOGLE_CONSENT_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty google consent cookie value"
                }, !1)
            },
            setNonIabVendorCookie: function(e, n) {
                e && e.trim() ? f(null, s.NONIABVENDOR_CONSENT_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set nonIabVendor consent cookie value"
                }, !1)
            },
            fetchGoogleConsentCookie: function(e) {
                h(null, s.GOOGLE_CONSENT_COOKIE_NAME, e)
            },
            fetchNonIabConsentCookie: function(e) {
                h(null, s.NONIABVENDOR_CONSENT_COOKIE_NAME, e)
            },
            setNonIabVendorsHashValue: function(e, n) {
                e && e.trim() ? P(s.NON_IAB_HASH_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty vendor hash cookie value"
                }, !1)
            },
            fetchNonIabVendorsHashValue: function(e) {
                w(s.NON_IAB_HASH_COOKIE_NAME, e)
            },
            setBlockedVendorsHashValue: function(e, n) {
                e && e.trim() ? P(s.BLOCKED_HASH_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty vendor hash cookie value"
                }, !1)
            },
            fetchBlockedVendorsHashValue: function(e) {
                w(s.BLOCKED_HASH_COOKIE_NAME, e)
            },
            setRepromptOptionsValue: function(e, n) {
                e && e.trim() ? P(s.REPROMPT_OPTIONS_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty reprompt consent cookie value"
                }, !1)
            },
            fetchRepromptOptionsValue: function(e) {
                w(s.REPROMPT_OPTIONS_COOKIE_NAME, e)
            },
            init: function(e, n) {
                if (e && (e.groupCookieAccessHostUrl && (T = !0, window.addEventListener ? window.addEventListener("message", R, !1) : window.attachEvent("onmessage", R), A(e.groupCookieAccessHostUrl, s.COOKIE_ACCESS_IFRAME_ID)), n)) {
                    var t = T || e.consentScopeGroupURL && "" !== e.consentScopeGroupURL,
                        o = e.groupCookieAccessHostUrl || e.consentScopeGroupURL;
                    switch (e.consentScope) {
                        case "global group":
                            "" === e.publisherVendorListUrl ? (c = "https://api.quantcast.mgr.consensu.org/CookieAccess", this.isGlobalScope = !0) : t ? (c = o, this.isGlobalScope = !1) : (c = null, this.isGlobalScope = !1), d = t ? o : null;
                            break;
                        case "global":
                            "" === e.publisherVendorListUrl ? (c = "https://api.quantcast.mgr.consensu.org/CookieAccess", this.isGlobalScope = !0) : (c = null, this.isGlobalScope = !1), d = null;
                            break;
                        case "service group":
                            c = d = t ? o : null, this.isGlobalScope = !1;
                            break;
                        case "service":
                        default:
                            c = null, d = null, this.isGlobalScope = !1
                    }
                }
            }
        };
    n.default = V
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.PublisherConsentAccess = n.NonIabVendorConsentAccess = n.VendorConsentAccess = n.ConsentAccess = n.RepromptOptionsAccess = n.GoogleConsentAccess = void 0;
    var o = t(1),
        i = t(0),
        a = {
            CMP_ID: 10,
            LOWERCASE_START: "a".charCodeAt(0),
            PAD_ZEROS: "00000000000000000000000000000000000000000000000000",
            BITFIELD_ENCODING: 0,
            RANGES_ENCODING: 1
        },
        s = function() {
            this.binaryStr = "", this.addField = function(e, n, t) {
                var o = (e + 0 || 0).toString(2);
                if (o.length < n) o = a.PAD_ZEROS.substr(0, n - o.length) + o;
                else if (o.length > n) throw new Error("Encountered an overflow setting cookie field " + t);
                this.binaryStr += o
            }
        },
        r = function(e) {
            this.fieldSizes = e, this.fields = {}
        };
    r.prototype.build = function(e, n) {
        var t = this.encodeBinary(e, n),
            o = this.binaryToBytes(t);
        return this.toWebSafeBase64(o)
    }, r.prototype.setAll = function(e) {
        var n = this.fromWebSafeBase64(e),
            t = this.bytesToBinary(n);
        return this.decodeBinary(t)
    }, r.prototype.bytesToBinary = function(e) {
        for (var n = "", t = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"], o = function(e) {
                return t[e >>> 4 & 15] + t[15 & e]
            }, i = 0; i < e.length; i++) n += o(e.charCodeAt(i));
        return {
            string: n,
            atPos: 0,
            getBits: function(e) {
                var n = parseInt(this.string.substr(this.atPos, e), 2);
                return this.atPos += e, n
            }
        }
    }, r.prototype.binaryToBytes = function(e) {
        var n = "";
        e += a.PAD_ZEROS.substr(0, 7 - (e.length + 7) % 8);
        for (var t = 0; t < e.length; t += 8) n += String.fromCharCode(parseInt(e.substr(t, 8), 2));
        return n
    }, r.prototype.toWebSafeBase64 = function(e) {
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
    }, r.prototype.fromWebSafeBase64 = function(e) {
        return atob(e.replace(/-/g, "+").replace(/_/g, "/"))
    }, r.prototype.languageFromCookieValue = function(e) {
        return String.fromCharCode(a.LOWERCASE_START + e / 64 >>> 0) + String.fromCharCode(a.LOWERCASE_START + e % 64)
    }, r.prototype.languageToCookieValue = function(e) {
        return 64 * (e.charCodeAt(0) - a.LOWERCASE_START) + (e.charCodeAt(1) - a.LOWERCASE_START)
    }, r.prototype.dateFromDeciseconds = function(e) {
        return new Date(100 * e)
    }, r.prototype.dateToDeciseconds = function(e) {
        return Math.floor(e.getTime() / 100)
    }, r.prototype.decodeSharedFields = function(e) {
        var n = this.fieldSizes,
            t = e.getBits(n.version);
        if (t != o.CONSENT_STRING_VERSION) throw new Error("Cookie version " + t + " is not supported");
        var i = {
            version: t,
            created: this.dateFromDeciseconds(e.getBits(n.created)),
            lastUpdated: this.dateFromDeciseconds(e.getBits(n.lastUpdated)),
            cmpId: e.getBits(n.cmpId),
            cmpVersion: e.getBits(n.cmpVersion)
        };
        return i.cmpVersion >= Math.pow(2, n.cmpVersionOld) && (e.atPos -= n.cmpVersion, i.cmpVersion = e.getBits(n.cmpVersionOld)), i.consentScreen = e.getBits(n.consentScreen), i.consentLanguage = this.languageFromCookieValue(e.getBits(n.consentLanguage)), i.vendorListVersion = e.getBits(n.vendorListVersion), i
    }, r.prototype.encodeSharedFields = function(e) {
        var n = this.fieldSizes,
            t = new s;
        if (e.version != o.CONSENT_STRING_VERSION) throw new Error("version " + e.version + " not supported");
        return t.addField(e.version, n.version, "version"), t.addField(this.dateToDeciseconds(e.created), n.created, "created"), t.addField(this.dateToDeciseconds(e.lastUpdated), n.lastUpdated, "lastUpdated"), t.addField(e.cmpId, n.cmpId, "cmpId"), t.addField(e.cmpVersion, n.cmpVersion, "cmpVersion"), t.addField(e.consentScreen, n.consentScreen, "consentScreen"), t.addField(this.languageToCookieValue(e.consentLanguage || "en"), n.consentLanguage, "consentLanguage"), t.addField(e.vendorListVersion, n.vendorListVersion, "vendorListVersion"), t
    };
    var l = {
        created: 36,
        lastUpdated: 36,
        cmpId: 12,
        cmpVersion: 12,
        maxVendorId: 16
    };

    function c() {
        r.call(this, l)
    }
    c.prototype = Object.create(r.prototype), c.prototype.constructor = c, c.prototype.decodeBinary = function(e) {
        for (var n = this.fieldSizes, t = {
                created: this.dateFromDeciseconds(e.getBits(n.created)),
                lastUpdated: this.dateFromDeciseconds(e.getBits(n.lastUpdated)),
                cmpId: e.getBits(n.cmpId),
                cmpVersion: e.getBits(n.cmpVersion),
                maxVendorId: e.getBits(n.maxVendorId)
            }, o = t.maxVendorId, i = new Array(o + 1), a = 0; a < o; a++) i[a + 1] = "1" == e.string.charAt(e.atPos + a);
        return t.vendorConsents = i, t
    }, c.prototype.encodeBinary = function(e, n) {
        var t = this.fieldSizes,
            o = e.vendorConsents,
            i = new s;
        if (i.addField(this.dateToDeciseconds(e.created), t.created, "created"), i.addField(this.dateToDeciseconds(e.lastUpdated), t.lastUpdated, "lastUpdated"), i.addField(e.cmpId, t.cmpId, "cmpId"), i.addField(e.cmpVersion, t.cmpVersion, "cmpVersion"), n) return i.binaryStr;
        i.addField(e.maxVendorId, t.maxVendorId, "maxVendorId");
        for (var a = 1; a <= e.maxVendorId; a++) i.binaryStr += o[a] ? "1" : "0";
        return i.binaryStr
    };
    var d = {
        version: 6,
        created: 36,
        lastUpdated: 36,
        cmpId: 12,
        cmpVersion: 12,
        cmpVersionOld: 6,
        consentScreen: 6,
        consentLanguage: 12,
        vendorListVersion: 12,
        purposesAllowed: 24,
        maxVendorId: 16,
        encodingType: 1,
        numEntries: 12,
        defaultConsent: 1,
        isRange: 1,
        startVendorId: 16,
        endVendorId: 16
    };

    function u() {
        r.call(this, d)
    }
    u.prototype = Object.create(r.prototype), u.prototype.constructor = u, u.prototype.decodeBinary = function(e) {
        var n = this.fieldSizes,
            t = this.decodeSharedFields(e);
        t.purposesAllowed = e.getBits(n.purposesAllowed), t.maxVendorId = e.getBits(n.maxVendorId), t.encodingType = e.getBits(n.encodingType);
        var o = t.maxVendorId,
            i = new Array(o + 1);
        if (t.encodingType == a.BITFIELD_ENCODING) {
            var s = e.string.length - e.atPos;
            if (s < o) throw new Error("Incorrect bitfield size: " + s + " < " + o);
            for (var r = 0; r < o; r++) i[r + 1] = "1" == e.string.charAt(e.atPos + r)
        } else {
            t.defaultConsent = 1 == e.getBits(n.defaultConsent);
            for (r = 0; r < o; r++) i[r + 1] = t.defaultConsent;
            t.numEntries = e.getBits(n.numEntries);
            for (r = 0; r < t.numEntries; r++) {
                var l = 1 == e.getBits(n.isRange),
                    c = e.getBits(n.startVendorId),
                    d = l ? e.getBits(n.endVendorId) : c;
                if (e.atPos > e.string.length) throw new Error("Not enough bits for numEntries in ranges");
                if (c > d || d > o) throw new Error("Invalid vendorId range: " + c + "-" + d + ". The max valid vendorId is: " + o);
                for (var u = c; u <= d; u++) i[u] = !t.defaultConsent
            }
        }
        return t.vendorConsents = i, t
    }, u.prototype.encodeRanges = function(e) {
        for (var n, t, o = this.fieldSizes, i = new s, a = e.vendorConsents, r = !!a[1], l = !1, c = e.maxVendorId, d = 0, u = 2; u <= c; u++) {
            var p = !!a[u] != !!r;
            if (p && (l || (n = u, l = !0), t = u), l && (!p || u == c)) {
                d++;
                var E = t > n;
                if (i.addField(E ? 1 : 0, o.isRange, "isRange"), i.addField(n, o.startVendorId, "startVendorId"), E && i.addField(t, o.endVendorId, "endVendorId"), 13 + i.binaryStr.length > c) return null;
                l = !1
            }
        }
        return {
            binary: i,
            defaultConsent: r ? 1 : 0,
            numEntries: d
        }
    }, u.prototype.encodeBinary = function(e, n) {
        var t = this.fieldSizes,
            o = e.vendorConsents,
            i = this.encodeSharedFields(e);
        if (n) return i.binaryStr;
        i.addField(e.purposesAllowed, t.purposesAllowed, "purposesAllowed"), i.addField(e.maxVendorId, t.maxVendorId, "maxVendorId");
        var s = this.encodeRanges(e);
        if (e.encodingType = s ? a.RANGES_ENCODING : a.BITFIELD_ENCODING, i.addField(e.encodingType, t.encodingType, "encodingType"), e.encodingType == a.BITFIELD_ENCODING)
            for (var r = 1; r <= e.maxVendorId; r++) i.binaryStr += o[r] ? "1" : "0";
        else e.defaultConsent = s.defaultConsent, e.numEntries = s.numEntries, i.addField(e.defaultConsent, t.defaultConsent, "defaultConsent"), i.addField(e.numEntries, t.numEntries, "numEntries"), i.binaryStr += s.binary.binaryStr;
        return i.binaryStr
    };
    var p = {
        created: 36,
        lastUpdated: 36,
        consentValue: 1
    };

    function E() {
        r.call(this, p)
    }
    E.prototype = Object.create(r.prototype), E.prototype.constructor = E, E.prototype.encodeRanges = function(e) {
        return {
            binary: new s,
            consentValue: e.consentValue ? 1 : 0
        }
    }, E.prototype.encodeBinary = function(e, n) {
        var t = this.fieldSizes,
            o = new s;
        if (o.addField(this.dateToDeciseconds(e.created), t.created, "created"), o.addField(this.dateToDeciseconds(e.lastUpdated), t.lastUpdated, "lastUpdated"), n) return o.binaryStr;
        var i = this.encodeRanges(e);
        return e.consentValue = i.consentValue, o.addField(e.consentValue, t.consentValue, "consentValue"), o.binaryStr += i.binary.binaryStr, o.binaryStr
    }, E.prototype.decodeBinary = function(e) {
        var n = this.fieldSizes;
        return {
            created: this.dateFromDeciseconds(e.getBits(n.created)),
            lastUpdated: this.dateFromDeciseconds(e.getBits(n.lastUpdated)),
            consentValue: e.getBits(n.consentValue)
        }
    };
    var m = n.GoogleConsentAccess = function() {
        this.data = new E, this.fields = {}
    };
    m.prototype.getConsentValue = function() {
        return this.fields.consentValue
    }, m.prototype.getCreated = function() {
        return this.fields.created
    }, m.prototype.getLastUpdated = function() {
        return this.fields.lastUpdated
    }, m.prototype.setConsentValue = function(e) {
        this.fields.consentValue = e
    }, m.prototype.initializeFields = function(e) {
        void 0 === this.fields.created && (this.fields.created = new Date), (e || void 0 === this.fields.lastUpdated) && (this.fields.lastUpdated = new Date)
    }, m.prototype.build = function() {
        return this.initializeFields(!0), this.data.build(this.fields, !1)
    };
    var T = {};
    m.prototype.setAll = function(e) {
        var n = !0;
        if (!e) return !1;
        if (T[e]) this.fields = T[e];
        else try {
            this.fields = this.data.setAll(e), T[e] = this.fields
        } catch (t) {
            (0, i.logError)("Error parsing cookie: " + e, t), n = !1
        }
        return n
    }, m.prototype.getMetadata = function(e) {
        return e ? (this.initializeFields(!1), this.data.build(this.fields, !0)) : {
            consentValue: this.fields.consentValue,
            created: this.fields.created,
            lastUpdated: this.fields.lastUpdated
        }
    };
    var g = {
        created: 36,
        lastUpdated: 36,
        initScreenBodyTextOption: 3
    };

    function _() {
        r.call(this, g)
    }
    _.prototype = Object.create(r.prototype), _.prototype.constructor = _, _.prototype.encodeRanges = function(e) {
        return {
            binary: new s,
            initScreenBodyTextOption: e.initScreenBodyTextOption
        }
    }, _.prototype.encodeBinary = function(e, n) {
        var t = this.fieldSizes,
            o = new s;
        if (o.addField(this.dateToDeciseconds(e.created), t.created, "created"), o.addField(this.dateToDeciseconds(e.lastUpdated), t.lastUpdated, "lastUpdated"), n) return o.binaryStr;
        var i = this.encodeRanges(e);
        return e.initScreenBodyTextOption = i.initScreenBodyTextOption, o.addField(e.initScreenBodyTextOption, t.initScreenBodyTextOption, "initScreenBodyTextOption"), o.binaryStr += i.binary.binaryStr, o.binaryStr
    }, _.prototype.decodeBinary = function(e) {
        var n = this.fieldSizes;
        return {
            created: this.dateFromDeciseconds(e.getBits(n.created)),
            lastUpdated: this.dateFromDeciseconds(e.getBits(n.lastUpdated)),
            initScreenBodyTextOption: e.getBits(n.initScreenBodyTextOption)
        }
    };
    var f = n.RepromptOptionsAccess = function() {
        this.data = new _, this.fields = {}
    };
    f.prototype.getInitScreenBodyTextOption = function() {
        return this.fields.initScreenBodyTextOption
    }, f.prototype.getCreated = function() {
        return this.fields.created
    }, f.prototype.getLastUpdated = function() {
        return this.fields.lastUpdated
    }, f.prototype.setInitScreenBodyTextOption = function(e) {
        this.fields.initScreenBodyTextOption = e
    }, f.prototype.initializeFields = function(e) {
        void 0 === this.fields.created && (this.fields.created = new Date), (e || void 0 === this.fields.lastUpdated) && (this.fields.lastUpdated = new Date)
    }, f.prototype.build = function() {
        return this.initializeFields(!0), this.data.build(this.fields, !1)
    };
    var h = {};
    f.prototype.setAll = function(e) {
        var n = !0;
        if (!e) return !1;
        if (h[e]) this.fields = h[e];
        else try {
            this.fields = this.data.setAll(e), h[e] = this.fields
        } catch (t) {
            (0, i.logError)("Error parsing cookie: " + e, t), n = !1
        }
        return n
    }, f.prototype.getMetadata = function(e) {
        return e ? (this.initializeFields(!1), this.data.build(this.fields, !0)) : {
            initScreenBodyTextOption: this.fields.initScreenBodyTextOption,
            created: this.fields.created,
            lastUpdated: this.fields.lastUpdated
        }
    };
    var N = n.ConsentAccess = function(e, n) {
        this.data = e, this.fields = n
    };
    N.prototype.getVersion = function() {
        return this.fields.version
    }, N.prototype.getCreated = function() {
        return this.fields.created
    }, N.prototype.getLastUpdated = function() {
        return this.fields.lastUpdated
    }, N.prototype.getCmpId = function() {
        return this.fields.cmpId
    }, N.prototype.getCmpVersion = function() {
        return this.fields.cmpVersion
    }, N.prototype.getConsentScreen = function() {
        return this.fields.consentScreen
    }, N.prototype.setConsentScreen = function(e) {
        this.fields.consentScreen = e
    }, N.prototype.getVendorListVersion = function() {
        return this.fields.vendorListVersion
    }, N.prototype.setVendorListVersion = function(e) {
        this.fields.vendorListVersion = e
    }, N.prototype._setPurposeConsent = function(e, n, t) {
        var o = 1 << this.data.fieldSizes[t] - n;
        this.fields[t] = e ? this.fields[t] | o : this.fields[t] & ~o
    }, N.prototype._getPurposeConsent = function(e, n) {
        var t = this.data.fieldSizes;
        if (e) {
            var o = 1 << t[n] - e;
            return 0 != (this.fields[n] & o)
        }
        for (var i = {}, a = 1; a < t[n] + 1; a++) {
            o = 1 << t[n] - a;
            i[a] = 0 != (this.fields[n] & o)
        }
        return i
    }, N.prototype.initializeFields = function(e) {
        (e || void 0 === this.fields.version) && (this.fields.version = o.CONSENT_STRING_VERSION), (e || void 0 === this.fields.cmpId) && (this.fields.cmpId = a.CMP_ID), (e || void 0 === this.fields.cmpVersion) && (this.fields.cmpVersion = 25), void 0 === this.fields.created && (this.fields.created = new Date), (e || void 0 === this.fields.lastUpdated) && (this.fields.lastUpdated = new Date)
    }, N.prototype.build = function() {
        return this.initializeFields(!0), this.data.build(this.fields, !1)
    };
    var v = {};
    N.prototype.setAll = function(e) {
        var n = !0;
        if (!e) return !1;
        if (v[e]) this.fields = v[e];
        else try {
            this.fields = this.data.setAll(e), v[e] = this.fields
        } catch (t) {
            (0, i.logError)("Error parsing cookie: " + e, t), n = !1
        }
        return n
    }, N.prototype.getMetadata = function(e) {
        return e ? (this.initializeFields(!1), this.data.build(this.fields, !0)) : {
            version: this.fields.version,
            created: this.fields.created,
            lastUpdated: this.fields.lastUpdated,
            cmpId: this.fields.cmpId,
            cmpVersion: this.fields.cmpVersion,
            consentScreen: this.fields.consentScreen,
            consentLanguage: this.fields.consentLanguage,
            vendorListVersion: this.fields.vendorListVersion
        }
    };
    var b = n.VendorConsentAccess = function() {
        N.call(this, new u, {
            vendorConsents: []
        })
    };
    b.prototype = Object.create(N.prototype), b.prototype.constructor = b, b.prototype.setPurposeConsent = function(e, n) {
        this._setPurposeConsent(e, n, "purposesAllowed")
    }, b.prototype.getPurposeConsent = function(e) {
        return this._getPurposeConsent(e, "purposesAllowed")
    }, b.prototype.getMaxVendorId = function(e) {
        return this.fields.maxVendorId
    }, b.prototype.setMaxVendorId = function(e) {
        this.fields.maxVendorId = e
    }, b.prototype.getVendorConsent = function(e) {
        if (!(e > this.fields.maxVendorId)) return e ? !!this.fields.vendorConsents[e] : this.fields.vendorConsents
    }, b.prototype.setVendorConsent = function(e, n) {
        this.fields.vendorConsents[n] = !!e
    };
    var C = n.NonIabVendorConsentAccess = function() {
        N.call(this, new c, {
            vendorConsents: []
        })
    };
    C.prototype = Object.create(N.prototype), C.prototype.constructor = C, C.prototype.getMaxVendorId = function(e) {
        return this.fields.maxVendorId
    }, C.prototype.setMaxVendorId = function(e) {
        this.fields.maxVendorId = e
    }, C.prototype.getVendorConsent = function(e) {
        return !(e > this.fields.maxVendorId) && (e ? !!this.fields.vendorConsents[e] : this.fields.vendorConsents)
    }, C.prototype.setVendorConsent = function(e, n) {
        this.fields.vendorConsents[n] = !!e
    };
    var O = {
        version: 6,
        created: 36,
        lastUpdated: 36,
        cmpId: 12,
        cmpVersion: 12,
        cmpVersionOld: 6,
        consentScreen: 6,
        consentLanguage: 12,
        vendorListVersion: 12,
        publisherPurposesVersion: 12,
        standardPurposesAllowed: 24,
        numberCustomPurposes: 6
    };

    function y() {
        r.call(this, O)
    }
    y.prototype = Object.create(r.prototype), y.prototype.constructor = y, y.prototype.decodeBinary = function(e) {
        var n = this.fieldSizes,
            t = this.decodeSharedFields(e);
        t.publisherPurposesVersion = e.getBits(n.publisherPurposesVersion), t.standardPurposesAllowed = e.getBits(n.standardPurposesAllowed), t.numberCustomPurposes = e.getBits(n.numberCustomPurposes);
        for (var o = new Array(t.numberCustomPurposes + 1), i = 0; i < t.numberCustomPurposes; i++) o[i + 1] = "1" == e.string.charAt(e.atPos + i);
        return t.customPurposeConsents = o, t
    }, y.prototype.encodeBinary = function(e, n) {
        var t = this.fieldSizes,
            o = this.encodeSharedFields(e);
        if (o.addField(e.publisherPurposesVersion, t.publisherPurposesVersion, "publisherPurposesVersion"), n) return o.binaryStr;
        o.addField(e.standardPurposesAllowed, t.standardPurposesAllowed, "standardPurposesAllowed"), o.addField(e.numberCustomPurposes, t.numberCustomPurposes, "numberCustomPurposes");
        for (var i = 1; i <= e.numberCustomPurposes; i++) o.binaryStr += e.customPurposeConsents[i] ? "1" : "0";
        return o.binaryStr
    };
    var I = n.PublisherConsentAccess = function() {
        N.call(this, new y, {
            customPurposeConsents: []
        })
    };
    I.prototype = Object.create(N.prototype), I.prototype.constructor = I, I.prototype.setStandardPurposeConsent = function(e, n) {
        this._setPurposeConsent(e, n, "standardPurposesAllowed")
    }, I.prototype.getStandardPurposeConsent = function(e) {
        return this._getPurposeConsent(e, "standardPurposesAllowed")
    }, I.prototype.getNumberCustomPurposes = function() {
        return this.fields.numberCustomPurposes
    }, I.prototype.setNumberCustomPurposes = function(e) {
        this.fields.numberCustomPurposes = e
    }, I.prototype.setCustomPurposeConsent = function(e, n) {
        this.fields.customPurposeConsents[n] = !!e
    }, I.prototype.getCustomPurposeConsent = function(e) {
        return !!this.fields.customPurposeConsents[e]
    }
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.TRANSLATIONS = n.getTranslationOrDefault = n.QC_SUPPORTED_LANGUAGES = n.IAB_SUPPORTED_LANGUAGES = void 0;
    var o = t(1),
        i = (n.IAB_SUPPORTED_LANGUAGES = ["bg", "cs", "da", "de", "el", "en", "es", "et", "fi", "fr", "ga", "hr", "hu", "it", "lt", "lv", "mt", "nl", "no", "pl", "pt", "ro", "sk", "sl", "sv"], n.QC_SUPPORTED_LANGUAGES = ["da", "de", "el", "en", "es", "fi", "fr", "hu", "it", "nl", "no", "pl", "pt", "ro", "sk", "sv", "ru", "ar", "fa"], n.getTranslationOrDefault = function(e, n) {
            return i[e] && i[e][n] ? i[e][n] : i[o.DEFAULT_LANGUAGE][n]
        }, n.TRANSLATIONS = {
            en: {
                INIT_SCREEN_TITLE_TEXT: "We value your privacy",
                INIT_SCREEN_BODY_TEXT: {
                    1: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site.",
                    2: "We and our partners process your personal data, such as IP addresses and cookie identifiers, using technology such as cookies in order to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Click below to consent or to choose which Partners process your data and for what Purposes. You can make changes to your settings at any time.",
                    3: "The quality content and information we provide to you depends on the revenue we generate from advertising. We and our partners use your personal data, such as IP addresses and cookie identifiers, in order to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Click below to consent to the use of cookies and the processing of your data. You can revisit your choices at any time.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "MORE OPTIONS",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "I do not accept",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "I accept",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Show Purposes",
                INIT_SCREEN_ATTRIBUTION_TEXT: "Powered by",
                PURPOSE_SCREEN_TITLE_TEXT: "We value your privacy",
                PURPOSE_SCREEN_BODY_TEXT: "You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "See Vendors",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Cancel",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Save & Exit",
                VENDOR_SCREEN_TITLE_TEXT: "We value your privacy",
                VENDOR_SCREEN_BODY_TEXT: "You can set consent preferences for individual third-party partners we work with below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policy links for more information and to object to such processing.",
                REJECT_ALL_BUTTON_TEXT: "Reject all",
                ACCEPT_ALL_BUTTON_TEXT: "Accept all",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Back to Purposes",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Cancel",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Save & Exit",
                CONSENT_LINK_LABEL: "Privacy",
                BACK_LABEL: "Back",
                VIEW_COMPANIES_LABEL: "View Companies",
                HIDE_COMPANIES_LABEL: "Hide Companies",
                THIRD_PARTY_VENDORS_LABEL: "Third Party Vendors",
                ON_LABEL: "On",
                OFF_LABEL: "Off",
                OFF_ON_LABEL: "Off/On",
                OTHER: "Other",
                COMPANY_LABEL: "Company",
                NON_IAB_TITLE: "Non-IAB Vendors",
                DESCRIPTION: "Vendor Description:",
                REQUIRED_LABEL: "Required",
                PRIVACY_POLICY_LABEL: "Privacy Policy: ",
                PURPOSES_LABEL: "Purposes (Consent)",
                FEATURES_LABEL: "Features",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Purposes (Legitimate Interests)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong> button.",
                GOOGLE_PURPOSES_TEXT: "Allow Google and their technology partners to collect data and use cookies for ad personalisation and measurement."
            },
            fr: {
                INIT_SCREEN_TITLE_TEXT: "Le respect de votre vie privée est notre priorité",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Nos partenaires et nous-mêmes exploitons différentes technologies, telles que celle des cookies, et traitons vos données à caractère personnel, telles que les adresses IP et les identifiants de cookie, afin de personnaliser les publicités et les contenus en fonction de vos centres d’intérêt, d’évaluer la performance de ces publicités et contenus, et de recueillir des informations sur les publics qui les ont visionnés. Cliquez ci-dessous si vous consentez à l’utilisation de cette technologie et au traitement de vos données à caractère personnel en vue de ces objectifs. Vous pouvez changer d’avis et modifier votre consentement à tout moment en revenant sur ce site.",
                    2: "Nos partenaires et nous-mêmes traitons vos données à caractère personnel, telles que les adresses IP et les identifiants de cookie, et exploitons différentes technologies, telles que celle des cookies, afin de personnaliser les publicités et les contenus en fonction de vos centres d’intérêt, d’évaluer la performance de ces publicités et contenus, et de recueillir des informations sur les publics qui les ont visionnés. Cliquez ci-dessous si vous consentez au traitement de vos données ou si vous désirez choisir les partenaires qui pourront les traiter et à quelles fins. Vous pouvez modifier vos paramètres à tout moment.",
                    3: "Les informations et le contenu relatifs à la qualité que nous vous communiquons dépendent des revenus générés par notre publicité. Nos partenaires et nous-mêmes exploitons vos données à caractère personnel, telles que les adresses IP et les identifiants de cookie, afin de personnaliser les publicités et les contenus en fonction de vos centres d’intérêt, d’évaluer la performance de ces publicités et contenus, et de recueillir des informations sur les différents publics qui les ont visionnés. Cliquez ci-dessous si vous consentez à l’utilisation des cookies et au traitement de vos données. Vous pouvez revenir sur votre choix à tout moment.",
                    softOptIn: "Nos partenaires et nous-mêmes exploitons différentes technologies, telles que celle des cookies, et traitons vos données à caractère personnel, telles que les adresses IP et les identifiants de cookie, afin de personnaliser les publicités et les contenus en fonction de vos centres d’intérêt, d’évaluer la performance de ces publicités et contenus, et de recueillir des informations sur les publics qui les ont visionnés. Poursuivre la navigation sur ce site ou cliquer sur le bouton d’acceptation signifie que vous consentez à l’utilisation de cette technologie et au traitement de vos données à caractère personnel en vue de ces objectifs. Vous pouvez changer d’avis et modifier votre consentement à tout moment en revenant sur ce site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "PLUS D'OPTIONS",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "JE N’ACCEPTE PAS",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "J'accepte",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Afficher les objectifs",
                INIT_SCREEN_ATTRIBUTION_TEXT: "Powered by",
                PURPOSE_SCREEN_TITLE_TEXT: "Le respect de votre vie privée est notre priorité",
                PURPOSE_SCREEN_BODY_TEXT: "Vous pouvez définir ci-dessous vos préférences de consentement et déterminer la manière dont vous souhaitez que vos données soient utilisées en fonction des objectifs mentionnés. Vous pouvez définir vos préférences pour notre société, indépendamment de celles de nos partenaires tiers. Chaque objectif est décrit afin que vous sachiez comment nos partenaires et nous-mêmes exploitons vos données.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Consulter les fournisseurs",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Annuler",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Enregistrer et quitter",
                VENDOR_SCREEN_TITLE_TEXT: "Le respect de votre vie privée est notre priorité",
                VENDOR_SCREEN_BODY_TEXT: "Vous pouvez définir ci-dessous vos préférences de consentement pour les partenaires tiers avec lesquels nous collaborons. Développez chaque élément de la liste des sociétés afin de découvrir l’objectif de ce traitement de données et de préciser votre choix. Dans certains cas, les sociétés peuvent exploiter vos données sans demander votre consentement, sur la base de leurs intérêts légitimes. Vous pouvez cliquer sur les liens relatifs à leur politique de confidentialité afin d’obtenir plus d’informations et de vous opposer à un tel traitement si vous le désirez.",
                REJECT_ALL_BUTTON_TEXT: "Tout Refuser",
                ACCEPT_ALL_BUTTON_TEXT: "Tout Accepter",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Revenir aux Objectifs",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Annuler",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Enregistrer et quitter",
                CONSENT_LINK_LABEL: "Confidentialité",
                BACK_LABEL: "Retour",
                VIEW_COMPANIES_LABEL: "Voir la liste",
                HIDE_COMPANIES_LABEL: "Fermer la liste ",
                THIRD_PARTY_VENDORS_LABEL: "Partenaires",
                ON_LABEL: "Activé",
                OFF_LABEL: "Désactivé",
                OFF_ON_LABEL: "Désactivé/Activé",
                OTHER: "Autre",
                NON_IAB_TITLE: "Fournisseurs non IAB",
                DESCRIPTION: "Description du fournisseur:",
                COMPANY_LABEL: "Société",
                REQUIRED_LABEL: "Requis",
                PRIVACY_POLICY_LABEL: "Politique de confidentialité: ",
                PURPOSES_LABEL: "Objectifs (consentement)",
                FEATURES_LABEL: "Fonctionnalités",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Objectifs (intérêts légitimes)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Vos choix relatifs au traitement de vos données personnelles ont été pris en compte.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "Pour refuser ou modifier vos préférences, veuillez cliquer sur le bouton <strong>Confidentialité</strong>.",
                GOOGLE_PURPOSES_TEXT: "Autoriser Google et ses partenaires technologiques à recueillir des données et à utiliser des cookies à des fins de personnalisation et d’évaluation publicitaires."
            },
            de: {
                INIT_SCREEN_TITLE_TEXT: "Wir respektieren Ihre Privatsphäre",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Wir und unsere Partner verwenden Technologien wie Cookies und verarbeiten personenbezogene Daten wie IP-Adressen und Cookie-IDs, um Anzeigen und Inhalte auf Grundlage Ihrer Interessen zu personalisieren, die Leistung von Anzeigen und Inhalten zu messen und Erkenntnisse über die Zielgruppen zu gewinnen, die Anzeigen und Inhalte gesehen haben. Klicken Sie unten, um der Verwendung dieser Technologie und der Verarbeitung Ihrer persönlichen Daten für diese Zwecke zuzustimmen. Sie können Ihre Meinung und Ihre Einwilligungsentscheidungen jederzeit ändern, indem Sie auf diese Website zurückkehren.",
                    2: "Wir und unsere Partner verarbeiten Ihre personenbezogenen Daten wie IP-Adressen und Cookie-IDs mithilfe von Technologien wie Cookies, um Anzeigen und Inhalte auf Grundlage Ihrer Interessen zu personalisieren, die Leistung von Anzeigen und Inhalten zu messen und Erkenntnisse über die Zielgruppen zu gewinnen, die Anzeigen und Inhalte gesehen haben. Klicken Sie unten, um zuzustimmen oder auszuwählen, welche Partner Ihre Daten zu welchen Zwecken verarbeiten dürfen. Sie können jederzeit Änderungen an Ihren Einstellungen vornehmen.",
                    3: "Die Qualität der Inhalte und Informationen, die wir Ihnen zur Verfügung stellen, hängt von den Einnahmen ab, die wir durch Werbung erzielen. Wir und unsere Partner verwenden Ihre personenbezogenen Daten wie IP-Adressen und Cookie-IDs, um Anzeigen und Inhalte auf Grundlage Ihrer Interessen zu personalisieren, die Leistung von Anzeigen und Inhalten zu messen und Erkenntnisse über die Zielgruppen zu gewinnen, die Anzeigen und Inhalte gesehen haben. Klicken Sie unten, um der Verwendung von Cookies und der Verarbeitung Ihrer Daten zuzustimmen. Sie können jederzeit zu Ihrer Auswahl zurückgehen.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "MEHR OPTIONEN",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "ICH STIMME NICHT ZU",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "ICH STIMME ZU",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Zwecke anzeigen",
                INIT_SCREEN_ATTRIBUTION_TEXT: "Unterstützt von",
                PURPOSE_SCREEN_TITLE_TEXT: "Wir respektieren Ihre Privatsphäre",
                PURPOSE_SCREEN_BODY_TEXT: "Sie können Ihre Einwilligungsvorgaben festlegen und bestimmen, wie Ihre Daten basierend auf den folgenden Zwecken verwendet werden sollen. Sie können Ihre Einstellungen für uns unabhängig von denen von Drittanbietern vornehmen. Jeder Zweck hat eine Beschreibung, damit Sie wissen, wie wir und unsere Partner Ihre Daten verwenden.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Anbieter anzeigen",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Abbrechen",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Speichern & verlassen",
                VENDOR_SCREEN_TITLE_TEXT: "Wir respektieren Ihre Privatsphäre",
                VENDOR_SCREEN_BODY_TEXT: "Im Folgenden können Sie Einwilligungsvorgaben für einzelne Drittanbieter festlegen, mit denen wir zusammenarbeiten. Zur Erleichterung Ihrer Auswahl können Sie die einzelnen Einträge auf der Unternehmensliste erweitern, um zu sehen, für welche Zwecke sie Daten verwenden. In einigen Fällen können Unternehmen Ihre Daten aufgrund ihrer berechtigten Interessen verwenden, ohne Sie um Ihre Zustimmung zu bitten. Sie können auf deren Datenschutzrichtlinien-Links klicken, um weitere Informationen zu erhalten und einer solchen Verarbeitung zu widersprechen.",
                REJECT_ALL_BUTTON_TEXT: "Alle ablehnen",
                ACCEPT_ALL_BUTTON_TEXT: "Alle akzeptieren",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Zurück zu den Zwecken",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Abbrechen",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Speichern & verlassen",
                CONSENT_LINK_LABEL: "Datenschutz",
                BACK_LABEL: "Zurück",
                VIEW_COMPANIES_LABEL: "Unternehmen einblenden",
                HIDE_COMPANIES_LABEL: "Unternehmen ausblenden",
                THIRD_PARTY_VENDORS_LABEL: "Drittanbieter",
                ON_LABEL: "An",
                OFF_LABEL: "Aus",
                OFF_ON_LABEL: "Aus/An",
                OTHER: "Sonstiges",
                NON_IAB_TITLE: "Nicht-IAB-Anbieter",
                DESCRIPTION: "Anbieterbeschreibung:",
                COMPANY_LABEL: "Unternehmen",
                REQUIRED_LABEL: "Erforderlich",
                PRIVACY_POLICY_LABEL: "Datenschutzerklärung: ",
                PURPOSES_LABEL: "ZZwecke (Zustimmung)",
                FEATURES_LABEL: "Funktionalitäten",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Zwecke (berechtigte Interessen)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Google und seinen Technologiepartnern erlauben, Daten zu sammeln und Cookies zur Personalisierung und Messung von Anzeigen zu verwenden."
            },
            it: {
                INIT_SCREEN_TITLE_TEXT: "Il rispetto della tua privacy è la nostra priorità",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Noi e i nostri partner utilizziamo tecnologie, quali quelle dei cookie, ed elaboriamo i dati personali, quali gli indirizzi IP e gli identificatori dei cookie, per personalizzare gli annunci e i contenuti in base ai tuoi interessi, misurare le prestazioni di annunci e contenuti e ricavare informazioni sul pubblico che ha visualizzato gli annunci e i contenuti. Fai clic sotto per acconsentire all'utilizzo di questa tecnologia e al trattamento dei tuoi dati personali per queste finalità. Puoi cambiare idea e modificare le tue opzioni sul consenso in qualsiasi momento ritornando su questo sito.",
                    2: "Noi e i nostri partner elaboriamo i tuoi dati personali, quali gli indirizzi IP e gli identificatori dei cookie, utilizzando tecnologie quali quelle dei cookie per personalizzare gli annunci e i contenuti in base ai tuoi interessi, misurare le prestazioni di annunci e contenuti e ricavare informazioni sul pubblico che ha visualizzato gli annunci e i contenuti. Fai clic di seguito per acconsentire o scegliere i Partner che elaboreranno i tuoi dati e per quali finalità. Puoi modificare le tue impostazioni in qualsiasi momento.",
                    3: "I contenuti e le informazioni di qualità che forniamo dipendono dalle entrate generate dalla pubblicità. Noi e i nostri partner utilizziamo i tuoi dati personali, quali gli indirizzi IP e gli identificatori dei cookie, per personalizzare gli annunci e i contenuti in base ai tuoi interessi, misurare le prestazioni di annunci e contenuti e ricavare informazioni sul pubblico che ha visualizzato gli annunci e i contenuti. Fai clic sotto per acconsentire all'utilizzo dei cookie e al trattamento dei tuoi dati. Puoi rivedere le tue scelte in qualsiasi momento.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "PIÙ OPZIONI",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "Non Accetto",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Accetto",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Mostra finalità",
                INIT_SCREEN_ATTRIBUTION_TEXT: "Offerto da",
                PURPOSE_SCREEN_TITLE_TEXT: "Il rispetto della tua privacy è la nostra priorità",
                PURPOSE_SCREEN_BODY_TEXT: "Di seguito puoi impostare le preferenze sul consenso e determinare come desideri utilizzare i dati in base alle finalità. Puoi impostare le tue preferenze per noi indipendentemente da quelle dei partner di terze parti. Ogni finalità ha una descrizione in modo che tu sappia come noi e i nostri partner utilizziamo i tuoi dati.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Visualizza i fornitori",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Annullare",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Salva ed Esci",
                VENDOR_SCREEN_TITLE_TEXT: "Il rispetto della tua privacy è la nostra priorità",
                VENDOR_SCREEN_BODY_TEXT: "Di seguito puoi impostare le preferenze sul consenso per i singoli partner di terze parti con cui collaboriamo. Per visualizzare le finalità rispetto alle quali i singoli partner di terze parti usano i dati per agevolarti nelle tue scelte, espandi ogni voce dell'elenco di aziende. In alcuni casi, le aziende potrebbero utilizzare i tuoi dati senza chiedere il tuo consenso, in base ai loro legittimi interessi. Per ulteriori informazioni e per opporti a tale elaborazione, puoi fare clic sui rispettivi link alla policy sulla privacy.",
                REJECT_ALL_BUTTON_TEXT: "RIFIUTA TUTTO",
                ACCEPT_ALL_BUTTON_TEXT: "ACCETTA TUTTO",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Torna alle finalità",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Annullare",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Salva ed Esci",
                CONSENT_LINK_LABEL: "Privacy",
                BACK_LABEL: "Indietro",
                VIEW_COMPANIES_LABEL: "Vedi la lista",
                HIDE_COMPANIES_LABEL: "Nascondi la lista",
                THIRD_PARTY_VENDORS_LABEL: "Partner di terze parti",
                ON_LABEL: "Attivare",
                OFF_LABEL: "Disattivare",
                OFF_ON_LABEL: "Disattivare/Attivare",
                OTHER: "Altro",
                NON_IAB_TITLE: "Non-IAB Fornitori non IAB",
                DESCRIPTION: "Descrizione del fornitore:",
                COMPANY_LABEL: "Azienda",
                REQUIRED_LABEL: "Obbligatorio",
                PRIVACY_POLICY_LABEL: "Informativa sulla privacy: ",
                PURPOSES_LABEL: "Finalità (consenso)",
                FEATURES_LABEL: "Funzionalità",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Finalità (interessi legittimi)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Consenti a Google e ai suoi partner tecnologici di raccogliere i dati e utilizzare i cookie per la personalizzazione e la misurazione degli annunci."
            },
            es: {
                INIT_SCREEN_TITLE_TEXT: "Tu privacidad es importante para nosotros",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Nosotros y nuestros socios utilizamos tecnologías, como las cookies, y procesamos datos personales, como las direcciones IP y los identificadores de cookies, para personalizar los anuncios y el contenido según sus intereses, medir el rendimiento de los anuncios y el contenido y obtener información sobre las audiencias que vieron los anuncios y el contenido. Haga clic a continuación para autorizar el uso de esta tecnología y el procesamiento de sus datos personales para estos fines. Puede cambiar de opinión y cambiar sus opciones de consentimiento en cualquier momento al regresar a este sitio.",
                    2: "Nosotros y nuestros socios procesamos sus datos personales, como las direcciones IP y los identificadores de cookies, con tecnología como las cookies para personalizar los anuncios y el contenido según sus intereses, medir el rendimiento de los anuncios y el contenido y obtener información sobre las audiencias que vieron los anuncios y el contenido. Haga clic a continuación para dar su consentimiento o para elegir qué Socios procesan sus datos y para qué fines. Puede realizar cambios en su configuración en cualquier momento.",
                    3: "La calidad del contenido y la información que le proporcionamos depende de los ingresos que generamos de la publicidad. Nosotros y nuestros socios utilizamos sus datos personales, como las direcciones IP y los identificadores de cookies, para personalizar los anuncios y el contenido según sus intereses, medir el rendimiento de los anuncios y el contenido y obtener información sobre las audiencias que vieron los anuncios y el contenido. Haga clic a continuación para autorizar el uso de cookies y el procesamiento de sus datos. Puede volver a visitar sus opciones en cualquier momento.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "MÁS OPCIONES",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "No acepto",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Acepto",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Mostrar objetivos",
                INIT_SCREEN_ATTRIBUTION_TEXT: "Accionado por",
                PURPOSE_SCREEN_TITLE_TEXT: "Tu privacidad es importante para nosotros",
                PURPOSE_SCREEN_BODY_TEXT: "Puede establecer sus preferencias de consentimiento y determinar cómo desea que se utilicen sus datos según los fines que se detallan a continuación. Puede establecer sus preferencias con respecto a nosotros independientemente de las de los socios externos. Cada objetivo tiene una descripción para que sepa cómo nosotros y los socios usamos sus datos.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Ver vendedores",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Cancelar",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Guardar y salir",
                VENDOR_SCREEN_TITLE_TEXT: "Tu privacidad es importante para nosotros",
                VENDOR_SCREEN_BODY_TEXT: "Puede configurar las preferencias de consentimiento para los terceros externos individuales con los que trabajamos a continuación. Expanda cada elemento de la lista de la compañía para ver para qué fines usan los datos para ayudarlo a tomar sus decisiones. En algunos casos, las compañías pueden usar sus datos sin pedir su consentimiento en función de sus intereses legítimos. Puede hacer clic en los enlaces de sus políticas de privacidad para obtener más información y para objetar dicho procesamiento.",
                REJECT_ALL_BUTTON_TEXT: "Rechazar todo",
                ACCEPT_ALL_BUTTON_TEXT: "Aceptar todo",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Volver a propósitos",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Cancelar",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Guardar y salir",
                CONSENT_LINK_LABEL: "Privacidad",
                BACK_LABEL: "Volver",
                VIEW_COMPANIES_LABEL: "Ver empresas",
                HIDE_COMPANIES_LABEL: "Ocultar empresas",
                THIRD_PARTY_VENDORS_LABEL: "Partners",
                ON_LABEL: "Activar",
                OFF_LABEL: "Desactivar",
                OFF_ON_LABEL: "Desactivar/Activar",
                OTHER: "Otro",
                NON_IAB_TITLE: "Proveedores que no pertenecen a IAB",
                DESCRIPTION: "Descripción del vendedor:",
                COMPANY_LABEL: "Empresa",
                REQUIRED_LABEL: "Obligatorio",
                PRIVACY_POLICY_LABEL: "Política de privacidad: ",
                PURPOSES_LABEL: "Objetivos (consentimiento)",
                FEATURES_LABEL: "Características",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Objetivos (intereses legítimos)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Permitir que Google y sus socios tecnológicos recopilen datos y utilicen cookies para la personalización de anuncios y medición."
            },
            da: {
                INIT_SCREEN_TITLE_TEXT: "Vi respekterer privatlivets fred",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Vi og vores partnere bruger teknologier, såsom cookies, og behandler personlige data, såsom IP-adresser og cookie-identifikatorer, til at skræddersy reklamer og indhold på basis af dine interesser, for at måle reklamernes og indholdenes virkningsgrad og for at lære noget om dem, der har set reklamerne og indholdene. Klik nedenunder for at give samtykke til brugen af denne teknologi og behandling af dine personlige data til disse formål. Du kan til enhver tid skifte holdning og ændre dine valg ved at vende tilbage til denne site.",
                    2: "Vi og vores partnere behandler dine personlige data, såsom IP-adresser og cookie-identifikatorer, ved hjælp af teknologier, såsom cookies, til at skræddersy reklamer og indhold på basis af dine interesser, for at måle reklamernes og indholdenes virkningsgrad og for at lære noget om dem, der har set reklamerne og indholdene. Klik nedenunder for at give samtykke eller for at vælge hvilke partnere, der skal behandle dine data, og til hvilke formål. Du kan til enhver tid ændre dine indstillinger.",
                    3: "Kvalitetsindholdet og oplysningerne, som vi tilbyder dig, er afhængige af de indtægter, vi generer igennem reklamer. Vi og vores partnere bruger dine personlige data, såsom IP-adresser og cookie-identifikatorer, til at skræddersy reklamer og indhold på basis af dine interesser, til at måle reklamernes og indholdenes virkningsgrad og til at lære noget om dem, der har set reklamerne og indholdene. Klik nedenunder for at give samtykke til brugen af cookies og behandling af dine data. Du kan til enhver tid ændre dine valg.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "FLERE MULIGHEDER",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "JEG SAMTYKKER IKKE",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "JEG SAMTYKKER",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Vis formål",
                PURPOSE_SCREEN_TITLE_TEXT: "Vi respekterer privatlivets fred",
                PURPOSE_SCREEN_BODY_TEXT: "Du kan vælge dine samtykkepræferencer og bestemme, hvordan dine data skal behandles på basis af formålene nedenunder. Du kan vælge dine præferencer i forhold til os uafhængigt af dine præferencer for tredjemandspartnere. Til hvert formål foreligger der en beskrivelse, så du ved, hvordan vi og vores partnere bruger dine data.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Se Forhandlere",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Annuller",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Gem og luk",
                VENDOR_SCREEN_TITLE_TEXT: "Vi respekterer privatlivets fred",
                VENDOR_SCREEN_BODY_TEXT: "Du kan vælge dine præferencer for samtykke vedrørende enkelte tredjemandspartnere nedenfor. Udvid hver firmaliste for at se, hvilke formål de bruger data til, så du nemmere kan træffe dine valg. I nogle tilfælde kan virksomheder bruge dine data uden at bede om dit samtykke baseret på deres egne legitime interesser. Klik på linkene til deres politikker om privatlivets fred for yderligere oplysninger og for eventuelt at protestere imod den slags databehandling.",
                REJECT_ALL_BUTTON_TEXT: "AFVIS ALT",
                ACCEPT_ALL_BUTTON_TEXT: "HYVÄKSY KAIKKI",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Tilbage til formål",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Annuller",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Gem og luk",
                CONSENT_LINK_LABEL: "Privatlivets fred",
                BACK_LABEL: "Tilbage",
                VIEW_COMPANIES_LABEL: "Vis virksomheder",
                HIDE_COMPANIES_LABEL: "Skjul virksomheder",
                THIRD_PARTY_VENDORS_LABEL: "Tredjepartsleverandører",
                ON_LABEL: "Til",
                OFF_LABEL: "Fra",
                OFF_ON_LABEL: "Fra/Til",
                OTHER: "Andet",
                NON_IAB_TITLE: "Ikke-IAB-forhandlere",
                DESCRIPTION: "Forhandlerbeskrivelse:",
                COMPANY_LABEL: "Virksomhed",
                REQUIRED_LABEL: "Obligatorisk",
                PRIVACY_POLICY_LABEL: "Politik for beskyttelse af personoplysninger: ",
                PURPOSES_LABEL: "Formål (samtykke)",
                FEATURES_LABEL: "Formål - Legitime interesser:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Formål (legitime interesser)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Giv samtykke til, at Google og deres teknologiske partnere indsamler data og bruger cookies til at personliggøre reklame og måling."
            },
            nl: {
                INIT_SCREEN_TITLE_TEXT: "We respecteren uw privacy",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Wij en onze partners gebruiken technologieën, zoals cookies, en verwerken persoonlijke gegevens, zoals IP-adressen en cookie-identificatoren, om advertenties en inhoud te personaliseren op basis van uw interesses, de resultaten van advertenties en inhoud te meten en inzichten te verkrijgen over het publiek dat deze advertenties en inhoud heeft bekeken. Klik hieronder om toestemming te geven voor het gebruik van deze technologie en de verwerking van uw persoonlijke gegevens voor deze doeleinden. U kunt op elk moment van gedachten veranderen en uw toestemmingskeuzes wijzigen door terug te keren naar deze site.",
                    2: "Wij en onze partners verwerken uw persoonlijke gegevens, zoals IP-adressen en cookie-identificatoren, met behulp van technologie zoals cookies om advertenties en inhoud te personaliseren op basis van uw interesses, de resultaten van advertenties en inhoud te meten en inzichten te verkrijgen over het publiek dat deze advertenties en inhoud heeft bekeken. Klik hieronder om toestemming te geven of om te kiezen welke partners uw gegevens verwerken en voor welke doeleinden. U kunt uw instellingen op elk gewenst moment wijzigen.",
                    3: "De kwaliteit van de inhoud en informatie die we u verstrekken, is afhankelijk van de inkomsten die we genereren uit advertenties. Wij en onze partners gebruiken uw persoonlijke gegevens, zoals IP-adressen en cookie-identificatoren om advertenties en inhoud te personaliseren op basis van uw interesses, de resultaten van advertenties en inhoud te meten en inzichten te verkrijgen over het publiek dat advertenties en inhoud heeft bekeken. Klik hieronder om toestemming te geven voor het gebruik van cookies en de verwerking van uw gegevens. U kunt op elk gewenst moment terugkomen op uw keuzes.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "MEER OPTIES",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "IK GA NIET AKKOORD",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "IK GA AKKOORD",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Doeleinden weergeven",
                PURPOSE_SCREEN_TITLE_TEXT: "Wij respecteren uw privacy",
                PURPOSE_SCREEN_BODY_TEXT: "U kunt uw toestemmingsvoorkeuren instellen en bepalen hoe u uw gegevens wilt gebruiken op basis van de onderstaande doeleinden. U kunt uw voorkeuren voor ons onafhankelijk van die van externe partners instellen. Elk doeleinde heeft een beschrijving zodat u weet hoe wij en onze partners uw gegevens gebruiken.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Zie leveranciers",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Annuleer",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Opslaan en afsluiten",
                VENDOR_SCREEN_TITLE_TEXT: "Wij respecteren uw privacy",
                VENDOR_SCREEN_BODY_TEXT: "U kunt hieronder toestemmingsvoorkeuren instellen voor individuele externe partners waarmee wij werken. Vouw elk item uit de bedrijfslijst uit om te zien voor welke doeleinden ze gegevens gebruiken om u te helpen bij het maken van uw keuzes. In sommige gevallen kunnen bedrijven uw gegevens gebruiken zonder uw toestemming te vragen, op basis van hun legitieme belangen. U kunt op hun privacybeleidlinks klikken voor meer informatie en bezwaar maken tegen dergelijke verwerking.",
                REJECT_ALL_BUTTON_TEXT: "ALLES AFWIJZEN",
                ACCEPT_ALL_BUTTON_TEXT: "ALLES ACCEPTEREN",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Terug naar Doeleinden",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Annuleer",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Opslaan en afsluiten",
                CONSENT_LINK_LABEL: "Privacy",
                BACK_LABEL: "Terug",
                VIEW_COMPANIES_LABEL: "Lijst weergeven",
                HIDE_COMPANIES_LABEL: "Lijst verbergen",
                THIRD_PARTY_VENDORS_LABEL: "Partners",
                ON_LABEL: "Aan",
                OFF_LABEL: "Uit",
                OFF_ON_LABEL: "Uit/Aan",
                OTHER: "Overige",
                NON_IAB_TITLE: "Niet-IAB-leveranciers",
                DESCRIPTION: "Beschrijving leverancier:",
                COMPANY_LABEL: "Bedrijf",
                REQUIRED_LABEL: "Verplicht",
                PRIVACY_POLICY_LABEL: "Privacybeleid: ",
                PURPOSES_LABEL: "Doeleinden (toestemming)",
                FEATURES_LABEL: "Functies",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Doeleinden (legitieme belangen)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Google en zijn technologiepartners toestaan om gegevens te verzamelen en cookies te gebruiken voor gepersonaliseerde advertenties en metingen."
            },
            el: {
                INIT_SCREEN_TITLE_TEXT: "Σεβόμαστε την ιδιωτικότητά σας",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Εμείς και οι συνεργάτες μας χρησιμοποιούμε τεχνολογίες, όπως cookies, και επεξεργαζόμαστε προσωπικά δεδομένα, όπως διευθύνσεις IP και αναγνωριστικά cookies, για να προσαρμόζουμε τις διαφημίσεις και το περιεχόμενο με βάση τα ενδιαφέροντά σας, για να μετρήσουμε την απόδοση των διαφημίσεων και του περιεχομένου και για να αποκτήσουμε εις βάθος γνώση του κοινού που είδε τις διαφημίσεις και το περιεχόμενο. Κάντε κλικ παρακάτω για να συμφωνήσετε με τη χρήση αυτής της τεχνολογίας και την επεξεργασία των προσωπικών σας δεδομένων για αυτούς τους σκοπούς. Μπορείτε να αλλάξετε γνώμη και να αλλάξετε τις επιλογές της συγκατάθεσής σας ανά πάσα στιγμή επιστρέφοντας σε αυτόν τον ιστότοπο.",
                    2: "Εμείς και οι συνεργάτες μας χρησιμοποιούμε τα προσωπικά σας δεδομένα, όπως διευθύνσεις IP και αναγνωριστικά cookies, χρησιμοποιώντας τεχνολογία όπως cookies για να προσαρμόζουμε τις διαφημίσεις και το περιεχόμενο με βάση τα ενδιαφέροντά σας, για να μετρήσουμε την απόδοση των διαφημίσεων και του περιεχομένου και για να αποκτήσουμε εις βάθος γνώση του κοινού που είδε τις διαφημίσεις και το περιεχόμενο. Κάντε κλικ παρακάτω για να δώσετε τη συγκατάθεσή σας ή για να επιλέξετε ποιοι συνεργάτες θα επεξεργαστούν τα δεδομένα σας και για ποιους σκοπούς. Μπορείτε να αλλάξετε τις ρυθμίσεις σας ανά πάσα στιγμή.",
                    3: "Η ποιότητα του περιεχομένου και οι πληροφορίες που σας παρέχουμε εξαρτώνται από τα έσοδα από τη διαφήμιση. Εμείς και οι συνεργάτες μας χρησιμοποιούμε τα προσωπικά σας δεδομένα, όπως διευθύνσεις IP και αναγνωριστικά cookies, για να προσαρμόζουμε τις διαφημίσεις και το περιεχόμενο με βάση τα ενδιαφέροντά σας, για να μετρήσουμε την απόδοση των διαφημίσεων και του περιεχομένου και για να αποκτήσουμε εις βάθος γνώση του κοινού που είδε τις διαφημίσεις και το περιεχόμενο. Κάντε κλικ παρακάτω για να δώσετε τη συγκατάθεσή σας για τη χρήση των cookies και την επεξεργασία των δεδομένων σας. Μπορείτε να επανεξετάσετε τις επιλογές σας ανά πάσα στιγμή.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "ΠΕΡΙΣΣΟΤΕΡΕΣ ΕΠΙΛΟΓΕΣ",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "ΔΕ ΣΥΜΦΩΝΩ",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "ΣΥΜΦΩΝΩ",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Εμφάνιση σκοπών",
                PURPOSE_SCREEN_TITLE_TEXT: "Σεβόμαστε την ιδιωτικότητά σας",
                PURPOSE_SCREEN_BODY_TEXT: "Μπορείτε να ορίσετε τις προτιμήσεις συγκατάθεσης σας και να καθορίσετε τον τρόπο με τον οποίο θέλετε να χρησιμοποιηθούν τα δεδομένα σας, με βάση τους παρακάτω σκοπούς. Μπορείτε να ορίσετε τις προτιμήσεις σας για εμάς, ανεξάρτητα από αυτούς τους τρίτους συνεργάτες. Κάθε σκοπός έχει μια περιγραφή, έτσι ώστε να ξέρετε πώς χρησιμοποιούμε τα δεδομένα σας εμείς και οι συνεργάτες μας.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Εμφάνιση παρόχων",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Άκυρο",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Αποθήκευση και έξοδος",
                VENDOR_SCREEN_TITLE_TEXT: "Σεβόμαστε την ιδιωτικότητά σας",
                VENDOR_SCREEN_BODY_TEXT: "Μπορείτε να ορίσετε τις προτιμήσεις συγκατάθεσης για τους επιμέρους τρίτους συνεργάτες με τους οποίους συνεργαζόμαστε, παρακάτω. Επεκτείνετε το στοιχείο λίστας κάθε εταιρείας, για να δείτε τους σκοπούς για τους οποίους χρησιμοποιούν τα δεδομένα σας, ώστε να κάνετε την επιλογή σας. Σε ορισμένες περιπτώσεις, οι εταιρείες μπορεί να χρησιμοποιήσουν τα δεδομένα σας χωρίς να ζητήσουν τη συγκατάθεσή σας, με βάση τα νόμιμα συμφέροντά τους. Μπορείτε να κάνετε κλικ στους συνδέσμους της πολιτικής απορρήτου τους για περισσότερες πληροφορίες και για να εναντιωθείτε σε αυτή την επεξεργασία.",
                REJECT_ALL_BUTTON_TEXT: "ΑΠΟΡΡΙΨΗ ΟΛΩΝ",
                ACCEPT_ALL_BUTTON_TEXT: "ΑΠΟΔΟΧΗ ΟΛΩΝ",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Πίσω στους Σκοπούς",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Άκυρο",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Αποθήκευση και έξοδος",
                CONSENT_LINK_LABEL: "Απόρρητο",
                BACK_LABEL: "Επιστροφή",
                VIEW_COMPANIES_LABEL: "Προβολή εταιρειών",
                HIDE_COMPANIES_LABEL: "Απόκρυψη εταιρειών",
                THIRD_PARTY_VENDORS_LABEL: "Τρίτοι προμηθευτές",
                ON_LABEL: "Ναι",
                OFF_LABEL: "Όχι",
                OFF_ON_LABEL: "Όχι/Ναι",
                OTHER: "Άλλο",
                NON_IAB_TITLE: "Πάροχοι μη-IAB",
                DESCRIPTION: "Περιγραφή παρόχου:",
                COMPANY_LABEL: "Εταιρεία",
                REQUIRED_LABEL: "Απαιτείται",
                PRIVACY_POLICY_LABEL: "Πολιτική απορρήτου: ",
                PURPOSES_LABEL: "Σκοποί (Συγκατάθεση)",
                FEATURES_LABEL: "Λειτουργίες:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Σκοποί (Νόμιμα συμφέροντα)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Επιτρέψτε στο Google και στους τεχνολογικούς συνεργάτες του να συλλέγουν δεδομένα και να χρησιμοποιούν cookies για εξατομίκευση και μέτρηση διαφημίσεων."
            },
            hu: {
                INIT_SCREEN_TITLE_TEXT: "Fontos számunkra adatainak védelme",
                INIT_SCREEN_BODY_TEXT: {
                    1: "A partnereinkkel együtt olyan technológiákat, például cookie-kat használunk, amelyekkel a személyes adatait – például az IP-címeit és a cookie-azonosítóit – feldolgozzuk annak érdekében, hogy az Ön érdeklődési köre alapján személyre szabjuk a hirdetéseket és a tartalmakat, mérjük a hirdetések és a tartalmak teljesítményét, valamint következtetéseket vonjunk le a hirdetések és a tartalom közönségével kapcsolatban. A gombra kattintva hozzájárulhat ennek a technológiának a használatához és az adatai e célokkal történő feldolgozásához. Az oldal későbbi meglátogatásaikor bármikor meggondolhatja magát, és megváltoztathatja a döntését.",
                    2: "A személyes adatait – például az IP-címeit és a cookie-azonosítóit – a partnereinkkel együtt a cookie-khoz hasonló technológiák segítségével feldolgozzuk annak érdekében, hogy az Ön érdeklődési köre alapján személyre szabjuk a hirdetéseket és a tartalmakat, mérjük a hirdetések és a tartalmak teljesítményét, valamint következtetéseket vonjunk le a hirdetések és a tartalom közönségével kapcsolatban. A gombra kattintva hozzájárulást adhat, vagy kiválaszthatja, mely partnerek, milyen céllal dolgozhatják fel az adatait. A beállításokat bármikor módosíthatja.",
                    3: "A hirdetésekből származó bevétel teszi lehetővé, hogy minőségi tartalmat és tájékoztatást biztosítsunk Önnek. A személyes adatait – például az IP-címeit és a cookie-azonosítóit – partnereinkkel együtt feldolgozzuk annak érdekében, hogy az Ön érdeklődési köre alapján személyre szabjuk a hirdetéseket és a tartalmakat, mérjük a hirdetések és a tartalmak teljesítményét, valamint következtetéseket vonjunk le a hirdetések és a tartalom közönségével kapcsolatban. A gombra kattintva hozzájárulhat a cookie-k használatához és az adatok feldolgozásához. A döntését bármikor megváltoztathatja.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "TÖBB LEHETŐSÉG",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "NEM FOGADOM EL",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "ELFOGADOM",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "A célok megjelenítése",
                PURPOSE_SCREEN_TITLE_TEXT: "Fontos számunkra adatainak védelme",
                PURPOSE_SCREEN_BODY_TEXT: "Beállíthatja a hozzájárulási preferenciáit, és meghatározhatja, hogyan kerüljenek felhasználásra az adatai a jövőben az alábbi célok vonatkozásában. A ránk vonatkozó preferenciáit a harmadik felektől függetlenül adhatja meg. A célok melletti leírásból megtudhatja, hogy a partnereinkkel együtt hogyan használjuk fel az adatait.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Beszállítók megtekintése",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Kilépés",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Mentés és bezárás",
                VENDOR_SCREEN_TITLE_TEXT: "Fontos számunkra adatainak védelme",
                VENDOR_SCREEN_BODY_TEXT: "Az alábbiakban megadhatja az egyes független harmadik felekre vonatkozó hozzájárulással kapcsolatos preferenciáit. A döntése megkönnyítése érdekében kattintson a listában a vállalatok nevére, és megtudhatja, azok milyen célokra használják fel az adatokat. A vállalatok bizonyos esetekben az Ön hozzájárulása nélkül is használhatják az adatait, amennyiben ez jogos érdekük. A vállalatok adatvédelmi szabályzatának linkjére kattintva további információkat tekinthet meg, és elutasíthatja az adott célú feldolgozást.",
                REJECT_ALL_BUTTON_TEXT: "ÖSSZES ELUTASÍTÁSA",
                ACCEPT_ALL_BUTTON_TEXT: "ÖSSZES ELFOGADÁSA",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Vissza a Célok oldalra",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Kilépés",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Mentés és bezárás",
                CONSENT_LINK_LABEL: "Adatvédelem",
                BACK_LABEL: "Vissza",
                VIEW_COMPANIES_LABEL: "Vállalatok megjelenítése",
                HIDE_COMPANIES_LABEL: "Vállalatok elrejtése",
                THIRD_PARTY_VENDORS_LABEL: "Harmadik fél beszállítók",
                ON_LABEL: "Be",
                OFF_LABEL: "Ki",
                OFF_ON_LABEL: "Ki/Be",
                OTHER: "Egyéb",
                NON_IAB_TITLE: "Nem IAB-hez tartozó beszállítók",
                DESCRIPTION: "Beszállító leírása:",
                COMPANY_LABEL: "Vállalat",
                REQUIRED_LABEL: "Kötelező",
                PRIVACY_POLICY_LABEL: "Adatvédelmi szabályzat: ",
                PURPOSES_LABEL: "Célok (hozzájárulás)",
                FEATURES_LABEL: "Jellemzők:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Célok (jogszerű érdekek)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Engedélyezze, hogy a Google és technológiai partnerei adatokat gyűjtsenek és cookie-kat használjanak a hirdetések személyre szabásához és a mérésekhez."
            },
            pt: {
                INIT_SCREEN_TITLE_TEXT: "Damos valor à sua privacidade",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Nós e os nossos parceiros utilizamos tecnologias, como cookies, e processamos dados pessoais, como endereços IP e identificadores de cookies, para personalizar anúncios e conteúdos baseados nos seus interesses, avaliar o desempenho desses anúncios e conteúdos, bem como para obter informações sobre o público que os visualizou. Clique abaixo para consentir a utilização desta tecnologia e o processamento dos seus dados pessoais para estas finalidades. Pode mudar de ideias e alterar as suas opções de consentimento a qualquer momento voltando a este site.",
                    2: "Nós e os nossos parceiros processamos os seus dados pessoais, como endereços IP e identificadores de cookies, utilizando tecnologias, como cookies, para personalizar anúncios e conteúdos baseados nos seus interesses, avaliar o desempenho desses anúncios e conteúdos, bem como para obter informações sobre o público que os visualizou. Clique abaixo para consentir ou escolher os Parceiros que irão processar os seus dados e para quais Finalidades. Poderá realizar alterações às suas definições a qualquer momento.",
                    3: "O conteúdo de qualidade e as informações que lhe fornecemos dependem da receita gerada pela publicidade. Nós e os nossos parceiros utilizamos os seus dados pessoais, como endereços IP e identificadores de cookies, para personalizar anúncios e conteúdos baseados nos seus interesses, avaliar o desempenho desses anúncios e conteúdos, bem como para obter informações sobre o público que os visualizou. Clique abaixo para consentir a utilização de cookies e o processamento dos seus dados. Poderá rever as suas escolhas a qualquer momento.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "MAIS OPÇÕES",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "EU NÃO ACEITO",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "EU ACEITO",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Mostrar Finalidades",
                PURPOSE_SCREEN_TITLE_TEXT: "Damos valor à sua privacidade",
                PURPOSE_SCREEN_BODY_TEXT: "Com base nas finalidades que se seguem, pode definir as suas preferências de consentimento e determinar como deseja que os seus dados sejam utilizados. Pode definir as suas preferências relativas à nossa empresa de forma independente das de terceiros. Cada finalidade contém uma descrição para saber como nós e os nossos parceiros utilizamos os seus dados.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Ver Fornecedores",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Cancelar",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Guardar e sair",
                VENDOR_SCREEN_TITLE_TEXT: "Damos valor à sua privacidade",
                VENDOR_SCREEN_BODY_TEXT: "Em seguida, pode definir as preferências de consentimento para parceiros terceiros com os quais trabalhamos. Para ajudar no momento da escolha, expanda cada item da lista de empresas para ver com que finalidade utilizam os dados. Em alguns casos, as empresas, com base nos seus interesses legítimos, podem utilizar os seus dados sem solicitar o seu consentimento. Clique nas ligações das respetivas políticas de privacidade para obter mais informações e para se opor a esse processamento.",
                REJECT_ALL_BUTTON_TEXT: "Rejeitar tudo",
                ACCEPT_ALL_BUTTON_TEXT: "Aceitar tudo",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Voltar para Finalidades",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Cancelar",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Guardar e sair",
                CONSENT_LINK_LABEL: "Privacidade",
                BACK_LABEL: "Anterior",
                VIEW_COMPANIES_LABEL: "Ver companhias",
                HIDE_COMPANIES_LABEL: "Ocultar companhias",
                THIRD_PARTY_VENDORS_LABEL: "Vendedores terceiros",
                ON_LABEL: "Ligar",
                OFF_LABEL: "Desligar",
                OFF_ON_LABEL: "Desligar/Ligar",
                OTHER: "Outros",
                NON_IAB_TITLE: "Fornecedores não IAB",
                DESCRIPTION: "Descrição do Fornecedor:",
                COMPANY_LABEL: "Companhia",
                REQUIRED_LABEL: "Obrigatório",
                PRIVACY_POLICY_LABEL: "Política de privacidade: ",
                PURPOSES_LABEL: "Finalidades (Consentimento)",
                FEATURES_LABEL: "Funcionalidades:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Finalidades (Interesses legítimos)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Permitir que a Google e os seus parceiros tecnológicos recolham dados e utilizem cookies para personalização e medição de anúncios."
            },
            ro: {
                INIT_SCREEN_TITLE_TEXT: "Pentru noi, confidențialitatea dvs. este importantă",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Noi și partenerii noștri utilizăm tehnologii, cum ar fi modulele cookie, și vă procesăm datele cu caracter personal, precum adresele IP și identificatorii cookie, pentru a personaliza anunțurile publicitare și conținutul în funcție de interesele dvs., pentru a măsura eficiența anunțurilor și a conținutului și pentru a obține informații despre publicul care a văzut anunțurile și conținutul. Faceți clic mai jos pentru a vă da consimțământul privind utilizarea acestei tehnologii și procesarea datelor dvs. cu caracter personal în aceste scopuri. Vă puteți răzgândi și puteți schimba opțiunile în orice moment, revenind la acest site.",
                    2: "Noi și partenerii noștri vă procesăm datele cu caracter personal, cum ar fi adresele IP și identificatorii cookie, utilizând tehnologii precum cookie-urile, pentru a personaliza anunțurile publicitare și conținutul în funcție de interesele dvs., pentru a măsura eficiența anunțurilor și a conținutului și pentru a obține informații despre publicul care a văzut anunțurile și conținutul. Faceți clic mai jos pentru a vă da consimțământul sau pentru a alege care parteneri să vă proceseze datele și în ce scopuri. Puteți edita setările în orice moment.",
                    3: "Calitatea conținutului și informațiile pe care vi le furnizăm depind de veniturile generate de publicitate. Noi și partenerii noștri vă utilizăm datele cu caracter personal, cum ar fi adresele IP și identificatorii cookie, pentru a personaliza anunțurile publicitare și conținutul în funcție de interesele dvs., pentru a măsura eficiența anunțurilor și a conținutului și pentru a obține informații despre publicul care a văzut anunțurile și conținutul. Faceți clic mai jos pentru a vă da acordul privind utilizarea cookie-urilor și procesarea datelor dvs. Vă puteți schimba opțiunile în orice moment.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "MAI MULTE OPȚIUNI",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "NU SUNT DE ACORD",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Sunt de acord",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Afișați scopurile",
                PURPOSE_SCREEN_TITLE_TEXT: "Pentru noi, confidențialitatea dvs. este importantă",
                PURPOSE_SCREEN_BODY_TEXT: "Vă puteți seta preferințele de consimțământ și determina cum doriți să vă fie utilizate datele în funcție de scopurile de mai jos. Vă puteți seta preferințele pentru noi independent de cele pentru partenerii terți. Fiecare scop are o descriere, astfel încât să știți modul în care noi și partenerii noștri vă utilizăm datele.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Vizualizați furnizorii",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Anulare",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Salvare și ieșire",
                VENDOR_SCREEN_TITLE_TEXT: "Pentru noi, confidențialitatea dvs. este importantă",
                VENDOR_SCREEN_BODY_TEXT: "Mai jos, puteți stabili preferințele de consimțământ pentru partenerii terți cu care lucrăm. Pentru a decide, deschideți fiecare element din lista companiei pentru a vedea scopurile în care utilizează datele. Este posibil ca, în unele cazuri, companiile să vă utilizeze datele fără a vă cere consimțământul, bazându-se pe interesele lor legitime. Puteți face clic pe linkurile politicilor de confidențialitate ale acestora pentru a afla mai multe informații și a vă opune unor astfel de procesări.",
                REJECT_ALL_BUTTON_TEXT: "RRESPINGEȚI-LE PE TOATE",
                ACCEPT_ALL_BUTTON_TEXT: "ACCEPTAȚI-LE PE TOATE",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Înapoi la Scopuri",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Anulare",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Salvare și ieșire",
                CONSENT_LINK_LABEL: "Confidențialitate",
                BACK_LABEL: "Înapoi",
                VIEW_COMPANIES_LABEL: "Vizualizare companii",
                HIDE_COMPANIES_LABEL: "Ascundere companii",
                THIRD_PARTY_VENDORS_LABEL: "Furnizori terți",
                ON_LABEL: "Activare",
                OFF_LABEL: "Dezactivare",
                OFF_ON_LABEL: "Dezactivare/Activare",
                OTHER: "Altul",
                NON_IAB_TITLE: "Furnizori non-IAB",
                DESCRIPTION: "Descriere furnizor:",
                COMPANY_LABEL: "Companie",
                REQUIRED_LABEL: "Obligatoriu",
                PRIVACY_POLICY_LABEL: "Politica de confidențialitate: ",
                PURPOSES_LABEL: "Scopuri (Consimțământ)",
                FEATURES_LABEL: "Funcții:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Scopuri (Interese legitime)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Permiteți companiei Google și partenerilor săi de tehnologie să colecteze date și să utilizeze cookie-uri pentru măsurări și personalizarea anunțurilor."
            },
            fi: {
                INIT_SCREEN_TITLE_TEXT: "Yksityisyytesi on meille tärkeää",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Me ja yhteistyökumppanimme käytämme tekniikoita, kuten evästeitä, ja käsittelemme henkilökohtaisia tietojasi, kuten IP-osoitteita ja evästetunnisteita, yksilöimään mainoksia ja sisältöä mielenkiintojesi kohteiden perusteella, sekä mitataksemme mainosten ja sisällön tehokkuutta sekä saadaksemme tietoa mainoksia ja sisältöä nähneistä yleisöistä. Napsauta alta, jos haluat hyväksyä tämän tekniikan käytön ja henkilötietojesi käsittelyn näihin tarkoituksiin. Mikäli muutat mielesi, voit muuttaa antamaasi suostumusta milloin tahansa palaamalla tälle sivustolle.",
                    2: "Me ja yhteistyökumppanimme käsittelemme henkilökohtaisia tietojasi, kuten IP-osoitteita ja evästetunnisteita, käyttämällä tekniikoita, kuten evästeitä, jotta voimme muokata mainoksia ja sisältöä mielenkiintojesi kohteiden perusteella sekä mitataksemme mainosten ja sisällön tehokkuutta sekä saadaksemme tietoa mainoksia ja sisältöä nähneistä yleisöistä. Napsauta alta, jos haluat hyväksyä tai valita, mitkä kumppanit käsittelevät tietojasi ja mihin tarkoituksiin. Voit tehdä muutoksia asetuksiisi milloin tahansa.",
                    3: "Laadukas sisältö ja tiedot, jotka annamme sinulle, riippuvat mainonnasta syntyvästä tulosta. Me ja yhteistyökumppanimme käytämme henkilökohtaisia tietojasi, kuten IP-osoitteita ja evästetunnisteita, voidaksemme muokata mainoksia ja sisältöä mielenkiintojesi kohteiden perusteella ja mitataksemme mainosten ja sisällön tehokkuutta sekä saadaksemme tietoa mainoksia ja sisältöä nähneistä yleisöistä. Napsauta alta, jos haluat hyväksyä evästeiden käytön ja tietojen käsittelyn. Voit tarkastella valintojasi milloin tahansa.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "LISÄÄ VAIHTOEHTOJA",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "EN HYVÄKSY",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Hyväksyn",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Näytä tarkoitukset",
                PURPOSE_SCREEN_TITLE_TEXT: "Yksityisyytesi on meille tärkeää",
                PURPOSE_SCREEN_BODY_TEXT: "Voit asettaa suostumusasetuksesi ja määrittää, miten haluat tietojasi käytettävän alla olevien tarkoitusten perusteella. Voit asettaa meitä koskevat asetuksesi riippumatta kolmannen osapuolen yhteistyökumppaneita koskevista asetuksista. Jokaisella tarkoituksella on kuvaus, jotta tiedät, miten me ja yhteistyökumppanimme käytämme tietojasi.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Katso toimittajat",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Peruuta",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Tallenna ja poistu",
                VENDOR_SCREEN_TITLE_TEXT: "Yksityisyytesi on meille tärkeää",
                VENDOR_SCREEN_BODY_TEXT: "Voit määrittää alla suostumusasetukset yksittäisille yhteistyökumppaneina toimiville kolmansille osapuolille, joiden kanssa työskentelemme. Jotta voit tehdä valintasi, laajenna jokainen yritysluettelon kohde nähdäksesi mihin tarkoituksiin he käyttävät tietojasi. Joissakin tapauksissa yritykset voivat oikeutettujen etujensa perusteella käyttää tietojasi pyytämättä suostumustasi. Voit napsauttaa heidän tietosuojakäytäntölinkkejään saadaksesi lisätietoja ja vastustaaksesi tällaista käsittelyä.",
                REJECT_ALL_BUTTON_TEXT: "HYLKÄÄ KAIKKI",
                ACCEPT_ALL_BUTTON_TEXT: "HYVÄKSY KAIKKI",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Takaisin tarkoituksiin",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Peruuta",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Tallenna ja poistu",
                CONSENT_LINK_LABEL: "Yksityisyys",
                BACK_LABEL: "Takaisin",
                VIEW_COMPANIES_LABEL: "Katso yritykset",
                HIDE_COMPANIES_LABEL: "Piilota yritykset",
                THIRD_PARTY_VENDORS_LABEL: "Kolmannen osapuolen myyjät",
                ON_LABEL: "Päälle",
                OFF_LABEL: "Pois",
                OFF_ON_LABEL: "Pois/Päälle",
                OTHER: "Muut",
                NON_IAB_TITLE: "Ei IAB-toimittajat",
                DESCRIPTION: "Toimittajan kuvaus:",
                COMPANY_LABEL: "Yritys",
                REQUIRED_LABEL: "Vaaditaan",
                PRIVACY_POLICY_LABEL: "Tietosuojaseloste: ",
                PURPOSES_LABEL: "Tarkoitukset (suostumus)",
                FEATURES_LABEL: "Ominaisuudet:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Tarkoitukset (oikeutetut edut)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Salli Googlen ja sen teknologiakumppaneiden kerätä tietoja ja käyttää evästeitä mainosten mukauttamiseen ja mittaamiseen."
            },
            pl: {
                INIT_SCREEN_TITLE_TEXT: "Szanujemy Twoją prywatność",
                INIT_SCREEN_BODY_TEXT: {
                    1: "My i nasi partnerzy wykorzystujemy technologie, takie jak pliki cookie, i przetwarzamy dane osobowe, takie jak adresy IP i identyfikatory plików cookie, w celu spersonalizowania reklam i treści w oparciu o Twoje zainteresowania, mierzenia wydajności reklam i treści oraz uzyskiwania wglądu w odbiorców, którzy widzieli reklamy i treści. Kliknij poniżej, aby wyrazić zgodę na wykorzystanie tej technologii i przetwarzanie danych osobowych w tych celach. Możesz zmienić zdanie i zmienić wybór zgody w dowolnym momencie, wracając na tę stronę.",
                    2: "My i nasi partnerzy przetwarzamy Twoje dane osobowe, takie jak adresy IP i identyfikatory plików cookie, używając technologii takich jak pliki cookie, aby spersonalizować reklamy i treści w oparciu o Twoje zainteresowania, zmierzyć wydajność reklam i treści oraz uzyskać informacje o odbiorcach, którzy widzieli reklamy i treści. Kliknij poniżej, aby wyrazić zgodę lub wybrać, którzy Partnerzy przetwarzają Twoje dane i do jakich celów. Możesz dokonać zmian w swoich ustawieniach w dowolnym momencie.",
                    3: "Jakość treści i informacje, które przekazujemy, zależą od przychodów generowanych przez reklamę. My i nasi partnerzy wykorzystujemy Twoje dane osobowe, takie jak adresy IP i identyfikatory plików cookie, w celu spersonalizowania reklam i treści na podstawie Twoich zainteresowań, pomiaru wydajności reklam i treści oraz uzyskania informacji o odbiorcach, którzy obejrzeli reklamy i treści. Kliknij poniżej, aby wyrazić zgodę na używanie plików cookie i przetwarzanie Twoich danych. Możesz powrócić do swoich wyborów w dowolnym momencie.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "WIĘCEJ OPCJI",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "NIE AKCEPTUJĘ",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "AKCEPTUJĘ",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Pokaż cele",
                PURPOSE_SCREEN_TITLE_TEXT: "Szanujemy Twoją prywatność",
                PURPOSE_SCREEN_BODY_TEXT: "Możesz ustawić preferencje dotyczące zgody i określić, w jaki sposób chcesz, aby Twoje dane były używane w oparciu o poniższe cele. Możesz ustawić swoje preferencje dla nas niezależnie od preferencji partnerów zewnętrznych. Każdy cel zawiera opis, dzięki któremu wiesz, jak my i partnerzy korzystamy z Twoich danych.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Zobacz dostawców",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Anuluj",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Zapisz i zamknij",
                VENDOR_SCREEN_TITLE_TEXT: "Szanujemy Twoją prywatność",
                VENDOR_SCREEN_BODY_TEXT: "Możesz ustawić preferencje zgody dla poszczególnych partnerów zewnętrznych, z którymi współpracujemy poniżej. Rozwiń każdy element listy firm, aby sprawdzić, do jakich celów wykorzystują dane, aby pomóc w dokonaniu wyboru. W niektórych przypadkach firmy mogą wykorzystywać dane użytkownika bez pytania o zgodę w oparciu o ich uzasadnione interesy. Możesz kliknąć ich linki polityki prywatności, aby uzyskać więcej informacji i sprzeciwić się takiemu przetwarzaniu.",
                REJECT_ALL_BUTTON_TEXT: "ODRZUĆ WSZYSTKIE",
                ACCEPT_ALL_BUTTON_TEXT: "AKCEPTUJ WSZYSTKIE",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Powrót do celów",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Anuluj",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Zapisz i zamknij",
                CONSENT_LINK_LABEL: "Prywatność",
                BACK_LABEL: "Wstecz",
                VIEW_COMPANIES_LABEL: "Pokaż firmy",
                HIDE_COMPANIES_LABEL: "Ukryj firmy",
                THIRD_PARTY_VENDORS_LABEL: "Zaangażowane strony trzecie",
                ON_LABEL: "Włącz",
                OFF_LABEL: "Wyłącz",
                OFF_ON_LABEL: "Wyłącz/Włącz",
                OTHER: "Inny",
                NON_IAB_TITLE: "Dostawcy spoza IAB",
                DESCRIPTION: "Opis dostawcy:",
                COMPANY_LABEL: "Firma",
                REQUIRED_LABEL: "Wymagane",
                PRIVACY_POLICY_LABEL: "Zasady ochrony prywatności: ",
                PURPOSES_LABEL: "Cele (zgoda)",
                FEATURES_LABEL: "Funkcje:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Cele (uzasadnione interesy)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Pozwól Google i partnerom technologicznym tej firmy na gromadzenie danych i wykorzystywanie plików cookie do personalizacji i pomiaru reklam."
            },
            sk: {
                INIT_SCREEN_TITLE_TEXT: "Vážime si vaše súkromie",
                INIT_SCREEN_BODY_TEXT: {
                    1: "My a naši partneri používame technológie, ako napríklad súbory cookie, a spracúvame osobné údaje, ako sú adresy IP a identifikátory súborov cookie, na prispôsobenie reklám a obsahu na základe vašich záujmov, meranie výkonnosti reklám a obsahu a získanie informácií o používateľoch, ktorí videli konkrétne reklamy a obsah. Kliknutím nižšie potvrdzujete svoj súhlas s používaním tejto technológie a so spracúvaním svojich osobných údajov na tieto účely. Svoj názor môžete kedykoľvek zmeniť a svoj súhlas zrušiť po návrate na túto stránku.",
                    2: "My a naši partneri spracúvame vaše osobné údaje, ako sú adresy IP a identifikátory súborov cookie, pomocou technológie, akou je napríklad používanie súborov cookie, aby sme prispôsobili reklamy a obsah vašim záujmom, merali výkonnosť reklám a obsahu a získali prehľad o používateľoch, ktorí videli konkrétne reklamy a obsah. Kliknutím nižšie potvrdíte svoj súhlas, prípadne sa môžete rozhodnúť, ktorí partneri budú spracúvať vaše údaje a na aké účely. Tieto nastavenia môžete kedykoľvek zmeniť.",
                    3: "Kvalitný obsah a informácie, ktoré vám poskytujeme, závisia od našich príjmov z reklamy. My a naši partneri používame vaše osobné údaje, ako sú adresy IP a identifikátory súborov cookie, aby sme mohli prispôsobiť reklamy a obsah na základe vašich záujmov, merať výkonnosť reklám a obsahu a získať prehľad o používateľoch, ktorí videli konkrétne reklamy a obsah. Kliknutím nižšie súhlasíte s používaním súborov cookie a spracúvaním svojich údajov. Svoje rozhodnutie môžete kedykoľvek zmeniť.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "VIAC MOŽNOSTÍ",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "NESÚHLASÍM",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Súhlasím",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Zobraziť účely",
                PURPOSE_SCREEN_TITLE_TEXT: "Vážime si vaše súkromie",
                PURPOSE_SCREEN_BODY_TEXT: "Na základe nižšie uvedených účelov môžete upraviť preferencie svojho súhlasu týkajúce sa používania vašich údajov. Svoje preferencie pre naše používanie vašich údajov môžete nastaviť nezávisle od preferencií v súvislosti s externými partnermi. Každý účel má svoj opis, aby ste vedeli, ako my a naši partneri používame vaše údaje.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Zobraziť dodávateľov",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Zrušiť",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Uložiť a skončiť",
                VENDOR_SCREEN_TITLE_TEXT: "Vážime si vaše súkromie",
                VENDOR_SCREEN_BODY_TEXT: "Preferencie v súvislosti so súhlasom môžete nastaviť pre jednotlivých externých partnerov, s ktorými spolupracujeme. Rozbaľte každú položku zoznamu spoločností a prečítajte si, na aké účely používajú údaje. To vám môže pomôcť pri výbere nastavení. V niektorých prípadoch môžu spoločnosti používať vaše údaje bez toho, aby požiadali o váš súhlas. Môžu tak robiť na základe svojich oprávnených záujmov. Pre ďalšie informácie a námietky voči takémuto spracúvaniu môžete kliknúť na príslušné prepojenia na ich zásady ochrany osobných údajov.",
                REJECT_ALL_BUTTON_TEXT: "Odmietnuť všetko",
                ACCEPT_ALL_BUTTON_TEXT: "Prijať všetko",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Späť na účely",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Zrušiť",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Uložiť a skončiť",
                CONSENT_LINK_LABEL: "Súkromie",
                BACK_LABEL: "Späť",
                VIEW_COMPANIES_LABEL: "Zobraziť spoločnosti",
                HIDE_COMPANIES_LABEL: "Skryť spoločnosti",
                THIRD_PARTY_VENDORS_LABEL: "Predajcovia tretích strán",
                ON_LABEL: "Zap.",
                OFF_LABEL: "Vyp.",
                OFF_ON_LABEL: "Vyp./Zap.",
                OTHER: "Iné",
                NON_IAB_TITLE: "Dodávatelia bez IAB",
                DESCRIPTION: "Opis dodávateľa:",
                COMPANY_LABEL: "Spoločnosť",
                REQUIRED_LABEL: "Vyžadované",
                PRIVACY_POLICY_LABEL: "Zásady ochrany osobných údajov: ",
                PURPOSES_LABEL: "Účely (súhlas)",
                FEATURES_LABEL: "Funkcie:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Účely (oprávnené záujmy)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Umožnite spoločnosti Google a jej technologickým partnerom zhromažďovať údaje a používať súbory cookie na prispôsobenie reklám a meranie."
            },
            sv: {
                INIT_SCREEN_TITLE_TEXT: "Vi värdesätter din integritet",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Vi och våra samarbetspartner använder teknologi såsom cookies för att behandla personuppgifter, exempelvis IP-adresser och cookie-identifierare, för att anpassa annonser och innehåll enligt dina intressen, mäta effektiviteten hos annonser och innehåll samt härleda information om de personer som sett annonserna och innehållet. Klicka nedan för att godkänna användningen av denna teknologi och behandling av dina personuppgifter för dessa ändamål. Du kan när som helst ändra dina val gällande samtycke genom att återkomma till denna sida.",
                    2: "Vi och våra samarbetspartner behandlar dina personuppgifter, exempelvis IP-adresser och cookie-identifierare, med hjälp av teknologi såsom cookies för att anpassa annonser och innehåll enligt dina intressen, mäta effektiviteten hos annonser och innehåll samt härleda information om de personer som sett annonserna och innehållet. Klicka nedan för att godkänna eller för att välja vilka samarbetspartner som får behandla dina data för vilka ändamål. Du kan när som helst ändra dina inställningar.",
                    3: "Kvaliteten på det innehåll och den information vi erbjuder dig beror på den inkomst vi får från annonser. Vi och våra samarbetspartner använder dina personuppgifter, exempelvis IP-adresser och cookie-identifierare, för att anpassa annonser och innehåll enligt dina intressen, mäta effektiviteten hos annonser och innehåll samt härleda information om de personer som sett annonserna och innehållet. Klicka nedan för att godkänna användning av cookies och behandling av dina uppgifter. Du kan när som helst återkomma för att ändra dina val.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "FLER ALTERNATIV",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "JAG GODKÄNNER INTE",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "JAG GODKÄNNER",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Visa ändamål",
                PURPOSE_SCREEN_TITLE_TEXT: "Vi värderar din integritet",
                PURPOSE_SCREEN_BODY_TEXT: "Du kan ange dina samtyckespreferenser och avgöra hur du vill att dina data ska användas utifrån ändamålen nedan. Du kan ange separata preferenser för oss och tredje parter. Varje ändamål har en beskrivning så att du kan se hur vi och våra samarbetspartner använder dina uppgifter.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Visa säljare",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Avbryt",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Spara & Avsluta",
                VENDOR_SCREEN_TITLE_TEXT: "Vi värderar din integritet",
                VENDOR_SCREEN_BODY_TEXT: "Du kan ange samtyckespreferenser för de enskilda tredje parter vi samarbetar med nedan. Du kan maximera informationen om företagen på listan för att se för vilka ändamål de använder uppgifter och på så sätt få hjälp att göra dina val. I vissa fall kan företag använda dina data utan att be om ditt samtycke, med stöd av sina legitima intressen. Du kan klicka på länkarna till deras integritetspolicyer för att få mer information och för att neka till sådan användning.",
                REJECT_ALL_BUTTON_TEXT: "AVVISA ALLA",
                ACCEPT_ALL_BUTTON_TEXT: "GODKÄNN ALLA",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Tillbaka till ändamål",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Avbryt",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Spara och Avsluta",
                CONSENT_LINK_LABEL: "Integritet",
                BACK_LABEL: "Tillbaka",
                VIEW_COMPANIES_LABEL: "Visa företag",
                HIDE_COMPANIES_LABEL: "Göm företag",
                THIRD_PARTY_VENDORS_LABEL: "Tredjepartsleverantörer",
                ON_LABEL: "På",
                OFF_LABEL: "Av",
                OFF_ON_LABEL: "Av/På",
                OTHER: "Övriga",
                NON_IAB_TITLE: "Icke-IAB-säljare",
                DESCRIPTION: "Beskrivning av säljaren:",
                COMPANY_LABEL: "Företag",
                REQUIRED_LABEL: "Vad som krävs",
                PRIVACY_POLICY_LABEL: "Integritetspolicy: ",
                PURPOSES_LABEL: "Ändamål (samtycke)",
                FEATURES_LABEL: "Funktioner:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Ändamål (legitima intressen)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Tillåt Google och deras teknologipartner att samla in data och använda cookies för personanpassning av annonser och mätningar."
            },
            ru: {
                INIT_SCREEN_TITLE_TEXT: "Мы с большим уважением относимся к Bашей конфиденциальности",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Мы и наши партнеры используем технологии, такие как cookie-файлы, и обрабатываем персональные данные, включая IP-адреса и идентификаторы cookie-файлов, чтобы персонализировать рекламу и контент в соответствии с вашими интересами, оценивать эффективность рекламы и контента, а также получать представление об аудитории, которая просматривает рекламу и контент. Нажмите ниже, чтобы дать согласие на использование этой технологии и обработку ваших персональных данных в этих целях. Вы можете в любой момент изменить свое решение и отказаться, вернувшись на этот сайт.",
                    2: "Мы и наши партнеры обрабатываем ваши персональные данные, включая IP-адреса и идентификаторы cookie-файлов, с использованием таких технологий, как cookie-файлы, чтобы персонализировать рекламу и контент в соответствии с вашими интересами, оценивать эффективность рекламы и контента, а также получать представление об аудитории, которая просматривает рекламу и контент. Нажмите ниже, чтобы дать согласие или выбрать, какие партнеры смогут обрабатывать ваши данные и для каких целей. Вы можете изменить настройки в любое время.",
                    3: "Предоставляемый контент и информация зависят от дохода, который мы получаем от рекламы. Мы и наши партнеры используем ваши персональные данные, включая IP-адреса и идентификаторы cookie-файлов, чтобы персонализировать рекламу и контент в соответствии с вашими интересами, оценивать эффективность рекламы и контента, а также получать представление об аудитории, которая просматривает рекламу и контент. Нажмите ниже, чтобы дать согласие на использование cookie-файлов и обработку ваших данных. Вы можете изменить свое решение в любое время.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "БОЛЬШЕ ВАРИАНТОВ",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "Я НЕ СОГЛАСЕН / НЕ СОГЛАСНА",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Я даю согласие",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Показать цели",
                PURPOSE_SCREEN_TITLE_TEXT: "Мы с большим уважением относимся к Bашей конфиденциальности",
                PURPOSE_SCREEN_BODY_TEXT: "Вы можете установить настройки и решить, хотите ли вы, чтобы ваши данные использовались в указанных ниже целях. Вы можете установить настройки для нас отдельно от сторонних партнеров. Каждая цель подробно описана, чтобы вы знали, как мы и партнеры используем ваши данные.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Посмотреть поставщиков",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Отменить",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Сохранить и выйти",
                VENDOR_SCREEN_TITLE_TEXT: "Мы с большим уважением относимся к Bашей конфиденциальности",
                VENDOR_SCREEN_BODY_TEXT: "Ниже вы можете установить настройки для отдельных сторонних партнеров, с которыми мы работаем. Разверните каждый элемент списка компаний, чтобы узнать, для каких целей они используют данные. В некоторых случаях компании могут использовать ваши данные без вашего согласия, исходя из своих законных интересов. Вы можете перейти по ссылкам на их политики конфиденциальности, чтобы получить дополнительную информацию и отказаться от обработки.",
                REJECT_ALL_BUTTON_TEXT: "ОТКЛОНИТЬ ВСЁ",
                ACCEPT_ALL_BUTTON_TEXT: "ПРИНЯТЬ ВСЁ",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Вернуться к алгоритму",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Отменить",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Сохранить и выйти",
                CONSENT_LINK_LABEL: "Конфиденциальность",
                BACK_LABEL: "Назад",
                VIEW_COMPANIES_LABEL: "Показать компании",
                HIDE_COMPANIES_LABEL: "Скрыть компании",
                THIRD_PARTY_VENDORS_LABEL: "Сторонние поставщики",
                ON_LABEL: "Вкл.",
                OFF_LABEL: "Выкл.",
                OFF_ON_LABEL: "Выкл./Вкл.",
                OTHER: "Другое",
                NON_IAB_TITLE: "Сторонние поставщики",
                DESCRIPTION: "Описание поставщика:",
                COMPANY_LABEL: "Компания",
                REQUIRED_LABEL: "Обязательное поле",
                PRIVACY_POLICY_LABEL: "Политика конфиденциальности: ",
                PURPOSES_LABEL: "Цели (согласие)",
                FEATURES_LABEL: "Особенности:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Цели (законные интересы)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "RUSO !Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the Privacy <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Разрешить компании Google и ее технологическим партнерам собирать данные и использовать cookie-файлы для персонализации и оценки рекламы."
            },
            no: {
                INIT_SCREEN_TITLE_TEXT: "Vi verdsetter personvernet ditt",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Vi og partnerne våre bruker teknologier, for eksempel informasjonskapsler, og behandler personlige data, for eksempel IP-adresser og informasjonskapsler, for å tilpasse annonser og innhold basert på interessene dine, måle resultatene til annonser og innhold, og få innsikt om publikum som tittet på annonser og innhold. Klikk nedenfor for å samtykke til bruken av denne teknologien og behandlingen av de personlige dataene dine for disse formålene. Du kan ombestemme deg og endre samtykkevalgene dine når som helst ved å returnere til dette nettstedet.",
                    2: "Vi og partnerne våre behandler de personlige dataene dine, for eksempel IP-adresser og informasjonskapsler, ved hjelp av teknologi som informasjonskapsler for å tilpasse annonser og innhold basert på interessene dine, måle resultatene til annonser og innhold, og få innsikt om publikum som tittet på annonser og innhold. Klikk nedenfor for å samtykke eller velge hvilke partnere som behandler dataene dine og for hvilke formål. Du kan når som helst endre innstillingene dine.",
                    3: "Kvalitetsinnholdet og informasjonen vi gir deg, avhenger av inntektene vi genererer fra annonsering. Vi og partnerne våre bruker de personlige dataene dine, for eksempel IP-adresser og informasjonskapsler, ved hjelp av teknologi som informasjonskapsler for å måle resultatene til annonser og innhold, og få innsikt om publikum som tittet på annonser og innhold. Klikk nedenfor for å samtykke til bruken av informasjonskapsler og behandlingen av dataene dine. Du kan når som helst gå tilbake til valgene dine.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "FLERE VALG",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "JEG AKSEPTERER IKKE",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "JEG AKSEPTERER",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Vis formål",
                PURPOSE_SCREEN_TITLE_TEXT: "Vi verdsetter personvernet ditt",
                PURPOSE_SCREEN_BODY_TEXT: "Du kan angi samtykkepreferansene dine og bestemme hvordan du vil at dataene skal brukes, basert på formålene nedenfor. Du kan angi preferansene dine uavhengig av tredjepartspartnere. Hvert formål har en beskrivelse slik at du vet hvordan vi og partnerne bruker dataene dine.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Se leverandører",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Avbryt",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "LAGRE OG AVSLUTT",
                VENDOR_SCREEN_TITLE_TEXT: "Vi verdsetter personvernet ditt",
                VENDOR_SCREEN_BODY_TEXT: "Du kan angi samtykkepreferanser for de individuelle tredjepartspartnerne vi jobber med nedenfor. Utvid hvert selskapslisteelement for å se hvilke formål de bruker dataene for å bidra til å foreta valgene dine. I noen tilfeller kan selskaper bruke dataene dine uten å be om samtykke fra deg, basert på deres legitime interesser. Du kan klikke på deres personvernregler-lenker for mer informasjon og motsette deg slik behandling.",
                REJECT_ALL_BUTTON_TEXT: "AVVIS ALT",
                ACCEPT_ALL_BUTTON_TEXT: "AKSEPTER ALT",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Vis formål",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Avbryt",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "LAGRE OG AVSLUTT",
                CONSENT_LINK_LABEL: "Personvern",
                BACK_LABEL: "Tilbake",
                VIEW_COMPANIES_LABEL: "Vis selskaper",
                HIDE_COMPANIES_LABEL: "Skjul selskaper",
                THIRD_PARTY_VENDORS_LABEL: "Tredjepartsleverandører",
                ON_LABEL: "På",
                OFF_LABEL: "Av",
                OFF_ON_LABEL: "Av/På",
                OTHER: "Annet",
                COMPANY_LABEL: "Selskap",
                NON_IAB_TITLE: "Ikke-IAB-leverandører",
                DESCRIPTION: "Leverandørbeskrivelse:",
                REQUIRED_LABEL: "Obligatorisk",
                PRIVACY_POLICY_LABEL: "Personvernregler:",
                PURPOSES_LABEL: "Formål (samtykke)",
                FEATURES_LABEL: "Egenskaper",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Formål (legitime interesser)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Tillat Google og deres teknologipartnere å samle inn data og bruke informasjonskapsler for annonsetilpassing og -måling."
            },
            ar: {
                INIT_SCREEN_TITLE_TEXT: "خصوصيتك تهمنا",
                INIT_SCREEN_BODY_TEXT: {
                    1: "نستخدم نحن وشركاؤنا ملفات التعريف على موقعنا بهدف تخصيص المحتوى والإعلانات المبوبة. كما يمكننا عن طريقها تزويد الصفحة بأيقونات وسائل التواصل الاجتماعي المختلفة. باستخدام هذه الخاصية يمكننا السيطرة على انتقاء زوار الصفحة.أنقر أدناه للموافقة على استخدام هذه التقنية عبر الويب يمكنك تغيير قرارك عبر تغيير خيارات الموافقة الموجودة على الموقع في جميع الأوقات.",
                    2: "نحن وشركاؤنا نعالج البيانات الشخصية عن طريق استخدام التكنولوجيا المعلوماتية للتعرف على ما يحلوا لزوار الصفحة مما يساعد الفريق الصحفي على اتخاذ قراراته التحريرية. ولديك مطلق الحرية في اختيار من يستخدم بياناتك ولأي هدف. كما يمكنك العودة لتغيير بياناتك الشخصية على الصفحة في أي وقت أردت",
                    3: "تعتمد جودة المعلومات التي نقدمها لك على الأرباح التي نحققها من الإعلانات. نحن وشركاؤنا نستخدم بياناتك الشخصية لتزويدك بالإعلانات التي تهمك ومعرفة الموضوعات التي تهمك على موقعنا ونسبة نشاطك. إذا وافقت على استخدام بياناتك الشخصية للأهداف السابقة فقط أنقر أدناه، يمكنك تغيير اختيارك في أي وقت.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "Settings",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "غير موافق",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "موافق",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "اظهار الاستخدامات",
                PURPOSE_SCREEN_TITLE_TEXT: "خصوصيتك تهمنا",
                PURPOSE_SCREEN_BODY_TEXT: "يمكنك تحديد كيفية استخدام بياناتك الشخصية وفقا للأدوات الموضحة أدناه. يمكنك أيضا اختيار قائمتك المفضلة بشكل مستقل بعيدا عن شركاء الطرف الثالث كل غرض له تعريف مفصل لكي تتعرف على كيفية استخدامنا لبياناتك الشخصية",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "تعرف على قائمة المشاركين",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "حذف",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "حفظ وخروج",
                VENDOR_SCREEN_TITLE_TEXT: "خصوصيتك تهمنا",
                VENDOR_SCREEN_BODY_TEXT: "يمكنك التعرف على خواص كل شركة على حدا فيما يلي. هناك قائمة خاصة بكل شركة لمعرفة كيفية استخدامهم لبياناتك الشخصية. في بعض الحالات تتعرف الشركات على بياناتك الخاصة دون استئذانك سعيا لتقديم ما هو أفضل. أنقر هنا للتعرف على سياسات الخصوصية والمعلومات لاختيار ما يناسبك.",
                REJECT_ALL_BUTTON_TEXT: "غير موافق على كل ما سبق",
                ACCEPT_ALL_BUTTON_TEXT: "أوافق على كل ما سبق",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "العودة إلى الاستخدامات",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "حذف",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "حفظ وخروج",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                CONSENT_LINK_LABEL: "إعدادات الخصوصية"
            },
            fa: {
                INIT_SCREEN_TITLE_TEXT: "ما به حریم خصوصی شما احترام می‌گذاریم",
                INIT_SCREEN_BODY_TEXT: {
                    1: "ما و شرکایمان از فناوری کوکی برروی سایتمان استفاده می کنیم و به این ترتیب محتوا و تبلیغات متناسب شخصیت شما ارائه خواهد شد. برای اعلام موافقت خود در زیر کلیک می کنید. شما می‌توانید این تنظیمات را هر موقع که خواستید تغییر دهید.",
                    2: "ما و شرکایمان داده‌های شخصی را با استفاده از فناوری کوکی بررسی می کنیم تا از آن برای تبلیغ، تحلیل ترافیک سایت و ارائه بهتر اطلاعات به شما استفاده کنیم. شما امکان تعیین اینکه چه کسی از داده های شما برای چه هدفی استفاده کند را خواهید داشت و می‌توانید این تنظیمات را در آینده تغییر دهید.",
                    3: "کیفیت مطالبی که به شما ارائه می کنیم به درآمدی که از راه تبلیغات کسب می کنیم، بستگی خواهد شد. ما و شرکایمان از داده های شخصی شما برای ارائه تبلیغات متناسب با وضعیت شما و بررسی میزان فعالیت بر روی وبسایت و ارائه محتوای متناسب با حال شما استفاده خواهیم کرد. برای اعلام موافقت خود در زیر کلیک کنید. هر گاه خواستید می‌توانید در انتخاب خود تجدیدنظر کنید.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "Settings",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "قبول نمی کنم",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "قبول می کنم",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "اهداف را نشان دهید",
                PURPOSE_SCREEN_TITLE_TEXT: "ما به حریم خصوصی شما احترام می‌گذاریم",
                PURPOSE_SCREEN_BODY_TEXT: "شما می‌توانید درجه رضایت خود را تنظیم و اعلام کنید. می توانید تعیین کنید چگونه می‌خواهید از داده های شما برای اهداف زیر استفاده شود. می توانید تنظیمات خود را به طور مستقل از شرکای ما اعلام کنید. برای هر هدف تعریفی ارائه شده است تا شما بدانید ما چگونه از داده های شما بهره می گیریم.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "دیدن فهرست کامل شرکاء",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "لغو",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "ثبت تنظیمات و خروج",
                VENDOR_SCREEN_TITLE_TEXT: "ما به حریم خصوصی شما احترام می‌گذاریم",
                VENDOR_SCREEN_BODY_TEXT: "می توانید ترجیحات خود در زمینه اعلام رضایت برای هر کدام از شرکت ها زیر اعلام کنید. فهرست هر کدام از شرکت ها را باز کنید تا ببینید برای چه هدفی آنها از داده های شما استفاده می کنند. در برخی موارد شرکت‌ها ممکن است استفاده از اطلاعات شما را براساس منافع مشروع خود و بدون کسب رضایت شما افشاء کنند. می‌توانید بر روی سیاست‌های آن‌ها در زمینه حریم خصوصی کلیک کنید تا به اطلاعات بیشتر دست یابید.",
                REJECT_ALL_BUTTON_TEXT: "هیچکدام از موارد را نمی‌پذیرم",
                ACCEPT_ALL_BUTTON_TEXT: "پذیرش کلیه موارد",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "بازگشت به اهداف",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "لغو",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "ثبت تنظیمات و خروج",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                CONSENT_LINK_LABEL: "تنظیمات حریم خصوصی"
            }
        })
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.logSetCookieEvent = n.logTracking = n.track = void 0;
    var o = t(2),
        i = t(0),
        a = "",
        s = (n.track = function(e, n) {
            a += e + (n ? ":" + n : "") + ","
        }, function() {
            return encodeURIComponent(navigator && navigator.userAgent)
        }),
        r = function(e) {
            return [e.uiLayout[0], e.defaultToggleValue, e.initScreenRejectButtonShowing, e.pCode, e.initScreenBodyTextOption, e.language].join(",")
        },
        l = (n.logTracking = function(e, n) {
            var t = "";
            window.location && window.location.href && (t = encodeURIComponent(window.location.href));
            var o = [n, (new Date).getTime(), encodeURIComponent(e.publisherName), t, "", "", "", "", r(e), a, s()].join(";");
            l(o), a = ""
        }, n.logSetCookieEvent = function(e, n) {
            if (e && e.value) {
                var t = "";
                window.location && window.location.href && (t = encodeURIComponent(window.location.href)), a = "setCookie";
                var i = [n, (new Date).getTime(), encodeURIComponent(o.config.publisherName), t, e.type, e.name, e.value, e.cookieDomain, r(o.config), a, s()].join(";");
                l(i), a = ""
            }
        }, function(e) {
            var n = "https://audit.quantcast.mgr.consensu.org/?log=" + e;
            (0, i.getJson)({
                url: n
            }, function() {})
        })
}, function(e, n, t) {
    (function(e) {
        ! function(e) {
            "use strict";
            e.exports.is_uri = t, e.exports.is_http_uri = o, e.exports.is_https_uri = i, e.exports.is_web_uri = a, e.exports.isUri = t, e.exports.isHttpUri = o, e.exports.isHttpsUri = i, e.exports.isWebUri = a;
            var n = function(e) {
                return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)
            };

            function t(e) {
                if (e && !/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e) && !/%[^0-9a-f]/i.test(e) && !/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)) {
                    var t, o, i, a, s, r = "",
                        l = "";
                    if (r = (t = n(e))[1], o = t[2], i = t[3], a = t[4], s = t[5], r && r.length && i.length >= 0) {
                        if (o && o.length) {
                            if (0 !== i.length && !/^\//.test(i)) return
                        } else if (/^\/\//.test(i)) return;
                        if (/^[a-z][a-z0-9\+\-\.]*$/.test(r.toLowerCase())) return l += r + ":", o && o.length && (l += "//" + o), l += i, a && a.length && (l += "?" + a), s && s.length && (l += "#" + s), l
                    }
                }
            }

            function o(e, o) {
                if (t(e)) {
                    var i, a, s, r, l = "",
                        c = "",
                        d = "",
                        u = "";
                    if (l = (i = n(e))[1], c = i[2], a = i[3], s = i[4], r = i[5], l) {
                        if (o) {
                            if ("https" != l.toLowerCase()) return
                        } else if ("http" != l.toLowerCase()) return;
                        if (c) return /:(\d+)$/.test(c) && (d = c.match(/:(\d+)$/)[0], c = c.replace(/:\d+$/, "")), u += l + ":", u += "//" + c, d && (u += d), u += a, s && s.length && (u += "?" + s), r && r.length && (u += "#" + r), u
                    }
                }
            }

            function i(e) {
                return o(e, !0)
            }

            function a(e) {
                return o(e) || i(e)
            }
        }(e)
    }).call(n, t(8)(e))
}, function(e, n) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, , , , , function(e, n, t) {
    var o = {},
        i = function(e) {
            var n;
            return function() {
                return void 0 === n && (n = e.apply(this, arguments)), n
            }
        }(function() {
            return window && document && document.all && !window.atob
        }),
        a = function(e) {
            var n = {};
            return function(e) {
                if (void 0 === n[e]) {
                    var t = function(e) {
                        return document.querySelector(e)
                    }.call(this, e);
                    if (t instanceof window.HTMLIFrameElement) try {
                        t = t.contentDocument.head
                    } catch (e) {
                        t = null
                    }
                    n[e] = t
                }
                return n[e]
            }
        }(),
        s = null,
        r = 0,
        l = [],
        c = t(17);

    function d(e, n) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t],
                a = o[i.id];
            if (a) {
                a.refs++;
                for (var s = 0; s < a.parts.length; s++) a.parts[s](i.parts[s]);
                for (; s < i.parts.length; s++) a.parts.push(g(i.parts[s], n))
            } else {
                var r = [];
                for (s = 0; s < i.parts.length; s++) r.push(g(i.parts[s], n));
                o[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: r
                }
            }
        }
    }

    function u(e, n) {
        for (var t = [], o = {}, i = 0; i < e.length; i++) {
            var a = e[i],
                s = n.base ? a[0] + n.base : a[0],
                r = {
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                };
            o[s] ? o[s].parts.push(r) : t.push(o[s] = {
                id: s,
                parts: [r]
            })
        }
        return t
    }

    function p(e, n) {
        var t = a(e.insertInto);
        if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o = l[l.length - 1];
        if ("top" === e.insertAt) o ? o.nextSibling ? t.insertBefore(n, o.nextSibling) : t.appendChild(n) : t.insertBefore(n, t.firstChild), l.push(n);
        else if ("bottom" === e.insertAt) t.appendChild(n);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = a(e.insertInto + " " + e.insertAt.before);
            t.insertBefore(n, i)
        }
    }

    function E(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var n = l.indexOf(e);
        n >= 0 && l.splice(n, 1)
    }

    function m(e) {
        var n = document.createElement("style");
        return e.attrs.type = "text/css", T(n, e.attrs), p(e, n), n
    }

    function T(e, n) {
        Object.keys(n).forEach(function(t) {
            e.setAttribute(t, n[t])
        })
    }

    function g(e, n) {
        var t, o, i, a;
        if (n.transform && e.css) {
            if (!(a = n.transform(e.css))) return function() {};
            e.css = a
        }
        if (n.singleton) {
            var l = r++;
            t = s || (s = m(n)), o = f.bind(null, t, l, !1), i = f.bind(null, t, l, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = function(e) {
            var n = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", T(n, e.attrs), p(e, n), n
        }(n), o = function(e, n, t) {
            var o = t.css,
                i = t.sourceMap,
                a = void 0 === n.convertToAbsoluteUrls && i;
            (n.convertToAbsoluteUrls || a) && (o = c(o));
            i && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var s = new Blob([o], {
                    type: "text/css"
                }),
                r = e.href;
            e.href = URL.createObjectURL(s), r && URL.revokeObjectURL(r)
        }.bind(null, t, n), i = function() {
            E(t), t.href && URL.revokeObjectURL(t.href)
        }) : (t = m(n), o = function(e, n) {
            var t = n.css,
                o = n.media;
            o && e.setAttribute("media", o);
            if (e.styleSheet) e.styleSheet.cssText = t;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(t))
            }
        }.bind(null, t), i = function() {
            E(t)
        });
        return o(e),
            function(n) {
                if (n) {
                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                    o(e = n)
                } else i()
            }
    }
    e.exports = function(e, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs : {}, n.singleton || "boolean" == typeof n.singleton || (n.singleton = i()), n.insertInto || (n.insertInto = "head"), n.insertAt || (n.insertAt = "bottom");
        var t = u(e, n);
        return d(t, n),
            function(e) {
                for (var i = [], a = 0; a < t.length; a++) {
                    var s = t[a];
                    (r = o[s.id]).refs--, i.push(r)
                }
                e && d(u(e, n), n);
                for (a = 0; a < i.length; a++) {
                    var r;
                    if (0 === (r = i[a]).refs) {
                        for (var l = 0; l < r.parts.length; l++) r.parts[l]();
                        delete o[r.id]
                    }
                }
            }
    };
    var _ = function() {
        var e = [];
        return function(n, t) {
            return e[n] = t, e.filter(Boolean).join("\n")
        }
    }();

    function f(e, n, t, o) {
        var i = t ? "" : o.css;
        if (e.styleSheet) e.styleSheet.cssText = _(n, i);
        else {
            var a = document.createTextNode(i),
                s = e.childNodes;
            s[n] && e.removeChild(s[n]), s.length ? e.insertBefore(a, s[n]) : e.appendChild(a)
        }
    }
}, , , function(e, n) {
    e.exports = function(e) {
        var n = [];
        return n.toString = function() {
            return this.map(function(n) {
                var t = function(e, n) {
                    var t = e[1] || "",
                        o = e[3];
                    if (!o) return t;
                    if (n && "function" == typeof btoa) {
                        var i = function(e) {
                                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                            }(o),
                            a = o.sources.map(function(e) {
                                return "/*# sourceURL=" + o.sourceRoot + e + " */"
                            });
                        return [t].concat(a).concat([i]).join("\n")
                    }
                    return [t].join("\n")
                }(n, e);
                return n[2] ? "@media " + n[2] + "{" + t + "}" : t
            }).join("")
        }, n.i = function(e, t) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var o = {}, i = 0; i < this.length; i++) {
                var a = this[i][0];
                "number" == typeof a && (o[a] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var s = e[i];
                "number" == typeof s[0] && o[s[0]] || (t && !s[2] ? s[2] = t : t && (s[2] = "(" + s[2] + ") and (" + t + ")"), n.push(s))
            }
        }, n
    }
}, function(e, n) {
    e.exports = function(e) {
        var n = "undefined" != typeof window && window.location;
        if (!n) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var t = n.protocol + "//" + n.host,
            o = t + n.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, n) {
            var i, a = n.trim().replace(/^"(.*)"$/, function(e, n) {
                return n
            }).replace(/^'(.*)'$/, function(e, n) {
                return n
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a) ? e : (i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? t + a : o + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
}, function(e, n) {
    e.exports = '<div class="soft-opt-in-alert qc-cmp-ui qc-cmp-showing"> <div class=qc-cmp-alert-publisher-logo> <img class=qc-cmp-alert-publisher-logo-image src="{{ publisherLogo }}" alt="{{ publisherName }} logo" onerror=\'window.__cmpui("hideLogo",event)\'> </div> <button class="qc-cmp-close-icon qc-cmp-close-icon-first-view" onclick=\'window.__cmpui("dismissConsentUi")\'></button> <h2 class=qc-cmp-title> {{ softOptInAlertTitle }} </h2> <p class=qc-cmp-alert-main-messaging> {{ softOptInAlertBody }} </p> <div class=qc-cmp-qc-link-container style=display:flex!important> <p class=qc-cmp-link-text> Powered by </p> <a class=qc-cmp-qc-link target=_blank> <img id=qcLogo width=70 alt="Quantcast - GDPR Consent Solution" style=border-style:none /> </a> </div> </div> '
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.init = n.setAndSaveAllConsent = n.getConsentInfo = n.hideLogo = n.toggleVendorConsent = n.toggleAllVendorConsents = n.openTableDropdown = n.togglePartnerInfoVisibility = n.populateNonIabVendors = n.populateVendorList = n.togglePurposeVendorsVisibility = n.populatePurposes = n.toggleGoogleConsent = n.togglePublisherPurposeConsent = n.togglePurposeConsent = n.disableAllPurposeConsents = n.enableAllPurposeConsents = n.displayCustomLinks = n.displayNoConsentButton = n.dismissConsentUi = n.updateConsentUi = n.softOptInScrollListener = n.softOptInClickListener = n.addSoftOptListeners = n.removeSoftOptListeners = n.addQuantcastLogo = void 0;
    l(t(3));
    var o, i = l(t(20)),
        a = l(t(21)),
        s = t(0),
        r = t(1);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = 0,
        d = {},
        u = [],
        p = [],
        E = !1,
        m = [],
        T = {},
        g = {},
        _ = [],
        f = [],
        h = [],
        N = [],
        v = (n.addQuantcastLogo = function() {
            var e = document.getElementById("qcLogo"),
                n = document.querySelector(".qc-cmp-link-text");
            (function(e) {
                var n = window.getComputedStyle(e)["background-color"].match(/\d{1,3}/g);
                return .3 * n[0] + .6 * n[1] + .1 * n[2]
            })(document.getElementById("qcCmpUi")) > 127 ? (e.src = i.default, e.classList.add("logo-black"), n.style.color = "rgb(0, 0, 0)") : (e.src = a.default, e.classList.add("logo-white"), n.style.color = "rgb(255, 255, 255)")
        }, function(e) {
            return e.replace(/{{(.*?)}}/g, function(e, n, t, i) {
                return o[n.trim()]
            })
        }),
        b = function(e, n) {
            var t = "";
            return n ? t = v(e) : function() {
                var n = document.createElement("div");
                n.innerHTML = v(e), t = function(e) {
                    return e.querySelectorAll('[data-new-user="remove"]').forEach(function(e) {
                        e.parentNode.removeChild(e)
                    }), e
                }(n).innerHTML
            }(), t
        },
        C = !1,
        O = function() {
            C = !0
        },
        y = n.removeSoftOptListeners = function() {
            document.removeEventListener("mousedown", k), document.removeEventListener("ontouchstart", k), document.removeEventListener("scroll", L), window.removeEventListener("orientationchange", O)
        },
        I = n.addSoftOptListeners = function() {
            document.addEventListener("mousedown", k), document.addEventListener("ontouchstart", k), document.addEventListener("scroll", L), window.addEventListener("orientationchange", O)
        },
        S = function() {
            y(), window.__cmpui("updateConsentUi", 4), document.getElementById("qcCmpUi").classList.remove("qc-cmp-ui"), setTimeout(function() {
                window.__cmpui("setAndSaveAllConsent", !0)
            }, 2e3)
        },
        k = n.softOptInClickListener = function(e) {
            document.getElementById("qcCmpUi") && (!document.getElementById("qcCmpUi").contains(e.target) && "qcChangeConsent" !== e.target.id && !document.body.classList.contains("qc-cmp-ui-showing") && S())
        },
        L = n.softOptInScrollListener = function() {
            (document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) > 50 && !document.body.classList.contains("qc-cmp-ui-showing") && 0 === function() {
                var e = 0;
                window.screen.orientation ? "number" == typeof window.screen.orientation.angle && (e = window.screen.orientation.angle) : "number" == typeof window.orientation && (e = window.orientation);
                return e
            }() && !C ? (S(), C = !1) : C = !1
        },
        A = function() {
            document.getElementsByClassName("qc-cmp-ui-container")[0].classList.remove("softOptIn"), document.getElementById("qcCmpUi").classList.remove("softOptIn"), document.body.classList.add("qc-cmp-ui-showing")
        },
        R = n.updateConsentUi = function(e, n, t) {
            var i = document.getElementById("qcCmpUi");
            window.__cmpui("track", "pgChng", c + ">" + n), c = n, o.softOptInEnabled && (1 !== n ? (y(), A()) : 1 === n && (I(), document.body.classList.remove("qc-cmp-ui-showing"), document.getElementsByClassName("qc-cmp-ui-container")[0].classList.add("softOptIn"), document.getElementById("qcCmpUi").classList.add("softOptIn"))), i.innerHTML = b(e[n].html, t), e[n].init && e[n].init()
        },
        P = function(e, n, t) {
            if (c = n, o.softOptInEnabled && 1 === n && I(), document.getElementById("qcCmpUi")) R(e, n, t);
            else {
                var i = document.createElement("div");
                i.className = "qc-cmp-ui-container", o.softOptInEnabled && i.classList.add("softOptIn");
                var a = document.createElement("div");
                a.className = "qc-cmp-ui", o.softOptInEnabled && a.classList.add("softOptIn"), a.id = "qcCmpUi", a.innerHTML = b(e[n].html, t), i.appendChild(a), document.body.insertBefore(i, document.body.childNodes[0]), e[n].init && e[n].init(), setTimeout(function() {
                    window.__cmpui("track", "Shown"), window.__cmpui("logTracking", o), o.softOptInEnabled || document.body.classList.add("qc-cmp-ui-showing"), i.classList.add("qc-cmp-showing"), a.classList.add("qc-cmp-showing")
                }, 250)
            }
            o.softOptInEnabled & 1 !== n && A()
        },
        w = n.dismissConsentUi = function() {
            window.__cmpui("logTracking", o), o.rejectConsentRedirectUrl && (0, s.isArrayAllFalse)(f) && (0, s.isObjectAllFalse)(T) && (0, s.isObjectAllFalse)(g) && !E && (window.location.href = o.rejectConsentRedirectUrl);
            var e = document.getElementsByClassName("qc-cmp-ui-container")[0];
            e && (e.classList.remove("qc-cmp-showing"), e.childNodes[0].classList.remove("qc-cmp-showing"), setTimeout(function() {
                e.outerHTML = "", document.body.classList.remove("qc-cmp-ui-showing"), (0, s.displayPersistentConsentLink)(o)
            }, 250)), window.__cmp("runConsentUiCallback", {
                reason: "ui-closed",
                uiShown: !0
            }), o.softOptInEnabled && y()
        },
        V = (n.displayNoConsentButton = function() {
            var e = document.getElementById("qcCmpButtons"),
                n = document.createElement("button");
            n.className = "qc-cmp-button qc-cmp-secondary-button", o.initScreenRejectButtonShowing ? (n.onclick = function() {
                window.__cmpui("setAndSaveAllConsent", !1)
            }, n.innerText = o.initScreenRejectButton) : (n.onclick = function() {
                window.__cmpui("updateConsentUi", 2)
            }, n.innerText = o.initScreenSettingsButton), e.insertBefore(n, e.firstChild)
        }, n.displayCustomLinks = function() {
            if (o.initScreenCustomLinks) {
                var e = o.initScreenCustomLinks,
                    n = document.getElementsByClassName("qc-cmp-alt-buttons")[0];
                e.forEach(function(e) {
                    var t = document.createElement("a"),
                        o = e.match(r.MARKDOWN_LINK_REGEX);
                    t.innerText = o[1], t.setAttribute("href", o[2]), t.className = "qc-cmp-alt-action qc-cmp-center-bottom", n.insertBefore(t, null)
                })
            }
        }, function(e) {
            return !0 === e ? "on" : !1 === e ? "off" : o.defaultToggleValue
        }),
        B = function(e, n) {
            var t = document.createElement("span");
            return t.className = n ? "qc-cmp-toggle qc-cmp-toggle-" + V(e) + " isNonIab" : "qc-cmp-toggle qc-cmp-toggle-" + V(e), t.innerHTML = '<span class="qc-cmp-toggle-switch"></span>', t
        },
        D = (n.enableAllPurposeConsents = function() {
            window.__cmpui("track", "allPurpsOn");
            for (var e = 0; e < u.length; e++) p[e] || o.publisherPurposeLegitimateInterestIds.includes(u[e].id) || U(e);
            for (e = 0; e < _.length; e++) f[e] || (f[e] = !0, X(e));
            E || z(0), Object.keys(T).forEach(function(e) {
                T[e] = !0
            })
        }, n.disableAllPurposeConsents = function() {
            window.__cmpui("track", "allPurpsOff");
            for (var e = 0; e < u.length; e++) p[e] && !o.publisherPurposeLegitimateInterestIds.includes(u[e].id) && U(e);
            for (e = 0; e < _.length; e++) f[e] && D(e);
            E && z(0)
        }, n.togglePurposeConsent = function(e, n) {
            n && n.stopPropagation(), f[e] = !f[e], X(e), q(e)
        }),
        U = n.togglePublisherPurposeConsent = function(e) {
            p[e] = !p[e];
            var n = document.getElementsByClassName("qc-cmp-publisher-purposes-toggler")[e];
            x(n, p[e])
        },
        z = n.toggleGoogleConsent = function(e) {
            var n = document.getElementsByClassName("qc-cmp-google-purposes-toggler")[e];
            x(n, E = !E)
        },
        x = function(e, n) {
            var t = e.childNodes[0],
                i = e.childNodes[1];
            t.classList.toggle("qc-cmp-toggle-on"), t.classList.toggle("qc-cmp-toggle-off"), i.innerText = n ? o.onLabel : o.offLabel
        },
        q = function(e) {
            for (var n = _[e].vendors, t = 0; t < n.length; t++) {
                var o = m[n[t].index].purposeIds,
                    i = T[n[t].id];
                if (f[e]) i = !0;
                else if (i) {
                    i = !1;
                    for (var a = 0; a < o.length; a++)
                        if (f[o[a] - 1]) {
                            i = !0;
                            break
                        }
                }
                T[n[t].id] = i
            }
        },
        X = function(e) {
            var n = document.getElementsByClassName("qc-cmp-vendors-purposes-toggler")[e];
            x(n, f[e]);
            for (var t = document.getElementsByClassName("qc-cmp-purposes-vendor-list")[e].getElementsByClassName("qc-cmp-enabled-cell"), i = 0; i < t.length; i++) t[i].innerHTML = f[e] ? o.onLabel : o.offLabel
        },
        j = function(e, n) {
            var t = document.createElement("td");
            t.innerHTML = '<h5 class="qc-cmp-table-header">' + o.companyLabel + "</h5>";
            var i = document.createElement("td"),
                a = document.createElement("tr");
            a.className = "qc-cmp-vendor-row-header", a.appendChild(t), a.appendChild(i);
            var s = document.createElement("thead");
            s.appendChild(a);
            var r = document.createElement("tbody"),
                l = _[e];
            if (n) !o.googlePersonalization && "googlePersonalization" in o || window.__cmp("getGoogleVendorList", function(e, n) {
                if (n)
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t],
                            a = document.createElement("a"),
                            s = document.createElement("td");
                        s.className = "qc-cmp-company-cell", s.innerText = i.provider_name;
                        var l = document.createElement("td");
                        l.className = "qc-cmp-enabled-cell", a.setAttribute("href", i.policy_url), a.setAttribute("target", "_blank"), a.className = "qc-cmp-alt-action qc-cmp-show-google-vendors-link", a.innerText = o.privacyPolicyLabel.replace(":", ""), l.appendChild(a);
                        var c = document.createElement("tr");
                        c.className = "qc-cmp-table-row qc-cmp-vendor-row", c.appendChild(s), c.appendChild(l), r.appendChild(c)
                    } else console.error("unable to get google vendors list. Continuing")
            });
            else
                for (var c = 0; c < l.vendors.length; c++) {
                    (d = document.createElement("td")).className = "qc-cmp-company-cell", d.innerText = l.vendors[c].name, (p = document.createElement("td")).className = "qc-cmp-enabled-cell", p.innerText = f[e] && T[l.vendors[c].id] ? o.onLabel : o.offLabel, (u = document.createElement("tr")).className = "qc-cmp-table-row qc-cmp-vendor-row", u.appendChild(d), u.appendChild(p), r.appendChild(u)
                }
            if (!l.vendors.length) {
                var d;
                (d = document.createElement("td")).className = "qc-cmp-company-cell", d.innerText = "No vendors are requesting this purpose";
                var u, p = document.createElement("td");
                (u = document.createElement("tr")).className = "qc-cmp-vendor-row", u.appendChild(d), u.appendChild(p), r.appendChild(u)
            }
            var E = document.createElement("table");
            return E.className = n ? "qc-cmp-table qc-cmp-purposes-vendor-list qc-cmp-google-vendor-list qc-cmp-hidden" : "qc-cmp-table qc-cmp-purposes-vendor-list qc-cmp-hidden", E.appendChild(s), E.appendChild(r), E
        },
        K = function(e) {
            var n = document.createElement("table");
            n.className = "qc-cmp-table qc-cmp-" + e.className + "-table";
            var t = document.createElement("thead");
            t.innerHTML = '<tr><td class="qc-cmp-table-header">' + e.title + "</td></tr>", n.appendChild(t);
            for (var i = document.createElement("tbody"), a = e.publisherPurposeLegitimateInterestIds, s = "google-purposes" === e.className, r = "features-purposes" === e.className, l = 0; l < e.purposes.length; l++) {
                var c = e.purposes[l],
                    d = document.createElement("h4");
                d.className = "qc-cmp-bold-messaging", d.innerText = c.name;
                var u = document.createElement("p");
                if (u.className = "qc-cmp-purpose-description", u.innerText = c.description, !r) {
                    var p = document.createElement("p");
                    p.className = "qc-cmp-toggle-status", p.innerText = e.purposeConsents[l] ? o.onLabel : o.offLabel;
                    var E = document.createElement("div"),
                        m = document.createElement("div");
                    if (a && a.includes(c.id)) p.innerText = o.requiredLabel;
                    else {
                        var T = B(e.purposeConsents[l]);
                        T.onclick = e.toggleClickFunc(l), E.appendChild(T)
                    }
                    E.className = "qc-cmp-toggler qc-cmp-" + e.className + "-toggler", m.className = "qc-cmp-purpose-actions", E.appendChild(p), m.appendChild(E)
                }(c = document.createElement("div")).className = "qc-cmp-purpose-info", c.appendChild(d), c.appendChild(u), r || c.appendChild(m);
                var g = document.createElement("td");
                if (g.className = "qc-cmp-table-row", g.appendChild(c), e.hasShowVendorListLink) {
                    var _ = document.createElement("a");
                    _.className = s ? "qc-cmp-alt-action qc-cmp-show-google-vendors-link" : "qc-cmp-alt-action qc-cmp-show-vendors-link", _.onclick = s ? function(e) {
                        return function() {
                            window.__cmpui("togglePurposeVendorsVisibility", e, !0)
                        }
                    }(l) : function(e) {
                        return function() {
                            window.__cmpui("togglePurposeVendorsVisibility", e)
                        }
                    }(l), _.innerText = o.viewCompaniesLabel, m.insertBefore(_, E);
                    var f = s ? j(l, !0) : j(l);
                    g.appendChild(f)
                }
                var h = document.createElement("tr");
                h.appendChild(g), i.appendChild(h)
            }
            return n.appendChild(i), n
        },
        F = (n.populatePurposes = function() {
            var e = document.getElementById("qcCmpPurposesContainer"),
                n = {
                    title: o.publisherName,
                    className: "publisher-purposes",
                    purposes: u,
                    publisherPurposeLegitimateInterestIds: o.publisherPurposeLegitimateInterestIds,
                    purposeConsents: p,
                    hasShowVendorListLink: !1,
                    toggleClickFunc: function(e) {
                        return function() {
                            window.__cmpui("togglePublisherPurposeConsent", e)
                        }
                    }
                };
            o.publisherPurposeIds.length > 0 && e.appendChild(K(n));
            var t = {
                title: o.thirdPartyVendorsLabel,
                className: "vendors-purposes",
                purposes: _,
                purposeConsents: f,
                hasShowVendorListLink: !0,
                toggleClickFunc: function(e) {
                    return function() {
                        window.__cmpui("togglePurposeConsent", e)
                    }
                }
            };
            e.appendChild(K(t));
            var i = [{
                    id: 1,
                    name: "Google",
                    description: o.googlePurposesText
                }],
                a = {
                    title: o.otherLabel,
                    className: "google-purposes",
                    purposes: i,
                    purposeConsents: [E],
                    hasShowVendorListLink: !0,
                    toggleClickFunc: function(e) {
                        return function() {
                            window.__cmpui("toggleGoogleConsent", e)
                        }
                    }
                };
            !o.googlePersonalization && "googlePersonalization" in o || e.appendChild(K(a));
            var s = {
                title: o.featuresLabel,
                className: "features-purposes",
                purposes: h
            };
            e.appendChild(K(s))
        }, n.togglePurposeVendorsVisibility = function(e, n) {
            var t = n ? document.getElementsByClassName("qc-cmp-google-vendor-list")[e] : document.getElementsByClassName("qc-cmp-purposes-vendor-list")[e];
            t.classList.toggle("qc-cmp-hidden");
            var i = -1 === t.className.indexOf("qc-cmp-hidden");
            (n ? document.getElementsByClassName("qc-cmp-show-google-vendors-link")[e] : document.getElementsByClassName("qc-cmp-show-vendors-link")[e]).innerText = i ? o.hideCompaniesLabel : o.viewCompaniesLabel
        }, function(e, n, t) {
            var o = document.createElement("td");
            o.className = "qc-cmp-company-cell", o.innerText = e.name;
            var i = t ? B(g[e.vendorId], t) : B(T[e.id]);
            i.onclick = t ? function() {
                window.__cmpui("toggleVendorConsent", n, e.vendorId, t)
            } : function() {
                window.__cmpui("toggleVendorConsent", n, e.id)
            };
            var a = document.createElement("td");
            a.className = "qc-cmp-toggle-cell", a.appendChild(i);
            var s = document.createElement("div");
            s.className = "qc-cmp-arrow-down " + n, s.onclick = t ? function() {
                window.__cmpui("openTableDropdown", n, !0)
            } : function() {
                window.__cmpui("openTableDropdown", n)
            };
            var r = document.createElement("td");
            r.className = "qc-cmp-dropdown-cell", r.appendChild(s), !t || e.description || e.privacyPolicyUrl || s.classList.add("qc-cmp-hidden");
            var l = document.createElement("tr");
            return l.className = "qc-cmp-table-row qc-cmp-vendor-row", l.appendChild(o), a && l.appendChild(a), l.appendChild(r), l
        }),
        M = function(e) {
            if (!e.itemIds.length) return null;
            var n = document.createElement("ul");
            n.className = "qc-cmp-vendor-info-list";
            for (var t = 0; t < e.itemIds.length; t++) {
                var o = document.createElement("li");
                o.innerText = e.items[e.itemIds[t] - 1].name, n.appendChild(o)
            }
            var i = document.createElement("section");
            return i.className = "qc-cmp-vendor-info-section", i.innerHTML = '<h4 class="qc-cmp-vendor-info-list-title">' + e.title + ":</h4>", i.appendChild(n), i
        },
        G = function(e, n) {
            var t = e.policyUrl || e.privacyPolicyUrl;
            if (t) {
                var i = document.createElement("a");
                i.className = "qc-cmp-alt-action", i.href = t, i.innerText = t.replace(/(^\w+:|^)\/\//, "");
                var a = document.createElement("div");
                a.className = "qc-cmp-vendor-policy", a.innerHTML = '<span class="qc-cmp-bold">' + o.privacyPolicyLabel + "</span>", a.appendChild(i)
            }
            if (e.description) {
                var s = document.createElement("p");
                s.className = "qc-cmp-vendor-description-el", s.innerText = e.description;
                var r = document.createElement("div");
                t && (r.className = "qc-cmp-vendor-description"), r.innerHTML = '<span class="qc-cmp-bold">' + o.descriptionLabel + "</span>", r.appendChild(s)
            }
            if (!n) var l = M({
                    title: o.purposesLabel,
                    itemIds: e.purposeIds,
                    items: _
                }),
                c = M({
                    title: o.legitimateInterestPurposesLabel,
                    itemIds: e.legIntPurposeIds,
                    items: _
                }),
                d = M({
                    title: o.featuresLabel,
                    itemIds: e.featureIds,
                    items: h
                });
            var u = document.createElement("td");
            u.className = "qc-cmp-vendor-info-content", u.setAttribute("colspan", "3"), a && u.appendChild(a), r && u.appendChild(r), l && u.appendChild(l), c && u.appendChild(c), d && u.appendChild(d);
            var p = document.createElement("tr");
            return p.className = "qc-cmp-vendor-info qc-cmp-hidden", p.appendChild(u), p
        },
        Y = (n.populateVendorList = function() {
            var e = document.createElement("tbody");
            e.id = "qcCmpVendorListBody", e.className = "qc-cmp-vendor-list-body", m.forEach(function(n, t) {
                e.appendChild(F(n, t)), e.appendChild(G(n))
            }), document.getElementById("qcCmpVendorList").appendChild(e)
        }, n.populateNonIabVendors = function() {
            var e = document.getElementById("qcCmpNonIab"),
                n = document.createElement("tbody");
            n.id = "qcCmpNonIabVendorsBody", N.length ? (N.forEach(function(e, t) {
                n.appendChild(F(e, t, !0)), n.appendChild(G(e, !0))
            }), e.appendChild(n)) : e.classList.add("qc-hide-table")
        }, n.togglePartnerInfoVisibility = function() {
            document.getElementById("qcCmpPartnerInfo").classList.toggle("qc-cmp-hidden")
        }, n.openTableDropdown = function(e, n) {
            var t = n ? document.getElementById("qcCmpNonIab") : document.getElementById("qcCmpVendorListBody");
            t.getElementsByClassName("qc-cmp-arrow-down " + e)[0].classList.toggle("qc-cmp-flip-up"), t.getElementsByClassName("qc-cmp-vendor-info")[e].classList.toggle("qc-cmp-hidden")
        }, n.toggleAllVendorConsents = function(e) {
            window.__cmpui("track", "allVends" + (e ? "On" : "Off"));
            for (var n = document.getElementsByClassName("qc-cmp-toggle"), t = document.getElementsByClassName("isNonIab"), o = "qc-cmp-toggle-" + (e ? "off" : "on"), i = 0; i < n.length; i++) n[i].classList.contains(o) && m[i] && Y(i, m[i].id);
            for (var a = 0; a < t.length; a++) t[a].classList.contains(o) && Y(a, N[a].vendorId, !0)
        }, n.toggleVendorConsent = function(e, n, t) {
            t ? g[n] = !g[n] : (T[n] = !T[n], H(e)), W(e, t)
        }),
        H = function(e) {
            for (var n = m[e].purposeIds, t = 0; t < n.length; t++) {
                var o = n[t] - 1,
                    i = _[o].vendors,
                    a = f[o];
                if (T[m[e].id]) a = !0;
                else if (a) {
                    a = !1;
                    for (var s = 0; s < i.length; s++)
                        if (T[i[s].id]) {
                            a = !0;
                            break
                        }
                }
                f[o] = a
            }
        },
        W = function(e, n) {
            var t = n ? document.getElementsByClassName("isNonIab")[e] : document.getElementsByClassName("qc-cmp-toggle")[e];
            t.classList.toggle("qc-cmp-toggle-on"), t.classList.toggle("qc-cmp-toggle-off")
        },
        Z = (n.hideLogo = function(e) {
            e && e.currentTarget && (e.currentTarget.className += " qc-cmp-hidden");
            var n = document.getElementById("qcCmpNavPublisherLogo");
            n && (n.className += " qc-cmp-no-height")
        }, n.getConsentInfo = function() {
            return {
                publisherPurposeConsents: p,
                publisherPurposes: u,
                purposeConsents: f,
                googlePurposeConsents: E,
                vendorConsents: T,
                nonIabVendorConsents: g,
                vendorList: d,
                nonIabVendorList: N,
                consentPage: c
            }
        }),
        J = (n.setAndSaveAllConsent = function(e) {
            for (var n in window.__cmpui("track", "setAllConsent", e), T) T[n] = e;
            for (var n in g) g[n] = e;
            f.fill(e), p.fill(e), E = e, window.__cmp("saveConsents", Z(), w)
        }, function(e) {
            return !0 === e || !1 !== e && (void 0 === e ? "on" === o.defaultToggleValue : void 0)
        });
    n.init = function(e, n, t) {
        var i = "on" === (o = window.__cmp("getConfig", "internal")).defaultToggleValue;
        E = i, !o.googlePersonalization && "googlePersonalization" in o || window.__cmp("getGooglePersonalization", function(e, n) {
            if (n) {
                var t = 0 !== e.googlePersonalizationData.consentValue;
                E = t
            }
        }), window.__cmp("getVendorList", "LATEST", function(a, s) {
            s ? (_ = (d = a).purposes, h = d.features, window.__cmp("fetchPurposeList", o.language, function(a, s) {
                s && a && (a.purposes && a.purposes.length > 0 && (_ = a.purposes), a.features && a.features.length > 0 && (h = a.features)), f = Array(_.length).fill(i), u = function() {
                    for (var e = [], n = 0; n < o.publisherPurposeIds.length; n++) {
                        var t = _.find(function(e) {
                            return e.id === o.publisherPurposeIds[n]
                        });
                        t && e.push(t)
                    }
                    return e
                }(), p = Array(u.length).fill(i), m = d.vendors;
                for (var r = 0; r < m.length; r++) T[m[r].id] = i;
                window.__cmp("getCurrentPublisherConsents", null, function(o, i) {
                    if (i) {
                        if (o.standardPurposeConsents)
                            for (var a = 0; a < u.length; a++) p[a] = J(o.standardPurposeConsents[u[a].id])
                    } else console.error("Unable to get current publisher consents. Continuing");
                    window.__cmp("getCurrentVendorConsents", null, function(o, i) {
                        if (i) {
                            for (var a in o.purposeConsents) f[a - 1] = o.purposeConsents[a];
                            for (var s in o.vendorConsents) T[s] = o.vendorConsents[s]
                        } else console.error("Unable to get current vendor consents. Resetting UI to initial state...");
                        ! function() {
                            for (var e = 0; e < _.length; e++) {
                                for (var n = _[e], t = [], o = 0; o < m.length; o++) {
                                    var i = m[o];
                                    i.purposeIds.indexOf(n.id) >= 0 && (i.index = o, t.push(i))
                                }
                                n.vendors = t
                            }
                        }(), P(e, n || 1, t)
                    })
                })
            })) : console.error("Unable to get latest vendor list. Aborting UI display...")
        }), window.__cmp("getNonIabVendorList", function(e, n) {
            if (o.nonIabVendorListUrl && (window.__cmpui("track", "getNonIABVendorList", n), window.__cmpui("logTracking", o)), n) {
                N = e;
                for (var t = 0; t < N.length; t++) g[N[t].vendorId] = i;
                window.__cmp("getNonIABVendorConsents", null, function(e, n) {
                    if (n)
                        for (var t in e.nonIABVendorConsents) g[t] = e.nonIABVendorConsents[t];
                    else console.warn("unable to get the NonIab vendor consents")
                })
            } else console.warn("Unable to get NonIab Vendor list.")
        })
    }
}, function(e, n) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAAgCAYAAACclNOPAAAABGdBTUEAALGPC/xhBQAADHBJREFUeAHtmgmwllUZgBEJN0RFc0eQFB1XMgQVkJuOW1qjWbllc0tHrWk0oVyy1MoMMsW1RctmHNOMtFIzDUx0chfRcmdzRdyRcAvEnuf6H+bwcr7//+/l6jjd+8489zvnPe853/ne8573nHthxR4dlxU73rW7Z7cHyh5YoaxeRrsamuEwEraFDUDdQpgHs+AeuBVmQrd0e+AD8UBfRh0LD8N7TTAfm4kwArql2wOd6oEWRnsQmgnEaPMO/SaAWbSrS08c0KeA+q4ky+WHVjz1BsRAa299MmOsC11ZNuXjH4XZGTMobwFdSQbysSU/bNnICV/EwLthveBbRPsCeKuBnWPcAqtDVxUD778Q/bldF3PI4Ao/bJ/7IR4bW9H4S+iVG2Vlf2k5CnYEf7kZAnvDefASlKQF5bhSQxfRGYhu4Fysq+9K0m4/+GecGyDuZOtvwjFQ7089m9F+E5T6uwC7Q1cUM4P+y/3iCeSG7kqyOR9b8kPlSbEXHRZD7jjLOu9QaEa8vE+BOIZ19fUCmuZOF3+p2hAGwSawFjT7py5MK8VxHW8grAn1ZGMaSwvhBm5WfJ/j+B3rQ2/oiKxKJ/9kl/yxNuV4SjYzruNsVBvHefnXmEaifckPBuoSyY/mo9GWFutS9Fcs6VG/4L3Sce6CuFAj0Q2DO0GHngg6JJdfUfHiG+WrKJa6a1C/HiZHQ+rrgffgz8CW4DxWBjeW83sWboera08eS4lzjBtQ+4kwGMaA2d73uJivwTS4ACZBklEU3OT94GNJWXva7wR4EV6Ci2AR5KKP9oeDYAjoK3VvwFzQj5fDbVBP3IQHwn6wNTifVcD36Y85cC/oj5vB5FESv+EA+BK4Fs5Hv3o/fh2egBvhSnDMJI388B0M9cPLoA/bxOjVsTGz+XfF9uzktsH4cX5hLMc+q2ZgJn2+YKPTSnItyji37xcMD0P3VME29rX+LvwOPg65HEkl2l+IbjQYCLEt1V3gMZDkFAqprd7zSexWSp1qTwNnCtTrZ5vfcAmsDiXRn49Do3FSu34eUBhoELqbmxznGezyDd2sH56mnxuuTdyJaVL50wl2RHamkwuUj2X5bjA7mPJnQWzfB11JJqKMticFw6OoLy7YxX6xfit93CBJWilEG7OQuz7qY91sMRwUM2BsL9UfwS4PSO9ULk7Jtkp3HfZmvVzMim9DVZ8q/YP0MfsnccP+C6rsS3rX/uDaAM364THsexscikdCSVysjshDdHqu0HEQOlO9gdOZshWDnQ0rhEENkKkwCR4AM0qUXVEcHZWhPoq6d69G4rGWxrLcjOSB5F3sMujfTMfMxkz47ay+MWWzeh7oNvv9+kF/6Jd3IIobwmM0yVgK26ZK7alf7wPHcUNF8XeFn8HqkGIs2sR67ocev6W1FOn7xl7tqN9WGHMhOoPH1NyZGfKCwrvc1cMgOaQX5RaYAfFb70KX7FoL7cn+Ktr2gJ3gh1DKQI+i9/s+DeeAvvW70xg+DYzL4Gw4EZybUpVNPHZPBYP9YngT8vEsew9Lme2UQvtsdM4pvcvvHQoGaBxrOjrvh2I5b3+Wuhs0+UubVijN6TD0I0A/XAoLIR8r98NJtBnIbfInfuaGqexgHZU/0zGNkz91gtmjswLSxZ9ZeFcLupLsj3Ix5HPSyWYnpRXytlS+wsYg51FP7en5MroUGJr3h7hYLsxmNmbiNcZjK42Tnv9Gt35mZ/EIcDGTTXoeaiPiBku69DyorWXZH66xGS/Z+fSXFE8E574A8rbrqZckXav0rXNzzAszQ7N2yQ+bZzZLdosvLEk8Aks2Vbq0g6raO0vve86FPtmAfriLUpI7UM6HNbJGd2a9I9ajbVxmn4rXUDg2VWpPj0mzRpKljqKk5Bn1Q9ANztpT8QwKc1Ol9ryc52lgwOQykoobx2z0l6xhEeWbsnpevJfKHBiQKV13fZICMWvq0ULlZPA9T0OKneMoT4CUBQ3IeZAkfm9R36umfTW1hqf3vY6IH1Tq62TdccsT6HE+Hpse2VXSmwYDxEDRKQOhvaLjHy90Mhv6TTGYO/J9OzBO7Oe6TIEobpBjIGbOmTXDi2OHrO5c9UeiH+UUVJlZ25H8Aoq5kGfz1aifCSeAPjGDez0ysKfBW9BhSQHp8VmSbVDmO61kU9KtiXLTQoMO9iPdfR+EGHQ7w2jwIu4x0Rc8DsVF0MYgbY+YUd3xUUoZJNo0Wx9UMHwO3SsFvaobKvS5Wj8PA/1hBjajujbJH25QfVHyR0/0Br5H8ckQxXGG10htz1CYBL+A+5KyPc8UkPdXdNoN/Y8r2uqp3e1x92o/HeaBDuls2Z8BT4GhnT3whzSev5FG8S7ncdsR2Z1OPwA3qMHVUTmLjqPA60AjMeC/BofA6fBTaJekiU6l14uFnrug266gb6RqxSAeP/a5GUrHg231pFGfb9D5amgUjB7vbggv3h81afSN7ZnvFzC+HkZAWuNSfzOg/qgX9K/R/jk4Fyw3I2be8XBwM8a5TcqQL6G8Eb6SN1L2iDsV/MAopnl3gLsiF+8oe+aKWtkj75qCPldVLYofWCWb0TAOouM9PrxueMd5AfzGV8Ej+xZYCz5KYjaM4hz158LYUKe+Lm3ng2uXiwlHfzwAz0Pyh3e+v4N+rBID8XiYAK5tC2wPm0BfqBL7/BHqBfxSfVNAqvw5mGp1QC4HUhkLZ+dKygbYbDgu6Kuqf6PBy289Kd1lnGPpPprG2ZtCPO5movPIeioZZc91KH8UM+SMbI6pOIDCxqCfo+yDYmhQTqHeDzYIeoNRfzwU9FZXhGb98TS2v65hnPieLWA3aIV4TRuMzg0yB5qSPCDvpsfv4fBCTzOhC+nT3ZLkPAoHwOikqHi6C3+Utb1HueSEIeivzewsjgI/ukoGFhruQFcKRk3d1TGA1X/Y8m544b3U1RkgSfpQ8Nj7SVLUnq7bWbB10JtQ1g46q2bFUjDaZsCvZyHI29T3hRPA9UriON8Es7YBKpPAE3Yy5DFleSWoJ0v5oWewPJn6k0FnVbuT4B4YDwah95PdYDo0Eh06NTPyY1/O6ql4JIVtUoWnDr8Q8o/MmtuKOibKVijikaXNRmCmL2Vi2z8sMegGhJd5tZgWdFYNCAMjyaoUzoAYjCaKm6B0d/8E+rUgitl0AqwRG2p112lXMOEkXKNhEMXAi++eh85rUpWU/LCMrRNwIHfF8mL0XwbxGoCq8n8EvUKbWfKvoJOr5uAGUQ6Hks0/0LdCC3wWzgSzZsn2efQps7QWbO5DF52Nqu2fQd8J9v+hPhCS9KfwOsT3eq+9EX4DaYMcVrCzn5tuCkyEhyGOZf0iUPaEUrsn4FFgEtkHToPHoGQ7H70nyWowq2AzB913YQ/wyvQ9UBfHcu2TmAxKfngRvX64FEpxgvr9F5VeEF/YqG5geySUZChK76GNxrBdB0W7FJAeNwZUbK+qL8LWoMnbP8iAXIV3zQjvy989kzazi2LG8NqUtzdTdqMlP/eh/Eg7x4j+tT4QFIO4mTlEG4NvWweoiX54AqJdqs+mbcn/9qn1WfKYRMmd5C8iyyMeBcdUDGDWGVfRlqvNdJfkilo5ZawXqH8LzCKNxGA8HqYFw55ZPY2bqYrZMbXnfdXFuvfnen9dMMMmeZfC0VDPPtmmp5vpUHi2pljA81jw2YycjtEtwTD/Bn0/PrQ3qhqMR4DXkCTt8UPqs8zTiX0evJv4gSmaq546NLY5uS2gJC7+WNCpsZ9137sujIE3AvbLZT8q90NpHHXef9NdbDLlfDyPpX6gfBnyNsv/hFKgbonea0Vu7wYZALmsScUgK81tNvqVcmPKveDr8DCU+qjznX8A51CSXVHeAVX9H6TtkFpHx8m/YS71AbW29DAObod6p5pr7bXik1CSen54ig69S04uDaRuMHiZ3Rr6g0eDWck733S4G3aEcyDKVSgOjsqsviHl0bAN9AU/7E4wIM1qfojkYiBol8vKVHYB5+GYbhAzh8EoOlPZAPIg0O45WAx+1zqQi/28wkTxzuN7cj8aAI7lvHNxc48Efej7e8N88Hi9Enx3lFVRfAp2gI3Aun1mgMHmHbCeGNg7ge90zZyn3zEV7G/WUtaDVdpK7/+o+gavFB7DzmlT8ARMMfAEZcd1c9cT/TACnJO+i35A1Xni4C68HxTZq/Ne0z3S/6sHjPjOFDPNbBgOZrBXa1juB9dBKROg7pZuDyx91HSmPzw682PMsU3Vb4KZs1u6PVD0wP8ARf3Y76F3EOQAAAAASUVORK5CYII="
}, function(e, n) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAAgCAYAAACclNOPAAAABGdBTUEAALGPC/xhBQAADaZJREFUeAHtnAmslcUVx8EF1Kq4iwsIBhQVRat1qQs2UlQ0Ki7Rti6AtlpjjKlaSVWSVq1tTLoo1boUME1asS5VSy0uiLi1KpsRxQ1wBcECoijK1t/vvjs3c+fOd999T6zLe//k/2bmnDPnmznf+Wbmu/dChw7taI/AlygCHRsZy+rVq7XrC/eHe8BtYWe4Gi6Er8LJ8JmOHTsuoGxHewTWfARIxHXhqXAS/AQ2h7cxuA72WfOjaffYpiNAUu0BJ8DWYBGdhsN12nQQ2yff4ghkt2wS6Wg8jYZbtNhjdYfbaZ7FNv5BtbjttIhlN2Y7BnrECVhJZRhxeS0Ivu4lcdieOd4KWxYHOg6AH8DmsKo5g7L+Lsp4EF/32FfNj7nvDFeWYxEXnsXbDJj4TgVx6BcHoWpLpcMOKMfADWOjqP489Tvgf+B7cF3YCw6Cx8L1YYrBCEbAS1NFG2n74vcJjGOzgrbytoSWxYFk7AhvgzksRzgCFiVqB3T7wmdgDssQ7teWoh/myrxdGT5KgmI8dw82baFkvr0L4pDfKTA+GK6AKdyaz2skaNhtBaekDsrtcZTZM2sjvltj4/XghnAzuDF0Rf/MwI9+9bcJrNplUufou8NcQvZObYva9Pd6G8FN4QZFdo3I6f+Nsp8ulJ0a6ZOzoW+Iq+NaO2cTy7DZHubisFNsFwfzHBQ5x7dx+B4ZdyqqYzefi/4Q/SSYBu67yPaEU7ExMc6Em8KwdZmsY/Exi7IK2B+HYBcYbNei/gi2T1UZakDAKTxCyL7QFzMD7zbp2Vj/T8B76D+TsgroXbmOhvG1JmM7Hl1X5GfDI6GfxTrmhcgdx83Y+FlsCWU/e9OwTxpXx38yNm9SLoH30tcXnSqg74/gRLgv1I/3y93mDcpHofF6kbIQ2Hp+HwiPgp7XtobKvN6H6OdQOn7HMJ2yENgeivIE+C2oH+O6HBqDGZT3w/vwU3mJRW48jYP2cb7R7BDi4HyMwz0KvYlbw/dgCjN6t5JRC/7QZ1TqqNy+snw9n665GRsToQbY3ZuxvTw1xGYgnJaxzYlMzt/ADWM/tM/KGI9E1g++ktEFkTf39OCL+s+CoplyFnoTpALariZ/g+5O9bAE5ZXQxKgB8v3hU7ARfIzRLXDz1BEyd76xsLnxYLL6eegDUAL1RuMwB9umeVA5CubwQHDckhJH/WHuzfJx5G4/bhveiBSuPDXAyJuTYnhsiPIkaFBbinvosF7wRX1IxsG/kNVLxtDFpCydDSl/GoTNlC+gryQk9R3hjGb6pOpbEVStPrQPg4tTwwbafgnSJYqHR5PHGugXmyylcYQ+KBuNw0xsO7lkir2aipq/j9RIGhO49M/NmPZGtilcldG1WsREetL5elhJrMjZbOpTodtjDscgHJJTRLLDqfeK2kVVjwsefURVgjSJsn8rY2YevomPhrtmLYuFrsznBjV+PKbcAiuJFXSUxsF4zIE5HIzwgkhxPvWDonaoGtdpMHefN0DuN3bOx2NNIyjFISSkNzQHzwWtwft0ej3T0WTcCnp+WZP4Mc68CTHm0PAI4FucZx7Lk+A8mOL7BK+RwE2g46nQJL4Z5h6sQ/BlMs6E90L7pPNdjWwiVO+5K/gZQv0QmMIx/xFeAe+DwZ5qBRdz3c3KrdMoe1Q0TZX5FKfAOB6DaM9qUlf9PQVfnSTS71Vpmj7uOx5ZPxji6m7lWTKGD/AR0Bxyng/DenH4J/qmeXHhu2AOuSeDfs0DZ26FOeyD0O/I18iWXfb1UuZCHuJrgN1pGds3kG2kMWVuy7bLONh0xil7pT1KRYIFtLcMF6beA36U2Pixz87BxpJ2Zzg9sbP5KkxtL8rYKTqh7MujUYoz4+uFOkaeu1ckxm71XeF2MP2SxAeiBtgZnxTuWiWg6A5zcegTbCzDtlK0Ovgkf9nhHMbCeHtaSnsizOEhhEvgxpHSt/6qZIt0Vn36f8Hb46eJ/C+0hyayzrTdsgKK/KZyV67cC+RVXPel4KxceqMvgr65xnB1vROOg5MjxQrqrlI5PIbwHdgtUrpzGlfzIs2Ng0isIcj9lGIRZcCFVEbBZdC8+RjGu5FxyaEqDiEhY8dxJ7fY1iLX18CYLOkkW3uNDgTFiY+o54AAGmAnvh509Uq3DkR14bnruYyFATdZTeiA3E0Munrl3ijXTgw8+jyYyJyzK41z7gnDouEcn9YW/dWWRaCvYwzx8EFOHzS76s9tfgH0bBywCZXR0F3FM6RxmQ6ncV0fhs+EkJCvF3jZBfk/CnSFYgbq6mOwUpj4TtLJfi7g2n1xfAB0xfGp98FwOzaorlx+zONNaAkct09+ilUIQkKkupa2e2U6vI3s3YzcpLspJ09lxMPt3nj0gz1gGg/jYpKlWItrLKO/9/+8VEm7e5nHlHXaupK7pY+h72tleYuKkJBTCnp9B/k1Bbp6YpNh24yBg1wITYw1CoJxEA4vg/2hK+FXDRtnBryIG5u+LGTMakXEY0+krqIDYbzC1RrXl/wS9aHQB70ejLlJL8/h+pcw9lH1OuR0YaV6FqWrQAq/TtwpFTbQ/gE2wXdsPpFBtmZFqduHMfr2+AA8HDaXjG5Pdf2h/7LAFbjFIB4D6DQBDobNJaPxKLwO92su+kHwr/AT2Aj8xOMmxmG/FqG0QnpROj9Ez5OS3m5vvtIPS+S+FXoGuRT6MU58gz1PmSApPD/enQqTduwnVnmtLBiH2/J1cP3EYDHth+EM+A6cX6Zz/jvMbVOIvzB8kLly6bty7o+xawjEwy35RmgZw7O7STodGo8F0OOA8jtg7oiFuHQm9QztR2N7UR4F+8M+sCsMuyzVKngeHk6f8Yx/ZZWmTiN2dgN2J8B0ZTsdp5NwOib2Q/tT5D5Z58TyOvWJ6FyJ6yEeT8mOazixHep0OhKdT2QMz16DGGPNiwj+NkPXcIBip59zfVbGf3dk3vS3Uh3z8Fy4OwwPcUfqHr1cIHaEMXw4jyUek2KhdfzYz1WyWdB/KkbSrytNeO+LYzgMDobpsWM3ZFvCebAhxAkwkR4eYI9JepoQNzAAV5TrTcRIfzV17b8ZyXJVn/Ar6GsCC4MYAlkSlP/sSukYYuxNY5dYkNR7JW2bHg1qkrFstw1lc9tY2fRzLUIswkUmU1EWLwhdaB8HR8IKykl0LYJ9KsKmyukU7mopniUeNclYNjLhTZoU/huqAQjPThQv4msEXIRcToN/xvZOyruh+RLgzpbuXEEXyqo4VCbPBUyQi6FLeQrPZb+Ffs95ATwQ7ky7N3wcNofrkoB4FnEyKYbh1y24BOrbU/kd7Nwkyf7NJbYfRvvkVwGZT/BV0Pl8kTDumycD8Ma+kMhsXsq49wvy8rwupO2DGuNDGuNhvMgEvR9w1yQGMuNwJXTXSGGiePw6MeFP6NcnNab934zMMb2fkQeRyVsVh6rBkzQvc7GzMLod5pLAwITgmFQ6rPJBO8U4BJfFQq7jDy+mIEuDapL7Rf4DlPoeCE3Keng5ozwQmT82Hk3p9r0BdNzDYD/4/4RxcoeIYUKOZnyPU86DlxMTPzb5A/UbYAxXsAfR3U/5LtwTHgxT3IUPf/43K1XQdoe5A92NlHOgieauZjz2hzm4uj0F58JtIgN3F7+F+xWl99C56OsSGK+ONDs8wZgWWgHLYBoHFw2/7TIOzs13klpgcDJ8H35W+K8PKytefCXkh8DcL4Jy1/RmpRiuP4TdoL/HK8LyjCL150td6UmlHJKxfxZZbsXdFblbWwy/ausR5krdXzbNhkWYhaJzeS5+fTi+yLCO3K8re5d9+CI0u46t8ViV6NNfSfmzttIcKP2OvAh+5Vh0D41xJdmpGwfnWoQ5KCq/9gnxK5Vk9VgqR8BnqhQtb3Shyym5blxjEnK/AmsOnq3+VGSEnzfRVa3AiW26gl+BPn25qkm2xEc9faqrajO+pfhydSuCK0cJ2LqangEfbZI09HcJVkPp+4rWlIspPHqlq5FqYTziMY6kPUFFhFj/e+TuNDm4IrpCpvA943zG8u+goN5wHEKfmpKMNavPhVNg+lQhagg+vd1rnCNA7orwa+jvCHNwZeoJfUp9EmO6RVSAbiicDYvwCoqhdqD0LBz78j84CCvkGYlOu6dhfJNK10XmCunqEvtyZ+lRMij/od0V5n7wgLg05tIKGfog8wfMP4eOqx4eRXlA6BeXyAfDmXU6v4nO94GO0B/XxHNYTLtH8Ed9LeiH3fX8oV7t6uuYBoS+cYncOHgky+F1hJ1qghw7CHUNqXve82y2O9wWepbwKfSM8Br0vOH5LLda+fP+H6HLAv++Xbsi94Wuqoug54o76ecW6PVkeIFx3G+hm0dZAXZb0DAY3iTtV0FXUMf2MPauHiZkHwrfRvWnr+VwBnq3IBOzJ4yvtRTdi8iqgO16CBy7q0TwtZK6vj6lrABbz7GD4LehYzOmHvinQ1/67FcF+vgRTn9o7LvB9aEroquhO8yTuX7IS6C/sTwMet/sLzxTPw2Nx3wF2PWi2MQqNB5FczBmjn8/uCPUv7HzRfgl+CScil/jngXXcg4hDttRD3F4jvq12U6tFXIxV9QZMIVPTvZJbu212vu1R6ChCJB4x0NfMlz2A93GfMtbpyEn7UZtNgIuz2scJJ5LcXrY9Vpv19ti1vhA2h1+5SLwP19ozDFgLBkcAAAAAElFTkSuQmCC"
}, , , , function(e, n, t) {
    "use strict";
    t(26);
    var o = c(t(29)),
        i = c(t(30)),
        a = c(t(31)),
        s = c(t(18)),
        r = function(e) {
            if (e && e.__esModule) return e;
            var n = {};
            if (null != e)
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
            return n.default = e, n
        }(t(19)),
        l = t(6);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = !1;
    window.__cmpui = new function(e) {
        if (e.__cmpui) return e.__cmpui;
        var n = {
                1: {
                    html: o.default,
                    init: function() {
                        r.displayNoConsentButton(), r.displayCustomLinks(), r.addQuantcastLogo()
                    }
                },
                2: {
                    html: i.default,
                    init: function() {
                        r.populatePurposes()
                    }
                },
                3: {
                    html: a.default,
                    init: function() {
                        r.populateVendorList(), r.populateNonIabVendors()
                    }
                },
                4: {
                    html: s.default,
                    init: function() {
                        r.addQuantcastLogo()
                    }
                }
            },
            t = function(e) {
                return {
                    dismissConsentUi: r.dismissConsentUi,
                    enableAllPurposeConsents: r.enableAllPurposeConsents,
                    disableAllPurposeConsents: r.disableAllPurposeConsents,
                    getConsentInfo: r.getConsentInfo,
                    hideLogo: r.hideLogo,
                    init: function(e, t) {
                        d = Boolean(t && "boolean" == typeof t), r.init(n, e, d)
                    },
                    logTracking: l.logTracking,
                    openTableDropdown: r.openTableDropdown,
                    setAndSaveAllConsent: r.setAndSaveAllConsent,
                    toggleAllVendorConsents: r.toggleAllVendorConsents,
                    toggleVendorConsent: r.toggleVendorConsent,
                    togglePartnerInfoVisibility: r.togglePartnerInfoVisibility,
                    togglePublisherPurposeConsent: r.togglePublisherPurposeConsent,
                    togglePurposeConsent: r.togglePurposeConsent,
                    toggleGoogleConsent: r.toggleGoogleConsent,
                    togglePurposeVendorsVisibility: r.togglePurposeVendorsVisibility,
                    track: l.track,
                    updateConsentUi: function(e) {
                        r.updateConsentUi(n, e, d)
                    }
                }[e].apply(null, [].slice.call(arguments, 1))
            };
        return t.hasTrack = !0, t
    }(window)
}, function(e, n, t) {
    var o = t(27);
    "string" == typeof o && (o = [
        [e.i, o, ""]
    ]);
    var i = {
        hmr: !0,
        transform: void 0
    };
    t(13)(o, i);
    o.locals && (e.exports = o.locals)
}, function(e, n, t) {
    var o = t(28);
    "string" == typeof o && (o = [
        [e.i, o, ""]
    ]);
    var i = {
        hmr: !0,
        transform: void 0
    };
    t(13)(o, i);
    o.locals && (e.exports = o.locals)
}, function(e, n, t) {
    (e.exports = t(16)(!1)).push([e.i, ".qc-cmp-ui-showing{overflow:hidden}.qc-cmp-alert-publisher-logo{height:50px;width:150px;padding:0}.qc-cmp-alert-main-messaging{padding-bottom:15px}.qc-cmp-ui.soft-opt-in-alert{display:flex;display:-webkit-flex;display:-ms-flexbox;visibility:visible;flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;justify-content:space-between;-webkit-justify-content:space-between;-ms-flex-pack:distribute;align-items:center;-webkit-align-items:center;-ms-flex-align:center;position:fixed!important;z-index:2147483649!important;padding:60px 30px;text-align:center;box-sizing:border-box;left:0;right:0;bottom:0;top:0;width:100%;height:100%;max-width:770px;min-width:320px!important;max-height:340px!important;min-height:240px!important;box-shadow:0 1px 3px rgba(33,41,52,.75)}.qc-cmp-ui-container{background:rgba(33,41,52,.85)!important;bottom:0!important;display:flex!important;display:-webkit-flex!important;left:0!important;opacity:0;overflow-y:scroll;position:fixed!important;right:0!important;top:0!important;transition:opacity .15s ease;visibility:hidden;will-change:visibility,opacity;z-index:2147483647!important;transition:background .6s;-webkit-transition:background .6s}.qc-cmp-ui-container.softOptIn{visibility:hidden;background:none}.softOptIn{overflow-y:hidden}.qc-cmp-ui{background:#fff;border-radius:2px;box-shadow:0 1px 3px rgba(33,41,52,.75);box-sizing:content-box;display:flex;display:-webkit-flex;flex-direction:column;-webkit-flex-direction:column;margin:auto;max-width:770px;min-width:320px!important;opacity:0;overflow:hidden;position:relative;visibility:hidden;width:100%;will-change:visibility,opacity}.qc-cmp-publisher-logo{max-height:90px;max-width:170px;padding-top:60px}.qc-cmp-alert-publisher-logo-image,.qc-cmp-publisher-logo{display:block;margin:auto;width:100%;box-sizing:content-box;width:auto}.qc-cmp-alert-publisher-logo-image{max-height:50px;max-width:150px}.qc-cmp-ui-content{display:flex;display:-webkit-flex;align-self:center;-webkit-align-self:center;flex-direction:column;-webkit-flex-direction:column;margin:auto;max-width:600px;padding:60px 30px}.qc-cmp-title{color:#212934;font-size:34px;font-weight:600;line-height:38px;text-align:center}.qc-cmp-beta-messaging,.qc-cmp-main-messaging,.qc-cmp-messaging,.qc-cmp-title{font-family:Arial,Verdana,sans-serif;margin:0;-webkit-font-smoothing:antialiased}.qc-cmp-beta-messaging,.qc-cmp-main-messaging,.qc-cmp-messaging{color:#141e23;font-size:14px;font-weight:100;line-height:20px}.qc-cmp-beta-messaging{text-align:center;padding:35px 0 0}.qc-cmp-messaging{padding:20px 0}.qc-cmp-main-messaging{padding:35px 0}.qc-cmp-buttons{align-content:center;display:flex!important;display:-webkit-flex!important;flex:0 1 auto!important;justify-content:center!important;-webkit-justify-content:center!important;margin:-7px!important}.qc-cmp-button,.qc-cmp-buttons{text-align:center;-webkit-flex:0 1 auto!important}.qc-cmp-button{background-color:#368bd6;border:2px solid #368bd6;border-radius:3px;box-shadow:0 1px 1px 0 rgba(0,0,0,.2);box-sizing:border-box;color:#fff;cursor:pointer!important;flex:1 0 auto!important;font-family:Arial,sans-serif;font-size:14px;font-weight:600;height:55px!important;letter-spacing:2px;line-height:34px;margin:7px;max-width:300px!important;padding:0 13px;text-decoration:none;text-transform:uppercase;transition:all .2s ease-in-out;white-space:nowrap;-webkit-font-smoothing:antialiased}.qc-cmp-primary-buttons .qc-cmp-button{min-width:200px!important}.qc-cmp-button:hover{background-color:#1e4b73;border-color:#1e4b73;color:#fff}.qc-cmp-button.qc-cmp-secondary-button{background-color:#eee;border-color:transparent;box-shadow:none;color:#368bd6}.qc-cmp-button.qc-cmp-secondary-button:hover{background-color:#368bd6;color:#fff}.qc-cmp-button-small{height:40px!important;font-size:12px}.qc-cmp-alt-action{cursor:pointer;color:#368bd6;font-family:Arial,Verdana,sans-serif;font-size:14px;text-align:center}.qc-cmp-alt-action:hover{color:rgba(54,139,214,.6)}.qc-cmp-alt-button{border:0;flex-basis:100%!important;margin-top:10px;outline:none;text-decoration:none}.qc-cmp-alt-buttons{display:inline-flex!important;display:-webkit-inline-flex!important;margin:0 auto!important;padding-bottom:60px!important;text-align:center;justify-content:center;-webkit-justify-content:center}.qc-cmp-center-bottom{display:inline;padding:0 15px;text-decoration:none}.qc-cmp-center-bottom+.qc-cmp-center-bottom{border-left:1px solid #a6a9ae}.qc-cmp-qc-link-container{position:absolute;bottom:0;right:0;font-size:10px!important;display:flex;display:-webkit-flex;align-items:center;-webkit-align-items:center;padding:0 30px 30px 0}.qc-cmp-qc-link{margin-left:5px}.qc-cmp-sub-title-container{display:flex;display:-webkit-flex;flex:0 0 auto;-webkit-flex:0 0 auto}.qc-cmp-sub-title{flex:1 1 auto;-webkit-flex:1 1 auto;color:#212934;font-family:Arial,Verdana,sans-serif;font-size:24px;font-weight:600;line-height:24px;margin:0}.qc-cmp-tab-header.qc-cmp-active .qc-cmp-small-toggle-outline,.qc-cmp-tab-header:hover .qc-cmp-small-toggle-outline,.qc-cmp-tab.qc-cmp-active .qc-cmp-small-toggle-outline,.qc-cmp-tab:hover .qc-cmp-small-toggle-outline{border-color:#fff}.qc-cmp-small-toggle-outline{border:2px solid #e8e9ea;border-radius:13px;height:22px;margin-left:20px;width:38px}.qc-cmp-small-toggle{background-color:#a6a9ae;border:2px solid #a6a9ae;border-radius:11px;cursor:pointer;vertical-align:middle;width:34px}.qc-cmp-small-toggle,.qc-cmp-small-toggle-switch{display:inline-block;height:18px;position:absolute}.qc-cmp-small-toggle-switch{top:0;right:16px;width:18px;background-color:#fff;border-radius:50%;transition:all .1s ease-in-out 0ms}.qc-cmp-toggle{background-color:#a6a9ae;border:1px solid #a6a9ae;border-radius:27px;cursor:pointer;display:block;height:23px;margin:0 0 0 auto;position:relative;width:44px}.qc-cmp-toggle-switch{position:absolute;display:inline-block;top:0;right:21px;width:23px;height:23px;background-color:#fff;border-radius:50%;transition:all .1s ease-in-out 0ms}.qc-cmp-toggle-on{background-color:#368bd6;border-color:#368bd6}.qc-cmp-toggle-on .qc-cmp-small-toggle-switch,.qc-cmp-toggle-on .qc-cmp-toggle-switch{right:0}.qc-cmp-bordered{border:1px solid #e8e9ea}.qc-cmp-nav-bar-publisher-logo-container{align-items:center;-webkit-align-items:center;display:flex;display:-webkit-flex;min-height:60px!important;max-height:110px;margin:0 0 0 20px}.qc-cmp-nav-bar-publisher-logo{display:block;max-height:90px;max-width:170px;margin:10px 0}.qc-cmp-disable-button,.qc-cmp-enable-button{flex:0 1 auto!important;-webkit-flex:0 1 auto!important;height:40px!important;font-size:12px;margin:10px 10px 10px 0!important}.qc-cmp-purposes-page-content{height:calc(100vh - 340px);height:-webkit-calc(100vh - 340px);max-height:500px;min-height:250px!important;overflow-y:scroll;padding:20px}.qc-cmp-purposes-page-content .qc-cmp-sub-title{margin:0}.qc-cmp-bold-messaging{margin:10px 0 20px}.qc-cmp-purpose-description{margin:10px 0;width:calc(100% - 110px)}.qc-cmp-purpose-actions{align-items:center;bottom:20px;display:flex;flex-direction:column-reverse;justify-content:center;position:absolute;right:0;top:20px}.qc-cmp-toggler{display:inline-block;margin:0 0 0 auto}.qc-cmp-toggle-status{color:#368bd6;font-family:Arial,Verdana,sans-serif;font-size:12px;font-weight:700;opacity:.8;margin:10px 0;text-align:center}.qc-cmp-show-vendors-link{font-size:12px;display:block}.qc-cmp-show-google-vendors-link{font-size:12px;display:block;text-decoration:none}.qc-cmp-enabled-cell{color:#368bd6;font-family:Arial,Verdana,sans-serif;font-size:14px;margin:10px 0;padding:0 20px;text-align:right}.qc-cmp-purpose-info{position:relative}.qc-cmp-table{border:1px solid #d3d4d6;border-collapse:collapse;color:#141e23;font-family:Arial,Verdana,sans-serif;font-size:14px;width:100%}.qc-cmp-table-header{color:#7a7f85;font-size:14px;font-weight:700;line-height:30px;letter-spacing:1px;margin:0;padding:0 20px;text-align:left;text-transform:uppercase}.qc-cmp-table-row{border-top:1px solid #d3d4d6;padding:10px 20px}.qc-cmp-google-purposes-table,.qc-cmp-publisher-purposes-table,.qc-cmp-vendors-purposes-table{margin-bottom:20px}.qc-cmp-nav-bar{display:flex;display:-webkit-flex;width:100%;justify-content:space-between;-webkit-justify-content:space-between}.qc-cmp-nav-bar-div-child{display:flex;display:-webkit-flex;align-items:center;-webkit-align-items:center;justify-content:flex-start;-webkit-justify-content:flex-start}.qc-cmp-nav-bar.qc-cmp-top{border-bottom:1px solid #e8e9ea;display:flex;display:-webkit-flex;flex-wrap:wrap;-webkit-flex-wrap:wrap;justify-content:space-between;-webkit-justify-content:space-between}.qc-cmp-top-nav-item{box-sizing:border-box;display:flex;flex:1 0 227px;height:60px}.qc-cmp-nav-bar.qc-cmp-bottom{flex-wrap:wrap;-webkit-flex-wrap:wrap;border-top:1px solid #e8e9ea}.qc-cmp-cancel{margin:0 20px;flex:0 1 80px;line-height:75px}.qc-cmp-save-and-exit{float:right;flex:1 1 200px;-webkit-flex:1 1 200px;margin:10px 20px 10px 0;max-width:265px}@media screen and (max-width:550px){.qc-cmp-buttons.qc-cmp-primary-buttons{flex-direction:column-reverse;-webkit-flex-direction:column-reverse;margin:0!important;height:6.8rem}.qc-cmp-buttons.qc-cmp-primary-buttons .qc-cmp-button{width:100%;align-self:center;-webkit-align-self:center}.qc-cmp-qc-link-container{padding:0 5px 5px 0;font-size:8px!important}.qc-cmp-nav-bar.qc-cmp-top{flex-direction:column;align-items:center;-webkit-flex-direction:column;-webkit-align-items:center}.qc-cmp-nav-bar-publisher-logo-container{margin:0;width:100%;flex:1;-webkit-flex:1;height:50%;justify-content:center;-webkit-justify-content:center;min-height:50px!important}.qc-cmp-hide-with-small-width{display:none}.qc-cmp-nav-bar-div-child{width:100%;height:50%;justify-content:center;-webkit-justify-content:center}.qc-cmp-alt-action.qc-cmp-left-nav-link.qc-cmp-back{flex:0.15;-webkit-flex:0.15;margin-left:10px;height:100%;padding:0 .4rem 1rem 1.3rem;font-size:13.49px}.qc-cmp-alt-action.qc-cmp-left-nav-link:nth-child(2),.qc-cmp-cancel{flex:0.85;-webkit-flex:0.85;margin:0;text-align:right;height:100%;padding-bottom:1rem;padding-right:1rem;font-size:13.49px}.qc-cmp-cancel{width:20%}.qc-cmp-button.qc-cmp-save-and-exit{height:40px!important;font-size:12px;margin:10px 10px 10px 0!important;max-width:230px!important;align-self:center;-webkit-align-self:center;width:80%}.qc-cmp-nav-bar.qc-cmp-bottom{height:6rem}.qc-cmp-nav-bar-div-child.qc-3-page{justify-content:space-between;-webkit-justify-content:space-between}.qc-cmp-nav-bar-buttons-container{width:100%;flex:1;-webkit-flex:1;height:50%;justify-content:center;-webkit-justify-content:center}.qc-cmp-nav-bar-buttons-container .qc-cmp-close-icon{width:auto}.qc-cmp-nav-bar-publisher-logo{max-height:45px}.qc-cmp-publisher-logo{max-height:45px;padding-top:16px}.qc-cmp-ui-content{padding:15px 15px 20px}.qc-cmp-title{font-size:20px;line-height:normal}.qc-cmp-main-messaging{padding:12px 0;font-size:12px;line-height:19px}.qc-cmp-button{height:45px!important;font-size:12px;letter-spacing:1px;padding:0 9px}.qc-cmp-alt-buttons{padding-bottom:45px!important}.qc-cmp-alt-action{font-size:12px}.qc-cmp-alt-action.qc-cmp-cancel{font-size:13.49px}}.qc-cmp-partner-info{margin:20px 20px 0}.qc-cmp-vendor-list-container{border-bottom:none;overflow:scroll}.qc-cmp-all-vendors-list{height:240px}.qc-hide-table{display:none}.qc-cmp-purposes-vendor-list,.qc-cmp-vendor-list{border:1px solid #e8e9ea;border-collapse:collapse;color:#212934;font-family:Arial,Verdana,sans-serif;font-size:14px;margin:0 0 20px;width:100%}.qc-cmp-vendor-description,.qc-cmp-vendor-description-el{margin:12px 0 0}.qc-cmp-purposes-vendor-list{margin:20px 0 10px}.qc-cmp-vendor-column-header{text-align:left;text-transform:uppercase}.qc-cmp-vendor-list-title{color:#575f68;margin:0;font-size:11px;font-weight:700;line-height:30px;letter-spacing:2px}.qc-cmp-vendor-row{height:45px;border-top:1px solid #e8e9ea}.qc-cmp-company-column{text-align:left;padding:0 15px}.qc-cmp-dropdown-column,.qc-cmp-on-off-column{width:50px}.qc-cmp-company-cell{font-weight:700;padding:0 20px}.qc-cmp-toggle-cell{text-align:center}.qc-cmp-dropdown-cell{font-size:18px;text-align:center}.qc-cmp-arrow-down{width:16px;height:16px;margin:auto;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%234D545D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 5l6 6 6-6'/%3E%3C/svg%3E\") 50% no-repeat}.qc-cmp-arrow-down:hover{cursor:pointer}.qc-cmp-flip-up{transform:rotate(180deg)}.qc-cmp-vendor-info-content{padding:0 20px 15px;line-height:16px}.qc-cmp-bold{font-weight:700}.qc-cmp-vendor-info-list-title{font-weight:700;line-height:1.5;margin:12px 0 0}.qc-cmp-vendor-info-list{line-height:1.5;list-style-type:none;margin:0;padding:0}.qc-cmp-link{cursor:pointer;font-family:Arial,Verdana,sans-serif;font-size:12px;font-weight:600;text-align:left;text-decoration:none}.qc-cmp-link,.qc-cmp-link:visited{color:#368bd6}.qc-cmp-link:hover{color:rgba(54,139,214,.6)}.qc-cmp-left-nav-link{flex:1 1 auto;-webkit-flex:1 1 auto;line-height:75px;margin:0 0 0 20px;position:relative;text-align:left;white-space:nowrap}.qc-cmp-back{padding-left:25px}.qc-cmp-back:before{content:\"\";display:block;position:absolute;top:29px;left:0;width:16px;height:16px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%234D545D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 5l6 6 6-6'/%3E%3C/svg%3E\") 50% no-repeat;transform:rotate(90deg)}.qc-cmp-showing{visibility:visible;opacity:1}.qc-cmp-hidden{display:none}.qc-cmp-no-height{height:0}.qc-cmp-nav-bar-buttons-container{display:flex;display:-webkit-flex;margin-right:10px}.qc-cmp-close-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M.5.5l23 23m0-23l-23 23' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10'/%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3C/svg%3E\") 50% no-repeat;border:none;height:38px;margin:auto 0;outline:none;width:38px}.qc-cmp-close-icon-first-view{right:20px;position:absolute;top:20px}.qc-cmp-close-icon:hover{cursor:pointer}", ""])
}, function(e, n) {
    e.exports = '<img class=qc-cmp-publisher-logo src="{{ publisherLogo }}" alt="{{ publisherName }} logo" onerror=\'window.__cmpui("hideLogo",event)\'> <button class="qc-cmp-close-icon qc-cmp-close-icon-first-view" data-new-user=remove onclick=\'window.__cmpui("dismissConsentUi")\'></button> <div class=qc-cmp-ui-content> <h2 class=qc-cmp-title> {{ initScreenTitle }} </h2> <span> <p class=qc-cmp-main-messaging> {{ initScreenBody }} </p> </span> <div class="qc-cmp-buttons qc-cmp-primary-buttons" id=qcCmpButtons> <button class=qc-cmp-button onclick=\'window.__cmpui("setAndSaveAllConsent",!0)\'> {{ initScreenAcceptButton }} </button> </div> </div> <div class=qc-cmp-alt-buttons> <a id=qc-cmp-purpose-button class="qc-cmp-alt-action qc-cmp-center-bottom" onclick=\'window.__cmpui("updateConsentUi",2)\'> {{ initScreenPurposeLink }} </a> <a id=qc-cmp-vendor-button class="qc-cmp-alt-action qc-cmp-center-bottom" onclick=\'window.__cmpui("updateConsentUi",3)\'> {{ purposeScreenVendorLink }} </a> </div> <div class=qc-cmp-qc-link-container style=display:flex!important> <p class=qc-cmp-link-text> {{ initScreenAttributionText }} </p> <a class=qc-cmp-qc-link target=_blank> <img id=qcLogo width=70 alt="Quantcast - GDPR Consent Solution" style=border-style:none /> </a> </div> '
}, function(e, n) {
    e.exports = '<div class="qc-cmp-nav-bar qc-cmp-top"> <div class=qc-cmp-nav-bar-publisher-logo-container id=qcCmpNavPublisherLogo> <img class=qc-cmp-nav-bar-publisher-logo src="{{ publisherLogo }}" alt="{{ publisherName }} logo" onerror=\'window.__cmpui("hideLogo",event)\'> </div> <div class=qc-cmp-nav-bar-buttons-container> <button class="qc-cmp-button qc-cmp-secondary-button qc-cmp-enable-button" onclick=\'window.__cmpui("disableAllPurposeConsents")\'> {{ purposeScreenDisableAllButtonLabel }} </button> <button class="qc-cmp-button qc-cmp-disable-button" onclick=\'window.__cmpui("enableAllPurposeConsents")\'> {{ purposeScreenEnableAllButtonLabel }} </button> <button class=qc-cmp-close-icon data-new-user=remove onclick=\'window.__cmpui("dismissConsentUi")\'></button> </div> </div> <div class=qc-cmp-purposes-page-content> <h2 class=qc-cmp-sub-title> {{ purposeScreenTitle }} </h2> <p class=qc-cmp-messaging> {{ purposeScreenBody }} </p> <div class=qc-cmp-purposes-container id=qcCmpPurposesContainer></div> </div> <div class="qc-cmp-nav-bar qc-cmp-bottom"> <div class=qc-cmp-nav-bar-div-child> <a class="qc-cmp-alt-action qc-cmp-left-nav-link qc-cmp-back" onclick=\'window.__cmpui("updateConsentUi",1)\'> {{ backLabel }} </a> <a class="qc-cmp-alt-action qc-cmp-left-nav-link" onclick=\'window.__cmpui("updateConsentUi",3)\'> {{ purposeScreenVendorLink }} </a> </div> <div class=qc-cmp-nav-bar-div-child> <a class="qc-cmp-alt-action qc-cmp-cancel" data-new-user=remove onclick=\'window.__cmpui("dismissConsentUi")\'> {{ purposeScreenCancelButton }} </a> <button class="qc-cmp-button qc-cmp-save-and-exit" onclick=\'window.__cmp("saveConsents",window.__cmpui("getConsentInfo"),function(){window.__cmpui("dismissConsentUi")})\'> {{ purposeScreenSaveAndExitButton }} </button> </div> </div> '
}, function(e, n) {
    e.exports = '<div class="qc-cmp-nav-bar qc-cmp-top"> <div class=qc-cmp-nav-bar-publisher-logo-container id=qcCmpNavPublisherLogo> <img class=qc-cmp-nav-bar-publisher-logo src="{{ publisherLogo }}" alt="{{ publisherName }} logo" onerror=\'window.__cmpui("hideLogo",event)\'> </div> <div class=qc-cmp-nav-bar-buttons-container> <button class="qc-cmp-button qc-cmp-button-small qc-cmp-secondary-button qc-cmp-enable-button" onclick=\'window.__cmpui("toggleAllVendorConsents",!1)\'> {{ vendorScreenRejectAllButton }} </button> <button class="qc-cmp-button qc-cmp-button-small qc-cmp-disable-button" onclick=\'window.__cmpui("toggleAllVendorConsents",!0)\'> {{ vendorScreenAcceptAllButton }} </button> <button class=qc-cmp-close-icon data-new-user=remove onclick=\'window.__cmpui("dismissConsentUi")\'></button> </div> </div> <div id=qcCmpPartnerInfo class=qc-cmp-partner-info> <div class=qc-cmp-sub-title-container> <h2 class=qc-cmp-sub-title> {{ vendorScreenTitle }} </h2> </div> <p class=qc-cmp-messaging> {{ vendorScreenBody }} </p> <div class="qc-cmp-vendor-list-container qc-cmp-all-vendors-list"> <table id=qcCmpVendorList class=qc-cmp-vendor-list> <thead class=qc-cmp-vendor-list-head> <tr class="qc-cmp-vendor-row-header qc-cmp-striped-row"> <th class="qc-cmp-vendor-column-header qc-cmp-company-column"> <h5 class=qc-cmp-vendor-list-title>{{ companyLabel }}</h5> </th> <th class="qc-cmp-vendor-column-header qc-cmp-on-off-column"> <h5 class=qc-cmp-vendor-list-title>{{ offOnLabel }}</h5> </th> <th class="qc-cmp-vendor-column-header qc-cmp-dropdown-column"></th> </tr> </thead> </table> <table id=qcCmpNonIab class=qc-cmp-vendor-list> <thead class=qc-cmp-vendor-list-head> <tr class="qc-cmp-vendor-row-header qc-cmp-striped-row"> <th class="qc-cmp-vendor-column-header qc-cmp-company-column"> <h5 class=qc-cmp-vendor-list-title>{{ nonIabVendorsLabel }}</h5> </th> <th class="qc-cmp-vendor-column-header qc-cmp-on-off-column"> <h5 class=qc-cmp-vendor-list-title>{{ offOnLabel }}</h5> </th> <th class="qc-cmp-vendor-column-header qc-cmp-dropdown-column"></th> </tr> </thead> </table> </div> </div> <div class="qc-cmp-nav-bar qc-cmp-bottom"> <div class="qc-cmp-nav-bar-div-child qc-3-page"> <a class="qc-cmp-alt-action qc-cmp-left-nav-link qc-cmp-back" onclick=\'window.__cmpui("updateConsentUi",2)\'> {{ vendorScreenPurposesLink }} </a> <a class="qc-cmp-alt-action qc-cmp-cancel" data-new-user=remove onclick=\'window.__cmpui("dismissConsentUi")\'> {{ vendorScreenCancelButton }} </a> </div> <div class=qc-cmp-nav-bar-div-child> <button class="qc-cmp-button qc-cmp-save-and-exit" onclick=\'window.__cmp("saveConsents",window.__cmpui("getConsentInfo"),function(){window.__cmpui("dismissConsentUi")})\'> {{ vendorScreenSaveAndExitButton }} </button> </div> </div>'
}]);