/*
 * Copyright (c) 2007-2018, Marketo, Inc. All rights reserved.
 * See https://developers.marketo.com/MunchkinLicense.pdf for license terms
 * Marketo marketing automation web activity tracking script
 * Version: 155 r694
 */
(function(k) {
    if (!k.MunchkinTracker) {
        var l = k.document,
            n = l.location,
            z = encodeURIComponent,
            A = [],
            s = function(b, a, d, c) {
                try {
                    var f = function() {
                        try {
                            d.apply(this, arguments)
                        } catch (a) {}
                    };
                    b.addEventListener ? b.addEventListener(a, f, c || !1) : b.attachEvent && b.attachEvent("on" + a, f);
                    A.push([b, a, f, c])
                } catch (g) {}
            },
            O = function(b, a, d, c) {
                try {
                    b.removeEventListener ? b.removeEventListener(a, d, c || !1) : b.detachEvent && b.detachEvent("on" + a, d)
                } catch (f) {}
            },
            e = function(b) {
                return "undefined" !== typeof b && null !== b
            },
            B = function(b, a) {
                return b.className.match(RegExp("(\\s|^)" +
                    a + "(\\s|$)"))
            },
            P = e(k.XMLHttpRequest) && e((new k.XMLHttpRequest).withCredentials),
            q = function(b) {
                var a = null,
                    d;
                if (e(b))
                    if (0 === b.length) a = "";
                    else try {
                        a = decodeURIComponent(b)
                    } catch (c) {
                        d = b.indexOf("?");
                        if (-1 !== d) try {
                            a = decodeURIComponent(b.substr(0, d)) + b.substr(d)
                        } catch (f) {}
                        e(a) || (a = String(b))
                    }
                return a
            },
            C = function(b, a) {
                var d = {},
                    c = e(a) ? a : "=",
                    f = b.split("&"),
                    g = f.length,
                    h, m, l;
                for (h = 0; h < g; h += 1) m = f[h].split(c), e(m) && 1 < m.length && (l = m.shift(), m = m.join(c), d[q(l)] = q(m));
                return d
            },
            D = function(b) {
                try {
                    var a = l.createElement("a");
                    a.href = b;
                    return C(a.search.substr(1))
                } catch (d) {
                    return null
                }
            },
            E = function(b, a) {
                var d = null,
                    c = [];
                if (e(b))
                    for (d in b) b.hasOwnProperty(d) && "function" !== typeof b[d] && null !== b[d] && c.push(z(d) + (e(a) ? a : "=") + z(b[d]));
                return c.join("&")
            },
            F = function(b, a) {
                var d = null;
                if (e(a) && e(b))
                    for (d in b) b.hasOwnProperty(d) && e(a[d]) && (b[d] = a[d])
            },
            J = function(b, a, d) {
                var c = b.split("."),
                    f = c.length,
                    g = 2;
                if (e(a)) g = a;
                else if (e(d) && d) c[f - 1].equals("com") || (a = RegExp("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"),
                    4 === f && a.test(b) ? g = 4 : 2 === c[f - 1].length && 1 < f && c[f - 2].equals("co") && (g = 3));
                else if (2 < c[f - 1].length) g = 2;
                else if (2 === c[f - 1].length) g = 3;
                else return b;
                for (; c.length > g && 2 < c.length;) c.shift();
                return c.join(".")
            },
            u = function(b) {
                var a = l.cookie,
                    d, c, f = {
                        id: null,
                        token: null
                    };
                b = z(b);
                f.store = function(a, c, d, f) {
                    var e = b + "=" + E(this, ":"),
                        h = new Date;
                    0 < a ? h.setTime(h.getTime() + 864E5 * a) : h.setTime(h.getTime() - 1);
                    e += "; expires=" + h.toGMTString();
                    c && (e += "; path=" + c);
                    d && -1 !== d.indexOf(".") && (e += "; domain=" + d);
                    f && (e += "; secure");
                    l.cookie = e
                };
                if ("" !== a)
                    for (a = a.split(";"), d = 0; d < a.length; d += 1)
                        if (c = a[d].replace(/^\s+|\s+$/g, ""), 0 === c.indexOf(b + "=")) {
                            a = c.substring(b.length + 1);
                            d = C(a);
                            e(d.id) && e(d.token) ? F(f, d) : F(f, C(a, ":"));
                            break
                        }
                return f
            },
            h = {
                customName: null,
                notifyPrefix: null,
                wsInfo: null,
                altIds: [],
                visitorToken: null,
                cookieLifeDays: 730,
                clickTime: 350,
                cookieAnon: !0,
                mkt_tok: null,
                domainLevel: null,
                domainSelectorV2: !1,
                replayDetectLimit: 5E3,
                httpsOnly: !1,
                asyncOnly: !1,
                apiOnly: !1,
                anonymizeIP: !1
            },
            v = null,
            p = null,
            Q = k.navigator.cookieEnabled || l.hasOwnProperty("cookie") &&
            (0 < l.cookie.length || -1 < (l.cookie = "testcookie=test; max-age=10000").indexOf.call(l.cookie, "testcookie=test;")),
            x = !1,
            y = [],
            G = null,
            R = function(b, a, d) {
                var c = new k.XMLHttpRequest;
                c.open("GET", b, !0 !== a);
                c.onreadystatechange = function() {
                    2 <= c.readyState && c.abort()
                };
                if (a) try {
                    c.timeout = d
                } catch (e) {}
                try {
                    c.send()
                } catch (g) {}
            },
            K = function(b, a, d, c, e) {
                b = b + a + "&" + E(d) + "&" + E(c);
                d = (new Date).getTime();
                e = !e && !h.asyncOnly;
                0 === a.indexOf("webevents/visitWebPage?") && (e = !1);
                P ? R(b, e, h.clickTime) : (new k.Image(1, 1)).src = b;
                G = d + h.clickTime
            },
            S = function() {
                var b;
                return function(a, d) {
                    var c = {
                        x: a.clientX,
                        y: a.clientY,
                        el: d,
                        time: (new Date).getTime()
                    };
                    if (e(b) && c.x === b.x && c.y === b.y && c.el === b.el && c.time < b.time + h.replayDetectLimit) return !0;
                    b = c;
                    return !1
                }
            }(),
            L = function() {
                var b = l.getElementsByName("_mkt_trk"),
                    a = 0,
                    d = "";
                e(p) && (d = "id:" + p.id + "&token:" + p.token);
                for (a = 0; a < b.length; a += 1) "hidden" === b[a].type && (b[a].value = d)
            },
            t = function(b, a, d, c) {
                var f = null,
                    g;
                g = n.hostname;
                var l = n.protocol,
                    m = "webevents/" + b;
                if (x) {
                    var k;
                    if (k = window.navigator) a: {
                        k = window.navigator.userAgent;
                        if ("string" === typeof k && k) {
                            if (0 <= k.indexOf("AdsBot") || 0 <= k.indexOf("Wget") || 0 <= k.indexOf("msnbot")) {
                                k = !0;
                                break a
                            }
                            if (0 <= k.indexOf("Mozilla") && (0 <= k.indexOf("slurp") || 0 <= k.indexOf("bot"))) {
                                k = !0;
                                break a
                            }
                        }
                        k = !1
                    }
                    if (!k && e(p) && (a._mchId = p.id, a._mchTk = p.token, e(h.mkt_tok) && (a.mkt_tok = h.mkt_tok), e(h.wsInfo) && (a._mchWs = h.wsInfo), "clickLink" === b && (a._mchCn = e(h.customName) ? h.customName : ""), a._mchHo = g, a._mchPo = n.port, e(a._mchRu) || (a._mchRu = q(n.pathname)), a._mchPc = l, a._mchVr = "155", e(g) && 0 !== g.length && "file:" !==
                            l))
                        for (f in h.anonymizeIP && (a.aip = 1), m += "?_mchNc=" + (new Date).getTime(), K(h.notifyPrefix, m, a, d, c), h.altIds) h.altIds.hasOwnProperty(f) && (g = h.altIds[f], a._mchId = g, K(h.notifyPrefix.replace(/\w{3}\-\w{3}\-\w{3}\.mktoresp\.com/i, g + ".mktoresp.com"), m, a, d, c))
                } else y.push(["post", arguments])
            },
            M = function(b) {
                var a = b || k.event,
                    d = a.target || a.srcElement,
                    c = {},
                    f;
                f = a.which;
                var g = a.button;
                f = e(f) && (1 === f || 2 === f) || e(g) && (0 === g || 1 === g || 4 === g) ? !0 : !1;
                if (f && !a._mchDone) {
                    a._mchDone = !0;
                    a = d;
                    f = n.href || n;
                    for (-1 < f.indexOf("#") &&
                        (f = f.substring(0, f.indexOf("#")));
                        "A" !== a.tagName && "AREA" !== a.tagName && e(a.parentNode);) a = a.parentNode;
                    a === l || a === k || "A" !== a.tagName && "AREA" !== a.tagName ? a = null : (d = a.href.replace(/^\s+|\s+$/g, ""), a = e(d) && 0 < d.length && 0 !== d.indexOf("#") && 0 !== d.indexOf(f + "#") && 0 !== d.indexOf("javascript") && 0 !== d.indexOf("mailto") && !B(a, "mchNoDecorate") ? a : null);
                    e(a) && !S(b, a) && (c._mchHr = q(a.href), t("clickLink", c))
                }
            },
            w = function(b) {
                if (x) {
                    if (null !== p) return p;
                    var a = J(n.hostname, h.domainLevel, h.domainSelectorV2),
                        d = u("_mkto_trk"),
                        c = !1 !== h.httpsOnly;
                    if (e(d.id) || h.cookieAnon || b) {
                        if (d.id = v, e(d.token) || (e(h.visitorToken) && "VISITOR_MKTTOK_REPLACE" !== h.visitorToken ? d.token = h.visitorToken : d.token = "_mch-" + a + "-" + (new Date).getTime() + "-" + (Math.floor(9E4 * Math.random()) + 1E4)), d.store(h.cookieLifeDays, "/", a, c), c && (d = u("_mkto_trk")), !c || e(d.id)) return p = d, L(), d
                    } else return null
                } else y.push(["createTrackingCookie", arguments])
            },
            N = function() {
                w(!0)
            },
            T = function(b) {
                var a = b.onclick;
                b.onclick = "function" === typeof a ? function() {
                    N.apply(b, arguments);
                    return a.apply(b, arguments)
                } : N
            },
            H = function(b) {
                var a = J(n.hostname, h.domainLevel, h.domainSelectorV2),
                    d = u("mkto_opt_out"),
                    c = !1 !== h.httpsOnly;
                b ? (d.id = !0, d.store(730, "/", a, c), b = u("_mkto_trk"), b.id && b.store(0, "/", a, c)) : d.store(0, "/", a, c)
            },
            I = {
                ASSOCIATE_LEAD: "associateLead",
                CLICK_LINK: "clickLink",
                VISIT_WEB_PAGE: "visitWebPage",
                init: function(b, a) {
                    if (Q && e(b) && 0 !== b.length) {
                        v = b;
                        v = v.toUpperCase();
                        var d = "",
                            c, f, g;
                        c = D(k.location.toString());
                        var r = null;
                        h.notifyPrefix = n.protocol + "//" + v + ".mktoresp.com/";
                        e(a) && F(h, a);
                        e(c) && (e(c.mkt_tok) && (h.mkt_tok = c.mkt_tok), e(c.lpview) && (d = c.lpview), e(c.marketo_opt_out) && (r = c.marketo_opt_out));
                        if (!e(h.mkt_tok))
                            if (c = D(l.referrer), e(c.mkt_tok)) h.mkt_tok = c.mkt_tok;
                            else if (e(c.enid) && e(c.type))
                            for (g in c) c.hasOwnProperty(g) && "enid" !== g && "type" !== g && (-1 < g.indexOf("mkt_tok") || -1 < c[g].indexOf("mkt_tok")) && (f = D(g + "=" + c[g]), e(f.mkt_tok) && (h.mkt_tok = f.mkt_tok));
                        if ("preview" !== d || !/\/lpeditor\/preview$/.test(n.pathname)) {
                            if (null === r) {
                                if (d = u("mkto_opt_out"), e(d.id)) {
                                    H(!0);
                                    return
                                }
                            } else {
                                if ("true" ===
                                    r) {
                                    H(!0);
                                    return
                                }
                                "false" === r && H(!1)
                            }
                            if (!x) {
                                x = !0;
                                d = w(e(h.mkt_tok));
                                r = {};
                                for (c = {}; 0 < y.length;) switch (g = y.shift(), g[0]) {
                                    case "createTrackingCookie":
                                        d = w.apply(l, g[1]);
                                        break;
                                    case "post":
                                        t.apply(l, g[1])
                                }
                                if (e(d)) h.apiOnly || (r._mchCn = e(h.customName) ? h.customName : "", c._mchHa = q(n.hash), c._mchRe = q(l.referrer), c._mchQp = q(n.search.substr(1).replace(/&/g, "__-__")), t("visitWebPage", r, c, !0));
                                else if (!(h.cookieAnon || e(k.Mkto) && e(k.Mkto.formSubmit))) {
                                    d = [];
                                    g = l.forms;
                                    var r = g.length,
                                        m, p;
                                    for (c = 0; c < r; c += 1)
                                        if (B(g[c], "lpeRegForm"))
                                            for (m =
                                                g[c].elements, p = m.length, f = 0; f < p; f += 1) "submit" !== m[f].type || B(m[f], "mchNoDecorate") || d.push(m[f]);
                                    for (g = 0; g < d.length; g += 1) T(d[g])
                                }
                            }
                        }
                    }
                },
                munchkinFunction: function(b, a, d) {
                    var c = {},
                        f = {},
                        g = null;
                    e(d) && (c._mchKy = d);
                    switch (b) {
                        case "associateLead":
                            for (g in a) a.hasOwnProperty(g) && (c["_mchAt" + g] = a[g]);
                            w(!0);
                            t("associateLead", c);
                            break;
                        case "clickLink":
                            e(a.href) && (c._mchHr = c._mchLr = q(a.href), t("clickLink", c));
                            break;
                        case "visitWebPage":
                            e(a.url) && (c._mchRu = q(a.url)), e(a.params) && (c._mchQp = q(a.params.replace(/&/g,
                                "__-__"))), e(a.name) && (c._mchCn = a.name), f._mchRe = q(n.href), t("visitWebPage", c, f)
                    }
                },
                createTrackingCookie: function(b) {
                    w(b)
                }
            };
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        s(k, "beforeunload", function() {
            for (var b; 0 < A.length;) b = A.shift(), O.apply(this, b);
            if (e(G)) {
                do b = new Date; while (b.getTimeAlias() < G)
            }
        });
        s(l, "click", M, !0);
        (function(b) {
            var a = !1,
                d = !0,
                c = l.documentElement,
                e = function(c) {
                    "readystatechange" === c.type && "complete" !== l.readyState || a || (a = !0, b.call(k, c.type || c))
                },
                g = null,
                g = function() {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        k.setTimeout(g,
                            50);
                        return
                    }
                    e("poll")
                };
            if ("complete" === l.readyState) b.call(k, "lazy");
            else {
                if (l.createEventObject && c.doScroll) {
                    try {
                        d = !k.frameElement
                    } catch (h) {}
                    d && g()
                }
                s(l, "DOMContentLoaded", e);
                s(l, "readystatechange", e);
                s(k, "load", e)
            }
        })(function() {
            L();
            var b = 0;
            if (e(l.links))
                for (b = 0; b < l.links.length; b += 1) s(l.links[b], "click", M, !0)
        });
        k.MunchkinTracker = k.Munchkin = I;
        k.mktoMunchkin = I.init;
        k.mktoMunchkinFunction = I.munchkinFunction
    }
})(window);