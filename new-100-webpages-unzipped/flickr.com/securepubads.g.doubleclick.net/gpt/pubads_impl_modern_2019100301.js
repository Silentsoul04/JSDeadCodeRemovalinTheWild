"use strict";
(function(_) {
    var window = this,
        document = this.document;
    var ba, ea, ia, ja, ma, va, Aa, Ga, Fa, Da, Ia, Oa, Ma, Na, Pa, Qa;
    _.m = function(a) {
        return function() {
            return _.ca[a].apply(this, arguments)
        }
    };
    ea = function(a) {
        return a ? a.passive && da() ? a : a.capture || !1 : !1
    };
    ia = function() {
        return fa(_.p.top, "GoogleSetNPA") || fa(ha(), "GoogleSetNPA")
    };
    ja = function(a, b, c = !1) {
        switch (a) {
            case 2:
            case 4:
                return !1;
            case 3:
                return !0;
            case 1:
                return b;
            default:
                return c && b
        }
    };
    ma = function(a) {
        if (!document.getElementById("gatc:host:script")) {
            var b = document.createElement("script");
            b.id = "gatc:host:script";
            _.ka(b, la.Yb);
            la.Xb.appendChild(b)
        }(b = window.gatc_host) && "function" === typeof b.openConsoleTab ? a(b) : Array.isArray(b) && "function" === typeof b.push ? b.push(a) : window.gatc_host = [a]
    };
    va = function(a) {
        var b = na;
        const c = e => {
                Array.isArray(e) && (e = new b.j(e), a(e))
            },
            d = new oa;
        ma(e => {
            if (e && "function" === typeof e.openConsoleTab) {
                const f = new pa;
                _.qa(f, 1, b.l, 0);
                e.openConsoleTab(_.ra(f), c, g => {
                    if (!(d.j instanceof MessagePort)) {
                        var h = d.j;
                        d.j = g;
                        for (const k of sa(h, h.j.length)) ta(d, k)
                    }
                })
            }
        });
        return d
    };
    Aa = function() {
        wa("pubadsReady", !0);
        if (_.q.v().j(206, !1)) {
            let a = 0;
            Object.defineProperty(_.xa(), "pubadsReady", {
                get() {
                    5 > a && _.ya("gpt_pubads_ready", b => {
                        ++a;
                        _.r(b);
                        const c = Error("pubadsReady");
                        _.t(b, "stack", za(c.stack, c.message))
                    }, {
                        ya: .1
                    });
                    return !0
                },
                configurable: !0,
                enumerable: !0
            })
        }
    };
    _.ca = [];
    _.p = this || self;
    _.Ba = function(a) {
        return void 0 !== a
    };
    _.Ca = function(a) {
        return "string" == typeof a
    };
    Ga = function() {
        if (null === Da) a: {
            var a = _.p.document;
            if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Fa.test(a)) {
                Da = a;
                break a
            }
            Da = ""
        }
        return Da
    };
    Fa = /^[\w+/_-]+[=]{0,2}$/;
    Da = null;
    _.Ha = function() {};
    Ia = function(a) {
        a.Na = void 0;
        a.v = function() {
            return a.Na ? a.Na : a.Na = new a
        }
    };
    _.Ja = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    };
    _.v = function(a) {
        return "array" == _.Ja(a)
    };
    _.Ka = function(a) {
        var b = _.Ja(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.La = function(a) {
        return "function" == _.Ja(a)
    };
    _.w = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    Oa = function(a) {
        return a[Ma] || (a[Ma] = ++Na)
    };
    Ma = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Na = 0;
    Pa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Qa = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.z = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.z = Pa : _.z = Qa;
        return _.z.apply(null, arguments)
    };
    _.Ra = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    _.A = function() {
        return +new Date
    };
    _.B = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ga = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var Sa = {
        vd: 0,
        cd: 1,
        dd: 2,
        ed: 8,
        Cd: 9,
        wd: 16,
        ad: 17,
        $c: 24,
        pd: 25,
        Zc: 26,
        Yc: 27,
        sd: 30,
        nd: 32
    };
    var Ta = [1, 2, 8],
        Ua = a => `${a}Correlator ` + 'has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en';
    _.Va = [];
    var Wa;
    var Ya, ab, bb, db, fb, ib, jb, mb, pb, qb, sb, ob, rb, tb, wb, xb;
    _.Xa = function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    _.C = function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };
    _.E = function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    };
    _.F = function(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    };
    Ya = function(a, b) {
        var c = 0;
        _.C(a, function(d, e) {
            c = b.call(void 0, c, d, e, a)
        });
        return c
    };
    _.$a = function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    };
    ab = function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0
    };
    bb = function(a, b) {
        var c = 0;
        _.C(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    };
    db = function(a, b) {
        b = _.cb(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    _.cb = function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    };
    _.eb = function(a, b) {
        return 0 <= _.Xa(a, b)
    };
    fb = function(a, b) {
        _.eb(a, b) || a.push(b)
    };
    _.hb = function(a, b) {
        b = _.Xa(a, b);
        0 <= b && _.gb(a, b)
    };
    _.gb = function(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    };
    ib = function(a, b) {
        b = _.cb(a, b, void 0);
        return 0 <= b ? (_.gb(a, b), !0) : !1
    };
    jb = function(a) {
        return Array.prototype.concat.apply([], arguments)
    };
    _.lb = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    mb = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    _.nb = function(a) {
        for (var b = {}, c = 0, d = 0; d < a.length;) {
            var e = a[d++];
            var f = e;
            f = _.w(f) ? "o" + Oa(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
        }
        a.length = c
    };
    pb = function(a, b) {
        a.sort(b || ob)
    };
    qb = function(a, b) {
        for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || ob;
        pb(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (d = 0; d < a.length; d++) a[d] = c[d].value
    };
    sb = function(a, b) {
        if (!_.Ka(a) || !_.Ka(b) || a.length != b.length) return !1;
        for (var c = a.length, d = rb, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    ob = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    rb = function(a, b) {
        return a === b
    };
    tb = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    wb = function() {
        for (var a = ub(vb).length, b = [], c = 0; c < a; c++) b[c] = 0;
        return b
    };
    xb = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (_.v(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = xb.apply(null, mb(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    var zb = function(a) {
            let b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        Ab = function(a) {
            let b = a;
            return function() {
                if (b) {
                    const c = b;
                    b = null;
                    c()
                }
            }
        },
        Bb = function(a) {
            let b = 0,
                c = !1,
                d = [];
            const e = function() {
                    b = 0;
                    c && (c = !1, f())
                },
                f = function() {
                    b = _.p.setTimeout(e, 200);
                    a.apply(void 0, d)
                };
            return function(g) {
                d = arguments;
                b ? c = !0 : f()
            }
        };
    var Db, Eb, Fb, Gb, Hb, Ib, Jb;
    _.Cb = function(a, b) {
        for (const c in a) b.call(void 0, a[c], c, a)
    };
    Db = function(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    };
    Eb = function(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    };
    Fb = function(a, b) {
        return null !== a && b in a
    };
    Gb = function(a, b) {
        for (const c in a)
            if (a[c] == b) return !0;
        return !1
    };
    Hb = function(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    Ib = function(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    Jb = function(a) {
        const b = arguments.length;
        if (1 == b && _.v(arguments[0])) return Jb.apply(null, arguments[0]);
        const c = {};
        for (let d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };
    var Lb;
    _.Mb = function(a, b) {
        this.j = a === _.Kb && b || "";
        this.l = Lb
    };
    _.Mb.prototype.Ua = !0;
    _.Mb.prototype.Sa = function() {
        return this.j
    };
    _.Nb = function(a) {
        return a instanceof _.Mb && a.constructor === _.Mb && a.l === Lb ? a.j : "type_error:Const"
    };
    Lb = {};
    _.Kb = {};
    var Qb = function(a, b, c) {
            this.j = a === Ob && b || "";
            this.Qa = a === Ob && c || null;
            this.l = Pb
        },
        Pb, Ob;
    Qb.prototype.Ua = !0;
    Qb.prototype.Sa = function() {
        return this.j.toString()
    };
    _.Tb = function(a) {
        if (a instanceof Qb && a.constructor === Qb && a.l === Pb) return a.j;
        _.Ja(a);
        return "type_error:TrustedResourceUrl"
    };
    Pb = {};
    _.Ub = function(a) {
        return new Qb(Ob, a, null)
    };
    Ob = {};
    var Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc;
    Vb = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    Wb = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    Xb = /&/g;
    Yb = /</g;
    Zb = />/g;
    $b = /"/g;
    ac = /'/g;
    bc = /\x00/g;
    cc = /[\x00&<>"']/;
    _.ec = function(a, b) {
        let c = 0;
        a = Wb(String(a)).split(".");
        b = Wb(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = dc(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || dc(0 == e[2].length, 0 == f[2].length) || dc(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    };
    dc = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var jc, gc, fc;
    _.hc = function(a, b) {
        this.j = a === fc && b || "";
        this.l = gc
    };
    _.hc.prototype.Ua = !0;
    _.hc.prototype.Sa = function() {
        return this.j.toString()
    };
    _.ic = function(a) {
        if (a instanceof _.hc && a.constructor === _.hc && a.l === gc) return a.j;
        _.Ja(a);
        return "type_error:SafeUrl"
    };
    jc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.kc = function(a) {
        if (a instanceof _.hc) return a;
        a = "object" == typeof a && a.Ua ? a.Sa() : String(a);
        jc.test(a) || (a = "about:invalid#zClosurez");
        return new _.hc(fc, a)
    };
    gc = {};
    fc = {};
    _.mc = function() {
        this.j = "";
        this.l = _.lc
    };
    _.mc.prototype.Ua = !0;
    _.lc = {};
    _.mc.prototype.Sa = function() {
        return this.j
    };
    _.nc = function(a) {
        var b = new _.mc;
        b.j = a;
        return b
    };
    _.qc = _.nc("");
    a: {
        var sc = _.p.navigator;
        if (sc) {
            var tc = sc.userAgent;
            if (tc) {
                _.rc = tc;
                break a
            }
        }
        _.rc = ""
    }
    var G = function(a) {
            return -1 != _.rc.indexOf(a)
        },
        uc = function(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
            return c
        };
    var yc, xc, zc;
    _.vc = function() {
        return G("Trident") || G("MSIE")
    };
    _.wc = function() {
        return G("Firefox") || G("FxiOS")
    };
    yc = function() {
        return G("Safari") && !(xc() || G("Coast") || G("Opera") || G("Edge") || G("Edg/") || G("OPR") || _.wc() || G("Silk") || G("Android"))
    };
    xc = function() {
        return (G("Chrome") || G("CriOS")) && !G("Edge")
    };
    _.Ac = function() {
        function a(e) {
            e = db(e, d);
            return c[e] || ""
        }
        var b = _.rc;
        if (_.vc()) return zc(b);
        b = uc(b);
        var c = {};
        _.C(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = _.Ra(Fb, c);
        return G("Opera") ? a(["Version", "Opera"]) : G("Edge") ? a(["Edge"]) : G("Edg/") ? a(["Edg"]) : xc() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
    };
    zc = function(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                } else b = "7.0";
                else b = c[1];
        return b
    };
    _.ka = function(a, b) {
        a.src = _.Tb(b);
        (b = Ga()) && a.setAttribute("nonce", b)
    };
    var Cc, Dc;
    _.Bc = function(a) {
        cc.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Xb, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Yb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Zb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace($b, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(ac, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(bc, "&#0;")));
        return a
    };
    Cc = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    Dc = function(a) {
        a = String(a);
        var b = a.indexOf("."); - 1 == b && (b = a.length);
        return Cc("0", Math.max(0, 2 - b)) + a
    };
    _.Ec = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ _.A()).toString(36)
    };
    var Fc = function() {
        return G("iPhone") && !G("iPod") && !G("iPad")
    };
    var Gc = function(a) {
        Gc[" "](a);
        return a
    };
    Gc[" "] = _.Ha;
    var Hc = function(a, b) {
            try {
                return Gc(a[b]), !0
            } catch (c) {}
            return !1
        },
        Jc = function(a, b) {
            var c = Ic;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var Mc, Nc, Sc, Tc, Uc, Vc, Wc, ad, Ic;
    _.Kc = G("Opera");
    _.Lc = _.vc();
    Mc = G("Edge");
    Nc = Mc || _.Lc;
    _.Oc = G("Gecko") && !(-1 != _.rc.toLowerCase().indexOf("webkit") && !G("Edge")) && !(G("Trident") || G("MSIE")) && !G("Edge");
    _.Pc = -1 != _.rc.toLowerCase().indexOf("webkit") && !G("Edge");
    _.Qc = _.Pc && G("Mobile");
    _.Rc = G("Android");
    Sc = Fc();
    Tc = G("iPad");
    Uc = G("iPod");
    Vc = function() {
        var a = _.p.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var Xc = "",
            Yc = function() {
                var a = _.rc;
                if (_.Oc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Mc) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Lc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (_.Pc) return /WebKit\/(\S+)/.exec(a);
                if (_.Kc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Yc && (Xc = Yc ? Yc[1] : "");
        if (_.Lc) {
            var Zc = Vc();
            if (null != Zc && Zc > parseFloat(Xc)) {
                Wc = String(Zc);
                break a
            }
        }
        Wc = Xc
    }
    ad = Wc;
    Ic = {};
    _.gd = function(a) {
        return Jc(a, function() {
            return 0 <= _.ec(ad, a)
        })
    };
    _.hd = _.p.document && _.Lc ? Vc() : void 0;
    var id = xc(),
        jd = yc() && !(Fc() || G("iPad") || G("iPod"));
    var kd = {},
        ld = null,
        md = _.Oc || _.Pc && !jd || _.Kc || "function" == typeof _.p.btoa,
        nd = function(a, b) {
            void 0 === b && (b = 0);
            if (!ld) {
                ld = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    kd[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === ld[h] && (ld[h] = g)
                    }
                }
            }
            b = kd[b];
            c = [];
            for (d = 0; d < a.length; d += 3) {
                var k = a[d],
                    l = (e = d + 1 < a.length) ? a[d + 1] : 0;
                h = (f = d + 2 < a.length) ? a[d + 2] : 0;
                g = k >> 2;
                k = (k & 3) << 4 | l >> 4;
                l = (l & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64, e || (l = 64));
                c.push(b[g], b[k], b[l] || "", b[h] || "")
            }
            return c.join("")
        };
    var od = 0,
        pd = 0;
    var qd = function() {
        this.j = []
    };
    qd.prototype.length = function() {
        return this.j.length
    };
    var rd = function(a, b) {
        for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
        a.j.push(b)
    };
    var sd = function() {
            this.l = [];
            this.j = new qd
        },
        td = function(a, b, c) {
            if (null != c) {
                rd(a.j, 8 * b);
                a = a.j;
                var d = c;
                c = 0 > d;
                d = Math.abs(d);
                b = d >>> 0;
                d = Math.floor((d - b) / 4294967296);
                d >>>= 0;
                c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
                od = b;
                pd = d;
                c = od;
                for (b = pd; 0 < b || 127 < c;) a.j.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
                a.j.push(c)
            }
        };
    var vd, wd, xd, Dd, yd, Gd, Jd, Kd, Ld;
    _.ud = function() {};
    vd = "function" == typeof Uint8Array;
    _.zd = function(a, b, c, d) {
        a.j = null;
        b || (b = []);
        a.D = void 0;
        a.o = -1;
        a.l = b;
        a: {
            if (b = a.l.length) {
                --b;
                var e = a.l[b];
                if (!(null === e || "object" != typeof e || _.v(e) || vd && e instanceof Uint8Array)) {
                    a.A = b - a.o;
                    a.m = e;
                    break a
                }
            }
            a.A = Number.MAX_VALUE
        }
        a.C = {};
        if (c)
            for (b = 0; b < c.length; b++) e = c[b], e < a.A ? (e += a.o, a.l[e] = a.l[e] || wd) : (xd(a), a.m[e] = a.m[e] || wd);
        if (d && d.length)
            for (b = 0; b < d.length; b++) yd(a, d[b])
    };
    wd = [];
    xd = function(a) {
        var b = a.A + a.o;
        a.l[b] || (a.m = a.l[b] = {})
    };
    _.H = function(a, b) {
        if (b < a.A) {
            b += a.o;
            var c = a.l[b];
            return c === wd ? a.l[b] = [] : c
        }
        if (a.m) return c = a.m[b], c === wd ? a.m[b] = [] : c
    };
    _.Ad = function(a, b) {
        a = _.H(a, b);
        return null == a ? a : +a
    };
    _.J = function(a, b) {
        a = _.H(a, b);
        return null == a ? a : !!a
    };
    _.Bd = function(a) {
        if (null == a || _.Ca(a)) return a;
        if (vd && a instanceof Uint8Array) return nd(a);
        _.Ja(a);
        return null
    };
    _.Cd = function(a, b, c) {
        a = _.H(a, b);
        return null == a ? c : a
    };
    _.K = function(a, b, c) {
        b < a.A ? a.l[b + a.o] = c : (xd(a), a.m[b] = c);
        return a
    };
    _.qa = function(a, b, c, d) {
        c !== d ? _.K(a, b, c) : a.l[b + a.o] = null;
        return a
    };
    Dd = function(a, b, c) {
        _.H(a, b).push(c)
    };
    _.Ed = function(a, b, c, d) {
        (c = yd(a, c)) && c !== b && void 0 !== d && (a.j && c in a.j && (a.j[c] = void 0), _.K(a, c, void 0));
        _.K(a, b, d)
    };
    yd = function(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e],
                g = _.H(a, f);
            null != g && (c = f, d = g, _.K(a, f, void 0))
        }
        return c ? (_.K(a, c, d), c) : 0
    };
    _.Fd = function(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            var d = _.H(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    };
    _.Hd = function(a, b, c) {
        Gd(a, b, c);
        b = a.j[c];
        b == wd && (b = a.j[c] = []);
        return b
    };
    Gd = function(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            for (var d = _.H(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
    };
    _.Id = function(a, b, c) {
        a.j || (a.j = {});
        var d = c ? _.ra(c) : c;
        a.j[b] = c;
        _.K(a, b, d)
    };
    Jd = function(a, b, c) {
        a.j || (a.j = {});
        c = c || [];
        for (var d = [], e = 0; e < c.length; e++) d[e] = _.ra(c[e]);
        a.j[b] = c;
        return _.K(a, b, d)
    };
    Kd = function(a, b, c, d) {
        Gd(a, d, b);
        var e = a.j[b];
        e || (e = a.j[b] = []);
        c = c ? c : new d;
        a = _.H(a, b);
        e.push(c);
        a.push(_.ra(c))
    };
    _.ra = function(a) {
        if (a.j)
            for (var b in a.j) {
                var c = a.j[b];
                if (_.v(c))
                    for (var d = 0; d < c.length; d++) c[d] && _.ra(c[d]);
                else c && _.ra(c)
            }
        return a.l
    };
    Ld = function(a) {
        if (_.v(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Ld(d) : d)
            }
            return b
        }
        if (vd && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Ld(d) : d);
        return b
    };
    _.Nd = function(a) {
        _.zd(this, a, Md, null)
    };
    _.B(_.Nd, _.ud);
    var Md = [13];
    _.Nd.prototype.B = _.m(1);
    _.Pd = function(a) {
        _.zd(this, a, Od, null)
    };
    _.B(_.Pd, _.ud);
    var Od = [13];
    _.Pd.prototype.B = _.m(0);
    _.Qd = function(a) {
        _.zd(this, a, null, null)
    };
    _.B(_.Qd, _.ud);
    _.Sd = function(a) {
        _.zd(this, a, null, null)
    };
    _.B(_.Sd, _.ud);
    _.Sd.prototype.getHtml = function() {
        return _.H(this, 1)
    };
    var Td = document,
        Ud = window;
    var Vd = function(a) {
        _.zd(this, a, null, null)
    };
    _.B(Vd, _.ud);
    var Wd = function(a) {
        _.zd(this, a, null, null)
    };
    _.B(Wd, _.ud);
    var Xd = function(a) {
        this.j = a || {
            cookie: ""
        }
    };
    Xd.prototype.set = function(a, b, c, d, e, f) {
        if ("object" === typeof c) {
            var g = c.o;
            f = c.A;
            e = c.j;
            d = c.l;
            c = c.m
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === c && (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(_.A() + 1E3 * c)).toUTCString();
        this.j.cookie = a + "=" + b + e + d + c + f + (null != g ? ";samesite=" + g : "")
    };
    Xd.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Wb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    var Zd = a => {
        var b = (b = (new Xd(a)).get("FCCDCF", "")) ? b : null;
        if (!b) return Yd(a);
        try {
            var c = new Vd(b ? JSON.parse(b) : null)
        } catch (d) {
            c = null
        }
        if (!c) return Yd(a);
        c = _.Fd(c, Wd, 3);
        if (!c) return Yd(a);
        (a = _.H(c, 2)) ? (b = _.A(), a = b < a ? !1 : b <= a + 33696E6) : a = !1;
        return a ? _.H(c, 1) : null
    };
    const Yd = a => (a = (new Xd(a)).get("DATA_USE_CONSENT", "")) ? a : null;
    var ae = function(a) {
        _.zd(this, a, $d, null)
    };
    _.B(ae, _.ud);
    var $d = [1, 2, 3, 4];
    var de = function(a, b, c) {
            "number" === typeof a ? (this.j = be(a, b || 0, c || 1), ce(this, c || 1)) : _.w(a) ? (this.j = be(a.getFullYear(), a.getMonth(), a.getDate()), ce(this, a.getDate())) : (this.j = new Date(_.A()), a = this.j.getDate(), this.j.setHours(0), this.j.setMinutes(0), this.j.setSeconds(0), this.j.setMilliseconds(0), ce(this, a))
        },
        be = function(a, b, c) {
            b = new Date(a, b, c);
            0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
            return b
        };
    ba = de.prototype;
    ba.getFullYear = function() {
        return this.j.getFullYear()
    };
    ba.getMonth = function() {
        return this.j.getMonth()
    };
    ba.getDate = function() {
        return this.j.getDate()
    };
    ba.getTime = function() {
        return this.j.getTime()
    };
    ba.set = function(a) {
        this.j = new Date(a.getFullYear(), a.getMonth(), a.getDate())
    };
    ba.add = function(a) {
        if (a.B || a.o) {
            var b = this.getMonth() + a.o + 12 * a.B,
                c = this.getFullYear() + Math.floor(b / 12);
            b %= 12;
            0 > b && (b += 12);
            a: {
                switch (b) {
                    case 1:
                        var d = 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 28 : 29;
                        break a;
                    case 5:
                    case 8:
                    case 10:
                    case 3:
                        d = 30;
                        break a
                }
                d = 31
            }
            d = Math.min(d, this.getDate());
            this.j.setDate(1);
            this.j.setFullYear(c);
            this.j.setMonth(b);
            this.j.setDate(d)
        }
        a.j && (a = new Date((new Date(this.getFullYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.j), this.j.setDate(1), this.j.setFullYear(a.getFullYear()), this.j.setMonth(a.getMonth()), this.j.setDate(a.getDate()), ce(this, a.getDate()))
    };
    ba.cb = function(a) {
        return [this.getFullYear(), Dc(this.getMonth() + 1), Dc(this.getDate())].join(a ? "-" : "")
    };
    ba.toString = function() {
        return this.cb()
    };
    var ce = function(a, b) {
        a.getDate() != b && a.j.setUTCHours(a.j.getUTCHours() + (a.getDate() < b ? 1 : -1))
    };
    de.prototype.valueOf = function() {
        return this.j.valueOf()
    };
    var ee = function(a, b, c, d, e, f, g) {
        this.j = "number" === typeof a ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : new Date(a && a.getTime ? a.getTime() : _.A())
    };
    _.B(ee, de);
    ee.prototype.add = function(a) {
        de.prototype.add.call(this, a);
        a.l && this.j.setUTCHours(this.j.getUTCHours() + a.l);
        a.m && this.j.setUTCMinutes(this.j.getUTCMinutes() + a.m);
        a.A && this.j.setUTCSeconds(this.j.getUTCSeconds() + a.A)
    };
    ee.prototype.cb = function(a) {
        var b = de.prototype.cb.call(this, a);
        return a ? b + "T" + Dc(this.j.getHours()) + ":" + Dc(this.j.getMinutes()) + ":" + Dc(this.j.getSeconds()) : b + "T" + Dc(this.j.getHours()) + Dc(this.j.getMinutes()) + Dc(this.j.getSeconds())
    };
    ee.prototype.toString = function() {
        return this.cb()
    };
    var ge;
    _.fe = !_.Lc || 9 <= Number(_.hd);
    ge = _.Lc || _.Kc || _.Pc;
    _.M = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.M.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.M.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.M.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.O = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.O.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    _.O.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.O.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.O.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.je = function(a) {
        return a ? new _.he(_.ie(a)) : Wa || (Wa = new _.he)
    };
    _.le = function(a) {
        a = a.document;
        a = _.ke(a) ? a.documentElement : a.body;
        return new _.O(a.clientWidth, a.clientHeight)
    };
    _.me = function(a) {
        return a.scrollingElement ? a.scrollingElement : !_.Pc && _.ke(a) ? a.documentElement : a.body || a.documentElement
    };
    _.ne = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    _.oe = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.ke = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.pe = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    _.qe = function(a) {
        var b;
        if (ge && !(_.Lc && _.gd("9") && !_.gd("10") && _.p.SVGElement && a instanceof _.p.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.w(b) && 1 == b.nodeType ? b : null
    };
    _.ie = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    _.he = function(a) {
        this.j = a || _.p.document || document
    };
    _.he.prototype.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    _.he.prototype.l = _.m(25);
    _.re = function(a, b) {
        return _.oe(a.j, b)
    };
    var te = function(a) {
            se();
            return _.Ub(a)
        },
        se = _.Ha;
    var ue = function() {
        return G("iPad") || G("Android") && !G("Mobile") || G("Silk")
    };
    var we, xe, ye, ze;
    _.ve = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    we = function(a) {
        return a ? decodeURI(a) : a
    };
    xe = function(a, b, c) {
        if (_.v(b))
            for (var d = 0; d < b.length; d++) xe(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    ye = /#|$/;
    ze = function(a, b) {
        var c = a.search(ye);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    };
    var Ae, Ce, ha, Be, De, Ie, He, ub, Ge, Ne, Pe, Qe, Ue, Ve, We, fa, Xe, bf, cf, ff;
    Ae = function(a) {
        try {
            return !!a && null != a.location.href && Hc(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Ce = function(a) {
        let b = _.p,
            c = 0;
        for (; b && 40 > c++ && (!Ae(b) || !a(b));) b = Be(b)
    };
    ha = function() {
        let a = _.p;
        Ce(b => {
            a = b;
            return !1
        });
        return a
    };
    Be = function(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch (b) {}
        return null
    };
    De = function(a) {
        return Ae(a.top) ? a.top : null
    };
    _.Ee = function(a, b) {
        const c = a.createElement("script");
        _.ka(c, te(b));
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    _.Fe = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    Ie = function(a, b) {
        if (!Ge()) {
            let c = Math.random();
            if (c < b) return c = He(), a[Math.floor(c * a.length)]
        }
        return null
    };
    He = function() {
        if (!_.p.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            _.p.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (a) {
            return Math.random()
        }
    };
    _.P = function(a, b, c) {
        if (a)
            for (const d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
    };
    _.Je = function(a) {
        for (const b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
        return !0
    };
    ub = function(a) {
        const b = [];
        _.P(a, function(c, d) {
            b.push(d)
        });
        return b
    };
    _.Ke = function(a) {
        const b = [];
        _.P(a, function(c) {
            b.push(c)
        });
        return b
    };
    _.Le = function(a, b) {
        return Hb(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.Me = function(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    Ge = zb(() => -1 != _.rc.indexOf("Google Web Preview") || 1E-4 > Math.random());
    Ne = /^(-?[0-9.]{1,30})$/;
    _.Oe = function(a, b) {
        return Ne.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b
    };
    Pe = function() {
        return /^true$/.test("false")
    };
    Qe = function(a, b = !0) {
        try {
            for (let c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return b;
                case "http:":
                    return !1
            }
        } catch (c) {}
        return !0
    };
    _.Re = function(a) {
        if (!a) return "";
        const b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    };
    const Se = {
            Lc: "allow-forms",
            Mc: "allow-modals",
            Nc: "allow-orientation-lock",
            Oc: "allow-pointer-lock",
            Pc: "allow-popups",
            Qc: "allow-popups-to-escape-sandbox",
            Rc: "allow-presentation",
            Sc: "allow-same-origin",
            Tc: "allow-scripts",
            Uc: "allow-top-navigation",
            Vc: "allow-top-navigation-by-user-activation"
        },
        Te = zb(() => _.Ke(Se));
    Ue = function(a) {
        const b = Te();
        return a.length ? _.E(b, c => !_.eb(a, c)) : b
    };
    Ve = function() {
        const a = _.oe(document, "IFRAME").sandbox,
            b = a && a.supports;
        if (!b) return {};
        const c = {};
        _.C(Te(), d => {
            b.call(a, d) && (c[d] = !0)
        });
        return c
    };
    We = a => {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    fa = (a, b) => {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    };
    Xe = () => {
        let a = _.p;
        for (let b = 0; 40 > b; ++b) {
            if (fa(a, "__cmpLocator")) return a;
            if (!(a = Be(a))) break
        }
        return null
    };
    _.Ye = zb(() => !ue() && (G("iPod") || G("iPhone") || G("Android") || G("IEMobile")) ? 2 : ue() ? 1 : 0);
    _.Ze = Object.assign || function(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (d)
                for (let e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    _.$e = (a, b, c = 100) => {
        for (; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    _.af = a => {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.F(a, parseFloat)
    };
    bf = a => {
        _.p.console && _.p.console.warn && _.p.console.warn(a)
    };
    cf = (a, {
        zc: b = null,
        Ld: c = 100,
        Nd: d = 50,
        Pb: e = !0
    } = {}) => {
        const f = _.A();
        for (var g = !1; a;) {
            if (!c-- || _.A() - f >= d) return !1;
            switch (a.nodeType) {
                case 9:
                    try {
                        const n = a.parentWindow || a.defaultView;
                        if (n) {
                            const u = n.frameElement;
                            if (u && Ae(n.parent)) {
                                a = u;
                                break
                            }
                        }
                    } catch (n) {}
                    a = null;
                    break;
                case 1:
                    const l = a;
                    var h;
                    if (h = e) {
                        a: {
                            try {
                                if (0 < l.offsetWidth && 0 < l.offsetHeight && l.style && "none" !== l.style.display && "hidden" !== l.style.visibility && (!l.style.opacity || 0 !== Number(l.style.opacity))) {
                                    const n = l.getBoundingClientRect();
                                    var k = 0 < n.right && 0 < n.bottom;
                                    break a
                                }
                            } catch (n) {}
                            k = !1
                        }
                        h = !k
                    }
                    if (h) return !1;
                    g || (g = l, /^html|body$/i.test(g.tagName) ? g = null : (h = g.style.position || (_.Fe(g, window) || {}).position, g = /^fixed/i.test(h) ? g : null), g = !!g && (!b || g.offsetWidth * g.offsetHeight <= 4 * b.width * b.height));
                    a = a.parentNode
            }
        }
        return g
    };
    let df = [];
    const ef = () => {
        const a = df;
        df = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    ff = a => {
        df.push(a);
        1 == df.length && (window.Promise ? Promise.resolve().then(ef) : window.setImmediate ? setImmediate(ef) : setTimeout(ef, 0))
    };
    _.gf = a => {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * 2 ** 52)
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    var vb = {
        od: 0,
        hd: 1,
        gd: 2,
        fd: 3,
        td: 4,
        ud: 5,
        ld: 6,
        jd: 7
    };
    var da;
    da = zb(function() {
        let a = !1;
        try {
            const b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.p.addEventListener("test", null, b)
        } catch (b) {}
        return a
    });
    _.Q = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ea(d)), !0) : !1
    };
    _.hf = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ea(d)), !0) : !1
    };
    _.jf = function(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        const c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    };
    let kf = !1;
    const lf = a => {
            var b = document;
            try {
                const d = Zd(b);
                var c = d ? new ae(d ? JSON.parse(d) : null) : null
            } catch (d) {
                c = null
            }
            if (!c) return 0;
            if (_.J(c, 7)) return 4;
            if (6048E5 < _.A() - (_.H(c, 5) || 0)) return 0;
            if (a) {
                if (_.eb(_.H(c, 3), a)) return 2;
                if (_.eb(_.H(c, 4), a)) return 3
            }
            return 1
        },
        mf = zb(() => {
            const a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
            try {
                return a.test(_.p.top.location.href)
            } catch (b) {
                return a.test(_.p.location.href)
            }
        });
    let nf = {},
        of = null,
        pf = null;
    var rf = () => {
        let a = qf();
        a && _.p.setTimeout && .01 > Math.random() && _.p.setTimeout(() => {
            _.p.__cmp && _.p.__cmp("getConsentData", null, b => {
                b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=iabcmp&vcd=" + JSON.stringify(b);
                _.jf(_.p, b)
            })
        }, 1E4);
        return a
    };
    const qf = () => {
        if (_.p.__cmp) {
            let a = !1;
            try {
                _.p.__cmp("ping", null, () => {
                    a = !0
                })
            } catch (b) {}
            if (a) return !0
        }
        pf = Xe();
        return !!pf
    };
    let sf = 1;
    const tf = () => {
            if (!_.p.__cmp && pf) {
                try {
                    if (pf.__cmp) {
                        _.p.__cmp = pf.__cmp;
                        return
                    }
                } catch (a) {}
                _.p.__cmp = (a, b, c) => {
                    const d = `google_cmp_callback_${sf}`;
                    sf++;
                    a = {
                        __cmpCall: {
                            command: a,
                            parameter: b,
                            callId: d
                        }
                    };
                    nf[d] = c;
                    pf.postMessage(a, "*")
                };
                _.Q(_.p, "message", a => {
                    a = a.data;
                    if ("string" == typeof a) try {
                        a = JSON.parse(a)
                    } catch (b) {}(a = a.__cmpReturn) && "function" == typeof nf[a.callId] && (nf[a.callId](a.returnValue, a.success), delete nf[a.callId])
                })
            }
        },
        uf = (a, b = () => {}) => {
            const c = ia(),
                d = wb();
            d[0] = a ? 1 : 2;
            d[6] = 1;
            d[5] = c ? 1 : 2;
            let e = !1;
            const f = (k, l) => {
                l && k && (e = !!k.gdprAppliesGlobally)
            };
            _.p.__cmp && _.p.__cmp("ping", null, f);
            if (e || a) {
                var g = k => {
                    k && (k.gdprApplies ? (d[6] = 8, of = {
                        eb: 5,
                        Xa: c,
                        Ya: !1,
                        Ta: d.join("."),
                        nb: k.consentData,
                        yb: k.googleVendorIds
                    }, b( of )) : ( of = {
                        eb: 5,
                        Xa: c,
                        Ya: !1,
                        Ta: d.join(".")
                    }, b( of )))
                };
                a = ha().GoogleMostRecentCmpConsentData;
                var h = !!a;
                a && g(a);
                _.p.__cmp && _.p.__cmp("getConsentData", null, (k, l) => {
                    l && (ha().GoogleMostRecentCmpConsentData = k, h || g(k))
                })
            } else of = {
                eb: 5,
                Xa: c,
                Ya: !1,
                Ta: d.join(".")
            }, b( of )
        };
    var vf = (a, b) => {
            const c = wb();
            mf() && (a = !0);
            c[0] = a ? 1 : 2;
            const d = ia();
            c[5] = d ? 1 : 2;
            if (kf && rf()) return tf(), uf(a), of || (c[6] = 7, of = {
                eb: 5,
                Xa: d,
                Ya: !0,
                Ta: c.join("."),
                nb: "NCS"
            }), of ;
            c[4] = 2;
            const e = !!_.p.googlefc || fa(_.p.top, "googlefcPresent");
            c[1] = e ? 1 : 2;
            var f = lf(b);
            0 != f ? b = {
                xb: f,
                zb: 3
            } : (f = _.p.top, b = fa(f, "googlefcInactive") ? 4 : b && fa(f, `googlefcPA-${b}`) ? 2 : fa(f, "googlefcNPA") ? 3 : 0, b = {
                xb: b,
                zb: 2
            });
            const {
                xb: g,
                zb: h
            } = b;
            c[h] = g;
            return {
                eb: g,
                Xa: d || ja(g, a, e),
                Ya: 0 == g && a && e,
                Ta: c.join(".")
            }
        },
        wf = (a, b, c) => {
            if (kf && rf()) tf(), uf(a, c);
            else {
                const d = vf(a, b);
                d.Ya ? _.p.setTimeout(() => {
                    wf(a, b, c)
                }, 1E3) : c(d)
            }
        };
    _.xf = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    _.xf.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.xf.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.xf.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.yf = function(a, b) {
        var c = _.ie(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    _.zf = function(a, b) {
        return _.yf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    _.Af = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        _.Lc && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    };
    _.Bf = function(a) {
        var b = _.ie(a),
            c = new _.M(0, 0);
        var d = b ? _.ie(b) : document;
        d = !_.Lc || 9 <= Number(_.hd) || _.ke(_.je(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = _.Af(a);
        d = _.je(b).j;
        b = _.me(d);
        d = d.parentWindow || d.defaultView;
        b = _.Lc && _.gd("10") && d.pageYOffset != b.scrollTop ? new _.M(b.scrollLeft, b.scrollTop) : new _.M(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    _.Cf = function(a) {
        a = _.Af(a);
        return new _.M(a.left, a.top)
    };
    _.Df = function(a, b) {
        if ("none" != _.zf(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.Jf = function(a) {
        if (!a.getBoundingClientRect) return null;
        a = _.Df(_.Af, a);
        return new _.O(a.right - a.left, a.bottom - a.top)
    };
    _.Kf = function(a, b) {
        a.style.display = b ? "" : "none"
    };
    var Lf = Pe();
    var Mf = class {
        constructor(a) {
            this.j = a
        }
    };
    var Nf = new Mf(1),
        Of = new Mf(2),
        Pf = new Mf(3),
        Qf = new Mf(5),
        Rf = new Mf(6),
        Sf = new Mf(7),
        Tf = new Mf(8),
        Uf = new Mf(14),
        Vf = (a, b, c) => b[a.j] || c || (() => {});
    _.q = class {
        constructor() {
            this.j = () => !1;
            this.o = () => 0;
            this.m = () => "";
            this.l = () => []
        }
    };
    Ia(_.q);
    _.Wf = (a, b = 0) => _.q.v().o(a, b);
    const Xf = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };
    var Yf = function(a = _.p) {
            let b = a.context || a.AMP_CONTEXT_DATA;
            if (!b) try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
            try {
                if (b && b.pageViewId && b.canonicalUrl) return b
            } catch (c) {}
            return null
        },
        Zf = function() {
            const a = Yf();
            return a && a.mode ? +a.mode.version || null : null
        },
        $f = function() {
            var a = Yf();
            if (a && a.container) {
                a = a.container.split(",");
                const b = [];
                for (let c = 0; c < a.length; c++) b.push(Xf[a[c]] || "x");
                return b.join()
            }
            return null
        },
        ag = function() {
            const a = Yf();
            return a && a.initialIntersection
        },
        bg = function() {
            var a = Yf();
            var b;
            return (a = a && (b = a.initialLayoutRect) && "number" === typeof b.top && "number" === typeof b.left && "number" === typeof b.width && "number" === typeof b.height ? new _.xf(b.left, b.top, b.width, b.height) : null) ? new _.M(a.left, a.top) : (b = ag()) && _.w(b.rootBounds) ? new _.M(b.rootBounds.left + b.boundingClientRect.left, b.rootBounds.top + b.boundingClientRect.top) : null
        },
        cg = function(a) {
            return (a = a || Yf()) ? Ae(a.master) ? a.master : null : null
        },
        dg = !!Yf() && _.p != _.p.top,
        eg = function(a) {
            a = Yf(a);
            if (!a || !_.w(a.data) || "string" !== typeof a.data.type) return null;
            a = a.data.type.toLowerCase();
            return "doubleclick" == a || "adsense" == a ? null : a
        };
    var fg = a => {
            a = cg(Yf(a)) || a;
            a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1;
            return a.google_unique_id
        },
        gg = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            try {
                var b = Ud.history.length
            } catch (c) {
                b = 0
            }
            a.u_his = b;
            if (b = !!Ud.navigator) b = "unknown" !== typeof Ud.navigator.javaEnabled;
            a.u_java = b && !!Ud.navigator.javaEnabled && Ud.navigator.javaEnabled();
            Ud.screen && (a.u_h = Ud.screen.height, a.u_w = Ud.screen.width, a.u_ah = Ud.screen.availHeight, a.u_aw = Ud.screen.availWidth, a.u_cd = Ud.screen.colorDepth);
            Ud.navigator && Ud.navigator.plugins && (a.u_nplug = Ud.navigator.plugins.length);
            Ud.navigator && Ud.navigator.mimeTypes && (a.u_nmime = Ud.navigator.mimeTypes.length)
        },
        hg = !!window.google_async_iframe_id;
    let ig = hg && window.parent || window;
    _.jg = () => {
        if (hg && !Ae(ig)) {
            let a = "." + Td.domain;
            try {
                for (; 2 < a.split(".").length && !Ae(ig);) Td.domain = a = a.substr(a.indexOf(".") + 1), ig = window.parent
            } catch (b) {}
            Ae(ig) || (ig = window)
        }
        return ig
    };
    _.Ub(_.Nb(new _.Mb(_.Kb, "//fonts.googleapis.com/css")));
    var kg = () => {
        var a;
        let b;
        const c = window.ActiveXObject;
        if (navigator.plugins && navigator.mimeTypes.length) {
            if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
        } else {
            if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                b = 3;
                for (a = 1; a;) try {
                    a = new c("ShockwaveFlash.ShockwaveFlash." + (b + 1)), b++
                } catch (d) {
                    a = null
                }
                return b.toString()
            }
            if (_.vc()) {
                a = null;
                try {
                    a = new c("ShockwaveFlash.ShockwaveFlash.7")
                } catch (d) {
                    b = 0;
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash.6"), b = 6, a.AllowScriptAccess = "always"
                    } catch (e) {
                        if (6 === b) return b.toString()
                    }
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash")
                    } catch (e) {}
                }
                if (a) return b = a.GetVariable("$version").split(" ")[1], b.replace(/,/g, ".")
            }
        }
        return "0"
    };
    var lg = (a, b, c, d) => {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (a && a.top == a) return !1;
            const e = b.documentElement;
            if (c && d) {
                let f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        mg = () => {
            var a = _.jg();
            if (a == a.top) return 0;
            for (; a && a != a.top && Ae(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5
            }
            return 1
        };
    var og = function(a, b) {
            const c = b || ng;
            return function() {
                {
                    var d = this || _.p;
                    d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
                    const e = c(Oa(a), arguments);
                    return d.hasOwnProperty(e) ? d[e] : d[e] = a.apply(this, arguments)
                }
            }
        },
        ng = function(a, b) {
            a = [a];
            for (let c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\x0B")
        };
    var pg = function() {
        this.l = 0;
        this.j = []
    };
    pg.prototype.add = function(a) {
        const b = this.j[this.l];
        this.j[this.l] = a;
        this.l = (this.l + 1) % 100;
        return b
    };
    pg.prototype.get = function(a) {
        a = qg(this, a);
        return this.j[a]
    };
    pg.prototype.set = function(a, b) {
        a = qg(this, a);
        this.j[a] = b
    };
    var sa = function(a, b) {
            const c = a.j.length;
            var d = a.j.length - b;
            for (b = []; d < c; d++) b.push(a.get(d));
            return b
        },
        qg = function(a, b) {
            if (b >= a.j.length) throw Error("Out of bounds exception");
            return 100 > a.j.length ? b : (a.l + Number(b)) % 100
        };
    const rg = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i, /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i, /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i];
    var sg = a => _.$a(rg, b => b.test(a)),
        tg = function(a) {
            if (a = /[-\w]+\.[-\w]+$/.exec(a)) {
                a = a[0].toLowerCase();
                for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
                switch (b) {
                    case 1967261364:
                        return 0;
                    case 3147493546:
                        return 1;
                    case 1567346461:
                        return 2;
                    case 2183041838:
                        return 3;
                    case 763236279:
                        return 4;
                    case 1342279801:
                        return 5;
                    case 526831769:
                        return 6;
                    case 352806002:
                        return 7;
                    case 2755048925:
                        return 8;
                    case 3306848407:
                        return 9;
                    case 2207000920:
                        return 10;
                    case 484037040:
                        return 11;
                    case 3506871055:
                        return 12;
                    case 672143848:
                        return 13;
                    case 2528751226:
                        return 14;
                    case 2744854768:
                        return 15;
                    case 3703278665:
                        return 16;
                    case 2014749173:
                        return 17;
                    case 133063824:
                        return 18;
                    case 2749334602:
                        return 19;
                    case 3131239845:
                        return 20;
                    case 2074086763:
                        return 21;
                    case 795772493:
                        return 22;
                    case 290857819:
                        return 23;
                    case 3035947606:
                        return 24;
                    case 2983138003:
                        return 25;
                    case 2197138676:
                        return 26;
                    case 4216016165:
                        return 27;
                    case 239803524:
                        return 28;
                    case 975993579:
                        return 29;
                    case 1794940339:
                        return 30;
                    case 1314429186:
                        return 31;
                    case 1643618937:
                        return 32;
                    case 497159982:
                        return 33
                }
            }
            return -1
        },
        ug = function(a) {
            if (!a.length) return 0;
            let b = [];
            for (var c = 0; 33 >= c; c++) b[c] = 0;
            for (c = a.length - 1; 0 <= c; c--) {
                const d = tg(a[c]);
                0 <= d && (b[33 - d] = 1)
            }
            return parseInt(b.join(""), 2)
        };
    _.vg = class {
        constructor(a, b, c = {}) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        }
    };
    const wg = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    var yg = function(a) {
            var b = a || _.p;
            const c = [];
            let d, e = null,
                f, g;
            do {
                g = b;
                Ae(g) ? (d = g.location.href, e = g.document && g.document.referrer || null, f = !0) : (d = e, e = null, f = !1);
                c.push(new xg(d || "", g, f));
                try {
                    b = g.parent
                } catch (h) {
                    b = null
                }
            } while (b && g != b);
            for (let h = 0, k = c.length - 1; h <= k; ++h) c[h].depth = k - h;
            g = a || _.p;
            if (g.location && g.location.ancestorOrigins && g.location.ancestorOrigins.length == c.length - 1)
                for (a = 1; a < c.length; ++a) b = c[a], b.url || (b.url = g.location.ancestorOrigins[a - 1] || "", b.Bb = !0);
            return c
        },
        zg = function(a, b) {
            let c = 0;
            const d = (a = a.j[Math.max(a.j.length - 1, 0)].url || null) && we(a.match(_.ve)[3] || null),
                e = Math.min(b.length, 26);
            for (let f = 0; f < e; f++) a = null != b[f] && we(b[f].match(_.ve)[3] || null) || "", c *= 4, a && (d && a == d ? c += 3 : sg(b[f]) ? c += 2 : a && 0 <= tg(a) && (c += 1));
            return c
        };
    var Ag = class {
        constructor(a) {
            a = (this.l = a || _.p) || _.p;
            this.m = a = a.top == a ? 1 : Ae(a.top) ? 2 : 3;
            3 != this.m && Date.parse(_.p.top.document.lastModified);
            this.j = yg(this.l)
        }
    };
    var Bg = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        xg = class {
            constructor(a, b, c, d, e) {
                this.url = a;
                this.gb = b;
                this.Bb = !!d;
                this.depth = "number" === typeof e ? e : null
            }
        };
    var Cg = function(a, b) {
            const c = {};
            c[a] = b;
            return [c]
        },
        Eg = function(a, b, c, d, e) {
            const f = [];
            _.P(a, function(g, h) {
                (g = Dg(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        Dg = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    const f = [];
                    for (let g = 0; g < a.length; g++) f.push(Dg(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Eg(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        Fg = function(a, b, c, d) {
            a.j.push(b);
            a.l[b] = Cg(c, d)
        },
        Gg = function(a) {
            if (!a.o) return a.B;
            let b = 1;
            for (const c in a.l) b = c.length > b ? c.length : b;
            return a.B - a.o.length - b - a.m.length - 1
        },
        Hg = function(a, b, c, d) {
            b = b + "//" + c + d;
            let e = Gg(a) - d.length;
            if (0 > e) return "";
            a.j.sort(function(g, h) {
                return g - h
            });
            d = null;
            c = "";
            for (var f = 0; f < a.j.length; f++) {
                const g = a.j[f],
                    h = a.l[g];
                for (let k = 0; k < h.length; k++) {
                    if (!e) {
                        d = null == d ? g : d;
                        break
                    }
                    let l = Eg(h[k], a.m, a.C);
                    if (l) {
                        l = c + l;
                        if (e >= l.length) {
                            e -= l.length;
                            b += l;
                            c = a.m;
                            break
                        }
                        a.A && (c = e, l[c - 1] == a.m && --c, b += l.substr(0, c), c = a.m, e = 0);
                        d = null == d ? g : d
                    }
                }
            }
            f = "";
            a.o && null != d && (f = c + a.o + "=" + (a.F || d));
            return b + f
        };
    var Ig = class {
        constructor(a, b, c, d, e) {
            this.B = c || 4E3;
            this.m = a || "&";
            this.C = b || ",$";
            this.o = void 0 !== d ? d : "trn";
            this.F = e || null;
            this.A = !1;
            this.l = {};
            this.D = 0;
            this.j = []
        }
    };
    var Lg;
    Lg = function() {
        var a = Jg,
            b = Kg.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    };
    _.Mg = function(a, b, c, d, e) {
        if ((d ? a.j : Math.random()) < (e || a.l)) try {
            let f;
            c instanceof Ig ? f = c : (f = new Ig, _.P(c, (h, k) => {
                var l = f,
                    n = l.D++;
                h = Cg(k, h);
                l.j.push(n);
                l.l[n] = h
            }));
            const g = Hg(f, a.A, a.m, a.o + b + "&");
            g && _.jf(_.p, g)
        } catch (f) {}
    };
    _.Ng = class {
        constructor(a, b, c, d) {
            this.A = a;
            this.m = b;
            this.o = c;
            this.l = d;
            this.j = Math.random()
        }
    };
    let Og = null;
    var Pg = function() {
        if (null === Og) {
            Og = "";
            try {
                let a = "";
                try {
                    a = _.p.top.location.hash
                } catch (b) {
                    a = _.p.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Og = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Og
    };
    var Sg;
    _.Qg = () => {
        const a = _.p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : _.A()
    };
    _.Rg = (a = _.p) => (a = a.performance) && a.now ? a.now() : null;
    Sg = a => {
        const b = _.p.performance;
        return b && b.timing && b.timing[a] || 0
    };
    var Tg = class {
        constructor(a, b, c, d = 0, e) {
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = d;
            this.uniqueId = Math.random();
            this.slotId = e
        }
    };
    var Yg, Zg;
    const Ug = _.p.performance,
        Vg = !!(Ug && Ug.mark && Ug.measure && Ug.clearMarks),
        Wg = zb(() => {
            var a;
            if (a = Vg) a = Pg(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });
    _.Xg = function(a) {
        a && Ug && Wg() && (Ug.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Ug.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    };
    Yg = function(a) {
        a.j = !1;
        a.events != a.l.google_js_reporting_queue && (Wg() && _.C(a.events, _.Xg), a.events.length = 0)
    };
    Zg = function(a, b, c, d, e = 0, f) {
        a.j && (b = new Tg(b, c, d, e, f), !a.j || 2048 < a.events.length || a.events.push(b))
    };
    _.$g = function(a, b) {
        if (a.j && "number" === typeof b.value) {
            var c = _.Rg() || _.Qg();
            b.duration = c - b.value;
            c = `goog_${b.label}_${b.uniqueId}_end`;
            Ug && Wg() && Ug.mark(c);
            !a.j || 2048 < a.events.length || a.events.push(b)
        }
    };
    _.ah = function(a, b, c) {
        const d = _.Rg();
        d && Zg(a, b, 9, d, 0, c)
    };
    var bh = class {
        constructor(a, b) {
            this.events = [];
            this.l = b || _.p;
            let c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.j = Wg() || (null != c ? c : Math.random() < a)
        }
        start(a, b) {
            if (!this.j) return null;
            const c = _.Rg() || _.Qg();
            a = new Tg(a, b, c);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Ug && Wg() && Ug.mark(b);
            return a
        }
    };
    var za;
    _.ch = function(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = za(a.stack, b));
        return b
    };
    za = function(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (c) {
            return b
        }
    };
    _.dh = class {
        constructor(a, b, c, d = null) {
            this.C = a;
            this.J = b;
            this.D = c;
            this.A = null;
            this.I = this.o;
            this.m = d;
            this.B = !1
        }
        F(a) {
            this.A = a
        }
        G(a) {
            this.B = a
        }
        o(a, b, c, d, e) {
            e = e || this.J;
            let f;
            try {
                const k = new Ig;
                k.A = !0;
                Fg(k, 1, "context", a);
                b.error && b.meta && b.id || (b = new _.vg(b, {
                    message: _.ch(b)
                }));
                b.msg && Fg(k, 2, "msg", b.msg.substring(0, 512));
                var g = b.meta || {};
                b = g;
                if (this.A) try {
                    this.A(b)
                } catch (l) {}
                if (d) try {
                    d(b)
                } catch (l) {}
                d = k;
                g = [g];
                d.j.push(3);
                d.l[3] = g; {
                    const l = yg();
                    let n = new xg(_.p.location.href, _.p, !0, !1);
                    g = null;
                    const u = l.length - 1;
                    for (d = u; 0 <= d; --d) {
                        var h = l[d];
                        !g && wg.test(h.url) && (g = h);
                        if (h.url && !h.Bb) {
                            n = h;
                            break
                        }
                    }
                    h = null;
                    const y = l.length && l[u].url;
                    0 != n.depth && y && (h = l[u]);
                    f = new Bg(n, h, g)
                }
                f.l && Fg(k, 4, "top", f.l.url || "");
                Fg(k, 5, "url", f.j.url || "");
                _.Mg(this.C, e, k, this.B, c)
            } catch (k) {
                try {
                    _.Mg(this.C, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: _.ch(k),
                        url: f && f.j.url
                    }, this.B, c)
                } catch (l) {}
            }
            return this.D
        }
    };
    _.dh.prototype.j = _.m(3);
    _.dh.prototype.l = _.m(2);
    var eh = function(a, b) {
        a.m = Vf(Nf, b, () => {});
        a.j = Vf(Of, b, () => []);
        a.l = Vf(Pf, b, () => [])
    };
    _.fh = class {
        constructor() {
            this.m = () => {};
            this.j = () => [];
            this.l = () => []
        }
    };
    Ia(_.fh);
    var gh, ih;
    gh = function(a) {
        return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
    };
    _.hh = function(a) {
        try {
            const b = gh(a.document);
            return new _.O(b.clientWidth, b.clientHeight)
        } catch (b) {
            return new _.O(-12245933, -12245933)
        }
    };
    ih = function(a, b = _.p) {
        a = a.scrollingElement || gh(a);
        return new _.M(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    };
    _.jh = function(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    const kh = (a, b, c) => {
        let d = !1;
        const e = f => g => {
            d || (d = !0, f(g))
        };
        b = e(b);
        c = e(c);
        try {
            a(b, c)
        } catch (f) {
            c(f)
        }
    };
    var lh = function(a, b) {
        0 === a.l ? a.j.push(b) : a.A(() => {
            const {
                nc: c,
                oc: d
            } = b, e = 1 === a.l ? c : d;
            if (e) {
                try {
                    var f = e(a.m)
                } catch (g) {
                    b.reject(g);
                    return
                }
                b.resolve(f)
            } else {
                const {
                    resolve: g,
                    reject: h
                } = b;
                1 === a.l ? g(a.m) : h(a.m)
            }
        })
    };
    var mh = class {
        constructor(a) {
            this.l = 0;
            this.j = [];
            kh(a, this.B.bind(this), this.o.bind(this))
        }
        A(a) {
            window.Promise ? Promise.resolve().then(a) : setTimeout(a, 0)
        }
        B(a) {
            try {
                if (a === this) throw new TypeError;
                if (a instanceof mh || _.w(a) && _.La(a.then)) kh(a.then.bind(a), this.B.bind(this), this.o.bind(this));
                else
                    for (this.l = 1, this.m = a; this.j.length;) lh(this, this.j.shift())
            } catch (b) {
                this.o(b)
            }
        }
        o(a) {
            this.l = 2;
            for (this.m = a; this.j.length;) lh(this, this.j.shift())
        }
        then(a, b) {
            return new this.constructor((c, d) => {
                lh(this, {
                    nc: a,
                    oc: b,
                    resolve: c,
                    reject: d
                })
            })
        }
    };
    let nh = !1,
        oh = 0;
    var ph = (a, b, c) => {
            if (!nh) {
                nh = !0;
                var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
                if (We(d)) {
                    var e, f, g, h, k = a.requestIdleCallback;
                    k && (h = n => {
                        f = n.timeRemaining();
                        g = 0
                    });
                    var l = n => {
                        nh && (b.push(n - e), e = n, k && (c.push(f || 0), g || (f = 0, g = k(h))), d(l))
                    };
                    d(n => {
                        e = n;
                        k && (g = k(h));
                        d(l)
                    })
                }
            }
        },
        qh = () => {
            nh = !1
        },
        rh = () => {
            oh && _.p.clearTimeout(oh);
            oh = nh ? _.p.setTimeout(qh, 1E4) : 0
        };
    var pa = function(a) {
        _.zd(this, a, null, null)
    };
    _.B(pa, _.ud);
    var sh = class {
        constructor(a, b, c) {
            this.j = b;
            this.l = c
        }
    };
    var ta = function(a, b) {
        a.j instanceof MessagePort ? a.j.postMessage(_.ra(b)) : a.j.add(b)
    };
    var oa = class {
        constructor() {
            this.j = new pg
        }
    };
    const la = {
        Xb: document.body,
        Yb: _.Ub(_.Nb(new _.Mb(_.Kb, "https://www.googletagservices.com/console/host/host.js")))
    };
    var th = function(a) {
        _.zd(this, a, null, null)
    };
    _.B(th, _.ud);
    var vh = function(a) {
        _.zd(this, a, uh, null)
    };
    _.B(vh, _.ud);
    var uh = [9],
        wh = function(a, b) {
            return _.K(a, 12, b)
        },
        xh = function(a, b) {
            return _.K(a, 8, b)
        },
        yh = function(a, b) {
            return _.K(a, 13, b)
        },
        zh = function(a, b) {
            return Jd(a, 9, b)
        };
    var Ah = function(a) {
        _.zd(this, a, null, null)
    };
    _.B(Ah, _.ud);
    var na = new sh(vh, Ah, 3);
    let Bh = null;
    const Ch = () => Bh ? Bh : We(window.Map) ? Bh = new Map : null,
        Dh = {};
    var Fh = function(a, b) {
        if (a instanceof b) return a;
        if (a instanceof Eh) {
            {
                const c = Ch();
                a = c ? c.get(a) : Dh[Oa(a)]
            }
            if (a instanceof b) return a
        }
        return null
    };
    var Eh = class {
        constructor() {}
    };
    var wa, Gh;
    _.xa = () => _.p.googletag || (_.p.googletag = {});
    wa = (a, b) => {
        const c = _.xa();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    Gh = (a, b) => {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
    };
    const Hh = {
        173: "pubads.g.doubleclick.net",
        174: "securepubads.g.doubleclick.net",
        247: "https://securepubads.g.doubleclick.net",
        7: .02,
        13: 1500,
        23: .001,
        24: 200,
        37: .01,
        38: .001,
        58: 1,
        150: "",
        211: !1,
        152: [],
        172: null,
        191: "",
        192: "",
        190: "",
        245: {},
        180: null,
        230: {},
        246: [],
        227: {},
        226: [],
        228: "//www.googletagservices.com/pubconsole/"
    };
    Hh[6] = Qe(window);
    Hh[49] = (new Date).getTime();
    Hh[36] = Pe();
    Hh[148] = Lf;
    Hh[221] = Pe();
    Hh[204] = _.Oe("-1", -1);
    _.R = class {
        constructor() {
            for (var a in Hh) this[a] = Hh[a]
        }
    };
    Ia(_.R);
    const Ih = _.xa(),
        Jh = _.R.v();
    var Kh = Ih._vars_,
        Lh;
    for (Lh in Kh) Jh[Lh] = Kh[Lh];
    Ih._vars_ = Jh;
    var Nh = function(a) {
        _.zd(this, a, Mh, null)
    };
    _.B(Nh, _.ud);
    var Mh = [2],
        Oh = function(a, b) {
            return _.K(a, 1, b)
        },
        Ph = function(a, b) {
            return _.K(a, 2, b || [])
        };
    _.Qh = function(a) {
        _.zd(this, a, null, null)
    };
    _.B(_.Qh, _.ud);
    _.Rh = function(a, b) {
        _.K(a, 2, b)
    };
    var Sh = function(a) {
        _.zd(this, a, null, null)
    };
    _.B(Sh, _.ud);
    var Uh = function(a) {
        _.zd(this, a, Th, null)
    };
    _.B(Uh, _.ud);
    var Th = [3, 4, 5, 6, 8, 9];
    Uh.prototype.getAdUnitPath = function() {
        return _.H(this, 1)
    };
    Uh.prototype.ma = function() {
        return _.H(this, 15)
    };
    var Xh = function(a) {
        _.zd(this, a, Vh, Wh)
    };
    _.B(Xh, _.ud);
    var Vh = [1, 2, 3, 7, 14],
        Wh = [
            [8, 9]
        ],
        Yh = function(a, b) {
            Jd(a, 2, b)
        };
    _.Zh = class extends bh {
        constructor() {
            const a = _.q.v().j(85, !1) || _.q.v().j(84, !1);
            _.p.google_measure_js_timing = a || _.p.google_measure_js_timing;
            super(a ? 1 : 0, _.p);
            this.m = 0
        }
    };
    Ia(_.Zh);
    var gi, ii, ji, ki, li, mi, ri, si, ti, ui, xi, yi, zi;
    const $h = /\bfpla=(\w*)/;
    var bi = (a, b) => {
            const c = a.Ea;
            if ("" != c) return c;
            a = b[_.S(a)];
            return null != a ? ai(a) : null
        },
        di = () => ci().replace(/[\W_]/g, a => `&#${a.charCodeAt()};`),
        ei = a => {
            let b = a;
            "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
            return b
        };
    const fi = /\+/g;
    gi = a => {
        const b = a.document;
        return a && a.top == a ? b.URL : b.referrer
    };
    ii = (a, b = null) => {
        let c = 0;
        const d = [];
        a && (d.push(a.getAdUnitPath()), d.push(_.hi(a)), d.push(a.l.j));
        if (b) {
            {
                a = [];
                let e = 0;
                for (; b && 25 > e; b = b.parentNode, ++e) 9 === b.nodeType ? a.push("") : a.push(b.id);
                b = a.join()
            }
            b && d.push(b)
        }
        0 < d.length && (c = _.Me(d.join(":")));
        return c.toString()
    };
    ji = a => {
        let b;
        try {
            var c = window.top,
                d = new _.M(0, 0),
                e = _.ne(_.ie(a));
            if (Hc(e, "parent")) {
                do {
                    var f = e == c ? _.Bf(a) : _.Cf(a);
                    d.x += f.x;
                    d.y += f.y
                } while (e && e != c && e != e.parent && (a = e.frameElement) && (e = e.parent))
            }
            b = d
        } catch (g) {
            b = new _.M(-12245933, -12245933)
        }
        return b
    };
    ki = (a, b) => {
        if (null == b) return a;
        b = a.indexOf("google_preview=", a.lastIndexOf("?"));
        let c = a.indexOf("&", b); - 1 == c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    li = zb(() => "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest);
    mi = zb(() => !!_.Re(_.p.location.href));
    _.qi = Math.floor(Math.random() * Math.pow(2, 53));
    ri = a => "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a;
    si = a => {
        const b = a.split("/");
        return "/" == a.charAt(0) && 2 <= b.length ? b[1] : "/" != a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    ti = a => {
        let b = [];
        b = _.F(a, c => si(c.getAdUnitPath()));
        _.nb(b);
        return b
    };
    ui = a => a ? (a = _.Jf(a)) && a.floor() : null;
    _.vi = a => !!a && !!_.Fd(a, _.Qd, 43) && !!_.H(_.Fd(a, _.Qd, 43), 1);
    _.wi = a => a ? _.q.v().j(54, !1) ? 1 : _.q.v().j(71, !1) && _.q.v().j(65, !1) ? 2 : 0 : 0;
    xi = zb(() => {
        a: {
            try {
                let b = "";
                try {
                    b = _.p.top.location.hash
                } catch (d) {
                    b = _.p.location.hash
                }
                const c = b && b.match($h);
                var a = c ? c[1] : null;
                break a
            } catch (b) {}
            a = null
        }
        return a
    });
    yi = zb(() => va(() => {}));
    zi = a => _.q.v().j(229, !1) ? {
        Y: new a.constructor(Ld(_.ra(a)))
    } : {
        Y: a
    };
    wa("getVersion", () => "2019100301");
    var Ci, Di;
    _.ya = function(a, b, c = {}) {
        const d = c.Jd || "https://pagead2.googlesyndication.com";
        c = c.ya;
        if (void 0 === c || 0 > c || 1 < c) c = _.R.v()[23];
        Math.random() < c && (a = new _.Ai(a, d), b(a), _.Bi(a, 1, !0))
    };
    _.Bi = function(a, b = null, c = !1) {
        (a = Ci(a, b, c)) && _.jf(window, a)
    };
    _.t = function(a, b, c) {
        "string" != typeof c && (c = String(c));
        /^\w+$/.test(b) && c && (a.j += `&${b}=${encodeURIComponent(c)}`)
    };
    Ci = function(a, b = null, c = !1) {
        let d = a.o;
        b && 0 <= b && (d = (c ? a.l : Math.random()) < b);
        return (d || mi()) && a.m && a.j ? a.j : null
    };
    Di = function(a, b) {
        b.length && (3 >= b.length ? _.t(a, "nw_id", b.join()) : (b = mb(b, 0, 3), b.push("__extra__"), _.t(a, "nw_id", b.join())))
    };
    _.r = function(a, b = null) {
        var c = document;
        _.t(a, "vrg", "2019100301");
        b ? (Di(a, Ei(b)), _.t(a, "nslots", Fi(b).toString())) : (Di(a, ti(_.Gi)), _.t(a, "nslots", _.Gi.length.toString()));
        b = _.fh.v().l();
        b.length && _.t(a, "eid", b.join());
        _.t(a, "pub_url", c.URL)
    };
    _.Ai = class {
        constructor(a, b = "https://pagead2.googlesyndication.com", c) {
            if (null == c || 0 > c || 1 < c) c = _.R.v()[23];
            this.l = Math.random();
            this.o = this.l < c;
            this.m = a;
            this.j = `${b}/pagead/gen_204?id=${encodeURIComponent(a)}`
        }
    };
    _.Gi = [];
    var Ii, U, Mi, Li;
    const Hi = _.R.v()[38];
    Ii = (a, b) => {
        a = {
            methodId: a
        };
        b.name && (a.name = b.name);
        b.message && (a.message = b.message.substring(0, 512));
        b.fileName && (a.fileName = b.fileName);
        b.lineNumber && (a.lineNumber = b.lineNumber);
        b.stack && (a.stack = za(b.stack, ""));
        return a
    };
    _.Ki = (a, b, c = !1) => {
        _.Ji(a, b);
        if (!c) throw b;
    };
    _.Ji = (a, b, c = Hi) => {
        if (!b.isReported) try {
            b.isReported = !0;
            const d = Ii(a, b),
                e = new _.Ai("gpt_exception");
            try {
                _.r(e)
            } catch (f) {}
            _.P(d, (f, g) => _.t(e, g, f));
            _.Bi(e, c)
        } catch (d) {}
    };
    U = (a, b, c) => _.T(a, b, c, _.q.v().j(144, !1));
    _.T = function(a, b, c, d = !1) {
        return function(...e) {
            let f, g = !1,
                h = null;
            const k = c || _.Ki,
                l = _.Zh.v();
            try {
                const n = l && _.q.v().j(85, !1);
                n && (h = l.start(a.toString(), 3));
                f = b.apply(this, e);
                g = !0;
                n && _.$g(l, h)
            } catch (n) {
                g ? _.Ji(110, n) : f = k.call(this, a, n), _.Xg(h)
            }
            if (d) try {
                const n = Error();
                _.ya("gpt_api_usage", u => {
                    _.t(u, "methodId", a);
                    _.t(u, "args", e.length);
                    _.t(u, "stack", za(n.stack, n.message));
                    _.r(u)
                }, {
                    ya: 1
                })
            } catch (n) {}
            return f
        }
    };
    Mi = () => {
        var a = window,
            b;
        if (b = _.q.v().j(86, !1)) a._google_rum_ns_ ? (b = a._google_rum_ns_ = a._google_rum_ns_ || {}, b = !(!b.raf || !b.ric)) : b = !1, b = !b;
        if (b) {
            b = a._google_rum_ns_ = a._google_rum_ns_ || {};
            b.raf = b.raf || [];
            b.ric = b.ric || [];
            b = {
                Wb: b.raf,
                Zb: b.ric
            };
            var {
                Wb: c,
                Zb: d
            } = b;
            ph(a, c, d);
            Gh(a, Li);
            a.setTimeout(qh, 6E4)
        }
    };
    Li = () => {
        rh()
    };
    var Ni = class extends Eh {
        constructor(a) {
            super();
            this.push = U(76, function(b) {
                return a.push(...arguments)
            })
        }
    };
    var Oi = class {
        constructor(a, b = []) {
            this.l = a;
            this.j = b
        }
        getMessageId() {
            return this.l
        }
        getMessageArgs() {
            return this.j
        }
    };
    var Pi = class {
        constructor(a, b, c, d, e) {
            this.l = new Date;
            this.B = d && d.m();
            this.A = c && c.m();
            this.o = a;
            this.m = b;
            this.j = e
        }
        getSlot() {
            return this.B
        }
        getService() {
            return this.A
        }
        getLevel() {
            return this.o
        }
        getTimestamp() {
            return this.l
        }
        getMessage() {
            return this.m
        }
        getReference() {
            return this.j
        }
        toString() {
            let a = `${this.l.toTimeString()}: ${Qi[this.o]}: ${this.m}`;
            this.j && (a += ` Duration: ${this.l.getTime()-this.j.getTimestamp().getTime()}ms.`);
            return a
        }
    };
    const Qi = ["Debug", "Info", "Warning", "Error", "Fatal"];
    let Ri = null,
        Si = !1,
        Ti = !1;
    var Ui = () => {
            if (!Ti) {
                var a = "https:" + _.R.v()[228] + "loader.js";
                _.Ee(_.p.document, a);
                Ti = !0
            }
        },
        Vi = (a = _.p.document) => {
            a = a.cookie.split("google_pubconsole=");
            return 2 == a.length ? a[1].split(";")[0] : ""
        },
        Wi = () => {
            if (_.xa()._pubconsole_disable_) return !1;
            var a = Vi(_.p.document);
            if (a && (a = a.split("|"), 0 < a.length && ("1" == a[0] || "0" == a[0]))) return !0;
            a = gi(_.p);
            return null !== ze(a, "google_debug") || null !== ze(a, "dfpdeb") || null !== ze(a, "google_console") || null !== ze(a, "google_force_console") || null !== ze(a, "googfc")
        },
        Yi = _.T(94, () => {
            Wi() && Ui();
            _.Q(_.p, "message", Xi)
        });
    const Zi = _.T(93, () => {
            _.xa()._pubconsole_disable_ = !0
        }),
        Xi = a => {
            a.source == _.p && "gpt_open_pubconsole" == a.data.type && (a = a.data.slotDomId) && $i(a)
        };
    var $i = (a = "") => {
        _.xa && _.xa().console ? _.xa().console.openConsole(a) : (a && (Ri = a), Si = !0, Ui())
    };
    "complete" === _.p.document.readyState ? Yi() : Gh(_.p, Yi);
    wa("disablePublisherConsole", Zi);
    wa("onPubConsoleJsLoad", () => {
        Si && (_.xa().console.openConsole(Ri), Ri = null, Si = !1)
    });
    wa("openConsole", $i);
    var aj = function(a, b) {
            return _.E(a.j, c => c.getService() === b)
        },
        bj = function(a, b) {
            return _.E(a.j, c => c.getSlot() === b)
        },
        cj = function(a, b) {
            return _.E(a.j, c => c.getLevel() >= b)
        };
    var dj = class {
        constructor() {
            this.j = []
        }
        log(a, b, c = null, d = null, e = null) {
            a = new Pi(a, b, c, d, e);
            _.q.v().j(47, !1) && !Wi() || this.j.push(a);
            return a
        }
        info(a, b, c, d) {
            return this.log(1, a, b, c, d)
        }
        H(a, b, c, d) {
            return this.log(2, a, b, c, d)
        }
        error(a, b, c, d) {
            return this.log(3, a, b, c, d)
        }
    };
    Ia(dj);
    const ej = zb(() => {
        var a = _.q.v().l(5, []),
            b = String;
        var c = (c = we(window.location.href.match(_.ve)[3] || null)) ? _.Me(c) : null;
        a = _.Xa(a, b(c));
        a = _.q.v().l(6, [])[a] || "";
        b = window.document;
        a && b.head && (c = document.createElement("meta"), c.httpEquiv = "origin-trial", c.content = a, b.head.appendChild(c))
    });
    _.fj = a => {
        var b = navigator;
        ej();
        b = "scheduling" in b && "isInputPending" in b.scheduling && b.scheduling.isInputPending();
        const c = _.Wf(31);
        b && Math.random() < c && setTimeout(() => {
            _.ya("gpt_input_pending", d => {
                _.r(d);
                _.t(d, "ctx", a);
                _.t(d, "corr", _.qi);
                const e = Error("inputPending");
                _.t(d, "stack", za(e.stack, e.message))
            }, {
                ya: 1
            })
        }, 1);
        return b
    };
    var gj = class {
        constructor() {}
        m() {
            const a = this.D(); {
                const b = Ch();
                b ? b.set(a, this) : Dh[Oa(a)] = this
            }
            return a
        }
    };
    const hj = gj.prototype;
    hj.m = og(hj.m);
    var jj, kj, lj, nj, oj, pj, qj, rj, sj, tj, uj, vj, wj, xj, yj, zj, Aj, Bj, Cj, Dj, Ej, Fj, Gj, Hj, Ij, Jj, Kj, Lj, Mj, Nj, Oj, Pj, Qj, Rj, Sj, Tj, Uj, Vj, Wj, Xj, Yj, Zj, ak, bk, ck, dk, ek, fk, gk, hk, ik, jk, kk, lk, mk, nk, ok, pk, qk, rk, sk, tk, uk, vk, wk, xk, yk, zk, Ak, Bk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Kk, Lk, Mk;
    const V = a => (...b) => new Oi(a, [...b]),
        ij = a => "[" + _.F(a, b => "string" === typeof b ? "'" + b + "'" : _.v(b) ? ij(b) : String(b)).join(", ") + "]",
        W = (a, b) => {
            b = ij(b);
            b = b.substring(1, b.length - 1);
            return new Oi(96, [a, b])
        };
    jj = V(1);
    kj = V(2);
    lj = V(3);
    _.mj = V(4);
    nj = V(5);
    oj = V(6);
    pj = V(8);
    qj = V(12);
    rj = V(14);
    sj = V(16);
    tj = V(17);
    uj = V(19);
    vj = V(20);
    wj = V(21);
    xj = V(22);
    yj = V(23);
    zj = V(26);
    Aj = V(27);
    Bj = V(28);
    Cj = V(30);
    Dj = V(31);
    Ej = V(34);
    Fj = V(35);
    Gj = V(36);
    Hj = V(37);
    Ij = V(38);
    Jj = V(40);
    Kj = V(42);
    Lj = V(43);
    Mj = V(44);
    Nj = V(45);
    Oj = V(46);
    Pj = V(47);
    Qj = V(48);
    Rj = V(49);
    Sj = V(50);
    Tj = V(57);
    Uj = V(58);
    Vj = V(59);
    Wj = V(60);
    Xj = V(61);
    Yj = V(62);
    Zj = V(63);
    ak = V(64);
    bk = V(65);
    ck = V(66);
    dk = V(68);
    ek = V(69);
    fk = V(70);
    gk = V(71);
    hk = V(74);
    ik = V(75);
    jk = V(78);
    kk = V(79);
    lk = V(80);
    mk = V(82);
    nk = V(84);
    ok = V(85);
    pk = V(87);
    qk = V(88);
    rk = V(90);
    sk = V(92);
    tk = V(93);
    uk = V(94);
    vk = V(95);
    wk = V(97);
    xk = V(99);
    yk = V(100);
    zk = V(101);
    Ak = V(102);
    Bk = V(103);
    Ck = V(104);
    Dk = V(105);
    Ek = V(106);
    Fk = V(107);
    Gk = V(108);
    Hk = V(109);
    Ik = V(110);
    Jk = V(111);
    Kk = V(113);
    Lk = V(114);
    Mk = V(115);
    var Ok = function() {
            return new _.Nk(a => void a(void 0))
        },
        Qk = function(a) {
            const {
                j: b,
                resolve: c,
                reject: d
            } = new _.Pk, e = a.length;
            if (!e) return c([]), b;
            const f = [];
            let g = e;
            _.C(a, (h, k) => {
                try {
                    h.then(l => {
                        f[k] = l;
                        0 === --g && c(f)
                    }, d)
                } catch (l) {
                    d(l)
                }
            });
            return b
        };
    _.Nk = class extends mh {
        constructor(a) {
            super(a)
        }
        A(a) {
            _.q.v().j(102, !1) ? super.A(a) : a()
        }
    };
    _.Pk = class {
        constructor() {
            this.j = new _.Nk((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };
    var Sk = function() {
        var a = Fh(_.xa().cmd, Rk);
        return a.j ? a.j.j : Ok()
    };
    var Rk = class extends gj {
        constructor() {
            super();
            this.B = this.l = 0;
            this.j = null
        }
        D() {
            return new Ni(this)
        }
        push(a) {
            const b = dj.v();
            try {
                _.q.v().j(99, !1) && (this.j = this.j || new _.Pk);
                for (let c = 0; c < arguments.length; ++c) try {
                    _.La(arguments[c]) && (arguments[c](), this.l++)
                } catch (d) {
                    this.B++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(Cj(String(d.message)))
                }
                b.info(Dj(String(this.l), String(this.B)));
                return this.l
            } finally {
                _.q.v().j(99, !1) && this.j && (this.j.resolve(), this.j = null)
            }
        }
    };
    var Wk = function(a, b) {
            a.A = [...a.A, ..._.E(b, _.La)];
            _.q.v().j(173, !1) && Tk(a) ? Uk(a) : Vk(a)
        },
        Vk = function(a) {
            if (a.o) {
                if (!a.C) return;
                clearTimeout(a.o);
                a.o = 0
            }
            const b = dj.v();
            try {
                _.q.v().j(99, !1) && (a.j = a.j || new _.Pk);
                for (; a.A.length;) {
                    const c = a.A.shift();
                    try {
                        c(), a.l++
                    } catch (d) {
                        a.B++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(Cj(String(d.message)))
                    }
                    if (Tk(a)) {
                        Uk(a);
                        break
                    }
                }
                b.info(Dj(String(a.l), String(a.B)))
            } finally {
                _.q.v().j(99, !1) && a.j && (a.j.resolve(), a.j = null)
            }
        },
        Tk = function(a) {
            return !a.C && !!a.A.length && (_.q.v().j(170, !1) && _.fj(1) || _.q.v().j(171, !1))
        },
        Uk = function(a) {
            a.o || (a.o = setTimeout(a.F, _.Wf(23)))
        };
    var Xk = class extends Rk {
        constructor() {
            super();
            this.A = [];
            this.C = !1;
            this.o = 0;
            this.F = _.T(635, () => {
                this.o = 0;
                Vk(this)
            })
        }
        push(...a) {
            this.C = _.q.v().j(172, !1);
            Wk(this, a);
            return this.l
        }
    };
    var Yk = () => {
        if (_.q.v().j(176, !1)) {
            var a = _.xa().cmd;
            if (!a || _.v(a)) {
                var b = new Xk;
                _.xa().cmd = b.m();
                a && 0 < a.length && Wk(b, a)
            }
        } else if (a = _.xa().cmd, !a || _.v(a)) b = new Rk, _.xa().cmd = b.m(), a && 0 < a.length && b.push.apply(b, a)
    };
    Yk = _.T(77, Yk);
    _.Zk = (a, b, c = !1) => {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return c ? (new _.O(b.innerWidth, b.innerHeight)).round() : _.le(b || window).round()
        } catch (d) {
            return new _.O(-12245933, -12245933)
        }
    };
    _.$k = function() {
        this.F = this.F;
        this.L = this.L
    };
    _.$k.prototype.F = !1;
    _.$k.prototype.La = function() {
        this.F || (this.F = !0, this.l())
    };
    _.$k.prototype.l = function() {
        if (this.L)
            for (; this.L.length;) this.L.shift()()
    };
    _.al = function(a) {
        a && "function" == typeof a.La && a.La()
    };
    _.bl = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    var cl = function(a, b) {
        this.l = a;
        this.j = b
    };
    var dl = !1,
        el = "",
        fl = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (dl = !0, a.description)) {
                el = fl(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                dl = !0;
                el = "2.0.0.11";
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], dl = !(!a || !a.enabledPlugin))) {
            el = fl(a.enabledPlugin.description);
            return
        }
        if ("undefined" != typeof ActiveXObject) {
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                dl = !0;
                el = fl(b.GetVariable("$version"));
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                dl = !0;
                el = "6.0.21";
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), dl = !0, el = fl(b.GetVariable("$version"))
            } catch (c) {}
        }
    })();
    _.gl = dl;
    _.hl = el;
    var jl;
    jl = () => 0 != _.il(document);
    _.il = function(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    _.kl = function(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    _.ll = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    _.nl = function(a) {
        a.google_reactive_ads_global_state || (a.google_reactive_ads_global_state = new ml);
        return a.google_reactive_ads_global_state
    };
    var ml = class {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.adRegion = null;
            this.improveCollisionDetection = 1;
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new ol
        }
    };
    var ol = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var pl, sl, tl, ul;
    pl = 728 * 1.38;
    _.rl = a => {
        const b = _.ql(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    sl = (a, b = 420) => (a = _.ql(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384;
    tl = a => (a = _.rl(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072;
    _.ql = a => {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    ul = (a, b) => a.adCount ? 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) && 27 != b && 26 != b ? 1 <= a : !1 : !1;
    _.vl = function(a, b, c, d) {
        var e = c;
        e && (e = "?" + e);
        b = "//tpc.googlesyndication.com/safeframe/" + b + "/html/container.html" + e; {
            e = a;
            let f = 0;
            for (; e != e.parent;) f++, e = e.parent;
            e = f
        }
        e && (b += (c ? "&" : "?") + "n=" + e);
        (c = d) || (c = Qe(a, !1));
        return (c ? "https:" : "http:") + b
    };
    _.wl = function(a) {
        for (let c = a.j.length - 1; 0 <= c; c--) {
            var b = a.j[c];
            b.l ? (b.m.style.removeProperty(b.j), b.m.style.setProperty(b.j, String(b.o), b.A)) : b.m.style[b.j] = b.o
        }
        a.j.length = 0
    };
    var yl, zl, Al;
    _.xl = function(a) {
        a.Oa() || (2 == a.I && (_.wl(a.m), a.I = 0), window.clearTimeout(a.M), a.M = -1, a.C = 3, a.l && (a.l.La(), a.l = null), a.F && a.j ? a.F.unobserve(a.j) : (_.hf(window, "resize", a.K), _.hf(window, "scroll", a.K)), a.j && a.B == _.qe(a.j) && a.B.removeChild(a.j), a.j = null, a.B = null, a.F && (a.F.disconnect(), a.F = null), a.status = 100)
    };
    yl = ["allow-modals", "allow-orientation-lock", "allow-presentation"];
    zl = ["allow-top-navigation"];
    Al = ["allow-same-origin"];
    _.Bl = Ue([...yl, ...zl]);
    Ue([...yl, ...Al]);
    Ue([...yl, ...zl, ...Al]);
    var Cl = function(a) {
        _.zd(this, a, null, null)
    };
    _.B(Cl, _.ud);
    Cl.prototype.getTime = function() {
        return _.H(this, 4)
    };
    _.Dl = function(a, b) {
        a.C && a.B ? (a.o += b - a.A, 1E3 <= a.o && (a.l = b), 0 < a.j || (a.m += b - a.A)) : a.o = 0;
        a.A = b
    };
    var El = class {
        constructor(a) {
            this.A = a.time;
            this.C = a.gc;
            this.B = a.ec;
            this.j = this.l = -1;
            this.o = this.m = 0
        }
    };
    const Fl = [.05, .1, .2, .5],
        Gl = [0, .5, 1],
        Hl = a => {
            a = De(a);
            if (!a) return -1;
            a = _.hh(a);
            return -12245933 == a.width || -12245933 == a.height ? -1 : a.width * a.height
        },
        Il = (a, b) => 0 > a ? [] : _.F(Fl, c => Math.min(a / b * c, 1));
    var Kl = function(a) {
            var b = a.m.offsetWidth * a.m.offsetHeight;
            const c = Hl(a.l);
            b = [...Gl, ...Il(c, b)];
            _.nb(b);
            return new _.p.IntersectionObserver(d => Jl(a, d), {
                threshold: b
            })
        },
        Ll = function(a) {
            const b = _.kl(a.l.document);
            b && _.Q(a.l.document, b, () => {
                if (a.j) {
                    var c = a.j,
                        d = 1 == _.il(a.l.document);
                    _.Dl(c, Math.round(performance.now()));
                    c.B = d
                }
            })
        },
        Ml = function(a, b) {
            if (a.o && (null != a.B && a.unobserve(), a.B = b, a.o.observe(a.m), a.C = !0, a.D)) {
                b = Math.round(performance.now());
                var c = a.m.getBoundingClientRect();
                var d = c.width * c.height;
                a: {
                    var e = 0;
                    if (!_.ll(a.l.document)) {
                        e = De(a.l);
                        if (!e) {
                            c = -1;
                            break a
                        }
                        const f = gh(e.document);
                        e = Math.min(f.clientWidth, c.left + c.width) - Math.max(0, c.left);
                        c = Math.min(f.clientHeight, c.top + c.height) - Math.max(0, c.top);
                        e = 0 < e && 0 < c ? e * c : 0
                    }
                    c = e
                }
                d = 0 < d ? c / d > (242500 < d ? .3 : .5) : !1;
                a.j = new El({
                    time: b,
                    gc: d,
                    ec: 1 == _.il(a.l.document)
                })
            }
        },
        Jl = function(a, b) {
            try {
                const c = Hl(a.l);
                _.C(b, d => {
                    var e = Math.round(d.time),
                        f = d.boundingClientRect.width * d.boundingClientRect.height,
                        g = d.intersectionRect.width * d.intersectionRect.height;
                    d = d.isIntersecting;
                    if (a.D && a.j) {
                        var h = a.j,
                            k = 0 < f ? g / f > (242500 < f ? .3 : .5) : !1;
                        _.Dl(h, e);
                        h.C = k
                    }
                    a.G && Nl(a, e, f, g, c, d)
                })
            } catch (c) {
                a.A && a.A(c)
            }
        },
        Nl = function(a, b, c, d, e, f) {
            if (null == a.B) throw Error("Not Attached.");
            var g = new Cl;
            c = _.K(g, 1, c);
            d = _.K(c, 2, d);
            e = _.K(d, 3, e);
            b = _.K(e, 4, b);
            b = _.K(b, 5, f);
            f = new sd;
            e = _.H(b, 4);
            null != e && null != e && td(f, 4, e);
            e = _.H(b, 2);
            null != e && null != e && td(f, 2, e);
            e = _.H(b, 1);
            null != e && null != e && td(f, 1, e);
            e = _.H(b, 3);
            null != e && null != e && td(f, 3, e);
            e = _.H(b, 5);
            null != e && (b = e, null != b && (rd(f.j, 40), f.j.j.push(b ? 1 : 0)));
            b = new Uint8Array(f.j.length());
            d = f.l;
            c = d.length;
            for (g = e = 0; g < c; g++) {
                var h = d[g];
                b.set(h, e);
                e += h.length
            }
            d = f.j;
            c = d.j;
            d.j = [];
            b.set(c, e);
            f.l = [b];
            f = nd(b, 4);
            Zg(a.F, "1", 10, f, void 0, a.B)
        };
    var Ol = class {
        constructor(a) {
            this.l = a.gb;
            this.m = a.Za;
            this.F = a.Ec;
            this.B = null;
            this.A = a.na;
            this.C = !1;
            this.o = Kl(this);
            this.G = a.xc || !1;
            this.D = a.wc || !1;
            this.j = null;
            this.D && Ll(this)
        }
        unobserve() {
            try {
                Nl(this, Math.round(performance.now()), 0, 0, 0, !1)
            } catch (a) {
                this.A && this.A(a)
            }
            this.o && this.o.unobserve(this.m);
            this.C = !1;
            this.j = null
        }
    };
    var Pl = () => ({
        ["adsense_channel_ids"]: "channel",
        ["adsense_ad_types"]: "ad_type",
        ["adsense_ad_format"]: "format",
        ["adsense_background_color"]: "color_bg",
        ["adsense_border_color"]: "color_border",
        ["adsense_link_color"]: "color_link",
        ["adsense_text_color"]: "color_text",
        ["adsense_url_color"]: "color_url",
        ["page_url"]: "url",
        ["adsense_allow_expandable_ads"]: "ea",
        ["adsense_content_section"]: "region",
        ["adsense_cpm"]: "cpm",
        ["adsense_encoding"]: "oe",
        ["adsense_family_safe"]: "adsafe",
        ["adsense_flash_version"]: "flash",
        ["adsense_font_face"]: "f",
        ["adsense_font_size"]: "fs",
        ["adsense_hints"]: "hints",
        ["adsense_host"]: "host",
        ["adsense_host_channel"]: "h_ch",
        ["adsense_host_tier_id"]: "ht_id",
        ["adsense_keyword_type"]: "kw_type",
        ["adsense_keywords"]: "kw",
        ["adsense_relevant_content"]: "contents",
        ["adsense_targeting"]: "targeting",
        ["adsense_targeting_types"]: "targeting",
        ["adsense_test_mode"]: "adtest",
        ["alternate_ad_iframe_color"]: "alt_color",
        ["alternate_ad_url"]: "alternate_ad_url",
        ["demographic_age"]: "cust_age",
        ["demographic_ch"]: "cust_ch",
        ["demographic_gender"]: "cust_gender",
        ["demographic_interests"]: "cust_interests",
        ["demographic_job"]: "cust_job",
        ["demographic_l"]: "cust_l",
        ["demographic_lh"]: "cust_lh",
        ["demographic_u_url"]: "cust_u_url",
        ["demographic_unique_id"]: "cust_id",
        ["document_language"]: "hl",
        ["geography_override_city"]: "gcs",
        ["geography_override_country"]: "gl",
        ["google_content_recommendation_ad_positions"]: "ad_pos",
        ["matched_content_columns_num"]: "cr_col",
        ["matched_content_rows_num"]: "cr_row",
        ["matched_content_ui_type"]: "crui",
        ["matched_content_use_square_imgs"]: "cr_sq_img"
    });
    var Ql = class extends Eh {
        constructor(a) {
            super();
            this.addEventListener = U(86, (b, c) => {
                a.addEventListener(b, c);
                return this
            });
            this.getSlots = U(573, () => _.F(a.A, b => b.m()));
            this.getSlotIdMap = U(574, () => {
                const b = a.U,
                    c = {};
                for (const d in b) c[d] = b[d].m();
                return c
            });
            this.enable = U(87, () => Rl(a), _.Ji);
            this.getName = U(575, () => a.j())
        }
    };
    var Sl = class extends Eh {
        constructor(a, b, c) {
            super();
            const d = dj.v();
            this.set = U(40, (e, f) => {
                if ("string" !== typeof e || !f || void 0 === Pl()[e]) return d.H(W("Slot.set", [e, f]), null, a), this;
                var g = db(_.Hd(c, Nh, 3), h => _.H(h, 1) === e);
                g ? Ph(g, [f]) : (g = Oh(new Nh, e), Dd(g, 2, f), Kd(c, 3, g, Nh));
                a.set(e, f);
                return this
            });
            this.get = U(41, e => {
                if ("string" !== typeof e) return d.H(W("Slot.get", [e]), null, a), null;
                var f = db(_.Hd(c, Nh, 3), g => _.H(g, 1) === e);
                return (f = f && _.H(f, 2)) ? f[0] : null
            });
            this.getAttributeKeys = U(42, () => _.F(_.Hd(c, Nh, 3), e => _.H(e, 1)));
            this.addService = U(43, e => {
                e = Fh(e, b);
                a.addService(e);
                return this
            });
            this.defineSizeMapping = U(44, e => {
                if (!_.v(e)) throw Error("Size mapping has to be an array");
                e = _.F(e, Tl);
                e = new Ul(e);
                a.Ha = e;
                return this
            }, (e, f) => {
                _.Ji(e, f);
                bf(`Incorrect usage of googletag.Slot defineSizeMapping: ${f.message}`);
                return this
            });
            this.setClickUrl = U(45, e => {
                Vl(a, e);
                return this
            });
            this.setCategoryExclusion = U(46, e => {
                "string" !== typeof e || Vb(null == e ? "" : String(e)) ? a.o.H(W("Slot.setCategoryExclusion", [e]), null, a) : (fb(a.Z, e), a.o.info(rj(e), null, a));
                return this
            });
            this.clearCategoryExclusions = U(47, () => {
                a.o.info(sj(), null, a);
                a.Z = [];
                return this
            });
            this.getCategoryExclusions = U(48, () => _.lb(a.Z));
            this.setTargeting = U(49, (e, f) => {
                Wl(a, e, f);
                return this
            });
            this.clearTargeting = U(50, e => {
                "undefined" != typeof e ? "string" !== typeof e || Vb(null == e ? "" : String(e)) ? a.o.H(W("Slot.clearTargeting", [e]), null, a) : a.B[e] ? (delete a.B[e], a.o.info(Bk(e, a.getAdUnitPath()), null, a)) : a.o.H(Ak(e, a.getAdUnitPath()), null, a) : (a.o.info(uj(), null, a), a.B = {});
                return this
            });
            this.getTargeting = U(51, e => {
                "string" !== typeof e ? (a.o.H(W("Slot.getTargeting", [e]), null, a), e = []) : e = a.B.hasOwnProperty(e) ? _.lb(a.B[e]) : [];
                return e
            });
            this.getTargetingKeys = U(52, () => ub(a.B));
            this.setCollapseEmptyDiv = U(53, (e, f) => {
                Xl(a, e, f);
                return this
            });
            this.getAdUnitPath = U(54, () => a.getAdUnitPath());
            this.getSlotElementId = U(598, () => a.l.j);
            this.setForceSafeFrame = U(55, e => {
                Yl(a, e);
                return this
            });
            this.setSafeFrameConfig = U(56, e => {
                if (e && _.w(e)) {
                    if (e = Zl(e)) a.Da = e
                } else a.o.error(W("Slot.setSafeFrameConfig", [e]), null, a);
                return this
            });
            this.getResponseInformation = U(355, () => a.ja);
            this.getName = U(170, () => {
                window.console && console.error && console.error("getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.");
                var e = new _.Ai("slot_get_name");
                _.r(e);
                _.Bi(e);
                return e = a.N
            });
            this.getSlotId = U(579, () => a.l.m());
            this.getServices = U(580, () => _.F(a.O, e => e.m()));
            this.getSizes = U(581, (e, f) => $l(a, e, f));
            this.getClickUrl = U(582, () => a.P);
            this.getTargetingMap = U(583, () => Ib(a.B));
            this.getOutOfPage = U(584, () => a.getOutOfPage());
            this.getCollapseEmptyDiv = U(585, () => a.pa);
            this.getDivStartsCollapsed = U(586, () => a.aa);
            this.getContentUrl = U(587, () => _.am(a));
            this.getFirstLook = U(588, () => {
                bf("The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.");
                return 0
            });
            this.getEscapedQemQueryId = U(591, () => _.bm(a));
            this.getHtml = U(592, () => a.getHtml())
        }
    };
    var cm = class extends Eh {
        constructor(a) {
            super();
            this.getId = U(593, () => a.l);
            this.getAdUnitPath = U(594, () => a.getAdUnitPath());
            this.getName = U(595, () => {
                var b = new _.Ai("slot_id_get_name");
                _.r(b);
                _.Bi(b);
                return b = a.o
            });
            this.toString = U(596, () => a.toString());
            this.getDomId = U(597, () => a.j)
        }
    };
    var dm = a => {
            switch (a) {
                case 1:
                    return 2;
                case 2:
                    return 1;
                case 4:
                    return 8;
                default:
                    return null
            }
        },
        em = zb(() => {
            const a = {
                REWARDED: 3
            };
            _.q.v().j(35, !1) && (a.TOP_ANCHOR = 1, a.BOTTOM_ANCHOR = 2, a.VIGNETTE = 4);
            return a
        }),
        fm = () => {
            var a = _.xa();
            if (!a.enums) {
                var b = em();
                if (b) {
                    const c = {};
                    c.OutOfPageFormat = b;
                    a.enums = c
                }
            }
        };
    var Zl;
    let gm = "",
        hm = null;
    _.im = () => {
        gm || (gm = _.q.v().m(2, "") || "1-0-35");
        return gm
    };
    _.jm = () => {
        if (null == hm) {
            for (var a = _.q.v().l(1, []), b = [], c = 0; c < a.length; c += 2) xe(a[c], a[c + 1], b);
            hm = b.join("&")
        }
        return hm
    };
    Zl = a => {
        const b = dj.v(),
            c = {};
        if (!a || !_.w(a)) return null;
        let d = !1;
        _.P(a, (e, f) => {
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? c.allowOverlayExpansion = a.allowOverlayExpansion : (b.error(zk("allowOverlayExpansion", String(a.allowOverlayExpansion))), d = !0);
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? c.allowPushExpansion = a.allowPushExpansion : (b.error(zk("allowPushExpansion", String(a.allowPushExpansion))), d = !0);
                    break;
                case "sandbox":
                    !0 === e ? c.sandbox = a.sandbox : (b.error(zk("sandbox", String(a.sandbox))), d = !0);
                    break;
                default:
                    b.H(yk(f))
            }
        });
        return d ? null : c
    };
    var km = {
            md: "impressionViewable",
            xd: "rewardedSlotCanceled",
            yd: "rewardedSlotClosed",
            zd: "rewardedSlotCompleted",
            Ad: "rewardedSlotGranted",
            Bd: "rewardedSlotReady",
            Dd: "slotAdded",
            Ed: "slotOnload",
            Fd: "slotRenderEnded",
            Gd: "slotRequested",
            Hd: "slotResponseReceived",
            Id: "slotVisibilityChanged"
        },
        om, pm, qm, rm;
    _.lm = class {
        constructor(a, b) {
            this.slot = a;
            this.serviceName = b
        }
    };
    _.mm = function(a, b) {
        a.size = b;
        return a
    };
    _.nm = class extends _.lm {
        constructor(a, b, c) {
            super(a, c);
            this.isEmpty = b;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        }
    };
    om = class extends _.lm {
        constructor(a, b, c) {
            super(a, b);
            this.inViewPercentage = c
        }
    };
    pm = class extends _.lm {};
    qm = class extends _.lm {};
    rm = class extends _.lm {};
    var Rl = function(a) {
            a.o || (a.M(), a.o = !0)
        },
        sm = function(a, b, c) {
            const d = a.I[b];
            _.v(d) && ff(() => {
                for (const e of d) try {
                    e(c)
                } catch (f) {
                    const g = f && "string" === typeof f.name ? f.name : null,
                        h = f && "string" === typeof f.message ? f.message : null;
                    let k = "";
                    g && h ? k = `${g}: ${h}` : g ? k = g : h && (k = h);
                    a.log.H(sk(k), a);
                    window.console && console.error && console.error(f)
                }
            })
        },
        tm = function(a, b) {
            _.ya("gpt_callback_usage", c => {
                _.r(c);
                _.t(c, "type", b);
                let d = 0,
                    e = 0;
                _.C(a.A, f => {
                    0 < f.F && d++;
                    f.I && e++
                });
                _.t(c, "nfetch", d);
                _.t(c, "nrend", e)
            })
        };
    var um = class extends gj {
        constructor() {
            super();
            this.A = [];
            this.U = {};
            this.o = !1;
            this.I = {};
            this.log = dj.v();
            this.log.info(Fj(this.j()), this)
        }
        D() {
            return new Ql(this)
        }
        getVersion() {
            return "unversioned"
        }
        O(a) {
            this.A.push(a);
            const b = new qm(a.m(), this.j());
            sm(this, "slotAdded", b);
            this.U[_.S(a)] = a;
            this.log.info(Jj(this.j(), a.getAdUnitPath()), this, a)
        }
        destroySlots(a) {
            const b = this.A,
                c = _.E(b, d => _.eb(a, d));
            _.C(c, d => {
                _.hb(b, d)
            });
            return c
        }
        addEventListener(a, b) {
            if (!_.La(b) || "string" !== typeof a) return a = W("Service.addEventListener", [a, b]), this.log.H(a, this), this;
            if (!Gb(km, a)) return this.log.H(tk(a), this), this;
            _.v(this.I[a]) || (this.I[a] = []);
            this.I[a].push(b);
            tm(this, a);
            return this
        }
    };
    var wm = function() {
        var a = _.vm.v();
        _.fh.v().j(6);
        _.P(a.j, b => {
            b.o ? a.l.info(Ij(), b) : Rl(b)
        })
    };
    _.vm = class {
        constructor() {
            this.j = {};
            this.l = dj.v();
            this.o = this.l.info(pj());
            Gh(window, () => _.T(92, this.m))
        }
        add(a) {
            this.j[a.j()] = a
        }
        find(a) {
            let b = null;
            a in this.j && (b = this.j[a]);
            return b
        }
        destroySlots(a) {
            _.P(this.j, b => b.destroySlots(a))
        }
        m() {
            this.l.info(jj(), null, null, this.o)
        }
    };
    Ia(_.vm);
    _.vm.prototype.m = _.T(92, _.vm.prototype.m);
    wa("enableServices", _.T(91, () => {
        wm()
    }));
    var xm = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        getWidth() {
            return this.l
        }
        getHeight() {
            return this.j
        }
    };
    var ym = a => {
            var b;
            if (b = _.v(a) && 2 == a.length) b = a[0], b = 0 === b || ri(b);
            b && (b = a[1], b = 0 === b || ri(b));
            return b || "string" === typeof a && "fluid" == a
        },
        zm = a => _.v(a) ? new xm(a[0], a[1]) : a,
        Bm = a => {
            const b = [];
            if (Am(a)) b.push(zm(a));
            else if (_.v(a))
                for (let c = 0; c < a.length; ++c) {
                    const d = a[c];
                    Am(d) && b.push(zm(d));
                    sb(d, ["fluid"]) && b.push("fluid")
                }
            return b
        },
        Am = a => _.v(a) && 1 < a.length && "number" === typeof a[0] && "number" === typeof a[1] || "string" === typeof a && "fluid" == a;
    var Tl = function(a) {
            if (!_.v(a) || 2 != a.length) throw Error("Each mapping entry has to be an array of size 2");
            var b = a[0];
            if (!ym(b) || "fluid" == b) throw Error("Size has to be an array of two non-negative integers");
            b = new _.O(b[0], b[1]);
            if (_.v(a[1]) && 0 == a[1].length) a = [];
            else if (a = Bm(a[1]), 0 == a.length) throw Error("At least one slot size must be present");
            return new cl(b, a)
        },
        Cm = function(a, b) {
            a = db(a.j, c => {
                c = c.l;
                return c.width <= b.width && c.height <= b.height
            });
            return null == a ? null : a.j
        };
    var Ul = class {
        constructor(a) {
            this.j = a
        }
    };
    var Dm = class extends gj {
        constructor(a, b, c) {
            super();
            this.o = a;
            this.Na = b;
            this.l = `${this.o}_${this.Na}`;
            this.j = c
        }
        getAdUnitPath() {
            return this.o
        }
        v() {
            return this.Na
        }
        toString() {
            return this.l
        }
        D() {
            return new cm(this)
        }
    };
    Dm.prototype.getInstance = Dm.prototype.v;
    var Vl, Wl, Xl, Yl, $l, Lm, Mm, Nm, Om, Pm, Qm, Sm, Zm;
    _.S = function(a) {
        return a.N + "_" + a.l.v()
    };
    _.hi = function(a) {
        const b = [];
        let c = !1;
        _.C(_.Em(a), d => {
            _.v(d) ? b.push(d.join("x")) : "fluid" == d ? c = !0 : b.push(d)
        });
        c && b.unshift("320x50");
        return b.join("|")
    };
    _.Fm = function(a) {
        return !(!a.j || !_.Fd(a.j, _.Sd, 41) || "string" !== typeof _.Bd(_.Fd(a.j, _.Sd, 41).getHtml()))
    };
    _.bm = function(a) {
        return a.j && _.H(a.j, 34) || ""
    };
    Vl = function(a, b) {
        "string" !== typeof b ? a.o.H(W("Slot.setClickUrl", [b]), null, a) : a.P = b
    };
    Wl = function(a, b, c) {
        let d = [];
        _.v(c) ? d = c : c && d.push(c.toString());
        "string" === typeof b ? (a.o.info(tj(b, d.join(), a.getAdUnitPath()), null, a), a.B[b] = d) : a.o.H(W("Slot.setTargeting", [b, c]), null, a)
    };
    Xl = function(a, b, c) {
        "boolean" !== typeof b || c && "boolean" !== typeof c ? a.o.H(W("Slot.setCollapseEmptyDiv", _.E([b, c], _.Ba)), null, a) : (a.pa = b, a.aa = b && !!c, _.ya("gpt_ced", d => {
            _.t(d, "sc", a.aa ? "t" : "f");
            _.t(d, "level", "slot");
            _.r(d)
        }), c && !b && a.o.H(vj(a.l.toString()), null, a))
    };
    Yl = function(a, b) {
        "boolean" !== typeof b ? a.o.H(W("Slot.setForceSafeFrame", [b]), null, a) : a.ca = b
    };
    $l = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && a.Ha ? Cm(a.Ha, new _.O(b, c)) : a.Kb
    };
    _.am = function(a) {
        return _.La(a.K) ? a.K() : a.K
    };
    _.Gm = function(a, b) {
        b || (b = ++_.Zh.v().m);
        a.A = b
    };
    _.X = function(a, b = document) {
        return a.M || b.getElementById(a.l.j)
    };
    _.Em = function(a) {
        var b = window;
        let c = null;
        b.top == b && (b = _.Zk(!1, b), c = $l(a, b.width, b.height));
        null == c && (c = $l(a));
        return _.F(c, d => "string" === typeof d ? d : [d.getWidth(), d.getHeight()])
    };
    _.Hm = function(a) {
        return 3 == a.ma()
    };
    _.Im = function(a) {
        a.I = a.o.info(nj(a.getAdUnitPath()), null, a)
    };
    _.Km = function(a, b) {
        a.o.info(oj(a.getAdUnitPath()), null, a, a.I);
        _.Jm(a, "slotRenderEnded", b)
    };
    Lm = function(a, b) {
        if (!_.X(a)) return a.o.error(wj(a.l.toString()), null, a), !1;
        var c = a.l.j;
        const d = _.X(a, _.p.document);
        if (!d) return a.o.error(xj(c, a.l.toString()), null, a), !1;
        c = a.sa;
        return "string" === typeof c && 0 < c.length ? (_.Im(a), d.innerHTML = c, _.Km(a, b), !0) : !1
    };
    Mm = function(a, b, c = null) {
        if (a.qa && (_.ya("gpt_mult_disp", d => {
                _.t(d, "iu", a.N);
                _.t(d, "id", a.l.j);
                _.t(d, "ac", a.j ? "1" : "0");
                _.r(d)
            }), _.q.v().j(89, !1))) return;
        a.M = c;
        a.ob && !_.X(a) ? a.o.H(yj(a.N, a.l.j), null, a) : (a.qa = !0, _.C(a.O, d => {
            d.o && d.N(b, a)
        }))
    };
    _.Jm = function(a, b, c) {
        _.C(a.O, d => {
            d.j() == c.serviceName && sm(d, b, c)
        })
    };
    Nm = function(a) {
        a.fb = a.o.info(lj(a.getAdUnitPath()), null, a);
        a.F++;
        Zg(_.Zh.v(), "7", 9, a.F, 0, a.A);
        const b = new rm(a.m(), "publisher_ads");
        _.Jm(a, "slotRequested", b);
        a.I = null
    };
    Om = function(a, b) {
        a.K = b
    };
    Pm = function(a) {
        a.L = !1;
        a.V = null;
        a.ja = null;
        a.j = null;
        a.Ka = null;
        a.X = null;
        a.fa = "";
        a.Fa = null;
        a.ka = null;
        a.ha = null;
        a.U = null
    };
    Qm = function(a) {
        const b = a.G ? _.Qg() - a.G : 0;
        return Math.round((a.la + b) / 1E3)
    };
    _.Rm = function(a) {
        return a.j ? !!_.J(a.j, 9) : null
    };
    Sm = function(a, b) {
        a.Ba = b
    };
    _.Tm = function(a) {
        return "google_ads_iframe_" + _.S(a)
    };
    _.Um = function(a) {
        return _.Tm(a) + "__container__"
    };
    _.Vm = function(a, b) {
        return a.ua ? a.ua : b.getElementById(_.Tm(a))
    };
    _.Wm = function(a, b) {
        if (a.R) return a.R;
        a = _.Um(a);
        return b.getElementById(a)
    };
    _.Xm = function(a) {
        if (!a.ga) {
            var b = _.X(a);
            b = b && b.parentElement;
            if (_.q.v().j(50, !1)) {
                if (b = b.getBoundingClientRect()) {
                    const {
                        left: c,
                        top: d,
                        right: e,
                        bottom: f
                    } = b;
                    a.ga = (new _.O(e - c, f - d)).floor()
                }
            } else b && b.getBoundingClientRect && (a.ga = ui(b))
        }
        return a.ga
    };
    _.Ym = function(a, b = document) {
        if (!a.ka) {
            b = _.X(a, b);
            if (!b) return null;
            a.ka = _.Fe(b, window)
        }
        return a.ka
    };
    Zm = function(a) {
        const b = _.Xm(a);
        return b ? _.$a(_.Em(a), c => {
            if ("string" === typeof c) return !0;
            const d = Math.floor(c[1]) == b.height;
            return Math.floor(c[0]) != b.width || !d
        }) : !1
    };
    var $m = class extends gj {
        constructor(a, b, c, d, e) {
            super();
            this.Jb = e;
            this.N = a;
            this.Kb = Bm(c);
            this.Ha = null;
            this.l = new Dm(a, b, d);
            this.O = [];
            this.ea = {};
            this.sa = null;
            this.o = dj.v();
            this.o.info(kj(this.l.toString()), null, this);
            this.I = this.fb = null;
            this.P = this.K = "";
            this.ob = !0;
            this.B = {};
            this.Z = [];
            this.za = !1;
            this.pb = 0;
            this.aa = this.pa = null;
            this.Hb = -1;
            this.rb = 2;
            this.W = !1;
            this.Da = {};
            this.Ea = "";
            this.ib = !1;
            this.ca = null;
            this.L = !1;
            this.V = null;
            this.sb = Bb(f => {
                null !== f && (f = new om(this.m(), "publisher_ads", f), _.Jm(this, "slotVisibilityChanged", f))
            });
            this.C = si(this.N);
            this.Ra = "";
            this.ja = this.J = null;
            this.qa = !1;
            this.Ba = this.F = 0;
            this.qb = this.R = this.ua = this.M = null;
            this.Aa = !1;
            this.U = this.ha = this.ka = this.Ja = this.ga = null;
            _.Gm(this);
            this.fa = "";
            this.Ca = new _.Qh;
            this.X = this.Ka = this.ba = null;
            this.T = 0;
            this.j = null;
            this.la = this.G = 0;
            this.ra = this.hb = !1;
            this.Fa = null
        }
        D() {
            return new Sl(this, um, this.Jb)
        }
        set(a, b) {
            this.ea[a] = b;
            return this
        }
        get(a) {
            return this.ea.hasOwnProperty(a) ? this.ea[a] : null
        }
        addService(a) {
            var b = _.vm.v();
            if (!Gb(b.j, a)) return this.o.H(uk(this.l.toString()), null, this), this;
            for (b = 0; b < this.O.length; ++b)
                if (a == this.O[b]) return this.o.H(qj(a.j(), this.l.toString()), a, this), this;
            this.O.push(a);
            a.O(this);
            return this
        }
        getAdUnitPath() {
            return this.N
        }
        v() {
            return this.l.v()
        }
        da() {
            return _.eb(_.Em(this), "fluid")
        }
        getOutOfPage() {
            return this.za
        }
        ma() {
            return this.pb
        }
        loaded() {
            const a = new pm(this.m(), "publisher_ads");
            _.Jm(this, "slotOnload", a);
            _.ah(_.Zh.v(), "6", this.A);
            _.q.v().j(86, !1) && this.j && _.H(this.j, 4) && rh()
        }
        getHtml() {
            return _.Rm(this) ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : this.j && _.H(this.j, 4) || ""
        }
        Oa() {
            return this.ib
        }
        Ib() {
            return this.C
        }
    };
    var an = function(a, b) {
        return a.j[b] || []
    };
    _.bn = class {
        constructor() {
            this.l = [];
            this.m = [];
            this.j = {}
        }
    };
    Ia(_.bn);
    var cn = function(a, b) {
            return db(_.Hd(a.j, Uh, 1), c => _.H(c, 2) === b)
        },
        dn = function(a, b) {
            const c = _.Hd(a.j, Uh, 1);
            ib(c, d => _.H(d, 2) === b) && Jd(a.j, 1, c)
        };
    var en = class {
        constructor() {
            this.j = new Xh
        }
    };
    Ia(en);
    var fn = class {
        constructor() {
            this.j = () => !1;
            this.l = "";
            const a = en.v();
            this[3] = {
                [19]: () => !!_.J(a.j, 10),
                [14]: li,
                [13]: (...b) => _.$a(b, c => 0 == this.l.lastIndexOf(c, 0)),
                [12]: () => !!_.J(a.j, 6),
                [11]: jl,
                [15]: b => this.j(b),
                [7]: () => !(!_.p.crypto || !_.p.crypto.subtle),
                [1]: () => 0 == (0, _.Ye)()
            };
            this[4] = {
                [3]: () => (0, _.Ye)()
            };
            this[5] = {}
        }
    };
    Ia(fn);
    var mn, nn, on, qn, sn, hn, pn, tn, un, vn;
    const gn = a => !!_.Le(em(), b => b == a),
        kn = a => _.eb(ti(hn(_.jn.v())), a),
        ln = Ab(() => {
            bf("GPT does not support passback slots on the top window. Each passback slot should be defined and rendered within an iframe.")
        });
    mn = function(a) {
        const b = [];
        a = an(_.bn.v(), a);
        _.C(a, c => {
            (c = _.Vm(c, document)) && b.push(c.contentWindow)
        });
        return b
    };
    nn = function(a, b, c, d, e = !1) {
        if ("string" === typeof a && (void 0 === c || "string" === typeof c)) {
            const f = _.jn.v();
            return f && f.add(a, b, {
                Za: c,
                yc: d,
                pc: e
            })
        }
        return {}
    };
    on = function(a, b, c) {
        ({
            slot: a
        } = nn(a, b, c));
        return a && a.m() || null
    };
    qn = function(a) {
        const b = _.jn.v();
        return b && null == a ? pn(b) : b && _.v(a) ? (a = _.F(a, c => Fh(c, $m)), pn(b, a)) : !1
    };
    _.rn = function(a, b, c) {
        ({
            slot: a
        } = _.jn.v().add(a, [1, 1], {
            Za: c,
            format: b
        }));
        a && (a.za = !0, a.pb = b);
        return a || null
    };
    sn = function(a, b) {
        return "string" === typeof a && (null == b || "string" === typeof b || "number" === typeof b && gn(b)) ? (a = _.rn(a, "number" === typeof b ? b : 0, "string" === typeof b ? b : void 0)) && a.m() : null
    };
    hn = function(a) {
        const b = [];
        _.Cb(a.j, c => {
            _.C(c, d => {
                b.push(d)
            })
        });
        return b
    };
    pn = function(a, b) {
        if (b && !_.v(b)) return a.o.H(W("googletag.destroySlots", [b])), !1;
        b ? (_.nb(b), b = _.E(b, c => c && !c.Oa())) : b = hn(a);
        if (!b || 0 == b.length) return !1;
        _.vm.v().destroySlots(b);
        tn(a, b);
        return !0
    };
    tn = function(a, b) {
        for (const d of b) {
            dn(en.v(), d.l.j);
            b = d;
            b.ib = !0;
            b.o.info(xk(b.l.toString()), null, b);
            b = dm(d.ma());
            if (null != b) {
                var c = _.nl(window); {
                    const e = c.adCount && c.adCount[b];
                    e && (c.adCount[b] = e - 1)
                }
            }
            c = d.getAdUnitPath();
            _.hb(a.j[c], d);
            0 == a.j[c].length && (b = a.j, c in b && delete b[c]);
            b = a.l;
            c = d.l.j;
            c in b && delete b[c];
            _.hb(_.Gi, d)
        }
    };
    un = function(a, b) {
        return a.l[b] ? a.l[b] : null
    };
    vn = function(a, b) {
        const c = Fh(b, $m);
        return !!c && Eb(a.j, d => _.eb(d, c))
    };
    _.jn = class {
        constructor() {
            this.j = {};
            this.m = {};
            this.l = {};
            this.o = dj.v();
            this.A = [];
            fn.v().j = kn
        }
        add(a, b, {
            Za: c,
            yc: d = $m,
            format: e = 0,
            pc: f = !1
        } = {}) {
            if ("string" !== typeof a || 0 >= a.length || !b) return {};
            e = dm(e);
            if (null != e) {
                var g = _.nl(window);
                if (ul(g, e)) return {};
                g.adCount = g.adCount || {};
                g.adCount[e] = g.adCount[e] + 1 || 1
            }
            f && window == window.top && ln();
            a in this.j || (this.j[a] = [], this.m[a] = f ? 1 : 0);
            f = this.m[a];
            c = c || `${"gpt_unit_"}${a}_${f}`;
            if (this.l[c]) return this.o.error(Bj(c)), {};
            e = new Uh;
            e = _.K(e, 1, a);
            e = _.K(e, 2, c);
            g = en.v();
            Kd(g.j, 1, e, Uh);
            b = new d(a, f, b, c, e);
            this.m[a]++;
            this.j[a].push(b);
            this.l[b.l.j] = b;
            _.Gi.push(b);
            return {
                slot: b,
                Pa: e
            }
        }
    };
    Ia(_.jn);
    on = _.T(74, on);
    qn = _.T(75, qn);
    sn = _.T(73, sn);
    var wn = _.T(95, a => {
        const b = dj.v(); {
            let g = null,
                h = "";
            if ("string" === typeof a) {
                h = a;
                var c = un(_.jn.v(), h)
            } else _.w(a) && 1 == a.nodeType ? (g = a, h = g.id, c = un(_.jn.v(), h)) : c = Fh(a, $m);
            c = {
                slot: c,
                Qb: g,
                Rb: h
            }
        }
        const {
            slot: d,
            Qb: e,
            Rb: f
        } = c;
        d ? (a = en.v().j, cn(en.v(), d.l.j) && (a = zi(a), Mm(d, a, e))) : f ? b.error(Aj(String(f))) : b.error(zj(String(a)))
    });
    let Jg, xn, yn;
    const Kg = _.jg(),
        zn = new bh(1, Kg);
    (() => {
        Jg = new _.Ng("http:" === Ud.location.protocol ? "http:" : "https:", "pagead2.googlesyndication.com", "/pagead/gen_204?id=", .01);
        "number" !== typeof Kg.google_srt && (Kg.google_srt = Math.random());
        Lg();
        xn = new _.dh(Jg, "jserror", !0, zn);
        xn.F(b => {
            {
                const d = Ud.jerExpIds;
                if (_.v(d) && 0 !== d.length) {
                    var c = b.eid;
                    c ? (c = [...c.split(","), ...d], _.nb(c), b.eid = c.join(",")) : b.eid = d.join(",")
                }
            }
            yn && (b.jc = yn);
            (c = Ud.jerUserAgent) && (b.useragent = c)
        });
        xn.G(!0);
        "complete" == Kg.document.readyState ? Kg.google_measure_js_timing || Yg(zn) : zn.j && _.Q(Kg, "load", () => {
            Kg.google_measure_js_timing || Yg(zn)
        });
        const a = Td.currentScript;
        yn = a ? a.dataset.jc : ""
    })();
    let An = navigator;
    var Bn = () => {
            try {
                return An.javaEnabled()
            } catch (a) {
                return !1
            }
        },
        Cn = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Dn = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Cn(a.toLowerCase())
        };
    const En = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        Fn = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
        Gn = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    _.Hn = function(a, b) {
        if (!(window && Math.random && navigator)) return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId()) return c.getOseId()
            } catch (d) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            let d;
            !0 === c ? d = 2 : !1 !== c && (d = Ie([0], a), null == d && ((d = Ie([2], b)) || (d = 3)));
            if (!d) return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };
    const In = new bh(1, _.jg());
    var Jn = () => {
        const a = _.jg();
        a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || Yg(In))
    };
    (() => {
        const a = _.jg();
        a && a.document && ("complete" == a.document.readyState ? Jn() : In.j && _.Q(a, "load", () => {
            Jn()
        }))
    })();
    _.A();
    _.Kn = ["auto", "inherit", "100%"];
    const Vn = _.Kn.concat(["none"]),
        Wn = (a, b, c, d, e = 10, f = 10) => {
            b = b.styleSheets;
            if (!b) return !1;
            const g = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            e = -1 == e ? Infinity : e;
            f = -1 == f ? Infinity : f;
            for (let N = 0; N < Math.min(b.length, e); ++N) {
                let L;
                try {
                    var h = b[N],
                        k = null;
                    try {
                        k = h.cssRules || h.rules
                    } catch (aa) {
                        if (15 == aa.code) throw aa.styleSheet = h, aa;
                    }
                    L = k
                } catch (aa) {
                    continue
                }
                if (L && 0 < L.length)
                    for (k = 0; k < Math.min(L.length, f); ++k) {
                        var l = L[k],
                            n;
                        if (n = 1 == l.type) {
                            n = l;
                            var u = c;
                            n = g.call(a, n.selectorText) && u(n)
                        }
                        if (!n && (n = d && 4 == l.type)) a: {
                            n = a;u = g;
                            var y = c,
                                I = f;
                            for (let aa = 0; aa < Math.min(l.cssRules.length, I); aa++) {
                                var x = l.cssRules[aa],
                                    D = y;
                                if (u.call(n, x.selectorText) && D(x)) {
                                    n = !0;
                                    break a
                                }
                            }
                            n = !1
                        }
                        if (n) return !0
                    }
            }
            return !1
        };
    _.Yn = (a, b, c, d = 100, e = 10, f = 10) => {
        if (!a) return !0;
        let g = !0;
        _.$e(a, h => g = _.Xn(h, b, c, e, f), d);
        return g
    };
    _.Xn = (a, b, c, d, e) => {
        const f = a.style;
        return f && f.height && !_.eb(_.Kn, f.height) || f && f.maxHeight && !_.eb(Vn, f.maxHeight) || Wn(a, b.document, g => {
            const h = g.style.height;
            g = g.style["max-height"];
            return h && !_.eb(_.Kn, h) || g && !_.eb(Vn, g)
        }, c, d, e) ? !1 : !0
    };
    var Zn = (a = window) => a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null,
        $n = (a, b = window) => {
            const c = Zn(b);
            if (!c) return null;
            let d = null;
            try {
                "afma-gpt-sdk-a" == c ? d = b._gmptnl.pm("GAM=", a) || "5" : (d = b.__gmptnl_n || "5", b.webkit.messageHandlers._gmptnl.postMessage("GAM="))
            } catch (e) {
                return "3"
            }
            return "string" === typeof d ? d : "3"
        };
    _.ao = function(a) {
        -1 == a.j && (a.j = Ya(a.l, (b, c, d) => c ? b + 2 ** d : b));
        return a.j
    };
    _.bo = class {
        constructor() {
            this.l = [];
            this.j = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && 0 === a % 1 && this.l[a] != b && (this.l[a] = b, this.j = -1)
        }
        get(a) {
            return !!this.l[a]
        }
    };
    var co = class {
        constructor() {
            this.j = () => {}
        }
    };
    Ia(co);
    const eo = () => {
        var a = fn.v();
        co.v().j(a)
    };
    var fo = () => {
        var a = _.p.ggeac || (_.p.ggeac = {});
        eh(_.fh.v(), a);
        var b = _.q.v();
        b.j = Vf(Qf, a);
        b.o = Vf(Rf, a);
        b.m = Vf(Sf, a);
        b.l = Vf(Tf, a);
        co.v().j = Vf(Uf, a)
    };
    var ho = function(a) {
            if (!a.o && !a.A && 1 != a.j) {
                {
                    a.m.cookie = "GoogleAdServingTest=Good";
                    const d = "Good" === go(a, "GoogleAdServingTest=");
                    if (d) {
                        var b = a.m;
                        var c = new Date;
                        c.setTime((new Date).valueOf() + -1);
                        b.cookie = "GoogleAdServingTest=; " + `expires=${c.toGMTString()}`
                    }
                    b = d
                }
                a.B = b;
                a.A = !0
            }
        },
        io = function(a, b) {
            a.j = b;
            ho(a)
        },
        go = function(a, b) {
            a = a.m.cookie;
            var c = a.indexOf(b);
            if (-1 === c) return "";
            b = c + b.length;
            c = a.indexOf(";", b); - 1 == c && (c = a.length);
            return a.substring(b, c)
        };
    var jo = class {
        constructor(a = 0, b = document) {
            this.m = b;
            this.j = a;
            this.o = go(this, "__gads=");
            this.B = !1;
            this.l = null;
            this.A = !1;
            ho(this)
        }
    };
    var ko = zb(function() {
            return !(Tc || Uc || Sc) && (id || _.Oc || Nc && _.gd(11))
        }),
        lo = function(a, b, c, d = "", e) {
            const f = a.createElement("link");
            try {
                f.rel = c, f.href = -1 != c.toLowerCase().indexOf("stylesheet") ? b.Qa ? b.Qa : _.Tb(b).toString() : b instanceof Qb ? b.Qa ? b.Qa : _.Tb(b).toString() : b instanceof _.hc ? _.ic(b) : _.ic(_.kc(b))
            } catch (g) {
                return null
            }
            d && "preload" == c && (f.as = d);
            e && f.setAttribute("nonce", e);
            a = a.getElementsByTagName("head")[0];
            if (!a) return null;
            try {
                a.appendChild(f)
            } catch (g) {}
            return f
        };
    const mo = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        no = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;
    let oo = _.p;
    const qo = a => {
        a = "https://" + `adservice${a}/adsid/integrator.${"js"}`;
        const b = [`domain=${encodeURIComponent(_.p.location.hostname)}`];
        po[3] >= _.A() && b.push(`adsid=${encodeURIComponent(po[1])}`);
        return a + "?" + b.join("&")
    };
    let po, ro;
    const so = () => {
            oo = _.p;
            po = oo.googleToken = oo.googleToken || {};
            var a = _.A();
            po[1] && po[3] > a && 0 < po[2] || (po[1] = "", po[2] = -1, po[3] = -1, po[4] = "", po[6] = "");
            ro = oo.googleIMState = oo.googleIMState || {};
            a = ro[1];
            mo.test(a) && !no.test(a) || (ro[1] = ".google.com");
            _.v(ro[5]) || (ro[5] = []);
            "boolean" !== typeof ro[6] && (ro[6] = !1);
            _.v(ro[7]) || (ro[7] = []);
            "number" !== typeof ro[8] && (ro[8] = 0)
        },
        to = {
            jb: () => 0 < ro[8],
            qc: () => {
                ro[8]++
            },
            rc: () => {
                0 < ro[8] && ro[8]--
            },
            tc: () => {
                ro[8] = 0
            },
            Md: () => !1,
            wb: () => ro[5],
            ub: a => {
                try {
                    a()
                } catch (b) {
                    _.p.setTimeout(() => {
                        throw b;
                    }, 0)
                }
            },
            Fb: () => {
                if (!to.jb()) {
                    var a = _.p.document,
                        b = e => {
                            e = qo(e);
                            a: {
                                try {
                                    var f = Ga();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            lo(a, e, "preload", "script", f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = () => _.p.processGoogleToken({}, 2);
                            e = te(e);
                            _.ka(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), to.qc()
                            } catch (g) {}
                        },
                        c = ro[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    var d = {
                        ["newToken"]: "FBT"
                    };
                    _.p.setTimeout(() => _.p.processGoogleToken(d, 1), 1E3)
                }
            }
        },
        uo = a => {
            so();
            const b = oo.googleToken[5] || 0;
            a && (0 != b || po[3] >= _.A() ? to.ub(a) : (to.wb().push(a), to.Fb()));
            po[3] >= _.A() && po[2] >= _.A() || to.Fb()
        },
        wo = a => {
            _.p.processGoogleToken = _.p.processGoogleToken || ((b, c) => vo(b, c));
            uo(a)
        },
        vo = (a = {}, b = 0) => {
            var c = a.newToken || "",
                d = "NT" == c,
                e = parseInt(a.freshLifetimeSecs || "", 10),
                f = parseInt(a.validLifetimeSecs || "", 10);
            const g = a["1p_jar"] || "";
            a = a.pucrd || "";
            so();
            1 == b ? to.tc() : to.rc();
            var h = oo.googleToken = oo.googleToken || {},
                k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
            d = d && !to.jb() && (!(po[3] >= _.A()) || "NT" == po[1]);
            var l = !(po[3] >= _.A()) && 0 != b;
            if (k || d || l) d = _.A(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && _.jf(_.p, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" + `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, so();
            if (k || !to.jb()) {
                b = to.wb();
                for (c = 0; c < b.length; c++) to.ub(b[c]);
                b.length = 0
            }
        };
    var zo, yo;
    _.xo = function(a) {
        try {
            if (!a.localStorage) return !1;
            a.localStorage.setItem("__storage_test__", "__storage_test__");
            const b = a.localStorage.getItem("__storage_test__");
            a.localStorage.removeItem("__storage_test__");
            return "__storage_test__" == b
        } catch (b) {
            return !1
        }
    };
    zo = function() {
        var a = _.q.v().j(166, !1),
            b = window;
        try {
            if (!a || !_.xo(b) || !b.localStorage) return null;
            const c = b.localStorage.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            return !_.v(d) || _.$a(d, e => !Number.isInteger(e)) ? (b.localStorage.removeItem("__lsv__"), []) : yo(d)
        } catch (c) {
            return null
        }
    };
    yo = function(a = []) {
        const b = Date.now();
        return _.E(a, c => 6048E5 > b - c)
    };
    var Ao = () => {
        var a = window;
        const b = a.google_ltobserver;
        b && (b.disconnect(), delete a.google_ltobserver);
        a.google_lt_queue && delete a.google_lt_queue
    };
    var Bo = class {
        constructor(a) {
            this.j = null;
            this.l = 0;
            this.m = a
        }
        getOseId() {
            this.l || (this.l = _.Hn(0, _.R.v()[7]));
            return this.l
        }
    };
    var Co = function(a, b, c, d) {
            const e = [],
                f = b.j;
            _.P(d, (g, h) => {
                if (g) {
                    g = {
                        Wa: g
                    };
                    var k = f[h],
                        l = [];
                    a.forEach((n, u) => {
                        (n = c[_.S(n)]) && n.j[h] && (l[u] = n.j[h])
                    });
                    if (l.length || k) l.length && (g.Ac = l), k && (g.Eb = k), e.push(g)
                }
            });
            return e
        },
        ai = function(a) {
            return a.j.page_url
        },
        Do = function(a, b, c, d = !0) {
            if (!(b && b in a.l)) return !1;
            if (d || !a.j[b]) a.j[b] = c || "";
            return !0
        },
        Eo = function(a, b) {
            _.P(b.j, function(c, d) {
                this.j[d] || (this.j[d] = c)
            }, a)
        },
        Go = function(a) {
            const b = {};
            _.P(a.j, (c, d) => {
                d in a.l && (b[a.l[d]] = c)
            });
            return new Fo(a.l, b)
        },
        Ho = function(a) {
            const b = [];
            _.P(a.j, (c, d) => {
                d in a.l && b.push({
                    Wa: a.l[d],
                    Eb: c
                })
            });
            return b
        };
    var Fo = class {
        constructor(a = {}, b = {}) {
            this.l = a;
            this.j = b
        }
    };
    var Ei, Fi, Jo, Io, Ko, Lo, Mo, No, Oo, Po, Qo, Ro, To, Uo;
    Ei = function(a) {
        a = Io(a);
        a = _.F(a, b => b.C);
        _.nb(a);
        return a
    };
    Fi = function(a) {
        let b = 0;
        _.P(a.j, () => {
            b++
        });
        return b
    };
    Jo = function(a, b) {
        const c = _.S(b);
        a.j[c] || (a.j[c] = b)
    };
    Io = function(a) {
        const b = [];
        _.P(a.j, c => {
            b.push(c)
        });
        return b
    };
    Ko = function(a) {
        return _.E(Io(a), b => !b.ra)
    };
    Lo = function(a, b) {
        _.C(b, c => {
            _.S(c) in a.j && Pm(c)
        })
    };
    Mo = function(a, b) {
        return !a.I[_.S(b)] && (!_.q.v().j(150, !1) || !_.Rm(b))
    };
    No = function(a, b, c) {
        return _.q.v().j(130, !1) ? _.J(c, 6) || b.W ? null : _.X(b) : a.F[_.S(b)] || null
    };
    Oo = function(a, b, c, d) {
        const e = ji(c);
        if (!e) return e;
        const f = c === _.X(d, b),
            g = zb(() => f ? _.Ym(d, b) || {} : _.Fe(c, window) || {}),
            h = _.Em(d)[0];
        let k = !1;
        _.v(h) && (k = a.o ? f : 0 == e.x && "center" == g()["text-align"]);
        k && (e.x += Math.round(Math.max(0, (f ? c.clientWidth : c.parentElement.clientWidth) - h[0]) / 2));
        f && (e.y += Math.round(Math.min(parseInt(g()["padding-top"], 10) || 0, c.clientHeight)), k || (a = c.clientWidth, e.x += Math.round(Math.min(parseInt(g()["padding-left"], 10) || 0, a))));
        return e
    };
    Po = function(a, b, c) {
        var d = _.Wm(b, c) || _.X(b, c);
        if (!d) return null;
        c = Oo(a, c, d, b);
        if (!c) return null;
        if ((d = c && _.jh(d)) && (0 <= c.x || 0 <= c.y)) a.D[_.S(b)] = c;
        else if (!d) return new _.M(-12245933, -12245933);
        return c
    };
    Qo = function(a) {
        return _.F(a, b => _.hi(b)).join()
    };
    Ro = function(a, b) {
        _.C(b, c => {
            if (a.j[_.S(c)]) {
                var d = a.j;
                c = _.S(c);
                c in d && delete d[c]
            }
        })
    };
    _.So = function(a, b, c, d) {
        var e = b.document;
        a = a.D[_.S(d)] || Po(a, d, e);
        if (!a || -12245933 == a.y) return !0;
        try {
            const f = ih(b.top.document, b.top).y,
                g = _.Zk(!0, b),
                h = f + g.height * (c + 1);
            return a.y >= f && a.y <= h
        } catch (f) {
            return !0
        }
    };
    To = function(a, b) {
        const c = [];
        for (let d = b.length - 1; 0 <= d; d--) {
            const e = b[d];
            if (_.X(e) && _.So(a, _.p, 2, e)) break;
            else c.unshift(e)
        }
        return c
    };
    Uo = function(a, b) {
        let c = null;
        if (_.v(_.Em(a)[0])) {
            const [d, e] = _.Em(a)[0];
            c = {
                width: d,
                height: e
            }
        }
        a = _.Wm(a, b) || _.X(a, b);
        return cf(a, {
            zc: c,
            Pb: !1
        })
    };
    var Vo = class {
        constructor(a) {
            this.j = {};
            this.K = a;
            this.l = new Fo(a);
            this.m = {};
            this.F = {};
            this.D = {};
            this.I = {};
            this.J = "";
            this.o = _.R.v()[36];
            this.B = -1;
            this.G = 0;
            this.A = !1;
            this.C = {}
        }
        toString() {
            let a = "[AdData:";
            const b = [];
            _.P(this.j, c => {
                b.push(c.toString())
            });
            a += b.join();
            return a + "]"
        }
    };
    let Wo = 0;
    _.Xo = function(a, b) {
        b = _.S(b);
        a.G[b] || (a.G[b] = window == window.top ? (++Wo).toString(36) : _.Ec());
        return a.G[b]
    };
    var Yo = class {
        constructor(a, b) {
            this.bb = a;
            this.l = b;
            this.j = [];
            this.X = !1;
            this.K = "";
            this.D = NaN;
            this.T = "json_html";
            this.B = "fif";
            this.A = 1;
            this.N = !1;
            this.J = "";
            this.M = [];
            this.persistentRoadblocksOnly = !1;
            this.videoPodNumber = this.videoPodPosition = NaN;
            this.P = this.R = "";
            this.U = !1;
            this.videoStreamCorrelator = NaN;
            this.C = 0;
            this.V = this.O = this.I = "";
            this.F = [];
            this.L = this.o = 0;
            this.m = [];
            this.G = {};
            this.W = {}
        }
    };
    var Zo;
    Zo = a => {
        a && (a.innerHTML = "", a.removeAttribute("data-google-query-id"))
    };
    _.$o = function(a, b, c, d, e) {
        a = _.re(new _.he(a), "DIV");
        a.id = c;
        a.name = c;
        c = a.style;
        c.border = "0pt none";
        d && (c.margin = "auto", c.textAlign = "center");
        e && (d = _.v(e), c.width = d ? e[0] + "px" : "100%", c.height = d ? e[1] + "px" : "0%");
        b.appendChild(a);
        return a
    };
    var ap = a => {
        const b = _.Wf(8, -1);
        return -1 != b ? b : null != _.H(a, 1) ? null != _.H(a, 3) && 0 != (0, _.Ye)() ? _.H(a, 1) * _.Ad(a, 3) : _.H(a, 1) : null
    };
    _.bp = class extends _.$k {
        constructor(a, b) {
            super();
            this.slot = a;
            this.G = b;
            this.B = []
        }
        l() {
            super.l();
            _.C(this.B, a => a());
            this.B = []
        }
    };
    _.bp.prototype.m = _.m(16);
    _.bp.prototype.j = _.m(10);
    _.cp = class extends _.bp {
        constructor(a, b) {
            super(a, b);
            this.A = "";
            this.o = null
        }
        l() {
            super.l();
            if (this.o) try {
                this.o()
            } catch (a) {
                _.Ji(493, a)
            }
        }
    };
    _.cp.prototype.m = _.m(15);
    _.cp.prototype.j = _.m(9);
    _.dp = class extends _.bp {
        constructor(a, b) {
            super(a, b);
            this.A = this.D = !1;
            this.C = this.o = null
        }
    };
    _.dp.prototype.m = _.m(14);
    _.dp.prototype.j = _.m(8);
    var ep = class {
        constructor(a) {
            this.id = a
        }
    };
    _.fp = new ep(1);
    var hp = function(a) {
        var b = _.gp.v(),
            {
                id: c
            } = _.fp;
        a = _.T(614, a, (d, e) => {
            _.Ki(d, e, !0)
        });
        b.j[c] ? b.j[c].push(a) : b.j[c] = [a]
    };
    _.gp = class {
        constructor() {
            this.j = {}
        }
    };
    Ia(_.gp);
    _.ip = class extends _.bp {
        constructor(a, b) {
            super(a, b);
            this.o = null
        }
        l() {
            super.l();
            this.o && this.o()
        }
    };
    _.ip.prototype.m = _.m(13);
    _.jp = class extends _.bp {
        constructor(a, b) {
            super(a, b);
            this.o = !1
        }
    };
    _.jp.prototype.m = _.m(12);
    _.jp.prototype.j = _.m(7);
    _.kp = a => {
        const b = "performance" in window && "now" in performance ? performance.now.bind(performance) : _.A;
        for (a = b() + a; b() < a;);
        b()
    };
    const lp = (a, b) => {
            b >= a.length || (_.kp(a[b]), window.requestAnimationFrame(() => lp(a, ++b)))
        },
        mp = a => {
            window.requestAnimationFrame(() => lp(a, 0))
        };
    var np = () => {
        if (_.La(window.requestAnimationFrame)) {
            var a = _.q.v().l(2, []);
            a.length && (a = a.map(b => _.Oe(b, 0)), mp(a))
        }
    };
    _.op = class extends _.bp {
        constructor(a, b) {
            super(a, b)
        }
    };
    _.op.prototype.j = _.m(6);
    _.pp = class extends _.bp {
        constructor(a, b) {
            super(a, b);
            this.A = new _.he;
            this.o = null
        }
    };
    _.pp.prototype.j = _.m(5);
    _.qp = class extends _.bp {
        constructor(a, b) {
            super(a, b);
            this.A = new _.he;
            this.o = null
        }
        l() {
            super.l();
            this.o && (this.o.disconnect(), this.o = null)
        }
    };
    _.qp.prototype.j = _.m(4);
    _.rp = function(a) {
        5 != a.o && (a.o = 5, a.A && (a.A(), a.A = null), a.slot.J && _.xl(a.slot.J), _.pe(_.X(a.slot, _.p.document)))
    };
    _.sp = class extends _.bp {
        constructor(a, b) {
            super(a, b);
            this.o = 1;
            this.A = null;
            this.D = this.C = !1
        }
        l() {
            super.l();
            _.rp(this)
        }
    };
    _.sp.prototype.m = _.m(11);
    var vp;
    const tp = {
        [1]: {
            lb: "modern_rendering"
        },
        [2]: {
            lb: "modern_floating",
            vb: [1]
        },
        [3]: {
            lb: "modern_vignette",
            vb: [1]
        }
    };
    _.up = function(a, b) {
        a.l[b] || (a.l[b] = new _.Pk);
        return a.l[b]
    };
    vp = function(a, b) {
        const c = `_gpt_js_load_${b}_`;
        let d = _.T(340, e => {
            if (a.j[b] && _.La(e)) {
                var {
                    vb: f = []
                } = a.j[b];
                f = _.F(f, g => _.up(a, g).j);
                Qk(f).then(() => {
                    e.call(_.p, _)
                })
            }
        });
        Object.defineProperty(_.xa(), c, {
            value: e => {
                if (d) {
                    const f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    _.wp = class {
        constructor() {
            this.l = {};
            this.j = tp
        }
        load(a) {
            const b = _.up(this, a);
            var {
                lb: c
            } = this.j[a];
            var d = _.R.v()[174];
            var e = _.Wf(25);
            c = `${"https"}://${d}/${"gpt/pubads_impl_"}${c}_${"2019100301"}.js`;
            e && (c += `?${e}`);
            e = c;
            vp(this, a);
            _.Ee(document, e);
            return b.j
        }
    };
    Ia(_.wp);
    _.wp.prototype.load = og(_.wp.prototype.load);
    const xp = [{
        ta: _.op,
        oa: function() {
            return 0 < (_.Wf(16) || _.Wf(17) || _.Wf(18)) || _.q.v().j(169, !1)
        }
    }, {
        ta: _.pp,
        oa: () => _.q.v().j(20, !1)
    }, {
        ta: _.qp,
        oa: () => !0
    }, {
        ta: _.dp,
        oa: (a, b) => _.vi(b) && !_.Fm(a)
    }, {
        ta: _.cp,
        oa: () => !_.q.v().j(111, !1)
    }, {
        ta: _.sp,
        oa: a => _.Hm(a)
    }, {
        kb: 3,
        oa: (a, b) => 4 == a.ma() && !!_.Fd(b, _.Pd, 48)
    }, {
        kb: 2,
        oa: (a, b) => {
            a = a.ma();
            if (a = (1 == a || 2 == a) && _.w(_.Fd(b, _.Nd, 39))) b = _.Fd(b, _.Nd, 39), b = _.J(b, 12), a = null == b ? !1 : b;
            return a
        }
    }, {
        ta: _.jp,
        oa: () => _.q.v().j(96, !1)
    }, {
        ta: _.ip,
        oa: (a, b) => !(!_.Wf(19) || !_.J(b, 9) || _.J(b, 40))
    }];
    _.yp = class {
        constructor() {
            this.j = {};
            this.l = xp
        }
    };
    Ia(_.yp);
    var zp = class {
        constructor(a = document) {
            var b = this.j = {};
            a = a.URL.split("?");
            a = a[a.length - 1].split("&");
            for (const e of a)
                if (a = e.split("="), a[0]) {
                    const f = a[0].toLowerCase();
                    try {
                        if (1 < a.length) {
                            var c = a[1];
                            var d = window.decodeURIComponent ? decodeURIComponent(c.replace(fi, " ")) : unescape(c)
                        } else d = "";
                        b[f] = d
                    } catch (g) {}
                }
        }
    };
    var Bp, Ep, Hp, Ip;
    _.Ap = function(a) {
        return !!_.J(a, 6) || _.q.v().j(143, !1)
    };
    Bp = function(a) {
        var b = _.Wf(1) || (li() ? 8192 : 4096);
        if (_.q.v().j(168, !1) || a.length <= b) return a;
        var c = _.q.v().j(164, !1) && /&supporting_urls=/.test(a); {
            var d = a;
            const e = b - 8;
            d.length > b && (b = c ? -1 : d.lastIndexOf("&", e), -1 !== b ? d = d.substring(0, b) : (d = d.substring(0, e), d = d.replace(/%\w?$/, ""), c && (d = d.replace(/&[^=]*=?$/, ""))), d += "&trunc=1");
            c = d
        }
        Zg(_.Zh.v(), (9).toString(), 9, a.length - c.length + 8);
        return c
    };
    _.Dp = function(a, b, c, d, e) {
        Mo(a.j, c) && (d && Cp(a, [c], e), d || !_.Vm(c, b)) && (a = c.pa, null == a && (a = _.J(e, 11)), a && (b = _.X(c, b)) && _.Kf(b, !1))
    };
    Ep = function(a) {
        a.length && (a = a[0], _.ah(_.Zh.v(), "3", a.A))
    };
    Hp = function() {
        var a = Fp(Gp());
        return {
            cmsid: a.L,
            vid: a.N
        }
    };
    Ip = function(a, b) {
        if (!b.length) return [];
        const c = _.jn.v().A,
            d = b[0].C;
        a = _.E(Io(a.j), e => e.C == d && !!e.fa && !_.eb(b, e));
        a = _.F(a, e => e.fa);
        return jb(c, a)
    };
    _.Jp = class {
        constructor(a, b, c) {
            this.j = a;
            this.m = b;
            this.M = c;
            this.P = _.bn.v();
            this.A = {};
            this.I = og(this.I);
            this.G = _.T(291, this.G);
            this.W = this.O = this.F = !1;
            this.L = this.N = "";
            this.videoStreamCorrelator = NaN;
            this.C = 0;
            this.U = new Bo(this.D);
            this.da = 0
        }
        I(a, b = !1) {
            return new _.p.IntersectionObserver((c, d) => this.G(c, d, b), {
                rootMargin: a
            })
        }
        G(a, b, c = !1) {
            _.C(a, d => {
                if (c || !(0 >= d.intersectionRatio)) {
                    b.unobserve(d.target);
                    d = d.target.id;
                    var e = this.A[d];
                    e && (e.call(this), delete this.A[d])
                }
            })
        }
    };
    _.Jp.prototype.X = _.m(17);
    var Kp = class extends Ql {
        constructor(a, b) {
            super(a);
            this.set = U(576, (c, d) => {
                a.set(c, d);
                return this
            });
            this.get = U(577, c => a.get(c));
            this.getAttributeKeys = U(578, () => ub(a.K));
            this.display = U(558, (c, d, e = "", f = "") => a.display(c, d, e, f));
            this.setClearUnfilledSlots = U(68, c => {
                "boolean" === typeof c && (a.B = c)
            });
            this.notifyUnfilledSlots = U(69, c => {
                if (a.L) Lp(a, Mp(a, c));
                else if (a.B) {
                    {
                        c = Mp(a, c);
                        const e = Np();
                        if (e.o) {
                            var d = en.v().j;
                            Op(e, c, d);
                            for (d = 0; d < c.length; ++d) {
                                const f = new _.nm(c[d].m(), !0, e.j());
                                sm(e, "slotRenderEnded", f)
                            }
                        } else a.log.error(Lj("PubAds", "clear"))
                    }
                }
            });
            this.isRoadblockingSupported = U(111, () => Pp(a));
            this.refreshAllSlots = U(60, () => {
                a.L && Lp(a, null)
            });
            this.setVideoSession = U(61, (c, d, e, f) => {
                a.T = c;
                a.P = d;
                a.R = e;
                a.C = f
            });
            this.getDisplayAdsCorrelator = U(62, (c = "") => Qp(a, c));
            this.getVideoStreamCorrelator = U(63, () => {
                if (Np().l) {
                    var c = Fp(Gp()).videoStreamCorrelator;
                    c = isNaN(c) ? 0 : c
                } else c = 0;
                return c
            });
            this.isSlotAPersistentRoadblock = U(64, c => {
                c = Fh(c, b);
                return !!c && Rp(a, c)
            });
            this.onImplementationLoaded = U(65, () => {
                a.log.info(Qj("GPT CompanionAds"), a);
                a.G = !0
            });
            this.fillSlot = U(66, (c, d, e, f) => {
                c = Fh(c, b);
                var g;
                if (g = !!c) c && vn(_.jn.v(), c) && "string" === typeof d && 0 < d.length ? (a.F[c.l.l] = d, null != e && null != f && (a.l[c.l.l] = [e, f]), g = Sp(a, c)) : g = !1;
                return g
            });
            this.slotRenderEnded = U(67, (c, d, e) => {
                c = Fh(c, b);
                var f;
                if (f = c) c = new _.nm(c.m(), !1, a.j()), null != d && null != e && _.mm(c, [d, e]), sm(a, "slotRenderEnded", c), f = void 0;
                return f
            });
            this.enableSyncLoading = U(58, () => {
                a.V = !1
            });
            this.setRefreshUnfilledSlots = U(59, c => {
                "boolean" === typeof c && (a.L = c)
            })
        }
    };
    var Tp = class extends Eh {
        constructor() {
            super();
            const a = dj.v();
            this.getAllEvents = U(563, () => Ti ? a.j.slice() : []);
            this.getEventsByService = U(564, b => Ti ? aj(a, b).slice() : []);
            this.getEventsBySlot = U(565, b => Ti ? bj(a, b).slice() : []);
            this.getEventsByLevel = U(566, b => Ti ? cj(a, b).slice() : [])
        }
    };
    var Up = class extends Eh {
        constructor(a) {
            super();
            this.set = U(83, (b, c) => {
                a.set(b, c);
                return this
            });
            this.get = U(84, b => a.get(b));
            this.setClickUrl = U(79, b => {
                Vl(a.j, b);
                return this
            });
            this.setTargeting = U(81, (b, c) => {
                Wl(a.j, b, c);
                return this
            });
            this.updateTargetingFromMap = U(85, b => {
                Vp(a, b);
                return this
            });
            this.display = U(78, () => {
                var b = en.v().j;
                b = zi(b);
                a.display(b)
            });
            this.setTagForChildDirectedTreatment = U(80, b => {
                if (0 === b || 1 === b) a.j.Hb = b;
                return this
            });
            this.setForceSafeFrame = U(567, b => {
                Yl(a.j, b);
                return this
            });
            this.setTagForUnderAgeOfConsent = U(448, b => {
                if (0 === b || 1 === b) a.j.rb = b;
                return this
            })
        }
    };
    const Wp = (a, b) => {
            a = _.F(a, c => Fh(c, b));
            return _.E(a, c => !!c)
        },
        Xp = a => {
            const b = fn.v(),
                c = [];
            for (const d of a) b.l = d, a = _.fh.v().j(9), 1 === a.length && (c.push(d), c.push(`${d}-${a[0]}`));
            return c
        },
        Yp = Ab(() => bf("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")),
        Zp = () => {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: () => {
                    Yp();
                    return !0
                },
                set: () => {
                    Yp()
                },
                configurable: !0
            })
        };
    var $p = class extends Ql {
        constructor(a, b, c) {
            super(a);
            const d = dj.v();
            let e = !1;
            this.setTargeting = U(1, (f, g) => {
                var h = null;
                "string" === typeof g ? h = [g] : _.v(g) ? h = g : _.Ka(g) && (h = _.lb(g));
                const k = "string" === typeof f && !Vb(f);
                h = _.q.v().j(180, !1) ? h : h && xb(h);
                const l = !!h && ab(h, _.Ca);
                if (!k || !l) return d.H(W("PubAdsService.setTargeting", [f, g]), a), this;
                g = db(_.Hd(c, Nh, 2), n => _.H(n, 1) === f);
                if ("gpt-beta" === f) {
                    if (a.o) return d.H(Ek(h.join())), this;
                    if (g) return d.H(Fk(h.join())), this;
                    h = Xp(h)
                }
                g ? Ph(g, h) : (g = Ph(Oh(new Nh, f), h), Kd(c, 2, g, Nh));
                d.info(qk(f, h.join(), a.j()), a);
                return this
            });
            this.clearTargeting = U(2, f => {
                if (void 0 === f) return Yh(c, []), d.info(Ck(a.j()), a), this;
                if ("gpt-beta" === f) return d.H(Gk(f)), this;
                const g = _.Hd(c, Nh, 2),
                    h = _.cb(g, k => _.H(k, 1) === f);
                if (0 > h) return d.H(nk(f, a.j()), a), this;
                _.gb(g, h);
                Yh(c, g);
                d.info(mk(f, a.j()), a);
                return this
            });
            this.getTargeting = U(38, f => {
                if ("string" !== typeof f) return d.H(W("PubAdsService.getTargeting", [f]), a), [];
                const g = db(_.Hd(c, Nh, 2), h => _.H(h, 1) === f);
                return g ? _.H(g, 2).slice() : []
            });
            this.getTargetingKeys = U(39, () => _.F(_.Hd(c, Nh, 2), f => _.H(f, 1)));
            this.setCategoryExclusion = U(3, f => {
                if ("string" !== typeof f || Vb(f)) return d.H(W("PubAdsService.setCategoryExclusion", [f]), a), this;
                _.eb(_.H(c, 3), f) || Dd(c, 3, f);
                d.info(ok(f), a);
                return this
            });
            this.clearCategoryExclusions = U(4, () => {
                _.K(c, 3, []);
                d.info(pk(), a);
                return this
            });
            this.disableInitialLoad = U(5, () => {
                a.o ? d.H(Xj("disableInitialLoad", "pubads"), a) : (_.K(c, 4, !0), e || (e = !0, Zp()))
            });
            this.enableSingleRequest = U(6, () => {
                if (a.o && !_.J(c, 6)) return d.H(Wj("enableSingleRequest"), a), !1;
                d.info(Zj("single request"), a);
                _.K(c, 6, !0);
                return !0
            });
            this.enableAsyncRendering = U(7, () => !0);
            this.enableSyncRendering = U(8, () => {
                bf("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = U(485, f => {
                const g = new _.Qh;
                _.K(g, 1, 800);
                _.Rh(g, 400);
                _.K(g, 3, 3);
                if (_.w(f)) {
                    var h = f.fetchMarginPercent;
                    "number" === typeof h && (0 <= h ? _.K(g, 1, h) : -1 == h && _.K(g, 1, void 0));
                    h = f.renderMarginPercent;
                    "number" === typeof h && (0 <= h ? _.Rh(g, h) : -1 == h && _.K(g, 2, void 0));
                    f = f.mobileScaling;
                    "number" === typeof f && (0 < f ? _.K(g, 3, f) : -1 == f && _.K(g, 3, 1))
                }
                _.Id(c, 5, g)
            });
            this.setCentering = U(9, f => {
                a.log.info(ak("centering", String(f)), a);
                aq(Gp()).o = f
            });
            this.definePassback = U(10, (f, g) => (f = bq(a, f, g)) && f.m());
            this.refresh = U(11, (f, g) => {
                const h = zi(c);
                _.v(f) ? (f = Wp(f, b), cq(a, h, f, g)) : cq(a, h, f, g)
            });
            this.enableVideoAds = U(12, () => {
                a.C = !0;
                dq(a)
            });
            this.setVideoContent = U(13, (f, g) => {
                a.C = !0;
                a.R = f;
                a.P = g;
                dq(a);
                a.K = !0
            });
            this.collapseEmptyDivs = U(14, (f = !1) => {
                _.J(c, 11) ? d.H(kk(), a) : a.o ? d.H(Wj("collapseEmptyDivs"), a) : (f && _.K(c, 10, !0), _.ya("gpt_ced", g => {
                    _.t(g, "sc", f ? "t" : "f");
                    _.t(g, "level", "page");
                    _.r(g)
                }), d.info(jk(String(!!f)), a), _.K(c, 11, !0));
                return !!_.J(c, 11)
            });
            this.clear = U(15, f => {
                _.v(f) && (f = Wp(f, b));
                return eq(a, c, f)
            });
            this.setLocation = U(16, (f, g, h) => {
                if (void 0 !== g) {
                    if ("number" !== typeof f) return d.H(ik("Latitude")), this;
                    if ("number" !== typeof g) return d.H(ik("Longitude")), this;
                    var k = new Sh;
                    f = _.K(k, 1, f);
                    g = _.K(f, 2, g);
                    if (void 0 !== h) {
                        if (isNaN(h)) return d.H(ik("Radius")), this;
                        _.K(g, 3, Math.round(h))
                    }
                    h = Wh[0];
                    c.j || (c.j = {});
                    f = g ? _.ra(g) : g;
                    c.j[9] = g;
                    _.Ed(c, 9, h, f);
                    return this
                }
                if ("string" !== typeof f) return d.H(ik("Address")), this;
                _.Ed(c, 8, Wh[0], f);
                return this
            });
            this.setCookieOptions = U(17, f => {
                fq(a, f);
                return this
            });
            this.setTagForChildDirectedTreatment = U(18, f => {
                0 !== f && 1 !== f ? a.log.H(rk(String(f)), a) : aq(Gp()).B = f;
                return this
            });
            this.clearTagForChildDirectedTreatment = U(19, () => {
                aq(Gp()).B = -1;
                return this
            });
            this.setPublisherProvidedId = U(20, f => {
                a.o ? a.log.H(Yj("setPublisherProvidedId", f), a) : (a.log.info(ak("PPID", f), a), aq(Gp()).J = f);
                return this
            });
            this.set = U(21, (f, g) => {
                var h = "string" === typeof f && !!f.length;
                if (_.q.v().j(213, !1) ? !h || void 0 === Pl()[f] || "string" !== typeof g : !h) return d.H(W("PubAdsService.set", [f, g]), a), this;
                (h = db(_.Hd(c, Nh, 14), k => _.H(k, 1) === f)) ? Ph(h, [g]): (h = Oh(new Nh, f), Dd(h, 2, g), Kd(c, 14, h, Nh));
                a.set(f, g);
                d.info(Gj(f, String(g), a.j()), a);
                return this
            });
            this.get = U(22, f => {
                if (_.q.v().j(213, !1) && "string" !== typeof f) return d.H(W("PubAdsService.get", [f]), a), null;
                var g = db(_.Hd(c, Nh, 14), h => _.H(h, 1) === f);
                return (g = g && _.H(g, 2)) ? g[0] : null
            });
            this.getAttributeKeys = U(23, () => _.F(_.Hd(c, Nh, 14), f => _.H(f, 1)));
            this.display = U(24, (f, g, h = "", k = "") => void a.display(f, g, h, k));
            this.updateCorrelator = U(25, () => {
                bf(Ua("update"));
                a.log.H(Mk(), a);
                a.J = -1;
                gq(a);
                return this
            });
            this.defineOutOfPagePassback = U(35, f => {
                if (f = bq(a, f, [1, 1])) f.j.za = !0;
                return f && f.m()
            });
            this.setForceSafeFrame = U(36, f => {
                if ("boolean" !== typeof f) return d.H(hk(String(f)), a), this;
                _.K(c, 13, f);
                return this
            });
            this.setSafeFrameConfig = U(37, f => {
                if (f && _.w(f)) {
                    if (f = Zl(f)) aq(Gp()).C = f
                } else a.log.error(W("PubAdsService.setSafeFrameConfig", [f]), a);
                return this
            });
            this.setRequestNonPersonalizedAds = U(445, f => {
                if (0 !== f && 1 !== f) a.log.H(Hk(String(f)), a);
                else if (f) {
                    if ((f = ha()) && f.frames && !f.frames.GoogleSetNPA) try {
                        var g = f.document;
                        const h = new _.he(g),
                            k = g.body || g.head && g.head.parentElement;
                        if (k) {
                            const l = _.re(h, "IFRAME");
                            l.name = "GoogleSetNPA";
                            l.id = "GoogleSetNPA";
                            l.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                            k.appendChild(l)
                        }
                    } catch (h) {}
                } else(g = ha().document.getElementById("GoogleSetNPA")) && g.parentNode && g.parentNode.removeChild(g);
                return this
            });
            this.setTagForUnderAgeOfConsent = U(447, (f = 2) => {
                if (2 !== f && 0 !== f && 1 !== f) return d.H(Ik(String(f)), a), this;
                _.K(c, 12, f);
                return this
            });
            this.getCorrelator = U(27, () => hq(a));
            this.getTagSessionCorrelator = U(631, () => Fp(Gp()).aa);
            this.getVideoContent = U(30, () => a.l ? Hp() : null);
            this.getVersion = U(568, () => a.getVersion());
            this.forceExperiment = U(569, f => {
                f = parseInt(f, 10);
                0 < f && _.fh.v().m(f)
            });
            this.setCorrelator = U(28, f => {
                bf(Ua("set"));
                a.log.H(Lk(), a);
                var g = window;
                g && g.top == g || (ri(f) ? (a.J = f, gq(a)) : a.log.H(vk(String(f)), a));
                return this
            });
            this.setKidsFriendlyAds = U(642, f => {
                0 !== f && 1 !== f ? a.log.H(wk(String(f)), a) : aq(Gp()).G = f;
                return this
            });
            this.markAsAmp = U(570, () => void iq(a));
            this.isSRA = U(571, () => !!_.J(c, 6));
            this.setImaContent = U(328, (f, g) => {
                a.K ? (a.C = !0, a.R = f, a.P = g, dq(a), a.K = !0) : (a.C = !0, dq(a), "string" === typeof f && (a.V = f), "string" === typeof g && (a.T = g))
            });
            this.getImaContent = U(329, () => a.K ? a.l ? Hp() : null : a.l ? {
                vid: a.V,
                cmsid: a.T
            } : null);
            this.isInitialLoadDisabled = U(572, () => !!_.J(c, 4));
            this.addSupportingUrl = U(634, f => {
                if ("string" !== typeof f || !f.match(_.ve)[1]) return d.H(W("PubAdsService.addSupportingUrl", [f]), a), this;
                _.eb(_.H(c, 7), f) || Dd(c, 7, f);
                return this
            })
        }
    };
    const jq = (a, b) => {
        a: {
            b = b[0];a = a[0];
            for (var c = ob, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = ob(b.length, a.length)
        }
        return b
    };
    var kq = class {
        constructor() {
            const a = [];
            let b = !1;
            const c = dj.v();
            this.addSize = _.T(88, (d, e) => {
                var f;
                (f = !ym(d) || "fluid" === d) || ((f = ym(e)) || (f = _.v(e) && ab(e, ym)), f = !f);
                if (f) return b = !0, c.H(W("SizeMappingBuilder.addSize", [d, e])), this;
                a.push([d, e]);
                return this
            });
            this.build = _.T(89, () => {
                if (b) return c.H(Ej()), null;
                qb(a, jq);
                return a
            })
        }
    };
    let lq = 0;
    const mq = () => {
        try {
            fo();
            eo();
            const a = _.R.v()[152];
            a && a.length && _.C(a, () => {
                _.fh.v().m(a)
            });
            _.fh.v().j(13);
            _.fh.v().j(3)
        } catch (a) {
            _.Ki(408, a, !0)
        }
    };
    var nq = _.T(297, a => {
            _.C(a.getElementsByTagName("script"), b => {
                const c = b.src;
                !c || -1 == c.indexOf("/tag/js/gpt.js") && -1 == c.indexOf("/tag/js/gpt_mobile.js") || !b.innerHTML || b.googletag_executed || (b.googletag_executed = !0, eval(b.innerHTML))
            })
        }, (a, b) => {
            _.Ji(a, b);
            window.console && window.console.error && window.console.error(b)
        }),
        oq = () => {
            lq = _.Qg();
            mq();
            try {
                _.q.v().j(79, !1) || Ao();
                const a = _.Wf(26);
                for (let b = 0; b < a; ++b) _.xo(window);
                np();
                wa("defineOutOfPageSlot", sn);
                wa("defineSlot", on);
                wa("defineUnit", on);
                wa("destroySlots", qn);
                wa("getWindowsThatCanCommunicateWithHostpageLibrary", mn);
                wa("display", wn);
                fm();
                wa("getEventLog", () => new Tp);
                wa("sizeMapping", _.T(90, () => new kq));
                wa("apiReady", !0);
                _.xa().fifWin && "complete" != document.readyState ? Gh(window, () => {
                    window.setTimeout(() => {
                        Yk()
                    }, 0)
                }) : Yk();
                nq(document);
                Mi()
            } catch (a) {
                _.Ki(106, a)
            }
        };
    _.pq = new _.Mb(_.Kb, "https://www.googletagservices.com/tag/js/vfci/v/2019061304/vfci.html");
    _.qq = class {
        constructor() {
            this.l = null;
            this.j = zo()
        }
    };
    Ia(_.qq);
    var rq = og(a => a && a.src ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2, (a, b) => a + "\x0B" + (b[0] && b[0].src));
    let sq = null;
    const tq = (a, b, c, d = 100) => {
            try {
                var e;
                if (!(e = !b)) {
                    var f;
                    if (!(f = !_.Yn(b, c, !1, d))) {
                        a: {
                            do {
                                const h = _.Fe(b, c);
                                if (h && "fixed" == h.position) {
                                    var g = !1;
                                    break a
                                }
                            } while (b = b.parentElement);g = !0
                        }
                        f = !g
                    }
                    e = f
                }
                e && (a.height = -1)
            } catch (h) {
                a.width = -1, a.height = -1
            }
        },
        uq = (a, b, c = "", d = f => !!f, e = ",") => {
            const f = [];
            let g = !1;
            _.C(a, h => {
                h = b(h);
                const k = d(h);
                g = g || k;
                f.push(String(k ? h : c))
            });
            return g ? f.join(e) : null
        },
        vq = a => {
            const b = Ib(a.B);
            a = _.lb(a.Z);
            a.length && null == b.excl_cat && (b.excl_cat = a);
            return b
        },
        wq = (a, b) => {
            const c = {};
            _.P(a, (d, e) => {
                if (b[e]) {
                    const f = _.E(b[e], g => -1 < d.indexOf(g));
                    f.length && (c[e] = f)
                }
            });
            return c
        },
        xq = (a, b = () => !0) => {
            a = vq(a);
            const c = [];
            _.P(a, (d, e) => {
                d = _.E(d, f => b(f, e));
                if (d.length) {
                    d = _.F(d, encodeURIComponent);
                    const f = encodeURIComponent(e);
                    c.push(`${f}=${d.join()}`)
                }
            });
            return c
        },
        yq = a => {
            let b = !1;
            const c = (e, f) => `${encodeURIComponent(e)}=${encodeURIComponent(f.join())}`,
                d = _.F(_.Hd(a, Nh, 2), e => {
                    const f = _.H(e, 1);
                    b = "excl_cat" === f;
                    return c(f, _.H(e, 2))
                });
            a = _.H(a, 3);
            !b && a.length && d.push(c("excl_cat", a));
            return d
        };
    var zq = function(a) {
            a = Ae(a.top) ? a.top : a;
            return _.w(a.AMP) && !!_.Le(a.AMP, (b, c) => !/^inabox/i.test(c))
        },
        Yq = function(a, b, c = window) {
            const d = c.document;
            Sm(b[0], fg(c));
            Y(a, "gdfp_req", 1, {
                $: !1
            });
            Y(a, "pvsid", a.j.D);
            Y(a, "correlator", a.j.K);
            Y(a, "output", a.j.T, {
                $: !1
            });
            Y(a, "callback", a.j.J, {
                $: !1
            });
            Y(a, "impl", a.j.B, {
                $: !1
            });
            a.o && 1 == a.o.j || (Y(a, "adsid", a.j.I), Y(a, "pucrd", a.j.V));
            Y(a, "jar", a.j.O);
            a.j.persistentRoadblocksOnly && Y(a, "per_only", 1);
            a.j.U && (Y(a, "hxva", 1, {
                $: !1
            }), Y(a, "cmsid", a.j.P), Y(a, "vid", a.j.R));
            isNaN(a.j.videoPodNumber) || Y(a, "pod", a.j.videoPodNumber, {
                $: !1
            });
            isNaN(a.j.videoPodPosition) || Y(a, "ppos", a.j.videoPodPosition, {
                $: !1
            });
            isNaN(a.j.videoStreamCorrelator) || Y(a, "scor", a.j.videoStreamCorrelator, {
                $: !1
            });
            Aq(a);
            Y(a, "vrg", "2019100301");
            a.o && 0 !== a.o.j && Y(a, "co", a.o.j, {
                ia: !0
            });
            Bq(a);
            1 === a.l.G && Y(a, "kfa", 1);
            Cq(a, b[0].C);
            Dq(a);
            if (_.q.v().j(178, !1)) 1 == a.j.o && Eq(a, c, !1);
            else {
                var e = ab(b, h => 0 < h.F && !dm(h.ma()));
                Eq(a, c, e)
            }
            Y(a, "sc", _.R.v()[6] ? 1 : 0, {
                ia: !0
            });
            window.postMessage && Y(a, "sfv", _.im());
            Y(a, "ecs", a.j.bb);
            a.A || (Fq(a, b[0]), Gq(a, b[0]));
            a.C ? (Hq(a, b, d), Iq(a), Jq(a, b)) : (Kq(a, b[0], d), Iq(a), Lq(a, b[0]));
            Mq(a, b);
            Nq(a, c);
            null != (a.Pa.j.google_preview || null) && Y(a, "gct", a.Pa.j.google_preview || null);
            if (a.l.A) {
                Y(a, "is_amp", "1");
                Y(a, "amp_v", Zf());
                Y(a, "act", $f());
                dg && !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(c.location.href) && Y(a, "ati", 1);
                (e = eg(c)) && Y(a, "apn", e.substr(0, 10));
                try {
                    var f = JSON.parse(c.context.cachedFrameName_);
                    f.attributes && f.attributes.useSameDomainRenderingUntilDeprecated && Y(a, "asd", 1)
                } catch (h) {}
            }
            Oq(c) && Y(a, "abxe", 1);
            (f = _.q.v().m(10, "")) && Y(a, "expflags", f);
            Pq(a, b, c);
            f = {};
            gg(f);
            Qq(a, f);
            Rq(a);
            f = Y;
            try {
                var g = kg()
            } catch (h) {
                g = "0"
            }
            f(a, "flash", g, {
                $: !1,
                ia: !0
            });
            Sq(a, b, c);
            _.q.v().j(2, !1) || Tq(a, c);
            (_.q.v().j(82, !1) || _.q.v().j(84, !1) || _.Zh.v().j) && Y(a, "rumc", _.qi, {
                $: !1
            });
            _.q.v().j(83, !1) && Y(a, "rume", 1, {
                $: !1
            });
            Y(a, "vis", _.il(d), {
                $: !1
            });
            0 === rq(_.R.v()[172]) || Y(a, "stss", rq(_.R.v()[172]));
            !a.l.A && zq(c) && Y(a, "arp", 1, {
                $: !1
            });
            _.p.navigator && _.p.navigator.deviceMemory && Y(a, "dmc", _.p.navigator.deviceMemory);
            Uq(a, c);
            Vq(a, b, c);
            0 < a.j.F.length && Y(a, "psts", a.j.F);
            Wq(a);
            _.q.v().j(23, !1) && (Y(a, "js", Zn(c)), Y(a, "ms", $n(a.j.D.toString(), c)));
            Xq(a, c, b);
            0 != _.wi(a.A) && 0 != a.j.m.length && (b = sb(a.j.m, a.j.j) ? -1 : a.j.m.length, Y(a, "optslots", b));
            ({
                Y: b
            } = a.j.l);
            b = _.H(b, 7);
            _.q.v().j(164, !1) && b.length && Y(a, "supporting_urls", _.F(b, h => encodeURIComponent(h)))
        },
        $q = function(a) {
            const b = (e, f) => {
                e = e.toString();
                return f ? encodeURIComponent(e) : e
            };
            a.m = `${_.R.v()[247]}${"/gampad/ads"}?`;
            for (let e = 0; e < a.D.length; e++) {
                var c = a.D[e];
                const {
                    Wa: f,
                    value: g,
                    options: h
                } = c, {
                    $: k = !0,
                    wa: l = ",",
                    ia: n = !1
                } = h;
                if ("adsenseParameters" === f) Zq(a, c);
                else {
                    c = "";
                    if (_.w(g)) _.v(g) && g.length && (c = _.F(g, u => b(u, k)).join(b(l, k)));
                    else {
                        if (null == g || !n && 0 == g) continue;
                        c = b(g, k)
                    }
                    if (c) {
                        var d = `${f}=${c}`;
                        c = (_.Wf(1) || (li() ? 8192 : 4096)) - 8;
                        if (_.q.v().j(168, !1) && a.m.length + d.length >= c) {
                            if ("supporting_urls" == f)
                                for (d = 0; d < g.length; d++) {
                                    const u = (d ? b(",", k) : `&${f}=`) + b(g[d], k);
                                    if (a.m.length + u.length > c) break;
                                    a.m += u
                                }
                            _.ya("gpt_url_trunc", u => {
                                _.t(u, "lps", _.F(a.D.slice(e), ({
                                    Wa: y
                                }) => y).join());
                                _.r(u)
                            });
                            a.m += "&trunc=1";
                            break
                        } else "?" !== a.m[a.m.length - 1] && (a.m += "&"), a.m += d
                    }
                }
            }
        },
        ar = function(a) {
            var b = window;
            let c = a.j.j;
            if (!_.v(c)) return "";
            if (a.A) 0 == c.length && (c = Io(a.l));
            else {
                if (0 == c.length) return "";
                1 < c.length && (c = [c[0]])
            }
            const d = !!tl(_.p);
            c = _.E(c, e => d && _.Hm(e) ? (dj.v().H(Kk(String(e.getAdUnitPath()))), !1) : !0);
            if (!c.length) return "";
            30 < c.length && (dj.v().H(Dk("30", String(c.length), String(c.length - 30))), c = mb(c, 0, 30));
            Yq(a, c, b);
            $q(a);
            return a.m
        },
        Y = function(a, b, c, d = {}) {
            a.G[b] || a.D.push({
                Wa: b,
                value: c,
                options: d
            })
        },
        Uq = function(a, b) {
            let c;
            try {
                const d = b.top;
                c = ih(d.document, d)
            } catch (d) {
                c = new _.M(-12245933, -12245933)
            }
            Y(a, "scr_x", Math.round(c.x), {
                ia: !0
            });
            Y(a, "scr_y", Math.round(c.y), {
                ia: !0
            })
        },
        Wq = function(a) {
            const b = window;
            var c = b.document.domain;
            var d = b.document.cookie,
                e = b.history.length,
                f = b.screen,
                g = b.document.referrer;
            if (Yf()) c = _.jg().gaGlobal || {};
            else {
                var h = Math.round((new Date).getTime() / 1E3),
                    k = b.google_analytics_domain_name;
                c = "undefined" == typeof k ? Dn("auto", c) : Dn(k, c);
                var l = -1 < d.indexOf("__utma=" + c + "."),
                    n = -1 < d.indexOf("__utmb=" + c),
                    u;
                (u = (cg() || _.jg()).gaGlobal) || (u = {}, (cg() || _.jg()).gaGlobal = u);
                var y = !1;
                if (l) g = d.split("__utma=" + c + ".")[1].split(";")[0].split("."), n ? u.sid = g[3] : u.sid || (u.sid = h + ""), u.vid = g[0] + "." + g[1], u.from_cookie = !0;
                else {
                    u.sid || (u.sid = h + "");
                    if (!u.vid) {
                        y = !0;
                        n = Math.round(2147483647 * Math.random());
                        l = [An.appName, An.version, An.language ? An.language : An.browserLanguage, An.platform, An.userAgent, Bn() ? 1 : 0].join("");
                        f ? l += f.width + "x" + f.height + f.colorDepth : _.p.java && _.p.java.awt && (f = _.p.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), l += f.screen.width + "x" + f.screen.height);
                        l = l + d + (g || "");
                        for (g = l.length; 0 < e;) l += e-- ^ g++;
                        g = Cn(l);
                        u.vid = (n ^ g & 2147483647) + "." + h
                    }
                    u.from_cookie = !1
                }
                if (!u.cid) {
                    b: for (h = 999, k && (k = 0 == k.indexOf(".") ? k.substr(1) : k, h = k.split(".").length), k = 999, d = d.split(";"), g = 0; g < d.length; g++)
                        if (f = En.exec(d[g]) || Fn.exec(d[g]) || Gn.exec(d[g])) {
                            e = f[1] || 0;
                            if (e == h) {
                                var I = f[2];
                                break b
                            }
                            e < k && (k = e, I = f[2])
                        }y && I && -1 != I.search(/^\d+\.\d+$/) ? u.vid = I : I != u.vid && (u.cid = I)
                }
                u.dh = c;
                u.hid || (u.hid = Math.round(2147483647 * Math.random()));
                c = u
            }
            Y(a, "ga_vid", c.vid, {
                $: !1
            });
            Y(a, "ga_sid", c.sid, {
                $: !1
            });
            Y(a, "ga_hid", c.hid, {
                $: !1
            });
            Y(a, "ga_fc", c.from_cookie, {
                $: !1
            });
            Y(a, "ga_cid", c.cid, {
                $: !1
            });
            Y(a, "ga_wpids", b.google_analytics_uacct)
        },
        Oq = function(a) {
            return a === a.top || _.q.v().j(156, !1) && Ae(a.top) || _.q.v().j(157, !1) && We(window.IntersectionObserver)
        },
        Aq = function(a) {
            Y(a, "eid", a.j.M);
            const b = Pg().split(",");
            b && Y(a, "debug_experiment_id", b)
        },
        Bq = function(a) {
            const b = a.l.B; - 1 !== b && Y(a, "tfcd", b, {
                ia: !0
            })
        },
        Cq = function(a, b) {
            const c = _.R.v()[221];
            kf = _.q.v().j(24, !1);
            b = vf(c, b);
            b.Xa && Y(a, "npa", 1);
            b.nb && (Y(a, "vcd", b.nb), b.yb && Y(a, "gvcd", b.yb));
            Y(a, "guci", b.Ta)
        },
        Dq = function(a) {
            var {
                Y: b
            } = a.j.l;
            b = _.Cd(b, 12, 2);
            2 !== b && Y(a, "tfua", b, {
                ia: !0
            })
        },
        Eq = function(a, b, c) {
            const d = De(b);
            var e = _.F(Ta, g => {
                a: {
                    var h = 0;d || (h |= 256);c && (h |= 67108864);!a.A && _.q.v().j(139, !1) && (h |= 268435456);
                    if (h) var k = h;
                    else {
                        var l = _.nl(d);
                        ul(l, g) && (h |= 64);
                        l.improveCollisionDetection = 1;
                        switch (g) {
                            case 2:
                            case 1:
                                2 != (0, _.Ye)() && (h |= 536870912);
                                l = 0;
                                try {
                                    l |= d != d.top ? 512 : 0;
                                    var n = Math.min(d.screen.width || 0, d.screen.height || 0);
                                    k = n ? 320 > n ? 8192 : 0 : 2048;
                                    l |= k;
                                    var u;
                                    if (u = d.navigator) {
                                        var y = d.navigator.userAgent;
                                        u = /Firefox/.test(y) || /Android 2/.test(y) || /iPhone OS [34]_/.test(y) || /Windows Phone (?:OS )?[67]/.test(y)
                                    }
                                    l |= u ? 1048576 : 0
                                } catch (aa) {
                                    l |= 32
                                }
                                k = l;
                                u = 0;
                                try {
                                    u |= d.innerHeight >= d.innerWidth ? 0 : 8, u |= sl(d, pl), u |= tl(d)
                                } catch (aa) {
                                    u |= 32
                                }
                                if (2 == g) {
                                    y = d.innerWidth;
                                    n = _.nl(d).improveCollisionDetection;
                                    l = Math.round(d.innerWidth / 320 * 50 + 15);
                                    var I = [];
                                    for (var x = 0; 3 > x; x++)
                                        for (var D = 0; 3 > D; D++) I.push({
                                            x: D / 2 * y,
                                            y: x / 2 * l
                                        });
                                    y = I;
                                    b: {
                                        for (l = 0; l < y.length; l++) {
                                            I = d;
                                            D = y[l];
                                            x = n;
                                            var N = I.document;
                                            N.elementFromPoint(D.x, D.y);
                                            var L = D.x;
                                            D = D.y;
                                            N.hasOwnProperty("_goog_efp_called_") || (N._goog_efp_called_ = N.elementFromPoint(L, D));
                                            if (D = N.elementFromPoint(L, D)) {
                                                if (!(N = "fixed" == _.zf(D, "position"))) {
                                                    if (x = 1 == x) c: {
                                                        I = I.document;
                                                        for (x = D.offsetParent; x && x != I.body; x = x.offsetParent)
                                                            if ("fixed" == _.zf(x, "position")) {
                                                                x = !0;
                                                                break c
                                                            }
                                                        x = !1
                                                    }
                                                    N = x
                                                }
                                                I = N ? !0 : !1
                                            } else I = !1;
                                            if (I) {
                                                y = !0;
                                                break b
                                            }
                                        }
                                        y = !1
                                    }
                                    y && (u |= 16777216)
                                }
                                k = h | k | u;
                                break a;
                            case 8:
                                k = _.qq.v();
                                k.j ? (k = k.j, k = !k || 2 > k.length) : k = !1;
                                u = 0;
                                try {
                                    u |= d != d.top ? 512 : 0, u |= d.navigator && /Android 2/.test(d.navigator.userAgent) ? 1048576 : 0
                                } catch (aa) {
                                    u |= 32
                                }
                                y = 0;
                                try {
                                    y |= sl(d, pl), y |= tl(d), y |= d.innerHeight >= d.innerWidth ? 0 : 8
                                } catch (aa) {
                                    y |= 32
                                }
                                k = h | u | y | (k ? 0 : 134217728);
                                break a;
                            default:
                                k = h | 32
                        }
                    }
                }
                h = new th;g = _.K(h, 10, g);
                return _.K(g, 11, k)
            });
            Y(a, "plat", br(e) || null);
            const f = xi();
            if (f && _.q.v().j(193, !1)) {
                const g = _.Le(Sa, h => h == f);
                g && (Y(a, "fpla", Sa[g]), Y(a, "adtest", "on"));
                b = yi();
                e = zh(yh(xh(wh(new vh, a.A), f), !g), e);
                ta(b, e)
            }
        },
        Fq = function(a, b) {
            b = b.Hb; - 1 !== b && Y(a, "tfcd", b, {
                ia: !0
            })
        },
        Gq = function(a, b) {
            b = b.rb;
            2 !== b && Y(a, "tfua", b)
        },
        Hq = function(a, b, c) {
            _.C(b, g => {
                cr(a, g.getAdUnitPath())
            });
            Y(a, "iu_parts", a.B);
            Y(a, "enc_prev_ius", a.F);
            Y(a, "prev_iu_szs", Qo(b));
            if (_.$a(b, g => g.da())) {
                var d = _.F(b, g => g.da() ? "height" : "0");
                Y(a, "fluid", d)
            }
            const {
                Y: e
            } = a.j.l;
            Y(a, "fsfs", uq(b, g => {
                g = g.ca;
                var h = !!_.J(e, 13);
                return (null === g ? h : g) ? 1 : 0
            }, 0));
            Y(a, "fsbs", uq(b, g => dr(a, g) ? 1 : 0, 0));
            Y(a, "rcs", uq(b, g => g.F, 0));
            er(a, b[0]);
            (d = fr(b)) && Y(a, "ists", d);
            Y(a, "fas", uq(b, g => dm(g.ma())));
            (d = gr(b, g => _.Hm(g))) && Y(a, "rbvs", d);
            _.q.v().j(98, !1) && (d = gr(b, g => !dm(g.ma()) && Uo(g, c))) && Y(a, "pfxs", d);
            d = uq(b, g => {
                g = g.F ? Qm(g) : -1;
                return Math.min(g, 3600)
            }, 0, g => 0 <= g, "_");
            Y(a, "prevtoss", d);
            const f = {};
            _.C(b, g => {
                (g = g.P) && (f[g] = (f[g] || 0) + 1)
            });
            if (!_.Je(f)) {
                b = new _.Ai("gpt_sra_setclickurl");
                const g = [];
                _.P(f, (h, k) => {
                    g.push(k.length + ":" + h)
                });
                _.t(b, "lenfreqs", g.join());
                _.r(b);
                _.Bi(b, _.R.v()[58])
            }
        },
        Iq = function(a) {
            a.o && 1 == a.o.j || Y(a, "ppid", a.l.J, {
                ia: !0
            })
        },
        Jq = function(a, b) {
            let c;
            _.q.v().j(49, !1) && 1 < b.length ? c = hr(a, b) : c = _.F(b, d => xq(d).join("&"));
            b = c;
            b.join("|").length == c.length - 1 && (b = null);
            Y(a, "prev_scp", b, {
                wa: "|"
            })
        },
        Kq = function(a, b, c) {
            Y(a, "iu", b.getAdUnitPath());
            Y(a, "sz", _.hi(b));
            _.Hm(b) && Y(a, "rbv", "1");
            b.da() && Y(a, "fluid", "height");
            var {
                Y: d
            } = a.j.l;
            var e = b.ca;
            d = !!_.J(d, 13);
            (e = (null === e ? d : e) ? 1 : 0) && Y(a, "fsf", e);
            dr(a, b) && Y(a, "fsb", "1");
            e = b.F;
            0 < e && Y(a, "rc", e);
            er(a, b);
            b.getOutOfPage() && Y(a, "ists", "1");
            e = dm(b.ma());
            Y(a, "fa", e);
            _.q.v().j(98, !1) && !e && Uo(b, c) && Y(a, "pfx", "1");
            b.F && Y(a, "prevtos", Math.min(Qm(b), 3600))
        },
        Lq = function(a, b) {
            b = xq(b);
            Y(a, "scp", b, {
                wa: "&"
            })
        },
        Mq = function(a, b) {
            var c = 1 != a.j.A,
                d = b[0].W;
            var e = a.l.m;
            if (null != ai(a.l.l)) b = !0;
            else {
                var f = !1;
                for (var g = 0; g < b.length && !f; g++) f = null != bi(b[g], e);
                b = f
            }
            e = a.j.N;
            f = 3 == a.j.A;
            g = new _.bo;
            g.set(0, c);
            g.set(1, d);
            g.set(2, b);
            g.set(3, e);
            g.set(4, f);
            c = _.ao(g);
            0 < c && Y(a, "eri", c)
        },
        Nq = function(a, b) {
            var {
                Y: c
            } = a.j.l, d = yq(c);
            Y(a, "cust_params", d, {
                wa: "&"
            });
            a.o && 1 != a.o.j && (Y(a, "cookie", go(a.o, "__gads="), {
                ia: !0
            }), a.o.B && Y(a, "cookie_enabled", "1", {
                ia: !0
            }));
            a: {
                d = "role:1 producer:12";
                var e = _.Fd(c, Sh, 9);c = _.H(c, 8);
                if (e || c) {
                    if (e) {
                        c = _.Ad(e, 1);
                        var f = _.Ad(e, 2);
                        if (null == c || null == f) {
                            d = "";
                            break a
                        }
                        d += " latlng{ latitude_e7: " + Math.round(1E7 * c) + " longitude_e7: " + Math.round(1E7 * f) + "}";
                        null != _.H(e, 3) && (d += " radius:" + _.H(e, 3))
                    } else 50 < c.length && (c = c.substring(0, 50)), d += ' loc:"' + c + '"';
                    if (md) d = _.p.btoa(d);
                    else {
                        e = [];
                        for (f = c = 0; f < d.length; f++) {
                            var g = d.charCodeAt(f);
                            255 < g && (e[c++] = g & 255, g >>= 8);
                            e[c++] = g
                        }
                        d = nd(e, void 0)
                    }
                    d = "a " + d
                } else d = ""
            }
            d && Y(a, "uule", d);
            a.o && 1 != a.o.j && (d = b.document, (b = (ai(a.l.l) || gi(b)) != d.URL ? d.domain : "") && Y(a, "cdm", b));
            _.q.v().j(6, !1) || (b = Y, d = new _.bo, _.p.SVGElement && _.p.document.createElementNS && d.set(0), e = Ve(), e["allow-top-navigation-by-user-activation"] && d.set(1), e["allow-popups-to-escape-sandbox"] && d.set(2), _.p.crypto && _.p.crypto.subtle && d.set(3), _.p.TextDecoder && _.p.TextEncoder && d.set(4), d = _.ao(d), b(a, "bc", d))
        },
        Pq = function(a, b, c) {
            var d = c.document;
            0 < navigator.userAgent.indexOf("MSIE ") && Do(a.l.l, "adsense_encoding", d.charset, !1);
            Y(a, "lmt", (Date.parse(c.document.lastModified) / 1E3).toString());
            var e = _.q.v().j(43, !1) ? _.Qg() : (new Date).getTime();
            Y(a, "dt", e, {
                $: !1
            });
            try {
                e = lq;
                var f = Math.min(Sg("domLoading") || Infinity, Sg("domInteractive") || Infinity);
                var g = Infinity == f ? Math.max(Sg("responseEnd"), Sg("navigationStart")) : f;
                0 < g && e >= g && (Y(a, "dlt", g, {
                    $: !1
                }), Y(a, "idt", e - g, {
                    $: !1
                }))
            } catch (n) {
                Y(a, "idt", -9, {
                    $: !1
                }), _.Ji(479, n)
            }
            if (null == sq) {
                a: {
                    g = c.navigator;f = g.userAgent;e = g.platform;
                    var h = /WebKit\/(\d+)/,
                        k = /rv:(\d+\.\d+)/,
                        l = /rv:1\.8([^.]|\.0)/;
                    if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(e) && !/^Opera/.test(f) && (h = (h.exec(f) || [0, 0])[1], k = (k.exec(f) || [0, 0])[1], /Win/.test(e) && /Trident/.test(f) && 11 <= d.documentMode || !h && "Gecko" === g.product && 27 <= k && !l.test(f) || 536 <= h)) {
                        g = !0;
                        break a
                    }
                    g = !1
                }
                f = lg(c, c.document, 500, 300);sq = g && !f
            }
            sq || Y(a, "ea", "0", {
                ia: !0
            });
            g = Y;
            f = {};
            l = e = _.jg();
            for (k = 0; e && e != e.parent;) e = e.parent, k++, Ae(e) && (l = e);
            e = l;
            f.Fc = e;
            k = f.Fc;
            l = k.location.href;
            k == k.top ? e = {
                url: l,
                Cb: !0
            } : (e = !1, (h = k.document) && h.referrer && (l = h.referrer, k.parent == k.top && (e = !0)), (k = k.location.ancestorOrigins) && (k = k[k.length - 1]) && -1 == l.indexOf(k) && (e = !1, l = k), e = {
                url: l,
                Cb: e
            });
            f.Gc = e;
            f.bc = lg(_.jg(), d, c.google_ad_width, c.google_ad_height);
            e = f.bc;
            l = f.Gc.Cb;
            k = _.jg();
            k = k.top == k ? 0 : Ae(k.top) ? 1 : 2;
            h = 4;
            e || 1 != k ? e || 2 != k ? e && 1 == k ? h = 7 : e && 2 == k && (h = 8) : h = 6 : h = 5;
            l && (h |= 16);
            e = "" + h;
            f.ac = e;
            f.Kd = mg();
            g(a, "frm", f.ac || null);
            a.l.A ? g = (g = ag()) && _.w(g.rootBounds) ? new _.O(g.rootBounds.width, g.rootBounds.height) : null : g = _.Zk(!0, c);
            g && (Y(a, "biw", g.width), Y(a, "bih", g.height));
            if (!c || c.top != c)
                if (g = _.Zk(!1, c)) Y(a, "isw", g.width), Y(a, "ish", g.height);
            a.j.C && Y(a, "oid", a.j.C);
            ir(a, b, d);
            a.C ? Y(a, "adks", jr(a, b)) : Y(a, "adk", kr(a, b[0]));
            d = 0;
            !_.Ba(_.p.postMessage) && (d |= 1);
            0 < d && Y(a, "osd", d);
            lr(a);
            g = d = a.l.l;
            a.C ? g = Co(b, d, a.l.m, a.I) : ((f = a.l.m[_.S(b[0])]) && (_.q.v().j(162, !1) ? Eo(g, f) : Eo(Go(f), d)), g = Ho(g));
            Y(a, "adsenseParameters", g, {
                $: !1
            });
            Y(a, "ifi", b[0].Ba);
            null !== c && c != c.top ? (b = [c.document.URL], c.name && b.push(c.name), c = _.Zk(!1, c, !1), b.push(c.width.toString()), b.push(c.height.toString()), c = _.Me(b.join(""))) : c = 0;
            0 != c && Y(a, "ifk", c.toString())
        },
        Qq = function(a, b) {
            _.P(b, (c, d) => {
                Y(a, d, c, {
                    $: !1
                })
            })
        },
        Rq = function(a) {
            var b = _.p.devicePixelRatio;
            (b = "number" === typeof b ? +b.toFixed(3) : null) && Y(a, "u_sd", b, {
                $: !1
            })
        },
        Sq = function(a, b, c = window) {
            var d = c.document;
            b = a.A ? ai(a.l.l) : bi(b[0], a.l.m) || ai(a.l.l);
            var e = ki(d.URL, a.Pa.j.google_preview || null),
                f = ki(d.referrer, a.Pa.j.google_preview || null);
            d = !1;
            if (null != b) {
                var g = e;
                c && c.top == c || (f = "", d = !0)
            } else b = e;
            a.l.A && (f = (f = Yf()) && f.referrer);
            if (_.q.v().j(2, !1)) Y(a, "url", b), Y(a, "ref", f);
            else {
                e = new Ag(c);
                var h = e.j[0].depth,
                    k = h && 0 < h;
                if (k && (Y(a, "nhd", h), c.location.ancestorOrigins)) {
                    c = Y;
                    h = [];
                    var l = Math.min(e.j.length, 27);
                    for (var n = 1; n < l; n++) e.j[n] && e.j[n].url && (h[n - 1] = e.j[n].url);
                    h = zg(e, h.reverse());
                    c(a, "iag", h);
                    c = e.j;
                    h = [];
                    for (l = c.length - 1; 0 < l; l--)(n = c[l]) && null != n.url && h.push(we(n.url.match(_.ve)[3] || null));
                    c = ug(h);
                    0 < c && Y(a, "mdo", c)
                }
                Y(a, "url", b);
                null != g && g != b && Y(a, "loc", g);
                Y(a, "ref", f);
                k && (g = e.j[Math.max(e.j.length - 1, 0)].url) && Y(a, "top", d ? we(g.match(_.ve)[3] || null) : g)
            }
        },
        Tq = function(a, b = window) {
            const c = b.document;
            var d = c.scripts;
            d && Y(a, "dssz", d.length);
            b = new Ag(b);
            d = Y; {
                const g = b.l.document && b.l.document.scripts ? b.l.document.scripts : [];
                if (g) {
                    var e = [];
                    for (var f = g.length - 1; 0 <= f && 26 > e.length;) g[f].src && e.unshift(g[f].src), f--;
                    e = zg(b, e)
                } else e = 0
            }
            d(a, "icsg", e, {
                ia: !0
            });
            if (d = b.l.document && b.l.document.scripts ? b.l.document.scripts : []) {
                b = [];
                for (e = d.length - 1; 0 <= e; e--)(f = d[e]) && null != f.src && b.push(we(f.src.match(_.ve)[3] || null));
                b = ug(b)
            } else b = 0;
            Y(a, "mso", b);
            b = Error();
            b.stack && (d = b.stack, e = d.split(/\r\n|\r|\n/).length, "Error" == d.slice(0, 5) && e--, d = e, d -= 13, 0 > d && (d = 0, e = new _.Ai("gpt_negative_stack_trace", "https://pagead2.googlesyndication.com", _.R.v()[23]), _.r(e, a.l), _.t(e, "stackTrace", b.stack), _.Bi(e)), Y(a, "std", d, {
                ia: !0
            }));
            c.currentScript && c.currentScript.text && Y(a, "csl", c.currentScript.text.length)
        },
        Vq = function(a, b, c) {
            const d = [],
                e = [];
            _.C(b, f => {
                a: {
                    if (!f.ha) {
                        var g = (g = _.X(f)) && g.parentElement;
                        if (!g) {
                            g = null;
                            break a
                        }
                        f.ha = _.Fe(g, window)
                    }
                    g = f.ha
                }
                if ((g = _.af(g)) && (1 != g[0] || 1 != g[3])) d.push("-1x-1"),
                e.push("-1x-1");
                else if (a.A || Zm(f)) {
                    const h = (g = _.X(f)) && g.parentElement,
                        k = _.Xm(f) || new _.O(0, 0);
                    tq(k, h, c);
                    d.push(`${k.width}x${k.height}`);
                    f.Ja || (f.Ja = ui(_.X(f)));
                    f = f.Ja || new _.O(0, 0);
                    tq(f, g, c, 1); - 1 == k.height && (f.height = -1);
                    e.push(`${f.width}x${f.height}`)
                }
            });
            Y(a, "psz", d, {
                wa: "|"
            });
            Y(a, "msz", e, {
                wa: "|"
            })
        },
        Xq = function(a, b, c) {
            const d = [],
                e = [];
            _.C(c, f => {
                const g = new _.bo;
                var h = _.X(f);
                f = 0;
                if (h) {
                    var k = _.Zk(!0, b).width;
                    if (null !== b && b != b.top) {
                        var l = _.Zk(!1, b).width;
                        (-12245933 == k || -12245933 == l || l < k) && g.set(8)
                    }
                    for (let n = 0, u = h; u && 100 > n; n++, u = u.parentElement)
                        if (h = _.Fe(u, b)) {
                            if (h.overflowY && "visible" != h.overflowY && (g.set(2), (l = ui(u)) && (f = f ? Math.min(f, l.width) : l.width), g.get(9))) break;
                            "sticky" != h.position && "fixed" != h.position || g.set(9);
                            "none" == h.display && g.set(7);
                            "IFRAME" == u.nodeName && (h = parseInt(h.width, 10), h < k && (g.set(8), f = f ? Math.min(h, f) : h))
                        } else g.set(3)
                } else g.set(1);
                d.push(_.ao(g));
                e.push(f)
            });
            Y(a, "fws", d);
            Y(a, "ohw", e)
        },
        ir = function(a, b, c) {
            const d = [],
                e = [];
            if (a.A) _.C(b, f => {
                f = Po(a.l, f, c) || mr;
                d.push(Math.round(f.x));
                e.push(Math.round(f.y))
            });
            else if (b = (a.l.A ? bg() : null) || Po(a.l, b[0], c)) d.push(Math.round(b.x)), e.push(Math.round(b.y));
            a.C ? (Y(a, "adxs", d), Y(a, "adys", e)) : (Y(a, "adx", d[0], {
                ia: !0
            }), Y(a, "ady", e[0], {
                ia: !0
            }))
        },
        kr = function(a, b) {
            const {
                Y: c
            } = a.j.l;
            a = b.Ra || ii(b, No(a.l, b, c));
            _.q.v().j(159, !1) && (b.Ra = a);
            return a
        },
        jr = function(a, b) {
            const {
                Y: c
            } = a.j.l;
            return _.F(b, a.A ? d => {
                let e;
                _.q.v().j(143, !1) ? e = d.Ra || ii(d, No(a.l, d, c)) : e = ii(d);
                return d.Ra = e
            } : d => kr(a, d)).join(",")
        },
        nr = function(a) {
            a = _.F(a, vq);
            let b = a.shift() || {};
            for (; a.length;) b = wq(b, a.shift());
            return b
        },
        hr = function(a, b) {
            const c = [],
                d = nr(b);
            _.C(b, f => {
                f = xq(f, (g, h) => {
                    h = d[h];
                    return !h || -1 == h.indexOf(g)
                });
                c.push(f.join("&"))
            });
            const e = [];
            _.P(d, (f, g) => {
                f = _.F(f, encodeURIComponent);
                g = encodeURIComponent(g);
                e.push(`${g}=${f.join()}`)
            });
            e.length && Y(a, "csp", e, {
                wa: "&"
            });
            return c
        },
        lr = function(a) {
            if (a.C) {
                const b = _.F(a.j.j, c => _.Xo(a.j, c));
                Y(a, "ucis", b, {
                    wa: "|"
                })
            } else 0 < a.j.j.length && Y(a, "uci", _.Xo(a.j, a.j.j[0]))
        },
        dr = function(a, b) {
            b = b.Da;
            a = a.l.C;
            return null == b.sandbox ? a.sandbox : b.sandbox
        },
        er = function(a, b) {
            b.P && !a.A && Y(a, "click", b.P)
        },
        cr = function(a, b) {
            let c = "";
            "" != b && (b = _.F(b.split("/"), d => d.replace(/,/g, ":")), or(a, b), c = pr(a, b));
            a.F.push(c)
        },
        fr = function(a) {
            return gr(a, b => b.getOutOfPage())
        },
        gr = function(a, b) {
            const c = new _.bo;
            _.C(a, (d, e) => {
                c.set(a.length - e - 1, b(d))
            });
            return _.ao(c)
        },
        or = function(a, b) {
            for (let c = 0; c < b.length; c++) {
                if ("" == b[c]) continue;
                let d = !1;
                for (let e = 0; e < a.B.length; e++)
                    if (b[c] == a.B[e]) {
                        d = !0;
                        break
                    }
                d || a.B.push(b[c])
            }
        },
        pr = function(a, b) {
            let c = "";
            for (let d = 0; d < b.length; d++) {
                if (0 < d) c += "/";
                else if ("" == b[0]) continue;
                for (let e = 0; e < a.B.length; e++)
                    if (b[d] == a.B[e]) {
                        c += e;
                        break
                    }
            }
            return c
        },
        Zq = function(a, b) {
            let c = [],
                d = [];
            b = _.v(b.value) ? b.value : [];
            for (const e of b) {
                const {
                    Wa: f,
                    Eb: g,
                    Ac: h
                } = e;
                b = g ? encodeURIComponent(g.toString()) : "";
                if (h) {
                    const k = _.F(h, l => l ? encodeURIComponent(encodeURIComponent(l)) : "").join(",");
                    d.push(`${f},${encodeURIComponent(b)},${k}`)
                } else g && "url" != f && c.push(`${f}=${b}`)
            }
            c.length && (a.m += `&${c.join("&")}`);
            d.length && (a.m += `&sps=${d.join("|")}`)
        };
    var qr = class {
        constructor(a, b, c, d, e) {
            this.l = b;
            this.Pa = c;
            this.o = d;
            this.C = (this.A = a) || _.q.v().j(139, !1);
            this.j = e;
            this.D = [];
            this.m = "";
            this.I = Pl();
            this.B = [];
            this.F = [];
            this.G = Jb(_.q.v().l(7, []))
        }
    };
    const br = a => {
        const b = [];
        for (const c of a) a = _.H(c, 11), b.push(`${_.H(c,10)}:${a}`);
        return b.join()
    };
    var mr = new _.M(-9, -9);
    let rr = null;
    var tr = function() {
            return rr ? rr : window.performance && We(window.performance.now) ? rr = new sr : null
        },
        vr = function(a) {
            _.Je(a.j) || (a.j = Db(a.j, b => !ur(a, b)))
        },
        ur = function(a, b) {
            const c = _.X(b, _.p.document);
            if (c && "DIV" == c.nodeName) {
                const d = _.q.v().j(87, !1),
                    e = _.q.v().j(64, !1);
                a = new Ol({
                    gb: _.p,
                    Ec: a.l,
                    Za: c,
                    na: f => {
                        _.Ji(336, f, 1)
                    },
                    xc: d,
                    wc: e
                });
                if (a.o) return Ml(a, b.A), b.X = a, !0
            }
            return !1
        },
        wr = function(a, b) {
            const c = b.l.j;
            ur(a, b) ? delete a.j[c] : a.j[c] = b
        },
        xr = function(a, b) {
            const c = b.X;
            null != c ? Ml(c, b.A) : wr(a, b)
        };
    var sr = class {
        constructor() {
            this.j = {};
            this.l = _.Zh.v();
            _.Q(_.p, "DOMContentLoaded", _.T(334, () => vr(this)))
        }
    };
    var yr = function(a, b) {
        const c = lo(document, b, "prefetch", "");
        c && _.Q(c, "load", () => {
            a.l[b] = 3;
            c && _.pe(c)
        })
    };
    var zr = class {
        constructor() {
            this.j = !1;
            this.l = {}
        }
    };
    Ia(zr);
    _.Ar = "3rd party ad content";
    wa("setAdIframeTitle", a => {
        _.Ar = a
    });
    var Br = function(a, b) {
            for (const c of a) c.hb = b
        },
        Cp = function(a, b, c) {
            const d = _.yp.v();
            _.$a(b, e => 0 < (d.j[_.S(e)] || []).length) && _.Va.push({
                Ia: a,
                xa: 14,
                va: [b]
            });
            for (const e of b) {
                b = _.X(e);
                const f = _.S(e),
                    g = a.o[f];
                g ? (_.al(g), delete a.o[f]) : Zo(b);
                Cr(e, c) && b && _.Kf(b, !1);
                Dr(a, b, e.l.j, e);
                Pm(e)
            }
            return !0
        },
        Er = function() {
            return Math.floor(Math.random() * 2 ** 52)
        },
        Gr = function(a, b, c, d) {
            b = _.E(b, e => !e.Aa);
            if (b.length) {
                for (const e of b) e.Aa = !0;
                Fr(a, b, c, d)
            }
        },
        Hr = function(a, b = 0) {
            var c = window;
            !b || c && c.top == c ? b = Er() : a.T = !0;
            a.D = Math.floor(b)
        },
        Ir = function(a, b, c, d, e, f = 0) {
            var g = new ee;
            g = g.j.getUTCFullYear() + Dc(g.j.getUTCMonth() + 1) + Dc(g.j.getUTCDate());
            g = new Yo(g, e);
            g.T = a.J();
            e = _.Ap(e.Y) || _.q.v().j(139, !1) ? "fifs" : "fif";
            g.B = e;
            g.D = a.aa;
            g.A = c;
            g.J = d;
            g.j = b;
            g.L = f;
            for (const h of b) a = h, g.W[_.S(a)] = a.A;
            return g
        },
        Jr = function(a, b) {
            b.K = a.D + "";
            b.M = _.fh.v().l();
            b.N = a.T;
            b.U = a.W;
            b.P = a.L;
            b.R = a.N;
            b.C = a.C;
            so();
            b.I = po[1];
            so();
            b.O = po[4];
            so();
            b.V = po[6];
            b.persistentRoadblocksOnly = a.ba;
            b.videoPodNumber = a.ga;
            b.videoPodPosition = a.ha;
            b.videoStreamCorrelator = a.videoStreamCorrelator;
            b.F = Ip(a, b.j)
        },
        Kr = function(a, b, c, d, e) {
            d ? a.K(c, "", e) : (Nm(c[0]), c[0].K = b)
        },
        Mr = function(a, b) {
            const {
                j: c
            } = b;
            var {
                Y: d
            } = b.l;
            const e = _.Fd(d, _.Qh, 5) || new _.Qh;
            _.C(c, k => {
                k.Ca = e
            });
            d = ap(e);
            if (null == d) return !1;
            const f = Math.max(d / 100, 0);
            if (!ab(c, k => _.jh(_.X(k)) && !_.So(a.j, window, f, k))) return !1;
            const g = a.I(`${d}%`),
                h = () => Lr(a, b);
            _.C(c, k => {
                const l = k.l.j,
                    n = _.X(k);
                n && (a.A[l] = h, g.observe(n), k.ba = g)
            });
            return !0
        },
        Lr = function(a, b) {
            const c = b.j;
            null != c[0].ba && _.C(c, d => {
                Dr(a, _.X(d), d.l.j, d)
            });
            Nr(a, b)
        },
        Or = function(a, b) {
            Mr(a, b) || Lr(a, b)
        },
        Dr = function(a, b, c, d) {
            if (b && a.A[c]) {
                const e = d.ba;
                e && (d.ba = null, e.unobserve(b));
                delete a.A[c]
            }
        },
        Nr = function(a, b) {
            var c = ++a.da;
            b.o = c;
            a.l[c] = b.j;
            _.fh.v().j(2);
            Jr(a, b);
            ({
                Y: c
            } = b.l);
            c = _.Ap(c);
            c = new qr(c, a.j, a.m, a.M, b);
            c = ar(c);
            Pr(a, c, b);
            b.X = !0;
            a = b.j;
            _.wp.v().load(1);
            c = zr.v();
            var d = window;
            c.j || (c.j = !0, b = _.vl(d, _.im(), _.jm(), !0), c.l[b] = 1, ko() ? yr(c, b) : _.xa().fifWin || (d = d.document, c = _.re(new _.he(d), "IFRAME"), c.src = b, c.style.visibility = "hidden", c.style.display = "none", b = d.getElementsByTagName("script"), 0 < b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(c, b.nextSibling))));
            Qr(a)
        },
        Qr = function(a) {
            const b = _.Qg();
            _.C(a, c => {
                c.qb = b
            })
        },
        Fr = function(a, b, c, d) {
            const e = _.Qg();
            b = tb(b, h => {
                h = h.qb;
                return h = null == h ? 0 : Math.max(0, Math.round((1E3 - (e - h)) / 1E3))
            });
            const f = b[0] || [],
                g = dj.v();
            _.P(b, (h, k) => {
                const l = parseInt(k, 10);
                !l || 0 > l || (_.C(h, n => {
                    g.H(Jk(String(l), n.getAdUnitPath()))
                }), _.p.setTimeout(_.T(375, () => {
                    Rr(347, () => Sr(a, h, c, d))
                }), 1E3 * l))
            });
            f.length && Rr(347, () => Sr(a, f, c, d))
        },
        Sr = function(a, b, c, d) {
            _.C(b, g => {
                g.Aa = !1
            });
            b = tb(b, g => 0 != _.Em(g).length);
            if (b[!1])
                for (const g of b[!1]) _.Dp(a, document, g, !0, d.Y);
            if (b = b[!0]) {
                var e = c.isVideoRefresh ? 3 : 2;
                _.C(b, g => {
                    _.Gm(g)
                });
                void 0 !== c.videoStreamCorrelator ? a.videoStreamCorrelator = c.videoStreamCorrelator : 0 != c.changeCorrelator && Hr(a);
                a.ga = c.videoPodNumber || NaN;
                a.ha = c.videoPodPosition || NaN;
                a.ba = c.persistentRoadblocksOnly || !1;
                a.B = c.clearUnfilledSlots || _.q.v().j(123, !1);
                Lo(a.j, b);
                if (!a.F) {
                    var f = (0, _.z)(function(g) {
                        const h = Tr(this);
                        return Ir(this, g, e, h, d)
                    }, a);
                    _.Ap(d.Y) ? (c = tb(b, g => g.C), _.P(c, function(g) {
                        Ur(this, f(g))
                    }, a)) : _.C(b, g => {
                        Ur(a, f([g]))
                    })
                }
            }
        },
        Tr = function(a) {
            return "googletag.impl.pubads.callbackProxy" + ++a.ja
        },
        Ur = function(a, b, c = document) {
            _.C(b.j, g => {
                g.ra = !0
            });
            const d = _.R.v()[221];
            kf = _.q.v().j(24, !1);
            const e = b.j[0] && b.j[0].Ib ? b.j[0].C : "",
                f = _.p.setTimeout(() => {
                    const g = new _.Ai("gpt_cmp_never_called");
                    _.r(g, a.j);
                    _.t(g, "consent", JSON.stringify(vf(d, e)));
                    _.Bi(g)
                }, 1E4);
            wf(d, e, _.T(451, () => {
                _.p.clearTimeout(f);
                Vr(a, b, c)
            }))
        },
        Cr = function(a, b) {
            if (_.q.v().j(177, !1)) return !1;
            a = a.aa;
            null == a && (a = _.J(b, 10));
            return !!a
        },
        Wr = function(a, b, c) {
            if (!_.Wm(c, b)) {
                var d = _.Em(c);
                if (0 == d.length) var e = null;
                else if (e = d[0], 1 < d.length) {
                    b: if ((d = _.X(c, b)) && d.style.height && d.style.width) {
                        d = [d.style.width, d.style.height];
                        for (let f = 0; f < d.length; ++f)
                            if (2 < d[f].length && "px" == d[f].substring(d[f].length - 2)) d[f] = parseInt(d[f], 10);
                            else {
                                d = null;
                                break b
                            }
                    } else d = null;e = d || e
                }
                if (d = _.X(c, b)) a = _.$o(b, d, _.Um(c), a.j.o, e), c.M && (c.R = a)
            }
        },
        Xr = function(a, b) {
            Cr(a, b) && !a.I && (a = _.X(a)) && _.Kf(a, !1)
        },
        Vr = function(a, b, c = document) {
            const d = _.q.v().j(42, !1),
                {
                    Y: e
                } = b.l;
            for (const f of b.j) d || Xr(f, e), Wr(a, c, f);
            Or(a, b);
            d && _.C(b.j, f => {
                Xr(f, e)
            })
        },
        $r = function(a, b, c, d) {
            a.fa(c, b, d);
            const e = _.T(632, () => {
                const f = Yr(a, b, c.C, d);
                Zr(a, b, f, d)
            });
            _.q.v().j(143, !1) && 1 < a.da ? setTimeout(e, 0) : _.q.v().j(99, !1) ? Sk().then(e) : e()
        },
        as = function(a, b, c) {
            var d = document;
            Rr(348, () => {
                _.Ap(b.Y) ? $r(a, b, c, d) : _.Em(c).length ? Zr(a, b, [
                    [c]
                ], d) : _.Dp(a, document, c, !0, b.Y);
                Xr(c, b.Y)
            })
        },
        Yr = function(a, b, c, d) {
            var e = Ko(a.j);
            ({
                Y: b
            } = b);
            _.q.v().j(143, !1) && !_.J(b, 6) && (e = _.E(e, f => f.qa && !!_.X(f, d)));
            return (e = bs(a, b, e)) ? cs(a, e, c) : null
        },
        Zr = function(a, b, c, d) {
            const {
                Y: e
            } = b, f = _.J(e, 4);
            a.F || f || !c || _.C(c, g => {
                if (_.q.v().j(129, !1)) {
                    var h = _.E(g, y => !y.hb);
                    if (!h.length) return;
                    Br(h, !0)
                } else h = g;
                const k = h.length;
                var l = h;
                const n = _.wi(_.Ap(e));
                g = 0 == n ? [] : To(a.j, h);
                const u = g.length;
                2 == n && u && u < k && (l = mb(h, 0, k - u));
                h = Tr(a);
                l = Ir(a, l, 1, h, b);
                l.m = g;
                Ur(a, l, d)
            })
        },
        bs = function(a, b, c) {
            c = tb(c, d => 0 != _.Em(d).length);
            c[!1] && ds(a, b, c[!1]);
            return c[!0] || null
        },
        cs = function(a, b, c) {
            let d = [];
            b = tb(b, e => e.C);
            _.P(b, (e, f) => {
                e = _.q.v().j(65, !1) ? es(a, e) : e;
                f == c ? d.unshift(e) : d.push(e)
            });
            return d
        },
        ds = function(a, b, c) {
            for (const d of c) 0 == _.Em(d).length && _.Dp(a, document, d, !0, b)
        },
        es = function(a, b) {
            const c = [];
            _.C(b, d => {
                if (!d.getOutOfPage()) {
                    const {
                        y: e = Infinity
                    } = Po(a.j, d, document) || {};
                    c.push({
                        tb: e,
                        slot: d
                    })
                }
            });
            qb(c, (d, e) => ob(d.tb, e.tb));
            return _.F(b, d => d.getOutOfPage() ? d : c.shift().slot)
        },
        fs = function(a, b, c) {
            b = Ir(a, b, c.A, Tr(a), c.l, c.o);
            Ur(a, b)
        },
        gs = function(a, b) {
            const {
                j: c,
                m: d,
                o: e,
                L: f,
                l: g
            } = b, h = _.wi(_.Ap(g.Y));
            if (f && 0 != h) _.C(null == f ? null : a.l[f], k => {
                k.T = 0
            }), delete a.l[f], delete a.l[e];
            else {
                let k = [];
                1 == h ? k = _.E(c, l => 1 == l.T) : 2 != h || sb(c, d) || (k = d);
                k.length && 0 != h ? fs(a, k, b) : delete a.l[e]
            }
        };
    _.hs = class extends _.Jp {
        constructor(a, b, c) {
            super(a, b, c);
            this.D = Er();
            this.aa = _.gf(_.p);
            this.T = !1;
            this.l = {};
            this.ha = this.ga = NaN;
            this.B = _.q.v().j(123, !1);
            this.ba = !1;
            this.ja = 0;
            this.o = {};
            this.K = _.T(513, this.K);
            hp(d => {
                var e = en.v().j;
                e = zi(e);
                Gr(this, [d], {}, e)
            })
        }
        J() {
            return "json_html"
        }
        K(a, b, c) {
            for (const d of a) {
                a = Ir(this, [d], 1, b, c);
                Jr(this, a);
                a.B = "fif";
                const e = new qr(!1, this.j, this.m, this.M, a);
                _.q.v().j(159, !1) ? Om(d, () => Bp(ar(e))) : (a = Bp(ar(e)), d.K = a);
                Nm(d)
            }
        }
        fa(a, b, c) {
            _.Vm(a, c) || (Wr(this, c, a), _.X(a, c) ? _.Va.push({
                Ia: this,
                xa: 3,
                va: [a, b, c]
            }) : _.q.v().j(42, !1) || Xr(a, b.Y))
        }
    };
    _.hs.prototype.ca = _.m(21);
    _.hs.prototype.Z = _.m(20);
    const is = () => {
            if (_.q.v().j(200, !1)) return !1;
            if (yc()) {
                if (_.q.v().j(109, !1) && 0 <= _.ec(_.Ac(), 12)) return !1;
                if (0 <= _.ec(_.Ac(), 11)) return !0
            } else if (_.wc() && _.q.v().j(112, !1) && 0 <= _.ec(_.Ac(), 65)) return !0;
            return !1
        },
        Rr = (a, b) => {
            is() ? wo(_.T(a, b)) : b()
        };
    _.js = function(a, b) {
        a.j = 4;
        try {
            a.G(b)
        } catch (c) {}
    };
    var ks = class {
        constructor(a, b, c, d, e) {
            this.D = b;
            this.C = c;
            this.G = d;
            this.F = e;
            this.B = a.slice();
            this.l = null;
            this.j = 1;
            this.m = "";
            this.o = this.A = 0
        }
    };
    var ms = function(a) {
            a.o || (a.o = !0, ls(a))
        },
        ls = function(a) {
            const b = new _.p.XMLHttpRequest;
            b.open("GET", a.B);
            b.withCredentials = !0;
            b.onreadystatechange = _.T(322, () => {
                _.Va.push({
                    Ia: a,
                    xa: 17,
                    va: [!1, b]
                })
            });
            b.onload = _.T(444, () => {
                _.Va.push({
                    Ia: a,
                    xa: 17,
                    va: [!0, b]
                })
            });
            b.onerror = c => _.js(a.j, c);
            b.send()
        };
    _.ns = class {
        constructor(a, b) {
            this.B = a;
            this.j = b;
            this.o = !1;
            this.A = 0;
            this.m = !1
        }
    };
    _.ns.prototype.l = _.m(22);
    var Pr = function(a, b, c) {
        var d = _.p.document;
        const {
            j: e,
            l: f
        } = c;
        var g = _.T(287, (l, n) => {
            _.Va.push({
                Ia: a,
                xa: 6,
                va: [c, l, n, d]
            })
        });
        const h = _.T(288, (l, n) => {
                _.Va.push({
                    Ia: a,
                    xa: 5,
                    va: [c, l, n, d]
                })
            }),
            k = _.T(289, l => {
                _.Ki(289, Error(l && l.message || "strm_err"), !0)
            });
        b = ei(Bp(b));
        g = new ks(e, g, h, k, () => void gs(a, c));
        Ep(e);
        ms(new _.ns(b, g));
        Kr(a, b, e, _.Ap(f.Y), c.l);
        _.q.v().j(129, !1) && Br(e, !1);
        _.wp.v().load(1)
    };
    _.os = class extends _.hs {
        constructor(a, b, c) {
            super(a, b, c);
            this.ea = {}
        }
        J() {
            return "ldjh"
        }
    };
    _.os.prototype.R = _.m(24);
    _.os.prototype.V = _.m(23);
    var aq = function(a) {
            null == a.l && (a.l = new Vo(Pl()), a === ps && (a.l.o = !1));
            return a.l
        },
        Fp = function(a) {
            if (a.j) return a.j;
            var b = aq(a);
            null == a.m && (a.m = new zp);
            a.j = new _.os(b, a.m, qs());
            b = a.j;
            b.F = null != (b.m.j.google_nofetch || null) || !!window.google_noFetch || b.F;
            b.O = null != (b.m.j.google_norender || null) || b.O;
            b.C = b.U.getOseId();
            return a.j
        };
    var rs = class {
        constructor() {
            this.m = this.j = this.l = null
        }
    };
    let ss = null;
    var qs = () => {
            ss || (ss = new jo(void 0, void 0));
            return ss
        },
        ts = null,
        Gp = () => {
            ts || (ts = new rs);
            return ts
        },
        ps = null;
    var Vp = function(a, b) {
        const c = Ib(a.j.B);
        if (b && "string" !== typeof b && "number" != typeof b) try {
            _.P(b, function(d, e) {
                Wl(this.j, e, d)
            }, a)
        } catch (d) {
            a.j.B = Ib(c), dj.v().error(W("PassbackSlot.updateTargetingFromMap", [b]))
        } else dj.v().error(W("PassbackSlot.updateTargetingFromMap", [b]))
    };
    var us = class extends gj {
        constructor(a, b, c) {
            super();
            this.o = c;
            this.j = a;
            this.j.W = !0;
            this.j.addService(b);
            this.l = b
        }
        D() {
            return new Up(this, this.o)
        }
        display(a) {
            document.write(`<div ${"id"}="${_.Bc(this.j.l.j)}"></div>`);
            _.X(this.j) ? vs(this.l, a, this.j) : _.ya("gpt_pb_write", b => {
                _.r(b)
            })
        }
        set(a, b) {
            if ("string" !== typeof a || !b || "page_url" != a) return this;
            a = this.j;
            a.W && (a.Ea = b);
            return this
        }
        get(a) {
            return "string" !== typeof a || "page_url" != a ? null : this.j.Ea
        }
    };
    var ws = class {
        constructor(a, b, c = {
            changeCorrelator: !0
        }) {
            this.j = a;
            this.l = b;
            this.options = c
        }
    };
    var bq = function(a, b, c) {
            if ("string" !== typeof b || 0 >= b.length || !c) return a.log.error(W("PubAdsService.definePassback", [b, c])), null;
            const {
                slot: d,
                Pa: e
            } = nn(b, c, void 0, void 0, !0);
            return d && e ? new us(d, a, e) : null
        },
        cq = function(a, b, c, d) {
            if (c && !_.v(c) || d && (!_.w(d) || d.changeCorrelator && "boolean" !== typeof d.changeCorrelator)) a.log.H(W("PubAdsService.refresh", _.E([c, d], _.Ba)), a);
            else {
                var e = null;
                if (c && (e = xs(a, c), !e.length)) {
                    a.log.H(W("PubAdsService.refresh", _.E([c, d], _.Ba)), a);
                    return
                }
                ys(a, e, b, d)
            }
        },
        eq = function(a, b, c) {
            if (!a.l) return a.log.H(dk(), a), !1;
            let d = null;
            if (c && (d = xs(a, c), 0 == d.length)) return a.log.H(W("PubAdsService.clear", _.E([c], _.Ba)), a), !1;
            a.log.info(gk(), a);
            return Op(a, d, b)
        },
        fq = function(a, b) {
            if (0 !== b && 1 !== b) {
                a.log.H(Vj(String(b)), a);
                if (0 !== b && !ri(b)) return;
                _.ya("gpt_setcookieoptions_invalid", c => {
                    _.t(c, "options", b);
                    _.r(c)
                })
            }
            io(qs(), b)
        },
        hq = function(a) {
            return 0 == a.A.length ? "not_available" : a.l ? Fp(Gp()).D + "" : "not_loaded"
        },
        iq = function(a) {
            a.W = !0;
            if (a.l) {
                a = aq(Gp());
                a.A = !0;
                var b = new _.Ai("gpt_markAsAmp", "https://pagead2.googlesyndication.com", _.R.v()[23]);
                _.r(b, a);
                try {
                    const c = eg(_.p);
                    c && _.t(b, "ntype", c);
                    const d = _.F(_.p.location.ancestorOrigins, e => ((/^(?:https?:\/\/)?([^\/\?:#]+)/i.exec(e) || [])[1] || e).substr(0, 20));
                    _.t(b, "ost", d.slice(0, 10).join())
                } catch (c) {}
                _.Bi(b)
            }
        },
        vs = function(a, b, c) {
            Rl(a);
            _.q.v().j(149, !1) ? a = Gp() : (ps || (ps = new rs), a = ps);
            Jo(aq(a), c);
            as(Fp(a), b, c)
        },
        zs = function(a) {
            if ((_.q.v().j(148, !1) || !a.X) && a.l) {
                a.X = !0;
                var b = ub(a.L),
                    c = aq(Gp());
                for (const d of b) b = String(a.get(d)), Do(c.l, d, b) || a.log.H(Tj(String(d), String(a.get(d))), a)
            }
        },
        As = function(a, b) {
            (a.l || _.q.v().j(141, !1)) && Jo(aq(Gp()), b);
            if (a.l) {
                var c = aq(Gp()),
                    d = ub(b.ea);
                for (const g of d) {
                    if (d = !!c.j[_.S(b)]) {
                        {
                            d = c;
                            var e = g,
                                f = String(b.get(g));
                            const h = _.S(b);
                            null == d.m[h] && (d.m[h] = new Fo(d.K));
                            d = Do(d.m[h], e, f)
                        }
                    }
                    d || a.log.H(Uj(String(g), String(b.get(g)), b.getAdUnitPath()), a, b)
                }
            }
        },
        dq = function(a) {
            if (a.C && a.l) {
                var b = Fp(Gp()),
                    c = a.R;
                a = a.P;
                b.W = !0;
                b.N = c;
                b.L = a;
                b.videoStreamCorrelator = Er()
            }
        },
        gq = function(a) {
            a.l && Hr(Fp(Gp()), -1 == a.J ? void 0 : a.J)
        },
        ys = function(a, b, c, d) {
            if (_.q.v().j(104, !1)) Rl(a), _.C(b || [], f => {
                f.addService(a)
            });
            else if (!a.l) {
                var {
                    Y: e
                } = c;
                _.J(e, 6) ? (a.log.info(ek(), a), b ? fb(a.F, new ws(b, c, d)) : fb(a.F, new ws(a.A, c, d))) : a.log.H(ck(), a);
                return
            }
            a.log.info(fk(), a);
            e = {};
            void 0 !== d && void 0 !== d.changeCorrelator && (e.changeCorrelator = d.changeCorrelator);
            (b = Bs(a, b, e, c)) && a.B && _.C(b, f => xr(a.B, f))
        },
        xs = function(a, b) {
            const c = [];
            if (!_.v(b)) return c;
            _.C(b, (d, e) => {
                (d = Fh(d, $m)) && !d.Oa() ? c.push(d) : a.log.H(lk(String(e)), a)
            });
            return c
        },
        Bs = function(a, b, c, d) {
            const e = Gp(),
                f = Fp(e),
                g = aq(e);
            b = null != b ? _.E(b, l => !!g.j[_.S(l)]) : Io(g);
            const h = bb(b, l => !!a.G[_.S(l)]);
            0 < h && _.ya("gpt_cbr", l => {
                _.t(l, "num", h);
                _.r(l)
            });
            for (var k of b) delete a.G[_.S(k)];
            k = _.E(b, l => Mo(g, l));
            if (!k.length) return null;
            Gr(f, k, c, d);
            return b
        },
        Cs = function(a, b, c, d) {
            if (b && !_.v(b) || c.videoStreamCorrelator && "number" !== typeof c.videoStreamCorrelator || c.videoPodNumber && "number" !== typeof c.videoPodNumber || c.videoPodPosition && "number" !== typeof c.videoPodPosition || c.persistentRoadblocksOnly && "boolean" !== typeof c.persistentRoadblocksOnly || c.clearUnfilledSlots && "boolean" !== typeof c.clearUnfilledSlots) a.log.H(W("PubAdsService.videoRefresh", _.E([b, c], _.Ba)), a);
            else if (a.l) {
                var e = null;
                if (b && (e = xs(a, b), !e.length)) {
                    a.log.error(bk("videoRefresh"), a);
                    return
                }
                a.log.info(fk(), a);
                (b = Bs(a, e, c, d)) && a.B && _.C(b, f => xr(a.B, f))
            } else a.log.H(ck(), a)
        },
        Op = function(a, b, c) {
            var d = Gp();
            const e = Fp(d);
            d = aq(d);
            b = b ? xs(a, b) : Io(d);
            for (const f of b) {
                const g = _.S(f);
                a.G[g] || (a.G[g] = !0, setTimeout(() => {
                    delete a.G[g]
                }, 0))
            }
            return Cp(e, b, c)
        };
    var Ds = class extends um {
        constructor() {
            super();
            this.l = !1;
            this.L = {};
            this.X = !1;
            this.F = [];
            this.Z = {};
            this.K = this.C = !1;
            this.J = -1;
            this.T = this.V = this.P = this.R = "";
            this.W = !1;
            this.B = _.q.v().j(87, !1) || _.q.v().j(64, !1) ? tr() : null;
            this.G = {}
        }
        D() {
            const a = en.v().j;
            return new $p(this, $m, a)
        }
        set(a, b) {
            this.L[a] = b
        }
        get(a) {
            return this.L[a]
        }
        display(a, b, c = "", d = "") {
            let e = "",
                f;
            c && (_.w(c) && 1 == c.nodeType ? (f = c, e = f.id) : e = c);
            Rl(this);
            ({
                slot: a
            } = nn(a, b, e));
            a && (f && !e && (f.id = a.l.j), a.addService(this), Vl(a, d), wn(f || a.l.j))
        }
        M() {
            this.l = !0;
            const a = en.v().j;
            window.google_noFetch = !1;
            if (_.J(a, 6)) {
                zs(this);
                for (const b of this.A) As(this, b)
            }
            dq(this);
            gq(this);
            this.W && iq(this);
            Aa()
        }
        j() {
            return "publisher_ads"
        }
        O(a) {
            0 != a.ma() && (a.ob = !1);
            a.W || As(this, a);
            this.B && wr(this.B, a);
            super.O(a)
        }
        N(a, b) {
            Rl(this);
            zs(this);
            As(this, b); {
                this.log.info(Sj());
                var c = Gp();
                const e = Fp(c);
                c = aq(c);
                var d = null != b.j && !_.Ap(a.Y);
                c.j[_.S(b)] && !d && (_.q.v().j(130, !1) || (c = e, {
                    Y: d
                } = a, _.J(d, 6) || !(d = _.X(b))) || (c = c.j, _.q.v().j(130, !1) || (c.F[_.S(b)] = d)), as(e, a, b));
                this.Z[b.getAdUnitPath()] = !0;
                if (this.l)
                    for (a = 0; a < this.F.length; ++a) b = this.F[a], this.Z[b.j[0].getAdUnitPath()] && (ys(this, b.j, b.l, b.options), _.gb(this.F, a--));
                else this.log.error(Rj(), this)
            }
        }
        getVersion() {
            if (this.l) return "2019100301"
        }
        destroySlots(a) {
            const b = super.destroySlots(a);
            if (!b.length) return b;
            if (this.l) {
                const c = en.v().j;
                Op(this, a, c);
                Ro(aq(Gp()), a)
            }
            return b
        }
    };
    var Np = _.T(26, () => {
        const a = _.vm.v();
        let b = a.find("publisher_ads");
        b || (b = new Ds, a.add(b));
        return b
    });
    wa("pubads", () => Np().m());
    var Pp = function(a) {
            var b = Np();
            if (!b.o) return !1;
            b = b.A;
            a = a.A;
            if (b.length != a.length) return !1;
            for (let c = 0; c < a.length; ++c) {
                let d = !1;
                for (let e = 0; e < b.length; ++e)
                    if (a[c] === b[e]) {
                        d = !0;
                        break
                    }
                if (!d) return !1
            }
            return !0
        },
        Qp = function(a, b = "") {
            b && !a.W && _.ya("ima_sdk_v", c => {
                a.W = !0;
                _.t(c, "v", b)
            });
            return hq(Np())
        },
        Rp = function(a, b) {
            if (Np().o && vn(_.jn.v(), b)) return a = b.j, !!a && !!_.J(a, 11);
            a.log.error(Mj());
            return !1
        },
        Lp = function(a, b) {
            const c = Np(),
                d = en.v().j;
            if (c.o) {
                if (a.C) {
                    if (!Pp(a)) {
                        a.log.H(Kj());
                        return
                    }
                    Op(c, null, d)
                }
                const e = {
                    isVideoRefresh: !0
                };
                void 0 !== a.T && (e.videoStreamCorrelator = a.T);
                a.P && (e.videoPodNumber = a.P);
                a.R && (e.videoPodPosition = a.R);
                a.C && (e.persistentRoadblocksOnly = a.C);
                a.B && (e.clearUnfilledSlots = a.B);
                a = zi(d);
                Cs(c, b, e, a)
            } else a.log.error(Lj("PubAds", "refresh"))
        },
        Mp = function(a, b) {
            const c = a.U,
                d = [];
            for (let e = 0; e < b.length; ++e) {
                const f = b[e];
                Fb(c, f) ? d.push(c[f]) : a.log.H(Nj(), a)
            }
            return d
        },
        ci = function() {
            return "https://pagead2.googlesyndication.com/pagead/show_companion_ad.js"
        },
        Sp = function(a, b) {
            const c = b && b.l.l;
            if (c && c in a.F && _.X(b) && a.o && !Rp(a, b)) {
                b.sa = a.F[c];
                const d = new _.nm(b.m(), !1, a.j());
                if (a.l.hasOwnProperty(c)) {
                    const e = a.l[c];
                    delete a.l[c];
                    _.mm(d, e)
                }
                return Lm(b, d)
            }
            return !1
        };
    var Es = class extends um {
        constructor() {
            super();
            this.V = !0;
            this.B = this.L = !1;
            this.T = 0;
            this.R = this.P = void 0;
            this.X = this.G = !1;
            this.F = {};
            this.l = {};
            this.C = !1;
            this.K = {};
            this.W = !1
        }
        D() {
            return new Kp(this, $m)
        }
        set(a, b) {
            "string" === typeof a && 0 < a.length ? (this.K[a] = b, this.log.info(Gj(a, String(b), this.j()), this, null)) : this.log.H(Hj(String(a), String(b), this.j()), this, null);
            return this
        }
        get(a) {
            return this.K[a]
        }
        display(a, b, c = "", d = "") {
            Rl(this);
            ({
                slot: a
            } = nn(a, b, c));
            a.addService(this);
            Vl(a, d);
            wn(a.l.j)
        }
        M() {
            this.V ? this.J() : this.G || (_.p.document.write('<script type="text/javascript" src="' + di() + '">\x3c/script>'), this.G = !0)
        }
        j() {
            return "companion_ads"
        }
        J() {
            if (!this.X) {
                var a = document,
                    b = ci();
                this.log.info(Oj("GPT CompanionAds"), this);
                _.Ee(a, b);
                this.X = !0
            }
        }
        Z(a, b) {
            _.Ji(a, b);
            this.log.error(Pj("GPT CompanionAds"), this)
        }
        N(a, b) {
            Sp(this, b)
        }
    };
    const Fs = Es.prototype;
    Fs.J = _.T(70, Fs.J, Fs.Z);
    const Gs = _.T(57, () => {
        const a = _.vm.v();
        let b = a.find("companion_ads");
        b || (b = new Es, a.add(b));
        return b
    });
    wa("companionAds", () => Gs().m());
    var Hs = class extends Ql {
        constructor(a, b) {
            super(a);
            this.setContent = U(72, (c, d) => {
                c = Fh(c, b);
                var e;
                if (e = c) vn(_.jn.v(), c) && "string" === typeof d && 0 < d.length && (a.l[c.l.l] = d, Is(a, c)), e = void 0;
                return e
            });
            this.set = U(559, (c, d) => {
                a.set(c, d);
                return this
            });
            this.get = U(560, c => a.get(c));
            this.getAttributeKeys = U(561, () => ub(a.B));
            this.display = U(562, (c, d, e = "", f = "") => a.display(c, d, e, f))
        }
    };
    var Is = function(a, b) {
        const c = b && b.l.l;
        c in a.l && a.o && _.X(b) && !b.I && (b.sa = a.l[c], a = new _.nm(b.m(), !1, a.j()), Lm(b, a))
    };
    var Js = class extends um {
        constructor() {
            super();
            this.B = {};
            this.l = {}
        }
        D() {
            return new Hs(this, $m)
        }
        j() {
            return "content"
        }
        set(a, b) {
            "string" === typeof a && 0 < a.length ? (this.B[a] = b, this.log.info(Gj(a, String(b), this.j()), this, null)) : this.log.H(Hj(String(a), String(b), this.j()), this, null);
            return this
        }
        get(a) {
            return this.B[a]
        }
        display(a, b, c = "", d = "") {
            Rl(this);
            ({
                slot: a
            } = nn(a, b, c));
            a.addService(this);
            Vl(a, d);
            wn(a.l.j)
        }
        M() {
            {
                const a = this.A;
                for (let b = 0; b < a.length; ++b) Is(this, a[b])
            }
        }
        N(a, b) {
            Is(this, b)
        }
    };
    var Ks = _.T(71, () => {
        const a = _.vm.v();
        let b = a.find("content");
        b || (b = new Js, a.add(b));
        return b
    });
    wa("content", () => Ks().m());
    if (window.googletag.evalScripts) window.googletag.evalScripts();
    else {
        {
            var Ls = window;
            const a = _.Rg(Ls);
            if (a) {
                {
                    var Ms = {
                        label: "2",
                        type: 9,
                        value: a
                    };
                    const b = Ls.google_js_reporting_queue = Ls.google_js_reporting_queue || [];
                    2048 > b.length && b.push(Ms)
                }
            }
        }
        wa("evalScripts", () => {
            nq(document)
        });
        oq()
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, {});