
        this.gbar_ = this.gbar_ || {};
        (function(_) { ? this.g : this.f), _.J(c, 6, this.G), _.J(c, 3, this.D), _.J(c, 11, this.w), _.J(c, 10, this.C), _.J(c, 5, this.j), window.performance && window.performance.timing && _.J(c, 14, (new Date).getTime() - window.performance.timing.navigationStart), _.J(c, 13, this.s), _.J(c, 16, this.J), _.J(c, 17, this.N), _.J(c, 19, this.L), d = 0, _.I(this.i, 1) && (d |= 1), _.I(this.i, 3) &&
                        (d |= 4), _.J(c, 12, d), _.J(c, 25, this.o), _.J(c, 26, this.F), d = new pf, c = c.f(), _.J(d, 8, c), this.a.log(d)
                };
                var Jf = function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 95320, 95385);
                    this.data = {}
                };
                var Kf = function(b, c) {___jdce_logger("lacuna_cache/exported_gpooig.js", 95412, 96188);
                    this.data = {};
                    var d = _.K(b, ef, 8) || new ef;
                    window.google && window.google.kEI && (this.data.ei = window.google.kEI);
                    this.data.sei = _.P(_.H(b, 10));
                    this.data.ogf = _.P(_.H(d, 3));
                    var e = window.google && window.google.sn ? /.*hp$/.test(window.google.sn) ? !1 : !0 : _.hf(_.I(b, 7));
                    this.data.ogrp = e ? "1" : "";
                    this.data.ogv = _.P(_.H(d, 6)) + "." + _.P(_.H(d, 7));
                    this.data.ogd = _.P(_.H(b, 21));
                    this.data.ogc = _.P(_.H(b, 20));
                    this.data.ogl = _.P(_.H(b, 5));
                    c && (this.data.oggv = c)
                };
                _.t(Kf, Jf);
                var Lf = function(b, c, d, e, f) {___jdce_logger("lacuna_cache/exported_gpooig.js", 96244, 96788);
                    Kf.call(this, b, c);
                    _.ab(this.data, {
                        jexpid: _.P(_.H(b, 9)),
                        srcpg: "prop=" + _.P(_.H(b, 6)),
                        jsr: Math.round(1 / e),
                        emsg: d.name + ":" + d.message
                    });
                    if (f) {
                        f._sn && (f._sn = "og." + f._sn);
                        for (var g in f) this.data[encodeURIComponent(g)] = f[g]
                    }
                };
                _.t(Lf, Kf);
                var Nf = function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 96844, 97403);
                        var c = window.google && window.google.logUrl ? "" : "https://www.google.com";
                        var d = c += "/gen_204?";
                        c = 2040 - c.length;
                        var e = [],
                            f;
                        for (f in b.data) e.push(encodeURIComponent(f) + "=" + encodeURIComponent(String(b.data[f])));
                        c = d + ("atyp=i&zx=" + (new Date).getTime() + "&" + e.join("&")).substr(0, c);
                        Mf(_.vb(c))
                    },
                    Mf = function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 97430, 97750);
                        var c = new Image;
                        c.onerror = c.onload = c.onabort = function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 97546, 97638);
                            Of in Pf && delete Pf[Of]
                        };
                        Pf[Of++] = c;
                        c.src = _.sb(b).toString()
                    },
                    Pf = [],
                    Of = 0;
                var Qf = function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 97834, 97911);
                    _.G(this, b, 0, -1, null)
                };
                _.t(Qf, _.F);
                var Tf = function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 97968, 98448);
                    var b = Rf;
                    this.F = Sf;
                    this.f = _.jf(Ac(b, 2, .001), .001);
                    this.i = _.hf(_.I(b, 1)) && Math.random() < this.f;
                    this.h = _.jf(_.zc(b, 3, 1), 1);
                    this.c = 0;
                    this.a = null;
                    _.I(b, 4);
                    this.b = _.jf(Ac(b, 5, .1), .1);
                    this.g = Math.random() < this.b
                };
                Tf.prototype.log = function(b, c) {___jdce_logger("lacuna_cache/exported_gpooig.js", 98485, 99432);
                    if (this.a && this.g) {
                        var d = new cf;
                        _.J(d, 1, b.message);
                        _.J(d, 2, b.stack);
                        _.J(d, 3, b.lineNumber);
                        _.J(d, 4, this.b);
                        _.J(d, 5, 1);
                        var e = new _.df;
                        _.Dc(e, 40, d);
                        this.a.log(98, e)
                    }
                    try {
                        if (this.i && this.c < this.h) {
                            try {
                                var f = _.Oa("lm").a(b, c)
                            } catch (g) {
                                f = new Lf(this.F, "mobile:noGapi", b, this.f, c)
                            }
                            Nf(f);
                            this.c++
                        }
                    } catch (g) {}
                };
                var Uf = [1, 2, 3, 4, 5, 6, 9, 10, 11, 13, 14, 28, 29, 30, 34, 35, 37, 38, 39, 40, 42, 43, 48, 49, 50, 51, 52, 53, 62, 500],
                    Xf = function(b, c, d, e, f, g) {___jdce_logger("lacuna_cache/exported_gpooig.js", 99600, 100520);
                        Kf.call(this, b, c);
                        _.ab(this.data, {
                            oge: e,
                            ogex: _.P(_.H(b, 9)),
                            ogp: _.P(_.H(b, 6)),
                            ogsr: Math.round(1 / (Vf(e) ? _.jf(Ac(d, 3, 1)) : _.jf(Ac(d, 2, 1E-4)))),
                            ogus: f
                        });
                        if (g) {
                            "ogw" in g && (this.data.ogw = g.ogw, delete g.ogw);
                            "ved" in g && (this.data.ved = g.ved, delete g.ved);
                            b = [];
                            for (var h in g) 0 != b.length && b.push(","), b.push(Wf(h)), b.push("."), b.push(Wf(g[h]));
                            g = b.join("");
                            "" != g && (this.data.ogad = g)
                        }
                    };
                _.t(Xf, Kf);
                var Wf = function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 100576, 100723);
                        b = String(b);
                        return b.replace(".", "%2E").replace(",", "%2C")
                    },
                    Yf = null,
                    Vf = function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 100781, 101032);
                        if (!Yf) {
                            Yf = {};
                            for (var c = 0; c < Uf.length; c++) Yf[Uf[c]] = !0
                        }
                        return !!Yf[b]
                    };
                var bg = function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 101059, 101721);
                    var b = Zf,
                        c = $f,
                        d = ag;
                    this.h = b;
                    this.g = c;
                    this.f = _.jf(Ac(b, 2, 1E-4), 1E-4);
                    this.b = _.jf(Ac(b, 3, 1), 1);
                    c = Math.random();
                    this.c = _.hf(_.I(b, 1)) && c < this.f;
                    this.a = _.hf(_.I(b, 1)) && c < this.b;
                    b = 0;
                    _.hf(_.I(d, 1)) && (b |= 1);
                    _.hf(_.I(d, 2)) && (b |= 2);
                    _.hf(_.I(d, 3)) && (b |= 4);
                    this.i = b
                };
                bg.prototype.log = function(b, c) {___jdce_logger("lacuna_cache/exported_gpooig.js", 101758, 102059);
                    try {
                        if (Vf(b) ? this.a : this.c) {
                            var d = new Xf(this.g, "mobile:noGapi", this.h, b, this.i, c);
                            Nf(d)
                        }
                    } catch (e) {}
                };
                var cg = function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 102086, 102163);
                    _.G(this, b, 0, -1, null)
                };
                _.t(cg, _.F);
                var dg = function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 102220, 102297);
                    _.G(this, b, 0, -1, null)
                };
                _.t(dg, _.F);
                var eg = function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 102354, 102431);
                    _.G(this, b, 0, -1, null)
                };
                _.t(eg, _.F);
                _.gg = function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 102486, 102562);
                    return _.K(_.fg, _.gf, 5)
                };
                var hg;
                window.gbar_ && window.gbar_.CONFIG ? hg = window.gbar_.CONFIG[0] || {} : hg = [];
                _.fg = new eg(hg);
                var Rf, Sf, $f, ag, Zf, kg, lg;
                Rf = _.K(_.fg, Qf, 3) || new Qf;
                Sf = _.K(_.fg, _.ff, 1) || new _.ff;
                _.ig = new Tf;
                $f = _.K(_.fg, _.ff, 1) || new _.ff;
                ag = _.gg() || new _.gf;
                Zf = _.K(_.fg, dg, 4) || new dg;
                _.jg = new bg;
                kg = _.K(_.fg, cg, 9) || new cg;
                lg = _.gg() || new _.gf;
                _.mg = new Hf(kg, lg);
                _.ig.a = _.mg;

            } catch (e) {
                _._DumpException(e)
            }
            try {
                var ng;
                ng = function(b, c, d) {___jdce_logger("lacuna_cache/exported_gpooig.js", 103377, 104090);
                    if (d instanceof Array) {
                        var e = null,
                            f;
                        for (f in d) {
                            var g = ng(b, c, d[f]);
                            g && (e = g)
                        }
                        return e
                    }
                    e = null;
                    b.a && b.a.type == d && b.b == c && (e = b.a, b.a = null);
                    if (f = c.getAttribute("data-eqid")) c.removeAttribute("data-eqid"), (b = b.c[f]) && (c.removeEventListener ? c.removeEventListener(d, b, !1) : c.detachEvent && c.detachEvent("on" + d, b));
                    return e
                };
                _.og = function(b, c) {___jdce_logger("lacuna_cache/exported_gpooig.js", 104115, 104484);
                    b = b.split(".");
                    var d = _.q;
                    b[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + b[0]);
                    for (var e; b.length && (e = b.shift());) b.length || void 0 === c ? d[e] && d[e] !== Object.prototype[e] ? d = d[e] : d = d[e] = {} : d[e] = c
                };
                _.pg = function(b, c, d) {___jdce_logger("lacuna_cache/exported_gpooig.js", 104509, 104796);
                    return function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 104556, 104778);
                        try {
                            return c.apply(d, arguments)
                        } catch (e) {
                            b.log(e)
                        }
                    }
                };
                _.qg = function(b, c) {___jdce_logger("lacuna_cache/exported_gpooig.js", 104821, 105401);
                    if (b instanceof Element && (c = ng(_.Oa("eq"), b, c || [])))
                        if (_.B && c instanceof MouseEvent && b.dispatchEvent) {
                            var d = document.createEvent("MouseEvent");
                            d.initMouseEvent(c.type, !0, !0, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget);
                            b.dispatchEvent(d)
                        } else b.dispatchEvent && b.dispatchEvent(c)
                };

            } catch (e) {
                _._DumpException(e)
            }
            try {
                var rg = [1, 2],
                    sg = function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 105556, 105639);
                        _.G(this, b, 0, -1, rg)
                    },
                    ug, vg, wg, xg;
                _.t(sg, _.F);
                _.tg = function(b, c) {___jdce_logger("lacuna_cache/exported_gpooig.js", 105730, 105796);
                    b.__PVT = c
                };
                ug = function(b, c) {___jdce_logger("lacuna_cache/exported_gpooig.js", 105819, 105901);
                    return null !== b && c in b
                };
                vg = function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 105924, 106252);
                    var c = arguments,
                        d = c.length;
                    return function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 106042, 106234);
                        for (var e = 0; e < d; e++)
                            if (c[e].apply(this, arguments)) return !0;
                        return !1
                    }
                };
                wg = function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 106275, 106425);
                    return function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 106316, 106407);
                        return !b.apply(this, arguments)
                    }
                };
                xg = function(b, c, d, e, f) {___jdce_logger("lacuna_cache/exported_gpooig.js", 106448, 107603);
                    _.w.call(this);
                    this.f = c;
                    this.J = e;
                    this.i = f;
                    this.L = !1;
                    this.c = {};
                    this.b = {};
                    this.G = [];
                    this.j = [];
                    this.s = _.I(b, 1) ? "http" : "https";
                    this.C = [this.s + "://" + _.P(_.H(b, 2)), "og/_/js", "k=" + _.P(_.H(b, 3)), "rt=j"];
                    this.o = "" == _.P(_.H(b, 14)) ? null : _.H(b, 14);
                    this.w = [this.s + "://" + _.P(_.H(b, 2)), "og/_/ss", "k=" + _.P(_.H(b, 13))];
                    this.F = "" == _.P(_.H(b, 15)) ? null : _.H(b, 15);
                    this.D = _.hf(_.I(b, 1)) ? "?host=www.gstatic.com&bust=" + _.P(_.H(b, 16)) : "";
                    this.N = _.hf(_.I(b, 1)) ? "?host=www.gstatic.com&bust=" + 1E11 * Math.random() :
                        "";
                    this.a = _.jf(_.zc(b, 17, 1), 1);
                    b = 0;
                    for (c = d[b]; b < d.length; b++, c = d[b]) this.c[c] = !0, this.b[c] = !0
                };
                _.t(xg, _.w);
                (function(b, c) {___jdce_logger("lacuna_cache/exported_gpooig.js", 107652, 107787);
                    b.za = function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 107696, 107769);
                        return _.Oa(c)
                    }
                })(xg, "m");
                var zg = function(b, c, d) {___jdce_logger("lacuna_cache/exported_gpooig.js", 107824, 108353);
                    c = (0, _.za)(c, wg(vg(_.lb, _.Ja(ug, b.c))));
                    if (0 < c.length) {
                        var e = b.C.join("/") + "/m=" + c.join(",") + "/exm=" + _.Za(b.c).join(",") + "/d=1/ed=1";
                        b.o && (e += "/rs=" + b.o);
                        e += b.D;
                        yg(b, e, (0, _.r)(b.B, b, d));
                        b.G.push(e);
                        for (d = 0; d < c.length; d++) b.c[c[d]] = !0
                    }
                };
                xg.prototype.B = function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 108388, 108539);
                    for (var c = 0; c < this.j.length; c++) this.j[c].call(null);
                    b && b.call(null)
                };
                var yg = function(b, c, d, e) {___jdce_logger("lacuna_cache/exported_gpooig.js", 108566, 110494);
                    var f = _.bd(document, "SCRIPT");
                    f.async = !0;
                    f.type = "text/javascript";
                    f.charset = "UTF-8";
                    _.Nb(f, _.Xd(c));
                    var g = !0,
                        h = e || 1;
                    e = (0, _.r)(function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 108905, 109320);
                        g = !1;
                        this.i.log(47, {
                            att: h,
                            max: this.a,
                            url: c
                        });
                        h < this.a ? yg(this, c, d, h + 1) : this.J.log(Error("p`" + h + "`" + this.a), {
                            url: c
                        })
                    }, b);
                    var k = (0, _.r)(function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 109363, 109635);
                            g && (this.i.log(46, {
                                att: h,
                                max: this.a,
                                url: c
                            }), g = !1, d && d.call(null))
                        }, b),
                        m = function(p) {___jdce_logger("lacuna_cache/exported_gpooig.js", 109669, 109908);
                            "loaded" == p.readyState || "complete" == p.readyState ? k() : g && window.setTimeout(function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 109797, 109876);
                                m(p)
                            }, 100)
                        };
                    "undefined" !==
                    typeof f.addEventListener ? f.onload = function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 110005, 110067);
                        k()
                    } : f.onreadystatechange = function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 110093, 110209);
                        f.onreadystatechange = null;
                        m(f)
                    };
                    f.onerror = e;
                    b.i.log(45, {
                        att: h,
                        max: b.a,
                        url: c
                    });
                    document.getElementsByTagName("HEAD")[0].appendChild(f)
                };
                xg.prototype.g = function(b, c) {___jdce_logger("lacuna_cache/exported_gpooig.js", 110529, 110999);
                    b = (0, _.za)(b, wg(vg(_.lb, _.Ja(ug, this.b))));
                    if (0 < b.length) {
                        var d = this.w.join("/") + "/m=" + b.join(",") + "/excm=" + _.Za(this.b).join(",") + "/d=1/ed=1/ct=zgms";
                        this.F && (d += "/rs=" + this.F);
                        Ag(d + this.N, c);
                        for (c = 0; c < b.length; c++) this.b[b[c]] = !0
                    }
                };
                var Ag = function(b, c) {___jdce_logger("lacuna_cache/exported_gpooig.js", 111026, 111554);
                    var d = _.bd(document, "LINK");
                    d.setAttribute("rel", "stylesheet");
                    d.setAttribute("type", "text/css");
                    d.setAttribute("href", b);
                    d.onload = d.onreadystatechange = function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 111309, 111459);
                        d.readyState && "loaded" != d.readyState && "complete" != d.readyState || c && c.call(null)
                    };
                    document.getElementsByTagName("HEAD")[0].appendChild(d)
                };
                xg.prototype.h = function(b, c) {___jdce_logger("lacuna_cache/exported_gpooig.js", 111589, 112393);
                    if (!this.L)
                        if (void 0 != c) window.setTimeout((0, _.r)(this.h, this, b, void 0), c);
                        else {
                            zg(this, _.H(this.f, 1), b);
                            b = _.H(this.f, 2);
                            if (_.I(this.f, 3)) {
                                var d = (0, _.r)(this.g, this, b);
                                b = function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 112026, 112112);
                                    d()
                                };
                                "undefined" !== typeof window.addEventListener ? window.addEventListener("load", b) : window.attachEvent("onload", b)
                            } else this.g(b);
                            this.L = !0
                        }
                };
                var Cg;
                window.gbar_ && window.gbar_.LDD ? Cg = window.gbar_.LDD : Cg = [];
                var Dg = _.K(_.fg, _.ff, 1) || new _.ff,
                    Eg = _.K(_.fg, sg, 2) || new sg;
                _.Bg = new xg(Dg, Eg, Cg, _.ig, _.jg);

            } catch (e) {
                _._DumpException(e)
            }
            try {
                var Fg = function(b, c) {___jdce_logger("lacuna_cache/exported_gpooig.js", 112788, 112962);
                    c = _.pg(_.ig, c, void 0);
                    _.L(b, "click", c, void 0, void 0);
                    _.qg(b, "click")
                };
                _.og("gbar_._DumpException", function(b) {___jdce_logger("lacuna_cache/exported_gpooig.js", 113009, 113098);
                    _.ig ? _.ig.log(b) : console.error(b)
                });
                (function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 113118, 114225);
                    _.jg.log(8, {
                        m: "BackCompat" == document.compatMode ? "q" : "s"
                    });
                    var b = Object.create(null);
                    b.gb_Ea = 5;
                    b.gb_2 = 62;
                    var c, d = {};
                    for (c in b) {
                        d.eb = b[c];
                        var e = document.querySelector("." + c);
                        if (e) {
                            var f = e.querySelector(".gb_B");
                            f && (e = f);
                            Fg(e, function(g) {___jdce_logger("lacuna_cache/exported_gpooig.js", 113722, 113902);
                                return function() {___jdce_logger("lacuna_cache/exported_gpooig.js", 113775, 113872);
                                    _.jg.log(g.eb)
                                }
                            }(d))
                        }
                        d = {
                            eb: d.eb
                        }
                    }
                    b = _.gg() || new _.gf;
                    _.tg(window, _.P(_.H(b, 8)));
                    _.Fa("m", _.Bg);
                    _.Bg.h()
                })();

            } catch (e) {
                _._DumpException(e)
            }
        })(this.gbar_);
        // Google Inc.
    