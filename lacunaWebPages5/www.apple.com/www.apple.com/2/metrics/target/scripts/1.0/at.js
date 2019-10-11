//No Custom JavaScript
/**
 * @license
 * at.js 1.5.0 | (c) Adobe Systems Incorporated | All rights reserved
 * zepto.js | (c) 2010-2016 Thomas Fuchs | zeptojs.com/license
 */
window.adobe = window.adobe || {}, window.adobe.target = function() {
    "use strict";

    function n() {}

    function t(n) {}

    function e(n) {
        return _c.call(n)
    }

    function r(n) {
        return e(n)
    }

    function i(n) {
        var t = void 0 === n ? "undefined" : Rc(n);
        return null != n && ("object" === t || "function" === t)
    }

    function o(n) {
        return !!i(n) && r(n) === Ic
    }

    function u(n) {}

    function c(n) {
        return null == n
    }

    function a(n) {}

    function f(n) {
        return o(n) ? n : a
    }

    function s(n) {
        return c(n) ? [] : Object.keys(n)
    }

    function l(n, t) {
        return c(t) ? [] : (Pc(t) ? qc : Uc)(f(n), t)
    }

    function d(n) {}

    function h(n) {}

    function p(n) {
        for (var t = this, e = n ? n.length : 0, r = e; r -= 1;)
            if (!o(n[r])) throw new TypeError("Expected a function");
        return function() {
            for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            for (var u = 0, c = e ? n[u].apply(t, i) : i[0];
                (u += 1) < e;) c = n[u].call(t, c);
            return c
        }
    }

    function v(n, t) {
        if (!c(t)) {
            (Pc(t) ? Mc : Lc)(f(n), t)
        }
    }

    function m(n) {
        return null != n && "object" === (void 0 === n ? "undefined" : Rc(n))
    }

    function g(n) {
        return "string" == typeof n || !Pc(n) && m(n) && r(n) === Fc
    }

    function y(n) {}

    function b(n) {
        return "number" == typeof n && n > -1 && n % 1 == 0 && n <= $c
    }

    function x(n) {
        return null != n && b(n.length) && !o(n)
    }

    function w(n, t) {
        return Bc(function(n) {
            return t[n]
        }, n)
    }

    function E(n) {}

    function C(n) {}

    function S(n) {
        return c(n) ? [] : x(n) ? g(n) ? C(n) : E(n) : w(s(n), n)
    }

    function O(n) {
        if (null == n) return !0;
        if (x(n) && (Pc(n) || g(n) || o(n.splice))) return !n.length;
        for (var t in n)
            if (Vc.call(n, t)) return !1;
        return !0
    }

    function T(n) {
        return c(n) ? "" : Zc.call(n)
    }

    function k(n) {
        return g(n) ? !T(n) : O(n)
    }

    function N(n) {}

    function A(n) {}

    function D(n) {
        return m(n) && 1 === n.nodeType && !A(n)
    }

    function j(n) {}

    function _(n, t) {
        return c(t) ? [] : (Pc(t) ? Bc : ta)(f(n), t)
    }

    function R() {}

    function I() {
        return (new Date).getTime()
    }

    function P(n, t, e) {
        return c(e) ? t : (Pc(e) ? ea : ra)(f(n), t, e)
    }

    function M(n) {
        return null == n ? n : oa.call(n)
    }

    function L(n, t) {
        return k(t) ? [] : t.split(n)
    }

    function q(n, t) {
        return n + Math.floor(Math.random() * (t - n + 1))
    }

    function U() {
        var n = I();
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = (n + q(0, 16)) % 16 | 0;
            return n = Math.floor(n / 16), ("x" === t ? e : 3 & e | 8).toString(16)
        })
    }

    function F(n) {
        return td.test(n)
    }

    function $(n) {
        if (F(n)) return n;
        var t = M(L(".", n)),
            e = t.length;
        return e >= 3 && ed.test(t[1]) ? t[2] + "." + t[1] + "." + t[0] : 1 === e ? t[0] : t[1] + "." + t[0]
    }

    function B(n, t) {
        n.enabled && v(function(e) {
            c(t[e]) || (n[e] = t[e])
        }, id)
    }

    function H(n) {
        var t = n.documentMode;
        return !t || t >= 10
    }

    function V(n) {
        var t = n.compatMode;
        return t && "CSS1Compat" === t
    }

    function z(n, t, e) {
        e[sl] = $(n.location.hostname), e[Us] = V(t) && H(t), B(e, n[Kl] || {})
    }

    function Z(n) {
        z(ua, ca, n), rd = Dc({}, n), rd[Xs] = n[Xs] / 1e3, rd[Ys] = n[Ys] / 1e3, rd[cl] = "x-only" === rd[Hs], rd[al] = "disabled" !== rd[Hs], rd[fl] = rd[il] ? "https:" : ""
    }

    function G() {
        return rd
    }

    function J(n, t) {
        return t = {
            exports: {}
        }, n(t, t.exports), t.exports
    }

    function K(n) {
        try {
            return decodeURIComponent(n)
        } catch (t) {
            return n
        }
    }

    function W(n) {
        try {
            return encodeURIComponent(n)
        } catch (t) {
            return n
        }
    }

    function X(n) {
        return pd[n] ? pd[n] : (hd.href = n, pd[n] = dd(hd.href), pd[n])
    }

    function Y(n, t) {}

    function Q(n, t, e) {
        return {
            name: n,
            value: t,
            expires: e
        }
    }

    function nn(n) {
        var t = L("#", n);
        return O(t) || t.length < 3 ? null : isNaN(parseInt(t[2], 10)) ? null : Q(K(t[0]), K(t[1]), Number(t[2]))
    }

    function tn(n) {
        return k(n) ? [] : L("|", n)
    }

    function en() {
        var n = _(nn, tn(fd(qs))),
            t = Math.ceil(I() / 1e3),
            e = function(n) {
                return i(n) && t <= n.expires
            };
        return P(function(n, t) {
            return n[t.name] = t, n
        }, {}, l(e, n))
    }

    function rn(n) {
        var t = en(),
            e = t[n];
        return i(e) ? e.value : ""
    }

    function on(n) {
        return [W(n.name), W(n.value), n.expires].join("#")
    }

    function un(n) {
        return n.expires
    }

    function cn(n) {
        var t = _(un, n);
        return Math.max.apply(null, t)
    }

    function an(n, t) {
        var e = S(n),
            r = Math.abs(1e3 * cn(e) - I()),
            i = _(on, e).join("|"),
            o = new Date(I() + r);
        sd(qs, i, {
            domain: t,
            expires: o
        })
    }

    function fn(n) {
        var t = n.name,
            e = n.value,
            r = n.expires,
            i = n.domain,
            o = en();
        o[t] = Q(t, e, Math.ceil(r + I() / 1e3)), an(o, i)
    }

    function sn(n) {
        return Qc(fd(n))
    }

    function ln(n, t) {
        var e = n.location,
            r = e.search,
            i = wd(r);
        return Qc(i[t])
    }

    function dn(n, t) {
        var e = n.referrer,
            r = X(e).queryKey;
        return !c(r) && Qc(r[t])
    }

    function hn(n, t, e) {
        return sn(e) || ln(n, e) || dn(t, e)
    }

    function pn() {
        var n = G(),
            t = n.cookieDomain;
        sd(nf, tf, {
            domain: t
        });
        var e = fd(nf) === tf;
        return ld(nf), e
    }

    function vn() {
        return hn(ua, ca, Ya)
    }

    function mn() {
        return G().enabled && pn() && !vn()
    }

    function gn() {
        return hn(ua, ca, Xa)
    }

    function yn() {
        return hn(ua, ca, Qa)
    }

    function bn(n, t) {
        var e = n.console;
        return !c(e) && o(e[t])
    }

    function xn(n, t) {}

    function wn(n, t) {
        var e = n.console;
        bn(n, "debug") && gn() && e.debug.apply(e, [Cd].concat(t))
    }

    function En() {}

    function Cn() {
        for (var n = arguments.length, t = Array(n), e = 0; e < n; e++) t[e] = arguments[e];
        wn(ua, t)
    }

    function Sn(n) {}

    function On(n, t, e) {
        var r = n[Jl] || [];
        if (e) {
            var i = r.push;
            r[Gs] = Sd, r[zl] = Sn(t), r[Zl] = [], r[Gl] = [], r.push = function(n) {}
        }
        n[Jl] = r
    }

    function Tn(n, t, e, r) {
        if (t) {
            var i = {};
            i[Yl] = I(), n[Jl][e].push(Dc(i, r))
        }
    }

    function kn() {
        On(ua, G(), gn())
    }

    function Nn(n, t) {
        Tn(ua, gn(), n, t)
    }

    function An() {
        var n = {};
        return n[ps] = !0, n
    }

    function Dn(n) {}

    function jn(n) {
        return k(n) ? Dn(Of) : n.length > ef ? Dn(Tf) : An()
    }

    function _n(n) {}

    function Rn(n) {
        if (!i(n)) return Dn(Sf);
        var t = n[ms],
            e = jn(t);
        if (!e[ps]) return e;
        var r = n[gs];
        return Pc(r) ? An() : Dn(Af)
    }

    function In(n) {}

    function Pn(n, t) {}

    function Mn(n, t) {
        fn({
            name: Ll,
            value: n,
            expires: t[Ys],
            domain: t[sl]
        })
    }

    function Ln(n) {
        var t = G();
        t[cl] || Mn(n, t)
    }

    function qn() {
        var n = G();
        return n[cl] ? Td : (k(rn(Ll)) && Mn(Td, n), rn(Ll))
    }

    function Un(n) {
        var t = G();
        t[cl] || fn({
            name: Pl,
            value: n,
            expires: t[Xs],
            domain: t[sl]
        })
    }

    function Fn() {
        return G()[cl] ? "" : rn(Pl)
    }

    function $n(n) {}

    function Bn() {}

    function Hn(n) {
        var t = G();
        if (t[tl]) {
            var e = $n(n);
            if (!k(e)) {
                var r = new Date(I() + t[el]);
                sd(Ml, e, {
                    domain: t[sl],
                    expires: r
                })
            }
        }
    }

    function Vn(n) {}

    function zn(n, t) {
        var e = n(),
            r = t(),
            i = {};
        return i.sessionId = e, Qc(r) ? (i.deviceId = r, i) : i
    }

    function Zn(n, t, e, r) {
        var i = new n.CustomEvent(e, {
            detail: r
        });
        t.dispatchEvent(i)
    }

    function Gn(n) {
        return !O(n) && !O(l(Vn, n))
    }

    function Jn() {
        Zn(ua, ca, Nd, {
            type: Nd
        })
    }

    function Kn(n) {
        var t = {
            type: Ad,
            mbox: n.mbox,
            tracking: zn(qn, Fn)
        };
        Zn(ua, ca, Ad, t)
    }

    function Wn(n, t) {
        var e = n.responseTokens,
            r = {
                type: Dd,
                mbox: n.mbox,
                redirect: Gn(t),
                tracking: zn(qn, Fn)
            };
        O(e) || (r.responseTokens = e), Zn(ua, ca, Dd, r)
    }

    function Xn(n) {}

    function Yn(n) {}

    function Qn(n) {}

    function nt(n) {}

    function tt(n) {
        var t = {
            type: Pd,
            mbox: n.mbox,
            tracking: zn(qn, Fn)
        };
        Zn(ua, ca, Pd, t)
    }

    function et(n) {}

    function rt(n) {
        return new qd(n)
    }

    function it(n) {
        return qd.resolve(n)
    }

    function ot(n) {}

    function ut(n) {}

    function ct(n) {
        return Pc(n) ? qd.all(n) : ot(new TypeError(Ud))
    }

    function at(n) {}

    function ft(n, t, e) {}

    function st(n) {}

    function lt(n) {
        var t = n[zd] || Hd,
            e = n[Zd] || st(Bd),
            r = n[Gd] || {},
            i = n[Jd] || null,
            o = n[Kd] || !1,
            u = n[Wd] || 3e3,
            a = !!c(n[Xd]) || !0 === n[Xd],
            f = {};
        return f[zd] = t, f[Zd] = e, f[Gd] = r, f[Jd] = i, f[Kd] = o, f[Wd] = u, f[Xd] = a, f
    }

    function dt(n, t, e, r) {
        return n.onload = function() {
            var i = 1223 === n.status ? 204 : n.status;
            if (i < 100 || i > 599) return r[ls] = Fd, Nn(Zl, r), void e(new Error(Fd));
            var o = n.responseText,
                u = n.getAllResponseHeaders(),
                c = {
                    status: i,
                    headers: u,
                    response: o
                };
            r[Ts] = c, Nn(Zl, r), t(c)
        }, n
    }

    function ht(n, t, e) {
        return n.onerror = function() {}, n
    }

    function pt(n, t, e, r) {
        return n.timeout = t, n.ontimeout = function() {}, n
    }

    function vt(n, t) {
        return !0 === t && (n.withCredentials = t), n
    }

    function mt(n, t) {
        return v(function(t, e) {}, t), n
    }

    function gt(n, t) {
        var e = {},
            r = lt(t),
            i = r[zd],
            o = r[Zd],
            u = r[Gd],
            c = r[Jd],
            a = r[Kd],
            f = r[Wd],
            s = r[Xd];
        return e[ks] = r, rt(function(t, r) {
            var l = new n.XMLHttpRequest;
            l = dt(l, t, r, e), l = ht(l, r, e), l.open(i, o, s), l = vt(l, a), l = mt(l, u), s && (l = pt(l, f, r, e)), l.send(c)
        })
    }

    function yt(n) {
        return gt(ua, n)
    }

    function bt(n) {}

    function xt(n) {}

    function wt(n, t, e, r) {}

    function Et(n) {}

    function Ct(n) {}

    function St(n, t) {}

    function Ot(n) {
        if (!o(n)) return {};
        var t = null;
        try {
            t = n()
        } catch (n) {
            return {}
        }
        return c(t) ? {} : Pc(t) ? Ct(t) : g(t) && Qc(t) ? Et(t) : i(t) ? St(t) : {}
    }

    function Tt() {
        var n = ua.devicePixelRatio;
        if (!c(n)) return n;
        n = 1;
        var t = ua.screen,
            e = t.systemXDPI,
            r = t.logicalXDPI;
        return !c(e) && !c(r) && e > r && (n = e / r), n
    }

    function kt() {
        var n = ua.screen,
            t = n.orientation,
            e = n.width,
            r = n.height;
        if (c(t)) return e > r ? "landscape" : "portrait";
        if (c(t.type)) return null;
        var i = L("-", t.type);
        if (O(i)) return null;
        var o = i[0];
        return c(o) ? null : o
    }

    function Nt() {
        return Yd
    }

    function At() {
        var n = ua.screen,
            t = ca.documentElement,
            e = {};
        e[pl] = t.clientHeight, e[vl] = t.clientWidth, e[ml] = -(new Date).getTimezoneOffset(), e[gl] = n.height, e[yl] = n.width, e[xl] = n.colorDepth, e[wl] = Tt();
        var r = kt();
        c(r) || (e[bl] = r);
        var i = Nt();
        return c(i) || (e[El] = i), e
    }

    function Dt() {
        return Qd
    }

    function jt() {
        var n = new Date;
        return n.getTime() - 6e4 * n.getTimezoneOffset()
    }

    function _t() {
        var n = G(),
            t = ua.location,
            e = {};
        return e[Sl] = qn(), n[cl] || (e[Ol] = Fn()), e[Tl] = Dt(), e[kl] = U(), e[Nl] = n[Gs], e[Al] = nh, e[Dl] = jt(), e[jl] = t.hostname, e[_l] = t.href, e[Rl] = ca.referrer, n[al] && (e[Il] = n[Hs]), nh += 1, e
    }

    function Rt(n) {
        return Dc({}, n, Ot(ua.targetPageParamsAll))
    }

    function It(n) {
        return Dc({}, n, Ot(ua.targetPageParams))
    }

    function Pt(n) {
        var t = G(),
            e = t[zs],
            r = t[ll],
            i = t[dl];
        return e !== n ? Rt(r || {}) : Dc(Rt(r || {}), It(i || {}))
    }

    function Mt(n, t) {}

    function Lt() {
        var n = G(),
            t = n[zs],
            e = {};
        e[Cl] = t;
        var r = _t(),
            i = At(),
            o = Pt(t);
        return Dc({}, e, r, i, o)
    }

    function qt(n, t, e) {
        if (k(t)) return null;
        if (c(n[th])) return null;
        if (!o(n[th][eh])) return null;
        var r = n[th][eh](t, {
            sdidParamExpiry: e
        });
        return i(r) && o(r[rh]) && r[rh]() ? r : null
    }

    function Ut(n) {}

    function Ft(n) {}

    function $t(n) {}

    function Bt(n, t) {}

    function Ht(n, t) {
        if (c(n)) return {};
        var e = Ft(n),
            r = $t(n),
            i = Bt(n, t);
        return Dc({}, i, r, e)
    }

    function Vt(n) {}

    function zt(n) {}

    function Zt(n, t, e) {}

    function Gt(n, t) {}

    function Jt(n, t, e) {}

    function Kt(n, t, e) {}

    function Wt(n, t, e) {}

    function Xt(n) {}

    function Yt(n, t, e, r) {
        return c(t) ? it({}) : ft(Wt(n, t, r), e, Nh)['catch'](Xt)
    }

    function Qt() {}

    function ne(n, t, e) {
        return c(n) ? it({}) : !0 === e[vh] ? ot(Qt()) : it(Dc({}, t, Vt(e)))
    }

    function te(n, t, e) {}

    function ee(n, t, e) {}

    function re(n, t, e) {}

    function ie(n, t, e) {}

    function oe(n, t, e) {}

    function ue() {
        var n = G(),
            t = n[$s],
            e = n[ol];
        return qt(ua, t, e)
    }

    function ce() {
        var n = ue(),
            t = G(),
            e = t[nl],
            r = t[rl];
        return Yt(ua, n, e, r)
    }

    function ae() {}

    function fe(n) {
        var t = ue(),
            e = Ht(t, n),
            r = function(n) {
                return ne(t, e, n)
            };
        return ce().then(r)
    }

    function se(n) {}

    function le(n, t) {
        var e = t.sessionId;
        return Qc(e) && n(e), t
    }

    function de(n, t) {
        var e = t.tntId;
        return Qc(e) && n(e), t
    }

    function he(n, t) {
        var e = t.tntId;
        return Qc(e) && n(e), t
    }

    function pe(n, t) {}

    function ve(n, t) {
        var e = t.trace;
        return i(e) && pe(n, e), t
    }

    function me(n) {
        var t = n[ls];
        if (Qc(t)) {
            var e = {};
            throw e[ws] = ls, e[ls] = t, e
        }
        return n
    }

    function ge(n) {}

    function ye(n) {}

    function be(n, t, e) {}

    function xe(n, t, e) {
        var r = e.disabled;
        if (i(r)) {
            var o = {};
            throw o[ws] = jh, o[ls] = ge(r), be(n, t, r), o
        }
        return e
    }

    function we(n) {}

    function Ee(n) {}

    function Ce(n) {}

    function Se(n) {}

    function Oe(n) {}

    function Te(n) {}

    function ke(n) {}

    function Ne(n) {}

    function Ae(n) {}

    function De(n) {}

    function je(n) {}

    function _e(n) {}

    function Re(n) {}

    function Ie(n) {}

    function Pe(n, t) {}

    function Me(n) {}

    function Le(n) {}

    function qe(n) {}

    function Ue(n, t) {}

    function Fe(n) {}

    function $e(n) {}

    function Be(n) {}

    function He(n) {}

    function Ve(n) {}

    function ze(n) {}

    function Ze(n) {}

    function Ge(n) {}

    function Je(n) {}

    function Ke(n) {}

    function We(n) {}

    function Xe(n) {}

    function Ye(n) {}

    function Qe(n) {}

    function nr(n, t) {}

    function tr(n) {}

    function er(n, t) {}

    function rr(n, t) {}

    function ir(n, t) {}

    function or(n, t) {}

    function ur(n) {}

    function cr(n) {}

    function ar(n) {}

    function fr(n) {}

    function sr(n, t) {}

    function lr(n, t, e, r) {}

    function dr(n, t, e) {}

    function hr(n) {}

    function pr(n, t) {}

    function vr(n, t, e, r) {}

    function mr(n) {}

    function gr(n, t, e, r, i) {}

    function yr(n) {}

    function br(n, t) {
        var e = {};
        return e[Cs] = n, e[Ss] = t, e
    }

    function xr(n, t, e, r, i) {
        var o = i[js];
        if (!Pc(o)) return it(br([], []));
        var u = gr(n, t, e, r, o),
            c = yr(o),
            a = function(n) {};
        return ct(u).then(a)
    }

    function wr(n, t) {}

    function Er(n, t, e, r, i) {}

    function Cr(n, t) {}

    function Sr(n) {}

    function Or(n) {
        var t = n[Kl];
        if (c(t)) return !1;
        var e = t[Xl];
        return !(!Pc(e) || O(e))
    }

    function Tr(n) {}

    function kr(n) {}

    function Nr(n, t, e, r, i, o) {}

    function Ar(n) {}

    function Dr(n) {}

    function jr(n) {
        return Or(n) ? ct(_(Ar, l(Tr, n[Kl][Xl]))).then(Dr) : it({})
    }

    function _r() {}

    function Rr() {
        return jr(ua)
    }

    function Ir() {}

    function Pr(n, t, e, r) {
        if (!r) return e;
        var i = n();
        return k(i) ? e : e.replace(t, "" + Vh + i)
    }

    function Mr(n) {
        return Zh.replace(zh, n)
    }

    function Lr(n, t) {
        var e = n[Fs],
            r = n[Bs],
            i = n[tl];
        return [n[fl], Gh, Pr(t, e, r, i), Mr(e)].join("")
    }

    function qr(n, t, e, r) {
        var i = Dc({}, r[Es], e),
            o = {};
        return o[Zd] = Lr(n, t), o[Jd] = Ed(i), o
    }

    function Ur(n) {
        return Dc({}, n[0], n[1])
    }

    function Fr(n, t) {
        var e = t[ms],
            r = function(e) {
                return qr(n, Bn, Ur(e), t)
            };
        return ct([fe(e), Rr()]).then(r)
    }

    function $r(n, t) {}

    function Br(n) {
        return n >= 200 && n < 300 || 304 === n
    }

    function Hr(n) {}

    function Vr(n, t, e, r, i, o) {
        return p([function(n) {
            return le(Ln, n)
        }, function(n) {
            return de(Un, n)
        }, function(n) {
            return he(Hn, n)
        }, function(n) {
            return ve(t, n)
        }, me, function(t) {
            return xe(n, sd, t)
        }, function(n) {
            return xr(t, e, r, i, n)
        }])(o)
    }

    function zr() {}

    function Zr(n, t) {
        var e = n[cl],
            r = n[hl],
            i = t[Zd],
            o = t[Jd],
            u = i + "?" + o,
            c = {};
        return c[Kd] = !0, c[zd] = Hd, c[Wd] = t[Wd], c[Zd] = u, e ? c : u.length > r ? (c[zd] = Vd, c[Zd] = i, c[Gd] = zr(), c[Jd] = o, c) : c
    }

    function Gr(n) {
        if (!Br(n[ws])) return Hr(ss);
        try {
            return JSON.parse(n[Ts])
        } catch (n) {
            return Hr(n.message || Jh)
        }
    }

    function Jr(n, t, e, r, i) {
        var o = function(n) {
                return Zr(e, n)
            },
            u = function(e) {},
            c = function(t) {
                return Vr(e, n, r, u, i, Gr(t))
            };
        return Fr(e, i).then(o).then(r).then(c)
    }

    function Kr(n) {
        var t = G();
        return Jr(ua, ca, t, yt, n)
    }

    function Wr(n) {}

    function Xr(n) {}

    function Yr(n, t) {}

    function Qr(n, t, e) {}

    function ni(n, t, e) {}

    function ti(n, t, e, r, i, o, c, a) {}

    function ei(n) {}

    function ri(n) {}

    function ii(n) {
        var t = n.match(np);
        if (O(t)) return n;
        var e = _(ri, t);
        return P(function(n, t) {}, n, e)
    }

    function oi(n) {}

    function ui(n) {
        if (D(n)) return Wh(n);
        if (!g(n)) return Wh(n);
        var t = ii(n);
        if (-1 === t.indexOf(Xh)) return Wh(t);
        var e = oi(t);
        return P(function(n, t) {}, Wh(ca), e)
    }

    function ci(n) {
        return ui(n).length > 0
    }

    function ai(n) {}

    function fi(n) {}

    function si(n) {}

    function li(n) {}

    function di(n) {}

    function hi(n, t) {}

    function pi(n, t) {}

    function vi(n) {}

    function mi(n, t, e) {}

    function gi(n) {}

    function yi(n) {}

    function bi(n) {}

    function xi(n, t) {}

    function wi(n, t) {}

    function Ei(n, t) {}

    function Ci(n, t, e) {}

    function Si(n) {}

    function Oi(n, t, e, r, i, o, u) {}

    function Ti() {}

    function ki(n, t) {}

    function Ni(n) {}

    function Ai(n) {}

    function Di(n, t) {}

    function ji(n) {}

    function _i(n) {
        return ui(n).empty().remove()
    }

    function Ri(n, t) {}

    function Ii(n, t) {}

    function Pi(n, t) {
        return ui(t).append(n)
    }

    function Mi(n, t) {}

    function Li(n, t) {}

    function qi(n) {}

    function Ui(n, t) {}

    function Fi(n, t) {}

    function $i(n, t, e) {}

    function Bi(n, t) {}

    function Hi(n, t, e) {}

    function Vi(n, t) {}

    function zi(n) {}

    function Zi(n, t) {}

    function Gi(n) {}

    function Ji(n) {}

    function Ki(n) {}

    function Wi(n) {}

    function Xi(n) {}

    function Yi(n) {}

    function Qi(n) {}

    function no(n) {}

    function to(n) {}

    function eo(n) {}

    function ro(n, t, e) {}

    function io(n) {}

    function oo(n) {}

    function uo(n, t) {}

    function co(n, t) {}

    function ao(n) {}

    function fo(n) {}

    function so(n, t) {}

    function lo(n) {}

    function ho(n, t) {}

    function po(n) {}

    function vo(n, t) {}

    function mo(n) {}

    function go(n, t) {}

    function yo(n) {}

    function bo(n, t) {}

    function xo(n) {}

    function wo(n, t) {}

    function Eo(n) {}

    function Co(n, t) {}

    function So(n, t) {}

    function Oo(n) {}

    function To(n, t) {
        return ui(t).addClass(n)
    }

    function ko(n, t) {
        return ui(t).removeClass(n)
    }

    function No(n, t) {}

    function Ao(n, t) {}

    function Do(n, t, e) {}

    function jo(n) {}

    function _o(n) {}

    function Ro(n) {}

    function Io(n, t) {}

    function Po(n, t) {}

    function Mo(n) {}

    function Lo(n) {}

    function qo(n, t) {}

    function Uo(n, t) {}

    function Fo() {}

    function $o() {
        return new lp
    }

    function Bo(n, t, e) {
        n.emit(t, e)
    }

    function Ho(n, t, e) {
        n.on(t, e)
    }

    function Vo(n, t, e) {
        n.once(t, e)
    }

    function zo(n, t) {
        n.off(t)
    }

    function Zo(n, t) {
        Bo(dp, n, t)
    }

    function Go(n, t) {
        Ho(dp, n, t)
    }

    function Jo(n, t) {
        Vo(dp, n, t)
    }

    function Ko(n) {
        zo(dp, n)
    }

    function Wo(n, t) {
        return "<" + bf + " " + pf + '="' + n + '" ' + vf + '="' + Ps + '">' + t + "</" + bf + ">"
    }

    function Xo(n, t) {}

    function Yo(n) {
        if (!0 === n[Ws] && !ci(vp)) {
            var t = n[Ks];
            Pi(Wo(pp, t), yf)
        }
    }

    function Qo(n) {
        !0 === n[Ws] && ci(vp) && _i(vp)
    }

    function nu(n, t) {}

    function tu(n) {
        var t = "\n." + Is + " {" + n[Js] + "}\n";
        Pi(Wo(mp, t), yf)
    }

    function eu() {
        Yo(G())
    }

    function ru() {
        Qo(G())
    }

    function iu(n) {}

    function ou(n) {}

    function uu() {
        tu(G())
    }

    function cu() {}

    function au() {}

    function fu() {}

    function su() {}

    function lu(n) {}

    function du() {}

    function hu() {}

    function pu() {}

    function vu() {}

    function mu() {}

    function gu(n) {}

    function yu(n) {}

    function bu(n) {}

    function xu(n) {}

    function wu(n, t, e) {}

    function Eu(n, t) {}

    function Cu(n, t) {}

    function Su(n, t) {}

    function Ou(n, t, e, r, i) {}

    function Tu(n, t, e) {}

    function ku(n) {}

    function Nu(n, t, e) {}

    function Au(n, t, e) {}

    function Du(n) {
        return Qc(n) ? n : D(n) ? n : yf
    }

    function ju(n) {
        To(Ms, ko(Is, n))
    }

    function _u(n, t) {}

    function Ru(n, t) {}

    function Iu(n, t) {}

    function Pu(n) {}

    function Mu(n, t) {}

    function Lu(n) {}

    function qu(n) {
        var t = n[ms],
            e = Du(n[Da]),
            r = Rn(n),
            i = r[ls];
        if (!r[ps]) return En(Tp, i), void ju(e);
        if (!mn()) return En(Ef), void ju(e);
        var o = n[gs],
            u = {};
        if (u[ms] = t, O(o)) return Cn(Tp, is), ju(e), Zo($l, t), void tt(u);
        var a = d(l(kp, o));
        if (!c(a)) return u[Oa] = a[Oa], Cn(Tp, os), et(u), void ku(a);
        var f = function(n, e) {},
            s = function() {};
        Ru(e, o), Yn(u), Nu(s, f, o).then(function() {})['catch'](function(n) {})
    }

    function Uu() {}

    function Fu(n) {}

    function $u(n, t, e) {}

    function Bu(n, t, e, r) {}

    function Hu(n) {}

    function Vu(n) {}

    function zu(n, t) {}

    function Zu(n, t, e) {}

    function Gu(n, t, e) {}

    function Ju(n, t) {}

    function Ku(n) {}

    function Wu(n, t) {}

    function Xu(n) {}

    function Yu(n, t, e) {}

    function Qu(n, t) {}

    function nc(n, t, e) {}

    function tc(n, t) {}

    function ec(n, t, e) {}

    function rc(n, t) {}

    function ic(n) {}

    function oc(n, t) {}

    function uc(n) {}

    function cc(n) {}

    function ac(n, t) {}

    function fc(n, t, e) {
        if (yn()) {
            cc(n);
            var r = e[ul],
                i = function() {},
                o = function() {};
            Cn(Mp), cp(r).then(i)['catch'](o)
        }
    }

    function sc(n) {}

    function lc(n, t, e) {
        var r = e[Cs],
            i = {};
        i[ms] = n, i[Ss] = e[Ss];
        var o = {};
        o[ms] = n, o[Da] = t, o[gs] = r, Cn(ts, n), Wn(i, r), qu(o)
    }

    function dc(n, t) {}

    function hc() {
        var n = G(),
            t = n[zs],
            e = {};
        e[ms] = t, e[Es] = Lt(), e[Vs] = n[Vs];
        var r = function(n) {
                return lc(t, yf, n)
            },
            i = function(n) {};
        Cn(ts, t);
        var o = {};
        o[ms] = t, Kn(o), Kr(e).then(r)['catch'](i)
    }

    function pc() {
        Jo(Hl, eu)
    }

    function vc(n, t) {
        Go(n, function(e) {
            e === t && (ru(), Ko(n))
        })
    }

    function mc(n) {
        if (!n[Zs]) return void Cn(Up, Fp);
        var t = n[zs],
            e = jn(t),
            r = e[ls];
        if (!e[ps]) return void En(Up, r);
        pc(), vc(Vl, t), vc($l, t), vc(Bl, t), hc()
    }

    function gc(n) {}

    function yc(n, t, e) {
        if (n.adobe && n.adobe.target && void 0 !== n.adobe.target.getOffer) return void En(Cf);
        Z(e);
        var r = G(),
            i = r[Gs];
        if (n.adobe.target.VERSION = i, n.adobe.target.event = {
                LIBRARY_LOADED: Nd,
                REQUEST_START: Ad,
                REQUEST_SUCCEEDED: Dd,
                REQUEST_FAILED: jd,
                CONTENT_RENDERING_START: _d,
                CONTENT_RENDERING_SUCCEEDED: Rd,
                CONTENT_RENDERING_FAILED: Id,
                CONTENT_RENDERING_NO_OFFERS: Pd,
                CONTENT_RENDERING_REDIRECT: Md
            }, !r[Us]) return gc(n), void En(Ef);
        fc(n, t, r), mn() && (uu(), kn(), mc(r)), n.adobe.target.getOffer = ei, n.adobe.target.trackEvent = ji, n.adobe.target.applyOffer = qu, n.adobe.target.registerExtension = Hu, n.mboxCreate = ic, n.mboxDefine = oc, n.mboxUpdate = uc, Zo(Hl), Jn()
    }
    var bc, xc = window,
        wc = document,
        Ec = !wc.documentMode || wc.documentMode >= 10,
        Cc = wc.compatMode && "CSS1Compat" === wc.compatMode,
        Sc = Cc && Ec,
        Oc = xc.targetGlobalSettings;
    if (!Sc || Oc && !1 === Oc.enabled) return xc.adobe = xc.adobe || {}, xc.adobe.target = {
        VERSION: "",
        event: {},
        getOffer: n,
        applyOffer: n,
        trackEvent: n,
        registerExtension: n,
        init: n
    }, xc.mboxCreate = n, xc.mboxDefine = n, xc.mboxUpdate = n, "console" in xc && "warn" in xc.console && xc.console.warn("AT: Adobe Target content delivery is disabled. Update your DOCTYPE to support Standards mode."), xc.adobe.target;
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var Tc = Object.getOwnPropertySymbols,
        kc = Object.prototype.hasOwnProperty,
        Nc = Object.prototype.propertyIsEnumerable,
        Ac = function() {
            try {
                if (!Object.assign) return !1;
                var n = new String("abc");
                if (n[5] = "de", "5" === Object.getOwnPropertyNames(n)[0]) return !1;
                for (var t = {}, e = 0; e < 10; e++) t["_" + String.fromCharCode(e)] = e;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(n) {
                        return t[n]
                    }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(n) {
                    r[n] = n
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (n) {
                return !1
            }
        }() ? Object.assign : function(n, e) {},
        Dc = Ac,
        jc = Object.prototype,
        _c = jc.toString,
        Rc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {},
        Ic = "[object Function]",
        Pc = Array.isArray,
        Mc = function(n, t) {
            return t.forEach(n)
        },
        Lc = function(n, t) {
            Mc(function(e) {}, s(t))
        },
        qc = function(n, t) {
            return t.filter(n)
        },
        Uc = function(n, t) {},
        Fc = "[object String]",
        $c = 9007199254740991,
        Bc = function(n, t) {
            return t.map(n)
        },
        Hc = Object.prototype,
        Vc = Hc.hasOwnProperty,
        zc = String.prototype,
        Zc = zc.trim,
        Gc = "[object Object]",
        Jc = Function.prototype,
        Kc = Object.prototype,
        Wc = Jc.toString,
        Xc = Kc.hasOwnProperty,
        Yc = Wc.call(Object),
        Qc = function(n) {
            return !k(n)
        },
        na = "[object Number]",
        ta = function(n, t) {},
        ea = function(n, t, e) {
            return e.reduce(n, t)
        },
        ra = function(n, t, e) {},
        ia = Array.prototype,
        oa = ia.reverse,
        ua = window,
        ca = document,
        aa = "action",
        fa = "attribute",
        sa = "value",
        la = "clickTrackId",
        da = "content",
        ha = "contentType",
        pa = "finalHeight",
        va = "finalWidth",
        ma = "height",
        ga = "width",
        ya = "finalLeftPosition",
        ba = "finalTopPosition",
        xa = "left",
        wa = "top",
        Ea = "position",
        Ca = "from",
        Sa = "to",
        Oa = "url",
        Ta = "includeAllUrlParameters",
        ka = "passMboxSession",
        Na = "property",
        Aa = "priority",
        Da = "selector",
        ja = "cssSelector",
        _a = "style",
        Ra = "setContent",
        Ia = "setText",
        Pa = "setJson",
        Ma = "setAttribute",
        La = "setStyle",
        qa = "rearrange",
        Ua = "resize",
        Fa = "move",
        $a = "remove",
        Ba = "customCode",
        Ha = "appendContent",
        Va = "redirect",
        za = "trackClick",
        Za = "signalClick",
        Ga = "insertBefore",
        Ja = "insertAfter",
        Ka = "prependContent",
        Wa = "replaceContent",
        Xa = "mboxDebug",
        Ya = "mboxDisable",
        Qa = "mboxEdit",
        nf = "check",
        tf = "true",
        ef = 250,
        rf = /^[a-zA-Z]+$/,
        of = "data-at-src",
        uf = "data-at-mbox-name",
        cf = "-clicked",
        af = "mbox-name-",
        ff = "json",
        sf = "html",
        lf = "script",
        df = "text",
        hf = "src",
        pf = "id",
        vf = "class",
        mf = "type",
        gf = "click",
        yf = "head",
        bf = "style",
        xf = "img",
        wf = "div",
        Ef = 'Adobe Target content delivery is disabled. Ensure that you can save cookies to your current domain, there is no "mboxDisable" cookie and there is no "mboxDisable" parameter in query string.',
        Cf = "Adobe Target has already been initialized.",
        Sf = "options argument is required",
        Of = "mbox option is required",
        Tf = "mbox option is too long",
        kf = "success option is required",
        Nf = "error option is required",
        Af = "offer option is required",
        Df = "name option is required",
        jf = "name is invalid",
        _f = "modules option is required",
        Rf = "register option is required",
        If = "modules do not exists",
        Pf = "Actions with missing selectors",
        Mf = "Unexpected error",
        Lf = "actions to be rendered",
        qf = "request failed",
        Uf = "All actions rendered successfully",
        Ff = "Action rendered successfully",
        $f = "Rendering action",
        Bf = "Action has no content",
        Hf = "Action has no attribute or value",
        Vf = "Action has no property or value",
        zf = "Action has no height or width",
        Zf = "Action has no left, top or position",
        Gf = "Action has no from or to",
        Jf = "Action has no url",
        Kf = "Action has no click track ID",
        Wf = "Rearrange elements are missing",
        Xf = "Loading image",
        Yf = "Track event request succeeded",
        Qf = "Track event request failed",
        ns = "Mbox container not found",
        ts = "Rendering mbox",
        es = "Rendering mbox failed",
        rs = "ID is missing",
        is = "No actions to be rendered",
        os = "Redirect action",
        us = "default to HEAD",
        cs = "document.currentScript is missing or not supported",
        as = "executing from HTML HEAD",
        fs = "Script load",
        ss = "unknown error",
        ls = "error",
        ds = "warning",
        hs = "unknown",
        ps = "valid",
        vs = "success",
        ms = "mbox",
        gs = "offer",
        ys = "name",
        bs = "modules",
        xs = "register",
        ws = "status",
        Es = "params",
        Cs = "actions",
        Ss = "responseTokens",
        Os = "message",
        Ts = "response",
        ks = "request",
        Ns = "dynamic",
        As = "plugins",
        Ds = "clickToken",
        js = "offers",
        _s = "selectors",
        Rs = "provider",
        Is = "mboxDefault",
        Ps = "at-flicker-control",
        Ms = "at-element-marker",
        Ls = "at-element-click-tracking",
        qs = ms,
        Us = "enabled",
        Fs = "clientCode",
        $s = "imsOrgId",
        Bs = "serverDomain",
        Hs = "crossDomain",
        Vs = "timeout",
        zs = "globalMboxName",
        Zs = "globalMboxAutoCreate",
        Gs = "version",
        Js = "defaultContentHiddenStyle",
        Ks = "bodyHiddenStyle",
        Ws = "bodyHidingEnabled",
        Xs = "deviceIdLifetime",
        Ys = "sessionIdLifetime",
        Qs = "selectorsPollingTimeout",
        nl = "visitorApiTimeout",
        tl = "overrideMboxEdgeServer",
        el = "overrideMboxEdgeServerTimeout",
        rl = "optoutEnabled",
        il = "secureOnly",
        ol = "supplementalDataIdParamTimeout",
        ul = "authoringScriptUrl",
        cl = "crossDomainOnly",
        al = "crossDomainEnabled",
        fl = "scheme",
        sl = "cookieDomain",
        ll = "mboxParams",
        dl = "globalMboxParams",
        hl = "urlSizeLimit",
        pl = "browserHeight",
        vl = "browserWidth",
        ml = "browserTimeOffset",
        gl = "screenHeight",
        yl = "screenWidth",
        bl = "screenOrientation",
        xl = "colorDepth",
        wl = "devicePixelRatio",
        El = "webGLRenderer",
        Cl = ms,
        Sl = "mboxSession",
        Ol = "mboxPC",
        Tl = "mboxPage",
        kl = "mboxRid",
        Nl = "mboxVersion",
        Al = "mboxCount",
        Dl = "mboxTime",
        jl = "mboxHost",
        _l = "mboxURL",
        Rl = "mboxReferrer",
        Il = "mboxXDomain",
        Pl = "PC",
        Ml = "mboxEdgeCluster",
        Ll = "session",
        ql = "at-tick",
        Ul = "at-render-complete",
        Fl = "at-timeout",
        $l = "at-no-offers",
        Bl = "at-selectors-hidden",
        Hl = "at-library-loaded",
        Vl = "at-global-mbox-failed",
        zl = "settings",
        Zl = "clientTraces",
        Gl = "serverTraces",
        Jl = "___target_traces",
        Kl = "targetGlobalSettings",
        Wl = "dataProvider",
        Xl = Wl + "s",
        Yl = "timestamp",
        Ql = "Content-Type",
        nd = "application/x-www-form-urlencoded",
        td = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,
        ed = /^(com|edu|gov|net|mil|org|nom|co|name|info|biz)$/i,
        rd = {},
        id = [Us, Fs, $s, Bs, sl, Hs, Vs, Zs, ll, dl, Js, "defaultContentVisibleStyle", Ks, Ws, Qs, nl, tl, el, rl, il, ol, ul, hl],
        od = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        ud = J(function(n, t) {
            ! function(e) {
                var r = !1;
                if ("function" == typeof bc && bc.amd && (bc(e), r = !0), "object" === (void 0 === t ? "undefined" : Rc(t)) && (n.exports = e(), r = !0), !r) {
                    var i = window.Cookies,
                        o = window.Cookies = e();
                    o.noConflict = function() {}
                }
            }(function() {
                function n() {
                    for (var n = 0, t = {}; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var r in e) t[r] = e[r]
                    }
                    return t
                }

                function t(e) {
                    function r(t, i, o) {
                        var u;
                        if ("undefined" != typeof document) {
                            if (arguments.length > 1) {
                                if (o = n({
                                        path: "/"
                                    }, r.defaults, o), "number" == typeof o.expires) {
                                    var c = new Date;
                                    c.setMilliseconds(c.getMilliseconds() + 864e5 * o.expires), o.expires = c
                                }
                                o.expires = o.expires ? o.expires.toUTCString() : "";
                                try {
                                    u = JSON.stringify(i), /^[\{\[]/.test(u) && (i = u)
                                } catch (n) {}
                                i = e.write ? e.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
                                var a = "";
                                for (var f in o) o[f] && (a += "; " + f, !0 !== o[f] && (a += "=" + o[f]));
                                return document.cookie = t + "=" + i + a
                            }
                            t || (u = {});
                            for (var s = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, d = 0; d < s.length; d++) {
                                var h = s[d].split("="),
                                    p = h.slice(1).join("=");
                                '"' === p.charAt(0) && (p = p.slice(1, -1));
                                try {
                                    var v = h[0].replace(l, decodeURIComponent);
                                    if (p = e.read ? e.read(p, v) : e(p, v) || p.replace(l, decodeURIComponent), this.json) try {
                                        p = JSON.parse(p)
                                    } catch (n) {}
                                    if (t === v) {
                                        u = p;
                                        break
                                    }
                                    t || (u[v] = p)
                                } catch (n) {}
                            }
                            return u
                        }
                    }
                    return r.set = r, r.get = function(n) {
                        return r.call(r, n)
                    }, r.getJSON = function() {}, r.defaults = {}, r.remove = function(t, e) {
                        r(t, "", n(e, {
                            expires: -1
                        }))
                    }, r.withConverter = t, r
                }
                return t(function() {})
            })
        }),
        cd = ud,
        ad = {
            get: cd.get,
            set: cd.set,
            remove: cd.remove
        },
        fd = ad.get,
        sd = ad.set,
        ld = ad.remove,
        dd = function(n, t) {
            t = t || {};
            for (var e = {
                    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                    q: {
                        name: "queryKey",
                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                    },
                    parser: {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }
                }, r = e.parser[t.strictMode ? "strict" : "loose"].exec(n), i = {}, o = 14; o--;) i[e.key[o]] = r[o] || "";
            return i[e.q.name] = {}, i[e.key[12]].replace(e.q.parser, function(n, t, r) {
                t && (i[e.q.name][t] = r)
            }), i
        },
        hd = ca.createElement("a"),
        pd = {},
        vd = function(n, t, e, r) {
            t = t || "&", e = e || "=";
            var i = {};
            if ("string" != typeof n || 0 === n.length) return i;
            var o = /\+/g;
            n = n.split(t);
            var u = 1e3;
            r && "number" == typeof r.maxKeys && (u = r.maxKeys);
            var c = n.length;
            u > 0 && c > u && (c = u);
            for (var a = 0; a < c; ++a) {
                var f, s, l, d, h = n[a].replace(o, "%20"),
                    p = h.indexOf(e);
                p >= 0 ? (f = h.substr(0, p), s = h.substr(p + 1)) : (f = h, s = ""), l = decodeURIComponent(f), d = decodeURIComponent(s), Y(i, l) ? Array.isArray(i[l]) ? i[l].push(d) : i[l] = [i[l], d] : i[l] = d
            }
            return i
        },
        md = function(n) {
            switch (void 0 === n ? "undefined" : Rc(n)) {
                case "string":
                    return n;
                case "boolean":
                    return n ? "true" : "false";
                case "number":
                    return isFinite(n) ? n : "";
                default:
                    return ""
            }
        },
        gd = function(n, t, e, r) {
            return t = t || "&", e = e || "=", null === n && (n = void 0), "object" === (void 0 === n ? "undefined" : Rc(n)) ? Object.keys(n).map(function(r) {
                var i = encodeURIComponent(md(r)) + e;
                return Array.isArray(n[r]) ? n[r].map(function(n) {}).join(t) : i + encodeURIComponent(md(n[r]))
            }).join(t) : r ? encodeURIComponent(md(r)) + e + encodeURIComponent(md(n)) : ""
        },
        yd = J(function(n, t) {
            t.decode = t.parse = vd, t.encode = t.stringify = gd
        }),
        bd = (yd.encode, yd.stringify, yd.decode, yd.parse, yd),
        xd = {
            parse: function(n) {
                return "string" == typeof n && (n = n.trim().replace(/^[?#&]/, "")), bd.parse(n)
            },
            stringify: function(n) {
                return bd.stringify(n)
            }
        },
        wd = xd.parse,
        Ed = xd.stringify,
        Cd = "AT:",
        Sd = "1",
        Od = [Us, Fs, $s, Bs, sl, Hs, Vs, Zs, ll, dl, Js, "defaultContentVisibleStyle", Ks, Ws, Qs, nl, tl, el, rl, il, ol, ul],
        Td = U(),
        kd = /.*\.(\d+)_\d+/;
    ! function(n, t) {
        function e(n, e) {}
        o(n.CustomEvent) || (e.prototype = n.Event.prototype, n.CustomEvent = e)
    }(ua, ca);
    var Nd = "at-library-loaded",
        Ad = "at-request-start",
        Dd = "at-request-succeeded",
        jd = "at-request-failed",
        _d = "at-content-rendering-start",
        Rd = "at-content-rendering-succeeded",
        Id = "at-content-rendering-failed",
        Pd = "at-content-rendering-no-offers",
        Md = "at-content-rendering-redirect",
        Ld = J(function(n) {
            ! function(t) {
                function e() {}

                function r(n, t) {}

                function i(n) {}

                function o(n, t) {}

                function u(n, t) {}

                function c(n, t) {}

                function a(n) {}

                function f(n, t, e) {}

                function s(n, t) {}
                var l = setTimeout;
                i.prototype['catch'] = function(n) {}, i.prototype.then = function(n, t) {}, i.all = function(n) {}, i.resolve = function(n) {}, i.reject = function(n) {}, i.race = function(n) {}, i._immediateFn = "function" == typeof setImmediate && function(n) {} || function(n) {}, i._unhandledRejectionFn = function(n) {}, i._setImmediateFn = function(n) {}, i._setUnhandledRejectionFn = function(n) {}, void 0 !== n && n.exports ? n.exports = i : t.Promise || (t.Promise = i)
            }(od)
        }),
        qd = window.Promise || Ld,
        Ud = "Expected an array of promises",
        Fd = "Network request failed",
        $d = "Request timed out",
        Bd = "URL is required",
        Hd = "GET",
        Vd = "POST",
        zd = "method",
        Zd = "url",
        Gd = "headers",
        Jd = "data",
        Kd = "credentials",
        Wd = "timeout",
        Xd = "async",
        Yd = function() {
            var n = ca.createElement("canvas"),
                t = n.getContext("webgl") || n.getContext("experimental-webgl");
            if (c(t)) return null;
            var e = t.getExtension("WEBGL_debug_renderer_info");
            if (c(e)) return null;
            var r = t.getParameter(e.UNMASKED_RENDERER_WEBGL);
            return c(r) ? null : r
        }(),
        Qd = U(),
        nh = 1,
        th = "Visitor",
        eh = "getInstance",
        rh = "isAllowed",
        ih = "Disabled due to optout",
        oh = "getMarketingCloudVisitorID",
        uh = "getAudienceManagerBlob",
        ch = "getAnalyticsVisitorID",
        ah = "getAudienceManagerLocationHint",
        fh = "isOptedOut",
        sh = "OptOut",
        lh = "MCAAMB",
        dh = "MCAAMLH",
        hh = "MCAID",
        ph = "MCMID",
        vh = "MCOPTOUT",
        mh = "mboxMCAVID",
        gh = "mboxAAMB",
        yh = "mboxMCGLH",
        bh = "mboxMCGVID",
        xh = "mboxMCSDID",
        wh = "getSupplementalDataID",
        Eh = "getCustomerIDs",
        Ch = "trackingServer",
        Sh = Ch + "Secure",
        Oh = "vst.",
        Th = Oh + "trk",
        kh = Oh + "trks",
        Nh = "Visitor API requests timed out",
        Ah = "Visitor API requests error",
        Dh = "mboxDisable",
        jh = "disabled",
        _h = 864e5,
        Rh = "3rd party cookies disabled",
        Ih = /CLKTRK#(\S+)/,
        Ph = /CLKTRK#(\S+)\s/,
        Mh = "mboxSession",
        Lh = "adobe_mc_ref",
        qh = "appendSupplementalDataIDTo",
        Uh = "true",
        Fh = {},
        $h = "Data provider",
        Bh = "timed out",
        Hh = 2e3,
        Vh = "mboxedge",
        zh = "<clientCode>",
        Zh = "/m2/" + zh + "/mbox/json",
        Gh = "//",
        Jh = "JSON parser error",
        Kh = "[getOffer()]",
        Wh = function(n) {
            var t = function() {
                function t(n) {
                    return null == n ? String(n) : K[W.call(n)] || "object"
                }

                function e(n) {
                    return "function" == t(n)
                }

                function r(n) {
                    return null != n && n == n.window
                }

                function i(n) {}

                function o(n) {
                    return "object" == t(n)
                }

                function u(n) {
                    return o(n) && !r(n) && Object.getPrototypeOf(n) == Object.prototype
                }

                function c(n) {
                    var t = !!n && "length" in n && n.length,
                        e = O.type(n);
                    return "function" != e && !r(n) && ("array" == e || 0 === t || "number" == typeof t && t > 0 && t - 1 in n)
                }

                function a(n) {}

                function f(n) {
                    return n.length > 0 ? O.fn.concat.apply([], n) : n
                }

                function s(n) {}

                function l(n) {
                    return n in P ? P[n] : P[n] = new RegExp("(^|\\s)" + n + "(\\s|$)")
                }

                function d(n, t) {}

                function h(n) {}

                function p(n) {}

                function v(n, t) {
                    var e, r = n ? n.length : 0;
                    for (e = 0; e < r; e++) this[e] = n[e];
                    this.length = r, this.selector = t || ""
                }

                function m(n, t, e) {}

                function g(n, t) {}

                function y(n, t, r, i) {
                    return e(t) ? t.call(n, r, i) : t
                }

                function b(n, t, e) {}

                function x(n, t) {
                    var e = n.className || "",
                        r = e && e.baseVal !== C;
                    if (t === C) return r ? e.baseVal : e;
                    r ? e.baseVal = t : n.className = t
                }

                function w(n) {}

                function E(n, t) {
                    t(n);
                    for (var e = 0, r = n.childNodes.length; e < r; e++) E(n.childNodes[e], t)
                }
                var C, S, O, T, k, N, A = [],
                    D = A.concat,
                    j = A.filter,
                    _ = A.slice,
                    R = n.document,
                    I = {},
                    P = {},
                    M = {
                        "column-count": 1,
                        columns: 1,
                        "font-weight": 1,
                        "line-height": 1,
                        opacity: 1,
                        "z-index": 1,
                        zoom: 1
                    },
                    L = /^\s*<(\w+|!)[^>]*>/,
                    q = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                    U = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                    F = /^(?:body|html)$/i,
                    $ = /([A-Z])/g,
                    B = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                    H = ["after", "prepend", "before", "append"],
                    V = R.createElement("table"),
                    z = R.createElement("tr"),
                    Z = {
                        tr: R.createElement("tbody"),
                        tbody: V,
                        thead: V,
                        tfoot: V,
                        td: z,
                        th: z,
                        "*": R.createElement("div")
                    },
                    G = /complete|loaded|interactive/,
                    J = /^[\w-]*$/,
                    K = {},
                    W = K.toString,
                    X = {},
                    Y = R.createElement("div"),
                    Q = {
                        tabindex: "tabIndex",
                        readonly: "readOnly",
                        'for': "htmlFor",
                        'class': "className",
                        maxlength: "maxLength",
                        cellspacing: "cellSpacing",
                        cellpadding: "cellPadding",
                        rowspan: "rowSpan",
                        colspan: "colSpan",
                        usemap: "useMap",
                        frameborder: "frameBorder",
                        contenteditable: "contentEditable"
                    },
                    nn = Array.isArray || function(n) {};
                return X.matches = function(n, t) {}, k = function(n) {}, N = function(n) {}, X.fragment = function(n, t, e) {
                    var r, i, o;
                    return q.test(n) && (r = O(R.createElement(RegExp.$1))), r || (n.replace && (n = n.replace(U, "<$1></$2>")), t === C && (t = L.test(n) && RegExp.$1), t in Z || (t = "*"), o = Z[t], o.innerHTML = "" + n, r = O.each(_.call(o.childNodes), function() {
                        o.removeChild(this)
                    })), u(e) && (i = O(r), O.each(e, function(n, t) {})), r
                }, X.Z = function(n, t) {
                    return new v(n, t)
                }, X.isZ = function(n) {
                    return n instanceof X.Z
                }, X.init = function(n, t) {
                    var r;
                    if (!n) return X.Z();
                    if ("string" == typeof n)
                        if (n = n.trim(), "<" == n[0] && L.test(n)) r = X.fragment(n, RegExp.$1, t), n = null;
                        else {
                            if (t !== C) return O(t).find(n);
                            r = X.qsa(R, n)
                        }
                    else {
                        if (e(n)) return O(R).ready(n);
                        if (X.isZ(n)) return n;
                        if (nn(n)) r = a(n);
                        else if (o(n)) r = [n], n = null;
                        else if (L.test(n)) r = X.fragment(n.trim(), RegExp.$1, t), n = null;
                        else {
                            if (t !== C) return O(t).find(n);
                            r = X.qsa(R, n)
                        }
                    }
                    return X.Z(r, n)
                }, O = function(n, t) {
                    return X.init(n, t)
                }, O.extend = function(n) {}, X.qsa = function(n, t) {
                    var e, r = "#" == t[0],
                        i = !r && "." == t[0],
                        o = r || i ? t.slice(1) : t,
                        u = J.test(o);
                    return n.getElementById && u && r ? (e = n.getElementById(o)) ? [e] : [] : 1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType ? [] : _.call(u && !r && n.getElementsByClassName ? i ? n.getElementsByClassName(o) : n.getElementsByTagName(t) : n.querySelectorAll(t))
                }, O.contains = R.documentElement.contains ? function(n, t) {
                    return n !== t && n.contains(t)
                } : function(n, t) {}, O.type = t, O.isFunction = e, O.isWindow = r, O.isArray = nn, O.isPlainObject = u, O.isEmptyObject = function(n) {}, O.isNumeric = function(n) {}, O.inArray = function(n, t, e) {}, O.camelCase = k, O.trim = function(n) {}, O.uuid = 0, O.support = {}, O.expr = {}, O.noop = function() {}, O.map = function(n, t) {
                    var e, r, i, o = [];
                    if (c(n))
                        for (r = 0; r < n.length; r++) null != (e = t(n[r], r)) && o.push(e);
                    else
                        for (i in n) null != (e = t(n[i], i)) && o.push(e);
                    return f(o)
                }, O.each = function(n, t) {
                    var e, r;
                    if (c(n)) {
                        for (e = 0; e < n.length; e++)
                            if (!1 === t.call(n[e], e, n[e])) return n
                    } else
                        for (r in n)
                            if (!1 === t.call(n[r], r, n[r])) return n;
                    return n
                }, O.grep = function(n, t) {}, n.JSON && (O.parseJSON = JSON.parse), O.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
                    K["[object " + t + "]"] = t.toLowerCase()
                }), O.fn = {
                    constructor: X.Z,
                    length: 0,
                    forEach: A.forEach,
                    reduce: A.reduce,
                    push: A.push,
                    sort: A.sort,
                    splice: A.splice,
                    indexOf: A.indexOf,
                    concat: function() {
                        var n, t, e = [];
                        for (n = 0; n < arguments.length; n++) t = arguments[n], e[n] = X.isZ(t) ? t.toArray() : t;
                        return D.apply(X.isZ(this) ? this.toArray() : this, e)
                    },
                    map: function(n) {},
                    slice: function() {},
                    ready: function(n) {},
                    get: function(n) {},
                    toArray: function() {},
                    size: function() {},
                    remove: function() {
                        return this.each(function() {
                            null != this.parentNode && this.parentNode.removeChild(this)
                        })
                    },
                    each: function(n) {
                        for (var t, e = this.length, r = 0; r < e && (t = this[r], !1 !== n.call(t, r, t));) r++;
                        return this
                    },
                    filter: function(n) {},
                    add: function(n, t) {},
                    is: function(n) {},
                    not: function(n) {},
                    has: function(n) {},
                    eq: function(n) {},
                    first: function() {},
                    last: function() {},
                    find: function(n) {},
                    closest: function(n, t) {},
                    parents: function(n) {},
                    parent: function(n) {},
                    children: function(n) {},
                    contents: function() {},
                    siblings: function(n) {},
                    empty: function() {
                        return this.each(function() {
                            this.innerHTML = ""
                        })
                    },
                    pluck: function(n) {},
                    show: function() {},
                    replaceWith: function(n) {},
                    wrap: function(n) {},
                    wrapAll: function(n) {},
                    wrapInner: function(n) {},
                    unwrap: function() {},
                    clone: function() {},
                    hide: function() {},
                    toggle: function(n) {},
                    prev: function(n) {},
                    next: function(n) {},
                    html: function(n) {},
                    text: function(n) {},
                    attr: function(n, t) {},
                    removeAttr: function(n) {},
                    prop: function(n, t) {},
                    removeProp: function(n) {},
                    data: function(n, t) {},
                    val: function(n) {},
                    offset: function(t) {},
                    css: function(n, e) {},
                    index: function(n) {},
                    hasClass: function(n) {
                        return !!n && A.some.call(this, function(n) {
                            return this.test(x(n))
                        }, l(n))
                    },
                    addClass: function(n) {
                        return n ? this.each(function(t) {
                            if ("className" in this) {
                                T = [];
                                var e = x(this);
                                y(this, n, t, e).split(/\s+/g).forEach(function(n) {
                                    O(this).hasClass(n) || T.push(n)
                                }, this), T.length && x(this, e + (e ? " " : "") + T.join(" "))
                            }
                        }) : this
                    },
                    removeClass: function(n) {
                        return this.each(function(t) {
                            if ("className" in this) {
                                if (n === C) return x(this, "");
                                T = x(this), y(this, n, t, T).split(/\s+/g).forEach(function(n) {
                                    T = T.replace(l(n), " ")
                                }), x(this, T.trim())
                            }
                        })
                    },
                    toggleClass: function(n, t) {},
                    scrollTop: function(n) {},
                    scrollLeft: function(n) {},
                    position: function() {},
                    offsetParent: function() {}
                }, O.fn.detach = O.fn.remove, ["width", "height"].forEach(function(n) {
                    var t = n.replace(/./, function(n) {
                        return n[0].toUpperCase()
                    });
                    O.fn[n] = function(e) {}
                }), H.forEach(function(e, r) {
                    var i = r % 2;
                    O.fn[e] = function() {
                        var e, o, u = O.map(arguments, function(n) {
                                var r = [];
                                return e = t(n), "array" == e ? (n.forEach(function(n) {}), r) : "object" == e || null == n ? n : X.fragment(n)
                            }),
                            c = this.length > 1;
                        return u.length < 1 ? this : this.each(function(t, e) {
                            o = i ? e : e.parentNode, e = 0 == r ? e.nextSibling : 1 == r ? e.firstChild : 2 == r ? e : null;
                            var a = O.contains(R.documentElement, o),
                                f = /^(text|application)\/(javascript|ecmascript)$/;
                            u.forEach(function(t) {
                                if (c) t = t.cloneNode(!0);
                                else if (!o) return O(t).remove();
                                o.insertBefore(t, e), a && E(t, function(t) {
                                    if (null != t.nodeName && "SCRIPT" === t.nodeName.toUpperCase() && (!t.type || f.test(t.type.toLowerCase())) && !t.src) {
                                        var e = t.ownerDocument ? t.ownerDocument.defaultView : n;
                                        e.eval.call(e, t.innerHTML)
                                    }
                                })
                            })
                        })
                    }, O.fn[i ? e + "To" : "insert" + (r ? "Before" : "After")] = function(n) {}
                }), X.Z.prototype = v.prototype = O.fn, X.uniq = N, X.deserializeValue = w, O.zepto = X, O
            }();
            return function(t) {
                    function e(n) {}

                    function r(n, t, r, u) {}

                    function i(n) {}

                    function o(n) {}

                    function u(n, t) {}

                    function c(n) {}

                    function a(n, r, o, a, f, l, h) {}

                    function f(n, t, i, o, a) {}

                    function s(n, e) {}

                    function l(n) {}
                    var d, h = 1,
                        p = Array.prototype.slice,
                        v = t.isFunction,
                        m = function(n) {},
                        g = {},
                        y = {},
                        b = "onfocusin" in n,
                        x = {
                            focus: "focusin",
                            blur: "focusout"
                        },
                        w = {
                            mouseenter: "mouseover",
                            mouseleave: "mouseout"
                        };
                    y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", t.event = {
                        add: a,
                        remove: f
                    }, t.proxy = function(n, r) {}, t.fn.bind = function(n, t, e) {}, t.fn.unbind = function(n, t) {}, t.fn.one = function(n, t, e, r) {};
                    var E = function() {},
                        C = function() {},
                        S = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                        O = {
                            preventDefault: "isDefaultPrevented",
                            stopImmediatePropagation: "isImmediatePropagationStopped",
                            stopPropagation: "isPropagationStopped"
                        };
                    t.fn.delegate = function(n, t, e) {}, t.fn.undelegate = function(n, t, e) {}, t.fn.live = function(n, e) {}, t.fn.die = function(n, e) {}, t.fn.on = function(n, e, r, i, o) {}, t.fn.off = function(n, e, r) {}, t.fn.trigger = function(n, e) {}, t.fn.triggerHandler = function(n, e) {}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n) {
                        t.fn[n] = function(t) {}
                    }), t.Event = function(n, t) {}
                }(t),
                function() {
                    try {
                        getComputedStyle(void 0)
                    } catch (e) {
                        var t = getComputedStyle;
                        n.getComputedStyle = function(n, e) {
                            try {
                                return t(n, e)
                            } catch (n) {
                                return null
                            }
                        }
                    }
                }(),
                function(n) {
                    var t = n.zepto,
                        e = t.qsa,
                        r = /^\s*>/,
                        i = "Zepto" + +new Date;
                    t.qsa = function(t, o) {
                        var u, c, a = o;
                        try {
                            a ? r.test(a) && (c = n(t).addClass(i), a = "." + i + " " + a) : a = "*", u = e(t, a)
                        } catch (n) {
                            throw n
                        } finally {
                            c && c.removeClass(i)
                        }
                        return u
                    }
                }(t), t
        }(window),
        Xh = ":eq(",
        Yh = ")",
        Qh = Xh.length,
        np = /((\.|#)\d{1})/g,
        tp = "[trackEvent()]",
        ep = "navigator",
        rp = "sendBeacon",
        ip = "sendBeacon() request failed",
        op = qd,
        up = function(n, t) {},
        cp = function(n) {},
        ap = "clickTrackId",
        fp = "mboxTarget",
        sp = "script,link," + bf;
    Fo.prototype = {
        on: function(n, t, e) {
            var r = this.e || (this.e = {});
            return (r[n] || (r[n] = [])).push({
                fn: t,
                ctx: e
            }), this
        },
        once: function(n, t, e) {
            function r() {
                i.off(n, r), t.apply(e, arguments)
            }
            var i = this;
            return r._ = t, this.on(n, r, e)
        },
        emit: function(n) {
            var t = [].slice.call(arguments, 1),
                e = ((this.e || (this.e = {}))[n] || []).slice(),
                r = 0,
                i = e.length;
            for (r; r < i; r++) e[r].fn.apply(e[r].ctx, t);
            return this
        },
        off: function(n, t) {
            var e = this.e || (this.e = {}),
                r = e[n],
                i = [];
            if (r && t)
                for (var o = 0, u = r.length; o < u; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
            return i.length ? e[n] = i : delete e[n], this
        }
    };
    var lp = Fo,
        dp = $o(),
        hp = "at-",
        pp = "at-body-style",
        vp = "#" + pp,
        mp = "at-makers-style",
        gp = "MutationObserver",
        yp = {
            childList: !0,
            subtree: !0
        },
        bp = [],
        xp = 1e3,
        wp = "visibilityState",
        Ep = "visible",
        Cp = [],
        Sp = function(n) {},
        Op = function(n) {},
        Tp = "[applyOffer()]",
        kp = function(n) {},
        Np = "adobe",
        Ap = "target",
        Dp = "ext",
        jp = J(function(n, t) {
            ! function(e, r) {
                "function" == typeof bc && bc.amd ? bc([], r) : "object" === (void 0 === t ? "undefined" : Rc(t)) ? n.exports = r() : e.currentExecutingScript = r()
            }(od || window, function() {
                function n(n, t) {}

                function t(n) {}

                function e(n, t) {}

                function r() {}

                function i() {}

                function o() {}
                var u = /^(interactive|loaded|complete)$/,
                    c = window.location ? window.location.href : null,
                    a = c ? c.replace(/#.*$/, "").replace(/\?.*$/, "") || null : null,
                    f = document.getElementsByTagName("script"),
                    s = "readyState" in (f[0] || document.createElement("script")),
                    l = !window.opera || "[object Opera]" !== window.opera.toString(),
                    d = "currentScript" in document;
                "stackTraceLimit" in Error && Error.stackTraceLimit !== 1 / 0 && (Error.stackTraceLimit = 1 / 0);
                var h = !1,
                    p = !1;
                ! function() {
                    try {
                        var n = new Error;
                        throw h = "string" == typeof n.stack && !!n.stack, n
                    } catch (n) {
                        p = "string" == typeof n.stack && !!n.stack
                    }
                }(), o.skipStackDepth = 1;
                var v = o;
                return v.near = o, v.far = r, v.origin = i, v
            })
        }),
        _p = "[mboxCreate()]",
        Rp = "[mboxDefine()]",
        Ip = "[mboxUpdate()]",
        Pp = "Unable to load target-vec.js",
        Mp = "Loading target-vec.js",
        Lp = "_AT",
        qp = "clickHandlerForExperienceEditor",
        Up = "[global mbox]",
        Fp = "auto-create disabled";
    return {
        init: yc
    }
}(), window.adobe.target.init(window, document, {
    "clientCode": "apple",
    "imsOrgId": "92D81C8B532954BF0A490D4D@AdobeOrg",
    "serverDomain": "apple.tt.omtrdc.net",
    "crossDomain": "disabled",
    "timeout": 2500,
    "globalMboxName": "target-global-mbox",
    "globalMboxAutoCreate": true,
    "version": "1.5.0",
    "defaultContentHiddenStyle": "visibility:hidden;",
    "defaultContentVisibleStyle": "visibility:visible;",
    "bodyHiddenStyle": "body{opacity:0!important}",
    "bodyHidingEnabled": true,
    "deviceIdLifetime": 63244800000,
    "sessionIdLifetime": 1860000,
    "selectorsPollingTimeout": 5000,
    "visitorApiTimeout": 2000,
    "overrideMboxEdgeServer": false,
    "overrideMboxEdgeServerTimeout": 1860000,
    "optoutEnabled": false,
    "secureOnly": false,
    "supplementalDataIdParamTimeout": 30,
    "authoringScriptUrl": "//cdn.tt.omtrdc.net/cdn/target-vec.js",
    "urlSizeLimit": 2048
});
document.addEventListener(adobe.target.event.REQUEST_SUCCEEDED, targetSucessCallback);
document.addEventListener(adobe.target.event.REQUEST_FAILED, targetFailureCallback);

function getTests(tokenArr) {}

function targetSucessCallback(e) {
    // Capture the response details in a variable.
    var eventData = null;
    if (e && e.detail) {
        var targetResponse = e.detail;
    }
    // Parse the response details for the responseTokens and put each token in an array.
    if (targetResponse && targetResponse["responseTokens"]) {
        var tokens = targetResponse["responseTokens"];
        var combi = getTests(tokens);
        if (combi && combi.length > 0) {
            eventData = {
                "eVar57": combi
            };
        } else {
            eventData = {
                "eVar57": "no tests found"
            };
        }
    } else {
        eventData = {
            "eVar57": "no tests found"
        };
    }
    window.AB = window.AB || {};
    window.AB.targetData = eventData;
    document.dispatchEvent(new CustomEvent('CustomTargetResolved', {
        bubbles: true,
        detail: eventData
    }));
};

function targetFailureCallback(e) {};