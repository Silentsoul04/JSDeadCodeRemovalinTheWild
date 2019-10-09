
            bizx.cmp.ifConsent('all', 'all', function(){
                SF.Ads.disallowPersonalization = 0;
            }, function(){
                SF.Ads.disallowPersonalization = 1;
            }, function () {
                if (window.bizxPrebid){
                    window.bizxPrebid.Ads.initPrebid(window.bizxPrebid.adUnits);
                }
            });
        