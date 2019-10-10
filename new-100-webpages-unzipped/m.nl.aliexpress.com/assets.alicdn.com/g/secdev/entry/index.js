(function(a, e, t, n, i, r) {
    if (e.__no_sec_entry) {
        return
    }
    var o = n.userAgent;
    var c = e.getElementsByTagName("head")[0];

    function l(a) {
        var t = e.createElement("script");
        t.src = a;
        return c.appendChild(t)
    }
    var v = "//g.alicdn.com";
    var f = self.goldlog;
    if (f && f.getCdnPath) {
        v = f.getCdnPath()
    }
    v += "/secdev/";
    var m = o.match(/Chrome\/(\d*)/);
    if (m) {
        m = +m[1]
    }
    if (!e._sufei_data2) {
        var d = t() < .3 ? "3.7.9" : "3.7.8";
        var s = l(v + "sufei_data/" + d + "/index.js");
        s.async = e.cookie.indexOf("isg=") < 0;
        s.id = "aplus-sufei"
    }
    var u = .001;
    if (t() < u) {
        e._linkstat_sample = u;
        l(v + "linkstat/index.js?v=1201")
    }
    a.nsrprtrt = 1e-4;
    var g = 0;
    if (!/Mobile/.test(o)) {
        var h = ["taobao.com", "alibaba.com", "alipay.com", "tmall.com", "lazada", "aliexpress.com", "1688.com", "alimama.com", "tb.cn", "xiami.com", "amap.com", "cainiao.com", "aliyun.com", "etao.com", "fliggy.com", "liangxinyao.com", "damai.cn", "daraz.lk", "tmall.hk", "jiyoujia.com", "taopiaopiao.com", "alitrip.com", "fliggy.hk", "alihealth.cn", "alitrip.hk", "ele.me", "gaode.cn", "mp.dfkhgj.com", "mp.bcvbw.com", "m.dfkhgj.com"];
        for (var p = 0; p < h.length; p++) {
            if (i.host && ~i.host.indexOf(h[p])) {
                g = 1;
                break
            }
        }
    }
    if (g) {
        var _ = ["1.0.64", "c", 75];
        var y = ["1.0.66", "d", 77];
        var b = 500;
        var k = _;
        if ((t() * 1e4 | 0) < b) {
            k = y
        }
        if (!k) {
            return
        }
        var x = v + "nsv/" + k[0] + "/";
        var j = x + "ns_" + k[1] + "_" + k[2] + "_3_f.js";
        var M = x + "ns_" + k[1] + "_" + k[2] + "_3_n.js";

        function E() {
            var a = "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";
            if ("WebkitAppearance" in e.documentElement.style) {
                if (escape(n.javaEnabled.toString()) === a) {
                    return true
                }
            }
            return false
        }
        var S = o.match(/Edge\/([\d]*)/);
        var C = o.match(/Safari\/([\d]*)/);
        var w = o.match(/Firefox\/([\d]*)/);
        var I = o.match(/MSIE|Trident/);
        if (S) {
            l(j)
        } else if (m) {
            l(j)
        } else if (C || w || I) {
            l(M)
        } else {
            if (E()) {
                l(j)
            } else {
                l(M)
            }
        }
    }

    function L() {
        var t = a.atob;
        if (!t) {
            return
        }

        function n(a, e) {
            var t = [];
            for (var n in a) {
                t.push(n + "=" + r(a[n]))
            }(new Image).src = e + t.join("&")
        }
        var i = 0;
        var o = "";

        function c() {
            if (++i == 3) {
                clearInterval(u)
            }
            m()
        }
        var v;
        var f = Math.random() * 1e8 | 0;

        function m() {
            var a = v.getUA({
                MaxMTLog: 500,
                MTInterval: 7
            });
            a = f + "|" + a;
            var e = {
                token: a,
                cna: o,
                ext: 7
            };
            n(e, "https://fourier.alibaba.com/ts?")
        }
        var d = +localStorage._xlly;
        if (!d && /xlly=1/.test(e.cookie)) {
            d = +new Date;
            localStorage._xlly = d
        }
        if (d) {
            var s = new Date - d;
            if (s > 1e3 * 3600 * 24) {
                s = 0;
                delete localStorage._xlly
            }
            if (s < 1e3 * 60 * 20) {
                var u = setInterval(c, 1e3 * 60);
                if (a.addEventListener) {
                    a.addEventListener("unload", m)
                }
                var g = e.cookie.match(/cna=([^;]+)/);
                if (g) {
                    o = g[1]
                }
                var h = l(t("aHR0cHM6Ly9nLmFsaWNkbi5jb20vQVdTQy9BV1NDL2F3c2MuanM="));
                var p = unescape("%75%61%62");
                h.onload = function() {
                    a.AWSC && AWSC.use(p, function(a, e) {
                        if (a === "loaded") {
                            v = e
                        }
                    })
                }
            }
        }
    }
    try {
        L()
    } catch (a) {}
})(window, document, Math.random, navigator, location, encodeURIComponent);