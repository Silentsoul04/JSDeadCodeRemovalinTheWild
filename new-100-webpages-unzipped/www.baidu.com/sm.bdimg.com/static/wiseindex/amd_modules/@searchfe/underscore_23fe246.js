define("@searchfe/underscore/src/index", ["require", "@searchfe/assert"], function(require) {
    function a(a, c) {
        var g = a;
        return (c || "").split(".").forEach(function(a) {
            g = g ? g[a] : void 0
        }), g
    }

    function c(a, c, g) {
        a = a || {};
        var v = (c || "").split(".");
        v.forEach(function(c, i) {
            a[c] = void 0 !== a[c] ? a[c] : {}, i === v.length - 1 ? a[c] = g : a = a[c]
        })
    }

    function g(a, c) {
        for (var g = c.split("."), i = 0; v(a, g[i]) && i < g.length;) a = a[g[i++]];
        return i >= g.length
    }

    function v(a, c) {
        return null !== a && void 0 !== a && cr.call(a, c)
    }

    function y(a) {
        return a = O(a), a.shift(), a
    }

    function h(a) {
        var c = [];
        for (var g in a) c.push(g);
        return c
    }

    function E(a) {
        return Object.keys(Object(a))
    }

    function b(a, c) {
        a = a || {};
        for (var g in a)
            if (a.hasOwnProperty(g) && c(a[g], g, a) === !1) break;
        return a
    }

    function O(a) {
        return a ? ur.slice.call(a) : []
    }

    function A(a) {
        var c = y(arguments);
        return ur.forEach.apply(a || [], c)
    }

    function w(a) {
        var c = y(arguments);
        return ur.filter.apply(a || [], c)
    }

    function j(a, c) {
        if (M(a)) {
            var g = y(arguments);
            return ur.map.apply(a || [], g)
        }
        var v = [];
        return b(a, function() {
            v.push(c.apply(null, arguments))
        }), v
    }

    function k(a, c, g) {
        if (M(a)) {
            var v = y(arguments);
            return ur.reduce.apply(a, v)
        }
        var h, i, b = E(a);
        for (arguments.length >= 3 ? (h = g, i = 0) : b.length > 0 && (h = a[b[0]], i = 1); i < b.length; i++) {
            var O = b[i];
            h = c(h, a[O], O, a)
        }
        return h
    }

    function R(a) {
        var c = y(arguments);
        return ur.slice.apply(a || [], c)
    }

    function P(a) {
        var c = y(arguments);
        return ur.splice.apply(a || [], c)
    }

    function S(a) {
        var c = y(arguments);
        return fr.split.apply(a || "", c)
    }

    function I(a, c, g) {
        for (var i = g || 0; i < a.length; i++)
            if (c(a[i], i, a)) return i;
        return -1
    }

    function D(a) {
        return y(arguments).reduce(function(a, c) {
            return a.replace("%s", c)
        }, a)
    }

    function F() {
        return C.apply(null, R(arguments, 0).reverse())
    }

    function L(a) {
        var c;
        return U(a) ? (c = [], a.forEach(function(a) {
            c.push(L(a))
        }), c) : _(a) ? (c = {}, b(a, function(a, g) {
            c[g] = a
        }), c) : a
    }

    function N(a) {
        var c;
        return T(a) ? a : U(a) ? (c = [], a.forEach(function(a) {
            c.push(N(a))
        }), c) : _(a) ? (c = {}, b(a, function(a, g) {
            c[g] = N(a)
        }), c) : a
    }

    function _(a) {
        var c = typeof a;
        return null != a && ("object" === c || "function" === c)
    }

    function G(a) {
        return "number" == typeof a && a > -1 && a % 1 === 0 && sr >= a
    }

    function M(a) {
        return null != a && G(a.length) && !T(a)
    }

    function T(a) {
        var c = typeof a;
        return "function" === c
    }

    function X(a) {
        return a instanceof String || "string" == typeof a
    }

    function z(a, c, g) {
        return void 0 === g && (g = 0), a.indexOf(c, g) > -1
    }

    function B(a) {
        return a instanceof RegExp
    }

    function C(a) {
        a = null == a ? {} : a;
        var c = R(arguments, 1);
        return A(c, function(c) {
            J(a, c)
        }), a
    }

    function H(a, c) {
        return a ? void b(c, function(c, g) {
            return _(c) && _(a[g]) ? H(a[g], c) : void(a[g] = c)
        }) : a
    }

    function J(a, c) {
        return a ? (b(c, function(c, g) {
            a[g] = c
        }), a) : a
    }

    function K() {
        var a = {},
            c = R(arguments, 0).reverse();
        return A(c, function(c) {
            H(a, c)
        }), a
    }

    function Q(a) {
        var c = {};
        return j(a, function(a) {
            var g = a[0],
                v = a[1];
            c[g] = v
        }), c
    }

    function U(a) {
        return a instanceof Array
    }

    function V(a) {
        return U(a) ? 0 === a.length : !a
    }

    function W(a) {
        return function() {
            return !a.apply(null, arguments)
        }
    }

    function Y(a) {
        return a.bind.apply(a, R(arguments))
    }

    function Z(a) {
        var c = R(arguments);
        return c.shift(),
            function() {
                var g = R(arguments),
                    v = [g, arguments.length, 0].concat(c);
                return P.apply(null, v), a.apply(null, g)
            }
    }

    function $(a, c) {
        return er("function" == typeof c, "wrapper should be a function"),
            function() {
                var g = Array.prototype.slice.call(arguments, 0);
                return g.unshift(a), c.apply(this, g)
            }
    }

    function nr(a, c) {
        var g = function() {};
        g.prototype = c.prototype;
        var v = a.prototype,
            y = a.prototype = new g;
        for (var h in v) v.hasOwnProperty(h) && (y[h] = v[h]);
        return a.prototype.constructor = a, a
    }

    function rr(a) {
        return function(c) {
            return null == a ? void 0 : a[c]
        }
    }

    function tr(a) {
        var c = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            g = /[&<>"']/g,
            v = RegExp(g.source),
            y = rr(c);
        return a && v.test(a) ? a.replace(g, y) : a
    }
    var er = require("@searchfe/assert"),
        ur = Array.prototype,
        ar = Object.prototype,
        cr = ar.hasOwnProperty,
        fr = String.prototype,
        exports = {},
        sr = Number.MAX_SAFE_INTEGER || 9007199254740991;
    return exports.keysIn = h, exports.keys = E, exports.get = a, exports.set = c, exports.has = g, exports.forOwn = b, exports.assign = C, exports.clone = L, exports.cloneDeep = N, exports.merge = C, exports.extend = C, exports.defaults = F, exports.defaultsDeep = K, exports.fromPairs = Q, exports.slice = R, exports.splice = P, exports.forEach = A, exports.filter = w, exports.map = j, exports.reduce = k, exports.toArray = O, exports.findIndex = I, exports.split = S, exports.format = D, exports.escape = tr, exports.isArray = U, exports.isFunction = T, exports.isEmpty = V, exports.isString = X, exports.isObject = _, exports.isArrayLike = M, exports.isLength = G, exports.isRegExp = B, exports.inherits = nr, exports.contains = z, exports.noop = function() {}, exports.partial = Y, exports.partialRight = Z, exports.negate = W, exports.wrap = $, exports
}), define("@searchfe/underscore", ["@searchfe/underscore/src/index"], function(mod) {
    return mod
});