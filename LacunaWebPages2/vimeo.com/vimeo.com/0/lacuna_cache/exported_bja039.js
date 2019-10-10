
        (function() {___jdce_logger("lacuna_cache/exported_bja039.js", 10, 1109);
            window._gtm = [{
                "page_type": "LOHP",
                "language": "en",
                "user_status": "logged_out",
                "user_type": "none",
                "ga_universal_id": "UA-76641-8",
                "comscore_site_id": 10348289
            }];

            var gdprCookie = (document.cookie.match(/^(?:.*;)?\s*vimeo_gdpr_optin\s*=\s*([^;]+)(?:.*)?$/) || [, null])[1];
            if (gdprCookie === '-1') {
                return;
            }

            window._gtm.push({
                'vuid': document.cookie.replace(/(?:(?:^|.*;\s*)vuid\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
                'gtm.start': new Date().getTime(),
                'event': 'gtm.js'
            });
            var gtms = document.createElement('script'),
                node;
            gtms.async = true;
            gtms.type = 'text/javascript';
            gtms.src = '//www.googletagmanager.com/gtm.js?id=GTM-RBKK&l=_gtm';
            node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gtms, node);
        })();
    