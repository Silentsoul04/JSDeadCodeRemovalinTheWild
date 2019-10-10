"use strict";
! function(e, l, s, p) {
    if (!s.DCO) {
        var c, d, f, h, g, v, y = s.DCO = {},
            t = "http:" === e.location.protocol ? "http:" : "https:",
            n = t + "//track.adform.net",
            r = t + "//s1.adform.net",
            i = "//studio.adform.com",
            m = "adfm-jsonp-loader",
            w = 100,
            o = [],
            b = s.trackingUrlBase,
            k = s.tagData,
            u = 0,
            A = !1,
            x = 0,
            E = {
                format: "json",
                tv: Math.round(1e8 * Math.random()),
                gcnt: w
            };
        if (k && (v = k.dynamicAdContent, E.bn = k.id, E.icid = k.icid, E.smid = k.scheduleMember, E.rotseqno = k.rotatorMemberSeqNo, E.bnrid = k.banner, E.intid = k.imprid, k.location)) {
            var a = k.location;
            a.city && (E.geo = [a.city.id, a.region.id, a.country.id].join(","))
        }
        var C = "loading" === l.readyState || !l.body;
        y.loadMessages = function(e, u, a) {
            b || (b = (b = d && d.getAttribute("data-track") || n).replace(/\/+$/i, "")), S(), A = !0;
            var s = {};
            if (u = "function" == typeof u ? u : function() {}, a = "function" == typeof a ? a : function() {}, Array.isArray(e) && e.length) s.gid = e.slice(0, w).join(",");
            else {
                var t = parseInt(e, 10);
                if (isNaN(t) && (t = 1), t = Math.min(t, w), x && f && x >= f.length) return;
                f && f.length && (s.gid = f.slice(x, x + t).join(",")), s.pgsz = t
            }

            function r() {
                if (!l.getElementById(m))
                    if (d || (d = l.querySelector("script[type='adform/template']"))) {
                        var c = d.textContent;
                        g === p && (g = -1 !== c.indexOf("$default"));
                        var e = k ? k.templateData : null;
                        if (E.aid || (E.aid = k && k.clientSite ? k.clientSite : d.getAttribute("data-client")), E.tid || (E.tid = e ? e.id : d.getAttribute("data-template")), !E.gid) {
                            var t = e ? e.group : d.getAttribute("data-messages");
                            t && (E.gid = String(t).split(",").slice(0, w))
                        }
                        if (e && e.dcoEngineId) E.dco = e.dcoEngineId;
                        else {
                            var r = d.getAttribute("data-engine");
                            r && (E.dco = r)
                        }
                        var n = k ? k.trackingSetupId : d.getAttribute("data-eshop");
                        if (n !== p && null !== n && (E.eid = n), e && e.version && (E.tv = e.version), E.dco !== p && (E.geo = E.geo || "0,0,0", E.bnrid = E.bnrid || 0, E.icid = E.icid || 0, E.eid = E.eid || 0), g && !h && !v) {
                            if (!s.gid) return void U({
                                gid: 0
                            }, function(e) {
                                T(e), i()
                            }, a);
                            s.gid = "0," + s.gid
                        }
                        i()
                    } else a("Template script was not found.");

                function i() {
                    v ? o([h = M(v.root)], 1) : U(s, function(e) {
                        T(e);
                        var t = e.root;
                        if (t && (t.GroupIds && (f = t.GroupIds.split(",")), null !== t.Groups && t.Groups.Group)) {
                            for (var r = [], n = Array.isArray(t.Groups.Group) ? t.Groups.Group : [t.Groups.Group], i = 0; i < n.length; i++) r.push(M(n[i]));
                            f && (x += r.length);
                            var a = r.length;
                            f && f.length && (a = f.length), o(r, a)
                        }
                    }, a)
                }

                function o(e, t) {
                    var r = {
                        messages: e
                    };
                    h && (r.$default = h);
                    var n = u(r, t);
                    y.Mustache.parse(c);
                    var i = y.Mustache.render(c, r);
                    if ("function" == typeof n) {
                        var a = l.createElement("div");
                        a.innerHTML = i;
                        for (var o = []; a.hasChildNodes();) {
                            var s = a.firstChild;
                            d.parentNode.insertBefore(s, d), s.nodeType === Node.ELEMENT_NODE && o.push(s)
                        }
                        n(o)
                    } else d.insertAdjacentHTML("beforebegin", i)
                }
            }
            C ? o.push(r) : r()
        }, C ? (o.push(v ? j : $), e.addEventListener("DOMContentLoaded", function() {
            C = !1;
            for (var e = 0; e < o.length; e++) o[e]()
        })) : v ? j() : $()
    }

    function M(e) {
        var t = s.getClickURL && s.getClickURL() || "";
        ";cpdir=" != t.slice(-7) && (t += ";cpdir=");
        var n = Object.create(null),
            r = e["@id"] || 0,
            i = e["@pdata"] ? "pdata=" + e["@pdata"] : "";
        if (n.$id = r, n.$name = e["@name"] || "default", n.$link = t.replace(/(adfibeg)=\d+/, i || "$1=" + r), e.TextVars) {
            var a = e.TextVars.TextVar;
            Array.isArray(a) || (a = [a]), a.forEach(function(e) {
                var t = e["@name"],
                    r = e["@value"];
                n[t] = r, "product_deeplink" === t && (n.$link.length ? n.$link += encodeURIComponent(r) : n.$link = r)
            })
        }
        if (e.Graphics) {
            var o = e.Graphics.Graphic;
            Array.isArray(o) || (o = [o]), o.forEach(function(e) {
                var t = c + e["@value"];
                t += "?assetID=" + e["@assetID"], t += "&av=" + e["@av"], n[e["@name"]] = t
            })
        }
        return n
    }

    function T(e) {
        if (g) {
            var t = e.root;
            if (t) {
                var r = M(t);
                r && 3 < Object.keys(r).length && (h = r)
            }
        }
    }

    function U(e, t, r) {
        var n = !1,
            i = b + "/";
        E.dco !== p ? e.gid ? i += "dco/products" : i += "dco/recommendations" : i += "Serving/AdMessage", i += "/?";
        var a = "jsonpCallback" + ++u;
        for (var o in e.callback = "Adform.DCO." + a, y[a] = function(e) {
                t(e), n = !0
            }, E) e.hasOwnProperty(o) || (e[o] = E[o]);
        for (var s in e) i += "&" + s + "=" + e[s];
        var c = l.createElement("script");
        c.id = m, c.onerror = c.onload = function() {
            delete y[a], c.parentNode.removeChild(c), n || r("Failed to load messages.")
        }, c.src = i, d.parentNode.insertBefore(c, d)
    }

    function j() {
        var e, t, r, n, i = l.querySelector("script[type='adform/template']"),
            a = v;
        S(), !i || a._ready || A || (n = i.textContent, t = {
            messages: [e = M(a.root)],
            $default: e
        }, r = y.Mustache.render(n, t), i.insertAdjacentHTML("beforebegin", r), a._ready = !0)
    }

    function $() {
        A || y.loadMessages()
    }

    function S() {
        c || (c = s.assetsUrlBase && s.assetsUrlBase.indexOf(i) < 0 ? s.assetsUrlBase.replace(/^(.*Banners)\/.*$/i, "$1") : (c = d && d.getAttribute("data-static") || r).replace(/\/+$/i, "") + "/Banners")
    }
}(window, document, window.Adform = window.Adform || {}),
function(e, t, r, n) {
    (function() {
        var e, t;
        e = this, t = function(k) {
            var t = Object.prototype.toString,
                A = Array.isArray || function(e) {
                    return "[object Array]" === t.call(e)
                };

            function u(e) {
                return "function" == typeof e
            }

            function x(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            function s(e, t) {
                return null != e && "object" == typeof e && t in e
            }
            var n = RegExp.prototype.test;
            var i = /\S/;

            function E(e) {
                return t = i, r = e, !n.call(t, r);
                var t, r
            }
            var r = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            var C = /\s*/,
                M = /\s+/,
                T = /\s*=/,
                U = /\s*\}/,
                j = /#|\^|\/|>|\{|&|=|!/;

            function $(e) {
                this.string = e, this.tail = e, this.pos = 0
            }

            function a(e, t) {
                this.view = e, this.cache = {
                    ".": this.view
                }, this.parent = t
            }

            function e() {
                this.cache = {}
            }
            $.prototype.eos = function() {
                return "" === this.tail
            }, $.prototype.scan = function(e) {
                var t = this.tail.match(e);
                if (!t || 0 !== t.index) return "";
                var r = t[0];
                return this.tail = this.tail.substring(r.length), this.pos += r.length, r
            }, $.prototype.scanUntil = function(e) {
                var t, r = this.tail.search(e);
                switch (r) {
                    case -1:
                        t = this.tail, this.tail = "";
                        break;
                    case 0:
                        t = "";
                        break;
                    default:
                        t = this.tail.substring(0, r), this.tail = this.tail.substring(r)
                }
                return this.pos += t.length, t
            }, a.prototype.push = function(e) {
                return new a(e, this)
            }, a.prototype.lookup = function(e) {
                var t, r = this.cache;
                if (r.hasOwnProperty(e)) t = r[e];
                else {
                    for (var n, i, a = this, o = !1; a;) {
                        if (0 < e.indexOf("."))
                            for (t = a.view, n = e.split("."), i = 0; null != t && i < n.length;) i === n.length - 1 && (o = s(t, n[i])), t = t[n[i++]];
                        else t = a.view[e], o = s(a.view, e);
                        if (o) break;
                        a = a.parent
                    }
                    r[e] = t
                }
                return u(t) && (t = t.call(this.view)), t
            }, e.prototype.clearCache = function() {
                this.cache = {}
            }, e.prototype.parse = function(e, t) {
                var r = this.cache,
                    n = r[e];
                return null == n && (n = r[e] = function(e, t) {
                    if (!e) return [];
                    var r, n, i, a = [],
                        o = [],
                        s = [],
                        c = !1,
                        u = !1;

                    function l() {
                        if (c && !u)
                            for (; s.length;) delete o[s.pop()];
                        else s = [];
                        u = c = !1
                    }

                    function p(e) {
                        if ("string" == typeof e && (e = e.split(M, 2)), !A(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
                        r = new RegExp(x(e[0]) + "\\s*"), n = new RegExp("\\s*" + x(e[1])), i = new RegExp("\\s*" + x("}" + e[1]))
                    }
                    p(t || k.tags);
                    for (var d, f, h, g, v, y, m = new $(e); !m.eos();) {
                        if (d = m.pos, h = m.scanUntil(r))
                            for (var w = 0, b = h.length; w < b; ++w) E(g = h.charAt(w)) ? s.push(o.length) : u = !0, o.push(["text", g, d, d + 1]), d += 1, "\n" === g && l();
                        if (!m.scan(r)) break;
                        if (c = !0, f = m.scan(j) || "name", m.scan(C), "=" === f ? (h = m.scanUntil(T), m.scan(T), m.scanUntil(n)) : "{" === f ? (h = m.scanUntil(i), m.scan(U), m.scanUntil(n), f = "&") : h = m.scanUntil(n), !m.scan(n)) throw new Error("Unclosed tag at " + m.pos);
                        if (v = [f, h, d, m.pos], o.push(v), "#" === f || "^" === f) a.push(v);
                        else if ("/" === f) {
                            if (!(y = a.pop())) throw new Error('Unopened section "' + h + '" at ' + d);
                            if (y[1] !== h) throw new Error('Unclosed section "' + y[1] + '" at ' + d)
                        } else "name" === f || "{" === f || "&" === f ? u = !0 : "=" === f && p(h)
                    }
                    if (y = a.pop()) throw new Error('Unclosed section "' + y[1] + '" at ' + m.pos);
                    return function(e) {
                        for (var t, r = [], n = r, i = [], a = 0, o = e.length; a < o; ++a) switch ((t = e[a])[0]) {
                            case "#":
                            case "^":
                                n.push(t), i.push(t), n = t[4] = [];
                                break;
                            case "/":
                                i.pop()[5] = t[2], n = 0 < i.length ? i[i.length - 1][4] : r;
                                break;
                            default:
                                n.push(t)
                        }
                        return r
                    }(function(e) {
                        for (var t, r, n = [], i = 0, a = e.length; i < a; ++i)(t = e[i]) && ("text" === t[0] && r && "text" === r[0] ? (r[1] += t[1], r[3] = t[3]) : (n.push(t), r = t));
                        return n
                    }(o))
                }(e, t)), n
            }, e.prototype.render = function(e, t, r) {
                var n = this.parse(e),
                    i = t instanceof a ? t : new a(t);
                return this.renderTokens(n, i, r, e)
            }, e.prototype.renderTokens = function(e, t, r, n) {
                for (var i, a, o, s = "", c = 0, u = e.length; c < u; ++c) o = void 0, "#" === (a = (i = e[c])[0]) ? o = this.renderSection(i, t, r, n) : "^" === a ? o = this.renderInverted(i, t, r, n) : ">" === a ? o = this.renderPartial(i, t, r, n) : "&" === a ? o = this.unescapedValue(i, t) : "name" === a ? o = this.escapedValue(i, t) : "text" === a && (o = this.rawValue(i)), void 0 !== o && (s += o);
                return s
            }, e.prototype.renderSection = function(e, t, r, n) {
                var i = this,
                    a = "",
                    o = t.lookup(e[1]);
                if (o) {
                    if (A(o))
                        for (var s = 0, c = o.length; s < c; ++s) a += this.renderTokens(e[4], t.push(o[s]), r, n);
                    else if ("object" == typeof o || "string" == typeof o || "number" == typeof o) a += this.renderTokens(e[4], t.push(o), r, n);
                    else if (u(o)) {
                        if ("string" != typeof n) throw new Error("Cannot use higher-order sections without the original template");
                        null != (o = o.call(t.view, n.slice(e[3], e[5]), function(e) {
                            return i.render(e, t, r)
                        })) && (a += o)
                    } else a += this.renderTokens(e[4], t, r, n);
                    return a
                }
            }, e.prototype.renderInverted = function(e, t, r, n) {
                var i = t.lookup(e[1]);
                if (!i || A(i) && 0 === i.length) return this.renderTokens(e[4], t, r, n)
            }, e.prototype.renderPartial = function(e, t, r) {
                if (r) {
                    var n = u(r) ? r(e[1]) : r[e[1]];
                    return null != n ? this.renderTokens(this.parse(n), t, r, n) : void 0
                }
            }, e.prototype.unescapedValue = function(e, t) {
                var r = t.lookup(e[1]);
                if (null != r) return r
            }, e.prototype.escapedValue = function(e, t) {
                var r = t.lookup(e[1]);
                if (null != r) return k.escape(r)
            }, e.prototype.rawValue = function(e) {
                return e[1]
            }, k.name = "mustache.js", k.version = "2.2.1", k.tags = ["{{", "}}"];
            var o = new e;
            k.clearCache = function() {
                return o.clearCache()
            }, k.parse = function(e, t) {
                return o.parse(e, t)
            }, k.render = function(e, t, r) {
                if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + (A(n = e) ? "array" : typeof n) + '" was given as the first argument for mustache#render(template, view, partials)');
                var n;
                return o.render(e, t, r)
            }, k.to_html = function(e, t, r, n) {
                var i = k.render(e, t, r);
                if (!u(n)) return i;
                n(i)
            }, k.escape = function(e) {
                return String(e).replace(/[&<>"'`=\/]/g, function(e) {
                    return r[e]
                })
            }, k.Scanner = $, k.Context = a, k.Writer = e
        }, "object" == typeof exports && exports && "string" != typeof exports.nodeName ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : (e.Mustache = {}, t(e.Mustache))
    }).apply(r.DCO)
}(window, document, window.Adform = window.Adform || {});