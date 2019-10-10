(function(w) {
    var c = window.AmazonUIPageJS || window.P,
        n = c._namespace || c.attributeErrors,
        l = n ? n("AmazonNavigationSharedAssets", "") : c;
    l.guardFatal ? l.guardFatal(w)(l, window) : l.execute(function() {
        w(l, window)
    })
})(function(w, c, n) {
    (function(c) {
        if (!c.$Nav || c.$Nav._replay) {
            document.createElement("header");
            var b = function() {
                    this.data = {}
                },
                d = function(a) {
                    d.manager.add(a)
                };
            b.arrayAdder = function(a) {
                return function() {
                    this.data[a] = (this.data[a] || []).concat([].slice.call(arguments));
                    return this
                }
            };
            b.prototype = {
                build: function(a,
                    b) {
                    this.data.name = a;
                    this.data.value = b;
                    this.data.immediate = !1;
                    this.data.process = !0;
                    d.manager.add(this.data)
                },
                run: function(a, b) {
                    b && (this.data.name = a);
                    this.data.value = b || a;
                    this.data.process = !0;
                    d.manager.add(this.data)
                },
                publish: function(a, b) {
                    this.data.name = a;
                    this.data.value = b;
                    d.manager.publish(this.data)
                },
                declare: function(a, b) {
                    this.data.name = a;
                    this.data.value = b;
                    d.manager.add(this.data)
                },
                when: b.arrayAdder("when"),
                iff: b.arrayAdder("iff"),
                filter: b.arrayAdder("filter"),
                observe: b.arrayAdder("observe")
            };
            var g =
                function(a) {
                    d[a] = function() {
                        var d = new b;
                        return d[a].apply(d, arguments)
                    }
                },
                a;
            for (a in b.prototype) b.prototype.hasOwnProperty(a) && g(a);
            d.make = function() {
                return d
            };
            d.getNow = function(a, b) {
                return d.manager.get(a, b)
            };
            d.stats = function(a) {
                return d.manager.stats(a)
            };
            d.importEvent = function(a, b) {
                b = b || {};
                b.name = a;
                d.manager.importEvent(b)
            };
            d.manager = {
                pending: [],
                add: function(a) {
                    this.pending.push({
                        m: "add",
                        data: a
                    })
                },
                publish: function(a) {
                    this.pending.push({
                        m: "publish",
                        data: a
                    })
                },
                importEvent: function(a) {
                    this.pending.push({
                        m: "importEvent",
                        data: a
                    })
                },
                get: function(a, b) {
                    return b
                },
                stats: function() {
                    return {}
                }
            };
            if (c.$Nav && c.$Nav.make && c.$Nav.make._shims) {
                g = function(a) {
                    for (var g = new b, e = 0; e < a.length; e++) {
                        var c = a[e];
                        if ("importEvent" === c.m) {
                            a = c.a[1] || {};
                            a.name = c.a[0];
                            d.manager.importEvent(a);
                            break
                        } else if (!g[c.m]) break;
                        g[c.m].apply(g, c.a)
                    }
                };
                a = c.$Nav.make._shims;
                for (var e = 0; e < a.length; e++) {
                    for (var f = 0; f < a[e]._replay.length; f++) g(a[e]._replay[f]);
                    for (var h in a[e]) a[e].hasOwnProperty(h) && d.hasOwnProperty(h) && (a[e][h] = d[h])
                }
            }
            c.$Nav = d
        }
    })(c);
    (function(c,
        b, d, g) {
        if ((b = c.$Nav) && b.manager && b.manager.pending) {
            var a = d.now || function() {
                    return +new d
                },
                e = function(a) {
                    return "function" === typeof a
                },
                f = "object" === typeof c.P && "function" === typeof c.P.when && "function" === typeof c.P.register && "function" === typeof c.P.execute,
                h = "object" === typeof c.AmazonUIPageJS && "function" === typeof c.AmazonUIPageJS.when && "function" === typeof c.AmazonUIPageJS.register && "function" === typeof c.AmazonUIPageJS.execute,
                k = function(a, b) {
                    b = b || {};
                    var c = b.start || 50,
                        d = function() {
                            c <= (b.max || 2E4) && !a() &&
                                (setTimeout(d, c), c *= b.factor || 2)
                        };
                    return d
                },
                m = function(a, b) {
                    if (1 === arguments.length && "string" === typeof a) m({
                        message: "rcx-nav: " + a
                    });
                    else if (c.console && c.console.error && c.console.error(a, b), c.ueLogError) c.ueLogError(a, b);
                    else throw a;
                },
                y = function(a, b) {
                    try {
                        return a()
                    } catch (c) {
                        "object" === typeof b && (b.message = b.message || c.message, b.message = "rcx-nav: " + b.message), m(c, b)
                    }
                },
                u = function() {
                    function b() {
                        return setTimeout(d, 0)
                    }

                    function d() {
                        for (var c = b(), f = a(); g.length;)
                            if (g.shift()(), 50 < a() - f) return;
                        clearTimeout(c);
                        e = !1
                    }
                    var g = [],
                        e = !1;
                    try {
                        /OS 6_[0-9]+ like Mac OS X/i.test(navigator.userAgent) && c.addEventListener && c.addEventListener("scroll", b, !1)
                    } catch (f) {}
                    return function(a) {
                        g.push(a);
                        e || (b(), e = !0)
                    }
                }(),
                p = function() {
                    var a = {};
                    return {
                        run: function(b) {
                            if (a[b] instanceof Array)
                                for (var c = 0; c < a[b].length; c++) a[b][c]();
                            a[b] = !0
                        },
                        add: function(b, c) {
                            for (var d = 1, g = function() {
                                    0 >= --d && u(c)
                                }, e = b.length; e--;) !0 !== a[b[e]] && ((a[b[e]] = a[b[e]] || []).push(g), d++);
                            g()
                        }
                    }
                },
                r = function(a) {
                    a = a || {};
                    this.context = a.context || c;
                    this.once = a.once ||
                        !1;
                    this.async = a.async || !1;
                    this.observers = [];
                    this.notifyCount = 0;
                    this.notifyArgs = []
                };
            r.prototype = {
                notify: function() {
                    this.notifyCount++;
                    if (!(this.once && 1 < this.notifyCount)) {
                        this.notifyArgs = [].slice.call(arguments);
                        for (var a = 0; a < this.observers.length; a++) this._run(this.observers[a])
                    }
                },
                observe: function(a) {
                    if (e(a))
                        if (this.once && this.isNotified()) this._run(a);
                        else return this.observers.push(a), this.observers.length - 1
                },
                remove: function(a) {
                    return -1 < a && a < this.observers.length ? (this.observers[a] = function() {}, !0) : !1
                },
                boundObserve: function() {
                    var a = this;
                    return function() {
                        a.observe.apply(a, arguments)
                    }
                },
                isNotified: function() {
                    return 0 < this.notifyCount
                },
                _run: function(a) {
                    var b = this.notifyArgs,
                        c = this.context;
                    this.async ? u(function() {
                        a.apply(c, b)
                    }) : a.apply(c, b)
                }
            };
            var t = function() {
                var b = {},
                    d = 0,
                    t = {},
                    m = p(),
                    v = {},
                    n = function(b) {
                        this.data = {
                            name: "nav:" + d++,
                            group: "rcx-nav",
                            value: null,
                            result: null,
                            immediate: !0,
                            process: !1,
                            override: !1,
                            resolved: !1,
                            watched: !1,
                            context: t,
                            when: [],
                            iff: [],
                            filter: [],
                            observe: [],
                            stats: {
                                defined: a(),
                                resolved: -1,
                                buildStarted: -1,
                                buildCompleted: -1,
                                callCount: 0,
                                executionTime: 0
                            }
                        };
                        for (var c in b) b.hasOwnProperty(c) && (this.data[c] = b[c]); - 1 < this.data.name.indexOf("]") && (b = this.data.name.split("]"), 2 === b.length && 1 < b[0].length && 0 < b[1].length && (this.data.name = b[1], this.data.group = b[0].replace("[", "")))
                    };
                n.prototype = {
                    getDependencyNames: function() {
                        for (var a = [].concat(this.data.when, this.data.filter), b = 0; b < this.data.iff.length; b++) "string" === typeof this.data.iff[b] ? a.push(this.data.iff[b]) : this.data.iff[b].name && a.push(this.data.iff[b].name);
                        return a
                    },
                    checkIff: function(a) {
                        a = function(a) {
                            a = "string" === typeof a ? {
                                name: a
                            } : a;
                            var c = b[a.name];
                            if (!c || !c.data.resolved) return !1;
                            var c = c.getResult(),
                                c = a.prop && c ? c[a.prop] : c,
                                d = a.value || !0;
                            switch (a.op || "truthy") {
                                case "truthy":
                                    return !!c;
                                case "falsey":
                                    return !c;
                                case "eq":
                                    return c === d;
                                case "ne":
                                    return c !== d;
                                case "gt":
                                    return c > d;
                                case "lt":
                                    return c < d;
                                case "gte":
                                    return c >= d;
                                case "lte":
                                    return c <= d
                            }
                            return !1
                        };
                        for (var c = 0; c < this.data.iff.length; c++)
                            if (!a(this.data.iff[c])) return !1;
                        return !0
                    },
                    watchModule: function(a) {
                        var c =
                            this;
                        v[a] || (v[a] = new r);
                        v[a].observe(function() {
                            var a = c.getResult();
                            if (e(a)) return a.apply(c.data.context, arguments)
                        });
                        b[a] && b[a].applyObserverWrapper()
                    },
                    applyObserverWrapper: function() {
                        var a = this;
                        if (v[this.data.name] && !this.data.watched && this.data.resolved && this.data.result) {
                            if (e(this.data.result)) {
                                var b = this.data.result;
                                this.data.result = function() {
                                    var c = b.apply(a.data.context, arguments);
                                    v[a.data.name].notify(c)
                                };
                                for (var c in b) b.hasOwnProperty(c) && (this.data.result[c] = b[c])
                            }
                            this.data.watched = !0
                        }
                    },
                    applyFilterWrapper: function() {
                        var a = this;
                        if (0 !== this.data.filter.length && e(this.data.result)) {
                            for (var c = [], d = [], g = 0; g < this.data.filter.length; g++)
                                if (b.hasOwnProperty(this.data.filter[g])) {
                                    var f = b[this.data.filter[g]].getResult();
                                    e(f.request) && c.push(f.request);
                                    e(f.response) && d.push(f.response)
                                }
                            var h = function(b, c) {
                                    for (var d = 0; d < b.length; d++)
                                        if (c = b[d].call(a.data.context, c), !1 === c) return !1;
                                    return c
                                },
                                k = this.data.result;
                            this.data.result = function(a) {
                                if (!1 !== (a = h(c, a)) && (a = k.call(t, a), !1 !== (a = h(d, a)))) return a
                            }
                        }
                    },
                    execute: function() {
                        if (this.checkIff()) {
                            for (var b = 0; b < this.data.observe.length; b++) this.watchModule(this.data.observe[b]);
                            m.run(this.data.name);
                            this.data.resolved = !0;
                            this.data.stats.resolved = a();
                            this.data.immediate && this.getResult()
                        }
                    },
                    getResult: function() {
                        var c = this,
                            d = a();
                        this.data.stats.callCount++;
                        if (null !== this.data.result || !this.data.resolved) return this.data.result;
                        this.data.stats.buildStarted = a();
                        if (this.data.process) {
                            for (var g = [], f = 0; f < this.data.when.length; f++) g.push(b.hasOwnProperty(this.data.when[f]) ?
                                b[this.data.when[f]].getResult() : null);
                            var h = this.data.group + ":" + this.data.name;
                            if ("string" === typeof this.data.value) {
                                for (var k = this.data.when, f = 0; f < k.length; f++) {
                                    var t = k[f].indexOf("."); - 1 < t && t < k[f].length && (k[f] = k[f].substr(t + 1));
                                    k[f] = k[f].replace(/[^0-9a-zA-Z_$]/g, "");
                                    k[f].length || (k[f] = String.fromCharCode(97 + f))
                                }
                                this.data.value = y(new Function("return function (" + k.join(", ") + ") { " + this.data.value + "};"), {
                                    attribution: h,
                                    logLevel: "ERROR",
                                    message: "$Nav module eval failed: " + h
                                })
                            }
                            e(this.data.value) &&
                                (this.data.result = y(function() {
                                    return c.data.value.apply(c.data.context, g)
                                }, {
                                    attribution: h,
                                    logLevel: "ERROR",
                                    message: "$Nav module execution failed: " + h
                                }))
                        } else this.data.result = this.data.value;
                        this.applyFilterWrapper();
                        this.applyObserverWrapper();
                        this.data.stats.buildCompleted = a();
                        this.data.stats.executionTime += a() - d;
                        return this.data.result
                    }
                };
                return {
                    add: function(a) {
                        if (!b.hasOwnProperty(a.name) || a.override) {
                            var c = new n(a);
                            b[c.data.name] = c;
                            a = function() {
                                c.execute()
                            };
                            var d = c.getDependencyNames();
                            0 === d.length ?
                                u(a) : m.add(d, a)
                        }
                    },
                    publish: function(a) {
                        this.add(a);
                        f ? g.register(a.name, function() {
                            return a.value
                        }) : h && c.AmazonUIPageJS.register(a.name, function() {
                            return a.value
                        });
                        c.amznJQ && c.amznJQ.declareAvailable(a.name)
                    },
                    importEvent: function(a) {
                        var b = this;
                        a = a || {};
                        f && g.when(a.name).execute("importEvent", function(c) {
                            c = void 0 === c || null === c ? a.otherwise : c;
                            b.add({
                                name: a.as || a.name,
                                value: c
                            })
                        });
                        if (c.amznJQ) c.amznJQ[a.useOnCompletion ? "onCompletion" : "available"](a.amznJQ || a.name, k(function() {
                            var d;
                            if (a.global) {
                                d = c;
                                for (var g =
                                        (a.global || "").split("."), e = 0, f = g.length; e < f; e++) d && g[e] && (d = d[g[e]])
                            } else d = a.otherwise;
                            if (a.retry && (void 0 === d || null === d)) return !1;
                            b.add({
                                name: a.as || a.name,
                                value: d
                            });
                            return !0
                        }))
                    },
                    get: function(a, c) {
                        return b[a] && b[a].data.resolved ? b[a].getResult() : c
                    },
                    stats: function(a) {
                        var c = {},
                            d;
                        for (d in b)
                            if (b.hasOwnProperty(d) && (!a || !b[d].data.resolved)) {
                                c[d] = b[d].data;
                                c[d].blocked = [];
                                for (var g = b[d].getDependencyNames(), e = 0; e < g.length; e++) b[g[e]] && b[g[e]].data.resolved || c[d].blocked.push(g[e])
                            }
                        return c
                    }
                }
            }();
            if (b &&
                b.manager && b.manager.pending)
                for (var v = 0; v < b.manager.pending.length; v++) t[b.manager.pending[v].m](b.manager.pending[v].data);
            b.manager = t;
            b.declare("now", a);
            b.declare("async", u);
            b.declare("eventGraph", p);
            b.declare("logError", function(a, b) {
                b = "rcx-nav: " + (b || "");
                a && a.message ? a.message = b + a.message : "object" === typeof a ? a.message = b : a = {
                    message: b + a
                };
                c.console && c.console.error && c.console.error(a);
                if (c.ueLogError) c.ueLogError(a);
                else throw a;
            });
            b.declare("logUeError", m);
            b.declare("Observer", r);
            b.declare("isAuiP",
                f);
            b.declare("isAuiPJS", h)
        }
    })(c, document, Date, w);
    (function(c) {
        c.build("$F", function() {
            function b(b, a) {
                this.up = b;
                this.action = a
            }

            function c(d) {
                return function() {
                    var a = [].slice.call(arguments);
                    return new b(this, function(b) {
                        return d.apply(this, [b].concat(a))
                    })
                }
            }
            b.prototype.noOp = function() {};
            b.prototype.on = function(b) {
                b = "function" === typeof b ? b : function() {
                    return b
                };
                return this.up ? this.up.on(this.action(b)) : b
            };
            b.prototype.run = function(b) {
                return this.on(b)()
            };
            b.prototype.bind = c(function(b, a) {
                return function() {
                    return b.apply(a,
                        arguments)
                }
            });
            b.prototype.memoize = c(function(b) {
                var a, c = !1;
                return function() {
                    c || (c = !0, a = b.apply(this, arguments), b = null);
                    return a
                }
            });
            b.prototype.once = c(function(b) {
                var a = !1;
                return function() {
                    if (!a) {
                        a = !0;
                        var c = b.apply(this, arguments);
                        b = null;
                        return c
                    }
                }
            });
            b.prototype.debounce = c(function(b, a, c) {
                var d;
                return function() {
                    var h, k = arguments,
                        m = this;
                    c && !d && (h = b.apply(m, k));
                    d && clearTimeout(d);
                    d = setTimeout(function() {
                        d = null;
                        c || b.apply(m, k)
                    }, a);
                    return h
                }
            });
            b.prototype.after = c(function(b, a, c) {
                return function() {
                    (c &&
                        0 < a || !c && 0 >= a) && b();
                    a--
                }
            });
            b.prototype.delay = c(function(b, a) {
                var c = void 0 === a ? 0 : a;
                return function() {
                    return setTimeout(b, c)
                }
            });
            b.prototype.partial = c(function(b) {
                var a = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return b.apply(this, a.concat([].slice.call(arguments)))
                }
            });
            b.prototype.rpartial = c(function(b) {
                var a = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return b.apply(this, [].slice.call(arguments).concat(a))
                }
            });
            b.prototype.throttle = c(function(b, a) {
                function c() {
                    h ? (h = !1, setTimeout(c,
                        a), b()) : d = !1
                }
                var d = !1,
                    h = !1;
                return function() {
                    d ? h = !0 : (d = !0, setTimeout(c, a), b())
                }
            });
            b.prototype.iff = c(function(b, a) {
                return "function" === typeof a ? function() {
                    if (a()) return b.apply(this, arguments)
                } : a ? b : this.noOp
            });
            b.prototype.tap = c(function(b, a) {
                var c = Array.prototype.slice.call(arguments, 2);
                return function() {
                    a.apply(this, c.concat([].slice.call(arguments)));
                    return b.apply(this, arguments)
                }
            });
            return new b
        })
    })(c.$Nav);
    (function(c) {
        c.when("$", "now", "async", "Observer", "debugStream", "debug.param").build("data",
            function(b, c, g, a, e, f) {
                var h = {},
                    k = f.value("navDisableDataKey"),
                    m = {},
                    l = null,
                    u = null,
                    p = new a({
                        async: !0
                    }),
                    r = function() {
                        e("Data Batch", m);
                        p.notify(m);
                        l = u = null;
                        for (var a in m) m.hasOwnProperty(a) && (h[a] = m[a]);
                        m = {}
                    };
                a = function(a) {
                    k && k in a && delete a[k];
                    e("Data Added", a);
                    m = b.extend(m, a);
                    u && clearTimeout(u);
                    l || (l = c());
                    50 < l - c() ? r() : u = setTimeout(r, 10);
                    return a
                };
                a.get = function(a) {
                    return h[a]
                };
                a.getCache = function() {
                    return h
                };
                a.observe = function(a, b, c) {
                    var d = -1;
                    b && "function" === typeof b ? (d = p.observe(function(c) {
                        a in
                            c && (e("Data Observed", {
                                name: a,
                                data: c[a]
                            }), b(c[a]))
                    }), !c && a in h && g(function() {
                        b(h[a])
                    })) : d = p.observe(a);
                    return d
                };
                a.remove = function(a) {
                    return p.remove(a)
                };
                return a
            })
    })(c.$Nav);
    (function(l) {
        l.when("log").build("metrics", function(b) {
            return new function() {
                var d = this;
                this.count = function(d, a) {
                    if (c.ue && c.ue.count) {
                        var e = c.ue.count(d);
                        e || (e = 0);
                        a = e + a;
                        c.ue.count(d, a);
                        b("Nav-Metrics: Incremented " + d + " to " + a);
                        return a
                    }
                    b("Nav-Metrics: UE not setup. Unable to send Metrics")
                };
                this.increment = function(b) {
                    return d.count(b,
                        1)
                };
                this.decrement = function(b) {
                    return d.count(b, -1)
                }
            }
        });
        l.build("managerStats", function() {
            return function() {
                var b = {
                        totalCallCount: 0,
                        totalExecutionTime: 0
                    },
                    c = l.stats(),
                    g;
                for (g in c)
                    if (c.hasOwnProperty(g)) {
                        var a = c[g].stats;
                        b.totalCallCount += a.callCount;
                        b.totalExecutionTime += a.executionTime
                    }
                return b
            }
        });
        l.when("metrics", "managerStats", "config", "sharedconstants", "page.ATF").run("jsMetrics.ATF", function(b, c, g, a) {
            c = c();
            b.count(a.TIME_UP_TO + "ATF:" + g.navDeviceType, c.totalExecutionTime)
        });
        l.when("metrics", "managerStats",
            "config", "sharedconstants", "page.CF").run("jsMetrics.CF", function(b, c, g, a) {
            c = c();
            b.count(a.TIME_UP_TO + "CF:" + g.navDeviceType, c.totalExecutionTime)
        });
        l.when("metrics", "managerStats", "config", "sharedconstants", "page.loaded").run("jsMetrics.PageLoaded", function(b, c, g, a) {
            c = c();
            g = g.navDeviceType;
            b.count(a.TIME_UP_TO + "PageLoaded:" + g, c.totalExecutionTime);
            b.count(a.TOTAL_CALL_COUNT + "PageLoaded:" + g, c.totalCallCount)
        });
        l.when("metrics", "config", "sharedconstants", "page.loaded").run("jsMetrics.collector", function(b,
            d, g) {
            var a = c.navmet;
            if (a !== n && a.length !== n && (d = d.navDeviceType, c.ue_t0 !== n)) {
                var e = {},
                    f = [],
                    h, k;
                for (h = 0; h < a.length; ++h) k = a[h], e[k.key] !== n ? (e[k.key].key = k.key, e[k.key].delta += k.end - k.begin, e[k.key].completed = k.end - c.ue_t0, f[e[k.key].index] = n, e[k.key].index = h) : e[k.key] = {
                    key: k.key,
                    delta: k.end - k.begin,
                    completed: k.end - c.ue_t0,
                    index: h
                }, f.push(k.key);
                a.basic && (b.count(g.CSM_LATENCY_V2 + ":network:D:" + d, a.basic.networkLatency), b.count(g.CSM_LATENCY_V2 + ":navFirstPaint:D:" + d, a.basic.navFirstPaint), b.count(g.CSM_LATENCY_V2 +
                    ":NavStart:C:" + d, a.basic.NavStart));
                for (h = 0; h < f.length; ++h) f[h] !== n && (k = e[f[h]], b.count(g.CSM_LATENCY_V2 + ":" + k.key + ":D:" + d, k.delta), b.count(g.CSM_LATENCY_V2 + ":" + k.key + ":C:" + d, k.completed))
            }
        });
        l.when("metrics", "sharedconstants", "config").run("metrics.csm", function(b, d, g) {
            if (g = g.navDeviceType) {
                var a = {
                        UpNavBanner: {
                            since: "ue_t0",
                            by: "nav_t_upnav_begin"
                        },
                        BeginNav: {
                            since: "ue_t0",
                            by: "nav_t_begin_nav"
                        },
                        InlineCSS: {
                            since: "ue_t0",
                            by: "nav_t_after_inline_CSS"
                        },
                        PreloadJS: {
                            since: "ue_t0",
                            by: "nav_t_after_preload_JS"
                        },
                        PreloadSprite: {
                            since: "ue_t0",
                            by: "nav_t_after_preload_sprite"
                        },
                        ANI: {
                            since: "ue_t0",
                            by: "nav_t_after_ANI"
                        },
                        Config: {
                            since: "ue_t0",
                            by: "nav_t_after_config_declaration"
                        },
                        NavBar: {
                            since: "ue_t0",
                            by: "nav_t_after_navbar"
                        },
                        SearchBar: {
                            since: "ue_t0",
                            by: "nav_t_after_searchbar"
                        },
                        EndNav: {
                            since: "ue_t0",
                            by: "nav_t_end_nav"
                        }
                    },
                    e;
                for (e in a)
                    if (a.hasOwnProperty(e)) {
                        var f = a[e];
                        if (f) {
                            var h = c[f.by],
                                f = c[f.since];
                            h && f && b.count(d.CSM_LATENCY + ":" + e + ":" + g, h - f)
                        }
                    }
            }
        })
    })(c.$Nav);
    (function(l) {
        l.when("$").build("agent", function(b) {
            var d =
                function() {
                    var a = Array.prototype.slice.call(arguments, 0);
                    return (new RegExp("(" + a.join("|") + ")", "i")).test(navigator.userAgent)
                },
                g = !!("ontouchstart" in c) || d("\\bTouch\\b") || 0 < c.navigator.msMaxTouchPoints,
                a = {
                    iPhone: d("iPhone"),
                    iPad: d("iPad"),
                    kindleFire: d("Kindle Fire", "Silk/"),
                    android: d("Android"),
                    windowsPhone: d("Windows Phone"),
                    webkit: d("WebKit"),
                    ie11: d("Trident/7"),
                    ie10: d("MSIE 10"),
                    ie7: d("MSIE 7"),
                    ie6: b.browser ? b.browser.msie && 6 >= parseInt(b.browser.version, 10) : d("MSIE 6"),
                    opera: d("Opera"),
                    firefox: d("Firefox"),
                    mac: d("Macintosh"),
                    iOS: d("iPhone") || d("iPad")
                };
            a.ie = b.browser ? b.browser.msie : a.ie11 || d("MSIE");
            a.touch = a.iPhone || a.iPad || a.android || a.kindleFire || g;
            a.quirks = a.ie && document && "CSS1Compat" !== document.compatMode;
            return a
        })
    })(c.$Nav);
    c.$Nav.declare("sharedconstants", {
        ADVANCED_PREFIX: "aj:",
        TIME_UP_TO: "NavJS:TimeUpTo:",
        CSM_LATENCY: "NavJS:CSM:Latency",
        CSM_LATENCY_V2: "Nav:CSM:Latency",
        TOTAL_CALL_COUNT: "NavJS:TotalCallCount:",
        DWELLTIME_MIN: 200
    });
    (function(c) {
        c.build("util.addCssRule", function() {
            var b = null;
            return function(c, g, a) {
                if (!b) {
                    var e = document.getElementsByTagName("head")[0];
                    if (!e) return;
                    var f = document.createElement("style");
                    f.appendChild(document.createTextNode(""));
                    e.appendChild(f);
                    b = f.sheet || {}
                }
                b.insertRule ? b.insertRule(c + "{" + g + "}", a) : b.addRule && b.addRule(c, g, a)
            }
        })
    })(c.$Nav);
    (function(c) {
        c.build("getRefTag", function() {
            return function(b) {
                if (b) {
                    b = b.split("?");
                    var c = b[0].split("/ref\x3d");
                    if (c[1]) return c[1];
                    if (b = b[1]) return b = b.split("\x26").reduce(function(b, a) {
                        a = a.split("\x3d");
                        return b[a[0]] =
                            a[1], b
                    }, {}), b.ref_ || b.ref
                }
            }
        })
    })(c.$Nav);
    (function(l) {
        l.when("isAuiP", "config").run("nonAuiErrorLogger", function(b, d) {
            !d.logNonAuiJsError || b && c.P.AUI_BUILD_DATE || !c.ueLogError || c.ueLogError({
                attribution: "AmazonNavigationCards",
                logLevel: "ERROR",
                message: "Page is not loading AUI JS Framework. PageType : " + (c.ue_pty ? c.ue_pty : "NavUnknownPageType")
            })
        })
    })(c.$Nav);
    (function(c) {
        c.when("$").run("hamburgerIosScrollSpy", function(b) {
            var c;
            return {
                touchStartHandler: function(b) {
                    if (!b) return !1;
                    c = b.originalEvent.touches[0].clientY
                },
                touchMoveHandler: function(g) {
                    var a, e, f, h;
                    if (!g || !c) return !1;
                    a = g.originalEvent.touches[0].clientY;
                    e = b(".hmenu.hmenu-visible");
                    f = e[0].scrollHeight;
                    h = e.scrollTop();
                    e = e.outerHeight();
                    a < c && f - h <= e && (c = n, g.preventDefault());
                    a > c && 0 >= h && (c = n, g.preventDefault())
                },
                preventCurrentEvent: function(b) {
                    b.preventDefault()
                }
            }
        })
    })(c.$Nav);
    (function(l, b) {
        l.when("jQuery", "hamburgerMenuInteractionJS", "HamburgerMenuMainContentAJAXCall", "util.ajax", "config", "metrics").build("HamburgerMenuFirstLayerAJAXCall", function(b, g, a,
            e, f, h) {
            return function(k, m) {
                function l(a) {
                    return "".concat(p ? "navm" : "nav", a)
                }

                function u() {
                    b("#nav-hamburger-menu").attr("href", "/gp/site-directory?ref\x3d".concat(l("_em_ajax_fail")))
                }
                var p = "mobile" === k.toLowerCase(),
                    r = p && "true" === f.hamburgerMenuRefactor || !p && !0 === f.desktopHMenuRefactor,
                    t = {
                        attribution: "AmazonNavigationCards",
                        logLevel: "ERROR"
                    };
                h.increment("".concat(p ? "Navm" : "Nav", ":Hmenu:FirstLayerAjax"));
                var v = Date.now();
                e({
                    retryMetric: l("-hmenu-ajax-retry"),
                    errorMetric: l("-hmenu-ajax-error"),
                    url: "/gp/navigation/ajax/generic.html",
                    dataType: "html",
                    data: {
                        ajaxTemplate: r ? p ? "hMenuFirstLayer" : "hMenuDesktopFirstLayer" : "hamburger",
                        pageType: c.ue_pty ? c.ue_pty : "NavUnknownPageType",
                        rid: c.ue && c.ue.rid ? c.ue.rid : n,
                        hmDataAjaxHint: 1,
                        isFreshRegion: f.isFreshRegion,
                        isFreshCustomer: p ? f.isFreshCustomer : f.navfresh,
                        isPrimeMember: p ? f.isPrimeCustomer : f.isPrimeMember,
                        isPrimeDay: p ? f.isPrimeDay : f.primeDay,
                        firstName: p ? f.firstName : f.customerName,
                        currentUri: c.location && c.location.pathname ? c.location.pathname : n,
                        currentQueryString: c.location && c.location.search ?
                            c.location.search : n,
                        navDeviceType: f.navDeviceType
                    },
                    error: function(a, b, d) {
                        a = " HamburgerMenu AJAX Call failed. Status Code : " + a.status + " Status text : " + b + " Exception : " + d;
                        c.ueLogError && (t.message = a, c.ueLogError(t));
                        u()
                    },
                    success: function(e) {
                        e && b(e).is("#hmenu-container") ? (b("body").append(e), g(), "function" === typeof m && m(), v && h.count("".concat(p ? "Navm" : "Nav", ":Hmenu:FirstLayerSuccessTotalTime"), Math.floor((Date.now() - v) / 1E3)), b("#nav-hamburger-menu").one("click", function() {
                            r && a()
                        })) : (c.ueLogError &&
                            (t.message = " HamburgerMenu Empty or Malformed AJAX response", c.ueLogError(t)), u())
                    }
                })
            }
        })
    })(c.$Nav, w);
    (function(l) {
        l.when("$", "util.ajaxReftagLogger", "metrics", "config").run("hMenuItemClickHandler", function(b, d, g, a) {
            return function(e) {
                function f(b, d, e) {
                    var f = h.children("ul.hmenu[data-menu-id\x3d" + d + "]");
                    0 === f.length ? (g.increment("Navm:Hmenu:CustomerClickWithSelectedLayerError"), c.location = "mobile" === a.navDeviceType ? "/gp/site-directory?ref\x3dnavm_em_linktree_fail" : "/gp/site-directory?ref\x3dnav_em_linktree_fail") :
                        (b.removeClass("hmenu-translateX").bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                            b.removeClass("hmenu-visible");
                            b.removeClass("hmenu-transition").unbind("transitionend webkitTransitionEnd oTransitionEnd")
                        }).addClass("hmenu-transition " + (e ? "hmenu-translateX-left" : "hmenu-translateX-right")), f.removeClass(e ? "hmenu-translateX-right" : "hmenu-translateX-left").bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                            f.removeClass("hmenu-transition").unbind("transitionend webkitTransitionEnd oTransitionEnd");
                            if (e) {
                                var a = h.children("ul.hmenu.hmenu-hidden[data-parent-menu-id\x3d'" + d + "']");
                                a && a.removeClass("hmenu-hidden")
                            }
                        }).addClass("hmenu-visible hmenu-transition hmenu-translateX").scrollTop(0), h.attr("tabIndex", 0).focus().removeAttr("tabIndex"))
                }
                var h = b("#hmenu-content");
                e = b(e.currentTarget);
                var k = e.closest("ul.hmenu"),
                    m = "";
                if (e.data("menu-id")) return f(k, e.data("menu-id"), !0), (m = e.data("ref-tag")) && d(e.data("ref-tag")), !1;
                if (e.hasClass("hmenu-back-button")) return f(k, k.data("parent-menu-id")), (m = e.data("ref-tag")) &&
                    d(e.data("ref-tag")), !1
            }
        })
    })(c.$Nav);
    (function(l) {
        l.when("$", "metrics", "util.ajaxReftagLogger", "hamburgerIosScrollSpy", "agent", "hMenuItemClickHandler", "config").run("hamburgerMenuInteractionJS", function(b, d, g, a, e, f, h) {
            return function() {
                function g(a) {
                    a.removeClass(q.transition).unbind("transitionend webkitTransitionEnd oTransitionEnd")
                }
                l.when("updateIcpReturnUrl").run("updateHamburgerMenuMozartUpdateUrl", function(a) {
                    a("#hmenu-icp-language")
                });
                var m = b("body"),
                    n = b("#nav-hamburger-menu"),
                    u = b("#hmenu-container"),
                    p = b("#hmenu-canvas"),
                    r = b("#hmenu-canvas-background"),
                    t = b("#hmenu-content"),
                    v = b("#hmenu-close-menu"),
                    z = b("#a-page"),
                    x, q = {
                        transition: "hmenu-transition",
                        visible: "hmenu-visible",
                        translateX: "hmenu-translateX",
                        translateXLeft: "hmenu-translateX-left",
                        translateXRight: "hmenu-translateX-right",
                        transparent: "hmenu-transparent",
                        opaque: "hmenu-opaque",
                        lockPosition: "lock-position"
                    },
                    w = document.getElementById("nav-hamburger-menu");
                w && w.removeEventListener("click", c.navHamburgerMetricLogger);
                n.one("click", function() {
                    c.ue_t0 &&
                        d.count("mobile" === h.navDeviceType ? "Navm:Hmenu:IconFirstClickTime" : "Nav:Hmenu:IconFirstClickTime", Math.floor((Date.now() - c.ue_t0) / 1E3));
                    p.bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                        b("ul.hmenu[data-parent-menu-id\x3d'1']").removeClass("hmenu-hidden")
                    })
                });
                n.click(function() {
                    t.children("ul.hmenu[data-menu-id\x3d'1']").addClass(q.visible);
                    u.addClass(q.visible);
                    p.removeClass(q.translateXLeft).bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                        g(p)
                    }).addClass(q.transition +
                        " " + q.translateX);
                    r.removeClass(q.transparent).bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                        g(r)
                    }).addClass(q.transition + " " + q.opaque);
                    x = c.scrollY;
                    m.css({
                        top: "-" + x + "px"
                    });
                    m.addClass(q.lockPosition);
                    z.attr("aria-hidden", "true");
                    v.focus();
                    "mobile" === h.navDeviceType && e.iPhone && (m.bind("touchstart", a.touchStartHandler), m.bind("touchmove", a.touchMoveHandler), r.bind("touchmove", a.preventCurrentEvent));
                    d.increment("mobile" === h.navDeviceType ? "Navm:Hmenu:IconClickActionComplete" : "Nav:Hmenu:IconClickActionComplete")
                });
                c.ue_t0 && d.count("mobile" === h.navDeviceType ? "Navm:Hmenu:MenuAccessibleLatency" : "Nav:Hmenu:MenuAccessibleLatency", Date.now() - c.ue_t0);
                r.click(function(f) {
                    if (f.target === this || f.target.parentElement === this)
                        if (d.increment("mobile" === h.navDeviceType ? "Navm:Hmenu:MenuAbandon" : "Nav:Hmenu:MenuAbandon"), r.removeClass(q.opaque).bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
                                g(r)
                            }).addClass(q.transition + " " + q.transparent), p.removeClass(q.translateX).bind("transitionend webkitTransitionEnd oTransitionEnd",
                                function() {
                                    u.removeClass(q.visible);
                                    t.children("ul.hmenu:not([data-menu-id\x3d'1'])").removeClass(q.translateX + " " + q.translateXLeft + " " + q.visible).addClass(q.translateXRight);
                                    t.children("ul.hmenu[data-menu-id\x3d'1']").removeClass(q.translateXLeft + " " + q.visible).scrollTop(0);
                                    g(p)
                                }).addClass(q.transition + " " + q.translateXLeft), z.removeAttr("aria-hidden"), "mobile" === h.navDeviceType && e.iPhone && (m.unbind("touchstart", a.touchStartHandler), m.unbind("touchmove", a.touchMoveHandler), r.unbind("touchmove", a.preventCurrentEvent)),
                            m.attr("tabIndex", 0).focus().removeAttr("tabIndex").removeClass(q.lockPosition), m.css("top", ""), c.scrollTo(c.scrollX, x), "mobile" === h.navDeviceType) {
                            var l = m.is(".fixed-navbar");
                            c.setTimeout(function() {
                                l && m.addClass("fixed-navbar")
                            }, 1)
                        } else b(document).unbind("keyup.hamburgerEscape")
                });
                v.click(function() {
                    r.click()
                });
                b("#hmenu-back-to-top").click(function() {
                    var a = t.children("ul.hmenu.hmenu-visible");
                    a.scrollTop(0);
                    "1" === a.attr("data-menu-id") ? v.focus() : a.find(".hmenu-back-button").focus()
                });
                b(".hmenu-item").click(function(a) {
                    return f(a)
                });
                document.getElementById("hmenu-container").style.display = "block";
                "mobile" === h.navDeviceType && (n = document.createEvent("HTMLEvents"), n.initEvent("nav:hbm:updated", !0, !1), document.dispatchEvent(n))
            }
        })
    })(c.$Nav);
    (function(l, b) {
        l.when("jQuery", "util.ajax", "hMenuItemClickHandler", "config", "metrics").build("HamburgerMenuMainContentAJAXCall", function(b, g, a, e, f) {
            return function() {
                var h = {
                        attribution: "AmazonNavigationCards",
                        logLevel: "ERROR"
                    },
                    k = l.getNow("HMenuSecondLayerVariables");
                if (k && Array.isArray(k.secondLayerTreeName) &&
                    k.secondLayerTreeName.length) {
                    f.increment("mobile" === e.navDeviceType ? "Navm:Hmenu:MainContentAjax" : "Nav:Hmenu:MainContentAjax");
                    var m = Date.now();
                    g({
                        retryMetric: "mobile" === e.navDeviceType ? "navm-hmenu-main-content-ajax-retry" : "nav-hmenu-main-content-ajax-retry",
                        errorMetric: "mobile" === e.navDeviceType ? "navm-hmenu-main-content-ajax-error" : "nav-hmenu-main-content-ajax-error",
                        url: "/gp/navigation/ajax/generic.html",
                        dataType: "html",
                        data: {
                            ajaxTemplate: "hamburgerMainContent",
                            pageType: c.ue_pty ? c.ue_pty : "NavUnknownPageType",
                            rid: c.ue && c.ue.rid ? c.ue.rid : n,
                            hmDataAjaxHint: 1,
                            currentUri: c.location && c.location.pathname ? c.location.pathname : n,
                            navDeviceType: e.navDeviceType,
                            isSmile: k.isSmile,
                            RegionalStores: k.RegionalStores,
                            isPrime: k.isPrime,
                            secondLayerTreeName: k.slt || k.secondLayerTreeName,
                            currentQueryString: c.location && c.location.search ? c.location.search : n
                        },
                        error: function(a, b, d) {
                            a = " HamburgerMenu Main Content AJAX Call failed. Status Code : " + a.status + " Status text : " + b + " Exception : " + d;
                            c.ueLogError && (h.message = a, c.ueLogError(h))
                        },
                        success: function(c) {
                            c && b(c).hasClass("hmenu-translateX-right") && (b("#hmenu-content").append(c), b(".hmenu-item").click(function(b) {
                                return a(b)
                            }), m && f.count("mobile" === e.navDeviceType ? "Navm:Hmenu:MainContentSuccessTotalTime" : "Nav:Hmenu:MainContentSuccessTotalTime", Math.floor((Date.now() - m) / 1E3)))
                        }
                    })
                }
            }
        })
    })(c.$Nav, w);
    (function(l) {
        l.when("$", "util.ajax", "metrics", "config").run("notificationInteractionJS", function(b, d, g, a) {
            function e(a) {
                return "".concat(r ? "Navm" : "Nav", a)
            }

            function f(a) {
                return "".concat(r ?
                    "navm" : "nav", a)
            }

            function h(a, b, e, f, h) {
                var n = Date.now();
                c.ue_t0 && g.count(a, Math.floor((n - c.ue_t0) / 1E3));
                a = {
                    "client-id": "GlobalNav",
                    type: "Payments",
                    "sub-type": "MFA",
                    "source-action": h,
                    "suppression-timestamp": Date.now(),
                    "page-type": c.ue_pty,
                    "sub-page-type": c.ue_spty
                };
                d({
                    retryMetric: b,
                    errorMetric: e,
                    url: "/gp/navigation/notifications/1.0/suppress",
                    data: a,
                    method: "POST",
                    error: function(a, b, d) {
                        var e = {
                            attribution: "AmazonNavigationCards",
                            logLevel: "ERROR"
                        };
                        a = " Notification Suppression AJAX Call failed. Status Code : " +
                            a.status + " Status text : " + b + " Exception : " + d;
                        c.ueLogError && (e.message = a, c.ueLogError(e))
                    },
                    success: function() {
                        k.length && k.hide();
                        p.length && k.length && !1 === l && p.show();
                        n && g.count(f, Math.floor((Date.now() - n) / 1E3))
                    }
                })
            }
            var k = b("#nav-notification"),
                l = 0 !== b("#nav-notification.nav-notification-bottom").length,
                n = b("a#nav-notification-right, #nav-notification-right \x3e a"),
                u = b("a#nav-notification-action, a#nav-notification-left"),
                p = b("#nav-upnav"),
                r = "mobile" === a.navDeviceType.toLowerCase();
            p.length && k.length &&
                !1 === l && p.hide();
            n.click(function() {
                var a = e(":Notification:Suppress:ClickTime"),
                    b = f("-notification-suppress-retry"),
                    c = f("-notification-suppress-error"),
                    d = e(":Notification:Suppress:TotalTime");
                h(a, b, c, d, "CloseButton")
            });
            u.click(function() {
                var a = e(":Notification:Action:ClickTime"),
                    b = f("-notification-action-retry"),
                    c = f("-notification-action-error"),
                    d = e(":Notification:Action:TotalTime");
                h(a, b, c, d, "CallToAction")
            })
        })
    })(c.$Nav)
});
/* ******** */
(function(q) {
    var c = window.AmazonUIPageJS || window.P,
        v = c._namespace || c.attributeErrors,
        d = v ? v("AmazonNavigationMobileAssets", "") : c;
    d.guardFatal ? d.guardFatal(q)(d, window) : d.execute(function() {
        q(d, window)
    })
})(function(q, c, v) {
    (function(c) {
        c.build("util.preload", function() {
            return function(b, a) {
                var h = new Image;
                a && (h.onload = function() {
                    a(h)
                });
                h.src = b;
                return h
            }
        })
    })(c.$Nav);
    (function(c, b) {
        b.importEvent("jQuery", {
            as: "$",
            global: "jQuery"
        });
        b.importEvent("jQuery", {
            global: "jQuery"
        });
        b.when("$").run("PageEventSetup",
            function(a) {
                var h = function() {
                    b.declare("page.domReady");
                    b.declare("page.ATF");
                    b.declare("page.CF");
                    b.declare("page.loaded");
                    b.declare("btf.full")
                };
                a(function() {
                    b.declare("page.domReady")
                });
                a(c).load(h);
                "complete" === document.readyState ? h() : "interactive" === document.readyState && b.declare("page.domReady")
            });
        b.when("log", "Observer", "$F").run("setupPageReady", function(a, c, g) {
            function e() {
                return "complete" !== document.readyState
            }

            function f() {
                return !!b.getNow("config.readyOnATF")
            }
            var d = new c;
            d.observe(function(g) {
                a("page.ready triggered by: " +
                    g);
                b.declare("page.ready")
            });
            c = function(a) {
                d.notify(a)
            };
            "complete" === document.readyState ? c("immediate") : (b.when("page.ATF").run("page.TriggerATF", g.partial("Event: page.ATF").tap(a).iff(e).iff(f).on(c)), b.when("page.CF").run("page.TriggerCF", g.partial("Event: page.CF").tap(a).iff(e).on(c)), b.when("page.domReady").run("page.TriggerDom+", g.delay(1E4).partial("Event: page.domReady+").tap(a).iff(e).on(c)), b.when("page.loaded").run("page.TriggerLoaded", g.delay(100).partial("Event: page.loaded+").tap(a).on(c)))
        });
        b.when("$F", "config", "now", "Observer").build("debugStream", function(a, b, g, c) {
            if (!b.isInternal) return b = function() {}, b.observe = a.noOp, b.getHistory = a.noOp, b;
            var f = [],
                d = new c;
            a = function(a, b) {
                a = {
                    data: b,
                    msg: a,
                    timestamp: g()
                };
                f.push(a);
                d.notify(a)
            };
            a.observe = d.boundObserve();
            a.getHistory = function() {
                return f
            };
            return a
        });
        b.when("debug.param", "debugStream").build("log", function(a, b) {
            return c.console && c.console.log && a("navDebug") ? function(a) {
                b("Log", a);
                c.console.log(a)
            } : function() {}
        });
        b.when("config").build("debug.param",
            function(a) {
                if (!a.isInternal) return a = function() {
                    return !1
                }, a.value = function() {
                    return null
                }, a;
                var b = function() {
                    for (var b = {}, a = c.location.search.substring(1).split("\x26"), h = 0; h < a.length; h++) {
                        var k = a[h].split("\x3d");
                        try {
                            b[decodeURIComponent(k[0])] = decodeURIComponent(k[1])
                        } catch (l) {}
                    }
                    return b
                }();
                a = function(a, c) {
                    return 1 === arguments.length ? a in b : b[a] === c
                };
                a.value = function(a) {
                    return a in b ? b[a] : null
                };
                return a
            });
        b.when("$", "img.sprite", "util.preload", "util.addCssRule", "page.ready").run("ApplyHighResSprite",
            function(a, b, g, e) {
                a = c.devicePixelRatio || 1;
                !b["png32-2x"] || 1 >= a || g(b["png32-2x"], function(a) {
                    1 < a.width && (e("#navbar .nav-sprite", "background-image: url(" + b["png32-2x"] + "); background-size: " + Math.floor(a.width / 2) + "px;"), e("#hmenu-container .nav-sprite", "background-image: url(" + b["png32-2x"] + "); background-size: " + Math.floor(a.width / 2) + "px;"))
                })
            })
    })(c, c.$Nav);
    (function(d) {
        d.when("$", "config", "metrics", "page.ready").run("searchIconAction", function(b, a, h) {
            var g = b("#nav-button-search"),
                e = b("#nav-logobar"),
                d = b("#navbar .nav-search-field .nav-input"),
                k = g.find("a"),
                l, m;
            if (0 !== g.length && g.is(":visible"))
                if ("header" === a.searchIconAction) {
                    if (m = b("#navbar .nav-searchbar-wrapper"), 0 < m.length) {
                        var C = 0,
                            r = function() {
                                if (m.is(":visible")) {
                                    var b = c.scrollY,
                                        k = e[0].getBoundingClientRect().top + e[0].getBoundingClientRect().height - Math.abs(C - b);
                                    k <= e[0].getBoundingClientRect().top || 0 === b ? (m.hide(), g.show(), d.blur(), h.increment("nav-pinned-searchbar-hide"), c.removeEventListener("scroll", r, !1)) : a.pinnedNav && m.css("top",
                                        k + "px")
                                }
                            };
                        b("#navbar").addClass("nav-inline-search");
                        d[0].addEventListener("focus", function(a) {
                            setTimeout(function() {
                                c.addEventListener("scroll", r, !1)
                            }, 1E3)
                        });
                        g.click(function(b) {
                            var l, n;
                            k.attr("aria-label", k.attr("aria-label-open"));
                            h.increment("nav-pinned-searchbar-show");
                            m.show();
                            d.focus();
                            g.hide();
                            l = c.scrollX;
                            n = c.scrollY;
                            c.scrollTo(l, n);
                            C = n;
                            m.css("overflow", "visible");
                            m.css("top", e[0].getBoundingClientRect().top + e[0].getBoundingClientRect().height + "px");
                            a.pinnedNav || m.addClass("nav-only-inline-search");
                            b.preventDefault();
                            return !1
                        })
                    }
                } else "nojs" !== a.searchIconEvent && (l = b("#nav-ftr .nav-searchbar"), g.click(function(a) {
                    b(document.body).animate({
                        scrollTop: l.offset().top
                    }, 400, "swing", function() {
                        b(".nav-search-field .nav-input", l).focus()
                    });
                    a.preventDefault();
                    return !1
                }))
        });
        d.when("$", "config", "page.ready").run("searchClearHandling", function(b, a) {
            if ("true" === a.mobileBlueheaven) {
                var d = function(a) {
                    var b = a.data.$inputField.val(),
                        c = a.data.$parentField.hasClass(a.data.showClearClass);
                    "" === b || c || a.data.$parentField.addClass(a.data.showClearClass);
                    "" === b && c && a.data.$parentField.removeClass(a.data.showClearClass)
                };
                b(".nav-search-field").each(function() {
                    var a = b(this),
                        e = a.find("input[type\x3dtext]"),
                        f = e.attr("data-aria-clear-label");
                    0 === a.find(".nav-search-clear").length && a.append("\x3ca class\x3d'nav-icon nav-sprite nav-search-clear' tabindex\x3d'0' href\x3d'javascript:;' aria-label\x3d'" + f + "'\x3e\x3c/a\x3e");
                    var f = e.next(".nav-search-clear"),
                        k = function(b) {
                            b = c.scrollX;
                            var d = c.scrollY;
                            e.val("");
                            a.removeClass("nav-search-show-clear");
                            e.focus();
                            c.scrollTo(b, d)
                        };
                    f.click(k);
                    f.bind("keydown", function(a) {
                        a && 13 === a.keyCode && k.call(this, a)
                    });
                    e.bind("keyup focus", {
                        $inputField: e,
                        $parentField: a,
                        showClearClass: "nav-search-show-clear"
                    }, d)
                })
            }
        })
    })(c.$Nav);
    (function(c) {
        c.when("$").build("api.publish", function() {
            return function(b, a) {
                c.publish("nav." + b, a);
                c.declare("api." + b, a)
            }
        });
        c.when("$", "data", "api.publish").run("PublishMobileAPIs", function(b, a, c) {
            c("removePrimeExperience", function() {
                a({
                    isPrime: !1
                })
            })
        });
        c.when("$", "data").run("setupRefreshPrime", function(b,
            a) {
            a.observe("isPrime", function(a) {
                a ? b("#nav-logo").addClass("nav-prime-1") : (b("#nav-logo").removeClass("nav-prime-1"), b(".navm-aui-tagline").css({
                    display: "none"
                }))
            })
        })
    })(c.$Nav);
    (function(c) {
        c.when("$", "data", "api.publish").run("PublishCartAPIs", function(b, a, c) {
            c("setCartCount", function(b) {
                a({
                    cartCount: b
                })
            })
        });
        c.when("$", "data", "config").run("setupCartCount", function(b, a, c) {
            a.observe("cartCount", function(a) {
                a += "";
                a.match(/^(|0|[1-9][0-9]*|99\+)$/) || (a = 0);
                a = parseInt(a, 10) || 0;
                b("#nav-ftr .nav-cart-count").html(a);
                var c = b("#nav-button-cart").children("div");
                c.removeClass("nav-cart-empty nav-cart-1 nav-cart-10 nav-cart-100");
                var d = "nav-cart-empty";
                100 <= a ? (d = "nav-cart-100", a = "99+") : 10 <= a ? d = "nav-cart-10" : 0 < a && (d = "nav-cart-1");
                c.addClass(d);
                c.find(".nav-cart-count").html(a)
            })
        })
    })(c.$Nav);
    (function(c) {
        c.when("$", "page.ready", "$F", "SwitchAccountRedirect").run("overrideSwitchAccountlink", function(b, a, c, g) {
            b("#nav-item-switch-account-footer").click(function() {
                if (g) {
                    var a = b("#nav-item-switch-account-footer");
                    g.setRedirectUrl(b(a))
                }
            })
        })
    })(c.$Nav);
    (function(d, b) {
        d.when("$", "$F", "config", "logError", "util.ajax", "metrics").iff({
            name: "config",
            prop: "pseudoPrimeFirstBrowse"
        }).run("pseudoPrimeFirstBrowseModal", function(a, h, g, e, f, k) {
            var l = function(c) {
                b.when("A", "a-modal", "ready").execute("PrimeModal", function(b, e) {
                    b = a("\x3cdiv\x3e\x3c/div\x3e");
                    e.create(b, {
                        inlineContent: c,
                        hideHeader: !0,
                        closeButton: !1,
                        name: "psuedoPrimeFirstBrowseModal",
                        popoverLabel: "One year prime membership has been added to your cart"
                    }).show()
                })
            };
            h = {
                triggerType: "load",
                referrer: document.referrer,
                height: a(c).height(),
                width: a(c).width()
            };
            f({
                url: g.pseudoPrimeFirstBrowse.url,
                data: h,
                error: function() {
                    k.increment("nav-pseudo-prime-first-browse-errorCount")
                },
                success: function(b) {
                    b && b.content && (b = a("\x3cdiv\x3e\x3c/div\x3e").html(b.content), d.getNow("isAuiP") && d.getNow("isAuiPJS") && l(b))
                }
            })
        })
    })(c.$Nav, q);
    (function(d) {
        d.when("$", "Observer", "metrics").build("util.ajax", function(b, a, d) {
            return function(a) {
                a = b.extend({
                    url: null,
                    data: {},
                    type: "GET",
                    cache: !0,
                    timeout: c.mobileNavRetryTimeout || 1E4,
                    retryLimit: c.mobileNavRetryLimit ||
                        3,
                    retryMetric: "navm-ajax-retry",
                    errorMetric: "navm-ajax-error"
                }, a);
                var e = a.error,
                    f = a.retryLimit;
                a.error = function() {
                    0 <= --f ? (d.increment(a.retryMetric), b.ajax(a)) : e && (d.increment(a.errorMetric), e.apply(a, arguments))
                };
                return b.ajax(a)
            }
        })
    })(c.$Nav);
    (function(c, b) {
        c.when("HamburgerMenuFirstLayerAJAXCall").run("HamburgerMenuFirstLayerAJAXCallMobile", function(a) {
            return function() {
                a("mobile")
            }
        })
    })(c.$Nav, q);
    (function(d, b) {
        d.when("jQuery", "hamburgerMenuIconAvailableOnLoad", "hamburgerMenuInteractionJS", "config",
            "HamburgerMenuFirstLayerAJAXCallMobile").run("HamburgerMenuAJAXCall", function(a, b, d, e, f) {
            e.enableInlineHbMenu && a("#hmenu-container").length ? d() : b ? c.onload = f() : f()
        })
    })(c.$Nav, q);
    (function(d, b) {
        "object" === typeof c.P && "function" === typeof c.P.when && "function" === typeof c.P.register && "function" === typeof c.P.execute && b.when("A", "a-sheet", "packardGlowIngressMobileJsEnabled", "glowMobileSelectedLocationType", "glowMobileSelectedLocationValue", "glowMobileBottomSheetCallRefactor", "glowMobileStoreName", "glowMobileDoneBottonEnabled",
            "glowMobileDoneBottonLabel").execute("GLOWModule", function(a, d, g, e, f, k, l, m, q) {
            function r() {
                n.ajax({
                    type: "POST",
                    url: "/gp/glow/get-location-label.html",
                    data: {
                        storeContext: l,
                        pageType: c.ue_pty ? c.ue_pty : "NoPageType"
                    },
                    success: function(b) {
                        b = c.JSON.parse(b);
                        t && 0 !== t.length && b.deliveryShortLine ? t.html(b.deliveryShortLine) : (w && 0 !== w.length && b.deliveryLine1 && w.html(b.deliveryLine1), x && 0 !== x.length && b.deliveryLine2 && x.html(b.deliveryLine2));
                        b.selectedDestination && b.selectedDestination.destinationObfuscatedAddressId &&
                            n("#unifiedLocation1ClickAddress").val(b.selectedDestination.destinationObfuscatedAddressId);
                        a.trigger("packard:glow:destinationChangeNavAck")
                    }
                })
            }

            function A() {
                n.ajax({
                    type: "POST",
                    url: "/gp/glow/get-address-selections.html",
                    data: {
                        selectedLocationType: y,
                        selectedLocationValue: u,
                        deviceType: "mobile"
                    },
                    success: function(a) {
                        z = d.create({
                            inlineContent: a,
                            height: 350,
                            name: "glux_bottom_sheet",
                            closeType: B,
                            closeMessage: D
                        })
                    }
                })
            }

            function G() {
                n.ajax({
                    type: "POST",
                    url: "/gp/glow/get-address-selections.html",
                    data: {
                        selectedLocationType: y,
                        selectedLocationValue: u,
                        deviceType: "mobile",
                        pageType: c.ue_pty ? c.ue_pty : "NoPageType",
                        storeContext: l
                    },
                    success: function(a) {
                        n("#glow-bottom-sheet").html(a);
                        p = !0
                    }
                })
            }
            if (g) {
                var n = a.$,
                    y = e,
                    u = f,
                    p = !1,
                    z, t = n("#glow-ingress-single-line"),
                    w = n("#glow-ingress-line1"),
                    x = n("#glow-ingress-line2"),
                    B = m ? "message" : v,
                    D = m ? q : v;
                a.on("packard:glow:destinationChangeNav", r);
                a.declarative("glow-sheet-trigger", "click", function() {
                    k && !p && G();
                    z && z.show()
                });
                b.when("navCF").execute("GLOWnavCF", function() {
                    k ? z = d.create({
                        inlineContent: '\x3cdiv id\x3d"glow-bottom-sheet"\x3e\x3cdiv class\x3d"a-spinner-wrapper"\x3e\x3cspan class\x3d"a-spinner a-spinner-medium"\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e',
                        height: 350,
                        name: "glux_bottom_sheet",
                        closeType: B,
                        closeMessage: D
                    }) : A()
                })
            }
        })
    })(c.$Nav, q);
    (function(d) {
        d.when("$", "Observer").build("SwitchAccountRedirect", function(b, a) {
            return {
                setRedirectUrl: function(a) {
                    var b = a.attr("href");
                    if (!b) return !0;
                    var d = c.location.href,
                        d = d.replace(/^http:\/\//i, "https://");
                    d.match(/ref=/g) ? d = d.replace(/(ref=)[^\&\?]+/g, "ref\x3dnav_youraccount_switchacct") : d.match(/ref_=/g) ? d = d.replace(/(ref_=)[^\&\?]+/g, "ref_\x3dnav_youraccount_switchacct") : (d += d.match(/\?/g) ? "\x26" : "?", d += "ref_\x3dnav_youraccount_switchacct");
                    d += d.match(/\?/g) ? "\x26" : "?";
                    d = encodeURIComponent(d + "switch_account\x3dpicker");
                    b = b.replace(/(return_to(\%3D|\=))[^\&\?]+/g, "return_to\x3d" + d);
                    a.attr("href", b)
                }
            }
        })
    })(c.$Nav);
    (function(d) {
        d && d.when && d.when("navCF").execute("navCFSpy", function(b) {
            b && b.backupEventTriggered && c.ueLogError && c.ueLogError({
                attribution: "AmazonNavigationCards",
                logLevel: "ERROR",
                message: "Page is not loading Nav BTF component PageType : " + (c.ue_pty ? c.ue_pty : "NavUnknownPageType")
            })
        })
    })(q);
    (function(d) {
        d.when("util.ajax").build("util.ajaxReftagLogger",
            function(b) {
                return function(a) {
                    var d = {
                        attribution: "AmazonNavigationCards",
                        logLevel: "ERROR"
                    };
                    return b({
                        retryMetric: "ajax-reftag-logger-retry",
                        errorMetric: "ajax-reftag-logger-error",
                        url: "/gp/navigation/ajax/ajax-reftag-logger.html",
                        data: {
                            pageType: c.ue_pty ? c.ue_pty : "NavUnknownPageType",
                            ref: a
                        },
                        error: function(a, b, f) {
                            a = " Reftag logger AJAX Call failed. Status Code : " + a.status + " Status text : " + b + " Exception : " + f;
                            c.ueLogError && c.ueLogError(a, d)
                        }
                    })
                }
            })
    })(c.$Nav);
    (function(d) {
        d.when("$", "config", "$F", "metrics",
            "hamburgerMenuIconAvailableOnLoad").run("pinnedNav", function(b, a, d, g) {
            var e = b("#navbar"),
                f, k, l, m, q, r = !1,
                A = !1,
                v = c.innerHeight,
                n = c.scrollY,
                y, u, p = [],
                z = ["fixed", "sticky", "-webkit-sticky"],
                t = e.is(".nav-t-gateway, .nav-t-search"),
                w = t || e.is(".nav-t-standard, .nav-t-standardNoSearch");
            if (a.pinnedNav && w) {
                var x = function() {
                        m.addClass("fixed-navbar");
                        t && 1 === a.pinnedNav && (f.addClass("animate-nav"), k.addClass("animate-nav"), l = b("#suggestions4"), l.addClass("animate-search-suggestions"));
                        g.increment("nav-pinned-action-pin")
                    },
                    B = function() {
                        t && 1 === a.pinnedNav && (f.removeClass("animate-nav"), k.removeClass("animate-nav"), l.removeClass("animate-search-suggestions"));
                        m.removeClass("fixed-navbar");
                        g.increment("nav-pinned-action-unpin")
                    };
                (function() {
                    f = b("#nav-logobar");
                    k = b(".nav-searchbar-wrapper");
                    m = b(document.body);
                    q = b("#navbar .nav-search-field .nav-input")[0];
                    y = f.offset().top;
                    u = f.height();
                    var l = function() {
                            var d = c.scrollY,
                                e = 0,
                                f;
                            r = m.hasClass("fixed-navbar");
                            f = b("#nav-search-form").height() - u;
                            t ? (f = y + 2 * u + f, e = k.height() / 2) : f = y;
                            var g = d < n;
                            if (1 === a.pinnedNav) r || !(d >= f) || g && d < f + e ? r && g && d < f + e && !b("body").hasClass("lock-position") && B() : x();
                            else if (2 === a.pinnedNav) {
                                var h = Math.abs(n - d),
                                    e = f + e,
                                    p = u,
                                    q = 1.5 * u;
                                r || !(g && d >= f && h > p) || g && d < e ? (r && d < e && !b("body").hasClass("lock-position") || r && !g && h > q) && B() : x()
                            }
                            n = d;
                            !A && d > v && (c.removeEventListener("scroll", l, !1), c.addEventListener("scroll", w, !1), A = !0)
                        },
                        w = d.throttle(100).on(function() {
                            A && c.scrollY < v && (c.removeEventListener("scroll", w, !1), c.addEventListener("scroll", l, !1), A = !1);
                            l()
                        });
                    c.addEventListener("scroll",
                        l, !1);
                    !e.is(".nav-t-gateway") && b("#a-page")[0] && c.addEventListener("scroll", d.throttle(100).on(function() {
                        if (r && f.is(":visible")) {
                            var a = document.getElementById("a-page").getElementsByTagName("*"),
                                b = a.length,
                                d = f.height();
                            g.increment("nav-pinned-handle-elements");
                            for (var e = 0; e < b; e++) {
                                var h;
                                if (h = 0 > p.indexOf(a[e]))
                                    if (h = a[e], "nav-logobar" === h.id || h.classList.contains("nav-searchbar-wrapper") || h.classList.contains("nav-ignore-pinning")) h = !1;
                                    else {
                                        var k = c.getComputedStyle(h, null),
                                            l = k.getPropertyValue("position");
                                        h = 0 <= z.indexOf(l) && 0 < h.offsetHeight && parseInt(k.top, 10) <= f.height() ? !0 : !1
                                    }
                                h && (h = parseInt(c.getComputedStyle(a[e], null).top, 10), isNaN(h) || (d = h + f.height()), d += "px", a[e].classList.add("animate-secondary"), a[e].style.top = d, p.push(a[e]), g.increment("nav-pinned-pin-extra"))
                            }
                        }
                        if (p && 0 < p.length)
                            for (a = p.length, b = 0; b < a; b++)
                                if (d = c.getComputedStyle(p[b], null).getPropertyValue("position"), e = p[b].getAttribute("data-pinned-top"), 0 === c.scrollY || !r || 0 > z.indexOf(d)) p[b].style.top = e, p[b].classList.remove("animate-secondary"),
                                    p[b].removeAttribute("data-pinned-top"), p.splice(b, 1), b++
                    }), !1);
                    var E = c.scrollY,
                        F = function() {
                            var a = c.scrollY;
                            Math.abs(E - a) > u && (b("#nav-search-keywords").blur(), b("#suggestions4, #suggestions2").hide(), c.removeEventListener("scroll", F, !1));
                            E = a
                        };
                    t && q.addEventListener("focus", function() {
                        setTimeout(function() {
                            c.addEventListener("scroll", F, !1)
                        }, 1E3)
                    });
                    !t && 0 >= y && 1 === a.pinnedNav && x()
                })()
            }
        })
    })(c.$Nav);
    (function(c) {
        c.when("$", "metrics").run("scrollMetrics", function(b, a) {
            var c = b(".nav-gwbar-scroll");
            if (0 < c.length) {
                a.increment("Navm:ScrollableBar:Exists");
                0 < c.scrollLeft() && a.increment("Navm:ScrollableBar:ScrollBeforeJs");
                c.children().last()[0].getBoundingClientRect().right > b(document).width() && a.increment("Navm:ScrollableBar:ScrollableLink");
                var d = c.scrollLeft(),
                    e;
                c.scroll(function() {
                    var b = c.scrollLeft();
                    0 < b - d ? ("r" !== e && a.increment("Navm:ScrollableBar:ScrollRight"), e = "r") : ("l" !== e && a.increment("Navm:ScrollableBar:ScrollLeft"), e = "l");
                    d = b
                })
            }
        })
    })(c.$Nav);
    (function(c) {
        c.when("$", "page.ready").run("pinnedSubnav", function(b) {
            var a = b("#navm-subnav"),
                c = b("#nav-logobar");
            if (!b("#nav-button-search").length && a.length && a.hasClass("navm-subnav-pinned")) {
                var d = a.position() ? a.position().top : 0,
                    e = function(e) {
                        e = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
                        var k = b(document.body).hasClass("fixed-navbar") && 0 < c.length ? c.outerHeight() : 0;
                        e > d - k ? a.css({
                            position: "fixed",
                            top: k
                        }) : a.css({
                            position: "relative",
                            top: 0
                        })
                    };
                b(document).bind("touchmove scroll", e);
                e()
            }
        })
    })(c.$Nav);
    (function(d) {
        d.when("$", "page.ready").run("animateScrollingSubnav", function(b) {
            b =
                b("#navm-subnav #navm-subnav-content");
            if (b.length && b.hasClass("navm-subnav-scroll")) {
                var a = b.find(".nav-a-selected");
                if (a.length) {
                    a = (a = a[0]) ? (a = a.getBoundingClientRect()) ? (a.left + a.right) / 2 : null : null;
                    var d = c.innerWidth ? c.innerWidth / 2 : a;
                    a && a > d && b.animate({
                        scrollLeft: a - d
                    }, 1E3)
                }
            }
        })
    })(c.$Nav)
});
/* ******** */
(function(d) {
    var a = window.AmazonUIPageJS || window.P,
        c = a._namespace || a.attributeErrors,
        b = c ? c("InternationalCustomerPreferencesNavMobileAssets", "") : a;
    b.guardFatal ? b.guardFatal(d)(b, window) : b.execute(function() {
        d(b, window)
    })
})(function(d, a, c) {
    a.$Nav && a.$Nav.when("$", "page.loaded").build("updateIcpReturnUrl", function(b) {
        var d = encodeURIComponent(a.location.pathname + a.location.search),
            c = function(a, c) {
                if (a = b(c).attr("href")) a = a.replace("preferencesReturnUrl\x3d%2F", "preferencesReturnUrl\x3d" + d), b(c).attr("href",
                    a)
            };
        return function(a) {
            b(a).each(c)
        }
    });
    a.$Nav && a.$Nav.when("updateIcpReturnUrl").run("updateIcpFooterReturnUrls", function(a) {
        a("#icp-touch-link-language, #icp-touch-link-country, #icp-touch-link-cop")
    })
});
/* ******** */
(function(f) {
    var h = window.AmazonUIPageJS || window.P,
        k = h._namespace || h.attributeErrors,
        b = k ? k("GlowToasterAssets", "") : h;
    b.guardFatal ? b.guardFatal(f)(b, window) : b.execute(function() {
        f(b, window)
    })
})(function(f, h, k) {
    f.when("A", "a-alert", "glow-toaster-action-registry", "glow-toaster-overlay", "glow-toaster-strings").register("glow-toaster", function(b, d, c, a, l) {
        var g = b.$,
            m = function(e) {
                this.animationEnabled = !0;
                this.params = e || {};
                this.slot = "DEFAULT";
                this.type = k;
                this.blocking = !1;
                this.automaticAction = k;
                this.executeAction = {
                    OPEN_GLOW: this.openGlowAutomaticAction
                };
                this.slots = {
                    DEFAULT: b.capabilities.mobile ? "#nav-subnav-toaster" : "#nav-main .nav-left",
                    SUBNAV: "#nav-subnav-toaster"
                };
                this.selectors = {
                    navbar: "#navbar",
                    subnav: "#nav-subnav",
                    toaster: ".glow-toaster",
                    actionButton: ".glow-toaster-button",
                    actionError: ".glow-toaster-error"
                };
                this.endpoint = "/gp/glow/get-toaster.html";
                this.refreshXhr = k;
                this.initEvents()
            };
        g.extend(m.prototype, {
            initEvents: function() {
                b.on("packard:glow:destinationChangeAll", this.handleGlowAddressChange.bind(this));
                b.on("a:popover:beforeShow", this.handlePopoverBeforeShow.bind(this));
                b.on("a:popover:afterHide", this.handlePopoverAfterHide.bind(this));
                b.on("a:sheet:beforeShow", this.handleSheetBeforeShow.bind(this));
                b.on("a:sheet:afterHide", this.handleSheetAfterHide.bind(this));
                b.on.ready(this.handlePageReady.bind(this));
                g(h).bind("beforeunload", this.handleBeforeUnload.bind(this));
                g(h).bind("focusin", this.handleFocusIn.bind(this))
            },
            refresh: function() {
                this.ready && (this.hide(), this.abortRefresh(), this.refreshXhr =
                    b.get(this.endpoint, {
                        params: this.params,
                        cache: !1,
                        success: function(e, a, b) {
                            "string" === typeof e && this.update(e)
                        }.bind(this),
                        error: function(e, a, b) {}.bind(this)
                    }))
            },
            remove: function() {
                this.getToasterElement().remove()
            },
            show: function() {
                !b.capabilities.mobile && "DEFAULT" == this.slot || !this.animationEnabled ? this.getToasterElement().show() : this.getToasterElement().slideDown();
                this.blocking && a.show();
                this.getToasterElement().attr("tabindex", -1).focus();
                b.capabilities.isAmazonApp && b.capabilities.ios && h.scrollTo(0, -999)
            },
            hide: function() {
                !b.capabilities.mobile && "DEFAULT" == this.slot || !this.animationEnabled ? this.getToasterElement().hide() : this.getToasterElement().slideUp();
                this.blocking && a.hide()
            },
            isHidden: function() {
                return !this.getToasterElement().length || this.getToasterElement().is(":hidden")
            },
            isVisible: function() {
                return !this.isHidden()
            },
            showError: function(e) {
                this.setError(e);
                this.show()
            },
            showErrorID: function(e) {
                e = l.get(e);
                this.showError(e)
            },
            setError: function(e) {
                var a = this.getToasterElement().find(this.selectors.actionError),
                    a = d(a);
                a.text(e || "");
                e ? a.show() : a.hide()
            },
            clearError: function() {
                this.setError("")
            },
            isActionFailureEmulated: function() {
                return /[?&]glowToasterActionEmulateFailure=1(&|$)/.test(location.href)
            },
            syncOverlay: function() {
                this.blocking ? a.show() : a.hide()
            },
            update: function(e) {
                e = e.trim();
                var a = !e.length;
                this.remove();
                a || (a = g(e).hide(), a.is(this.selectors.toaster) || (a = this.createFatalErrorToaster(e)), this.importProps(a), this.attachActions(a), this.syncOverlay(), this.getContainerElement().append(a), this.show())
            },
            createFatalErrorToaster: function(e) {
                var a = "glow-toaster glow-toaster-theme-alert glow-toaster-slot-default a-padding-medium",
                    c = "";
                b.capabilities.isAmazonApp ? a += " glow-toaster-app" : b.capabilities.mobile || (a += " nav-coreFlyout nav-flyout", c = '\x3cdiv class\x3d"nav-arrow"\x3e\x3cdiv class\x3d"nav-arrow-inner"\x3e\x3c/div\x3e\x3c/div\x3e');
                e = g('\x3cdiv class\x3d"' + a + '" data-toaster-slot\x3d"DEFAULT"\x3e\x3cdiv class\x3d"glow-toaster-content"\x3e' + c + '\x3cdiv class\x3d"glow-toaster-body"\x3e' + e + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
                e.hide();
                return e
            },
            getCurrentContainer: function() {
                return this.slots[this.slot]
            },
            getContainerElement: function() {
                var a = this.getCurrentContainer();
                return g(a)
            },
            getToasterElement: function() {
                var a = this.getCurrentContainer();
                return g(a + " " + this.selectors.toaster)
            },
            importProps: function(a) {
                a = a.data();
                a.toasterSlot && (this.slot = a.toasterSlot);
                this.type = a.toasterType || k;
                this.blocking = !!parseInt(a.toasterBlocking);
                this.automaticAction = a.toasterAutomaticAction || k
            },
            attachActions: function(a) {
                a.bind("click touchstart",
                    this.selectors.actionButton, this.handleActionButtonClick.bind(this));
                this.automaticAction && this.executeAction[this.automaticAction] && this.executeAction[this.automaticAction].call(this)
            },
            abortRefresh: function() {
                this.refreshXhr && (this.refreshXhr.abort(), this.refreshXhr = k)
            },
            handleActionButtonClick: function(a) {
                g(a.target).is("a") || (a.stopImmediatePropagation(), a.preventDefault());
                a = g(a.target).data();
                if (a.actionType) {
                    var b = c.getByActionType(a.actionType);
                    b && ("SET_POSTAL_CODE" === a.actionType && (a.actionParams.zipCode =
                        g("input#glow-toaster-postal-code-input").val()), b.handle(this, a.actionParams))
                }
            },
            handleGlowAddressChange: function() {
                this.refresh()
            },
            handlePopoverBeforeShow: function(b) {
                b = b && b.popover && b.popover.type;
                this.blocking && "modal" == b && this.isVisible() && a.hide()
            },
            handlePopoverAfterHide: function(b) {
                b = b && b.popover && b.popover.type;
                this.blocking && "modal" == b && this.isVisible() && a.show()
            },
            handleSheetBeforeShow: function() {
                this.blocking && this.isVisible() && a.hide()
            },
            handleSheetAfterHide: function() {
                this.blocking && this.isVisible() &&
                    a.show()
            },
            handleBeforeUnload: function() {
                this.abortRefresh()
            },
            handlePageReady: function() {
                this.ready = !0;
                this.refresh()
            },
            handleFocusIn: function(b) {
                if (this.blocking && a.isVisible()) {
                    var c = this.getToasterElement(),
                        l = g(this.selectors.subnav).has(b.target).length,
                        d = g(this.selectors.navbar).add(this.getContainerElement()).has(b.target).length;
                    b = this.getContainerElement().has(b.target).length;
                    if (l || !d && !b) c.focus(), a.sync()
                }
            },
            openGlowAutomaticAction: function() {
                var a = g("#nav-global-location-slot .a-declarative"),
                    b = g("#nav-global-location-slot.a-declarative");
                a.length ? a.click() : b.length && b.click()
            }
        });
        return m
    });
    "use strict";
    f.when("A").register("glow-toaster-string-container", function(b) {
        var d = b.$;
        b = function(b) {
            this.stringMap = b || {}
        };
        d.extend(b.prototype, {
            get: function(b) {
                return this.stringMap[b] !== k ? this.stringMap[b] : ""
            },
            load: function(b) {
                d.extend(this.stringMap, b)
            }
        });
        return b
    });
    "use strict";
    f.when("glow-toaster-string-container").register("glow-toaster-strings", function(b) {
        return new b({
            "glow-toaster-address-change-error": "An address change error has occurred. Please try again.",
            "glow-toaster-unknown-error": "An error has occurred. Please try again."
        })
    });
    "use strict";
    f.when("A", "glow-toaster").register("glow-toaster-manager", function(b, d) {
        var c = function() {};
        b.$.extend(c.prototype, {
            toasters: [],
            create: function(a) {
                a = new d(a);
                this.toasters.push(a);
                return a
            },
            getAll: function() {
                return this.toasters
            }
        });
        return new c
    });
    "use strict";
    f.when("A").register("glow-toaster-overlay", function(b) {
        var d = b.$,
            c = function() {
                this.overlayClass = "glow-toaster-overlay";
                this.overlayLockClass = "glow-toaster-overlay-lock";
                this.insertAfterSelector = "#nav-subnav-toaster";
                this.$overlay = k;
                this.$body = d(document.body);
                this.animationEnabled = !0
            };
        d.extend(c.prototype, {
            hide: function() {
                this.$overlay && (this.$body.removeClass(this.overlayLockClass), this.animationEnabled ? this.$overlay.fadeOut() : this.$overlay.hide())
            },
            show: function() {
                this.$overlay || (this.createOverlay(), this.initEvents());
                this.sync();
                this.$body.addClass(this.overlayLockClass);
                this.animationEnabled ? this.$overlay.fadeIn() : this.$overlay.show()
            },
            isVisible: function() {
                return !!(this.$overlay &&
                    this.$overlay.length && this.$overlay.is(":visible"))
            },
            isHidden: function() {
                return !this.isVisible()
            },
            sync: function() {
                this.scrollTop();
                this.syncSize()
            },
            scrollTop: function() {
                d(document).scrollTop(0)
            },
            createOverlay: function() {
                this.$overlay = d("\x3cdiv\x3e").addClass(this.overlayClass).height(0).insertAfter(this.insertAfterSelector);
                b.capabilities.touch && this.disableTouch()
            },
            disableTouch: function() {
                this.$overlay.bind("click touchstart", function(a) {
                    a.cancelable && a.preventDefault()
                })
            },
            initEvents: function() {
                d(h).bind("resize",
                    this.syncSize.bind(this))
            },
            syncSize: function() {
                if (this.$overlay && this.$overlay.length) {
                    var a = this.getScreenHeight();
                    this.$overlay.height(a);
                    var b = this.getDocumentHeight();
                    b > a && this.$overlay.height(b)
                }
            },
            getScreenHeight: function() {
                return d(h).height()
            },
            getDocumentHeight: function() {
                return d(document).height()
            }
        });
        return new c
    });
    "use strict";
    f.when("A", "glow-toaster-set-address-action", "glow-toaster-select-location-action", "glow-toaster-dismiss-action", "glow-toaster-set-postalcode-action").register("glow-toaster-action-registry",
        function(b, d, c, a, l) {
            var g = function(a) {
                this.actions = a || [];
                this.hashActionsByType()
            };
            b.$.extend(g.prototype, {
                getByActionType: function(a) {
                    return this.actionsByType[a]
                },
                getAll: function() {
                    return this.actions
                },
                hashActionsByType: function() {
                    this.actionsByType = b.reduce(this.actions, function(a, b) {
                        a[b.name] = b;
                        return a
                    }, {})
                }
            });
            return new g([d, c, a, l])
        });
    "use strict";
    f.when("A").register("glow-toaster-dismiss-action", function(b) {
        var d = function() {};
        b.$.extend(d.prototype, {
            name: "DISMISS",
            endpoint: "/gp/glow/dismiss-toaster.html",
            errorStringID: "glow-toaster-unknown-error",
            handle: function(c, a) {
                c.hide();
                b.post(this.endpoint, {
                    params: a,
                    success: function(a, b, d) {
                        "object" !== typeof a || !a.success || c.isActionFailureEmulated() ? c.showErrorID(this.errorStringID) : c.refresh()
                    }.bind(this),
                    error: function(a, b, d) {
                        c.showErrorID(this.errorStringID)
                    }.bind(this)
                })
            }
        });
        return new d
    });
    "use strict";
    f.when("A").register("glow-toaster-select-location-action", function(b) {
        var d = b.$,
            c = function() {};
        d.extend(c.prototype, {
            name: "SELECT_LOCATION",
            errorStringID: "glow-toaster-unknown-error",
            handle: function(a, b) {
                a.hide();
                this.showAddressSelector(a, b)
            },
            showAddressSelector: function(a, c) {
                b.capabilities.isAmazonApp ? this.showAppAddressSelector(a, c) : this.showWebAddressSelector(a)
            },
            showAppAddressSelector: function(a, b) {
                this.csmLogCount(a);
                f.when("BottomSheetPlugin").execute(function(a) {
                    a.ShowBottomSheet({
                        useCase: "LocUX",
                        paramsInJson: b || {}
                    })
                })
            },
            showWebAddressSelector: function(a) {
                var b = d("#nav-global-location-slot .a-declarative"),
                    c = d("#nav-global-location-slot.a-declarative"),
                    f = a.isActionFailureEmulated();
                b.length && !f ? (b.click(), this.csmLogCount(a)) : c.length && !f ? (c.click(), this.csmLogCount(a)) : (a.showErrorID(this.errorStringID), this.csmLogCount(a, !0))
            },
            csmLogCount: function(a, b) {
                h.ue && h.ue.count && (a = "GlowToaster:" + (b ? "SelectLocationFailed" : "SelectLocation") + ":" + a.type + ":" + this.getDeviceType() + ":", h.ue.count(a, 1))
            },
            getDeviceType: function() {
                return b.capabilities.isAmazonApp ? "APP" : b.capabilities.tablet ? "TABLET" : b.capabilities.mobile ? "MOBILE" : "DESKTOP"
            }
        });
        return new c
    });
    "use strict";
    f.when("A").register("glow-toaster-set-address-action",
        function(b) {
            var d = function() {};
            b.$.extend(d.prototype, {
                name: "SET_ADDRESS",
                endpoint: "/gp/delivery/ajax/address-change.html",
                errorStringID: "glow-toaster-address-change-error",
                forceReload: !0,
                handle: function(c, a) {
                    a && a.addressID && (c.hide(), b.post(this.endpoint, {
                        params: {
                            locationType: "ACCOUNT_ADDRESS",
                            addressId: a.addressID,
                            deviceType: "web",
                            pageType: h.ue_pty,
                            actionSource: "glow-toaster",
                            toasterType: c.type
                        },
                        success: function(a, b, d) {
                            "object" !== typeof a || !a.sembuUpdated || c.isActionFailureEmulated() ? c.showErrorID(this.errorStringID) :
                                this.refreshGlowIngress()
                        }.bind(this),
                        error: function(a, b, d) {
                            c.showErrorID(this.errorStringID)
                        }.bind(this)
                    }))
                },
                refreshGlowIngress: function() {
                    b.capabilities.isAmazonApp ? f.when("BottomSheetPlugin").execute(function(b) {
                        b.UpdateGlowIngress({});
                        this.onGlowIngressRefreshComplete()
                    }.bind(this)) : (b.trigger("packard:glow:destinationChangeNav"), this.onGlowIngressRefreshComplete())
                },
                onGlowIngressRefreshComplete: function() {
                    this.forceReload ? h.location.reload() : toaster.refresh()
                }
            });
            return new d
        });
    "use strict";
    f.when("A").register("glow-toaster-set-postalcode-action",
        function(b) {
            var d = b.$,
                c = function() {};
            d.extend(c.prototype, {
                name: "SET_POSTAL_CODE",
                endpoint: "/gp/delivery/ajax/address-change.html",
                forceReload: !0,
                handle: function(a, c) {
                    c && null !== c.zipCode && c.zipCode !== k && b.post(this.endpoint, {
                        params: {
                            locationType: "LOCATION_INPUT",
                            zipCode: this.preparePostalCodeForSubmit(c.zipCode),
                            deviceType: "web",
                            pageType: h.ue_pty,
                            actionSource: "glow-toaster",
                            toasterType: a.type
                        },
                        success: function(b, f, e) {
                            "object" !== typeof b || !b.sembuUpdated || a.isActionFailureEmulated() ? (a.showError(c.inputError),
                                d("input#glow-toaster-postal-code-input").addClass("a-form-error")) : this.refreshGlowIngress()
                        }.bind(this),
                        error: function(b, d, e) {
                            a.showError(c.inputError)
                        }.bind(this)
                    })
                },
                refreshGlowIngress: function() {
                    b.capabilities.isAmazonApp ? f.when("BottomSheetPlugin").execute(function(a) {
                        a.UpdateGlowIngress({});
                        this.onGlowIngressRefreshComplete()
                    }.bind(this)) : (b.trigger("packard:glow:destinationChangeNav"), this.onGlowIngressRefreshComplete())
                },
                preparePostalCodeForSubmit: function(a) {
                    return a.replace(/[^A-Za-z0-9- /]+/g,
                        "")
                },
                onGlowIngressRefreshComplete: function() {
                    this.forceReload ? h.location.reload() : toaster.refresh()
                }
            });
            return new c
        })
});
/* ******** */