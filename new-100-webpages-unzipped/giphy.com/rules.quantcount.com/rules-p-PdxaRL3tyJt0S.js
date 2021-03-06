/*
 Quantcast measurement tag
 Copyright (c) 2008-2018, Quantcast Corp.
*/
(function(c, a, b) {
    var f = function(a) {
            return a.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g, "")
        },
        k = function(a, e) {
            if (!e) return e;
            var b, d;
            b = "keywords" === a.toLowerCase() || 0 === a.toLowerCase().indexOf("qc:") ? !0 : !1;
            d = 0 === a.toLowerCase().indexOf("qc:") ? !1 : !0;
            d && (e = e.replace(/\.+/g, " "));
            if (b) {
                d = e.split(",");
                for (b = 0; b < d.length; b++) d[b] = f(d[b]);
                return d
            }
            return f(e.replace(/,+/g, " "))
        };
    a = function(b, a, c) {
        a = document.getElementsByTagName("meta");
        for (var d, f, g = [], h = 0; h < a.length; h++) d = a[h], f = d.getAttribute("name") ||
            d.getAttribute("property"), f == c && (g = g.concat(k(c, d.getAttribute("content"))));
        0 < g.length ? b(g) : b(!1)
    };
    b = function(b, a) {
        var c = [],
            d;
        if ("array" === {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()) {
            for (d = 0; d < a.length; d++) c.push(b + "." + a[d]);
            return {
                labels: c.join(",")
            }
        }
        return {
            labels: b + "." + a
        }
    };
    __qc.apply(null, ["rules", [c, null, [
                [b, "keywords"]
            ],
            [
                [a, "exactmatch", "sailthru.tags"]
            ]
        ],
        [c, null, [
                [b, "keywords"]
            ],
            [
                [a, "exactmatch", "news_keywords"]
            ]
        ],
        [c, null, [
                [b, "keywords"]
            ],
            [
                [a, "exactmatch", "keywords"]
            ]
        ],
        [c,
            null, [
                [b, "category"]
            ],
            [
                [a, "exactmatch", "article:tag"]
            ]
        ],
        [c, null, [
                [b, "category"]
            ],
            [
                [a, "exactmatch", "article:section"]
            ]
        ],
        [c, null, [
                [b, "title"]
            ],
            [
                [a, "exactmatch", "twitter:title"]
            ]
        ],
        [c, null, [
                [b, "title"]
            ],
            [
                [a, "exactmatch", "og:title"]
            ]
        ],
        [c, null, [
                [b, "title"]
            ],
            [
                [a, "exactmatch", "title"]
            ]
        ],
        [c, null, [
                [b, "author"]
            ],
            [
                [a, "exactmatch", "article:author"]
            ]
        ],
        [c, null, [
                [b, "author"]
            ],
            [
                [a, "exactmatch", "sailthru.author"]
            ]
        ],
        [c, null, [
                [b, "author"]
            ],
            [
                [a, "exactmatch", "authors"]
            ]
        ],
        [c, null, [
                [b, "author"]
            ],
            [
                [a, "exactmatch", "author"]
            ]
        ]
    ])
})("p-PdxaRL3tyJt0S",
    window, document);