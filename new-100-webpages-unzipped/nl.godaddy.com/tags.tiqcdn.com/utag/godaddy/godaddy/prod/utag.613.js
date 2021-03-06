//tealium universal tag - utag.613 ut4.0.201711221909, Copyright 2017 Tealium.com Inc. All Rights Reserved.
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
        u.ev = {
            "view": 1
        };
        u.map = {};
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f;
                u.data = {
                    "base_url": (document.location.protocol == "https:" ? "https://secure" : "http://pixel") + ".quantserve.com/aquant.js?a=##utag_qacct##",
                    "qacct": "p-55NyECWFJDPCA",
                    "uid": "",
                    "labels": "",
                    "orderid": "",
                    "revenue": "",
                    "order_id": "",
                    "order_subtotal": ""
                };
                c = [];
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.data[e[f]] = b[d];
                        }
                    }
                }
                u.data.order_id = u.data.orderid || u.data.order_id || b._corder || "";
                u.data.order_subtotal = u.data.revenue || u.data.order_subtotal || b._csubtotal || "";
                window.qcdata = {};
                window.qcdata.qacct = u.data.qacct;
                window.qcdata.uid = u.data.uid;
                window.qcdata.labels = u.data.labels;
                if (u.data.order_id !== "") {
                    window.qcdata.orderid = u.data.order_id;
                }
                if (u.data.order_subtotal !== "") {
                    window.qcdata.revenue = u.data.order_subtotal;
                }
                u.data.base_url = u.data.base_url.replace("##utag_qacct##", u.data.qacct);
                u.loader({
                    "type": "script",
                    "src": u.data.base_url,
                    "cb": u.callBack,
                    "loc": "script",
                    "id": "utag_613"
                });
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("613", "godaddy.godaddy"));
} catch (error) {
    utag.DB(error);
}