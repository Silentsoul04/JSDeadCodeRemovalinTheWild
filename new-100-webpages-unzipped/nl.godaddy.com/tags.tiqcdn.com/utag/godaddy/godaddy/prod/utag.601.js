//tealium universal tag - utag.601 ut4.0.201906101446, Copyright 2019 Tealium.com Inc. All Rights Reserved.
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
        if (utag.ut.merge === undefined) {
            u.merge = function(a, b, c, d) {
                if (c) {
                    for (d in utag.loader.GV(b)) {
                        a[d] = b[d];
                    }
                } else {
                    for (d in utag.loader.GV(b)) {
                        if (typeof a[d] == "undefined") {
                            a[d] = b[d];
                        }
                    }
                }
            };
        } else {
            u.merge = utag.ut.merge;
        }
        u.ev = {
            "view": 1,
            "link": 1
        };
        u.initialized = false;
        u.scriptrequested = false;
        u.queue = [];
        u.event_lookup = {
            "ViewContent": {
                obj: "vc",
                "map": ["value", "currency", "content_name", "content_ids", "content_category"]
            },
            "Search": {
                obj: "search",
                "map": ["value", "currency", "content_category", "content_ids"]
            },
            "AddToCart": {
                obj: "cart",
                "map": ["value", "currency", "content_name", "content_ids"]
            },
            "AddToWishlist": {
                obj: "wish",
                "map": ["value", "currency", "content_name", "content_ids"]
            },
            "InitiateCheckout": {
                obj: "cout",
                "map": ["value", "currency", "content_name", "content_ids", "num_items"]
            },
            "AddPaymentInfo": {
                obj: "payment",
                "map": ["value", "currency", "content_category", "content_ids"]
            },
            "Purchase": {
                obj: "purch",
                "map": ["value", "currency", "content_name", "content_ids", "num_items"]
            },
            "Lead": {
                obj: "lead",
                "map": ["value", "currency", "content_name", "content_category"]
            },
            "CompleteRegistration": {
                obj: "reg",
                "map": ["value", "currency", "content_name"]
            },
            "Conversion": {
                obj: "cnv",
                "map": ["value", "currency"]
            },
            "Custom": {
                obj: "cust",
                "map": []
            },
            "PageView": {
                obj: "page",
                "map": []
            }
        };
        u.std_params = {
            "value": function(g, event) {
                if (g.value === undefined || g.value === "") {
                    if (event === "ViewContent" || event === "AddToCart") {
                        g.value = u.data.product_unit_price;
                    } else {
                        g.value = u.data.order_subtotal;
                    }
                }
                g.value = u.val(g.value);
            },
            "currency": function(g) {
                if (!g.currency) {
                    g.currency = u.data.order_currency;
                }
            },
            "content_name": function(g) {
                if (!g.content_name) {
                    g.content_name = u.data.product_name;
                }
                g.content_name = u.val(g.content_name);
            },
            "content_ids": function(g) {
                if (!g.content_ids) {
                    g.content_ids = u.data.product_id;
                }
                if (u.typeOf(g.content_ids) !== "array") {
                    g.content_ids = g.content_ids.split(/\s*,\s*/);
                }
            },
            "content_category": function(g) {
                if (!g.content_category) {
                    g.content_category = u.data.product_category;
                }
                g.content_category = u.val(g.content_category);
            },
            "num_items": function(g) {
                if (!g.num_items && u.data.calc_items === "true") {
                    g.num_items = u.calc_items(u.data.product_quantity);
                }
            }
        };
        u.map_func = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.map_func(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.val = function(value) {
            return u.typeOf(value) === "array" ? value[0] : value;
        };
        u.remove_empty = function(a) {
            var b, t;
            for (b in utag.loader.GV(a)) {
                t = u.typeOf(a[b]);
                if (t === "object") {
                    u.remove_empty(a[b]);
                    if (u.isEmptyObject(a[b])) {
                        try {
                            delete a[b];
                        } catch (e) {
                            a[b] = undefined;
                        }
                    }
                } else if (!((a[b] === 0 || a[b] === false) ? !0 : (t === "array" && a[b].length === 0) ? !1 : !!a[b])) {
                    try {
                        delete a[b];
                    } catch (e) {
                        a[b] = undefined;
                    }
                }
            }
            return a;
        };
        u.calc_items = function(quan) {
            var q, i = 0;
            for (q = 0; q < quan.length; q++) {
                i += parseInt(quan[q]);
            }
            return i;
        };
        u.map = {
            "event_type:add_to_cart": "AddToCart",
            "event_type:product_impression": "ViewContent",
            "gocentralEvent:true": "Lead",
            "smartlineEvent:true": "smartlineSignup",
            "requestACallEvent:true": "requestACall",
            "webproEvent:true": "webpro",
            "order_total_usd": "order_subtotal",
            "order_id": "order_id,lead.order_id,smartlineSignup.order_id,purch.order_id",
            "package_id": "vc.content_ids,cart.content_ids,lead.content_ids,purch.content_ids",
            "package_category": "vc.content_category,cart.content_category,webpro.content_category,smartlineSignup.package_category,lead.content_category,purch.content_category",
            "fb_content_type": "vc.content_type,cart.content_type,purch.content_type,lead.content_type,webpro.content_type,smartlineSignup.content_type",
            "order_total_renewal_usd": "purch.order_total_renewal_usd",
            "product_name": "purch.content_name",
            "new_customer": "purch.new_customer",
            "order_total_new_usd": "purch.order_total_new_usd",
            "conversion_event_pending": "purch.delayed_payment",
            "currency_usd": "lead.currency,webpro.currency,smartlineSignup.currency"
        };
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f, g, h, evt = [];
                var accountId = (b['cp.market'] && b['cp.market'].indexOf('-IN') === -1) ? '284067518410183' : '1358466587537217';
                u.data = {
                    "qsp_delim": "&",
                    "kvp_delim": "=",
                    "base_url": "//connect.facebook.net/en_US/fbevents.js",
                    "cust_pixel": "" || accountId,
                    "conv_pixel": "",
                    "page_view": "true",
                    "calc_items": "true",
                    "custom_data": {},
                    "custom_event": "",
                    "order_currency": "USD",
                    "product_id": [],
                    "product_name": [],
                    "product_category": [],
                    "product_unit_price": [],
                    "product_quantity": [],
                    "evt_list": []
                };
                c = [];
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.map_func(e[f].split("."), u.data, b[d]);
                        }
                    } else {
                        h = d.split(":");
                        if (h.length === 2 && b[h[0]] === h[1]) {
                            if (u.map[d]) {
                                evt = evt.concat(u.map[d].split(","));
                            }
                        }
                    }
                }
                if (u.data.evt_list && u.typeOf(u.data.evt_list) !== "array") {
                    u.data.evt_list = u.data.evt_list.split(/\s*,\s*/);
                }
                u.data.evt_list = u.data.evt_list.concat(evt);
                g = {};
                if (u.data.product_category.length === 0 && b._ccat !== undefined) {
                    g.product_category = b._ccat.slice(0);
                } else {
                    g.product_category = u.data.product_category;
                }
                if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) {
                    g.product_unit_price = b._cprice.slice(0);
                } else {
                    g.product_unit_price = u.data.product_unit_price;
                }
                if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
                    u.data.product_quantity = g.product_quantity = b._cquan.slice(0);
                } else {
                    g.product_quantity = u.data.product_quantity;
                }
                u.loader_cb = function() {
                    var g = {},
                        i, j, _event, _track = "track";
                    if (u.data.evt_list.toString().indexOf("Purchase") === -1 && (window.tagUtils.equals(b.conversion_event, 'true') || window.tagUtils.equals(b.conversion_event_pending, 'true'))) {
                        u.data.evt_list.push("Purchase");
                    }
                    for (i = 0; i < u.data.evt_list.length; i++) {
                        _event = u.data.evt_list[i];
                        f = u.event_lookup[_event];
                        c = f ? f.map : [];
                        f = f ? f.obj : _event;
                        g = u.data[f] = u.data[f] || {};
                        for (j = 0; j < c.length; j++) {
                            u.std_params[c[j]](g, _event);
                        }
                        if (_event === "ViewContent" || _event === "AddToCart") {
                            if (!g.content_type) {
                                g.content_type = 'product';
                            }
                        } else if (_event === "Lead") {
                            if (!g.content_category) {
                                g.content_category = 'Quote';
                            }
                        } else if (_event === "Search") {
                            if (!g.content_category) {
                                g.content_category = 'Product Search';
                            }
                        } else if (_event === "Conversion" && u.data.conv_pixel) {
                            _event = u.data.conv_pixel;
                        } else if (_event && !u.event_lookup[_event]) {
                            _track = "trackCustom";
                            g = u.data[_event];
                        }
                        if (g.value !== undefined) {
                            if (u.typeOf(g.value) === "array") {
                                for (j = 0; j < g.value.length; j++) {
                                    g.value[j] = parseFloat(g.value[j]) || 0.00;
                                }
                            } else {
                                g.value = parseFloat(g.value) || 0.00;
                            }
                        }
                        if (_event) {
                            fbq(_track, _event, u.remove_empty(g));
                        }
                    }
                };
                u.callBack = function() {
                    var data = {};
                    u.initialized = true;
                    while (data = u.queue.shift()) {
                        u.data = data.data;
                        u.loader_cb();
                    }
                };
                if (u.initialized) {
                    u.loader_cb();
                } else {
                    u.queue.push({
                        "data": u.data
                    });
                    if (!u.scriptrequested) {
                        u.scriptrequested = true;
                        u.loader({
                            "type": "script",
                            "src": u.data.base_url,
                            "cb": u.callBack,
                            "loc": "script",
                            "id": 'utag_601'
                        });
                        ! function(f, b, e) {
                            if (f.fbq) return;
                            e = f.fbq = function() {
                                e.callMethod ? e.callMethod.apply(e, arguments) : e.queue.push(arguments);
                            };
                            if (!f._fbq) f._fbq = e;
                            e.push = e;
                            e.loaded = !0;
                            e.version = '2.0';
                            e.queue = [];
                        }(window, document);
                        if (u.data.cust_pixel) {
                            fbq('set', 'autoConfig', false, u.data.cust_pixel);
                            u.data.cust_pixel = u.data.cust_pixel.split(/\s*,\s*/);
                            for (var i = 0; i < u.data.cust_pixel.length; i++) {
                                u.data.cust_pixel[i] = u.data.cust_pixel[i].replace(/^\s*/, "").replace(/\s*$/, "");
                                fbq('init', u.data.cust_pixel[i]);
                            }
                            if (u.data.page_view === "true") {
                                fbq('track', 'PageView', u.data.page);
                            }
                        }
                    }
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("601", "godaddy.godaddy"));
} catch (error) {
    utag.DB(error);
}