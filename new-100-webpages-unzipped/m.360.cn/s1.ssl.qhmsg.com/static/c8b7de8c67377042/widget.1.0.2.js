(function() {
    var e = !1,
        t = function() {};
    t.extend = function(t) {
        function n() {
            !e && this.initialize && this.initialize.apply(this, arguments)
        }
        var r = this.prototype;
        e = !0;
        var i = new this;
        e = !1;
        for (var s in t) i[s] = t[s];
        return n.superclass = r, n.prototype = i, n.prototype.constructor = n, n.extend = arguments.callee, n
    }, this.Class = t
})(),
function() {
    function e(e) {
        var n = {};
        return $.each(e, function(e, r) {
            if (!$.isPlainObject(r) || !t(r, l.SPECIAL_KEYS)) r = {
                value: r
            };
            n[e] = r
        }), n
    }

    function t(e, t) {
        var n = !1;
        return $.each(t, function(t, r) {
            e.hasOwnProperty(r) && (n = !0)
        }), n
    }

    function n(e, t) {
        var n = e,
            r, i;
        for (r = 0, i = t.length; r < i - 1 && $.isPlainObject(n); r++) n = n[t[r]];
        return i == 0 ? e : r == i - 1 && $.isPlainObject(n) && n.hasOwnProperty(t[i - 1]) ? n[t[i - 1]] : l.INVALID_VALUE
    }

    function r(e, t) {
        var n = t ? t.split(".") : [],
            r = e;
        for (var i = 0, s = n.length; i < s; i++) {
            if (r == undefined) return;
            r = r[n[i]]
        }
        return r
    }

    function i(e, t, n, r) {
        var i = t.split(u),
            o, a;
        while (o = i.shift()) {
            a = this[o];
            if (!a || !$.isFunction(a)) break;
            a._isAspected || s.call(this, o), this.on(e + ":" + o, n, r)
        }
    }

    function s(e) {
        var t = this[e],
            n, r, i = this;
        this[e] = function() {
            r = this.trigger("before:" + e, Array.prototype.slice.call(arguments));
            if (r === !1) return;
            return n = t.apply(this, arguments), this.trigger("after:" + e, Array.prototype.slice.call(arguments)), n
        }, this[e]._isAspected = !0
    }

    function o(e) {
        return e.charAt(0).toLowerCase() + e.substring(1)
    }
    var u = /\s+/,
        a = /^(onChange|before|after)([A-Z](.)*)/,
        f = /^_(onChange|before|after)([A-Z](.)*)/,
        l = this.ATTRIBUTE = {};
    l.INVALID_VALUE = {}, l.SPECIAL_KEYS = ["value", "getter", "setter", "mergeOnInit"];
    var c = Class.extend({
            initialize: function(e, t, n) {
                $.extend(this, {
                    target: e,
                    type: t,
                    timeStamp: new Date - 0
                }, n)
            },
            _defaultPrevented: !1,
            preventDefault: function() {
                this._defaultPrevented = !0
            }
        }),
        h = Class.extend({
            initialize: function(e) {
                e = e || {}, this._initAttrs(e)
            },
            destroy: function() {
                this.off();
                for (var e in this) this.hasOwnProperty(e) && delete this[e];
                this.destroy = function() {}
            },
            on: function(e, t, n) {
                var r, i;
                if (!t) return this;
                r = this.__events = this.__events || {}, e = e.split(u);
                while (i = e.shift()) r[i] = r[i] || [], r[i].push(t, n);
                return this
            },
            off: function(e, t) {
                var n = this.__events,
                    r;
                if (!e && !t) return delete this.__events, this;
                e = e.split(u);
                while (r = e.shift()) {
                    var i = n[r];
                    if (!t) delete n[r];
                    else if (i)
                        for (var s = 0, o = i.length; s < o - 1; s += 2) i[s] == t && i.splice(s, 2)
                }
                return this
            },
            trigger: function(e) {
                var t = this.__events,
                    n, r = this,
                    i = !0;
                if (!t) return r;
                e = e.split(u);
                while (n = e.shift()) {
                    var s = t[n],
                        o = new c(r, n);
                    if (s)
                        for (var a = 0, f = s.length; a < f; a += 2) {
                            var l = s[a + 1] || r,
                                h = arguments[1] ? arguments[1].slice() : [];
                            h.unshift(o);
                            var p = s[a].apply(l, h);
                            p === !1 && o.preventDefault();
                            if (o._defaultPrevented) {
                                i = !1;
                                break
                            }
                        }
                }
                return i
            },
            before: function(e, t, n) {
                return i.call(this, "before", e, t, n), this
            },
            after: function(e, t, n) {
                return i.call(this, "after", e, t, n), this
            },
            set: function(e, t, n) {
                var i = this,
                    s = {},
                    o = this.attrs,
                    u = !0;
                return typeof e == "string" ? s[e] = t : (s = e, n = t), n = n || {}, $.each(s, function(e, t) {
                    var s = e.split("."),
                        a = s[0],
                        f = s.length > 1,
                        c = o[a];
                    if (!c) {
                        u = !1;
                        return
                    }
                    if (f) {
                        var h = r(c.value, s.slice(1, -1).join("."));
                        if (h == undefined || !$.isPlainObject(h)) {
                            u = !1;
                            return
                        }
                        var p = $.extend({}, c.value);
                        h = r(p, s.slice(1, -1).join(".")), h[s[s.length - 1]] = t, t = p
                    }
                    if (c.setter) {
                        t = c.setter.call(i, t, e, n.data);
                        if (t == l.INVALID_VALUE) {
                            u = !1;
                            return
                        }
                    }
                    n.merge && (t = $.extend(!0, {}, c, {
                        value: t
                    }).value), c = c.value, o[a].value = t, n.silent || (i.trigger("change:" + a, [i.get(a), c, e, n.data]), i.trigger("change:*", [i.get(a), c, e, n.data]))
                }), u
            },
            get: function(e) {
                var t = this;
                if (!e) {
                    var n = {};
                    return $.each(t.attrs, function(e, r) {
                        n[e] = t.get(e)
                    }), n
                }
                var i = e.split(".");
                if (!t.attrs.hasOwnProperty(i[0])) return;
                var s = t.attrs[i[0]],
                    o = s.value;
                return s.getter && (o = s.getter.call(t, o, e)), o = r(o, i.slice(1).join(".")), o == l.INVALID_VALUE ? undefined : o
            },
            _initAttrs: function(t) {
                var n = this,
                    r = {},
                    i, s = [],
                    o = n.constructor.prototype;
                while (o && !$.isEmptyObject(o)) s.push(o), o = o.constructor.superclass;
                while (o = s.pop()) i = e(o.attrs || {}), $.each(i, function(e, t) {
                    t.mergeOnInit ? r[e] = $.extend(!0, {}, r[e], t) : r[e] = t
                });
                t = t || {}, r = $.extend(!0, {}, r, e(t)), n.attrs = r, $.each(t, function(e, t) {
                    r[e].setter && n.set(e, t, {
                        silent: !0
                    })
                })
            }
        });
    this.Base = h
}(),
function() {
    function e() {
        return v++
    }

    function t(e, t) {
        return e.contains ? e != t && e.contains(t) : !!(e.compareDocumentPosition(t) & 16)
    }

    function n(e) {
        return e.charAt(0).toUpperCase() + e.substring(1)
    }

    function r(e) {
        return e.charAt(0).toLowerCase() + e.substring(1)
    }

    function i(e) {
        return e == undefined || e == null
    }

    function s(e, t) {
        var n = {},
            r = t.match(/^(\S+)\s*(.*)$/);
        return n.type = r[1] + h + e.wid, n.selector = r[2].replace(p, function() {
            return e.get(arguments[1])
        }), n
    }

    function o(e) {
        var t = {},
            e = $(e);
        if (!e[0] || e.data("api") != "on") return;
        var n = e[0].dataset || e.data();
        for (var r in n) {
            var i = e.data(r);
            r = u(r), t[r] = a(i)
        }
        return t
    }

    function u(e) {
        var t = m;
        return e = e.replace(t, function() {
            return arguments[1].toUpperCase()
        }), e
    }

    function a(e) {
        return g.test(e) && (e = e.replace(/'/g, '"'), e = JSON.parse(e)), e
    }
    var f = {},
        l = "data-widget-id",
        c = /^_onRender([A-Z](.)*)/,
        h = ".widget-",
        p = /{\$(.*)}/,
        d = Base.extend({
            element: null,
            $element: null,
            attrs: {
                id: null,
                className: null,
                style: null,
                template: "<div></div>",
                parentNode: "body"
            },
            events: null,
            initialize: function(e) {
                e = this._parseConfig(e), d.superclass.initialize.call(this, e), this._parseElement(), this._stamp(), this.delegateEvents(), this.setup()
            },
            _parseConfig: function(e) {
                e = e || {}, this.element = e.element, delete e.element, this.events = $.extend(this.events || {}, e.events), delete e.events;
                var t = o(this.element);
                return e = $.extend({}, t, e), e
            },
            _parseElement: function() {
                this.element || (this._isTemplate = !0), this.$element = this.element ? $(this.element) : $(this.get("template")), this.element = this.$element[0]
            },
            _stamp: function() {
                var t = this.wid = e();
                f[t] = this, this.$element.attr(l, t)
            },
            setup: function() {},
            render: function() {
                this.rendered || (this._renderAndBindAttrs(), this.rendered = !0);
                var e = this.get("parentNode");
                return e && !t(document.documentElement, this.element) && this.$element.appendTo(e), this
            },
            destroy: function() {
                this.undelegateEvents(), delete f[this.cid], this.$element && this._isTemplate && (this.$element.off(), this.$element.remove()), this.element = null, d.superclass.destroy.call(this)
            },
            _renderAndBindAttrs: function() {
                var e = this;
                $.each(e, function(t, n) {
                    var s = t.match(c);
                    if (!s) return;
                    var o = r(s[1]);
                    e.on("change:" + o, n);
                    var u = e.get(o);
                    i(u) || e.trigger("change:" + o, [u, undefined, o])
                })
            },
            _onRenderId: function(e, t) {
                this.$element.attr("id", t)
            },
            _onRenderClassName: function(e, t, n) {
                n && this.$element.removeClass(n), this.$element.addClass(t)
            },
            _onRenderStyle: function(e, t, n) {
                this.$element.css(t)
            },
            delegateEvents: function(e, t, n) {
                var r = this;
                if (arguments.length == 0) t = r.events, e = r.element;
                else if (arguments.length == 1) t = e, e = r.element;
                else if (arguments.length == 2) {
                    if (!$.isPlainObject(t)) {
                        var i = {};
                        i[e] = t, t = i, e = r.element
                    }
                } else if (arguments.length == 3) {
                    var i = {};
                    i[t] = n, t = i
                }
                return e != this.element && (this.delegateElements || (this.delegateElements = []), this.delegateElements.push($(e))), e = $(e), t && $.each(t, function(t, n) {
                    var i = s(r, t),
                        o;
                    $.type(n) == "string" ? o = function(e) {
                        r[n](e)
                    } : $.type(n) == "function" && (o = function(e) {
                        n.call(r, e)
                    }), e.on(i.type, i.selector, o)
                }), this
            },
            undelegateEvents: function(e, n) {
                if (arguments.length == 0) {
                    var r = this.wid;
                    this.$element.off(h + r), this.delegateElements && $.each(this.delegateElements, function(e, t) {
                        t.off(h + r)
                    })
                } else {
                    arguments.length == 1 && (t(document.documentElement, $(e)[0]) || (n = e, e = this.element)), e = $(e);
                    var i = n && s(this, n);
                    i ? e.off(i.type, i.selector) : e.off(h + this.wid)
                }
                return this
            }
        });
    d.query = function(e) {
        var t = parseInt($(e).attr(l));
        return f[t]
    };
    var v = 0,
        m = /-([a-z])/g,
        g = /^\s*[\[{].*[\]}]\s*$/;
    this.Widget = d
}();