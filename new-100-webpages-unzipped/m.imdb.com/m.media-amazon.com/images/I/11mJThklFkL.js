(window.webpackJsonpBoomer = window.webpackJsonpBoomer || []).push([
    ["commons.react-is"], {
        "5tUqbCRUVw": function(e, o, t) {
            "use strict";
            e.exports = t("DR3ojuJTKW")
        },
        DR3ojuJTKW: function(e, o, t) {
            "use strict";
            /** @license React v16.8.5
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = "function" == typeof Symbol && Symbol.for,
                n = r ? Symbol.for("react.element") : 60103,
                c = r ? Symbol.for("react.portal") : 60106,
                f = r ? Symbol.for("react.fragment") : 60107,
                u = r ? Symbol.for("react.strict_mode") : 60108,
                s = r ? Symbol.for("react.profiler") : 60114,
                i = r ? Symbol.for("react.provider") : 60109,
                a = r ? Symbol.for("react.context") : 60110,
                y = r ? Symbol.for("react.async_mode") : 60111,
                l = r ? Symbol.for("react.concurrent_mode") : 60111,
                m = r ? Symbol.for("react.forward_ref") : 60112,
                p = r ? Symbol.for("react.suspense") : 60113,
                b = r ? Symbol.for("react.memo") : 60115,
                d = r ? Symbol.for("react.lazy") : 60116;

            function S(e) {
                if ("object" == typeof e && null !== e) {
                    var o = e.$$typeof;
                    switch (o) {
                        case n:
                            switch (e = e.type) {
                                case y:
                                case l:
                                case f:
                                case s:
                                case u:
                                case p:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case a:
                                        case m:
                                        case i:
                                            return e;
                                        default:
                                            return o
                                    }
                            }
                        case d:
                        case b:
                        case c:
                            return o
                    }
                }
            }

            function $(e) {
                return S(e) === l
            }
            o.typeOf = S, o.AsyncMode = y, o.ConcurrentMode = l, o.ContextConsumer = a, o.ContextProvider = i, o.Element = n, o.ForwardRef = m, o.Fragment = f, o.Lazy = d, o.Memo = b, o.Portal = c, o.Profiler = s, o.StrictMode = u, o.Suspense = p, o.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === f || e === l || e === s || e === u || e === p || "object" == typeof e && null !== e && (e.$$typeof === d || e.$$typeof === b || e.$$typeof === i || e.$$typeof === a || e.$$typeof === m)
            }, o.isAsyncMode = function(e) {
                return $(e) || S(e) === y
            }, o.isConcurrentMode = $, o.isContextConsumer = function(e) {
                return S(e) === a
            }, o.isContextProvider = function(e) {
                return S(e) === i
            }, o.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }, o.isForwardRef = function(e) {
                return S(e) === m
            }, o.isFragment = function(e) {
                return S(e) === f
            }, o.isLazy = function(e) {
                return S(e) === d
            }, o.isMemo = function(e) {
                return S(e) === b
            }, o.isPortal = function(e) {
                return S(e) === c
            }, o.isProfiler = function(e) {
                return S(e) === s
            }, o.isStrictMode = function(e) {
                return S(e) === u
            }, o.isSuspense = function(e) {
                return S(e) === p
            }
        }
    }
]);