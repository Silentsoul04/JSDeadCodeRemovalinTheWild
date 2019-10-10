//tealium universal tag - utag.loader ut4.0.201909241734, Copyright 2019 Tealium.com Inc. All Rights Reserved.
var utag_condload = false;
if (typeof utag == "undefined" && !utag_condload) {
    var utag = {
        id: "dropbox.main",
        o: {},
        sender: {},
        send: {},
        rpt: {
            ts: {
                a: new Date()
            }
        },
        dbi: [],
        db_log: [],
        loader: {
            q: [],
            lc: 0,
            f: {},
            p: 0,
            ol: 0,
            wq: [],
            lq: [],
            bq: {},
            bk: {},
            rf: 0,
            ri: 0,
            rp: 0,
            rq: [],
            ready_q: [],
            sendq: {
                "pending": 0
            },
            run_ready_q: function() {
                for (var i = 0; i < utag.loader.ready_q.length; i++) {
                    utag.DB("READY_Q:" + i);
                    try {
                        utag.loader.ready_q[i]()
                    } catch (e) {
                        utag.DB(e)
                    };
                }
            },
            lh: function(a, b, c) {
                a = "" + location.hostname;
                b = a.split(".");
                c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
                return b.splice(b.length - c, c).join(".");
            },
            WQ: function(a, b, c, d, g) {
                utag.DB('WQ:' + utag.loader.wq.length);
                try {
                    if (utag.udoname && utag.udoname.indexOf(".") < 0) {
                        utag.ut.merge(utag.data, window[utag.udoname], 0);
                    }
                    if (utag.cfg.load_rules_at_wait) {
                        utag.handler.LR(utag.data);
                    }
                } catch (e) {
                    utag.DB(e)
                };
                d = 0;
                g = [];
                for (a = 0; a < utag.loader.wq.length; a++) {
                    b = utag.loader.wq[a];
                    b.load = utag.loader.cfg[b.id].load;
                    if (b.load == 4) {
                        this.f[b.id] = 0;
                        utag.loader.LOAD(b.id)
                    } else if (b.load > 0) {
                        g.push(b);
                        d++;
                    } else {
                        this.f[b.id] = 1;
                    }
                }
                for (a = 0; a < g.length; a++) {
                    utag.loader.AS(g[a]);
                }
                if (d == 0) {
                    utag.loader.END();
                }
            },
            AS: function(a, b, c, d) {
                utag.send[a.id] = a;
                if (typeof a.src == 'undefined') {
                    a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
                }
                a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v ? utag.cfg.template + a.v : utag.cfg.v);
                utag.rpt['l_' + a.id] = a.src;
                b = document;
                this.f[a.id] = 0;
                if (a.load == 2) {
                    utag.DB("Attach sync: " + a.src);
                    a.uid = a.id;
                    b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
                    if (typeof a.cb != 'undefined') a.cb();
                } else if (a.load == 1 || a.load == 3) {
                    if (b.createElement) {
                        c = 'utag_dropbox.main_' + a.id;
                        if (!b.getElementById(c)) {
                            d = {
                                src: a.src,
                                id: c,
                                uid: a.id,
                                loc: a.loc
                            }
                            if (a.load == 3) {
                                d.type = "iframe"
                            };
                            if (typeof a.cb != 'undefined') d.cb = a.cb;
                            utag.ut.loader(d);
                        }
                    }
                }
            },
            GV: function(a, b, c) {
                b = {};
                for (c in a) {
                    if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
                }
                return b
            },
            OU: function(tid, tcat, a, b, c, d, f, g) {
                g = {};
                utag.loader.RDcp(g);
                try {
                    if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
                        c = utag.loader.cfg;
                        a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
                        for (d = 0; d < a.length; d++) {
                            b = a[d].split(':');
                            if (b[1] * 1 !== 0) {
                                if (b[0].indexOf('c') == 0) {
                                    for (f in utag.loader.GV(c)) {
                                        if (c[f].tcat == b[0].substring(1)) c[f].load = 0;
                                        if (c[f].tid == tid && c[f].tcat == b[0].substring(1)) return true;
                                    }
                                    if (tcat == b[0].substring(1)) return true;
                                } else if (b[0] * 1 == 0) {
                                    utag.cfg.nocookie = true
                                } else {
                                    for (f in utag.loader.GV(c)) {
                                        if (c[f].tid == b[0]) c[f].load = 0
                                    }
                                    if (tid == b[0]) return true;
                                }
                            }
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
                return false;
            },
            RDdom: function(o) {
                var d = document || {},
                    l = location || {};
                o["dom.referrer"] = d.referrer;
                o["dom.title"] = "" + d.title;
                o["dom.domain"] = "" + l.hostname;
                o["dom.query_string"] = ("" + l.search).substring(1);
                o["dom.hash"] = ("" + l.hash).substring(1);
                o["dom.url"] = "" + d.URL;
                o["dom.pathname"] = "" + l.pathname;
                o["dom.viewport_height"] = window.innerHeight || (d.documentElement ? d.documentElement.clientHeight : 960);
                o["dom.viewport_width"] = window.innerWidth || (d.documentElement ? d.documentElement.clientWidth : 960);
            },
            RDcp: function(o, b, c, d) {
                b = utag.loader.RC();
                for (d in b) {
                    if (d.match(/utag_(.*)/)) {
                        for (c in utag.loader.GV(b[d])) {
                            o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
                        }
                    }
                }
                for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
                    if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
                }
            },
            RDqp: function(o, a, b, c) {
                a = location.search + (location.hash + '').replace("#", "&");
                if (utag.cfg.lowerqp) {
                    a = a.toLowerCase()
                };
                if (a.length > 1) {
                    b = a.substring(1).split('&');
                    for (a = 0; a < b.length; a++) {
                        c = b[a].split("=");
                        if (c.length > 1) {
                            o["qp." + c[0]] = utag.ut.decode(c[1])
                        }
                    }
                }
            },
            RDmeta: function(o, a, b, h) {
                a = document.getElementsByTagName("meta");
                for (b = 0; b < a.length; b++) {
                    try {
                        h = a[b].name || a[b].getAttribute("property") || "";
                    } catch (e) {
                        h = "";
                        utag.DB(e)
                    };
                    if (utag.cfg.lowermeta) {
                        h = h.toLowerCase()
                    };
                    if (h != "") {
                        o["meta." + h] = a[b].content
                    }
                }
            },
            RDva: function(o) {
                var readAttr = function(o, l) {
                    var a = "",
                        b;
                    a = localStorage.getItem(l);
                    if (!a || a == "{}") return;
                    b = utag.ut.flatten({
                        va: JSON.parse(a)
                    });
                    utag.ut.merge(o, b, 1);
                }
                try {
                    readAttr(o, "tealium_va");
                    readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"]);
                } catch (e) {
                    utag.DB(e)
                }
            },
            RDut: function(o, a) {
                var t = {};
                var d = new Date();
                var m = (utag.ut.typeOf(d.toISOString) == "function");
                o["ut.domain"] = utag.cfg.domain;
                o["ut.version"] = utag.cfg.v;
                t["tealium_event"] = o["ut.event"] = a || "view";
                t["tealium_visitor_id"] = o["ut.visitor_id"] = o["cp.utag_main_v_id"];
                t["tealium_session_id"] = o["ut.session_id"] = o["cp.utag_main_ses_id"];
                t["tealium_session_number"] = o["cp.utag_main__sn"];
                t["tealium_session_event_number"] = o["cp.utag_main__se"];
                try {
                    t["tealium_datasource"] = utag.cfg.datasource;
                    t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
                    t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
                    t["tealium_environment"] = o["ut.env"] = utag.cfg.path.split("/")[6];
                } catch (e) {
                    utag.DB(e)
                }
                t["tealium_random"] = Math.random().toFixed(16).substring(2);
                t["tealium_library_name"] = "ut" + "ag.js";
                t["tealium_library_version"] = (utag.cfg.template + "0").substring(2);
                t["tealium_timestamp_epoch"] = Math.floor(d.getTime() / 1000);
                t["tealium_timestamp_utc"] = (m ? d.toISOString() : "");
                d.setHours(d.getHours() - (d.getTimezoneOffset() / 60));
                t["tealium_timestamp_local"] = (m ? d.toISOString().replace("Z", "") : "");
                utag.ut.merge(o, t, 0);
            },
            RDses: function(o, a, c) {
                a = (new Date()).getTime();
                c = (a + parseInt(utag.cfg.session_timeout)) + "";
                if (!o["cp.utag_main_ses_id"]) {
                    o["cp.utag_main_ses_id"] = a + "";
                    o["cp.utag_main__ss"] = "1";
                    o["cp.utag_main__se"] = "1";
                    o["cp.utag_main__sn"] = (1 + parseInt(o["cp.utag_main__sn"] || 0)) + "";
                } else {
                    o["cp.utag_main__ss"] = "0";
                    o["cp.utag_main__se"] = (1 + parseInt(o["cp.utag_main__se"] || 0)) + "";
                }
                o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
                o["cp.utag_main__st"] = c;
                utag.loader.SC("utag_main", {
                    "_sn": (o["cp.utag_main__sn"] || 1),
                    "_se": o["cp.utag_main__se"],
                    "_ss": o["cp.utag_main__ss"],
                    "_st": c,
                    "ses_id": (o["cp.utag_main_ses_id"] || a) + ";exp-session",
                    "_pn": o["cp.utag_main__pn"] + ";exp-session"
                });
            },
            RDpv: function(o) {
                if (typeof utag.pagevars == "function") {
                    utag.DB("Read page variables");
                    utag.pagevars(o);
                }
            },
            RD: function(o, a) {
                utag.DB("utag.loader.RD");
                utag.DB(o);
                utag.loader.RDcp(o);
                if (!utag.loader.rd_flag) {
                    utag.loader.rd_flag = 1;
                    o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
                    o["cp.utag_main__pn"] = (1 + parseInt(o["cp.utag_main__pn"] || 0)) + "";
                    utag.loader.SC("utag_main", {
                        "v_id": o["cp.utag_main_v_id"]
                    });
                    utag.loader.RDses(o);
                }
                if (a && !utag.cfg.noview) utag.loader.RDses(o);
                utag.loader.RDqp(o);
                utag.loader.RDmeta(o);
                utag.loader.RDdom(o);
                utag.loader.RDut(o, a || "view");
                utag.loader.RDpv(o);
                utag.loader.RDva(o);
            },
            RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
                o = {};
                b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
                r = /^(.*?)=(.*)$/;
                s = /^(.*);exp-(.*)$/;
                t = (new Date()).getTime();
                for (c = 0; c < b.length; c++) {
                    if (b[c].match(r)) {
                        ck = RegExp.$1;
                        cv = RegExp.$2;
                    }
                    e = utag.ut.decode(cv);
                    if (typeof ck != "undefined") {
                        if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
                            e = cv.split("$");
                            g = [];
                            j = {};
                            for (f = 0; f < e.length; f++) {
                                try {
                                    g = e[f].split(":");
                                    if (g.length > 2) {
                                        g[1] = g.slice(1).join(":");
                                    }
                                    v = "";
                                    if (("" + g[1]).indexOf("~") == 0) {
                                        h = g[1].substring(1).split("|");
                                        for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                                        v = h
                                    } else v = utag.ut.decode(g[1]);
                                    j[g[0]] = v;
                                } catch (er) {
                                    utag.DB(er)
                                };
                            }
                            o[ck] = {};
                            for (f in utag.loader.GV(j)) {
                                if (j[f] instanceof Array) {
                                    n = [];
                                    for (m = 0; m < j[f].length; m++) {
                                        if (j[f][m].match(s)) {
                                            k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                            if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                                        }
                                    }
                                    j[f] = n.join("|");
                                } else {
                                    j[f] = "" + j[f];
                                    if (j[f].match(s)) {
                                        k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                        j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                                    }
                                }
                                if (j[f]) o[ck][f] = j[f];
                            }
                        } else if (utag.cl[ck] || utag.cl['_all_']) {
                            o[ck] = e
                        }
                    }
                }
                return (a) ? (o[a] ? o[a] : {}) : o;
            },
            SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
                if (!a) return 0;
                if (a == "utag_main" && utag.cfg.nocookie) return 0;
                v = "";
                var date = new Date();
                var exp = new Date();
                exp.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
                x = exp.toGMTString();
                if (c && c == "da") {
                    x = "Thu, 31 Dec 2009 00:00:00 GMT";
                } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
                    if (typeof b != "object") {
                        v = b
                    }
                } else {
                    d = utag.loader.RC(a, 0);
                    for (e in utag.loader.GV(b)) {
                        f = "" + b[e];
                        if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
                            g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
                            if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
                            f = RegExp.$1 + ";exp-" + g;
                        }
                        if (c == "i") {
                            if (d[e] == null) d[e] = f;
                        } else if (c == "d") delete d[e];
                        else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
                        else if (c == "ap" || c == "au") {
                            if (d[e] == null) d[e] = f;
                            else {
                                if (d[e].indexOf("|") > 0) {
                                    d[e] = d[e].split("|")
                                }
                                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                                g.push(f);
                                if (c == "au") {
                                    h = {};
                                    k = {};
                                    for (i = 0; i < g.length; i++) {
                                        if (g[i].match(/^(.*);exp-(.*)$/)) {
                                            j = RegExp.$1;
                                        }
                                        if (typeof k[j] == "undefined") {
                                            k[j] = 1;
                                            h[g[i]] = 1;
                                        }
                                    }
                                    g = [];
                                    for (i in utag.loader.GV(h)) {
                                        g.push(i);
                                    }
                                }
                                d[e] = g
                            }
                        } else d[e] = f;
                    }
                    h = new Array();
                    for (g in utag.loader.GV(d)) {
                        if (d[g] instanceof Array) {
                            for (c = 0; c < d[g].length; c++) {
                                d[g][c] = encodeURIComponent(d[g][c])
                            }
                            h.push(g + ":~" + d[g].join("|"))
                        } else h.push((g + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(d[g]))
                    }
                    if (h.length == 0) {
                        h.push("");
                        x = ""
                    }
                    v = (h.join("$"));
                }
                document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
                return 1
            },
            LOAD: function(a, b, c, d) {
                if (!utag.loader.cfg) {
                    return
                }
                if (this.ol == 0) {
                    if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
                        this.f[a] = 1;
                        delete utag.loader.bq[a];
                    }
                    for (b in utag.loader.GV(utag.loader.bq)) {
                        if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
                            utag.loader.bk[a] = 1;
                            utag.DB("blocked: " + a);
                        }
                        utag.DB("blocking: " + b);
                        return;
                    }
                    utag.loader.INIT();
                    return;
                }
                utag.DB('utag.loader.LOAD:' + a);
                if (this.f[a] == 0) {
                    this.f[a] = 1;
                    if (utag.cfg.noview != true) {
                        if (utag.loader.cfg[a].send) {
                            utag.DB("SENDING: " + a);
                            try {
                                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                                    utag.DB("utag.loader.LOAD:sendq: " + a);
                                    while (d = utag.loader.sendq[a].shift()) {
                                        utag.DB(d);
                                        utag.sender[a].send(d.event, utag.handler.C(d.data));
                                        utag.loader.sendq.pending--;
                                    }
                                } else {
                                    utag.sender[a].send('view', utag.handler.C(utag.data));
                                }
                                utag.rpt['s_' + a] = 0;
                            } catch (e) {
                                utag.DB(e);
                                utag.rpt['s_' + a] = 1;
                            }
                        }
                    }
                    if (utag.loader.rf == 0) return;
                    for (b in utag.loader.GV(this.f)) {
                        if (this.f[b] == 0 || this.f[b] == 2) return
                    }
                    utag.loader.END();
                }
            },
            EV: function(a, b, c, d) {
                if (b == "ready") {
                    if (!utag.data) {
                        try {
                            utag.cl = {
                                '_all_': 1
                            };
                            utag.loader.initdata();
                            utag.loader.RD(utag.data);
                        } catch (e) {
                            utag.DB(e)
                        };
                    }
                    if ((document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading") setTimeout(c, 1);
                    else {
                        utag.loader.ready_q.push(c);
                        var RH;
                        if (utag.loader.ready_q.length <= 1) {
                            if (document.addEventListener) {
                                RH = function() {
                                    document.removeEventListener("DOMContentLoaded", RH, false);
                                    utag.loader.run_ready_q()
                                };
                                if (!utag.cfg.dom_complete) document.addEventListener("DOMContentLoaded", RH, false);
                                window.addEventListener("load", utag.loader.run_ready_q, false);
                            } else if (document.attachEvent) {
                                RH = function() {
                                    if (document.readyState === "complete") {
                                        document.detachEvent("onreadystatechange", RH);
                                        utag.loader.run_ready_q()
                                    }
                                };
                                document.attachEvent("onreadystatechange", RH);
                                window.attachEvent("onload", utag.loader.run_ready_q);
                            }
                        }
                    }
                } else {
                    if (a.addEventListener) {
                        a.addEventListener(b, c, false)
                    } else if (a.attachEvent) {
                        a.attachEvent(((d == 1) ? "" : "on") + b, c)
                    }
                }
            },
            END: function(b, c, d, e, v, w) {
                if (this.ended) {
                    return
                };
                this.ended = 1;
                utag.DB("loader.END");
                b = utag.data;
                if (utag.handler.base && utag.handler.base != '*') {
                    e = utag.handler.base.split(",");
                    for (d = 0; d < e.length; d++) {
                        if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
                    }
                } else if (utag.handler.base == '*') {
                    utag.ut.merge(utag.handler.df, b, 1);
                }
                utag.rpt['r_0'] = "t";
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
                utag.rpt.ts['s'] = new Date();
                v = utag.cfg.path;
                w = v.indexOf(".tiqcdn.");
                if (w > 0 && b["cp.utag_main__ss"] == 1 && !utag.cfg.no_session_count) utag.ut.loader({
                    src: v.substring(0, v.indexOf("/ut" + "ag/") + 6) + "tiqapp/ut" + "ag.v.js?a=" + utag.cfg.utid + (utag.cfg.nocookie ? "&nocookie=1" : "&cb=" + (new Date).getTime()),
                    id: "tiqapp"
                })
                if (utag.cfg.noview != true) utag.handler.RE('view', b, "end");
                utag.handler.INIT();
            }
        },
        DB: function(a, b) {
            if (utag.cfg.utagdb === false) {
                return;
            } else if (typeof utag.cfg.utagdb == "undefined") {
                b = document.cookie + '';
                utag.cfg.utagdb = ((b.indexOf('utagdb=true') >= 0) ? true : false);
            }
            if (utag.cfg.utagdb === true) {
                var t;
                if (utag.ut.typeOf(a) == "object") {
                    t = utag.handler.C(a)
                } else {
                    t = a
                }
                utag.db_log.push(t);
                try {
                    if (!utag.cfg.noconsole) console.log(t)
                } catch (e) {}
            }
        },
        RP: function(a, b, c) {
            if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
                b = [];
                for (c in utag.loader.GV(a)) {
                    if (c != 'src') b.push(c + '=' + escape(a[c]))
                }
                this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
            }
        },
        view: function(a, c, d) {
            return this.track({
                event: 'view',
                data: a || {},
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        link: function(a, c, d) {
            return this.track({
                event: 'link',
                data: a || {},
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        track: function(a, b, c, d, e) {
            a = a || {};
            if (typeof a == "string") {
                a = {
                    event: a,
                    data: b || {},
                    cfg: {
                        cb: c,
                        uids: d
                    }
                }
            }
            for (e in utag.loader.GV(utag.o)) {
                utag.o[e].handler.trigger(a.event || "view", a.data || a, a.cfg || {
                    cb: b,
                    uids: c
                })
            }
            a.cfg = a.cfg || {
                cb: b
            };
            if (typeof a.cfg.cb == "function") a.cfg.cb();
            return true
        },
        handler: {
            base: "",
            df: {},
            o: {},
            send: {},
            iflag: 0,
            INIT: function(a, b, c) {
                utag.DB('utag.handler.INIT');
                if (utag.initcatch) {
                    utag.initcatch = 0;
                    return
                }
                this.iflag = 1;
                a = utag.loader.q.length;
                if (a > 0) {
                    utag.DB("Loader queue");
                    for (b = 0; b < a; b++) {
                        c = utag.loader.q[b];
                        utag.handler.trigger(c.a, c.b, c.c)
                    }
                }
            },
            test: function() {
                return 1
            },
            LR: function(b) {
                utag.DB("Load Rules");
                for (var d in utag.loader.GV(utag.cond)) {
                    utag.cond[d] = false;
                }
                utag.DB(b);
                utag.loader.loadrules(b);
                utag.DB(utag.cond);
                utag.loader.initcfg();
                utag.loader.OU();
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
            },
            RE: function(a, b, c, d, e, f, g) {
                if (c != "alr" && !this.cfg_extend) {
                    return 0;
                }
                utag.DB("RE: " + c);
                if (c == "alr") utag.DB("All Tags EXTENSIONS");
                utag.DB(b);
                if (typeof this.extend != "undefined") {
                    g = 0;
                    for (d = 0; d < this.extend.length; d++) {
                        try {
                            e = 0;
                            if (typeof this.cfg_extend != "undefined") {
                                f = this.cfg_extend[d];
                                if (typeof f.count == "undefined") f.count = 0;
                                if (f[a] == 0 || (f.once == 1 && f.count > 0) || f[c] == 0) {
                                    e = 1
                                } else {
                                    if (f[c] == 1) {
                                        g = 1
                                    };
                                    f.count++
                                }
                            }
                            if (e != 1) {
                                this.extend[d](a, b);
                                utag.rpt['ex_' + d] = 0
                            }
                        } catch (er) {
                            utag.DB(er);
                            utag.rpt['ex_' + d] = 1;
                            utag.ut.error({
                                e: er.message,
                                s: utag.cfg.path + 'utag.js',
                                l: d,
                                t: 'ge'
                            });
                        }
                    }
                    utag.DB(b);
                    return g;
                }
            },
            trigger: function(a, b, c, d, e, f) {
                utag.DB('trigger:' + a + (c && c.uids ? ":" + c.uids.join(",") : ""));
                b = b || {};
                utag.DB(b);
                if (!this.iflag) {
                    utag.DB("trigger:called before tags loaded");
                    for (d in utag.loader.f) {
                        if (!(utag.loader.f[d] === 1)) utag.DB('Tag ' + d + ' did not LOAD')
                    }
                    utag.loader.q.push({
                        a: a,
                        b: utag.handler.C(b),
                        c: c
                    });
                    return;
                }
                utag.ut.merge(b, this.df, 0);
                utag.loader.RD(b, a);
                utag.cfg.noview = false;

                function sendTag(a, b, d) {
                    try {
                        if (typeof utag.sender[d] != "undefined") {
                            utag.DB("SENDING: " + d);
                            utag.sender[d].send(a, utag.handler.C(b));
                            utag.rpt['s_' + d] = 0;
                        } else if (utag.loader.cfg[d].load != 2) {
                            utag.loader.sendq[d] = utag.loader.sendq[d] || [];
                            utag.loader.sendq[d].push({
                                "event": a,
                                "data": utag.handler.C(b)
                            });
                            utag.loader.sendq.pending++;
                            utag.loader.AS({
                                id: d,
                                load: 1
                            });
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                }
                if (c && c.uids) {
                    this.RE(a, b, "alr");
                    for (f = 0; f < c.uids.length; f++) {
                        d = c.uids[f];
                        if (!utag.loader.OU(utag.loader.cfg[d].tid)) {
                            sendTag(a, b, d);
                        }
                    }
                } else if (utag.cfg.load_rules_ajax) {
                    this.RE(a, b, "blr");
                    this.LR(b);
                    this.RE(a, b, "alr");
                    for (f = 0; f < utag.loader.cfgsort.length; f++) {
                        d = utag.loader.cfgsort[f];
                        if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
                            sendTag(a, b, d);
                        }
                    }
                } else {
                    this.RE(a, b, "alr");
                    for (d in utag.loader.GV(utag.sender)) {
                        sendTag(a, b, d);
                    }
                }
                this.RE(a, b, "end");
            },
            C: function(a, b, c) {
                b = {};
                for (c in utag.loader.GV(a)) {
                    if (a[c] instanceof Array) {
                        b[c] = a[c].slice(0)
                    } else {
                        b[c] = a[c]
                    }
                }
                return b
            }
        },
        ut: {
            pad: function(a, b, c, d) {
                a = "" + ((a - 0).toString(16));
                d = '';
                if (b > a.length) {
                    for (c = 0; c < (b - a.length); c++) {
                        d += '0'
                    }
                }
                return "" + d + a
            },
            vi: function(t, a, b) {
                if (!utag.v_id) {
                    a = this.pad(t, 12);
                    b = "" + Math.random();
                    a += this.pad(b.substring(2, b.length), 16);
                    try {
                        a += this.pad((navigator.plugins.length ? navigator.plugins.length : 0), 2);
                        a += this.pad(navigator.userAgent.length, 3);
                        a += this.pad(document.URL.length, 4);
                        a += this.pad(navigator.appVersion.length, 3);
                        a += this.pad(screen.width + screen.height + parseInt((screen.colorDepth) ? screen.colorDepth : screen.pixelDepth), 5)
                    } catch (e) {
                        utag.DB(e);
                        a += "12345"
                    };
                    utag.v_id = a;
                }
                return utag.v_id
            },
            hasOwn: function(o, a) {
                return o != null && Object.prototype.hasOwnProperty.call(o, a)
            },
            isEmptyObject: function(o, a) {
                for (a in o) {
                    if (utag.ut.hasOwn(o, a)) return false
                }
                return true
            },
            isEmpty: function(o) {
                var t = utag.ut.typeOf(o);
                if (t == "number") {
                    return isNaN(o)
                } else if (t == "boolean") {
                    return false
                } else if (t == "string") {
                    return o.length === 0
                } else return utag.ut.isEmptyObject(o)
            },
            typeOf: function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            },
            flatten: function(o) {
                var a = {};

                function r(c, p) {
                    if (Object(c) !== c || c instanceof Array) {
                        a[p] = c;
                    } else {
                        if (utag.ut.isEmptyObject(c)) {} else {
                            for (var d in c) {
                                r(c[d], p ? p + "." + d : d);
                            }
                        }
                    }
                }
                r(o, "");
                return a;
            },
            merge: function(a, b, c, d) {
                if (c) {
                    for (d in utag.loader.GV(b)) {
                        a[d] = b[d]
                    }
                } else {
                    for (d in utag.loader.GV(b)) {
                        if (typeof a[d] == "undefined") a[d] = b[d]
                    }
                }
            },
            decode: function(a, b) {
                b = "";
                try {
                    b = decodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                };
                if (b == "") {
                    b = unescape(a)
                };
                return b
            },
            encode: function(a, b) {
                b = "";
                try {
                    b = encodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                };
                if (b == "") {
                    b = escape(a)
                };
                return b
            },
            error: function(a, b, c) {
                if (typeof utag_err != "undefined") {
                    utag_err.push(a)
                }
            },
            loader: function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        m.parentNode.removeChild(m);
                    }
                    b = a.createElement("iframe");
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
                    b.id = o.id
                };
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l])
                }
                b.setAttribute("src", o.src);
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
                if (typeof o.error == "function") {
                    utag.loader.EV(b, "error", o.error);
                }
                if (o.type != "img") {
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
            }
        }
    };
    utag.o['dropbox.main'] = utag;
    utag.cfg = {
        template: "ut4.46.",
        load_rules_ajax: true,
        load_rules_at_wait: false,
        lowerqp: false,
        noconsole: false,
        session_timeout: 1800000,
        readywait: 0,
        noload: 0,
        domain: utag.loader.lh(),
        datasource: "##UTDATASOURCE##".replace("##" + "UTDATASOURCE##", ""),
        path: "//tags.tiqcdn.com/utag/dropbox/main/prod/",
        utid: "dropbox/main/201909241734"
    };
    utag.cfg.v = utag.cfg.template + "201909241734";
    utag.cond = {
        102: 0,
        103: 0,
        104: 0,
        105: 0,
        107: 0,
        108: 0,
        10: 0,
        110: 0,
        112: 0,
        113: 0,
        114: 0,
        115: 0,
        116: 0,
        117: 0,
        118: 0,
        119: 0,
        11: 0,
        120: 0,
        121: 0,
        122: 0,
        123: 0,
        124: 0,
        125: 0,
        126: 0,
        127: 0,
        128: 0,
        129: 0,
        12: 0,
        130: 0,
        131: 0,
        132: 0,
        134: 0,
        135: 0,
        136: 0,
        138: 0,
        139: 0,
        13: 0,
        140: 0,
        141: 0,
        142: 0,
        143: 0,
        144: 0,
        146: 0,
        147: 0,
        148: 0,
        149: 0,
        14: 0,
        150: 0,
        151: 0,
        152: 0,
        153: 0,
        154: 0,
        155: 0,
        156: 0,
        158: 0,
        159: 0,
        15: 0,
        162: 0,
        163: 0,
        16: 0,
        17: 0,
        20: 0,
        22: 0,
        23: 0,
        24: 0,
        27: 0,
        28: 0,
        29: 0,
        30: 0,
        31: 0,
        32: 0,
        33: 0,
        34: 0,
        35: 0,
        36: 0,
        37: 0,
        38: 0,
        39: 0,
        40: 0,
        42: 0,
        43: 0,
        44: 0,
        45: 0,
        46: 0,
        47: 0,
        48: 0,
        50: 0,
        51: 0,
        52: 0,
        53: 0,
        54: 0,
        55: 0,
        56: 0,
        57: 0,
        58: 0,
        59: 0,
        5: 0,
        60: 0,
        61: 0,
        62: 0,
        63: 0,
        64: 0,
        65: 0,
        67: 0,
        68: 0,
        69: 0,
        6: 0,
        70: 0,
        71: 0,
        72: 0,
        73: 0,
        74: 0,
        75: 0,
        76: 0,
        77: 0,
        78: 0,
        79: 0,
        80: 0,
        81: 0,
        82: 0,
        83: 0,
        84: 0,
        85: 0,
        86: 0,
        87: 0,
        91: 0,
        94: 0,
        95: 0,
        96: 0,
        97: 0,
        98: 0
    };
    utag.loader.initdata = function() {
        try {
            utag.data = (typeof utag_data != 'undefined') ? utag_data : {};
            utag.udoname = 'utag_data';
        } catch (e) {
            utag.data = {};
            utag.DB('idf:' + e);
        }
    };
    utag.loader.loadrules = function(_pd, _pc) {
        var d = _pd || utag.data;
        var c = _pc || utag.cond;
        for (var l in utag.loader.GV(c)) {
            switch (l) {
                case '10':
                    try {
                        c[10] |= (d['dom.pathname'].toString().toLowerCase().indexOf('/business/buy'.toLowerCase()) > -1) || (d['dom.pathname'].toString().toLowerCase().indexOf('/business/try'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '102':
                    try {
                        c[102] |= (d['dom.pathname'].toString().toLowerCase().indexOf('/paper'.toLowerCase()) > -1) || (d['dom.pathname'].toString().toLowerCase().indexOf('/paper/signup'.toLowerCase()) > -1) || (d['dom.pathname'].toString().toLowerCase().indexOf('/paper/signin'.toLowerCase()) > -1) || (d['dom.pathname'].toString().toLowerCase().indexOf('/paper/verify'.toLowerCase()) > -1) || (d['dom.domain'].toString().toLowerCase() == 'marketing.dropbox.com'.toLowerCase() && d['dom.pathname'] == '/')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '103':
                    try {
                        c[103] |= (/^\/paper/i.test(d['dom.pathname']) && d['dom.domain'].toString().toLowerCase().indexOf('.dropbox.com'.toLowerCase()) > -1) || (d['dom.domain'].toString().toLowerCase().indexOf('.dropbox.com'.toLowerCase()) > -1 && /^\/third_party_signup/.test(d['dom.pathname'])) || (d['dom.domain'].toString().toLowerCase().indexOf('.dropbox.com'.toLowerCase()) > -1 && d['dom.pathname'].toString().toLowerCase() == '/'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '104':
                    try {
                        c[104] |= (d['dom.pathname'] == '/paper' && d['dom.domain'].toString().toLowerCase().indexOf('.dropbox.com'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '105':
                    try {
                        c[105] |= (d['dom.domain'].toString().toLowerCase().indexOf('.dropbox.com'.toLowerCase()) > -1 && d['dom.pathname'] == '/')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '107':
                    try {
                        c[107] |= (d['dom.domain'].toString().toLowerCase().indexOf('.dropbox.com'.toLowerCase()) > -1 && /^\/paper/i.test(d['dom.pathname']))
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '108':
                    try {
                        c[108] |= (d['dom.domain'].toString().indexOf('.dropbox.com') > -1 && /\/verify$/i.test(d['dom.pathname'])) || (d['dom.domain'].toString().indexOf('.dropbox.com') > -1 && /^\/third_party_signup/i.test(d['dom.pathname']))
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '11':
                    try {
                        c[11] |= (d['dom.pathname'].toString().toLowerCase().indexOf('/team/setup/trial'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '110':
                    try {
                        c[110] |= (d['dom.pathname'].toString().indexOf('/features/new') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '112':
                    try {
                        c[112] |= (d['dom.pathname'].toString().indexOf('/lp/business/send-large-file') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '113':
                    try {
                        c[113] |= (d['dom.pathname'].toString().indexOf('/lp/business/ftp') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '114':
                    try {
                        c[114] |= (d['dom.pathname'].toString().indexOf('/lp/business/send-files') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '115':
                    try {
                        c[115] |= (d['dom.pathname'].toString().indexOf('/lp/business/secure-cloud-storage') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '116':
                    try {
                        c[116] |= (d['dom.pathname'].toString().indexOf('/lp/business/email-large-files') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '117':
                    try {
                        c[117] |= (d['dom.pathname'].toString().indexOf('/lp/business/compress-files') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '118':
                    try {
                        c[118] |= (d['dom.pathname'].toString().indexOf('/lp/business/online-backup') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '119':
                    try {
                        c[119] |= (d['dom.pathname'].toString().indexOf('/lp/business/transfer-files') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '12':
                    try {
                        c[12] |= (d['dom.pathname'].toString().toLowerCase().indexOf('/team/setup/purchase'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '120':
                    try {
                        c[120] |= (d['dom.pathname'].toString().indexOf('/features/') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '121':
                    try {
                        c[121] |= (d['dom.pathname'].toString().indexOf('/paper/customers') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '122':
                    try {
                        c[122] |= (d['dom.pathname'].toString().indexOf('/vpn') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '123':
                    try {
                        c[123] |= (d['dom.pathname'].toString().indexOf('/ftp') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '124':
                    try {
                        c[124] |= (d['dom.pathname'].toString().indexOf('/enterprise') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '125':
                    try {
                        c[125] |= (d['dom.pathname'].toString().indexOf('/business/solutions') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '126':
                    try {
                        c[126] |= (d['dom.pathname'].toString().indexOf('/business/customers') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '127':
                    try {
                        c[127] |= (d['dom.pathname'].toString().indexOf('/business/trust') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '128':
                    try {
                        c[128] |= (d['dom.pathname'].toString().indexOf('/features/new') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '129':
                    try {
                        c[129] |= (d['dom.pathname'].toString().indexOf('/features/') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '13':
                    try {
                        c[13] |= (/.*/.test(d['dom.url']) && d['dom.pathname'].toString().toLowerCase().indexOf('/work'.toLowerCase()) < 0 && d['dom.pathname'].toString().toLowerCase().indexOf('/personal'.toLowerCase()) < 0 && d['dom.pathname'].toString().toLowerCase().indexOf('/sh/'.toLowerCase()) < 0 && d['dom.pathname'].toString().toLowerCase().indexOf('/sc/'.toLowerCase()) < 0 && d['dom.pathname'].toString().toLowerCase().indexOf('/scl/fi'.toLowerCase()) < 0 && d['dom.pathname'].toString().toLowerCase().indexOf('/scl/fo'.toLowerCase()) < 0 && d['dom.pathname'].toString().toLowerCase().indexOf('/s/'.toLowerCase()) < 0 && d['dom.pathname'].toString().toLowerCase().indexOf('/login'.toLowerCase()) < 0 && d['dom.pathname'].toString().toLowerCase().indexOf('/account'.toLowerCase()) < 0 && d['dom.pathname'].toString().toLowerCase().indexOf('/doc'.toLowerCase()) < 0 && d['dom.pathname'].toString().toLowerCase().indexOf('/search?q='.toLowerCase()) < 0)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '130':
                    try {
                        c[130] |= (d['dom.pathname'].toString().indexOf('/paper') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '131':
                    try {
                        c[131] |= (d['dom.pathname'].toString().toLowerCase().indexOf('/flow'.toLowerCase()) > -1 && d['dom.domain'].toString().toLowerCase().indexOf('.dropbox.com'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '132':
                    try {
                        c[132] |= (d['dom.domain'].toString().toLowerCase() == 'help-stg.dropbox.com'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '134':
                    try {
                        c[134] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/buy/plus') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '135':
                    try {
                        c[135] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/pro/try') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '136':
                    try {
                        c[136] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/buy/professional') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '138':
                    try {
                        c[138] |= (d['dom.pathname'].toString().indexOf('http://www.dropbox.com/smartsync') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '139':
                    try {
                        c[139] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/features/productivity/doc-scanner-app') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '14':
                    try {
                        c[14] |= (d['dom.pathname'].toString().toLowerCase().indexOf('/team/setup/trial'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '140':
                    try {
                        c[140] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/features/cloud-storage/remote-wipe') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '141':
                    try {
                        c[141] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/features/cloud-storage/file-recovery-and-history') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '142':
                    try {
                        c[142] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/features/cloud-storage/file-backup') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '143':
                    try {
                        c[143] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/features/sync/work-remotely-offline') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '144':
                    try {
                        c[144] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/features/sync/save-space') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '146':
                    try {
                        c[146] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/features/share/send-large-files') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '147':
                    try {
                        c[147] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/features/share/folders') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '148':
                    try {
                        c[148] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/features/share/file-permissions') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '149':
                    try {
                        c[149] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/features/share/organize-files-folders') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '15':
                    try {
                        c[15] |= (d['dom.referrer'].toString().toLowerCase().indexOf('buy/professional'.toLowerCase()) > -1 && d['dom.pathname'].toString().toLowerCase().indexOf('showcases'.toLowerCase()) > -1) || (d['dom.referrer'].toString().toLowerCase().indexOf('buy/professional'.toLowerCase()) > -1 && d['dom.pathname'].toString().toLowerCase().indexOf('smart_sync_setting'.toLowerCase()) > -1) || (d['dom.referrer'].toString().toLowerCase().indexOf('buy/professional'.toLowerCase()) > -1 && d['dom.pathname'].toString().toLowerCase().indexOf('enjoy'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '150':
                    try {
                        c[150] |= (d['dom.pathname'].toString().indexOf('/app-integrations') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '151':
                    try {
                        c[151] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/app-integrations/slack') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '152':
                    try {
                        c[152] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/app-integrations/Salesforce') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '153':
                    try {
                        c[153] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/app-integrations/docusign') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '154':
                    try {
                        c[154] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/app-integrations/autodesk') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '155':
                    try {
                        c[155] |= (d['dom.pathname'].toString().indexOf('https://www.dropbox.com/app-integrations/Microsoft') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '156':
                    try {
                        c[156] |= (d['dom.pathname'].toString().indexOf('/app-integrations/zoom') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '158':
                    try {
                        c[158] |= (d['fb_event'].toString().toLowerCase() == '/enjoy'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '159':
                    try {
                        c[159] |= (d['dom.pathname'].toString().indexOf('/desktop') > -1) || (d['dom.pathname'].toString().indexOf('/mobile') > -1) || (d['dom.pathname'].toString().indexOf('/plans') > -1) || (d['dom.pathname'].toString().indexOf('/security') > -1) || (d['dom.pathname'].toString().indexOf('/features') > -1) || (d['dom.pathname'].toString().indexOf('/plus') > -1) || (d['dom.pathname'].toString().indexOf('/pro') > -1) || (d['dom.pathname'].toString().indexOf('/enterprise') > -1) || (d['dom.pathname'].toString().indexOf('dropbox.com') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '16':
                    try {
                        c[16] |= (d['dom.referrer'].toString().toLowerCase().indexOf('pro/try'.toLowerCase()) > -1 && d['dom.pathname'].toString().toLowerCase().indexOf('showcase'.toLowerCase()) > -1) || (d['dom.referrer'].toString().toLowerCase().indexOf('pro/try'.toLowerCase()) > -1 && d['dom.pathname'].toString().toLowerCase().indexOf('smart_sync_setting'.toLowerCase()) > -1) || (d['dom.referrer'].toString().toLowerCase().indexOf('pro/try'.toLowerCase()) > -1 && d['dom.pathname'].toString().toLowerCase().indexOf('enjoy'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '162':
                    try {
                        c[162] |= (d['dom.pathname'].toString().toLowerCase().indexOf('/features/extensions'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '163':
                    try {
                        c[163] |= (d['dom.pathname'].toString().toLowerCase().indexOf('/app-integrations/slack'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '17':
                    try {
                        c[17] |= (d['dom.pathname'].toString().toLowerCase().indexOf('/team/setup/team_info'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '20':
                    try {
                        c[20] |= (d['in_gtm_Google_Analytics'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '22':
                    try {
                        c[22] |= (d['in_gtm_LinkedIn_Insight_Tag'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '23':
                    try {
                        c[23] |= (d['in_gtm_DBX_Pro_Conversion'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '24':
                    try {
                        c[24] |= (d['in_gtm_Conversion_Linker_Tag'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '27':
                    try {
                        c[27] |= (d['in_gtm_MCC_DfB_Visited_Try_or_Buy'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '28':
                    try {
                        c[28] |= (d['in_gtm_MCC_DfB_Trial'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '29':
                    try {
                        c[29] |= (d['in_gtm_MCC_DfB_Purchase'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '30':
                    try {
                        c[30] |= (d['in_gtm_PK4_Display_Professional_Product_Purchase'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '31':
                    try {
                        c[31] |= (d['in_gtm_PK4_Display_Professional_Trial_Sign_Up'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '32':
                    try {
                        c[32] |= (d['in_gtm_PK4_Team'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '33':
                    try {
                        c[33] |= (d['in_gtm_Acquisition_All_Pages'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '34':
                    try {
                        c[34] |= (d['in_gtm_Elite_Social_DfB_Trial_Starts'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '35':
                    try {
                        c[35] |= (d['in_gtm_gtm_debug'] != 'true')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '36':
                    try {
                        c[36] |= (d['dom.url'].toString().toLowerCase() == 'https://go.dropbox.com/en-us/forrester-digital-transformation-webinar'.toLowerCase()) || (d['dom.url'].toString().toLowerCase() == 'https://go.dropbox.com/en-us/smart-sync-webinar'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '37':
                    try {
                        c[37] |= (d['dom.url'].toString().toLowerCase() == 'https://go.dropbox.com/en-us/forrester-digital-transformation-webinar-ondemand'.toLowerCase() && d['dom.referrer'].toString().toLowerCase() == 'https://go.dropbox.com/en-us/forrester-digital-transformation-webinar'.toLowerCase()) || (d['dom.url'].toString().toLowerCase() == 'https://go.dropbox.com/en-us/smart-sync-webinar-ondemand'.toLowerCase() && d['dom.referrer'].toString().toLowerCase() == 'https://go.dropbox.com/en-us/smart-sync-webinar'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '38':
                    try {
                        c[38] |= (d['dom.url'].toString().toLowerCase() == 'https://go.dropbox.com/en-us/aec-collaboration-ebook?_tk=blog&_camp=flow2-construction&_ad=tellepsenfooter'.toLowerCase() && d['dom.referrer'].toString().toLowerCase() == 'https://blogs.dropbox.com/business/2018/05/tellepsen-customer-story/'.toLowerCase()) || (d['dom.url'].toString().toLowerCase() == 'https://go.dropbox.com/en-us/flow-together-ebook?_tk=blog&_camp=flow2-core&_ad=10tipsftr'.toLowerCase() && d['dom.referrer'].toString().toLowerCase() == 'https://blogs.dropbox.com/business/2018/06/collaboration-designers-engineers/'.toLowerCase()) || (d['dom.url'].toString().toLowerCase() == 'https://go.dropbox.com/en-us/gartner-art-of-culture-hacking'.toLowerCase() && d['dom.referrer'].toString().toLowerCase() == 'https://blogs.dropbox.com/business/2018/05/culture-hacks/'.toLowerCase()) || (d['dom.url'].toString().toLowerCase() == 'https://go.dropbox.com/en-us/flow-together-ebook?_tk=blog&_camp=flow2-core&_ad=techteams'.toLowerCase() && d['dom.referrer'].toString().toLowerCase() == 'https://blogs.dropbox.com/business/2018/08/collaborative-tech-teams/'.toLowerCase()) || (d['dom.url'].toString().toLowerCase() == 'https://go.dropbox.com/en-us/aec-collaboration-ebook?_tk=blog&_camp=flow2-construction&_ad=tellepsen'.toLowerCase() && d['dom.referrer'].toString().toLowerCase() == 'https://blogs.dropbox.com/business/2018/05/tellepsen-customer-story/'.toLowerCase()) || (d['dom.url'].toString().toLowerCase() == 'https://go.dropbox.com/en-us/flow-together-ebook?_tk=blog&_camp=flow2-core&_ad=10tips'.toLowerCase() && d['dom.referrer'].toString().toLowerCase() == 'https://blogs.dropbox.com/business/2018/06/collaboration-designers-engineers/'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '39':
                    try {
                        c[39] |= (d['dom.pathname'].toString().indexOf('/team/setup/team_info') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '40':
                    try {
                        c[40] |= (d['dom.pathname'].toString().toLowerCase().indexOf('/flow'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '42':
                    try {
                        c[42] |= (d['dom.pathname'].toString().indexOf('/team/setup/pending_verification') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '43':
                    try {
                        c[43] |= (d['dom.pathname'].toString().indexOf('/business/try') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '44':
                    try {
                        c[44] |= (d['dom.pathname'].toString().indexOf('/team/setup/trial') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '45':
                    try {
                        c[45] |= (d['dom.pathname'].toString().indexOf('/business/buy') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '46':
                    try {
                        c[46] |= (d['dom.pathname'].toString().indexOf('/business/contact') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '47':
                    try {
                        c[47] |= (d['dom.pathname'].toString().indexOf('/business') > -1 && d['qp.from_contact'] == '1')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '48':
                    try {
                        c[48] |= (d['dom.pathname'].toString().indexOf('/business') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '5':
                    try {
                        c[5] |= (d['dom.pathname'].toString().toLowerCase().indexOf('pro/try'.toLowerCase()) > -1 && d['dom.url'].toString().toLowerCase().indexOf('showcases'.toLowerCase()) > -1) || (d['dom.pathname'].toString().toLowerCase().indexOf('buy/professional'.toLowerCase()) > -1 && d['dom.url'].toString().toLowerCase().indexOf('showcases'.toLowerCase()) > -1) || (d['dom.pathname'].toString().toLowerCase().indexOf('pro/try'.toLowerCase()) > -1 && d['dom.url'].toString().toLowerCase().indexOf('smart_sync_setting'.toLowerCase()) > -1) || (d['dom.pathname'].toString().toLowerCase().indexOf('pro/try'.toLowerCase()) > -1 && d['dom.url'].toString().toLowerCase().indexOf('enjoy'.toLowerCase()) > -1) || (d['dom.pathname'].toString().toLowerCase().indexOf('buy/professional'.toLowerCase()) > -1 && d['dom.url'].toString().toLowerCase().indexOf('smart_sync_setting'.toLowerCase()) > -1) || (d['dom.pathname'].toString().toLowerCase().indexOf('buy/professional'.toLowerCase()) > -1 && d['dom.url'].toString().toLowerCase().indexOf('enjoy'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '50':
                    try {
                        c[50] |= (d['dom.pathname'].toString().toLowerCase() == '/business'.toLowerCase() && d['qp.landing'].toString().toLowerCase() == 'flow'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '51':
                    try {
                        c[51] |= (d['dom.pathname'].toString().indexOf('/flow') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '52':
                    try {
                        c[52] |= (d['dom.pathname'].toString().indexOf('/enterprise/contact') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '53':
                    try {
                        c[53] |= (d['dom.pathname'].toString().toLowerCase() == '/enterprise'.toLowerCase() && d['dom.query_string'].toString().toLowerCase() == 'from_contact=1'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '54':
                    try {
                        c[54] |= (d['dom.pathname'] == 'www.dropbox.com/?landing=dbv2')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '55':
                    try {
                        c[55] |= (d['dom.pathname'].toString().indexOf('/individual') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '56':
                    try {
                        c[56] |= (d['dom.pathname'].toString().indexOf('/upgrade') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '57':
                    try {
                        c[57] |= (d['dom.pathname'].toString().indexOf('/paper') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '58':
                    try {
                        c[58] |= (d['dom.pathname'].toString().indexOf('/team/setup/pending_verification') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '59':
                    try {
                        c[59] |= (d['dom.pathname'].toString().indexOf('/business/plans-comparison') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '6':
                    try {
                        c[6] |= (d['dom.pathname'].toString().toLowerCase().indexOf('/try'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '60':
                    try {
                        c[60] |= (d['dom.pathname'].toString().indexOf('/business/pricing') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '61':
                    try {
                        c[61] |= (d['dom.pathname'].toString().indexOf('/team/setup/purchase') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '62':
                    try {
                        c[62] |= (d['dom.pathname'].toString().indexOf('/business/solutions') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '63':
                    try {
                        c[63] |= (d['dom.pathname'].toString().indexOf('/business/tour') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '64':
                    try {
                        c[64] |= (d['dom.pathname'].toString().indexOf('/business/try') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '65':
                    try {
                        c[65] |= (d['dom.pathname'].toString().indexOf('/business/try') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '67':
                    try {
                        c[67] |= (d['dom.pathname'].toString().indexOf('/team/setup/trial') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '68':
                    try {
                        c[68] |= (d['dom.pathname'].toString().indexOf('/business/buy') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '69':
                    try {
                        c[69] |= (d['dom.pathname'].toString().indexOf('/business/contact') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '70':
                    try {
                        c[70] |= (d['dom.pathname'].toString().indexOf('/business') > -1 && d['qp.from_contact'] == '1')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '71':
                    try {
                        c[71] |= (d['dom.pathname'].toString().indexOf('/business') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '72':
                    try {
                        c[72] |= (d['dom.pathname'].toString().toLowerCase() == '/business'.toLowerCase() && d['dom.query_string'].toString().toLowerCase() == 'landing=flow'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '73':
                    try {
                        c[73] |= (d['dom.pathname'].toString().indexOf('/flow') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '74':
                    try {
                        c[74] |= (d['dom.pathname'].toString().indexOf('/enterprise/contact') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '75':
                    try {
                        c[75] |= (d['dom.pathname'].toString().toLowerCase() == '/enterprise'.toLowerCase() && d['dom.query_string'].toString().toLowerCase() == 'from_contact=1'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '76':
                    try {
                        c[76] |= (d['dom.pathname'] == 'www.dropbox.com/?landing=dbv2')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '77':
                    try {
                        c[77] |= (d['dom.pathname'].toString().indexOf('/individual') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '78':
                    try {
                        c[78] |= (d['dom.pathname'].toString().indexOf('/upgrade') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '79':
                    try {
                        c[79] |= (d['dom.pathname'].toString().indexOf('/paper') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '80':
                    try {
                        c[80] |= (d['dom.pathname'].toString().indexOf('/business/plans-comparison') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '81':
                    try {
                        c[81] |= (d['dom.pathname'].toString().indexOf('/business/pricing') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '82':
                    try {
                        c[82] |= (d['dom.pathname'].toString().indexOf('/setup/purchase') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '83':
                    try {
                        c[83] |= (d['dom.pathname'].toString().indexOf('/solutions') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '84':
                    try {
                        c[84] |= (d['dom.pathname'].toString().indexOf('/business/tour') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '85':
                    try {
                        c[85] |= (d['dom.pathname'].toString().indexOf('/business/try') > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '86':
                    try {
                        c[86] |= (d['dom.pathname'].toString().toLowerCase().indexOf('/flow'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '87':
                    try {
                        c[87] |= (d['dom.pathname'].toString().toLowerCase() == '/business'.toLowerCase() && d['dom.query_string'].toString().toLowerCase() == 'landing=flow'.toLowerCase() && d['dom.hash'].toString().toLowerCase() == 'pricing'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '91':
                    try {
                        c[91] |= (d['dom.url'] == 'https://www.dropbox.com/team/setup/team_info')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '94':
                    try {
                        c[94] |= (d['dom.domain'].toString().toLowerCase() != 'help.dropbox.com'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '95':
                    try {
                        c[95] |= (d['dom.domain'].toString().toLowerCase() == 'help.dropbox.com'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '96':
                    try {
                        c[96] |= (d['dom.url'].toString().toLowerCase().indexOf('https://go.dropbox.com/en-gb/dropbox-ucisa19'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('https://go.dropbox.com/en-us/top-ten-digital-innovation-tips'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '97':
                    try {
                        c[97] |= (d['dom.pathname'] == '/business')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '98':
                    try {
                        c[98] |= (d['dom.url'].toString().toLowerCase().indexOf('help-stg.dropbox.com'.toLowerCase()) > -1) || (d['dom.url'].toString().toLowerCase().indexOf('help.dropbox.com'.toLowerCase()) > -1)
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
            }
        }
    };
    utag.pre = function() {
        utag.loader.initdata();
        try {
            utag.loader.RD(utag.data)
        } catch (e) {
            utag.DB(e)
        };
        utag.loader.loadrules();
    };
    utag.loader.GET = function() {
        utag.cl = {
            '_all_': 1
        };
        utag.pre();
        utag.handler.extend = [function(a, b) {
            try {
                if (1) {
                    var check_gtm = function(gtmtag) {
                        if (typeof window.gtm_tlm !== 'undefined' && window.gtm_tlm[gtmtag] === true) {
                            b['in_gtm_' + gtmtag] = "true";
                        } else {
                            b['in_gtm_' + gtmtag] = "false";
                        }
                    };
                    var lu = ['Google_Analytics', 'Marketo', 'LinkedIn_Insight_Tag', 'Sizmek_VersaTag', 'Bing_Ads_Universal_Event_Tracking', 'DBX_Pro_Conversion', 'Conversion_Linker_Tag', 'MCC_DfB_Visited_Try_or_Buy', 'MCC_DfB_Trial', 'MCC_DfB_Purchase', 'PK4_Display_Professional_Trial_Sign_Up', 'PK4_Display_Professional_Product_Purchase', 'PK4_Team', 'Acquisition_All_Pages', 'Elite_Social_DfB_Trial_Starts', 'gtm_debug'];
                    for (let x = 0; x < lu.length; x++) {
                        check_gtm(lu[x]);
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b, c, d) {
            b._ccity = (typeof b[''] != 'undefined') ? b[''] : '';
            b._ccountry = (typeof b[''] != 'undefined') ? b[''] : '';
            b._ccurrency = (typeof b[''] != 'undefined') ? b[''] : '';
            b._ccustid = (typeof b[''] != 'undefined') ? b[''] : '';
            b._corder = (typeof b['transaction_id'] != 'undefined') ? b['transaction_id'] : '';
            b._cpromo = (typeof b[''] != 'undefined') ? b[''] : '';
            b._cship = (typeof b[''] != 'undefined') ? b[''] : '';
            b._cstate = (typeof b[''] != 'undefined') ? b[''] : '';
            b._cstore = (typeof b[''] != 'undefined') ? b[''] : 'web';
            b._csubtotal = (typeof b[''] != 'undefined') ? b[''] : '';
            b._ctax = (typeof b[''] != 'undefined') ? b[''] : '';
            b._ctotal = (typeof b[''] != 'undefined') ? b[''] : '';
            b._ctype = (typeof b[''] != 'undefined') ? b[''] : '';
            b._czip = (typeof b[''] != 'undefined') ? b[''] : '';
            b._cprod = (typeof b[''] != 'undefined' && b[''].length > 0) ? b[''] : [];
            b._cprodname = (typeof b[''] != 'undefined' && b[''].length > 0) ? b[''] : [];
            b._cbrand = (typeof b[''] != 'undefined' && b[''].length > 0) ? b[''] : [];
            b._ccat = (typeof b[''] != 'undefined' && b[''].length > 0) ? b[''] : [];
            b._ccat2 = (typeof b[''] != 'undefined' && b[''].length > 0) ? b[''] : [];
            b._cquan = (typeof b['licenses'] != 'undefined' && b['licenses'].length > 0) ? b['licenses'] : [];
            b._cprice = (typeof b['purchase_price'] != 'undefined' && b['purchase_price'].length > 0) ? b['purchase_price'] : [];
            b._csku = (typeof b[''] != 'undefined' && b[''].length > 0) ? b[''] : [];
            b._cpdisc = (typeof b[''] != 'undefined' && b[''].length > 0) ? b[''] : [];
            if (b._cprod.length == 0) {
                b._cprod = b._csku.slice()
            };
            if (b._cprodname.length == 0) {
                b._cprodname = b._csku.slice()
            };

            function tf(a) {
                if (a == '' || isNaN(parseFloat(a))) {
                    return a
                } else {
                    return (parseFloat(a)).toFixed(2)
                }
            };
            b._ctotal = tf(b._ctotal);
            b._csubtotal = tf(b._csubtotal);
            b._ctax = tf(b._ctax);
            b._cship = tf(b._cship);
            for (c = 0; c < b._cprice.length; c++) {
                b._cprice[c] = tf(b._cprice[c])
            };
            for (c = 0; c < b._cpdisc.length; c++) {
                b._cpdisc[c] = tf(b._cpdisc[c])
            };
        }, function(a, b) {
            try {
                if (typeof b['business_marketing_uid'] != 'undefined' && b['business_marketing_uid'] != '') {
                    b['marketing_uid'] = b['business_marketing_uid']
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (typeof b['business_marketing_uid'] != 'undefined' && b['business_marketing_uid'] == '') {
                    b['marketing_uid'] = b['personal_marketing_uid']
                }
            } catch (e) {
                utag.DB(e)
            }
        }];
        utag.handler.cfg_extend = [{
            "alr": 0,
            "bwq": 0,
            "end": 0,
            "id": "9",
            "blr": 1
        }, {
            "bwq": 0,
            "end": 0,
            "alr": 1,
            "blr": 0,
            "id": "11"
        }, {
            "blr": 0,
            "id": "92",
            "end": 0,
            "bwq": 0,
            "alr": 1
        }, {
            "id": "93",
            "blr": 0,
            "alr": 1,
            "bwq": 0,
            "end": 0
        }];
        utag.loader.initcfg = function() {
            utag.loader.cfg = {
                "30": {
                    load: (utag.cond[20] && utag.cond[94]),
                    tcat: 0,
                    send: 1,
                    v: 201905232037,
                    wait: 1,
                    tid: 7133
                },
                "18": {
                    load: utag.cond[22],
                    tcat: 0,
                    send: 1,
                    v: 201812182103,
                    wait: 1,
                    tid: 12047
                },
                "23": {
                    load: 1,
                    tcat: 0,
                    send: 1,
                    v: 201907172040,
                    wait: 1,
                    tid: 22017
                },
                "31": {
                    load: (utag.cond[5] && utag.cond[23]),
                    tcat: 0,
                    send: 1,
                    v: 201812182103,
                    wait: 1,
                    tid: 7132
                },
                "32": {
                    load: (utag.cond[6] && utag.cond[24]),
                    tcat: 0,
                    send: 1,
                    v: 201812182103,
                    wait: 1,
                    tid: 7132
                },
                "36": {
                    load: (utag.cond[27] && utag.cond[10]),
                    tcat: 0,
                    send: 1,
                    v: 201812182103,
                    wait: 1,
                    tid: 7132
                },
                "37": {
                    load: (utag.cond[28] && utag.cond[11]),
                    tcat: 0,
                    send: 1,
                    v: 201812182103,
                    wait: 1,
                    tid: 7132
                },
                "38": {
                    load: (utag.cond[29] && utag.cond[12]),
                    tcat: 0,
                    send: 1,
                    v: 201812182103,
                    wait: 1,
                    tid: 7132
                },
                "39": {
                    load: (utag.cond[31] && utag.cond[16]),
                    tcat: 0,
                    send: 1,
                    v: 201812062323,
                    wait: 1,
                    tid: 20067
                },
                "40": {
                    load: (utag.cond[30] && utag.cond[15]),
                    tcat: 0,
                    send: 1,
                    v: 201812062323,
                    wait: 1,
                    tid: 20067
                },
                "41": {
                    load: (utag.cond[32] && utag.cond[17]),
                    tcat: 0,
                    send: 1,
                    v: 201812182103,
                    wait: 1,
                    tid: 20067
                },
                "42": {
                    load: (utag.cond[13] && utag.cond[33]),
                    tcat: 0,
                    send: 1,
                    v: 201901302204,
                    wait: 1,
                    tid: 6026
                },
                "43": {
                    load: (utag.cond[14] && utag.cond[34]),
                    tcat: 0,
                    send: 1,
                    v: 201901302205,
                    wait: 1,
                    tid: 6026
                },
                "45": {
                    load: utag.cond[35],
                    tcat: 0,
                    send: 1,
                    v: 201905171811,
                    wait: 1,
                    tid: 20010
                },
                "48": {
                    load: 1,
                    tcat: 0,
                    send: 1,
                    v: 201906102015,
                    wait: 1,
                    tid: 6026
                },
                "60": {
                    load: utag.cond[36],
                    tcat: 0,
                    send: 1,
                    v: 201811192125,
                    wait: 1,
                    tid: 20067
                },
                "61": {
                    load: utag.cond[37],
                    tcat: 0,
                    send: 1,
                    v: 201811192125,
                    wait: 1,
                    tid: 20067
                },
                "62": {
                    load: utag.cond[38],
                    tcat: 0,
                    send: 1,
                    v: 201811210622,
                    wait: 1,
                    tid: 20067
                },
                "64": {
                    load: utag.cond[40],
                    tcat: 0,
                    send: 1,
                    v: 201901092017,
                    wait: 1,
                    tid: 6026
                },
                "65": {
                    load: utag.cond[86],
                    tcat: 0,
                    send: 1,
                    v: 201901092017,
                    wait: 1,
                    tid: 6026
                },
                "66": {
                    load: utag.cond[42],
                    tcat: 0,
                    send: 1,
                    v: 201901091945,
                    wait: 1,
                    tid: 20052
                },
                "67": {
                    load: utag.cond[43],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "69": {
                    load: utag.cond[44],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "70": {
                    load: utag.cond[45],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "71": {
                    load: utag.cond[46],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "72": {
                    load: utag.cond[47],
                    tcat: 0,
                    send: 1,
                    v: 201901112119,
                    wait: 1,
                    tid: 20052
                },
                "73": {
                    load: utag.cond[48],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "75": {
                    load: utag.cond[50],
                    tcat: 0,
                    send: 1,
                    v: 201901112119,
                    wait: 1,
                    tid: 20052
                },
                "76": {
                    load: utag.cond[51],
                    tcat: 0,
                    send: 1,
                    v: 201901090139,
                    wait: 1,
                    tid: 20052
                },
                "77": {
                    load: utag.cond[52],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "78": {
                    load: utag.cond[53],
                    tcat: 0,
                    send: 1,
                    v: 201901101641,
                    wait: 1,
                    tid: 20052
                },
                "79": {
                    load: utag.cond[54],
                    tcat: 0,
                    send: 1,
                    v: 201901101622,
                    wait: 1,
                    tid: 20052
                },
                "80": {
                    load: utag.cond[55],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "81": {
                    load: utag.cond[56],
                    tcat: 0,
                    send: 1,
                    v: 201901101647,
                    wait: 1,
                    tid: 20052
                },
                "82": {
                    load: utag.cond[57],
                    tcat: 0,
                    send: 1,
                    v: 201901091957,
                    wait: 1,
                    tid: 20052
                },
                "83": {
                    load: utag.cond[58],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "84": {
                    load: utag.cond[59],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "85": {
                    load: utag.cond[60],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "86": {
                    load: utag.cond[61],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "87": {
                    load: utag.cond[62],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "88": {
                    load: utag.cond[63],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "89": {
                    load: utag.cond[64],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "90": {
                    load: utag.cond[65],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "92": {
                    load: utag.cond[67],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "93": {
                    load: utag.cond[68],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "94": {
                    load: utag.cond[69],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "96": {
                    load: utag.cond[70],
                    tcat: 0,
                    send: 1,
                    v: 201901112119,
                    wait: 1,
                    tid: 20052
                },
                "97": {
                    load: utag.cond[71],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "98": {
                    load: utag.cond[72],
                    tcat: 0,
                    send: 1,
                    v: 201901101635,
                    wait: 1,
                    tid: 20052
                },
                "99": {
                    load: utag.cond[73],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "100": {
                    load: utag.cond[74],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "101": {
                    load: utag.cond[75],
                    tcat: 0,
                    send: 1,
                    v: 201901101641,
                    wait: 1,
                    tid: 20052
                },
                "102": {
                    load: utag.cond[76],
                    tcat: 0,
                    send: 1,
                    v: 201901101622,
                    wait: 1,
                    tid: 20052
                },
                "103": {
                    load: utag.cond[77],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "104": {
                    load: utag.cond[78],
                    tcat: 0,
                    send: 1,
                    v: 201901101647,
                    wait: 1,
                    tid: 20052
                },
                "105": {
                    load: utag.cond[79],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "106": {
                    load: utag.cond[80],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "107": {
                    load: utag.cond[81],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "108": {
                    load: utag.cond[82],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "109": {
                    load: utag.cond[83],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "110": {
                    load: utag.cond[84],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "111": {
                    load: utag.cond[85],
                    tcat: 0,
                    send: 1,
                    v: 201901091953,
                    wait: 1,
                    tid: 20052
                },
                "116": {
                    load: 1,
                    tcat: 0,
                    send: 1,
                    v: 201901092041,
                    wait: 1,
                    tid: 20103
                },
                "117": {
                    load: utag.cond[87],
                    tcat: 0,
                    send: 1,
                    v: 201901142318,
                    wait: 1,
                    tid: 20052
                },
                "118": {
                    load: utag.cond[87],
                    tcat: 0,
                    send: 1,
                    v: 201901142321,
                    wait: 1,
                    tid: 20052
                },
                "122": {
                    load: utag.cond[40],
                    tcat: 0,
                    send: 1,
                    v: 201902230016,
                    wait: 1,
                    tid: 20010
                },
                "123": {
                    load: 1,
                    tcat: 0,
                    send: 1,
                    v: 201901242214,
                    wait: 1,
                    tid: 20010
                },
                "149": {
                    load: utag.cond[91],
                    tcat: 0,
                    send: 1,
                    v: 201903150454,
                    wait: 1,
                    tid: 17001
                },
                "153": {
                    load: utag.cond[95],
                    tcat: 0,
                    send: 1,
                    v: 201903121529,
                    wait: 1,
                    tid: 7133
                },
                "154": {
                    load: utag.cond[96],
                    tcat: 0,
                    send: 1,
                    v: 201903150454,
                    wait: 1,
                    tid: 20103
                },
                "155": {
                    load: utag.cond[96],
                    tcat: 0,
                    send: 1,
                    v: 201903150454,
                    wait: 1,
                    tid: 12047
                },
                "158": {
                    load: utag.cond[39],
                    tcat: 0,
                    send: 1,
                    v: 201903262241,
                    wait: 1,
                    tid: 17001
                },
                "159": {
                    load: utag.cond[97],
                    tcat: 0,
                    send: 1,
                    v: 201903282005,
                    wait: 1,
                    tid: 17001
                },
                "160": {
                    load: 1,
                    tcat: 0,
                    send: 1,
                    v: 201903282005,
                    wait: 1,
                    tid: 20010
                },
                "162": {
                    load: utag.cond[98],
                    tcat: 0,
                    send: 1,
                    v: 201906261727,
                    wait: 1,
                    tid: 17003
                },
                "175": {
                    load: utag.cond[102],
                    tcat: 0,
                    send: 1,
                    v: 201904260054,
                    wait: 1,
                    tid: 7129
                },
                "178": {
                    load: utag.cond[104],
                    tcat: 0,
                    send: 1,
                    v: 201904260054,
                    wait: 1,
                    tid: 7132
                },
                "179": {
                    load: utag.cond[105],
                    tcat: 0,
                    send: 1,
                    v: 201904260054,
                    wait: 1,
                    tid: 7132
                },
                "182": {
                    load: utag.cond[107],
                    tcat: 0,
                    send: 1,
                    v: 201904260054,
                    wait: 1,
                    tid: 7132
                },
                "180": {
                    load: utag.cond[108],
                    tcat: 0,
                    send: 1,
                    v: 201904291956,
                    wait: 1,
                    tid: 7132
                },
                "169": {
                    load: utag.cond[103],
                    tcat: 0,
                    send: 1,
                    v: 201905232037,
                    wait: 1,
                    tid: 6026
                },
                "185": {
                    load: utag.cond[39],
                    tcat: 0,
                    send: 1,
                    v: 201905302131,
                    wait: 1,
                    tid: 6026
                },
                "189": {
                    load: utag.cond[39],
                    tcat: 0,
                    send: 1,
                    v: 201906102018,
                    wait: 1,
                    tid: 20067
                },
                "197": {
                    load: utag.cond[97],
                    tcat: 0,
                    send: 1,
                    v: 201906102015,
                    wait: 1,
                    tid: 20067
                },
                "198": {
                    load: utag.cond[39],
                    tcat: 0,
                    send: 1,
                    v: 201906102015,
                    wait: 1,
                    tid: 20067
                },
                "199": {
                    load: utag.cond[110],
                    tcat: 0,
                    send: 1,
                    v: 201906271646,
                    wait: 1,
                    tid: 6026
                },
                "200": {
                    load: utag.cond[112],
                    tcat: 0,
                    send: 1,
                    v: 201906271646,
                    wait: 1,
                    tid: 6026
                },
                "201": {
                    load: utag.cond[113],
                    tcat: 0,
                    send: 1,
                    v: 201906271648,
                    wait: 1,
                    tid: 6026
                },
                "202": {
                    load: utag.cond[114],
                    tcat: 0,
                    send: 1,
                    v: 201906271650,
                    wait: 1,
                    tid: 6026
                },
                "203": {
                    load: utag.cond[115],
                    tcat: 0,
                    send: 1,
                    v: 201906271652,
                    wait: 1,
                    tid: 6026
                },
                "204": {
                    load: utag.cond[116],
                    tcat: 0,
                    send: 1,
                    v: 201906271653,
                    wait: 1,
                    tid: 6026
                },
                "205": {
                    load: utag.cond[117],
                    tcat: 0,
                    send: 1,
                    v: 201906271656,
                    wait: 1,
                    tid: 6026
                },
                "206": {
                    load: utag.cond[118],
                    tcat: 0,
                    send: 1,
                    v: 201906271658,
                    wait: 1,
                    tid: 6026
                },
                "207": {
                    load: utag.cond[119],
                    tcat: 0,
                    send: 1,
                    v: 201906271659,
                    wait: 1,
                    tid: 6026
                },
                "208": {
                    load: utag.cond[120],
                    tcat: 0,
                    send: 1,
                    v: 201906271701,
                    wait: 1,
                    tid: 6026
                },
                "209": {
                    load: utag.cond[121],
                    tcat: 0,
                    send: 1,
                    v: 201906271702,
                    wait: 1,
                    tid: 6026
                },
                "210": {
                    load: utag.cond[122],
                    tcat: 0,
                    send: 1,
                    v: 201906271704,
                    wait: 1,
                    tid: 6026
                },
                "211": {
                    load: utag.cond[123],
                    tcat: 0,
                    send: 1,
                    v: 201906271705,
                    wait: 1,
                    tid: 6026
                },
                "212": {
                    load: utag.cond[124],
                    tcat: 0,
                    send: 1,
                    v: 201906271707,
                    wait: 1,
                    tid: 6026
                },
                "213": {
                    load: utag.cond[125],
                    tcat: 0,
                    send: 1,
                    v: 201906271708,
                    wait: 1,
                    tid: 6026
                },
                "214": {
                    load: utag.cond[126],
                    tcat: 0,
                    send: 1,
                    v: 201906271710,
                    wait: 1,
                    tid: 6026
                },
                "215": {
                    load: utag.cond[127],
                    tcat: 0,
                    send: 1,
                    v: 201906271711,
                    wait: 1,
                    tid: 6026
                },
                "216": {
                    load: utag.cond[128],
                    tcat: 0,
                    send: 1,
                    v: 201909040426,
                    wait: 1,
                    tid: 6026
                },
                "261": {
                    load: utag.cond[162],
                    tcat: 0,
                    send: 1,
                    v: 201909040426,
                    wait: 1,
                    tid: 6026
                },
                "217": {
                    load: utag.cond[129],
                    tcat: 0,
                    send: 1,
                    v: 201909040426,
                    wait: 1,
                    tid: 6026
                },
                "218": {
                    load: utag.cond[121],
                    tcat: 0,
                    send: 1,
                    v: 201909040426,
                    wait: 1,
                    tid: 6026
                },
                "219": {
                    load: utag.cond[130],
                    tcat: 0,
                    send: 1,
                    v: 201909040426,
                    wait: 1,
                    tid: 6026
                },
                "220": {
                    load: utag.cond[131],
                    tcat: 0,
                    send: 1,
                    v: 201909040426,
                    wait: 1,
                    tid: 6026
                },
                "222": {
                    load: utag.cond[134],
                    tcat: 0,
                    send: 1,
                    v: 201907301437,
                    wait: 1,
                    tid: 6026
                },
                "223": {
                    load: utag.cond[135],
                    tcat: 0,
                    send: 1,
                    v: 201907301439,
                    wait: 1,
                    tid: 6026
                },
                "224": {
                    load: utag.cond[136],
                    tcat: 0,
                    send: 1,
                    v: 201907301441,
                    wait: 1,
                    tid: 6026
                },
                "225": {
                    load: utag.cond[158],
                    tcat: 0,
                    send: 1,
                    v: 201909040426,
                    wait: 1,
                    tid: 6026
                },
                "226": {
                    load: utag.cond[138],
                    tcat: 0,
                    send: 1,
                    v: 201907301447,
                    wait: 1,
                    tid: 6026
                },
                "227": {
                    load: utag.cond[139],
                    tcat: 0,
                    send: 1,
                    v: 201907301449,
                    wait: 1,
                    tid: 6026
                },
                "228": {
                    load: utag.cond[140],
                    tcat: 0,
                    send: 1,
                    v: 201907301452,
                    wait: 1,
                    tid: 6026
                },
                "229": {
                    load: utag.cond[141],
                    tcat: 0,
                    send: 1,
                    v: 201907301453,
                    wait: 1,
                    tid: 6026
                },
                "230": {
                    load: utag.cond[142],
                    tcat: 0,
                    send: 1,
                    v: 201907301455,
                    wait: 1,
                    tid: 6026
                },
                "231": {
                    load: utag.cond[143],
                    tcat: 0,
                    send: 1,
                    v: 201907301457,
                    wait: 1,
                    tid: 6026
                },
                "232": {
                    load: utag.cond[144],
                    tcat: 0,
                    send: 1,
                    v: 201907301459,
                    wait: 1,
                    tid: 6026
                },
                "234": {
                    load: utag.cond[146],
                    tcat: 0,
                    send: 1,
                    v: 201907301503,
                    wait: 1,
                    tid: 6026
                },
                "235": {
                    load: utag.cond[147],
                    tcat: 0,
                    send: 1,
                    v: 201907301507,
                    wait: 1,
                    tid: 6026
                },
                "236": {
                    load: utag.cond[148],
                    tcat: 0,
                    send: 1,
                    v: 201907301510,
                    wait: 1,
                    tid: 6026
                },
                "237": {
                    load: utag.cond[149],
                    tcat: 0,
                    send: 1,
                    v: 201907301512,
                    wait: 1,
                    tid: 6026
                },
                "238": {
                    load: utag.cond[150],
                    tcat: 0,
                    send: 1,
                    v: 201909092100,
                    wait: 1,
                    tid: 6026
                },
                "239": {
                    load: utag.cond[151],
                    tcat: 0,
                    send: 1,
                    v: 201907301516,
                    wait: 1,
                    tid: 6026
                },
                "240": {
                    load: utag.cond[152],
                    tcat: 0,
                    send: 1,
                    v: 201907301517,
                    wait: 1,
                    tid: 6026
                },
                "241": {
                    load: utag.cond[153],
                    tcat: 0,
                    send: 1,
                    v: 201907301519,
                    wait: 1,
                    tid: 6026
                },
                "242": {
                    load: utag.cond[154],
                    tcat: 0,
                    send: 1,
                    v: 201907301521,
                    wait: 1,
                    tid: 6026
                },
                "243": {
                    load: utag.cond[155],
                    tcat: 0,
                    send: 1,
                    v: 201907301524,
                    wait: 1,
                    tid: 6026
                },
                "244": {
                    load: utag.cond[156],
                    tcat: 0,
                    send: 1,
                    v: 201907301527,
                    wait: 1,
                    tid: 6026
                },
                "245": {
                    load: (utag.cond[156] && utag.cond[163]),
                    tcat: 0,
                    send: 1,
                    v: 201909040426,
                    wait: 1,
                    tid: 6026
                },
                "253": {
                    load: 1,
                    tcat: 0,
                    send: 1,
                    v: 201908081404,
                    wait: 1,
                    tid: 20110
                },
                "255": {
                    load: utag.cond[39],
                    tcat: 0,
                    send: 1,
                    v: 201908082313,
                    wait: 1,
                    tid: 20052
                },
                "256": {
                    load: utag.cond[97],
                    tcat: 0,
                    send: 1,
                    v: 201908091727,
                    wait: 1,
                    tid: 13051
                },
                "257": {
                    load: utag.cond[39],
                    tcat: 0,
                    send: 1,
                    v: 201908091725,
                    wait: 1,
                    tid: 13051
                },
                "258": {
                    load: utag.cond[159],
                    tcat: 0,
                    send: 1,
                    v: 201908121902,
                    wait: 1,
                    tid: 13051
                },
                "263": {
                    load: utag.cond[39],
                    tcat: 0,
                    send: 1,
                    v: 201909092100,
                    wait: 1,
                    tid: 20067
                },
                "264": {
                    load: utag.cond[39],
                    tcat: 0,
                    send: 1,
                    v: 201909241734,
                    wait: 1,
                    tid: 20078
                }
            };
            utag.loader.cfgsort = ["30", "18", "23", "31", "32", "36", "37", "38", "39", "40", "41", "42", "43", "45", "48", "60", "61", "62", "64", "65", "66", "67", "69", "70", "71", "72", "73", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "92", "93", "94", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "116", "117", "118", "122", "123", "149", "153", "154", "155", "158", "159", "160", "162", "175", "178", "179", "182", "180", "169", "185", "189", "197", "198", "199", "200", "201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "261", "217", "218", "219", "220", "222", "223", "224", "225", "226", "227", "228", "229", "230", "231", "232", "234", "235", "236", "237", "238", "239", "240", "241", "242", "243", "244", "245", "253", "255", "256", "257", "258", "263", "264"];
        }
        utag.loader.initcfg();
        try {
            utag.gdpr.applyConsentState();
        } catch (e) {
            utag.DB(e)
        }
    }
    utag.gdpr = {
        consent_prompt: {
            noShow: false,
            isEnabled: true,
            content: {}
        },
        preferences_prompt: {
            single_cookie: false,
            noShow: false,
            isEnabled: false,
            defaultState: true,
            content: {},
            categories: {
                analytics: {
                    id: 1,
                    enabled: true
                },
                affiliates: {
                    id: 2,
                    enabled: true
                },
                display_ads: {
                    id: 3,
                    enabled: true
                },
                search: {
                    id: 4,
                    enabled: true
                },
                email: {
                    id: 5,
                    enabled: true
                },
                personalization: {
                    id: 6,
                    enabled: true
                },
                social: {
                    id: 7,
                    enabled: true
                },
                big_data: {
                    id: 8,
                    enabled: true
                },
                misc: {
                    id: 9,
                    enabled: true
                },
                cookiematch: {
                    id: 10,
                    enabled: true
                },
                cdp: {
                    id: 11,
                    enabled: true
                },
                mobile: {
                    id: 12,
                    enabled: true
                },
                engagement: {
                    id: 13,
                    enabled: true
                },
                monitoring: {
                    id: 14,
                    enabled: true
                },
                crm: {
                    id: 15,
                    enabled: true
                }
            }
        },
        getCategories: function() {
            if (!(utag.gdpr.preferences_prompt && utag.gdpr.preferences_prompt.categories)) {
                return [];
            }
            var cats = [],
                gdpr_cats = utag.gdpr.preferences_prompt.categories;
            for (var cat in gdpr_cats) {
                if (!gdpr_cats.hasOwnProperty(cat)) {
                    continue;
                }
                cats.push(cat);
            }
            return cats;
        },
        getSelectedCategories: function() {
            var sc = [],
                gc = utag.gdpr.getCategories(),
                cs = utag.gdpr.getConsentState(),
                i;
            try {
                if (typeof cs === "number") {
                    if (parseInt(cs) === 1) {
                        return gc;
                    } else {
                        return sc;
                    }
                } else {
                    for (i in utag.loader.GV(cs)) {
                        if ("1" === cs[i].ct) {
                            sc.push(gc[i]);
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
            return sc;
        },
        getCategoryLanguage: function(category) {
            if (!(utag.gdpr.preferences_prompt && utag.gdpr.preferences_prompt.categories)) {
                return [];
            }
            var language = utag.gdpr.getLanguage(utag.gdpr.preferences_prompt);
            return utag.gdpr.preferences_prompt.languages[language].categories[category];
        },
        getConsentState: function() {
            var re = /^c\d+/,
                cd = utag.gdpr.getCookieValues(),
                np = 1,
                gc = utag.gdpr.getCategories(),
                pc = (function(gc) {
                    var pc = [];
                    for (var i = 0; i < gc.length; i++) {
                        pc.push({
                            ct: null,
                            name: gc[i]
                        });
                    }
                    return pc;
                }(gc)),
                filteredCD = (function(cd) {
                    var d = {};
                    for (var prop in cd) {
                        if (!cd.hasOwnProperty(prop)) {
                            continue;
                        }
                        if (re.test(prop)) {
                            d[prop] = cd[prop];
                        }
                    }
                    return d;
                }(cd));
            filteredCD = utag.gdpr.sortedObject(filteredCD, function(val1, val2) {
                var idx1 = parseInt((val1 || "").substring(1), 10),
                    idx2 = parseInt((val2 || "").substring(1), 10);
                if (isNaN(idx1) || isNaN(idx2)) {
                    return 0;
                }
                return idx1 > idx2 ? 1 : -1;
            });
            for (var cn in utag.loader.GV(filteredCD)) {
                if (cn.match(re)) {
                    var idx = parseInt(cn.substring(1), 10) - 1,
                        ct = gc[idx];
                    pc[idx].ct = cd[cn];
                    if (cd[cn] * 1 !== 0) {
                        np = 0;
                    }
                }
            }
            if (cd["consent"]) {
                if (cd["consent"] === true || cd["consent"] === "true") {
                    if (np) {
                        return np;
                    } else {
                        return pc;
                    }
                } else {
                    return -1;
                }
            } else if (np === 0) {
                return pc;
            } else {
                return 0;
            }
        },
        getCookieValues: function() {
            var values = {},
                rcd = (function() {
                    var value = "; " + document.cookie;
                    var parts = value.split("; CONSENTMGR=");
                    if (parts.length == 2) return utag.ut.decode(parts.pop().split(";").shift());
                }()),
                cd = utag.gdpr.typeOf(rcd) === "string" ? rcd : "";
            if (utag.data) {
                utag.data["cp.CONSENTMGR"] = cd;
            }
            if (cd) {
                var i, optOut, optOutData = decodeURI(cd).split("|");
                for (i = 0; i < optOutData.length; i++) {
                    optOut = optOutData[i].split(":");
                    values[optOut[0]] = optOut[1];
                }
            }
            utag.gdpr.values = values;
            return values;
        },
        getDeTokenizedContent: function(data, _lang) {
            var reg = /{{(.*?)}}/gm,
                token_match = /[{}]/g,
                two_part = /display_ads|big_data/;
            var lang = utag.gdpr.getLanguage(data, _lang),
                langData = data.languages[lang];
            for (var t in langData.common_tokens) {
                if (!langData.common_tokens.hasOwnProperty(t)) {
                    continue;
                }
                var replacements = langData.common_tokens[t].match(reg);
                if (replacements) {
                    for (var i = 0; i < replacements.length; i++) {
                        var token = replacements[i].replace(token_match, "");
                        langData.common_tokens[t] = langData.common_tokens[t].replace(replacements[i], langData.custom_tokens[token]);
                    }
                }
            }

            function tokenReplace(str) {
                var replacements = str.match(reg);
                if (replacements) {
                    for (var i = 0; i < replacements.length; i++) {
                        var token = replacements[i].replace(/[{}]/g, "") || "";
                        if (langData.common_tokens[token]) {
                            str = str.replace(replacements[i], langData.common_tokens[token]);
                        } else if (langData.custom_tokens[token]) {
                            str = str.replace(replacements[i], langData.custom_tokens[token]);
                        } else if (langData.categories && token.indexOf("category_") > -1) {
                            var split_token = token.split("_");
                            if (token.match(two_part)) {
                                split_token[1] = split_token[1] + '_' + split_token[2];
                                split_token.splice(2, 1);
                            }
                            var category = langData.categories[split_token[1]],
                                key = {
                                    "title": "name",
                                    "description": "notes"
                                }[split_token[2]];
                            if (category[key]) {
                                str = str.replace(replacements[i], category[key]);
                            }
                        }
                    }
                }
                return str;
            }
            return {
                js: tokenReplace(data.content.js),
                html: tokenReplace(data.content.html),
                css: tokenReplace(data.content.css)
            };
        },
        getLanguage: function(promptData, preferredLang) {
            var lang = preferredLang || utag.data[window.utag.cfg.gdprDLRef] || (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage);
            lang = (lang || "").split("-")[0];
            if (!promptData) {
                return lang;
            }
            return promptData.languages[lang] ? lang : promptData.defaultLang;
        },
        getTokenLanguage: function(promptData, token, lang) {
            lang = lang || utag.gdpr.getLanguage(promptData);
            var langData = promptData.languages[lang];
            if (langData.common_tokens[token]) {
                return langData.common_tokens[token];
            } else if (langData.custom_tokens[token]) {
                return langData.custom_tokens[token]
            } else if (langData.categories && token.indexOf("category_") > -1) {
                var split_token = token.split("_"),
                    category = langData.categories[split_token[1]];
                if (category[split_token[2]]) {
                    return category[split_token[2]];
                }
            }
            return null;
        },
        refreshCookie: function() {
            try {
                utag.gdpr.setCookie(utag.gdpr.getCookieValues());
            } catch (e) {}
        },
        setCookie: function(cookieData) {
            if (utag.gdpr.keys(cookieData).length === 0) {
                return;
            }
            var cp = utag.cfg.consentPeriod || 90;
            utag.gdpr.values = cookieData;
            var mo2Val = [];
            for (var i in utag.loader.GV(cookieData)) {
                mo2Val.push(i + ":" + cookieData[i]);
            }
            var cD = new Date();
            cD.setDate(cD.getDate() + cp);
            document.cookie = "CONSENTMGR=" + encodeURI(mo2Val.join("|")) + ";domain=" + utag.cfg.domain + ";path=/; expires=" + cD.toGMTString() + ";";
            utag.data["cp.CONSENTMGR"] = mo2Val.join("|");
        },
        setCookieValue: function(key, value) {
            var cookieData = utag.gdpr.getCookieValues();
            cookieData[key] = value;
            utag.gdpr.setCookie(cookieData);
        },
        setConsentValue: function(response) {
            if (response === "") {
                throw new Error("No response supplied");
            }
            response = (response === true || response === "true" || response == 1);
            utag.gdpr.setCookieValue("ts", new Date().getTime());
            utag.gdpr.setCookieValue("consent", response);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://collect.tealiumiq.com/event");
            if (response) {
                xhr.send('{"tealium_account":"dropbox","tealium_profile":"main","tealium_event":"grant_full_consent","consent_categories":"analytics, affiliates, display_ads, search, email, personalization, social, big_data, misc, cookiematch, cdp, mobile, engagement, monitoring, crm","policy":"gdpr", "tealium_visitor_id" : "' + utag.data['cp.utag_main_v_id'] + '"}');
            } else {
                xhr.send('{"tealium_account":"dropbox","tealium_profile":"main","tealium_event":"decline_consent","consent_categories":"","policy":"gdpr", "tealium_visitor_id" : "' + utag.data['cp.utag_main_v_id'] + '"}');
            }
        },
        setPreferencesValues: function(categories, noCollect) {
            var cookie_data = utag.gdpr.getCookieValues(),
                lookup = {},
                i, rgx = /\D/,
                names = utag.gdpr.getCategories(),
                chosen_list = [],
                consent_seen = false,
                decline_seen = false,
                crgx = /c\d/,
                fld;
            try {
                for (i = 0; i < names.length; i++) {
                    lookup[names[i]] = 'c' + (i + 1);
                }
                for (var cat in categories) {
                    if (!categories.hasOwnProperty(cat)) {
                        continue;
                    }
                    if (cat.match(rgx)) {
                        cookie_data[lookup[cat]] = categories[cat];
                        if (categories[cat] != 0) {
                            chosen_list.push(cat);
                        }
                    } else {
                        cookie_data["c" + cat] = categories[cat];
                        if (categories[cat] != 0) {
                            chosen_list.push(names[cat - 1]);
                        }
                    }
                }
                for (fld in utag.loader.GV(cookie_data)) {
                    if (fld.match(crgx)) {
                        if (cookie_data[fld] != 0) {
                            consent_seen = true;
                        } else {
                            decline_seen = true;
                        }
                    }
                }
                cookie_data["ts"] = new Date().getTime();
                cookie_data["consent"] = consent_seen;
                utag.gdpr.setCookie(cookie_data);
            } catch (e) {
                utag.DB(e)
            }
            if (noCollect) {
                return;
            }
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://collect.tealiumiq.com/event");
            if (decline_seen) {
                if (consent_seen) {
                    xhr.send('{"tealium_account":"dropbox","tealium_profile":"main","tealium_event":"grant_partial_consent","consent_categories":"' + chosen_list.join(",") + '","policy":"gdpr", "tealium_visitor_id" : "' + utag.data['cp.utag_main_v_id'] + '"}');
                } else {
                    xhr.send('{"tealium_account":"dropbox","tealium_profile":"main","tealium_event":"decline_consent","consent_categories":"","policy":"gdpr", "tealium_visitor_id" : "' + utag.data['cp.utag_main_v_id'] + '"}');
                }
            } else if (!decline_seen && consent_seen) {
                xhr.send('{"tealium_account":"dropbox","tealium_profile":"main","tealium_event":"grant_full_consent","consent_categories":"analytics, affiliates, display_ads, search, email, personalization, social, big_data, misc, cookiematch, cdp, mobile, engagement, monitoring, crm","policy":"gdpr", "tealium_visitor_id" : "' + utag.data['cp.utag_main_v_id'] + '"}');
            }
        },
        setAllCategories: function(state, noCollect) {
            var allCats = utag.gdpr.getCategories(),
                prefs = {};
            for (var i = 0; i < allCats.length; i++) {
                prefs["" + (i + 1)] = state ? "1" : "0";
            }
            utag.gdpr.setPreferencesValues(prefs, noCollect);
        },
        setPreferencesFromList: function(list) {
            var prefs = {},
                allCats = utag.gdpr.getCategories();
            for (var i = 0; i < list.length; i++) {
                prefs[list[i]] = "1";
            }
            for (var j = 0; j < allCats.length; j++) {
                if (!prefs[allCats[j]]) {
                    prefs[allCats[j]] = "0";
                }
            }
            utag.gdpr.setPreferencesValues(prefs);
        },
        typeOf: function(e) {
            return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        },
        applyConsentState: function() {
            try {
                var i, lc = utag.loader.cfg,
                    cs = utag.gdpr.getConsentState(),
                    ot = {};
                if (typeof cs === "number") {
                    if ((utag.gdpr.consent_prompt.isEnabled && parseInt(cs) !== 1) || ((!utag.gdpr.consent_prompt.isEnabled && utag.gdpr.preferences_prompt.isEnabled) && parseInt(cs) === -1)) {
                        for (i in utag.loader.GV(lc)) {
                            if (typeof ot[i] === "undefined") {
                                lc[i].load = 0;
                            }
                        }
                    }
                } else {
                    for (i in utag.loader.GV(lc)) {
                        if (typeof ot[i] === "undefined") {
                            if (lc[i].tcat > 0 && cs[lc[i].tcat - 1].ct == 0) {
                                lc[i].load = 0;
                            }
                        }
                    }
                }
            } catch (e) {
                utag.DB(e);
            }
        },
        updateConsentCookie: function(consent_categories) {
            var list, listType = utag.gdpr.typeOf(consent_categories);
            if (listType === "string") {
                list = consent_categories.split(/\s*,\s*/);
            } else if (listType !== "array") {
                list = [];
            } else {
                list = consent_categories.slice();
            }
            if (list.length === 0) {
                utag.gdpr.setConsentValue(false);
                utag.gdpr.setAllCategories(false);
                return;
            } else {
                utag.gdpr.setConsentValue(true);
            }
            utag.gdpr.setPreferencesFromList(list);
        },
        keys: function(obj) {
            var array = [];
            for (var prop in obj) {
                if (!obj.hasOwnProperty(prop)) {
                    continue;
                }
                array.push(prop);
            }
            return array;
        },
        sortedObject: function(obj, func) {
            var _obj = {};
            if (obj !== undefined) {
                var _k1 = utag.gdpr.keys(obj).sort(func);
                for (var z = 0; z < _k1.length; z++) {
                    _obj[_k1[z]] = obj[_k1[z]];
                }
            }
            return _obj;
        }
    };
    utag.gdpr.consent_prompt.languages = {
        "en": {
            "isDefault": "true",
            "custom_tokens": {
                "privacy_policy_url": "",
                "opt_out": "",
                "opt_in": ""
            },
            "common_tokens": {
                "confirmation_button": "",
                "message": " We use cookies so that Dropbox works for you. By using our website, you agree to our use of cookies.",
                "title": ""
            }
        }
    };
    utag.gdpr.consent_prompt.content.css = "#top-notification-bar-container {    min-height: 51px;    width: 100%;    position: relative;    line-height: 18px}#top-notification-bar-container.lightred{	position: fixed;    top: 0;    right: 0;    left: 0;    background: black;    border: none;    border-radius: 0;    display: flex;    flex: 1;    flex-direction: row;    justify-content: center;    align-content: center;    align-items: center;    color: white;    min-height: 62px;    height: auto;    z-index: 100;}#eu-cookie-bar {    padding-top: 0;    padding-bottom: 0;    padding-left: 50px;    display: flex;    flex: 1;    flex-direction: row;    justify-content: flex-start;    align-content: center;    align-items: center;    width: auto;    font-size: 14px;    line-height: 21px;    color: white	;    max-width: 1440px;    background-size: 20px;    margin-left: 0;    margin-right: 0;    height: auto;    font-family: \'Atlas Grotesk Web\', \'Open Sans\', sans-serif;}#eu-cookie-bar .top-notification-bar__message {    flex-grow: 1;    text-align: left;    margin-right: 10px;    max-width: 100%;    white-space: normal;}#eu-cookie-bar .top-notification-bar__message a {    color: white;    text-decoration: underline;}#eu-cookie-bar .top-notification-bar-dismiss, .eu-bar-dismiss {    position: absolute;    flex-shrink: 0;    right: 10px;}#eu-cookie-bar .eu-bar-dismiss img {	border: none;    outline: none;}";
    utag.gdpr.consent_prompt.content.html = "<div id=\"top-notification-bar-container\" class=\"top-notification-bar-container lightred\">	<div id=\"eu-cookie-bar\" class=\"top-notification-bar\">		<div class=\"top-notification-bar__message\">{{message}} <a href=\"https://help.dropbox.com/accounts-billing/security/cookies\">Learn more</a><a href=\"#\" class=\"top-notification-bar-dismiss eu-bar-dismiss\"><img src=\"https://cfl.dropboxstatic.com/static/images/top-notification-x-white.svg\" alt=\"Dismiss\"></a></div>	</div></div>";
    utag.gdpr.consent_prompt.content.js = "document.getElementsByClassName(\"top-notification-bar-dismiss eu-bar-dismiss\")[0].onclick=function(){closeEUCookieBar()};document.getElementsByClassName(\"u01-v2-help-header__header\")[0].setAttribute(\"style\",\"margin-top: 62px\");document.getElementsByClassName(\"u01-v2-help-header__space-saver\")[0].setAttribute(\"style\",\"margin-top: 62px\");function closeEUCookieBar(){var bar=document.getElementById(\"top-notification-bar-container\");bar.style.display=\"none\";document.getElementsByClassName(\"u01-v2-help-header__header\")[0].setAttribute(\"style\",\"margin-top: 0px\");document.getElementsByClassName(\"u01-v2-help-header__space-saver\")[0].setAttribute(\"style\",\"margin-top: 0px\");utag.gdpr.setConsentValue(1);}";
    utag.gdpr.consent_prompt.defaultLang = "en";
    utag.gdpr.showExplicitConsent = function(_lang) {
        var cn = document.getElementById("__tealiumGDPRecStyle");
        if (cn) {
            cn.parentNode.removeChild(cn);
        }
        var hn = document.getElementById("__tealiumGDPRecModal");
        if (hn) {
            hn.parentNode.removeChild(hn);
        }
        var sn = document.getElementById("__tealiumGDPRecScript");
        if (sn) {
            sn.parentNode.removeChild(sn);
        }
        var dtc = utag.gdpr.getDeTokenizedContent(utag.gdpr.consent_prompt, _lang);
        var head = document.head || document.getElementsByTagName("head")[0],
            style = document.createElement("style"),
            mDiv = document.createElement("div"),
            scr = document.createElement("script"),
            body = document.body || document.getElementsByTagName("body")[0];
        style.type = "text/css";
        style.id = "__tealiumGDPRecStyle";
        if (style.styleSheet) {
            style.styleSheet.cssText = dtc.css;
        } else {
            style.appendChild(document.createTextNode(dtc.css));
        }
        head.appendChild(style);
        mDiv.innerHTML = dtc.html;
        mDiv.id = "__tealiumGDPRecModal";
        body.appendChild(mDiv);
        scr.language = "javascript";
        scr.type = "text/javascript";
        scr.text = "try{" + dtc.js + "} catch(e){utag.DB(e)}";
        scr.id = "__tealiumGDPRecScript";
        head.appendChild(scr);
    };
    utag.track_old = utag.track;
    utag.track = function(a, b, c, d) {
        if (typeof a == "string") a = {
            event: a,
            data: b,
            cfg: {
                cb: c,
                uids: d
            }
        };
        if (a.event === "update_consent_cookie" && b.consent_categories) {
            utag.gdpr.updateConsentCookie(b.consent_categories);
        } else {
            utag.gdpr.refreshCookie();
            return utag.track_old.apply(this, arguments);
        }
    };
    utag.loader.OU_old = utag.loader.OU;
    utag.loader.OU = function() {
        utag.loader.OU_old();
        utag.gdpr.applyConsentState();
    };
    if (utag.gdpr.preferences_prompt.single_cookie) {
        window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
        window.utag_cfg_ovrd.nocookie = true;
    }
    if (!utag.gdpr.consent_prompt.isEnabled && utag.gdpr.getConsentState() == 0) {
        utag.gdpr.setAllCategories(utag.gdpr.preferences_prompt.defaultState, !0);
    }
    if (typeof utag_cfg_ovrd != 'undefined') {
        for (utag._i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[utag._i] = utag_cfg_ovrd[utag._i]
    };
    utag.loader.PINIT = function(a, b, c) {
        utag.DB("Pre-INIT");
        if (utag.cfg.noload) {
            return;
        }
        try {
            this.GET();
            if (utag.handler.RE('view', utag.data, "blr")) {
                utag.handler.LR(utag.data);
            }
        } catch (e) {
            utag.DB(e)
        };
        a = this.cfg;
        c = 0;
        for (b in this.GV(a)) {
            if (a[b].block == 1 || (a[b].load > 0 && (typeof a[b].src != 'undefined' && a[b].src != ''))) {
                a[b].block = 1;
                c = 1;
                this.bq[b] = 1;
            }
        }
        if (c == 1) {
            for (b in this.GV(a)) {
                if (a[b].block) {
                    a[b].id = b;
                    if (a[b].load == 4) a[b].load = 1;
                    a[b].cb = function() {
                        var d = this.uid;
                        utag.loader.cfg[d].cbf = 1;
                        utag.loader.LOAD(d)
                    };
                    this.AS(a[b]);
                }
            }
        }
        if (c == 0) this.INIT();
    };
    utag.loader.INIT = function(a, b, c, d, e) {
        utag.DB('utag.loader.INIT');
        if (this.ol == 1) return -1;
        else this.ol = 1;
        if (utag.cfg.noview != true) utag.handler.RE('view', utag.data, "alr");
        utag.rpt.ts['i'] = new Date();
        d = this.cfgsort;
        for (a = 0; a < d.length; a++) {
            e = d[a];
            b = this.cfg[e];
            b.id = e;
            if (b.block != 1) {
                if (utag.loader.bk[b.id] || ((utag.cfg.readywait || utag.cfg.noview) && b.load == 4)) {
                    this.f[b.id] = 0;
                    utag.loader.LOAD(b.id)
                } else if (b.wait == 1 && utag.loader.rf == 0) {
                    utag.DB('utag.loader.INIT: waiting ' + b.id);
                    this.wq.push(b)
                    this.f[b.id] = 2;
                } else if (b.load > 0) {
                    utag.DB('utag.loader.INIT: loading ' + b.id);
                    this.lq.push(b);
                    this.AS(b);
                }
            }
        }
        if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.DB('READY:utag.loader.wq');
                utag.loader.rf = 1;
                utag.loader.WQ();
            }
        });
        else if (this.lq.length > 0) utag.loader.rf = 1;
        else if (this.lq.length == 0) utag.loader.END();
        return 1
    };
    utag.loader.EV('', 'ready', function(a) {
        if (utag.loader.efr != 1) {
            utag.loader.efr = 1;
            try {
                if (!utag.gdpr.consent_prompt.noShow) {
                    if (!utag.gdpr.getConsentState()) {
                        if (utag.cond[132]) {
                            utag.gdpr.showExplicitConsent();
                        } else {
                            utag.gdpr.consent_prompt.isEnabled = false;
                            utag.view(utag.data);
                        }
                    }
                }
            } catch (e) {
                utag.DB(e);
            }
            try {
                if (typeof utag.runonce == 'undefined') utag.runonce = {};
                utag.jdh = function(h, i, j, k) {
                    h = utag.jdhc.length;
                    if (h == 0) window.clearInterval(utag.jdhi);
                    else {
                        for (i = 0; i < h; i++) {
                            j = utag.jdhc[i];
                            k = jQuery(j.i).is(":visible") ? 1 : 0;
                            if (k != j.s) {
                                if (j.e == (j.s = k)) jQuery(j.i).trigger(j.e ? "afterShow" : "afterHide")
                            }
                        }
                    }
                };
                utag.jdhi = window.setInterval(utag.jdh, 250);
                utag.jdhc = [];
                if (utag.data['dom.pathname'].toString().toLowerCase() == '/jobs'.toLowerCase()) {
                    if (typeof utag.runonce[81] == 'undefined') {
                        utag.runonce[81] = 1;
                        jQuery(document.body).on('click', 'button[data-tracking="hellosign_tracking"]', function(e) {
                            utag.link({
                                "ga_eventLabel": utag.data['dom.url'],
                                "ga_eventaction": 'HelloSign Careers',
                                "ga_eventCategory": 'CTAs'
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if (utag.data['dom.pathname'].toString().toLowerCase() == '/features/extensions'.toLowerCase()) {
                    if (typeof utag.runonce[90] == 'undefined') {
                        utag.runonce[90] = 1;
                        jQuery(document.body).on('click', 'a.button--medium--wide', function(e) {
                            utag.link({
                                "ga_eventLabel": utag.data['dom.url'],
                                "ga_eventaction": 'Get Started',
                                "ga_eventCategory": 'CTAs'
                            })
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
            try {
                if ((typeof utag.data['dom.pathname'] != 'undefined' && utag.data['dom.pathname'] != '' && utag.data['dom.pathname'].toString().toLowerCase() == '/team/join/new_pair'.toLowerCase())) {
                    if (typeof utag.runonce[96] == 'undefined') {
                        utag.runonce[96] = 1;
                        jQuery(document.body).on('mousedown', '#component219312951125739525 > div > main > div > div > div > div.maestro-split-layout__content.maestro-split-layout__content--right > div.maestro-split-layout__content__component > div > div > button', function(e) {
                            utag.link({
                                "fb_event": '/enjoy'
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            };
        }
    })
    if (utag.cfg.readywait || utag.cfg.waittimer) {
        utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.loader.rf = 1;
                utag.cfg.readywait = 1;
                utag.DB('READY:utag.cfg.readywait');
                setTimeout(function() {
                    utag.loader.PINIT()
                }, utag.cfg.waittimer || 1);
            }
        })
    } else {
        utag.loader.PINIT()
    }
}