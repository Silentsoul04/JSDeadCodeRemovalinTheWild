/*
 Quantcast measurement tag
 Copyright (c) 2008-2019, Quantcast Corp.
*/
(function(a, k, h) {
    var m = function(a) {
            var b = h.createElement("a");
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
            d = -1 === a.toLowerCase().indexOf("tag") && -1 === a.toLowerCase().indexOf("keyword") && 0 === a.toLowerCase().indexOf("qc:") ?
                !1 : !0;
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
        e = function(a, b, c) {
            var d;
            d = k.top === k.self ? h.location.host : m(h.referrer).hostname;
            q(b, d, c) ? a(d) : a(!1)
        },
        b = function(a, b, c) {
            var d;
            d = k.top === k.self ? h.location.pathname : m(h.referrer).pathname;
            q(b, d, c) ? a(d) : a(!1)
        },
        f = function(a, b, c) {
            b = document.getElementsByTagName("meta");
            for (var d, e, f = [], g = 0; g < b.length; g++) d = b[g], e = d.getAttribute("name") || d.getAttribute("property"), e == c && (f = f.concat(r(c, d.getAttribute("content"))));
            0 < f.length ? a(f) : a(!1)
        },
        l = function(a) {
            return {
                labels: a
            }
        },
        c = function(a) {
            return "array" === p(a) ? l(a.join(",")) : l("" + a)
        },
        g = function(a, b) {
            var c = [],
                d;
            if ("array" === p(b)) {
                for (d = 0; d < b.length; d++) c.push(a + "." + b[d]);
                return l(c.join(","))
            }
            return l(a + "." + b)
        },
        e = ["rules", [a, null, [
                    [g, "keywords"]
                ],
                [
                    [f, "exactmatch", "keywords"]
                ]
            ],
            [a, null, [
                    [g, "CNN Tap Single"]
                ],
                [
                    [f, "exactmatch", "Chain"]
                ]
            ],
            [a, null, [
                    [c, "Tap. Mira Moon Hong Kong"]
                ],
                [
                    [b, "c", "mira-hong-kong"]
                ]
            ],
            [a, null, [
                    [c, "Tap. Taj St James Court London"]
                ],
                [
                    [b, "c", "taj-st-james-court-london"]
                ]
            ],
            [a, null, [
                    [c, "Tap. Mira Moon"]
                ],
                [
                    [b, "c", "mira-moon"]
                ]
            ],
            [a, null, [
                    [c, "Green House Hotel (Test)"]
                ],
                [
                    [b, "c", "green-house-hotel"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Yas Island Rotana Abu Dhabi UAE"]
                ],
                [
                    [b, "c", "/yas-island-rotana-abu-dhabi-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Villa Rotana Dubai UAE"]
                ],
                [
                    [b, "c", "/villa-rotana-dubai-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Towers Rotana Dubai UAE"]
                ],
                [
                    [b, "c", "/towers-rotana-dubai-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Cove Rotana Resort Ras al Khaimah UAE"]
                ],
                [
                    [b, "c", "/cove-rotana-resort-ras-al-khaimah-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Saadiyat Rotana Resort and Villas Abu Dhabi UAE"]
                ],
                [
                    [b, "c", "/saadiyat-rotana-resort-and-villas-abu-dhabi-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Pearl Rotana Abu Dhabi UAE"]
                ],
                [
                    [b, "c", "/pearl-rotana-abu-dhabi-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Park Rotana Abu Dhabi UAE"]
                ],
                [
                    [b, "c", "/park-rotana-abu-dhabi-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Media Rotana Barsha Dubai UAE"]
                ],
                [
                    [b, "c", "/media-rotana-barsha-dubai-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels./Jumeira Rotana Dubai UAE"]
                ],
                [
                    [b, "c", "/jumeira-rotana-dubai-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels./Hili Rayhaan Rotana Al Ain UAE"]
                ],
                [
                    [b, "c", "/hili-rayhaan-rotana-al-ain-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Fujairah Rotana Resort \x26 Spa Al Aqah Beach UAE"]
                ],
                [
                    [b, "c", "/fujairah-rotana-resort-spa-al-aqah-beach-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Beach Rotana Abu Dhabi UAE"]
                ],
                [
                    [b, "c", "/beach-rotana-abu-dhabi-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Amwaj Rotana Jumeira Beach Dubai UAE"]
                ],
                [
                    [b, "c", "/amwaj-rotana-jumeira-beach-dubai-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Al Bander Rotana and Arjaan Dubai UAE"]
                ],
                [
                    [b, "c", "/al-bander-rotana-and-arjaan-dubai-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Al Ain Rotana UAE"]
                ],
                [
                    [b, "c", "/al-ain-rotana-uae"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Al Salam Rotana Khartoum Sudan"]
                ],
                [
                    [b, "c", "/al-salam-rotana-khartoum-sudan"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Oryx Rotana Doha Qater"]
                ],
                [
                    [b, "c", "/oryx-rotana-doha-qater"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.City Centre Rotana Doha Qatar"]
                ],
                [
                    [b, "c", "/city-centre-rotana-doha-qatar"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Sundus Rotana Muscut Oman"]
                ],
                [
                    [b, "c", "/sundus-rotana-muscut-oman"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Salalah Rotana Resort Oman"]
                ],
                [
                    [b, "c",
                        "/salalah-rotana-resort-oman"
                    ]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Raouche Arjaan Beirut Lebanon"]
                ],
                [
                    [b, "c", "/raouche-arjaan-beirut-lebanon"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Al Manshar Rotana Kuwait"]
                ],
                [
                    [b, "c", "/al-manshar-rotana-kuwait"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Amman Rotana Jordan"]
                ],
                [
                    [b, "c", "/amman-rotana-jordan"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Erbil Rotana Iraq"]
                ],
                [
                    [b, "c", "/erbil-rotana-iraq"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Grand Rotana Resort Spa Sharm-el-Sheikh Egypt"]
                ],
                [
                    [b, "c", "/grand-rotana-resort-spa-sharm-el-sheikh-egypt"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Majestic Arjaan Rotana Manama Bahrain"]
                ],
                [
                    [b, "c", "/majestic-arjaan-rotana-manama-bahrain"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Downtown Rotana Bahrain"]
                ],
                [
                    [b, "c", "/downtown-rotana-bahrain"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels.Art Rotana Bahrain"]
                ],
                [
                    [b, "c", "/art-rotana-bahrain"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Rotana Hotels"]
                ],
                [
                    [b, "c", "/rotana-hotels-resorts"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Sunshine"]
                ],
                [
                    [b, "c", "/carnival-cruise-sunshine"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Vista"]
                ],
                [
                    [b, "c", "/carnival-cruise-vista"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Victory"]
                ],
                [
                    [b, "c", "/carnival-cruise-victory"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Triumph"]
                ],
                [
                    [b, "c", "/carnival-cruise-triumph"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Splendor"]
                ],
                [
                    [b, "c", "/carnival-cruise-splendor"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Paradise"]
                ],
                [
                    [b, "c", "/carnival-cruise-paradise"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Miracle"]
                ],
                [
                    [b, "c", "/carnival-cruise-miracle"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Magic"]
                ],
                [
                    [b, "c", "/carnival-cruise-magic"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Liberty"]
                ],
                [
                    [b, "c", "/carnival-cruise-liberty"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Legend"]
                ],
                [
                    [b, "c", "/carnival-cruise-legend"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Inspiration"]
                ],
                [
                    [b, "c", "/carnival-cruise-inspiration"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Glory"]
                ],
                [
                    [b, "c", "/carnival-cruise-glory"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Freedom"]
                ],
                [
                    [b, "c", "/carnival-cruise-freedom"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Fascination"]
                ],
                [
                    [b, "c", "/carnival-cruise-fascination"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Fantasy"]
                ],
                [
                    [b, "c", "/carnival-cruise-fantasy"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Elation"]
                ],
                [
                    [b, "c", "/carnival-cruise-elation"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Ecstasy"]
                ],
                [
                    [b, "c", "/carnival-cruise-ecstasy"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Conquest"]
                ],
                [
                    [b, "c", "/carnival-cruise-conquest"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Breeze"]
                ],
                [
                    [b, "c", "/carnival-cruise-breeze"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises"]
                ],
                [
                    [b, "c", "/carnival-cruise"],
                    [b, "c", "/carnival-cruises"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Steigenberger"]
                ],
                [
                    [b, "c", "/steigenberger"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Horizon"]
                ],
                [
                    [b, "c", "/carnival-cruise-horizon"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Pride"]
                ],
                [
                    [b, "c", "/carnival-cruises-pride"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Sensation"]
                ],
                [
                    [b, "c", "/carnival-cruises-sensation"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Imagination"]
                ],
                [
                    [b, "c", "/carnival-cruises-imagination"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Valor"]
                ],
                [
                    [b, "c", "/carnival-cruises-valor"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Carnival Cruises.Dream"]
                ],
                [
                    [b, "c", "/carnival-cruises-dream"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Brand.Ampersand.City.London.Hotel.Ampersand Hotel"]
                ],
                [
                    [b, "c", "/ampersand-hotel-london"]
                ]
            ],
            [a, null, [
                    [c, "CNN Tap.Steigenberger.Steigenberger Dubai Business Bay Hotel"]
                ],
                [
                    [b, "c", "/steigenberger-hotel-business-bay-dubai"]
                ]
            ],
            [a, null, [
                    [c, "Quest's World of Wonder"]
                ],
                [
                    [b, "c", "quests-world-of-wonder"]
                ]
            ],
            [a, null, [
                    [c, "Money.Tech.Work Transformed"]
                ],
                [
                    [e, "eq", "money.cnn.com"],
                    [b, "c", "/work-transformed"]
                ]
            ],
            [a, null, [
                    [c, "International.Espanol"]
                ],
                [
                    [e, "eq", "cnnespanol.cnn.com"]
                ]
            ],
            [a, null, [
                    [c, "Money.India"]
                ],
                [
                    [e, "eq", "money.cnn.com"],
                    [b, "c", "/news"],
                    [b, "c", "/india"]
                ]
            ],
            [a, null, [
                    [c, "Money.International"]
                ],
                [
                    [e, "eq", "money.cnn.com"],
                    [b, "c", "/international"]
                ]
            ],
            [a, null, [
                    [c, "Money.Media"]
                ],
                [
                    [b, "sw", "/media"],
                    [e, "eq", "money.cnn.com"]
                ]
            ],
            [a, null, [
                    [c, "Money.Tech.Innovation Nation"]
                ],
                [
                    [e, "eq", "money.cnn.com"],
                    [b, "c",
                        "/technology"
                    ],
                    [b, "c", "/innovationnation"]
                ]
            ],
            [a, null, [
                    [g, "Site Name"]
                ],
                [
                    [f, "exactmatch", "og:site_name"]
                ]
            ],
            [a, null, [
                    [c, "Money.Marketplace: Middle East"]
                ],
                [
                    [e, "eq", "money.cnn.com"],
                    [b, "c", "/marketplace-middle-east"]
                ]
            ],
            [a, null, [
                    [g, "Article.Type"]
                ],
                [
                    [f, "exactmatch", "og:type"]
                ]
            ],
            [a, null, [
                    [g, "Article.Section"]
                ],
                [
                    [f, "exactmatch", "section"]
                ]
            ],
            [a, null, [
                    [g, "Article.Author"]
                ],
                [
                    [f, "exactmatch", "author"]
                ]
            ],
            [a, null, [
                    [g, "keywords"]
                ],
                [
                    [f, "exactmatch", "keywords"]
                ]
            ],
            [a, null, [
                    [g, "Article.Title"]
                ],
                [
                    [f, "exactmatch", "og:title"]
                ]
            ],
            [a, null, [
                    [c, "Money.Luxury"]
                ],
                [
                    [b, "sw", "/luxury"],
                    [e, "eq", "money.cnn.com"]
                ]
            ],
            [a, null, [
                    [c, "Money.Tech"]
                ],
                [
                    [b, "sw", "/technology"],
                    [e, "eq", "money.cnn.com"]
                ]
            ],
            [a, null, [
                    [c, "Money.Markets"]
                ],
                [
                    [e, "eq", "money.cnn.com"],
                    [b, "sw", "/data"]
                ]
            ],
            [a, null, [
                    [c, "Money.Business"]
                ],
                [
                    [b, "c", "/news"],
                    [e, "eq", "money.cnn.com"]
                ]
            ],
            [a, null, [
                    [c, "Money.Markets"]
                ],
                [
                    [b, "c", "/markets"],
                    [e, "eq", "money.cnn.com"]
                ]
            ],
            [a, null, [
                    [c, "International.Arabic"]
                ],
                [
                    [e, "eq", "arabic.cnn.com"]
                ]
            ],
            [a, null, [
                    [c, "Money.Upstarts"]
                ],
                [
                    [e, "eq", "money.cnn.com"],
                    [b, "c", "/upstarts"]
                ]
            ],
            [a, null, [
                    [c, "Money.Tech.Powering Your World"]
                ],
                [
                    [e, "eq", "money.cnn.com"],
                    [b, "c", "/powering-your-world"]
                ]
            ]
        ];
    __qc.apply(null, e);
    (function(b) {
        var c = function() {
                return k.top === k.self ? h.location.href : m(h.referrer).href
            },
            e = c();
        setInterval(function() {
            var d = c();
            d !== e && (e = d, __qc.apply(null, b), __qc("push", {
                qacct: a,
                event: "load"
            }, !0))
        }, 2E3)
    })(e)
})("p-D1yc5zQgjmqr5", window, document);