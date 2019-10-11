// Script created for GDPR Compliance. Source code located: weebly/kings-banner

window.w_gdpr = {
    "whitelist": ["atatus-aid", "atatus-sid", "promo", "sto-id-springboard-home", "superhome_session", "XSRF-TOKEN", "websitespring-xsrf", "websitespring_session", "PublishedSiteSession", "publishedsite-xsrf", "editor_session", "remember_web_", "sto-id-trumpet", "encore_session", "sto-id-springboard-insights", "WeeblySession", "wuid", "chamber-xsrf", "pub_ses_id", "com_cart_token", "nsr", "chamber_ses_id", "M", "_js_csrf", "_csrf", "_savt", "_sqdi", "_sqweb_session", "preselect_first_funnel_experience", "language", "gdpr-kb-p", "WeeblySiteLogin", "_redirectLocation", "unified_checkout", "referral_token", "site_session", "WeeblyDiceRollUser", "oauth_signup", "force-automated-segment", "square-sync-csrf", "squaresync_session", "square_sync_session", "OrderId", "gdpr-kb"],
    "regex_whitelist": ["\/wct-.+\/"],
    "strings": {
        "body": "This site uses cookies to personalize your experience, analyze site usage, and offer tailored promotions.",
        "privacyLink": "\/privacy",
        "privacyText": "Cookie Policy",
        "buttonText": "I accept",
        "remindText": "Remind me later"
    },
    "stealth_mode": false,
    "has_remind_me": false,
    "is_user_site": false,
    "allow_non_weebly_domain": false
};

