/*
 Quantcast measurement tag
 Copyright (c) 2008-2019, Quantcast Corp.
*/
(function(e, m, h) {
    var n = function(a) {
            return a.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g, "")
        },
        p = function(a) {
            return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        },
        r = function(a, b) {
            if (!b) return b;
            var d, c;
            d = -1 !== a.toLowerCase().indexOf("tag") || -1 !== a.toLowerCase().indexOf("keyword") || 0 === a.toLowerCase().indexOf("qc:");
            c = -1 === a.toLowerCase().indexOf("tag") && -1 === a.toLowerCase().indexOf("keyword") && 0 === a.toLowerCase().indexOf("qc:") ? !1 : !0;
            c && (b = b.replace(/\.+/g, " "));
            if (d) {
                c = b.split(",");
                for (d =
                    0; d < c.length; d++) c[d] = n(c[d]);
                return c
            }
            return n(b.replace(/,+/g, " "))
        },
        s = function(a, b, d) {
            return a ? "nc" === a ? !b || !d || 0 > b.indexOf(d) : "eq" === a ? b === d : "sw" === a ? 0 === b.indexOf(d) : "ew" === a ? (a = b.length - d.length, b = b.lastIndexOf(d, a), -1 !== b && b === a) : "c" === a ? 0 <= b.indexOf(d) : !1 : !1
        },
        f = function(a, b, d) {
            var c;
            if (m.top === m.self) c = h.location.href;
            else {
                c = h.referrer;
                var e = h.createElement("a");
                e.href = c;
                c = e.href
            }
            s(b, c, d) ? a(c) : a(!1)
        },
        k = function(a, b, d) {
            b = document.getElementsByTagName("meta");
            for (var c, e, f = [], g = 0; g < b.length; g++) c =
                b[g], e = c.getAttribute("name") || c.getAttribute("property"), e == d && (f = f.concat(r(d, c.getAttribute("content"))));
            0 < f.length ? a(f) : a(!1)
        },
        g = function(a) {
            return {
                labels: a
            }
        },
        q = function(a) {
            return "array" === p(a) ? g(a.join(",")) : g("" + a)
        },
        l = function(a, b) {
            var d = [],
                c;
            if ("array" === p(b)) {
                for (c = 0; c < b.length; c++) d.push(a + "." + b[c]);
                return g(d.join(","))
            }
            return g(a + "." + b)
        };
    __qc.apply(null, ["rules", [e, null, [
                [l, "Gamepedia.Title"]
            ],
            [
                [k, "exactmatch", "og:title"],
                [f, "c", "gamepedia.com"]
            ]
        ],
        [e, null, [
                [l, "Fandom.Article"]
            ],
            [
                [k, "exactmatch",
                    "og:title"
                ],
                [f, "c", "www.fandom.com"]
            ]
        ],
        [e, null, [
                [q, "Wiki Page.Game of Thrones.Daenerys Targaryen"]
            ],
            [
                [f, "c", "gameofthrones.wikia.com/wiki/Daenerys_Targaryen"]
            ]
        ],
        [e, null, [
                [q, "Wiki Page.Game of Thrones.Jon Snow"]
            ],
            [
                [f, "c", "gameofthrones.wikia.com/wiki/Jon_Snow"]
            ]
        ],
        [e, null, [
                [l, "Fandom.Tags"]
            ],
            [
                [k, "exactmatch", "article:tag"],
                [f, "c", "fandom"]
            ]
        ]
    ])
})("p-8bG6eLqkH6Avk", window, document);