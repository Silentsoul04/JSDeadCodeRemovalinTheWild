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
        a = _.u(a.split(/\s+/), function(b) {
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
        if (_.y(206)) {
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
    _.G = function(a, b) {
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
    _.u = function(a, b) {
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
    _.zd = function() {};
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
    _.G(_.Vd, _.zd);
    var Ud = [13];
    _.Vd.prototype.A = _.p(1);
    _.Xd = function(a) {
        _.Hd(this, a, Wd, null)
    };
    _.G(_.Xd, _.zd);
    var Wd = [13];
    _.Xd.prototype.A = _.p(0);
    _.Yd = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(_.Yd, _.zd);
    _.Zd = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(_.Zd, _.zd);
    _.$d = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(_.$d, _.zd);
    _.$d.prototype.getHtml = function() {
        return _.L(this, 1)
    };
    var ae = document,
        be = window;
    var ce = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(ce, _.zd);
    var de = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(de, _.zd);
    var ee = function(a) {
        this.j = a || {
            cookie: ""
        }
    };
    ee.prototype.set = function(a, b, c, d, e, f) {
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
    ee.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = gc(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    var fe = function(a) {
            return (a = (new ee(a)).get("DATA_USE_CONSENT", "")) ? a : null
        },
        ge = function(a) {
            var b = (b = (new ee(a)).get("FCCDCF", "")) ? b : null;
            try {
                var c = b ? new ce(b ? JSON.parse(b) : null) : null
            } catch (d) {
                c = null
            }
            if (!c) return fe(a);
            c = _.Nd(c, de, 3);
            if (!c || null == _.L(c, 1)) return fe(a);
            a = _.L(c, 2);
            b = _.gb();
            if (a) {
                if (b < a || b > a + 33696E6) return null
            } else return null;
            return _.L(c, 1)
        };
    var ie = function(a) {
        _.Hd(this, a, he, null)
    };
    _.G(ie, _.zd);
    var he = [1, 2, 3, 4];
    var le = function(a, b, c) {
            "number" === typeof a ? (this.j = je(a, b || 0, c || 1), ke(this, c || 1)) : _.E(a) ? (this.j = je(a.getFullYear(), a.getMonth(), a.getDate()), ke(this, a.getDate())) : (this.j = new Date(_.gb()), a = this.j.getDate(), this.j.setHours(0), this.j.setMinutes(0), this.j.setSeconds(0), this.j.setMilliseconds(0), ke(this, a))
        },
        je = function(a, b, c) {
            b = new Date(a, b, c);
            0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
            return b
        };
    _.n = le.prototype;
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
        a.j && (a = new Date((new Date(this.getFullYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.j), this.j.setDate(1), this.j.setFullYear(a.getFullYear()), this.j.setMonth(a.getMonth()), this.j.setDate(a.getDate()), ke(this, a.getDate()))
    };
    _.n.lb = function(a) {
        return [this.getFullYear(), Oc(this.getMonth() + 1), Oc(this.getDate())].join(a ? "-" : "")
    };
    _.n.toString = function() {
        return this.lb()
    };
    var ke = function(a, b) {
        a.getDate() != b && a.j.setUTCHours(a.j.getUTCHours() + (a.getDate() < b ? 1 : -1))
    };
    le.prototype.valueOf = function() {
        return this.j.valueOf()
    };
    var me = function(a, b, c, d, e, f, g) {
        this.j = "number" === typeof a ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : new Date(a && a.getTime ? a.getTime() : _.gb())
    };
    _.G(me, le);
    me.prototype.add = function(a) {
        le.prototype.add.call(this, a);
        a.l && this.j.setUTCHours(this.j.getUTCHours() + a.l);
        a.m && this.j.setUTCMinutes(this.j.getUTCMinutes() + a.m);
        a.v && this.j.setUTCSeconds(this.j.getUTCSeconds() + a.v)
    };
    me.prototype.lb = function(a) {
        var b = le.prototype.lb.call(this, a);
        return a ? b + "T" + Oc(this.j.getHours()) + ":" + Oc(this.j.getMinutes()) + ":" + Oc(this.j.getSeconds()) : b + "T" + Oc(this.j.getHours()) + Oc(this.j.getMinutes()) + Oc(this.j.getSeconds())
    };
    me.prototype.toString = function() {
        return this.lb()
    };
    var oe;
    _.ne = !_.Wc || 9 <= Number(_.md);
    oe = _.Wc || _.Vc || _.$c;
    _.pe = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.pe.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.pe.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.pe.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.qe = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.qe.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    _.qe.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.qe.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.qe.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.te = function(a) {
        return a ? new _.re(_.se(a)) : nb || (nb = new _.re)
    };
    _.xe = function(a) {
        a = a.document;
        a = _.we(a) ? a.documentElement : a.body;
        return new _.qe(a.clientWidth, a.clientHeight)
    };
    _.ye = function(a) {
        return a.scrollingElement ? a.scrollingElement : !_.$c && _.we(a) ? a.documentElement : a.body || a.documentElement
    };
    _.ze = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    _.Ae = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.we = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.Be = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    _.Ce = function(a) {
        var b;
        if (oe && !(_.Wc && _.ld("9") && !_.ld("10") && _.q.SVGElement && a instanceof _.q.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.E(b) && 1 == b.nodeType ? b : null
    };
    _.se = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    _.re = function(a) {
        this.j = a || _.q.document || document
    };
    _.re.prototype.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    _.re.prototype.l = _.p(25);
    _.De = function(a, b) {
        return _.Ae(a.j, b)
    };
    var Fe = function(a) {
            Ee();
            return _.ec(a)
        },
        Ee = _.Va;
    var Ge = function() {
        return K("iPad") || K("Android") && !K("Mobile") || K("Silk")
    };
    var Ie, Je, Ke, Le;
    _.He = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    Ie = function(a) {
        return a ? decodeURI(a) : a
    };
    Je = function(a, b, c) {
        if (_.D(b))
            for (var d = 0; d < b.length; d++) Je(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    Ke = /#|$/;
    Le = function(a, b) {
        var c = a.search(Ke);
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
    var Me, Oe, ea, Ne, Pe, Ue, Te, Ib, Se, Ze, af, bf, df, ef, ff, gf, hf, da, jf, of , pf, qf, rf;
    Me = function(a) {
        try {
            return !!a && null != a.location.href && Sc(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Oe = function(a) {
        for (var b = _.q, c = 0; b && 40 > c++ && (!Me(b) || !a(b));) b = Ne(b)
    };
    ea = function() {
        var a = _.q;
        Oe(function(b) {
            a = b;
            return !1
        });
        return a
    };
    Ne = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Pe = function(a) {
        return Me(a.top) ? a.top : null
    };
    _.Qe = function(a, b) {
        var c = a.createElement("script");
        _.ha(c, Fe(b));
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    _.Re = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    Ue = function(a, b) {
        if (!Se()) {
            var c = Math.random();
            if (c < b) return c = Te(), a[Math.floor(c * a.length)]
        }
        return null
    };
    Te = function() {
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
    _.Ve = function(a) {
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
    _.We = function(a) {
        var b = [];
        _.O(a, function(c) {
            b.push(c)
        });
        return b
    };
    _.Xe = function(a, b) {
        return Ub(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.Ye = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    Se = Mb(function() {
        return -1 != _.Ac.indexOf("Google Web Preview") || 1E-4 > Math.random()
    });
    Ze = /^(-?[0-9.]{1,30})$/;
    _.$e = function(a, b) {
        return Ze.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b
    };
    af = function() {
        return /^true$/.test("false")
    };
    bf = function(a, b) {
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
    _.cf = function(a) {
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    df = {
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
    ef = Mb(function() {
        return _.We(df)
    });
    ff = function(a) {
        var b = ef();
        return a.length ? _.w(b, function(c) {
            return !_.vb(a, c)
        }) : b
    };
    gf = function() {
        var a = _.Ae(document, "IFRAME"),
            b = {};
        _.J(ef(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    hf = function(a) {
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
    jf = function() {
        for (var a = _.q, b = 0; 40 > b; ++b) {
            if (da(a, "__cmpLocator")) return a;
            if (!(a = Ne(a))) break
        }
        return null
    };
    _.kf = Mb(function() {
        return !Ge() && (K("iPod") || K("iPhone") || K("Android") || K("IEMobile")) ? 2 : Ge() ? 1 : 0
    });
    _.lf = Object.assign || function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    _.mf = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    _.nf = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.u(a, parseFloat)
    }; of = function(a) {
        _.q.console && _.q.console.warn && _.q.console.warn(a)
    };
    pf = [];
    qf = function() {
        var a = pf;
        pf = [];
        a = _.r(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    rf = function(a) {
        pf.push(a);
        1 == pf.length && (window.Promise ? Promise.resolve().then(qf) : window.setImmediate ? setImmediate(qf) : setTimeout(qf, 0))
    };
    _.sf = function(a) {
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
    _.P = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ca(d)), !0) : !1
    };
    _.tf = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ca(d)), !0) : !1
    };
    _.uf = function(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    };
    var vf = !1,
        wf = function(a) {
            var b = document;
            try {
                var c = ge(b);
                var d = c ? new ie(c ? JSON.parse(c) : null) : null
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
        xf = Mb(function() {
            var a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
            try {
                return a.test(_.q.top.location.href)
            } catch (b) {
                return a.test(_.q.location.href)
            }
        }),
        yf = {},
        zf = null,
        Af = null,
        Cf = function() {
            var a = Bf();
            a && _.q.setTimeout && .01 > Math.random() && _.q.setTimeout(function() {
                _.q.__cmp && _.q.__cmp("getConsentData", null, function(b) {
                    b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=iabcmp&vcd=" + JSON.stringify(b);
                    _.uf(_.q, b)
                })
            }, 1E4);
            return a
        },
        Bf = function() {
            if (_.q.__cmp) {
                var a = !1;
                try {
                    _.q.__cmp("ping", null, function() {
                        a = !0
                    })
                } catch (b) {}
                if (a) return !0
            }
            Af = jf();
            return !!Af
        },
        Df = 1,
        Ef = function() {
            if (!_.q.__cmp && Af) {
                try {
                    if (Af.__cmp) {
                        _.q.__cmp = Af.__cmp;
                        return
                    }
                } catch (a) {}
                _.q.__cmp = function(a, b, c) {
                    var d = "google_cmp_callback_" + Df;
                    Df++;
                    a = {
                        __cmpCall: {
                            command: a,
                            parameter: b,
                            callId: d
                        }
                    };
                    yf[d] = c;
                    Af.postMessage(a, "*")
                };
                _.P(_.q, "message", function(a) {
                    a = a.data;
                    if ("string" == typeof a) try {
                        a = JSON.parse(a)
                    } catch (b) {}(a = a.__cmpReturn) && "function" == typeof yf[a.callId] && (yf[a.callId](a.returnValue, a.success), delete yf[a.callId])
                })
            }
        },
        Ff = function(a, b) {
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
                    k && (k.gdprApplies ? (e[6] = 8, zf = {
                        nb: 5,
                        cb: d,
                        eb: !1,
                        Za: e.join("."),
                        Fb: k.consentData,
                        Qb: k.googleVendorIds
                    }, c(zf)) : (zf = {
                        nb: 5,
                        cb: d,
                        eb: !1,
                        Za: e.join(".")
                    }, c(zf)))
                };
                a = ea().GoogleMostRecentCmpConsentData;
                var h = !!a;
                a && g(a);
                _.q.__cmp && _.q.__cmp("getConsentData", null, function(k, l) {
                    l && (ea().GoogleMostRecentCmpConsentData = k, h || g(k))
                })
            } else zf = {
                nb: 5,
                cb: d,
                eb: !1,
                Za: e.join(".")
            }, c(zf)
        },
        Gf = function(a, b) {
            var c = Kb();
            xf() && (a = !0);
            c[0] = a ? 1 : 2;
            var d = fa();
            c[5] = d ? 1 : 2;
            if (vf && Cf()) return Ef(), Ff(a), zf || (c[6] = 7, zf = {
                nb: 5,
                cb: d,
                eb: !0,
                Za: c.join("."),
                Fb: "NCS"
            }), zf;
            c[4] = 2;
            var e = !!_.q.googlefc || da(_.q.top, "googlefcPresent");
            c[1] = e ? 1 : 2;
            var f = wf(b);
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
        Hf = function(a, b, c) {
            if (vf && Cf()) Ef(), Ff(a, c);
            else {
                var d = Gf(a, b);
                d.eb ? _.q.setTimeout(function() {
                    Hf(a, b, c)
                }, 1E3) : c(d)
            }
        };
    _.If = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    _.If.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.If.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.If.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.Jf = function(a, b) {
        var c = _.se(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    _.Kf = function(a, b) {
        return _.Jf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    _.Lf = function(a) {
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
    _.Mf = function(a) {
        var b = _.se(a),
            c = new _.pe(0, 0);
        var d = b ? _.se(b) : document;
        d = !_.Wc || 9 <= Number(_.md) || _.we(_.te(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = _.Lf(a);
        d = _.te(b).j;
        b = _.ye(d);
        d = d.parentWindow || d.defaultView;
        b = _.Wc && _.ld("10") && d.pageYOffset != b.scrollTop ? new _.pe(b.scrollLeft, b.scrollTop) : new _.pe(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    _.Nf = function(a) {
        a = _.Lf(a);
        return new _.pe(a.left, a.top)
    };
    _.Of = function(a, b) {
        if ("none" != _.Kf(b, "display")) return a(b);
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
    _.Pf = function(a) {
        if (!a.getBoundingClientRect) return null;
        a = _.Of(_.Lf, a);
        return new _.qe(a.right - a.left, a.bottom - a.top)
    };
    _.Qf = function(a, b) {
        a.style.display = b ? "" : "none"
    };
    var Rf = af();
    var Sf = function(a) {
            this.j = a
        },
        Tf = new Sf(1),
        Uf = new Sf(2),
        Vf = new Sf(3),
        Wf = new Sf(5),
        Xf = new Sf(6),
        Yf = new Sf(7),
        Zf = new Sf(8),
        $f = new Sf(14),
        ag = function(a, b, c) {
            return b[a.j] || c || function() {}
        };
    var bg = function() {
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
    Wa(bg);
    _.y = function(a) {
        var b = void 0 === b ? !1 : b;
        return bg.C().j(a, b)
    };
    _.cg = function(a, b) {
        b = void 0 === b ? 0 : b;
        return bg.C().l(a, b)
    };
    _.dg = function(a) {
        var b = void 0 === b ? "" : b;
        return bg.C().m(a, b)
    };
    _.eg = function(a) {
        var b = void 0 === b ? [] : b;
        return bg.C().o(a, b)
    };
    var fg = {
            "AMP-CAROUSEL": "ac",
            "AMP-FX-FLYING-CARPET": "fc",
            "AMP-LIGHTBOX": "lb",
            "AMP-STICKY-AD": "sa"
        },
        gg = function(a) {
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
        hg = function() {
            var a = gg();
            return a && a.mode ? +a.mode.version || null : null
        },
        ig = function() {
            var a = gg();
            if (a && a.container) {
                a = a.container.split(",");
                for (var b = [], c = 0; c < a.length; c++) b.push(fg[a[c]] || "x");
                return b.join()
            }
            return null
        },
        jg = function() {
            var a = gg();
            return a && a.initialIntersection
        },
        kg = function() {
            var a = gg();
            var b;
            return (a = a && (b = a.initialLayoutRect) && "number" === typeof b.top && "number" === typeof b.left && "number" === typeof b.width && "number" === typeof b.height ? new _.If(b.left, b.top, b.width, b.height) : null) ? new _.pe(a.left, a.top) : (b = jg()) && _.E(b.rootBounds) ? new _.pe(b.rootBounds.left + b.boundingClientRect.left, b.rootBounds.top + b.boundingClientRect.top) : null
        },
        lg = function(a) {
            return (a = a || gg()) ? Me(a.master) ? a.master : null : null
        },
        sg = !!gg() && _.q != _.q.top,
        tg = function(a) {
            a = gg(a);
            if (!a || !_.E(a.data) || "string" !== typeof a.data.type) return null;
            a = a.data.type.toLowerCase();
            return "doubleclick" == a || "adsense" == a ? null : a
        };
    var ug, vg, wg, xg, yg;
    ug = function() {
        var a = void 0 === a ? be : a;
        try {
            return a.history.length
        } catch (b) {
            return 0
        }
    };
    vg = function() {
        var a = void 0 === a ? be : a;
        return "http:" === a.location.protocol
    };
    wg = function(a) {
        a = lg(gg(a)) || a;
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1;
        return a.google_unique_id
    };
    xg = !!window.google_async_iframe_id;
    yg = xg && window.parent || window;
    _.zg = function() {
        if (xg && !Me(yg)) {
            var a = "." + ae.domain;
            try {
                for (; 2 < a.split(".").length && !Me(yg);) ae.domain = a = a.substr(a.indexOf(".") + 1), yg = window.parent
            } catch (b) {}
            Me(yg) || (yg = window)
        }
        return yg
    };
    _.ec(_.$b(new _.Zb(_.Xb, "//fonts.googleapis.com/css")));
    var Ag = function() {
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
    var Bg = function(a) {
            return !!a && a.top == a
        },
        Cg = function(a, b, c, d) {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (Bg(a)) return !1;
            var e = b.documentElement;
            if (c && d) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        Dg = function() {
            var a = _.zg();
            if (a != a.top)
                for (; a && a != a.top && Me(a) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; a = a.parent);
        };
    var Fg = function(a, b) {
            var c = b || Eg;
            return function() {
                var d = this || _.q;
                d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
                var e = c(cb(a), arguments);
                return d.hasOwnProperty(e) ? d[e] : d[e] = a.apply(this, arguments)
            }
        },
        Eg = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\x0B")
        };
    var Gg = function() {
        this.l = 0;
        this.j = []
    };
    Gg.prototype.add = function(a) {
        var b = this.j[this.l];
        this.j[this.l] = a;
        this.l = (this.l + 1) % 100;
        return b
    };
    Gg.prototype.get = function(a) {
        a = Hg(this, a);
        return this.j[a]
    };
    Gg.prototype.set = function(a, b) {
        a = Hg(this, a);
        this.j[a] = b
    };
    var Hg = function(a, b) {
        if (b >= a.j.length) throw Error("Out of bounds exception");
        return 100 > a.j.length ? b : (a.l + Number(b)) % 100
    };
    var Ig = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i, /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i, /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i],
        Jg = function(a) {
            return _.qb(Ig, function(b) {
                return b.test(a)
            })
        },
        Kg = function(a) {
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
        Lg = function(a) {
            if (!a.length) return 0;
            for (var b = [], c = 0; 33 >= c; c++) b[c] = 0;
            for (c = a.length - 1; 0 <= c; c--) {
                var d = Kg(a[c]);
                0 <= d && (b[33 - d] = 1)
            }
            return parseInt(b.join(""), 2)
        };
    _.Mg = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Ng = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
        Pg = function(a) {
            a = (this.l = a || _.q) || _.q;
            this.m = a.top == a ? 1 : Me(a.top) ? 2 : 3;
            3 != this.m && Date.parse(_.q.top.document.lastModified);
            this.j = Og(this.l)
        },
        Qg = function(a, b) {
            for (var c = 0, d = (a = a.j[Math.max(a.j.length - 1, 0)].url || null) && Ie(a.match(_.He)[3] || null), e = Math.min(b.length, 26), f = 0; f < e; f++) a = null != b[f] && Ie(b[f].match(_.He)[3] || null) || "", c *= 4, a && (d && a == d ? c += 3 : Jg(b[f]) ? c += 2 : a && 0 <= Kg(a) && (c += 1));
            return c
        },
        Og = function(a) {
            var b = a || _.q,
                c = [],
                d = null;
            do {
                var e = b;
                if (Me(e)) {
                    var f = e.location.href;
                    d = e.document && e.document.referrer || null
                } else f = d, d = null;
                c.push(new Rg(f || "", e));
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
        Sg = function(a, b) {
            this.j = a;
            this.l = b
        },
        Rg = function(a, b, c) {
            this.url = a;
            this.pb = b;
            this.Tb = !!c;
            this.depth = null
        };
    var Tg = function() {
            this.m = "&";
            this.o = !1;
            this.l = {};
            this.v = 0;
            this.j = []
        },
        Ug = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        Wg = function(a, b, c, d, e) {
            var f = [];
            _.O(a, function(g, h) {
                (g = Vg(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        Vg = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(Vg(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Wg(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        Xg = function(a, b, c, d) {
            a.j.push(b);
            a.l[b] = Ug(c, d)
        },
        Zg = function(a, b, c) {
            b = b + "//pagead2.googlesyndication.com" + c;
            var d = Yg(a) - c.length;
            if (0 > d) return "";
            a.j.sort(function(m, t) {
                return m - t
            });
            c = null;
            for (var e = "", f = 0; f < a.j.length; f++)
                for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
                    if (!d) {
                        c = null == c ? g : c;
                        break
                    }
                    var l = Wg(h[k], a.m, ",$");
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
        Yg = function(a) {
            var b = 1,
                c;
            for (c in a.l) b = c.length > b ? c.length : b;
            return 3997 - b - a.m.length - 1
        };
    var ch;
    _.$g = function(a, b) {
        this.m = a;
        this.l = b;
        this.j = Math.random()
    };
    ch = function() {
        var a = ah,
            b = bh.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    };
    _.dh = function(a, b, c, d, e) {
        if ((d ? a.j : Math.random()) < (e || a.l)) try {
            if (c instanceof Tg) var f = c;
            else f = new Tg, _.O(c, function(h, k) {
                var l = f,
                    m = l.v++;
                h = Ug(k, h);
                l.j.push(m);
                l.l[m] = h
            });
            var g = Zg(f, a.m, "/pagead/gen_204?id=" + b + "&");
            g && _.uf(_.q, g)
        } catch (h) {}
    };
    var eh = null,
        fh = function() {
            if (null === eh) {
                eh = "";
                try {
                    var a = "";
                    try {
                        a = _.q.top.location.hash
                    } catch (c) {
                        a = _.q.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        eh = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return eh
        };
    var ih;
    _.gh = function() {
        var a = _.q.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : _.gb()
    };
    _.hh = function(a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    ih = function(a) {
        var b = _.q.performance;
        return b && b.timing && b.timing[a] || 0
    };
    var jh = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e
    };
    var kh, lh, mh, nh, ph, qh;
    kh = _.q.performance;
    lh = !!(kh && kh.mark && kh.measure && kh.clearMarks);
    mh = Mb(function() {
        var a;
        if (a = lh) a = fh(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    nh = function(a, b) {
        this.events = [];
        this.l = b || _.q;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.j = mh() || (null != c ? c : Math.random() < a)
    };
    ph = function(a) {
        a.j = !1;
        a.events != a.l.google_js_reporting_queue && (mh() && _.J(a.events, _.oh), a.events.length = 0)
    };
    _.oh = function(a) {
        a && kh && mh() && (kh.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), kh.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    qh = function(a, b, c, d, e, f) {
        a.j && (b = new jh(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.events.length || a.events.push(b))
    };
    nh.prototype.start = function(a, b) {
        if (!this.j) return null;
        var c = _.hh() || _.gh();
        a = new jh(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        kh && mh() && kh.mark(b);
        return a
    };
    _.rh = function(a, b) {
        if (a.j && "number" === typeof b.value) {
            var c = _.hh() || _.gh();
            b.duration = c - b.value;
            c = "goog_" + b.label + "_" + b.uniqueId + "_end";
            kh && mh() && kh.mark(c);
            !a.j || 2048 < a.events.length || a.events.push(b)
        }
    };
    _.sh = function(a, b, c) {
        var d = _.hh();
        d && qh(a, b, 9, d, 0, c)
    };
    var Aa;
    _.uh = function() {
        var a = th;
        this.o = ah;
        this.l = null;
        this.v = this.jb;
        this.j = void 0 === a ? null : a;
        this.m = !1
    };
    _.n = _.uh.prototype;
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
            var f = new Tg;
            f.o = !0;
            Xg(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new _.Mg(b, {
                message: _.vh(b)
            }));
            b.msg && Xg(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.l) try {
                this.l(g)
            } catch (v) {}
            if (d) try {
                d(g)
            } catch (v) {}
            b = [g];
            f.j.push(3);
            f.l[3] = b;
            var h = Og(),
                k = new Rg(_.q.location.href, _.q, !1);
            b = null;
            var l = h.length - 1;
            for (d = l; 0 <= d; --d) {
                var m = h[d];
                !b && Ng.test(m.url) && (b = m);
                if (m.url && !m.Tb) {
                    k = m;
                    break
                }
            }
            m = null;
            var t = h.length && h[l].url;
            0 != k.depth && t && (m = h[l]);
            var x = new Sg(k, m);
            x.l && Xg(f, 4, "top", x.l.url || "");
            Xg(f, 5, "url", x.j.url || "");
            _.dh(this.o, e, f, this.m, c)
        } catch (v) {
            try {
                _.dh(this.o, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: _.vh(v),
                    url: x && x.j.url
                }, this.m, c)
            } catch (H) {}
        }
        return !0
    };
    _.vh = function(a) {
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
    var xh;
    _.wh = function() {
        this.l = function() {};
        this.m = function() {
            return []
        };
        this.j = function() {
            return []
        }
    };
    xh = function(a, b) {
        a.l = ag(Tf, b, function() {});
        a.m = ag(Uf, b, function() {
            return []
        });
        a.j = ag(Vf, b, function() {
            return []
        })
    };
    Wa(_.wh);
    _.yh = function(a) {
        return _.wh.C().m(a)
    };
    var zh, Bh;
    zh = function(a) {
        return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
    };
    _.Ah = function(a) {
        try {
            var b = zh(a.document);
            return new _.qe(b.clientWidth, b.clientHeight)
        } catch (c) {
            return new _.qe(-12245933, -12245933)
        }
    };
    Bh = function(a, b) {
        b = void 0 === b ? _.q : b;
        a = a.scrollingElement || zh(a);
        return new _.pe(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    };
    _.Ch = function(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var Dh = function(a, b, c) {
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
        Eh = function(a) {
            this.l = 0;
            this.j = [];
            Dh(a, this.A.bind(this), this.o.bind(this))
        };
    Eh.prototype.v = function(a) {
        window.Promise ? Promise.resolve().then(a) : setTimeout(a, 0)
    };
    var Fh = function(a, b) {
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
    Eh.prototype.A = function(a) {
        try {
            if (a === this) throw new TypeError;
            if (a instanceof Eh || _.E(a) && _.$a(a.then)) Dh(a.then.bind(a), this.A.bind(this), this.o.bind(this));
            else
                for (this.l = 1, this.m = a; this.j.length;) Fh(this, this.j.shift())
        } catch (b) {
            this.o(b)
        }
    };
    Eh.prototype.o = function(a) {
        this.l = 2;
        for (this.m = a; this.j.length;) Fh(this, this.j.shift())
    };
    Eh.prototype.then = function(a, b) {
        var c = this;
        return new this.constructor(function(d, e) {
            Fh(c, {
                Jc: a,
                Kc: b,
                resolve: d,
                reject: e
            })
        })
    };
    var Gh = !1,
        Hh = 0,
        Ih = function(a, b, c) {
            if (!Gh) {
                Gh = !0;
                var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
                if (hf(d)) {
                    var e, f, g, h, k = a.requestIdleCallback;
                    k && (h = function(m) {
                        f = m.timeRemaining();
                        g = 0
                    });
                    var l = function(m) {
                        Gh && (b.push(m - e), e = m, k && (c.push(f || 0), g || (f = 0, g = k(h))), d(l))
                    };
                    d(function(m) {
                        e = m;
                        k && (g = k(h));
                        d(l)
                    })
                }
            }
        },
        Jh = function() {
            Gh = !1
        },
        Kh = function() {
            Hh && _.q.clearTimeout(Hh);
            Hh = Gh ? _.q.setTimeout(Jh, 1E4) : 0
        };
    var Lh = function(a) {
        return a._google_rum_ns_ = a._google_rum_ns_ || {}
    };
    var ma = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(ma, _.zd);
    var la = function() {
            this.j = new Gg
        },
        pa = function(a, b) {
            a.j instanceof MessagePort ? a.j.postMessage(_.oa(b)) : a.j.add(b)
        };
    var ka = {
        xc: document.body,
        yc: _.ec(_.$b(new _.Zb(_.Xb, "https://www.googletagservices.com/console/host/host.js")))
    };
    var Mh = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(Mh, _.zd);
    var Oh = function(a) {
        _.Hd(this, a, Nh, null)
    };
    _.G(Oh, _.zd);
    var Nh = [9],
        Ph = function(a, b) {
            return _.N(a, 12, b)
        },
        Qh = function(a, b) {
            return _.N(a, 8, b)
        },
        Rh = function(a, b) {
            return _.N(a, 13, b)
        },
        Sh = function(a, b) {
            return Rd(a, 9, b)
        };
    var Th = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(Th, _.zd);
    var ja = new function(a, b, c) {
        this.j = b;
        this.l = c
    }(Oh, Th, 3);
    var Uh = null,
        Vh = function() {
            return Uh ? Uh : hf(window.Map) ? Uh = new Map : null
        },
        Wh = {},
        Xh = function() {},
        Yh = function(a, b) {
            if (a instanceof b) return a;
            if (a instanceof Xh) {
                var c = Vh();
                a = c ? c.get(a) : Wh[cb(a)];
                if (a instanceof b) return a
            }
            return null
        };
    var wa, Zh;
    _.xa = function() {
        return _.q.googletag || (_.q.googletag = {})
    };
    wa = function(a, b) {
        var c = _.xa();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    Zh = function(a, b) {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
    };
    var $h = {
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
        ci, di, ei, fi;
    $h[6] = bf(window);
    $h[49] = (new Date).getTime();
    $h[36] = af();
    $h[148] = Rf;
    $h[221] = af();
    $h[204] = _.$e("-1", -1);
    var ai = function() {
        for (var a in $h) this[a] = $h[a]
    };
    Wa(ai);
    _.bi = function(a) {
        return ai.C()[a]
    };
    ci = _.xa();
    di = ai.C();
    ei = ci._vars_;
    for (fi in ei) di[fi] = ei[fi];
    ci._vars_ = di;
    var hi = function(a) {
        _.Hd(this, a, gi, null)
    };
    _.G(hi, _.zd);
    var gi = [2],
        ii = function(a, b) {
            return _.N(a, 1, b)
        },
        ji = function(a, b) {
            return _.N(a, 2, b || [])
        };
    _.ki = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(_.ki, _.zd);
    _.li = function(a, b) {
        _.N(a, 2, b)
    };
    var mi = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(mi, _.zd);
    var oi = function(a) {
        _.Hd(this, a, ni, null)
    };
    _.G(oi, _.zd);
    var ni = [3, 4, 5, 6, 8, 9];
    oi.prototype.getAdUnitPath = function() {
        return _.L(this, 1)
    };
    oi.prototype.na = function() {
        return _.L(this, 15)
    };
    var ri = function(a) {
        _.Hd(this, a, pi, qi)
    };
    _.G(ri, _.zd);
    var pi = [1, 2, 3, 7, 14],
        qi = [
            [8, 9]
        ],
        si = function(a, b) {
            Rd(a, 2, b)
        };
    _.ti = function() {
        var a = _.y(85) || _.y(84);
        _.q.google_measure_js_timing = a || _.q.google_measure_js_timing;
        nh.call(this, a ? 1 : 0, _.q);
        this.m = 0
    };
    _.B(_.ti, nh);
    Wa(_.ti);
    var ui, wi, yi, zi, Ai, Bi, Ci, Ei, Fi, Gi, Hi, Ii, Ki, Li, Mi, Ni, Qi, Ri, Si;
    ui = /\bfpla=(\w*)/;
    wi = function(a, b) {
        var c = a.Ia;
        if ("" != c) return c;
        a = b[_.R(a)];
        return null != a ? vi(a) : null
    };
    yi = function() {
        return xi().replace(/[\W_]/g, function(a) {
            return "&#" + a.charCodeAt() + ";"
        })
    };
    zi = function(a) {
        var b = a;
        "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
        return b
    };
    Ai = /\+/g;
    Bi = function() {
        return "https://pagead2.googlesyndication.com"
    };
    Ci = function(a) {
        var b = a.document;
        return Bg(a) ? b.URL : b.referrer
    };
    Ei = function(a, b) {
        b = void 0 === b ? null : b;
        var c = 0,
            d = [];
        a && (d.push(a.getAdUnitPath()), d.push(_.Di(a)), d.push(a.U.j));
        if (b) {
            a = [];
            for (var e = 0; b && 25 > e; b = b.parentNode, ++e) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && d.push(b)
        }
        0 < d.length && (c = _.Ye(d.join(":")));
        return c.toString()
    };
    Fi = function(a) {
        try {
            var b = window.top,
                c = new _.pe(0, 0),
                d = _.ze(_.se(a));
            if (Sc(d, "parent")) {
                do {
                    var e = d == b ? _.Mf(a) : _.Nf(a);
                    c.x += e.x;
                    c.y += e.y
                } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent))
            }
            var f = c
        } catch (g) {
            f = new _.pe(-12245933, -12245933)
        }
        return f
    };
    Gi = function(a, b) {
        if (null == b) return a;
        b = a.indexOf("google_preview=", a.lastIndexOf("?"));
        var c = a.indexOf("&", b); - 1 == c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Hi = Mb(function() {
        return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest
    });
    Ii = Mb(function() {
        return !!_.cf(_.q.location.href)
    });
    _.Ji = Math.floor(Math.random() * Math.pow(2, 53));
    Ki = function(a) {
        return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    Li = function(a) {
        var b = a.split("/");
        return "/" == a.charAt(0) && 2 <= b.length ? b[1] : "/" != a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    Mi = function(a) {
        var b = [];
        b = _.u(a, function(c) {
            return Li(c.getAdUnitPath())
        });
        _.sa(b);
        return b
    };
    Ni = function(a) {
        return a ? (a = _.Pf(a)) && a.floor() : null
    };
    _.Oi = function(a) {
        return !!a && !!_.Nd(a, _.Zd, 43) && !!_.L(_.Nd(a, _.Zd, 43), 1)
    };
    _.Pi = function(a) {
        return a ? _.y(54) ? 1 : _.y(71) && _.y(65) ? 2 : 0 : 0
    };
    Qi = Mb(function() {
        a: {
            try {
                var a = "";
                try {
                    a = _.q.top.location.hash
                } catch (d) {
                    a = _.q.location.hash
                }
                var b = a && a.match(ui);
                var c = b ? b[1] : null;
                break a
            } catch (d) {}
            c = null
        }
        return c
    });
    Ri = Mb(function() {
        return qa(function() {})
    });
    Si = function(a) {
        return _.y(229) ? {
            V: new a.constructor(Td(_.oa(a)))
        } : {
            V: a
        }
    };
    _.Ti = function() {
        return "2019100701"
    };
    wa("getVersion", _.Ti);
    var Wi;
    _.Ui = function(a, b, c) {
        b = void 0 === b ? "https://pagead2.googlesyndication.com" : b;
        if (null == c || 0 > c || 1 < c) c = _.bi(23);
        this.l = Math.random();
        this.o = this.l < c;
        this.m = a;
        this.j = b + "/pagead/gen_204?id=" + encodeURIComponent(a)
    };
    _.A = function(a, b, c) {
        "string" != typeof c && (c = String(c));
        /^\w+$/.test(b) && c && (a.j += "&" + b + "=" + encodeURIComponent(c))
    };
    _.Vi = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? !1 : c;
        b = void 0 === b ? null : b;
        var d = a.o;
        b && 0 <= b && (d = ((void 0 === c ? 0 : c) ? a.l : Math.random()) < b);
        (a = (d || Ii()) && a.m && a.j ? a.j : null) && _.uf(window, a)
    };
    Wi = function(a, b) {
        b.length && (3 >= b.length ? _.A(a, "nw_id", b.join()) : (b = Cb(b, 0, 3), b.push("__extra__"), _.A(a, "nw_id", b.join())))
    };
    _.z = function(a, b) {
        b = void 0 === b ? null : b;
        var c = void 0 === c ? document : c;
        _.A(a, "vrg", _.Ti());
        b ? (Wi(a, Xi(b)), _.A(a, "nslots", Yi(b).toString())) : (Wi(a, Mi(_.Zi)), _.A(a, "nslots", _.Zi.length.toString()));
        b = _.wh.C().j();
        b.length && _.A(a, "eid", b.join());
        _.A(a, "pub_url", c.URL)
    };
    _.ya = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = c.ee || "https://pagead2.googlesyndication.com";
        c = c.Ea;
        if (void 0 === c || 0 > c || 1 < c) c = _.bi(23);
        Math.random() < c && (a = new _.Ui(a, d), b(a), _.Vi(a, 1, !0))
    };
    _.Zi = [];
    var $i, aj, T, jj, dj;
    $i = _.bi(38);
    aj = function(a, b) {
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
    _.cj = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        _.bj(a, b);
        if (!c) throw b;
    };
    _.bj = function(a, b, c) {
        c = void 0 === c ? $i : c;
        if (!b.isReported) try {
            b.isReported = !0;
            var d = aj(a, b),
                e = new _.Ui("gpt_exception");
            try {
                _.z(e)
            } catch (f) {}
            _.O(d, function(f, g) {
                return _.A(e, g, f)
            });
            _.Vi(e, c)
        } catch (f) {}
    };
    T = function(a, b, c) {
        return _.S(a, b, c, _.y(144))
    };
    _.S = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function(e) {
            for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
            g = !1;
            var h = null,
                k = c || _.cj,
                l = _.ti.C();
            try {
                var m = l && _.y(85);
                m && (h = l.start(a.toString(), 3));
                var t = b.apply(this, f);
                g = !0;
                m && _.rh(l, h)
            } catch (v) {
                g ? _.bj(110, v) : t = k.call(this, a, v), _.oh(h)
            }
            if (d) try {
                var x = Error();
                _.ya("gpt_api_usage", function(v) {
                    _.A(v, "methodId", a);
                    _.A(v, "args", f.length);
                    _.A(v, "stack", Aa(x.stack, x.message));
                    _.z(v)
                }, {
                    Ea: 1
                })
            } catch (v) {}
            return t
        }
    };
    jj = function() {
        var a, b = window;
        if (a = _.y(86)) b._google_rum_ns_ ? (a = Lh(b), a = !(!a.raf || !a.ric)) : a = !1, a = !a;
        if (a) {
            var c = Lh(b);
            c.raf = c.raf || [];
            c.ric = c.ric || [];
            a = c.raf;
            c = c.ric;
            Ih(b, a, c);
            Zh(b, dj);
            b.setTimeout(Jh, 6E4)
        }
    };
    dj = function() {
        Kh()
    };
    var kj = function(a) {
        this.push = T(76, function(b) {
            return a.push.apply(a, arguments)
        })
    };
    _.B(kj, Xh);
    var lj = function(a, b) {
        b = void 0 === b ? [] : b;
        this.l = a;
        this.j = b
    };
    lj.prototype.getMessageId = function() {
        return this.l
    };
    lj.prototype.getMessageArgs = function() {
        return this.j
    };
    var mj = function(a, b, c, d, e) {
        this.l = new Date;
        this.A = d && d.l();
        this.v = c && c.l();
        this.o = a;
        this.m = b;
        this.j = e
    };
    _.n = mj.prototype;
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
        var a = this.l.toTimeString() + ": " + nj[this.o] + ": " + this.m;
        this.j && (a += " Duration: " + (this.l.getTime() - this.j.getTimestamp().getTime()) + "ms.");
        return a
    };
    var nj = ["Debug", "Info", "Warning", "Error", "Fatal"];
    var oj = null,
        pj = !1,
        qj = !1,
        rj = function() {
            var a = void 0 === a ? _.q : a;
            if (!qj) {
                var b = "https:" + _.bi(228) + "loader.js";
                _.Qe(a.document, b);
                qj = !0
            }
        },
        sj = function() {
            var a = void 0 === a ? _.q : a;
            if (_.xa()._pubconsole_disable_) return !1;
            var b = a.document;
            b = void 0 === b ? _.q.document : b;
            b = b.cookie.split("google_pubconsole=");
            if (b = 2 == b.length ? b[1].split(";")[0] : "")
                if (b = b.split("|"), 0 < b.length && ("1" == b[0] || "0" == b[0])) return !0;
            a = Ci(a);
            return null !== Le(a, "google_debug") || null !== Le(a, "dfpdeb") || null !== Le(a, "google_console") || null !== Le(a, "google_force_console") || null !== Le(a, "googfc")
        },
        uj = _.S(94, function() {
            sj() && rj();
            _.P(_.q, "message", tj)
        }),
        vj = _.S(93, function() {
            _.xa()._pubconsole_disable_ = !0
        }),
        tj = function(a) {
            a.source == _.q && "gpt_open_pubconsole" == a.data.type && (a = a.data.slotDomId) && wj(a)
        },
        wj = function(a) {
            a = void 0 === a ? "" : a;
            _.xa && _.xa().console ? _.xa().console.openConsole(a) : (a && (oj = a), pj = !0, rj())
        };
    "complete" === _.q.document.readyState ? uj() : Zh(_.q, uj);
    wa("disablePublisherConsole", vj);
    wa("onPubConsoleJsLoad", function() {
        pj && (_.xa().console.openConsole(oj), oj = null, pj = !1)
    });
    wa("openConsole", wj);
    var xj = function() {
            this.j = []
        },
        yj = function(a, b) {
            return _.w(a.j, function(c) {
                return c.getService() === b
            })
        },
        zj = function(a, b) {
            return _.w(a.j, function(c) {
                return c.getSlot() === b
            })
        },
        Aj = function(a, b) {
            return _.w(a.j, function(c) {
                return c.getLevel() >= b
            })
        };
    xj.prototype.log = function(a, b, c, d, e) {
        a = new mj(a, b, void 0 === c ? null : c, void 0 === d ? null : d, void 0 === e ? null : e);
        _.y(47) && !sj() || this.j.push(a);
        return a
    };
    xj.prototype.info = function(a, b, c, d) {
        return this.log(1, a, b, c, d)
    };
    xj.prototype.H = function(a, b, c, d) {
        return this.log(2, a, b, c, d)
    };
    xj.prototype.error = function(a, b, c, d) {
        return this.log(3, a, b, c, d)
    };
    Wa(xj);
    var Bj;
    Bj = Mb(function() {
        var a = _.eg(5),
            b = String;
        var c = void 0 === c ? window : c;
        c = Ie(c.location.href.match(_.He)[3] || null);
        a = _.ob(a, b(c ? _.Ye(c) : null));
        a = _.eg(6)[a] || "";
        var d = void 0 === d ? window.document : d;
        a && d.head && (b = document.createElement("meta"), b.httpEquiv = "origin-trial", b.content = a, d.head.appendChild(b))
    });
    _.Cj = function(a) {
        var b = void 0 === b ? navigator : b;
        Bj();
        b = "scheduling" in b && "isInputPending" in b.scheduling && b.scheduling.isInputPending();
        var c = _.cg(31);
        b && Math.random() < c && setTimeout(function() {
            _.ya("gpt_input_pending", function(d) {
                _.z(d);
                _.A(d, "ctx", a);
                _.A(d, "corr", _.Ji);
                var e = Error("inputPending");
                _.A(d, "stack", Aa(e.stack, e.message))
            }, {
                Ea: 1
            })
        }, 1);
        return b
    };
    var Dj = function() {};
    Dj.prototype.l = function() {
        var a = this.wa(),
            b = Vh();
        b ? b.set(a, this) : Wh[cb(a)] = this;
        return a
    };
    var Ej = Dj.prototype;
    Ej.l = Fg(Ej.l);
    var U, Fj, V, Gj, Hj, Ij, Kj, Lj, Mj, Nj, Oj, Pj, Qj, Rj, Sj, Tj, Uj, Vj, Wj, Xj, Yj, Zj, ak, bk, ck, dk, ek, fk, gk, hk, ik, jk, kk, lk, mk, nk, ok, pk, qk, rk, sk, tk, uk, vk, wk, xk, yk, zk, Ak, Bk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Kk, Lk, Mk, Nk, Ok, Pk, Qk, Rk, Sk, Tk, Uk, Vk, Wk, Xk, Yk, Zk, $k, al, bl, cl, dl, el, fl, gl, hl, il;
    U = function(a) {
        return function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return new lj(a, _.Da(c).concat())
        }
    };
    Fj = function(a) {
        return "[" + _.u(a, function(b) {
            return "string" === typeof b ? "'" + b + "'" : _.D(b) ? Fj(b) : String(b)
        }).join(", ") + "]"
    };
    V = function(a, b) {
        b = Fj(b);
        b = b.substring(1, b.length - 1);
        return new lj(96, [a, b])
    };
    Gj = U(1);
    Hj = U(2);
    Ij = U(3);
    _.Jj = U(4);
    Kj = U(5);
    Lj = U(6);
    Mj = U(8);
    Nj = U(12);
    Oj = U(14);
    Pj = U(16);
    Qj = U(17);
    Rj = U(19);
    Sj = U(20);
    Tj = U(21);
    Uj = U(22);
    Vj = U(23);
    Wj = U(26);
    Xj = U(27);
    Yj = U(28);
    Zj = U(30);
    ak = U(31);
    bk = U(34);
    ck = U(35);
    dk = U(36);
    ek = U(37);
    fk = U(38);
    gk = U(40);
    hk = U(42);
    ik = U(43);
    jk = U(44);
    kk = U(45);
    lk = U(46);
    mk = U(47);
    nk = U(48);
    ok = U(49);
    pk = U(50);
    qk = U(57);
    rk = U(58);
    sk = U(59);
    tk = U(60);
    uk = U(61);
    vk = U(62);
    wk = U(63);
    xk = U(64);
    yk = U(65);
    zk = U(66);
    Ak = U(68);
    Bk = U(69);
    Ck = U(70);
    Dk = U(71);
    Ek = U(74);
    Fk = U(75);
    Gk = U(78);
    Hk = U(79);
    Ik = U(80);
    Jk = U(82);
    Kk = U(84);
    Lk = U(85);
    Mk = U(87);
    Nk = U(88);
    Ok = U(90);
    Pk = U(92);
    Qk = U(93);
    Rk = U(94);
    Sk = U(95);
    Tk = U(97);
    Uk = U(99);
    Vk = U(100);
    Wk = U(101);
    Xk = U(102);
    Yk = U(103);
    Zk = U(104);
    $k = U(105);
    al = U(106);
    bl = U(107);
    cl = U(108);
    dl = U(109);
    el = U(110);
    fl = U(111);
    gl = U(113);
    hl = U(114);
    il = U(115);
    var kl, ml;
    _.jl = function(a) {
        Eh.call(this, a)
    };
    _.B(_.jl, Eh);
    _.jl.prototype.v = function(a) {
        _.y(102) ? Eh.prototype.v.call(this, a) : a()
    };
    kl = function() {
        return new _.jl(function(a) {
            return void a(void 0)
        })
    };
    ml = function(a) {
        var b = new _.ll,
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
    _.ll = function() {
        var a = this;
        this.j = new _.jl(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var nl = function() {
        this.A = this.m = 0;
        this.j = null
    };
    _.B(nl, Dj);
    nl.prototype.wa = function() {
        return new kj(this)
    };
    var ol = function() {
        var a = Yh(_.xa().cmd, nl);
        return a.j ? a.j.j : kl()
    };
    nl.prototype.push = function(a) {
        var b = xj.C();
        try {
            _.y(99) && (this.j = this.j || new _.ll);
            for (var c = 0; c < arguments.length; ++c) try {
                _.$a(arguments[c]) && (arguments[c](), this.m++)
            } catch (d) {
                this.A++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(Zj(String(d.message)))
            }
            b.info(ak(String(this.m), String(this.A)));
            return this.m
        } finally {
            _.y(99) && this.j && (this.j.resolve(), this.j = null)
        }
    };
    var ql = function() {
        nl.call(this);
        var a = this;
        this.v = [];
        this.B = !1;
        this.o = 0;
        this.D = _.S(635, function() {
            a.o = 0;
            pl(a)
        })
    };
    _.B(ql, nl);
    var rl = function(a) {
            return !a.B && !!a.v.length && (_.y(170) && _.Cj(1) || _.y(171))
        },
        sl = function(a) {
            a.o || (a.o = setTimeout(a.D, _.cg(23)))
        },
        pl = function(a) {
            if (a.o) {
                if (!a.B) return;
                clearTimeout(a.o);
                a.o = 0
            }
            var b = xj.C();
            try {
                _.y(99) && (a.j = a.j || new _.ll);
                for (; a.v.length;) {
                    var c = a.v.shift();
                    try {
                        c(), a.m++
                    } catch (d) {
                        a.A++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(Zj(String(d.message)))
                    }
                    if (rl(a)) {
                        sl(a);
                        break
                    }
                }
                b.info(ak(String(a.m), String(a.A)))
            } finally {
                _.y(99) && a.j && (a.j.resolve(), a.j = null)
            }
        },
        tl = function(a, b) {
            a.v = _.Da(a.v).concat(_.Da(_.w(b, _.$a)));
            _.y(173) && rl(a) ? sl(a) : pl(a)
        };
    ql.prototype.push = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        this.B = _.y(172);
        tl(this, b);
        return this.m
    };
    var ul = function() {
        if (_.y(176)) {
            var a = _.xa().cmd;
            if (!a || _.D(a)) {
                var b = new ql;
                _.xa().cmd = b.l();
                a && 0 < a.length && tl(b, a)
            }
        } else if (a = _.xa().cmd, !a || _.D(a)) b = new nl, _.xa().cmd = b.l(), a && 0 < a.length && b.push.apply(b, a)
    };
    ul = _.S(77, ul);
    _.vl = function(a, b, c) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return (void 0 === c ? 0 : c) ? (new _.qe(b.innerWidth, b.innerHeight)).round() : _.xe(b || window).round()
        } catch (d) {
            return new _.qe(-12245933, -12245933)
        }
    };
    _.wl = function() {
        this.G = this.G;
        this.M = this.M
    };
    _.wl.prototype.G = !1;
    _.wl.prototype.Wa = function() {
        this.G || (this.G = !0, this.l())
    };
    _.wl.prototype.l = function() {
        if (this.M)
            for (; this.M.length;) this.M.shift()()
    };
    _.xl = function(a) {
        a && "function" == typeof a.Wa && a.Wa()
    };
    _.yl = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    var zl = function(a, b) {
        this.l = a;
        this.j = b
    };
    var Al = !1,
        Bl = "",
        Cl = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (Al = !0, a.description)) {
                Bl = Cl(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                Al = !0;
                Bl = "2.0.0.11";
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], Al = !(!a || !a.enabledPlugin))) {
            Bl = Cl(a.enabledPlugin.description);
            return
        }
        if ("undefined" != typeof ActiveXObject) {
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                Al = !0;
                Bl = Cl(b.GetVariable("$version"));
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                Al = !0;
                Bl = "6.0.21";
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Al = !0, Bl = Cl(b.GetVariable("$version"))
            } catch (c) {}
        }
    })();
    _.Dl = Al;
    _.El = Bl;
    var Fl, Hl;
    Fl = {};
    _.Gl = (Fl[3] = "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js", Fl);
    Hl = {};
    _.Il = (Hl[3] = "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js", Hl);
    var Kl, Ll;
    _.Jl = function(a, b) {
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
        this.rootMargin = _.u(this.B, function(c) {
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
    Kl = function(a) {
        if (a.root) var b = va(a.root);
        else {
            var c = _.xe(window);
            b = {
                top: 0,
                right: c.width,
                bottom: c.height,
                left: 0,
                width: c.width,
                height: c.height
            }
        }
        a = _.u(a.B, function(d, e) {
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
    Ll = function(a, b, c) {
        if (!b || b.isIntersecting != c.isIntersecting) return !0;
        var d = b.intersectionRatio,
            e = c.intersectionRatio;
        return d == e ? !1 : _.qb(a.G, function(f) {
            return f < d != f < e
        })
    };
    _.Jl.prototype.A = function() {
        var a = this,
            b = Kl(this);
        _.J(this.j, function(c) {
            var d = c.target,
                e = va(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                m = h - l,
                t = k - g;
            g = 0 <= m && 0 <= t ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: m,
                height: t
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
            Ll(a, c.Mb, d) && a.o.push(d);
            c.Mb = d
        });
        this.o.length && this.D(Ml(this), this)
    };
    _.Jl.prototype.observe = function(a) {
        _.qb(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            Mb: null
        }), this.A(), this.v || (this.v = !0, _.P(_.q, "scroll", this.m), _.P(_.q, "resize", this.m), _.q.MutationObserver && !this.l && (this.l = new MutationObserver(this.m), this.l.observe(_.q.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    _.Jl.prototype.unobserve = function(a) {
        this.j = _.w(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    _.Jl.prototype.disconnect = function() {
        this.v = !1;
        this.j.length = 0;
        _.tf(_.q, "scroll", this.m);
        _.tf(_.q, "resize", this.m);
        this.l && (this.l.disconnect(), this.l = null)
    };
    var Ml = function(a) {
        var b = _.Da(a.o).concat();
        a.o.length = 0;
        return b
    };
    var Ol;
    Ol = function() {
        return 0 != _.Nl(document)
    };
    _.Nl = function(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    _.Pl = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    _.Ql = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    var Sl, Rl;
    Sl = function() {
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
        this.floatingAdsStacking = new Rl
    };
    _.Tl = function(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Rl) : a.google_reactive_ads_global_state = new Sl;
        return a.google_reactive_ads_global_state
    };
    Rl = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var Ul, Yl, Zl, $l;
    Ul = 728 * 1.38;
    _.Vl = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.Xl = function(a) {
        var b = _.Wl(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    Yl = function(a) {
        return (a = _.Wl(a).clientWidth) ? a > (void 0 === Ul ? 420 : Ul) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    Zl = function(a) {
        return (a = _.Xl(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.Wl = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    $l = function(a, b) {
        return a.adCount ? 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) && 27 != b && 26 != b ? 1 <= a : !1 : !1
    };
    _.am = function(a, b, c, d) {
        var e = c;
        e && (e = "?" + e);
        b = "//tpc.googlesyndication.com/safeframe/" + b + "/html/container.html" + e;
        e = a;
        for (var f = 0; e != e.parent;) f++, e = e.parent;
        (e = f) && (b += (c ? "&" : "?") + "n=" + e);
        (c = d) || (c = bf(a, !1));
        return (c ? "https:" : "http:") + b
    };
    _.bm = function(a) {
        for (var b = a.j.length - 1; 0 <= b; b--) {
            var c = a.j[b];
            c.l ? (c.m.style.removeProperty(c.j), c.m.style.setProperty(c.j, String(c.o), c.v)) : c.m.style[c.j] = c.o
        }
        a.j.length = 0
    };
    var dm, em, fm;
    _.cm = function(a) {
        a.Ra() || (2 == a.I && (_.bm(a.m), a.I = 0), window.clearTimeout(a.K), a.K = -1, a.B = 3, a.l && (a.l.Wa(), a.l = null), a.G && a.j ? a.G.unobserve(a.j) : (_.tf(window, "resize", a.L), _.tf(window, "scroll", a.L)), a.j && a.A == _.Ce(a.j) && a.A.removeChild(a.j), a.j = null, a.A = null, a.G && (a.G.disconnect(), a.G = null), a.status = 100)
    };
    dm = ["allow-modals", "allow-orientation-lock", "allow-presentation"];
    em = ["allow-top-navigation"];
    fm = ["allow-same-origin"];
    _.gm = ff(_.Da(dm).concat(_.Da(em)));
    ff(_.Da(dm).concat(_.Da(fm)));
    ff(_.Da(dm).concat(_.Da(em), _.Da(fm)));
    var hm = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(hm, _.zd);
    hm.prototype.getTime = function() {
        return _.L(this, 4)
    };
    var im;
    im = function(a) {
        this.v = a.time;
        this.B = a.Dc;
        this.A = a.Cc;
        this.j = this.l = -1;
        this.o = this.m = 0
    };
    _.jm = function(a, b) {
        a.B && a.A ? (a.o += b - a.v, 1E3 <= a.o && (a.l = b), 0 < a.j || (a.m += b - a.v)) : a.o = 0;
        a.v = b
    };
    var km, lm, mm, nm, rm;
    km = [.05, .1, .2, .5];
    lm = [0, .5, 1];
    mm = function(a) {
        a = Pe(a);
        if (!a) return -1;
        a = _.Ah(a);
        return -12245933 == a.width || -12245933 == a.height ? -1 : a.width * a.height
    };
    nm = function(a, b) {
        return 0 > a ? [] : _.u(km, function(c) {
            return Math.min(a / b * c, 1)
        })
    };
    _.om = function() {
        return Math.round(performance.now())
    };
    rm = function(a) {
        this.l = a.pb;
        this.m = a.Xa;
        this.G = a.Zc;
        this.A = null;
        this.v = a.oa;
        this.B = !1;
        this.o = pm(this);
        this.F = a.Uc || !1;
        this.D = a.Tc || !1;
        this.j = null;
        this.D && qm(this)
    };
    rm.prototype.unobserve = function() {
        try {
            sm(this, _.om(), 0, 0, 0, !1)
        } catch (a) {
            this.v && this.v(a)
        }
        this.o && this.o.unobserve(this.m);
        this.B = !1;
        this.j = null
    };
    var tm = function(a, b) {
            if (a.o && (null != a.A && a.unobserve(), a.A = b, a.o.observe(a.m), a.B = !0, a.D)) {
                b = _.om();
                var c = a.m.getBoundingClientRect(),
                    d = c.width * c.height;
                a: {
                    var e = 0;
                    if (!_.Ql(a.l.document)) {
                        e = Pe(a.l);
                        if (!e) {
                            c = -1;
                            break a
                        }
                        var f = zh(e.document);
                        e = Math.min(f.clientWidth, c.left + c.width) - Math.max(0, c.left);
                        c = Math.min(f.clientHeight, c.top + c.height) - Math.max(0, c.top);
                        e = 0 < e && 0 < c ? e * c : 0
                    }
                    c = e
                }
                a.j = new im({
                    time: b,
                    Dc: 0 < d ? c / d > (242500 < d ? .3 : .5) : !1,
                    Cc: 1 == _.Nl(a.l.document)
                })
            }
        },
        pm = function(a) {
            var b = a.m.offsetWidth * a.m.offsetHeight,
                c = mm(a.l);
            b = _.Da(lm).concat(_.Da(nm(c, b)));
            _.sa(b);
            return _.q.IntersectionObserver ? new _.q.IntersectionObserver(function(d) {
                return um(a, d)
            }, {
                threshold: b
            }) : new _.Jl(function(d) {
                return um(a, d)
            }, {
                threshold: b
            })
        },
        um = function(a, b) {
            try {
                var c = mm(a.l);
                _.J(b, function(d) {
                    var e = Math.round(d.time),
                        f = d.boundingClientRect.width * d.boundingClientRect.height,
                        g = d.intersectionRect.width * d.intersectionRect.height;
                    d = d.isIntersecting;
                    if (a.D && a.j) {
                        var h = a.j,
                            k = 0 < f ? g / f > (242500 < f ? .3 : .5) : !1;
                        _.jm(h, e);
                        h.B = k
                    }
                    a.F && sm(a, e, f, g, c, d)
                })
            } catch (d) {
                a.v && a.v(d)
            }
        },
        sm = function(a, b, c, d, e, f) {
            if (null == a.A) throw Error("Not Attached.");
            var g = new hm;
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
            qh(a.G, "1", 10, f, void 0, a.A)
        },
        qm = function(a) {
            var b = _.Pl(a.l.document);
            b && _.P(a.l.document, b, function() {
                if (a.j) {
                    var c = a.j,
                        d = 1 == _.Nl(a.l.document);
                    _.jm(c, _.om());
                    c.A = d
                }
            })
        };
    var vm = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_content_section = "region", a.adsense_cpm = "cpm", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_font_size = "fs", a.adsense_hints = "hints", a.adsense_host = "host", a.adsense_host_channel = "h_ch", a.adsense_host_tier_id = "ht_id", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_relevant_content = "contents", a.adsense_targeting = "targeting", a.adsense_targeting_types = "targeting", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_ch = "cust_ch", a.demographic_gender = "cust_gender", a.demographic_interests = "cust_interests", a.demographic_job = "cust_job", a.demographic_l = "cust_l", a.demographic_lh = "cust_lh", a.demographic_u_url = "cust_u_url", a.demographic_unique_id = "cust_id", a.document_language = "hl", a.geography_override_city = "gcs", a.geography_override_country = "gl", a.google_content_recommendation_ad_positions = "ad_pos", a.matched_content_columns_num = "cr_col", a.matched_content_rows_num = "cr_row", a.matched_content_ui_type = "crui", a.matched_content_use_square_imgs = "cr_sq_img", a
    };
    var xm = function(a) {
        var b = this;
        this.addEventListener = T(86, function(c, d) {
            a.addEventListener(c, d);
            return b
        });
        this.getSlots = T(573, function() {
            return _.u(a.o, function(c) {
                return c.l()
            })
        });
        this.getSlotIdMap = T(574, function() {
            var c = a.L,
                d = {},
                e;
            for (e in c) d[e] = c[e].l();
            return d
        });
        this.enable = T(87, function() {
            return wm(a)
        }, _.bj);
        this.getName = T(575, function() {
            return a.aa()
        })
    };
    _.B(xm, Xh);
    var Im = function(a, b, c) {
        var d = this,
            e = xj.C();
        this.set = T(40, function(f, g) {
            if ("string" !== typeof f || !g || void 0 === vm()[f]) return e.H(V("Slot.set", [f, g]), null, a), d;
            var h = ub(_.Pd(c, hi, 3), function(k) {
                return _.L(k, 1) === f
            });
            h ? ji(h, [g]) : (h = ii(new hi, f), Ld(h, 2, g), Sd(c, 3, h, hi));
            a.set(f, g);
            return d
        });
        this.get = T(41, function(f) {
            if ("string" !== typeof f) return e.H(V("Slot.get", [f]), null, a), null;
            var g = ub(_.Pd(c, hi, 3), function(h) {
                return _.L(h, 1) === f
            });
            return (g = g && _.L(g, 2)) ? g[0] : null
        });
        this.getAttributeKeys = T(42, function() {
            return _.u(_.Pd(c, hi, 3), function(f) {
                return _.L(f, 1)
            })
        });
        this.addService = T(43, function(f) {
            f = Yh(f, b);
            a.addService(f);
            return d
        });
        this.defineSizeMapping = T(44, function(f) {
            if (!_.D(f)) throw Error("Size mapping has to be an array");
            f = _.u(f, ym);
            a.La = new zm(f);
            return d
        }, function(f, g) {
            _.bj(f, g); of ("Incorrect usage of googletag.Slot defineSizeMapping: " + g.message);
            return d
        });
        this.setClickUrl = T(45, function(f) {
            Am(a, f);
            return d
        });
        this.setCategoryExclusion = T(46, function(f) {
            "string" !== typeof f || fc(null == f ? "" : String(f)) ? a.m.H(V("Slot.setCategoryExclusion", [f]), null, a) : (wb(a.Z, f), a.m.info(Oj(f), null, a));
            return d
        });
        this.clearCategoryExclusions = T(47, function() {
            a.m.info(Pj(), null, a);
            a.Z = [];
            return d
        });
        this.getCategoryExclusions = T(48, function() {
            return _.Bb(a.Z)
        });
        this.setTargeting = T(49, function(f, g) {
            Bm(a, f, g);
            return d
        });
        this.clearTargeting = T(50, function(f) {
            "undefined" != typeof f ? "string" !== typeof f || fc(null == f ? "" : String(f)) ? a.m.H(V("Slot.clearTargeting", [f]), null, a) : a.v[f] ? (delete a.v[f], a.m.info(Yk(f, a.getAdUnitPath()), null, a)) : a.m.H(Xk(f, a.getAdUnitPath()), null, a) : (a.m.info(Rj(), null, a), a.v = {});
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
            Cm(a, f, g);
            return d
        });
        this.getAdUnitPath = T(54, function() {
            return a.getAdUnitPath()
        });
        this.getSlotElementId = T(598, function() {
            return a.U.j
        });
        this.setForceSafeFrame = T(55, function(f) {
            Dm(a, f);
            return d
        });
        this.setSafeFrameConfig = T(56, function(f) {
            if (f && _.E(f)) {
                if (f = Em(f)) a.Ha = f
            } else a.m.error(V("Slot.setSafeFrameConfig", [f]), null, a);
            return d
        });
        this.getResponseInformation = T(355, function() {
            return a.ka
        });
        this.getName = T(170, function() {
            window.console && console.error && console.error("getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.");
            var f = new _.Ui("slot_get_name");
            _.z(f);
            _.Vi(f);
            return a.K
        });
        this.getSlotId = T(579, function() {
            return a.U.l()
        });
        this.getServices = T(580, function() {
            return _.u(a.M, function(f) {
                return f.l()
            })
        });
        this.getSizes = T(581, function(f, g) {
            return Fm(a, f, g)
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
            return _.Gm(a)
        });
        this.getFirstLook = T(588, function() { of ("The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        this.getEscapedQemQueryId = T(591, function() {
            return _.Hm(a)
        });
        this.getHtml = T(592, function() {
            return a.getHtml()
        })
    };
    _.B(Im, Xh);
    var Jm = function(a) {
        this.getId = T(593, function() {
            return a.m
        });
        this.getAdUnitPath = T(594, function() {
            return a.getAdUnitPath()
        });
        this.getName = T(595, function() {
            var b = new _.Ui("slot_id_get_name");
            _.z(b);
            _.Vi(b);
            return a.o
        });
        this.toString = T(596, function() {
            return a.toString()
        });
        this.getDomId = T(597, function() {
            return a.j
        })
    };
    _.B(Jm, Xh);
    var Km = function(a) {
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
        Lm = Mb(function() {
            var a = {
                REWARDED: 3
            };
            _.y(35) && (a.TOP_ANCHOR = 1, a.BOTTOM_ANCHOR = 2, a.VIGNETTE = 4);
            return a
        }),
        Mm = function() {
            var a = _.xa();
            if (!a.enums) {
                var b = Lm();
                b && (a.enums = {
                    OutOfPageFormat: b
                })
            }
        };
    var Nm, Om, Em;
    Nm = "";
    Om = null;
    _.Pm = function() {
        Nm || (Nm = _.dg(2) || "1-0-35");
        return Nm
    };
    _.Qm = function() {
        if (null == Om) {
            for (var a = _.eg(1), b = [], c = 0; c < a.length; c += 2) Je(a[c], a[c + 1], b);
            Om = b.join("&")
        }
        return Om
    };
    Em = function(a) {
        var b = xj.C(),
            c = {};
        if (!a || !_.E(a)) return null;
        var d = !1;
        _.O(a, function(e, f) {
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? c.allowOverlayExpansion = a.allowOverlayExpansion : (b.error(Wk("allowOverlayExpansion", String(a.allowOverlayExpansion))), d = !0);
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? c.allowPushExpansion = a.allowPushExpansion : (b.error(Wk("allowPushExpansion", String(a.allowPushExpansion))), d = !0);
                    break;
                case "sandbox":
                    !0 === e ? c.sandbox = a.sandbox : (b.error(Wk("sandbox", String(a.sandbox))), d = !0);
                    break;
                default:
                    b.H(Vk(f))
            }
        });
        return d ? null : c
    };
    var Rm, Vm;
    Rm = {
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
    _.Sm = function(a, b) {
        this.slot = a;
        this.serviceName = b
    };
    _.Tm = function(a, b, c) {
        _.Sm.call(this, a, c);
        this.isEmpty = b;
        this.slotContentChanged = !0;
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
        this.isBackfill = !1;
        this.companyIds = this.yieldGroupIds = null
    };
    _.B(_.Tm, _.Sm);
    _.Um = function(a, b) {
        a.size = b;
        return a
    };
    Vm = function(a, b, c) {
        _.Sm.call(this, a, b);
        this.inViewPercentage = c
    };
    _.B(Vm, _.Sm);
    var Wm = function() {
        _.Sm.apply(this, arguments)
    };
    _.B(Wm, _.Sm);
    var Xm = function() {
        _.Sm.apply(this, arguments)
    };
    _.B(Xm, _.Sm);
    var Ym = function() {
        _.Sm.apply(this, arguments)
    };
    _.B(Ym, _.Sm);
    var Zm = function() {
        this.o = [];
        this.L = {};
        this.m = !1;
        this.G = {};
        this.log = xj.C();
        this.log.info(ck(this.aa()), this)
    };
    _.B(Zm, Dj);
    Zm.prototype.wa = function() {
        return new xm(this)
    };
    Zm.prototype.getVersion = function() {
        return "unversioned"
    };
    var wm = function(a) {
        a.m || (a.wb(), a.m = !0)
    };
    Zm.prototype.Eb = function(a) {
        this.o.push(a);
        var b = new Xm(a.l(), this.aa());
        $m(this, "slotAdded", b);
        this.L[_.R(a)] = a;
        this.log.info(gk(this.aa(), a.getAdUnitPath()), this, a)
    };
    Zm.prototype.destroySlots = function(a) {
        var b = this.o,
            c = _.w(b, function(d) {
                return _.vb(a, d)
            });
        _.J(c, function(d) {
            _.yb(b, d)
        });
        return c
    };
    var an = function(a, b) {
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
    Zm.prototype.addEventListener = function(a, b) {
        if (!_.$a(b) || "string" !== typeof a) return a = V("Service.addEventListener", [a, b]), this.log.H(a, this), this;
        if (!Tb(Rm, a)) return this.log.H(Qk(a), this), this;
        _.D(this.G[a]) || (this.G[a] = []);
        this.G[a].push(b);
        an(this, a);
        return this
    };
    var $m = function(a, b, c) {
        var d = a.G[b];
        _.D(d) && rf(function() {
            for (var e = _.r(d), f = e.next(); !f.done; f = e.next()) {
                f = f.value;
                try {
                    f(c)
                } catch (k) {
                    f = k && "string" === typeof k.name ? k.name : null;
                    var g = k && "string" === typeof k.message ? k.message : null,
                        h = "";
                    f && g ? h = f + ": " + g : f ? h = f : g && (h = g);
                    a.log.H(Pk(h), a);
                    window.console && console.error && console.error(k)
                }
            }
        })
    };
    _.bn = function() {
        var a = this;
        this.j = {};
        this.l = xj.C();
        this.o = this.l.info(Mj());
        Zh(window, function() {
            return _.S(92, a.m)
        })
    };
    _.bn.prototype.add = function(a) {
        this.j[a.aa()] = a
    };
    _.bn.prototype.find = function(a) {
        var b = null;
        a in this.j && (b = this.j[a]);
        return b
    };
    var cn = function() {
        var a = _.bn.C();
        _.yh(6);
        _.O(a.j, function(b) {
            b.m ? a.l.info(fk(), b) : wm(b)
        })
    };
    _.bn.prototype.destroySlots = function(a) {
        _.O(this.j, function(b) {
            return b.destroySlots(a)
        })
    };
    _.bn.prototype.m = function() {
        this.l.info(Gj(), null, null, this.o)
    };
    Wa(_.bn);
    _.bn.prototype.m = _.S(92, _.bn.prototype.m);
    wa("enableServices", _.S(91, function() {
        cn()
    }));
    var dn = function(a, b) {
        this.l = a;
        this.j = b
    };
    dn.prototype.getWidth = function() {
        return this.l
    };
    dn.prototype.getHeight = function() {
        return this.j
    };
    var en = function(a) {
            return _.D(a) && 2 == a.length && Ki(a[0]) && Ki(a[1]) || "string" === typeof a && "fluid" == a
        },
        fn = function(a) {
            return _.D(a) ? new dn(a[0], a[1]) : a
        },
        hn = function(a) {
            var b = [];
            if (gn(a)) b.push(fn(a));
            else if (_.D(a))
                for (var c = 0; c < a.length; ++c) {
                    var d = a[c];
                    gn(d) && b.push(fn(d));
                    Gb(d, ["fluid"]) && b.push("fluid")
                }
            return b
        },
        gn = function(a) {
            return _.D(a) && 1 < a.length && "number" === typeof a[0] && "number" === typeof a[1] || "string" === typeof a && "fluid" == a
        };
    var zm = function(a) {
            this.j = a
        },
        jn = function(a, b) {
            a = ub(a.j, function(c) {
                c = c.l;
                return c.width <= b.width && c.height <= b.height
            });
            return null == a ? null : a.j
        },
        ym = function(a) {
            if (!_.D(a) || 2 != a.length) throw Error("Each mapping entry has to be an array of size 2");
            var b = a[0];
            if (!en(b) || "fluid" == b) throw Error("Size has to be an array of two non-negative integers");
            b = new _.qe(b[0], b[1]);
            if (_.D(a[1]) && 0 == a[1].length) a = [];
            else if (a = hn(a[1]), 0 == a.length) throw Error("At least one slot size must be present");
            return new zl(b, a)
        };
    var kn = function(a, b, c) {
        this.o = a;
        this.Qa = b;
        this.m = this.o + "_" + this.Qa;
        this.j = c
    };
    _.B(kn, Dj);
    kn.prototype.getAdUnitPath = function() {
        return this.o
    };
    kn.prototype.C = function() {
        return this.Qa
    };
    kn.prototype.toString = function() {
        return this.m
    };
    kn.prototype.wa = function() {
        return new Jm(this)
    };
    kn.prototype.getInstance = kn.prototype.C;
    var nn = function(a, b, c, d, e) {
            var f = this;
            this.mc = e;
            this.K = a;
            this.nc = hn(c);
            this.La = null;
            this.U = new kn(a, b, d);
            this.M = [];
            this.ea = {};
            this.ta = null;
            this.m = xj.C();
            this.m.info(Hj(this.U.toString()), null, this);
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
            this.W = !1;
            this.Ha = {};
            this.Ia = "";
            this.gc = !1;
            this.ca = null;
            this.L = !1;
            this.T = null;
            this.Ib = Ob(function(g) {
                null !== g && (g = new Vm(f.l(), "publisher_ads", g), _.ln(f, "slotVisibilityChanged", g))
            }, 200);
            this.A = Li(this.K);
            this.Va = "";
            this.ka = this.F = null;
            this.qa = !1;
            this.Fa = this.B = 0;
            this.Gb = this.P = this.ua = this.J = null;
            this.za = !1;
            this.N = this.ja = this.la = this.Ma = this.ia = null;
            _.mn(this);
            this.ha = "";
            this.Ga = new _.ki;
            this.X = this.fb = this.ba = null;
            this.R = 0;
            this.j = null;
            this.ma = this.D = 0;
            this.ra = this.ob = !1;
            this.Ka = null
        },
        Fm, Cm, sn, tn, un, vn, wn, xn, zn, Gn;
    _.B(nn, Dj);
    _.n = nn.prototype;
    _.n.wa = function() {
        return new Im(this, Zm, this.mc)
    };
    _.n.set = function(a, b) {
        this.ea[a] = b;
        return this
    };
    _.n.get = function(a) {
        return this.ea.hasOwnProperty(a) ? this.ea[a] : null
    };
    _.n.addService = function(a) {
        var b = _.bn.C();
        if (!Tb(b.j, a)) return this.m.H(Rk(this.U.toString()), null, this), this;
        for (b = 0; b < this.M.length; ++b)
            if (a == this.M[b]) return this.m.H(Nj(a.aa(), this.U.toString()), a, this), this;
        this.M.push(a);
        a.Eb(this);
        return this
    };
    _.n.getAdUnitPath = function() {
        return this.K
    };
    _.n.C = function() {
        return this.U.C()
    };
    _.W = function(a, b) {
        b = void 0 === b ? document : b;
        return a.J || b.getElementById(a.U.j)
    };
    Fm = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && a.La ? jn(a.La, new _.qe(b, c)) : a.nc
    };
    _.R = function(a) {
        return a.K + "_" + a.U.C()
    };
    _.on = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top == b && (b = _.vl(!1, b), c = Fm(a, b.width, b.height));
        null == c && (c = Fm(a));
        return _.u(c, function(d) {
            return "string" === typeof d ? d : [d.getWidth(), d.getHeight()]
        })
    };
    _.Di = function(a) {
        var b = [],
            c = !1;
        _.J(_.on(a), function(d) {
            _.D(d) ? b.push(d.join("x")) : "fluid" == d ? c = !0 : b.push(d)
        });
        c && b.unshift("320x50");
        return b.join("|")
    };
    nn.prototype.da = function() {
        return _.vb(_.on(this), "fluid")
    };
    var Am = function(a, b) {
            "string" !== typeof b ? a.m.H(V("Slot.setClickUrl", [b]), null, a) : a.O = b
        },
        Dm = function(a, b) {
            "boolean" !== typeof b ? a.m.H(V("Slot.setForceSafeFrame", [b]), null, a) : a.ca = b
        },
        Bm = function(a, b, c) {
            var d = [];
            _.D(c) ? d = c : c && d.push(c.toString());
            "string" === typeof b ? (a.m.info(Qj(b, d.join(), a.getAdUnitPath()), null, a), a.v[b] = d) : a.m.H(V("Slot.setTargeting", [b, c]), null, a)
        };
    nn.prototype.getOutOfPage = function() {
        return this.va
    };
    nn.prototype.na = function() {
        return this.kc
    };
    _.pn = function(a) {
        return 3 == a.na()
    };
    Cm = function(a, b, c) {
        "boolean" !== typeof b || c && "boolean" !== typeof c ? a.m.H(V("Slot.setCollapseEmptyDiv", _.w([b, c], _.Pa)), null, a) : (a.pa = b, a.$ = b && !!c, _.ya("gpt_ced", function(d) {
            _.A(d, "sc", a.$ ? "t" : "f");
            _.A(d, "level", "slot");
            _.z(d)
        }), c && !b && a.m.H(Sj(a.U.toString()), null, a))
    };
    sn = function(a, b) {
        if (!_.W(a)) return a.m.error(Tj(a.U.toString()), null, a), !1;
        var c = a.U.j,
            d = _.W(a, _.q.document);
        if (!d) return a.m.error(Uj(c, a.U.toString()), null, a), !1;
        c = a.ta;
        return "string" === typeof c && 0 < c.length ? (_.qn(a), d.innerHTML = c, _.rn(a, b), !0) : !1
    };
    tn = function(a, b, c) {
        c = void 0 === c ? null : c;
        if (a.qa && (_.ya("gpt_mult_disp", function(d) {
                _.A(d, "iu", a.K);
                _.A(d, "id", a.U.j);
                _.A(d, "ac", a.j ? "1" : "0");
                _.z(d)
            }), _.y(89))) return;
        a.J = c;
        a.ic && !_.W(a) ? a.m.H(Vj(a.K, a.U.j), null, a) : (a.qa = !0, _.J(a.M, function(d) {
            d.m && d.yb(b, a)
        }))
    };
    un = function(a) {
        a.mb = a.m.info(Ij(a.getAdUnitPath()), null, a);
        a.B++;
        qh(_.ti.C(), "7", 9, a.B, 0, a.o);
        var b = new Ym(a.l(), "publisher_ads");
        _.ln(a, "slotRequested", b);
        a.G = null
    };
    vn = function(a, b) {
        a.I = b
    };
    _.Gm = function(a) {
        return _.$a(a.I) ? a.I() : a.I
    };
    _.qn = function(a) {
        a.G = a.m.info(Kj(a.getAdUnitPath()), null, a)
    };
    _.rn = function(a, b) {
        a.m.info(Lj(a.getAdUnitPath()), null, a, a.G);
        _.ln(a, "slotRenderEnded", b)
    };
    nn.prototype.loaded = function() {
        var a = new Wm(this.l(), "publisher_ads");
        _.ln(this, "slotOnload", a);
        _.sh(_.ti.C(), "6", this.o);
        _.y(86) && this.j && _.L(this.j, 4) && Kh()
    };
    wn = function(a) {
        a.L = !1;
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
    xn = function(a) {
        var b = a.D ? _.gh() - a.D : 0;
        return Math.round((a.ma + b) / 1E3)
    };
    _.Hm = function(a) {
        return a.j && _.L(a.j, 34) || ""
    };
    nn.prototype.getHtml = function() {
        return _.yn(this) ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : this.j && _.L(this.j, 4) || ""
    };
    _.yn = function(a) {
        return a.j ? !!_.M(a.j, 9) : null
    };
    _.ln = function(a, b, c) {
        _.J(a.M, function(d) {
            d.aa() == c.serviceName && $m(d, b, c)
        })
    };
    nn.prototype.Ra = function() {
        return this.gc
    };
    nn.prototype.lc = function() {
        return this.A
    };
    zn = function(a, b) {
        a.Fa = b
    };
    _.An = function(a) {
        return "google_ads_iframe_" + _.R(a)
    };
    _.Bn = function(a) {
        return _.An(a) + "__container__"
    };
    _.mn = function(a, b) {
        b || (b = ++_.ti.C().m);
        a.o = b
    };
    _.Cn = function(a, b) {
        return a.ua ? a.ua : b.getElementById(_.An(a))
    };
    _.Dn = function(a, b) {
        if (a.P) return a.P;
        a = _.Bn(a);
        return b.getElementById(a)
    };
    _.En = function(a) {
        if (!a.ia) {
            var b = _.W(a);
            b = b && b.parentElement;
            if (_.y(50)) {
                if (b = b.getBoundingClientRect()) a.ia = (new _.qe(b.right - b.left, b.bottom - b.top)).floor()
            } else b && b.getBoundingClientRect && (a.ia = Ni(b))
        }
        return a.ia
    };
    _.Fn = function(a, b) {
        b = void 0 === b ? document : b;
        if (!a.la) {
            b = _.W(a, b);
            if (!b) return null;
            a.la = _.Re(b, window)
        }
        return a.la
    };
    Gn = function(a) {
        var b = _.En(a);
        return b ? _.qb(_.on(a), function(c) {
            if ("string" === typeof c) return !0;
            var d = Math.floor(c[1]) == b.height;
            return Math.floor(c[0]) != b.width || !d
        }) : !1
    };
    _.Hn = function(a) {
        return !(!a.j || !_.Nd(a.j, _.$d, 41) || "string" !== typeof _.Jd(_.Nd(a.j, _.$d, 41).getHtml()))
    };
    var Jn;
    _.In = function() {
        this.l = [];
        this.m = [];
        this.j = {}
    };
    Jn = function(a, b) {
        return a.j[b] || []
    };
    Wa(_.In);
    var Kn = function() {
            this.j = new ri;
            _.bi(36) && _.N(this.j, 15, !0)
        },
        Ln = function(a, b) {
            return ub(_.Pd(a.j, oi, 1), function(c) {
                return _.L(c, 2) === b
            })
        },
        Mn = function(a, b) {
            var c = _.Pd(a.j, oi, 1);
            zb(c, function(d) {
                return _.L(d, 2) === b
            }) && Rd(a.j, 1, c)
        };
    Wa(Kn);
    var Nn = function() {
        var a = this;
        this.j = function() {
            return !1
        };
        this.l = "";
        var b = Kn.C(),
            c = {};
        this[3] = (c[19] = function() {
            return !!_.M(b.j, 10)
        }, c[14] = Hi, c[13] = function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return _.qb(e, function(g) {
                return 0 == a.l.lastIndexOf(g, 0)
            })
        }, c[12] = function() {
            return !!_.M(b.j, 6)
        }, c[11] = Ol, c[15] = function(d) {
            return a.j(d)
        }, c[7] = function() {
            return !(!_.q.crypto || !_.q.crypto.subtle)
        }, c[1] = function() {
            return 0 == (0, _.kf)()
        }, c);
        c = {};
        this[4] = (c[3] = function() {
            return (0, _.kf)()
        }, c);
        this[5] = {}
    };
    Wa(Nn);
    var On, Rn, Sn, Pn, Tn, Un, Vn, Wn, Xn, Yn, Zn, $n, bo;
    On = function(a) {
        return !!_.Xe(Lm(), function(b) {
            return b == a
        })
    };
    Rn = function(a) {
        return _.vb(Mi(Pn(_.Qn.C())), a)
    };
    Sn = Nb(function() { of ("GPT does not support passback slots on the top window. Each passback slot should be defined and rendered within an iframe.")
    });
    _.Qn = function() {
        this.j = {};
        this.m = {};
        this.l = {};
        this.o = xj.C();
        this.v = [];
        Nn.C().j = Rn
    };
    _.Qn.prototype.add = function(a, b, c) {
        var d = void 0 === c ? {} : c,
            e = void 0 === d.Xa ? void 0 : d.Xa;
        c = void 0 === d.ac ? nn : d.ac;
        var f = void 0 === d.Xb ? !1 : d.Xb;
        if ("string" !== typeof a || 0 >= a.length || !b) return {};
        d = Km(void 0 === d.format ? 0 : d.format);
        if (null != d) {
            var g = _.Tl(window);
            if ($l(g, d)) return {};
            g.adCount = g.adCount || {};
            g.adCount[d] = g.adCount[d] + 1 || 1
        }
        f && window == window.top && Sn();
        a in this.j || (this.j[a] = [], this.m[a] = f ? 1 : 0);
        f = this.m[a];
        e = e || "gpt_unit_" + a + "_" + f;
        if (this.l[e]) return this.o.error(Yj(e)), {};
        d = new oi;
        d = _.N(d, 1, a);
        d = _.N(d, 2, e);
        g = Kn.C();
        Sd(g.j, 1, d, oi);
        b = new c(a, f, b, e, d);
        this.m[a]++;
        this.j[a].push(b);
        this.l[b.U.j] = b;
        _.Zi.push(b);
        return {
            slot: b,
            Sa: d
        }
    };
    Pn = function(a) {
        var b = [];
        _.Pb(a.j, function(c) {
            _.J(c, function(d) {
                b.push(d)
            })
        });
        return b
    };
    Tn = function(a) {
        var b = [];
        a = Jn(_.In.C(), a);
        _.J(a, function(c) {
            (c = _.Cn(c, document)) && b.push(c.contentWindow)
        });
        return b
    };
    Un = function(a, b) {
        b = _.r(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            Mn(Kn.C(), c.U.j);
            c.gc = !0;
            c.m.info(Uk(c.U.toString()), null, c);
            var d = Km(c.na());
            if (null != d) {
                var e = _.Tl(window),
                    f = e.adCount && e.adCount[d];
                f && (e.adCount[d] = f - 1)
            }
            d = c.getAdUnitPath();
            _.yb(a.j[d], c);
            0 == a.j[d].length && (e = a.j, d in e && delete e[d]);
            d = a.l;
            e = c.U.j;
            e in d && delete d[e];
            _.yb(_.Zi, c)
        }
    };
    Vn = function(a, b) {
        if (b && !_.D(b)) return a.o.H(V("googletag.destroySlots", [b])), !1;
        b ? (_.sa(b), b = _.w(b, function(c) {
            return c && !c.Ra()
        })) : b = Pn(a);
        if (!b || 0 == b.length) return !1;
        _.bn.C().destroySlots(b);
        Un(a, b);
        return !0
    };
    Wn = function(a, b) {
        return a.l[b] ? a.l[b] : null
    };
    Xn = function(a) {
        var b = _.Qn.C(),
            c = Yh(a, nn);
        return !!c && Rb(b.j, function(d) {
            return _.vb(d, c)
        })
    };
    Yn = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        if ("string" === typeof a && (void 0 === c || "string" === typeof c)) {
            var f = _.Qn.C();
            return f && f.add(a, b, {
                Xa: c,
                ac: d,
                Xb: e
            })
        }
        return {}
    };
    Zn = function(a, b, c) {
        return (a = Yn(a, b, c).slot) && a.l() || null
    };
    $n = function(a) {
        var b = _.Qn.C();
        return b && null == a ? Vn(b) : b && _.D(a) ? (a = _.u(a, function(c) {
            return Yh(c, nn)
        }), Vn(b, a)) : !1
    };
    _.ao = function(a, b, c) {
        if (a = _.Qn.C().add(a, [1, 1], {
                Xa: c,
                format: b
            }).slot) a.va = !0, a.kc = b;
        return a || null
    };
    bo = function(a, b) {
        return "string" === typeof a && (null == b || "string" === typeof b || "number" === typeof b && On(b)) ? (a = _.ao(a, "number" === typeof b ? b : 0, "string" === typeof b ? b : void 0)) && a.l() : null
    };
    Wa(_.Qn);
    Zn = _.S(74, Zn);
    $n = _.S(75, $n);
    bo = _.S(73, bo);
    var co = _.S(95, function(a) {
        var b = xj.C();
        var c = null;
        var d = "";
        if ("string" === typeof a) {
            d = a;
            var e = Wn(_.Qn.C(), d)
        } else _.E(a) && 1 == a.nodeType ? (c = a, d = c.id, e = Wn(_.Qn.C(), d)) : e = Yh(a, nn);
        e ? (a = Kn.C().j, Ln(Kn.C(), e.U.j) && (a = Si(a), tn(e, a, c))) : d ? b.error(Xj(String(d))) : b.error(Wj(String(a)))
    });
    var ah, eo, fo, bh = _.zg(),
        th = new nh(1, bh);
    (function() {
        ah = new _.$g(vg() ? "http:" : "https:", .01);
        "number" !== typeof bh.google_srt && (bh.google_srt = Math.random());
        ch();
        eo = new _.uh;
        eo.Zb(function(b) {
            var c = be.jerExpIds;
            if (_.D(c) && 0 !== c.length) {
                var d = b.eid;
                d ? (c = _.Da(d.split(",")).concat(_.Da(c)), _.sa(c), b.eid = c.join(",")) : b.eid = c.join(",")
            }
            fo && (b.jc = fo);
            (c = be.jerUserAgent) && (b.useragent = c)
        });
        eo.$b(!0);
        "complete" == bh.document.readyState ? bh.google_measure_js_timing || ph(th) : th.j && _.P(bh, "load", function() {
            bh.google_measure_js_timing || ph(th)
        });
        var a = ae.currentScript;
        fo = a ? a.dataset.jc : ""
    })();
    var go = navigator,
        ho = function() {
            try {
                return go.javaEnabled()
            } catch (a) {
                return !1
            }
        },
        io = function(a) {
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
        jo = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return io(a.toLowerCase())
        },
        ko = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        lo = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
        mo = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    _.no = function(a, b) {
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
            else !1 !== c && (d = Ue([0], a), null == d && ((d = Ue([2], b)) || (d = 3)));
            if (!d) return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };
    var oo = new nh(1, _.zg()),
        po = function() {
            var a = _.zg();
            a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || ph(oo))
        };
    (function() {
        var a = _.zg();
        a && a.document && ("complete" == a.document.readyState ? po() : oo.j && _.P(a, "load", function() {
            po()
        }))
    })();
    _.gb();
    var ro, so;
    _.qo = ["auto", "inherit", "100%"];
    ro = _.qo.concat(["none"]);
    so = function(a, b, c, d, e, f) {
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
                    var t = k[m],
                        x;
                    if (x = 1 == t.type) {
                        x = t;
                        var v = c;
                        x = g.call(a, x.selectorText) && v(x)
                    }
                    if (!x && (x = d && 4 == t.type)) a: {
                        x = a;v = c;
                        for (var H = f, C = 0; C < Math.min(t.cssRules.length, H); C++) {
                            var I = t.cssRules[C],
                                Q = v;
                            if (g.call(x, I.selectorText) && Q(I)) {
                                x = !0;
                                break a
                            }
                        }
                        x = !1
                    }
                    if (x) return !0
                }
        }
        return !1
    };
    _.uo = function(a, b, c, d, e, f) {
        e = void 0 === e ? 10 : e;
        f = void 0 === f ? 10 : f;
        if (!a) return !0;
        var g = !0;
        _.mf(a, function(h) {
            return g = _.to(h, b, c, e, f)
        }, void 0 === d ? 100 : d);
        return g
    };
    _.to = function(a, b, c, d, e) {
        var f = a.style;
        return f && f.height && !_.vb(_.qo, f.height) || f && f.maxHeight && !_.vb(ro, f.maxHeight) || so(a, b.document, function(g) {
            var h = g.style.height;
            g = g.style["max-height"];
            return h && !_.vb(_.qo, h) || g && !_.vb(ro, g)
        }, c, d, e) ? !1 : !0
    };
    var vo = function(a) {
            a = void 0 === a ? window : a;
            return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
        },
        wo = function(a, b) {
            b = void 0 === b ? window : b;
            var c = vo(b);
            if (!c) return null;
            var d = null;
            try {
                "afma-gpt-sdk-a" == c ? d = b._gmptnl.pm("GAM=", a) || "5" : (d = b.__gmptnl_n || "5", b.webkit.messageHandlers._gmptnl.postMessage("GAM="))
            } catch (e) {
                return "3"
            }
            return "string" === typeof d ? d : "3"
        };
    _.xo = function() {
        this.l = [];
        this.j = -1
    };
    _.xo.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && 0 === a % 1 && this.l[a] != b && (this.l[a] = b, this.j = -1)
    };
    _.xo.prototype.get = function(a) {
        return !!this.l[a]
    };
    _.yo = function(a) {
        -1 == a.j && (a.j = pb(a.l, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.j
    };
    var zo = function() {
        this.j = function() {}
    };
    Wa(zo);
    var Ao = function() {
        var a = Nn.C();
        zo.C().j(a)
    };
    var Bo = function() {
        if (void 0 === b) {
            var a = void 0 === a ? _.q : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        xh(_.wh.C(), a);
        a = b;
        var c = bg.C();
        c.j = ag(Wf, a);
        c.l = ag(Xf, a);
        c.m = ag(Yf, a);
        c.o = ag(Zf, a);
        zo.C().j = ag($f, b)
    };
    var Eo = function() {
            var a = void 0;
            this.m = a = void 0 === a ? document : a;
            this.j = 0;
            this.o = Co(this, "__gads=");
            this.A = !1;
            this.l = null;
            this.v = !1;
            Do(this)
        },
        Fo = function(a, b) {
            a.j = b;
            Do(a)
        },
        Do = function(a) {
            if (!a.o && !a.v && 1 != a.j) {
                a.m.cookie = "GoogleAdServingTest=Good";
                var b = "Good" === Co(a, "GoogleAdServingTest=");
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
        Co = function(a, b) {
            a = a.m.cookie;
            var c = a.indexOf(b);
            if (-1 === c) return "";
            b = c + b.length;
            c = a.indexOf(";", b); - 1 == c && (c = a.length);
            return a.substring(b, c)
        };
    var Go = Mb(function() {
            return !(dd || ed || cd) && (nd || _.Zc || Yc && _.ld(11))
        }),
        Ho = function(a, b, c, d, e) {
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
    var Io = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Jo = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
        Ko = _.q,
        Mo = function(a) {
            a = "https://adservice" + (a + "/adsid/integrator.js");
            var b = ["domain=" + encodeURIComponent(_.q.location.hostname)];
            Lo[3] >= _.gb() && b.push("adsid=" + encodeURIComponent(Lo[1]));
            return a + "?" + b.join("&")
        },
        Lo, No, Oo = function() {
            Ko = _.q;
            Lo = Ko.googleToken = Ko.googleToken || {};
            var a = _.gb();
            Lo[1] && Lo[3] > a && 0 < Lo[2] || (Lo[1] = "", Lo[2] = -1, Lo[3] = -1, Lo[4] = "", Lo[6] = "");
            No = Ko.googleIMState = Ko.googleIMState || {};
            a = No[1];
            Io.test(a) && !Jo.test(a) || (No[1] = ".google.com");
            _.D(No[5]) || (No[5] = []);
            "boolean" !== typeof No[6] && (No[6] = !1);
            _.D(No[7]) || (No[7] = []);
            "number" !== typeof No[8] && (No[8] = 0)
        },
        Po = {
            ub: function() {
                return 0 < No[8]
            },
            Mc: function() {
                No[8]++
            },
            Nc: function() {
                0 < No[8] && No[8]--
            },
            Oc: function() {
                No[8] = 0
            },
            fe: function() {
                return !1
            },
            Ob: function() {
                return No[5]
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
                if (!Po.ub()) {
                    var a = _.q.document,
                        b = function(e) {
                            e = Mo(e);
                            a: {
                                try {
                                    var f = Ua();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            Ho(a, e, "preload", "script", f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return _.q.processGoogleToken({}, 2)
                            };
                            e = Fe(e);
                            _.ha(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), Po.Mc()
                            } catch (g) {}
                        },
                        c = No[1];
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
        Qo = function(a) {
            Oo();
            var b = Ko.googleToken[5] || 0;
            a && (0 != b || Lo[3] >= _.gb() ? Po.Kb(a) : (Po.Ob().push(a), Po.Yb()));
            Lo[3] >= _.gb() && Lo[2] >= _.gb() || Po.Yb()
        },
        Ro = function(a) {
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
                Oo();
                1 == c ? Po.Oc() : Po.Nc();
                var k = Ko.googleToken = Ko.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !Po.ub() && (!(Lo[3] >= _.gb()) || "NT" == Lo[1]);
                var m = !(Lo[3] >= _.gb()) && 0 != c;
                if (l || e || m) e = _.gb(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && _.uf(_.q, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, Oo();
                if (l || !Po.ub()) {
                    c = Po.Ob();
                    for (b = 0; b < c.length; b++) Po.Kb(c[b]);
                    c.length = 0
                }
            };
            Qo(a)
        };
    var Uo, To;
    _.So = function(a) {
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
    Uo = function(a, b, c) {
        try {
            if (!b || !_.So(c) || !c.localStorage) return null;
            var d = c.localStorage.getItem("__lsv__");
            if (!d) return [];
            try {
                var e = JSON.parse(d)
            } catch (f) {}
            return !_.D(e) || _.qb(e, function(f) {
                return !Number.isInteger(f)
            }) ? (c.localStorage.removeItem("__lsv__"), []) : To(a, e)
        } catch (f) {
            return null
        }
    };
    To = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.w(b, function(d) {
            return c - d < a
        })
    };
    var Vo = function() {
        var a = window,
            b = a.google_ltobserver;
        b && (b.disconnect(), delete a.google_ltobserver);
        a.google_lt_queue && delete a.google_lt_queue
    };
    var Wo = function(a) {
        this.j = null;
        this.l = 0;
        this.m = a
    };
    Wo.prototype.getOseId = function() {
        this.l || (this.l = _.no(0, _.bi(7)));
        return this.l
    };
    var Xo = function(a, b) {
            a = void 0 === a ? {} : a;
            b = void 0 === b ? {} : b;
            this.l = a;
            this.j = b
        },
        Yo = function(a, b, c, d) {
            if (!(b && b in a.l)) return !1;
            if (void 0 === d || d || !a.j[b]) a.j[b] = c || "";
            return !0
        },
        Zo = function(a, b) {
            _.O(b.j, function(c, d) {
                this.j[d] || (this.j[d] = c)
            }, a)
        },
        vi = function(a) {
            return a.j.page_url
        },
        $o = function(a) {
            var b = {};
            _.O(a.j, function(c, d) {
                d in a.l && (b[a.l[d]] = c)
            });
            return new Xo(a.l, b)
        },
        ap = function(a) {
            var b = [];
            _.O(a.j, function(c, d) {
                d in a.l && b.push({
                    bb: a.l[d],
                    Wb: c
                })
            });
            return b
        },
        bp = function(a, b, c, d) {
            var e = [],
                f = b.j;
            _.O(d, function(g, h) {
                if (g) {
                    g = {
                        bb: g
                    };
                    var k = f[h],
                        l = [];
                    a.forEach(function(m, t) {
                        (m = c[_.R(m)]) && m.j[h] && (l[t] = m.j[h])
                    });
                    if (l.length || k) l.length && (g.Vc = l), k && (g.Wb = k), e.push(g)
                }
            });
            return e
        };
    var cp = function() {
            var a = vm();
            this.j = {};
            this.J = a;
            this.l = new Xo(a);
            this.m = {};
            this.D = {};
            this.B = {};
            this.F = {};
            this.I = "";
            this.v = -1;
            this.G = 0;
            this.o = !1;
            this.A = {}
        },
        dp = function(a, b) {
            var c = _.R(b);
            a.j[c] || (a.j[c] = b)
        },
        fp = function(a) {
            return _.w(ep(a), function(b) {
                return !b.ra
            })
        },
        gp = function(a, b) {
            _.J(b, function(c) {
                _.R(c) in a.j && wn(c)
            })
        },
        hp = function(a, b) {
            if (_.y(150) && _.yn(b)) return !1;
            var c = b.j;
            return (c = c && _.Nd(c, _.Yd, 50)) && null != _.L(c, 1) ? !1 : !a.F[_.R(b)]
        },
        Yi = function(a) {
            var b = 0;
            _.O(a.j, function() {
                b++
            });
            return b
        },
        ep, Xi, ip, jp, kp, lp, mp, op, pp;
    cp.prototype.toString = function() {
        var a = "[AdData:",
            b = [];
        _.O(this.j, function(c) {
            b.push(c.toString())
        });
        a += b.join();
        return a + "]"
    };
    ep = function(a) {
        var b = [];
        _.O(a.j, function(c) {
            b.push(c)
        });
        return b
    };
    Xi = function(a) {
        a = ep(a);
        a = _.u(a, function(b) {
            return b.A
        });
        _.sa(a);
        return a
    };
    ip = function(a, b, c) {
        return _.y(130) ? _.M(c, 6) || b.W ? null : _.W(b) : a.D[_.R(b)] || null
    };
    jp = function(a, b, c, d) {
        var e = Fi(b);
        if (!e) return e;
        var f = b === _.W(c, a),
            g = Mb(function() {
                return f ? _.Fn(c, a) || {} : _.Re(b, window) || {}
            }),
            h = _.on(c)[0],
            k = !1;
        _.D(h) && (k = d ? f : 0 == e.x && "center" == g()["text-align"]);
        k && (e.x += Math.round(Math.max(0, (f ? b.clientWidth : b.parentElement.clientWidth) - h[0]) / 2));
        f && (e.y += Math.round(Math.min(parseInt(g()["padding-top"], 10) || 0, b.clientHeight)), k || (d = b.clientWidth, e.x += Math.round(Math.min(parseInt(g()["padding-left"], 10) || 0, d))));
        return e
    };
    kp = function(a, b, c, d) {
        var e = _.Dn(b, c) || _.W(b, c);
        if (!e) return null;
        c = jp(c, e, b, d);
        if (!c) return null;
        if ((e = c && _.Ch(e)) && (0 <= c.x || 0 <= c.y)) a.B[_.R(b) + "_" + d] = c;
        else if (!e) return new _.pe(-12245933, -12245933);
        return c
    };
    lp = function(a) {
        return _.u(a, function(b) {
            return _.Di(b)
        }).join()
    };
    mp = function(a, b) {
        _.J(b, function(c) {
            if (a.j[_.R(c)]) {
                var d = a.j;
                c = _.R(c);
                c in d && delete d[c]
            }
        })
    };
    _.np = function(a, b, c, d, e) {
        var f = b.document;
        a = a.B[_.R(d) + "_" + e] || kp(a, d, f, e);
        if (!a || -12245933 == a.y) return !0;
        try {
            var g = Bh(b.top.document, b.top).y,
                h = _.vl(!0, b),
                k = g + h.height * (c + 1);
            return a.y >= g && a.y <= k
        } catch (l) {
            return !0
        }
    };
    op = function(a, b, c) {
        for (var d = [], e = b.length - 1; 0 <= e; e--) {
            var f = b[e];
            if (_.W(f) && _.np(a, _.q, 2, f, !!_.M(c, 15))) break;
            else d.unshift(f)
        }
        return d
    };
    pp = function(a, b) {
        var c = null;
        if (_.D(_.on(a)[0])) {
            var d = _.r(_.on(a)[0]);
            c = d.next().value;
            d = d.next().value;
            c = {
                width: c,
                height: d
            }
        }
        var e = _.Dn(a, b) || _.W(a, b);
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
                                if (k && Me(h.parent)) {
                                    e = k;
                                    break
                                }
                            }
                        } catch (v) {}
                        e = null;
                        break;
                    case 1:
                        var l = e,
                            m;
                        if (m = d) {
                            b: {
                                try {
                                    if (0 < l.offsetWidth && 0 < l.offsetHeight && l.style && "none" !== l.style.display && "hidden" !== l.style.visibility && (!l.style.opacity || 0 !== Number(l.style.opacity))) {
                                        var t = l.getBoundingClientRect();
                                        var x = 0 < t.right && 0 < t.bottom;
                                        break b
                                    }
                                } catch (v) {}
                                x = !1
                            }
                            m = !x
                        }
                        if (m) {
                            h = !1;
                            break a
                        }
                        g || (/^html|body$/i.test(l.tagName) ? g = null : (g = l.style.position || (_.Re(l, window) || {}).position, g = /^fixed/i.test(g) ? l : null), g = !!g && (!a || g.offsetWidth * g.offsetHeight <= 4 * a.width * a.height));
                        e = e.parentNode
                }
            }
            h = g
        }
        return h
    };
    var qp, rp;
    qp = 0;
    rp = function(a, b) {
        this.kb = a;
        this.j = b;
        this.l = [];
        this.$ = !1;
        this.L = "";
        this.D = NaN;
        this.W = "json_html";
        this.A = "fif";
        this.v = 1;
        this.N = !1;
        this.J = "";
        this.K = [];
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
    _.sp = function(a, b) {
        b = _.R(b);
        a.F[b] || (a.F[b] = window == window.top ? (++qp).toString(36) : _.Pc());
        return a.F[b]
    };
    _.tp = function(a, b, c, d, e) {
        a = _.De(new _.re(a), "DIV");
        a.id = c;
        a.name = c;
        c = a.style;
        c.border = "0pt none";
        d && (c.margin = "auto", c.textAlign = "center");
        e && (d = _.D(e), c.width = d ? e[0] + "px" : "100%", c.height = d ? e[1] + "px" : "0%");
        b.appendChild(a);
        return a
    };
    var up = function(a) {
        var b = _.cg(8, -1);
        return -1 != b ? b : null != _.L(a, 1) ? null != _.L(a, 3) && 0 != (0, _.kf)() ? _.L(a, 1) * _.Id(a, 3) : _.L(a, 1) : null
    };
    _.X = function(a, b, c) {
        _.wl.call(this);
        this.slot = a;
        this.F = b;
        this.I = c;
        this.A = []
    };
    _.B(_.X, _.wl);
    _.X.prototype.j = _.p(10);
    _.X.prototype.m = _.p(16);
    _.X.prototype.l = function() {
        _.wl.prototype.l.call(this);
        _.J(this.A, function(a) {
            return a()
        });
        this.A = []
    };
    _.vp = function(a, b, c) {
        _.X.call(this, a, b, c);
        this.v = "";
        this.o = null
    };
    _.B(_.vp, _.X);
    _.vp.prototype.j = _.p(9);
    _.vp.prototype.m = _.p(15);
    _.vp.prototype.l = function() {
        _.X.prototype.l.call(this);
        if (this.o) try {
            this.o()
        } catch (a) {
            _.bj(493, a)
        }
    };
    _.wp = function(a, b, c) {
        _.X.call(this, a, b, c);
        this.v = this.D = !1;
        this.B = this.o = null
    };
    _.B(_.wp, _.X);
    _.wp.prototype.j = _.p(8);
    _.wp.prototype.m = _.p(14);
    _.xp = new function(a) {
        this.id = a
    }(1);
    var Qp;
    _.Pp = function() {
        this.j = {}
    };
    Qp = function(a) {
        var b = _.Pp.C(),
            c = _.xp.id;
        a = _.S(614, a, function(d, e) {
            _.cj(d, e, !0)
        });
        b.j[c] ? b.j[c].push(a) : b.j[c] = [a]
    };
    Wa(_.Pp);
    _.Rp = function(a, b, c) {
        _.X.call(this, a, b, c);
        this.o = null
    };
    _.B(_.Rp, _.X);
    _.Rp.prototype.m = _.p(13);
    _.Rp.prototype.l = function() {
        _.X.prototype.l.call(this);
        this.o && this.o()
    };
    _.Sp = function(a, b, c) {
        _.X.call(this, a, b, c);
        this.o = !1
    };
    _.B(_.Sp, _.X);
    _.Sp.prototype.j = _.p(7);
    _.Sp.prototype.m = _.p(12);
    var Up, Vp, Wp;
    _.Tp = function(a) {
        var b = "performance" in window && "now" in performance ? performance.now.bind(performance) : _.gb;
        for (a = b() + a; b() < a;);
        b()
    };
    Up = function(a, b) {
        b >= a.length || (_.Tp(a[b]), window.requestAnimationFrame(function() {
            return Up(a, ++b)
        }))
    };
    Vp = function(a) {
        window.requestAnimationFrame(function() {
            return Up(a, 0)
        })
    };
    Wp = function() {
        if (_.$a(window.requestAnimationFrame)) {
            var a = _.eg(2);
            a.length && (a = a.map(function(b) {
                return _.$e(b, 0)
            }), Vp(a))
        }
    };
    _.Xp = function() {
        _.X.apply(this, arguments)
    };
    _.B(_.Xp, _.X);
    _.Xp.prototype.j = _.p(6);
    _.Yp = function(a, b, c) {
        _.X.call(this, a, b, c);
        this.v = new _.re;
        this.o = null
    };
    _.B(_.Yp, _.X);
    _.Yp.prototype.j = _.p(5);
    _.Zp = function(a, b, c) {
        _.X.call(this, a, b, c);
        this.v = new _.re;
        this.o = null
    };
    _.B(_.Zp, _.X);
    _.Zp.prototype.j = _.p(4);
    _.Zp.prototype.l = function() {
        _.X.prototype.l.call(this);
        this.o && (this.o.disconnect(), this.o = null)
    };
    _.$p = function(a, b, c) {
        _.X.call(this, a, b, c);
        this.o = 1;
        this.v = null;
        this.D = this.B = !1
    };
    _.B(_.$p, _.X);
    _.$p.prototype.m = _.p(11);
    _.$p.prototype.l = function() {
        _.X.prototype.l.call(this);
        _.aq(this)
    };
    _.aq = function(a) {
        5 != a.o && (a.o = 5, a.v && (a.v(), a.v = null), a.slot.F && _.cm(a.slot.F), _.Be(_.W(a.slot, _.q.document)))
    };
    var bq, cq, fq;
    bq = {};
    cq = (bq[1] = {
        zb: "rendering"
    }, bq[2] = {
        zb: "floating",
        sb: [1]
    }, bq[3] = {
        zb: "vignette",
        sb: [1]
    }, bq);
    _.dq = function() {
        this.l = {};
        this.j = cq
    };
    _.eq = function(a, b) {
        a.l[b] || (a.l[b] = new _.ll);
        return a.l[b]
    };
    fq = function(a, b) {
        var c = "_gpt_js_load_" + b + "_",
            d = _.S(340, function(e) {
                if (a.j[b] && _.$a(e)) {
                    var f = a.j[b];
                    f = _.u(void 0 === f.sb ? [] : f.sb, function(g) {
                        return _.eq(a, g).j
                    });
                    ml(f).then(function() {
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
    _.dq.prototype.load = function(a) {
        var b = _.eq(this, a),
            c = this.j[a].zb,
            d = _.bi(174),
            e = _.Ti();
        var f = _.cg(25);
        c = "https://" + d + "/gpt/pubads_impl_" + c + "_" + e + ".js";
        f && (c += "?" + f);
        f = c;
        fq(this, a);
        _.Qe(document, f);
        return b.j
    };
    Wa(_.dq);
    _.dq.prototype.load = Fg(_.dq.prototype.load);
    var gq;
    gq = [{
        xa: _.Xp,
        sa: function() {
            return 0 < (_.cg(16) || _.cg(17) || _.cg(18)) || _.y(169)
        }
    }, {
        xa: _.Yp,
        sa: function() {
            return _.y(20)
        }
    }, {
        xa: _.Zp,
        sa: function() {
            return !0
        }
    }, {
        xa: _.wp,
        sa: function(a, b) {
            return _.Oi(b) && !_.Hn(a)
        }
    }, {
        xa: _.vp,
        sa: function() {
            return !_.y(111)
        }
    }, {
        xa: _.$p,
        sa: function(a) {
            return _.pn(a)
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
        xa: _.Sp,
        sa: function() {
            return _.y(96)
        }
    }, {
        xa: _.Rp,
        sa: function(a, b) {
            return !(null == _.L(b, 50) || _.M(b, 40))
        }
    }];
    _.hq = function() {
        this.j = {};
        this.l = gq
    };
    Wa(_.hq);
    var iq = function() {
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
                        var f = window.decodeURIComponent ? decodeURIComponent(e.replace(Ai, " ")) : unescape(e)
                    } else f = "";
                    b[d] = f
                } catch (g) {}
            }
    };
    var lq;
    _.jq = function(a, b, c) {
        this.j = a;
        this.m = b;
        this.M = c;
        this.R = _.In.C();
        this.v = {};
        this.J = Fg(this.J);
        this.A = _.S(291, this.A);
        this.Z = this.P = this.F = !1;
        this.N = this.O = "";
        this.videoStreamCorrelator = NaN;
        this.D = 0;
        this.I = new Wo(this.G);
        this.ha = 0
    };
    _.kq = function(a) {
        return !!_.M(a, 6) || _.y(143)
    };
    lq = function(a) {
        var b = _.cg(1) || (Hi() ? 8192 : 4096);
        if (_.y(168) || a.length <= b) return a;
        var c = _.y(164) && /&supporting_urls=/.test(a),
            d = a,
            e = b - 8;
        d.length > b && (b = c ? -1 : d.lastIndexOf("&", e), -1 !== b ? d = d.substring(0, b) : (d = d.substring(0, e), d = d.replace(/%\w?$/, ""), c && (d = d.replace(/&[^=]*=?$/, ""))), d += "&trunc=1");
        c = d;
        qh(_.ti.C(), (9).toString(), 9, a.length - c.length + 8);
        return c
    };
    _.nq = function(a, b, c, d, e) {
        hp(a.j, c) && (d && mq(a, [c], e), d || !_.Cn(c, b)) && (a = c.pa, null == a && (a = _.M(e, 11)), a && (b = _.W(c, b)) && _.Qf(b, !1))
    };
    _.jq.prototype.J = function(a, b) {
        var c = this;
        b = void 0 === b ? !1 : b;
        return _.q.IntersectionObserver ? new _.q.IntersectionObserver(function(d, e) {
            return c.A(d, e, b)
        }, {
            rootMargin: a
        }) : new _.Jl(function(d, e) {
            return c.A(d, e, b)
        }, {
            rootMargin: a
        })
    };
    _.jq.prototype.A = function(a, b, c) {
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
    var oq = function(a) {
            a.length && (a = a[0], _.sh(_.ti.C(), "3", a.o))
        },
        rq = function() {
            var a = pq(qq());
            return {
                cmsid: a.N,
                vid: a.O
            }
        };
    _.jq.prototype.$ = _.p(17);
    var sq = function(a, b) {
        if (!b.length) return [];
        var c = _.Qn.C().v,
            d = b[0].A;
        a = _.w(ep(a.j), function(e) {
            return e.A == d && !!e.ha && !_.vb(b, e)
        });
        a = _.u(a, function(e) {
            return e.ha
        });
        return Ab(c, a)
    };
    var Bq = function(a, b) {
        xm.call(this, a);
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
            if (a.J) tq(a, uq(a, d));
            else if (a.v) {
                d = uq(a, d);
                var e = vq();
                if (e.m) {
                    var f = Kn.C().j;
                    wq(e, d, f);
                    for (f = 0; f < d.length; ++f) {
                        var g = new _.Tm(d[f].l(), !0, e.aa());
                        $m(e, "slotRenderEnded", g)
                    }
                } else a.log.error(ik("PubAds", "clear"))
            }
        });
        this.isRoadblockingSupported = T(111, function() {
            return xq(a)
        });
        this.refreshAllSlots = T(60, function() {
            a.J && tq(a, null)
        });
        this.setVideoSession = T(61, function(d, e, f, g) {
            a.N = d;
            a.K = e;
            a.M = f;
            a.A = g
        });
        this.getDisplayAdsCorrelator = T(62, function(d) {
            return yq(a, void 0 === d ? "" : d)
        });
        this.getVideoStreamCorrelator = T(63, function() {
            if (vq().j) {
                var d = pq(qq()).videoStreamCorrelator;
                d = isNaN(d) ? 0 : d
            } else d = 0;
            return d
        });
        this.isSlotAPersistentRoadblock = T(64, function(d) {
            d = Yh(d, b);
            return !!d && zq(a, d)
        });
        this.onImplementationLoaded = T(65, function() {
            a.log.info(nk("GPT CompanionAds"), a);
            a.D = !0
        });
        this.fillSlot = T(66, function(d, e, f, g) {
            d = Yh(d, b);
            var h;
            if (h = !!d) d && Xn(d) && "string" === typeof e && 0 < e.length ? (a.B[d.U.m] = e, null != f && null != g && (a.j[d.U.m] = [f, g]), h = Aq(a, d)) : h = !1;
            return h
        });
        this.slotRenderEnded = T(67, function(d, e, f) {
            d = Yh(d, b);
            var g;
            if (g = d) d = new _.Tm(d.l(), !1, a.aa()), null != e && null != f && _.Um(d, [e, f]), $m(a, "slotRenderEnded", d), g = void 0;
            return g
        });
        this.enableSyncLoading = T(58, function() {
            a.O = !1
        });
        this.setRefreshUnfilledSlots = T(59, function(d) {
            "boolean" === typeof d && (a.J = d)
        })
    };
    _.B(Bq, xm);
    var Cq = function() {
        var a = xj.C();
        this.getAllEvents = T(563, function() {
            return qj ? a.j.slice() : []
        });
        this.getEventsByService = T(564, function(b) {
            return qj ? yj(a, b).slice() : []
        });
        this.getEventsBySlot = T(565, function(b) {
            return qj ? zj(a, b).slice() : []
        });
        this.getEventsByLevel = T(566, function(b) {
            return qj ? Aj(a, b).slice() : []
        })
    };
    _.B(Cq, Xh);
    var Eq = function(a) {
        var b = this;
        this.set = T(83, function(c, d) {
            a.set(c, d);
            return b
        });
        this.get = T(84, function(c) {
            return a.get(c)
        });
        this.setClickUrl = T(79, function(c) {
            Am(a.j, c);
            return b
        });
        this.setTargeting = T(81, function(c, d) {
            Bm(a.j, c, d);
            return b
        });
        this.updateTargetingFromMap = T(85, function(c) {
            Dq(a, c);
            return b
        });
        this.display = T(78, function() {
            var c = Kn.C().j;
            c = Si(c);
            a.display(c)
        });
        this.setTagForChildDirectedTreatment = T(80, function(c) {
            if (0 === c || 1 === c) a.j.hc = c;
            return b
        });
        this.setForceSafeFrame = T(567, function(c) {
            Dm(a.j, c);
            return b
        });
        this.setTagForUnderAgeOfConsent = T(448, function(c) {
            if (0 === c || 1 === c) a.j.Hb = c;
            return b
        })
    };
    _.B(Eq, Xh);
    var Fq = function(a, b) {
            a = _.u(a, function(c) {
                return Yh(c, b)
            });
            return _.w(a, function(c) {
                return !!c
            })
        },
        Gq = function(a) {
            var b = Nn.C(),
                c = [];
            a = _.r(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                d = d.value;
                b.l = d;
                var e = _.yh(9);
                1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
            }
            return c
        },
        Hq = Nb(function() {
            return of("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        Iq = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    Hq();
                    return !0
                },
                set: function() {
                    Hq()
                },
                configurable: !0
            })
        },
        Sq = function(a, b, c) {
            xm.call(this, a);
            var d = this,
                e = xj.C(),
                f = !1;
            this.setTargeting = T(1, function(g, h) {
                var k = null;
                "string" === typeof h ? k = [h] : _.D(h) ? k = h : _.Ya(h) && (k = _.Bb(h));
                var l = "string" === typeof g && !fc(g);
                k = _.y(180) ? k : k && Lb(k);
                var m = !!k && rb(k, _.Ra);
                if (!l || !m) return e.H(V("PubAdsService.setTargeting", [g, h]), a), d;
                h = ub(_.Pd(c, hi, 2), function(t) {
                    return _.L(t, 1) === g
                });
                if ("gpt-beta" === g) {
                    if (a.m) return e.H(al(k.join())), d;
                    if (h) return e.H(bl(k.join())), d;
                    k = Gq(k)
                }
                h ? ji(h, k) : (h = ji(ii(new hi, g), k), Sd(c, 2, h, hi));
                e.info(Nk(g, k.join(), a.aa()), a);
                return d
            });
            this.clearTargeting = T(2, function(g) {
                if (void 0 === g) return si(c, []), e.info(Zk(a.aa()), a), d;
                if ("gpt-beta" === g) return e.H(cl(g)), d;
                var h = _.Pd(c, hi, 2),
                    k = _.tb(h, function(l) {
                        return _.L(l, 1) === g
                    });
                if (0 > k) return e.H(Kk(g, a.aa()), a), d;
                _.xb(h, k);
                si(c, h);
                e.info(Jk(g, a.aa()), a);
                return d
            });
            this.getTargeting = T(38, function(g) {
                if ("string" !== typeof g) return e.H(V("PubAdsService.getTargeting", [g]), a), [];
                var h = ub(_.Pd(c, hi, 2), function(k) {
                    return _.L(k, 1) === g
                });
                return h ? _.L(h, 2).slice() : []
            });
            this.getTargetingKeys = T(39, function() {
                return _.u(_.Pd(c, hi, 2), function(g) {
                    return _.L(g, 1)
                })
            });
            this.setCategoryExclusion = T(3, function(g) {
                if ("string" !== typeof g || fc(g)) return e.H(V("PubAdsService.setCategoryExclusion", [g]), a), d;
                _.vb(_.L(c, 3), g) || Ld(c, 3, g);
                e.info(Lk(g), a);
                return d
            });
            this.clearCategoryExclusions = T(4, function() {
                _.N(c, 3, []);
                e.info(Mk(), a);
                return d
            });
            this.disableInitialLoad = T(5, function() {
                a.m ? e.H(uk("disableInitialLoad", "pubads"), a) : (_.N(c, 4, !0), f || (f = !0, Iq()))
            });
            this.enableSingleRequest = T(6, function() {
                if (a.m && !_.M(c, 6)) return e.H(tk("enableSingleRequest"), a), !1;
                e.info(wk("single request"), a);
                _.N(c, 6, !0);
                return !0
            });
            this.enableAsyncRendering = T(7, function() {
                return !0
            });
            this.enableSyncRendering = T(8, function() { of ("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = T(485, function(g) {
                var h = new _.ki;
                _.N(h, 1, 800);
                _.li(h, 400);
                _.N(h, 3, 3);
                if (_.E(g)) {
                    var k = g.fetchMarginPercent;
                    "number" === typeof k && (0 <= k ? _.N(h, 1, k) : -1 == k && _.N(h, 1, void 0));
                    k = g.renderMarginPercent;
                    "number" === typeof k && (0 <= k ? _.li(h, k) : -1 == k && _.N(h, 2, void 0));
                    g = g.mobileScaling;
                    "number" === typeof g && (0 < g ? _.N(h, 3, g) : -1 == g && _.N(h, 3, 1))
                }
                _.Qd(c, 5, h)
            });
            this.setCentering = T(9, function(g) {
                g = !!g;
                e.info(xk("centering", String(g)), a);
                _.N(c, 15, g)
            });
            this.definePassback = T(10, function(g, h) {
                return (g = Jq(a, g, h)) && g.l()
            });
            this.refresh = T(11, function(g, h) {
                var k = Si(c);
                _.D(g) ? (g = Fq(g, b), Kq(a, k, g, h)) : Kq(a, k, g, h)
            });
            this.enableVideoAds = T(12, function() {
                a.A = !0;
                Lq(a)
            });
            this.setVideoContent = T(13, function(g, h) {
                a.A = !0;
                a.M = g;
                a.K = h;
                Lq(a);
                a.I = !0
            });
            this.collapseEmptyDivs = T(14, function(g) {
                g = void 0 === g ? !1 : g;
                _.M(c, 11) ? e.H(Hk(), a) : a.m ? e.H(tk("collapseEmptyDivs"), a) : (g && _.N(c, 10, !0), _.ya("gpt_ced", function(h) {
                    _.A(h, "sc", g ? "t" : "f");
                    _.A(h, "level", "page");
                    _.z(h)
                }), e.info(Gk(String(!!g)), a), _.N(c, 11, !0));
                return !!_.M(c, 11)
            });
            this.clear = T(15, function(g) {
                _.D(g) && (g = Fq(g, b));
                return Mq(a, c, g)
            });
            this.setLocation = T(16, function(g, h, k) {
                if (void 0 !== h) {
                    if ("number" !== typeof g) return e.H(Fk("Latitude")), d;
                    if ("number" !== typeof h) return e.H(Fk("Longitude")), d;
                    var l = new mi;
                    g = _.N(l, 1, g);
                    h = _.N(g, 2, h);
                    if (void 0 !== k) {
                        if (isNaN(k)) return e.H(Fk("Radius")), d;
                        _.N(h, 3, Math.round(k))
                    }
                    k = qi[0];
                    c.j || (c.j = {});
                    g = h ? _.oa(h) : h;
                    c.j[9] = h;
                    _.Md(c, 9, k, g);
                    return d
                }
                if ("string" !== typeof g) return e.H(Fk("Address")), d;
                _.Md(c, 8, qi[0], g);
                return d
            });
            this.setCookieOptions = T(17, function(g) {
                Nq(a, g);
                return d
            });
            this.setTagForChildDirectedTreatment = T(18, function(g) {
                0 !== g && 1 !== g ? a.log.H(Ok(String(g)), a) : Oq(qq()).v = g;
                return d
            });
            this.clearTagForChildDirectedTreatment = T(19, function() {
                Oq(qq()).v = -1;
                return d
            });
            this.setPublisherProvidedId = T(20, function(g) {
                a.m ? a.log.H(vk("setPublisherProvidedId", g), a) : (a.log.info(xk("PPID", g), a), Oq(qq()).I = g);
                return d
            });
            this.set = T(21, function(g, h) {
                var k = "string" === typeof g && !!g.length;
                if (_.y(213) ? !k || void 0 === vm()[g] || "string" !== typeof h : !k) return e.H(V("PubAdsService.set", [g, h]), a), d;
                (k = ub(_.Pd(c, hi, 14), function(l) {
                    return _.L(l, 1) === g
                })) ? ji(k, [h]): (k = ii(new hi, g), Ld(k, 2, h), Sd(c, 14, k, hi));
                a.set(g, h);
                e.info(dk(g, String(h), a.aa()), a);
                return d
            });
            this.get = T(22, function(g) {
                if (_.y(213) && "string" !== typeof g) return e.H(V("PubAdsService.get", [g]), a), null;
                var h = ub(_.Pd(c, hi, 14), function(k) {
                    return _.L(k, 1) === g
                });
                return (h = h && _.L(h, 2)) ? h[0] : null
            });
            this.getAttributeKeys = T(23, function() {
                return _.u(_.Pd(c, hi, 14), function(g) {
                    return _.L(g, 1)
                })
            });
            this.display = T(24, function(g, h, k, l) {
                return void a.display(g, h, void 0 === k ? "" : k, void 0 === l ? "" : l)
            });
            this.updateCorrelator = T(25, function() { of (lb("update"));
                a.log.H(il(), a);
                a.F = -1;
                Pq(a);
                return d
            });
            this.defineOutOfPagePassback = T(35, function(g) {
                if (g = Jq(a, g, [1, 1])) g.j.va = !0;
                return g && g.l()
            });
            this.setForceSafeFrame = T(36, function(g) {
                if ("boolean" !== typeof g) return e.H(Ek(String(g)), a), d;
                _.N(c, 13, g);
                return d
            });
            this.setSafeFrameConfig = T(37, function(g) {
                if (g && _.E(g)) {
                    if (g = Em(g)) Oq(qq()).A = g
                } else a.log.error(V("PubAdsService.setSafeFrameConfig", [g]), a);
                return d
            });
            this.setRequestNonPersonalizedAds = T(445, function(g) {
                if (0 !== g && 1 !== g) a.log.H(dl(String(g)), a);
                else if (g) {
                    if ((g = ea()) && g.frames && !g.frames.GoogleSetNPA) try {
                        var h = g.document,
                            k = new _.re(h),
                            l = h.body || h.head && h.head.parentElement;
                        if (l) {
                            var m = _.De(k, "IFRAME");
                            m.name = "GoogleSetNPA";
                            m.id = "GoogleSetNPA";
                            m.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                            l.appendChild(m)
                        }
                    } catch (t) {}
                } else(h = ea().document.getElementById("GoogleSetNPA")) && h.parentNode && h.parentNode.removeChild(h);
                return d
            });
            this.setTagForUnderAgeOfConsent = T(447, function(g) {
                g = void 0 === g ? 2 : g;
                if (2 !== g && 0 !== g && 1 !== g) return e.H(el(String(g)), a), d;
                _.N(c, 12, g);
                return d
            });
            this.getCorrelator = T(27, function() {
                return Qq(a)
            });
            this.getTagSessionCorrelator = T(631, function() {
                return pq(qq()).ca
            });
            this.getVideoContent = T(30, function() {
                return a.j ? rq() : null
            });
            this.getVersion = T(568, function() {
                return a.getVersion()
            });
            this.forceExperiment = T(569, function(g) {
                g = parseInt(g, 10);
                0 < g && _.wh.C().l(g)
            });
            this.setCorrelator = T(28, function(g) { of (lb("set"));
                a.log.H(hl(), a);
                Bg(window) || ("number" === typeof g && isFinite(g) && 0 == g % 1 && 0 < g ? (a.F = g, Pq(a)) : a.log.H(Sk(String(g)), a));
                return d
            });
            this.setKidsFriendlyAds = T(642, function(g) {
                0 !== g && 1 !== g ? a.log.H(Tk(String(g)), a) : Oq(qq()).G = g;
                return d
            });
            this.markAsAmp = T(570, function() {
                return void Rq(a)
            });
            this.isSRA = T(571, function() {
                return !!_.M(c, 6)
            });
            this.setImaContent = T(328, function(g, h) {
                a.I ? (a.A = !0, a.M = g, a.K = h, Lq(a), a.I = !0) : (a.A = !0, Lq(a), "string" === typeof g && (a.O = g), "string" === typeof h && (a.N = h))
            });
            this.getImaContent = T(329, function() {
                return a.I ? a.j ? rq() : null : a.j ? {
                    vid: a.O,
                    cmsid: a.N
                } : null
            });
            this.isInitialLoadDisabled = T(572, function() {
                return !!_.M(c, 4)
            });
            this.addSupportingUrl = T(634, function(g) {
                if ("string" !== typeof g || !g.match(_.He)[1]) return e.H(V("PubAdsService.addSupportingUrl", [g]), a), d;
                _.vb(_.L(c, 7), g) || Ld(c, 7, g);
                return d
            })
        };
    _.B(Sq, xm);
    var Tq = function(a, b) {
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
        Uq = function() {
            var a = this,
                b = [],
                c = !1,
                d = xj.C();
            this.addSize = _.S(88, function(e, f) {
                var g;
                (g = !en(e) || "fluid" === e) || ((g = en(f)) || (g = _.D(f) && rb(f, en)), g = !g);
                if (g) return c = !0, d.H(V("SizeMappingBuilder.addSize", [e, f])), a;
                b.push([e, f]);
                return a
            });
            this.build = _.S(89, function() {
                if (c) return d.H(bk()), null;
                Eb(b, Tq);
                return b
            })
        };
    var Vq = 0,
        Wq = function() {
            try {
                Bo();
                Ao();
                var a = _.bi(152);
                a && a.length && _.J(a, function() {
                    _.wh.C().l(a)
                });
                _.yh(13);
                _.yh(3)
            } catch (b) {
                _.cj(408, b, !0)
            }
        },
        Xq = _.S(297, function(a) {
            _.J(a.getElementsByTagName("script"), function(b) {
                var c = b.src;
                !c || -1 == c.indexOf("/tag/js/gpt.js") && -1 == c.indexOf("/tag/js/gpt_mobile.js") || !b.innerHTML || b.googletag_executed || (b.googletag_executed = !0, eval(b.innerHTML))
            })
        }, function(a, b) {
            _.bj(a, b);
            window.console && window.console.error && window.console.error(b)
        }),
        Yq = function() {
            Vq = _.gh();
            Wq();
            try {
                _.y(79) || Vo();
                for (var a = _.cg(26), b = 0; b < a; ++b) _.So(window);
                Wp();
                wa("defineOutOfPageSlot", bo);
                wa("defineSlot", Zn);
                wa("defineUnit", Zn);
                wa("destroySlots", $n);
                wa("getWindowsThatCanCommunicateWithHostpageLibrary", Tn);
                wa("display", co);
                Mm();
                wa("getEventLog", function() {
                    return new Cq
                });
                wa("sizeMapping", _.S(90, function() {
                    return new Uq
                }));
                wa("apiReady", !0);
                _.xa().fifWin && "complete" != document.readyState ? Zh(window, function() {
                    window.setTimeout(function() {
                        ul()
                    }, 0)
                }) : ul();
                Xq(document);
                jj()
            } catch (c) {
                _.cj(106, c)
            }
        };
    _.Zq = new _.Zb(_.Xb, "https://www.googletagservices.com/tag/js/vfci/v/2019061304/vfci.html");
    _.$q = function() {
        this.l = null;
        this.j = Uo(6048E5, _.y(166), window)
    };
    Wa(_.$q);
    var ar = Fg(function(a) {
        return a && a.src ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2
    }, function(a, b) {
        return a + "\x0B" + (b[0] && b[0].src)
    });
    var br = null,
        cr = function(a, b, c, d) {
            try {
                var e;
                if (!(e = !b)) {
                    var f;
                    if (!(f = !_.uo(b, c, !1, void 0 === d ? 100 : d))) {
                        a: {
                            do {
                                var g = _.Re(b, c);
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
        dr = function(a, b, c, d, e) {
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
        er = function(a) {
            var b = Vb(a.v);
            a = _.Bb(a.Z);
            a.length && null == b.excl_cat && (b.excl_cat = a);
            return b
        },
        fr = function(a, b) {
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
        gr = function(a, b) {
            b = void 0 === b ? function() {
                return !0
            } : b;
            a = er(a);
            var c = [];
            _.O(a, function(d, e) {
                d = _.w(d, function(g) {
                    return b(g, e)
                });
                if (d.length) {
                    d = _.u(d, encodeURIComponent);
                    var f = encodeURIComponent(e);
                    c.push(f + "=" + d.join())
                }
            });
            return c
        },
        hr = function(a) {
            var b = !1,
                c = _.u(_.Pd(a, hi, 2), function(d) {
                    var e = _.L(d, 1);
                    b = "excl_cat" === e;
                    d = _.L(d, 2);
                    return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
                });
            a = _.L(a, 3);
            !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
            return c
        },
        ir = function(a, b, c, d, e) {
            this.l = b;
            this.Sa = c;
            this.o = d;
            this.B = (this.v = a) || _.y(139);
            this.j = e;
            this.D = [];
            this.m = "";
            this.I = vm();
            this.A = [];
            this.G = [];
            this.F = Wb(_.eg(7))
        },
        lr = function(a) {
            var b = void 0 === b ? window : b;
            var c = a.j.l;
            if (!_.D(c)) return "";
            if (a.v) 0 == c.length && (c = ep(a.l));
            else {
                if (0 == c.length) return "";
                1 < c.length && (c = [c[0]])
            }
            var d = !!Zl(_.q);
            c = _.w(c, function(e) {
                return d && _.pn(e) ? (xj.C().H(gl(String(e.getAdUnitPath()))), !1) : !0
            });
            if (!c.length) return "";
            30 < c.length && (xj.C().H($k("30", String(c.length), String(c.length - 30))), c = Cb(c, 0, 30));
            jr(a, c, b);
            kr(a);
            return a.m
        },
        mr = function(a, b) {
            try {
                var c = b.top;
                var d = Bh(c.document, c)
            } catch (e) {
                d = new _.pe(-12245933, -12245933)
            }
            Y(a, "scr_x", Math.round(d.x), {
                ga: !0
            });
            Y(a, "scr_y", Math.round(d.y), {
                ga: !0
            })
        },
        nr = function(a) {
            var b = window;
            var c = b.document.domain;
            var d = b.document.cookie,
                e = b.history.length,
                f = b.screen,
                g = b.document.referrer;
            if (gg()) c = _.zg().gaGlobal || {};
            else {
                var h = Math.round((new Date).getTime() / 1E3),
                    k = b.google_analytics_domain_name;
                c = "undefined" == typeof k ? jo("auto", c) : jo(k, c);
                var l = -1 < d.indexOf("__utma=" + c + "."),
                    m = -1 < d.indexOf("__utmb=" + c),
                    t;
                (t = (lg() || _.zg()).gaGlobal) || (t = {}, (lg() || _.zg()).gaGlobal = t);
                var x = !1;
                if (l) g = d.split("__utma=" + c + ".")[1].split(";")[0].split("."), m ? t.sid = g[3] : t.sid || (t.sid = h + ""), t.vid = g[0] + "." + g[1], t.from_cookie = !0;
                else {
                    t.sid || (t.sid = h + "");
                    if (!t.vid) {
                        x = !0;
                        m = Math.round(2147483647 * Math.random());
                        l = [go.appName, go.version, go.language ? go.language : go.browserLanguage, go.platform, go.userAgent, ho() ? 1 : 0].join("");
                        f ? l += f.width + "x" + f.height + f.colorDepth : _.q.java && _.q.java.awt && (f = _.q.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), l += f.screen.width + "x" + f.screen.height);
                        l = l + d + (g || "");
                        for (g = l.length; 0 < e;) l += e-- ^ g++;
                        t.vid = (m ^ io(l) & 2147483647) + "." + h
                    }
                    t.from_cookie = !1
                }
                if (!t.cid) {
                    b: for (h = 999, k && (k = 0 == k.indexOf(".") ? k.substr(1) : k, h = k.split(".").length), k = 999, d = d.split(";"), g = 0; g < d.length; g++)
                        if (f = ko.exec(d[g]) || lo.exec(d[g]) || mo.exec(d[g])) {
                            e = f[1] || 0;
                            if (e == h) {
                                var v = f[2];
                                break b
                            }
                            e < k && (k = e, v = f[2])
                        }x && v && -1 != v.search(/^\d+\.\d+$/) ? t.vid = v : v != t.vid && (t.cid = v)
                }
                t.dh = c;
                t.hid || (t.hid = Math.round(2147483647 * Math.random()));
                c = t
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
        or = function(a) {
            return a === a.top || _.y(156) && Me(a.top) || _.y(157) && hf(window.IntersectionObserver)
        },
        jr = function(a, b, c) {
            c = void 0 === c ? window : c;
            var d = c.document;
            zn(b[0], wg(c));
            Y(a, "gdfp_req", 1, {
                Y: !1
            });
            Y(a, "pvsid", a.j.D);
            Y(a, "correlator", a.j.L);
            Y(a, "output", a.j.W, {
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
            pr(a);
            Y(a, "vrg", _.Ti());
            a.o && 0 !== a.o.j && Y(a, "co", a.o.j, {
                ga: !0
            });
            qr(a);
            1 === a.l.G && Y(a, "kfa", 1);
            rr(a, b[0].A);
            sr(a);
            if (_.y(178)) 1 == a.j.o && tr(a, c, !1);
            else {
                var e = rb(b, function(h) {
                    return 0 < h.B && !Km(h.na())
                });
                tr(a, c, e)
            }
            Y(a, "sc", _.bi(6) ? 1 : 0, {
                ga: !0
            });
            window.postMessage && Y(a, "sfv", _.Pm());
            Y(a, "ecs", a.j.kb);
            a.v || (ur(a, b[0]), vr(a, b[0]));
            a.B ? (wr(a, b, d), xr(a), yr(a, b)) : (zr(a, b[0], d), xr(a), Ar(a, b[0]));
            Br(a, b);
            Cr(a, c);
            null != (a.Sa.j.google_preview || null) && Y(a, "gct", a.Sa.j.google_preview || null);
            if (a.l.o) {
                Y(a, "is_amp", "1");
                Y(a, "amp_v", hg());
                Y(a, "act", ig());
                sg && !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(c.location.href) && Y(a, "ati", 1);
                (e = tg(c)) && Y(a, "apn", e.substr(0, 10));
                try {
                    var f = JSON.parse(c.context.cachedFrameName_);
                    f.attributes && f.attributes.useSameDomainRenderingUntilDeprecated && Y(a, "asd", 1)
                } catch (h) {}
            }
            or(c) && Y(a, "abxe", 1);
            (f = _.dg(10)) && Y(a, "expflags", f);
            Dr(a, b, c);
            f = {};
            f.u_tz = -(new Date).getTimezoneOffset();
            f.u_his = ug();
            f.u_java = !!be.navigator && "unknown" !== typeof be.navigator.javaEnabled && !!be.navigator.javaEnabled && be.navigator.javaEnabled();
            be.screen && (f.u_h = be.screen.height, f.u_w = be.screen.width, f.u_ah = be.screen.availHeight, f.u_aw = be.screen.availWidth, f.u_cd = be.screen.colorDepth);
            be.navigator && be.navigator.plugins && (f.u_nplug = be.navigator.plugins.length);
            be.navigator && be.navigator.mimeTypes && (f.u_nmime = be.navigator.mimeTypes.length);
            Er(a, f);
            Fr(a);
            try {
                var g = Ag()
            } catch (h) {
                g = "0"
            }
            Y(a, "flash", g, {
                Y: !1,
                ga: !0
            });
            Gr(a, b, c);
            _.y(2) || Hr(a, c);
            (_.y(82) || _.y(84) || _.ti.C().j) && Y(a, "rumc", _.Ji, {
                Y: !1
            });
            _.y(83) && Y(a, "rume", 1, {
                Y: !1
            });
            Y(a, "vis", _.Nl(d), {
                Y: !1
            });
            0 === ar(_.bi(172)) || Y(a, "stss", ar(_.bi(172)));
            !a.l.o && Ir(c) && Y(a, "arp", 1, {
                Y: !1
            });
            _.q.navigator && _.q.navigator.deviceMemory && Y(a, "dmc", _.q.navigator.deviceMemory);
            mr(a, c);
            Jr(a, b, c);
            0 < a.j.G.length && Y(a, "psts", a.j.G);
            nr(a);
            _.y(23) && (Y(a, "js", vo(c)), Y(a, "ms", wo(a.j.D.toString(), c)));
            Kr(a, c, b);
            0 != _.Pi(a.v) && 0 != a.j.m.length && (b = Gb(a.j.m, a.j.l) ? -1 : a.j.m.length, Y(a, "optslots", b));
            b = _.L(a.j.j.V, 7);
            _.y(164) && b.length && Y(a, "supporting_urls", _.u(b, function(h) {
                return encodeURIComponent(h)
            }))
        },
        Jr = function(a, b, c) {
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
                        f.ja = _.Re(g, window)
                    }
                    g = f.ja
                }
                if ((g = _.nf(g)) && (1 != g[0] || 1 != g[3])) d.push("-1x-1"),
                e.push("-1x-1");
                else if (a.v || Gn(f)) {
                    var h = (g = _.W(f)) && g.parentElement,
                        k = _.En(f) || new _.qe(0, 0);
                    cr(k, h, c);
                    d.push(k.width + "x" + k.height);
                    f.Ma || (f.Ma = Ni(_.W(f)));
                    f = f.Ma || new _.qe(0, 0);
                    cr(f, g, c, 1); - 1 == k.height && (f.height = -1);
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
        Kr = function(a, b, c) {
            var d = [],
                e = [];
            _.J(c, function(f) {
                var g = new _.xo,
                    h = _.W(f);
                f = 0;
                if (h) {
                    var k = _.vl(!0, b).width;
                    if (null !== b && b != b.top) {
                        var l = _.vl(!1, b).width;
                        (-12245933 == k || -12245933 == l || l < k) && g.set(8)
                    }
                    for (l = 0; h && 100 > l; l++, h = h.parentElement) {
                        var m = _.Re(h, b);
                        if (m) {
                            if (m.overflowY && "visible" != m.overflowY) {
                                g.set(2);
                                var t = Ni(h);
                                t && (f = f ? Math.min(f, t.width) : t.width);
                                if (g.get(9)) break
                            }
                            "sticky" != m.position && "fixed" != m.position || g.set(9);
                            "none" == m.display && g.set(7);
                            "IFRAME" == h.nodeName && (m = parseInt(m.width, 10), m < k && (g.set(8), f = f ? Math.min(m, f) : m))
                        } else g.set(3)
                    }
                } else g.set(1);
                d.push(_.yo(g));
                e.push(f)
            });
            Y(a, "fws", d);
            Y(a, "ohw", e)
        },
        Mr = function(a, b, c) {
            var d = [],
                e = [],
                f = !!_.M(a.j.j.V, 15);
            if (a.v) _.J(b, function(g) {
                g = kp(a.l, g, c, f) || Lr;
                d.push(Math.round(g.x));
                e.push(Math.round(g.y))
            });
            else if (b = (a.l.o ? kg() : null) || kp(a.l, b[0], c, f)) d.push(Math.round(b.x)), e.push(Math.round(b.y));
            a.B ? (Y(a, "adxs", d), Y(a, "adys", e)) : (Y(a, "adx", d[0], {
                ga: !0
            }), Y(a, "ady", e[0], {
                ga: !0
            }))
        },
        Or = function(a, b) {
            var c = a.j.j.V;
            return _.u(b, a.v ? function(d) {
                var e;
                _.y(143) ? e = d.Va || Ei(d, ip(a.l, d, c)) : e = Ei(d);
                return d.Va = e
            } : function(d) {
                return Nr(a, d)
            }).join(",")
        },
        Nr = function(a, b) {
            var c = a.j.j.V;
            a = b.Va || Ei(b, ip(a.l, b, c));
            _.y(159) && (b.Va = a);
            return a
        },
        tr = function(a, b, c) {
            var d = Pe(b),
                e = _.u(kb, function(h) {
                    a: {
                        var k = 0;d || (k |= 256);c && (k |= 67108864);!a.v && _.y(139) && (k |= 268435456);
                        if (k) var l = k;
                        else {
                            var m = _.Tl(d);
                            $l(m, h) && (k |= 64);
                            m.improveCollisionDetection = 1;
                            switch (h) {
                                case 2:
                                case 1:
                                    2 != (0, _.kf)() && (k |= 536870912);
                                    l = 0;
                                    try {
                                        l |= d != d.top ? 512 : 0;
                                        var t = Math.min(d.screen.width || 0, d.screen.height || 0);
                                        l |= t ? 320 > t ? 8192 : 0 : 2048;
                                        var x;
                                        if (x = d.navigator) {
                                            var v = d.navigator.userAgent;
                                            x = /Firefox/.test(v) || /Android 2/.test(v) || /iPhone OS [34]_/.test(v) || /Windows Phone (?:OS )?[67]/.test(v)
                                        }
                                        l |= x ? 1048576 : 0
                                    } catch (Qa) {
                                        l |= 32
                                    }
                                    var H = 0;
                                    try {
                                        H |= _.Vl(d) ? 0 : 8, H |= Yl(d), H |= Zl(d)
                                    } catch (Qa) {
                                        H |= 32
                                    }
                                    if (2 == h) {
                                        v = d.innerWidth;
                                        t = _.Tl(d).improveCollisionDetection;
                                        m = Math.round(d.innerWidth / 320 * 50 + 15);
                                        x = [];
                                        for (var C = 0; 3 > C; C++)
                                            for (var I = 0; 3 > I; I++) x.push({
                                                x: I / 2 * v,
                                                y: C / 2 * m
                                            });
                                        b: {
                                            for (v = 0; v < x.length; v++) {
                                                m = d;
                                                I = x[v];
                                                C = t;
                                                var Q = m.document;
                                                Q.elementFromPoint(I.x, I.y);
                                                var Ga = I.x;
                                                I = I.y;
                                                Q.hasOwnProperty("_goog_efp_called_") || (Q._goog_efp_called_ = Q.elementFromPoint(Ga, I));
                                                if ((Q = I = Q.elementFromPoint(Ga, I)) && !(Q = "fixed" == _.Kf(I, "position"))) {
                                                    if (C = 1 == C) c: {
                                                        m = m.document;
                                                        for (C = I.offsetParent; C && C != m.body; C = C.offsetParent)
                                                            if ("fixed" == _.Kf(C, "position")) {
                                                                C = !0;
                                                                break c
                                                            }
                                                        C = !1
                                                    }
                                                    Q = C
                                                }
                                                if (Q) {
                                                    t = !0;
                                                    break b
                                                }
                                            }
                                            t = !1
                                        }
                                        t && (H |= 16777216)
                                    }
                                    l = k | l | H;
                                    break a;
                                case 8:
                                    t = _.$q.C();
                                    t.j ? (t = t.j, t = !!t && 2 > t.length) : t = !1;
                                    x = 0;
                                    try {
                                        x |= d != d.top ? 512 : 0, x |= d.navigator && /Android 2/.test(d.navigator.userAgent) ? 1048576 : 0
                                    } catch (Qa) {
                                        x |= 32
                                    }
                                    v = 0;
                                    try {
                                        v |= Yl(d);
                                        v |= Zl(d);
                                        v |= _.Vl(d) ? 0 : 8;
                                        if (l = _.y(191)) H = Uo(36E5, !0, d), l = !(H && 1 > H.length);
                                        l && (v |= 134217728)
                                    } catch (Qa) {
                                        v |= 32
                                    }
                                    l = k | x | v | (t ? 0 : 134217728);
                                    break a;
                                default:
                                    l = k | 32
                            }
                        }
                    }
                    k = new Mh;h = _.N(k, 10, h);
                    return _.N(h, 11, l)
                });
            Y(a, "plat", Pr(e) || null);
            var f = Qi();
            if (f && _.y(193)) {
                var g = _.Xe(hb, function(h) {
                    return h == f
                });
                g && (Y(a, "fpla", hb[g]), Y(a, "adtest", "on"));
                b = Ri();
                e = Sh(Rh(Qh(Ph(new Oh, a.v), f), !g), e);
                pa(b, e)
            }
        },
        Gr = function(a, b, c) {
            c = void 0 === c ? window : c;
            var d = c.document;
            b = a.v ? vi(a.l.l) : wi(b[0], a.l.m) || vi(a.l.l);
            var e = Gi(d.URL, a.Sa.j.google_preview || null),
                f = Gi(d.referrer, a.Sa.j.google_preview || null);
            d = !1;
            if (null != b) {
                var g = e;
                Bg(c) || (f = "", d = !0)
            } else b = e;
            a.l.o && (f = (f = gg()) && f.referrer);
            if (_.y(2)) Y(a, "url", b), Y(a, "ref", f);
            else {
                e = new Pg(c);
                var h = e.j[0].depth,
                    k = h && 0 < h;
                if (k && (Y(a, "nhd", h), c.location.ancestorOrigins)) {
                    c = [];
                    h = Math.min(e.j.length, 27);
                    for (var l = 1; l < h; l++) e.j[l] && e.j[l].url && (c[l - 1] = e.j[l].url);
                    c = Qg(e, c.reverse());
                    Y(a, "iag", c);
                    c = e.j;
                    h = [];
                    for (l = c.length - 1; 0 < l; l--) {
                        var m = c[l];
                        m && null != m.url && h.push(Ie(m.url.match(_.He)[3] || null))
                    }
                    c = Lg(h);
                    0 < c && Y(a, "mdo", c)
                }
                Y(a, "url", b);
                null != g && g != b && Y(a, "loc", g);
                Y(a, "ref", f);
                k && (g = e.j[Math.max(e.j.length - 1, 0)].url) && Y(a, "top", d ? Ie(g.match(_.He)[3] || null) : g)
            }
        },
        Hr = function(a, b) {
            b = void 0 === b ? window : b;
            var c = b.document,
                d = c.scripts;
            d && Y(a, "dssz", d.length);
            b = new Pg(b);
            if (d = b.l.document && b.l.document.scripts ? b.l.document.scripts : []) {
                for (var e = [], f = d.length - 1; 0 <= f && 26 > e.length;) d[f].src && e.unshift(d[f].src), f--;
                d = Qg(b, e)
            } else d = 0;
            Y(a, "icsg", d, {
                ga: !0
            });
            if (b = b.l.document && b.l.document.scripts ? b.l.document.scripts : []) {
                d = [];
                for (e = b.length - 1; 0 <= e; e--)(f = b[e]) && null != f.src && d.push(Ie(f.src.match(_.He)[3] || null));
                b = Lg(d)
            } else b = 0;
            Y(a, "mso", b);
            b = Error();
            b.stack && (d = b.stack, e = d.split(/\r\n|\r|\n/).length, "Error" == d.slice(0, 5) && e--, d = e - 13, 0 > d && (d = 0, e = new _.Ui("gpt_negative_stack_trace", Bi(), _.bi(23)), _.z(e, a.l), _.A(e, "stackTrace", b.stack), _.Vi(e)), Y(a, "std", d, {
                ga: !0
            }));
            c.currentScript && c.currentScript.text && Y(a, "csl", c.currentScript.text.length)
        },
        Ar = function(a, b) {
            b = gr(b);
            Y(a, "scp", b, {
                ya: "&"
            })
        },
        Qr = function(a) {
            a = _.u(a, er);
            for (var b = a.shift() || {}; a.length;) b = fr(b, a.shift());
            return b
        },
        yr = function(a, b) {
            var c;
            _.y(49) && 1 < b.length ? c = Rr(a, b) : c = _.u(b, function(d) {
                return gr(d).join("&")
            });
            b = c;
            b.join("|").length == c.length - 1 && (b = null);
            Y(a, "prev_scp", b, {
                ya: "|"
            })
        },
        Rr = function(a, b) {
            var c = [],
                d = Qr(b);
            _.J(b, function(f) {
                f = gr(f, function(g, h) {
                    h = d[h];
                    return !h || -1 == h.indexOf(g)
                });
                c.push(f.join("&"))
            });
            var e = [];
            _.O(d, function(f, g) {
                f = _.u(f, encodeURIComponent);
                g = encodeURIComponent(g);
                e.push(g + "=" + f.join())
            });
            e.length && Y(a, "csp", e, {
                ya: "&"
            });
            return c
        },
        Er = function(a, b) {
            _.O(b, function(c, d) {
                Y(a, d, c, {
                    Y: !1
                })
            })
        },
        qr = function(a) {
            var b = a.l.v; - 1 !== b && Y(a, "tfcd", b, {
                ga: !0
            })
        },
        ur = function(a, b) {
            b = b.hc; - 1 !== b && Y(a, "tfcd", b, {
                ga: !0
            })
        },
        rr = function(a, b) {
            var c = _.bi(221);
            vf = _.y(24);
            b = Gf(c, b);
            b.cb && Y(a, "npa", 1);
            b.Fb && (Y(a, "vcd", b.Fb), b.Qb && Y(a, "gvcd", b.Qb));
            Y(a, "guci", b.Za)
        },
        sr = function(a) {
            var b = _.Kd(a.j.j.V, 12, 2);
            2 !== b && Y(a, "tfua", b, {
                ga: !0
            })
        },
        vr = function(a, b) {
            b = b.Hb;
            2 !== b && Y(a, "tfua", b)
        },
        xr = function(a) {
            a.o && 1 == a.o.j || Y(a, "ppid", a.l.I, {
                ga: !0
            })
        },
        Br = function(a, b) {
            var c = 1 != a.j.v,
                d = b[0].W;
            var e = a.l.m;
            if (null != vi(a.l.l)) b = !0;
            else {
                for (var f = !1, g = 0; g < b.length && !f; g++) f = null != wi(b[g], e);
                b = f
            }
            e = a.j.N;
            f = 3 == a.j.v;
            g = new _.xo;
            g.set(0, c);
            g.set(1, d);
            g.set(2, b);
            g.set(3, e);
            g.set(4, f);
            c = _.yo(g);
            0 < c && Y(a, "eri", c)
        },
        Cr = function(a, b) {
            var c = a.j.j.V,
                d = hr(c);
            Y(a, "cust_params", d, {
                ya: "&"
            });
            a.o && 1 != a.o.j && (Y(a, "cookie", Co(a.o, "__gads="), {
                ga: !0
            }), a.o.A && Y(a, "cookie_enabled", "1", {
                ga: !0
            }));
            a: {
                d = "role:1 producer:12";
                var e = _.Nd(c, mi, 9);c = _.L(c, 8);
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
            a.o && 1 != a.o.j && (d = b.document, (b = (vi(a.l.l) || Ci(b)) != d.URL ? d.domain : "") && Y(a, "cdm", b));
            _.y(6) || (b = new _.xo, _.q.SVGElement && _.q.document.createElementNS && b.set(0), d = gf(), d["allow-top-navigation-by-user-activation"] && b.set(1), d["allow-popups-to-escape-sandbox"] && b.set(2), _.q.crypto && _.q.crypto.subtle && b.set(3), _.q.TextDecoder && _.q.TextEncoder && b.set(4), b = _.yo(b), Y(a, "bc", b))
        },
        Dr = function(a, b, c) {
            var d = c.document;
            0 < navigator.userAgent.indexOf("MSIE ") && Yo(a.l.l, "adsense_encoding", d.charset, !1);
            Y(a, "lmt", (Date.parse(c.document.lastModified) / 1E3).toString());
            var e = _.y(43) ? _.gh() : (new Date).getTime();
            Y(a, "dt", e, {
                Y: !1
            });
            try {
                e = Vq;
                var f = Math.min(ih("domLoading") || Infinity, ih("domInteractive") || Infinity);
                var g = Infinity == f ? Math.max(ih("responseEnd"), ih("navigationStart")) : f;
                0 < g && e >= g && (Y(a, "dlt", g, {
                    Y: !1
                }), Y(a, "idt", e - g, {
                    Y: !1
                }))
            } catch (m) {
                Y(a, "idt", -9, {
                    Y: !1
                }), _.bj(479, m)
            }
            if (null == br) {
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
                f = Cg(c, c.document, 500, 300);br = g && !f
            }
            br || Y(a, "ea", "0", {
                ga: !0
            });
            f = g = _.zg();
            for (e = 0; g && g != g.parent;) g = g.parent, e++, Me(g) && (f = g);
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
            g = Cg(_.zg(), d, c.google_ad_width, c.google_ad_height);
            f = f.Ub;
            e = _.zg();
            e = e.top == e ? 0 : Me(e.top) ? 1 : 2;
            l = 4;
            g || 1 != e ? g || 2 != e ? g && 1 == e ? l = 7 : g && 2 == e && (l = 8) : l = 6 : l = 5;
            f && (l |= 16);
            g = "" + l;
            Dg();
            Y(a, "frm", g || null);
            a.l.o ? g = (g = jg()) && _.E(g.rootBounds) ? new _.qe(g.rootBounds.width, g.rootBounds.height) : null : g = _.vl(!0, c);
            g && (Y(a, "biw", g.width), Y(a, "bih", g.height));
            !Bg(c) && (g = _.vl(!1, c)) && (Y(a, "isw", g.width), Y(a, "ish", g.height));
            a.j.B && Y(a, "oid", a.j.B);
            Mr(a, b, d);
            a.B ? Y(a, "adks", Or(a, b)) : Y(a, "adk", Nr(a, b[0]));
            d = 0;
            !_.Pa(_.q.postMessage) && (d |= 1);
            0 < d && Y(a, "osd", d);
            Sr(a);
            g = d = a.l.l;
            a.B ? g = bp(b, d, a.l.m, a.I) : ((f = a.l.m[_.R(b[0])]) && (_.y(162) ? Zo(g, f) : Zo($o(f), d)), g = ap(g));
            Y(a, "adsenseParameters", g, {
                Y: !1
            });
            Y(a, "ifi", b[0].Fa);
            null !== c && c != c.top ? (b = [c.document.URL], c.name && b.push(c.name), c = _.vl(!1, c, !1), b.push(c.width.toString()), b.push(c.height.toString()), c = _.Ye(b.join(""))) : c = 0;
            0 != c && Y(a, "ifk", c.toString())
        },
        Fr = function(a) {
            var b = _.q.devicePixelRatio;
            (b = "number" === typeof b ? +b.toFixed(3) : null) && Y(a, "u_sd", b, {
                Y: !1
            })
        },
        pr = function(a) {
            Y(a, "eid", a.j.K);
            var b = fh().split(",");
            b && Y(a, "debug_experiment_id", b)
        },
        zr = function(a, b, c) {
            Y(a, "iu", b.getAdUnitPath());
            Y(a, "sz", _.Di(b));
            _.pn(b) && Y(a, "rbv", "1");
            b.da() && Y(a, "fluid", "height");
            var d = b.ca;
            var e = !!_.M(a.j.j.V, 13);
            (d = (null === d ? e : d) ? 1 : 0) && Y(a, "fsf", d);
            Tr(a, b) && Y(a, "fsb", "1");
            d = b.B;
            0 < d && Y(a, "rc", d);
            Ur(a, b);
            b.getOutOfPage() && Y(a, "ists", "1");
            d = Km(b.na());
            Y(a, "fa", d);
            _.y(98) && !d && pp(b, c) && Y(a, "pfx", "1");
            b.B && Y(a, "prevtos", Math.min(xn(b), 3600))
        },
        wr = function(a, b, c) {
            _.J(b, function(h) {
                Vr(a, h.getAdUnitPath())
            });
            Y(a, "iu_parts", a.A);
            Y(a, "enc_prev_ius", a.G);
            Y(a, "prev_iu_szs", lp(b));
            if (_.qb(b, function(h) {
                    return h.da()
                })) {
                var d = _.u(b, function(h) {
                    return h.da() ? "height" : "0"
                });
                Y(a, "fluid", d)
            }
            var e = a.j.j.V;
            Y(a, "fsfs", dr(b, function(h) {
                h = h.ca;
                var k = !!_.M(e, 13);
                return (null === h ? k : h) ? 1 : 0
            }, 0));
            Y(a, "fsbs", dr(b, function(h) {
                return Tr(a, h) ? 1 : 0
            }, 0));
            Y(a, "rcs", dr(b, function(h) {
                return h.B
            }, 0));
            Ur(a, b[0]);
            (d = Wr(b)) && Y(a, "ists", d);
            Y(a, "fas", dr(b, function(h) {
                return Km(h.na())
            }));
            (d = Xr(b, function(h) {
                return _.pn(h)
            })) && Y(a, "rbvs", d);
            _.y(98) && (d = Xr(b, function(h) {
                return !Km(h.na()) && pp(h, c)
            })) && Y(a, "pfxs", d);
            d = dr(b, function(h) {
                h = h.B ? xn(h) : -1;
                return Math.min(h, 3600)
            }, 0, function(h) {
                return 0 <= h
            }, "_");
            Y(a, "prevtoss", d);
            var f = {};
            _.J(b, function(h) {
                (h = h.O) && (f[h] = (f[h] || 0) + 1)
            });
            if (!_.Ve(f)) {
                b = new _.Ui("gpt_sra_setclickurl");
                var g = [];
                _.O(f, function(h, k) {
                    g.push(k.length + ":" + h)
                });
                _.A(b, "lenfreqs", g.join());
                _.z(b);
                _.Vi(b, _.bi(58))
            }
        },
        Ur = function(a, b) {
            b.O && !a.v && Y(a, "click", b.O)
        },
        Tr = function(a, b) {
            b = b.Ha;
            a = a.l.A;
            return null == b.sandbox ? a.sandbox : b.sandbox
        },
        Yr = function(a, b) {
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
        Zr = function(a, b) {
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
        Vr = function(a, b) {
            var c = "";
            "" != b && (b = _.u(b.split("/"), function(d) {
                return d.replace(/,/g, ":")
            }), Yr(a, b), c = Zr(a, b));
            a.G.push(c)
        },
        Wr = function(a) {
            return Xr(a, function(b) {
                return b.getOutOfPage()
            })
        },
        Xr = function(a, b) {
            var c = new _.xo;
            _.J(a, function(d, e) {
                c.set(a.length - e - 1, b(d))
            });
            return _.yo(c)
        },
        Sr = function(a) {
            if (a.B) {
                var b = _.u(a.j.l, function(c) {
                    return _.sp(a.j, c)
                });
                Y(a, "ucis", b, {
                    ya: "|"
                })
            } else 0 < a.j.l.length && Y(a, "uci", _.sp(a.j, a.j.l[0]))
        },
        Y = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            a.F[b] || a.D.push({
                bb: b,
                value: c,
                options: d
            })
        },
        kr = function(a) {
            var b = function(k, l) {
                k = k.toString();
                return l ? encodeURIComponent(k) : k
            };
            a.m = "" + _.bi(247) + "/gampad/ads?";
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
                if ("adsenseParameters" === f) $r(a, d);
                else {
                    d = "";
                    if (_.E(g)) _.D(g) && g.length && (d = _.u(g, function(k) {
                        return function(l) {
                            return b(l, k.Ba)
                        }
                    }(c)).join(b(e, c.Ba)));
                    else {
                        if (null == g || !h && 0 == g) continue;
                        d = b(g, c.Ba)
                    }
                    if (d)
                        if (e = f + "=" + d, d = (_.cg(1) || (Hi() ? 8192 : 4096)) - 8, _.y(168) && a.m.length + e.length >= d) {
                            if ("supporting_urls" == f)
                                for (e = 0; e < g.length; e++) {
                                    h = (e ? b(",", c.Ba) : "&" + f + "=") + b(g[e], c.Ba);
                                    if (a.m.length + h.length > d) break;
                                    a.m += h
                                }
                            _.ya("gpt_url_trunc", function(k) {
                                return function(l) {
                                    _.A(l, "lps", _.u(a.D.slice(k.Oa), function(m) {
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
        $r = function(a, b) {
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
                h ? (g = _.u(h, function(k) {
                    return k ? encodeURIComponent(encodeURIComponent(k)) : ""
                }).join(","), d.push(e + "," + encodeURIComponent(f) + "," + g)) : g && "url" != e && c.push(e + "=" + f)
            }
            c.length && (a.m += "&" + c.join("&"));
            d.length && (a.m += "&sps=" + d.join("|"))
        },
        Ir = function(a) {
            a = Me(a.top) ? a.top : a;
            return _.E(a.AMP) && !!_.Xe(a.AMP, function(b, c) {
                return !/^inabox/i.test(c)
            })
        },
        Pr = function(a) {
            var b = [];
            a = _.r(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                c = c.value;
                var d = _.L(c, 11);
                b.push(_.L(c, 10) + ":" + d)
            }
            return b.join()
        },
        Lr = new _.pe(-9, -9);
    var as = null,
        cs = function() {
            var a = this;
            this.j = {};
            this.l = _.ti.C();
            _.P(_.q, "DOMContentLoaded", _.S(334, function() {
                return bs(a)
            }))
        },
        ds = function() {
            return as ? as : window.performance && hf(window.performance.now) ? as = new cs : null
        },
        fs = function(a, b) {
            var c = b.U.j;
            es(a, b) ? delete a.j[c] : a.j[c] = b
        },
        gs = function(a, b) {
            var c = b.X;
            null != c ? tm(c, b.o) : fs(a, b)
        },
        es = function(a, b) {
            var c = _.W(b, _.q.document);
            if (c && "DIV" == c.nodeName) {
                var d = _.y(87),
                    e = _.y(64);
                a = new rm({
                    pb: _.q,
                    Zc: a.l,
                    Xa: c,
                    oa: function(f) {
                        _.bj(336, f, 1)
                    },
                    Uc: d,
                    Tc: e
                });
                if (a.o) return tm(a, b.o), b.X = a, !0
            }
            return !1
        },
        bs = function(a) {
            _.Ve(a.j) || (a.j = Qb(a.j, function(b) {
                return !es(a, b)
            }))
        };
    var hs = function() {
            this.j = !1;
            this.l = {}
        },
        is = function(a, b) {
            var c = Ho(document, b, "prefetch", "");
            c && _.P(c, "load", function() {
                a.l[b] = 3;
                c && _.Be(c)
            })
        };
    Wa(hs);
    _.js = "3rd party ad content";
    wa("setAdIframeTitle", function(a) {
        _.js = a
    });
    _.ms = function(a, b, c) {
        _.jq.call(this, a, b, c);
        var d = this;
        this.G = ks();
        this.ca = _.sf(_.q);
        this.W = !1;
        this.l = {};
        this.la = this.ka = NaN;
        this.B = _.y(123);
        this.da = !1;
        this.ma = 0;
        this.o = {};
        this.K = _.S(513, this.K);
        Qp(function(e) {
            var f = Kn.C().j;
            f = Si(f);
            ls(d, [e], {}, f)
        })
    };
    _.B(_.ms, _.jq);
    var ns = function(a, b) {
            b = void 0 === b ? 0 : b;
            var c = void 0 === c ? window : c;
            !b || Bg(c) ? b = ks() : a.W = !0;
            a.G = Math.floor(b)
        },
        os = function(a, b, c, d, e, f) {
            f = void 0 === f ? 0 : f;
            var g = new me;
            g = g.j.getUTCFullYear() + Oc(g.j.getUTCMonth() + 1) + Oc(g.j.getUTCDate());
            g = new rp(g, e);
            g.W = a.L();
            e = _.kq(e.V) || _.y(139) ? "fifs" : "fif";
            g.A = e;
            g.D = a.ca;
            g.v = c;
            g.J = d;
            g.l = b;
            g.M = f;
            a = _.r(b);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, g.Z[_.R(b)] = b.o;
            return g
        };
    _.ms.prototype.L = function() {
        return "json_html"
    };
    var ks = function() {
            return Math.floor(Math.random() * Math.pow(2, 52))
        },
        ps = function(a, b, c, d, e) {
            d ? a.K(c, "", e) : (un(c[0]), c[0].I = b)
        };
    _.ms.prototype.K = function(a, b, c) {
        var d = {};
        a = _.r(a);
        for (var e = a.next(); !e.done; d = {
                gb: d.gb
            }, e = a.next()) {
            e = e.value;
            var f = os(this, [e], 1, b, c);
            qs(this, f);
            f.A = "fif";
            d.gb = new ir(!1, this.j, this.m, this.M, f);
            _.y(159) ? vn(e, function(g) {
                return function() {
                    return lq(lr(g.gb))
                }
            }(d)) : (f = lq(lr(d.gb)), e.I = f);
            un(e)
        }
    };
    var qs = function(a, b) {
            b.L = a.G + "";
            b.K = _.wh.C().j();
            b.N = a.W;
            b.P = a.Z;
            b.R = a.N;
            b.T = a.O;
            b.B = a.D;
            Oo();
            b.I = Lo[1];
            Oo();
            b.O = Lo[4];
            Oo();
            b.X = Lo[6];
            b.persistentRoadblocksOnly = a.da;
            b.videoPodNumber = a.ka;
            b.videoPodPosition = a.la;
            b.videoStreamCorrelator = a.videoStreamCorrelator;
            b.G = sq(a, b.l)
        },
        ts = function(a, b) {
            rs(a, b) || ss(a, b)
        },
        rs = function(a, b) {
            var c = b.l,
                d = b.j.V,
                e = _.Nd(d, _.ki, 5) || new _.ki;
            _.J(c, function(l) {
                l.Ga = e
            });
            var f = up(e);
            if (null == f) return !1;
            var g = Math.max(f / 100, 0);
            if (!rb(c, function(l) {
                    return _.Ch(_.W(l)) && !_.np(a.j, window, g, l, !!_.M(d, 15))
                })) return !1;
            var h = a.J(f + "%"),
                k = function() {
                    return ss(a, b)
                };
            _.J(c, function(l) {
                var m = l.U.j,
                    t = _.W(l);
                t && (a.v[m] = k, h.observe(t), l.ba = h)
            });
            return !0
        },
        ss = function(a, b) {
            var c = b.l;
            null != c[0].ba && _.J(c, function(d) {
                us(a, _.W(d), d.U.j, d)
            });
            vs(a, b)
        },
        vs = function(a, b) {
            var c = ++a.ha;
            b.o = c;
            a.l[c] = b.l;
            _.yh(2);
            qs(a, b);
            c = _.kq(b.j.V);
            c = new ir(c, a.j, a.m, a.M, b);
            c = lr(c);
            ws(a, c, b);
            b.$ = !0;
            a = b.l;
            _.dq.C().load(1);
            c = hs.C();
            var d = window;
            c.j || (c.j = !0, b = _.am(d, _.Pm(), _.Qm(), !0), c.l[b] = 1, Go() ? is(c, b) : _.xa().fifWin || (d = d.document, c = _.De(new _.re(d), "IFRAME"), c.src = b, c.style.visibility = "hidden", c.style.display = "none", b = d.getElementsByTagName("script"), 0 < b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(c, b.nextSibling))));
            xs(a)
        },
        xs = function(a) {
            var b = _.gh();
            _.J(a, function(c) {
                c.Gb = b
            })
        },
        ls = function(a, b, c, d) {
            b = _.w(b, function(g) {
                return !g.za
            });
            if (b.length) {
                for (var e = _.r(b), f = e.next(); !f.done; f = e.next()) f.value.za = !0;
                ys(a, b, c, d)
            }
        },
        ys = function(a, b, c, d) {
            var e = _.gh();
            b = Hb(b, function(h) {
                h = h.Gb;
                return null == h ? 0 : Math.max(0, Math.round((1E3 - (e - h)) / 1E3))
            });
            var f = b[0] || [],
                g = xj.C();
            _.O(b, function(h, k) {
                var l = parseInt(k, 10);
                !l || 0 > l || (_.J(h, function(m) {
                    g.H(fl(String(l), m.getAdUnitPath()))
                }), _.q.setTimeout(_.S(375, function() {
                    zs(347, function() {
                        return As(a, h, c, d)
                    })
                }), 1E3 * l))
            });
            f.length && zs(347, function() {
                return As(a, f, c, d)
            })
        },
        As = function(a, b, c, d) {
            _.J(b, function(k) {
                k.za = !1
            });
            b = Hb(b, function(k) {
                return 0 != _.on(k).length
            });
            if (b[!1])
                for (var e = _.r(b[!1]), f = e.next(); !f.done; f = e.next()) _.nq(a, document, f.value, !0, d.V);
            if (b = b[!0]) {
                var g = c.isVideoRefresh ? 3 : 2;
                _.J(b, function(k) {
                    _.mn(k)
                });
                void 0 !== c.videoStreamCorrelator ? a.videoStreamCorrelator = c.videoStreamCorrelator : 0 != c.changeCorrelator && ns(a);
                a.ka = c.videoPodNumber || NaN;
                a.la = c.videoPodPosition || NaN;
                a.da = c.persistentRoadblocksOnly || !1;
                a.B = c.clearUnfilledSlots || _.y(123);
                gp(a.j, b);
                if (!a.F) {
                    var h = (0, _.F)(function(k) {
                        var l = Bs(this);
                        return os(this, k, g, l, d)
                    }, a);
                    _.kq(d.V) ? (c = Hb(b, function(k) {
                        return k.A
                    }), _.O(c, function(k) {
                        Cs(this, h(k))
                    }, a)) : _.J(b, function(k) {
                        Cs(a, h([k]))
                    })
                }
            }
        },
        mq = function(a, b, c) {
            var d = _.hq.C();
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
                h ? (_.xl(h), delete a.o[g]) : f && (f.innerHTML = "", f.removeAttribute("data-google-query-id"));
                Ds(e, c) && f && _.Qf(f, !1);
                us(a, f, e.U.j, e);
                wn(e)
            }
            return !0
        };
    _.ms.prototype.ba = _.p(20);
    var us = function(a, b, c, d) {
        if (b && a.v[c]) {
            var e = d.ba;
            e && (d.ba = null, e.unobserve(b));
            delete a.v[c]
        }
    };
    _.ms.prototype.ja = function(a, b, c) {
        _.Cn(a, c) || (Es(c, a, b), _.W(a, c) ? _.mb.push({
            Na: this,
            Da: 3,
            Ca: [a, b, c]
        }) : _.y(42) || Fs(a, b.V))
    };
    _.ms.prototype.ea = _.p(21);
    var Cs = function(a, b, c) {
            c = void 0 === c ? document : c;
            _.J(b.l, function(g) {
                g.ra = !0
            });
            var d = _.bi(221);
            vf = _.y(24);
            var e = b.l[0] && b.l[0].lc ? b.l[0].A : "",
                f = _.q.setTimeout(function() {
                    var g = new _.Ui("gpt_cmp_never_called");
                    _.z(g, a.j);
                    _.A(g, "consent", JSON.stringify(Gf(d, e)));
                    _.Vi(g)
                }, 1E4);
            Hf(d, e, _.S(451, function() {
                _.q.clearTimeout(f);
                Gs(a, b, c)
            }))
        },
        Gs = function(a, b, c) {
            c = void 0 === c ? document : c;
            for (var d = _.y(42), e = b.j.V, f = _.r(b.l), g = f.next(); !g.done; g = f.next()) g = g.value, d || Fs(g, e), Es(c, g, b.j);
            ts(a, b);
            d && _.J(b.l, function(h) {
                Fs(h, e)
            })
        },
        Js = function(a, b, c) {
            var d = void 0 === d ? document : d;
            zs(348, function() {
                _.kq(b.V) ? Hs(a, b, c, d) : _.on(c).length ? Is(a, b, [
                    [c]
                ], d) : _.nq(a, document, c, !0, b.V);
                Fs(c, b.V)
            })
        },
        Hs = function(a, b, c, d) {
            a.ja(c, b, d);
            var e = _.S(632, function() {
                var f = Ks(a, b, c.A, d);
                Is(a, b, f, d)
            });
            _.y(143) && 1 < a.ha ? setTimeout(e, 0) : _.y(99) ? ol().then(e) : e()
        },
        Ks = function(a, b, c, d) {
            var e = fp(a.j),
                f = b.V;
            _.y(143) && !_.M(f, 6) && (e = _.w(e, function(g) {
                return g.qa && !!_.W(g, d)
            }));
            return (e = Ls(a, f, e)) ? Ms(a, e, c, b) : null
        },
        Ls = function(a, b, c) {
            c = Hb(c, function(d) {
                return 0 != _.on(d).length
            });
            c[!1] && Ns(a, b, c[!1]);
            return c[!0] || null
        },
        Ms = function(a, b, c, d) {
            var e = [];
            b = Hb(b, function(f) {
                return f.A
            });
            _.O(b, function(f, g) {
                f = _.y(65) ? Os(a, f, d) : f;
                g == c ? e.unshift(f) : e.push(f)
            });
            return e
        },
        Is = function(a, b, c, d) {
            var e = b.V,
                f = _.M(e, 4);
            a.F || f || !c || _.J(c, function(g) {
                if (_.y(129)) {
                    var h = _.w(g, function(x) {
                        return !x.ob
                    });
                    if (!h.length) return;
                    Ps(h, !0)
                } else h = g;
                var k = h.length,
                    l = h,
                    m = _.Pi(_.kq(e));
                g = 0 == m ? [] : op(a.j, h, e);
                var t = g.length;
                2 == m && t && t < k && (l = Cb(h, 0, k - t));
                h = Bs(a);
                l = os(a, l, 1, h, b);
                l.m = g;
                Cs(a, l, d)
            })
        },
        Bs = function(a) {
            return "googletag.impl.pubads.callbackProxy" + ++a.ma
        },
        Ns = function(a, b, c) {
            c = _.r(c);
            for (var d = c.next(); !d.done; d = c.next()) d = d.value, 0 == _.on(d).length && _.nq(a, document, d, !0, b)
        },
        Ds = function(a, b) {
            if (_.y(177)) return !1;
            a = a.$;
            null == a && (a = _.M(b, 10));
            return !!a
        },
        Fs = function(a, b) {
            Ds(a, b) && !a.G && (a = _.W(a)) && _.Qf(a, !1)
        },
        Es = function(a, b, c) {
            if (!_.Dn(b, a)) {
                var d = _.on(b);
                if (0 == d.length) var e = null;
                else if (e = d[0], 1 < d.length) {
                    b: if ((d = _.W(b, a)) && d.style.height && d.style.width) {
                        d = [d.style.width, d.style.height];
                        for (var f = 0; f < d.length; ++f)
                            if (2 < d[f].length && "px" == d[f].substring(d[f].length - 2)) d[f] = parseInt(d[f], 10);
                            else {
                                d = null;
                                break b
                            }
                    } else d = null;e = d || e
                }
                if (d = _.W(b, a)) c = c.V, a = _.tp(a, d, _.Bn(b), !!_.M(c, 15), e), b.J && (b.P = a)
            }
        },
        Qs = function(a, b, c) {
            b = os(a, b, c.v, Bs(a), c.j, c.o);
            Cs(a, b)
        },
        Rs = function(a, b) {
            var c = b.l,
                d = b.m,
                e = b.o,
                f = b.M,
                g = _.Pi(_.kq(b.j.V));
            f && 0 != g ? (_.J(null == f ? null : a.l[f], function(h) {
                h.R = 0
            }), delete a.l[f], delete a.l[e]) : (f = [], 1 == g ? f = _.w(c, function(h) {
                return 1 == h.R
            }) : 2 != g || Gb(c, d) || (f = d), f.length && 0 != g ? Qs(a, f, b) : delete a.l[e])
        },
        Os = function(a, b, c) {
            var d = c.V,
                e = [];
            _.J(b, function(f) {
                if (!f.getOutOfPage()) {
                    var g = kp(a.j, f, document, !!_.M(d, 15)) || {};
                    e.push({
                        Jb: void 0 === g.y ? Infinity : g.y,
                        slot: f
                    })
                }
            });
            Eb(e, function(f, g) {
                return Db(f.Jb, g.Jb)
            });
            return _.u(b, function(f) {
                return f.getOutOfPage() ? f : e.shift().slot
            })
        },
        Ps = function(a, b) {
            a = _.r(a);
            for (var c = a.next(); !c.done; c = a.next()) c.value.ob = b
        },
        Ss = function() {
            if (_.y(200)) return !1;
            if (Jc()) {
                if (_.y(109) && 0 <= _.pc(_.Lc(), 12)) return !1;
                if (0 <= _.pc(_.Lc(), 11)) return !0
            } else if (_.Fc() && _.y(112) && 0 <= _.pc(_.Lc(), 65)) return !0;
            return !1
        },
        zs = function(a, b) {
            Ss() ? Ro(_.S(a, b)) : b()
        };
    var Ts;
    Ts = function(a, b, c, d, e) {
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
    _.Us = function(a, b) {
        a.j = 4;
        try {
            a.F(b)
        } catch (c) {}
    };
    var Xs, Ws;
    _.Vs = function(a, b) {
        this.A = a;
        this.j = b;
        this.o = !1;
        this.v = 0;
        this.m = !1
    };
    Xs = function(a) {
        a.o || (a.o = !0, Ws(a))
    };
    Ws = function(a) {
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
            return _.Us(a.j, c)
        };
        b.send()
    };
    _.Vs.prototype.l = _.p(22);
    _.Ys = function(a, b, c) {
        _.ms.call(this, a, b, c);
        this.ia = {}
    };
    _.B(_.Ys, _.ms);
    _.Ys.prototype.L = function() {
        return "ldjh"
    };
    var ws = function(a, b, c) {
        var d = void 0 === d ? _.q.document : d;
        var e = c.l,
            f = c.j,
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
                _.cj(289, Error(l && l.message || "strm_err"), !0)
            });
        b = zi(lq(b));
        g = new Ts(e, g, h, k, function() {
            return void Rs(a, c)
        });
        oq(e);
        Xs(new _.Vs(b, g));
        ps(a, b, e, _.kq(f.V), c.j);
        _.y(129) && Ps(e, !1);
        _.dq.C().load(1)
    };
    _.Ys.prototype.X = _.p(23);
    _.Ys.prototype.T = _.p(24);
    var Zs = function() {
            this.m = this.j = this.l = null
        },
        Oq = function(a) {
            null == a.l && (a.l = new cp);
            return a.l
        },
        pq = function(a) {
            if (a.j) return a.j;
            var b = Oq(a);
            null == a.m && (a.m = new iq);
            a.j = new _.Ys(b, a.m, $s());
            b = a.j;
            b.F = null != (b.m.j.google_nofetch || null) || !!window.google_noFetch || b.F;
            b.P = null != (b.m.j.google_norender || null) || b.P;
            b.D = b.I.getOseId();
            return a.j
        },
        at = null,
        $s = function() {
            at || (at = new Eo);
            return at
        },
        bt = null,
        qq = function() {
            bt || (bt = new Zs);
            return bt
        },
        ct = null;
    var dt = function(a, b, c) {
        this.o = c;
        this.j = a;
        this.j.W = !0;
        this.j.addService(b);
        this.m = b
    };
    _.B(dt, Dj);
    dt.prototype.wa = function() {
        return new Eq(this, this.o)
    };
    var Dq = function(a, b) {
        var c = Vb(a.j.v);
        if (b && "string" !== typeof b && "number" != typeof b) try {
            _.O(b, function(d, e) {
                Bm(this.j, e, d)
            }, a)
        } catch (d) {
            a.j.v = Vb(c), xj.C().error(V("PassbackSlot.updateTargetingFromMap", [b]))
        } else xj.C().error(V("PassbackSlot.updateTargetingFromMap", [b]))
    };
    dt.prototype.display = function(a) {
        document.write('<div id="' + _.Mc(this.j.U.j) + '"></div>');
        _.W(this.j) ? et(this.m, a, this.j) : _.ya("gpt_pb_write", function(b) {
            _.z(b)
        })
    };
    dt.prototype.set = function(a, b) {
        if ("string" !== typeof a || !b || "page_url" != a) return this;
        a = this.j;
        a.W && (a.Ia = b);
        return this
    };
    dt.prototype.get = function(a) {
        return "string" !== typeof a || "page_url" != a ? null : this.j.Ia
    };
    var ft = function(a, b, c) {
            c = void 0 === c ? {
                changeCorrelator: !0
            } : c;
            this.j = a;
            this.l = b;
            this.options = c
        },
        gt = function() {
            Zm.call(this);
            this.j = !1;
            this.J = {};
            this.R = !1;
            this.B = [];
            this.T = {};
            this.I = this.A = !1;
            this.F = -1;
            this.N = this.O = this.K = this.M = "";
            this.P = !1;
            this.v = _.y(87) || _.y(64) ? ds() : null;
            this.D = {}
        };
    _.B(gt, Zm);
    _.n = gt.prototype;
    _.n.wa = function() {
        var a = Kn.C().j;
        return new Sq(this, nn, a)
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
        wm(this);
        if (a = Yn(a, b, e).slot) f && !e && (f.id = a.U.j), a.addService(this), Am(a, d), co(f || a.U.j)
    };
    _.n.wb = function() {
        this.j = !0;
        var a = Kn.C().j;
        window.google_noFetch = !1;
        if (_.M(a, 6)) {
            ht(this);
            a = _.r(this.o);
            for (var b = a.next(); !b.done; b = a.next()) it(this, b.value)
        }
        Lq(this);
        Pq(this);
        this.P && Rq(this);
        Ba()
    };
    _.n.aa = function() {
        return "publisher_ads"
    };
    _.n.Eb = function(a) {
        0 != a.na() && (a.ic = !1);
        a.W || it(this, a);
        this.v && fs(this.v, a);
        Zm.prototype.Eb.call(this, a)
    };
    _.n.yb = function(a, b) {
        wm(this);
        ht(this);
        it(this, b);
        this.log.info(pk());
        var c = qq(),
            d = pq(c);
        c = Oq(c);
        var e = null != b.j && !_.kq(a.V);
        c.j[_.R(b)] && !e && (_.y(130) || _.M(a.V, 6) || !(c = _.W(b)) || (e = d.j, _.y(130) || (e.D[_.R(b)] = c)), Js(d, a, b));
        this.T[b.getAdUnitPath()] = !0;
        if (this.j)
            for (a = 0; a < this.B.length; ++a) b = this.B[a], this.T[b.j[0].getAdUnitPath()] && (jt(this, b.j, b.l, b.options), _.xb(this.B, a--));
        else this.log.error(ok(), this)
    };
    var it = function(a, b) {
            (a.j || _.y(141)) && dp(Oq(qq()), b);
            if (a.j) {
                var c = Oq(qq()),
                    d = Ib(b.ea);
                d = _.r(d);
                for (var e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    var f;
                    if (f = !!c.j[_.R(b)]) {
                        f = String(b.get(e));
                        var g = _.R(b);
                        null == c.m[g] && (c.m[g] = new Xo(c.J));
                        f = Yo(c.m[g], e, f)
                    }
                    f || a.log.H(rk(String(e), String(b.get(e)), b.getAdUnitPath()), a, b)
                }
            }
        },
        ht = function(a) {
            if ((_.y(148) || !a.R) && a.j) {
                a.R = !0;
                var b = Ib(a.J),
                    c = Oq(qq());
                b = _.r(b);
                for (var d = b.next(); !d.done; d = b.next()) {
                    d = d.value;
                    var e = String(a.get(d));
                    Yo(c.l, d, e) || a.log.H(qk(String(d), String(a.get(d))), a)
                }
            }
        },
        Nq = function(a, b) {
            if (0 !== b && 1 !== b) {
                a.log.H(sk(String(b)), a);
                if (!Ki(b)) return;
                _.ya("gpt_setcookieoptions_invalid", function(c) {
                    _.A(c, "options", b);
                    _.z(c)
                })
            }
            Fo($s(), b)
        },
        Jq = function(a, b, c) {
            if ("string" !== typeof b || 0 >= b.length || !c) return a.log.error(V("PubAdsService.definePassback", [b, c])), null;
            c = Yn(b, c, void 0, void 0, !0);
            b = c.slot;
            c = c.Sa;
            return b && c ? new dt(b, a, c) : null
        },
        et = function(a, b, c) {
            wm(a);
            _.y(149) ? a = qq() : (ct || (ct = new Zs), a = ct);
            dp(Oq(a), c);
            Js(pq(a), b, c)
        },
        Kq = function(a, b, c, d) {
            if (c && !_.D(c) || d && (!_.E(d) || d.changeCorrelator && "boolean" !== typeof d.changeCorrelator)) a.log.H(V("PubAdsService.refresh", _.w([c, d], _.Pa)), a);
            else {
                var e = null;
                if (c && (e = kt(a, c), !e.length)) {
                    a.log.H(V("PubAdsService.refresh", _.w([c, d], _.Pa)), a);
                    return
                }
                jt(a, e, b, d)
            }
        },
        jt = function(a, b, c, d) {
            if (_.y(104)) wm(a), _.J(b || [], function(f) {
                f.addService(a)
            });
            else if (!a.j) {
                _.M(c.V, 6) ? (a.log.info(Bk(), a), b ? wb(a.B, new ft(b, c, d)) : wb(a.B, new ft(a.o, c, d))) : a.log.H(zk(), a);
                return
            }
            a.log.info(Ck(), a);
            var e = {};
            void 0 !== d && void 0 !== d.changeCorrelator && (e.changeCorrelator = d.changeCorrelator);
            (b = lt(a, b, e, c)) && a.v && _.J(b, function(f) {
                return gs(a.v, f)
            })
        },
        lt = function(a, b, c, d) {
            var e = qq(),
                f = pq(e),
                g = Oq(e);
            b = null != b ? _.w(b, function(l) {
                return !!g.j[_.R(l)]
            }) : ep(g);
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
                return hp(g, l)
            });
            if (!e.length) return null;
            ls(f, e, c, d);
            return b
        },
        mt = function(a, b, c, d) {
            if (b && !_.D(b) || c.videoStreamCorrelator && "number" !== typeof c.videoStreamCorrelator || c.videoPodNumber && "number" !== typeof c.videoPodNumber || c.videoPodPosition && "number" !== typeof c.videoPodPosition || c.persistentRoadblocksOnly && "boolean" !== typeof c.persistentRoadblocksOnly || c.clearUnfilledSlots && "boolean" !== typeof c.clearUnfilledSlots) a.log.H(V("PubAdsService.videoRefresh", _.w([b, c], _.Pa)), a);
            else if (a.j) {
                var e = null;
                if (b && (e = kt(a, b), !e.length)) {
                    a.log.error(yk("videoRefresh"), a);
                    return
                }
                a.log.info(Ck(), a);
                (b = lt(a, e, c, d)) && a.v && _.J(b, function(f) {
                    return gs(a.v, f)
                })
            } else a.log.H(zk(), a)
        },
        Lq = function(a) {
            if (a.A && a.j) {
                var b = pq(qq()),
                    c = a.M;
                a = a.K;
                b.Z = !0;
                b.O = c;
                b.N = a;
                b.videoStreamCorrelator = ks()
            }
        },
        Pq = function(a) {
            a.j && ns(pq(qq()), -1 == a.F ? void 0 : a.F)
        },
        Qq = function(a) {
            return 0 == a.o.length ? "not_available" : a.j ? pq(qq()).G + "" : "not_loaded"
        },
        wq = function(a, b, c) {
            var d = qq(),
                e = pq(d);
            d = Oq(d);
            b = b ? kt(a, b) : ep(d);
            d = {};
            for (var f = _.r(b), g = f.next(); !g.done; d = {
                    Ua: d.Ua
                }, g = f.next()) d.Ua = _.R(g.value), a.D[d.Ua] || (a.D[d.Ua] = !0, setTimeout(function(h) {
                return function() {
                    delete a.D[h.Ua]
                }
            }(d), 0));
            return mq(e, b, c)
        },
        Mq = function(a, b, c) {
            if (!a.j) return a.log.H(Ak(), a), !1;
            var d = null;
            if (c && (d = kt(a, c), 0 == d.length)) return a.log.H(V("PubAdsService.clear", _.w([c], _.Pa)), a), !1;
            a.log.info(Dk(), a);
            return wq(a, d, b)
        };
    gt.prototype.getVersion = function() {
        if (this.j) return _.Ti()
    };
    var kt = function(a, b) {
            var c = [];
            if (!_.D(b)) return c;
            _.J(b, function(d, e) {
                (d = Yh(d, nn)) && !d.Ra() ? c.push(d) : a.log.H(Ik(String(e)), a)
            });
            return c
        },
        Rq = function(a) {
            a.P = !0;
            if (a.j) {
                a = Oq(qq());
                a.o = !0;
                var b = new _.Ui("gpt_markAsAmp", Bi(), _.bi(23));
                _.z(b, a);
                try {
                    var c = tg(_.q);
                    c && _.A(b, "ntype", c);
                    var d = _.u(_.q.location.ancestorOrigins, function(e) {
                        return ((/^(?:https?:\/\/)?([^\/\?:#]+)/i.exec(e) || [])[1] || e).substr(0, 20)
                    });
                    _.A(b, "ost", d.slice(0, 10).join())
                } catch (e) {}
                _.Vi(b)
            }
        };
    gt.prototype.destroySlots = function(a) {
        var b = Zm.prototype.destroySlots.call(this, a);
        if (!b.length) return b;
        if (this.j) {
            var c = Kn.C().j;
            wq(this, a, c);
            mp(Oq(qq()), a)
        }
        return b
    };
    var vq = _.S(26, function() {
        var a = _.bn.C(),
            b = a.find("publisher_ads");
        b || (b = new gt, a.add(b));
        return b
    });
    wa("pubads", function() {
        return vq().l()
    });
    var nt = function() {
        Zm.call(this);
        this.O = !0;
        this.v = this.J = !1;
        this.N = 0;
        this.M = this.K = void 0;
        this.R = this.D = !1;
        this.B = {};
        this.j = {};
        this.A = !1;
        this.I = {};
        this.P = !1
    };
    _.B(nt, Zm);
    _.n = nt.prototype;
    _.n.wa = function() {
        return new Bq(this, nn)
    };
    _.n.set = function(a, b) {
        "string" === typeof a && 0 < a.length ? (this.I[a] = b, this.log.info(dk(a, String(b), this.aa()), this, null)) : this.log.H(ek(String(a), String(b), this.aa()), this, null);
        return this
    };
    _.n.get = function(a) {
        return this.I[a]
    };
    _.n.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        wm(this);
        a = Yn(a, b, c).slot;
        a.addService(this);
        Am(a, d);
        co(a.U.j)
    };
    _.n.wb = function() {
        this.O ? this.F() : this.D || (_.q.document.write('<script type="text/javascript" src="' + yi() + '">\x3c/script>'), this.D = !0)
    };
    var xq = function(a) {
            var b = vq();
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
        yq = function(a, b) {
            (b = void 0 === b ? "" : b) && !a.P && _.ya("ima_sdk_v", function(c) {
                a.P = !0;
                _.A(c, "v", b)
            });
            return Qq(vq())
        },
        tq = function(a, b) {
            var c = vq(),
                d = Kn.C().j;
            if (c.m) {
                if (a.A) {
                    if (!xq(a)) {
                        a.log.H(hk());
                        return
                    }
                    wq(c, null, d)
                }
                var e = {
                    isVideoRefresh: !0
                };
                void 0 !== a.N && (e.videoStreamCorrelator = a.N);
                a.K && (e.videoPodNumber = a.K);
                a.M && (e.videoPodPosition = a.M);
                a.A && (e.persistentRoadblocksOnly = a.A);
                a.v && (e.clearUnfilledSlots = a.v);
                a = Si(d);
                mt(c, b, e, a)
            } else a.log.error(ik("PubAds", "refresh"))
        },
        zq = function(a, b) {
            if (vq().m && Xn(b)) return a = b.j, !!a && !!_.M(a, 11);
            a.log.error(jk());
            return !1
        },
        uq = function(a, b) {
            for (var c = a.L, d = [], e = 0; e < b.length; ++e) {
                var f = b[e];
                Sb(c, f) ? d.push(c[f]) : a.log.H(kk(), a)
            }
            return d
        };
    nt.prototype.aa = function() {
        return "companion_ads"
    };
    var xi = function() {
        return "https://pagead2.googlesyndication.com/pagead/show_companion_ad.js"
    };
    nt.prototype.F = function() {
        if (!this.R) {
            var a = document,
                b = xi();
            this.log.info(lk("GPT CompanionAds"), this);
            _.Qe(a, b);
            this.R = !0
        }
    };
    nt.prototype.T = function(a, b) {
        _.bj(a, b);
        this.log.error(mk("GPT CompanionAds"), this)
    };
    var Aq = function(a, b) {
        var c = b && b.U.m;
        if (c && c in a.B && _.W(b) && a.m && !zq(a, b)) {
            b.ta = a.B[c];
            var d = new _.Tm(b.l(), !1, a.aa());
            if (a.j.hasOwnProperty(c)) {
                var e = a.j[c];
                delete a.j[c];
                _.Um(d, e)
            }
            return sn(b, d)
        }
        return !1
    };
    nt.prototype.yb = function(a, b) {
        Aq(this, b)
    };
    var ot = nt.prototype;
    ot.F = _.S(70, ot.F, ot.T);
    var pt = _.S(57, function() {
        var a = _.bn.C(),
            b = a.find("companion_ads");
        b || (b = new nt, a.add(b));
        return b
    });
    wa("companionAds", function() {
        return pt().l()
    });
    var rt = function(a, b) {
        xm.call(this, a);
        var c = this;
        this.setContent = T(72, function(d, e) {
            d = Yh(d, b);
            var f;
            if (f = d) Xn(d) && "string" === typeof e && 0 < e.length && (a.j[d.U.m] = e, qt(a, d)), f = void 0;
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
    _.B(rt, xm);
    var st = function() {
        Zm.call(this);
        this.v = {};
        this.j = {}
    };
    _.B(st, Zm);
    _.n = st.prototype;
    _.n.wa = function() {
        return new rt(this, nn)
    };
    _.n.aa = function() {
        return "content"
    };
    _.n.set = function(a, b) {
        "string" === typeof a && 0 < a.length ? (this.v[a] = b, this.log.info(dk(a, String(b), this.aa()), this, null)) : this.log.H(ek(String(a), String(b), this.aa()), this, null);
        return this
    };
    _.n.get = function(a) {
        return this.v[a]
    };
    _.n.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        wm(this);
        a = Yn(a, b, c).slot;
        a.addService(this);
        Am(a, d);
        co(a.U.j)
    };
    var qt = function(a, b) {
        var c = b && b.U.m;
        c in a.j && a.m && _.W(b) && !b.G && (b.ta = a.j[c], a = new _.Tm(b.l(), !1, a.aa()), sn(b, a))
    };
    st.prototype.wb = function() {
        for (var a = this.o, b = 0; b < a.length; ++b) qt(this, a[b])
    };
    st.prototype.yb = function(a, b) {
        qt(this, b)
    };
    var tt = _.S(71, function() {
        var a = _.bn.C(),
            b = a.find("content");
        b || (b = new st, a.add(b));
        return b
    });
    wa("content", function() {
        return tt().l()
    });
    if (window.googletag.evalScripts) window.googletag.evalScripts();
    else {
        var ut = window,
            vt = _.hh(ut);
        if (vt) {
            var wt = {
                    label: "2",
                    type: 9,
                    value: vt
                },
                xt = ut.google_js_reporting_queue = ut.google_js_reporting_queue || [];
            2048 > xt.length && xt.push(wt)
        }
        wa("evalScripts", function() {
            Xq(document)
        });
        Yq()
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, {});