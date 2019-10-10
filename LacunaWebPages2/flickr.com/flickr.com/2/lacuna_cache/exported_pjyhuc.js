
        ! function(e, o) {
            e.pageTiming = {}, e.registerFirstPhoto = function() {
                e.pageTiming.timeAboveTheFold || (e.pageTiming.timeAboveTheFold = (new Date).getTime()), e.registerFirstPhoto = function() {}
            };
            var t = o.documentElement;
            t.className = t.className.replace("no-js", ""), e.paftTiming = {}, e.onerror = function(o, t, i, n, r) {
                r || ((r = new Error(o)).stack = t, r.line = i), beaconError("window onerror", e.location.href, r)
            };
            try {
                var i, n = new Image,
                    r = "https://combo.staticflickr.com/ap/build/images/pxl.gif?cachebust=" + ((new Date).getTime() + 9999 * Math.random());
                n.onerror = function() {
                    beaconError("combo.staticflickr possibly blocked", e.location.href, {
                        yimgSrc: r,
                        delay: Date.now() - i
                    })
                }, i = Date.now(), n.src = r
            } catch (e) {}
        }(window, document);
    