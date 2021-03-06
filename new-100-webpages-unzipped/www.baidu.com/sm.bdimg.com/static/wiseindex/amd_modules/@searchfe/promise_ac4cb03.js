define("@searchfe/promise/src/promise", ["require", "@searchfe/assert", "@searchfe/promise/src/set-immediate"], function(require) {
    function c(a) {
        b(this instanceof c, "Promise must be called with new operator"), b("function" == typeof a, "callback not defined"), this._state = _, this._fulfilledCbs = [], this._rejectedCbs = [], this._errorPending = !1, this._fromResolver(a)
    }

    function a(c) {
        b(c._state === y, w);
        var a;
        a = "function" == typeof window.PromiseRejectionEvent ? window.PromiseRejectionEvent : CustomEvent;
        var h = new a("unhandledrejection", {
            promise: c,
            reason: c._result
        });
        return h.reason = h.reason || c._result, h
    }

    function h(c) {
        return c && "function" == typeof c.then
    }
    var _ = 0,
        v = 1,
        y = 2,
        w = "cannot make RejectionEvent when promise not rejected",
        g = {
            longStackTraces: !1
        },
        b = require("@searchfe/assert"),
        j = require("@searchfe/promise/src/set-immediate");
    return c.prototype._fulfill = function(c) {
        this._result = c, this._state = v, this._flush()
    }, c.prototype._reject = function(c) {
        g.longStackTraces && c && (c.stack += "\n" + this._originalStack), this._result = c, this._state = y, this._errorPending = !0, this._flush(), j(function() {
            this._checkUnHandledRejection()
        }.bind(this))
    }, c.prototype._resolve = function(c) {
        h(c) ? this._fromResolver(c.then.bind(c)) : this._fulfill(c)
    }, c.prototype._fromResolver = function(c) {
        var a = !1,
            h = this;
        try {
            c(function(c) {
                a || (a = !0, h._resolve(c))
            }, function(c) {
                a || (a = !0, h._reject(c))
            })
        } catch (_) {
            if (a) return;
            a = !0, h._reject(_)
        }
    }, c.prototype._checkUnHandledRejection = function() {
        if (this._errorPending) {
            var c = a(this);
            window.dispatchEvent(c)
        }
    }, c.prototype._flush = function() {
        if (this._state !== _) {
            var c = this._state === y ? this._rejectedCbs : this._fulfilledCbs;
            c.forEach(function(c) {
                if (this._state === y && this._errorPending && (this._errorPending = !1), "function" == typeof c) {
                    var a = this._result;
                    j(function() {
                        c(a)
                    })
                }
            }, this), this._rejectedCbs = [], this._fulfilledCbs = []
        }
    }, c.prototype._done = function(c, a) {
        this._fulfilledCbs.push(c), this._rejectedCbs.push(a), this._flush()
    }, c.prototype.then = function(a, h) {
        var _ = this;
        return new c(function(c, v) {
            var y;
            _._done(function(h) {
                if ("function" != typeof a) return c(h);
                try {
                    y = a(h)
                } catch (e) {
                    return v(e)
                }
                c(y)
            }, function(a) {
                if ("function" != typeof h) return v(a);
                try {
                    y = h(a)
                } catch (e) {
                    return v(e)
                }
                c(y)
            })
        })
    }, c.prototype.catch = function(c) {
        return this.then(function(c) {
            return c
        }, c)
    }, c.prototype.finally = function(c) {
        return this.then(c, c)
    }, c.resolve = function(a) {
        return a instanceof c ? a : new c(function(c) {
            return c(a)
        })
    }, c.reject = function(a) {
        return new c(function(c, h) {
            h(a)
        })
    }, c.all = function(a) {
        return new c(function(h, _) {
            function v() {
                0 >= w && h(y)
            }
            var y = a.map(function() {
                    return void 0
                }),
                w = a.length;
            a.map(c.resolve).forEach(function(c, a) {
                c.then(function(c) {
                    y[a] = c, w--, v()
                }, _)
            }), v()
        })
    }, c.fromCallback = function(a) {
        return new c(function(c) {
            a(function(a) {
                c(a)
            })
        })
    }, c.mapSeries = function(a, h) {
        var _, v = [];
        return a.forEach(function(y, w) {
            _ = _ ? c.resolve(_).then(function() {
                return h(y, w, a)
            }) : c.resolve(h(y, w, a)), _ = _.then(function(c) {
                v.push(c)
            })
        }), _.then(function() {
            return v
        })
    }, c
}), define("@searchfe/promise/src/set-immediate", ["require"], function() {
    function c(c, a) {
        var h = c.setImmediate;
        h(a)
    }

    function a(c, a) {
        var h = c.setTimeout;
        h(a)
    }

    function h(c, a) {
        var h = new c.MessageChannel;
        h.port1.onmessage = function() {
            a()
        }, h.port2.postMessage(w)
    }

    function _(c, a) {
        c.addEventListener("message", function h() {
            c.removeEventListener("message", h, !1), a()
        }, !1), c.postMessage(w, "*")
    }

    function v(v, y) {
        g ? a(v, y) : v.setImmediate ? c(v, y) : v.MessageChannel ? h(v, y) : v.addEventListener && v.postMessage ? _(v, y) : a(v, y)
    }

    function y() {
        return "undefined" != typeof window ? window : "undefined" != typeof self ? self : Function("return this")()
    }

    function exports(c) {
        var a = y();
        v(a, c)
    }
    var w = "setImmediate polyfill",
        g = /baiduboxapp/.test(window.navigator.userAgent);
    return exports.impl = v, exports
}), define("@searchfe/promise", ["@searchfe/promise/src/promise"], function(mod) {
    return mod
});