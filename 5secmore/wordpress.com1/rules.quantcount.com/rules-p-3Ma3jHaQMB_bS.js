/*
 Quantcast measurement tag
 Copyright (c) 2008-2019, Quantcast Corp.
*/
(function(a, f, h) {
    try {
        __qc("defaults", a, {
            labels: "_fp.event.Default"
        })
    } catch (s) {}
    var l = function(d) {
            var g = h.createElement("a");
            g.href = d;
            return g
        },
        m = function(d) {
            return d.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g, "")
        },
        n = function(d) {
            return {}.toString.call(d).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        },
        r = function(d, g) {
            if (!g) return g;
            var a, b;
            a = -1 !== d.toLowerCase().indexOf("tag") || -1 !== d.toLowerCase().indexOf("keyword") || 0 === d.toLowerCase().indexOf("qc:");
            b = -1 === d.toLowerCase().indexOf("tag") && -1 === d.toLowerCase().indexOf("keyword") &&
                0 === d.toLowerCase().indexOf("qc:") ? !1 : !0;
            b && (g = g.replace(/\.+/g, " "));
            if (a) {
                b = g.split(",");
                for (a = 0; a < b.length; a++) b[a] = m(b[a]);
                return b
            }
            return m(g.replace(/,+/g, " "))
        },
        p = function(d, a, b) {
            return d ? "nc" === d ? !a || !b || 0 > a.indexOf(b) : "eq" === d ? a === b : "sw" === d ? 0 === a.indexOf(b) : "ew" === d ? (d = a.length - b.length, a = a.lastIndexOf(b, d), -1 !== a && a === d) : "c" === d ? 0 <= a.indexOf(b) : !1 : !1
        },
        c = function(a, b, c) {
            var e;
            e = f.top === f.self ? h.location.href : l(h.referrer).href;
            p(b, e, c) ? a(e) : a(!1)
        },
        q = function(a, b, c) {
            var e;
            e = f.top === f.self ?
                h.location.pathname : l(h.referrer).pathname;
            p(b, e, c) ? a(e) : a(!1)
        },
        k = function(a) {
            return {
                labels: a
            }
        },
        b = function(a) {
            return "array" === n(a) ? k(a.join(",")) : k("" + a)
        };
    __qc.apply(null, ["rules", [a, null, [
                [b, "_fp.event.Step 4 - Plans"]
            ],
            [
                [c, "eq", "https://wordpress.com/start/onboarding-blog/plans"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Site Title"]
            ],
            [
                [c, "eq", "https://wordpress.com/start/onboarding-blog/site-title"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Checklist"]
            ],
            [
                [c, "c", "https://wordpress.com/checklist/"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Plans"]
            ],
            [
                [c, "eq", "https://wordpress.com/start/onboarding-blog/plans"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Use Your Own Domain"]
            ],
            [
                [c, "eq", "https://wordpress.com/start/domains/use-your-domain"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Site Domains"]
            ],
            [
                [c, "eq", "https://wordpress.com/start/domains"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Site Topic"]
            ],
            [
                [c, "eq", "https://wordpress.com/start/onboarding-blog/site-topic"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Site Type"]
            ],
            [
                [c, "eq", "https://wordpress.com/start/site-type"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Homepage"]
            ],
            [
                [q, "eq",
                    "https://wordpress.com/"
                ]
            ]
        ],
        [a, null, [
                [function(a, b) {
                    var c = [],
                        e;
                    if ("array" === n(b)) {
                        for (e = 0; e < b.length; e++) c.push(a + "." + b[e]);
                        return k(c.join(","))
                    }
                    return k(a + "." + b)
                }, "_fp.event.OGtitle"]
            ],
            [
                [function(a, b, c) {
                    b = document.getElementsByTagName("meta");
                    for (var e, h, f = [], k = 0; k < b.length; k++) e = b[k], h = e.getAttribute("name") || e.getAttribute("property"), h == c && (f = f.concat(r(c, e.getAttribute("content"))));
                    0 < f.length ? a(f) : a(!1)
                }, "exactmatch", "og:title"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.VeriSign Campaign Landing Pae"]
            ],
            [
                [c,
                    "eq", "https://wordpress.com/domains/get/com"
                ]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Design Type with Store"]
            ],
            [
                [c, "eq", "/design-type-with-store"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Jetpack Connect Plans"]
            ],
            [
                [c, "c", "wordpress.com/jetpack/connect/plans"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Plans Page"]
            ],
            [
                [c, "c", "wordpress.com/plans"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Themes Page"]
            ],
            [
                [c, "c", "wordpress.com/themes/"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Purchases"]
            ],
            [
                [c, "c", "wordpress.com/me/purchases"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Homepage"]
            ],
            [
                [q, "eq", "/"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Website Landing Page"]
            ],
            [
                [c, "c", "wordpress.com/website"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Easy Steps Landing Page"]
            ],
            [
                [c, "c", "wordpress.com/easy"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Personal Landing Page"]
            ],
            [
                [c, "c", "wordpress.com/personal"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Business Landing Page"]
            ],
            [
                [c, "c", "wordpress.com/business"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Brand Everywhere Landing Page"]
            ],
            [
                [c, "c", "wordpress.com/brand-everywhere"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Business Everywhere Landing Page"]
            ],
            [
                [c, "c", "wordpress.com/business-everywhere"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Remove Ads Landing Page"]
            ],
            [
                [c, "c", "wordpress.com/remove-ads"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Start - Themes"]
            ],
            [
                [c, "eq", "https://wordpress.com/start/themes"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Step 1 - Lets Create Your New Site"]
            ],
            [
                [c, "eq", "https://wordpress.com/start/design-type-with-store?ref\x3dhomepage"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Step 3 - Domains"]
            ],
            [
                [c, "eq", "https://wordpress.com/start/onboarding-blog/domains"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Step 5 - User Account"]
            ],
            [
                [c, "eq", "https://wordpress.com/start/user"]
            ]
        ],
        [a, null, [
                [b, "_fp.subchannel.Checkout Process"]
            ],
            [
                [c, "sw", "https://wordpress.com/checkout/"]
            ]
        ]
    ])
})("p-3Ma3jHaQMB_bS", window, document);