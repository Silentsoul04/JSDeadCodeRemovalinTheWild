window.googletag && typeof googletag._gpt_js_load_1_ == 'function' && googletag._gpt_js_load_1_(function(_) {
    var Z = function(a, b) {
            return _.aa[a] = b
        },
        zt = function(a, b) {
            return (a = yt(a, b)) && 0 < a.width && 0 < a.height ? a : null
        },
        At = function(a) {
            return "number" === typeof a || "string" === typeof a
        },
        Bt = function(a) {
            switch (a) {
                case void 0:
                case null:
                case 2:
                    return !1;
                case 0:
                case 1:
                    return !0;
                default:
                    throw Error("Unexpected encryption mode: " + a);
            }
        },
        Ct = function(a) {
            var b = window,
                c = !0;
            c = void 0 === c ? !1 : c;
            new Promise(function(d, e) {
                function f() {
                    g.onload = null;
                    g.onerror = null;
                    b.document.body.removeChild(g)
                }
                var g = b.document.createElement("script");
                g.onload = function() {
                    f();
                    d()
                };
                g.onerror = function() {
                    f();
                    e(void 0)
                };
                g.type = "text/javascript";
                g.async = c;
                _.ha(g, a);
                b.document.body.appendChild(g)
            })
        },
        Gt = function(a, b, c) {
            return Dt(this, function e() {
                var f, g;
                return Et(e, function(h) {
                    switch (h.j) {
                        case 1:
                            f = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + (a + "&tv=" + b);
                            g = void 0;
                            h.v = 2;
                            var k = Ft(f);
                            h.j = 4;
                            return {
                                value: k
                            };
                        case 4:
                            g = h.A;
                            h.j = 3;
                            h.v = 0;
                            break;
                        case 2:
                            h.v = 0, h.m = null;
                        case 3:
                            return g ? (c = c || g.sodar_query_id) && g.bg_hash_basename && g.bg_binary ? h.return({
                                context: "pt",
                                pc: g.bg_hash_basename,
                                oc: g.bg_binary,
                                Gc: a + "_" + b,
                                Fc: c
                            }) : h.return(void 0) : h.return(void 0)
                    }
                })
            })
        },
        It = function(a, b, c) {
            var d = void 0 === d ? "sodar2" : d;
            Dt(this, function f() {
                var g;
                return Et(f, function(h) {
                    if (1 == h.j) {
                        var k = Gt(a, b, c);
                        h.j = 2;
                        return {
                            value: k
                        }
                    }
                    g = h.A;
                    if (!g) return h.return(void 0);
                    k = d;
                    k = void 0 === k ? "sodar2" : k;
                    var l = window,
                        m = l.GoogleGcLKhOms;
                    m && "function" === typeof m.push || (m = l.GoogleGcLKhOms = []);
                    var t = {};
                    m.push((t._ctx_ = g.context, t._bgv_ = g.pc, t._bgp_ = g.oc, t._li_ = g.Gc, t._jk_ = g.Fc, t));
                    if (m = l.GoogleDX5YKUSk) l.GoogleDX5YKUSk = void 0, m[1]();
                    k = Ht({
                        basename: k
                    });
                    Ct(k);
                    return h.return(g)
                })
            })
        },
        Kt = function() {
            var a = window,
                b = _.Ti();
            var c = void 0 === c ? Jt : c;
            if (!a.goog_sdr_l) {
                Object.defineProperty(a, "goog_sdr_l", {
                    value: !0
                });
                var d = String(_.sf(a));
                "complete" === a.document.readyState ? c(a, "gpt", b, d) : _.P(a, "load", function() {
                    c(a, "gpt", b, d)
                })
            }
        },
        Lt = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Mt = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Lt.length; f++) c = Lt[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        Nt = {
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
        Ot = function(a, b) {
            _.Pb(b, function(c, d) {
                c && "object" == typeof c && c.$a && (c = c.Ya());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Nt.hasOwnProperty(d) ? a.setAttribute(Nt[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        Pt = function(a) {
            if (a && "number" == typeof a.length) {
                if (_.E(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (_.$a(a)) return "function" == typeof a.item
            }
            return !1
        },
        Qt = function(a, b, c) {
            function d(g) {
                g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !_.Ya(f) || _.E(f) && 0 < f.nodeType ? d(f) : _.J(Pt(f) ? _.Bb(f) : f, d)
            }
        },
        Rt, St, Tt, Ut, Wt, Xt, Yt, bu, cu, du, eu, fu, gu, hu, ju, ku, lu, mu, nu, pu, qu, yt, ru, uu, xu, yu, zu, Au, Bu, Cu, Du, Eu, Fu, Gu, Hu, Ju, Ku, Lu, Mu, Nu, Ou, Pu, Ru, Su, Tu, Uu, Vu, cw, dw, ew, fw, gw, hw, iw, jw, kw, lw, mw, nw, ow, pw, qw, rw, sw, tw, uw, vw, ww, xw, yw, zw, Aw, Bw, Cw, Dw, Ew, Fw, Gw, Hw, Iw, Jw, Kw, Lw, Mw, Nw, Ow, Pw, Qw, Rw, Sw, Tw, Uw, Vw, Ww, Xw, kx, lx, nx, ox, qx, px, rx, sx, ux, xx, vx, wx, yx, Et, zx, Ax, Bx, Ht, Cx;
    _.re.prototype.l = Z(25, function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = String(e[0]),
            g = e[1];
        if (!_.ne && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', _.Mc(g.name), '"');
            if (g.type) {
                f.push(' type="', _.Mc(g.type), '"');
                var h = {};
                Mt(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = _.Ae(d, f);
        g && ("string" === typeof g ? f.className = g : _.D(g) ? f.className = g.join(" ") : Ot(f, g));
        2 < e.length && Qt(d, f, e);
        return f
    });
    Rt = function(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
    };
    St = function(a, b) {
        var c = 0;
        Rt(a, function(d, e) {
            b.call(void 0, d, e, a) && _.xb(a, e) && c++
        })
    };
    Tt = function() {
        return !0
    };
    Ut = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    _.Vt = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    Wt = function(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    Xt = function(a) {
        a = _.Id(a, 2);
        return null == a ? 1 : a
    };
    Yt = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(Yt, _.zd);
    var Zt = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 28, 38],
        $t = [
            [4, 41],
            [39, 48]
        ],
        au = function(a) {
            _.Hd(this, a, Zt, $t)
        };
    _.G(au, _.zd);
    bu = function() {
        var a = new au;
        return _.N(a, 8, !0)
    };
    cu = function(a, b) {
        _.N(a, 49, b)
    };
    du = function(a) {
        a = a.j;
        return a.parentWindow || a.defaultView
    };
    eu = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    fu = function(a) {
        var b = [];
        _.O(a, function(c, d) {
            null != c && "" !== c && b.push(d + ":" + c)
        });
        return b.length ? b.join(";") + ";" : ""
    };
    gu = function(a) {
        var b = {};
        if (a) {
            var c = /\s*:\s*/;
            _.J((a || "").split(/\s*;\s*/), function(d) {
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            })
        }
        return b
    };
    hu = function(a, b) {
        var c = {},
            d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    };
    _.iu = function(a, b) {
        a.style.setProperty ? _.O(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        }) : a.style.cssText = fu((0, _.lf)(gu(a.style.cssText), hu(b, function(c) {
            return c + " !important"
        })))
    };
    ju = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            var d = _.Re(a, window);
            if (d) {
                if (b(d)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    ku = function(a) {
        return ju(a, function(b) {
            return "fixed" == b.position || "sticky" == b.position
        })
    };
    lu = function(a) {
        return ju(a, function(b) {
            return "left" == b["float"] || "right" == b["float"] || "left" == b.cssFloat || "right" == b.cssFloat
        })
    };
    mu = function(a, b) {
        b = _.tb(a, b, void 0);
        if (0 <= b) {
            var c = a[b];
            _.xb(a, b);
            return c
        }
        return null
    };
    nu = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    _.ou = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.ou.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.ou.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.ou.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    pu = function(a) {
        return new _.ou(a.top, a.right, a.bottom, a.left)
    };
    qu = function(a) {
        return new _.ou(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    yt = function(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new _.If(c, e, d - c, a - e)
        }
        return null
    };
    ru = {};
    _.su = function(a, b) {
        var c = ru[b];
        if (!c) {
            var d = _.Vt(b);
            c = d;
            void 0 === a.style[d] && (d = (_.$c ? "Webkit" : _.Zc ? "Moz" : _.Wc ? "ms" : _.Vc ? "O" : null) + Wt(d), void 0 !== a.style[d] && (c = d));
            ru[b] = c
        }
        return c
    };
    _.tu = function(a, b, c) {
        if ("string" === typeof b)(b = _.su(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.su(c, d);
                f && (c.style[f] = e)
            }
    };
    uu = function(a) {
        if (_.Wc && !(8 <= Number(_.md))) return a.offsetParent;
        var b = _.se(a),
            c = _.Kf(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = _.Kf(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    _.vu = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.wu = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = _.$c && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = _.Lf(a), new _.qe(a.right - a.left, a.bottom - a.top)) : new _.qe(b, c)
    };
    xu = function(a) {
        _.q.ampInaboxInitialized || a && !/^\d{15,20}$/.test(a) || _.q.document.querySelector('script[src$="amp4ads-host-v0.js"]') || _.Qe(_.q.document, "https://cdn.ampproject.org/" + (a ? "rtv/" + a + "/" : "") + "amp4ads-host-v0.js")
    };
    yu = function(a, b) {
        var c = _.q.ampInaboxIframes = _.q.ampInaboxIframes || [],
            d = function() {};
        a && (c.push(a), d = function() {
            _.q.AMP && _.q.AMP.inaboxUnregisterIframe ? _.q.AMP.inaboxUnregisterIframe(a) : _.yb(c, a)
        });
        if (_.q.ampInaboxInitialized) return d;
        _.q.ampInaboxPendingMessages = _.q.ampInaboxPendingMessages || [];
        b && /^\d{15,20}$/.test(b) && xu(b);
        if (!c.google_amp_listener_added) {
            c.google_amp_listener_added = !0;
            var e = function(f) {
                if (_.q.ampInaboxInitialized) return _.tf(_.q, "message", e), d;
                var g, h = _.y(198) && "amp-ini-load" === f.data;
                _.q.ampInaboxPendingMessages && !h && (g = /^amp-(\d{15,20})?/.exec(f.data)) && (_.q.ampInaboxPendingMessages.push(f), xu(g[1]))
            };
            _.P(_.q, "message", e)
        }
        return d
    };
    zu = function() {
        var a = _.zg();
        "google_onload_fired" in a || (a.google_onload_fired = !1, _.P(a, "load", function() {
            a.google_onload_fired = !0
        }))
    };
    Au = function(a, b, c) {
        var d = window;
        return function() {
            var e = _.hh(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (_.hh() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    };
    Bu = function(a, b, c) {
        a.j && (_.q.google_timing_params = _.q.google_timing_params || {}, _.q.google_timing_params["qqid." + b] = c)
    };
    Cu = function(a) {
        var b = null;
        _.J(a, function(c) {
            _.O(c, function(d, e) {
                b = b || {};
                b[e] = d
            })
        });
        return b
    };
    Du = function(a) {
        var b = void 0 === b ? Infinity : b;
        var c = _.u(_.Zi, function(d) {
            return _.Hm(d)
        });
        St(c, function(d) {
            return !d
        });
        _.sa(c);
        c.length = Math.min(b, c.length);
        _.A(a, "qqids", c.join(","))
    };
    Eu = function() {};
    Fu = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    };
    Gu = function(a, b) {
        b.push('"', a.replace(_.yl, function(c) {
            var d = Fu[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Fu[c] = d);
            return d
        }), '"')
    };
    Hu = function(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (_.D(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), Hu(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Gu(d, c), c.push(":"), Hu(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Gu(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    };
    _.Iu = function(a) {
        var b = [];
        Hu(new Eu, a, b);
        return b.join("")
    };
    Ju = 0;
    Ku = function(a) {
        this.j = a;
        this.l = _.Pc()
    };
    Lu = function(a) {
        var b = {};
        _.J(a, function(c) {
            b[c.j] = c.l
        });
        return b
    };
    Mu = function(a) {
        var b = {};
        b.c = a.v;
        b.i = a.o;
        a.F && (b.e = a.F);
        a.m.postMessage(_.Iu(b), a.A)
    };
    Nu = function(a, b, c, d, e, f) {
        _.wl.call(this);
        this.v = a;
        this.status = 1;
        this.m = b;
        this.A = c;
        this.L = d;
        this.ab = !!e;
        this.o = Math.random();
        this.B = {};
        this.j = null;
        this.D = (0, _.F)(this.J, this);
        this.F = f
    };
    _.B(Nu, _.wl);
    Nu.prototype.J = function(a) {
        if (a.origin === this.A && (this.ab || a.source == this.m)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.E(b) && (a = b.i, b.c === this.v && a != this.o)) {
                if (2 !== this.status) try {
                    this.status = 2, Mu(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.E(b)) && this.B.hasOwnProperty(a)) this.B[a](b)
            }
        }
    };
    Nu.prototype.I = function() {
        if (1 === this.status) {
            try {
                this.m.postMessage && Mu(this)
            } catch (a) {}
            window.setTimeout((0, _.F)(this.I, this), 50)
        }
    };
    Nu.prototype.connect = function(a) {
        a && (this.j = a);
        _.P(window, "message", this.D);
        this.L && this.I()
    };
    Nu.prototype.l = function() {
        this.status = 3;
        _.tf(window, "message", this.D);
        _.wl.prototype.l.call(this)
    };
    Ou = function(a, b, c) {
        a.B[b] = c
    };
    Pu = function(a, b, c) {
        var d = {};
        d.c = a.v;
        d.i = a.o;
        d.s = b;
        d.p = c;
        try {
            a.m.postMessage(_.Iu(d), a.A)
        } catch (e) {}
    };
    _.Qu = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    Ru = function(a, b) {
        if (!a) return a;
        var c = a.toLowerCase();
        return -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") ? a : "<html><head>" + (void 0 === b ? "" : b) + "</head><body>" + a + "</body></html>"
    };
    Su = function(a, b, c, d, e, f) {
        this.m = pu(a);
        this.l = pu(b);
        this.o = c;
        this.j = pu(d);
        this.v = e;
        this.A = f
    };
    Tu = function(a) {
        return _.Iu({
            windowCoords_t: a.m.top,
            windowCoords_r: a.m.right,
            windowCoords_b: a.m.bottom,
            windowCoords_l: a.m.left,
            frameCoords_t: a.l.top,
            frameCoords_r: a.l.right,
            frameCoords_b: a.l.bottom,
            frameCoords_l: a.l.left,
            styleZIndex: a.o,
            allowedExpansion_t: a.j.top,
            allowedExpansion_r: a.j.right,
            allowedExpansion_b: a.j.bottom,
            allowedExpansion_l: a.j.left,
            xInView: a.v,
            yInView: a.A
        })
    };
    Uu = function(a, b, c) {
        var d = window,
            e = d.screenX || d.screenLeft || 0,
            f = d.screenY || d.screenTop || 0;
        d = new _.ou(f, e + (d.outerWidth || document.documentElement.clientWidth || 0), f + (d.outerHeight || document.documentElement.clientHeight || 0), e);
        var g = _.Mf(a);
        e = _.Of(_.wu, a);
        var h = new _.If(g.x, g.y, e.width, e.height);
        e = qu(h);
        f = String(_.Kf(a, "zIndex"));
        if (b) {
            g = new _.If(0, 0, Infinity, Infinity);
            c = new _.If(0, 0, Infinity, Infinity);
            b = _.te(a);
            var k = b.j.body,
                l = b.j.documentElement,
                m = !0;
            a = uu(a);
            for (var t = 0; a; a = uu(a), t++) {
                var x = _.Jf(a, "overflow") || (a.currentStyle ? a.currentStyle.overflow : null) || a.style && a.style.overflow;
                if (_.Wc && 0 == a.clientWidth || _.$c && 0 == a.clientHeight && a == k || a == k || a == l) m = !1;
                else {
                    var v = _.Mf(a);
                    v.x += a.clientLeft;
                    v.y += a.clientTop;
                    v = new _.If(v.x, v.y, a.clientWidth, a.clientHeight);
                    "visible" != x && c && (c = yt(c, v));
                    "hidden" == x ? m && g && 100 > t && (g = yt(g, v)) : m = !1
                }
            }
            g && (k = window, a = k.document, k = _.Ah(k), a = new _.qe(Math.max(k.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)), Math.max(k.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight))), g = zt(g, new _.If(0, 0, a.width, a.height)));
            c && (a = _.ye(b.j), b = _.xe(du(b) || window), c = zt(new _.If(c.left, c.top, c.width, c.height), new _.If(a.scrollLeft, a.scrollTop, b.width, b.height)));
            a = g;
            b = c
        } else {
            b = new _.ou(0, Infinity, Infinity, 0);
            k = _.te(a);
            m = k.j.body;
            t = k.j.documentElement;
            for (l = _.ye(k.j); a = uu(a);) _.Wc && 0 == a.clientWidth || _.$c && 0 == a.clientHeight && a == m || a == m || a == t || "visible" == _.Kf(a, "overflow") || (x = _.Mf(a), v = new _.pe(a.clientLeft, a.clientTop), x.x += v.x, x.y += v.y, b.top = Math.max(b.top, x.y), b.right = Math.min(b.right, x.x + a.clientWidth), b.bottom = Math.min(b.bottom, x.y + a.clientHeight), b.left = Math.max(b.left, x.x));
            a = l.scrollLeft;
            l = l.scrollTop;
            b.left = Math.max(b.left, a);
            b.top = Math.max(b.top, l);
            k = _.xe(du(k) || window);
            b.right = Math.min(b.right, a + k.width);
            b.bottom = Math.min(b.bottom, l + k.height);
            b = (a = 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null) ? new _.If(a.left, a.top, a.right - a.left, a.bottom - a.top) : null;
            c ? (a = c.boundingClientRect, a = new _.If(g.x - a.left, g.y - a.top, c.rootBounds.width, c.rootBounds.height)) : a = b
        }
        b = b ? yt(h, b) : null;
        g = c = 0;
        if (k = b) k = new _.qe(b.width, b.height), k = k.width * k.height;
        k && (c = b.width / h.width, g = b.height / h.height);
        b = new _.ou(0, 0, 0, 0);
        if (k = a)(h = yt(h, a)) ? (l = qu(a), m = qu(h), k = m.right != l.left && l.right != m.left, l = m.bottom != l.top && l.bottom != m.top, k = (0 != h.width || k) && (0 != h.height || l)) : k = !1;
        k && (b = new _.ou(Math.max(e.top - a.top, 0), Math.max(a.left + a.width - e.right, 0), Math.max(a.top + a.height - e.bottom, 0), Math.max(e.left - a.left, 0)));
        return new Su(d, e, f, b, c, g)
    };
    Vu = function(a) {
        this.v = a;
        this.o = null;
        this.I = this.status = 0;
        this.l = null;
        this.da = "sfchannel" + a
    };
    Vu.prototype.Ra = function() {
        return 100 == this.status
    };
    var Wu = function(a) {
            this.j = a
        },
        Xu = function(a, b) {
            this.hb = a;
            this.ib = b;
            this.l = this.j = !1
        },
        Yu = function(a, b, c, d, e, f, g, h, k) {
            k = void 0 === k ? [] : k;
            this.v = a;
            this.l = b;
            this.m = c;
            this.permissions = d;
            this.o = e;
            this.A = f;
            this.ab = g;
            this.hostpageLibraryTokens = k;
            this.j = "";
            this.Pa = h
        },
        Zu = function(a, b) {
            this.l = a;
            this.o = b
        };
    Zu.prototype.j = function(a) {
        this.o && (a.sentinel = this.o);
        return _.Iu(a)
    };
    var $u = function(a, b, c) {
        Zu.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.G($u, Zu);
    $u.prototype.j = function() {
        return $u.Aa.j.call(this, {
            uid: this.l,
            version: this.version
        })
    };
    var av = function(a, b, c, d) {
        Zu.call(this, a, void 0 === d ? "" : d);
        this.v = b;
        this.m = c
    };
    _.G(av, Zu);
    av.prototype.j = function() {
        return av.Aa.j.call(this, {
            uid: this.l,
            initialWidth: this.v,
            initialHeight: this.m
        })
    };
    var bv = function(a, b, c) {
        Zu.call(this, a, void 0 === c ? "" : c);
        this.m = b
    };
    _.G(bv, Zu);
    bv.prototype.j = function() {
        return bv.Aa.j.call(this, {
            uid: this.l,
            description: this.m
        })
    };
    var cv = function(a, b, c, d) {
        Zu.call(this, a, void 0 === d ? "" : d);
        this.m = b;
        this.push = c
    };
    _.G(cv, Zu);
    cv.prototype.j = function() {
        return cv.Aa.j.call(this, {
            uid: this.l,
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        })
    };
    var dv = function(a, b) {
        Zu.call(this, a, void 0 === b ? "" : b)
    };
    _.G(dv, Zu);
    dv.prototype.j = function() {
        return dv.Aa.j.call(this, {
            uid: this.l
        })
    };
    var ev = function(a, b, c) {
        Zu.call(this, a, void 0 === c ? "" : c);
        this.v = b
    };
    _.G(ev, Zu);
    ev.prototype.j = function() {
        var a = {
            uid: this.l,
            newGeometry: Tu(this.v)
        };
        return ev.Aa.j.call(this, a)
    };
    var fv = function(a, b, c, d, e, f) {
        ev.call(this, a, c, void 0 === f ? "" : f);
        this.A = b;
        this.m = d;
        this.push = e
    };
    _.G(fv, ev);
    fv.prototype.j = function() {
        var a = {
            uid: this.l,
            success: this.A,
            newGeometry: Tu(this.v),
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        };
        this.o && (a.sentinel = this.o);
        return _.Iu(a)
    };
    var gv = function(a, b, c, d) {
        Zu.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.G(gv, Zu);
    gv.prototype.j = function() {
        return gv.Aa.j.call(this, {
            uid: this.l,
            width: this.width,
            height: this.height
        })
    };
    var hv = function() {
            this.j = []
        },
        iv = function(a, b, c, d) {
            this.m = a;
            this.j = (this.l = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.o = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.v = this.l ? a.style.getPropertyPriority(this.j) : void 0;
            this.l ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        },
        jv = function(a, b, c, d, e) {
            a.j.push(new iv(b, c, d, e))
        },
        kv = function(a, b, c, d) {
            jv(a, b, c, d + "px", void 0)
        },
        lv = 1,
        mv = function(a, b, c) {
            a.F ? (b.style.width = _.vu("100%", !0), b.style.height = _.vu("auto", !0)) : (b.style.width = _.vu(c.width, !0), b.style.height = _.vu(c.height, !0))
        },
        nv = function(a, b) {
            var c = _.te(a.A),
                d = b.content;
            d = a.M + ";" + d.length + ";" + d;
            var e = new Yu(a.v, a.$, a.T, a.O, new Wu({
                shared: {
                    sf_ver: a.M,
                    ck_on: navigator.cookieEnabled ? 1 : 0,
                    flash_ver: _.Dl ? _.El : "0"
                }
            }), a.F, a.ba, a.R, a.ca);
            var f = {};
            f.uid = e.v;
            f.hostPeerName = e.l;
            f.initialGeometry = Tu(e.m);
            var g = e.permissions;
            g = _.Iu({
                expandByOverlay: g.hb,
                expandByPush: g.ib,
                readCookie: g.j,
                writeCookie: g.l
            });
            f = (f.permissions = g, f.metadata = _.Iu(e.o.j), f.reportCreativeGeometry = e.A, f.isDifferentSourceWindow = e.ab, f.goog_safeframe_hlt = Lu(e.hostpageLibraryTokens), f.encryptionMode = e.Pa, f);
            e.j && (f.sentinel = e.j);
            e = _.Iu(f);
            e = d + e;
            d = !1 === b.ec;
            if (a.P && b.size instanceof _.qe) {
                f = Bt(b.Pa) ? "https://secureframe.doubleclick.net" : du(c).location.protocol + "//tpc.googlesyndication.com";
                g = b.Sb;
                var h = b.size,
                    k = du(_.te(a.A));
                Ju || _.Qe(k.document, (a.ea ? "http:" : "https:") + "//pagead2.googlesyndication.com/pagead/expansion_embed.js");
                Ju++;
                k.google_eas_queue = k.google_eas_queue || [];
                k.google_eas_queue.push({
                    a: g,
                    b: f,
                    c: h.width,
                    d: h.height,
                    e: "sf-gdn-exp-" + Ju,
                    f: void 0,
                    g: void 0,
                    h: void 0,
                    i: void 0
                })
            }
            g = b.size;
            var l = b.kb,
                m = b.zc || "";
            f = g.width;
            h = g.height;
            g = "";
            a.F && (h = f = 0, g = "min-width:100%");
            k = {};
            k.id = b.Sb;
            k.title = m;
            k.name = e;
            b = du(c);
            d = Bt(a.R) ? "https://secureframe.doubleclick.net/container.html?ecs=" + l : _.am(b, a.M, a.X, d);
            e = [];
            a.P && (b = _.cf(b.location.href), e.push([0 < b.length ? "google_debug" + (b ? "=" + b : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.v, "&p=", encodeURIComponent(_.q.document.location.protocol), "//", encodeURIComponent(_.q.document.location.host)].join("")));
            e.length && (d += "#" + e.join("&"));
            b = (k.src = d, k.scrolling = "no", k.marginWidth = "0", k.marginHeight = "0", k.width = String(f), k.height = String(h), k["data-is-safeframe"] = "true", k);
            null !== a.W && (b.sandbox = a.W);
            d = {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;" + (g || ""),
                allowTransparency: "true",
                src: _.Wc && !_.ld(9) ? "javascript:\"<html><body style='background:transparent'></body></html>\"" : "about:blank"
            };
            b && Mt(d, b);
            c = c.l("IFRAME", d);
            a.A.appendChild(c);
            a.j = c
        },
        ov = function(a) {
            a.o = Uu(a.j, a.J, a.N);
            a.N = null;
            Pu(a.l, "geometry_update", (new ev(a.v, a.o)).j())
        },
        pv = function(a) {
            if (1 == a.status || 2 == a.status) switch (a.B) {
                case 0:
                    ov(a);
                    a.K = window.setTimeout((0, _.F)(a.Nb, a), 1E3);
                    a.B = 1;
                    break;
                case 1:
                    a.B = 2;
                    break;
                case 2:
                    a.B = 2
            }
        },
        qv = function(a) {
            var b = null;
            a.Rc ? b = a.Rc : a.sandbox && (b = _.gm);
            return null == b ? null : b.join(" ")
        },
        rv = function(a) {
            Vu.call(this, null != a.uniqueId ? a.uniqueId : lv++);
            var b = this;
            this.D = a.Hc;
            this.F = 1 == a.size;
            this.O = new Xu(a.permissions.hb && !this.F, a.permissions.ib && !this.F);
            this.A = a.Bb;
            this.ca = a.hostpageLibraryTokens || [];
            var c = window.location;
            this.$ = "file:" == c.protocol ? "*" : c.protocol + "//" + c.host;
            this.ba = !!a.ab;
            c = !1 === a.ec ? "https:" : window.location.protocol;
            this.Z = Bt(a.Pa) ? "https://secureframe.doubleclick.net" : c + "//tpc.googlesyndication.com";
            this.P = !!a.tc;
            this.ea = !!a.cd;
            this.W = qv(a);
            this.m = new hv;
            mv(this, a.Bb, a.size);
            this.J = !!a.wc;
            this.o = this.T = Uu(a.Bb, this.J);
            this.M = a.Qc || "1-0-35";
            this.X = a.qc || "";
            this.R = void 0 === a.Pa ? null : a.Pa;
            nv(this, a);
            this.N = null;
            this.L = Au(412, function() {
                return pv(b)
            }, a.oa);
            this.K = -1;
            this.B = 0;
            this.G = null;
            !a.he || "function" !== typeof IntersectionObserver || _.bd || _.ad || (this.G = new IntersectionObserver(Au(414, function(e) {
                b.N = e[e.length - 1];
                pv(b)
            }, a.oa)));
            this.l = new Nu(this.da, this.j.contentWindow, this.Z, !1);
            Ou(this.l, "init_done", (0, _.F)(this.vb, this));
            Ou(this.l, "register_done", (0, _.F)(this.Cb, this));
            Ou(this.l, "report_error", (0, _.F)(this.Db, this));
            Ou(this.l, "expand_request", (0, _.F)(this.tb, this));
            Ou(this.l, "collapse_request", (0, _.F)(this.qb, this));
            Ou(this.l, "creative_geometry_update", (0, _.F)(this.rb, this));
            this.l.connect((0, _.F)(this.Ab, this));
            var d = (0, _.F)(function() {
                this.j && (this.j.name = "", a.Vb && a.Vb(), _.tf(this.j, "load", d))
            }, this);
            _.P(this.j, "load", Au(415, d, a.oa));
            this.vb = Au(413, this.vb, a.oa);
            this.Cb = Au(417, this.Cb, a.oa);
            this.Db = Au(419, this.Db, a.oa);
            this.tb = Au(411, this.tb, a.oa);
            this.qb = Au(409, this.qb, a.oa);
            this.rb = Au(410, this.rb, a.oa);
            this.Ab = Au(416, this.Ab, a.oa)
        };
    _.B(rv, Vu);
    _.n = rv.prototype;
    _.n.Ab = function() {
        this.G && this.j ? this.G.observe(this.j) : (_.P(window, "resize", this.L), _.P(window, "scroll", this.L))
    };
    _.n.vb = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.E(b) || !At(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new $u(b.uid, b.version, b.sentinel);
            if (this.v != c.l || this.M != c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (d) {
            this.D.error("Invalid INITIALIZE_DONE message. Reason: " + d.message)
        }
    };
    _.n.Cb = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.E(b) || !At(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.v != (new av(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).l) throw Error("Wrong source container");
            this.status = 2
        } catch (c) {
            this.D.error("Invalid REGISTER_DONE message. Reason: " + c.message)
        }
    };
    _.n.Db = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.E(b) || !At(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new bv(b.uid, b.description, b.sentinel);
            if (this.v != c.l) throw Error("Wrong source container");
            this.D.info("Ext reported an error. Description: " + c.m)
        } catch (d) {
            this.D.error("Invalid REPORT_ERROR message. Reason: " + d.message)
        }
    };
    _.n.tb = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.I) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.E(b) || !At(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new cv(b.uid, new _.ou(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.v != c.l) throw Error("Wrong source container");
            if (!(0 <= c.m.top && 0 <= c.m.left && 0 <= c.m.bottom && 0 <= c.m.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.O.ib || !c.push && this.O.hb) {
                var e = c.m,
                    f = c.push,
                    g = this.o = Uu(this.j, this.J);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) jv(this.m, h, "overflowX", "visible", "important"), jv(this.m, h, "overflowY", "visible", "important");
                    var k = this.o.l,
                        l = this.o.l,
                        m = qu(new _.If(0, 0, k.right - k.left, l.bottom - l.top));
                    _.E(e) ? (m.top -= e.top, m.right += e.right, m.bottom += e.bottom, m.left -= e.left) : (m.top -= e, m.right += Number(void 0), m.bottom += Number(void 0), m.left -= Number(void 0));
                    jv(this.m, this.A, "position", "relative");
                    jv(this.m, this.j, "position", "absolute");
                    f ? (kv(this.m, this.A, "width", m.right - m.left), kv(this.m, this.A, "height", m.bottom - m.top)) : jv(this.m, this.j, "zIndex", "10000");
                    kv(this.m, this.j, "width", m.right - m.left);
                    kv(this.m, this.j, "height", m.bottom - m.top);
                    kv(this.m, this.j, "left", m.left);
                    kv(this.m, this.j, "top", m.top);
                    this.I = 2;
                    this.o = Uu(this.j, this.J);
                    d = !0
                } else d = !1
            }
            a = d;
            Pu(this.l, "expand_response", (new fv(this.v, a, this.o, c.m, c.push)).j());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (t) {
            this.D.error("Invalid EXPAND_REQUEST message. Reason: " + t.message)
        }
    };
    _.n.qb = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.I) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.E(b) || !At(b.uid)) throw Error("Cannot parse JSON message");
            if (this.v != (new dv(b.uid, b.sentinel)).l) throw Error("Wrong source container");
            _.bm(this.m);
            this.I = 0;
            this.j && (this.o = Uu(this.j, this.J));
            Pu(this.l, "collapse_response", (new ev(this.v, this.o)).j())
        } catch (c) {
            this.D.error("Invalid COLLAPSE_REQUEST message. Reason: " + c.message)
        }
    };
    _.n.rb = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.E(b) || !At(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new gv(b.uid, b.width, b.height, b.sentinel);
            if (this.v != c.l) throw Error("Wrong source container");
            var d = String(c.height);
            this.F ? d != this.j.height && (this.j.height = d, pv(this)) : this.D.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
        } catch (e) {
            this.D.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + e.message)
        }
    };
    _.n.Nb = function() {
        if (1 == this.status || 2 == this.status) switch (this.B) {
            case 1:
                this.B = 0;
                break;
            case 2:
                ov(this), this.K = window.setTimeout((0, _.F)(this.Nb, this), 1E3), this.B = 1
        }
    };
    var sv = function(a) {
            switch (a) {
                case 2:
                    return 1;
                case 1:
                    return 2;
                case 8:
                    return 4;
                default:
                    return null
            }
        },
        tv = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        uv = function() {
            _.Sm.apply(this, arguments)
        };
    _.B(uv, _.Sm);
    var vv = function(a, b, c, d) {
        _.Sm.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.B(vv, _.Sm);
    var wv = function(a, b, c) {
        _.Sm.call(this, a, b);
        this.payload = c
    };
    _.B(wv, _.Sm);
    var xv = function() {
        _.Sm.apply(this, arguments)
    };
    _.B(xv, _.Sm);
    var yv = function() {
        _.Sm.apply(this, arguments)
    };
    _.B(yv, _.Sm);
    var zv = function() {
        _.Sm.apply(this, arguments)
    };
    _.B(zv, _.Sm);
    var Av = function() {
        _.Sm.apply(this, arguments)
    };
    _.B(Av, _.Sm);
    var Bv = function(a) {
            a.m.info((0, _.Jj)(a.getAdUnitPath()), null, a, a.mb)
        },
        Cv = function(a) {
            if (!a.L) {
                var b = new uv(a.l(), "publisher_ads");
                _.ln(a, "impressionViewable", b);
                a.L = !0
            }
        },
        Dv = function(a, b, c) {
            _.pn(a) && (b = new vv(a.l(), "publisher_ads", b, c), _.ln(a, "rewardedSlotReady", b))
        },
        Ev = function(a) {
            if (_.pn(a)) {
                var b = new xv(a.l(), "publisher_ads");
                _.ln(a, "rewardedSlotCanceled", b)
            }
        },
        Fv = function(a, b) {
            _.pn(a) && (b = new wv(a.l(), "publisher_ads", b), _.ln(a, "rewardedSlotGranted", b))
        },
        Gv = function(a) {
            if (_.pn(a)) {
                var b = new zv(a.l(), "publisher_ads");
                _.ln(a, "rewardedSlotCompleted", b)
            }
        },
        Hv = function(a) {
            if (_.pn(a)) {
                var b = new yv(a.l(), "publisher_ads");
                _.ln(a, "rewardedSlotClosed", b)
            }
        },
        Iv = function(a, b, c) {
            a.j = b;
            b = _.L(a.j, 33) || "";
            a.ha = b;
            1 == _.Pi(c) && (0 == a.R && _.M(a.j, 44) ? a.R = 1 : a.R = 2);
            if (!a.j || _.M(a.j, 8)) c = null;
            else {
                c = new tv;
                b = !!_.M(a.j, 9);
                c.isBackfill = b;
                var d = _.L(a.j, 15),
                    e = _.L(a.j, 16);
                d.length && e.length && (c.sourceAgnosticCreativeId = d[0], c.sourceAgnosticLineItemId = e[0], b || (c.creativeId = d[0], c.lineItemId = e[0], (b = _.L(a.j, 22)) && b.length && (c.creativeTemplateId = b[0])));
                _.L(a.j, 17).length && (b = _.L(a.j, 17)[0], c.advertiserId = b);
                _.L(a.j, 18).length && (b = _.L(a.j, 18)[0], c.campaignId = b);
                _.L(a.j, 19).length && (b = _.L(a.j, 19), c.yieldGroupIds = b);
                _.L(a.j, 20).length && (b = _.L(a.j, 20), c.companyIds = b);
                b = _.L(a.j, 45);
                b = !b.length || _.Ra(b[0]) ? b : _.u(b, _.Jd);
                b.length && (c.encryptedTroubleshootingInfo = b[0])
            }
            a.ka = c;
            c = new Av(a.l(), "publisher_ads");
            _.ln(a, "slotResponseReceived", c)
        },
        Jv = function(a) {
            return a.j ? !!_.M(a.j, 3) : !0
        },
        Kv = function(a, b) {
            a.J && (a.ua = b)
        },
        Lv = function(a, b) {
            var c = 0;
            a.N || (a.N = _.on(a));
            for (var d = 0; d < a.N.length; d++) {
                var e = a.N[d];
                _.D(e) && (e = e[b], c < e && (c = e))
            }
            return c
        },
        Mv = function(a) {
            return "?eid=" + _.wh.C().j().join(",") + "&adk=" + a.Va
        },
        Nv = function() {};
    _.n = Nv.prototype;
    _.n.getNewBlocks = function() {};
    _.n.setupOse = function() {};
    _.n.getOseId = function() {
        return -1
    };
    _.n.getCorrelator = function() {
        return ""
    };
    _.n.numBlocks = function() {
        return 0
    };
    _.n.registerAdBlock = function() {};
    _.n.unloadAdBlock = function() {};
    _.n.setLoadOsdJsOnPubWindow = function() {};
    var Ov = function(a, b, c) {
            a && (c ? _.P(a, "load", b) : _.tf(a, "load", b))
        },
        Pv = function() {
            var a = (_.zg() || _.q).google_osd_amcb;
            return _.$a(a) ? a : null
        },
        Qv = function(a) {
            return "https://www.googletagservices.com/activeview/js/current/osd.js?cb=" + encodeURIComponent(void 0 === a ? "/r20100101" : a)
        },
        Rv = "",
        Sv = function(a) {
            var b = a.m ? _.zg() : _.q;
            a = Rv;
            b = b || _.q;
            b.google_osd_loaded ? a = !1 : (_.Qe(b.document, a), a = b.google_osd_loaded = !0);
            a && zu()
        },
        Tv = 0,
        Uv = 0,
        Vv = function(a, b, c, d, e, f) {
            var g = this;
            d = void 0 === d ? _.Va : d;
            this.A = a;
            this.F = b;
            this.j = c;
            this.o = this.m = this.l = !1;
            this.B = d;
            this.G = void 0 === e ? -1 : e;
            this.D = void 0 === f ? -1 : f;
            this.v = function() {
                return g.l = !0
            }
        },
        Wv = function(a, b) {
            this.l = b && b.l ? b.l : 0;
            this.o = b ? b.o : "";
            this.j = b && b.j ? b.j : [];
            this.m = !0;
            if (b)
                for (a = 0; a < this.j.length; ++a) this.j[a].o = !0
        };
    _.n = Wv.prototype;
    _.n.getNewBlocks = function(a, b) {
        for (var c = this.j.length, d = 0; d < c; d++) {
            var e = this.j[d];
            !e.m && e.j && (e.m = !0, a(e.j, e.A, e.F, e.l, void 0, e.o, e.B, e.G, e.D))
        }
        b && ((_.zg() || _.q).google_osd_amcb = a)
    };
    _.n.setupOse = function(a) {
        if (this.getOseId()) return this.getOseId();
        var b = _.no(Tv, Uv);
        if (!b) return 0;
        this.l = b;
        this.o = String(a || 0);
        return this.getOseId()
    };
    _.n.getOseId = function() {
        return window && Math.random && navigator ? this.l : -1
    };
    _.n.getCorrelator = function() {
        return this.o
    };
    _.n.numBlocks = function() {
        return this.j.length
    };
    _.n.registerAdBlock = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? function() {
            return null
        } : g;
        c = Pv();
        e = _.gh() || -1;
        f = _.q.pageYOffset;
        0 <= f || (f = -1);
        c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new Vv(a, b, d, g, e, f), this.j.push(g), Ov(d, g.v, !0), Rv || (_.uf(_.q, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=" + b + ("&req=" + a)), Rv = Qv("/r20100101")), Sv(this))
    };
    _.n.unloadAdBlock = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        var d = this.m ? _.zg() : window;
        _.Pa(d.Goog_Osd_UnloadAdBlock) && d.Goog_Osd_UnloadAdBlock(a, b);
        c && (b = mu(this.j, function(e) {
            return e.j == a
        })) && Ov(a, b.v, !1)
    };
    _.n.setLoadOsdJsOnPubWindow = function(a) {
        this.m = a
    };
    var Xv = function() {
            var a = _.zg(),
                b = a.__google_ad_urls;
            if (!b) return a.__google_ad_urls = new Wv(a);
            try {
                if (0 <= b.getOseId()) return b
            } catch (c) {}
            try {
                return a.__google_ad_urls = new Wv(a, b)
            } catch (c) {
                return a.__google_ad_urls = new Wv(a)
            }
        },
        Yv = function(a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        },
        Zv = function(a, b) {
            if (b.length && (a.l = b[0], b = a.l && _.L(a.l, 1)) && (a.o = b, null != a.l && a.o)) {
                b = new Date;
                b.setTime(1E3 * _.L(a.l, 2));
                var c = "." + _.L(a.l, 4);
                b = "__gads=" + a.o + ("; expires=" + b.toGMTString()) + ("; path=" + _.L(a.l, 3) + "; domain=" + c);
                a.m.cookie = b
            }
        },
        $v = {
            overflow: "hidden",
            position: "fixed"
        },
        aw = function() {
            this.j = this.v = this.o = this.m = null;
            this.l = 0
        };
    aw.prototype.apply = function(a, b) {
        this.m = a.body.style.overflow;
        this.o = a.body.style.position;
        this.v = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.l = _.Qu(b);
        _.tu(a.body, "top", -this.l + "px");
        _.tu(a.body, $v)
    };
    _.bw = function(a, b) {
        if (!a.body) return null;
        var c = new aw;
        c.apply(a, b);
        return function() {
            _.tu(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.m,
                position: c.o,
                top: c.v
            });
            b.scrollTo(0, c.l)
        }
    };
    cw = function(a, b, c) {
        return a.IntersectionObserver ? new a.IntersectionObserver(c, b) : new _.Jl(c, b)
    };
    dw = function(a, b, c) {
        _.P(a, b, c);
        return function() {
            return _.tf(a, b, c)
        }
    };
    ew = null;
    fw = function() {
        ew = _.gh()
    };
    gw = function(a, b) {
        return b ? null === ew ? (_.P(a, "mousemove", fw, {
            passive: !0
        }), _.P(a, "scroll", fw, {
            passive: !0
        }), fw(), !1) : _.gh() - ew >= 1E3 * b : !1
    };
    hw = function(a) {
        var b = a.pb,
            c = a.element,
            d = a.Yc,
            e = a.Wc,
            f = void 0 === a.cc ? 0 : a.cc,
            g = a.rc,
            h = a.uc,
            k = null,
            l = !1,
            m = !1,
            t = [],
            x = cw(b, void 0 === a.options ? {} : a.options, function(v, H) {
                try {
                    var C = function() {
                        t.length || (e && (t.push(dw(c, "mouseenter", function() {
                            l = !0;
                            C()
                        })), t.push(dw(c, "mouseleave", function() {
                            l = !1;
                            C()
                        }))), t.push(dw(b.document, "visibilitychange", function() {
                            return C()
                        })));
                        var I = gw(b, f);
                        !m || l || I || _.Ql(b.document) ? (b.clearTimeout(k), k = null) : k = k || b.setTimeout(function() {
                            gw(b, f) ? C() : (g(), H.disconnect())
                        }, 1E3 * d)
                    };
                    m = v[v.length - 1].isIntersecting;
                    C()
                } catch (I) {
                    h && h(I)
                }
            });
        x.observe(c);
        return function() {
            x.disconnect();
            for (var v = _.r(t), H = v.next(); !H.done; H = v.next()) H = H.value, H();
            null != k && b.clearTimeout(k)
        }
    };
    iw = function(a) {
        if (!a.j) {
            var b = _.bi(7);
            Rv = Qv();
            Uv = b;
            Tv = 0;
            if (!_.Ec() || 0 <= _.pc(_.Lc(), 11)) b = Xv();
            else {
                b = _.zg();
                var c = b.__google_ad_urls;
                b = c ? c : b.__google_ad_urls = new Nv
            }
            a.j = b;
            a.l = a.j.setupOse(a.m)
        }
        return a.j
    };
    jw = function(a, b) {
        return a.Z[_.R(b)] || b.o
    };
    kw = function(a, b, c) {
        for (var d = 100; a && a != b && --d;) _.iu(a, c), a = a.parentElement
    };
    lw = function(a) {
        a = _.vl(!0, a);
        return -12245933 != a.width ? a : null
    };
    mw = function(a, b) {
        var c = _.W(a);
        if (1 != b && 2 != b || !c) return !1;
        var d = _.L(a.j, 7) || 0,
            e = c.ownerDocument;
        e = e.defaultView || e.parentWindow || _.q;
        switch (b) {
            case 2:
                var f = _.Fn(a);
                a = "rtl" == f.direction;
                var g = c.style.marginLeft,
                    h = c.style.marginRight;
                a ? _.iu(c, {
                    "margin-right": "0px"
                }) : _.iu(c, {
                    "margin-left": "0px"
                });
                if (b = c.getBoundingClientRect()) {
                    g = 1;
                    if (h = c.parentElement) {
                        h = _.Re(h, e);
                        var k = h.justifyContent;
                        "flex" != h.display || "row" != h.flexDirection || "center" != k && "space-evenly" != k && "space-around" != k || (g = 2)
                    } else h = new _.Ui("gpt_pop_nopar"), _.z(h), Du(h), _.Vi(h, 1), _.A(h, "bm", 2);
                    h = {
                        "z-index": "30"
                    };
                    "absolute" != f.position && "fixed" != f.position && "relative" != f.position && (h.position = "relative");
                    e = (f = lw(e)) ? f.width : e.innerWidth;
                    d = (e - d) / 2;
                    a ? h["margin-right"] = g * (b.right + d - e) + "px" : h["margin-left"] = -(b.left - d) * g + "px";
                    _.iu(c, h);
                    c = !0
                } else c.style.marginLeft = g, c.style.marginRight = h, c = !1;
                return c;
            case 1:
                if (g = c.parentElement)
                    if (b = _.En(a)) {
                        f = b.width;
                        a = _.Fn(a);
                        b = a.position;
                        k = parseInt(a.width, 10) || 0;
                        h = _.Re(g, e);
                        var l = "rtl" == h.direction ? "Right" : "Left";
                        e = l.toLowerCase();
                        g = "absolute" == b ? 0 : parseInt(h["padding" + l], 10);
                        h = parseInt(h["border" + l + "Width"], 10);
                        var m = _.nf(a);
                        l = (m && m[4] || 0) * ("Right" == l ? -1 : 1);
                        d = Math.max(Math.round((f - Math.max(k, d)) / 2), 0);
                        f = {};
                        k = m && m[3] || 1;
                        if (1 != (m && m[0] || 1) || 1 != k) m[0] = 1, m[3] = 1, f.transform = "matrix(" + m.join(",") + ")";
                        k = 0;
                        switch (b) {
                            case "fixed":
                            case "relative":
                                k = parseFloat(a[e]) || 0;
                                break;
                            case "absolute":
                                f[e] = "0"
                        }
                        f["margin-" + e] = d - g - h - k - l + "px";
                        _.iu(c, f);
                        c = !0
                    } else c = !1;
                else c = new _.Ui("gpt_pop_nopar"), _.z(c), Du(c), _.Vi(c, 1), _.A(c, "bm", 1), c = !1;
                return c;
            default:
                return !1
        }
    };
    nw = function(a) {
        var b = !1,
            c = !1,
            d = !1;
        return ju(a, function(e) {
            "nowrap" == e.whiteSpace && (d = !0);
            if ("scroll" == e.overflowX || "auto" == e.overflowX) c = !0;
            "flex" == e.display && (b = !0);
            return b && c && d
        })
    };
    ow = function(a, b) {
        var c = _.Cn(b, a) || _.W(b, a),
            d = new _.xo;
        try {
            var e = function(Q, Ga) {
                    return a.elementsFromPoint(Q, Ga)
                },
                f = c.getBoundingClientRect(),
                g = f.left,
                h = f.top,
                k = f.width,
                l = f.height,
                m = _.Fn(b);
            if ("hidden" == m.visibility || "none" == m.display) return _.yo(d);
            var t = parseInt(m["border-top-width"] || 0, 10) + 1;
            b = g + k;
            l = h + l;
            var x = e(g + t + 2, h + t);
            var v = e(b - t - 2, h + t);
            var H = e(b - t - 2, l - t);
            var C = e(g + t + 2, l - t);
            var I = e(b / 2, l - t)
        } catch (Q) {
            return d.set(1), _.yo(d)
        }
        if (!(x && x.length && v && v.length && H && H.length && C && C.length && I && I.length)) return d.set(7), _.yo(d);
        lu(c) && d.set(9);
        e = function(Q, Ga) {
            return eu(Q, Ga) || eu(Ga, Q)
        };
        x = x[0];
        c == x || e(c, x) || ku(x) || d.set(2);
        v = v[0];
        c == v || e(c, v) || ku(v) || d.set(3);
        H = H[0];
        c == H || e(c, H) || ku(H) || d.set(4);
        C = C[0];
        c == C || e(c, C) || ku(C) || d.set(5);
        if (ku(c)) return _.yo(d);
        C = !1;
        for (H = 0; H < I.length; H++)
            if (v = I[H], C) {
                if (x = _.Re(v, window), "hidden" != x.visibility && !ku(v) && !e(c, v)) {
                    d.set(6);
                    "absolute" == x.position && d.set(11);
                    break
                }
            } else c == v && (C = !0);
        return _.yo(d)
    };
    pw = function(a, b, c) {
        var d = _.Fn(a),
            e = d ? "absolute" != d.position : !0,
            f = !1,
            g = (a = _.W(a)) && a.parentElement,
            h = !1;
        _.mf(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k == g)) e = _.to(k, _.q, !0, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && l.endsWith("px") && parseInt(l, 10) || 0) >= c;
                    !l || m || _.vb(_.qo, l) || (e = !1)
                }
            f || (k = _.Re(k, _.q), "sticky" != k.position && "fixed" != k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            Bc: e,
            Ec: f
        }
    };
    qw = function(a, b, c, d, e, f, g) {
        if (_.q.IntersectionObserver) {
            var h = null,
                k = _.Cn(b, a) || _.W(b, a),
                l = _.S(459, function(m) {
                    if (m = m && m[0]) {
                        var t = m.boundingClientRect,
                            x = -2 > Math.round(t.left) || Math.round(t.right) > window.innerWidth + 2;
                        if (m.intersectionRatio >= 1 - ((0 <= Math.round(t.left) ? 0 : 2) + (Math.round(t.right) <= window.innerWidth ? 0 : 2)) / d || x) _.ya(g, function(v) {
                            if (x) {
                                var H = new _.xo;
                                H.set(8);
                                nw(k) && H.set(10);
                                H = _.yo(H)
                            } else H = ow(a, b);
                            if (_.y(221)) {
                                var C = pw(b, k, e);
                                var I = C.Bc;
                                C = C.Ec
                            } else {
                                a: if (I = a.parentWindow || a.defaultView || window, (C = _.Fn(b)) && "absolute" == C.position) I = !1;
                                    else {
                                        C = (C = _.W(b)) && C.parentElement;
                                        for (var Q = k, Ga = 100; Q && Q != C && Ga--;) {
                                            var Qa = Q.style && Q.style.height,
                                                Za = (Qa && Qa.endsWith("px") && parseInt(Qa, 10) || 0) >= e;
                                            if (Qa && !Za && !_.vb(["auto", "inherit", "100%"], Qa)) {
                                                I = !1;
                                                break a
                                            }
                                            Q = Q.parentElement
                                        }
                                        I = !C || _.uo(C, I, !0, 100, -1, -1)
                                    }C = -1
                            }
                            _.z(v);
                            _.A(v, "qid", _.Hm(b));
                            _.A(v, "iu", b.getAdUnitPath());
                            _.A(v, "e", String(H));
                            _.A(v, "ret", d + "x" + e);
                            _.A(v, "req", f);
                            _.A(v, "bm", String(c));
                            _.A(v, "efh", Number(I));
                            _.A(v, "stk", Number(C));
                            _.A(v, "ifi", b.Fa);
                            _.y(60) && _.A(v, "isc", 1)
                        }, {
                            Ea: _.cg(7)
                        }), h && h.unobserve(k)
                    }
                });
            k && (h = new _.q.IntersectionObserver(l, {
                threshold: [1]
            }), h.observe(k))
        }
    };
    rw = function(a, b, c, d, e, f) {
        var g = _.Di(b);
        _.q.setTimeout(_.S(459, function() {
            return qw(a, b, c, d, e, g, f)
        }), 500)
    };
    sw = function(a, b) {
        var c = _.dg(3);
        if (!c) return !1;
        var d = _.eg(3);
        if (d.length) {
            var e = b.getAdUnitPath().split("/");
            if (!_.vb(d, e[e.length - 1])) return !1
        }
        e = (d = _.on(b)) && d[0];
        if (!e || !_.D(e) || "number" !== typeof e[0] || "number" !== typeof e[1]) return !1;
        d = e[1];
        e = e[0];
        var f = c.split(","),
            g = "f" == f[0],
            h = "p" == f[0],
            k = Number(f[0]),
            l = _.Ah(window).width,
            m = _.En(b);
        c = d;
        if (g) g = l;
        else if (k && 0 < k) g = k;
        else if (h) {
            if (g = Math.min(m && m.width, l), !g) return !1
        } else return !1;
        _.N(a, 36, g <= (m && m.width) ? 1 : 2);
        f = f[1];
        m = Number(f);
        "ratio" == f && e ? c = Math.floor(d / e * g) : m && 0 < m && (c *= m);
        _.N(a, 6, c);
        _.N(a, 7, g);
        _.Md(a, 4, $t[0], '<html><body style="height:' + (c - 2 + "px;width:" + (g - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;"><p>Requested size:')) + (e + "x" + d + "</p><p>Rendered size:") + (g + "x" + c + "</p></body></html>"));
        (a = _.W(b)) && _.tu(a, "opacity", .5);
        return !0
    };
    tw = function(a) {
        a.da && window.setTimeout(function() {
            _.ya("gpt_fluid_sz", function(b) {
                var c = _.Cn(a, document);
                c = c ? _.Pf(c) : null;
                _.A(b, "sz", c ? c.width + "x" + c.height : "null");
                _.A(b, "qqid", _.Hm(a))
            })
        }, 250)
    };
    uw = function(a, b, c, d, e, f, g, h, k, l, m) {
        var t = _.In.C().m,
            x;
        _.D(e) ? x = new _.qe(e[0], e[1]) : x = 1;
        d = null === l ? Ru(d) : _.y(142) ? "<startguard>" + d + "<endguard>" : d;
        return new rv({
            Bb: a,
            Sb: b,
            zc: c,
            content: d,
            size: x,
            Hc: {
                info: function() {},
                H: function() {},
                error: function() {}
            },
            tc: k,
            Vb: f,
            sandbox: void 0 !== g.sandbox ? g.sandbox : !1,
            permissions: {
                hb: void 0 !== g.allowOverlayExpansion ? g.allowOverlayExpansion : !h,
                ib: void 0 !== g.allowPushExpansion ? g.allowPushExpansion : !1
            },
            wc: _.y(45),
            ab: !!_.xa().fifWin,
            Qc: _.Pm(),
            qc: _.Qm(),
            cd: !1,
            ec: !1,
            hostpageLibraryTokens: t,
            oa: _.bj,
            Pa: null === l ? void 0 : l,
            uniqueId: g.uniqueId,
            kb: m
        })
    };
    vw = function(a, b, c) {
        var d = void 0 === d ? !0 : d;
        var e = void 0 === e ? !0 : e;
        b = Ru(b, "<script>var inDapIF=true;\x3c/script>");
        try {
            var f = a.contentWindow ? a.contentWindow.document : a.contentDocument;
            d && (_.Fc() || _.y(93)) && f.open("text/html", "replace");
            c();
            f.write(b);
            a.contentWindow && a.contentWindow.history && a.contentWindow.history.replaceState && Ut(a.contentWindow.location.href, "#") && a.contentWindow.history.replaceState(null, "", "#" + Math.random());
            e && f.close()
        } catch (g) {
            a = new _.Ui("gpt_write_into_frame_failure"), _.z(a), _.Vi(a)
        }
    };
    ww = function(a, b, c, d, e) {
        if (a && d) {
            b = _.r([a, b, e]);
            for (d = b.next(); !d.done; d = b.next())
                if (d = d.value) d.id += "__to_be_removed__", _.iu(d, {
                    display: "none"
                });
            b = _.bi(24);
            window.setTimeout(_.S(514, function() {
                c && _.cm(c);
                _.Be(a);
                _.Be(e)
            }), b)
        } else c && _.cm(c), _.Be(a), _.Be(e)
    };
    xw = function(a) {
        return null != _.L(a, 2) ? null != _.L(a, 3) && 0 != (0, _.kf)() ? _.L(a, 2) * _.Id(a, 3) : _.L(a, 2) : null
    };
    yw = function(a) {
        var b = new _.ki;
        a = _.r(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            if (null != _.L(c, 1)) {
                var d = _.L(c, 1);
                _.N(b, 1, d)
            }
            null != _.L(c, 2) && _.li(b, _.L(c, 2));
            null != _.L(c, 3) && (c = _.Id(c, 3), _.N(b, 3, c))
        }
        return b
    };
    zw = function(a, b, c, d, e) {
        var f = null,
            g = _.S(b, e);
        _.P(c, d, g) && (f = function() {
            return _.tf(c, d, g)
        }, a.A.push(f));
        return f
    };
    Aw = /(<head(\s+[^>]*)?>)/i;
    Bw = function(a, b) {
        a && _.tu(a, "visibility", b ? "visible" : "hidden")
    };
    Cw = function(a, b, c) {
        _.ya("gpt_fluid_sz", function(d) {
            _.A(d, "sz", c + "x" + b);
            _.A(d, "qqid", _.Hm(a.slot));
            _.z(d);
            _.A(d, "ff", 1)
        })
    };
    Dw = function(a, b, c) {
        return _.M(b, 12) ? !0 : _.L(a.o, 2) ? 5 != _.L(a.o, 3) ? (_.bj(499, Error("unknown alg " + _.L(a.o, 3))), !1) : String(_.Ye(c)) != _.L(a.o, 2) ? (_.bj(499, Error("mismatch rz32")), !1) : !0 : null == _.L(a.o, 3) || 8 == _.L(a.o, 3)
    };
    Ew = function(a, b, c) {
        var d = a.o && !!b.contentDocument.querySelector('meta[http-equiv="Content-Security-Policy"][content*="cdn.ampproject.org"]');
        _.ya("gpt_cspviolation", function(e) {
            _.A(e, "qqid", _.Hm(a.slot));
            _.A(e, "blockedURI", c.blockedURI);
            _.A(e, "violatedDirective", c.violatedDirective);
            _.A(e, "sample", c.sample);
            _.A(e, "cij", Number(d));
            _.A(e, "amp", Number(a.o));
            _.z(e)
        }, {
            Ea: 1
        })
    };
    Fw = !1;
    Gw = function(a) {
        var b = _.cg(18);
        if (0 < b) return new _.jl(function(c) {
            return void setTimeout(function() {
                return void c(a)
            }, b)
        });
        if (_.y(169) && _.Cj(2)) return new _.jl(function(c) {
            return void setTimeout(function() {
                return void c(a)
            }, 0)
        })
    };
    Hw = function(a, b, c) {
        return a.IntersectionObserver ? new a.IntersectionObserver(c, {
            rootMargin: b
        }) : new _.Jl(c, {
            rootMargin: b
        })
    };
    Iw = function(a, b, c) {
        var d = _.W(a.slot);
        if (!d || !_.Ch(d)) return null;
        var e = new _.ll;
        b = Hw(du(a.v), b + "%", _.S(291, function(f, g) {
            f = _.r(f);
            for (var h = f.next(); !h.done; h = f.next())
                if (h = h.value, !(0 >= h.intersectionRatio)) {
                    g.unobserve(h.target);
                    e.resolve(c || void 0);
                    break
                }
        }));
        a.o = b;
        b.observe(d);
        return e.j
    };
    Jw = {
        width: "100%",
        height: "100%",
        left: "0",
        top: "0"
    };
    Kw = function(a) {
        if (!a.G) {
            var b = _.q.document,
                c = _.Cn(a.slot, b);
            if (3 == a.o && c) {
                a.o = 4;
                var d = _.W(a.slot, b);
                _.iu(d, {
                    backgroundColor: "white",
                    opacity: "1",
                    position: "fixed",
                    margin: "0",
                    padding: "0",
                    zIndex: 2147483647,
                    display: "block"
                });
                _.iu(d, Jw);
                a.v = _.bw(b, _.q);
                c.contentWindow.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "visible"
                }), "*");
                _.q == _.q.top && (_.q.location.hash = "goog_rewarded", window.setTimeout(function() {
                    var e = zw(a, 503, _.q, "hashchange", function(f) {
                        f && f.oldURL && !Ut(f.oldURL, "#goog_rewarded") || (e(), c.contentWindow.postMessage(JSON.stringify({
                            type: "rewarded",
                            message: "back_button"
                        }), "*"))
                    })
                }, 0))
            }
        }
    };
    Lw = function(a, b) {
        if (b && b.data && b.source) {
            var c = _.Cn(a.slot, _.q.document);
            if (c && c.contentWindow == b.source) try {
                var d = JSON.parse(b.data);
                if ("rewarded" == d.type) switch (d.message) {
                    case "prefetched":
                        2 == a.o && (a.o = 3, Dv(a.slot, function() {
                            return Kw(a)
                        }, d.payload || null));
                        break;
                    case "granted":
                        a.B || (Fv(a.slot, d.payload || null), a.B = !0);
                        break;
                    case "closed":
                    case "canceled":
                        5 != a.o && (_.aq(a), Hv(a.slot), Ev(a.slot));
                        break;
                    case "completed":
                        a.D || (Gv(a.slot), a.D = !0)
                }
            } catch (e) {}
        }
    };
    Mw = function(a, b, c) {
        var d = function(f) {
            f.Wa()
        };
        c = _.r(c);
        for (var e = c.next(); !e.done; e = c.next()) e = e.value, e instanceof _.jl ? e.then(d) : d(e);
        delete a.j[b]
    };
    Nw = function(a, b) {
        Mw(a, _.R(b), a.j[_.R(b)] || [])
    };
    Ow = function(a, b, c, d, e) {
        Nw(a, b);
        var f = _.R(b);
        a.j[f] = [];
        _.J(a.l, function(g) {
            g.sa(b, c) && (g.xb ? (g = _.dq.C().load(g.xb).then(function(h) {
                return new h(b, d, e)
            }), a.j[f].push(g)) : a.j[f].push(new g.xa(b, d, e)))
        })
    };
    Pw = function(a, b, c, d) {
        var e = (a.j[_.R(b)] || []).slice(),
            f = new _.ll,
            g = _.S(496, function(h, k) {
                h ? Yv(h) || h instanceof _.jl ? h.then(function(l) {
                    return void g(l, k)
                }) : (h = c(h, k), h = null == h ? k : h, Yv(h) || h instanceof _.jl ? h.then(function(l) {
                    return void g(e.shift(), l)
                }) : g(e.shift(), h)) : f.resolve(k)
            });
        g(e.shift(), d);
        return f.j
    };
    Qw = function(a, b, c, d, e, f) {
        Ow(a, b, e, c, d);
        return Pw(a, b, function(g, h) {
            return g.j(e, h)
        }, f)
    };
    Rw = function(a, b, c, d) {
        Pw(a, b, function(e) {
            e.m(c, d)
        }, c)
    };
    Sw = function(a, b, c) {
        _.M(b.j, 8) || a.P || _.pn(b) || (a = _.W(b, c)) && _.Qf(a, !0)
    };
    Tw = function(a) {
        (a = _.L(a, 27)) && _.J(a, function(b) {
            _.wh.C().l(b)
        })
    };
    Uw = function(a, b) {
        _.ya("gpt_sz", function(c) {
            _.A(c, "r", _.Di(a));
            _.A(c, "w", Number(_.L(b, 7)));
            _.A(c, "h", Number(_.L(b, 6)));
            _.L(b, 10) && _.A(c, "f", _.L(b, 10));
            _.L(b, 36) && _.A(c, "a", _.L(b, 36))
        }, {
            Ea: _.cg(28)
        })
    };
    Vw = function(a, b, c, d) {
        b.Ka = d.kb;
        var e = d.j.V;
        Iv(b, c, _.kq(e));
        Uw(b, c);
        sw(c, b);
        if (null != _.L(c, 23)) {
            var f = _.L(c, 23);
            _.J(f, function(g) {
                var h = a.R;
                if (!_.vb(h.l, g)) switch (g) {
                    case 1:
                    case 2:
                    case 3:
                        var k;
                        if (k = _.y(116) ? _.Il[g] : _.Gl[g]) {
                            var l = g + "_hostpage_library";
                            if (k = _.Qe(document, k)) k.id = l
                        }
                        h.l.push(g);
                        l = new Ku(g);
                        h.m.push(l);
                        h = _.xa();
                        h.hostpageLibraryTokens || (h.hostpageLibraryTokens = {});
                        h.hostpageLibraryTokens[l.j] = l.l
                }
                h = a.R;
                h.j[g] || (h.j[g] = []);
                h.j[g].push(b)
            })
        }
        _.L(c, 29) && (f = new _.ki, _.li(f, _.L(c, 29)), _.N(f, 3, 1), e = _.Nd(e, _.ki, 5) || new _.ki, e = yw([e, f]), b.Ga = e);
        _.Pd(c, Yt, 14).length && Zv(a.M, _.Pd(c, Yt, 14));
        e = !!_.M(c, 40);
        if (_.pn(b) || _.M(c, 11) || e) a.j.F[_.R(b)] = !0;
        _.M(c, 8) || (null != _.L(c, 49) || cu(c, _.sp(d, b)), _.mn(b, jw(d, b)))
    };
    Ww = function(a, b, c) {
        var d = !1,
            e = function() {
                !d && b.G && (c(), d = !0)
            },
            f = b.j;
        (f = f && _.Nd(f, _.Zd, 43) && a.contentWindow ? _.cg(5) : 0) && 2 != f || _.P(a, "load", e);
        f && a.contentWindow && _.P(a.contentWindow, "amp-ini-load", e)
    };
    Xw = function(a, b, c, d, e) {
        _.wl.call(this);
        this.slot = b;
        this.D = c;
        this.v = d;
        this.A = e;
        this.j = null;
        this.m = new _.re(a);
        this.B = !1
    };
    _.B(Xw, _.wl);
    Xw.prototype.loaded = function(a) {
        a && a.setAttribute("data-load-complete", !0);
        this.slot.loaded()
    };
    Xw.prototype.l = function() {
        _.wl.prototype.l.call(this);
        var a = this.m.j,
            b = _.W(this.slot, a);
        b && b.removeAttribute("data-google-query-id");
        b = this.slot;
        b = 1 == _.cg(15) ? !0 : 2 == _.cg(15) ? !1 : !!b.F;
        this.v && this.j && this.v.unloadAdBlock(this.j, b, _.y(101));
        b = !!this.v && b;
        var c = _.Dn(this.slot, a);
        ww(c, this.j, this.slot.F, b, this.B ? _.W(this.slot, a) : null);
        this.slot.F = null;
        a = this.slot;
        a.J && (a.P = null);
        Kv(this.slot, null);
        a = this.slot;
        a.ma = 0;
        a.D = 0;
        this.j = null
    };
    var Yw = function() {
        Xw.apply(this, arguments)
    };
    _.B(Yw, Xw);
    Yw.prototype.o = _.p(19);
    Yw.prototype.loaded = function(a) {
        Xw.prototype.loaded.call(this, a);
        tw(this.slot)
    };
    var Zw = function(a, b, c) {
            var d = _.An(a.slot),
                e = a.m.j,
                f = _.js;
            e = void 0 === e ? document : e;
            e = _.De(new _.re(e), "IFRAME");
            e.id = d;
            e.title = f;
            e.name = d;
            _.D(b) ? null != b[0] && null != b[1] && (e.width = String(b[0]), e.height = String(b[1])) : (e.width = "100%", e.height = "0");
            e.allowTransparency = "true";
            e.scrolling = "no";
            e.marginWidth = "0";
            e.marginHeight = "0";
            e.frameBorder = "0";
            e.style.border = "0";
            e.style.verticalAlign = "bottom"; - 1 == _.Ac.indexOf("iPhone") && (e.srcdoc = "");
            c.appendChild(e);
            "string" !== typeof b && (e.width = String(b[0]), e.height = String(b[1]));
            Kv(a.slot, e);
            return e
        },
        $w = function() {
            Xw.apply(this, arguments)
        };
    _.B($w, Xw);
    $w.prototype.o = _.p(18);
    var ax = function(a, b, c, d) {
            d = void 0 === d ? document : d;
            var e = b.j,
                f = !(!_.W(b, d) && !b.na());
            if (!b.Ra() && e && f) {
                f = _.R(b);
                try {
                    var g = a.o[f],
                        h = !_.M(e, 8) || a.B;
                    g && h && (_.xl(g), delete a.o[f]);
                    var k = a.D ? iw(a.I) : null,
                        l;
                    g = d;
                    var m = a.j;
                    if (null != (a.m.j.google_norender || null) || _.M(b.j, 8)) var t = null;
                    else {
                        var x = c.V;
                        if (_.Hn(b)) var v = !0;
                        else {
                            var H = b.j;
                            v = !(!_.Oi(H) || !b.ca && !_.M(x, 13)) || !(!H || !_.M(H, 12))
                        }
                        t = v ? new Yw(g, b, m, k, c) : new $w(g, b, m, k, c)
                    }
                    if (l = t) {
                        a.o[f] = l;
                        var C = _.Hn(b) ? _.Jd(_.Nd(e, _.$d, 41).getHtml()) : _.L(e, 4);
                        var I = l.m.j,
                            Q = _.W(l.slot, I);
                        if (!Q) {
                            var Ga = l.m.j;
                            if (0 === l.slot.na()) Q = null;
                            else {
                                var Qa = _.De(l.m, "INS");
                                Qa.id = l.slot.U.j;
                                _.iu(Qa, {
                                    display: "none"
                                });
                                Ga.documentElement.appendChild(Qa);
                                Q = Qa
                            }
                            l.B = !!Q
                        }
                        var Za = l.slot.j;
                        if (!Za || !Q || l.slot.Ra() || l.G) var yp = null;
                        else {
                            var Vy = _.Hm(l.slot);
                            Q.setAttribute("data-google-query-id", Vy);
                            _.sh(_.ti.C(), "5", l.slot.o);
                            _.qn(l.slot);
                            var zp = _.Bn(l.slot),
                                ue = _.Bb(Q.childNodes);
                            c = zp + "__to_be_removed__";
                            for (var Ap = _.r(ue), ej = Ap.next(); !ej.done; ej = Ap.next()) {
                                var Bp = ej.value;
                                1 == Bp.nodeType && (ue = Bp, ue.id != zp && ue.id != c && _.Be(ue))
                            }
                            var Wy = l.A.V,
                                mg = _.Dn(l.slot, I) || _.tp(I, Q, _.Bn(l.slot), !!_.M(Wy, 15)),
                                Cp = l.slot;
                            Cp.J && (Cp.P = mg);
                            mg.style.width = "";
                            mg.style.height = "";
                            if ("height" == _.L(Za, 10)) var Dp = "fluid";
                            else {
                                var Ep = _.L(Za, 7),
                                    Fp = _.L(Za, 6),
                                    Ad = _.L(Za, 36) || 0;
                                I = [Ep, Fp];
                                var Gc = l.m.j,
                                    za;
                                if (za = _.y(199)) {
                                    var ng = l.slot,
                                        og = _.W(ng);
                                    if (og && 3 == Ad) {
                                        var Xy = I[0],
                                            fj = I[1],
                                            Bd = _.Fn(ng);
                                        if (fj >= (parseInt(Bd.height, 10) || 0) || "none" == Bd.display || "hidden" == Bd.visibility) za = !1;
                                        else {
                                            var Gp = lw(Gc.defaultView || Gc.parentWindow || _.q);
                                            !Gp || og.getBoundingClientRect().bottom <= Gp.height ? za = !1 : (Bd = {
                                                height: fj + "px"
                                            }, kw(_.Dn(ng, Gc), og, Bd), _.iu(og, Bd), _.y(201) && rw(Gc, ng, Ad, Xy, fj, "gpt_slotred"), za = !0)
                                        }
                                    } else za = !1
                                }
                                var pg;
                                if (!(pg = za)) {
                                    var Hc = l.slot;
                                    var gj = _.W(Hc);
                                    if (!gj || 1 != Ad && 2 != Ad) var qg = !1;
                                    else {
                                        var hj = I[0],
                                            ve = I[1];
                                        var rg = Lv(Hc, 0);
                                        var Cd = Lv(Hc, 1);
                                        rg = rg < hj;
                                        ve = Cd < ve;
                                        if (rg || ve) {
                                            Cd = hj + "px";
                                            za = {
                                                "max-height": "none",
                                                "max-width": Cd,
                                                padding: "0px",
                                                width: Cd
                                            };
                                            ve && (za.height = "auto");
                                            kw(_.Dn(Hc, Gc), gj, za);
                                            var Hp = _.Fn(Hc);
                                            za = {};
                                            rg && hj > parseInt(Hp.width, 10) && (za.width = Cd, za["max-width"] = Cd);
                                            ve && (za.height = "auto", za["max-height"] = "none");
                                            _.Ve(za) ? qg = !1 : (za["padding-" + ("ltr" == Hp.direction ? "left" : "right")] = "0px", _.iu(gj, za), qg = !0)
                                        } else qg = !1
                                    }
                                    var Yy = mw(Hc, Ad);
                                    qg || Yy ? (rw(Gc, Hc, Ad, I[0], I[1], "gpt_slotexp"), pg = !0) : pg = !1
                                }!pg && _.y(212) && rw(Gc, l.slot, 0, Ep || -1, Fp || -1, "gpt_pgbrk");
                                Dp = I
                            }
                            l.j = l.o(Dp, C || "", Za, mg);
                            var Ip = _.L(Za, 49);
                            if (Ip) {
                                var Jp = l.j;
                                Jp && Jp.setAttribute("data-google-container-id", Ip)
                            }
                            var Zy = l.slot,
                                Kp = l.slot,
                                ij = new _.Tm(Kp.l(), !0, "publisher_ads"),
                                Lp = !!_.M(Za, 8);
                            ij.isEmpty = Lp;
                            var ib = Kp.ka;
                            if (Lp || !ib) var Mp = ij;
                            else {
                                var jb = _.Um(ij, [_.L(Za, 7), _.L(Za, 6)]);
                                jb.sourceAgnosticCreativeId = ib.sourceAgnosticCreativeId;
                                jb.sourceAgnosticLineItemId = ib.sourceAgnosticLineItemId;
                                jb.isBackfill = ib.isBackfill;
                                jb.creativeId = ib.creativeId;
                                jb.lineItemId = ib.lineItemId;
                                jb.creativeTemplateId = ib.creativeTemplateId;
                                jb.advertiserId = ib.advertiserId;
                                jb.campaignId = ib.campaignId;
                                jb.yieldGroupIds = ib.yieldGroupIds;
                                jb.companyIds = ib.companyIds;
                                Mp = jb
                            }
                            _.rn(Zy, Mp);
                            yp = l.j
                        }(l = yp) && _.mb.push({
                            Na: a,
                            Da: 11,
                            Ca: [l, b]
                        })
                    } else {
                        l = d;
                        var $y = _.Hm(b),
                            Np = _.W(b, l);
                        Np && Np.setAttribute("data-google-query-id", $y);
                        _.sh(_.ti.C(), "5", b.o);
                        _.qn(b);
                        _.nq(a, l, b, a.B, c.V);
                        var Op = new _.Tm(b.l(), !0, "publisher_ads");
                        Op.slotContentChanged = a.B;
                        _.rn(b, Op)
                    }
                } catch (az) {
                    _.bj(512, az)
                }
            }
        },
        bx = function(a) {
            a = Error.call(this, a);
            this.message = a.message;
            "stack" in a && (this.stack = a.stack)
        };
    _.B(bx, Error);
    var cx = function(a) {
            return "(" + [a.j, a.A.length, a.v, a.m.length, a.o].join() + ")"
        },
        dx = function(a) {
            _.ya("gpt_num_chunks", function(e) {
                _.A(e, "bts", a.v);
                _.A(e, "num", a.o);
                _.z(e)
            });
            if (1 != a.j || a.m) _.Us(a, new bx("state err " + cx(a)));
            else {
                for (var b = _.r(a.A), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = bu();
                    try {
                        a.D(c, d)
                    } catch (e) {}
                    try {
                        a.B(c, "")
                    } catch (e) {}
                }
                a.j = 3;
                a.G()
            }
        },
        ex = function(a, b, c, d, e) {
            var f = c.j;
            f && (_.Nd(f, _.$d, 41) || (Uw(c, f), sw(f, c) && (d = _.L(f, 4)), _.Md(f, 4, $t[0], d)), ax(a, c, b.j, e))
        };
    _.Ys.prototype.T = Z(24, function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? document : d;
        var f = b.j;
        f && (_.M(f, 8) || !_.W(b, d) && !b.na() ? ex(this, a, b, c, d) : (Sw(this, b, d), Qw(_.hq.C(), b, this.j, a.j, f, c).then(function(g) {
            ex(e, a, b, g, d)
        })))
    });
    _.Ys.prototype.X = Z(23, function(a, b, c) {
        var d = a.o;
        this.ia[d] || (this.ia[d] = !0, _.sh(_.ti.C(), "4", jw(a, b)));
        c ? (Bv(b), Bu(_.ti.C(), b.o, _.L(c, 34) || ""), Tw(c), _.yh(4), Vw(this, b, c, a)) : _.ya("gpt_spr", function(e) {
            _.A(e, "sn", _.R(b));
            _.z(e)
        })
    });
    _.Vs.prototype.l = Z(22, function(a, b) {
        if (3 == b.readyState || 4 == b.readyState)
            if (300 <= b.status) this.m || _.Us(this.j, Error("xhr_err-" + b.status)), this.m = !0;
            else {
                var c = b.responseText.substr(this.v);
                if (c) {
                    var d = this.j;
                    if (c)
                        if (1 != d.j && 2 != d.j) _.bj(321, Error("state err: " + cx(d)));
                        else {
                            d.o++;
                            d.m && (c = d.m + c);
                            var e = 0;
                            do {
                                var f = c.indexOf("\n", e);
                                var g = -1 != f;
                                if (!g) break;
                                var h = d;
                                e = c.substr(e, f - e);
                                if (1 == h.j) {
                                    try {
                                        var k = _.q.JSON.parse(e);
                                        var l = _.E(k) ? k : null
                                    } catch (H) {
                                        _.bj(321, H), l = null
                                    }
                                    var m = l && _.Xe(l, Tt);
                                    e = m && l[m];
                                    if ((e = _.D(e) ? new au(e.slice()) : null) && _.M(e, 40)) {
                                        var t = h;
                                        var x = e;
                                        if (_.M(x, 8))(m = _.L(x, 33)) && _.Qn.C().v.push(m), m = null;
                                        else if (x = (x = _.Nd(x, _.Vd, 39) || _.Nd(x, _.Xd, 48)) && x.A(), x = sv(x)) {
                                            if (m = _.ao(m, x)) {
                                                m.ra = !0;
                                                x = m;
                                                var v = _.bn.C().find("publisher_ads");
                                                v && x.addService(v)
                                            }
                                        } else m = null;
                                        t.l = m
                                    } else h.l = h.A.shift() || null, h.l || _.bj(321, Error("missing slot: " + cx(h)));
                                    if (h.l) try {
                                        h.D(h.l, e)
                                    } catch (H) {}
                                    h.j = 2
                                } else {
                                    try {
                                        h.l && h.B(h.l, nu(e))
                                    } catch (H) {}
                                    h.j = 1
                                }
                                d.v = f;
                                e = f + 1
                            } while (g && e < c.length);
                            d.m = c.substr(e)
                        }
                }
                this.v = b.responseText.length;
                a && 4 == b.readyState && dx(this.j)
            }
    });
    _.ms.prototype.ea = Z(21, function(a, b, c) {
        var d = this,
            e = a.j;
        e && !_.Cn(a, c) && (Sw(this, a, c), Qw(_.hq.C(), a, this.j, b, e, _.L(e, 4)).then(function(f) {
            _.Nd(e, _.$d, 41) || _.Md(e, 4, $t[0], f);
            ax(d, a, b, c)
        }))
    });
    _.ms.prototype.ba = Z(20, function(a) {
        var b = _.hq.C();
        a = _.r(a);
        for (var c = a.next(); !c.done; c = a.next()) Nw(b, c.value)
    });
    Yw.prototype.o = Z(19, function(a, b, c, d) {
        var e = this;
        _.M(this.A.V, 15) && (d.style.display = "inline-block");
        var f = {
            sandbox: !!_.M(c, 13),
            uniqueId: _.L(c, 49)
        };
        f = Cu([f, this.D.A, this.slot.Ha]) || {};
        c = _.Hn(this.slot) ? _.L(_.Nd(c, _.$d, 41), 2) : null;
        var g = uw(d, _.An(this.slot), _.js, b, a, function() {
            return e.loaded(g.j)
        }, f, !!_.yn(this.slot), Jv(this.slot), c, this.slot.Ka);
        a = g.j;
        this.slot.F = g;
        Kv(this.slot, a);
        Rw(_.hq.C(), this.slot, a, !1);
        return a
    });
    $w.prototype.o = Z(18, function(a, b, c, d) {
        var e = this,
            f = Zw(this, a, d);
        Ww(f, this.slot, function() {
            return e.loaded(f)
        });
        vw(f, b, function() {
            Rw(_.hq.C(), e.slot, f, !0)
        });
        return f
    });
    _.jq.prototype.$ = Z(17, function(a, b) {
        if (this.D && a) {
            var c = b.j;
            if (!c || !_.Oi(c)) {
                c = iw(this.I);
                var d = _.y(159) ? Mv(b) : _.Gm(b);
                c.registerAdBlock(d, 3, this.L(), a, 0, 0, function(e, f) {
                    var g = null;
                    0 <= f && (e && !b.L && Cv(b), e = b.T, b.T = Math.floor(f), b.L && 50 < f && !b.D ? b.D = _.gh() : !f && b.D && (f = _.gh() - b.D, b.ma += f, b.D = 0), e !== b.T && b.Ib(b.T));
                    _.y(64) ? (f = b.X, null != f && f.B && (g = Math.round(performance.now()), 0 < b.fb ? f.j && _.jm(f.j, _.om()) : (b.fb = g, _.sh(_.ti.C(), "10", b.o), f.j && (g = f.j, e = _.om(), _.jm(g, e), g.j = e)), g = f.j, null == g ? g = null : (f = {}, f.mvo = b.L ? -1 : 0 < (0 < g.j && 0 < g.l ? g.j - (g.l - 1E3) : 0) ? 0 < g.j && 0 < g.l ? g.j - (g.l - 1E3) : 0 : 0, 0 <= g.m && (f.brt = g.m), g = f))) : g = void 0;
                    return g
                })
            }
        }
    });
    _.X.prototype.m = Z(16, function() {});
    _.vp.prototype.m = Z(15, function(a, b) {
        _.y(74) && b || (this.o = yu(a, this.v))
    });
    _.wp.prototype.m = Z(14, function(a, b) {
        var c = this;
        zw(this, 504, _.q, "message", function(d) {
            if (d && d.data && d.source) {
                var e = _.Cn(c.slot, _.q.document);
                e && e.contentWindow == d.source && ("impression-viewable" == d.data ? Cv(c.slot) : "string" === typeof d.data && (d = /^visibility-changed-(\d+(\.\d+)?)$/.exec(d.data)) && (d = parseFloat(d[1]), 0 <= d && 1 >= d && (0 !== d && 1 !== d || d !== c.B) && (null !== c.B || 0 < d) && (c.B = d, c.slot.Ib(+(100 * d).toFixed(2)))))
            }
        });
        b && (this.D && (b = _.Dn(this.slot, _.q.document), Bw(b, !1), b && _.tu(b, "min-width", "100%"), _.tu(a, "min-width", "100%"), zw(this, 505, a, "load", function() {
            var d = a.contentDocument;
            if (d) {
                var e = d.body.offsetHeight;
                d = d.body.offsetWidth;
                a.setAttribute("height", e);
                a.setAttribute("width", d);
                Bw(_.Dn(c.slot, _.q.document), !0);
                Cw(c, e, d)
            } else _.ya("gpt_amp_fluid_no_iframedoc", function(f) {
                _.z(f)
            })
        })), _.y(this.v ? 136 : 137) && a.setAttribute("sandbox", _.gm.join(" ")))
    });
    _.Rp.prototype.m = Z(13, function(a) {
        var b = this,
            c = _.Nd(this.slot.j, _.Yd, 50);
        if (c) {
            var d = _.L(c, 1),
                e = Xt(c);
            c = _.L(c, 3);
            d && e && c && (this.o = hw({
                pb: du(new _.re),
                element: a,
                Wc: 0 == (0, _.kf)(),
                cc: c,
                Yc: d,
                rc: function() {
                    var f = _.Pp.C(),
                        g = b.slot;
                    f = _.r(f.j[_.xp.id] || []);
                    for (var h = f.next(); !h.done; h = f.next()) h = h.value, h(g)
                },
                options: {
                    threshold: e
                },
                uc: function(f) {
                    return _.cj(615, f, !0)
                }
            }))
        }
    });
    _.Sp.prototype.m = Z(12, function(a, b) {
        var c = this;
        b && zw(this, 502, a.contentDocument, "securitypolicyviolation", function(d) {
            return Ew(c, a, d)
        })
    });
    _.$p.prototype.m = Z(11, function(a) {
        var b = this;
        1 == this.o && (this.o = 2, _.iu(a, Jw), _.iu(a, {
            position: "absolute"
        }), zw(this, 506, _.q, "message", function(c) {
            return Lw(b, c)
        }))
    });
    _.X.prototype.j = Z(10, function() {});
    _.vp.prototype.j = Z(9, function(a) {
        if (a = _.Nd(a, _.Zd, 43)) this.v = _.L(a, 1) || ""
    });
    _.wp.prototype.j = Z(8, function(a, b) {
        if (b) {
            this.v = !!_.M(a, 9);
            this.o = _.Nd(a, _.Zd, 43);
            Dw(this, a, b) || _.N(a, 12, !0);
            this.D = "height" == _.L(a, 10);
            a = !_.Fc();
            var c = this.v && _.y(134);
            a && (b = b.replace(Aw, _.y(223) ? "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src https://tpc.googlesyndication.com/b4a/b4a-runner.html\">" : "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"));
            c && (b = b.replace(Aw, '$1<meta name="referrer" content="origin">'));
            return b
        }
    });
    _.Sp.prototype.j = Z(7, function(a) {
        this.o = !!_.Nd(a, _.Zd, 43)
    });
    _.Xp.prototype.j = Z(6, function(a, b) {
        a = Fw ? 0 : _.cg(16);
        var c = _.cg(17);
        a = Math.max(a, c);
        0 < a && (Fw = !0, _.Tp(a));
        return Gw(b)
    });
    _.Yp.prototype.j = Z(5, function(a, b) {
        var c = this;
        a = this.v.j;
        var d = _.Pl(a),
            e = !!_.Cn(this.slot, a),
            f = this.I.V;
        if (_.Ql(a) && d && (e || !_.np(this.F, du(this.v), 0, this.slot, !!_.M(f, 15)))) {
            var g = new _.ll;
            if (this.o = zw(this, 324, a, d, function() {
                    _.Ql(c.v.j) || (c.o && c.o(), g.resolve(b || void 0))
                })) return g.j
        }
    });
    _.Zp.prototype.j = Z(4, function(a, b) {
        var c = this;
        a = xw(this.slot.Ga);
        if (!(null == a || 0 > a))
            if (_.np(this.F, du(this.v), a / 100, this.slot, !!_.M(this.I.V, 15))) _.ya("gpt_er", function(d) {
                _.A(d, "qqid", _.Hm(c.slot))
            }, {
                Ea: _.cg(20)
            });
            else if (!_.y(145)) return Iw(this, a, b) || void 0
    });
    _.uh.prototype.fa = Z(3, function(a, b, c) {
        var d = this;
        return function(e) {
            for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
            return d.Ja(a, function() {
                return b.apply(c, f)
            }, void 0)
        }
    });
    _.uh.prototype.Ja = Z(2, function(a, b, c) {
        try {
            if (this.j && this.j.j) {
                var d = this.j.start(a.toString(), 3);
                var e = b();
                _.rh(this.j, d)
            } else e = b()
        } catch (f) {
            b = !0;
            try {
                _.oh(d), b = this.v(a, new _.Mg(f, {
                    message: _.vh(f)
                }), void 0, c)
            } catch (g) {
                this.jb(217, g)
            }
            if (!b) throw f;
        }
        return e
    });
    _.Vd.prototype.A = Z(1, function() {
        return _.Kd(this, 9, 1)
    });
    _.Xd.prototype.A = Z(0, function() {
        return _.Kd(this, 6, 8)
    });
    var fx = function(a, b, c) {
            return _.na(a, b, c, !1)
        },
        gx = [15],
        hx = function(a) {
            _.Hd(this, a, gx, null)
        };
    _.G(hx, _.zd);
    var ix = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(ix, _.zd);
    var jx = function(a) {
        _.Hd(this, a, null, null)
    };
    _.G(jx, _.zd);
    kx = function() {
        var a = new hx,
            b = _.y(76);
        return fx(a, 7, b)
    };
    lx = function() {
        var a = kx(),
            b = _.y(77);
        return fx(a, 8, b)
    };
    _.mx = function(a, b) {
        var c = _.dq.C();
        _.eq(c, a).resolve(b)
    };
    nx = function() {
        var a = window,
            b = new ix,
            c = new jx;
        _.na(b, 1, _.Ji, 0);
        var d = _.wh.C().j().join();
        _.na(b, 5, d, "");
        _.na(b, 2, 1, 0);
        _.Qd(c, 1, b);
        b = lx();
        d = _.y(78);
        b = fx(b, 9, d);
        d = _.y(79);
        b = fx(b, 11, d);
        b = fx(b, 10, !0);
        d = _.y(80);
        b = fx(b, 13, d);
        d = _.y(81);
        b = fx(b, 14, d);
        b = fx(b, 16, !0);
        _.Qd(c, 2, b);
        a.google_rum_config = _.oa(c);
        c = _.y(188) ? "_debug" : "";
        _.Qe(a.document, "https://securepubads.g.doubleclick.net/pagead/js/rum" + c + ".js")
    };
    ox = function() {
        ox = function() {};
        _.Ma.Symbol || (_.Ma.Symbol = _.Oa)
    };
    qx = function() {
        ox();
        var a = _.Ma.Symbol.iterator;
        a || (a = _.Ma.Symbol.iterator = _.Ma.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && (0, _.La)(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return px(_.Ca(this))
            }
        });
        qx = function() {}
    };
    px = function(a) {
        qx();
        a = {
            next: a
        };
        a[_.Ma.Symbol.iterator] = function() {
            return this
        };
        return a
    };
    rx = function() {
        this.o = !1;
        this.l = null;
        this.A = void 0;
        this.j = 1;
        this.D = this.v = 0;
        this.m = null
    };
    sx = function(a) {
        if (a.o) throw new TypeError("Generator is already running");
        a.o = !0
    };
    rx.prototype.B = function(a) {
        this.A = a
    };
    var tx = function(a, b) {
        a.m = {
            vc: b,
            Ac: !0
        };
        a.j = a.v || a.D
    };
    rx.prototype.return = function(a) {
        this.m = {
            return: a
        };
        this.j = this.D
    };
    ux = function(a) {
        this.j = new rx;
        this.l = a
    };
    xx = function(a, b) {
        sx(a.j);
        var c = a.j.l;
        if (c) return vx(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return wx(a)
    };
    vx = function(a, b, c, d) {
        try {
            var e = b.call(a.j.l, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.o = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.l = null, tx(a.j, g), wx(a)
        }
        a.j.l = null;
        d.call(a.j, f);
        return wx(a)
    };
    wx = function(a) {
        for (; a.j.j;) try {
            var b = a.l(a.j);
            if (b) return a.j.o = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.A = void 0, tx(a.j, c)
        }
        a.j.o = !1;
        if (a.j.m) {
            b = a.j.m;
            a.j.m = null;
            if (b.Ac) throw b.vc;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    yx = function(a) {
        this.next = function(b) {
            sx(a.j);
            a.j.l ? b = vx(a, a.j.l.next, b, a.j.B) : (a.j.B(b), b = wx(a));
            return b
        };
        this.throw = function(b) {
            sx(a.j);
            a.j.l ? b = vx(a, a.j.l["throw"], b, a.j.B) : (tx(a.j, b), b = wx(a));
            return b
        };
        this.return = function(b) {
            return xx(a, b)
        };
        qx();
        this[Symbol.iterator] = function() {
            return this
        }
    };
    Et = function(a, b) {
        b = new yx(new ux(b));
        _.Ka && (0, _.Ka)(b, a.prototype);
        return b
    };
    zx = function(a, b) {
        a = a.split(".");
        var c = _.q;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    Ax = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
    Bx = /%{(\w+)}/g;
    Ht = function(a) {
        var b = _.$b(new _.Zb(_.Xb, "//tpc.googlesyndication.com/sodar/%{basename}.js"));
        if (!Ax.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
        var c = b.replace(Bx, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(a, e)) throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
            d = a[e];
            return d instanceof _.Zb ? _.$b(d) : encodeURIComponent(String(d))
        });
        return _.ec(c)
    };
    Cx = function(a, b) {
        if ("length" in a.style) {
            a = a.style;
            for (var c = a.length, d = 0; d < c; d++) {
                var e = a[d];
                b.call(void 0, a[e], e, a)
            }
        } else a = gu(a.style.cssText), _.O(a, b, void 0)
    };
    _.Dx = function(a, b) {
        b = void 0 === b ? function() {
            return !0
        } : b;
        var c = {},
            d = /!\s*important/i;
        Cx(a, function(e, f) {
            !d.test(e) && b(f, e) && (e += " !important");
            c[f] = e
        });
        a.style.cssText = fu(c)
    };
    _.Ex = {
        capture: !0
    };
    _.Fx = function() {
        var a = _.bi(38);
        this.j = null;
        this.m = !1;
        this.v = Math.random();
        this.l = void 0 === a ? .01 : a;
        this.o = this.jb
    };
    _.n = _.Fx.prototype;
    _.n.Zb = function(a) {
        this.j = a
    };
    _.n.$b = function(a) {
        this.m = a
    };
    _.n.jb = function(a, b, c, d, e) {
        c = void 0 === c ? this.l : c;
        if ((this.m ? this.v : Math.random()) > c) return !1;
        b.error && b.meta && b.id || (b = new _.Mg(b, {
            context: a,
            id: void 0 === e ? "gpt_exception" : e
        }));
        if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
        _.q.google_js_errors = _.q.google_js_errors || [];
        _.q.google_js_errors.push(b);
        _.q.error_rep_loaded || (_.Qe(_.q.document, _.q.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js"), _.q.error_rep_loaded = !0);
        return !1
    };
    _.n.Ja = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.o(a, e, this.l, c, "gpt_exception")) throw e;
        }
        return d
    };
    _.n.fa = function(a, b, c) {
        var d = this;
        return function(e) {
            for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
            return d.Ja(a, function() {
                return b.apply(c, f)
            }, void 0)
        }
    };
    _.Gx = function(a) {
        return .05 > Math.abs(_.Xl(a) - 1)
    };
    /*
     Copyright (c) Microsoft Corporation. All rights reserved.
     Licensed under the Apache License, Version 2.0 (the "License"); you may not use
     this file except in compliance with the License. You may obtain a copy of the
     License at http://www.apache.org/licenses/LICENSE-2.0

     THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
     KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
     WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
     MERCHANTABLITY OR NON-INFRINGEMENT.

     See the Apache Version 2.0 License for specific language governing permissions
     and limitations under the License.
    */
    var Dt = function(a, b) {
        var c = void 0,
            d = void 0;
        return new(d || (d = Promise))(function(e, f) {
            function g(l) {
                try {
                    k(b.next(l))
                } catch (m) {
                    f(m)
                }
            }

            function h(l) {
                try {
                    k(b["throw"](l))
                } catch (m) {
                    f(m)
                }
            }

            function k(l) {
                l.done ? e(l.value) : (new d(function(m) {
                    m(l.value)
                })).then(g, h)
            }
            k((b = b.apply(a, c)).next())
        })
    };
    var Ft = function(a) {
        return new Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var Jt = function(a, b, c, d) {
        try {
            It(b, c, d)
        } catch (e) {}
    };
    var Hx = {},
        Ix = (Hx[3] = _.ms.prototype.ea, Hx[5] = _.Ys.prototype.T, Hx[6] = _.Ys.prototype.X, Hx[9] = _.ms.prototype.ja, Hx[11] = _.jq.prototype.$, Hx[14] = _.ms.prototype.ba, Hx[17] = _.Vs.prototype.l, Hx);
    (function(a) {
        a = void 0 === a ? Ix : a;
        zx("Goog_AdSense_getAdAdapterInstance", Xv);
        zx("Goog_AdSense_OsdAdapter", Wv);
        for (var b = _.S(339, function(c) {
                var d = c && a[c.Da];
                d && d.apply(c.Na, c.Ca);
                return 0
            }); _.mb.length;) b(_.mb.shift());
        _.mb.push = b;
        (_.y(84) || _.ti.C().j) && nx();
        _.y(215) && Kt();
        _.mx(1, null)
    })();
    var Lx;
    _.Jx = function(a, b, c) {
        this.m = a;
        this.j = b;
        this.K = null;
        this.X = void 0 === c ? null : c
    };
    _.Kx = function(a) {
        var b = a.m.ownerDocument;
        return ((b = b && b.defaultView) && b.frameElement ? b.frameElement : a.m.parentElement) || null
    };
    Lx = function(a, b) {
        if (!a.K) {
            a.K = [];
            for (var c = _.Kx(a); c;) {
                a.K.push(c);
                if (a.N(c)) break;
                c = c.parentNode && 1 === c.parentNode.nodeType ? c.parentNode : null
            }
        }
        c = a.K.slice();
        !b && a.N(c[c.length - 1]) && c.pop();
        return c
    };
    _.Mx = function(a) {
        if (!a.X) {
            var b = Lx(a, !0).pop();
            a.X = b && a.N(b) ? b : null
        }
        return a.X
    };
    _.Nx = function(a, b, c, d) {
        c = Lx(a, c);
        var e;
        if (d)
            for (d = c.length - 1; 0 <= d; --d)(e = c[d]) && b.call(a, e, d, c);
        else
            for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    };
})