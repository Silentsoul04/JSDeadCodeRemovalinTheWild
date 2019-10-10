! function(e, o) {
    var t, n, i, r = window.jQuery || {},
        a = o,
        u = o;
    if (!(i = /mobile|micromessenger|ios|tablet|Android tablet|Android phone|Android|webOS|NokiaN9|iPhone|iPod|BlackBerry|BlackBerry phone|BlackBerry tablet|window phone|window tablet|firefox os|firefox os phone|firefox os tablet|meeGo|Television|IEMobile|Opera Mini/i.test(navigator.userAgent.toLowerCase())) && !(u = !!e.loginBox && (n = window.csdn.loginBox, !0))) throw new Error("自动启动弹窗策略依赖于login-box基础脚本!");
    r === window.jQuery ? ($selectorAll = function(e) {
        var t = [];
        return r(e).each(function(e, o) {
            t.push(o)
        }), t
    }, a = !0) : $selectorAll = function(e) {
        return document.querySelectorAll(e)
    }, t = {
        userFlg: "UserName",
        domain: ".csdn.net",
        expires: 31536e6,
        loginAutoMaxNum: 5e3,
        loginAutokey: "c-login-auto",
        statisSource: "utm_source=auto_pv50"
    };

    function c(i) {
        var r = document.cookie;
        return r && function() {
            for (var e, o = {}, t = 0, n = (r = r.split("; ")).length; t < n && !(0 < (e = r[t].split("=")).length && (e[0] === i && (o.key = e[0], o.value = e[1], o.status = !0), "key" in o)); t++);
            return "key" in o && o
        }()
    }

    function s(e, o, t) {
        var n, i, r = c(e);
        r && !0 === r.status && (n = r.key + "=" + r.value + ";", (i = new Date).setTime(i.getTime() - 1e3), n = n + "expires=" + i.toGMTString() + ";", o && (n = n + "domain=" + o + ";"), t && (n = n + "path=" + t + ";"), document.cookie = n)
    }

    function d() {
        var e, o = 0;
        (e = c(t.userFlg)) && e.status || !!e ? s(t.loginAutokey, t.domain, "/") : (((e = c(t.loginAutokey)) && e.status || !!e) && (o = Number(e.value, 10)), t.loginAutoMaxNum <= o ? (s(t.loginAutokey, t.domain, "/"), i ? window.location.href = t.statisSource ? "https://passport.csdn.net/account/login?" + t.statisSource : "https://passport.csdn.net/account/login" : u && (t.statisSource ? n.show({
            pvSource: t.statisSource
        }) : n.show())) : function(e, o, t, n, i) {
            var r, a = e + "=" + o + ";";
            i && ((r = new Date).setTime(r.getTime() + i), a = a + "expires=" + r.toGMTString() + ";"), t && (a = a + "domain=" + t + ";"), n && (a = a + "path=" + n + ";"), document.cookie = a
        }(t.loginAutokey, o += 1, t.domain, "/", t.expires))
    }

    function l(e) {
        document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(function() {
            e && e()
        }, 0) : (m = function() {
            document.removeEventListener("DOMContentLoaded", m, !1), e()
        }, document.addEventListener("DOMContentLoaded", m, !1)) : document.attachEvent && function(e) {
            function o() {
                t || (t = !0, e && e())
            }
            var t = !1,
                n = function() {
                    try {
                        doc.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(n, 50)
                    }
                    o()
                };
            n(), doc.onreadystatechange = function() {
                "complete" === doc.readyState && (doc.onreadystatechange = null, o())
            }
        }(e)
    }
    var m;
    _ready = function() {
        a && r(function() {
            d()
        }) || l(d)
    }, _ready()
}(window.csdn = window.csdn || {}, void 0);