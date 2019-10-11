(function(win, doc) {
    if (win.$wt) {
        return;
    }
    win.isIE = (function() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') !== -1) ? parseInt(myNav.split('msie')[1]) : false;
    })();
    win.$wt = function(s) {
        return document.querySelectorAll(s)
    };
    $wt.extend = function(o) {
        for (var i in o) {
            this[i] = o[i];
        }
    };
    $wt.extend({
        root: "https://europa.eu/webtools",
        isMobile: ('ontouchstart' in window),
        inProgress: false,
        components: {},
        css: {},
        dictionary: [],
        alias: {
            "twitter": "smk",
            "chart": "charts",
            "share": "sbkm",
            "maps": "map",
            "piwik": "analytics",
            "alert": "announcement"
        },
        force: function(P) {
            return (P.render || ["laco", "gnav", "announcement"].indexOf(P.service) !== -1) || (P.service === "sbkm" && P.selection);
        },
        ready: function(f) {
            /^(in|com)/.test(doc.readyState) ? f() : setTimeout($wt.ready, 0, f);
        },
        on: function(o, e, f) {
            (e === "load" && doc.readyState === "complete") ? f(): (o.addEventListener) ? o.addEventListener(e, f, false) : "";
        },
        insertBefore: function(from, to) {
            from.insertBefore(to, from.firstChild);
        },
        before: function(n, t) {
            (t.parentNode) ? t.parentNode.insertBefore(n, t): "";
        },
        after: function(n, t) {
            var p = t.parentNode;
            (p.lastchild === t) ? p.appendChild(n): p.insertBefore(n, t.nextSibling);
        },
        remove: function(e) {
            (e && e.parentNode) ? e.parentNode.removeChild(e): "";
        },
        trigger: function(d, n) {
            var e, v = document.createEvent;
            if (v) {
                e = document.createEvent("HTMLEvents");
                e.initEvent(n, true, true);
            } else {
                e = document.createEventObject();
                e.eventType = n;
            }
            e.eventName = n;
            if (v) {
                d.dispatchEvent(e);
            } else {
                d.fireEvent("on" + e.eventType, e);
            }
        },
        ext: function(s) {
            s = ((s || "").toLowerCase()).split("#")[0].split("?")[0];
            return ((/[.]/.exec(s)) ? (/[^.]+$/.exec(s)) : undefined) + "";
        },
        visible: function(e) {
            var c = e.getBoundingClientRect();
            return (c.top >= -200 && c.top <= (win.innerHeight || doc.documentElement.clientHeight) + 200);
        },
        mergeParams: function(defaultJSON, customJSON) {
            (function r(a, b) {
                for (var k in b) {
                    if (b.hasOwnProperty(k)) {
                        if (!a[k] && a[k] !== '' && a[k] !== 0) {
                            a[k] = undefined;
                        }
                        if (typeof b[k] === "function" || typeof b[k] === "string" || typeof b[k] === "number" || typeof b[k] === "boolean" || b[k] === null || (typeof b[k] === "object" && (typeof a[k] === "string" || typeof a[k] === "number" || typeof a[k] === "boolean"))) {
                            a[k] = b[k];
                        } else if (typeof b[k] === "object") {
                            if (!a[k]) {
                                if (b[k].length !== undefined) {
                                    a[k] = [];
                                } else {
                                    a[k] = {};
                                }
                            }
                            r(a[k], b[k]);
                        }
                    }
                }
            }(defaultJSON, customJSON));
            return defaultJSON;
        },
        compliant: function(params, alias) {
            function from(node, path, value) {
                if (typeof path === "string") {
                    return from(node, path.split("."), value);
                }
                var name = path[0];
                var next = path[1];
                var size = path.length;
                if (value) {
                    if (node[name]) {
                        if (!node[name][next]) {
                            if (size === 1) {
                                node[name] = value;
                                return;
                            } else if (typeof node[name] === "object") {
                                node[name][next] = {};
                            } else {
                                node[name] = {};
                                node[name][next] = {};
                            }
                            from(node[name], path.slice(1), value);
                        }
                    } else {
                        node[name] = {};
                        from(node, path, value);
                    }
                } else if (path.length === 1) {
                    if (node[name]) {
                        return node[name];
                    }
                } else if (path.length === 0) {
                    return node;
                } else if (node[name]) {
                    return from(node[name], path.slice(1));
                }
                return "UNKNOW";
            }
            var toChange = (function(c) {
                for (var x in alias) {
                    var value = from(params, x);
                    if (value !== "UNKNOW") {
                        c[alias[x]] = value;
                    }
                }
                return c;
            })({});
            for (var x in toChange) {
                from(params, x, toChange[x]);
            }
            return params;
        },
        include: function(srcFile, callback, ext, forceReload) {
            if (!$wt.isLoad) {
                $wt.isLoad = [];
            }
            var i, s = srcFile;
            var f = callback;
            var t = ($wt.isLoad[s]) ? true : false;
            var j, e, h, r;
            if (t === false || forceReload) {
                e = (ext) ? ext : $wt.ext(s);
                if (e === "css") {
                    i = doc.createElement("link");
                    i.setAttribute("type", "text/css");
                    i.setAttribute("rel", "stylesheet");
                    i.setAttribute("media", "all");
                    h = doc.getElementsByTagName("head")[0];
                } else {
                    i = doc.createElement("script");
                    i.setAttribute("type", "text/javascript");
                    h = doc.getElementsByTagName("body")[0];
                }
                if (typeof f === "function") {
                    if (isIE) {
                        i.onreadystatechange = function() {
                            j = this.readyState;
                            if (j === "loaded" || j === "complete") {
                                f(i);
                                $wt.isLoad[s] = i;
                            }
                        };
                    } else {
                        i.onload = function() {
                            f(i);
                            $wt.isLoad[s] = i;
                        }
                    }
                    i.onerror = function() {
                        f("error");
                        $wt.isLoad[s] = i;
                    };
                }
                i.setAttribute((e === "css") ? "href" : "src", s);
                h.appendChild(i);
            } else if (typeof f === "function") {
                f();
            }
            return i;
        },
        load: function(s, c) {
            var toLoad = (typeof s === "string") ? [s] : s;
            $wt.include(toLoad[0], function() {
                toLoad.shift();
                if (toLoad.length === 0) {
                    if (typeof c === "function") {
                        c();
                    }
                    return;
                }
                $wt.load(toLoad, c);
            }, $wt.ext(toLoad[0]));
        },
        lang: function(d) {
            if (doc.lang) {
                return doc.lang;
            }
            var l = d || "en";
            var a = doc.getElementsByTagName("html");
            var n = doc.querySelectorAll("meta[http-equiv='Content-Language']");
            var g = (win.location + "").replace(/(.*)(_|-|::|=|\/)([a-zA-Z]{2})(\.|&|#|$|\?|\/)(.*)/ig, "$3");
            if (a[0] && a[0].lang) {
                l = (a[0].lang).split("_")[0].split("-")[0];
            } else if (n[0]) {
                l = n[0].content;
            } else if (g.length === 2) {
                l = g.toLowerCase();
            }
            doc.lang = l;
            return l;
        },
        getUrlParams: function(s) {
            var p = {};
            (s || window.location.search).replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
                value = decodeURIComponent(value);
                if (key.indexOf("[") !== -1) {
                    var k = key.replace("[]", "");
                    if (!p[k]) {
                        p[k] = [];
                    }
                    p[k].push(value);
                } else {
                    p[key] = value;
                }
            });
            return p;
        },
        next: function(E) {
            try {
                var ready = (E.snippet || E).params.events.onready;
                (window[ready] || ready)(E);
            } catch (e) {}
            $wt.inProgress = false;
            $wt.collect();
        },
        id: function() {
            return Math.random().toString(36).substr(2, 16);
        },
        uniqueID: function(E) {
            if (E.params) {
                $wt.components[(E.params.name || ((E.params.service || E.params.utility) + "_" + $wt.id()))] = E;
            }
        },
        regenerate: function(N) {
            [].forEach.call(doc.querySelectorAll("script[type='application/json']"), function(E) {
                if (E.reset) {
                    E.reset();
                }
            });
            $wt.components = [];
            $wt.collect();
        },
        collect: function() {
            if (isIE && isIE < 9) {
                return;
            }
            var U = [],
                R = [],
                S = [];
            [].forEach.call(doc.querySelectorAll("script[type='application/json']"), function(E) {
                if (!E.isProcess && !E.getAttribute("data-process")) {
                    if (!E.params) {
                        try {
                            E.params = JSON.parse(E.innerHTML);
                        } catch (e) {
                            E.isProcess = true;
                            console.log("WTINFO:JSON is not correctly formatted:", E);
                            return;
                        }
                        $wt.uniqueID(E);
                        E.params.render = $wt.force(E.params);
                    }
                    if (!E.container) {
                        var t = document.getElementById(E.params.renderTo || false);
                        if (t) {
                            E.container = t;
                            delete E.params.renderTo;
                            E.container.innerHTML = '';
                            E.container.className = "wtWidgets wtWaiting";
                        } else {
                            E.container = document.createElement("div");
                            E.container.className = "wtWidgets wtWaiting";
                            $wt.before(E.container, E);
                        }
                    }
                    if (E.params.service === "search") {
                        E.container.style.height = "52px";
                    }
                }
                if (!E.isProcess && !E.getAttribute("data-run")) {
                    if (E.params.utility) {
                        U.push(E);
                    } else if (E.params.render) {
                        R.push(E);
                    } else if ($wt.visible(E.container)) {
                        S.push(E);
                    }
                }
            });
            var N = U[0] || R[0] || S[0];
            if (N) {
                N.setAttribute("data-process", true);
                $wt.process(N);
            }
        },
        storeStatistics: function() {
            if (this.statsSending || (window.location.protocol !== 'http:' && window.location.protocol !== 'https:') || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                return;
            }
            this.statsSending = true;
            var stats = {};
            stats["url"] = window.location.protocol + "//" + window.location.hostname + window.location.pathname;
            var allComponents = {};
            for (var key in $wt.components) {
                var component = $wt.components[key];
                allComponents[key] = {
                    service: component.params.name || component.params.utility || component.params.service,
                    version: component.params.version || "none",
                    provider: component.params.provider || "none"
                };
            }
            stats["components"] = JSON.stringify(allComponents);
            if (stats.components === '{}') {
                return;
            }
            $wt.ajax({
                "url": $wt.root + '/rest/service-inventory/index.php',
                "data": stats
            });
        },
        process: function(E, P) {
            if (!E || $wt.inProgress) {
                return;
            }
            P = E.params || P || {};
            var self = this;
            var N = P.service || P.utility || false;
            N = $wt.alias[N] || N;
            if (!N) {
                console.log("WTINFO:Unknow component:", P);
                return;
            }
            $wt.inProgress = true;
            if (!E.container) {
                E.container = document.createElement("div");
                $wt.before(E.container, E);
            }
            E.reset = function() {
                if (E.container && E.params && !E.params.utility) {
                    var API = $wt[E.params.service];
                    if (API && API.onRemove) {
                        [].forEach.call(API.onRemove(), function(e) {
                            $wt.remove(e);
                        });
                    }
                    E.remove();
                    E.container = false;
                    E.isProcess = false;
                    E.params = false;
                    E.removeAttribute("data-run");
                    E.removeAttribute("data-process");
                }
            };
            E.remove = function() {
                $wt.remove(E.container);
                E.container = false;
            };
            E.regenerate = function() {
                E.reset();
                $wt[N].run(E.container, P);
            };
            if (E.container) {
                E.container.params = P;
                E.container.className = N + " wt wt-" + N + " " + (P["class"] || "");
            }
            E.container.snippet = E;
            if (N !== "gnav" && !P.utility && !self.css["__" + N]) {
                var GETCSS = $wt.root + "/webtools." + N + ".css";
                var NIELS = [];
                (Object.keys(self.css).length === 0) ? NIELS.push("utilities=true"): "";
                ((P.version) ? NIELS.push("version=" + P.version) : "");
                if (NIELS.length) {
                    GETCSS += "?" + NIELS.join("&");
                }
                self.css["__" + N] = true;
                $wt.include(GETCSS);
            }
            var runMe = function() {
                if ($wt[N] && $wt[N].run && !E.getAttribute("data-run")) {
                    E.setAttribute("data-run", true);
                    $wt[N].run(E.container, P);
                }
            };
            var GETJS = $wt.root + "/webtools." + N + ".js";
            if (P.version) {
                GETJS += "?version=" + P.version;
            }
            $wt.include(GETJS, function(msg) {
                if (msg === "error") {
                    console.log("WTERROR:'" + N + "' doesn't exist!");
                    $wt.process.start = false;
                    $wt.remove(E.container);
                    $wt.remove(E);
                    self.next();
                } else if ($wt[N] && $wt[N].run) {
                    runMe();
                }
            }, "js");
        },
        render: function(n, p) {
            var createSnippet = function(P) {
                var s = document.createElement("script");
                s.type = "application/json";
                s.params = P;
                s.innerHTML = JSON.stringify(P);
                return s;
            };
            var C = false;
            if ($wt.components[n]) {
                C = $wt.components[n];
            } else if (typeof n === "string") {
                C = document.querySelectorAll("#" + n + ",." + n);
                C = C[0] || false;
            } else if (typeof n === "object") {
                C = n;
            }
            if (!C) {
                console.log("WTINFO:Your container doesn't exist.");
                return;
            }
            var P = $wt.mergeParams((C.params || {}), (p || {}));
            P.render = true;
            if (!C.container) {
                var S = createSnippet(P);
                C.innerHTML = "";
                C.appendChild(S);
                $wt.uniqueID(S);
            } else if (C.container && p) {
                C.reset();
                C.params = P;
                C.innerHTML = JSON.stringify(P);
                C.isProcess = false;
                $wt.uniqueID(C);
            } else if (C.isProcess && !p) {
                C.container.innerHTML = "";
                $wt[C.params.service].run(C);
            } else if (C.params && C.params.service && !p) {}
            $wt.collect();
        },
        frame: {
            init: function() {
                if (top.window !== window) {
                    if (window.name.indexOf("WT_FRAME_") !== -1) {
                        var O = {
                            position: "absolute",
                            left: 0,
                            right: 0,
                            display: "inline-block",
                            margin: 0,
                            overflow: "hidden"
                        };
                        for (var x in O) {
                            if (document.body) {
                                document.body.style[x] = O[x];
                            }
                        }
                        $wt.on(window, "load", function() {
                            $wt.frame.resize();
                            $wt.on(window, "resize", $wt.frame.resize);
                            $wt.on(window, "orientationchange", $wt.frame.resize);
                            if ("MutationObserver" in window) {
                                var O = new MutationObserver($wt.frame.resize);
                                O.observe(document.body, {
                                    childList: true,
                                    subtree: true
                                });
                            }
                        });
                        $wt.on(document.getElementById('nexteuropasearch__search-results') || window, 'click', function(e) {
                            var e = window.event || e;
                            var t = e.target || e.srcElement;
                            while (t && !t.href) {
                                t = t.parentNode;
                            }
                            if (t && t.href && !t.getAttribute("aria-controls") && !t.isTracked && !t.href.match(/^(javascript|mailto|#|sms)/i) && ($wt.urlParams['render'] === "iframe" && t.href.indexOf('europa.eu/search') < 0)) {
                                e.preventDefault();
                                e.stopPropagation();
                                window.parent.postMessage({
                                    service: 'frame-analytics',
                                    link: t.href
                                }, '*');
                                setTimeout(function() {
                                    t.isTracked = true;
                                    t.click();
                                }, 350);
                            }
                        });
                        var isSearchPage = document.getElementById('internal-search');
                        if (isSearchPage) {
                            var countElement = document.querySelector("meta[property='nexteuropasearch:count']");
                            var count = countElement && +countElement.getAttribute("content") || 0;
                            parent.postMessage({
                                service: "frame-search-track",
                                keyword: isSearchPage.value,
                                count: count,
                                location: location.href
                            }, "*");
                        }
                    }
                } else {
                    $wt.on(window, "message", $wt.frame.parent);
                }
            },
            resize: function() {
                if (top.window === window && !parent.postMessage) {
                    return;
                }
                parent.postMessage({
                    service: "frame",
                    name: window.name,
                    height: document.body.offsetHeight
                }, "*");
            },
            parent: function(e) {
                var d = e.data || {};
                if (d.service === 'frame-search-track') {
                    if ($wt.analytics) {
                        $wt.analytics.parameters.search = {
                            keyword: d.keyword,
                            category: "Europa Search",
                            count: d.count
                        };
                        $wt.trackPageView($wt.analytics.parameters);
                        window.name = d.location;
                    }
                } else if (d.service === 'frame-analytics') {
                    $wt.trackLinks(d.link);
                } else if (d.service === "frame") {
                    var x = d.name;
                    var h = d.height;
                    var d = 0;
                    var I = document.querySelectorAll("iframe[name='" + x + "']")[0];
                    var W = I.offsetWidth;
                    var P = I.previousWidth;
                    if (W === P && I.offsetHeight === h) {
                        I.previousHeight = h;
                        I.previousWidth = W;
                    } else {
                        if (W > P && I.previousHeight) {
                            d = Math.round((W - P) * (h / W));
                            h = (((I.previousHeight) - d));
                        }
                        I.previousHeight = h;
                        I.previousWidth = I.offsetWidth;
                        I.height = h;
                        I.setAttribute("style", (I.getAttribute("style") || "").split(";height:")[0] + ";height:" + h + "px !important");
                    }
                }
            }
        },
        trackLinks: function() {},
        trackPageView: function(params) {
            $wt.trackPageViewParams = params || {};
        },
        isArray: function(o) {
            return (Object.prototype.toString.call(o) === "[object Array]");
        },
        arrayToUrl: function(a) {
            var n = "";
            for (var key in a) {
                n += "&" + key + "=" + a[key];
            }
            return n;
        },
        absolute: function(s, o) {
            var a = document.createElement('a');
            a.href = s;
            return (o) ? a : a.href;
        },
        template: function(t, e) {
            return t.replace(/{([\w_\-]+)}/g, function(k, n) {
                return e[n] || "";
            });
        },
        alphaOrder: function(dataSrc, options) {
            if (!$wt.isArray(dataSrc)) {
                console.log("WTERROR:alphaOrder need a real ARRAY in first argument!");
                return;
            }
            var orderConf = {
                    "default": "aAªáÁàÀăĂâÂåÅǻǺäÄǟǞãÃǡǠąĄāĀæÆǽǼǣǢbBḃḂcCćĆĉĈčČċĊçÇ℅dDďĎḋḊđĐðÐeEéÉèÈĕĔêÊěĚëËęĘēĒėĖəƏfFḟḞƒﬁﬂgGğĞĝĜǧǦġĠģĢǥǤhHĥĤȟȞħĦiIíÍìÌĭĬîÎïÏĩĨİįĮīĪıĳĲjJĵĴkKǩǨķĶĸlLĺĹľĽļĻłŁŀĿmMṁṀnⁿNńŃňŇñÑņŅŋŊŉ№oOºóÓòÒŏŎôÔöÖőŐõÕǫǪǭǬōŌøØǿǾœŒpPṗṖqQrRŕŔřŘŗŖɼsSśŚŝŜšŠṡṠşŞșȘſẛßtTťŤṫṪţŢțȚŧŦ™uUúÚùÙŭŬûÛůŮüÜűŰũŨųŲūŪvVwWẃẂẁẀŵŴẅẄxXyYýÝỳỲŷŶÿŸzZźŹžŽżŻʒƷǯǮ",
                    "greek": "αΑἀἈἄἌἂἊἆἎἁἉἅἍἃἋἇἏάΆὰᾺᾶάΆᾳᾼᾀᾈᾄᾌᾂᾊᾆᾎᾁᾉᾅᾍᾃᾋᾇᾏᾴᾲᾷᾰᾸᾱᾹβϐΒγΓδΔεΕἐἘἔἜἒἚἑἙἕἝἓἛέΈὲῈέΈϝϜϛϚζΖηΗἠἨἤἬἢἪἡἩἥἭἣἫἧἯήΉὴῊῆἦἮήΉῃῌᾐᾘᾔᾜᾒᾚᾖᾞᾑᾙᾕᾝᾓᾛᾗᾟῄῂῇθϑΘιιΙἰἸἴἼἲἺἶἾἱἹἵἽἳἻἷἿίΊὶῚῖίΊῐῘϊΪΐῒῗΐῑῙκϰΚϗλΛμµΜνΝξΞοΟὀὈὄὌὂὊὁὉὅὍὃὋόΌὸῸόΌπϖΠϟϞρϱΡῤῥῬσςΣτΤυΥὐὔὒὖὑὙὕὝὓὛὗὟύΎὺῪῦύΎῠῨϋΫΰῢῧΰῡῩφϕΦχΧψΨωΩΩὠὨὤὬὢὪὦὮὡὩὥὭὣὫὧὯώΏὼῺῶώΏῳῼᾠᾨᾤᾬᾢᾪᾦᾮᾡᾩᾥᾭᾣᾫᾧᾯῴῲῷϡϠ",
                    "cyrillic": "аАӑӐӓӒәӘӛӚӕӔбБвВгГґҐғҒҕҔдДђЂѓЃҙҘеЕѐЀёЁӗӖєЄжЖӂӁӝӜҗҖзЗӟӞѕЅӡӠиИѝЍӣӢӥӤіІїЇйЙјЈкКқҚӄӃҡҠҟҞҝҜлЛљЉмМнНңҢӈӇҥҤњЊоОӧӦөӨӫӪпПҧҦрРсСҫҪтТҭҬћЋќЌуУӯӮўЎӱӰӳӲүҮұҰфФхХҳҲһҺцЦҵҴчЧӵӴҷҶӌӋҹҸҽҼҿҾџЏшШщЩъЪыЫӹӸьЬэЭюЮяЯҩҨӀ"
                },
                options = options || {
                    lang: doc.lang || "default"
                },
                langGroup = {
                    "el": "greek",
                    "bg": "cyrillic",
                    "uk": "cyrillic",
                    "mk": "cyrillic",
                    "sr": "cyrillic"
                },
                orderLang = {
                    "default": ["default", "greek", "cyrillic"],
                    "greek": ["greek", "default", "cyrillic"],
                    "cyrillic": ["cyrillic", "default", "greek"]
                };
            dataSrc.sort();
            var lang = langGroup[options.lang] || "default";
            var p = orderLang[lang];
            var o = '';
            var word = '';
            var order = [];
            var tmp = [];
            var index = '';
            for (var val in p) {
                o = orderConf[p[val]].split("");
                for (var k in o) {
                    for (var kk in dataSrc) {
                        word = dataSrc[kk];
                        if (word.charCodeAt(0) === o[k].charCodeAt(0)) {
                            order.push(dataSrc[kk]);
                            tmp.push(dataSrc[kk]);
                        }
                    }
                }
                for (var k in tmp) {
                    index = dataSrc.indexOf(tmp[k]);
                    dataSrc.splice(index, 1);
                }
                tmp = [];
            }
            return order.concat(dataSrc);
        },
        isjsonstat: function(j) {
            return ((typeof j === "object") && (typeof j.dimension === "object") && (typeof j.extension === "object") && (typeof j.id === "object") && (typeof j.source === "string" && j.source === "Eurostat"));
        },
        shadeColor: function(color, percent) {
            var f = parseInt(color.slice(1), 16);
            var t = percent < (0) ? 0 : 255;
            var p = percent < (0) ? percent * -1 : percent;
            var R = f >> 16;
            var G = f >> 8 & 0x00FF;
            var B = f & 0x0000FF;
            return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
        },
        label: function(l, a, b, n, x) {
            var d = $wt.dictionary[l];
            var t = "";
            b = b || doc.lang;
            n = n || [];
            x = x || 0;
            if (d) {
                var l = d[b];
                if (l) {
                    var s = l[a];
                    if (s) {
                        t = (typeof s === "string") ? s : s[x];
                        if (typeof s === "object") {
                            return s;
                        } else if (t === "string") {
                            t = t.replace(/{(\d+)}/g, function(match, k) {
                                return (typeof n[k - 1] !== "undefined") ? n[k - 1] : "";
                            });
                        }
                    }
                }
                if (t === "" || !t) {
                    if (d["en"]) {
                        if (d["en"][a]) {
                            t = d["en"][a];
                        }
                    }
                }
            }
            return t || "UNKNOWN LABEL";
        },
        addTranslation: function(json, mode) {
            var t = $wt.dictionary;
            var n = json;
            for (var i in n) {
                if (typeof t[i] !== "object") {
                    t[i] = {};
                }
                for (var l in n[i]) {
                    t[i][l] = n[i][l];
                }
            }
            $wt.dictionary = t;
        },
        mergeTranslation: function(json) {
            var t = $wt.dictionary;
            var n = json;
            for (var i in n) {
                if (typeof t[i] !== "object") {
                    t[i] = {};
                }
                t[i] = $wt.mergeParams(t[i], json[i]);
            }
            $wt.dictionary = t;
        },
        jsonp: function(url, callback) {
            if (!$wt.json_retval) {
                $wt.json_retval = [];
            }
            var extra_url = ($wt.urlParams && $wt.urlParams["wtenv"]) ? "&wtenv=" + $wt.urlParams["wtenv"] : "";
            extra_url += ($wt.urlParams && $wt.urlParams["wtdebug"]) ? "&wtdebug=" + $wt.urlParams["wtdebug"] : "";
            var url = $wt.absolute(url);
            if (url.indexOf("?") !== -1) {
                url = encodeURIComponent(url);
            }
            var kemopi = (url.indexOf("countries.php") !== -1);
            $wt.jsonpCounter = $wt.jsonpCounter || 68448510;
            var id = (kemopi) ? ($wt.jsonpCounter++) : Math.random();
            var u = ($wt.root + "/jsonp.php?url=" + url) + "&wtid=" + id;
            var s = document.createElement("script");
            if (kemopi) {
                u += "&kemopi=enabled";
            }
            s.setAttribute("type", "text/javascript");
            s.setAttribute("src", u + extra_url);

            function success(json) {
                if (json.wtstatus.success === 0) {
                    callback(json, json.wtstatus.status);
                    return;
                }
                callback(json);
            }
            if (isIE) {
                s.onreadystatechange = function() {
                    var j = this.readyState;
                    if (j === "loaded" || j === "complete") {
                        success($wt.json_retval[id]);
                    }
                };
            } else {
                s.onload = function() {
                    success($wt.json_retval[id]);
                };
            }
            s.onerror = function() {
                callback({}, "error");
            };
            h = document.getElementsByTagName("body")[0];
            h.appendChild(s);
            return s;
        },
        jsonstat: function(params) {
            opt = $wt.mergeParams({
                from: false,
                ready: false,
                to: false,
                categories: false,
                sheets: false,
                series: false
            }, params);
            var from = opt.from;
            var to = opt.to;
            var fnc = opt.ready;
            var cat = opt.categories;
            var series = opt.series;
            var sheets = opt.sheets;
            if (!from) {
                console.log("WTERROR:jsonstat - 'from' parameter is missing.");
                return;
            } else if (typeof fnc !== "function") {
                console.log("WTERROR:jsonstat - 'ready' parameter is missing.");
                return;
            }
            var sanitizeLabels = function(jsonstat) {
                try {
                    jsonstat.dimension.geo.category.label["DE"] = jsonstat.dimension.geo.category.label["DE"].replace(/Germany +\(until.+/gi, "Germany").replace(/Allemagne +\(jusqu.+/gi, "Allemagne").replace(/Deutschland +\(bis.+/gi, "Deutschland");
                } catch (err) {}
                return jsonstat;
            };
            var convert = function(json) {
                json = sanitizeLabels(json);
                var jsonStat = JSONstat(json);
                if (to === "html") {
                    jsonStat = JSONstatUtils.datalist(jsonStat);
                } else if (to === "csv") {
                    jsonStat = JSONstatUtils.toCSV(jsonStat);
                } else if (to === "lasko") {
                    jsonStat = $wt.toLasko(jsonStat, cat, series, sheets);
                }
                fnc(jsonStat, opt);
            };
            var process = function() {
                if (!window.JSONstat) {
                    console.log("WTERROR:jsonstat - 'libs' was not loaded correctly.");
                    return
                }(typeof from === "object") ? convert(from): $wt.jsonp(from, function(json, error) {
                    (!error) ? convert(json): console.log("WTERROR:jsonstat - request failed on url:\n", from);
                });
            };
            $wt.include($wt.root + "/libs/json-stat/jsonstat.php", process, "js");
        },
        ajax: function(c) {
            var u = c["url"];
            var e = c["error"];
            var s = c["success"];
            var d = c["data"];
            var f = c["dataType"];
            var credential = c["withCredentials"] || false;
            var m = "GET";
            if (u !== "" && u !== undefined && u !== null) {
                if (d) {
                    m = 'POST';
                }
                if (!f) {
                    f = "application/x-www-form-urlencoded";
                }
                var r = (function() {
                    var x = false;
                    var w = window;
                    if (w.XMLHttpRequest) {
                        x = new XMLHttpRequest();
                    } else if (w.ActiveXObject) {
                        x = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    return x;
                })();
                if (!r) {
                    return;
                }
                u = u.replace(/&amp;/ig, "&");
                r.onreadystatechange = function() {
                    if (r.readyState === 4) {
                        if (r.status !== 200 && r.status !== 304) {
                            if (typeof e === "function") {
                                e(c);
                            }
                        } else {
                            if (typeof s === "function") {
                                s(r.responseText, r.responseXML, c);
                            } else {
                                return {
                                    txt: r.responseText,
                                    xml: r.responseXML
                                };
                            }
                        }
                    }
                };
                r.open(m, u, true);
                if (credential) {
                    r.withCredentials = true;
                }
                if (m === 'POST') {
                    r.setRequestHeader("Content-Type", f);
                    var url = '';
                    for (var prop in d) {
                        url += encodeURIComponent(prop) + '=' + encodeURIComponent(d[prop]) + '&';
                    }
                    d = url.substring(0, url.length - 1);
                    r.send(d);
                } else {
                    r.send(null);
                }
            }
        },
        post: function(url, params) {
            if (!params.target || params.target === "iframe") {
                var ifrm = document.createElement("iframe");
                ifrm.name = "phiflochri";
                ifrm.style.display = "none";
                $wt.after(ifrm, document.body);
            }
            var form = document.createElement("form");
            form.method = "post";
            form.style.display = "none";
            form.action = url;
            form.target = params.target || "phiflochri";

            function populateInput(n, v) {
                if (Array === v.constructor) {
                    for (var i = 0, l = v.length; i < l; i++) {
                        populateInput(n + "[" + i + "]", v[i]);
                    }
                } else if (v) {
                    var inp = document.createElement("INPUT");
                    inp.type = "hidden";
                    inp.name = n;
                    inp.value = decodeURIComponent(v);
                    form.appendChild(inp);
                }
            }
            for (var name in params) {
                populateInput(name, params[name]);
            }
            $wt.after(form, document.body);
            form.submit();
        },
        pop: function(c) {
            c = c || {};
            var currentFocusableElement = doc.activeElement || false;
            doc.body.setAttribute("aria-hidden", true);
            $wt.pop.close = function() {
                $wt.pop.wtOverlayer.style.display = "none";
                $wt.remove($wt.pop.wtPopup);
                doc.body.removeAttribute("aria-hidden");
                if (currentFocusableElement) {
                    currentFocusableElement.focus();
                }
                if (typeof $wt.pop.wtPopup.onClose === "function") {
                    $wt.pop.wtPopup.onClose();
                }
            };
            if (!$wt.pop.wtOverlayer) {
                $wt.pop.wtOverlayer = doc.createElement("div");
                $wt.pop.wtOverlayer.className = "wtOverlayer";
                $wt.after($wt.pop.wtOverlayer, doc.body);
                $wt.on(document, "keydown", function(evt) {
                    evt = evt || window.event;
                    if (evt.keyCode === 27) {
                        $wt.pop.close();
                    }
                });
                $wt.on($wt.pop.wtOverlayer, "click", $wt.pop.close);
            }
            $wt.pop.wtOverlayer.style.display = "block";
            $wt.pop.wtPopup = document.createElement("div");
            $wt.pop.wtPopup.className = "wtPopup " + ((c["fullscreen"]) ? "wtPopupFullscreen " : "") + c["class"];
            $wt.after($wt.pop.wtPopup, $wt.pop.wtOverlayer);
            $wt.pop.wtPopup.setAttribute("tabindex", "0");
            $wt.pop.wtPopup.setAttribute("role", "dialog");
            $wt.pop.wtPopup.setAttribute("aria-describedby", "modalDescription");
            $wt.pop.wtPopup.dialogDesc = doc.createElement("div");
            $wt.pop.wtPopup.dialogDesc.id = "modalDescription";
            $wt.pop.wtPopup.dialogDesc.className = "offscreen";
            $wt.pop.wtPopup.appendChild($wt.pop.wtPopup.dialogDesc);
            $wt.pop.wtPopup.dialogDesc.innerHTML = "Escape will cancel and close the window";
            var hh = c["head"] || c["title"];
            var hh = (hh) ? "<h1><span>" + hh + "</span></h1>" : "<h1 aria-hidden='true'>&nbsp;</h1>";
            $wt.pop.wtPopup.head = doc.createElement("div");
            $wt.pop.wtPopup.head.className = "wtPopupHead";
            $wt.pop.wtPopup.head.innerHTML = hh;
            $wt.pop.wtPopup.appendChild($wt.pop.wtPopup.head);
            $wt.pop.wtPopup.content = doc.createElement("div");
            $wt.pop.wtPopup.content.className = "wtPopupContent";
            $wt.pop.wtPopup.content.innerHTML = (c["content"]) ? c["content"] : "";
            $wt.pop.wtPopup.appendChild($wt.pop.wtPopup.content);
            $wt.pop.wtPopup.footer = doc.createElement("div");
            $wt.pop.wtPopup.footer.className = "wtPopupFooter";
            $wt.pop.wtPopup.footer.innerHTML = (c["footer"]) ? c["footer"] : "";
            $wt.pop.wtPopup.appendChild($wt.pop.wtPopup.footer);
            var x = "Close";
            var k = doc.createElement("a");
            k.className = "wtPopupCloseBtn";
            k.title = x;
            k.href = "javascript:$wt.pop.close()";
            k.innerHTML = x + '<b><span>&times;</span></b>';
            $wt.pop.wtPopup.appendChild(k);
            $wt.pop.focusableElements = $wt.pop.wtPopup.querySelectorAll("a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,*[tabindex],*[contenteditable]");
            $wt.pop.wtPopup.focus();

            function trapTabKey(obj, evt) {
                if (evt.which === 9) {
                    $wt.pop.focusableElements = $wt.pop.wtPopup.querySelectorAll("a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,*[tabindex],*[contenteditable]");
                    var focusedItem = doc.activeElement;
                    var numberOfFocusableItems = $wt.pop.focusableElements.length;
                    var focusedItemIndex = 0;
                    for (var i = 0, l = numberOfFocusableItems; i < l; i++) {
                        if ($wt.pop.focusableElements[i] === focusedItem) {
                            focusedItemIndex = i;
                        }
                    }
                    if (evt.shiftKey) {
                        if (focusedItemIndex === 0) {
                            $wt.pop.focusableElements[$wt.pop.focusableElements.length - 1].focus();
                            evt.preventDefault();
                        }
                    } else {
                        if (focusedItemIndex === numberOfFocusableItems - 1) {
                            $wt.pop.focusableElements[0].focus();
                            evt.preventDefault();
                        }
                    }
                }
            }
            $wt.pop.wtPopup.onkeydown = function(e) {
                var e = e || window.event;
                trapTabKey(this, e);
            };
            if (typeof c["callback"] === "function") {
                c["callback"]($wt.pop.wtPopup);
            }
            return $wt.pop.wtPopup;
        }
    });
    $wt.extend({
        _queue: $wt.next,
        addEvent: $wt.on
    });
    $wt.ready(function() {
        $wt.urlParams = $wt.getUrlParams();
        $wt.root = "//europa.eu/webtools";
        if ((isIE && isIE < 9) || !doc.querySelectorAll) {
            $wt.include($wt.root + "/webtools.analytics.js?polyfill=true");
            return;
        }
        var a = $wt.urlParams["wtApi"] || false;
        if (a) {
            $wt.include($wt.root + "/webtools." + a + ".js?api=true", function() {
                $wt[a].api();
            });
            return;
        }
        $wt.root = (function() {
            var R = doc.querySelectorAll('script[src*="/load.js"]');
            var O = ((R[0]) ? R[0].src : "").split("/");
            return (O.slice(0, O.length - 1)).join("/");
        })();
        $wt.lang();
        $wt.collect();
        if (isIE) {
            setTimeout($wt.collect, 10);
        }
        $wt.on(win, "scroll", function() {
            clearTimeout($wt.timer);
            $wt.timer = setTimeout($wt.collect, 100);
        });
        var createPanel = function(e) {
            if ((((e.keyCode || e.which) === 87 && e.altKey) || $wt.urlParams["wtpanel"] === "open") && !$wt.panelDebug) {
                $wt.panelDebug = document.createElement("div");
                $wt.after($wt.panelDebug, document.body);
                $wt.render($wt.panelDebug, {
                    "service": "panel"
                });
            }
        };
        $wt.on(document, "keydown", createPanel);
        createPanel(this);
        if ($wt.urlParams["widgets"]) {
            var widgets = document.createElement("div");
            widgets.className = "wt-widgets wt-widgets-" + $wt.urlParams["widgets"];
            $wt.before(widgets, document.body.firstChild);
            $wt.render(widgets, {
                "service": $wt.urlParams["widgets"]
            });
        }
        $wt.frame.init();
    });
    $wt.on(win, "load", $wt.storeStatistics);
})(window, document);
$wt.extend({
    parse: {
        csv: function(data, callback) {
            var parseCsv = function(data) {
                if (data.split('.').pop() === "csv") {
                    console.log('WTERROR:please call $wt.parse.csv with a callback or give directly the data to the method.');
                    return false;
                }
                var lineDelimiter = /\r\n|\n/;
                var itemDelimiter = /\,|\;/;
                var tab = (data.split(lineDelimiter)).slice(0, -1);
                var values = [];
                for (var i = 0; i < tab.length; i++) {
                    var subtab = tab[i].split(itemDelimiter);
                    values.push(subtab);
                }
                return values;
            };
            if (typeof callback === "function") {
                callback(parseCsv(data));
            } else {
                return parseCsv(data);
            }
        }
    }
});
$wt.extend({
    jsonstatObject: function(options, values) {
        var opt = {};
        if (options) {
            if (!options.categories || !options.series) {
                console.log("WTERROR:categories and series parameters are mandatory.");
                return false;
            }
            opt.url = values.source;
            opt.categories = options.categories;
            opt.series = options.series;
            opt.order = options.order || "asc";
            if (options.sheets) {
                opt.sheets = options.sheets;
            }
            return opt;
        } else {
            console.log("WTERROR:you must define options parameter in order to define series and categories to use.");
            return false;
        }
    },
    jsonstatString: function(values) {
        var findSeriesOption = function(url) {
            var args = url.split("&");
            for (var i = 0; i < args.length; i++) {
                var pair = args[i].split("=");
                if ((pair[0]).toLowerCase() === "seriesopt") {
                    return pair[1];
                }
            }
        };
        var opt = {};
        opt.url = values;
        opt.categories = "geo";
        opt.series = findSeriesOption(values) || "unit";
        opt.order = "asc";
        opt.sheets = "time";
        return opt;
    },
    jsonstatOptExist: function(series, optObj) {
        var count = 0;
        for (var i in series) {
            if (series[i] === optObj.series || series[i] === optObj.categories) {
                count++;
            }
            if (optObj.sheets && series[i] === optObj.sheets) {
                count++;
            }
        }
        if ((optObj.sheets && count === 3) || (!optObj.sheets && count === 2)) {
            return true;
        }
        return false;
    },
    performLasko: function(data) {
        var result = {};
        var results = [];
        if (data.sheets) {
            for (var index = 0; index < data.sheets.length; index++) {
                if (data.sheets[index] && data.sheets[index].series) {
                    for (var j = 0; j < data.sheets[index].series.length; j++) {
                        var datas = data.sheets[index].series[j].data.slice(0);
                        for (var d = 0; d < datas.length; d++) {
                            var key = datas[d].id;
                            if (datas[d].value === 0) {
                                result[key] = 0;
                            } else {
                                result[key] = this.toNumber(datas[d].value);
                            }
                        }
                    }
                    results[index] = result;
                    result = {};
                }
            }
            return results;
        }
        return false;
    },
    toObject: function(data) {
        var values = {};
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var key = row[0];
            var value = this.toNumber(row[1]);
            var text = (row[2] && row[2].length > 0) ? row[2] : false;
            if (row.length < 2 || row.length > 3) {
                console.log("WTERROR:Column 1 -> NUTS_ID,column 2 -> values,column 3(optional)-> label");
                return false;
            }
            if (!this.keyValidate(key)) {
                console.log("WTERROR:The key " + key + " is not correctly formatted.");
                return false;
            }
            values[key] = (text) ? {
                "value": value,
                "text": text
            } : {
                "value": value
            };
        }
        return (values === {}) ? false : values;
    },
    objValidator: function(values) {
        var valConverted;
        for (var key in values) {
            if (!this.keyValidate(key)) {
                console.log("WTERROR:The key " + key + " is not correctly formatted.");
                return false;
            }
            if (typeof values[key] === "object" && values[key] !== null) {
                if (values[key].value === null || values[key].value === false || values[key].value === "") {
                    console.log(typeof null);
                    values[key] = {};
                    values[key].value = "no data";
                } else {
                    var validatedVal = this.valuesObjValidate(values[key]);
                    if (validatedVal) {
                        values[key].value = validatedVal;
                    } else {
                        return false;
                    }
                }
            } else {
                if (!values[key] && values[key] !== 0) {
                    values[key] = "no data";
                } else {
                    valConverted = this.toNumber(values[key]);
                    if (valConverted || valConverted === 0) {
                        values[key] = valConverted;
                    } else {
                        return false;
                    }
                }
            }
        }
        return values;
    },
    valuesObjValidate: function(value) {
        var valConverted;
        for (var key in value) {
            if (key === "value") {
                valConverted = this.toNumber(value[key]);
                if (!valConverted) {
                    return false;
                }
            } else if (key === "label" || key === "text") {
                if (typeof value[key] !== "string") {
                    console.log("WTERROR:The text value " + value[key] + " should be a string.");
                    return false;
                }
            } else {
                console.log("WTERROR:The key " + key + " is not allow(value and/or text only).");
                return false;
            }
        }
        return valConverted;
    },
    toNumber: function(value) {
        if (value === "false" || value === "null" || (!value && value !== 0)) {
            return "no data";
        }
        if (isNaN(Number(value))) {
            console.log("WTERROR:Incorrect value:" + value + ".");
            return false;
        }
        return parseFloat(value);
    },
    keyValidate: function(key) {
        var countryCode = key.substring(0, 2);
        if (key.length > 5 || !(/^[A-Z]*$/.test(countryCode))) {
            return false;
        }
        return true;
    },
    buildToolbar: function(data, obj, change) {
        var tools = document.createElement("div");
        tools.className = "wtMapTools";
        var bar = "";
        if (data.sheets && data.sheets.length > 1) {
            for (var sheetId = 0; sheetId < data.sheets.length; sheetId++) {
                bar += "<option value='" + sheetId + "'>" + data.sheets[sheetId].label + "</option>";
            }
        }
        if (bar !== "") {
            var select = document.createElement("select");
            select.tabIndex = 1;
            select.innerHTML = bar;
            select.className = "wtMapSelect";
            tools.appendChild(select);
            select.onchange = change;
            $wt.before(tools, obj._container);
        }
    }
});
$wt.globan = {
    run: function(config) {
        var hosts = /(.*\.europa\.eu$)|(^europa\.eu$)|(^localhost$)|(.*\.ep\.parl\.union\.eu$)|(^ep\.parl\.union\.eu$)/i;
        if (!location.hostname.match(hosts)) {
            console.log("WTINFO:Forbidden access. Only europa.eu websites have access to this service.");
            return;
        }
        if (($wt("#admin-menu,#toolbar-administration").length > 0) || !!(top.window !== window)) {
            return;
        }
        var browserTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
        var process = function(lng) {
            if (lng === "ar" || lng === "ur" || lng === "he") {
                var xhtml = ['<div id="globan" class="' + style + '">', '<div id="globan-container">', '<button id="globan-button" class="globan-dropdown-selector" aria-controls="globan-dropdown" aria-haspopup="true">' + $wt.label("globan", "button", lng) + '</button>', '<p class="globan-certificate">' + flag + '<span class="globan-approved">' + $wt.label("globan", "flag", lng) + '</span><span class="globan-approved-mobile">' + $wt.label("globan", "flagMobile", lng) + '</span></p>', '<div id="globan-dropdown" class="globan-dropdown-selector" aria-expanded="false">', '<p class="globan-dropdown-selector"><span class="globan-dropdown-selector">' + $wt.label("globan", "dropdown", lng) + '</p>' + link, '</div>', '</div>', '</div>'];
            } else {
                var xhtml = ['<div id="globan" class="' + style + '">', '<div id="globan-container">', '<p class="globan-certificate">' + flag + '<span class="globan-approved">' + $wt.label("globan", "flag", lng) + '</span><span class="globan-approved-mobile">' + $wt.label("globan", "flagMobile", lng) + '</span></p>', '<button id="globan-button" class="globan-dropdown-selector" aria-controls="globan-dropdown" aria-haspopup="true">' + $wt.label("globan", "button", lng) + '</button>', '<div id="globan-dropdown" class="globan-dropdown-selector" aria-expanded="false">', '<p class="globan-dropdown-selector"><span class="globan-dropdown-selector">' + $wt.label("globan", "dropdown", lng) + '</p>' + link, '</div>', '</div>', '</div>'];
            }
            var div = document.createElement('div');
            div.innerHTML = xhtml.join("");
            var body = document.body;
            body.insertBefore(div.firstChild, body.firstChild);
        };
        var events = function() {
            var button = document.getElementById("globan-button");
            var dropdown;
            var dropShow = function(e) {
                if (window.kevent || (e.type === "keydown" && (e.keyCode !== 13 && e.keyCode !== 32))) {
                    return;
                }
                button.focus();
                dropdown = document.getElementById('globan-dropdown');
                if (dropdown.getAttribute("aria-expanded") === "true") {
                    closeDropdown(true);
                } else {
                    closeDropdown(false);
                }
                window.kevent = true;
                setTimeout(function() {
                    window.kevent = false;
                }, 150);
                document.addEventListener((browserTouch) ? "touchend" : "click", canClose);
                document.addEventListener("keydown", canClose);
            };
            var closeDropdown = function(swap) {
                var header = dropdown.parentElement.parentElement || dropdown.parentNode.parentNode;
                if (swap) {
                    dropdown.setAttribute("aria-expanded", false);
                    dropdown.setAttribute("aria-hidden", true);
                    header.className = header.className.replace(/\b globan-show\b/g, "");
                } else {
                    dropdown.setAttribute("aria-expanded", true);
                    dropdown.setAttribute("aria-hidden", false);
                    header.className += " globan-show";
                }
            };
            var canClose = function(event) {
                var keep = (event.target.className !== "globan-dropdown-selector" && event.target.className !== "arabic");
                if (keep || event.keyCode === 27 || event.keyCode === 9) {
                    closeDropdown(true);
                    removeListener();
                } else {
                    button.focus();
                }
            };
            var removeListener = function() {
                document.removeEventListener((browserTouch) ? "touchend" : "click", canClose);
                document.removeEventListener("keydown", canClose);
            };
            button.addEventListener((browserTouch) ? "touchend" : "click", dropShow);
            button.addEventListener("keydown", dropShow);
        };
        var getLngLink = function(lng) {
            var euLng = ["bg", "cs", "da", "de", "el", "en", "es", "et", "fi", "fr", "ga", "hr", "hu", "it", "lt", "lv", "mv", "nl", "pl", "pt", "ro", "sk", "sl", "sv"];
            if (euLng.indexOf(lng) > -1) {
                return lng;
            }
            return "en";
        };
        if (/^[0-1]+$/.test(config.globan) && ((config.globan).length === 3 || (config.globan).length === 4)) {
            var cfg = config.globan.split('');
            var lng = config.lang || $wt.getUrlParams(location.href)["lang"] || document.lang;
            var ara = (lng === "ar" || lng === "ur" || lng === "he") ? "ar" : "";
            var css = $wt.root + "/services/globan/custom" + ara + ".css";
            var flag = (cfg[0] === "0") ? '' : '<img class="globan-flag" src="' + $wt.root + '/services/globan/icons/EU-logo-negative.svg" />';
            var style = (cfg[1] === "0") ? "light" : "dark";
            if (cfg[3] && cfg[3] === "1") {
                style += ' globan-position-fixed';
            }
            var link;
            $wt.include(css, function() {
                link = (cfg[2] === "0") ? '' : '<a href="//europa.eu/european-union/contact/institutions-bodies_' + getLngLink(lng) + '" class="globan-dropdown-selector">' + $wt.label("globan", "link", lng) + '</a>';
                process(lng);
                events();
            });
        }
    }
};
$wt.ready(function() {
    try {
        $wt.globan.run($wt.getUrlParams(document.querySelector('script[src*="/load.js"]').src));
    } catch (e) {
        console.log("WTERROR:" + e);
    }
});
$wt.extend({
    getFile: function(params) {
        params = $wt.mergeParams({
            url: false,
            type: false,
            options: {
                to: "jsonstat",
                categories: false,
                series: false,
                sheets: false
            },
            success: function() {},
            error: function() {}
        }, params);
        if (!params.url) {
            params.error("No url provided for getFile.");
            return;
        }
        var url = $wt.absolute(params.url, true);
        params.url = url.href;
        if (url.hostname === window.location.hostname) {
            $wt.ajax({
                url: params.url,
                success: params.success,
                error: function() {
                    params.error("Ajax request failed on url:\n" + params.url);
                }
            });
        } else if (params.type === "csv") {
            $wt.ajax({
                url: $wt.root + "/rest/requests/requestFiles.php?type=csv&url=" + encodeURIComponent(params.url),
                success: function(json) {
                    try {
                        json = JSON.parse(json);
                        if (!json.wtstatus.success) {
                            params.error("Ajax request failed on url:\n" + params.url);
                            return;
                        }
                        params.success(json.data);
                    } catch (e) {
                        params.error("The service seems down.")
                    }
                },
                error: function() {
                    params.error("Ajax request failed on url:\n" + params.url);
                }
            });
        } else if (params.type === "json") {
            $wt.jsonp(params.url, function(json, error) {
                if (error) {
                    params.error("JSONP request failed on url:\n" + params.url);
                    return;
                }
                delete json.wtstatus;
                params.success(json);
            });
        } else if (params.type === "jsonstat") {
            $wt.jsonstat($wt.mergeParams($wt.mergeParams(params, params.options), {
                from: params.url,
                ready: function(result) {
                    params.success(result);
                },
            }))
        } else {
            params.error("Unknown type for getting the file:\n" + params.url);
        }
    }
});
$wt.addTranslation({
    "globan": {
        "ar": {
            "flag": "\u0645\u0648\u0642\u0639 \u0648\u064a\u0628 \u0631\u0633\u0645\u064a \u0644\u0644\u0627\u062a\u062d\u0627\u062f \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a",
            "flagMobile": "\u0645\u0648\u0642\u0639 \u0648\u064a\u0628 \u0631\u0633\u0645\u064a \u0644\u0644\u0627\u062a\u062d\u0627\u062f \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a",
            "button": "<span class='arabic'>\u0643\u064a\u0641 \u062a\u0639\u0631\u0641\u061f<\/span>",
            "dropdown": "\u0643\u0644 \u0645\u0648\u0627\u0642\u0639 EU \u0627\u0644\u0631\u0633\u0645\u064a\u0629 \u0641\u064a <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "\u0634\u0627\u0647\u062f \u062c\u0645\u064a\u0639 \u0645\u0624\u0633\u0633\u0627\u062a \u0648\u0647\u064a\u0626\u0627\u062a EU."
        },
        "be": {
            "flag": "\u0410\u0444\u0456\u0446\u044b\u0439\u043d\u044b \u0441\u0430\u0439\u0442 \u0415\u045e\u0440\u0430\u043f\u0435\u0439\u0441\u043a\u0430\u0433\u0430 \u0421\u0430\u044e\u0437\u0430",
            "flagMobile": "\u0410\u0444\u0456\u0446\u044b\u0439\u043d\u044b \u0441\u0430\u0439\u0442 \u0415\u0421",
            "button": "\u042f\u043a \u0432\u044b \u0434\u0430\u0432\u0435\u0434\u0430\u043b\u0456\u0441\u044f?",
            "dropdown": "\u0414\u0430\u043c\u0435\u043d \u0434\u043b\u044f \u0441\u0430\u0439\u0442\u0430\u045e \u0415\u0421 - <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "\u0413\u043b\u044f\u0434\u0437\u0456 \u045e\u0441\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0456 \u043e\u0440\u0433\u0430\u043d\u044b \u0415\u0421."
        },
        "bg": {
            "flag": "\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u0435\u043d \u0443\u0435\u0431\u0441\u0430\u0439\u0442 \u043d\u0430 \u0415\u0432\u0440\u043e\u043f\u0435\u0439\u0441\u043a\u0438\u044f \u0441\u044a\u044e\u0437",
            "flagMobile": "\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u0435\u043d \u0443\u0435\u0431\u0441\u0430\u0439\u0442 \u043d\u0430 \u0415\u0421",
            "button": "\u041a\u0430\u043a \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u0435?",
            "dropdown": "\u0412\u0441\u0438\u0447\u043a\u0438 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u043d\u0438 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u043e\u0432\u0435 \u043d\u0430 \u0415\u0421 \u0441\u0435 \u043d\u0430\u043c\u0438\u0440\u0430\u0442 \u0432 \u0434\u043e\u043c\u0435\u0439\u043d\u0430 <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "\u0412\u0438\u0436\u0442\u0435 \u0432\u0441\u0438\u0447\u043a\u0438 \u0438\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u0438 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438 \u043d\u0430 \u0415\u0421."
        },
        "cs": {
            "flag": "Ofici\u00e1ln\u00ed internetov\u00e1 str\u00e1nka Evropsk\u00e9 unie",
            "flagMobile": "Ofici\u00e1ln\u00ed internetov\u00e1 str\u00e1nka EU",
            "button": "Jak to poznat?",
            "dropdown": "V\u0161echny ofici\u00e1ln\u00ed str\u00e1nky EU najdete pod dom\u00e9nou <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Zobrazit ostatn\u00ed org\u00e1ny a instituce EU."
        },
        "da": {
            "flag": "Et officielt EU-website",
            "flagMobile": "Officielt EU-website",
            "button": "Hvordan kan du vide det?",
            "dropdown": "Alle EU's officielle sites bruger dom\u00e6net <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Se alle EU's institutioner og organer."
        },
        "de": {
            "flag": "Eine offizielle Website der Europ\u00e4ischen Union",
            "flagMobile": "Offizielle Website der EU",
            "button": "Woran ist das zu erkennen?",
            "dropdown": "Alle offiziellen Websites der EU befinden sich in der Dom\u00e4ne <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Alle Institutionen und Einrichtungen der EU anzeigen."
        },
        "el": {
            "flag": "\u0395\u03c0\u03af\u03c3\u03b7\u03bc\u03bf\u03c2 \u03b9\u03c3\u03c4\u03cc\u03c4\u03bf\u03c0\u03bf\u03c2 \u03c4\u03b7\u03c2 \u0395\u03c5\u03c1\u03c9\u03c0\u03b1\u03ca\u03ba\u03ae\u03c2 \u0388\u03bd\u03c9\u03c3\u03b7\u03c2",
            "flagMobile": "\u0395\u03c0\u03af\u03c3\u03b7\u03bc\u03bf\u03c2 \u03b9\u03c3\u03c4\u03cc\u03c4\u03bf\u03c0\u03bf\u03c2 \u03c4\u03b7\u03c2 \u0395\u0395",
            "button": "\u03a0\u03ce\u03c2 \u03c4\u03bf \u03b3\u03bd\u03c9\u03c1\u03af\u03b6\u03b5\u03c4\u03b5;",
            "dropdown": "\u038c\u03bb\u03bf\u03b9 \u03bf\u03b9 \u03b5\u03c0\u03af\u03c3\u03b7\u03bc\u03bf\u03b9 \u03b9\u03c3\u03c4\u03cc\u03c4\u03bf\u03c0\u03bf\u03b9 \u03c4\u03b7\u03c2 \u0395\u0395 \u03b2\u03c1\u03af\u03c3\u03ba\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c3\u03c4\u03bf\u03bd \u03c4\u03bf\u03bc\u03ad\u03b1 <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "\u0394\u03b5\u03af\u03c4\u03b5 \u03cc\u03bb\u03b1 \u03c4\u03b1 \u03cc\u03c1\u03b3\u03b1\u03bd\u03b1 \u03ba\u03b1\u03b9 \u03c4\u03bf\u03c5\u03c2 \u03bf\u03c1\u03b3\u03b1\u03bd\u03b9\u03c3\u03bc\u03bf\u03cd\u03c2 \u03c4\u03b7\u03c2 \u0395\u0395."
        },
        "en": {
            "flag": "An official website of the European Union",
            "flagMobile": "EU official website",
            "button": "How do you know?",
            "dropdown": "All official European Union website addresses are in the <b class='globan-dropdown-selector'>europa.eu<\/b> domain.",
            "link": "See all EU institutions and bodies"
        },
        "es": {
            "flag": "Web oficial de la Uni\u00f3n Europea",
            "flagMobile": "Web oficial de la UE",
            "button": "\u00bfLo sab\u00edas?",
            "dropdown": "Todas las webs oficiales de la UE comparten el dominio <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Ver todas las instituciones y organismos de la UE."
        },
        "et": {
            "flag": "Euroopa Liidu ametlik veebisait",
            "flagMobile": "ELi ametlik veebisait",
            "button": "Kuidas seda \u00e4ra tunda?",
            "dropdown": "K\u00f5ik ELi ametlikud veebisaidid kuuluvad <b class='globan-dropdown-selector'>europa.eu<\/b> domeeni.",
            "link": "K\u00f5ik ELi institutsioonid ja asutused."
        },
        "fi": {
            "flag": "Euroopan unionin virallinen verkkosivusto",
            "flagMobile": "EU:n virallinen verkkosivusto",
            "button": "Miten voit olla varma?",
            "dropdown": "Kaikkien EU:n virallisten verkkosivustojen osoitteessa on verkkotunnus <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Kaikki EU:n toimielimet ja muut elimet."
        },
        "fr": {
            "flag": "Un site web officiel de l\u2019Union europ\u00e9enne",
            "flagMobile": "Un site officiel de l'UE",
            "button": "Comment le v\u00e9rifier?",
            "dropdown": "Tous les sites web officiels de l\u2019UE utilisent le domaine <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Voir tous les organes et institutions de l\u2019UE."
        },
        "ga": {
            "flag": "Su\u00edomh gr\u00e9as\u00e1in oifigi\u00fail de chuid an Aontais Eorpaigh",
            "flagMobile": "Su\u00edomh gr\u00e9as\u00e1in oifigi\u00fail de chuid an Aontais",
            "button": "C\u00e9n d\u00f3igh a mbeidh a fhios agat?",
            "dropdown": "Is i bhfearann <b class='globan-dropdown-selector'>europa.eu<\/b> at\u00e1 su\u00edomhanna gr\u00e9as\u00e1in oifigi\u00fala uile an Aontais.",
            "link": "F\u00e9ach institi\u00faid\u00ed agus comhlachta\u00ed uile an Aontais Eorpaigh."
        },
        "he": {
            "flag": "\u05d0\u05ea\u05e8 \u05e8\u05e9\u05de\u05d9 \u05e9\u05dc \u05d4\u05d0\u05d9\u05d7\u05d5\u05d3 \u05d4\u05d0\u05d9\u05e8\u05d5\u05e4\u05d9",
            "flagMobile": "\u05d4\u05d0\u05ea\u05e8 \u05d4\u05e8\u05e9\u05de\u05d9 \u05e9\u05dc \u05d4\u05d0\u05d9\u05d7\u05d5\u05d3 \u05d4\u05d0\u05d9\u05e8\u05d5\u05e4\u05d9",
            "button": "<span class='arabic'>\u05d0\u05d9\u05da \u05d9\u05d5\u05d3\u05e2\u05d9\u05dd\u061f<\/span>",
            "dropdown": "\u05db\u05dc \u05d4\u05d0\u05ea\u05e8\u05d9\u05dd \u05d4\u05e8\u05e9\u05de\u05d9\u05d9\u05dd \u05e9\u05dc \u05d4\u05d0\u05d9\u05d7\u05d5\u05d3 \u05d4\u05d0\u05d9\u05e8\u05d5\u05e4\u05d9 \u05e0\u05de\u05e6\u05d0\u05d9\u05dd \u05d1\u05e9\u05dd \u05d4\u05de\u05ea\u05d7\u05dd <b class='globan-dropdown-selector'>europa.eu<\/b>",
            "link": "\u05dc\u05e6\u05e4\u05d9\u05d9\u05d4 \u05d1\u05db\u05dc \u05d4\u05de\u05db\u05d5\u05e0\u05d9\u05dd \u05d5\u05d4\u05d2\u05d5\u05e4\u05d9\u05dd \u05e9\u05dc \u05d4\u05d0\u05d9\u05d7\u05d5\u05d3 \u05d4\u05d0\u05d9\u05e8\u05d5\u05e4\u05d9"
        },
        "hi": {
            "flag": "\u092f\u0942\u0930\u094b\u092a\u0940\u092f \u0938\u0902\u0918 \u0915\u0940 \u0906\u0927\u093f\u0915\u093e\u0930\u093f\u0915 \u0935\u0947\u092c\u0938\u093e\u0907\u091f",
            "flagMobile": "EU \u0915\u0940 \u0906\u0927\u093f\u0915\u093e\u0930\u093f\u0915 \u0935\u0947\u092c\u0938\u093e\u0907\u091f",
            "button": "\u0906\u092a\u0915\u094b \u0915\u0948\u0938\u0947 \u092e\u093e\u0932\u0942\u092e \u0939\u094b\u0917\u093e?",
            "dropdown": "\u0939\u0930 EU \u0938\u093e\u0907\u091f \u0915\u093e \u0921\u094b\u092e\u0947\u0928 <b class='globan-dropdown-selector'>europa.eu<\/b> \u0939\u0948.",
            "link": "EU \u0915\u0947 \u0938\u092d\u0940 \u0938\u0902\u0938\u094d\u0925\u093e\u0928 \u0914\u0930 \u0928\u093f\u0915\u093e\u092f \u0926\u0947\u0916\u0947\u0902."
        },
        "hr": {
            "flag": "Slu\u017ebene internetske stranice Europske unije",
            "flagMobile": "Slu\u017ebene internetske stranice EU-a",
            "button": "Kako to mogu provjeriti?",
            "dropdown": "Sve su slu\u017ebene internetske stranice EU-a na domeni <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Prika\u017ei sve institucije i tijela EU-a."
        },
        "hu": {
            "flag": "Az Eur\u00f3pai Uni\u00f3 hivatalos port\u00e1lj\u00e1hoz tartoz\u00f3 weboldal",
            "flagMobile": "Hivatalos uni\u00f3s webhely",
            "button": "Honnan lehet tudni?",
            "dropdown": "Az \u00f6sszes hivatalos uni\u00f3s webhely internetc\u00edme tartalmazza az <b class='globan-dropdown-selector'>europa.eu<\/b> tartom\u00e1nyt.",
            "link": "Az \u00f6sszes uni\u00f3s int\u00e9zm\u00e9ny \u00e9s szerv list\u00e1ja"
        },
        "hy": {
            "flag": "\u0535\u057e\u0580\u0578\u057a\u0561\u056f\u0561\u0576 \u0544\u056b\u0578\u0582\u0569\u0575\u0561\u0576 \u057a\u0561\u0577\u057f\u0578\u0576\u0561\u056f\u0561\u0576 \u056f\u0561\u0575\u0584",
            "flagMobile": "\u0535\u0544 \u057a\u0561\u0577\u057f\u0578\u0576\u0561\u056f\u0561\u0576 \u056f\u0561\u0575\u0584",
            "button": "\u053b\u0576\u0579\u057a\u0565\u055e\u057d \u0573\u0561\u0576\u0561\u0579\u0565\u056c",
            "dropdown": "\u0535\u0544 \u056f\u0561\u0575\u0584\u0565\u0580\u0568 <b class='globan-dropdown-selector'>europa.eu<\/b> \u0564\u0578\u0574\u0565\u0576\u0578\u057e \u0565\u0576:",
            "link": "\u0535\u0544 \u0562\u0578\u056c\u0578\u0580 \u056f\u0561\u057c\u0578\u0582\u0575\u0581\u0576\u0565\u0580\u0568 \u0587 \u0574\u0561\u0580\u0574\u056b\u0576\u0576\u0565\u0580\u0568:"
        },
        "is": {
            "flag": "Opinbert vefsv\u00e6\u00f0i ESB",
            "flagMobile": "Opinbert vefsv\u00e6\u00f0i ESB",
            "button": "Hvernig er h\u00e6gt a\u00f0 vera viss?",
            "dropdown": "\u00d6ll opinber vefsv\u00e6\u00f0i ESB eru \u00e1 l\u00e9ninu <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Sj\u00e1 stofnanir og skrifstofur ESB."
        },
        "it": {
            "flag": "Un sito ufficiale dell'Unione europea",
            "flagMobile": "Sito web ufficiale dell'UE",
            "button": "Come esserne sicuri?",
            "dropdown": "Tutti i siti ufficiali dell'UE appartengono al dominio <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Vedi tutte le istituzioni e gli organi dell'UE."
        },
        "ja": {
            "flag": "\u6b27\u5dde\u9023\u5408\u306e\u516c\u5f0f\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3067\u3059\u3002",
            "flagMobile": "EU\u516c\u5f0f\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3067\u3059\u3002",
            "button": "\u306a\u305c\u308f\u304b\u308b\u306e\u304b?",
            "dropdown": "\u5404EU\u516c\u5f0f\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306f<b class='globan-dropdown-selector'>europa.eu<\/b>\u30c9\u30e1\u30a4\u30f3\u306b\u53c2\u52a0\u3057\u3066\u3044\u307e\u3059\u3002",
            "link": "\u4ed6\u306eEU\u8af8\u6a5f\u95a2\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306f\u3053\u3061\u3089"
        },
        "lt": {
            "flag": "Oficiali Europos S\u0105jungos interneto svetain\u0117",
            "flagMobile": "Oficiali ES interneto svetain\u0117",
            "button": "Kaip su\u017einoti?",
            "dropdown": "Visos oficialios ES interneto svetain\u0117s yra domene <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Susipa\u017einkite su visomis ES institucijomis ir \u012fstaigomis."
        },
        "lv": {
            "flag": "Ofici\u0101la Eiropas Savien\u012bbas t\u012bmek\u013ca vietne",
            "flagMobile": "Ofici\u0101la ES t\u012bmek\u013ca vietne",
            "button": "K\u0101 to var at\u0161\u0137irt no cit\u0101m?",
            "dropdown": "Visas ES ofici\u0101l\u0101s t\u012bmek\u013ca vietnes izmanto dom\u0113nu <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Skat\u012bt visas ES iest\u0101des un strukt\u016bras."
        },
        "mk": {
            "flag": "\u041e\u0444\u0438\u0446\u0438\u0458\u0430\u043b\u043d\u0430 \u0432\u0435\u0431-\u043b\u043e\u043a\u0430\u0446\u0438\u0458\u0430 \u043d\u0430 \u0415\u0432\u0440\u043e\u043f\u0441\u043a\u0430\u0442\u0430 \u0423\u043d\u0438\u0458\u0430",
            "flagMobile": "\u041e\u0444\u0438\u0446\u0438\u0458\u0430\u043b\u043d\u0430 \u0432\u0435\u0431-\u043b\u043e\u043a\u0430\u0446\u0438\u0458\u0430 \u043d\u0430 \u0415\u0423",
            "button": "\u041a\u0430\u043a\u043e \u0437\u043d\u0430\u0435\u0442\u0435?",
            "dropdown": "\u0421\u0438\u0442\u0435 \u043e\u0444\u0438\u0446\u0438\u0458\u0430\u043b\u043d\u0438 \u0432\u0435\u0431-\u043b\u043e\u043a\u0430\u0446\u0438\u0438 \u043d\u0430 \u0415\u0423 \u0441\u0435 \u043d\u0430 \u0434\u043e\u043c\u0435\u043d\u043e\u0442 <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "\u0412\u0438\u0434\u0435\u0442\u0435 \u0433\u0438 \u0441\u0438\u0442\u0435 \u0438\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u0438 \u0438 \u0442\u0435\u043b\u0430 \u043d\u0430 \u0415\u0423."
        },
        "mt": {
            "flag": "Sit web uffi\u010bjali tal-Unjoni Ewropea",
            "flagMobile": "Sit web uffi\u010bjali tal-UE",
            "button": "Kif taf?",
            "dropdown": "Is-siti web uffi\u010bjali kollha tal-UE huma fid-dominju <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Ara l-istituzzjonijiet u l-entitajiet kollha tal-UE."
        },
        "nl": {
            "flag": "Een offici\u00eble website van de Europese Unie",
            "flagMobile": "Offici\u00eble website van de EU",
            "button": "Waar moet ik op letten?",
            "dropdown": "Alle offici\u00eble websites van de EU hebben een adres in het domein <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Lijst van alle EU-instellingen en -organen."
        },
        "pl": {
            "flag": "Oficjalna strona internetowa Unii Europejskiej",
            "flagMobile": "Oficjalna strona internetowa UE",
            "button": "Jak to sprawdzi\u0107?",
            "dropdown": "Wszystkie oficjalne strony internetowe UE s\u0105 zarejestrowane w domenie <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Wszystkie instytucje i organy UE."
        },
        "pt": {
            "flag": "Um s\u00edtio Web oficial da Uni\u00e3o Europeia",
            "flagMobile": "S\u00edtios Web oficial da UE",
            "button": "Como verificar?",
            "dropdown": "Todos os s\u00edtios Web oficiais da UE est\u00e3o no dom\u00ednio <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Ver todas as institui\u00e7\u00f5es e \u00f3rg\u00e3os da UE."
        },
        "ro": {
            "flag": "Acesta este un site oficial al Uniunii Europene",
            "flagMobile": "Acesta este un site oficial al UE",
            "button": "Cum pute\u021bi \u0219ti?",
            "dropdown": "Toate site-urile oficiale ale UE fac parte din domeniul <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Toate institu\u021biile \u0219i organismele UE."
        },
        "ru": {
            "flag": "\u041e\u0434\u0438\u043d \u0438\u0437 \u043e\u0444\u0438\u0446. \u0441\u0430\u0439\u0442\u043e\u0432 \u0415\u0432\u0440\u043e\u043f. \u0441\u043e\u044e\u0437\u0430",
            "flagMobile": "\u041e\u0434\u0438\u043d \u0438\u0437 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0430\u0439\u0442\u043e\u0432 \u0415\u0421",
            "button": "\u041e\u0442\u043a\u0443\u0434\u0430 \u044d\u0442\u043e \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e?",
            "dropdown": "<b class='globan-dropdown-selector'>Europa.eu<\/b> \u2013 \u0434\u043e\u043c\u0435\u043d \u043e\u0444\u0438\u0446. \u0441\u0430\u0439\u0442\u043e\u0432 \u0415\u0421.",
            "link": "\u0421\u043c. \u0432\u0441\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f \u0438 \u043e\u0440\u0433\u0430\u043d\u044b \u0415\u0421."
        },
        "sk": {
            "flag": "Ofici\u00e1lne webov\u00e9 str\u00e1nky Eur\u00f3pskej \u00fanie",
            "flagMobile": "Ofici\u00e1lne webov\u00e9 str\u00e1nky E\u00da",
            "button": "Ako to zisti\u0165?",
            "dropdown": "V\u0161etky ofici\u00e1lne webov\u00e9 str\u00e1nky E\u00da s\u00fa na dom\u00e9ne <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Zobrazi\u0165 v\u0161etky in\u0161tit\u00facie a org\u00e1ny E\u00da."
        },
        "sl": {
            "flag": "Ste na enem od uradnih spleti\u0161\u010d EU",
            "flagMobile": "Ste na uradnem spleti\u0161\u010du EU",
            "button": "Kako to preverim?",
            "dropdown": "Vsa uradna spleti\u0161\u010da EU so v domeni <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Vse institucije in organi EU."
        },
        "sq": {
            "flag": "Faqe zyrtare e Bashkimit Evropian",
            "flagMobile": "Faqe zyrtare e BE-s\u00eb",
            "button": "Si ta kuptosh?",
            "dropdown": "T\u00eb gjitha faqet zyrtare t\u00eb BE-s\u00eb jan\u00eb n\u00eb domenin <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Shiko t\u00eb gjitha institucionet dhe organet e BE-s\u00eb."
        },
        "sv": {
            "flag": "En av Europeiska unionens officiella webbplatser",
            "flagMobile": "Officiell EU-webbplats",
            "button": "Hur kan du veta det?",
            "dropdown": "Alla officiella EU-webbplatser finns p\u00e5 dom\u00e4nen <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Se EU:s samtliga institutioner och organ."
        },
        "tr": {
            "flag": "Avrupa Birli\u011finin resmi bir sitesi",
            "flagMobile": "AB resmi sitesi",
            "button": "Nas\u0131l bilebilirsiniz?",
            "dropdown": "T\u00fcm resmi AB siteleri <b class='globan-dropdown-selector'>europa.eu<\/b> etki alan\u0131n\u0131 ta\u015f\u0131r.",
            "link": "T\u00fcm AB kurum ve organlar\u0131n\u0131 g\u00f6r\u00fcn."
        },
        "ur": {
            "flag": "\u06cc\u0648\u0631\u067e\u06cc \u06cc\u0648\u0646\u06cc\u0646 \u06a9\u06cc \u0627\u06cc\u06a9 \u0633\u0631\u06a9\u0627\u0631\u06cc \u0648\u06cc\u0628 \u0633\u0627\u0626\u0679",
            "flagMobile": "EU \u06a9\u06cc \u0627\u06cc\u06a9 \u0633\u0631\u06a9\u0627\u0631\u06cc \u0648\u06cc\u0628 \u0633\u0627\u0626\u0679",
            "button": "<span class='arabic'>\u0622\u067e  \u06a9\u06cc\u0633\u06d2 \u062c\u0627\u0646\u062a\u06d2 \u06c1\u06cc\u06ba\u061f<\/span>",
            "dropdown": "EU \u0633\u0631\u06a9\u0627\u0631\u06cc \u0633\u0627\u0626\u0679\u0633 <b class='globan-dropdown-selector'>europa.eu<\/b> \u067e\u0631 \u06c1\u06cc\u06ba\u06d4",
            "link": "EU \u06a9\u06d2 \u062a\u0645\u0627\u0645 \u0645\u062d\u06a9\u0645\u06d2 \u0627\u0648\u0631 \u0627\u062f\u0627\u0631\u06d2 \u062f\u06cc\u06a9\u06be\u06cc\u06ba\u06d4"
        },
        "no": {
            "flag": "Offisiell EU-nettside",
            "flagMobile": "Offisiell EU-nettside",
            "button": "Hvordan kan du v\u00e6re sikker?",
            "dropdown": "Alle offisielle EU-nettsider ligger p\u00e5 domenet <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Se alle EU-institusjoner og -organer."
        },
        "vi": {
            "flag": "M\u1ed9t trang web ch\u00ednh th\u1ee9c c\u1ee7a Li\u00ean Minh Ch\u00e2u \u00c2u",
            "flagMobile": "M\u1ed9t trang web ch\u00ednh th\u1ee9c c\u1ee7a EU",
            "button": "C\u00e1ch nh\u1eadn bi\u1ebft?",
            "dropdown": "M\u1ecdi trang web ch\u00ednh th\u1ee9c c\u1ee7a EU \u0111\u1ec1u c\u00f3 mi\u1ec1n <b class='globan-dropdown-selector'>europa.eu<\/b>.",
            "link": "Xem t\u1ea5t c\u1ea3 c\u00e1c t\u1ed5 ch\u1ee9c v\u00e0 h\u1ed9i \u0111\u1ed3ng \u1edf EU."
        },
        "zh": {
            "flag": "\u6b27\u6d32\u8054\u76df\u4e00\u4e2a\u5b98\u65b9\u7f51\u7ad9",
            "flagMobile": "\u6b27\u76df\u5b98\u65b9\u7f51\u7ad9",
            "button": "\u5982\u4f55\u77e5\u9053\uff1f",
            "dropdown": "\u6b27\u76df\u6240\u6709\u5b98\u65b9\u7f51\u7ad9\u7686\u6ce8\u518c\u4e8e <b class='globan-dropdown-selector'>europa.eu<\/b> \u57df\u540d\u4e0b\u3002",
            "link": "\u67e5\u770b\u6240\u6709\u6b27\u76df\u7ec4\u7ec7\u548c\u673a\u6784\u3002"
        }
    }
});