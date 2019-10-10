YAHOO = (typeof YAHOO === "undefined") ? {} : YAHOO;
YAHOO.JP = (typeof YAHOO.JP === "undefined") ? {} : YAHOO.JP;
YAHOO.JP.idpf = (typeof YAHOO.JP.idpf === "undefined") ? {} : YAHOO.JP.idpf;
YAHOO.JP.idpf.loginPromo = (typeof YAHOO.JP.idpf.loginPromo === "undefined") ? {} : YAHOO.JP.idpf.loginPromo;
YAHOO.JP.idpf.loginPromo.settings = {
    promo_flg: false,
    promo_title: "",
    promo_desc: "",
    promo_img: "",
    promo_img_full: "",
    promo_img_bg: "",
    promo_color_bg: "",
    promo_color_txt_a: "",
    promo_color_txt_b: "",
    promo_color_img_bg: "",
    promo_txt_login: decodeURI("%E3%81%8F%E3%81%98%E3%82%92%E5%BC%95%E3%81%8F"),
    promo_min_height: 220,
    promo_logo_off: false,
    promo_bucket_flg: false,
    promo_bucket: [{
        promo_title: "",
        promo_desc: "",
        promo_img: "",
        promo_img_full: "",
        promo_img_bg: "",
        promo_color_bg: "",
        promo_color_txt_a: "",
        promo_color_txt_b: "",
        promo_color_img_bg: "",
        promo_txt_login: "",
        promo_min_height: 220
    }],
    default_color_bg: "#fffafa",
    default_color_txt_a: "#393f4c",
    default_color_txt_b: "#777",
    default_color_btn_bg: "#fffafa",
    default_color_btn_a: "#4374fb",
    default_color_btn_b: "#5f89fb",
    default_color_btn_txt: "#fff",
    default_color_logo: "r",
    default_z_index: 4900000,
    default_z_index_full: 9000000,
    min_height: 220,
    threshold_img: 420,
    default_img_height: 60,
    txt_close: decodeURI("%E9%96%89%E3%81%98%E3%82%8B"),
    txt_login: decodeURI("%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3"),
    txt_reg: decodeURI("ID%E3%82%92%E6%96%B0%E3%81%97%E3%81%8F%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B"),
    txt_later: decodeURI("%E3%81%82%E3%81%A8%E3%81%A7"),
    txt_prv: decodeURI("%E3%81%93%E3%81%AE%E8%A1%A8%E7%A4%BA%E3%81%8C%E7%B9%B0%E3%82%8A%E8%BF%94%E3%81%97%E5%87%BA%E3%82%8B%E5%A0%B4%E5%90%88"),
    url_dom: "http://i.yimg.jp/images/login/sp/js/login_promo/1.0.4/login_promo_dom-min.js?d=201512",
    url_pcore: "http://i.yimg.jp/images/security/pf/pcore-1.0.1.min.js",
    promo_lot_flg: false,
    promo_lot_url: ""
};
YAHOO.JP.idpf.loginPromo.Util = {
    hasClass: function(a, c) {
        var d = (typeof a === "string") ? document.getElementById(a) : a,
            b = new RegExp("(^|\\s)" + c + "(\\s|$)");
        return (d) ? b.test(d.className) : false
    },
    addClass: function(a, b) {
        var c = (typeof a === "string") ? document.getElementById(a) : a;
        if (c && !YAHOO.JP.idpf.loginPromo.Util.hasClass(a, b)) {
            c.className += (!c.className) ? b : " " + b
        }
    },
    removeClass: function(e, f) {
        var g = (typeof e === "string") ? document.getElementById(e) : e,
            h, c, a, d, b = [];
        if (g) {
            h = g.className.split(" ");
            for (c = 0, a = h.length; c < a; c++) {
                d = h[c];
                if (d !== f && d !== "") {
                    b.push(d)
                }
            }
            g.className = b.join(" ")
        }
    },
    addEvt: function(b, g, f, e) {
        if (!b) {
            return false
        }
        if (!b[0]) {
            b = [b]
        }
        var d, a, c = g.split(" ");
        for (d = 0; d < b.length; d++) {
            for (a = 0; a < c.length; a++) {
                if (b[d].addEventListener) {
                    b[d].addEventListener(c[a], f, e)
                } else {
                    if (b[d].attachEvent) {
                        b[d].attachEvent("on" + c[a], f)
                    } else {
                        return false
                    }
                }
            }
        }
        return false
    },
    fireEvt: function(d, c) {
        if (!d || !c || typeof d != "object" || typeof c != "string" || d.nodeType == 3 || d.nodeType == 8) {
            return
        }
        var b = document,
            a;
        if (b.createEvent) {
            a = b.createEvent("HTMLEvents");
            a.initEvent(c, true, true)
        } else {
            a = b.createEventObject();
            a.eventType = c
        }
        a.eventName = c;
        if (b.createEvent) {
            d.dispatchEvent(a)
        } else {
            d.fireEvent("on" + a.eventType, a)
        }
    },
    preventDefault: function(b) {
        var a = b || window.event;
        if (a.preventDefault) {
            a.preventDefault()
        } else {
            a.returnValue = false
        }
    },
    stopPropagation: function(b) {
        var a = b || window.event;
        if (a.stopPropagation) {
            a.stopPropagation()
        } else {
            a.cancelBubble = false
        }
    },
    renderDom: function(e, c) {
        if (c) {
            var a, b;
            for (a in c) {
                b = new RegExp(a, "g");
                e = e.replace(b, c[a])
            }
        }
        return e
    },
    hashCode: function(e) {
        var d = 0,
            b, c, a;
        if (e.length == 0) {
            return d
        }
        for (b = 0, a = e.length; b < a; b++) {
            c = e.charCodeAt(b);
            d = ((d << 5) - d) + c;
            d |= 0
        }
        return d
    },
    readB: function() {
        var d, b, g, f, e, a = document.cookie.split(";");
        for (d = 0; d < a.length; d++) {
            g = a[d];
            while (g.charAt(0) == " ") {
                g = g.substring(1, g.length)
            }
            e = g.split("&");
            for (b = 0; b < e.length; b++) {
                f = e[b];
                if (f.indexOf("B=") === 0) {
                    return f.substring(("B=").length, f.length)
                }
            }
        }
        return ""
    },
    getCookie: function(d) {
        var b = document,
            f = b.cookie.split(";");
        for (var e = 0, a = f.length; e < a; e++) {
            var c = f[e].replace(/\s/g, "");
            if (new RegExp(d + "=").test(c)) {
                return c.replace(d + "=", "")
            }
        }
    },
    setCookie: function(b, g, m, n) {
        var h = document,
            f, a, d, j = this.getCookie(b);
        if (j) {
            d = j.split("&");
            for (f = 0, a = d.length; f < a; f++) {
                if (d[f].indexOf(g + "=") === 0) {
                    d.splice(f, 1);
                    j = d.join("&");
                    break
                }
            }
        }
        h.cookie = b + (j ? "=" + j + "&" : "=") + g + "=" + m + "; domain=.yahoo.co.jp; path=/; expires=" + (new Date((new Date()).getTime() + 1000 * 60 * 60 * 24 * 365)).toGMTString()
    },
    loadScript: function(g, c, b, f, a) {
        var e = g.getElementsByTagName(c)[0],
            h = g.createElement(c);
        h.id = b;
        h.src = YAHOO.JP.idpf.loginPromo.Util.convPrtc(f);
        if (a && typeof a === "function") {
            h.onload = a
        }
        e.parentNode.insertBefore(h, e)
    },
    getSid: function() {
        var a = document;
        if (a.getElementById("yjsmhScript")) {
            return a.getElementById("yjsmhScript").getAttribute("data-s")
        } else {
            return ""
        }
    },
    convPrtc: function(a) {
        if (a && window.location.protocol.match(/https:/)) {
            a = a.replace("http://i.yimg.jp", "https://s.yimg.jp")
        }
        return a
    }
};
YAHOO.JP.idpf.loginPromo.Core = (function() {
    var J = document,
        i, B, x, D, g, s, e, p, o, n, l, v, K, j, G = YAHOO.JP.idpf.loginPromo.settings,
        I, q = true,
        t = false,
        A = false,
        r = false,
        z, L, a, C, w = YAHOO.JP.idpf.loginPromo.login_flg ? "id_servicepromo" : "loginpromo",
        u, f, k, d, b, y, H, m, h, F = YAHOO.JP.idpf.loginPromo.login_flg ? true : false,
        E = false,
        c = YAHOO.JP.idpf.loginPromo.Util;
    return {
        init: function(P) {
            var M, O = "",
                N = [];
            if (!P || !P.mode || !P.src || !P.title) {
                return
            }
            h = this;
            C = P;
            I = C.mode === "full";
            f = I ? "full" : "pop";
            if (I && !C.logo) {
                return
            } else {
                if (typeof C.color_bg !== "undefined") {
                    q = false
                }
            }
            if (I && F) {
                F = false;
                return
            }
            if (I) {
                G.default_img_height = 120
            }
            z = F ? true : (C.cmp_off || false);
            L = C.doneurl || window.location.href;
            H = C.spaceid || c.getSid();
            m = window.location.protocol.match(/https:/) ? true : false;
            K = C.z_index || (I ? G.default_z_index_full : G.default_z_index);
            E = C.logging_off ? C.logging_off : false;
            if (G.promo_bucket_flg && !z) {
                O = this.setBucket(G.promo_bucket);
                M = G.promo_bucket[O]
            } else {
                M = G
            }
            if (G.promo_flg && !z) {
                e = M.promo_color_bg || G.default_color_bg;
                p = M.promo_color_txt_a || G.default_color_txt_a;
                o = M.promo_color_txt_b || G.default_color_txt_b;
                n = G.default_color_btn_a;
                l = G.default_color_btn_b;
                v = G.default_color_btn_txt;
                x = M.promo_title || null;
                D = (typeof C.desc === "undefined" && !I ? null : (M.promo_desc || null));
                g = (typeof C.img === "undefined" && !I ? null : (c.convPrtc((I ? M.promo_img_full : M.promo_img)) || null));
                img_bg = (I && M.promo_img_bg !== "") ? c.convPrtc(M.promo_img_bg) : null;
                s = G.default_img_height;
                B = (I && !G.promo_logo_off) ? C.logo.replace("_w_22", "_" + G.default_color_logo + "_22") : null;
                G.txt_login = M.promo_txt_login || G.txt_login;
                u = "campaign"
            } else {
                e = C.color_bg || G.default_color_bg;
                p = C.color_txt_a || G.default_color_txt_a;
                o = C.color_txt_b || C.color_txt_a || G.default_color_txt_b;
                n = F && C.color_btn_a ? C.color_btn_a : G.default_color_btn_a;
                l = F && C.color_btn_b ? C.color_btn_b : G.default_color_btn_b;
                v = F && C.color_btn_txt ? C.color_btn_txt : G.default_color_btn_txt;
                x = C.title || null;
                D = C.desc || null;
                g = C.img || null;
                img_bg = null;
                s = F && C.img_height ? C.img_height : G.default_img_height;
                B = (I && q) ? C.logo.replace("_w_22", "_" + G.default_color_logo + "_22") : C.logo || null;
                G.txt_login = F && C.btn_txt ? C.btn_txt : G.txt_login;
                u = "normal"
            }
            if (O !== "") {
                if (O == 0) {
                    N.full = "/evt=133928";
                    N.pop = "/evt=133929"
                } else {
                    if (O == 1) {
                        N.full = "/evt=133930";
                        N.pop = "/evt=133931"
                    } else {
                        if (O == 2) {
                            N.full = "/evt=133932";
                            N.pop = "/evt=133933"
                        }
                    }
                }
            }
            k = [{
                id: "_idpfLP_img",
                label: "/login/",
                evt: (O !== "" ? (I ? N.full : N.pop) : null)
            }, {
                id: "_idpfLP_btn",
                label: "/login/",
                evt: (O !== "" ? N.pop : null)
            }, {
                id: "_idpfLP_btn_full",
                label: "/login/",
                evt: (O !== "" ? N.full : null)
            }, {
                id: "_idpfLP_reg",
                label: "/reg/",
                evt: null
            }, {
                id: "_idpfLP_reg_full",
                label: "/reg/",
                evt: null
            }, {
                id: "_idpfLP_ntc",
                label: "/private/",
                evt: null
            }];
            d = [{
                id: "_idpfLP_close",
                label: "/close/"
            }];
            a = this.createDom(YAHOO.JP.idpf.loginPromo.styles, YAHOO.JP.idpf.loginPromo.template);
            this.setBeacon();
            c.addEvt([J.getElementById("_idpfLP_close")], "click", this.onClickClose);
            c.addEvt([J.getElementById("_idpfLP_btn"), J.getElementById("_idpfLP_btn_full"), J.getElementById("_idpfLP_reg"), J.getElementById("_idpfLP_reg_full"), J.getElementById("_idpfLP_img")], "click", this.updatePrn);
            if (I) {
                c.addEvt(J.getElementById("_idpfLP_wrapper"), "touchmove MSPointerMove", function(Q) {
                    c.preventDefault(Q)
                })
            }
            window.addEventListener("resize", function(Q) {
                setTimeout(function() {
                    if (c.hasClass(document.getElementById("_idpfLP_wrapper"), "idpfLPOpen")) {
                        if (window.innerWidth > window.innerHeight) {
                            c.fireEvt(document.body, "idpfLPModuleHide")
                        } else {
                            c.fireEvt(document.body, "idpfLPModuleShow")
                        }
                    }
                }, 100)
            });
            c.fireEvt(document.body, "idpfLPModuleLoaded");
            return this
        },
        show: function(M) {
            if (!a || c.hasClass(a, "idpfLPOpen") || r || window.innerWidth > window.innerHeight) {
                return
            }
            if (!M || M < 0 || !parseInt(M)) {
                M = 0
            }
            window.setTimeout(function() {
                setTimeout(function() {
                    c.removeClass(a, "idpfSetPos");
                    c.removeClass(a, "idpfDisplayNone");
                    c.addClass(a, "idpfLPOpen");
                    c.setCookie("prn", "promo_issued", (new Date()).getTime());
                    c.setCookie("prn", "promo_issued_type", "view");
                    c.fireEvt(document.body, "idpfLPModuleShow");
                    h.adjustPos()
                }, 50);
                if (A === false && !E) {
                    var N = new Image(),
                        O = t ? "view_private" : "view";
                    N.src = "https://ybx.yahoo.co.jp/clear.gif?bkey=" + w + "&mtype=" + f + "&status=" + u + "&action=" + O + "&src=" + C.src + "&spaceid=" + H + "&ts=" + (new Date()).getTime();
                    A = true
                }
            }, parseInt(M))
        },
        hide: function(M) {
            if (!a || !c.hasClass(a, "idpfLPOpen") || window.innerWidth > window.innerHeight) {
                return
            }
            if (A === true && !E) {
                var N = new Image(),
                    O = M ? "hide" : "hide_srv";
                N.src = "https://ybx.yahoo.co.jp/clear.gif?bkey=" + w + "&mtype=" + f + "&status=" + u + "&action=" + O + "&src=" + C.src + "&spaceid=" + H + "&ts=" + (new Date()).getTime();
                A = null
            }
            if (!M) {
                c.setCookie("prn", "promo_issued", (new Date()).getTime());
                c.setCookie("prn", "promo_issued_type", "service")
            }
            c.removeClass(a, "idpfLPOpen");
            c.addClass(a, "idpfDisplayNone");
            c.fireEvt(document.body, "idpfLPModuleHide")
        },
        loadDom: function(N, M) {
            c.loadScript(J, "script", "idpfLPDom", G.url_dom)
        },
        createDom: function(N, M) {
            if (!N || !M) {
                return
            }
            var O = J.createElement("div");
            O.id = "_idpfLP_wrapper";
            c.addClass(O, "idpfLP");
            if (!q) {
                c.addClass(O, "idpfLPCustom")
            }
            if (I) {
                c.addClass(O, "idpfLPFull")
            }
            if (F) {
                c.addClass(O, "idpfLoggedIn");
                if (!C.btn_txt) {
                    c.addClass(O, "idpfLPNoBtn")
                }
            }
            c.addClass(O, "idpfSetPos");
            N = c.renderDom(N, {
                "{{color_bg}}": e,
                "{{color_txt_a}}": p,
                "{{color_txt_b}}": o,
                "{{color_btnarea}}": (q && I ? "transparent" : G.default_color_btn_bg),
                "{{color_btn_a}}": n,
                "{{color_btn_b}}": l,
                "{{color_btn_txt}}": v,
                "{{z_index}}": K,
                "{{threh}}": G.threshold_img,
                "{{min_height}}": ((G.promo_flg && img_bg && G.promo_min_height) ? G.promo_min_height : G.min_height) + "px",
                "{{img_bg}}": (img_bg === null ? "" : c.convPrtc(img_bg)),
                "{{img}}": (g !== null ? g : ""),
                "{{img_height}}": " " + s
            });
            M = c.renderDom(M, {
                "{{img_bg_cls}}": img_bg ? "idpfLP_img_bg" : "",
                "{{title}}": (x !== null ? x : ""),
                "{{title_cls}}": (x === null ? "idpfDisplayNone" : ""),
                "{{desc}}": (D !== null ? D : ""),
                "{{desc_cls}}": (D === null ? "idpfDisplayNone" : ""),
                "{{img}}": (g !== null ? g : ""),
                "{{img_cls}}": (g === null || img_bg ? "idpfDisplayNone" : ""),
                "{{logo}}": (I && B !== null ? B : ""),
                "{{logo_cls}}": (I && B === null ? "idpfDisplayNone" : ""),
                "{{btn_cls}}": (G.promo_flg && !z ? "idpfLP_btnPromo" : ""),
                "{{color_txt_a}}": p,
                "{{txt_close}}": G.txt_close,
                "{{txt_login}}": G.txt_login,
                "{{txt_reg}}": G.txt_reg,
                "{{txt_later}}": G.txt_later,
                "{{txt_prv}}": G.txt_prv,
                "{{src}}": C.src
            });
            O.innerHTML = N + M;
            J.body.appendChild(O);
            if (this.detectPrivateBrw() || C.prv_debug) {
                c.removeClass(J.getElementById("_idpfLP_err"), "idpfDisplayNone");
                c.addClass(J.getElementById("_idpfLP_mdl"), "idpfLP_errshift")
            }
            this.adjustPos();
            c.addClass(O, "idpfDisplayNone");
            YAHOO.JP.idpf.loginPromo.ready = true;
            return O
        },
        adjustPos: function() {
            if (I) {
                var N = J.getElementById("_idpfLP_mdl"),
                    M = J.getElementById("_idpfLP_btnAreaFull"),
                    O = (window.innerHeight - N.clientHeight - M.scrollHeight - (q ? 0 : 15)) / 2;
                if (O < 0) {
                    O = 0
                }
                N.style.marginTop = O + "px";
                M.style.marginBottom = O + "px";
                J.getElementById("_idpfLP_wrapper").style.height = window.innerHeight + "px"
            }
        },
        detectPrivateBrw: function() {
            if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
                try {
                    window.localStorage.setItem("idpfLPTemp", 1)
                } catch (M) {
                    t = true
                }
                if (t === false) {
                    window.localStorage.removeItem("idpfLPTemp")
                }
                return t
            }
        },
        setBeacon: function() {
            c.addEvt(J.body, "idpfLPPcoreLoaded", function() {
                var Q = YAHOO.JP.pcore.rdsig,
                    N, M, P, O, R;
                for (O = 0; O < k.length; O++) {
                    if (!J.getElementById(k[O].id)) {
                        continue
                    }
                    N = J.getElementById(k[O].id).href;
                    P = new RegExp("{{done}}", "g");
                    if (k[O].id === "_idpfLP_img" || k[O].id === "_idpfLP_btn" || k[O].id === "_idpfLP_btn_full") {
                        if (G.promo_lot_flg && !z) {
                            M = G.promo_lot_url.replace(P, encodeURIComponent(Q.gen_redirect_v1(L, h.createLabel("/toku_done/"))));
                            N = N.replace(P, encodeURIComponent(Q.gen_redirect_v1(M, h.createLabel("/login_done/"))))
                        } else {
                            if (F && C.btn_url) {
                                N = C.btn_url
                            } else {
                                N = N.replace(P, encodeURIComponent(Q.gen_redirect_v1(L, h.createLabel("/login_done/"))))
                            }
                        }
                    } else {
                        if (k[O].id === "_idpfLP_reg" || k[O].id === "_idpfLP_reg_full") {
                            if (G.promo_lot_flg && !z) {
                                M = G.promo_lot_url.replace(P, encodeURIComponent(Q.gen_redirect_v1(L, h.createLabel("/toku_done/"))));
                                N = N.replace(P, encodeURIComponent(Q.gen_redirect_v1(M, h.createLabel("/reg_done/"))))
                            } else {
                                N = N.replace(P, encodeURIComponent(Q.gen_redirect_v1(L, h.createLabel("/reg_done/"))))
                            }
                        }
                    }
                    if (!E) {
                        J.getElementById(k[O].id).href = Q.gen_redirect_v1(N, h.createLabel(k[O].label, k[O].evt))
                    } else {
                        J.getElementById(k[O].id).href = N
                    }
                }
                for (O = 0; O < d.length; O++) {
                    R = J.getElementById(d[O].id);
                    R.lbl = h.createLabel(d[O].label);
                    c.addEvt(R, "click", function() {
                        var S = new Image();
                        if (typeof this.lbl === "undefined") {
                            return
                        }
                        if (!E) {
                            if (!m) {
                                S.src = "http://rdsig.yahoo.co.jp" + this.lbl + "/RV=1/RU=aHR0cDovL2kueWltZy5qcC9pbWFnZXMvY2xlYXIuZ2lm"
                            } else {
                                S.src = "https://rdsig.yahoo.co.jp" + this.lbl + "/RV=1/RU=aHR0cHM6Ly9zLnlpbWcuanAvaW1hZ2VzL2NsZWFyLmdpZg--"
                            }
                        }
                    })
                }
            });
            if (!YAHOO.JP.pcore) {
                c.loadScript(J, "script", "idpfLPPcore", G.url_pcore, function() {
                    c.fireEvt(J.body, "idpfLPPcoreLoaded")
                })
            } else {
                c.fireEvt(J.body, "idpfLPPcoreLoaded")
            }
        },
        onClickClose: function(M) {
            c.preventDefault(M);
            c.stopPropagation(M);
            r = true;
            c.setCookie("prn", "promo_issued", (new Date()).getTime());
            c.setCookie("prn", "promo_issued_type", "click");
            h.hide(true)
        },
        updatePrn: function() {
            c.setCookie("prn", "promo_issued", (new Date()).getTime());
            c.setCookie("prn", "promo_issued_type", "click")
        },
        setBucket: function(M) {
            return Math.abs(c.hashCode(c.readB()) % M.length)
        },
        createLabel: function(N, M) {
            return (F ? "/idServicePromo/" : "/loginPromo/") + f + "/" + u + N + C.src + (H != "" ? "/" : "") + H + (M ? M : "")
        }
    }
})();
(function(a) {
    if (a) {
        a.Util.fireEvt(document.body, "idpfLPLoaded")
    }
})(YAHOO.JP.idpf.loginPromo);