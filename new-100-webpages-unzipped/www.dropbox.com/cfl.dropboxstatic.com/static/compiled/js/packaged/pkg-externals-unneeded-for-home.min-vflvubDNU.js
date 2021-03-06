!(function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("external/immutable-3", e) : t.Immutable = e()
})(this, function() {
    "use strict";

    function t(t, e) {
        e && (t.prototype = Object.create(e.prototype)), t.prototype.constructor = t
    }

    function e(t) {
        return t.value = !1, t
    }

    function r(t) {
        t && (t.value = !0)
    }

    function n() {}

    function i(t, e) {
        e = e || 0;
        for (var r = Math.max(0, t.length - e), n = Array(r), i = 0; r > i; i++) n[i] = t[i + e];
        return n
    }

    function o(t) {
        return void 0 === t.size && (t.size = t.__iterate(s)), t.size
    }

    function u(t, e) {
        return e >= 0 ? +e : o(t) + +e
    }

    function s() {
        return !0
    }

    function a(t, e, r) {
        return (0 === t || void 0 !== r && -r >= t) && (void 0 === e || void 0 !== r && e >= r)
    }

    function c(t, e) {
        return h(t, e, 0)
    }

    function f(t, e) {
        return h(t, e, e)
    }

    function h(t, e, r) {
        return void 0 === t ? r : 0 > t ? Math.max(0, e + t) : void 0 === e ? t : Math.min(e, t)
    }

    function p(t) {
        return y(t) ? t : D(t)
    }

    function _(t) {
        return d(t) ? t : M(t)
    }

    function l(t) {
        return m(t) ? t : j(t)
    }

    function v(t) {
        return y(t) && !g(t) ? t : A(t)
    }

    function y(t) {
        return !(!t || !t[pr])
    }

    function d(t) {
        return !(!t || !t[_r])
    }

    function m(t) {
        return !(!t || !t[lr])
    }

    function g(t) {
        return d(t) || m(t)
    }

    function w(t) {
        return !(!t || !t[vr])
    }

    function S(t) {
        this.next = t
    }

    function b(t, e, r, n) {
        var i = 0 === t ? e : 1 === t ? r : [e, r];
        return n ? n.value = i : n = {
            value: i,
            done: !1
        }, n
    }

    function z() {
        return {
            value: void 0,
            done: !0
        }
    }

    function I(t) {
        return !!q(t)
    }

    function O(t) {
        return t && "function" == typeof t.next
    }

    function x(t) {
        var e = q(t);
        return e && e.call(t)
    }

    function q(t) {
        var e = t && (gr && t[gr] || t[wr]);
        return "function" == typeof e ? e : void 0
    }

    function E(t) {
        return t && "number" == typeof t.length
    }

    function D(t) {
        return null === t || void 0 === t ? L() : y(t) ? t.toSeq() : B(t)
    }

    function M(t) {
        return null === t || void 0 === t ? L().toKeyedSeq() : y(t) ? d(t) ? t.toSeq() : t.fromEntrySeq() : T(t)
    }

    function j(t) {
        return null === t || void 0 === t ? L() : y(t) ? d(t) ? t.entrySeq() : t.toIndexedSeq() : W(t)
    }

    function A(t) {
        return (null === t || void 0 === t ? L() : y(t) ? d(t) ? t.entrySeq() : t : W(t)).toSetSeq()
    }

    function k(t) {
        this._array = t, this.size = t.length
    }

    function R(t) {
        var e = Object.keys(t);
        this._object = t, this._keys = e, this.size = e.length
    }

    function U(t) {
        this._iterable = t, this.size = t.length || t.size
    }

    function K(t) {
        this._iterator = t, this._iteratorCache = []
    }

    function $(t) {
        return !(!t || !t[br])
    }

    function L() {
        return zr || (zr = new k([]))
    }

    function T(t) {
        var e = Array.isArray(t) ? new k(t).fromEntrySeq() : O(t) ? new K(t).fromEntrySeq() : I(t) ? new U(t).fromEntrySeq() : "object" == typeof t ? new R(t) : void 0;
        if (!e) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + t);
        return e
    }

    function W(t) {
        var e = P(t);
        if (!e) throw new TypeError("Expected Array or iterable object of values: " + t);
        return e
    }

    function B(t) {
        var e = P(t) || "object" == typeof t && new R(t);
        if (!e) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + t);
        return e
    }

    function P(t) {
        return E(t) ? new k(t) : O(t) ? new K(t) : I(t) ? new U(t) : void 0
    }

    function C(t, e, r, n) {
        var i = t._cache;
        if (i) {
            for (var o = i.length - 1, u = 0; o >= u; u++) {
                var s = i[r ? o - u : u];
                if (e(s[1], n ? s[0] : u, t) === !1) return u + 1
            }
            return u
        }
        return t.__iterateUncached(e, r)
    }

    function J(t, e, r, n) {
        var i = t._cache;
        if (i) {
            var o = i.length - 1,
                u = 0;
            return new S(function() {
                var t = i[r ? o - u : u];
                return u++ > o ? z() : b(e, n ? t[0] : u - 1, t[1])
            })
        }
        return t.__iteratorUncached(e, r)
    }

    function N() {
        throw TypeError("Abstract")
    }

    function H() {}

    function V() {}

    function Y() {}

    function Q(t, e) {
        return t === e || t !== t && e !== e || !(!t || !e) && ("function" == typeof t.valueOf && "function" == typeof e.valueOf && (t = t.valueOf(), e = e.valueOf()), "function" == typeof t.equals && "function" == typeof e.equals ? t.equals(e) : t === e || t !== t && e !== e)
    }

    function X(t, e) {
        return e ? F(e, t, "", {
            "": t
        }) : G(t)
    }

    function F(t, e, r, n) {
        return Array.isArray(e) ? t.call(n, r, j(e).map(function(r, n) {
            return F(t, r, n, e)
        })) : Z(e) ? t.call(n, r, M(e).map(function(r, n) {
            return F(t, r, n, e)
        })) : e
    }

    function G(t) {
        return Array.isArray(t) ? j(t).map(G).toList() : Z(t) ? M(t).map(G).toMap() : t
    }

    function Z(t) {
        return t && (t.constructor === Object || void 0 === t.constructor)
    }

    function tt(t) {
        return t >>> 1 & 1073741824 | 3221225471 & t
    }

    function et(t) {
        if (t === !1 || null === t || void 0 === t) return 0;
        if ("function" == typeof t.valueOf && (t = t.valueOf(), t === !1 || null === t || void 0 === t)) return 0;
        if (t === !0) return 1;
        var e = typeof t;
        if ("number" === e) {
            var r = 0 | t;
            for (r !== t && (r ^= 4294967295 * t); t > 4294967295;) t /= 4294967295, r ^= t;
            return tt(r)
        }
        return "string" === e ? t.length > Dr ? rt(t) : nt(t) : "function" == typeof t.hashCode ? t.hashCode() : it(t)
    }

    function rt(t) {
        var e = Ar[t];
        return void 0 === e && (e = nt(t), jr === Mr && (jr = 0, Ar = {}), jr++, Ar[t] = e), e
    }

    function nt(t) {
        for (var e = 0, r = 0; t.length > r; r++) e = 31 * e + t.charCodeAt(r) | 0;
        return tt(e)
    }

    function it(t) {
        var e = xr && xr.get(t);
        if (e) return e;
        if (e = t[Er]) return e;
        if (!Or) {
            if (e = t.propertyIsEnumerable && t.propertyIsEnumerable[Er]) return e;
            if (e = ot(t)) return e
        }
        if (Object.isExtensible && !Object.isExtensible(t)) throw Error("Non-extensible objects are not allowed as keys.");
        if (e = ++qr, 1073741824 & qr && (qr = 0), xr) xr.set(t, e);
        else if (Or) Object.defineProperty(t, Er, {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: e
        });
        else if (t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable) t.propertyIsEnumerable = function() {
            return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
        }, t.propertyIsEnumerable[Er] = e;
        else {
            if (!t.nodeType) throw Error("Unable to set a non-enumerable property on object.");
            t[Er] = e
        }
        return e
    }

    function ot(t) {
        if (t && t.nodeType > 0) switch (t.nodeType) {
            case 1:
                return t.uniqueID;
            case 9:
                return t.documentElement && t.documentElement.uniqueID
        }
    }

    function ut(t, e) {
        if (!t) throw Error(e)
    }

    function st(t) {
        ut(1 / 0 !== t, "Cannot perform this action with an infinite size.")
    }

    function at(t, e) {
        this._iter = t, this._useKeys = e, this.size = t.size
    }

    function ct(t) {
        this._iter = t, this.size = t.size
    }

    function ft(t) {
        this._iter = t, this.size = t.size
    }

    function ht(t) {
        this._iter = t, this.size = t.size
    }

    function pt(t) {
        var e = kt(t);
        return e._iter = t, e.size = t.size, e.flip = function() {
            return t
        }, e.reverse = function() {
            var e = t.reverse.apply(this);
            return e.flip = function() {
                return t.reverse()
            }, e
        }, e.has = function(e) {
            return t.contains(e)
        }, e.contains = function(e) {
            return t.has(e)
        }, e.cacheResult = Rt, e.__iterateUncached = function(e, r) {
            var n = this;
            return t.__iterate(function(t, r) {
                return e(r, t, n) !== !1
            }, r)
        }, e.__iteratorUncached = function(e, r) {
            if (e === mr) {
                var n = t.__iterator(e, r);
                return new S(function() {
                    var t = n.next();
                    if (!t.done) {
                        var e = t.value[0];
                        t.value[0] = t.value[1], t.value[1] = e
                    }
                    return t
                })
            }
            return t.__iterator(e === dr ? yr : dr, r)
        }, e
    }

    function _t(t, e, r) {
        var n = kt(t);
        return n.size = t.size, n.has = function(e) {
            return t.has(e)
        }, n.get = function(n, i) {
            var o = t.get(n, cr);
            return o === cr ? i : e.call(r, o, n, t)
        }, n.__iterateUncached = function(n, i) {
            var o = this;
            return t.__iterate(function(t, i, u) {
                return n(e.call(r, t, i, u), i, o) !== !1
            }, i)
        }, n.__iteratorUncached = function(n, i) {
            var o = t.__iterator(mr, i);
            return new S(function() {
                var i = o.next();
                if (i.done) return i;
                var u = i.value,
                    s = u[0];
                return b(n, s, e.call(r, u[1], s, t), i)
            })
        }, n
    }

    function lt(t, e) {
        var r = kt(t);
        return r._iter = t, r.size = t.size, r.reverse = function() {
            return t
        }, t.flip && (r.flip = function() {
            var e = pt(t);
            return e.reverse = function() {
                return t.flip()
            }, e
        }), r.get = function(r, n) {
            return t.get(e ? r : -1 - r, n)
        }, r.has = function(r) {
            return t.has(e ? r : -1 - r)
        }, r.contains = function(e) {
            return t.contains(e)
        }, r.cacheResult = Rt, r.__iterate = function(e, r) {
            var n = this;
            return t.__iterate(function(t, r) {
                return e(t, r, n)
            }, !r)
        }, r.__iterator = function(e, r) {
            return t.__iterator(e, !r)
        }, r
    }

    function vt(t, e, r, n) {
        var i = kt(t);
        return n && (i.has = function(n) {
            var i = t.get(n, cr);
            return i !== cr && !!e.call(r, i, n, t)
        }, i.get = function(n, i) {
            var o = t.get(n, cr);
            return o !== cr && e.call(r, o, n, t) ? o : i
        }), i.__iterateUncached = function(i, o) {
            var u = this,
                s = 0;
            return t.__iterate(function(t, o, a) {
                return e.call(r, t, o, a) ? (s++, i(t, n ? o : s - 1, u)) : void 0
            }, o), s
        }, i.__iteratorUncached = function(i, o) {
            var u = t.__iterator(mr, o),
                s = 0;
            return new S(function() {
                for (;;) {
                    var o = u.next();
                    if (o.done) return o;
                    var a = o.value,
                        c = a[0],
                        f = a[1];
                    if (e.call(r, f, c, t)) return b(i, n ? c : s++, f, o)
                }
            })
        }, i
    }

    function yt(t, e, r) {
        var n = $t().asMutable();
        return t.__iterate(function(i, o) {
            n.update(e.call(r, i, o, t), 0, function(t) {
                return t + 1
            })
        }), n.asImmutable()
    }

    function dt(t, e, r) {
        var n = d(t),
            i = (w(t) ? ze() : $t()).asMutable();
        t.__iterate(function(o, u) {
            i.update(e.call(r, o, u, t), function(t) {
                return t = t || [], t.push(n ? [u, o] : o), t
            })
        });
        var o = At(t);
        return i.map(function(e) {
            return Dt(t, o(e))
        })
    }

    function mt(t, e, r, n) {
        var i = t.size;
        if (a(e, r, i)) return t;
        var o = c(e, i),
            s = f(r, i);
        if (o !== o || s !== s) return mt(t.toSeq().cacheResult(), e, r, n);
        var h = s - o;
        0 > h && (h = 0);
        var p = kt(t);
        return p.size = 0 === h ? h : t.size && h || void 0, !n && $(t) && h >= 0 && (p.get = function(e, r) {
            return e = u(this, e), e >= 0 && h > e ? t.get(e + o, r) : r
        }), p.__iterateUncached = function(e, r) {
            var i = this;
            if (0 === h) return 0;
            if (r) return this.cacheResult().__iterate(e, r);
            var u = 0,
                s = !0,
                a = 0;
            return t.__iterate(function(t, r) {
                return s && (s = u++ < o) ? void 0 : (a++, e(t, n ? r : a - 1, i) !== !1 && a !== h)
            }), a
        }, p.__iteratorUncached = function(e, r) {
            if (h && r) return this.cacheResult().__iterator(e, r);
            var i = h && t.__iterator(e, r),
                u = 0,
                s = 0;
            return new S(function() {
                for (; u++ !== o;) i.next();
                if (++s > h) return z();
                var t = i.next();
                return n || e === dr ? t : e === yr ? b(e, s - 1, void 0, t) : b(e, s - 1, t.value[1], t)
            })
        }, p
    }

    function gt(t, e, r) {
        var n = kt(t);
        return n.__iterateUncached = function(n, i) {
            var o = this;
            if (i) return this.cacheResult().__iterate(n, i);
            var u = 0;
            return t.__iterate(function(t, i, s) {
                return e.call(r, t, i, s) && ++u && n(t, i, o)
            }), u
        }, n.__iteratorUncached = function(n, i) {
            var o = this;
            if (i) return this.cacheResult().__iterator(n, i);
            var u = t.__iterator(mr, i),
                s = !0;
            return new S(function() {
                if (!s) return z();
                var t = u.next();
                if (t.done) return t;
                var i = t.value,
                    a = i[0],
                    c = i[1];
                return e.call(r, c, a, o) ? n === mr ? t : b(n, a, c, t) : (s = !1, z())
            })
        }, n
    }

    function wt(t, e, r, n) {
        var i = kt(t);
        return i.__iterateUncached = function(i, o) {
            var u = this;
            if (o) return this.cacheResult().__iterate(i, o);
            var s = !0,
                a = 0;
            return t.__iterate(function(t, o, c) {
                return s && (s = e.call(r, t, o, c)) ? void 0 : (a++, i(t, n ? o : a - 1, u))
            }), a
        }, i.__iteratorUncached = function(i, o) {
            var u = this;
            if (o) return this.cacheResult().__iterator(i, o);
            var s = t.__iterator(mr, o),
                a = !0,
                c = 0;
            return new S(function() {
                var t, o, f;
                do {
                    if (t = s.next(), t.done) return n || i === dr ? t : i === yr ? b(i, c++, void 0, t) : b(i, c++, t.value[1], t);
                    var h = t.value;
                    o = h[0], f = h[1], a && (a = e.call(r, f, o, u))
                } while (a);
                return i === mr ? t : b(i, o, f, t)
            })
        }, i
    }

    function St(t, e) {
        var r = d(t),
            n = [t].concat(e).map(function(t) {
                return y(t) ? r && (t = _(t)) : t = r ? T(t) : W(Array.isArray(t) ? t : [t]), t
            }).filter(function(t) {
                return 0 !== t.size
            });
        if (0 === n.length) return t;
        if (1 === n.length) {
            var i = n[0];
            if (i === t || r && d(i) || m(t) && m(i)) return i
        }
        var o = new k(n);
        return r ? o = o.toKeyedSeq() : m(t) || (o = o.toSetSeq()), o = o.flatten(!0), o.size = n.reduce(function(t, e) {
            if (void 0 !== t) {
                var r = e.size;
                if (void 0 !== r) return t + r
            }
        }, 0), o
    }

    function bt(t, e, r) {
        var n = kt(t);
        return n.__iterateUncached = function(n, i) {
            function o(t, a) {
                var c = this;
                t.__iterate(function(t, i) {
                    return (!e || e > a) && y(t) ? o(t, a + 1) : n(t, r ? i : u++, c) === !1 && (s = !0), !s
                }, i)
            }
            var u = 0,
                s = !1;
            return o(t, 0), u
        }, n.__iteratorUncached = function(n, i) {
            var o = t.__iterator(n, i),
                u = [],
                s = 0;
            return new S(function() {
                for (; o;) {
                    var t = o.next();
                    if (t.done === !1) {
                        var a = t.value;
                        if (n === mr && (a = a[1]), e && !(e > u.length) || !y(a)) return r ? t : b(n, s++, a, t);
                        u.push(o), o = a.__iterator(n, i)
                    } else o = u.pop()
                }
                return z()
            })
        }, n
    }

    function zt(t, e, r) {
        var n = At(t);
        return t.toSeq().map(function(i, o) {
            return n(e.call(r, i, o, t))
        }).flatten(!0)
    }

    function It(t, e) {
        var r = kt(t);
        return r.size = t.size && 2 * t.size - 1, r.__iterateUncached = function(r, n) {
            var i = this,
                o = 0;
            return t.__iterate(function(t) {
                return (!o || r(e, o++, i) !== !1) && r(t, o++, i) !== !1
            }, n), o
        }, r.__iteratorUncached = function(r, n) {
            var i, o = t.__iterator(dr, n),
                u = 0;
            return new S(function() {
                return (!i || u % 2) && (i = o.next(), i.done) ? i : u % 2 ? b(r, u++, e) : b(r, u++, i.value, i)
            })
        }, r
    }

    function Ot(t, e, r) {
        e || (e = Ut);
        var n = d(t),
            i = 0,
            o = t.toSeq().map(function(e, n) {
                return [n, e, i++, r ? r(e, n, t) : e]
            }).toArray();
        return o.sort(function(t, r) {
            return e(t[3], r[3]) || t[2] - r[2]
        }).forEach(n ? function(t, e) {
            o[e].length = 2
        } : function(t, e) {
            o[e] = t[1]
        }), n ? M(o) : m(t) ? j(o) : A(o)
    }

    function xt(t, e, r) {
        if (e || (e = Ut), r) {
            var n = t.toSeq().map(function(e, n) {
                return [e, r(e, n, t)]
            }).reduce(function(t, r) {
                return qt(e, t[1], r[1]) ? r : t
            });
            return n && n[0]
        }
        return t.reduce(function(t, r) {
            return qt(e, t, r) ? r : t
        })
    }

    function qt(t, e, r) {
        var n = t(r, e);
        return 0 === n && r !== e && (void 0 === r || null === r || r !== r) || n > 0
    }

    function Et(t, e, r) {
        var n = kt(t);
        return n.size = new k(r).map(function(t) {
            return t.size
        }).min(), n.__iterate = function(t, e) {
            for (var r, n = this.__iterator(dr, e), i = 0; !(r = n.next()).done && t(r.value, i++, this) !== !1;);
            return i
        }, n.__iteratorUncached = function(t, n) {
            var i = r.map(function(t) {
                    return t = p(t), x(n ? t.reverse() : t)
                }),
                o = 0,
                u = !1;
            return new S(function() {
                var r;
                return u || (r = i.map(function(t) {
                    return t.next()
                }), u = r.some(function(t) {
                    return t.done
                })), u ? z() : b(t, o++, e.apply(null, r.map(function(t) {
                    return t.value
                })))
            })
        }, n
    }

    function Dt(t, e) {
        return $(t) ? e : t.constructor(e)
    }

    function Mt(t) {
        if (t !== Object(t)) throw new TypeError("Expected [K, V] tuple: " + t)
    }

    function jt(t) {
        return st(t.size), o(t)
    }

    function At(t) {
        return d(t) ? _ : m(t) ? l : v
    }

    function kt(t) {
        return Object.create((d(t) ? M : m(t) ? j : A).prototype)
    }

    function Rt() {
        return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : D.prototype.cacheResult.call(this)
    }

    function Ut(t, e) {
        return t > e ? 1 : e > t ? -1 : 0
    }

    function Kt(t) {
        var e = x(t);
        if (!e) {
            if (!E(t)) throw new TypeError("Expected iterable or array-like: " + t);
            e = x(p(t))
        }
        return e
    }

    function $t(t) {
        return null === t || void 0 === t ? Yt() : Lt(t) ? t : Yt().withMutations(function(e) {
            var r = _(t);
            st(r.size), r.forEach(function(t, r) {
                return e.set(r, t)
            })
        })
    }

    function Lt(t) {
        return !(!t || !t[kr])
    }

    function Tt(t, e) {
        this.ownerID = t, this.entries = e
    }

    function Wt(t, e, r) {
        this.ownerID = t, this.bitmap = e, this.nodes = r
    }

    function Bt(t, e, r) {
        this.ownerID = t, this.count = e, this.nodes = r
    }

    function Pt(t, e, r) {
        this.ownerID = t, this.keyHash = e, this.entries = r
    }

    function Ct(t, e, r) {
        this.ownerID = t, this.keyHash = e, this.entry = r
    }

    function Jt(t, e, r) {
        this._type = e, this._reverse = r, this._stack = t._root && Ht(t._root)
    }

    function Nt(t, e) {
        return b(t, e[0], e[1])
    }

    function Ht(t, e) {
        return {
            node: t,
            index: 0,
            __prev: e
        }
    }

    function Vt(t, e, r, n) {
        var i = Object.create(Rr);
        return i.size = t, i._root = e, i.__ownerID = r, i.__hash = n, i.__altered = !1, i
    }

    function Yt() {
        return Ur || (Ur = Vt(0))
    }

    function Qt(t, r, n) {
        var i, o;
        if (t._root) {
            var u = e(fr),
                s = e(hr);
            if (i = Xt(t._root, t.__ownerID, 0, void 0, r, n, u, s), !s.value) return t;
            o = t.size + (u.value ? n === cr ? -1 : 1 : 0)
        } else {
            if (n === cr) return t;
            o = 1, i = new Tt(t.__ownerID, [
                [r, n]
            ])
        }
        return t.__ownerID ? (t.size = o, t._root = i, t.__hash = void 0, t.__altered = !0, t) : i ? Vt(o, i) : Yt()
    }

    function Xt(t, e, n, i, o, u, s, a) {
        return t ? t.update(e, n, i, o, u, s, a) : u === cr ? t : (r(a), r(s), new Ct(e, i, [o, u]))
    }

    function Ft(t) {
        return t.constructor === Ct || t.constructor === Pt
    }

    function Gt(t, e, r, n, i) {
        if (t.keyHash === n) return new Pt(e, n, [t.entry, i]);
        var o, u = (0 === r ? t.keyHash : t.keyHash >>> r) & ar,
            s = (0 === r ? n : n >>> r) & ar;
        return new Wt(e, 1 << u | 1 << s, u === s ? [Gt(t, e, r + ur, n, i)] : (o = new Ct(e, n, i), s > u ? [t, o] : [o, t]))
    }

    function Zt(t, e, r, i) {
        t || (t = new n);
        for (var o = new Ct(t, et(r), [r, i]), u = 0; e.length > u; u++) {
            var s = e[u];
            o = o.update(t, 0, void 0, s[0], s[1])
        }
        return o
    }

    function te(t, e, r, n) {
        for (var i = 0, o = 0, u = Array(r), s = 0, a = 1, c = e.length; c > s; s++, a <<= 1) {
            var f = e[s];
            void 0 !== f && s !== n && (i |= a, u[o++] = f)
        }
        return new Wt(t, i, u)
    }

    function ee(t, e, r, n, i) {
        for (var o = 0, u = Array(sr), s = 0; 0 !== r; s++, r >>>= 1) u[s] = 1 & r ? e[o++] : void 0;
        return u[n] = i, new Bt(t, o + 1, u)
    }

    function re(t, e, r) {
        for (var n = [], i = 0; r.length > i; i++) {
            var o = r[i],
                u = _(o);
            y(o) || (u = u.map(function(t) {
                return X(t)
            })), n.push(u)
        }
        return ie(t, e, n)
    }

    function ne(t) {
        return function(e, r) {
            return e && e.mergeDeepWith && y(r) ? e.mergeDeepWith(t, r) : t ? t(e, r) : r
        }
    }

    function ie(t, e, r) {
        return r = r.filter(function(t) {
            return 0 !== t.size
        }), 0 === r.length ? t : 0 === t.size && 1 === r.length ? t.constructor(r[0]) : t.withMutations(function(t) {
            for (var n = e ? function(r, n) {
                    t.update(n, cr, function(t) {
                        return t === cr ? r : e(t, r)
                    })
                } : function(e, r) {
                    t.set(r, e)
                }, i = 0; r.length > i; i++) r[i].forEach(n)
        })
    }

    function oe(t, e, r, n) {
        var i = t === cr,
            o = e.next();
        if (o.done) {
            var u = i ? r : t,
                s = n(u);
            return s === u ? t : s
        }
        ut(i || t && t.set, "invalid keyPath");
        var a = o.value,
            c = i ? cr : t.get(a, cr),
            f = oe(c, e, r, n);
        return f === c ? t : f === cr ? t.remove(a) : (i ? Yt() : t).set(a, f)
    }

    function ue(t) {
        return t -= t >> 1 & 1431655765, t = (858993459 & t) + (t >> 2 & 858993459), t = t + (t >> 4) & 252645135, t += t >> 8, t += t >> 16, 127 & t
    }

    function se(t, e, r, n) {
        var o = n ? t : i(t);
        return o[e] = r, o
    }

    function ae(t, e, r, n) {
        var i = t.length + 1;
        if (n && e + 1 === i) return t[e] = r, t;
        for (var o = Array(i), u = 0, s = 0; i > s; s++) s === e ? (o[s] = r, u = -1) : o[s] = t[s + u];
        return o
    }

    function ce(t, e, r) {
        var n = t.length - 1;
        if (r && e === n) return t.pop(), t;
        for (var i = Array(n), o = 0, u = 0; n > u; u++) u === e && (o = 1), i[u] = t[u + o];
        return i
    }

    function fe(t) {
        var e = ve();
        if (null === t || void 0 === t) return e;
        if (he(t)) return t;
        var r = l(t),
            n = r.size;
        return 0 === n ? e : (st(n), n > 0 && sr > n ? le(0, n, ur, null, new pe(r.toArray())) : e.withMutations(function(t) {
            t.setSize(n), r.forEach(function(e, r) {
                return t.set(r, e)
            })
        }))
    }

    function he(t) {
        return !(!t || !t[Tr])
    }

    function pe(t, e) {
        this.array = t, this.ownerID = e
    }

    function _e(t, e) {
        function r(t, e, r) {
            return 0 === e ? n(t, r) : i(t, e, r)
        }

        function n(t, r) {
            var n = r === s ? a && a.array : t && t.array,
                i = r > o ? 0 : o - r,
                c = u - r;
            return c > sr && (c = sr),
                function() {
                    if (i === c) return Pr;
                    var t = e ? --c : i++;
                    return n && n[t]
                }
        }

        function i(t, n, i) {
            var s, a = t && t.array,
                c = i > o ? 0 : o - i >> n,
                f = (u - i >> n) + 1;
            return f > sr && (f = sr),
                function() {
                    for (;;) {
                        if (s) {
                            var t = s();
                            if (t !== Pr) return t;
                            s = null
                        }
                        if (c === f) return Pr;
                        var o = e ? --f : c++;
                        s = r(a && a[o], n - ur, i + (o << n))
                    }
                }
        }
        var o = t._origin,
            u = t._capacity,
            s = be(u),
            a = t._tail;
        return r(t._root, t._level, 0)
    }

    function le(t, e, r, n, i, o, u) {
        var s = Object.create(Wr);
        return s.size = e - t, s._origin = t, s._capacity = e, s._level = r, s._root = n, s._tail = i, s.__ownerID = o, s.__hash = u, s.__altered = !1, s
    }

    function ve() {
        return Br || (Br = le(0, 0, ur))
    }

    function ye(t, r, n) {
        if (r = u(t, r), r >= t.size || 0 > r) return t.withMutations(function(t) {
            0 > r ? we(t, r).set(0, n) : we(t, 0, r + 1).set(r, n)
        });
        r += t._origin;
        var i = t._tail,
            o = t._root,
            s = e(hr);
        return r >= be(t._capacity) ? i = de(i, t.__ownerID, 0, r, n, s) : o = de(o, t.__ownerID, t._level, r, n, s), s.value ? t.__ownerID ? (t._root = o, t._tail = i, t.__hash = void 0, t.__altered = !0, t) : le(t._origin, t._capacity, t._level, o, i) : t
    }

    function de(t, e, n, i, o, u) {
        var s = i >>> n & ar,
            a = t && t.array.length > s;
        if (!a && void 0 === o) return t;
        var c;
        if (n > 0) {
            var f = t && t.array[s],
                h = de(f, e, n - ur, i, o, u);
            return h === f ? t : (c = me(t, e), c.array[s] = h, c)
        }
        return a && t.array[s] === o ? t : (r(u), c = me(t, e), void 0 === o && s === c.array.length - 1 ? c.array.pop() : c.array[s] = o, c)
    }

    function me(t, e) {
        return e && t && e === t.ownerID ? t : new pe(t ? t.array.slice() : [], e)
    }

    function ge(t, e) {
        if (e >= be(t._capacity)) return t._tail;
        if (1 << t._level + ur > e) {
            for (var r = t._root, n = t._level; r && n > 0;) r = r.array[e >>> n & ar], n -= ur;
            return r
        }
    }

    function we(t, e, r) {
        var i = t.__ownerID || new n,
            o = t._origin,
            u = t._capacity,
            s = o + e,
            a = void 0 === r ? u : 0 > r ? u + r : o + r;
        if (s === o && a === u) return t;
        if (s >= a) return t.clear();
        for (var c = t._level, f = t._root, h = 0; 0 > s + h;) f = new pe(f && f.array.length ? [void 0, f] : [], i), c += ur, h += 1 << c;
        h && (s += h, o += h, a += h, u += h);
        for (var p = be(u), _ = be(a); _ >= 1 << c + ur;) f = new pe(f && f.array.length ? [f] : [], i), c += ur;
        var l = t._tail,
            v = p > _ ? ge(t, a - 1) : _ > p ? new pe([], i) : l;
        if (l && _ > p && u > s && l.array.length) {
            f = me(f, i);
            for (var y = f, d = c; d > ur; d -= ur) {
                var m = p >>> d & ar;
                y = y.array[m] = me(y.array[m], i)
            }
            y.array[p >>> ur & ar] = l
        }
        if (u > a && (v = v && v.removeAfter(i, 0, a)), s >= _) s -= _, a -= _, c = ur, f = null, v = v && v.removeBefore(i, 0, s);
        else if (s > o || p > _) {
            for (h = 0; f;) {
                var g = s >>> c & ar;
                if (g !== _ >>> c & ar) break;
                g && (h += (1 << c) * g), c -= ur, f = f.array[g]
            }
            f && s > o && (f = f.removeBefore(i, c, s - h)), f && p > _ && (f = f.removeAfter(i, c, _ - h)), h && (s -= h, a -= h)
        }
        return t.__ownerID ? (t.size = a - s, t._origin = s, t._capacity = a, t._level = c, t._root = f, t._tail = v, t.__hash = void 0, t.__altered = !0, t) : le(s, a, c, f, v)
    }

    function Se(t, e, r) {
        for (var n = [], i = 0, o = 0; r.length > o; o++) {
            var u = r[o],
                s = l(u);
            s.size > i && (i = s.size), y(u) || (s = s.map(function(t) {
                return X(t)
            })), n.push(s)
        }
        return i > t.size && (t = t.setSize(i)), ie(t, e, n)
    }

    function be(t) {
        return sr > t ? 0 : t - 1 >>> ur << ur
    }

    function ze(t) {
        return null === t || void 0 === t ? xe() : Ie(t) ? t : xe().withMutations(function(e) {
            var r = _(t);
            st(r.size), r.forEach(function(t, r) {
                return e.set(r, t)
            })
        })
    }

    function Ie(t) {
        return Lt(t) && w(t)
    }

    function Oe(t, e, r, n) {
        var i = Object.create(ze.prototype);
        return i.size = t ? t.size : 0, i._map = t, i._list = e, i.__ownerID = r, i.__hash = n, i
    }

    function xe() {
        return Cr || (Cr = Oe(Yt(), ve()))
    }

    function qe(t, e, r) {
        var n, i, o = t._map,
            u = t._list,
            s = o.get(e),
            a = void 0 !== s;
        if (r === cr) {
            if (!a) return t;
            u.size >= sr && u.size >= 2 * o.size ? (i = u.filter(function(t, e) {
                return void 0 !== t && s !== e
            }), n = i.toKeyedSeq().map(function(t) {
                return t[0]
            }).flip().toMap(), t.__ownerID && (n.__ownerID = i.__ownerID = t.__ownerID)) : (n = o.remove(e), i = s === u.size - 1 ? u.pop() : u.set(s, void 0))
        } else if (a) {
            if (r === u.get(s)[1]) return t;
            n = o, i = u.set(s, [e, r])
        } else n = o.set(e, u.size), i = u.set(u.size, [e, r]);
        return t.__ownerID ? (t.size = n.size, t._map = n, t._list = i, t.__hash = void 0, t) : Oe(n, i)
    }

    function Ee(t) {
        return null === t || void 0 === t ? je() : De(t) ? t : je().unshiftAll(t)
    }

    function De(t) {
        return !(!t || !t[Jr])
    }

    function Me(t, e, r, n) {
        var i = Object.create(Nr);
        return i.size = t, i._head = e, i.__ownerID = r, i.__hash = n, i.__altered = !1, i
    }

    function je() {
        return Hr || (Hr = Me(0))
    }

    function Ae(t) {
        return null === t || void 0 === t ? Ke() : ke(t) ? t : Ke().withMutations(function(e) {
            var r = v(t);
            st(r.size), r.forEach(function(t) {
                return e.add(t)
            })
        })
    }

    function ke(t) {
        return !(!t || !t[Vr])
    }

    function Re(t, e) {
        return t.__ownerID ? (t.size = e.size, t._map = e, t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e)
    }

    function Ue(t, e) {
        var r = Object.create(Yr);
        return r.size = t ? t.size : 0, r._map = t, r.__ownerID = e, r
    }

    function Ke() {
        return Qr || (Qr = Ue(Yt()))
    }

    function $e(t) {
        return null === t || void 0 === t ? We() : Le(t) ? t : We().withMutations(function(e) {
            var r = v(t);
            st(r.size), r.forEach(function(t) {
                return e.add(t)
            })
        })
    }

    function Le(t) {
        return ke(t) && w(t)
    }

    function Te(t, e) {
        var r = Object.create(Xr);
        return r.size = t ? t.size : 0, r._map = t, r.__ownerID = e, r
    }

    function We() {
        return Fr || (Fr = Te(xe()))
    }

    function Be(t, e) {
        var r = function(t) {
                return this instanceof r ? void(this._map = $t(t)) : new r(t)
            },
            n = Object.keys(t),
            i = r.prototype = Object.create(Gr);
        i.constructor = r, e && (i._name = e), i._defaultValues = t, i._keys = n, i.size = n.length;
        try {
            n.forEach(function(t) {
                Object.defineProperty(r.prototype, t, {
                    get: function() {
                        return this.get(t)
                    },
                    set: function(e) {
                        ut(this.__ownerID, "Cannot set on an immutable record."), this.set(t, e)
                    }
                })
            })
        } catch (t) {}
        return r
    }

    function Pe(t, e, r) {
        var n = Object.create(Object.getPrototypeOf(t));
        return n._map = e, n.__ownerID = r, n
    }

    function Ce(t) {
        return t._name || t.constructor.name
    }

    function Je(t, e) {
        if (t === e) return !0;
        if (!y(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || d(t) !== d(e) || m(t) !== m(e) || w(t) !== w(e)) return !1;
        if (0 === t.size && 0 === e.size) return !0;
        var r = !g(t);
        if (w(t)) {
            var n = t.entries();
            return e.every(function(t, e) {
                var i = n.next().value;
                return i && Q(i[1], t) && (r || Q(i[0], e))
            }) && n.next().done
        }
        var i = !1;
        if (void 0 === t.size)
            if (void 0 === e.size) t.cacheResult();
            else {
                i = !0;
                var o = t;
                t = e, e = o
            }
        var u = !0,
            s = e.__iterate(function(e, n) {
                return (r ? t.has(e) : i ? Q(e, t.get(n, cr)) : Q(t.get(n, cr), e)) ? void 0 : (u = !1, !1)
            });
        return u && t.size === s
    }

    function Ne(t, e, r) {
        if (!(this instanceof Ne)) return new Ne(t, e, r);
        if (ut(0 !== r, "Cannot step a Range by 0"), t = t || 0, void 0 === e && (e = 1 / 0), r = void 0 === r ? 1 : Math.abs(r), t > e && (r = -r), this._start = t, this._end = e, this._step = r, this.size = Math.max(0, Math.ceil((e - t) / r - 1) + 1), 0 === this.size) {
            if (Zr) return Zr;
            Zr = this
        }
    }

    function He(t, e) {
        if (!(this instanceof He)) return new He(t, e);
        if (this._value = t, this.size = void 0 === e ? 1 / 0 : Math.max(0, e), 0 === this.size) {
            if (tn) return tn;
            tn = this
        }
    }

    function Ve(t, e) {
        var r = function(r) {
            t.prototype[r] = e[r]
        };
        return Object.keys(e).forEach(r), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(r), t
    }

    function Ye(t, e) {
        return e
    }

    function Qe(t, e) {
        return [e, t]
    }

    function Xe(t) {
        return function() {
            return !t.apply(this, arguments)
        }
    }

    function Fe(t) {
        return function() {
            return -t.apply(this, arguments)
        }
    }

    function Ge(t) {
        return "string" == typeof t ? JSON.stringify(t) : t
    }

    function Ze() {
        return i(arguments)
    }

    function tr(t, e) {
        return e > t ? 1 : t > e ? -1 : 0
    }

    function er(t) {
        if (1 / 0 === t.size) return 0;
        var e = w(t),
            r = d(t),
            n = e ? 1 : 0;
        return rr(t.__iterate(r ? e ? function(t, e) {
            n = 31 * n + nr(et(t), et(e)) | 0
        } : function(t, e) {
            n = n + nr(et(t), et(e)) | 0
        } : e ? function(t) {
            n = 31 * n + et(t) | 0
        } : function(t) {
            n = n + et(t) | 0
        }), n)
    }

    function rr(t, e) {
        return e = Ir(e, 3432918353), e = Ir(e << 15 | e >>> -15, 461845907), e = Ir(e << 13 | e >>> -13, 5), e = (e + 3864292196 | 0) ^ t, e = Ir(e ^ e >>> 16, 2246822507), e = Ir(e ^ e >>> 13, 3266489909), e = tt(e ^ e >>> 16)
    }

    function nr(t, e) {
        return t ^ e + 2654435769 + (t << 6) + (t >> 2) | 0
    }
    var ir = Array.prototype.slice,
        or = "delete",
        ur = 5,
        sr = 1 << ur,
        ar = sr - 1,
        cr = {},
        fr = {
            value: !1
        },
        hr = {
            value: !1
        };
    t(_, p), t(l, p), t(v, p), p.isIterable = y, p.isKeyed = d, p.isIndexed = m, p.isAssociative = g, p.isOrdered = w, p.Keyed = _, p.Indexed = l, p.Set = v;
    var pr = "@@__IMMUTABLE_ITERABLE__@@",
        _r = "@@__IMMUTABLE_KEYED__@@",
        lr = "@@__IMMUTABLE_INDEXED__@@",
        vr = "@@__IMMUTABLE_ORDERED__@@",
        yr = 0,
        dr = 1,
        mr = 2,
        gr = "function" == typeof Symbol && Symbol.iterator,
        wr = "@@iterator",
        Sr = gr || wr;
    S.prototype.toString = function() {
        return "[Iterator]"
    }, S.KEYS = yr, S.VALUES = dr, S.ENTRIES = mr, S.prototype.inspect = S.prototype.toSource = function() {
        return "" + this
    }, S.prototype[Sr] = function() {
        return this
    }, t(D, p), D.of = function() {
        return D(arguments)
    }, D.prototype.toSeq = function() {
        return this
    }, D.prototype.toString = function() {
        return this.__toString("Seq {", "}")
    }, D.prototype.cacheResult = function() {
        return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this
    }, D.prototype.__iterate = function(t, e) {
        return C(this, t, e, !0)
    }, D.prototype.__iterator = function(t, e) {
        return J(this, t, e, !0)
    }, t(M, D), M.prototype.toKeyedSeq = function() {
        return this
    }, t(j, D), j.of = function() {
        return j(arguments)
    }, j.prototype.toIndexedSeq = function() {
        return this
    }, j.prototype.toString = function() {
        return this.__toString("Seq [", "]")
    }, j.prototype.__iterate = function(t, e) {
        return C(this, t, e, !1)
    }, j.prototype.__iterator = function(t, e) {
        return J(this, t, e, !1)
    }, t(A, D), A.of = function() {
        return A(arguments)
    }, A.prototype.toSetSeq = function() {
        return this
    }, D.isSeq = $, D.Keyed = M, D.Set = A, D.Indexed = j;
    var br = "@@__IMMUTABLE_SEQ__@@";
    D.prototype[br] = !0, t(k, j), k.prototype.get = function(t, e) {
        return this.has(t) ? this._array[u(this, t)] : e
    }, k.prototype.__iterate = function(t, e) {
        for (var r = this._array, n = r.length - 1, i = 0; n >= i; i++)
            if (t(r[e ? n - i : i], i, this) === !1) return i + 1;
        return i
    }, k.prototype.__iterator = function(t, e) {
        var r = this._array,
            n = r.length - 1,
            i = 0;
        return new S(function() {
            return i > n ? z() : b(t, i, r[e ? n - i++ : i++])
        })
    }, t(R, M), R.prototype.get = function(t, e) {
        return void 0 === e || this.has(t) ? this._object[t] : e
    }, R.prototype.has = function(t) {
        return this._object.hasOwnProperty(t)
    }, R.prototype.__iterate = function(t, e) {
        for (var r = this._object, n = this._keys, i = n.length - 1, o = 0; i >= o; o++) {
            var u = n[e ? i - o : o];
            if (t(r[u], u, this) === !1) return o + 1
        }
        return o
    }, R.prototype.__iterator = function(t, e) {
        var r = this._object,
            n = this._keys,
            i = n.length - 1,
            o = 0;
        return new S(function() {
            var u = n[e ? i - o : o];
            return o++ > i ? z() : b(t, u, r[u])
        })
    }, R.prototype[vr] = !0, t(U, j), U.prototype.__iterateUncached = function(t, e) {
        if (e) return this.cacheResult().__iterate(t, e);
        var r = this._iterable,
            n = x(r),
            i = 0;
        if (O(n))
            for (var o; !(o = n.next()).done && t(o.value, i++, this) !== !1;);
        return i
    }, U.prototype.__iteratorUncached = function(t, e) {
        if (e) return this.cacheResult().__iterator(t, e);
        var r = this._iterable,
            n = x(r);
        if (!O(n)) return new S(z);
        var i = 0;
        return new S(function() {
            var e = n.next();
            return e.done ? e : b(t, i++, e.value)
        })
    }, t(K, j), K.prototype.__iterateUncached = function(t, e) {
        if (e) return this.cacheResult().__iterate(t, e);
        for (var r = this._iterator, n = this._iteratorCache, i = 0; n.length > i;)
            if (t(n[i], i++, this) === !1) return i;
        for (var o; !(o = r.next()).done;) {
            var u = o.value;
            if (n[i] = u, t(u, i++, this) === !1) break
        }
        return i
    }, K.prototype.__iteratorUncached = function(t, e) {
        if (e) return this.cacheResult().__iterator(t, e);
        var r = this._iterator,
            n = this._iteratorCache,
            i = 0;
        return new S(function() {
            if (i >= n.length) {
                var e = r.next();
                if (e.done) return e;
                n[i] = e.value
            }
            return b(t, i, n[i++])
        })
    };
    var zr;
    t(N, p), t(H, N), t(V, N), t(Y, N), N.Keyed = H, N.Indexed = V, N.Set = Y;
    var Ir = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function(t, e) {
            t |= 0, e |= 0;
            var r = 65535 & t,
                n = 65535 & e;
            return r * n + ((t >>> 16) * n + r * (e >>> 16) << 16 >>> 0) | 0
        },
        Or = (function() {
            try {
                return Object.defineProperty({}, "@", {}), !0
            } catch (t) {
                return !1
            }
        })(),
        xr = "function" == typeof WeakMap && new WeakMap,
        qr = 0,
        Er = "__immutablehash__";
    "function" == typeof Symbol && (Er = Symbol(Er));
    var Dr = 16,
        Mr = 255,
        jr = 0,
        Ar = {};
    t(at, M), at.prototype.get = function(t, e) {
        return this._iter.get(t, e)
    }, at.prototype.has = function(t) {
        return this._iter.has(t)
    }, at.prototype.valueSeq = function() {
        return this._iter.valueSeq()
    }, at.prototype.reverse = function() {
        var t = this,
            e = lt(this, !0);
        return this._useKeys || (e.valueSeq = function() {
            return t._iter.toSeq().reverse()
        }), e
    }, at.prototype.map = function(t, e) {
        var r = this,
            n = _t(this, t, e);
        return this._useKeys || (n.valueSeq = function() {
            return r._iter.toSeq().map(t, e)
        }), n
    }, at.prototype.__iterate = function(t, e) {
        var r, n = this;
        return this._iter.__iterate(this._useKeys ? function(e, r) {
            return t(e, r, n)
        } : (r = e ? jt(this) : 0, function(i) {
            return t(i, e ? --r : r++, n)
        }), e)
    }, at.prototype.__iterator = function(t, e) {
        if (this._useKeys) return this._iter.__iterator(t, e);
        var r = this._iter.__iterator(dr, e),
            n = e ? jt(this) : 0;
        return new S(function() {
            var i = r.next();
            return i.done ? i : b(t, e ? --n : n++, i.value, i)
        })
    }, at.prototype[vr] = !0, t(ct, j), ct.prototype.contains = function(t) {
        return this._iter.contains(t)
    }, ct.prototype.__iterate = function(t, e) {
        var r = this,
            n = 0;
        return this._iter.__iterate(function(e) {
            return t(e, n++, r)
        }, e)
    }, ct.prototype.__iterator = function(t, e) {
        var r = this._iter.__iterator(dr, e),
            n = 0;
        return new S(function() {
            var e = r.next();
            return e.done ? e : b(t, n++, e.value, e)
        })
    }, t(ft, A), ft.prototype.has = function(t) {
        return this._iter.contains(t)
    }, ft.prototype.__iterate = function(t, e) {
        var r = this;
        return this._iter.__iterate(function(e) {
            return t(e, e, r)
        }, e)
    }, ft.prototype.__iterator = function(t, e) {
        var r = this._iter.__iterator(dr, e);
        return new S(function() {
            var e = r.next();
            return e.done ? e : b(t, e.value, e.value, e)
        })
    }, t(ht, M), ht.prototype.entrySeq = function() {
        return this._iter.toSeq()
    }, ht.prototype.__iterate = function(t, e) {
        var r = this;
        return this._iter.__iterate(function(e) {
            return e ? (Mt(e), t(e[1], e[0], r)) : void 0
        }, e)
    }, ht.prototype.__iterator = function(t, e) {
        var r = this._iter.__iterator(dr, e);
        return new S(function() {
            for (;;) {
                var e = r.next();
                if (e.done) return e;
                var n = e.value;
                if (n) return Mt(n), t === mr ? e : b(t, n[0], n[1], e)
            }
        })
    }, ct.prototype.cacheResult = at.prototype.cacheResult = ft.prototype.cacheResult = ht.prototype.cacheResult = Rt, t($t, H), $t.prototype.toString = function() {
        return this.__toString("Map {", "}")
    }, $t.prototype.get = function(t, e) {
        return this._root ? this._root.get(0, void 0, t, e) : e
    }, $t.prototype.set = function(t, e) {
        return Qt(this, t, e)
    }, $t.prototype.setIn = function(t, e) {
        return this.updateIn(t, cr, function() {
            return e
        })
    }, $t.prototype.remove = function(t) {
        return Qt(this, t, cr)
    }, $t.prototype.deleteIn = function(t) {
        return this.updateIn(t, function() {
            return cr
        })
    }, $t.prototype.update = function(t, e, r) {
        return 1 === arguments.length ? t(this) : this.updateIn([t], e, r)
    }, $t.prototype.updateIn = function(t, e, r) {
        r || (r = e, e = void 0);
        var n = oe(this, Kt(t), e, r);
        return n === cr ? void 0 : n
    }, $t.prototype.clear = function() {
        return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : Yt()
    }, $t.prototype.merge = function() {
        return re(this, void 0, arguments)
    }, $t.prototype.mergeWith = function(t) {
        return re(this, t, ir.call(arguments, 1))
    }, $t.prototype.mergeIn = function(t) {
        var e = ir.call(arguments, 1);
        return this.updateIn(t, Yt(), function(t) {
            return t.merge.apply(t, e)
        })
    }, $t.prototype.mergeDeep = function() {
        return re(this, ne(void 0), arguments)
    }, $t.prototype.mergeDeepWith = function(t) {
        var e = ir.call(arguments, 1);
        return re(this, ne(t), e)
    }, $t.prototype.mergeDeepIn = function(t) {
        var e = ir.call(arguments, 1);
        return this.updateIn(t, Yt(), function(t) {
            return t.mergeDeep.apply(t, e)
        })
    }, $t.prototype.sort = function(t) {
        return ze(Ot(this, t))
    }, $t.prototype.sortBy = function(t, e) {
        return ze(Ot(this, e, t))
    }, $t.prototype.withMutations = function(t) {
        var e = this.asMutable();
        return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this
    }, $t.prototype.asMutable = function() {
        return this.__ownerID ? this : this.__ensureOwner(new n)
    }, $t.prototype.asImmutable = function() {
        return this.__ensureOwner()
    }, $t.prototype.wasAltered = function() {
        return this.__altered
    }, $t.prototype.__iterator = function(t, e) {
        return new Jt(this, t, e)
    }, $t.prototype.__iterate = function(t, e) {
        var r = this,
            n = 0;
        return this._root && this._root.iterate(function(e) {
            return n++, t(e[1], e[0], r)
        }, e), n
    }, $t.prototype.__ensureOwner = function(t) {
        return t === this.__ownerID ? this : t ? Vt(this.size, this._root, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this)
    }, $t.isMap = Lt;
    var kr = "@@__IMMUTABLE_MAP__@@",
        Rr = $t.prototype;
    Rr[kr] = !0, Rr[or] = Rr.remove, Rr.removeIn = Rr.deleteIn, Tt.prototype.get = function(t, e, r, n) {
            for (var i = this.entries, o = 0, u = i.length; u > o; o++)
                if (Q(r, i[o][0])) return i[o][1];
            return n
        },
        Tt.prototype.update = function(t, e, n, o, u, s, a) {
            for (var c = u === cr, f = this.entries, h = 0, p = f.length; p > h && !Q(o, f[h][0]); h++);
            var _ = p > h;
            if (_ ? f[h][1] === u : c) return this;
            if (r(a), (c || !_) && r(s), !c || 1 !== f.length) {
                if (!_ && !c && f.length >= Kr) return Zt(t, f, o, u);
                var l = t && t === this.ownerID,
                    v = l ? f : i(f);
                return _ ? c ? h === p - 1 ? v.pop() : v[h] = v.pop() : v[h] = [o, u] : v.push([o, u]), l ? (this.entries = v, this) : new Tt(t, v)
            }
        }, Wt.prototype.get = function(t, e, r, n) {
            void 0 === e && (e = et(r));
            var i = 1 << ((0 === t ? e : e >>> t) & ar),
                o = this.bitmap;
            return 0 === (o & i) ? n : this.nodes[ue(o & i - 1)].get(t + ur, e, r, n)
        }, Wt.prototype.update = function(t, e, r, n, i, o, u) {
            void 0 === r && (r = et(n));
            var s = (0 === e ? r : r >>> e) & ar,
                a = 1 << s,
                c = this.bitmap,
                f = 0 !== (c & a);
            if (!f && i === cr) return this;
            var h = ue(c & a - 1),
                p = this.nodes,
                _ = f ? p[h] : void 0,
                l = Xt(_, t, e + ur, r, n, i, o, u);
            if (l === _) return this;
            if (!f && l && p.length >= $r) return ee(t, p, c, s, l);
            if (f && !l && 2 === p.length && Ft(p[1 ^ h])) return p[1 ^ h];
            if (f && l && 1 === p.length && Ft(l)) return l;
            var v = t && t === this.ownerID,
                y = f ? l ? c : c ^ a : c | a,
                d = f ? l ? se(p, h, l, v) : ce(p, h, v) : ae(p, h, l, v);
            return v ? (this.bitmap = y, this.nodes = d, this) : new Wt(t, y, d)
        }, Bt.prototype.get = function(t, e, r, n) {
            void 0 === e && (e = et(r));
            var i = (0 === t ? e : e >>> t) & ar,
                o = this.nodes[i];
            return o ? o.get(t + ur, e, r, n) : n
        }, Bt.prototype.update = function(t, e, r, n, i, o, u) {
            void 0 === r && (r = et(n));
            var s = (0 === e ? r : r >>> e) & ar,
                a = i === cr,
                c = this.nodes,
                f = c[s];
            if (a && !f) return this;
            var h = Xt(f, t, e + ur, r, n, i, o, u);
            if (h === f) return this;
            var p = this.count;
            if (f) {
                if (!h && (p--, Lr > p)) return te(t, c, p, s)
            } else p++;
            var _ = t && t === this.ownerID,
                l = se(c, s, h, _);
            return _ ? (this.count = p, this.nodes = l, this) : new Bt(t, p, l)
        }, Pt.prototype.get = function(t, e, r, n) {
            for (var i = this.entries, o = 0, u = i.length; u > o; o++)
                if (Q(r, i[o][0])) return i[o][1];
            return n
        }, Pt.prototype.update = function(t, e, n, o, u, s, a) {
            void 0 === n && (n = et(o));
            var c = u === cr;
            if (n !== this.keyHash) return c ? this : (r(a), r(s), Gt(this, t, e, n, [o, u]));
            for (var f = this.entries, h = 0, p = f.length; p > h && !Q(o, f[h][0]); h++);
            var _ = p > h;
            if (_ ? f[h][1] === u : c) return this;
            if (r(a), (c || !_) && r(s), c && 2 === p) return new Ct(t, this.keyHash, f[1 ^ h]);
            var l = t && t === this.ownerID,
                v = l ? f : i(f);
            return _ ? c ? h === p - 1 ? v.pop() : v[h] = v.pop() : v[h] = [o, u] : v.push([o, u]), l ? (this.entries = v, this) : new Pt(t, this.keyHash, v)
        }, Ct.prototype.get = function(t, e, r, n) {
            return Q(r, this.entry[0]) ? this.entry[1] : n
        }, Ct.prototype.update = function(t, e, n, i, o, u, s) {
            var a = o === cr,
                c = Q(i, this.entry[0]);
            return (c ? o === this.entry[1] : a) ? this : (r(s), a ? void r(u) : c ? t && t === this.ownerID ? (this.entry[1] = o, this) : new Ct(t, this.keyHash, [i, o]) : (r(u), Gt(this, t, e, et(i), [i, o])))
        }, Tt.prototype.iterate = Pt.prototype.iterate = function(t, e) {
            for (var r = this.entries, n = 0, i = r.length - 1; i >= n; n++)
                if (t(r[e ? i - n : n]) === !1) return !1
        }, Wt.prototype.iterate = Bt.prototype.iterate = function(t, e) {
            for (var r = this.nodes, n = 0, i = r.length - 1; i >= n; n++) {
                var o = r[e ? i - n : n];
                if (o && o.iterate(t, e) === !1) return !1
            }
        }, Ct.prototype.iterate = function(t) {
            return t(this.entry)
        }, t(Jt, S), Jt.prototype.next = function() {
            for (var t = this._type, e = this._stack; e;) {
                var r, n = e.node,
                    i = e.index++;
                if (n.entry) {
                    if (0 === i) return Nt(t, n.entry)
                } else if (n.entries) {
                    if (r = n.entries.length - 1, r >= i) return Nt(t, n.entries[this._reverse ? r - i : i])
                } else if (r = n.nodes.length - 1, r >= i) {
                    var o = n.nodes[this._reverse ? r - i : i];
                    if (o) {
                        if (o.entry) return Nt(t, o.entry);
                        e = this._stack = Ht(o, e)
                    }
                    continue
                }
                e = this._stack = this._stack.__prev
            }
            return z()
        };
    var Ur, Kr = sr / 4,
        $r = sr / 2,
        Lr = sr / 4;
    t(fe, V), fe.of = function() {
        return this(arguments)
    }, fe.prototype.toString = function() {
        return this.__toString("List [", "]")
    }, fe.prototype.get = function(t, e) {
        if (t = u(this, t), 0 > t || t >= this.size) return e;
        t += this._origin;
        var r = ge(this, t);
        return r && r.array[t & ar]
    }, fe.prototype.set = function(t, e) {
        return ye(this, t, e)
    }, fe.prototype.remove = function(t) {
        return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this
    }, fe.prototype.clear = function() {
        return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = ur, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : ve()
    }, fe.prototype.push = function() {
        var t = arguments,
            e = this.size;
        return this.withMutations(function(r) {
            we(r, 0, e + t.length);
            for (var n = 0; t.length > n; n++) r.set(e + n, t[n])
        })
    }, fe.prototype.pop = function() {
        return we(this, 0, -1)
    }, fe.prototype.unshift = function() {
        var t = arguments;
        return this.withMutations(function(e) {
            we(e, -t.length);
            for (var r = 0; t.length > r; r++) e.set(r, t[r])
        })
    }, fe.prototype.shift = function() {
        return we(this, 1)
    }, fe.prototype.merge = function() {
        return Se(this, void 0, arguments)
    }, fe.prototype.mergeWith = function(t) {
        return Se(this, t, ir.call(arguments, 1))
    }, fe.prototype.mergeDeep = function() {
        return Se(this, ne(void 0), arguments)
    }, fe.prototype.mergeDeepWith = function(t) {
        var e = ir.call(arguments, 1);
        return Se(this, ne(t), e)
    }, fe.prototype.setSize = function(t) {
        return we(this, 0, t)
    }, fe.prototype.slice = function(t, e) {
        var r = this.size;
        return a(t, e, r) ? this : we(this, c(t, r), f(e, r))
    }, fe.prototype.__iterator = function(t, e) {
        var r = 0,
            n = _e(this, e);
        return new S(function() {
            var e = n();
            return e === Pr ? z() : b(t, r++, e)
        })
    }, fe.prototype.__iterate = function(t, e) {
        for (var r, n = 0, i = _e(this, e);
            (r = i()) !== Pr && t(r, n++, this) !== !1;);
        return n
    }, fe.prototype.__ensureOwner = function(t) {
        return t === this.__ownerID ? this : t ? le(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : (this.__ownerID = t, this)
    }, fe.isList = he;
    var Tr = "@@__IMMUTABLE_LIST__@@",
        Wr = fe.prototype;
    Wr[Tr] = !0, Wr[or] = Wr.remove, Wr.setIn = Rr.setIn, Wr.deleteIn = Wr.removeIn = Rr.removeIn, Wr.update = Rr.update, Wr.updateIn = Rr.updateIn, Wr.mergeIn = Rr.mergeIn, Wr.mergeDeepIn = Rr.mergeDeepIn, Wr.withMutations = Rr.withMutations, Wr.asMutable = Rr.asMutable, Wr.asImmutable = Rr.asImmutable, Wr.wasAltered = Rr.wasAltered, pe.prototype.removeBefore = function(t, e, r) {
        if (r === e ? 1 << e : 0 === this.array.length) return this;
        var n = r >>> e & ar;
        if (n >= this.array.length) return new pe([], t);
        var i, o = 0 === n;
        if (e > 0) {
            var u = this.array[n];
            if (i = u && u.removeBefore(t, e - ur, r), i === u && o) return this
        }
        if (o && !i) return this;
        var s = me(this, t);
        if (!o)
            for (var a = 0; n > a; a++) s.array[a] = void 0;
        return i && (s.array[n] = i), s
    }, pe.prototype.removeAfter = function(t, e, r) {
        if (r === e ? 1 << e : 0 === this.array.length) return this;
        var n = r - 1 >>> e & ar;
        if (n >= this.array.length) return this;
        var i, o = n === this.array.length - 1;
        if (e > 0) {
            var u = this.array[n];
            if (i = u && u.removeAfter(t, e - ur, r), i === u && o) return this
        }
        if (o && !i) return this;
        var s = me(this, t);
        return o || s.array.pop(), i && (s.array[n] = i), s
    };
    var Br, Pr = {};
    t(ze, $t), ze.of = function() {
        return this(arguments)
    }, ze.prototype.toString = function() {
        return this.__toString("OrderedMap {", "}")
    }, ze.prototype.get = function(t, e) {
        var r = this._map.get(t);
        return void 0 !== r ? this._list.get(r)[1] : e
    }, ze.prototype.clear = function() {
        return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : xe()
    }, ze.prototype.set = function(t, e) {
        return qe(this, t, e)
    }, ze.prototype.remove = function(t) {
        return qe(this, t, cr)
    }, ze.prototype.wasAltered = function() {
        return this._map.wasAltered() || this._list.wasAltered()
    }, ze.prototype.__iterate = function(t, e) {
        var r = this;
        return this._list.__iterate(function(e) {
            return e && t(e[1], e[0], r)
        }, e)
    }, ze.prototype.__iterator = function(t, e) {
        return this._list.fromEntrySeq().__iterator(t, e)
    }, ze.prototype.__ensureOwner = function(t) {
        if (t === this.__ownerID) return this;
        var e = this._map.__ensureOwner(t),
            r = this._list.__ensureOwner(t);
        return t ? Oe(e, r, t, this.__hash) : (this.__ownerID = t, this._map = e, this._list = r, this)
    }, ze.isOrderedMap = Ie, ze.prototype[vr] = !0, ze.prototype[or] = ze.prototype.remove;
    var Cr;
    t(Ee, V), Ee.of = function() {
        return this(arguments)
    }, Ee.prototype.toString = function() {
        return this.__toString("Stack [", "]")
    }, Ee.prototype.get = function(t, e) {
        for (var r = this._head; r && t--;) r = r.next;
        return r ? r.value : e
    }, Ee.prototype.peek = function() {
        return this._head && this._head.value
    }, Ee.prototype.push = function() {
        if (0 === arguments.length) return this;
        for (var t = this.size + arguments.length, e = this._head, r = arguments.length - 1; r >= 0; r--) e = {
            value: arguments[r],
            next: e
        };
        return this.__ownerID ? (this.size = t, this._head = e, this.__hash = void 0, this.__altered = !0, this) : Me(t, e)
    }, Ee.prototype.pushAll = function(t) {
        if (t = l(t), 0 === t.size) return this;
        st(t.size);
        var e = this.size,
            r = this._head;
        return t.reverse().forEach(function(t) {
            e++, r = {
                value: t,
                next: r
            }
        }), this.__ownerID ? (this.size = e, this._head = r, this.__hash = void 0, this.__altered = !0, this) : Me(e, r)
    }, Ee.prototype.pop = function() {
        return this.slice(1)
    }, Ee.prototype.unshift = function() {
        return this.push.apply(this, arguments)
    }, Ee.prototype.unshiftAll = function(t) {
        return this.pushAll(t)
    }, Ee.prototype.shift = function() {
        return this.pop.apply(this, arguments)
    }, Ee.prototype.clear = function() {
        return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : je()
    }, Ee.prototype.slice = function(t, e) {
        if (a(t, e, this.size)) return this;
        var r = c(t, this.size);
        if (f(e, this.size) !== this.size) return V.prototype.slice.call(this, t, e);
        for (var n = this.size - r, i = this._head; r--;) i = i.next;
        return this.__ownerID ? (this.size = n, this._head = i, this.__hash = void 0, this.__altered = !0, this) : Me(n, i)
    }, Ee.prototype.__ensureOwner = function(t) {
        return t === this.__ownerID ? this : t ? Me(this.size, this._head, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this)
    }, Ee.prototype.__iterate = function(t, e) {
        if (e) return this.toSeq().cacheResult.__iterate(t, e);
        for (var r = 0, n = this._head; n && t(n.value, r++, this) !== !1;) n = n.next;
        return r
    }, Ee.prototype.__iterator = function(t, e) {
        if (e) return this.toSeq().cacheResult().__iterator(t, e);
        var r = 0,
            n = this._head;
        return new S(function() {
            if (n) {
                var e = n.value;
                return n = n.next, b(t, r++, e)
            }
            return z()
        })
    }, Ee.isStack = De;
    var Jr = "@@__IMMUTABLE_STACK__@@",
        Nr = Ee.prototype;
    Nr[Jr] = !0, Nr.withMutations = Rr.withMutations, Nr.asMutable = Rr.asMutable, Nr.asImmutable = Rr.asImmutable, Nr.wasAltered = Rr.wasAltered;
    var Hr;
    t(Ae, Y), Ae.of = function() {
        return this(arguments)
    }, Ae.fromKeys = function(t) {
        return this(_(t).keySeq())
    }, Ae.prototype.toString = function() {
        return this.__toString("Set {", "}")
    }, Ae.prototype.has = function(t) {
        return this._map.has(t)
    }, Ae.prototype.add = function(t) {
        return Re(this, this._map.set(t, !0))
    }, Ae.prototype.remove = function(t) {
        return Re(this, this._map.remove(t))
    }, Ae.prototype.clear = function() {
        return Re(this, this._map.clear())
    }, Ae.prototype.union = function() {
        var t = ir.call(arguments, 0);
        return t = t.filter(function(t) {
            return 0 !== t.size
        }), 0 === t.length ? this : 0 === this.size && 1 === t.length ? this.constructor(t[0]) : this.withMutations(function(e) {
            for (var r = 0; t.length > r; r++) v(t[r]).forEach(function(t) {
                return e.add(t)
            })
        })
    }, Ae.prototype.intersect = function() {
        var t = ir.call(arguments, 0);
        if (0 === t.length) return this;
        t = t.map(function(t) {
            return v(t)
        });
        var e = this;
        return this.withMutations(function(r) {
            e.forEach(function(e) {
                t.every(function(t) {
                    return t.contains(e)
                }) || r.remove(e)
            })
        })
    }, Ae.prototype.subtract = function() {
        var t = ir.call(arguments, 0);
        if (0 === t.length) return this;
        t = t.map(function(t) {
            return v(t)
        });
        var e = this;
        return this.withMutations(function(r) {
            e.forEach(function(e) {
                t.some(function(t) {
                    return t.contains(e)
                }) && r.remove(e)
            })
        })
    }, Ae.prototype.merge = function() {
        return this.union.apply(this, arguments)
    }, Ae.prototype.mergeWith = function() {
        var t = ir.call(arguments, 1);
        return this.union.apply(this, t)
    }, Ae.prototype.sort = function(t) {
        return $e(Ot(this, t))
    }, Ae.prototype.sortBy = function(t, e) {
        return $e(Ot(this, e, t))
    }, Ae.prototype.wasAltered = function() {
        return this._map.wasAltered()
    }, Ae.prototype.__iterate = function(t, e) {
        var r = this;
        return this._map.__iterate(function(e, n) {
            return t(n, n, r)
        }, e)
    }, Ae.prototype.__iterator = function(t, e) {
        return this._map.map(function(t, e) {
            return e
        }).__iterator(t, e)
    }, Ae.prototype.__ensureOwner = function(t) {
        if (t === this.__ownerID) return this;
        var e = this._map.__ensureOwner(t);
        return t ? this.__make(e, t) : (this.__ownerID = t, this._map = e, this)
    }, Ae.isSet = ke;
    var Vr = "@@__IMMUTABLE_SET__@@",
        Yr = Ae.prototype;
    Yr[Vr] = !0, Yr[or] = Yr.remove, Yr.mergeDeep = Yr.merge, Yr.mergeDeepWith = Yr.mergeWith, Yr.withMutations = Rr.withMutations, Yr.asMutable = Rr.asMutable, Yr.asImmutable = Rr.asImmutable, Yr.__empty = Ke, Yr.__make = Ue;
    var Qr;
    t($e, Ae), $e.of = function() {
        return this(arguments)
    }, $e.fromKeys = function(t) {
        return this(_(t).keySeq())
    }, $e.prototype.toString = function() {
        return this.__toString("OrderedSet {", "}")
    }, $e.isOrderedSet = Le;
    var Xr = $e.prototype;
    Xr[vr] = !0, Xr.__empty = We, Xr.__make = Te;
    var Fr;
    t(Be, H), Be.prototype.toString = function() {
        return this.__toString(Ce(this) + " {", "}")
    }, Be.prototype.has = function(t) {
        return this._defaultValues.hasOwnProperty(t)
    }, Be.prototype.get = function(t, e) {
        if (!this.has(t)) return e;
        var r = this._defaultValues[t];
        return this._map ? this._map.get(t, r) : r
    }, Be.prototype.clear = function() {
        if (this.__ownerID) return this._map && this._map.clear(), this;
        var t = Object.getPrototypeOf(this).constructor;
        return t._empty || (t._empty = Pe(this, Yt()))
    }, Be.prototype.set = function(t, e) {
        if (!this.has(t)) throw Error('Cannot set unknown key "' + t + '" on ' + Ce(this));
        var r = this._map && this._map.set(t, e);
        return this.__ownerID || r === this._map ? this : Pe(this, r)
    }, Be.prototype.remove = function(t) {
        if (!this.has(t)) return this;
        var e = this._map && this._map.remove(t);
        return this.__ownerID || e === this._map ? this : Pe(this, e)
    }, Be.prototype.wasAltered = function() {
        return this._map.wasAltered()
    }, Be.prototype.__iterator = function(t, e) {
        var r = this;
        return _(this._defaultValues).map(function(t, e) {
            return r.get(e)
        }).__iterator(t, e)
    }, Be.prototype.__iterate = function(t, e) {
        var r = this;
        return _(this._defaultValues).map(function(t, e) {
            return r.get(e)
        }).__iterate(t, e)
    }, Be.prototype.__ensureOwner = function(t) {
        if (t === this.__ownerID) return this;
        var e = this._map && this._map.__ensureOwner(t);
        return t ? Pe(this, e, t) : (this.__ownerID = t, this._map = e, this)
    };
    var Gr = Be.prototype;
    Gr[or] = Gr.remove, Gr.deleteIn = Gr.removeIn = Rr.removeIn, Gr.merge = Rr.merge, Gr.mergeWith = Rr.mergeWith, Gr.mergeIn = Rr.mergeIn, Gr.mergeDeep = Rr.mergeDeep, Gr.mergeDeepWith = Rr.mergeDeepWith, Gr.mergeDeepIn = Rr.mergeDeepIn, Gr.setIn = Rr.setIn, Gr.update = Rr.update, Gr.updateIn = Rr.updateIn, Gr.withMutations = Rr.withMutations, Gr.asMutable = Rr.asMutable, Gr.asImmutable = Rr.asImmutable, t(Ne, j), Ne.prototype.toString = function() {
        return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]"
    }, Ne.prototype.get = function(t, e) {
        return this.has(t) ? this._start + u(this, t) * this._step : e
    }, Ne.prototype.contains = function(t) {
        var e = (t - this._start) / this._step;
        return e >= 0 && this.size > e && e === Math.floor(e)
    }, Ne.prototype.slice = function(t, e) {
        return a(t, e, this.size) ? this : (t = c(t, this.size), e = f(e, this.size), t >= e ? new Ne(0, 0) : new Ne(this.get(t, this._end), this.get(e, this._end), this._step))
    }, Ne.prototype.indexOf = function(t) {
        var e = t - this._start;
        if (e % this._step === 0) {
            var r = e / this._step;
            if (r >= 0 && this.size > r) return r
        }
        return -1
    }, Ne.prototype.lastIndexOf = function(t) {
        return this.indexOf(t)
    }, Ne.prototype.__iterate = function(t, e) {
        for (var r = this.size - 1, n = this._step, i = e ? this._start + r * n : this._start, o = 0; r >= o; o++) {
            if (t(i, o, this) === !1) return o + 1;
            i += e ? -n : n
        }
        return o
    }, Ne.prototype.__iterator = function(t, e) {
        var r = this.size - 1,
            n = this._step,
            i = e ? this._start + r * n : this._start,
            o = 0;
        return new S(function() {
            var u = i;
            return i += e ? -n : n, o > r ? z() : b(t, o++, u)
        })
    }, Ne.prototype.equals = function(t) {
        return t instanceof Ne ? this._start === t._start && this._end === t._end && this._step === t._step : Je(this, t)
    };
    var Zr;
    t(He, j), He.prototype.toString = function() {
        return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
    }, He.prototype.get = function(t, e) {
        return this.has(t) ? this._value : e
    }, He.prototype.contains = function(t) {
        return Q(this._value, t)
    }, He.prototype.slice = function(t, e) {
        var r = this.size;
        return a(t, e, r) ? this : new He(this._value, f(e, r) - c(t, r))
    }, He.prototype.reverse = function() {
        return this
    }, He.prototype.indexOf = function(t) {
        return Q(this._value, t) ? 0 : -1
    }, He.prototype.lastIndexOf = function(t) {
        return Q(this._value, t) ? this.size : -1
    }, He.prototype.__iterate = function(t) {
        for (var e = 0; this.size > e; e++)
            if (t(this._value, e, this) === !1) return e + 1;
        return e
    }, He.prototype.__iterator = function(t) {
        var e = this,
            r = 0;
        return new S(function() {
            return e.size > r ? b(t, r++, e._value) : z()
        })
    }, He.prototype.equals = function(t) {
        return t instanceof He ? Q(this._value, t._value) : Je(t)
    };
    var tn;
    p.Iterator = S, Ve(p, {
        toArray: function() {
            st(this.size);
            var t = Array(this.size || 0);
            return this.valueSeq().__iterate(function(e, r) {
                t[r] = e
            }), t
        },
        toIndexedSeq: function() {
            return new ct(this)
        },
        toJS: function() {
            return this.toSeq().map(function(t) {
                return t && "function" == typeof t.toJS ? t.toJS() : t
            }).__toJS()
        },
        toJSON: function() {
            return this.toSeq().map(function(t) {
                return t && "function" == typeof t.toJSON ? t.toJSON() : t
            }).__toJS()
        },
        toKeyedSeq: function() {
            return new at(this, !0)
        },
        toMap: function() {
            return $t(this.toKeyedSeq())
        },
        toObject: function() {
            st(this.size);
            var t = {};
            return this.__iterate(function(e, r) {
                t[r] = e
            }), t
        },
        toOrderedMap: function() {
            return ze(this.toKeyedSeq())
        },
        toOrderedSet: function() {
            return $e(d(this) ? this.valueSeq() : this)
        },
        toSet: function() {
            return Ae(d(this) ? this.valueSeq() : this)
        },
        toSetSeq: function() {
            return new ft(this)
        },
        toSeq: function() {
            return m(this) ? this.toIndexedSeq() : d(this) ? this.toKeyedSeq() : this.toSetSeq()
        },
        toStack: function() {
            return Ee(d(this) ? this.valueSeq() : this)
        },
        toList: function() {
            return fe(d(this) ? this.valueSeq() : this)
        },
        toString: function() {
            return "[Iterable]"
        },
        __toString: function(t, e) {
            return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e
        },
        concat: function() {
            return Dt(this, St(this, ir.call(arguments, 0)))
        },
        contains: function(t) {
            return this.some(function(e) {
                return Q(e, t)
            })
        },
        entries: function() {
            return this.__iterator(mr)
        },
        every: function(t, e) {
            st(this.size);
            var r = !0;
            return this.__iterate(function(n, i, o) {
                return t.call(e, n, i, o) ? void 0 : (r = !1, !1)
            }), r
        },
        filter: function(t, e) {
            return Dt(this, vt(this, t, e, !0))
        },
        find: function(t, e, r) {
            var n = this.findEntry(t, e);
            return n ? n[1] : r
        },
        findEntry: function(t, e) {
            var r;
            return this.__iterate(function(n, i, o) {
                return t.call(e, n, i, o) ? (r = [i, n], !1) : void 0
            }), r
        },
        findLastEntry: function(t, e) {
            return this.toSeq().reverse().findEntry(t, e)
        },
        forEach: function(t, e) {
            return st(this.size), this.__iterate(e ? t.bind(e) : t)
        },
        join: function(t) {
            st(this.size), t = void 0 !== t ? "" + t : ",";
            var e = "",
                r = !0;
            return this.__iterate(function(n) {
                r ? r = !1 : e += t, e += null !== n && void 0 !== n ? "" + n : ""
            }), e
        },
        keys: function() {
            return this.__iterator(yr)
        },
        map: function(t, e) {
            return Dt(this, _t(this, t, e))
        },
        reduce: function(t, e, r) {
            st(this.size);
            var n, i;
            return arguments.length < 2 ? i = !0 : n = e, this.__iterate(function(e, o, u) {
                i ? (i = !1, n = e) : n = t.call(r, n, e, o, u)
            }), n
        },
        reduceRight: function() {
            var t = this.toKeyedSeq().reverse();
            return t.reduce.apply(t, arguments)
        },
        reverse: function() {
            return Dt(this, lt(this, !0))
        },
        slice: function(t, e) {
            return Dt(this, mt(this, t, e, !0))
        },
        some: function(t, e) {
            return !this.every(Xe(t), e)
        },
        sort: function(t) {
            return Dt(this, Ot(this, t))
        },
        values: function() {
            return this.__iterator(dr)
        },
        butLast: function() {
            return this.slice(0, -1)
        },
        isEmpty: function() {
            return void 0 !== this.size ? 0 === this.size : !this.some(function() {
                return !0
            })
        },
        count: function(t, e) {
            return o(t ? this.toSeq().filter(t, e) : this)
        },
        countBy: function(t, e) {
            return yt(this, t, e)
        },
        equals: function(t) {
            return Je(this, t)
        },
        entrySeq: function() {
            var t = this;
            if (t._cache) return new k(t._cache);
            var e = t.toSeq().map(Qe).toIndexedSeq();
            return e.fromEntrySeq = function() {
                return t.toSeq()
            }, e
        },
        filterNot: function(t, e) {
            return this.filter(Xe(t), e)
        },
        findLast: function(t, e, r) {
            return this.toKeyedSeq().reverse().find(t, e, r)
        },
        first: function() {
            return this.find(s)
        },
        flatMap: function(t, e) {
            return Dt(this, zt(this, t, e))
        },
        flatten: function(t) {
            return Dt(this, bt(this, t, !0))
        },
        fromEntrySeq: function() {
            return new ht(this)
        },
        get: function(t, e) {
            return this.find(function(e, r) {
                return Q(r, t)
            }, void 0, e)
        },
        getIn: function(t, e) {
            for (var r, n = this, i = Kt(t); !(r = i.next()).done;) {
                var o = r.value;
                if (n = n && n.get ? n.get(o, cr) : cr, n === cr) return e
            }
            return n
        },
        groupBy: function(t, e) {
            return dt(this, t, e)
        },
        has: function(t) {
            return this.get(t, cr) !== cr
        },
        hasIn: function(t) {
            return this.getIn(t, cr) !== cr
        },
        isSubset: function(t) {
            return t = "function" == typeof t.contains ? t : p(t), this.every(function(e) {
                return t.contains(e)
            })
        },
        isSuperset: function(t) {
            return t.isSubset(this)
        },
        keySeq: function() {
            return this.toSeq().map(Ye).toIndexedSeq()
        },
        last: function() {
            return this.toSeq().reverse().first()
        },
        max: function(t) {
            return xt(this, t)
        },
        maxBy: function(t, e) {
            return xt(this, e, t)
        },
        min: function(t) {
            return xt(this, t ? Fe(t) : tr)
        },
        minBy: function(t, e) {
            return xt(this, e ? Fe(e) : tr, t)
        },
        rest: function() {
            return this.slice(1)
        },
        skip: function(t) {
            return this.slice(Math.max(0, t))
        },
        skipLast: function(t) {
            return Dt(this, this.toSeq().reverse().skip(t).reverse())
        },
        skipWhile: function(t, e) {
            return Dt(this, wt(this, t, e, !0))
        },
        skipUntil: function(t, e) {
            return this.skipWhile(Xe(t), e)
        },
        sortBy: function(t, e) {
            return Dt(this, Ot(this, e, t))
        },
        take: function(t) {
            return this.slice(0, Math.max(0, t))
        },
        takeLast: function(t) {
            return Dt(this, this.toSeq().reverse().take(t).reverse())
        },
        takeWhile: function(t, e) {
            return Dt(this, gt(this, t, e))
        },
        takeUntil: function(t, e) {
            return this.takeWhile(Xe(t), e)
        },
        valueSeq: function() {
            return this.toIndexedSeq()
        },
        hashCode: function() {
            return this.__hash || (this.__hash = er(this))
        }
    });
    var en = p.prototype;
    en[pr] = !0, en[Sr] = en.values, en.__toJS = en.toArray, en.__toStringMapper = Ge, en.inspect = en.toSource = function() {
        return "" + this
    }, en.chain = en.flatMap, (function() {
        try {
            Object.defineProperty(en, "length", {
                get: function() {
                    if (!p.noLengthWarning) {
                        var t;
                        try {
                            throw Error()
                        } catch (e) {
                            t = e.stack
                        }
                        if (-1 === t.indexOf("_wrapObject")) return console && console.warn && console.warn("iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " + t), this.size
                    }
                }
            })
        } catch (t) {}
    })(), Ve(_, {
        flip: function() {
            return Dt(this, pt(this))
        },
        findKey: function(t, e) {
            var r = this.findEntry(t, e);
            return r && r[0]
        },
        findLastKey: function(t, e) {
            return this.toSeq().reverse().findKey(t, e)
        },
        keyOf: function(t) {
            return this.findKey(function(e) {
                return Q(e, t)
            })
        },
        lastKeyOf: function(t) {
            return this.findLastKey(function(e) {
                return Q(e, t)
            })
        },
        mapEntries: function(t, e) {
            var r = this,
                n = 0;
            return Dt(this, this.toSeq().map(function(i, o) {
                return t.call(e, [o, i], n++, r)
            }).fromEntrySeq())
        },
        mapKeys: function(t, e) {
            var r = this;
            return Dt(this, this.toSeq().flip().map(function(n, i) {
                return t.call(e, n, i, r)
            }).flip())
        }
    });
    var rn = _.prototype;
    return rn[_r] = !0, rn[Sr] = en.entries, rn.__toJS = en.toObject, rn.__toStringMapper = function(t, e) {
        return e + ": " + Ge(t)
    }, Ve(l, {
        toKeyedSeq: function() {
            return new at(this, !1)
        },
        filter: function(t, e) {
            return Dt(this, vt(this, t, e, !1))
        },
        findIndex: function(t, e) {
            var r = this.findEntry(t, e);
            return r ? r[0] : -1
        },
        indexOf: function(t) {
            var e = this.toKeyedSeq().keyOf(t);
            return void 0 === e ? -1 : e
        },
        lastIndexOf: function(t) {
            return this.toSeq().reverse().indexOf(t)
        },
        reverse: function() {
            return Dt(this, lt(this, !1))
        },
        slice: function(t, e) {
            return Dt(this, mt(this, t, e, !1))
        },
        splice: function(t, e) {
            var r = arguments.length;
            if (e = Math.max(0 | e, 0), 0 === r || 2 === r && !e) return this;
            t = c(t, this.size);
            var n = this.slice(0, t);
            return Dt(this, 1 === r ? n : n.concat(i(arguments, 2), this.slice(t + e)))
        },
        findLastIndex: function(t, e) {
            var r = this.toKeyedSeq().findLastKey(t, e);
            return void 0 === r ? -1 : r
        },
        first: function() {
            return this.get(0)
        },
        flatten: function(t) {
            return Dt(this, bt(this, t, !1))
        },
        get: function(t, e) {
            return t = u(this, t), 0 > t || 1 / 0 === this.size || void 0 !== this.size && t > this.size ? e : this.find(function(e, r) {
                return r === t
            }, void 0, e)
        },
        has: function(t) {
            return t = u(this, t), t >= 0 && (void 0 !== this.size ? 1 / 0 === this.size || this.size > t : -1 !== this.indexOf(t))
        },
        interpose: function(t) {
            return Dt(this, It(this, t))
        },
        interleave: function() {
            var t = [this].concat(i(arguments)),
                e = Et(this.toSeq(), j.of, t),
                r = e.flatten(!0);
            return e.size && (r.size = e.size * t.length), Dt(this, r)
        },
        last: function() {
            return this.get(-1)
        },
        skipWhile: function(t, e) {
            return Dt(this, wt(this, t, e, !1))
        },
        zip: function() {
            return Dt(this, Et(this, Ze, [this].concat(i(arguments))))
        },
        zipWith: function(t) {
            var e = i(arguments);
            return e[0] = this, Dt(this, Et(this, t, e))
        }
    }), l.prototype[lr] = !0, l.prototype[vr] = !0, Ve(v, {
        get: function(t, e) {
            return this.has(t) ? t : e
        },
        contains: function(t) {
            return this.has(t)
        },
        keySeq: function() {
            return this.valueSeq()
        }
    }), v.prototype.has = en.contains, Ve(M, _.prototype), Ve(j, l.prototype), Ve(A, v.prototype), Ve(H, _.prototype), Ve(V, l.prototype), Ve(Y, v.prototype), {
        Iterable: p,
        Seq: D,
        Collection: N,
        Map: $t,
        OrderedMap: ze,
        List: fe,
        Stack: Ee,
        Set: Ae,
        OrderedSet: $e,
        Record: Be,
        Range: Ne,
        Repeat: He,
        is: Q,
        fromJS: X
    }
}), (function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("external/react-addons-update", [], e) : "object" == typeof exports ? exports.update = e() : (t.React ? t.React.addons = t.React.addons || {} : (function() {
        throw new Error("react-addons-update could not find the React object. If you are using script tags, make sure that React is being loaded before react-addons-update.")
    })()).update = e()
})(this, function() {
    return (function(t) {
        function e(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        var r = {};
        return e.m = t, e.c = r, e.i = function(t) {
            return t
        }, e.d = function(t, r, n) {
            e.o(t, r) || Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, e.n = function(t) {
            var r = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(r, "a", r), r
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 2)
    })([function(t, e, r) {
        "use strict";

        function n(t, e, r, n, o, u, s, a) {
            if (i(e), !t) {
                var c;
                if (void 0 === e) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var f = [r, n, o, u, s, a],
                        h = 0;
                    c = new Error(e.replace(/%s/g, function() {
                        return f[h++]
                    })), c.name = "Invariant Violation"
                }
                throw c.framesToPop = 1, c
            }
        }
        var i = function(t) {};
        i = function(t) {
            if (void 0 === t) throw new Error("invariant requires an error message argument")
        }, t.exports = n
    }, function(t, e, r) {
        "use strict";

        function n(t) {
            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }

        function i() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t]
                    }).join("")) return !1;
                var n = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    n[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
            } catch (t) {
                return !1
            }
        }
        var o = Object.getOwnPropertySymbols,
            u = Object.prototype.hasOwnProperty,
            s = Object.prototype.propertyIsEnumerable;
        t.exports = i() ? Object.assign : function(t, e) {
            for (var r, i, a = n(t), c = 1; c < arguments.length; c++) {
                r = Object(arguments[c]);
                for (var f in r) u.call(r, f) && (a[f] = r[f]);
                if (o) {
                    i = o(r);
                    for (var h = 0; h < i.length; h++) s.call(r, i[h]) && (a[i[h]] = r[i[h]])
                }
            }
            return a
        }
    }, function(t, e, r) {
        "use strict";

        function n(t) {
            return Array.isArray(t) ? t.concat() : t && "object" == typeof t ? u(new t.constructor, t) : t
        }

        function i(t, e, r) {
            s(Array.isArray(t), "update(): expected target of %s to be an array; got %s.", r, t);
            var n = e[r];
            s(Array.isArray(n), "update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?", r, n)
        }

        function o(t, e) {
            if (s("object" == typeof e, "update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?", c.join(", "), "$set"), a.call(e, "$set")) return s(1 === Object.keys(e).length, "Cannot have more than one key in an object with %s", "$set"), e.$set;
            var r = n(t);
            if (a.call(e, "$merge")) {
                var h = e.$merge;
                s(h && "object" == typeof h, "update(): %s expects a spec of type 'object'; got %s", "$merge", h), s(r && "object" == typeof r, "update(): %s expects a target of type 'object'; got %s", "$merge", r), u(r, e.$merge)
            }
            a.call(e, "$push") && (i(t, e, "$push"), e.$push.forEach(function(t) {
                r.push(t)
            })), a.call(e, "$unshift") && (i(t, e, "$unshift"), e.$unshift.forEach(function(t) {
                r.unshift(t)
            })), a.call(e, "$splice") && (s(Array.isArray(t), "Expected %s target to be an array; got %s", "$splice", t), s(Array.isArray(e.$splice), "update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", "$splice", e.$splice), e.$splice.forEach(function(t) {
                s(Array.isArray(t), "update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", "$splice", e.$splice), r.splice.apply(r, t)
            })), a.call(e, "$apply") && (s("function" == typeof e.$apply, "update(): expected spec of %s to be a function; got %s.", "$apply", e.$apply), r = e.$apply(r));
            for (var p in e) f.hasOwnProperty(p) && f[p] || (r[p] = o(t[p], e[p]));
            return r
        }
        var u = r(1),
            s = r(0),
            a = {}.hasOwnProperty,
            c = ["$push", "$unshift", "$splice", "$set", "$merge", "$apply"],
            f = {};
        c.forEach(function(t) {
            f[t] = !0
        }), t.exports = o
    }])
});
//# sourceMappingURL=pkg-externals-unneeded-for-home.min.js-vflH-RtJH.map