/*
 Quantcast measurement tag
 Copyright (c) 2008-2017, Quantcast Corp.
*/
(function(e, g, f) {
    var l = function(a, b, c) {
            return a ? "nc" === a ? !b || !c || 0 > b.indexOf(c) : "eq" === a ? b === c : "sw" === a ? 0 === b.indexOf(c) : "ew" === a ? (a = b.length - c.length, b = b.lastIndexOf(c, a), -1 !== b && b === a) : "c" === a ? 0 <= b.indexOf(c) : !1 : !1
        },
        h = function(a, b, c) {
            var d;
            if (g.top === g.self) d = f.location.href;
            else {
                d = f.referrer;
                var e = f.createElement("a");
                e.href = d;
                d = e.href
            }
            l(b, d, c) ? a(d) : a(!1)
        },
        k = function(a) {
            return "array" === {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase() ? {
                labels: a.join(",")
            } : {
                labels: "" + a
            }
        };
    __qc("rules", [e, null, [
            [k, "About"]
        ],
        [
            [h, "c", "about.whitepages"]
        ]
    ], [e, null, [
            [k, "JS"]
        ],
        [
            [h, "c", "name/Jon-Snow"]
        ]
    ])
})("p-13CZptiqAcX_w", window, document);