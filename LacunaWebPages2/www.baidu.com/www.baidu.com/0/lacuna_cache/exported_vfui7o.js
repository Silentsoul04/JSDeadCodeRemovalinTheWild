
            ! function() {
                function a(a) {
                    if (a !== h) {
                        h = a;
                        var $ = Array.prototype.slice,
                            g = /(word=|w=|kw=|search-|key=|s=s%26wd%3D|#search\/|#search=)(.*?)(&|$)/i,
                            b = /(word=)(.*?)(&|$)/,
                            v = $.call(c.$$(".se-input, se-encode"));
                        if (v.forEach(function(c) {
                                var h = c.tagName.toLowerCase();
                                "input" === h || "textarea" === h ? c.value = a : c.innerText = a
                            }), a) {
                            c.$("title").innerText = a + " - 百度";
                            var w = $.call(c.$$("a.h-tab, .more-links > a"));
                            w.forEach(function(c) {
                                var h = c.getAttribute("href");
                                if (h && (h = h.replace(g, "$1" + encodeURIComponent(a) + "$3"), c.setAttribute("href", h), "地图" === c.innerText.trim())) {
                                    var $ = c.getAttribute("data-schema").replace(/(query=).*/, "$1");
                                    c.setAttribute("data-schema", $ + encodeURIComponent(a))
                                }
                            });
                            var A = $.call(c.$$("#page_copyright .switch-to-utouch, #page_copyright .feedback"));
                            A.forEach(function(c) {
                                var h = c.getAttribute("href");
                                h = h.replace(b, "$1" + encodeURIComponent(a) + "$3"), c.setAttribute("href", h)
                            })
                        } else c.$("title").innerText = "百度一下"
                    }
                }
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

                function c(a, c) {
                    try {
                        localStorage.setItem(a, c)
                    } catch (e) {
                        window.setCodeLSFailed = !0
                    }
                }

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
                    searchInit: function() {
                        var a = this;
                        return a.prefix = "search_ls_", a.chgVersion = 1, v.chgParam(a.conf.query), a
                    },
                    searchNewiInit: function() {
                        var a = this;
                        return a.prefix = "search_ls_", a.chgVersion = 1, v.chgParam(a.conf.query), a
                    },
                    compareVersion: function() {
                        var c, h = this,
                            C = "";
                        h.chgVersion = 0, h.requestStr = "";
                        for (var p in h.pubVersion) c = h.pubVersion[p], C = a(h.prefix, p, c), v.lsSupport ? localStorage.getItem(C) || (c = 0, h.chgVersion = 1) : (c = 0, h.chgVersion = 1), h.requestStr += "," + p + "@" + c;
                        return h.requestStr = h.requestStr.substr(1), h
                    },
                    executeCode: function(c) {
                        var h, C, b = this;
                        switch (b.conf.type) {
                            case "index":
                                b.lsCode = c ? c : {};
                                break;
                            case "search":
                                if (b.searchJSDone) {
                                    b.exeCodeQueue = [];
                                    break
                                }
                                if (b.exeCodeQueue = [], b.lsCode = c.lscode ? c.lscode : "", b.lsCode)
                                    for (var p in b.lsCode) b.exeCodeQueue.push(p);
                                else
                                    for (var p in localStorage) 0 == p.indexOf(b.prefix) && b.exeCodeQueue.push(p);
                                break;
                            case "search-newi":
                                if (b.searchJSDone) {
                                    b.exeCoderQueue = {};
                                    break
                                }
                                b.exeCoderQueue = {
                                    top: [],
                                    mid: [],
                                    btm: [],
                                    deal: []
                                };
                                var y = document.getElementsByClassName("code-to-write");
                                for (i = 0; i < y.length; i++) y[i].parentNode.removeChild(y[i]);
                                for (var C in c.html) 0 === C.indexOf("cooder_") && (C.indexOf("_frame") > -1 ? b.exeCoderQueue.btm.push(C) : C.indexOf("_deal") > -1 ? b.exeCoderQueue.deal.push(C) : C.indexOf("_top") > -1 ? b.exeCoderQueue.top.push(C) : C.indexOf("_btm") > -1 ? b.exeCoderQueue.btm.push(C) : b.exeCoderQueue.mid.push(C))
                        }
                        if ("search-newi" === b.conf.type) {
                            var k = document.createElement("div");
                            b.exeCoderQueue.top.forEach(function(a) {
                                k.innerHTML += c.html[a]
                            }), b.exeCoderQueue.mid.forEach(function(a) {
                                k.innerHTML += c.html[a]
                            }), b.exeCoderQueue.btm.forEach(function(a) {
                                k.innerHTML += c.html[a]
                            });
                            for (var i = 0; i < k.children.length; i++) {
                                var L, S = k.children[i];
                                switch (S.tagName.toLowerCase()) {
                                    case "script":
                                        L = document.createElement("script"), L.type = "text/javascript";
                                        break;
                                    case "style":
                                        L = document.createElement("style");
                                        break;
                                    default:
                                        continue
                                }
                                L.innerHTML = S.innerHTML;
                                var T = S.attributes;
                                for (var E in T) T[E].name && T[E].value && "undefined" !== T[E].value && L.setAttribute(T[E].name, T[E].value);
                                document.head.insertBefore(L, document.head.lastChild)
                            }
                            var _ = [];
                            b.exeCoderQueue.deal.forEach(function(a) {
                                _.push(c.html[a])
                            }), window.addEventListener("deal-btm", function() {
                                _.forEach(function(a) {
                                    $("body").append(a)
                                }), window.removeEventListener("deal-btm", arguments.callee)
                            }, !1)
                        } else b.exeCodeQueue.forEach(function(c) {
                            if (b.lsCode && b.lsCode[c] && b.lsCode[c].data ? (C = c, h = b.lsCode[c].data) : v.lsSupport && (C = a(b.prefix, c, b.pubVersion[c]), h = localStorage.getItem(C)), !h) return b.expireCookie({
                                key: "lsv",
                                val: ""
                            }), location.href = b.redirectURL(), !1;
                            if (!g || b.lsCode[c] && !b.lsCode[c].widget) {
                                var w; - 1 != C.indexOf("js") && (w = document.createElement("script"), w.id = b.prefix + c, w.type = "text/javascript", "search_ls_js_btm" === w.id ? window.addEventListener("deal-btm", function() {
                                    document.body.appendChild(w), window.removeEventListener("deal-btm", arguments.callee)
                                }, !1) : document.body.appendChild(w)), -1 != C.indexOf("css") && (w = document.createElement("style"), w.id = b.prefix + c, w.id.match(/^index_(?:plus_)?ls/) ? v.indexStyles.push(w) : v.searchStyles.push(w), w.type = "text/css", "search_ls_css_btm" === w.id ? window.addEventListener("deal-btm", function() {
                                    document.body.appendChild(w), window.removeEventListener("deal-btm", arguments.callee)
                                }, !1) : document.head.appendChild(w)), w.className = C, w.innerHTML = h
                            }
                        });
                        return "index" === b.conf.type && v.fire("feed", "init", b.chgVersion), w && "index" == b.conf.type && (PageTimer.combo_code = (new Date).getTime() - PageTimer.start), b.setExecuteTag(), b
                    },
                    setExecuteTag: function() {
                        var a = this;
                        switch (a.conf.type) {
                            case "index":
                                g = !0;
                                break;
                            case "search":
                                C = !0;
                                break;
                            case "search-newi":
                                C = !0
                        }
                        return a
                    },
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
                                    }, function(a) {
                                        v.getCode(a, h.speed, k)
                                    });
                                h.speed && (h.speed.cacheStatus = k.cacheStatus), h.cacheObj = k
                            } else if ("search-newi" === h.conf.type && "undefined" != typeof v.prefetch) {
                                var g = h.conf.query,
                                    k = v.prefetch.search({
                                        word: g,
                                        params: v.prefetch.buildSearchParams(g, {}),
                                        type: "ajax"
                                    }, function(a) {
                                        v.getCode(a, h.speed, k)
                                    });
                                h.speed && (h.speed.cacheStatus = k.cacheStatus), h.cacheObj = k
                            } else h.scLoaded = !1, c.onload = function() {
                                clearTimeout(c.scId), h.scLoaded = !0
                            }, c.onerror = function() {
                                location.href = h.redirectURL()
                            }, c.src && document.body.appendChild(c), c.scId = setTimeout(function() {
                                h.scLoaded || (location.href = h.redirectURL())
                            }, 3e4)
                        } else h.executeCode(), "index" === h.conf.type && h.clearLocal();
                        return h
                    },
                    saveCode: function() {
                        var h, C, g = this;
                        if (v.lsSupport) switch (g.conf.type) {
                            case "index":
                                for (var p in g.lsCode) h = a(g.prefix, p, g.lsCode[p].version), c(h, g.lsCode[p].data);
                                break;
                            case "search":
                                for (var p in g.lsCode) h = a(g.prefix, p), !!g.lsCode[p].data && c(h, g.lsCode[p].data), C = g.lsCode[p] ? g.lsCode[p].version : "";
                                !!C && g.setCookie({
                                    key: "lsv",
                                    val: C
                                })
                        }
                        return g
                    },
                    setCookie: function(a) {
                        var c = this,
                            h = a.key,
                            v = a.val,
                            C = new Date;
                        return C.setTime(C.getTime() + 6048e5), document.cookie = h + "=" + v + ";domain=" + document.domain + ";path=/;expires=" + C.toGMTString() + ";", document.cookie = h + "=" + v + ";domain=.m.baidu.com;path=/;expires=" + C.toGMTString() + ";", c
                    },
                    expireCookie: function(a) {
                        var c = this,
                            h = a.key,
                            v = a.val,
                            C = new Date;
                        return C.setTime(C.getTime() - 1), document.cookie = h + "=" + v + ";domain=" + document.domain + ";path=/;expires=" + C.toGMTString() + ";", document.cookie = h + "=" + v + ";domain=.m.baidu.com;path=/;expires=" + (new Date).toGMTString() + ";", c
                    },
                    redirectURL: function() {
                        var a = this;
                        return a.jumpURL.replace("&mod=0", "").replace("&callback=B.getCode", "").replace("&at=3", "")
                    },
                    clearLocal: function() {
                        var a, c = this;
                        if (v.lsSupport)
                            for (var p in localStorage) 0 == p.indexOf(c.prefix) && (a = p.replace(c.prefix, "").split("@"), !!c.pubVersion[a[0]] && c.pubVersion[a[0]] != a[1] && localStorage.removeItem(p));
                        return c
                    },
                    urlParamsUpdate: function() {
                        var a = this;
                        a.urlParam = "", a.urlParam = b.getAttribute("data-prepath").replace(/#/g, "&"), a.urlParam += "&rn=10&wpo=base", "from pu ss st sa rq dit ms".split(" ").forEach(function(c) {
                            var h = b.getAttribute("data-" + c);
                            h && "0" !== h && (a.urlParam += "&" + c + "=" + h)
                        });
                        var c = (new Date).getTime().toString();
                        return a.urlParam += "&ts=" + c.substr(-7), a
                    }
                }, v.localStore = function(a) {
                    var p = a || {};
                    p.type = p.type ? p.type : "index";
                    var c = new h(p);
                    return v.getCode = function(a, h, g) {
                        switch (w && "index" == c.conf.type && (PageTimer.combo_net = (new Date).getTime() - PageTimer.start), c.conf.type) {
                            case "index":
                                !!a && c.executeCode(a).saveCode().clearLocal();
                                break;
                            case "search":
                                try {
                                    if (g = g || c.cacheObj) {
                                        var b = (g.word, g.item);
                                        1 == b.params.mod && v.prefetch.confirm(g), v.prefetch.isid = g.data.logid
                                    }
                                    h = h || c.speed, h && (h.executeCode = (new Date).getTime()), !!a && !C && c.executeCode(a).saveCode(), h && (h.afterExecuteCode = (new Date).getTime()), $("body").trigger("singleRender", [a.html, h, c.jumpURL]), c.speed = !1, c.jumpURL = ""
                                } catch (e) {
                                    c.expireCookie({
                                        key: "lsv",
                                        val: ""
                                    }), location.href = c.redirectURL()
                                }
                                break;
                            case "search-newi":
                                try {
                                    if (g = g || c.cacheObj) {
                                        var b = (g.word, g.item);
                                        1 == b.params.mod && v.prefetch.confirm(g), v.prefetch.isid = g.data.logid
                                    }
                                    h = h || c.speed, h && (h.executeCode = (new Date).getTime()), !!a && !C && c.executeCode(a).saveCode(), h && (h.afterExecuteCode = (new Date).getTime()), $("body").trigger("singleRender", [a.html, h, c.jumpURL]), c.speed = !1, c.jumpURL = ""
                                } catch (e) {
                                    c.expireCookie({
                                        key: "lsv",
                                        val: ""
                                    }), location.href = c.redirectURL()
                                }
                        }
                    }, c.jsonpRequest(), c
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
                    b.getAttribute("data-pagetimer") && (y.speed.loading = (new Date).getTime(), y.speed.cacheStatus = 0), b.setAttribute("data-query", encodeURIComponent(w)), setTimeout(function() {
                        window.scrollTo(0, 38)
                    }, 0)
                } else if (/inormal|ipassive|iact/.test(location.hash) || location.hash.indexOf("iview=skin") > -1 || (location.hash = ""), document.body.setAttribute("data-cur-page", "index"), c.ready(function() {
                        b.setAttribute("data-ref", "index_iphone"), a(), c.localStore({
                            type: "index"
                        })
                    }), !/#iact=wiseindex/.test(h.location.href) && !/#iview=skin/.test(h.location.href)) {
                    var $ = new Image;
                    $.src = "//hpd.baidu.com/v.gif?tid=13&ct=1&cst=1&logFrom=index&logInfo=index&" + b.getAttribute("data-prepath").replace(/#/g, "&") + "&sid=" + b.getAttribute("data-sids") + "&logid=" + h.sSession.logid + "&ref=index_iphone&r=l" + +new Date
                }
            }();;
        