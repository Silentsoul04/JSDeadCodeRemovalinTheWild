(function() {
    var k = YAHOO.JP.rma.smp.getRma(),
        j = {
            ylk: "rsec:prem-ad;slk:st;streamid:st_top;_vimp:1;_vctime:1000;pos:all"
        },
        o = {
            pr: "http://ai.yimg.jp/bdv/yahoo/smartphone/pr05.png"
        },
        g, i, h = function() {
            var p = void 0;
            k.iterate(YAHOO.JP.rma.smp.getPositionData(), function(r, q) {
                if (/^(STB1|ATB1)$/.test(q)) {
                    p = r;
                    return false;
                }
                return true;
            });
            return p;
        },
        a = function(p) {
            return {
                adset: p.adset || {},
                isPr: !!p.pr
            };
        },
        e = function() {
            k.setPositionStatus(g.position, "noad");
            k.fireAdEvent("load", g.position, "noad");
        };
    g = h();
    if (!g) {
        return e();
    }
    i = a(g);
    if (!i.adset.tag) {
        return e();
    }
    var c = "yahoo_ydn_rma_stb1_" + Math.floor(Math.random() * 10000000),
        n = k.createRMAObject(g.position, {
            attr: {
                id: c
            },
            data: g
        }),
        l = function() {
            var p = n.getOption("ylk", "");
            if (!k.isTrustYlk(p)) {
                p = k.createYlk(j.ylk, n.getOption("csc"));
            }
            return p;
        },
        b = k.createElement("a", {
            "data-ylk": l(g.csc)
        }, {}),
        f = function(p) {
            var q = /\?/.test(p) ? "&" : "?";
            k.addLog(p + q + "O=" + Math.random());
        },
        d = function(s) {
            var q = document.createElement("div");
            q.innerHTML = s;
            var p = q.childNodes;
            var r = [];
            k.each(p, function(w, v) {
                if (typeof w.tagName !== "undefined" && w.tagName === "SCRIPT") {
                    var x = m(w);
                    var t = k.createElement("script", x, {});
                    t.innerHTML = w.innerHTML;
                    w = t;
                }
                if ((/<.*?>.*?<\/.*?>/.test(w.innerHTML))) {
                    var u = d(w.innerHTML);
                    w.innerHTML = "";
                    k.each(u, function(z, y) {
                        w.appendChild(z);
                    });
                }
                r[v] = w;
            });
            return r;
        },
        m = function(t) {
            if (typeof t === "undefined") {
                return [];
            }
            var r = {};
            for (var s = 0, q = t.attributes.length; s < q; s++) {
                var p = t.attributes[s];
                r[p.nodeName] = p.nodeValue;
            }
            return r;
        };
    k.each(d(g.adset.tag), function(p) {
        b.appendChild(p);
    });
    n.append(b);
    n.insert = function() {
        var p = document.querySelector('div[data-rma-pos="' + g.position + '"]');
        if (p) {
            this.appendTo(p);
            f(this.getOption("csc"));
            this.getOption("action.auto", []).forEach(f);
            if (typeof window.putGyaoBeacon === "function") {
                putGyaoBeacon(k.makeParamFromCSC(g.csc));
            }
        }
        k.setPositionStatus(this.position, "done");
    };
    k.beReadyInsert(n.position);
    k.fireAdEvent("load", g.position, g.status);
}());