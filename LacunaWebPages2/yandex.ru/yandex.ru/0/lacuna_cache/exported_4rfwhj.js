
        ! function(e) {
            var n, s, i = e.innerWidth > e.innerHeight,
                t = e.innerWidth,
                a = (n = document.documentElement, s = {}, {
                    setMod: function(e, n) {
                        if (e && n) {
                            var i = "i-ua_" + e + "_" + n;
                            this.removeMod(e), -1 === s.indexOf(i) && s.push(i)
                        }
                        return this
                    },
                    removeMod: function(e) {
                        var n;
                        for (n = s.length - 1; n >= 0; n--) 0 === s[n].indexOf("i-ua_" + e) && s.splice(n, 1);
                        return this
                    },
                    loadClasses: function() {
                        s = n.className.split(" ")
                    },
                    saveClasses: function() {
                        n.className = s.join(" ")
                    }
                }),
                o = {};
            o[t] = i;
            var r, l = function(n) {
                    var s = e.innerWidth,
                        d = s > e.innerHeight;
                    s in o ? d = o[s] : o[s] = d, s !== t || d !== i ? (r && (clearTimeout(r), r = null), i = d, t = s, a.loadClasses(), a.setMod("orient", i ? "landscape" : "portrait"), a.saveClasses()) : !r && n > 0 && (r = setTimeout(function() {
                        r = null, l(n - 1)
                    }, 100))
                },
                d = function() {
                    l(5)
                };
            e.addEventListener("resize", d, !1), e.addEventListener("orientationchange", d, !1);
            var c = screen.width;
            a.loadClasses(), a.setMod("orient", i ? "landscape" : "portrait").setMod("screen-size", c > 320 ? "large" : c < 320 ? "small" : "normal"), a.saveClasses()
        }(window);
    