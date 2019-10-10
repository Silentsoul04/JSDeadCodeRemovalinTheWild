/*global __cmp, __cmpui, console, Promise, $, escape */
var bizx = window.bizx || {};
bizx.cmp = {};


bizx.cmp.embedScript = function(src, async, location, callback) {
    location = location || 'head';
    var s = document.createElement('script');
    s.setAttribute('src', src);
    s.async = async || false;
    s.defer = false;
    if (callback) {
        s.onload = callback;
    }
    document[location].appendChild(s);
};


bizx.cmp.log = function(message, party, purpose, object) {
    if (document.URL.indexOf('cmp_debug') >= 0) {
        if (party || purpose) {
            message += ' -- ' + party + ' and ' + purpose;
        }
        console.log("CMP: " + message, object);
    }
};


bizx.cmp.promptConsent = function() {
    __cmp('displayConsentUi');
    __cmp('setConsentUiCallback', bizx.cmp.handleClose); // must be re-wired after each call

    return false;
};


bizx.cmp.cmpIsPresent = function() {
    // prebid cmp integration will create a dummy __cmp object; so we have to also detect that
    // to determine if the cmp is really present or not.
    return (window.__cmp && window.__cmp.toString().indexOf("CMP not found") < 0);
};

bizx.cmp.ifConsent = function(party, purposes, hasConsentFn, noConsentFn, finallyFn) {
    if (!bizx.cmp.cmpIsPresent()) {
        // if the CMP isn't present on the page, we can assume consent and short-circuit checks.
        if (hasConsentFn) {
            hasConsentFn();
        }
        if (finallyFn) {
            finallyFn();
        }
        return;
    }

    if (purposes === 'all') {
        purposes = ['storage', 'personalization', 'ads', 'content', 'measurement'];
    }

    __cmp('getConsentData', null, function(obj, success) {
        if (obj.gdprApplies) {
            if (party === "all") {
                return bizx.cmp.getAllPartyConsent(purposes, hasConsentFn, noConsentFn, finallyFn);
            } else {
                return bizx.cmp.getExplicitConsent(party, purposes, hasConsentFn, noConsentFn, finallyFn);
            }
        } else {
            bizx.cmp.log('consent not needed for', party, purposes);
            if (hasConsentFn) {
                hasConsentFn();
            }
            if (finallyFn) {
                finallyFn();
            }
        }
    });
};


bizx.cmp.getExplicitConsent = function(party, purposes, callback, noConsentFn, finallyFn) {
    var partyCallMap = {
        vendor: 'getVendorConsents',
        publisher: 'getPublisherConsents'
    };
    var partyCallMapConsentInfo = {
        vendor: 'purposeConsents',
        publisher: 'standardPurposeConsents'
    };
    var purpose_ids = {
        'storage': 1,
        'personalization': 2,
        'ads': 3,
        'content': 4,
        'measurement': 5
    };

    __cmp(partyCallMap[party], null, function(consentInfo, success) {
        // bizx.cmp.log('callback fired for', party, purposes, consentInfo);
        if (success) {
            var meetsAll = true;
            for (var i = 0; i < purposes.length; i++) {
                var p = purpose_ids[purposes[i]];
                if (!consentInfo[partyCallMapConsentInfo[party]][p]) {
                    meetsAll = false;
                    break;
                }
            }
            if (meetsAll) {
                bizx.cmp.log('consent granted for', party, purposes, consentInfo);
                callback(consentInfo, success);
            } else {
                bizx.cmp.log('consent NOT granted for', party, purposes, consentInfo);
                if (noConsentFn) {
                    noConsentFn(success);
                }
            }
        } else {
            bizx.cmp.log('consent failed to detect for', party, purposes);
            if (noConsentFn) {
                noConsentFn(success);
            }
        }

        if (finallyFn) {
            finallyFn(consentInfo, success);
        }
    });
};


bizx.cmp.getAllPartyConsent = function(purposes, callback, noConsentFn, finallyFn) {
    var parties = ['publisher', 'vendor'];

    var promise = bizx.cmp.getExplicitConsentChained(parties[0], purposes)
        .then(function() {
            return bizx.cmp.getExplicitConsentChained(parties[1], purposes);
        })
        .then(callback, noConsentFn || function() {});

    if (finallyFn) {
        promise.finally(finallyFn);
    }
};


bizx.cmp.getExplicitConsentChained = function(party, purposes) {
    return new Promise(function(resolve, reject) {
        bizx.cmp.getExplicitConsent(party, purposes, resolve, reject);
    });
};


bizx.cmp.getConsentDataChained = function() {
    return new Promise(function(resolve, reject) {
        __cmp('getConsentData', null, resolve);
    });
};


bizx.cmp.readCookie = function(cookieName) {
    cookieName = cookieName || 'eupubconsent';

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    return readCookie(cookieName);
};


bizx.cmp.getPublisherConsentStringChained = function() {
    return new Promise(function(resolve, reject) {
        var cookie_service = bizx.cmp.options['Consent Scope Group URL']; // slashdot uses this
        if (cookie_service) {
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === 4) {
                    var consentString;
                    try {
                        consentString = JSON.parse(xhr.responseText).eupubconsent;
                    } catch (ex) {
                        consentString = null;
                    }
                    resolve({
                        publisherConsentString: consentString
                    }, 'success');
                }
            });
            xhr.open("GET", cookie_service);
            xhr.send();
        } else {
            resolve({
                publisherConsentString: bizx.cmp.readCookie()
            }, 'success');
        }
    });
};

