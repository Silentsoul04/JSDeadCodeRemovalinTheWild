define(function() {
    function c(c) {
        var a, g = B.cookie("SE_LAUNCH") || "",
            w = c + ":[\\d]*",
            re = new RegExp(w, "g", "i"),
            I = window.sSession || {};
        a = re.test(g) ? g.replace(re, c + ":" + parseInt(I.serverTime / 60, 10)) : g ? g + "_" + c + ":" + parseInt(I.serverTime / 60, 10) : c + ":" + parseInt(I.serverTime / 60, 10);
        try {
            I.logid && localStorage.setItem("index_plus_ls_callappsamall@2.0.0", I.logid)
        } catch (h) {}
        a && B.cookie("SE_LAUNCH", a, {
            expires: 864e5,
            domain: ".baidu.com",
            path: "/"
        })
    }
    return window.B = window.B || {}, B.cookie = function(c, a, g) {
        var w, I, h, C;
        return 0 === arguments.length ? document.cookie : arguments.length > 1 && "[object Object]" !== String(a) ? (g = g || {}, (null === a || void 0 === a) && (g.expires = -1), "number" == typeof g.expires && (w = g.expires, I = g.expires = new Date, I.setTime(I.getTime() + w)), a = String(a), document.cookie = [encodeURIComponent(c), "=", g.raw ? a : encodeURIComponent(a), g.expires ? "; expires=" + g.expires.toUTCString() : "", g.path ? "; path=" + g.path : "", g.domain ? "; domain=" + g.domain : "", g.secure ? "; secure" : ""].join("")) : (g = a || {}, C = g.raw ? function(s) {
            return s
        } : decodeURIComponent, (h = new RegExp("(?:^|; )" + encodeURIComponent(c) + "=([^;]*)").exec(document.cookie)) ? C(h[1]) : null)
    }, c
});