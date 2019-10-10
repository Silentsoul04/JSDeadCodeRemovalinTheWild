
        ! function(a9, a, p, s, t, A, g) {___jdce_logger("lacuna_cache/exported_icsqm8.js", 11, 639);
            if (a[a9]) return;

            function q(c, r) {___jdce_logger("lacuna_cache/exported_icsqm8.js", 88, 158);
                a[a9]._Q.push([c, r])
            }
            a[a9] = {
                init: function() {___jdce_logger("lacuna_cache/exported_icsqm8.js", 203, 271);
                    q("i", arguments)
                },
                fetchBids: function() {___jdce_logger("lacuna_cache/exported_icsqm8.js", 300, 368);
                    q("f", arguments)
                },
                setDisplayBids: function() {___jdce_logger("lacuna_cache/exported_icsqm8.js", 402, 415);},
                _Q: []
            };
            A = p.createElement(s);
            A.async = !0;
            A.src = t;
            g = p.getElementsByTagName(s)[0];
            g.parentNode.insertBefore(A, g)
        }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");


        var initParams = {
            pubID: '3083',
            adServer: 'googletag'
        };

        fireOrSaveJsFunctions(1, function() {___jdce_logger("lacuna_cache/exported_icsqm8.js", 856, 1329);


            if (passEEACheck || (isEEA && glob_mntcookie)) {
                __cmp('getConsentData', null, function(vendorConsentData, success) {___jdce_logger("lacuna_cache/exported_icsqm8.js", 978, 1241);
                    initParams.gdpr = {
                        enabled: true,
                        consent: vendorConsentData.metadata
                    };
                    apstag.init(initParams);
                });
            } else {
                apstag.init(initParams);
            }
        });
    