
        (function() {
            function n() {
                var a = document.domain;
                if (a.indexOf("sogou.com") == a.length - 9) return ".sogou.com";
                if (a.indexOf("soso.com") == a.length - 8) return ".soso.com";
                if (-1 != a.indexOf("sogo.com")) return ".sogo.com"
            }

            function p() {
                uigs_cl("appadIndex", "button");
                var a = document.createElement("iframe");
                a.src = e;
                a.style.display = "none";
                document.body.appendChild(a);
                var b = +new Date;
                setTimeout(function() {
                    if (700 > +new Date - b) {
                        uigs_cl("appadIndex", "callFailure");
                        var a = "http://m.sogou.com/web/redir.jsp?u=http%3A%2F%2Fappsearch.m.sogou.com%2Fapks%2FSogouSearch_1154.apk&w=1909";
                        "ios" === k ? a = "http://sa.sogou.com/ios/download.html?action=gohome" : f && (a = f);
                        g && (a = f);
                        window.location.href = a
                    } else uigs_cl("appadIndex", "callSuccess")
                }, 500)
            }

            function l(a, b, c) {
                a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
            }
            var h = document.getElementById("indexAppOne");
            if (h) {
                var q = setInterval(function() {
                        window.uigs_pv && (clearInterval(q), window.uigs_pv("appadIndex", "show"))
                    }, 1E3),
                    k = -1 != window.navigator.userAgent.toString().toLowerCase().indexOf("android") ? "android" : "ios",
                    e = "sogousearch://entry",
                    r = document.getElementById("indexAppOneClose"),
                    d = document.getElementById("indexAppOneBtn");
                document.getElementById("keyword");
                document.getElementById("indexAppOne");
                var t = d.getAttribute("data-openurl"),
                    m = d.getAttribute("type"),
                    f = d.getAttribute("data-downloadurl");
                "ios" === k && (e = "http://sa.sogou.com/ios/download.html?action=gohome");
                var g = !1;
                if (-1 !== m.indexOf("ios") || -1 !== m.indexOf("android")) g = !0;
                g && (e = t);
                l(d, "click", function() {
                    p()
                });
                l(r, "click", function() {
                    uigs_cl("appadIndex", "close");
                    h.parentNode.removeChild(h);
                    var a = +new Date,
                        b = 1 / 24,
                        c = new Date;
                    c.setTime(c.getTime() + 864E5 * b);
                    document.cookie = "appAdIndex-bottom=" + a + (null == b ? "" : ";expires=" + c.toGMTString()) + ";path=/;domain=" + n()
                })
            }
        })();
    