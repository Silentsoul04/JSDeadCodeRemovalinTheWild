
        //<![CDATA[
        var dfpAdSlots = [];
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];

        ! function(a9, a, p, s, t, A, g) {___jdce_logger("lacuna_cache/exported_42sarh.js", 147, 792);
            if (a[a9]) return;

            function q(c, r) {___jdce_logger("lacuna_cache/exported_42sarh.js", 224, 294);
                a[a9]._Q.push([c, r])
            }
            a[a9] = {
                init: function() {___jdce_logger("lacuna_cache/exported_42sarh.js", 339, 407);
                    q("i", arguments)
                },
                fetchBids: function() {___jdce_logger("lacuna_cache/exported_42sarh.js", 436, 504);
                    q("f", arguments)
                },
                setDisplayBids: function() {___jdce_logger("lacuna_cache/exported_42sarh.js", 538, 551);},
                _Q: []
            };
            A = p.createElement(s);
            A.async = !0;
            A.src = t;
            g = p.getElementsByTagName(s)[0];
            g.parentNode.insertBefore(
                A, g)
        }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

        apstag.init({
            pubID: 3120,
            adServer: 'googletag',
            bidTimeout: 600
        });

        //]]>
    