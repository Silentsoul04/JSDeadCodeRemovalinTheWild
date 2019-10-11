// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

        (this.gbar_ = this.gbar_ || {}).CONFIG = [
            [
                [0, "www.gstatic.com", "og.mob.en_US.5EY9l3V_peM.O", "nl", "nl", "1", 0, [4, 2, "", "", "1300102,3700339", "273201278", "0"], null, "ywqfXeu7NY7ZwQL25LLYCg", null, 0, "og.mob.slj2x0n537m3.L.W.O", "AA2YrTsArPKAvlxnTqthPNraXCy5W1xgMg", "AA2YrTvNORZ0SmEoBPtvRn15ybBorWRVRQ", "", 2, null, null, "NLD", null, 0, "1", "1", 0],
                [
                    ["md", ""],
                    ["md", ""], 1
                ],
                [1, 0.1000000014901161, 2, 1, 0.5],
                [1, 0.001000000047497451, 1],
                [0, 0, 0, null, "", "", "", ""],
                [0, "", null, "", 0, "Er is een fout opgetreden bij het laden van je Marketplace-apps.", "Je hebt geen Marketplace-apps.", 0, [1, "https://www.google.nl/webhp?tab=ww", "Zoeken", "", "0 -138px", null, 0], null, null, null, 1, null, null, 0], null, null, [1, 1, 0, 40600, 1, "NLD", "nl", "273201278.0", 15, 0.009999999776482582, 0, 0, null, null, 0, 0, "", null, null, 1, "ywqfXeu7NY7ZwQL25LLYCg"]
            ]
        ];
        (this.gbar_ = this.gbar_ || {}).LDD = ["mih", "mab", "meb"];
        this.gbar_ = this.gbar_ || {};
        (function(_) {lacuna_lazy_load("lacuna_cache/exported_5n0osc.js[1219:13715]", functionData => eval(functionData)) g, b)
                };
                _.za = Array.prototype.filter ? function(b, c, d) {___jdce_logger("lacuna_cache/exported_5n0osc.js", 10988, 11089);
                    return Array.prototype.filter.call(b, c, d)
                } : function(b, c, d) {___jdce_logger("lacuna_cache/exported_5n0osc.js", 11092, 11449);
                    for (var e = b.length, f = [], g = 0, h = "string" === typeof b ? b.split("") : b, k = 0; k < e; k++)
                        if (k in h) {
                            var m = h[k];
                            c.call(d, m, k, b) && (f[g++] = m)
                        }
                    return f
                };
                _.Aa = Array.prototype.map ? function(b, c, d) {___jdce_logger("lacuna_cache/exported_5n0osc.js", 11496, 11594);
                    return Array.prototype.map.call(b, c, d)
                } : function(b, c, d) {___jdce_logger("lacuna_cache/exported_5n0osc.js", 11597, 11826);
                    for (var e = b.length, f = Array(e), g = "string" === typeof b ? b.split("") : b, h = 0; h < e; h++) h in g && (f[h] = c.call(d, g[h], h, b));
                    return f
                };
                _.w = function() {___jdce_logger("lacuna_cache/exported_5n0osc.js", 11850, 11957);
                    this.ua = this.ua;
                    this.wa = this.wa
                };
                _.w.prototype.ua = !1;
                _.w.prototype.U = function() {___jdce_logger("lacuna_cache/exported_5n0osc.js", 12032, 12118);
                    this.ua || (this.ua = !0, this.v())
                };
                _.w.prototype.v = function() {___jdce_logger("lacuna_cache/exported_5n0osc.js", 12154, 12283);
                    if (this.wa)
                        for (; this.wa.length;) this.wa.shift()()
                };
                var Ba = function() {___jdce_logger("lacuna_cache/exported_5n0osc.js", 12310, 12484);
                    _.w.call(this);
                    this.b = this.a = null;
                    this.f = 0;
                    this.c = {}
                };
                _.n(Ba, _.w);
                Ba.prototype.g = function(b, c) {___jdce_logger("lacuna_cache/exported_5n0osc.js", 12549, 12726);
                    this.a = c;
                    this.b = b;
                    c.preventDefault ? c.preventDefault() : c.returnValue = !1
                };
                _.Ca = new Ba;
                _.Da = function() {___jdce_logger("lacuna_cache/exported_5n0osc.js", 12782, 12877);
                    this.a = {};
                    this.b = {}
                };
                _.sa(_.Da);
                _.Fa = function(b, c) {___jdce_logger("lacuna_cache/exported_5n0osc.js", 12930, 13348);
                    var d = _.Da.za();
                    if (b in d.a) {
                        if (d.a[b] != c) throw new Ea(b);
                    } else {
                        d.a[b] = c;
                        if (c = d.b[b])
                            for (var e = 0, f = c.length; e < f; e++) c[e].a(d.a, b);
                        delete d.b[b]
                    }
                };
                _.Ga = function() {___jdce_logger("lacuna_cache/exported_5n0osc.js", 13373, 13438);
                    _.v.call(this)
                };
                _.t(_.Ga, _.v);
                var Ea = function() {___jdce_logger("lacuna_cache/exported_5n0osc.js", 13497, 13562);
                    _.v.call(this)
                };
                _.t(Ea, _.Ga);
                _.Fa("eq", _.Ca);

            } catch (e) {
                _._DumpException(e)
            }
        })(this.gbar_);
        // Google Inc.
        var a = window.location,
            b = a.href.indexOf("#");
        if (0 <= b) {
            var c = a.href.substring(b + 1);
            /(^|&)q=/.test(c) && -1 == c.indexOf("#") && a.replace("/search?" + c.replace(/(^|&)fp=[^&]*/g, "") + "&cad=h")
        };
    