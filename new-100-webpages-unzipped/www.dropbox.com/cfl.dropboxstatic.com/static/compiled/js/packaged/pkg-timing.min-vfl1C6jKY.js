define("apex-metrics", ["require", "exports", "tslib"], function(t, e, i) {
    "use strict";

    function n(t) {
        return s(t, "namespace", 256, f, g)
    }

    function o(t) {
        return s(t, "metric name", 256, f, w)
    }

    function r(t) {
        return s(t, "tag name", 256, f, S)
    }

    function a(t) {
        return s(t, "tag value", 256)
    }

    function s(t, e, i, n, o) {
        var r = [];
        if (n && n.test(t) && r.push("invalid prefix"), o && o.test(t) && r.push("invalid characters"), t.length > i && r.push("exceeds " + i + " characters"), 0 === t.length && r.push("is empty"), 0 !== r.length) throw new Error(e + " identifier '" + t + "' is invalid: " + r);
        return t
    }

    function c(t) {
        return {
            type: "metric_name",
            value: o(t)
        }
    }

    function u(t) {
        return {
            type: "namespace",
            value: n(t)
        }
    }

    function _(t) {
        return {
            type: "tag_name",
            value: r(t)
        }
    }

    function l(t) {
        return {
            type: "tag_value",
            value: a(t)
        }
    }

    function p(t, e) {
        return {
            type: "tag",
            name: t,
            value: e
        }
    }

    function d(t, e, i) {
        if (t.hasOwnProperty(e.value)) {
            t[e.value].push(i)
        } else t[e.value] = [i]
    }

    function m(t, e, i) {
        if (t.hasOwnProperty(e.value)) {
            var n = t[e.value];
            n.push.apply(n, i)
        } else t[e.value] = i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var h = (function() {
        function t() {}
        return t.prototype.now = function() {
            return {
                value: performance.now(),
                unit: 1
            }
        }, t
    })();
    e.BrowserPerformanceClock = h;
    var f = new RegExp("^[^0-9a-zA-Z]+"),
        v = new RegExp("[^0-9a-zA-Z._-]", "g"),
        g = v,
        w = new RegExp("[^0-9a-zA-Z/._-]", "g"),
        S = v;
    e.validateNamespace = n, e.validateMetricName = o, e.validateTagName = r, e.validateTagValue = a, e.createMetricName = c, e.createNamespace = u, e.createTagName = _, e.createTagValue = l, e.createTag = p;
    var T;
    e.TimeUnit = T, (function(t) {
        t[t.NANOSECONDS = 0] = "NANOSECONDS", t[t.MILLISECONDS = 1] = "MILLISECONDS", t[t.SECONDS = 2] = "SECONDS", t[t.MINUTES = 3] = "MINUTES", t[t.HOURS = 4] = "HOURS", t[t.DAYS = 5] = "DAYS"
    })(T || (e.TimeUnit = T = {}));
    var y = (function() {
        function t() {}
        return t.toMilliseconds = function(t) {
            switch (t.unit) {
                case 0:
                    return t.value / 1e6;
                case 1:
                    return t.value;
                case 2:
                    return 1e3 * t.value;
                case 3:
                    return 6e4 * t.value;
                case 4:
                    return 36e5 * t.value;
                case 5:
                    return 24 * t.value * 36e5
            }
        }, t
    })();
    e.Instant = y;
    var E = (function() {
        function t(t, e, i) {
            void 0 === i && (i = new h), this.sink = t, this.periodicExecutor = e, this.clock = i
        }
        return t.prototype.createPeriodicMetrics = function(t, e, i) {
            return new I(t, this.clock, e, i, this.sink, this.periodicExecutor)
        }, t.prototype.createScopedMetrics = function(t) {
            return new A(t, this.clock, [], this.sink)
        }, t
    })();
    e.MetricsFactoryImpl = E;
    var b = (function() {
        function t() {}
        return t.prototype.executeEvery = function(t, e) {
            var i = y.toMilliseconds(t),
                n = setInterval(function() {
                    e() || clearInterval(n)
                }, i)
        }, t
    })();
    e.SetIntervalExecutor = b;
    var x = (function() {
            function t(t, e, i) {
                this.clock = e, this.timers = [], this.counters = [], this.samples = {}, this.closed = !1, this.namespace = t, this.tags = i
            }
            return t.prototype.createCounter = function(t) {
                var e = new N(t);
                return this.closed || this.counters.push(e), e
            }, t.prototype.createTimer = function(t) {
                var e = new O(t, this.clock);
                return this.closed || this.timers.push(e), e
            }, t.prototype.recordSample = function(t, e) {
                this.closed || d(this.samples, t, e)
            }, t.prototype.recordTime = function(t, e, i) {
                this.closed || d(this.samples, t, y.toMilliseconds({
                    value: e,
                    unit: i
                }))
            }, t
        })(),
        I = (function(t) {
            function e(e, i, n, o, r, a) {
                var s = t.call(this, e, i, n) || this;
                return s.sink = r, a.executeEvery(o, function() {
                    return s.recordData()
                }), s
            }
            return i.__extends(e, t), e.prototype.close = function() {
                this.closed || (this.closed = !0, this.recordData(!0), this.timers = [], this.counters = [])
            }, e.prototype.recordData = function(t) {
                return void 0 === t && (t = !1), !t && this.closed || this.sink.recordMetrics(this.getSpans()), !this.closed
            }, e.prototype.getSpans = function() {
                var t = this;
                this.timers.filter(function(t) {
                    return t.hasSamples()
                }).forEach(function(e) {
                    return m(t.samples, e.name, e.getValues())
                }), this.counters.filter(function(t) {
                    return t.hasSamples()
                }).forEach(function(e) {
                    return m(t.samples, e.name, e.getValues())
                });
                var e = [];
                if (Object.keys(this.samples).length > 0) {
                    for (var i = {}, n = 0, o = this.tags; n < o.length; n++) {
                        var r = o[n];
                        i[r.name.value] = r.value
                    }
                    e.push({
                        namespace: this.namespace.value,
                        tags: i,
                        samples: this.samples
                    }), this.samples = {}
                }
                return e
            }, e
        })(x),
        A = (function(t) {
            function e(e, i, n, o) {
                var r = t.call(this, e, i, n) || this;
                return r.sink = o, r
            }
            return i.__extends(e, t), e.prototype.addTag = function(t, e) {
                this.closed || this.tags.push(p(t, e))
            }, e.prototype.addTags = function(t) {
                if (!this.closed)
                    for (var e = 0, i = t; e < i.length; e++) {
                        var n = i[e];
                        this.tags.push(n)
                    }
            }, e.prototype.close = function() {
                this.closed || (this.closed = !0, this.sink.recordMetrics(this.getSpans()))
            }, e.prototype.getSpans = function() {
                var t = this;
                this.timers.filter(function(t) {
                    return t.hasSamples()
                }).forEach(function(e) {
                    return m(t.samples, e.name, e.getValues())
                }), this.timers = [], this.counters.filter(function(t) {
                    return t.hasSamples()
                }).forEach(function(e) {
                    return m(t.samples, e.name, e.getValues())
                }), this.counters = [];
                var e = [];
                if (Object.keys(this.samples).length > 0) {
                    for (var i = {}, n = 0, o = this.tags; n < o.length; n++) {
                        var r = o[n];
                        i[r.name.value] = r.value
                    }
                    e.push({
                        namespace: this.namespace.value,
                        tags: i,
                        samples: this.samples
                    }), this.samples = {}
                }
                return e
            }, e
        })(x),
        N = (function() {
            function t(t) {
                this.value = 0, this.samples = [], this.name = t
            }
            return t.prototype.decrement = function(t) {
                void 0 === t && (t = 1), this.value -= t
            }, t.prototype.increment = function(t) {
                void 0 === t && (t = 1), this.value += t
            }, t.prototype.reset = function(t) {
                void 0 === t && (t = 0), this.value = t
            }, t.prototype.record = function(t) {
                void 0 === t && (t = !0), this.samples.push(this.value), t && this.reset()
            }, t.prototype.getValues = function() {
                var t = this.samples;
                return this.samples = [], t
            }, t.prototype.hasSamples = function() {
                return this.samples.length > 0
            }, t
        })(),
        O = (function() {
            function t(t, e) {
                this.clock = e, this.samples = [], this.name = t, this.startTime = y.toMilliseconds(this.clock.now())
            }
            return t.prototype.record = function() {
                this.samples.push(y.toMilliseconds(this.clock.now()) - this.startTime), this.reset()
            }, t.prototype.reset = function() {
                this.startTime = y.toMilliseconds(this.clock.now())
            }, t.prototype.getValues = function() {
                var t = this.samples;
                return this.samples = [], t
            }, t.prototype.hasSamples = function() {
                return this.samples.length > 0
            }, t
        })(),
        R = (function() {
            function t() {}
            return t.prototype.recordMetrics = function(t) {}, t
        })();
    e.NoOpSink = R;
    var D = (function() {
        function t() {}
        return t.prototype.executeEvery = function(t, e) {}, t
    })();
    e.NoOpExecutor = D
}), define("modules/clean/js_basic_stopwatch", ["require", "exports", "modules/core/exception"], function(t, e, i) {
    "use strict";

    function n(t, i, n, o, a) {
        return void 0 === o && (o = !1), r ? new s(t, i, n, o, a) : e.NoopStopwatchInstance
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o, r = !(!window.performance || !window.performance.now),
        a = 0;
    (function(t) {
        t[t.Span = 1] = "Span", t[t.AsyncSpan = 2] = "AsyncSpan", t[t.Trace = 3] = "Trace"
    })(o = e.TimingDataType || (e.TimingDataType = {}));
    var s = (function() {
        function t(t, e, i, n, o) {
            void 0 === n && (n = !1), this.name = t, this.strictAssert = e, this.activeSpans = {}, this.aggregateSpans = {}, this._annotations = o || {}, this.spanStack = [], this.stopwatchTags = i || [], this.detached = n
        }
        return t.prototype.reset = function() {
            this.activeSpans = {}, this.spanStack = [], this.aggregateSpans = {}, this._annotations = {}
        }, Object.defineProperty(t.prototype, "annotations", {
            get: function() {
                return this._annotations
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.addAnnotation = function(t, e) {
            this._annotations[t] = e
        }, t.prototype.removeAnnotation = function(t) {
            delete this._annotations[t]
        }, t.prototype.popResolvedSpans = function() {
            if (this.detached) return {};
            var t = this.aggregateSpans;
            return this.aggregateSpans = {}, t
        }, t.prototype.peekResolvedSpans = function() {
            return this.detached ? {} : this.aggregateSpans
        }, t.newSpanID = function() {
            var t = String(a);
            return a++, t
        }, t.resolveTime = function(t) {
            return void 0 === t && (t = window.performance.now()), Math.round(t)
        }, t.prototype._resolveParent = function(t) {
            if (t.type !== o.Span) return void(t.parent = "");
            var e = this.spanStack[this.spanStack.length - 1];
            if (e)
                if (e !== t.name) this._report_sw_misuse("Closing " + e + " while the latest open span is " + t.name + ".\n        You are either mixing sync and async spans or closing sync spans out of order.");
                else {
                    this.spanStack.pop();
                    for (var i = "", n = 0, r = this.spanStack; n < r.length; n++) {
                        var a = r[n];
                        i += a + "#"
                    }
                    t.parent = i
                }
            else this._report_sw_misuse(t.name + ' isn\'t a synchronous span and has to be started with "async:true".')
        }, t.prototype.recordTrace = function(e, i) {
            void 0 === i && (i = {});
            var n = t.resolveTime(i.traceTime),
                r = t.newSpanID(),
                a = i.annotations || {},
                s = {
                    name: e,
                    span_id: r,
                    start_time: 0,
                    end_time: n,
                    annotations: a,
                    type: o.Trace,
                    parent: ""
                };
            return this.recordSpan(this.stopwatchTags, s), r
        }, t.prototype.start = function(e, i) {
            void 0 === i && (i = {}), e || this._report_sw_misuse("Reporting a span without a name");
            var n = t.resolveTime(i.startTime);
            i.async || this.spanStack.push(e);
            var r = t.newSpanID(),
                a = {
                    name: e,
                    span_id: r,
                    start_time: n || 0,
                    annotations: {},
                    type: i.async ? o.AsyncSpan : o.Span
                };
            return e in this.activeSpans || (this.activeSpans[e] = []), this.activeSpans[e].push(a), r
        }, t.prototype.end = function(e, i) {
            void 0 === i && (i = {});
            var n = this.findTimerDataIndex(e, i.spanId);
            if (n !== -1) {
                var o = this.activeSpans[e],
                    r = o[n];
                o.splice(n, 1), this._resolveParent(r);
                var a = t.resolveTime(i.endTime);
                return a < r.start_time ? void this._report_sw_misuse("span " + e + " has set an endTime earlier than start_time") : (r.end_time = a, this.recordSpan(this.stopwatchTags, r), r.span_id)
            }
        }, t.prototype.addSpanAnnotation = function(t, e, i, n) {
            var o = this.findTimerDataIndex(t, n);
            if (o !== -1) {
                this.activeSpans[t][o].annotations[e] = i
            }
        }, t.prototype.attach = function() {
            this.detached = !1
        }, t.prototype.findTimerDataIndex = function(t, e) {
            if (!(t in this.activeSpans) || 0 === this.activeSpans[t].length) return this._report_sw_misuse("tried to find " + t + " but that span doesn't exist"), -1;
            var i = -1,
                n = this.activeSpans[t];
            if (void 0 === e) i = 0;
            else
                for (var o = 0; o < n.length; o++)
                    if (n[o].span_id === e) {
                        i = o;
                        break
                    } return i === -1 && this._report_sw_misuse("tried to find " + t + " with id " + e + " but that span doesn't exist"), i
        }, t.prototype._report_sw_misuse = function(t) {
            t = "JSBasicStopwatch " + this.name + ": " + t, this.strictAssert ? i.assert(!1, t) : i.reportStack(t, {
                severity: i.SEVERITY.NONCRITICAL,
                tags: ["log_js_stopwatch"]
            })
        }, t.prototype.recordSpan = function(t, e) {
            var i = "" + e.parent + e.name;
            i in this.aggregateSpans || (this.aggregateSpans[i] = {
                name: e.name,
                start_time: e.start_time,
                total_time: 0,
                num_calls: 0,
                annotations: Object.keys(e.annotations).length > 0 ? e.annotations : void 0,
                parent: e.parent || "",
                stopwatch_tags: t.length > 0 ? t : void 0,
                type: e.type
            });
            var n = this.aggregateSpans[i];
            if (void 0 === e.end_time) return void this._report_sw_misuse("Span " + i + " reported with undefined end_time");
            if (n.type === o.Trace ? (n.total_time = e.end_time - e.start_time, n.num_calls = 1) : (n.total_time += e.end_time - e.start_time, n.num_calls += 1), Object.keys(e.annotations).length > 0)
                if (n.annotations)
                    for (var r in e.annotations) e.annotations.hasOwnProperty(r) && (n.annotations[r] = e.annotations[r]);
                else n.annotations = e.annotations
        }, t
    })();
    e.JSBasicStopwatchImpl = s;
    var c = (function() {
        function t() {
            this.name = "", this.annotations = {}
        }
        return t.prototype.reset = function() {}, t.prototype.attach = function() {}, t.prototype.addAnnotation = function(t, e) {}, t.prototype.removeAnnotation = function(t) {}, t.prototype.popResolvedSpans = function() {
            return {}
        }, t.prototype.peekResolvedSpans = function() {
            return {}
        }, t.prototype.start = function(t, e) {
            void 0 === e && (e = {})
        }, t.prototype.end = function(t, e) {
            void 0 === e && (e = {})
        }, t.prototype.recordTrace = function(t, e) {
            void 0 === e && (e = {})
        }, t.prototype.addSpanAnnotation = function(t, e, i, n) {}, t
    })();
    e.NoopStopwatchInstance = new c, e.createStopwatch = n
}), define("modules/clean/js_client_stopwatch", ["require", "exports", "tslib", "modules/core/xhr", "modules/clean/js_basic_stopwatch", "modules/constants/request", "modules/core/browser", "modules/core/exception"], function(t, e, i, n, o, r, a, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), r = i.__importStar(r), a = i.__importStar(a);
    var c = (function() {
        function t(t) {
            this.id = t
        }
        return t.REQUEST_ID = new t("dropbox.js_client_stopwatch.request_id"), t.CORRELATION_ID = new t("dropbox.js_client_stopwatch.correlation_id"), t.URL = new t("dropbox.js_client_stopwatch.url"), t
    })();
    e.ReservedAnnotationKey = c;
    var u = (function() {
        function t() {
            this.GLOBAL_SW_NAME = "GLOBAL_STOPWATCH", this.flush_interval = 6e4, this.strictAssert = !1, this.intervalId = null, this.clientStopwatchCounter = 1, this.reset()
        }
        return t.prototype.reset = function() {
            this.globalStopwatches = {}, this.clientStopwatches = {}, this.clientStopwatchCounter = 1, this.sentInitialData = !1, this.create_stopwatch(this.GLOBAL_SW_NAME), this.intervalId && clearInterval(this.intervalId), this.intervalId = null
        }, t.prototype.reset_individual_stopwatch = function(t) {
            if (!this.stopwatch_exists(t)) return void this._report_sw_misuse("tried to reset the stopwatch " + t + " but it does not exist");
            this.globalStopwatches[t].reset()
        }, t.prototype.stopwatch_exists = function(t) {
            return t in this.globalStopwatches
        }, t.prototype.create_stopwatch = function(t, e) {
            if (this.stopwatch_exists(t)) return void this._report_sw_misuse("tried to create a new stopwatch " + t + " but it already exists");
            this.globalStopwatches[t] = o.createStopwatch(t, this.strictAssert, e)
        }, t.prototype.createDetachedStopwatch = function(t, e) {
            void 0 === e && (e = {});
            var i = o.createStopwatch(t, this.strictAssert, e.tags, !0, e.annotations),
                n = new _(this.clientStopwatchCounter++, t, i, e.request_id, e.correlation_id, e.url);
            return this.clientStopwatches[n.id] = n, n
        }, t.prototype.deleteStopwatch = function(t) {
            delete this.clientStopwatches[t.id]
        }, t.prototype.create_stopwatch_if_not_exist = function(t, e) {
            this.stopwatch_exists(t) || this.create_stopwatch(t, e)
        }, t.prototype.getStopwatch = function(t) {
            return this.stopwatch_exists(t) ? this.globalStopwatches[t] : (this._report_sw_misuse(t + " doesn't exist"), null)
        }, t.prototype.recordTrace = function(t, e) {
            void 0 === e && (e = {});
            var i = this.getStopwatch(e.stopwatchName || this.GLOBAL_SW_NAME);
            if (null != i) {
                var n = {
                    traceTime: e.traceTime
                };
                return i.recordTrace(t, n)
            }
        }, t.prototype.startSpan = function(t, e) {
            void 0 === e && (e = {});
            var i = this.getStopwatch(e.stopwatchName || this.GLOBAL_SW_NAME);
            if (null != i) {
                var n = {
                    startTime: e.startTime,
                    async: e.async
                };
                return i.start(t, n)
            }
        }, t.prototype.endSpan = function(t, e) {
            void 0 === e && (e = {});
            var i = this.getStopwatch(e.stopwatchName || this.GLOBAL_SW_NAME);
            if (null != i) return i.end(t, {
                spanId: e.spanId,
                endTime: e.endTime
            })
        }, t.prototype.addSpanAnnotation = function(t, e, i, n) {
            void 0 === n && (n = {});
            var o = this.getStopwatch(n.stopwatchName || this.GLOBAL_SW_NAME);
            null != o && o.addSpanAnnotation(t, e, i, n.spanId)
        }, t.prototype.log_stored_results = function() {
            if (this.sentInitialData) return void this._report_sw_misuse("ClientStopwatch tried to log stored results, but the stopwatch is set to log immediately");
            this.flush_current_data(), this.sentInitialData = !0, this.intervalId = setInterval(this.flush_current_data.bind(this), this.flush_interval)
        }, t.prototype._report_sw_misuse = function(t) {
            t = "ClientStopwatch: " + t, this.strictAssert ? s.assert(!1, t) : s.reportStack(t, {
                severity: s.SEVERITY.NONCRITICAL,
                tags: ["log_js_stopwatch"]
            })
        }, t.prototype.flush_current_data = function() {
            for (var e in this.globalStopwatches) this.globalStopwatches.hasOwnProperty(e) && t.logStopwatchData(this.globalStopwatches[e]);
            for (var e in this.clientStopwatches) this.clientStopwatches.hasOwnProperty(e) && t.logStopwatchData(this.clientStopwatches[e].stopwatch)
        }, t.logStopwatchData = function(e) {
            var i = e.popResolvedSpans(),
                n = e.name,
                o = {};
            if (Object.keys(i).length > t.MAXSPANS) {
                var r = 0;
                o[n] = {};
                for (var a in i) i.hasOwnProperty(a) && (o[n][a] = i[a], r === t.MAXSPANS && (o[n].annotations = e.annotations, t.send_spans(o), r = 0, o[n] = {}), r++)
            } else o[n] = i;
            0 !== Object.keys(o[n]).length && (o[n].annotations = e.annotations, t.send_spans(o))
        }, t.send_spans = function(t) {
            var e = JSON.stringify(t),
                i = {
                    request_id: r.REQUEST_ID,
                    url: a.get_href().replace("/dws2", ""),
                    aggregated_sw_data: e
                };
            n.sendXhr("/log_js_sw_data", i)
        }, t.prototype.print_stopwatches_debug = function() {
            var t = this.get_debug_data();
            console.table && console.groupCollapsed && console.groupEnd && t && t.length > 0 && (console.groupCollapsed("Request timeline"), console.table(t), console.groupEnd())
        }, t.prototype.get_debug_data = function() {
            var t = [];
            for (var e in this.globalStopwatches)
                if (this.globalStopwatches.hasOwnProperty(e)) {
                    var i = this.globalStopwatches[e].peekResolvedSpans();
                    for (var n in i)
                        if (i.hasOwnProperty(n)) {
                            var r = i[n],
                                a = {
                                    stopwatchName: e,
                                    spanName: r.name,
                                    time: r.start_time + r.total_time
                                };
                            r.type !== o.TimingDataType.AsyncSpan && r.type !== o.TimingDataType.Span || (a.startTime = r.start_time), r.type === o.TimingDataType.Span && (a.info = "Total time: " + r.total_time + "ms"), t.push(a)
                        }
                }
            return t.sort(function(t, e) {
                return t.time - e.time
            }), t
        }, t.MAXSPANS = 2e3, t
    })();
    e.JSStopwatch = new u;
    var _ = (function() {
        function t(t, e, i, n, o, r) {
            this.sentInitialData = !1, this.strictAssert = !1, this.id = t, this.stopwatch = i, this._request_id = n, this._correlation_id = o, this._url = r, this._request_id && this.stopwatch.addAnnotation(c.REQUEST_ID.id, this._request_id), this._correlation_id && this.stopwatch.addAnnotation(c.CORRELATION_ID.id, this._correlation_id), this._url && this.stopwatch.addAnnotation(c.URL.id, this._url)
        }
        return Object.defineProperty(t.prototype, "request_id", {
            set: function(t) {
                this._request_id = t, this._request_id ? this.stopwatch.addAnnotation(c.REQUEST_ID.id, this._request_id) : this.stopwatch.removeAnnotation(c.REQUEST_ID.id)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "correlation_id", {
            set: function(t) {
                this._correlation_id = t, this._correlation_id ? this.stopwatch.addAnnotation(c.CORRELATION_ID.id, this._correlation_id) : this.stopwatch.removeAnnotation(c.CORRELATION_ID.id)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "url", {
            set: function(t) {
                this._url = t, this._url ? this.stopwatch.addAnnotation(c.URL.id, this._url) : this.stopwatch.removeAnnotation(c.URL.id)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.startSpan = function(t, e) {
            void 0 === e && (e = {});
            var i = {
                startTime: e.startTime,
                async: e.async
            };
            return this.stopwatch.start(t, i)
        }, t.prototype.endSpan = function(t, e) {
            return void 0 === e && (e = {}), this.stopwatch.end(t, {
                spanId: e.spanId,
                endTime: e.endTime
            })
        }, t.prototype.addSpanAnnotation = function(t, e, i, n) {
            this.stopwatch.addSpanAnnotation(t, e, i, n)
        }, t.prototype.recordTrace = function(t, e, i) {
            var n = {};
            if (i)
                for (var o in i) i.hasOwnProperty(o) && (n[o] = i[o]);
            var r = {
                traceTime: e,
                annotations: n
            };
            this.stopwatch.recordTrace(t, r)
        }, t.prototype.logData = function() {
            if (this.sentInitialData) return void this.reportMisuse("ClientStopwatch tried to log stored results, but the stopwatch is set to log immediately");
            this.stopwatch.attach(), this.sentInitialData = !0, setTimeout(function() {
                e.JSStopwatch.flush_current_data()
            }, 0)
        }, t.prototype.addAnnotation = function(t, e) {
            this.stopwatch.addAnnotation(t, e)
        }, t.prototype.removeAnnotation = function(t) {
            this.stopwatch.removeAnnotation(t)
        }, t.prototype.reportMisuse = function(t) {
            t = "ClientStopwatch: " + t, this.strictAssert ? s.assert(!1, t) : s.reportStack(t, {
                severity: s.SEVERITY.NONCRITICAL,
                tags: ["log_js_stopwatch"]
            })
        }, t
    })()
}), define("modules/clean/metrics", ["require", "exports", "apex-metrics", "modules/constants/page_load"], function(t, e, i, n) {
    "use strict";

    function o(t) {
        var e = [];
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var n = t[i].value;
                e.push({
                    name: {
                        value: {
                            ".tag": "stringValue",
                            stringValue: i
                        }
                    },
                    value: {
                        value: {
                            ".tag": "stringValue",
                            stringValue: n
                        }
                    }
                })
            }
        return e
    }

    function r(t) {
        var e = [];
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var n = t[i];
                e.push({
                    name: {
                        value: {
                            ".tag": "stringValue",
                            stringValue: i
                        }
                    },
                    data: {
                        ".tag": "numericalData",
                        samples: n
                    }
                })
            }
        return e
    }

    function a(t) {
        return new i.MetricsFactoryImpl(new s(t), new i.SetIntervalExecutor, new i.BrowserPerformanceClock)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = (function() {
        function t(t) {
            this.client = t
        }
        return t.prototype.recordMetrics = function(t) {
            if (0 !== t.length) {
                var e = Date.now(),
                    i = {};
                t.forEach(function(t) {
                    i[t.namespace] ? i[t.namespace].push(t) : i[t.namespace] = [t]
                });
                var a = [];
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var c = i[s];
                        a.push({
                            timestamp_sec: e,
                            metric_namespace: s,
                            tags: [],
                            descendants: c.map(function(t) {
                                return {
                                    tags: o(t.tags),
                                    metrics: r(t.samples)
                                }
                            })
                        })
                    }
                this.client.ns("client_metrics").rpc("record", {
                    scopes: a,
                    known_namespaces: [],
                    environment: "prod",
                    version: n.REPO_REV,
                    client_metadata: {
                        client_version: 0,
                        implementation: {
                            ".tag": "typescript"
                        }
                    },
                    trigger: {
                        ".tag": "trigger_publish"
                    }
                }, {})
            }
        }, t
    })();
    e.getMetricsFactory = a
}), define("modules/clean/perf_tools/browser_perf_utils", ["require", "exports", "tslib", "modules/core/browser", "modules/core/xhr", "modules/constants/request", "modules/clean/js_client_stopwatch", "modules/constants/webtiming"], function(t, e, i, n, o, r, a, s) {
    "use strict";

    function c(t) {
        u(t), _(t)
    }

    function u(t) {
        var e = n.performance();
        if (e && e.getEntriesByType) {
            var i = a.JSStopwatch.createDetachedStopwatch("performance_marks", t),
                o = e.getEntriesByType("mark");
            if (o instanceof Array)
                for (var r = 0, s = o; r < s.length; r++) {
                    var c = s[r];
                    i.recordTrace(c.name, c.startTime)
                }
            i.logData()
        }
    }

    function _(t) {
        var e = n.performance();
        if (e && e.timing) {
            var i = e.timing,
                c = {
                    navigation_start: i.navigationStart,
                    unload_event_start: i.unloadEventStart,
                    unload_event_end: i.unloadEventEnd,
                    redirect_start: i.redirectStart,
                    redirect_end: i.redirectEnd,
                    fetch_start: i.fetchStart,
                    domain_lookup_start: i.domainLookupStart,
                    domain_lookup_end: i.domainLookupEnd,
                    connect_start: i.connectStart,
                    secure_connect_start: i.secureConnectionStart,
                    connect_end: i.connectEnd,
                    request_start: i.requestStart,
                    response_start: i.responseStart,
                    response_end: i.responseEnd,
                    dom_loading: i.domLoading,
                    dom_interactive: i.domInteractive,
                    dom_content_loaded_event_start: i.domContentLoadedEventStart,
                    dom_content_loded_event_end: i.domContentLoadedEventEnd,
                    dom_complete: i.domComplete,
                    load_event_start: i.loadEventStart,
                    load_event_end: i.loadEventEnd
                },
                u = {};
            u.request_id = r.REQUEST_ID, u.referrer = document.referrer;
            var _ = a.JSStopwatch.createDetachedStopwatch("browser_perf", t);
            for (var l in c) c.hasOwnProperty(l) && (u[l] = c[l], c[l] && _.recordTrace(l, c[l] - i.navigationStart));
            _.logData(), s.LOG_BROWSER_PERFORMANCE_INFO && o.sendXhr("/alternate_wtl_browser_performance_info", u)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n = i.__importStar(n), o = i.__importStar(o), r = i.__importStar(r), s = i.__importStar(s), e.logBrowserPerfData = c, e.logBrowserPerformanceInfo = _
}), define("modules/clean/perf_tools/cpu_utils", ["require", "exports", "modules/clean/js_client_stopwatch"], function(t, e, i) {
    "use strict";

    function n() {
        var t = [];
        return window.ensemble && window.ensemble.getJSStopwatchData && (t = t.concat(a(window.ensemble.getJSStopwatchData()).map(function(t) {
            return t.measurement
        }))), window.requireContexts && (t = t.concat(r(window.requireContexts))), t
    }

    function o(t) {
        if (t.require && t.require.perfMeasurements) {
            var e = 0;
            return t.require.perfMeasurements.map(function(t) {
                var i = t.name,
                    n = t.startTime,
                    o = t.totalTime;
                return i.endsWith("anon") && (i += "-" + e++), {
                    jsExecutionType: c(i),
                    name: i,
                    startTime: n,
                    totalTime: o
                }
            })
        }
        var i = t.module_callback_times;
        return Object.keys(i).filter(function(t) {
            return i[t].callbackDuration && i[t].callbackTime
        }).map(function(t) {
            return {
                jsExecutionType: c(t),
                name: t,
                startTime: i[t].callbackTime,
                totalTime: i[t].callbackDuration
            }
        })
    }

    function r(t) {
        var e = [];
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var n = t[i];
                e = e.concat(o(n))
            }
        return e
    }

    function a(t) {
        return Object.keys(t).map(function(e) {
            var i = t[e];
            return {
                measurement: {
                    jsExecutionType: s(e),
                    name: e,
                    startTime: i.start,
                    totalTime: i.end - i.start
                },
                annotations: i.annotations
            }
        })
    }

    function s(t) {
        return t.startsWith("dws-processChunk") ? p.DWS : p.UNKNOWN
    }

    function c(t) {
        return t.startsWith("execCb.anon") || t.startsWith("overhead.anon") || t.startsWith("execCb.require-tier") || t.startsWith("overhead.require-tier") ? p.OTHER : t.startsWith("execCb") || t.startsWith("overhead") ? p.MODULE : p.UNKNOWN
    }

    function u(t, e) {
        var i = {},
            n = function(n) {
                if (t.hasOwnProperty(n)) {
                    var o = t[n];
                    i[n] = {}, e.forEach(function(t) {
                        0 < t.startTime && t.startTime < o && (i[n][t.jsExecutionType] = i[n][t.jsExecutionType] || 0, i[n][t.jsExecutionType] += t.totalTime)
                    })
                }
            };
        for (var o in t) n(o);
        return i
    }

    function _(t, e) {
        var n = i.JSStopwatch.createDetachedStopwatch("cumulative_cpu_time", t),
            o = function(t) {
                e.hasOwnProperty(t) && d.forEach(function(i) {
                    n.recordTrace("cpu_before_" + t + "_due_to_" + i, e[t][i] || 0)
                })
            };
        for (var r in e) o(r);
        n.logData()
    }

    function l(t, e) {
        _(t, u(e, n()))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var p;
    (function(t) {
        t.DWS = "dws", t.MODULE = "module", t.OTHER = "other", t.UNKNOWN = "unknown"
    })(p = e.JSExecutionType || (e.JSExecutionType = {}));
    var d = [p.DWS, p.MODULE, p.OTHER, p.UNKNOWN];
    e.listExecutionPerfMeasurementsForRequireContexts = r, e.listAnnotatedExecutionPerfMeasurementsForEnsemble = a, e.cumulativeExecutionTimesBefore = u, e.logCumulativeExecutionTimes = _, e.logAllGlobalCumulativeExecutionTimesByStageAndExecutionType = l
}), define("modules/clean/perf_tools/resource_utils", ["require", "exports", "tslib", "modules/core/browser", "modules/clean/js_client_stopwatch", "modules/clean/perf_tools/cpu_utils"], function(t, e, i, n, o, r) {
    "use strict";

    function a(t) {
        u(t), c(t)
    }

    function s(t) {
        if (m) {
            if (m.href = t.name, m.host.match(/dropboxstatic.com$/) && m.pathname.match(/^\/static/)) {
                var e = m.pathname,
                    i = e.match(/vfl[a-zA-Z0-9]*\.[a-z]*$/);
                i && i.index && (e = e.substring(0, i.index - 1));
                for (var n = ["/static/compiled/js/", "/static/"], o = 0, r = n; o < r.length; o++) {
                    var a = r[o];
                    e.startsWith(a) && (e = e.substring(a.length))
                }
                return e
            }
            return m.host.match(/photos-[0-9]+.dropbox.com$/) && m.pathname.match(/^\/t\/2/) ? "/thumbnail" : void 0
        }
    }

    function c(t) {
        var e = n.performance();
        if (e && e.getEntriesByType) {
            var i = o.JSStopwatch.createDetachedStopwatch("resource_timeline", t),
                r = {},
                a = e.getEntriesByType("resource");
            if (a instanceof Array)
                for (var c = 0, u = a; c < u.length; c++) {
                    var _ = u[c],
                        l = s(_);
                    if (l) {
                        var d = r[l] || 0;
                        r[l] = d + 1, d > 0 && (l = l + "-" + d);
                        var m = i.startSpan(l, {
                                startTime: _.startTime,
                                async: !0
                            }),
                            h = p(_);
                        i.addSpanAnnotation(l, "type", h, m), 0 === _.transferSize ? i.addSpanAnnotation(l, "cached", "true", m) : void 0 === _.transferSize ? i.addSpanAnnotation(l, "cached", "unknown", m) : i.addSpanAnnotation(l, "cached", "false", m), _.responseEnd < _.startTime ? (i.addSpanAnnotation(l, "negativeSpanLength", (_.responseEnd - _.startTime).toString(), m), i.endSpan(l, {
                            endTime: _.startTime,
                            spanId: m
                        })) : i.endSpan(l, {
                            endTime: _.responseEnd,
                            spanId: m
                        })
                    }
                }
            i.logData()
        }
    }

    function u(t) {
        var e = window.requireContexts;
        if (e) {
            var i = r.listExecutionPerfMeasurementsForRequireContexts(e),
                n = o.JSStopwatch.createDetachedStopwatch("resource_init_timeline", t);
            i.forEach(function(t) {
                var e = n.startSpan(t.name, {
                    startTime: t.startTime
                });
                n.addSpanAnnotation(t.name, "totalTimeNs", Math.round(1e6 * t.totalTime).toString(), e), n.endSpan(t.name, {
                    endTime: t.startTime + t.totalTime,
                    spanId: e
                })
            }), n.logData()
        }
    }

    function _(t) {
        var e = n.performance();
        if (e && e.getEntriesByType) {
            var i = e.getEntriesByType("resource").filter(function(e) {
                    return e.name.indexOf(t) !== -1
                }),
                r = i[0];
            if (r && r.responseEnd) {
                var a = "resource_response_end_" + t;
                return o.JSStopwatch.create_stopwatch_if_not_exist("resource_timing"), o.JSStopwatch.recordTrace(a, {
                    stopwatchName: "resource_timing",
                    traceTime: r.responseEnd
                }), r
            }
        }
    }

    function l(t) {
        void 0 === t && (t = void 0);
        var e = {};
        e.pre = {}, e.total = {};
        var i = n.performance();
        if (!i) return e;
        var r = i.getEntriesByType("resource");
        if (o.JSStopwatch.create_stopwatch_if_not_exist("resource_timeline"), r instanceof Array)
            for (var a = (function(i) {
                    var n = p(i),
                        o = [];
                    if (t && i.responseEnd <= t) {
                        var r = e.pre;
                        n in r || (r[n] = {
                            count: 0,
                            total_time: 0,
                            last_transfer_end: 0
                        }), o.push(r[n])
                    }
                    n in e.total || (e.total[n] = {
                        count: 0,
                        total_time: 0,
                        last_transfer_end: 0
                    }), o.push(e.total[n]), o.forEach(function(t) {
                        t.count++, t.total_time += i.duration, t.last_transfer_end = Math.max(t.last_transfer_end, i.responseEnd), d(n) && void 0 !== i.transferSize && void 0 !== i.encodedBodySize && (t.total_size = t.total_size || 0, t.transfer_size = t.transfer_size || 0, 0 !== i.transferSize && (t.transfer_size += i.encodedBodySize), t.total_size = t.total_size || 0, t.total_size += i.encodedBodySize)
                    })
                }), s = 0, c = r; s < c.length; s++) {
                var u = c[s];
                a(u)
            }
        return e
    }

    function p(t) {
        var e = t.name,
            i = t.initiatorType,
            n = e.lastIndexOf(".");
        if (n > 0) {
            var o = e.substring(n);
            if ([".png", ".gif", ".jpg", ".svg"].indexOf(o) > -1) return "img";
            if (".js" === o) return "script";
            if (".css" === o) return "css"
        }
        return ["css", "img", "script", "link"].indexOf(i) === -1 ? "xmlhttprequest" === i ? "ajax" : "other" : i
    }

    function d(t) {
        return "css" === t || "script" === t || "img" === t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n = i.__importStar(n), r = i.__importStar(r), e.logResourcesData = a;
    var m = document && document.createElement ? document.createElement("a") : null;
    e.logResourceTiming = _, e.getResourceSummary = l
}), define("modules/clean/perf_tools/web_timing_logger_types", ["require", "exports"], function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = (function() {
        function t() {}
        return t.getFromNavigation = function(e) {
            switch (e.type) {
                case e.TYPE_NAVIGATE:
                    return t.NAVIGATE;
                case e.TYPE_RELOAD:
                    return t.RELOAD;
                case e.TYPE_BACK_FORWARD:
                    return t.BACK_FORWARD
            }
        }, t.NAVIGATE = "navigate", t.RELOAD = "reload", t.BACK_FORWARD = "back_forward", t
    })();
    e.NavigationType = i;
    var n = (function() {
        function t(e, i, n, o, r) {
            void 0 === n && (n = !1), void 0 === o && (o = !0), this.name = e, this.flag = 1 << i, this.triggersLogging = n, this.timestampPrefix = r || e, this.ordered = o, t.allEvents.push(this)
        }
        return t.allEvents = [], t.APPLICATION_START = new t("application_code_start", 1), t.LOAD_END = new t("load_end", 2, !0, !1), t.MARK_TIME_TO_VIEW = new t("mark_time_to_view", 3, !0, !0, "TTV"), t.FETCHED_DATA_FOR_TTI = new t("fetched_data_required_for_tti", 4), t.MARK_TIME_TO_INTERACTIVE = new t("mark_time_to_interactive", 5), t.TIME_TO_INTERACTIVE = new t("time_to_interactive", 6, !0, !0, "TTI"), t
    })();
    e.WebTimerEvent = n
}), define("modules/clean/perf_tools/web_timing_utils", ["require", "exports", "tslib", "modules/core/browser"], function(t, e, i, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n = i.__importStar(n);
    var o = (function() {
        function t() {}
        return t.generateCorrelationId = function() {
            return Math.random().toString(36).substring(2)
        }, t.getNow = function() {
            var t = n.performance();
            if (t && t.timing && t.now) {
                var e = t.timing;
                return (e.navigationStart || e.fetchStart) + Math.floor(t.now())
            }
            return Date.now()
        }, t.newContext = function(e, i) {
            void 0 === i && (i = "unnamed_timer");
            var o;
            if (e) o = t.getNow();
            else {
                var r = n.performance();
                if (r && r.timing) {
                    var a = r.timing;
                    o = a.navigationStart || a.fetchStart
                } else o = t.getNow()
            }
            return {
                initialized: !1,
                is_pagelet: !1,
                is_dws: !1,
                is_dws2: !1,
                is_early_ensemble: !1,
                is_page_restore: !1,
                log_time_to_view: !1,
                log_time_to_interactive: !1,
                ttv_at_dom_interactive: !1,
                tti_at_dom_interactive: !1,
                source_type: "web",
                subtypes: {},
                tti_exclusion_flow: "",
                have_logged_web_timing: !1,
                delayed_tti_for_css: !1,
                timing_results: null,
                start_time: o,
                time_to_view: null,
                time_to_interactive: null,
                correlation_id: t.generateCorrelationId(),
                timesStagesWereReached: {},
                context_name: i
            }
        }, t
    })();
    e.WebTimingUtil = o;
    var r = (function() {
        function t(t) {
            this.canceled = !1, this.callback = t
        }
        return t.prototype.exec = function() {
            this.canceled || this.callback()
        }, t.prototype.cancel = function() {
            this.canceled = !0
        }, t.prototype.isCanceled = function() {
            return this.canceled
        }, t
    })();
    e.CancellableCallback = r
}), define("modules/clean/web_module_timing", ["require", "exports", "modules/pagelet_config"], function(t, e, i) {
    "use strict";

    function n() {
        var t = i.REQUIREJS_CONTEXT_NAME,
            e = window.requireContexts[t].module_callback_times,
            n = [];
        for (var o in e)
            if (e.hasOwnProperty(o)) {
                var r = e[o];
                if (null != r.loadTime) {
                    var a = {
                        load_time: r.loadTime,
                        callback_duration: r.callbackDuration,
                        callback_time: r.callbackTime,
                        name: r.name,
                        url: r.url,
                        parent: r.parent
                    };
                    n.push(a)
                }
            }
        return n
    }

    function o() {}
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.get_module_times = n, e.add_module = o
}), define("modules/clean/web_timing_logger", ["require", "exports", "tslib", "apex-metrics", "modules/clean/metrics", "modules/clean/devtools/panels/performance/perf_hub_actions", "modules/clean/event_load", "modules/clean/api_v2/noauth_client", "modules/clean/web_module_timing", "modules/clean/window_util", "modules/clean/perf_tools/resource_utils", "modules/clean/perf_tools/web_timing_logger_types", "modules/clean/perf_tools/web_timing_utils", "modules/clean/js_client_stopwatch", "modules/clean/perf_tools/browser_perf_utils", "modules/clean/init_react", "modules/clean/perf_tools/cpu_utils", "modules/constants/request", "modules/constants/webtiming", "modules/constants/page_load", "modules/core/browser", "modules/core/browser_detection", "modules/core/exception", "modules/core/xhr"], function(t, e, i, n, o, r, a, s, c, u, _, l, p, d, m, h, f, v, g, w, S, T, y, E) {
    "use strict";

    function b() {
        return "hidden" === window.document.visibilityState
    }

    function x(t, e, i) {
        var o = T.get_browser_info(),
            r = i.createScopedMetrics(n.createNamespace("web_perf"));
        r.addTag(n.createTagName("browser"), n.createTagValue(o.browser)), r.addTag(n.createTagName("is_pagelet"), n.createTagValue(JSON.stringify(t.is_pagelet))), e.navigation_type && r.addTag(n.createTagName("navigation_type"), n.createTagValue(e.navigation_type)),
            e.resource_script_count && r.recordSample(n.createMetricName("temp/resource-script-count"), e.resource_script_count), e.time_to_interactive && r.recordTime(n.createMetricName("temp/time-to-interactive"), e.time_to_interactive, n.TimeUnit.MILLISECONDS), r.close()
    }

    function I(t, e) {
        for (var i = {}, n = 0, o = Z; n < o.length; n++) {
            var r = o[n],
                a = e[r];
            a && (i[r] = String(a))
        }
        for (var s = t, c = 0, u = $; c < u.length; c++) {
            var r = u[c],
                a = s[r];
            a && (i[r] = String(a))
        }
        return {
            correlation_id: t.correlation_id,
            request_id: e.request_id,
            annotations: i
        }
    }

    function A(t, e) {
        if (e.annotations)
            for (var i in e.annotations)
                if (e.annotations.hasOwnProperty(i)) {
                    var n = e.annotations[i];
                    n && t.addAnnotation(i, String(n))
                }
        e.correlation_id && t.addAnnotation(d.ReservedAnnotationKey.CORRELATION_ID.id, e.correlation_id), e.request_id && t.addAnnotation(d.ReservedAnnotationKey.REQUEST_ID.id, e.request_id), e.url && t.addAnnotation(d.ReservedAnnotationKey.URL.id, e.url)
    }

    function N(t) {
        var e = t;
        return ut[e] || (ut[e] = new st(p.WebTimingUtil.newContext(!0, t))), ut[e]
    }

    function O(t) {
        return t ? N(t) : _t
    }

    function R(t) {
        delete ut[t]
    }

    function D() {
        return O().timeToView()
    }

    function C() {
        return O().timeToInteractive()
    }

    function M(t) {
        void 0 === t && (t = {}), O().initialize({
            requireTTV: !!t.log_time_to_view,
            requireTTI: !!t.log_time_to_interactive,
            is_pagelet: t.is_pagelet,
            is_dws: t.is_dws,
            is_dws2: t.is_dws2,
            is_early_ensemble: t.is_early_ensemble,
            ttv_at_dom_interactive: t.ttv_at_dom_interactive,
            tti_at_dom_interactive: t.tti_at_dom_interactive,
            source_type: t.source_type,
            subtypes: t.subtypes,
            tti_exclusion_flow: t.tti_exclusion_flow,
            url: t.url
        })
    }

    function k() {
        _t = new ct(p.WebTimingUtil.newContext(!1, "default_timer"))
    }

    function W() {
        return O().startTime()
    }

    function P() {
        return O().timeSinceStart()
    }

    function L(t) {
        O().excludeFromTTI(t)
    }

    function q(t, e) {
        for (var i = 0, n = e; i < n.length; i++) {
            var o = n[i];
            if (0 !== o.startTime) {
                var r = t.startSpan(o.name, {
                    startTime: o.startTime
                });
                if (void 0 !== o.annotations)
                    for (var a in o.annotations) o.annotations.hasOwnProperty(a) && t.addSpanAnnotation(o.name, a, o.annotations[a], r);
                o.endTime < o.startTime ? (t.addSpanAnnotation(o.name, "negativeSpanLength", (o.endTime - o.startTime).toString(), r), t.endSpan(o.name, {
                    spanId: r,
                    endTime: o.startTime
                })) : t.endSpan(o.name, {
                    spanId: r,
                    endTime: o.endTime
                })
            } else t.recordTrace(o.name, o.endTime, o.annotations)
        }
        t.logData()
    }

    function U(t, e) {
        if (window.ensemble && window.ensemble.getJSStopwatchData) {
            var i = window.ensemble.getJSStopwatchData(),
                n = j(e, i),
                o = void 0,
                r = void 0;
            for (var a in i) i.hasOwnProperty(a) && (lt.includes(a) && (t.timesStagesWereReached[a] = i[a].start), ["ensemble_init", "dws_embedded-app_require_config_callback"].includes(a) && (o = o ? Math.min(o, i[a].end) : i[a].end), pt.test(a) && (r = r ? Math.max(r, i[a].end) : i[a].end));
            r && n.recordTrace("last_js_const_end", r), o && n.recordTrace("module_init", o)
        }
    }

    function j(t, e) {
        var i = f.listAnnotatedExecutionPerfMeasurementsForEnsemble(e),
            n = d.JSStopwatch.createDetachedStopwatch("ensemble", t);
        return q(n, i.map(function(t) {
            var e = t.measurement,
                i = t.annotations;
            return {
                name: e.name,
                startTime: e.startTime,
                endTime: e.startTime + e.totalTime,
                annotations: i
            }
        })), n
    }

    function V(t) {
        var e = h.getReactInitData();
        q(d.JSStopwatch.createDetachedStopwatch("init_react", t), e)
    }

    function J() {
        O().markTimeToView()
    }

    function B(t) {
        void 0 === t && (t = {});
        var e = O();
        e.setExtraColumns(t), e.markTimeToInteractive()
    }

    function z(t) {
        return O().waitForTTI(t)
    }

    function F() {
        O().applicationStart()
    }

    function G() {
        O().fetchedDataRequiredForTTI()
    }

    function K(t) {
        var e = _.getResourceSummary().total;
        for (var i in e) e.hasOwnProperty(i) && (t["resource_" + i + "_count"] = e[i].count, t["resource_" + i + "_avg_time"] = e[i].total_time / e[i].count || 1, void 0 !== e[i].total_size && (t["resource_" + i + "_total_size"] = e[i].total_size), void 0 !== e[i].transfer_size && (t["resource_" + i + "_transfer_size"] = e[i].transfer_size))
    }

    function H(t, e) {
        var i = d.JSStopwatch.createDetachedStopwatch("resources_percent_transferred", e),
            n = _.getResourceSummary(t);
        for (var o in n)
            if (n.hasOwnProperty(o)) {
                var r = n[o];
                for (var a in r)
                    if (r.hasOwnProperty(a)) {
                        var s = r[a].transfer_size,
                            c = r[a].total_size,
                            u = r[a].count,
                            l = r[a].total_time;
                        if (i.recordTrace(o + "_" + a + "_count", u), i.recordTrace(o + "_" + a + "_total_time", l), void 0 !== s && void 0 !== c && c > 0) {
                            var p = s / c;
                            i.recordTrace(o + "_" + a + "_transferred_size", s), i.recordTrace(o + "_" + a + "_total_size", c), i.recordTrace(o + "_percent_" + a + "_transferred", 100 * p)
                        }
                        i.recordTrace(o + "_last_" + a + "_transfer_end", r[a].last_transfer_end)
                    }
            }
        i.logData()
    }

    function Y(t) {
        var e = S.performance();
        if (e && e.getEntriesByName) {
            for (var i = c.get_module_times(), n = [], o = 0, r = i; o < r.length; o++) {
                var a = r[o],
                    s = a.url;
                if (void 0 === s && a.name && a.name.indexOf("!") === -1) y.reportStack("Module " + a.name + " with invalid map object fetched by requirejs", {
                    severity: y.SEVERITY.NONCRITICAL,
                    tags: ["log_js_module_timing"]
                });
                else {
                    var u = [];
                    if (s && (u = e.getEntriesByName(s, "resource")), 0 !== u.length) a.start_time = u[0].startTime + u[0].duration;
                    else {
                        if (!("callback_duration" in a)) continue;
                        a.start_time = 0
                    }
                    n.push(a)
                }
            }
            t.js_module_times = JSON.stringify(n)
        }
    }

    function Q(t) {
        if (window.ensemble && window.ensemble.markTTI) window.ensemble.markTTI();
        else {
            var e = document.createEvent("Event");
            void 0 != t ? e.initEvent("TTI." + t, !0, !0) : e.initEvent("TTI", !0, !0), window.dispatchEvent(e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), a = i.__importStar(a), u = i.__importStar(u), f = i.__importStar(f), v = i.__importStar(v), g = i.__importStar(g), w = i.__importStar(w), S = i.__importStar(S), y = i.__importStar(y), E = i.__importStar(E);
    var X;
    (function(t) {
        t[t.NEW = 1] = "NEW", t[t.RUNNING = 2] = "RUNNING", t[t.ABORTED = 3] = "ABORTED", t[t.CLOSED = 4] = "CLOSED"
    })(X || (X = {})), e.perfHubClassName = "perf-hub-link-container";
    var Z = ["navigation_type", "referrer", "repo_rev", "source_type", "active_user_id"],
        $ = ["tti_flow", "tti_exclusion_flow", "is_dws2"],
        tt = [
            [l.WebTimerEvent.APPLICATION_START, l.WebTimerEvent.MARK_TIME_TO_VIEW, l.WebTimerEvent.FETCHED_DATA_FOR_TTI, l.WebTimerEvent.MARK_TIME_TO_INTERACTIVE],
            [l.WebTimerEvent.TIME_TO_INTERACTIVE]
        ].reverse(),
        et = 1,
        it = (function() {
            function t() {
                d.JSStopwatch.create_stopwatch_if_not_exist("web_timing_logger"), this.metricsFactory = o.getMetricsFactory(new s.NoAuthApiV2Client)
            }
            return t.prototype.buildBaseParams = function(t, e, i) {
                void 0 === i && (i = {});
                var n = t.start_time,
                    o = t.subtypes || {};
                t.tti_flow && (o.tti_flow = t.tti_flow);
                var r = {
                    log_source: e.name,
                    subtypes: JSON.stringify(o),
                    correlation_id: t.correlation_id
                };
                t.extra_columns && Object.keys(t.extra_columns).forEach(function(e) {
                    var i = t.extra_columns[e];
                    i && (r[e] = i)
                }), Object.keys(i).forEach(function(t) {
                    var e = i[t];
                    e && (r[t] = e)
                }), v.IS_HTTP2 && (r.is_spdy = !0), t.is_pagelet && (r.is_pagelet = !0), t.is_dws && (r.is_dws = !0), t.is_early_ensemble && (r.is_early_ensemble = !0), r.delayed_tti_for_css = t.delayed_tti_for_css, "" !== t.tti_exclusion_flow && (r.tti_exclusion_flow = t.tti_exclusion_flow);
                var a;
                a = t.log_time_to_view && null != t.time_to_view ? t.time_to_view - n : null;
                var s;
                s = t.log_time_to_interactive && null != t.time_to_interactive ? t.time_to_interactive - n : null;
                var c = {
                    navigation_type: t.is_page_restore ? l.NavigationType.RELOAD : this.get_navigation_type(),
                    server_request_start_time: v.REQUEST_START_TIME,
                    extra_columns: JSON.stringify(r),
                    subtypes: JSON.stringify(o),
                    source_type: t.source_type,
                    page_load_time: t.end_time - t.start_time
                };
                if (Y(c), c.repo_rev = w.REPO_REV, t.log_time_to_view && (c.time_to_view = a), t.log_time_to_interactive && (c.time_to_interactive = s), c.url = S.get_href().replace("/dws2", ""), c.referrer = document.referrer, c.request_id = t.request_id || v.REQUEST_ID, c.request_tracing_enabled = v.REQUEST_TRACING_ENABLED, window.ensemble && window.ensemble.viewer) {
                    var u = window.ensemble.viewer.getActiveUser();
                    u && (c.active_user_id = u.userId)
                }
                return c
            }, t.prototype.get_navigation_type = function() {
                var t = S.performance();
                if (t && t.navigation) {
                    var e = t.navigation;
                    return l.NavigationType.getFromNavigation(e)
                }
            }, t.prototype.log = function(t, i, n) {
                void 0 === n && (n = !1), x(t, i, this.metricsFactory);
                var o = d.JSStopwatch.startSpan("wtl_endpoint", {
                    stopwatchName: "web_timing_logger"
                });
                d.JSStopwatch.addSpanAnnotation("wtl_endpoint", "navigation_type", i.navigation_type, {
                    stopwatchName: "web_timing_logger",
                    spanId: o
                });
                var a = E.sendXhr("/alternate_wtl", i);
                a.onreadystatechange = function(t) {
                    if (a.readyState === XMLHttpRequest.DONE && 200 === a.status) {
                        d.JSStopwatch.endSpan("wtl_endpoint", {
                            stopwatchName: "web_timing_logger",
                            spanId: o
                        });
                        var i = document.getElementsByClassName(e.perfHubClassName);
                        if (n && i.length) {
                            var s = JSON.parse(a.responseText);
                            s.status && r.PerfHubActions.add_web_timing_details(s)
                        }
                    }
                }
            }, t
        })(),
        nt = (function(t) {
            function e() {
                return t.call(this) || this
            }
            return i.__extends(e, t), e.prototype.shouldLog = function(t) {
                return t.initialized && !t.have_logged_web_timing && void 0 !== t.end_time && (!t.log_time_to_view || null != t.time_to_view) && (!t.log_time_to_interactive || null != t.time_to_interactive)
            }, e.prototype.logTiming = function(t, e) {
                t.have_logged_web_timing = !0;
                var i = this.buildBaseParams(t, e),
                    n = I(t, i);
                return this.log(t, i, !1), n
            }, e.prototype.get_navigation_type = function() {
                return "ajax"
            }, e
        })(it),
        ot = (function(t) {
            function e() {
                return t.call(this) || this
            }
            return i.__extends(e, t), e.prototype.shouldLog = function(t) {
                if (!t.initialized || t.have_logged_web_timing) return !1;
                var e = S.performance();
                if (!e || !e.timing) return !1;
                var i = e.timing,
                    n = t.start_time,
                    o = t.end_time;
                return !(!n || !o) && (!(t.log_time_to_view && !(t.ttv_at_dom_interactive && i.domInteractive || null != t.time_to_view)) && !(t.log_time_to_interactive && !(t.tti_at_dom_interactive && i.domInteractive || null != t.time_to_interactive)))
            }, e.prototype.logTiming = function(t, e) {
                var i = S.performance().timing;
                d.JSStopwatch.startSpan("process_nav_timing", {
                    stopwatchName: "web_timing_logger"
                });
                var n = {},
                    o = this.buildBaseParams(t, e, n),
                    r = I(t, o);
                if (o.browser_time = (i.redirectStart || i.fetchStart) - t.start_time, o.redirect_time = i.fetchStart - t.start_time, o.dns_time = i.domainLookupEnd - t.start_time, o.tcp_connect_time = (i.secureConnectionStart || i.requestStart) - t.start_time, o.ssl_connect_time = i.requestStart - t.start_time, o.time_to_first_byte = i.responseStart - t.start_time, o.time_to_last_byte = i.responseEnd - t.start_time, o.dom_load_time = i.domContentLoadedEventEnd - t.start_time, o.idle_cpu_time = t.timing_results ? Math.round(t.timing_results.idleCPUTime) : void 0, o.total_tracked_cpu_time = t.timing_results ? Math.round(t.timing_results.totalTrackedCPUTime) : void 0, o.untracked_time_after_first_byte = t.timing_results && null != t.timing_results.untrackedTimeAfterFirstByte ? Math.round(t.timing_results.untrackedTimeAfterFirstByte) : void 0, S.performance().getEntriesByType) {
                    K(o);
                    var a = t.timesStagesWereReached["dws_embedded-app_require_config_callback"];
                    void 0 === a ? a = t.timesStagesWereReached.application_code_start : t.timesStagesWereReached.hasOwnProperty("application_code_start") && (a = Math.min(a, t.timesStagesWereReached.application_code_start)), H(a, r), d.JSStopwatch.addSpanAnnotation("process_nav_timing", "logged_resources", "1", {
                        stopwatchName: "web_timing_logger"
                    })
                }
                return Y(o), d.JSStopwatch.addSpanAnnotation("process_nav_timing", "logged_modules", "1", {
                    stopwatchName: "web_timing_logger"
                }), d.JSStopwatch.endSpan("process_nav_timing", {
                    stopwatchName: "web_timing_logger"
                }), t.is_pagelet && U(t, r), m.logBrowserPerfData(r), f.logAllGlobalCumulativeExecutionTimesByStageAndExecutionType(r, t.timesStagesWereReached), (this.get_navigation_type() === l.NavigationType.NAVIGATE || g.LOG_NON_NAVIGATION_RESOURCES) && (V(r), _.logResourcesData(r)), d.JSStopwatch.log_stored_results(), t.have_logged_web_timing = !0, this.log(t, o, !0), r
            }, e
        })(it),
        rt = (function() {
            function t(t, e, i, n) {
                this.childSpans = [], this.spanName = t, this.startTime = void 0 !== i ? i : p.WebTimingUtil.getNow(), this.originTs = e, this.startTimeOffsetMS = this.startTime - e, this.endCallback = n
            }
            return t.prototype.startSpan = function(e) {
                var i = new t(e, this.originTs);
                return this.childSpans.push(i), i
            }, t.prototype.markSpan = function(e, i) {
                var n = new t(e, this.originTs, this.startTime);
                this.childSpans.push(n), n.endSpan(i)
            }, t.prototype.endSpan = function(t) {
                var e = this;
                this.endTime = void 0 !== t ? t : p.WebTimingUtil.getNow(), this.childSpans.forEach(function(t) {
                    t.hasEnded() || t.endSpan(e.endTime)
                }), this.endCallback && this.endCallback(this)
            }, t.prototype.getEndTimeOffsetMS = function() {
                return void 0 !== this.endTime ? this.endTime - this.originTs : void 0
            }, t.prototype.hasEnded = function() {
                return void 0 !== this.endTime
            }, t
        })(),
        at = (function() {
            function t(t, e, i, n) {
                void 0 === n && (n = !1), this.timerState = X.RUNNING, this.loggedEvents = 0, this.activeSpans = [], this.endedSpans = [], this.context = t, this.timingStopwatch = e, this.userStopwatch = i, this.id = et++, this.strictAssert = n
            }
            return t.prototype.startSpan = function(t) {
                var e = this,
                    i = new rt(t, this.context.start_time, void 0, function(t) {
                        e.endSpan(t)
                    });
                return this.activeSpans.push(i), i
            }, t.prototype.markSpan = function(t, e) {
                if (void 0 === e && (e = {}), this.userStopwatch) {
                    var i = void 0 === e.startTime ? 0 : e.startTime,
                        n = this.timeSinceStart(e.endTime),
                        o = this.userStopwatch.startSpan(t, {
                            startTime: i
                        });
                    this.userStopwatch.endSpan(t, {
                        spanId: o,
                        endTime: n
                    })
                } else {
                    var r = new rt(t, this.context.start_time, e.startTime);
                    r.endSpan(e.endTime), this.endedSpans.push(r)
                }
            }, t.prototype.endSpan = function(t) {
                var e = this.activeSpans.indexOf(t);
                e >= 0 && (delete this.activeSpans[e], this.userStopwatch ? this.recordSpan(t) : this.endedSpans.push(t))
            }, t.prototype.recordSpan = function(t) {
                var e = this,
                    i = this.userStopwatch.startSpan(t.spanName, {
                        startTime: t.startTimeOffsetMS
                    });
                t.childSpans.forEach(function(t) {
                    e.recordSpan(t)
                }), this.userStopwatch.endSpan(t.spanName, {
                    spanId: i,
                    endTime: t.getEndTimeOffsetMS()
                })
            }, t.prototype.getContextName = function() {
                return this.context.context_name
            }, t.prototype.applicationStart = function() {
                this.logEvent(l.WebTimerEvent.APPLICATION_START)
            }, t.prototype.fetchedDataRequiredForTTI = function() {
                this.logEvent(l.WebTimerEvent.FETCHED_DATA_FOR_TTI)
            }, t.prototype.startTime = function() {
                return this.context.start_time
            }, t.prototype.timeSinceStart = function(t) {
                return (t || p.WebTimingUtil.getNow()) - this.context.start_time
            }, t.prototype.timeToView = function() {
                return this.context.time_to_view
            }, t.prototype.timeToInteractive = function() {
                return this.context.time_to_interactive
            }, t.prototype.reportTTIAfterPaint = function() {
                var t = this,
                    e = new p.CancellableCallback(function() {
                        t.reportTTI()
                    });
                return window.requestAnimationFrame(function() {
                    window.requestAnimationFrame(function() {
                        e.exec()
                    })
                }), e
            }, t.prototype.setExtraColumns = function(t) {
                this.context.extra_columns = t
            }, t.prototype.excludeFromTTI = function(t) {
                "" !== this.context.tti_exclusion_flow && (this.context.tti_exclusion_flow = this.context.tti_exclusion_flow + ","), this.context.tti_exclusion_flow = this.context.tti_exclusion_flow + t
            }, t.prototype.logEvent = function(t, e) {
                this.logEventInternal(t, !0, e)
            }, t.prototype.logSilentEvent = function(t, e) {
                this.logEventInternal(t, !1, e)
            }, t.prototype.logEventInternal = function(t, e, i) {
                this.loggedEvents |= t.flag, t.ordered && this.validateEventOrder(t);
                var n = this.timeSinceStart(i);
                this.context.timesStagesWereReached[t.name] = n, this.timingStopwatch.recordTrace(t.name, n), console.timeStamp && console.timeStamp(t.timestampPrefix), e && t.triggersLogging && this.logIfReady(t)
            }, t.prototype.validateEventOrder = function(t) {
                for (var e = 0, i = 0, n = tt; i < n.length; i++) {
                    var o = n[i];
                    if (o.includes(t)) break;
                    for (var r = 0, a = o; r < a.length; r++) {
                        e |= a[r].flag
                    }
                }
                var s = e & this.loggedEvents;
                if (s > 0) {
                    var c = l.WebTimerEvent.allEvents.filter(function(t) {
                        return (t.flag & s) > 0
                    }).map(function(t) {
                        return t.name
                    });
                    this.reportSwMisuse("Received " + t.name + " after [" + c.join(",") + "]")
                }
            }, t.prototype.logIfReady = function(t) {
                if (this.logger.shouldLog(this.context)) {
                    this.addEventBasedTiming();
                    var e = this.logger.logTiming(this.context, t);
                    A(this.timingStopwatch, e), A(this.userStopwatch, e), this.timingStopwatch.logData(), this.userStopwatch.logData(), this.timerState = X.CLOSED
                }
            }, t.prototype.addEventBasedTiming = function() {
                var t = S.performance().timing;
                this.context.ttv_at_dom_interactive && (this.context.is_pagelet && window.ensemble ? this.context.time_to_view = window.ensemble.getEmbeddedAppDOMInteractive() : this.context.time_to_view = t.domInteractive, this.logSilentEvent(l.WebTimerEvent.MARK_TIME_TO_VIEW, this.context.time_to_view)), this.context.tti_at_dom_interactive && (this.context.time_to_interactive = t.domInteractive, this.logSilentEvent(l.WebTimerEvent.MARK_TIME_TO_INTERACTIVE, this.context.time_to_interactive), this.logSilentEvent(l.WebTimerEvent.TIME_TO_INTERACTIVE, this.context.time_to_interactive))
            }, t.prototype.reportSwMisuse = function(t) {
                t = "WebTimer: " + t, this.strictAssert ? y.assert(!1, t) : y.reportStack(t, {
                    severity: y.SEVERITY.NONCRITICAL,
                    tags: ["web_timing_logger"]
                })
            }, t
        })(),
        st = (function(t) {
            function e(e) {
                var i = t.call(this, e, d.JSStopwatch.createDetachedStopwatch("maestro_tracing", {
                    correlation_id: e.correlation_id
                }), d.JSStopwatch.createDetachedStopwatch("user_tracing", {
                    correlation_id: e.correlation_id
                }), !1) || this;
                return i.logger = new nt, i
            }
            return i.__extends(e, t), e.prototype.initialize = function(t) {
                this.context.initialized || (this.context.initialized = !0, this.context.log_time_to_view = t.requireTTV, this.context.log_time_to_interactive = t.requireTTI, this.context.tti_flow = t.url, this.timingStopwatch.url = this.context.tti_flow, this.userStopwatch.url = this.context.tti_flow)
            }, e.prototype.start = function() {
                this.isUsable() && this.timerState === X.NEW && (this.context.start_time = p.WebTimingUtil.getNow(), this.timerState = X.RUNNING)
            }, e.prototype.restart = function() {
                this.TTICallback && (this.TTICallback.cancel(), this.TTICallback = void 0), this.loggedEvents = 0, this.context.have_logged_web_timing = !1, this.context.correlation_id = p.WebTimingUtil.generateCorrelationId(), this.context.start_time = p.WebTimingUtil.getNow(), this.context.end_time = void 0, this.context.time_to_view = null, this.context.time_to_interactive = null, this.timerState = X.RUNNING, d.JSStopwatch.deleteStopwatch(this.timingStopwatch), this.timingStopwatch = d.JSStopwatch.createDetachedStopwatch("maestro_tracing", {
                    request_id: this.context.request_id,
                    url: this.context.tti_flow,
                    correlation_id: this.context.correlation_id
                }), d.JSStopwatch.deleteStopwatch(this.userStopwatch), this.userStopwatch = d.JSStopwatch.createDetachedStopwatch("user_tracing", {
                    request_id: this.context.request_id,
                    url: this.context.tti_flow,
                    correlation_id: this.context.correlation_id
                })
            }, e.prototype.abort = function() {
                this.timerState !== X.CLOSED && (this.timerState = X.ABORTED)
            }, e.prototype.markTimeToView = function() {
                this.isUsable() && (null == this.context.time_to_view && (this.context.time_to_view = p.WebTimingUtil.getNow()), this.logEvent(l.WebTimerEvent.MARK_TIME_TO_VIEW))
            }, e.prototype.markTimeToInteractive = function() {
                this.isUsable() && (this.logEvent(l.WebTimerEvent.MARK_TIME_TO_INTERACTIVE), b() ? this.reportTTI() : this.TTICallback = this.reportTTIAfterPaint())
            }, e.prototype.reportTTI = function() {
                null == this.context.time_to_interactive && (this.context.time_to_interactive = p.WebTimingUtil.getNow(), this.logEvent(l.WebTimerEvent.TIME_TO_INTERACTIVE), Q(this.id))
            }, e.prototype.end = function(t) {
                this.isUsable() && (void 0 === this.context.end_time && (this.context.end_time = p.WebTimingUtil.getNow()), this.context.request_id = t, this.timingStopwatch.request_id = t, this.userStopwatch.request_id = t, this.logEvent(l.WebTimerEvent.LOAD_END))
            }, e.prototype.waitForTTI = function(t) {
                var e = this;
                return new Promise(function(i, n) {
                    if (null != e.context.time_to_interactive) return void i();
                    var o, r = function(t) {
                        window.removeEventListener("TTI." + e.id, r), clearTimeout(o), i()
                    };
                    window.addEventListener("TTI." + e.id, r), t && void 0 !== t.timeoutMS && (o = setTimeout(r, t.timeoutMS))
                })
            }, e.prototype.isUsable = function() {
                return this.timerState === X.NEW || this.timerState === X.RUNNING
            }, e
        })(at),
        ct = (function(t) {
            function e(e) {
                var i = t.call(this, e, d.JSStopwatch.createDetachedStopwatch("maestro_tracing", {
                    correlation_id: e.correlation_id
                }), d.JSStopwatch.createDetachedStopwatch("user_tracing", {
                    correlation_id: e.correlation_id
                }), !1) || this;
                return i.logger = new ot, i
            }
            return i.__extends(e, t), e.prototype.initialize = function(t) {
                var e = this;
                if (!this.context.initialized) {
                    if (!S.performance()) return;
                    this.context.log_time_to_view = t.requireTTV, this.context.log_time_to_interactive = t.requireTTI, this.context.is_pagelet = !!t.is_pagelet, this.context.is_dws = !!t.is_dws, this.context.is_dws2 = !!t.is_dws2, this.context.is_early_ensemble = !!t.is_early_ensemble, this.context.is_page_restore = !1, this.context.ttv_at_dom_interactive = !!t.ttv_at_dom_interactive, this.context.tti_at_dom_interactive = !!t.tti_at_dom_interactive, this.context.source_type = null != t.source_type ? t.source_type : "web", this.context.subtypes = null != t.subtypes ? t.subtypes : {}, this.context.tti_exclusion_flow = null != t.tti_exclusion_flow ? t.tti_exclusion_flow : "", this.context.have_logged_web_timing = !1, this.context.delayed_tti_for_css = !1, this.context.initialized = !0, t.url && (this.context.tti_flow = t.url, this.timingStopwatch.url = t.url, this.userStopwatch.url = t.url), this.context.subtypes.tti_flow && (this.context.tti_flow = this.context.subtypes.tti_flow);
                    var i = 0;
                    g.LOG_TIMING_DELAY && (i = 600), d.JSStopwatch.create_stopwatch_if_not_exist("web_timing_logger"), a.window_load(function() {
                        setTimeout(function() {
                            return e.end()
                        }, i)
                    }), u.onPageRestore(function(t) {
                        e.context.is_page_restore = !0;
                        var i = d.JSStopwatch.createDetachedStopwatch("browser_perf", {
                            correlation_id: e.context.correlation_id
                        });
                        i.recordTrace("page_restore"), i.logData()
                    }), !this.context.ttv_at_dom_interactive && window._timingData && (null != window._timingData.ttv && (this.context.time_to_view = window._timingData.ttv.getTime(), this.logEvent(l.WebTimerEvent.MARK_TIME_TO_VIEW, this.context.time_to_view)), null != window._timingData.tti && (this.context.time_to_interactive = window._timingData.tti.getTime(), this.logEvent(l.WebTimerEvent.TIME_TO_INTERACTIVE, this.context.time_to_interactive), Q()))
                }
            }, e.prototype.start = function() {
                this.isUsable() && this.timerState === X.NEW && (this.timerState = X.RUNNING)
            }, e.prototype.restart = function() {
                this.TTICallback && (this.TTICallback.cancel(), this.TTICallback = void 0), this.loggedEvents = 0, this.context.correlation_id = p.WebTimingUtil.generateCorrelationId(), this.context.end_time = void 0, this.context.time_to_view = null, this.context.time_to_interactive = null, this.timerState = X.RUNNING, this.timingStopwatch = d.JSStopwatch.createDetachedStopwatch("maestro_tracing", {
                    correlation_id: this.context.correlation_id
                }), this.userStopwatch = d.JSStopwatch.createDetachedStopwatch("user_tracing", {
                    correlation_id: this.context.correlation_id
                })
            }, e.prototype.abort = function() {
                this.timerState !== X.CLOSED && (this.timerState = X.ABORTED)
            }, e.prototype.markTimeToView = function() {
                this.isUsable() && (null != this.context.time_to_view || this.context.ttv_at_dom_interactive || (window._timingData && null != window._timingData.ttv ? this.context.time_to_view = window._timingData.ttv.getTime() : this.context.time_to_view = p.WebTimingUtil.getNow(), this.logEvent(l.WebTimerEvent.MARK_TIME_TO_VIEW, this.context.time_to_view)))
            }, e.prototype.markTimeToInteractive = function() {
                var t = this;
                if (window.ensemble && window.ensemble.waitingForCss) return this.context.delayed_tti_for_css = !0, void(window.ensemble.mark_tti_callback = function() {
                    t.markTimeToInteractive()
                });
                null != this.context.time_to_interactive || this.context.tti_at_dom_interactive || (this.logEvent(l.WebTimerEvent.MARK_TIME_TO_INTERACTIVE), b() ? this.reportTTI() : this.TTICallback = this.reportTTIAfterPaint())
            }, e.prototype.reportTTI = function() {
                null == this.context.time_to_interactive && (window._timingData && null != window._timingData.tti ? this.context.time_to_interactive = window._timingData.tti.getTime() : this.context.time_to_interactive = p.WebTimingUtil.getNow(), console.timeStamp && console.timeStamp("TTI"), window.ensemble && window.ensemble.snapshotTimingProfile && (this.context.timing_results = window.ensemble.snapshotTimingProfile() || null), this.logEvent(l.WebTimerEvent.TIME_TO_INTERACTIVE, this.context.time_to_interactive), Q())
            }, e.prototype.end = function(t) {
                this.isUsable() && void 0 === this.context.end_time && (this.context.end_time = p.WebTimingUtil.getNow(), this.logEvent(l.WebTimerEvent.LOAD_END), this.context.tti_at_dom_interactive && Q())
            }, e.prototype.waitForTTI = function(t) {
                var e = this;
                return new Promise(function(i, n) {
                    if (window.ensemble) {
                        if (window.ensemble.ttiMarked) return void i()
                    } else if (null != e.context.time_to_interactive) return void i();
                    var o, r = function(t) {
                        window.removeEventListener("TTI", r), clearTimeout(o), i()
                    };
                    window.addEventListener("TTI", r), t && void 0 !== t.timeoutMS && (o = setTimeout(r, t.timeoutMS))
                })
            }, e.prototype.isUsable = function() {
                return this.timerState === X.NEW || this.timerState === X.RUNNING
            }, e
        })(at),
        ut = {},
        _t = new ct(p.WebTimingUtil.newContext(!1, "default_timer"));
    e.get_timer = O, e.delete_timer = R, e.time_to_view = D, e.time_to_interactive = C, e.initialize_module = M, e.reset = k, e.start_time = W, e.time_since_start = P, e.set_tti_exclusion_flow = L;
    var lt = ["ensemble_init", "dws_ensemble_init", "dws_embedded-app_require_config_callback", "dws-processChunk-embedded-app-require_config-1"],
        pt = new RegExp("dws-processChunk-embedded-app-const_module.*");
    e.mark_time_to_view = J, e.mark_time_to_interactive = B, e.waitForTTI = z, e.log_js_modules_application_code_start = F, e.log_js_modules_fetched_data_required_for_tti = G
}), define("modules/clean/window_util", ["require", "exports"], function(t, e) {
    "use strict";

    function i(t) {
        function e() {
            t(), window.removeEventListener("beforeunload", e)
        }
        window.addEventListener("beforeunload", e)
    }

    function n(t) {
        function e(i) {
            i.persisted && (t(), window.removeEventListener("pageshow", e))
        }
        window.addEventListener("pageshow", e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.onBeforeUnload = i, e.onPageRestore = n
});
//# sourceMappingURL=pkg-timing.min.js-vfl-fzw9S.map