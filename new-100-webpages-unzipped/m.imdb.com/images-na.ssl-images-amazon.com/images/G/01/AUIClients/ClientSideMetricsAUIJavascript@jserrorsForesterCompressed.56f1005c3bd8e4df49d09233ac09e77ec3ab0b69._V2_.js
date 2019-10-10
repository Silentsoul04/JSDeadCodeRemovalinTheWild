(function(d, f) {
    function B(a) {
        if (a) return a.replace(/^\s+|\s+$/g, "")
    }

    function w(a, k) {
        if (!a) return {};
        var b = "INFO" === k.logLevel;
        a.m && a.m.message && (a = a.m);
        var c = k.m || k.message || "",
            c = a.m && a.m.message ? c + a.m.message : a.m && a.m.target && a.m.target.tagName ? c + ("Error handler invoked by " + a.m.target.tagName + " tag") : a.m ? c + a.m : a.message ? c + a.message : c + "Unknown error",
            c = {
                m: c,
                name: a.name,
                type: a.type,
                csm: H + " " + (a.fromOnError ? "onerror" : "ueLogError")
            },
            g, h, e = 0,
            f;
        c.logLevel = k.logLevel || r;
        k.adb && (c.adb = k.adb);
        if (g = k.attribution) c.attribution =
            "" + g;
        if (!b) {
            c.pageURL = k.pageURL || "" + (window.location ? window.location.href : "") || "missing";
            c.f = a.f || a.sourceURL || a.fileName || a.filename || a.m && a.m.target && a.m.target.src;
            c.l = a.l || a.line || a.lineno || a.lineNumber;
            c.c = a.c ? "" + a.c : a.c;
            c.s = [];
            c.t = d.ue.d();
            if ((b = a.stack || (a.err ? a.err.stack : "")) && b.split)
                for (c.csm += " stack", g = b.split("\n"); e < g.length && c.s.length < y;)(b = g[e++]) && c.s.push(B(b));
            else
                for (c.csm += " callee", h = z(a.args || arguments, "callee"), g = e = 0; h && e < y;) f = l, h.skipTrace || (b = h.toString()) && b.substr && (f =
                    0 === g ? 4 * l : f, f = 1 == g ? 2 * l : f, c.s.push(b.substr(0, f)), g++), h = z(h, "caller"), e++;
            if (!c.f && 0 < c.s.length && (e = c) && e.s) {
                var q, b = 0 < e.s.length ? e.s[0] : "";
                g = 1 < e.s.length ? e.s[1] : "";
                b && (q = b.match(p));
                q && 3 == q.length || !g || (q = g.match(C));
                q && 3 == q.length && (e.f = q[1], e.l = q[2])
            }
        }
        return c
    }

    function z(a, d) {
        try {
            return a[d]
        } catch (b) {}
    }

    function D(a, k) {
        if (a) {
            for (var b = w(a, k), c = (window.ue_err ? window.ue_err.errorHandlers : null) || [], g = 0; g < c.length; g++) "function" == typeof c[g].handler && c[g].handler(b);
            d.ue.log(b, k.channel || I, {
                nb: 1
            });
            "function" === typeof ue_err.elh && ue_err.elh(a, k);
            try {
                if (!a.fromOnError) {
                    var h = f.console,
                        e = f.JSON,
                        c = "Error logged with the Track\x26Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): ";
                    if (h) {
                        if (e && e.stringify) try {
                            c += e.stringify(b)
                        } catch (l) {
                            c += "no info provided; converting to string failed"
                        } else c += b.m;
                        "function" === typeof h.error ? h.error(c, b) : "function" === typeof h.log && h.log(c, b)
                    }
                }
            } catch (l) {}
        }
    }

    function E(a, k) {
        if (a && !(d.ue_err.ec > d.ue_err.mxe)) {
            d.ue_err.ter.push(a);
            k = k || {};
            var b = a.logLevel ||
                k.logLevel;
            k.logLevel = b;
            k.attribution = a.attribution || k.attribution;
            b && b !== r && b !== G && b !== x && b !== A || d.ue_err.ec++;
            b && b != r || ue_err.ecf++;
            D(a, k)
        }
    }
    if (d.ue_err && (!d.ueLogError || d.ueLogError.isStub)) {
        var I = d.ue_err_chan || "jserr",
            r = "FATAL",
            G = "ERROR",
            x = "WARN",
            A = "DOWNGRADED",
            H = "v5",
            y = 20,
            l = 256,
            C = /\(?([^\s]*):(\d+):\d+\)?/,
            p = /.*@(.*):(\d*)/;
        D.skipTrace = 1;
        w.skipTrace = 1;
        E.skipTrace = 1;
        (function() {
            if (d.ue_err.erl) {
                var a = d.ue_err.erl.length,
                    k, b;
                for (k = 0; k < a; k++) b = d.ue_err.erl[k], D(b.ex, b.info);
                ue_err.erl = []
            }
        })();
        d.ueLogError =
            E
    }
})(ue_csm, window);
(function(d, f) {
    function B(v) {
        for (var a = {}, n, c, m = 0; m < v.length; m++) c = v[m], c.r = c.r || b.rid, c.s = c.s || d.ue_sid, n = c.r + c.s + c.m, c.c && (a[n] || (a[n] = []), a[n].push(v[m]));
        return a
    }

    function w(b) {
        for (var a = 1; a < arguments.length; a++) {
            var n = arguments[a];
            try {
                if (n.isSupported) return n.send(b)
            } catch (c) {}
        }
    }

    function z() {
        if (g.length && !b.paused) {
            for (var a = 0; a < e.length; a++) e[a]();
            b._flhs += 1;
            D();
            w(B(g.splice(0, g.length)), K, L, J)
        }
        q = N = 0
    }

    function D() {
        l && E({
            k: "chk",
            f: b._flhs,
            l: b._lpn,
            s: "full"
        }, "csm")
    }

    function E(a, c, n) {
        n = n || {};
        !d.ue_furl ||
            0 === n.bf && b.isBF || (a = {
                r: n.r || (b.paused ? void 0 : b.rid),
                s: n.s || (b.paused ? void 0 : d.ue_sid),
                m: n.m || d.ue_mid,
                mkt: n.mkt || d.ue_mkt,
                sn: n.sn || d.ue_sn,
                c: c,
                d: a,
                t: n.t || b.d(),
                cs: n.c && d.ue_qsl
            }, b._lpn[c] = (b._lpn[c] || 0) + 1, n.b ? w(B([a]), K, J) : n.nb ? w(B([a]), K, L, J) : n.img || Q[c] ? w(B([a]), J) : n.ff ? (g.push(a), z()) : n.n ? (g.push(a), 0 === P ? z() : q || (q = f.setTimeout(z, P))) : (g.push(a), N || (N = f.setTimeout(z, R))))
    }

    function I(a, b, c) {
        M++;
        M == y && E({
                m: "Max number of Forester Logs exceeded",
                f: "forester-client.js",
                logLevel: "ERROR"
            }, f.ue_err_chan ||
            "jserr");
        (M < y || c && c.il) && E(a, b, c)
    }

    function r() {
        if (!O) {
            for (var a = 0; a < h.length; a++) h[a]();
            for (a = 0; a < e.length; a++) e[a]();
            b._flhs += 1;
            D();
            w(B(g.splice(0, g.length)), K, J);
            O = !0
        }
    }

    function G(b) {
        var c = a(b);
        b.reqs && (c = {
            csmcount: {
                counter: C,
                t: 0,
                value: c.length
            }
        }, c.csmcount.value += a(c).length, b.reqs.push(c), c = a(b));
        return c
    }
    var x = {};
    (function() {
        function a(b) {
            return 10 > b ? "0" + b : b
        }

        function b(a) {
            d.lastIndex = 0;
            return d.test(a) ? '"' + a.replace(d, function(a) {
                    var b = h[a];
                    return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) +
                '"' : '"' + a + '"'
        }

        function c(a, d) {
            var h, F, k = m,
                v, f = d[a];
            f && "object" === typeof f && "function" === typeof f.toJSON && (f = f.toJSON(a));
            "function" === typeof e && (f = e.call(d, a, f));
            switch (typeof f) {
                case "string":
                    return b(f);
                case "number":
                    return isFinite(f) ? String(f) : "null";
                case "boolean":
                case "null":
                    return String(f);
                case "object":
                    if (!f) return "null";
                    m += g;
                    v = [];
                    if ("[object Array]" === Object.prototype.toString.apply(f)) {
                        d = f.length;
                        for (a = 0; a < d; a += 1) v[a] = c(a, f) || "null";
                        F = 0 === v.length ? "[]" : m ? "[\n" + m + v.join(",\n" + m) + "\n" + k +
                            "]" : "[" + v.join(",") + "]";
                        m = k;
                        return F
                    }
                    if (e && "object" === typeof e)
                        for (d = e.length, a = 0; a < d; a += 1) "string" === typeof e[a] && (h = e[a], (F = c(h, f)) && v.push(b(h) + (m ? ": " : ":") + F));
                    else
                        for (h in f) Object.prototype.hasOwnProperty.call(f, h) && (F = c(h, f)) && v.push(b(h) + (m ? ": " : ":") + F);
                    F = 0 === v.length ? "{}" : m ? "{\n" + m + v.join(",\n" + m) + "\n" + k + "}" : "{" + v.join(",") + "}";
                    m = k;
                    return F
            }
        }
        "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(b) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() +
                1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
            return this.valueOf()
        });
        var d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            m, g, h = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            e;
        "function" !== typeof x.stringify && (x.stringify = function(a,
            b, d) {
            var h;
            g = m = "";
            if ("number" === typeof d)
                for (h = 0; h < d; h += 1) g += " ";
            else "string" === typeof d && (g = d);
            if ((e = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("JSON.stringify");
            return c("", {
                "": a
            })
        })
    })();
    var A = function() {
            function a(b, c) {
                if (null == b) return c.push("!n");
                if ("number" === typeof b) return c.push("!" + b);
                if ("string" === typeof b) return "\\" == b[b.length - 1] ? c.push("'" + b.replace(/'/g, "\\'") + "u005C'") : c.push("'" + b.replace(/'/g, "\\'") + "'");
                if ("boolean" === typeof b) return c.push(b ?
                    "!t" : "!f");
                if (b instanceof Array) {
                    c.push("*");
                    for (var d = 0; d < b.length; d++) a(b[d], c);
                    return c.push(")")
                }
                if ("object" == typeof b) {
                    c.push("(");
                    for (d in b) b.hasOwnProperty(d) && (c.push(d), a(b[d], c));
                    return c.push(")")
                }
                return c.push("!n")
            }
            return {
                stringify: function(b) {
                    var c = [];
                    a(b, c);
                    return c.join("")
                }
            }
        }(),
        H = d.ue_qsl || 2E3,
        y = 2E3,
        l = 1 === window.ue_ddq,
        C = "foresterPayloadSize",
        p = function() {},
        a = f.JSON && f.JSON.stringify || x && x.stringify,
        k = A.stringify,
        b = d.ue || {},
        A = d.uet || p;
    (d.uet || p)("bb", "ue_frst_v2", {
        wb: 1
    });
    var c =
        "//" + d.ue_furl + "/1/batch/1/OE/",
        g = [],
        h = [],
        e = [],
        O = !1,
        q, N, P = void 0 === d.ue_hpfi ? 1E3 : d.ue_hpfi,
        R = void 0 === d.ue_lpfi ? 1E4 : d.ue_lpfi,
        Q = {
            "scheduled-delivery": 1
        },
        M = 0,
        L = function() {
            function a() {
                if (f.XDomainRequest) {
                    var b = new XDomainRequest;
                    b.onerror = p;
                    b.ontimeout = p;
                    b.onprogress = p;
                    b.onload = p;
                    b.timeout = 0;
                    return b
                }
                if (f.XMLHttpRequest) {
                    b = new XMLHttpRequest;
                    if (!("withCredentials" in b)) throw "";
                    return b
                }
                if (f.ActiveXObject) {
                    for (var c = 0; c < e.length && !b; c++) try {
                        b = new ActiveXObject(e[c]), e = [e[c]]
                    } catch (d) {}
                    return b
                }
            }

            function h(a) {
                for (var c = [], g = a[0] || {}, f = 0; f < a.length; f++) {
                    var e = {};
                    e[a[f].c] = a[f].d;
                    c.push(e)
                }
                return {
                    rid: g.r || b.rid,
                    sid: g.s || d.ue_sid,
                    mid: g.m || d.ue_mid,
                    mkt: g.mkt || d.ue_mkt,
                    sn: g.sn || d.ue_sn,
                    reqs: c
                }
            }

            function n(b) {
                var d = h(b),
                    f = a();
                if (!f) throw "";
                f.onerror = function() {
                    for (var a = 0; a < b.length; a++) g.push(b[a]);
                    L.isSupported = !1
                };
                f.open("POST", c, !0);
                f.setRequestHeader && f.setRequestHeader("Content-type", "text/plain");
                d = G(d);
                f.send(d)
            }
            var e = "MSXML2.XMLHTTP.6.0 MSXML2.XMLHTTP.5.0 MSXML2.XMLHTTP.4.0 MSXML2.XMLHTTP.3.0 MSXML2.XMLHTTP Microsoft.XMLHTTP".split(" ");
            return {
                send: function(b) {
                    for (var a in b) b.hasOwnProperty(a) && b[a].length && n(b[a])
                },
                buildPOSTBodyLog: h,
                isSupported: !0
            }
        }(),
        J = function() {
            return {
                send: function(h) {
                    for (var f in h)
                        if (h.hasOwnProperty(f)) {
                            for (var g = h[f], e = g, m = {}, t, l = 0; l < e.length; l++) t = e[l].c, m[t] || (m[t] = []), m[t].push(e[l]);
                            g = g[0] || {};
                            e = g.sn || d.ue_sn;
                            g = c + (g.m || d.ue_mid) + ":" + (g.s || d.ue_sid) + ":" + (g.r || b.rid) + (e ? ":" + e : "");
                            e = [];
                            t = g;
                            var l = [],
                                p = void 0;
                            for (p in m)
                                if (m.hasOwnProperty(p))
                                    for (var u = 0; u < m[p].length; u++) {
                                        var q = m[p][u],
                                            r = encodeURIComponent((q.cs ?
                                                k : a)(q.d));
                                        l.push({
                                            l: r,
                                            t: q.t,
                                            p: 1,
                                            c: p,
                                            d: q.cs ? "c" : "j"
                                        })
                                    }
                            m = l;
                            l = void 0;
                            p = "$";
                            for (q = 0; q < m.length;) {
                                u = m[q];
                                l != u.c ? (t += p + u.c + "\x3d", p = "\x26", l = u.c) : t += ",";
                                var r = t,
                                    x = u.d + ":",
                                    w = u;
                                t = (w.l.match(".{1," + (H - t.length) + "}[^%]{0,2}") || [])[0] || "";
                                w.l = w.l.substr(t.length);
                                t = r + (x + t + ":" + u.t);
                                if (u.l) t += ":" + u.p++ + "_", e.push(t), t = g, p = "$", l = 0;
                                else if (q++, 1 != u.p)
                                    for (t += ":" + u.p + "_" + u.p, r = 0; r < u.p - 1; r++) e[e.length - r - 1] += u.p
                            }
                            e.push(t);
                            g = e;
                            for (e = 0; e < g.length; e++)(new Image).src = g[e]
                        }
                },
                isSupported: !0
            }
        }(),
        K = function() {
            return {
                send: function(b) {
                    for (var a in b)
                        if (b.hasOwnProperty(a)) {
                            var d =
                                L.buildPOSTBodyLog(b[a]),
                                d = G(d);
                            if (!navigator.sendBeacon(c, d)) throw "";
                        }
                },
                isSupported: !!navigator.sendBeacon
            }
        }();
    b._fic = J;
    b._fac = L;
    b._fbc = K;
    b._flq = g;
    b.sid = b.sid || d.ue_sid;
    b.mid = b.mid || d.ue_mid;
    b.furl = b.furl || d.ue_furl;
    b.sn = b.sn || d.ue_sn;
    b._flhs = b._flhs || 0;
    b._lpn = b._lpn || {};
    try {
        f.amznJQ && f.amznJQ.declareAvailable && f.amznJQ.declareAvailable("forester-client"), f.P && f.P.register && f.P.register("forester-client", p)
    } catch (v) {
        d.ueLogError(v, {
            logLevel: "WARN"
        })
    }(function() {
        b.log && b.log.isStub && (b.log.replay(function(b,
            a, c) {
            var d = b[2] || {};
            d.t = a;
            d.r = c;
            d.n = 1;
            I(b[0], b[1], d)
        }), b.onunload.replay(function(b) {
            h.push(b[0])
        }), b.onflush.replay(function(b) {
            e.push(b[0])
        }))
    })();
    b.log = I;
    b.log.reset = function() {
        M = 0
    };
    b.onunload = function(b) {
        h.push(b)
    };
    b.onflush = function(b) {
        e.push(b)
    };
    b.attach("beforeunload", r);
    b.attach("pagehide", r);
    A("ld", "ue_frst_v2", {
        wb: 1
    })
})(ue_csm, window);
(function(d) {
    function f(a, d, e) {
        e = e || {};
        !d || 0 === e.bf && c.isBF || (p || c.log(), e = {}, e[d] = a, l = [], p = 1, a = b(e, w), d = A[a], d || (d = A[a] = H++, y.push(a)), a = d, C[a] = C[a] ? C[a] + l.join("") : l.join(""))
    }

    function B(b) {
        var a = r[b];
        a || (a = r[b] = G++, x.push(b));
        return a
    }

    function w(b, a) {
        return null === a ? (l.push("!n"), k) : "number" === typeof a ? (isNaN(a) || Infinity === a ? l.push("!n") : 0 === a ? l.push("/") : l.push("_" + a.toString(32)), k) : "string" === typeof a ? (l.push("~" + B(a).toString(32)), k) : "boolean" === typeof a ? (l.push(a ? "!t" : "!f"), k) : a
    }

    function z(a,
        b) {
        for (var c = {}, d = 0; d < b.length; d++) c[b[d]] = a[b[d]];
        return c
    }

    function D() {
        p && (0 < x.length && c.log({
            k: "cl_dct",
            v: z(r, x.splice(0))
        }, "csm", {
            t: a++
        }), 0 < y.length && c.log({
            k: "cl_tmpl",
            v: z(A, y.splice(0))
        }, "csm", {
            t: a++
        }), c.log({
            k: "cl_logs",
            v: C
        }, "csm", {
            t: a++
        }), C = {}, p = 0)
    }

    function E() {
        r = {};
        G = 1;
        x = [];
        A = {};
        H = 1;
        y = []
    }

    function I() {
        c.clog && c.clog.isStub && c.clog.replay(function(a) {
            f(a[0], a[1], a[2])
        })
    }
    if (1 == d.ueinit && (!d.ue.clog || d.ue.clog.isStub)) {
        var r = {},
            G = 1,
            x = [],
            A = {},
            H = 1,
            y = [],
            l = [],
            C = {},
            p = 0,
            a = 0,
            k = "{{}}",
            b = JSON.stringify,
            c = d.ue;
        I();
        c.clog = f;
        c.clog._flush = D;
        c.clog._reset = E;
        c.onflush(D)
    }
})(ue_csm);