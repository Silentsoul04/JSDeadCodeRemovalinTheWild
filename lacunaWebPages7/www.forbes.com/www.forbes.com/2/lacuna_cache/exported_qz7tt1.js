
        window.advBidxc = window.advBidxc || {}, window.advBidxc.misc = window.advBidxc.misc || {}, window._mNHandle = window._mNHandle || {}, window._mNHandle.queue = window._mNHandle.queue || [];
        var medianet_versionId = "121199";
        window.forbes = window.forbes || {}, window.forbes.fastFetchMedianet = !0;
        var cbList = [],
            medianetLoaded = !1;
        window.forbes.fastFetchMedianetCb = function(e) {},
            function() {
                var e = function() {},
                    t = function() {};
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
    