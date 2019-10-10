/*
 Quantcast measurement tag
 Copyright (c) 2008-2019, Quantcast Corp.
*/
(function(b, h, g) {
    try {
        __qc("defaults", b, {
            labels: "_fp.event.Default"
        })
    } catch (s) {}
    var m = function(a) {
            var b = g.createElement("a");
            b.href = a;
            return b
        },
        n = function(a) {
            return a.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g, "")
        },
        p = function(a) {
            return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        },
        r = function(a, b) {
            if (!b) return b;
            var c, d;
            c = -1 !== a.toLowerCase().indexOf("tag") || -1 !== a.toLowerCase().indexOf("keyword") || 0 === a.toLowerCase().indexOf("qc:");
            d = -1 === a.toLowerCase().indexOf("tag") && -1 === a.toLowerCase().indexOf("keyword") &&
                0 === a.toLowerCase().indexOf("qc:") ? !1 : !0;
            d && (b = b.replace(/\.+/g, " "));
            if (c) {
                d = b.split(",");
                for (c = 0; c < d.length; c++) d[c] = n(d[c]);
                return d
            }
            return n(b.replace(/,+/g, " "))
        },
        q = function(a, b, c) {
            return a ? "nc" === a ? !b || !c || 0 > b.indexOf(c) : "eq" === a ? b === c : "sw" === a ? 0 === b.indexOf(c) : "ew" === a ? (a = b.length - c.length, b = b.lastIndexOf(c, a), -1 !== b && b === a) : "c" === a ? 0 <= b.indexOf(c) : !1 : !1
        },
        a = function(a, b, c) {
            var d;
            d = h.top === h.self ? g.location.href : m(g.referrer).href;
            q(b, d, c) ? a(d) : a(!1)
        },
        k = function(a, b, c) {
            var d;
            d = h.top === h.self ?
                g.location.pathname : m(g.referrer).pathname;
            q(b, d, c) ? a(d) : a(!1)
        },
        f = function(a, b, c) {
            b = document.getElementsByTagName("meta");
            for (var d, f, e = [], g = 0; g < b.length; g++) d = b[g], f = d.getAttribute("name") || d.getAttribute("property"), f == c && (e = e.concat(r(c, d.getAttribute("content"))));
            0 < e.length ? a(e) : a(!1)
        },
        l = function(a) {
            return {
                labels: a
            }
        },
        c = function(a) {
            return "array" === p(a) ? l(a.join(",")) : l("" + a)
        },
        e = function(a, b) {
            var c = [],
                d;
            if ("array" === p(b)) {
                for (d = 0; d < b.length; d++) c.push(a + "." + b[d]);
                return l(c.join(","))
            }
            return l(a +
                "." + b)
        };
    __qc.apply(null, ["rules", [b, null, [
                [c, "_fp.event.Everyone Community"]
            ],
            [
                [a, "sw", "https://vimeo.com/everyone"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Upload Create"]
            ],
            [
                [a, "eq", "https://vimeo.com/create"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Store Premium"]
            ],
            [
                [a, "sw", "https://vimeo.com/store/premium"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Store Pro"]
            ],
            [
                [a, "sw", "https://vimeo.com/store/pro"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Vimeo Custom Plans"]
            ],
            [
                [a, "c", "https://join.vimeo.com/custom/"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Vimeo Live Pricing"]
            ],
            [
                [a, "c",
                    "/live#pricing"
                ]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Vimeo Live Business"]
            ],
            [
                [k, "eq", "/store/live/business"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Vimeo Live Pro"]
            ],
            [
                [k, "eq", "/store/live/pro"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Vimeo Live"]
            ],
            [
                [k, "eq", "/live"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Tiny Beach Bikinis"]
            ],
            [
                [a, "eq", "https://vimeo.com/115492512"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Effects On The Brain"]
            ],
            [
                [a, "eq", "https://vimeo.com/100518405"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.User46389790"]
            ],
            [
                [a, "eq", "https://vimeo.com/user46389790/likes"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Stats"]
            ],
            [
                [a, "c", "/stats"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Settings"]
            ],
            [
                [a, "c", "/settings"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Categories"]
            ],
            [
                [a, "c", "/categories"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Groups"]
            ],
            [
                [a, "c", "/groups"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Home"]
            ],
            [
                [a, "c", "https://vimeo.com/home"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Log In"]
            ],
            [
                [a, "c", "/log_in"],
                [a, "c", "/forgot_password"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Sign Up"]
            ],
            [
                [a, "c", "https://vimeo.com/join"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Upload"]
            ],
            [
                [a, "c", "/upload"]
            ]
        ],
        [b, null, [
                [c,
                    "_fp.event.Search"
                ]
            ],
            [
                [a, "c", "https://vimeo.com/search"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Manage Videos"]
            ],
            [
                [a, "eq", "https://vimeo.com/manage/videos"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Store Plus"]
            ],
            [
                [a, "sw", "https://vimeo.com/store/plus"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Start Selling"]
            ],
            [
                [a, "sw", "vimeo.com/"],
                [a, "c", "startselling"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Upgrade"]
            ],
            [
                [a, "c", "vimeo.com"],
                [a, "c", "/upgrade"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Business"]
            ],
            [
                [a, "c", "vimeo.com/"],
                [a, "c", "/business"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Plus"]
            ],
            [
                [a,
                    "c", "vimeo.com"
                ],
                [a, "c", "/plus"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Professionals"]
            ],
            [
                [a, "c", "vimeo.com"],
                [a, "c", "professionals"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Homepage"]
            ],
            [
                [k, "eq", "/"],
                [a, "c", "vimeo.com"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Vimeo Filmmaker 1"]
            ],
            [
                [a, "eq", "https://vimeo.com/185344862"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Vimeo Filmmaker 2"]
            ],
            [
                [a, "eq", "https://vimeo.com/185068072"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Vimeo Filmmaker 3"]
            ],
            [
                [a, "eq", "https://vimeo.com/192854788"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Vimeo PRO"]
            ],
            [
                [a, "eq", "https://vimeo.com/72223143"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Busines Series Analyze"]
            ],
            [
                [a, "eq", "https://vimeo.com/182618576"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Business Series: Market"]
            ],
            [
                [a, "eq", "https://vimeo.com/182617759"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Business Series Collaborate"]
            ],
            [
                [a, "eq", "https://vimeo.com/182616597"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Business Series Manage"]
            ],
            [
                [a, "eq", "https://vimeo.com/182594079"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Business Series Create"]
            ],
            [
                [a, "eq", "https://vimeo.com/182592195"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Business Series Intro"]
            ],
            [
                [a, "eq", "https://vimeo.com/182585525"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Product Video Vimeo Business"]
            ],
            [
                [a, "eq", "https://vimeo.com/172601404"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Birch Coffee"]
            ],
            [
                [a, "eq", "https://vimeo.com/155702469"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Biz 30 Learn More"]
            ],
            [
                [a, "eq", "https://vimeo.com/174842402"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Biz 30 Join Now"]
            ],
            [
                [a, "eq", "https://vimeo.com/174842401"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Biz 30 Get Vimeo Business"]
            ],
            [
                [a, "eq", "https://vimeo.com/174842400"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Illusions"]
            ],
            [
                [a, "sw", "https://vimeo.com/164769476"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.The Present"]
            ],
            [
                [a, "sw", "https://vimeo.com/152985022"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Mon Love 10 Muen"]
            ],
            [
                [a, "sw", "https://vimeo.com/169719465"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.8 de junio libran las modelos"]
            ],
            [
                [a, "sw", "https://vimeo.com/103227182"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Date Ariane"]
            ],
            [
                [a, "sw", "https://vimeo.com/171954467"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.En dansant sur la terrasse"]
            ],
            [
                [a, "sw", "https://vimeo.com/104339262"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Hasta los dientes"]
            ],
            [
                [a, "sw", "https://vimeo.com/157810194"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Staff Picks"]
            ],
            [
                [a, "eq", "https://vimeo.com/channels/staffpicks"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.On Demand"]
            ],
            [
                [a, "eq", "https://vimeo.com/ondemand"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.On Demand Browse TV Series"]
            ],
            [
                [a, "eq", "https://vimeo.com/ondemand/browse/tv+series"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Start Selling"]
            ],
            [
                [a, "eq", "https://vimeo.com/ondemand/startselling"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Blog"]
            ],
            [
                [a, "c", "blog"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.360 Cinema"]
            ],
            [
                [a,
                    "c", "360vr"
                ]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Animation"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/animation"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Art and Design"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/art"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Cameras and Techniques"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/cameratechniques"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Comedy"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/comedy"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Documentary"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/documentary"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Experimental"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/experimental"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Fashion"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/fashion"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Food"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/food"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Instructionals"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/instructionals"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Music"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/music"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Narrative"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/narrative"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Personal"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/personal"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Reporting and Journalism"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/journalism"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Sports"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/sports"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Talks"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/talks"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Category Travel"]
            ],
            [
                [a, "eq", "https://vimeo.com/categories/travel"]
            ]
        ],
        [b, null, [
                [c, "_fp.event.Browse On Demand"]
            ],
            [
                [a, "c", "vimeo.com/ondemand/browse"]
            ]
        ],
        [b, null, [
                [e, "_fp.channel.title"]
            ],
            [
                [f, "exactmatch", "og:title"],
                [a, "sw", "https://vimeo.com/1"]
            ]
        ],
        [b, null, [
                [e, "_fp.channel.title"]
            ],
            [
                [f, "exactmatch", "og:title"],
                [a, "sw", "https://vimeo.com/2"]
            ]
        ],
        [b, null, [
                [e, "_fp.channel.title"]
            ],
            [
                [f, "exactmatch", "og:title"],
                [a, "sw", "https://vimeo.com/4"]
            ]
        ],
        [b, null, [
                [e, "_fp.channel.title"]
            ],
            [
                [f, "exactmatch", "og:title"],
                [a, "sw", "https://vimeo.com/3"]
            ]
        ],
        [b, null, [
                [e, "_fp.channel.title"]
            ],
            [
                [f,
                    "exactmatch", "og:title"
                ],
                [a, "sw", "https://vimeo.com/5"]
            ]
        ],
        [b, null, [
                [e, "_fp.channel.title"]
            ],
            [
                [f, "exactmatch", "og:title"],
                [a, "sw", "https://vimeo.com/6"]
            ]
        ],
        [b, null, [
                [e, "_fp.channel.title"]
            ],
            [
                [f, "exactmatch", "og:title"],
                [a, "sw", "https://vimeo.com/7"]
            ]
        ],
        [b, null, [
                [e, "_fp.channel.title"]
            ],
            [
                [f, "exactmatch", "og:title"],
                [a, "sw", "https://vimeo.com/8"]
            ]
        ],
        [b, null, [
                [e, "_fp.channel.title"]
            ],
            [
                [f, "exactmatch", "og:title"],
                [a, "sw", "https://vimeo.com/9"]
            ]
        ],
        [b, null, [
                [e, "_fp.channel.title"]
            ],
            [
                [f, "exactmatch", "og:title"],
                [a, "sw", "https://vimeo.com/0"]
            ]
        ]
    ])
})("p-Tx6XHrG_zs1Vy", window, document);