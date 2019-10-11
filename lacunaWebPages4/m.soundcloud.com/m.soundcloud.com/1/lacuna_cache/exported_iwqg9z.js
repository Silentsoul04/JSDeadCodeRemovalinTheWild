
        require(['lib/lingua'], function(L) {
            L.initializeFromBasicSettings();
            require(['application', '$'], function(A, $) {
                window.$ = $;
                A.start('1570607397', {
                    "_prefix": "https://mobi.sndcdn.com",
                    "layouts/activate": "/assets/layouts/activate-ZDsf-efe008f7.js",
                    "layouts/consumer-premium": "/assets/layouts/consumer-premium-568g-78945ee2.js",
                    "layouts/error": "/assets/layouts/error-goUL-439e16e5.js",
                    "layouts/home": "/assets/layouts/home-54bk-fd5e6fdc.js",
                    "layouts/messages": "/assets/layouts/messages-60JI-c2782272.js",
                    "layouts/mobile-apps": "/assets/layouts/mobile-apps-ET71-f6723e64.js",
                    "layouts/not-implemented": "/assets/layouts/not-implemented-k21t-1ae4ce2d.js",
                    "layouts/password-reset-success": "/assets/layouts/password-reset-success-OtU3-b3c43308.js",
                    "layouts/people-directory": "/assets/layouts/people-directory-AXkh-df78e885.js",
                    "layouts/playlist": "/assets/layouts/playlist-90hV-b4fd2530.js",
                    "layouts/premium": "/assets/layouts/premium-C6tW-1112a955.js",
                    "layouts/pulse-app": "/assets/layouts/pulse-app-IUtM-d4bf4489.js",
                    "layouts/search": "/assets/layouts/search-tmVA-b8b7f5ad.js",
                    "layouts/static-page": "/assets/layouts/static-page-Mbmh-8883c7b3.js",
                    "layouts/unsubscribed": "/assets/layouts/unsubscribed-hOCf-c2782272.js",
                    "layouts/user-profile": "/assets/layouts/user-profile-nqMx-c2782272.js"
                });
            });

            function getParameterByName(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
                    results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }
        });
    