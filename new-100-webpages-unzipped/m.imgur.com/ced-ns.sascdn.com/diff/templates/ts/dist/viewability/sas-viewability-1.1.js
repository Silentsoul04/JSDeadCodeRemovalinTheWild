! function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var o = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var i = {};
    e.m = t, e.c = i, e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 1)
}([function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t(t) {
            void 0 === t && (t = !1);
            var e = this;
            if (this.d = document, this.w = window, this.logOn = !1, this.isReady = !1, this.friendlyIframe = null, !t) {
                var i = this.getIeVersion(navigator.userAgent);
                if ((!!i || window.frameElement) && void 0 !== window.inDapIF && window.inDapIF) {
                    this.log("FIF mode");
                    var n = this.getTopWindow();
                    this.w = n.currentWindow, this.d = this.w.document, this.friendlyIframe = n.currentFrame
                }
            }
            this.docReady(function() {
                return e.isReady = !0
            })
        }
        return t.prototype.addElement = function(t, e, i) {
            var n = this.d.createElement(t);
            for (var o in i) i.hasOwnProperty(o) && n.setAttribute(o, i[o]);
            return e.appendChild(n), n
        }, t.prototype.addEvent = function(t, e, i) {
            t && e && i && (t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i))
        }, t.prototype.log = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this.logOn && console.log(arguments)
        }, t.prototype.docReady = function(t, e, i) {
            var n = this;
            void 0 === e && (e = this.w), void 0 === i && (i = this.d);
            var o = function() {
                n.log("ready"), i.removeEventListener("DOMContentLoaded", o, !1), e.removeEventListener("load", o, !1), t()
            };
            "complete" === i.readyState ? setTimeout(t) : (i.addEventListener("DOMContentLoaded", o, !1), e.addEventListener("load", o, !1))
        }, t.prototype.winReady = function(t, e, i) {
            var n = this;
            void 0 === e && (e = this.w), void 0 === i && (i = this.d);
            var o = function() {
                n.log("window loaded"), e.removeEventListener("load", o, !1), t()
            };
            e.addEventListener("load", o, !1)
        }, t.prototype.tracking = function(t) {
            if (t) {
                (new Image).src = t
            }
        }, t.prototype.isChild = function(t, e) {
            if (e)
                for (var i = e.parentNode; null != i;) {
                    if (i === t) return !0;
                    i = i.parentNode
                }
            return !1
        }, t.prototype.getElementVisibility = function(t) {
            var e = t.getBoundingClientRect(),
                i = (e.right - e.left) * (e.bottom - e.top);
            if (0 === i) return 0;
            var n = Math.max(0, Math.min(e.bottom, this.w.innerHeight) - Math.max(0, e.top)),
                o = Math.max(0, Math.min(e.right, this.w.innerWidth) - Math.max(0, e.left));
            return Math.round(n * o * 100 / i)
        }, t.prototype.checkTabVisibility = function(t, e) {
            var i = this,
                n = function() {
                    var t = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in i.d) return "hidden";
                    for (var e = 0, n = t; e < n.length; e++) {
                        var o = n[e];
                        if (o + "Hidden" in document) return o + "Hidden"
                    }
                    return null
                },
                o = function() {
                    var t = n();
                    return !!t && i.d[t]
                },
                r = n();
            if (r) {
                var a = r.replace(/[H|h]idden/, "") + "visibilitychange";
                this.addEvent(this.d, a, function() {
                    o() ? e() : t()
                })
            }
        }, t.prototype.getIosVersion = function() {
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
                var t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                return [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || "0", 10)]
            }
        }, t.prototype.isExternal = function(t, e) {
            var i = this.getDomain(e);
            return -1 === t.indexOf(i)
        }, t.prototype.getDomain = function(t) {
            var e = t;
            if (null != t) {
                var i = t.split(".").reverse();
                null != i && i.length > 1 && (e = i[1] + "." + i[0])
            }
            return e
        }, t.prototype.offsetTop = function(t) {
            var e = 0;
            do {
                isNaN(t.offsetTop) || (e += t.offsetTop), t = t.offsetParent
            } while (t);
            return e
        }, t.prototype.getPageHeight = function() {
            var t = this.d.body,
                e = this.d.documentElement;
            return Math.max(t.scrollHeight, t.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight)
        }, t.prototype.getIeVersion = function(t) {
            t = t || navigator.userAgent;
            var e = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(t);
            return e ? parseInt(e[2], 10) : void 0
        }, t.prototype.offset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this.w.pageYOffset || this.d.documentElement.scrollTop;
            return {
                top: e.top + i,
                bottom: e.bottom + i,
                left: e.left,
                right: e.right
            }
        }, t.prototype.removeElement = function(t) {
            t && t.parentNode.removeChild(t)
        }, t.prototype.getTopWindow = function() {
            for (var t = 5, e = window, i = this.getIeVersion(navigator.userAgent) ? null : window.frameElement; t--;) try {
                e.parent && e.parent.document && (i = e.frameElement, (e = e.parent) === e.parent && (t = 0))
            } catch (t) {
                this.log("getTopWindow error", t)
            }
            return {
                currentWindow: e,
                currentFrame: i
            }
        }, t.prototype.isMobile = function() {
            return "ontouchstart" in this.w
        }, t
    }();
    e.Global = n
}, function(t, e, i) {
    "use strict";
    var n = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function n() {
                this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(0),
        r = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.counterId = 0, e.hasFocus = !0, e.isSafeFrame = !1, e.integration = 0, e.timeCounter = 0, e.resultLayer = null, e.playingCreativeId = -1, e.pixels = {}, e.threshold = [], e.addEvent(e.w, "focus", function() {
                    return e.hasFocus = !0
                }), e.addEvent(e.w, "blur", function() {
                    return document.activeElement && window.self === window.top ? e.hasFocus = !0 : e.hasFocus = !1
                }), e
            }
            return n(e, t), e.prototype.videoHandler = function(t, e) {
                var i = ["start", "AdStarted", "AdPlaying", "resume", "play", "playing"],
                    n = ["complete", "skip", "AdSkipped", "AdStopped"];
                n.concat(["pause", "AdPaused", "abort", "emptied", "ended", "error", "seeked", "seeking"]).indexOf(t) > -1 ? this.playingCreativeId = -1 : i.indexOf(t) > -1 && (this.playingCreativeId = e), n.indexOf(t) > -1 && this.executePixels(e, "notviewable")
            }, e.prototype.updateCreativePixels = function(t, e) {
                return this.log("updateCreativePixels"), this.pixels[t] = e
            }, e.prototype.init = function(t, e, i) {
                var n = this;
                this.log("init");
                var o = this.checkElementStatus(t),
                    r = o.measurable;
                t = o.element, this.pixels = e;
                var a = this.mergeOptions(i, t);
                if (a.videoIntegration || (this.playingCreativeId = Object.keys(e)[0] ? Number(Object.keys(e)[0]) : 1), this.integration = a.videoIntegration, a.logMessages && (this.logOn = !0), a.testLayer && (this.resultLayer = this.addInfoLayer(t)), i && i.threshold) {
                    this.threshold = i.threshold;
                    this.threshold.forEach(function(t, e) {
                        t.lastSent = 0, "function" != typeof t.aboveCallback && (t.aboveCallback = function() {
                            return console.log()
                        }), "function" != typeof t.belowCallback && (t.belowCallback = function() {
                            return console.log()
                        })
                    })
                }
                t.id || (t.id = "sas_" + (new Date).getTime() + "rnd"), this.overlapStepX = Math.floor(.01 * t.offsetWidth) || 3, this.overlapStepY = Math.floor(.01 * t.offsetHeight) || 3, this.counterId = this.w.setInterval(function() {
                    return n.checkElement(t, a, r)
                }, 100), window.addEventListener("beforeunload", function() {
                    n.executePixels(n.playingCreativeId, "notviewable")
                })
            }, e.prototype.checkElement = function(t, e, i) {
                if (this.log("checkElement", t, e), !this.d.getElementById(t.id)) return window.clearInterval(this.counterId), void this.log("backup exit - in the meantime someone could remove / close the ad", t);
                i || this.executePixels(this.playingCreativeId, "undetermined");
                var n = this.isSafeFrame ? Math.round(this.w.$sf.ext.inViewPercentage()) : this.getVisibilityPercent(t, e);
                this.log("Element visibility " + n + "%"), this.playingCreativeId > -1 && this.hasFocus && n >= e.area ? ++this.timeCounter >= 10 * e.delay && (this.log("Element visible more than " + e.area + "% for " + Math.round(this.timeCounter / 10) + " seconds"), this.executePixels(this.playingCreativeId, "viewable"), this.executeViewCallback(e), e.testLayer && (this.resultLayer.innerHTML = "&#10004;")) : this.timeCounter = 0, this.checkThreshold(n)
            }, e.prototype.executeViewCallback = function(t) {
                t.viewCallback && (t.viewCallback(), t.viewCallback = null, this.log("View callback function called"))
            }, e.prototype.checkElementStatus = function(t) {
                var e = {
                    measurable: !0,
                    element: t
                };
                if (!t || window.self === window.top) return this.log("No iframe detected"), e;
                this.log("Iframe detected");
                var i = this.getTopWindow();
                return this.w = i.currentWindow, this.d = this.w.document, e.element = null === i.currentFrame ? t : i.currentFrame, i.currentWindow.$sf && i.currentWindow.$sf.ext ? (this.log("SafeFrame detected"), e.element = e.element || t, this.isSafeFrame = !0) : void 0 !== window.inDapIF && window.inDapIF ? (this.log("Friendly iframe detected"), e.element = t) : i.currentWindow === window.top ? this.log("Secured iframe detected") : (this.log("Cross-domain iframe detected"), e.element = t, e.measurable = !1), e
            }, e.prototype.area = function(t) {
                var e = t.getBoundingClientRect();
                return (e.right - e.left) * (e.bottom - e.top)
            }, e.prototype.addInfoLayer = function(t) {
                var e = this.addElement("div", document.body, {
                    id: "testLayer_" + Math.round(1e5 * Math.random()),
                    style: "width:60px;height:30px;position:fixed;top:0;right:0;background-color:yellow;\n\t\t\tcolor:blue;font-size:20px;text-align:center;padding-top:5px;z-index:99999;"
                });
                return e.innerHTML = "0%", e
            }, e.prototype.checkThreshold = function(t) {
                for (var e = 0, i = this.threshold; e < i.length; e++) {
                    var n = i[e];
                    n.area > t && n.lastSent <= 0 ? (n.belowCallback(), n.lastSent = 1) : n.area <= t && n.lastSent >= 0 && (n.aboveCallback(), n.lastSent = -1)
                }
            }, e.prototype.mergeOptions = function(t, e) {
                var i = {
                    area: t && t.area ? t.area : 50,
                    testLayer: !(!t || !t.testLayer) && t.testLayer,
                    logMessages: !(!t || !t.logMessages) && t.logMessages,
                    videoIntegration: t && t.videoIntegration ? t.videoIntegration : 0,
                    threshold: t && t.threshold ? t.threshold : [],
                    viewCallback: t && t.viewCallback ? t.viewCallback : null
                };
                return t && t.delay ? i.delay = t.delay : i.delay = i.videoIntegration ? 2 : 1, !this.isMobile() && 0 === i.videoIntegration && e.clientHeight * e.clientWidth > 242500 && (i.area = 30), i
            }, e.prototype.executePixels = function(t, e) {
                var i = !1;
                if (this.pixels[t] && this.pixels[t][e]) {
                    for (var n = 0, o = this.pixels[t][e]; n < o.length; n++) {
                        var r = o[n];
                        this.tracking(r)
                    }
                    i = !0, delete this.pixels[t], this.playingCreativeId = -1, this.integration < 2 && this.w.clearInterval(this.counterId)
                }
                return i
            }, e.prototype.isOverlapped = function(t, e, i) {
                for (var n = t.getBoundingClientRect(), o = Math.floor(Math.max(0, n.top)), r = Math.floor(Math.min(n.bottom, this.w.innerHeight)), a = Math.floor(Math.max(0, n.left)), s = Math.floor(Math.min(n.right, this.w.innerWidth)), l = 0, d = 0, h = null, u = a; u <= s; u += this.overlapStepX)
                    for (var c = o; c <= r; c += this.overlapStepY) Math.floor(1e3 * Math.random()) % 250 || (h = t.ownerDocument.elementFromPoint(u, c), h === t || this.isChild(t, h) || d++, l++);
                return !((100 - d / l * 100) * i / 100 > e.area)
            }, e.prototype.getVisibilityPercent = function(t, e) {
                var i = this.area(t);
                if (0 === i) return 0;
                var n = t.getBoundingClientRect(),
                    o = Math.max(0, Math.min(n.bottom, this.w.innerHeight) - Math.max(0, n.top)),
                    r = Math.max(0, Math.min(n.right, this.w.innerWidth) - Math.max(0, n.left)),
                    a = Math.round(o * r * 100 / i);
                return e.testLayer && (n.top < 0 ? (this.resultLayer.style.top = "auto", this.resultLayer.style.bottom = "0px") : (this.resultLayer.style.top = "0px", this.resultLayer.style.bottom = "auto"), this.resultLayer.innerHTML = a + "%"), a
            }, e
        }(o.Global);
    e.Viewability = r, window.Viewability = r
}]);