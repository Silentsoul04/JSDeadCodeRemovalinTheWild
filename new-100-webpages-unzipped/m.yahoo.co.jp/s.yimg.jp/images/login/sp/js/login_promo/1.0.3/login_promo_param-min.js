YAHOO = (typeof YAHOO === "undefined") ? {} : YAHOO;
YAHOO.JP = (typeof YAHOO.JP === "undefined") ? {} : YAHOO.JP;
YAHOO.JP.idpf = (typeof YAHOO.JP.idpf === "undefined") ? {} : YAHOO.JP.idpf;
YAHOO.JP.idpf.loginPromo = (typeof YAHOO.JP.idpf.loginPromo === "undefined") ? {} : YAHOO.JP.idpf.loginPromo;
YAHOO.JP.idpf.loginPromo.Invoke = (function() {
    var d = document,
        c = (new Date()).getTime(),
        e = YAHOO.JP.idpf.loginPromo,
        b = (e.prn_params && typeof e.prn_params.expire_view !== "undefined") ? e.prn_params.expire_view : (e.login_flg ? 7 : 7),
        a = (e.prn_params && typeof e.prn_params.expire_click !== "undefined") ? e.prn_params.expire_click : (e.login_flg ? 7 : 7),
        f = (e.prn_params && typeof e.prn_params.expire_service !== "undefined") ? e.prn_params.expire_service : 0.5;
    return {
        is: function() {
            var k = this.getAndroidVersion(),
                i = this.getIosVersion(),
                j = parseInt(this.rc("prn", "promo_issued")),
                h = this.rc("prn", "promo_issued_type"),
                g;
            if (this.rc("Y") && !YAHOO.JP.idpf.loginPromo.login_flg) {
                return false
            } else {
                if (window.innerHeight < window.innerWidth) {
                    return false
                } else {
                    if (!this.rc("prn") && navigator.userAgent.toLowerCase().match(/ybrowser/)) {
                        this.setCookie("prn", "promo_issued", (new Date()).getTime());
                        this.setCookie("prn", "promo_issued_type", "view");
                        return false
                    } else {
                        if ((k !== 0 && k < 4) || (i !== 0 && i < 600)) {
                            return false
                        } else {
                            if (YAHOO.JP.idpf.loginPromo.login_flg && YAHOO.JP.idpf.loginPromo.clear_prn && j && j < YAHOO.JP.idpf.loginPromo.clear_prn_from * 1000) {
                                return true
                            } else {
                                if (j && h) {
                                    if (h === "view") {
                                        g = b
                                    } else {
                                        if (h === "click") {
                                            g = a
                                        } else {
                                            if (h === "service") {
                                                g = f
                                            }
                                        }
                                    }
                                    if (j + g * 1000 * 60 * 60 * 24 > c) {
                                        return false
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (!YAHOO.JP.idpf.loginPromo.login_flg && (new Date(c)).getHours() >= 7 && (new Date(c)).getHours() <= 10) {
                return false
            }
            return true
        },
        rc: function(h, p) {
            var m, l, q, o, n, g = d.cookie.split(";");
            for (m = 0; m < g.length; m++) {
                q = g[m];
                while (q.charAt(0) == " ") {
                    q = q.substring(1, q.length)
                }
                if (q.indexOf(h + "=") === 0) {
                    if (!p) {
                        return q
                    }
                    n = q.substring((h + "=").length, q.length).split("&");
                    for (l = 0; l < n.length; l++) {
                        o = n[l];
                        if (o.indexOf(p + "=") === 0) {
                            return o.substring((p + "=").length, o.length)
                        }
                    }
                }
            }
            return ""
        },
        getCookie: function(m) {
            var h = document,
                o = h.cookie.split(";");
            for (var n = 0, g = o.length; n < g; n++) {
                var j = o[n].replace(/\s/g, "");
                if (new RegExp(m + "=").test(j)) {
                    return j.replace(m + "=", "")
                }
            }
        },
        setCookie: function(h, n, q, r) {
            var o = document,
                m, g, j, p = this.getCookie(h);
            if (p) {
                j = p.split("&");
                for (m = 0, g = j.length; m < g; m++) {
                    if (j[m].indexOf(n + "=") === 0) {
                        j.splice(m, 1);
                        p = j.join("&");
                        break
                    }
                }
            }
            o.cookie = h + (p ? "=" + p + "&" : "=") + n + "=" + q + "; domain=.yahoo.co.jp; path=/; expires=" + (new Date((new Date()).getTime() + 1000 * 60 * 60 * 24 * 365)).toGMTString()
        },
        getAndroidVersion: function() {
            var g = navigator.userAgent.match(/Android\ (\d.\d)/);
            return (g) ? g[1] : 0
        },
        getIosVersion: function() {
            var g = navigator.userAgent,
                i;
            if (/iPhone/.test(g)) {
                var h = 3;
                g.match(/iPhone OS (\w+)/);
                if (parseInt(RegExp.$1.split("_")[0]) >= 10) {
                    h = 4
                }
                i = (RegExp.$1.replace(/_/g, "") + "00").slice(0, h);
                return parseInt(i)
            } else {
                return 0
            }
        }
    }
}());
(function(a) {
    if (a) {
        a.fireEvt(document.body, "idpfLPInvokeLoaded")
    }
})(YAHOO.JP.idpf.loginPromo);