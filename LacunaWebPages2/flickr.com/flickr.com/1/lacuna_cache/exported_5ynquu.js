
        ! function(e, t) {
            var n = [function() {
                return new XMLHttpRequest
            }, function() {
                return new ActiveXObject("Msxml2.XMLHTTP")
            }, function() {
                return new ActiveXObject("Msxml3.XMLHTTP")
            }, function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }];
            e.sendRequest = function(e, t) {
                try {
                    var c = "event=" + escape(e) + "&title=" + escape(t),
                        r = function() {
                            for (var e = !1, t = 0; t < n.length; t++) {
                                try {
                                    e = n[t]()
                                } catch (e) {
                                    continue
                                }
                                break
                            }
                            return e
                        }();
                    if (!r) return;
                    r.open("GET", "https://www.flickr.com/beacon_flanal_reboot_event.gne?" + c, !0), r.withCredentials = !0, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.send()
                } catch (e) {}
            }
        }(window, document);
    