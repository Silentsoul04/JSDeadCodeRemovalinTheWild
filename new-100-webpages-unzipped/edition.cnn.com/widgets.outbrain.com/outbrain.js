window.OBR = window.OBR || {};
(function(OBR) {
    window.OBR._jsc = {};
    OBR.error = function(a) {
        var d = ["www.vanguardngr.com"];
        if (!0 !== a) {
            var b, c = document,
                f = window.OB_releaseVer,
                g = a.isMonitorRepeated ? "&isMonitorRepeated=true" : "";
            d = window.location && window.location.hostname && -1 < d.indexOf(window.location.hostname);
            if (!c.getElementById("obMntor") && !d) {
                var e = function() {
                    b = c.createElement("iframe");
                    b.setAttribute("id", "obMntor");
                    b.style.display = "none";
                    c.body.appendChild(b);
                    b.src = "https://widgets.outbrain.com/widgetMonitor/monitor.html?name=" + encodeURIComponent(a.name) + "&message=" +
                        encodeURIComponent(a.message) + g + "&stack=" + encodeURIComponent(a.stack) + "&ver=" + encodeURIComponent(f)
                };
                c.body ? e() : setTimeout(function() {
                    c.body && e()
                }, 1E4)
            }
        }
    };;
    try {
        var aa, v, da, ea, w, ha, ia, ja, ka, ma, za, Aa, Ba, Da, Ca, Ea, x, Ga, Ha, Fa, y, Ia, Ja, Ka, La, Na, Pa, Ra, Sa, Ua, Ta, Va, Ya, Xa, Wa, $a, A, ab, bb, db, cb, eb, fb, hb, ib, jb, ca, u, ba, lb;
        aa = function() {
            aa = function() {};
            u.Symbol || (u.Symbol = ba)
        };
        v = function() {
            aa();
            var a = u.Symbol.iterator;
            a || (a = u.Symbol.iterator = u.Symbol("iterator"));
            "function" != typeof Array.prototype[a] && ca(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return da(this)
                }
            });
            v = function() {}
        };
        da = function(a) {
            var b = 0;
            return ea(function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            })
        };
        ea = function(a) {
            v();
            a = {
                next: a
            };
            a[u.Symbol.iterator] = function() {
                return this
            };
            return a
        };
        OBR._jsc.fa = function(a) {
            v();
            aa();
            v();
            var b = a[window.Symbol.iterator];
            return b ? b.call(a) : da(a)
        };
        w = function(a, b) {
            if (b) {
                var c = u;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ca(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
        ha = function(a, b, c) {
            if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        };
        ia = function(a, b) {
            v();
            a instanceof String && (a += "");
            var c = 0,
                d = {
                    next: function() {
                        if (c < a.length) {
                            var e = c++;
                            return {
                                value: b(e, a[e]),
                                done: !1
                            }
                        }
                        d.next = function() {
                            return {
                                done: !0,
                                value: void 0
                            }
                        };
                        return d.next()
                    }
                };
            d[window.Symbol.iterator] = function() {
                return d
            };
            return d
        };
        ja = function() {
            this.c = []
        };
        ka = function(a, b) {
            window.OBR.i.log("remove event :" + b);
            for (var c = 0, d = a.c.length; c < d; c += 1)
                if (a.c[c] && a.c[c].name && a.c[c].name === b) try {
                    a.c.splice(c, 1)
                } catch (e) {
                    window.OBR.i.log("rm evnt err: " + e), window.OBR.error(e)
                }
        };
        ma = function() {
            this.Ha = window.OBR.b.pa("OB-AD-BLOCKER-STAT", null);
            null !== this.Ha && window.OBR.i.log("AdBlock - status from local storage is: " + this.Ha);
            la = window.OBR.f.ph ? 1500 : 300;
            this.wg = this.jj = 0;
            this.m = !1;
            this.c = new window.OBR.Ba;
            this.Ja = {
                ready: 0,
                ie: 3,
                ni: 6,
                stopped: 7,
                Hk: 8
            };
            null === this.Ha && this.ig()
        };
        za = function(a, b) {
            a.c.add("onAdBlockStatusReady", b)
        };
        Aa = function(a) {
            var b = window.OBR.b.createElement("div", "ob_ad", "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important; border:none; padding: 0 0 0 0;visibility:visible !important");
            b.className = "Ads_4 AD_area ADBox AdsRec";
            window.document.body.appendChild(b);
            var c = a.Ti(["abp_ob_exist", "abp_ob_wl"], "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important; border:none; padding: 0 0 0 0;visibility:visible !important");
            c.push(b);
            window.OBR.i.log("AdBlock - Start long status check for Ad Blocker existence");
            (0, window.setTimeout)(function() {
                a.Xi(c);
                a.Ha = (0 < a.wg).toString();
                window.OBR.i.log("AdBlock - finish long status check. adBlock = " + a.Ha);
                a.m = !0;
                window.OBR.b.Kb("OB-AD-BLOCKER-STAT", a.Ha);
                a.c.G("onAdBlockStatusReady", [a.Ha])
            }, la)
        };
        Ba = function() {
            try {
                return window.document.cookie
            } catch (a) {}
            return ""
        };
        Da = function(a) {
            if (!(-1 < Ba().indexOf("OB-USER-TOKEN")) || a !== Ca()) {
                a = "OB-USER-TOKEN=" + (0, window.encodeURIComponent)(a);
                for (var b = [a, "max-age=7776000000", "expires=" + (new Date(Date.now() + 7776E6)).toUTCString(), "path=/;samesite=lax"].join(";"), c = window.document.location.hostname.split("."), d = c.length - 1; 0 <= d; d--) {
                    try {
                        window.document.cookie = b + ";domain=." + c.slice(d).join(".") + ";"
                    } catch (e) {}
                    if (-1 < Ba().indexOf(a)) {
                        window.OBR.i.log("pub cookie is set");
                        break
                    }
                }
            }
        };
        Ca = function() {
            var a = Ba().match(/OB-USER-TOKEN=([^;]+)(;|$)/),
                b = "";
            a && 1 < a.length && (b = (0, window.decodeURIComponent)(a[1]));
            return b
        };
        Ea = function(a) {
            function b(a, b) {
                a.map(function(c) {
                    var e = a[c].pixel;
                    e = (c = a[c].contextAware) ? e : window.OBR.f.O + "widgets.outbrain.com/nanoWidget/externals/obPixelFrame/obPixelFrame.htm#p=" + (0, window.encodeURIComponent)(e);
                    e = {
                        type: c ? "IMG" : "IFRAME",
                        id: null,
                        css: "display:none;height:1px;width:1px;",
                        attributes: {
                            src: e
                        }
                    };
                    e = window.OBR.b.createElement(e.type, e.id, e.css, e.attributes);
                    b.appendChild(e)
                })
            }
            var c = window.OBR.b.w(a.C());
            a && c && (a = a.bb("whenViewedPixels", null), c = c.querySelector(".ob-pixels"), a && c && b(a, c))
        };
        x = function() {
            this.wa = !1;
            this.c = [];
            this.Lh = new window.OBR.Pd;
            this.m = new window.OBR.Mg;
            this.o = !1;
            this.H = 0;
            this.P = 200;
            this.startTime = (new Date).getTime();
            this.Ja = {
                ready: 0,
                ie: 3,
                ni: 6,
                stopped: 7,
                Hk: 8
            };
            Fa(this);
            this.gf = this.gf.bind(this)
        };
        Ga = function(a, b) {
            window.OBR.i.log("Adding stats for: " + b.C());
            if (b.l("tracking", !1)) y(a, b, a.Ja.ni);
            else if (b.qh()) y(a, b, a.Ja.stopped);
            else {
                var c = b.l("recMode", "");
                c.includes("top-box") || c.includes("bottom-box") || b.Rk() ? y(a, b, a.Ja.ready) : ((c = b.aa) && c.reason && c.reason !== window.OBR.Ab.Ob.Pf ? y(a, b, a.Ja.Hk) : y(a, b, a.Ja.ready), a.gf(b))
            }
        };
        Ha = function() {
            var a = window.OBR.La;
            a.wa || (a.ff(), (0, window.setTimeout)(function() {
                return a.wa = !1
            }, a.P), a.wa = !0)
        };
        Fa = function(a) {
            window.OBR.i.log("Starting Statistics");
            za(window.OBR.Za, function() {
                a.o = !0;
                Ia(a)
            });
            window.OBR.i.log("AdBlock - Start full check for stats");
            window.OBR.Za.ig()
        };
        y = function(a, b, c) {
            var d = b.bb("viewability_actions");
            if (void 0 !== d && null !== d && d.reportViewed && d.reportServed) {
                d = b.bb("viewability_actions");
                d = (d && 3 === c && d.reportViewed || d.reportServed).split("?");
                var e = window.OBR.b.Ll(d[1]);
                e.tm = (new Date).getTime() - a.startTime;
                e.eT = c;
                if (c === a.Ja.ready) {
                    e = "" + window.OBR.b.gi(e);
                    if (b) {
                        var f = window.document.body.getBoundingClientRect();
                        var g = window.OBR.b.w(b.C());
                        if (g) {
                            var h = g.getBoundingClientRect();
                            f = "&widgetWidth=" + Math.round(h.width || g.clientWidth) + "&widgetHeight=" +
                                Math.round(h.height || g.clientHeight) + "&widgetX=" + Math.round(h.left - f.left) + "&widgetY=" + Math.round(h.top - f.top)
                        } else f = ""
                    } else f = "";
                    e += f
                } else e = window.OBR.b.gi(e);
                d = d[0] + "?" + e;
                e = [];
                f = window.OBR.Za;
                "undefined" === typeof b.Tk() && b.Eu(0 < b.h("pad", "0") ? f.Zi(b.C(), c) : !1);
                f = b.Tk() ? "1" : "0";
                e.push(d);
                e.push("&wRV=" + window.OBR.f.hc);
                e.push("&pVis=" + f);
                e.push("&lsd=" + b.h("lsd", -1));
                e.push("&eIdx=");
                c === a.Ja.ie && e.push(a.H++);
                "" !== b.h("cnsnt", "") && e.push("&cnsnt=" + b.h("cnsnt", ""));
                a.A || (e.push("&cheq=" + window.OBR.$c.Uc),
                    a.A = !0);
                b = e.join("");
                window.OBR.i.log("Stats waiting list: " + b);
                a.m.add(b);
                a.o && Ia(a)
            }
        };
        Ia = function(a) {
            for (; !a.m.eb();) {
                var b = a.m.top();
                b += "&ab=" + window.OBR.Za.wg + "&wl=" + window.OBR.Za.jj;
                window.OBR.xa.get(b, {})
            }
        };
        Ja = function(a, b) {
            b && (b = a.innerText || a.textContent, b = 0 < b.lastIndexOf(" ") ? b.substring(0, b.lastIndexOf(" ")) : b.substring(0, b.length - 3), -1 < ".,-_' ".indexOf(b.slice(-1)) && (b = b.substring(0, b.length - 1)), a.innerHTML = b + "&hellip;")
        };
        Ka = function(a, b) {
            function c() {
                for (var a = 0; a < e.length; a++) {
                    var b = e[a];
                    b.title = b.innerText || b.textContent;
                    var c = b.title,
                        k = b.clientHeight,
                        l = (0, window.parseInt)(window.OBR.b.Pa(b, "max-height").replace("px", ""));
                    if (!(k < l)) {
                        var m = b.cloneNode(!0);
                        k = window.document.createElement("div");
                        k.style.position = "absolute";
                        k.style.top = "-1000px";
                        k.style.left = "-1000px";
                        window.document.body.appendChild(k);
                        var n = m.style;
                        n.fontSize = window.OBR.b.Pa(b, "font-size");
                        n.fontWeight = window.OBR.b.Pa(b, "font-weight");
                        n.fontFamily =
                            window.OBR.b.Pa(b, "font-family");
                        n.lineHeight = window.OBR.b.Pa(b, "line-height");
                        n.textTransform = window.OBR.b.Pa(b, "text-transform");
                        n.letterSpacing = window.OBR.b.Pa(b, "letter-spacing");
                        n.display = "block";
                        n.visibility = "hidden";
                        var p = window.OBR.b.Pa(b, "padding-right").replace("px", ""),
                            q = window.OBR.b.Pa(b, "padding-left").replace("px", "");
                        n.width = b.clientWidth - q - p + "px";
                        k.appendChild(m);
                        n = void 0;
                        for (p = m.innerText || m.textContent; 0 < l && m.offsetHeight > l && 0 < p.length;) p = p.substring(0, p.length - 1), m.innerHTML = p,
                            n = !0;
                        0 === p.length ? n = !1 : (l = m.offsetHeight, Ja(m, n), l < m.offsetHeight && (p = p.substring(0, p.length - 1), m.innerHTML = p, Ja(m, n)));
                        l = n;
                        !0 === l ? (m = m.innerText || m.textContent, d ? (c = {
                            Hl: c,
                            Mm: m
                        }, m = void 0 === c.Mm ? "" : c.Mm, c = m.length / (void 0 === c.Hl ? "" : c.Hl).length < (void 0 === c.threshold ? .5 : c.threshold) ? "" : m) : c = m, b.innerHTML = c) : !1 === l && (window.OBR.i.log("Truncation - External CSS broke the calculation, truncation is canceled."), window.OBR.error({
                            name: "obm-TruncationError",
                            message: "External CSS broke the calculation, truncation is canceled."
                        }));
                        k.parentNode.removeChild(k)
                    }
                }
            }
            var d = void 0 === d ? !1 : d;
            var e = window.OBR.b.getElementsByClassName(void 0 === b ? "ob-rec-text" : b, a);
            0 === window.OBR.b.getElementsByClassName("ob-touch-strip-layout", a).length ? c() : (0, window.setTimeout)(c, 1E3)
        };
        La = function(a) {
            var b = !1;
            (a = a.querySelector(".ob-widget")) && a.attributes["data-dynamic-truncate"] && "true" === a.attributes["data-dynamic-truncate"].value && (b = !0);
            return b
        };
        OBR._jsc.Ma = function(a, b, c, d) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !1 : d;
            var e = window.OBR.b.w(b);
            if (e) {
                var f = La(e);
                (f || c || d) && (0, window.setTimeout)(function() {
                    var a = window.OBR.b.w(b);
                    f && Ka(a, "ob-rec-text");
                    c && Ka(a, "ob-rec-source");
                    d && Ka(a, "ob-rec-description")
                }.bind(a), 500)
            } else window.OBR.i.log("truncation - no container found for widgetIdx=" + b)
        };
        Na = function() {
            function a() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
        };
        Pa = function(a, b) {
            a = Object.assign({
                timestamp: +new Date,
                sessionId: a.c,
                url: window.OBR.f.Jg,
                cheqSource: 1
            }, b);
            window.OBR.xa.get(Oa, a)
        };
        Ra = function(a) {
            var b = Qa;
            a = Object.assign({
                cheqEvent: 2
            }, a);
            Pa(b, a)
        };
        Sa = function() {
            this.timeout = !1;
            this.c = this.sj = null
        };
        Ua = function() {
            var a = window.OBR.zf;
            window.OBR.i.log("FD calling Cheq");
            return new window.Promise(function(b, c) {
                var d = (0, window.setTimeout)(function() {
                    window.OBR.f.Tc || (a.timeout = !0, window.OBR.f.zg = Qa.c, c({
                        type: "timeout",
                        Os: null
                    }))
                }, 500);
                a.c = Date.now();
                a.sj = function(c) {
                    c = (0, window.encodeURIComponent)(c);
                    window.OBR.f.Tc = c;
                    (0, window.clearTimeout)(d);
                    var e = Date.now() - a.c;
                    Qa.m = e;
                    b(c)
                };
                var e = Ta(function(a) {
                    Ra({
                        error: !0
                    });
                    c({
                        type: "error",
                        Os: a.message
                    })
                });
                window.document.getElementsByTagName("head")[0].appendChild(e)
            })
        };
        Ta = function(a) {
            var b = "https:" === window.location.protocol ? "https:" : "http:",
                c = window.document.createElement("script");
            c.className = "ct_invocation_65349 ct_invocation_65349_0";
            c.setAttribute("jsonp", "OBR.extern.onCheqResponse");
            c.src = b + "//ob.cheqzone.com/placement_invocation?id=65349&idx=0";
            c.onerror = a;
            return c
        };
        Va = function() {
            window.OBR.i.log("FD Process started");
            this.m = new window.OBR.Ba;
            this.Uj = !1;
            this.Uc = 0;
            this.c = 5;
            var a = window.OBR.f;
            a: {
                var b = window.document.querySelector(".OUTBRAIN");
                if (b && (b = b.getAttribute("data-src"))) try {
                    var c = (0, window.decodeURIComponent)(b);
                    break a
                } catch (d) {}
                c = void 0
            }
            c = c || window.OBR.b.qe("property", "og:url", "meta", "content") || window.OBR.b.qe("rel", "canonical", "link", "href") || window.location.href;
            b = window.document.createElement("a");
            b.href = c;
            a.Jg = b.hostname
        };
        Ya = function(a) {
            var b = window.OBR.b.pa("OB-FDE", null);
            window.OBR.i.log("FD is needed: " + b);
            switch (b) {
                case "true":
                    Wa(a);
                    break;
                case "false":
                    a.c = 0;
                    A(a);
                    break;
                default:
                    Xa(a).then(function(b) {
                        b ? Wa(a) : (a.c = 2, A(a))
                    }).catch(function(b) {
                        window.OBR.error({
                            name: "TCheck",
                            message: b
                        });
                        A(a)
                    })
            }
        };
        Xa = function(a) {
            return new window.Promise(function(b) {
                var c = (0, window.btoa)(window.OBR.f.Jg);
                window.OBR.i.log("FD call TCheck");
                var d = (0, window.setTimeout)(function() {
                    window.OBR.i.log("FD TCheck timeout");
                    this.c = 1;
                    b(!1)
                }.bind(a), 200);
                window.OBR.xa.get(Za + "/" + c, null, function(c) {
                    if (1 !== a.c) {
                        (0, window.clearTimeout)(d);
                        window.OBR.i.log("FD got response from TCheck");
                        var e = !1;
                        if (c) try {
                            e = JSON.parse(c).result
                        } catch (g) {
                            window.OBR.i.log(g)
                        }
                        b(e)
                    }
                })
            })
        };
        Wa = function(a) {
            Ra();
            Ua().then(function() {
                window.OBR.i.log("FD got response from Cheq");
                a.Uc = 1;
                a.c = 4;
                A(a)
            }).catch(function(b) {
                "timeout" === b.type ? (a.Uc = 2, window.OBR.i.log("FD Cheq timeout"), a.c = 3) : (a.Uc = 5, window.OBR.i.log("FD Cheq error"));
                A(a)
            })
        };
        $a = function(a, b) {
            a.m.add("onFDStatusReady", b)
        };
        A = function(a) {
            var b = Qa,
                c = {
                    cheqEvent: 0,
                    exitReason: a.c
                };
            b.m && (c.responseTime = b.m);
            Pa(b, c);
            a.Uj = !0;
            a.m.G("onFDStatusReady");
            window.OBR.i.log("FD finished")
        };
        ab = function(a) {
            if (a) {
                a = window.OBR.b.w(a.C());
                var b = ["ob-dynamic-rec-container"].map(function(a) {
                    return "." + a
                }).join(",");
                return [].slice.call(a.querySelectorAll(b))
            }
        };
        bb = function(a) {
            if (a) return [window.OBR.b.w(a.C())]
        };
        db = function() {
            this.startTime = Date.now();
            this.m = [];
            cb(this)
        };
        cb = function(a) {
            window.OBR.f.Fm && window.addEventListener("unload", function() {
                a.o()
            })
        };
        eb = function() {
            this.o = new db;
            this.bc = window.OBR.R.fd();
            this.Qb = this.Qb.bind(this);
            this.mh = this.mh.bind(this);
            this.Pe = this.Pe.bind(this);
            this.m = ab;
            this.c = bb
        };
        fb = function() {
            this.o = {
                x: 0,
                y: 0,
                width: Math.max(window.document.documentElement.clientWidth, window.innerWidth || 0),
                height: Math.max(window.document.documentElement.clientHeight, window.innerHeight || 0)
            }
        };
        hb = function(a) {
            var b = gb;
            [].slice.call(a.Ma.querySelectorAll(".ob-lazy-bgimg, .ob-lazy-img")).forEach(function(c) {
                c = {
                    callback: b.m.bind(b),
                    callbackParams: [a, c],
                    element: c,
                    rootMargin: "" + a.rootMargin,
                    threshold: [0, .5, 1],
                    unobserve: !0
                };
                (new window.OBR.IntersectionObserver(c)).observe()
            })
        };
        ib = function(a) {
            if (a) {
                var b = !1,
                    c = window.NaN,
                    d = window.NaN,
                    e = !1,
                    f = a.querySelectorAll("a");
                f && 0 !== f.length && (f.forEach(function(a) {
                    a.addEventListener("click", function(a) {
                        if (e) return a.preventDefault(), !1
                    })
                }), a.addEventListener("mousedown", function(f) {
                    b = !0;
                    c = f.clientX;
                    d = a.scrollLeft;
                    e = !1;
                    a && (a.style.cursor = "grabbing", a.classList.add("ob-grabbing"))
                }), f = function() {
                    b && (b = !1, a && (a.style.cursor = "", a.classList.remove("ob-grabbing")), a.scrollLeft = a.scrollLeft, e = a.scrollLeft !== d)
                }, a.addEventListener("mouseup",
                    f), a.addEventListener("mouseleave", f), a.addEventListener("mousemove", function(e) {
                    b && (a.scrollLeft = d + (c - e.clientX))
                }), window.OBR.b.K("\n  .ob-grabbing {\n    scroll-behavior: auto !important;\n  }\n  .ob-grabbing a {\n    cursor: grabbing !important;\n    scroll-snap-align: none !important;\n  }\n  .ob-grabbing > * {\n    scroll-snap-align: none !important;\n  }\n  .ob-grabbing img {\n    -webkit-user-drag: none;\n    -khtml-user-drag: none;\n    -moz-user-drag: none;\n    -o-user-drag: none;\n    user-drag: none;\n  }\n  "))
            }
        };
        jb = function(a, b) {
            this.s = a;
            this.A = b;
            this.c = window.OBR.f.Hh + "logger/v1/widget/";
            this.o = this.s.h("req_id", -1) + (new Date).getTime();
            this.m = !0
        };
        ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        };
        u = "undefined" != typeof window && window === this ? this : "undefined" != typeof window.global && null != window.global ? window.global : this;
        ba = function() {
            var a = 0;
            return function(b) {
                return "jscomp_symbol_" + (b || "") + a++
            }
        }();
        OBR._jsc.kb = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };
        if ("function" == typeof Object.setPrototypeOf) lb = Object.setPrototypeOf;
        else {
            var mb;
            a: {
                var nb = {
                        Pn: !0
                    },
                    ob = {};
                try {
                    ob.__proto__ = nb;
                    mb = ob.Pn;
                    break a
                } catch (a) {}
                mb = !1
            }
            lb = mb ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        OBR._jsc.pb = lb;
        w("Array.prototype.find", function(a) {
            return a ? a : function(a, c) {
                a: {
                    var b = this;b instanceof String && (b = String(b));
                    for (var e = b.length, f = 0; f < e; f++) {
                        var g = b[f];
                        if (a.call(c, g, f, b)) {
                            a = g;
                            break a
                        }
                    }
                    a = void 0
                }
                return a
            }
        });
        w("String.prototype.startsWith", function(a) {
            return a ? a : function(a, c) {
                var b = ha(this, a, "startsWith"),
                    e = b.length,
                    f = a.length;
                c = Math.max(0, Math.min(c | 0, b.length));
                for (var g = 0; g < f && c < e;)
                    if (b[c++] != a[g++]) return !1;
                return g >= f
            }
        });
        var qb = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        };
        w("Object.assign", function(a) {
            return a || qb
        });
        w("Object.is", function(a) {
            return a ? a : function(a, c) {
                return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c
            }
        });
        w("Array.prototype.includes", function(a) {
            return a ? a : function(a, c) {
                var b = this;
                b instanceof String && (b = String(b));
                var e = b.length;
                c = c || 0;
                for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                    var f = b[c];
                    if (f === a || Object.is(f, a)) return !0
                }
                return !1
            }
        });
        w("String.prototype.includes", function(a) {
            return a ? a : function(a, c) {
                return -1 !== ha(this, a, "includes").indexOf(a, c || 0)
            }
        });
        w("Promise", function(a) {
            function b(a) {
                this.m = 0;
                this.H = void 0;
                this.c = [];
                var b = this.o();
                try {
                    a(b.resolve, b.reject)
                } catch (k) {
                    b.reject(k)
                }
            }

            function c() {
                this.c = null
            }

            function d(a) {
                return a instanceof b ? a : new b(function(b) {
                    b(a)
                })
            }
            if (a) return a;
            c.prototype.m = function(a) {
                null == this.c && (this.c = [], this.A());
                this.c.push(a)
            };
            c.prototype.A = function() {
                var a = this;
                this.o(function() {
                    a.P()
                })
            };
            var e = u.setTimeout;
            c.prototype.o = function(a) {
                e(a, 0)
            };
            c.prototype.P = function() {
                for (; this.c && this.c.length;) {
                    var a = this.c;
                    this.c = [];
                    for (var b = 0; b < a.length; ++b) {
                        var c = a[b];
                        a[b] = null;
                        try {
                            c()
                        } catch (l) {
                            this.H(l)
                        }
                    }
                }
                this.c = null
            };
            c.prototype.H = function(a) {
                this.o(function() {
                    throw a;
                })
            };
            b.prototype.o = function() {
                function a(a) {
                    return function(e) {
                        c || (c = !0, a.call(b, e))
                    }
                }
                var b = this,
                    c = !1;
                return {
                    resolve: a(this.Qa),
                    reject: a(this.A)
                }
            };
            b.prototype.Qa = function(a) {
                if (a === this) this.A(new TypeError("A Promise cannot resolve to itself"));
                else if (a instanceof b) this.Ta(a);
                else {
                    a: switch (typeof a) {
                        case "object":
                            var c = null != a;
                            break a;
                        case "function":
                            c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    c ? this.ra(a) : this.P(a)
                }
            };
            b.prototype.ra = function(a) {
                var b = void 0;
                try {
                    b = a.then
                } catch (k) {
                    this.A(k);
                    return
                }
                "function" == typeof b ? this.Ya(b, a) : this.P(a)
            };
            b.prototype.A = function(a) {
                this.Y(2, a)
            };
            b.prototype.P = function(a) {
                this.Y(1, a)
            };
            b.prototype.Y = function(a, b) {
                if (0 != this.m) throw Error("Cannot settle(" + a + ", " + b + "): Promise already settled in state" + this.m);
                this.m = a;
                this.H = b;
                this.ha()
            };
            b.prototype.ha = function() {
                if (null != this.c) {
                    for (var a = 0; a < this.c.length; ++a) f.m(this.c[a]);
                    this.c =
                        null
                }
            };
            var f = new c;
            b.prototype.Ta = function(a) {
                var b = this.o();
                a.be(b.resolve, b.reject)
            };
            b.prototype.Ya = function(a, b) {
                var c = this.o();
                try {
                    a.call(b, c.resolve, c.reject)
                } catch (l) {
                    c.reject(l)
                }
            };
            b.prototype.then = function(a, c) {
                function e(a, b) {
                    return "function" == typeof a ? function(b) {
                        try {
                            f(a(b))
                        } catch (z) {
                            d(z)
                        }
                    } : b
                }
                var f, d, g = new b(function(a, b) {
                    f = a;
                    d = b
                });
                this.be(e(a, f), e(c, d));
                return g
            };
            b.prototype.catch = function(a) {
                return this.then(void 0, a)
            };
            b.prototype.be = function(a, b) {
                function c() {
                    switch (e.m) {
                        case 1:
                            a(e.H);
                            break;
                        case 2:
                            b(e.H);
                            break;
                        default:
                            throw Error("Unexpected state: " + e.m);
                    }
                }
                var e = this;
                null == this.c ? f.m(c) : this.c.push(c)
            };
            b.resolve = d;
            b.reject = function(a) {
                return new b(function(b, c) {
                    c(a)
                })
            };
            b.race = function(a) {
                return new b(function(b, c) {
                    for (var e = OBR._jsc.fa(a), f = e.next(); !f.done; f = e.next()) d(f.value).be(b, c)
                })
            };
            b.all = function(a) {
                var c = OBR._jsc.fa(a),
                    e = c.next();
                return e.done ? d([]) : new b(function(a, b) {
                    function f(b) {
                        return function(c) {
                            g[b] = c;
                            h--;
                            0 == h && a(g)
                        }
                    }
                    var g = [],
                        h = 0;
                    do g.push(void 0), h++, d(e.value).be(f(g.length -
                        1), b), e = c.next(); while (!e.done)
                })
            };
            return b
        });
        w("String.prototype.endsWith", function(a) {
            return a ? a : function(a, c) {
                var b = ha(this, a, "endsWith");
                void 0 === c && (c = b.length);
                c = Math.max(0, Math.min(c | 0, b.length));
                for (var e = a.length; 0 < e && 0 < c;)
                    if (b[--c] != a[--e]) return !1;
                return 0 >= e
            }
        });
        w("Array.prototype.entries", function(a) {
            return a ? a : function() {
                return ia(this, function(a, c) {
                    return [a, c]
                })
            }
        });
        Function.prototype.bind || (Function.prototype.bind = function(a) {
            function b() {
                return e.apply(this instanceof c ? this : a, d.concat(Array.prototype.slice.call(arguments)))
            }

            function c() {}
            if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var d = Array.prototype.slice.call(arguments, 1),
                e = this;
            this.prototype && (c.prototype = this.prototype);
            b.prototype = new c;
            return b
        });
        window.NodeList && !window.NodeList.prototype.forEach && (window.NodeList.prototype.forEach = function(a, b) {
            b = b || window;
            for (var c = 0; c < this.length; c++) a.call(b, this[c], c, this)
        });
        (function() {
            if (!window.btoa) {
                var a = {
                    Ud: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    encode: function(b) {
                        var c = "",
                            d = 0;
                        for (b = a.Nn(b); d < b.length;) {
                            var e = b.charCodeAt(d++);
                            var f = b.charCodeAt(d++);
                            var g = b.charCodeAt(d++);
                            var h = e >> 2;
                            e = (e & 3) << 4 | f >> 4;
                            var k = (f & 15) << 2 | g >> 6;
                            var l = g & 63;
                            (0, window.isNaN)(f) ? k = l = 64: (0, window.isNaN)(g) && (l = 64);
                            c = c + this.Ud.charAt(h) + this.Ud.charAt(e) + this.Ud.charAt(k) + this.Ud.charAt(l)
                        }
                        return c
                    },
                    Nn: function(a) {
                        a = a.replace(/\r\n/g, "\n");
                        for (var b = "", d = 0; d < a.length; d++) {
                            var e =
                                a.charCodeAt(d);
                            128 > e ? b += String.fromCharCode(e) : (127 < e && 2048 > e ? b += String.fromCharCode(e >> 6 | 192) : (b += String.fromCharCode(e >> 12 | 224), b += String.fromCharCode(e >> 6 & 63 | 128)), b += String.fromCharCode(e & 63 | 128))
                        }
                        return b
                    }
                };
                window.btoa = function(b) {
                    return a.encode(b)
                }
            }
        })();
        (function() {
            function a(a, b) {
                for (var c = e.length, f; c--;) f = e[c], f.entryType != a || void 0 !== b && f.name != b || e.splice(c, 1)
            }

            function b(a, b) {
                for (var c = 0, f = e.length, d = []; c < f; c++) e[c][a] == b && d.push(e[c]);
                return d
            }
            var c = Date.now ? Date.now() : +new Date,
                d = window.performance || {},
                e = [],
                f = {};
            d.now || (d.now = d.webkitNow || d.c || d.m || function() {
                return (Date.now ? Date.now() : +new Date) - c
            });
            d.mark || (d.mark = d.Y || function(a) {
                var b = {
                    name: a,
                    entryType: "mark",
                    startTime: d.now(),
                    duration: 0
                };
                e.push(b);
                f[a] = b
            });
            d.measure || (d.measure = d.ha ||
                function(a, b, c) {
                    var g, h;
                    if (void 0 !== c && void 0 === f[c]) throw new SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + c + "' does not exist.");
                    if (void 0 !== b && void 0 === f[b]) throw new SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + b + "' does not exist.");
                    f[b] ? g = f[b].startTime : g = 0;
                    f[c] ? h = f[c].startTime : h = d.now();
                    e.push({
                        name: a,
                        entryType: "measure",
                        startTime: g,
                        duration: h - g
                    })
                });
            d.getEntriesByType || (d.getEntriesByType = d.P || function(a) {
                return b("entryType", a)
            });
            d.getEntriesByName ||
                (d.getEntriesByName = d.H || function(a) {
                    return b("name", a)
                });
            d.clearMarks || (d.clearMarks = d.o || function(b) {
                a("mark", b)
            });
            d.clearMeasures || (d.clearMeasures = d.A || function(b) {
                a("measure", b)
            });
            window.performance = d
        })();
        if (window.OB_releaseVer && "103057" !== window.OB_releaseVer) throw !0;
        window.OB_releaseVer = "103057";
        window.OBR = window.OBR || {};
        window.OBR.u = window.OBR.u || [];
        window.OBR.Bc = window.OBR.Bc || {};
        window.OBR$ = function(a) {
            return window.document.getElementById(a)
        };
        var rb = /^(http[s]{0,1}):\/\/([^\/]*)outbrain(img){0,1}\.com/i,
            B = {
                Wd: window.performance,
                marks: [],
                Ms: [],
                Vi: function(a, b) {
                    a = this.Wi(a, b);
                    this.Wd.mark(a);
                    this.marks.push(a);
                    return a
                },
                Wi: function(a, b) {
                    return "ob-mark-" + (b ? "0-" : "1-") + a
                },
                measure: function(a, b, c) {
                    var d = "ob-measure-" + a,
                        e = Array.prototype.slice.call(arguments);
                    e.shift();
                    e.unshift(d);
                    this.Ms.push(d);
                    this.Wd.measure.apply(this.Wd, e);
                    return d
                },
                Gc: function(a) {
                    return this.Vi(a, !0)
                },
                nc: function(a) {
                    return this.Vi(a)
                },
                vc: function(a, b) {
                    var c = this.Wi(a,
                        b);
                    return this.marks.find(function(a) {
                        return a === c
                    })
                },
                Bw: function() {
                    var a = [],
                        b = this.Wd.getEntriesByType("measure");
                    b && 0 < b.length && (a = b.filter(function(a) {
                        return a.name.startsWith("ob-measure-")
                    }));
                    return a
                },
                Pq: function() {
                    return window.performance.getEntriesByType("resource").filter(function(a) {
                        return rb.test(a.name)
                    })
                }
            };
        window.OBR.Performance = window.OBR.Performance || B;
        var sb = {
            fa: {
                un: "start",
                Zm: "c_search",
                yf: "c_found",
                wf: "odb",
                xi: "mv",
                tn: "odb_r",
                sn: "mv_r",
                gg: "render",
                xn: "rendered",
                cn: "fchunk_rendered",
                dn: "fchunk_mv_rendered",
                vn: "mv_rendered",
                yi: "card_observed"
            },
            Vd: {
                start: void 0,
                Ag: void 0
            },
            hw: [],
            la: function(a, b, c, d) {
                return a + "-" + b + "-" + c + (d ? "_" + d : "")
            },
            Dw: function() {
                return B.Pq()
            },
            Fs: function() {
                this.Vd.start = B.Gc(this.fa.un)
            },
            Bs: function() {
                this.Vd.Ag || (this.Vd.Ag = B.Gc(this.fa.Zm))
            },
            As: function(a, b) {
                return B.nc(this.la(this.fa.yf, a, b))
            },
            rl: function(a, b) {
                var c = this.la(this.fa.yf,
                    a, b);
                a = this.As(a, b);
                B.measure(c, a)
            },
            Es: function(a, b) {
                return B.Gc(this.la(this.fa.wf, a, b))
            },
            Cs: function(a, b, c) {
                return B.Gc(this.la(this.fa.xi, a, b, c))
            },
            Ks: function(a, b) {
                var c = this.la(this.fa.wf, a, b),
                    d = B.vc(this.la(this.fa.yf, a, b));
                a = this.Es(a, b);
                B.measure(c, d, a)
            },
            Is: function(a, b, c) {
                var d = this.la(this.fa.sn, a, b, c);
                a = B.vc(this.la(this.fa.xi, a, b, c), !0);
                B.measure(d, a)
            },
            Js: function(a, b) {
                var c = this.la(this.fa.tn, a, b);
                a = B.vc(this.la(this.fa.wf, a, b), !0);
                b = B.nc(c);
                B.measure(c, a, b)
            },
            ql: function(a, b, c) {
                return B.Gc(this.la(this.fa.gg,
                    a, b, c))
            },
            Em: function(a, b, c) {
                return this.ql(a, b, c)
            },
            Ls: function(a, b, c) {
                var d = this.la(this.fa.xn, a, b, c);
                a = B.vc(this.la(this.fa.gg, a, b, c), !0);
                b = B.nc(d);
                B.measure(d, a, b)
            },
            Hs: function(a, b, c) {
                a = this.la(this.fa.cn, a, b, c);
                b = B.nc(a);
                B.measure(a, this.Vd.Ag, b)
            },
            tl: function(a, b, c) {
                c = this.la(this.fa.vn, a, b, c);
                a = B.vc(this.la(this.fa.yi, a, b), !0);
                b = B.nc(c);
                B.measure(c, a, b)
            },
            sl: function(a, b, c) {
                var d = this.la(this.fa.dn, a, b, c);
                a = B.vc(this.la(this.fa.gg, a, b, c), !0);
                b = B.nc(d);
                B.measure(d, a, b)
            },
            Gs: function(a, b) {
                a = this.la(this.fa.yi,
                    a, b);
                b = B.Gc(a);
                B.measure(a, b)
            }
        };
        window.OBR.ka = window.OBR.ka || sb;
        (function(a) {
            function b() {
                this.v()
            }
            var c = a,
                d, e;
            b.prototype.v = function(b) {
                c = b || a;
                d = [];
                e = (new Date).getTime()
            };
            b.prototype.startTime = function() {
                return e
            };
            b.prototype.log = function(a) {
                var b = ((new Date).getTime() - e) / 1E3;
                1E3 > d.length && d.push(b + " >" + a)
            };
            b.prototype.printLog = function() {
                if (c.f.Ir) window.console.log(d.join("\n"));
                else {
                    var a = c.b.re();
                    a && (a.innerHTML = d.join("<br>"), a.style.display = "block")
                }
                return d.join("\n")
            };
            a.i = a.i || new b;
            a.printLog = a.i.printLog
        })(window.OBR);
        ja.prototype.add = function(a, b) {
            if ("string" === typeof a && "function" === typeof b) {
                var c = {};
                c.name = a;
                c.pc = b;
                this.c.push(c)
            }
        };
        ja.prototype.G = function(a, b, c, d) {
            b = b || [];
            c = !!c;
            this.m || window.OBR.uk.Tp(a, d);
            window.OBR.i.log("event fire:" + a);
            for (var e = 0, f = this.c.length; e < f; e += 1) {
                d = this.c && this.c[e] ? this.c[e].name : "";
                var g = this.c && this.c[e] ? this.c[e].pc : null;
                if (d === a && g) try {
                    g.apply(this, b)
                } catch (h) {
                    window.OBR.i.log("fire event *" + a + "* error: " + h), window.OBR.error(h)
                }
            }!0 === c && ka(this, a)
        };
        ja.prototype.Sb = function() {
            this.c = []
        };
        window.OBR.Ba = ja;
        (function(a, b, c) {
            function d() {
                h = {}
            }

            function e(b) {
                b && b.event && "function" === typeof b.func ? f(b).forEach(function(a) {
                    c.add(b.event + "_" + a, b.func);
                    h[b.event] = !0
                }) : a.i.log("Bad global event" + b)
            }

            function f(b) {
                b = b.widgetId;
                var c = [];
                b && ("string" === typeof b ? c = [b] : Array.isArray(b) && (c = b));
                a.i.log("global event widget ids: " + c);
                return c
            }
            var g = {
                    onHtmlReturn: "widgetDataReturned",
                    afterRender: "widgetRendered"
                },
                h;
            d.prototype.v = function(e, f, d) {
                a = e;
                b = f;
                c = d;
                c.m = !0;
                h = {}
            };
            d.prototype.Tp = function(a, f) {
                a = g[a];
                if (f && a) {
                    var d =
                        b.OBREvents;
                    if (d && !(1 > d.length))
                        for (var k = 0, l = d.length; k < l; k += 1) e(d.shift());
                    h[a] && c.G(a + "_" + f.D(), [{
                        idx: f.C(),
                        widgetId: f.D(),
                        widgetJsId: f.h("widgetJsId", f.D()),
                        container: window.OBR.b.w(f.C()),
                        recsNumber: f.h("tcr", -1),
                        variantId: f.h("abTestVal", "")
                    }])
                }
            };
            d.prototype.oa = function() {
                this.v(window.OBR, window, new window.OBR.Ba)
            };
            window.OBR.uk = new d
        })(window.OBR, window, new window.OBR.Ba);
        window.OBR.b = window.OBR.b || function() {
            var a = {},
                b = {},
                c = window.document,
                d = window.OBR,
                e = null;
            a.Hw = "function" === typeof window.URLSearchParams;
            b.da = function() {
                a.xb = d;
                return a
            };
            b.v = function(a) {
                d = a
            };
            b.Ub = function() {
                return function() {}
            };
            b.fs = function() {
                var a = " -webkit- -moz- -o- -ms- ".split(" ");
                return "ontouchstart" in window || window.DocumentTouch && window.document instanceof window.DocumentTouch ? !0 : window.matchMedia(["(", a.join("touch-enabled),("), "heartz)"].join("")).matches
            };
            b.Wb = function() {
                var a = window.OBR.R.ya();
                return a.width > a.height ? "landscape" : "portrait"
            };
            b.zk = function() {
                var a = window.jQuery;
                return void 0 !== a ? !(/1\.(0|1|2|3|4)\.(0|1)/.test(a.fn.jquery) || /^1\.1/.test(a.fn.jquery) || /^1\.2/.test(a.fn.jquery) || /^1\.3/.test(a.fn.jquery)) : !1
            };
            b.w = function(a) {
                return null === a || (0, window.isNaN)(a) ? null : d.W("outbrain_widget_" + a)
            };
            b.re = function() {
                return d.W("ob_holder")
            };
            b.yj = function(a) {
                var c = b.re();
                null === c && (c = d.b.createElement("div", "ob_holder"), c.style.display = "none", a ? d.b.insertBefore(c, a) : window.document.body.appendChild(c));
                return c
            };
            b.Gk = function(a, c) {
                var e = d.W(a);
                e || (e = d.b.createElement("iframe", a), a = e.style, a.display = "none", a.width = "1px", a.height = "1px", e.src = c || "about:blank", (c = b.re()) || (c = b.Vb()), d.b.cb(e, c))
            };
            b.Vb = function() {
                if (c.body) return c.body;
                var a;
                var b = d.b.Ca("", "", "body", !0);
                0 >= b.length ? a = c.lastChild : a = b[0];
                return a
            };
            b.createElement = function(a, b, e, d) {
                var f;
                a = c.createElement(a);
                "string" === typeof b && a.setAttribute("id", b);
                "string" === typeof e && (a.style.cssText = e);
                for (f in d) d.hasOwnProperty(f) && a.setAttribute(f,
                    d[f]);
                return a
            };
            b.K = function(a) {
                if (d.f.nb === d.f.Ji) try {
                    c.createStyleSheet().cssText = a
                } catch (k) {
                    window.OBR.i.log(k)
                } else {
                    var b = c.createElement("style"),
                        e = c.body ? "string" === typeof c.body.style.WebkitAppearance : !1;
                    b.type = "text/css";
                    c.getElementsByTagName("head")[0].appendChild(b);
                    b[e ? "innerText" : "innerHTML"] = a
                }
            };
            b.ta = function(a, b, e, k, l) {
                a = c.createElement("script");
                a.type = d.f.ls;
                a.src = b;
                a.charset = "UTF-8";
                a.async = !!e;
                a.defer = !1;
                k && d.b.X(a, "load", function(a) {
                    var b = a.target;
                    b && (0, window.setTimeout)(function() {
                            b.parentNode.removeChild(b)
                        },
                        3E3)
                });
                typeof l === d.f.pc && d.b.X(a, "load", l);
                return a
            };
            b.mw = function(a, b) {
                a = d.b.createElement("link", a);
                a.setAttribute("rel", "stylesheet");
                a.setAttribute("type", d.f.zp);
                b && a.setAttribute("href", b);
                return a
            };
            b.Ko = function(a) {
                var b = d.W("ob_iframe");
                b && (b.src = a)
            };
            b.Oh = function(a) {
                a = (0, window.isNaN)(a) ? 1E5 : a;
                return Math.floor(Math.random() * a)
            };
            b.Lt = function(a, b, c) {
                return a.replace(b, c)
            };
            b.za = function(a) {
                var b = c.getElementsByTagName("head");
                try {
                    if (b && 0 < b.length) b[0].appendChild(a);
                    else {
                        var e = c.getElementsByTagName("script");
                        e[0].insertBefore(a, e[0].firstChild)
                    }
                } catch (k) {
                    d.i.log("Err insertToHead:" + k)
                }
            };
            b.Cw = function(a) {
                a = a || window.OBR;
                return "function" !== typeof a.Ba ? (window.OBR.i.log("namespace.EventManager not function"), null) : new a.Ba
            };
            b.ia = function(a) {
                return (0, window.encodeURIComponent)(a)
            };
            b.zc = function(a) {
                return null !== a
            };
            b.fc = function(a) {
                var b = window.document.createElement("div");
                b.innerHTML = a;
                return b.firstChild
            };
            b.Yr = function(a) {
                var c = !1;
                if (b.od(a)) return !1;
                var e = a.Cb().recMode || "";
                a = a.Cb().dynamicWidgetLayout ||
                    "";
                e = d.f.Pt[e] || "";
                "2" === e && "1" === (d.f.Qt[a] || "") && (c = !0);
                c || "1" !== e && "3" !== e || (c = !0);
                return c
            };
            b.od = function(a) {
                return void 0 === a || null === a
            };
            b.hs = function(a) {
                return b.od(a) || "" === a
            };
            b.getElementsByClassName = function(a, c) {
                c || (c = window.document);
                return c.getElementsByClassName ? c.getElementsByClassName(a) : b.Ca("class", a, "*", !0, !0, c)
            };
            b.Ca = function(a, e, d, k, l, m) {
                var f;
                var g = [];
                d = d || "*";
                k = !!k;
                l = !!b.hs(l);
                d = m ? m.getElementsByTagName(d) : c.getElementsByTagName(d);
                m = 0;
                for (f = d.length; m < f; m += 1) {
                    var h = "class" ===
                        a ? d[m].className : d[m].getAttribute(a);
                    null !== h && (!1 === l && (h = h.toLowerCase(), e = e.toLowerCase()), (h = "" === a ? !0 : k ? -1 < h.indexOf(e) : h === e) && g.push(d[m]))
                }
                return g
            };
            b.ib = function(a, b, c) {
                a.removeEventListener ? a.removeEventListener(b, c, !0) : a.detachEvent && a.detachEvent("on" + b, c)
            };
            b.X = function(a, b, c) {
                a.addEventListener ? a.addEventListener(b, c, !0) : a.attachEvent && typeof a.attachEvent === d.f.pc && a.attachEvent("on" + b, function() {
                    c.call(a)
                })
            };
            b.cb = function(a, b) {
                try {
                    b.appendChild(a)
                } catch (h) {
                    d.i.log("Fail insert into Dom:" +
                        h)
                }
            };
            b.$e = function(a) {
                a = d.W(a);
                !b.od(a) && b.zc(a.parentNode) && a.parentNode.removeChild(a)
            };
            b.cc = function(a) {
                a && window.OBR.b.zc(a.parentNode) && a.parentNode.removeChild(a)
            };
            b.insertBefore = function(a, b) {
                return b && b.parentNode ? b.parentNode.insertBefore(a, b) : null
            };
            b.isArray = function(a) {
                return a instanceof Array ? !0 : "[object Array]" === Object.prototype.toString.call(a)
            };
            b.lb = function(a, b) {
                var c = /^htt(p|ps)?:\/\/127\.0\.0\.1(:\d\d\d\d)?(\/|$)/i,
                    e = /^https?:\/\/simulator\.[\w]*\.service\.[\w]*\.consul/i;
                return /^htt(p|ps)?:\/\/([\w\-]*|[\w\-]*\.[\w\-]*)\.outbrain\.com(:\d\d\d\d)?(\/|$)/i.test(a) ||
                    c.test(a) || e.test(a) ? a : b
            };
            b.gv = function(a) {
                a = a.replace(/^(\s*)/g, "");
                var b = c.createElement("div");
                b.innerHTML = a;
                return b.childNodes
            };
            b.ca = function(a, b) {
                return a ? a.getAttribute(b) : null
            };
            b.Ra = function(a, b, c) {
                a && a.setAttribute(b, c)
            };
            b.Et = function(a) {
                a && a.removeAttribute("noscroll")
            };
            b.yk = function(a, b) {
                return (new RegExp("(^|\\s)" + b + "(\\s|$)")).test(a.className)
            };
            b.M = function(a, b) {
                var c = new RegExp("[ '\"|]" + b + "[ '\"|]");
                a && !c.test("|" + a.className + "|") && (a.className += " " + b)
            };
            b.T = function(a, b) {
                a && typeof b ===
                    d.f.fi && (a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b + "(\\b|$)", "gi"), " "))
            };
            b.tb = function(a, b) {
                if (a && typeof b === d.f.fi)
                    if (a.classList) a.classList.toggle(b);
                    else {
                        var c = a.className.split(" "),
                            e = c.indexOf(b);
                        0 <= e ? c.splice(e, 1) : c.push(b);
                        a.className = c.join(" ")
                    }
            };
            b.U = function(a, b) {
                var c = window.OB_amp ? window.context : window;
                a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                try {
                    var e = new RegExp("[\\?&]" + a + "=([^&#]*)", "i");
                    var f = e.exec((0, window.decodeURIComponent)(c.location.href.replace(/\+/g,
                        " ")));
                    return null === f ? b : f[1]
                } catch (m) {
                    return b
                }
            };
            b.ep = function(a) {
                "string" === typeof a && 0 < a.indexOf("#") && (a = a.substr(0, a.lastIndexOf("#")));
                return a
            };
            b.tj = function(a) {
                var b = d.f.Ua + "/strip_default.png";
                a.src !== b && (a.alt = "", a.title = "", a.src = b, a.parentElement && (a.parentElement.style.overflow = "hidden"))
            };
            b.Hp = function() {
                var a = null,
                    b;
                if ("string" === typeof window.OB_MP_feed) a = window.OB_MP_feed;
                else if ((b = c.getElementsByTagName("head")) && 0 < b.length) {
                    var e = b[0].getElementsByTagName("link");
                    for (b = 0; b < e.length; b +=
                        1) {
                        var d = e[b];
                        if (null !== d.type && ("application/rss+xml" === d.type || "application/atom+xml" === d.type) && null !== d.href && "" !== d.href) {
                            a = d.href;
                            break
                        }
                    }
                }
                return a
            };
            b.Pa = function(a, b) {
                var c = "";
                if (!a || !b) return c;
                window.getComputedStyle ? (a = window.document.defaultView.getComputedStyle(a, null)) && (c = a.getPropertyValue(b)) : a.currentStyle && (b = b.replace(/\-(\w)/g, function(a, b) {
                    return b.toUpperCase()
                }), c = a.currentStyle[b]);
                return c
            };
            b.vs = function(a) {
                if (!a) return null;
                if (window.getComputedStyle) var b = window.document.defaultView.getComputedStyle(a,
                    null);
                else if (a.currentStyle) var c = a.currentStyle;
                return function(e) {
                    var f = null;
                    b ? f = b.getPropertyValue(e) : c && (e = e.replace(/\-(\w)/g, function(a, b) {
                        return b.toUpperCase()
                    }), f = a.currentStyle[e]);
                    return f
                }
            };
            b.$t = function() {
                var a = b.re();
                if (b.zc(a)) {
                    var c = d.b.createElement("span", "ob_a");
                    b.insertBefore(c, a);
                    c.innerHTML = ".";
                    var e = b.Pa(c, "color");
                    b.$e("ob_a");
                    c = d.b.createElement("a", "ob_a");
                    c.setAttribute("href", "void(0)");
                    c.innerHTML = ".";
                    b.insertBefore(c, a);
                    a = b.Pa(c, "color");
                    b.$e("ob_a");
                    e = "rgb(0, 0, 0)" ===
                        e || "#000000" === e ? "#555" : e;
                    b.K(".ob-tcolor{color:" + e + "} .ob-lcolor{color:" + a + "} .ob-bgtcolor{background-color:" + e + "} .item-link-container:hover .ob-tcolor{border-color:" + e + "} " + (window.document.addEventListener ? "" : ".odb_li:hover .ob-zapping-icon,.odb_div:hover .ob-zapping-icon,.item-container:hover .ob-zapping-icon,.ob-dynamic-rec-container:hover .ob-zapping-icon,.odb_li:hover .ob-textual-zapping-icon,.odb_div:hover .ob-textual-zapping-icon,.item-container:hover .ob-textual-zapping-icon,.ob-dynamic-rec-container:hover .ob-textual-zapping-icon{display:none !important;}"))
                }
            };
            b.dk = function(a) {
                var c = b.qe("property", "og:url", "meta", "content");
                null === c && (c = b.qe("rel", "canonical", "link", "href"));
                null !== c || a || (c = window.location.href);
                null === c && (c = "");
                return c
            };
            b.qe = function(a, c, e, d) {
                var f = null;
                a = b.Ca(a, c, e, !1);
                null !== a && 0 < a.length && (f = a[0].getAttribute(d));
                return f
            };
            b.rj = function(a) {
                var c = a.l("tracking", !1);
                var e = a.l("isDMPEnabled", !0) && !a.h("oo", !1);
                var f = a.l("filterDMP", "");
                var l = a.l("comScoreEnabled", !0);
                var m = a.h("pid", "");
                var n = a.fh();
                var p = "";
                var q = a.dh("");
                var r = a.h("gdpr",
                        "0") + "",
                    z = d.f.Ge && "1" === r;
                "" !== a.h("cnsnt", "") && "" !== q && (p = "&obcnsnt=" + q.toString());
                q = d.f.vl;
                !1 === c && (!0 === l || !0 === e) && !1 === q && !n && (a = a.h("enu", ""), l = d.f.Ua + "/widgetOBUserSync/obUserSync.html#pid=" + m + "&dmpenabled=" + e + "&filterDMP=" + f + "&csenabled=" + (l && !0) + "&d=" + a + p + "&gdpr=" + r + "&cmpNeeded=" + z, b.Gk(d.f.Ee, l), l = d.W(d.f.Ee)) && (d.f.vl = !0)
            };
            b.Yq = function() {
                var a = b.ye(8);
                "string" === typeof window.name && ("" === window.name || -1 < window.name.indexOf("frame")) ? (window.name = a, a = window.name) : "string" === typeof window.name &&
                    "" !== window.name && (a = window.name);
                return a = d.b.ia(a.substring(0, 9))
            };
            b.ye = function(a) {
                var b;
                var c = [];
                a = "number" === typeof a ? a : 8;
                for (b = 0; b < a; b += 1) c.push("0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(61 * Math.random())));
                return c.join("")
            };
            b.xj = function(a) {
                for (var b = "", c = 0; c < a.length; c++) b = b.concat(a[c] ? "1" : "0");
                return (0, window.parseInt)(b, 2)
            };
            b.xc = function(a) {
                if (null === a.offsetParent || 0 === a.offsetHeight || 0 === a.offsetWidth || 0 === a.clientHeight || 0 === a.clientWidth) return !1;
                var c = b.vs(a);
                if ("none" === c("display") || "hidden" === c("visibility")) return !1;
                c = (0, window.parseInt)(c("padding-top"), 10) + (0, window.parseInt)(c("padding-bottom"), 10);
                return 0 === a.clientHeight - c ? !1 : (a = a.getElementsByTagName("a")[0]) && "none" === b.Pa(a, "display") ? !1 : !0
            };
            b.Yg = function(a) {
                for (var b in d.Bc)
                    if (d.Bc.hasOwnProperty(b) && d.Bc[b].B === a) return d.Bc[b];
                return null
            };
            b.Ow = function(a) {
                for (var b in a)
                    if (a.hasOwnProperty(b)) return !1;
                return !0
            };
            b.Jr = function(a, b) {
                for (b = b.parentNode; null !== b;) {
                    if (b === a) return !0;
                    b = b.parentNode
                }
                return !1
            };
            b.oc = function(a, b) {
                return "function" !== typeof a ? null : void 0 === b ? a() : a(b)
            };
            b.Mw = function() {
                return "Microsoft Internet Explorer" === window.navigator.appName
            };
            b.Bp = function(a, b) {
                return a * b
            };
            b.$j = function(a) {
                if (!a || "" === a) return [];
                a = a.replace("", "").replace("http://", "").replace("https://", "").replace("www.", "").replace("www2.", "").split("/");
                a.pop();
                return 0 < a.length ? a : []
            };
            b.qq = function(a, c) {
                a = b.$j(a);
                var e = [],
                    d;
                if (c >= a.length) c = a.join(".");
                else {
                    e[0] = a[0];
                    for (d = 1; d <= c; d += 1) e[d] =
                        a[d];
                    c = e.join(".")
                }
                return c
            };
            b.Iq = function() {
                return "http" + ("https:" === c.location.protocol ? "s" : "")
            };
            b.zr = function(a, b) {
                b.parentNode.insertBefore(a, b.nextSibling)
            };
            b.Gq = function() {
                var a = c.getElementById("widgetVersionSync");
                if (null === a) {
                    a = b.createElement("iframe", "widgetVersionSync");
                    var e = b.createElement("div", null, "display:none; height:0px; width:0px; border:none;");
                    e.appendChild(a);
                    b.Vb().appendChild(e)
                }
                return a
            };
            b.Hv = function(a) {
                var c = window.OB_releaseVer;
                (0, window.isNaN)(c) || (0, window.isNaN)(a) ||
                c >= a || (a = b.Iq() + "://widgets.outbrain.com/external/sync/outbrainjs.html?needToBeVer=" + a.toString(), b.Gq().src = a)
            };
            b.io = function(a) {
                a = a.l("widgetVersionSync", 0);
                (0, window.isNaN)(a) || "" === a || (a = (0, window.parseInt)(a, 10) || 0, b.Hv(a))
            };
            a.eh = function() {
                if (e) return e;
                try {
                    var a = window.localStorage;
                    a.setItem("OBtst", "");
                    a.removeItem("OBtst");
                    var b = a
                } catch (h) {
                    b = {
                        nf: {},
                        setItem: function(a, b) {
                            this.nf[a] = b
                        },
                        removeItem: function(a) {
                            this.nf[a] = void 0
                        },
                        getItem: function(a) {
                            return "undefined" !== typeof this.nf[a] ? this.nf[a] :
                                null
                        }
                    }
                }
                return e = b
            };
            b.Kb = function(b, c) {
                a.eh().setItem(b, c)
            };
            b.Lq = function() {
                var a = Math.round(16777215 * Math.random());
                return "rgb(" + (a >> 16) + ", " + (a >> 8 & 255) + ", " + (a & 255) + ")"
            };
            b.pa = function(b, c) {
                return (b = a.eh().getItem(b)) ? b : c
            };
            b.Bj = function(b) {
                a.eh().removeItem(b)
            };
            b.xv = function(a) {
                var b = {};
                b.cpv = a[0];
                b.convPerc = a[1];
                b.convPixel = a[2];
                b.vidId = a[3];
                b.player = a[4];
                b.pos = a[5];
                b.adId = a[6];
                b.docEncId = a[7];
                b.origUrl = a[8];
                b.trafficUrl = a[9];
                b.duration = a[10];
                b.widgetIdx = a[11];
                b.title = a[12];
                b.sourceName = a[13];
                b.reqId =
                    a[14];
                b.platform = a[15];
                b.lang = a[16];
                b.uuid = a[17];
                b.publisherId = a[18];
                b.sourceId = a[19];
                b.widgetNumberId = a[20];
                b.campaignId = a[21];
                b.location = a[22];
                b.timestamp = a[23];
                return b
            };
            b.assign = function(a, b) {
                for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                return a
            };
            b.Nr = function(a) {
                var c = !1;
                b.od(a) || (c = a.nodeName && "span" === a.nodeName.toLowerCase());
                return c
            };
            b.Vp = function(a, b) {
                if ("_blank" === (b.getAttribute("target") || "_self"))
                    for (var c in a) d.b.Ke("obm-firePixelBeforeRedirect", "pixel fired before redirect", !1,
                        10), b = window.document.createElement("img"), b.setAttribute("src", a[c]), b.setAttribute("height", "1"), b.setAttribute("width", "1"), window.document.body.appendChild(b);
                else d.b.Ke("obm-firePixelBeforeRedirectCancelled", "pixel cancelled redirect on same page ", !1, 10)
            };
            b.Ke = function(a, b, c, e) {
                ((0, window.isNaN)(e) || 0 === d.b.Oh(e)) && window.OBR.error({
                    name: a,
                    message: b,
                    Nw: !0 === c
                })
            };
            b.Ll = function(a) {
                return a && a.split("&").reduce(function(a, b) {
                    b = b.split("=");
                    a[b[0]] = b[1];
                    return a
                }, {})
            };
            b.gi = function(a) {
                return Object.keys(a).reduce(function(b,
                    c) {
                    b.push(c + "=" + (0, window.encodeURIComponent)(a[c]));
                    return b
                }, []).join("&")
            };
            b.Jh = function(a) {
                if (a && "string" === typeof a && (a = a.split("-")) && 2 === a.length) return {
                    ki: a[1],
                    pi: a[0]
                }
            };
            b.v(window.OBR);
            return b
        }();
        window.OBR.ec = function(a, b, c, d, e, f, g, h, k) {
            var l = this;
            var m = 0;
            k = "function" === typeof k ? k : window.OBR.b.Bp;
            l.start = function() {
                m += 1;
                if (window.OBR.b.oc(a, m)) window.OBR.b.oc(b, m);
                else if (window.OBR.b.oc(h, m)) window.OBR.b.oc(d, m);
                else if (m === f && 1E3 !== f) window.OBR.b.oc(d, m);
                else {
                    window.OBR.b.oc(c, m);
                    var n = g ? k(m, e) : e;
                    (0, window.setTimeout)(function() {
                        l.start()
                    }, n)
                }
            };
            l.start()
        };
        window.OBR.Dj = window.OBR.Dj || {
            Kr: function() {
                return "complete" === window.document.readyState
            },
            Rr: function() {
                return "interactive" === window.document.readyState || this.Kr()
            }
        };
        window.OBR.Mg = function() {
            var a = {},
                b = [];
            a.add = function(a) {
                b.push(a)
            };
            a.remove = function(a) {
                b.splice(a, 1)
            };
            a.top = function() {
                return 0 < b.length ? b.shift() : null
            };
            a.eb = function() {
                return 0 >= b.length
            };
            a.Aw = function() {
                return b
            };
            a.bp = function() {
                b = []
            };
            return a
        };
        window.OBR.Promise = function() {
            function a(a, e) {
                b.then = "resolve" === a ? function(a) {
                    a && a(e)
                } : function(a, b) {
                    b && b(e)
                };
                b.resolve = b.reject = function() {
                    throw Error("Promise already completed.");
                };
                for (var d, g = 0; d = c[g++];) d[a] && d[a](e);
                c = void 0
            }
            var b = {},
                c = [];
            b.then = function(a, b) {
                c.push({
                    resolve: a,
                    reject: b
                })
            };
            b.resolve = function(b) {
                a("resolve", b)
            };
            b.reject = function(b) {
                a("reject", b)
            };
            return b
        };
        window.OBR.kn = function(a) {
            var b = {},
                c = null,
                d, e;
            b.onClickOrAutoplay = void 0;
            b.onDisplayReady = void 0;
            b.onError = void 0;
            b.fetch = function(a) {
                null === c ? (c = a, e && e(c, this), e = null) : (c = a, window.OBR.Yb.il([this]))
            };
            b.shown = function(b) {
                d = b;
                window.OBR.Yb && window.OBR.Yb.Gv(a.widgetId, a.playerId, d)
            };
            b.stopTimer = function() {
                if (this.Jm) {
                    window.clearInterval(this.Jm);
                    var b = window.document.querySelector('[data-ob-player-id="' + a.playerId + '"] .timerNumber');
                    b && (b.textContent = b.parentElement.getAttribute("data-time"))
                }
            };
            b.fullscreenChange =
                function(b) {
                    window.OBR.Yb.$q(b, a.playerId)
                };
            b.placed = function() {
                window.OBR.Yb.Ev(a.playerId)
            };
            b.js = function(a) {
                e = a;
                c && e(c, this)
            };
            b.Xb = function() {
                return a
            };
            b.ww = function() {
                return d
            };
            b.Ew = function() {
                return a.when
            };
            return b
        };
        window.OBR.Ri = function() {
            var a = {},
                b = "00.000",
                c = null,
                d = null,
                e = 0;
            a.start = function() {
                null === c && (c = new Date);
                null !== d && (e += new Date - d)
            };
            a.stop = function() {
                var a = new Date(new Date - c - e),
                    g = a.getUTCSeconds();
                a = a.getUTCMilliseconds();
                d = new Date;
                return b = (9 < g ? g : "0" + g) + "." + (99 < a ? a : 9 < a ? "0" + a : "00" + a)
            };
            return a
        };
        window.OBR.uj = window.OBR.uj || {
            copy: function(a) {
                var b = window.document.createElement("textarea");
                b.value = a;
                b.setAttribute("readonly", "");
                b.style.position = "absolute";
                b.style.left = "-9999px";
                window.document.body.appendChild(b);
                if (window.navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                    b.contentEditable = !0;
                    b.readOnly = !0;
                    a = window.document.createRange();
                    a.selectNodeContents(b);
                    var c = window.getSelection();
                    c.removeAllRanges();
                    c.addRange(a);
                    b.setSelectionRange(0, 999999)
                } else b.select();
                window.document.execCommand("copy");
                window.document.body.removeChild(b)
            }
        };
        window.OBR.Xc = window.OBR.Xc || function(a, b, c) {
            var d;
            return function() {
                var e = this,
                    f = arguments,
                    g = c && !d;
                (0, window.clearTimeout)(d);
                d = (0, window.setTimeout)(function() {
                    d = null;
                    c || a.apply(e, f)
                }, b);
                g && a.apply(e, f)
            }
        };
        window.OBR.f = window.OBR.f || function() {
            var a = {},
                b = {},
                c = window.OBR,
                d = window;
            b.qn = "opera";
            b.Ji = "msie";
            b.Di = "firefox";
            b.zi = "chrome";
            b.Oi = "safari";
            b.pn = "mozilla";
            b.Bi = "edge";
            b.vo = "boolean";
            b.fi = "string";
            b.Vw = "object";
            b.ov = "undefined";
            b.Uw = "number";
            b.pc = "function";
            b.Ee = "ob_iframe";
            b.Lk = !0;
            b.$w = 0;
            b.tf = "outbrain_widget_";
            b.ls = "text/javascript";
            b.zp = "text/css";
            b.Fd = d;
            b.qw = window.document;
            b.bs = void 0 !== window.document.createElement("script").async;
            b.Wl = d.OB_ampReferrer ? d.OB_ampReferrer : window.document.referrer;
            b.Vl = c.b.ia(b.Wl);
            b.us = window.document.location.href;
            b.Rw = c.b.ia(b.us);
            b.Qc = !1;
            b.Cd = "";
            b.tg = window.navigator.userAgent.toLowerCase();
            b.Re = window.navigator.platform.toLowerCase();
            var e = b.tg;
            b.nb = /edge/.test(e) ? b.Bi : /opera/.test(e) ? b.qn : /msie/.test(e) ? b.Ji : /firefox/.test(e) ? b.Di : /chrome/.test(e) ? b.zi : /safari/.test(e) ? b.Oi : b.pn;
            b.nd = /iphone|ipad|ipod/.test(e) && !d.navigator.standalone && b.nb !== b.Oi || /fbav|fban|gsa|twitter/.test(e);
            b.$f = /fbav|fban/.test(e) ? "facebook" : /gsa/.test(e) ? "google" : /twitter/.test(e) ?
                "twitter" : "";
            b.ua = !!/(iphone|ipod|symbian|android|windows ce|blackberry|palm|ipad)/.test(e);
            b.Ye = "";
            b.ph = "Microsoft Internet Explorer" === window.navigator.appName || "Netscape" === window.navigator.appName && null !== /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(window.navigator.userAgent);
            b.Sk = b.tg.match(/msie 8/) || b.tg.match(/msie 7/);
            b.mt = window.OB_platformType || null;
            b.Ie = "number" === typeof b.mt;
            b.im = null;
            b.Ij = null;
            b.cv = function() {
                b.Ie && b.im && b.Ij && (b.im(), b.Ij())
            };
            b.Dq = function() {
                switch (b.Ej) {
                    case "prod":
                        return c.b.lb(c.b.U("wiodb",
                            b.O + "odb." + f), b.O + "odb." + f);
                    case "sim":
                        return c.b.lb(b.O + "odb-sim.outbrain.com", "");
                    default:
                        return c.b.lb(c.b.U("wiodb", b.O + "odb." + f), b.O + "odb." + f)
                }
            };
            b.Bq = function() {
                switch (b.Ej) {
                    case "prod":
                        return c.b.lb(c.b.U("wiodb", b.O + "mv." + f), b.O + "mv." + f);
                    case "sim":
                        return c.b.lb(b.O + "mv-sim.outbrain.com", "");
                    default:
                        return c.b.lb(c.b.U("wiodb", b.O + "mv." + f), b.O + "mv." + f)
                }
            };
            b.hc = "string" === typeof d.OB_releaseVer ? d.OB_releaseVer : "0";
            b.Tw = !0 === d.OB_disable_odbl;
            b.Hg = d.OB_extId ? d.OB_extId : null;
            b.Eg = d.OB_ContextKeyValue ?
                d.OB_ContextKeyValue : null;
            b.Ch = "nanoWidget/";
            b.sm = function() {
                b.O = "true" === c.b.U("isForceHttp", "false") ? "http://" : "https://";
                b.Ej = c.b.U("env", "prod");
                b.ir = c.b.lb(c.b.U("wiodb", b.O + "hpr." + f), b.O + "hpr." + f);
                b.xl = b.Dq();
                b.Ps = b.Bq();
                b.Jo = b.O + "storage.outbrain.com/";
                b.Ua = c.b.lb(c.b.U("wihost", b.O + "widgets." + f), b.O + "widgets." + f);
                b.ht = c.b.lb(c.b.U("wiout", b.O + f), b.O + f);
                b.Te = b.O + "log." + g + "/";
                b.Hh = b.O + "eventlog." + f + "/";
                b.Qs = b.Ua + "/" + b.Ch + b.hc + (b.Ie ? "/moduleLT" : "/module");
                b.Bh = b.Ua + "/" + b.Ch + "3rd";
                b.Rs = b.Ua + "/nativeVideoPlayer";
                b.Ns = b.Ua + "/widgetMegaBlocks"
            };
            var f = "outbrain.com";
            var g = "outbrainimg.com";
            b.jt = g;
            b.sm();
            b.Ho = "/blogutils/ExcludeRec.action?bocr=";
            b.Ww = "html";
            b.Ml = b.Ie ? "NANOWDGTLT13" : "NANOWDGT01";
            b.Ir = "object" === typeof d.console;
            b.zm = c.b.ep(c.b.Hp());
            b.lf = null === b.zm ? "" : c.b.ia(b.zm);
            b.vl = !1;
            b.Kk = "true" === c.b.U("widebug", "false");
            b.eq = "true" === c.b.U("forceFeed", "false");
            b.Ig = c.b.U("wixp", null);
            b.ul = "true" === c.b.U("obdraft", !1) ? "&obDraft=true" : "";
            b.mg = !1 !== c.b.U("obAbtest", !1) ? "&obAbtest=" + c.b.U("obAbtest", "") : "";
            b.wj = "true" === c.b.U("obCrDraft", "false") ? "&crDraft=true" : "";
            b.wl = "0" !== c.b.U("obFakeRTB", "0") ? "&fakeRec=RTB&fakeRecSize=" + c.b.U("obFakeRTB", "0") : "";
            b.Oe = "true" === window.OBR.b.U("obPerformance", !1);
            b.Us = "true" === c.b.U("obFakeRtb", !1) ? "&fakeRec=RTB-CriteoUS&testMode=true&fakeRecSize=4" : "";
            b.Wk = "true" === window.OBR.b.U("rtbDesc", !1) ? "&isRtbDescriptionEnabled=true" : "";
            b.Cj = "true" === window.OBR.b.U("desc", !1) ? "&descriptionDisplayEnabled=true" : "";
            b.Th = {
                Sm: window.screen.width,
                vk: window.screen.height
            };
            b.Le =
                0;
            b.Ac = null;
            b.wh = !1;
            b.hm = "data-obscrollable";
            b.Pt = {
                touch_strip: "1",
                odb_dynamic: "2",
                "odb_dynamic_touch-strip": "3"
            };
            b.Qt = {
                "touch-strip": "1"
            };
            b.eo = !!d.OB_ampMode;
            b.Hm = !!d.OB_testMode;
            b.aw = {
                KALTURA: "kaltura",
                BRIGHTCOVE: "brightcove"
            };
            b.ba = {
                hn: "get",
                ea: "post",
                mn: "jsonp"
            };
            b.ui = c.b.Yq();
            b.sh = "true" === c.b.U("widwiz", "false") || "true" === c.b.U("widwizinternal", "false");
            b.Qr = "true" === c.b.U("obgallery", "false");
            b.dr = "function" === typeof d.IntersectionObserver;
            b.Il = !1;
            b.Tb = null;
            b.Tc = null;
            b.zg = null;
            b.hd = !!d.__cmp;
            b.Ge = !!d.__cmp && "function" === typeof d.__cmp;
            b.Tj = function(a) {
                !0 === a.isSecured && "https://" !== b.O && (b.sm(), c.g.v(window.OBR))
            };
            b.yc = !1;
            try {
                b.yc = window.self !== window.top
            } catch (h) {
                b.yc = !0
            }
            b.Fm = "navigator" in window && "sendBeacon" in window.navigator;
            b.Er = "true" === c.b.U("adnginmode", "false");
            b.Se = "navigator" in window && "language" in window.navigator && window.navigator.language;
            b.da = function() {
                a.xb = c;
                return a
            };
            return b
        }();
        (function() {
            function a() {
                this.j = d
            }

            function b(a, b, c) {
                this.url = b;
                this.version = c;
                this.state = 0;
                this.ce = [];
                this.context = this;
                this.Fj = null
            }
            var c, d = {
                vi: "ADNGIN",
                Hf: "POPUPDESCRIPTION",
                Rd: "WHATIS",
                Bf: "FLYTHROUGH",
                dg: "VIDEOPLUGIN",
                cg: "VIDEO",
                If: "POSCUL",
                Qf: "SCROLL",
                Pi: "SCROLLEXTERNAL",
                Nf: "RECINIFRAME",
                Ni: "REGISTER",
                eg: "VIDGET",
                Kf: "PROXY",
                Of: "REFRESHWIDGET",
                Sf: "SKYLANDER",
                Od: "LOADMORE",
                Vv: "DYNAMICTEXTTRUNCATION",
                Zf: "TOPBOX",
                Df: "PAGER",
                Ki: "PAGEREXTERNAL",
                Li: "PAGEREXTERNALNEW",
                bg: "USERZAPPING",
                Md: "INPLAYERWIDGET",
                Mf: "READMORE",
                Lc: "NATIVEVIDEOPLAYER",
                fg: "WIDGETWIZARD",
                Wf: "SWIPELAYOUT",
                ag: "USERACTIONS",
                Ii: "MEGABLOCKS",
                Tf: "SMARTFEED",
                Uf: "STASHRENDERER",
                Hd: "EMBEDDEDARTICLES",
                Jf: "POSITIONREPORT",
                wi: "BALCONY",
                Qd: "STREAMFEED",
                Cf: "FOLLOWTOPICFEED",
                vf: "ADCAROUSEL",
                Ef: "PERFORMANCEMONITOR",
                Rf: "SINGLECARDCAROUSEL",
                xf: "CARDSCAROUSELBOX",
                Lf: "PUBLISHERTOOLS",
                Ff: "PLAYABLEAD",
                Gf: "PODCAST",
                Yf: "TIMELINE",
                Hi: "LISTORY"
            };
            b.prototype.$o = function() {
                if (2 === this.state) this.hl();
                else if (0 === this.state) {
                    var a = window.OBR.b.ta(0, this.url, !0);
                    a.onerror = this.Fj;
                    this.state = 1;
                    window.OBR.b.za(a)
                }
            };
            b.prototype.hl = function() {
                this.state = 2;
                for (var a = 0; a < this.ce.length; a += 1) {
                    var b = this.ce[a];
                    "function" === typeof b.mc && b.mc.call(this.context, b.jo)
                }
                this.ce = []
            };
            b.prototype.zu = function(a) {
                this.url = this.url.replace("$SUFFIX", a ? a.toString().toLowerCase() : "")
            };
            a.prototype.v = function(a, b) {
                c = b ? b : this.m()
            };
            a.prototype.m = function() {
                function a(a) {
                    return window.OBR.f.Qs + "/" + a
                }

                function c(a, c, d) {
                    e[a] || (e[a] = new b(a, c, d))
                }
                var e = {};
                c(this.j.Hf, a("popupDescription.js"), -1);
                c(this.j.Rd, a("whatis.js"), -1);
                c(this.j.bg, a("userZapping.js"), -1);
                c(this.j.Bf, a("flyThrough.js"), -1);
                c(this.j.dg, a("videoPlugin.js"), -1);
                c(this.j.cg, a("video.js"), -1);
                c(this.j.If, a("positionCalculation.js"), -1);
                c(this.j.Nf, a("recInIframe.js"), -1);
                c(this.j.Ni, a("registration.js"), -1);
                c(this.j.Of, a("refreshWidget.js"), -1);
                c(this.j.Sf, a("skyLander.js"), -1);
                c(this.j.Zf, a("topBox.js"), -1);
                c(this.j.Wf, a("swipeLayout.js"), -1);
                c(this.j.Od, a("loadMore.js"), -1);
                c(this.j.Md, a("inPlayerWidget.js"), -1);
                c(this.j.Mf,
                    a("readMore.js"), -1);
                c(this.j.Kf, a("proxy.js"), -1);
                c(this.j.fg, a("widgetWizard.js"), -1);
                c(this.j.Tf, a("smartFeed.js"), -1);
                c(this.j.Uf, a("stashRenderer.js"), -1);
                c(this.j.Hd, a("embeddedArticles.js"), -1);
                c(this.j.Jf, a("positionReport.js"), -1);
                c(this.j.ag, a("userActions/userActions_$SUFFIX.js"), -1);
                c(this.j.eg, window.OBR.f.O + "libs.outbrain.com/vidget/vidget.js", -1);
                c(this.j.vi, window.OBR.f.O + "srv.adngin.com/$SUFFIX.js", -1);
                c(this.j.Qf, a("scroll.js"), -1);
                c(this.j.Pi, window.OBR.f.Bh + "/scroll/scrollExternal.js", -1);
                c(this.j.Df, a("pager.js"), -1);
                c(this.j.Ki, window.OBR.f.Bh + "/pager/pagerExternal.js", -1);
                c(this.j.Li, window.OBR.f.Bh + "/pager/pagerExternalNew.js", -1);
                c(this.j.Lc, window.OBR.f.Rs + "/NVPInjector.min.js", -1);
                c(this.j.Ii, window.OBR.f.Ns + "/widgetMegaBlocks.js");
                c(this.j.wi, a("balcony.js"), -1);
                c(this.j.Qd, a("streamFeed.js"), -1);
                c(this.j.Cf, a("followTopicFeed.js"), -1);
                c(this.j.vf, a("adCarousel.js"), -1);
                c(this.j.Ef, a("performanceMonitor.js"), -1);
                c(this.j.Rf, a("singleCardCarousel.js"), -1);
                c(this.j.xf, a("cardsCarouselBox.js"), -1);
                c(this.j.Lf, a("publisherTools.js"), -1);
                c(this.j.Ff, a("playableAd.js"), -1);
                c(this.j.Gf, a("podcast.js"), -1);
                c(this.j.Yf, a("timeline.js"), -1);
                c(this.j.Hi, window.OBR.f.O + "widgets.outbrain.com/listory/listory.js", -1);
                return e
            };
            a.prototype.Aq = function(a) {
                return c[a].state
            };
            a.prototype.N = function(a) {
                if ("-1" !== window.OBR.f.hc) try {
                    c[a].hl()
                } catch (g) {
                    throw window.OBR.error({
                        name: "obm-MakeHandShakeError",
                        message: "Error in module: " + a + ", Err: " + g,
                        stack: g.stack || "None"
                    }), g;
                }
            };
            a.prototype.c = function(a) {
                return c[a]
            };
            a.prototype.F = function(a, b, c, e, d, m) {
                if (a = this.c(a)) a.zu(d), a.ce.push({
                    mc: b || window.OBR.b.Ub(),
                    jo: e
                }), a.Fj = m, a.context = c, a.$o()
            };
            a.prototype.zq = function(a) {
                for (var b in this.j)
                    if (this.j.hasOwnProperty(b) && this.j[b] === a) return this.j[b];
                return null
            };
            if (!window.OBR.g) {
                var e = new a;
                e.v();
                window.OBR.g = e
            }
        })();
        window.OBR.languageManager = window.OBR.languageManager || function() {
            var a = window.OBR,
                b = {},
                c = {},
                d = [];
            b.el = function(a) {
                return d.hasOwnProperty(a)
            };
            b.qp = function(a) {
                d[a] = {}
            };
            b.Un = function(b, c) {
                d[b] = a.b.assign(d[b], c)
            };
            c.registerModuleLanguage = function(a, c) {
                "string" === typeof a && c && 0 < Object.keys(c).length && (b.el(a) || b.qp(a), b.Un(a, c))
            };
            c.yq = function() {
                return b.el("userActions") ? d.userActions : null
            };
            c.da = function() {
                return b
            };
            return c
        }();
        window.OBR.v = window.OBR.v || void 0;
        window.OBR.W = function(a) {
            return window.document.getElementById(a)
        };
        window.OBR.Ka = window.OBR.Ka || function() {
            var a, b = {},
                c = {},
                d;
            b.v = function(b) {
                a = b = b || window.OBR;
                d = new a.Ba
            };
            b.da = function() {
                return c
            };
            c.fe = function(b) {
                var c;
                var e = 0;
                for (c = b.length; e < c; e += 1) a.b.Ra(b[e], "data-ob-mark", "true"), a.b.Ra(b[e], "data-browser", a.f.nb), a.b.Ra(b[e], "data-os", a.f.Re), d.G("find", [b[e]])
            };
            c.Wj = function() {
                return a.b.Ca("class", "OUTBRAIN", "div", !0)
            };
            c.oq = function(b) {
                var c, e = [],
                    d = [];
                for (c = 0; c < b.length; c++) {
                    var k = b[c];
                    if ("string" === typeof k.containerId)
                        if (a.W(k.containerId)) {
                            var l = a.W(k.containerId);
                            window.OBR.Aa.pp(k, l);
                            d.push(l)
                        } else e.push(b[c])
                }
                window.OB_elements = e;
                return d
            };
            c.Fq = function() {
                var a = [];
                "object" === typeof window.OB_elements && 0 < window.OB_elements.length && (a = window.OB_elements);
                return a
            };
            c.Cq = function() {
                var b = [],
                    d = c.Wj(),
                    g;
                var h = 0;
                for (g = d.length; h < g; h += 1) {
                    var k = a.b.ca(d[h], "data-ob-mark");
                    null !== k && "true" === k || !d[h] || b.push(d[h])
                }
                h = c.Fq();
                if (0 < h.length)
                    for (a.i.log("Array of elements found!"), d = c.oq(h), h = 0, g = d.length; h < g; h += 1) b.push(d[h]);
                return b
            };
            b.ej = function(a) {
                window.OBR.Ka.le ?
                    window.OBR.Ka.le.then(function() {
                        return c.Ng(a)
                    }) : c.Ng(a)
            };
            c.Ng = function(b) {
                a.ka.Bs();
                if (void 0 === b) {
                    var e = !1;
                    a.i.log("searching for containers");
                    new a.ec(function() {
                        return e
                    }, function() {
                        a.i.log("searchSuccess")
                    }, function() {
                        e = a.Dj.Rr();
                        var b = c.Cq();
                        e && a.i.log("checking:(" + e + ")");
                        0 < b.length && (window.OBR.Ka.le ? window.OBR.Ka.le.then(function() {
                            return c.fe(b)
                        }) : c.fe(b))
                    }, d.G("stopSearch"), 50, 1E3, !1)
                } else 0 < (b.length || 0) && c.fe(b)
            };
            b.Lw = function() {
                return 0 < c.Wj().length
            };
            b.bt = function(a) {
                d.add("find", a)
            };
            b.Zw = function(a) {
                d.add("stopSearch", a)
            };
            b.Jj = function() {
                c.Ng(void 0)
            };
            b.Op = function(b) {
                var e = [],
                    d;
                var h = 0;
                for (d = a.u.length; h < d; h += 1) {
                    var k = a.b.w(h);
                    null !== k && ("string" === typeof b && a.b.Ra(k, "data-src", b), a.b.Ra(k, "data-ob-mark", "false"), e.push(k))
                }
                0 < e.length && (a.u = [], c.fe(e))
            };
            b.oa = function() {
                d.Sb();
                a.u = []
            };
            b.v(window.OBR);
            return b
        }();
        var la;
        OBR._jsc.t = ma.prototype;
        OBR._jsc.t.da = function() {
            return {
                ow: this.ig.bind(this),
                jw: this.Ti.bind(this),
                pw: this.Xi.bind(this),
                Gw: this.Zi.bind(this)
            }
        };
        OBR._jsc.t.Fe = function() {
            return this.Ha
        };
        OBR._jsc.t.ig = function() {
            window.document.body ? Aa(this) : (window.OBR.i.log("AdBlock - Don't have body.Stop full check"), this.Ha = this.Ha ? this.Ha : "false", this.c.G("onAdBlockStatusReady", [this.Ha]))
        };
        OBR._jsc.t.Ti = function(a, b) {
            var c = window.OBR.b.Vb();
            return a.map(function(a) {
                a = window.OBR.b.createElement("div", a, b, {
                    "class": a
                });
                a.innerHTML = ".";
                window.OBR.b.cb(a, c);
                return a
            })
        };
        OBR._jsc.t.Xi = function(a) {
            for (var b = [], c = [], d = 0; d < a.length; d += 2) {
                var e = a[d] ? !window.OBR.b.xc(a[d]) : !1,
                    f = a[d + 1] ? window.OBR.b.xc(a[d + 1]) : !1;
                c.push(e);
                e && a.length > d + 1 && b.push(f)
            }
            b.push(!1);
            for (d = 0; d < a.length; d++) window.OBR.b.$e(a[d].id);
            this.jj = window.OBR.b.xj(b);
            this.wg = window.OBR.b.xj(c)
        };
        OBR._jsc.t.Zi = function(a, b) {
            if (b === this.Ja.stopped || b === this.Ja.ni) return !1;
            a = window.OBR.b.getElementsByClassName("ob-p", window.OBR.b.w(a));
            if (0 < a.length)
                for (b = 0; b < a.length; b += 1)
                    if (10 < a[b].offsetHeight && window.OBR.b.xc(a[b])) return !0;
            return !1
        };
        window.OBR.Za = window.OBR.Za || new ma;
        window.OBR.ma = window.OBR.ma || function() {
            var a = {},
                b = {},
                c;
            b.v = function(b) {
                c = b = b || window.OBR;
                a.Gh = new c.Mg;
                a.td = new c.Ba;
                a.kd = !1;
                a.iw = null;
                a.Pj = !0;
                a.Qj = !0
            };
            a.hq = function(b) {
                var e = b.C(),
                    d = c.b.Lt;
                var g = b.Xq();
                var h = c.b.pa("OB-USER-TOKEN", null),
                    k = c.b.pa("OB-USER-TOKEN-CREATION", null),
                    l = window.OBR.Xe.get(),
                    m = c.f.Se && c.f.Se.length ? "&osLang=" + c.f.Se : "",
                    n = c.R.ya(),
                    p = c.controller.Yj();
                n = "&winW=" + n.width + "&winH=" + n.height;
                var q = "&scrW=" + c.f.Th.Sm + "&scrH=" + c.f.Th.vk,
                    r = "" !== c.f.Cd && 0 !== e ? "&t=" + c.f.Cd : "",
                    z = a.wq(b),
                    E = !0 === c.f.Hm || !0 === b.fh(),
                    C = b.hh() ? "&videoId=" + b.hh() : "",
                    D = b.jk() ? "&playerSrcId=" + b.jk() : "",
                    na = b.qc() ? "&api_user_id=" + b.qc() : "",
                    M = c.f.Ig ? "&xp=" + c.b.ia(c.f.Ig) : "",
                    oa = c.f.Kk ? "&wrDebug=true" : "",
                    pa = c.f.eq ? "&forceFeed=true" : "",
                    qa = "true" === c.Za.Fe() ? "&adblck=true" : "&adblck=false",
                    S = c.f.Tc ? "&clss=" + c.f.Tc : "",
                    ra = b.uc() ? b.uc() : c.f.Ml,
                    sa = "https://" === c.f.O ? "&secured=true" : "",
                    ta = b.pe() || c.f.Hg ? "&extid=" + (b.pe() || c.f.Hg) : "",
                    ua = !0 === b.Vk() || c.f.wl ? "&rtbEnabled=true" : "",
                    va = !0 === b.al() ? "&va=true" : "",
                    wa = c.f.Eg ?
                    "&contxtKV=" + c.b.ia(c.f.Eg) : "";
                p = p ? "&cnsnt=" + p : "";
                var xa = c.f.Ge ? "&cmpStat=1" : "&cmpStat=0",
                    ya = null !== b.we() ? "&num=" + b.we() : "";
                S += !S && window.OBR.f.zg ? "&clid=" + window.OBR.f.zg + "&fdu=" + window.OBR.f.Jg : "";
                g = g && "hp" === g ? c.f.ir + "/utils/get?url=$LNK$SRC$VDOID$PLYSRCID&settings=$SET&recs=$REC&widgetJSId=$WID$FEED&key=$KEY$INSTYPE$DUPREQ$APPVER&idx=$IDX&version=$VER&apv=$APV&sig=$SIG&format=$FRT&rand=$RND$LSD$LSDT$PBC$OSLANG$DRFT$FKRTB$ABTEST$RTBENABLED$DESC$RTBDESC$XP$TOKEN$WINDOWSIZE$SCREENSIZE$TST$USRID$CRDRFT$FRCFEED$WRDBG$ADBLCK$CHEQ$SECURED$EXTID$VA$NUM$CNTXT$CMP$CMPSTAT$RID$REID$REV$CID$SPC$MNADS$RECMODE$MNORGANIC$MAXRTB$MAXZRTB$ISZVRTB$MAXBSRTB$ISBSVRTB$VIDEOWIDTH$VIDEOHEIGHT$FAB$ISIFRAME&ref=$REF" :
                    c.f.xl + "/utils/get?url=$LNK$SRC$VDOID$PLYSRCID&settings=$SET&recs=$REC&widgetJSId=$WID$FEED&key=$KEY$INSTYPE$DUPREQ$APPVER&idx=$IDX&version=$VER&apv=$APV&sig=$SIG&format=$FRT&rand=$RND$LSD$LSDT$PBC$OSLANG$DRFT$FKRTB$ABTEST$RTBENABLED$DESC$RTBDESC$XP$TOKEN$WINDOWSIZE$SCREENSIZE$TST$USRID$CRDRFT$FRCFEED$WRDBG$ADBLCK$CHEQ$SECURED$EXTID$VA$NUM$CNTXT$CMP$CMPSTAT$RID$REID$REV$CID$SPC$MNADS$RECMODE$MNORGANIC$MAXRTB$MAXZRTB$ISZVRTB$MAXBSRTB$ISBSVRTB$VIDEOWIDTH$VIDEOHEIGHT$FAB$ISIFRAME&ref=$REF";
                var N = b.Xg();
                g = d(g + ("" !== N && null !== N ? "&fbk=" + N : ""), "$LNK", c.b.ia(b.ga()));
                g = d(g, "$SRC", a.Rq(b));
                g = d(g, "$IDX", e);
                g = d(g, "$SET", !0);
                g = d(g, "$REC", !0);
                g = d(g, "$KEY", ra);
                g = d(g, "$INSTYPE", b.dd() ? "&installationType=" + b.dd() : "");
                g = d(g, "$APPVER", b.ad() ? "&app_ver=" + b.ad() : "");
                g = d(g, "$DUPREQ", z ? "&lastPvTs=" + z : "");
                g = d(g, "$WID", b.D());
                g = d(g, "$VER", c.f.hc);
                g = d(g, "$REF", c.f.Vl);
                g = d(g, "$SIG", c.f.ui);
                g = d(g, "$APV", c.f.Qc);
                g = d(g, "$FRT", b.ck());
                g = d(g, "$RND", c.b.Oh());
                g = d(g, "$DRFT", c.f.ul);
                g = d(g, "$FKRTB", c.f.Us);
                g = d(g, "$DESC", c.f.Cj);
                g = d(g, "$RTBDESC", c.f.Wk);
                g = d(g, "$ABTEST", c.f.mg);
                g = d(g, "$CRDRFT", c.f.wj);
                g = d(g, "$RTBENABLED", ua);
                g = d(g, "$XP", M);
                g = d(g, "$LSD", h ? "&lsd=" + c.b.ia(h) : "");
                g = d(g, "$LSDT", k ? "&lsdt=" + k : "");
                g = d(g, "$PBC", "&pdobuid=" + a.fq(l, h));
                g = d(g, "$OSLANG", m);
                g = d(g, "$TOKEN", r);
                g = d(g, "$WINDOWSIZE", n);
                g = d(g, "$SCREENSIZE", q);
                g = d(g, "$TST", E ? "&testMode=true" : "");
                g = d(g, "$USRID", na);
                g = d(g, "$VDOID", C);
                g = d(g, "$PLYSRCID", D);
                g = d(g, "$WRDBG", oa);
                g = d(g, "$FRCFEED", pa);
                g = d(g, "$ADBLCK", qa);
                g = d(g, "$CHEQ", S);
                g = d(g, "$SECURED", sa);
                g = d(g, "$EXTID",
                    ta);
                g = d(g, "$CNTXT", wa);
                g = d(g, "$VA", va);
                g = d(g, "$NUM", ya);
                g = d(g, "$CMP", p);
                g = d(g, "$CMPSTAT", xa);
                g = d(g, "$FEED", b.bk() ? "&fId=" + b.bk() : "");
                g = d(g, "$RID", b.Zg && b.Zg() ? "&reasonType=" + b.Zg() : "");
                g = d(g, "$REID", b.ah && b.ah() ? "&reasonValueId=" + b.ah() : "");
                g = d(g, "$REV", b.$g && b.$g() ? "&reasonValue=" + b.$g() : "");
                g = d(g, "$CID", b.Tg && b.Tg() ? "&categoryIds=" + c.b.ia(b.Tg()) : "");
                g = d(g, "$SPC", b.lk() ? "&servePc=" + b.lk() : "");
                g = d(g, "$MNADS", b.fk() ? "&maxNumAds=" + b.fk() : "");
                g = d(g, "$RECMODE", b.kk() ? "&recMode=" + b.kk() : "");
                g = d(g, "$MNORGANIC",
                    b.gk() ? "&maxNumOrganicRecs=" + b.gk() : "");
                g = d(g, "$MAXRTB", b.hk() ? "&maxRTB=" + b.hk() : "");
                g = d(g, "$MAXZRTB", b.ik() ? "&maxZRTB=" + b.ik() : "");
                g = d(g, "$ISZVRTB", null !== b.ve() && "undefined" !== b.ve() && void 0 !== b.ve() ? "&isZVRTB=" + b.ve() : "");
                g = d(g, "$MAXBSRTB", b.ek() ? "&maxBSRTB=" + b.ek() : "");
                g = d(g, "$ISBSVRTB", null !== b.ue() && "undefined" !== b.ue() && void 0 !== b.ue() ? "&isBSVRTB=" + b.ue() : "");
                g = d(g, "$VIDEOWIDTH", b.qk() ? "&videoWidth=" + b.qk() : "");
                g = d(g, "$VIDEOHEIGHT", b.pk() ? "&videoHeight=" + b.pk() : "");
                g = d(g, "$FAB", b.sc() ? "&fAB=" +
                    b.sc() : "");
                return g = d(g, "$ISIFRAME", window.OBR.f.yc ? "&iframe=true" : "")
            };
            a.fq = function(a, b) {
                return a ? a === b ? 0 : window.OBR.b.ia(a) : -1
            };
            a.Rq = function(a) {
                var b = "&srcUrl=";
                a = a.mk();
                null !== a && "string" === typeof a && 0 < a.length ? b += c.b.ia(a) : b = 0 < c.f.lf.length ? b + c.f.lf : "";
                return b
            };
            a.rr = function(b, e) {
                var d = e.B,
                    g = e.D(),
                    h = c.b.ta(0, b, !0);
                c.b.X(h, "error", function() {
                    a.td.G("onOdbFail_" + d + "_" + g, [e], !0)
                });
                window.OBR.ka.Ks(g, d);
                c.b.za(h);
                a.td.G("onOdbFire_" + d + "_" + g, [e], !0);
                c.i.log("fire this src " + b)
            };
            a.Cu = function(b) {
                c.f.bs &&
                    (0, window.setTimeout)(function() {
                        a.cm(b.B, b.D())
                    }, 1E4)
            };
            a.cm = function(a, b) {
                c.b.$e("ob_odbCall_" + a + b)
            };
            a.Dr = function() {
                var d = null !== c.Za.Ha;
                if (a.Pj)
                    if (a.Pj = !1, d) c.i.log("AdBlock ODB detected immediately");
                    else {
                        var e = new c.Ri;
                        c.i.log("AdBlock ODB start stopwatch");
                        e.start();
                        za(c.Za, function() {
                            c.i.log("AdBlock ODB detected after " + e.stop());
                            b.G()
                        })
                    }
                return d
            };
            a.Pr = function() {
                var d = window.OBR.$c.Uj;
                if (a.Qj && (a.Qj = !1, !d)) {
                    c.i.log("FD start stopwatch");
                    var e = new c.Ri;
                    $a(c.$c, function() {
                        c.i.log("FD return after " +
                            e.stop());
                        b.G()
                    })
                }
                return d
            };
            a.Iw = function() {};
            a.Hr = function() {
                if (!c.f.hd || null !== c.f.Tb) return !0;
                (0, window.setTimeout)(function() {
                    c.i.log("Second time for consent");
                    null === c.f.Tb && ("" !== c.b.pa("OB-CNSNT", "") ? (c.f.Tb = c.b.pa("OB-CNSNT", ""), c.i.log("Taking consent from LS")) : c.f.hd = !1);
                    b.G()
                }, 300);
                return !1
            };
            b.G = function() {
                if (!0 !== a.kd && a.Dr() && a.Hr() && a.Pr()) {
                    a.kd = !0;
                    var b = a.Gh.top();
                    if (b) {
                        c.i.log("fire odb for " + b.ga());
                        var e = a.hq(b);
                        a.rr(e, b);
                        a.Cu(b)
                    } else a.kd = !1
                }
            };
            b.El = function(b, c) {
                a.td.add("onOdbFire_" +
                    b.B + "_" + b.D(), c)
            };
            b.Dl = function(b, c) {
                a.td.add("onOdbFail_" + b.B + "_" + b.D(), c)
            };
            b.unlock = function(b, c) {
                a.kd = !1;
                a.cm(b, c)
            };
            b.Wt = function(a) {
                !0 === a && (window.OBR.f.Qc = a)
            };
            b.um = function(a) {
                a && (c.f.Cd = a)
            };
            a.wq = function(a) {
                var b = null;
                if (a && 0 == a.C()) {
                    var d = (new Date).getTime();
                    a = c.b.ia(a.ga());
                    var g = c.b.pa("OB-lastPageViewInfo", null);
                    if (g) try {
                        var h = JSON.parse(g);
                        if (h && a === h.url) {
                            var k = d - h.previousRequestTime;
                            72E5 > k && (b = k)
                        }
                    } catch (l) {
                        window.OBR.i("Error parsing last page view info")
                    }
                    c.b.Kb("OB-lastPageViewInfo",
                        JSON.stringify({
                            url: a,
                            previousRequestTime: d
                        }))
                }
                return b
            };
            b.pr = function() {
                c.f.Qc = !1
            };
            b.register = function(d) {
                a.Gh.add(d);
                c.i.log("register odb for " + d.ga());
                b.G()
            };
            b.Bo = function(a) {
                b.unlock(a.B, a.D());
                b.G()
            };
            b.oa = function() {
                a.Gh.bp();
                a.td.Sb();
                a.kd = !1
            };
            b.da = function() {
                a.xb = c;
                return a
            };
            b.v(window.OBR);
            return b
        }();
        window.OBR.controller = window.OBR.controller || function() {
            var a, b = {},
                c = {},
                d;
            b.Me = "manualDataReady";
            b.ol = "manualEditorialDataReady";
            b.vh = "manualClickReady";
            b.v = function(e) {
                a = e = e || window.OBR;
                d = new a.Ba;
                c.sh();
                b.uv()
            };
            b.da = function() {
                return c
            };
            b.ax = function(a) {
                d.add("onHtmlReturn", a)
            };
            b.$l = function(a) {
                d.add("noRecs", a)
            };
            c.lv = function(b) {
                if (a.f.nb !== a.f.zi && a.f.nb !== a.f.Di && !a.f.ua && window.document.querySelectorAll) {
                    var c = a.b.w(b.C()).querySelectorAll(".ob-dynamic-rec-link,A.item-link-container,DIV.item-container > A:first-child,.odb_li .rec-link");
                    for (b = 0; b < c.length; b += 1) {
                        var e = c[b],
                            d = e.getAttribute("onMouseDown");
                        typeof d === a.f.fi && 0 < d.length && e.setAttribute("onTouchStart", d)
                    }
                }
            };
            b.Wa = function(e) {
                a.i.log("rec " + e + " was rendered");
                var d = a.u[e];
                d.sb(!0);
                0 === e && a.b.$t();
                Ga(a.La, d);
                a.b.io(d);
                a.display.wr(d);
                b.Jl(d);
                c.Av(d);
                c.zv(d);
                c.Gj(d);
                c.lv(d);
                c.No(d);
                c.mo(d);
                c.tt(d);
                c.ps(d);
                c.Tn(d);
                d.rh() || d.Ik() || window.OBR.ic.Qb(d)
            };
            b.Uh = function(a, b, c) {
                window.OBR.g.F(window.OBR.g.j.Kf, function(a) {
                    window.OBR.proxy.ss(a, b, c)
                }, this, a)
            };
            c.zv = function(a) {
                1 ===
                    a.h("vid", 0) && b.Uh(a, window.OBR.g.j.eg, c.ft)
            };
            c.mo = function(a) {
                a.Cb().isBalconyEnabled && b.Uh(a, window.OBR.g.j.wi)
            };
            c.tt = function(b) {
                b.bb("publisherTools") && a.g.F(a.g.j.Lf, function(a) {
                    window.OBR.Ql.v(a)
                }, this, b)
            };
            c.ps = function(c) {
                (a.f.Fd.OBLISTORY_ON || c.Cb().enableListory && !0 === c.Cb().enableListory) && b.Uh(c, window.OBR.g.j.Hi, function(a) {
                    window.OBLISTORY && window.OBLISTORY.init(a)
                })
            };
            c.Tn = function(c) {
                var e = c.Ug();
                if (e) {
                    var d = c.xq();
                    a.b.w(c.C()).querySelectorAll(".ob-dynamic-rec-container").forEach(function(a) {
                        a =
                            a.getAttribute("data-pos");
                        d.listings || (d.listings = {});
                        d.listings["" + a] || (d.listings["" + a] = {});
                        d.listings["" + a].clickPixels || (d.listings["" + a].clickPixels = []);
                        d.listings["" + a].clickPixels.push(e);
                        c.yu(d)
                    });
                    b.$d(c)
                }
            };
            b.$d = function(c) {
                var e = this,
                    d = c.C();
                a.b.w(d).querySelectorAll(".ob-dynamic-rec-container").forEach(function(a) {
                    var c = a.getAttribute("data-pos");
                    (a = a.querySelector(".ob-dynamic-rec-link")) && a.addEventListener("click", b.Lm.bind(e, a, d, c))
                })
            };
            c.Gj = function(b) {
                function c(b) {
                    window.AdNgin &&
                        window.AdNgin.rePopulateSlot && window.AdNgin.rePopulateSlot({
                            tagId: b.h("wnid", -1),
                            tagName: b.h("widgetJsId", ""),
                            tagProvider: "outbrain",
                            url: b.ga(),
                            element: a.b.w(b.C())
                        })
                }!0 === b.l("adNginEnabled", !1) && ("" !== b.h("pid", "") ? (window._ngndisable = !0, a.g.F(window.OBR.g.j.vi, c, this, b, b.h("pid", ""), function() {
                    window.OBR.extern.logError("obm-AdNginBlocked", "Blocked Script", !0)
                })) : a.i.log("No pid - no adNgin"))
            };
            c.ft = function(a) {
                window.OB_VIDGET.init(a.currentWidget, a.beforeLoadTime)
            };
            c.Av = function(a) {
                if (a = a.bb("viewability",
                        null))
                    for (var b in a)
                        if (a.hasOwnProperty(b))
                            if (window.OBR.W(b)) {
                                var c = window.OBR.b.ta(0, a[b], !0, !1);
                                window.OBR.b.insertBefore(c, window.OBR.W(b))
                            } else window.OBR.error({
                                name: "ViewabilityPixelError",
                                message: "Missing viewabilty pixel placeholder element"
                            })
            };
            b.Jl = function(a, b) {
                var c = a.l("recMode", ""),
                    e = a.l("dynamicWidgetLayout", "");
                ((void 0 === b ? 0 : b) || -1 < c.indexOf("top-box") || -1 < c.indexOf("bottom-box") && -1 === c.indexOf("bottom-box-vertical") || "odb_dynamic" === c && -1 < e.indexOf("top-box") || -1 < c.indexOf("odb_dynamic_swipe") ||
                    -1 < c.indexOf("odb_dynamic_smartfeed-swipe")) && window.OBR.g.F(window.OBR.g.j.Df, function(a) {
                    window.OBR.Hb.yh(a)
                }, this, a)
            };
            c.Kq = function(a) {
                return Math.floor(Math.random() * a) + 1
            };
            c.Dv = function(b) {
                a.i.log("widget was found");
                b = a.Ic.Pc(b);
                window.OBR.ka.rl(b.D(), b.C());
                !0 === b.Lr() ? a.i.log("Dynamic loader - stop odb!") : a.ma.register(b)
            };
            b.yl = function(e, d) {
                var f = "NA",
                    h = e && e.response ? e.response : null;
                var k = a.b.Yg(d);
                k && k.ld() || (k && k.setData(e), c.Gj(k), h && h.request && h.request.widgetJsId && (f = h.request.widgetJsId),
                    a.ma.um(k.h("t", null)), a.ma.unlock(d, f), a.b.rj(k), k && h && h.documents && (k.sb(!0), Ga(a.La, k), k.nh() ? b.me(b.ol, d, k.D(), e) : (e = Object.assign({}, h.documents), "viewability_actions" in h && (e.reportViewed = h.viewability_actions.reportViewed || ""), b.me(b.Me, d, k.D(), e))), a.ma.G())
            };
            b.me = function(a, b, c, h) {
                d.G(a + b + c, [h, b], !0)
            };
            b.Zl = function(a, b, c, h) {
                d.add(a + b + c, h)
            };
            b.xh = function(c, d) {
                if (null !== c) {
                    var e = c.permalink,
                        f = c.widgetId,
                        k = a.Aa.yp(c);
                    (c.videoId || e && "string" === typeof e) && f && "string" === typeof f && (a.i.log("manual Odb call"),
                        c = b.xs(c), k.idx = c, k.isManualWidget = !0, e = a.Ic.Dg(k), window.OBR.ka.rl(f, c), a.f.Tj(k), e.ju(), a.Bc[c] = e, e.nh() && a.Ab.ro(e), b.Zl(b.Me, c, e.D(), d), a.ma.register(e))
                }
            };
            b.xs = function(b) {
                var c = 0,
                    e = a.f;
                if (b.videoId) return 0;
                var d = b.permalink;
                e.wh = !0 === b.continuousIdx;
                if (null !== e.Ac || 0 !== a.u.length)
                    if (null === e.Ac && (e.Ac = a.u[0].ga()), e.Ac === d || !0 === e.wh) 0 === e.Le && (e.Le = 100), c = e.Le + 1;
                e.Ac = d;
                return e.Le = c
            };
            b.sd = function(c, f) {
                var e = window.OBR.W(a.f.Ee);
                a.b.zc(e) && a.b.zc(e.parentNode) && e.parentNode.removeChild(e);
                a.b.Gk(a.f.Ee);
                "function" === typeof f && d.add(b.vh, f);
                if (null !== c && (f = c.link) && "string" === typeof f) {
                    a.i.log("manual Click");
                    if (null !== f.match(/http(s)?:\/\/.+outbrain.com/i)) c.openInWindow ? window.top.location.href = f : (c = f.split("?"), a.b.Ko(c[0] + "?noRedirect=true&" + c[1]));
                    else throw "Wrong redirect link: " + f;
                    d.G(b.vh);
                    ka(d, b.vh)
                }
            };
            c.$k = function(a) {
                return a.l("stopRater", !1)
            };
            b.Eh = function(e, f) {
                var g;
                window.OBR.i.log("HTML returned");
                f = c.Ne(f);
                (g = a.u[f]) ? (window.OBR.ka.Js(g.D(), g.C()), 0 >= g.Oq(e) && d.G("noRecs", [g]), g.ld() || (g.setData(e), g.vm(), g.ku(), a.ma.um(g.h("t", null)), a.f.ua = "mobile" === g.h("readerPlatform", "desktop") || a.f.Qr, a.f.Ye = g.h("readerPlatform", "desktop"), b.Nj(g, f), c.$k(g) || g.qh() || c.ks(g.te()) ? Ga(a.La, g) : (a.ma.Wt(g.l("apv", !1)), b.Xr(g) ? b.dc(f) : b.ar(g), b.xk(g))), b.Up(g)) : a.i.log("odbHtmlReturned : Widget not found")
            };
            b.Nj = function(a, b) {
                d.G("odbRtn_" + a.D(), [a]);
                d.G("odbRtn_" + b, [a]);
                d.G("onHtmlReturn", [a], !1, a)
            };
            b.xk = function(a) {
                c.Zo(a);
                c.Xo(a);
                c.Wo(a);
                c.ap(a);
                c.Yo(a);
                c.Qo(a);
                c.Uo(a);
                c.Oo(a);
                c.So(a);
                c.Vo(a);
                c.To(a);
                c.Po(a);
                window.OBR.Nd.Pc(a)
            };
            c.Ne = function(a) {
                return 1E3 > a ? a : a % 1E3
            };
            c.ks = function(b) {
                var c = !1;
                null !== b.match(/(<\/?met|<\/?scr)/i) && (c = !0, a.i.log("SECURITY"));
                return c
            };
            b.Up = function(b) {
                c.$k(b) || (a.ma.unlock(b.B, b.D()), a.ma.G())
            };
            c.Xo = function(b) {
                !a.f.ua && b.gs() && b.Zr() ? a.g.F(a.g.j.Sf, function(b) {
                    a.xm.v(b)
                }, this, b) : b.ds() ? a.g.F(a.g.j.Zf, function(b) {
                    a.Lb.v(b)
                }, this, b) : a.f.ua && b.Tr() ? a.g.F(a.g.j.Ii, function(a) {
                    c.dv(a)
                }, this, b) : b.Or() ? a.g.F(a.g.j.Cf, function(a) {
                        window.OBR.cq.init(a)
                    },
                    this, b) : b.md() ? a.g.F(a.g.j.Qd, function(a) {
                    window.OBR.pf.init({
                        Kl: a,
                        Kg: a.l("feedManualChunkFetch", !1),
                        fl: a.l("sideElementFeedLimiter", null)
                    })
                }, this, b) : (b.Zk() || b.Pk()) && a.g.F(a.g.j.Tf, function(a) {
                    window.OBR.ei.init(a)
                }, this, b)
            };
            c.dv = function(a) {
                var b = a.l("megaBlocksData", "{}"),
                    c = {};
                try {
                    c = JSON.parse(b)
                } catch (h) {
                    c = {}, window.OBR.error({
                        name: "TypeError",
                        message: "Error parsing mega blocks json data"
                    })
                }
                c.obuid = a.h("lsd", "");
                c.css = a.l("dynamicCustomCSS", "") + "\n" + a.l("nanoCustomCss", "");
                new window.OBRMega(c)
            };
            c.Wo = function(b) {
                a.f.ua && !0 === b.l("isReadMoreEnabled", !1) && a.g.F(a.g.j.Mf, function(b) {
                    a.wt.v(b)
                }, this, b)
            };
            c.Zo = function(b) {
                a.f.ua && b.rh() && 3 === b.l("dynamicDynamicLayoutVersion", 3) && a.g.F(a.g.j.Wf, function(b) {
                    a.ii.v(b)
                }, this, b)
            };
            c.Yo = function(b) {
                b.Ik() && a.g.F(a.g.j.vf, function(b) {
                    a.Oc.v(b)
                }, this, b)
            };
            c.Uo = function(b) {
                b.Yk() && a.g.F(a.g.j.Rf, function(b) {
                    a.kf.v(b)
                }, this, b)
            };
            c.Oo = function(a) {
                a.Gr() && window.OBR.g.F(window.OBR.g.j.xf, function(a) {
                    window.OBR.mj.v(a)
                }, this, a)
            };
            c.Qo = function(a) {
                a.h("obPerformance") &&
                    (window.OBR.f.Oe = !0, c.jl())
            };
            c.So = function(b) {
                b.Vr() && a.g.F(a.g.j.Ff, function(b) {
                    a.Nl.v(b)
                }, this, b)
            };
            c.To = function(b) {
                b.Uk() && a.g.F(a.g.j.Gf, function(b) {
                    a.Ue.v(b)
                }, this, b)
            };
            c.Po = function(a) {
                if (a.l("isParallax", !1)) {
                    var b = window.document.querySelector(a.l("widgetLocationReference", ""));
                    b && window.OBR.b.zr(window.OBR.b.w(a.C()), b);
                    b = !!window.navigator.platform.match(/iPhone|iPod|iPad/);
                    var c = window.document.querySelector(".ob-parallax-img .ob-rec-image-container"),
                        e = function() {
                            var b = window.innerHeight <=
                                window.innerWidth,
                                e = window.document.querySelector(".ob-parallax-img .ob-rec-image,.ob-parallax-img .ob-rec-rtb-image"),
                                d = c.getBoundingClientRect(),
                                f = d.y * a.l("parallaxSlownessFactor", .66);
                            b && (b = d.y + d.height, f = 0 > d.y ? 0 : window.innerHeight > b ? -4.5 * f : "inherit", e.style.height = "265%");
                            e.style.transform = "translateY(" + f + "px) translateZ(0)"
                        },
                        d = function() {
                            e();
                            (0, window.requestAnimationFrame)(d)
                        };
                    (new window.OBR.IntersectionObserver({
                        element: c,
                        callback: b ? function() {
                            return (0, window.requestAnimationFrame)(d)
                        } : function() {
                            return window.addEventListener("scroll",
                                e)
                        },
                        threshold: [0],
                        unobserve: !0
                    })).observe();
                    b ? (0, window.requestAnimationFrame)(d) : e()
                }
            };
            c.Vo = function(a) {
                a.cs() && window.OBR.g.F(window.OBR.g.j.Yf, function(a) {
                    window.OBR.Im.v(a)
                }, this, a)
            };
            c.ap = function(a) {
                var b = (a = window.OBR.b.w(a.C())) && a.querySelector(".sponsorship-image");
                null != b && 0 > b.classList.toString().indexOf("size") && c.Yn(a.clientWidth, b)
            };
            c.Yn = function(b, c) {
                a.b.M(c, 700 < b ? "large-size" : 430 < b ? "medium-size" : "small-size")
            };
            c.sh = function(b) {
                a.f.sh && a.g.F(a.g.j.fg, function() {
                        a.Tm.v();
                        a.Um.v()
                    }, this,
                    b)
            };
            c.No = function(a) {
                window.OBR.f.yc || 1 === c.Kq(a.l("logLottery", 1E3)) && window.OBR.g.F(window.OBR.g.j.Jf, function() {
                    window.OBR.nt.em()
                })
            };
            c.qs = function() {
                var b = a.b.ta(0, "//widgets.outbrain.com/adngin.js", "true");
                window.document.head.appendChild(b)
            };
            b.Xr = function(a) {
                var b = !0;
                if (a.bl() || a.Mk() || a.aa && a.aa.reason && a.aa.reason === window.OBR.Ab.Ob.Mi) b = !1;
                return b
            };
            b.ar = function(b) {
                var c = b.B;
                b.bl() ? a.g.F(a.g.j.dg, function() {
                    a.sf.vp(c)
                }, this) : b.Mk() && a.display.tr(b)
            };
            b.dc = function(c) {
                c = a.u[c];
                window.OBR.ka.ql(c.D(),
                    c.C());
                a.display.dc(c);
                a.i.log("HTML - Render");
                window.OBR.ka.Ls(c.D(), c.C());
                b.We(c);
                b.xd(c)
            };
            b.xd = function(b) {
                if (!0 === b.bb("inlineNVP", !1)) {
                    var c = {};
                    c.platform = a.f.Ye;
                    c.lang = b.h("lang", "en");
                    c.uuid = b.h("lsd", null);
                    c.publisherId = b.h("pid", null);
                    c.sourceId = b.h("sid", null);
                    c.widgetNumberId = b.h("wnid", null);
                    c.location = b.h("gl", "");
                    c.timestamp = b.gh();
                    c.widgetID = b.h("widgetJsId", b.D());
                    c.reqID = b.h("req_id", "-1");
                    c.pvId = b.h("pvId", "-1");
                    c.obcnst = b.h("obcnsnt", !0);
                    c.did = b.h("did", null);
                    c.gdpr = b.h("gdpr",
                        0);
                    c.cnsnt = b.h("cnsnt", null);
                    a.g.F(a.g.j.Lc, function() {
                        window.NVPInjector.main.widgetLoad(a.b.w(b.C()), b.Cb(), c)
                    })
                }
            };
            b.We = function(b) {
                var c = b.l("dynamicTruncateSource", !1),
                    e = b.l("TruncateDescription", !1);
                a.b.rj(b);
                OBR._jsc.Ma(a.he, b.C(), c, e)
            };
            b.Sl = function(b) {
                a.b.M(b, "ob_clicked");
                var c = a.b.ca(b, "data-redirect");
                null !== c && (b.href = c)
            };
            b.Cc = function(b) {
                c.cp();
                a.Ka.Op(b);
                return !0
            };
            b.oa = function() {
                d.Sb()
            };
            b.cf = function() {
                a.ka.Fs();
                a.Ka.bt(c.Dv);
                a.display.rb(b.Wa);
                a.f.Er && c.qs();
                a.f.Ie ? a.f.cv() : a.Ka.Jj();
                window.OBR.f.Oe && c.jl()
            };
            c.jl = function() {
                a.g.F(a.g.j.Ef, function() {
                    window.OBR.rn.init()
                }, this)
            };
            b.Go = function(b, c, d) {
                if (window.confirm("Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?")) {
                    var e = "https://my.outbrain.com/manage/";
                    e = !1 === d ? e + ("add-zapped-document?publisherId=" + c + "&docUrl=" + a.b.ia(b)) : e + ("add-rule?publisherId=" + c + "&ruleValue=" + a.b.ia(b) + "&ruleType=" + d);
                    b = a.b.ta(0, e, !0);
                    a.b.za(b)
                }
            };
            b.Fo = function(b) {
                window.confirm("Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?") && (b = a.b.ta(0, a.f.xl + a.f.Ho + b + "&index=1&templateIndex=1&sig=" + a.f.ui, !0), a.b.za(b))
            };
            b.Nt = function(a) {
                a && a.ob_exclude_resp && "number" === typeof a.ob_exclude_resp.code && 1 !== a.ob_exclude_resp.code && b.Cc()
            };
            b.Dt = function(b, c) {
                if (c && "function" === typeof c) {
                    var e = "odbRtn_" + b;
                    d.add(e, c);
                    (b = a.Aa.sk(b)) &&
                    b.Jk() && d.G(e, [b])
                }
            };
            b.Ct = function(b, c) {
                if (c && "function" === typeof c) {
                    var e = "odbRtn_" + b;
                    d.add(e, c);
                    (b = a.Aa.Eb(b)) && b.Jk() && d.G(e, [b])
                }
            };
            b.lq = function(b) {
                return (b = a.Aa.sk(b)) ? b.h("tcr", -1) : null
            };
            b.Ec = function() {
                a.Ka.Jj()
            };
            b.Sb = function() {
                a.display.oa();
                a.ma.oa();
                this.oa();
                a.Ka.oa();
                a.La.oa();
                a.uk.oa();
                a.ei && a.ei.cleanUp();
                a.Ab && a.Ab.oa();
                a.Lb && a.Lb.oa();
                a.f.Qc = !1
            };
            b.am = function() {
                this.Sb();
                this.cf()
            };
            c.cp = function() {
                a.ma.pr();
                a.La.oa()
            };
            b.Xl = function(b, d) {
                b = c.Ne(b);
                b = window.OBR.Aa.Eb(b);
                b = c.Pl(b, d);
                a.ma.register(b)
            };
            c.Pl = function(a, b) {
                a.Bt(b);
                window.OBR.Cc && window.OBR.Cc.$h(a);
                return a
            };
            b.uv = function() {
                typeof a.f.Fd.OB_CONSENT === a.f.vo && !1 === a.f.Fd.OB_CONSENT ? (a.f.Tb = "no_consent", a.f.hd = !0) : a.f.hd && typeof a.f.Fd.__cmp === a.f.pc && b.bu()
            };
            b.bu = function() {
                a.f.Fd.__cmp("getConsentData", null, function(b) {
                    b && b.consentData ? (b = a.b.ia(b.consentData), a.i.log("getConsentData: " + b), a.b.Kb("OB-CNSNT", b), a.f.Tb = b) : a.b.Ke("obm-cmp_fail", window.document.location.hostname, !1, 100)
                })
            };
            b.Yj = function() {
                return !0 ===
                    a.f.hd && a.f.Tb ? a.f.Tb : null
            };
            b.pl = function(a, c, g, h, k, l) {
                c && a && (b.sd({
                    link: c,
                    openInWindow: l
                }, null), d.G("videoClick_" + a, [{
                    videoUrl: g,
                    videoId: h,
                    widgetId: a,
                    widgetIdx: k
                }]))
            };
            b.Bl = function(a, b) {
                d.add("videoClick_" + a, b)
            };
            b.ts = function(b, d, g, h) {
                var e = window.OBR.b.w(b);
                e ? c.Xn(e) : window.OBR.error({
                    name: "Error",
                    message: "Cannot find widget element with idx=" + b
                });
                (e = window.OBR.Aa.Eb(c.Ne(b))) ? (e = c.Pl(e, null), e.Iu(d), e.Ku(g), e.Ju(h), c.fv(e), a.ma.register(e)) : window.OBR.error({
                    name: "Error",
                    message: "Cannot find widget with idx=" +
                        b
                })
            };
            c.fv = function(a) {
                a.Du(a.te())
            };
            c.Xn = function(b) {
                a.b.M(b, "ob_scoped")
            };
            b.lo = function(b) {
                b = window.OBR.Aa.Eb(c.Ne(b));
                b.hf(b.Hq());
                a.display.dc(b)
            };
            b.Lm = function(a, b, c) {
                "undefined" !== typeof b && a && "undefined" !== typeof c ? (b = window.OBR.Aa.Eb(b)) ? (b = b.bb("listings")) && b[c] && b[c].clickPixels ? window.OBR.b.Vp(b[c].clickPixels, a) : window.OBR.i.log("fireClickPixel: empty meta or key not defined in clickPixels meta") : window.OBR.i.log("triggerClickPixels: widget or rec container not found") : window.OBR.i.log("triggerClickPixels: Missing param to function")
            };
            b.nv = function(a, b) {
                if ("mraid" in window) try {
                    var c = a.getAttribute("href");
                    b.preventDefault();
                    b.stopPropagation();
                    window.mraid.open(c)
                } catch (h) {
                    window.OBR.error(h)
                }
            };
            b.Eo = function(b) {
                var c = a.La.Ja.ie,
                    e = window.OBR.La;
                b = b.split("?");
                var d = window.OBR.b.Ll(b[1]);
                e.A || (d.cheq = window.OBR.$c.Uc, e.A = !0);
                d.eT = c || e.Ja.ready;
                d.tm = (new Date).getTime() - e.startTime;
                d.wRV = window.OBR.f.hc;
                d.pVis = "2";
                c = window.OBR.b.gi(d);
                e.m.add(b[0] + "?" + c);
                e.o && Ia(e)
            };
            b.v(window.OBR);
            return b
        }();
        window.OBR.display = window.OBR.display || function() {
            var a, b = {},
                c;
            b.v = function(b) {
                a = b = b || window.OBR;
                c = new a.Ba
            };
            b.Dk = function(c, e) {
                c = a.b.gv(c);
                var d = a.b.w(e.B);
                d && c && 0 < c.length && (0 < e.bh() ? b.Kp(d, c[0], e.B, e) : b.hf(c[0], d, e.B, e), a.i.log("element inserted"))
            };
            b.Kp = function(c, e, f, g) {
                function d() {
                    b.gr(c).then(function(a) {
                        b.Au(a, e, f, g).then(function(a) {
                            b.Ip(a)
                        })
                    })
                }
                var k = new a.Promise;
                k.then(function() {
                    b.Lp(c).then(d)
                });
                k.resolve()
            };
            b.Lp = function(b) {
                var c = new a.Promise,
                    d = 1,
                    g = (0, window.setInterval)(function() {
                        .1 >=
                            d ? ((0, window.clearInterval)(g), c.resolve(b)) : (b.style.opacity = d, a.f.Sk ? d = 0 : (b.style.filter = "alpha(opacity=" + 100 * d + ")", d -= .1 * d))
                    }, 10);
                return c
            };
            b.gr = function(b) {
                var c = new a.Promise;
                b.style.opacity = 0;
                (0, window.setTimeout)(function() {
                    c.resolve(b)
                }, 0);
                return c
            };
            b.Au = function(c, e, f, g) {
                var d = new a.Promise;
                b.hf(e, c, f, g);
                (0, window.setTimeout)(function() {
                    d.resolve(c)
                }, 0);
                return d
            };
            b.hf = function(c, e, f, g) {
                e.innerHTML = "";
                a.b.cb(c, e);
                b.Zc(g, f)
            };
            b.Zc = function(a, b) {
                c.G("afterRender", [b], !1, a)
            };
            b.Ip = function(b) {
                var c =
                    new a.Promise,
                    d = .1,
                    g = (0, window.setInterval)(function() {
                        1 <= d ? ((0, window.clearInterval)(g), b.removeAttribute("style"), c.resolve(b)) : (b.style.opacity = d, a.f.Sk ? d = 1 : (b.style.filter = "alpha(opacity=" + 100 * d + ")", d += 1.6 * d))
                    }, 50)
            };
            b.Yw = function(a) {
                c.add("beforeRender", a)
            };
            b.rb = function(a) {
                c.add("afterRender", a)
            };
            b.wr = function(b) {
                a.b.Yr(b) && window.OBR.g.F(window.OBR.g.j.Qf, function(a) {
                    window.OBR.scroll.yh(a)
                }, this, b)
            };
            b.tr = function(c) {
                window.OBR.g.F(window.OBR.g.j.If, a.b.Ub(), this);
                window.OBR.g.F(window.OBR.g.j.Bf,
                    function() {
                        b.bq(c);
                        a.controller.xd(c)
                    }, this)
            };
            b.bq = function(a) {
                b.Dk(window.OBR.ne.mr(a), a);
                window.OBR.ne.v()
            };
            b.dc = function(c) {
                a.i.log("HTML - render widget");
                b.Dk(c.te(), c);
                c.sb(!0)
            };
            b.oa = function() {
                c.Sb()
            };
            b.v(window.OBR);
            return b
        }();
        window.OBR.Xe = window.OBR.Xe || {
            set: Da,
            get: Ca
        };
        window.OBR.Si = window.OBR.Si || function(a) {
            var b = {},
                c = window.OBR,
                d = {},
                e = {},
                f = {},
                g = {},
                h = "",
                k = null,
                l = null,
                m = null,
                n = null,
                p = !1,
                q = 0,
                r = "html",
                z = !1,
                E = 4E3,
                C = "nano",
                D = !1,
                na = !1,
                M = 0,
                oa = !1,
                pa = !1,
                qa = null,
                S = null,
                ra = null,
                sa = null,
                ta = null,
                ua = null,
                va = null,
                wa = !1;
            new window.OBR.Ba;
            var xa = !1,
                ya = -1,
                N = null,
                Ib = null,
                Jb, Kb = null,
                Lb = !0,
                Mb = !1,
                Nb = null,
                Ob = null,
                Pb = null,
                Qb = null,
                Rb = null,
                Sb = !1,
                Tb = null,
                Ub = null,
                Vb = null,
                Wb = null,
                Xb = null,
                Yb = !1,
                Zb = null,
                $b = !1,
                ac = null,
                bc = null,
                cc = null,
                dc = null;
            b.cw = 0;
            b.bw = 1E3;
            b.Kv = 2;
            b.B = a;
            b.ke = "";
            b.aa = {};
            b.Np = {
                slow: 7E3,
                normal: 5E3,
                fast: 3E3,
                qa: 5
            };
            b.setData = function(a) {
                a && a.response && (a = a.response, a.request && (e = a.request), a.settings && (d = a.settings), a.meta && (f = a.meta), a.data && (g = a.data), a.viewability_actions && (f.viewability_actions = a.viewability_actions), a.timestamp && (k = a.timestamp), a.html && (h = a.html), z = !0)
            };
            b.Cb = function() {
                return d
            };
            b.xq = function() {
                return f
            };
            b.yu = function(a) {
                a && "object" === typeof a && (f = a)
            };
            b.l = function(a, b) {
                a = d[a];
                return "undefined" !== typeof a && null !== a ? a : b
            };
            b.bb = function(a, b) {
                a = f[a];
                return "undefined" !==
                    typeof a && null !== a ? a : b
            };
            b.Xb = function(a, b) {
                a = g[a];
                return "undefined" !== typeof a && null !== a ? a : b
            };
            b.Oq = function(a) {
                return a && a.response && a.response.request && (a = a.response.request, a = a.tcr) ? a : -1
            };
            b.h = function(a, b) {
                return (a = e[a]) ? a : b
            };
            b.dh = function(a) {
                var b = e.obcnsnt;
                return !1 === b ? !1 : !0 === b ? !0 : a
            };
            b.te = function() {
                return h
            };
            b.hf = function(a) {
                h = a
            };
            b.gh = function() {
                return k
            };
            b.Wu = function(a) {
                b.jf(a.permalink);
                b.Zu(a.widgetId);
                b.eu(a.dynLoad);
                b.$u(a.widgetType);
                b.Yu(a.fbk);
                b.gu(a.timeout);
                b.Pu(a.srcUrl);
                b.Qu(a.testMode);
                b.Xu(a.wizWidget);
                b.fu(a.extId);
                b.nu(a.installationKey);
                b.ou(a.installationType);
                b.Vt(a.appVer);
                b.Ut(a.userId);
                b.Uu(a.videoId);
                b.Gu(a.playerSrcId);
                b.mu(a.inPlayer);
                b.Hu(a.rtbEnabled);
                b.Bu(a.num);
                b.km(a.cardIdx);
                b.iu(a.feedFatherIdx);
                b.nm(a.feedFatherIdx);
                b.Zt(a.categoryIds);
                b.Ou(a.servePc);
                b.uu(a.maxNumAds);
                b.Lu(a.recMode);
                b.vu(a.maxNumOrganicRecs);
                b.wu(a.maxRTB);
                b.xu(a.maxZRTB);
                b.su(a.isZVRTB);
                b.tu(a.maxBSRTB);
                b.pu(a.isBSVRTB);
                b.Vu(a.videoWidth);
                b.Tu(a.videoHeight);
                b.hu(a.fId);
                b.au(a.clickTrackerUrl);
                "boolean" === typeof a.isManualWidget && b.qu(a.isManualWidget)
            };
            b.D = function() {
                return l
            };
            b.Zu = function(a) {
                l = "string" === typeof a ? a : "NA"
            };
            b.ju = function() {
                r = "vjapi"
            };
            b.ck = function() {
                return r
            };
            b.dx = function(a) {
                q = a
            };
            b.vw = function() {
                return q
            };
            b.ga = function() {
                return m
            };
            b.jf = function(a) {
                m = a
            };
            b.hh = function() {
                return ua
            };
            b.Uu = function(a) {
                ua = a
            };
            b.jk = function() {
                return va
            };
            b.km = function(a) {
                ya = a
            };
            b.Bb = function() {
                return ya
            };
            b.iu = function(a) {
                N = a
            };
            b.yw = function() {
                return N
            };
            b.nm = function(a) {
                Ib = c.u[a]
            };
            b.Tg = function() {
                return Rb
            };
            b.Zt = function(a) {
                Rb = a
            };
            b.tc = function() {
                return Ib
            };
            b.bk = function() {
                return b.tc() ? b.tc().h("wnid", null) : dc
            };
            b.sc = function() {
                return b.tc() ? b.tc().h("abTestVal", null) : null
            };
            b.zw = function() {
                return N
            };
            b.Iu = function(a) {
                Nb = a
            };
            b.Zg = function() {
                return Nb
            };
            b.Ku = function(a) {
                Ob = a
            };
            b.ah = function() {
                return Ob
            };
            b.Ju = function(a) {
                Pb = a
            };
            b.$g = function() {
                return Pb
            };
            b.Du = function(a) {
                Qb = a
            };
            b.Hq = function() {
                return Qb
            };
            b.oh = function() {
                return -1 < (0, window.parseInt)(b.Bb(), 10)
            };
            b.Gu = function(a) {
                va = a
            };
            b.mu = function(a) {
                wa = a
            };
            b.Ok =
                function() {
                    return wa
                };
            b.Qu = function(a) {
                oa = "true" === a || !0 === a
            };
            b.fh = function() {
                return oa
            };
            b.Xu = function(a) {
                pa = "true" === a || !0 === a
            };
            b.cl = function() {
                return pa
            };
            b.fu = function(a) {
                qa = a
            };
            b.pe = function() {
                return qa
            };
            b.Hu = function(a) {
                Mb = a
            };
            b.Vk = function() {
                return Mb
            };
            b.fx = function(a) {
                Lb = a
            };
            b.al = function() {
                return Lb
            };
            b.Bu = function(a) {
                (0, window.isNaN)(a) || (Kb = a)
            };
            b.we = function() {
                return Kb
            };
            b.nu = function(a) {
                S = a
            };
            b.ou = function(a) {
                ra = a
            };
            b.Vt = function(a) {
                sa = a
            };
            b.Ut = function(a) {
                ta = a
            };
            b.qc = function() {
                return ta
            };
            b.Pu =
                function(a) {
                    n = a
                };
            b.mk = function() {
                return n
            };
            b.Lr = function() {
                return p
            };
            b.eu = function(a) {
                p = "true" === a || !0 === a
            };
            b.Mk = function() {
                return "flyThrough" === b.l("displayMode", "")
            };
            b.bl = function() {
                return "video" === b.l("displayMode", "")
            };
            b.Pw = function() {
                return "recInIframe" === b.l("displayMode", "")
            };
            b.qh = function() {
                return !0 === b.l("stopRater", !1) || !0 === b.l("stopWidget", !1)
            };
            b.Jk = function() {
                return z
            };
            b.Zr = function() {
                return !0 === b.l("isSkylandersInjectionEnabled", !1)
            };
            b.ds = function() {
                return !0 === b.l("isTopBoxInjectionEnabled", !1)
            };
            b.rh = function() {
                return null !== b.l("recMode", "").match(/(odb_dynamic_swipe|odb_dynamic_smartfeed-swipe)/)
            };
            b.Ik = function() {
                return null !== b.l("recMode", "").match(/(odb_dynamic_ad-carousel)/)
            };
            b.Yk = function() {
                return null !== b.l("recMode", "").match(/(odb_dynamic_single-card-carousel)/)
            };
            b.Gr = function() {
                return null !== b.l("recMode", "").match(/(odb_dynamic_cards-carousel-box)/)
            };
            b.Vr = function() {
                return null !== b.l("recMode", "").match(/(odb_playableAd)/)
            };
            b.Uk = function() {
                return null !== b.l("recMode", "").match(/(odb_podcast)/)
            };
            b.cs = function() {
                return null !== b.l("recMode", "").match(/(odb_timeline)/)
            };
            b.Tr = function() {
                return !0 === b.l("isMegaBlockInjectionEnabled", !1)
            };
            b.Zk = function() {
                return b.cl() && !0 === b.l("isSmartFeedInjectionEnabled", !1)
            };
            b.Or = function() {
                return b.md() && b.l("recReasonType") && -1 < b.l("recReasonType").indexOf("follow")
            };
            b.md = function() {
                return !b.cl() && !0 === b.l("isSmartFeedInjectionEnabled", !1)
            };
            b.Pk = function() {
                return !0 === b.l("isInfiniteScrollEnabled", !1)
            };
            b.gs = function() {
                return !0 === b.l("isUIExperimentsEnabled", !1)
            };
            b.Xq = function() {
                return C
            };
            b.uc = function() {
                return S
            };
            b.dd = function() {
                return ra
            };
            b.ad = function() {
                return sa
            };
            b.$u = function(a) {
                "string" === typeof a && (C = a.toLowerCase())
            };
            b.au = function(a) {
                try {
                    var b = window.document.createElement("a");
                    b.href = a;
                    var c = b.host && b.host !== window.location.host;
                    a && c && (cc = a)
                } catch (Gf) {}
            };
            b.Ug = function() {
                return cc
            };
            b.om = function() {
                xa = !0
            };
            b.Eu = function(a) {
                Jb = a
            };
            b.Tk = function() {
                return Jb
            };
            b.Ou = function(a) {
                Sb = a
            };
            b.lk = function() {
                return Sb
            };
            b.uu = function(a) {
                Tb = a
            };
            b.fk = function() {
                return Tb
            };
            b.Lu = function(a) {
                Ub = a
            };
            b.kk = function() {
                return Ub
            };
            b.vu = function(a) {
                Vb = a
            };
            b.gk = function() {
                return Vb
            };
            b.wu = function(a) {
                Wb = a
            };
            b.hk = function() {
                return Wb
            };
            b.su = function(a) {
                Yb = a
            };
            b.ve = function() {
                return Yb
            };
            b.tu = function(a) {
                Zb = a
            };
            b.ek = function() {
                return Zb
            };
            b.xu = function(a) {
                Xb = a
            };
            b.ik = function() {
                return Xb
            };
            b.pu = function(a) {
                $b = a
            };
            b.qk = function() {
                return ac
            };
            b.Vu = function(a) {
                ac = a
            };
            b.pk = function() {
                return bc
            };
            b.Tu = function(a) {
                bc = a
            };
            b.hu = function(a) {
                dc = a
            };
            b.ue = function() {
                return $b
            };
            b.Jw = function() {
                return !!xa
            };
            b.Yu = function(a) {
                "string" === typeof a && "" !== a && (b.ke = a)
            };
            b.nh = function() {
                return "" !== b.Xg()
            };
            b.Mr = function() {
                return !(0, window.isNaN)((0, window.parseInt)(b.ke, 10))
            };
            b.Xg = function() {
                var a;
                var c = (0, window.parseInt)(b.ke, 10);
                b.Mr() && "number" === typeof c && 0 <= c && 10 > c ? a = window.OBR.b.qq(m, c) : a = b.ke;
                return a
            };
            b.ld = function() {
                return D
            };
            b.sb = function(a) {
                D = !!a
            };
            b.Kw = function() {
                return "hp" === C
            };
            b.xw = function() {
                return b.aa
            };
            b.ex = function(a) {
                "object" === typeof a && (b.aa = a)
            };
            b.Rk = function() {
                return na
            };
            b.ak = function() {
                return E
            };
            b.gu = function(a) {
                E = b.Np[a] || 6E3
            };
            b.qu = function(a) {
                na = !!a
            };
            b.vm = function() {
                var a = b.h("lsd", null),
                    e = !0 === b.h("oo", !1),
                    d = "string" === typeof a && 0 < a.length,
                    f = !0 === b.l("isUseLocalStorageForUUID", !0),
                    g = c.f.Ge && "1" === b.h("gdpr", "0") + "";
                g = !g || g && b.dh(!0);
                f && !e && d && g ? (c.b.pa("OB-USER-TOKEN", null) !== a && c.b.Kb("OB-USER-TOKEN-CREATION", (new Date).getTime()), c.b.Kb("OB-USER-TOKEN", a), window.OBR.Xe.set(a)) : f && g || (c.b.Bj("OB-USER-TOKEN"), c.b.Bj("OB-USER-TOKEN-CREATION"))
            };
            b.ku = function() {
                c.b.Kb("OB-FDE", 2 === b.l("fraudDetection",
                    0))
            };
            b.C = function() {
                return 0 === M ? b.B : 1E3 * M + b.B
            };
            b.Bt = function(a) {
                "string" === typeof a ? (window.OBR.b.Ra(window.OBR.b.w(b.B), "data-src", a), b.jf(a), M = 0) : M += 1;
                b.sb(!1)
            };
            b.bh = function() {
                return M
            };
            b.Bb = function() {
                var b = window.OBR.b.w(a);
                return b ? b.getAttribute("data-card-idx") : null
            };
            return b
        };
        window.OBR.Ic = window.OBR.Ic || function() {
            var a = window.OBR,
                b = {},
                c = new a.Ba;
            b.Dg = function(b) {
                b.idx = b.idx || 0;
                var c = new a.Si(b.idx);
                c.Wu(b);
                return c
            };
            b.Pc = function(d) {
                var e = a.Aa.xp(d);
                a.b.Ra(d, "data-dynLoad", "");
                e.permalink = a.Aa.aq(e.permalink);
                var f = 0 !== a.u.length || a.f.Ac !== e.permalink && !0 !== a.f.wh ? a.u.length : 1;
                e.idx = f;
                var g = b.Dg(e);
                a.u[f] = g;
                a.b.Ra(d, "data-idx", f);
                a.f.Tj(e);
                0 === f && a.b.yj(d);
                d.id = a.f.tf + f;
                c.G("onWidgetCreate", [g]);
                return g
            };
            b.Gl = function(a) {
                c.add("onWidgetCreate", a)
            };
            return b
        }();
        window.OBR.Aa = window.OBR.Aa || function() {
            var a = window.OBR,
                b = {
                    Oa: {
                        widgetId: {
                            a: "data-widget-id",
                            t: "string"
                        },
                        permalink: {
                            a: "data-src",
                            t: "string"
                        },
                        srcUrl: {
                            a: "data-ob-srcUrl",
                            t: "string"
                        },
                        dynLoad: {
                            a: "data-dynLoad",
                            t: "boolean"
                        },
                        widgetType: {
                            a: "data-widget-type",
                            t: "string"
                        },
                        timeout: {
                            a: "data-timeout",
                            t: "string"
                        },
                        fbk: {
                            a: "data-fbk",
                            t: "string"
                        },
                        testMode: {
                            a: "data-ob-test",
                            t: "boolean"
                        },
                        wizWidget: {
                            a: "data-ob-wiz",
                            t: "boolean"
                        },
                        installationKey: {
                            a: "data-ob-installation-key",
                            t: "string"
                        },
                        userId: {
                            a: "data-ob-user-id",
                            t: "string",
                            n: !0
                        },
                        videoId: {
                            a: "data-ob-video-id",
                            t: "string"
                        },
                        playerSrcId: {
                            a: "data-ob-player-src-id",
                            t: "string"
                        },
                        inPlayer: {
                            a: "data-ob-in-player",
                            t: "boolean"
                        },
                        installationType: {
                            a: "data-ob-installation-type",
                            t: "string"
                        },
                        appVer: {
                            a: "data-ob-app-ver",
                            t: "string"
                        },
                        isSecured: {
                            a: "data-is-secured",
                            t: "boolean"
                        },
                        extId: {
                            a: "data-external-id",
                            t: "string"
                        },
                        rtbEnabled: {
                            a: "data-rtb-enabled",
                            t: "boolean"
                        },
                        va: {
                            a: "data-va",
                            t: "boolean"
                        },
                        num: {
                            a: "data-num-of-recs",
                            t: "string"
                        },
                        cardIdx: {
                            a: "data-card-idx",
                            t: "string"
                        },
                        feedFatherIdx: {
                            a: "data-feed-father-idx",
                            t: "string"
                        },
                        categoryIds: {
                            a: "data-category-ids",
                            t: "string"
                        },
                        servePc: {
                            a: "data-servePc",
                            t: "boolean"
                        },
                        maxNumAds: {
                            a: "data-maxNumAds",
                            t: "string"
                        },
                        recMode: {
                            a: "data-recMode",
                            t: "string"
                        },
                        maxNumOrganicRecs: {
                            a: "data-maxNumOrganicRecs",
                            t: "string"
                        },
                        maxRTB: {
                            a: "data-maxRTB",
                            t: "string"
                        },
                        maxZRTB: {
                            a: "data-maxZRTB",
                            t: "string"
                        },
                        isZVRTB: {
                            a: "data-isZVRTB",
                            t: "boolean"
                        },
                        maxBSRTB: {
                            a: "data-maxBSRTB",
                            t: "string"
                        },
                        isBSVRTB: {
                            a: "data-isBSVRTB",
                            t: "boolean"
                        },
                        videoWidth: {
                            a: "data-videoWidth",
                            t: "string"
                        },
                        videoHeight: {
                            a: "data-videoHeight",
                            t: "string"
                        },
                        fId: {
                            a: "data-fId",
                            t: "string"
                        },
                        clickTrackerUrl: {
                            a: "data-click-url",
                            t: "string"
                        }
                    },
                    sk: function(b) {
                        var c, e;
                        if (a.u) {
                            var f = a.u.length;
                            for (c = 0; c < f; c += 1)
                                if ((e = a.u[c]) && e.D() === b) return e
                        }
                        return null
                    },
                    Eb: function(b) {
                        return a.u[b] ? a.u[b] : null
                    },
                    yp: function(a) {
                        var c = {},
                            e;
                        for (e in b.Oa) b.Oa.hasOwnProperty(e) && typeof a[e] === b.Oa[e].t && (c[e] = a[e]);
                        return c
                    },
                    xp: function(c) {
                        var d = {},
                            e;
                        for (e in b.Oa)
                            if (b.Oa.hasOwnProperty(e)) {
                                var f = a.b.ca(c, b.Oa[e].a);
                                "true" === f || "false" === f ? d[e] = "true" === f : typeof f !== b.Oa[e].t ||
                                    !0 !== b.Oa[e].n && "null" === f || "" === f || (d[e] = f)
                            }
                        return d
                    },
                    aq: function(b) {
                        if ("string" !== typeof b || "null" === b) b = a.b.dk(!1);
                        else if (0 === b.length || 0 === b.indexOf("DROP") || 0 === b.indexOf("INSERT")) b = a.b.dk(!0);
                        0 === b.indexOf("//") && (b = a.f.O.replace("//", "") + b);
                        return b
                    },
                    pp: function(c, d) {
                        for (var e in b.Oa) b.Oa.hasOwnProperty(e) && typeof c[e] === b.Oa[e].t && a.b.Ra(d, b.Oa[e].a, c[e])
                    },
                    uw: function() {
                        var b, d = [];
                        for (b = 0; b < a.u.length; b++) d.push(a.u[b].D());
                        return d
                    }
                };
            return b
        }();
        window.OBR.Ab = window.OBR.Ab || function() {
            var a = {},
                b = window.OBR,
                c = {},
                d = new b.Ba;
            a.Ob = {
                Pf: 0,
                TIMEOUT: 1,
                $m: 2,
                Mi: 3
            };
            c.oo = function(a) {
                a.nh() && (a.om(), c.ij(a), window.OBR.ma.Dl(a, function() {
                    c.qm(a)
                }), window.OBR.ma.El(a, function() {
                    c.rm(a)
                }), window.OBR.controller.Ct(a.C(), c.$s))
            };
            a.ro = function(a) {
                a.om();
                c.ij(a);
                b.ma.Dl(a, function() {
                    c.qm(a)
                });
                b.ma.El(a, function() {
                    c.rm(a)
                });
                b.controller.Zl(b.controller.ol, a.C(), a.D(), function(a, b) {
                    c.Zs(b, a)
                })
            };
            c.ij = function(b) {
                b.aa = {
                    reason: a.Ob.Pf,
                    yg: !1,
                    zl: !1,
                    oj: 0,
                    pj: 0
                }
            };
            c.qm =
                function(e) {
                    e && e.aa.reason === a.Ob.Pf && (b.i.log("ODB failed - using IronDome "), e.aa.reason = a.Ob.$m, c.Wh(e))
                };
            c.$s = function(e) {
                (0, window.clearTimeout)(e.aa.Fh);
                window.OBR.i.log("Editorial ODB returned for " + e.C());
                e.aa.yg || (!0 === e.l("ispartialrecs", !1) ? (b.i.log("ODB partial - using IronDome "), e.aa.reason = a.Ob.Mi, c.Wh(e)) : e.aa.zl = !0)
            };
            c.Wh = function(a) {
                (0, window.clearTimeout)(a.aa.Fh);
                if (a.qh()) b.i.log("CDN canceled stop setting");
                else {
                    var e = c.gq(a);
                    c.sr(e, a)
                }
            };
            c.gq = function(a) {
                var c = b.f.Jo;
                a = a.Xg() +
                    "_" + a.D() + "_" + a.B;
                return c + a
            };
            c.sr = function(a, c) {
                var e = b.b.ta(0, a, !1);
                c.aa.pj = (new Date).getTime();
                b.b.za(e);
                b.i.log("Inject CDN call: " + a)
            };
            c.rm = function(a) {
                a.aa.Fh = (0, window.setTimeout)(function() {
                    c.Vs(a)
                }, a.ak())
            };
            c.Vs = function(e) {
                e.aa.reason = a.Ob.TIMEOUT;
                b.i.log("ODB Timeout - using IronDome ");
                c.Wh(e)
            };
            a.nj = function(a, d) {
                if (a && a.response) {
                    window.OBR.i.log("Cdn response returned");
                    var e = b.Aa.Eb(d);
                    if (!e && (e = b.b.Yg(d), !e)) return;
                    e.aa.oj = (new Date).getTime() - e.aa.pj;
                    b.ma.Bo(e);
                    c.Jt(e, a);
                    c.ur(e)
                }
            };
            c.Jt = function(a, c) {
                a.aa.yg = !0;
                c.response && c.response.request && (c.response.request.req_id = "");
                a.aa.zl || (a.Rk() && c.response.documents ? b.controller.me(window.OBR.controller.Me, a.B, a.D(), c.response.documents) : (a.setData(c), b.u[a.B] = a, window.OBR.controller.dc(a.B)), a.sb(!0))
            };
            c.ur = function(a) {
                var c = b.b.ia(a.ga()),
                    e = a.l("irdfb", "");
                "" !== e && (e += "&reason=" + a.aa.reason, e = e + ("&url=" + c) + ("&at=" + a.aa.oj), e += "&to=" + a.ak() || "", e += "&ir=" + (a.aa.yg ? 1 : 0), a = window.OBR.b.ta(0, e, !1, !0), window.OBR.b.za(a))
            };
            c.Zs = function(a,
                d) {
                var e = b.b.Yg(a);
                (0, window.clearTimeout)(e.aa.Fh);
                d && d.settings && !0 === d.settings.ispartialrecs ? c.bx(e) : b.controller.me(b.controller.Me, a, e.D(), d.response.documents)
            };
            b.Ic.Gl(c.oo);
            a.oa = function() {
                d.Sb()
            };
            a.da = function() {
                return c
            };
            return a
        }();
        window.OBR.R = window.OBR.R || function() {
            var a = {},
                b = window.OBR,
                c = {
                    height: 0,
                    width: 0
                },
                d = 300,
                e = 300,
                f = null;
            a.Ea = function(a) {
                b = a
            };
            a.da = function() {
                var a = {};
                a.xb = b;
                return a
            };
            a.fd = function() {
                return new window.OBR.Pd({})
            };
            a.bi = function() {
                var a = {
                    height: 0,
                    width: 0
                };
                var b = void 0 !== window.innerWidth;
                var e = void 0 !== window.document.documentElement && void 0 !== window.document.documentElement.clientWidth && 0 !== window.document.documentElement.clientWidth;
                b ? (a.height = window.innerHeight, a.width = window.innerWidth) : e ? (a.height =
                    window.document.documentElement.clientHeight, a.width = window.document.documentElement.clientWidth) : !1 === b && !1 === e && (a.height = window.document.getElementsByTagName("body")[0].clientHeight, a.width = window.document.getElementsByTagName("body")[0].clientWidth);
                c = a
            };
            a.ya = function() {
                return c
            };
            a.lm = function() {
                window.document && window.document.body && (d = Math.max(Math.max(window.document.body.scrollHeight, window.document.documentElement.scrollHeight), Math.max(window.document.body.offsetHeight, window.document.documentElement.offsetHeight),
                    Math.max(window.document.body.clientHeight, window.document.documentElement.clientHeight)))
            };
            a.Vg = function() {
                return d
            };
            a.mm = function() {
                window.document && window.document.body && (e = Math.max(Math.max(window.document.body.scrollWidth, window.document.documentElement.scrollWidth), Math.max(window.document.body.offsetWidth, window.document.documentElement.offsetWidth), Math.max(window.document.body.clientWidth, window.document.documentElement.clientWidth)))
            };
            a.pq = function() {
                return e
            };
            a.Tt = function(a) {
                f = a
            };
            a.Vj =
                function() {
                    return f
                };
            a.Wg = function(b) {
                var c = 0;
                if (!b) return a.Kh.Ci;
                try {
                    if (b.offsetParent)
                        for (;;) {
                            c += b.offsetTop;
                            if (!b.offsetParent) break;
                            b = b.offsetParent
                        } else b.y && (c += b.y)
                } catch (k) {
                    return window.OBR.error(k), a.Kh.Ci
                }
                return (0, window.parseInt)(c, 10)
            };
            a.nk = function() {
                return window.document.documentElement.scrollTop ? window.document.documentElement.scrollTop : window.document.body.scrollTop
            };
            a.Ur = function() {
                return window.OBR.R.ya().height + 10 >= window.OBR.R.Vg()
            };
            window.OBR.b.X(window, "resize", function() {
                a.bi();
                a.lm();
                a.mm()
            });
            a.bi();
            a.lm();
            a.mm();
            return a
        }();
        window.OBR.Pd = window.OBR.Pd || function(a) {
            var b, c = {},
                d = "undefined" !== typeof window.OB_amp;
            c.Kh = {
                Ci: 1E4
            };
            if (a)
                for (b in a) a.hasOwnProperty(b) && (c.Kh[b] = a[b]);
            c.Sc = function(a, b, g) {
                if (!a || 0 > b || 100 < b) return !1;
                g || (g = {
                    top: 0,
                    bottom: 0
                });
                if (d) {
                    g = window.OBR.R.Vj();
                    if (!g) return !1;
                    var e = c.hj(a, g);
                    a = c.gj(e, g);
                    return (b = 0 <= a.height && 0 <= a.width && Math.max(1, Math.round(Math.min(e.height, g.rootBounds.height) * b / 100))) && a.height >= b
                }
                a = a.getBoundingClientRect();
                e = window.OBR.R.ya().height;
                a = {
                    top: a.top - g.top,
                    height: a.height +
                        g.bottom,
                    bottom: a.top + a.height + g.bottom
                };
                b = Math.round(a.height * b / 100) || 1;
                b = b > e ? e - 1 : b;
                return a.top + b <= e && 0 <= a.bottom - b
            };
            c.xc = function(a, b, g, h) {
                if (d) {
                    h = window.OBR.R.Vj();
                    if (!h) return !1;
                    a = c.hj(a, h);
                    h = c.gj(a, h)
                } else g = a = a.getBoundingClientRect(), h = h ? h.getBoundingClientRect() : {
                    top: 0,
                    left: 0,
                    width: Math.max(window.document.documentElement.clientWidth, window.innerWidth || 0),
                    height: Math.max(window.document.documentElement.clientHeight, window.innerHeight || 0)
                }, h = (Math.min(g.width + g.left, h.width + h.left) - Math.max(g.left,
                    h.left)) * (Math.min(g.height + g.top, h.height + h.top) - Math.max(g.top, h.top));
                return h / (a.width * a.height) >= b / 100
            };
            c.gj = function(a, b) {
                b = b.rootBounds;
                a = {
                    left: Math.max(a.left, b.left),
                    right: Math.min(a.right, b.right),
                    top: Math.max(a.top, b.top),
                    bottom: Math.min(a.bottom, b.bottom)
                };
                a.width = a.right - a.left;
                a.height = a.bottom - a.top;
                return a
            };
            c.hj = function(a, b) {
                b = b.boundingClientRect;
                a = a.getBoundingClientRect();
                return {
                    top: a.top + b.top,
                    bottom: a.bottom + b.top,
                    left: a.left + b.left,
                    right: a.right + b.left,
                    width: a.width,
                    height: a.height
                }
            };
            return c
        };
        window.OBR.g.N(window.OBR.g.j.If);
        window.OBR.IntersectionObserver = window.OBR.IntersectionObserver || function() {
            function a(a) {
                this.wa = this.bc = null;
                this.m = !1;
                this.c = {
                    callback: function() {},
                    callbackParams: [],
                    element: null,
                    intersectPercentage: 0,
                    scrollDimmer: 200,
                    unobserve: !1,
                    threshold: [1],
                    rootMargin: "0px"
                };
                this.H(a)
            }
            a.prototype.H = function(a) {
                a && (this.c = Object.assign(this.c, a))
            };
            a.prototype.P = function() {
                var a = {
                    rootMargin: this.c.rootMargin,
                    threshold: this.c.threshold
                };
                this.c.root && (a.root = this.c.root);
                a = new window.IntersectionObserver(this.Y.bind(this),
                    a);
                a.observe(this.c.element);
                return a
            };
            a.prototype.Y = function(a, c) {
                this.c.element && window.document.body.contains(this.c.element) ? a && a[0] && a[0].intersectionRatio > this.c.intersectPercentage && (this.c.callback.apply(this, this.c.callbackParams), this.c.unobserve && (c.unobserve(a[0].target), c.disconnect())) : (c.unobserve(this.c.element), c.disconnect())
            };
            a.prototype.ha = function() {
                var a = this.c.checkAbsoluteVisibility ? this.bc.xc : this.bc.Sc;
                if (this.m) this.m = !1;
                else {
                    var c = this.c.intersectPercentage;
                    a(this.c.element,
                        0 <= c && 1 >= c ? 100 * c : c, this.c.rootMarginObj, this.c.root) && (this.m = !0, this.c.callback.apply(this, this.c.callbackParams), this.c.unobserve && window.OBR.b.ib(window, "scroll", this.o))
                }
            };
            a.prototype.A = function() {
                var a = this;
                this.c.element && window.document.body.contains(this.c.element) ? this.wa || (this.ha(), (0, window.setTimeout)(function() {
                    a.wa = !1
                }, this.c.scrollDimmer), this.wa = !0) : window.OBR.b.ib(window, "scroll", this.o)
            };
            a.prototype.ra = function() {
                var a = this.c.rootMargin.split(" ");
                this.c.rootMarginObj = {
                    top: (0, window.parseInt)(a[0]),
                    right: (0, window.parseInt)(a[1] || a[0]),
                    bottom: (0, window.parseInt)(a[2] || a[0]),
                    left: (0, window.parseInt)(a[3] || a[0])
                }
            };
            a.prototype.observe = function() {
                if (!this.c.element) return null;
                if (window.OBR.f.dr) return this.P();
                this.ra();
                this.bc = window.OBR.R.fd();
                this.o = this.A.bind(this);
                window.OBR.b.X(window, "scroll", this.o);
                this.A();
                return this
            };
            return a
        }();
        x.prototype.gf = function(a) {
            if (!a.Bv) {
                var b = a.C();
                this.c[b] || (this.c[b] = window.OBR.b.w(b));
                window.OBR.f.eo || (a = a.C(), (new window.OBR.IntersectionObserver({
                    callback: this.Ae.bind(this),
                    callbackParams: [a],
                    element: window.OBR.b.w(a),
                    unobserve: !0,
                    threshold: [0]
                })).observe())
            }
        };
        x.prototype.ff = function() {
            var a = this;
            this.c.forEach(function(b, c) {
                void 0 !== b && b && a.Lh.Sc(b, 0) && a.Ae(c)
            })
        };
        x.prototype.oa = function() {
            this.wa = !1;
            this.c = [];
            this.m = new window.OBR.Mg;
            this.H = 0;
            this.startTime = (new Date).getTime()
        };
        x.prototype.Ae = function(a) {
            if (null !== this.c[a]) {
                var b = window.OBR.u[a];
                y(this, b, this.Ja.ie);
                b.Bv = !0;
                Ea(b);
                this.c[a] = null
            }
            return a
        };
        window.OBR.La = window.OBR.La || new x;
        window.OBR.he = new function() {};
        (function(a) {
            function b() {}
            b.prototype.da = function() {
                return {
                    Fw: this.m.bind(this),
                    nw: this.c.bind(this),
                    send: this.o.bind(this)
                }
            };
            b.prototype.lh = function() {
                return "undefined" !== typeof window.XMLHttpRequest
            };
            b.prototype.$r = function() {
                return "withCredentials" in new window.XMLHttpRequest ? !0 : "undefined" !== typeof window.XDomainRequest
            };
            b.prototype.get = function(a, b, e, f, g, h) {
                var c = this.m();
                b = this.c(b);
                this.o(c, a + (b.length ? "?" + b : ""), e, "GET", null, f, g, h)
            };
            b.prototype.Ve = function(b, d, e) {
                var c = this.m();
                d = this.c(d);
                this.o(c, b, e, a.f.ba.ea, d, !0)
            };
            b.prototype.ot = function(a) {
                var b = tb,
                    c = this.m();
                a = JSON.stringify(a);
                this.o(c, b, void 0, "POST", a, !0, "text/plain; charset=UTF-8")
            };
            b.prototype.ms = function(b, d, e) {
                d = this.c(d);
                b = a.b.ta("dataBI" + a.b.ye(), b + (d.length ? "?" + d : ""), !0, !0, e);
                a.b.za(b)
            };
            b.prototype.o = function(b, d, e, f, g, h, k, l) {
                void 0 === h && (h = !0);
                var c = "";
                try {
                    c = "Url: " + d + "\n" + Error().stack
                } catch (n) {}
                b.addEventListener("error", function() {
                    0 !== b.status && a.error({
                        name: "obm-AjaxError",
                        message: "Ajax error failed, method: " +
                            f + " With data: " + g,
                        stack: c
                    })
                });
                b.open(f, d, h);
                b.onreadystatechange = function() {
                    4 === b.readyState && typeof e === a.f.pc && e(b.responseText)
                };
                l && (b.withCredentials = !0);
                k ? b.setRequestHeader("Content-type", k) : f === a.f.ba.ea && b.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                b.send(g)
            };
            b.prototype.c = function(a) {
                var b = [],
                    c;
                for (c in a) a.hasOwnProperty(c) && b.push((0, window.encodeURIComponent)(c) + "=" + (0, window.encodeURIComponent)(a[c]));
                return b.join("&")
            };
            b.prototype.m = function() {
                if (this.lh()) return new window.XMLHttpRequest;
                for (var a = ["MSXML2.XmlHttp.6.0", "MSXML2.XmlHttp.3.0"], b, e = 0; e < a.length; e++) try {
                    b = new window.ActiveXObject(a[e]);
                    break
                } catch (f) {}
                return b
            };
            a.xa = new b
        })(window.OBR);
        var Oa = window.OBR.f.Te + "loggerServices/dwce_cheq_events",
            Qa = new function() {
                this.c = Na()
            };
        window.OBR.zf = window.OBR.zf || new Sa;
        var Za = "https://tcheck." + window.OBR.f.jt + "/tcheck/check";
        Va.prototype.start = function() {
            1 >= Math.random() ? Ya(this) : (window.OBR.i.log("FD stopped (gradual release)"), A(this))
        };
        var ub = window.OBR,
            vb;
        if (!(vb = window.OBR.$c)) {
            var wb = new Va;
            wb.start();
            vb = wb
        }
        ub.$c = vb;
        var tb = window.OBR.f.Te + "api/loggerBatch/log-viewability";
        db.prototype.log = function(a, b) {
            a = {
                timeElapsed: Date.now() - this.startTime,
                requestId: a.h("req_id", null),
                position: +b.getAttribute("data-pos")
            };
            this.m.push(a);
            10 <= this.m.length ? (this.c && ((0, window.clearTimeout)(this.c), this.c = null), this.o()) : this.c || (this.c = (0, window.setTimeout)(this.o.bind(this), 1200))
        };
        db.prototype.o = function() {
            this.c = null;
            if (this.m.length) {
                var a = this.m.splice(0);
                window.OBR.f.Fm ? window.navigator.sendBeacon(tb, JSON.stringify(a)) : window.OBR.xa.ot(a)
            }
        };
        var xb = {
            vj: !1
        };
        OBR._jsc.t = eb.prototype;
        OBR._jsc.t.mh = function(a) {
            return a.l("listingsViewability", !0)
        };
        OBR._jsc.t.Qb = function(a, b) {
            if (this.mh(a)) {
                var c = Object.assign({}, xb);
                c && Object.assign(c, b);
                a.Rm = c;
                c.ys || (b = a.Rm.vj ? this.c(a) : this.m(a)) && 0 < b.length && this.Pe(a, b)
            }
        };
        OBR._jsc.t.observe = function(a, b) {
            (new window.OBR.IntersectionObserver({
                threshold: [.5],
                unobserve: !0,
                intersectPercentage: .5,
                callback: this.Cr.bind(this),
                callbackParams: [a, b],
                element: b,
                checkAbsoluteVisibility: !0
            })).observe()
        };
        OBR._jsc.t.Pe = function(a, b) {
            var c = this;
            b.forEach(function(b) {
                return c.observe(a, b)
            })
        };
        OBR._jsc.t.Cr = function(a, b) {
            var c = this;
            (0, window.setTimeout)(function() {
                if (c.bc.xc(b, 50)) {
                    c.o.log(a, b);
                    var d = a.Rm;
                    d.Fl && d.Fl(a, b)
                } else c.observe(a, b)
            }, 1E3)
        };
        window.OBR.ic || (window.OBR.ic = new eb);
        fb.prototype.m = function(a, b) {
            a.Ma === window.OBR.b.w(a.s.C()) && (b && 0 === a.mode ? (this.c(b), 0 === a.Ma.querySelectorAll(".ob-lazy-bgimg, .ob-lazy-img").length && (a.s.Ck = !0)) : ([].slice.call(a.Ma.querySelectorAll(".ob-lazy-bgimg, .ob-lazy-img")).forEach(this.c), a.s.Ck = !0))
        };
        fb.prototype.c = function(a) {
            if ("IMG" === a.tagName.toUpperCase()) {
                var b = a.getAttribute("data-ob-src");
                b && (a.setAttribute("src", b), a.removeAttribute("data-ob-src"), window.OBR.b.T(a, "ob-lazy-img"))
            } else window.OBR.b.T(a, "ob-lazy-bgimg")
        };
        var gb = new fb;
        window.OBR.Nd = window.OBR.Nd || {
            Pc: function(a, b) {
                b || (b = {
                    gl: 0
                }, a.l("recMode", "").match(/swipe-strip|touch-strip|carousel|timeline/) && (b.gl = 1));
                if (a.l("useImagesLazyLoad", !1) && !a.Ck) {
                    a = {
                        rootMargin: a.l("imagesLazyLoadMargin", 500) + "px",
                        s: a,
                        Ma: window.OBR.b.w(a.C()),
                        mode: (b || {}).gl || 0
                    };
                    b = gb;
                    var c = a.Ma.getBoundingClientRect();
                    var d = {
                        x: c.x,
                        y: c.y,
                        width: c.width,
                        height: c.height
                    };
                    var e = a.rootMargin,
                        f = b.o;
                    c = Object.assign({}, d);
                    e = (0, window.parseInt)(e);
                    0 > d.y ? c.height += e : d.y > f.height && (c.y -= e);
                    b = b.o;
                    0 < (Math.min(c.width +
                        c.x, b.width + b.x) - Math.max(c.x, b.x)) * (Math.min(c.height + c.y, b.height + b.y) - Math.max(c.y, b.y)) ? gb.m(a) : hb(a)
                }
            }
        };
        window.OBR.zh = window.OBR.zh || ib;
        jb.prototype.G = function(a, b, c, d) {
            if (this.m) {
                var e = {};
                if ("undefined" !== typeof a) {
                    c = window.OBR.xa.$r() ? c : window.OBR.f.ba.mn;
                    var f = d && d.callback ? d.callback : function() {};
                    e.sessionId = this.o;
                    e.eventGroup = this.A;
                    e.eventTypeId = a.ID;
                    e.requestId = d && d.requestId ? d.requestId : this.s.h("req_id", -1);
                    b.ajaxMethod = c;
                    b.clientTimestamp = Date.now();
                    e.attributes = JSON.stringify(b);
                    a.FIRED = a.FIRED ? a.FIRED : 0;
                    if (!(a.LIMIT && a.FIRED >= a.LIMIT)) switch (a.FIRED += 1, c) {
                        case window.OBR.f.ba.hn:
                            window.OBR.xa.get(this.c, e, f, !0);
                            break;
                        case window.OBR.f.ba.ea:
                            window.OBR.xa.Ve(this.c, e, f);
                            break;
                        default:
                            window.OBR.xa.ms(this.c, e, f)
                    }
                }
            }
        };
        jb.prototype.setActive = function(a) {
            this.m = a
        };
        window.OBR.S = jb;
        window.OBR.extern = window.OBR.extern || function() {
            var a = window.OBR,
                b = {
                    gd: [],
                    getStat: function() {},
                    showDescription: function(b, d) {
                        a.g.F(window.OBR.g.j.Hf, function() {
                            window.OBR.Ol.rs(b, d)
                        }, this)
                    },
                    returnedHtmlData: function(b, d) {
                        a.controller.Eh(b, d)
                    },
                    returnedIrdData: function(b, d) {
                        a.Ab.nj(b, d)
                    },
                    returnedJsonData: function(b, d) {
                        a.controller.yl(b, d)
                    },
                    returnedError: function(b) {
                        window.OBR.i.log("Call made using extern class");
                        a.i.log("Callback error" + b)
                    },
                    callRecs: function(b, d) {
                        window.OBR.i.log("Call made using extern class");
                        a.controller.xh(b, d)
                    },
                    callClick: function(b, d) {
                        window.OBR.i.log("Call made using extern class");
                        a.controller.sd(b, d)
                    },
                    callWhatIs: function(a, b, e, f, g, h) {
                        window.OBR.g.F(window.OBR.g.j.Rd, function() {
                            window.OBR.si.lj(a, b, e, f, g, h)
                        }, this);
                        return !1
                    },
                    callUserZapping: function(a, b, e, f, g) {
                        window.OBR.g.F(window.OBR.g.j.bg, function() {
                            window.OBR.oi.Do(a, b, e, f, g)
                        }, this);
                        return !1
                    },
                    zappingFormAction: function(a, b, e, f, g) {
                        window.OBR.oi.Vm(a, b, e, f, g);
                        return !1
                    },
                    userZappingMessage: function(a) {
                        window.OBR.i.log(a.message)
                    },
                    recClicked: function(b, d) {
                        window.OBR.i.log("Call made using extern class");
                        a.controller.Sl(d)
                    },
                    imageError: function(b) {
                        window.OBR.i.log("Call made using extern class");
                        window.OBR.error({
                            name: "obm-ImageError",
                            message: "Error loading as image: " + b.src
                        });
                        a.b.tj(b)
                    },
                    logError: function(b, d, e, f) {
                        a.b.Ke(b, d, e, f)
                    },
                    showRecInIframe: function(b, d, e) {
                        a.g.F(a.g.j.Nf, function() {
                            a.Tl.av(b, d, e)
                        }, this)
                    },
                    openNativeVideoPlayer: function(b, d, e, f, g, h, k, l, m, n, p, q, r, z, E, C, D) {
                        a.g.F(a.g.j.Lc, function() {
                            D = D ? D : a.u[q].h("req_id",
                                null);
                            window.NVPInjector.main.init(a.b.xv([b, d, e, f, g, h, k, l, m, n, p, q, r, z, D, a.f.Ye, a.u[q].h("lang", "en"), a.u[q].h("lsd", null), a.u[q].h("pid", null), a.u[q].h("sid", null), a.u[q].h("wnid", null), E, a.u[q].h("gl", ""), a.u[q].gh(), a.u[q].h("widgetJsId", a.u[q].D()), a.u[q].h("req_id", "-1"), a.u[q].h("pvId", "-1")]), a.u[q].Cb(), C)
                        }, this);
                        return !1
                    },
                    openOverlay: function(b) {
                        a.g.F(a.g.j.Lc, function() {
                            var c = b.getAttribute("data-nvp");
                            if (null !== c && "string" === typeof c) {
                                c = window.JSON.parse(b.getAttribute("data-nvp").replace(/"/g,
                                    "#$#").replace(/'/g, '"').replace(/\\"/g, "'").replace("#$#", '\\"'));
                                var e = a.u[c.widgetIdx];
                                c.platform = a.f.Ye;
                                c.lang = e.h("lang", "en");
                                c.uuid = e.h("lsd", null);
                                c.publisherId = e.h("pid", null);
                                c.sourceId = e.h("sid", null);
                                c.widgetNumberId = e.h("wnid", null);
                                c.location = e.h("gl", "");
                                c.timestamp = e.gh();
                                window.NVPInjector.main.recClicked(c, e.Cb())
                            } else a.error({
                                name: "obm-nvpError",
                                message: "Error parsing data-nvp: " + c,
                                stack: "None"
                            })
                        }, this);
                        return !1
                    },
                    handshakeNVP: function() {
                        a.g.N(window.OBR.g.j.Lc)
                    },
                    onVideoClick: function(b,
                        d) {
                        a.controller.Bl(b, d)
                    },
                    manualVideoClicked: function(b, d, e, f, g) {
                        a.controller.pl(b, d, e, f, g)
                    },
                    errorInjectionHandler: function(a) {
                        window.OBR.u[a].tw(a)
                    },
                    reloadWidget: function() {
                        window.OBR.i.log("## Reload widget");
                        a.controller.am()
                    },
                    researchWidget: function() {
                        window.OBR.i.log("## Research widget");
                        a.controller.Ec()
                    },
                    renderSpaWidgets: function(b) {
                        window.OBR.i.log("## renderSpaWidgets - SPA has triggered a widget render");
                        window.OBR.f.Bd && window.OBR.f.Bd.Ap !== b ? (window.OBR.i.log("## renderSpaWidgets - page navigation detected. triggering reload"),
                            a.controller.am()) : (window.OBR.i.log("## renderSpaWidgets - " + (window.OBR.f.Bd ? "still on same page" : "first widget mounting detected") + ". researching for new widgets on page"), a.controller.Ec());
                        window.OBR.f.Bd = window.OBR.f.Bd || {};
                        window.OBR.f.Bd.Ap = b
                    },
                    cancelRecommendation: function(b) {
                        window.OBR.i.log("cancel recommendation with bocr " + b);
                        a.controller.Fo(b)
                    },
                    cancelRecs: function(b, d, e) {
                        window.OBR.i.log("cancel recommendation by doc url " + b + " publisher id = " + d + " isAd = " + e);
                        a.controller.Go(b, d, e)
                    },
                    refreshWidget: function(b) {
                        window.OBR.i.log("## Refresh widget");
                        a.controller.Cc(b)
                    },
                    setABtest: function(b) {
                        b && (a.f.mg = "&obAbtest=" + b)
                    },
                    refreshSpecificWidget: function(b, d) {
                        window.OBR.i.log("## Refresh SPECIFIC widget");
                        "string" !== typeof d ? a.g.F(a.g.j.Of, function() {
                            window.OBR.controller.Xl(b, d)
                        }, this) : window.OBR.controller.Xl(b, d)
                    },
                    getCountOfRecs: function(b) {
                        return a.controller.lq(b)
                    },
                    onOdbReturn: function(b, d) {
                        a.controller.Dt(b, d)
                    },
                    closeCard: function() {
                        a.ne.gp()
                    },
                    closeModal: function() {
                        try {
                            a.modal.hideModal()
                        } catch (c) {
                            window.OBR.error(c)
                        }
                    },
                    handshakeModule: function(b) {
                        try {
                            var c = window.OBR.g.zq(b);
                            c ? window.OBR.g.N(c) : a.error({
                                name: "obm-MakeHandShakeError",
                                message: "Error in module: " + b + ", Err: Module not found",
                                stack: "None"
                            })
                        } catch (e) {
                            window.OBR.error(e)
                        }
                    },
                    callLoadMore: function(a, b) {
                        window.OBR.g.F(window.OBR.g.j.Od, function() {
                            window.OBR.th.Fk(a, b)
                        }, this)
                    },
                    enableTbx: function() {
                        window.OBR.Lb ? window.OBR.Lb.Ek() : window.OBR.f.Il = !0
                    },
                    closeTbx: function() {
                        window.OBR.Lb.ip()
                    },
                    scrollIntoView: function() {
                        Ha()
                    },
                    ampIntersectionChange: function(a) {
                        window.OBR.R.Tt(a)
                    },
                    ampUpdateViewportSize: function() {
                        window.OBR.R.bi()
                    },
                    callUserSentiments: function(b, d) {
                        window.OBR.g.F(window.OBR.g.j.ag, function() {
                            window.OBR.Pm.Co(b, d)
                        }, this, null, a.u[d.idx].h("lang", "en"));
                        return !1
                    },
                    video: {}
                };
            b.video.getVideoRecs = function(a, b, e, f, g, h, k) {
                window.OBR.g.F(window.OBR.g.j.cg, function() {
                    window.OBR.video.Vq(a, b, e, f, g, h, k)
                }, this)
            };
            b.video.videoClicked = function(a) {
                window.OBR.video.yv(a)
            };
            b.video.initInPlayerWidget = function(c) {
                c = new window.OBR.kn(c);
                b.gd.push(c);
                1 !== a.g.Aq(a.g.j.Md) && a.g.F(a.g.j.Md,
                    function() {
                        a.Yb.il(b.gd)
                    }, this);
                return c
            };
            b.recReasons = {};
            b.recReasons.loadScopedWidget = function(b, d, e, f) {
                return a.controller.ts(b, d, e, f)
            };
            b.recReasons.backFromScopedWidget = function(b) {
                return a.controller.lo(b)
            };
            b.recReasons.onRecLinkHover = function(a) {
                window.OBR.b.M(a.parentElement, "rec-link-hover")
            };
            b.recReasons.onRecLinkHoverOut = function(a) {
                window.OBR.b.T(a.parentElement, "rec-link-hover")
            };
            b.truncateText = function(a, b, e) {
                OBR._jsc.Ma(window.OBR.he, a, b, e)
            };
            b.reloadPager = function(a, b) {
                (a = window.OBR.u[a]) &&
                window.OBR.controller.Jl(a, void 0 === b ? !1 : b)
            };
            b.recReasons.onRecFollowClick = function(a, b, e, f) {
                window.OBR.Ph && window.OBR.Ph.At(a, b, e, f)
            };
            b.triggerClickPixels = function(b, d, e) {
                a.controller.Lm(b, d, e)
            };
            b.mraidOpen = function(b, d) {
                a.controller.nv(b, d)
            };
            b.onCheqResponse = function(b) {
                a.zf.sj(b)
            };
            b.callViewed = function(a) {
                window.OBR.controller.Eo(a)
            };
            b.feed = {};
            b.feed.loadNextChunk = function(a) {
                return window.OBR.pf && window.OBR.pf.externalChunkLoad(a)
            };
            return b
        }();
        window.outbrain = window.outbrain || {};
        window.outbrain.returnedHtmlData = function(a, b) {
            window.OBR.controller.Eh(a, b)
        };
        window.outbrain.returnedIrdJsonData = function(a, b) {
            window.OBR.Ab.nj(a, b)
        };
        window.outbrain.returnedJsonData = function(a, b) {
            window.OBR.controller.yl(a, b)
        };
        window.outbrain.returnedError = function(a) {
            window.OBR.i.log("Callback error" + a)
        };
        window.outbrain.callRecs = function(a, b) {
            window.OBR.controller.xh(a, b)
        };
        window.outbrain.callClick = function(a, b) {
            window.OBR.controller.sd(a, b)
        };
        window.outbrain.callWhatIs = function(a, b, c, d, e, f) {
            window.OBR.g.F(window.OBR.g.j.Rd, function() {
                window.OBR.si.lj(a, b, c, d, e, f)
            }, this)
        };
        window.outbrain.callLoadMore = function(a, b) {
            window.OBR.g.F(window.OBR.g.j.Od, function() {
                window.OBR.th.Fk(a, b)
            }, this)
        };
        window.outbrain.recClicked = function(a, b) {
            window.OBR.controller.Sl(b)
        };
        window.outbrain.imageError = function(a) {
            window.OBR.b.tj(a)
        };
        window.outbrain.closeModal = function() {
            try {
                window.OBR.modal.hideModal()
            } catch (a) {
                window.OBR.error(a)
            }
        };
        window.outbrain_rater = window.outbrain_rater || {};
        window.outbrain_rater.returnedHtmlData = function(a, b) {
            window.OBR.controller.Eh(a, b)
        };
        window.outbrain_rater.returnedCancelOdbData = function(a) {
            window.OBR.controller.Nt(a)
        };
        !0 === window.OBR.f.Lk && (window.OBR.i.log("Widget Start!"), window.OBR.f.Lk = !1, "boolean" === typeof window.OB_PASSIVE_MODE && !0 === window.OB_PASSIVE_MODE ? window.OBR.i.log("passive") : window.OBR.controller.cf());
    } catch (ex) {
        OBR.error(ex);
    }
})(window.OBR);