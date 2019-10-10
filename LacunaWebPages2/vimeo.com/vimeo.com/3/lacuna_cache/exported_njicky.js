
        (function() {
            var gdprCookie = (document.cookie.match(/^(?:.*;)?\s*vimeo_gdpr_optin\s*=\s*([^;]+)(?:.*)?$/) || [, null])[1];
            if (gdprCookie === '-1') {
                return;
            }

            ! function(a9, a, p, s, t, A, g) {
                if (a[a9]) return;

                function q(c, r) {
                    a[a9]._Q.push([c, r])
                }
                a[a9] = {
                    init: function() {
                        q("i", arguments)
                    },
                    fetchBids: function() {
                        q("f", arguments)
                    },
                    setDisplayBids: function() {},
                    targetingKeys: function() {
                        return []
                    },
                    _Q: []
                };
                A = p.createElement(s);
                A.async = !0;
                A.src = t;
                g = p.getElementsByTagName(s)[0];
                g.parentNode.insertBefore(A, g)
            }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

            // initialize apstag and have apstag set bids on the googletag slots when they are returned to the page
            apstag.init({
                pubID: '3560',
                adServer: 'googletag',
                bidTimeout: 2e3
            });
        })();
    