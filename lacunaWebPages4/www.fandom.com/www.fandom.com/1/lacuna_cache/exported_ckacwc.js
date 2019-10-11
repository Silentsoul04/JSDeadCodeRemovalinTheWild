
        (function() {
            function genUID() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = Math.random() * 16 | 0,
                        v = c === 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            }

            function getCookieValue(cookieName) {
                const cookieSplit = ('; ' + document.cookie).split('; ' + cookieName + '=');

                return cookieSplit.length === 2 ? cookieSplit.pop().split(';').shift() : null;
            }

            var expireDate = new Date(),
                sessionId = getCookieValue('tracking_session_id'),
                pvNumber = getCookieValue('pv_number'),
                pvNumberGlobal = getCookieValue('pv_number_global'),
                beacon = getCookieValue('wikia_beacon_id');

            window.sessionId = sessionId ? sessionId : genUID();
            window.pvNumber = pvNumber ? parseInt(pvNumber, 10) + 1 : 1;
            window.pvNumberGlobal = pvNumberGlobal ? parseInt(pvNumberGlobal, 10) + 1 : 1;
            window.pvUID = genUID();
            window.wgWikiaCookieDomain = '.fandom.com';
            window.wgCookiePath = '/';

            if (beacon) {
                window.beacon_id = beacon;
            }

            expireDate = new Date(expireDate.getTime() + 1000 * 60 * 30);
            document.cookie = 'tracking_session_id=' + window.sessionId + '; expires=' + expireDate.toGMTString() +
                ';domain=' + window.wgWikiaCookieDomain + '; path=' + window.wgCookiePath + ';';
            document.cookie = 'pv_number=' + window.pvNumber + '; expires=' + expireDate.toGMTString() +
                '; path=' + window.wgCookiePath + ';';
            document.cookie = 'pv_number_global=' + window.pvNumberGlobal + '; expires=' + expireDate.toGMTString() +
                ';domain=' + window.wgWikiaCookieDomain + '; path=' + window.wgCookiePath + ';';
        })();
    