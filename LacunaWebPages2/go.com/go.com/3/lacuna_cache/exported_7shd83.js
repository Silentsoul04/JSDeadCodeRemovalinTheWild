
        ! function(e) {
            "use strict";
            var t = e.GOC = e.GOC || {};
            t.queue = t.queue || [], t.opts = t.opts || {}
        }(this), GOC.load = function(e, t) {
                "use strict";
                var n = document,
                    i = n.getElementsByTagName("script")[0],
                    r = n.createElement("script");
                r.type = "text/javascript", r.async = "async", r.onload = r.onreadystatechange = function(e, n) {
                    var i = this,
                        r = i.readyState,
                        a = i.parentNode;
                    !a || !n && r && "complete" !== r && "loaded" !== r || (a.removeChild(this), !n && t && t())
                }, r.src = e, i.parentNode.insertBefore(r, i), r = n = i = null
            },
            function(e) {
                "use strict";
                var t = e.encodeURIComponent;
                e.GOC.load("//a.dilcdn.com/g/domains/" + t(e.location.hostname) + ".js")
            }(this),
            function(e) {
                "use strict";
                var t = e.GOC,
                    n = e.encodeURIComponent;
                t.defopts = function(e) {
                    0 === Object.keys(t.opts).length && (t.opts = e)
                }, t.ao = function(e) {
                    var i = [],
                        r = t.opts,
                        a = r.footer;
                    if (r.lang && i.push("lang=" + n(r.lang)), r.cds && i.push("cds"), r.searchtype && i.push("searchtype=" + n(r.searchtype)), r.hide_desktop_menu && i.push("hide_desktop_menu"), r.hide_search && i.push("hide_search"), a)
                        for (var s in a)
                            if (a.hasOwnProperty(s))
                                if ("object" == typeof a[s])
                                    for (var o in a[s]) a[s].hasOwnProperty(o) && i.push("footer[" + s + "][" + o + "]=" + encodeURIComponent(a[s][o]));
                                else i.push("footer[" + encodeURIComponent(s) + "]=" + encodeURIComponent(a[s]));
                    return i.length && (e += (e.indexOf("?") < 0 ? "?" : "&") + i.join("&")), e
                }
            }(this), GOC.css = function(e) {
                "use strict";
                var t = document,
                    n = t.createElement("style"),
                    i = t.getElementsByTagName("head")[0],
                    r = (i || t).getElementsByTagName("script")[0];
                e && (n.setAttribute("type", "text/css"), r ? r.parentNode.insertBefore(n, r) : i.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(t.createTextNode(e)))
            },
            function(e, t) {
                "use strict";
                var n = e.GOC,
                    i = e.screen,
                    r = e.document,
                    a = r.documentElement,
                    s = function() {
                        var e, n, a, s, o, l = i && i.fontSmoothingEnabled;
                        if (l !== t) return l;
                        try {
                            for (e = r.createElement("canvas"), e.width = e.height = 32, n = e.getContext("2d"), n.textBaseline = "top", n.font = "32px Arial", n.fillStyle = n.strokeStyle = "black", n.fillText("O", 0, 0), a = 0; a < 32; a++)
                                for (s = 0; s < 32; s++)
                                    if (o = n.getImageData(a, s, 1, 1).data[3], 255 !== o && 0 !== o) return !0;
                            return !1
                        } catch (e) {
                            return t
                        }
                    },
                    o = function(e) {
                        var t = r.createElement("div");
                        t.innerHTML = "M", t.style.fontFamily = e, a.insertBefore(t, a.firstChild), a.clientWidth, a.removeChild(t)
                    };
                n.pf = function(e, t) {
                    s() === !0 && (n.css(e), o(t))
                }
            }(this);
        GOC.pf("@font-face{font-family:'Matterhorn';src:url(\"https://static-mh.content.disney.io/matterhorn/assets/m4-7e766c2825c7.eot#\") format(\"eot\"),url(\"https://static-mh.content.disney.io/matterhorn/assets/m4-b366701d6945.woff\") format(\"woff\"),url(\"https://static-mh.content.disney.io/matterhorn/assets/m4-ac909dff444f.ttf\") format(\"truetype\"),url(\"https://static-mh.content.disney.io/matterhorn/assets/m4-3d636e3b4270.svg#Matterhorn\") format(\"svg\");font-weight:400;font-style:normal}\n", "Matterhorn");
        GOC.opts.cds = false;
        GOC.opts.bg = "dark";
        GOC.opts.footer = {
            "comscore": "",
            "translations": {}
        };
        GOC.opts.hide_desktop_menu = false;
        GOC.opts.hide_search = false;
        GOC.opts.searchtype = "is";
        GOC.load("https://static-mh.content.disney.io/matterhorn/assets/goc/wide-1d0f58af7e83.js");
        GOC.a = "//a.dilcdn.com/g/us/home/sac/";
        GOC.cart = "//a.dilcdn.com/g/us/cart/";
        GOC.is = "//a.dilcdn.com/g/us/home/is/";
    