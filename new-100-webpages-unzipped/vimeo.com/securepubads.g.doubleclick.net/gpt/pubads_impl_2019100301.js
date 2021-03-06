(function(_) {
    var window = this,
        document = this.document;
    var ca, fa, ia, qa, ra, ua, va, Ba, Ea, Fa, Na, Ua, Ta, Sa, Wa, cb, ab, bb, db, eb;
    _.p = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    };
    ca = function(a) {
        return a ? a.passive && ba() ? a : a.capture || !1 : !1
    };
    fa = function() {
        return da(_.q.top, "GoogleSetNPA") || da(ea(), "GoogleSetNPA")
    };
    ia = function(a, b) {
        if (!document.getElementById("gatc:host:script")) {
            var c = document.createElement("script");
            c.id = "gatc:host:script";
            _.ha(c, a.yc);
            a.xc.appendChild(c)
        }(a = window.gatc_host) && "function" === typeof a.openConsoleTab ? b(a) : Array.isArray(a) && "function" === typeof a.push ? a.push(b) : window.gatc_host = [b]
    };
    qa = function(a) {
        var b = ja;
        var c = void 0 === c ? ka : c;
        var d = function(f) {
                Array.isArray(f) && (f = new b.j(f), a(f))
            },
            e = new la;
        ia(c, function(f) {
            if (f && "function" === typeof f.openConsoleTab) {
                var g = new ma;
                _.na(g, 1, b.l, 0);
                f.openConsoleTab(_.oa(g), d, function(h) {
                    if (!(e.j instanceof MessagePort)) {
                        var k = e.j;
                        e.j = h;
                        h = k.j.length;
                        for (var l = [], m = k.j.length - k.j.length; m < h; m++) l.push(k.get(m));
                        k = _.r(l);
                        for (h = k.next(); !h.done; h = k.next()) pa(e, h.value)
                    }
                })
            }
        });
        return e
    };
    ra = function(a) {
        a = _.t(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    ua = function(a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = _.w(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        _.sa(a);
        ta(a, function(b, c) {
            return b - c
        });
        return a
    };
    va = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };
    Ba = function() {
        wa("pubadsReady", !0);
        if (_.x(206)) {
            var a = 0;
            Object.defineProperty(_.xa(), "pubadsReady", {
                get: function() {
                    5 > a && _.ya("gpt_pubads_ready", function(b) {
                        ++a;
                        _.z(b);
                        var c = Error("pubadsReady");
                        _.A(b, "stack", Aa(c.stack, c.message))
                    }, {
                        Ea: .1
                    });
                    return !0
                },
                configurable: !0,
                enumerable: !0
            })
        }
    };
    _.aa = [];
    _.Ca = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    _.r = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: _.Ca(a)
        }
    };
    _.Da = function(a) {
        if (!(a instanceof Array)) {
            a = _.r(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    Ea = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    };
    if ("function" == typeof Object.setPrototypeOf) Fa = Object.setPrototypeOf;
    else {
        var Ha;
        a: {
            var Ia = {
                    a: !0
                },
                Ja = {};
            try {
                Ja.__proto__ = Ia;
                Ha = Ja.a;
                break a
            } catch (a) {}
            Ha = !1
        }
        Fa = Ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    _.Ka = Fa;
    _.B = function(a, b) {
        a.prototype = Ea(b.prototype);
        a.prototype.constructor = a;
        if (_.Ka)(0, _.Ka)(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Aa = b.prototype
    };
    _.La = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    };
    _.Ma = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
    Na = function(a, b) {
        this.j = a;
        (0, _.La)(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    };
    Na.prototype.toString = function() {
        return this.j
    };
    _.Oa = function() {
        function a(c) {
            if (this instanceof a) throw new TypeError("Symbol is not a constructor");
            return new Na("jscomp_symbol_" + (c || "") + "_" + b++, c)
        }
        var b = 0;
        return a
    }();
    _.q = this || self;
    _.Pa = function(a) {
        return void 0 !== a
    };
    _.Ra = function(a) {
        return "string" == typeof a
    };
    Ua = function() {
        if (null === Sa) a: {
            var a = _.q.document;
            if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ta.test(a)) {
                Sa = a;
                break a
            }
            Sa = ""
        }
        return Sa
    };
    Ta = /^[\w+/_-]+[=]{0,2}$/;
    Sa = null;
    _.Va = function() {};
    Wa = function(a) {
        a.Qa = void 0;
        a.C = function() {
            return a.Qa ? a.Qa : a.Qa = new a
        }
    };
    _.Xa = function(a) {
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
    _.D = function(a) {
        return "array" == _.Xa(a)
    };
    _.Ya = function(a) {
        var b = _.Xa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.$a = function(a) {
        return "function" == _.Xa(a)
    };
    _.E = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    cb = function(a) {
        return a[ab] || (a[ab] = ++bb)
    };
    ab = "closure_uid_" + (1E9 * Math.random() >>> 0);
    bb = 0;
    db = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    eb = function(a, b, c) {
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
    _.F = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.F = db : _.F = eb;
        return _.F.apply(null, arguments)
    };
    _.fb = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    _.gb = function() {
        return +new Date
    };
    _.I = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Aa = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var hb = {
        Rd: 0,
        zd: 1,
        Ad: 2,
        Bd: 8,
        Yd: 9,
        Sd: 16,
        xd: 17,
        wd: 24,
        Ld: 25,
        vd: 26,
        ud: 27,
        Od: 30,
        Jd: 32
    };
    var kb = [1, 2, 8],
        lb = function(a) {
            return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
        };
    _.mb = [];
    var nb;
    var pb, rb, sb, ub, wb, zb, Ab, Cb, ta, Eb, Gb, Db, Fb, Hb, Kb, Lb;
    _.ob = function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    _.J = function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };
    _.w = function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    };
    _.t = function(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    };
    pb = function(a, b) {
        var c = 0;
        _.J(a, function(d, e) {
            c = b.call(void 0, c, d, e, a)
        });
        return c
    };
    _.qb = function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    };
    rb = function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0
    };
    sb = function(a, b) {
        var c = 0;
        _.J(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    };
    ub = function(a, b) {
        b = _.tb(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    _.tb = function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    };
    _.vb = function(a, b) {
        return 0 <= _.ob(a, b)
    };
    wb = function(a, b) {
        _.vb(a, b) || a.push(b)
    };
    _.yb = function(a, b) {
        b = _.ob(a, b);
        0 <= b && _.xb(a, b)
    };
    _.xb = function(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    };
    zb = function(a, b) {
        b = _.tb(a, b, void 0);
        return 0 <= b ? (_.xb(a, b), !0) : !1
    };
    Ab = function(a) {
        return Array.prototype.concat.apply([], arguments)
    };
    _.Bb = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    Cb = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    _.sa = function(a) {
        for (var b = {}, c = 0, d = 0; d < a.length;) {
            var e = a[d++];
            var f = e;
            f = _.E(f) ? "o" + cb(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
        }
        a.length = c
    };
    ta = function(a, b) {
        a.sort(b || Db)
    };
    Eb = function(a, b) {
        for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || Db;
        ta(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (d = 0; d < a.length; d++) a[d] = c[d].value
    };
    Gb = function(a, b) {
        if (!_.Ya(a) || !_.Ya(b) || a.length != b.length) return !1;
        for (var c = a.length, d = Fb, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    Db = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    Fb = function(a, b) {
        return a === b
    };
    Hb = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    Kb = function() {
        for (var a = Ib(Jb).length, b = [], c = 0; c < a; c++) b[c] = 0;
        return b
    };
    Lb = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (_.D(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = Lb.apply(null, Cb(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    var Mb = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        Nb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        },
        Ob = function(a, b, c) {
            var d = 0,
                e = !1,
                f = [],
                g = function() {
                    d = 0;
                    e && (e = !1, h())
                },
                h = function() {
                    d = _.q.setTimeout(g, b);
                    a.apply(c, f)
                };
            return function(k) {
                f = arguments;
                d ? e = !0 : h()
            }
        };
    var Qb, Rb, Sb, Tb, Ub, Vb, Wb;
    _.Pb = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    Qb = function(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    };
    Rb = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    };
    Sb = function(a, b) {
        return null !== a && b in a
    };
    Tb = function(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    };
    Ub = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    Vb = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    Wb = function(a) {
        var b = arguments.length;
        if (1 == b && _.D(arguments[0])) return Wb.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };
    var Yb;
    _.Zb = function(a, b) {
        this.j = a === _.Xb && b || "";
        this.l = Yb
    };
    _.Zb.prototype.$a = !0;
    _.Zb.prototype.Ya = function() {
        return this.j
    };
    _.$b = function(a) {
        return a instanceof _.Zb && a.constructor === _.Zb && a.l === Yb ? a.j : "type_error:Const"
    };
    Yb = {};
    _.Xb = {};
    var cc = function(a, b, c) {
            this.j = a === ac && b || "";
            this.Ta = a === ac && c || null;
            this.l = bc
        },
        bc, ac;
    cc.prototype.$a = !0;
    cc.prototype.Ya = function() {
        return this.j.toString()
    };
    _.dc = function(a) {
        if (a instanceof cc && a.constructor === cc && a.l === bc) return a.j;
        _.Xa(a);
        return "type_error:TrustedResourceUrl"
    };
    bc = {};
    _.ec = function(a) {
        return new cc(ac, a, null)
    };
    ac = {};
    var fc, gc, hc, ic, jc, kc, lc, mc, nc, oc;
    fc = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    gc = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    hc = /&/g;
    ic = /</g;
    jc = />/g;
    kc = /"/g;
    lc = /'/g;
    mc = /\x00/g;
    nc = /[\x00&<>"']/;
    _.pc = function(a, b) {
        var c = 0;
        a = gc(String(a)).split(".");
        b = gc(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = oc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || oc(0 == f[2].length, 0 == g[2].length) || oc(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    };
    oc = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var uc, rc, qc;
    _.sc = function(a, b) {
        this.j = a === qc && b || "";
        this.l = rc
    };
    _.sc.prototype.$a = !0;
    _.sc.prototype.Ya = function() {
        return this.j.toString()
    };
    _.tc = function(a) {
        if (a instanceof _.sc && a.constructor === _.sc && a.l === rc) return a.j;
        _.Xa(a);
        return "type_error:SafeUrl"
    };
    uc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.vc = function(a) {
        if (a instanceof _.sc) return a;
        a = "object" == typeof a && a.$a ? a.Ya() : String(a);
        uc.test(a) || (a = "about:invalid#zClosurez");
        return new _.sc(qc, a)
    };
    rc = {};
    qc = {};
    _.xc = function() {
        this.j = "";
        this.l = _.wc
    };
    _.xc.prototype.$a = !0;
    _.wc = {};
    _.xc.prototype.Ya = function() {
        return this.j
    };
    _.yc = function(a) {
        var b = new _.xc;
        b.j = a;
        return b
    };
    _.zc = _.yc("");
    a: {
        var Bc = _.q.navigator;
        if (Bc) {
            var Cc = Bc.userAgent;
            if (Cc) {
                _.Ac = Cc;
                break a
            }
        }
        _.Ac = ""
    }
    var K = function(a) {
            return -1 != _.Ac.indexOf(a)
        },
        Dc = function(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
            return c
        };
    var Jc, Ic, Kc;
    _.Ec = function() {
        return K("Trident") || K("MSIE")
    };
    _.Fc = function() {
        return K("Firefox") || K("FxiOS")
    };
    Jc = function() {
        return K("Safari") && !(Ic() || K("Coast") || K("Opera") || K("Edge") || K("Edg/") || K("OPR") || _.Fc() || K("Silk") || K("Android"))
    };
    Ic = function() {
        return (K("Chrome") || K("CriOS")) && !K("Edge")
    };
    _.Lc = function() {
        function a(e) {
            e = ub(e, d);
            return c[e] || ""
        }
        var b = _.Ac;
        if (_.Ec()) return Kc(b);
        b = Dc(b);
        var c = {};
        _.J(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = _.fb(Sb, c);
        return K("Opera") ? a(["Version", "Opera"]) : K("Edge") ? a(["Edge"]) : K("Edg/") ? a(["Edg"]) : Ic() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
    };
    Kc = function(a) {
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
    _.ha = function(a, b) {
        a.src = _.dc(b);
        (b = Ua()) && a.setAttribute("nonce", b)
    };
    var Nc, Oc;
    _.Mc = function(a) {
        nc.test(a) && (-1 != a.indexOf("&") && (a = a.replace(hc, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(ic, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(jc, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(kc, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(lc, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(mc, "&#0;")));
        return a
    };
    Nc = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    Oc = function(a) {
        a = String(a);
        var b = a.indexOf("."); - 1 == b && (b = a.length);
        return Nc("0", Math.max(0, 2 - b)) + a
    };
    _.Pc = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ _.gb()).toString(36)
    };
    var Qc = function() {
        return K("iPhone") && !K("iPod") && !K("iPad")
    };
    var Rc = function(a) {
        Rc[" "](a);
        return a
    };
    Rc[" "] = _.Va;
    var Sc = function(a, b) {
            try {
                return Rc(a[b]), !0
            } catch (c) {}
            return !1
        },
        Uc = function(a, b) {
            var c = Tc;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var Xc, Yc, cd, dd, ed, fd, gd, kd, Tc;
    _.Vc = K("Opera");
    _.Wc = _.Ec();
    Xc = K("Edge");
    Yc = Xc || _.Wc;
    _.Zc = K("Gecko") && !(-1 != _.Ac.toLowerCase().indexOf("webkit") && !K("Edge")) && !(K("Trident") || K("MSIE")) && !K("Edge");
    _.$c = -1 != _.Ac.toLowerCase().indexOf("webkit") && !K("Edge");
    _.ad = _.$c && K("Mobile");
    _.bd = K("Android");
    cd = Qc();
    dd = K("iPad");
    ed = K("iPod");
    fd = function() {
        var a = _.q.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var hd = "",
            id = function() {
                var a = _.Ac;
                if (_.Zc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Xc) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Wc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (_.$c) return /WebKit\/(\S+)/.exec(a);
                if (_.Vc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();id && (hd = id ? id[1] : "");
        if (_.Wc) {
            var jd = fd();
            if (null != jd && jd > parseFloat(hd)) {
                gd = String(jd);
                break a
            }
        }
        gd = hd
    }
    kd = gd;
    Tc = {};
    _.ld = function(a) {
        return Uc(a, function() {
            return 0 <= _.pc(kd, a)
        })
    };
    _.md = _.q.document && _.Wc ? fd() : void 0;
    var nd = Ic(),
        od = Jc() && !(Qc() || K("iPad") || K("iPod"));
    var pd = {},
        qd = null,
        rd = _.Zc || _.$c && !od || _.Vc || "function" == typeof _.q.btoa,
        sd = function(a, b) {
            void 0 === b && (b = 0);
            if (!qd) {
                qd = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    pd[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === qd[h] && (qd[h] = g)
                    }
                }
            }
            b = pd[b];
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
    var td = 0,
        ud = 0;
    var vd = function() {
        this.j = []
    };
    vd.prototype.length = function() {
        return this.j.length
    };
    var wd = function(a, b) {
        for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
        a.j.push(b)
    };
    var xd = function() {
            this.l = [];
            this.j = new vd
        },
        yd = function(a, b, c) {
            if (null != c) {
                wd(a.j, 8 * b);
                a = a.j;
                var d = c;
                c = 0 > d;
                d = Math.abs(d);
                b = d >>> 0;
                d = Math.floor((d - b) / 4294967296);
                d >>>= 0;
                c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
                td = b;
                ud = d;
                c = td;
                for (b = ud; 0 < b || 127 < c;) a.j.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
                a.j.push(c)
            }
        };
    var Dd, Ed, Fd, Ld, Gd, Od, Rd, Sd, Td;
    _.Cd = function() {};
    Dd = "function" == typeof Uint8Array;
    _.Hd = function(a, b, c, d) {
        a.j = null;
        b || (b = []);
        a.D = void 0;
        a.o = -1;
        a.l = b;
        a: {
            if (b = a.l.length) {
                --b;
                var e = a.l[b];
                if (!(null === e || "object" != typeof e || _.D(e) || Dd && e instanceof Uint8Array)) {
                    a.v = b - a.o;
                    a.m = e;
                    break a
                }
            }
            a.v = Number.MAX_VALUE
        }
        a.B = {};
        if (c)
            for (b = 0; b < c.length; b++) e = c[b], e < a.v ? (e += a.o, a.l[e] = a.l[e] || Ed) : (Fd(a), a.m[e] = a.m[e] || Ed);
        if (d && d.length)
            for (b = 0; b < d.length; b++) Gd(a, d[b])
    };
    Ed = [];
    Fd = function(a) {
        var b = a.v + a.o;
        a.l[b] || (a.m = a.l[b] = {})
    };
    _.L = function(a, b) {
        if (b < a.v) {
            b += a.o;
            var c = a.l[b];
            return c === Ed ? a.l[b] = [] : c
        }
        if (a.m) return c = a.m[b], c === Ed ? a.m[b] = [] : c
    };
    _.Id = function(a, b) {
        a = _.L(a, b);
        return null == a ? a : +a
    };
    _.M = function(a, b) {
        a = _.L(a, b);
        return null == a ? a : !!a
    };
    _.Jd = function(a) {
        if (null == a || _.Ra(a)) return a;
        if (Dd && a instanceof Uint8Array) return sd(a);
        _.Xa(a);
        return null
    };
    _.Kd = function(a, b, c) {
        a = _.L(a, b);
        return null == a ? c : a
    };
    _.N = function(a, b, c) {
        b < a.v ? a.l[b + a.o] = c : (Fd(a), a.m[b] = c);
        return a
    };
    _.na = function(a, b, c, d) {
        c !== d ? _.N(a, b, c) : a.l[b + a.o] = null;
        return a
    };
    Ld = function(a, b, c) {
        _.L(a, b).push(c)
    };
    _.Md = function(a, b, c, d) {
        (c = Gd(a, c)) && c !== b && void 0 !== d && (a.j && c in a.j && (a.j[c] = void 0), _.N(a, c, void 0));
        _.N(a, b, d)
    };
    Gd = function(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e],
                g = _.L(a, f);
            null != g && (c = f, d = g, _.N(a, f, void 0))
        }
        return c ? (_.N(a, c, d), c) : 0
    };
    _.Nd = function(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            var d = _.L(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    };
    _.Pd = function(a, b, c) {
        Od(a, b, c);
        b = a.j[c];
        b == Ed && (b = a.j[c] = []);
        return b
    };
    Od = function(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            for (var d = _.L(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
    };
    _.Qd = function(a, b, c) {
        a.j || (a.j = {});
        var d = c ? _.oa(c) : c;
        a.j[b] = c;
        _.N(a, b, d)
    };
    Rd = function(a, b, c) {
        a.j || (a.j = {});
        c = c || [];
        for (var d = [], e = 0; e < c.length; e++) d[e] = _.oa(c[e]);
        a.j[b] = c;
        return _.N(a, b, d)
    };
    Sd = function(a, b, c, d) {
        Od(a, d, b);
        var e = a.j[b];
        e || (e = a.j[b] = []);
        c = c ? c : new d;
        a = _.L(a, b);
        e.push(c);
        a.push(_.oa(c))
    };
    _.oa = function(a) {
        if (a.j)
            for (var b in a.j) {
                var c = a.j[b];
                if (_.D(c))
                    for (var d = 0; d < c.length; d++) c[d] && _.oa(c[d]);
                else c && _.oa(c)
            }
        return a.l
    };
    Td = function(a) {
        if (_.D(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Td(d) : d)
            }
            return b
        }
        if (Dd && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Td(d) : d);
        return b
    };
    _.Vd = function(a) {
        _.Hd(this, a, Ud, null)
    };
    _.I(_.Vd, _.Cd);
    var Ud = [13];
    _.Vd.prototype.A = _.p(1);
    _.Xd = function(a) {
        _.Hd(this, a, Wd, null)
    };
    _.I(_.Xd, _.Cd);
    var Wd = [13];
    _.Xd.prototype.A = _.p(0);
    _.Yd = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(_.Yd, _.Cd);
    _.Zd = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(_.Zd, _.Cd);
    _.Zd.prototype.getHtml = function() {
        return _.L(this, 1)
    };
    var $d = document,
        ae = window;
    var be = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(be, _.Cd);
    var ce = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(ce, _.Cd);
    var de = function(a) {
        this.j = a || {
            cookie: ""
        }
    };
    de.prototype.set = function(a, b, c, d, e, f) {
        if ("object" === typeof c) {
            var g = c.o;
            f = c.v;
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
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(_.gb() + 1E3 * c)).toUTCString();
        this.j.cookie = a + "=" + b + e + d + c + f + (null != g ? ";samesite=" + g : "")
    };
    de.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = gc(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    var fe = function(a) {
            var b = (b = (new de(a)).get("FCCDCF", "")) ? b : null;
            if (!b) return ee(a);
            try {
                var c = new be(b ? JSON.parse(b) : null)
            } catch (d) {
                c = null
            }
            if (!c) return ee(a);
            c = _.Nd(c, ce, 3);
            if (!c) return ee(a);
            a = _.L(c, 2);
            a ? (b = _.gb(), a = b < a ? !1 : b <= a + 33696E6) : a = !1;
            return a ? _.L(c, 1) : null
        },
        ee = function(a) {
            return (a = (new de(a)).get("DATA_USE_CONSENT", "")) ? a : null
        };
    var he = function(a) {
        _.Hd(this, a, ge, null)
    };
    _.I(he, _.Cd);
    var ge = [1, 2, 3, 4];
    var ke = function(a, b, c) {
            "number" === typeof a ? (this.j = ie(a, b || 0, c || 1), je(this, c || 1)) : _.E(a) ? (this.j = ie(a.getFullYear(), a.getMonth(), a.getDate()), je(this, a.getDate())) : (this.j = new Date(_.gb()), a = this.j.getDate(), this.j.setHours(0), this.j.setMinutes(0), this.j.setSeconds(0), this.j.setMilliseconds(0), je(this, a))
        },
        ie = function(a, b, c) {
            b = new Date(a, b, c);
            0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
            return b
        };
    _.n = ke.prototype;
    _.n.getFullYear = function() {
        return this.j.getFullYear()
    };
    _.n.getMonth = function() {
        return this.j.getMonth()
    };
    _.n.getDate = function() {
        return this.j.getDate()
    };
    _.n.getTime = function() {
        return this.j.getTime()
    };
    _.n.set = function(a) {
        this.j = new Date(a.getFullYear(), a.getMonth(), a.getDate())
    };
    _.n.add = function(a) {
        if (a.A || a.o) {
            var b = this.getMonth() + a.o + 12 * a.A,
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
        a.j && (a = new Date((new Date(this.getFullYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.j), this.j.setDate(1), this.j.setFullYear(a.getFullYear()), this.j.setMonth(a.getMonth()), this.j.setDate(a.getDate()), je(this, a.getDate()))
    };
    _.n.lb = function(a) {
        return [this.getFullYear(), Oc(this.getMonth() + 1), Oc(this.getDate())].join(a ? "-" : "")
    };
    _.n.toString = function() {
        return this.lb()
    };
    var je = function(a, b) {
        a.getDate() != b && a.j.setUTCHours(a.j.getUTCHours() + (a.getDate() < b ? 1 : -1))
    };
    ke.prototype.valueOf = function() {
        return this.j.valueOf()
    };
    var le = function(a, b, c, d, e, f, g) {
        this.j = "number" === typeof a ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : new Date(a && a.getTime ? a.getTime() : _.gb())
    };
    _.I(le, ke);
    le.prototype.add = function(a) {
        ke.prototype.add.call(this, a);
        a.l && this.j.setUTCHours(this.j.getUTCHours() + a.l);
        a.m && this.j.setUTCMinutes(this.j.getUTCMinutes() + a.m);
        a.v && this.j.setUTCSeconds(this.j.getUTCSeconds() + a.v)
    };
    le.prototype.lb = function(a) {
        var b = ke.prototype.lb.call(this, a);
        return a ? b + "T" + Oc(this.j.getHours()) + ":" + Oc(this.j.getMinutes()) + ":" + Oc(this.j.getSeconds()) : b + "T" + Oc(this.j.getHours()) + Oc(this.j.getMinutes()) + Oc(this.j.getSeconds())
    };
    le.prototype.toString = function() {
        return this.lb()
    };
    var ne;
    _.me = !_.Wc || 9 <= Number(_.md);
    ne = _.Wc || _.Vc || _.$c;
    _.oe = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.oe.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.oe.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.oe.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.pe = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.pe.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    _.pe.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.pe.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.pe.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.se = function(a) {
        return a ? new _.qe(_.re(a)) : nb || (nb = new _.qe)
    };
    _.we = function(a) {
        a = a.document;
        a = _.te(a) ? a.documentElement : a.body;
        return new _.pe(a.clientWidth, a.clientHeight)
    };
    _.xe = function(a) {
        return a.scrollingElement ? a.scrollingElement : !_.$c && _.te(a) ? a.documentElement : a.body || a.documentElement
    };
    _.ye = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    _.ze = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.te = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.Ae = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    _.Be = function(a) {
        var b;
        if (ne && !(_.Wc && _.ld("9") && !_.ld("10") && _.q.SVGElement && a instanceof _.q.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.E(b) && 1 == b.nodeType ? b : null
    };
    _.re = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    _.qe = function(a) {
        this.j = a || _.q.document || document
    };
    _.qe.prototype.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    _.qe.prototype.l = _.p(25);
    _.Ce = function(a, b) {
        return _.ze(a.j, b)
    };
    var Ee = function(a) {
            De();
            return _.ec(a)
        },
        De = _.Va;
    var Fe = function() {
        return K("iPad") || K("Android") && !K("Mobile") || K("Silk")
    };
    var He, Ie, Je, Ke;
    _.Ge = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    He = function(a) {
        return a ? decodeURI(a) : a
    };
    Ie = function(a, b, c) {
        if (_.D(b))
            for (var d = 0; d < b.length; d++) Ie(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    Je = /#|$/;
    Ke = function(a, b) {
        var c = a.search(Je);
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
    var Le, Ne, ea, Me, Oe, Te, Se, Ib, Re, Ye, $e, af, cf, df, ef, ff, gf, da, hf, nf, of , pf, qf;
    Le = function(a) {
        try {
            return !!a && null != a.location.href && Sc(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Ne = function(a) {
        for (var b = _.q, c = 0; b && 40 > c++ && (!Le(b) || !a(b));) b = Me(b)
    };
    ea = function() {
        var a = _.q;
        Ne(function(b) {
            a = b;
            return !1
        });
        return a
    };
    Me = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Oe = function(a) {
        return Le(a.top) ? a.top : null
    };
    _.Pe = function(a, b) {
        var c = a.createElement("script");
        _.ha(c, Ee(b));
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    _.Qe = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    Te = function(a, b) {
        if (!Re()) {
            var c = Math.random();
            if (c < b) return c = Se(), a[Math.floor(c * a.length)]
        }
        return null
    };
    Se = function() {
        if (!_.q.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            _.q.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.O = function(a, b, c) {
        if (a)
            for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
    };
    _.Ue = function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
        return !0
    };
    Ib = function(a) {
        var b = [];
        _.O(a, function(c, d) {
            b.push(d)
        });
        return b
    };
    _.Ve = function(a) {
        var b = [];
        _.O(a, function(c) {
            b.push(c)
        });
        return b
    };
    _.We = function(a, b) {
        return Ub(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.Xe = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    Re = Mb(function() {
        return -1 != _.Ac.indexOf("Google Web Preview") || 1E-4 > Math.random()
    });
    Ye = /^(-?[0-9.]{1,30})$/;
    _.Ze = function(a, b) {
        return Ye.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b
    };
    $e = function() {
        return /^true$/.test("false")
    };
    af = function(a, b) {
        b = void 0 === b ? !0 : b;
        try {
            for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return b;
                case "http:":
                    return !1
            }
        } catch (d) {}
        return !0
    };
    _.bf = function(a) {
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    cf = {
        gd: "allow-forms",
        hd: "allow-modals",
        jd: "allow-orientation-lock",
        kd: "allow-pointer-lock",
        ld: "allow-popups",
        md: "allow-popups-to-escape-sandbox",
        nd: "allow-presentation",
        od: "allow-same-origin",
        pd: "allow-scripts",
        qd: "allow-top-navigation",
        rd: "allow-top-navigation-by-user-activation"
    };
    df = Mb(function() {
        return _.Ve(cf)
    });
    ef = function(a) {
        var b = df();
        return a.length ? _.w(b, function(c) {
            return !_.vb(a, c)
        }) : b
    };
    ff = function() {
        var a = _.ze(document, "IFRAME").sandbox,
            b = a && a.supports;
        if (!b) return {};
        var c = {};
        _.J(df(), function(d) {
            b.call(a, d) && (c[d] = !0)
        });
        return c
    };
    gf = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    da = function(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    };
    hf = function() {
        for (var a = _.q, b = 0; 40 > b; ++b) {
            if (da(a, "__cmpLocator")) return a;
            if (!(a = Me(a))) break
        }
        return null
    };
    _.jf = Mb(function() {
        return !Fe() && (K("iPod") || K("iPhone") || K("Android") || K("IEMobile")) ? 2 : Fe() ? 1 : 0
    });
    _.kf = Object.assign || function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    _.lf = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    _.mf = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.t(a, parseFloat)
    };
    nf = function(a) {
        _.q.console && _.q.console.warn && _.q.console.warn(a)
    }; of = [];
    pf = function() {
        var a = of ; of = [];
        a = _.r(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    qf = function(a) { of .push(a);
        1 == of .length && (window.Promise ? Promise.resolve().then(pf) : window.setImmediate ? setImmediate(pf) : setTimeout(pf, 0))
    };
    _.rf = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52))
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    var Jb = {
        Kd: 0,
        Ed: 1,
        Dd: 2,
        Cd: 3,
        Pd: 4,
        Qd: 5,
        Hd: 6,
        Fd: 7
    };
    var ba;
    ba = Mb(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.q.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.Q = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ca(d)), !0) : !1
    };
    _.sf = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ca(d)), !0) : !1
    };
    _.tf = function(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    };
    var uf = !1,
        vf = function(a) {
            var b = document;
            try {
                var c = fe(b);
                var d = c ? new he(c ? JSON.parse(c) : null) : null
            } catch (e) {
                d = null
            }
            if (!d) return 0;
            if (_.M(d, 7)) return 4;
            if (6048E5 < _.gb() - (_.L(d, 5) || 0)) return 0;
            if (a) {
                if (_.vb(_.L(d, 3), a)) return 2;
                if (_.vb(_.L(d, 4), a)) return 3
            }
            return 1
        },
        wf = Mb(function() {
            var a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
            try {
                return a.test(_.q.top.location.href)
            } catch (b) {
                return a.test(_.q.location.href)
            }
        }),
        xf = {},
        yf = null,
        zf = null,
        Bf = function() {
            var a = Af();
            a && _.q.setTimeout && .01 > Math.random() && _.q.setTimeout(function() {
                _.q.__cmp && _.q.__cmp("getConsentData", null, function(b) {
                    b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=iabcmp&vcd=" + JSON.stringify(b);
                    _.tf(_.q, b)
                })
            }, 1E4);
            return a
        },
        Af = function() {
            if (_.q.__cmp) {
                var a = !1;
                try {
                    _.q.__cmp("ping", null, function() {
                        a = !0
                    })
                } catch (b) {}
                if (a) return !0
            }
            zf = hf();
            return !!zf
        },
        Cf = 1,
        Df = function() {
            if (!_.q.__cmp && zf) {
                try {
                    if (zf.__cmp) {
                        _.q.__cmp = zf.__cmp;
                        return
                    }
                } catch (a) {}
                _.q.__cmp = function(a, b, c) {
                    var d = "google_cmp_callback_" + Cf;
                    Cf++;
                    a = {
                        __cmpCall: {
                            command: a,
                            parameter: b,
                            callId: d
                        }
                    };
                    xf[d] = c;
                    zf.postMessage(a, "*")
                };
                _.Q(_.q, "message", function(a) {
                    a = a.data;
                    if ("string" == typeof a) try {
                        a = JSON.parse(a)
                    } catch (b) {}(a = a.__cmpReturn) && "function" == typeof xf[a.callId] && (xf[a.callId](a.returnValue, a.success), delete xf[a.callId])
                })
            }
        },
        Ef = function(a, b) {
            var c = void 0 === b ? function() {} : b,
                d = fa(),
                e = Kb();
            e[0] = a ? 1 : 2;
            e[6] = 1;
            e[5] = d ? 1 : 2;
            var f = !1;
            b = function(k, l) {
                l && k && (f = !!k.gdprAppliesGlobally)
            };
            _.q.__cmp && _.q.__cmp("ping", null, b);
            if (f || a) {
                var g = function(k) {
                    k && (k.gdprApplies ? (e[6] = 8, yf = {
                        nb: 5,
                        cb: d,
                        eb: !1,
                        Za: e.join("."),
                        Fb: k.consentData,
                        Qb: k.googleVendorIds
                    }, c(yf)) : (yf = {
                        nb: 5,
                        cb: d,
                        eb: !1,
                        Za: e.join(".")
                    }, c(yf)))
                };
                a = ea().GoogleMostRecentCmpConsentData;
                var h = !!a;
                a && g(a);
                _.q.__cmp && _.q.__cmp("getConsentData", null, function(k, l) {
                    l && (ea().GoogleMostRecentCmpConsentData = k, h || g(k))
                })
            } else yf = {
                nb: 5,
                cb: d,
                eb: !1,
                Za: e.join(".")
            }, c(yf)
        },
        Ff = function(a, b) {
            var c = Kb();
            wf() && (a = !0);
            c[0] = a ? 1 : 2;
            var d = fa();
            c[5] = d ? 1 : 2;
            if (uf && Bf()) return Df(), Ef(a), yf || (c[6] = 7, yf = {
                nb: 5,
                cb: d,
                eb: !0,
                Za: c.join("."),
                Fb: "NCS"
            }), yf;
            c[4] = 2;
            var e = !!_.q.googlefc || da(_.q.top, "googlefcPresent");
            c[1] = e ? 1 : 2;
            var f = vf(b);
            0 != f ? b = {
                Pb: f,
                Rb: 3
            } : (f = _.q.top, b = {
                Pb: da(f, "googlefcInactive") ? 4 : b && da(f, "googlefcPA-" + b) ? 2 : da(f, "googlefcNPA") ? 3 : 0,
                Rb: 2
            });
            f = b;
            b = f.Pb;
            c[f.Rb] = b;
            if (!d) a: switch (b) {
                case 2:
                case 4:
                    d = !1;
                    break a;
                case 3:
                    d = !0;
                    break a;
                case 1:
                    d = a;
                    break a;
                default:
                    d = (void 0 === e ? !1 : e) && a
            }
            return {
                nb: b,
                cb: d,
                eb: 0 == b && a && e,
                Za: c.join(".")
            }
        },
        Gf = function(a, b, c) {
            if (uf && Bf()) Df(), Ef(a, c);
            else {
                var d = Ff(a, b);
                d.eb ? _.q.setTimeout(function() {
                    Gf(a, b, c)
                }, 1E3) : c(d)
            }
        };
    _.Hf = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    _.Hf.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.Hf.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.Hf.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.If = function(a, b) {
        var c = _.re(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    _.Jf = function(a, b) {
        return _.If(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    _.Kf = function(a) {
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
        _.Wc && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    };
    _.Lf = function(a) {
        var b = _.re(a),
            c = new _.oe(0, 0);
        var d = b ? _.re(b) : document;
        d = !_.Wc || 9 <= Number(_.md) || _.te(_.se(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = _.Kf(a);
        d = _.se(b).j;
        b = _.xe(d);
        d = d.parentWindow || d.defaultView;
        b = _.Wc && _.ld("10") && d.pageYOffset != b.scrollTop ? new _.oe(b.scrollLeft, b.scrollTop) : new _.oe(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    _.Mf = function(a) {
        a = _.Kf(a);
        return new _.oe(a.left, a.top)
    };
    _.Nf = function(a, b) {
        if ("none" != _.Jf(b, "display")) return a(b);
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
    _.Of = function(a) {
        if (!a.getBoundingClientRect) return null;
        a = _.Nf(_.Kf, a);
        return new _.pe(a.right - a.left, a.bottom - a.top)
    };
    _.Pf = function(a, b) {
        a.style.display = b ? "" : "none"
    };
    var Qf = $e();
    var Rf = function(a) {
            this.j = a
        },
        Sf = new Rf(1),
        Tf = new Rf(2),
        Uf = new Rf(3),
        Vf = new Rf(5),
        Wf = new Rf(6),
        Xf = new Rf(7),
        Yf = new Rf(8),
        Zf = new Rf(14),
        $f = function(a, b, c) {
            return b[a.j] || c || function() {}
        };
    var ag = function() {
        this.j = function() {
            return !1
        };
        this.l = function() {
            return 0
        };
        this.m = function() {
            return ""
        };
        this.o = function() {
            return []
        }
    };
    Wa(ag);
    _.x = function(a) {
        var b = void 0 === b ? !1 : b;
        return ag.C().j(a, b)
    };
    _.bg = function(a, b) {
        b = void 0 === b ? 0 : b;
        return ag.C().l(a, b)
    };
    _.cg = function(a) {
        var b = void 0 === b ? "" : b;
        return ag.C().m(a, b)
    };
    _.dg = function(a) {
        var b = void 0 === b ? [] : b;
        return ag.C().o(a, b)
    };
    var eg = {
            "AMP-CAROUSEL": "ac",
            "AMP-FX-FLYING-CARPET": "fc",
            "AMP-LIGHTBOX": "lb",
            "AMP-STICKY-AD": "sa"
        },
        fg = function(a) {
            a = void 0 === a ? _.q : a;
            var b = a.context || a.AMP_CONTEXT_DATA;
            if (!b) try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
            try {
                if (b && b.pageViewId && b.canonicalUrl) return b
            } catch (c) {}
            return null
        },
        gg = function() {
            var a = fg();
            return a && a.mode ? +a.mode.version || null : null
        },
        hg = function() {
            var a = fg();
            if (a && a.container) {
                a = a.container.split(",");
                for (var b = [], c = 0; c < a.length; c++) b.push(eg[a[c]] || "x");
                return b.join()
            }
            return null
        },
        ig = function() {
            var a = fg();
            return a && a.initialIntersection
        },
        jg = function() {
            var a = fg();
            var b;
            return (a = a && (b = a.initialLayoutRect) && "number" === typeof b.top && "number" === typeof b.left && "number" === typeof b.width && "number" === typeof b.height ? new _.Hf(b.left, b.top, b.width, b.height) : null) ? new _.oe(a.left, a.top) : (b = ig()) && _.E(b.rootBounds) ? new _.oe(b.rootBounds.left + b.boundingClientRect.left, b.rootBounds.top + b.boundingClientRect.top) : null
        },
        kg = function(a) {
            return (a = a || fg()) ? Le(a.master) ? a.master : null : null
        },
        lg = !!fg() && _.q != _.q.top,
        mg = function(a) {
            a = fg(a);
            if (!a || !_.E(a.data) || "string" !== typeof a.data.type) return null;
            a = a.data.type.toLowerCase();
            return "doubleclick" == a || "adsense" == a ? null : a
        };
    var tg, ug, vg, wg, xg;
    tg = function() {
        var a = void 0 === a ? ae : a;
        try {
            return a.history.length
        } catch (b) {
            return 0
        }
    };
    ug = function() {
        var a = void 0 === a ? ae : a;
        return "http:" === a.location.protocol
    };
    vg = function(a) {
        a = kg(fg(a)) || a;
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1;
        return a.google_unique_id
    };
    wg = !!window.google_async_iframe_id;
    xg = wg && window.parent || window;
    _.yg = function() {
        if (wg && !Le(xg)) {
            var a = "." + $d.domain;
            try {
                for (; 2 < a.split(".").length && !Le(xg);) $d.domain = a = a.substr(a.indexOf(".") + 1), xg = window.parent
            } catch (b) {}
            Le(xg) || (xg = window)
        }
        return xg
    };
    _.ec(_.$b(new _.Zb(_.Xb, "//fonts.googleapis.com/css")));
    var zg = function() {
        var a, b = window.ActiveXObject;
        if (navigator.plugins && navigator.mimeTypes.length) {
            if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
        } else {
            if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                var c = 3;
                for (a = 1; a;) try {
                    a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1)), c++
                } catch (d) {
                    a = null
                }
                return c.toString()
            }
            if (_.Ec()) {
                a = null;
                try {
                    a = new b("ShockwaveFlash.ShockwaveFlash.7")
                } catch (d) {
                    c = 0;
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash.6"), c = 6, a.AllowScriptAccess = "always"
                    } catch (e) {
                        if (6 === c) return c.toString()
                    }
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash")
                    } catch (e) {}
                }
                if (a) return c = a.GetVariable("$version").split(" ")[1], c.replace(/,/g, ".")
            }
        }
        return "0"
    };
    var Ag = function(a) {
            return !!a && a.top == a
        },
        Bg = function(a, b, c, d) {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (Ag(a)) return !1;
            var e = b.documentElement;
            if (c && d) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        Cg = function() {
            var a = _.yg();
            if (a != a.top)
                for (; a && a != a.top && Le(a) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; a = a.parent);
        };
    var Eg = function(a, b) {
            var c = b || Dg;
            return function() {
                var d = this || _.q;
                d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
                var e = c(cb(a), arguments);
                return d.hasOwnProperty(e) ? d[e] : d[e] = a.apply(this, arguments)
            }
        },
        Dg = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\x0B")
        };
    var Fg = function() {
        this.l = 0;
        this.j = []
    };
    Fg.prototype.add = function(a) {
        var b = this.j[this.l];
        this.j[this.l] = a;
        this.l = (this.l + 1) % 100;
        return b
    };
    Fg.prototype.get = function(a) {
        a = Gg(this, a);
        return this.j[a]
    };
    Fg.prototype.set = function(a, b) {
        a = Gg(this, a);
        this.j[a] = b
    };
    var Gg = function(a, b) {
        if (b >= a.j.length) throw Error("Out of bounds exception");
        return 100 > a.j.length ? b : (a.l + Number(b)) % 100
    };
    var Hg = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i, /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i, /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i],
        Ig = function(a) {
            return _.qb(Hg, function(b) {
                return b.test(a)
            })
        },
        Jg = function(a) {
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
        Kg = function(a) {
            if (!a.length) return 0;
            for (var b = [], c = 0; 33 >= c; c++) b[c] = 0;
            for (c = a.length - 1; 0 <= c; c--) {
                var d = Jg(a[c]);
                0 <= d && (b[33 - d] = 1)
            }
            return parseInt(b.join(""), 2)
        };
    _.Lg = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Mg = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
        Og = function(a) {
            a = (this.l = a || _.q) || _.q;
            this.m = a.top == a ? 1 : Le(a.top) ? 2 : 3;
            3 != this.m && Date.parse(_.q.top.document.lastModified);
            this.j = Ng(this.l)
        },
        Pg = function(a, b) {
            for (var c = 0, d = (a = a.j[Math.max(a.j.length - 1, 0)].url || null) && He(a.match(_.Ge)[3] || null), e = Math.min(b.length, 26), f = 0; f < e; f++) a = null != b[f] && He(b[f].match(_.Ge)[3] || null) || "", c *= 4, a && (d && a == d ? c += 3 : Ig(b[f]) ? c += 2 : a && 0 <= Jg(a) && (c += 1));
            return c
        },
        Ng = function(a) {
            var b = a || _.q,
                c = [],
                d = null;
            do {
                var e = b;
                if (Le(e)) {
                    var f = e.location.href;
                    d = e.document && e.document.referrer || null
                } else f = d, d = null;
                c.push(new Qg(f || "", e));
                try {
                    b = e.parent
                } catch (g) {
                    b = null
                }
            } while (b && e != b);
            e = 0;
            for (b = c.length - 1; e <= b; ++e) c[e].depth = b - e;
            e = a || _.q;
            if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == c.length - 1)
                for (a = 1; a < c.length; ++a) b = c[a], b.url || (b.url = e.location.ancestorOrigins[a - 1] || "", b.Tb = !0);
            return c
        },
        Rg = function(a, b) {
            this.j = a;
            this.l = b
        },
        Qg = function(a, b, c) {
            this.url = a;
            this.pb = b;
            this.Tb = !!c;
            this.depth = null
        };
    var Sg = function() {
            this.m = "&";
            this.o = !1;
            this.l = {};
            this.v = 0;
            this.j = []
        },
        Tg = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        Vg = function(a, b, c, d, e) {
            var f = [];
            _.O(a, function(g, h) {
                (g = Ug(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        Ug = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(Ug(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Vg(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        Wg = function(a, b, c, d) {
            a.j.push(b);
            a.l[b] = Tg(c, d)
        },
        Yg = function(a, b, c) {
            b = b + "//pagead2.googlesyndication.com" + c;
            var d = Xg(a) - c.length;
            if (0 > d) return "";
            a.j.sort(function(m, u) {
                return m - u
            });
            c = null;
            for (var e = "", f = 0; f < a.j.length; f++)
                for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
                    if (!d) {
                        c = null == c ? g : c;
                        break
                    }
                    var l = Vg(h[k], a.m, ",$");
                    if (l) {
                        l = e + l;
                        if (d >= l.length) {
                            d -= l.length;
                            b += l;
                            e = a.m;
                            break
                        }
                        a.o && (e = d, l[e - 1] == a.m && --e, b += l.substr(0, e), e = a.m, d = 0);
                        c = null == c ? g : c
                    }
                }
            a = "";
            null != c && (a = e + "trn=" + c);
            return b + a
        },
        Xg = function(a) {
            var b = 1,
                c;
            for (c in a.l) b = c.length > b ? c.length : b;
            return 3997 - b - a.m.length - 1
        };
    var bh;
    _.Zg = function(a, b) {
        this.m = a;
        this.l = b;
        this.j = Math.random()
    };
    bh = function() {
        var a = $g,
            b = ah.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    };
    _.ch = function(a, b, c, d, e) {
        if ((d ? a.j : Math.random()) < (e || a.l)) try {
            if (c instanceof Sg) var f = c;
            else f = new Sg, _.O(c, function(h, k) {
                var l = f,
                    m = l.v++;
                h = Tg(k, h);
                l.j.push(m);
                l.l[m] = h
            });
            var g = Yg(f, a.m, "/pagead/gen_204?id=" + b + "&");
            g && _.tf(_.q, g)
        } catch (h) {}
    };
    var dh = null,
        eh = function() {
            if (null === dh) {
                dh = "";
                try {
                    var a = "";
                    try {
                        a = _.q.top.location.hash
                    } catch (c) {
                        a = _.q.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        dh = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return dh
        };
    var hh;
    _.fh = function() {
        var a = _.q.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : _.gb()
    };
    _.gh = function(a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    hh = function(a) {
        var b = _.q.performance;
        return b && b.timing && b.timing[a] || 0
    };
    var ih = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e
    };
    var jh, kh, lh, mh, oh, ph;
    jh = _.q.performance;
    kh = !!(jh && jh.mark && jh.measure && jh.clearMarks);
    lh = Mb(function() {
        var a;
        if (a = kh) a = eh(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    mh = function(a, b) {
        this.events = [];
        this.l = b || _.q;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.j = lh() || (null != c ? c : Math.random() < a)
    };
    oh = function(a) {
        a.j = !1;
        a.events != a.l.google_js_reporting_queue && (lh() && _.J(a.events, _.nh), a.events.length = 0)
    };
    _.nh = function(a) {
        a && jh && lh() && (jh.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), jh.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    ph = function(a, b, c, d, e, f) {
        a.j && (b = new ih(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.events.length || a.events.push(b))
    };
    mh.prototype.start = function(a, b) {
        if (!this.j) return null;
        var c = _.gh() || _.fh();
        a = new ih(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        jh && lh() && jh.mark(b);
        return a
    };
    _.qh = function(a, b) {
        if (a.j && "number" === typeof b.value) {
            var c = _.gh() || _.fh();
            b.duration = c - b.value;
            c = "goog_" + b.label + "_" + b.uniqueId + "_end";
            jh && lh() && jh.mark(c);
            !a.j || 2048 < a.events.length || a.events.push(b)
        }
    };
    _.rh = function(a, b, c) {
        var d = _.gh();
        d && ph(a, b, 9, d, 0, c)
    };
    var Aa;
    _.th = function() {
        var a = sh;
        this.o = $g;
        this.l = null;
        this.v = this.jb;
        this.j = void 0 === a ? null : a;
        this.m = !1
    };
    _.n = _.th.prototype;
    _.n.Zb = function(a) {
        this.l = a
    };
    _.n.$b = function(a) {
        this.m = a
    };
    _.n.Ja = _.p(2);
    _.n.fa = _.p(3);
    _.n.jb = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Sg;
            f.o = !0;
            Wg(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new _.Lg(b, {
                message: _.uh(b)
            }));
            b.msg && Wg(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.l) try {
                this.l(g)
            } catch (y) {}
            if (d) try {
                d(g)
            } catch (y) {}
            b = [g];
            f.j.push(3);
            f.l[3] = b;
            var h = Ng(),
                k = new Qg(_.q.location.href, _.q, !1);
            b = null;
            var l = h.length - 1;
            for (d = l; 0 <= d; --d) {
                var m = h[d];
                !b && Mg.test(m.url) && (b = m);
                if (m.url && !m.Tb) {
                    k = m;
                    break
                }
            }
            m = null;
            var u = h.length && h[l].url;
            0 != k.depth && u && (m = h[l]);
            var v = new Rg(k, m);
            v.l && Wg(f, 4, "top", v.l.url || "");
            Wg(f, 5, "url", v.j.url || "");
            _.ch(this.o, e, f, this.m, c)
        } catch (y) {
            try {
                _.ch(this.o, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: _.uh(y),
                    url: v && v.j.url
                }, this.m, c)
            } catch (H) {}
        }
        return !0
    };
    _.uh = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = Aa(a.stack, b));
        return b
    };
    Aa = function(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (d) {
            return b
        }
    };
    var wh;
    _.vh = function() {
        this.l = function() {};
        this.m = function() {
            return []
        };
        this.j = function() {
            return []
        }
    };
    wh = function(a, b) {
        a.l = $f(Sf, b, function() {});
        a.m = $f(Tf, b, function() {
            return []
        });
        a.j = $f(Uf, b, function() {
            return []
        })
    };
    Wa(_.vh);
    _.xh = function(a) {
        return _.vh.C().m(a)
    };
    var yh, Ah;
    yh = function(a) {
        return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
    };
    _.zh = function(a) {
        try {
            var b = yh(a.document);
            return new _.pe(b.clientWidth, b.clientHeight)
        } catch (c) {
            return new _.pe(-12245933, -12245933)
        }
    };
    Ah = function(a, b) {
        b = void 0 === b ? _.q : b;
        a = a.scrollingElement || yh(a);
        return new _.oe(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    };
    _.Bh = function(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var Ch = function(a, b, c) {
            var d = !1,
                e = function(f) {
                    return function(g) {
                        d || (d = !0, f(g))
                    }
                };
            b = e(b);
            c = e(c);
            try {
                a(b, c)
            } catch (f) {
                c(f)
            }
        },
        Dh = function(a) {
            this.l = 0;
            this.j = [];
            Ch(a, this.A.bind(this), this.o.bind(this))
        };
    Dh.prototype.v = function(a) {
        window.Promise ? Promise.resolve().then(a) : setTimeout(a, 0)
    };
    var Eh = function(a, b) {
        0 === a.l ? a.j.push(b) : a.v(function() {
            var c = b.Jc,
                d = b.Kc;
            if (c = 1 === a.l ? c : d) {
                try {
                    var e = c(a.m)
                } catch (f) {
                    b.reject(f);
                    return
                }
                b.resolve(e)
            } else e = b.resolve, c = b.reject, 1 === a.l ? e(a.m) : c(a.m)
        })
    };
    Dh.prototype.A = function(a) {
        try {
            if (a === this) throw new TypeError;
            if (a instanceof Dh || _.E(a) && _.$a(a.then)) Ch(a.then.bind(a), this.A.bind(this), this.o.bind(this));
            else
                for (this.l = 1, this.m = a; this.j.length;) Eh(this, this.j.shift())
        } catch (b) {
            this.o(b)
        }
    };
    Dh.prototype.o = function(a) {
        this.l = 2;
        for (this.m = a; this.j.length;) Eh(this, this.j.shift())
    };
    Dh.prototype.then = function(a, b) {
        var c = this;
        return new this.constructor(function(d, e) {
            Eh(c, {
                Jc: a,
                Kc: b,
                resolve: d,
                reject: e
            })
        })
    };
    var Fh = !1,
        Gh = 0,
        Hh = function(a, b, c) {
            if (!Fh) {
                Fh = !0;
                var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
                if (gf(d)) {
                    var e, f, g, h, k = a.requestIdleCallback;
                    k && (h = function(m) {
                        f = m.timeRemaining();
                        g = 0
                    });
                    var l = function(m) {
                        Fh && (b.push(m - e), e = m, k && (c.push(f || 0), g || (f = 0, g = k(h))), d(l))
                    };
                    d(function(m) {
                        e = m;
                        k && (g = k(h));
                        d(l)
                    })
                }
            }
        },
        Ih = function() {
            Fh = !1
        },
        Jh = function() {
            Gh && _.q.clearTimeout(Gh);
            Gh = Fh ? _.q.setTimeout(Ih, 1E4) : 0
        };
    var Kh = function(a) {
        return a._google_rum_ns_ = a._google_rum_ns_ || {}
    };
    var ma = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(ma, _.Cd);
    var la = function() {
            this.j = new Fg
        },
        pa = function(a, b) {
            a.j instanceof MessagePort ? a.j.postMessage(_.oa(b)) : a.j.add(b)
        };
    var ka = {
        xc: document.body,
        yc: _.ec(_.$b(new _.Zb(_.Xb, "https://www.googletagservices.com/console/host/host.js")))
    };
    var Lh = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(Lh, _.Cd);
    var Nh = function(a) {
        _.Hd(this, a, Mh, null)
    };
    _.I(Nh, _.Cd);
    var Mh = [9],
        Oh = function(a, b) {
            return _.N(a, 12, b)
        },
        Ph = function(a, b) {
            return _.N(a, 8, b)
        },
        Qh = function(a, b) {
            return _.N(a, 13, b)
        },
        Rh = function(a, b) {
            return Rd(a, 9, b)
        };
    var Sh = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(Sh, _.Cd);
    var ja = new function(a, b, c) {
        this.j = b;
        this.l = c
    }(Nh, Sh, 3);
    var Th = null,
        Uh = function() {
            return Th ? Th : gf(window.Map) ? Th = new Map : null
        },
        Vh = {},
        Wh = function() {},
        Xh = function(a, b) {
            if (a instanceof b) return a;
            if (a instanceof Wh) {
                var c = Uh();
                a = c ? c.get(a) : Vh[cb(a)];
                if (a instanceof b) return a
            }
            return null
        };
    var wa, Yh;
    _.xa = function() {
        return _.q.googletag || (_.q.googletag = {})
    };
    wa = function(a, b) {
        var c = _.xa();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    Yh = function(a, b) {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
    };
    var Zh = {
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
        },
        bi, ci, di, ei;
    Zh[6] = af(window);
    Zh[49] = (new Date).getTime();
    Zh[36] = $e();
    Zh[148] = Qf;
    Zh[221] = $e();
    Zh[204] = _.Ze("-1", -1);
    var $h = function() {
        for (var a in Zh) this[a] = Zh[a]
    };
    Wa($h);
    _.ai = function(a) {
        return $h.C()[a]
    };
    bi = _.xa();
    ci = $h.C();
    di = bi._vars_;
    for (ei in di) ci[ei] = di[ei];
    bi._vars_ = ci;
    var gi = function(a) {
        _.Hd(this, a, fi, null)
    };
    _.I(gi, _.Cd);
    var fi = [2],
        hi = function(a, b) {
            return _.N(a, 1, b)
        },
        ii = function(a, b) {
            return _.N(a, 2, b || [])
        };
    _.ji = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(_.ji, _.Cd);
    _.ki = function(a, b) {
        _.N(a, 2, b)
    };
    var li = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(li, _.Cd);
    var ni = function(a) {
        _.Hd(this, a, mi, null)
    };
    _.I(ni, _.Cd);
    var mi = [3, 4, 5, 6, 8, 9];
    ni.prototype.getAdUnitPath = function() {
        return _.L(this, 1)
    };
    ni.prototype.na = function() {
        return _.L(this, 15)
    };
    var qi = function(a) {
        _.Hd(this, a, oi, pi)
    };
    _.I(qi, _.Cd);
    var oi = [1, 2, 3, 7, 14],
        pi = [
            [8, 9]
        ],
        ri = function(a, b) {
            Rd(a, 2, b)
        };
    _.si = function() {
        var a = _.x(85) || _.x(84);
        _.q.google_measure_js_timing = a || _.q.google_measure_js_timing;
        mh.call(this, a ? 1 : 0, _.q);
        this.m = 0
    };
    _.B(_.si, mh);
    Wa(_.si);
    var ti, vi, xi, yi, zi, Ai, Bi, Di, Ei, Fi, Gi, Hi, Ji, Ki, Li, Mi, Pi, Qi, Ri;
    ti = /\bfpla=(\w*)/;
    vi = function(a, b) {
        var c = a.Ia;
        if ("" != c) return c;
        a = b[_.R(a)];
        return null != a ? ui(a) : null
    };
    xi = function() {
        return wi().replace(/[\W_]/g, function(a) {
            return "&#" + a.charCodeAt() + ";"
        })
    };
    yi = function(a) {
        var b = a;
        "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
        return b
    };
    zi = /\+/g;
    Ai = function() {
        return "https://pagead2.googlesyndication.com"
    };
    Bi = function(a) {
        var b = a.document;
        return Ag(a) ? b.URL : b.referrer
    };
    Di = function(a, b) {
        b = void 0 === b ? null : b;
        var c = 0,
            d = [];
        a && (d.push(a.getAdUnitPath()), d.push(_.Ci(a)), d.push(a.U.j));
        if (b) {
            a = [];
            for (var e = 0; b && 25 > e; b = b.parentNode, ++e) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && d.push(b)
        }
        0 < d.length && (c = _.Xe(d.join(":")));
        return c.toString()
    };
    Ei = function(a) {
        try {
            var b = window.top,
                c = new _.oe(0, 0),
                d = _.ye(_.re(a));
            if (Sc(d, "parent")) {
                do {
                    var e = d == b ? _.Lf(a) : _.Mf(a);
                    c.x += e.x;
                    c.y += e.y
                } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent))
            }
            var f = c
        } catch (g) {
            f = new _.oe(-12245933, -12245933)
        }
        return f
    };
    Fi = function(a, b) {
        if (null == b) return a;
        b = a.indexOf("google_preview=", a.lastIndexOf("?"));
        var c = a.indexOf("&", b); - 1 == c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Gi = Mb(function() {
        return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest
    });
    Hi = Mb(function() {
        return !!_.bf(_.q.location.href)
    });
    _.Ii = Math.floor(Math.random() * Math.pow(2, 53));
    Ji = function(a) {
        return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    Ki = function(a) {
        var b = a.split("/");
        return "/" == a.charAt(0) && 2 <= b.length ? b[1] : "/" != a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    Li = function(a) {
        var b = [];
        b = _.t(a, function(c) {
            return Ki(c.getAdUnitPath())
        });
        _.sa(b);
        return b
    };
    Mi = function(a) {
        return a ? (a = _.Of(a)) && a.floor() : null
    };
    _.Ni = function(a) {
        return !!a && !!_.Nd(a, _.Yd, 43) && !!_.L(_.Nd(a, _.Yd, 43), 1)
    };
    _.Oi = function(a) {
        return a ? _.x(54) ? 1 : _.x(71) && _.x(65) ? 2 : 0 : 0
    };
    Pi = Mb(function() {
        a: {
            try {
                var a = "";
                try {
                    a = _.q.top.location.hash
                } catch (d) {
                    a = _.q.location.hash
                }
                var b = a && a.match(ti);
                var c = b ? b[1] : null;
                break a
            } catch (d) {}
            c = null
        }
        return c
    });
    Qi = Mb(function() {
        return qa(function() {})
    });
    Ri = function(a) {
        return _.x(229) ? {
            W: new a.constructor(Td(_.oa(a)))
        } : {
            W: a
        }
    };
    _.Si = function() {
        return "2019100301"
    };
    wa("getVersion", _.Si);
    var Vi;
    _.Ti = function(a, b, c) {
        b = void 0 === b ? "https://pagead2.googlesyndication.com" : b;
        if (null == c || 0 > c || 1 < c) c = _.ai(23);
        this.l = Math.random();
        this.o = this.l < c;
        this.m = a;
        this.j = b + "/pagead/gen_204?id=" + encodeURIComponent(a)
    };
    _.A = function(a, b, c) {
        "string" != typeof c && (c = String(c));
        /^\w+$/.test(b) && c && (a.j += "&" + b + "=" + encodeURIComponent(c))
    };
    _.Ui = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? !1 : c;
        b = void 0 === b ? null : b;
        var d = a.o;
        b && 0 <= b && (d = ((void 0 === c ? 0 : c) ? a.l : Math.random()) < b);
        (a = (d || Hi()) && a.m && a.j ? a.j : null) && _.tf(window, a)
    };
    Vi = function(a, b) {
        b.length && (3 >= b.length ? _.A(a, "nw_id", b.join()) : (b = Cb(b, 0, 3), b.push("__extra__"), _.A(a, "nw_id", b.join())))
    };
    _.z = function(a, b) {
        b = void 0 === b ? null : b;
        var c = void 0 === c ? document : c;
        _.A(a, "vrg", _.Si());
        b ? (Vi(a, Wi(b)), _.A(a, "nslots", Xi(b).toString())) : (Vi(a, Li(_.Yi)), _.A(a, "nslots", _.Yi.length.toString()));
        b = _.vh.C().j();
        b.length && _.A(a, "eid", b.join());
        _.A(a, "pub_url", c.URL)
    };
    _.ya = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = c.ee || "https://pagead2.googlesyndication.com";
        c = c.Ea;
        if (void 0 === c || 0 > c || 1 < c) c = _.ai(23);
        Math.random() < c && (a = new _.Ti(a, d), b(a), _.Ui(a, 1, !0))
    };
    _.Yi = [];
    var Zi, $i, T, dj, cj;
    Zi = _.ai(38);
    $i = function(a, b) {
        a = {
            methodId: a
        };
        b.name && (a.name = b.name);
        b.message && (a.message = b.message.substring(0, 512));
        b.fileName && (a.fileName = b.fileName);
        b.lineNumber && (a.lineNumber = b.lineNumber);
        b.stack && (a.stack = Aa(b.stack, ""));
        return a
    };
    _.bj = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        _.aj(a, b);
        if (!c) throw b;
    };
    _.aj = function(a, b, c) {
        c = void 0 === c ? Zi : c;
        if (!b.isReported) try {
            b.isReported = !0;
            var d = $i(a, b),
                e = new _.Ti("gpt_exception");
            try {
                _.z(e)
            } catch (f) {}
            _.O(d, function(f, g) {
                return _.A(e, g, f)
            });
            _.Ui(e, c)
        } catch (f) {}
    };
    T = function(a, b, c) {
        return _.S(a, b, c, _.x(144))
    };
    _.S = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function(e) {
            for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
            g = !1;
            var h = null,
                k = c || _.bj,
                l = _.si.C();
            try {
                var m = l && _.x(85);
                m && (h = l.start(a.toString(), 3));
                var u = b.apply(this, f);
                g = !0;
                m && _.qh(l, h)
            } catch (y) {
                g ? _.aj(110, y) : u = k.call(this, a, y), _.nh(h)
            }
            if (d) try {
                var v = Error();
                _.ya("gpt_api_usage", function(y) {
                    _.A(y, "methodId", a);
                    _.A(y, "args", f.length);
                    _.A(y, "stack", Aa(v.stack, v.message));
                    _.z(y)
                }, {
                    Ea: 1
                })
            } catch (y) {}
            return u
        }
    };
    dj = function() {
        var a, b = window;
        if (a = _.x(86)) b._google_rum_ns_ ? (a = Kh(b), a = !(!a.raf || !a.ric)) : a = !1, a = !a;
        if (a) {
            var c = Kh(b);
            c.raf = c.raf || [];
            c.ric = c.ric || [];
            a = c.raf;
            c = c.ric;
            Hh(b, a, c);
            Yh(b, cj);
            b.setTimeout(Ih, 6E4)
        }
    };
    cj = function() {
        Jh()
    };
    var jj = function(a) {
        this.push = T(76, function(b) {
            return a.push.apply(a, arguments)
        })
    };
    _.B(jj, Wh);
    var kj = function(a, b) {
        b = void 0 === b ? [] : b;
        this.l = a;
        this.j = b
    };
    kj.prototype.getMessageId = function() {
        return this.l
    };
    kj.prototype.getMessageArgs = function() {
        return this.j
    };
    var lj = function(a, b, c, d, e) {
        this.l = new Date;
        this.A = d && d.l();
        this.v = c && c.l();
        this.o = a;
        this.m = b;
        this.j = e
    };
    _.n = lj.prototype;
    _.n.getSlot = function() {
        return this.A
    };
    _.n.getService = function() {
        return this.v
    };
    _.n.getLevel = function() {
        return this.o
    };
    _.n.getTimestamp = function() {
        return this.l
    };
    _.n.getMessage = function() {
        return this.m
    };
    _.n.getReference = function() {
        return this.j
    };
    _.n.toString = function() {
        var a = this.l.toTimeString() + ": " + mj[this.o] + ": " + this.m;
        this.j && (a += " Duration: " + (this.l.getTime() - this.j.getTimestamp().getTime()) + "ms.");
        return a
    };
    var mj = ["Debug", "Info", "Warning", "Error", "Fatal"];
    var nj = null,
        oj = !1,
        pj = !1,
        qj = function() {
            var a = void 0 === a ? _.q : a;
            if (!pj) {
                var b = "https:" + _.ai(228) + "loader.js";
                _.Pe(a.document, b);
                pj = !0
            }
        },
        rj = function() {
            var a = void 0 === a ? _.q : a;
            if (_.xa()._pubconsole_disable_) return !1;
            var b = a.document;
            b = void 0 === b ? _.q.document : b;
            b = b.cookie.split("google_pubconsole=");
            if (b = 2 == b.length ? b[1].split(";")[0] : "")
                if (b = b.split("|"), 0 < b.length && ("1" == b[0] || "0" == b[0])) return !0;
            a = Bi(a);
            return null !== Ke(a, "google_debug") || null !== Ke(a, "dfpdeb") || null !== Ke(a, "google_console") || null !== Ke(a, "google_force_console") || null !== Ke(a, "googfc")
        },
        tj = _.S(94, function() {
            rj() && qj();
            _.Q(_.q, "message", sj)
        }),
        uj = _.S(93, function() {
            _.xa()._pubconsole_disable_ = !0
        }),
        sj = function(a) {
            a.source == _.q && "gpt_open_pubconsole" == a.data.type && (a = a.data.slotDomId) && vj(a)
        },
        vj = function(a) {
            a = void 0 === a ? "" : a;
            _.xa && _.xa().console ? _.xa().console.openConsole(a) : (a && (nj = a), oj = !0, qj())
        };
    "complete" === _.q.document.readyState ? tj() : Yh(_.q, tj);
    wa("disablePublisherConsole", uj);
    wa("onPubConsoleJsLoad", function() {
        oj && (_.xa().console.openConsole(nj), nj = null, oj = !1)
    });
    wa("openConsole", vj);
    var wj = function() {
            this.j = []
        },
        xj = function(a, b) {
            return _.w(a.j, function(c) {
                return c.getService() === b
            })
        },
        yj = function(a, b) {
            return _.w(a.j, function(c) {
                return c.getSlot() === b
            })
        },
        zj = function(a, b) {
            return _.w(a.j, function(c) {
                return c.getLevel() >= b
            })
        };
    wj.prototype.log = function(a, b, c, d, e) {
        a = new lj(a, b, void 0 === c ? null : c, void 0 === d ? null : d, void 0 === e ? null : e);
        _.x(47) && !rj() || this.j.push(a);
        return a
    };
    wj.prototype.info = function(a, b, c, d) {
        return this.log(1, a, b, c, d)
    };
    wj.prototype.H = function(a, b, c, d) {
        return this.log(2, a, b, c, d)
    };
    wj.prototype.error = function(a, b, c, d) {
        return this.log(3, a, b, c, d)
    };
    Wa(wj);
    var Aj;
    Aj = Mb(function() {
        var a = _.dg(5),
            b = String;
        var c = void 0 === c ? window : c;
        c = He(c.location.href.match(_.Ge)[3] || null);
        a = _.ob(a, b(c ? _.Xe(c) : null));
        a = _.dg(6)[a] || "";
        var d = void 0 === d ? window.document : d;
        a && d.head && (b = document.createElement("meta"), b.httpEquiv = "origin-trial", b.content = a, d.head.appendChild(b))
    });
    _.Bj = function(a) {
        var b = void 0 === b ? navigator : b;
        Aj();
        b = "scheduling" in b && "isInputPending" in b.scheduling && b.scheduling.isInputPending();
        var c = _.bg(31);
        b && Math.random() < c && setTimeout(function() {
            _.ya("gpt_input_pending", function(d) {
                _.z(d);
                _.A(d, "ctx", a);
                _.A(d, "corr", _.Ii);
                var e = Error("inputPending");
                _.A(d, "stack", Aa(e.stack, e.message))
            }, {
                Ea: 1
            })
        }, 1);
        return b
    };
    var Cj = function() {};
    Cj.prototype.l = function() {
        var a = this.wa(),
            b = Uh();
        b ? b.set(a, this) : Vh[cb(a)] = this;
        return a
    };
    var Dj = Cj.prototype;
    Dj.l = Eg(Dj.l);
    var U, Ej, V, Fj, Gj, Hj, Jj, Kj, Lj, Mj, Nj, Oj, Pj, Qj, Rj, Sj, Tj, Uj, Vj, Wj, Xj, Yj, Zj, ak, bk, ck, dk, ek, fk, gk, hk, ik, jk, kk, lk, mk, nk, ok, pk, qk, rk, sk, tk, uk, vk, wk, xk, yk, zk, Ak, Bk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Kk, Lk, Mk, Nk, Ok, Pk, Qk, Rk, Sk, Tk, Uk, Vk, Wk, Xk, Yk, Zk, $k, al, bl, cl, dl, el, fl, gl, hl;
    U = function(a) {
        return function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return new kj(a, _.Da(c).concat())
        }
    };
    Ej = function(a) {
        return "[" + _.t(a, function(b) {
            return "string" === typeof b ? "'" + b + "'" : _.D(b) ? Ej(b) : String(b)
        }).join(", ") + "]"
    };
    V = function(a, b) {
        b = Ej(b);
        b = b.substring(1, b.length - 1);
        return new kj(96, [a, b])
    };
    Fj = U(1);
    Gj = U(2);
    Hj = U(3);
    _.Ij = U(4);
    Jj = U(5);
    Kj = U(6);
    Lj = U(8);
    Mj = U(12);
    Nj = U(14);
    Oj = U(16);
    Pj = U(17);
    Qj = U(19);
    Rj = U(20);
    Sj = U(21);
    Tj = U(22);
    Uj = U(23);
    Vj = U(26);
    Wj = U(27);
    Xj = U(28);
    Yj = U(30);
    Zj = U(31);
    ak = U(34);
    bk = U(35);
    ck = U(36);
    dk = U(37);
    ek = U(38);
    fk = U(40);
    gk = U(42);
    hk = U(43);
    ik = U(44);
    jk = U(45);
    kk = U(46);
    lk = U(47);
    mk = U(48);
    nk = U(49);
    ok = U(50);
    pk = U(57);
    qk = U(58);
    rk = U(59);
    sk = U(60);
    tk = U(61);
    uk = U(62);
    vk = U(63);
    wk = U(64);
    xk = U(65);
    yk = U(66);
    zk = U(68);
    Ak = U(69);
    Bk = U(70);
    Ck = U(71);
    Dk = U(74);
    Ek = U(75);
    Fk = U(78);
    Gk = U(79);
    Hk = U(80);
    Ik = U(82);
    Jk = U(84);
    Kk = U(85);
    Lk = U(87);
    Mk = U(88);
    Nk = U(90);
    Ok = U(92);
    Pk = U(93);
    Qk = U(94);
    Rk = U(95);
    Sk = U(97);
    Tk = U(99);
    Uk = U(100);
    Vk = U(101);
    Wk = U(102);
    Xk = U(103);
    Yk = U(104);
    Zk = U(105);
    $k = U(106);
    al = U(107);
    bl = U(108);
    cl = U(109);
    dl = U(110);
    el = U(111);
    fl = U(113);
    gl = U(114);
    hl = U(115);
    var jl, ll;
    _.il = function(a) {
        Dh.call(this, a)
    };
    _.B(_.il, Dh);
    _.il.prototype.v = function(a) {
        _.x(102) ? Dh.prototype.v.call(this, a) : a()
    };
    jl = function() {
        return new _.il(function(a) {
            return void a(void 0)
        })
    };
    ll = function(a) {
        var b = new _.kl,
            c = b.j,
            d = b.resolve,
            e = b.reject;
        b = a.length;
        if (!b) return d([]), c;
        var f = [],
            g = b;
        _.J(a, function(h, k) {
            try {
                h.then(function(l) {
                    f[k] = l;
                    0 === --g && d(f)
                }, e)
            } catch (l) {
                e(l)
            }
        });
        return c
    };
    _.kl = function() {
        var a = this;
        this.j = new _.il(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var ml = function() {
        this.A = this.m = 0;
        this.j = null
    };
    _.B(ml, Cj);
    ml.prototype.wa = function() {
        return new jj(this)
    };
    var nl = function() {
        var a = Xh(_.xa().cmd, ml);
        return a.j ? a.j.j : jl()
    };
    ml.prototype.push = function(a) {
        var b = wj.C();
        try {
            _.x(99) && (this.j = this.j || new _.kl);
            for (var c = 0; c < arguments.length; ++c) try {
                _.$a(arguments[c]) && (arguments[c](), this.m++)
            } catch (d) {
                this.A++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(Yj(String(d.message)))
            }
            b.info(Zj(String(this.m), String(this.A)));
            return this.m
        } finally {
            _.x(99) && this.j && (this.j.resolve(), this.j = null)
        }
    };
    var pl = function() {
        ml.call(this);
        var a = this;
        this.v = [];
        this.B = !1;
        this.o = 0;
        this.D = _.S(635, function() {
            a.o = 0;
            ol(a)
        })
    };
    _.B(pl, ml);
    var ql = function(a) {
            return !a.B && !!a.v.length && (_.x(170) && _.Bj(1) || _.x(171))
        },
        rl = function(a) {
            a.o || (a.o = setTimeout(a.D, _.bg(23)))
        },
        ol = function(a) {
            if (a.o) {
                if (!a.B) return;
                clearTimeout(a.o);
                a.o = 0
            }
            var b = wj.C();
            try {
                _.x(99) && (a.j = a.j || new _.kl);
                for (; a.v.length;) {
                    var c = a.v.shift();
                    try {
                        c(), a.m++
                    } catch (d) {
                        a.A++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(Yj(String(d.message)))
                    }
                    if (ql(a)) {
                        rl(a);
                        break
                    }
                }
                b.info(Zj(String(a.m), String(a.A)))
            } finally {
                _.x(99) && a.j && (a.j.resolve(), a.j = null)
            }
        },
        sl = function(a, b) {
            a.v = _.Da(a.v).concat(_.Da(_.w(b, _.$a)));
            _.x(173) && ql(a) ? rl(a) : ol(a)
        };
    pl.prototype.push = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        this.B = _.x(172);
        sl(this, b);
        return this.m
    };
    var tl = function() {
        if (_.x(176)) {
            var a = _.xa().cmd;
            if (!a || _.D(a)) {
                var b = new pl;
                _.xa().cmd = b.l();
                a && 0 < a.length && sl(b, a)
            }
        } else if (a = _.xa().cmd, !a || _.D(a)) b = new ml, _.xa().cmd = b.l(), a && 0 < a.length && b.push.apply(b, a)
    };
    tl = _.S(77, tl);
    _.ul = function(a, b, c) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return (void 0 === c ? 0 : c) ? (new _.pe(b.innerWidth, b.innerHeight)).round() : _.we(b || window).round()
        } catch (d) {
            return new _.pe(-12245933, -12245933)
        }
    };
    _.vl = function() {
        this.G = this.G;
        this.M = this.M
    };
    _.vl.prototype.G = !1;
    _.vl.prototype.Wa = function() {
        this.G || (this.G = !0, this.l())
    };
    _.vl.prototype.l = function() {
        if (this.M)
            for (; this.M.length;) this.M.shift()()
    };
    _.wl = function(a) {
        a && "function" == typeof a.Wa && a.Wa()
    };
    _.xl = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    var yl = function(a, b) {
        this.l = a;
        this.j = b
    };
    var zl = !1,
        Al = "",
        Bl = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (zl = !0, a.description)) {
                Al = Bl(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                zl = !0;
                Al = "2.0.0.11";
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], zl = !(!a || !a.enabledPlugin))) {
            Al = Bl(a.enabledPlugin.description);
            return
        }
        if ("undefined" != typeof ActiveXObject) {
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                zl = !0;
                Al = Bl(b.GetVariable("$version"));
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                zl = !0;
                Al = "6.0.21";
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), zl = !0, Al = Bl(b.GetVariable("$version"))
            } catch (c) {}
        }
    })();
    _.Cl = zl;
    _.Dl = Al;
    var El, Gl;
    El = {};
    _.Fl = (El[3] = "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js", El);
    Gl = {};
    _.Hl = (Gl[3] = "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js", Gl);
    var Jl, Kl;
    _.Il = function(a, b) {
        b = void 0 === b ? {} : b;
        this.root = b.root ? b.root : null;
        this.B = b.rootMargin ? ra(b.rootMargin) : [{
            value: 0,
            type: "px"
        }, {
            value: 0,
            type: "px"
        }, {
            value: 0,
            type: "px"
        }, {
            value: 0,
            type: "px"
        }];
        this.rootMargin = _.t(this.B, function(c) {
            return "" + c.value + c.type
        }).join(" ");
        this.G = ua(b.threshold);
        this.D = a;
        this.j = [];
        this.o = [];
        this.v = !1;
        this.l = null;
        this.m = Ob(this.A, 100, this)
    };
    Jl = function(a) {
        if (a.root) var b = va(a.root);
        else {
            var c = _.we(window);
            b = {
                top: 0,
                right: c.width,
                bottom: c.height,
                left: 0,
                width: c.width,
                height: c.height
            }
        }
        a = _.t(a.B, function(d, e) {
            return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
        });
        return {
            top: b.top - a[0],
            right: b.right + a[1],
            bottom: b.bottom + a[2],
            left: b.left - a[3],
            width: b.width + a[1] + a[3],
            height: b.height + a[0] + a[2]
        }
    };
    Kl = function(a, b, c) {
        if (!b || b.isIntersecting != c.isIntersecting) return !0;
        var d = b.intersectionRatio,
            e = c.intersectionRatio;
        return d == e ? !1 : _.qb(a.G, function(f) {
            return f < d != f < e
        })
    };
    _.Il.prototype.A = function() {
        var a = this,
            b = Jl(this);
        _.J(this.j, function(c) {
            var d = c.target,
                e = va(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                m = h - l,
                u = k - g;
            g = 0 <= m && 0 <= u ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: m,
                height: u
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            l = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0
            };
            Kl(a, c.Mb, d) && a.o.push(d);
            c.Mb = d
        });
        this.o.length && this.D(Ll(this), this)
    };
    _.Il.prototype.observe = function(a) {
        _.qb(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            Mb: null
        }), this.A(), this.v || (this.v = !0, _.Q(_.q, "scroll", this.m), _.Q(_.q, "resize", this.m), _.q.MutationObserver && !this.l && (this.l = new MutationObserver(this.m), this.l.observe(_.q.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    _.Il.prototype.unobserve = function(a) {
        this.j = _.w(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    _.Il.prototype.disconnect = function() {
        this.v = !1;
        this.j.length = 0;
        _.sf(_.q, "scroll", this.m);
        _.sf(_.q, "resize", this.m);
        this.l && (this.l.disconnect(), this.l = null)
    };
    var Ll = function(a) {
        var b = _.Da(a.o).concat();
        a.o.length = 0;
        return b
    };
    var Nl;
    Nl = function() {
        return 0 != _.Ml(document)
    };
    _.Ml = function(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    _.Ol = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    _.Pl = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    var Rl, Ql;
    Rl = function() {
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
        this.floatingAdsStacking = new Ql
    };
    _.Sl = function(a) {
        a.google_reactive_ads_global_state || (a.google_reactive_ads_global_state = new Rl);
        return a.google_reactive_ads_global_state
    };
    Ql = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var Tl, Xl, Yl, Zl;
    Tl = 728 * 1.38;
    _.Ul = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.Wl = function(a) {
        var b = _.Vl(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    Xl = function(a) {
        return (a = _.Vl(a).clientWidth) ? a > (void 0 === Tl ? 420 : Tl) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    Yl = function(a) {
        return (a = _.Wl(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.Vl = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    Zl = function(a, b) {
        return a.adCount ? 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) && 27 != b && 26 != b ? 1 <= a : !1 : !1
    };
    _.$l = function(a, b, c, d) {
        var e = c;
        e && (e = "?" + e);
        b = "//tpc.googlesyndication.com/safeframe/" + b + "/html/container.html" + e;
        e = a;
        for (var f = 0; e != e.parent;) f++, e = e.parent;
        (e = f) && (b += (c ? "&" : "?") + "n=" + e);
        (c = d) || (c = af(a, !1));
        return (c ? "https:" : "http:") + b
    };
    _.am = function(a) {
        for (var b = a.j.length - 1; 0 <= b; b--) {
            var c = a.j[b];
            c.l ? (c.m.style.removeProperty(c.j), c.m.style.setProperty(c.j, String(c.o), c.v)) : c.m.style[c.j] = c.o
        }
        a.j.length = 0
    };
    var cm, dm, em;
    _.bm = function(a) {
        a.Ra() || (2 == a.I && (_.am(a.m), a.I = 0), window.clearTimeout(a.L), a.L = -1, a.B = 3, a.l && (a.l.Wa(), a.l = null), a.G && a.j ? a.G.unobserve(a.j) : (_.sf(window, "resize", a.K), _.sf(window, "scroll", a.K)), a.j && a.A == _.Be(a.j) && a.A.removeChild(a.j), a.j = null, a.A = null, a.G && (a.G.disconnect(), a.G = null), a.status = 100)
    };
    cm = ["allow-modals", "allow-orientation-lock", "allow-presentation"];
    dm = ["allow-top-navigation"];
    em = ["allow-same-origin"];
    _.fm = ef(_.Da(cm).concat(_.Da(dm)));
    ef(_.Da(cm).concat(_.Da(em)));
    ef(_.Da(cm).concat(_.Da(dm), _.Da(em)));
    var gm = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(gm, _.Cd);
    gm.prototype.getTime = function() {
        return _.L(this, 4)
    };
    var hm;
    hm = function(a) {
        this.v = a.time;
        this.B = a.Dc;
        this.A = a.Cc;
        this.j = this.l = -1;
        this.o = this.m = 0
    };
    _.im = function(a, b) {
        a.B && a.A ? (a.o += b - a.v, 1E3 <= a.o && (a.l = b), 0 < a.j || (a.m += b - a.v)) : a.o = 0;
        a.v = b
    };
    var jm, km, lm, mm, qm;
    jm = [.05, .1, .2, .5];
    km = [0, .5, 1];
    lm = function(a) {
        a = Oe(a);
        if (!a) return -1;
        a = _.zh(a);
        return -12245933 == a.width || -12245933 == a.height ? -1 : a.width * a.height
    };
    mm = function(a, b) {
        return 0 > a ? [] : _.t(jm, function(c) {
            return Math.min(a / b * c, 1)
        })
    };
    _.nm = function() {
        return Math.round(performance.now())
    };
    qm = function(a) {
        this.l = a.pb;
        this.m = a.Xa;
        this.G = a.Zc;
        this.A = null;
        this.v = a.oa;
        this.B = !1;
        this.o = om(this);
        this.F = a.Uc || !1;
        this.D = a.Tc || !1;
        this.j = null;
        this.D && pm(this)
    };
    qm.prototype.unobserve = function() {
        try {
            rm(this, _.nm(), 0, 0, 0, !1)
        } catch (a) {
            this.v && this.v(a)
        }
        this.o && this.o.unobserve(this.m);
        this.B = !1;
        this.j = null
    };
    var sm = function(a, b) {
            if (a.o && (null != a.A && a.unobserve(), a.A = b, a.o.observe(a.m), a.B = !0, a.D)) {
                b = _.nm();
                var c = a.m.getBoundingClientRect(),
                    d = c.width * c.height;
                a: {
                    var e = 0;
                    if (!_.Pl(a.l.document)) {
                        e = Oe(a.l);
                        if (!e) {
                            c = -1;
                            break a
                        }
                        var f = yh(e.document);
                        e = Math.min(f.clientWidth, c.left + c.width) - Math.max(0, c.left);
                        c = Math.min(f.clientHeight, c.top + c.height) - Math.max(0, c.top);
                        e = 0 < e && 0 < c ? e * c : 0
                    }
                    c = e
                }
                a.j = new hm({
                    time: b,
                    Dc: 0 < d ? c / d > (242500 < d ? .3 : .5) : !1,
                    Cc: 1 == _.Ml(a.l.document)
                })
            }
        },
        om = function(a) {
            var b = a.m.offsetWidth * a.m.offsetHeight,
                c = lm(a.l);
            b = _.Da(km).concat(_.Da(mm(c, b)));
            _.sa(b);
            return _.q.IntersectionObserver ? new _.q.IntersectionObserver(function(d) {
                return tm(a, d)
            }, {
                threshold: b
            }) : new _.Il(function(d) {
                return tm(a, d)
            }, {
                threshold: b
            })
        },
        tm = function(a, b) {
            try {
                var c = lm(a.l);
                _.J(b, function(d) {
                    var e = Math.round(d.time),
                        f = d.boundingClientRect.width * d.boundingClientRect.height,
                        g = d.intersectionRect.width * d.intersectionRect.height;
                    d = d.isIntersecting;
                    if (a.D && a.j) {
                        var h = a.j,
                            k = 0 < f ? g / f > (242500 < f ? .3 : .5) : !1;
                        _.im(h, e);
                        h.B = k
                    }
                    a.F && rm(a, e, f, g, c, d)
                })
            } catch (d) {
                a.v && a.v(d)
            }
        },
        rm = function(a, b, c, d, e, f) {
            if (null == a.A) throw Error("Not Attached.");
            var g = new gm;
            c = _.N(g, 1, c);
            d = _.N(c, 2, d);
            e = _.N(d, 3, e);
            b = _.N(e, 4, b);
            b = _.N(b, 5, f);
            f = new xd;
            e = _.L(b, 4);
            null != e && null != e && yd(f, 4, e);
            e = _.L(b, 2);
            null != e && null != e && yd(f, 2, e);
            e = _.L(b, 1);
            null != e && null != e && yd(f, 1, e);
            e = _.L(b, 3);
            null != e && null != e && yd(f, 3, e);
            e = _.L(b, 5);
            null != e && (b = e, null != b && (wd(f.j, 40), f.j.j.push(b ? 1 : 0)));
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
            f = sd(b, 4);
            ph(a.G, "1", 10, f, void 0, a.A)
        },
        pm = function(a) {
            var b = _.Ol(a.l.document);
            b && _.Q(a.l.document, b, function() {
                if (a.j) {
                    var c = a.j,
                        d = 1 == _.Ml(a.l.document);
                    _.im(c, _.nm());
                    c.A = d
                }
            })
        };
    var um = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_content_section = "region", a.adsense_cpm = "cpm", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_font_size = "fs", a.adsense_hints = "hints", a.adsense_host = "host", a.adsense_host_channel = "h_ch", a.adsense_host_tier_id = "ht_id", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_relevant_content = "contents", a.adsense_targeting = "targeting", a.adsense_targeting_types = "targeting", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_ch = "cust_ch", a.demographic_gender = "cust_gender", a.demographic_interests = "cust_interests", a.demographic_job = "cust_job", a.demographic_l = "cust_l", a.demographic_lh = "cust_lh", a.demographic_u_url = "cust_u_url", a.demographic_unique_id = "cust_id", a.document_language = "hl", a.geography_override_city = "gcs", a.geography_override_country = "gl", a.google_content_recommendation_ad_positions = "ad_pos", a.matched_content_columns_num = "cr_col", a.matched_content_rows_num = "cr_row", a.matched_content_ui_type = "crui", a.matched_content_use_square_imgs = "cr_sq_img", a
    };
    var wm = function(a) {
        var b = this;
        this.addEventListener = T(86, function(c, d) {
            a.addEventListener(c, d);
            return b
        });
        this.getSlots = T(573, function() {
            return _.t(a.o, function(c) {
                return c.l()
            })
        });
        this.getSlotIdMap = T(574, function() {
            var c = a.K,
                d = {},
                e;
            for (e in c) d[e] = c[e].l();
            return d
        });
        this.enable = T(87, function() {
            return vm(a)
        }, _.aj);
        this.getName = T(575, function() {
            return a.aa()
        })
    };
    _.B(wm, Wh);
    var Hm = function(a, b, c) {
        var d = this,
            e = wj.C();
        this.set = T(40, function(f, g) {
            if ("string" !== typeof f || !g || void 0 === um()[f]) return e.H(V("Slot.set", [f, g]), null, a), d;
            var h = ub(_.Pd(c, gi, 3), function(k) {
                return _.L(k, 1) === f
            });
            h ? ii(h, [g]) : (h = hi(new gi, f), Ld(h, 2, g), Sd(c, 3, h, gi));
            a.set(f, g);
            return d
        });
        this.get = T(41, function(f) {
            if ("string" !== typeof f) return e.H(V("Slot.get", [f]), null, a), null;
            var g = ub(_.Pd(c, gi, 3), function(h) {
                return _.L(h, 1) === f
            });
            return (g = g && _.L(g, 2)) ? g[0] : null
        });
        this.getAttributeKeys = T(42, function() {
            return _.t(_.Pd(c, gi, 3), function(f) {
                return _.L(f, 1)
            })
        });
        this.addService = T(43, function(f) {
            f = Xh(f, b);
            a.addService(f);
            return d
        });
        this.defineSizeMapping = T(44, function(f) {
            if (!_.D(f)) throw Error("Size mapping has to be an array");
            f = _.t(f, xm);
            a.La = new ym(f);
            return d
        }, function(f, g) {
            _.aj(f, g);
            nf("Incorrect usage of googletag.Slot defineSizeMapping: " + g.message);
            return d
        });
        this.setClickUrl = T(45, function(f) {
            zm(a, f);
            return d
        });
        this.setCategoryExclusion = T(46, function(f) {
            "string" !== typeof f || fc(null == f ? "" : String(f)) ? a.m.H(V("Slot.setCategoryExclusion", [f]), null, a) : (wb(a.Z, f), a.m.info(Nj(f), null, a));
            return d
        });
        this.clearCategoryExclusions = T(47, function() {
            a.m.info(Oj(), null, a);
            a.Z = [];
            return d
        });
        this.getCategoryExclusions = T(48, function() {
            return _.Bb(a.Z)
        });
        this.setTargeting = T(49, function(f, g) {
            Am(a, f, g);
            return d
        });
        this.clearTargeting = T(50, function(f) {
            "undefined" != typeof f ? "string" !== typeof f || fc(null == f ? "" : String(f)) ? a.m.H(V("Slot.clearTargeting", [f]), null, a) : a.v[f] ? (delete a.v[f], a.m.info(Xk(f, a.getAdUnitPath()), null, a)) : a.m.H(Wk(f, a.getAdUnitPath()), null, a) : (a.m.info(Qj(), null, a), a.v = {});
            return d
        });
        this.getTargeting = T(51, function(f) {
            "string" !== typeof f ? (a.m.H(V("Slot.getTargeting", [f]), null, a), f = []) : f = a.v.hasOwnProperty(f) ? _.Bb(a.v[f]) : [];
            return f
        });
        this.getTargetingKeys = T(52, function() {
            return Ib(a.v)
        });
        this.setCollapseEmptyDiv = T(53, function(f, g) {
            Bm(a, f, g);
            return d
        });
        this.getAdUnitPath = T(54, function() {
            return a.getAdUnitPath()
        });
        this.getSlotElementId = T(598, function() {
            return a.U.j
        });
        this.setForceSafeFrame = T(55, function(f) {
            Cm(a, f);
            return d
        });
        this.setSafeFrameConfig = T(56, function(f) {
            if (f && _.E(f)) {
                if (f = Dm(f)) a.Ha = f
            } else a.m.error(V("Slot.setSafeFrameConfig", [f]), null, a);
            return d
        });
        this.getResponseInformation = T(355, function() {
            return a.ka
        });
        this.getName = T(170, function() {
            window.console && console.error && console.error("getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.");
            var f = new _.Ti("slot_get_name");
            _.z(f);
            _.Ui(f);
            return a.L
        });
        this.getSlotId = T(579, function() {
            return a.U.l()
        });
        this.getServices = T(580, function() {
            return _.t(a.M, function(f) {
                return f.l()
            })
        });
        this.getSizes = T(581, function(f, g) {
            return Em(a, f, g)
        });
        this.getClickUrl = T(582, function() {
            return a.O
        });
        this.getTargetingMap = T(583, function() {
            return Vb(a.v)
        });
        this.getOutOfPage = T(584, function() {
            return a.getOutOfPage()
        });
        this.getCollapseEmptyDiv = T(585, function() {
            return a.pa
        });
        this.getDivStartsCollapsed = T(586, function() {
            return a.$
        });
        this.getContentUrl = T(587, function() {
            return _.Fm(a)
        });
        this.getFirstLook = T(588, function() {
            nf("The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        this.getEscapedQemQueryId = T(591, function() {
            return _.Gm(a)
        });
        this.getHtml = T(592, function() {
            return a.getHtml()
        })
    };
    _.B(Hm, Wh);
    var Im = function(a) {
        this.getId = T(593, function() {
            return a.m
        });
        this.getAdUnitPath = T(594, function() {
            return a.getAdUnitPath()
        });
        this.getName = T(595, function() {
            var b = new _.Ti("slot_id_get_name");
            _.z(b);
            _.Ui(b);
            return a.o
        });
        this.toString = T(596, function() {
            return a.toString()
        });
        this.getDomId = T(597, function() {
            return a.j
        })
    };
    _.B(Im, Wh);
    var Jm = function(a) {
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
        Km = Mb(function() {
            var a = {
                REWARDED: 3
            };
            _.x(35) && (a.TOP_ANCHOR = 1, a.BOTTOM_ANCHOR = 2, a.VIGNETTE = 4);
            return a
        }),
        Lm = function() {
            var a = _.xa();
            if (!a.enums) {
                var b = Km();
                b && (a.enums = {
                    OutOfPageFormat: b
                })
            }
        };
    var Mm, Nm, Dm;
    Mm = "";
    Nm = null;
    _.Om = function() {
        Mm || (Mm = _.cg(2) || "1-0-35");
        return Mm
    };
    _.Pm = function() {
        if (null == Nm) {
            for (var a = _.dg(1), b = [], c = 0; c < a.length; c += 2) Ie(a[c], a[c + 1], b);
            Nm = b.join("&")
        }
        return Nm
    };
    Dm = function(a) {
        var b = wj.C(),
            c = {};
        if (!a || !_.E(a)) return null;
        var d = !1;
        _.O(a, function(e, f) {
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? c.allowOverlayExpansion = a.allowOverlayExpansion : (b.error(Vk("allowOverlayExpansion", String(a.allowOverlayExpansion))), d = !0);
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? c.allowPushExpansion = a.allowPushExpansion : (b.error(Vk("allowPushExpansion", String(a.allowPushExpansion))), d = !0);
                    break;
                case "sandbox":
                    !0 === e ? c.sandbox = a.sandbox : (b.error(Vk("sandbox", String(a.sandbox))), d = !0);
                    break;
                default:
                    b.H(Uk(f))
            }
        });
        return d ? null : c
    };
    var Qm, Um;
    Qm = {
        Id: "impressionViewable",
        Td: "rewardedSlotCanceled",
        Ud: "rewardedSlotClosed",
        Vd: "rewardedSlotCompleted",
        Wd: "rewardedSlotGranted",
        Xd: "rewardedSlotReady",
        Zd: "slotAdded",
        $d: "slotOnload",
        ae: "slotRenderEnded",
        be: "slotRequested",
        ce: "slotResponseReceived",
        de: "slotVisibilityChanged"
    };
    _.Rm = function(a, b) {
        this.slot = a;
        this.serviceName = b
    };
    _.Sm = function(a, b, c) {
        _.Rm.call(this, a, c);
        this.isEmpty = b;
        this.slotContentChanged = !0;
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
        this.isBackfill = !1;
        this.companyIds = this.yieldGroupIds = null
    };
    _.B(_.Sm, _.Rm);
    _.Tm = function(a, b) {
        a.size = b;
        return a
    };
    Um = function(a, b, c) {
        _.Rm.call(this, a, b);
        this.inViewPercentage = c
    };
    _.B(Um, _.Rm);
    var Vm = function() {
        _.Rm.apply(this, arguments)
    };
    _.B(Vm, _.Rm);
    var Wm = function() {
        _.Rm.apply(this, arguments)
    };
    _.B(Wm, _.Rm);
    var Xm = function() {
        _.Rm.apply(this, arguments)
    };
    _.B(Xm, _.Rm);
    var Ym = function() {
        this.o = [];
        this.K = {};
        this.m = !1;
        this.G = {};
        this.log = wj.C();
        this.log.info(bk(this.aa()), this)
    };
    _.B(Ym, Cj);
    Ym.prototype.wa = function() {
        return new wm(this)
    };
    Ym.prototype.getVersion = function() {
        return "unversioned"
    };
    var vm = function(a) {
        a.m || (a.wb(), a.m = !0)
    };
    Ym.prototype.Eb = function(a) {
        this.o.push(a);
        var b = new Wm(a.l(), this.aa());
        Zm(this, "slotAdded", b);
        this.K[_.R(a)] = a;
        this.log.info(fk(this.aa(), a.getAdUnitPath()), this, a)
    };
    Ym.prototype.destroySlots = function(a) {
        var b = this.o,
            c = _.w(b, function(d) {
                return _.vb(a, d)
            });
        _.J(c, function(d) {
            _.yb(b, d)
        });
        return c
    };
    var $m = function(a, b) {
        _.ya("gpt_callback_usage", function(c) {
            _.z(c);
            _.A(c, "type", b);
            var d = 0,
                e = 0;
            _.J(a.o, function(f) {
                0 < f.B && d++;
                f.G && e++
            });
            _.A(c, "nfetch", d);
            _.A(c, "nrend", e)
        })
    };
    Ym.prototype.addEventListener = function(a, b) {
        if (!_.$a(b) || "string" !== typeof a) return a = V("Service.addEventListener", [a, b]), this.log.H(a, this), this;
        if (!Tb(Qm, a)) return this.log.H(Pk(a), this), this;
        _.D(this.G[a]) || (this.G[a] = []);
        this.G[a].push(b);
        $m(this, a);
        return this
    };
    var Zm = function(a, b, c) {
        var d = a.G[b];
        _.D(d) && qf(function() {
            for (var e = _.r(d), f = e.next(); !f.done; f = e.next()) {
                f = f.value;
                try {
                    f(c)
                } catch (k) {
                    f = k && "string" === typeof k.name ? k.name : null;
                    var g = k && "string" === typeof k.message ? k.message : null,
                        h = "";
                    f && g ? h = f + ": " + g : f ? h = f : g && (h = g);
                    a.log.H(Ok(h), a);
                    window.console && console.error && console.error(k)
                }
            }
        })
    };
    _.an = function() {
        var a = this;
        this.j = {};
        this.l = wj.C();
        this.o = this.l.info(Lj());
        Yh(window, function() {
            return _.S(92, a.m)
        })
    };
    _.an.prototype.add = function(a) {
        this.j[a.aa()] = a
    };
    _.an.prototype.find = function(a) {
        var b = null;
        a in this.j && (b = this.j[a]);
        return b
    };
    var bn = function() {
        var a = _.an.C();
        _.xh(6);
        _.O(a.j, function(b) {
            b.m ? a.l.info(ek(), b) : vm(b)
        })
    };
    _.an.prototype.destroySlots = function(a) {
        _.O(this.j, function(b) {
            return b.destroySlots(a)
        })
    };
    _.an.prototype.m = function() {
        this.l.info(Fj(), null, null, this.o)
    };
    Wa(_.an);
    _.an.prototype.m = _.S(92, _.an.prototype.m);
    wa("enableServices", _.S(91, function() {
        bn()
    }));
    var cn = function(a, b) {
        this.l = a;
        this.j = b
    };
    cn.prototype.getWidth = function() {
        return this.l
    };
    cn.prototype.getHeight = function() {
        return this.j
    };
    var dn = function(a) {
            return _.D(a) && 2 == a.length && Ji(a[0]) && Ji(a[1]) || "string" === typeof a && "fluid" == a
        },
        en = function(a) {
            return _.D(a) ? new cn(a[0], a[1]) : a
        },
        gn = function(a) {
            var b = [];
            if (fn(a)) b.push(en(a));
            else if (_.D(a))
                for (var c = 0; c < a.length; ++c) {
                    var d = a[c];
                    fn(d) && b.push(en(d));
                    Gb(d, ["fluid"]) && b.push("fluid")
                }
            return b
        },
        fn = function(a) {
            return _.D(a) && 1 < a.length && "number" === typeof a[0] && "number" === typeof a[1] || "string" === typeof a && "fluid" == a
        };
    var ym = function(a) {
            this.j = a
        },
        hn = function(a, b) {
            a = ub(a.j, function(c) {
                c = c.l;
                return c.width <= b.width && c.height <= b.height
            });
            return null == a ? null : a.j
        },
        xm = function(a) {
            if (!_.D(a) || 2 != a.length) throw Error("Each mapping entry has to be an array of size 2");
            var b = a[0];
            if (!dn(b) || "fluid" == b) throw Error("Size has to be an array of two non-negative integers");
            b = new _.pe(b[0], b[1]);
            if (_.D(a[1]) && 0 == a[1].length) a = [];
            else if (a = gn(a[1]), 0 == a.length) throw Error("At least one slot size must be present");
            return new yl(b, a)
        };
    var jn = function(a, b, c) {
        this.o = a;
        this.Qa = b;
        this.m = this.o + "_" + this.Qa;
        this.j = c
    };
    _.B(jn, Cj);
    jn.prototype.getAdUnitPath = function() {
        return this.o
    };
    jn.prototype.C = function() {
        return this.Qa
    };
    jn.prototype.toString = function() {
        return this.m
    };
    jn.prototype.wa = function() {
        return new Im(this)
    };
    jn.prototype.getInstance = jn.prototype.C;
    var mn = function(a, b, c, d, e) {
            var f = this;
            this.mc = e;
            this.L = a;
            this.nc = gn(c);
            this.La = null;
            this.U = new jn(a, b, d);
            this.M = [];
            this.ea = {};
            this.ta = null;
            this.m = wj.C();
            this.m.info(Gj(this.U.toString()), null, this);
            this.G = this.mb = null;
            this.O = this.I = "";
            this.ic = !0;
            this.v = {};
            this.Z = [];
            this.va = !1;
            this.kc = 0;
            this.$ = this.pa = null;
            this.hc = -1;
            this.Hb = 2;
            this.V = !1;
            this.Ha = {};
            this.Ia = "";
            this.gc = !1;
            this.ca = null;
            this.K = !1;
            this.T = null;
            this.Ib = Ob(function(g) {
                null !== g && (g = new Um(f.l(), "publisher_ads", g), _.kn(f, "slotVisibilityChanged", g))
            }, 200);
            this.A = Ki(this.L);
            this.Va = "";
            this.ka = this.F = null;
            this.qa = !1;
            this.Fa = this.B = 0;
            this.Gb = this.P = this.ua = this.J = null;
            this.za = !1;
            this.N = this.ja = this.la = this.Ma = this.ia = null;
            _.ln(this);
            this.ha = "";
            this.Ga = new _.ji;
            this.X = this.fb = this.ba = null;
            this.R = 0;
            this.j = null;
            this.ma = this.D = 0;
            this.ra = this.ob = !1;
            this.Ka = null
        },
        Em, Bm, rn, sn, tn, un, vn, wn, yn, Fn;
    _.B(mn, Cj);
    _.n = mn.prototype;
    _.n.wa = function() {
        return new Hm(this, Ym, this.mc)
    };
    _.n.set = function(a, b) {
        this.ea[a] = b;
        return this
    };
    _.n.get = function(a) {
        return this.ea.hasOwnProperty(a) ? this.ea[a] : null
    };
    _.n.addService = function(a) {
        var b = _.an.C();
        if (!Tb(b.j, a)) return this.m.H(Qk(this.U.toString()), null, this), this;
        for (b = 0; b < this.M.length; ++b)
            if (a == this.M[b]) return this.m.H(Mj(a.aa(), this.U.toString()), a, this), this;
        this.M.push(a);
        a.Eb(this);
        return this
    };
    _.n.getAdUnitPath = function() {
        return this.L
    };
    _.n.C = function() {
        return this.U.C()
    };
    _.W = function(a, b) {
        b = void 0 === b ? document : b;
        return a.J || b.getElementById(a.U.j)
    };
    Em = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && a.La ? hn(a.La, new _.pe(b, c)) : a.nc
    };
    _.R = function(a) {
        return a.L + "_" + a.U.C()
    };
    _.nn = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top == b && (b = _.ul(!1, b), c = Em(a, b.width, b.height));
        null == c && (c = Em(a));
        return _.t(c, function(d) {
            return "string" === typeof d ? d : [d.getWidth(), d.getHeight()]
        })
    };
    _.Ci = function(a) {
        var b = [],
            c = !1;
        _.J(_.nn(a), function(d) {
            _.D(d) ? b.push(d.join("x")) : "fluid" == d ? c = !0 : b.push(d)
        });
        c && b.unshift("320x50");
        return b.join("|")
    };
    mn.prototype.da = function() {
        return _.vb(_.nn(this), "fluid")
    };
    var zm = function(a, b) {
            "string" !== typeof b ? a.m.H(V("Slot.setClickUrl", [b]), null, a) : a.O = b
        },
        Cm = function(a, b) {
            "boolean" !== typeof b ? a.m.H(V("Slot.setForceSafeFrame", [b]), null, a) : a.ca = b
        },
        Am = function(a, b, c) {
            var d = [];
            _.D(c) ? d = c : c && d.push(c.toString());
            "string" === typeof b ? (a.m.info(Pj(b, d.join(), a.getAdUnitPath()), null, a), a.v[b] = d) : a.m.H(V("Slot.setTargeting", [b, c]), null, a)
        };
    mn.prototype.getOutOfPage = function() {
        return this.va
    };
    mn.prototype.na = function() {
        return this.kc
    };
    _.on = function(a) {
        return 3 == a.na()
    };
    Bm = function(a, b, c) {
        "boolean" !== typeof b || c && "boolean" !== typeof c ? a.m.H(V("Slot.setCollapseEmptyDiv", _.w([b, c], _.Pa)), null, a) : (a.pa = b, a.$ = b && !!c, _.ya("gpt_ced", function(d) {
            _.A(d, "sc", a.$ ? "t" : "f");
            _.A(d, "level", "slot");
            _.z(d)
        }), c && !b && a.m.H(Rj(a.U.toString()), null, a))
    };
    rn = function(a, b) {
        if (!_.W(a)) return a.m.error(Sj(a.U.toString()), null, a), !1;
        var c = a.U.j,
            d = _.W(a, _.q.document);
        if (!d) return a.m.error(Tj(c, a.U.toString()), null, a), !1;
        c = a.ta;
        return "string" === typeof c && 0 < c.length ? (_.pn(a), d.innerHTML = c, _.qn(a, b), !0) : !1
    };
    sn = function(a, b, c) {
        c = void 0 === c ? null : c;
        if (a.qa && (_.ya("gpt_mult_disp", function(d) {
                _.A(d, "iu", a.L);
                _.A(d, "id", a.U.j);
                _.A(d, "ac", a.j ? "1" : "0");
                _.z(d)
            }), _.x(89))) return;
        a.J = c;
        a.ic && !_.W(a) ? a.m.H(Uj(a.L, a.U.j), null, a) : (a.qa = !0, _.J(a.M, function(d) {
            d.m && d.yb(b, a)
        }))
    };
    tn = function(a) {
        a.mb = a.m.info(Hj(a.getAdUnitPath()), null, a);
        a.B++;
        ph(_.si.C(), "7", 9, a.B, 0, a.o);
        var b = new Xm(a.l(), "publisher_ads");
        _.kn(a, "slotRequested", b);
        a.G = null
    };
    un = function(a, b) {
        a.I = b
    };
    _.Fm = function(a) {
        return _.$a(a.I) ? a.I() : a.I
    };
    _.pn = function(a) {
        a.G = a.m.info(Jj(a.getAdUnitPath()), null, a)
    };
    _.qn = function(a, b) {
        a.m.info(Kj(a.getAdUnitPath()), null, a, a.G);
        _.kn(a, "slotRenderEnded", b)
    };
    mn.prototype.loaded = function() {
        var a = new Vm(this.l(), "publisher_ads");
        _.kn(this, "slotOnload", a);
        _.rh(_.si.C(), "6", this.o);
        _.x(86) && this.j && _.L(this.j, 4) && Jh()
    };
    vn = function(a) {
        a.K = !1;
        a.T = null;
        a.ka = null;
        a.j = null;
        a.fb = null;
        a.X = null;
        a.ha = "";
        a.Ka = null;
        a.la = null;
        a.ja = null;
        a.N = null
    };
    wn = function(a) {
        var b = a.D ? _.fh() - a.D : 0;
        return Math.round((a.ma + b) / 1E3)
    };
    _.Gm = function(a) {
        return a.j && _.L(a.j, 34) || ""
    };
    mn.prototype.getHtml = function() {
        return _.xn(this) ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : this.j && _.L(this.j, 4) || ""
    };
    _.xn = function(a) {
        return a.j ? !!_.M(a.j, 9) : null
    };
    _.kn = function(a, b, c) {
        _.J(a.M, function(d) {
            d.aa() == c.serviceName && Zm(d, b, c)
        })
    };
    mn.prototype.Ra = function() {
        return this.gc
    };
    mn.prototype.lc = function() {
        return this.A
    };
    yn = function(a, b) {
        a.Fa = b
    };
    _.zn = function(a) {
        return "google_ads_iframe_" + _.R(a)
    };
    _.An = function(a) {
        return _.zn(a) + "__container__"
    };
    _.ln = function(a, b) {
        b || (b = ++_.si.C().m);
        a.o = b
    };
    _.Bn = function(a, b) {
        return a.ua ? a.ua : b.getElementById(_.zn(a))
    };
    _.Cn = function(a, b) {
        if (a.P) return a.P;
        a = _.An(a);
        return b.getElementById(a)
    };
    _.Dn = function(a) {
        if (!a.ia) {
            var b = _.W(a);
            b = b && b.parentElement;
            if (_.x(50)) {
                if (b = b.getBoundingClientRect()) a.ia = (new _.pe(b.right - b.left, b.bottom - b.top)).floor()
            } else b && b.getBoundingClientRect && (a.ia = Mi(b))
        }
        return a.ia
    };
    _.En = function(a, b) {
        b = void 0 === b ? document : b;
        if (!a.la) {
            b = _.W(a, b);
            if (!b) return null;
            a.la = _.Qe(b, window)
        }
        return a.la
    };
    Fn = function(a) {
        var b = _.Dn(a);
        return b ? _.qb(_.nn(a), function(c) {
            if ("string" === typeof c) return !0;
            var d = Math.floor(c[1]) == b.height;
            return Math.floor(c[0]) != b.width || !d
        }) : !1
    };
    _.Gn = function(a) {
        return !(!a.j || !_.Nd(a.j, _.Zd, 41) || "string" !== typeof _.Jd(_.Nd(a.j, _.Zd, 41).getHtml()))
    };
    var In;
    _.Hn = function() {
        this.l = [];
        this.m = [];
        this.j = {}
    };
    In = function(a, b) {
        return a.j[b] || []
    };
    Wa(_.Hn);
    var Jn = function() {
            this.j = new qi
        },
        Kn = function(a, b) {
            return ub(_.Pd(a.j, ni, 1), function(c) {
                return _.L(c, 2) === b
            })
        },
        Ln = function(a, b) {
            var c = _.Pd(a.j, ni, 1);
            zb(c, function(d) {
                return _.L(d, 2) === b
            }) && Rd(a.j, 1, c)
        };
    Wa(Jn);
    var Mn = function() {
        var a = this;
        this.j = function() {
            return !1
        };
        this.l = "";
        var b = Jn.C(),
            c = {};
        this[3] = (c[19] = function() {
            return !!_.M(b.j, 10)
        }, c[14] = Gi, c[13] = function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return _.qb(e, function(g) {
                return 0 == a.l.lastIndexOf(g, 0)
            })
        }, c[12] = function() {
            return !!_.M(b.j, 6)
        }, c[11] = Nl, c[15] = function(d) {
            return a.j(d)
        }, c[7] = function() {
            return !(!_.q.crypto || !_.q.crypto.subtle)
        }, c[1] = function() {
            return 0 == (0, _.jf)()
        }, c);
        c = {};
        this[4] = (c[3] = function() {
            return (0, _.jf)()
        }, c);
        this[5] = {}
    };
    Wa(Mn);
    var Nn, Qn, Rn, On, Sn, Tn, Un, Vn, Wn, Xn, Yn, Zn, ao;
    Nn = function(a) {
        return !!_.We(Km(), function(b) {
            return b == a
        })
    };
    Qn = function(a) {
        return _.vb(Li(On(_.Pn.C())), a)
    };
    Rn = Nb(function() {
        nf("GPT does not support passback slots on the top window. Each passback slot should be defined and rendered within an iframe.")
    });
    _.Pn = function() {
        this.j = {};
        this.m = {};
        this.l = {};
        this.o = wj.C();
        this.v = [];
        Mn.C().j = Qn
    };
    _.Pn.prototype.add = function(a, b, c) {
        var d = void 0 === c ? {} : c,
            e = void 0 === d.Xa ? void 0 : d.Xa;
        c = void 0 === d.ac ? mn : d.ac;
        var f = void 0 === d.Xb ? !1 : d.Xb;
        if ("string" !== typeof a || 0 >= a.length || !b) return {};
        d = Jm(void 0 === d.format ? 0 : d.format);
        if (null != d) {
            var g = _.Sl(window);
            if (Zl(g, d)) return {};
            g.adCount = g.adCount || {};
            g.adCount[d] = g.adCount[d] + 1 || 1
        }
        f && window == window.top && Rn();
        a in this.j || (this.j[a] = [], this.m[a] = f ? 1 : 0);
        f = this.m[a];
        e = e || "gpt_unit_" + a + "_" + f;
        if (this.l[e]) return this.o.error(Xj(e)), {};
        d = new ni;
        d = _.N(d, 1, a);
        d = _.N(d, 2, e);
        g = Jn.C();
        Sd(g.j, 1, d, ni);
        b = new c(a, f, b, e, d);
        this.m[a]++;
        this.j[a].push(b);
        this.l[b.U.j] = b;
        _.Yi.push(b);
        return {
            slot: b,
            Sa: d
        }
    };
    On = function(a) {
        var b = [];
        _.Pb(a.j, function(c) {
            _.J(c, function(d) {
                b.push(d)
            })
        });
        return b
    };
    Sn = function(a) {
        var b = [];
        a = In(_.Hn.C(), a);
        _.J(a, function(c) {
            (c = _.Bn(c, document)) && b.push(c.contentWindow)
        });
        return b
    };
    Tn = function(a, b) {
        b = _.r(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            Ln(Jn.C(), c.U.j);
            c.gc = !0;
            c.m.info(Tk(c.U.toString()), null, c);
            var d = Jm(c.na());
            if (null != d) {
                var e = _.Sl(window),
                    f = e.adCount && e.adCount[d];
                f && (e.adCount[d] = f - 1)
            }
            d = c.getAdUnitPath();
            _.yb(a.j[d], c);
            0 == a.j[d].length && (e = a.j, d in e && delete e[d]);
            d = a.l;
            e = c.U.j;
            e in d && delete d[e];
            _.yb(_.Yi, c)
        }
    };
    Un = function(a, b) {
        if (b && !_.D(b)) return a.o.H(V("googletag.destroySlots", [b])), !1;
        b ? (_.sa(b), b = _.w(b, function(c) {
            return c && !c.Ra()
        })) : b = On(a);
        if (!b || 0 == b.length) return !1;
        _.an.C().destroySlots(b);
        Tn(a, b);
        return !0
    };
    Vn = function(a, b) {
        return a.l[b] ? a.l[b] : null
    };
    Wn = function(a) {
        var b = _.Pn.C(),
            c = Xh(a, mn);
        return !!c && Rb(b.j, function(d) {
            return _.vb(d, c)
        })
    };
    Xn = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        if ("string" === typeof a && (void 0 === c || "string" === typeof c)) {
            var f = _.Pn.C();
            return f && f.add(a, b, {
                Xa: c,
                ac: d,
                Xb: e
            })
        }
        return {}
    };
    Yn = function(a, b, c) {
        return (a = Xn(a, b, c).slot) && a.l() || null
    };
    Zn = function(a) {
        var b = _.Pn.C();
        return b && null == a ? Un(b) : b && _.D(a) ? (a = _.t(a, function(c) {
            return Xh(c, mn)
        }), Un(b, a)) : !1
    };
    _.$n = function(a, b, c) {
        if (a = _.Pn.C().add(a, [1, 1], {
                Xa: c,
                format: b
            }).slot) a.va = !0, a.kc = b;
        return a || null
    };
    ao = function(a, b) {
        return "string" === typeof a && (null == b || "string" === typeof b || "number" === typeof b && Nn(b)) ? (a = _.$n(a, "number" === typeof b ? b : 0, "string" === typeof b ? b : void 0)) && a.l() : null
    };
    Wa(_.Pn);
    Yn = _.S(74, Yn);
    Zn = _.S(75, Zn);
    ao = _.S(73, ao);
    var bo = _.S(95, function(a) {
        var b = wj.C();
        var c = null;
        var d = "";
        if ("string" === typeof a) {
            d = a;
            var e = Vn(_.Pn.C(), d)
        } else _.E(a) && 1 == a.nodeType ? (c = a, d = c.id, e = Vn(_.Pn.C(), d)) : e = Xh(a, mn);
        e ? (a = Jn.C().j, Kn(Jn.C(), e.U.j) && (a = Ri(a), sn(e, a, c))) : d ? b.error(Wj(String(d))) : b.error(Vj(String(a)))
    });
    var $g, co, eo, ah = _.yg(),
        sh = new mh(1, ah);
    (function() {
        $g = new _.Zg(ug() ? "http:" : "https:", .01);
        "number" !== typeof ah.google_srt && (ah.google_srt = Math.random());
        bh();
        co = new _.th;
        co.Zb(function(b) {
            var c = ae.jerExpIds;
            if (_.D(c) && 0 !== c.length) {
                var d = b.eid;
                d ? (c = _.Da(d.split(",")).concat(_.Da(c)), _.sa(c), b.eid = c.join(",")) : b.eid = c.join(",")
            }
            eo && (b.jc = eo);
            (c = ae.jerUserAgent) && (b.useragent = c)
        });
        co.$b(!0);
        "complete" == ah.document.readyState ? ah.google_measure_js_timing || oh(sh) : sh.j && _.Q(ah, "load", function() {
            ah.google_measure_js_timing || oh(sh)
        });
        var a = $d.currentScript;
        eo = a ? a.dataset.jc : ""
    })();
    var fo = navigator,
        go = function() {
            try {
                return fo.javaEnabled()
            } catch (a) {
                return !1
            }
        },
        ho = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        io = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return ho(a.toLowerCase())
        },
        jo = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        ko = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
        lo = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    _.mo = function(a, b) {
        if (!(window && Math.random && navigator)) return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId()) return c.getOseId()
            } catch (e) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            if (!0 === c) var d = 2;
            else !1 !== c && (d = Te([0], a), null == d && ((d = Te([2], b)) || (d = 3)));
            if (!d) return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };
    var no = new mh(1, _.yg()),
        oo = function() {
            var a = _.yg();
            a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || oh(no))
        };
    (function() {
        var a = _.yg();
        a && a.document && ("complete" == a.document.readyState ? oo() : no.j && _.Q(a, "load", function() {
            oo()
        }))
    })();
    _.gb();
    var qo, ro;
    _.po = ["auto", "inherit", "100%"];
    qo = _.po.concat(["none"]);
    ro = function(a, b, c, d, e, f) {
        e = void 0 === e ? 10 : e;
        f = void 0 === f ? 10 : f;
        b = b.styleSheets;
        if (!b) return !1;
        var g = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
        e = -1 == e ? Infinity : e;
        f = -1 == f ? Infinity : f;
        for (var h = 0; h < Math.min(b.length, e); ++h) {
            var k = void 0;
            try {
                var l = b[h],
                    m = null;
                try {
                    m = l.cssRules || l.rules
                } catch (Ga) {
                    if (15 == Ga.code) throw Ga.styleSheet = l, Ga;
                }
                k = m
            } catch (Ga) {
                continue
            }
            if (k && 0 < k.length)
                for (m = 0; m < Math.min(k.length, f); ++m) {
                    var u = k[m],
                        v;
                    if (v = 1 == u.type) {
                        v = u;
                        var y = c;
                        v = g.call(a, v.selectorText) && y(v)
                    }
                    if (!v && (v = d && 4 == u.type)) a: {
                        v = a;y = c;
                        for (var H = f, C = 0; C < Math.min(u.cssRules.length, H); C++) {
                            var G = u.cssRules[C],
                                P = y;
                            if (g.call(v, G.selectorText) && P(G)) {
                                v = !0;
                                break a
                            }
                        }
                        v = !1
                    }
                    if (v) return !0
                }
        }
        return !1
    };
    _.to = function(a, b, c, d, e, f) {
        e = void 0 === e ? 10 : e;
        f = void 0 === f ? 10 : f;
        if (!a) return !0;
        var g = !0;
        _.lf(a, function(h) {
            return g = _.so(h, b, c, e, f)
        }, void 0 === d ? 100 : d);
        return g
    };
    _.so = function(a, b, c, d, e) {
        var f = a.style;
        return f && f.height && !_.vb(_.po, f.height) || f && f.maxHeight && !_.vb(qo, f.maxHeight) || ro(a, b.document, function(g) {
            var h = g.style.height;
            g = g.style["max-height"];
            return h && !_.vb(_.po, h) || g && !_.vb(qo, g)
        }, c, d, e) ? !1 : !0
    };
    var uo = function(a) {
            a = void 0 === a ? window : a;
            return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
        },
        vo = function(a, b) {
            b = void 0 === b ? window : b;
            var c = uo(b);
            if (!c) return null;
            var d = null;
            try {
                "afma-gpt-sdk-a" == c ? d = b._gmptnl.pm("GAM=", a) || "5" : (d = b.__gmptnl_n || "5", b.webkit.messageHandlers._gmptnl.postMessage("GAM="))
            } catch (e) {
                return "3"
            }
            return "string" === typeof d ? d : "3"
        };
    _.wo = function() {
        this.l = [];
        this.j = -1
    };
    _.wo.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && 0 === a % 1 && this.l[a] != b && (this.l[a] = b, this.j = -1)
    };
    _.wo.prototype.get = function(a) {
        return !!this.l[a]
    };
    _.xo = function(a) {
        -1 == a.j && (a.j = pb(a.l, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.j
    };
    var yo = function() {
        this.j = function() {}
    };
    Wa(yo);
    var zo = function() {
        var a = Mn.C();
        yo.C().j(a)
    };
    var Ao = function() {
        if (void 0 === b) {
            var a = void 0 === a ? _.q : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        wh(_.vh.C(), a);
        a = b;
        var c = ag.C();
        c.j = $f(Vf, a);
        c.l = $f(Wf, a);
        c.m = $f(Xf, a);
        c.o = $f(Yf, a);
        yo.C().j = $f(Zf, b)
    };
    var Do = function() {
            var a = void 0;
            this.m = a = void 0 === a ? document : a;
            this.j = 0;
            this.o = Bo(this, "__gads=");
            this.A = !1;
            this.l = null;
            this.v = !1;
            Co(this)
        },
        Eo = function(a, b) {
            a.j = b;
            Co(a)
        },
        Co = function(a) {
            if (!a.o && !a.v && 1 != a.j) {
                a.m.cookie = "GoogleAdServingTest=Good";
                var b = "Good" === Bo(a, "GoogleAdServingTest=");
                if (b) {
                    var c = a.m,
                        d = new Date;
                    d.setTime((new Date).valueOf() + -1);
                    c.cookie = "GoogleAdServingTest=; expires=" + d.toGMTString()
                }
                a.A = b;
                a.v = !0
            }
        },
        Bo = function(a, b) {
            a = a.m.cookie;
            var c = a.indexOf(b);
            if (-1 === c) return "";
            b = c + b.length;
            c = a.indexOf(";", b); - 1 == c && (c = a.length);
            return a.substring(b, c)
        };
    var Fo = Mb(function() {
            return !(dd || ed || cd) && (nd || _.Zc || Yc && _.ld(11))
        }),
        Go = function(a, b, c, d, e) {
            d = void 0 === d ? "" : d;
            var f = a.createElement("link");
            try {
                f.rel = c, f.href = -1 != c.toLowerCase().indexOf("stylesheet") ? b.Ta ? b.Ta : _.dc(b).toString() : b instanceof cc ? b.Ta ? b.Ta : _.dc(b).toString() : b instanceof _.sc ? _.tc(b) : _.tc(_.vc(b))
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
    var Ho = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Io = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
        Jo = _.q,
        Lo = function(a) {
            a = "https://adservice" + (a + "/adsid/integrator.js");
            var b = ["domain=" + encodeURIComponent(_.q.location.hostname)];
            Ko[3] >= _.gb() && b.push("adsid=" + encodeURIComponent(Ko[1]));
            return a + "?" + b.join("&")
        },
        Ko, Mo, No = function() {
            Jo = _.q;
            Ko = Jo.googleToken = Jo.googleToken || {};
            var a = _.gb();
            Ko[1] && Ko[3] > a && 0 < Ko[2] || (Ko[1] = "", Ko[2] = -1, Ko[3] = -1, Ko[4] = "", Ko[6] = "");
            Mo = Jo.googleIMState = Jo.googleIMState || {};
            a = Mo[1];
            Ho.test(a) && !Io.test(a) || (Mo[1] = ".google.com");
            _.D(Mo[5]) || (Mo[5] = []);
            "boolean" !== typeof Mo[6] && (Mo[6] = !1);
            _.D(Mo[7]) || (Mo[7] = []);
            "number" !== typeof Mo[8] && (Mo[8] = 0)
        },
        Oo = {
            ub: function() {
                return 0 < Mo[8]
            },
            Mc: function() {
                Mo[8]++
            },
            Nc: function() {
                0 < Mo[8] && Mo[8]--
            },
            Oc: function() {
                Mo[8] = 0
            },
            fe: function() {
                return !1
            },
            Ob: function() {
                return Mo[5]
            },
            Kb: function(a) {
                try {
                    a()
                } catch (b) {
                    _.q.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Yb: function() {
                if (!Oo.ub()) {
                    var a = _.q.document,
                        b = function(e) {
                            e = Lo(e);
                            a: {
                                try {
                                    var f = Ua();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            Go(a, e, "preload", "script", f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return _.q.processGoogleToken({}, 2)
                            };
                            e = Ee(e);
                            _.ha(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), Oo.Mc()
                            } catch (g) {}
                        },
                        c = Mo[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    _.q.setTimeout(function() {
                        return _.q.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        Po = function(a) {
            No();
            var b = Jo.googleToken[5] || 0;
            a && (0 != b || Ko[3] >= _.gb() ? Oo.Kb(a) : (Oo.Ob().push(a), Oo.Yb()));
            Ko[3] >= _.gb() && Ko[2] >= _.gb() || Oo.Yb()
        },
        Qo = function(a) {
            _.q.processGoogleToken = _.q.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                No();
                1 == c ? Oo.Oc() : Oo.Nc();
                var k = Jo.googleToken = Jo.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !Oo.ub() && (!(Ko[3] >= _.gb()) || "NT" == Ko[1]);
                var m = !(Ko[3] >= _.gb()) && 0 != c;
                if (l || e || m) e = _.gb(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && _.tf(_.q, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, No();
                if (l || !Oo.ub()) {
                    c = Oo.Ob();
                    for (b = 0; b < c.length; b++) Oo.Kb(c[b]);
                    c.length = 0
                }
            };
            Po(a)
        };
    var To, So;
    _.Ro = function(a) {
        try {
            if (!a.localStorage) return !1;
            a.localStorage.setItem("__storage_test__", "__storage_test__");
            var b = a.localStorage.getItem("__storage_test__");
            a.localStorage.removeItem("__storage_test__");
            return "__storage_test__" == b
        } catch (c) {
            return !1
        }
    };
    To = function() {
        var a = _.x(166),
            b = window;
        try {
            if (!a || !_.Ro(b) || !b.localStorage) return null;
            var c = b.localStorage.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            return !_.D(d) || _.qb(d, function(e) {
                return !Number.isInteger(e)
            }) ? (b.localStorage.removeItem("__lsv__"), []) : So(d)
        } catch (e) {
            return null
        }
    };
    So = function(a) {
        a = void 0 === a ? [] : a;
        var b = Date.now();
        return _.w(a, function(c) {
            return 6048E5 > b - c
        })
    };
    var Uo = function() {
        var a = window,
            b = a.google_ltobserver;
        b && (b.disconnect(), delete a.google_ltobserver);
        a.google_lt_queue && delete a.google_lt_queue
    };
    var Vo = function(a) {
        this.j = null;
        this.l = 0;
        this.m = a
    };
    Vo.prototype.getOseId = function() {
        this.l || (this.l = _.mo(0, _.ai(7)));
        return this.l
    };
    var Wo = function(a, b) {
            a = void 0 === a ? {} : a;
            b = void 0 === b ? {} : b;
            this.l = a;
            this.j = b
        },
        Xo = function(a, b, c, d) {
            if (!(b && b in a.l)) return !1;
            if (void 0 === d || d || !a.j[b]) a.j[b] = c || "";
            return !0
        },
        Yo = function(a, b) {
            _.O(b.j, function(c, d) {
                this.j[d] || (this.j[d] = c)
            }, a)
        },
        ui = function(a) {
            return a.j.page_url
        },
        Zo = function(a) {
            var b = {};
            _.O(a.j, function(c, d) {
                d in a.l && (b[a.l[d]] = c)
            });
            return new Wo(a.l, b)
        },
        $o = function(a) {
            var b = [];
            _.O(a.j, function(c, d) {
                d in a.l && b.push({
                    bb: a.l[d],
                    Wb: c
                })
            });
            return b
        },
        ap = function(a, b, c, d) {
            var e = [],
                f = b.j;
            _.O(d, function(g, h) {
                if (g) {
                    g = {
                        bb: g
                    };
                    var k = f[h],
                        l = [];
                    a.forEach(function(m, u) {
                        (m = c[_.R(m)]) && m.j[h] && (l[u] = m.j[h])
                    });
                    if (l.length || k) l.length && (g.Vc = l), k && (g.Wb = k), e.push(g)
                }
            });
            return e
        };
    var bp = function() {
            var a = um();
            this.j = {};
            this.K = a;
            this.l = new Wo(a);
            this.m = {};
            this.G = {};
            this.D = {};
            this.I = {};
            this.J = "";
            this.o = _.ai(36);
            this.A = -1;
            this.F = 0;
            this.v = !1;
            this.B = {}
        },
        cp = function(a, b) {
            var c = _.R(b);
            a.j[c] || (a.j[c] = b)
        },
        ep = function(a) {
            return _.w(dp(a), function(b) {
                return !b.ra
            })
        },
        fp = function(a, b) {
            _.J(b, function(c) {
                _.R(c) in a.j && vn(c)
            })
        },
        gp = function(a, b) {
            return !a.I[_.R(b)] && (!_.x(150) || !_.xn(b))
        },
        Xi = function(a) {
            var b = 0;
            _.O(a.j, function() {
                b++
            });
            return b
        },
        dp, Wi, hp, ip, jp, kp, lp, np, op;
    bp.prototype.toString = function() {
        var a = "[AdData:",
            b = [];
        _.O(this.j, function(c) {
            b.push(c.toString())
        });
        a += b.join();
        return a + "]"
    };
    dp = function(a) {
        var b = [];
        _.O(a.j, function(c) {
            b.push(c)
        });
        return b
    };
    Wi = function(a) {
        a = dp(a);
        a = _.t(a, function(b) {
            return b.A
        });
        _.sa(a);
        return a
    };
    hp = function(a, b, c) {
        return _.x(130) ? _.M(c, 6) || b.V ? null : _.W(b) : a.G[_.R(b)] || null
    };
    ip = function(a, b, c, d) {
        var e = Ei(c);
        if (!e) return e;
        var f = c === _.W(d, b),
            g = Mb(function() {
                return f ? _.En(d, b) || {} : _.Qe(c, window) || {}
            }),
            h = _.nn(d)[0],
            k = !1;
        _.D(h) && (k = a.o ? f : 0 == e.x && "center" == g()["text-align"]);
        k && (e.x += Math.round(Math.max(0, (f ? c.clientWidth : c.parentElement.clientWidth) - h[0]) / 2));
        f && (e.y += Math.round(Math.min(parseInt(g()["padding-top"], 10) || 0, c.clientHeight)), k || (a = c.clientWidth, e.x += Math.round(Math.min(parseInt(g()["padding-left"], 10) || 0, a))));
        return e
    };
    jp = function(a, b, c) {
        var d = _.Cn(b, c) || _.W(b, c);
        if (!d) return null;
        c = ip(a, c, d, b);
        if (!c) return null;
        if ((d = c && _.Bh(d)) && (0 <= c.x || 0 <= c.y)) a.D[_.R(b)] = c;
        else if (!d) return new _.oe(-12245933, -12245933);
        return c
    };
    kp = function(a) {
        return _.t(a, function(b) {
            return _.Ci(b)
        }).join()
    };
    lp = function(a, b) {
        _.J(b, function(c) {
            if (a.j[_.R(c)]) {
                var d = a.j;
                c = _.R(c);
                c in d && delete d[c]
            }
        })
    };
    _.mp = function(a, b, c, d) {
        var e = b.document;
        a = a.D[_.R(d)] || jp(a, d, e);
        if (!a || -12245933 == a.y) return !0;
        try {
            var f = Ah(b.top.document, b.top).y,
                g = _.ul(!0, b),
                h = f + g.height * (c + 1);
            return a.y >= f && a.y <= h
        } catch (k) {
            return !0
        }
    };
    np = function(a, b) {
        for (var c = [], d = b.length - 1; 0 <= d; d--) {
            var e = b[d];
            if (_.W(e) && _.mp(a, _.q, 2, e)) break;
            else c.unshift(e)
        }
        return c
    };
    op = function(a, b) {
        var c = null;
        if (_.D(_.nn(a)[0])) {
            var d = _.r(_.nn(a)[0]);
            c = d.next().value;
            d = d.next().value;
            c = {
                width: c,
                height: d
            }
        }
        var e = _.Cn(a, b) || _.W(a, b);
        a: {
            a = {
                bc: c,
                Lb: !1
            };d = void 0 === a ? {} : a;a = void 0 === d.bc ? null : d.bc;b = void 0 === d.Ic ? 100 : d.Ic;c = void 0 === d.Xc ? 50 : d.Xc;d = void 0 === d.Lb ? !0 : d.Lb;
            for (var f = _.gb(), g = !1; e;) {
                if (!b-- || _.gb() - f >= c) {
                    var h = !1;
                    break a
                }
                switch (e.nodeType) {
                    case 9:
                        try {
                            if (h = e.parentWindow || e.defaultView) {
                                var k = h.frameElement;
                                if (k && Le(h.parent)) {
                                    e = k;
                                    break
                                }
                            }
                        } catch (y) {}
                        e = null;
                        break;
                    case 1:
                        var l = e,
                            m;
                        if (m = d) {
                            b: {
                                try {
                                    if (0 < l.offsetWidth && 0 < l.offsetHeight && l.style && "none" !== l.style.display && "hidden" !== l.style.visibility && (!l.style.opacity || 0 !== Number(l.style.opacity))) {
                                        var u = l.getBoundingClientRect();
                                        var v = 0 < u.right && 0 < u.bottom;
                                        break b
                                    }
                                } catch (y) {}
                                v = !1
                            }
                            m = !v
                        }
                        if (m) {
                            h = !1;
                            break a
                        }
                        g || (/^html|body$/i.test(l.tagName) ? g = null : (g = l.style.position || (_.Qe(l, window) || {}).position, g = /^fixed/i.test(g) ? l : null), g = !!g && (!a || g.offsetWidth * g.offsetHeight <= 4 * a.width * a.height));
                        e = e.parentNode
                }
            }
            h = g
        }
        return h
    };
    var pp, qp;
    pp = 0;
    qp = function(a, b) {
        this.kb = a;
        this.l = b;
        this.j = [];
        this.$ = !1;
        this.K = "";
        this.D = NaN;
        this.V = "json_html";
        this.A = "fif";
        this.v = 1;
        this.N = !1;
        this.J = "";
        this.L = [];
        this.persistentRoadblocksOnly = !1;
        this.videoPodNumber = this.videoPodPosition = NaN;
        this.R = this.T = "";
        this.P = !1;
        this.videoStreamCorrelator = NaN;
        this.B = 0;
        this.X = this.O = this.I = "";
        this.G = [];
        this.M = this.o = 0;
        this.m = [];
        this.F = {};
        this.Z = {}
    };
    _.rp = function(a, b) {
        b = _.R(b);
        a.F[b] || (a.F[b] = window == window.top ? (++pp).toString(36) : _.Pc());
        return a.F[b]
    };
    _.sp = function(a, b, c, d, e) {
        a = _.Ce(new _.qe(a), "DIV");
        a.id = c;
        a.name = c;
        c = a.style;
        c.border = "0pt none";
        d && (c.margin = "auto", c.textAlign = "center");
        e && (d = _.D(e), c.width = d ? e[0] + "px" : "100%", c.height = d ? e[1] + "px" : "0%");
        b.appendChild(a);
        return a
    };
    var tp = function(a) {
        var b = _.bg(8, -1);
        return -1 != b ? b : null != _.L(a, 1) ? null != _.L(a, 3) && 0 != (0, _.jf)() ? _.L(a, 1) * _.Id(a, 3) : _.L(a, 1) : null
    };
    _.X = function(a, b) {
        _.vl.call(this);
        this.slot = a;
        this.F = b;
        this.A = []
    };
    _.B(_.X, _.vl);
    _.X.prototype.j = _.p(10);
    _.X.prototype.m = _.p(16);
    _.X.prototype.l = function() {
        _.vl.prototype.l.call(this);
        _.J(this.A, function(a) {
            return a()
        });
        this.A = []
    };
    _.up = function(a, b) {
        _.X.call(this, a, b);
        this.v = "";
        this.o = null
    };
    _.B(_.up, _.X);
    _.up.prototype.j = _.p(9);
    _.up.prototype.m = _.p(15);
    _.up.prototype.l = function() {
        _.X.prototype.l.call(this);
        if (this.o) try {
            this.o()
        } catch (a) {
            _.aj(493, a)
        }
    };
    _.Mp = function(a, b) {
        _.X.call(this, a, b);
        this.v = this.D = !1;
        this.B = this.o = null
    };
    _.B(_.Mp, _.X);
    _.Mp.prototype.j = _.p(8);
    _.Mp.prototype.m = _.p(14);
    _.Np = new function(a) {
        this.id = a
    }(1);
    var Pp;
    _.Op = function() {
        this.j = {}
    };
    Pp = function(a) {
        var b = _.Op.C(),
            c = _.Np.id;
        a = _.S(614, a, function(d, e) {
            _.bj(d, e, !0)
        });
        b.j[c] ? b.j[c].push(a) : b.j[c] = [a]
    };
    Wa(_.Op);
    _.Qp = function(a, b) {
        _.X.call(this, a, b);
        this.o = null
    };
    _.B(_.Qp, _.X);
    _.Qp.prototype.m = _.p(13);
    _.Qp.prototype.l = function() {
        _.X.prototype.l.call(this);
        this.o && this.o()
    };
    _.Rp = function(a, b) {
        _.X.call(this, a, b);
        this.o = !1
    };
    _.B(_.Rp, _.X);
    _.Rp.prototype.j = _.p(7);
    _.Rp.prototype.m = _.p(12);
    var Tp, Up, Vp;
    _.Sp = function(a) {
        var b = "performance" in window && "now" in performance ? performance.now.bind(performance) : _.gb;
        for (a = b() + a; b() < a;);
        b()
    };
    Tp = function(a, b) {
        b >= a.length || (_.Sp(a[b]), window.requestAnimationFrame(function() {
            return Tp(a, ++b)
        }))
    };
    Up = function(a) {
        window.requestAnimationFrame(function() {
            return Tp(a, 0)
        })
    };
    Vp = function() {
        if (_.$a(window.requestAnimationFrame)) {
            var a = _.dg(2);
            a.length && (a = a.map(function(b) {
                return _.Ze(b, 0)
            }), Up(a))
        }
    };
    _.Wp = function(a, b) {
        _.X.call(this, a, b)
    };
    _.B(_.Wp, _.X);
    _.Wp.prototype.j = _.p(6);
    _.Xp = function(a, b) {
        _.X.call(this, a, b);
        this.v = new _.qe;
        this.o = null
    };
    _.B(_.Xp, _.X);
    _.Xp.prototype.j = _.p(5);
    _.Yp = function(a, b) {
        _.X.call(this, a, b);
        this.v = new _.qe;
        this.o = null
    };
    _.B(_.Yp, _.X);
    _.Yp.prototype.j = _.p(4);
    _.Yp.prototype.l = function() {
        _.X.prototype.l.call(this);
        this.o && (this.o.disconnect(), this.o = null)
    };
    _.Zp = function(a, b) {
        _.X.call(this, a, b);
        this.o = 1;
        this.v = null;
        this.D = this.B = !1
    };
    _.B(_.Zp, _.X);
    _.Zp.prototype.m = _.p(11);
    _.Zp.prototype.l = function() {
        _.X.prototype.l.call(this);
        _.$p(this)
    };
    _.$p = function(a) {
        5 != a.o && (a.o = 5, a.v && (a.v(), a.v = null), a.slot.F && _.bm(a.slot.F), _.Ae(_.W(a.slot, _.q.document)))
    };
    var aq, bq, eq;
    aq = {};
    bq = (aq[1] = {
        zb: "rendering"
    }, aq[2] = {
        zb: "floating",
        sb: [1]
    }, aq[3] = {
        zb: "vignette",
        sb: [1]
    }, aq);
    _.cq = function() {
        this.l = {};
        this.j = bq
    };
    _.dq = function(a, b) {
        a.l[b] || (a.l[b] = new _.kl);
        return a.l[b]
    };
    eq = function(a, b) {
        var c = "_gpt_js_load_" + b + "_",
            d = _.S(340, function(e) {
                if (a.j[b] && _.$a(e)) {
                    var f = a.j[b];
                    f = _.t(void 0 === f.sb ? [] : f.sb, function(g) {
                        return _.dq(a, g).j
                    });
                    ll(f).then(function() {
                        e.call(_.q, _)
                    })
                }
            });
        Object.defineProperty(_.xa(), c, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    _.cq.prototype.load = function(a) {
        var b = _.dq(this, a),
            c = this.j[a].zb,
            d = _.ai(174),
            e = _.Si();
        var f = _.bg(25);
        c = "https://" + d + "/gpt/pubads_impl_" + c + "_" + e + ".js";
        f && (c += "?" + f);
        f = c;
        eq(this, a);
        _.Pe(document, f);
        return b.j
    };
    Wa(_.cq);
    _.cq.prototype.load = Eg(_.cq.prototype.load);
    var fq;
    fq = [{
        xa: _.Wp,
        sa: function() {
            return 0 < (_.bg(16) || _.bg(17) || _.bg(18)) || _.x(169)
        }
    }, {
        xa: _.Xp,
        sa: function() {
            return _.x(20)
        }
    }, {
        xa: _.Yp,
        sa: function() {
            return !0
        }
    }, {
        xa: _.Mp,
        sa: function(a, b) {
            return _.Ni(b) && !_.Gn(a)
        }
    }, {
        xa: _.up,
        sa: function() {
            return !_.x(111)
        }
    }, {
        xa: _.Zp,
        sa: function(a) {
            return _.on(a)
        }
    }, {
        xb: 3,
        sa: function(a, b) {
            return 4 == a.na() && !!_.Nd(b, _.Xd, 48)
        }
    }, {
        xb: 2,
        sa: function(a, b) {
            a = a.na();
            if (a = (1 == a || 2 == a) && _.E(_.Nd(b, _.Vd, 39))) b = _.Nd(b, _.Vd, 39), b = _.M(b, 12), a = null == b ? !1 : b;
            return a
        }
    }, {
        xa: _.Rp,
        sa: function() {
            return _.x(96)
        }
    }, {
        xa: _.Qp,
        sa: function(a, b) {
            return !(!_.bg(19) || !_.M(b, 9) || _.M(b, 40))
        }
    }];
    _.gq = function() {
        this.j = {};
        this.l = fq
    };
    Wa(_.gq);
    var hq = function() {
        var a = void 0 === a ? document : a;
        var b = this.j = {};
        a = a.URL.split("?");
        a = _.r(a[a.length - 1].split("&"));
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value.split("="), c[0]) {
                var d = c[0].toLowerCase();
                try {
                    if (1 < c.length) {
                        var e = c[1];
                        var f = window.decodeURIComponent ? decodeURIComponent(e.replace(zi, " ")) : unescape(e)
                    } else f = "";
                    b[d] = f
                } catch (g) {}
            }
    };
    var kq;
    _.iq = function(a, b, c) {
        this.j = a;
        this.m = b;
        this.M = c;
        this.R = _.Hn.C();
        this.v = {};
        this.J = Eg(this.J);
        this.A = _.S(291, this.A);
        this.Z = this.P = this.F = !1;
        this.N = this.O = "";
        this.videoStreamCorrelator = NaN;
        this.D = 0;
        this.I = new Vo(this.G);
        this.ha = 0
    };
    _.jq = function(a) {
        return !!_.M(a, 6) || _.x(143)
    };
    kq = function(a) {
        var b = _.bg(1) || (Gi() ? 8192 : 4096);
        if (_.x(168) || a.length <= b) return a;
        var c = _.x(164) && /&supporting_urls=/.test(a),
            d = a,
            e = b - 8;
        d.length > b && (b = c ? -1 : d.lastIndexOf("&", e), -1 !== b ? d = d.substring(0, b) : (d = d.substring(0, e), d = d.replace(/%\w?$/, ""), c && (d = d.replace(/&[^=]*=?$/, ""))), d += "&trunc=1");
        c = d;
        ph(_.si.C(), (9).toString(), 9, a.length - c.length + 8);
        return c
    };
    _.mq = function(a, b, c, d, e) {
        gp(a.j, c) && (d && lq(a, [c], e), d || !_.Bn(c, b)) && (a = c.pa, null == a && (a = _.M(e, 11)), a && (b = _.W(c, b)) && _.Pf(b, !1))
    };
    _.iq.prototype.J = function(a, b) {
        var c = this;
        b = void 0 === b ? !1 : b;
        return _.q.IntersectionObserver ? new _.q.IntersectionObserver(function(d, e) {
            return c.A(d, e, b)
        }, {
            rootMargin: a
        }) : new _.Il(function(d, e) {
            return c.A(d, e, b)
        }, {
            rootMargin: a
        })
    };
    _.iq.prototype.A = function(a, b, c) {
        var d = this;
        c = void 0 === c ? !1 : c;
        _.J(a, function(e) {
            if (c || !(0 >= e.intersectionRatio)) {
                b.unobserve(e.target);
                e = e.target.id;
                var f = d.v[e];
                f && (f.call(d), delete d.v[e])
            }
        })
    };
    var nq = function(a) {
            a.length && (a = a[0], _.rh(_.si.C(), "3", a.o))
        },
        qq = function() {
            var a = oq(pq());
            return {
                cmsid: a.N,
                vid: a.O
            }
        };
    _.iq.prototype.$ = _.p(17);
    var rq = function(a, b) {
        if (!b.length) return [];
        var c = _.Pn.C().v,
            d = b[0].A;
        a = _.w(dp(a.j), function(e) {
            return e.A == d && !!e.ha && !_.vb(b, e)
        });
        a = _.t(a, function(e) {
            return e.ha
        });
        return Ab(c, a)
    };
    var Aq = function(a, b) {
        wm.call(this, a);
        var c = this;
        this.set = T(576, function(d, e) {
            a.set(d, e);
            return c
        });
        this.get = T(577, function(d) {
            return a.get(d)
        });
        this.getAttributeKeys = T(578, function() {
            return Ib(a.I)
        });
        this.display = T(558, function(d, e, f, g) {
            return a.display(d, e, void 0 === f ? "" : f, void 0 === g ? "" : g)
        });
        this.setClearUnfilledSlots = T(68, function(d) {
            "boolean" === typeof d && (a.v = d)
        });
        this.notifyUnfilledSlots = T(69, function(d) {
            if (a.J) sq(a, tq(a, d));
            else if (a.v) {
                d = tq(a, d);
                var e = uq();
                if (e.m) {
                    var f = Jn.C().j;
                    vq(e, d, f);
                    for (f = 0; f < d.length; ++f) {
                        var g = new _.Sm(d[f].l(), !0, e.aa());
                        Zm(e, "slotRenderEnded", g)
                    }
                } else a.log.error(hk("PubAds", "clear"))
            }
        });
        this.isRoadblockingSupported = T(111, function() {
            return wq(a)
        });
        this.refreshAllSlots = T(60, function() {
            a.J && sq(a, null)
        });
        this.setVideoSession = T(61, function(d, e, f, g) {
            a.N = d;
            a.L = e;
            a.M = f;
            a.A = g
        });
        this.getDisplayAdsCorrelator = T(62, function(d) {
            return xq(a, void 0 === d ? "" : d)
        });
        this.getVideoStreamCorrelator = T(63, function() {
            if (uq().j) {
                var d = oq(pq()).videoStreamCorrelator;
                d = isNaN(d) ? 0 : d
            } else d = 0;
            return d
        });
        this.isSlotAPersistentRoadblock = T(64, function(d) {
            d = Xh(d, b);
            return !!d && yq(a, d)
        });
        this.onImplementationLoaded = T(65, function() {
            a.log.info(mk("GPT CompanionAds"), a);
            a.D = !0
        });
        this.fillSlot = T(66, function(d, e, f, g) {
            d = Xh(d, b);
            var h;
            if (h = !!d) d && Wn(d) && "string" === typeof e && 0 < e.length ? (a.B[d.U.m] = e, null != f && null != g && (a.j[d.U.m] = [f, g]), h = zq(a, d)) : h = !1;
            return h
        });
        this.slotRenderEnded = T(67, function(d, e, f) {
            d = Xh(d, b);
            var g;
            if (g = d) d = new _.Sm(d.l(), !1, a.aa()), null != e && null != f && _.Tm(d, [e, f]), Zm(a, "slotRenderEnded", d), g = void 0;
            return g
        });
        this.enableSyncLoading = T(58, function() {
            a.O = !1
        });
        this.setRefreshUnfilledSlots = T(59, function(d) {
            "boolean" === typeof d && (a.J = d)
        })
    };
    _.B(Aq, wm);
    var Bq = function() {
        var a = wj.C();
        this.getAllEvents = T(563, function() {
            return pj ? a.j.slice() : []
        });
        this.getEventsByService = T(564, function(b) {
            return pj ? xj(a, b).slice() : []
        });
        this.getEventsBySlot = T(565, function(b) {
            return pj ? yj(a, b).slice() : []
        });
        this.getEventsByLevel = T(566, function(b) {
            return pj ? zj(a, b).slice() : []
        })
    };
    _.B(Bq, Wh);
    var Dq = function(a) {
        var b = this;
        this.set = T(83, function(c, d) {
            a.set(c, d);
            return b
        });
        this.get = T(84, function(c) {
            return a.get(c)
        });
        this.setClickUrl = T(79, function(c) {
            zm(a.j, c);
            return b
        });
        this.setTargeting = T(81, function(c, d) {
            Am(a.j, c, d);
            return b
        });
        this.updateTargetingFromMap = T(85, function(c) {
            Cq(a, c);
            return b
        });
        this.display = T(78, function() {
            var c = Jn.C().j;
            c = Ri(c);
            a.display(c)
        });
        this.setTagForChildDirectedTreatment = T(80, function(c) {
            if (0 === c || 1 === c) a.j.hc = c;
            return b
        });
        this.setForceSafeFrame = T(567, function(c) {
            Cm(a.j, c);
            return b
        });
        this.setTagForUnderAgeOfConsent = T(448, function(c) {
            if (0 === c || 1 === c) a.j.Hb = c;
            return b
        })
    };
    _.B(Dq, Wh);
    var Eq = function(a, b) {
            a = _.t(a, function(c) {
                return Xh(c, b)
            });
            return _.w(a, function(c) {
                return !!c
            })
        },
        Fq = function(a) {
            var b = Mn.C(),
                c = [];
            a = _.r(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                d = d.value;
                b.l = d;
                var e = _.xh(9);
                1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
            }
            return c
        },
        Gq = Nb(function() {
            return nf("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        Hq = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    Gq();
                    return !0
                },
                set: function() {
                    Gq()
                },
                configurable: !0
            })
        },
        Rq = function(a, b, c) {
            wm.call(this, a);
            var d = this,
                e = wj.C(),
                f = !1;
            this.setTargeting = T(1, function(g, h) {
                var k = null;
                "string" === typeof h ? k = [h] : _.D(h) ? k = h : _.Ya(h) && (k = _.Bb(h));
                var l = "string" === typeof g && !fc(g);
                k = _.x(180) ? k : k && Lb(k);
                var m = !!k && rb(k, _.Ra);
                if (!l || !m) return e.H(V("PubAdsService.setTargeting", [g, h]), a), d;
                h = ub(_.Pd(c, gi, 2), function(u) {
                    return _.L(u, 1) === g
                });
                if ("gpt-beta" === g) {
                    if (a.m) return e.H($k(k.join())), d;
                    if (h) return e.H(al(k.join())), d;
                    k = Fq(k)
                }
                h ? ii(h, k) : (h = ii(hi(new gi, g), k), Sd(c, 2, h, gi));
                e.info(Mk(g, k.join(), a.aa()), a);
                return d
            });
            this.clearTargeting = T(2, function(g) {
                if (void 0 === g) return ri(c, []), e.info(Yk(a.aa()), a), d;
                if ("gpt-beta" === g) return e.H(bl(g)), d;
                var h = _.Pd(c, gi, 2),
                    k = _.tb(h, function(l) {
                        return _.L(l, 1) === g
                    });
                if (0 > k) return e.H(Jk(g, a.aa()), a), d;
                _.xb(h, k);
                ri(c, h);
                e.info(Ik(g, a.aa()), a);
                return d
            });
            this.getTargeting = T(38, function(g) {
                if ("string" !== typeof g) return e.H(V("PubAdsService.getTargeting", [g]), a), [];
                var h = ub(_.Pd(c, gi, 2), function(k) {
                    return _.L(k, 1) === g
                });
                return h ? _.L(h, 2).slice() : []
            });
            this.getTargetingKeys = T(39, function() {
                return _.t(_.Pd(c, gi, 2), function(g) {
                    return _.L(g, 1)
                })
            });
            this.setCategoryExclusion = T(3, function(g) {
                if ("string" !== typeof g || fc(g)) return e.H(V("PubAdsService.setCategoryExclusion", [g]), a), d;
                _.vb(_.L(c, 3), g) || Ld(c, 3, g);
                e.info(Kk(g), a);
                return d
            });
            this.clearCategoryExclusions = T(4, function() {
                _.N(c, 3, []);
                e.info(Lk(), a);
                return d
            });
            this.disableInitialLoad = T(5, function() {
                a.m ? e.H(tk("disableInitialLoad", "pubads"), a) : (_.N(c, 4, !0), f || (f = !0, Hq()))
            });
            this.enableSingleRequest = T(6, function() {
                if (a.m && !_.M(c, 6)) return e.H(sk("enableSingleRequest"), a), !1;
                e.info(vk("single request"), a);
                _.N(c, 6, !0);
                return !0
            });
            this.enableAsyncRendering = T(7, function() {
                return !0
            });
            this.enableSyncRendering = T(8, function() {
                nf("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = T(485, function(g) {
                var h = new _.ji;
                _.N(h, 1, 800);
                _.ki(h, 400);
                _.N(h, 3, 3);
                if (_.E(g)) {
                    var k = g.fetchMarginPercent;
                    "number" === typeof k && (0 <= k ? _.N(h, 1, k) : -1 == k && _.N(h, 1, void 0));
                    k = g.renderMarginPercent;
                    "number" === typeof k && (0 <= k ? _.ki(h, k) : -1 == k && _.N(h, 2, void 0));
                    g = g.mobileScaling;
                    "number" === typeof g && (0 < g ? _.N(h, 3, g) : -1 == g && _.N(h, 3, 1))
                }
                _.Qd(c, 5, h)
            });
            this.setCentering = T(9, function(g) {
                a.log.info(wk("centering", String(g)), a);
                Iq(pq()).o = g
            });
            this.definePassback = T(10, function(g, h) {
                return (g = Jq(a, g, h)) && g.l()
            });
            this.refresh = T(11, function(g, h) {
                var k = Ri(c);
                _.D(g) ? (g = Eq(g, b), Kq(a, k, g, h)) : Kq(a, k, g, h)
            });
            this.enableVideoAds = T(12, function() {
                a.A = !0;
                Lq(a)
            });
            this.setVideoContent = T(13, function(g, h) {
                a.A = !0;
                a.M = g;
                a.L = h;
                Lq(a);
                a.I = !0
            });
            this.collapseEmptyDivs = T(14, function(g) {
                g = void 0 === g ? !1 : g;
                _.M(c, 11) ? e.H(Gk(), a) : a.m ? e.H(sk("collapseEmptyDivs"), a) : (g && _.N(c, 10, !0), _.ya("gpt_ced", function(h) {
                    _.A(h, "sc", g ? "t" : "f");
                    _.A(h, "level", "page");
                    _.z(h)
                }), e.info(Fk(String(!!g)), a), _.N(c, 11, !0));
                return !!_.M(c, 11)
            });
            this.clear = T(15, function(g) {
                _.D(g) && (g = Eq(g, b));
                return Mq(a, c, g)
            });
            this.setLocation = T(16, function(g, h, k) {
                if (void 0 !== h) {
                    if ("number" !== typeof g) return e.H(Ek("Latitude")), d;
                    if ("number" !== typeof h) return e.H(Ek("Longitude")), d;
                    var l = new li;
                    g = _.N(l, 1, g);
                    h = _.N(g, 2, h);
                    if (void 0 !== k) {
                        if (isNaN(k)) return e.H(Ek("Radius")), d;
                        _.N(h, 3, Math.round(k))
                    }
                    k = pi[0];
                    c.j || (c.j = {});
                    g = h ? _.oa(h) : h;
                    c.j[9] = h;
                    _.Md(c, 9, k, g);
                    return d
                }
                if ("string" !== typeof g) return e.H(Ek("Address")), d;
                _.Md(c, 8, pi[0], g);
                return d
            });
            this.setCookieOptions = T(17, function(g) {
                Nq(a, g);
                return d
            });
            this.setTagForChildDirectedTreatment = T(18, function(g) {
                0 !== g && 1 !== g ? a.log.H(Nk(String(g)), a) : Iq(pq()).A = g;
                return d
            });
            this.clearTagForChildDirectedTreatment = T(19, function() {
                Iq(pq()).A = -1;
                return d
            });
            this.setPublisherProvidedId = T(20, function(g) {
                a.m ? a.log.H(uk("setPublisherProvidedId", g), a) : (a.log.info(wk("PPID", g), a), Iq(pq()).J = g);
                return d
            });
            this.set = T(21, function(g, h) {
                var k = "string" === typeof g && !!g.length;
                if (_.x(213) ? !k || void 0 === um()[g] || "string" !== typeof h : !k) return e.H(V("PubAdsService.set", [g, h]), a), d;
                (k = ub(_.Pd(c, gi, 14), function(l) {
                    return _.L(l, 1) === g
                })) ? ii(k, [h]): (k = hi(new gi, g), Ld(k, 2, h), Sd(c, 14, k, gi));
                a.set(g, h);
                e.info(ck(g, String(h), a.aa()), a);
                return d
            });
            this.get = T(22, function(g) {
                if (_.x(213) && "string" !== typeof g) return e.H(V("PubAdsService.get", [g]), a), null;
                var h = ub(_.Pd(c, gi, 14), function(k) {
                    return _.L(k, 1) === g
                });
                return (h = h && _.L(h, 2)) ? h[0] : null
            });
            this.getAttributeKeys = T(23, function() {
                return _.t(_.Pd(c, gi, 14), function(g) {
                    return _.L(g, 1)
                })
            });
            this.display = T(24, function(g, h, k, l) {
                return void a.display(g, h, void 0 === k ? "" : k, void 0 === l ? "" : l)
            });
            this.updateCorrelator = T(25, function() {
                nf(lb("update"));
                a.log.H(hl(), a);
                a.F = -1;
                Oq(a);
                return d
            });
            this.defineOutOfPagePassback = T(35, function(g) {
                if (g = Jq(a, g, [1, 1])) g.j.va = !0;
                return g && g.l()
            });
            this.setForceSafeFrame = T(36, function(g) {
                if ("boolean" !== typeof g) return e.H(Dk(String(g)), a), d;
                _.N(c, 13, g);
                return d
            });
            this.setSafeFrameConfig = T(37, function(g) {
                if (g && _.E(g)) {
                    if (g = Dm(g)) Iq(pq()).B = g
                } else a.log.error(V("PubAdsService.setSafeFrameConfig", [g]), a);
                return d
            });
            this.setRequestNonPersonalizedAds = T(445, function(g) {
                if (0 !== g && 1 !== g) a.log.H(cl(String(g)), a);
                else if (g) {
                    if ((g = ea()) && g.frames && !g.frames.GoogleSetNPA) try {
                        var h = g.document,
                            k = new _.qe(h),
                            l = h.body || h.head && h.head.parentElement;
                        if (l) {
                            var m = _.Ce(k, "IFRAME");
                            m.name = "GoogleSetNPA";
                            m.id = "GoogleSetNPA";
                            m.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                            l.appendChild(m)
                        }
                    } catch (u) {}
                } else(h = ea().document.getElementById("GoogleSetNPA")) && h.parentNode && h.parentNode.removeChild(h);
                return d
            });
            this.setTagForUnderAgeOfConsent = T(447, function(g) {
                g = void 0 === g ? 2 : g;
                if (2 !== g && 0 !== g && 1 !== g) return e.H(dl(String(g)), a), d;
                _.N(c, 12, g);
                return d
            });
            this.getCorrelator = T(27, function() {
                return Pq(a)
            });
            this.getTagSessionCorrelator = T(631, function() {
                return oq(pq()).ca
            });
            this.getVideoContent = T(30, function() {
                return a.j ? qq() : null
            });
            this.getVersion = T(568, function() {
                return a.getVersion()
            });
            this.forceExperiment = T(569, function(g) {
                g = parseInt(g, 10);
                0 < g && _.vh.C().l(g)
            });
            this.setCorrelator = T(28, function(g) {
                nf(lb("set"));
                a.log.H(gl(), a);
                Ag(window) || ("number" === typeof g && isFinite(g) && 0 == g % 1 && 0 < g ? (a.F = g, Oq(a)) : a.log.H(Rk(String(g)), a));
                return d
            });
            this.setKidsFriendlyAds = T(642, function(g) {
                0 !== g && 1 !== g ? a.log.H(Sk(String(g)), a) : Iq(pq()).F = g;
                return d
            });
            this.markAsAmp = T(570, function() {
                return void Qq(a)
            });
            this.isSRA = T(571, function() {
                return !!_.M(c, 6)
            });
            this.setImaContent = T(328, function(g, h) {
                a.I ? (a.A = !0, a.M = g, a.L = h, Lq(a), a.I = !0) : (a.A = !0, Lq(a), "string" === typeof g && (a.O = g), "string" === typeof h && (a.N = h))
            });
            this.getImaContent = T(329, function() {
                return a.I ? a.j ? qq() : null : a.j ? {
                    vid: a.O,
                    cmsid: a.N
                } : null
            });
            this.isInitialLoadDisabled = T(572, function() {
                return !!_.M(c, 4)
            });
            this.addSupportingUrl = T(634, function(g) {
                if ("string" !== typeof g || !g.match(_.Ge)[1]) return e.H(V("PubAdsService.addSupportingUrl", [g]), a), d;
                _.vb(_.L(c, 7), g) || Ld(c, 7, g);
                return d
            })
        };
    _.B(Rq, wm);
    var Sq = function(a, b) {
            a: {
                b = b[0];a = a[0];
                for (var c = Db, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                    var f = c(b[e], a[e]);
                    if (0 != f) {
                        b = f;
                        break a
                    }
                }
                b = Db(b.length, a.length)
            }
            return b
        },
        Tq = function() {
            var a = this,
                b = [],
                c = !1,
                d = wj.C();
            this.addSize = _.S(88, function(e, f) {
                var g;
                (g = !dn(e) || "fluid" === e) || ((g = dn(f)) || (g = _.D(f) && rb(f, dn)), g = !g);
                if (g) return c = !0, d.H(V("SizeMappingBuilder.addSize", [e, f])), a;
                b.push([e, f]);
                return a
            });
            this.build = _.S(89, function() {
                if (c) return d.H(ak()), null;
                Eb(b, Sq);
                return b
            })
        };
    var Uq = 0,
        Vq = function() {
            try {
                Ao();
                zo();
                var a = _.ai(152);
                a && a.length && _.J(a, function() {
                    _.vh.C().l(a)
                });
                _.xh(13);
                _.xh(3)
            } catch (b) {
                _.bj(408, b, !0)
            }
        },
        Wq = _.S(297, function(a) {
            _.J(a.getElementsByTagName("script"), function(b) {
                var c = b.src;
                !c || -1 == c.indexOf("/tag/js/gpt.js") && -1 == c.indexOf("/tag/js/gpt_mobile.js") || !b.innerHTML || b.googletag_executed || (b.googletag_executed = !0, eval(b.innerHTML))
            })
        }, function(a, b) {
            _.aj(a, b);
            window.console && window.console.error && window.console.error(b)
        }),
        Xq = function() {
            Uq = _.fh();
            Vq();
            try {
                _.x(79) || Uo();
                for (var a = _.bg(26), b = 0; b < a; ++b) _.Ro(window);
                Vp();
                wa("defineOutOfPageSlot", ao);
                wa("defineSlot", Yn);
                wa("defineUnit", Yn);
                wa("destroySlots", Zn);
                wa("getWindowsThatCanCommunicateWithHostpageLibrary", Sn);
                wa("display", bo);
                Lm();
                wa("getEventLog", function() {
                    return new Bq
                });
                wa("sizeMapping", _.S(90, function() {
                    return new Tq
                }));
                wa("apiReady", !0);
                _.xa().fifWin && "complete" != document.readyState ? Yh(window, function() {
                    window.setTimeout(function() {
                        tl()
                    }, 0)
                }) : tl();
                Wq(document);
                dj()
            } catch (c) {
                _.bj(106, c)
            }
        };
    _.Yq = new _.Zb(_.Xb, "https://www.googletagservices.com/tag/js/vfci/v/2019061304/vfci.html");
    _.Zq = function() {
        this.l = null;
        this.j = To()
    };
    Wa(_.Zq);
    var $q = Eg(function(a) {
        return a && a.src ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2
    }, function(a, b) {
        return a + "\x0B" + (b[0] && b[0].src)
    });
    var ar = null,
        br = function(a, b, c, d) {
            try {
                var e;
                if (!(e = !b)) {
                    var f;
                    if (!(f = !_.to(b, c, !1, void 0 === d ? 100 : d))) {
                        a: {
                            do {
                                var g = _.Qe(b, c);
                                if (g && "fixed" == g.position) {
                                    var h = !1;
                                    break a
                                }
                            } while (b = b.parentElement);h = !0
                        }
                        f = !h
                    }
                    e = f
                }
                e && (a.height = -1)
            } catch (k) {
                a.width = -1, a.height = -1
            }
        },
        cr = function(a, b, c, d, e) {
            c = void 0 === c ? "" : c;
            d = void 0 === d ? function(h) {
                return !!h
            } : d;
            e = void 0 === e ? "," : e;
            var f = [],
                g = !1;
            _.J(a, function(h) {
                h = b(h);
                var k = d(h);
                g = g || k;
                f.push(String(k ? h : c))
            });
            return g ? f.join(e) : null
        },
        dr = function(a) {
            var b = Vb(a.v);
            a = _.Bb(a.Z);
            a.length && null == b.excl_cat && (b.excl_cat = a);
            return b
        },
        er = function(a, b) {
            var c = {};
            _.O(a, function(d, e) {
                if (b[e]) {
                    var f = _.w(b[e], function(g) {
                        return -1 < d.indexOf(g)
                    });
                    f.length && (c[e] = f)
                }
            });
            return c
        },
        fr = function(a, b) {
            b = void 0 === b ? function() {
                return !0
            } : b;
            a = dr(a);
            var c = [];
            _.O(a, function(d, e) {
                d = _.w(d, function(g) {
                    return b(g, e)
                });
                if (d.length) {
                    d = _.t(d, encodeURIComponent);
                    var f = encodeURIComponent(e);
                    c.push(f + "=" + d.join())
                }
            });
            return c
        },
        gr = function(a) {
            var b = !1,
                c = _.t(_.Pd(a, gi, 2), function(d) {
                    var e = _.L(d, 1);
                    b = "excl_cat" === e;
                    d = _.L(d, 2);
                    return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
                });
            a = _.L(a, 3);
            !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
            return c
        },
        hr = function(a, b, c, d, e) {
            this.l = b;
            this.Sa = c;
            this.o = d;
            this.B = (this.v = a) || _.x(139);
            this.j = e;
            this.D = [];
            this.m = "";
            this.I = um();
            this.A = [];
            this.G = [];
            this.F = Wb(_.dg(7))
        },
        kr = function(a) {
            var b = void 0 === b ? window : b;
            var c = a.j.j;
            if (!_.D(c)) return "";
            if (a.v) 0 == c.length && (c = dp(a.l));
            else {
                if (0 == c.length) return "";
                1 < c.length && (c = [c[0]])
            }
            var d = !!Yl(_.q);
            c = _.w(c, function(e) {
                return d && _.on(e) ? (wj.C().H(fl(String(e.getAdUnitPath()))), !1) : !0
            });
            if (!c.length) return "";
            30 < c.length && (wj.C().H(Zk("30", String(c.length), String(c.length - 30))), c = Cb(c, 0, 30));
            ir(a, c, b);
            jr(a);
            return a.m
        },
        lr = function(a, b) {
            try {
                var c = b.top;
                var d = Ah(c.document, c)
            } catch (e) {
                d = new _.oe(-12245933, -12245933)
            }
            Y(a, "scr_x", Math.round(d.x), {
                ga: !0
            });
            Y(a, "scr_y", Math.round(d.y), {
                ga: !0
            })
        },
        mr = function(a) {
            var b = window;
            var c = b.document.domain;
            var d = b.document.cookie,
                e = b.history.length,
                f = b.screen,
                g = b.document.referrer;
            if (fg()) c = _.yg().gaGlobal || {};
            else {
                var h = Math.round((new Date).getTime() / 1E3),
                    k = b.google_analytics_domain_name;
                c = "undefined" == typeof k ? io("auto", c) : io(k, c);
                var l = -1 < d.indexOf("__utma=" + c + "."),
                    m = -1 < d.indexOf("__utmb=" + c),
                    u;
                (u = (kg() || _.yg()).gaGlobal) || (u = {}, (kg() || _.yg()).gaGlobal = u);
                var v = !1;
                if (l) g = d.split("__utma=" + c + ".")[1].split(";")[0].split("."), m ? u.sid = g[3] : u.sid || (u.sid = h + ""), u.vid = g[0] + "." + g[1], u.from_cookie = !0;
                else {
                    u.sid || (u.sid = h + "");
                    if (!u.vid) {
                        v = !0;
                        m = Math.round(2147483647 * Math.random());
                        l = [fo.appName, fo.version, fo.language ? fo.language : fo.browserLanguage, fo.platform, fo.userAgent, go() ? 1 : 0].join("");
                        f ? l += f.width + "x" + f.height + f.colorDepth : _.q.java && _.q.java.awt && (f = _.q.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), l += f.screen.width + "x" + f.screen.height);
                        l = l + d + (g || "");
                        for (g = l.length; 0 < e;) l += e-- ^ g++;
                        u.vid = (m ^ ho(l) & 2147483647) + "." + h
                    }
                    u.from_cookie = !1
                }
                if (!u.cid) {
                    b: for (h = 999, k && (k = 0 == k.indexOf(".") ? k.substr(1) : k, h = k.split(".").length), k = 999, d = d.split(";"), g = 0; g < d.length; g++)
                        if (f = jo.exec(d[g]) || ko.exec(d[g]) || lo.exec(d[g])) {
                            e = f[1] || 0;
                            if (e == h) {
                                var y = f[2];
                                break b
                            }
                            e < k && (k = e, y = f[2])
                        }v && y && -1 != y.search(/^\d+\.\d+$/) ? u.vid = y : y != u.vid && (u.cid = y)
                }
                u.dh = c;
                u.hid || (u.hid = Math.round(2147483647 * Math.random()));
                c = u
            }
            Y(a, "ga_vid", c.vid, {
                Y: !1
            });
            Y(a, "ga_sid", c.sid, {
                Y: !1
            });
            Y(a, "ga_hid", c.hid, {
                Y: !1
            });
            Y(a, "ga_fc", c.from_cookie, {
                Y: !1
            });
            Y(a, "ga_cid", c.cid, {
                Y: !1
            });
            Y(a, "ga_wpids", b.google_analytics_uacct)
        },
        nr = function(a) {
            return a === a.top || _.x(156) && Le(a.top) || _.x(157) && gf(window.IntersectionObserver)
        },
        ir = function(a, b, c) {
            c = void 0 === c ? window : c;
            var d = c.document;
            yn(b[0], vg(c));
            Y(a, "gdfp_req", 1, {
                Y: !1
            });
            Y(a, "pvsid", a.j.D);
            Y(a, "correlator", a.j.K);
            Y(a, "output", a.j.V, {
                Y: !1
            });
            Y(a, "callback", a.j.J, {
                Y: !1
            });
            Y(a, "impl", a.j.A, {
                Y: !1
            });
            a.o && 1 == a.o.j || (Y(a, "adsid", a.j.I), Y(a, "pucrd", a.j.X));
            Y(a, "jar", a.j.O);
            a.j.persistentRoadblocksOnly && Y(a, "per_only", 1);
            a.j.P && (Y(a, "hxva", 1, {
                Y: !1
            }), Y(a, "cmsid", a.j.R), Y(a, "vid", a.j.T));
            isNaN(a.j.videoPodNumber) || Y(a, "pod", a.j.videoPodNumber, {
                Y: !1
            });
            isNaN(a.j.videoPodPosition) || Y(a, "ppos", a.j.videoPodPosition, {
                Y: !1
            });
            isNaN(a.j.videoStreamCorrelator) || Y(a, "scor", a.j.videoStreamCorrelator, {
                Y: !1
            });
            or(a);
            Y(a, "vrg", _.Si());
            a.o && 0 !== a.o.j && Y(a, "co", a.o.j, {
                ga: !0
            });
            pr(a);
            1 === a.l.F && Y(a, "kfa", 1);
            qr(a, b[0].A);
            rr(a);
            if (_.x(178)) 1 == a.j.o && sr(a, c, !1);
            else {
                var e = rb(b, function(h) {
                    return 0 < h.B && !Jm(h.na())
                });
                sr(a, c, e)
            }
            Y(a, "sc", _.ai(6) ? 1 : 0, {
                ga: !0
            });
            window.postMessage && Y(a, "sfv", _.Om());
            Y(a, "ecs", a.j.kb);
            a.v || (tr(a, b[0]), ur(a, b[0]));
            a.B ? (vr(a, b, d), wr(a), xr(a, b)) : (yr(a, b[0], d), wr(a), zr(a, b[0]));
            Ar(a, b);
            Br(a, c);
            null != (a.Sa.j.google_preview || null) && Y(a, "gct", a.Sa.j.google_preview || null);
            if (a.l.v) {
                Y(a, "is_amp", "1");
                Y(a, "amp_v", gg());
                Y(a, "act", hg());
                lg && !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(c.location.href) && Y(a, "ati", 1);
                (e = mg(c)) && Y(a, "apn", e.substr(0, 10));
                try {
                    var f = JSON.parse(c.context.cachedFrameName_);
                    f.attributes && f.attributes.useSameDomainRenderingUntilDeprecated && Y(a, "asd", 1)
                } catch (h) {}
            }
            nr(c) && Y(a, "abxe", 1);
            (f = _.cg(10)) && Y(a, "expflags", f);
            Cr(a, b, c);
            f = {};
            f.u_tz = -(new Date).getTimezoneOffset();
            f.u_his = tg();
            f.u_java = !!ae.navigator && "unknown" !== typeof ae.navigator.javaEnabled && !!ae.navigator.javaEnabled && ae.navigator.javaEnabled();
            ae.screen && (f.u_h = ae.screen.height, f.u_w = ae.screen.width, f.u_ah = ae.screen.availHeight, f.u_aw = ae.screen.availWidth, f.u_cd = ae.screen.colorDepth);
            ae.navigator && ae.navigator.plugins && (f.u_nplug = ae.navigator.plugins.length);
            ae.navigator && ae.navigator.mimeTypes && (f.u_nmime = ae.navigator.mimeTypes.length);
            Dr(a, f);
            Er(a);
            try {
                var g = zg()
            } catch (h) {
                g = "0"
            }
            Y(a, "flash", g, {
                Y: !1,
                ga: !0
            });
            Fr(a, b, c);
            _.x(2) || Gr(a, c);
            (_.x(82) || _.x(84) || _.si.C().j) && Y(a, "rumc", _.Ii, {
                Y: !1
            });
            _.x(83) && Y(a, "rume", 1, {
                Y: !1
            });
            Y(a, "vis", _.Ml(d), {
                Y: !1
            });
            0 === $q(_.ai(172)) || Y(a, "stss", $q(_.ai(172)));
            !a.l.v && Hr(c) && Y(a, "arp", 1, {
                Y: !1
            });
            _.q.navigator && _.q.navigator.deviceMemory && Y(a, "dmc", _.q.navigator.deviceMemory);
            lr(a, c);
            Ir(a, b, c);
            0 < a.j.G.length && Y(a, "psts", a.j.G);
            mr(a);
            _.x(23) && (Y(a, "js", uo(c)), Y(a, "ms", vo(a.j.D.toString(), c)));
            Jr(a, c, b);
            0 != _.Oi(a.v) && 0 != a.j.m.length && (b = Gb(a.j.m, a.j.j) ? -1 : a.j.m.length, Y(a, "optslots", b));
            b = _.L(a.j.l.W, 7);
            _.x(164) && b.length && Y(a, "supporting_urls", _.t(b, function(h) {
                return encodeURIComponent(h)
            }))
        },
        Ir = function(a, b, c) {
            var d = [],
                e = [];
            _.J(b, function(f) {
                a: {
                    if (!f.ja) {
                        var g = (g = _.W(f)) && g.parentElement;
                        if (!g) {
                            g = null;
                            break a
                        }
                        f.ja = _.Qe(g, window)
                    }
                    g = f.ja
                }
                if ((g = _.mf(g)) && (1 != g[0] || 1 != g[3])) d.push("-1x-1"),
                e.push("-1x-1");
                else if (a.v || Fn(f)) {
                    var h = (g = _.W(f)) && g.parentElement,
                        k = _.Dn(f) || new _.pe(0, 0);
                    br(k, h, c);
                    d.push(k.width + "x" + k.height);
                    f.Ma || (f.Ma = Mi(_.W(f)));
                    f = f.Ma || new _.pe(0, 0);
                    br(f, g, c, 1); - 1 == k.height && (f.height = -1);
                    e.push(f.width + "x" + f.height)
                }
            });
            Y(a, "psz", d, {
                ya: "|"
            });
            Y(a, "msz", e, {
                ya: "|"
            })
        },
        Jr = function(a, b, c) {
            var d = [],
                e = [];
            _.J(c, function(f) {
                var g = new _.wo,
                    h = _.W(f);
                f = 0;
                if (h) {
                    var k = _.ul(!0, b).width;
                    if (null !== b && b != b.top) {
                        var l = _.ul(!1, b).width;
                        (-12245933 == k || -12245933 == l || l < k) && g.set(8)
                    }
                    for (l = 0; h && 100 > l; l++, h = h.parentElement) {
                        var m = _.Qe(h, b);
                        if (m) {
                            if (m.overflowY && "visible" != m.overflowY) {
                                g.set(2);
                                var u = Mi(h);
                                u && (f = f ? Math.min(f, u.width) : u.width);
                                if (g.get(9)) break
                            }
                            "sticky" != m.position && "fixed" != m.position || g.set(9);
                            "none" == m.display && g.set(7);
                            "IFRAME" == h.nodeName && (m = parseInt(m.width, 10), m < k && (g.set(8), f = f ? Math.min(m, f) : m))
                        } else g.set(3)
                    }
                } else g.set(1);
                d.push(_.xo(g));
                e.push(f)
            });
            Y(a, "fws", d);
            Y(a, "ohw", e)
        },
        Lr = function(a, b, c) {
            var d = [],
                e = [];
            if (a.v) _.J(b, function(f) {
                f = jp(a.l, f, c) || Kr;
                d.push(Math.round(f.x));
                e.push(Math.round(f.y))
            });
            else if (b = (a.l.v ? jg() : null) || jp(a.l, b[0], c)) d.push(Math.round(b.x)), e.push(Math.round(b.y));
            a.B ? (Y(a, "adxs", d), Y(a, "adys", e)) : (Y(a, "adx", d[0], {
                ga: !0
            }), Y(a, "ady", e[0], {
                ga: !0
            }))
        },
        Nr = function(a, b) {
            var c = a.j.l.W;
            return _.t(b, a.v ? function(d) {
                var e;
                _.x(143) ? e = d.Va || Di(d, hp(a.l, d, c)) : e = Di(d);
                return d.Va = e
            } : function(d) {
                return Mr(a, d)
            }).join(",")
        },
        Mr = function(a, b) {
            var c = a.j.l.W;
            a = b.Va || Di(b, hp(a.l, b, c));
            _.x(159) && (b.Va = a);
            return a
        },
        sr = function(a, b, c) {
            var d = Oe(b),
                e = _.t(kb, function(h) {
                    a: {
                        var k = 0;d || (k |= 256);c && (k |= 67108864);!a.v && _.x(139) && (k |= 268435456);
                        if (k) var l = k;
                        else {
                            var m = _.Sl(d);
                            Zl(m, h) && (k |= 64);
                            m.improveCollisionDetection = 1;
                            switch (h) {
                                case 2:
                                case 1:
                                    2 != (0, _.jf)() && (k |= 536870912);
                                    m = 0;
                                    try {
                                        m |= d != d.top ? 512 : 0;
                                        l = Math.min(d.screen.width || 0, d.screen.height || 0);
                                        m |= l ? 320 > l ? 8192 : 0 : 2048;
                                        var u;
                                        if (u = d.navigator) {
                                            var v = d.navigator.userAgent;
                                            u = /Firefox/.test(v) || /Android 2/.test(v) || /iPhone OS [34]_/.test(v) || /Windows Phone (?:OS )?[67]/.test(v)
                                        }
                                        m |= u ? 1048576 : 0
                                    } catch (Qa) {
                                        m |= 32
                                    }
                                    l = m;
                                    u = 0;
                                    try {
                                        u |= _.Ul(d) ? 0 : 8, u |= Xl(d), u |= Yl(d)
                                    } catch (Qa) {
                                        u |= 32
                                    }
                                    if (2 == h) {
                                        var y = d.innerWidth;
                                        v = _.Sl(d).improveCollisionDetection;
                                        var H = Math.round(d.innerWidth / 320 * 50 + 15);
                                        m = [];
                                        for (var C = 0; 3 > C; C++)
                                            for (var G = 0; 3 > G; G++) m.push({
                                                x: G / 2 * y,
                                                y: C / 2 * H
                                            });
                                        b: {
                                            for (y = 0; y < m.length; y++) {
                                                H = d;
                                                G = m[y];
                                                C = v;
                                                var P = H.document;
                                                P.elementFromPoint(G.x, G.y);
                                                var Ga = G.x;
                                                G = G.y;
                                                P.hasOwnProperty("_goog_efp_called_") || (P._goog_efp_called_ = P.elementFromPoint(Ga, G));
                                                if ((P = G = P.elementFromPoint(Ga, G)) && !(P = "fixed" == _.Jf(G, "position"))) {
                                                    if (C = 1 == C) c: {
                                                        H = H.document;
                                                        for (C = G.offsetParent; C && C != H.body; C = C.offsetParent)
                                                            if ("fixed" == _.Jf(C, "position")) {
                                                                C = !0;
                                                                break c
                                                            }
                                                        C = !1
                                                    }
                                                    P = C
                                                }
                                                if (P) {
                                                    v = !0;
                                                    break b
                                                }
                                            }
                                            v = !1
                                        }
                                        v && (u |= 16777216)
                                    }
                                    l = k | l | u;
                                    break a;
                                case 8:
                                    l = _.Zq.C();
                                    l.j ? (l = l.j, l = !l || 2 > l.length) : l = !1;
                                    u = 0;
                                    try {
                                        u |= d != d.top ? 512 : 0, u |= d.navigator && /Android 2/.test(d.navigator.userAgent) ? 1048576 : 0
                                    } catch (Qa) {
                                        u |= 32
                                    }
                                    v = 0;
                                    try {
                                        v |= Xl(d), v |= Yl(d), v |= _.Ul(d) ? 0 : 8
                                    } catch (Qa) {
                                        v |= 32
                                    }
                                    l = k | u | v | (l ? 0 : 134217728);
                                    break a;
                                default:
                                    l = k | 32
                            }
                        }
                    }
                    k = new Lh;h = _.N(k, 10, h);
                    return _.N(h, 11, l)
                });
            Y(a, "plat", Or(e) || null);
            var f = Pi();
            if (f && _.x(193)) {
                var g = _.We(hb, function(h) {
                    return h == f
                });
                g && (Y(a, "fpla", hb[g]), Y(a, "adtest", "on"));
                b = Qi();
                e = Rh(Qh(Ph(Oh(new Nh, a.v), f), !g), e);
                pa(b, e)
            }
        },
        Fr = function(a, b, c) {
            c = void 0 === c ? window : c;
            var d = c.document;
            b = a.v ? ui(a.l.l) : vi(b[0], a.l.m) || ui(a.l.l);
            var e = Fi(d.URL, a.Sa.j.google_preview || null),
                f = Fi(d.referrer, a.Sa.j.google_preview || null);
            d = !1;
            if (null != b) {
                var g = e;
                Ag(c) || (f = "", d = !0)
            } else b = e;
            a.l.v && (f = (f = fg()) && f.referrer);
            if (_.x(2)) Y(a, "url", b), Y(a, "ref", f);
            else {
                e = new Og(c);
                var h = e.j[0].depth,
                    k = h && 0 < h;
                if (k && (Y(a, "nhd", h), c.location.ancestorOrigins)) {
                    c = [];
                    h = Math.min(e.j.length, 27);
                    for (var l = 1; l < h; l++) e.j[l] && e.j[l].url && (c[l - 1] = e.j[l].url);
                    c = Pg(e, c.reverse());
                    Y(a, "iag", c);
                    c = e.j;
                    h = [];
                    for (l = c.length - 1; 0 < l; l--) {
                        var m = c[l];
                        m && null != m.url && h.push(He(m.url.match(_.Ge)[3] || null))
                    }
                    c = Kg(h);
                    0 < c && Y(a, "mdo", c)
                }
                Y(a, "url", b);
                null != g && g != b && Y(a, "loc", g);
                Y(a, "ref", f);
                k && (g = e.j[Math.max(e.j.length - 1, 0)].url) && Y(a, "top", d ? He(g.match(_.Ge)[3] || null) : g)
            }
        },
        Gr = function(a, b) {
            b = void 0 === b ? window : b;
            var c = b.document,
                d = c.scripts;
            d && Y(a, "dssz", d.length);
            b = new Og(b);
            if (d = b.l.document && b.l.document.scripts ? b.l.document.scripts : []) {
                for (var e = [], f = d.length - 1; 0 <= f && 26 > e.length;) d[f].src && e.unshift(d[f].src), f--;
                d = Pg(b, e)
            } else d = 0;
            Y(a, "icsg", d, {
                ga: !0
            });
            if (b = b.l.document && b.l.document.scripts ? b.l.document.scripts : []) {
                d = [];
                for (e = b.length - 1; 0 <= e; e--)(f = b[e]) && null != f.src && d.push(He(f.src.match(_.Ge)[3] || null));
                b = Kg(d)
            } else b = 0;
            Y(a, "mso", b);
            b = Error();
            b.stack && (d = b.stack, e = d.split(/\r\n|\r|\n/).length, "Error" == d.slice(0, 5) && e--, d = e - 13, 0 > d && (d = 0, e = new _.Ti("gpt_negative_stack_trace", Ai(), _.ai(23)), _.z(e, a.l), _.A(e, "stackTrace", b.stack), _.Ui(e)), Y(a, "std", d, {
                ga: !0
            }));
            c.currentScript && c.currentScript.text && Y(a, "csl", c.currentScript.text.length)
        },
        zr = function(a, b) {
            b = fr(b);
            Y(a, "scp", b, {
                ya: "&"
            })
        },
        Pr = function(a) {
            a = _.t(a, dr);
            for (var b = a.shift() || {}; a.length;) b = er(b, a.shift());
            return b
        },
        xr = function(a, b) {
            var c;
            _.x(49) && 1 < b.length ? c = Qr(a, b) : c = _.t(b, function(d) {
                return fr(d).join("&")
            });
            b = c;
            b.join("|").length == c.length - 1 && (b = null);
            Y(a, "prev_scp", b, {
                ya: "|"
            })
        },
        Qr = function(a, b) {
            var c = [],
                d = Pr(b);
            _.J(b, function(f) {
                f = fr(f, function(g, h) {
                    h = d[h];
                    return !h || -1 == h.indexOf(g)
                });
                c.push(f.join("&"))
            });
            var e = [];
            _.O(d, function(f, g) {
                f = _.t(f, encodeURIComponent);
                g = encodeURIComponent(g);
                e.push(g + "=" + f.join())
            });
            e.length && Y(a, "csp", e, {
                ya: "&"
            });
            return c
        },
        Dr = function(a, b) {
            _.O(b, function(c, d) {
                Y(a, d, c, {
                    Y: !1
                })
            })
        },
        pr = function(a) {
            var b = a.l.A; - 1 !== b && Y(a, "tfcd", b, {
                ga: !0
            })
        },
        tr = function(a, b) {
            b = b.hc; - 1 !== b && Y(a, "tfcd", b, {
                ga: !0
            })
        },
        qr = function(a, b) {
            var c = _.ai(221);
            uf = _.x(24);
            b = Ff(c, b);
            b.cb && Y(a, "npa", 1);
            b.Fb && (Y(a, "vcd", b.Fb), b.Qb && Y(a, "gvcd", b.Qb));
            Y(a, "guci", b.Za)
        },
        rr = function(a) {
            var b = _.Kd(a.j.l.W, 12, 2);
            2 !== b && Y(a, "tfua", b, {
                ga: !0
            })
        },
        ur = function(a, b) {
            b = b.Hb;
            2 !== b && Y(a, "tfua", b)
        },
        wr = function(a) {
            a.o && 1 == a.o.j || Y(a, "ppid", a.l.J, {
                ga: !0
            })
        },
        Ar = function(a, b) {
            var c = 1 != a.j.v,
                d = b[0].V;
            var e = a.l.m;
            if (null != ui(a.l.l)) b = !0;
            else {
                for (var f = !1, g = 0; g < b.length && !f; g++) f = null != vi(b[g], e);
                b = f
            }
            e = a.j.N;
            f = 3 == a.j.v;
            g = new _.wo;
            g.set(0, c);
            g.set(1, d);
            g.set(2, b);
            g.set(3, e);
            g.set(4, f);
            c = _.xo(g);
            0 < c && Y(a, "eri", c)
        },
        Br = function(a, b) {
            var c = a.j.l.W,
                d = gr(c);
            Y(a, "cust_params", d, {
                ya: "&"
            });
            a.o && 1 != a.o.j && (Y(a, "cookie", Bo(a.o, "__gads="), {
                ga: !0
            }), a.o.A && Y(a, "cookie_enabled", "1", {
                ga: !0
            }));
            a: {
                d = "role:1 producer:12";
                var e = _.Nd(c, li, 9);c = _.L(c, 8);
                if (e || c) {
                    if (e) {
                        c = _.Id(e, 1);
                        var f = _.Id(e, 2);
                        if (null == c || null == f) {
                            d = "";
                            break a
                        }
                        d += " latlng{ latitude_e7: " + Math.round(1E7 * c) + " longitude_e7: " + Math.round(1E7 * f) + "}";
                        null != _.L(e, 3) && (d += " radius:" + _.L(e, 3))
                    } else 50 < c.length && (c = c.substring(0, 50)), d += ' loc:"' + c + '"';
                    if (rd) d = _.q.btoa(d);
                    else {
                        e = [];
                        for (f = c = 0; f < d.length; f++) {
                            var g = d.charCodeAt(f);
                            255 < g && (e[c++] = g & 255, g >>= 8);
                            e[c++] = g
                        }
                        d = sd(e, void 0)
                    }
                    d = "a " + d
                } else d = ""
            }
            d && Y(a, "uule", d);
            a.o && 1 != a.o.j && (d = b.document, (b = (ui(a.l.l) || Bi(b)) != d.URL ? d.domain : "") && Y(a, "cdm", b));
            _.x(6) || (b = new _.wo, _.q.SVGElement && _.q.document.createElementNS && b.set(0), d = ff(), d["allow-top-navigation-by-user-activation"] && b.set(1), d["allow-popups-to-escape-sandbox"] && b.set(2), _.q.crypto && _.q.crypto.subtle && b.set(3), _.q.TextDecoder && _.q.TextEncoder && b.set(4), b = _.xo(b), Y(a, "bc", b))
        },
        Cr = function(a, b, c) {
            var d = c.document;
            0 < navigator.userAgent.indexOf("MSIE ") && Xo(a.l.l, "adsense_encoding", d.charset, !1);
            Y(a, "lmt", (Date.parse(c.document.lastModified) / 1E3).toString());
            var e = _.x(43) ? _.fh() : (new Date).getTime();
            Y(a, "dt", e, {
                Y: !1
            });
            try {
                e = Uq;
                var f = Math.min(hh("domLoading") || Infinity, hh("domInteractive") || Infinity);
                var g = Infinity == f ? Math.max(hh("responseEnd"), hh("navigationStart")) : f;
                0 < g && e >= g && (Y(a, "dlt", g, {
                    Y: !1
                }), Y(a, "idt", e - g, {
                    Y: !1
                }))
            } catch (m) {
                Y(a, "idt", -9, {
                    Y: !1
                }), _.aj(479, m)
            }
            if (null == ar) {
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
                f = Bg(c, c.document, 500, 300);ar = g && !f
            }
            ar || Y(a, "ea", "0", {
                ga: !0
            });
            f = g = _.yg();
            for (e = 0; g && g != g.parent;) g = g.parent, e++, Le(g) && (f = g);
            e = f;
            g = e.location.href;
            e == e.top ? g = {
                url: g,
                Ub: !0
            } : (f = !1, (l = e.document) && l.referrer && (g = l.referrer, e.parent == e.top && (f = !0)), (e = e.location.ancestorOrigins) && (e = e[e.length - 1]) && -1 == g.indexOf(e) && (f = !1, g = e), g = {
                url: g,
                Ub: f
            });
            f = g;
            g = Bg(_.yg(), d, c.google_ad_width, c.google_ad_height);
            f = f.Ub;
            e = _.yg();
            e = e.top == e ? 0 : Le(e.top) ? 1 : 2;
            l = 4;
            g || 1 != e ? g || 2 != e ? g && 1 == e ? l = 7 : g && 2 == e && (l = 8) : l = 6 : l = 5;
            f && (l |= 16);
            g = "" + l;
            Cg();
            Y(a, "frm", g || null);
            a.l.v ? g = (g = ig()) && _.E(g.rootBounds) ? new _.pe(g.rootBounds.width, g.rootBounds.height) : null : g = _.ul(!0, c);
            g && (Y(a, "biw", g.width), Y(a, "bih", g.height));
            !Ag(c) && (g = _.ul(!1, c)) && (Y(a, "isw", g.width), Y(a, "ish", g.height));
            a.j.B && Y(a, "oid", a.j.B);
            Lr(a, b, d);
            a.B ? Y(a, "adks", Nr(a, b)) : Y(a, "adk", Mr(a, b[0]));
            d = 0;
            !_.Pa(_.q.postMessage) && (d |= 1);
            0 < d && Y(a, "osd", d);
            Rr(a);
            g = d = a.l.l;
            a.B ? g = ap(b, d, a.l.m, a.I) : ((f = a.l.m[_.R(b[0])]) && (_.x(162) ? Yo(g, f) : Yo(Zo(f), d)), g = $o(g));
            Y(a, "adsenseParameters", g, {
                Y: !1
            });
            Y(a, "ifi", b[0].Fa);
            null !== c && c != c.top ? (b = [c.document.URL], c.name && b.push(c.name), c = _.ul(!1, c, !1), b.push(c.width.toString()), b.push(c.height.toString()), c = _.Xe(b.join(""))) : c = 0;
            0 != c && Y(a, "ifk", c.toString())
        },
        Er = function(a) {
            var b = _.q.devicePixelRatio;
            (b = "number" === typeof b ? +b.toFixed(3) : null) && Y(a, "u_sd", b, {
                Y: !1
            })
        },
        or = function(a) {
            Y(a, "eid", a.j.L);
            var b = eh().split(",");
            b && Y(a, "debug_experiment_id", b)
        },
        yr = function(a, b, c) {
            Y(a, "iu", b.getAdUnitPath());
            Y(a, "sz", _.Ci(b));
            _.on(b) && Y(a, "rbv", "1");
            b.da() && Y(a, "fluid", "height");
            var d = b.ca;
            var e = !!_.M(a.j.l.W, 13);
            (d = (null === d ? e : d) ? 1 : 0) && Y(a, "fsf", d);
            Sr(a, b) && Y(a, "fsb", "1");
            d = b.B;
            0 < d && Y(a, "rc", d);
            Tr(a, b);
            b.getOutOfPage() && Y(a, "ists", "1");
            d = Jm(b.na());
            Y(a, "fa", d);
            _.x(98) && !d && op(b, c) && Y(a, "pfx", "1");
            b.B && Y(a, "prevtos", Math.min(wn(b), 3600))
        },
        vr = function(a, b, c) {
            _.J(b, function(h) {
                Ur(a, h.getAdUnitPath())
            });
            Y(a, "iu_parts", a.A);
            Y(a, "enc_prev_ius", a.G);
            Y(a, "prev_iu_szs", kp(b));
            if (_.qb(b, function(h) {
                    return h.da()
                })) {
                var d = _.t(b, function(h) {
                    return h.da() ? "height" : "0"
                });
                Y(a, "fluid", d)
            }
            var e = a.j.l.W;
            Y(a, "fsfs", cr(b, function(h) {
                h = h.ca;
                var k = !!_.M(e, 13);
                return (null === h ? k : h) ? 1 : 0
            }, 0));
            Y(a, "fsbs", cr(b, function(h) {
                return Sr(a, h) ? 1 : 0
            }, 0));
            Y(a, "rcs", cr(b, function(h) {
                return h.B
            }, 0));
            Tr(a, b[0]);
            (d = Vr(b)) && Y(a, "ists", d);
            Y(a, "fas", cr(b, function(h) {
                return Jm(h.na())
            }));
            (d = Wr(b, function(h) {
                return _.on(h)
            })) && Y(a, "rbvs", d);
            _.x(98) && (d = Wr(b, function(h) {
                return !Jm(h.na()) && op(h, c)
            })) && Y(a, "pfxs", d);
            d = cr(b, function(h) {
                h = h.B ? wn(h) : -1;
                return Math.min(h, 3600)
            }, 0, function(h) {
                return 0 <= h
            }, "_");
            Y(a, "prevtoss", d);
            var f = {};
            _.J(b, function(h) {
                (h = h.O) && (f[h] = (f[h] || 0) + 1)
            });
            if (!_.Ue(f)) {
                b = new _.Ti("gpt_sra_setclickurl");
                var g = [];
                _.O(f, function(h, k) {
                    g.push(k.length + ":" + h)
                });
                _.A(b, "lenfreqs", g.join());
                _.z(b);
                _.Ui(b, _.ai(58))
            }
        },
        Tr = function(a, b) {
            b.O && !a.v && Y(a, "click", b.O)
        },
        Sr = function(a, b) {
            b = b.Ha;
            a = a.l.B;
            return null == b.sandbox ? a.sandbox : b.sandbox
        },
        Xr = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if ("" != b[c]) {
                    for (var d = !1, e = 0; e < a.A.length; e++)
                        if (b[c] == a.A[e]) {
                            d = !0;
                            break
                        }
                    d || a.A.push(b[c])
                }
        },
        Yr = function(a, b) {
            for (var c = "", d = 0; d < b.length; d++) {
                if (0 < d) c += "/";
                else if ("" == b[0]) continue;
                for (var e = 0; e < a.A.length; e++)
                    if (b[d] == a.A[e]) {
                        c += e;
                        break
                    }
            }
            return c
        },
        Ur = function(a, b) {
            var c = "";
            "" != b && (b = _.t(b.split("/"), function(d) {
                return d.replace(/,/g, ":")
            }), Xr(a, b), c = Yr(a, b));
            a.G.push(c)
        },
        Vr = function(a) {
            return Wr(a, function(b) {
                return b.getOutOfPage()
            })
        },
        Wr = function(a, b) {
            var c = new _.wo;
            _.J(a, function(d, e) {
                c.set(a.length - e - 1, b(d))
            });
            return _.xo(c)
        },
        Rr = function(a) {
            if (a.B) {
                var b = _.t(a.j.j, function(c) {
                    return _.rp(a.j, c)
                });
                Y(a, "ucis", b, {
                    ya: "|"
                })
            } else 0 < a.j.j.length && Y(a, "uci", _.rp(a.j, a.j.j[0]))
        },
        Y = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            a.F[b] || a.D.push({
                bb: b,
                value: c,
                options: d
            })
        },
        jr = function(a) {
            var b = function(k, l) {
                k = k.toString();
                return l ? encodeURIComponent(k) : k
            };
            a.m = "" + _.ai(247) + "/gampad/ads?";
            for (var c = {
                    Oa: 0
                }; c.Oa < a.D.length; c = {
                    Ba: c.Ba,
                    Oa: c.Oa
                }, c.Oa++) {
                var d = a.D[c.Oa],
                    e = d,
                    f = e.bb,
                    g = e.value,
                    h = e.options;
                c.Ba = void 0 === h.Y ? !0 : h.Y;
                e = void 0 === h.ya ? "," : h.ya;
                h = void 0 === h.ga ? !1 : h.ga;
                if ("adsenseParameters" === f) Zr(a, d);
                else {
                    d = "";
                    if (_.E(g)) _.D(g) && g.length && (d = _.t(g, function(k) {
                        return function(l) {
                            return b(l, k.Ba)
                        }
                    }(c)).join(b(e, c.Ba)));
                    else {
                        if (null == g || !h && 0 == g) continue;
                        d = b(g, c.Ba)
                    }
                    if (d)
                        if (e = f + "=" + d, d = (_.bg(1) || (Gi() ? 8192 : 4096)) - 8, _.x(168) && a.m.length + e.length >= d) {
                            if ("supporting_urls" == f)
                                for (e = 0; e < g.length; e++) {
                                    h = (e ? b(",", c.Ba) : "&" + f + "=") + b(g[e], c.Ba);
                                    if (a.m.length + h.length > d) break;
                                    a.m += h
                                }
                            _.ya("gpt_url_trunc", function(k) {
                                return function(l) {
                                    _.A(l, "lps", _.t(a.D.slice(k.Oa), function(m) {
                                        return m.bb
                                    }).join());
                                    _.z(l)
                                }
                            }(c));
                            a.m += "&trunc=1";
                            break
                        } else "?" !== a.m[a.m.length - 1] && (a.m += "&"), a.m += e
                }
            }
        },
        Zr = function(a, b) {
            var c = [],
                d = [];
            b = _.D(b.value) ? b.value : [];
            b = _.r(b);
            for (var e = b.next(); !e.done; e = b.next()) {
                var f = e.value;
                e = f.bb;
                var g = f.Wb,
                    h = f.Vc;
                f = g ? encodeURIComponent(g.toString()) : "";
                h ? (g = _.t(h, function(k) {
                    return k ? encodeURIComponent(encodeURIComponent(k)) : ""
                }).join(","), d.push(e + "," + encodeURIComponent(f) + "," + g)) : g && "url" != e && c.push(e + "=" + f)
            }
            c.length && (a.m += "&" + c.join("&"));
            d.length && (a.m += "&sps=" + d.join("|"))
        },
        Hr = function(a) {
            a = Le(a.top) ? a.top : a;
            return _.E(a.AMP) && !!_.We(a.AMP, function(b, c) {
                return !/^inabox/i.test(c)
            })
        },
        Or = function(a) {
            var b = [];
            a = _.r(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                c = c.value;
                var d = _.L(c, 11);
                b.push(_.L(c, 10) + ":" + d)
            }
            return b.join()
        },
        Kr = new _.oe(-9, -9);
    var $r = null,
        bs = function() {
            var a = this;
            this.j = {};
            this.l = _.si.C();
            _.Q(_.q, "DOMContentLoaded", _.S(334, function() {
                return as(a)
            }))
        },
        cs = function() {
            return $r ? $r : window.performance && gf(window.performance.now) ? $r = new bs : null
        },
        es = function(a, b) {
            var c = b.U.j;
            ds(a, b) ? delete a.j[c] : a.j[c] = b
        },
        fs = function(a, b) {
            var c = b.X;
            null != c ? sm(c, b.o) : es(a, b)
        },
        ds = function(a, b) {
            var c = _.W(b, _.q.document);
            if (c && "DIV" == c.nodeName) {
                var d = _.x(87),
                    e = _.x(64);
                a = new qm({
                    pb: _.q,
                    Zc: a.l,
                    Xa: c,
                    oa: function(f) {
                        _.aj(336, f, 1)
                    },
                    Uc: d,
                    Tc: e
                });
                if (a.o) return sm(a, b.o), b.X = a, !0
            }
            return !1
        },
        as = function(a) {
            _.Ue(a.j) || (a.j = Qb(a.j, function(b) {
                return !ds(a, b)
            }))
        };
    var gs = function() {
            this.j = !1;
            this.l = {}
        },
        hs = function(a, b) {
            var c = Go(document, b, "prefetch", "");
            c && _.Q(c, "load", function() {
                a.l[b] = 3;
                c && _.Ae(c)
            })
        };
    Wa(gs);
    _.is = "3rd party ad content";
    wa("setAdIframeTitle", function(a) {
        _.is = a
    });
    _.ls = function(a, b, c) {
        _.iq.call(this, a, b, c);
        var d = this;
        this.G = js();
        this.ca = _.rf(_.q);
        this.V = !1;
        this.l = {};
        this.la = this.ka = NaN;
        this.B = _.x(123);
        this.da = !1;
        this.ma = 0;
        this.o = {};
        this.L = _.S(513, this.L);
        Pp(function(e) {
            var f = Jn.C().j;
            f = Ri(f);
            ks(d, [e], {}, f)
        })
    };
    _.B(_.ls, _.iq);
    var ms = function(a, b) {
            b = void 0 === b ? 0 : b;
            var c = void 0 === c ? window : c;
            !b || Ag(c) ? b = js() : a.V = !0;
            a.G = Math.floor(b)
        },
        ns = function(a, b, c, d, e, f) {
            f = void 0 === f ? 0 : f;
            var g = new le;
            g = g.j.getUTCFullYear() + Oc(g.j.getUTCMonth() + 1) + Oc(g.j.getUTCDate());
            g = new qp(g, e);
            g.V = a.K();
            e = _.jq(e.W) || _.x(139) ? "fifs" : "fif";
            g.A = e;
            g.D = a.ca;
            g.v = c;
            g.J = d;
            g.j = b;
            g.M = f;
            a = _.r(b);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, g.Z[_.R(b)] = b.o;
            return g
        };
    _.ls.prototype.K = function() {
        return "json_html"
    };
    var js = function() {
            return Math.floor(Math.random() * Math.pow(2, 52))
        },
        os = function(a, b, c, d, e) {
            d ? a.L(c, "", e) : (tn(c[0]), c[0].I = b)
        };
    _.ls.prototype.L = function(a, b, c) {
        var d = {};
        a = _.r(a);
        for (var e = a.next(); !e.done; d = {
                gb: d.gb
            }, e = a.next()) {
            e = e.value;
            var f = ns(this, [e], 1, b, c);
            ps(this, f);
            f.A = "fif";
            d.gb = new hr(!1, this.j, this.m, this.M, f);
            _.x(159) ? un(e, function(g) {
                return function() {
                    return kq(kr(g.gb))
                }
            }(d)) : (f = kq(kr(d.gb)), e.I = f);
            tn(e)
        }
    };
    var ps = function(a, b) {
            b.K = a.G + "";
            b.L = _.vh.C().j();
            b.N = a.V;
            b.P = a.Z;
            b.R = a.N;
            b.T = a.O;
            b.B = a.D;
            No();
            b.I = Ko[1];
            No();
            b.O = Ko[4];
            No();
            b.X = Ko[6];
            b.persistentRoadblocksOnly = a.da;
            b.videoPodNumber = a.ka;
            b.videoPodPosition = a.la;
            b.videoStreamCorrelator = a.videoStreamCorrelator;
            b.G = rq(a, b.j)
        },
        ss = function(a, b) {
            qs(a, b) || rs(a, b)
        },
        qs = function(a, b) {
            var c = b.j,
                d = _.Nd(b.l.W, _.ji, 5) || new _.ji;
            _.J(c, function(k) {
                k.Ga = d
            });
            var e = tp(d);
            if (null == e) return !1;
            var f = Math.max(e / 100, 0);
            if (!rb(c, function(k) {
                    return _.Bh(_.W(k)) && !_.mp(a.j, window, f, k)
                })) return !1;
            var g = a.J(e + "%"),
                h = function() {
                    return rs(a, b)
                };
            _.J(c, function(k) {
                var l = k.U.j,
                    m = _.W(k);
                m && (a.v[l] = h, g.observe(m), k.ba = g)
            });
            return !0
        },
        rs = function(a, b) {
            var c = b.j;
            null != c[0].ba && _.J(c, function(d) {
                ts(a, _.W(d), d.U.j, d)
            });
            us(a, b)
        },
        us = function(a, b) {
            var c = ++a.ha;
            b.o = c;
            a.l[c] = b.j;
            _.xh(2);
            ps(a, b);
            c = _.jq(b.l.W);
            c = new hr(c, a.j, a.m, a.M, b);
            c = kr(c);
            vs(a, c, b);
            b.$ = !0;
            a = b.j;
            _.cq.C().load(1);
            c = gs.C();
            var d = window;
            c.j || (c.j = !0, b = _.$l(d, _.Om(), _.Pm(), !0), c.l[b] = 1, Fo() ? hs(c, b) : _.xa().fifWin || (d = d.document, c = _.Ce(new _.qe(d), "IFRAME"), c.src = b, c.style.visibility = "hidden", c.style.display = "none", b = d.getElementsByTagName("script"), 0 < b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(c, b.nextSibling))));
            ws(a)
        },
        ws = function(a) {
            var b = _.fh();
            _.J(a, function(c) {
                c.Gb = b
            })
        },
        ks = function(a, b, c, d) {
            b = _.w(b, function(g) {
                return !g.za
            });
            if (b.length) {
                for (var e = _.r(b), f = e.next(); !f.done; f = e.next()) f.value.za = !0;
                xs(a, b, c, d)
            }
        },
        xs = function(a, b, c, d) {
            var e = _.fh();
            b = Hb(b, function(h) {
                h = h.Gb;
                return null == h ? 0 : Math.max(0, Math.round((1E3 - (e - h)) / 1E3))
            });
            var f = b[0] || [],
                g = wj.C();
            _.O(b, function(h, k) {
                var l = parseInt(k, 10);
                !l || 0 > l || (_.J(h, function(m) {
                    g.H(el(String(l), m.getAdUnitPath()))
                }), _.q.setTimeout(_.S(375, function() {
                    ys(347, function() {
                        return zs(a, h, c, d)
                    })
                }), 1E3 * l))
            });
            f.length && ys(347, function() {
                return zs(a, f, c, d)
            })
        },
        zs = function(a, b, c, d) {
            _.J(b, function(k) {
                k.za = !1
            });
            b = Hb(b, function(k) {
                return 0 != _.nn(k).length
            });
            if (b[!1])
                for (var e = _.r(b[!1]), f = e.next(); !f.done; f = e.next()) _.mq(a, document, f.value, !0, d.W);
            if (b = b[!0]) {
                var g = c.isVideoRefresh ? 3 : 2;
                _.J(b, function(k) {
                    _.ln(k)
                });
                void 0 !== c.videoStreamCorrelator ? a.videoStreamCorrelator = c.videoStreamCorrelator : 0 != c.changeCorrelator && ms(a);
                a.ka = c.videoPodNumber || NaN;
                a.la = c.videoPodPosition || NaN;
                a.da = c.persistentRoadblocksOnly || !1;
                a.B = c.clearUnfilledSlots || _.x(123);
                fp(a.j, b);
                if (!a.F) {
                    var h = (0, _.F)(function(k) {
                        var l = As(this);
                        return ns(this, k, g, l, d)
                    }, a);
                    _.jq(d.W) ? (c = Hb(b, function(k) {
                        return k.A
                    }), _.O(c, function(k) {
                        Bs(this, h(k))
                    }, a)) : _.J(b, function(k) {
                        Bs(a, h([k]))
                    })
                }
            }
        },
        lq = function(a, b, c) {
            var d = _.gq.C();
            _.qb(b, function(k) {
                return 0 < (d.j[_.R(k)] || []).length
            }) && _.mb.push({
                Na: a,
                Da: 14,
                Ca: [b]
            });
            b = _.r(b);
            for (var e = b.next(); !e.done; e = b.next()) {
                e = e.value;
                var f = _.W(e),
                    g = _.R(e),
                    h = a.o[g];
                h ? (_.wl(h), delete a.o[g]) : f && (f.innerHTML = "", f.removeAttribute("data-google-query-id"));
                Cs(e, c) && f && _.Pf(f, !1);
                ts(a, f, e.U.j, e);
                vn(e)
            }
            return !0
        };
    _.ls.prototype.ba = _.p(20);
    var ts = function(a, b, c, d) {
        if (b && a.v[c]) {
            var e = d.ba;
            e && (d.ba = null, e.unobserve(b));
            delete a.v[c]
        }
    };
    _.ls.prototype.ja = function(a, b, c) {
        _.Bn(a, c) || (Ds(this, c, a), _.W(a, c) ? _.mb.push({
            Na: this,
            Da: 3,
            Ca: [a, b, c]
        }) : _.x(42) || Es(a, b.W))
    };
    _.ls.prototype.ea = _.p(21);
    var Bs = function(a, b, c) {
            c = void 0 === c ? document : c;
            _.J(b.j, function(g) {
                g.ra = !0
            });
            var d = _.ai(221);
            uf = _.x(24);
            var e = b.j[0] && b.j[0].lc ? b.j[0].A : "",
                f = _.q.setTimeout(function() {
                    var g = new _.Ti("gpt_cmp_never_called");
                    _.z(g, a.j);
                    _.A(g, "consent", JSON.stringify(Ff(d, e)));
                    _.Ui(g)
                }, 1E4);
            Gf(d, e, _.S(451, function() {
                _.q.clearTimeout(f);
                Fs(a, b, c)
            }))
        },
        Fs = function(a, b, c) {
            c = void 0 === c ? document : c;
            for (var d = _.x(42), e = b.l.W, f = _.r(b.j), g = f.next(); !g.done; g = f.next()) g = g.value, d || Es(g, e), Ds(a, c, g);
            ss(a, b);
            d && _.J(b.j, function(h) {
                Es(h, e)
            })
        },
        Is = function(a, b, c) {
            var d = void 0 === d ? document : d;
            ys(348, function() {
                _.jq(b.W) ? Gs(a, b, c, d) : _.nn(c).length ? Hs(a, b, [
                    [c]
                ], d) : _.mq(a, document, c, !0, b.W);
                Es(c, b.W)
            })
        },
        Gs = function(a, b, c, d) {
            a.ja(c, b, d);
            var e = _.S(632, function() {
                var f = Js(a, b, c.A, d);
                Hs(a, b, f, d)
            });
            _.x(143) && 1 < a.ha ? setTimeout(e, 0) : _.x(99) ? nl().then(e) : e()
        },
        Js = function(a, b, c, d) {
            var e = ep(a.j);
            b = b.W;
            _.x(143) && !_.M(b, 6) && (e = _.w(e, function(f) {
                return f.qa && !!_.W(f, d)
            }));
            return (e = Ks(a, b, e)) ? Ls(a, e, c) : null
        },
        Ks = function(a, b, c) {
            c = Hb(c, function(d) {
                return 0 != _.nn(d).length
            });
            c[!1] && Ms(a, b, c[!1]);
            return c[!0] || null
        },
        Ls = function(a, b, c) {
            var d = [];
            b = Hb(b, function(e) {
                return e.A
            });
            _.O(b, function(e, f) {
                e = _.x(65) ? Ns(a, e) : e;
                f == c ? d.unshift(e) : d.push(e)
            });
            return d
        },
        Hs = function(a, b, c, d) {
            var e = b.W,
                f = _.M(e, 4);
            a.F || f || !c || _.J(c, function(g) {
                if (_.x(129)) {
                    var h = _.w(g, function(v) {
                        return !v.ob
                    });
                    if (!h.length) return;
                    Os(h, !0)
                } else h = g;
                var k = h.length,
                    l = h,
                    m = _.Oi(_.jq(e));
                g = 0 == m ? [] : np(a.j, h);
                var u = g.length;
                2 == m && u && u < k && (l = Cb(h, 0, k - u));
                h = As(a);
                l = ns(a, l, 1, h, b);
                l.m = g;
                Bs(a, l, d)
            })
        },
        As = function(a) {
            return "googletag.impl.pubads.callbackProxy" + ++a.ma
        },
        Ms = function(a, b, c) {
            c = _.r(c);
            for (var d = c.next(); !d.done; d = c.next()) d = d.value, 0 == _.nn(d).length && _.mq(a, document, d, !0, b)
        },
        Cs = function(a, b) {
            if (_.x(177)) return !1;
            a = a.$;
            null == a && (a = _.M(b, 10));
            return !!a
        },
        Es = function(a, b) {
            Cs(a, b) && !a.G && (a = _.W(a)) && _.Pf(a, !1)
        },
        Ds = function(a, b, c) {
            if (!_.Cn(c, b)) {
                var d = _.nn(c);
                if (0 == d.length) var e = null;
                else if (e = d[0], 1 < d.length) {
                    b: if ((d = _.W(c, b)) && d.style.height && d.style.width) {
                        d = [d.style.width, d.style.height];
                        for (var f = 0; f < d.length; ++f)
                            if (2 < d[f].length && "px" == d[f].substring(d[f].length - 2)) d[f] = parseInt(d[f], 10);
                            else {
                                d = null;
                                break b
                            }
                    } else d = null;e = d || e
                }
                if (d = _.W(c, b)) a = _.sp(b, d, _.An(c), a.j.o, e), c.J && (c.P = a)
            }
        },
        Ps = function(a, b, c) {
            b = ns(a, b, c.v, As(a), c.l, c.o);
            Bs(a, b)
        },
        Qs = function(a, b) {
            var c = b.j,
                d = b.m,
                e = b.o,
                f = b.M,
                g = _.Oi(_.jq(b.l.W));
            f && 0 != g ? (_.J(null == f ? null : a.l[f], function(h) {
                h.R = 0
            }), delete a.l[f], delete a.l[e]) : (f = [], 1 == g ? f = _.w(c, function(h) {
                return 1 == h.R
            }) : 2 != g || Gb(c, d) || (f = d), f.length && 0 != g ? Ps(a, f, b) : delete a.l[e])
        },
        Ns = function(a, b) {
            var c = [];
            _.J(b, function(d) {
                if (!d.getOutOfPage()) {
                    var e = jp(a.j, d, document) || {};
                    c.push({
                        Jb: void 0 === e.y ? Infinity : e.y,
                        slot: d
                    })
                }
            });
            Eb(c, function(d, e) {
                return Db(d.Jb, e.Jb)
            });
            return _.t(b, function(d) {
                return d.getOutOfPage() ? d : c.shift().slot
            })
        },
        Os = function(a, b) {
            a = _.r(a);
            for (var c = a.next(); !c.done; c = a.next()) c.value.ob = b
        },
        Rs = function() {
            if (_.x(200)) return !1;
            if (Jc()) {
                if (_.x(109) && 0 <= _.pc(_.Lc(), 12)) return !1;
                if (0 <= _.pc(_.Lc(), 11)) return !0
            } else if (_.Fc() && _.x(112) && 0 <= _.pc(_.Lc(), 65)) return !0;
            return !1
        },
        ys = function(a, b) {
            Rs() ? Qo(_.S(a, b)) : b()
        };
    var Ss;
    Ss = function(a, b, c, d, e) {
        this.D = b;
        this.B = c;
        this.F = d;
        this.G = e;
        this.A = a.slice();
        this.l = null;
        this.j = 1;
        this.m = "";
        this.o = this.v = 0
    };
    _.Ts = function(a, b) {
        a.j = 4;
        try {
            a.F(b)
        } catch (c) {}
    };
    var Ws, Vs;
    _.Us = function(a, b) {
        this.A = a;
        this.j = b;
        this.o = !1;
        this.v = 0;
        this.m = !1
    };
    Ws = function(a) {
        a.o || (a.o = !0, Vs(a))
    };
    Vs = function(a) {
        var b = new _.q.XMLHttpRequest;
        b.open("GET", a.A);
        b.withCredentials = !0;
        b.onreadystatechange = _.S(322, function() {
            _.mb.push({
                Na: a,
                Da: 17,
                Ca: [!1, b]
            })
        });
        b.onload = _.S(444, function() {
            _.mb.push({
                Na: a,
                Da: 17,
                Ca: [!0, b]
            })
        });
        b.onerror = function(c) {
            return _.Ts(a.j, c)
        };
        b.send()
    };
    _.Us.prototype.l = _.p(22);
    _.Xs = function(a, b, c) {
        _.ls.call(this, a, b, c);
        this.ia = {}
    };
    _.B(_.Xs, _.ls);
    _.Xs.prototype.K = function() {
        return "ldjh"
    };
    var vs = function(a, b, c) {
        var d = void 0 === d ? _.q.document : d;
        var e = c.j,
            f = c.l,
            g = _.S(287, function(l, m) {
                _.mb.push({
                    Na: a,
                    Da: 6,
                    Ca: [c, l, m, d]
                })
            }),
            h = _.S(288, function(l, m) {
                _.mb.push({
                    Na: a,
                    Da: 5,
                    Ca: [c, l, m, d]
                })
            }),
            k = _.S(289, function(l) {
                _.bj(289, Error(l && l.message || "strm_err"), !0)
            });
        b = yi(kq(b));
        g = new Ss(e, g, h, k, function() {
            return void Qs(a, c)
        });
        nq(e);
        Ws(new _.Us(b, g));
        os(a, b, e, _.jq(f.W), c.l);
        _.x(129) && Os(e, !1);
        _.cq.C().load(1)
    };
    _.Xs.prototype.X = _.p(23);
    _.Xs.prototype.T = _.p(24);
    var Ys = function() {
            this.m = this.j = this.l = null
        },
        Iq = function(a) {
            null == a.l && (a.l = new bp, a === Zs && (a.l.o = !1));
            return a.l
        },
        oq = function(a) {
            if (a.j) return a.j;
            var b = Iq(a);
            null == a.m && (a.m = new hq);
            a.j = new _.Xs(b, a.m, $s());
            b = a.j;
            b.F = null != (b.m.j.google_nofetch || null) || !!window.google_noFetch || b.F;
            b.P = null != (b.m.j.google_norender || null) || b.P;
            b.D = b.I.getOseId();
            return a.j
        },
        at = null,
        $s = function() {
            at || (at = new Do);
            return at
        },
        bt = null,
        pq = function() {
            bt || (bt = new Ys);
            return bt
        },
        Zs = null;
    var ct = function(a, b, c) {
        this.o = c;
        this.j = a;
        this.j.V = !0;
        this.j.addService(b);
        this.m = b
    };
    _.B(ct, Cj);
    ct.prototype.wa = function() {
        return new Dq(this, this.o)
    };
    var Cq = function(a, b) {
        var c = Vb(a.j.v);
        if (b && "string" !== typeof b && "number" != typeof b) try {
            _.O(b, function(d, e) {
                Am(this.j, e, d)
            }, a)
        } catch (d) {
            a.j.v = Vb(c), wj.C().error(V("PassbackSlot.updateTargetingFromMap", [b]))
        } else wj.C().error(V("PassbackSlot.updateTargetingFromMap", [b]))
    };
    ct.prototype.display = function(a) {
        document.write('<div id="' + _.Mc(this.j.U.j) + '"></div>');
        _.W(this.j) ? dt(this.m, a, this.j) : _.ya("gpt_pb_write", function(b) {
            _.z(b)
        })
    };
    ct.prototype.set = function(a, b) {
        if ("string" !== typeof a || !b || "page_url" != a) return this;
        a = this.j;
        a.V && (a.Ia = b);
        return this
    };
    ct.prototype.get = function(a) {
        return "string" !== typeof a || "page_url" != a ? null : this.j.Ia
    };
    var et = function(a, b, c) {
            c = void 0 === c ? {
                changeCorrelator: !0
            } : c;
            this.j = a;
            this.l = b;
            this.options = c
        },
        ft = function() {
            Ym.call(this);
            this.j = !1;
            this.J = {};
            this.R = !1;
            this.B = [];
            this.T = {};
            this.I = this.A = !1;
            this.F = -1;
            this.N = this.O = this.L = this.M = "";
            this.P = !1;
            this.v = _.x(87) || _.x(64) ? cs() : null;
            this.D = {}
        };
    _.B(ft, Ym);
    _.n = ft.prototype;
    _.n.wa = function() {
        var a = Jn.C().j;
        return new Rq(this, mn, a)
    };
    _.n.set = function(a, b) {
        this.J[a] = b
    };
    _.n.get = function(a) {
        return this.J[a]
    };
    _.n.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        var e = "";
        if (c)
            if (_.E(c) && 1 == c.nodeType) {
                var f = c;
                e = f.id
            } else e = c;
        vm(this);
        if (a = Xn(a, b, e).slot) f && !e && (f.id = a.U.j), a.addService(this), zm(a, d), bo(f || a.U.j)
    };
    _.n.wb = function() {
        this.j = !0;
        var a = Jn.C().j;
        window.google_noFetch = !1;
        if (_.M(a, 6)) {
            gt(this);
            a = _.r(this.o);
            for (var b = a.next(); !b.done; b = a.next()) ht(this, b.value)
        }
        Lq(this);
        Oq(this);
        this.P && Qq(this);
        Ba()
    };
    _.n.aa = function() {
        return "publisher_ads"
    };
    _.n.Eb = function(a) {
        0 != a.na() && (a.ic = !1);
        a.V || ht(this, a);
        this.v && es(this.v, a);
        Ym.prototype.Eb.call(this, a)
    };
    _.n.yb = function(a, b) {
        vm(this);
        gt(this);
        ht(this, b);
        this.log.info(ok());
        var c = pq(),
            d = oq(c);
        c = Iq(c);
        var e = null != b.j && !_.jq(a.W);
        c.j[_.R(b)] && !e && (_.x(130) || _.M(a.W, 6) || !(c = _.W(b)) || (e = d.j, _.x(130) || (e.G[_.R(b)] = c)), Is(d, a, b));
        this.T[b.getAdUnitPath()] = !0;
        if (this.j)
            for (a = 0; a < this.B.length; ++a) b = this.B[a], this.T[b.j[0].getAdUnitPath()] && (it(this, b.j, b.l, b.options), _.xb(this.B, a--));
        else this.log.error(nk(), this)
    };
    var ht = function(a, b) {
            (a.j || _.x(141)) && cp(Iq(pq()), b);
            if (a.j) {
                var c = Iq(pq()),
                    d = Ib(b.ea);
                d = _.r(d);
                for (var e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    var f;
                    if (f = !!c.j[_.R(b)]) {
                        f = String(b.get(e));
                        var g = _.R(b);
                        null == c.m[g] && (c.m[g] = new Wo(c.K));
                        f = Xo(c.m[g], e, f)
                    }
                    f || a.log.H(qk(String(e), String(b.get(e)), b.getAdUnitPath()), a, b)
                }
            }
        },
        gt = function(a) {
            if ((_.x(148) || !a.R) && a.j) {
                a.R = !0;
                var b = Ib(a.J),
                    c = Iq(pq());
                b = _.r(b);
                for (var d = b.next(); !d.done; d = b.next()) {
                    d = d.value;
                    var e = String(a.get(d));
                    Xo(c.l, d, e) || a.log.H(pk(String(d), String(a.get(d))), a)
                }
            }
        },
        Nq = function(a, b) {
            if (0 !== b && 1 !== b) {
                a.log.H(rk(String(b)), a);
                if (!Ji(b)) return;
                _.ya("gpt_setcookieoptions_invalid", function(c) {
                    _.A(c, "options", b);
                    _.z(c)
                })
            }
            Eo($s(), b)
        },
        Jq = function(a, b, c) {
            if ("string" !== typeof b || 0 >= b.length || !c) return a.log.error(V("PubAdsService.definePassback", [b, c])), null;
            c = Xn(b, c, void 0, void 0, !0);
            b = c.slot;
            c = c.Sa;
            return b && c ? new ct(b, a, c) : null
        },
        dt = function(a, b, c) {
            vm(a);
            _.x(149) ? a = pq() : (Zs || (Zs = new Ys), a = Zs);
            cp(Iq(a), c);
            Is(oq(a), b, c)
        },
        Kq = function(a, b, c, d) {
            if (c && !_.D(c) || d && (!_.E(d) || d.changeCorrelator && "boolean" !== typeof d.changeCorrelator)) a.log.H(V("PubAdsService.refresh", _.w([c, d], _.Pa)), a);
            else {
                var e = null;
                if (c && (e = jt(a, c), !e.length)) {
                    a.log.H(V("PubAdsService.refresh", _.w([c, d], _.Pa)), a);
                    return
                }
                it(a, e, b, d)
            }
        },
        it = function(a, b, c, d) {
            if (_.x(104)) vm(a), _.J(b || [], function(f) {
                f.addService(a)
            });
            else if (!a.j) {
                _.M(c.W, 6) ? (a.log.info(Ak(), a), b ? wb(a.B, new et(b, c, d)) : wb(a.B, new et(a.o, c, d))) : a.log.H(yk(), a);
                return
            }
            a.log.info(Bk(), a);
            var e = {};
            void 0 !== d && void 0 !== d.changeCorrelator && (e.changeCorrelator = d.changeCorrelator);
            (b = kt(a, b, e, c)) && a.v && _.J(b, function(f) {
                return fs(a.v, f)
            })
        },
        kt = function(a, b, c, d) {
            var e = pq(),
                f = oq(e),
                g = Iq(e);
            b = null != b ? _.w(b, function(l) {
                return !!g.j[_.R(l)]
            }) : dp(g);
            var h = sb(b, function(l) {
                return !!a.D[_.R(l)]
            });
            0 < h && _.ya("gpt_cbr", function(l) {
                _.A(l, "num", h);
                _.z(l)
            });
            e = _.r(b);
            for (var k = e.next(); !k.done; k = e.next()) delete a.D[_.R(k.value)];
            e = _.w(b, function(l) {
                return gp(g, l)
            });
            if (!e.length) return null;
            ks(f, e, c, d);
            return b
        },
        lt = function(a, b, c, d) {
            if (b && !_.D(b) || c.videoStreamCorrelator && "number" !== typeof c.videoStreamCorrelator || c.videoPodNumber && "number" !== typeof c.videoPodNumber || c.videoPodPosition && "number" !== typeof c.videoPodPosition || c.persistentRoadblocksOnly && "boolean" !== typeof c.persistentRoadblocksOnly || c.clearUnfilledSlots && "boolean" !== typeof c.clearUnfilledSlots) a.log.H(V("PubAdsService.videoRefresh", _.w([b, c], _.Pa)), a);
            else if (a.j) {
                var e = null;
                if (b && (e = jt(a, b), !e.length)) {
                    a.log.error(xk("videoRefresh"), a);
                    return
                }
                a.log.info(Bk(), a);
                (b = kt(a, e, c, d)) && a.v && _.J(b, function(f) {
                    return fs(a.v, f)
                })
            } else a.log.H(yk(), a)
        },
        Lq = function(a) {
            if (a.A && a.j) {
                var b = oq(pq()),
                    c = a.M;
                a = a.L;
                b.Z = !0;
                b.O = c;
                b.N = a;
                b.videoStreamCorrelator = js()
            }
        },
        Oq = function(a) {
            a.j && ms(oq(pq()), -1 == a.F ? void 0 : a.F)
        },
        Pq = function(a) {
            return 0 == a.o.length ? "not_available" : a.j ? oq(pq()).G + "" : "not_loaded"
        },
        vq = function(a, b, c) {
            var d = pq(),
                e = oq(d);
            d = Iq(d);
            b = b ? jt(a, b) : dp(d);
            d = {};
            for (var f = _.r(b), g = f.next(); !g.done; d = {
                    Ua: d.Ua
                }, g = f.next()) d.Ua = _.R(g.value), a.D[d.Ua] || (a.D[d.Ua] = !0, setTimeout(function(h) {
                return function() {
                    delete a.D[h.Ua]
                }
            }(d), 0));
            return lq(e, b, c)
        },
        Mq = function(a, b, c) {
            if (!a.j) return a.log.H(zk(), a), !1;
            var d = null;
            if (c && (d = jt(a, c), 0 == d.length)) return a.log.H(V("PubAdsService.clear", _.w([c], _.Pa)), a), !1;
            a.log.info(Ck(), a);
            return vq(a, d, b)
        };
    ft.prototype.getVersion = function() {
        if (this.j) return _.Si()
    };
    var jt = function(a, b) {
            var c = [];
            if (!_.D(b)) return c;
            _.J(b, function(d, e) {
                (d = Xh(d, mn)) && !d.Ra() ? c.push(d) : a.log.H(Hk(String(e)), a)
            });
            return c
        },
        Qq = function(a) {
            a.P = !0;
            if (a.j) {
                a = Iq(pq());
                a.v = !0;
                var b = new _.Ti("gpt_markAsAmp", Ai(), _.ai(23));
                _.z(b, a);
                try {
                    var c = mg(_.q);
                    c && _.A(b, "ntype", c);
                    var d = _.t(_.q.location.ancestorOrigins, function(e) {
                        return ((/^(?:https?:\/\/)?([^\/\?:#]+)/i.exec(e) || [])[1] || e).substr(0, 20)
                    });
                    _.A(b, "ost", d.slice(0, 10).join())
                } catch (e) {}
                _.Ui(b)
            }
        };
    ft.prototype.destroySlots = function(a) {
        var b = Ym.prototype.destroySlots.call(this, a);
        if (!b.length) return b;
        if (this.j) {
            var c = Jn.C().j;
            vq(this, a, c);
            lp(Iq(pq()), a)
        }
        return b
    };
    var uq = _.S(26, function() {
        var a = _.an.C(),
            b = a.find("publisher_ads");
        b || (b = new ft, a.add(b));
        return b
    });
    wa("pubads", function() {
        return uq().l()
    });
    var mt = function() {
        Ym.call(this);
        this.O = !0;
        this.v = this.J = !1;
        this.N = 0;
        this.M = this.L = void 0;
        this.R = this.D = !1;
        this.B = {};
        this.j = {};
        this.A = !1;
        this.I = {};
        this.P = !1
    };
    _.B(mt, Ym);
    _.n = mt.prototype;
    _.n.wa = function() {
        return new Aq(this, mn)
    };
    _.n.set = function(a, b) {
        "string" === typeof a && 0 < a.length ? (this.I[a] = b, this.log.info(ck(a, String(b), this.aa()), this, null)) : this.log.H(dk(String(a), String(b), this.aa()), this, null);
        return this
    };
    _.n.get = function(a) {
        return this.I[a]
    };
    _.n.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        vm(this);
        a = Xn(a, b, c).slot;
        a.addService(this);
        zm(a, d);
        bo(a.U.j)
    };
    _.n.wb = function() {
        this.O ? this.F() : this.D || (_.q.document.write('<script type="text/javascript" src="' + xi() + '">\x3c/script>'), this.D = !0)
    };
    var wq = function(a) {
            var b = uq();
            if (!b.m) return !1;
            b = b.o;
            a = a.o;
            if (b.length != a.length) return !1;
            for (var c = 0; c < a.length; ++c) {
                for (var d = !1, e = 0; e < b.length; ++e)
                    if (a[c] === b[e]) {
                        d = !0;
                        break
                    }
                if (!d) return !1
            }
            return !0
        },
        xq = function(a, b) {
            (b = void 0 === b ? "" : b) && !a.P && _.ya("ima_sdk_v", function(c) {
                a.P = !0;
                _.A(c, "v", b)
            });
            return Pq(uq())
        },
        sq = function(a, b) {
            var c = uq(),
                d = Jn.C().j;
            if (c.m) {
                if (a.A) {
                    if (!wq(a)) {
                        a.log.H(gk());
                        return
                    }
                    vq(c, null, d)
                }
                var e = {
                    isVideoRefresh: !0
                };
                void 0 !== a.N && (e.videoStreamCorrelator = a.N);
                a.L && (e.videoPodNumber = a.L);
                a.M && (e.videoPodPosition = a.M);
                a.A && (e.persistentRoadblocksOnly = a.A);
                a.v && (e.clearUnfilledSlots = a.v);
                a = Ri(d);
                lt(c, b, e, a)
            } else a.log.error(hk("PubAds", "refresh"))
        },
        yq = function(a, b) {
            if (uq().m && Wn(b)) return a = b.j, !!a && !!_.M(a, 11);
            a.log.error(ik());
            return !1
        },
        tq = function(a, b) {
            for (var c = a.K, d = [], e = 0; e < b.length; ++e) {
                var f = b[e];
                Sb(c, f) ? d.push(c[f]) : a.log.H(jk(), a)
            }
            return d
        };
    mt.prototype.aa = function() {
        return "companion_ads"
    };
    var wi = function() {
        return "https://pagead2.googlesyndication.com/pagead/show_companion_ad.js"
    };
    mt.prototype.F = function() {
        if (!this.R) {
            var a = document,
                b = wi();
            this.log.info(kk("GPT CompanionAds"), this);
            _.Pe(a, b);
            this.R = !0
        }
    };
    mt.prototype.T = function(a, b) {
        _.aj(a, b);
        this.log.error(lk("GPT CompanionAds"), this)
    };
    var zq = function(a, b) {
        var c = b && b.U.m;
        if (c && c in a.B && _.W(b) && a.m && !yq(a, b)) {
            b.ta = a.B[c];
            var d = new _.Sm(b.l(), !1, a.aa());
            if (a.j.hasOwnProperty(c)) {
                var e = a.j[c];
                delete a.j[c];
                _.Tm(d, e)
            }
            return rn(b, d)
        }
        return !1
    };
    mt.prototype.yb = function(a, b) {
        zq(this, b)
    };
    var nt = mt.prototype;
    nt.F = _.S(70, nt.F, nt.T);
    var ot = _.S(57, function() {
        var a = _.an.C(),
            b = a.find("companion_ads");
        b || (b = new mt, a.add(b));
        return b
    });
    wa("companionAds", function() {
        return ot().l()
    });
    var qt = function(a, b) {
        wm.call(this, a);
        var c = this;
        this.setContent = T(72, function(d, e) {
            d = Xh(d, b);
            var f;
            if (f = d) Wn(d) && "string" === typeof e && 0 < e.length && (a.j[d.U.m] = e, pt(a, d)), f = void 0;
            return f
        });
        this.set = T(559, function(d, e) {
            a.set(d, e);
            return c
        });
        this.get = T(560, function(d) {
            return a.get(d)
        });
        this.getAttributeKeys = T(561, function() {
            return Ib(a.v)
        });
        this.display = T(562, function(d, e, f, g) {
            return a.display(d, e, void 0 === f ? "" : f, void 0 === g ? "" : g)
        })
    };
    _.B(qt, wm);
    var rt = function() {
        Ym.call(this);
        this.v = {};
        this.j = {}
    };
    _.B(rt, Ym);
    _.n = rt.prototype;
    _.n.wa = function() {
        return new qt(this, mn)
    };
    _.n.aa = function() {
        return "content"
    };
    _.n.set = function(a, b) {
        "string" === typeof a && 0 < a.length ? (this.v[a] = b, this.log.info(ck(a, String(b), this.aa()), this, null)) : this.log.H(dk(String(a), String(b), this.aa()), this, null);
        return this
    };
    _.n.get = function(a) {
        return this.v[a]
    };
    _.n.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        vm(this);
        a = Xn(a, b, c).slot;
        a.addService(this);
        zm(a, d);
        bo(a.U.j)
    };
    var pt = function(a, b) {
        var c = b && b.U.m;
        c in a.j && a.m && _.W(b) && !b.G && (b.ta = a.j[c], a = new _.Sm(b.l(), !1, a.aa()), rn(b, a))
    };
    rt.prototype.wb = function() {
        for (var a = this.o, b = 0; b < a.length; ++b) pt(this, a[b])
    };
    rt.prototype.yb = function(a, b) {
        pt(this, b)
    };
    var st = _.S(71, function() {
        var a = _.an.C(),
            b = a.find("content");
        b || (b = new rt, a.add(b));
        return b
    });
    wa("content", function() {
        return st().l()
    });
    if (window.googletag.evalScripts) window.googletag.evalScripts();
    else {
        var tt = window,
            ut = _.gh(tt);
        if (ut) {
            var vt = {
                    label: "2",
                    type: 9,
                    value: ut
                },
                wt = tt.google_js_reporting_queue = tt.google_js_reporting_queue || [];
            2048 > wt.length && wt.push(vt)
        }
        wa("evalScripts", function() {
            Wq(document)
        });
        Xq()
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, {});