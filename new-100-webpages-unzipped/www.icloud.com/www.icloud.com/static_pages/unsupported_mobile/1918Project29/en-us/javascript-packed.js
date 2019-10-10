function FeedbackRequest() {
    this.baseURL = "https://feedbackws.icloud.com/reportStats", this.createRequest = function(e, t) {
        var n = null;
        return typeof XDomainRequest != "undefined" ? (n = new XDomainRequest, n.open(e, t)) : window.XMLHttpRequest && (n = new XMLHttpRequest, n.open(e, t, !0)), n
    }, this.isIE8OrLower = function() {
        var e = navigator.userAgent.toLowerCase(),
            t = (e.match(/.*(?:rv|chrome|webkit|opera|ie)[\/: ](.+?)([ \);]|$)/) || [])[1],
            n = /msie/.test(e);
        return n && parseInt(t, 10) <= 8
    }, this.sendStats = function(e, t) {
        var n = this.createRequest("POST", this.baseURL),
            r = [{
                statName: e
            }],
            i, s;
        if (t) {
            i = r[0];
            for (s in t) i[s] = t[s]
        }
        this.isIE8OrLower() ? (n.onload = function() {
            console.info("Successfully sent stats to feedbackws")
        }, n.onerror = function() {
            console.warn("Error sending stats to feedbackws")
        }) : (n.setRequestHeader("Content-Type", "text/plain"), n.onreadystatechange = function() {
            if (n.readyState === 4) {
                var e = n.status;
                e === 200 ? console.info("Successfully sent stats to feedbackws") : console.warn("Error sending stats to feedbackws")
            }
        }), n.send(JSON.stringify({
            stats: r
        }))
    }
}
window.SC || (window.SC = {}), SC.stringsFor = function() {}, SC.stringsFor("en-us", {
    "@@StaticPages.copyright": "Copyright &copy; %{year}",
    "@@StaticPages.disclaimer": "Apple Inc. All rights reserved.",
    "@@StaticPages.terms.link": "http://www.apple.com/legal/icloud/ww/",
    "@@StaticPages.privacy.link": "http://www.apple.com/privacy/",
    "@@StaticPages.terms": "Terms and Conditions",
    "@@StaticPages.privacy": "Privacy Policy",
    "@@StaticPages.UserSignedIn": "You are signed in as:",
    "@@StaticPages.UserSignOut": "Sign Out"
});
var B, Browser = B = function() {
    var e = navigator.userAgent.toLowerCase(),
        t = ((e.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1] || "").split(".");
    for (var n = 0; n < t.length; n++) t[n] = parseInt(t[n], 10);
    var r = 0;
    for (n = 0; n < t.length; n++) r += Math.pow(10, 3 * (0 - n)) * t[n];
    t = r;
    var i = {
        safari: /webkit/.test(e) ? t : NaN,
        chrome: /chrome/.test(e) ? t : NaN,
        opera: /opera/.test(e) ? t : NaN,
        msie: /msie/.test(e) && !/opera/.test(e) ? t : NaN,
        mozilla: /mozilla/.test(e) && !/(compatible|webkit)/.test(e) ? t : NaN,
        mobileSafari: /apple.*mobile.*safari/.test(e) ? t : NaN,
        iPad: !!/ipad/.test(e) && !!/applewebkit/.test(e) && parseFloat(e.substring(e.indexOf("os ") + "os ".length, e.indexOf(" like mac os x")).split("_").join(".")),
        iPhone: !!/iphone/.test(e) && !!/applewebkit/.test(e) && parseFloat(e.substring(e.indexOf("os ") + "os ".length, e.indexOf(" like mac os x")).split("_").join(".")),
        android: !!/android/.test(e),
        windows: !!/(windows)/.test(e),
        mac: !!/(macintosh)/.test(e) || !!/(mac os x)/.test(e)
    };
    return i.iPhone = i.iPhone || i.android, i.iOS = i.iPad || i.iPhone, i.iPhone4 = i.iPhone && window.devicePixelRatio === 2, i.iPhone3 = i.iPhone && !i.iPhone4, i.iPhone5 = i.iPhone4 && window.screen.height === 568, i.iPadRetina = i.iPad && window.devicePixelRatio === 2, i
}();
SC.Platform = {
    IE: function() {
        return B.msie ? navigator.appVersion.match(/\bMSIE.*7\.\b/) ? 7 : 6 : 0
    }(),
    IE8: function() {
        return B.msie ? navigator.appVersion.match(/\bMSIE.*8\.\b/) ? 8 : 5 : 0
    }(),
    Safari: function() {
        if (B.safari) {
            var e = parseInt(navigator.appVersion.replace(/^.*?AppleWebKit\/(\d+).*?$/, "$1"), 0);
            return e > 420 ? 3 : 2
        }
        return 0
    }(),
    Firefox: function() {
        var e = 0;
        return B.mozilla && (navigator.userAgent.indexOf("Firefox") != -1 && (e = parseFloat(navigator.userAgent.match(/Firefox\/(.)/)[1] || 0)), e < 1 && (e = 2)), e
    }(),
    Opera: function() {
        var e = 0;
        if (B.opera) {
            var t = navigator.userAgent;
            e = parseFloat(t.substring(t.lastIndexOf("/") + 1))
        }
        return e
    }(),
    isWindows: !!B.windows,
    isMac: !!B.mac
}, SC.Platform.Browser = function() {
    if (SC.Platform.IE > 0) return SC.Platform.IE8 == 8 ? "IE8" : "IE";
    if (SC.Platform.Safari > 0) return "Safari";
    if (SC.Platform.Firefox > 0) return "Firefox";
    if (SC.Platform.Opera > 0) return "Opera"
}(), SC.stringsFor("en-us", {
    "@@ErrorUnavailable.windowTitle": "Android browsers are not supported.",
    "@@ErrorUnavailable.subject": "Your browser is not currently supported.",
    "@@ErrorUnavailable.normal": "You may be able to use iCloud with the mail, contacts and calendar apps on your device.",
    "@@ErrorUnavailable.learnMoreLink": "http://www.apple.com/icloud/get-started",
    "@@ErrorUnavailable.learnMoreText": "Learn More"
});