
        window.advBidxc = window.advBidxc || {}, window.advBidxc.misc = window.advBidxc.misc || {}, window._mNHandle = window._mNHandle || {}, window._mNHandle.queue = window._mNHandle.queue || [];
        var medianet_versionId = "121199";
        window.forbes = window.forbes || {}, window.forbes.fastFetchMedianet = !0;
        var cbList = [],
            medianetLoaded = !1;
        window.forbes.fastFetchMedianetCb = function(e) {
                if (!0 === e) {
                    for (var t = 0; t < cbList.length; t++) cbList[t]();
                    medianetLoaded = !0
                } else medianetLoaded ? e() : cbList.push(e)
            },
            function() {
                var e = function() {
                        var e = document.createElement("script"),
                            t = document.getElementsByTagName("script")[0];
                        e.type = "text/javascript", e.src = "https://contextual.media.net/dmedianet.js?cid=8CU2T3HV4&https=1", e.async = "async", t.parentNode.insertBefore(e, t)
                    },
                    t = function() {
                        var e = document.createElement("script"),
                            t = document.getElementsByTagName("script")[0],
                            n = navigator.userAgent;
                        e.type = "text/javascript", e.onload = function() {
                            window.forbes.fastFetchMedianetCb(!0)
                        }, e.src = "//contextual.media.net/bidexchange.js?cid=" + (n.match(/iP(hone|od)/i) || n.match(/iPod/i) || n.match(/BlackBerry/i) || n.match(/Android/i) && n.match(/Mobile/i) || n.match(/Nokia|NOKIA/i) && n.match(/Symbian|Windows Phone/i) ? "8CUQ517Y2" : "8CUX956JU"), e.async = "async", t.parentNode.insertBefore(e, t)
                    };
                if (window.forbes.isEurope && -1 === document.cookie.indexOf("notice_gdpr_prefs=")) {
                    var n = function(n) {
                        try {
                            var i = JSON.parse(n.data);
                            i && "preference_manager" === i.source && "submit_preferences" === i.message && (e(), t())
                        } catch (e) {}
                    };
                    window.addEventListener("message", n)
                } else e(), t()
            }();
    