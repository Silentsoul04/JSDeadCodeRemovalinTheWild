! function() {
    function g() {
        if (!h) {
            if (document.webkitHidden || document.hidden || document.mozHidden || document.msHidden || !document.hasFocus()) {
                var a = {};
                document && (a.domain = document.domain || "");
                if (_maq) {
                    for (var b in _maq) {
                        a[_maq[b][0]] = _maq[b][1]
                    }
                }
                var c = "";
                for (b in a) {
                    "" != c && (c += "&"), c += b + "=" + encodeURIComponent(a[b])
                }
                c = c + "&ts=" + (new Date).getTime() + "&dur=" + k;
                d.src = f + c;
                h = !0
            } else {
                k += 1
            }
            setTimeout(g, 1000)
        }
    }

    function ss() {
        var a = {};
        document && (a.domain = document.domain || "", a.url = "-", a.title = document.title || "", a.referrer = "-");
        window && window.screen && (a.sh = window.screen.height || 0, a.sw = window.screen.width || 0, a.cd = window.screen.colorDepth || 0);
        navigator && (a.lang = navigator.language || "");
        if (_maq) {
            for (var e in _maq) {
                a[_maq[e][0]] = _maq[e][1]
            }
        }
        var b = "";
        for (e in a) {
            "" != b && (b += "&"), b += e + "=" + encodeURIComponent(a[e])
        }
        b += "&jmid=-&ts=" + (new Date).getTime();
        var d = new Image(1, 1),
            l = "https:" == document.location.protocol ? "https" : "http",
            f = l + "://www.qchannel03.cn/1.gif?";
        d.src = f + b;
        d.onerror = function() {
            f = l + "://bj.qchannel03.cn/1.gif?" + b;
            d.src = f;
            d.onerror = null
        };
        return {
            b: b,
            d: d,
            f: f
        }
    }
    var QtTrack = window.QtTrack = window.QtTrack || {};
    QtTrack.pv = ss;
    var __ret = ss();
    var b = __ret.b;
    var d = __ret.d;
    var f = __ret.f;
    var h = !1,
        k = 0;
    g()
}();