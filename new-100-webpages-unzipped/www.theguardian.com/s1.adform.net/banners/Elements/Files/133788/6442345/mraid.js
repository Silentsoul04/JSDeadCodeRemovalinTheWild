! function(e, t) {
    var r, s = e.mraid,
        a = [];
    if (!e._adfImageTemplate) {
        if (s) {
            r = s.useCustomClose, s.useCustomClose = function(e) {
                a.push(e)
            }, s.addEventListener("ready", function() {
                var e = a.length;
                s.useCustomClose = r, e && s.useCustomClose(a[e - 1])
            });
            var i = t.head || t.getElementsByTagName("head")[0],
                n = t.createElement("style");
            return n.type = "text/css", n.appendChild(t.createTextNode("*, div, *::after { font-family: sans-serif !important; }")), /android.+wv.+chrome/i.test(e.navigator.userAgent) && "file://android_assets/" === e.location.href && i && i.appendChild(n)
        }
        var o = !1;
        try {
            o = Boolean(e.frameElement)
        } catch (e) {}
        if (!o || frameElement.hasAttribute("data-adfm-ad")) {
            var c = t.currentScript;
            c || (c = t.querySelector('script[src="mraid.js"]'));
            var d = "/banners/scripts/mobile/";
            if (d += o ? "mraid.js?1570089649689" : "mraid.frame.js?1570089649689", c && c.async) {
                var m = t.createElement("script");
                m.src = d, c.parentNode.insertBefore(m, c.nextSibling || c)
            } else t.write('<script src="' + d + '"><\/script>')
        } else e.API_URL && t.write('<script src="' + e.API_URL + '"><\/script>')
    }
}(window, document);