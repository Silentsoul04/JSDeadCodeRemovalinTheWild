
        ! function(e, o) {
            e.beaconError = function(o, n, t) {
                try {
                    if (-1 === String(e.location.host).indexOf(".flickr.com")) return
                } catch (e) {}
                var i, r;
                if (r = new Image, i = "/beacon_rb_jserror.gne?reqId=5988c8f7&initialView=sohp-slideshow-sohp-e-view&error=" + encodeURIComponent(o), n && (i += "&url=" + encodeURIComponent(n)), t)
                    if (t instanceof Error) {
                        if (t.line && (i += "&line=" + encodeURIComponent(t.line)), t.message && (i += "&message=" + encodeURIComponent(t.message)), t.total && (i += "&total=" + encodeURIComponent(t.total)), t.apiMethod && (i += "&apiMethod=" + encodeURIComponent(t.apiMethod)), t.description && (i += "&description=" + encodeURIComponent(t.description)), t.sourceURL && (i += "&sourceURL=" + encodeURIComponent(t.sourceURL)), t.stack) {
                            var a = 100;
                            t.message && t.message.indexOf("Not enough storage is available") > -1 && (a = 250), i += "&stack=" + encodeURIComponent(t.stack.slice(0, a))
                        }
                        t.panda && (i += "&panda=1", t.timeout || t.clientTimeout ? i += "&apiTimeout=1" : t.fatal && (i += "&apiOther=1"), t.resp && (i += "&resp=" + (t.resp.responseText || t.resp.statusText || "").slice(0, 100)))
                    } else
                        for (var s in t) {
                            var c = t[s];
                            "healthMetric" !== s && (c = JSON.stringify(c)), i += "&" + s + "=" + encodeURIComponent(c)
                        }
                r.src = i
            }
        }(window, document);
    