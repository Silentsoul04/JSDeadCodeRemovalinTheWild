/*! built at Wed Sep 25 2019 02:14:01 GMT+0000 (UTC) */ ! function(i) {
    var n = {};

    function o(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return i[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = i, o.c = n, o.d = function(e, t, i) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(i, n, function(e) {
                return t[e]
            }.bind(null, n));
        return i
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 0)
}([function(e, t, i) {
    "use strict";
    i.r(t);

    function n(e) {
        this.baseTime = e, this.incrementedKey = 0, this.data = {}
    }
    n.prototype.getElapsedTime = function() {
        return (new Date).getTime() - this.baseTime
    }, n.prototype.getAutoIncrementedKey = function() {
        return ++this.incrementedKey
    }, n.prototype.set = function(e, t) {
        this.data[e] = t
    }, n.prototype.get = function(e) {
        return this.data[e]
    };
    var o = n,
        r = function(e, t) {
            if (Object.create) e.prototype = Object.create(t.prototype);
            else {
                var i = function() {};
                i.prototype = t.prototype, e.prototype = new i
            }(e.prototype.constructor = e).super_ = t
        },
        a = function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        },
        s = function(e) {
            return "[object Number]" === Object.prototype.toString.call(e)
        },
        l = function(e, t, i) {
            if (e.forEach) e.forEach(t, i);
            else
                for (var n = 0; n < e.length; n++) t.call(i, e[n], n, e)
        },
        c = function(e, t, i) {
            if (e.map) return e.map(t, i);
            for (var n = [], o = 0; o < e.length; o++) n.push(t.call(i, e[o], o, e));
            return n
        },
        h = function(e, t, i) {
            for (var n in e) e.hasOwnProperty(n) && t.call(i, n, e[n], e)
        },
        d = function() {
            return Math.floor(1e9 * Math.random()).toString(32)
        },
        u = function() {
            try {
                window.top.document
            } catch (e) {
                return window
            }
            return window.top
        }(),
        p = u.document;

    function f(e) {
        this.top = e.top, this.left = e.left, e.width ? (this.width = e.width, this.height = e.height, this.bottom = this.top + this.height, this.right = this.left + this.width) : (this.bottom = e.bottom, this.right = e.right, this.width = this.right - this.left, this.height = this.bottom - this.top)
    }

    function m(e) {
        return e.ownerDocument.defaultView || e.ownerDocument.parentWindow
    }

    function g(e) {
        var t = function(e) {
            return e.currentStyle || m(e).getComputedStyle(e, "")
        }(e);
        return 0 <= t.overflow.indexOf("scroll") || 0 <= t.overflow.indexOf("hidden")
    }

    function y(e, t, i) {
        t = t || 0, i = i || 0;
        for (var n, o = 0, r = 0, a = e;;) {
            var s = m(a).frameElement;
            if (!s) break;
            var h = s.getBoundingClientRect();
            o += h.top, r += h.left, a = s
        }
        try {
            n = e.getBoundingClientRect()
        } catch (e) {
            n = {
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }
        }
        return new f({
            top: Math.round(n.top + i + o),
            left: Math.round(n.left + t + r),
            bottom: Math.round(n.bottom + i + o),
            right: Math.round(n.right + t + r)
        })
    }

    function v() {
        var e = u.innerWidth || p.documentElement.clientWidth,
            t = u.innerHeight || p.documentElement.clientHeight,
            i = 0,
            n = 0;
        return p.body && (i = p.body.scrollLeft || p.documentElement.scrollLeft, n = p.body.scrollTop || p.documentElement.scrollTop), new f({
            top: Math.round(n),
            left: Math.round(i),
            width: Math.round(e),
            height: Math.round(t)
        })
    }

    function w() {
        var e = p.body.scrollLeft || p.documentElement.scrollLeft,
            t = p.body.scrollTop || p.documentElement.scrollTop;
        return {
            left: Math.round(e),
            top: Math.round(t)
        }
    }

    function b(e, t, i) {
        this.elem = e, this.zeroSizeViewableMode = i && i.zeroSizeViewableMode, this.trimmedRect = null, t && (this.trimmedRect = t)
    }
    f.prototype.toString = function() {
        return "Rect W:" + this.width + " H:" + this.height + " T:" + this.top + " L:" + this.left + " B:" + this.bottom + " R:" + this.right
    }, f.prototype.transfer = function(e, t) {
        this.left += e, this.right += e, this.top += t, this.bottom += t
    }, f.prototype.copy = function() {
        return new f(this)
    }, f.prototype.getOverlappedArea = function(e) {
        var t = Math.max(this.top, e.top),
            i = Math.min(this.bottom, e.bottom),
            n = Math.max(this.left, e.left),
            o = Math.min(this.right, e.right);
        return new f(0 < i - t && 0 < o - n ? {
            top: t,
            bottom: i,
            left: n,
            right: o
        } : {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        })
    }, b.prototype.calcLayoutPosition = function() {
        var i = [],
            e = w(),
            n = e.top,
            o = e.left;

        function t(e) {
            for (var t = e;
                (t = t.parentNode) !== t.ownerDocument.body;) g(t) && (i.unshift(t), n += t.scrollTop, o += t.scrollLeft)
        }
        t(this.elem);
        for (var r = m(this.elem); r != u;) {
            i.unshift(r.frameElement);
            var a = w();
            n += a.top, o += a.left, t(r.frameElement), r = r.parent
        }
        this.layoutPosition = y(this.elem, o, n), this.scrollParents = i
    }, b.prototype.getLayoutPosition = function(e) {
        return !e && this.layoutPosition || this.calcLayoutPosition(), this.layoutPosition
    }, b.prototype.getViewableRect = function(e) {
        this.scrollParents || this.calcLayoutPosition();
        var t = e || v(),
            i = c(this.scrollParents, function(e) {
                return e
            });
        i.push(this.elem);
        for (var n = null, o = t, r = 0; r < i.length; r++) {
            if (n = y(i[r], t.left, t.top), this.zeroSizeViewableMode) {
                var a = 0 === n.width ? 1 : n.width,
                    s = 0 === n.height ? 1 : n.height;
                n = new f({
                    top: n.top,
                    left: n.left,
                    width: a,
                    height: s
                })
            }
            if (0 === (o = o.getOverlappedArea(n)).width || 0 === o.height) break
        }
        if (this.trimmedRect) {
            var h = this.trimmedRect.copy();
            return h.transfer(n.left, n.top), o.getOverlappedArea(h)
        }
        return o
    };

    function I(e) {
        this.pollInterval = e, this.targets = [], this.timer = null, this.activeNums = 0
    }
    var S = {
        Rect: f,
        traverseAllWindows: function(r, e) {
            (function e(t) {
                if (!r(t)) return !1;
                for (var i = t.frames, n = 0; n < i.length; n++) {
                    var o = i[n];
                    try {
                        o.document.URL
                    } catch (e) {
                        continue
                    }
                    if (!e(o)) return !1
                }
                return !0
            })(e = e || u)
        },
        getElementRect: function(e) {
            var t = e.getBoundingClientRect();
            return new f({
                top: Math.round(t.top),
                left: Math.round(t.left),
                bottom: Math.round(t.bottom),
                right: Math.round(t.right)
            })
        },
        getViewedRect: v,
        getPageSize: function() {
            var e = 0,
                t = 0;
            return p.body && (t = p.body.scrollWidth || p.documentElement.scrollWidth, e = p.body.scrollHeight || p.documentElement.scrollHeight), {
                width: Math.round(t),
                height: Math.round(e)
            }
        },
        getScreenSize: function() {
            var e = u.innerWidth || p.documentElement.clientWidth,
                t = u.innerHeight || p.documentElement.clientHeight;
            return {
                width: Math.round(e),
                height: Math.round(t)
            }
        },
        getScrollPos: w,
        ElementPosition: b,
        getTopWindow: function() {
            return u
        }
    };
    I.prototype.start = function() {
        var e = this,
            t = S.getTopWindow();
        this.timer = t.setInterval(function() {
            e.poll()
        }, this.pollInterval)
    }, I.prototype.stop = function() {
        S.getTopWindow().clearInterval(this.timer), this.timer = null
    }, I.prototype.poll = function() {
        var t = (new Date).getTime();
        l(this.targets, function(e) {
            e.active && t - e.lastFiredAt >= e.interval && (e.method.call(e.context, "Polling"), e.lastFiredAt = t)
        }, this)
    }, I.prototype.registerHandler = function(e, t, i) {
        var n = {
                active: !1,
                interval: e,
                context: t,
                method: i,
                lastFiredAt: (new Date).getTime(),
                lazyCounter: 0
            },
            o = this.targets.length;
        return this.targets.push(n), o
    }, I.prototype.activateHandler = function(e) {
        var t = this.targets[e];
        t.active = !0, 0 === this.activeNums && this.start(), this.activeNums++
    }, I.prototype.deactivateHandler = function(e) {
        var t = this.targets[e];
        t.active = !1, this.activeNums--, 0 === this.activeNums && this.stop()
    };

    function T(e, t) {
        this.manager = e, this.context = t.context, this.method = t.method, this.name = t.name || this.method.name || "UNNAMED", this.events = t.events || [], this.polling = t.polling || -1, this.minInterval = t.minInterval || 0, this.lastFiredAt = 0, this.eventKeys = [], this.pollingKey = -1, this.registerHandlers()
    }
    T.prototype.registerHandlers = function() {
        l(this.events, function(e) {
            var t = this.manager.getEvent(e),
                i = t.registerHandler(this, this.fire);
            this.eventKeys.push({
                event: t,
                key: i
            })
        }, this), 0 <= this.polling && (this.pollingKey = this.manager.poller.registerHandler(this.polling, this, this.fire)), this.activate()
    }, T.prototype.activate = function() {
        l(this.eventKeys, function(e) {
            e.event.activateHandler(e.key)
        }, this), 0 <= this.pollingKey && this.manager.poller.activateHandler(this.pollingKey)
    }, T.prototype.deactivate = function() {
        l(this.eventKeys, function(e) {
            e.event.deactivateHandler(e.key)
        }, this), 0 <= this.pollingKey && this.manager.poller.deactivateHandler(this.pollingKey)
    }, T.prototype.fire = function(e, t) {
        var i = (new Date).getTime(),
            n = !1;
        if (0 === this.minInterval || 0 === this.lastFiredAt ? n = !0 : i - this.lastFiredAt > this.minInterval && (n = !0), n) {
            var o = t || {},
                r = (this.lastFiredAt = i) - this.manager.baseTime;
            this.method.call(this.context, r, e, o)
        }
    };
    var V = function(e) {
        this.baseTime = e, this.poller = new I(50), this.events = {}
    };

    function M(e, t, i, n) {
        e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent && e.attachEvent("on" + t, i)
    }

    function E(e, t, i, n) {
        e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent && e.detachEvent("on" + t, i)
    }
    V.prototype.newAction = function(e) {
        return new T(this, e)
    }, V.prototype.getEvent = function(e) {
        if (this.events[e]) return this.events[e];
        if (!D[e]) return null;
        var t = new D[e](this);
        return this.events[e] = t
    };

    function A() {
        this.eventName = "", this.handlers = [], this.activeNums = 0
    }
    A.prototype.registerHandler = function(e, t) {
        var i = {
                active: !1,
                context: e,
                method: t
            },
            n = this.handlers.length;
        return this.handlers.push(i), n
    }, A.prototype.activateHandler = function(e) {
        var t = this.handlers[e];
        t.active = !0, 0 === this.activeNums && this.setup(), this.activeNums++
    }, A.prototype.deactivateHandler = function(e) {
        var t = this.handlers[e];
        t.active = !1, this.activeNums--, 0 === this.activeNums && this.cleanup()
    }, A.prototype.setup = function() {}, A.prototype.fire = function(t) {
        l(this.handlers, function(e) {
            e.active && e.method.call(e.context, this.eventName, t)
        }, this)
    }, A.prototype.cleanup = function() {};

    function x() {
        A.apply(this, arguments), this.eventName = "onLoad"
    }
    r(x, A), x.prototype.setup = function() {
        var t = this,
            e = S.getTopWindow();
        this.boundHandler = function(e) {
            t.fire({
                nativeEvent: e
            })
        }, M(e, "load", this.boundHandler, !1)
    }, x.prototype.cleanup = function() {
        E(S.getTopWindow(), "load", this.boundHandler, !1)
    };

    function N() {
        A.apply(this, arguments), this.eventName = "viewPosChange"
    }
    r(N, A), N.prototype.setup = function() {
        var t = this,
            e = S.getTopWindow();
        this.nativeWrapper = function(e) {
            t.nativeHandler({
                nativeEvent: e
            })
        }, M(e, "scroll", this.nativeWrapper, !1), M(e, "touchmove", this.nativeWrapper, !1)
    }, N.prototype.fireManually = function() {
        var e = {
            nativeEvent: {}
        };
        e.rect = S.getViewedRect(), this.fire(e)
    }, N.prototype.nativeHandler = function(e) {
        var t = S.getViewedRect();
        e.rect = t, this.lastViewedRect ? t.width !== this.lastViewedRect.width || t.height !== this.lastViewedRect.height ? (this.fire(e), this.lastViewedRect = t) : (Math.abs(t.top - this.lastViewedRect.top) >= this.changeThreshold || Math.abs(t.left - this.lastViewedRect.left) >= this.changeThreshold) && (this.fire(e), this.lastViewedRect = t) : (this.fire(e), this.lastViewedRect = t)
    }, N.prototype.changeThreshold = 50, N.prototype.cleanup = function() {
        var e = S.getTopWindow();
        E(e, "scroll", this.nativeWrapper, !1), E(e, "touchmove", this.nativeWrapper, !1)
    };

    function R() {
        this.dataSize = 0, this.parent = null
    }
    var _, z, D = {
            onLoad: x,
            viewPosChange: N
        },
        B = {
            EventManager: V,
            MetaEvent: A,
            MetaEventDefinition: D
        },
        C = (_ = new o((new Date).getTime()), z = new B.EventManager(_.baseTime), _.set("eventManager", z), {
            getMaster: function() {
                return _
            }
        });
    R.prototype.incrementSize = function(e) {
        this.dataSize += e, this.parent && this.parent.incrementSize(e)
    }, R.prototype.decrementSize = function(e) {
        this.dataSize -= e, this.parent && this.parent.decrementSize(e)
    }, R.prototype.getDataSize = function() {
        return this.dataSize
    }, R.prototype.exports = function() {};

    function k(e, t) {
        R.apply(this, arguments), this.value = t ? e : encodeURIComponent(e), this.incrementSize(this.value.length)
    }

    function F(e) {
        return e instanceof R ? e : a(e) || s(e) ? new k(e.toString()) : null
    }
    r(k, R), k.prototype.exports = function() {
        return this.value
    };

    function O(e) {
        R.apply(this, arguments), this.sep = encodeURIComponent(e), this.children = []
    }
    r(O, R), O.prototype.exports = function() {
        return c(this.children, function(e) {
            return e.exports()
        }, this).join(this.sep)
    }, O.prototype.push = function(e) {
        var t = F(e);
        0 < this.children.length && this.incrementSize(this.sep.length), this.incrementSize(t.dataSize), this.children.push(t), t.parent = this
    }, O.prototype.clear = function() {
        this.children = [], this.dataSize = 0
    };

    function P(e, t) {
        this.options = t || {}, this.definition = {}, this.exportOrder = [], this.staticValueNums = 0, this.staticValueSize = 0, l(e, function(e) {
            e._encodedKey = encodeURIComponent(e.key), "static" === e.type && (e._encodedValue = encodeURIComponent(e.value), this.staticValueSize += e._encodedKey.length, this.staticValueSize += 1, this.staticValueSize += e._encodedValue.length, 0 < this.staticValueNums && (this.staticValueSize += 1), this.staticValueNums++), this.definition[e.name] = e, this.exportOrder.push(e.name)
        }, this)
    }
    P.prototype.getInstance = function() {
        return new q(this)
    }, P.prototype.isDefinedVar = function(e) {
        return this.definition[e] && "var" === this.definition[e].type
    }, P.prototype.getStaticValueSize = function() {
        return this.staticValueSize
    }, P.prototype.setLazyStaticValue = function(e, t) {
        var i = this.definition[e];
        i._encodedValue && (this.staticValueSize -= i._encodedKey.length, this.staticValueSize -= 1, this.staticValueSize -= i._encodedValue.length, i._encodedValue = null, this.staticValueNums -= 1, 0 !== this.staticValueNums && (this.staticValueSize -= 1)), t && (i._encodedValue = encodeURIComponent(t), this.staticValueSize += i._encodedKey.length, this.staticValueSize += 1, this.staticValueSize += i._encodedValue.length, 0 < this.staticValueNums && (this.staticValueSize += 1), this.staticValueNums++)
    };
    var q = function(e) {
        this.template = e, this.vars = {}
    };
    q.prototype.bind = function(e, t, i) {
        var n;
        n = i ? new k(t, !0) : F(t), this.template.isDefinedVar(e) && (this.vars[e] = n)
    }, q.prototype.exports = function() {
        var i = "";
        return l(this.template.exportOrder, function(e) {
            var t = this.template.definition[e];
            "static" === t.type && (0 < i.length && (i += "&"), i += t._encodedKey + "=" + t._encodedValue), "lazy-static" === t.type ? t._encodedValue && (0 < i.length && (i += "&"), i += t._encodedKey + "=" + t._encodedValue) : "random" === t.type ? (0 < i.length && (i += "&"), i += t._encodedKey + "=" + d()) : "var" === t.type && this.vars[e] && (0 < i.length && (i += "&"), i += t._encodedKey + "=" + this.vars[e].exports())
        }, this), i
    };

    function L(e, t) {
        this.rawElement = e, this.trimmedRect = t && t.trimmedRect ? t.trimmedRect : null, this.zeroSizeViewableMode = t && t.zeroSizeViewableMode;
        var i = {
            zeroSizeViewableMode: this.zeroSizeViewableMode
        };
        this.position = new S.ElementPosition(this.rawElement, this.trimmedRect, i), this.layoutPosition = this.position.getLayoutPosition(), this.lastViewedIn = !1, this.lastViewedStart = 0, this.currentViewedTime = 0, this.viewedEnoughTime = !1, this.notifiedOnce = !1, this.viewInTimes = [], this.viewOutTimes = [], this.options = t, this.tagId = t.tagId, this.requestId = t.requestId, this.rank = t.rank, this.viewableInfo = t.viewableInfo, this.exclusiveId = t.exclusiveId, this.query = t.query || {}
    }
    var W = O,
        H = P;
    L.prototype.VIEWED_TIME_CONDITION = 1e3, L.prototype.VIEWED_AREA_CONDITION = .5, L.prototype.isBeaconedTarget = function() {
        return this.viewedEnoughTime && !this.notifiedOnce
    }, L.prototype.setAsNotified = function() {
        this.notifiedOnce = !0
    }, L.prototype.calcViewableArea = function(e, t) {
        var i = this.position.getViewableRect(),
            n = i.width * i.height;
        if (0 == n) return 0;
        var o = this.trimmedRect ? this.trimmedRect : S.getElementRect(this.rawElement);
        if (this.zeroSizeViewableMode) {
            var r = 0 === o.width ? 1 : o.width,
                a = 0 === o.height ? 1 : o.height;
            o = new S.Rect({
                top: o.top,
                left: o.left,
                width: r,
                height: a
            })
        }
        var s = o.width * o.height,
            h = e.width * e.height;
        return 0 == s || 0 == h ? 0 : n / Math.min(s, h)
    }, L.prototype.check = function(e, t, i) {
        var n = this.calcViewableArea(t, i),
            o = n >= this.VIEWED_AREA_CONDITION;
        this.lastViewedIn && o ? this.handleViewContinue(e) : this.lastViewedIn && !o ? this.handleViewOut(e) : !this.lastViewedIn && o && this.handleViewIn(e)
    }, L.prototype.handleViewIn = function(e) {
        this.lastViewedIn = !0, this.lastViewedStart = e, this.currentViewedTime = 0, this.viewInTimes.push(this.lastViewedStart)
    }, L.prototype.handleViewContinue = function() {
        this.currentViewedTime = C.getMaster().getElapsedTime() - this.lastViewedStart, this.currentViewedTime >= this.VIEWED_TIME_CONDITION && (this.viewedEnoughTime = !0)
    }, L.prototype.handleViewOut = function(e) {
        this.currentViewedTime = e - this.lastViewedStart, this.currentViewedTime >= this.VIEWED_TIME_CONDITION && (this.viewedEnoughTime = !0), this.viewOutTimes.push(e), this.lastViewedIn = !1, this.lastViewedStart = 0, this.currentViewedTime = 0
    }, L.prototype.updateRect = function(e) {
        this.trimmedRect = e;
        var t = {
            zeroSizeViewableMode: this.zeroSizeViewableMode
        };
        this.position = new S.ElementPosition(this.rawElement, this.trimmedRect, t)
    };

    function j(e, t) {
        this.tagId = t.tagId, this.sendNumViewIn = 0, this.sendNumViewable = 0, this.sendNumViewOut = 0, K.call(this, e, t)
    }
    var K = L;
    r(j, K), j.prototype.sendNotification = function(e, t, i) {
        var n = this.rawElement.contentWindow;
        if (n && n.postMessage) {
            var o = t + "," + i + "," + e,
                r = "vimpsMessage," + o;
            n.postMessage(r, "*")
        }
    }, j.prototype.handleViewIn = function(e) {
        j.super_.prototype.handleViewIn.apply(this, arguments), this.sendNotification(e, "view-in", ++this.sendNumViewIn)
    }, j.prototype.handleViewContinue = function(e) {
        var t = this.viewedEnoughTime;
        j.super_.prototype.handleViewContinue.apply(this, arguments), !t && this.viewedEnoughTime && this.sendNotification(e, "viewable", ++this.sendNumViewable)
    }, j.prototype.handleViewOut = function(e) {
        j.super_.prototype.handleViewOut.apply(this, arguments), this.sendNotification(e, "view-out", ++this.sendNumViewOut)
    }, j.prototype.sendAbortMessage = function() {
        var e = this.rawElement.contentWindow;
        e.postMessage && e.postMessage("vimpsMessage,aborted", "*")
    };

    function U(e, t, i, n) {
        this.tagId = e, this.requestId = t, this.rank = i, this.viewableInfo = n, this.targets = []
    }
    var Q = j;
    U.prototype.setDummyTarget = function(e) {
        this.targets.push(e)
    };

    function Y(e, t) {
        this.proxy = t.proxy, this.proxy.setDummyTarget(this), t.tagId = this.proxy.tagId, t.requestId = this.proxy.requestId, t.viewableInfo = this.proxy.viewableInfo, K.call(this, e, t)
    }
    r(Y, K), Y.prototype.isBeaconedTarget = function() {
        return this.viewedEnoughTime && !this.proxy.notifiedOnce
    }, Y.prototype.setAsNotified = function() {
        this.proxy.notifiedOnce = !0
    }, Y.prototype.handleViewIn = function() {
        K.prototype.handleViewIn.apply(this, arguments)
    }, Y.prototype.handleViewOut = function() {
        K.prototype.handleViewOut.apply(this, arguments)
    };

    function X(e) {
        this.uri = e.uri, this.requestType = e.requestType, this.beaconAllowed = !1
    }
    X.prototype.MAX_LENGTH_FOR_EACH_REQUEST = 8e3, X.prototype.getQueryMaxLength = function() {
        return this.MAX_LENGTH_FOR_EACH_REQUEST - this.uri.length
    }, X.prototype.doRequest = function(e) {
        var t = this.getQueryMaxLength();
        e.length > t && (e = e.substring(0, t));
        var i = this.uri;
        (0 < e.length && (i += "?" + e + "&EOQ"), "sendbeacon" === this.requestType && window.navigator.sendBeacon) ? window.navigator.sendBeacon(i) || (document.createElement("img").src = i): document.createElement("img").src = i
    }, X.prototype.sendString = function(e, t) {
        (t || this.beaconAllowed) && this.doRequest(e)
    }, X.prototype.setAllowed = function() {
        this.beaconAllowed = !0
    }, X.prototype.setDisallowed = function() {
        this.beaconAllowed = !1
    }, X.prototype.setUri = function(e) {
        this.uri = e
    };

    function G() {
        this.data = new W(this.separator)
    }
    G.prototype.push = function(e) {
        this.data.push(e)
    }, G.prototype.getDataSize = function() {
        return this.data.getDataSize()
    }, G.prototype.separator = "&";

    function J(e) {
        this.targetVisualizer = e, this.serialNumber = 100, this.registerAllActions(), this.targets = [], this.viewedQueryTmpl = new H(this.viewedQueryTmplDef), this.requestIdTable = {}, this.targetProxies = {}, this.streamAttachedMessageStack = [], this.timelineTargetProxies = {}, this.timelineAttachedMessageStack = [], this.frameNotifyingTargets = [], this.pendingCollectingTextAdsIn = {}, this.alreadySentBeacon = [], this.beaconNum = 0, this.beaconSenderForViewableBeacon = new X({
            uri: "https://b94.yahoo.co.jp/v",
            requestType: "image"
        }), this.beaconSenderForMeasurableBeacon = new X({
            uri: "https://b94.yahoo.co.jp/m",
            requestType: "sendbeacon"
        }), this.pvRandom = d(), this.viewedQueryTmpl.setLazyStaticValue("pvRandom", this.pvRandom), this.messageQueryTmpl = new H(this.messageQueryTmplDef)
    }
    J.prototype.registerAllActions = function() {
        h(this.actions, function(e, t) {
            var i = this.registerAction(e, t);
            this.actions[e]._registered = i
        }, this)
    }, J.prototype.registerAction = function(e, t) {
        var i = {
                context: this,
                method: this[e],
                name: e,
                events: t.events,
                polling: t.polling,
                minInterval: t.minInterval
            },
            n = C.getMaster().get("eventManager");
        return n.newAction(i)
    }, J.prototype.isCollectedElem = function(e) {
        if (e.__uadfCollectedBy)
            for (var t = e.__uadfCollectedBy, i = 0; i < t.length; i++)
                if (t[i] === this.serialNumber) return !0;
        return !1
    }, J.prototype.setAsCollected = function(e) {
        e.__uadfCollectedBy || (e.__uadfCollectedBy = []), e.__uadfCollectedBy.push(this.serialNumber)
    }, J.prototype.registerTarget = function(e, t) {
        if (!this.isCollectedElem(e) || t && t.canDuplicate) {
            var i = new K(e, t);
            return this.targets.push(i), this.setAsCollected(e), this.targetVisualizer.setDebugStyle(i), i
        }
        return null
    }, J.prototype.actions = {
        checkViewableState: {
            events: ["onLoad", "viewPosChange"],
            polling: 1e3,
            minInterval: 100
        }
    }, J.prototype.checkViewableState = function(t, e, i) {
        var n = i.rect ? i.rect : S.getViewedRect();
        l(this.targets, function(e) {
            e.check(t, n)
        }, this), this.sendViewableBeacon(t, e, i), l(this.frameNotifyingTargets, function(e) {
            e.check(t, n)
        }, this)
    }, J.prototype._sendMeasurableBeacon = function(e, i) {
        if (this.beaconSenderForMeasurableBeacon.beaconAllowed && e) {
            var n;
            "string" == typeof e && (e = [e]), e = function i(e) {
                return e.reduce(function(e, t) {
                    return Array.isArray(t) ? e.concat(i(t)) : e.concat(t)
                }, [])
            }(e);
            var t = navigator.userAgent;
            if (t.match(/MSIE/) || t.match(/Trident/)) {
                var o = t.match(/(MSIE\s|rv:)([\d.]+)/)[2];
                n = 11 <= o ? 5e3 : 1500
            } else n = 8e3;
            if (0 < e.length) {
                var r = new G;
                if (l(e, function(e) {
                        if ("non_ydn" !== e) {
                            if (0 < r.getDataSize() && r.getDataSize() + e.length >= n) {
                                var t = this.viewedQueryTmpl.getInstance();
                                t.bind("beaconType", "5"), t.bind("seqNum", ++this.beaconNum), t.bind("elapsedTime", C.getMaster().getElapsedTime()), t.bind("measurable", i), t.bind("reportData", r.data), this.beaconSenderForMeasurableBeacon.sendString(t.exports()), r = new G
                            }
                            r.push(e)
                        }
                    }, this), 0 < r.getDataSize()) {
                    var a = this.viewedQueryTmpl.getInstance();
                    a.bind("beaconType", "5"), a.bind("seqNum", ++this.beaconNum), a.bind("elapsedTime", C.getMaster().getElapsedTime()), a.bind("measurable", i), a.bind("reportData", r.data), this.beaconSenderForMeasurableBeacon.sendString(a.exports())
                }
            }
        }
    }, J.prototype.sendMeasurableBeacon = function(e) {
        this._sendMeasurableBeacon(e, "1")
    }, J.prototype.sendNonMeasurableBeacon = function(e) {
        this._sendMeasurableBeacon(e, "0")
    }, J.prototype.registerTargetProxyForStream = function(n, o, e) {
        var r = n.split("-")[0];
        this.targetProxies[r] || (this.targetProxies[r] = [], l(e, function(e, t) {
            var i = new U(n, o, t + 1, e);
            this.targetProxies[r][t] = i
        }, this), this.procStreamAttachedMessage(r))
    }, J.prototype.notifyStreamAttached = function(e, t) {
        this.streamAttachedMessageStack.push([e, t]), this.procStreamAttachedMessage(e)
    }, J.prototype.procStreamAttachedMessage = function(e) {
        if (this.targetProxies[e]) {
            for (var t = []; 0 < this.streamAttachedMessageStack.length;) {
                var i = this.streamAttachedMessageStack.shift();
                i[0] === e ? this.registerDummyTargetForStream(i[0], i[1]) : t.push(i)
            }
            this.streamAttachedMessageStack = t
        }
    }, J.prototype.registerDummyTargetForStream = function(o, e) {
        var t = S.getTopWindow().document.getElementById(e);
        if (t) {
            var i = Array.prototype.slice.apply(t.querySelectorAll("[data-ydntxt-item]"));
            for (var n in this.pendingCollectingTextAdsIn) {
                if (this.pendingCollectingTextAdsIn.hasOwnProperty(n))(0, this.pendingCollectingTextAdsIn[n])()
            }
            var r = 0;
            l(i, function(e) {
                if (!this.isCollectedElem(e)) {
                    var t = r + 1,
                        i = this.targetProxies[o][r];
                    if (r += 1, i) {
                        var n = new Y(e, {
                            rank: t,
                            proxy: i
                        });
                        this.targets.push(n), this.targetVisualizer.setDebugStyle(n), this.setAsCollected(e)
                    }
                }
            }, this)
        }
    }, J.prototype.registerTargetProxyForTimeline = function(e, t, i, n, o) {
        if (!this.timelineTargetProxies[e]) {
            this.timelineTargetProxies[e] = [];
            for (var r = o || [], a = 0; a < t; a++) {
                var s = new U(i, n, a + 1, r[a]);
                this.timelineTargetProxies[e][a] = s
            }
            this.procTimelineAttachedMessage(e)
        }
    }, J.prototype.notifyTimelineAttached = function(e, t, i, n, o) {
        this.timelineAttachedMessageStack.push([e, t, i, n, o]), this.procTimelineAttachedMessage(e)
    }, J.prototype.procTimelineAttachedMessage = function(e) {
        var t = this.timelineTargetProxies[e];
        if (t) {
            for (; 0 < this.timelineAttachedMessageStack.length;) {
                var i = this.timelineAttachedMessageStack.shift();
                if (i[0] === e) {
                    var n = i[3],
                        o = i[4],
                        r = t[n - 1];
                    if (!r) return;
                    var a = new Y(o, {
                        rank: n,
                        proxy: r
                    });
                    this.targets.push(a), this.targetVisualizer.setDebugStyle(a), this.setAsCollected(o)
                }
            }
            this.timelineAttachedMessageStack = []
        }
    }, J.prototype.collectRichAdsIn = function(t, i, n) {
        var o = 0,
            r = this,
            a = 1800,
            s = null;

        function e() {
            try {
                --a <= 0 && clearInterval(s);
                var e = r.getRichAds(t);
                if (0 === e.length) return;
                l(e, function(e) {
                    var t = n && n[o] || null;
                    r.registerTarget(e, {
                        exclusiveId: i,
                        viewableInfo: t,
                        query: r.getRichAdsQuery(e)
                    }), o++
                }, r), clearInterval(s)
            } catch (e) {}
        }
        s = setInterval(e, 100), e()
    }, J.prototype.getRichAds = function(e) {
        var t = [];
        return l(e.getElementsByTagName("*"), function(e) {
            null !== e.getAttribute("data-rma-viewable") && t.push(e)
        }), t
    }, J.prototype.getRichAdsQuery = function(e) {
        return e ? {
            mainshrink: e.getAttribute("data-rma-mainshrink"),
            sidehide: e.getAttribute("data-rma-sidehide")
        } : {
            mainshrink: null,
            sidehide: null
        }
    }, J.prototype.collectTextAdsIn = function(t, n, o, r) {
        var a = 0,
            s = this,
            i = 1800,
            h = null;

        function e() {
            try {
                --i <= 0 && (delete s.pendingCollectingTextAdsIn[h], clearInterval(h));
                var e = s.getTextAds(t, o);
                if (0 === e.length) return;
                l(e, function(e) {
                    o in s.requestIdTable || (s.requestIdTable[o] = 0);
                    var t = ++s.requestIdTable[o],
                        i = r && r[a] || null;
                    s.registerTarget(e, {
                        tagId: n,
                        requestId: o,
                        rank: t,
                        viewableInfo: i
                    }), a++
                }, s), delete s.pendingCollectingTextAdsIn[h], clearInterval(h)
            } catch (e) {}
        }
        h = setInterval(e, 100), (this.pendingCollectingTextAdsIn[h] = e)()
    }, J.prototype.getTextAds = function(e, t) {
        var i = [];
        if (l(e.getElementsByTagName("*"), function(e) {
                null !== e.getAttribute("data-ydntxt-item") && i.push(e)
            }), 0 < i.length) return i;
        var n = e.getElementsByTagName("a");
        return l(n, function(e) {
            null !== e.href.match(/https?:\/\/rd\.ane\.yahoo\.co\.jp\//) && -1 !== e.href.indexOf("RI=" + t) && i.push(e)
        }), i
    }, J.prototype.getBeaconDataForTarget = function(e) {
        return e.viewableInfo
    }, J.prototype.sendViewableBeacon = function(n) {
        if (this.beaconSenderForViewableBeacon.beaconAllowed) {
            var i = [];
            l(this.targets, function(e) {
                if (e.isBeaconedTarget() && -1 === this.alreadySentBeacon.indexOf(e.exclusiveId)) {
                    this.targetVisualizer.setDebugStyle(e);
                    var t = this.getBeaconDataForTarget(e);
                    t && (e.exclusiveId && this.alreadySentBeacon.push(e.exclusiveId), e.setAsNotified(), i.push({
                        viewableInfo: t,
                        mainshrink: e.query.mainshrink,
                        sidehide: e.query.sidehide
                    }))
                }
            }, this), 0 < i.length && l(i, function(e) {
                if ("non_ydn" !== e.viewableInfo) {
                    var t = new G;
                    t.push(e.viewableInfo);
                    var i = this.viewedQueryTmpl.getInstance();
                    i.bind("reportData", t.data), i.bind("beaconType", "2"), i.bind("seqNum", ++this.beaconNum), i.bind("elapsedTime", n), e.mainshrink && i.bind("mainshrink", e.mainshrink), e.sidehide && i.bind("sidehide", e.sidehide), this.beaconSenderForViewableBeacon.sendString(i.exports())
                }
            }, this)
        }
    }, J.prototype.registerFrameNotifyingTargets = function(e, t) {
        this.frameNotifyingTargets.push(new Q(t, {
            tagId: e
        }))
    }, J.prototype.markAdsForDebug = function() {
        this.targetVisualizer.enable();
        var t = this;
        l(this.targets, function(e) {
            t.targetVisualizer.setDebugStyle(e)
        })
    }, J.prototype.updateTargetRect = function(t, i) {
        l(this.targets, function(e) {
            e.viewableInfo === i && e.updateRect(t)
        }, this), C.getMaster().get("eventManager").getEvent("viewPosChange").fireManually()
    };
    var $ = [{
        name: "rs",
        type: "static",
        key: "rs",
        value: "yads_vb"
    }, {
        name: "beaconType",
        type: "var",
        key: "bt"
    }, {
        name: "pvRandom",
        type: "lazy-static",
        key: "pv"
    }, {
        name: "beaconRandom",
        type: "random",
        key: "rand"
    }, {
        name: "seqNum",
        type: "var",
        key: "seq"
    }, {
        name: "elapsedTime",
        type: "var",
        key: "et"
    }, {
        name: "retryNum",
        type: "var",
        key: "rn"
    }, {
        name: "mainshrink",
        type: "var",
        key: "mainshrink"
    }, {
        name: "sidehide",
        type: "var",
        key: "sidehide"
    }, {
        name: "reportData",
        type: "var",
        key: "vi"
    }, {
        name: "measurable",
        type: "var",
        key: "measurable"
    }];
    J.prototype.viewedQueryTmplDef = $, J.prototype.messageQueryTmplDef = $;
    var Z = J;

    function ee(e) {
        this.detector = e, this.setMessageEventHandler()
    }
    var te = (ee.prototype.handleVImpsMode = function(e) {
        return 0 !== e
    }, ee.prototype.notifyRendered = function(o) {
        if (o.viewableUrl && this.detector.beaconSenderForViewableBeacon.setUri(o.viewableUrl), o.measurableUrl ? (this.detector.beaconSenderForMeasurableBeacon.setUri(o.measurableUrl), this.detector.beaconSenderForMeasurableBeacon.setAllowed()) : this.detector.beaconSenderForMeasurableBeacon.setDisallowed(), this.handleVImpsMode(o.vimpsMode)) {
            this.detector.beaconSenderForViewableBeacon.setAllowed();
            var r = S.getTopWindow();
            if ("multi" === o.type) {
                var e = o.parentIdList;
                l(e, function(e, t) {
                    var i = r.document.getElementById(e);
                    if (i) {
                        var n = o.viewableInfoList && o.viewableInfoList[t] || null;
                        this.detector.collectTextAdsIn(i, o.adProdSetCode, o.requestId, n)
                    }
                }, this)
            } else if ("single_with_parent" === o.type) {
                var t = o.parentId,
                    i = r.document.getElementById(t);
                i && this.detector.collectTextAdsIn(i, o.adProdSetCode, o.requestId, o.viewableInfo)
            } else "doc_write" === o.type ? this.detector.collectTextAdsIn(o.docWriteCaller.parentNode, o.adProdSetCode, o.requestId, o.viewableInfo) : "stream" === o.type ? o.viewableInfo && this.detector.registerTargetProxyForStream(o.adProdSetCode, o.requestId, o.viewableInfo) : "timeline" === o.type ? this.detector.registerTargetProxyForTimeline(o.uniqueId, o.adNum, o.adProdSetCode, o.requestId, o.viewableInfo) : "richad" === o.type && l(o.parentIdList, function(e, t) {
                var i = r.document.getElementById(e);
                i && this.detector.collectRichAdsIn(i, o.adProdSetCode, o.viewableInfo)
            }, this);
            this.detector.sendMeasurableBeacon(o.viewableInfoList || o.viewableInfo)
        } else this.detector.sendNonMeasurableBeacon(o.viewableInfoList || o.viewableInfo)
    }, ee.prototype.notifyStreamAttached = function(e, t) {
        this.detector.notifyStreamAttached(e, t)
    }, ee.prototype.notifyTimelineAttached = function(e, t, i, n, o) {
        this.detector.notifyTimelineAttached(e, t, i, n, o)
    }, Object.defineProperty(ee.prototype, "messageEventHandlers", {
        get: function() {
            return {
                frameStarted: {
                    method: this.handleFrameStartedMessage
                },
                frameLoaded: {
                    method: this.handleFrameLoadedMessage
                },
                frameScrolled: {
                    method: this.handleFrameScrolledMessage
                }
            }
        },
        enumerable: !0,
        configurable: !0
    }), ee.prototype.setMessageEventHandler = function() {
        function e(e) {
            t.handleMessageEvent(e)
        }
        var t = this,
            i = S.getTopWindow();
        i.addEventListener ? i.addEventListener("message", e, !1) : i.attachEvent("onmessage", e)
    }, ee.prototype.handleMessageEvent = function(e) {
        if (("http://i.yimg.jp" === e.origin || "https://s.yimg.jp" === e.origin || /\.yahoo\.co\.jp(:[0-9]+)?$/.test(e.origin)) && a(e.data)) {
            var t = e.data.split(","),
                i = t[0],
                n = this.messageEventHandlers[i];
            n && n.method.call(this, t, e)
        }
    }, ee.prototype.detectMessagedFrame = function(n) {
        var e = S.getTopWindow(),
            o = null;
        return S.traverseAllWindows(function(e) {
            for (var t = e.document.getElementsByTagName("iframe"), i = 0; i < t.length; i++)
                if (t[i].contentWindow === n) return o = t[i], !1;
            return !0
        }, e), o
    }, ee.prototype.handleFrameStartedMessage = function(e, t) {
        if (3 === e.length) {
            var i = parseInt(e[1], 10);
            if (!isNaN(i) && this.handleVImpsMode(i)) {
                var n = this.detectMessagedFrame(t.source);
                if (n) {
                    var o = e[2];
                    this.detector.registerFrameNotifyingTargets(o, n)
                }
            }
        }
    }, ee.prototype.handleFrameLoadedMessage = function(e, t) {
        var i = parseInt(e[1], 10);
        if (!isNaN(i)) {
            var n = e[5],
                o = e[6];
            if (o && this.detector.beaconSenderForViewableBeacon.setUri(o), n ? (this.detector.beaconSenderForMeasurableBeacon.setUri(n), this.detector.beaconSenderForMeasurableBeacon.setAllowed()) : this.detector.beaconSenderForMeasurableBeacon.setDisallowed(), this.handleVImpsMode(i)) {
                this.detector.beaconSenderForViewableBeacon.setAllowed();
                var a = e[2],
                    s = this.detectMessagedFrame(t.source);
                if (s) {
                    var h = e[3];
                    if ("non_ydn" !== h) {
                        if (0 !== e[4].indexOf("ERR")) {
                            var r = e[4].split("|");
                            l(r, function(e, t) {
                                var i = this.parseViewableInfo(e);
                                if (i) {
                                    var n = i[0],
                                        o = i[1],
                                        r = {
                                            canDuplicate: !0,
                                            tagId: a,
                                            requestId: h,
                                            rank: t + 1,
                                            viewableInfo: n
                                        };
                                    o && (r.trimmedRect = o), this.detector.registerTarget(s, r), this.detector.sendMeasurableBeacon(n)
                                }
                            }, this)
                        }
                    } else this.detector.registerTarget(s, {
                        tagId: a,
                        requestId: h,
                        rank: "1",
                        viewableInfo: "non_ydn"
                    })
                }
            } else l(e[4].split("|"), function(e) {
                var t = this.parseViewableInfo(e);
                if (t) {
                    var i = t[0];
                    this.detector.sendNonMeasurableBeacon(i)
                }
            }, this)
        }
    }, ee.prototype.parseViewableInfo = function(e) {
        var t = e.split("/");
        if (5 !== t.length) return null;
        var i = parseInt(t[0], 10),
            n = parseInt(t[1], 10),
            o = parseInt(t[2], 10),
            r = parseInt(t[3], 10);
        if (isNaN(i) || isNaN(n) || isNaN(o) || isNaN(r)) return null;
        var a = t[4] && 0 !== t[4].length ? t[4] : null;
        return 0 === i && 0 === n && 0 === o && 0 === r ? [a, null] : [a, new S.Rect({
            top: i,
            right: n,
            bottom: o,
            left: r
        })]
    }, ee.prototype.markAdsForDebug = function() {
        this.detector.markAdsForDebug()
    }, ee.prototype.handleFrameScrolledMessage = function(e, t) {
        var i = e[4].split("|");
        l(i, function(e) {
            var t = this.parseViewableInfo(e);
            if (t) {
                var i = t[0],
                    n = t[1];
                this.detector.updateTargetRect(n, i)
            }
        }, this)
    }, ee);

    function ie() {
        this.enabled = !1
    }
    var ne = (ie.prototype.enable = function() {
        this.enabled = !0
    }, ie.prototype.setDebugStyle = function(e) {
        if (this.enabled) {
            var t, i, n = e.rawElement,
                o = "0px 0px 0px 5px red inset",
                r = "0px 0px 0px 5px green inset",
                a = "0.5s";
            if ("iframe" === n.tagName.toLowerCase()) return t = "vimps_debug_iframe_" + e.trimmedRect.top + "_" + e.trimmedRect.left, (i = n.parentElement.querySelector("#" + t)) || ((i = document.createElement("div")).style.top = e.trimmedRect.top + "px", i.style.left = e.layoutPosition.left + e.trimmedRect.left - n.parentElement.getBoundingClientRect().left - window.scrollX + "px", i.style.width = e.trimmedRect.width + "px", i.style.height = e.trimmedRect.height + "px", i.style.position = "absolute", i.id = t, n.parentElement.appendChild(i), n.parentElement.style.position = "relative"), void(e.viewedEnoughTime ? (i.style.boxShadow = r, i.style.transitionDuration = a) : i.style.boxShadow = o);
            var s = n.querySelectorAll("*"),
                h = 1 === s.length && "IMG" === s[0].tagName,
                l = n.getAttribute("data-rma-viewable");
            if (h || l) {
                if (t = "vimps_debug", !(i = n.parentElement.querySelector("#" + t))) {
                    var c = n.getBoundingClientRect();
                    (i = document.createElement("div")).style.top = "0px", i.style.left = e.layoutPosition.left - c.left - window.scrollX + "px", i.style.width = c.width + "px", i.style.height = c.height + "px", i.style.position = "absolute", i.id = t, n.parentElement.appendChild(i), n.parentElement.style.position = "relative"
                }
                e.viewedEnoughTime ? (l && (r = "0px 0px 0px 5px red"), i.style.boxShadow = r, i.style.transitionDuration = a) : (l && (o = "0px 0px 0px 5px green"), i.style.boxShadow = o)
            } else /^https:\/\/m\.yahoo\.co\.jp\/.*/.test(location.href) ? e.viewedEnoughTime ? n.parentElement.style.boxShadow = r : n.parentElement.style.boxShadow = o : (e.viewedEnoughTime ? n.style.boxShadow = r : n.style.boxShadow = o, n.style.transitionDuration = a)
        }
    }, ie);
    ! function(t) {
        var i;
        try {
            t.top.document;
            i = t.top
        } catch (e) {
            i = t
        }
        i.YJ_UADF || (i.YJ_UADF = {});
        var e = i.YJ_UADF;
        if (!(e && e.YADSViewable && e.YADSViewable.initialized)) {
            var n = new ne,
                o = new Z(n),
                r = new te(o);
            e.YADSViewable = {
                initialized: !0,
                notifyRendered: function() {
                    r.notifyRendered.apply(r, arguments)
                },
                notifyStreamAttached: function() {
                    r.notifyStreamAttached.apply(r, arguments)
                },
                notifyTimelineAttached: function() {
                    r.notifyTimelineAttached.apply(r, arguments)
                },
                markAdsForDebug: function() {
                    r.markAdsForDebug.apply(r, arguments)
                }
            }
        }
    }(window)
}]);