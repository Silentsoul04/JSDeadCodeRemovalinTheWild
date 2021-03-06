var RumTracking = function(t) {
    function g(n) {
        if (h[n]) return h[n].exports;
        var f = h[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        t[n].call(f.exports, f, f.exports, g);
        f.loaded = !0;
        return f.exports
    }
    var h = {};
    g.m = t;
    g.c = h;
    g.p = "";
    return g(0)
}([function(t) {
    var g = function(a, b) {
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            return a
        },
        h = function() {
            return window.performance && window.performance.timing && "function" === typeof window.performance.now ? Math.round(window.performance.now()) + window.performance.timing.navigationStart : (new Date).getTime()
        },
        n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        },
        f = function(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
        },
        l = function(a, b) {
            if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            });
            b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        },
        m = function(a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return b && ("object" === typeof b || "function" === typeof b) ? b : a
        },
        e, k = function(a) {
            f(this, k);
            this._parent = a;
            this._config = a.getConfig();
            this._complete = !1;
            this.data = {}
        };
    k.prototype.isComplete = function() {
        return this._complete
    };
    k.prototype.markComplete = function() {
        this._complete = !0
    };
    k.prototype.done =
        function() {
            this._complete = !0;
            this.isAsync() && this._parent.pluginDone()
        };
    k.prototype.resetState = function() {
        this._complete = !1;
        this.data = {}
    };
    k.prototype.getData = function() {
        return this.data
    };
    k.prototype.collectData = function() {};
    k.prototype.isAsync = function() {
        return !1
    };
    e = k;
    var x, p = function(a) {
        f(this, p);
        return m(this, e.call(this, a))
    };
    l(p, e);
    p.prototype.collectData = function() {
        this._readLinkedinData()
    };
    p.prototype._readLinkedinData = function() {
        this.data.timeSource = this._config["beacon-source"];
        this.data.treeId =
            this._getTreeId();
        this._config["commit-id"] && (this.data.sessionID = this._config["commit-id"]);
        this.data.isFromServiceWorker = this._getFromServiceWorker();
        this.done()
    };
    p.prototype._getTreeId = function() {
        var a = document.querySelector('meta[name="treeID"]');
        return a && a.getAttribute("content")
    };
    p.prototype._getFromServiceWorker = function() {
        var a = document.querySelector('meta[name="fromServiceWorker"]');
        return a && "true" === a.getAttribute("content")
    };
    x = p;
    var y, v = function(a) {
        f(this, v);
        a = m(this, e.call(this, a));
        a._navigationTimingRead = !1;
        a._navigationTimingFields = "loadEventEnd loadEventStart domComplete domContentLoadedEventEnd domContentLoadedEventStart domInteractive domLoading responseEnd responseStart requestStart secureConnectionStart connectEnd connectStart domainLookupEnd domainLookupStart fetchStart redirectEnd redirectStart unloadEventEnd unloadEventStart navigationStart".split(" ");
        return a
    };
    l(v, e);
    v.prototype.collectData = function() {
        this._readNavigationTiming();
        this.done()
    };
    v.prototype._readNavigationTiming =
        function() {
            var a, b, d;
            if (!this._navigationTimingRead) {
                if (window.performance && window.performance.timing && window.performance.navigation) {
                    this.data.navigationTimingApi = !0;
                    a = window.performance.timing;
                    for (b = 0; b < this._navigationTimingFields.length; b++) d = this._navigationTimingFields[b], a[d] && (this.data[d] = a[d]);
                    this.data.redirectCount = window.performance.navigation.redirectCount;
                    this.data.navigationType = window.performance.navigation.type
                } else this.data.navigationTimingApi = !1;
                window.performance && window.performance.getEntriesByType &&
                    (a = window.performance.getEntriesByType("navigation")[0], void 0 !== a && (this.data.workerStart = a.workerStart, "number" === typeof a.fetchStart && ("number" === typeof a.responseEnd && "number" === typeof a.decodedBodySize && "number" === typeof a.encodedBodySize && "number" === typeof a.transferSize) && (b = {}, b.htmlFetchStart = a.fetchStart, b.htmlResponseEnd = a.responseEnd, b.htmlDecodedBodySize = a.decodedBodySize, b.htmlEncodedBodySize = a.encodedBodySize, b.htmlTransferSize = a.transferSize, this.data.htmlMetrics = b)));
                this._navigationTimingRead = !0
            }
        };
    y = v;
    var z, i = function(a) {
        f(this, i);
        a = m(this, e.call(this, a));
        a._imgEntries = [];
        a._resourceTimingFields = {
            name: !0,
            entryType: !1,
            duration: !0,
            initiatorType: !0,
            fetchStart: !0,
            responseEnd: !0,
            startTime: !0,
            connectEnd: !0,
            connectStart: !0,
            domainLookupEnd: !0,
            domainLookupStart: !0,
            redirectEnd: !0,
            redirectStart: !0,
            requestStart: !0,
            responseStart: !0,
            secureConnectionStart: !0,
            nextHopProtocol: !0,
            transferSize: !0,
            decodedBodySize: !0,
            encodedBodySize: !0,
            workerStart: !0
        };
        a._requestSamplingRandVal = Math.random();
        a._setupResourceTiming();
        return a
    };
    l(i, e);
    i.prototype.resetState = function() {
        e.prototype.resetState.call(this);
        this._requestSamplingRandVal = Math.random()
    };
    i.prototype.collectData = function() {
        this._readResourceTiming();
        this.done()
    };
    i.prototype.addTreeId = function(a, b) {
        var d;
        if (this._treeIdUrlParser && this._rsTimingUrlParser && (this._treeIdUrlParser.href = b, this._readResourceTiming(), this.data.resourceTimingEntries))
            for (d = this.data.resourceTimingEntries.length - 1; 0 <= d; d--)
                if (this._rsTimingUrlParser.href = this.data.resourceTimingEntries[d].name,
                    this._treeIdUrlParser.protocol === this._rsTimingUrlParser.protocol && this._treeIdUrlParser.host === this._rsTimingUrlParser.host && this._treeIdUrlParser.pathname === this._rsTimingUrlParser.pathname && (this._treeIdUrlParser.search === this._rsTimingUrlParser.search || "" === this._treeIdUrlParser.search)) {
                    this.data.resourceTimingEntries[d].resourceTreeId = a;
                    break
                }
    };
    i.prototype._isResourceTimingSupported = function() {
        return window.performance && "function" === typeof window.performance.getEntriesByType
    };
    i.prototype._setupResourceTiming =
        function() {
            var a = {
                "default": 0.001,
                xmlhttprequest: 1
            };
            if (null !== this._config["rs-sample-rate"] && "object" === n(this._config["rs-sample-rate"]))
                for (var b in this._config["rs-sample-rate"]) this._config["rs-sample-rate"].hasOwnProperty(b) && (a[b] = this._config["rs-sample-rate"][b]);
            this._config["rs-sample-rate"] = a;
            this._isResourceTimingSupported() && (this._readResourceTiming(), this._setBufferSize(100), null === window.performance.onresourcetimingbufferfull ? window.performance.onresourcetimingbufferfull = this._readResourceTiming.bind(this) :
                null === window.performance.onwebkitresourcetimingbufferfull && (window.performance.onwebkitresourcetimingbufferfull = this._readResourceTiming.bind(this)));
            this._treeIdUrlParser = document.createElement("a");
            this._rsTimingUrlParser = document.createElement("a")
        };
    i.prototype._clearBuffer = function() {
        this._isResourceTimingSupported() && this._config["enable-rs-timing"] && (window.performance.clearResourceTimings && "function" === typeof window.performance.clearResourceTimings ? window.performance.clearResourceTimings() :
            window.performance.webkitClearResourceTimings && "function" === typeof window.performance.webkitClearResourceTimings && window.performance.webkitClearResourceTimings())
    };
    i.prototype._setBufferSize = function(a) {
        this._isResourceTimingSupported() && this._config["enable-rs-timing"] && (window.performance.setResourceTimingBufferSize && "function" === typeof window.performance.setResourceTimingBufferSize ? window.performance.setResourceTimingBufferSize(a) : window.performance.webkitSetResourceTimingBufferSize && "function" ===
            typeof window.performance.webkitSetResourceTimingBufferSize && window.performance.webkitSetResourceTimingBufferSize(a))
    };
    i.prototype._readResourceTiming = function() {
        var a, b, d, j, c, e, f = !1,
            g = this.data && this.data.resourceTimingEntries || [];
        if (this._isResourceTimingSupported() && this._config["enable-rs-timing"]) {
            a = window.performance.getEntriesByType("resource");
            for (b = 0; b < a.length; b++) {
                j = {};
                for (d in a[b]) !0 === this._resourceTimingFields[d] && (j[d] = a[b][d]);
                "img" === j.initiatorType && this._imgEntries.push(j);
                null ===
                    this._parent._config.xcndUrl && "script" === j.initiatorType && (this._parent._config.xcndUrl = j.name);
                c = Math.random();
                e = this._config["rs-sample-rate"][a[b].initiatorType] || this._config["rs-sample-rate"]["default"];
                if ((f = this._requestSamplingRandVal <= this._config["request-sampling-rate"]) || c <= e) g.push(j), j.sampleMode = "", f && (j.sampleMode = "requestSampled,"), c <= e && (j.sampleMode += "rand" + e.toString())
            }
            this._clearBuffer();
            0 < g.length && (this.data.resourceTimingEntries = g)
        }
    };
    z = i;
    var A, q = function(a) {
        f(this, q);
        return m(this,
            e.call(this, a))
    };
    l(q, e);
    q.prototype.collectData = function() {
        this._readUserTimingEntries();
        this.done()
    };
    q.prototype._clearUserTimings = function() {
        window.performance && (window.performance.clearMarks && window.performance.clearMarks(), window.performance.clearMeasures && window.performance.clearMeasures())
    };
    q.prototype._getUserTimingEntries = function(a, b) {
        var d, c, e, f = [];
        for (c = 0; c < a.length; c++)
            if (d = a[c]) e = {}, e.entryType = b, e.name = d.name, e.startTime = d.startTime, e.duration = d.duration, f.push(e);
        return f
    };
    q.prototype._readUserTimingEntries =
        function() {
            var a, b = [];
            window.performance && "function" === typeof window.performance.getEntriesByType && (this._config["user-timing-measure-enabled"] && (a = window.performance.getEntriesByType("measure"), b = b.concat(this._getUserTimingEntries(a, "MEASURE"))), this._config["user-timing-mark-enabled"] && (a = window.performance.getEntriesByType("mark"), b = b.concat(this._getUserTimingEntries(a, "MARK"))));
            this.data.userTimingEntries = b;
            this._clearUserTimings()
        };
    A = q;
    var B, r = function(a) {
        f(this, r);
        a = m(this, e.call(this, a));
        a._started = !1;
        return a
    };
    l(r, e);
    r.prototype.resetState = function() {};
    r.prototype.isAsync = function() {
        return !0
    };
    r.prototype.collectData = function() {
        this._started || (this._started = !0, this._getCDNData())
    };
    r.prototype._getCDNData = function() {
        var a = window.location.protocol,
            b = this._parent._config.xcndUrl,
            d = new XMLHttpRequest,
            c = this,
            e = "",
            f = "",
            g = "";
        this.data.usedCDN = {
            static_domain: e,
            ip_version: g,
            http_version: g
        };
        0 !== a.lastIndexOf("http", 0) || null === b ? this.done() : (d.onreadystatechange = function() {
            var a = this.readyState ?
                this : d;
            if (4 === a.readyState) {
                if (200 === a.status) {
                    try {
                        e = a.getResponseHeader("X-CDN"), f = a.getResponseHeader("X-CDN-CLIENT-IP-VERSION"), g = a.getResponseHeader("X-CDN-Proto")
                    } catch (b) {
                        console.log("Canot read the X-CDN header possibly because of CORS restrictions")
                    }
                    c.data.usedCDN.static_domain = null === e ? "" : e;
                    c.data.usedCDN.ip_version = null === f ? "" : f.toLowerCase();
                    c.data.usedCDN.http_version = null === g ? "" : g.toLowerCase()
                } else console.log("CDN request did not return a HTTP 200. Status: " + a.status);
                c.done()
            }
        }, d.open("HEAD",
            b, !0), d.send())
    };
    B = r;
    var C, s = function(a) {
        f(this, s);
        a = m(this, e.call(this, a));
        a._started = !1;
        return a
    };
    l(s, e);
    s.prototype.resetState = function() {};
    s.prototype.isAsync = function() {
        return !0
    };
    s.prototype.collectData = function() {
        this._started || (this._started = !0, this._getPoPData())
    };
    s.prototype._getPoPData = function() {
        var a = window.location,
            b = a.protocol,
            a = b + "//" + a.host + "/fizzy/admin?" + (new Date).getTime(),
            d = new XMLHttpRequest,
            c = this;
        0 !== b.lastIndexOf("http", 0) ? this.done() : (d.onreadystatechange = function() {
            var a =
                this.readyState ? this : d;
            4 === a.readyState && (200 <= a.status && 400 > a.status ? (c.data.pointOfPresenceId = a.getResponseHeader("X-Li-Pop"), c.data.rawXLiFabricHeader = a.getResponseHeader("X-Li-Fabric"), c.data.httpVersion = a.getResponseHeader("X-Li-proto")) : console.log("PoP request was not successful. Status: " + a.status), c.done())
        }, d.open("get", a, !0), d.send())
    };
    C = s;
    var D, w = function(a) {
        f(this, w);
        var b = m(this, e.call(this, a));
        b.data.longTasks = [];
        b._longTaskFields = ["duration", "name", "startTime"];
        b._observer = new PerformanceObserver(function(a) {
            a.getEntries().forEach(function(a) {
                for (var d = {}, c = 0; c < b._longTaskFields.length; c++) {
                    var e = b._longTaskFields[c];
                    void 0 !== a[e] && (d[e] = a[e])
                }
                b.data.longTasks.push(d)
            })
        });
        try {
            b._observer.observe({
                entryTypes: ["longtask"]
            })
        } catch (d) {
            console.log("Longtask api is not supported")
        }
        return b
    };
    l(w, e);
    w.prototype.resetState = function() {
        this._complete = !1;
        this.data = {};
        this.data.longTasks = []
    };
    w.prototype.collectData = function() {
        this.done()
    };
    D = w;
    var E, u = function(a) {
        f(this, u);
        return m(this, e.call(this, a))
    };
    l(u, e);
    u.prototype.collectData = function() {
        this._readNetworkInformation();
        this.done()
    };
    u.prototype._readNetworkInformation = function() {
        if (navigator && navigator.connection) {
            var a = {},
                b = navigator.connection.downlinkMax;
            a.connectionType = void 0 === navigator.connection.type ? "UNKNOWN" : navigator.connection.type.toUpperCase();
            a.effectiveType = this._formatEffectiveType(navigator.connection.effectiveType);
            a.roundTripTime = void 0 === navigator.connection.rtt ? -1 : navigator.connection.rtt;
            a.downlinkBandwidth = void 0 === navigator.connection.downlink ? -1 : navigator.connection.downlink;
            a.downlinkMaxBandwidth =
                void 0 === b ? -1 : Infinity === b ? 0 : navigator.connection.downlinkMax;
            this.data.networkInformationMetrics = a
        }
    };
    u.prototype._formatEffectiveType = function(a) {
        return "2g" === a ? "TWO_G" : "3g" === a ? "THREE_G" : "4g" === a ? "FOUR_G" : "SLOW_2G"
    };
    E = u;
    var c = function(a) {
        var b = this;
        f(this, c);
        this._resetState(!1);
        this._defaults = {
            enabled: !0,
            "beacon-url": "/li/track",
            "beacon-service": "tracking",
            "event-name": "RealUserMonitoringEvent",
            "topic-name": "RealUserMonitoringEvent",
            "app-id": "linkedin.rum.tracking",
            "is-single-page-app": !0,
            "cross-origin": !1,
            "beacon-timeout": 3E4,
            "request-sampling-rate": 0.01,
            "user-timing-mark-enabled": !1,
            "user-timing-measure-enabled": !0,
            "beacon-source": "apps",
            "page-key-prefix": "",
            "navigation-timing-only": !1,
            "pathname-depth": -1,
            "lazy-image-class-names": ["lazy-image"],
            "enable-cdn-tracking": !1,
            "enable-pop-tracking": !1,
            "async-plugins-timeout": 5E3,
            "non-spa-manual-send": !1
        };
        this._config = g(this._defaults, a);
        if (this._config.enabled) {
            this._config.readyState || (this._config.readyState = document.readyState);
            this._config.xcndUrl = null;
            this._config["enable-rs-timing"] = this._config["navigation-timing-only"] ? this._config["enable-rs-timing"] || !1 : !1 === this._config["enable-rs-timing"] ? !1 : !0;
            this._config.plugins = [new x(this), new y(this), new z(this), new A(this), new E(this)];
            this._config["enable-cdn-tracking"] && this._config.plugins.push(new B(this));
            this._config["enable-pop-tracking"] && this._config.plugins.push(new C(this));
            "function" === typeof PerformanceObserver && "function" === typeof PerformanceLongTaskTiming && this._config.plugins.push(new D(this));
            this._isInitialLoad = !0;
            this._initialStartTime = void 0;
            this._renderCompleteCount = 0;
            this._isLazyRender = !1;
            this._allBeaconData = [];
            this._csrfToken = "";
            this._isInternalApp = !1;
            if (this._config["beacon-source"] && "internal-apps" === this._config["beacon-source"] && (this._isInternalApp = !0, "lite" === this._config["beacon-service"] || "https://www.linkedin-ei.com/lite/rum-track" === this._config["beacon-url"] || "/li/track" == this._config["beacon-url"])) this._config["beacon-service"] = "tracking", this._config["beacon-url"] =
                "https://lca1-mobile-tracking-frontend-vip-1.corp.linkedin.com/li/track/";
            this._onLoad = function() {
                setTimeout(function() {
                    b._collectPluginData()
                }, 500)
            };
            this._onUnload = function() {
                b._collectPluginData()
            };
            this._config["navigation-timing-only"] && !this._config["non-spa-manual-send"] ? "complete" === this._config.readyState ? this._onLoad() : window.addEventListener("load", this._onLoad) : this._config["navigation-timing-only"] || (this._config["non-spa-manual-send"] ? console.error("Manual send mode not supported for SPA apps") :
                window.addEventListener("unload", this._onUnload))
        }
    };
    c.prototype.destroy = function() {
        this._config["navigation-timing-only"] && !this._config["non-spa-manual-send"] ? window.removeEventListener("load", this._onLoad) : this._config["navigation-timing-only"] || (this._config["non-spa-manual-send"] ? console.error("Manual send mode not supported for SPA apps") : (this._collectPluginData(), window.removeEventListener("unload", this._onUnload)))
    };
    c.prototype.setPageKey = function(a) {
        this._beaconData.pageKey = a
    };
    c.prototype.setCurrentUser =
        function(a) {
            this._isInternalApp && "string" == typeof a && (this._beaconData.sessionID = a)
        };
    c.prototype.appTransitionStart = function(a) {
        if (a || 0 < this._renderCompleteCount) this._collectPluginData(), this._beaconData.navigationStart = h(), this._isInitialLoad = !1
    };
    c.prototype.appRenderComplete = function() {
        var a = this;
        this._renderCompleteCount++;
        this._beaconData.renderCompleteTime = h();
        this._timeOutVal || (this._timeOutVal = setTimeout(function() {
            a._collectPluginData()
        }, this._config["beacon-timeout"]))
    };
    c.prototype.addTreeId =
        function(a, b) {
            if (this._config.plugins && 2 < this._config.plugins.length) {
                var d = this._config.plugins[2];
                d && d.addTreeId(a, b)
            }
        };
    c.prototype.appViewRenderStart = function(a, b) {
        this._viewTimings[a] = {
            renderName: b || a,
            viewName: b,
            viewId: a,
            renderStart: h()
        }
    };
    c.prototype.appViewRenderComplete = function(a) {
        this._viewTimings[a] && (this._viewTimings[a].renderEnd = h())
    };
    c.prototype.setDeepLinkTrackingId = function() {
        this._shouldSendBeacon = !1
    };
    c.prototype.setWindowHiddenState = function(a) {
        this._beaconData.isImpactedByHiddenWindow =
            a
    };
    c.prototype.setPageInstance = function(a) {
        this._beaconData.pageInstance = a
    };
    c.prototype.setIsLazyRender = function(a) {
        this._isLazyRender = a
    };
    c.prototype.getConfig = function() {
        return this._config
    };
    c.prototype.pluginDone = function() {
        for (var a = this, b, d = 0; d < this._config.plugins.length; d++)
            if (b = this._config.plugins[d], b.isAsync() && !b.isComplete()) return !1;
        setTimeout(function() {
            a._sendAllData()
        }, 500)
    };
    c.prototype.manuallySetNonSpaPLTSendBeacon = function() {
        var a = h(),
            b = this._collectPlugin(),
            d = this._allBeaconData.length;
        0 < d && void 0 !== this._allBeaconData[d - 1].loadEventEnd && (this._allBeaconData[d - 1].loadEventEnd = a);
        this._checkAsyncPlugAndSend(b)
    };
    c.prototype._resetState = function(a) {
        this._beaconData = {};
        this._viewTimings = {};
        this._scrollTime = void 0;
        this._shouldSendBeacon = !0;
        this._timeOutVal && (clearTimeout(this._timeOutVal), this._timeOutVal = void 0);
        a && this._config.plugins.map(function(a) {
            a.resetState()
        })
    };
    c.prototype._readRenderTimingEntries = function() {
        if (0 < Object.keys(this._viewTimings).length) {
            this._beaconData.detailedRenderTimingEntries = [];
            for (var a in this._viewTimings) this._viewTimings.hasOwnProperty(a) && this._beaconData.detailedRenderTimingEntries.push(this._viewTimings[a])
        }
    };
    c.prototype._collectPluginData = function() {
        var a = this._collectPlugin();
        this._checkAsyncPlugAndSend(a)
    };
    c.prototype._collectPlugin = function() {
        var a = !0;
        if (this._config.enabled) return this._config.plugins.map(function(b) {
            b.collectData();
            b.isComplete() || (a = !1)
        }), this._pushCurrentBeaconData(), a
    };
    c.prototype._checkAsyncPlugAndSend = function(a) {
        var b = this;
        a ? this._sendAllData() :
            setTimeout(function() {
                b._markAllAsyncPluginComplete()
            }, this._config["async-plugins-timeout"]);
        this._resetState(!0)
    };
    c.prototype._markAllAsyncPluginComplete = function() {
        this._config.plugins.map(function(a) {
            a.isAsync() && a.markComplete()
        });
        this._sendAllData()
    };
    c.prototype._doesNotHaveLazyImageClass = function(a) {
        var b, d = !0,
            c = this._config["lazy-image-class-names"];
        if (a && a.className && c)
            for (b = c.length - 1; 0 <= b; b--) - 1 < a.className.indexOf(c[b]) && (d = !1);
        return d
    };
    c.prototype._doesElementOverlapWithViewport = function(a) {
        var b,
            d, c;
        c = a.getBoundingClientRect();
        a = Math.max(c.top, 0);
        b = Math.max(c.left, 0);
        d = Math.min(c.bottom, window.innerHeight || doc.documentElement.clientHeight);
        c = Math.min(c.right, window.innerWidth || doc.documentElement.clientWidth);
        return !(d <= a || c <= b)
    };
    c.prototype._getImgResourceEntries = function() {
        var a = [],
            b, c, e = this._beaconData.resourceTimingEntries;
        if (e)
            for (b = e.length - 1; 0 <= b; b--) c = e[b], "img" === c.initiatorType && a.push(c);
        return a
    };
    c.prototype._cleanUpResourceTimingEntries = function() {
        var a;
        if (this._beaconData.resourceTimingEntries)
            for (a =
                this._beaconData.resourceTimingEntries.length - 1; 0 <= a; a--) this._beaconData.resourceTimingEntries[a].name && (this._beaconData.resourceTimingEntries[a].name = this._beaconData.resourceTimingEntries[a].name.split(/[?#]/)[0])
    };
    c.prototype._readPageKey = function() {
        this._beaconData && (!this._beaconData.pageKey && this._isInitialLoad) && (this._beaconData.pageKey = this._getPageKey());
        this._isInternalApp && ("EMBER" === this._config["web-ui-framework"] && void 0 !== this._beaconData.pageKey ? this._beaconData.pageKey = this._config["page-key-prefix"] +
            ":" + this._beaconData.pageKey : document.querySelector('meta[name="pageKey"]') || (this._beaconData.pageKey = this._config["page-key-prefix"] + ":", this._beaconData.pageKey = -1 < this._config["pathname-depth"] ? this._beaconData.pageKey + window.location.pathname.split(/[/#]/).slice(0, this._config["pathname-depth"] + 1).join("/") : this._beaconData.pageKey + window.location.pathname))
    };
    c.prototype._getPageKey = function() {
        var a = document.querySelector('meta[name="pageKey"]');
        return a ? a.getAttribute("content") : document.body.id ?
            document.body.id.substring(8) : ""
    };
    c.prototype._getRenderingMode = function() {
        var a, b = document.querySelector('meta[name="renderingMode"]');
        b && (a = b.getAttribute("data-mode"), "BIGPIPE" === a && (a = "BIG_PIPE"));
        return a
    };
    c.prototype._doesRenderErrorCodeBlockExists = function() {
        return null != document.querySelector("code#renderError")
    };
    c.prototype._readSinglePageAppData = function() {
        this._beaconData.isSinglePageApp = this._config["is-single-page-app"];
        this._beaconData.isSinglePageApp && (this._beaconData.webUIFramework =
            this._config["web-ui-framework"], this._beaconData.appRenderMode = this._getRenderingMode(), this._isInitialLoad ? (this._beaconData.pageLoadMode = "INITIAL", this._doesRenderErrorCodeBlockExists() && (this._beaconData.isAppRenderFailed = !0)) : this._beaconData.pageLoadMode = "PARTIAL")
    };
    c.prototype._sendAllData = function() {
        var a, b, c = {};
        for (a = 0; a < this._config.plugins.length; a++) b = this._config.plugins[a], b.isAsync() && (c = g(c, b.getData()));
        for (a = 0; a < this._allBeaconData.length; a++) b = g(this._allBeaconData[a], c), this._sendBeacon(b);
        this._allBeaconData = []
    };
    c.prototype._pushCurrentBeaconData = function() {
        var a;
        (a = this._getBeaconAndPluginData()) && this._allBeaconData.push(g({}, a))
    };
    c.prototype._readIsSSL = function() {
        window && window.location && (this._beaconData.isSSL = "https:" === window.location.protocol ? 1 : 0)
    };
    c.prototype._getBeaconAndPluginData = function() {
        var a = this;
        this._readPageKey();
        this._readSinglePageAppData();
        this._readRenderTimingEntries();
        this._readIsSSL();
        this._config["app-version"] && (this._beaconData.appVersion = this._config["app-version"]);
        this._config.plugins.map(function(b) {
            a._beaconData = g(a._beaconData, b.getData())
        });
        if ("navigationStart" in this._beaconData && this._shouldSendBeacon) {
            this._initialStartTime || (this._initialStartTime = this._beaconData.navigationStart);
            this._beaconData.boomerangStart = this._initialStartTime;
            this._cleanUpResourceTimingEntries();
            if (this._beaconData.isSinglePageApp)
                if ("renderCompleteTime" in this._beaconData) this._beaconData.timeDone = this._beaconData.renderCompleteTime - this._beaconData.navigationStart;
                else if (!this._config["navigation-timing-only"]) return;
            return this._beaconData
        }
    };
    c.prototype._sendBeacon = function(a) {
        if (this._config.enabled) try {
            if (this._fireTrackingBeacon(a), "undefined" !== typeof CustomEvent) {
                var b = new CustomEvent("RUMEvent", {
                    detail: a
                });
                document.dispatchEvent(b)
            }
        } catch (c) {}
    };
    c.prototype._fireTrackingBeacon = function(a) {
        var b = {
            eventInfo: {
                eventName: this._config["event-name"],
                topicName: this._config["topic-name"],
                appId: this._config["app-id"]
            },
            eventBody: a
        };
        a.header = {
            pageInstance: a.pageInstance
        };
        a.requestHeader = {
            pageKey: a.pageKey
        };
        b.eventBody.trackingTime = -1;
        a = new XMLHttpRequest;
        a.open("POST", this._config["beacon-url"], !0);
        a.setRequestHeader("content-type", "application/json");
        this._csrfToken || (this._csrfToken = this._getCsrfToken());
        a.setRequestHeader("Csrf-Token", this._csrfToken);
        a.send(JSON.stringify([b]))
    };
    c.prototype._getCookieString = function() {
        return document.cookie
    };
    c.prototype._getCsrfToken = function() {
        for (var a = this._getCookieString().split(";"), b = 0; b < a.length; b++) {
            for (var c = a[b];
                " " === c.charAt(0);) c = c.substring(1);
            if (-1 !== c.indexOf("JSESSIONID=")) return a =
                c.substring(11, c.length), '"' === a[0] && '"' === a[a.length - 1] && (a = a.substring(1, a.length - 1)), a
        }
        return ""
    };
    t.exports = c
}]);
(function() {
    if ("function" === typeof RumTracking) {
        var t = new RumTracking({
                "beacon-service": "tracking",
                "beacon-url": "/li/track",
                "event-name": "RealUserMonitoringEvent",
                "is-single-page-app": !1,
                "navigation-timing-only": !0,
                "enable-rs-timing": !0,
                "request-sampling-rate": 0.5,
                "enable-pop-tracking": !0
            }),
            g, h = /^pagekey-(.+)$/.exec(document.body.id);
        h && (g = h[1]);
        t.setPageKey(g)
    }
})();