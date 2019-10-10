/*! rappie_stream 1.9.0 (built at 2018-07-17 11:39:23) */
/*! UADF 0.16.1 (built at 2018-07-17 11:39:23) */
! function(a, b) {
    "use strict";

    function c(a, b, c) {
        g[a] || (g[a] = {
            name: a,
            deps: b,
            callback: c,
            initialized: null
        })
    }
    for (var d = "YJ_UADF", e = !1, f = a; a.top != f;) {
        f = f.parent;
        try {
            f.document.URL
        } catch (a) {
            e = !0;
            break
        }
    }
    var g = {};
    if (e) {
        var h = {},
            i = function() {};
        h._registerComponent = function() {}, h.initComponent = function() {
            return null
        }, h.exportAPI = function() {}, h.init = function() {
            return !1
        }
    } else {
        var h = function(b) {
                return a.top[b] || (a.top[b] = {}), a.top[b]
            }(d),
            i = function(a) {
                if (a.initialized) return a.initialized;
                for (var b = [], c = 0; c < a.deps.length; c++) {
                    var d = a.deps[c];
                    b.push(i(g[d]))
                }
                var e = a.callback.apply(a, b);
                return a.initialized = e || {}, a.initialized
            };
        h._registerComponent = function(a, b, c) {
            h.components || (h.components = {}), h.components[b] || (h.components[b] = {}), h.components[b][c] || (h.components[b][c] = g[a])
        }, h.initComponent = function(a, b) {
            return h.components && h.components[a] && h.components[a][b] ? i(h.components[a][b]) : null
        }, h.exportAPI = function(a, b) {
            h[a] || (h[a] = {});
            for (var c in b) b.hasOwnProperty(c) && (h[a][c] = b[c])
        }
    }
    c("core/loader", [], function() {}), c("dev/flags", [], function() {
        return {
            debug: !1,
            debugLevel: 0
        }
    });
    var j = "0.16.1";
    c("core/core_util", ["dev/flags"], function(a) {
        return {
            inherit: function(a, b) {
                if (Object.create) a.prototype = Object.create(b.prototype);
                else {
                    var c = function() {};
                    c.prototype = b.prototype, a.prototype = new c
                }
                a.prototype.constructor = a, a.super_ = b
            },
            isInherited: function(a, b) {
                for (var c = a;;) {
                    if (c === b) return !0;
                    if (!c.super_) return !1;
                    c = c.super_
                }
            },
            isArray: function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            isString: function(a) {
                return "[object String]" === Object.prototype.toString.call(a)
            },
            isNumber: function(a) {
                return "[object Number]" === Object.prototype.toString.call(a)
            },
            forEach: function(a, b, c) {
                if (a.forEach) a.forEach(b, c);
                else
                    for (var d = 0; d < a.length; d++) b.call(c, a[d], d, a)
            },
            map: function(a, b, c) {
                if (a.map) return a.map(b, c);
                for (var d = [], e = 0; e < a.length; e++) d.push(b.call(c, a[e], e, a));
                return d
            },
            filter: function(a, b, c) {
                if (a.filter) return a.filter(b, c);
                for (var d = [], e = 0; e < a.length; e++) {
                    b.call(c, a[e], e, a) && d.push(a[e])
                }
                return d
            },
            forEachHash: function(a, b, c) {
                for (var d in a) a.hasOwnProperty(d) && b.call(c, d, a[d], a)
            },
            formatObject: function(a, b, c, d, e) {
                var f = "";
                for (var g in a)
                    if (a.hasOwnProperty(g)) {
                        f.length > 0 && (f += c);
                        var h = d ? d(g) : g,
                            i = e ? e(a[g]) : a[g];
                        f += h + b + i
                    }
                return f
            },
            extend: function(a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b];
                    for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d])
                }
                return a
            },
            makeRandomString: function() {
                return Math.floor(1e9 * Math.random()).toString(32)
            }
        }
    }), c("core/dom_util", ["dev/flags", "core/core_util"], function(b, c) {
        function d(a) {
            this.top = a.top, this.left = a.left, a.width ? (this.width = a.width, this.height = a.height, this.bottom = this.top + this.height, this.right = this.left + this.width) : (this.bottom = a.bottom, this.right = a.right, this.width = this.right - this.left, this.height = this.bottom - this.top)
        }

        function e(a) {
            return a.ownerDocument.defaultView || a.ownerDocument.parentWindow
        }

        function f(a, b) {
            function c(b) {
                if (!a(b)) return !1;
                for (var d = b.frames, e = 0; e < d.length; e++) {
                    var f = d[e];
                    try {
                        f.document.URL
                    } catch (a) {
                        continue
                    }
                    if (!c(f)) return !1
                }
                return !0
            }
            b = b || p, c(b)
        }

        function g(a) {
            return a.currentStyle || e(a).getComputedStyle(a, "")
        }

        function h(a) {
            var b = g(a);
            return b.overflow.indexOf("scroll") >= 0 || b.overflow.indexOf("hidden") >= 0
        }

        function i(a, b, c) {
            b = b || 0, c = c || 0;
            for (var f = 0, g = 0, h = a;;) {
                var i = e(h).frameElement;
                if (!i) break;
                var j = i.getBoundingClientRect();
                f += j.top, g += j.left, h = i
            }
            var k = a.getBoundingClientRect();
            return new d({
                top: Math.round(k.top + c + f),
                left: Math.round(k.left + b + g),
                bottom: Math.round(k.bottom + c + f),
                right: Math.round(k.right + b + g)
            })
        }

        function j(a) {
            var b = a.getBoundingClientRect();
            return new d({
                top: Math.round(b.top),
                left: Math.round(b.left),
                bottom: Math.round(b.bottom),
                right: Math.round(b.right)
            })
        }

        function k() {
            var a = p.innerWidth || q.documentElement.clientWidth,
                b = p.innerHeight || q.documentElement.clientHeight,
                c = 0,
                e = 0;
            return q.body && (c = q.body.scrollLeft || q.documentElement.scrollLeft, e = q.body.scrollTop || q.documentElement.scrollTop), new d({
                top: Math.round(e),
                left: Math.round(c),
                width: Math.round(a),
                height: Math.round(b)
            })
        }

        function l() {
            var a = 0,
                b = 0;
            return q.body && (b = q.body.scrollWidth || q.documentElement.scrollWidth, a = q.body.scrollHeight || q.documentElement.scrollHeight), {
                width: Math.round(b),
                height: Math.round(a)
            }
        }

        function m() {
            var a = p.innerWidth || q.documentElement.clientWidth,
                b = p.innerHeight || q.documentElement.clientHeight;
            return {
                width: Math.round(a),
                height: Math.round(b)
            }
        }

        function n(a) {
            a = a || p;
            var b = q.body.scrollLeft || q.documentElement.scrollLeft,
                c = q.body.scrollTop || q.documentElement.scrollTop;
            return {
                left: Math.round(b),
                top: Math.round(c)
            }
        }

        function o(a, b, c) {
            this.elem = a, this.zeroSizeViewableMode = c && c.zeroSizeViewableMode, this.trimmedRect = null, b && (this.trimmedRect = b)
        }
        var p = a.top,
            q = p.document;
        return d.prototype.toString = function() {
            return "Rect W:" + this.width + " H:" + this.height + " T:" + this.top + " L:" + this.left + " B:" + this.bottom + " R:" + this.right
        }, d.prototype.transfer = function(a, b) {
            this.left += a, this.right += a, this.top += b, this.bottom += b
        }, d.prototype.copy = function() {
            return new d(this)
        }, d.prototype.getOverlappedArea = function(a) {
            var b = Math.max(this.top, a.top),
                c = Math.min(this.bottom, a.bottom),
                e = Math.max(this.left, a.left),
                f = Math.min(this.right, a.right);
            return new d(c - b > 0 && f - e > 0 ? {
                top: b,
                bottom: c,
                left: e,
                right: f
            } : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            })
        }, o.prototype.calcLayoutPosition = function() {
            function a(a) {
                for (var c = a;;) {
                    if ((c = c.parentNode) === c.ownerDocument.body) break;
                    h(c) && (b.unshift(c), d += c.scrollTop, f += c.scrollLeft)
                }
            }
            var b = [],
                c = n(),
                d = c.top,
                f = c.left;
            a(this.elem);
            for (var g = e(this.elem); g != p;) {
                b.unshift(g.frameElement);
                var j = n(g);
                d += j.top, f += j.left, a(g.frameElement), g = g.parent
            }
            this.layoutPosition = i(this.elem, f, d), this.scrollParents = b
        }, o.prototype.getLayoutPosition = function(a) {
            return !a && this.layoutPosition || this.calcLayoutPosition(), this.layoutPosition
        }, o.prototype.getViewableRect = function(a) {
            this.scrollParents || this.calcLayoutPosition();
            var b = a || k(),
                e = c.map(this.scrollParents, function(a) {
                    return a
                });
            e.push(this.elem);
            for (var f = null, g = b, h = 0; h < e.length; h++) {
                if (f = i(e[h], b.left, b.top), this.zeroSizeViewableMode) {
                    var j = 0 === f.width ? 1 : f.width,
                        l = 0 === f.height ? 1 : f.height;
                    f = new d({
                        top: f.top,
                        left: f.left,
                        width: j,
                        height: l
                    })
                }
                if (g = g.getOverlappedArea(f), 0 === g.width || 0 === g.height) break
            }
            if (this.trimmedRect) {
                var m = this.trimmedRect.copy();
                return m.transfer(f.left, f.top), g.getOverlappedArea(m)
            }
            return g
        }, {
            Rect: d,
            traverseAllWindows: f,
            getElementRect: j,
            getViewedRect: k,
            getPageSize: l,
            getScreenSize: m,
            getScrollPos: n,
            ElementPosition: o
        }
    }), c("core/master", ["dev/flags"], function(a) {
        var b = function(a) {
            this.baseTime = a, this.incrementedKey = 0, this.data = {}
        };
        return b.prototype.getElapsedTime = function() {
            return (new Date).getTime() - this.baseTime
        }, b.prototype.getAutoIncrementedKey = function() {
            return ++this.incrementedKey
        }, b.prototype.set = function(a, b) {
            this.data[a] = b
        }, b.prototype.get = function(a) {
            return this.data[a]
        }, {
            Master: b
        }
    }), c("core/event", ["dev/flags", "core/core_util", "core/dom_util"], function(b, c, d) {
        function e(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        }

        function f(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }
        var g = a.top,
            h = function(a) {
                this.pollInterval = a, this.targets = [], this.timer = null, this.activeNums = 0
            };
        h.prototype.start = function() {
            var a = this;
            this.timer = g.setInterval(function() {
                a.poll()
            }, this.pollInterval)
        }, h.prototype.stop = function() {
            g.clearInterval(this.timer), this.timer = null
        }, h.prototype.poll = function() {
            var a = (new Date).getTime();
            c.forEach(this.targets, function(b) {
                b.active && a - b.lastFiredAt >= b.interval && (b.method.call(b.context, "Polling"), b.lastFiredAt = a, b.lazyMode && (b.lazyCounter++, b.lazyCounter > 30 && (b.interval = 1e3), b.lazyCounter > 60 && (b.interval = 3e3), b.lazyCounter > 100 && (b.interval = 1e4)))
            }, this)
        }, h.prototype.registerHandler = function(a, b, c, d) {
            var e = (new Date).getTime(),
                f = d ? 200 : a,
                g = {
                    active: !1,
                    interval: f,
                    context: b,
                    method: c,
                    lastFiredAt: e,
                    lazyMode: !!d,
                    lazyCounter: 0
                },
                h = this.targets.length;
            return this.targets.push(g), h
        }, h.prototype.activateHandler = function(a) {
            var b = this.targets[a];
            b.active = !0, 0 === this.activeNums && this.start(), this.activeNums++
        }, h.prototype.deactivateHandler = function(a) {
            var b = this.targets[a];
            b.active = !1, 0 === --this.activeNums && this.stop()
        };
        var i = function(a, b) {
            this.manager = a, this.context = b.context, this.method = b.method, this.name = b.name || this.method.name || "UNNAMED", this.events = b.events || [], this.polling = b.polling || -1, this.lazyPolling = b.lazyPolling, this.minInterval = b.minInterval || 0, this.lastFiredAt = 0, this.eventKeys = [], this.pollingKey = -1, this.registerHandlers()
        };
        i.prototype.registerHandlers = function() {
            c.forEach(this.events, function(a) {
                var b = this.manager.getEvent(a),
                    c = b.registerHandler(this, this.fire);
                this.eventKeys.push({
                    event: b,
                    key: c
                })
            }, this), (this.polling >= 0 || this.lazyPolling) && (this.pollingKey = this.manager.poller.registerHandler(this.polling, this, this.fire, this.lazyPolling)), this.activate()
        }, i.prototype.activate = function() {
            c.forEach(this.eventKeys, function(a) {
                a.event.activateHandler(a.key)
            }, this), this.pollingKey >= 0 && this.manager.poller.activateHandler(this.pollingKey)
        }, i.prototype.deactivate = function() {
            c.forEach(this.eventKeys, function(a) {
                a.event.deactivateHandler(a.key)
            }, this), this.pollingKey >= 0 && this.manager.poller.deactivateHandler(this.pollingKey)
        }, i.prototype.fire = function(a, b) {
            var c = (new Date).getTime(),
                d = !1;
            if (0 === this.minInterval || 0 === this.lastFiredAt ? d = !0 : c - this.lastFiredAt > this.minInterval && (d = !0), d) {
                var e = b || {};
                this.lastFiredAt = c;
                var f = c - this.manager.baseTime;
                this.method.call(this.context, f, a, e)
            }
        };
        var j = function(a) {
            this.baseTime = a, this.poller = new h(50), this.events = {}
        };
        j.prototype.newAction = function(a) {
            return new i(this, a)
        }, j.prototype.getEvent = function(a) {
            if (this.events[a]) return this.events[a];
            if (!o[a]) return null;
            var b = new o[a](this);
            return this.events[a] = b, b
        };
        var k = function() {
            this.eventName = "", this.handlers = [], this.activeNums = 0
        };
        k.prototype.registerHandler = function(a, b) {
            var c = {
                    active: !1,
                    context: a,
                    method: b
                },
                d = this.handlers.length;
            return this.handlers.push(c), d
        }, k.prototype.activateHandler = function(a) {
            var b = this.handlers[a];
            b.active = !0, 0 === this.activeNums && this.setup(), this.activeNums++
        }, k.prototype.deactivateHandler = function(a) {
            var b = this.handlers[a];
            b.active = !1, 0 === --this.activeNums && this.cleanup()
        }, k.prototype.setup = function() {}, k.prototype.fire = function(a) {
            c.forEach(this.handlers, function(b) {
                b.active && b.method.call(b.context, this.eventName, a)
            }, this)
        }, k.prototype.cleanup = function() {};
        var l = function() {
            k.apply(this, arguments), this.eventName = "onLoad"
        };
        c.inherit(l, k), l.prototype.setup = function() {
            var a = this;
            this.boundHandler = function(b) {
                a.fire({
                    nativeEvent: b
                })
            }, e(g, "load", this.boundHandler, !1)
        }, l.prototype.cleanup = function() {
            f(g, "load", this.boundHandler, !1)
        };
        var m = function() {
            k.apply(this, arguments), this.eventName = "pageLeave"
        };
        c.inherit(m, k), m.prototype.setup = function() {
            var a = this;
            this.nativeWrapper = function(b) {
                a.fire({
                    nativeEvent: b
                })
            }, e(g, "pagehide", this.nativeWrapper, !1)
        }, m.prototype.cleanup = function() {
            f(g, "pagehide", this.nativeWrapper, !1)
        };
        var n = function() {
            k.apply(this, arguments), this.eventName = "viewPosChange"
        };
        c.inherit(n, k), n.prototype.setup = function() {
            var a = this;
            this.nativeWrapper = function(b) {
                a.nativeHandler({
                    nativeEvent: b
                })
            }, e(g, "scroll", this.nativeWrapper, !1), e(g, "touchmove", this.nativeWrapper, !1)
        }, n.prototype.nativeHandler = function(a) {
            var b = d.getViewedRect();
            a.rect = b, this.lastViewedRect ? b.width !== this.lastViewedRect.width || b.height !== this.lastViewedRect.height ? (this.fire(a), this.lastViewedRect = b) : (Math.abs(b.top - this.lastViewedRect.top) >= this.changeThreshold || Math.abs(b.left - this.lastViewedRect.left) >= this.changeThreshold) && (this.fire(a), this.lastViewedRect = b) : (this.fire(a), this.lastViewedRect = b)
        }, n.prototype.changeThreshold = 50, n.prototype.cleanup = function() {
            f(g, "scroll", this.nativeWrapper, !1), f(g, "touchmove", this.nativeWrapper, !1)
        };
        var o = {
            onLoad: l,
            pageLeave: m,
            viewPosChange: n
        };
        return {
            EventManager: j,
            MetaEvent: k,
            MetaEventDefinition: o
        }
    }), c("core/beacon_sender", ["dev/flags", "core/core_util"], function(a, b) {
        var c = function(a) {
            if ("https:" === location.protocol) {
                if (!a.httpsUri) return;
                this.uri = a.httpsUri
            } else this.uri = a.uri;
            this.requestType = a.requestType, this.dryRun = !!a.dryRun
        };
        return c.prototype.MAX_LENGTH_FOR_EACH_REQUEST = 8e3, c.prototype.getQueryMaxLength = function() {
            return this.MAX_LENGTH_FOR_EACH_REQUEST - this.uri.length
        }, c.prototype.sendString = function(a) {
            this.doRequest(a)
        }, c.prototype.doRequest = function(c) {
            if (a.debug) {
                b.map(c.split("&"), function(a) {
                    var b = a.split("=");
                    return 1 === b.length ? decodeURIComponent(b[0]) : decodeURIComponent(b[0]) + ":" + decodeURIComponent(b[1])
                }).join(", ")
            }
            var d = this.getQueryMaxLength();
            if (c.length > d && (c = c.substring(0, d)), !this.dryRun) {
                var e = document.createElement("img"),
                    f = this.uri;
                c.length > 0 && (f += "?" + c + "&EOQ", e.src = f)
            }
        }, {
            BeaconSender: c
        }
    }), c("core/beacon_query", ["dev/flags", "core/core_util"], function(a, b) {
        function c(a) {
            return a instanceof e ? a : b.isString(a) || b.isNumber(a) ? new f(a.toString()) : null
        }
        var d = function(a) {
            this.dataDef = a, this.lastElapsedTime = -1, this.history = [], this.history.push([0, {}]), this.dataSize = 0, this.separatorNums = {
                sep1: 0,
                sep2: 0,
                sep3: 0,
                sep4: 0
            }
        };
        d.prototype.newItem = function(a, b) {
            this.lastElapsedTime = a;
            var c = {},
                d = 0;
            for (var e in b)
                if (b.hasOwnProperty(e)) {
                    var f = encodeURIComponent(b[e].toString());
                    this.hasDiff(e, f) && (c[e] = f, this.dataSize += e.length, this.dataSize += f.length, this.separatorNums.sep2++, ++d > 1 && this.separatorNums.sep3++)
                }
            d > 0 && (this.history.push([a, c]), this.dataSize += a.toString().length, this.separatorNums.sep1++, this.history.length > 2 && this.separatorNums.sep4++)
        }, d.prototype.hasDiff = function(a, b) {
            for (var c = this.history.length - 1; c >= 0; c--) {
                var d = this.history[c][1];
                if (d.hasOwnProperty(a)) return d[a] !== b.toString()
            }
            return !0
        }, d.prototype.calcDataSize = function(a) {
            var b = {
                sep1: encodeURIComponent(a.sep1).length,
                sep2: encodeURIComponent(a.sep2).length,
                sep3: encodeURIComponent(a.sep3).length,
                sep4: encodeURIComponent(a.sep4).length
            };
            return this.dataSize + this.separatorNums.sep1 * b.sep1 + this.separatorNums.sep2 * b.sep2 + this.separatorNums.sep3 * b.sep3 + this.separatorNums.sep4 * b.sep4
        }, d.prototype.shrink = function() {
            for (var a = {}, c = this.history.length, d = (function(b, c) {
                    b in a || (a[b] = c)
                }), e = c - 1; e >= 0; e--) {
                var f = this.history[e][1];
                b.forEachHash(f, d, this)
            }
            var g = this.history[c - 1][0];
            this.history = [], this.history.push([g, a]), this.dataSize = 0, this.separatorNums = {
                sep1: 0,
                sep2: 0,
                sep3: 0,
                sep4: 0
            }
        }, d.prototype.forEach = function(a, c) {
            if (!(this.history.length <= 1)) {
                var d = this.history.length,
                    e = {},
                    f = function(a, b) {
                        e[a] = b
                    };
                b.forEachHash(this.history[0][1], f);
                for (var g = 1; g < d; g++) {
                    var h = this.history[g][0],
                        i = this.history[g][1];
                    b.forEachHash(i, f), a.call(c, h, e)
                }
            }
        }, d.prototype.serialize = function(a) {
            var c = "";
            return b.forEach(this.history, function(d, e) {
                c.length > 0 && (c += encodeURIComponent(a.sep4)), e > 0 && (c += d[0], c += encodeURIComponent(a.sep1), c += b.formatObject(d[1], encodeURIComponent(a.sep2), encodeURIComponent(a.sep3)))
            }), c
        };
        var e = function() {
            this.dataSize = 0, this.parent = null
        };
        e.prototype.incrementSize = function(a) {
            this.dataSize += a, this.parent && this.parent.incrementSize(a)
        }, e.prototype.decrementSize = function(a) {
            this.dataSize -= a, this.parent && this.parent.decrementSize(a)
        }, e.prototype.getDataSize = function() {
            return this.dataSize
        }, e.prototype.exports = function() {};
        var f = function(a, b) {
            e.apply(this, arguments), this.value = b ? a : encodeURIComponent(a), this.incrementSize(this.value.length)
        };
        b.inherit(f, e), f.prototype.exports = function() {
            return this.value
        };
        var g = function(a) {
            e.apply(this, arguments), this.sep = encodeURIComponent(a), this.children = []
        };
        b.inherit(g, e), g.prototype.exports = function() {
            return b.map(this.children, function(a) {
                return a.exports()
            }, this).join(this.sep)
        }, g.prototype.push = function(a) {
            var b = c(a);
            this.children.length > 0 && this.incrementSize(this.sep.length), this.incrementSize(b.dataSize), this.children.push(b), b.parent = this
        }, g.prototype.clear = function(a) {
            this.children = [], this.dataSize = 0
        };
        var h = function(a, b) {
            e.apply(this, arguments), this.keySep = encodeURIComponent(a), this.valSep = encodeURIComponent(b), this.hash = {}, this.keyNums = 0
        };
        b.inherit(h, e), h.prototype.exports = function() {
            var a = "";
            return b.forEachHash(this.hash, function(b, c) {
                a.length > 0 && (a += this.valSep), a += b + this.keySep + c.exports()
            }, this), a
        }, h.prototype.update = function(a, b) {
            var d = c(b),
                e = encodeURIComponent(a);
            this.hash[e] && this.remove(a), this.keyNums++, this.keyNums > 1 && this.incrementSize(this.valSep.length), this.incrementSize(e.length), this.incrementSize(this.keySep.length), this.incrementSize(d.dataSize), this.hash[e] = d, d.parent = this
        }, h.prototype.remove = function(a) {
            var b = encodeURIComponent(a),
                c = this.hash[b];
            c && (this.decrementSize(b.length), this.decrementSize(this.keySep.length), this.decrementSize(c.dataSize), this.keyNums -= 1, 0 !== this.keyNums && this.decrementSize(this.valSep.length), delete this.hash[b])
        }, h.prototype.get = function(a) {
            return this.hash[encodeURIComponent(a)]
        };
        var i = function(a, c) {
            this.options = c || {}, this.definition = {}, this.exportOrder = [], this.staticValueNums = 0, this.staticValueSize = 0, b.forEach(a, function(a) {
                a._encodedKey = encodeURIComponent(a.key), "static" === a.type && (a._encodedValue = encodeURIComponent(a.value), this.staticValueSize += a._encodedKey.length, this.staticValueSize += 1, this.staticValueSize += a._encodedValue.length, this.staticValueNums > 0 && (this.staticValueSize += 1), this.staticValueNums++), this.definition[a.name] = a, this.exportOrder.push(a.name)
            }, this)
        };
        i.prototype.getInstance = function() {
            return new j(this)
        }, i.prototype.isDefinedVar = function(a) {
            return this.definition[a] && "var" === this.definition[a].type
        }, i.prototype.getStaticValueSize = function() {
            return this.staticValueSize
        }, i.prototype.setLazyStaticValue = function(a, b) {
            var c = this.definition[a];
            c._encodedValue && (this.staticValueSize -= c._encodedKey.length, this.staticValueSize -= 1, this.staticValueSize -= c._encodedValue.length, c._encodedValue = null, this.staticValueNums -= 1, 0 !== this.staticValueNums && (this.staticValueSize -= 1)), b && (c._encodedValue = encodeURIComponent(b), this.staticValueSize += c._encodedKey.length, this.staticValueSize += 1, this.staticValueSize += c._encodedValue.length, this.staticValueNums > 0 && (this.staticValueSize += 1), this.staticValueNums++)
        };
        var j = function(a) {
            this.template = a, this.vars = {}
        };
        return j.prototype.bind = function(a, b, d) {
            var e;
            e = d ? new f(b, !0) : c(b), this.template.isDefinedVar(a) && (this.vars[a] = e)
        }, j.prototype.exports = function() {
            var a = "";
            return b.forEach(this.template.exportOrder, function(c) {
                var d = this.template.definition[c];
                "static" === d.type && (a.length > 0 && (a += "&"), a += d._encodedKey + "=" + d._encodedValue), "lazy-static" === d.type ? d._encodedValue && (a.length > 0 && (a += "&"), a += d._encodedKey + "=" + d._encodedValue) : "random" === d.type ? (a.length > 0 && (a += "&"), a += d._encodedKey + "=" + b.makeRandomString()) : "var" === d.type && this.vars[c] && (a.length > 0 && (a += "&"), a += d._encodedKey + "=" + this.vars[c].exports())
            }, this), a
        }, {
            HistoricalData: d,
            StringBeaconData: f,
            ArrayBeaconData: g,
            HashBeaconData: h,
            BeaconQueryTemplate: i,
            BeaconQuery: j
        }
    }), c("core/core", ["dev/flags", "core/core_util", "core/dom_util", "core/master", "core/event", "core/beacon_sender", "core/beacon_query"], function(a, b, c, d, e, f, g) {
        var h = new d.Master((new Date).getTime()),
            i = new e.EventManager(h.baseTime);
        return h.set("eventManager", i), {
            CoreUtil: b,
            DOMUtil: c,
            Event: e,
            BeaconSender: f,
            BeaconQuery: g,
            getMaster: function() {
                return h
            }
        }
    }), c("detector/detector", ["dev/flags", "core/core"], function(a, b) {
        var c = b.CoreUtil,
            d = function() {
                this.serialNumber = b.getMaster().getAutoIncrementedKey(), this.registerAllActions()
            };
        return d.prototype.actions = {}, d.prototype.registerAllActions = function() {
            c.forEachHash(this.actions, function(a, b) {
                var c = this.registerAction(a, b);
                this.actions[a]._registered = c
            }, this)
        }, d.prototype.deactivateAllActions = function() {
            c.forEachHash(this.actions, function(a, b) {
                b._registered.deactivate()
            }, this)
        }, d.prototype.registerAction = function(a, c) {
            var d = {
                    context: this,
                    method: this[a],
                    name: a,
                    events: c.events,
                    polling: c.polling,
                    lazyPolling: c.lazyPolling,
                    minInterval: c.minInterval
                },
                e = b.getMaster().get("eventManager");
            return e.newAction(d)
        }, d.prototype.isCollectedElem = function(a) {
            if (a.__uadfCollectedBy)
                for (var b = a.__uadfCollectedBy, c = 0; c < b.length; c++)
                    if (b[c] === this.serialNumber) return !0;
            return !1
        }, d.prototype.setAsCollected = function(a) {
            a.__uadfCollectedBy || (a.__uadfCollectedBy = []), a.__uadfCollectedBy.push(this.serialNumber)
        }, {
            Detector: d
        }
    }), c("detector/simple_viewable_detector", ["dev/flags", "core/core", "detector/detector"], function(a, b, c) {
        var d = b.CoreUtil,
            e = b.DOMUtil,
            f = b.BeaconSender,
            g = b.BeaconQuery,
            h = g.BeaconQueryTemplate,
            i = g.ArrayBeaconData,
            j = c.Detector,
            k = function() {
                this.data = new i(this.separator)
            };
        k.prototype.separator = "!", k.prototype.push = function(a) {
            this.data.push(a)
        };
        var l = function(a, b) {
            this.rawElement = a, this.trimmedRect = b && b.trimmedRect ? b.trimmedRect : null, this.zeroSizeViewableMode = b && b.zeroSizeViewableMode;
            var c = {
                zeroSizeViewableMode: this.zeroSizeViewableMode
            };
            this.position = new e.ElementPosition(this.rawElement, this.trimmedRect, c), this.layoutPosition = this.position.getLayoutPosition(), this.lastViewedIn = !1, this.lastViewedStart = 0, this.currentViewedTime = 0, this.viewedEnoughTime = !1, this.notifiedOnce = !1, this.viewInTimes = [], this.viewOutTimes = [], this.options = b
        };
        l.prototype.VIEWED_TIME_CONDITION = 1e3, l.prototype.VIEWED_AREA_CONDITION = .5, l.prototype.isBeaconedTarget = function() {
            return this.viewedEnoughTime && !this.notifiedOnce
        }, l.prototype.setAsNotified = function() {
            this.notifiedOnce = !0
        }, l.prototype.calcViewableArea = function(a, b) {
            var c = this.position.getViewableRect(),
                d = c.width * c.height;
            if (0 === d) return 0;
            var f = this.trimmedRect ? this.trimmedRect : e.getElementRect(this.rawElement);
            if (this.zeroSizeViewableMode) {
                var g = 0 === f.width ? 1 : f.width,
                    h = 0 === f.height ? 1 : f.height;
                f = new e.Rect({
                    top: f.top,
                    left: f.left,
                    width: g,
                    height: h
                })
            }
            var i = f.width * f.height,
                j = a.width * a.height;
            return 0 === i || 0 === j ? 0 : d / Math.min(i, j)
        }, l.prototype.check = function(a, b, c) {
            var d = this.calcViewableArea(b, c),
                e = d >= this.VIEWED_AREA_CONDITION;
            this.lastViewedIn && e ? this.handleViewContinue(a) : this.lastViewedIn && !e ? this.handleViewOut(a) : !this.lastViewedIn && e && this.handleViewIn(a)
        }, l.prototype.handleViewIn = function(a) {
            this.lastViewedIn = !0, this.lastViewedStart = a, this.currentViewedTime = 0, this.viewInTimes.push(this.lastViewedStart)
        }, l.prototype.handleViewContinue = function(a) {
            this.currentViewedTime = b.getMaster().getElapsedTime() - this.lastViewedStart, this.currentViewedTime >= this.VIEWED_TIME_CONDITION && (this.viewedEnoughTime = !0)
        }, l.prototype.handleViewOut = function(a) {
            this.currentViewedTime = a - this.lastViewedStart, this.currentViewedTime >= this.VIEWED_TIME_CONDITION && (this.viewedEnoughTime = !0), this.viewOutTimes.push(a), this.lastViewedIn = !1, this.lastViewedStart = 0, this.currentViewedTime = 0
        };
        var m = function() {
            j.apply(this, arguments), this.targets = [], this.beaconSender = new this.BeaconSenderConstructor(this.beaconConfig), this.viewedQueryTmpl = new this.BeaconQueryTemplateConstructor(this.viewedQueryTmplDef)
        };
        return d.inherit(m, j), m.prototype.BeaconSenderConstructor = f.BeaconSender, m.prototype.BeaconQueryTemplateConstructor = h, m.prototype.BeaconDataListConstructor = k, m.prototype.ViewableTargetConstructor = l, m.prototype.actions = {
            collectTargets: {
                events: ["onLoad"],
                polling: 5e3
            },
            checkViewableState: {
                events: ["onLoad", "viewPosChange"],
                polling: 300,
                minInterval: 300
            },
            viewedBeacon: {
                events: ["pageLeave"],
                lazyPolling: !0
            }
        }, m.prototype.collectTargetElements = function() {
            return []
        }, m.prototype.collectTargets = function(a, b, c) {
            var e = this.collectTargetElements();
            e && d.forEach(e, function(a) {
                this.registerTarget(a)
            }, this)
        }, m.prototype.registerTarget = function(a, b) {
            if (!this.isCollectedElem(a) || b && b.canDuplicate) {
                var c = new this.ViewableTargetConstructor(a, b);
                return this.targets.push(c), this.setAsCollected(a), c
            }
            return null
        }, m.prototype.checkViewableState = function(a, b, c) {
            var f = c.rect ? c.rect : e.getViewedRect();
            d.forEach(this.targets, function(b) {
                b.check(a, f)
            }, this), this.checkViewableState_InstantMode && this.viewedBeacon(a, b, c)
        }, m.prototype.checkViewableStateStart = function(a, b, c) {
            if (this.checkViewableStateInProgress) return !0;
            this.checkViewableStateIndex = 0, this.checkViewableStateInProgress = !0, this.checkViewableStateStep(a, b, c)
        }, m.prototype.checkViewableStateStep = function(a, b, c) {
            if (this.checkViewableStateInProgress) {
                for (var d = c.rect ? c.rect : e.getViewedRect(), f = this.checkViewableStateIndex + this.checkViewableStateStepSize, g = !1; this.checkViewableStateIndex < f;) {
                    var h = this.targets[this.checkViewableStateIndex];
                    if (!h) {
                        g = !0;
                        break
                    }
                    h.check(a, d), this.checkViewableStateIndex++
                }
                g && (this.checkViewableStateIndex = 0, this.checkViewableStateInProgress = !1), this.checkViewableState_InstantMode && this.viewedBeacon(a, b, c)
            }
        }, m.prototype.checkViewableStateStepSize = 200, m.prototype.checkViewableState_InstantMode = !1, m.prototype.getBeaconDataForTarget = function(a) {
            return this.getBeaconDataForTargetElement(a.rawElement)
        }, m.prototype.getBeaconDataForTargetElement = function(a) {
            return ""
        }, m.prototype.viewedBeacon = function(a, b, c) {
            var e = d.filter(this.targets, function(a) {
                    return a.isBeaconedTarget()
                }, this),
                f = d.map(e, function(a) {
                    return a.setAsNotified(), this.getBeaconDataForTarget(a)
                }, this);
            if (f.length > 0) {
                var g = new this.BeaconDataListConstructor;
                d.forEach(f, function(a) {
                    g.push(a)
                }, this);
                var h = this.viewedQueryTmpl.getInstance();
                h.bind(this.viewedBeaconDataKey, g.data), this.viewedBeaconModifyQuery(a, b, c, h), this.beaconSender.sendString(h.exports())
            }
        }, m.prototype.viewedBeaconModifyQuery = function(a, b, c, d) {}, m.prototype.viewedBeaconDataKey = "viewed", m.prototype.beaconConfig = {
            uri: "http://" + location.host + "/beacon.gif",
            httpsUri: "https://s." + location.host + "/beacon.gif",
            requestType: "image"
        }, m.prototype.viewedQueryTmplDef = [{
            name: "viewed",
            type: "var",
            key: "viewed"
        }], {
            SimpleBeaconDataList: k,
            SimpleViewableTarget: l,
            SimpleViewableDetector: m
        }
    }), c("detector/deep_viewable_detector", ["dev/flags", "core/core", "detector/simple_viewable_detector"], function(a, b, c) {
        var d = b.CoreUtil,
            e = b.DOMUtil,
            f = b.BeaconQuery,
            g = (f.BeaconQueryTemplate, f.StringBeaconData, f.ArrayBeaconData),
            h = f.HashBeaconData,
            i = f.HistoricalData,
            j = c.SimpleViewableDetector,
            k = c.SimpleViewableTarget,
            l = function() {
                this.data = new h(this.separators.rootKeySep, this.separators.rootValSep), this.hasDiff = !1
            };
        l.prototype.separators = {
            rootKeySep: ":",
            rootValSep: ",",
            inOutsSep: ""
        }, l.prototype.keyNameMap = {
            id: "r",
            width: "w",
            height: "h",
            posX: "px",
            posY: "py",
            inOuts: "io"
        }, l.prototype.updateStringValue = function(a, b) {
            var c = !1,
                d = this.data.get(this.keyNameMap[a]),
                e = this.formatter[a] ? this.formatter[a].apply(this, b) : b[0];
            d ? e !== d.value && (c = !0) : c = !0, c && (this.data.update(this.keyNameMap[a], e), this.hasDiff = !0)
        }, l.prototype.updateId = function(a) {
            this.data.update(this.keyNameMap.id, a)
        }, l.prototype.updateWidth = function(a) {
            this.updateStringValue("width", [a])
        }, l.prototype.updateHeight = function(a) {
            this.updateStringValue("height", [a])
        }, l.prototype.updatePosX = function(a) {
            this.updateStringValue("posX", [a])
        }, l.prototype.updatePosY = function(a) {
            this.updateStringValue("posY", [a])
        }, l.prototype.formatter = {}, l.prototype.getInOutsArray = function() {
            var a = this.data.get(this.keyNameMap.inOuts);
            return a || (a = new g(this.separators.inOutsSep), this.data.update(this.keyNameMap.inOuts, a)), a
        }, l.prototype.pushInOuts = function(a, b) {
            var c = this.getInOutsArray();
            "in" === a ? (c.push("i" + b), this.hasDiff = !0) : "out" === a && (c.push("o" + b), this.hasDiff = !0)
        }, l.prototype.clearAfterSent = function() {
            this.data.remove(this.keyNameMap.width), this.data.remove(this.keyNameMap.height), this.data.remove(this.keyNameMap.posX), this.data.remove(this.keyNameMap.posY), this.data.remove(this.keyNameMap.inOuts), this.hasDiff = !1
        }, l.prototype.getDataSize = function() {
            return this.data.getDataSize()
        };
        var m = function(a, b) {
            k.apply(this, arguments), this.beaconData = new this.BeaconDataConstructor, this.beaconData.updateId(this.getId()), this.beaconData.updateWidth(this.layoutPosition.width), this.beaconData.updateHeight(this.layoutPosition.height), this.beaconData.updatePosX(this.layoutPosition.left), this.beaconData.updatePosY(this.layoutPosition.top)
        };
        d.inherit(m, k), m.prototype.BeaconDataConstructor = l, m.prototype.getId = function() {
            return Math.floor(1e3 * Math.random()).toString()
        }, m.prototype.getGroupingId = function() {
            return "g"
        }, m.prototype.handleViewIn = function(a) {
            m.super_.prototype.handleViewIn.apply(this, arguments), this.beaconData.pushInOuts("in", this.viewInTimes[this.viewInTimes.length - 1])
        }, m.prototype.handleViewOut = function(a) {
            m.super_.prototype.handleViewOut.apply(this, arguments), this.beaconData.pushInOuts("out", this.viewOutTimes[this.viewOutTimes.length - 1])
        };
        var n = function() {
            this.data = new h(this.separators.rootKeySep, this.separators.rootValSep)
        };
        n.prototype.separators = {
            rootKeySep: "_",
            rootValSep: "!,",
            arraySep: "|"
        }, n.prototype.addItem = function(a, b) {
            var c = this.data.get(a);
            c || (c = new g(this.separators.arraySep), this.data.update(a, c)), c.push(b)
        }, n.prototype.exports = function() {
            return this.data.exports()
        };
        var o = function() {
            j.apply(this, arguments), this.stateQueryTmpl = new this.BeaconQueryTemplateConstructor(this.stateQueryTmplDef), this.pageState = new i(this.convertPageStateKey()), this.updatePageState(b.getMaster().getElapsedTime())
        };
        return d.inherit(o, j), o.prototype.ViewableTargetConstructor = m, o.prototype.TargetDataSetConstructor = n, j.prototype.actions ? o.prototype.actions = d.extend({}, j.prototype.actions) : o.prototype.actions = {}, o.prototype.actions.updatePageState = {
            events: ["viewPosChange"]
        }, o.prototype.actions.stateBeaconThresholdMode = {
            polling: 2e3
        }, o.prototype.actions.stateBeaconForceMode = {
            events: ["pageLeave"],
            polling: 2e4
        }, a.debug && (o.prototype.actions.dumpStateData = {
            polling: 1e4
        }), o.prototype.scrollMainElement = null, o.prototype.getCurrentPageState = function(a, b, c) {
            var d, e;
            return this.scrollMainElement ? (d = this.scrollMainElement.scrollLeft, e = this.scrollMainElement.scrollTop) : (d = b.left, e = b.top), {
                screenWidth: b.width,
                screenHeight: b.height,
                scrollX: d,
                scrollY: e,
                pageWidth: c.width,
                pageHeight: c.height
            }
        }, o.prototype.updatePageState = function(a, b, c) {
            var d = c && c.rect ? c.rect : e.getViewedRect(),
                f = e.getPageSize(),
                g = this.getCurrentPageState(a, d, f);
            this.pageState.newItem(a, this.convertPageStateKey(g))
        }, o.prototype.convertPageStateKey = function(a) {
            var b = {};
            return d.forEachHash(a, function(a, c) {
                b[this.pageStateKey[a]] = c
            }, this), b
        }, o.prototype.pageStateKey = {
            screenWidth: "bw",
            screenHeight: "bh",
            pageWidth: "pw",
            pageHeight: "ph",
            scrollX: "sx",
            scrollY: "sy"
        }, o.prototype.pageStateSeparators = {
            sep1: ":",
            sep2: "",
            sep3: ",",
            sep4: ";"
        }, o.prototype.stateBeacon = function(a, b, c, e) {
            var f = [],
                g = 0;
            d.forEach(this.targets, function(a) {
                var b = a.beaconData;
                b.hasDiff && (g += b.getDataSize(), f.push(a))
            }, this);
            var h = this.pageState.calcDataSize(this.pageStateSeparators);
            g += h;
            var i = e;
            if (e || (a <= this.stateBeaconEarlyTimeThreshold && g > 0 ? i = !0 : g > this.stateBeaconDataSizeThreshold && (i = !0)), i) {
                var j = this.stateQueryTmpl.getInstance();
                if (f.length > 0) {
                    var k = new this.TargetDataSetConstructor;
                    d.forEach(f, function(a) {
                        var b = a.beaconData,
                            c = a.getGroupingId();
                        k.addItem(c, b.data)
                    }, this), j.bind(this.stateBeaconDataKey, k.data)
                }
                h > 0 && (j.bind(this.stateBeaconPageDataKey, this.pageState.serialize(this.pageStateSeparators), !0), this.pageState.shrink()), this.stateBeaconModifyQuery(a, b, c, j), this.beaconSender.sendString(j.exports()), d.forEach(f, function(a) {
                    a.beaconData.clearAfterSent()
                }, this)
            }
        }, o.prototype.stateBeaconForceMode = function(a, b, c) {
            this.stateBeacon(a, b, c, !0)
        }, o.prototype.stateBeaconThresholdMode = function(a, b, c) {
            this.stateBeacon(a, b, c, !1)
        }, o.prototype.stateBeaconModifyQuery = function(a, b, c, d) {}, o.prototype.stateBeaconDataKey = "state", o.prototype.stateBeaconPageDataKey = "pageState", o.prototype.stateBeaconDataSizeThreshold = 500, o.prototype.stateBeaconEarlyTimeThreshold = 1e4, o.prototype.stateQueryTmplDef = [{
            name: "state",
            type: "var",
            key: "state"
        }, {
            name: "pageState",
            type: "var",
            key: "pageState"
        }], o.prototype.dumpStateData = function(a, b, c) {
            var e = {};
            d.forEach(this.targets, function(a) {
                var b = a.beaconData;
                if (b.hasDiff) {
                    var c = a.getGroupingId();
                    e[c] || (e[c] = []), e[c].push(b.data)
                }
            }, this);
            var f = "AD:" + d.formatObject(e, "$", "!", null, function(a) {
                return d.map(a, function(a) {
                    return decodeURIComponent(a.exports())
                }).join("|")
            });
            f += "PD:" + decodeURIComponent(this.pageState.serialize(this.pageStateSeparators))
        }, {
            DeepViewableDetector: o,
            DeepViewableTarget: m,
            DeepTargetData: l,
            DeepTargetDataSet: n
        }
    }), c("main", ["dev/flags", "core/core", "detector/simple_viewable_detector", "detector/deep_viewable_detector"], function(a, b, c, d) {
        return {
            flags: a,
            CoreUtil: b.CoreUtil,
            DOMUtil: b.DOMUtil,
            Event: b.Event,
            BeaconSender: b.BeaconSender,
            BeaconQuery: b.BeaconQuery,
            getMaster: b.getMaster,
            SimpleViewableDetector: c,
            DeepViewableDetector: d
        }
    }), h._registerComponent("main", "UADF", j)
}(this),
function(a, b) {
    "use strict";
    var c;
    try {
        c = a.top.YJ_UADF
    } catch (a) {
        return
    }
    var d = c.initComponent("UADF", "0.16.1");
    d && function() {
        function b() {
            return d.getMaster().baseTime
        }

        function e() {
            return d.getMaster().getElapsedTime()
        }

        function f(a) {
            var b = a.toString();
            return b.substring(0, b.length - 3) + "." + b.substring(b.length - 3)
        }
        var g = d.flags,
            h = d.CoreUtil,
            i = d.DOMUtil,
            j = d.BeaconQuery.HistoricalData,
            k = d.DeepViewableDetector.DeepViewableDetector,
            l = d.SimpleViewableDetector.SimpleViewableTarget,
            m = a.top,
            n = m.document,
            o = function(a) {
                var b = a.getAttribute("data-ylk");
                if (!b) throw "YLKData: the 'data-ylk' attribute is not found";
                var c = a.getAttribute("data-rapid_p");
                if (!c) throw "YLKData: the 'data-rapid_p' attribute is not found";
                this.data = {}, h.forEach(b.split(";"), function(a) {
                    var b = a.split(":");
                    if (2 === b.length && "" !== b[0]) {
                        var c = b[0],
                            d = b[1];
                        this.data[c] = d
                    }
                }, this), c && (this.data._p = c)
            };
        o.prototype.getULTKey = function() {
            var a = "rsec:" + this.data.rsec + ";slk:" + this.data.slk + ";pos:" + this.data.pos;
            return this.data._p && (a += ";_p:" + this.data._p), a
        };
        var p = function(a, b) {
            this.id = a, this.element = b, this.lastWidth = 0, this.lastHeight = 0, this.lastChildNums = 0;
            var c = this;
            this.mutated = !1, b.addEventListener("DOMNodeInserted", function() {
                c.mutated = !0
            }, !1), this.updateState()
        };
        p.prototype.updateState = function() {
            if (this.mutated) return this.mutated = !1, !0;
            var a = !1,
                b = i.getElementRect(this.element),
                c = b.width;
            this.lastWidth !== c && (this.lastWidth = c, a = !0);
            var d = b.height;
            this.lastHeight !== d && (this.lastHeight = d, a = !0);
            var e = this.element.childNodes.length;
            return this.lastChildNums !== e && (this.lastChildNums = e, a = !0), a
        };
        var q = function(a, b) {
            l.apply(this, arguments), this.viewInOuts = new j(["state"]), this.ylk = null, this.containerId = null, this.stateChangeCallback = null, this.stateChangeCallbackContext = null, this.instantBeaconFlag = b.instantBeaconFlag, this.instantBeaconFlag && (this.VIEWED_TIME_CONDITION = b.viewContinueTime)
        };
        h.inherit(q, l), q.prototype.setYLKData = function(a) {
            this.ylk = a
        }, q.prototype.getShortULTKey = function() {
            return this.containerId + ":" + this.ylk.data._p
        }, q.prototype.setStateChangeCallback = function(a, b) {
            this.stateChangeCallback = a, this.stateChangeCallbackContext = b
        }, q.prototype.handleViewIn = function(a) {
            q.super_.prototype.handleViewIn.apply(this, arguments), this.viewInOuts.newItem(a, {
                state: "in"
            }), this.stateChangeCallback && this.stateChangeCallback.call(this.stateChangeCallbackContext, this)
        }, q.prototype.handleViewContinue = function(a) {
            var b = !!this.viewedEnoughTime;
            q.super_.prototype.handleViewContinue.apply(this, arguments);
            var c = !!this.viewedEnoughTime;
            this.instantBeaconFlag && !b && c && (this.viewInOuts.newItem(a, {
                state: "continue"
            }), this.stateChangeCallback && this.stateChangeCallback.call(this.stateChangeCallbackContext, this))
        }, q.prototype.handleViewOut = function(a) {
            q.super_.prototype.handleViewOut.apply(this, arguments), this.viewInOuts.newItem(a, {
                state: "out"
            }), this.stateChangeCallback && this.stateChangeCallback.call(this.stateChangeCallbackContext, this)
        };
        var r = function(b) {
            if (!m.ULTPageParameter) throw "ULTPageParameter must be defined";
            if (!m.RappieStreamOptions) throw "RappieStreamOptions must be defined";
            if (!m.RappieStreamOptions.spaceid) throw "RappieStreamOptions.spaceid must be defined";
            if (!a.YAHOO || !YAHOO.i13n || !YAHOO.i13n.Rapid) throw "Rapid must be loaded";
            b.beacon && (YAHOO.i13n.beacon_server = b.beacon), k.apply(this, arguments), this.changedModules = [], this.lastEventBeaconSent = 0, this.pingBeaconIntervalSec = 20, this.lastSentScreenSize = {
                width: 0,
                height: 0
            }, this.clickEventQueue = [], this.pageParams = m.ULTPageParameter || {}, this.modifyPageParameter(), this.rappieStreamOptions = m.RappieStreamOptions, this.setupObservation();
            var c = {
                    spaceid: this.rappieStreamOptions.spaceid,
                    yql_host: b.yql,
                    apv: !1
                },
                d = m.RappieStreamOptions.webWorkerFile;
            if (d && d.length > 0 ? c.webworker_file = d : c.compr_on = !1, this.rappieStreamOptions.scrollMain) {
                var e = n.getElementById(this.rappieStreamOptions.scrollMain);
                e && (this.scrollMainElement = e)
            }
            this.rappieStreamOptions.rapidConfig && (c = this.overrideRapidConfig(c, this.rappieStreamOptions.rapidConfig)), this.initRapid(c)
        };
        h.inherit(r, k), r.prototype.ViewableTargetConstructor = q, r.prototype.actions = {
            observeContainers: {
                polling: 200
            },
            updatePageState: {
                events: ["viewPosChange"],
                minInterval: 100
            },
            screenPosBeacon: {
                events: ["pageLeave"],
                polling: 5e3
            },
            moduleStateBeacon: {
                events: ["pageLeave"],
                polling: 5e3
            },
            pageViewStateBeacon: {
                events: ["pageLeave"],
                polling: 2e3
            },
            checkViewableStateStart: {
                events: ["onLoad", "viewPosChange"],
                polling: 1e3,
                minInterval: 100
            },
            checkViewableStateStep: {
                polling: 50
            },
            procClickEventQueue: {
                polling: 1e3
            }
        }, -1 != navigator.userAgent.toLowerCase().indexOf("android") && delete r.prototype.actions.pageViewStateBeacon, g.debug && (r.prototype.actions.debugViewable = {
            polling: 2e3
        }), r.prototype.modifyPageParameter = function() {
            this.pageParams._rpv = "1.9.0"
        }, r.prototype.overrideRapidConfig = function(a, b) {
            return b.perf_navigationtime && (a.perf_navigationtime = b.perf_navigationtime), b.sample && (a.sample = {}, (b.sample.perf_navigationtime || 0 === b.sample.perf_navigationtime) && (a.sample.perf_navigationtime = b.sample.perf_navigationtime)), a
        }, r.prototype.initRapid = function(a) {
            a.keys = this.pageParams;
            var b = [];
            this.rappieStreamOptions.mods && h.forEach(this.rappieStreamOptions.mods, function(a) {
                b.push(a)
            }, this), this.rappieStreamOptions.varMods && h.forEach(this.rappieStreamOptions.varMods, function(a) {
                b.push(a)
            }, this), b.length, this.rapid = new YAHOO.i13n.Rapid(a), this.rapid.addModules(b), h.forEach(b, function(a) {
                var b = document.getElementById(a);
                b && this.collectTargets(a, b)
            }, this)
        }, r.prototype.setupObservation = function() {
            this.rappieStreamOptions.varMods && (this.observingContainers = [], h.forEach(this.rappieStreamOptions.varMods, function(a) {
                this.setupVarMod(a)
            }, this))
        }, r.prototype.setupVarMod = function(a) {
            var b = document.getElementById(a);
            if (b) {
                var c = new p(a, b);
                this.observingContainers.push(c)
            }
        }, r.prototype.observeContainers = function(a, b, c) {
            h.forEach(this.observingContainers, function(a) {
                a.updateState() && (this.rapid.refreshModule(a.id), this.collectTargets(a.id, a.element))
            }, this)
        }, r.prototype.collectTargets = function(a, b) {
            h.forEach(b.querySelectorAll("a[data-ylk],input[data-ylk],button[data-ylk]"), function(b) {
                if (!b.__rappieData && !this.isCollectedElem(b)) {
                    var c;
                    try {
                        c = new o(b)
                    } catch (a) {
                        return
                    }
                    var d = parseInt(c.data._vimp, 10),
                        e = (1 & d) > 0,
                        f = (2 & d) > 0,
                        g = parseInt(c.data._vctime, 10),
                        h = this.VCTIME_DEFAULT;
                    isNaN(g) || (h = g);
                    var i = {
                            instantBeaconFlag: e,
                            zeroSizeViewableMode: f,
                            viewContinueTime: h
                        },
                        j = this.registerTarget(b, i);
                    j && (j.setYLKData(c), j.containerId = a, b.__rappieData = j, j.setStateChangeCallback(this.handleModuleStateChange, this))
                }
            }, this)
        }, r.prototype.sendRapidEventBeacon = function(a, b, c) {
            this.rapid.beaconEvent(b, c), this.lastEventBeaconSent = a
        }, r.prototype.screenPosBeacon = function(a, c, d) {
            var e = "",
                g = 0,
                h = 0,
                i = b();
            this.pageState.forEach(function(b, d) {
                var k = d[this.pageStateKey.scrollX] || 0,
                    l = d[this.pageStateKey.scrollY] || 0;
                g = d[this.pageStateKey.screenWidth] || 0, h = d[this.pageStateKey.screenHeight] || 0;
                var m = f(b + i),
                    n = g > h ? "1" : "0",
                    o = "#" + m + "@" + k + ":" + l + "~" + n;
                if (e.length + o.length >= 300) {
                    var p = {
                        scrnpos: e
                    };
                    j && (p._sr = j), "pageLeave" === c && (p._lev = "1"), this.rappieStreamOptions.scrollMain && (p.scrlele = this.rappieStreamOptions.scrollMain), this.sendRapidEventBeacon(a, "scrnpos", p), e = o
                } else e += o
            }, this);
            var j = null;
            if ((0 !== h && h !== this.lastSentScreenSize.height || 0 !== g && g !== this.lastSentScreenSize.width) && (j = g + "x" + h, this.lastSentScreenSize.width = g, this.lastSentScreenSize.height = h), e.length > 0) {
                var k = {
                    scrnpos: e
                };
                j && (k._sr = j), "pageLeave" === c && (k._lev = "1"), this.rappieStreamOptions.scrollMain && (k.scrlele = this.rappieStreamOptions.scrollMain), this.sendRapidEventBeacon(a, "scrnpos", k), this.pageState.shrink()
            }
        }, r.prototype.handleModuleStateChange = function(a) {
            this.changedModules.push(a), a.instantBeaconFlag && (this.instantModuleBeaconScheduled = !0)
        }, r.prototype.checkViewableStateStep = function(a, b, c) {
            if (this.instantModuleBeaconScheduled = !1, this.checkViewableStateInProgress) {
                for (var d = c.rect ? c.rect : i.getViewedRect(), e = this.checkViewableStateIndex + 100, f = !1; this.checkViewableStateIndex < e;) {
                    var g = this.targets[this.checkViewableStateIndex];
                    if (!g) {
                        f = !0;
                        break
                    }
                    g.check(a, d), this.checkViewableStateIndex++
                }
                f && (this.checkViewableStateIndex = 0, this.checkViewableStateInProgress = !1), this.checkViewableState_InstantMode && this.viewedBeacon(a, b, c), this.instantModuleBeaconScheduled && this.moduleStateBeacon(a, b, c)
            }
        }, r.prototype.moduleStateBeacon = function(a, c, d) {
            if (0 !== this.changedModules.length) {
                var e = "pageLeave" === c,
                    g = "",
                    i = b();
                if (h.forEach(this.changedModules, function(b) {
                        var c = b.getShortULTKey();
                        b.viewInOuts.forEach(function(b, d) {
                            if (d.state) {
                                var h;
                                "in" === d.state ? h = "#" : "out" === d.state ? h = "~" : "continue" === d.state && (h = "!");
                                var j = "+" + c + h + f(b + i);
                                if (g.length + j.length >= 300) {
                                    var k = {
                                        viewtime: g
                                    };
                                    e && (k._lev = "1"), this.sendRapidEventBeacon(a, "l_viewtime", k), g = j
                                } else g += j
                            }
                        }, this), b.viewInOuts.shrink()
                    }, this), g.length > 0) {
                    var j = {
                        viewtime: g
                    };
                    e && (j._lev = "1"), this.sendRapidEventBeacon(a, "l_viewtime", j)
                }
                this.changedModules = []
            }
        }, r.prototype.pageViewStateBeacon = function(a, c, d) {
            var e = n.visibilityState || n.webkitVisiblityState;
            if (!e || "visible" === e) {
                if ("pageLeave" === c || a - this.lastEventBeaconSent >= 1e3 * this.pingBeaconIntervalSec) {
                    var g = "#" + f(a + b()),
                        h = {
                            viewtime: g,
                            itvl: this.pingBeaconIntervalSec
                        };
                    "pageLeave" === c && (h._lev = "1"), this.sendRapidEventBeacon(a, "p_viewtime", h)
                }
            }
        }, r.prototype.sendCustomEvent = function(a, b, c) {
            if (!a || 0 === a.length) throw "eventName must be specified";
            var d = c || {},
                f = e();
            if (b && b.__rappieData) {
                var g = b.__rappieData,
                    h = g.getShortULTKey();
                d.ltarget = h
            }
            this.sendRapidEventBeacon(f, a, d)
        }, r.prototype.sendClickEvent = function(a, b, c) {
            if (!a || !a.hasAttribute || !a.hasAttribute("data-ylk")) throw "srcElement must have 'data-ylk' attribute";
            this._sendClickEvent(a, b, c) || this.clickEventQueue.push({
                srcElement: a,
                data: b,
                queuedAt: e(),
                callback: c
            })
        }, r.prototype.addModules = function(a, b) {
            var c = [];
            h.isString(a) ? c.push(a) : h.isArray(a) && (c = c.concat(a));
            var d = [];
            h.isString(b) ? (c.push(b), d.push(b)) : h.isArray(b) && (c = c.concat(b), d = d.concat(b)), this.rapid.addModules(c), h.forEach(d, function(a) {
                this.setupVarMod(a)
            }, this)
        }, r.prototype.setNewPageParameter = function(a) {
            var b = !1,
                c = {};
            if (h.forEachHash(a, function(a, d) {
                    this.pageParams.hasOwnProperty(a) || (c[a] = d, this.pageParams[a] = d, b = !0)
                }, this), b) {
                var d = this.rapid.getCurrentSID();
                this.rapid.setRapidAttribute({
                    keys: a,
                    A_sid: d
                })
            }
        }, r.prototype._sendClickEvent = function(a, b, c) {
            var d = a.__rappieData;
            if (!d) return !1;
            var e = d.ylk,
                f = {};
            h.forEachHash(e.data, function(a, b) {
                f[a] = b
            }, this), b && h.forEachHash(b, function(a, b) {
                f[a] = b
            }, this);
            var g = d.containerId;
            return this.rapid.beaconClick(g, e.data.slk, e.data._p, f, null, c), !0
        }, r.prototype.procClickEventQueue = function(a, b, c) {
            if (0 !== this.clickEventQueue.length) {
                var d = [];
                h.forEach(this.clickEventQueue, function(b) {
                    this._sendClickEvent(b.srcElement, b.data, b.callback) || a - b.queuedAt <= 5e3 && d.push(b)
                }, this), this.clickEventQueue = d
            }
        }, r.prototype.getBeaconDataForTarget = function(a) {
            return a.ylk.getULTKey()
        }, r.prototype.debugViewable = function(a, b, c) {
            var d = h.filter(this.targets, function(a) {
                    return a.isBeaconedTarget()
                }, this),
                e = h.map(d, function(a) {
                    return a.setAsNotified(), this.getBeaconDataForTarget(a)
                }, this);
            e.length
        }, r.prototype.debugCollected = function(a, b, c) {
            var d = {};
            h.forEach(this.targets, function(a) {
                var b = a.containerId;
                d[b] || (d[b] = 0), d[b] += 1
            }, this)
        };
        var s = {};
        s = {
            yql: "logql.yahoo.co.jp"
        };
        var t = new r(s);
        c.exportAPI("RappieStream", {
            sendCustomEvent: function() {
                t.sendCustomEvent.apply(t, arguments)
            },
            sendClickEvent: function() {
                t.sendClickEvent.apply(t, arguments)
            },
            addModules: function() {
                t.addModules.apply(t, arguments)
            },
            setNewPageParameter: function() {
                t.setNewPageParameter.apply(t, arguments)
            }
        })
    }()
}(this);
var YAHOO = window.YAHOO || {};
YAHOO.JP = YAHOO.JP || {}, YAHOO.JP.anemos = YAHOO.JP.anemos || {}, YAHOO.JP.anemos.UADF = YAHOO.JP.anemos.UADF || {}, YAHOO.JP.anemos.UADF.RappieStream = YJ_UADF.RappieStream;