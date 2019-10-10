(function(t) {
    var l = window.AmazonUIPageJS || window.P,
        p = l._namespace || l.attributeErrors,
        a = p ? p("CardJsRuntimeBuzzCopyBuild", "") : l;
    a.guardFatal ? a.guardFatal(t)(a, window) : a.execute(function() {
        t(a, window)
    })
})(function(t, l, p) {
    xcp_d("@c/dom", ["exports"], function(a) {
        var b, d, c = {
            get cardRoot() {
                d || (d = b.firstElementChild || b.appendChild(document.createElement("div")));
                return d
            },
            get container() {
                return b
            }
        };
        a.default = c;
        a.initialize = function(c, a, g) {
            d = p;
            a = "#" === c[0] ? c.slice(1) : c;
            b = document.getElementById(a);
            if (!b) throw Error("No node found for selector: " +
                c);
        };
        a.unscope = function(b) {
            return null !== b && b.__unscope__ ? b.__unscope__(c) : b
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    });
    xcp_d("@c/guard", ["exports", "@c/logger"], function(a, b) {
        b = b && b.hasOwnProperty("default") ? b["default"] : b;
        var d, c = function(c, m) {
                return d.guardFatal(c, m)
            },
            e = function(c, m) {
                return d.guardError(c, m)
            },
            k = function(c) {
                return d.guardCurrent(c)
            },
            g = function(c) {
                return c.catch(function(c) {
                    b.log(c.message);
                    throw c;
                })
            },
            h = {
                asFatal: c,
                asError: e,
                current: k,
                promise: g
            };
        a.asError = e;
        a.asFatal = c;
        a.current =
            k;
        a.default = h;
        a.initialize = function(c, m, b, a) {
            d = a
        };
        a.promise = g;
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    });
    xcp_d("@c/logger", ["exports"], function(a) {
        var b, d = function(c, a, d) {
            return b.log(c, a, d)
        };
        a.default = {
            log: d
        };
        a.initialize = function(c, a, d, g) {
            b = g
        };
        a.log = d;
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    });
    xcp_d("@c/remote-operations", ["exports", "@c/guard"], function(a, b) {
        function d(c) {
            return function(b) {
                return k(g, c, b, h)
            }
        }
        b = b && b.hasOwnProperty("default") ? b["default"] : b;
        var c = {
                post: function(c) {
                    var b =
                        new l.XMLHttpRequest,
                        a = new Promise(function(c, a) {
                            b.onabort = function() {
                                a(Error("XMLHttpRequest aborted"))
                            }
                        }),
                        d = new Promise(function(b, a) {
                            0 < c.timeout && l.setTimeout(function() {
                                a(Error("XMLHttpRequest timeout"))
                            }, c.timeout)
                        }),
                        g = new Promise(function(a, n) {
                            var d = c.headers || {},
                                g = function() {
                                    var d;
                                    d = 1223 === b.status ? 204 : b.status;
                                    var g = b.response || "{}";
                                    if (0 === d) n(Error("Internal XMLHttpRequest Error"));
                                    else if (200 !== d) n({
                                        statusCode: d,
                                        response: g
                                    });
                                    else {
                                        var e = c.uri,
                                            w;
                                        a: {
                                            var v = b.getAllResponseHeaders();w = "NO-CONTENT-TYPE-FOUND";
                                            if (v)
                                                for (var v = v.trim().split("\n"), D = v.length, h = 0; h < D; h++) {
                                                    var r = v[h].split(":"),
                                                        E = 1 <= r.length ? r[0].trim() : "";
                                                    if (2 === r.length && /content-type/i.test(E) && (r = r[1].trim().split(";"), 1 <= r.length)) {
                                                        w = r[0];
                                                        break a
                                                    }
                                                }
                                        }
                                        a({
                                            body: g,
                                            statusCode: d,
                                            method: "POST",
                                            url: e,
                                            rawRequest: b,
                                            contentType: w
                                        })
                                    }
                                },
                                h = function(c) {
                                    c instanceof Error ? n(c) : n(Error("" + (c || "Unknown XMLHttpRequest Error")))
                                };
                            b.onreadystatechange = function() {
                                4 === b.readyState && setTimeout(g, 0)
                            };
                            b.onload = g;
                            b.onerror = h;
                            b.onprogress = function() {};
                            b.ontimeout = h;
                            b.open("POST", c.uri, !0);
                            if (b.setRequestHeader)
                                for (var e in d) d.hasOwnProperty(e) && b.setRequestHeader(e, d[e]);
                            b.send(c.body || null)
                        });
                    return Promise.race([a, d, g])
                }
            },
            e = JSON.stringify({}),
            k = function(a, d, n, g) {
                n = n ? JSON.stringify(n) : e;
                a = c.post({
                    body: n,
                    uri: a + d,
                    timeout: 1E3,
                    headers: {
                        Accept: "text/html, application/json",
                        "Content-Type": "application/json",
                        "x-amz-acp-params": g
                    }
                });
                return b.promise(a.then(function(c) {
                    var b = c.body;
                    if ("application/json" === c.contentType) try {
                        return JSON.parse(b)
                    } catch (a) {
                        throw Error("Parsing error encountered when parsing json response: " +
                            a);
                    } else {
                        if ("text/html" === c.contentType) return b;
                        throw Error("Unexpected content-type found when parsing response: " + c.contentType);
                    }
                }))
            },
            g, h;
        a.default = {
            setup: function(c) {
                return c.reduce(function(c, b) {
                    return c[b] = d(b), c
                }, {})
            }
        };
        a.initialize = function(c) {
            var b = document.getElementById(c);
            c = null;
            try {
                c = b.children[0]
            } catch (a) {}
            if (c && 1 !== c.nodeType) throw Error("Root element of card has a non-element node type: " + c.nodeType);
            if (c && c.hasAttribute("data-acp-path") && c.hasAttribute("data-acp-params")) {
                g = c.getAttribute("data-acp-path") ||
                    "";
                b = c.getAttribute("data-acp-params") || "";
                try {
                    var d = document.createElement("textarea");
                    d.innerHTML = b;
                    h = 0 === d.childNodes.length ? "" : d.childNodes[0].nodeValue || ""
                } catch (a) {
                    throw Error("Issue encountered while parsing card attributes when setting up RemoteOperations, error: " + a);
                }
                c.removeAttribute("data-acp-path");
                c.removeAttribute("data-acp-params")
            } else throw Error("Remote Operation capability requires card root node to exist and have attribute: data-acp-path \x26 data-acp-params");
        };
        Object.defineProperty(a,
            "__esModule", {
                value: !0
            })
    });
    xcp_d("@amzn/mix.client-runtime", ["exports", "tslib"], function(a, b) {
        function d(c, b) {
            return new Promise(function(a, d) {
                setTimeout(function() {
                    return d("Timed out while loading " + c)
                }, b)
            })
        }

        function c(c, b) {
            if (b) return {
                promise: Promise.resolve(b),
                resolve: f
            };
            var a = f;
            b = new Promise(function(c) {
                a = c
            });
            return {
                promise: Promise.race([b, d(c, 1E3)]),
                resolve: a
            }
        }

        function e(c, a) {
            return b.__awaiter(this, void 0, void 0, function() {
                return b.__generator(this, function(b) {
                    return [2, Promise.all(a.map(c))]
                })
            })
        }

        function k(a, d, g) {
            var f = this;
            void 0 === g && (g = {});
            return e(function(a) {
                    return b.__awaiter(f, void 0, void 0, function() {
                        var e, m, f, q, x, l;
                        return b.__generator(this, function(b) {
                            switch (b.label) {
                                case 0:
                                    if (g[a]) return [2, g[a]];
                                    b = h[a] ? h[a].promise : (h[a] = c(a)).promise;
                                    return [4, b];
                                case 1:
                                    e = b.sent();
                                    m = e.capabilities;
                                    f = e.cardModuleFactory;
                                    if (0 !== m.length) return [3, 2];
                                    x = f([]);
                                    return [3, 4];
                                case 2:
                                    return l = f, [4, k(m, d, g)];
                                case 3:
                                    x = l.apply(void 0, [b.sent()]), b.label = 4;
                                case 4:
                                    return q = x, g[a] || (g[a] = q, d.push(q)), [2, q]
                            }
                        })
                    })
                },
                a)
        }

        function g(c) {
            var b = "#" === c[0] ? c.slice(1) : c;
            if (b = document.getElementById(b))
                if (b = b.firstElementChild)
                    if (b = b.dataset.model) try {
                        return JSON.parse(b)
                    } catch (a) {
                        throw Error("Unable to inflate seed ViewModel. Unable to parse the model. \nSelector: " + c + ". \nValue: " + b);
                    } else return p;
                    else throw Error("Unable to inflate seed ViewModel. No card is rendered inside of: " + c);
            else throw Error("Unable to inflate seed ViewModel. No element found for selector: " + c);
        }
        var h = {},
            f = function() {};
        a.registerCapabilityModule =
            function(b, a) {
                h[b] ? h[b].resolve(a) : h[b] = c(b, a)
            };
        a.registerCardFactory = function(c, a) {
            return b.__awaiter(this, void 0, void 0, function() {
                var d, e, h, f, l, p, q;
                return b.__generator(this, function(b) {
                    switch (b.label) {
                        case 0:
                            return d = a.capabilities, e = a.cardModuleFactory, h = [], [4, k(d, h)];
                        case 1:
                            return f = b.sent(), l = e(f), p = l.P, q = g(c), h.forEach(function(b) {
                                return b.initialize(c, q, l, p)
                            }), p.execute(function() {
                                l.card(q)
                            }), [2]
                    }
                })
            })
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    });
    xcp_d("@c/scoped-dom", ["exports", "tslib",
        "@c/dom"
    ], function(a, b, d) {
        function c(c, b) {
            return "undefined" !== typeof Proxy && "undefined" !== typeof Reflect ? (c.__proxified || (c.__proxified = new Proxy(c, b)), c.__proxified) : c
        }
        d = d && d.hasOwnProperty("default") ? d["default"] : d;
        var e = {
                get: function(a, h) {
                    var f = Reflect.get(a, h);
                    return "__proxified" === h ? Reflect.get(a, h) : "ownerDocument" === h ? p : "parentElement" === h || "parentNode" === h ? null !== f && f !== d.container ? c(f, e) : null : "__unscope__" === h ? function(c) {
                        return c === d ? a : null
                    } : f instanceof HTMLElement || f instanceof Node || f instanceof
                    EventTarget ? c(f, e) : f instanceof HTMLCollection ? c(f, k) : "function" === typeof f ? "addEventListener" === h ? function(d, h, k) {
                        var l;
                        l = "function" === typeof h ? function(b) {
                            return h.call(c(this, e), c(b, e))
                        } : b.__assign({}, h, {
                            handleEvent: function(b) {
                                return h.handleEvent.call(this, c(b, e))
                            }
                        });
                        h.__proxy = l;
                        return f.call(a, d, l, k)
                    } : "removeEventListener" === h ? function(c, b, d) {
                        f.call(a, c, b.__proxy, d)
                    } : function() {
                        for (var b = [], d = 0; d < arguments.length; d++) b[d] = arguments[d];
                        b = f.apply(a, b);
                        return b instanceof HTMLElement || b instanceof
                        Node ? c(b, e) : b instanceof HTMLCollection ? c(b, k) : b
                    } : f
                },
                set: function(b, a, d) {
                    "string" === typeof a && a.startsWith("on") && "function" === typeof d ? Reflect.set(b, a, function(b) {
                        d.call(c(this, e), c(b, e))
                    }) : Reflect.set(b, a, d);
                    return !0
                }
            },
            k = {
                get: function(b, a) {
                    return "number" === typeof a || "string" === typeof a && Number.isInteger(Number.parseInt(a, 10)) ? c(Reflect.get(b, a), e) : Reflect.get(b, a)
                }
            };
        a.default = {
            get cardRoot() {
                return c(d.cardRoot, e)
            }
        };
        a.initialize = function(b, c, a) {};
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    });
    xcp_d("@c/sudo", ["exports"], function(a) {
        a.default = {
            get cardRoot() {
                return null
            }
        };
        a.initialize = function(b, a, c) {};
        a.sudo = {};
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    });
    (function() {
        var a = function(b, c, a) {
            xcp_d(b, c, a)
        };
        a.amd = !0;
        var b, d, c, e, k, g, h, f, m, n, l, p, u, t, y, A, q, B, z;
        (function(b) {
            function c(b, a) {
                b !== d && ("function" === typeof Object.create ? Object.defineProperty(b, "__esModule", {
                    value: !0
                }) : b.__esModule = !0);
                return function(c, d) {
                    return b[c] = a ? a(c, d) : d
                }
            }
            var d = "object" === typeof global ? global : "object" ===
                typeof self ? self : "object" === typeof this ? this : {};
            "function" === typeof a && a.amd ? a("tslib", ["exports"], function(a) {
                b(c(d, c(a)))
            }) : "object" === typeof module && "object" === typeof module.exports ? b(c(d, c(module.exports))) : b(c(d))
        })(function(a) {
            var C = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, c) {
                b.__proto__ = c
            } || function(b, c) {
                for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a])
            };
            b = function(b, c) {
                function a() {
                    this.constructor = b
                }
                C(b, c);
                b.prototype = null === c ? Object.create(c) : (a.prototype = c.prototype,
                    new a)
            };
            d = Object.assign || function(b) {
                for (var c, a = 1, d = arguments.length; a < d; a++) {
                    c = arguments[a];
                    for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (b[e] = c[e])
                }
                return b
            };
            c = function(b, c) {
                var a = {},
                    d;
                for (d in b) Object.prototype.hasOwnProperty.call(b, d) && 0 > c.indexOf(d) && (a[d] = b[d]);
                if (null != b && "function" === typeof Object.getOwnPropertySymbols) {
                    var e = 0;
                    for (d = Object.getOwnPropertySymbols(b); e < d.length; e++) 0 > c.indexOf(d[e]) && (a[d[e]] = b[d[e]])
                }
                return a
            };
            e = function(b, c, a, d) {
                var e = arguments.length,
                    h = 3 > e ?
                    c : null === d ? d = Object.getOwnPropertyDescriptor(c, a) : d,
                    g;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) h = Reflect.decorate(b, c, a, d);
                else
                    for (var f = b.length - 1; 0 <= f; f--)
                        if (g = b[f]) h = (3 > e ? g(h) : 3 < e ? g(c, a, h) : g(c, a)) || h;
                return 3 < e && h && Object.defineProperty(c, a, h), h
            };
            k = function(b, c) {
                return function(a, d) {
                    c(a, d, b)
                }
            };
            g = function(b, c) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(b, c)
            };
            h = function(b, c, a, d) {
                return new(a || (a = Promise))(function(e, h) {
                    function g(b) {
                        try {
                            k(d.next(b))
                        } catch (c) {
                            h(c)
                        }
                    }

                    function f(b) {
                        try {
                            k(d["throw"](b))
                        } catch (c) {
                            h(c)
                        }
                    }

                    function k(b) {
                        b.done ? e(b.value) : (new a(function(c) {
                            c(b.value)
                        })).then(g, f)
                    }
                    k((d = d.apply(b, c || [])).next())
                })
            };
            f = function(b, c) {
                function a(b) {
                    return function(c) {
                        return d([b, c])
                    }
                }

                function d(a) {
                    if (h) throw new TypeError("Generator is already executing.");
                    for (; e;) try {
                        if (h = 1, g && (f = a[0] & 2 ? g["return"] : a[0] ? g["throw"] || ((f = g["return"]) && f.call(g), 0) : g.next) && !(f = f.call(g, a[1])).done) return f;
                        if (g = 0, f) a = [a[0] & 2, f.value];
                        switch (a[0]) {
                            case 0:
                            case 1:
                                f = a;
                                break;
                            case 4:
                                return e.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                e.label++;
                                g = a[1];
                                a = [0];
                                continue;
                            case 7:
                                a = e.ops.pop();
                                e.trys.pop();
                                continue;
                            default:
                                if (!(f = e.trys, f = 0 < f.length && f[f.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    e = 0;
                                    continue
                                }
                                if (3 === a[0] && (!f || a[1] > f[0] && a[1] < f[3])) e.label = a[1];
                                else if (6 === a[0] && e.label < f[1]) e.label = f[1], f = a;
                                else if (f && e.label < f[2]) e.label = f[2], e.ops.push(a);
                                else {
                                    f[2] && e.ops.pop();
                                    e.trys.pop();
                                    continue
                                }
                        }
                        a = c.call(b, e)
                    } catch (k) {
                        a = [6, k], g = 0
                    } finally {
                        h = f = 0
                    }
                    if (a[0] & 5) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }
                var e = {
                        label: 0,
                        sent: function() {
                            if (f[0] & 1) throw f[1];
                            return f[1]
                        },
                        trys: [],
                        ops: []
                    },
                    h, g, f, k;
                return k = {
                    next: a(0),
                    "throw": a(1),
                    "return": a(2)
                }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
                    return this
                }), k
            };
            m = function(a, b) {
                for (var c in a) b.hasOwnProperty(c) || (b[c] = a[c])
            };
            n = function(a) {
                var b = "function" === typeof Symbol && a[Symbol.iterator],
                    c = 0;
                return b ? b.call(a) : {
                    next: function() {
                        a && c >= a.length && (a = void 0);
                        return {
                            value: a && a[c++],
                            done: !a
                        }
                    }
                }
            };
            l = function(a, b) {
                var c = "function" === typeof Symbol && a[Symbol.iterator];
                if (!c) return a;
                a = c.call(a);
                var d, e = [],
                    f;
                try {
                    for (;
                        (void 0 === b || 0 < b--) && !(d = a.next()).done;) e.push(d.value)
                } catch (h) {
                    f = {
                        error: h
                    }
                } finally {
                    try {
                        d && !d.done && (c = a["return"]) && c.call(a)
                    } finally {
                        if (f) throw f.error;
                    }
                }
                return e
            };
            p = function() {
                for (var a = [], b = 0; b < arguments.length; b++) a = a.concat(l(arguments[b]));
                return a
            };
            u = function(a) {
                return this instanceof u ? (this.v = a, this) : new u(a)
            };
            t = function(a, b, c) {
                function d(a) {
                    k[a] && (m[a] = function(b) {
                        return new Promise(function(c, d) {
                            1 < l.push([a, b, c, d]) || e(a, b)
                        })
                    })
                }

                function e(a,
                    b) {
                    try {
                        var c = k[a](b);
                        c.value instanceof u ? Promise.resolve(c.value.v).then(f, h) : g(l[0][2], c)
                    } catch (d) {
                        g(l[0][3], d)
                    }
                }

                function f(a) {
                    e("next", a)
                }

                function h(a) {
                    e("throw", a)
                }

                function g(a, b) {
                    (a(b), l.shift(), l.length) && e(l[0][0], l[0][1])
                }
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var k = c.apply(a, b || []),
                    m, l = [];
                return m = {}, d("next"), d("throw"), d("return"), m[Symbol.asyncIterator] = function() {
                    return this
                }, m
            };
            y = function(a) {
                function b(e, f) {
                    c[e] = a[e] ? function(b) {
                        return (d = !d) ? {
                            value: u(a[e](b)),
                            done: "return" === e
                        } : f ? f(b) : b
                    } : f
                }
                var c, d;
                return c = {}, b("next"), b("throw", function(a) {
                    throw a;
                }), b("return"), c[Symbol.iterator] = function() {
                    return this
                }, c
            };
            A = function(a) {
                function b(d) {
                    e[d] = a[d] && function(b) {
                        return new Promise(function(e, f) {
                            b = a[d](b);
                            c(e, f, b.done, b.value)
                        })
                    }
                }

                function c(a, b, d, e) {
                    Promise.resolve(e).then(function(b) {
                        a({
                            value: b,
                            done: d
                        })
                    }, b)
                }
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var d = a[Symbol.asyncIterator],
                    e;
                return d ? d.call(a) :
                    (a = "function" === typeof n ? n(a) : a[Symbol.iterator](), e = {}, b("next"), b("throw"), b("return"), e[Symbol.asyncIterator] = function() {
                        return this
                    }, e)
            };
            q = function(a, b) {
                Object.defineProperty ? Object.defineProperty(a, "raw", {
                    value: b
                }) : a.raw = b;
                return a
            };
            B = function(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                b["default"] = a;
                return b
            };
            z = function(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            };
            a("__extends", b);
            a("__assign", d);
            a("__rest", c);
            a("__decorate",
                e);
            a("__param", k);
            a("__metadata", g);
            a("__awaiter", h);
            a("__generator", f);
            a("__exportStar", m);
            a("__values", n);
            a("__read", l);
            a("__spread", p);
            a("__await", u);
            a("__asyncGenerator", t);
            a("__asyncDelegator", y);
            a("__asyncValues", A);
            a("__makeTemplateObject", q);
            a("__importStar", B);
            a("__importDefault", z)
        })
    })();
    xcp_d("@c/aui-card", ["exports"], function(a) {
        a.default = {};
        a.initialize = function(a, d, c) {};
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    });
    xcp_d("@c/aui-carousel", ["exports", "tslib", "@c/dom", "@p/a-carousel-framework"],
        function(a, b, d, c) {
            function e(a) {
                var c = this;
                return function(d, e) {
                    return b.__awaiter(c, void 0, void 0, function() {
                        var c;
                        return b.__generator(this, function(b) {
                            switch (b.label) {
                                case 0:
                                    return [4, a({
                                        indexes: d,
                                        ids: e
                                    })];
                                case 1:
                                    c = b.sent();
                                    "string" === typeof c && (c = (new DOMParser).parseFromString(c, "text/html").body.children[0]);
                                    if (!c.classList.contains("a-carousel-content-fragment")) throw Error("CarouselRemoteOperation did not return a ContentFragment" + c.innerHTML);
                                    return [2, c.querySelectorAll(".a-carousel-card-fragment")]
                            }
                        })
                    })
                }
            }
            c = c && c.hasOwnProperty("default") ? c["default"] : c;
            a.default = {
                getCarousel: function(a) {
                    var b = c.getCarousel(d.unscope(a)),
                        h = b.getAttr("name");
                    return {
                        gotoPage: function() {
                            return b.gotoPage()
                        },
                        gotoPrevPage: function() {
                            return b.gotoPrevPage()
                        },
                        gotoNextPage: function() {
                            return b.gotoNextPage()
                        },
                        get initialized() {
                            return new Promise(function(a) {
                                return c.onInit(h, function() {
                                    return a()
                                })
                            })
                        },
                        attachRemoteOperation: function(a) {
                            if (b.getAttr("async_provider")) throw Error("Carousel already has attached remoteOperation");
                            b.setAttr("async_provider", e(a))
                        }
                    }
                }
            };
            a.initialize = function(a, b, c) {};
            Object.defineProperty(a, "__esModule", {
                value: !0
            })
        });
    xcp_d("@c/aui-truncate", ["exports", "@c/dom", "@p/a-truncate"], function(a, b, d) {
        b = b && b.hasOwnProperty("default") ? b["default"] : b;
        d = d && d.hasOwnProperty("default") ? d["default"] : d;
        var c;
        a.default = {
            updateAll: function() {
                Array.prototype.slice.call(c).forEach(function(a) {
                    return d.get(a).update()
                })
            }
        };
        a.initialize = function(a, d, g) {
            c = b.cardRoot.getElementsByClassName("a-truncate")
        };
        Object.defineProperty(a,
            "__esModule", {
                value: !0
            })
    });
    xcp_d("@c/aui-utils", ["exports", "@p/A", "@c/dom"], function(a, b, d) {
        b = b && b.hasOwnProperty("default") ? b["default"] : b;
        a.default = {
            hide: function(a) {
                b.hide(d.unscope(a))
            },
            show: function(a) {
                b.show(d.unscope(a))
            },
            onScreen: function(a, e) {
                return b.onScreen(d.unscope(a), e)
            },
            objectIsEmpty: function(a) {
                return b.objectIsEmpty(a)
            },
            equals: function(a, d) {
                return b.equals(a, d)
            },
            diff: function(a, d) {
                return b.diff(a, d)
            },
            throttle: function(a, d, k) {
                return b.throttle(a, d, k)
            },
            debounce: function(a, d, k) {
                return b.debounce(a,
                    d, k)
            },
            defer: function(a) {
                b.defer(a)
            },
            interval: function(a, d) {
                return b.interval(a, d)
            },
            animationFrameDelay: function(a) {
                return b.animationFrameDelay(a)
            },
            delay: function(a, d) {
                return b.delay(a, d)
            },
            once: function(a) {
                return b.once(a)
            },
            attributionChain: function(a) {
                return b.attributionChain(d.unscope(a))
            }
        };
        a.initialize = function(a, b, d) {};
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    });
    xcp_d("@c/error-handling", ["exports"], function(a) {
        var b, d = function(a, d, k, g) {
            b.error(a, d, k, g)
        };
        a.default = {
            error: d
        };
        a.error = d;
        a.initialize = function(a, d, k, g) {
            b = g
        };
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    });
    xcp_d("@c/metrics", ["exports"], function(a) {
        var b = function(a, b, d) {
                return l.ue.count(a, b, d)
            },
            d = {
                count: b
            };
        a.count = b;
        a.default = d;
        a.initialize = function(a, b, d) {};
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    });
    xcp_d("@c/pagemarker", ["exports", "@p/A", "@c/dom", "@c/guard"], function(a, b, d, c) {
        function e(a) {
            var d;
            return function() {
                return c.promise(d = d || new Promise(function(c) {
                    return b.on(a, function() {
                        return c()
                    })
                }))
            }
        }
        b =
            b && b.hasOwnProperty("default") ? b["default"] : b;
        d = d && d.hasOwnProperty("default") ? d["default"] : d;
        c = c && c.hasOwnProperty("default") ? c["default"] : c;
        var k = e("ready"),
            g = e("load");
        a.default = {
            get pageReady() {
                return k()
            },
            get pageLoad() {
                return g()
            },
            visible: function(a) {
                void 0 === a && (a = 0);
                var c, e = new Promise(function(a) {
                        return c = a
                    }),
                    g = function() {
                        b.onScreen(d.container, a) && (b.off("scroll resize ready", g), c())
                    };
                b.on("scroll resize ready", g);
                g();
                return e
            }
        };
        a.initialize = function(a, b, c) {};
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    });
    xcp_d("@c/x-sample-capability-card-scoped", ["exports"], function(a) {
        a.default = {};
        a.initialize = function(a, d, c) {};
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    })
});