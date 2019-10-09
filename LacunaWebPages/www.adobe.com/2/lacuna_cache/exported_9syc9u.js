
        ! function() {
            function o(n, i) {
                if (n && i)
                    for (var r in i) i.hasOwnProperty(r) && (void 0 === n[r] ? n[r] = i[r] : n[r].constructor === Object && i[r].constructor === Object ? o(n[r], i[r]) : n[r] = i[r])
            }
            try {
                var n = decodeURIComponent("");
                if (n.length > 0 && window.JSON && "function" == typeof window.JSON.parse) {
                    var i = JSON.parse(n);
                    void 0 !== window.BOOMR_config ? o(window.BOOMR_config, i) : window.BOOMR_config = i
                }
            } catch (r) {
                window.console && "function" == typeof window.console.error && console.error("mPulse: Could not parse configuration", r)
            }
        }();
    