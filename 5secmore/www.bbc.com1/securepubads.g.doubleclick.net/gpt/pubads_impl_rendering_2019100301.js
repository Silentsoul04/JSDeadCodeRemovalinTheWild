window.googletag && typeof googletag._gpt_js_load_1_ == 'function' && googletag._gpt_js_load_1_(function(_) {
    var Z = function(a, b) {
            return _.aa[a] = b
        },
        yt = function(a, b) {
            return (a = xt(a, b)) && 0 < a.width && 0 < a.height ? a : null
        },
        zt = function(a) {
            return "number" === typeof a || "string" === typeof a
        },
        At = function(a) {
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
        Bt = function(a) {
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
        Ft = function(a, b, c) {
            return Ct(this, function e() {
                var f, g;
                return Dt(e, function(h) {
                    switch (h.j) {
                        case 1:
                            f = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + (a + "&tv=" + b);
                            g = void 0;
                            h.v = 2;
                            var k = Et(f);
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
        Ht = function(a, b, c) {
            var d = void 0 === d ? "sodar2" : d;
            Ct(this, function f() {
                var g;
                return Dt(f, function(h) {
                    if (1 == h.j) {
                        var k = Ft(a, b, c);
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
                    var u = {};
                    m.push((u._ctx_ = g.context, u._bgv_ = g.pc, u._bgp_ = g.oc, u._li_ = g.Gc, u._jk_ = g.Fc, u));
                    if (m = l.GoogleDX5YKUSk) l.GoogleDX5YKUSk = void 0, m[1]();
                    k = Gt({
                        basename: k
                    });
                    Bt(k);
                    return h.return(g)
                })
            })
        },
        Jt = function() {
            var a = window,
                b = _.Si();
            var c = void 0 === c ? It : c;
            if (!a.goog_sdr_l) {
                Object.defineProperty(a, "goog_sdr_l", {
                    value: !0
                });
                var d = String(_.rf(a));
                "complete" === a.document.readyState ? c(a, "gpt", b, d) : _.Q(a, "load", function() {
                    c(a, "gpt", b, d)
                })
            }
        },
        Kt = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Lt = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Kt.length; f++) c = Kt[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        Mt = {
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
        Nt = function(a, b) {
            _.Pb(b, function(c, d) {
                c && "object" == typeof c && c.$a && (c = c.Ya());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Mt.hasOwnProperty(d) ? a.setAttribute(Mt[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        Ot = function(a) {
            if (a && "number" == typeof a.length) {
                if (_.E(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (_.$a(a)) return "function" == typeof a.item
            }
            return !1
        },
        Pt = function(a, b, c) {
            function d(g) {
                g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !_.Ya(f) || _.E(f) && 0 < f.nodeType ? d(f) : _.J(Ot(f) ? _.Bb(f) : f, d)
            }
        },
        Qt, Rt, St, Tt, Vt, Wt, $t, au, bu, cu, du, eu, fu, hu, iu, ju, ku, lu, nu, ou, xt, pu, su, vu, wu, xu, yu, zu, Au, Bu, Cu, Du, Eu, Fu, Hu, Iu, Ju, Ku, Lu, Mu, Nu, Pu, Qu, Ru, Su, Tu, aw, bw, cw, dw, ew, fw, gw, hw, iw, jw, kw, lw, mw, nw, ow, pw, qw, rw, sw, tw, uw, vw, ww, xw, yw, zw, Aw, Bw, Cw, Dw, Ew, Fw, Gw, Hw, Iw, Jw, Kw, Lw, Mw, Nw, Ow, Pw, Qw, Rw, Sw, Tw, Uw, Vw, ix, jx, lx, mx, ox, nx, px, qx, sx, vx, tx, ux, wx, Dt, xx, yx, zx, Gt, Ax;
    _.qe.prototype.l = Z(25, function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = String(e[0]),
            g = e[1];
        if (!_.me && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', _.Mc(g.name), '"');
            if (g.type) {
                f.push(' type="', _.Mc(g.type), '"');
                var h = {};
                Lt(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = _.ze(d, f);
        g && ("string" === typeof g ? f.className = g : _.D(g) ? f.className = g.join(" ") : Nt(f, g));
        2 < e.length && Pt(d, f, e);
        return f
    });
    Qt = function(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
    };
    Rt = function(a, b) {
        var c = 0;
        Qt(a, function(d, e) {
            b.call(void 0, d, e, a) && _.xb(a, e) && c++
        })
    };
    St = function() {
        return !0
    };
    Tt = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    _.Ut = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    Vt = function(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    Wt = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(Wt, _.Cd);
    var Xt = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 28, 38],
        Yt = [
            [4, 41],
            [39, 48]
        ],
        Zt = function(a) {
            _.Hd(this, a, Xt, Yt)
        };
    _.I(Zt, _.Cd);
    $t = function() {
        var a = new Zt;
        return _.N(a, 8, !0)
    };
    au = function(a, b) {
        _.N(a, 49, b)
    };
    bu = function(a) {
        a = a.j;
        return a.parentWindow || a.defaultView
    };
    cu = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    du = function(a) {
        var b = [];
        _.O(a, function(c, d) {
            null != c && "" !== c && b.push(d + ":" + c)
        });
        return b.length ? b.join(";") + ";" : ""
    };
    eu = function(a) {
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
    fu = function(a, b) {
        var c = {},
            d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    };
    _.gu = function(a, b) {
        a.style.setProperty ? _.O(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        }) : a.style.cssText = du((0, _.kf)(eu(a.style.cssText), fu(b, function(c) {
            return c + " !important"
        })))
    };
    hu = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            var d = _.Qe(a, window);
            if (d) {
                if (b(d)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    iu = function(a) {
        return hu(a, function(b) {
            return "fixed" == b.position || "sticky" == b.position
        })
    };
    ju = function(a) {
        return hu(a, function(b) {
            return "left" == b["float"] || "right" == b["float"] || "left" == b.cssFloat || "right" == b.cssFloat
        })
    };
    ku = function(a, b) {
        b = _.tb(a, b, void 0);
        if (0 <= b) {
            var c = a[b];
            _.xb(a, b);
            return c
        }
        return null
    };
    lu = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    _.mu = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.mu.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.mu.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.mu.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    nu = function(a) {
        return new _.mu(a.top, a.right, a.bottom, a.left)
    };
    ou = function(a) {
        return new _.mu(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    xt = function(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new _.Hf(c, e, d - c, a - e)
        }
        return null
    };
    pu = {};
    _.qu = function(a, b) {
        var c = pu[b];
        if (!c) {
            var d = _.Ut(b);
            c = d;
            void 0 === a.style[d] && (d = (_.$c ? "Webkit" : _.Zc ? "Moz" : _.Wc ? "ms" : _.Vc ? "O" : null) + Vt(d), void 0 !== a.style[d] && (c = d));
            pu[b] = c
        }
        return c
    };
    _.ru = function(a, b, c) {
        if ("string" === typeof b)(b = _.qu(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.qu(c, d);
                f && (c.style[f] = e)
            }
    };
    su = function(a) {
        if (_.Wc && !(8 <= Number(_.md))) return a.offsetParent;
        var b = _.re(a),
            c = _.Jf(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = _.Jf(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    _.tu = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.uu = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = _.$c && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = _.Kf(a), new _.pe(a.right - a.left, a.bottom - a.top)) : new _.pe(b, c)
    };
    vu = function(a) {
        _.q.ampInaboxInitialized || a && !/^\d{15,20}$/.test(a) || _.q.document.querySelector('script[src$="amp4ads-host-v0.js"]') || _.Pe(_.q.document, "https://cdn.ampproject.org/" + (a ? "rtv/" + a + "/" : "") + "amp4ads-host-v0.js")
    };
    wu = function(a, b) {
        var c = _.q.ampInaboxIframes = _.q.ampInaboxIframes || [],
            d = function() {};
        a && (c.push(a), d = function() {
            _.q.AMP && _.q.AMP.inaboxUnregisterIframe ? _.q.AMP.inaboxUnregisterIframe(a) : _.yb(c, a)
        });
        if (_.q.ampInaboxInitialized) return d;
        _.q.ampInaboxPendingMessages = _.q.ampInaboxPendingMessages || [];
        b && /^\d{15,20}$/.test(b) && vu(b);
        if (!c.google_amp_listener_added) {
            c.google_amp_listener_added = !0;
            var e = function(f) {
                if (_.q.ampInaboxInitialized) return _.sf(_.q, "message", e), d;
                var g, h = _.x(198) && "amp-ini-load" === f.data;
                _.q.ampInaboxPendingMessages && !h && (g = /^amp-(\d{15,20})?/.exec(f.data)) && (_.q.ampInaboxPendingMessages.push(f), vu(g[1]))
            };
            _.Q(_.q, "message", e)
        }
        return d
    };
    xu = function() {
        var a = _.yg();
        "google_onload_fired" in a || (a.google_onload_fired = !1, _.Q(a, "load", function() {
            a.google_onload_fired = !0
        }))
    };
    yu = function(a, b, c) {
        var d = window;
        return function() {
            var e = _.gh(),
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
                    duration: (_.gh() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    };
    zu = function(a, b, c) {
        a.j && (_.q.google_timing_params = _.q.google_timing_params || {}, _.q.google_timing_params["qqid." + b] = c)
    };
    Au = function(a) {
        var b = null;
        _.J(a, function(c) {
            _.O(c, function(d, e) {
                b = b || {};
                b[e] = d
            })
        });
        return b
    };
    Bu = function(a) {
        var b = void 0 === b ? Infinity : b;
        var c = _.t(_.Yi, function(d) {
            return _.Gm(d)
        });
        Rt(c, function(d) {
            return !d
        });
        _.sa(c);
        c.length = Math.min(b, c.length);
        _.A(a, "qqids", c.join(","))
    };
    Cu = function() {};
    Du = {
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
    Eu = function(a, b) {
        b.push('"', a.replace(_.xl, function(c) {
            var d = Du[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Du[c] = d);
            return d
        }), '"')
    };
    Fu = function(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (_.D(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), Fu(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Eu(d, c), c.push(":"), Fu(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Eu(b, c);
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
    _.Gu = function(a) {
        var b = [];
        Fu(new Cu, a, b);
        return b.join("")
    };
    Hu = 0;
    Iu = function(a) {
        this.j = a;
        this.l = _.Pc()
    };
    Ju = function(a) {
        var b = {};
        _.J(a, function(c) {
            b[c.j] = c.l
        });
        return b
    };
    Ku = function(a) {
        var b = {};
        b.c = a.v;
        b.i = a.o;
        a.F && (b.e = a.F);
        a.m.postMessage(_.Gu(b), a.A)
    };
    Lu = function(a, b, c, d, e, f) {
        _.vl.call(this);
        this.v = a;
        this.status = 1;
        this.m = b;
        this.A = c;
        this.K = d;
        this.ab = !!e;
        this.o = Math.random();
        this.B = {};
        this.j = null;
        this.D = (0, _.F)(this.J, this);
        this.F = f
    };
    _.B(Lu, _.vl);
    Lu.prototype.J = function(a) {
        if (a.origin === this.A && (this.ab || a.source == this.m)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.E(b) && (a = b.i, b.c === this.v && a != this.o)) {
                if (2 !== this.status) try {
                    this.status = 2, Ku(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.E(b)) && this.B.hasOwnProperty(a)) this.B[a](b)
            }
        }
    };
    Lu.prototype.I = function() {
        if (1 === this.status) {
            try {
                this.m.postMessage && Ku(this)
            } catch (a) {}
            window.setTimeout((0, _.F)(this.I, this), 50)
        }
    };
    Lu.prototype.connect = function(a) {
        a && (this.j = a);
        _.Q(window, "message", this.D);
        this.K && this.I()
    };
    Lu.prototype.l = function() {
        this.status = 3;
        _.sf(window, "message", this.D);
        _.vl.prototype.l.call(this)
    };
    Mu = function(a, b, c) {
        a.B[b] = c
    };
    Nu = function(a, b, c) {
        var d = {};
        d.c = a.v;
        d.i = a.o;
        d.s = b;
        d.p = c;
        try {
            a.m.postMessage(_.Gu(d), a.A)
        } catch (e) {}
    };
    _.Ou = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    Pu = function(a, b) {
        if (!a) return a;
        var c = a.toLowerCase();
        return -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") ? a : "<html><head>" + (void 0 === b ? "" : b) + "</head><body>" + a + "</body></html>"
    };
    Qu = function(a, b, c, d, e, f) {
        this.m = nu(a);
        this.l = nu(b);
        this.o = c;
        this.j = nu(d);
        this.v = e;
        this.A = f
    };
    Ru = function(a) {
        return _.Gu({
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
    Su = function(a, b, c) {
        var d = window,
            e = d.screenX || d.screenLeft || 0,
            f = d.screenY || d.screenTop || 0;
        d = new _.mu(f, e + (d.outerWidth || document.documentElement.clientWidth || 0), f + (d.outerHeight || document.documentElement.clientHeight || 0), e);
        var g = _.Lf(a);
        e = _.Nf(_.uu, a);
        var h = new _.Hf(g.x, g.y, e.width, e.height);
        e = ou(h);
        f = String(_.Jf(a, "zIndex"));
        if (b) {
            g = new _.Hf(0, 0, Infinity, Infinity);
            c = new _.Hf(0, 0, Infinity, Infinity);
            b = _.se(a);
            var k = b.j.body,
                l = b.j.documentElement,
                m = !0;
            a = su(a);
            for (var u = 0; a; a = su(a), u++) {
                var v = _.If(a, "overflow") || (a.currentStyle ? a.currentStyle.overflow : null) || a.style && a.style.overflow;
                if (_.Wc && 0 == a.clientWidth || _.$c && 0 == a.clientHeight && a == k || a == k || a == l) m = !1;
                else {
                    var y = _.Lf(a);
                    y.x += a.clientLeft;
                    y.y += a.clientTop;
                    y = new _.Hf(y.x, y.y, a.clientWidth, a.clientHeight);
                    "visible" != v && c && (c = xt(c, y));
                    "hidden" == v ? m && g && 100 > u && (g = xt(g, y)) : m = !1
                }
            }
            g && (k = window, a = k.document, k = _.zh(k), a = new _.pe(Math.max(k.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)), Math.max(k.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight))), g = yt(g, new _.Hf(0, 0, a.width, a.height)));
            c && (a = _.xe(b.j), b = _.we(bu(b) || window), c = yt(new _.Hf(c.left, c.top, c.width, c.height), new _.Hf(a.scrollLeft, a.scrollTop, b.width, b.height)));
            a = g;
            b = c
        } else {
            b = new _.mu(0, Infinity, Infinity, 0);
            k = _.se(a);
            m = k.j.body;
            u = k.j.documentElement;
            for (l = _.xe(k.j); a = su(a);) _.Wc && 0 == a.clientWidth || _.$c && 0 == a.clientHeight && a == m || a == m || a == u || "visible" == _.Jf(a, "overflow") || (v = _.Lf(a), y = new _.oe(a.clientLeft, a.clientTop), v.x += y.x, v.y += y.y, b.top = Math.max(b.top, v.y), b.right = Math.min(b.right, v.x + a.clientWidth), b.bottom = Math.min(b.bottom, v.y + a.clientHeight), b.left = Math.max(b.left, v.x));
            a = l.scrollLeft;
            l = l.scrollTop;
            b.left = Math.max(b.left, a);
            b.top = Math.max(b.top, l);
            k = _.we(bu(k) || window);
            b.right = Math.min(b.right, a + k.width);
            b.bottom = Math.min(b.bottom, l + k.height);
            b = (a = 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null) ? new _.Hf(a.left, a.top, a.right - a.left, a.bottom - a.top) : null;
            c ? (a = c.boundingClientRect, a = new _.Hf(g.x - a.left, g.y - a.top, c.rootBounds.width, c.rootBounds.height)) : a = b
        }
        b = b ? xt(h, b) : null;
        g = c = 0;
        if (k = b) k = new _.pe(b.width, b.height), k = k.width * k.height;
        k && (c = b.width / h.width, g = b.height / h.height);
        b = new _.mu(0, 0, 0, 0);
        if (k = a)(h = xt(h, a)) ? (l = ou(a), m = ou(h), k = m.right != l.left && l.right != m.left, l = m.bottom != l.top && l.bottom != m.top, k = (0 != h.width || k) && (0 != h.height || l)) : k = !1;
        k && (b = new _.mu(Math.max(e.top - a.top, 0), Math.max(a.left + a.width - e.right, 0), Math.max(a.top + a.height - e.bottom, 0), Math.max(e.left - a.left, 0)));
        return new Qu(d, e, f, b, c, g)
    };
    Tu = function(a) {
        this.v = a;
        this.o = null;
        this.I = this.status = 0;
        this.l = null;
        this.da = "sfchannel" + a
    };
    Tu.prototype.Ra = function() {
        return 100 == this.status
    };
    var Uu = function(a) {
            this.j = a
        },
        Vu = function(a, b) {
            this.hb = a;
            this.ib = b;
            this.l = this.j = !1
        },
        Wu = function(a, b, c, d, e, f, g, h, k) {
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
        Xu = function(a, b) {
            this.l = a;
            this.o = b
        };
    Xu.prototype.j = function(a) {
        this.o && (a.sentinel = this.o);
        return _.Gu(a)
    };
    var Yu = function(a, b, c) {
        Xu.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.I(Yu, Xu);
    Yu.prototype.j = function() {
        return Yu.Aa.j.call(this, {
            uid: this.l,
            version: this.version
        })
    };
    var Zu = function(a, b, c, d) {
        Xu.call(this, a, void 0 === d ? "" : d);
        this.v = b;
        this.m = c
    };
    _.I(Zu, Xu);
    Zu.prototype.j = function() {
        return Zu.Aa.j.call(this, {
            uid: this.l,
            initialWidth: this.v,
            initialHeight: this.m
        })
    };
    var $u = function(a, b, c) {
        Xu.call(this, a, void 0 === c ? "" : c);
        this.m = b
    };
    _.I($u, Xu);
    $u.prototype.j = function() {
        return $u.Aa.j.call(this, {
            uid: this.l,
            description: this.m
        })
    };
    var av = function(a, b, c, d) {
        Xu.call(this, a, void 0 === d ? "" : d);
        this.m = b;
        this.push = c
    };
    _.I(av, Xu);
    av.prototype.j = function() {
        return av.Aa.j.call(this, {
            uid: this.l,
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        })
    };
    var bv = function(a, b) {
        Xu.call(this, a, void 0 === b ? "" : b)
    };
    _.I(bv, Xu);
    bv.prototype.j = function() {
        return bv.Aa.j.call(this, {
            uid: this.l
        })
    };
    var cv = function(a, b, c) {
        Xu.call(this, a, void 0 === c ? "" : c);
        this.v = b
    };
    _.I(cv, Xu);
    cv.prototype.j = function() {
        var a = {
            uid: this.l,
            newGeometry: Ru(this.v)
        };
        return cv.Aa.j.call(this, a)
    };
    var dv = function(a, b, c, d, e, f) {
        cv.call(this, a, c, void 0 === f ? "" : f);
        this.A = b;
        this.m = d;
        this.push = e
    };
    _.I(dv, cv);
    dv.prototype.j = function() {
        var a = {
            uid: this.l,
            success: this.A,
            newGeometry: Ru(this.v),
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        };
        this.o && (a.sentinel = this.o);
        return _.Gu(a)
    };
    var ev = function(a, b, c, d) {
        Xu.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.I(ev, Xu);
    ev.prototype.j = function() {
        return ev.Aa.j.call(this, {
            uid: this.l,
            width: this.width,
            height: this.height
        })
    };
    var fv = function() {
            this.j = []
        },
        gv = function(a, b, c, d) {
            this.m = a;
            this.j = (this.l = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.o = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.v = this.l ? a.style.getPropertyPriority(this.j) : void 0;
            this.l ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        },
        hv = function(a, b, c, d, e) {
            a.j.push(new gv(b, c, d, e))
        },
        iv = function(a, b, c, d) {
            hv(a, b, c, d + "px", void 0)
        },
        jv = 1,
        kv = function(a, b, c) {
            a.F ? (b.style.width = _.tu("100%", !0), b.style.height = _.tu("auto", !0)) : (b.style.width = _.tu(c.width, !0), b.style.height = _.tu(c.height, !0))
        },
        lv = function(a, b) {
            var c = _.se(a.A),
                d = b.content;
            d = a.M + ";" + d.length + ";" + d;
            var e = new Wu(a.v, a.$, a.T, a.O, new Uu({
                shared: {
                    sf_ver: a.M,
                    ck_on: navigator.cookieEnabled ? 1 : 0,
                    flash_ver: _.Cl ? _.Dl : "0"
                }
            }), a.F, a.ba, a.R, a.ca);
            var f = {};
            f.uid = e.v;
            f.hostPeerName = e.l;
            f.initialGeometry = Ru(e.m);
            var g = e.permissions;
            g = _.Gu({
                expandByOverlay: g.hb,
                expandByPush: g.ib,
                readCookie: g.j,
                writeCookie: g.l
            });
            f = (f.permissions = g, f.metadata = _.Gu(e.o.j), f.reportCreativeGeometry = e.A, f.isDifferentSourceWindow = e.ab, f.goog_safeframe_hlt = Ju(e.hostpageLibraryTokens), f.encryptionMode = e.Pa, f);
            e.j && (f.sentinel = e.j);
            e = _.Gu(f);
            e = d + e;
            d = !1 === b.ec;
            if (a.P && b.size instanceof _.pe) {
                f = At(b.Pa) ? "https://secureframe.doubleclick.net" : bu(c).location.protocol + "//tpc.googlesyndication.com";
                g = b.Sb;
                var h = b.size,
                    k = bu(_.se(a.A));
                Hu || _.Pe(k.document, (a.ea ? "http:" : "https:") + "//pagead2.googlesyndication.com/pagead/expansion_embed.js");
                Hu++;
                k.google_eas_queue = k.google_eas_queue || [];
                k.google_eas_queue.push({
                    a: g,
                    b: f,
                    c: h.width,
                    d: h.height,
                    e: "sf-gdn-exp-" + Hu,
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
            b = bu(c);
            d = At(a.R) ? "https://secureframe.doubleclick.net/container.html?ecs=" + l : _.$l(b, a.M, a.X, d);
            e = [];
            a.P && (b = _.bf(b.location.href), e.push([0 < b.length ? "google_debug" + (b ? "=" + b : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.v, "&p=", encodeURIComponent(_.q.document.location.protocol), "//", encodeURIComponent(_.q.document.location.host)].join("")));
            e.length && (d += "#" + e.join("&"));
            b = (k.src = d, k.scrolling = "no", k.marginWidth = "0", k.marginHeight = "0", k.width = String(f), k.height = String(h), k["data-is-safeframe"] = "true", k);
            null !== a.V && (b.sandbox = a.V);
            d = {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;" + (g || ""),
                allowTransparency: "true",
                src: _.Wc && !_.ld(9) ? "javascript:\"<html><body style='background:transparent'></body></html>\"" : "about:blank"
            };
            b && Lt(d, b);
            c = c.l("IFRAME", d);
            a.A.appendChild(c);
            a.j = c
        },
        mv = function(a) {
            a.o = Su(a.j, a.J, a.N);
            a.N = null;
            Nu(a.l, "geometry_update", (new cv(a.v, a.o)).j())
        },
        nv = function(a) {
            if (1 == a.status || 2 == a.status) switch (a.B) {
                case 0:
                    mv(a);
                    a.L = window.setTimeout((0, _.F)(a.Nb, a), 1E3);
                    a.B = 1;
                    break;
                case 1:
                    a.B = 2;
                    break;
                case 2:
                    a.B = 2
            }
        },
        ov = function(a) {
            var b = null;
            a.Rc ? b = a.Rc : a.sandbox && (b = _.fm);
            return null == b ? null : b.join(" ")
        },
        pv = function(a) {
            Tu.call(this, null != a.uniqueId ? a.uniqueId : jv++);
            var b = this;
            this.D = a.Hc;
            this.F = 1 == a.size;
            this.O = new Vu(a.permissions.hb && !this.F, a.permissions.ib && !this.F);
            this.A = a.Bb;
            this.ca = a.hostpageLibraryTokens || [];
            var c = window.location;
            this.$ = "file:" == c.protocol ? "*" : c.protocol + "//" + c.host;
            this.ba = !!a.ab;
            c = !1 === a.ec ? "https:" : window.location.protocol;
            this.Z = At(a.Pa) ? "https://secureframe.doubleclick.net" : c + "//tpc.googlesyndication.com";
            this.P = !!a.tc;
            this.ea = !!a.cd;
            this.V = ov(a);
            this.m = new fv;
            kv(this, a.Bb, a.size);
            this.J = !!a.wc;
            this.o = this.T = Su(a.Bb, this.J);
            this.M = a.Qc || "1-0-35";
            this.X = a.qc || "";
            this.R = void 0 === a.Pa ? null : a.Pa;
            lv(this, a);
            this.N = null;
            this.K = yu(412, function() {
                return nv(b)
            }, a.oa);
            this.L = -1;
            this.B = 0;
            this.G = null;
            !a.he || "function" !== typeof IntersectionObserver || _.bd || _.ad || (this.G = new IntersectionObserver(yu(414, function(e) {
                b.N = e[e.length - 1];
                nv(b)
            }, a.oa)));
            this.l = new Lu(this.da, this.j.contentWindow, this.Z, !1);
            Mu(this.l, "init_done", (0, _.F)(this.vb, this));
            Mu(this.l, "register_done", (0, _.F)(this.Cb, this));
            Mu(this.l, "report_error", (0, _.F)(this.Db, this));
            Mu(this.l, "expand_request", (0, _.F)(this.tb, this));
            Mu(this.l, "collapse_request", (0, _.F)(this.qb, this));
            Mu(this.l, "creative_geometry_update", (0, _.F)(this.rb, this));
            this.l.connect((0, _.F)(this.Ab, this));
            var d = (0, _.F)(function() {
                this.j && (this.j.name = "", a.Vb && a.Vb(), _.sf(this.j, "load", d))
            }, this);
            _.Q(this.j, "load", yu(415, d, a.oa));
            this.vb = yu(413, this.vb, a.oa);
            this.Cb = yu(417, this.Cb, a.oa);
            this.Db = yu(419, this.Db, a.oa);
            this.tb = yu(411, this.tb, a.oa);
            this.qb = yu(409, this.qb, a.oa);
            this.rb = yu(410, this.rb, a.oa);
            this.Ab = yu(416, this.Ab, a.oa)
        };
    _.B(pv, Tu);
    _.n = pv.prototype;
    _.n.Ab = function() {
        this.G && this.j ? this.G.observe(this.j) : (_.Q(window, "resize", this.K), _.Q(window, "scroll", this.K))
    };
    _.n.vb = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.E(b) || !zt(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new Yu(b.uid, b.version, b.sentinel);
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
            if (!_.E(b) || !zt(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.v != (new Zu(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).l) throw Error("Wrong source container");
            this.status = 2
        } catch (c) {
            this.D.error("Invalid REGISTER_DONE message. Reason: " + c.message)
        }
    };
    _.n.Db = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.E(b) || !zt(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new $u(b.uid, b.description, b.sentinel);
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
            if (!_.E(b) || !zt(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new av(b.uid, new _.mu(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.v != c.l) throw Error("Wrong source container");
            if (!(0 <= c.m.top && 0 <= c.m.left && 0 <= c.m.bottom && 0 <= c.m.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.O.ib || !c.push && this.O.hb) {
                var e = c.m,
                    f = c.push,
                    g = this.o = Su(this.j, this.J);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) hv(this.m, h, "overflowX", "visible", "important"), hv(this.m, h, "overflowY", "visible", "important");
                    var k = this.o.l,
                        l = this.o.l,
                        m = ou(new _.Hf(0, 0, k.right - k.left, l.bottom - l.top));
                    _.E(e) ? (m.top -= e.top, m.right += e.right, m.bottom += e.bottom, m.left -= e.left) : (m.top -= e, m.right += Number(void 0), m.bottom += Number(void 0), m.left -= Number(void 0));
                    hv(this.m, this.A, "position", "relative");
                    hv(this.m, this.j, "position", "absolute");
                    f ? (iv(this.m, this.A, "width", m.right - m.left), iv(this.m, this.A, "height", m.bottom - m.top)) : hv(this.m, this.j, "zIndex", "10000");
                    iv(this.m, this.j, "width", m.right - m.left);
                    iv(this.m, this.j, "height", m.bottom - m.top);
                    iv(this.m, this.j, "left", m.left);
                    iv(this.m, this.j, "top", m.top);
                    this.I = 2;
                    this.o = Su(this.j, this.J);
                    d = !0
                } else d = !1
            }
            a = d;
            Nu(this.l, "expand_response", (new dv(this.v, a, this.o, c.m, c.push)).j());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (u) {
            this.D.error("Invalid EXPAND_REQUEST message. Reason: " + u.message)
        }
    };
    _.n.qb = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.I) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.E(b) || !zt(b.uid)) throw Error("Cannot parse JSON message");
            if (this.v != (new bv(b.uid, b.sentinel)).l) throw Error("Wrong source container");
            _.am(this.m);
            this.I = 0;
            this.j && (this.o = Su(this.j, this.J));
            Nu(this.l, "collapse_response", (new cv(this.v, this.o)).j())
        } catch (c) {
            this.D.error("Invalid COLLAPSE_REQUEST message. Reason: " + c.message)
        }
    };
    _.n.rb = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.E(b) || !zt(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new ev(b.uid, b.width, b.height, b.sentinel);
            if (this.v != c.l) throw Error("Wrong source container");
            var d = String(c.height);
            this.F ? d != this.j.height && (this.j.height = d, nv(this)) : this.D.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
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
                mv(this), this.L = window.setTimeout((0, _.F)(this.Nb, this), 1E3), this.B = 1
        }
    };
    var qv = function(a) {
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
        rv = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        sv = function() {
            _.Rm.apply(this, arguments)
        };
    _.B(sv, _.Rm);
    var tv = function(a, b, c, d) {
        _.Rm.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.B(tv, _.Rm);
    var uv = function(a, b, c) {
        _.Rm.call(this, a, b);
        this.payload = c
    };
    _.B(uv, _.Rm);
    var vv = function() {
        _.Rm.apply(this, arguments)
    };
    _.B(vv, _.Rm);
    var wv = function() {
        _.Rm.apply(this, arguments)
    };
    _.B(wv, _.Rm);
    var xv = function() {
        _.Rm.apply(this, arguments)
    };
    _.B(xv, _.Rm);
    var yv = function() {
        _.Rm.apply(this, arguments)
    };
    _.B(yv, _.Rm);
    var zv = function(a) {
            a.m.info((0, _.Ij)(a.getAdUnitPath()), null, a, a.mb)
        },
        Av = function(a) {
            if (!a.K) {
                var b = new sv(a.l(), "publisher_ads");
                _.kn(a, "impressionViewable", b);
                a.K = !0
            }
        },
        Bv = function(a, b, c) {
            _.on(a) && (b = new tv(a.l(), "publisher_ads", b, c), _.kn(a, "rewardedSlotReady", b))
        },
        Cv = function(a) {
            if (_.on(a)) {
                var b = new vv(a.l(), "publisher_ads");
                _.kn(a, "rewardedSlotCanceled", b)
            }
        },
        Dv = function(a, b) {
            _.on(a) && (b = new uv(a.l(), "publisher_ads", b), _.kn(a, "rewardedSlotGranted", b))
        },
        Ev = function(a) {
            if (_.on(a)) {
                var b = new xv(a.l(), "publisher_ads");
                _.kn(a, "rewardedSlotCompleted", b)
            }
        },
        Fv = function(a) {
            if (_.on(a)) {
                var b = new wv(a.l(), "publisher_ads");
                _.kn(a, "rewardedSlotClosed", b)
            }
        },
        Gv = function(a, b, c) {
            a.j = b;
            b = _.L(a.j, 33) || "";
            a.ha = b;
            1 == _.Oi(c) && (0 == a.R && _.M(a.j, 44) ? a.R = 1 : a.R = 2);
            if (!a.j || _.M(a.j, 8)) c = null;
            else {
                c = new rv;
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
                b = !b.length || _.Ra(b[0]) ? b : _.t(b, _.Jd);
                b.length && (c.encryptedTroubleshootingInfo = b[0])
            }
            a.ka = c;
            c = new yv(a.l(), "publisher_ads");
            _.kn(a, "slotResponseReceived", c)
        },
        Hv = function(a) {
            return a.j ? !!_.M(a.j, 3) : !0
        },
        Iv = function(a, b) {
            a.J && (a.ua = b)
        },
        Jv = function(a, b) {
            var c = 0;
            a.N || (a.N = _.nn(a));
            for (var d = 0; d < a.N.length; d++) {
                var e = a.N[d];
                _.D(e) && (e = e[b], c < e && (c = e))
            }
            return c
        },
        Kv = function(a) {
            return "?eid=" + _.vh.C().j().join(",") + "&adk=" + a.Va
        },
        Lv = function() {};
    _.n = Lv.prototype;
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
    var Mv = function(a, b, c) {
            a && (c ? _.Q(a, "load", b) : _.sf(a, "load", b))
        },
        Nv = function() {
            var a = (_.yg() || _.q).google_osd_amcb;
            return _.$a(a) ? a : null
        },
        Ov = function(a) {
            return "https://www.googletagservices.com/activeview/js/current/osd.js?cb=" + encodeURIComponent(void 0 === a ? "/r20100101" : a)
        },
        Pv = "",
        Qv = function(a) {
            var b = a.m ? _.yg() : _.q;
            a = Pv;
            b = b || _.q;
            b.google_osd_loaded ? a = !1 : (_.Pe(b.document, a), a = b.google_osd_loaded = !0);
            a && xu()
        },
        Rv = 0,
        Sv = 0,
        Tv = function(a, b, c, d, e, f) {
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
        Uv = function(a, b) {
            this.l = b && b.l ? b.l : 0;
            this.o = b ? b.o : "";
            this.j = b && b.j ? b.j : [];
            this.m = !0;
            if (b)
                for (a = 0; a < this.j.length; ++a) this.j[a].o = !0
        };
    _.n = Uv.prototype;
    _.n.getNewBlocks = function(a, b) {
        for (var c = this.j.length, d = 0; d < c; d++) {
            var e = this.j[d];
            !e.m && e.j && (e.m = !0, a(e.j, e.A, e.F, e.l, void 0, e.o, e.B, e.G, e.D))
        }
        b && ((_.yg() || _.q).google_osd_amcb = a)
    };
    _.n.setupOse = function(a) {
        if (this.getOseId()) return this.getOseId();
        var b = _.mo(Rv, Sv);
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
        c = Nv();
        e = _.fh() || -1;
        f = _.q.pageYOffset;
        0 <= f || (f = -1);
        c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new Tv(a, b, d, g, e, f), this.j.push(g), Mv(d, g.v, !0), Pv || (_.tf(_.q, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=" + b + ("&req=" + a)), Pv = Ov("/r20100101")), Qv(this))
    };
    _.n.unloadAdBlock = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        var d = this.m ? _.yg() : window;
        _.Pa(d.Goog_Osd_UnloadAdBlock) && d.Goog_Osd_UnloadAdBlock(a, b);
        c && (b = ku(this.j, function(e) {
            return e.j == a
        })) && Mv(a, b.v, !1)
    };
    _.n.setLoadOsdJsOnPubWindow = function(a) {
        this.m = a
    };
    var Vv = function() {
            var a = _.yg(),
                b = a.__google_ad_urls;
            if (!b) return a.__google_ad_urls = new Uv(a);
            try {
                if (0 <= b.getOseId()) return b
            } catch (c) {}
            try {
                return a.__google_ad_urls = new Uv(a, b)
            } catch (c) {
                return a.__google_ad_urls = new Uv(a)
            }
        },
        Wv = function(a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        },
        Xv = function(a, b) {
            if (b.length && (a.l = b[0], b = a.l && _.L(a.l, 1)) && (a.o = b, null != a.l && a.o)) {
                b = new Date;
                b.setTime(1E3 * _.L(a.l, 2));
                var c = "." + _.L(a.l, 4);
                b = "__gads=" + a.o + ("; expires=" + b.toGMTString()) + ("; path=" + _.L(a.l, 3) + "; domain=" + c);
                a.m.cookie = b
            }
        },
        Yv = {
            overflow: "hidden",
            position: "fixed"
        },
        Zv = function() {
            this.j = this.v = this.o = this.m = null;
            this.l = 0
        };
    Zv.prototype.apply = function(a, b) {
        this.m = a.body.style.overflow;
        this.o = a.body.style.position;
        this.v = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.l = _.Ou(b);
        _.ru(a.body, "top", -this.l + "px");
        _.ru(a.body, Yv)
    };
    _.$v = function(a, b) {
        if (!a.body) return null;
        var c = new Zv;
        c.apply(a, b);
        return function() {
            _.ru(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.m,
                position: c.o,
                top: c.v
            });
            b.scrollTo(0, c.l)
        }
    };
    aw = function(a, b, c) {
        return a.IntersectionObserver ? new a.IntersectionObserver(c, b) : new _.Il(c, b)
    };
    bw = function(a, b, c) {
        _.Q(a, b, c);
        return function() {
            return _.sf(a, b, c)
        }
    };
    cw = null;
    dw = function() {
        cw = _.fh()
    };
    ew = function(a, b) {
        return b ? null === cw ? (_.Q(a, "mousemove", dw, {
            passive: !0
        }), _.Q(a, "scroll", dw, {
            passive: !0
        }), dw(), !1) : _.fh() - cw >= 1E3 * b : !1
    };
    fw = function(a) {
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
            u = [],
            v = aw(b, void 0 === a.options ? {} : a.options, function(y, H) {
                try {
                    var C = function() {
                        u.length || (e && (u.push(bw(c, "mouseenter", function() {
                            l = !0;
                            C()
                        })), u.push(bw(c, "mouseleave", function() {
                            l = !1;
                            C()
                        }))), u.push(bw(b.document, "visibilitychange", function() {
                            return C()
                        })));
                        var G = ew(b, f);
                        !m || l || G || _.Pl(b.document) ? (b.clearTimeout(k), k = null) : k = k || b.setTimeout(function() {
                            ew(b, f) ? C() : (g(), H.disconnect())
                        }, 1E3 * d)
                    };
                    m = y[y.length - 1].isIntersecting;
                    C()
                } catch (G) {
                    h && h(G)
                }
            });
        v.observe(c);
        return function() {
            v.disconnect();
            for (var y = _.r(u), H = y.next(); !H.done; H = y.next()) H = H.value, H();
            null != k && b.clearTimeout(k)
        }
    };
    gw = function(a) {
        if (!a.j) {
            var b = _.ai(7);
            Pv = Ov();
            Sv = b;
            Rv = 0;
            if (!_.Ec() || 0 <= _.pc(_.Lc(), 11)) b = Vv();
            else {
                b = _.yg();
                var c = b.__google_ad_urls;
                b = c ? c : b.__google_ad_urls = new Lv
            }
            a.j = b;
            a.l = a.j.setupOse(a.m)
        }
        return a.j
    };
    hw = function(a, b) {
        return a.Z[_.R(b)] || b.o
    };
    iw = function(a, b, c) {
        for (var d = 100; a && a != b && --d;) _.gu(a, c), a = a.parentElement
    };
    jw = function(a) {
        a = _.ul(!0, a);
        return -12245933 != a.width ? a : null
    };
    kw = function(a, b) {
        var c = _.W(a);
        if (1 != b && 2 != b || !c) return !1;
        var d = _.L(a.j, 7) || 0,
            e = c.ownerDocument;
        e = e.defaultView || e.parentWindow || _.q;
        switch (b) {
            case 2:
                var f = _.En(a);
                a = "rtl" == f.direction;
                var g = c.style.marginLeft,
                    h = c.style.marginRight;
                a ? _.gu(c, {
                    "margin-right": "0px"
                }) : _.gu(c, {
                    "margin-left": "0px"
                });
                if (b = c.getBoundingClientRect()) {
                    g = 1;
                    if (h = c.parentElement) {
                        h = _.Qe(h, e);
                        var k = h.justifyContent;
                        "flex" != h.display || "row" != h.flexDirection || "center" != k && "space-evenly" != k && "space-around" != k || (g = 2)
                    } else h = new _.Ti("gpt_pop_nopar"), _.z(h), Bu(h), _.Ui(h, 1), _.A(h, "bm", 2);
                    h = {
                        "z-index": "30"
                    };
                    "absolute" != f.position && "fixed" != f.position && "relative" != f.position && (h.position = "relative");
                    e = (f = jw(e)) ? f.width : e.innerWidth;
                    d = (e - d) / 2;
                    a ? h["margin-right"] = g * (b.right + d - e) + "px" : h["margin-left"] = -(b.left - d) * g + "px";
                    _.gu(c, h);
                    c = !0
                } else c.style.marginLeft = g, c.style.marginRight = h, c = !1;
                return c;
            case 1:
                if (g = c.parentElement)
                    if (b = _.Dn(a)) {
                        f = b.width;
                        a = _.En(a);
                        b = a.position;
                        k = parseInt(a.width, 10) || 0;
                        h = _.Qe(g, e);
                        var l = "rtl" == h.direction ? "Right" : "Left";
                        e = l.toLowerCase();
                        g = "absolute" == b ? 0 : parseInt(h["padding" + l], 10);
                        h = parseInt(h["border" + l + "Width"], 10);
                        var m = _.mf(a);
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
                        _.gu(c, f);
                        c = !0
                    } else c = !1;
                else c = new _.Ti("gpt_pop_nopar"), _.z(c), Bu(c), _.Ui(c, 1), _.A(c, "bm", 1), c = !1;
                return c;
            default:
                return !1
        }
    };
    lw = function(a) {
        var b = !1,
            c = !1,
            d = !1;
        return hu(a, function(e) {
            "nowrap" == e.whiteSpace && (d = !0);
            if ("scroll" == e.overflowX || "auto" == e.overflowX) c = !0;
            "flex" == e.display && (b = !0);
            return b && c && d
        })
    };
    mw = function(a, b) {
        var c = _.Bn(b, a) || _.W(b, a),
            d = new _.wo;
        try {
            var e = function(P, Ga) {
                    return a.elementsFromPoint(P, Ga)
                },
                f = c.getBoundingClientRect(),
                g = f.left,
                h = f.top,
                k = f.width,
                l = f.height,
                m = _.En(b);
            if ("hidden" == m.visibility || "none" == m.display) return _.xo(d);
            var u = parseInt(m["border-top-width"] || 0, 10) + 1;
            b = g + k;
            l = h + l;
            var v = e(g + u + 2, h + u);
            var y = e(b - u - 2, h + u);
            var H = e(b - u - 2, l - u);
            var C = e(g + u + 2, l - u);
            var G = e(b / 2, l - u)
        } catch (P) {
            return d.set(1), _.xo(d)
        }
        if (!(v && v.length && y && y.length && H && H.length && C && C.length && G && G.length)) return d.set(7), _.xo(d);
        ju(c) && d.set(9);
        e = function(P, Ga) {
            return cu(P, Ga) || cu(Ga, P)
        };
        v = v[0];
        c == v || e(c, v) || iu(v) || d.set(2);
        y = y[0];
        c == y || e(c, y) || iu(y) || d.set(3);
        H = H[0];
        c == H || e(c, H) || iu(H) || d.set(4);
        C = C[0];
        c == C || e(c, C) || iu(C) || d.set(5);
        if (iu(c)) return _.xo(d);
        C = !1;
        for (H = 0; H < G.length; H++)
            if (y = G[H], C) {
                if (v = _.Qe(y, window), "hidden" != v.visibility && !iu(y) && !e(c, y)) {
                    d.set(6);
                    "absolute" == v.position && d.set(11);
                    break
                }
            } else c == y && (C = !0);
        return _.xo(d)
    };
    nw = function(a, b, c) {
        var d = _.En(a),
            e = d ? "absolute" != d.position : !0,
            f = !1,
            g = (a = _.W(a)) && a.parentElement,
            h = !1;
        _.lf(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k == g)) e = _.so(k, _.q, !0, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && l.endsWith("px") && parseInt(l, 10) || 0) >= c;
                    !l || m || _.vb(_.po, l) || (e = !1)
                }
            f || (k = _.Qe(k, _.q), "sticky" != k.position && "fixed" != k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            Bc: e,
            Ec: f
        }
    };
    ow = function(a, b, c, d, e, f, g) {
        if (_.q.IntersectionObserver) {
            var h = null,
                k = _.Bn(b, a) || _.W(b, a),
                l = _.S(459, function(m) {
                    if (m = m && m[0]) {
                        var u = m.boundingClientRect,
                            v = -2 > Math.round(u.left) || Math.round(u.right) > window.innerWidth + 2;
                        if (m.intersectionRatio >= 1 - ((0 <= Math.round(u.left) ? 0 : 2) + (Math.round(u.right) <= window.innerWidth ? 0 : 2)) / d || v) _.ya(g, function(y) {
                            if (v) {
                                var H = new _.wo;
                                H.set(8);
                                lw(k) && H.set(10);
                                H = _.xo(H)
                            } else H = mw(a, b);
                            if (_.x(221)) {
                                var C = nw(b, k, e);
                                var G = C.Bc;
                                C = C.Ec
                            } else {
                                a: if (G = a.parentWindow || a.defaultView || window, (C = _.En(b)) && "absolute" == C.position) G = !1;
                                    else {
                                        C = (C = _.W(b)) && C.parentElement;
                                        for (var P = k, Ga = 100; P && P != C && Ga--;) {
                                            var Qa = P.style && P.style.height,
                                                Za = (Qa && Qa.endsWith("px") && parseInt(Qa, 10) || 0) >= e;
                                            if (Qa && !Za && !_.vb(["auto", "inherit", "100%"], Qa)) {
                                                G = !1;
                                                break a
                                            }
                                            P = P.parentElement
                                        }
                                        G = !C || _.to(C, G, !0, 100, -1, -1)
                                    }C = -1
                            }
                            _.z(y);
                            _.A(y, "qid", _.Gm(b));
                            _.A(y, "iu", b.getAdUnitPath());
                            _.A(y, "e", String(H));
                            _.A(y, "ret", d + "x" + e);
                            _.A(y, "req", f);
                            _.A(y, "bm", String(c));
                            _.A(y, "efh", Number(G));
                            _.A(y, "stk", Number(C));
                            _.A(y, "ifi", b.Fa);
                            _.x(60) && _.A(y, "isc", 1)
                        }, {
                            Ea: _.bg(7)
                        }), h && h.unobserve(k)
                    }
                });
            k && (h = new _.q.IntersectionObserver(l, {
                threshold: [1]
            }), h.observe(k))
        }
    };
    pw = function(a, b, c, d, e, f) {
        var g = _.Ci(b);
        _.q.setTimeout(_.S(459, function() {
            return ow(a, b, c, d, e, g, f)
        }), 500)
    };
    qw = function(a, b) {
        var c = _.cg(3);
        if (!c) return !1;
        var d = _.dg(3);
        if (d.length) {
            var e = b.getAdUnitPath().split("/");
            if (!_.vb(d, e[e.length - 1])) return !1
        }
        e = (d = _.nn(b)) && d[0];
        if (!e || !_.D(e) || "number" !== typeof e[0] || "number" !== typeof e[1]) return !1;
        d = e[1];
        e = e[0];
        var f = c.split(","),
            g = "f" == f[0],
            h = "p" == f[0],
            k = Number(f[0]),
            l = _.zh(window).width,
            m = _.Dn(b);
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
        _.Md(a, 4, Yt[0], '<html><body style="height:' + (c - 2 + "px;width:" + (g - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;"><p>Requested size:')) + (e + "x" + d + "</p><p>Rendered size:") + (g + "x" + c + "</p></body></html>"));
        (a = _.W(b)) && _.ru(a, "opacity", .5);
        return !0
    };
    rw = function(a) {
        a.da && window.setTimeout(function() {
            _.ya("gpt_fluid_sz", function(b) {
                var c = _.Bn(a, document);
                c = c ? _.Of(c) : null;
                _.A(b, "sz", c ? c.width + "x" + c.height : "null");
                _.A(b, "qqid", _.Gm(a))
            })
        }, 250)
    };
    sw = function(a, b, c, d, e, f, g, h, k, l, m) {
        var u = _.Hn.C().m,
            v;
        _.D(e) ? v = new _.pe(e[0], e[1]) : v = 1;
        d = null === l ? Pu(d) : _.x(142) ? "<startguard>" + d + "<endguard>" : d;
        return new pv({
            Bb: a,
            Sb: b,
            zc: c,
            content: d,
            size: v,
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
            wc: _.x(45),
            ab: !!_.xa().fifWin,
            Qc: _.Om(),
            qc: _.Pm(),
            cd: !1,
            ec: !1,
            hostpageLibraryTokens: u,
            oa: _.aj,
            Pa: null === l ? void 0 : l,
            uniqueId: g.uniqueId,
            kb: m
        })
    };
    tw = function(a, b, c) {
        var d = void 0 === d ? !0 : d;
        var e = void 0 === e ? !0 : e;
        b = Pu(b, "<script>var inDapIF=true;\x3c/script>");
        try {
            var f = a.contentWindow ? a.contentWindow.document : a.contentDocument;
            d && (_.Fc() || _.x(93)) && f.open("text/html", "replace");
            c();
            f.write(b);
            a.contentWindow && a.contentWindow.history && a.contentWindow.history.replaceState && Tt(a.contentWindow.location.href, "#") && a.contentWindow.history.replaceState(null, "", "#" + Math.random());
            e && f.close()
        } catch (g) {
            a = new _.Ti("gpt_write_into_frame_failure"), _.z(a), _.Ui(a)
        }
    };
    uw = function(a, b, c, d, e) {
        if (a && d) {
            b = _.r([a, b, e]);
            for (d = b.next(); !d.done; d = b.next())
                if (d = d.value) d.id += "__to_be_removed__", _.gu(d, {
                    display: "none"
                });
            b = _.ai(24);
            window.setTimeout(_.S(514, function() {
                c && _.bm(c);
                _.Ae(a);
                _.Ae(e)
            }), b)
        } else c && _.bm(c), _.Ae(a), _.Ae(e)
    };
    vw = function(a) {
        return null != _.L(a, 2) ? null != _.L(a, 3) && 0 != (0, _.jf)() ? _.L(a, 2) * _.Id(a, 3) : _.L(a, 2) : null
    };
    ww = function(a) {
        var b = new _.ji;
        a = _.r(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            if (null != _.L(c, 1)) {
                var d = _.L(c, 1);
                _.N(b, 1, d)
            }
            null != _.L(c, 2) && _.ki(b, _.L(c, 2));
            null != _.L(c, 3) && (c = _.Id(c, 3), _.N(b, 3, c))
        }
        return b
    };
    xw = function(a, b, c, d, e) {
        var f = null,
            g = _.S(b, e);
        _.Q(c, d, g) && (f = function() {
            return _.sf(c, d, g)
        }, a.A.push(f));
        return f
    };
    yw = /(<head(\s+[^>]*)?>)/i;
    zw = function(a, b) {
        a && _.ru(a, "visibility", b ? "visible" : "hidden")
    };
    Aw = function(a, b, c) {
        _.ya("gpt_fluid_sz", function(d) {
            _.A(d, "sz", c + "x" + b);
            _.A(d, "qqid", _.Gm(a.slot));
            _.z(d);
            _.A(d, "ff", 1)
        })
    };
    Bw = function(a, b, c) {
        return _.M(b, 12) ? !0 : _.L(a.o, 2) ? 5 != _.L(a.o, 3) ? (_.aj(499, Error("unknown alg " + _.L(a.o, 3))), !1) : String(_.Xe(c)) != _.L(a.o, 2) ? (_.aj(499, Error("mismatch rz32")), !1) : !0 : null == _.L(a.o, 3) || 8 == _.L(a.o, 3)
    };
    Cw = function(a, b, c) {
        var d = a.o && !!b.contentDocument.querySelector('meta[http-equiv="Content-Security-Policy"][content*="cdn.ampproject.org"]');
        _.ya("gpt_cspviolation", function(e) {
            _.A(e, "qqid", _.Gm(a.slot));
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
    Dw = !1;
    Ew = function(a) {
        var b = _.bg(18);
        if (0 < b) return new _.il(function(c) {
            return void setTimeout(function() {
                return void c(a)
            }, b)
        });
        if (_.x(169) && _.Bj(2)) return new _.il(function(c) {
            return void setTimeout(function() {
                return void c(a)
            }, 0)
        })
    };
    Fw = function(a, b, c) {
        return a.IntersectionObserver ? new a.IntersectionObserver(c, {
            rootMargin: b
        }) : new _.Il(c, {
            rootMargin: b
        })
    };
    Gw = function(a, b, c) {
        var d = _.W(a.slot);
        if (!d || !_.Bh(d)) return null;
        var e = new _.kl;
        b = Fw(bu(a.v), b + "%", _.S(291, function(f, g) {
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
    Hw = {
        width: "100%",
        height: "100%",
        left: "0",
        top: "0"
    };
    Iw = function(a) {
        if (!a.G) {
            var b = _.q.document,
                c = _.Bn(a.slot, b);
            if (3 == a.o && c) {
                a.o = 4;
                var d = _.W(a.slot, b);
                _.gu(d, {
                    backgroundColor: "white",
                    opacity: "1",
                    position: "fixed",
                    margin: "0",
                    padding: "0",
                    zIndex: 2147483647,
                    display: "block"
                });
                _.gu(d, Hw);
                a.v = _.$v(b, _.q);
                c.contentWindow.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "visible"
                }), "*");
                _.q == _.q.top && (_.q.location.hash = "goog_rewarded", window.setTimeout(function() {
                    var e = xw(a, 503, _.q, "hashchange", function(f) {
                        f && f.oldURL && !Tt(f.oldURL, "#goog_rewarded") || (e(), c.contentWindow.postMessage(JSON.stringify({
                            type: "rewarded",
                            message: "back_button"
                        }), "*"))
                    })
                }, 0))
            }
        }
    };
    Jw = function(a, b) {
        if (b && b.data && b.source) {
            var c = _.Bn(a.slot, _.q.document);
            if (c && c.contentWindow == b.source) try {
                var d = JSON.parse(b.data);
                if ("rewarded" == d.type) switch (d.message) {
                    case "prefetched":
                        2 == a.o && (a.o = 3, Bv(a.slot, function() {
                            return Iw(a)
                        }, d.payload || null));
                        break;
                    case "granted":
                        a.B || (Dv(a.slot, d.payload || null), a.B = !0);
                        break;
                    case "closed":
                    case "canceled":
                        5 != a.o && (_.$p(a), Fv(a.slot), Cv(a.slot));
                        break;
                    case "completed":
                        a.D || (Ev(a.slot), a.D = !0)
                }
            } catch (e) {}
        }
    };
    Kw = function(a, b, c) {
        var d = function(f) {
            f.Wa()
        };
        c = _.r(c);
        for (var e = c.next(); !e.done; e = c.next()) e = e.value, e instanceof _.il ? e.then(d) : d(e);
        delete a.j[b]
    };
    Lw = function(a, b) {
        Kw(a, _.R(b), a.j[_.R(b)] || [])
    };
    Mw = function(a, b, c, d) {
        Lw(a, b);
        var e = _.R(b);
        a.j[e] = [];
        _.J(a.l, function(f) {
            f.sa(b, c) && (f.xb ? (f = _.cq.C().load(f.xb).then(function(g) {
                return new g(b, d)
            }), a.j[e].push(f)) : a.j[e].push(new f.xa(b, d)))
        })
    };
    Nw = function(a, b, c, d) {
        var e = (a.j[_.R(b)] || []).slice(),
            f = new _.kl,
            g = _.S(496, function(h, k) {
                h ? Wv(h) || h instanceof _.il ? h.then(function(l) {
                    return void g(l, k)
                }) : (h = c(h, k), h = null == h ? k : h, Wv(h) || h instanceof _.il ? h.then(function(l) {
                    return void g(e.shift(), l)
                }) : g(e.shift(), h)) : f.resolve(k)
            });
        g(e.shift(), d);
        return f.j
    };
    Ow = function(a, b, c, d, e) {
        Mw(a, b, d, c);
        return Nw(a, b, function(f, g) {
            return f.j(d, g)
        }, e)
    };
    Pw = function(a, b, c, d) {
        Nw(a, b, function(e) {
            e.m(c, d)
        }, c)
    };
    Qw = function(a, b, c) {
        _.M(b.j, 8) || a.P || _.on(b) || (a = _.W(b, c)) && _.Pf(a, !0)
    };
    Rw = function(a) {
        (a = _.L(a, 27)) && _.J(a, function(b) {
            _.vh.C().l(b)
        })
    };
    Sw = function(a, b) {
        _.ya("gpt_sz", function(c) {
            _.A(c, "r", _.Ci(a));
            _.A(c, "w", Number(_.L(b, 7)));
            _.A(c, "h", Number(_.L(b, 6)));
            _.L(b, 10) && _.A(c, "f", _.L(b, 10));
            _.L(b, 36) && _.A(c, "a", _.L(b, 36))
        }, {
            Ea: _.bg(28)
        })
    };
    Tw = function(a, b, c, d) {
        b.Ka = d.kb;
        var e = d.l.W;
        Gv(b, c, _.jq(e));
        Sw(b, c);
        qw(c, b);
        if (null != _.L(c, 23)) {
            var f = _.L(c, 23);
            _.J(f, function(g) {
                var h = a.R;
                if (!_.vb(h.l, g)) switch (g) {
                    case 1:
                    case 2:
                    case 3:
                        var k;
                        if (k = _.x(116) ? _.Hl[g] : _.Fl[g]) {
                            var l = g + "_hostpage_library";
                            if (k = _.Pe(document, k)) k.id = l
                        }
                        h.l.push(g);
                        l = new Iu(g);
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
        _.L(c, 29) && (f = new _.ji, _.ki(f, _.L(c, 29)), _.N(f, 3, 1), e = _.Nd(e, _.ji, 5) || new _.ji, e = ww([e, f]), b.Ga = e);
        _.Pd(c, Wt, 14).length && Xv(a.M, _.Pd(c, Wt, 14));
        e = !!_.M(c, 40);
        if (_.on(b) || _.M(c, 11) || e) a.j.I[_.R(b)] = !0;
        _.M(c, 8) || (null != _.L(c, 49) || au(c, _.rp(d, b)), _.ln(b, hw(d, b)))
    };
    Uw = function(a, b, c) {
        var d = !1,
            e = function() {
                !d && b.G && (c(), d = !0)
            },
            f = b.j;
        (f = f && _.Nd(f, _.Yd, 43) && a.contentWindow ? _.bg(5) : 0) && 2 != f || _.Q(a, "load", e);
        f && a.contentWindow && _.Q(a.contentWindow, "amp-ini-load", e)
    };
    Vw = function(a, b, c, d) {
        _.vl.call(this);
        this.slot = b;
        this.v = c;
        this.A = d;
        this.j = null;
        this.m = new _.qe(a);
        this.B = !1
    };
    _.B(Vw, _.vl);
    Vw.prototype.loaded = function(a) {
        a && a.setAttribute("data-load-complete", !0);
        this.slot.loaded()
    };
    Vw.prototype.l = function() {
        _.vl.prototype.l.call(this);
        var a = this.m.j,
            b = _.W(this.slot, a);
        b && b.removeAttribute("data-google-query-id");
        b = this.slot;
        b = 1 == _.bg(15) ? !0 : 2 == _.bg(15) ? !1 : !!b.F;
        this.A && this.j && this.A.unloadAdBlock(this.j, b, _.x(101));
        b = !!this.A && b;
        var c = _.Cn(this.slot, a);
        uw(c, this.j, this.slot.F, b, this.B ? _.W(this.slot, a) : null);
        this.slot.F = null;
        a = this.slot;
        a.J && (a.P = null);
        Iv(this.slot, null);
        a = this.slot;
        a.ma = 0;
        a.D = 0;
        this.j = null
    };
    var Ww = function() {
        Vw.apply(this, arguments)
    };
    _.B(Ww, Vw);
    Ww.prototype.o = _.p(19);
    Ww.prototype.loaded = function(a) {
        Vw.prototype.loaded.call(this, a);
        rw(this.slot)
    };
    var Xw = function(a, b, c) {
            var d = _.zn(a.slot),
                e = a.m.j,
                f = _.is;
            e = void 0 === e ? document : e;
            e = _.Ce(new _.qe(e), "IFRAME");
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
            Iv(a.slot, e);
            return e
        },
        Yw = function() {
            Vw.apply(this, arguments)
        };
    _.B(Yw, Vw);
    Yw.prototype.o = _.p(18);
    var Zw = function(a, b, c, d) {
            d = void 0 === d ? document : d;
            var e = b.j,
                f = !(!_.W(b, d) && !b.na());
            if (!b.Ra() && e && f) {
                f = _.R(b);
                try {
                    var g = a.o[f],
                        h = !_.M(e, 8) || a.B;
                    g && h && (_.wl(g), delete a.o[f]);
                    var k = a.D ? gw(a.I) : null,
                        l;
                    g = d;
                    var m = a.j,
                        u = c.W;
                    if (null != (a.m.j.google_norender || null) || _.M(b.j, 8)) var v = null;
                    else {
                        if (_.Gn(b)) var y = !0;
                        else {
                            var H = b.j;
                            y = !(!_.Ni(H) || !b.ca && !_.M(u, 13)) || !(!H || !_.M(H, 12))
                        }
                        v = y ? new Ww(g, b, m, k) : new Yw(g, b, m, k)
                    }
                    if (l = v) {
                        a.o[f] = l;
                        var C = _.Gn(b) ? _.Jd(_.Nd(e, _.Zd, 41).getHtml()) : _.L(e, 4);
                        var G = l.m.j,
                            P = _.W(l.slot, G);
                        if (!P) {
                            var Ga = l.m.j;
                            if (0 === l.slot.na()) P = null;
                            else {
                                var Qa = _.Ce(l.m, "INS");
                                Qa.id = l.slot.U.j;
                                _.gu(Qa, {
                                    display: "none"
                                });
                                Ga.documentElement.appendChild(Qa);
                                P = Qa
                            }
                            l.B = !!P
                        }
                        var Za = l.slot.j;
                        if (!Za || !P || l.slot.Ra() || l.G) var vp = null;
                        else {
                            var Ty = _.Gm(l.slot);
                            P.setAttribute("data-google-query-id", Ty);
                            _.rh(_.si.C(), "5", l.slot.o);
                            _.pn(l.slot);
                            var wp = _.An(l.slot),
                                ue = _.Bb(P.childNodes);
                            c = wp + "__to_be_removed__";
                            for (var xp = _.r(ue), ej = xp.next(); !ej.done; ej = xp.next()) {
                                var yp = ej.value;
                                1 == yp.nodeType && (ue = yp, ue.id != wp && ue.id != c && _.Ae(ue))
                            }
                            var ng = _.Cn(l.slot, G) || _.sp(G, P, _.An(l.slot), l.v.o),
                                zp = l.slot;
                            zp.J && (zp.P = ng);
                            ng.style.width = "";
                            ng.style.height = "";
                            if ("height" == _.L(Za, 10)) var Ap = "fluid";
                            else {
                                var Bp = _.L(Za, 7),
                                    Cp = _.L(Za, 6),
                                    zd = _.L(Za, 36) || 0;
                                G = [Bp, Cp];
                                var Gc = l.m.j,
                                    za;
                                if (za = _.x(199)) {
                                    var og = l.slot,
                                        pg = _.W(og);
                                    if (pg && 3 == zd) {
                                        var Uy = G[0],
                                            fj = G[1],
                                            Ad = _.En(og);
                                        if (fj >= (parseInt(Ad.height, 10) || 0) || "none" == Ad.display || "hidden" == Ad.visibility) za = !1;
                                        else {
                                            var Dp = jw(Gc.defaultView || Gc.parentWindow || _.q);
                                            !Dp || pg.getBoundingClientRect().bottom <= Dp.height ? za = !1 : (Ad = {
                                                height: fj + "px"
                                            }, iw(_.Cn(og, Gc), pg, Ad), _.gu(pg, Ad), _.x(201) && pw(Gc, og, zd, Uy, fj, "gpt_slotred"), za = !0)
                                        }
                                    } else za = !1
                                }
                                var qg;
                                if (!(qg = za)) {
                                    var Hc = l.slot;
                                    var gj = _.W(Hc);
                                    if (!gj || 1 != zd && 2 != zd) var rg = !1;
                                    else {
                                        var hj = G[0],
                                            ve = G[1];
                                        var sg = Jv(Hc, 0);
                                        var Bd = Jv(Hc, 1);
                                        sg = sg < hj;
                                        ve = Bd < ve;
                                        if (sg || ve) {
                                            Bd = hj + "px";
                                            za = {
                                                "max-height": "none",
                                                "max-width": Bd,
                                                padding: "0px",
                                                width: Bd
                                            };
                                            ve && (za.height = "auto");
                                            iw(_.Cn(Hc, Gc), gj, za);
                                            var Ep = _.En(Hc);
                                            za = {};
                                            sg && hj > parseInt(Ep.width, 10) && (za.width = Bd, za["max-width"] = Bd);
                                            ve && (za.height = "auto", za["max-height"] = "none");
                                            _.Ue(za) ? rg = !1 : (za["padding-" + ("ltr" == Ep.direction ? "left" : "right")] = "0px", _.gu(gj, za), rg = !0)
                                        } else rg = !1
                                    }
                                    var Vy = kw(Hc, zd);
                                    rg || Vy ? (pw(Gc, Hc, zd, G[0], G[1], "gpt_slotexp"), qg = !0) : qg = !1
                                }!qg && _.x(212) && pw(Gc, l.slot, 0, Bp || -1, Cp || -1, "gpt_pgbrk");
                                Ap = G
                            }
                            l.j = l.o(Ap, C || "", Za, ng);
                            var Fp = _.L(Za, 49);
                            if (Fp) {
                                var Gp = l.j;
                                Gp && Gp.setAttribute("data-google-container-id", Fp)
                            }
                            var Wy = l.slot,
                                Hp = l.slot,
                                ij = new _.Sm(Hp.l(), !0, "publisher_ads"),
                                Ip = !!_.M(Za, 8);
                            ij.isEmpty = Ip;
                            var ib = Hp.ka;
                            if (Ip || !ib) var Jp = ij;
                            else {
                                var jb = _.Tm(ij, [_.L(Za, 7), _.L(Za, 6)]);
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
                                Jp = jb
                            }
                            _.qn(Wy, Jp);
                            vp = l.j
                        }(l = vp) && _.mb.push({
                            Na: a,
                            Da: 11,
                            Ca: [l, b]
                        })
                    } else {
                        l = d;
                        var Xy = _.Gm(b),
                            Kp = _.W(b, l);
                        Kp && Kp.setAttribute("data-google-query-id", Xy);
                        _.rh(_.si.C(), "5", b.o);
                        _.pn(b);
                        _.mq(a, l, b, a.B, c.W);
                        var Lp = new _.Sm(b.l(), !0, "publisher_ads");
                        Lp.slotContentChanged = a.B;
                        _.qn(b, Lp)
                    }
                } catch (Yy) {
                    _.aj(512, Yy)
                }
            }
        },
        $w = function(a) {
            a = Error.call(this, a);
            this.message = a.message;
            "stack" in a && (this.stack = a.stack)
        };
    _.B($w, Error);
    var ax = function(a) {
            return "(" + [a.j, a.A.length, a.v, a.m.length, a.o].join() + ")"
        },
        bx = function(a) {
            _.ya("gpt_num_chunks", function(e) {
                _.A(e, "bts", a.v);
                _.A(e, "num", a.o);
                _.z(e)
            });
            if (1 != a.j || a.m) _.Ts(a, new $w("state err " + ax(a)));
            else {
                for (var b = _.r(a.A), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = $t();
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
        cx = function(a, b, c, d, e) {
            var f = c.j;
            f && (_.Nd(f, _.Zd, 41) || (Sw(c, f), qw(f, c) && (d = _.L(f, 4)), _.Md(f, 4, Yt[0], d)), Zw(a, c, b.l, e))
        };
    _.Xs.prototype.T = Z(24, function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? document : d;
        var f = b.j;
        f && (_.M(f, 8) || !_.W(b, d) && !b.na() ? cx(this, a, b, c, d) : (Qw(this, b, d), Ow(_.gq.C(), b, this.j, f, c).then(function(g) {
            cx(e, a, b, g, d)
        })))
    });
    _.Xs.prototype.X = Z(23, function(a, b, c) {
        var d = a.o;
        this.ia[d] || (this.ia[d] = !0, _.rh(_.si.C(), "4", hw(a, b)));
        c ? (zv(b), zu(_.si.C(), b.o, _.L(c, 34) || ""), Rw(c), _.xh(4), Tw(this, b, c, a)) : _.ya("gpt_spr", function(e) {
            _.A(e, "sn", _.R(b));
            _.z(e)
        })
    });
    _.Us.prototype.l = Z(22, function(a, b) {
        if (3 == b.readyState || 4 == b.readyState)
            if (300 <= b.status) this.m || _.Ts(this.j, Error("xhr_err-" + b.status)), this.m = !0;
            else {
                var c = b.responseText.substr(this.v);
                if (c) {
                    var d = this.j;
                    if (c)
                        if (1 != d.j && 2 != d.j) _.aj(321, Error("state err: " + ax(d)));
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
                                        _.aj(321, H), l = null
                                    }
                                    var m = l && _.We(l, St);
                                    e = m && l[m];
                                    if ((e = _.D(e) ? new Zt(e.slice()) : null) && _.M(e, 40)) {
                                        var u = h;
                                        var v = e;
                                        if (_.M(v, 8))(m = _.L(v, 33)) && _.Pn.C().v.push(m), m = null;
                                        else if (v = (v = _.Nd(v, _.Vd, 39) || _.Nd(v, _.Xd, 48)) && v.A(), v = qv(v)) {
                                            if (m = _.$n(m, v)) {
                                                m.ra = !0;
                                                v = m;
                                                var y = _.an.C().find("publisher_ads");
                                                y && v.addService(y)
                                            }
                                        } else m = null;
                                        u.l = m
                                    } else h.l = h.A.shift() || null, h.l || _.aj(321, Error("missing slot: " + ax(h)));
                                    if (h.l) try {
                                        h.D(h.l, e)
                                    } catch (H) {}
                                    h.j = 2
                                } else {
                                    try {
                                        h.l && h.B(h.l, lu(e))
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
                a && 4 == b.readyState && bx(this.j)
            }
    });
    _.ls.prototype.ea = Z(21, function(a, b, c) {
        var d = this,
            e = a.j;
        e && !_.Bn(a, c) && (Qw(this, a, c), Ow(_.gq.C(), a, this.j, e, _.L(e, 4)).then(function(f) {
            _.Nd(e, _.Zd, 41) || _.Md(e, 4, Yt[0], f);
            Zw(d, a, b, c)
        }))
    });
    _.ls.prototype.ba = Z(20, function(a) {
        var b = _.gq.C();
        a = _.r(a);
        for (var c = a.next(); !c.done; c = a.next()) Lw(b, c.value)
    });
    Ww.prototype.o = Z(19, function(a, b, c, d) {
        var e = this;
        this.v.o || (d.style.display = "inline-block");
        var f = {
            sandbox: !!_.M(c, 13),
            uniqueId: _.L(c, 49)
        };
        f = Au([f, this.v.B, this.slot.Ha]) || {};
        c = _.Gn(this.slot) ? _.L(_.Nd(c, _.Zd, 41), 2) : null;
        var g = sw(d, _.zn(this.slot), _.is, b, a, function() {
            return e.loaded(g.j)
        }, f, !!_.xn(this.slot), Hv(this.slot), c, this.slot.Ka);
        a = g.j;
        this.slot.F = g;
        Iv(this.slot, a);
        Pw(_.gq.C(), this.slot, a, !1);
        return a
    });
    Yw.prototype.o = Z(18, function(a, b, c, d) {
        var e = this,
            f = Xw(this, a, d);
        Uw(f, this.slot, function() {
            return e.loaded(f)
        });
        tw(f, b, function() {
            Pw(_.gq.C(), e.slot, f, !0)
        });
        return f
    });
    _.iq.prototype.$ = Z(17, function(a, b) {
        if (this.D && a) {
            var c = b.j;
            if (!c || !_.Ni(c)) {
                c = gw(this.I);
                var d = _.x(159) ? Kv(b) : _.Fm(b);
                c.registerAdBlock(d, 3, this.K(), a, 0, 0, function(e, f) {
                    var g = null;
                    0 <= f && (e && !b.K && Av(b), e = b.T, b.T = Math.floor(f), b.K && 50 < f && !b.D ? b.D = _.fh() : !f && b.D && (f = _.fh() - b.D, b.ma += f, b.D = 0), e !== b.T && b.Ib(b.T));
                    _.x(64) ? (f = b.X, null != f && f.B && (g = Math.round(performance.now()), 0 < b.fb ? f.j && _.im(f.j, _.nm()) : (b.fb = g, _.rh(_.si.C(), "10", b.o), f.j && (g = f.j, e = _.nm(), _.im(g, e), g.j = e)), g = f.j, null == g ? g = null : (f = {}, f.mvo = b.K ? -1 : 0 < (0 < g.j && 0 < g.l ? g.j - (g.l - 1E3) : 0) ? 0 < g.j && 0 < g.l ? g.j - (g.l - 1E3) : 0 : 0, 0 <= g.m && (f.brt = g.m), g = f))) : g = void 0;
                    return g
                })
            }
        }
    });
    _.X.prototype.m = Z(16, function() {});
    _.up.prototype.m = Z(15, function(a, b) {
        _.x(74) && b || (this.o = wu(a, this.v))
    });
    _.Mp.prototype.m = Z(14, function(a, b) {
        var c = this;
        xw(this, 504, _.q, "message", function(d) {
            if (d && d.data && d.source) {
                var e = _.Bn(c.slot, _.q.document);
                e && e.contentWindow == d.source && ("impression-viewable" == d.data ? Av(c.slot) : "string" === typeof d.data && (d = /^visibility-changed-(\d+(\.\d+)?)$/.exec(d.data)) && (d = parseFloat(d[1]), 0 <= d && 1 >= d && (0 !== d && 1 !== d || d !== c.B) && (null !== c.B || 0 < d) && (c.B = d, c.slot.Ib(+(100 * d).toFixed(2)))))
            }
        });
        b && (this.D && (b = _.Cn(this.slot, _.q.document), zw(b, !1), b && _.ru(b, "min-width", "100%"), _.ru(a, "min-width", "100%"), xw(this, 505, a, "load", function() {
            var d = a.contentDocument;
            if (d) {
                var e = d.body.offsetHeight;
                d = d.body.offsetWidth;
                a.setAttribute("height", e);
                a.setAttribute("width", d);
                zw(_.Cn(c.slot, _.q.document), !0);
                Aw(c, e, d)
            } else _.ya("gpt_amp_fluid_no_iframedoc", function(f) {
                _.z(f)
            })
        })), _.x(this.v ? 136 : 137) && a.setAttribute("sandbox", _.fm.join(" ")))
    });
    _.Qp.prototype.m = Z(13, function(a) {
        var b = this,
            c = _.bg(19);
        this.o = fw({
            pb: bu(new _.qe),
            element: a,
            Wc: 0 == (0, _.jf)(),
            cc: c * _.bg(21, 3),
            Yc: c,
            rc: function() {
                var d = _.Op.C(),
                    e = b.slot;
                d = _.r(d.j[_.Np.id] || []);
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, f(e)
            },
            options: {
                threshold: 1
            },
            uc: function(d) {
                return _.bj(615, d, !0)
            }
        })
    });
    _.Rp.prototype.m = Z(12, function(a, b) {
        var c = this;
        b && xw(this, 502, a.contentDocument, "securitypolicyviolation", function(d) {
            return Cw(c, a, d)
        })
    });
    _.Zp.prototype.m = Z(11, function(a) {
        var b = this;
        1 == this.o && (this.o = 2, _.gu(a, Hw), _.gu(a, {
            position: "absolute"
        }), xw(this, 506, _.q, "message", function(c) {
            return Jw(b, c)
        }))
    });
    _.X.prototype.j = Z(10, function() {});
    _.up.prototype.j = Z(9, function(a) {
        if (a = _.Nd(a, _.Yd, 43)) this.v = _.L(a, 1) || ""
    });
    _.Mp.prototype.j = Z(8, function(a, b) {
        if (b) {
            this.v = !!_.M(a, 9);
            this.o = _.Nd(a, _.Yd, 43);
            Bw(this, a, b) || _.N(a, 12, !0);
            this.D = "height" == _.L(a, 10);
            a = !_.Fc();
            var c = this.v && _.x(134);
            a && (b = b.replace(yw, _.x(223) ? "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src https://tpc.googlesyndication.com/b4a/b4a-runner.html\">" : "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"));
            c && (b = b.replace(yw, '$1<meta name="referrer" content="origin">'));
            return b
        }
    });
    _.Rp.prototype.j = Z(7, function(a) {
        this.o = !!_.Nd(a, _.Yd, 43)
    });
    _.Wp.prototype.j = Z(6, function(a, b) {
        a = Dw ? 0 : _.bg(16);
        var c = _.bg(17);
        a = Math.max(a, c);
        0 < a && (Dw = !0, _.Sp(a));
        return Ew(b)
    });
    _.Xp.prototype.j = Z(5, function(a, b) {
        var c = this;
        a = this.v.j;
        var d = _.Ol(a),
            e = !!_.Bn(this.slot, a);
        if (_.Pl(a) && d && (e || !_.mp(this.F, bu(this.v), 0, this.slot))) {
            var f = new _.kl;
            if (this.o = xw(this, 324, a, d, function() {
                    _.Pl(c.v.j) || (c.o && c.o(), f.resolve(b || void 0))
                })) return f.j
        }
    });
    _.Yp.prototype.j = Z(4, function(a, b) {
        var c = this;
        a = vw(this.slot.Ga);
        if (!(null == a || 0 > a))
            if (_.mp(this.F, bu(this.v), a / 100, this.slot)) _.ya("gpt_er", function(d) {
                _.A(d, "qqid", _.Gm(c.slot))
            }, {
                Ea: _.bg(20)
            });
            else if (!_.x(145)) return Gw(this, a, b) || void 0
    });
    _.th.prototype.fa = Z(3, function(a, b, c) {
        var d = this;
        return function(e) {
            for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
            return d.Ja(a, function() {
                return b.apply(c, f)
            }, void 0)
        }
    });
    _.th.prototype.Ja = Z(2, function(a, b, c) {
        try {
            if (this.j && this.j.j) {
                var d = this.j.start(a.toString(), 3);
                var e = b();
                _.qh(this.j, d)
            } else e = b()
        } catch (f) {
            b = !0;
            try {
                _.nh(d), b = this.v(a, new _.Lg(f, {
                    message: _.uh(f)
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
    var dx = function(a, b, c) {
            return _.na(a, b, c, !1)
        },
        ex = [15],
        fx = function(a) {
            _.Hd(this, a, ex, null)
        };
    _.I(fx, _.Cd);
    var gx = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(gx, _.Cd);
    var hx = function(a) {
        _.Hd(this, a, null, null)
    };
    _.I(hx, _.Cd);
    ix = function() {
        var a = new fx,
            b = _.x(76);
        return dx(a, 7, b)
    };
    jx = function() {
        var a = ix(),
            b = _.x(77);
        return dx(a, 8, b)
    };
    _.kx = function(a, b) {
        var c = _.cq.C();
        _.dq(c, a).resolve(b)
    };
    lx = function() {
        var a = window,
            b = new gx,
            c = new hx;
        _.na(b, 1, _.Ii, 0);
        var d = _.vh.C().j().join();
        _.na(b, 5, d, "");
        _.na(b, 2, 1, 0);
        _.Qd(c, 1, b);
        b = jx();
        d = _.x(78);
        b = dx(b, 9, d);
        d = _.x(79);
        b = dx(b, 11, d);
        b = dx(b, 10, !0);
        d = _.x(80);
        b = dx(b, 13, d);
        d = _.x(81);
        b = dx(b, 14, d);
        b = dx(b, 16, !0);
        _.Qd(c, 2, b);
        a.google_rum_config = _.oa(c);
        c = _.x(188) ? "_debug" : "";
        _.Pe(a.document, "https://securepubads.g.doubleclick.net/pagead/js/rum" + c + ".js")
    };
    mx = function() {
        mx = function() {};
        _.Ma.Symbol || (_.Ma.Symbol = _.Oa)
    };
    ox = function() {
        mx();
        var a = _.Ma.Symbol.iterator;
        a || (a = _.Ma.Symbol.iterator = _.Ma.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && (0, _.La)(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return nx(_.Ca(this))
            }
        });
        ox = function() {}
    };
    nx = function(a) {
        ox();
        a = {
            next: a
        };
        a[_.Ma.Symbol.iterator] = function() {
            return this
        };
        return a
    };
    px = function() {
        this.o = !1;
        this.l = null;
        this.A = void 0;
        this.j = 1;
        this.D = this.v = 0;
        this.m = null
    };
    qx = function(a) {
        if (a.o) throw new TypeError("Generator is already running");
        a.o = !0
    };
    px.prototype.B = function(a) {
        this.A = a
    };
    var rx = function(a, b) {
        a.m = {
            vc: b,
            Ac: !0
        };
        a.j = a.v || a.D
    };
    px.prototype.return = function(a) {
        this.m = {
            return: a
        };
        this.j = this.D
    };
    sx = function(a) {
        this.j = new px;
        this.l = a
    };
    vx = function(a, b) {
        qx(a.j);
        var c = a.j.l;
        if (c) return tx(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return ux(a)
    };
    tx = function(a, b, c, d) {
        try {
            var e = b.call(a.j.l, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.o = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.l = null, rx(a.j, g), ux(a)
        }
        a.j.l = null;
        d.call(a.j, f);
        return ux(a)
    };
    ux = function(a) {
        for (; a.j.j;) try {
            var b = a.l(a.j);
            if (b) return a.j.o = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.A = void 0, rx(a.j, c)
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
    wx = function(a) {
        this.next = function(b) {
            qx(a.j);
            a.j.l ? b = tx(a, a.j.l.next, b, a.j.B) : (a.j.B(b), b = ux(a));
            return b
        };
        this.throw = function(b) {
            qx(a.j);
            a.j.l ? b = tx(a, a.j.l["throw"], b, a.j.B) : (rx(a.j, b), b = ux(a));
            return b
        };
        this.return = function(b) {
            return vx(a, b)
        };
        ox();
        this[Symbol.iterator] = function() {
            return this
        }
    };
    Dt = function(a, b) {
        b = new wx(new sx(b));
        _.Ka && (0, _.Ka)(b, a.prototype);
        return b
    };
    xx = function(a, b) {
        a = a.split(".");
        var c = _.q;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    yx = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
    zx = /%{(\w+)}/g;
    Gt = function(a) {
        var b = _.$b(new _.Zb(_.Xb, "//tpc.googlesyndication.com/sodar/%{basename}.js"));
        if (!yx.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
        var c = b.replace(zx, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(a, e)) throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
            d = a[e];
            return d instanceof _.Zb ? _.$b(d) : encodeURIComponent(String(d))
        });
        return _.ec(c)
    };
    Ax = function(a, b) {
        if ("length" in a.style) {
            a = a.style;
            for (var c = a.length, d = 0; d < c; d++) {
                var e = a[d];
                b.call(void 0, a[e], e, a)
            }
        } else a = eu(a.style.cssText), _.O(a, b, void 0)
    };
    _.Bx = function(a, b) {
        b = void 0 === b ? function() {
            return !0
        } : b;
        var c = {},
            d = /!\s*important/i;
        Ax(a, function(e, f) {
            !d.test(e) && b(f, e) && (e += " !important");
            c[f] = e
        });
        a.style.cssText = du(c)
    };
    _.Cx = {
        capture: !0
    };
    _.Dx = function() {
        var a = _.ai(38);
        this.j = null;
        this.m = !1;
        this.v = Math.random();
        this.l = void 0 === a ? .01 : a;
        this.o = this.jb
    };
    _.n = _.Dx.prototype;
    _.n.Zb = function(a) {
        this.j = a
    };
    _.n.$b = function(a) {
        this.m = a
    };
    _.n.jb = function(a, b, c, d, e) {
        c = void 0 === c ? this.l : c;
        if ((this.m ? this.v : Math.random()) > c) return !1;
        b.error && b.meta && b.id || (b = new _.Lg(b, {
            context: a,
            id: void 0 === e ? "gpt_exception" : e
        }));
        if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
        _.q.google_js_errors = _.q.google_js_errors || [];
        _.q.google_js_errors.push(b);
        _.q.error_rep_loaded || (_.Pe(_.q.document, _.q.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js"), _.q.error_rep_loaded = !0);
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
    _.Ex = function(a) {
        return .05 > Math.abs(_.Wl(a) - 1)
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
    var Ct = function(a, b) {
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
    var Et = function(a) {
        return new Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var It = function(a, b, c, d) {
        try {
            Ht(b, c, d)
        } catch (e) {}
    };
    var Fx = {},
        Gx = (Fx[3] = _.ls.prototype.ea, Fx[5] = _.Xs.prototype.T, Fx[6] = _.Xs.prototype.X, Fx[9] = _.ls.prototype.ja, Fx[11] = _.iq.prototype.$, Fx[14] = _.ls.prototype.ba, Fx[17] = _.Us.prototype.l, Fx);
    (function(a) {
        a = void 0 === a ? Gx : a;
        xx("Goog_AdSense_getAdAdapterInstance", Vv);
        xx("Goog_AdSense_OsdAdapter", Uv);
        for (var b = _.S(339, function(c) {
                var d = c && a[c.Da];
                d && d.apply(c.Na, c.Ca);
                return 0
            }); _.mb.length;) b(_.mb.shift());
        _.mb.push = b;
        (_.x(84) || _.si.C().j) && lx();
        _.x(215) && Jt();
        _.kx(1, null)
    })();
    var Jx;
    _.Hx = function(a, b, c) {
        this.m = a;
        this.j = b;
        this.L = null;
        this.X = void 0 === c ? null : c
    };
    _.Ix = function(a) {
        var b = a.m.ownerDocument;
        return ((b = b && b.defaultView) && b.frameElement ? b.frameElement : a.m.parentElement) || null
    };
    Jx = function(a, b) {
        if (!a.L) {
            a.L = [];
            for (var c = _.Ix(a); c;) {
                a.L.push(c);
                if (a.N(c)) break;
                c = c.parentNode && 1 === c.parentNode.nodeType ? c.parentNode : null
            }
        }
        c = a.L.slice();
        !b && a.N(c[c.length - 1]) && c.pop();
        return c
    };
    _.Kx = function(a) {
        if (!a.X) {
            var b = Jx(a, !0).pop();
            a.X = b && a.N(b) ? b : null
        }
        return a.X
    };
    _.Lx = function(a, b, c, d) {
        c = Jx(a, c);
        var e;
        if (d)
            for (d = c.length - 1; 0 <= d; --d)(e = c[d]) && b.call(a, e, d, c);
        else
            for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    };
})