bizx.cmp.handleClose = function(args) {
    // this event handler will fire when the modal is closed, or consent is merely checked.
    // however, the callback (now) does receive args that reveal the reason it was fired;
    // we can now rely on reason == `ui-closed` to know that preferences were saved.

    if (args.reason !== 'ui-closed') {
        return;
    }

    var aggregatedConsent = {};

    function aggregate(obj, success) {
        aggregatedConsent = bizx.cmp.extend(aggregatedConsent, obj);
    }

    function post() {
        var data = {
            "domain": document.location.hostname.split('.').slice(-2).join('.'),
            "vendorConsentString": aggregatedConsent.consentData,
            "publisherConsentString": aggregatedConsent.publisherConsentString,
            "gdprApplies": aggregatedConsent.gdprApplies,
            "hasGlobalConsent": aggregatedConsent.hasGlobalConsent,
            "vendorPurposeConsents": aggregatedConsent.purposeConsents,
            "publisherPurposeConsents": aggregatedConsent.standardPurposeConsents,
            "vendorConsents": aggregatedConsent.vendorConsents
        };

        try {
            data.cmpPage = __cmpui('getConsentInfo').consentPage;
            data.vendorListVersion = __cmpui('getConsentInfo').vendorList.vendorListVersion;
            data.vendorListUpdated = __cmpui('getConsentInfo').vendorList.lastUpdated;
        } catch (ex) {
            bizx.cmp.log("extra metadata failed to fetch: ", null, null, ex);
        }

        var payload = "data=" + escape(JSON.stringify(data));
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function() {
            if (this.readyState === 4) {
                bizx.cmp.log("audit log posted", null, null, data);
            }
        });
        xhr.open("POST", "https://dfp.bizx.info/gdpr");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(payload);
    }

    bizx.cmp.getExplicitConsentChained('publisher', [])
        .then(aggregate)
        .then(function() {
            return bizx.cmp.getExplicitConsentChained('vendor', []);
        })
        .then(aggregate)
        .then(function() {
            return bizx.cmp.getConsentDataChained();
        })
        .then(aggregate)
        .then(function() {
            return bizx.cmp.getPublisherConsentStringChained();
        })
        .then(aggregate)
        .then(post);

    // this callback can be provided by the site, e.g. slashdot mobile uses it to know about changes
    if (bizx.cmp.onUICloseComplete) {
        bizx.cmp.onUICloseComplete();
    }
};


bizx.cmp.trackingPixel = function(party, purposes, src, alt, parentId) {
    bizx.cmp.ifConsent(party, purposes, function() {
        var pixel = document.createElement("img");
        pixel.src = src;
        pixel.height = 1;
        pixel.width = 1;
        pixel.alt = alt || '';
        pixel.style = "display: none";
        var node = document.getElementById(parentId);
        node.insertBefore(pixel, null);
    });
};


bizx.cmp.extend = function(target, source) {
    for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
            target[prop] = source[prop];
        }
    }
    return target;
};


bizx.cmp.init = function(options) {
    /*jshint ignore:start*/
    window.__cmp = (function() {
        return typeof(__cmp) == "function" ? __cmp : function(c) {
            var b = arguments;
            if (!b.length) {
                return __cmp.a;
            } else if (c == '__cmp')
                return false;
            else {
                if (typeof __cmp.a === 'undefined') {
                    __cmp.a = [];
                }
                __cmp.a.push([].slice.apply(b));
            }
        }
    })();
    /*jshint ignore:end*/

    var elem = document.createElement('script');
    elem.src = "https://quantcast.mgr.consensu.org/cmp.js";
    elem.async = true;
    elem.type = "text/javascript";
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);

    var bizx_options = {
        'Language': 'EN',
        'Initial Screen Reject Button Text': 'I do not accept',
        'Initial Screen Accept Button Text': 'I accept',
        'Purpose Screen Header Title Text': 'Privacy settings',
        'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
        'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.<br><br><strong>Google:</strong> If you accept all purposes, Google ads will be personalized. <a href="https://policies.google.com/privacy" target=_blank>Google\'s Privacy Policy</a>.',
        'Vendor Screen Accept All Button Text': 'Accept all',
        'Vendor Screen Reject All Button Text': 'Reject all',
        'Initial Screen Body Text': 'Our site is supported by advertising and we and our partners use technology such as cookies on our site to personalize content and ads, provide social media features, and analyze our traffic. Click "I Accept" below to consent to the use of this technology across the web. You can change your mind and change your consent choices at any time by returning to this site and clicking the Privacy Choices link.<br><br>By choosing I Accept below you are also helping to support our site and improve your browsing experience.',
        'Publisher Name': 'SourceForge',
        'Publisher Logo': 'https://a.fsdn.com/con/img/sandiego/svg/originals/sf-logo-full.svg',
        'Publisher Purpose IDs': [1, 2, 3, 4, 5],
        'Initial Screen Purpose Link Text': 'More Options',
        'Non-Consent Display Frequency': 3,
        'Display Persistent Consent Link': false
    };


    bizx.cmp.extend(bizx_options, options);
    window.__cmp('init', bizx_options);

    bizx.cmp.options = bizx_options;

    __cmp('setConsentUiCallback', bizx.cmp.handleClose);
};