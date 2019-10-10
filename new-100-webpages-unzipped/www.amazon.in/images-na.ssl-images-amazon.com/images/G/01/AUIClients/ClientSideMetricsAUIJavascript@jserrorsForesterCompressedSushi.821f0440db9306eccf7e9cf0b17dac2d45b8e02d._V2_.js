(function(b, e) {
    function t(b) {
        if (b) return b.replace(/^\s+|\s+$/g, "")
    }

    function q(f, v) {
        if (!f) return {};
        var c = "INFO" === v.logLevel;
        f.m && f.m.message && (f = f.m);
        var d = v.m || v.message || "",
            d = f.m && f.m.message ? d + f.m.message : f.m && f.m.target && f.m.target.tagName ? d + ("Error handler invoked by " + f.m.target.tagName + " tag") : f.m ? d + f.m : f.message ? d + f.message : d + "Unknown error",
            d = {
                m: d,
                name: f.name,
                type: f.type,
                csm: H + " " + (f.fromOnError ? "onerror" : "ueLogError")
            },
            l, g, h = 0,
            e;
        d.logLevel = v.logLevel || z;
        v.adb && (d.adb = v.adb);
        if (l = v.attribution) d.attribution =
            "" + l;
        if (!c) {
            d.pageURL = v.pageURL || "" + (window.location ? window.location.href : "") || "missing";
            d.f = f.f || f.sourceURL || f.fileName || f.filename || f.m && f.m.target && f.m.target.src;
            d.l = f.l || f.line || f.lineno || f.lineNumber;
            d.c = f.c ? "" + f.c : f.c;
            d.s = [];
            d.t = b.ue.d();
            if ((c = f.stack || (f.err ? f.err.stack : "")) && c.split)
                for (d.csm += " stack", l = c.split("\n"); h < l.length && d.s.length < x;)(c = l[h++]) && d.s.push(t(c));
            else
                for (d.csm += " callee", g = A(f.args || arguments, "callee"), l = h = 0; g && h < x;) e = n, g.skipTrace || (c = g.toString()) && c.substr && (e =
                    0 === l ? 4 * n : e, e = 1 == l ? 2 * n : e, d.s.push(c.substr(0, e)), l++), g = A(g, "caller"), h++;
            if (!d.f && 0 < d.s.length && (h = d) && h.s) {
                var m, c = 0 < h.s.length ? h.s[0] : "";
                l = 1 < h.s.length ? h.s[1] : "";
                c && (m = c.match(w));
                m && 3 == m.length || !l || (m = l.match(D));
                m && 3 == m.length && (h.f = m[1], h.l = m[2])
            }
        }
        return d
    }

    function A(b, e) {
        try {
            return b[e]
        } catch (c) {}
    }

    function r(f, n) {
        if (f) {
            for (var c = q(f, n), d = (window.ue_err ? window.ue_err.errorHandlers : null) || [], l = 0; l < d.length; l++) "function" == typeof d[l].handler && d[l].handler(c);
            b.ue.log(c, n.channel || m, {
                nb: 1
            });
            "function" === typeof ue_err.elh && ue_err.elh(f, n);
            try {
                if (!f.fromOnError) {
                    var g = e.console,
                        h = e.JSON,
                        d = "Error logged with the Track\x26Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): ";
                    if (g) {
                        if (h && h.stringify) try {
                            d += h.stringify(c)
                        } catch (r) {
                            d += "no info provided; converting to string failed"
                        } else d += c.m;
                        "function" === typeof g.error ? g.error(d, c) : "function" === typeof g.log && g.log(d, c)
                    }
                }
            } catch (r) {}
        }
    }

    function y(f, e) {
        if (f && !(b.ue_err.ec > b.ue_err.mxe)) {
            b.ue_err.ter.push(f);
            e = e || {};
            var c = f.logLevel ||
                e.logLevel;
            e.logLevel = c;
            e.attribution = f.attribution || e.attribution;
            c && c !== z && c !== F && c !== B && c !== E || b.ue_err.ec++;
            c && c != z || ue_err.ecf++;
            r(f, e)
        }
    }
    if (b.ue_err && (!b.ueLogError || b.ueLogError.isStub)) {
        var m = b.ue_err_chan || "jserr",
            z = "FATAL",
            F = "ERROR",
            B = "WARN",
            E = "DOWNGRADED",
            H = "v5",
            x = 20,
            n = 256,
            D = /\(?([^\s]*):(\d+):\d+\)?/,
            w = /.*@(.*):(\d*)/;
        r.skipTrace = 1;
        q.skipTrace = 1;
        y.skipTrace = 1;
        (function() {
            if (b.ue_err.erl) {
                var f = b.ue_err.erl.length,
                    e, c;
                for (e = 0; e < f; e++) c = b.ue_err.erl[e], r(c.ex, c.info);
                ue_err.erl = []
            }
        })();
        b.ueLogError =
            y
    }
})(ue_csm, window);
(function(b, e) {
    function t(a) {
        for (var C = {}, k, u, p = 0; p < a.length; p++) u = a[p], u.r = u.r || c.rid, u.s = u.s || b.ue_sid, k = u.r + u.s + u.m, u.c && (C[k] || (C[k] = []), C[k].push(a[p]));
        return C
    }

    function q(a) {
        for (var c = 1; c < arguments.length; c++) {
            var k = arguments[c];
            try {
                if (k.isSupported) return k.send(a)
            } catch (b) {}
        }
    }

    function A() {
        if (l.length && !c.paused) {
            for (var a = 0; a < h.length; a++) h[a]();
            c._flhs += 1;
            r();
            q(t(l.splice(0, l.length)), G, J, K)
        }
        I = N = 0
    }

    function r() {
        n && y({
            k: "chk",
            f: c._flhs,
            l: c._lpn,
            s: "full"
        }, "csm")
    }

    function y(a, C, k) {
        k = k || {};
        !b.ue_furl ||
            0 === k.bf && c.isBF || (a = {
                r: k.r || (c.paused ? void 0 : c.rid),
                s: k.s || (c.paused ? void 0 : b.ue_sid),
                m: k.m || b.ue_mid,
                mkt: k.mkt || b.ue_mkt,
                sn: k.sn || b.ue_sn,
                c: C,
                d: a,
                t: k.t || c.d(),
                cs: k.c && b.ue_qsl
            }, c._lpn[C] = (c._lpn[C] || 0) + 1, k.b ? q(t([a]), G, K) : k.nb ? q(t([a]), G, J, K) : k.img || O[C] ? q(t([a]), K) : k.ff ? (l.push(a), A()) : k.n ? (l.push(a), 0 === L ? A() : I || (I = e.setTimeout(A, L))) : (l.push(a), N || (N = e.setTimeout(A, Q))))
    }

    function m(a, c, k) {
        M++;
        M == x && y({
                m: "Max number of Forester Logs exceeded",
                f: "forester-client.js",
                logLevel: "ERROR"
            }, e.ue_err_chan ||
            "jserr");
        (M < x || k && k.il) && y(a, c, k)
    }

    function z() {
        if (!P) {
            for (var a = 0; a < g.length; a++) g[a]();
            for (a = 0; a < h.length; a++) h[a]();
            c._flhs += 1;
            r();
            q(t(l.splice(0, l.length)), G, K);
            P = !0
        }
    }

    function F(a) {
        var c = f(a);
        a.reqs && (c = {
            csmcount: {
                counter: D,
                t: 0,
                value: c.length
            }
        }, c.csmcount.value += f(c).length, a.reqs.push(c), c = f(a));
        return c
    }
    var B = {};
    (function() {
        function a(a) {
            return 10 > a ? "0" + a : a
        }

        function c(a) {
            b.lastIndex = 0;
            return b.test(a) ? '"' + a.replace(b, function(a) {
                    var c = d[a];
                    return "string" === typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) +
                '"' : '"' + a + '"'
        }

        function k(a, b) {
            var d, u, e = p,
                g, h = b[a];
            h && "object" === typeof h && "function" === typeof h.toJSON && (h = h.toJSON(a));
            "function" === typeof l && (h = l.call(b, a, h));
            switch (typeof h) {
                case "string":
                    return c(h);
                case "number":
                    return isFinite(h) ? String(h) : "null";
                case "boolean":
                case "null":
                    return String(h);
                case "object":
                    if (!h) return "null";
                    p += f;
                    g = [];
                    if ("[object Array]" === Object.prototype.toString.apply(h)) {
                        b = h.length;
                        for (a = 0; a < b; a += 1) g[a] = k(a, h) || "null";
                        u = 0 === g.length ? "[]" : p ? "[\n" + p + g.join(",\n" + p) + "\n" + e +
                            "]" : "[" + g.join(",") + "]";
                        p = e;
                        return u
                    }
                    if (l && "object" === typeof l)
                        for (b = l.length, a = 0; a < b; a += 1) "string" === typeof l[a] && (d = l[a], (u = k(d, h)) && g.push(c(d) + (p ? ": " : ":") + u));
                    else
                        for (d in h) Object.prototype.hasOwnProperty.call(h, d) && (u = k(d, h)) && g.push(c(d) + (p ? ": " : ":") + u);
                    u = 0 === g.length ? "{}" : p ? "{\n" + p + g.join(",\n" + p) + "\n" + e + "}" : "{" + g.join(",") + "}";
                    p = e;
                    return u
            }
        }
        "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(c) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() +
                1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
            return this.valueOf()
        });
        var b = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            p, f, d = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            l;
        "function" !== typeof B.stringify && (B.stringify = function(a,
            c, b) {
            var C;
            f = p = "";
            if ("number" === typeof b)
                for (C = 0; C < b; C += 1) f += " ";
            else "string" === typeof b && (f = b);
            if ((l = c) && "function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length)) throw Error("JSON.stringify");
            return k("", {
                "": a
            })
        })
    })();
    var E = function() {
            function a(c, b) {
                if (null == c) return b.push("!n");
                if ("number" === typeof c) return b.push("!" + c);
                if ("string" === typeof c) return "\\" == c[c.length - 1] ? b.push("'" + c.replace(/'/g, "\\'") + "u005C'") : b.push("'" + c.replace(/'/g, "\\'") + "'");
                if ("boolean" === typeof c) return b.push(c ?
                    "!t" : "!f");
                if (c instanceof Array) {
                    b.push("*");
                    for (var d = 0; d < c.length; d++) a(c[d], b);
                    return b.push(")")
                }
                if ("object" == typeof c) {
                    b.push("(");
                    for (d in c) c.hasOwnProperty(d) && (b.push(d), a(c[d], b));
                    return b.push(")")
                }
                return b.push("!n")
            }
            return {
                stringify: function(c) {
                    var b = [];
                    a(c, b);
                    return b.join("")
                }
            }
        }(),
        H = b.ue_qsl || 2E3,
        x = 2E3,
        n = 1 === window.ue_ddq,
        D = "foresterPayloadSize",
        w = function() {},
        f = e.JSON && e.JSON.stringify || B && B.stringify,
        v = E.stringify,
        c = b.ue || {},
        E = b.uet || w;
    (b.uet || w)("bb", "ue_frst_v2", {
        wb: 1
    });
    var d =
        "//" + b.ue_furl + "/1/batch/1/OE/",
        l = [],
        g = [],
        h = [],
        P = !1,
        I, N, L = void 0 === b.ue_hpfi ? 1E3 : b.ue_hpfi,
        Q = void 0 === b.ue_lpfi ? 1E4 : b.ue_lpfi,
        O = {
            "scheduled-delivery": 1
        },
        M = 0,
        J = function() {
            function a() {
                if (e.XDomainRequest) {
                    var a = new XDomainRequest;
                    a.onerror = w;
                    a.ontimeout = w;
                    a.onprogress = w;
                    a.onload = w;
                    a.timeout = 0;
                    return a
                }
                if (e.XMLHttpRequest) {
                    a = new XMLHttpRequest;
                    if (!("withCredentials" in a)) throw "";
                    return a
                }
                if (e.ActiveXObject) {
                    for (var c = 0; c < g.length && !a; c++) try {
                        a = new ActiveXObject(g[c]), g = [g[c]]
                    } catch (b) {}
                    return a
                }
            }

            function f(a) {
                for (var k = [], d = a[0] || {}, l = 0; l < a.length; l++) {
                    var g = {};
                    g[a[l].c] = a[l].d;
                    k.push(g)
                }
                return {
                    rid: d.r || c.rid,
                    sid: d.s || b.ue_sid,
                    mid: d.m || b.ue_mid,
                    mkt: d.mkt || b.ue_mkt,
                    sn: d.sn || b.ue_sn,
                    reqs: k
                }
            }

            function k(c) {
                var b = f(c),
                    k = a();
                if (!k) throw "";
                k.onerror = function() {
                    for (var a = 0; a < c.length; a++) l.push(c[a]);
                    J.isSupported = !1
                };
                k.open("POST", d, !0);
                k.setRequestHeader && k.setRequestHeader("Content-type", "text/plain");
                b = F(b);
                k.send(b)
            }
            var g = "MSXML2.XMLHTTP.6.0 MSXML2.XMLHTTP.5.0 MSXML2.XMLHTTP.4.0 MSXML2.XMLHTTP.3.0 MSXML2.XMLHTTP Microsoft.XMLHTTP".split(" ");
            return {
                send: function(a) {
                    for (var c in a) a.hasOwnProperty(c) && a[c].length && k(a[c])
                },
                buildPOSTBodyLog: f,
                isSupported: !0
            }
        }(),
        K = function() {
            return {
                send: function(a) {
                    for (var l in a)
                        if (a.hasOwnProperty(l)) {
                            for (var k = a[l], g = k, p = {}, e, h = 0; h < g.length; h++) e = g[h].c, p[e] || (p[e] = []), p[e].push(g[h]);
                            k = k[0] || {};
                            g = k.sn || b.ue_sn;
                            k = d + (k.m || b.ue_mid) + ":" + (k.s || b.ue_sid) + ":" + (k.r || c.rid) + (g ? ":" + g : "");
                            g = [];
                            e = k;
                            var h = [],
                                n = void 0;
                            for (n in p)
                                if (p.hasOwnProperty(n))
                                    for (var m = 0; m < p[n].length; m++) {
                                        var r = p[n][m],
                                            q = encodeURIComponent((r.cs ?
                                                v : f)(r.d));
                                        h.push({
                                            l: q,
                                            t: r.t,
                                            p: 1,
                                            c: n,
                                            d: r.cs ? "c" : "j"
                                        })
                                    }
                            p = h;
                            h = void 0;
                            n = "$";
                            for (r = 0; r < p.length;) {
                                m = p[r];
                                h != m.c ? (e += n + m.c + "\x3d", n = "\x26", h = m.c) : e += ",";
                                var q = e,
                                    t = m.d + ":",
                                    y = m;
                                e = (y.l.match(".{1," + (H - e.length) + "}[^%]{0,2}") || [])[0] || "";
                                y.l = y.l.substr(e.length);
                                e = q + (t + e + ":" + m.t);
                                if (m.l) e += ":" + m.p++ + "_", g.push(e), e = k, n = "$", h = 0;
                                else if (r++, 1 != m.p)
                                    for (e += ":" + m.p + "_" + m.p, q = 0; q < m.p - 1; q++) g[g.length - q - 1] += m.p
                            }
                            g.push(e);
                            k = g;
                            for (g = 0; g < k.length; g++)(new Image).src = k[g]
                        }
                },
                isSupported: !0
            }
        }(),
        G = function() {
            return {
                send: function(a) {
                    for (var c in a)
                        if (a.hasOwnProperty(c)) {
                            var b =
                                J.buildPOSTBodyLog(a[c]),
                                b = F(b);
                            if (!navigator.sendBeacon(d, b)) throw "";
                        }
                },
                isSupported: !!navigator.sendBeacon
            }
        }();
    c._fic = K;
    c._fac = J;
    c._fbc = G;
    c._flq = l;
    c.sid = c.sid || b.ue_sid;
    c.mid = c.mid || b.ue_mid;
    c.furl = c.furl || b.ue_furl;
    c.sn = c.sn || b.ue_sn;
    c._flhs = c._flhs || 0;
    c._lpn = c._lpn || {};
    try {
        e.amznJQ && e.amznJQ.declareAvailable && e.amznJQ.declareAvailable("forester-client"), e.P && e.P.register && e.P.register("forester-client", w)
    } catch (a) {
        b.ueLogError(a, {
            logLevel: "WARN"
        })
    }(function() {
        c.log && c.log.isStub && (c.log.replay(function(a,
            c, b) {
            var g = a[2] || {};
            g.t = c;
            g.r = b;
            g.n = 1;
            m(a[0], a[1], g)
        }), c.onunload.replay(function(a) {
            g.push(a[0])
        }), c.onflush.replay(function(a) {
            h.push(a[0])
        }))
    })();
    c.log = m;
    c.log.reset = function() {
        M = 0
    };
    c.onunload = function(a) {
        g.push(a)
    };
    c.onflush = function(a) {
        h.push(a)
    };
    c.attach("beforeunload", z);
    c.attach("pagehide", z);
    E("ld", "ue_frst_v2", {
        wb: 1
    })
})(ue_csm, window);
(function(b) {
    function e(b, g, e) {
        e = e || {};
        !g || 0 === e.bf && d.isBF || (w || d.log(), e = {}, e[g] = b, n = [], w = 1, b = c(e, q), g = E[b], g || (g = E[b] = H++, x.push(b)), b = g, D[b] = D[b] ? D[b] + n.join("") : n.join(""))
    }

    function t(c) {
        var b = z[c];
        b || (b = z[c] = F++, B.push(c));
        return b
    }

    function q(c, b) {
        return null === b ? (n.push("!n"), v) : "number" === typeof b ? (isNaN(b) || Infinity === b ? n.push("!n") : 0 === b ? n.push("/") : n.push("_" + b.toString(32)), v) : "string" === typeof b ? (n.push("~" + t(b).toString(32)), v) : "boolean" === typeof b ? (n.push(b ? "!t" : "!f"), v) : b
    }

    function A(c,
        b) {
        for (var e = {}, d = 0; d < b.length; d++) e[b[d]] = c[b[d]];
        return e
    }

    function r() {
        w && (0 < B.length && d.log({
            k: "cl_dct",
            v: A(z, B.splice(0))
        }, "csm", {
            t: f++
        }), 0 < x.length && d.log({
            k: "cl_tmpl",
            v: A(E, x.splice(0))
        }, "csm", {
            t: f++
        }), d.log({
            k: "cl_logs",
            v: D
        }, "csm", {
            t: f++
        }), D = {}, w = 0)
    }

    function y() {
        z = {};
        F = 1;
        B = [];
        E = {};
        H = 1;
        x = []
    }

    function m() {
        d.clog && d.clog.isStub && d.clog.replay(function(c) {
            e(c[0], c[1], c[2])
        })
    }
    if (1 == b.ueinit && (!b.ue.clog || b.ue.clog.isStub)) {
        var z = {},
            F = 1,
            B = [],
            E = {},
            H = 1,
            x = [],
            n = [],
            D = {},
            w = 0,
            f = 0,
            v = "{{}}",
            c = JSON.stringify,
            d = b.ue;
        m();
        d.clog = e;
        d.clog._flush = r;
        d.clog._reset = y;
        d.onflush(r)
    }
})(ue_csm);
ue_csm.ue.exec(function(b, e) {
    var t = function() {},
        q = function() {
            return {
                send: function(b, q) {
                    if (q && b) {
                        var m;
                        if (e.XDomainRequest) m = new XDomainRequest, m.onerror = t, m.ontimeout = t, m.onprogress = t, m.onload = t, m.timeout = 0;
                        else if (e.XMLHttpRequest) {
                            if (m = new XMLHttpRequest, !("withCredentials" in m)) throw "";
                        } else m = void 0;
                        if (!m) throw "";
                        m.open("POST", b, !0);
                        m.setRequestHeader && m.setRequestHeader("Content-type", "text/plain");
                        m.send(q)
                    }
                },
                isSupported: !0
            }
        }(),
        A = function() {
            return {
                send: function(e, q) {
                    if (e && q)
                        if (navigator.sendBeacon(e,
                                q)) b.ue_sbuimp && b.ue && b.ue.ssw && b.ue.ssw("eelsts", "scs");
                        else throw "";
                },
                isSupported: !!navigator.sendBeacon && !(e.cordova && e.cordova.platformId && "ios" == e.cordova.platformId)
            }
        }();
    b.ue._ajx = q;
    b.ue._sBcn = A
}, "Transportation-clients")(ue_csm, window);
ue_csm.ue.exec(function(b, e) {
    function t() {
        for (var a = 0; a < arguments.length; a++) {
            var b = arguments[a];
            try {
                var d;
                if (b.isSupported) {
                    var g = G.buildPayload(l, c);
                    d = b.send(f, g)
                } else throw dummyException;
                return d
            } catch (p) {}
        }
        D({
            m: "All supported clients failed",
            attribution: "CSMSushiClient_TRANSPORTATION_FAIL",
            f: "sushi-client.js",
            logLevel: "ERROR"
        }, e.ue_err_chan || "jserr")
    }

    function q() {
        if (c.length) {
            for (var a = 0; a < L.length; a++) L[a]();
            t(n._sBcn || {}, n._ajx || {});
            c = [];
            d = {};
            l = {};
            O = M = g = h = 0
        }
    }

    function A() {
        var a = new Date,
            b = function(a) {
                return 10 >
                    a ? "0" + a : a
            };
        return Date.prototype.toISOString ? a.toISOString() : a.getUTCFullYear() + "-" + b(a.getUTCMonth() + 1) + "-" + b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds()) + "." + String((a.getUTCMilliseconds() / 1E3).toFixed(3)).slice(2, 5) + "Z"
    }

    function r(a) {
        try {
            return JSON.stringify(a)
        } catch (b) {}
        return null
    }

    function y(a, d, k, f) {
        var p = !1;
        f = f || {};
        I++;
        I == B && D({
                m: "Max number of Sushi Logs exceeded",
                f: "sushi-client.js",
                logLevel: "ERROR",
                attribution: "CSMSushiClient_MAX_CALLS"
            }, e.ue_err_chan ||
            "jserr");
        var h;
        if (h = !(I >= B))(h = a && -1 < a.constructor.toString().indexOf("Object") && d && -1 < d.constructor.toString().indexOf("String") && k && -1 < k.constructor.toString().indexOf("String")) || P++;
        h && (n.count && n.count("Event:" + k, 1), a.producerId = a.producerId || d, a.schemaId = a.schemaId || k, a.timestamp = A(), d = Date.now ? Date.now() : +new Date, k = Math.random().toString().substring(2, 12), a.messageId = b.ue_id + "-" + d + "-" + k, f && !f.ssd && (a.sessionId = a.sessionId || b.ue_sid, a.requestId = a.requestId || b.ue_id, a.obfuscatedMarketplaceId =
            a.obfuscatedMarketplaceId || b.ue_mid), (d = r(a)) ? (d = d.length, (c.length == E || g + d > H) && q(), g += d, a = {
            data: G.compressEvent(a)
        }, c.push(a), (f || {}).n ? 0 === J ? q() : O || (O = e.setTimeout(q, J)) : M || (M = e.setTimeout(q, K)), p = !0) : p = !1);
        !p && b.ue_int && console.error("Invalid JS Nexus API call");
        return p
    }

    function m() {
        if (!Q) {
            for (var a = 0; a < N.length; a++) N[a]();
            for (a = 0; a < L.length; a++) L[a]();
            c.length && (b.ue_sbuimp && b.ue && b.ue.ssw && (a = r({
                dct: l,
                evt: c
            }), b.ue.ssw("eeldata", a), b.ue.ssw("eelsts", "unk")), t(n._sBcn || {}));
            Q = !0
        }
    }

    function z(a) {
        N.push(a)
    }

    function F(a) {
        L.push(a)
    }
    var B = 1E3,
        E = 499,
        H = 524288,
        x = function() {},
        n = b.ue || {},
        D = n.log || x,
        w = b.uex || x;
    (b.uet || x)("bb", "ue_sushi_v1", {
        wb: 1
    });
    var f = b.ue_surl || "https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",
        v = ["messageId", "timestamp"],
        c = [],
        d = {},
        l = {},
        g = 0,
        h = 0,
        P = 0,
        I = 0,
        N = [],
        L = [],
        Q = !1,
        O, M, J = void 0 === b.ue_hpsi ? 1E3 : b.ue_hpsi,
        K = void 0 === b.ue_lpsi ? 1E4 : b.ue_lpsi,
        G = function() {
            function a(a) {
                d[a] || (d[a] = "#" + h++, l[d[a]] = a);
                return d[a]
            }

            function b(a) {
                return a.length > ("#" + h).length || "#" === a.charAt(0)
            }

            function e(a) {
                if (a) switch (typeof a) {
                    case "number":
                        return !(isNaN(a) || Infinity === a) && b(a.toString());
                    case "boolean":
                        break;
                    case "string":
                        return b(a);
                    default:
                        return !0
                }
                return !1
            }

            function f(b) {
                if (e(b)) {
                    var c = 0;
                    b instanceof Array ? c = 2 : b instanceof Function ? c = 0 : b instanceof Object && (c = 1);
                    switch (c) {
                        case 0:
                            b = a(b);
                            break;
                        case 2:
                            var d = b;
                            b = [];
                            for (var c = d.length, g = 0; g < c; g++) b[g] = f(d[g]);
                            break;
                        case 1:
                            c = {};
                            for (d in b) b.hasOwnProperty(d) && (c[a(d)] = -1 == v.indexOf(d) ? f(b[d]) : b[d]);
                            b = c
                    }
                }
                return b
            }
            return {
                compressEvent: f,
                buildPayload: function() {
                    return r({
                        cs: {
                            dct: l
                        },
                        events: c
                    })
                }
            }
        }();
    (function() {
        if (n.event && n.event.isStub) {
            if (b.ue_sbuimp && b.ue && b.ue.ssw) {
                var a = b.ue.ssw("eelsts").val;
                if (a && "unk" === a && (a = b.ue.ssw("eeldata").val)) {
                    var d;
                    a: {
                        try {
                            d = JSON.parse(a);
                            break a
                        } catch (e) {}
                        d = null
                    }
                    d && d.evt instanceof Array && d.dct instanceof Object && (c = d.evt, l = d.dct, c && l && (q(), b.ue.ssw("eeldata", "{}"), b.ue.ssw("eelsts", "scs")))
                }
            }
            n.event.replay(function(a) {
                a[3] = a[3] || {};
                a[3].n = 1;
                y.apply(this, a)
            });
            n.onSushiUnload.replay(function(a) {
                z(a[0])
            });
            n.onSushiFlush.replay(function(a) {
                F(a[0])
            })
        }
    })();
    n.attach("beforeunload", m);
    n.attach("pagehide", m);
    n._cmps = G;
    n.event = y;
    n.event.reset = function() {
        I = 0
    };
    n.onSushiUnload = z;
    n.onSushiFlush = F;
    try {
        e.P && e.P.register && e.P.register("sushi-client", x)
    } catch (a) {
        b.ueLogError(a, {
            logLevel: "WARN"
        })
    }
    w("ld", "ue_sushi_v1", {
        wb: 1
    })
}, "Nxs-JS-Client")(ue_csm, window);