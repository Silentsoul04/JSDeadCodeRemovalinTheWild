
        if (window.NYTD.Abra('dfp_home_toggle') !== '1_block') {

            function placeGpt() {
                var purrCookie = testCookie('nyt-purr');
                if (purrCookie && purrCookie.substring(1, 2) === 's') return;
                if (testCookie('nyt-gdpr') !== '1') {
                    var gptScript = document.createElement('script');
                    gptScript.async = 'async';
                    gptScript.src = '//securepubads.g.doubleclick.net/tag/js/gpt.js';
                    document.head.appendChild(gptScript);
                }
            }
            placeGpt();

        }
    