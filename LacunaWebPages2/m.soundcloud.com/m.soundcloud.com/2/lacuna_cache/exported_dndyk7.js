
        (function() {
            var e = window.location;
            /^m\..+\.com$/.test(e.host) && !/iphone|ipod|android|mobile/i.test(navigator.userAgent) && e.replace(e.href.replace(/m\./, ""))
        })()
    