
        function __reloadResource(c) {
            try {
                var l = document.head || document.getElementsByTagName("head")[0];
                var b = "wq.360buyimg.com";
                var d = /img\d{1,2}.360buyimg.com/;
                if (c && /link/i.test(c.tagName)) {
                    if (!c.href || c.href.indexOf(b) == -1) {
                        return
                    }
                    var a = document.createElement("link");
                    a.rel = "stylesheet";
                    a.href = c.href.replace(b, "wqimg.jd.com");
                    l.appendChild(a)
                }
                if (c && /script/i.test(c.tagName)) {
                    if (!c.src || c.src.indexOf(b) == -1) {
                        return
                    }
                    var e = document.createElement("script");
                    e.type = "text/javascript";
                    e.src = c.src.replace(b, "wqimg.jd.com");
                    l.appendChild(e)
                }
                if (c && /img/i.test(c.tagName)) {
                    if (!c.src || !d.test(c.src)) {
                        return
                    }
                    c.src = c.src.replace(d, "wqimg.jd.com/imgproxy").replace(".jpg.jpg", ".jpg").replace(".png.png", ".png")
                }
            } catch (e) {}
        };
    