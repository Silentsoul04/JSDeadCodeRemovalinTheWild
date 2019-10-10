! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";

    function m(e, t, n) {
        var i, o = (t = t || se).createElement("script");
        if (o.text = e, n)
            for (i in xe) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function g(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? he[de.call(e)] || "object" : typeof e
    }

    function a(e) {
        var t = !!e && "length" in e && e.length,
            n = g(e);
        return !ye(e) && !be(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function t(e, n, i) {
        return ye(n) ? we.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? we.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? we.grep(e, function(e) {
            return -1 < fe.call(n, e) !== i
        }) : we.filter(n, e, i)
    }

    function n(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function c(e) {
        var n = {};
        return we.each(e.match(Le) || [], function(e, t) {
            n[t] = !0
        }), n
    }

    function f(e) {
        return e
    }

    function h(e) {
        throw e
    }

    function u(e, t, n, i) {
        var o;
        try {
            e && ye(o = e.promise) ? o.call(e).done(t).fail(n) : e && ye(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function i() {
        se.removeEventListener("DOMContentLoaded", i), C.removeEventListener("load", i), we.ready()
    }

    function o(e, t) {
        return t.toUpperCase()
    }

    function d(e) {
        return e.replace(He, "ms-").replace(Pe, o)
    }

    function r() {
        this.expando = we.expando + r.uid++
    }

    function s(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e)
    }

    function p(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Be, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = s(n)
                } catch (e) {}
                Re.set(e, t, n)
            } else n = void 0;
        return n
    }

    function v(e, t, n, i) {
        var o, r, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return we.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (we.cssNumber[t] ? "" : "px"),
            c = (we.cssNumber[t] || "px" !== l && +u) && Ue.exec(we.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; s--;) we.style(e, t, c + l), (1 - r) * (1 - (r = a() / u || .5)) <= 0 && (s = 0), c /= r;
            c *= 2, we.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = o)), o
    }

    function y(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            o = Ve[i];
        return o || (t = n.body.appendChild(n.createElement(i)), o = we.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ve[i] = o)
    }

    function b(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = Ie.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Xe(i) && (o[r] = y(i))) : "none" !== n && (o[r] = "none", Ie.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }

    function x(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && l(e, t) ? we.merge([e], n) : n
    }

    function w(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Ie.set(e[n], "globalEval", !t || Ie.get(t[n], "globalEval"))
    }

    function _(e, t, n, i, o) {
        for (var r, s, a, u, l, c, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
            if ((r = e[d]) || 0 === r)
                if ("object" === g(r)) we.merge(h, r.nodeType ? [r] : r);
                else if (tt.test(r)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (Ye.exec(r) || ["", ""])[1].toLowerCase(), u = Je[a] || Je._default, s.innerHTML = u[1] + we.htmlPrefilter(r) + u[2], c = u[0]; c--;) s = s.lastChild;
            we.merge(h, s.childNodes), (s = f.firstChild).textContent = ""
        } else h.push(t.createTextNode(r));
        for (f.textContent = "", d = 0; r = h[d++];)
            if (i && -1 < we.inArray(r, i)) o && o.push(r);
            else if (l = we.contains(r.ownerDocument, r), s = x(f.appendChild(r), "script"), l && w(s), n)
            for (c = 0; r = s[c++];) Qe.test(r.type || "") && n.push(r);
        return f
    }

    function T() {
        return !0
    }

    function E() {
        return !1
    }

    function k() {
        try {
            return se.activeElement
        } catch (C) {}
    }

    function D(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) D(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = E;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
            return we().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = we.guid++)), e.each(function() {
            we.event.add(this, t, o, i, n)
        })
    }

    function S(e, t) {
        return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && we(e).children("tbody")[0] || e
    }

    function A(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function N(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function j(e, t) {
        var n, i, o, r, s, a, u, l;
        if (1 === t.nodeType) {
            if (Ie.hasData(e) && (r = Ie.access(e), s = Ie.set(t, r), l = r.events))
                for (o in delete s.handle, s.events = {}, l)
                    for (n = 0, i = l[o].length; n < i; n++) we.event.add(t, o, l[o][n]);
            Re.hasData(e) && (a = Re.access(e), u = we.extend({}, a), Re.set(t, u))
        }
    }

    function L(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ke.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function M(n, i, o, r) {
        i = le.apply([], i);
        var e, t, s, a, u, l, c = 0,
            f = n.length,
            h = f - 1,
            d = i[0],
            p = ye(d);
        if (p || 1 < f && "string" == typeof d && !ve.checkClone && ut.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            p && (i[0] = d.call(this, e, t.html())), M(t, i, o, r)
        });
        if (f && (t = (e = _(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (a = (s = we.map(x(e, "script"), A)).length; c < f; c++) u = e, c !== h && (u = we.clone(u, !0, !0), a && we.merge(s, x(u, "script"))), o.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, we.map(s, N), c = 0; c < a; c++) u = s[c], Qe.test(u.type || "") && !Ie.access(u, "globalEval") && we.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? we._evalUrl && we._evalUrl(u.src) : m(u.textContent.replace(lt, ""), l, u))
        }
        return n
    }

    function q(e, t, n) {
        for (var i, o = t ? we.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || we.cleanData(x(i)), i.parentNode && (n && we.contains(i.ownerDocument, i) && w(x(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function O(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || ft(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || we.contains(e.ownerDocument, e) || (s = we.style(e, t)), !ve.pixelBoxStyles() && ct.test(s) && ht.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function H(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function P(e) {
        if (e in yt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = vt.length; n--;)
            if ((e = vt[n] + t) in yt) return e
    }

    function W(e) {
        var t = we.cssProps[e];
        return t || (t = we.cssProps[e] = P(e) || e), t
    }

    function I(e, t, n) {
        var i = Ue.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function R(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            u = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (u += we.css(e, n + ze[s], !0, o)), i ? ("content" === n && (u -= we.css(e, "padding" + ze[s], !0, o)), "margin" !== n && (u -= we.css(e, "border" + ze[s] + "Width", !0, o))) : (u += we.css(e, "padding" + ze[s], !0, o), "padding" !== n ? u += we.css(e, "border" + ze[s] + "Width", !0, o) : a += we.css(e, "border" + ze[s] + "Width", !0, o));
        return !i && 0 <= r && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - u - a - .5))), u
    }

    function F(e, t, n) {
        var i = ft(e),
            o = O(e, t, i),
            r = "border-box" === we.css(e, "boxSizing", !1, i),
            s = r;
        if (ct.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return s = s && (ve.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === we.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (o = parseFloat(o) || 0) + R(e, t, n || (r ? "border" : "content"), s, i, o) + "px"
    }

    function B(e, t, n, i, o) {
        return new B.prototype.init(e, t, n, i, o)
    }

    function $() {
        xt && (!1 === se.hidden && C.requestAnimationFrame ? C.requestAnimationFrame($) : C.setTimeout($, we.fx.interval), we.fx.tick())
    }

    function U() {
        return C.setTimeout(function() {
            bt = void 0
        }), bt = Date.now()
    }

    function z(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ze[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function X(e, t, n) {
        for (var i, o = (K.tweeners[t] || []).concat(K.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function G(e, t, n) {
        var i, o, r, s, a, u, l, c, f = "width" in t || "height" in t,
            h = this,
            d = {},
            p = e.style,
            m = e.nodeType && Xe(e),
            g = Ie.get(e, "fxshow");
        for (i in n.queue || (null == (s = we._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a()
            }), s.unqueued++, h.always(function() {
                h.always(function() {
                    s.unqueued--, we.queue(e, "fx").length || s.empty.fire()
                })
            })), t)
            if (o = t[i], Ct.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    m = !0
                }
                d[i] = g && g[i] || we.style(e, i)
            }
        if ((u = !we.isEmptyObject(t)) || !we.isEmptyObject(d))
            for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = g && g.display) && (l = Ie.get(e, "display")), "none" === (c = we.css(e, "display")) && (l ? c = l : (b([e], !0), l = e.style.display || l, c = we.css(e, "display"), b([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === we.css(e, "float") && (u || (h.done(function() {
                    p.display = l
                }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), u = !1, d) u || (g ? "hidden" in g && (m = g.hidden) : g = Ie.access(e, "fxshow", {
                display: l
            }), r && (g.hidden = !m), m && b([e], !0), h.done(function() {
                for (i in m || b([e]), Ie.remove(e, "fxshow"), d) we.style(e, i, d[i])
            })), u = X(m ? g[i] : 0, i, h), i in g || (g[i] = u.start, m && (u.end = u.start, u.start = 0))
    }

    function V(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (o = t[i = d(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = we.cssHooks[i]) && "expand" in s)
                for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
            else t[i] = o
    }

    function K(r, e, t) {
        var n, s, i = 0,
            o = K.prefilters.length,
            a = we.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (s) return !1;
                for (var e = bt || U(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), i = 0, o = l.tweens.length; i < o; i++) l.tweens[i].run(n);
                return a.notifyWith(r, [l, n, t]), n < 1 && o ? t : (o || a.notifyWith(r, [l, 1, 0]), a.resolveWith(r, [l]), !1)
            },
            l = a.promise({
                elem: r,
                props: we.extend({}, e),
                opts: we.extend(!0, {
                    specialEasing: {},
                    easing: we.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: bt || U(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = we.Tween(r, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (a.notifyWith(r, [l, 1, 0]), a.resolveWith(r, [l, e])) : a.rejectWith(r, [l, e]), this
                }
            }),
            c = l.props;
        for (V(c, l.opts.specialEasing); i < o; i++)
            if (n = K.prefilters[i].call(l, r, c, l.opts)) return ye(n.stop) && (we._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return we.map(c, X, l), ye(l.opts.start) && l.opts.start.call(r, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), we.fx.timer(we.extend(u, {
            elem: r,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    function Y(e) {
        return (e.match(Le) || []).join(" ")
    }

    function Q(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function J(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(Le) || []
    }

    function Z(n, e, i, o) {
        var t;
        if (Array.isArray(e)) we.each(e, function(e, t) {
            i || Ot.test(n) ? o(n, t) : Z(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
        });
        else if (i || "object" !== g(e)) o(n, e);
        else
            for (t in e) Z(n + "[" + t + "]", e[t], i, o)
    }

    function ee(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(Le) || [];
            if (ye(t))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function te(t, o, r, s) {
        function a(e) {
            var i;
            return u[e] = !0, we.each(t[e] || [], function(e, t) {
                var n = t(o, r, s);
                return "string" != typeof n || l || u[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), a(n), !1)
            }), i
        }
        var u = {},
            l = t === Gt;
        return a(o.dataTypes[0]) || !u["*"] && a("*")
    }

    function ne(e, t) {
        var n, i, o = we.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && we.extend(!0, e, i), e
    }

    function ie(e, t, n) {
        for (var i, o, r, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    u.unshift(o);
                    break
                }
        if (u[0] in n) r = u[0];
        else {
            for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r) return r !== u[0] && u.unshift(r), n[r]
    }

    function oe(e, t, n, i) {
        var o, r, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (r = c.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = r, r = c.shift())
                if ("*" === r) r = u;
                else if ("*" !== u && u !== r) {
            if (!(s = l[u + " " + r] || l["* " + r]))
                for (o in l)
                    if ((a = o.split(" "))[1] === r && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        !0 === s ? s = l[o] : !0 !== l[o] && (r = a[0], c.unshift(a[1]));
                        break
                    }
            if (!0 !== s)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + u + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var re = [],
        se = C.document,
        ae = Object.getPrototypeOf,
        ue = re.slice,
        le = re.concat,
        ce = re.push,
        fe = re.indexOf,
        he = {},
        de = he.toString,
        pe = he.hasOwnProperty,
        me = pe.toString,
        ge = me.call(Object),
        ve = {},
        ye = function C(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        be = function C(e) {
            return null != e && e === e.window
        },
        xe = {
            type: !0,
            src: !0,
            noModule: !0
        },
        we = function(e, t) {
            return new we.fn.init(e, t)
        },
        _e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    we.fn = we.prototype = {
        jquery: "3.3.1",
        constructor: we,
        length: 0,
        toArray: function() {
            return ue.call(this)
        },
        get: function(e) {
            return null == e ? ue.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = we.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return we.each(this, e)
        },
        map: function(n) {
            return this.pushStack(we.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(ue.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ce,
        sort: re.sort,
        splice: re.splice
    }, we.extend = we.fn.extend = function(e) {
        var t, n, i, o, r, s, a = e || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[u] || {}, u++), "object" == typeof a || ye(a) || (a = {}), u === l && (a = this, u--); u < l; u++)
            if (null != (t = arguments[u]))
                for (n in t) i = a[n], a !== (o = t[n]) && (c && o && (we.isPlainObject(o) || (r = Array.isArray(o))) ? (r ? (r = !1, s = i && Array.isArray(i) ? i : []) : s = i && we.isPlainObject(i) ? i : {}, a[n] = we.extend(c, s, o)) : void 0 !== o && (a[n] = o));
        return a
    }, we.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== de.call(e) || (t = ae(e)) && ("function" != typeof(n = pe.call(t, "constructor") && t.constructor) || me.call(n) !== ge))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            m(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (a(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(_e, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (a(Object(e)) ? we.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : fe.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0,
                s = [];
            if (a(e))
                for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
            else
                for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return le.apply([], s)
        },
        guid: 1,
        support: ve
    }), "function" == typeof Symbol && (we.fn[Symbol.iterator] = re[Symbol.iterator]), we.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        he["[object " + t + "]"] = t.toLowerCase()
    });
    var Ce = function(n) {
        function x(e, t, n, i) {
            var o, r, s, a, u, l, c, f = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : F) !== M && L(t), t = t || M, O)) {
                if (11 !== h && (u = ve.exec(e)))
                    if (o = u[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (f && (s = f.getElementById(o)) && I(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = u[3]) && _.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(o)), n
                    }
                if (_.qsa && !X[e + " "] && (!H || !H.test(e))) {
                    if (1 !== h) f = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(we, _e) : t.setAttribute("id", a = R), r = (l = k(e)).length; r--;) l[r] = "#" + a + " " + p(l[r]);
                        c = l.join(","), f = ye.test(e) && d(t.parentNode) || t
                    }
                    if (c) try {
                        return J.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        a === R && t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ae, "$1"), t, n, i)
        }

        function e() {
            function n(e, t) {
                return i.push(e + " ") > C.cacheLength && delete n[i.shift()], n[e + " "] = t
            }
            var i = [];
            return n
        }

        function u(e) {
            return e[R] = !0, e
        }

        function o(e) {
            var t = M.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function t(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
        }

        function l(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function i(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function r(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function s(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Te(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function a(s) {
            return u(function(r) {
                return r = +r, u(function(e, t) {
                    for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function c() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function f(a, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                h = $++;
            return e.first ? function(e, t, n) {
                for (; e = e[u];)
                    if (1 === e.nodeType || f) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, o, r, s = [B, h];
                if (n) {
                    for (; e = e[u];)
                        if ((1 === e.nodeType || f) && a(e, t, n)) return !0
                } else
                    for (; e = e[u];)
                        if (1 === e.nodeType || f)
                            if (o = (r = e[R] || (e[R] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((i = o[c]) && i[0] === B && i[1] === h) return s[2] = i[2];
                                if ((o[c] = s)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function h(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function y(e, t, n) {
            for (var i = 0, o = t.length; i < o; i++) x(e, t[i], n);
            return n
        }

        function w(e, t, n, i, o) {
            for (var r, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), l && t.push(a)));
            return s
        }

        function b(d, p, m, g, v, e) {
            return g && !g[R] && (g = b(g)), v && !v[R] && (v = b(v, e)), u(function(e, t, n, i) {
                var o, r, s, a = [],
                    u = [],
                    l = t.length,
                    c = e || y(p || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && p ? c : w(c, a, d, n, i),
                    h = m ? v || (e ? d : l || g) ? [] : t : f;
                if (m && m(f, h, n, i), g)
                    for (o = w(h, u), g(o, [], n, i), r = o.length; r--;)(s = o[r]) && (h[u[r]] = !(f[u[r]] = s));
                if (e) {
                    if (v || d) {
                        if (v) {
                            for (o = [], r = h.length; r--;)(s = h[r]) && o.push(f[r] = s);
                            v(null, h = [], o, i)
                        }
                        for (r = h.length; r--;)(s = h[r]) && -1 < (o = v ? ee(e, s) : a[r]) && (e[o] = !(t[o] = s))
                    }
                } else h = w(h === t ? h.splice(l, h.length) : h), v ? v(null, t, h, i) : J.apply(t, h)
            })
        }

        function m(e) {
            for (var o, t, n, i = e.length, r = C.relative[e[0].type], s = r || C.relative[" "], a = r ? 1 : 0, u = f(function(e) {
                    return e === o
                }, s, !0), l = f(function(e) {
                    return -1 < ee(o, e)
                }, s, !0), c = [function(e, t, n) {
                    var i = !r && (n || t !== A) || ((o = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return o = null, i
                }]; a < i; a++)
                if (t = C.relative[e[a].type]) c = [f(h(c), t)];
                else {
                    if ((t = C.filter[e[a].type].apply(null, e[a].matches))[R]) {
                        for (n = ++a; n < i && !C.relative[e[n].type]; n++);
                        return b(1 < a && h(c), 1 < a && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), t, a < n && m(e.slice(a, n)), n < i && m(e = e.slice(n)), n < i && p(e))
                    }
                    c.push(t)
                }
            return h(c)
        }

        function g(g, v) {
            var y = 0 < v.length,
                b = 0 < g.length,
                e = function(e, t, n, i, o) {
                    var r, s, a, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        h = A,
                        d = e || b && C.find.TAG("*", o),
                        p = B += null == h ? 1 : Math.random() || .1,
                        m = d.length;
                    for (o && (A = t === M || t || o); l !== m && null != (r = d[l]); l++) {
                        if (b && r) {
                            for (s = 0, t || r.ownerDocument === M || (L(r), n = !O); a = g[s++];)
                                if (a(r, t || M, n)) {
                                    i.push(r);
                                    break
                                }
                            o && (B = p)
                        }
                        y && ((r = !a && r) && u--, e && c.push(r))
                    }
                    if (u += l, y && l !== u) {
                        for (s = 0; a = v[s++];) a(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--;) c[l] || f[l] || (f[l] = Y.call(i));
                            f = w(f)
                        }
                        J.apply(i, f), o && !e && 0 < f.length && 1 < u + v.length && x.uniqueSort(i)
                    }
                    return o && (B = p, A = h), c
                };
            return y ? u(e) : e
        }
        var v, _, C, T, E, k, D, S, A, N, j, L, M, q, O, H, P, W, I, R = "sizzle" + 1 * new Date,
            F = n.document,
            B = 0,
            $ = 0,
            U = e(),
            z = e(),
            X = e(),
            G = function(e, t) {
                return e === t && (j = !0), 0
            },
            V = {}.hasOwnProperty,
            K = [],
            Y = K.pop,
            Q = K.push,
            J = K.push,
            Z = K.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(re),
            he = new RegExp("^" + ie + "$"),
            de = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            _e = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ce = function() {
                L()
            },
            Te = f(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(K = Z.call(F.childNodes), F.childNodes), K[F.childNodes.length].nodeType
        } catch (n) {
            J = {
                apply: K.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        for (v in _ = x.support = {}, E = x.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, L = x.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : F;
                return i !== M && 9 === i.nodeType && i.documentElement && (q = (M = i).documentElement, O = !E(M), F !== M && (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), _.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), _.getElementsByTagName = o(function(e) {
                    return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
                }), _.getElementsByClassName = ge.test(M.getElementsByClassName), _.getById = o(function(e) {
                    return q.appendChild(e).id = R, !M.getElementsByName || !M.getElementsByName(R).length
                }), _.getById ? (C.filter.ID = function(e) {
                    var t = e.replace(be, xe);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, C.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && O) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (C.filter.ID = function(e) {
                    var n = e.replace(be, xe);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, C.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && O) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), C.find.TAG = _.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }, C.find.CLASS = _.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && O) return t.getElementsByClassName(e)
                }, P = [], H = [], (_.qsa = ge.test(M.querySelectorAll)) && (o(function(e) {
                    q.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || H.push(".#.+[+~]")
                }), o(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = M.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"), q.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
                })), (_.matchesSelector = ge.test(W = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && o(function(e) {
                    _.disconnectedMatch = W.call(e, "*"), W.call(e, "[s!='']:x"), P.push("!=", re)
                }), H = H.length && new RegExp(H.join("|")), P = P.length && new RegExp(P.join("|")), t = ge.test(q.compareDocumentPosition), I = t || ge.test(q.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, G = t ? function(e, t) {
                    if (e === t) return j = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === M || e.ownerDocument === F && I(F, e) ? -1 : t === M || t.ownerDocument === F && I(F, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return j = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === M ? -1 : t === M ? 1 : o ? -1 : r ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                    if (o === r) return l(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? l(s[i], a[i]) : s[i] === F ? -1 : a[i] === F ? 1 : 0
                }), M
            }, x.matches = function(e, t) {
                return x(e, null, null, t)
            }, x.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== M && L(e), t = t.replace(ce, "='$1']"), _.matchesSelector && O && !X[t + " "] && (!P || !P.test(t)) && (!H || !H.test(t))) try {
                    var n = W.call(e, t);
                    if (n || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < x(t, M, null, [e]).length
            }, x.contains = function(e, t) {
                return (e.ownerDocument || e) !== M && L(e), I(e, t)
            }, x.attr = function(e, t) {
                (e.ownerDocument || e) !== M && L(e);
                var n = C.attrHandle[t.toLowerCase()],
                    i = n && V.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                return void 0 !== i ? i : _.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, x.escape = function(e) {
                return (e + "").replace(we, _e)
            }, x.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, x.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (j = !_.detectDuplicates, N = !_.sortStable && e.slice(0), e.sort(G), j) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return N = null, e
            }, T = x.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += T(t);
                return n
            }, (C = x.selectors = {
                cacheLength: 50,
                createPseudo: u,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || x.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && x.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, xe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = U[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, o) {
                        return function(e) {
                            var t = x.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(se, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function(p, e, t, m, g) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            b = "of-type" === e;
                        return 1 === m && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, o, r, s, a, u, l = v !== y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                h = !n && !b,
                                d = !1;
                            if (c) {
                                if (v) {
                                    for (; l;) {
                                        for (s = e; s = s[l];)
                                            if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                        u = l = "only" === p && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [y ? c.firstChild : c.lastChild], y && h) {
                                    for (d = (a = (i = (o = (r = (s = c)[R] || (s[R] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === B && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[l] || (d = a = 0) || u.pop();)
                                        if (1 === s.nodeType && ++d && s === e) {
                                            o[p] = [B, a, d];
                                            break
                                        }
                                } else if (h && (d = a = (i = (o = (r = (s = e)[R] || (s[R] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === B && i[1]), !1 === d)
                                    for (;
                                        (s = ++a && s && s[l] || (d = a = 0) || u.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (h && ((o = (r = s[R] || (s[R] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] = [B, d]), s !== e)););
                                return (d -= g) === m || d % m == 0 && 0 <= d / m
                            }
                        }
                    },
                    PSEUDO: function(e, r) {
                        var t, s = C.pseudos[e] || C.setFilters[e.toLowerCase()] || x.error("unsupported pseudo: " + e);
                        return s[R] ? s(r) : 1 < s.length ? (t = [e, e, "", r], C.setFilters.hasOwnProperty(e.toLowerCase()) ? u(function(e, t) {
                            for (var n, i = s(e, r), o = i.length; o--;) e[n = ee(e, i[o])] = !(t[n] = i[o])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: u(function(e) {
                        var i = [],
                            o = [],
                            a = D(e.replace(ae, "$1"));
                        return a[R] ? u(function(e, t, n, i) {
                            for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
                        }
                    }),
                    has: u(function(t) {
                        return function(e) {
                            return 0 < x(t, e).length
                        }
                    }),
                    contains: u(function(t) {
                        return t = t.replace(be, xe),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || T(e)).indexOf(t)
                            }
                    }),
                    lang: u(function(n) {
                        return he.test(n || "") || x.error("unsupported lang: " + n), n = n.replace(be, xe).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === q
                    },
                    focus: function(e) {
                        return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: s(!1),
                    disabled: s(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return pe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: a(
                        function() {
                            return [0]
                        }),
                    last: a(function(e, t) {
                        return [t - 1]
                    }),
                    eq: a(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: a(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: a(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: a(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: a(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = C.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[v] = i(v);
        for (v in {
                submit: !0,
                reset: !0
            }) C.pseudos[v] = r(v);
        return c.prototype = C.filters = C.pseudos, C.setFilters = new c, k = x.tokenize = function(e, t) {
            var n, i, o, r, s, a, u, l = z[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, a = [], u = C.preFilter; s;) {
                for (r in n && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = le.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(ae, " ")
                    }), s = s.slice(n.length)), C.filter) !(i = de[r].exec(s)) || u[r] && !(i = u[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? x.error(e) : z(e, a).slice(0)
        }, D = x.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = X[e + " "];
            if (!r) {
                for (t || (t = k(e)), n = t.length; n--;)(r = m(t[n]))[R] ? i.push(r) : o.push(r);
                (r = X(e, g(o, i))).selector = e
            }
            return r
        }, S = x.select = function(e, t, n, i) {
            var o, r, s, a, u, l = "function" == typeof e && e,
                c = !i && k(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && O && C.relative[r[1].type]) {
                    if (!(t = (C.find.ID(s.matches[0].replace(be, xe), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = de.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);)
                    if ((u = C.find[a]) && (i = u(s.matches[0].replace(be, xe), ye.test(r[0].type) && d(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && p(r))) return J.apply(n, i), n;
                        break
                    }
            }
            return (l || D(e, c))(i, t, !O, n, !t || ye.test(e) && d(t.parentNode) || t), n
        }, _.sortStable = R.split("").sort(G).join("") === R, _.detectDuplicates = !!j, L(), _.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(M.createElement("fieldset"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || t("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || t(te, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), x
    }(C);
    we.find = Ce, we.expr = Ce.selectors, we.expr[":"] = we.expr.pseudos, we.uniqueSort = we.unique = Ce.uniqueSort, we.text = Ce.getText, we.isXMLDoc = Ce.isXML, we.contains = Ce.contains, we.escapeSelector = Ce.escape;
    var Te = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && we(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        Ee = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        ke = we.expr.match.needsContext,
        De = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    we.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? we.find.matchesSelector(i, e) ? [i] : [] : we.find.matches(e, we.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, we.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(we(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (we.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) we.find(e, o[t], n);
            return 1 < i ? we.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && ke.test(e) ? we(e) : e || [], !1).length
        }
    });
    var Se, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (we.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || Se, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : ye(e) ? void 0 !== n.ready ? n.ready(e) : e(we) : we.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Ae.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof we ? t[0] : t, we.merge(this, we.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), De.test(i[1]) && we.isPlainObject(t))
                for (i in t) ye(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (o = se.getElementById(i[2])) && (this[0] = o, this.length = 1), this
    }).prototype = we.fn, Se = we(se);
    var Ne = /^(?:parents|prev(?:Until|All))/,
        je = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    we.fn.extend({
        has: function(e) {
            var t = we(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (we.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && we(e);
            if (!ke.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && we.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? we.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? fe.call(we(e), this[0]) : fe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(we.uniqueSort(we.merge(this.get(), we(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), we.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Te(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Te(e, "parentNode", n)
        },
        next: function(e) {
            return n(e, "nextSibling")
        },
        prev: function(e) {
            return n(e, "previousSibling")
        },
        nextAll: function(e) {
            return Te(e, "nextSibling")
        },
        prevAll: function(e) {
            return Te(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Te(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Te(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Ee((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Ee(e.firstChild)
        },
        contents: function(e) {
            return l(e, "iframe") ? e.contentDocument : (l(e, "template") && (e = e.content || e), we.merge([], e.childNodes))
        }
    }, function(i, o) {
        we.fn[i] = function(e, t) {
            var n = we.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = we.filter(t, n)), 1 < this.length && (je[i] || we.uniqueSort(n), Ne.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var Le = /[^\x20\t\r\n\f]+/g;
    we.Callbacks = function(i) {
        i = "string" == typeof i ? c(i) : we.extend({}, i);
        var o, e, t, n, r = [],
            s = [],
            a = -1,
            u = function() {
                for (n = n || i.once, t = o = !0; s.length; a = -1)
                    for (e = s.shift(); ++a < r.length;) !1 === r[a].apply(e[0], e[1]) && i.stopOnFalse && (a = r.length, e = !1);
                i.memory || (e = !1), o = !1, n && (r = e ? [] : "")
            },
            l = {
                add: function() {
                    return r && (e && !o && (a = r.length - 1, s.push(e)), function n(e) {
                        we.each(e, function(e, t) {
                            ye(t) ? i.unique && l.has(t) || r.push(t) : t && t.length && "string" !== g(t) && n(t)
                        })
                    }(arguments), e && !o && u()), this
                },
                remove: function() {
                    return we.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = we.inArray(t, r, n));) r.splice(n, 1), n <= a && a--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < we.inArray(e, r) : 0 < r.length
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return n = s = [], r = e = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return n = s = [], e || o || (r = e = ""), this
                },
                locked: function() {
                    return !!n
                },
                fireWith: function(e, t) {
                    return n || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), o || u()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!t
                }
            };
        return l
    }, we.extend({
        Deferred: function(e) {
            var r = [
                    ["notify", "progress", we.Callbacks("memory"), we.Callbacks("memory"), 2],
                    ["resolve", "done", we.Callbacks("once memory"), we.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", we.Callbacks("once memory"), we.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                s = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var o = arguments;
                        return we.Deferred(function(i) {
                            we.each(r, function(e, t) {
                                var n = ye(o[t[4]]) && o[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && ye(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        function u(o, r, s, a) {
                            return function() {
                                var n = this,
                                    i = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(o < l)) {
                                            if ((e = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, ye(t) ? a ? t.call(e, u(l, r, f, a), u(l, r, h, a)) : (l++, t.call(e, u(l, r, f, a), u(l, r, h, a), u(l, r, f, r.notifyWith))) : (s !== f && (n = void 0, i = [e]), (a || r.resolveWith)(n, i))
                                        }
                                    },
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (C) {
                                            we.Deferred.exceptionHook && we.Deferred.exceptionHook(C, t.stackTrace), l <= o + 1 && (s !== h && (n = void 0, i = [C]), r.rejectWith(n, i))
                                        }
                                    };
                                o ? t() : (we.Deferred.getStackHook && (t.stackTrace = we.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        var l = 0;
                        return we.Deferred(function(e) {
                            r[0][3].add(u(0, e, ye(i) ? i : f, e.notifyWith)), r[1][3].add(u(0, e, ye(t) ? t : f)), r[2][3].add(u(0, e, ye(n) ? n : h))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? we.extend(e, s) : s
                    }
                },
                a = {};
            return we.each(r, function(e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add, i && n.add(function() {
                    o = i
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                i = Array(t),
                o = ue.call(arguments),
                r = we.Deferred(),
                s = function(t) {
                    return function(e) {
                        i[t] = this, o[t] = 1 < arguments.length ? ue.call(arguments) : e, --n || r.resolveWith(i, o)
                    }
                };
            if (n <= 1 && (u(e, r.done(s(t)).resolve, r.reject, !n), "pending" === r.state() || ye(o[t] && o[t].then))) return r.then();
            for (; t--;) u(o[t], s(t), r.reject);
            return r.promise()
        }
    });
    var Me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    we.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && Me.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, we.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var qe = we.Deferred();
    we.fn.ready = function(e) {
        return qe.then(e)["catch"](function(e) {
            we.readyException(e)
        }), this
    }, we.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --we.readyWait : we.isReady) || ((we.isReady = !0) !== e && 0 < --we.readyWait || qe.resolveWith(se, [we]))
        }
    }), we.ready.then = qe.then, "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll ? C.setTimeout(we.ready) : (se.addEventListener("DOMContentLoaded", i), C.addEventListener("load", i));
    var Oe = function(e, t, n, i, o, r, s) {
            var a = 0,
                u = e.length,
                l = null == n;
            if ("object" === g(n))
                for (a in o = !0, n) Oe(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, ye(i) || (s = !0), l && (s ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(we(e), n)
                })), t))
                for (; a < u; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : l ? t.call(e) : u ? t(e[0], n) : r
        },
        He = /^-ms-/,
        Pe = /-([a-z])/g,
        We = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    r.uid = 1, r.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, We(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[d(t)] = n;
            else
                for (i in t) o[d(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][d(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(d) : (t = d(t)) in i ? [t] : t.match(Le) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || we.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !we.isEmptyObject(t)
        }
    };
    var Ie = new r,
        Re = new r,
        Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Be = /[A-Z]/g;
    we.extend({
        hasData: function(e) {
            return Re.hasData(e) || Ie.hasData(e)
        },
        data: function(e, t, n) {
            return Re.access(e, t, n)
        },
        removeData: function(e, t) {
            Re.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ie.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ie.remove(e, t)
        }
    }), we.fn.extend({
        data: function(n, e) {
            var t, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                Re.set(this, n)
            }) : Oe(this, function(e) {
                var t;
                if (r && void 0 === e) {
                    if (void 0 !== (t = Re.get(r, n))) return t;
                    if (void 0 !== (t = p(r, n))) return t
                } else this.each(function() {
                    Re.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = Re.get(r), 1 === r.nodeType && !Ie.get(r, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = d(i.slice(5)), p(r, i, o[i]));
                Ie.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                Re.remove(this, e)
            })
        }
    }), we.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Ie.get(e, t), n && (!i || Array.isArray(n) ? i = Ie.access(e, t, we.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = we.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = we._queueHooks(e, t),
                s = function() {
                    we.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ie.get(e, n) || Ie.access(e, n, {
                empty: we.Callbacks("once memory").add(function() {
                    Ie.remove(e, [t + "queue", n])
                })
            })
        }
    }), we.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? we.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = we.queue(this, t, n);
                we._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && we.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                we.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = we.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Ie.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ue = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
        ze = ["Top", "Right", "Bottom", "Left"],
        Xe = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && we.contains(e.ownerDocument, e) && "none" === we.css(e, "display")
        },
        Ge = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
            return o
        },
        Ve = {};
    we.fn.extend({
        show: function() {
            return b(this, !0)
        },
        hide: function() {
            return b(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Xe(this) ? we(this).show() : we(this).hide()
            })
        }
    });
    var Ke = /^(?:checkbox|radio)$/i,
        Ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Qe = /^$|^module$|\/(?:java|ecma)script/i,
        Je = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td;
    var Ze, et, tt = /<|&#?\w+;/;
    Ze = se.createDocumentFragment().appendChild(se.createElement("div")), (et = se.createElement("input")).setAttribute("type", "radio"), et.setAttribute("checked", "checked"), et.setAttribute("name", "t"), Ze.appendChild(et), ve.checkClone = Ze.cloneNode(!0).cloneNode(!0).lastChild.checked, Ze.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!Ze.cloneNode(!0).lastChild.defaultValue;
    var nt = se.documentElement,
        it = /^key/,
        ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rt = /^([^.]*)(?:\.(.+)|)/;
    we.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, u, l, c, f, h, d, p, m, g = Ie.get(t);
            if (g)
                for (n.handler && (n = (r = n).handler, o = r.selector), o && we.find.matchesSelector(nt, o), n.guid || (n.guid = we.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                        return void 0 !== we && we.event.triggered !== e.type ? we.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(Le) || [""]).length; l--;) d = m = (a = rt.exec(e[l]) || [])[1], p = (a[2] || "").split(".").sort(), d && (f = we.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = we.event.special[d] || {}, c = we.extend({
                    type: d,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && we.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (h = u[d]) || ((h = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, c) : h.push(c), we.event.global[d] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, u, l, c, f, h, d, p, m, g = Ie.hasData(e) && Ie.get(e);
            if (g && (u = g.events)) {
                for (l = (t = (t || "").match(Le) || [""]).length; l--;)
                    if (d = m = (a = rt.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
                        for (f = we.event.special[d] || {}, h = u[d = (i ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) c = h[r], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(r, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || we.removeEvent(e, d, g.handle), delete u[d])
                    } else
                        for (d in u) we.event.remove(e, d + t[l], n, i, !0);
                we.isEmptyObject(u) && Ie.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s, a = we.event.fix(e),
                u = new Array(arguments.length),
                l = (Ie.get(this, "events") || {})[a.type] || [],
                c = we.event.special[a.type] || {};
            for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = we.event.handlers.call(this, a, l), t = 0;
                    (o = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((we.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, u)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (r = [], s = {}, n = 0; n < u; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < we(o, this).index(l) : we.find(o, this, null, [l]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return l = this, u < t.length && a.push({
                elem: l,
                handlers: t.slice(u)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(we.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: ye(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[we.expando] ? e : new we.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === k() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && l(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return l(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, we.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, we.Event = function(e, t) {
        if (!(this instanceof we.Event)) return new we.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? T : E, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && we.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[we.expando] = !0
    }, we.Event.prototype = {
        constructor: we.Event,
        isDefaultPrevented: E,
        isPropagationStopped: E,
        isImmediatePropagationStopped: E,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = T, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = T, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = T, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, we.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && it.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ot.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, we.event.addProp), we.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        we.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === n || we.contains(n, i)) || (e.type = o.origType, t = o.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), we.fn.extend({
        on: function(e, t, n, i) {
            return D(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return D(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, we(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = E), this.each(function() {
                we.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }
    });
    var st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        at = /<script|<style|<link/i,
        ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
        lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    we.extend({
        htmlPrefilter: function(e) {
            return e.replace(st, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0),
                u = we.contains(e.ownerDocument, e);
            if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || we.isXMLDoc(e)))
                for (s = x(a), i = 0, o = (r = x(e)).length; i < o; i++) L(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || x(e), s = s || x(a), i = 0, o = r.length; i < o; i++) j(r[i], s[i]);
                else j(e, a);
            return 0 < (s = x(a, "script")).length && w(s, !u && x(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, o = we.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (We(n)) {
                    if (t = n[Ie.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? we.event.remove(n, i) : we.removeEvent(n, i, t.handle);
                        n[Ie.expando] = void 0
                    }
                    n[Re.expando] && (n[Re.expando] = void 0)
                }
        }
    }), we.fn.extend({
        detach: function(e) {
            return q(this, e, !0)
        },
        remove: function(e) {
            return q(this, e)
        },
        text: function(e) {
            return Oe(this, function(e) {
                return void 0 === e ? we.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return M(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || S(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return M(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return M(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return M(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (we.cleanData(x(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return we.clone(this, e, t)
            })
        },
        html: function(e) {
            return Oe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !at.test(e) && !Je[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = we.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (we.cleanData(x(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return M(this, arguments, function(e) {
                var t = this.parentNode;
                we.inArray(this, n) < 0 && (we.cleanData(x(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), we.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        we.fn[e] = function(e) {
            for (var t, n = [], i = we(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), we(i[r])[s](t), ce.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var ct = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
        ft = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        ht = new RegExp(ze.join("|"), "i");
    ! function() {
        function e() {
            if (u) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(a).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), u.style.right = "60%", r = 36 === t(e.right), i = 36 === t(e.width), u.style.position = "absolute", o = 36 === u.offsetWidth || "absolute", nt.removeChild(a), u = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, i, o, r, s, a = se.createElement("div"),
            u = se.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === u.style.backgroundClip, we.extend(ve, {
            boxSizingReliable: function() {
                return e(), i
            },
            pixelBoxStyles: function() {
                return e(), r
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), o
            }
        }))
    }();
    var dt = /^(none|table(?!-c[ea]).+)/,
        pt = /^--/,
        mt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        gt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        vt = ["Webkit", "Moz", "ms"],
        yt = se.createElement("div").style;
    we.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = O(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = d(t),
                    u = pt.test(t),
                    l = e.style;
                if (u || (t = W(a)), s = we.cssHooks[t] || we.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                "string" == (r = typeof n) && (o = Ue.exec(n)) && o[1] && (n = v(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (we.cssNumber[a] ? "" : "px")), ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = d(t);
            return pt.test(t) || (t = W(a)), (s = we.cssHooks[t] || we.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = O(e, t, i)), "normal" === o && t in gt && (o = gt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), we.each(["height", "width"], function(e, a) {
        we.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !dt.test(we.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, a, n) : Ge(e, mt, function() {
                    return F(e, a, n)
                })
            },
            set: function(e, t, n) {
                var i, o = ft(e),
                    r = "border-box" === we.css(e, "boxSizing", !1, o),
                    s = n && R(e, a, n, r, o);
                return r && ve.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - R(e, a, "border", !1, o) - .5)), s && (i = Ue.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = we.css(e, a)), I(e, t, s)
            }
        }
    }), we.cssHooks.marginLeft = H(ve.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), we.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        we.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ze[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== o && (we.cssHooks[o + r].set = I)
    }), we.fn.extend({
        css: function(e, t) {
            return Oe(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = ft(e), o = t.length; s < o; s++) r[t[s]] = we.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? we.style(e, t, n) : we.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), (we.Tween = B).prototype = {
        constructor: B,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || we.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (we.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = t = we.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = we.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                we.fx.step[e.prop] ? we.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[we.cssProps[e.prop]] && !we.cssHooks[e.prop] ? e.elem[e.prop] = e.now : we.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, we.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, we.fx = B.prototype.init, we.fx.step = {};
    var bt, xt, wt, _t, Ct = /^(?:toggle|show|hide)$/,
        Tt = /queueHooks$/;
    we.Animation = we.extend(K, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return v(n.elem, e, Ue.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                ye(e) ? (t = e, e = ["*"]) : e = e.match(Le);
                for (var n, i = 0, o = e.length; i < o; i++) n = e[i], K.tweeners[n] = K.tweeners[n] || [], K.tweeners[n].unshift(t)
            },
            prefilters: [G],
            prefilter: function(e, t) {
                t ? K.prefilters.unshift(e) : K.prefilters.push(e)
            }
        }), we.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? we.extend({}, e) : {
                complete: n || !n && t || ye(e) && e,
                duration: e,
                easing: n && t || t && !ye(t) && t
            };
            return we.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in we.fx.speeds ? i.duration = we.fx.speeds[i.duration] : i.duration = we.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ye(i.old) && i.old.call(this), i.queue && we.dequeue(this, i.queue)
            }, i
        }, we.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Xe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(t, e, n, i) {
                var o = we.isEmptyObject(t),
                    r = we.speed(e, n, i),
                    s = function() {
                        var e = K(this, we.extend({}, t), r);
                        (o || Ie.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(o, e, r) {
                var s = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                    var e = !0,
                        t = null != o && o + "queueHooks",
                        n = we.timers,
                        i = Ie.get(this);
                    if (t) i[t] && i[t].stop && s(i[t]);
                    else
                        for (t in i) i[t] && i[t].stop && Tt.test(t) && s(i[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                    !e && r || we.dequeue(this, o)
                })
            },
            finish: function(s) {
                return !1 !== s && (s = s || "fx"), this.each(function() {
                    var e, t = Ie.get(this),
                        n = t[s + "queue"],
                        i = t[s + "queueHooks"],
                        o = we.timers,
                        r = n ? n.length : 0;
                    for (t.finish = !0, we.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), we.each(["toggle", "show", "hide"], function(e, i) {
            var o = we.fn[i];
            we.fn[i] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(z(i, !0), e, t, n)
            }
        }), we.each({
            slideDown: z("show"),
            slideUp: z("hide"),
            slideToggle: z("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, i) {
            we.fn[e] = function(e, t, n) {
                return this.animate(i, e, t, n)
            }
        }), we.timers = [], we.fx.tick = function() {
            var e, t = 0,
                n = we.timers;
            for (bt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || we.fx.stop(), bt = void 0
        }, we.fx.timer = function(e) {
            we.timers.push(e), we.fx.start()
        }, we.fx.interval = 13, we.fx.start = function() {
            xt || (xt = !0, $())
        }, we.fx.stop = function() {
            xt = null
        }, we.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, we.fn.delay = function(i, e) {
            return i = we.fx && we.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
                var n = C.setTimeout(e, i);
                t.stop = function() {
                    C.clearTimeout(n)
                }
            })
        }, wt = se.createElement("input"), _t = se.createElement("select").appendChild(se.createElement("option")), wt.type = "checkbox", ve.checkOn = "" !== wt.value, ve.optSelected = _t.selected, (wt = se.createElement("input")).value = "t", wt.type = "radio",
        ve.radioValue = "t" === wt.value;
    var Et, kt = we.expr.attrHandle;
    we.fn.extend({
        attr: function(e, t) {
            return Oe(this, we.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                we.removeAttr(this, e)
            })
        }
    }), we.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? we.prop(e, t, n) : (1 === r && we.isXMLDoc(e) || (o = we.attrHooks[t.toLowerCase()] || (we.expr.match.bool.test(t) ? Et : void 0)), void 0 !== n ? null === n ? void we.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = we.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ve.radioValue && "radio" === t && l(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match(Le);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), Et = {
        set: function(e, t, n) {
            return !1 === t ? we.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, we.each(we.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = kt[t] || we.find.attr;
        kt[t] = function(e, t, n) {
            var i, o, r = t.toLowerCase();
            return n || (o = kt[r], kt[r] = i, i = null != s(e, t, n) ? r : null, kt[r] = o), i
        }
    });
    var Dt = /^(?:input|select|textarea|button)$/i,
        St = /^(?:a|area)$/i;
    we.fn.extend({
        prop: function(e, t) {
            return Oe(this, we.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[we.propFix[e] || e]
            })
        }
    }), we.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && we.isXMLDoc(e) || (t = we.propFix[t] || t, o = we.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = we.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Dt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ve.optSelected || (we.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), we.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        we.propFix[this.toLowerCase()] = this
    }), we.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a, u = 0;
            if (ye(t)) return this.each(function(e) {
                we(this).addClass(t.call(this, e, Q(this)))
            });
            if ((e = J(t)).length)
                for (; n = this[u++];)
                    if (o = Q(n), i = 1 === n.nodeType && " " + Y(o) + " ") {
                        for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = Y(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a, u = 0;
            if (ye(t)) return this.each(function(e) {
                we(this).removeClass(t.call(this, e, Q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = J(t)).length)
                for (; n = this[u++];)
                    if (o = Q(n), i = 1 === n.nodeType && " " + Y(o) + " ") {
                        for (s = 0; r = e[s++];)
                            for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        o !== (a = Y(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var r = typeof o,
                s = "string" === r || Array.isArray(o);
            return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : ye(o) ? this.each(function(e) {
                we(this).toggleClass(o.call(this, e, Q(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0, n = we(this), i = J(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== o && "boolean" !== r || ((e = Q(this)) && Ie.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : Ie.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + Y(Q(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var At = /\r/g;
    we.fn.extend({
        val: function(n) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = ye(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, we(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = we.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = we.valHooks[this.type] || we.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = we.valHooks[t.type] || we.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(At, "") : null == e ? "" : e : void 0
        }
    }), we.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = we.find.attr(e, "value");
                    return null != t ? t : Y(we.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options,
                        r = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        u = s ? r + 1 : o.length;
                    for (i = r < 0 ? u : s ? r : 0; i < u; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup"))) {
                            if (t = we(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = we.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < we.inArray(we.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), we.each(["radio", "checkbox"], function() {
        we.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < we.inArray(we(e).val(), t)
            }
        }, ve.checkOn || (we.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), ve.focusin = "onfocusin" in C;
    var Nt = /^(?:focusinfocus|focusoutblur)$/,
        jt = function(e) {
            e.stopPropagation()
        };
    we.extend(we.event, {
        trigger: function(e, t, n, i) {
            var o, r, s, a, u, l, c, f, h = [n || se],
                d = pe.call(e, "type") ? e.type : e,
                p = pe.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = f = s = n = n || se, 3 !== n.nodeType && 8 !== n.nodeType && !Nt.test(d + we.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[we.expando] ? e : new we.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : we.makeArray(t, [e]), c = we.event.special[d] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !be(n)) {
                    for (a = c.delegateType || d, Nt.test(a + d) || (r = r.parentNode); r; r = r.parentNode) h.push(r), s = r;
                    s === (n.ownerDocument || se) && h.push(s.defaultView || s.parentWindow || C)
                }
                for (o = 0;
                    (r = h[o++]) && !e.isPropagationStopped();) f = r, e.type = 1 < o ? a : c.bindType || d, (l = (Ie.get(r, "events") || {})[e.type] && Ie.get(r, "handle")) && l.apply(r, t), (l = u && r[u]) && l.apply && We(r) && (e.result = l.apply(r, t), !1 === e.result && e.preventDefault());
                return e.type = d, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), t) || !We(n) || u && ye(n[d]) && !be(n) && ((s = n[u]) && (n[u] = null), we.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, jt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, jt), we.event.triggered = void 0, s && (n[u] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var i = we.extend(new we.Event, n, {
                type: e,
                isSimulated: !0
            });
            we.event.trigger(i, null, t)
        }
    }), we.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                we.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return we.event.trigger(e, t, n, !0)
        }
    }), ve.focusin || we.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var o = function(e) {
            we.event.simulate(i, e.target, we.event.fix(e))
        };
        we.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Ie.access(e, i);
                t || e.addEventListener(n, o, !0), Ie.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Ie.access(e, i) - 1;
                t ? Ie.access(e, i, t) : (e.removeEventListener(n, o, !0), Ie.remove(e, i))
            }
        }
    });
    var Lt = C.location,
        Mt = Date.now(),
        qt = /\?/;
    we.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (C) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || we.error("Invalid XML: " + e), t
    };
    var Ot = /\[\]$/,
        Ht = /\r?\n/g,
        Pt = /^(?:submit|button|image|reset|file)$/i,
        Wt = /^(?:input|select|textarea|keygen)/i;
    we.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                var n = ye(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !we.isPlainObject(e)) we.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) Z(n, e[n], t, o);
        return i.join("&")
    }, we.fn.extend({
        serialize: function() {
            return we.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = we.prop(this, "elements");
                return e ? we.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !we(this).is(":disabled") && Wt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Ke.test(e))
            }).map(function(e, t) {
                var n = we(this).val();
                return null == n ? null : Array.isArray(n) ? we.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ht, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ht, "\r\n")
                }
            }).get()
        }
    });
    var It = /%20/g,
        Rt = /#.*$/,
        Ft = /([?&])_=[^&]*/,
        Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ut = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        Xt = {},
        Gt = {},
        Vt = "*/".concat("*"),
        Kt = se.createElement("a");
    Kt.href = Lt.href, we.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Lt.href,
            type: "GET",
            isLocal: $t.test(Lt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": we.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ne(ne(e, we.ajaxSettings), t) : ne(we.ajaxSettings, e)
        },
        ajaxPrefilter: ee(Xt),
        ajaxTransport: ee(Gt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var o, r, s, a, u, l = t;
                p || (p = !0, d && C.clearTimeout(d), c = void 0, h = i || "", _.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (a = ie(g, _, n)), a = oe(g, a, _, o), o ? (g.ifModified && ((u = _.getResponseHeader("Last-Modified")) && (we.lastModified[f] = u), (u = _.getResponseHeader("etag")) && (we.etag[f] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = a.state, r = a.data, o = !(s = a.error))) : (s = l, !e && l || (l = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || l) + "", o ? b.resolveWith(v, [r, l, _]) : b.rejectWith(v, [_, l, s]), _.statusCode(w), w = void 0, m && y.trigger(o ? "ajaxSuccess" : "ajaxError", [_, g, o ? r : s]), x.fireWith(v, [_, l]), m && (y.trigger("ajaxComplete", [_, g]), --we.active || we.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, h, i, d, o, p, m, r, s, g = we.ajaxSetup({}, t),
                v = g.context || g,
                y = g.context && (v.nodeType || v.jquery) ? we(v) : we.event,
                b = we.Deferred(),
                x = we.Callbacks("once memory"),
                w = g.statusCode || {},
                a = {},
                u = {},
                l = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!i)
                                for (i = {}; t = Bt.exec(h);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return p ? h : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = u[e.toLowerCase()] = u[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (p) _.always(e[_.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return c && c.abort(t), n(0, t), this
                    }
                };
            if (b.promise(_), g.url = ((e || g.url || Lt.href) + "").replace(zt, Lt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(Le) || [""], null == g.crossDomain) {
                o = se.createElement("a");
                try {
                    o.href = g.url, o.href = o.href, g.crossDomain = Kt.protocol + "//" + Kt.host != o.protocol + "//" + o.host
                } catch (C) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = we.param(g.data, g.traditional)), te(Xt, g, t, _), p) return _;
            for (r in (m = we.event && g.global) && 0 == we.active++ && we.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Ut.test(g.type), f = g.url.replace(Rt, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(It, "+")) : (s = g.url.slice(f.length), g.data && (g.processData || "string" == typeof g.data) && (f += (qt.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (f = f.replace(Ft, "$1"), s = (qt.test(f) ? "&" : "?") + "_=" + Mt++ + s), g.url = f + s), g.ifModified && (we.lastModified[f] && _.setRequestHeader("If-Modified-Since", we.lastModified[f]), we.etag[f] && _.setRequestHeader("If-None-Match", we.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && _.setRequestHeader("Content-Type", g.contentType), _.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : g.accepts["*"]), g.headers) _.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, _, g) || p)) return _.abort();
            if (l = "abort", x.add(g.complete), _.done(g.success), _.fail(g.error), c = te(Gt, g, t, _)) {
                if (_.readyState = 1, m && y.trigger("ajaxSend", [_, g]), p) return _;
                g.async && 0 < g.timeout && (d = C.setTimeout(function() {
                    _.abort("timeout")
                }, g.timeout));
                try {
                    p = !1, c.send(a, n)
                } catch (C) {
                    if (p) throw C;
                    n(-1, C)
                }
            } else n(-1, "No Transport");
            return _
        },
        getJSON: function(e, t, n) {
            return we.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return we.get(e, void 0, t, "script")
        }
    }), we.each(["get", "post"], function(e, o) {
        we[o] = function(e, t, n, i) {
            return ye(t) && (i = i || n, n = t, t = void 0), we.ajax(we.extend({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            }, we.isPlainObject(e) && e))
        }
    }), we._evalUrl = function(e) {
        return we.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, we.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ye(e) && (e = e.call(this[0])), t = we(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return ye(n) ? this.each(function(e) {
                we(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = we(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = ye(t);
            return this.each(function(e) {
                we(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                we(this).replaceWith(this.childNodes)
            }), this
        }
    }), we.expr.pseudos.hidden = function(e) {
        return !we.expr.pseudos.visible(e)
    }, we.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, we.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (C) {}
    };
    var Yt = {
            0: 200,
            1223: 204
        },
        Qt = we.ajaxSettings.xhr();
    ve.cors = !!Qt && "withCredentials" in Qt, ve.ajax = Qt = !!Qt, we.ajaxTransport(function(o) {
        var r, s;
        if (ve.cors || Qt && !o.crossDomain) return {
            send: function(e, t) {
                var n, i = o.xhr();
                if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (n in o.xhrFields) i[n] = o.xhrFields[n];
                for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                r = function(e) {
                    return function() {
                        r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Yt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = r(), s = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                    4 === i.readyState && C.setTimeout(function() {
                        r && s()
                    })
                }, r = r("abort");
                try {
                    i.send(o.hasContent && o.data || null)
                } catch (C) {
                    if (r) throw C
                }
            },
            abort: function() {
                r && r()
            }
        }
    }), we.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), we.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return we.globalEval(e), e
            }
        }
    }), we.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), we.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = we("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function(e) {
                    i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), se.head.appendChild(i[0])
            },
            abort: function() {
                o && o()
            }
        }
    });
    var Jt, Zt = [],
        en = /(=)\?(?=&|$)|\?\?/;
    we.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Zt.pop() || we.expando + "_" + Mt++;
            return this[e] = !0, e
        }
    }), we.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, r, s = !1 !== e.jsonp && (en.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ye(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(en, "$1" + i) : !1 !== e.jsonp && (e.url += (qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return r || we.error(i + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = C[i], C[i] = function() {
            r = arguments
        }, n.always(function() {
            void 0 === o ? we(C).removeProp(i) : C[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Zt.push(i)), r && ye(o) && o(r[0]), r = o = void 0
        }), "script"
    }), ve.createHTMLDocument = ((Jt = se.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), we.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (ve.createHTMLDocument ? ((i = (t = se.implementation.createHTMLDocument("")).createElement("base")).href = se.location.href, t.head.appendChild(i)) : t = se), r = !n && [], (o = De.exec(e)) ? [t.createElement(o[1])] : (o = _([e], t, r), r && r.length && we(r).remove(), we.merge([], o.childNodes)));
        var i, o, r
    }, we.fn.load = function(e, t, n) {
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = Y(e.slice(a)), e = e.slice(0, a)), ye(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && we.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? we("<div>").append(we.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, we.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        we.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), we.expr.pseudos.animated = function(t) {
        return we.grep(we.timers, function(e) {
            return t === e.elem
        }).length
    }, we.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, u, l = we.css(e, "position"),
                c = we(e),
                f = {};
            "static" === l && (e.style.position = "relative"), a = c.offset(), r = we.css(e, "top"), u = we.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (r + u).indexOf("auto") ? (s = (i = c.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(u) || 0), ye(t) && (t = t.call(e, n, we.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + o), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, we.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                we.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === we.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === we.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = we(e).offset()).top += we.css(e, "borderTopWidth", !0), o.left += we.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - we.css(i, "marginTop", !0),
                    left: t.left - o.left - we.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === we.css(e, "position");) e = e.offsetParent;
                return e || nt
            })
        }
    }), we.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        we.fn[t] = function(e) {
            return Oe(this, function(e, t, n) {
                var i;
                if (be(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[o] : e[t];
                i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), we.each(["top", "left"], function(e, n) {
        we.cssHooks[n] = H(ve.pixelPosition, function(e, t) {
            if (t) return t = O(e, n), ct.test(t) ? we(e).position()[n] + "px" : t
        })
    }), we.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        we.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, r) {
            we.fn[r] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return Oe(this, function(e, t, n) {
                    var i;
                    return be(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? we.css(e, t, o) : we.style(e, t, n, o)
                }, a, n ? e : void 0, n)
            }
        })
    }), we.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        we.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), we.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), we.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), we.proxy = function(e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), ye(e)) return i = ue.call(arguments, 2), (o = function() {
            return e.apply(t || this, i.concat(ue.call(arguments)))
        }).guid = e.guid = e.guid || we.guid++, o
    }, we.holdReady = function(e) {
        e ? we.readyWait++ : we.ready(!0)
    }, we.isArray = Array.isArray, we.parseJSON = JSON.parse, we.nodeName = l, we.isFunction = ye, we.isWindow = be, we.camelCase = d, we.type = g, we.now = Date.now, we.isNumeric = function(e) {
        var t = we.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return we
    });
    var tn = C.jQuery,
        nn = C.$;
    return we.noConflict = function(e) {
        return C.$ === we && (C.$ = nn), e && C.jQuery === we && (C.jQuery = tn), we
    }, e || (C.jQuery = C.$ = we), we
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(k) {
    k.ui = k.ui || {}, k.ui.version = "1.12.1";
    var e, r, n = 0,
        a = Array.prototype.slice;
    k.cleanData = (r = k.cleanData, function(e) {
            var t, n, i;
            for (i = 0; null != (n = e[i]); i++) try {
                (t = k._data(n, "events")) && t.remove && k(n).triggerHandler("remove")
            } catch (o) {}
            r(e)
        }), k.widget = function(e, n, t) {
            var i, o, r, s = {},
                a = e.split(".")[0],
                u = a + "-" + (e = e.split(".")[1]);
            return t || (t = n, n = k.Widget), k.isArray(t) && (t = k.extend.apply(null, [{}].concat(t))), k.expr[":"][u.toLowerCase()] = function(e) {
                return !!k.data(e, u)
            }, k[a] = k[a] || {}, i = k[a][e], o = k[a][e] = function(e, t) {
                return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new o(e, t)
            }, k.extend(o, i, {
                version: t.version,
                _proto: k.extend({}, t),
                _childConstructors: []
            }), (r = new n).options = k.widget.extend({}, r.options), k.each(t, function(t, r) {
                return k.isFunction(r) ? void(s[t] = function() {
                    function i() {
                        return n.prototype[t].apply(this, arguments)
                    }

                    function o(e) {
                        return n.prototype[t].apply(this, e)
                    }
                    return function() {
                        var e, t = this._super,
                            n = this._superApply;
                        return this._super = i, this._superApply = o, e = r.apply(this, arguments), this._super = t, this._superApply = n, e
                    }
                }()) : void(s[t] = r)
            }), o.prototype = k.widget.extend(r, {
                widgetEventPrefix: i && r.widgetEventPrefix || e
            }, s, {
                constructor: o,
                namespace: a,
                widgetName: e,
                widgetFullName: u
            }), i ? (k.each(i._childConstructors, function(e, t) {
                var n = t.prototype;
                k.widget(n.namespace + "." + n.widgetName, o, t._proto)
            }), delete i._childConstructors) : n._childConstructors.push(o), k.widget.bridge(e, o), o
        }, k.widget.extend = function(e) {
            for (var t, n, i = a.call(arguments, 1), o = 0, r = i.length; o < r; o++)
                for (t in i[o]) n = i[o][t], i[o].hasOwnProperty(t) && void 0 !== n && (e[t] = k.isPlainObject(n) ? k.isPlainObject(e[t]) ? k.widget.extend({}, e[t], n) : k.widget.extend({}, n) : n);
            return e
        }, k.widget.bridge = function(r, t) {
            var s = t.prototype.widgetFullName || r;
            k.fn[r] = function(n) {
                var e = "string" == typeof n,
                    i = a.call(arguments, 1),
                    o = this;
                return e ? this.length || "instance" !== n ? this.each(function() {
                    var e, t = k.data(this, s);
                    return "instance" === n ? (o = t, !1) : t ? k.isFunction(t[n]) && "_" !== n.charAt(0) ? (e = t[n].apply(t, i)) !== t && void 0 !== e ? (o = e && e.jquery ? o.pushStack(e.get()) : e, !1) : void 0 : k.error("no such method '" + n + "' for " + r + " widget instance") : k.error("cannot call methods on " + r + " prior to initialization; attempted to call method '" + n + "'")
                }) : o = void 0 : (i.length && (n = k.widget.extend.apply(null, [n].concat(i))), this.each(function() {
                    var e = k.data(this, s);
                    e ? (e.option(n || {}), e._init && e._init()) : k.data(this, s, new t(n, this))
                })), o
            }
        }, k.Widget = function() {}, k.Widget._childConstructors = [], k.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(e, t) {
                t = k(t || this.defaultElement || this)[0], this.element = k(t), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = k(), this.hoverable = k(), this.focusable = k(), this.classesElementLookup = {}, t !== this && (k.data(t, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === t && this.destroy()
                    }
                }), this.document = k(t.style ? t.ownerDocument : t.document || t), this.window = k(this.document[0].defaultView || this.document[0].parentWindow)), this.options = k.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: k.noop,
            _create: k.noop,
            _init: k.noop,
            destroy: function() {
                var n = this;
                this._destroy(), k.each(this.classesElementLookup, function(e, t) {
                    n._removeClass(t, e)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: k.noop,
            widget: function() {
                return this.element
            },
            option: function(e, t) {
                var n, i, o, r = e;
                if (0 === arguments.length) return k.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (r = {}, e = (n = e.split(".")).shift(), n.length) {
                        for (i = r[e] = k.widget.extend({}, this.options[e]), o = 0; n.length - 1 > o; o++) i[n[o]] = i[n[o]] || {}, i = i[n[o]];
                        if (e = n.pop(), 1 === arguments.length) return void 0 === i[e] ? null : i[e];
                        i[e] = t
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        r[e] = t
                    }
                return this._setOptions(r), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
            },
            _setOptionClasses: function(e) {
                var t, n, i;
                for (t in e) i = this.classesElementLookup[t], e[t] !== this.options.classes[t] && i && i.length && (n = k(i.get()), this._removeClass(i, t), n.addClass(this._classes({
                    element: n,
                    keys: t,
                    classes: e,
                    add: !0
                })))
            },
            _setOptionDisabled: function(e) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(o) {
                function e(e, t) {
                    var n, i;
                    for (i = 0; e.length > i; i++) n = s.classesElementLookup[e[i]] || k(), n = o.add ? k(k.unique(n.get().concat(o.element.get()))) : k(n.not(o.element).get()), s.classesElementLookup[e[i]] = n, r.push(e[i]), t && o.classes[e[i]] && r.push(o.classes[e[i]])
                }
                var r = [],
                    s = this;
                return o = k.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, o), this._on(o.element, {
                    remove: "_untrackClassesElement"
                }), o.keys && e(o.keys.match(/\S+/g) || [], !0), o.extra && e(o.extra.match(/\S+/g) || []), r.join(" ")
            },
            _untrackClassesElement: function(n) {
                var i = this;
                k.each(i.classesElementLookup, function(e, t) {
                    -1 !== k.inArray(n.target, t) && (i.classesElementLookup[e] = k(t.not(n.target).get()))
                })
            },
            _removeClass: function(e, t, n) {
                return this._toggleClass(e, t, n, !1)
            },
            _addClass: function(e, t, n) {
                return this._toggleClass(e, t, n, !0)
            },
            _toggleClass: function(e, t, n, i) {
                i = "boolean" == typeof i ? i : n;
                var o = "string" == typeof e || null === e,
                    r = {
                        extra: o ? t : n,
                        keys: o ? e : t,
                        element: o ? this.element : e,
                        add: i
                    };
                return r.element.toggleClass(this._classes(r), i), this
            },
            _on: function(s, a, e) {
                var u, l = this;
                "boolean" != typeof s && (e = a, a = s, s = !1), e ? (a = u = k(a), this.bindings = this.bindings.add(a)) : (e = a, a = this.element, u = this.widget()), k.each(e, function(e, t) {
                    function n() {
                        return s || !0 !== l.options.disabled && !k(this).hasClass("ui-state-disabled") ? ("string" == typeof t ? l[t] : t).apply(l, arguments) : void 0
                    }
                    "string" != typeof t && (n.guid = t.guid = t.guid || n.guid || k.guid++);
                    var i = e.match(/^([\w:-]*)\s*(.*)$/),
                        o = i[1] + l.eventNamespace,
                        r = i[2];
                    r ? u.on(o, r, n) : a.on(o, n)
                })
            },
            _off: function(e, t) {
                t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(t).off(t), this.bindings = k(this.bindings.not(e).get()), this.focusable = k(this.focusable.not(e).get()), this.hoverable = k(this.hoverable.not(e).get())
            },
            _delay: function(e, t) {
                function n() {
                    return ("string" == typeof e ? i[e] : e).apply(i, arguments)
                }
                var i = this;
                return setTimeout(n, t || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        this._addClass(k(e.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(e) {
                        this._removeClass(k(e.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        this._addClass(k(e.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(e) {
                        this._removeClass(k(e.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(e, t, n) {
                var i, o, r = this.options[e];
                if (n = n || {}, (t = k.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), t.target = this.element[0], o = t.originalEvent)
                    for (i in o) i in t || (t[i] = o[i]);
                return this.element.trigger(t, n), !(k.isFunction(r) && !1 === r.apply(this.element[0], [t].concat(n)) || t.isDefaultPrevented())
            }
        }, k.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(r, s) {
            k.Widget.prototype["_" + r] = function(t, e, n) {
                "string" == typeof e && (e = {
                    effect: e
                });
                var i, o = e ? !0 === e || "number" == typeof e ? s : e.effect || s : r;
                "number" == typeof(e = e || {}) && (e = {
                    duration: e
                }), i = !k.isEmptyObject(e), e.complete = n, e.delay && t.delay(e.delay), i && k.effects && k.effects.effect[o] ? t[r](e) : o !== r && t[o] ? t[o](e.duration, e.easing, n) : t.queue(function(e) {
                    k(this)[r](), n && n.call(t[0]), e()
                })
            }
        }), k.widget,
        function() {
            function _(e, t, n) {
                return [parseFloat(e[0]) * (u.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (u.test(e[1]) ? n / 100 : 1)]
            }

            function C(e, t) {
                return parseInt(k.css(e, t), 10) || 0
            }

            function t(e) {
                var t = e[0];
                return 9 === t.nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : k.isWindow(t) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    }
                } : t.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: t.pageY,
                        left: t.pageX
                    }
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                }
            }
            var o, T = Math.max,
                E = Math.abs,
                i = /left|center|right/,
                r = /top|center|bottom/,
                s = /[\+\-]\d+(\.[\d]+)?%?/,
                a = /^\w+/,
                u = /%$/,
                n = k.fn.position;
            k.position = {
                scrollbarWidth: function() {
                    if (void 0 !== o) return o;
                    var e, t, n = k("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        i = n.children()[0];
                    return k("body").append(n), e = i.offsetWidth, n.css("overflow", "scroll"), e === (t = i.offsetWidth) && (t = n[0].clientWidth), n.remove(), o = e - t
                },
                getScrollInfo: function(e) {
                    var t = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        i = "scroll" === t || "auto" === t && e.width < e.element[0].scrollWidth;
                    return {
                        width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? k.position.scrollbarWidth() : 0,
                        height: i ? k.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(e) {
                    var t = k(e || window),
                        n = k.isWindow(t[0]),
                        i = !!t[0] && 9 === t[0].nodeType;
                    return {
                        element: t,
                        isWindow: n,
                        isDocument: i,
                        offset: !n && !i ? k(e).offset() : {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: t.scrollLeft(),
                        scrollTop: t.scrollTop(),
                        width: t.outerWidth(),
                        height: t.outerHeight()
                    }
                }
            }, k.fn.position = function(f) {
                if (!f || !f.of) return n.apply(this, arguments);
                f = k.extend({}, f);
                var h, d, p, m, g, e, v = k(f.of),
                    y = k.position.getWithinInfo(f.within),
                    b = k.position.getScrollInfo(y),
                    x = (f.collision || "flip").split(" "),
                    w = {};
                return e = t(v), v[0].preventDefault && (f.at = "left top"), d = e.width, p = e.height, m = e.offset, g = k.extend({}, m), k.each(["my", "at"], function() {
                    var e, t, n = (f[this] || "").split(" ");
                    1 === n.length && (n = i.test(n[0]) ? n.concat(["center"]) : r.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = i.test(n[0]) ? n[0] : "center", n[1] = r.test(n[1]) ? n[1] : "center", e = s.exec(n[0]), t = s.exec(n[1]), w[this] = [e ? e[0] : 0, t ? t[0] : 0], f[this] = [a.exec(n[0])[0], a.exec(n[1])[0]]
                }), 1 === x.length && (x[1] = x[0]), "right" === f.at[0] ? g.left += d : "center" === f.at[0] && (g.left += d / 2), "bottom" === f.at[1] ? g.top += p : "center" === f.at[1] && (g.top += p / 2), h = _(w.at, d, p), g.left += h[0], g.top += h[1], this.each(function() {
                    var n, e, s = k(this),
                        a = s.outerWidth(),
                        u = s.outerHeight(),
                        t = C(this, "marginLeft"),
                        i = C(this, "marginTop"),
                        o = a + t + C(this, "marginRight") + b.width,
                        r = u + i + C(this, "marginBottom") + b.height,
                        l = k.extend({}, g),
                        c = _(w.my, s.outerWidth(), s.outerHeight());
                    "right" === f.my[0] ? l.left -= a : "center" === f.my[0] && (l.left -= a / 2), "bottom" === f.my[1] ? l.top -= u : "center" === f.my[1] && (
                        l.top -= u / 2), l.left += c[0], l.top += c[1], n = {
                        marginLeft: t,
                        marginTop: i
                    }, k.each(["left", "top"], function(e, t) {
                        k.ui.position[x[e]] && k.ui.position[x[e]][t](l, {
                            targetWidth: d,
                            targetHeight: p,
                            elemWidth: a,
                            elemHeight: u,
                            collisionPosition: n,
                            collisionWidth: o,
                            collisionHeight: r,
                            offset: [h[0] + c[0], h[1] + c[1]],
                            my: f.my,
                            at: f.at,
                            within: y,
                            elem: s
                        })
                    }), f.using && (e = function(e) {
                        var t = m.left - l.left,
                            n = t + d - a,
                            i = m.top - l.top,
                            o = i + p - u,
                            r = {
                                target: {
                                    element: v,
                                    left: m.left,
                                    top: m.top,
                                    width: d,
                                    height: p
                                },
                                element: {
                                    element: s,
                                    left: l.left,
                                    top: l.top,
                                    width: a,
                                    height: u
                                },
                                horizontal: n < 0 ? "left" : 0 < t ? "right" : "center",
                                vertical: o < 0 ? "top" : 0 < i ? "bottom" : "middle"
                            };
                        d < a && d > E(t + n) && (r.horizontal = "center"), p < u && p > E(i + o) && (r.vertical = "middle"), r.important = T(E(t), E(n)) > T(E(i), E(o)) ? "horizontal" : "vertical", f.using.call(this, e, r)
                    }), s.offset(k.extend(l, {
                        using: e
                    }))
                })
            }, k.ui.position = {
                fit: {
                    left: function(e, t) {
                        var n, i = t.within,
                            o = i.isWindow ? i.scrollLeft : i.offset.left,
                            r = i.width,
                            s = e.left - t.collisionPosition.marginLeft,
                            a = o - s,
                            u = s + t.collisionWidth - r - o;
                        t.collisionWidth > r ? 0 < a && u <= 0 ? (n = e.left + a + t.collisionWidth - r - o, e.left += a - n) : e.left = 0 < u && a <= 0 ? o : u < a ? o + r - t.collisionWidth : o : 0 < a ? e.left += a : 0 < u ? e.left -= u : e.left = T(e.left - s, e.left)
                    },
                    top: function(e, t) {
                        var n, i = t.within,
                            o = i.isWindow ? i.scrollTop : i.offset.top,
                            r = t.within.height,
                            s = e.top - t.collisionPosition.marginTop,
                            a = o - s,
                            u = s + t.collisionHeight - r - o;
                        t.collisionHeight > r ? 0 < a && u <= 0 ? (n = e.top + a + t.collisionHeight - r - o, e.top += a - n) : e.top = 0 < u && a <= 0 ? o : u < a ? o + r - t.collisionHeight : o : 0 < a ? e.top += a : 0 < u ? e.top -= u : e.top = T(e.top - s, e.top)
                    }
                },
                flip: {
                    left: function(e, t) {
                        var n, i, o = t.within,
                            r = o.offset.left + o.scrollLeft,
                            s = o.width,
                            a = o.isWindow ? o.scrollLeft : o.offset.left,
                            u = e.left - t.collisionPosition.marginLeft,
                            l = u - a,
                            c = u + t.collisionWidth - s - a,
                            f = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                            h = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                            d = -2 * t.offset[0];
                        l < 0 ? ((n = e.left + f + h + d + t.collisionWidth - s - r) < 0 || E(l) > n) && (e.left += f + h + d) : 0 < c && ((0 < (i = e.left - t.collisionPosition.marginLeft + f + h + d - a) || c > E(i)) && (e.left += f + h + d))
                    },
                    top: function(e, t) {
                        var n, i, o = t.within,
                            r = o.offset.top + o.scrollTop,
                            s = o.height,
                            a = o.isWindow ? o.scrollTop : o.offset.top,
                            u = e.top - t.collisionPosition.marginTop,
                            l = u - a,
                            c = u + t.collisionHeight - s - a,
                            f = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                            h = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                            d = -2 * t.offset[1];
                        l < 0 ? ((i = e.top + f + h + d + t.collisionHeight - s - r) < 0 || E(l) > i) && (e.top += f + h + d) : 0 < c && ((0 < (n = e.top - t.collisionPosition.marginTop + f + h + d - a) || c > E(n)) && (e.top += f + h + d))
                    }
                },
                flipfit: {
                    left: function() {
                        k.ui.position.flip.left.apply(this, arguments), k.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        k.ui.position.flip.top.apply(this, arguments), k.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }(), k.ui.position, k.ui.keyCode = {
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
        }, k.fn.extend({
            uniqueId: (e = 0, function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && k(this).removeAttr("id")
                })
            }
        }), k.ui.safeActiveElement = function(e) {
            var t;
            try {
                t = e.activeElement
            } catch (a) {
                t = e.body
            }
            return t || (t = e.body), t.nodeName || (t = e.body), t
        }, k.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function(e) {
                        e.preventDefault()
                    },
                    "click .ui-menu-item": function(e) {
                        var t = k(e.target),
                            n = k(k.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && t.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), t.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(e) {
                        if (!this.previousFilter) {
                            var t = k(e.target).closest(".ui-menu-item"),
                                n = k(e.currentTarget);
                            t[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(e, t) {
                        var n = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(e, n)
                    },
                    blur: function(e) {
                        this._delay(function() {
                            !k.contains(this.element[0], k.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(e) {
                        this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function() {
                    var e = k(this);
                    e.data("ui-menu-submenu-caret") && e.remove()
                })
            },
            _keydown: function(e) {
                var t, n, i, o, r = !0;
                switch (e.keyCode) {
                    case k.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case k.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case k.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case k.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case k.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case k.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case k.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case k.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                        break;
                    case k.ui.keyCode.ENTER:
                    case k.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case k.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        r = !1, n = this.previousFilter || "", o = !1, i = 96 <= e.keyCode && e.keyCode <= 105 ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), i === n ? o = !0 : i = n + i, t = this._filterMenuItems(i), (t = o && -1 !== t.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : t).length || (i = String.fromCharCode(e.keyCode), t = this._filterMenuItems(i)), t.length ? (this.focus(e, t), this.previousFilter = i, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                r && e.preventDefault()
            },
            _activate: function(e) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
            },
            refresh: function() {
                var e, t, n, i, o = this,
                    r = this.options.icons.submenu,
                    s = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), t = s.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var e = k(this),
                        t = e.prev(),
                        n = k("<span>").data("ui-menu-submenu-caret", !0);
                    o._addClass(n, "ui-menu-icon", "ui-icon " + r), t.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", t.attr("id"))
                }), this._addClass(t, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = s.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                    var e = k(this);
                    o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content")
                }), i = (n = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(n, "ui-menu-item")._addClass(i, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !k.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(e, t) {
                if ("icons" === e) {
                    var n = this.element.find(".ui-menu-icon");
                    this._removeClass(n, null, this.options.icons.submenu)._addClass(n, null, t.submenu)
                }
                this._super(e, t)
            },
            _setOptionDisabled: function(e) {
                this._super(e), this.element.attr("aria-disabled", e + ""), this._toggleClass(null, "ui-state-disabled", !!e)
            },
            focus: function(e, t) {
                var n, i, o;
                this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), i = this.active.children(".ui-menu-item-wrapper"), this._addClass(i, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), o = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(o, null, "ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), (n = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                    item: t
                })
            },
            _scrollIntoView: function(e) {
                var t, n, i, o, r, s;
                this._hasScroll() && (t = parseFloat(k.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(k.css(this.activeMenu[0], "paddingTop")) || 0, i = e.offset().top - this.activeMenu.offset().top - t - n, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), s = e.outerHeight(), i < 0 ? this.activeMenu.scrollTop(o + i) : r < i + s && this.activeMenu.scrollTop(o + i - r + s))
            },
            blur: function(e, t) {
                t || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", e, {
                    item: this.active
                }), this.active = null)
            },
            _startOpening: function(e) {
                clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(e)
                }, this.delay))
            },
            _open: function(e) {
                var t = k.extend({ of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(t)
            },
            collapseAll: function(t, n) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var e = n ? this.element : k(t && t.target).closest(this.element.find(".ui-menu"));
                    e.length || (e = this.element), this._close(e), this.blur(t), this._removeClass(e.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = e
                }, this.delay)
            },
            _close: function(e) {
                e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function(e) {
                return !k(e.target).closest(".ui-menu").length
            },
            _isDivider: function(e) {
                return !/[^\-\u2014\u2013\s]/.test(e.text())
            },
            collapse: function(e) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function(e) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function() {
                    this.focus(e, t)
                }))
            },
            next: function(e) {
                this._move("next", "first", e)
            },
            previous: function(e) {
                this._move("prev", "last", e)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(e, t, n) {
                var i;
                this.active && (i = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), i && i.length && this.active || (i = this.activeMenu.find(this.options.items)[t]()), this.focus(n, i)
            },
            nextPage: function(e) {
                var t, n, i;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return (t = k(this)).offset().top - n - i < 0
                }), this.focus(e, t)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
            },
            previousPage: function(e) {
                var t, n, i;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return 0 < (t = k(this)).offset().top - n + i
                }), this.focus(e, t)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(e) {
                this.active = this.active || k(e.target).closest(".ui-menu-item");
                var t = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, t)
            },
            _filterMenuItems: function(e) {
                var t = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    n = RegExp("^" + t, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return n.test(k.trim(k(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        }), k.widget("ui.autocomplete", {
            version: "1.12.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var n, i, o, e = this.element[0].nodeName.toLowerCase(),
                    t = "textarea" === e,
                    r = "input" === e;
                this.isMultiLine = t || !r && this._isContentEditable(this.element), this.valueMethod = this.element[t || r ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(e) {
                        if (this.element.prop("readOnly")) i = o = n = !0;
                        else {
                            i = o = n = !1;
                            var t = k.ui.keyCode;
                            switch (e.keyCode) {
                                case t.PAGE_UP:
                                    n = !0, this._move("previousPage", e);
                                    break;
                                case t.PAGE_DOWN:
                                    n = !0, this._move("nextPage", e);
                                    break;
                                case t.UP:
                                    n = !0, this._keyEvent("previous", e);
                                    break;
                                case t.DOWN:
                                    n = !0, this._keyEvent("next", e);
                                    break;
                                case t.ENTER:
                                    this.menu.active && (n = !0, e.preventDefault(), this.menu.select(e));
                                    break;
                                case t.TAB:
                                    this.menu.active && this.menu.select(e);
                                    break;
                                case t.ESCAPE:
                                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                                    break;
                                default:
                                    i = !0, this._searchTimeout(e)
                            }
                        }
                    },
                    keypress: function(e) {
                        if (n) return n = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && e.preventDefault());
                        if (!i) {
                            var t = k.ui.keyCode;
                            switch (e.keyCode) {
                                case t.PAGE_UP:
                                    this._move("previousPage", e);
                                    break;
                                case t.PAGE_DOWN:
                                    this._move("nextPage", e);
                                    break;
                                case t.UP:
                                    this._keyEvent("previous", e);
                                    break;
                                case t.DOWN:
                                    this._keyEvent("next", e)
                            }
                        }
                    },
                    input: function(e) {
                        return o ? (o = !1, void e.preventDefault()) : void this._searchTimeout(e)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(e) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), void this._change(e))
                    }
                }), this._initSource(), this.menu = k("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function(e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur, this.element[0] !== k.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function(e, t) {
                        var n, i;
                        return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                            k(e.target).trigger(e.originalEvent)
                        })) : (i = t.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                            item: i
                        }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(i.value), void((n = t.item.attr("aria-label") || i.value) && k.trim(n).length && (this.liveRegion.children().hide(), k("<div>").text(n).appendTo(this.liveRegion))))
                    },
                    menuselect: function(e, t) {
                        var n = t.item.data("ui-autocomplete-item"),
                            i = this.previous;
                        this.element[0] !== k.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = i, this._delay(function() {
                            this.previous = i, this.selectedItem = n
                        })), !1 !== this._trigger("select", e, {
                            item: n
                        }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                    }
                }), this.liveRegion = k("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(e, t) {
                this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function(e) {
                var t = this.menu.element[0];
                return e.target === this.element[0] || e.target === t || k.contains(t, e.target)
            },
            _closeOnClickOutside: function(e) {
                this._isEventTargetInWidget(e) || this.close()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? k(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _initSource: function() {
                var n, i, o = this;
                k.isArray(this.options.source) ? (n = this.options.source, this.source = function(e, t) {
                    t(k.ui.autocomplete.filter(n, e.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, t) {
                    o.xhr && o.xhr.abort(), o.xhr = k.ajax({
                        url: i,
                        data: e,
                        dataType: "json",
                        success: function(e) {
                            t(e)
                        },
                        error: function() {
                            t([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(i) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var e = this.term === this._value(),
                        t = this.menu.element.is(":visible"),
                        n = i.altKey || i.ctrlKey || i.metaKey || i.shiftKey;
                    (!e || e && !t && !n) && (this.selectedItem = null, this.search(null, i))
                }, this.options.delay)
            },
            search: function(e, t) {
                return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0
            },
            _search: function(e) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: e
                }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return k.proxy(function(e) {
                    t === this.requestIndex && this.__response(e), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(e) {
                e && (e = this._normalize(e)), this._trigger("response", null, {
                    content: e
                }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
            },
            close: function(e) {
                this.cancelSearch = !0, this._close(e)
            },
            _close: function(e) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
            },
            _change: function(e) {
                this.previous !== this._value() && this._trigger("change", e, {
                    item: this.selectedItem
                })
            },
            _normalize: function(e) {
                return e.length && e[0].label && e[0].value ? e : k.map(e, function(e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : k.extend({}, e, {
                        label: e.label || e.value,
                        value: e.value || e.label
                    })
                })
            },
            _suggest: function(e) {
                var t = this.menu.element.empty();
                this._renderMenu(t, e), this.isNewMenu = !0, this.menu.refresh(), t.show(), this._resizeMenu(), t.position(k.extend({ of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(n, e) {
                var i = this;
                k.each(e, function(e, t) {
                    i._renderItemData(n, t)
                })
            },
            _renderItemData: function(e, t) {
                return this._renderItem(e, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function(e, t) {
                return k("<li>").append(k("<div>").text(t.label)).appendTo(e)
            },
            _move: function(e, t) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[e](t) : void this.search(null, t)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(e, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
            },
            _isContentEditable: function(e) {
                if (!e.length) return !1;
                var t = e.prop("contentEditable");
                return "inherit" === t ? this._isContentEditable(e.parent()) : "true" === t
            }
        }), k.extend(k.ui.autocomplete, {
            escapeRegex: function(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(e, t) {
                var n = RegExp(k.ui.autocomplete.escapeRegex(t), "i");
                return k.grep(e, function(e) {
                    return n.test(e.label || e.value || e)
                })
            }
        }), k.widget("ui.autocomplete", k.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(e) {
                        return e + (1 < e ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(e) {
                var t;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), k("<div>").text(t).appendTo(this.liveRegion))
            }
        }), k.ui.autocomplete, k.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var o = !1;
    k(document).on("mouseup", function() {
        o = !1
    }), k.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.on("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).on("click." + this.widgetName, function(e) {
                return !0 === k.data(e.target, t.widgetName + ".preventClickEvent") ? (k.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!o) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var t = this,
                    n = 1 === e.which,
                    i = !("string" != typeof this.options.cancel || !e.target.nodeName) && k(e.target).closest(this.options.cancel).length;
                return n && !i && this._mouseCapture(e) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    t.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? e.preventDefault() : (!0 === k.data(e.target, this.widgetName + ".preventClickEvent") && k.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return t._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return t._mouseUp(e)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), o = !0)), !0
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (k.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && k.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, o = !1, e.preventDefault()
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
});
var monkeyPatchAutocomplete = function(o) {
    o.ui.autocomplete.prototype._renderItem = function(e, t) {
        var n = new RegExp("^" + this.term, "i"),
            i = t.label.replace(n, "<span style='color:#444444;font-weight:normal;'>" + this.term + "</span>");
        return o("<li></li>").data("item.autocomplete", t).append("<div class='ui-menu-item-wrapper'>" + i + "</div>").appendTo(e)
    }, o.ui.menu.prototype.refresh = function() {
        var e = this;
        e.isMouseActive = !1, this.element.children("li:not(.ui-menu-item):has(div)").addClass("ui-menu-item").attr("role", "menuitem").children("div").addClass("ui-corner-all").attr("tabindex", -1).mousemove(function() {
            e.isMouseActive || (e.isMouseActive = !0)
        }).mouseleave(function() {
            e.isMouseActive && (e.isMouseActive = !1)
        })
    }
};
if (usasearch.config.host && usasearch.config.siteHandle) var saytUrl = usasearch.config.host + "/sayt?name=" + usasearch.config.siteHandle + "&";
else if ("undefined" != typeof usagov_sayt_url) saytUrl = usagov_sayt_url;
usasearch.config.autoSubmitOnSelect === undefined && (usasearch.config.autoSubmitOnSelect = !0), usasearch.jquery = jQuery.noConflict(!0), usasearch.jquery(function() {
    var n = usasearch.jquery;
    monkeyPatchAutocomplete(n);
    var e = document.createElement("div");
    e.id = "usasearch_sayt", n("body").append(e), usasearchSaytStyle = {
        background: "none",
        border: 0,
        display: "block",
        "float": "none",
        height: 0,
        lineHeight: 0,
        margin: 0,
        padding: 0,
        position: "static",
        width: 0
    }, n("#usasearch_sayt").css(usasearchSaytStyle), n(".usagov-search-autocomplete").autocomplete({
        appendTo: "#usasearch_sayt",
        source: function(e, t) {
            n.ajax({
                url: saytUrl + "q=" + encodeURIComponent(e.term),
                dataType: "jsonp",
                success: t
            })
        },
        minLength: 2,
        delay: 250,
        select: function(e, t) {
            n(".usagov-search-autocomplete").val(t.item.value.toString()), usasearch.config.autoSubmitOnSelect && n(this).closest("form").submit()
        },
        open: function() {
            n("#usasearch_sayt .ui-autocomplete").removeClass("ui-corner-all").addClass("ui-corner-bottom"), n("#usasearch_sayt .ui-autocomplete").css("z-index", 999999);
            var e = n(".usagov-search-autocomplete").outerWidth(!1) - n("#usasearch_sayt .ui-autocomplete").outerWidth(!1),
                t = n("#usasearch_sayt .ui-autocomplete").width();
            n("#usasearch_sayt .ui-autocomplete").css("width", t + e + "px")
        }
    })
});