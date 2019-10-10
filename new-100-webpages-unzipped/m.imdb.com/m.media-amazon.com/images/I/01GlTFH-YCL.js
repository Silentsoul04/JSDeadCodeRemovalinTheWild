(window.webpackJsonpBoomer = window.webpackJsonpBoomer || []).push([
    ["npm.debounce-promise"], {
        DTyOy09aeN: function(e, n, t) {
            "use strict";
            e.exports = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = void 0,
                    o = void 0,
                    i = void 0,
                    u = [];
                return function() {
                    var c = function(e) {
                            return "function" == typeof e ? e() : e
                        }(n),
                        a = (new Date).getTime(),
                        l = !r || a - r > c;
                    r = a;
                    for (var s = arguments.length, m = Array(s), p = 0; p < s; p++) m[p] = arguments[p];
                    if (l && t.leading) return t.accumulate ? Promise.resolve(e.call(this, [m])).then(function(e) {
                        return e[0]
                    }) : Promise.resolve(e.call.apply(e, [this].concat(m)));
                    if (o ? clearTimeout(i) : o = function() {
                            var e = {};
                            return e.promise = new Promise(function(n, t) {
                                e.resolve = n, e.reject = t
                            }), e
                        }(), u.push(m), i = setTimeout(function() {
                            var n = o;
                            clearTimeout(i), Promise.resolve(t.accumulate ? e.call(this, u) : e.apply(this, u[u.length - 1])).then(n.resolve, n.reject), u = [], o = null
                        }.bind(this), c), t.accumulate) {
                        var v = u.length - 1;
                        return o.promise.then(function(e) {
                            return e[v]
                        })
                    }
                    return o.promise
                }
            }
        }
    }
]);