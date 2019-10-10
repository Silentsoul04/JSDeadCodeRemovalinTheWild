
        (this.gbar_ = this.gbar_ || {}).CONFIG = [
            [
                [0, "www.gstatic.com", "og.mob.en_US.5EY9l3V_peM.O", "nl", "nl", "1", 0, [4, 2, "", "", "1300102,3700246", "273201278", "0"], null, "uRWfXZXnGdHDwQKipZW4Dg", null, 0, "og.mob.slj2x0n537m3.L.W.O", "AA2YrTsArPKAvlxnTqthPNraXCy5W1xgMg", "AA2YrTvNORZ0SmEoBPtvRn15ybBorWRVRQ", "", 2, null, null, "NLD", null, 0, "1", "1", 0],
                [
                    ["md", ""],
                    ["md", ""], 1
                ],
                [1, 0.1000000014901161, 2, 1, 0.5],
                [1, 0.001000000047497451, 1],
                [0, 0, 0, null, "", "", "", ""],
                [0, "", null, "", 0, "Er is een fout opgetreden bij het laden van je Marketplace-apps.", "Je hebt geen Marketplace-apps.", 0, [1, "https://www.google.nl/webhp?tab=ww", "Zoeken", "", "0 -138px", null, 0], null, null, null, 1, null, null, 0], null, null, [1, 1, 0, 40600, 1, "NLD", "nl", "273201278.0", 15, 0.009999999776482582, 0, 0, null, null, 0, 0, "", null, null, 1, "uRWfXZXnGdHDwQKipZW4Dg"]
            ]
        ];
        (this.gbar_ = this.gbar_ || {}).LDD = ["mih", "mab", "meb"];
        this.gbar_ = this.gbar_ || {};
        (function(_) {___jdce_logger("lacuna_cache/exported_19hii5.js", 1207, 13715);
            var window = this;
            try {
                var aa, ba, fa, ha, ia, ja, ka, la, na, ua, va;
                aa = "function" == typeof Object.create ? Object.create : function(b) {___jdce_logger("lacuna_cache/exported_19hii5.js", 1408, 1552);
                    var c = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 1450, 1463);};
                    c.prototype = b;
                    return new c
                };
                if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
                else {
                    var ca;
                    a: {
                        var da = {
                                $b: !0
                            },
                            ea = {};
                        try {
                            ea.__proto__ = da;
                            ca = ea.$b;
                            break a
                        } catch (b) {}
                        ca = !1
                    }
                    ba = ca ? function(b, c) {___jdce_logger("lacuna_cache/exported_19hii5.js", 2140, 2330);
                        b.__proto__ = c;
                        if (b.__proto__ !== c) throw new TypeError("a`" + b);
                        return b
                    } : null
                }
                fa = ba;
                _.n = function(b, c) {___jdce_logger("lacuna_cache/exported_19hii5.js", 2403, 2999);
                    b.prototype = aa(c.prototype);
                    b.prototype.constructor = b;
                    if (fa) fa(b, c);
                    else
                        for (var d in c)
                            if ("prototype" != d)
                                if (Object.defineProperties) {
                                    var e = Object.getOwnPropertyDescriptor(c, d);
                                    e && Object.defineProperty(b, d, e)
                                } else b[d] = c[d];
                    b.A = c.prototype
                };
                ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function(b, c, d) {___jdce_logger("lacuna_cache/exported_19hii5.js", 3093, 3216);
                    b != Array.prototype && b != Object.prototype && (b[c] = d.value)
                };
                ia = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
                ja = function(b, c) {___jdce_logger("lacuna_cache/exported_19hii5.js", 3381, 4088);
                    if (c) {
                        var d = ia;
                        b = b.split(".");
                        for (var e = 0; e < b.length - 1; e++) {
                            var f = b[e];
                            f in d || (d[f] = {});
                            d = d[f]
                        }
                        b = b[b.length - 1];
                        e = d[b];
                        c = c(e);
                        c != e && null != c && ha(d, b, {
                            configurable: !0,
                            writable: !0,
                            value: c
                        })
                    }
                };
                ka = function(b) {___jdce_logger("lacuna_cache/exported_19hii5.js", 4111, 4456);
                    var c = 0;
                    return function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 4183, 4438);
                        return c < b.length ? {
                            done: !1,
                            value: b[c++]
                        } : {
                            done: !0
                        }
                    }
                };
                la = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 4479, 4599);
                    la = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 4517, 4530);};
                    ia.Symbol || (ia.Symbol = ma)
                };
                na = function(b, c) {___jdce_logger("lacuna_cache/exported_19hii5.js", 4622, 4870);
                    this.a = b;
                    ha(this, "description", {
                        configurable: !0,
                        writable: !0,
                        value: c
                    })
                };
                na.prototype.toString = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 4912, 4976);
                    return this.a
                };
                var ma = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 5003, 5335);
                        function b(d) {___jdce_logger("lacuna_cache/exported_19hii5.js", 5040, 5245);
                            if (this instanceof b) throw new TypeError("b");
                            return new na("jscomp_symbol_" + (d || "") + "_" + c++, d)
                        }
                        var c = 0;
                        return b
                    }(),
                    pa = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 5364, 5947);
                        la();
                        var b = ia.Symbol.iterator;
                        b || (b = ia.Symbol.iterator = ia.Symbol("Symbol.iterator"));
                        "function" != typeof Array.prototype[b] && ha(Array.prototype, b, {
                            configurable: !0,
                            writable: !0,
                            value: function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 5760, 5854);
                                return oa(ka(this))
                            }
                        });
                        pa = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 5912, 5925);}
                    },
                    oa = function(b) {___jdce_logger("lacuna_cache/exported_19hii5.js", 5974, 6293);
                        pa();
                        b = {
                            next: b
                        };
                        b[ia.Symbol.iterator] = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 6159, 6237);
                            return this
                        };
                        return b
                    },
                    qa = function(b, c) {___jdce_logger("lacuna_cache/exported_19hii5.js", 6320, 7492);
                        pa();
                        b instanceof String && (b += "");
                        var d = 0,
                            e = {
                                next: function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 6532, 7284);
                                    if (d < b.length) {
                                        var f = d++;
                                        return {
                                            value: c(f, b[f]),
                                            done: !1
                                        }
                                    }
                                    e.next = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 6944, 7197);
                                        return {
                                            done: !0,
                                            value: void 0
                                        }
                                    };
                                    return e.next()
                                }
                            };
                        e[Symbol.iterator] = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 7361, 7436);
                            return e
                        };
                        return e
                    };
                ja("Array.prototype.keys", function(b) {___jdce_logger("lacuna_cache/exported_19hii5.js", 7537, 7756);
                    return b ? b : function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 7586, 7738);
                        return qa(this, function(c) {___jdce_logger("lacuna_cache/exported_19hii5.js", 7639, 7715);
                            return c
                        })
                    }
                });
                ja("Array.prototype.values", function(b) {___jdce_logger("lacuna_cache/exported_19hii5.js", 7804, 8026);
                    return b ? b : function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 7853, 8008);
                        return qa(this, function(c, d) {___jdce_logger("lacuna_cache/exported_19hii5.js", 7906, 7985);
                            return d
                        })
                    }
                });
                _.ra = _.ra || {};
                _.q = this || self;
                _.sa = function(b) {___jdce_logger("lacuna_cache/exported_19hii5.js", 8123, 8309);
                    b.qb = void 0;
                    b.za = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 8199, 8291);
                        return b.qb ? b.qb : b.qb = new b
                    }
                };
                _.ta = "closure_uid_" + (1E9 * Math.random() >>> 0);
                ua = function(b, c, d) {___jdce_logger("lacuna_cache/exported_19hii5.js", 8401, 8497);
                    return b.call.apply(b.bind, arguments)
                };
                va = function(b, c, d) {___jdce_logger("lacuna_cache/exported_19hii5.js", 8520, 9118);
                    if (!b) throw Error();
                    if (2 < arguments.length) {
                        var e = Array.prototype.slice.call(arguments, 2);
                        return function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 8736, 8963);
                            var f = Array.prototype.slice.call(arguments);
                            Array.prototype.unshift.apply(f, e);
                            return b.apply(c, f)
                        }
                    }
                    return function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 9013, 9100);
                        return b.apply(c, arguments)
                    }
                };
                _.r = function(b, c, d) {___jdce_logger("lacuna_cache/exported_19hii5.js", 9142, 9367);
                    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.r = ua : _.r = va;
                    return _.r.apply(null, arguments)
                };
                _.wa = Date.now || function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 9404, 9471);
                    return +new Date
                };
                _.t = function(b, c) {___jdce_logger("lacuna_cache/exported_19hii5.js", 9495, 9740);
                    function d() {___jdce_logger("lacuna_cache/exported_19hii5.js", 9532, 9547);}
                    d.prototype = c.prototype;
                    b.A = c.prototype;
                    b.prototype = new d;
                    b.prototype.constructor = b
                };
                _.v = function(b) {___jdce_logger("lacuna_cache/exported_19hii5.js", 9764, 10074);
                    if (Error.captureStackTrace) Error.captureStackTrace(this, _.v);
                    else {
                        var c = Error().stack;
                        c && (this.stack = c)
                    }
                    b && (this.message = String(b))
                };
                _.t(_.v, Error);
                _.v.prototype.name = "CustomError";
                _.xa = Array.prototype.indexOf ? function(b, c) {___jdce_logger("lacuna_cache/exported_19hii5.js", 10210, 10314);
                    return Array.prototype.indexOf.call(b, c, void 0)
                } : function(b, c) {___jdce_logger("lacuna_cache/exported_19hii5.js", 10317, 10613);
                    if ("string" === typeof b) return "string" !== typeof c || 1 != c.length ? -1 : b.indexOf(c, 0);
                    for (var d = 0; d < b.length; d++)
                        if (d in b && b[d] === c) return d;
                    return -1
                };
                _.ya = Array.prototype.forEach ? function(b, c, d) {___jdce_logger("lacuna_cache/exported_19hii5.js", 10664, 10759);
                    Array.prototype.forEach.call(b, c, d)
                } : function(b, c, d) {___jdce_logger("lacuna_cache/exported_19hii5.js", 10762, 10938);
                    for (var e = b.length, f = "string" === typeof b ? b.split("") : b, g = 0; g < e; g++) g in f && c.call(d, f[g], g, b)
                };
                _.za = Array.prototype.filter ? function(b, c, d) {___jdce_logger("lacuna_cache/exported_19hii5.js", 10988, 11089);
                    return Array.prototype.filter.call(b, c, d)
                } : function(b, c, d) {___jdce_logger("lacuna_cache/exported_19hii5.js", 11092, 11449);
                    for (var e = b.length, f = [], g = 0, h = "string" === typeof b ? b.split("") : b, k = 0; k < e; k++)
                        if (k in h) {
                            var m = h[k];
                            c.call(d, m, k, b) && (f[g++] = m)
                        }
                    return f
                };
                _.Aa = Array.prototype.map ? function(b, c, d) {___jdce_logger("lacuna_cache/exported_19hii5.js", 11496, 11594);
                    return Array.prototype.map.call(b, c, d)
                } : function(b, c, d) {___jdce_logger("lacuna_cache/exported_19hii5.js", 11597, 11826);
                    for (var e = b.length, f = Array(e), g = "string" === typeof b ? b.split("") : b, h = 0; h < e; h++) h in g && (f[h] = c.call(d, g[h], h, b));
                    return f
                };
                _.w = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 11850, 11957);
                    this.ua = this.ua;
                    this.wa = this.wa
                };
                _.w.prototype.ua = !1;
                _.w.prototype.U = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 12032, 12118);
                    this.ua || (this.ua = !0, this.v())
                };
                _.w.prototype.v = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 12154, 12283);
                    if (this.wa)
                        for (; this.wa.length;) this.wa.shift()()
                };
                var Ba = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 12310, 12484);
                    _.w.call(this);
                    this.b = this.a = null;
                    this.f = 0;
                    this.c = {}
                };
                _.n(Ba, _.w);
                Ba.prototype.g = function(b, c) {___jdce_logger("lacuna_cache/exported_19hii5.js", 12549, 12726);
                    this.a = c;
                    this.b = b;
                    c.preventDefault ? c.preventDefault() : c.returnValue = !1
                };
                _.Ca = new Ba;
                _.Da = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 12782, 12877);
                    this.a = {};
                    this.b = {}
                };
                _.sa(_.Da);
                _.Fa = function(b, c) {___jdce_logger("lacuna_cache/exported_19hii5.js", 12930, 13348);
                    var d = _.Da.za();
                    if (b in d.a) {
                        if (d.a[b] != c) throw new Ea(b);
                    } else {
                        d.a[b] = c;
                        if (c = d.b[b])
                            for (var e = 0, f = c.length; e < f; e++) c[e].a(d.a, b);
                        delete d.b[b]
                    }
                };
                _.Ga = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 13373, 13438);
                    _.v.call(this)
                };
                _.t(_.Ga, _.v);
                var Ea = function() {___jdce_logger("lacuna_cache/exported_19hii5.js", 13497, 13562);
                    _.v.call(this)
                };
                _.t(Ea, _.Ga);
                _.Fa("eq", _.Ca);

            } catch (e) {
                _._DumpException(e)
            }
        })(this.gbar_);
        // Google Inc.
        var a = window.location,
            b = a.href.indexOf("#");
        if (0 <= b) {
            var c = a.href.substring(b + 1);
            /(^|&)q=/.test(c) && -1 == c.indexOf("#") && a.replace("/search?" + c.replace(/(^|&)fp=[^&]*/g, "") + "&cad=h")
        };
    