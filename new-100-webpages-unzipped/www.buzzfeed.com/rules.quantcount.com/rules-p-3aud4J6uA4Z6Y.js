/*
 Quantcast measurement tag
 Copyright (c) 2008-2019, Quantcast Corp.
*/
(function(a, l, g) {
    var m = function(e) {
            return e.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g, "")
        },
        n = function(e) {
            return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        },
        p = function(e, h) {
            if (!h) return h;
            var a, b;
            a = -1 !== e.toLowerCase().indexOf("tag") || -1 !== e.toLowerCase().indexOf("keyword") || 0 === e.toLowerCase().indexOf("qc:");
            b = -1 === e.toLowerCase().indexOf("tag") && -1 === e.toLowerCase().indexOf("keyword") && 0 === e.toLowerCase().indexOf("qc:") ? !1 : !0;
            b && (h = h.replace(/\.+/g, " "));
            if (a) {
                b = h.split(",");
                for (a =
                    0; a < b.length; a++) b[a] = m(b[a]);
                return b
            }
            return m(h.replace(/,+/g, " "))
        },
        q = function(e, a, b) {
            return e ? "nc" === e ? !a || !b || 0 > a.indexOf(b) : "eq" === e ? a === b : "sw" === e ? 0 === a.indexOf(b) : "ew" === e ? (e = a.length - b.length, a = a.lastIndexOf(b, e), -1 !== a && a === e) : "c" === e ? 0 <= a.indexOf(b) : !1 : !1
        },
        d = function(a, b, c) {
            var d;
            if (l.top === l.self) d = g.location.href;
            else {
                d = g.referrer;
                var k = g.createElement("a");
                k.href = d;
                d = k.href
            }
            q(b, d, c) ? a(d) : a(!1)
        },
        b = function(a, b, d) {
            b = document.getElementsByTagName("meta");
            for (var c, k, f = [], g = 0; g < b.length; g++) c =
                b[g], k = c.getAttribute("name") || c.getAttribute("property"), k == d && (f = f.concat(p(d, c.getAttribute("content"))));
            0 < f.length ? a(f) : a(!1)
        },
        f = function(a) {
            return {
                labels: a
            }
        },
        c = function(a, b) {
            var d = [],
                c;
            if ("array" === n(b)) {
                for (c = 0; c < b.length; c++) d.push(a + "." + b[c]);
                return f(d.join(","))
            }
            return f(a + "." + b)
        };
    __qc.apply(null, ["rules", [a, null, [
                [c, "Distribution Platforms.TV"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dtv"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Apple News"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dapplenews"]
            ]
        ],
        [a, null, [
                [c, "Buzzfeed News.Title"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "buzzfeednews.com"]
            ]
        ],
        [a, null, [
                [function(a) {
                    return "array" === n(a) ? f(a.join(",")) : f("" + a)
                }, "Videos"]
            ],
            [
                [d, "c", "buzzfeed.com/videos"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Instagram Stories"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dinstagramstories"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.YCD"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dycd"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Oath"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3doath"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Newsletters"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dnewsletter"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.SmartNews"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dsmartnews"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Pinterest"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dpinterest"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Yahoo Gemini"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dyahoogemini"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Twitter Audience Platform"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dtap"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Twitter"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dtwitter"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Taboola"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dtaboola"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.StumbleUpon"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dstumbleupon"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Snapchat"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dsnapchat"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Reddit"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dreddit"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Outbrain"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3doutbrain"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Facebook Audience Network"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dfan"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.Facebook"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dfacebook"]
            ]
        ],
        [a, null, [
                [c, "Distribution Platforms.AdWords"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "c", "distro_platform\x3dadwords"]
            ]
        ],
        [a, null, [
                [c, "Title"]
            ],
            [
                [b, "exactmatch", "og:title"],
                [d, "nc", "buzzfeednews.com"]
            ]
        ],
        [a, null, [
                [c, "Category"]
            ],
            [
                [b, "exactmatch", "article:section"]
            ]
        ],
        [a, null, [
                [c, "Author"]
            ],
            [
                [b, "exactmatch", "author"]
            ]
        ],
        [a, null, [
                [c, "BuzzID"]
            ],
            [
                [b, "exactmatch", "bf:buzzid"]
            ]
        ]
    ])
})("p-3aud4J6uA4Z6Y", window, document);