
        var googletag = googletag || {},
            gptadslots = [],
            language,
            has_uploaded,
            cohort;
        googletag.cmd = googletag.cmd || [];

        (function() {___jdce_logger("lacuna_cache/exported_pnxe5j.js", 194, 851);
            var gdprCookie = (document.cookie.match(/^(?:.*;)?\s*vimeo_gdpr_optin\s*=\s*([^;]+)(?:.*)?$/) || [, null])[1];
            if (gdprCookie === '-1') {
                return;
            }
            var gads = document.createElement('script'),
                useSSL = 'https:' == document.location.protocol,
                node;
            gads.async = true;
            gads.type = 'text/javascript';
            gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
            node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
        })();


        googletag.cmd.push(function() {___jdce_logger("lacuna_cache/exported_pnxe5j.js", 885, 2267);

            language = document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            has_uploaded = (document.cookie.replace(/(?:(?:^|.*;\s*)has_uploaded\s*\=\s*([^;]*).*$)|^.*$/, "$1")) ? 'Y' : 'N';
            consent = (document.cookie.replace(/(?:(?:^|.*;\s*)vimeo_gdpr_optin\s*\=\s*([^;]*).*$)|^.*$/, "$1")) === '-1' ? 1 : 0;
            cohort = 'A';

            googletag.pubads().setTargeting('language', [language]);
            googletag.pubads().setTargeting('is_uploader', [has_uploaded]);
            googletag.pubads().setTargeting('cohort', [cohort]);
            googletag.pubads().setTargeting('cohort_a', [(cohort === 'A') ? 'Y' : 'N']);
            googletag.pubads().setTargeting('cohort_b', [(cohort === 'B') ? 'Y' : 'N']);
            googletag.pubads().setTargeting('product', ['']);
            googletag.pubads().setTargeting('storage', ['N']);

            googletag.pubads().setTargeting('sec', ['false']);

            googletag.pubads().setTargeting('logged_in', ['false']);

            googletag.pubads().setTargeting('rpv', (Math.floor(Math.random() * 100) + 1).toString());

            googletag.pubads().setRequestNonPersonalizedAds(consent);
            googletag.pubads().enableAsyncRendering();
            googletag.pubads().disableInitialLoad();
            googletag.enableServices();
        });
    