(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function(require, module, exports) {
        "use strict";
        var _createClass = function() {
            function i(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, n, t) {
                return n && i(e.prototype, n), t && i(e, t), e
            }
        }();

        function _classCallCheck(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        var html = '<div class="kb-container" id="kb-container">\n    <div class="kb-content">\n        <div class="kb-description">This site uses cookies to assist with navigation, analyze your use of our site(s), and assist with promotional and marketing efforts. <a style="color: #2990ea" href="/privacy" target="_blank">Cookie Policy</a></div>\n        <a href="#" class="kb-remind-link" id="kb-link">Remind Me Later</a>\n        <a href="#" class="kb-notice-btn" id="kb-btn">Accept Cookies</a>\n    </div>\n</div>\n\n<style>\n    .kb-container {\n        background: #363b3e;\n        font-size: 0.8em;\n        text-align: center;\n        line-height: 1.3;\n        position: fixed;\n        z-index: 9999999999; /* make sure z-index is higher than all chat apps  */\n        bottom: 0;\n        width: 100vw;\n        border-top: #fff 3px solid;\n        font-family: "Graphik","effra","Proxima Nova","Helvetica Neue","Helvetica","Arial",sans-serif;\n    }\n    .kb-content {\n        color: #fff;\n        padding: 10px 0px;\n        width: 100%;\n        max-width: 1440px;\n        margin: auto;\n    }\n\n    @media screen and (min-width: 64.0625em) {\n        .kb-content {\n            padding: 5px 20px;\n        }\n    }\n    .kb-description {\n        text-align: left;\n        line-height: 1.3;\n        width: 70%;\n        display: inline-block;\n        vertical-align: middle;\n    }\n    @media screen and (min-width: 40.0625em) {\n        .kb-description {\n            margin-right: 2em;\n        }\n        .kb-remind-link {\n            margin-left: -2em;\n        }\n    }\n\n    a.kb-notice-btn {\n        color: #fff;\n        background: #0073ff;\n        display: inline-block;\n        padding: 10px 0;\n        border-radius: 3px;\n        font-weight: 500;\n        min-width: 150px;\n        text-decoration: none;\n    }\n\n    a.kb-notice-btn:hover {\n        background-color: #fff;\n        color: #0073ff;\n    }\n\n    .kb-remind-link {\n        color: #2990ea;\n        text-decoration: none;\n        margin-right: 1em;\n    }\n\n    @media screen and (max-width: 40em) {\n        .kb-notice-btn {\n            width: 25%;\n            min-width: unset;\n        }\n    }\n}\n</style>\n',
            KingsBanner = function() {
                function t() {
                    var e = this,
                        n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    _classCallCheck(this, t), this.allowed = n.whitelist, this.regex_allowed = n.regex_whitelist, this.strings = n.strings, this.is_stealth_mode = n.stealth_mode, this.is_user_site = n.is_user_site, this.has_remind_me = n.has_remind_me, this.allow_non_weebly_domain = n.allow_non_weebly_domain, this.bannerAcceptedCalled = !1, this.bannerDismissedCalled = !1, this.getCookie("gdpr-kb") && !this.is_user_site || this.getCookie("gdpr-kb-p") && this.is_user_site || (this.deleteBLCookies(), this.overrideCookies(), "complete" !== document.readyState ? document.addEventListener("DOMContentLoaded", function() {
                        e.createBanner()
                    }) : this.createBanner())
                }
                return _createClass(t, [{
                    key: "checkAllowed",
                    value: function(e) {
                        var n = e.split(";")[0].split("=")[0];
                        if (0 <= this.allowed.indexOf(n)) return !0;
                        for (var t = 0; t < this.regex_allowed.length; t += 1) {
                            var i = this.regex_allowed[t].split("/"),
                                s = new RegExp(i[1], i[2] ? i[2] : "g");
                            if (n.match(s)) return !0
                        }
                        return !1
                    }
                }, {
                    key: "getCookie",
                    value: function(e) {
                        for (var n = e + "=", t = document.cookie.split(";"), i = 0; i < t.length; i += 1) {
                            for (var s = t[i];
                                " " === s.charAt(0);) s = s.substring(1, s.length);
                            if (0 === s.indexOf(n)) return s.substring(n.length, s.length)
                        }
                        return null
                    }
                }, {
                    key: "deleteBLCookies",
                    value: function() {
                        for (var e = document.cookie.split(";"), n = 0; n < e.length; n += 1) {
                            for (var t = e[n], i = t.indexOf("="), s = -1 < i ? t.substr(0, i) : t;
                                " " === s.charAt(0);) s = s.substring(1, s.length);
                            this.checkAllowed(s) || (document.cookie = s + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT")
                        }
                    }
                }, {
                    key: "overrideCookies",
                    value: function() {
                        var n = this,
                            t = Object.getOwnPropertyDescriptor(Document.prototype, "cookie") || Object.getOwnPropertyDescriptor(HTMLDocument.prototype, "cookie");
                        Object.defineProperty(document, "cookie", {
                            get: function() {
                                return t.get.call(document)
                            },
                            set: function(e) {
                                return n.checkAllowed(e) ? t.set.call(document, e) : null
                            }
                        })
                    }
                }, {
                    key: "listenToMessages",
                    value: function() {
                        var n = this,
                            t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                        window.addEventListener("message", function(e) {
                            if (e.data.kingsBanner && e.data.kingsBanner.event) switch (e.data.kingsBanner.event) {
                                case "opt-in":
                                    n.bannerAccepted(t, !1);
                                    break;
                                case "dismiss":
                                    n.bannerDismissed(t)
                            }
                        }, !1)
                    }
                }, {
                    key: "sendPostMessage",
                    value: function(e) {
                        window.parent !== window.self && window.parent.postMessage({
                            kingsBanner: {
                                event: e
                            }
                        }, "*");
                        for (var n = 0; n < window.frames.length; n += 1) {
                            window.frames[n].postMessage({
                                kingsBanner: {
                                    event: e
                                }
                            }, "*")
                        }
                    }
                }, {
                    key: "bannerDismissed",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                        this.bannerDismissedCalled || (this.bannerDismissedCalled = !0, localStorage.gdpr_hide_until = Date.now() + 36e5, e && (e.parentNode.removeChild(e), document.getElementsByTagName("body")[0].style.cssText = "padding-bottom: unset;"), this.sendPostMessage("dismiss"))
                    }
                }, {
                    key: "bannerAccepted",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                            n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                        this.bannerAcceptedCalled || (this.bannerAcceptedCalled = !0, this.is_user_site ? this.setCookie("gdpr-kb-p", "true", 9999) : this.setCookie("gdpr-kb", "true", 9999), e && (e.parentNode.removeChild(e), document.getElementsByTagName("body")[0].style.cssText = "padding-bottom: unset;"), n && window.AragornAnalytics && (window.AragornAnalytics.initialize(), window.AragornAnalytics.track("gdpr-consent", {
                            gdprConsentStatus: "opted-in"
                        })), this.sendPostMessage("opt-in"), this.allow_non_weebly_domain && window.location.reload())
                    }
                }, {
                    key: "createBanner",
                    value: function() {
                        var e = this;
                        if (this.is_stealth_mode) this.listenToMessages();
                        else {
                            if (this.has_remind_me) {
                                var n = parseInt(localStorage.gdpr_hide_until, 10);
                                if (!Number.isNaN(n) && Date.now() < n) return void this.listenToMessages()
                            }
                            var t = document.createElement("div");
                            t.innerHTML = html, document.body.appendChild(t);
                            var i = document.querySelector(".kb-description");
                            if (this.strings.body && this.strings.privacyText) {
                                i.innerText = this.strings.body + " ";
                                var s = document.createElement("a");
                                s.setAttribute("style", "color: #2990ea; text-decoration: none;"), s.setAttribute("href", this.strings.privacyLink), s.setAttribute("target", "_blank"), s.innerText = this.strings.privacyText, i.appendChild(s)
                            }
                            var o = document.getElementById("kb-btn");
                            this.strings.buttonText && (o.innerHTML = this.strings.buttonText);
                            var a = document.getElementById("kb-link");
                            this.strings.remindText && (a.innerHTML = this.strings.remindText), this.has_remind_me ? a.onclick = function() {
                                return e.bannerDismissed(t)
                            } : a.style.display = "none", document.getElementsByTagName("body")[0].style.cssText = "padding-bottom: 2.8em;", document.getElementById("kb-btn").onclick = function() {
                                return e.bannerAccepted(t, !0)
                            }, this.listenToMessages(t)
                        }
                    }
                }, {
                    key: "setCookie",
                    value: function(e, n, t) {
                        var i = "",
                            s = "",
                            o = window.location.host,
                            a = o.substr(o.length - 3);
                        if (t) {
                            var r = new Date;
                            r.setTime(r.getTime() + 24 * t * 60 * 60 * 1e3), i = "; expires=" + r.toUTCString()
                        }
                        this.is_user_site || -1 === o.indexOf("weebly.") || ".com" !== a && ".net" !== a || (s = "domain=weebly." + a), this.is_user_site && this.allow_non_weebly_domain && (s = "domain=" + o), document.cookie = e + "=" + (n || "") + i + "; path=/;" + s
                    }
                }]), t
            }();
        window.kingsBanner = new KingsBanner(window.w_gdpr);
    }, {}]
}, {}, [1]);