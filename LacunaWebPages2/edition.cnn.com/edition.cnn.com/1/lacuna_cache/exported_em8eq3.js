
        if (CNN.UserConsent.inUserConsentState(["performance"])) {
            (function(w, d) {
                var e, s;
                if (!w.twq) {
                    s = w.twq = function() {
                        s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
                    };
                    s.version = '1.1';
                    s.queue = [];
                    e = d.createElement('script');
                    e.async = true;
                    e.type = 'text/javascript';
                    e.src = '//static.ads-twitter.com/uwt.js';
                    d.getElementsByTagName('body')[0].appendChild(e);
                }
            })(window, document);
            twq('init', 'nyutn');
            twq('track', 'PageView');
        }
    