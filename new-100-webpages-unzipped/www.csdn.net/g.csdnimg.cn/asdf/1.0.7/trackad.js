! function(r, t, n) {
    var c = !0,
        a = {
            isInSight: function(t) {
                var a = t.getBoundingClientRect(),
                    n = r.innerHeight;
                return a.top <= n + 100
            },
            loadImg: function(t) {
                if (!t.src) {
                    var a = this.getDataset(t).src;
                    t.src = a
                }
            },
            getDataset: function(t) {
                if (t.dataset) return t.dataset;
                var a = t.attributes,
                    n = {};
                name, matchStr;
                for (var r = 0; r < a.length; r++) matchStr = a[r].name.match(/^data-(.+)/), matchStr = a[r].name.match(/^data-(.+)/), matchStr && (name = matchStr[1].replace(/-([\da-z])/gi, function(t, a) {
                    return a.toUpperCase()
                }), n[name] = a[r].value);
                return n
            },
            throttle: function(n) {
                var r = null;
                return function() {
                    var t = new Date,
                        a = arguments;
                    500 <= t - (r = r || t) && (n.apply(this, a), r = t)
                }
            },
            checkImgs: function() {
                for (var t = n(".pre-img-lasy"), a = 0; a < t.length; a++) this.isInSight(t[a]) && this.loadImg(t[a]);
                c = !0
            }
        };
    void 0 === r.csdn && (r.csdn = {}), r.csdn.trackad = a, n(function() {
        csdn.trackad.checkImgs(), n(r).on("scroll", function() {
            c && (c = !1, csdn.trackad.throttle(csdn.trackad.checkImgs()))
        })
    })
}(window, document, jQuery);