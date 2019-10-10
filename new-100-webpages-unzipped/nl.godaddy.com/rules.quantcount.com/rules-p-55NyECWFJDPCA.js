/*
 Quantcast measurement tag
 Copyright (c) 2008-2019, Quantcast Corp.
*/
(function(a, e, f) {
    try {
        __qc("defaults", a, {
            labels: "_fp.event.Default"
        })
    } catch (p) {}
    var h = function(a) {
            var b = f.createElement("a");
            b.href = a;
            return b
        },
        k = function(a) {
            return a.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g, "")
        },
        l = function(a) {
            return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        },
        n = function(a, b) {
            if (!b) return b;
            var c, d;
            c = -1 !== a.toLowerCase().indexOf("tag") || -1 !== a.toLowerCase().indexOf("keyword") || 0 === a.toLowerCase().indexOf("qc:");
            d = -1 === a.toLowerCase().indexOf("tag") && -1 === a.toLowerCase().indexOf("keyword") &&
                0 === a.toLowerCase().indexOf("qc:") ? !1 : !0;
            d && (b = b.replace(/\.+/g, " "));
            if (c) {
                d = b.split(",");
                for (c = 0; c < d.length; c++) d[c] = k(d[c]);
                return d
            }
            return k(b.replace(/,+/g, " "))
        },
        m = function(a, b, c) {
            return a ? "nc" === a ? !b || !c || 0 > b.indexOf(c) : "eq" === a ? b === c : "sw" === a ? 0 === b.indexOf(c) : "ew" === a ? (a = b.length - c.length, b = b.lastIndexOf(c, a), -1 !== b && b === a) : "c" === a ? 0 <= b.indexOf(c) : !1 : !1
        },
        c = function(a, b, c) {
            var d;
            d = e.top === e.self ? f.location.href : h(f.referrer).href;
            m(b, d, c) ? a(d) : a(!1)
        },
        g = function(a) {
            return {
                labels: a
            }
        },
        b = function(a) {
            return "array" ===
                l(a) ? g(a.join(",")) : g("" + a)
        };
    __qc.apply(null, ["rules", [a, null, [
                [b, "_fp.event.CA Offers Find Perfect Domain Name"]
            ],
            [
                [c, "c", "ca.godaddy.com/offers/cctld/com-or-ca/godaddy-domains"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.CA Professional Business Email"]
            ],
            [
                [c, "c", "ca.godaddy.com/email/professional-business-email"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.CA Domain Search Find"]
            ],
            [
                [c, "c", "ca.godaddy.com/domainsearch/find"]
            ]
        ],
        [a, null, [
                [function(a, b) {
                    var c = [],
                        d;
                    if ("array" === l(b)) {
                        for (d = 0; d < b.length; d++) c.push(a + "." + b[d]);
                        return g(c.join(","))
                    }
                    return g(a +
                        "." + b)
                }, "_fp.title"]
            ],
            [
                [function(a, b, c) {
                    b = document.getElementsByTagName("meta");
                    for (var d, f, e = [], g = 0; g < b.length; g++) d = b[g], f = d.getAttribute("name") || d.getAttribute("property"), f == c && (e = e.concat(n(c, d.getAttribute("content"))));
                    0 < e.length ? a(e) : a(!1)
                }, "exactmatch", "og:title"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Homepage"]
            ],
            [
                [function(a, b, c) {
                    var d;
                    d = e.top === e.self ? f.location.pathname : h(f.referrer).pathname;
                    m(b, d, c) ? a(d) : a(!1)
                }, "eq", "/"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Payment Review Step"]
            ],
            [
                [c, "c", "godaddy.com/Checkout/PaymentReview.aspx"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.SSL Certificate"]
            ],
            [
                [c, "c", "godaddy.com/web-security/ssl-certificate"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Online Store"]
            ],
            [
                [c, "c", "godaddy.com/websites/online-store"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Contact us"]
            ],
            [
                [c, "c", "godaddy.com/contact-us"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Malware Removal"]
            ],
            [
                [c, "c", "godaddy.com/web-security/malware-removal"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Wordpress Hosting"]
            ],
            [
                [c, "c", "godaddy.com/hosting/wordpress-hosting"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Shopping Cart"]
            ],
            [
                [c, "c", "cart.godaddy.com/basket"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Web Hosting"]
            ],
            [
                [c, "c", "godaddy.com/hosting/web-hosting"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Account Review"]
            ],
            [
                [c, "c", "cart.godaddy.com/Checkout/AccountReview"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Bulk Search"]
            ],
            [
                [c, "c", "/www.godaddy.com/domains/bulk-search"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Scanner"]
            ],
            [
                [c, "c", "godaddy.com/scanner"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Domain Name Search"]
            ],
            [
                [c, "c", "godaddy.com/domains/domain-name-search"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Premium DNS"]
            ],
            [
                [c, "c", "godaddy.com/hosting/premium-dns"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Legal Agreements"]
            ],
            [
                [c, "c", "godaddy.com/legal-agreements"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.French Canadian Homepage"]
            ],
            [
                [c, "eq", "https://ca.godaddy.com/fr/"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Customize Domains"]
            ],
            [
                [c, "c", "godaddy.com/domains/manager/customize"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Empty Cart"]
            ],
            [
                [c, "c", "cart.godaddy.com/EmptyCart"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Dedicated IP"]
            ],
            [
                [c, "c", "godaddy.com/hosting/dedicated-ip"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Careers"]
            ],
            [
                [c, "c", "http://careers.godaddy.net/jobs"]
            ]
        ],
        [a, null, [
                [b, "_fp.channel.CA"]
            ],
            [
                [c, "c", "https://ca.godaddy.com"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Websites Homepage"]
            ],
            [
                [c, "eq", "https://www.godaddy.com/websites"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Website Builder"]
            ],
            [
                [c, "c", "godaddy.com/websites/website-builder"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Websites Contact Us Page"]
            ],
            [
                [c, "c", "godaddy.com/websites/web-design/contact-us"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Websites - Web Design"]
            ],
            [
                [c, "c", "godaddy.com/websites/web-design"]
            ]
        ],
        [a, null, [
                [b, "_fp.channel.CA-FR"]
            ],
            [
                [c, "c", "https://ca.godaddy.com/fr"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Professional Email"]
            ],
            [
                [c, "c", "godaddy.com/email/professional-email"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Office 365"]
            ],
            [
                [c, "c", "godaddy.com/business/office-365"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Domain Configuration"]
            ],
            [
                [c, "c", "godaddy.com/domains/domain-configuration"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Free Product Offer"]
            ],
            [
                [c, "c", "godaddy.com/domains/free-product-offer"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Domain Search Results"]
            ],
            [
                [c, "c", "godaddy.com/domains/searchresults"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Online Marketing"]
            ],
            [
                [c, "c", "godaddy.com/online-marketing"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Offers"]
            ],
            [
                [c, "c", "godaddy.com/offers"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.Domain Transfer"]
            ],
            [
                [c, "c", "https://www.godaddy.com/domains/domain-transfer.aspx"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.CA Domain"]
            ],
            [
                [c, "c", "https://ca.godaddy.com/domains/"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.CA Auction"]
            ],
            [
                [c, "c", "https://ca.auctions.godaddy.com/"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.CA Website"]
            ],
            [
                [c, "c", "https://ca.godaddy.com/websites/website-builder"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.CA Web Hosting"]
            ],
            [
                [c, "c", "https://ca.godaddy.com/hosting/web-hosting"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.CA Hosting"]
            ],
            [
                [c, "c", "https://ca.godaddy.com/hosting/wordpress-hosting"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.CA Web Security"]
            ],
            [
                [c, "c", "https://ca.godaddy.com/web-security/ssl-certificate"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.CA Online Marketing"]
            ],
            [
                [c, "c", "https://ca.godaddy.com/online-marketing/seo-tools"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.CA Business"]
            ],
            [
                [c, "c", "https://ca.godaddy.com/business"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.CA Promo"]
            ],
            [
                [c, "c", "https://ca.godaddy.com/promos"]
            ]
        ],
        [a, null, [
                [b, "_fp.event.CA Blog"]
            ],
            [
                [c, "c", "https://ca.godaddy.com/blog"]
            ]
        ]
    ])
})("p-55NyECWFJDPCA", window, document);