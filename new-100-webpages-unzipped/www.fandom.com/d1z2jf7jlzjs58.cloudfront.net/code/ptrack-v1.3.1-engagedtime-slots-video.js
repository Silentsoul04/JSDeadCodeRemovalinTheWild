/*! parsely-js-api - v1.3.1 - 2019-06-07
 * http://www.parsely.com/
 * 2019 Parsely, Inc. */

! function() {
    function f(e) {
        return e < 10 ? "0" + e : e
    }

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
            var t = meta[e];
            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var i, n, o, a, r, s = gap,
            d = t[e];
        switch (d && "object" == typeof d && "function" == typeof d.toJSON && (d = d.toJSON(e)), "function" == typeof rep && (d = rep.call(t, e, d)), typeof d) {
            case "string":
                return quote(d);
            case "number":
                return isFinite(d) ? String(d) : "null";
            case "boolean":
            case "null":
                return String(d);
            case "object":
                if (!d) return "null";
                if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(d)) {
                    for (a = d.length, i = 0; i < a; i += 1) r[i] = str(i, d) || "null";
                    return o = 0 === r.length ? "[]" : gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + s + "]" : "[" + r.join(",") + "]", gap = s, o
                }
                if (rep && "object" == typeof rep)
                    for (a = rep.length, i = 0; i < a; i += 1) "string" == typeof(n = rep[i]) && (o = str(n, d)) && r.push(quote(n) + (gap ? ": " : ":") + o);
                else
                    for (n in d) Object.hasOwnProperty.call(d, n) && (o = str(n, d)) && r.push(quote(n) + (gap ? ": " : ":") + o);
                return o = 0 === r.length ? "{}" : gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + s + "}" : "{" + r.join(",") + "}", gap = s, o
        }
    }
    this.PARSELY || (this.PARSELY = {});
    var root = this.PARSELY;
    root.JSON || (root.JSON = window.JSON || {}), "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;
    "function" != typeof root.JSON.stringify && (root.JSON.stringify = function(e, t, i) {
        var n;
        if (gap = "", indent = "", "number" == typeof i)
            for (n = 0; n < i; n += 1) indent += " ";
        else "string" == typeof i && (indent = i);
        if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
        return str("", {
            "": e
        })
    }), "function" != typeof root.JSON.parse && (root.JSON.parse = function(text, reviver) {
        function walk(e, t) {
            var i, n, o = e[t];
            if (o && "object" == typeof o)
                for (i in o) Object.hasOwnProperty.call(o, i) && ((n = walk(o, i)) !== undefined ? o[i] = n : delete o[i]);
            return reviver.call(e, t, o)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(),
function() {
    this.PARSELY || (this.PARSELY = {});
    var e = this.PARSELY,
        t = !1,
        i = /xyz/.test(function() {
            xyz
        }) ? /\b_super\b/ : /.*/;
    e.Class = function() {}, e.Class.extend = function(e) {
        function n() {
            !t && this.init && this.init.apply(this, arguments)
        }
        var o = this.prototype;
        t = !0;
        var a = new this;
        t = !1;
        for (var r in e) a[r] = "function" == typeof e[r] && "function" == typeof o[r] && i.test(e[r]) ? function(e, t) {
            return function() {
                var i = this._super;
                this._super = o[e];
                var n = t.apply(this, arguments);
                return this._super = i, n
            }
        }(r, e[r]) : e[r];
        return n.prototype = a, n.constructor = n, n.extend = arguments.callee, n
    }
}(),
function(e, t) {
    "undefined" == typeof PARSELY && (PARSELY = {}), "object" == typeof module && "object" == typeof module.exports ? (module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    }, PARSELY.$ = PARSELY.jQuery = t(e, !0)) : PARSELY.$ = PARSELY.jQuery = t(e, !1)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e) {
        var t = e.length,
            i = h.type(e);
        return "function" !== i && !h.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function n(e) {
        var t;
        for (t in e)
            if (("data" !== t || !h.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function o(e, t, i, n) {
        if (h.acceptData(e)) {
            var o, a, r = h.expando,
                s = e.nodeType,
                d = s ? h.cache : e,
                c = s ? e[r] : e[r] && r;
            if (c && d[c] && (n || d[c].data) || i !== undefined || "string" != typeof t) return c || (c = s ? e[r] = u.pop() || h.guid++ : r), d[c] || (d[c] = s ? {} : {
                "toJSON": h.noop
            }), "object" != typeof t && "function" != typeof t || (n ? d[c] = h.extend(d[c], t) : d[c].data = h.extend(d[c].data, t)), a = d[c], n || (a.data || (a.data = {}), a = a.data), i !== undefined && (a[h.camelCase(t)] = i), "string" == typeof t ? null == (o = a[t]) && (o = a[h.camelCase(t)]) : o = a, o
        }
    }

    function a() {
        return !0
    }

    function r() {
        return !1
    }

    function s() {
        try {
            return x.activeElement
        } catch (e) {}
    }

    function d(e, t, i, n) {
        var o;
        if (h.isArray(t)) h.each(t, function(t, o) {
            i || D.test(e) ? n(e, o) : d(e + "[" + ("object" == typeof o ? t : "") + "]", o, i, n)
        });
        else if (i || "object" !== h.type(t)) n(e, t);
        else
            for (o in t) d(e + "[" + o + "]", t[o], i, n)
    }
    var u = [],
        c = u.slice,
        l = (u.concat, u.push),
        f = (u.indexOf, {}),
        p = f.toString,
        g = f.hasOwnProperty,
        v = {},
        m = "1.11.1 -deprecated,-css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl",
        h = function(e, t) {
            return new h.fn.init(e, t)
        },
        y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        b = /^-ms-/,
        _ = /-([\da-z])/gi,
        w = function(e, t) {
            return t.toUpperCase()
        };
    h.fn = h.prototype = {
        "jquery": m,
        "constructor": h,
        "selector": "",
        "length": 0,
        "toArray": function() {
            return c.call(this)
        },
        "get": function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        "pushStack": function(e) {
            var t = h.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        "each": function(e, t) {
            return h.each(this, e, t)
        },
        "map": function(e) {
            return this.pushStack(h.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        "slice": function() {
            return this.pushStack(c.apply(this, arguments))
        },
        "first": function() {
            return this.eq(0)
        },
        "last": function() {
            return this.eq(-1)
        },
        "eq": function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        "end": function() {
            return this.prevObject || this.constructor(null)
        },
        "push": l,
        "sort": u.sort,
        "splice": u.splice
    }, h.extend = h.fn.extend = function() {
        var e, t, i, n, o, a, r = arguments[0] || {},
            s = 1,
            d = arguments.length,
            u = !1;
        for ("boolean" == typeof r && (u = r, r = arguments[s] || {}, s++), "object" == typeof r || h.isFunction(r) || (r = {}), s === d && (r = this, s--); s < d; s++)
            if (null != (o = arguments[s]))
                for (n in o) e = r[n], r !== (i = o[n]) && (u && i && (h.isPlainObject(i) || (t = h.isArray(i))) ? (t ? (t = !1, a = e && h.isArray(e) ? e : []) : a = e && h.isPlainObject(e) ? e : {}, r[n] = h.extend(u, a, i)) : i !== undefined && (r[n] = i));
        return r
    }, h.extend({
        "expando": "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        "isReady": !0,
        "error": function(e) {
            throw new Error(e)
        },
        "noop": function() {},
        "isFunction": function(e) {
            return "function" === h.type(e)
        },
        "isArray": Array.isArray || function(e) {
            return "array" === h.type(e)
        },
        "isWindow": function(e) {
            return null != e && e == e.window
        },
        "isNumeric": function(e) {
            return !h.isArray(e) && e - parseFloat(e) >= 0
        },
        "isEmptyObject": function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        "isPlainObject": function(e) {
            var t;
            if (!e || "object" !== h.type(e) || e.nodeType || h.isWindow(e)) return !1;
            try {
                if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (v.ownLast)
                for (t in e) return g.call(e, t);
            for (t in e);
            return t === undefined || g.call(e, t)
        },
        "type": function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
        },
        "camelCase": function(e) {
            return e.replace(b, "ms-").replace(_, w)
        },
        "nodeName": function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        "each": function(e, t, n) {
            var o = 0,
                a = e.length,
                r = i(e);
            if (n) {
                if (r)
                    for (; o < a && !1 !== t.apply(e[o], n); o++);
                else
                    for (o in e)
                        if (!1 === t.apply(e[o], n)) break
            } else if (r)
                for (; o < a && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break;
            return e
        },
        "trim": function(e) {
            return null == e ? "" : (e + "").replace(y, "")
        },
        "makeArray": function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? h.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        "guid": 1,
        "now": function() {
            return +new Date
        },
        "support": v
    }), h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    });
    var S, P = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        x = e.document,
        E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (h.fn.init = function(e, t) {
        var i, n;
        if (!e) return this;
        if ("string" == typeof e) {
            if ((i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : E.exec(e)) && (i[1] || !t)) {
                if (i[1]) {
                    if (t = t instanceof h ? t[0] : t, h.merge(this, h.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), P.test(i[1]) && h.isPlainObject(t))
                        for (i in t) h.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (n = x.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = x, this.selector = e, this
            }
        } else {
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (h.isFunction(e)) return "undefined" != typeof S.ready ? S.ready(e) : e(h)
        }
        return e.selector !== undefined && (this.selector = e.selector, this.context = e.context), h.makeArray(e, this)
    }).prototype = h.fn, S = h(x);
    var k, A = /\S+/g,
        T = typeof undefined;
    for (k in h(v)) break;
    v.ownLast = "0" !== k, h.acceptData = function(e) {
        var t = h.noData[(e.nodeName + " ").toLowerCase()],
            i = +e.nodeType || 1;
        return (1 === i || 9 === i) && (!t || !0 !== t && e.getAttribute("classid") === t)
    };
    h.extend({
        "cache": {},
        "noData": {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        "hasData": function(e) {
            return !!(e = e.nodeType ? h.cache[e[h.expando]] : e[h.expando]) && !n(e)
        },
        "data": function(e, t, i) {
            return o(e, t, i)
        },
        "_data": function(e, t, i) {
            return o(e, t, i, !0)
        }
    });
    ! function() {
        var t, i, n = x.createElement("div");
        for (t in {
                "submit": !0,
                "change": !0,
                "focusin": !0
            }) i = "on" + t, (v[t + "Bubbles"] = i in e) || (n.setAttribute(i, "t"), v[t + "Bubbles"] = !1 === n.attributes[i].expando);
        n = null
    }();
    var O = /^key/,
        R = /^(?:mouse|pointer|contextmenu)|click/,
        L = /^(?:focusinfocus|focusoutblur)$/,
        I = /^([^.]*)(?:\.(.+)|)$/;
    h.event = {
        "global": {},
        "add": function(e, t, i, n, o) {
            var a, r, s, d, u, c, l, f, p, g, v, m = h._data(e);
            if (m) {
                for (i.handler && (i = (d = i).handler, o = d.selector), i.guid || (i.guid = h.guid++), (r = m.events) || (r = m.events = {}), (c = m.handle) || ((c = m.handle = function(e) {
                        return typeof h === T || e && h.event.triggered === e.type ? undefined : h.event.dispatch.apply(c.elem, arguments)
                    }).elem = e), s = (t = (t || "").match(A) || [""]).length; s--;) p = v = (a = I.exec(t[s]) || [])[1], g = (a[2] || "").split(".").sort(), p && (u = h.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = h.event.special[p] || {}, l = h.extend({
                    "type": p,
                    "origType": v,
                    "data": n,
                    "handler": i,
                    "guid": i.guid,
                    "selector": o,
                    "needsContext": o && h.expr.match.needsContext.test(o),
                    "namespace": g.join(".")
                }, d), (f = r[p]) || ((f = r[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, g, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, l), l.handler.guid || (l.handler.guid = i.guid)), o ? f.splice(f.delegateCount++, 0, l) : f.push(l), h.event.global[p] = !0);
                e = null
            }
        },
        "trigger": function(t, i, n, o) {
            var a, r, s, d, u, c, l, f = [n || x],
                p = g.call(t, "type") ? t.type : t,
                v = g.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = n = n || x, 3 !== n.nodeType && 8 !== n.nodeType && !L.test(p + h.event.triggered) && (p.indexOf(".") >= 0 && (p = (v = p.split(".")).shift(), v.sort()), r = p.indexOf(":") < 0 && "on" + p, t = t[h.expando] ? t : new h.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = n), i = null == i ? [t] : h.makeArray(i, [t]), u = h.event.special[p] || {}, o || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                if (!o && !u.noBubble && !h.isWindow(n)) {
                    for (d = u.delegateType || p, L.test(d + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (n.ownerDocument || x) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (l = 0;
                    (s = f[l++]) && !t.isPropagationStopped();) t.type = l > 1 ? d : u.bindType || p, (a = (h._data(s, "events") || {})[t.type] && h._data(s, "handle")) && a.apply(s, i), (a = r && s[r]) && a.apply && h.acceptData(s) && (t.result = a.apply(s, i), !1 === t.result && t.preventDefault());
                if (t.type = p, !o && !t.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), i)) && h.acceptData(n) && r && n[p] && !h.isWindow(n)) {
                    (c = n[r]) && (n[r] = null), h.event.triggered = p;
                    try {
                        n[p]()
                    } catch (m) {}
                    h.event.triggered = undefined, c && (n[r] = c)
                }
                return t.result
            }
        },
        "dispatch": function(e) {
            e = h.event.fix(e);
            var t, i, n, o, a, r = [],
                s = c.call(arguments),
                d = (h._data(this, "events") || {})[e.type] || [],
                u = h.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (r = h.event.handlers.call(this, e, d), t = 0;
                    (o = r[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, a = 0;
                        (n = o.handlers[a++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(n.namespace) || (e.handleObj = n, e.data = n.data, (i = ((h.event.special[n.origType] || {}).handle || n.handler).apply(o.elem, s)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        "handlers": function(e, t) {
            var i, n, o, a, r = [],
                s = t.delegateCount,
                d = e.target;
            if (s && d.nodeType && (!e.button || "click" !== e.type))
                for (; d != this; d = d.parentNode || this)
                    if (1 === d.nodeType && (!0 !== d.disabled || "click" !== e.type)) {
                        for (o = [], a = 0; a < s; a++) o[i = (n = t[a]).selector + " "] === undefined && (o[i] = n.needsContext ? h(i, this).index(d) >= 0 : h.find(i, this, null, [d]).length), o[i] && o.push(n);
                        o.length && r.push({
                            "elem": d,
                            "handlers": o
                        })
                    }
            return s < t.length && r.push({
                "elem": this,
                "handlers": t.slice(s)
            }), r
        },
        "fix": function(e) {
            if (e[h.expando]) return e;
            var t, i, n, o = e.type,
                a = e,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = R.test(o) ? this.mouseHooks : O.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new h.Event(a), t = n.length; t--;) e[i = n[t]] = a[i];
            return e.target || (e.target = a.srcElement || x), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, a) : e
        },
        "props": "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        "fixHooks": {},
        "special": {
            "load": {
                "noBubble": !0
            },
            "focus": {
                "trigger": function() {
                    if (this !== s() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                "delegateType": "focusin"
            },
            "blur": {
                "trigger": function() {
                    if (this === s() && this.blur) return this.blur(), !1
                },
                "delegateType": "focusout"
            }
        }
    }, h.Event = function(e, t) {
        if (!(this instanceof h.Event)) return new h.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? a : r) : this.type = e, t && h.extend(this, t), this.timeStamp = e && e.timeStamp || h.now(), this[h.expando] = !0
    }, h.Event.prototype = {
        "isDefaultPrevented": r,
        "isPropagationStopped": r,
        "isImmediatePropagationStopped": r,
        "stopPropagation": function() {
            var e = this.originalEvent;
            this.isPropagationStopped = a, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        "stopImmediatePropagation": function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = a, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, h.fn.extend({
        "on": function(e, t, i, n, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof t && (i = i || t, t = undefined);
                for (a in e) this.on(a, t, i, e[a], o);
                return this
            }
            if (null == i && null == n ? (n = t, i = t = undefined) : null == n && ("string" == typeof t ? (n = i, i = undefined) : (n = i, i = t, t = undefined)), !1 === n) n = r;
            else if (!n) return this;
            return 1 === o && (s = n, (n = function(e) {
                return h().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = h.guid++)), this.each(function() {
                h.event.add(this, e, n, i, t)
            })
        },
        "trigger": function(e, t) {
            return this.each(function() {
                h.event.trigger(e, t, this)
            })
        },
        "triggerHandler": function(e, t) {
            var i = this[0];
            if (i) return h.event.trigger(e, t, i, !0)
        }
    });
    v.getSetAttribute, v.input;
    h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        h.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    });
    var C = /%20/g,
        D = /\[\]$/;
    h.param = function(e, t) {
        var i, n = [],
            o = function(e, t) {
                t = h.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (t === undefined && (t = h.ajaxSettings && h.ajaxSettings.traditional), h.isArray(e) || e.jquery && !h.isPlainObject(e)) h.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (i in e) d(i, e[i], t, o);
        return n.join("&").replace(C, "+")
    };
    var N = e.jQuery,
        j = e.$;
    return h.noConflict = function(t) {
        return e.$ === h && (e.$ = j), t && e.jQuery === h && (e.jQuery = N), h
    }, typeof t === T && (e.jQuery = e.$ = h), h
}),
function(e, t, i, n) {
    for (var o, a, r = ("onfocusin" in t && "hasFocus" in t ? "focusin focusout" : "focus blur"), s = ["webkit", "o", "ms", "moz", ""], d = i.support || {}, u = i.event; void 0 != (o = s.pop());)
        if (a = (o ? o + "H" : "h") + "idden", d.pageVisibility = "boolean" == typeof t[a]) {
            r = o + "visibilitychange";
            break
        }
    i(/blur$/.test(r) ? e : t).on(r, function(e) {
        var i = e.type,
            n = e.originalEvent;
        if (n) {
            var o = n.toElement;
            if (!/^focus./.test(i) || void 0 == o && void 0 == n.fromElement && void 0 == n.relatedTarget) {
                var r;
                r = a && t[a] || /^(?:blur|focusout)$/.test(i) ? "hide" : "show", r += ".visibility", u.trigger(r)
            }
        }
    })
}(this, document, PARSELY.jQuery),
function() {
    this.PARSELY = this.PARSELY || {};
    var e, t = this.PARSELY;
    t.util = {}, (e = t.util).getWindow = function() {
        if (t.getWindow && "function" == typeof t.getWindow) return t.getWindow();
        try {
            return window.top.document.cookie, window.top
        } catch (e) {
            try {
                return window.parent.document.cookie, window.parent
            } catch (i) {
                return window
            }
        }
    }, e.windowSetFunction = function(t, i) {
        var n = e.getWindow(),
            o = n[t];
        n[t] = function() {
            i(), "function" == typeof o && o()
        }
    }, e.windowAddEventListener = function(e, t) {
        var i = !1;
        try {
            addEventListener("test", null, Object.defineProperty({}, "passive", {
                "get": function() {
                    i = !0
                }
            }))
        } catch (o) {}
        var n = !1;
        return i && (n = {
            "passive": !0,
            "capture": !1
        }), "undefined" != typeof window.addEventListener ? window.addEventListener(e, t, n) : "undefined" != typeof document.attachEvent && document.attachEvent("on" + e, t)
    }, e.objAddEventListener = function(e, t, i, n) {
        return n = void 0 !== n && n, "undefined" != typeof e.addEventListener ? e.addEventListener(t, i, n) : "undefined" != typeof e.attachEvent && e.attachEvent("on" + t, i)
    }, e.getRandomInt = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }, e.getEventUrl = function() {
        return t.config.eventUrl ? t.config.eventUrl : t.lastRequest ? t.lastRequest.url : e.getWindow().location.href
    }
}(),
function(e) {
    "use strict";
    e.Cookies = function(t) {
        var i = function(e, t, n) {
            return 1 === arguments.length ? i.get(e) : i.set(e, t, n)
        };
        return i._document = t.document, i._cacheKeyPrefix = "cookey.", i._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC"), i.defaults = {
            "path": "/",
            "secure": !1
        }, i.get = function(e) {
            return i._renewCache(), i._cache[i._cacheKeyPrefix + e]
        }, i.getJSON = function(t) {
            var n = i.get(t);
            return n === undefined ? n : e.JSON.parse(n)
        }, i.set = function(t, n, o) {
            (o = i._getExtendedOptions(o)).expires = i._getExpiresDate(n === undefined ? -1 : o.expires);
            try {
                i._document.cookie = i._generateCookieString(t, n, o)
            } catch (a) {
                e.console.log(a)
            }
            return i
        }, i.setJSON = function(t, n, o) {
            return i.set(t, e.JSON.stringify(n), o), i
        }, i.extendExpiry = function(e, t) {
            var n = i.get(e);
            if (n === undefined) return !1;
            i.set(e, n, t)
        }, i.expire = function(e, t) {
            if (e.constructor !== Array) return i.set(e, undefined, t);
            for (var n = 0; n < e.length; n++) i.set(e[n], undefined, t)
        }, i._getExtendedOptions = function(e) {
            return {
                "path": e && e.path || i.defaults.path,
                "domain": e && e.domain || i.defaults.domain,
                "expires": e && e.expires || i.defaults.expires,
                "secure": e && e.secure !== undefined ? e.secure : i.defaults.secure
            }
        }, i._isValidDate = function(e) {
            return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
        }, i._getExpiresDate = function(e, t) {
            if (t = t || new Date, "number" == typeof e ? e = e === Infinity ? i._maxExpireDate : new Date(t.getTime() + 1e3 * e) : "string" == typeof e && (e = new Date(e)), e && !i._isValidDate(e)) throw new Error("`expires` parameter cannot be converted to a valid Date instance");
            return e
        }, i._generateCookieString = function(t, n, o) {
            t = (t = t.replace(/[^#$&+\^`|]/g, encodeURIComponent)).replace(/\(/g, "%28").replace(/\)/g, "%29"), n = (n + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
            var a = (o = o || {}).domain || e.cookieDomain || i._autoCookieDomain,
                r = t + "=" + n;
            return r += o.path ? ";path=" + o.path : "", r += a ? ";domain=" + a : "", r += o.expires ? ";expires=" + o.expires.toUTCString() : "", r += o.secure ? ";secure" : ""
        }, i._getCacheFromString = function(e) {
            for (var t = {}, n = e ? e.split("; ") : [], o = 0; o < n.length; o++) {
                var a = i._getKeyValuePairFromCookieString(n[o]);
                if (null != a) {
                    var r = i._cacheKeyPrefix + a.key;
                    t[r] === undefined && (t[r] = a.value)
                }
            }
            return t
        }, i._getKeyValuePairFromCookieString = function(e) {
            var t = e.indexOf("=");
            t = t < 0 ? e.length : t;
            var i = e.substr(0, t),
                n = e.substr(t + 1);
            try {
                i = decodeURIComponent(i), n = decodeURIComponent(n)
            } catch (o) {
                return null
            }
            return {
                "key": i,
                "value": n
            }
        }, i._renewCache = function() {
            try {
                i._cachedDocumentCookie !== i._document.cookie && (i._cache = i._getCacheFromString(i._document.cookie), i._cachedDocumentCookie = i._document.cookie)
            } catch (t) {
                e.console.log(t)
            }
        }, i._isValidDomain = function(e) {
            var t = "cookies.js_dtest",
                n = "1" === i.set(t, 1, {
                    "domain": e
                }).get(t);
            return i.expire(t, {
                "domain": e
            }), n
        }, i._getAutoCookieDomain = function() {
            var t = e.util.getWindow().location.hostname;
            if (!isNaN(parseInt(t.replace(".", ""), 10))) return i._isValidDomain(t) ? t : null;
            var n = t.split(".");
            if (1 === n.length) return t;
            for (var o, a = 2; a <= n.length; a++) {
                var r = n.slice(-a).join(".");
                if (i._isValidDomain(r)) {
                    o = r;
                    break
                }
            }
            return o || t
        }, i._autoCookieDomain = i._getAutoCookieDomain(), i
    }(e.util.getWindow())
}(this.PARSELY),
function(e) {
    "use strict";
    var t = function() {};
    t.prototype = function() {
        var t = function(e, i, n) {
            return 1 === arguments.length ? t.get(e) : t.set(e, i, n)
        };
        t._keyPrefix = "pStore-", t._delimiter = "|^";
        try {
            t._store = e.util.getWindow().localStorage
        } catch (i) {
            t._store = undefined
        }
        return t._baseDomain = null, t.get = function(e) {
            t._setDomain(), t._migrateCookie(e);
            var i = t._store[t._keyPrefix + e];
            if (void 0 === i) return undefined;
            try {
                i = t._deserialize(i)
            } catch (o) {
                return console.log("Error deserializing stored data for key " + e), t.expire(e), undefined
            }
            if ("undefined" != typeof i.expires) {
                var n = parseInt(i.expires, 10);
                if (!isNaN(n) && (new Date).getTime() > n) return t.expire(e), undefined
            }
            return t._unsetDomain(), i.value
        }, t.getJSON = function(i) {
            var n = t.get(i);
            return void 0 === n ? n : e.JSON.parse(n)
        }, t.set = function(i, n, o) {
            t._setDomain();
            var a = t._keyPrefix + i;
            if (void 0 === n) return delete t._store[a], t;
            o = e.Cookies._getExtendedOptions(o);
            var r, s = e.Cookies._getExpiresDate(o.expires);
            void 0 !== s && (s = s.getTime());
            try {
                r = t._serialize({
                    "value": n,
                    "expires": s
                })
            } catch (d) {
                return console.log("Error serializing stored data for key " + i), t
            }
            return t._store[a] = r, t._unsetDomain(), t
        }, t.setJSON = function(i, n, o) {
            return t.set(i, e.JSON.stringify(n), o), t
        }, t.extendExpiry = function(e, i) {
            var n = t.get(e);
            if (void 0 === n) return !1;
            t.set(e, n, i)
        }, t.expire = function(e, i) {
            return t.set(e, undefined, i)
        }, t._serialize = function(e) {
            return e.value + t._delimiter + e.expires
        }, t._deserialize = function(e) {
            var i = e.split(t._delimiter),
                n = {
                    "value": i[0]
                };
            return i.length > 1 && (n.expires = i[1]), n
        }, t._migrateCookie = function(i) {
            var n = e.Cookies.get(i);
            if (e.Cookies.expire(i), void 0 !== n) {
                var o = e.ParselyStorage.defaults[i],
                    a = {};
                void 0 !== o && (a.expires = o), t.set(i, n, a)
            }
        }, t._setDomain = function() {
            if (e.util.getWindow() === window) {
                t._baseDomain = document.domain;
                try {
                    document.domain = e.Cookies._autoCookieDomain
                } catch (i) {
                    console.log("Error setting document.domain for LocalStorage")
                }
            }
        }, t._unsetDomain = function() {
            if (null !== t._baseDomain) try {
                document.domain = t._baseDomain
            } catch (e) {
                console.log("Error setting document.domain for LocalStorage")
            }
        }, {
            "constructor": t,
            "get": t.get,
            "getJSON": t.getJSON,
            "set": t.set,
            "setJSON": t.setJSON,
            "extendExpiry": t.extendExpiry,
            "expire": t.expire
        }
    }();
    var i = function() {};
    i.prototype = function() {
        var i = new t,
            n = function() {
                return navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && -1 === navigator.userAgent.indexOf("CriOS") && -1 === navigator.userAgent.indexOf("FxiOS")
            },
            o = function() {
                var t = i._keyPrefix;
                try {
                    return e.util.getWindow().localStorage.setItem(t, t), e.util.getWindow().localStorage.removeItem(t), !0
                } catch (n) {
                    return !1
                }
            }() && function() {
                var t = !1,
                    i = e.Cookies.get("_parsely_visitor");
                return void 0 !== i && "{" !== i.charAt(0) && (t = !0), !!n() || !0 === e.use_localstorage && !t
            }() ? i : e.Cookies;
        return {
            "supportsCookies": "cookie" in document && (document.cookie.length > 0 || (document.cookie = "test").indexOf.call(document.cookie, "test") > -1),
            "get": o.get,
            "getJSON": o.getJSON,
            "set": o.set,
            "setJSON": o.setJSON,
            "extendExpiry": o.extendExpiry,
            "expire": o.expire,
            "defaults": {
                "visitor": {
                    "key": "_parsely_visitor",
                    "expires": 34164e3,
                    "secure": !1
                },
                "session": {
                    "key": "_parsely_session",
                    "expires": 1800,
                    "secure": !1
                }
            }
        }
    }(), e.ParselyStorage = new i
}(this.PARSELY),
function() {
    var e = this.PARSELY,
        t = e.Class,
        i = e.ParselyStorage,
        n = e.console,
        o = e.JSON,
        a = ["id"],
        r = t.extend({
            "init": function() {
                this.visitorCookieName = e.visitorCookieName || i.defaults.visitor.key, this.visitorCookieTimeoutSecs = e.visitorCookieTimeoutSecs || i.defaults.visitor.expires, this.visitorCookieSecure = e.visitorCookieSecure || i.defaults.visitor.secure, this.legacyVisitorCookieName = e.legacyVisitorCookieName || "parsely_uuid"
            },
            "getVisitorInfo": function(t) {
                t = t || !1;
                var a = i.get(this.visitorCookieName);
                if (void 0 === a) {
                    var r = i.get(this.legacyVisitorCookieName),
                        s = e.config.apikey_uuid || e.config.uuid;
                    !0 === e.optout_disabled_cookies && void 0 === r && !1 === i.supportsCookies && (r = "OPTOUT", n.log("Setting visitor ID to OPTOUT")), void 0 === r && null !== s ? (r = s, n.log("No existing visitor ID found, using UUID from config: " + r)) : n.log("Using existing value for visitor ID: " + r), a = this.initVisitor(r), i.expire("parsely_uuid")
                } else {
                    var d = !1;
                    try {
                        a = o.parse(a), d = !0
                    } catch (u) {
                        n.log('Unable to JSON parse visitorInfo "' + a + '", assuming ampid.'), a = this.initVisitor(a)
                    }
                    d && t && this.extendVisitorExpiry()
                }
                return e.config.parsely_site_uuid = a.id, a
            },
            "initVisitor": function(e) {
                return this.setVisitorInfo({
                    "id": e,
                    "session_count": 0,
                    "last_session_ts": 0
                })
            },
            "setVisitorInfo": function(e) {
                for (var t = 0; t < a.length; t++) {
                    var n = a[t];
                    if ("undefined" == typeof e[n] || null === e[n]) return !1
                }
                return i.setJSON(this.visitorCookieName, e, {
                    "expires": this.visitorCookieTimeoutSecs,
                    "secure": this.visitorCookieSecure
                }), e
            },
            "extendVisitorExpiry": function() {
                i.extendExpiry(this.visitorCookieName, {
                    "expires": this.visitorCookieTimeoutSecs,
                    "secure": this.visitorCookieSecure
                })
            }
        });
    e.visitorManager = new r
}(),
function() {
    var e = this.PARSELY,
        t = e.util,
        i = e.Class,
        n = e.ParselyStorage,
        o = e.console,
        a = e.visitorManager,
        r = i.extend({
            "init": function() {
                this.windowAlias = t.getWindow(), this.documentAlias = this.windowAlias.document, this.sessionCookieName = e.sessionCookieName || n.defaults.session.key, this.sessionCookieTimeoutSecs = n.defaults.session.expires, this.sessionCookieSecure = e.sessionCookieSecure || n.defaults.session.secure, o.log("Initializing session."), this.getSession(!1)
            },
            "getSession": function(i) {
                i = i || !1;
                var r = a.getVisitorInfo(),
                    s = n.getJSON(this.sessionCookieName);
                if (void 0 === s) {
                    var d, u;
                    !1 === r ? (d = 1, u = 0) : (r.session_count++, d = r.session_count, u = r.last_session_ts);
                    var c = new Date;
                    s = {
                        "sid": d,
                        "surl": t.getEventUrl(),
                        "sref": e.lastRequest ? e.lastRequest.urlref : this.documentAlias.referrer,
                        "sts": c.getTime(),
                        "slts": u
                    }, o.log("Session expired/never existed, creating new session with " + this.sessionCookieTimeoutSecs + "s timeout: " + e.JSON.stringify(s)), n.setJSON(this.sessionCookieName, s, {
                        "expires": this.sessionCookieTimeoutSecs,
                        "secure": this.sessionCookieSecure
                    }), r.last_session_ts = s.sts, a.setVisitorInfo(r)
                } else i && this.extendSessionExpiry();
                return s
            },
            "extendSessionExpiry": function() {
                n.extendExpiry(this.sessionCookieName, {
                    "expires": this.sessionCookieTimeoutSecs,
                    "secure": this.sessionCookieSecure
                })
            }
        });
    e.sessionManager = new r
}(),
function() {
    var e = this.PARSELY,
        t = e.util,
        i = e.JSON,
        n = e.$,
        o = t.getWindow().document;
    PARSELY.getLdJsonMetas = function() {
        for (var e = o.getElementsByTagName("script"), t = 0; t < e.length; t++) {
            var n = e[t];
            if ("application/ld+json" === n.getAttribute("type")) {
                var a;
                try {
                    a = i.parse(n.innerHTML)
                } catch (r) {
                    return null
                }
                return {
                    "type": "NewsArticle" === a["@type"] ? "post" : "sectionpage",
                    "title": a.headline,
                    "link": a.url,
                    "image_url": a.thumbnailUrl,
                    "pub_date": a.dateCreated,
                    "section": a.articleSection,
                    "authors": a.creator,
                    "tags": a.keywords
                }
            }
        }
        return null
    }, PARSELY.getRepeatedMetaMetas = function() {
        for (var e = {}, t = o.getElementsByTagName("meta"), i = {
                "parsely-title": "title",
                "parsely-link": "link",
                "parsely-image-url": "image_url",
                "parsely-type": "type",
                "parsely-post-id": "post_id",
                "parsely-pub-date": "pub_date",
                "parsely-section": "section",
                "parsely-author": "authors",
                "parsely-tags": "tags"
            }, a = 0; a < t.length; a++) {
            var r = t[a],
                s = i[r.getAttribute("name")];
            if (void 0 !== s) {
                var d = r.getAttribute("content");
                "authors" === s ? "undefined" == typeof e[s] ? e[s] = [d] : e[s].push(d) : e[s] = "tags" === s ? d.split(",") : d
            }
        }
        return n.isEmptyObject(e) ? null : e
    }, PARSELY.getParselyPageMetas = function() {
        for (var e = o.getElementsByTagName("meta"), t = 0; t < e.length; t++) {
            var n = e[t];
            if ("parsely-page" === n.getAttribute("name")) {
                var a = n.getAttribute("value") || n.getAttribute("content");
                try {
                    return i.parse(a)
                } catch (r) {
                    return null
                }
            }
        }
        return null
    }, PARSELY.getMetas = function() {
        return this.getRepeatedMetaMetas() || this.getParselyPageMetas() || this.getLdJsonMetas()
    }
}(),
function() {
    function e(e) {
        for (var t = 0, i = 0; e;) t += e.offsetLeft, i += e.offsetTop, e = e.offsetParent;
        return [t, i]
    }

    function t(e) {
        var i = o ? u : "id";
        if (null !== e.getAttribute(i)) return "//*[@" + i + '="' + e.getAttribute(i) + '"]';
        if (e === document.body) return "//" + e.tagName.toLowerCase();
        for (var n = 0, a = e.parentNode.childNodes, r = 0; r < a.length; r++) {
            var s = a[r];
            if (s === e) return t(e.parentNode) + "/" + e.tagName.toLowerCase() + "[" + (n + 1) + "]";
            s.nodeType === c && s.tagName === e.tagName && n++
        }
    }

    function i(e) {
        if (!e || 0 === e.indexOf("#") || 0 === e.indexOf("javascript")) return !0;
        var t = window.location.href;
        return e === t || 0 === e.indexOf(t + "#")
    }

    function n(e, t) {
        function i(e, t) {
            return e === document || t >= n || !e ? null : "A" === e.nodeName ? e : i(e.parentNode, t + 1)
        }
        var n = (t = t || {}).maxHeight || 5;
        return i(e, 0)
    }
    var o, a = this.PARSELY,
        r = a.util,
        s = a.ParselyStorage,
        d = a.util.getWindow(),
        u = "data-parsely-slot";
    if (document.querySelector) {
        o = !!document.querySelector("[" + u + "]");
        var c = 1;
        r.objAddEventListener(document.body, "click", function(o) {
            var a = n(o.target ? o.target : o.srcElement);
            if (null === a) return !0;
            if (!i(a.getAttribute("href"))) {
                var r = e(a),
                    u = t(a),
                    c = {
                        "url": d.location.href,
                        "x": r[0],
                        "y": r[1],
                        "xpath": u,
                        "href": a.href
                    };
                s.setJSON("_parsely_slot_click", c)
            }
        })
    } else a.console("Slot tracking not supported on this browser")
}(),
function(e) {
    "use strict";
    var t = e.$;
    e.Sampler = function(i) {
        var n = {};
        if (n._hasStartedSampling = !1, n._accumulators = {}, n._baseHeartbeatInterval = 10500, t.isNumeric(e.secondsBetweenHeartbeats)) {
            var o = n._baseHeartbeatInterval / 1e3,
                a = e.secondsBetweenHeartbeats < o && !0 === i._parselyIsTest;
            (e.secondsBetweenHeartbeats > o || a) && (n._baseHeartbeatInterval = 1e3 * e.secondsBetweenHeartbeats)
        }
        return n.trackKey = function(e, t, o, a) {
            if ((void 0 === t || "function" == typeof t) && void 0 !== o) {
                if (!n._accumulators.hasOwnProperty(e)) {
                    var r = n._timeoutFromDuration(a);
                    n._accumulators[e] = {
                        "ms": 0,
                        "totalMs": 0,
                        "firstSampleTime": (new Date).getTime(),
                        "lastSampleTime": (new Date).getTime(),
                        "lastPositiveSampleTime": undefined,
                        "sampleFn": t,
                        "heartbeatFn": o,
                        "heartbeatInterval": r,
                        "heartbeatTimer": undefined,
                        "baseHeartbeatInterval": r,
                        "duration": a
                    }
                }!1 === n._hasStartedSampling && (i.setInterval(n._sample, 100), n._hasStartedSampling = !0), n._setHeartbeatTimeout(e)
            }
        }, n._setHeartbeatTimeout = function(e) {
            var t = n._accumulators[e];
            "undefined" != typeof t.heartbeatTimer && n._unsetHeartbeatTimeout(e), t.heartbeatTimer = i.setTimeout(function() {
                n.sendHeartbeat(e)
            }, t.heartbeatInterval)
        }, n._unsetHeartbeatTimeout = function(e) {
            var t = n._accumulators[e];
            i.clearTimeout(t.heartbeatTimer), t.heartbeatTimer = undefined
        }, n._backoff = function(e, t) {
            var i = .3 * ((t = void 0 === t ? (new Date).getTime() - e.firstSampleTime : t) / 1e3 + 35),
                n = Math.min(36e5, i);
            e.heartbeatInterval = 1e3 * n
        }, n._timeoutFromDuration = function(e) {
            var t = n._baseHeartbeatInterval;
            if (void 0 === e || 0 === e) return t;
            var i = e / 5;
            return i < t / 2 ? e / 5 : i < t ? t / 2 : t
        }, n.dropKey = function(e) {
            delete n._accumulators[e]
        }, n._sample = function(e, t) {
            e = void 0 === e ? (new Date).getTime() : e;
            var i, o, a;
            for (var r in n._accumulators) i = n._accumulators[r], a = e - (void 0 === t ? i.lastSampleTime : t), o = "undefined" == typeof i.sampleFn || i.sampleFn(e), i.ms += o ? a : 0, i.totalMs += o ? a : 0, i.lastSampleTime = e, o && (e - i.lastPositiveSampleTime > i.baseHeartbeatInterval && (i.heartbeatInterval = i.baseHeartbeatInterval, n._setHeartbeatTimeout(r)), i.lastPositiveSampleTime = e)
        }, n.sendHeartbeat = function(e, t, i) {
            var o = n._accumulators[e];
            if (void 0 !== o) {
                var a = void 0 === t ? o.ms / 1e3 : t,
                    r = Math.round(a);
                r > 0 && r <= 3600 && o.heartbeatFn(r, undefined, o.totalMs), o.ms = 0, n._backoff(o, i), n._setHeartbeatTimeout(e)
            }
        }, n._sendHeartbeats = function(e, t) {
            for (var i in n._accumulators) n.sendHeartbeat(i, e, t)
        }, e.util.windowAddEventListener("beforeunload", function() {
            n._sendHeartbeats()
        }), n
    }(e.util.getWindow())
}(this.PARSELY),
function() {
    var e = this.PARSELY,
        t = e.config.settings,
        i = e.Sampler,
        n = e.$,
        o = e.util;
    if ("boolean" != typeof e.enableHeartbeats || e.enableHeartbeats) {
        var a = ["focus", "mousedown", "mouseup", "mousemove", "scroll", "keyup", "keydown"],
            r = 5;
        n.isNumeric(e.activeTimeout) && e.activeTimeout >= 1 && e.activeTimeout <= 60 && (r = e.activeTimeout);
        var s = (new Date).getTime();
        e.engagedTime = e.engagedTime || {}, e._lastEventTime = s, e.isEngaged = !0, e.isInteracting = !0, e.focused = !0, e.videoPlaying = !1, e.ENGAGED_TIME_SAMPLER_KEY = "engagedTime", !0 === t.test && (e._handleEngagementActivityCalls = 0), !0 !== e.fbInstantArticles && (n(document).on("show.visibility", function() {
            e.focused = !0
        }), n(document).on("hide.visibility", function() {
            e.focused = !1
        }));
        var d = function() {
            e._lastEventTime = (new Date).getTime(), !0 === t.test && e._handleEngagementActivityCalls++
        };
        !0 !== e.fbInstantArticles ? n.each(a, function(e, t) {
            o.windowAddEventListener(t, d)
        }) : setInterval(d, 1e3 * r), e.engagedTime.getParams = function() {
            return {
                "minActiveTimeout": 1,
                "maxActiveTimeout": 60,
                "activeTimeout": r
            }
        }, e.engagedTime.sample = function(t, i, n, o) {
            return t = void 0 === t ? (new Date).getTime() : t, i = void 0 === i ? e._lastEventTime : i, n = void 0 === n ? e.videoPlaying : n, o = void 0 === o ? e.focused : o, e.isInteracting = t - i < 1e3 * r, e.isEngaged = e.isInteracting && o || n, e.isEngaged
        }, e.engagedTime.sendHeartbeat = function(t, i, a) {
            t = void 0 === t ? 0 : t, (void 0 === (i = void 0 === i ? e.enableHeartbeats : i) || !0 === i) && (!0 !== e.config.heartbeat_should_honor_autotrack || e.autotrack) && (PARSELY.beacon.pixel.beacon({
                "date": (new Date).toString(),
                "action": "heartbeat",
                "inc": t,
                "tt": a,
                "url": o.getEventUrl(),
                "urlref": e.lastRequest ? e.lastRequest.urlref : o.getWindow().document.referrer
            }), n.isFunction(e.onHeartbeat) && e.onHeartbeat(t))
        };
        var u = !0 === e.fbInstantArticles ? undefined : e.engagedTime.sample;
        i.trackKey(e.ENGAGED_TIME_SAMPLER_KEY, u, e.engagedTime.sendHeartbeat)
    }
}(),
function() {
    var e = this.PARSELY;
    e.videoPlaying = !1, e.video = e.video || {}, e.video.trackedVideos = {}, e.video._subscribedElements = [], e.video.skipRegex = new RegExp("data:video/\\w+;base64,.+"), window._parselyIsTest && (e.video._embedMap = {});
    var t = function(t) {
            var i = e.video.trackedVideos[t].urlOverride;
            return void 0 === i && (i = e.util.getEventUrl()), i
        },
        i = function() {
            var t = !1;
            for (var i in e.video.trackedVideos)
                if (e.video.trackedVideos[i].isPlaying) {
                    t = !0;
                    break
                }
            e.videoPlaying = t
        },
        n = function(i) {
            return function(n, o, a) {
                if (n = void 0 === n ? 0 : n, void 0 === (o = void 0 === o ? e.enableHeartbeats : o) || !0 === o) {
                    var r = e.video.trackedVideos[i],
                        s = e.util.getWindow(),
                        d = {
                            "date": (new Date).toString(),
                            "action": "vheartbeat",
                            "inc": n,
                            "url": t(i),
                            "metadata": e.JSON.stringify(r.metadata),
                            "tt": a,
                            "urlref": e.lastRequest ? e.lastRequest.urlref : s.document.referrer
                        };
                    PARSELY.beacon.pixel.beacon(d), e.$.isFunction(e.onHeartbeat) && e.onHeartbeat(n), r._heartbeatsSent += 1
                }
            }
        },
        o = function() {
            for (var t, i, n, o = window, a = 0; a < e.video._strategies.length; a++) {
                t = e.video._strategies[a];
                for (var r = 0; r < t.searchTags.length; r++) {
                    i = o.document.getElementsByTagName(t.searchTags[r]);
                    for (var s = 0; s < i.length; s++) n = i[s], -1 === e.video._subscribedElements.indexOf(n) && t.verify(n) && (n.id || n.setAttribute("id", t.platform + "-" + e.util.getRandomInt(0, 9999999)), !1 !== t.subscribe(n) && ("undefined" == typeof t._subscribedElements && (t._subscribedElements = []), t._subscribedElements.push(n), e.video._subscribedElements.push(n)))
                }
            }
        },
        a = function(t, i, o) {
            if (void 0 === i && (i = {}), i.hasOwnProperty("link") || (i.link = t), e.video.trackedVideos[t]) {
                for (var a in i) i.hasOwnProperty(a) && (e.video.trackedVideos[t].metadata[a] = i[a]);
                void 0 !== o && (e.video.trackedVideos[t].urlOverride = o)
            } else e.video.trackedVideos[t] = {
                "id": t,
                "isPlaying": !1,
                "hasStartedPlaying": !1,
                "metadata": i,
                "urlOverride": o,
                "_heartbeatsSent": 0
            };
            return e.Sampler.trackKey(t, function() {
                return e.video.trackedVideos[t].isPlaying
            }, n(t), i.duration), e.video.trackedVideos[t]
        };
    e.video._storeApiRoot = function(t, i) {
        window._parselyIsTest && !e.video._embedMap.hasOwnProperty(t) && (e.video._embedMap[t] = i)
    }, e.video.trackPlay = function(n, o, r) {
        if (void 0 !== n)
            if (null === (n + "").match(e.video.skipRegex)) {
                var s = a(n, o = void 0 === o ? {} : o, r),
                    d = e.util.getWindow();
                s.hasStartedPlaying || (s.hasStartedPlaying = !0, PARSELY.beacon.pixel.beacon({
                    "date": (new Date).toString(),
                    "action": "videostart",
                    "url": t(n),
                    "metadata": e.JSON.stringify(s.metadata),
                    "urlref": e.lastRequest ? e.lastRequest.urlref : d.document.referrer
                })), s.isPlaying = !0, i()
            } else PARSELY.console.log("Found data-uri video, not subscribing")
    }, e.video.trackPause = function(t, n, o) {
        void 0 !== t ? (a(t, n, o).isPlaying = !1, i()) : e.console.log("no video id provided; trackPause event failed")
    }, e.video.trackPauseAll = function() {
        for (var t in e.video.trackedVideos) e.video.trackPause(t)
    }, e.video.reset = function(t) {
        if (e.video.trackedVideos.hasOwnProperty(t)) {
            var n = e.video.trackedVideos[t];
            n.hasStartedPlaying = !1, n.isPlaying = !1, e.Sampler.sendHeartbeat(t), e.Sampler.dropKey(t), i()
        } else e.console.log("no video id provided; reset failed")
    }, e.video.addStrategy = function(t) {
        for (var i = 0; i < e.video._strategies.length; i++)
            if (e.video._strategies[i].platform === t.platform) return void e.console.log("Strategy '" + t.platform + "' already registered");
        e.video._strategies.unshift(t), e.video.hasOwnProperty("autotrack") && !1 === e.video.autotrack || o()
    }, "undefined" == typeof e.video.onPlay && (e.video.onPlay = function(t, i, n) {
        e.video.trackPlay(i, n)
    }), "undefined" == typeof e.video.onPause && (e.video.onPause = function(t, i) {
        e.video.trackPause(i)
    }), e.video.PLATFORM_MEDIAELEMENTJS = "mediaelementjs";
    var r = {
        "platform": e.video.PLATFORM_MEDIAELEMENTJS,
        "searchTags": ["VIDEO", "IFRAME"],
        "verify": function(e) {
            return -1 !== e.className.indexOf("mejs__player")
        },
        "subscribe": function(t) {
            if ("function" != typeof window.MediaElement) return e.console.log("Detected mediaelement.js embed butwindow.MediaElement is not accesible."), !1;
            var i = function(i) {
                    var n = {
                        "duration": Math.round(1e3 * i.duration),
                        "image_url": t.poster,
                        "title": t.title ? t.title : i.currentSrc,
                        "video_platform": e.video.PLATFORM_MEDIAELEMENTJS
                    };
                    e.video.onPlay(i, i.currentSrc, n)
                },
                n = function(t, i) {
                    e.video.onPause(t, t.currentSrc), !0 === i && e.video.reset(t.currentSrc)
                };
            new window.MediaElement(t.id, {
                "success": function(o) {
                    e.video._storeApiRoot(t.id, o), o.addEventListener("loadedmetadata", function() {
                        o.addEventListener("play", function() {
                            i(o)
                        }), o.addEventListener("pause", function() {
                            n(o)
                        }), o.addEventListener("ended", function() {
                            n(o, !0)
                        }), e.console.log("Subscribed to mediaelementjs embed with ID '" + t.id + "'")
                    })
                }
            })
        }
    };
    e.video.PLATFORM_VIDEOJS = "videojs";
    var s = {
        "platform": e.video.PLATFORM_VIDEOJS,
        "searchTags": ["VIDEO"],
        "verify": function(e) {
            return -1 !== e.className.indexOf("vjs-tech") || -1 !== e.className.indexOf("video-js")
        },
        "subscribe": function(t) {
            if ("function" != typeof window.videojs) return e.console.log("Detected video.js embed but window.videojs is not accesible."), !1;
            var i = function(i) {
                    var n = {
                        "duration": Math.round(1e3 * i.duration()),
                        "image_url": i.poster_,
                        "title": t.title ? t.title : i.currentSrc(),
                        "video_platform": e.video.PLATFORM_VIDEOJS
                    };
                    e.video.onPlay(i, i.currentSrc(), n)
                },
                n = function(t, i) {
                    e.video.onPause(t, t.currentSrc()), !0 === i && e.video.reset(t.currentSrc())
                },
                o = window.videojs(t.id);
            o.on("loadedmetadata", function() {
                e.video._storeApiRoot(t.id, o), o.on("play", function() {
                    i(o)
                }), o.on("pause", function() {
                    n(o)
                }), o.on("ended", function() {
                    n(o, !0)
                }), !1 === o.paused() && i(o), e.console.log("Subscribed to videojs embed with ID '" + t.id + "'")
            })
        }
    };
    e.video.PLATFORM_THEPLATFORM = "theplatform";
    var d = {
        "platform": e.video.PLATFORM_THEPLATFORM,
        "searchTags": ["IFRAME"],
        "verify": function(e) {
            return -1 !== e.src.indexOf("player.theplatform.com")
        },
        "subscribe": function(t) {
            if ("object" != typeof window.$pdk) return e.console.log("Detected ThePlatform embed but window.$pdk is not accesible."), !1;
            e.video._storeApiRoot(t.id, window.$pdk), window.$pdk.controller.addEventListener("OnReleaseStart", function(t) {
                var i = {
                    "duration": t.data.release.duration,
                    "image_url": t.data.release.defaultThumbnailUrl,
                    "title": t.data.release.title,
                    "author": t.data.release.author,
                    "pub_date_tmsp": t.data.release.pubDate / 1e3,
                    "video_platform": e.video.PLATFORM_THEPLATFORM
                };
                e.video.onPlay(window.$pdk, t.data.release.guid, i)
            }), window.$pdk.controller.addEventListener("OnMediaPause", function(t) {
                e.video.onPause(window.$pdk, t.data.clip.baseClip.guid)
            }), window.$pdk.controller.addEventListener("OnMediaEnd", function(t) {
                e.video.onPause(window.$pdk, t.data.clip.baseClip.guid), e.video.reset(t.data.clip.baseClip.guid)
            }), e.console.log("Subscribed to ThePlatform embed with ID '" + t.id + "'")
        }
    };
    e.video.PLATFORM_VIMEO = "vimeo";
    var u = {
        "platform": e.video.PLATFORM_VIMEO,
        "searchTags": ["IFRAME"],
        "verify": function(e) {
            return -1 !== e.src.indexOf("player.vimeo.com")
        },
        "subscribe": function(t) {
            if ("object" != typeof window.Vimeo) return e.console.log("Detected Vimeo embed but window.Vimeo is not accesible."), !1;
            var i = new window.Vimeo.Player(t);
            e.video._storeApiRoot(t.id, i), i.on("play", function(t) {
                i.getVideoId().then(function(n) {
                    i.getVideoTitle().then(function(o) {
                        var a = {
                            "title": o,
                            "duration": 1e3 * Math.round(t.duration),
                            "video_platform": e.video.PLATFORM_VIMEO
                        };
                        e.video.onPlay(i, "" + n, a)
                    })
                })
            }), i.on("pause", function() {
                i.getVideoId().then(function(t) {
                    e.video.onPause(i, "" + t)
                })
            }), i.on("ended", function() {
                i.getVideoId().then(function(t) {
                    e.video.onPause(i, "" + t), e.video.reset("" + t)
                })
            }), e.console.log("Subscribed to Vimeo embed with ID '" + t.id + "'")
        }
    };
    e.video.PLATFORM_JWPLAYER = "jwplayer";
    var c = {
        "platform": e.video.PLATFORM_JWPLAYER,
        "searchTags": ["DIV"],
        "verify": function(e) {
            return -1 !== e.className.indexOf("jwplayer") && -1 !== e.className.indexOf("jw-")
        },
        "subscribe": function(t) {
            if ("function" != typeof window.jwplayer) return e.console.log("Detected JWPlayer embed but window.jwplayer is not accesible."), !1;
            var i = window.jwplayer(t.id);
            e.video._storeApiRoot(t.id, i);
            i.on("play", function() {
                var t, n = i.getPlaylistItem();
                t = "undefined" == typeof n.duration ? 1e3 * i.getDuration() : 1e3 * n.duration;
                var o = n.image;
                void 0 !== o && 0 !== o.indexOf("http") && 0 === o.indexOf("//") && (o = "http:" + o);
                var a = {
                    "duration": t,
                    "image_url": o,
                    "title": n.title,
                    "pub_date_tmsp": n.pubdate,
                    "video_platform": e.video.PLATFORM_JWPLAYER
                };
                "undefined" != typeof n.tags && n.tags.length > 0 && (a.tags = n.tags.split(",")), "undefined" != typeof a.pub_date_tmsp && Number.isInteger(a.pub_date_tmsp) && (a.pub_date_tmsp *= 1e3), n.hasOwnProperty("author") && (a.author = n.author), n.hasOwnProperty("section") && (a.section = n.section), e.video.onPlay(i, n.mediaid, a)
            }), i.on("pause", function() {
                e.video.onPause(i, i.getPlaylistItem().mediaid)
            }), i.on("complete", function() {
                e.video.onPause(i, i.getPlaylistItem().mediaid), e.video.reset(i.getPlaylistItem().mediaid)
            }), e.console.log("Subscribed to JWPlayer embed with ID '" + t.id + "'")
        }
    };
    e.video.PLATFORM_KALTURA = "kaltura";
    var l = {
        "platform": e.video.PLATFORM_KALTURA,
        "searchTags": ["OBJECT", "IFRAME"],
        "verify": function(e) {
            return "application/x-shockwave-flash" === e.type && ("undefined" != typeof e.data && -1 !== e.data.indexOf("cdnapi.kaltura.com") || "undefined" != typeof e.src && -1 !== e.src.indexOf("cdnapi.kaltura.com") || "undefined" != typeof e.id && -1 !== e.id.indexOf("kaltura-player"))
        },
        "subscribe": function(t) {
            var i = "parselyKalturaOnPlay" + t.id,
                n = "parselyKalturaOnPause" + t.id,
                o = "parselyKalturaOnEnd" + t.id;
            e.util.windowSetFunction(i, function() {
                var i = document.getElementById(t.id),
                    n = {
                        "duration": 1e3 * i.evaluate("{mediaProxy.entry.duration}"),
                        "image_url": i.evaluate("{mediaProxy.entry.thumbnailUrl}"),
                        "title": i.evaluate("{mediaProxy.entry.name}"),
                        "pub_date_tmsp": i.evaluate("{mediaProxy.entry.createdAt}"),
                        "tags": i.evaluate("{mediaProxy.entry.tags}"),
                        "video_platform": e.video.PLATFORM_KALTURA
                    },
                    o = i.evaluate("{mediaProxy.entry.categories}");
                o && (n.section = o[0]), e.video.onPlay(i, i.evaluate("{mediaProxy.entry.id}"), n)
            }), e.util.windowSetFunction(n, function() {
                var i = document.getElementById(t.id);
                e.video.onPause(i, i.evaluate("{mediaProxy.entry.id}"))
            }), e.util.windowSetFunction(o, function() {
                var i = document.getElementById(t.id),
                    n = i.evaluate("{mediaProxy.entry.id}");
                e.video.onPause(i, n), e.video.reset(n)
            });
            var a = function() {
                var a = document.getElementById(t.id);
                e.video._storeApiRoot(t.id, a), a.addJsListener("playerPlayed", i), a.addJsListener("playerPaused", n), a.addJsListener("playerPlayEnd", o)
            };
            "undefined" != typeof document.getElementById(t.id).addJsListener ? a() : e.util.windowSetFunction("jsCallbackReady", a), e.console.log("Subscribed to Kaltura embed with ID '" + t.id + "'")
        }
    };
    e.video.PLATFORM_WISTIA = "wistia";
    var f = {
        "platform": e.video.PLATFORM_WISTIA,
        "searchTags": ["DIV", "IFRAME"],
        "verify": function(e) {
            return -1 !== e.className.indexOf("wistia_embed") || "undefined" != typeof e.src && -1 !== e.src.indexOf("fast.wistia")
        },
        "subscribe": function(t) {
            var i = function(t) {
                    var i, n = (i = !0 === t.playlist ? t.currentVideo() : t).data.media,
                        o = {
                            "duration": 1e3 * n.duration,
                            "image_url": n.assets[0].url.replace(".bin", ".jpg"),
                            "pub_date_tmsp": n.createdAt,
                            "title": n.name,
                            "video_platform": e.video.PLATFORM_WISTIA
                        };
                    e.video.onPlay(i, n.hashedId, o)
                },
                n = function(t, i) {
                    var n;
                    n = !0 === t.playlist ? t.currentVideo() : t, e.video.onPause(n, n.data.media.hashedId), !0 === i && e.video.reset(n.data.media.hashedId)
                },
                o = function(o, a) {
                    if (!o) return !1;
                    e.video._storeApiRoot(a, o), o.bind("play", function() {
                        i(o)
                    }), o.bind("pause", function() {
                        n(o)
                    }), o.bind("end", function() {
                        n(o, !0)
                    }), e.console.log("Subscribed to Wistia embed with ID '" + t.id + "'")
                };
            if ("undefined" != typeof window.Wistia) {
                var a = window.Wistia.api(t.id);
                return a || "function" != typeof window.Wistia.playlist || (a = window.Wistia.playlist(t.id.split("_")[1])), o(a, t.id)
            }
            window._wq = window._wq || [], window._wq.push({
                "id": t.id,
                "onReady": function(e) {
                    o(e, t.id)
                }
            })
        }
    };
    e.video.PLATFORM_BRIGHTCOVE = "brightcove";
    var p = {
        "platform": e.video.PLATFORM_BRIGHTCOVE,
        "searchTags": ["VIDEO", "VIDEO-JS"],
        "verify": function(e) {
            return -1 !== ["video", "video-js"].indexOf(e.tagName.toLowerCase()) && (e.hasAttribute("data-video-id") || e.hasAttribute("data-playlist-id"))
        },
        "subscribe": function(t) {
            if ("function" != typeof window.videojs) return e.console.log("Detected Brightcove embed but window.videojs is not accesible."), !1;
            var i = function(t) {
                    var i, n = t.mediainfo,
                        o = {
                            "duration": 1e3 * t.duration(),
                            "image_url": t.poster(),
                            "video_platform": e.video.PLATFORM_BRIGHTCOVE
                        };
                    t.el_.attributes["data-playlist-id"] && t.hasOwnProperty("playlist") && (n = t.playlist()[t.playlist.currentIndex()]), void 0 !== n ? (o.pub_date_tmsp = n.publishedAt, o.title = n.name, o.tags = n.tags, i = n.id) : t.el_.attributes["data-video-id"] && (i = t.el_.attributes["data-video-id"].value, o.title = t.el_.getAttribute("data-title") || undefined), i ? e.video.onPlay(t, i, o) : e.console.log("No video id found for Brightcove embed!")
                },
                n = function(t, i) {
                    var n;
                    "undefined" != typeof t.mediainfo ? n = t.mediainfo.id : t.el_.attributes["data-video-id"] && (n = t.el_.attributes["data-video-id"].value), n ? (e.video.onPause(t, n), !0 === i && e.video.reset(n)) : e.console.log("No video id found for Brightcove embed!")
                },
                o = window.videojs(t.id),
                a = !1,
                r = function() {
                    a || (a = !0, e.video._storeApiRoot(t.id, o), o.on("firstplay", function() {
                        i(o)
                    }), o.on("play", function() {
                        i(o)
                    }), o.on("pause", function() {
                        n(o)
                    }), o.on("ended", function() {
                        n(o, !0)
                    }), (!1 === o.paused() || o.hasClass("vjs-has-started")) && i(o), e.console.log("Subscribed to Brightcove embed with ID '" + t.id + "'"))
                };
            o.on("loadstart", function() {
                r()
            }), o.ready(function() {
                r()
            })
        }
    };
    e.video.PLATFORM_YOUTUBE = "youtube";
    var g = {
        "platform": e.video.PLATFORM_YOUTUBE,
        "searchTags": ["IFRAME"],
        "verify": function(e) {
            return "iframe" === e.tagName.toLowerCase() && -1 !== e.src.indexOf("youtube.com/embed")
        },
        "subscribe": function(t) {
            var i = function(t) {
                var i;
                window.YT.get(t.id) ? (e.console.log("YouTube player already initialized, using existing instance"), i = window.YT.get(t.id)) : (e.console.log("Initialized new YouTube player instance"), i = new window.YT.Player(t.id)), i.addEventListener("onReady", function() {
                    e.video._storeApiRoot(t.id, i)
                }), i.addEventListener("onStateChange", function(t) {
                    var n = i.getVideoData().video_id;
                    if (-1 === t.data || 0 === t.data || 2 === t.data) e.video.onPause(i, n), 0 === t.data && e.video.reset(n);
                    else if (1 === t.data) {
                        var o = {
                            "duration": 1e3 * i.getDuration(),
                            "title": i.getVideoData().title,
                            "image_url": "http://img.youtube.com/vi/" + n + "/0.jpg",
                            "author": i.getVideoData().author,
                            "video_platform": e.video.PLATFORM_YOUTUBE
                        };
                        e.video.onPlay(i, n, o)
                    }
                }), e.console.log("Subscribed to YouTube embed with ID '" + t.id + "'")
            };
            "undefined" != typeof window.YT && "undefined" != typeof window.YT.Player ? i(t) : e.util.windowSetFunction("onYouTubeIframeAPIReady", function() {
                i(t)
            })
        }
    };
    e.video._strategies = [d, u, c, l, f, p, g, s, r], e.video.hasOwnProperty("autotrack") && !1 === e.video.autotrack || (o(), e.util.getWindow().setInterval(o, 5e3))
}(),
function() {
    var e = this.PARSELY,
        t = e.$,
        i = e.Class,
        n = e.JSON,
        o = e.console,
        a = e.config,
        r = e.urls,
        s = e.visitorManager,
        d = e.sessionManager,
        u = e.ParselyStorage,
        c = e.util.getWindow(),
        l = c.document,
        f = c.screen;
    PARSELY.Pixel = i.extend({
        "init": function() {
            var t = e.util.getEventUrl(),
                i = f.width + "x" + f.height + "|" + (f.availWidth + "x" + f.availHeight) + "|" + f.colorDepth;
            this.correlationIds = {
                "pageview": "pvid",
                "videostart": "vsid"
            }, this.callbackName = "parselyStartCallback", this.dashDomains = ["https://dash.parsely.com", "https://beta.parsely.com"], this.data = {
                "idsite": a.apikey,
                "url": t,
                "urlref": l.referrer,
                "screen": i,
                "data": {}
            }, a.hasOwnProperty("is_remote_config") && !0 !== a.is_remote_config || (this.data.data.parsely_uuid = a.network_uuid || a.uuid, this.data.data.parsely_site_uuid = a.parsely_site_uuid), this.remoteEndpoint = r.pixel + this.selectEndpoint()
        },
        "selectEndpoint": function() {
            return a.hasOwnProperty("is_remote_config") && !1 === a.is_remote_config ? !1 === a.track_ip_addresses ? !0 === a.track_third_party_cookies ? "/eventx/" : "/px/" : !0 === a.track_third_party_cookies ? "/event/" : "/plogger/" : !1 === a.track_ip_addresses ? "/px/" : "/plogger/"
        },
        "addDefaults": function(e) {
            t.extend(!0, this.data, e)
        },
        "shouldFetchVisitorID": function(t) {
            return !(!a.hasOwnProperty("is_remote_config") || !0 === a.is_remote_config) && (!t || !!e.updateVisitorIds && 0 !== t.indexOf("pid="))
        },
        "requestJsonPInit": function(e) {
            c[this.callbackName] = function(i) {
                a.uuid = i.set.length > 0 ? i.set : i.got;
                var n = d.getSession(),
                    o = {
                        "id": a.uuid,
                        "session_count": n.sid,
                        "last_session_ts": n.sts
                    };
                u.setJSON(s.visitorCookieName, o, {
                    "expires": s.visitorCookieTimeoutSecs,
                    "secure": s.visitorCookieSecure
                }), d.getSession(), t.isFunction(PARSELY.onBeacon) && PARSELY.onBeacon(e)
            }, e.callback = this.callbackName;
            var i = t.param(e),
                n = !1 === a.track_ip_addresses ? "x" : "",
                f = r.pixel + "/start" + n + "/?" + i;
            o.log("beaconing to endpoint: " + f);
            var p = document.createElement("script");
            p.src = f, l.getElementsByTagName("head")[0].appendChild(p)
        },
        "requestImg": function(i, n) {
            o.log("beaconing to endpoint: " + this.remoteEndpoint), i.u = n;
            var a = new Image,
                r = t.param(i),
                s = this.remoteEndpoint + "?" + r;
            a.src = s, t.isFunction(e.onBeacon) && e.onBeacon(i)
        },
        "generatePageloadId": function() {
            return "undefined" == typeof e.pageload_id && (e.pageload_id = Math.floor(99999999 * Math.random())), e.pageload_id
        },
        "getCorrelationIdKey": function(e) {
            return "_" + e + "_correlation_id"
        },
        "generateEventCorrelationId": function(t, i) {
            var n = this.getCorrelationIdKey(t);
            return !0 === i && (e[n] = Math.floor(99999999 * Math.random())), e[n]
        },
        "beacon": function(i, r) {
            var f = d.getSession(!0),
                p = (new Date).getTime(),
                g = this.generatePageloadId() || 0,
                v = t.extend(!0, {
                    "rand": p,
                    "plid": g
                }, this.data, f, i),
                m = e.visitorManager.getVisitorInfo();
            s.extendVisitorExpiry();
            var h;
            for (var y in this.correlationIds) void 0 !== (h = this.generateEventCorrelationId(y, y === v.action)) && (v[this.correlationIds[y]] = h);
            if ("pageview" === v.action) {
                var b = u.getJSON("_parsely_slot_click");
                b && (u.expire("_parsely_slot_click"), o.log("Valid slot click found"), v.sl_xp = b.xpath, v.sl_x = b.x, v.sl_y = b.y, v.sl_h = b.href)
            }
            v.data = n.stringify(v.data), !0 !== r && (PARSELY.lastRequest = v), a.uuid = m.id;
            for (var _, w = 0; w < this.dashDomains.length; w++)
                if (_ = this.dashDomains[w], 0 === l.location.href.indexOf(_)) try {
                    c.postMessage(v, _)
                } catch (S) {
                    o.log("Failed to postMessage to Dash domain " + _)
                }
            this.shouldFetchVisitorID(m.id) ? this.requestJsonPInit(v) : this.requestImg(v, a.uuid)
        }
    })
}(),
function() {
    var e = this.PARSELY,
        t = e.$,
        i = e.$LAB,
        n = e.console,
        o = e.Class,
        a = e.JSON,
        r = e.util.getWindow().document;
    PARSELY.Beacon = o.extend({
        "init": function() {
            this.pixel = new PARSELY.Pixel, this.autotrack = "undefined" == typeof PARSELY.autotrack || PARSELY.autotrack
        },
        "trackPageView": function(i, n) {
            var o = {
                "title": r.title,
                "date": (new Date).toString(),
                "action": "pageview"
            };
            i && t.extend(o, i), e.hasOwnProperty("metadata") && (o.hasOwnProperty("metadata") ? o.metadata = a.stringify(t.extend(o.metadata, e.metadata.get())) : o.metadata = a.stringify(e.metadata.get())), this.pixel.beacon(o, n)
        },
        "trackConversion": function(e) {
            var i = ["active", "lead", "customer"],
                o = {
                    "label": undefined
                };
            e && e.category ? -1 === i.indexOf(e.category) ? n.log("'" + e.category + "' is not a valid conversion category; must be one of: " + i.join(", ")) : (t.extend(o, e), this.trackPageView({
                "action": "conversion",
                "data": {
                    "_conversion_type": e.category,
                    "_conversion_label": e.label
                }
            })) : n.log("No category specified; category required for conversion events")
        },
        "loadCustomizations": function() {
            if (e.config) {
                var t = e.config.customizations;
                if (t) {
                    n.log("Found customizations; loading.");
                    var o = e.urls["static"],
                        a = this;
                    i.script(o + t).wait(function() {
                        "undefined" != typeof PARSELY.pCustom && (PARSELY.pCustom(a), n.log("pCustom function called"))
                    })
                }
            }
        },
        "start": function() {
            this.startTime = (new Date).getTime(), this.autotrack ? (n.log("autotrack enabled; doing automatic pageview beacon"), this.trackPageView()) : n.log("autotrack disabled; beacon loaded but no data sent"), this.loadCustomizations()
        }
    })
}(),
function() {
    var e = PARSELY.config.settings,
        t = PARSELY.console,
        i = PARSELY.$;
    if (PARSELY.updateDefaults = function(e) {
            return PARSELY.beacon.pixel.addDefaults(e)
        }, PARSELY.setConfigOptions = function(e) {
            for (var t = ["track_ip_addresses", "track_third_party_cookies"], i = 0; i < t.length; i++) e.hasOwnProperty(t[i]) && (PARSELY.config[t[i]] = e[t[i]])
        }, e.tracker) {
        t.log("tracker enabled, create Beacon");
        var n = new PARSELY.Beacon;
        PARSELY.beacon = n, n.start(), i.isFunction(PARSELY.onReady) && PARSELY.onReady()
    }
    try {
        if ("undefined" != typeof Storage && localStorage.getItem("parsely-overlay")) {
            var o = document.createElement("script");
            o.setAttribute("src", "https://dash.parsely.com/static/build/overlay.js?v=" + (new Date).getTime()), document.body.appendChild(o)
        }
    } catch (a) {
        PARSELY.console.log(a)
    }
}();