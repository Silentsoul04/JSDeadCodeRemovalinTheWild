window.GLOBAL_EVENTS_STORAGE = function(o, r) {
    "use strict";
    var s = {
        swcReadyEvent: "swc:core:ready",
        silentLogin: "message"
    };
    var n, a, i = (n = o, function(e, t) {
            return void 0 !== n[e] && null !== n[e] || (n[e] = {}), n[e].events = [].concat(n[e].events || []).concat(t), n[e]
        }),
        c = (a = o, function(e, t) {
            return void 0 !== a[e] && null !== a[e] || (a[e] = {}), a[e].listeners = [].concat(a[e].listeners || []).concat(t), a[e]
        });
    return (Object.keys(s) || []).forEach(function(e) {
        var t, n;
        t = s[e], "function" != typeof n && (n = function(e) {
            o[t] = i(t, e), r.stopWatches && r.stopWatches.fromStart && r.stopWatches.fromStart.stops && (r.stopWatches.fromStart.stops[t] = Date.now())
        }), window.addEventListener(t, n), c(t, n)
    }), o
}(window.GLOBAL_EVENTS_STORAGE || {}, window.EXTERNAL_STORAGE || {});
var supportsPassive = !1;
try {
    var opts = Object.defineProperty({}, "passive", {
        get: function() {
            "use strict";
            supportsPassive = !0
        }
    });
    window.addEventListener("testPassive", null, opts), window.removeEventListener("testPassive", null, opts)
} catch (e) {}
window.skypeLazyGravity = function(e) {
    "use strict";
    var a = {};
    return a.fallback = function(e) {
        var t = !1,
            n = e,
            o = [document.getElementById("skypeCarouselFeatures")],
            r = function() {
                setTimeout(function() {
                    !1 === t && (t = !0, n.forEach(function(t) {
                        t.getBoundingClientRect().top <= window.innerHeight && 0 <= t.getBoundingClientRect().bottom && t.getBoundingClientRect().left <= window.innerWidth && 0 <= t.getBoundingClientRect().right && (a.showImg(t), 0 === (n = n.filter(function(e) {
                            return e !== t
                        })).length && (document.removeEventListener("scroll", r), window.removeEventListener("resize", r), window.removeEventListener("orientationchange", r), 0 < o.length && o[0] && o[0].removeEventListener("click", r)))
                    })), t = !1
                }, 200)
            };
        r();
        var s = !!supportsPassive && {
            passive: !0
        };
        window.addEventListener("scroll", r, s), window.addEventListener("resize", r, s), window.addEventListener("orientationchange", r), 0 < o.length && o[0] && o[0].addEventListener("click", r)
    }, a.addBackground = function(e) {
        var t = e.style.backgroundImage;
        t.length <= 0 && (t = window.getComputedStyle(e, !1).backgroundImage), e.style.setProperty("background-image", t, "important")
    }, a.showImg = function(e) {
        if (-1 === e.className.indexOf("lazyLoad")) return a.addBackground(e), !1;
        ! function(e, t) {
            if (null === t.classList || void 0 === t.classList || "object" != typeof t.classList) {
                var n = new RegExp("(^| )" + e + "($| )", "g");
                t.className = t.className.replace(n, " ")
            } else t.classList.remove(e)
        }("lazyLoad", e)
    }, a.queryLazySelector = function(e) {
        var t = [];
        return e.forEach(function(e) {
            [].slice.call(document.querySelectorAll(e)).forEach(function(e) {
                t.push(e)
            })
        }), t
    }, a.ImageObserver = function() {
        var n = new IntersectionObserver(function(e) {
            e.forEach(function(e) {
                if (e.isIntersecting) {
                    var t = e.target;
                    a.showImg(t), n.unobserve(t)
                }
            })
        });
        return n
    }, a.addStyle = function(e) {
        var t = document.createElement("style"),
            n = e.join(", "),
            o = document.createTextNode(n + " { background-image: url(data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=) !important; }");
        t.appendChild(o), document.head.appendChild(t)
    }, a.init = function(t) {
        e.skypeLazyLoadActive && (a.addStyle(t), document.addEventListener("DOMContentLoaded", function() {
            var e = a.queryLazySelector(t);
            a.fallback(e)
        }))
    }, {
        init: a.init
    }
}(window.SKYPE_SETTINGS || {}), window.EXTERNAL_STORAGE = function(i, t) {
    "use strict";
    var c = {
        externalHeroRender: "externalHeroRender",
        heroRender: "heroRender",
        stopWatches: "stopWatches",
        slowLoadTimer: "slowLoadTimer"
    };
    void 0 !== t.slowLoadTimeout && null !== t.slowLoadTimeout && "" !== t.slowLoadTimeout || (t.slowLoadTimeout = 5e3);
    var e, n, o = t.slowLoadTimeout;

    function r() {
        var e, s, a;
        !0 !== i[c.heroRender] && (e = t.toggleSelectors || {}, s = e, a = "neo", Object.keys(s).forEach(function(e) {
            if (e.toLowerCase() === a.toLowerCase()) {
                var t = (new Date).getTime();
                i[c.stopWatches].fromStart.stops.toggledFallbackUX = t, i[c.externalHeroRender] = !0, n = s[e], o = "visible", null != (r = document.querySelector(n)) && (r.className || "").indexOf(o) <= -1 && (r.className += " " + o)
            } else ! function(e, t) {
                var n = document.querySelector(e);
                if (null != n) {
                    var o = new RegExp("(^| )" + t + "($| )", "g");
                    n.className = n.className.replace(o, " ")
                }
            }(s[e], "visible");
            var n, o, r
        }))
    }
    return i[c.stopWatches] = (e = i[c.stopWatches], n = Date.now(), null == e && (e = {}), e.fromStart = {
        initial: n,
        stops: ((e || {}).fromStart || {}).stops || {}
    }, e), i[c.slowLoadTimer] = setTimeout(r, o), i
}(window.EXTERNAL_STORAGE || {}, window.SKYPE_SETTINGS || {});