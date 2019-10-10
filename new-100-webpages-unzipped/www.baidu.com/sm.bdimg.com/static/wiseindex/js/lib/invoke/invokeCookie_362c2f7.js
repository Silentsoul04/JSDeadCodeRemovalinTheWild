define(function() {
    function a(a) {
        var c = [];
        try {
            for (var v = 0, g = E.length; g > v; v++)
                if (E[v] && E[v].invoke_group) {
                    var k = JSON.parse(E[v].invoke_group);
                    k[S] && k[S] === a && c.push(v)
                }
        } catch (_) {}
        return c
    }

    function c(a) {
        var c = "",
            v = E[a].invoke_group,
            g = {};
        if (v) try {
            g = JSON.parse(v)
        } catch (k) {}
        return c = g[S] ? g[S] : ""
    }

    function v(v) {
        var k = c(v);
        if (k) {
            var _ = a(k);
            _ && _.length && _.forEach(function(a) {
                g(a)
            })
        } else g(v)
    }

    function g(a) {
        var c, v = B.cookie("SE_LAUNCH") || "",
            g = a + ":[\\d]*",
            re = new RegExp(g, "g", "i");
        if (5 === a) {
            if (re.test(v)) return;
            c = v ? v + "_5:" + h : "5:" + h
        } else c = re.test(v) ? v.replace(re, a + ":" + h) : v ? v + "_" + a + ":" + h : a + ":" + h;
        c && B.cookie("SE_LAUNCH", c, {
            expires: 864e5,
            domain: ".baidu.com",
            path: "/"
        })
    }

    function k(a) {
        var c = B.cookie("SE_LAUNCH") || "",
            v = new RegExp(a + ":(\\d+)", "ig").exec(c);
        return v ? +v[1] : void 0
    }

    function _(a, c) {
        if (!a) return !0;
        var v = k(a);
        return !v || !c || 0 >= +c ? !0 : parseInt(Date.now() / 1e3 / 60, 10) - w - v < +c ? !1 : !0
    }
    var h = parseInt(sSession.serverTime / 60, 10),
        w = parseInt(Date.now() / 1e3 / 60, 10) - h,
        S = "shutdown_trigger_interval",
        E = window.sSession.invokeApps.control;
    return {
        setCookie: v,
        checkInvokeHZ: _
    }
});