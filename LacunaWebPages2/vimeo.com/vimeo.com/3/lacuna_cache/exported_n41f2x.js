
        (function() {___jdce_logger("lacuna_cache/exported_n41f2x.js", 10, 4196);

            if (document.cookie.match(/^(.*;)?\s*vimeo_gdpr_optin\s*=\s*[^;]+(.*)?$/)) {
                return;
            }

            var handleGDPR = function() {___jdce_logger("lacuna_cache/exported_n41f2x.js", 181, 3964);
                var styleNode = document.createElement('style');
                styleNode.innerHTML = ".gdpr_banner { z-index:10000; background-color:#1AB7EA; position:fixed; bottom:0; font-family:'Helvetica Neue','Helvetica','Arial','sans-serif'; width:100%; padding:10px 14px 10px 20px; display: flex; justify-content: space-around; align-items: center; box-sizing:border-box; } .gdpr_header { color: #EEF1F2; font-size: 16px; font-weight: 500; line-height: 20px; display: inline-block; } .gdpr_button { border-radius: 3px; background-color: #FFFFFF; color: #1AB7EA; font-size: 16px; font-weight: bold; letter-spacing: 0.2px; line-height: 20px; text-align: center; padding: 8px 18px; display:inline-block; cursor: pointer; } .gdpr_dismiss { color:#fff; position: absolute; top: 23px; right: 14px; width: 15px; height: 15px; cursor: pointer; } @media only screen and (max-width: 1300px) { .gdpr_header { width: 71%; } .gdpr_dismiss { top: 25px; } } @media only screen and (max-width: 675px) { .gdpr_banner { display:block; padding-right: 75px; box-sizing:border-box; } .gdpr_header {width:90%;}.gdpr_dismiss {top:-10px;background-color:#1AB7EA;border-radius:3px;padding:5px;width:25px;height:25px;}.gdpr_button {position:absolute;bottom:10px;right:15px;}";

                document.body.appendChild(styleNode);

                var gdprBannerNode = document.createElement('div');
                gdprBannerNode.classList.add('gdpr_banner');

                var gdprHeaderNode = document.createElement('div');
                gdprHeaderNode.classList.add('gdpr_header');
                gdprHeaderNode.innerHTML = 'Vimeo and its partners use cookies to personalize your experience, serve relevant ads, and understand how people are using our services. To learn more or change your preferences, visit our <a style="color:#fff;text-decoration:underline" href="https://vimeo.com/cookie_policy?vcid=32179">Cookie Policy.</a>';

                gdprBannerNode.appendChild(gdprHeaderNode);
                gdprBannerNode.innerHTML += '<svg class="gdpr_dismiss" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z" fill="#FFF" fill-rule="evenodd"/></svg>';
                document.body.appendChild(styleNode);
                document.body.appendChild(gdprBannerNode);

                var _log = function(args) {___jdce_logger("lacuna_cache/exported_n41f2x.js", 2702, 3318);
                    var parts = [],
                        url = '/ablincoln/fatal_attraction?';
                    Object.keys(args).forEach(function(key) {___jdce_logger("lacuna_cache/exported_n41f2x.js", 2863, 2999);
                        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(args[key]));
                    });

                    url += parts.join('&');
                    if (typeof navigator.sendBeacon === 'function') {
                        navigator.sendBeacon(url);
                        return;
                    }

                    var img = new Image();
                    img.src = url;
                }

                var gdprOptIn = function(event) {___jdce_logger("lacuna_cache/exported_n41f2x.js", 3352, 3854);
                    document.cookie = 'vimeo_gdpr_optin=1;max-age=315360000;path=/;domain=.vimeo.com';
                    gdprBannerNode.style.display = 'none';

                    args = {
                        container: 'global_notification',
                        component: 'eu_cookies',
                        keyword: event.target.tagName.toLowerCase() === 'button' ? 'okay_button' : 'dismiss_x',
                    };

                    _log(args);
                };

                document.querySelector('.gdpr_dismiss').addEventListener('click', gdprOptIn);
            }

            if (document.readyState === 'interactive' || document.readyState === 'complete') {
                handleGDPR();
                return;
            }

            window.addEventListener('load', handleGDPR);
        }());
    