//tealium universal tag - utag.1203 ut4.0.201808021503, Copyright 2018 Tealium.com Inc. All Rights Reserved.
var _tvq = window._tvq = window._tvq || [];
try {
    (function(id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;
        if (utag === undefined) {
            utag = {};
        }
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var a, b, c, l;
                a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    b.setAttribute("height", "1");
                    b.setAttribute("width", "1");
                    b.setAttribute("style", "display:none");
                    b.setAttribute("src", o.src);
                } else if (o.type === "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                    b.src = o.src;
                    return;
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id;
                }
                if (typeof o.cb === "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState === "complete" || this.readyState === "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l === "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b);
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        u.ev = {
            'view': 1
        };
        u.initialized = false;
        u.map = {};
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f, i;
                u.data = {
                    'siteId': 'TV-81459054-1',
                    'base_url': '',
                    'endpoint': ''
                };
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.data[e[f]] = b[d];
                        }
                    }
                }
                if (b['cp.market'] === 'en-US') {
                    u.data.base_url = '//collector-1594.tvsquared.com/tv2trackext.js';
                    u.data.tracker_url = '//collector-1594.tvsquared.com/tv2track.php';
                } else {
                    u.data.base_url = '//collector-1054.tvsquared.com/tv2track.js';
                    u.data.tracker_url = '//collector-1054.tvsquared.com/tv2track.php';
                }
                _tvq.push(['setSiteId', u.data.siteId]);
                _tvq.push(['setTrackerUrl', u.data.tracker_url]);
                _tvq.push([function() {
                    this.deleteCustomVariable(5, 'page');
                }]);
                _tvq.push(['trackPageView']);
                u.loader({
                    "type": "script",
                    "src": u.data.base_url,
                    "cb": u.loader_cb,
                    "loc": "script",
                    "id": 'utag_1203'
                });
            }
        };
        utag.o[loader].loader.LOAD(id);
    })("1203", "godaddy.godaddy");
} catch (error) {
    utag.DB(error);
}