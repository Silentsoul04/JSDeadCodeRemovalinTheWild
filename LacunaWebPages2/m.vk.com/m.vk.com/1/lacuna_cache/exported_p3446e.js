
        <!--
        (function(k, a, d, e, f) {
            function l() {
                var c = function() {
                        var b = !1;
                        try {
                            b = new XMLHttpRequest
                        } catch (a) {
                            try {
                                b = new ActiveXObject("Msxml2.XMLHTTP")
                            } catch (d) {
                                try {
                                    b = new ActiveXObject("Microsoft.XMLHTTP")
                                } catch (c) {
                                    b = !1
                                }
                            }
                        }
                        return b ? e : f
                    }(),
                    g = function() {
                        var b = k.createElement("div");
                        b.innerHTML = '<input type="file" />';
                        b = b.getElementsByTagName("input")[0];
                        return "file" != b.type || b.disabled ? f : e
                    }(),
                    h = "ontouchstart" in a ? e : f,
                    m;
                try {
                    m = typeof navigator.geolocation !== d ? e : typeof a.google !== d && typeof google.gears !== d ? e : typeof device !== d && typeof device.getServiceObject !== d ? e : typeof Mojo !== d && "Mojo.Service.Request" !== typeof Mojo.Service.Request ? e : f
                } catch (p) {
                    m = f
                }
                var l = function(b) {
                        try {
                            var d = a.Audio ? new Audio : k.createElement("audio");
                            if (d.canPlayType && d.canPlayType(b) && "no" != d.canPlayType(b)) return e
                        } catch (c) {}
                        return f
                    }("audio/mpeg"),
                    n = function(b) {
                        try {
                            for (var a = k.createElement("div"), c = 0, g = ["webkit", "Moz", "ms", "O", ""], h = g.length; c < h; c++) {
                                var l = g[c],
                                    m = l ? l + b : b.toLowerCase();
                                if (typeof a.style[m] !== d) return e
                            }
                            return f
                        } catch (n) {
                            return f
                        }
                    }("Transform");
                return c + g + h + m + l + n + ((a.XMLHttpRequest || a.XDomainRequest) && (a.FormData || a.FileReader && (a.XMLHttpRequest && XMLHttpRequest.sendAsBinary || a.ArrayBuffer && a.Uint8Array && (a.MozBlobBuilder || a.WebKitBlobBuilder || a.BlobBuilder))) ? e : f)
            }
            var c = a.screen,
                g = c.width || 0,
                c = c.height || 0,
                n = a.devicePixelRatio || 1,
                p = (k.cookie.match(/(^|;\s+)remixmdevice=([^;]+)/) || [])[2] || "",
                h = p.split("/");
            p && g == h[0] && c == h[1] && 7 == h[3].length || (g = [g, c, n, l()].join("/"), k.cookie = "remixmdevice=; expires=" + (new Date(0)).toUTCString() + "; SameSite=None; path=/", k.cookie = "remixmdevice=" + g + "; expires=" + (new Date((new Date).getTime() + 7776E6)).toUTCString() + "; SameSite=None; path=/; domain=.vk.com", (location.search.indexOf('?mode=standalone') !== 0 && k.cookie !== "") && 1 && location.reload())
        })(document, window, "undefined", "!", "-");
        ! function(o, a) {
            var e = o.hash || "",
                t = e.substr(2);
            if ("#/" == e.substr(0, 2)) {
                var i = window.locDomain,
                    n = new Date;
                n.setTime(n.getTime() + 864e5);
                var r = "; expires=" + n.toGMTString();
                document.cookie = ["remixtmp_hash_nav", "=", encodeURI(o.href), r, "; path=/", " SameSite=None;", i ? "; domain=." + i : ""].join(""), !a && (t.match(/^\/*(away|login)(\.php)?([^a-z0-9\.]|$)/) && (t = ""), o.replace(o.protocol + "//" + o.host + "/" + t))
            }
        }(location);
        var al = {
            ver: "4e3OSp+AV2EyrK/WZJn3UI7aYl0BkMDx2TAgfTcD0sA="
        };
        setTimeout(function() {
            !location.hash && window.scrollTo(0, /android/i.test(navigator.userAgent) ? 1 : 0)
        }, 0);
        //-->
    