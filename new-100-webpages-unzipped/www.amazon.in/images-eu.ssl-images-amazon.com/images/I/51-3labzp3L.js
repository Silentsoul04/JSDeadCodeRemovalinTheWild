(function(G) {
    var f = window.AmazonUIPageJS || window.P,
        t = f._namespace || f.attributeErrors,
        e = t ? t("RetailSearchAutocompleteAssets", "") : f;
    e.guardFatal ? e.guardFatal(G)(e, window) : e.execute(function() {
        G(e, window)
    })
})(function(G, f, t) {
    (function(e) {
        if (!e.$Nav || e.$Nav._replay) {
            document.createElement("header");
            var d = function() {
                this.data = {}
            };
            d.arrayAdder = function(a) {
                return function() {
                    this.data[a] = (this.data[a] || []).concat([].slice.call(arguments));
                    return this
                }
            };
            d.prototype = {
                build: function(a, c) {
                    this.data.name = a;
                    this.data.value =
                        c;
                    this.data.immediate = !1;
                    this.data.process = !0;
                    b.manager.add(this.data)
                },
                run: function(a, c) {
                    c && (this.data.name = a);
                    this.data.value = c || a;
                    this.data.process = !0;
                    b.manager.add(this.data)
                },
                publish: function(a, c) {
                    this.data.name = a;
                    this.data.value = c;
                    b.manager.publish(this.data)
                },
                declare: function(a, c) {
                    this.data.name = a;
                    this.data.value = c;
                    b.manager.add(this.data)
                },
                when: d.arrayAdder("when"),
                iff: d.arrayAdder("iff"),
                filter: d.arrayAdder("filter"),
                observe: d.arrayAdder("observe")
            };
            var b = function(a) {
                    b.manager.add(a)
                },
                c =
                function(a) {
                    b[a] = function() {
                        var c = new d;
                        return c[a].apply(c, arguments)
                    }
                },
                g;
            for (g in d.prototype) d.prototype.hasOwnProperty(g) && c(g);
            b.make = function() {
                return b
            };
            b.getNow = function(a, c) {
                return b.manager.get(a, c)
            };
            b.stats = function(a) {
                return b.manager.stats(a)
            };
            b.importEvent = function(a, c) {
                c = c || {};
                c.name = a;
                b.manager.importEvent(c)
            };
            b.manager = {
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
                get: function(a, c) {
                    return c
                },
                stats: function() {
                    return {}
                }
            };
            if (e.$Nav && e.$Nav.make && e.$Nav.make._shims) {
                c = function(a) {
                    for (var c = new d, e = 0; e < a.length; e++) {
                        var g = a[e];
                        if ("importEvent" === g.m) {
                            a = g.a[1] || {};
                            a.name = g.a[0];
                            b.manager.importEvent(a);
                            break
                        } else if (!c[g.m]) break;
                        c[g.m].apply(c, g.a)
                    }
                };
                g = e.$Nav.make._shims;
                for (var a = 0; a < g.length; a++) {
                    for (var q = 0; q < g[a]._replay.length; q++) c(g[a]._replay[q]);
                    for (var m in g[a]) g[a].hasOwnProperty(m) && b.hasOwnProperty(m) && (g[a][m] = b[m])
                }
            }
            e.$Nav = b
        }
    })(f);
    (function(e,
        d, b, c) {
        if ((d = e.$Nav) && d.manager && d.manager.pending) {
            var g = b.now || function() {
                    return +new b
                },
                a = function(a) {
                    return "function" === typeof a
                },
                q = "object" === typeof e.P && "function" === typeof e.P.when && "function" === typeof e.P.register && "function" === typeof e.P.execute,
                m = function(a, c) {
                    c = c || {};
                    var b = c.start || 50,
                        e = function() {
                            b <= (c.max || 2E4) && !a() && (setTimeout(e, b), b *= c.factor || 2)
                        };
                    return e
                },
                k = function(a, c) {
                    try {
                        return c()
                    } catch (b) {
                        if (c = b, a = "[rcx-nav:" + a + "] ", c && c.message ? c.message = a + c.message : "object" === typeof c ? c.message =
                            a : c = a + c, e.console && e.console.error && e.console.error(c), e.ueLogError) e.ueLogError(c);
                        else throw c;
                    }
                },
                h = function() {
                    function a() {
                        return setTimeout(c, 0)
                    }

                    function c() {
                        for (var e = a(), q = g(); b.length;)
                            if (b.shift()(), 50 < g() - q) return;
                        clearTimeout(e);
                        d = !1
                    }
                    var b = [],
                        d = !1;
                    try {
                        /OS 6_[0-9]+ like Mac OS X/i.test(navigator.userAgent) && e.addEventListener && e.addEventListener("scroll", a, !1)
                    } catch (q) {}
                    return function(c) {
                        b.push(c);
                        d || (a(), d = !0)
                    }
                }(),
                f = function() {
                    var a = {};
                    return {
                        run: function(c) {
                            if (a[c] instanceof Array)
                                for (var b =
                                        0; b < a[c].length; b++) a[c][b]();
                            a[c] = !0
                        },
                        add: function(c, b) {
                            for (var e = 1, d = function() {
                                    0 >= --e && h(b)
                                }, g = c.length; g--;) !0 !== a[c[g]] && ((a[c[g]] = a[c[g]] || []).push(d), e++);
                            d()
                        }
                    }
                },
                l = function(a) {
                    a = a || {};
                    this.context = a.context || e;
                    this.once = a.once || !1;
                    this.async = a.async || !1;
                    this.observers = [];
                    this.notifyCount = 0;
                    this.notifyArgs = []
                };
            l.prototype = {
                notify: function() {
                    this.notifyCount++;
                    if (!(this.once && 1 < this.notifyCount)) {
                        this.notifyArgs = [].slice.call(arguments);
                        for (var a = 0; a < this.observers.length; a++) this._run(this.observers[a])
                    }
                },
                observe: function(c) {
                    a(c) && (this.once && this.isNotified() ? this._run(c) : this.observers.push(c))
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
                    var c = this.notifyArgs,
                        b = this.context;
                    this.async ? h(function() {
                        a.apply(b, c)
                    }) : a.apply(b, c)
                }
            };
            c = function() {
                var c = {},
                    b = 0,
                    d = {},
                    p = f(),
                    w = {},
                    t = function(a) {
                        this.data = {
                            name: "nav:" + b++,
                            value: null,
                            result: null,
                            immediate: !0,
                            process: !1,
                            override: !1,
                            resolved: !1,
                            watched: !1,
                            context: d,
                            when: [],
                            iff: [],
                            filter: [],
                            observe: [],
                            stats: {
                                defined: g(),
                                resolved: -1,
                                buildStarted: -1,
                                buildCompleted: -1,
                                callCount: 0
                            }
                        };
                        for (var c in a) a.hasOwnProperty(c) && (this.data[c] = a[c])
                    };
                t.prototype = {
                    getDependencyNames: function() {
                        for (var a = [].concat(this.data.when, this.data.filter), c = 0; c < this.data.iff.length; c++) "string" === typeof this.data.iff[c] ? a.push(this.data.iff[c]) : this.data.iff[c].name && a.push(this.data.iff[c].name);
                        return a
                    },
                    checkIff: function(a) {
                        a = function(a) {
                            a = "string" === typeof a ? {
                                name: a
                            } : a;
                            var b = c[a.name];
                            if (!b || !b.data.resolved) return !1;
                            var b = b.getResult(),
                                b = a.prop && b ? b[a.prop] : b,
                                d = a.value || !0;
                            switch (a.op || "truthy") {
                                case "truthy":
                                    return !!b;
                                case "falsey":
                                    return !b;
                                case "eq":
                                    return b === d;
                                case "ne":
                                    return b !== d;
                                case "gt":
                                    return b > d;
                                case "lt":
                                    return b < d;
                                case "gte":
                                    return b >= d;
                                case "lte":
                                    return b <= d
                            }
                            return !1
                        };
                        for (var b = 0; b < this.data.iff.length; b++)
                            if (!a(this.data.iff[b])) return !1;
                        return !0
                    },
                    watchModule: function(b) {
                        var d = this;
                        w[b] || (w[b] = new l);
                        w[b].observe(function() {
                            var c = d.getResult();
                            if (a(c)) return c.apply(d.data.context,
                                arguments)
                        });
                        c[b] && c[b].applyObserverWrapper()
                    },
                    applyObserverWrapper: function() {
                        var c = this;
                        if (w[this.data.name] && !this.data.watched && this.data.resolved && this.data.result) {
                            if (a(this.data.result)) {
                                var b = this.data.result;
                                this.data.result = function() {
                                    var a = b.apply(c.data.context, arguments);
                                    w[c.data.name].notify(a)
                                };
                                for (var d in b) b.hasOwnProperty(d) && (this.data.result[d] = b[d])
                            }
                            this.data.watched = !0
                        }
                    },
                    applyFilterWrapper: function() {
                        var b = this;
                        if (0 !== this.data.filter.length && a(this.data.result)) {
                            for (var e = [], g = [], q = 0; q < this.data.filter.length; q++)
                                if (c.hasOwnProperty(this.data.filter[q])) {
                                    var m = c[this.data.filter[q]].getResult();
                                    a(m.request) && e.push(m.request);
                                    a(m.response) && g.push(m.response)
                                }
                            var k = function(a, c) {
                                    for (var d = 0; d < a.length; d++)
                                        if (c = a[d].call(b.data.context, c), !1 === c) return !1;
                                    return c
                                },
                                h = this.data.result;
                            this.data.result = function(a) {
                                if (!1 !== (a = k(e, a)) && (a = h.call(d, a), !1 !== (a = k(g, a)))) return a
                            }
                        }
                    },
                    execute: function() {
                        if (this.checkIff()) {
                            for (var a = 0; a < this.data.observe.length; a++) this.watchModule(this.data.observe[a]);
                            p.run(this.data.name);
                            this.data.resolved = !0;
                            this.data.stats.resolved = g();
                            this.data.immediate && this.getResult()
                        }
                    },
                    getResult: function() {
                        var b = this;
                        this.data.stats.callCount++;
                        if (null !== this.data.result || !this.data.resolved) return this.data.result;
                        this.data.stats.buildStarted = g();
                        var d = [];
                        if (this.data.process && a(this.data.value)) {
                            for (var e = 0; e < this.data.when.length; e++) d.push(c.hasOwnProperty(this.data.when[e]) ? c[this.data.when[e]].getResult() : null);
                            this.data.result = k(this.data.name, function() {
                                return b.data.value.apply(b.data.context,
                                    d)
                            })
                        } else this.data.result = this.data.value;
                        this.applyFilterWrapper();
                        this.applyObserverWrapper();
                        this.data.stats.buildCompleted = g();
                        return this.data.result
                    }
                };
                return {
                    add: function(a) {
                        if (!c.hasOwnProperty(a.name) || a.override) {
                            var b = new t(a);
                            c[b.data.name] = b;
                            a = function() {
                                b.execute()
                            };
                            var d = b.getDependencyNames();
                            0 === d.length ? h(a) : p.add(d, a)
                        }
                    },
                    publish: function(a) {
                        this.add(a);
                        q && e.P.register(a.name, function() {
                            return a.value
                        });
                        e.amznJQ && e.amznJQ.declareAvailable(a.name)
                    },
                    importEvent: function(a) {
                        var c = this;
                        a = a || {};
                        q && e.P.when(a.name).execute(function(b) {
                            b = void 0 === b || null === b ? a.otherwise : b;
                            c.add({
                                name: a.as || a.name,
                                value: b
                            })
                        });
                        if (e.amznJQ) e.amznJQ[a.useOnCompletion ? "onCompletion" : "available"](a.amznJQ || a.name, m(function() {
                            var b;
                            if (a.global) {
                                b = e;
                                for (var d = (a.global || "").split("."), g = 0, q = d.length; g < q; g++) b && d[g] && (b = b[d[g]])
                            } else b = a.otherwise;
                            if (a.retry && (void 0 === b || null === b)) return !1;
                            c.add({
                                name: a.as || a.name,
                                value: b
                            });
                            return !0
                        }))
                    },
                    get: function(a, b) {
                        return c[a] && c[a].data.resolved ? c[a].getResult() : b
                    },
                    stats: function(a) {
                        var b = {},
                            d;
                        for (d in c)
                            if (c.hasOwnProperty(d) && (!a || !c[d].data.resolved)) {
                                b[d] = c[d].data;
                                b[d].blocked = [];
                                for (var e = c[d].getDependencyNames(), g = 0; g < e.length; g++) c[e[g]] && c[e[g]].data.resolved || b[d].blocked.push(e[g])
                            }
                        return b
                    }
                }
            }();
            if (d && d.manager && d.manager.pending)
                for (var p = 0; p < d.manager.pending.length; p++) c[d.manager.pending[p].m](d.manager.pending[p].data);
            d.manager = c;
            d.declare("now", g);
            d.declare("async", h);
            d.declare("eventGraph", f);
            d.declare("Observer", l)
        }
    })(f, document, Date);
    "use strict";
    f.$Nav.build("NavDomApi", function() {
        return {
            getAliasFromDropdown: function(e) {
                if (!e || !e.aliases || "string" !== typeof e.aliases) return "aps";
                var d = e.aliases.split(",");
                return (d = (e = e.implicitAlias) ? [e] : d) && 1 === d.length && "" != d[0] ? d[0] : "aps"
            }
        }
    });
    "use strict";
    f.$Nav.build("sx.iss.TemplateEngine", function() {
        var e = {},
            d = {
                allowUndefined: !0,
                allowMalformedHtml: !0
            },
            b = function g(a, b) {
                var m = /^[a-zA-Z0-9_-]+$/.test(a) ? e[a] = e[a] || g(document.getElementById(a).innerHTML) : new Function("obj", "var p\x3d[],print\x3dfunction(){p.push.apply(p,arguments);};with(obj){p.push('" +
                    a.replace(/[\r\t\n]/g, " ").replace(/'(?=[^#]*#>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<#=(.+?)#>/g, d.allowUndefined ? "',$1,'" : "',typeof($1)!\x3d\x3d\"undefined\"?$1:function(){throw 0}(),'").split("\x3c#").join("');").split("#\x3e").join("p.push('") + "');}return p.join('');");
                a = d.allowMalformedHtml ? m : function(a) {
                    a = m(a);
                    var b = document.createElement("div");
                    b.innerHTML = a;
                    if (b.innerHTML === a) return a;
                    throw "Malformed html";
                };
                return b ? a(b) : a
            };
        return {
            template: b,
            templateWithOptions: function(e,
                a, q) {
                var m = d;
                d = a;
                e = b(e, q);
                d = m;
                return e
            }
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.DebugUtils", "sx.iss.DomUtils").build("sx.iss.EventBus.instance", function(e, d) {
        return new function() {
            function b(a) {
                var c = typeof a,
                    b = "";
                "object" === c && a.hasOwnProperty("name") ? b = a.name : "string" === c && (b = a);
                return b
            }
            var c = {},
                g = {};
            this.listen = function(a, g, m) {
                var k, h;
                if (d.isArray(a)) {
                    for (k = 0; k < a.length; k++) h = a[k], this.listen(h, g, m), e.logDebug("Listening for: " + h);
                    return this
                }
                h = b(a);
                c[h] || (c[h] = []);
                c[h].push({
                    f: g,
                    o: m
                });
                e.logDebug("Listening for: " +
                    h);
                return this
            };
            this.trigger = function(a, d) {
                a = b(a);
                e.logDebugWithTrace("Trigger: " + a, d);
                a = c[a];
                var g;
                if (a) {
                    for (g = 0; g < a.length; g++) a[g].f.call(a[g].o, d);
                    return this
                }
            };
            this.triggerThrottledEvent = function(a, d, m) {
                var k = b(a);
                e.logDebugWithTrace("Trigger (throttled): " + k, d);
                var h = c[k];
                a = g[k];
                if (h) return m === t && (m = 100), a && (clearTimeout(a), delete g[k]), a = setTimeout(function() {
                    var a;
                    for (a = 0; a < h.length; a++) h[a].f.call(h[a].o, d);
                    delete g[k]
                }, m), g[k] = a, this
            }
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.DebugUtils", "sx.iss.DomUtils").build("sx.iss.IssContext",
        function(e, d) {
            var b;
            return {
                getConfiguration: function() {
                    return b
                },
                setConfiguration: function(c) {
                    b = c
                }
            }
        });
    "use strict";
    f.$Nav.when("sx.iss.CommonSuggestionUtils").build("sx.iss.suggestionUtils", function(e) {
        return {
            buildHighlightFragments: e.buildHighlightFragments,
            getPrefixPos: e.getPrefixPos,
            getPrefixPosMultiWord: e.getPrefixPosMultiWord,
            splitStringForDisplay: e.splitStringForDisplay,
            isComplexLayoutScript: e.isComplexLayoutScript
        }
    });
    "use strict";
    f.$Nav.build("sx.iss.CommonSuggestionUtils", function() {
        function e(c,
            b) {
            return c.toLowerCase().indexOf(b.toLowerCase())
        }

        function d(c, b, a) {
            return {
                bprefix: c.substr(0, b),
                prefix: c.substr(b, a),
                suffix: c.substr(b + a)
            }
        }
        var b = /\s/;
        return {
            buildHighlightFragments: function(c) {
                var b = c.searchTerm,
                    a = c.keyword,
                    q = e(a, b);
                c.isHighlightDisabled ? b = q = "" : c.isSpellCorrected || -1 === q ? (b = a, a = q = "") : (q = d(a, q, b.length || 0), b = q.bprefix, a = q.prefix, q = q.suffix);
                var m = c.serviceHighlighting,
                    k = c.highlightDisabled;
                c = c.useServiceHighlighting && m && m.length && !k ? m : [{
                        isHighlight: !k,
                        text: b
                    }, {
                        isHighlight: !1,
                        text: a
                    },
                    {
                        isHighlight: !k,
                        text: q
                    }
                ];
                return c
            },
            getPrefixPos: e,
            getPrefixPosMultiWord: function(c, d) {
                d = c.toLowerCase().indexOf(d.toLowerCase());
                if (-1 === d) return -1;
                if (0 === d) return 0;
                c = c[d - 1];
                return " " === c || "\t" === c || c.match(b) ? d : -1
            },
            splitStringForDisplay: d,
            isComplexLayoutScript: function(c) {
                return (c = c.charCodeAt(0)) ? 0 >= (c - 1536) * (c - 2431) : !1
            }
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.suggestionUtils", "sx.iss.CachingProvider.instance").build("sx.iss.commonUtils", function(e, d) {
        function b(a) {
            var c = !1;
            a && (a = a.charAt(0), c = d.get("isComplexLayout",
                a), c === t && (c = e.isComplexLayoutScript(a), d.put("isComplexLayout", a, c)));
            return c
        }
        var c = /\"/gi,
            g = /[&|]+/gi;
        return {
            suggestionUtils: e,
            isHighlightDisabled: function(a) {
                return b(a && a.length && a[0].length ? a[0] : t)
            },
            isHighlightDisabledForAPIV2: function(a) {
                return b(a && a.length && a[0].value && a[0].value.length ? a[0].value : t)
            },
            extractDomainFromUrl: function(a) {
                return -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0]
            },
            pruneUndefined: function(a) {
                if ("object" !== typeof a) return a;
                for (var c in a) a[c] === t && delete a[c];
                return a
            },
            findIndex: function(a, c) {
                if (!Array.isArray(a) || 0 === a.length || "function" !== typeof c) return -1;
                for (var b = 0; b < a.length; b++)
                    if (c(a[b])) return b;
                return -1
            },
            isWeblabTreatment: function(a, c, b) {
                return a !== t && a.weblabTreatments !== t && "string" === typeof c && "string" === typeof b && "" !== c && "" !== b && (a = a.weblabTreatments[c], "string" === typeof a && "" !== a && a === b) ? !0 : !1
            },
            getWeblabOverrideFromCookie: function() {
                for (var a = document.cookie.split(";"), b = 0; b < a.length; b++) {
                    var d = a[b].trim();
                    if (0 === d.indexOf("experiment\x3d")) {
                        a = d.substring(11,
                            d.length);
                        a = a.replace(c, "");
                        a = a.split(g);
                        b = "";
                        for (d = 0; d < a.length; d++) var e = a[d].trim(),
                            b = b + e + ",";
                        0 < b.length && (b = b.substring(0, b.length - 1));
                        return b
                    }
                }
                return ""
            }
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.TimingProvider.instance", "sx.iss.EventBus.instance", "sx.iss.commonUtils", "sx.iss.DependenciesMet").build("sx.iss.utils", function(e, d, b, c) {
        function g(a) {
            var b = {
                "\x26": "\x26amp;",
                "\x3c": "\x26lt;",
                "\x3e": "\x26gt;",
                '"': "\x26quot;",
                "'": "\x26#39;",
                "/": "\x26#x2F;"
            };
            return String(a).replace(/[&<>"'\/]/g, function(a) {
                return b[a]
            })
        }
        var a = /[^\w]/;
        return {
            timingProvider: d,
            eventBus: b,
            suggestionUtils: c.suggestionUtils,
            now: function() {
                return (new Date).getTime()
            },
            escapeRegExp: function(a) {
                return a.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1")
            },
            htmlDecode: function(b) {
                var c = b;
                b && a.test(b) && (c = e("\x3cdiv\x3e\x3c/div\x3e").html(b).text());
                return c = g(c)
            },
            htmlEncode: function(a) {
                var b = a;
                a && (b = e("\x3cdiv\x3e\x3c/div\x3e").text(a).html());
                return b
            },
            escapeHtmlTags: g,
            extractDomainFromUrl: c.extractDomainFromUrl,
            uiKeycode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            },
            isHighlightDisabled: c.isHighlightDisabled,
            isHighlightDisabledForAPIV2: c.isHighlightDisabledForAPIV2,
            findIndex: c.findIndex,
            pruneUndefined: c.pruneUndefined,
            isWeblabTreatment: c.isWeblabTreatment,
            getWeblabOverrideFromCookie: c.getWeblabOverrideFromCookie,
            numSuggestions: {
                MAX_NUMBER_OF_SUGGESTIONS: 11,
                MOBILE: 6
            }
        }
    });
    "use strict";
    f.$Nav.when("$").build("sx.iss.DomUtils", function(e) {
        var d = /\+/g,
            b = /^\s+/;
        (function() {
            Array.prototype.indexOf || (Array.prototype.indexOf = function(b, d) {
                var a = this.length >>> 0;
                d = Number(d) || 0;
                d = 0 > d ? Math.ceil(d) : Math.floor(d);
                for (0 > d && (d += a); d < a; d++)
                    if (d in this && this[d] === b) return d;
                return -1
            })
        })();
        return {
            isHoveredClass: "is-hovered",
            getKeyword: function(c) {
                return (c = c.val()) ? c.replace(b, "") : c
            },
            isElHoveredOver: function(b) {
                return b.hasClass("is-hovered")
            },
            hoverOverEl: function(b) {
                return b.addClass("is-hovered")
            },
            hoverOutEl: function(b) {
                return b.removeClass("is-hovered")
            },
            isArray: function(b) {
                return "[object Array]" === Object.prototype.toString.call(b)
            },
            getFormParams: function(b) {
                b = b.split("?");
                for (var e = 1 < b.length ? b[1] : t, e = e ? e.split("\x26") : [], a = e.length, q; 0 < a--;) q = e[a].split("\x3d"), e[a] = {
                    name: q[0],
                    value: q[1].replace(d, " ")
                };
                return {
                    uri: b[0],
                    formParams: e
                }
            },
            suggestionClass: ".s-suggestion",
            hiddenInputValue: "frmDynamic",
            hiddenInputClass: ".frmDynamic",
            areAnySuggestionsHoveredOver: function(b) {
                return 0 < b.find(".is-hovered").length
            },
            getCursorPosition: function(b) {
                b = b.get(0);
                if ("selectionStart" in b) return b.selectionStart;
                if (document.selection) {
                    b.focus();
                    var d = document.selection.createRange(),
                        a = d.text.length;
                    d.moveStart("character", -b.value.length);
                    return d.text.length - a
                }
                return -1
            }
        }
    });
    "use strict";
    f.$Nav.build("sx.iss.DebugUtils", function() {
        function e() {
            return c.iss || c.isstrace
        }

        function d() {
            return c.isstrace
        }

        function b(b, a) {
            e() && f.console && (a !== t ? console.debug(b, a) : console.debug(b))
        }
        var c = {
            iss: !1,
            isstrace: !1,
            noiss: !1,
            isspolyfill: !1,
            isscf: !1
        };
        return {
            init: function(b) {
                if (b &&
                    0 < b.length) {
                    b = b.substring(1).split("\x26");
                    for (var a = 0; a < b.length; a++) {
                        var d = b[a].split("\x3d");
                        if ("debug" === d[0]) {
                            for (var e in c) c.hasOwnProperty(e) && (c[e] = -1 !== d[1].indexOf(e) ? !0 : !1);
                            break
                        }
                    }
                }
            },
            logDebug: b,
            logDebugWithTrace: function(c, a) {
                b(c, a);
                d() && console.trace()
            },
            isDebugModeOn: e,
            isDebugModeOnWithTrace: d,
            isDisableISS: function() {
                return c.noiss
            },
            isUsingPolyFill: function() {
                return c.isspolyfill
            },
            isQIAEnabled: function() {
                return c.isscf
            }
        }
    });
    "use strict";
    f.$Nav.build("sx.iss.ObjectUtils", function() {
        return {
            freeze: function(e) {
                Object.freeze &&
                    e && Object.freeze(e)
            }
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.DebugUtils").run(function(e, d) {
        d.isDisableISS() || (e.fn.delegate && !d.isUsingPolyFill() || e.extend(e.fn, {
            delegate: function(b, c, g) {
                return this.bind(c, function(a) {
                    var c = e(a.target);
                    if (c.is(b) || 0 < c.parents(b).length) return d.logDebug("delegate ", {
                        selector: b,
                        target: c,
                        event: a
                    }), g.apply(c, arguments)
                })
            }
        }), f.$Nav.declare("sx.iss.DependenciesMet"))
    });
    "use strict";
    f.$Nav.when("sx.iss.ConfigVariants").build("sx.iss.ConfigVariantUtil", function(e) {
        return {
            augmentConfig: function(d) {
                d &&
                    d.obfMkt && ((Object.keys(e) || []).forEach(function(b) {
                        var c = e[b],
                            g = c.marketplaces || [];
                        "function" === typeof g.indexOf && -1 !== g.indexOf(d.obfMkt) ? d[b] = c.returnVal : d[b] = t
                    }), d.crossCategoryEmphasisTreatment = !0)
            }
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.utils").build("sx.iss.V2ResponseReformatter", function(e) {
        return {
            reformat: function(d) {
                if (!d) return ["", [],
                    [],
                    [], ""
                ];
                var b = d.prefix,
                    c = d.responseId,
                    g = [],
                    a = [],
                    f = [];
                (d.suggestions || []).forEach(function(b, c) {
                    var d = b.type || "";
                    if ("" !== d && "KEYWORD" === d) {
                        var d = [],
                            n = {},
                            l;
                        b.fallback &&
                            d.push("fb");
                        Array.isArray(b.highlightFragments) && (l = [], b.highlightFragments.forEach(function(a) {
                            l.push({
                                isHit: a.hit,
                                text: a.text
                            })
                        }));
                        n = {
                            sc: b.spellCorrected ? "1" : t,
                            ghost: b.ghost ? !0 : t,
                            source: d.length ? d : t,
                            highlightFragments: l
                        };
                        e.pruneUndefined(n);
                        f.push(n);
                        d = e.findIndex(b.scopes, function(a) {
                            return "ALIAS" === a.type
                        });
                        if (-1 !== d && (a.push({
                                name: b.scopes[d].display,
                                alias: b.scopes[d].value
                            }), 1 === c && g[0] === b.value)) return;
                        g.push(b.value)
                    }
                });
                a.length && (f[0].nodes = a);
                return [b, g, f, [], c]
            }
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.ObjectUtils").build("sx.iss.SuggestionTypes",
        function(e) {
            var d = {
                a9: {
                    name: "a9",
                    reftag: "i",
                    templateId: "a9-suggestion-template"
                },
                a9Xcat: {
                    name: "a9-xcat",
                    reftag: "c",
                    templateId: "a9xc-suggestion-template"
                },
                a9XOnly: {
                    name: "a9-xcat-only",
                    reftag: "xo",
                    source: "xo",
                    templateId: "s-suggestion"
                },
                nextSearch: {
                    name: "nextSearch",
                    reftag: "nsis",
                    templateId: "s-nextSearch"
                },
                recentSearch: {
                    name: "recentSearch",
                    reftag: "rsis",
                    templateId: "s-recentSearch"
                },
                trendSearch: {
                    name: "trendSearch",
                    reftag: "trnd",
                    templateId: "s-suggestion"
                },
                bia: {
                    name: "bia",
                    reftag: "bia",
                    templateId: "s-bia"
                },
                qu: {
                    name: "qu",
                    reftag: "qu_au",
                    templateId: "s-qu-suggestion"
                },
                help: {
                    name: "help",
                    reftag: "h",
                    templateId: "s-suggestion"
                },
                KeywordSuggestion: {
                    name: "KEYWORD",
                    templateId: "s-suggestion"
                },
                BIASuggestion: {
                    name: "BUY_IT_AGAIN"
                },
                TrendingSearchesSuggestion: {
                    name: "TRENDING_SEARCHES"
                },
                WidgetSuggestion: {
                    name: "WIDGET"
                }
            };
            e.freeze(d);
            return d
        });
    "use strict";
    f.$Nav.when("sx.iss.ObjectUtils").build("sx.iss.InfoTypes", function(e) {
        var d = {
            actor: "actor",
            author: "author",
            director: "director",
            seasonTitle: "season_title",
            title: "title"
        };
        e.freeze(d);
        return d
    });
    "use strict";
    f.$Nav.build("sx.iss.DataAttributes", function() {
        return {
            fallback: {
                name: "isfb"
            },
            spellCorrected: {
                name: "issc"
            },
            type: {
                name: "type"
            },
            refTag: {
                name: "reftag"
            }
        }
    });
    "use strict";
    f.$Nav.build("sx.iss.TimingEvents", function() {
        return {
            latency: {
                group: "Latency",
                events: {
                    timeToDisplay: "timeToDisplay"
                }
            }
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.DebugUtils").build("sx.iss.Events", function(e) {
        function d() {
            var b = Date.now();
            return {
                uid: b,
                suggestionsReadyForDisplay: {
                    name: "suggestionsReadyForDisplay-" +
                        b
                },
                suggestionsReady: {
                    name: "suggestionsReady-" + b
                },
                suggestionsRendered: {
                    name: "suggestionsRendered-" + b
                },
                updateSearchBox: {
                    name: "updateSearchBox-" + b
                },
                selectionChange: {
                    name: "selectionChange-" + b
                },
                dropdownHidden: {
                    name: "dropdownHidden-" + b
                },
                updateSearchTerm: {
                    name: "updateSearchTerm-" + b
                },
                suggestionClicked: {
                    name: "suggestionClicked-" + b
                },
                suggestionsNeeded: {
                    name: "suggestionsNeeded-" + b
                },
                a9SuggestionsNeeded: {
                    name: "a9-suggestionsNeeded-" + b
                },
                recentSuggestionsNeeded: {
                    name: "recent-suggestionsNeeded-" + b
                },
                biaSuggestionsNeeded: {
                    name: "bia-suggestionsNeeded-" +
                        b
                },
                biaSuggestionsReady: {
                    name: "bia-suggestionsReady-" + b
                },
                trendingSuggestionsNeeded: {
                    name: "trendSearch-suggestionsNeeded-" + b
                },
                trendingSuggestionsReady: {
                    name: "trendSearch-suggestionsReady-" + b
                },
                eventBasedSuggestionsNeeded: {
                    name: "event-based-suggestionsNeeded-" + b
                },
                eventBasedSuggestionsReady: {
                    name: "event-based-suggestionsReady-" + b
                },
                searchBoxUpdated: {
                    name: "searchBoxUpdated-" + b
                },
                noSuggestions: {
                    name: "nosuggestions-" + b
                },
                searchBoxFocusIn: {
                    name: "searchBoxFocusIn-" + b
                },
                searchBoxFocusOut: {
                    name: "searchBoxFocusOut-" +
                        b
                },
                keydown: {
                    name: "keydown-" + b
                },
                hideDropdown: {
                    name: "hidedropdown-" + b
                },
                focusOnParent: {
                    name: "focusOnParent-" + b
                },
                parentFocused: {
                    name: "parentFocused-" + b
                },
                parentLostFocus: {
                    name: "parentLostFocus-" + b
                },
                searchTermChanged: {
                    name: "searchTermChanged-" + b
                },
                suggestionsDisplayed: {
                    name: "suggestionsDisplayed-" + b
                },
                upArrowPressed: {
                    name: "upArrowPressed-" + b
                },
                downArrowPressed: {
                    name: "downArrowPressed-" + b
                },
                blockSearchBoxFocusInOnce: {
                    name: "blockSearchBoxFocusInOnce-" + b
                },
                allowSearchBoxFocusIn: {
                    name: "allowSearchBoxFocusIn-" + b
                },
                reftagUpdatedAfterRender: {
                    name: "reftagUpdatedAfterRender-" + b
                },
                onFocusWithSearchTerm: {
                    name: "onFocusWithSearchTerm"
                },
                onFocusEmptySearchTerm: {
                    name: "onFocusEmptySearchTerm"
                },
                onKeyPress: {
                    name: "onKeyPress"
                },
                onPaste: {
                    name: "onPaste"
                },
                onIMEAction: {
                    name: "onIMEAction"
                }
            }
        }
        return {
            globals: {
                issLoaded: {
                    name: "issLoaded"
                },
                suggestionsRendered: {
                    name: "suggestionsRendered"
                },
                initializeNavSearchBox: {
                    name: "initializeSearchBox"
                }
            },
            createInstance: function() {
                return new d
            },
            createEvent: function(b, c) {
                var d = c;
                c.hasOwnProperty("name") ?
                    d = c.name : "string" === typeof c ? d = c : e.logDebug('Format of "event" parameter is not a string or an event object', c);
                return b + "-" + d
            }
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.ObjectUtils").build("sx.iss.Platform", function(e) {
        var d = {
            name: "mobile",
            cid: "amazon-search-ui-mobile",
            callback: "String",
            needExtraParams: !1
        };
        e.freeze(d);
        return d
    });
    "use strict";
    f.$Nav.build("sx.iss.ConfigVariants", function() {
        return {
            crossCategoryEmphasisTreatment: {
                marketplaces: "ATVPDKIKX0DER A1F83G8C2ARO7P A1PA6795UKMFR9 A21TJRUUN4KGV A13V1IB3VIYZZH A2EUQ1WTGCTBG2 APJ6JRA9NG5V4".split(" "),
                returnVal: !0
            },
            useAmazonEmberFontFamily: {
                marketplaces: "ATVPDKIKX0DER A1F83G8C2ARO7P A1PA6795UKMFR9 A21TJRUUN4KGV A13V1IB3VIYZZH A2EUQ1WTGCTBG2".split(" "),
                returnVal: !0
            }
        }
    });
    f.$Nav.when("$").build("sx.iss.TimingProvider.instance", function(e) {
        return new function() {
            var d = {};
            this.startTimer = function(b, c) {
                d[b] || (d[b] = {});
                d[b][c] = {
                    start: +new Date
                }
            };
            this.stopTimer = function(b, c) {
                b = d[b] && d[b][c];
                if (!b) return -1;
                b.end = +new Date;
                return b.end - b.start
            };
            this.getTimings = function(b) {
                return d[b]
            };
            this.getTimingStats =
                function(b) {
                    var c = {
                            name: b
                        },
                        g = 0,
                        a = 0,
                        f = t,
                        m = t,
                        k = 0,
                        h = 0,
                        n = [],
                        l = 0,
                        p = 0;
                    if (!d[b]) return t;
                    e.each(d[b], function(b, c) {
                        if (c.start && c.end) {
                            h = c.end - c.start;
                            n.push(h);
                            k++;
                            a += h;
                            if (!f || h < f) f = h;
                            if (!m || h > m) m = h
                        }
                    });
                    n.sort();
                    c.n = k;
                    c.avg = a / k;
                    c.min = f;
                    c.max = m;
                    c.med = 1 === k ? n[0] : k % 2 ? (n[Math.floor(k / 2)] + n[Math.ceil(k / 2)]) / 2 : n[k / 2];
                    for (g = 0; g < k; g++) l = n[g] - c.avg, l *= l, p += l;
                    c.stddev = Math.sqrt(p / k);
                    return c
                };
            this.getTimingWithDisplayLatency = function(b, c) {
                return (b = d[b] && d[b][c]) && b.end && b.start ? b.end - b.start + 100 : -1
            }
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "sx.iss.Events", "sx.iss.SuggestionTypes", "sx.iss.DebugUtils", "sx.iss.AjaxCallProvider", "sx.iss.ISSAjaxUrlProvider", "sx.iss.EventBasedSuggestionResultsProcessor", "sx.iss.Platform").build("sx.iss.EventBasedSuggestionProvider", function(e, d, b, c, g, a, q, m, k) {
        var h = f.ue && "function" === typeof f.ue.count && f.ue.count;
        return function(e, f) {
            function p(a) {
                var k = a.searchTerm,
                    r = a.keystroke,
                    q = this,
                    p = [c.KeywordSuggestion.name, c.WidgetSuggestion.name];
                a = u(k, r, a.event);
                var t = v.buildUrl(a,
                    p);
                q._requestCounter = (q._requestCounter || 0) + 1;
                q._lastRequestCounter = q._lastRequestCounter || 0;
                var B = q._requestCounter;
                y.callService(t, function(a) {
                    if (B < q._lastRequestCounter) h && h("iss-suggestion-processor:service-response-skipped", 1);
                    else {
                        h && h("iss-suggestion-processor:service-response-skipped", 0);
                        q._lastRequestCounter = B;
                        var c = new m(e),
                            p;
                        a && a.suggestions ? (p = c.processResults(a), h && h("iss-suggestion-processor:service-response-empty", 0)) : (g.logDebugWithTrace("Event based suggestion provider service call response is empty",
                            t), h && h("iss-suggestion-processor:service-response-empty", 1));
                        a = {
                            searchTerm: k,
                            keystroke: r,
                            suggestionSets: p.augmentedSuggestions,
                            suggestionTitleId: p.suggestionTitleId
                        };
                        c = b.createEvent("event-based", f.suggestionsReady);
                        d.eventBus.trigger(c, a)
                    }
                })
            }

            function u(a, b, c) {
                a = {
                    b2b: e.b2b,
                    fresh: e.fresh,
                    ks: b,
                    prefix: a,
                    event: c,
                    limit: "mobile" === k.name ? d.numSuggestions.MOBILE : d.numSuggestions.MAX_NUMBER_OF_SUGGESTIONS
                };
                r && delete a.ks;
                e.fb !== t && (a.fb = e.fb);
                e && e.isInternal && (a.wc = d.getWeblabOverrideFromCookie());
                return a
            }
            var r = !1 === e.isAPICachingDisabled,
                y = new a(e, "iss-api-v2", {
                    cache: r
                }),
                v = new q(e);
            d.eventBus.listen(f.eventBasedSuggestionsNeeded, p, this);
            return {
                getName: function() {
                    return "event-based"
                },
                produceSuggestions: p
            }
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "sx.iss.Events", "sx.iss.AjaxCallProvider", "sx.iss.ISSAjaxUrlProvider", "sx.iss.SuggestionTypes", "sx.iss.V2ResponseReformatter").build("sx.iss.A9SuggestionProvider", function(e, d, b, c, g, a, q) {
        return function(m, k) {
            function h() {
                var a;
                a = r.aliases.split(",");
                var b = r.implicitAlias,
                    c = {},
                    d = "";
                c.aliases = b ? [b] : a;
                c.aliases && 1 === c.aliases.length && (c.alias = c.aliases[0]);
                a = c.alias || "aps";
                c = e.extend({}, {
                    cid: "amazon-search-ui-mobile",
                    action: "",
                    sugPrefix: "issDiv",
                    callback: "String"
                }, r);
                c.protocol = c.protocol || f.parent.document.location.protocol;
                var b = "\x26q\x3d" + encodeURIComponent(v) + "\x26search-alias\x3d" + a + "\x26client\x3d" + c.cid + "\x26mkt\x3d" + c.mkt + "\x26x\x3d" + c.callback,
                    k = "\x26sv\x3dmobile";
                r.sessionId && (k += "\x26s\x3d" + r.sessionId);
                r.requestId && (k += "\x26r\x3d" +
                    r.requestId);
                r.customerId && (k += "\x26c\x3d" + r.customerId);
                r.language && (k += "\x26l\x3d" + r.language);
                r.pageType && (k += "\x26p\x3d" + r.pageType);
                b += k;
                c.issPrimeEligible && -1 !== e.inArray(a, c.issPrimeEligible) ? d = "\x26pf\x3d1\x26fb\x3d0" : r.issXCat && (d = "\x26fb\x3d1");
                c.src || (c.src = c.host);
                w = c.protocol + "//" + c.src + "?method\x3dcompletion" + b + d
            }

            function n(a) {
                var c = ++y,
                    e, h;
                E = document.getElementsByTagName("head").item(0);
                A = "JscriptId" + c;
                x = document.createElement("script");
                x.setAttribute("type", "text/javascript");
                x.setAttribute("charset",
                    "utf-8");
                x.setAttribute("src", w);
                x.setAttribute("id", A);
                x.onload = x.onreadystatechange = function() {
                    if (!(e || this.readyState !== t && "loaded" !== this.readyState && "complete" !== this.readyState)) {
                        e = !0;
                        h = l.call(u, a);
                        this.onload = this.onreadystatechange = null;
                        try {
                            E.removeChild(x)
                        } catch (g) {}
                        f.completion = t;
                        d.timingProvider.stopTimer("a9", c);
                        var m = b.createEvent("a9", k.suggestionsReady);
                        d.eventBus.trigger(m, {
                            searchTerm: a,
                            suggestions: h
                        })
                    }
                };
                d.timingProvider.startTimer("a9", c);
                E.appendChild(x)
            }

            function l(a) {
                var b = f.completion[1],
                    c = 2 < f.completion.length ? f.completion[2] : [],
                    e = [],
                    k, h, g, m, q, p, n, l, y, u = "string" === typeof f.completion[4] ? f.completion[4] : t;
                g = "aps" === document.getElementById("nav-search-keywords-data").getAttribute("data-implicit-alias");
                var v = !1;
                if (0 < c.length && c[0].nodes !== t && !g && r.issXCat) {
                    m = !1;
                    for (k = 0; k < c[0].nodes.length; k++)
                        if ("aps" === c[0].nodes[k].alias) {
                            m = !0;
                            break
                        }
                    m || c[0].nodes.unshift({
                        alias: "aps",
                        name: r.apsName
                    })
                } else 0 < c.length && c[0].nodes === t && !g && r.issXCat && (c[0].nodes = [{
                    alias: "aps",
                    name: r.apsName
                }]);
                0 ===
                    b.length && 0 < a.length && !g && r.issXCat && (b = [a], c = [{
                        nodes: [{
                            alias: "aps",
                            name: r.apsName
                        }]
                    }], v = !0);
                var w = d.isHighlightDisabled(b);
                for (k = 0; k < b.length; k++)
                    if (g = b[k], m = encodeURIComponent(g), p = c && c[k] && "1" === c[k].sc, l = d.suggestionUtils.getPrefixPos(g, a), h = !1, r.issXCat && c && c[k] && c[k].source && c[k].source[0] && (h = "xo" === c[k].source[0] || "fb" === c[k].source[0]), w ? (y = g, l = n = "") : p || -1 === l ? (l = g, y = n = "") : (n = d.suggestionUtils.splitStringForDisplay(g, l, a.length), l = n.bprefix, y = n.prefix, n = n.suffix), v || h || e.push({
                            type: "a9",
                            crid: u,
                            spellCor: p,
                            bprefix: l,
                            prefix: y,
                            suffix: n,
                            keyword: g,
                            url: "/s?k\x3d" + m
                        }), q = c[k].nodes || [], !r.noXcats || r.issXCat)
                        for (h = 0; h < q.length; h++) e.push({
                            type: "a9",
                            spellCor: p,
                            bprefix: l,
                            prefix: y,
                            suffix: n,
                            keyword: g,
                            store: q[h].name,
                            storeText: r.searchboxSearchInMessage + q[h].name,
                            scope: q[h].alias,
                            url: "/s?k\x3d" + m + "\x26i\x3d" + encodeURIComponent(q[h].alias)
                        });
                return e || []
            }

            function p() {
                var a = r.aliases.split(","),
                    b = r.implicitAlias;
                return (a = b ? [b] : a) && 1 === a.length ? a[0] : "aps"
            }
            var u = this,
                r = m || {},
                y = 0,
                v, w, E, A, x, C = m.useApiV2Mobile,
                D, B;
            C && (D = new c(m, "iss-api-v2"), B = new g(m));
            u.getName = function() {
                return "a9"
            };
            m = b.createEvent("a9", k.suggestionsNeeded);
            d.eventBus.listen(m, function(c) {
                var g;
                if ((v = c.searchTerm) && v.length)
                    if (C) {
                        c = p();
                        var m = {
                            prefix: st,
                            alias: c
                        };
                        r.issPrimeEligible && -1 !== e.inArray(c, r.issPrimeEligible) ? m.fb = 0 : r.issXCat && (m.fb = 1);
                        c = B.buildUrl(m, [a.KeywordSuggestion.name]);
                        var x = ++y;
                        D.callService(c, function(a) {
                            a = q.reformat(a);
                            var c = v;
                            "undefined" !== typeof a ? (f.completion = a, a = l.call(u, c), f.completion = t, g = a) : g = [];
                            d.timingProvider.stopTimer("a9",
                                x);
                            a = b.createEvent("a9", k.suggestionsReady);
                            d.eventBus.trigger(a, {
                                searchTerm: v,
                                suggestions: g
                            })
                        });
                        d.timingProvider.startTimer("a9", x)
                    } else h.call(this), w && (g = n.call(this, v));
                else c = b.createEvent("a9", k.suggestionsReady), d.eventBus.trigger(c, {
                    searchTerm: v,
                    suggestions: []
                })
            }, u)
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "sx.iss.Events").build("sx.iss.RecentSearchSuggestionProvider", function(e, d, b) {
        return function(c) {
            var g = /[^\w]/;
            this.getName = function() {
                return "recent"
            };
            var a = b.createEvent("recent",
                c.suggestionsNeeded);
            d.eventBus.listen(a, function(a) {
                var m = [];
                a = a.searchTerm;
                if (f.sx && f.sx.searchsuggest && f.sx.searchsuggest.searchedText) {
                    var k = f.sx.searchsuggest.searchedText,
                        h = {},
                        n, l, p, u, r, y, v;
                    v = a && g.test(a) ? e("\x3cdiv\x3e\x3c/div\x3e").text(a).html() : a;
                    for (u = 0; u < k.length; u++) l = k[u].keywords, n = (n = l) && g.test(n) ? e("\x3cdiv\x3e\x3c/div\x3e").html(n).text() : n, p = d.suggestionUtils.getPrefixPosMultiWord(l, v), h[l] || -1 === d.suggestionUtils.getPrefixPosMultiWord(n, a) || (-1 === p ? (p = l, y = r = "") : (r = d.suggestionUtils.splitStringForDisplay(l,
                        p, v.length), p = r.bprefix, y = r.prefix, r = r.suffix), m.push({
                        type: "recent",
                        spellCor: !1,
                        bprefix: p,
                        prefix: y,
                        suffix: r,
                        keyword: n,
                        originalKeywords: l,
                        deleteUrl: k[u].deleteUrl
                    }), h[l] = 1)
                }
                k = b.createEvent("recent", c.suggestionsReady);
                d.eventBus.trigger(k, {
                    searchTerm: a,
                    suggestions: m
                })
            }, this)
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "sx.iss.TemplateEngine").build("sx.iss.SuggestionDisplayProvider", function(e, d, b) {
        return function(c, d, a) {
            var f, m;
            this.getDisplay = function(b) {
                if (!f(b)) return t;
                e.extend(b, a);
                return m(b)
            };
            f = "string" === typeof c ? function(a) {
                return a.type === c
            } : c;
            m = b.template(d)
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.SuggestionTypes", "sx.iss.TemplateEngine").build("sx.iss.WidgetDisplayProvider", function(e, d, b) {
        return function() {
            this.getDisplay = function(c) {
                return c && c.type && c.type.name && c.type.name === d.WidgetSuggestion.name ? b.template(c.template, c) : null
            }
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.utils", "sx.iss.TemplateEngine").build("sx.iss.IssDisplayProvider", function(e, d) {
        return function(b, c, g, a) {
            var f = d.template(b),
                m = 0;
            e.eventBus.listen([a.parentFocused, a.searchTermChanged], function(b) {
                e.eventBus.trigger(a.suggestionsNeeded, b)
            }, this).listen(a.suggestionsReady, function(b) {
                var d = function(a) {
                        var b = {
                            "\x26": "\x26amp;",
                            "\x3c": "\x26lt;",
                            "\x3e": "\x26gt;",
                            '"': "\x26quot;",
                            "'": "\x26#39;",
                            "/": "\x26#x2F;"
                        };
                        return String(a).replace(/[&<>"'\/]/g, function(a) {
                            return b[a]
                        })
                    }(b.searchTerm),
                    n, l, p, u = m++;
                e.timingProvider.startTimer("IssDisplayProvider", u);
                l = c.sequence(b);
                for (b = 0; b < l.length; b++) {
                    l[b].suggestionId = "issDiv" + b;
                    for (n =
                        0; n < g.length && !(p = g[n].getDisplay(l[b])); n++);
                    l[b].display = p;
                    p = t
                }
                p = f({
                    suggestions: l
                });
                e.timingProvider.stopTimer("IssDisplayProvider", u);
                e.eventBus.trigger(a.suggestionsReadyForDisplay, {
                    searchTerm: d,
                    display: p,
                    suggestions: l
                })
            }, this)
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "NavDomApi", "sx.iss.Platform", "sx.iss.Events", "sx.iss.SuggestionTypes").build("sx.iss.ISSAjaxUrlProvider", function(e, d, b, c, g, a) {
        return function(g) {
            function m(k, h) {
                var m = (g.protocol || f.parent.document.location.protocol || "http:") +
                    "//" + d.extractDomainFromUrl(g.src) + "/api/2017/suggestions?",
                    l = {
                        "session-id": g.sessionId,
                        "customer-id": g.customerId,
                        "request-id": g.requestId,
                        "page-type": g.pageType,
                        lop: g.language,
                        "site-variant": c.name,
                        "client-info": c.cid
                    };
                g.obfMkt ? l.mid = g.obfMkt : g.mkt && (l["plain-mid"] = g.mkt);
                b && "function" === typeof b.getAliasFromDropdown && (l.alias = b.getAliasFromDropdown(g));
                k && e.each(k, function(a, b) {
                    l[a] = b
                });
                h && Array.isArray(h) ? l["suggestion-type"] = h : l["suggestion-type"] = a.KeywordSuggestion.name;
                return m + e.param(l, !0)
            }
            return {
                buildUrl: function(a, b) {
                    return m(a, b)
                }
            }
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "sx.iss.Platform", "sx.iss.Events").build("sx.iss.AjaxCallProvider", function(e, d, b, c) {
        return function(b, a, c) {
            function d(b, c) {
                b = a + ":" + b;
                k && k(b, (k(b) || 0) + c)
            }
            var k = f.ue && "function" === typeof f.ue.count && f.ue.count,
                h = "function" === typeof f.uet && f.uet,
                n = "function" === typeof f.uex && f.uex;
            d("init", 1);
            var l = !1,
                p = "json",
                u = 2E3;
            c && (l = c.cache ? !0 : !1, p = c.dataType ? c.dataType : "json", u = c.timeout ? c.timeout : 2E3);
            return {
                callService: function(c,
                    k, q) {
                    d("ajax:init", 1);
                    h && h("bb", a + ":success", {
                        wb: 1
                    });
                    h && h("bb", a + ":failure", {
                        wb: 1
                    });
                    e.ajax({
                        url: c,
                        cache: l,
                        dataType: p,
                        timeout: u,
                        success: function(b) {
                            h && h("cf", a + ":success", {
                                wb: 1
                            });
                            d("ajax:success", 1);
                            "function" === typeof k && k(b);
                            h && h("be", a + ":success", {
                                wb: 1
                            });
                            n && n("ld", a + ":success", {
                                wb: 1
                            })
                        },
                        error: function(c, e, k) {
                            h && h("cf", a + ":failure", {
                                wb: 1
                            });
                            d("ajax:error", 1);
                            e && d("ajax:error" + e, 1);
                            f.ueLogError && f.ueLogError({
                                logLevel: "WARN",
                                attribution: a,
                                message: "ISS AJAX call failed for " + a + " with responseText: " +
                                    (c && c.responseText) + ", pageType: " + (b && b.pageType) + ", status: " + e + ", error: " + k
                            });
                            "function" === typeof q && q();
                            h && h("be", a + ":failure", {
                                wb: 1
                            });
                            n && n("ld", a + ":failure", {
                                wb: 1
                            })
                        }
                    })
                },
                incrementCsmCount: d
            }
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "NavDomApi", "sx.iss.DebugUtils").build("sx.iss.BIAProvider", function(e, d, b, c) {
        return function(d) {
            var a = d.biaPurchasedText;
            return {
                getName: function() {
                    return "bia"
                },
                parseBIAResponse: function(d) {
                    var e = d.suggestions.filter(function(a) {
                        return a && "BUY_IT_AGAIN" === a.type
                    });
                    if (!(0 >= e.length)) {
                        for (var g = [], h = 0; h < e.length; h++) {
                            var f = {
                                type: "bia",
                                dp: "/dp/" + e[h].value + "/ref\x3d" + e[h].refTag + "?crid\x3d" + d.responseId,
                                title: e[h].asinTitle,
                                price: e[h].displayPrice,
                                image: e[h].imageUrl,
                                purchaseDate: e[h].purchaseDateDisplay,
                                purchasedText: a
                            };
                            "amazonfresh" === d.alias && (f.dp += "\x26ppw\x3dfresh");
                            g.push(f)
                        }
                        if ((e = b.getSearchBox().val()) && 0 !== e.length && e === d.prefix & 0 < g.length) return c.logDebug("BIA asins exist for given prefix: ", d, g), g;
                        1 > g.length && c.logDebug("No BIA ASINs for given prefix",
                            d)
                    }
                }
            }
        }
    });
    "use strict";
    f.$Nav.build("sx.iss.CachingProvider.instance", function() {
        return new function() {
            var e = {};
            this.put = function(d, b, c) {
                if (!e[d] || 100 <= e[d].size) e[d] = {}, e[d].size = 0;
                e[d][b] === t && e[d].size++;
                e[d][b] = c
            };
            this.get = function(d, b) {
                return e[d] ? e[d][b] : t
            }
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "sx.iss.DebugUtils", "sx.iss.KeywordSuggestionProcessor", "sx.iss.WidgetSuggestionProcessor").build("sx.iss.EventBasedSuggestionResultsProcessor", function(e, d, b, c, g) {
        var a = f.ue && "function" === typeof f.ue.count &&
            f.ue.count;
        return function(d) {
            return {
                processResults: function(e) {
                    var k = {};
                    if (!e || !e.suggestions) return b.logDebugWithTrace("No suggestions in the response"), k;
                    var k = {
                            KeywordSuggestion: new c(d, e)
                        },
                        h = new g(d, e);
                    k.WidgetSuggestion = h;
                    for (var h = e.suggestions, f, l, p = [], u = 0; u < h.length; u++) f = h[u], (l = (l = k[f.suggType]) && l.augmentSuggestion(f)) ? (p.push(l), a && a("iss-suggestion-processor:dropped", 0)) : (b.logDebugWithTrace("Parsing the suggestions encountered an error", f), a && a("iss-suggestion-processor:dropped", 1));
                    return k = {
                        augmentedSuggestions: p,
                        suggestionTitleId: e.suggestionTitleId
                    }
                }
            }
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "NavDomApi", "sx.iss.SuggestionTypes", "sx.iss.DebugUtils").build("sx.iss.KeywordSuggestionProcessor", function(e, d, b, c, g) {
        var a = f.ue && "function" === typeof f.ue.count && f.ue.count;
        return function(e, f) {
            function k(b) {
                if (b && b.value && b.value.length) {
                    a && a("iss-suggestion-processor:keyword:valid-content", 1);
                    if (!e.noXcats && b.scopes && b.scopes.length && "ALIAS" == b.scopes[0].type && b.scopes[0].display &&
                        b.scopes[0].display.length && b.scopes[0].value && b.scopes[0].value.length) {
                        a && a("iss-suggestion-processor:keyword:suppressed-xcat", 0);
                        var d = h(b);
                        d.type = c.a9Xcat.name;
                        d.store = b.scopes[0].display;
                        d.alias = b.scopes[0].value;
                        d.url = n(b.value, d.alias);
                        return d
                    }
                    a && a("iss-suggestion-processor:keyword:suppressed-xcat", 1);
                    d = h(b);
                    d.type = c.a9.name;
                    d.alias = p;
                    d.store = t;
                    d.url = n(b.value, d.alias);
                    return d
                }
                a && a("iss-suggestion-processor:keyword:valid-content", 0)
            }

            function h(a) {
                var b, c, g;
                b = d.suggestionUtils.getPrefixPos(a.value,
                    l);
                u ? (c = a.value, b = g = "") : a.isSpellCorrected || -1 === b ? (b = a.value, c = g = "") : (g = d.suggestionUtils.splitStringForDisplay(a.value, b, l.length || 0), b = g.bprefix, c = g.prefix, g = g.suffix);
                var k = a.value,
                    h = a.spellCorrected,
                    p = a.fallback,
                    n = a.highlightFragments,
                    t = {};
                e.useServiceHighlighting ? t = n && n.length && !u ? n : [{
                    isHit: !1,
                    text: b
                }, {
                    isHit: !0,
                    text: c
                }, {
                    isHit: !1,
                    text: g
                }] : u || (t = [{
                    isHit: !1,
                    text: b
                }, {
                    isHit: !0,
                    text: c
                }, {
                    isHit: !1,
                    text: g
                }]);
                return {
                    keyword: k,
                    bprefix: b,
                    prefix: c,
                    suffix: g,
                    isSpellCorrected: h,
                    isFallback: p,
                    highlightDisabled: u,
                    highlightFragments: t,
                    browseNodeId: "",
                    qu: {},
                    ghost: a.ghost,
                    refTag: a.refTag,
                    completionResponseId: f.responseId
                }
            }

            function n(a, b) {
                a = "/s?k\x3d" + encodeURIComponent(a);
                typeof b !== t && (a += "\x26i\x3d" + encodeURIComponent(b));
                return a
            }
            if (f) {
                var l = f.prefix,
                    p = b.getAliasFromDropdown() || "aps",
                    u = d.isHighlightDisabledForAPIV2(f.suggestions);
                return {
                    augmentSuggestion: k
                }
            }
            g.logDebugWithTrace("Service response is empty")
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "sx.iss.SuggestionTypes", "sx.iss.DebugUtils", "sx.iss.TemplateEngine").build("sx.iss.WidgetSuggestionProcessor",
        function(e, d, b, c, g) {
            var a = f.ue && "function" === typeof f.ue.count && f.ue.count;
            return function(f, m) {
                return {
                    augmentSuggestion: function(k) {
                        var h;
                        e("#" + k.template).length ? h = !0 : (c.logDebugWithTrace("Suggestion template does not exist or is not installed with an id in the HTML equal to the template id: " + k.template), h = !1);
                        if (!h) return a && a("iss-suggestion-processor:widget:valid-content", 0), null;
                        a && a("iss-suggestion-processor:widget:valid-content", 1);
                        h = {
                            type: b.WidgetSuggestion,
                            keyword: k.value,
                            refTag: k.refTag,
                            widgetId: k.widgetId,
                            template: k.template,
                            metadata: e.extend({}, k.metadata),
                            widgetItems: []
                        };
                        for (var n in k.widgetItems) h.widgetItems.push({
                            id: k.widgetItems[n].id,
                            type: k.widgetItems[n].type,
                            metadata: e.extend({}, k.widgetItems[n].metadata)
                        });
                        "promoted-suggestion" === h.template && (k = k.widgetItems[0].metadata, h.searchTerm = m.prefix, h.keyword = k.text, h.serviceHighlighting = k.serviceHighlighting ? k.serviceHighlighting : [], h.isHighlightDisabled = k.isHighlightDisabled ? !0 : !1, h.useServiceHighlighting = f.useServiceHighlighting,
                            h.isSpellCorrected = !1, h.highlightFragments = d.suggestionUtils.buildHighlightFragments(h));
                        "pre-search-suggestion" === h.template && (h.completionResponseId = m.responseId, h.alias = m.alias, h.language = f.language);
                        var l;
                        a: {
                            try {
                                g.templateWithOptions(h.template, {
                                    allowUndefined: !1,
                                    allowMalformedHtml: !1
                                }, h);
                                l = !0;
                                break a
                            } catch (p) {
                                c.logDebugWithTrace("Suggestion template " + h.template + " failed with suggestion " + JSON.stringify(h))
                            }
                            l = !1
                        }
                        if (!l) return a && a("iss-suggestion-processor:widget:template-filled", 0), a && a("iss-suggestion-processor:widget:" +
                            h.widgetId + ":filled", 0), a && a("iss-suggestion-processor:widget:" + h.template + ":filled", 0), null;
                        a && a("iss-suggestion-processor:widget:template-filled", 1);
                        a && a("iss-suggestion-processor:widget:" + h.widgetId + ":filled", 1);
                        a && a("iss-suggestion-processor:widget:" + h.template + ":filled", 1);
                        return h
                    }
                }
            }
        });
    "use strict";
    f.$Nav.when("sx.iss.utils").build("sx.iss.A9SearchSuggestionEventHandler", function(e) {
        return function(d) {
            var b;
            this.getDelegateReqs = function() {
                return {
                    selectors: ".a9_suggestion,.suggestion_with_query_builder,.cross_category_suggestion",
                    events: "click"
                }
            };
            this.handleEvent = function(c) {
                var g = c.target || c.srcElement;
                c = parseInt(c.currentTarget.id.substr(6), 10);
                g.className && -1 !== g.className.indexOf("suggest_builder") ? e.eventBus.trigger(d.updateSearchTerm, b.suggestions[c].keyword) : e.eventBus.trigger(d.suggestionClicked, b.suggestions[c])
            };
            e.eventBus.listen(d.suggestionsDisplayed, function(c) {
                b = c
            }, this)
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.utils").build("sx.iss.RecentSearchSuggestionEventHandler", function(e) {
        return function(d) {
            function b(a) {
                var b,
                    c, g, h;
                b = location.protocol + "//" + location.host + a.deleteUrl;
                c = f.sx.searchsuggest.searchedText;
                for (g = 0; g < c.length; g++)
                    if (c[g].keywords === a.originalKeywords) {
                        h = g;
                        break
                    } - 1 !== h && c.splice(h, 1);
                e.eventBus.trigger(d.focusOnParent);
                var n;
                f.XMLHttpRequest ? n = new XMLHttpRequest : f.ActiveXObject && (n = new ActiveXObject("Microsoft.XMLHTTP"));
                if (n && b) try {
                    n.open("GET", b, !0), n.send(null)
                } catch (l) {}
            }
            var c = this,
                g;
            this.getDelegateReqs = function() {
                return {
                    selectors: ".recent_search_suggestion",
                    events: "click"
                }
            };
            this.handleEvent =
                function(a) {
                    var f = a.target || a.srcElement;
                    a = parseInt(a.currentTarget.id.substr(6), 10);
                    f.className && -1 !== f.className.indexOf("iss_sh_delete") ? b.call(c, g.suggestions[a]) : e.eventBus.trigger(d.suggestionClicked, g.suggestions[a])
                };
            e.eventBus.listen(d.suggestionsDisplayed, function(a) {
                g = a
            }, this)
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "NavDomApi", "sx.iss.DomUtils", "sx.iss.DebugUtils", "sx.iss.SuggestionTypes", "sx.iss.Events").build("sx.iss.BIASuggestionEventHandler", function(e, d, b, c, g, a, f) {
        return function(a,
            b, c) {
            c.delegate(".s-asin-sug-link", "mouseover", function(a) {
                e(a.currentTarget).find(".s-asin-sug-image").css("opacity", "0.5")
            }).delegate(".s-asin-sug-link", "mouseout", function(a) {
                e(a.currentTarget).find(".s-asin-sug-image").css("opacity", "1.0")
            })
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "NavDomApi", "sx.iss.DomUtils", "sx.iss.DebugUtils", "sx.iss.SuggestionTypes", "sx.iss.Events").build("sx.iss.QUSuggestionEventHandler", function(e, d, b, c, g, a, f) {
        var m = a && a.qu && a.qu.name,
            k = {
                AUTHOR: "field-author"
            };
        return function(a,
            f, l) {
            l.delegate(".s-qu-suggestion", "mouseover", function(a) {
                c.hoverOverEl(e(a.currentTarget))
            }).delegate(".s-qu-suggestion", "mouseout", function(a) {
                c.hoverOverEl(e(a.currentTarget))
            });
            d.eventBus.listen(f.searchBoxUpdated, function(a) {
                g.logDebug("searchBox updated event", a);
                var c = a.attr("data-type") || "";
                if ("" !== c && c === m) {
                    var c = a.attr("data-qu-type"),
                        d = a.attr("data-qu-value"),
                        c = c || "",
                        d = d || "";
                    if ("" !== c && "" !== d) {
                        var f = b.getIssFieldRestrictionElem();
                        f && 0 < f.length && f.remove();
                        c = e('\x3cinput type\x3d"hidden" /\x3e').attr("id",
                            "issFieldRestriction").attr("name", k[c]).attr("value", d);
                        b.getForm().append(c)
                    }
                    a = a.attr("data-keyword") || "";
                    0 < (b.getIssFieldRestrictionElem() || "").length && 1 > a.length && b.getSearchBox().val("")
                }
            })
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "NavDomApi", "sx.iss.ReftagBuilder", "sx.iss.DebugUtils", "sx.iss.SuggestionTypes", "sx.iss.Events").build("sx.iss.GhostSuggestionEventHandler", function(e, d, b, c, g, a, f) {
        var m = /(ref=[\-\w]+)/,
            k = [d.uiKeycode.BACKSPACE, d.uiKeycode.DELETE, d.uiKeycode.DOWN, d.uiKeycode.END,
                d.uiKeycode.ENTER, d.uiKeycode.ESCAPE, d.uiKeycode.HOME, d.uiKeycode.LEFT, d.uiKeycode.PAGE_DOWN, d.uiKeycode.PAGE_UP, d.uiKeycode.RIGHT, d.uiKeycode.TAB, d.uiKeycode.UP
            ];
        return function(a, e) {
            function f(a) {
                if ("object" !== typeof a || "string" !== typeof a.searchTerm || a.inputcopyselect || !Array.isArray(a.suggestions)) return !1;
                var b = a.suggestions || [];
                return -1 < k.indexOf(a.keystroke) || b === [] || b[0] === t ? !1 : (a = b[0]) && a.ghost
            }
            var p = !1;
            b.getDropdown();
            var q = b.getSearchBox(),
                r = b.getForm();
            d.eventBus.listen(e.suggestionsRendered,
                function(a) {
                    if (f(a)) {
                        g.logDebug("renderGhostSuggestion: ", a);
                        var c = a.searchTerm,
                            d = b.getKeyword();
                        c && d && c === d ? (c = c.length, a = a.suggestions[0].keyword, d = a.length, q.val(a), q.focus(), q[0].setSelectionRange(c, d), p = !0) : p = !1
                    } else p = !1
                });
            d.eventBus.listen(e.reftagUpdatedAfterRender, function(a) {
                if (f(a) && p) {
                    a = a.searchTerm;
                    a = {
                        suggestion: b.getDropdown().find(".s-suggestion").first(),
                        searchTerm: a,
                        previousSearchTerm: ""
                    };
                    a = (new c).build(a, !1);
                    var d = r.attr("action");
                    m.test(d) ? d = d.replace(m, c.CONSTANTS.reftagBase +
                        a) : ("/" !== d.charAt(d.length - 1) && (d += "/"), d += a);
                    r.attr("action", d)
                }
            })
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "NavDomApi", "sx.iss.SuggestionTypes", "sx.iss.ReftagBuilder").build("sx.iss.HelpSuggestionClickedUtil", function(e, d, b, c, g) {
        var a = /(ref=[\-\w]+)/;
        return function(c, d) {
            this.modifyForm = function(c) {
                if (c && c.keyword) {
                    b.getIssPrefixElem().remove();
                    b.getIssBrowseNodeIdElem().remove();
                    b.getIssFieldRestrictionElem().remove();
                    b.getIssCridElem().remove();
                    var d = b.getForm();
                    d.attr("action");
                    var g;
                    g = d.attr("action");
                    g = a.exec(g);
                    g = Array.isArray(g) && g[1] ? g[1] : "";
                    d.attr("action", "/gp/help/customer/display.html/" + g);
                    c = e('\x3cinput type\x3d"hidden" /\x3e').attr("id", "iss-help-keywords").attr("name", "help_keywords").attr("value", c.keyword);
                    d.append(c)
                }
            }
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.utils", "sx.iss.Events", "sx.iss.MetricsLoggerMobile").build("sx.iss.SuggestionAggregator", function(e, d, b) {
        return function(c, g, a) {
            function f(b) {
                var c = k[b.searchTerm];
                if (b.suggestions && b.suggestions[0] && b.suggestions[0].type &&
                    (c.suggestionsSets[b.suggestions[0].type] = b, "a9" === b.suggestions[0].type))
                    for (var d = c.suggestionsSets.a9.suggestions, h = 0; h < d.length; h++) d[h].scope && (d[h].type = "a9xc");
                --c.remaining || (delete k[c.searchTerm], a && a.isISSmWebRefactorEnabled && (c.suggestionsSets = b.suggestionSets), e.eventBus.trigger(g.suggestionsReady, c))
            }
            for (var m = new b, k = {}, h = 0; h < c.length; h++) {
                var n = d.createEvent(c[h], g.suggestionsReady);
                e.eventBus.listen(n, f, this)
            }
            e.eventBus.listen(g.suggestionsNeeded, function(b) {
                var f;
                a && a.isISSmWebRefactorEnabled ?
                    f = b.searchTerm : (f = b, b = {
                        searchTerm: f
                    });
                m.startEndToEndLogging();
                if (!k[f])
                    for (k[f] = {
                            remaining: c.length,
                            searchTerm: f,
                            suggestionsSets: {}
                        }, f = 0; f < c.length; f++) {
                        var h = d.createEvent(c[f], g.suggestionsNeeded);
                        e.eventBus.trigger(h, b)
                    }
            }, this)
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.utils").build("sx.iss.SuggestionSequencerMobile", function(e) {
        return function(d) {
            this.sequence = function(b) {
                if (d && d.isISSmWebRefactorEnabled) return b.suggestionsSets;
                var c = b.suggestionsSets,
                    g = c.recent;
                b = c.a9;
                var a = c.crossCategory,
                    c = b &&
                    b.suggestions && 0 < b.suggestions.length ? b.suggestions.length : 0,
                    f = a && a.suggestions && 0 < a.suggestions.length ? a.suggestions.length : 0,
                    m = e.numSuggestions.MOBILE,
                    k, h, n = [],
                    l = {};
                k = Math.min(g && g.suggestions && 0 < g.suggestions.length ? g.suggestions.length : 0, 0 < c ? 2 : 6);
                for (h = 0; h < f; h++) n.push(a.suggestions[h]);
                for (h = 0; h < k; h++) l[g.suggestions[h].keyword] = !0, n.push(g.suggestions[h]);
                g = Math.min(c, m - n.length);
                for (a = h = 0; h < c && a < g; h++) l[b.suggestions[h].keyword] || (a++, n.push(b.suggestions[h]));
                for (h = 0; h < n.length; h++) n[h].dispIdx =
                    h;
                return n
            }
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.utils", "sx.iss.Events", "sx.iss.MetricsTags", "sx.iss.CSMLogger").build("sx.iss.MetricsLoggerMobile", function(e, d, b, c) {
        return function(d) {
            var a = d || c;
            return {
                startEndToEndLogging: function() {
                    a.isEnabled() && a.uet(b.BODY_BEGIN, b.A9_END_TO_END_MOBILE, b.CUSTOM_WIDGET_OBJ)
                },
                stopEndToEndLogging: function() {
                    a.isEnabled() && (a.uet(b.CRITICAL_FEATURE, b.A9_END_TO_END_MOBILE, b.CUSTOM_WIDGET_OBJ), a.uet(b.BODY_END, b.A9_END_TO_END_MOBILE, b.CUSTOM_WIDGET_OBJ), a.uex(b.PAGE_LOAD,
                        b.A9_END_TO_END_MOBILE, b.CUSTOM_WIDGET_OBJ))
                }
            }
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.DebugUtils").build("sx.iss.MetricsTags", function() {
        return {
            INIT: "iss-init-pc",
            A9_END_TO_END: "iss-end-to-end-a9",
            A9_END_TO_END_MOBILE: "iss-end-to-end-a9-mobile",
            CRITICAL_FEATURE: "cf",
            BODY_END: "be",
            BODY_BEGIN: "bb",
            PAGE_LOAD: "ld",
            CUSTOM_WIDGET_OBJ: {
                wb: 1
            }
        }
    });
    "use strict";
    f.$Nav.when("sx.iss.DebugUtils").build("sx.iss.CSMLogger", function(e) {
        var d = "function" === typeof uet && "function" === typeof uex;
        return {
            isEnabled: function() {
                return d
            },
            uet: function() {
                d ? uet.apply(this, arguments) : e.logDebugWithTrace("UET is undefined, unable to call with arguments: ", arguments)
            },
            uex: function() {
                d ? uex.apply(this, arguments) : e.logDebugWithTrace("UEX is undefined, unable to call with arguments: ", arguments)
            },
            ue: function() {
                d ? ue.apply(this, arguments) : e.logDebugWithTrace("UE is undefined, unable to call with arguments: ", arguments)
            }
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.utils", "sx.iss.Events", "sx.iss.MetricsLoggerMobile").build("sx.iss.IssParentCoordinatorMobile",
        function(e, d, b, c) {
            return function(b, a, q, m, k) {
                function h(a) {
                    return a.charCode ? a.target.value + String.fromCharCode(a.charCode) : a.target.value
                }

                function n() {}

                function l() {
                    A && (A.remove(), A = t)
                }

                function p(a, b) {
                    if (a && 0 < a.length) a.attr("value", b.value);
                    else if (b.hasOwnProperty("value") && b.value) {
                        a = e("\x3cinput\x3e");
                        for (var c in b) b.hasOwnProperty(c) && a.attr(c, b[c]);
                        a.appendTo(x)
                    }
                }

                function u(a) {
                    a = a || [];
                    a.forEach(function(a) {
                        a && 0 < a.length && x[0].removeChild(a[0])
                    })
                }

                function r() {
                    var a = document.getElementById("issprefix"),
                        b = document.getElementById("issAlias");
                    return A ? (D = setTimeout(function() {
                        D = null;
                        l();
                        a && x[0].removeChild(a);
                        b && x[0].removeChild(b)
                    }, 300), !1) : !0
                }

                function y() {
                    f.setTimeout(function() {
                        b.focus()
                    }, 0)
                }

                function v(a) {
                    m && m.isISSmWebRefactorEnabled ? d.eventBus.triggerThrottledEvent(k.searchTermChanged, {
                        searchTerm: z,
                        event: k.onKeyPress.name,
                        keystroke: a && a.keyCode
                    }, 100) : d.eventBus.triggerThrottledEvent(k.searchTermChanged, z, 100)
                }

                function w(a) {
                    if ("focus" === a.type) {
                        E = !0;
                        if (null == m.autoScroll || m.autoScroll) {
                            var b = C.offset();
                            f.scrollTo(0, b.top)
                        }
                        D && (clearTimeout(D), D = null);
                        z = h(a);
                        m && m.isISSmWebRefactorEnabled ? d.eventBus.trigger(k.parentFocused, {
                            searchTerm: z,
                            event: z && "" !== z ? k.onFocusWithSearchTerm.name : k.onFocusEmptySearchTerm.name,
                            keystroke: a.keyCode
                        }) : d.eventBus.trigger(k.parentFocused, z)
                    } else "keyup" === a.type && (13 === a.keyCode ? l() : 27 === a.keyCode ? r() : (B = z = h(a), v(a)))
                }
                var E, A, x, C, D = null,
                    B, z, G = m.implicitAlias,
                    F = m.issXCat,
                    H = !1,
                    I = new c;
                C = e(b);
                b = e(b);
                a = a ? e(a) : b.parent();
                x = b.closest("form");
                q = q || [];
                B = b.val();
                b.bind("focus", this,
                    w).bind("keyup", this, w);
                e(document).ready(function() {
                    C.is(":focus") && C.trigger("focus", "norefresh")
                });
                e(document.body).bind("click", this, function(a) {
                    var c = e(a.target || a.srcElement),
                        f = c.hasClass("suggest_builder"),
                        c = c.hasClass("iss_sh_delete");
                    "click" !== a.type || document.activeElement == b[0] || c || f || (E = !1, d.eventBus.trigger(k.parentLostFocus), r())
                });
                e(document).bind("searchAjaxTransition", this, l);
                f.setInterval(function() {
                    var a = b.val();
                    a !== z && (z = B = a, v())
                }, 20);
                d.eventBus.listen(k.suggestionsReadyForDisplay,
                    function(b) {
                        var c, g;
                        if (E && b && z === b.searchTerm.replace(/&amp;/g, "\x26").replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x2F;/g, "/"))
                            if (b.suggestions && 0 !== b.suggestions.length) {
                                c = e(b.display);
                                I.stopEndToEndLogging();
                                F && !H && (H = !0, ue.count("SEARCH:IssXCatImpression", 1));
                                if (A) A.html(c.children());
                                else
                                    for (A = c, a.after(A), c = 0; c < q.length; c++) g = q[c].getDelegateReqs(), A.delegate(g.selectors, g.events, q[c], function(a) {
                                        return a.data.handleEvent(a)
                                    });
                                e(f).resize(n);
                                d.eventBus.trigger(k.suggestionsDisplayed, b)
                            } else l()
                    }, this).listen(k.suggestionClicked, function(a) {
                    var c;
                    c = m && m.isISSmWebRefactorEnabled ? a.crid : a.completionResponseId;
                    b.val(a.keyword);
                    z = a.keyword;
                    u([e("input[name\x3d'crid']"), e("input[name\x3d'sprefix']")]);
                    var d, f = B,
                        h = a.dispIdx;
                    if (0 <= h || m && m.isISSmWebRefactorEnabled) {
                        a.spellCor ? d = "ss_sc" : "recent" === a.type ? d = "ss_sh" : F ? "a9xc" === a.type ? d = "aps" === a.scope ? "ss_c_aw_aps" : "ss_c_aw_cat" : (a.scope = G, d = "ss_i") : d = "crossCategory" === a.type ? "aps" === a.scope ? "ss_c_aw_aps" :
                            "ss_c_aw_cat" : "ss_i";
                        F && "a9xc" === a.type ? ue.count("SEARCH:IssXCatClick", 1) : F && ue.count("SEARCH:IssTopCatClick", 1);
                        if (F) {
                            var k = a.scope ? a.scope : G,
                                l;
                            "a9xc" === a.type && F && ((l = e("input[name\x3d'n']")) && 0 < l.length && p(l, {
                                value: "",
                                name: "n",
                                type: "hidden"
                            }), (l = e("input[name\x3d'bbn']")) && 0 < l.length && p(l, {
                                value: "",
                                name: "bbn",
                                type: "hidden"
                            }), (l = e("input[name\x3d'srs']")) && 0 < l.length && p(l, {
                                value: "",
                                name: "srs",
                                type: "hidden"
                            }));
                            p(e("#issAlias"), {
                                value: "i:" + k,
                                name: "rh",
                                type: "hidden"
                            });
                            (l = e("input[name\x3d'search-alias']")) &&
                            0 < l.length && p(l, {
                                value: k,
                                name: "search-alias",
                                type: "hidden"
                            });
                            l = e("input[name\x3d'n']");
                            "aps" === k && l && 0 < l.length && p(l, {
                                value: "",
                                name: "n",
                                type: "hidden"
                            });
                            l = e("input[name\x3d'srs']");
                            "aps" === k && l && 0 < l.length && p(l, {
                                value: "",
                                name: "srs",
                                type: "hidden"
                            });
                            l = e("input[name\x3d'bbn']");
                            "aps" === k && l && 0 < l.length && p(l, {
                                value: "",
                                name: "bbn",
                                type: "hidden"
                            })
                        }
                        k = "";
                        F && a.scope && (k = a.scope);
                        l = d;
                        var n = f.length,
                            q = k;
                        d = x[0].getAttribute("action");
                        k = /(ref=[\w-]+)/;
                        h = l + "_" + h + "_" + n;
                        q && 0 < q.length && (h = h + "_" + q);
                        a = "ref\x3d" + a.refTag;
                        h = "ref\x3dnb_sb_" + h;
                        m && m.isISSmWebRefactorEnabled && (h = a);
                        k.test(d) ? d = d.replace(k, h) : ("/" != d.charAt(d.length - 1) && (d += "/"), d += h);
                        x[0].setAttribute("action", d);
                        p(e("#issprefix"), {
                            value: f,
                            name: "sprefix",
                            type: "hidden"
                        })
                    }
                    p(null, {
                        value: c,
                        name: "crid",
                        type: "hidden"
                    });
                    if (document.createEvent && (c = document.createEvent("Event"), c.initEvent("submit", !0, !0), !x[0].dispatchEvent(c))) return;
                    x[0].submit()
                }, this).listen(k.focusOnParent, y, this).listen(k.updateSearchTerm, function(a) {
                    z = a;
                    C.val(a);
                    y()
                }, this)
            }
        });
    "use strict";
    f.$Nav.importEvent("jQuery", {
        as: "$",
        global: "jQuery"
    });
    f.$Nav.when("sx.iss.Events", "sx.iss.A9SuggestionProvider", "sx.iss.EventBasedSuggestionProvider", "sx.iss.A9SearchSuggestionEventHandler", "sx.iss.RecentSearchSuggestionProvider", "sx.iss.RecentSearchSuggestionEventHandler", "sx.iss.SuggestionAggregator", "sx.iss.SuggestionSequencerMobile", "sx.iss.SuggestionDisplayProvider", "sx.iss.IssDisplayProvider", "sx.iss.IssParentCoordinatorMobile").build("sx.iss", function(e, d, b, c, g, a, f, m, k, h, n) {
        return {
            Events: e,
            A9SuggestionProvider: d,
            EventBasedSuggestionProvider: b,
            A9SearchSuggestionEventHandler: c,
            RecentSearchSuggestionProvider: g,
            RecentSearchSuggestionEventHandler: a,
            SuggestionAggregator: f,
            SuggestionSequencerMobile: m,
            SuggestionDisplayProvider: k,
            IssDisplayProvider: h,
            IssParentCoordinatorMobile: n
        }
    });
    f.$Nav.when("sx.iss").run(function(e) {
        f.$Nav.publish("sx.iss", e)
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.SuggestionTypes").build("sx.iss.FilterIss", function(e, d) {
        return function(b) {
            return {
                removeFilteredAliases: function(c) {
                    b.filterAliases &&
                        c[d.a9Xcat.name] && (c[d.a9Xcat.name] = e.grep(c[d.a9Xcat.name], function(c) {
                            return -1 === e.inArray(c.alias, b.filterAliases)
                        }));
                    return c
                }
            }
        }
    });
    (function(e) {
        f.$Nav.when("config", "sx.iss.DebugUtils", "sx.iss.WidgetDisplayProvider", "sx.iss.SuggestionTypes").run("initISS", function(d, b, c, e) {
            if ("undefined" !== typeof d && d && d.searchISS) {
                var a = d.searchISS;
                a.isInternal && b.init(f.location.search);
                var q = a.cxNoiseReductionTreatment;
                f.P && f.P.AUI_BUILD_DATE && f.P.when("A", "sx.iss", "load").execute("initNavISS", function(b, d) {
                    var h =
                        document.getElementById("nav-search-keywords"),
                        n = document.getElementById("search-ac-init-data"),
                        l = document.getElementById("nav-search-keywords-data"),
                        p = [],
                        u = 1 === a.isInIssXCatWeblabTreatment,
                        r = 0 === a.autoScrollUpSearchBoxTreatment ? !1 : !0,
                        t = "",
                        v = "";
                    u && (f.ue.count("SEARCH:IssImpression", 1), t = (v = b.state("NAV:Constants")) && v.aa_searchBox_in ? v.aa_searchBox_in + " " : "in ", v = v && v.aa_all_departments ? v.aa_all_departments + " " : "All Departments ");
                    if (n) {
                        l = l.getAttribute("data-implicit-alias") || "aps";
                        b = h.getAttribute("placeholder");
                        n = {
                            aliases: a.aliases,
                            ime: n.getAttribute("data-ime"),
                            mkt: a.mktID,
                            src: n.getAttribute("data-src"),
                            implicitAlias: l,
                            noXcats: !0,
                            placeholder: b,
                            issPrimeEligible: p,
                            issXCat: u,
                            autoScroll: r,
                            searchboxSearchInMessage: t,
                            apsName: v,
                            host: a.host,
                            sessionId: a.sessionId,
                            requestId: a.requestId,
                            customerId: a.customerId,
                            language: a.language,
                            pageType: a.pageType,
                            useApiV2Mobile: a.useApiV2Mobile,
                            isISSmWebRefactorEnabled: a.isISSmWebRefactorEnabled
                        };
                        f.ue && f.uet("bb", "iss-init-aw", {
                            wb: 1
                        });
                        if (!f.initAutocomplete) {
                            f.initAutocomplete = !0;
                            r = "";
                            u && (r = "\x3cdiv class\x3d'suggest_delete suggest_builder'\x3e\x3c/div\x3e");
                            u = "suggest_link";
                            p = "suggestions";
                            t = "\x3c#\x3d bprefix #\x3e\x3cb\x3e\x3c#\x3d prefix #\x3e\x3c/b\x3e\x3c#\x3d suffix #\x3e\x3c/span\x3e\x3c/div\x3e";
                            q && (u = "suggest_link2", p = "suggestions2", t = "\x3cb\x3e\x3c#\x3d bprefix #\x3e\x3c/b\x3e\x3c#\x3d prefix #\x3e\x3cb\x3e\x3c#\x3d suffix #\x3e\x3c/span\x3e\x3c/b\x3e\x3c/div\x3e");
                            r = "\x3cdiv id\x3d'\x3c#\x3d suggestionId #\x3e'class\x3d'suggest_row a9_suggestion'\x3e\x3cdiv class\x3d'" +
                                u + "' dir\x3d'auto'\x3e\x3cspan\x3e " + t + r + "\x3c/div\x3e";
                            u = document.createElement("script");
                            u.setAttribute("type", "text/html");
                            u.setAttribute("id", "a9-suggestion-template");
                            u.innerHTML = r;
                            r = "\x3cdiv id\x3d'suggestions-template'\x3e\x3cdiv id\x3d'" + p + "' class\x3d''\x3e\x3c# if (typeof suggestions !\x3d\x3d 'undefined') { for(var i\x3d0; i \x3c suggestions.length; i++){ var displayString \x3d suggestions[i].display; #\x3e\x3c#\x3d displayString #\x3e \x3c# } } #\x3e \x3c/div\x3e \x3c/div\x3e";
                            p = document.createElement("script");
                            p.setAttribute("type", "text/html");
                            p.setAttribute("id", "suggestions-template");
                            p.innerHTML = r;
                            r = document.createElement("script");
                            r.setAttribute("type", "text/html");
                            r.setAttribute("id", "a9xc-suggestion-template");
                            r.innerHTML = "\x3cdiv id\x3d'\x3c#\x3d suggestionId #\x3e' class\x3d'suggest_row cross_category_suggestion'\x3e\x3cdiv class\x3d'suggest_link' dir\x3d'auto'\x3e \x3cspan\x3e \x3c#\x3d bprefix #\x3e\x3cb\x3e\x3c#\x3d prefix #\x3e\x3c/b\x3e\x3c#\x3d suffix #\x3e \x3c/span\x3e\x3cspan class\x3d'suggestion_search_scope'\x3e\x3c#\x3d storeText #\x3e \x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'suggest_delete suggest_builder'\x3e\x3c/div\x3e\x3c/div\x3e";
                            t = document.createElement("script");
                            t.setAttribute("type", "text/html");
                            t.setAttribute("id", "promoted-suggestion");
                            t.innerHTML = '\x3cdiv class\x3d"s-suggestion s-suggestion-link-template"\x3e\x3ca href\x3d"\x3c#\x3d widgetItems[0].metadata.link_url #\x3e"\x3e\x3cb\x3e\x3c#\x3d highlightFragments[0].text #\x3e\x3c/b\x3e\x3c#\x3d highlightFragments[1].text #\x3e\x3cb\x3e\x3c#\x3d highlightFragments[2].text #\x3e\x3c/b\x3e\x3c/a\x3e\x3c/div\x3e';
                            v = document.createElement("script");
                            v.setAttribute("type",
                                "text/html");
                            v.setAttribute("id", "pre-search-suggestion");
                            v.innerHTML = '\x3cdiv class\x3d"suggest_row pre-search-sugestion-title"\x3e\x3cdiv class\x3d"suggest_link2"\x3e\x3c#\x3dmetadata[language]#\x3e\x3c/div\x3e\x3c/div\x3e\x3c# for(var i\x3d0; i \x3c Math.min(widgetItems.length, 6); i++) {var keywords \x3d widgetItems[i].metadata.keywords; #\x3e\x3cdiv class\x3d"suggest_row a9_suggestion pre-search-sugestion-row"\x3e\x3cdiv class\x3d"suggest_link2"\x3e\x3ca href\x3d"\x3c#\x3d widgetItems[i].metadata.link_url #\x3e"\x3e\x3c#\x3d keywords #\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c#} #\x3e';
                            l = document.getElementsByTagName("body")[0];
                            l.appendChild(u);
                            l.appendChild(p);
                            l.appendChild(r);
                            l.appendChild(t);
                            l.appendChild(v);
                            var w;
                            d.hasOwnProperty("Events") && (w = d.Events.createInstance());
                            t = new d.A9SuggestionProvider(n, w);
                            r = new d.RecentSearchSuggestionProvider(w);
                            u = [];
                            p = [];
                            a && a.isISSmWebRefactorEnabled ? (a.src = a.host, a.mkt = a.mktID, a.noXcats = !0, t = new d.EventBasedSuggestionProvider(a, w), u.push(t.getName(), r.getName()), p.push(new d.SuggestionDisplayProvider(e.a9.name, e.a9.templateId), new c)) : (u.push(t.getName(),
                                r.getName()), p.push(new d.SuggestionDisplayProvider("a9", "a9-suggestion-template"), new d.SuggestionDisplayProvider("a9xc", "a9xc-suggestion-template")));
                            r = [new d.RecentSearchSuggestionEventHandler(w), new d.A9SearchSuggestionEventHandler(w)];
                            new d.SuggestionAggregator(u, w, a);
                            new d.IssDisplayProvider("suggestions-template", new d.SuggestionSequencerMobile(a), p, w);
                            new d.IssParentCoordinatorMobile(h, document.getElementById("nav"), r, n, w)
                        }
                        f.ue && "function" === typeof f.ue.tag && f.ue.tag(h === document.activeElement ?
                            "iss-late-aw" : "iss-on-time-aw");
                        f.ue && (f.uet("cf", "iss-init-aw", {
                            wb: 1
                        }), f.uex("ld", "iss-init-aw", {
                            wb: 1
                        }))
                    }
                })
            }
        })
    })(f.$Nav);
    "use strict";
    f.$Nav.when("sx.iss.DebugUtils").build("sx.iss.CompletionServiceWarmupConfig", function() {
        return {
            warmUpEnabled: function(e) {
                switch (e) {
                    case "A1PA6795UKMFR9":
                    case "A2EUQ1WTGCTBG2":
                    case "A21TJRUUN4KGV":
                    case "ATVPDKIKX0DER":
                        e = !0;
                        break;
                    default:
                        e = !1
                }
                return e
            }
        }
    });
    "use strict";
    f.$Nav.when("$", "sx.iss.DebugUtils", "sx.iss.CompletionServiceWarmupConfig", "sx.iss.SuggestionTypes",
        "sx.iss.ISSAjaxUrlProvider", "sx.iss.AjaxCallProvider").build("sx.iss.CompletionServiceConnectionWarmer", function(e, d, b, c, f, a) {
        return function(e, m, k) {
            this.initConnectionToSvc = function() {
                if (b.warmUpEnabled(m)) {
                    var h = new a(e, "iss-warmup"),
                        k = (new f(e)).buildUrl({
                            searchTerm: "a"
                        }, [c.KeywordSuggestion.name, c.WidgetSuggestion.name]);
                    h.callService(k)
                } else d.logDebug("Warming up a connection to the completion svc is not enabled")
            }
        }
    })
});