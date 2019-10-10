
        ! function(e, o) {
            ! function(t, n) {
                function r() {
                    var e, o, n, r, a;
                    l.onerror = function() {
                        return !0
                    }, e = 162, o = "12px", s.head.parentNode.removeChild(s.head), setInterval(function() {
                        s && s.body && (s.body.lastChild && s.body.lastChild.className && "wipe-msg" === s.body.lastChild.className || (a = t.replace("{url}", w).replace("{faq}", z), "number" == typeof l.innerWidth ? n = l.innerWidth : s.body.clientWidth && (n = s.body.clientWidth), n && n < 162 && (e = n, o = "10px"), r = '<div class="wipe-msg" style="font-size:' + o + ';text-align:left;"><div style="margin-bottom:3px;"><img alt="Flickr" width="' + e + '" src="https://combo.staticflickr.com/pw/images/logo_home.png"></div><div style="padding-left:5px;line-height:1.2em;">' + a + "</div></div>", s.body.style.margin = "0", s.body.innerHTML = r))
                    }, 200)
                }

                function a() {
                    for (var e = self, o = 0; e !== e.parent;) o += 1, e = e.parent;
                    return o
                }
                var i, c, l = e,
                    s = o,
                    d = top.location,
                    m = self.location,
                    g = s.referrer,
                    p = /^[A-Za-z]+:\/{2,3}(?:[0-9\-A-Za-z]+\.)*flickr\.(?:(?:com)|(?:net))(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
                    h = m.protocol && m.protocol.indexOf("http") < 0,
                    f = p.test(m),
                    b = f ? m.href : n + "/",
                    u = f && /\/photos\/[^\/]+\/(\d+)/i.exec(m.pathname),
                    y = (u && parseInt(u[1], 10), p.test(g)),
                    v = /^[A-Za-z]+:\/{2,3}(?:[0-9\-A-Za-z]+\.)*(?:(?:flickr\.(?:(?:com)|(?:net)))|(?:yahoo\.(?:(?:com)|(?:net)|(?:(?:com?\.)?[A-Za-z]{2})))|(?:creativecommons\.org)|(?:eyewonderlabs\.com)|(?:stumbleupon\.com)|(?:screenqueri\.es)|(?:su\.pr)|(?:bing\.com)|(?:bingj\.com)|(?:webcache\.googleusercontent\.com)|(?:google\.(?:(?:com)|(?:(?:com?\.)?[A-Za-z]{2}))))(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i.test(g),
                    z = (/^[A-Za-z]+:\/{2,3}(?:[0-9\-A-Za-z]+\.)*(?:(?:(?:google)|(?:bing))\.(?:(?:com)|(?:(?:com?\.)?[A-Za-z]{2})))(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i.test(g), n + "/frame_redir.gne?source=" + encodeURIComponent(g) + "&dest=" + encodeURIComponent(n + "/help/blogging/#1392237")),
                    w = n + "/frame_redir.gne?source=" + encodeURIComponent(g) + "&dest=" + encodeURIComponent(b);
                f && m === d || h || (f || /^[A-Za-z]+:\/{2,3}(?:[0-9\-A-Za-z]+\.)*(?:(?:flickr\.(?:(?:com)|(?:net)))|(?:yahoo\.(?:(?:com)|(?:net)|(?:(?:com?\.)?[A-Za-z]{2})))|(?:translate\.google\.com)|(?:translate\.googleusercontent\.com)|(?:web\.archive\.org))(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i.test(m) ? !v && a() > 0 ? i = !0 : !y && a() > 1 && (i = !0) : i = !0), i ? r() : v && !y && ((c = o.createElement("base")).target = "_top", o.getElementsByTagName("head")[0].appendChild(c))
            }('We\'re sorry, Flickr <a href="{faq}" target="_top">doesn\'t allow embedding within frames</a>.<br><br>If you\'d like to view this content, <a href="{url}" target="_top">please click here</a>.', "https://www.flickr.com")
        }(window, document);
    