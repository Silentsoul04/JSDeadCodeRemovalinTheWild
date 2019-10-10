(function(e) {
    function t(t) {
        var n = t[0];
        var a = t[1];
        var s = t[2];
        var u, f, d = 0,
            c = [];
        for (; d < n.length; d++) {
            f = n[d];
            if (Object.prototype.hasOwnProperty.call(o, f) && o[f]) {
                c.push(o[f][0])
            }
            o[f] = 0
        }
        for (u in a) {
            if (Object.prototype.hasOwnProperty.call(a, u)) {
                e[u] = a[u]
            }
        }
        if (l) l(t);
        while (c.length) {
            c.shift()()
        }
        i.push.apply(i, s || []);
        return r()
    }

    function r() {
        var e;
        for (var t = 0; t < i.length; t++) {
            var r = i[t];
            var n = true;
            for (var s = 1; s < r.length; s++) {
                var u = r[s];
                if (o[u] !== 0) n = false
            }
            if (n) {
                i.splice(t--, 1);
                e = a(a.s = r[0])
            }
        }
        return e
    }
    var n = {};
    var o = {
        7: 0
    };
    var i = [];

    function a(t) {
        if (n[t]) {
            return n[t].exports
        }
        var r = n[t] = {
            i: t,
            l: false,
            exports: {}
        };
        e[t].call(r.exports, r, r.exports, a);
        r.l = true;
        return r.exports
    }
    a.m = e;
    a.c = n;
    a.d = function(e, t, r) {
        if (!a.o(e, t)) {
            Object.defineProperty(e, t, {
                enumerable: true,
                get: r
            })
        }
    };
    a.r = function(e) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    a.t = function(e, t) {
        if (t & 1) e = a(e);
        if (t & 8) return e;
        if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
        var r = Object.create(null);
        a.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: e
        });
        if (t & 2 && typeof e != "string")
            for (var n in e) a.d(r, n, function(t) {
                return e[t]
            }.bind(null, n));
        return r
    };
    a.n = function(e) {
        var t = e && e.__esModule ? function r() {
            return e["default"]
        } : function n() {
            return e
        };
        a.d(t, "a", t);
        return t
    };
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    a.p = "//i.alicdn.com/ae-msite-ui/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var u = s.push.bind(s);
    s.push = t;
    s = s.slice();
    for (var f = 0; f < s.length; f++) t(s[f]);
    var l = u;
    i.push(["BdmF", 0]);
    return r()
})({
    BdmF: function(e, t, r) {
        "use strict";
        var n = r("cDcd");
        var o = p(n);
        var i = r("faye");
        var a = p(i);
        var s = r("JNNr");
        var u = p(s);
        var f = r("s+e7");
        var l = p(f);
        var d = r("wNCC");
        var c = p(d);
        var h = r("F8dh");

        function p(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function y(e) {
            var t = window.params.i18n,
                r = t === undefined ? {} : t;
            var n = document.createElement("span");
            return r[e].replace(/&[#\w;]+/gi, function(e) {
                n.innerHTML = e;
                return n.innerText
            })
        }
        if (typeof a.default === "undefined") {
            c.default.log(JSON.stringify(window.ReactDOM))
        }
        a.default.render(o.default.createElement(u.default, {
            jsonp: true,
            className: l.default.gdpr,
            message: y("msitePrivacyDialogContent"),
            shouldShowEndpoint: h.MSITE_URL + "/api/privacy/show",
            closeEndpoint: h.MSITE_URL + "/api/privacy/close"
        }), document.getElementById("gdpr-section"))
    },
    IWDL: function(e, t, r) {
        "use strict";
        r.r(t);
        r.d(t, "Headers", function() {
            return l
        });
        r.d(t, "Request", function() {
            return g
        });
        r.d(t, "Response", function() {
            return T
        });
        r.d(t, "DOMException", function() {
            return A
        });
        r.d(t, "fetch", function() {
            return B
        });
        var n = {
            searchParams: "URLSearchParams" in self,
            iterable: "Symbol" in self && "iterator" in Symbol,
            blob: "FileReader" in self && "Blob" in self && function() {
                try {
                    new Blob;
                    return true
                } catch (e) {
                    return false
                }
            }(),
            formData: "FormData" in self,
            arrayBuffer: "ArrayBuffer" in self
        };

        function o(e) {
            return e && DataView.prototype.isPrototypeOf(e)
        }
        if (n.arrayBuffer) {
            var i = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"];
            var a = ArrayBuffer.isView || function(e) {
                return e && i.indexOf(Object.prototype.toString.call(e)) > -1
            }
        }

        function s(e) {
            if (typeof e !== "string") {
                e = String(e)
            }
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) {
                throw new TypeError("Invalid character in header field name")
            }
            return e.toLowerCase()
        }

        function u(e) {
            if (typeof e !== "string") {
                e = String(e)
            }
            return e
        }

        function f(e) {
            var t = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: t === undefined,
                        value: t
                    }
                }
            };
            if (n.iterable) {
                t[Symbol.iterator] = function() {
                    return t
                }
            }
            return t
        }

        function l(e) {
            this.map = {};
            if (e instanceof l) {
                e.forEach(function(e, t) {
                    this.append(t, e)
                }, this)
            } else if (Array.isArray(e)) {
                e.forEach(function(e) {
                    this.append(e[0], e[1])
                }, this)
            } else if (e) {
                Object.getOwnPropertyNames(e).forEach(function(t) {
                    this.append(t, e[t])
                }, this)
            }
        }
        l.prototype.append = function(e, t) {
            e = s(e);
            t = u(t);
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t
        };
        l.prototype["delete"] = function(e) {
            delete this.map[s(e)]
        };
        l.prototype.get = function(e) {
            e = s(e);
            return this.has(e) ? this.map[e] : null
        };
        l.prototype.has = function(e) {
            return this.map.hasOwnProperty(s(e))
        };
        l.prototype.set = function(e, t) {
            this.map[s(e)] = u(t)
        };
        l.prototype.forEach = function(e, t) {
            for (var r in this.map) {
                if (this.map.hasOwnProperty(r)) {
                    e.call(t, this.map[r], r, this)
                }
            }
        };
        l.prototype.keys = function() {
            var e = [];
            this.forEach(function(t, r) {
                e.push(r)
            });
            return f(e)
        };
        l.prototype.values = function() {
            var e = [];
            this.forEach(function(t) {
                e.push(t)
            });
            return f(e)
        };
        l.prototype.entries = function() {
            var e = [];
            this.forEach(function(t, r) {
                e.push([r, t])
            });
            return f(e)
        };
        if (n.iterable) {
            l.prototype[Symbol.iterator] = l.prototype.entries
        }

        function d(e) {
            if (e.bodyUsed) {
                return Promise.reject(new TypeError("Already read"))
            }
            e.bodyUsed = true
        }

        function c(e) {
            return new Promise(function(t, r) {
                e.onload = function() {
                    t(e.result)
                };
                e.onerror = function() {
                    r(e.error)
                }
            })
        }

        function h(e) {
            var t = new FileReader;
            var r = c(t);
            t.readAsArrayBuffer(e);
            return r
        }

        function p(e) {
            var t = new FileReader;
            var r = c(t);
            t.readAsText(e);
            return r
        }

        function y(e) {
            var t = new Uint8Array(e);
            var r = new Array(t.length);
            for (var n = 0; n < t.length; n++) {
                r[n] = String.fromCharCode(t[n])
            }
            return r.join("")
        }

        function b(e) {
            if (e.slice) {
                return e.slice(0)
            } else {
                var t = new Uint8Array(e.byteLength);
                t.set(new Uint8Array(e));
                return t.buffer
            }
        }

        function v() {
            this.bodyUsed = false;
            this._initBody = function(e) {
                this._bodyInit = e;
                if (!e) {
                    this._bodyText = ""
                } else if (typeof e === "string") {
                    this._bodyText = e
                } else if (n.blob && Blob.prototype.isPrototypeOf(e)) {
                    this._bodyBlob = e
                } else if (n.formData && FormData.prototype.isPrototypeOf(e)) {
                    this._bodyFormData = e
                } else if (n.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) {
                    this._bodyText = e.toString()
                } else if (n.arrayBuffer && n.blob && o(e)) {
                    this._bodyArrayBuffer = b(e.buffer);
                    this._bodyInit = new Blob([this._bodyArrayBuffer])
                } else if (n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || a(e))) {
                    this._bodyArrayBuffer = b(e)
                } else {
                    this._bodyText = e = Object.prototype.toString.call(e)
                }
                if (!this.headers.get("content-type")) {
                    if (typeof e === "string") {
                        this.headers.set("content-type", "text/plain;charset=UTF-8")
                    } else if (this._bodyBlob && this._bodyBlob.type) {
                        this.headers.set("content-type", this._bodyBlob.type)
                    } else if (n.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) {
                        this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")
                    }
                }
            };
            if (n.blob) {
                this.blob = function() {
                    var e = d(this);
                    if (e) {
                        return e
                    }
                    if (this._bodyBlob) {
                        return Promise.resolve(this._bodyBlob)
                    } else if (this._bodyArrayBuffer) {
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                    } else if (this._bodyFormData) {
                        throw new Error("could not read FormData body as blob")
                    } else {
                        return Promise.resolve(new Blob([this._bodyText]))
                    }
                };
                this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        return d(this) || Promise.resolve(this._bodyArrayBuffer)
                    } else {
                        return this.blob().then(h)
                    }
                }
            }
            this.text = function() {
                var e = d(this);
                if (e) {
                    return e
                }
                if (this._bodyBlob) {
                    return p(this._bodyBlob)
                } else if (this._bodyArrayBuffer) {
                    return Promise.resolve(y(this._bodyArrayBuffer))
                } else if (this._bodyFormData) {
                    throw new Error("could not read FormData body as text")
                } else {
                    return Promise.resolve(this._bodyText)
                }
            };
            if (n.formData) {
                this.formData = function() {
                    return this.text().then(_)
                }
            }
            this.json = function() {
                return this.text().then(JSON.parse)
            };
            return this
        }
        var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

        function w(e) {
            var t = e.toUpperCase();
            return m.indexOf(t) > -1 ? t : e
        }

        function g(e, t) {
            t = t || {};
            var r = t.body;
            if (e instanceof g) {
                if (e.bodyUsed) {
                    throw new TypeError("Already read")
                }
                this.url = e.url;
                this.credentials = e.credentials;
                if (!t.headers) {
                    this.headers = new l(e.headers)
                }
                this.method = e.method;
                this.mode = e.mode;
                this.signal = e.signal;
                if (!r && e._bodyInit != null) {
                    r = e._bodyInit;
                    e.bodyUsed = true
                }
            } else {
                this.url = String(e)
            }
            this.credentials = t.credentials || this.credentials || "same-origin";
            if (t.headers || !this.headers) {
                this.headers = new l(t.headers)
            }
            this.method = w(t.method || this.method || "GET");
            this.mode = t.mode || this.mode || null;
            this.signal = t.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && r) {
                throw new TypeError("Body not allowed for GET or HEAD requests")
            }
            this._initBody(r)
        }
        g.prototype.clone = function() {
            return new g(this, {
                body: this._bodyInit
            })
        };

        function _(e) {
            var t = new FormData;
            e.trim().split("&").forEach(function(e) {
                if (e) {
                    var r = e.split("=");
                    var n = r.shift().replace(/\+/g, " ");
                    var o = r.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(n), decodeURIComponent(o))
                }
            });
            return t
        }

        function E(e) {
            var t = new l;
            var r = e.replace(/\r?\n[\t ]+/g, " ");
            r.split(/\r?\n/).forEach(function(e) {
                var r = e.split(":");
                var n = r.shift().trim();
                if (n) {
                    var o = r.join(":").trim();
                    t.append(n, o)
                }
            });
            return t
        }
        v.call(g.prototype);

        function T(e, t) {
            if (!t) {
                t = {}
            }
            this.type = "default";
            this.status = t.status === undefined ? 200 : t.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in t ? t.statusText : "OK";
            this.headers = new l(t.headers);
            this.url = t.url || "";
            this._initBody(e)
        }
        v.call(T.prototype);
        T.prototype.clone = function() {
            return new T(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new l(this.headers),
                url: this.url
            })
        };
        T.error = function() {
            var e = new T(null, {
                status: 0,
                statusText: ""
            });
            e.type = "error";
            return e
        };
        var P = [301, 302, 303, 307, 308];
        T.redirect = function(e, t) {
            if (P.indexOf(t) === -1) {
                throw new RangeError("Invalid status code")
            }
            return new T(null, {
                status: t,
                headers: {
                    location: e
                }
            })
        };
        var A = self.DOMException;
        try {
            new A
        } catch (O) {
            A = function(e, t) {
                this.message = e;
                this.name = t;
                var r = Error(e);
                this.stack = r.stack
            };
            A.prototype = Object.create(Error.prototype);
            A.prototype.constructor = A
        }

        function B(e, t) {
            return new Promise(function(r, o) {
                var i = new g(e, t);
                if (i.signal && i.signal.aborted) {
                    return o(new A("Aborted", "AbortError"))
                }
                var a = new XMLHttpRequest;

                function s() {
                    a.abort()
                }
                a.onload = function() {
                    var e = {
                        status: a.status,
                        statusText: a.statusText,
                        headers: E(a.getAllResponseHeaders() || "")
                    };
                    e.url = "responseURL" in a ? a.responseURL : e.headers.get("X-Request-URL");
                    var t = "response" in a ? a.response : a.responseText;
                    r(new T(t, e))
                };
                a.onerror = function() {
                    o(new TypeError("Network request failed"))
                };
                a.ontimeout = function() {
                    o(new TypeError("Network request failed"))
                };
                a.onabort = function() {
                    o(new A("Aborted", "AbortError"))
                };
                a.open(i.method, i.url, true);
                if (i.credentials === "include") {
                    a.withCredentials = true
                } else if (i.credentials === "omit") {
                    a.withCredentials = false
                }
                if ("responseType" in a && n.blob) {
                    a.responseType = "blob"
                }
                i.headers.forEach(function(e, t) {
                    a.setRequestHeader(t, e)
                });
                if (i.signal) {
                    i.signal.addEventListener("abort", s);
                    a.onreadystatechange = function() {
                        if (a.readyState === 4) {
                            i.signal.removeEventListener("abort", s)
                        }
                    }
                }
                a.send(typeof i._bodyInit === "undefined" ? null : i._bodyInit)
            })
        }
        B.polyfill = true;
        if (!self.fetch) {
            self.fetch = B;
            self.Headers = l;
            self.Request = g;
            self.Response = T
        }
    },
    JNNr: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r("6ato");
        var o = v(n);
        var i = r("2dj7");
        var a = v(i);
        var s = r("Xtzg");
        var u = v(s);
        var f = r("0dFU");
        var l = v(f);
        var d = r("cDcd");
        var c = v(d);
        var h = r("EH+i");
        var p = v(h);
        r("IWDL");
        var y = r("Dl9q");
        var b = v(y);
        r("qh4G");

        function v(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var m = function(e) {
            (0, l.default)(t, e);

            function t(e) {
                (0, o.default)(this, t);
                var r = (0, u.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r.state = {
                    displayNotification: false
                };
                r.onClose = r._onClose.bind(r);
                return r
            }(0, a.default)(t, [{
                key: "componentDidMount",
                value: function r() {
                    var e = this;
                    this.fetchShowEndPoint().then(function(e) {
                        return e.json()
                    }).then(function(t) {
                        if (t && t.showNotification === true) {
                            e.setState({
                                displayNotification: true
                            })
                        }
                    })
                }
            }, {
                key: "request",
                value: function n(e) {
                    var t = this.props.jsonp;
                    return t ? (0, b.default)(e) : fetch(e)
                }
            }, {
                key: "fetchShowEndPoint",
                value: function i() {
                    var e = this.props.shouldShowEndpoint;
                    var t = e + "?timestamp=" + Date.now();
                    return this.request(t)
                }
            }, {
                key: "_onClose",
                value: function s() {
                    var e = this.props.closeEndpoint;
                    this.request(e);
                    this.setState({
                        displayNotification: false
                    })
                }
            }, {
                key: "render",
                value: function f() {
                    var e = this.props,
                        t = e.message,
                        r = e.className;
                    var n = this.state.displayNotification;
                    if (!n) return null;
                    return c.default.createElement("div", {
                        className: "gdpr-fixed-container " + r
                    }, c.default.createElement("div", {
                        className: "gdpr-relative-container"
                    }, c.default.createElement("div", null, t), c.default.createElement("span", {
                        className: "gdpr-close ic-md ic-close-md",
                        onClick: this.onClose
                    })))
                }
            }]);
            return t
        }(c.default.PureComponent);
        m.propTypes = {
            className: p.default.string,
            message: p.default.string,
            shouldShowEndpoint: p.default.string,
            closeEndpoint: p.default.string,
            jsonp: p.default.bool
        };
        m.defaultProps = {
            className: "",
            jsonp: false
        };
        t.default = m
    },
    cDcd: function(e, t) {
        e.exports = window.React
    },
    faye: function(e, t) {
        e.exports = window.ReactDOM
    },
    qh4G: function(e, t, r) {},
    "s+e7": function(e, t, r) {
        e.exports = {
            gdpr: "lTWZD"
        }
    }
});