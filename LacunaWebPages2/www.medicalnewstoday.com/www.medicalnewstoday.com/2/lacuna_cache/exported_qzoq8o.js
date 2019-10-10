
        fireOrSaveJsFunctions(1, function() {___jdce_logger("lacuna_cache/exported_qzoq8o.js", 34, 4187);

            (function() {___jdce_logger("lacuna_cache/exported_qzoq8o.js", 61, 4171);
                function t() {___jdce_logger("lacuna_cache/exported_qzoq8o.js", 90, 418);
                    for (var a = [8], e = 1; 2 >= e; e++) a.push(8 + e), a.push(8 - e);
                    a = a[Math.floor(Math.random() * a.length)];
                    return {
                        b: a,
                        a: 0 == Math.floor(Math.random() * a)
                    }
                }

                function k(a) {___jdce_logger("lacuna_cache/exported_qzoq8o.js", 436, 765);
                    var e = a = a.replace(":", "");
                    try {
                        for (var b = 0; 100 > b && (a = decodeURIComponent(a), e != a) && !a.match(/^http(s)?\:/); b++) e = a
                    } catch (c) {}
                    return a.replace(/(^\s+|\s+$)/g, "")
                }
                try {
                    if (!location || !location.hostname || !location.pathname) return !1;
                    var c = document.location.hostname.replace(/^www\./, ""),
                        u = function() {___jdce_logger("lacuna_cache/exported_qzoq8o.js", 984, 1481);
                            for (var a, b = document.getElementsByTagName("meta"), c, d = 0, f = b.length; d < f; d++)
                                if (c = b[d], "og:title" === c.getAttribute("property")) {
                                    a = c.getAttribute("content");
                                    break
                                }
                            a || (a = document.title || "Untitled");
                            return a
                        }(),
                        b = {},
                        b = function(a, b, c) {___jdce_logger("lacuna_cache/exported_qzoq8o.js", 1545, 1790);
                            a.l1 = b;
                            a.l2 = c;
                            a.l3 = "__page__";
                            a.l4 = "-";
                            return a
                        }(b, c, u),
                        l = (new Date).getTime(),
                        m = Math.floor(Math.random() * Math.pow(10, 12)),
                        d, f;
                    f = t();
                    f.a ? d = f.b : d = 0;
                    b.zmoatab_cm = d;
                    b.t = l;
                    b.de = m;
                    b.zMoatAB_SNPT = !0;
                    var g;
                    d ? g = d : g = 1;
                    var n;
                    n = f ? f.a ? !0 : !1 : !0;
                    var c = [],
                        p = [k(b.l1), k(b.l2), k(b.l3), k(b.l4)].join(":"),
                        v = "https://wve3oiypgri4-a.akamaihd.net/z.gif?e=17&d=" +
                        encodeURIComponent(p) + "&de=" + m + "&t=" + l + "&i=HEALTHLINECONTENT1&cm=" + g + "&mp=1&ac=1&pl=1&bq=10&vc=2&cs=0",
                        w = "https://px.moatads.com/pixel.gif?e=17&d=" + encodeURIComponent(p) + "&de=" + m + "&t=" + l + "&i=HEALTHLINECONTENT1&cm=" + g + "&mp=0&ac=1&pl=1&bq=10&ad_type=img&vc=2&cs=0",
                        x = "https://px.moatads.com/pixel.gif?e=17&d=" + encodeURIComponent(p) + "&de=" + m + "&t=" + l + "&i=HEALTHLINECONTENT1&cm=" + g + "&ku=1&ac=1&pl=1&bq=10&ad_type=img&vc=2&cs=0";
                    n && ((new Image).src = v, (new Image).src = w);
                    for (var q in b) c.push(q + "=" + encodeURIComponent(b[q]));
                    var c = c.join("&"),
                        c = c + "&vc=2",
                        h = document.createElement("script");
                    h.type = "text/javascript";
                    h.async = !0;
                    n && (h.onerror = function() {___jdce_logger("lacuna_cache/exported_qzoq8o.js", 3458, 3536);
                        (new Image).src = x
                    });
                    var r = document.getElementsByTagName("script")[0];
                    r.parentNode.insertBefore(h, r);
                    h.src = "https://z.moatads.com/healthlinecontent451781663455/moatcontent.js#" + c
                } catch (a) {
                    try {
                        var y = "//pixel.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=MOATCONTENTABSNIPPET1&vc=2&ac=1&k=" + encodeURIComponent(a) + "&j=" + encodeURIComponent(document.referrer) + "&cs=" + (new Date).getTime();
                        (new Image).src = y
                    } catch (e) {}
                }
            })();


        });
    