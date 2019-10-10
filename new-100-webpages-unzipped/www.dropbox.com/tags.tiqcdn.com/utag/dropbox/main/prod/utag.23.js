//tealium universal tag - utag.23 ut4.0.201909092100, Copyright 2019 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {
            "id": id
        };
        utag.o[loader].sender[id] = u;
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
        if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) {
            u.loader = function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        b = m;
                    } else {
                        b = a.createElement("iframe");
                    }
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id;
                }
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l]);
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == "complete" || this.readyState == "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        };
                    }
                }
                if (o.type != "img" && !m) {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b);
                        }
                    }
                }
            };
        } else {
            u.loader = utag.ut.loader;
        }
        u.escapefn = function(obj) {
            var escape = window.encodeURIComponent || window.escape;
            for (property in obj) {
                if (obj.hasOwnProperty(property)) {
                    obj[property] = escape(obj[property]);
                }
            }
            return obj;
        };
        u.ev = {
            "view": 1,
            "link": 1
        };
        u.initialized = false;
        u.scriptrequested = false;
        u.queue = [];
        u.map = {
            "versa_request_url": "url",
            "tealium_timestamp_epoch": "act.param1"
        };
        u.extend = [function(a, b) {
            try {
                if ((b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'sidebar_nav_label_coordinate'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && typeof b['event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && b['event'].toString().toLowerCase() == 'sidebar_nav_label_communicate'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().indexOf('sidebar_nav_label_access') > -1) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'sidebar_nav_label_flow'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'plank3_communicate_learn_more'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'plank3_communicate_interaction'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'plank2_coordinate_learn_more'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'plank2_coordinate_interaction'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'BC19_plank1_access_learn_more'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'plank1_access_interaction'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'persistent_nav_try_dropbox_business_free'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'persistent_nav_for_teams'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'persistent_nav_for_individuals'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'persistent_footer_for_teams_and_businesses_and_any_size'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'persistent_footer_for_freelancers_and_solo_workers'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'hero_primary_cta'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'hero_paragraph_cta_coordinate'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'hero_paragraph_cta_communicate'.toLowerCase()) || (b['dom.url'].toString().indexOf('/flow') > -1 && typeof b['ut.event'] != 'undefined' && b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase() && typeof b['event'] != 'undefined' && b['event'].toString().toLowerCase() == 'hero_paragraph_cta_access'.toLowerCase())) {
                    b['versa_request_url'] = ''
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['event'];
                if (typeof d == 'undefined') return;
                c = [{
                    'sidebar_nav_label_coordinate': 'http://www.dropbox.com/versaTag/sidebar_nav_label_coordinate'
                }, {
                    'sidebar_nav_label_flow': 'http://www.dropbox.com/versaTag/sidebar_nav_label_flow'
                }, {
                    'sidebar_nav_label_communicate': 'http://www.dropbox.com/versaTag/sidebar_nav_label_communicate'
                }, {
                    'sidebar_nav_label_access': 'http://www.dropbox.com/versaTag/sidebar_nav_label_access'
                }, {
                    'plank3_communicate_learn_more': 'http://www.dropbox.com/versaTag/plank3_communicate_learn_more'
                }, {
                    'plank3_communicate_interaction': 'http://www.dropbox.com/versaTag/plank3_communicate_interaction'
                }, {
                    'plank2_coordinate_learn_more': 'http://www.dropbox.com/versaTag/plank2_coordinate_learn_more'
                }, {
                    'plank2_coordinate_interaction': 'http://www.dropbox.com/versaTag/plank2_coordinate_interaction'
                }, {
                    'plank1_access_learn_more': 'http://www.dropbox.com/versaTag/plank1_access_learn_more'
                }, {
                    'plank1_access_interaction': 'http://www.dropbox.com/versaTag/plank1_access_interaction'
                }, {
                    'persistent_nav_try_dropbox_business_free': 'http://www.dropbox.com/versaTag/persistent_nav_try_dropbox_business_free'
                }, {
                    'persistent_nav_for_teams': 'http://www.dropbox.com/versaTag/persistent_nav_for_teams'
                }, {
                    'persistent_nav_for_individuals': 'http://www.dropbox.com/versaTag/persistent_nav_for_individuals'
                }, {
                    'persistent_footer_for_teams_and_businesses_and_any_size': 'http://www.dropbox.com/versaTag/persistent_footer_for_teams_and_businesses_and_any_size'
                }, {
                    'persistent_footer_for_freelancers_and_solo_workers': 'http://www.dropbox.com/versaTag/persistent_footer_for_freelancers_and_solo_workers'
                }, {
                    'hero_primary_cta': 'http://www.dropbox.com/versaTag/hero_primary_cta'
                }, {
                    'hero_paragraph_cta_coordinate': 'http://www.dropbox.com/versaTag/hero_paragraph_cta_coordinate'
                }, {
                    'hero_paragraph_cta_communicate': 'http://www.dropbox.com/versaTag/hero_paragraph_cta_communicate'
                }, {
                    'hero_paragraph_cta_access': 'http://www.dropbox.com/versaTag/hero_paragraph_cta_access'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in c[e]) {
                        if (d == f) {
                            b['versa_request_url'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
            }
        }];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f;
                u.data = {
                    "id": "9603",
                    "sync": 0,
                    "dispType": "js",
                    "ptcl": document.location.protocol === "https:" ? "https" : "http",
                    "bsUrl": "bs.serving-sys.com/BurstingPipe",
                    "mobile": 0,
                    "activityParams": {},
                    "retargetParams": {},
                    "dynamicRetargetParams": {},
                    "conditionalParams": {},
                    "base_url": (document.location.protocol == "https:" ? "https://secure-" : "http://") + "ds.serving-sys.com/SemiCachedScripts/ebOneTag.js",
                    "Session": b["cp.utag_main_ses_id"],
                    "ActivityID": "",
                    "url": b["dom.url"],
                    "order_id": "",
                    "product_id": [],
                    "product_name": [],
                    "product_quantity": [],
                    "product_unit_price": []
                };
                for (c = 0; c < u.extend.length; c++) {
                    try {
                        d = u.extend[c](a, b);
                        if (d == false) return
                    } catch (e) {}
                };
                c = [];
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            if (e[f].indexOf("rtp.") === 0) {
                                u.data.retargetParams[e[f].substr(4)] = b[d];
                            } else if (e[f].indexOf("drtp.") === 0) {
                                u.data.dynamicRetargetParams[e[f].substr(5)] = b[d];
                            } else if (e[f].indexOf("cp.") === 0) {
                                u.data.conditionalParams[e[f].substr(3)] = b[d];
                            } else if (e[f].indexOf("act.") === 0) {
                                u.data.activityParams[e[f].substr(4)] = b[d];
                            } else {
                                u.data[e[f]] = b[d];
                            }
                        }
                    }
                }
                u.data.order_id = u.data.orderId || u.data.order_id || b._corder || "";
                if (u.data.product_id.length === 0 && b._cprod !== undefined) {
                    u.data.product_id = b._cprod.slice(0);
                }
                if (u.data.product_name.length === 0 && b._cprodname !== undefined) {
                    u.data.product_name = b._cprodname.slice(0);
                }
                if (u.data.product_quantity.length === 0 && b._cquan !== undefined) {
                    u.data.product_quantity = b._cquan.slice(0);
                }
                if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) {
                    u.data.product_unit_price = b._cprice.slice(0);
                }
                u.data.activityParams.Session = u.data.Session;
                u.data.activityParams.ActivityID = u.data.ActivityID;
                if (u.data.order_id) {
                    u.data.activityParams.OrderID = u.data.order_id;
                }
                if (u.data.product_unit_price.length > 0) {
                    u.data.activityParams.Value = 0.0;
                    for (var i = 0; i < u.data.product_unit_price.length; i++) {
                        u.data.activityParams.Value += parseFloat(u.data.product_unit_price[i]);
                    }
                    u.data.activityParams.Value = u.data.activityParams.Value.toFixed(2);
                }
                if (u.data.product_id.length > 0) {
                    u.data.activityParams.productid = u.data.product_id.join("|");
                }
                if (u.data.product_name.length > 0) {
                    u.data.activityParams.productinfo = u.data.product_name.join("|");
                }
                if (u.data.product_quantity.length > 0) {
                    u.data.activityParams.Quantity = 0;
                    for (var i = 0; i < u.data.product_quantity.length; i++) {
                        u.data.activityParams.Quantity += parseInt(u.data.product_quantity[i]);
                    }
                    u.data.activityParams.Quantity = u.data.activityParams.Quantity.toString();
                }
                if (!/^https?:\/\//i.test(u.data.url)) {
                    u.data.url = u.data.ptcl + "://" + u.data.url;
                }
                u.data.activityParams = u.escapefn(u.data.activityParams);
                u.data.retargetParams = u.escapefn(u.data.retargetParams);
                u.data.dynamicRetargetParams = u.escapefn(u.data.dynamicRetargetParams);
                u.data.conditionalParams = u.escapefn(u.data.conditionalParams);
                u.loader_cb = function(a, b) {
                    var d, vt = window.versaTagObj;
                    if ('view' === a) {
                        vt._oneTagObj.id = u.data.id || vt._oneTagObj.id;
                        vt._oneTagObj.sync = u.data.sync || vt._oneTagObj.sync;
                        vt._oneTagObj.dispType = u.data.dispType || vt._oneTagObj.dispType;
                        vt._oneTagObj.ptcl = u.data.ptcl || vt._oneTagObj.ptcl;
                        vt._oneTagObj.bsUrl = u.data.bsUrl || vt._oneTagObj.bsUrl;
                        vt._oneTagObj.mobile = u.data.mobile || vt._oneTagObj.mobile;
                    }
                    vt.clearActivityParam();
                    for (d in utag.loader.GV(u.data.activityParams)) {
                        vt.setActivityParam(d, u.data.activityParams[d]);
                    }
                    vt.clearRetargetParam();
                    for (d in utag.loader.GV(u.data.retargetParams)) {
                        vt.setRetargetParam(d, u.data.retargetParams[d]);
                    }
                    vt.clearDynamicRetargetParam();
                    for (d in utag.loader.GV(u.data.dynamicRetargetParams)) {
                        vt.setDynamicRetargetParam(d, u.data.dynamicRetargetParams[d]);
                    }
                    vt.clearConditionalParam();
                    for (d in utag.loader.GV(u.data.conditionalParams)) {
                        vt.setConditionalParam(d, u.data.conditionalParams[d]);
                    }
                    vt.generateRequest(u.data.url);
                };
                u.callBack = function() {
                    u.initialized = true;
                    var data = {};
                    while (data = u.queue.shift()) {
                        u.data = data.data;
                        u.loader_cb(data.a, data.b);
                    }
                };
                if (u.initialized) {
                    u.loader_cb(a, b);
                } else {
                    u.queue.push({
                        "data": u.data,
                        "a": a,
                        "b": b
                    });
                    if (!u.scriptrequested) {
                        u.scriptrequested = true;
                        u.queue.shift();
                        window.versaTag = {
                            "id": u.data.id,
                            "sync": u.data.sync,
                            "dispType": u.data.dispType,
                            "ptcl": u.data.ptcl,
                            "bsUrl": u.data.bsUrl,
                            "mobile": u.data.mobile,
                            "activityParams": u.data.activityParams,
                            "retargetParams": u.data.retargetParams,
                            "dynamicRetargetParams": u.data.dynamicRetargetParams,
                            "conditionalParams": u.data.conditionalParams
                        };
                        utag.ut.loader({
                            "type": "script",
                            "src": u.data.base_url,
                            "cb": u.callBack,
                            "loc": "script",
                            "id": "ebOneTagUrlId"
                        });
                    }
                }
            }
        };
        utag.o[loader].loader.LOAD(id);
    }("23", "dropbox.main"));
} catch (error) {
    utag.DB(error);
}