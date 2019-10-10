(function() {
    var h, aa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ba;
    if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
    else {
        var ca;
        a: {
            var da = {
                    fh: !0
                },
                ea = {};
            try {
                ea.__proto__ = da;
                ca = ea.fh;
                break a
            } catch (a) {}
            ca = !1
        }
        ba = ca ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ha = ba,
        ia = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ka = function(a, b) {
            if (b) {
                var c = ia;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ja(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    ka("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            var d = this + "";
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    var la = la || {},
        k = this,
        t = function(a) {
            return void 0 !== a
        },
        u = function(a) {
            return "string" == typeof a
        },
        ma = function(a) {
            return "number" == typeof a
        },
        na = function(a, b) {
            a = a.split(".");
            var c = k;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) !a.length && t(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {}
        },
        oa = function(a) {
            a = a.split(".");
            for (var b = k, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        pa = function() {},
        qa = function(a) {
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
        },
        ra = function(a) {
            return "array" == qa(a)
        },
        sa = function(a) {
            var b = qa(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        ta = function(a) {
            return "function" == qa(a)
        },
        ua = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        va = "closure_uid_" + (1E9 * Math.random() >>> 0),
        wa = 0,
        xa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ya = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments,
                    2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        v = function(a, b, c) {
            v = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? xa : ya;
            return v.apply(null, arguments)
        },
        za = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        x = Date.now || function() {
            return +new Date
        },
        Ba = function(a) {
            if (k.execScript) k.execScript(a, "JavaScript");
            else if (k.eval) {
                if (null == Aa) {
                    try {
                        k.eval("var _evalTest_ = 1;")
                    } catch (d) {}
                    if ("undefined" != typeof k._evalTest_) {
                        try {
                            delete k._evalTest_
                        } catch (d) {}
                        Aa = !0
                    } else Aa = !1
                }
                if (Aa) k.eval(a);
                else {
                    var b = k.document,
                        c = b.createElement("SCRIPT");
                    c.type = "text/javascript";
                    c.defer = !1;
                    c.appendChild(b.createTextNode(a));
                    b.head.appendChild(c);
                    b.head.removeChild(c)
                }
            } else throw Error("goog.globalEval not available");
        },
        Aa = null,
        y = function(a, b) {
            function c() {}
            c.prototype =
                b.prototype;
            a.O = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.mi = function(d, e, g) {
                for (var f = Array(arguments.length - 2), l = 2; l < arguments.length; l++) f[l - 2] = arguments[l];
                return b.prototype[e].apply(d, f)
            }
        };
    var Ca = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ca);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a));
        this.Wh = !0
    };
    y(Ca, Error);
    Ca.prototype.name = "CustomError";
    var Da;
    var Ea = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ca.call(this, c + a[d])
    };
    y(Ea, Ca);
    Ea.prototype.name = "AssertionError";
    var Fa = function(a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var g = d
            } else a && (e += ": " + a, g = b);
            throw new Ea("" + e, g || []);
        },
        z = function(a, b, c) {
            a || Fa("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        A = function(a, b) {
            throw new Ea("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Ga = function(a, b, c) {
            ma(a) || Fa("Expected number but got %s: %s.", [qa(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ha = function(a, b, c) {
            u(a) || Fa("Expected string but got %s: %s.", [qa(a),
                a
            ], b, Array.prototype.slice.call(arguments, 2))
        },
        Ia = function(a, b, c) {
            ta(a) || Fa("Expected function but got %s: %s.", [qa(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ja = function(a, b, c) {
            ua(a) || Fa("Expected object but got %s: %s.", [qa(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Ka = function(a, b, c) {
            ra(a) || Fa("Expected array but got %s: %s.", [qa(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Ma = function(a, b, c, d) {
            a instanceof b || Fa("Expected instanceof %s but got %s.", [La(b), La(a)], c,
                Array.prototype.slice.call(arguments, 3))
        },
        La = function(a) {
            return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
        };
    var Na = {
            gg: ["BC", "AD"],
            fg: ["Before Christ", "Anno Domini"],
            xg: "JFMAMJJASOND".split(""),
            Rg: "JFMAMJJASOND".split(""),
            ug: "January February March April May June July August September October November December".split(" "),
            Qg: "January February March April May June July August September October November December".split(" "),
            Mg: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            Tg: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            bh: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            Vg: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            Og: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            Ug: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            ii: "SMTWTFS".split(""),
            Sg: "SMTWTFS".split(""),
            Ng: ["Q1", "Q2", "Q3", "Q4"],
            Cg: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
            Vf: ["AM", "PM"],
            qe: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
            Ce: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
            $f: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
            od: 6,
            li: [5, 6],
            pd: 5
        },
        Oa = Na;
    Oa = Na;
    var Pa = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        Qa = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ya = function(a, b) {
            if (b) a = a.replace(Ra, "&amp;").replace(Sa, "&lt;").replace(Ta, "&gt;").replace(Ua, "&quot;").replace(Va, "&#39;").replace(Wa, "&#0;");
            else {
                if (!Xa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ra, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Sa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ta, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ua,
                    "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Va, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Wa, "&#0;"))
            }
            return a
        },
        Ra = /&/g,
        Sa = /</g,
        Ta = />/g,
        Ua = /"/g,
        Va = /'/g,
        Wa = /\x00/g,
        Xa = /[\x00&<>"']/,
        Za = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var $a = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        ab = function(a) {
            return a = Ya(a, void 0)
        },
        bb = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        B = function(a, b) {
            a = t(void 0) ? a.toFixed(void 0) : String(a);
            var c = a.indexOf("."); - 1 == c && (c = a.length);
            return bb("0", Math.max(0, b - c)) + a
        },
        cb = function(a) {
            return Array.prototype.join.call(arguments, "")
        },
        db = 2147483648 * Math.random() | 0,
        eb = function(a) {
            isFinite(a) && (a = String(a));
            return u(a) ? /^\s*-?0x/i.test(a) ?
                parseInt(a, 16) : parseInt(a, 10) : NaN
        };
    var fb = /^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/,
        gb = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/,
        hb = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/,
        ib = function(a, b, c, d, e) {
            a = new Date(a, b, c);
            e = e || 0;
            return a.valueOf() + 864E5 * (((t(d) ? d : 3) - e + 7) % 7 - ((a.getDay() + 6) % 7 - e + 7) % 7)
        },
        jb = function(a, b, c, d, e, g) {
            u(a) ? (this.wa = "y" == a ? b : 0, this.sa = "m" == a ? b : 0, this.ga = "d" == a ? b : 0, this.X = "h" == a ? b : 0, this.Z = "n" == a ? b : 0, this.aa = "s" == a ? b : 0) : (this.wa = a || 0, this.sa = b || 0, this.ga = c || 0, this.X = d || 0,
                this.Z = e || 0, this.aa = g || 0)
        };
    jb.prototype.lc = function(a) {
        var b = Math.min(this.wa, this.sa, this.ga, this.X, this.Z, this.aa),
            c = Math.max(this.wa, this.sa, this.ga, this.X, this.Z, this.aa);
        if (0 > b && 0 < c) return null;
        if (!a && 0 == b && 0 == c) return "PT0S";
        c = [];
        0 > b && c.push("-");
        c.push("P");
        (this.wa || a) && c.push(Math.abs(this.wa) + "Y");
        (this.sa || a) && c.push(Math.abs(this.sa) + "M");
        (this.ga || a) && c.push(Math.abs(this.ga) + "D");
        if (this.X || this.Z || this.aa || a) c.push("T"), (this.X || a) && c.push(Math.abs(this.X) + "H"), (this.Z || a) && c.push(Math.abs(this.Z) + "M"), (this.aa ||
            a) && c.push(Math.abs(this.aa) + "S");
        return c.join("")
    };
    jb.prototype.clone = function() {
        return new jb(this.wa, this.sa, this.ga, this.X, this.Z, this.aa)
    };
    jb.prototype.add = function(a) {
        this.wa += a.wa;
        this.sa += a.sa;
        this.ga += a.ga;
        this.X += a.X;
        this.Z += a.Z;
        this.aa += a.aa
    };
    var mb = function(a, b, c) {
            ma(a) ? (this.c = kb(a, b || 0, c || 1), lb(this, c || 1)) : ua(a) ? (this.c = kb(a.getFullYear(), a.getMonth(), a.getDate()), lb(this, a.getDate())) : (this.c = new Date(x()), a = this.c.getDate(), this.c.setHours(0), this.c.setMinutes(0), this.c.setSeconds(0), this.c.setMilliseconds(0), lb(this, a))
        },
        kb = function(a, b, c) {
            b = new Date(a, b, c);
            0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
            return b
        };
    h = mb.prototype;
    h.Gc = Oa.od;
    h.Hc = Oa.pd;
    h.clone = function() {
        var a = new mb(this.c);
        a.Gc = this.Gc;
        a.Hc = this.Hc;
        return a
    };
    h.getFullYear = function() {
        return this.c.getFullYear()
    };
    h.getYear = function() {
        return this.getFullYear()
    };
    h.getMonth = function() {
        return this.c.getMonth()
    };
    h.getDate = function() {
        return this.c.getDate()
    };
    h.getTime = function() {
        return this.c.getTime()
    };
    h.getDay = function() {
        return this.c.getDay()
    };
    h.getUTCFullYear = function() {
        return this.c.getUTCFullYear()
    };
    h.getUTCMonth = function() {
        return this.c.getUTCMonth()
    };
    h.getUTCDate = function() {
        return this.c.getUTCDate()
    };
    h.getUTCDay = function() {
        return this.c.getDay()
    };
    h.getUTCHours = function() {
        return this.c.getUTCHours()
    };
    h.getUTCMinutes = function() {
        return this.c.getUTCMinutes()
    };
    h.getTimezoneOffset = function() {
        return this.c.getTimezoneOffset()
    };
    h.set = function(a) {
        this.c = new Date(a.getFullYear(), a.getMonth(), a.getDate())
    };
    h.setFullYear = function(a) {
        this.c.setFullYear(a)
    };
    h.setYear = function(a) {
        this.setFullYear(a)
    };
    h.setMonth = function(a) {
        this.c.setMonth(a)
    };
    h.setDate = function(a) {
        this.c.setDate(a)
    };
    h.setTime = function(a) {
        this.c.setTime(a)
    };
    h.setUTCFullYear = function(a) {
        this.c.setUTCFullYear(a)
    };
    h.setUTCMonth = function(a) {
        this.c.setUTCMonth(a)
    };
    h.setUTCDate = function(a) {
        this.c.setUTCDate(a)
    };
    h.add = function(a) {
        if (a.wa || a.sa) {
            var b = this.getMonth() + a.sa + 12 * a.wa,
                c = this.getYear() + Math.floor(b / 12);
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
            this.setDate(1);
            this.setFullYear(c);
            this.setMonth(b);
            this.setDate(d)
        }
        a.ga && (a = new Date((new Date(this.getYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.ga), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()),
            this.setDate(a.getDate()), lb(this, a.getDate()))
    };
    h.lc = function(a) {
        return [this.getFullYear(), B(this.getMonth() + 1, 2), B(this.getDate(), 2)].join(a ? "-" : "") + ""
    };
    h.toString = function() {
        return this.lc()
    };
    var lb = function(a, b) {
        a.getDate() != b && a.c.setUTCHours(a.c.getUTCHours() + (a.getDate() < b ? 1 : -1))
    };
    mb.prototype.valueOf = function() {
        return this.c.valueOf()
    };
    var nb = function(a, b, c, d, e, g, f) {
        this.c = ma(a) ? new Date(a, b || 0, c || 1, d || 0, e || 0, g || 0, f || 0) : new Date(a && a.getTime ? a.getTime() : x())
    };
    y(nb, mb);
    h = nb.prototype;
    h.getHours = function() {
        return this.c.getHours()
    };
    h.getMinutes = function() {
        return this.c.getMinutes()
    };
    h.getSeconds = function() {
        return this.c.getSeconds()
    };
    h.getMilliseconds = function() {
        return this.c.getMilliseconds()
    };
    h.getUTCDay = function() {
        return this.c.getUTCDay()
    };
    h.getUTCHours = function() {
        return this.c.getUTCHours()
    };
    h.getUTCMinutes = function() {
        return this.c.getUTCMinutes()
    };
    h.getUTCSeconds = function() {
        return this.c.getUTCSeconds()
    };
    h.getUTCMilliseconds = function() {
        return this.c.getUTCMilliseconds()
    };
    h.setHours = function(a) {
        this.c.setHours(a)
    };
    h.setMinutes = function(a) {
        this.c.setMinutes(a)
    };
    h.setSeconds = function(a) {
        this.c.setSeconds(a)
    };
    h.setMilliseconds = function(a) {
        this.c.setMilliseconds(a)
    };
    h.setUTCHours = function(a) {
        this.c.setUTCHours(a)
    };
    h.setUTCMinutes = function(a) {
        this.c.setUTCMinutes(a)
    };
    h.setUTCSeconds = function(a) {
        this.c.setUTCSeconds(a)
    };
    h.setUTCMilliseconds = function(a) {
        this.c.setUTCMilliseconds(a)
    };
    h.add = function(a) {
        mb.prototype.add.call(this, a);
        a.X && this.setUTCHours(this.c.getUTCHours() + a.X);
        a.Z && this.setUTCMinutes(this.c.getUTCMinutes() + a.Z);
        a.aa && this.setUTCSeconds(this.c.getUTCSeconds() + a.aa)
    };
    h.lc = function(a) {
        var b = mb.prototype.lc.call(this, a);
        return a ? b + " " + B(this.getHours(), 2) + ":" + B(this.getMinutes(), 2) + ":" + B(this.getSeconds(), 2) : b + "T" + B(this.getHours(), 2) + B(this.getMinutes(), 2) + B(this.getSeconds(), 2)
    };
    h.toString = function() {
        return this.lc()
    };
    h.clone = function() {
        var a = new nb(this.c);
        a.Gc = this.Gc;
        a.Hc = this.Hc;
        return a
    };
    var ob = Array.prototype.indexOf ? function(a, b) {
            z(null != a.length);
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (u(a)) return u(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        pb = Array.prototype.lastIndexOf ? function(a, b) {
            z(null != a.length);
            return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
        } : function(a, b) {
            var c = a.length - 1;
            0 > c && (c = Math.max(0, a.length + c));
            if (u(a)) return u(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
            for (; 0 <= c; c--)
                if (c in
                    a && a[c] === b) return c;
            return -1
        },
        C = Array.prototype.forEach ? function(a, b, c) {
            z(null != a.length);
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
        },
        qb = Array.prototype.filter ? function(a, b) {
            z(null != a.length);
            return Array.prototype.filter.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, g = u(a) ? a.split("") : a, f = 0; f < c; f++)
                if (f in g) {
                    var l = g[f];
                    b.call(void 0, l, f, a) && (d[e++] = l)
                }
            return d
        },
        rb = Array.prototype.map ? function(a,
            b) {
            z(null != a.length);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = u(a) ? a.split("") : a, g = 0; g < c; g++) g in e && (d[g] = b.call(void 0, e[g], g, a));
            return d
        },
        tb = function(a) {
            a: {
                var b = sb;
                for (var c = a.length, d = u(a) ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : u(a) ? a.charAt(b) : a[b]
        },
        ub = function(a, b) {
            return 0 <= ob(a, b)
        },
        vb = function(a) {
            if (!ra(a))
                for (var b = a.length - 1; 0 <= b; b--) delete a[b];
            a.length = 0
        },
        D = function(a, b) {
            ub(a, b) ||
                a.push(b)
        },
        xb = function(a, b) {
            wb(a, 0, 0, b)
        },
        zb = function(a, b) {
            b = ob(a, b);
            var c;
            (c = 0 <= b) && yb(a, b);
            return c
        },
        yb = function(a, b) {
            z(null != a.length);
            Array.prototype.splice.call(a, b, 1)
        },
        Ab = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        Bb = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        wb = function(a, b, c, d) {
            z(null != a.length);
            Array.prototype.splice.apply(a, Cb(arguments, 1))
        },
        Cb = function(a, b, c) {
            z(null != a.length);
            return 2 >= arguments.length ? Array.prototype.slice.call(a,
                b) : Array.prototype.slice.call(a, b, c)
        },
        Eb = function(a, b) {
            a.sort(b || Db)
        },
        Fb = function(a, b) {
            var c = Db;
            Eb(a, function(d, e) {
                return c(b(d), b(e))
            })
        },
        Db = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };
    var Gb = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Hb = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        Ib = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Jb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var g = 0; g < Ib.length; g++) c = Ib[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var Kb = function() {},
        Mb = function(a) {
            if ("number" == typeof a) {
                var b = new Kb;
                b.ed = a;
                var c = a;
                if (0 == c) c = "Etc/GMT";
                else {
                    var d = ["Etc/GMT", 0 > c ? "-" : "+"];
                    c = Math.abs(c);
                    d.push(Math.floor(c / 60) % 100);
                    c %= 60;
                    0 != c && d.push(":", B(c, 2));
                    c = d.join("")
                }
                b.ee = c;
                c = a;
                0 == c ? c = "UTC" : (d = ["UTC", 0 > c ? "+" : "-"], c = Math.abs(c), d.push(Math.floor(c / 60) % 100), c %= 60, 0 != c && d.push(":", c), c = d.join(""));
                a = Lb(a);
                b.le = [c, c];
                b.tb = {
                    ji: a,
                    Be: a
                };
                b.jd = [];
                return b
            }
            b = new Kb;
            b.ee = a.id;
            b.ed = -a.std_offset;
            b.le = a.names;
            b.tb = a.names_ext;
            b.jd = a.transitions;
            return b
        },
        Lb = function(a) {
            var b = ["GMT"];
            b.push(0 >= a ? "+" : "-");
            a = Math.abs(a);
            b.push(B(Math.floor(a / 60) % 100, 2), ":", B(a % 60, 2));
            return b.join("")
        },
        Nb = function(a, b) {
            b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5;
            for (var c = 0; c < a.jd.length && b >= a.jd[c];) c += 2;
            return 0 == c ? 0 : a.jd[c - 1]
        };
    var Ob = function() {
            z(t(2), "Pattern must be defined");
            z(t(void 0) || t(Oa), "goog.i18n.DateTimeSymbols or explicit symbols must be defined");
            this.Uc = [];
            this.i = Oa;
            this.wc(2)
        },
        Pb = [/^'(?:[^']|'')*('|$)/, /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^'GyYMkSEahKHcLQdmsvVwzZ]+/],
        Qb = function(a) {
            return a.getHours ? a.getHours() : 0
        };
    Ob.prototype.Ya = function(a) {
        for (Rb && (a = a.replace(/\u200f/g, "")); a;) {
            for (var b = a, c = 0; c < Pb.length; ++c) {
                var d = a.match(Pb[c]);
                if (d) {
                    var e = d[0];
                    a = a.substring(e.length);
                    0 == c && ("''" == e ? e = "'" : (e = e.substring(1, "'" == d[1] ? e.length - 1 : e.length), e = e.replace(/''/g, "'")));
                    this.Uc.push({
                        text: e,
                        type: c
                    });
                    break
                }
            }
            if (b === a) throw Error("Malformed pattern part: " + a);
        }
    };
    Ob.prototype.format = function(a, b) {
        if (!a) throw Error("The date to format must be non-null.");
        var c = b ? 6E4 * (a.getTimezoneOffset() - (b.ed - Nb(b, a))) : 0,
            d = c ? new Date(a.getTime() + c) : a,
            e = d;
        b && d.getTimezoneOffset() != a.getTimezoneOffset() && (d = new Date(d.getTime() + 6E4 * (d.getTimezoneOffset() - a.getTimezoneOffset())), e = new Date(a.getTime() + (c + (0 < c ? -864E5 : 864E5))));
        c = [];
        for (var g = 0; g < this.Uc.length; ++g) {
            var f = this.Uc[g].text;
            1 == this.Uc[g].type ? c.push(Sb(this, f, a, d, e, b)) : c.push(f)
        }
        return c.join("")
    };
    Ob.prototype.wc = function(a) {
        if (4 > a) var b = this.i.qe[a];
        else if (8 > a) b = this.i.Ce[a - 4];
        else if (12 > a) b = this.i.$f[a - 8], b = b.replace("{1}", this.i.qe[a - 8]), b = b.replace("{0}", this.i.Ce[a - 8]);
        else {
            this.wc(10);
            return
        }
        this.Ya(b)
    };
    var E = function(a, b) {
            b = String(b);
            a = a.i || Oa;
            if (void 0 !== a.eh) {
                for (var c = [], d = 0; d < b.length; d++) {
                    var e = b.charCodeAt(d);
                    c.push(48 <= e && 57 >= e ? String.fromCharCode(a.eh + e - 48) : b.charAt(d))
                }
                b = c.join("")
            }
            return b
        },
        Rb = !1,
        Tb = function(a) {
            if (!(a.getHours && a.getSeconds && a.getMinutes)) throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
        },
        Sb = function(a, b, c, d, e, g) {
            var f = b.length;
            switch (b.charAt(0)) {
                case "G":
                    return c = 0 < d.getFullYear() ?
                        1 : 0, 4 <= f ? a.i.fg[c] : a.i.gg[c];
                case "y":
                    return c = d.getFullYear(), 0 > c && (c = -c), 2 == f && (c %= 100), E(a, B(c, f));
                case "Y":
                    return c = (new Date(ib(d.getFullYear(), d.getMonth(), d.getDate(), a.i.pd, a.i.od))).getFullYear(), 0 > c && (c = -c), 2 == f && (c %= 100), E(a, B(c, f));
                case "M":
                    a: switch (c = d.getMonth(), f) {
                        case 5:
                            f = a.i.xg[c];
                            break a;
                        case 4:
                            f = a.i.ug[c];
                            break a;
                        case 3:
                            f = a.i.Mg[c];
                            break a;
                        default:
                            f = E(a, B(c + 1, f))
                    }
                    return f;
                case "k":
                    return Tb(e), E(a, B(Qb(e) || 24, f));
                case "S":
                    return E(a, (e.getMilliseconds() / 1E3).toFixed(Math.min(3,
                        f)).substr(2) + (3 < f ? B(0, f - 3) : ""));
                case "E":
                    return c = d.getDay(), 4 <= f ? a.i.bh[c] : a.i.Og[c];
                case "a":
                    return Tb(e), f = Qb(e), a.i.Vf[12 <= f && 24 > f ? 1 : 0];
                case "h":
                    return Tb(e), E(a, B(Qb(e) % 12 || 12, f));
                case "K":
                    return Tb(e), E(a, B(Qb(e) % 12, f));
                case "H":
                    return Tb(e), E(a, B(Qb(e), f));
                case "c":
                    a: switch (c = d.getDay(), f) {
                        case 5:
                            f = a.i.Sg[c];
                            break a;
                        case 4:
                            f = a.i.Vg[c];
                            break a;
                        case 3:
                            f = a.i.Ug[c];
                            break a;
                        default:
                            f = E(a, B(c, 1))
                    }
                    return f;
                case "L":
                    a: switch (c = d.getMonth(), f) {
                        case 5:
                            f = a.i.Rg[c];
                            break a;
                        case 4:
                            f = a.i.Qg[c];
                            break a;
                        case 3:
                            f = a.i.Tg[c];
                            break a;
                        default:
                            f = E(a, B(c + 1, f))
                    }
                    return f;
                case "Q":
                    return c = Math.floor(d.getMonth() / 3), 4 > f ? a.i.Ng[c] : a.i.Cg[c];
                case "d":
                    return E(a, B(d.getDate(), f));
                case "m":
                    return Tb(e), E(a, B(e.getMinutes(), f));
                case "s":
                    return Tb(e), E(a, B(e.getSeconds(), f));
                case "v":
                    return f = g || Mb(c.getTimezoneOffset()), f.ee;
                case "V":
                    return a = g || Mb(c.getTimezoneOffset()), 2 >= f ? a.ee : 0 < Nb(a, c) ? t(a.tb.dg) ? a.tb.dg : a.tb.DST_GENERIC_LOCATION : t(a.tb.Be) ? a.tb.Be : a.tb.STD_GENERIC_LOCATION;
                case "w":
                    return c = ib(e.getFullYear(),
                        e.getMonth(), e.getDate(), a.i.pd, a.i.od), E(a, B(Math.floor(Math.round((c - (new Date((new Date(c)).getFullYear(), 0, 1)).valueOf()) / 864E5) / 7) + 1, f));
                case "z":
                    return a = g || Mb(c.getTimezoneOffset()), 4 > f ? a.le[0 < Nb(a, c) ? 2 : 0] : a.le[0 < Nb(a, c) ? 3 : 1];
                case "Z":
                    return b = g || Mb(c.getTimezoneOffset()), 4 > f ? (f = -(b.ed - Nb(b, c)), a = [0 > f ? "-" : "+"], f = Math.abs(f), a.push(B(Math.floor(f / 60) % 100, 2), B(f % 60, 2)), f = a.join("")) : f = E(a, Lb(b.ed - Nb(b, c))), f;
                default:
                    return ""
            }
        };
    var Ub = {
            pe: {
                1E3: {
                    other: "0K"
                },
                1E4: {
                    other: "00K"
                },
                1E5: {
                    other: "000K"
                },
                1E6: {
                    other: "0M"
                },
                1E7: {
                    other: "00M"
                },
                1E8: {
                    other: "000M"
                },
                1E9: {
                    other: "0B"
                },
                1E10: {
                    other: "00B"
                },
                1E11: {
                    other: "000B"
                },
                1E12: {
                    other: "0T"
                },
                1E13: {
                    other: "00T"
                },
                1E14: {
                    other: "000T"
                }
            },
            Xf: {
                1E3: {
                    other: "0 thousand"
                },
                1E4: {
                    other: "00 thousand"
                },
                1E5: {
                    other: "000 thousand"
                },
                1E6: {
                    other: "0 million"
                },
                1E7: {
                    other: "00 million"
                },
                1E8: {
                    other: "000 million"
                },
                1E9: {
                    other: "0 billion"
                },
                1E10: {
                    other: "00 billion"
                },
                1E11: {
                    other: "000 billion"
                },
                1E12: {
                    other: "0 trillion"
                },
                1E13: {
                    other: "00 trillion"
                },
                1E14: {
                    other: "000 trillion"
                }
            }
        },
        Vb = Ub;
    Vb = Ub;
    var Xb = function(a, b) {
            var c = ["0"];
            b = Wb[b][0] & 7;
            if (0 < b) {
                c.push(".");
                for (var d = 0; d < b; d++) c.push("0")
            }
            return a.replace(/0.00/g, c.join(""))
        },
        Wb = {
            AED: [2, "dh", "\u062f.\u0625."],
            ALL: [0, "Lek", "Lek"],
            AUD: [2, "$", "AU$"],
            BDT: [2, "\u09f3", "Tk"],
            BGN: [2, "lev", "lev"],
            BRL: [2, "R$", "R$"],
            CAD: [2, "$", "C$"],
            CDF: [2, "FrCD", "CDF"],
            CHF: [2, "CHF", "CHF"],
            CLP: [0, "$", "CL$"],
            CNY: [2, "\u00a5", "RMB\u00a5"],
            COP: [32, "$", "COL$"],
            CRC: [0, "\u20a1", "CR\u20a1"],
            CZK: [50, "K\u010d", "K\u010d"],
            DKK: [50, "kr.", "kr."],
            DOP: [2, "RD$", "RD$"],
            EGP: [2, "\u00a3",
                "LE"
            ],
            ETB: [2, "Birr", "Birr"],
            EUR: [2, "\u20ac", "\u20ac"],
            GBP: [2, "\u00a3", "GB\u00a3"],
            HKD: [2, "$", "HK$"],
            HRK: [2, "kn", "kn"],
            HUF: [34, "Ft", "Ft"],
            IDR: [0, "Rp", "Rp"],
            ILS: [34, "\u20aa", "IL\u20aa"],
            INR: [2, "\u20b9", "Rs"],
            IRR: [0, "Rial", "IRR"],
            ISK: [0, "kr", "kr"],
            JMD: [2, "$", "JA$"],
            JPY: [0, "\u00a5", "JP\u00a5"],
            KRW: [0, "\u20a9", "KR\u20a9"],
            LKR: [2, "Rs", "SLRs"],
            LTL: [2, "Lt", "Lt"],
            MNT: [0, "\u20ae", "MN\u20ae"],
            MVR: [2, "Rf", "MVR"],
            MXN: [2, "$", "Mex$"],
            MYR: [2, "RM", "RM"],
            NOK: [50, "kr", "NOkr"],
            PAB: [2, "B/.", "B/."],
            PEN: [2, "S/.", "S/."],
            PHP: [2, "\u20b1", "PHP"],
            PKR: [0, "Rs", "PKRs."],
            PLN: [50, "z\u0142", "z\u0142"],
            RON: [2, "RON", "RON"],
            RSD: [0, "din", "RSD"],
            RUB: [50, "\u20bd", "RUB"],
            SAR: [2, "Rial", "Rial"],
            SEK: [50, "kr", "kr"],
            SGD: [2, "$", "S$"],
            THB: [2, "\u0e3f", "THB"],
            TRY: [2, "\u20ba", "TRY"],
            TWD: [2, "NT$", "NT$"],
            TZS: [0, "TSh", "TSh"],
            UAH: [2, "\u0433\u0440\u043d.", "UAH"],
            USD: [2, "$", "US$"],
            UYU: [2, "$", "$U"],
            VND: [48, "\u20ab", "VN\u20ab"],
            YER: [0, "Rial", "Rial"],
            ZAR: [2, "R", "ZAR"]
        };
    var Yb = {
            DECIMAL_SEP: ".",
            GROUP_SEP: ",",
            ye: "%",
            sd: "0",
            Ag: "+",
            xe: "-",
            se: "E",
            ze: "\u2030",
            qd: "\u221e",
            vg: "NaN",
            DECIMAL_PATTERN: "#,##0.###",
            Kg: "#E0",
            zg: "#,##0%",
            Zf: "\u00a4#,##0.00",
            cg: "USD"
        },
        Zb = Yb;
    Zb = Yb;
    var $b = function() {
            this.Kh = null;
            this.vh = 0;
            this.Th = null;
            this.ec = 40;
            this.ra = 1;
            this.qb = 0;
            this.Ba = 3;
            this.Rc = this.Ga = 0;
            this.Hf = this.Qf = !1;
            this.fc = this.mb = "";
            this.Ta = F(this).xe;
            this.Ib = "";
            this.$ = 1;
            this.kb = !1;
            this.gb = [];
            this.kd = this.We = !1;
            this.Wb = 0;
            this.Je = null;
            this.wc(1)
        },
        F = function(a) {
            return a.Th || Zb
        },
        ac = function(a) {
            return a.Kh || F(a).cg
        };
    $b.prototype.Ya = function(a) {
        this.Vc = a.replace(/ /g, "\u00a0");
        var b = [0];
        this.mb = bc(this, a, b);
        for (var c = b[0], d = -1, e = 0, g = 0, f = 0, l = -1, m = a.length, r = !0; b[0] < m && r; b[0]++) switch (a.charAt(b[0])) {
            case "#":
                0 < g ? f++ : e++;
                0 <= l && 0 > d && l++;
                break;
            case "0":
                if (0 < f) throw Error('Unexpected "0" in pattern "' + a + '"');
                g++;
                0 <= l && 0 > d && l++;
                break;
            case ",":
                0 < l && this.gb.push(l);
                l = 0;
                break;
            case ".":
                if (0 <= d) throw Error('Multiple decimal separators in pattern "' + a + '"');
                d = e + g + f;
                break;
            case "E":
                if (this.kd) throw Error('Multiple exponential symbols in pattern "' +
                    a + '"');
                this.kd = !0;
                this.Rc = 0;
                b[0] + 1 < m && "+" == a.charAt(b[0] + 1) && (b[0]++, this.Qf = !0);
                for (; b[0] + 1 < m && "0" == a.charAt(b[0] + 1);) b[0]++, this.Rc++;
                if (1 > e + g || 1 > this.Rc) throw Error('Malformed exponential pattern "' + a + '"');
                r = !1;
                break;
            default:
                b[0]--, r = !1
        }
        0 == g && 0 < e && 0 <= d && (g = d, 0 == g && g++, f = e - g, e = g - 1, g = 1);
        if (0 > d && 0 < f || 0 <= d && (d < e || d > e + g) || 0 == l) throw Error('Malformed pattern "' + a + '"');
        f = e + g + f;
        this.Ba = 0 <= d ? f - d : 0;
        0 <= d && (this.Ga = e + g - d, 0 > this.Ga && (this.Ga = 0));
        this.ra = (0 <= d ? d : f) - e;
        this.kd && (this.ec = e + this.ra, 0 == this.Ba &&
            0 == this.ra && (this.ra = 1));
        this.gb.push(Math.max(0, l));
        this.We = 0 == d || d == f;
        c = b[0] - c;
        this.fc = bc(this, a, b);
        b[0] < a.length && ";" == a.charAt(b[0]) ? (b[0]++, 1 != this.$ && (this.kb = !0), this.Ta = bc(this, a, b), b[0] += c, this.Ib = bc(this, a, b)) : (this.Ta += this.mb, this.Ib += this.fc)
    };
    $b.prototype.wc = function(a) {
        switch (a) {
            case 1:
                this.Ya(F(this).DECIMAL_PATTERN);
                break;
            case 2:
                this.Ya(F(this).Kg);
                break;
            case 3:
                this.Ya(F(this).zg);
                break;
            case 4:
                this.Ya(Xb(F(this).Zf, ac(this)));
                break;
            case 5:
                cc(this, 1);
                break;
            case 6:
                cc(this, 2);
                break;
            default:
                throw Error("Unsupported pattern type.");
        }
    };
    var cc = function(a, b) {
        a.Wb = b;
        a.Ya(F(a).DECIMAL_PATTERN);
        a.Ga = 0;
        a.Ba = 2;
        if (0 < a.Ga) throw Error("Can't combine significant digits and minimum fraction digits");
        a.qb = 2
    };
    $b.prototype.parse = function(a, b) {
        b = b || [0];
        if (0 != this.Wb) throw Error("Parsing of compact numbers is unimplemented");
        a = a.replace(/ |\u202f/g, "\u00a0");
        var c = a.indexOf(this.mb, b[0]) == b[0],
            d = a.indexOf(this.Ta, b[0]) == b[0];
        c && d && (this.mb.length > this.Ta.length ? d = !1 : this.mb.length < this.Ta.length && (c = !1));
        c ? b[0] += this.mb.length : d && (b[0] += this.Ta.length);
        if (a.indexOf(F(this).qd, b[0]) == b[0]) {
            b[0] += F(this).qd.length;
            var e = Infinity
        } else {
            e = a;
            var g = !1,
                f = !1,
                l = !1,
                m = -1,
                r = 1,
                n = F(this).DECIMAL_SEP,
                p = F(this).GROUP_SEP,
                q = F(this).se;
            if (0 != this.Wb) throw Error("Parsing of compact style numbers is not implemented");
            p = p.replace(/\u202f/g, "\u00a0");
            for (var w = ""; b[0] < e.length; b[0]++) {
                var G = e.charAt(b[0]),
                    S = dc(this, G);
                if (0 <= S && 9 >= S) w += S, l = !0;
                else if (G == n.charAt(0)) {
                    if (g || f) break;
                    w += ".";
                    g = !0
                } else if (G == p.charAt(0) && ("\u00a0" != p.charAt(0) || b[0] + 1 < e.length && 0 <= dc(this, e.charAt(b[0] + 1)))) {
                    if (g || f) break
                } else if (G == q.charAt(0)) {
                    if (f) break;
                    w += "E";
                    f = !0;
                    m = b[0]
                } else if ("+" == G || "-" == G) {
                    if (l && m != b[0] - 1) break;
                    w += G
                } else if (1 == this.$ &&
                    G == F(this).ye.charAt(0)) {
                    if (1 != r) break;
                    r = 100;
                    if (l) {
                        b[0]++;
                        break
                    }
                } else if (1 == this.$ && G == F(this).ze.charAt(0)) {
                    if (1 != r) break;
                    r = 1E3;
                    if (l) {
                        b[0]++;
                        break
                    }
                } else break
            }
            1 != this.$ && (r = this.$);
            e = parseFloat(w) / r
        }
        if (c) {
            if (a.indexOf(this.fc, b[0]) != b[0]) return NaN;
            b[0] += this.fc.length
        } else if (d) {
            if (a.indexOf(this.Ib, b[0]) != b[0]) return NaN;
            b[0] += this.Ib.length
        }
        return d ? -e : e
    };
    $b.prototype.format = function(a) {
        if (isNaN(a)) return F(this).vg;
        var b = [];
        var c = null === this.Je ? a : this.Je,
            d = a;
        if (0 == this.Wb) var e = ec;
        else c = Math.abs(c), d = Math.abs(d), e = fc(this, 1 >= c ? 0 : gc(c)).Dd, d = H(d, -e), hc(this, d), c = H(c, -e), c = hc(this, c), e = fc(this, e + gc(c.sf));
        a = H(a, -e.Dd);
        b.push(e.prefix);
        c = 0 > a || 0 == a && 0 > 1 / a;
        b.push(c ? this.Ta : this.mb);
        if (isFinite(a))
            if (a = a * (c ? -1 : 1) * this.$, this.kd)
                if (0 == a) ic(this, a, this.ra, b), jc(this, 0, b);
                else {
                    d = Math.log(a) / Math.log(10);
                    z(!t(void 0) || !1);
                    d = Math.floor(d + 2E-15);
                    a = H(a, -d);
                    var g =
                        this.ra;
                    1 < this.ec && this.ec > this.ra ? (g = d % this.ec, 0 > g && (g = this.ec + g), a = H(a, g), d -= g, g = 1) : 1 > this.ra ? (d++, a = H(a, -1)) : (d -= this.ra - 1, a = H(a, this.ra - 1));
                    ic(this, a, g, b);
                    jc(this, d, b)
                }
        else ic(this, a, this.ra, b);
        else b.push(F(this).qd);
        b.push(c ? this.Ib : this.fc);
        b.push(e.Kf);
        return b.join("")
    };
    var hc = function(a, b) {
            var c = H(b, a.Ba);
            0 < a.qb && (c = kc(c, a.qb, a.Ba));
            c = Math.round(c);
            isFinite(c) ? (b = Math.floor(H(c, -a.Ba)), a = Math.floor(c - H(b, a.Ba))) : a = 0;
            return {
                sf: b,
                Ah: a
            }
        },
        ic = function(a, b, c, d) {
            if (a.Ga > a.Ba) throw Error("Min value must be less than max value");
            d || (d = []);
            b = hc(a, b);
            var e = b.sf,
                g = b.Ah,
                f = 0 == e ? 0 : gc(e) + 1,
                l = 0 < a.Ga || 0 < g || a.Hf && f < a.qb;
            b = a.Ga;
            l && (b = a.Hf && 0 < a.qb ? a.qb - f : a.Ga);
            var m = "";
            for (f = e; 1E20 < f;) m = "0" + m, f = Math.round(H(f, -1));
            m = f + m;
            var r = F(a).DECIMAL_SEP;
            f = F(a).sd.charCodeAt(0);
            var n = m.length,
                p = 0;
            if (0 < e || 0 < c) {
                for (e = n; e < c; e++) d.push(String.fromCharCode(f));
                if (2 <= a.gb.length)
                    for (c = 1; c < a.gb.length; c++) p += a.gb[c];
                c = n - p;
                if (0 < c) {
                    e = a.gb;
                    p = n = 0;
                    for (var q, w = F(a).GROUP_SEP, G = m.length, S = 0; S < G; S++)
                        if (d.push(String.fromCharCode(f + 1 * Number(m.charAt(S)))), 1 < G - S)
                            if (q = e[p], S < c) {
                                var fa = c - S;
                                (1 === q || 0 < q && 1 === fa % q) && d.push(w)
                            } else p < e.length && (S === c ? p += 1 : q === S - c - n + 1 && (d.push(w), n += q, p += 1))
                } else {
                    c = m;
                    m = a.gb;
                    e = F(a).GROUP_SEP;
                    q = c.length;
                    w = [];
                    for (n = m.length - 1; 0 <= n && 0 < q; n--) {
                        p = m[n];
                        for (G = 0; G < p && 0 <= q - G - 1; G++) w.push(String.fromCharCode(f +
                            1 * Number(c.charAt(q - G - 1))));
                        q -= p;
                        0 < q && w.push(e)
                    }
                    d.push.apply(d, w.reverse())
                }
            } else l || d.push(String.fromCharCode(f));
            (a.We || l) && d.push(r);
            g = String(g);
            l = g.split("e+");
            2 == l.length && (g = String(kc(parseFloat(l[0]), a.qb, 1)), g = g.replace(".", ""), g += bb("0", parseInt(l[1], 10) - g.length + 1));
            a.Ba + 1 > g.length && (g = "1" + bb("0", a.Ba - g.length) + g);
            for (a = g.length;
                "0" == g.charAt(a - 1) && a > b + 1;) a--;
            for (e = 1; e < a; e++) d.push(String.fromCharCode(f + 1 * Number(g.charAt(e))))
        },
        jc = function(a, b, c) {
            c.push(F(a).se);
            0 > b ? (b = -b, c.push(F(a).xe)) :
                a.Qf && c.push(F(a).Ag);
            b = "" + b;
            for (var d = F(a).sd, e = b.length; e < a.Rc; e++) c.push(d);
            c.push(b)
        },
        dc = function(a, b) {
            b = b.charCodeAt(0);
            if (48 <= b && 58 > b) return b - 48;
            a = F(a).sd.charCodeAt(0);
            return a <= b && b < a + 10 ? b - a : -1
        },
        bc = function(a, b, c) {
            for (var d = "", e = !1, g = b.length; c[0] < g; c[0]++) {
                var f = b.charAt(c[0]);
                if ("'" == f) c[0] + 1 < g && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
                else if (e) d += f;
                else switch (f) {
                    case "#":
                    case "0":
                    case ",":
                    case ".":
                    case ";":
                        return d;
                    case "\u00a4":
                        if (c[0] + 1 < g && "\u00a4" == b.charAt(c[0] + 1)) c[0]++, d += ac(a);
                        else switch (a.vh) {
                            case 0:
                                d += Wb[ac(a)][1];
                                break;
                            case 2:
                                f = ac(a);
                                var l = Wb[f];
                                d += f == l[1] ? f : f + " " + l[1];
                                break;
                            case 1:
                                d += Wb[ac(a)][2]
                        }
                        break;
                    case "%":
                        if (!a.kb && 1 != a.$) throw Error("Too many percent/permill");
                        if (a.kb && 100 != a.$) throw Error("Inconsistent use of percent/permill characters");
                        a.$ = 100;
                        a.kb = !1;
                        d += F(a).ye;
                        break;
                    case "\u2030":
                        if (!a.kb && 1 != a.$) throw Error("Too many percent/permill");
                        if (a.kb && 1E3 != a.$) throw Error("Inconsistent use of percent/permill characters");
                        a.$ = 1E3;
                        a.kb = !1;
                        d += F(a).ze;
                        break;
                    default:
                        d +=
                            f
                }
            }
            return d
        },
        ec = {
            prefix: "",
            Kf: "",
            Dd: 0
        },
        fc = function(a, b) {
            a = 1 == a.Wb ? Vb.pe : Vb.Xf;
            null == a && (a = Vb.pe);
            if (3 > b) return ec;
            b = Math.min(14, b);
            var c = a[H(1, b)];
            for (--b; !c && 3 <= b;) c = a[H(1, b)], b--;
            if (!c) return ec;
            a = c.other;
            return a && "0" != a ? (a = /([^0]*)(0+)(.*)/.exec(a)) ? {
                prefix: a[1],
                Kf: a[3],
                Dd: b + 1 - (a[2].length - 1)
            } : ec : ec
        },
        gc = function(a) {
            if (!isFinite(a)) return 0 < a ? a : 0;
            for (var b = 0; 1 <= (a /= 10);) b++;
            return b
        },
        H = function(a, b) {
            z(0 == b % 1, 'Cannot shift by fractional digits "%s".', b);
            if (!a || !isFinite(a) || 0 == b) return a;
            a = String(a).split("e");
            return parseFloat(a[0] + "e" + (parseInt(a[1] || 0, 10) + b))
        },
        lc = function(a, b) {
            z(0 == b % 1, 'Cannot round to fractional digits "%s".', b);
            return a && isFinite(a) ? H(Math.round(H(a, b)), -b) : a
        },
        kc = function(a, b, c) {
            if (!a) return a;
            b = b - gc(a) - 1;
            return b < -c ? lc(a, -c) : lc(a, b)
        };
    var mc = function(a) {
            return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
        },
        nc = mc;
    nc = mc;
    var oc = function(a, b) {
            if (void 0 === b) {
                b = a + "";
                var c = b.indexOf(".");
                b = Math.min(-1 == c ? 0 : b.length - c - 1, 3)
            }
            return 1 == (a | 0) && 0 == b ? "one" : "other"
        },
        pc = oc;
    pc = oc;
    var tc = function(a) {
            this.Vc = a;
            this.Tc = this.Fb = this.Od = null;
            a = Zb;
            var b = Vb;
            if (qc !== a || rc !== b) qc = a, rc = b, sc = new $b;
            this.Oh = sc
        },
        qc = null,
        rc = null,
        sc = null,
        uc = /'([{}#].*?)'/g,
        vc = /''/g;
    tc.prototype.format = function(a) {
        if (this.Vc) {
            this.Od = [];
            var b = wc(this, this.Vc);
            this.Tc = xc(this, b);
            this.Vc = null
        }
        if (this.Tc && 0 != this.Tc.length)
            for (this.Fb = Bb(this.Od), b = [], yc(this, this.Tc, a, !1, b), a = b.join(""), z(-1 == a.search("#"), "Not all # were replaced."); 0 < this.Fb.length;) a = a.replace(this.wd(this.Fb), this.Fb.pop());
        else a = "";
        return a
    };
    var yc = function(a, b, c, d, e) {
            for (var g = 0; g < b.length; g++) switch (b[g].type) {
                case 4:
                    e.push(b[g].value);
                    break;
                case 3:
                    var f = b[g].value,
                        l = a,
                        m = e,
                        r = c[f];
                    t(r) ? (l.Fb.push(r), m.push(l.wd(l.Fb))) : m.push("Undefined parameter - " + f);
                    break;
                case 2:
                    f = b[g].value;
                    l = a;
                    m = c;
                    r = d;
                    var n = e,
                        p = f.xc;
                    t(m[p]) ? (p = f[m[p]], t(p) || (p = f.other, Ka(p, "Invalid option or missing other option for select block.")), yc(l, p, m, r, n)) : n.push("Undefined parameter - " + p);
                    break;
                case 0:
                    f = b[g].value;
                    zc(a, f, c, pc, d, e);
                    break;
                case 1:
                    f = b[g].value;
                    zc(a, f, c, nc,
                        d, e);
                    break;
                default:
                    A("Unrecognized block type: " + b[g].type)
            }
        },
        zc = function(a, b, c, d, e, g) {
            var f = b.xc,
                l = b.Ie,
                m = +c[f];
            isNaN(m) ? g.push("Undefined or invalid parameter - " + f) : (l = m - l, f = b[c[f]], t(f) || (z(0 <= l, "Argument index smaller than offset."), d = d(l), Ha(d, "Invalid plural key."), f = b[d], t(f) || (f = b.other), Ka(f, "Invalid option or missing other option for plural block.")), b = [], yc(a, f, c, e, b), c = b.join(""), Ha(c, "Empty block in plural."), e ? g.push(c) : (a = a.Oh.format(l), g.push(c.replace(/#/g, a))))
        },
        wc = function(a, b) {
            var c =
                a.Od,
                d = v(a.wd, a);
            b = b.replace(vc, function() {
                c.push("'");
                return d(c)
            });
            return b = b.replace(uc, function(e, g) {
                c.push(g);
                return d(c)
            })
        },
        Ac = function(a) {
            var b = 0,
                c = [],
                d = [],
                e = /[{}]/g;
            e.lastIndex = 0;
            for (var g; g = e.exec(a);) {
                var f = g.index;
                "}" == g[0] ? (g = c.pop(), z(t(g) && "{" == g, "No matching { for }."), 0 == c.length && (g = {
                    type: 1
                }, g.value = a.substring(b, f), d.push(g), b = f + 1)) : (0 == c.length && (b = a.substring(b, f), "" != b && d.push({
                    type: 0,
                    value: b
                }), b = f + 1), c.push("{"))
            }
            z(0 == c.length, "There are mismatched { or } in the pattern.");
            b =
                a.substring(b);
            "" != b && d.push({
                type: 0,
                value: b
            });
            return d
        },
        Bc = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
        Cc = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
        Dc = /^\s*(\w+)\s*,\s*select\s*,/,
        xc = function(a, b) {
            var c = [];
            b = Ac(b);
            for (var d = 0; d < b.length; d++) {
                var e = {};
                if (0 == b[d].type) e.type = 4, e.value = b[d].value;
                else if (1 == b[d].type) {
                    var g = b[d].value;
                    switch (Bc.test(g) ? 0 : Cc.test(g) ? 1 : Dc.test(g) ? 2 : /^\s*\w+\s*/.test(g) ? 3 : 5) {
                        case 2:
                            e.type = 2;
                            e.value = Ec(a, b[d].value);
                            break;
                        case 0:
                            e.type = 0;
                            e.value = Fc(a, b[d].value);
                            break;
                        case 1:
                            e.type =
                                1;
                            e.value = Gc(a, b[d].value);
                            break;
                        case 3:
                            e.type = 3;
                            e.value = b[d].value;
                            break;
                        default:
                            A("Unknown block type for pattern: " + b[d].value)
                    }
                } else A("Unknown part of the pattern.");
                c.push(e)
            }
            return c
        },
        Ec = function(a, b) {
            var c = "";
            b = b.replace(Dc, function(l, m) {
                c = m;
                return ""
            });
            var d = {};
            d.xc = c;
            b = Ac(b);
            for (var e = 0; e < b.length;) {
                var g = b[e].value;
                Ha(g, "Missing select key element.");
                e++;
                z(e < b.length, "Missing or invalid select value element.");
                if (1 == b[e].type) var f = xc(a, b[e].value);
                else A("Expected block type.");
                d[g.replace(/\s/g,
                    "")] = f;
                e++
            }
            Ka(d.other, "Missing other key in select statement.");
            return d
        },
        Fc = function(a, b) {
            var c = "",
                d = 0;
            b = b.replace(Bc, function(m, r, n) {
                c = r;
                n && (d = parseInt(n, 10));
                return ""
            });
            var e = {};
            e.xc = c;
            e.Ie = d;
            b = Ac(b);
            for (var g = 0; g < b.length;) {
                var f = b[g].value;
                Ha(f, "Missing plural key element.");
                g++;
                z(g < b.length, "Missing or invalid plural value element.");
                if (1 == b[g].type) var l = xc(a, b[g].value);
                else A("Expected block type.");
                e[f.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = l;
                g++
            }
            Ka(e.other, "Missing other key in plural statement.");
            return e
        },
        Gc = function(a, b) {
            var c = "";
            b = b.replace(Cc, function(l, m) {
                c = m;
                return ""
            });
            var d = {};
            d.xc = c;
            d.Ie = 0;
            b = Ac(b);
            for (var e = 0; e < b.length;) {
                var g = b[e].value;
                Ha(g, "Missing ordinal key element.");
                e++;
                z(e < b.length, "Missing or invalid ordinal value element.");
                if (1 == b[e].type) var f = xc(a, b[e].value);
                else A("Expected block type.");
                d[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = f;
                e++
            }
            Ka(d.other, "Missing other key in selectordinal statement.");
            return d
        };
    tc.prototype.wd = function(a) {
        z(0 < a.length, "Literal array is empty.");
        return "\ufddf_" + (a.length - 1).toString(10) + "_"
    };
    var Ic;
    Ic = {
        ag: {
            Ma: {
                C: {
                    "-1": "yesterday",
                    0: "today",
                    1: "tomorrow"
                },
                K: "one{# day ago}other{# days ago}",
                J: "one{in # day}other{in # days}"
            }
        },
        jg: {
            Ma: {
                C: {
                    0: "this hour"
                },
                K: "one{# hour ago}other{# hours ago}",
                J: "one{in # hour}other{in # hours}"
            },
            SHORT: {
                C: {
                    0: "this hour"
                },
                K: "one{# hr. ago}other{# hr. ago}",
                J: "one{in # hr.}other{in # hr.}"
            }
        },
        sg: {
            Ma: {
                C: {
                    0: "this minute"
                },
                K: "one{# minute ago}other{# minutes ago}",
                J: "one{in # minute}other{in # minutes}"
            },
            SHORT: {
                C: {
                    0: "this minute"
                },
                K: "one{# min. ago}other{# min. ago}",
                J: "one{in # min.}other{in # min.}"
            }
        },
        tg: {
            Ma: {
                C: {
                    "-1": "last month",
                    0: "this month",
                    1: "next month"
                },
                K: "one{# month ago}other{# months ago}",
                J: "one{in # month}other{in # months}"
            },
            SHORT: {
                C: {
                    "-1": "last mo.",
                    0: "this mo.",
                    1: "next mo."
                },
                K: "one{# mo. ago}other{# mo. ago}",
                J: "one{in # mo.}other{in # mo.}"
            }
        },
        Bg: {
            Ma: {
                C: {
                    "-1": "last quarter",
                    0: "this quarter",
                    1: "next quarter"
                },
                K: "one{# quarter ago}other{# quarters ago}",
                J: "one{in # quarter}other{in # quarters}"
            },
            SHORT: {
                C: {
                    "-1": "last qtr.",
                    0: "this qtr.",
                    1: "next qtr."
                },
                K: "one{# qtr. ago}other{# qtrs. ago}",
                J: "one{in # qtr.}other{in # qtrs.}"
            }
        },
        Lg: {
            Ma: {
                C: {
                    0: "now"
                },
                K: "one{# second ago}other{# seconds ago}",
                J: "one{in # second}other{in # seconds}"
            },
            SHORT: {
                C: {
                    0: "now"
                },
                K: "one{# sec. ago}other{# sec. ago}",
                J: "one{in # sec.}other{in # sec.}"
            }
        },
        ah: {
            Ma: {
                C: {
                    "-1": "last week",
                    0: "this week",
                    1: "next week"
                },
                K: "one{# week ago}other{# weeks ago}",
                J: "one{in # week}other{in # weeks}"
            },
            SHORT: {
                C: {
                    "-1": "last wk.",
                    0: "this wk.",
                    1: "next wk."
                },
                K: "one{# wk. ago}other{# wk. ago}",
                J: "one{in # wk.}other{in # wk.}"
            }
        },
        dh: {
            Ma: {
                C: {
                    "-1": "last year",
                    0: "this year",
                    1: "next year"
                },
                K: "one{# year ago}other{# years ago}",
                J: "one{in # year}other{in # years}"
            },
            SHORT: {
                C: {
                    "-1": "last yr.",
                    0: "this yr.",
                    1: "next yr."
                },
                K: "one{# yr. ago}other{# yr. ago}",
                J: "one{in # yr.}other{in # yr.}"
            }
        }
    };
    var Jc = function() {
        z(t(void 0) || t(Ic), "goog.i18n.RelativeDateTimeSymbols or explicit symbols must be defined");
        this.ih = !0;
        this.Zh = 0;
        this.Ua = Ic
    };
    Jc.prototype.format = function(a, b) {
        Ga(a, "Quantity must be a number");
        z(0 <= b && 7 >= b, "Unit must be one of the supported values");
        var c = Kc(this, b);
        Ja(c);
        a: switch (this.Zh) {
            case 2:
                if (void 0 != c.wg) {
                    c = c.wg;
                    break a
                }
            case 1:
                if (void 0 != c.SHORT) {
                    c = c.SHORT;
                    break a
                }
            default:
                c = c.Ma
        }
        var d = a.toString(),
            e = this.ih;
        if (6 == b || 5 == b) e = !0;
        !e && c && c.C && c.C[d] ? a = c.C[d] : c ? (b = Math.abs(a), a = (new tc("{N,plural," + (0 < a || 0 == a && Infinity == 1 / a ? c.J : c.K) + "}")).format({
            N: b
        })) : a = "";
        return a
    };
    var Kc = function(a, b) {
        switch (b) {
            default:
                case 0:
                return a.Ua.dh;
            case 1:
                    return a.Ua.Bg;
            case 2:
                    return a.Ua.tg;
            case 3:
                    return a.Ua.ah;
            case 4:
                    return a.Ua.ag;
            case 5:
                    return a.Ua.jg;
            case 6:
                    return a.Ua.sg;
            case 7:
                    return a.Ua.Lg
        }
    };
    var Lc;
    Lc = function(a, b, c) {
        a = b ? a : -a;
        b = new Jc;
        switch (c) {
            case 0:
                c = 6;
                break;
            case 1:
                c = 5;
                break;
            default:
            case 2:
                c = 4
        }
        return b.format(a, c)
    };
    var Mc = [],
        Nc = [],
        Oc = !1,
        Pc = function(a) {
            Mc[Mc.length] = a;
            if (Oc)
                for (var b = 0; b < Nc.length; b++) a(v(Nc[b].Sf, Nc[b]))
        };
    var Qc;
    a: {
        var Rc = k.navigator;
        if (Rc) {
            var Sc = Rc.userAgent;
            if (Sc) {
                Qc = Sc;
                break a
            }
        }
        Qc = ""
    }
    var I = function(a) {
        return -1 != Qc.indexOf(a)
    };
    Pc(function() {});
    var Tc = function(a) {
        Tc[" "](a);
        return a
    };
    Tc[" "] = pa;
    var Vc = function(a, b) {
        var c = Uc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Wc = I("Opera"),
        J = I("Trident") || I("MSIE"),
        Xc = I("Edge"),
        Yc = I("Gecko") && !(-1 != Qc.toLowerCase().indexOf("webkit") && !I("Edge")) && !(I("Trident") || I("MSIE")) && !I("Edge"),
        Zc = -1 != Qc.toLowerCase().indexOf("webkit") && !I("Edge"),
        $c = function() {
            var a = k.document;
            return a ? a.documentMode : void 0
        },
        ad;
    a: {
        var bd = "",
            cd = function() {
                var a = Qc;
                if (Yc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Xc) return /Edge\/([\d\.]+)/.exec(a);
                if (J) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Zc) return /WebKit\/(\S+)/.exec(a);
                if (Wc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();cd && (bd = cd ? cd[1] : "");
        if (J) {
            var dd = $c();
            if (null != dd && dd > parseFloat(bd)) {
                ad = String(dd);
                break a
            }
        }
        ad = bd
    }
    var ed = ad,
        Uc = {},
        fd = function(a) {
            return Vc(a, function() {
                for (var b = 0, c = Qa(String(ed)).split("."), d = Qa(String(a)).split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
                    var f = c[g] || "",
                        l = d[g] || "";
                    do {
                        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                        l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                        if (0 == f[0].length && 0 == l[0].length) break;
                        b = Za(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || Za(0 == f[2].length, 0 == l[2].length) || Za(f[2], l[2]);
                        f = f[3];
                        l = l[3]
                    } while (0 == b)
                }
                return 0 <= b
            })
        },
        gd;
    var hd = k.document;
    gd = hd && J ? $c() || ("CSS1Compat" == hd.compatMode ? parseInt(ed, 10) : 5) : void 0;
    var id = function(a) {
            var b = k.onerror,
                c = !1;
            Zc && !fd("535.3") && (c = !c);
            k.onerror = function(d, e, g, f, l) {
                b && b(d, e, g, f, l);
                a({
                    message: d,
                    fileName: e,
                    line: g,
                    lineNumber: g,
                    ni: f,
                    error: l
                });
                return c
            }
        },
        kd = function(a) {
            var b = oa("window.location.href");
            null == a && (a = 'Unknown Error of type "null/undefined"');
            if (u(a)) return {
                message: a,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: b,
                stack: "Not available"
            };
            var c = !1;
            try {
                var d = a.lineNumber || a.line || "Not available"
            } catch (g) {
                d = "Not available", c = !0
            }
            try {
                var e = a.fileName ||
                    a.filename || a.sourceURL || k.$googDebugFname || b
            } catch (g) {
                e = "Not available", c = !0
            }
            return !c && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : (b = a.message, null == b && (b = a.constructor && a.constructor instanceof Function ? 'Unknown Error of type "' + (a.constructor.name ? a.constructor.name : jd(a.constructor)) + '"' : "Unknown Error of unknown type"), {
                message: b,
                name: a.name || "UnknownError",
                lineNumber: d,
                fileName: e,
                stack: a.stack || "Not available"
            })
        },
        ld = function(a) {
            var b = ld;
            var c = Error();
            if (Error.captureStackTrace) Error.captureStackTrace(c,
                b), b = String(c.stack);
            else {
                try {
                    throw c;
                } catch (e) {
                    c = e
                }
                b = (b = c.stack) ? String(b) : null
            }
            if (b) return b;
            b = [];
            c = arguments.callee.caller;
            for (var d = 0; c && (!a || d < a);) {
                b.push(jd(c));
                b.push("()\n");
                try {
                    c = c.caller
                } catch (e) {
                    b.push("[exception trying to get caller]\n");
                    break
                }
                d++;
                if (50 <= d) {
                    b.push("[...long stack...]");
                    break
                }
            }
            a && d >= a ? b.push("[...reached max depth limit...]") : b.push("[end]");
            return b.join("")
        },
        jd = function(a) {
            if (md[a]) return md[a];
            a = String(a);
            if (!md[a]) {
                var b = /function\s+([^\(]+)/m.exec(a);
                md[a] = b ? b[1] :
                    "[Anonymous]"
            }
            return md[a]
        },
        md = {},
        nd = Object.freeze || function(a) {
            return a
        };
    var od = function(a, b, c) {
        this.reset(a, b, c, void 0, void 0)
    };
    od.prototype.$e = null;
    var pd = 0;
    od.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || pd++;
        d || x();
        this.dc = a;
        this.Mh = b;
        delete this.$e
    };
    od.prototype.Df = function(a) {
        this.dc = a
    };
    od.prototype.getMessage = function() {
        return this.Mh
    };
    var qd = function(a) {
            this.wf = a;
            this.nf = this.zd = this.dc = this.Sc = null
        },
        rd = function(a, b) {
            this.name = a;
            this.value = b
        };
    rd.prototype.toString = function() {
        return this.name
    };
    var sd = new rd("SEVERE", 1E3),
        td = new rd("WARNING", 900),
        ud = new rd("INFO", 800),
        vd = new rd("CONFIG", 700),
        wd = new rd("FINE", 500);
    qd.prototype.getName = function() {
        return this.wf
    };
    qd.prototype.getParent = function() {
        return this.Sc
    };
    qd.prototype.af = function() {
        this.zd || (this.zd = {});
        return this.zd
    };
    qd.prototype.Df = function(a) {
        this.dc = a
    };
    var xd = function(a) {
        if (a.dc) return a.dc;
        if (a.Sc) return xd(a.Sc);
        A("Root logger has no level set.");
        return null
    };
    qd.prototype.log = function(a, b, c) {
        if (a.value >= xd(this).value)
            for (ta(b) && (b = b()), a = new od(a, String(b), this.wf), c && (a.$e = c), c = this; c;) {
                var d = c,
                    e = a;
                if (d.nf)
                    for (var g = 0; b = d.nf[g]; g++) b(e);
                c = c.getParent()
            }
    };
    qd.prototype.info = function(a, b) {
        this.log(ud, a, b)
    };
    var yd = {},
        zd = null,
        Ad = function(a) {
            zd || (zd = new qd(""), yd[""] = zd, zd.Df(vd));
            var b;
            if (!(b = yd[a])) {
                b = new qd(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1);
                c = Ad(a.substr(0, c));
                c.af()[d] = b;
                b.Sc = c;
                yd[a] = b
            }
            return b
        };
    var Bd = "StopIteration" in k ? k.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        Cd = function() {};
    Cd.prototype.next = function() {
        throw Bd;
    };
    Cd.prototype.uc = function() {
        return this
    };
    var Dd = function(a) {
            if (a instanceof Cd) return a;
            if ("function" == typeof a.uc) return a.uc(!1);
            if (sa(a)) {
                var b = 0,
                    c = new Cd;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) throw Bd;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Ed = function(a, b, c) {
            if (sa(a)) try {
                C(a, b, c)
            } catch (d) {
                if (d !== Bd) throw d;
            } else {
                a = Dd(a);
                try {
                    for (;;) b.call(c, a.next(), void 0, a)
                } catch (d) {
                    if (d !== Bd) throw d;
                }
            }
        };
    var Fd = function(a, b) {
        a && a.log(wd, b, void 0)
    };
    var Gd = function(a, b) {
        this.qa = {};
        this.l = [];
        this.qc = this.j = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    h = Gd.prototype;
    h.Ic = function() {
        return this.j
    };
    h.ma = function() {
        Hd(this);
        for (var a = [], b = 0; b < this.l.length; b++) a.push(this.qa[this.l[b]]);
        return a
    };
    h.ka = function() {
        Hd(this);
        return this.l.concat()
    };
    h.yb = function(a) {
        return Id(this.qa, a)
    };
    h.Pd = function() {
        return 0 == this.j
    };
    h.clear = function() {
        this.qa = {};
        this.qc = this.j = this.l.length = 0
    };
    h.remove = function(a) {
        return Id(this.qa, a) ? (delete this.qa[a], this.j--, this.qc++, this.l.length > 2 * this.j && Hd(this), !0) : !1
    };
    var Hd = function(a) {
        if (a.j != a.l.length) {
            for (var b = 0, c = 0; b < a.l.length;) {
                var d = a.l[b];
                Id(a.qa, d) && (a.l[c++] = d);
                b++
            }
            a.l.length = c
        }
        if (a.j != a.l.length) {
            var e = {};
            for (c = b = 0; b < a.l.length;) d = a.l[b], Id(e, d) || (a.l[c++] = d, e[d] = 1), b++;
            a.l.length = c
        }
    };
    h = Gd.prototype;
    h.get = function(a, b) {
        return Id(this.qa, a) ? this.qa[a] : b
    };
    h.set = function(a, b) {
        Id(this.qa, a) || (this.j++, this.l.push(a), this.qc++);
        this.qa[a] = b
    };
    h.addAll = function(a) {
        if (a instanceof Gd)
            for (var b = a.ka(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
        else
            for (b in a) this.set(b, a[b])
    };
    h.forEach = function(a, b) {
        for (var c = this.ka(), d = 0; d < c.length; d++) {
            var e = c[d],
                g = this.get(e);
            a.call(b, g, e, this)
        }
    };
    h.clone = function() {
        return new Gd(this)
    };
    h.uc = function(a) {
        Hd(this);
        var b = 0,
            c = this.qc,
            d = this,
            e = new Cd;
        e.next = function() {
            if (c != d.qc) throw Error("The map has changed since the iterator was created");
            if (b >= d.l.length) throw Bd;
            var g = d.l[b++];
            return a ? g : d.qa[g]
        };
        return e
    };
    var Id = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Jd = function() {
        this.ab = this.ab;
        this.lb = this.lb
    };
    Jd.prototype.ab = !1;
    Jd.prototype.$a = function() {
        this.ab || (this.ab = !0, this.D())
    };
    Jd.prototype.D = function() {
        if (this.lb)
            for (; this.lb.length;) this.lb.shift()()
    };
    var Kd = function(a) {
        a && "function" == typeof a.$a && a.$a()
    };
    var Ld = function(a, b) {
        Jd.call(this);
        this.Ze = this.Bd = null;
        this.vf = b;
        this.eb = [];
        if (a > this.vf) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
        for (b = 0; b < a; b++) this.eb.push(this.Ec())
    };
    y(Ld, Jd);
    var Md = function(a, b) {
            a.Bd = b
        },
        Pd = function(a) {
            return a.eb.length ? a.eb.pop() : a.Ec()
        },
        Rd = function(a, b) {
            a.eb.length < a.vf ? a.eb.push(b) : Qd(a, b)
        };
    Ld.prototype.Ec = function() {
        return this.Bd ? this.Bd() : {}
    };
    var Qd = function(a, b) {
        if (a.Ze) a.Ze(b);
        else if (ua(b))
            if (ta(b.$a)) b.$a();
            else
                for (var c in b) delete b[c]
    };
    Ld.prototype.D = function() {
        Ld.O.D.call(this);
        for (var a = this.eb; a.length;) Qd(this, a.pop());
        delete this.eb
    };
    var Ud = function() {
        this.W = [];
        this.Ia = new Gd;
        this.Mf = this.gd = this.hd = this.If = 0;
        this.rb = new Gd;
        this.Te = this.ke = 0;
        this.Nh = 1;
        this.zb = new Ld(0, 4E3);
        this.zb.Ec = function() {
            return new Sd
        };
        this.ce = new Ld(0, 50);
        this.ce.Ec = function() {
            return new Td
        };
        var a = this;
        this.Lc = new Ld(0, 2E3);
        Md(this.Lc, function() {
            return a.Nh++
        });
        this.Xe = 3;
        this.sb = {}
    };
    Ud.prototype.G = Ad("goog.debug.Trace");
    Ud.prototype.rd = 1E3;
    var Td = function() {
        this.pc = this.time = this.count = 0
    };
    Td.prototype.toString = function() {
        var a = [];
        a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
        this.pc && a.push(" [VarAlloc = ", this.pc, "]");
        return a.join("")
    };
    var Sd = function() {},
        Xd = function(a, b, c, d) {
            var e = []; - 1 == c ? e.push("    ") : e.push(Vd(a.Fc - c));
            e.push(" ", Wd(a.Fc - b));
            0 == a.$b ? e.push(" Start        ") : 1 == a.$b ? (e.push(" Done "), e.push(Vd(a.Jf - a.startTime), " ms ")) : e.push(" Comment      ");
            e.push(d, a);
            0 < a.mc && e.push("[VarAlloc ", a.mc, "] ");
            return e.join("")
        };
    Sd.prototype.toString = function() {
        return null == this.type ? z(this.Bc) : "[" + this.type + "] " + this.Bc
    };
    var Yd = {
            si: !0
        },
        Zd = {};
    Ud.prototype.removeAllListeners = function() {
        this.sb = {}
    };
    var $d = function(a) {
        a.sb.stop && Ed(a.Ia, function(b) {
            this.sb.stop(b.id, Yd)
        }, a);
        a.Ia.clear()
    };
    Ud.prototype.reset = function(a) {
        this.Xe = a;
        $d(this);
        ae(this);
        this.If = x();
        this.Te = this.ke = this.Mf = this.gd = this.hd = 0;
        a = this.rb.ka();
        for (var b = 0; b < a.length; b++) {
            var c = this.rb.get(a[b]);
            c.count = 0;
            c.time = 0;
            c.pc = 0;
            Rd(this.ce, c)
        }
        this.rb.clear()
    };
    var ae = function(a) {
            for (var b = 0; b < a.W.length; b++) {
                var c = a.W[b];
                c.id ? a.Ia.yb(c.id) || (Rd(a.Lc, c.id), Rd(a.zb, c)) : Rd(a.zb, c)
            }
            a.W.length = 0
        },
        be = function() {
            var a = K.pi;
            return a && a.isTracing() ? a.totalVarAlloc : -1
        };
    Ud.prototype.toString = function() {
        for (var a = [], b = -1, c = [], d = 0; d < this.W.length; d++) {
            var e = this.W[d];
            1 == e.$b && c.pop();
            a.push(" ", Xd(e, this.If, b, c.join("")));
            b = e.Fc;
            a.push("\n");
            0 == e.$b && c.push("|  ")
        }
        if (0 != this.Ia.Ic()) {
            var g = x();
            a.push(" Unstopped timers:\n");
            Ed(this.Ia, function(f) {
                a.push("  ", f, " (", g - f.startTime, " ms, started at ", Wd(f.startTime), ")\n")
            })
        }
        b = this.rb.ka();
        for (d = 0; d < b.length; d++) c = this.rb.get(b[d]), 1 < c.count && a.push(" TOTAL ", c, "\n");
        a.push("Total tracers created ", this.ke, "\n", "Total comments created ",
            this.Te, "\n", "Overhead start: ", this.hd, " ms\n", "Overhead end: ", this.gd, " ms\n", "Overhead comment: ", this.Mf, " ms\n");
        return a.join("")
    };
    var Vd = function(a) {
            a = Math.round(a);
            var b = "";
            1E3 > a && (b = " ");
            100 > a && (b = "  ");
            10 > a && (b = "   ");
            return b + a
        },
        Wd = function(a) {
            a = Math.round(a);
            return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
        },
        K = new Ud;
    var ce = function(a) {
        Jd.call(this);
        this.zh = a;
        this.bi = !0;
        this.Uh = !1
    };
    y(ce, Jd);
    ce.prototype.hh = !1;
    ce.prototype.Sf = function(a) {
        return de(this, Ia(a))
    };
    var fe = function(a, b) {
            Ia(b);
            return b[ee(a, !1)] || b
        },
        ee = function(a, b) {
            return (b ? "__wrapper_" : "__protected_") + (a[va] || (a[va] = ++wa)) + "__"
        },
        de = function(a, b) {
            var c = ee(a, !0);
            b[c] || ((b[c] = ge(a, b))[ee(a, !1)] = b);
            return b[c]
        },
        ge = function(a, b) {
            var c = a.hh;
            if (c) var d = ld(15);
            var e = function() {
                if (a.ab) return b.apply(this, arguments);
                if (c) {
                    var g = d,
                        f = [];
                    f.push("##PE_STACK_START##");
                    f.push(g.replace(/(\r\n|\r|\n)/g, "##STACK_BR##"));
                    f.push("##PE_STACK_END##");
                    f = "protectedEntryPoint: " + f.join("");
                    g = x();
                    var l = be(),
                        m = K.Ia.Ic();
                    K.W.length + m > K.rd && (m > K.rd / 2 && ((m = K.G) && m.log(td, "Giant thread trace. Clearing outstanding events.", void 0), $d(K)), K.W.length > K.rd / 2 && ((m = K.G) && m.log(td, "Giant thread trace. Clearing to avoid memory leak.", void 0), ae(K)));
                    m = Pd(K.zb);
                    m.Jf = void 0;
                    m.mc = l;
                    m.$b = 0;
                    m.id = Pd(K.Lc);
                    m.Bc = f;
                    m.type = void 0;
                    K.W.push(m);
                    K.Ia.set(String(m.id), m);
                    K.ke++;
                    f = x();
                    m.startTime = m.Fc = f;
                    K.hd += f - g;
                    K.sb.start && K.sb.start(m.id, m.toString());
                    g = m.id
                }
                try {
                    return b.apply(this, arguments)
                } catch (q) {
                    if (!(q && "object" === typeof q && q.message &&
                            0 == q.message.indexOf("Error in protected function: ") || "string" === typeof q && 0 == q.indexOf("Error in protected function: "))) {
                        a.zh(q);
                        if (!a.bi) throw a.Uh && ("object" === typeof q && q && "message" in q ? q.message = "Error in protected function: " + q.message : q = "Error in protected function: " + q), q && q.stack && Error.captureStackTrace && k.console && k.console.error(q.message, q.stack), q;
                        throw new he(q);
                    }
                } finally {
                    if (c && (l = g, g = x(), m = K.Xe, f = K.Ia.get(String(l)), null != f)) {
                        Ga(l);
                        K.sb.stop && K.sb.stop(Number(l), Zd);
                        K.Ia.remove(String(l));
                        l = g - f.startTime;
                        if (l < m)
                            for (m = K.W.length - 1; 0 <= m; m--) {
                                if (K.W[m] == f) {
                                    K.W.splice(m, 1);
                                    Rd(K.Lc, f.id);
                                    Rd(K.zb, f);
                                    break
                                }
                            } else {
                                var r = Pd(K.zb);
                                r.id = void 0;
                                r.$b = 1;
                                r.startTime = f.startTime;
                                r.Bc = f.Bc;
                                r.type = f.type;
                                r.Jf = r.Fc = g;
                                K.W.push(r)
                            }
                        m = f.type;
                        var n = null;
                        if (m) {
                            n = K;
                            var p = n.rb.get(m);
                            p || (p = Pd(n.ce), p.type = m, n.rb.set(m, p));
                            n = p;
                            n.count++;
                            n.time += l
                        }
                        r && (r.mc = be(), n && (n.pc += r.mc - f.mc));
                        r = x();
                        K.gd += r - g
                    }
                }
            };
            e[ee(a, !1)] = b;
            return e
        },
        ie = function(a, b) {
            var c = oa("window"),
                d = c[b];
            c[b] = function(e, g) {
                u(e) && (e = za(Ba, e));
                arguments[0] =
                    e = de(a, e);
                if (d.apply) return d.apply(this, arguments);
                var f = e;
                if (2 < arguments.length) {
                    var l = Array.prototype.slice.call(arguments, 2);
                    f = function() {
                        e.apply(this, l)
                    }
                }
                return d(f, g)
            };
            c[b][ee(a, !1)] = d
        };
    ce.prototype.D = function() {
        var a = oa("window");
        a.setTimeout = fe(this, a.setTimeout);
        a.setInterval = fe(this, a.setInterval);
        ce.O.D.call(this)
    };
    var he = function(a) {
        Ca.call(this, "Error in protected function: " + (a && a.message ? String(a.message) : String(a)));
        (a = a && a.stack) && u(a) && (this.stack = a)
    };
    y(he, Ca);
    var je = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.nb = !1;
        this.Cf = !0
    };
    je.prototype.stopPropagation = function() {
        this.nb = !0
    };
    je.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Cf = !1
    };
    var ke = !J || 9 <= Number(gd),
        le = J && !fd("9"),
        me = function() {
            if (!k.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                k.addEventListener("test", pa, b), k.removeEventListener("test", pa, b)
            } catch (c) {}
            return a
        }();
    var ne;
    ne = Zc ? "webkitAnimationIteration" : Wc ? "oanimationiteration" : "animationiteration";
    var oe = function(a, b) {
        je.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.Ab = null;
        a && this.pa(a, b)
    };
    y(oe, je);
    var pe = nd({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    oe.prototype.pa = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (Yc) {
                a: {
                    try {
                        Tc(b.nodeName);
                        var e = !0;
                        break a
                    } catch (g) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
            d.screenY || 0) : (this.offsetX = Zc || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Zc || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId =
            a.pointerId || 0;
        this.pointerType = u(a.pointerType) ? a.pointerType : pe[a.pointerType] || "";
        this.state = a.state;
        this.Ab = a;
        a.defaultPrevented && this.preventDefault()
    };
    oe.prototype.stopPropagation = function() {
        oe.O.stopPropagation.call(this);
        this.Ab.stopPropagation ? this.Ab.stopPropagation() : this.Ab.cancelBubble = !0
    };
    oe.prototype.preventDefault = function() {
        oe.O.preventDefault.call(this);
        var a = this.Ab;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, le) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var qe = "closure_listenable_" + (1E6 * Math.random() | 0),
        re = function(a) {
            return !(!a || !a[qe])
        },
        se = 0;
    var te = function(a, b, c, d, e) {
            this.listener = a;
            this.$c = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Kc = e;
            this.key = ++se;
            this.Mb = this.zc = !1
        },
        ue = function(a) {
            a.Mb = !0;
            a.listener = null;
            a.$c = null;
            a.src = null;
            a.Kc = null
        };
    var ve = function(a) {
        this.src = a;
        this.H = {};
        this.nc = 0
    };
    ve.prototype.add = function(a, b, c, d, e) {
        var g = a.toString();
        a = this.H[g];
        a || (a = this.H[g] = [], this.nc++);
        var f = we(a, b, d, e); - 1 < f ? (b = a[f], c || (b.zc = !1)) : (b = new te(b, this.src, g, !!d, e), b.zc = c, a.push(b));
        return b
    };
    ve.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.H)) return !1;
        var e = this.H[a];
        b = we(e, b, c, d);
        return -1 < b ? (ue(e[b]), yb(e, b), 0 == e.length && (delete this.H[a], this.nc--), !0) : !1
    };
    var xe = function(a, b) {
        var c = b.type;
        c in a.H && zb(a.H[c], b) && (ue(b), 0 == a.H[c].length && (delete a.H[c], a.nc--))
    };
    ve.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.H)
            if (!a || c == a) {
                for (var d = this.H[c], e = 0; e < d.length; e++) ++b, ue(d[e]);
                delete this.H[c];
                this.nc--
            }
        return b
    };
    ve.prototype.ac = function(a, b, c, d) {
        a = this.H[a.toString()];
        var e = -1;
        a && (e = we(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    ve.prototype.hasListener = function(a, b) {
        var c = t(a),
            d = c ? a.toString() : "",
            e = t(b);
        return Hb(this.H, function(g) {
            for (var f = 0; f < g.length; ++f)
                if (!(c && g[f].type != d || e && g[f].capture != b)) return !0;
            return !1
        })
    };
    var we = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.Mb && g.listener == b && g.capture == !!c && g.Kc == d) return e
        }
        return -1
    };
    var ye = "closure_lm_" + (1E6 * Math.random() | 0),
        ze = {},
        Ae = 0,
        L = function(a, b, c, d, e) {
            if (d && d.once) return Be(a, b, c, d, e);
            if (ra(b)) {
                for (var g = 0; g < b.length; g++) L(a, b[g], c, d, e);
                return null
            }
            c = Ce(c);
            return re(a) ? a.Sa(b, c, ua(d) ? !!d.capture : !!d, e) : De(a, b, c, !1, d, e)
        },
        De = function(a, b, c, d, e, g) {
            if (!b) throw Error("Invalid event type");
            var f = ua(e) ? !!e.capture : !!e,
                l = Ee(a);
            l || (a[ye] = l = new ve(a));
            c = l.add(b, c, d, f, g);
            if (c.$c) return c;
            d = Fe();
            c.$c = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) me || (e = f), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                d, e);
            else if (a.attachEvent) a.attachEvent(Ge(b.toString()), d);
            else if (a.addListener && a.removeListener) z("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Ae++;
            return c
        },
        Fe = function() {
            var a = He,
                b = ke ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        Be = function(a, b, c, d, e) {
            if (ra(b)) {
                for (var g = 0; g < b.length; g++) Be(a, b[g], c, d, e);
                return null
            }
            c = Ce(c);
            return re(a) ?
                a.Qd(b, c, ua(d) ? !!d.capture : !!d, e) : De(a, b, c, !0, d, e)
        },
        M = function(a, b, c, d, e) {
            if (ra(b))
                for (var g = 0; g < b.length; g++) M(a, b[g], c, d, e);
            else d = ua(d) ? !!d.capture : !!d, c = Ce(c), re(a) ? a.me(b, c, d, e) : a && (a = Ee(a)) && (b = a.ac(b, c, d, e)) && Ie(b)
        },
        Ie = function(a) {
            if (!ma(a) && a && !a.Mb) {
                var b = a.src;
                if (re(b)) xe(b.ia, a);
                else {
                    var c = a.type,
                        d = a.$c;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ge(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    Ae--;
                    (c = Ee(b)) ? (xe(c, a), 0 == c.nc && (c.src =
                        null, b[ye] = null)) : ue(a)
                }
            }
        },
        Ge = function(a) {
            return a in ze ? ze[a] : ze[a] = "on" + a
        },
        Ke = function(a, b, c, d) {
            var e = !0;
            if (a = Ee(a))
                if (b = a.H[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var g = b[a];
                        g && g.capture == c && !g.Mb && (g = Je(g, d), e = e && !1 !== g)
                    }
            return e
        },
        Je = function(a, b) {
            var c = a.listener,
                d = a.Kc || a.src;
            a.zc && Ie(a);
            return c.call(d, b)
        },
        He = function(a, b) {
            if (a.Mb) return !0;
            if (!ke) {
                var c = b || oa("window.event");
                b = new oe(c, this);
                var d = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (f) {
                            e = !0
                        }
                        if (e || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (e = b.currentTarget; e; e = e.parentNode) c.push(e);a = a.type;
                    for (e = c.length - 1; !b.nb && 0 <= e; e--) {
                        b.currentTarget = c[e];
                        var g = Ke(c[e], a, !0, b);
                        d = d && g
                    }
                    for (e = 0; !b.nb && e < c.length; e++) b.currentTarget = c[e],
                    g = Ke(c[e], a, !1, b),
                    d = d && g
                }
                return d
            }
            return Je(a, new oe(b, this))
        },
        Ee = function(a) {
            a = a[ye];
            return a instanceof ve ? a : null
        },
        Le = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Ce = function(a) {
            z(a, "Listener can not be null.");
            if (ta(a)) return a;
            z(a.handleEvent, "An object listener must have handleEvent method.");
            a[Le] || (a[Le] = function(b) {
                return a.handleEvent(b)
            });
            return a[Le]
        };
    Pc(function(a) {
        He = a(He)
    });
    var N = function() {
        Jd.call(this);
        this.ia = new ve(this);
        this.gh = this;
        this.Vd = null
    };
    y(N, Jd);
    N.prototype[qe] = !0;
    h = N.prototype;
    h.addEventListener = function(a, b, c, d) {
        L(this, a, b, c, d)
    };
    h.removeEventListener = function(a, b, c, d) {
        M(this, a, b, c, d)
    };
    h.dispatchEvent = function(a) {
        Me(this);
        var b = this.Vd;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.Vd) c.push(b), z(1E3 > ++d, "infinite loop")
        }
        b = this.gh;
        d = a.type || a;
        if (u(a)) a = new je(a, b);
        else if (a instanceof je) a.target = a.target || b;
        else {
            var e = a;
            a = new je(d, b);
            Jb(a, e)
        }
        e = !0;
        if (c)
            for (var g = c.length - 1; !a.nb && 0 <= g; g--) {
                var f = a.currentTarget = c[g];
                e = Ne(f, d, !0, a) && e
            }
        a.nb || (f = a.currentTarget = b, e = Ne(f, d, !0, a) && e, a.nb || (e = Ne(f, d, !1, a) && e));
        if (c)
            for (g = 0; !a.nb && g < c.length; g++) f = a.currentTarget = c[g], e = Ne(f, d, !1, a) && e;
        return e
    };
    h.D = function() {
        N.O.D.call(this);
        this.removeAllListeners();
        this.Vd = null
    };
    h.Sa = function(a, b, c, d) {
        Me(this);
        return this.ia.add(String(a), b, !1, c, d)
    };
    h.Qd = function(a, b, c, d) {
        return this.ia.add(String(a), b, !0, c, d)
    };
    h.me = function(a, b, c, d) {
        this.ia.remove(String(a), b, c, d)
    };
    h.removeAllListeners = function(a) {
        return this.ia ? this.ia.removeAll(a) : 0
    };
    var Ne = function(a, b, c, d) {
        b = a.ia.H[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, g = 0; g < b.length; ++g) {
            var f = b[g];
            if (f && !f.Mb && f.capture == c) {
                var l = f.listener,
                    m = f.Kc || f.src;
                f.zc && xe(a.ia, f);
                e = !1 !== l.call(m, d) && e
            }
        }
        return e && 0 != d.Cf
    };
    N.prototype.ac = function(a, b, c, d) {
        return this.ia.ac(String(a), b, c, d)
    };
    N.prototype.hasListener = function(a, b) {
        return this.ia.hasListener(t(a) ? String(a) : void 0, b)
    };
    var Me = function(a) {
        z(a.ia, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var Oe = function(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        },
        Pe = function(a) {
            a = String(a);
            if (Oe(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        };
    var Qe = function() {};
    Qe.prototype.Pe = null;
    Qe.prototype.getOptions = function() {
        var a;
        (a = this.Pe) || (a = {}, Re(this) && (a[0] = !0, a[1] = !0), a = this.Pe = a);
        return a
    };
    var Se, Te = function() {};
    y(Te, Qe);
    var Ue = function(a) {
            return (a = Re(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        Re = function(a) {
            if (!a.rf && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.rf = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.rf
        };
    Se = new Te;
    var Ve = function(a) {
            if (a.ma && "function" == typeof a.ma) return a.ma();
            if (u(a)) return a.split("");
            if (sa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            b = [];
            c = 0;
            for (d in a) b[c++] = a[d];
            return b
        },
        We = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (sa(a) || u(a)) C(a, b, c);
            else {
                if (a.ka && "function" == typeof a.ka) var d = a.ka();
                else if (a.ma && "function" == typeof a.ma) d = void 0;
                else if (sa(a) || u(a)) {
                    d = [];
                    for (var e = a.length, g = 0; g < e; g++) d.push(g)
                } else
                    for (g in d = [], e = 0, a) d[e++] =
                        g;
                e = Ve(a);
                g = e.length;
                for (var f = 0; f < g; f++) b.call(c, e[f], d && d[f], a)
            }
        };
    var Xe = function(a, b) {
        N.call(this);
        this.Pc = a || 1;
        this.kc = b || k;
        this.Oe = v(this.$h, this);
        this.uf = x()
    };
    y(Xe, N);
    h = Xe.prototype;
    h.enabled = !1;
    h.v = null;
    h.setInterval = function(a) {
        this.Pc = a;
        this.v && this.enabled ? (this.stop(), this.start()) : this.v && this.stop()
    };
    h.$h = function() {
        if (this.enabled) {
            var a = x() - this.uf;
            0 < a && a < .8 * this.Pc ? this.v = this.kc.setTimeout(this.Oe, this.Pc - a) : (this.v && (this.kc.clearTimeout(this.v), this.v = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    h.start = function() {
        this.enabled = !0;
        this.v || (this.v = this.kc.setTimeout(this.Oe, this.Pc), this.uf = x())
    };
    h.stop = function() {
        this.enabled = !1;
        this.v && (this.kc.clearTimeout(this.v), this.v = null)
    };
    h.D = function() {
        Xe.O.D.call(this);
        this.stop();
        delete this.kc
    };
    var Ye = function(a, b, c) {
        if (ta(a)) c && (a = v(a, c));
        else if (a && "function" == typeof a.handleEvent) a = v(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0)
    };
    var Ze = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        $e = function(a) {
            return a ? decodeURI(a) : a
        },
        af = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var g = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else g = a[c];
                    b(g, e ? $a(e) : "")
                }
            }
        },
        bf = function(a, b) {
            if (!b) return a;
            var c = a.indexOf("#");
            0 > c && (c = a.length);
            var d = a.indexOf("?");
            if (0 > d || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.substr(0,
                d), e, a.substr(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        },
        cf = function(a, b, c) {
            Ha(a);
            if (ra(b)) {
                Ka(b);
                for (var d = 0; d < b.length; d++) cf(a, String(b[d]), c)
            } else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
        },
        df = function(a, b) {
            z(0 == Math.max(a.length - (b || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
            var c = [];
            for (b = b || 0; b < a.length; b += 2) cf(a[b], a[b + 1], c);
            return c.join("&")
        },
        ef = function(a) {
            var b = [],
                c;
            for (c in a) cf(c, a[c], b);
            return b.join("&")
        },
        ff =
        function(a, b) {
            var c = 2 == arguments.length ? df(arguments[1], 0) : df(arguments, 1);
            return bf(a, c)
        };
    var O = function(a) {
        N.call(this);
        this.headers = new Gd;
        this.nd = a || null;
        this.Na = !1;
        this.md = this.f = null;
        this.cc = this.tf = this.Qc = "";
        this.hb = this.Nd = this.Oc = this.Gd = !1;
        this.Pb = 0;
        this.fd = null;
        this.bd = "";
        this.ld = this.Vh = this.Rf = !1
    };
    y(O, N);
    O.prototype.G = Ad("goog.net.XhrIo");
    var gf = /^https?$/i,
        hf = ["POST", "PUT"],
        jf = [],
        kf = function(a, b, c, d, e, g) {
            var f = new O;
            jf.push(f);
            b && f.Sa("complete", b);
            f.Qd("ready", f.rh);
            g && (f.Pb = Math.max(0, g));
            f.send(a, c, d, e)
        };
    O.prototype.rh = function() {
        this.$a();
        zb(jf, this)
    };
    O.prototype.send = function(a, b, c, d) {
        if (this.f) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Qc + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.Qc = a;
        this.cc = "";
        this.tf = b;
        this.Gd = !1;
        this.Na = !0;
        this.f = this.nd ? Ue(this.nd) : Ue(Se);
        this.md = this.nd ? this.nd.getOptions() : Se.getOptions();
        this.f.onreadystatechange = v(this.yf, this);
        this.Vh && "onprogress" in this.f && (this.f.onprogress = v(function(g) {
            this.xf(g, !0)
        }, this), this.f.upload && (this.f.upload.onprogress = v(this.xf, this)));
        try {
            Fd(this.G,
                lf(this, "Opening Xhr")), this.Nd = !0, this.f.open(b, String(a), !0), this.Nd = !1
        } catch (g) {
            Fd(this.G, lf(this, "Error opening Xhr: " + g.message));
            mf(this, g);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && We(d, function(g, f) {
            e.set(f, g)
        });
        d = tb(e.ka());
        c = k.FormData && a instanceof k.FormData;
        !ub(hf, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(g, f) {
            this.f.setRequestHeader(f, g)
        }, this);
        this.bd && (this.f.responseType = this.bd);
        "withCredentials" in this.f && this.f.withCredentials !==
            this.Rf && (this.f.withCredentials = this.Rf);
        try {
            nf(this), 0 < this.Pb && (this.ld = of (this.f), Fd(this.G, lf(this, "Will abort after " + this.Pb + "ms if incomplete, xhr2 " + this.ld)), this.ld ? (this.f.timeout = this.Pb, this.f.ontimeout = v(this.Lf, this)) : this.fd = Ye(this.Lf, this.Pb, this)), Fd(this.G, lf(this, "Sending request")), this.Oc = !0, this.f.send(a), this.Oc = !1
        } catch (g) {
            Fd(this.G, lf(this, "Send error: " + g.message)), mf(this, g)
        }
    };
    var of = function(a) {
        return J && fd(9) && ma(a.timeout) && t(a.ontimeout)
    }, sb = function(a) {
        return "content-type" == a.toLowerCase()
    };
    O.prototype.Lf = function() {
        "undefined" != typeof la && this.f && (this.cc = "Timed out after " + this.Pb + "ms, aborting", Fd(this.G, lf(this, this.cc)), this.dispatchEvent("timeout"), this.abort(8))
    };
    var mf = function(a, b) {
            a.Na = !1;
            a.f && (a.hb = !0, a.f.abort(), a.hb = !1);
            a.cc = b;
            pf(a);
            qf(a)
        },
        pf = function(a) {
            a.Gd || (a.Gd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    O.prototype.abort = function() {
        this.f && this.Na && (Fd(this.G, lf(this, "Aborting")), this.Na = !1, this.hb = !0, this.f.abort(), this.hb = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), qf(this))
    };
    O.prototype.D = function() {
        this.f && (this.Na && (this.Na = !1, this.hb = !0, this.f.abort(), this.hb = !1), qf(this, !0));
        O.O.D.call(this)
    };
    O.prototype.yf = function() {
        this.ab || (this.Nd || this.Oc || this.hb ? rf(this) : this.Sd())
    };
    O.prototype.Sd = function() {
        rf(this)
    };
    var rf = function(a) {
        if (a.Na && "undefined" != typeof la)
            if (a.md[1] && 4 == sf(a) && 2 == P(a)) Fd(a.G, lf(a, "Local request error detected and ignored"));
            else if (a.Oc && 4 == sf(a)) Ye(a.yf, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == sf(a)) {
            Fd(a.G, lf(a, "Request complete"));
            a.Na = !1;
            try {
                var b = P(a);
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var g = String(a.Qc).match(Ze)[1] || null;
                        if (!g && k.self && k.self.location) {
                            var f =
                                k.self.location.protocol;
                            g = f.substr(0, f.length - 1)
                        }
                        e = !gf.test(g ? g.toLowerCase() : "")
                    }
                    d = e
                }
                if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    try {
                        var l = 2 < sf(a) ? a.f.statusText : ""
                    } catch (m) {
                        Fd(a.G, "Can not get status: " + m.message), l = ""
                    }
                    a.cc = l + " [" + P(a) + "]";
                    pf(a)
                }
            } finally {
                qf(a)
            }
        }
    };
    O.prototype.xf = function(a, b) {
        z("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
        this.dispatchEvent(tf(a, "progress"));
        this.dispatchEvent(tf(a, b ? "downloadprogress" : "uploadprogress"))
    };
    var tf = function(a, b) {
            return {
                type: b,
                lengthComputable: a.lengthComputable,
                loaded: a.loaded,
                total: a.total
            }
        },
        qf = function(a, b) {
            if (a.f) {
                nf(a);
                var c = a.f,
                    d = a.md[0] ? pa : null;
                a.f = null;
                a.md = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    (a = a.G) && a.log(sd, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
                }
            }
        },
        nf = function(a) {
            a.f && a.ld && (a.f.ontimeout = null);
            a.fd && (k.clearTimeout(a.fd), a.fd = null)
        },
        sf = function(a) {
            return a.f ? a.f.readyState : 0
        },
        P = function(a) {
            try {
                return 2 < sf(a) ?
                    a.f.status : -1
            } catch (b) {
                return -1
            }
        },
        uf = function(a) {
            if (a.f) {
                a: {
                    a = a.f.responseText;
                    if (k.JSON) try {
                        var b = k.JSON.parse(a);
                        z("object" == typeof b);
                        var c = b;
                        break a
                    } catch (d) {}
                    c = Pe(a)
                }
                return c
            }
        };
    O.prototype.getResponse = function() {
        try {
            if (!this.f) return null;
            if ("response" in this.f) return this.f.response;
            switch (this.bd) {
                case "":
                case "text":
                    return this.f.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in this.f) return this.f.mozResponseArrayBuffer
            }
            var a = this.G;
            a && a.log(sd, "Response type " + this.bd + " is not supported on this browser", void 0);
            return null
        } catch (b) {
            return Fd(this.G, "Can not get response: " + b.message), null
        }
    };
    O.prototype.getResponseHeader = function(a) {
        if (this.f && 4 == sf(this)) return a = this.f.getResponseHeader(a), null === a ? void 0 : a
    };
    O.prototype.getAllResponseHeaders = function() {
        return this.f && 4 == sf(this) ? this.f.getAllResponseHeaders() || "" : ""
    };
    var lf = function(a, b) {
        return b + " [" + a.tf + " " + a.Qc + " " + P(a) + "]"
    };
    Pc(function(a) {
        O.prototype.Sd = a(O.prototype.Sd)
    });
    var wf = function(a, b, c) {
        N.call(this);
        this.Ue = b || null;
        this.th = "context.";
        this.Nf = null;
        this.Fe = {};
        this.ci = vf;
        this.Ih = a;
        if (!c)
            if (this.Oa = null, J && !fd("10")) id(v(this.df, this));
            else {
                this.Oa = new ce(v(this.df, this));
                ie(this.Oa, "setTimeout");
                ie(this.Oa, "setInterval");
                a = this.Oa;
                b = oa("window");
                c = ["requestAnimationFrame", "mozRequestAnimationFrame", "webkitAnimationFrame", "msRequestAnimationFrame"];
                for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    c[d] in b && ie(a, e)
                }
                a = this.Oa;
                Oc = !0;
                b = v(a.Sf, a);
                for (c = 0; c < Mc.length; c++) Mc[c](b);
                Nc.push(a)
            }
    };
    y(wf, N);
    var xf = function(a, b) {
        je.call(this, "a");
        this.error = a;
        this.context = b
    };
    y(xf, je);
    var yf = Ad("goog.debug.ErrorReporter"),
        vf = function(a, b, c, d) {
            kf(a, null, b, c, d)
        },
        Af = function(a) {
            var b = zf;
            return b.Oa ? de(b.Oa, a) : null
        };
    wf.prototype.df = function(a, b) {
        a = a.error || a;
        if (b) {
            var c = {};
            for (d in b) c[d] = b[d];
            b = c
        } else b = {};
        a instanceof Error && Jb(b, a.__closure__error__context__984382 || {});
        c = kd(a);
        if (this.Ue) try {
            this.Ue(c, b)
        } catch (q) {
            yf && yf.log(sd, "Context provider threw an exception: " + q.message, void 0)
        }
        var d = c.message.substring(0, 1900);
        if (!(a instanceof Ca) || a.Wh) {
            a = c.fileName;
            var e = c.lineNumber,
                g = c.stack;
            try {
                var f = ff(this.Ih, "script", a, "error", d, "line", e);
                a: {
                    for (var l in this.Fe) {
                        var m = !1;
                        break a
                    }
                    m = !0
                }
                if (!m) {
                    m = f;
                    var r = ef(this.Fe);
                    f = bf(m, r)
                }
                r = {};
                r.trace = g;
                if (b)
                    for (var n in b) r[this.th + n] = b[n];
                var p = ef(r);
                ma(this.Nf) && (p = p.substring(0, this.Nf));
                this.ci(f, "POST", p, this.oi)
            } catch (q) {
                f = cb("Error occurred in sending an error report.\n\n", "script:", a, "\n", "line:", e, "\n", "error:", d, "\n", "trace:", g), yf && yf.info(f, void 0)
            }
        }
        try {
            this.dispatchEvent(new xf(c, b))
        } catch (q) {}
    };
    wf.prototype.D = function() {
        Kd(this.Oa);
        wf.O.D.call(this)
    };
    var Bf = !J || 9 <= Number(gd),
        Cf = !Yc && !J || J && 9 <= Number(gd) || Yc && fd("1.9.1"),
        Df = J && !fd("9");
    var Ef = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Hf = function(a, b) {
        this.de = a === Ff && b || "";
        this.Wg = Gf
    };
    Hf.prototype.oa = !0;
    Hf.prototype.R = function() {
        return this.de
    };
    Hf.prototype.toString = function() {
        return "Const{" + this.de + "}"
    };
    var If = function(a) {
            if (a instanceof Hf && a.constructor === Hf && a.Wg === Gf) return a.de;
            A("expected object of type Const, got '" + a + "'");
            return "type_error:Const"
        },
        Gf = {},
        Ff = {};
    var Jf = function() {
        this.Wd = ""
    };
    Jf.prototype.oa = !0;
    Jf.prototype.R = function() {
        return this.Wd.toString()
    };
    Jf.prototype.toString = function() {
        return "SafeScript{" + this.Wd + "}"
    };
    Jf.prototype.Ra = function(a) {
        this.Wd = a;
        return this
    };
    (new Jf).Ra("");
    var Lf = function() {
        this.Zc = "";
        this.$g = Kf
    };
    h = Lf.prototype;
    h.oa = !0;
    h.R = function() {
        return this.Zc.toString()
    };
    h.Md = !0;
    h.Bb = function() {
        return 1
    };
    h.toString = function() {
        return "TrustedResourceUrl{" + this.Zc + "}"
    };
    var Mf = function(a) {
            if (a instanceof Lf && a.constructor === Lf && a.$g === Kf) return a.Zc;
            A("expected object of type TrustedResourceUrl, got '" + a + "' of type " + qa(a));
            return "type_error:TrustedResourceUrl"
        },
        Kf = {},
        Nf = function(a) {
            var b = new Lf;
            b.Zc = a;
            return b
        };
    var Pf = function() {
        this.Yc = "";
        this.Jg = Of
    };
    h = Pf.prototype;
    h.oa = !0;
    h.R = function() {
        return this.Yc.toString()
    };
    h.Md = !0;
    h.Bb = function() {
        return 1
    };
    h.toString = function() {
        return "SafeUrl{" + this.Yc + "}"
    };
    var Qf = function(a) {
            if (a instanceof Pf && a.constructor === Pf && a.Jg === Of) return a.Yc;
            A("expected object of type SafeUrl, got '" + a + "' of type " + qa(a));
            return "type_error:SafeUrl"
        },
        Rf = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Tf = function(a) {
            if (a instanceof Pf) return a;
            a = "object" == typeof a && a.oa ? a.R() : String(a);
            Rf.test(a) || (a = "about:invalid#zClosurez");
            return Sf(a)
        },
        Of = {},
        Sf = function(a) {
            var b = new Pf;
            b.Yc = a;
            return b
        };
    Sf("about:blank");
    var Vf = function() {
        this.Xc = "";
        this.Ig = Uf
    };
    Vf.prototype.oa = !0;
    var Uf = {};
    Vf.prototype.R = function() {
        return this.Xc
    };
    Vf.prototype.toString = function() {
        return "SafeStyle{" + this.Xc + "}"
    };
    Vf.prototype.Ra = function(a) {
        this.Xc = a;
        return this
    };
    var Wf = (new Vf).Ra(""),
        Yf = function(a) {
            if (a instanceof Pf) return 'url("' + Qf(a).toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            a = a instanceof Hf ? If(a) : Xf(String(a));
            if (/[{;}]/.test(a)) throw new Ea("Value does not allow [{;}], got: %s.", [a]);
            return a
        },
        Xf = function(a) {
            var b = a.replace(Zf, "$1").replace(Zf, "$1").replace($f, "url");
            if (ag.test(b)) {
                if (bg.test(a)) return A("String value disallows comments, got: " + a), "zClosurez";
                for (var c = b = !0, d = 0; d < a.length; d++) {
                    var e = a.charAt(d);
                    "'" == e && c ? b = !b : '"' ==
                        e && b && (c = !c)
                }
                if (!b || !c) return A("String value requires balanced quotes, got: " + a), "zClosurez";
                if (!cg(a)) return A("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a), "zClosurez"
            } else return A("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: " + a), "zClosurez";
            return dg(a)
        },
        cg = function(a) {
            for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if ("]" == e) {
                    if (b) return !1;
                    b = !0
                } else if ("[" == e) {
                    if (!b) return !1;
                    b = !1
                } else if (!b &&
                    !c.test(e)) return !1
            }
            return b
        },
        ag = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        $f = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        Zf = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        bg = /\/\*/,
        dg = function(a) {
            return a.replace($f, function(b, c, d, e) {
                var g = "";
                d = d.replace(/^(['"])(.*)\1$/, function(f, l, m) {
                    g = l;
                    return m
                });
                b = Tf(d).R();
                return c + g + b + g + e
            })
        };
    var eg = function() {
        this.Xd = ""
    };
    eg.prototype.oa = !0;
    eg.prototype.R = function() {
        return this.Xd
    };
    eg.prototype.toString = function() {
        return "SafeStyleSheet{" + this.Xd + "}"
    };
    eg.prototype.Ra = function(a) {
        this.Xd = a;
        return this
    };
    (new eg).Ra("");
    var gg = function() {
        this.Wc = "";
        this.Hg = fg;
        this.Ye = null
    };
    h = gg.prototype;
    h.Md = !0;
    h.Bb = function() {
        return this.Ye
    };
    h.oa = !0;
    h.R = function() {
        return this.Wc.toString()
    };
    h.toString = function() {
        return "SafeHtml{" + this.Wc + "}"
    };
    var hg = function(a) {
            if (a instanceof gg && a.constructor === gg && a.Hg === fg) return a.Wc;
            A("expected object of type SafeHtml, got '" + a + "' of type " + qa(a));
            return "type_error:SafeHtml"
        },
        jg = function(a) {
            if (a instanceof gg) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.Md && (c = a.Bb());
            return ig(Ya(b && a.oa ? a.R() : String(a)), c)
        },
        kg = /^[a-zA-Z0-9-]+$/,
        lg = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        mg = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        og = function(a, b, c) {
            var d = String(a);
            if (!kg.test(d)) throw Error("Invalid tag name <" + d + ">.");
            if (d.toUpperCase() in mg) throw Error("Tag name <" + d + "> is not allowed for SafeHtml.");
            return ng(String(a), b, c)
        },
        qg = function(a) {
            var b = jg(pg),
                c = b.Bb(),
                d = [],
                e = function(g) {
                    ra(g) ? C(g, e) : (g = jg(g), d.push(hg(g).toString()), g = g.Bb(), 0 == c ? c = g : 0 != g && c != g && (c = null))
                };
            C(a, e);
            return ig(d.join(hg(b).toString()), c)
        },
        rg = function(a) {
            return qg(Array.prototype.slice.call(arguments))
        },
        fg = {},
        ig = function(a,
            b) {
            return (new gg).Ra(a, b)
        };
    gg.prototype.Ra = function(a, b) {
        this.Wc = a;
        this.Ye = b;
        return this
    };
    var ng = function(a, b, c) {
        var d = null,
            e = "";
        if (b)
            for (n in b) {
                if (!kg.test(n)) throw Error('Invalid attribute name "' + n + '".');
                var g = b[n];
                if (null != g) {
                    var f = a;
                    var l = n;
                    var m = g;
                    if (m instanceof Hf) m = If(m);
                    else if ("style" == l.toLowerCase()) {
                        g = void 0;
                        f = m;
                        if (!ua(f)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                        if (!(f instanceof Vf)) {
                            m = "";
                            for (g in f) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(g)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + g);
                                var r = f[g];
                                null != r && (r = ra(r) ? rb(r, Yf).join(" ") : Yf(r), m += g + ":" + r + ";")
                            }
                            f = m ? (new Vf).Ra(m) : Wf
                        }
                        f instanceof Vf && f.constructor === Vf && f.Ig === Uf ? g = f.Xc : (A("expected object of type SafeStyle, got '" + f + "' of type " + qa(f)), g = "type_error:SafeStyle");
                        m = g
                    } else {
                        if (/^on/i.test(l)) throw Error('Attribute "' + l + '" requires goog.string.Const value, "' + m + '" given.');
                        if (l.toLowerCase() in lg)
                            if (m instanceof Lf) m = Mf(m).toString();
                            else if (m instanceof Pf) m = Qf(m).toString();
                        else if (u(m)) m = Tf(m).R();
                        else throw Error('Attribute "' + l +
                            '" on tag "' + f + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + m + '" given.');
                    }
                    m.oa && (m = m.R());
                    z(u(m) || ma(m), "String or number value expected, got " + typeof m + " with value: " + m);
                    l = l + '="' + Ya(String(m)) + '"';
                    e += " " + l
                }
            }
        var n = "<" + a + e;
        null != c ? ra(c) || (c = [c]) : c = [];
        !0 === Ef[a.toLowerCase()] ? (z(!c.length, "Void tag <" + a + "> does not allow content."), n += ">") : (d = rg(c), n += ">" + hg(d).toString() + "</" + a + ">", d = d.Bb());
        (a = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(a) ? 0 : null);
        return ig(n, d)
    };
    ig("<!DOCTYPE html>", 0);
    var pg = ig("", 0);
    ig("<br>", 0);
    var sg = function(a, b) {
        var c = (c = a && a.ownerDocument) && (c.defaultView || c.parentWindow) || k;
        if ("undefined" != typeof c.Location && "undefined" != typeof c.Element) {
            c = a && (a instanceof c.Location || !(a instanceof c.Element));
            var d = ua(a) ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : void 0 === a ? "undefined" : null === a ? "null" : typeof a;
            z(c, "Argument is not a Location (or a non-Element mock); got: %s", d)
        }
        b instanceof Pf || b instanceof Pf || (b = "object" == typeof b && b.oa ? b.R() : String(b), z(Rf.test(b),
            "%s does not match the safe URL pattern", b) || (b = "about:invalid#zClosurez"), b = Sf(b));
        a.href = Qf(b)
    };
    var vg = function(a) {
            return a ? new tg(ug(a)) : Da || (Da = new tg)
        },
        wg = function(a, b) {
            return u(b) ? a.getElementById(b) : b
        },
        yg = function(a) {
            var b = document;
            b.getElementsByClassName ? a = b.getElementsByClassName(a)[0] : (b = document, a = b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : xg(b, a)[0] || null);
            return a || null
        },
        xg = function(a, b) {
            var c, d;
            if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
            if (b && a.getElementsByClassName) {
                var e = a.getElementsByClassName(b);
                return e
            }
            e = a.getElementsByTagName("*");
            if (b) {
                var g = {};
                for (c = d = 0; a = e[c]; c++) {
                    var f = a.className;
                    "function" == typeof f.split && ub(f.split(/\s+/), b) && (g[d++] = a)
                }
                g.length = d;
                return g
            }
            return e
        },
        Ag = function(a, b) {
            Gb(b, function(c, d) {
                c && "object" == typeof c && c.oa && (c = c.R());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : zg.hasOwnProperty(d) ? a.setAttribute(zg[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        zg = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        Bg = function(a) {
            return a ? a.parentWindow || a.defaultView : window
        },
        Q = function(a, b, c) {
            return Cg(document, arguments)
        },
        Cg = function(a, b) {
            var c = String(b[0]),
                d = b[1];
            if (!Bf && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', ab(d.name), '"');
                if (d.type) {
                    c.push(' type="', ab(d.type), '"');
                    var e = {};
                    Jb(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c =
                a.createElement(c);
            d && (u(d) ? c.className = d : ra(d) ? c.className = d.join(" ") : Ag(c, d));
            2 < b.length && Dg(a, c, b, 2);
            return c
        },
        Dg = function(a, b, c, d) {
            function e(f) {
                f && b.appendChild(u(f) ? a.createTextNode(f) : f)
            }
            for (; d < c.length; d++) {
                var g = c[d];
                sa(g) && !Eg(g) ? C(Fg(g) ? Bb(g) : g, e) : e(g)
            }
        },
        R = function(a) {
            return document.createTextNode(String(a))
        },
        Gg = function(a) {
            if (1 != a.nodeType) return !1;
            switch (a.tagName) {
                case "APPLET":
                case "AREA":
                case "BASE":
                case "BR":
                case "COL":
                case "COMMAND":
                case "EMBED":
                case "FRAME":
                case "HR":
                case "IMG":
                case "INPUT":
                case "IFRAME":
                case "ISINDEX":
                case "KEYGEN":
                case "LINK":
                case "NOFRAMES":
                case "NOSCRIPT":
                case "META":
                case "OBJECT":
                case "PARAM":
                case "SCRIPT":
                case "SOURCE":
                case "STYLE":
                case "TRACK":
                case "WBR":
                    return !1
            }
            return !0
        },
        T = function(a, b) {
            z(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
            a.appendChild(b)
        },
        Hg = function(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        },
        Ig = function(a, b) {
            z(null != a, "goog.dom.insertChildAt expects a non-null parent");
            a.insertBefore(b, a.childNodes[0] || null)
        },
        U = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        Eg = function(a) {
            return ua(a) && 0 < a.nodeType
        },
        ug = function(a) {
            z(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Jg = function(a) {
            return a.contentDocument || a.contentWindow.document
        },
        Kg = function(a, b) {
            z(null != a, "goog.dom.setTextContent expects a non-null value for node");
            if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(z(a.lastChild));
                a.firstChild.data = String(b)
            } else {
                Hg(a);
                var c = ug(a);
                a.appendChild(c.createTextNode(String(b)))
            }
        },
        Lg = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Mg = {
            IMG: " ",
            BR: "\n"
        },
        Og = function(a) {
            if (Df && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
            else {
                var b = [];
                Ng(a, b, !0);
                a = b.join("")
            }
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            Df || (a = a.replace(/ +/g, " "));
            " " != a && (a = a.replace(/^\s*/, ""));
            return a
        },
        Ng = function(a, b, c) {
            if (!(a.nodeName in Lg))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in Mg) b.push(Mg[a.nodeName]);
            else
                for (a = a.firstChild; a;) Ng(a, b, c), a = a.nextSibling
        },
        Fg = function(a) {
            if (a && "number" == typeof a.length) {
                if (ua(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (ta(a)) return "function" == typeof a.item
            }
            return !1
        },
        tg = function(a) {
            this.Yb = a || k.document || document
        };
    h = tg.prototype;
    h.getElementsByTagName = function(a, b) {
        return (b || this.Yb).getElementsByTagName(String(a))
    };
    h.setProperties = Ag;
    h.uh = function(a, b, c) {
        return Cg(this.Yb, arguments)
    };
    h.createElement = function(a) {
        return this.Yb.createElement(String(a))
    };
    h.createTextNode = function(a) {
        return this.Yb.createTextNode(String(a))
    };
    h.appendChild = T;
    h.append = function(a, b) {
        Dg(ug(a), a, arguments, 1)
    };
    h.canHaveChildren = Gg;
    h.removeNode = U;
    h.af = function() {
        return Cf && void 0 != (void 0).children ? (void 0).children : qb((void 0).childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    h.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var Pg = function(a, b) {
        this.za = this.ub = this.Va = "";
        this.Lb = null;
        this.cb = this.ua = "";
        this.Y = this.Lh = !1;
        if (a instanceof Pg) {
            this.Y = t(b) ? b : a.Y;
            Qg(this, a.Va);
            var c = a.ub;
            V(this);
            this.ub = c;
            c = a.za;
            V(this);
            this.za = c;
            Rg(this, a.Lb);
            c = a.ua;
            V(this);
            this.ua = c;
            Sg(this, a.va.clone());
            a = a.cb;
            V(this);
            this.cb = a
        } else a && (c = String(a).match(Ze)) ? (this.Y = !!b, Qg(this, c[1] || "", !0), a = c[2] || "", V(this), this.ub = Tg(a), a = c[3] || "", V(this), this.za = Tg(a, !0), Rg(this, c[4]), a = c[5] || "", V(this), this.ua = Tg(a, !0), Sg(this, c[6] || "", !0), a = c[7] ||
            "", V(this), this.cb = Tg(a)) : (this.Y = !!b, this.va = new Ug(null, this.Y))
    };
    Pg.prototype.toString = function() {
        var a = [],
            b = this.Va;
        b && a.push(Vg(b, Wg, !0), ":");
        var c = this.za;
        if (c || "file" == b) a.push("//"), (b = this.ub) && a.push(Vg(b, Wg, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.Lb, null != c && a.push(":", String(c));
        if (c = this.ua) this.za && "/" != c.charAt(0) && a.push("/"), a.push(Vg(c, "/" == c.charAt(0) ? Xg : Yg, !0));
        (c = this.va.toString()) && a.push("?", c);
        (c = this.cb) && a.push("#", Vg(c, Zg));
        return a.join("")
    };
    Pg.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.Va;
        c ? Qg(b, a.Va) : c = !!a.ub;
        if (c) {
            var d = a.ub;
            V(b);
            b.ub = d
        } else c = !!a.za;
        c ? (d = a.za, V(b), b.za = d) : c = null != a.Lb;
        d = a.ua;
        if (c) Rg(b, a.Lb);
        else if (c = !!a.ua) {
            if ("/" != d.charAt(0))
                if (this.za && !this.ua) d = "/" + d;
                else {
                    var e = b.ua.lastIndexOf("/"); - 1 != e && (d = b.ua.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var g = [], f = 0; f < e.length;) {
                    var l = e[f++];
                    "." == l ? d && f == e.length &&
                        g.push("") : ".." == l ? ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(), d && f == e.length && g.push("")) : (g.push(l), d = !0)
                }
                d = g.join("/")
            } else d = e
        }
        c ? (V(b), b.ua = d) : c = "" !== a.va.toString();
        c ? Sg(b, a.va.clone()) : c = !!a.cb;
        c && (a = a.cb, V(b), b.cb = a);
        return b
    };
    Pg.prototype.clone = function() {
        return new Pg(this)
    };
    var Qg = function(a, b, c) {
            V(a);
            a.Va = c ? Tg(b, !0) : b;
            a.Va && (a.Va = a.Va.replace(/:$/, ""))
        },
        Rg = function(a, b) {
            V(a);
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.Lb = b
            } else a.Lb = null
        },
        Sg = function(a, b, c) {
            V(a);
            b instanceof Ug ? (a.va = b, a.va.Zd(a.Y)) : (c || (b = Vg(b, $g)), a.va = new Ug(b, a.Y));
            return a
        };
    Pg.prototype.setQuery = function(a, b) {
        return Sg(this, a, b)
    };
    Pg.prototype.getQuery = function() {
        return this.va.toString()
    };
    Pg.prototype.removeParameter = function(a) {
        V(this);
        this.va.remove(a);
        return this
    };
    var V = function(a) {
        if (a.Lh) throw Error("Tried to modify a read-only Uri");
    };
    Pg.prototype.Zd = function(a) {
        this.Y = a;
        this.va && this.va.Zd(a)
    };
    var Tg = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Vg = function(a, b, c) {
            return u(a) ? (a = encodeURI(a).replace(b, ah), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        ah = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Wg = /[#\/\?@]/g,
        Yg = /[#\?:]/g,
        Xg = /[#\?]/g,
        $g = /[#\?@]/g,
        Zg = /#/g,
        Ug = function(a, b) {
            this.j = this.m = null;
            this.P = a || null;
            this.Y = !!b
        },
        bh = function(a) {
            a.m || (a.m = new Gd, a.j = 0, a.P && af(a.P, function(b, c) {
                a.add($a(b), c)
            }))
        };
    h = Ug.prototype;
    h.Ic = function() {
        bh(this);
        return this.j
    };
    h.add = function(a, b) {
        bh(this);
        this.P = null;
        a = ch(this, a);
        var c = this.m.get(a);
        c || this.m.set(a, c = []);
        c.push(b);
        this.j = Ga(this.j) + 1;
        return this
    };
    h.remove = function(a) {
        bh(this);
        a = ch(this, a);
        return this.m.yb(a) ? (this.P = null, this.j = Ga(this.j) - this.m.get(a).length, this.m.remove(a)) : !1
    };
    h.clear = function() {
        this.m = this.P = null;
        this.j = 0
    };
    h.Pd = function() {
        bh(this);
        return 0 == this.j
    };
    h.yb = function(a) {
        bh(this);
        a = ch(this, a);
        return this.m.yb(a)
    };
    h.forEach = function(a, b) {
        bh(this);
        this.m.forEach(function(c, d) {
            C(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    h.ka = function() {
        bh(this);
        for (var a = this.m.ma(), b = this.m.ka(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
        return c
    };
    h.ma = function(a) {
        bh(this);
        var b = [];
        if (u(a)) this.yb(a) && (b = Ab(b, this.m.get(ch(this, a))));
        else {
            a = this.m.ma();
            for (var c = 0; c < a.length; c++) b = Ab(b, a[c])
        }
        return b
    };
    h.set = function(a, b) {
        bh(this);
        this.P = null;
        a = ch(this, a);
        this.yb(a) && (this.j = Ga(this.j) - this.m.get(a).length);
        this.m.set(a, [b]);
        this.j = Ga(this.j) + 1;
        return this
    };
    h.get = function(a, b) {
        if (!a) return b;
        a = this.ma(a);
        return 0 < a.length ? String(a[0]) : b
    };
    h.toString = function() {
        if (this.P) return this.P;
        if (!this.m) return "";
        for (var a = [], b = this.m.ka(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.ma(d);
            for (var g = 0; g < d.length; g++) {
                var f = e;
                "" !== d[g] && (f += "=" + encodeURIComponent(String(d[g])));
                a.push(f)
            }
        }
        return this.P = a.join("&")
    };
    h.clone = function() {
        var a = new Ug;
        a.P = this.P;
        this.m && (a.m = this.m.clone(), a.j = this.j);
        return a
    };
    var ch = function(a, b) {
        b = String(b);
        a.Y && (b = b.toLowerCase());
        return b
    };
    Ug.prototype.Zd = function(a) {
        a && !this.Y && (bh(this), this.P = null, this.m.forEach(function(b, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < b.length && (this.P = null, this.m.set(ch(this, d), Bb(b)), this.j = Ga(this.j) + b.length))
        }, this));
        this.Y = a
    };
    Ug.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) We(arguments[b], function(c, d) {
            this.add(d, c)
        }, this)
    };
    L(window, "unload", function() {
        for (; jf.length;) jf.pop().$a()
    });
    var zf;
    zf = new wf("/api/error", function(a, b) {
        b && (window.navigator && (b["user-agent"] = window.navigator.userAgent), window.location && (b.href = window.location.href))
    }, void 0);
    var dh = new Ob,
        eh = !1,
        jh = function() {
            if (!eh) {
                var a = wg(document, "security_token");
                null != a && (fh = a.value);
                a = wg(document, "is_logged_in");
                null != a && (gh = "true" === a.value);
                a = wg(document, "is_bg_enabled");
                null != a && "true" === a.value && hh("/api/bgprogram", {
                    ri: fh
                }, function(b) {
                    if (200 === P(b)) {
                        b = uf(b);
                        try {
                            ih = new window.botguard.bg(b.program)
                        } catch (c) {}
                    }
                });
                eh = !0
            }
        },
        hh = function(a, b, c) {
            kf(a, function() {
                c(this)
            }, "POST", ef(b), null, 5E3)
        },
        kh = function(a) {
            var b = null;
            try {
                b = a instanceof Pg ? a.clone() : new Pg(a, void 0)
            } catch (c) {
                return a
            }
            a =
                b.za + b.ua;
            a.endsWith("/") && (a = a.substring(0, a.length - 1));
            return a
        },
        lh = function(a) {
            var b = new nb(2E3);
            a = Qa(a);
            a = a.split(-1 == a.indexOf("T") ? " " : "T");
            var c = a[0].match(fb);
            if (c) {
                var d = Number(c[2]),
                    e = Number(c[3]),
                    g = Number(c[4]);
                var f = Number(c[5]);
                var l = Number(c[6]) || 1;
                b.setFullYear(Number(c[1]));
                g ? (b.setDate(1), b.setMonth(0), b.add(new jb("d", g - 1))) : f ? (b.setMonth(0), b.setDate(1), c = b.getDay() || 7, b.add(new jb("d", (4 >= c ? 1 - c : 8 - c) + (Number(l) + 7 * (Number(f) - 1)) - 1))) : (d && (b.setDate(1), b.setMonth(d - 1)), e && b.setDate(e));
                f = !0
            } else f = !1;
            if (f && !(f = 2 > a.length)) {
                f = a[1];
                a = f.match(hb);
                if (a)
                    if (f = f.substring(0, f.length - a[0].length), "Z" === a[0]) var m = 0;
                    else m = 60 * Number(a[2]) + Number(a[3]), m *= "-" == a[1] ? 1 : -1;
                (f = f.match(gb)) ? (a ? (Ga(m), b.setTime(Date.UTC(b.getYear(), b.getMonth(), b.getDate(), Number(f[1]), Number(f[2]) || 0, Number(f[3]) || 0, f[4] ? 1E3 * Number(f[4]) : 0) + 6E4 * m)) : (b.setHours(Number(f[1])), b.setMinutes(Number(f[2]) || 0), b.setSeconds(Number(f[3]) || 0), b.setMilliseconds(f[4] ? 1E3 * Number(f[4]) : 0)), f = !0) : f = !1
            }
            b = f ? b : null;
            m = b.getTime();
            a = x();
            f = Math.floor((a - m) / 6E4);
            a = !1;
            0 > f && (a = !0, f *= -1);
            60 > f ? m = Lc(f, a, 0) : (f = Math.floor(f / 60), 24 > f ? m = Lc(f, a, 1) : (f = new Date(x()), f.setHours(0), f.setMinutes(0), f.setSeconds(0), f.setMilliseconds(0), f = Math.ceil((f.getTime() - m) / 864E5), a && (f *= -1), m = 14 > f ? Lc(f, a, 2) : ""));
            Pa(m) && (m = dh.format(b));
            return m
        },
        mh = function(a) {
            return a.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
        },
        ih = null,
        fh = "",
        gh = !1,
        W = {
            get pb() {
                return fh
            },
            get Aa() {
                return gh
            },
            get kh() {
                var a = "js_disabled";
                null != ih && ta(ih.invoke) && ih.invoke(function(b) {
                    a =
                        b
                });
                return a
            }
        };
    var nh = function(a) {
            if (a.classList) return a.classList;
            a = a.className;
            return u(a) && a.match(/\S+/g) || []
        },
        oh = function(a, b) {
            return a.classList ? a.classList.contains(b) : ub(nh(a), b)
        },
        ph = function(a, b) {
            a.classList ? a.classList.remove(b) : oh(a, b) && (a.className = qb(nh(a), function(c) {
                return c != b
            }).join(" "))
        },
        qh = function(a, b, c) {
            c ? a.classList ? a.classList.add(b) : oh(a, b) || (a.className += 0 < a.className.length ? " " + b : b) : ph(a, b)
        };
    var rh = function() {
        this.ja = [];
        this.ya = []
    };
    rh.prototype.enqueue = function(a) {
        this.ya.push(a)
    };
    var sh = function(a) {
        0 == a.ja.length && (a.ja = a.ya, a.ja.reverse(), a.ya = []);
        return a.ja.pop()
    };
    h = rh.prototype;
    h.Ic = function() {
        return this.ja.length + this.ya.length
    };
    h.Pd = function() {
        return 0 == this.ja.length && 0 == this.ya.length
    };
    h.clear = function() {
        this.ja = [];
        this.ya = []
    };
    h.contains = function(a) {
        return ub(this.ja, a) || ub(this.ya, a)
    };
    h.remove = function(a) {
        var b = this.ja;
        var c = pb(b, a);
        0 <= c ? (yb(b, c), b = !0) : b = !1;
        return b || zb(this.ya, a)
    };
    h.ma = function() {
        for (var a = [], b = this.ja.length - 1; 0 <= b; --b) a.push(this.ja[b]);
        var c = this.ya.length;
        for (b = 0; b < c; ++b) a.push(this.ya[b]);
        return a
    };
    var th = function() {
            this.ie = new rh;
            this.Ja = !1;
            this.a = Q("DIV", ["toast", "mdl-shadow--4dp"])
        },
        X = function(a, b) {
            null != uh || (uh = new th);
            uh.show(a, b)
        };
    th.prototype.show = function(a, b) {
        this.ie.enqueue({
            type: a,
            content: b
        });
        this.Ja || this.ae()
    };
    th.prototype.ae = function() {
        var a = this;
        if (this.ie.Pd()) U(this.a), M(this.a, ne, this.ae, !1, this), this.Ja = !1;
        else {
            this.Ja || (this.Ja = !0, L(this.a, ne, this.ae, !1, this), T(document.body, this.a));
            var b = sh(this.ie);
            Hg(this.a);
            for (var c in vh) {
                var d = vh[c];
                qh(this.a, d, b.type === d)
            }
            c = Q("I", ["material-icons", "mdl-shadow--2dp"]);
            switch (b.type) {
                default:
                    case "success":
                    Kg(c, "check");
                break;
                case "error":
                        Kg(c, "close")
            }
            T(this.a, c);
            b = b.content;
            u(b) ? T(this.a, R(b)) : sa(b) && C(b, function(e) {
                T(a.a, e)
            })
        }
    };
    var uh = null,
        vh = {
            ki: "success",
            ei: "error"
        };
    if (J && J) try {
        new ActiveXObject("MSXML2.DOMDocument")
    } catch (a) {}
    var Y = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && a.setAttribute(c, b[c])
    };
    /*

     Copyright 2015 Google Inc. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var Z = {
        Pf: function() {},
        oc: function() {},
        da: function() {},
        ne: function() {},
        Af: function() {},
        register: function() {},
        ha: function() {}
    };
    Z = function() {
        function a(n, p) {
            for (var q = 0; q < m.length; q++)
                if (m[q].className === n) return "undefined" !== typeof p && (m[q] = p), m[q];
            return !1
        }

        function b(n) {
            n = n.getAttribute("data-upgraded");
            return null === n ? [""] : n.split(",")
        }

        function c(n, p) {
            return -1 !== b(n).indexOf(p)
        }

        function d(n, p, q) {
            if ("CustomEvent" in window && "function" === typeof window.CustomEvent) return new CustomEvent(n, {
                bubbles: p,
                cancelable: q
            });
            var w = document.createEvent("Events");
            w.initEvent(n, p, q);
            return w
        }

        function e(n, p) {
            if ("undefined" === typeof n && "undefined" ===
                typeof p)
                for (n = 0; n < m.length; n++) e(m[n].className, m[n].V);
            else {
                if ("undefined" === typeof p) {
                    var q = a(n);
                    q && (p = q.V)
                }
                p = document.querySelectorAll("." + p);
                for (q = 0; q < p.length; q++) g(p[q], n)
            }
        }

        function g(n, p) {
            if (!("object" === typeof n && n instanceof Element)) throw Error("Invalid argument provided to upgrade MDL element.");
            var q = d("mdl-componentupgrading", !0, !0);
            n.dispatchEvent(q);
            if (!q.defaultPrevented) {
                q = b(n);
                var w = [];
                if (p) c(n, p) || w.push(a(p));
                else {
                    var G = n.classList;
                    m.forEach(function(Hc) {
                        G.contains(Hc.V) && -1 ===
                            w.indexOf(Hc) && !c(n, Hc.className) && w.push(Hc)
                    })
                }
                p = 0;
                for (var S = w.length, fa; p < S; p++) {
                    if (fa = w[p]) {
                        q.push(fa.className);
                        n.setAttribute("data-upgraded", q.join(","));
                        var Nd = new fa.qh(n);
                        Nd.mdlComponentConfigInternal_ = fa;
                        r.push(Nd);
                        for (var Od = 0, Ei = fa.xd.length; Od < Ei; Od++) fa.xd[Od](n);
                        fa.wb && (n[fa.className] = Nd)
                    } else throw Error("Unable to find a registered component for the given class.");
                    fa = d("mdl-componentupgraded", !0, !1);
                    n.dispatchEvent(fa)
                }
            }
        }

        function f(n) {
            Array.isArray(n) || (n = n instanceof Element ? [n] :
                Array.prototype.slice.call(n));
            for (var p = 0, q = n.length, w; p < q; p++) w = n[p], w instanceof HTMLElement && (g(w), 0 < w.children.length && f(w.children))
        }

        function l(n) {
            if (n) {
                r.splice(r.indexOf(n), 1);
                var p = n.a.getAttribute("data-upgraded").split(",");
                p.splice(p.indexOf(n.mdlComponentConfigInternal_.Za), 1);
                n.a.setAttribute("data-upgraded", p.join(","));
                p = d("mdl-componentdowngraded", !0, !1);
                n.a.dispatchEvent(p)
            }
        }
        var m = [],
            r = [];
        return {
            Pf: e,
            oc: g,
            da: f,
            ne: function() {
                for (var n = 0; n < m.length; n++) e(m[n].className)
            },
            Af: function(n,
                p) {
                (n = a(n)) && n.xd.push(p)
            },
            register: function(n) {
                var p = !0;
                if ("undefined" !== typeof n.wb || "undefined" !== typeof n.widget) p = n.wb || n.widget;
                var q = {
                    qh: n.constructor || n.constructor,
                    className: n.Za || n.classAsString,
                    V: n.V || n.cssClass,
                    wb: p,
                    xd: []
                };
                m.forEach(function(w) {
                    if (w.V === q.V) throw Error("The provided cssClass has already been registered: " + w.V);
                    if (w.className === q.className) throw Error("The provided className has already been registered");
                });
                if (n.constructor.prototype.hasOwnProperty("mdlComponentConfigInternal_")) throw Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");
                a(n.Za, q) || m.push(q)
            },
            ha: function(n) {
                var p = function(w) {
                    r.filter(function(G) {
                        return G.a === w
                    }).forEach(l)
                };
                if (n instanceof Array || n instanceof NodeList)
                    for (var q = 0; q < n.length; q++) p(n[q]);
                else if (n instanceof Node) p(n);
                else throw Error("Invalid argument provided to downgrade MDL nodes.");
            }
        }
    }();
    Z.upgradeDom = Z.Pf;
    Z.upgradeElement = Z.oc;
    Z.upgradeElements = Z.da;
    Z.upgradeAllRegistered = Z.ne;
    Z.registerUpgradedCallback = Z.Af;
    Z.register = Z.register;
    Z.downgradeElements = Z.ha;
    window.componentHandler = Z;
    window.addEventListener("load", function() {
        "classList" in document.createElement("div") && "querySelector" in document && "addEventListener" in window && Array.prototype.forEach ? (document.documentElement.classList.add("mdl-js"), Z.ne()) : (Z.oc = function() {}, Z.register = function() {})
    });
    (function() {
        var a = function(b) {
            this.a = b;
            this.pa()
        };
        window.MaterialButton = a;
        a.prototype.xa = {};
        a.prototype.b = {
            sc: "mdl-js-ripple-effect",
            Eg: "mdl-button__ripple-container",
            Rb: "mdl-ripple"
        };
        a.prototype.Ke = function(b) {
            b && this.a.blur()
        };
        a.prototype.disable = function() {
            this.a.disabled = !0
        };
        a.prototype.disable = a.prototype.disable;
        a.prototype.enable = function() {
            this.a.disabled = !1
        };
        a.prototype.enable = a.prototype.enable;
        a.prototype.pa = function() {
            if (this.a) {
                if (this.a.classList.contains(this.b.sc)) {
                    var b = document.createElement("span");
                    b.classList.add(this.b.Eg);
                    this.I = document.createElement("span");
                    this.I.classList.add(this.b.Rb);
                    b.appendChild(this.I);
                    this.oh = this.Ke.bind(this);
                    this.I.addEventListener("mouseup", this.oh);
                    this.a.appendChild(b)
                }
                this.Le = this.Ke.bind(this);
                this.a.addEventListener("mouseup", this.Le);
                this.a.addEventListener("mouseleave", this.Le)
            }
        };
        Z.register({
            constructor: a,
            Za: "MaterialButton",
            V: "mdl-js-button",
            wb: !0
        })
    })();
    (function() {
        var a = function(b) {
            this.a = b;
            this.pa()
        };
        window.MaterialMenu = a;
        a.prototype.xa = {
            Zg: .3,
            Yg: .8,
            Wf: 150
        };
        a.prototype.Xa = {
            eg: 13,
            hg: 27,
            Pg: 32,
            De: 38,
            re: 40
        };
        a.prototype.b = {
            Yf: "mdl-menu__container",
            yg: "mdl-menu__outline",
            Qb: "mdl-menu__item",
            mg: "mdl-menu__item-ripple-container",
            sc: "mdl-js-ripple-effect",
            Gg: "mdl-js-ripple-effect--ignore-events",
            Rb: "mdl-ripple",
            lg: "is-upgraded",
            La: "is-visible",
            xb: "is-animating",
            oe: "mdl-menu--bottom-left",
            rc: "mdl-menu--bottom-right",
            Sb: "mdl-menu--top-left",
            Tb: "mdl-menu--top-right",
            tc: "mdl-menu--unaligned"
        };
        a.prototype.pa = function() {
            if (this.a) {
                var b = document.createElement("div");
                b.classList.add(this.b.Yf);
                this.a.parentElement.insertBefore(b, this.a);
                this.a.parentElement.removeChild(this.a);
                b.appendChild(this.a);
                this.w = b;
                var c = document.createElement("div");
                c.classList.add(this.b.yg);
                this.Ha = c;
                b.insertBefore(c, this.a);
                if (c = this.a.getAttribute("for") || this.a.getAttribute("data-mdl-for"))
                    if (c = document.getElementById(c)) this.F = c, c.addEventListener("click", this.Ch.bind(this)), c.addEventListener("keydown",
                        this.Dh.bind(this));
                c = this.a.querySelectorAll("." + this.b.Qb);
                this.nh = this.Fh.bind(this);
                this.mh = this.Eh.bind(this);
                for (var d = 0; d < c.length; d++) c[d].addEventListener("click", this.mh), c[d].tabIndex = "-1", c[d].addEventListener("keydown", this.nh);
                if (this.a.classList.contains(this.b.sc))
                    for (this.a.classList.add(this.b.Gg), d = 0; d < c.length; d++) {
                        var e = c[d],
                            g = document.createElement("span");
                        g.classList.add(this.b.mg);
                        var f = document.createElement("span");
                        f.classList.add(this.b.Rb);
                        g.appendChild(f);
                        e.appendChild(g);
                        e.classList.add(this.b.sc)
                    }
                this.a.classList.contains(this.b.oe) && this.Ha.classList.add(this.b.oe);
                this.a.classList.contains(this.b.rc) && this.Ha.classList.add(this.b.rc);
                this.a.classList.contains(this.b.Sb) && this.Ha.classList.add(this.b.Sb);
                this.a.classList.contains(this.b.Tb) && this.Ha.classList.add(this.b.Tb);
                this.a.classList.contains(this.b.tc) && this.Ha.classList.add(this.b.tc);
                b.classList.add(this.b.lg)
            }
        };
        a.prototype.Ch = function(b) {
            if (this.a && this.F) {
                var c = this.F.getBoundingClientRect(),
                    d = this.F.parentElement.getBoundingClientRect();
                this.a.classList.contains(this.b.tc) || (this.a.classList.contains(this.b.rc) ? (this.w.style.right = d.right - c.right + "px", this.w.style.top = this.F.offsetTop + this.F.offsetHeight + "px") : this.a.classList.contains(this.b.Sb) ? (this.w.style.left = this.F.offsetLeft + "px", this.w.style.bottom = d.bottom - c.top + "px") : this.a.classList.contains(this.b.Tb) ? (this.w.style.right = d.right - c.right + "px", this.w.style.bottom = d.bottom - c.top + "px") : (this.w.style.left = this.F.offsetLeft + "px", this.w.style.top = this.F.offsetTop + this.F.offsetHeight +
                    "px"))
            }
            this.toggle(b)
        };
        a.prototype.Dh = function(b) {
            if (this.a && this.w && this.F) {
                var c = this.a.querySelectorAll("." + this.b.Qb + ":not([disabled])");
                c && 0 < c.length && this.w.classList.contains(this.b.La) && (b.keyCode === this.Xa.De ? (b.preventDefault(), c[c.length - 1].focus()) : b.keyCode === this.Xa.re && (b.preventDefault(), c[0].focus()))
            }
        };
        a.prototype.Fh = function(b) {
            if (this.a && this.w) {
                var c = this.a.querySelectorAll("." + this.b.Qb + ":not([disabled])");
                if (c && 0 < c.length && this.w.classList.contains(this.b.La)) {
                    var d = Array.prototype.slice.call(c).indexOf(b.target);
                    b.keyCode === this.Xa.De ? (b.preventDefault(), 0 < d ? c[d - 1].focus() : c[c.length - 1].focus()) : b.keyCode === this.Xa.re ? (b.preventDefault(), c.length > d + 1 ? c[d + 1].focus() : c[0].focus()) : b.keyCode === this.Xa.Pg || b.keyCode === this.Xa.eg ? (b.preventDefault(), c = new MouseEvent("mousedown"), b.target.dispatchEvent(c), c = new MouseEvent("mouseup"), b.target.dispatchEvent(c), b.target.click()) : b.keyCode === this.Xa.hg && (b.preventDefault(), this.na())
                }
            }
        };
        a.prototype.Eh = function(b) {
            b.target.hasAttribute("disabled") ? b.stopPropagation() :
                (this.Se = !0, window.setTimeout(function() {
                    this.na();
                    this.Se = !1
                }.bind(this), this.xa.Wf))
        };
        a.prototype.He = function(b, c) {
            this.a.classList.contains(this.b.tc) ? this.a.style.clip = "" : this.a.classList.contains(this.b.rc) ? this.a.style.clip = "rect(0 " + c + "px 0 " + c + "px)" : this.a.classList.contains(this.b.Sb) ? this.a.style.clip = "rect(" + b + "px 0 " + b + "px 0)" : this.a.classList.contains(this.b.Tb) ? this.a.style.clip = "rect(" + b + "px " + c + "px " + b + "px " + c + "px)" : this.a.style.clip = ""
        };
        a.prototype.Bf = function(b) {
            b.target.classList.remove(a.prototype.b.xb)
        };
        a.prototype.Ee = function() {
            this.a.addEventListener("transitionend", this.Bf);
            this.a.addEventListener("webkitTransitionEnd", this.Bf)
        };
        a.prototype.show = function(b) {
            if (this.a && this.w && this.Ha) {
                var c = this.a.getBoundingClientRect().height,
                    d = this.a.getBoundingClientRect().width;
                this.w.style.width = d + "px";
                this.w.style.height = c + "px";
                this.Ha.style.width = d + "px";
                this.Ha.style.height = c + "px";
                for (var e = this.xa.Zg * this.xa.Yg, g = this.a.querySelectorAll("." + this.b.Qb), f = 0; f < g.length; f++) {
                    var l = null;
                    l = this.a.classList.contains(this.b.Sb) ||
                        this.a.classList.contains(this.b.Tb) ? (c - g[f].offsetTop - g[f].offsetHeight) / c * e + "s" : g[f].offsetTop / c * e + "s";
                    g[f].style.transitionDelay = l
                }
                this.He(c, d);
                window.requestAnimationFrame(function() {
                    this.a.classList.add(this.b.xb);
                    this.a.style.clip = "rect(0 " + d + "px " + c + "px 0)";
                    this.w.classList.add(this.b.La)
                }.bind(this));
                this.Ee();
                var m = function(r) {
                    r === b || this.Se || r.target.parentNode === this.a || (document.removeEventListener("click", m), this.na())
                }.bind(this);
                document.addEventListener("click", m)
            }
        };
        a.prototype.show =
            a.prototype.show;
        a.prototype.na = function() {
            if (this.a && this.w && this.Ha) {
                for (var b = this.a.querySelectorAll("." + this.b.Qb), c = 0; c < b.length; c++) b[c].style.removeProperty("transition-delay");
                c = this.a.getBoundingClientRect();
                b = c.height;
                c = c.width;
                this.a.classList.add(this.b.xb);
                this.He(b, c);
                this.w.classList.remove(this.b.La);
                this.Ee()
            }
        };
        a.prototype.hide = a.prototype.na;
        a.prototype.toggle = function(b) {
            this.w.classList.contains(this.b.La) ? this.na() : this.show(b)
        };
        a.prototype.toggle = a.prototype.toggle;
        Z.register({
            constructor: a,
            Za: "MaterialMenu",
            V: "mdl-js-menu",
            wb: !0
        })
    })();
    /*

     Copyright (c) 2011 Erik M?ller, Paul Irish, Tino Zijdel; Licensed MIT http://opensource.org/licenses/MIT
     http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
     requestAnimationFrame polyfill by Erik M?ller. fixes from Paul Irish and Tino Zijdel
    */
    (function() {
        for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(d) {
            var e = (new Date).getTime(),
                g = Math.max(0, 16 - (e - a)),
                f = window.setTimeout(function() {
                    d(e + g)
                }, g);
            a = e + g;
            return f
        });
        window.cancelAnimationFrame || (window.cancelAnimationFrame =
            function(d) {
                clearTimeout(d)
            })
    })();
    (function() {
        var a = function(b) {
            this.a = b;
            this.pa()
        };
        window.MaterialRipple = a;
        a.prototype.xa = {
            kg: "scale(0.0001, 0.0001)",
            hi: "1px",
            gi: "0.4",
            fi: "0",
            ig: ""
        };
        a.prototype.b = {
            Dg: "mdl-ripple--center",
            Fg: "mdl-js-ripple-effect--ignore-events",
            Rb: "mdl-ripple",
            xb: "is-animating",
            La: "is-visible"
        };
        a.prototype.yh = function(b) {
            if (!this.I.style.width && !this.I.style.height) {
                var c = this.a.getBoundingClientRect();
                this.lh = c.height;
                this.ph = c.width;
                this.Yd = 2 * Math.sqrt(c.width * c.width + c.height * c.height) + 2;
                this.I.style.width = this.Yd +
                    "px";
                this.I.style.height = this.Yd + "px"
            }
            this.I.classList.add(this.b.La);
            if ("mousedown" === b.type && this.Ld) this.Ld = !1;
            else if ("touchstart" === b.type && (this.Ld = !0), !(0 < this.Hd)) {
                this.Xh();
                c = b.currentTarget.getBoundingClientRect();
                if (0 === b.clientX && 0 === b.clientY) b = Math.round(c.width / 2), c = Math.round(c.height / 2);
                else {
                    var d = void 0 !== b.clientY ? b.clientY : b.touches[0].clientY;
                    b = Math.round((void 0 !== b.clientX ? b.clientX : b.touches[0].clientX) - c.left);
                    c = Math.round(d - c.top)
                }
                this.Yh(b, c);
                this.Ef(!0);
                window.requestAnimationFrame(this.Ge.bind(this))
            }
        };
        a.prototype.ai = function(b) {
            b && 2 !== b.detail && window.setTimeout(function() {
                this.I.classList.remove(this.b.La)
            }.bind(this), 0)
        };
        a.prototype.pa = function() {
            if (this.a) {
                var b = this.a.classList.contains(this.b.Dg);
                this.a.classList.contains(this.b.Fg) || (this.I = this.a.querySelector("." + this.b.Rb), this.Uf = this.Tf = this.Yd = this.Hd = 0, this.Ld = !1, this.Me = this.yh.bind(this), this.a.addEventListener("mousedown", this.Me), this.a.addEventListener("touchstart", this.Me), this.yc = this.ai.bind(this), this.a.addEventListener("mouseup",
                    this.yc), this.a.addEventListener("mouseleave", this.yc), this.a.addEventListener("touchend", this.yc), this.a.addEventListener("blur", this.yc), this.Xh = function() {
                    this.Hd = 1
                }, this.Yh = function(c, d) {
                    this.Tf = c;
                    this.Uf = d
                }, this.Ef = function(c) {
                    if (null !== this.I) {
                        var d = "translate(" + this.Tf + "px, " + this.Uf + "px)";
                        if (c) var e = this.xa.kg;
                        else e = this.xa.ig, b && (d = "translate(" + this.ph / 2 + "px, " + this.lh / 2 + "px)");
                        e = "translate(-50%, -50%) " + d + e;
                        this.I.style.webkitTransform = e;
                        this.I.style.msTransform = e;
                        this.I.style.transform =
                            e;
                        c ? this.I.classList.remove(this.b.xb) : this.I.classList.add(this.b.xb)
                    }
                }, this.Ge = function() {
                    0 < this.Hd-- ? window.requestAnimationFrame(this.Ge.bind(this)) : this.Ef(!1)
                })
            }
        };
        Z.register({
            constructor: a,
            Za: "MaterialRipple",
            V: "mdl-js-ripple-effect",
            wb: !1
        })
    })();
    (function() {
        var a = function(b) {
            this.a = b;
            this.pa()
        };
        window.MaterialSpinner = a;
        a.prototype.xa = {
            pg: 4
        };
        a.prototype.b = {
            we: "mdl-spinner__layer",
            ve: "mdl-spinner__circle-clipper",
            ng: "mdl-spinner__circle",
            og: "mdl-spinner__gap-patch",
            qg: "mdl-spinner__left",
            rg: "mdl-spinner__right"
        };
        a.prototype.Ve = function(b) {
            var c = document.createElement("div");
            c.classList.add(this.b.we);
            c.classList.add(this.b.we + "-" + b);
            b = document.createElement("div");
            b.classList.add(this.b.ve);
            b.classList.add(this.b.qg);
            var d = document.createElement("div");
            d.classList.add(this.b.og);
            var e = document.createElement("div");
            e.classList.add(this.b.ve);
            e.classList.add(this.b.rg);
            for (var g = [b, d, e], f = 0; f < g.length; f++) {
                var l = document.createElement("div");
                l.classList.add(this.b.ng);
                g[f].appendChild(l)
            }
            c.appendChild(b);
            c.appendChild(d);
            c.appendChild(e);
            this.a.appendChild(c)
        };
        a.prototype.createLayer = a.prototype.Ve;
        a.prototype.stop = function() {
            this.a.classList.remove("is-active")
        };
        a.prototype.stop = a.prototype.stop;
        a.prototype.start = function() {
            this.a.classList.add("is-active")
        };
        a.prototype.start = a.prototype.start;
        a.prototype.pa = function() {
            if (this.a) {
                for (var b = 1; b <= this.xa.pg; b++) this.Ve(b);
                this.a.classList.add("is-upgraded")
            }
        };
        Z.register({
            constructor: a,
            Za: "MaterialSpinner",
            V: "mdl-js-spinner",
            wb: !0
        })
    })();
    (function() {
        var a = function(b) {
            this.a = b;
            this.pa()
        };
        window.MaterialTooltip = a;
        a.prototype.xa = {};
        a.prototype.b = {
            te: "is-active",
            di: "mdl-tooltip--bottom",
            ue: "mdl-tooltip--left",
            Ae: "mdl-tooltip--right",
            Xg: "mdl-tooltip--top"
        };
        a.prototype.Gh = function(b) {
            b = b.target.getBoundingClientRect();
            var c = b.left + b.width / 2,
                d = b.top + b.height / 2,
                e = this.a.offsetWidth / 2 * -1,
                g = this.a.offsetHeight / 2 * -1;
            this.a.classList.contains(this.b.ue) || this.a.classList.contains(this.b.Ae) ? 0 > d + g ? (this.a.style.top = "0", this.a.style.marginTop =
                "0") : (this.a.style.top = d + "px", this.a.style.marginTop = g + "px") : 0 > c + e ? (this.a.style.left = "0", this.a.style.marginLeft = "0") : (this.a.style.left = c + "px", this.a.style.marginLeft = e + "px");
            this.a.classList.contains(this.b.Xg) ? this.a.style.top = b.top - this.a.offsetHeight - 10 + "px" : this.a.classList.contains(this.b.Ae) ? this.a.style.left = b.left + b.width + 10 + "px" : this.a.classList.contains(this.b.ue) ? this.a.style.left = b.left - this.a.offsetWidth - 10 + "px" : this.a.style.top = b.top + b.height + 10 + "px";
            this.a.classList.add(this.b.te)
        };
        a.prototype.Jh = function() {
            this.a.classList.remove(this.b.te)
        };
        a.prototype.pa = function() {
            if (this.a) {
                var b = this.a.getAttribute("for") || this.a.getAttribute("data-mdl-for");
                b && (this.F = document.getElementById(b));
                this.F && (this.F.hasAttribute("tabindex") || this.F.setAttribute("tabindex", "0"), this.Ne = this.Gh.bind(this), this.vd = this.Jh.bind(this), this.F.addEventListener("mouseenter", this.Ne, !1), this.F.addEventListener("touchend", this.Ne, !1), this.F.addEventListener("mouseleave", this.vd, !1), window.addEventListener("scroll",
                    this.vd, !0), window.addEventListener("touchstart", this.vd))
            }
        };
        Z.register({
            constructor: a,
            Za: "MaterialTooltip",
            V: "mdl-tooltip"
        })
    })();
    var wh = function(a, b) {
            return a.details[b].clicks.short_url
        },
        xh = function() {
            var a = Q("DIV", ["mdl-spinner", "mdl-js-spinner", "is-active"]);
            Z.oc(a);
            return a
        },
        Ch = function(a) {
            function b() {
                return Q("DIV", "container", [xh()])
            }
            var c = this;
            this.A = null;
            this.ea = new Gd;
            this.h = [];
            this.jb = [];
            var d = Q("SPAN");
            d.innerHTML = '<svg class="warning-icon" fill="#838383" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>';
            this.jh = Q("DIV", ["analytics", "announcement"], [Q("DIV", ["innerbox"], [d, R("Starting "), Q("SPAN", {
                    Vb: "warning"
                }, "March 30, 2018"), R(", we will be turning down support for goo.gl URL shortener. From "), Q("SPAN", {
                    Vb: "warning"
                }, "April 13, 2018"), R(" only existing users will be able to create short links on the goo.gl console. You will be able to view your analytics data and download your short link information in csv format for up to one year, until "), Q("SPAN", {
                    Vb: "warning"
                }, "March 30, 2019"), R(", when we will discontinue goo.gl. Previously created links will continue to redirect  to their intended destination. Please see this "),
                Q("A", {
                    href: "//developers.googleblog.com/2018/03/transitioning-google-url-shortener.html"
                }, [R("blog post"), Q("I", "material-icons", "open_in_new")]), R(" for more details.")
            ])]);
            this.he = Q("A", "short-url");
            d = Q("H1", null, [R("Analytics data for "), this.he]);
            this.Jd = Q("DIV", "created", "Created ");
            this.Cb = Q("A");
            var e = Q("DIV", "constrain", [d, this.Jd, Q("DIV", "long-url", [R("Original URL: "), this.Cb])]);
            this.Qa = Q("DIV", ["analytics", "header"], [e]);
            this.je = Q("DIV", "count");
            this.ge = [Q("LI", "mdl-menu__item", "two hours"),
                Q("LI", "mdl-menu__item", "day"), Q("LI", "mdl-menu__item", "week"), Q("LI", "mdl-menu__item", "month"), Q("LI", "mdl-menu__item", "all time")
            ];
            e = Q("UL", ["mdl-menu", "mdl-menu--bottom-right", "mdl-js-menu", "mdl-js-ripple-effect"], this.ge);
            Y(e, {
                "for": "timeframe-select"
            });
            D(this.jb, e);
            this.fe = Q("BUTTON", {
                id: "timeframe-select",
                "class": "mdl-button mdl-js-button"
            }, a);
            D(this.h, this.fe);
            var g = b(),
                f = b(),
                l = b(),
                m = b(),
                r = b();
            this.fa = Q("DIV", ["analytics", "content", "constrain"], [Q("DIV", "chart", [Q("DIV", "options", [Q("DIV",
                "total-clicks", [R("Total Clicks"), this.je]), Q("DIV", "timeframe", [R("Timeframe: "), e, this.fe])]), g]), Q("DIV", "chart", [Q("SPAN", "title", "Referrers"), Q("DIV", "line"), f]), Q("DIV", "chart", [Q("SPAN", "title", "Browsers"), Q("DIV", "line"), l]), Q("DIV", "chart", [Q("SPAN", "title", "Countries"), Q("DIV", "line"), m]), Q("DIV", "chart", [Q("SPAN", "title", "Platforms"), Q("DIV", "line"), r])]);
            W.Aa && (this.Ub = Q("A", {
                    id: "back-button",
                    "class": "mdl-button mdl-js-button mdl-button--icon",
                    href: "/"
                }, [Q("I", "material-icons", "arrow_back")]),
                D(this.h, this.Ub), Ig(d, this.Ub), e = Q("DIV", "mdl-tooltip", "Go Back"), Y(e, {
                    "for": "back-button"
                }), D(this.h, e), T(d, e));
            var n = a.replace(/_/g, " ");
            google.charts.load("current", {
                packages: ["corechart", "bar", "geochart"]
            });
            google.charts.setOnLoadCallback(function() {
                c.ea.set("clicks", new google.visualization.AreaChart(g));
                yh(c, n);
                c.ea.set("referrers", new google.visualization.PieChart(f));
                zh(c, n);
                c.ea.set("browsers", new google.charts.Bar(l));
                Ah(c, "browsers", n);
                c.ea.set("countries", new google.visualization.GeoChart(m));
                Bh(c, n);
                c.ea.set("platforms", new google.charts.Bar(r));
                Ah(c, "platforms", n)
            })
        };
    Ch.prototype.show = function(a, b, c) {
        var d = this,
            e = kh(b),
            g = c.replace(/_/g, " "),
            f = function() {
                null != d.A.details[g] ? (Kg(d.Jd, "Created " + lh(d.A.creation_time)), Y(d.Cb, {
                    href: d.A.long_url
                }), Kg(d.Cb, kh(d.A.long_url)), T(d.Cb, Q("I", "material-icons", "open_in_new")), Kg(d.je, mh(wh(d.A, g))), yh(d, g), zh(d, g), Ah(d, "browsers", g), Bh(d, g), Ah(d, "platforms", g)) : (X("error", "Invalid timeframe"), Dh(b, "all_time"))
            };
        if (c = null == this.A || this.A.short_url !== b) Y(this.he, {
                href: b
            }), Kg(this.he, e), Kg(this.Jd, "Created "), this.Cb.removeAttribute("href"),
            Kg(this.Cb, ""), Kg(this.je, "");
        Kg(this.fe, g);
        this.ea.forEach(function(l) {
            l.clearChart();
            Hg(l.getContainer())
        });
        T(a, this.jh);
        T(a, this.Qa);
        T(a, this.fa);
        Z.da(this.h);
        Z.da(this.jb);
        vb(this.jb);
        W.Aa && L(this.Ub, "click", this.bf, !1, this);
        C(this.ge, function(l) {
            Og(l) === g ? Y(l, {
                disabled: !0
            }) : l.removeAttribute("disabled");
            L(l, "click", d.mf, !1, d)
        });
        this.ea.forEach(function(l) {
            T(l.getContainer(), xh())
        });
        c ? hh("/api/analytics", {
            security_token: W.pb,
            url: b
        }, function(l) {
            200 === P(l) ? (d.A = uf(l), f()) : (X("error", [R("Short URL"),
                Q("STRONG", null, e), R("not found")
            ]), Eh(!0))
        }) : f()
    };
    Ch.prototype.na = function() {
        var a = this;
        Z.ha(this.h);
        U(this.Qa);
        U(this.fa);
        C(this.ge, function(b) {
            L(b, "click", a.mf, !1, a)
        });
        W.Aa && (M(this.Ub, "click", this.bf, !1, this), this.Ub.dispatchEvent(new MouseEvent("mouseleave")))
    };
    var yh = function(a, b) {
            var c = a.ea.get("clicks");
            if (null != a.A && null != c) {
                var d = c.getContainer().offsetWidth,
                    e = d / 4;
                a = a.A.details[b].clicks;
                var g = a.bucket_size,
                    f = a.end_time - a.buckets.length * g;
                a = rb(a.buckets, function(l) {
                    f += g;
                    return [new Date(1E3 * f), l]
                });
                xb(a, ["", "Clicks"]);
                c.draw(google.visualization.arrayToDataTable(a), {
                    width: d,
                    height: e,
                    legend: {
                        position: "none"
                    },
                    chartArea: {
                        top: 5,
                        left: 5,
                        width: d - 10,
                        height: e - 25
                    },
                    vAxis: {
                        textPosition: "in",
                        minValue: 0,
                        maxValue: 10,
                        viewWindow: {
                            min: 0
                        }
                    },
                    colors: ["#4285f4"]
                })
            }
        },
        zh = function(a,
            b) {
            var c = a.ea.get("referrers");
            if (null != a.A && null != c) {
                var d = c.getContainer().offsetWidth,
                    e = 2 * d / 3,
                    g = 0,
                    f = rb(a.A.details[b].referrers, function(l) {
                        g += l.count;
                        return [l.id, l.count]
                    });
                a = wh(a.A, b);
                0 < a - g && D(f, ["Others", a - g]);
                Fb(f, function(l) {
                    return l[1]
                });
                f = f.reverse();
                xb(f, ["", "Clicks"]);
                c.draw(google.visualization.arrayToDataTable(f), {
                    width: d,
                    height: e,
                    legend: {
                        position: "labeled"
                    },
                    pieHole: .75,
                    pieSliceText: "none",
                    chartArea: {
                        left: 5,
                        width: d - 10,
                        height: e - 20
                    },
                    colors: "#4285f4 #a2d200 #fe9900 #f0d202 #994499 #dd4477".split(" ")
                })
            }
        },
        Ah = function(a, b, c) {
            var d = a.ea.get(b);
            if (null != a.A && null != d) {
                var e = d.getContainer().offsetWidth,
                    g = 2 * e / 3,
                    f = 0;
                b = rb(Cb(a.A.details[c][b], 0, 5), function(l) {
                    f += l.count;
                    return [l.id, l.count]
                });
                a = wh(a.A, c);
                0 < a - f && D(b, ["Others", a - f]);
                xb(b, ["", "Clicks"]);
                e = google.charts.Bar.convertOptions({
                    width: e,
                    height: g,
                    legend: {
                        position: "none"
                    },
                    bars: "horizontal",
                    chartArea: {
                        top: 10,
                        left: 70,
                        width: e - 90,
                        height: g - 40
                    }
                });
                d.draw(google.visualization.arrayToDataTable(b), e)
            }
        },
        Bh = function(a, b) {
            var c = a.ea.get("countries");
            if (null != a.A &&
                null != c) {
                var d = c.getContainer().offsetWidth,
                    e = 2 * d / 3;
                a = rb(a.A.details[b].countries, function(g) {
                    return [g.id, g.label, g.count]
                });
                0 == a.length ? D(a, ["Id", "Clicks"]) : xb(a, ["Id", "Label", "Clicks"]);
                c.draw(google.visualization.arrayToDataTable(a), {
                    width: d,
                    height: e,
                    colorAxis: {
                        minValue: 0,
                        colors: ["#a4bbcd", "#4285f4"]
                    }
                })
            }
        };
    Ch.prototype.bf = function(a) {
        a.preventDefault();
        Eh()
    };
    Ch.prototype.mf = function(a) {
        Eg(a.currentTarget) && (a.preventDefault(), Dh(this.A.short_url, Og(a.currentTarget)))
    };
    var Fh = /^analytics\/([^\/]+\/[^\/]+)\/([^\/]+)(?:\/.*)?/;
    var Gh = function() {
        this.h = [];
        this.Nb = Q("INPUT", {
            "class": "mdl-shadow--2dp",
            placeholder: "Your short URL here"
        });
        this.ob = Q("BUTTON", ["mdl-button", "mdl-js-button", "mdl-button--raised", "mdl-js-ripple-effect"], "Report URL");
        D(this.h, this.ob);
        this.Qa = Q("DIV", ["report", "header", "constrain"], [Q("DIV", ["container", "mdl-shadow--2dp"], [Q("H1", null, "The goo.gl short URL you wish to report:"), Q("DIV", "input-container", [this.Nb, this.ob]), Q("DIV", "tagline", "Your email address will be recorded as part of the request")])])
    };
    Gh.prototype.show = function(a) {
        L(this.Nb, "keypress", this.hf, !1, this);
        L(this.ob, "click", this.gf, !1, this);
        T(a, this.Qa);
        Z.da(this.h)
    };
    Gh.prototype.na = function() {
        Z.ha(this.h);
        U(this.Qa);
        M(this.Nb, "keypress", this.hf, !1, this);
        M(this.ob, "click", this.gf, !1, this)
    };
    Gh.prototype.hf = function(a) {
        13 === a.keyCode && this.ob.click()
    };
    Gh.prototype.gf = function() {
        var a = this,
            b = this.Nb.value;
        Pa(b) || (Y(this.Nb, {
            disabled: !0
        }), Y(this.ob, {
            disabled: !0
        }), hh("/api/reportabuse", {
            security_token: W.pb,
            url: b
        }, function(c) {
            var d = kh(b);
            200 === P(c) ? X("success", [R("Short URL"), Q("STRONG", null, d), R("reported")]) : 403 === P(c) ? X("error", "You need to sign in to request a review") : X("error", "Invalid short URL");
            a.Nb.removeAttribute("disabled");
            a.ob.removeAttribute("disabled")
        }))
    };
    var Hh = /^reportSpam(?:\/.*)?/i;
    var Ih = function(a, b, c, d) {
        N.call(this);
        this.td = d;
        this.h = [];
        this.Ja = !1;
        this.Ac = Q("BUTTON", ["close", "mdl-button", "mdl-js-button", "mdl-button--icon"], [Q("I", "material-icons", "close")]);
        D(this.h, this.Ac);
        this.a = Q("DIV", ["modal", a], [Q("DIV", ["container", "mdl-shadow--24dp"], [Q("DIV", "title", [R(b), this.Ac]), Q("DIV", "content", c), Q("DIV", "actions", this.td)])])
    };
    Ih.prototype = aa(N.prototype);
    Ih.prototype.constructor = Ih;
    if (ha) ha(Ih, N);
    else
        for (var Jh in N)
            if ("prototype" != Jh)
                if (Object.defineProperties) {
                    var Kh = Object.getOwnPropertyDescriptor(N, Jh);
                    Kh && Object.defineProperty(Ih, Jh, Kh)
                } else Ih[Jh] = N[Jh];
    Ih.O = N.prototype;
    var Lh = function(a) {
        a.Ja || (a.Ja = !0, L(a.Ac, "click", a.Xb, !1, a), C(a.td, function(b) {
            L(b, "click", a.Xb, !1, a)
        }), T(document.body, a.a), Z.da(a.h), a.dispatchEvent("modal-controller-presented"))
    };
    Ih.prototype.Xb = function(a) {
        var b = this;
        a = void 0 === a ? new Event("dismiss") : a;
        this.Ja && (Ne(this, "modal-controller-dismissed", !1, a), Z.ha(this.h), U(this.a), C(this.td, function(c) {
            M(c, "click", b.Xb, !1, b)
        }), M(this.Ac, "click", this.Xb, !1, this), this.Ja = !1)
    };
    Ad("goog.dom.SavedRange");
    var Mh = function(a, b, c, d, e) {
        this.M = !!b;
        this.node = null;
        this.T = 0;
        this.be = !1;
        this.Cc = !c;
        a && this.setPosition(a, d);
        this.depth = void 0 != e ? e : this.T || 0;
        this.M && (this.depth *= -1)
    };
    y(Mh, Cd);
    h = Mh.prototype;
    h.setPosition = function(a, b, c) {
        if (this.node = a) this.T = ma(b) ? b : 1 != this.node.nodeType ? 0 : this.M ? -1 : 1;
        ma(c) && (this.depth = c)
    };
    h.Ad = function(a) {
        this.node = a.node;
        this.T = a.T;
        this.depth = a.depth;
        this.M = a.M;
        this.Cc = a.Cc
    };
    h.clone = function() {
        return new Mh(this.node, this.M, !this.Cc, this.T, this.depth)
    };
    h.next = function() {
        if (this.be) {
            if (!this.node || this.Cc && 0 == this.depth) throw Bd;
            var a = this.node;
            var b = this.M ? -1 : 1;
            if (this.T == b) {
                var c = this.M ? a.lastChild : a.firstChild;
                c ? this.setPosition(c) : this.setPosition(a, -1 * b)
            } else(c = this.M ? a.previousSibling : a.nextSibling) ? this.setPosition(c) : this.setPosition(a.parentNode, -1 * b);
            this.depth += this.T * (this.M ? -1 : 1)
        } else this.be = !0;
        a = this.node;
        if (!this.node) throw Bd;
        return a
    };
    h.splice = function(a) {
        var b = this.node,
            c = this.M ? 1 : -1;
        this.T == c && (this.T = -1 * c, this.depth += this.T * (this.M ? -1 : 1));
        this.M = !this.M;
        Mh.prototype.next.call(this);
        this.M = !this.M;
        c = sa(arguments[0]) ? arguments[0] : arguments;
        for (var d = c.length - 1; 0 <= d; d--) {
            var e = c[d],
                g = b;
            z(null != e && null != g, "goog.dom.insertSiblingAfter expects non-null arguments");
            g.parentNode && g.parentNode.insertBefore(e, g.nextSibling)
        }
        U(b)
    };
    var Nh = function() {
            var a = window;
            if (a.getSelection) return a.getSelection();
            a = a.document;
            var b = a.selection;
            if (b) {
                try {
                    var c = b.createRange();
                    if (c.parentElement) {
                        if (c.parentElement().document != a) return null
                    } else if (!c.length || c.item(0).document != a) return null
                } catch (d) {
                    return null
                }
                return b
            }
            return null
        },
        Oh = function(a, b) {
            Mh.call(this, a, b, !0)
        };
    y(Oh, Mh);
    var Ph = function(a, b, c, d, e) {
        this.o = this.s = null;
        this.B = this.u = 0;
        this.ib = !!e;
        if (a) {
            this.s = a;
            this.u = b;
            this.o = c;
            this.B = d;
            if (1 == a.nodeType && "BR" != a.tagName)
                if (a = a.childNodes, b = a[b]) this.s = b, this.u = 0;
                else {
                    a.length && (this.s = a[a.length - 1]);
                    var g = !0
                }
            1 == c.nodeType && ((this.o = c.childNodes[d]) ? this.B = 0 : this.o = c)
        }
        Mh.call(this, this.ib ? this.o : this.s, this.ib, !0);
        if (g) try {
            this.next()
        } catch (f) {
            if (f != Bd) throw f;
        }
    };
    y(Ph, Oh);
    h = Ph.prototype;
    h.la = function() {
        return this.s
    };
    h.Ea = function() {
        return this.o
    };
    h.next = function() {
        if (this.be && (this.node != (this.ib ? this.s : this.o) ? 0 : this.ib ? this.u ? -1 != this.T : 1 == this.T : !this.B || 1 != this.T)) throw Bd;
        return Ph.O.next.call(this)
    };
    h.Ad = function(a) {
        this.s = a.s;
        this.o = a.o;
        this.u = a.u;
        this.B = a.B;
        this.ib = a.ib;
        Ph.O.Ad.call(this, a)
    };
    h.clone = function() {
        var a = new Ph(this.s, this.u, this.o, this.B, this.ib);
        a.Ad(this);
        return a
    };
    var Qh = function() {},
        Rh = function(a, b, c) {
            c = c && !b.isCollapsed();
            b = b.g;
            try {
                return c ? 0 <= a.U(b, 0, 1) && 0 >= a.U(b, 1, 0) : 0 <= a.U(b, 0, 0) && 0 >= a.U(b, 1, 1)
            } catch (d) {
                if (!J) throw d;
                return !1
            }
        };
    Qh.prototype.containsNode = function(a, b) {
        return Rh(this, Sh(a), b)
    };
    Qh.prototype.uc = function() {
        return new Ph(this.la(), this.Pa(), this.Ea(), this.fb())
    };
    var Th = function(a) {
        this.g = a
    };
    y(Th, Qh);
    var Vh = function(a) {
        var b = ug(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
        else if (Uh(a)) {
            for (var c, d = a;
                (c = d.firstChild) && Uh(c);) d = c;
            b.setStart(d, 0);
            for (d = a;
                (c = d.lastChild) && Uh(c);) d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else c = a.parentNode, a = ob(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
        return b
    };
    h = Th.prototype;
    h.clone = function() {
        return new this.constructor(this.g.cloneRange())
    };
    h.getContainer = function() {
        return this.g.commonAncestorContainer
    };
    h.la = function() {
        return this.g.startContainer
    };
    h.Pa = function() {
        return this.g.startOffset
    };
    h.Ea = function() {
        return this.g.endContainer
    };
    h.fb = function() {
        return this.g.endOffset
    };
    h.U = function(a, b, c) {
        return this.g.compareBoundaryPoints(1 == c ? 1 == b ? k.Range.START_TO_START : k.Range.START_TO_END : 1 == b ? k.Range.END_TO_START : k.Range.END_TO_END, a)
    };
    h.isCollapsed = function() {
        return this.g.collapsed
    };
    h.select = function(a) {
        var b = Bg(ug(this.la()));
        this.ic(b.getSelection(), a)
    };
    h.ic = function(a) {
        a.removeAllRanges();
        a.addRange(this.g)
    };
    h.surroundContents = function(a) {
        this.g.surroundContents(a);
        return a
    };
    h.insertNode = function(a, b) {
        var c = this.g.cloneRange();
        c.collapse(b);
        c.insertNode(a);
        c.detach();
        return a
    };
    h.collapse = function(a) {
        this.g.collapse(a)
    };
    var Wh = function(a) {
        this.g = a
    };
    y(Wh, Th);
    Wh.prototype.ic = function(a, b) {
        !b || this.isCollapsed() ? Wh.O.ic.call(this, a, b) : (a.collapse(this.Ea(), this.fb()), a.extend(this.la(), this.Pa()))
    };
    var Xh = function(a, b) {
        this.o = this.s = this.Ca = null;
        this.B = this.u = -1;
        this.g = a;
        this.xh = b
    };
    y(Xh, Qh);
    Ad("goog.dom.browserrange.IeRange");
    var Yh = function(a) {
        var b = ug(a).body.createTextRange();
        if (1 == a.nodeType) b.moveToElementText(a), Uh(a) && !a.childNodes.length && b.collapse(!1);
        else {
            for (var c = 0, d = a; d = d.previousSibling;) {
                var e = d.nodeType;
                if (3 == e) c += d.length;
                else if (1 == e) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move("character", c);
            b.moveEnd("character", a.length)
        }
        return b
    };
    Xh.prototype.clone = function() {
        var a = new Xh(this.g.duplicate(), this.xh);
        a.Ca = this.Ca;
        a.s = this.s;
        a.o = this.o;
        return a
    };
    var Zh = function(a) {
        a.Ca = a.s = a.o = null;
        a.u = a.B = -1
    };
    Xh.prototype.getContainer = function() {
        if (!this.Ca) {
            var a = this.g.text,
                b = this.g.duplicate(),
                c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd("character", -c);
            c = b.parentElement();
            b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
            if (this.isCollapsed() && 0 < b) return this.Ca = c;
            for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == $h(c.firstChild) && Uh(c.firstChild);) c = c.firstChild;
            0 == a.length && (c = ai(this, c));
            this.Ca = c
        }
        return this.Ca
    };
    var ai = function(a, b) {
        for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
            var g = c[d];
            if (Uh(g)) {
                var f = Yh(g),
                    l = f.htmlText != g.outerHTML;
                if (a.isCollapsed() && l ? 0 <= a.U(f, 1, 1) && 0 >= a.U(f, 1, 0) : a.g.inRange(f)) return ai(a, g)
            }
        }
        return b
    };
    h = Xh.prototype;
    h.la = function() {
        this.s || (this.s = bi(this, 1), this.isCollapsed() && (this.o = this.s));
        return this.s
    };
    h.Pa = function() {
        0 > this.u && (this.u = ci(this, 1), this.isCollapsed() && (this.B = this.u));
        return this.u
    };
    h.Ea = function() {
        if (this.isCollapsed()) return this.la();
        this.o || (this.o = bi(this, 0));
        return this.o
    };
    h.fb = function() {
        if (this.isCollapsed()) return this.Pa();
        0 > this.B && (this.B = ci(this, 0), this.isCollapsed() && (this.u = this.B));
        return this.B
    };
    h.U = function(a, b, c) {
        return this.g.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
    };
    var bi = function(a, b, c) {
            c = c || a.getContainer();
            if (!c || !c.firstChild) return c;
            for (var d = 1 == b, e = 0, g = c.childNodes.length; e < g; e++) {
                var f = d ? e : g - e - 1,
                    l = c.childNodes[f];
                try {
                    var m = Sh(l)
                } catch (n) {
                    continue
                }
                var r = m.g;
                if (a.isCollapsed())
                    if (!Uh(l)) {
                        if (0 == a.U(r, 1, 1)) {
                            a.u = a.B = f;
                            break
                        }
                    } else {
                        if (Rh(m, a)) return bi(a, b, l)
                    }
                else {
                    if (Rh(a, m)) {
                        if (!Uh(l)) {
                            d ? a.u = f : a.B = f + 1;
                            break
                        }
                        return bi(a, b, l)
                    }
                    if (0 > a.U(r, 1, 0) && 0 < a.U(r, 0, 1)) return bi(a, b, l)
                }
            }
            return c
        },
        ci = function(a, b) {
            var c = 1 == b,
                d = c ? a.la() : a.Ea();
            if (1 == d.nodeType) {
                d = d.childNodes;
                for (var e = d.length, g = c ? 1 : -1, f = c ? 0 : e - 1; 0 <= f && f < e; f += g) {
                    var l = d[f];
                    if (!Uh(l) && 0 == a.g.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Sh(l).g)) return c ? f : f + 1
                }
                return -1 == f ? 0 : f
            }
            a = a.g.duplicate();
            b = Yh(d);
            a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
            a = a.text.length;
            return c ? d.length - a : a
        },
        $h = function(a) {
            return 3 == a.nodeType ? a.nodeValue : a.innerText
        };
    Xh.prototype.isCollapsed = function() {
        return 0 == this.g.compareEndPoints("StartToEnd", this.g)
    };
    Xh.prototype.select = function() {
        this.g.select()
    };
    var di = function(a, b, c) {
        c = c || vg(a.parentElement());
        var d, e = d = b.id;
        d || (d = b.id = "goog_" + db++);
        a.pasteHTML(b.outerHTML);
        (b = wg(c.Yb, d)) && (e || b.removeAttribute("id"));
        return b
    };
    Xh.prototype.surroundContents = function(a) {
        U(a);
        a.innerHTML = this.g.htmlText;
        (a = di(this.g, a)) && this.g.moveToElementText(a);
        Zh(this);
        return a
    };
    Xh.prototype.insertNode = function(a, b) {
        var c = this.g.duplicate();
        var d = d || vg(c.parentElement());
        if (1 != a.nodeType) {
            var e = !0;
            a = d.uh("DIV", null, a)
        }
        c.collapse(b);
        a = di(c, a, d);
        if (e) {
            b = a.firstChild;
            c = a;
            if ((d = c.parentNode) && 11 != d.nodeType)
                if (c.removeNode) c.removeNode(!1);
                else {
                    for (; a = c.firstChild;) d.insertBefore(a, c);
                    U(c)
                }
            a = b
        }
        b = a;
        Zh(this);
        return b
    };
    Xh.prototype.collapse = function(a) {
        this.g.collapse(a);
        a ? (this.o = this.s, this.B = this.u) : (this.s = this.o, this.u = this.B)
    };
    var ei = function(a) {
        this.g = a
    };
    y(ei, Th);
    ei.prototype.ic = function(a) {
        a.collapse(this.la(), this.Pa());
        this.Ea() == this.la() && this.fb() == this.Pa() || a.extend(this.Ea(), this.fb());
        0 == a.rangeCount && a.addRange(this.g)
    };
    var fi = function(a) {
        this.g = a
    };
    y(fi, Th);
    fi.prototype.U = function(a, b, c) {
        return fd("528") ? fi.O.U.call(this, a, b, c) : this.g.compareBoundaryPoints(1 == c ? 1 == b ? k.Range.START_TO_START : k.Range.END_TO_START : 1 == b ? k.Range.START_TO_END : k.Range.END_TO_END, a)
    };
    fi.prototype.ic = function(a, b) {
        b ? a.setBaseAndExtent(this.Ea(), this.fb(), this.la(), this.Pa()) : a.setBaseAndExtent(this.la(), this.Pa(), this.Ea(), this.fb())
    };
    var Sh = function(a) {
            if (!J || 9 <= Number(gd)) a = Zc ? new fi(Vh(a)) : Yc ? new Wh(Vh(a)) : Wc ? new ei(Vh(a)) : new Th(Vh(a));
            else {
                var b = new Xh(Yh(a), ug(a));
                if (Uh(a)) {
                    for (var c, d = a;
                        (c = d.firstChild) && Uh(c);) d = c;
                    b.s = d;
                    b.u = 0;
                    for (d = a;
                        (c = d.lastChild) && Uh(c);) d = c;
                    b.o = d;
                    b.B = 1 == d.nodeType ? d.childNodes.length : d.length;
                    b.Ca = a
                } else b.s = b.o = b.Ca = a.parentNode, b.u = ob(b.Ca.childNodes, a), b.B = b.u + 1;
                a = b
            }
            return a
        },
        Uh = function(a) {
            return Gg(a) || 3 == a.nodeType
        };
    var gi = function(a) {
            a = Q("DIV", "copy-text-container", a);
            T(document.body, a);
            Sh(a).select();
            try {
                document.execCommand("copy");
                var b = Nh();
                if (b)
                    if (b.empty) try {
                        b.empty()
                    } catch (c) {} else try {
                        b.removeAllRanges()
                    } catch (c) {}
                X("success", "Short URL copied")
            } catch (c) {
                X("error", "Unable to copy short URL")
            }
            U(a)
        },
        hi = function(a) {
            null != (a.match(Ze)[1] || null) || (a = "http://" + a);
            return a
        },
        ki = function() {
            this.S = [];
            this.L = 0;
            this.ta = 10;
            this.Fa = 0;
            this.Qe = null;
            this.yd = void 0;
            this.h = [];
            this.jb = [];
            this.ca = Q("INPUT", {
                placeholder: "Your original URL here",
                disabled: !0
            });
            this.ba = Q("BUTTON", {
                "class": "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect",
                disabled: !0
            }, "Shorten URL");
            D(this.h, this.ba);
            var a = Q("DIV", "input-container", [this.ca]),
                b = [];
            W.Aa && (b = [Q("H1", null, "Simplify your links"), a, Q("DIV", "tagline", "All goo.gl URLs and click analytics are public and can be accessed by anyone")]);
            b = Q("DIV", "constrain", b);
            this.Qa = Q("DIV", ["shorten", "header", "mdl-shadow--2dp"], [b]);
            this.fa = Q("DIV", ["shorten", "content", "constrain"]);
            b = Q("SPAN");
            b.innerHTML =
                '<svg class="warning-icon" fill="#838383" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>';
            T(this.fa, Q("DIV", "announcement", [Q("DIV", null, [b, R("On "), Q("SPAN", {
                    Vb: "warning"
                }, "March 30, 2018"), R(", we turned down support for goo.gl URL shortener. From "), Q("SPAN", {
                    Vb: "warning"
                }, "April 13, 2018"), R(", only existing users were able to create short links on the goo.gl console. Analytics data was available for up to one year, until "),
                Q("SPAN", {
                    Vb: "warning"
                }, "March 30, 2019"), R(", when goo.gl was discontinued. Previously created links will continue to redirect  to their intended destination. Please see this "), Q("A", {
                    href: "//developers.googleblog.com/2018/03/transitioning-google-url-shortener.html"
                }, [R("blog post"), Q("I", "material-icons", "open_in_new")]), R(" for more details.")
            ])]));
            if (W.Aa) {
                this.cd = R("10");
                this.hc = [Q("LI", "mdl-menu__item", "10"), Q("LI", "mdl-menu__item", "15"), Q("LI", "mdl-menu__item", "20")];
                Y(this.hc[0], {
                    disabled: !0
                });
                b = Q("UL", ["mdl-menu", "mdl-menu--bottom-left", "mdl-js-menu", "mdl-js-ripple-effect"], this.hc);
                Y(b, {
                    "for": "row-count"
                });
                D(this.jb, b);
                this.zf = Q("DIV", "count", "0-0 of 0");
                this.Jb = Q("BUTTON", {
                    "class": "mdl-button mdl-js-button mdl-button--icon",
                    disabled: !0
                }, [Q("I", "material-icons", "chevron_left")]);
                D(this.h, this.Jb);
                this.Kb = Q("BUTTON", {
                    "class": "mdl-button mdl-js-button mdl-button--icon",
                    disabled: !0
                }, [Q("I", "material-icons", "chevron_right")]);
                D(this.h, this.Kb);
                this.jc = Q("TBODY");
                var c = Q("MD-ICON", {
                        "class": "md-icon"
                    },
                    "download_csv");
                c.innerHTML = '<svg id="download-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>';
                this.Fd = Q("BUTTON", {
                    "class": "download"
                }, [c, "Download CSV"]);
                D(this.h, this.Fd);
                this.Ob = Q("TABLE", ["mdl-data-table", "mdl-js-data-table", "mdl-shadow--2dp"], [Q("THEAD", null, [Q("TR", null, [Q("TD", {
                    colspan: 5
                }, [this.Fd])]), Q("TR", null, [Q("TH", ["long-url", "mdl-data-table__cell--non-numeric"], "Original URL"), Q("TH", ["created", "mdl-data-table__cell--non-numeric"], "Created"), Q("TH", ["short-url", "mdl-data-table__cell--non-numeric"], "Short URL"), Q("TH", ["all-clicks", "mdl-data-table__cell--non-numeric"], "All Clicks"), Q("TH", "options")])]), Q("TFOOT", null, Q("TR", null, [Q("TD", {
                    colspan: 5
                }, [Q("DIV", "pagination", [Q("DIV", "count-container", ["Rows per page:", b, Q("BUTTON", {
                    id: "row-count"
                }, [this.cd, Q("I", "material-icons",
                    "arrow_drop_down")])]), this.zf, this.Jb, this.Kb])])])), this.jc]);
                D(this.h, this.Ob);
                T(this.fa, this.Ob);
                T(a, this.ba);
                ii(this)
            } else ji(this)
        };
    ki.prototype.show = function(a) {
        var b = this;
        L(this.ca, "keypress", this.lf, !1, this);
        L(this.ba, "click", this.kf, !1, this);
        W.Aa && (C(this.hc, function(c) {
            L(c, "click", b.jf, !1, b)
        }), L(this.Jb, "click", this.ef, !1, this), L(this.Kb, "click", this.ff, !1, this), L(this.Fd, "click", this.Bh, !1, this));
        T(a, this.Qa);
        T(a, this.fa);
        Z.da(this.h);
        Z.da(this.jb);
        vb(this.jb);
        this.gc()
    };
    ki.prototype.na = function() {
        var a = this;
        Z.ha(this.h);
        U(this.Qa);
        U(this.fa);
        M(this.ca, "keypress", this.lf, !1, this);
        M(this.ba, "click", this.kf, !1, this);
        W.Aa && (C(this.hc, function(b) {
            M(b, "click", a.jf, !1, a)
        }), M(this.Jb, "click", this.ef, !1, this), M(this.Kb, "click", this.ff, !1, this))
    };
    ki.prototype.gc = function() {
        "undefined" !== typeof grecaptcha && (null == this.yd && null != this.Qe && ta(grecaptcha.render) ? (Hg(this.Qe), this.yd = grecaptcha.render("captcha", {
            sitekey: "6LchOvkSAAAAABtPQPc0LH1A6rqU5WR9CXFssNJV"
        }), this.ca.removeAttribute("disabled"), this.ba.removeAttribute("disabled")) : ta(grecaptcha.reset) && grecaptcha.reset())
    };
    ki.prototype.qf = function(a) {
        var b = this;
        if (W.Aa) {
            Y(this.ca, {
                disabled: !0
            });
            Y(this.ba, {
                disabled: !0
            });
            var c = [Q("BUTTON", ["cancel", "mdl-button", "mdl-js-button", "mdl-js-ripple-effect"], "Cancel"), Q("BUTTON", "hide mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect".split(" "), "Hide")],
                d = new Ih("hide-confirmation", "Hide a short URL", [Q("DIV", "warning", [Q("I", "material-icons", "warning_triangle"), Q("DIV", "text", "The short URL will be hidden from your table, but remain public and accessible by anyone")]),
                    Q("DIV", "heading", "Short URL"), Q("DIV", "short-url", kh(a.$d))
                ], c);
            L(d, "modal-controller-presented", function() {
                Z.da(c)
            });
            L(d, "modal-controller-dismissed", function(e) {
                Z.ha(c);
                e.currentTarget !== c[1] ? (b.ca.removeAttribute("disabled"), b.ba.removeAttribute("disabled")) : hh("/api/hide", {
                    urls: a.$d,
                    security_token: W.pb
                }, function(g) {
                    var f = kh(a.$d);
                    200 === P(g) ? (a.na(), zb(b.S, a), b.Fa--, 0 == b.S.length ? (U(b.Ob), ji(b)) : li(b), X("success", [R("Short URL"), Q("STRONG", null, f), R("hidden")])) : X("error", [R("Unable to hide"),
                        Q("STRONG", null, f)
                    ]);
                    b.ca.removeAttribute("disabled");
                    b.ba.removeAttribute("disabled")
                })
            });
            Lh(d)
        }
    };
    var ji = function(a) {
        function b(c, d, e) {
            return Q("DIV", c.toLowerCase(), [Q("H2", null, [Q("I", "material-icons", d), R(c)]), R(e)])
        }
        T(a.fa, Q("DIV", "steps", [b("Shorten", "link", "Shorten your URL so it\u2019s ready to be shared everywhere"), b("Track", "trending_up", "Analytics help you know where your clicks are coming from"), b("Learn", "people", "Understand and visualize your audience")]));
        T(a.fa, Q("DIV", "firebase", [Q("IMG", {
            src: "/static/Firebase.png"
        }), Q("DIV", null, [Q("H2", null, "Are you an app developer?"), R("Use Firebase Dynamic Links to deep link users directly into your app. "),
            Q("A", {
                href: "//firebase.google.com/docs/dynamic-links/"
            }, [R("Learn More"), Q("I", "material-icons", "open_in_new")])
        ])]))
    };
    h = ki.prototype;
    h.lf = function(a) {
        13 === a.keyCode && this.ba.click()
    };
    h.kf = function() {
        var a = this,
            b = this.ca.value;
        if (!Pa(b)) {
            Y(this.ca, {
                disabled: !0
            });
            Y(this.ba, {
                disabled: !0
            });
            var c = "";
            "undefined" !== typeof grecaptcha && ta(grecaptcha.getResponse) && (c = grecaptcha.getResponse(this.yd));
            b = {
                url: hi(b),
                captcha_response: c,
                security_token: W.pb,
                typed_url: b,
                botguard_response: W.kh
            };
            hh("/api/shorten", b, function(d) {
                if (201 === P(d)) {
                    var e = uf(d);
                    a.ca.value = "";
                    W.Aa && (d = new mi(a, e), xb(a.S, d), a.Fa++, 1 === a.S.length && (Hg(a.fa), T(a.fa, a.Ob)), a.L = 0, li(a));
                    var g = $e(e.short_url.match(Ze)[5] || null).substring(1),
                        f = Q("BUTTON", {
                            id: "modal-copy-" + g,
                            "class": "mdl-button mdl-js-button mdl-button--icon"
                        }, [Q("I", "material-icons", "content_copy")]);
                    d = Q("DIV", "mdl-tooltip", "Copy short URL");
                    Y(d, {
                        "for": "modal-copy-" + g
                    });
                    var l = Q("A", {
                            href: "/info/" + g
                        }, [R("See analytics data"), Q("I", "material-icons", "open_in_new")]),
                        m = Q("I", {
                            id: "modal-help-" + g,
                            "class": "help material-icons"
                        }, "help_outline"),
                        r = Q("DIV", ["mdl-tooltip", "mdl-tooltip--right"], "Copy this link to see analytics data");
                    Y(r, {
                        "for": "modal-help-" + g
                    });
                    var n = [Q("BUTTON",
                            "done mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect".split(" "), "Done")],
                        p = new Ih("shorten-result", "Your short URL", [Q("SPAN", "short-url", [R(kh(e.short_url)), f, d]), Q("DIV", "analytics", [l, m, r]), Q("DIV", "preview", [Q("IMG", {
                            src: e.preview_url
                        })]), Q("A", {
                            "class": "long-url",
                            href: e.long_url
                        }, [R(kh(e.long_url)), Q("I", "material-icons", "open_in_new")])], n),
                        q = Ab(n, f, d, r),
                        w = function() {
                            gi(e.short_url)
                        },
                        G = function(S) {
                            S.preventDefault();
                            p.Xb();
                            Dh("http://goo.gl/" + g, "all_time")
                        };
                    L(p, "modal-controller-presented", function() {
                        L(f, "click", w);
                        L(l, "click", G);
                        Z.da(q)
                    });
                    L(p, "modal-controller-dismissed", function() {
                        Z.ha(q);
                        M(l, "click", G);
                        M(f, "click", w)
                    });
                    Lh(p)
                } else 401 === P(d) ? X("error", "Please verify that you are not a robot") : X("error", "Unable to create short URL");
                a.ca.removeAttribute("disabled");
                a.ba.removeAttribute("disabled");
                "undefined" !== typeof grecaptcha && ta(grecaptcha.reset) && grecaptcha.reset()
            })
        }
    };
    h.jf = function(a) {
        var b = this;
        Eg(a.currentTarget) && (a = Og(a.currentTarget), a !== String(this.ta) && (this.ta = eb(a) || 10, Kg(this.cd, this.ta), C(this.hc, function(c) {
            Og(c) === String(b.ta) ? Y(c, {
                disabled: !0
            }) : c.removeAttribute("disabled")
        }), li(this), Eg(this.cd.parentElement) && this.cd.parentElement.click()))
    };
    h.ef = function() {
        li(this, -this.ta)
    };
    h.ff = function() {
        this.L + this.ta + this.ta > this.S.length && this.S.length < this.Fa ? ii(this, new Date(this.S[this.S.length - 1].c - 1)) : li(this, this.ta)
    };
    var li = function(a, b) {
            if (W.Aa) {
                a.L = Math.max(0, a.L + (void 0 === b ? 0 : b));
                a.L >= a.Fa && (a.L -= a.ta, 0 > a.L && (a.L = 0));
                b = Math.min(a.S.length - a.L, a.ta);
                0 === a.L ? Y(a.Jb, {
                    disabled: !0
                }) : a.Jb.removeAttribute("disabled");
                a.L + b >= a.Fa ? Y(a.Kb, {
                    disabled: !0
                }) : a.Kb.removeAttribute("disabled");
                Hg(a.jc);
                for (var c = 0; c < b; ++c) a.S[a.L + c].show(a.jc);
                Kg(a.zf, a.L + 1 + "-" + (a.L + b) + " of " + a.Fa)
            }
        },
        ii = function(a, b) {
            Hg(a.jc);
            var c = Q("DIV", ["mdl-spinner", "mdl-js-spinner", "is-active"]),
                d = Q("TR", null, [Q("TD", {
                    "class": "loading",
                    colspan: 5
                }, [c])]);
            T(a.jc, d);
            Z.oc(c);
            var e = {
                security_token: W.pb
            };
            b && (e = {
                time: b.toISOString(),
                security_token: W.pb
            });
            hh("/api/history", e, function(g) {
                Z.ha([c]);
                U(d);
                if (200 === P(g))
                    if (g = uf(g), 0 === g.count) U(a.Ob), ji(a);
                    else {
                        a.Fa = g.count;
                        C(g.history, function(f) {
                            D(a.S, new mi(a, f))
                        });
                        if (0 === g.history.length && b || a.S.length > a.Fa) a.Fa = a.S.length;
                        b ? li(a, a.ta) : li(a)
                    }
                else U(a.Ob), ji(a), X("error", "Unable to load history");
                a.ca.removeAttribute("disabled");
                a.ba.removeAttribute("disabled")
            })
        };
    ki.prototype.Bh = function() {
        hh("/api/export", {
            security_token: W.pb
        }, function(a) {
            if (200 === P(a)) {
                try {
                    var b = a.f ? a.f.responseText : ""
                } catch (c) {
                    Fd(a.G, "Can not get responseText: " + c.message), b = ""
                }
                a = document.createElement("a");
                a.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(b));
                a.setAttribute("download", "googl-shorturls.csv");
                a.style.display = "none";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                X("success", "Your short URLs have been saved to googl-shorturls.csv")
            } else 401 ===
                P(a) ? X("error", "Please login.") : X("error", "Unable to download your short URLs.")
        })
    };
    var mi = function(a, b) {
        this.Cd = a;
        a = b.details;
        this.wh = new Date(b.creation_time);
        this.sh = a ? a["all time"].clicks.short_url : 0;
        this.Wa = b.short_url;
        a = $e(this.Wa.match(Ze)[5] || null).substring(1);
        this.a = Q("TR");
        this.h = [];
        T(this.a, Q("TD", ["long-url", "mdl-data-table__cell--non-numeric"], [Q("A", {
            href: b.long_url
        }, kh(b.long_url))]));
        T(this.a, Q("TD", ["created", "mdl-data-table__cell--non-numeric"], lh(b.creation_time)));
        b = Q("A", {
            href: this.Wa
        }, kh(this.Wa));
        this.Dc = Q("BUTTON", {
            id: "copy-" + a,
            "class": "copy-button mdl-button mdl-js-button mdl-button--icon"
        }, [Q("I", "material-icons", "content_copy")]);
        D(this.h, this.Dc);
        var c = Q("DIV", "mdl-tooltip", "Copy short URL");
        Y(c, {
            "for": "copy-" + a
        });
        D(this.h, c);
        T(this.a, Q("TD", ["short-url", "mdl-data-table__cell--non-numeric"], [b, this.Dc, c]));
        this.ud = Q("A", {
            href: "/info/" + a
        }, mh(this.sh));
        T(this.a, Q("TD", ["all-clicks", "mdl-data-table__cell--non-numeric"], [this.ud]));
        this.Td = Q("A", {
            href: "/info/" + a
        }, "Analytics Data");
        this.Ud = Q("LI", "mdl-menu__item", "QR Code");
        this.Kd = Q("LI", "mdl-menu__item", "Hide URL");
        b = Q("UL", ["mdl-menu",
            "mdl-menu--bottom-right", "mdl-js-menu", "mdl-js-ripple-effect"
        ], [Q("LI", "mdl-menu__item", [this.Td]), this.Ud, this.Kd]);
        Y(b, {
            "for": "options-" + a
        });
        D(this.h, b);
        a = Q("BUTTON", {
            id: "options-" + a,
            "class": "options-button mdl-button mdl-js-button mdl-button--icon"
        }, [Q("I", "material-icons", "more_vert")]);
        D(this.h, a);
        T(this.a, Q("TD", "options", [b, a]))
    };
    h = mi.prototype;
    h.show = function(a) {
        L(this.Dc, "click", this.cf, !1, this);
        L(this.ud, "click", this.Jc, !1, this);
        L(this.Td, "click", this.Jc, !1, this);
        L(this.Ud, "click", this.Gf, !1, this);
        L(this.Kd, "click", this.pf, !1, this);
        T(a, this.a);
        Z.da(this.h)
    };
    h.na = function() {
        Z.ha(this.h);
        U(this.a);
        M(this.Dc, "click", this.cf, !1, this);
        M(this.ud, "click", this.Jc, !1, this);
        M(this.Td, "click", this.Jc, !1, this);
        M(this.Ud, "click", this.Gf, !1, this);
        M(this.Kd, "click", this.pf, !1, this)
    };
    h.cf = function() {
        gi(this.Wa)
    };
    h.Jc = function(a) {
        a.preventDefault();
        Dh(this.Wa, "all_time")
    };
    h.pf = function() {
        null != this.Cd && ta(this.Cd.qf) && this.Cd.qf(this)
    };
    h.Gf = function() {
        var a = [Q("BUTTON", "done mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect".split(" "), "Done")],
            b = new Ih("qr-code", "QR Code", [Q("A", {
                href: this.Wa + ".qr"
            }, [Q("IMG", {
                src: this.Wa + ".qr"
            })])], a);
        L(b, "modal-controller-presented", function() {
            Z.da(a)
        });
        L(b, "modal-controller-dismissed", function() {
            Z.ha(a)
        });
        Lh(b)
    };
    ia.Object.defineProperties(mi.prototype, {
        c: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.wh.getTime()
            }
        },
        $d: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Wa
            }
        }
    });
    var ni = function(a) {
        Jd.call(this);
        this.Id = a;
        this.l = {}
    };
    y(ni, Jd);
    var oi = [];
    ni.prototype.Sa = function(a, b, c, d) {
        ra(b) || (b && (oi[0] = b.toString()), b = oi);
        for (var e = 0; e < b.length; e++) {
            var g = L(a, b[e], c || this.handleEvent, d || !1, this.Id || this);
            if (!g) break;
            this.l[g.key] = g
        }
        return this
    };
    ni.prototype.Qd = function(a, b, c, d) {
        return pi(this, a, b, c, d)
    };
    var pi = function(a, b, c, d, e, g) {
        if (ra(c))
            for (var f = 0; f < c.length; f++) pi(a, b, c[f], d, e, g);
        else {
            b = Be(b, c, d || a.handleEvent, e, g || a.Id || a);
            if (!b) return a;
            a.l[b.key] = b
        }
        return a
    };
    ni.prototype.me = function(a, b, c, d, e) {
        if (ra(b))
            for (var g = 0; g < b.length; g++) this.me(a, b[g], c, d, e);
        else c = c || this.handleEvent, d = ua(d) ? !!d.capture : !!d, e = e || this.Id || this, c = Ce(c), d = !!d, b = re(a) ? a.ac(b, c, d, e) : a ? (a = Ee(a)) ? a.ac(b, c, d, e) : null : null, b && (Ie(b), delete this.l[b.key])
    };
    ni.prototype.removeAll = function() {
        Gb(this.l, function(a, b) {
            this.l.hasOwnProperty(b) && Ie(a)
        }, this);
        this.l = {}
    };
    ni.prototype.D = function() {
        ni.O.D.call(this);
        this.removeAll()
    };
    ni.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var qi = function() {
        je.call(this, "navigate")
    };
    y(qi, je);
    var ri = function() {
        return !(I("iPad") || I("Android") && !I("Mobile") || I("Silk")) && (I("iPod") || I("iPhone") || I("Android") || I("IEMobile"))
    };
    var si = function(a, b) {
        a = [a];
        for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\x0B")
    };
    var yi = function(a, b, c, d) {
        N.call(this);
        if (a && !b) throw Error("Can't use invisible history without providing a blank page.");
        if (c) var e = c;
        else {
            e = "history_state" + ti;
            var g = og("input", {
                type: "text",
                name: e,
                id: e,
                style: new Hf(Ff, "display:none")
            });
            document.write(hg(g));
            e = wg(document, e)
        }
        this.bc = e;
        this.Ka = c ? Bg(ug(c)) : window;
        this.Mc = b;
        J && !b && (this.Mc = "https" == window.location.protocol ? Nf(If(new Hf(Ff, "https:///"))) : Nf(If(new Hf(Ff, 'javascript:""'))));
        this.v = new Xe(150);
        b = za(Kd, this.v);
        this.ab ? t(void 0) ? b.call(void 0) :
            b() : (this.lb || (this.lb = []), this.lb.push(t(void 0) ? v(b, void 0) : b));
        this.vb = !a;
        this.bb = new ni(this);
        if (a || ui) {
            if (d) var f = d;
            else {
                a = "history_iframe" + ti;
                c = this.Mc;
                d = {
                    id: a,
                    style: new Hf(Ff, "display:none"),
                    sandbox: void 0
                };
                c && Mf(c);
                b = {};
                b.src = c || null;
                b.srcdoc = null;
                c = {
                    sandbox: ""
                };
                e = {};
                for (f in b) z(f.toLowerCase() == f, "Must be lower case"), e[f] = b[f];
                for (f in c) z(f.toLowerCase() == f, "Must be lower case"), e[f] = c[f];
                for (f in d) {
                    g = f.toLowerCase();
                    if (g in b) throw Error('Cannot override "' + g + '" attribute, got "' + f +
                        '" with value "' + d[f] + '"');
                    g in c && delete e[g];
                    e[f] = d[f]
                }
                f = ng("iframe", e, void 0);
                document.write(hg(f));
                f = wg(document, a)
            }
            this.Nc = f;
            this.Of = !0
        }
        ui && (this.bb.Sa(this.Ka, "load", this.Ph), this.Ff = this.Ed = !1);
        this.vb ? vi(this, wi(this), !0) : xi(this, this.bc.value);
        ti++
    };
    y(yi, N);
    yi.prototype.Zb = !1;
    yi.prototype.Hb = !1;
    yi.prototype.Eb = null;
    var zi = function(a, b) {
            var c = b || si;
            return function() {
                var d = this || k;
                d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
                var e = c(a[va] || (a[va] = ++wa), arguments);
                return d.hasOwnProperty(e) ? d[e] : d[e] = a.apply(this, arguments)
            }
        }(function() {
            return J ? 8 <= Number(gd) : "onhashchange" in k
        }),
        ui = J && !(8 <= Number(gd));
    yi.prototype.Gb = null;
    yi.prototype.D = function() {
        yi.O.D.call(this);
        this.bb.$a();
        Ai(this, !1)
    };
    var Ai = function(a, b) {
        if (b != a.Zb)
            if (ui && !a.Ed) a.Ff = b;
            else if (b)
            if (Wc ? a.bb.Sa(a.Ka.document, Bi, a.Sh) : Yc && a.bb.Sa(a.Ka, "pageshow", a.Rh), zi() && a.vb) a.bb.Sa(a.Ka, "hashchange", a.Qh), a.Zb = !0, a.dispatchEvent(new qi(wi(a), !1));
            else {
                if (!J || ri() || a.Ed) a.bb.Sa(a.v, "tick", v(a.Re, a, !0)), a.Zb = !0, ui || (a.Eb = wi(a), a.dispatchEvent(new qi(wi(a), !1))), a.v.start()
            }
        else a.Zb = !1, a.bb.removeAll(), a.v.stop()
    };
    yi.prototype.Ph = function() {
        this.Ed = !0;
        this.bc.value && xi(this, this.bc.value, !0);
        Ai(this, this.Ff)
    };
    yi.prototype.Rh = function(a) {
        a.Ab.persisted && (Ai(this, !1), Ai(this, !0))
    };
    yi.prototype.Qh = function() {
        var a = Ci(this.Ka);
        a != this.Eb && Di(this, a, !0)
    };
    var wi = function(a) {
            return null != a.Gb ? a.Gb : a.vb ? Ci(a.Ka) : Fi(a) || ""
        },
        Ci = function(a) {
            a = a.location.href;
            var b = a.indexOf("#");
            return 0 > b ? "" : a.substring(b + 1)
        },
        Gi = function(a, b, c) {
            wi(a) != b && (a.vb ? (vi(a, b, c), zi() || J && !ri() && xi(a, b, c, void 0), a.Zb && a.Re(!1)) : (xi(a, b, c), a.Gb = a.Eb = a.bc.value = b, a.dispatchEvent(new qi(b, !1))))
        },
        vi = function(a, b, c) {
            a = a.Ka.location;
            var d = a.href.split("#")[0],
                e = -1 != a.href.indexOf("#");
            if (ui || e || b) d += "#" + b;
            d != a.href && (c ? a.replace(d) : (b = d, c = new Hf(Ff, "URL taken from location.href."),
                Ha(If(c), "must provide justification"), z(!Pa(If(c)), "must provide non-empty justification"), b = Sf(b), sg(a, b)))
        },
        xi = function(a, b, c, d) {
            if (a.Of || b != Fi(a))
                if (a.Of = !1, b = encodeURIComponent(String(b)), J) {
                    var e = Jg(a.Nc);
                    e.open("text/html", c ? "replace" : void 0);
                    c = rg(og("title", {}, d || a.Ka.document.title), og("body", {}, b));
                    e.write(hg(c));
                    e.close()
                } else Ma(a.Mc, Lf, "this.iframeSrc_ must be set on calls to setIframeToken_"), e = Mf(a.Mc).toString() + "#" + b, (a = a.Nc.contentWindow) && (c ? a.location.replace(e) : sg(a.location,
                    e))
        },
        Fi = function(a) {
            if (J) return a = Jg(a.Nc), a.body ? $a(a.body.innerHTML) : null;
            var b = a.Nc.contentWindow;
            if (b) {
                try {
                    var c = $a(Ci(b))
                } catch (d) {
                    return a.Hb || (1 != a.Hb && a.v.setInterval(1E4), a.Hb = !0), null
                }
                a.Hb && (0 != a.Hb && a.v.setInterval(150), a.Hb = !1);
                return c || null
            }
            return null
        };
    yi.prototype.Re = function(a) {
        if (this.vb) {
            var b = Ci(this.Ka);
            b != this.Eb && Di(this, b, a)
        }
        if (!this.vb || ui)
            if (b = Fi(this) || "", null == this.Gb || b == this.Gb) this.Gb = null, b != this.Eb && Di(this, b, a)
    };
    var Di = function(a, b, c) {
        a.Eb = a.bc.value = b;
        a.vb ? (ui && xi(a, b), vi(a, b)) : xi(a, b);
        a.dispatchEvent(new qi(wi(a), c))
    };
    yi.prototype.Sh = function() {
        this.v.stop();
        this.v.start()
    };
    var Bi = ["mousedown", "keydown", "mousemove"],
        ti = 0;
    var Hi = function() {
            this.Db = new yi;
            this.Da = this.ad = this.vc = this.dd = null;
            var a = yg("main");
            if (null == a) {
                a = Q("DIV", "main");
                var b = yg("footer");
                if (null != b) {
                    var c = a;
                    z(null != c && null != b, "goog.dom.insertSiblingBefore expects non-null arguments");
                    b.parentNode && b.parentNode.insertBefore(c, b)
                } else T(document.body, a)
            }
            this.Rd = a;
            L(this.Db, "navigate", this.Hh, !1, this)
        },
        Ji = function() {
            null == Ii && (Ii = new Hi, Ai(Ii.Db, !0))
        },
        Eh = function(a) {
            var b = Ii;
            (void 0 === a ? 0 : a) ? Gi(b.Db, "", !0): Gi(b.Db, "", !1)
        },
        Dh = function(a, b) {
            var c = Ii;
            a =
                "analytics/" + kh(a) + "/" + b.replace(/ /g, "_");
            Gi(c.Db, a, !1)
        };
    Hi.prototype.gc = function() {
        null != this.Da && ta(this.Da.gc) && this.Da.gc()
    };
    Hi.prototype.Hh = function() {
        null != this.Da && (this.Da.na(), this.Da = null);
        window.scrollTo(0, 0);
        var a = wi(this.Db),
            b = a.match(Fh);
        null != b ? (null == this.vc && (this.vc = new Ch(b[2])), this.vc.show(this.Rd, "http://" + b[1], b[2]), this.Da = this.vc) : Hh.test(a) ? (null == this.ad && (this.ad = new Gh), this.ad.show(this.Rd), this.Da = this.ad) : (null == this.dd && (this.dd = new ki), this.dd.show(this.Rd), this.Da = this.dd)
    };
    var Ii = null,
        Ki = function() {
            jh();
            Ji()
        },
        Li = Af(Ki) || Ki;
    na("URLShortenerHomeInitialize", Li);
    var Mi = function() {
            jh();
            Ji();
            Ii.gc()
        },
        Ni = Af(Mi) || Mi;
    na("URLShortenerHomeRenderCaptcha", Ni);
}).call(this);