//tealium universal tag - utag.775 ut4.0.201907091751, Copyright 2019 Tealium.com Inc. All Rights Reserved.
window.uetq = window.uetq || [];
try {
    (function(id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var b, c, l, a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    o.attrs = o.attrs || {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    };
                    for (l in utag.loader.GV(o.attrs)) {
                        b.setAttribute(l, o.attrs[l]);
                    }
                    b.setAttribute("src", o.src);
                } else if (o.type == "img") {
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
                    for (l in utag.loader.GV(o.attrs)) {
                        b[l] = o.attrs[l];
                    }
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id
                };
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb()
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                                this.onreadystatechange = null;
                                o.cb()
                            }
                        };
                    }
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l == "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b)
                    }
                }
            }
        } else {
            u.loader = utag.ut.loader;
        }
        if (utag.ut.typeOf === undefined) {
            u.typeOf = function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            };
        } else {
            u.typeOf = utag.ut.typeOf;
        }
        u.ev = {
            'view': 1,
            'link': 1
        };
        u.initialized = false;
        u.map = {
            "order_total_usd": "order_subtotal",
            "ea": "ea",
            "ec": "ec",
            "el": "el"
        };
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f, g;
                u.data = {
                    'cart_url': '//bat.bing.com/action/0',
                    'base_url': '//bat.bing.com/bat.js',
                    'tagid': '4007276'
                };
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.data[e[f]] = b[d];
                        }
                    }
                }
                u.loader_cb = function() {
                    if (!u.initialized) {
                        var o = {
                            ti: u.data.tagid
                        };
                        o.q = uetq;
                        uetq = new UET(o);
                        uetq.push("pageLoad");
                    }
                    u.initialized = true;
                    var g = {};
                    if (b.gocentralEvent === 'true') {
                        b.ec = 'trial';
                        b.ea = 'signup';
                        b.el = 'wsb';
                    } else if (b.smartlineEvent === 'true') {
                        b.ec = 'trial';
                        b.ea = 'signup';
                        b.el = 'smartline';
                    } else if (b.webproEvent === 'true') {
                        b.ec = 'lead';
                        b.ea = 'signup';
                        b.el = 'pro';
                    }
                    var propMap = {
                        ec: b.ec,
                        ea: b.ea,
                        el: b.el,
                        ev: b.ev
                    };
                    for (var prop in propMap) {
                        if (propMap.hasOwnProperty(prop)) {
                            if (propMap[prop]) {
                                g[prop] = propMap[prop];
                            }
                        }
                    }
                    var isConversionEvent = window.tagUtils.equals(b.conversion_event, 'true');
                    var isConversionEventPending = window.tagUtils.equals(b.conversion_event_pending, 'true');
                    if (isConversionEvent || isConversionEventPending) {
                        if (b.order_total_usd) {
                            var gv = parseFloat(b.order_total_usd, 10);
                            if (isNaN(gv) === false) {
                                g.gv = gv;
                            }
                        }
                        g.ec = 'sale';
                        g.ea = 'order';
                        g.el = b.new_customer === 'true' ? 'nc order' : 'ec order';
                        if (isConversionEventPending) {
                            g.ec = 'delayed-payment';
                        }
                    }
                    if (g.ec || g.ea || g.el || g.ev || g.gv) {
                        window.uetq.push(g);
                        if (g.ea === 'order' && window.tagUtils.equals(b.includes_reseller_plan, 'true')) {
                            window.uetq.push({
                                ec: 'sale',
                                ea: 'order',
                                el: 'reseller order'
                            });
                        }
                    }
                };
                if (window.tagUtils.equals(b.app_name, 'cart') && (window.tagUtils.containsLowerCase(b['dom.url'], 'basket') || window.tagUtils.equals(b.mc, 'true'))) {
                    u.loader({
                        "type": "img",
                        "src": u.data.cart_url + '?ti=4007276&Ver=2'
                    });
                } else {
                    if (!u.initialized) {
                        u.loader({
                            "type": "script",
                            "src": u.data.base_url,
                            "cb": u.loader_cb,
                            "loc": "script",
                            "id": "utag_775"
                        });
                    } else {
                        u.loader_cb();
                    }
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("775", "godaddy.godaddy"));
} catch (error) {
    utag.DB(error);
}