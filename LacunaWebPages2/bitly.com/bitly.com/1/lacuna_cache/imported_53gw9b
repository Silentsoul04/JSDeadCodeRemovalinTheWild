window.Bitly || (window.Bitly = {}),
    function(e) {
        function t(e, t) {
            return 0 < e.filter(function(e) {
                return 0 <= e.indexOf(t)
            }).length
        }

        function n() {
            var e = document.cookie.split(";");
            return t(e, "optout=1") ? -1 : t(e, "cookie_banner=1") ? 1 : 0
        }

        function o() {
            Array.prototype.slice.call(document.querySelectorAll("script[data-cookie-setter]"), 0).map(function(e) {
                var t = document.createElement("script");
                return e.parentNode.insertBefore(t, e), t.type = "text/javascript", e.src && (t.src = e.src), e.text && (t.text = e.text), t
            })
        }

        function i(e) {
            e.preventDefault(), (e = new Date).setTime(e.getTime() + 63072e6), document.cookie = "cookie_banner=1; expires=" + e.toUTCString() + "; path=/",
                function() {
                    var e = document.querySelector("body");
                    e.removeChild(document.querySelector("#banner-spacer")), e.removeChild(document.querySelector("#banner-cookie")), r.map(function(e) {
                        e()
                    })
                }()
        }
        var r = [];
        e.activateScripts = o, e.getCookieConsent = n, e.handlePageLoad = function(e) {
            if (0 === (e = n())) {
                var t = document.querySelector("body"),
                    r = document.createElement("div");
                t.insertBefore(r, t.children[0]), r.outerHTML = '<div id="banner-cookie" class="sitebanner--container"><div class="grid-container"><div class="sitebanner--text">We use cookies to make interactions with our website and services easy and meaningful, and better understand how they are used and to tailor advertising. You can read more and make your cookie choices <a href="https://bitly.com/pages/privacy/"><span>here</span></a>. By continuing to use this site you are giving us your consent to do this.</div><div class="banner-cookie--button-container"><a href="https://bitly.com/pages/privacy/"><span>Learn More</span></a> <span id="banner-cookie--button">GOT IT</span></div></div></div>', document.querySelector("#banner-cookie--button").addEventListener("click", i), r = document.createElement("div"), t.insertBefore(r, t.children[0]), r.outerHTML = '<div id="banner-spacer" class="sitebanner--spacer"></div>'
            } - 1 !== e && o()
        }, e.onCloseBanner = function(e) {
            r.push(e)
        }
    }(window.Bitly), document.addEventListener("DOMContentLoaded", window.Bitly.handlePageLoad);