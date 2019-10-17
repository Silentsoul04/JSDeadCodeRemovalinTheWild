
            ! function() {
                function a(a) {}
                var c = window.B || {},
                    h = !1,
                    $ = c.$("#commonBase").getAttribute("data-query");
                $ && a(decodeURIComponent($)), c.chgParam = a
            }();;
            ! function() {
                function a(a, c, h) {
                    var v = h ? a + c + "@" + h : a + c + "";
                    return v
                }

                function c(a, c) {}

                function h(a) {
                    var c = this,
                        h = a;
                    c.conf = {};
                    for (var p in h) c.conf[p] = h[p];
                    switch (w && (c.speed = {
                        tag: "index",
                        start: (new Date).getTime()
                    }), c.exeCodeQueue = [], c.exeCoderQueue = {}, c.pubVersion = {}, c.conf.type) {
                        case "index":
                            c.init = c.indexInit;
                            break;
                        case "search":
                            c.init = c.searchInit;
                            break;
                        case "search-newi":
                            c.init = c.searchNewiInit
                    }
                    return c.init(), c
                }
                var v = window.B || {};
                v.indexStyles = [].slice.call(v.$$(".spa-index-style")), v.searchStyles = [], window.addEventListener("load", function() {
                    v.windowLoaded = !0
                }, !1);
                var C = !1,
                    g = !1,
                    b = v.$("#commonBase"),
                    w = !!b.getAttribute("data-pagetimer");
                h.prototype = {
                    indexInit: function() {
                        var a, c, h = this;
                        return h.prefix = b.getAttribute("data-lsprefix"), a = v.$("body").getAttribute("data-version").split(","), a.forEach(function(a) {
                            c = a.split("@"), h.pubVersion[c[0]] = c[1], h.exeCodeQueue.push(c[0])
                        }), h.compareVersion(), h
                    },
                    searchInit: function() {},
                    searchNewiInit: function() {},
                    compareVersion: function() {
                        var c, h = this,
                            C = "";
                        h.chgVersion = 0, h.requestStr = "";
                        for (var p in h.pubVersion) c = h.pubVersion[p], C = a(h.prefix, p, c), v.lsSupport ? localStorage.getItem(C) || (c = 0, h.chgVersion = 1) : (c = 0, h.chgVersion = 1), h.requestStr += "," + p + "@" + c;
                        return h.requestStr = h.requestStr.substr(1), h
                    },
                    executeCode: function(c) {},
                    setExecuteTag: function() {},
                    jsonpRequest: function(a) {
                        var c, h = this,
                            C = b.getAttribute("data-sids") || "";
                        if (C && (C = "&sid=" + C), h.chgVersion) {
                            switch (c = document.createElement("script"), c.type = "text/javascript", h.conf.type) {
                                case "index":
                                    c.src = "?action=static&ms=1&" + ("index_ls_" == h.prefix ? "cl=1&" : "") + "version=" + h.requestStr + "&callback=B.getCode&r=" + Math.floor(1e3 * Math.random()) + C;
                                    break;
                                case "search":
                                    h.urlParamsUpdate();
                                    var g = h.conf.query,
                                        w = "/s?word=" + encodeURIComponent(g) + "&mod=0&callback=B.getCode&at=3&" + h.urlParam;
                                    h.conf.sa && (w += "&sa=" + h.conf.sa);
                                    var y = b.getAttribute("data-logid");
                                    y && (w += "&isid=" + y), h.jumpURL = c.src = w;
                                    break;
                                case "search-newi":
                                    h.urlParamsUpdate();
                                    var g = h.conf.query,
                                        w = "/s?word=" + encodeURIComponent(g) + "&mod=0&callback=B.getCode&at=3&" + h.urlParam;
                                    h.conf.sa && (w += "&sa=" + h.conf.sa), 0 === C.indexOf("&sid=2462") && (w += C);
                                    var y = b.getAttribute("data-logid");
                                    y && (w += "&isid=" + y), h.jumpURL = c.src = w
                            }
                            if ("search" === h.conf.type && "undefined" != typeof v.prefetch) {
                                var g = h.conf.query,
                                    k = v.prefetch.search({
                                        word: g,
                                        params: v.prefetch.buildSearchParams(g, {}),
                                        type: "ajax"
                                    }, function(a) {});
                                h.speed && (h.speed.cacheStatus = k.cacheStatus), h.cacheObj = k
                            } else if ("search-newi" === h.conf.type && "undefined" != typeof v.prefetch) {
                                var g = h.conf.query,
                                    k = v.prefetch.search({
                                        word: g,
                                        params: v.prefetch.buildSearchParams(g, {}),
                                        type: "ajax"
                                    }, function(a) {});
                                h.speed && (h.speed.cacheStatus = k.cacheStatus), h.cacheObj = k
                            } else h.scLoaded = !1, c.onload = function() {
                                clearTimeout(c.scId), h.scLoaded = !0
                            }, c.onerror = function() {}, c.src && document.body.appendChild(c), c.scId = setTimeout(function() {}, 3e4)
                        } else h.executeCode(), "index" === h.conf.type && h.clearLocal();
                        return h
                    },
                    saveCode: function() {},
                    setCookie: function(a) {},
                    expireCookie: function(a) {},
                    redirectURL: function() {},
                    clearLocal: function() {},
                    urlParamsUpdate: function() {}
                }, v.localStore = function(a) {
                    var p = a || {};
                    p.type = p.type ? p.type : "index";
                    var c = new h(p);
                    return v.getCode = function(a, h, g) {}, c.jsonpRequest(), c
                }, window.B = v
            }();;
            ! function() {
                function a() {
                    c.$("#search-card").innerHTML = c.$("[data-tpl=search-card]").value, c.$("#se-form").setAttribute("action", c.$("#index-form").getAttribute("action"))
                }
                var c = window.B || {},
                    h = window,
                    c = window.B || {},
                    g = c._hash,
                    w = c._query,
                    b = c.$("#commonBase");
                if (w) {
                    a(), c.SPA = {
                        lastQuery: w
                    }, document.body.setAttribute("data-cur-page", "search");
                    var A = {
                            type: "search-newi",
                            query: w
                        },
                        v = g.match(/(\|sa_)(.*?)(\||$)/);
                    v && (v = decodeURIComponent(v[2]), A.sa = v);
                    var y = c.localStore(A);
                    b.getAttribute("data-pagetimer") && (y.speed.loading = (new Date).getTime(), y.speed.cacheStatus = 0), b.setAttribute("data-query", encodeURIComponent(w)), setTimeout(function() {}, 0)
                } else if (/inormal|ipassive|iact/.test(location.hash) || location.hash.indexOf("iview=skin") > -1 || (location.hash = ""), document.body.setAttribute("data-cur-page", "index"), c.ready(function() {
                        b.setAttribute("data-ref", "index_iphone"), a(), c.localStore({
                            type: "index"
                        })
                    }), !/#iact=wiseindex/.test(h.location.href) && !/#iview=skin/.test(h.location.href)) {
                    var $ = new Image;
                    $.src = "//hpd.baidu.com/v.gif?tid=13&ct=1&cst=1&logFrom=index&logInfo=index&" + b.getAttribute("data-prepath").replace(/#/g, "&") + "&sid=" + b.getAttribute("data-sids") + "&logid=" + h.sSession.logid + "&ref=index_iphone&r=l" + +new Date
                }
            }();;
        