
        (function() {
            'use strict';
            var callFpti = function(fptiDataString) {
                PAYPAL.core['pta'] = PAYPAL.analytics.setup({
                    data: fptiDataString,
                    trackCPL: true,
                    url: '//t.paypal.com/ts'
                });
            };
            if (typeof PAYPAL.analytics !== 'undefined') {
                PAYPAL.core = PAYPAL.core || {};
                var fptiDataString = 'pgrp=main%3Amktg%3Apersonal%3A%3Ahome&page=main%3Amktg%3Apersonal%3A%3Ahome%3A%3A%3A&pgst=Unknown&calc=76dd0ef7400d3&rsta=nl_NL&pgtf=Nodejs&env=live&s=ci&ccpg=nl&csci=2b655357265b470a9f822a3dcf4d8127&comp=mppnodeweb&tsrce=profilenodeweb&cu=0&gacook=753350427.1570706794&ef_policy=gdpr_eu&c_prefs=T%3D1&xe=100591&xt=101561&pgld=Unknown&bzsr=main&bchn=mktg&tmpl=home.jsx&pgsf=personal&lgin=out&shir=main_mktg_personal_&pros=3&lgcook=0';
                if (typeof ga !== 'undefined' && ga !== null) {
                    ga(function(tracker) {
                        var gaClientId = tracker.get('clientId');
                        if (gaClientId) {
                            fptiDataString += '&gacook=' + gaClientId;
                        }
                        callFpti(fptiDataString);
                    });
                } else {
                    callFpti(fptiDataString);
                }
            }
        })();
    