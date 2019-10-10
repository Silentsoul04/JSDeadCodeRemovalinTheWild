
            window.onerror = function(e, t, r, n, o) {
                    function a(e) {
                        var t, r;
                        if ("object" == typeof e) {
                            if (null === e) return "null";
                            if (window.JSON && window.JSON.stringify) return JSON.stringify(e);
                            r = i(e), t = [];
                            for (var n in e) t.push((r ? "" : '"' + n + '":') + a(e[n]));
                            return t = t.join(), r ? "[" + t + "]" : "{" + t + "}"
                        }
                        return void 0 === e ? "undefined" : "number" == typeof e || "function" == typeof e ? e.toString() : e ? '"' + e + '"' : '""'
                    }

                    function i(e) {
                        return "[object Array]" == Object.prototype.toString.call(e)
                    }
                    var c, s = window;
                    if (n = n || s.event && s.event.errorCharacter || 0, o && o.stack) e = o.stack.toString().replace(/\n/g, "");
                    else if (arguments.callee) {
                        for (var u = [e], l = arguments.callee.caller, d = 3; l && --d > 0 && (u.push(l.toString()), l !== l.caller);) l = l.caller;
                        e = u = u.join(",")
                    }
                    if (c = a(e) + (t ? ";URL:" + t : "") + (r ? ";Line:" + r : "") + (n ? ";Column:" + n : ""), s._last_err_msg) {
                        if (s._last_err_msg.indexOf(e) > -1) return;
                        s._last_err_msg += "|" + e
                    } else s._last_err_msg = e;
                    if (-1 === c.indexOf("WeixinJSBridge") && -1 === c.indexOf(':mqq"') && -1 === c.indexOf("_WXJS") && (setTimeout(function() {
                            console.log("ERROR:" + c);
                            var e = encodeURIComponent(c);
                            (new Image).src = "//wq.jd.com/webmonitor/collect/badjs.json?Content=" + e + "&t=" + Math.random() + (window.traceid ? "&traceid=" + window.traceid : "")
                        }, 1e3), window._BADJSCHECKRPT)) try {
                        setTimeout(function() {
                            JD && JD.report.umpBiz({
                                bizid: 55,
                                operation: _BADJSCHECKRPT.operation,
                                result: "1",
                                source: "0",
                                message: ""
                            })
                        }, 1e3)
                    } catch (e) {}
                    return !1
                },
                function(name) {
                    function getLinkUrl(e, t) {
                        var r = window.GLOBAL_WXSQ_HEADERCONFIG.URLTRANSFORMRULE.filter(function(e) {
                            return e.ruleType == t
                        });
                        if (!r.length) return e;
                        for (var n = 0, o = r.length; n < o && "1" == r[n].enable; n++) {
                            var a = transformUrl(e, r[n]);
                            if (a.shouldReplace) return a.targetUrl
                        }
                        return e
                    }

                    function transformUrl(e, t) {
                        var r = {
                                url: e,
                                refer: location.href,
                                cookie: document.cookie,
                                userAgent: navigator.userAgent
                            }[t.context],
                            n = !1;
                        try {
                            if ("match" == t.operator) n = new RegExp(t.input).test(r) == t.expect;
                            else if ("cookie" == t.context) {
                                var o, a = $.cookie.get(t.input);
                                t.compareValue = 1 * t.compareValue, "exist" == t.operator ? o = !!a : "lt" == t.operator ? o = 1 * a < t.compareValue : "gt" == t.operator ? o = 1 * a > t.compareValue : "le" == t.operator ? o = 1 * a <= t.compareValue : "ge" == t.operator ? o = 1 * a >= t.compareValue : "ne" == t.operator ? o = 1 * a != t.compareValue : "eq" == t.operator && (o = 1 * a == t.compareValue), n = o == t.expect
                            }
                            return n ? {
                                shouldReplace: !0,
                                targetUrl: e.replace(t.regexp, t.replacement)
                            } : {
                                shouldReplace: !1
                            }
                        } catch (e) {
                            return console.error("transformUrl", e.stack), {
                                shouldReplace: !1
                            }
                        }
                    }

                    function reportAdTraceInfo(e, t, r) {
                        t = $.url.addUrlParam(t, {
                            utm_source: location.host,
                            utm_medium: "weixin_shouq",
                            utm_campaign: "t_256716187_1",
                            utm_term: e
                        }), console.log("reportAdTraceInfo param:", qz_jdt, $.cookie.get("__jda"), r, t);
                        var n = $.url.addUrlParam("https://addata.jd.com/fcgi-bin/rpttraceinfo", {
                            qz_gdt: e,
                            __jda: $.cookie.get("__jda"),
                            turl: encodeURIComponent(t),
                            isop: r,
                            t: Math.random()
                        });
                        console.log("rptUrl:", n), $.send(n), console.log("reportAdTraceInfo end!")
                    }

                    function addWxappCookies(e) {
                        for (var t = ~e.indexOf("?") ? "&" : "?", r = ["PPRD_P", "visitkey", "__wga", "__jdv", "__jda", "unpl", "wq_addr", "wxapp_type", "pinStatus"], n = {}, o = 0, a = r.length; o < a; ++o) {
                            var i = r[o];
                            if ("PPRD_P" == i) {
                                for (var c = [], s = ["EA", "CT", "UUID", "LOGID", "GROUP", "WDSTAG"], u = $.cookie.get(i) || "", l = 0, d = s.length; l < d; ++l) {
                                    var p = s[l],
                                        m = new RegExp("(^|[~\\W])" + p + "\\.([^-]*)", "i"),
                                        g = u.match(m);
                                    g && g.length > 1 && c.push(p + "." + g[2])
                                }
                                n[i] = c.join("-")
                            } else n[i] = $.cookie.get(i) || ""
                        }
                        return e + t + "cookie=" + encodeURIComponent(JSON.stringify(n)) + "&wdref=" + encodeURIComponent(location.href)
                    }

                    function checkCookie() {
                        $.cookie.set("retina", $.device.retina ? 1 : 0, 43200, "/", "jd.com");
                        var e = $.device.scene,
                            t = {
                                weixin: 1,
                                qq: 2,
                                mobile: 3,
                                jdpingou: 4,
                                jxj: 6,
                                wxwork: 7,
                                jdapp: 8,
                                jdm: 9,
                                jdjr: 10,
                                skapp: 11
                            };
                        $.cookie.set("cid", t[e] || 3, 43200, "/", "jd.com"), $.wxapp.isWxapp(function(e) {
                            e && $.cookie.set("cid", 5, null, "/", "jd.com")
                        }), "wqs.jd.com" == location.host && $.cookie.del("wq_skey", "/", "wqs.jd.com")
                    }

                    function checkTime() {
                        $.GLOBAL_CONFIG.NOW = $.url.getUrlParam("debugtime") ? new Date(decodeURIComponent($.url.getUrlParam("debugtime"))) : new Date
                    }

                    function checkWebp() {
                        var e = navigator.userAgent.toLowerCase();
                        if (-1 !== e.indexOf("jdpingou")) return $.device.webp = !1, void $.cookie.set("webp", 0, 5256e3, "/", "jd.com");
                        if ("1" == $.cookie.get("webp")) $.device.webp = !0;
                        else if (-1 !== e.indexOf("webp/")) $.device.webp = !0, $.cookie.set("webp", 1, 5256e3, "/", "jd.com");
                        else if ("0" == $.cookie.get("webp")) $.device.webp = !1;
                        else {
                            var t = new Image,
                                r = setTimeout(function() {
                                    t.onload = t.onerror = null, t = null
                                }, 500);
                            t.onload = function() {
                                clearTimeout(r), $.device.webp = t.width > 0 && t.height > 0, $.cookie.set("webp", $.device.webp ? 1 : 0, 5256e3, "/", "jd.com")
                            }, t.onerror = function() {
                                clearTimeout(r), $.cookie.set("webp", 0, 5256e3, "/", "jd.com"), $.device.webp = !1
                            }, t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
                        }
                    }

                    function setOpenid() {
                        $.cookie.get("wq_code") && ($.cookie.get("sq_open_id") || $.cookie.get("open_id") && $.cookie.get("wq_unionid") || $.send("//wq.jd.com/mcoss/openid/getopenid?t=" + Math.random(), {
                            onLoad: function() {
                                setTimeout(function() {
                                    $.events.trigger("EVENT_SET_OPENID")
                                }, 50)
                            }
                        }))
                    }

                    function hideWxworkMenu() {
                        function e() {
                            window.MiJSBridge && MiJSBridge.invoke("utility.showWebviewRightMenu", {
                                menuKey: "hide",
                                menuInfo: "",
                                menuIconUrl: ""
                            }, function() {})
                        }
                        "wxwork" == $.device.scene && (document.addEventListener("MiJSBridgeReady", e), $.events.listen("pageshow", e))
                    }
                    var $ = {},
                        badImageDomain = [],
                        arrUmpStr = [],
                        umpTimeEvent = null,
                        isFirstShow = !0,
                        pageShowCallback = [];
                    window.addEventListener("pageshow", function() {
                        isFirstShow || pageShowCallback.forEach(function(e) {
                            e && e()
                        }), isFirstShow = !1
                    }, !1), $.page = {
                        onNavigateBack: function(e) {
                            if ("function" != typeof e) return !1;
                            pageShowCallback.push(e)
                        }
                    }, $.send = function(e, t) {
                        var r = (new Date).getTime(),
                            n = "_COUNTRD" + r++;
                        try {
                            window[n] = new Image, window[n].src = e, t && t.onLoad && (window[n].onload = window[n].onerror = t.onLoad)
                        } catch (e) {}
                    };
                    var callbackNameCount = {},
                        letterMap = ["Z", "A", "B", "C", "D", "E", "F", "G", "H", "I"];
                    $.sendJs = function(e, t) {
                        function r() {
                            o && (o.onload = o.onreadystatechange = o.onerror = null, o.parentNode && o.parentNode.removeChild(o), o = null)
                        }
                        var n = !1,
                            o = document.createElement("script");
                        t = t || {}, o.charset = t.charset || "utf-8", o.onload = o.onreadystatechange = function() {
                            (/loaded|complete/i.test(this.readyState) || -1 == navigator.userAgent.toLowerCase().indexOf("msie")) && (t.onLoad && t.onLoad(), n || (t.onError && t.onError(), window.onerror("", "", "", "", {
                                stack: "servererror:" + (e || "").split("?")[0]
                            })), r())
                        }, o.onerror = function() {
                            window.__reloadResource && __reloadResource(o), t.onError && t.onError(), r()
                        }, e = function(e) {
                            function t(e) {
                                for (var t = (e + "").split(""), r = [], n = 0; n < t.length; n++) r.push(letterMap[t[n]]);
                                return r.join("")
                            }

                            function r(e) {
                                return callbackNameCount[e] ? callbackNameCount[e] += 1 : callbackNameCount[e] = 1, e + t(callbackNameCount[e])
                            }
                            var o, a, i, c = e.replace(/callback=([^&]+)/, function(e, t) {
                                return o = t, "callback=" + (a = r(o))
                            });
                            return o && window[o] ? (e = c, i = window[o], window[a] = function(e) {
                                n = !0, i(e)
                            }) : n = !0, e
                        }(e), o.src = $.url.getCgiUrl(e), t.defer && (o.defer = "defer"), t.async && (o.async = "async"), t.crossorigin && o.setAttribute("crossorigin", "true"), document.getElementsByTagName("head")[0].appendChild(o)
                    }, $.sendJsByDomain = function(e) {
                        $.sendJs(e.url, {
                            onError: e.onError,
                            onLoad: e.onLoad,
                            defer: e.defer,
                            async: e.async,
                            crossorigin: e.crossOrigin
                        })
                    }, $.device = {
                        isAndroid: /(Android);?[\s\/]+([\d.]+)?/i.test(window.navigator.userAgent),
                        retina: window.devicePixelRatio >= 1.5,
                        sticky: function() {
                            var e, t = "-webkit-sticky",
                                r = document.createElement("i");
                            return r.style.position = t, e = r.style.position, r = null, e === t
                        }(),
                        scene: function() {
                            var e = navigator.userAgent.toLowerCase();
                            return /jdapp;/.test(e) ? "jdapp" : /jdpingou/.test(e) ? "jdpingou" : /jdjr/.test(e) ? "jdjr" : /skapp/.test(e) ? "skapp" : /jxj\/([.\d])*/.test(e) ? "jxj" : /micromessenger(\/[\d\.]+)*/.test(e) && /wxwork/.test(e) ? "wxwork" : /((so|p|home|item)\.m\.jd\.com|m\.yiyaojd\.com|mitem\.jd\.hk)/.test(location.host) || /[?&]sceneval=2/.test(location.search) ? "jdm" : e.indexOf("micromessenger") > -1 ? "weixin" : /qq\/([\d\.]+)*/.test(e) ? "qq" : "mobile"
                        }(),
                        webp: !1,
                        getNetwork: function(e) {
                            try {
                                var t = navigator.userAgent.toLowerCase(),
                                    r = $.device.scene;
                                if (/qq\/([\d\.]+)*/.test(t)) $.sqapi.ready(function() {
                                    try {
                                        mqq.device.getNetworkType(function(t) {
                                            var r, n = !0;
                                            switch (1 * t) {
                                                case 0:
                                                    r = t, n = !1;
                                                    break;
                                                case 1:
                                                    r = "wifi";
                                                    break;
                                                case 2:
                                                    r = "2G";
                                                    break;
                                                case 3:
                                                    r = "3G";
                                                    break;
                                                case 4:
                                                    r = "4G"
                                            }
                                            n && $.cookie.set("network", r, 5, "/", "jd.com"), e(String(r))
                                        })
                                    } catch (e) {}
                                });
                                else if (t.indexOf("micromessenger") > -1) $.wxapi.ready(function() {
                                    wx.getNetworkType({
                                        success: function(t) {
                                            var r = t.networkType,
                                                n = !0;
                                            /wifi/i.test(r) ? r = "wifi" : /4g|3g+/i.test(r) ? r = "4g" : /3g/i.test(r) ? r = "3g" : /2g/i.test(r) ? r = "2g" : n = !1, n && $.cookie.set("network", r, 5, "/", "jd.com"), e(String(r))
                                        },
                                        fail: function(t) {
                                            e("unknown")
                                        }
                                    })
                                }, !1, function() {
                                    e("unknown")
                                });
                                else if ("jdapp" == r || "jdpingou" == r) {
                                    var n = (t = navigator.userAgent.toLowerCase()).split(";")[5];
                                    window.JDAppUnite && JDAppUnite.getNetWorkType ? (window.getNetWorkCallback = function(t) {
                                        e(t)
                                    }, JDAppUnite.getNetWorkType("getNetWorkCallback")) : t.indexOf("supportJDSHWK/1") > -1 || 1 == window._is_jdsh_wkwebview ? (window.getNetWorkCallback = function(t) {
                                        e(t)
                                    }, window.webkit.messageHandlers.JDAppUnite.postMessage({
                                        method: "getNetWorkType",
                                        params: "getNetWorkCallback",
                                        callBackName: null,
                                        callBackId: null
                                    })) : e(n && n.replace("network/", "") || "network")
                                } else e("unknown")
                            } catch (t) {
                                e("unknown")
                            }
                        },
                        checkHttpsSupport: function(domain, callback) {
                            if ("wq.jd.com" != domain) return !0;
                            try {
                                var xhr = new XMLHttpRequest;
                                xhr.open("GET", "https://wq.jd.com/webreport/httpscheck", !0), xhr.timeout = 5e3, xhr.onload = function(e) {
                                    var data;
                                    try {
                                        data = eval("(" + this.response + ")")
                                    } catch (e) {}
                                    callback(data && "0" == data.errCode ? !0 : !1)
                                }, xhr.onerror = function(e) {
                                    console.log("onerror"), callback(!1)
                                }, xhr.ontimeout = function(e) {
                                    console.log("ontimeout"), callback(!1)
                                }, xhr.onabort = function(e) {
                                    console.log("onabort"), callback(!1)
                                }, xhr.send(null)
                            } catch (e) {
                                callback(!1)
                            }
                        }
                    }, $.performance = {
                        scaleRate: function() {
                            var e = $.device.isAndroid ? 720 : 640,
                                t = 2 * screen.width,
                                r = 640;
                            return t > 640 && t <= 720 ? r = 720 : t > 720 && t <= 750 ? r = 750 : t > 750 && (r = 1080), tempRate = r / e
                        }(),
                        getScaleImgDpg: function(e, t, r, n) {
                            (e = e || "") && !/^(https?:)?\/\//i.test(e) && (e = "//img10.360buyimg.com/mobilecms/" + e), e = e.replace(/\!.*$|(?:(?:\.dpg)?(?:\.webp)?)$/, "");
                            var o = /jfs\//.test(e),
                                a = /com\/n\d{1,2}\//.test(e),
                                i = /\.(jpg|jpeg)$/.test(e),
                                c = /\.png$/.test(e);
                            if (/(m|img\d{1,2})\.360buyimg\.com/.test(e) && (i || c) && (o || a)) {
                                var s = parseInt(t * $.performance.scaleRate, 10),
                                    u = parseInt(r * $.performance.scaleRate, 10);
                                e = $.performance.calcImgSize(e, s, u), i ? JD.device.webp ? e = e + (n ? "!cc_" + s + "x" + u : "") + "!q70.dpg.webp" : i && (e = e + (n ? "!cc_" + s + "x" + u : "") + "!q70.dpg") : $.device.webp && (e += ".webp")
                            }
                            if (badImageDomain.length) {
                                var l = e.match(/img\d{1,2}\.360buyimg\.com/)[0];
                                badImageDomain.indexOf(l) > -1 && (e = e.replace(l, $.url.getValidImageDomain()))
                            }
                            return (e = e.replace(/\/n\d+\/(s\d+x\d+_)/, "/mobilecms/$1")) ? e.replace(/^https?:/, "") : ""
                        },
                        useScaleImg: function() {
                            var e = $.cookie.get("network"),
                                t = $.device.retina;
                            return "wifi" != e || !t
                        },
                        getScaleImg: function(e, t, r, n, o) {
                            (e = e || "") && !/^(https?:)?\/\//i.test(e) && (e = "//img10.360buyimg.com/mobilecms/" + e), e = e.replace(/\!.*$|(?:(?:\.dpg)?(?:\.webp)?)$/, "");
                            var a = /jfs\//.test(e),
                                i = /com\/n\d{1,2}\//.test(e),
                                c = /\.(jpg|jpeg)$/.test(e),
                                s = /\.png$/.test(e);
                            if (/(m|img\d{1,2})\.360buyimg\.com/.test(e) && (c || s) && (a || i) && (e = e.replace(/img11\.360buyimg\.com/, "img12.360buyimg.com"), e = $.performance.calcImgSize(e, t, r), n && (e += n), e += o || "!q70", c ? (e += ".dpg", $.device.webp && (e += ".webp")) : $.device.webp && (e += ".webp")), badImageDomain.length) {
                                var u = e.match(/img\d{1,2}\.360buyimg\.com/)[0];
                                badImageDomain.indexOf(u) > -1 && (e = e.replace(u, $.url.getValidImageDomain()))
                            }
                            return (e = e.replace(/\/n\d+\/(s\d+x\d+_)/, "/mobilecms/$1")) ? e.replace(/^https?:/, "") : ""
                        },
                        calcImgSize: function(e, t, r) {
                            var n = /jfs\//.test(e),
                                o = /com\/n\d{1,2}\//.test(e);
                            if (!t && !r) return e;
                            if (t && !r && (r = t), !t && r && (t = r), n) e = (a = /\/s\d{1,3}x\d{1,3}_jfs\//.test(e)) ? e.replace(/\/s\d{1,3}x\d{1,3}_jfs\//, "/s" + t + "x" + r + "_jfs/") : e.replace(/\/jfs\//, "/s" + t + "x" + r + "_jfs/");
                            else if (o) {
                                var a = /com\/n\d{1,2}\/s\d{1,3}x\d{1,3}/.test(e);
                                e = a ? e.replace(/(com\/n\d{1,2})\/s\d{1,3}x\d{1,3}/, "$1/s" + t + "x" + r) : e.replace(/(com\/n\d{1,2})\//, "$1/s" + t + "x" + r + "_")
                            }
                            return e
                        },
                        gray: function() {
                            var e = $.cookie.get("visitkey");
                            return e ? e.substr(-1) < 5 : Math.random() < .5
                        }
                    }, $.img = {
                        scaleRate: $.performance.scaleRate,
                        getScaleImgDpg: $.performance.getScaleImgDpg,
                        useScaleImg: $.performance.useScaleImg,
                        getScaleImg: $.performance.getScaleImg,
                        getImgUrl: $.performance.getScaleImg
                    }, $.report = {
                        itil: function(e) {
                            return !1
                        },
                        badJs: function(e) {
                            var t = new Image;
                            e && e.stack ? e = e.stack.toString() : "object" == typeof e && window.JSON && window.JSON.stringify && (e = JSON.stringify(e)), t.src = "//wq.jd.com/webmonitor/collect/badjs.json?Content=" + e + "&t=" + Math.random()
                        },
                        umpBiz: function(e, t, r) {
                            var n;
                            if (void 0 !== (t = t || window.GLOBAL_UMP_PERCENT) && Math.floor(10 * Math.random()) > t) return !1;
                            var o = "//wq.jd.com/webmonitor/collect/biz.json?contents=";
                            if (e instanceof Array) {
                                n = [];
                                for (var a = 0; a < e.length; a++) n.push(e[a].bizid + "|" + e[a].operation + "|" + e[a].result + "|" + e[a].source + "|" + encodeURIComponent(String(e[a].message).replace(/,/g, " ")) + (window.traceid ? "|" + traceid : ""));
                                n = n.join(",")
                            } else if (n = e.bizid + "|" + e.operation + "|" + e.result + "|" + e.source + "|" + encodeURIComponent(String(e.message).replace(/,/g, " ")) + (window.traceid ? "|" + traceid : ""), e && e.notCombo) return (new Image).src = o + n + "&t=" + Math.random(), !1;
                            r ? (new Image).src = o + n + "&t=" + Math.random() : arrUmpStr.push(n), umpTimeEvent || (umpTimeEvent = setTimeout(function() {
                                (new Image).src = o + arrUmpStr.join(",") + "&t=" + Math.random(), arrUmpStr = [], umpTimeEvent = null
                            }, 1e3))
                        },
                        imageLoadError: function(e) {
                            console.error("JD.report.imageLoadError已废弃")
                        },
                        pv: function(e) {
                            console.error("JD.report.pv已废弃,请使用公共上报组件wa")
                        },
                        rd: function(e) {
                            console.error("JD.report.rd已废弃,请使用公共上报组件wa")
                        }
                    }, $.cookie = {
                        get: function(e) {
                            var t = new RegExp("(^| )" + e + "(?:=([^;]*))?(;|$)"),
                                r = document.cookie.match(t);
                            if (!r || !r[2]) return "";
                            var n = r[2];
                            try {
                                return /(%[0-9A-F]{2}){2,}/.test(n) ? decodeURIComponent(n) : unescape(n)
                            } catch (e) {
                                return unescape(n)
                            }
                        },
                        set: function(e, t, r, n, o, a) {
                            var i = new Date,
                                r = arguments[2] || null,
                                n = arguments[3] || "/",
                                o = arguments[4] || null,
                                a = arguments[5] || !1;
                            r && i.setMinutes(i.getMinutes() + parseInt(r)), document.cookie = e + "=" + escape(t) + (r ? ";expires=" + i.toGMTString() : "") + (n ? ";path=" + n : "") + (o ? ";domain=" + o : "") + (a ? ";secure" : "")
                        },
                        del: function(e, t, r, n) {
                            if (null != this.get(e)) {
                                var o = new Date;
                                o.setMinutes(o.getMinutes() - 1e3), t = t || "/", document.cookie = e + "=;expires=" + o.toGMTString() + (t ? ";path=" + t : "") + (r ? ";domain=" + r : "") + (n ? ";secure" : "")
                            }
                        }
                    }, $.preload = {}, $.md5 = function() {
                        var e = function(e, t) {
                                return e << t | e >>> 32 - t
                            },
                            t = function(e, t) {
                                var r, n, o, a, i;
                                return o = 2147483648 & e, a = 2147483648 & t, r = 1073741824 & e, n = 1073741824 & t, i = (1073741823 & e) + (1073741823 & t), r & n ? 2147483648 ^ i ^ o ^ a : r | n ? 1073741824 & i ? 3221225472 ^ i ^ o ^ a : 1073741824 ^ i ^ o ^ a : i ^ o ^ a
                            },
                            r = function(e, t, r) {
                                return e & t | ~e & r
                            },
                            n = function(e, t, r) {
                                return e & r | t & ~r
                            },
                            o = function(e, t, r) {
                                return e ^ t ^ r
                            },
                            a = function(e, t, r) {
                                return t ^ (e | ~r)
                            },
                            i = function(n, o, a, i, c, s, u) {
                                return n = t(n, t(t(r(o, a, i), c), u)), t(e(n, s), o)
                            },
                            c = function(r, o, a, i, c, s, u) {
                                return r = t(r, t(t(n(o, a, i), c), u)), t(e(r, s), o)
                            },
                            s = function(r, n, a, i, c, s, u) {
                                return r = t(r, t(t(o(n, a, i), c), u)), t(e(r, s), n)
                            },
                            u = function(r, n, o, i, c, s, u) {
                                return r = t(r, t(t(a(n, o, i), c), u)), t(e(r, s), n)
                            },
                            l = function(e) {
                                for (var t, r = e.length, n = r + 8, o = 16 * ((n - n % 64) / 64 + 1), a = Array(o - 1), i = 0, c = 0; c < r;) i = c % 4 * 8, a[t = (c - c % 4) / 4] = a[t] | e.charCodeAt(c) << i, c++;
                                return t = (c - c % 4) / 4, i = c % 4 * 8, a[t] = a[t] | 128 << i, a[o - 2] = r << 3, a[o - 1] = r >>> 29, a
                            },
                            d = function(e) {
                                var t, r = "",
                                    n = "";
                                for (t = 0; t <= 3; t++) r += (n = "0" + (e >>> 8 * t & 255).toString(16)).substr(n.length - 2, 2);
                                return r
                            },
                            p = function(e) {
                                e = e.replace(/\x0d\x0a/g, "\n");
                                for (var t = "", r = 0; r < e.length; r++) {
                                    var n = e.charCodeAt(r);
                                    n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128))
                                }
                                return t
                            };
                        return {
                            getHash: function(e) {
                                var r, n, o, a, m, g, f, w, h, v = Array();
                                for (e = p(e), v = l(e), g = 1732584193, f = 4023233417, w = 2562383102, h = 271733878, r = 0; r < v.length; r += 16) n = g, o = f, a = w, m = h, g = i(g, f, w, h, v[r + 0], 7, 3614090360), h = i(h, g, f, w, v[r + 1], 12, 3905402710), w = i(w, h, g, f, v[r + 2], 17, 606105819), f = i(f, w, h, g, v[r + 3], 22, 3250441966), g = i(g, f, w, h, v[r + 4], 7, 4118548399), h = i(h, g, f, w, v[r + 5], 12, 1200080426), w = i(w, h, g, f, v[r + 6], 17, 2821735955), f = i(f, w, h, g, v[r + 7], 22, 4249261313), g = i(g, f, w, h, v[r + 8], 7, 1770035416), h = i(h, g, f, w, v[r + 9], 12, 2336552879), w = i(w, h, g, f, v[r + 10], 17, 4294925233), f = i(f, w, h, g, v[r + 11], 22, 2304563134), g = i(g, f, w, h, v[r + 12], 7, 1804603682), h = i(h, g, f, w, v[r + 13], 12, 4254626195), w = i(w, h, g, f, v[r + 14], 17, 2792965006), f = i(f, w, h, g, v[r + 15], 22, 1236535329), g = c(g, f, w, h, v[r + 1], 5, 4129170786), h = c(h, g, f, w, v[r + 6], 9, 3225465664), w = c(w, h, g, f, v[r + 11], 14, 643717713), f = c(f, w, h, g, v[r + 0], 20, 3921069994), g = c(g, f, w, h, v[r + 5], 5, 3593408605), h = c(h, g, f, w, v[r + 10], 9, 38016083), w = c(w, h, g, f, v[r + 15], 14, 3634488961), f = c(f, w, h, g, v[r + 4], 20, 3889429448), g = c(g, f, w, h, v[r + 9], 5, 568446438), h = c(h, g, f, w, v[r + 14], 9, 3275163606), w = c(w, h, g, f, v[r + 3], 14, 4107603335), f = c(f, w, h, g, v[r + 8], 20, 1163531501), g = c(g, f, w, h, v[r + 13], 5, 2850285829), h = c(h, g, f, w, v[r + 2], 9, 4243563512), w = c(w, h, g, f, v[r + 7], 14, 1735328473), f = c(f, w, h, g, v[r + 12], 20, 2368359562), g = s(g, f, w, h, v[r + 5], 4, 4294588738), h = s(h, g, f, w, v[r + 8], 11, 2272392833), w = s(w, h, g, f, v[r + 11], 16, 1839030562), f = s(f, w, h, g, v[r + 14], 23, 4259657740), g = s(g, f, w, h, v[r + 1], 4, 2763975236), h = s(h, g, f, w, v[r + 4], 11, 1272893353), w = s(w, h, g, f, v[r + 7], 16, 4139469664), f = s(f, w, h, g, v[r + 10], 23, 3200236656), g = s(g, f, w, h, v[r + 13], 4, 681279174), h = s(h, g, f, w, v[r + 0], 11, 3936430074), w = s(w, h, g, f, v[r + 3], 16, 3572445317), f = s(f, w, h, g, v[r + 6], 23, 76029189), g = s(g, f, w, h, v[r + 9], 4, 3654602809), h = s(h, g, f, w, v[r + 12], 11, 3873151461), w = s(w, h, g, f, v[r + 15], 16, 530742520), f = s(f, w, h, g, v[r + 2], 23, 3299628645), g = u(g, f, w, h, v[r + 0], 6, 4096336452), h = u(h, g, f, w, v[r + 7], 10, 1126891415), w = u(w, h, g, f, v[r + 14], 15, 2878612391), f = u(f, w, h, g, v[r + 5], 21, 4237533241), g = u(g, f, w, h, v[r + 12], 6, 1700485571), h = u(h, g, f, w, v[r + 3], 10, 2399980690), w = u(w, h, g, f, v[r + 10], 15, 4293915773), f = u(f, w, h, g, v[r + 1], 21, 2240044497), g = u(g, f, w, h, v[r + 8], 6, 1873313359), h = u(h, g, f, w, v[r + 15], 10, 4264355552), w = u(w, h, g, f, v[r + 6], 15, 2734768916), f = u(f, w, h, g, v[r + 13], 21, 1309151649), g = u(g, f, w, h, v[r + 4], 6, 4149444226), h = u(h, g, f, w, v[r + 11], 10, 3174756917), w = u(w, h, g, f, v[r + 2], 15, 718787259), f = u(f, w, h, g, v[r + 9], 21, 3951481745), g = t(g, n), f = t(f, o), w = t(w, a), h = t(h, m);
                                return (d(g) + d(f) + d(w) + d(h)).toLowerCase()
                            }
                        }
                    }(), $.url = {
                        setHash: function(e) {
                            setTimeout(function() {
                                location.hash = e
                            }, 0)
                        },
                        getHash: function(e) {
                            var t = e || location.hash;
                            return t ? t.replace(/.*#/, "") : ""
                        },
                        getHashParam: function(e) {
                            var t = this.getHash().match(new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), "i");
                            return null != t ? t[2] : ""
                        },
                        getUrlParam: function(e, t) {
                            var r = arguments[1] || window.location.search,
                                n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                                o = r.substr(r.indexOf("?") + 1).match(n);
                            return null != o ? o[2] : ""
                        },
                        parseUrl: function(e) {
                            var t = document.createElement("a");
                            return t.href = e, {
                                source: e,
                                protocol: t.protocol.replace(":", ""),
                                host: t.hostname,
                                port: t.port,
                                query: t.search,
                                params: function() {
                                    for (var e, r = {}, n = t.search.replace(/^\?/, "").split("&"), o = n.length, a = 0; a < o; a++) n[a] && (r[(e = n[a].split("="))[0]] = e[1]);
                                    return r
                                }(),
                                file: (t.pathname.match(/([^\/?#]+)$/i) || [, ""])[1],
                                hash: t.hash.replace("#", ""),
                                path: t.pathname.replace(/^([^\/])/, "/$1"),
                                relative: (t.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
                                segments: t.pathname.replace(/^\//, "").split("/")
                            }
                        },
                        addRd: function(e, t) {
                            e = e.replace(/？/g, "?");
                            var r = /(\?|&)ptag=[^&#]*/i,
                                n = /\?/.test(e);
                            return hasAnchor = e.indexOf("#") > -1, e = r.test(e) ? e.replace(r, "$1PTAG=" + t) : hasAnchor ? e.replace("#", (n ? "&" : "?") + "PTAG=" + t + "#") : e + (n ? "&" : "?") + "PTAG=" + t
                        },
                        addUrlParam: function(e, t) {
                            var r = e.split("#"),
                                n = r[1];
                            e.indexOf("?");
                            e = r[0];
                            for (var o in t) {
                                var a = new RegExp("([?&])" + o + "=[^&]*(&|$)", "i");
                                a.test(e) ? e = e.replace(a, "$1" + o + "=" + t[o] + "$2") : e += (e.indexOf("?") > -1 ? "&" : "?") + o + "=" + t[o]
                            }
                            return n && (e = e + "#" + n), e
                        },
                        smartboxUrl: "//wq.360buyimg.com/js/common/dest/jd.smartbox.min.js?t=201604071912",
                        homeUrl: window.GLOBAL_WXSQ_HEADERCONFIG ? "weixin" != $.device.scene ? window.GLOBAL_WXSQ_HEADERCONFIG.sqHome : window.GLOBAL_WXSQ_HEADERCONFIG.wxHome : "",
                        getValidImageDomain: function(e) {
                            var t = ["img10.360buyimg.com", "img11.360buyimg.com", "img12.360buyimg.com", "img13.360buyimg.com", "img14.360buyimg.com", "img20.360buyimg.com", "img30.360buyimg.com"],
                                r = badImageDomain.concat();
                            e && -1 == r.indexOf(e) && r.push(e);
                            var n = t.filter(function(e) {
                                return -1 == r.indexOf(e)
                            });
                            return n.length ? n[Math.floor(Math.random() * n.length)] : ""
                        },
                        getPageUrl: function(e) {
                            var t = $.url.getUrlParam("__pgzx");
                            if (1 == t && /\/\/wqs\.jd\.com\/pingou\/item\.shtml?/.test(e) && (e = $.url.addUrlParam(e, {
                                    __pgzx: t
                                })), "jdjr" == $.device.scene && /^(https?:)?\/\/wqs?\.jd\.com/i.test(location.href)) {
                                var r = e.match(/^(https?:)?\/\/item\.m\.jd\.com\/(product\/(\d+)\.html|ware\/view\.action.*[?&]wareId=(\d+))/i);
                                r && (e = "//wqitem.jd.com/item/view?sku=" + (r[r.length - 1] || r[r.length - 2]) + "&" + (e.split("?")[1] || ""))
                            }
                            if ("jdm" == $.device.scene) {
                                var n = /(?:https?:)?\/\/(?:wq(?:m?item)?\.jd\.(com|hk)\/m?item\/view).*[?&]sku=(\d+)/i,
                                    o = e.match(n);
                                o ? e = "//item.m.jd." + (o[1] || "com") + "/product/" + o[2] + ".html?" + (e.split("?")[1] || "") : e.match(/^(tel|openapp\.(jdmobile|jdpingou)):/i) || (e = $.url.addUrlParam(e, {
                                    sceneval: 2
                                }))
                            }
                            return getLinkUrl(e, "page")
                        },
                        getImageUrl: function(e) {
                            return getLinkUrl(e, "image")
                        },
                        getCgiUrl: function(e) {
                            return e = getLinkUrl(e, "cgi"), e = $.cgi.getCgiRccoveryUrl(e), e = $.url.getStaticDisRec(e)
                        },
                        getStaticDisRec: function(e) {
                            if (/\/\/wq\.360buyimg\.com/.test(e) && window._staticDisRec && window._staticDisRec.domain) {
                                var t = !1;
                                if (window._staticDisRec.whitelist) {
                                    var r = $.cookie.get("pin");
                                    t = r && !!~("|" + window._staticDisRec.whitelist + "|").indexOf("|" + r + "|")
                                } else if (window._staticDisRec.operators) {
                                    var n = $.cookie.get("wq_area"),
                                        o = window._staticDisRec.operators.split("|");
                                    if (n) {
                                        var a = n.split("|"),
                                            i = (a[0].split("_")[0] || "") + "," + (a[1] || "");
                                        t = !!~o.indexOf(i)
                                    }
                                } else if (window._staticDisRec.gray) {
                                    var c = $.cookie.get("visitkey") || "0";
                                    t = parseInt(c.substr(-2), 10) < parseInt(window._staticDisRec.gray, 10)
                                }
                                t && (e = e.replace(/\/\/wq\.360buyimg\.com/, "//" + window._staticDisRec.domain))
                            }
                            return e
                        }
                    }, $.events = function() {
                        var e, t, r, n, o, a, i, c;
                        return e = this, a = {}, i = {}, c = function() {}, t = function(t, r) {
                            a[t] ? a[t].push(r || c) : a[t] = [r || c], i[t] && r.apply(e, i[t])
                        }, r = function() {
                            var t = [].shift.call(arguments),
                                r = a[t];
                            if (r && r.length)
                                for (var n = 0, o = r.length; n < o; n++) r[n].apply(e, arguments);
                            else i[t] = arguments
                        }, n = function(e, r) {
                            return o(e), t(e, r)
                        }, o = function(e) {
                            a[e] = void 0, i[e] = void 0
                        }, {
                            listen: t,
                            one: n,
                            remove: o,
                            trigger: r
                        }
                    }(), $.modulejs = {
                        ready: function(e) {
                            $.GLOBAL_CONFIG.MMODULEJS_READY ? e && e.call(null) : $.events.listen("modulejs_async_ready", e)
                        }
                    }, $.sqapi = {
                        ready: function(e) {
                            window.mqq ? e && e.call(null) : $.events.listen("sq_api_ready", e)
                        }
                    }, $.wxapi = function() {
                        if (-1 != navigator.userAgent.toLowerCase().indexOf("micromessenger")) {
                            var e, t = !1,
                                r = function() {
                                    e && window.wx && $.events.trigger("wx_cfg_init", e)
                                };
                            return {
                                ready: function(r, n, o) {
                                    if (n) {
                                        e && (e = null);
                                        var a = function() {
                                            $.events.trigger("wx_sign_get", !0)
                                        };
                                        window.wx ? a() : $.events.listen("wx_js_load", a)
                                    }
                                    e && window.wx && t ? r && r.call(null, e) : r && $.events.listen("wx_api_ready", r), o && $.events.listen("wx_api_error", o)
                                },
                                signatureReady: function(t) {
                                    e = t, r()
                                },
                                getSignature: function() {
                                    return e
                                },
                                jsReady: function(e) {
                                    $.events.listen("wx_cfg_init", e), $.events.trigger("wx_js_load"), $.events.remove("wx_js_load"), r()
                                },
                                wxReady: function() {
                                    t = !0
                                }
                            }
                        }
                    }(), $.calendar = {}, $.foot = function() {
                        var e = [];
                        return {
                            init: function() {
                                for (var t = arguments.length, r = 0; r < t; r++) e.push(arguments[r])
                            },
                            get: function() {
                                return e
                            }
                        }
                    }(), $.qqbrower = {
                        openUrlInWechat: function(e, t) {
                            var r = "",
                                n = e,
                                o = $.cookie.get("PPRD_P");
                            if (o) {
                                var a = o.match(/QZGDT\.(\w+)-/);
                                a && (r = a[1])
                            }
                            e = $.url.addRd(e, "17047.1.4"), r && (n = "http://wqs.jd.com/ad/jump.shtml?curl=" + encodeURIComponent(e) + "&qz_gdt=" + r), $.sendJs("//jsapi.qq.com/get?api=app.openUrlInWechat", {
                                onLoad: function() {
                                    if (window.browser && window.browser.app && window.browser.app.openUrlInWechat) {
                                        var o = {
                                            url: n
                                        };
                                        try {
                                            browser.app.openUrlInWechat(o, function(n) {
                                                console.log(n), r && reportAdTraceInfo(r, e, 1), t && t(0, n)
                                            }, function(n) {
                                                console.log(n), r && reportAdTraceInfo(r, e, 0), t && t(1, n)
                                            })
                                        } catch (e) {
                                            t && t(2, e)
                                        }
                                    } else console.log("browser is null"), t && t(3, "browser is null"), r && reportAdTraceInfo(r, e, 0)
                                }
                            })
                        }
                    }, $.GLOBAL_CONFIG = {
                        CK_WX_CURTAINAD: "curtainAdShow",
                        CK_SQ_FOOT_AD: "ckfootAdShow",
                        CK_SQ_HOMEPAGE: "qqmobile_homepage",
                        CK_NETWORK: "network",
                        CK_RETINA: "retina",
                        CK_CID: "cid",
                        CK_WEBP: "webp",
                        CK_TIPSKEY: "jd_newversion_062021",
                        EVENT_SQ_FOOT: "e_s_f",
                        EVENT_WX_FOOT: "e_w_f",
                        ARR_DELAY_PPMS: [],
                        COMBOLOAD: {
                            ppms: [],
                            css: []
                        }
                    }, $.log = {
                        add: function() {},
                        add2: function() {},
                        add3: function() {},
                        get: function() {},
                        report: function() {}
                    }, $.store = {
                        _ready: function(e, t) {
                            var r = [e].concat(Array.prototype.slice.call(t));
                            $.store._exeStore ? $.store._exeStore.apply(null, r) : $.events.listen("event_store_quene", function() {
                                $.store._exeStore.apply(null, r)
                            })
                        },
                        getValue: function(e, t, r) {
                            return this._ready("getValue", arguments)
                        },
                        setHistory: function(e) {
                            window.wgStorage ? wgStorage.set(e, !0) : window.wgStorageReady = function(t) {
                                t.set(e, !0)
                            }
                        },
                        setValue: function(e, t, r, n, o) {
                            return this._ready("setValue", arguments)
                        },
                        get: function(e, t, r, n) {
                            return this._ready("get", arguments)
                        },
                        set: function(e, t, r, n, o) {
                            return this._ready("set", arguments)
                        },
                        del: function(e, t, r, n) {
                            return this._ready("del", arguments)
                        },
                        comboLoad: function(e, t) {
                            var r = "[object Array]" === Object.prototype.toString.call(e) ? e : [e];
                            $.store._comboLoad ? $.store._comboLoad(r, t) : $.GLOBAL_CONFIG.COMBOLOAD[t] = $.GLOBAL_CONFIG.COMBOLOAD[t].concat(r)
                        },
                        getItem: function(e, t, r, n) {
                            return this._ready("getItem", arguments)
                        },
                        setItem: function(e, t, r, n, o, a) {
                            return this._ready("setItem", arguments)
                        },
                        delItem: function(e, t, r, n) {
                            return this._ready("delItem", arguments)
                        }
                    }, $.traceid = function() {
                        function e(e) {
                            if (!e || !e.bizId || !e.operateId) return "";
                            var r, o, a, i, c = "",
                                s = e.operateId,
                                u = e.bizId,
                                l = e.isServer || 0,
                                d = new Date,
                                p = new Date("2017/01/01"),
                                m = parseInt((d.getTime() - p.getTime()) / 1e3);
                            r = 1e3 * parseInt(100 * Math.random()) + d.getMilliseconds();
                            try {
                                return r &= 32767, s &= 2047, u &= 63, o = 1073741823 & m, r = r.toString(2), s = s.toString(2), u = u.toString(2), o = o.toString(2), r = "000000000000000".substr(0, 15 - r.length) + r, s = "00000000000".substr(0, 11 - s.length) + s, u = "000000".substr(0, 6 - u.length) + u, a = t("0" + o, 33), i = parseInt(l + u + s + r, 2) + "", c = n(a, i), window.traceid = c, c
                            } catch (e) {}
                        }

                        function t(e, t) {
                            var n, o, a = parseInt(e, 2),
                                i = "0",
                                c = [],
                                s = Math.pow(2, t) + "";
                            for (o = s.length - 1; o > -1; o--) n = s[o], c.push(a * n + "");
                            for (o = 0; o < c.length; o++) i = r(i, c[o], o);
                            return i
                        }

                        function r(e, t, r) {
                            var n, o, a;
                            return o = e.substr(0, e.length - r), a = e.substr(e.length - r), n = o / 1 + t / 1, n + a
                        }

                        function n(e, t) {
                            var r, n, o = 0,
                                a = [],
                                i = e.length,
                                c = t.length,
                                s = Math.max(i, c);
                            for (r = 0; r < s; r++)(n = (i - r > 0 ? e.charAt(i - r - 1) / 1 : 0) + (c - r > 0 ? t.charAt(c - r - 1) / 1 : 0) + o) >= 10 ? (o = 1, a.push(n % 10)) : (o = 0, a.push(n));
                            return a.reverse().join("")
                        }
                        return window.initTraceid && e(window.initTraceid), {
                            get: e
                        }
                    }(), $.cgi = function() {
                        function e(e, t) {
                            if ("md5" == e.recoveryType) {
                                if (!window._coss_cgi_recovery) return t;
                                var r = t.split("/"),
                                    n = r[r.length - 2],
                                    o = r[r.length - 1].split("?")[0],
                                    a = window.decodeURIComponent(t.split("?")[1] || ""),
                                    i = {},
                                    c = a.split("&").map(function(t) {
                                        var r = t.split("=")[0];
                                        if (e.batchParamKey && e.sep) {
                                            for (var n = e.batchParamKey.split("|"), o = e.sep.split(""), a = !1, c = 0, s = n.length; c < s; c++) {
                                                var u = n[c],
                                                    l = o[c];
                                                if (r == u) {
                                                    var d = (t.split("=")[1] || "").split(l);
                                                    i[r] = r + "=" + d.sort().join(l), a = !0;
                                                    break
                                                }
                                            }!a && (i[r] = t)
                                        } else i[r] = t;
                                        return r
                                    }),
                                    s = _coss_cgi_recovery[n] || [];
                                (c = c.filter(function(e) {
                                    var t = !!i[e].split("=")[1],
                                        r = s.some(function(t) {
                                            return e == t
                                        });
                                    return t && r
                                })).sort();
                                var u = c.reduce(function(e, t, r) {
                                        return e + "_" + i[t].replace(/[,:;|\/=]/g, "_")
                                    }, "mcoss_" + n + "_" + o),
                                    l = $.md5.getHash(u),
                                    d = (i[e.pKey] || "").split("=")[1],
                                    p = d.match(/[;|,]/);
                                return p && (d = d.split(p[0])[0]), (d = parseInt(d)) || (d = 0), "seckill" == n && "pingou" == o && (n = "pingou_v0"), "//wqs.jd.com/data/coss/recovery/" + n + "2/" + d + "/" + l + ".shtml?" + a
                            }
                            return e.recoveryType, t
                        }
                        var t = (window._cgiRecoveryRule || [])[0] || {},
                            r = t.rules || [],
                            n = 1 * ($.cookie.get("visitkey") || "0").substr(-2),
                            o = $.url.getUrlParam("cgirecovery");
                        return {
                            getCgiRccoveryUrl: function(a) {
                                if (!o && 1 != t.open || !a || !r.length) return a;
                                for (var i = 0, c = r.length; i < c; i++) {
                                    var s = r[i];
                                    if (getLinkUrl(a, "cgi").indexOf(s.cgiUrl) > -1 && (o || "1" == t.recoveryAll || n < s.vk)) {
                                        try {
                                            return e(s, a)
                                        } catch (e) {
                                            return console.warn("createRecoverUrl:" + e), a
                                        }
                                        break
                                    }
                                }
                                return a
                            },
                            getCallback: function(e, t, n) {
                                function o(e, t) {
                                    var e = e || {},
                                        t = t || {};
                                    for (var r in t) e[r] = t[r]
                                }

                                function a(e) {
                                    if (!e) return "cb";
                                    var t = [];
                                    for (var r in e) {
                                        var n = e[r] + "";
                                        n && t.push(r + "_" + n)
                                    }
                                    var o = "cb" + $.md5.getHash(t.sort().join("_"));
                                    return !i.allowNum && (o = o.replace(/\d/g, "")), o
                                }
                                if (!e) return "cb";
                                var i = {
                                        allowNum: !0
                                    },
                                    c = t || {},
                                    s = $.url.parseUrl(e),
                                    u = s.params;
                                if (c._path = s.path, o(u, c), o(i, n), !window._coss_cgi_recovery || !r.length) return a(u);
                                for (var l = 0, d = r.length; l < d; l++) {
                                    var p = r[l];
                                    if (getLinkUrl(e, "cgi").indexOf(p.cgiUrl) > -1) {
                                        var m = e.split("/"),
                                            g = m[m.length - 2],
                                            f = _coss_cgi_recovery[g] || [],
                                            w = {};
                                        return w._path = s.path, f.forEach(function(e) {
                                            u[e] + "" && "callback" != e && (w[e] = u[e])
                                        }), a(w)
                                    }
                                }
                                return a(u)
                            }
                        }
                    }(), $.disasterRecovery = {
                        batchkeyword: {},
                        brandspecial: {},
                        categoryentry: {},
                        console_log_report: {},
                        cpc: {},
                        cpcnew: {},
                        cpt: {},
                        keywordsearch: {},
                        mart: {},
                        materialQuery: {},
                        mportal: {},
                        multiMart: {},
                        ranklist: {},
                        seckill: {},
                        spematerial: {}
                    }, $.wxapp = function() {
                        var e = /(?:https?:)?\/\/(?:(?:wq(?:m?item)?\.jd\.(?:com|hk)\/m?item\/view)|(?:wqs\.jd\.com\/item\/jd\.shtml)).*[?&]sku=(\d+)/i,
                            t = /(?:https?:)?\/\/(?:(?:item\.jd\.com\/|(?:(?:m?item(?:\.m)?\.(?:jd|paipai)\.(?:com|hk)|(?:m|mitem)\.(?:yiyaojd|jkcsjd)\.com)\/product\/)))(\d+)\.html/i,
                            r = /(?:https?:)?\/\/(?:m?item(?:\.m)?\.jd\.(?:com|hk)\/ware\/view\.action).*[?&]wareId=(\d+)/i,
                            n = /(?:https?:)?\/\/wqs\.jd\.com\/my\/index/i,
                            o = /(?:https?:)?\/\/(?:(?:wq(?:sou)?\.jd\.com\/search\/searchn)|(?:wqs\.jd\.com\/search\/index)).*[?&]key=([^&#]*)/i,
                            a = /(?:https?:)?\/\/(?:(?:wq(?:deal)?\.jd\.com\/deal\/mshopcart\/mycart)|(?:wqs\.jd\.com\/my\/cart\/jdshopcart))/i,
                            i = /(?:https?:)?\/\/(?:(?:wq(?:deal2?)?\.jd\.com\/deal\/(?:confirmorder|msubmit)\/)|(?:wqs\.jd\.com\/order\/wq\.confirm\.shtml))([^?]*)/i,
                            c = /(?:https?:)?\/\/wqs\.jd\.com\/pingou\/item\.shtml.*[?&]sku=(\d+)/i,
                            s = /(?:https?:)?\/\/wqs\.jd\.com\/pingou\/detail\.shtml(\?[^?]*)/i,
                            u = /(?:https?:)?\/\/wqs\.jd\.com\/shoppingv2\/shopping\.html[^#]*(\#wq.gwq)?/i,
                            l = /(?:https?:)?\/\/wq.jd.com\/wxportal\/index.*/i,
                            d = /(?:https?:)?\/\/union-click\.jd\.com\//i,
                            p = {
                                index: "/pages/index/index",
                                detail: "/pages/item/detail/detail",
                                my: "/pages/my/index/index",
                                cart: "/pages/cart/cart/cart",
                                search: "/pages/search/list/list",
                                pgsearch: "/pages/pingou_second/search/search",
                                buy: "/pages/pay/index/index",
                                account: "/pages/my/account/account",
                                pgitem: "/pages/item/detail/detail",
                                pgdetail: "/pages/pingou/detail/index",
                                shop: "/pages/shop/index/index",
                                gwqpage: "/pages/gwq/index",
                                category: "/pages/cate/cate",
                                coupon: "/pages/my/coupon/coupon",
                                proxy: "/pages/union/proxy/proxy"
                            },
                            m = $.url ? $.url.getUrlParam("miniprogram") : "",
                            g = $.url ? $.url.getHashParam("wxa_level") : "",
                            f = $.url ? $.url.getHashParam("cookie") : "",
                            w = $.cookie ? $.cookie.get("wxapp_type") : 0,
                            h = /miniProgram/i.test(navigator.userAgent);
                        !g && (g = $.url ? $.url.getUrlParam("wxa_level") : ""), !f && (f = $.url ? $.url.getUrlParam("cookie") : "");
                        var v = g;
                        if (!v && (v = $.cookie ? $.cookie.get("wxa_level") : ""), v = v ? parseInt(v, 10) : 1, $.cookie && $.cookie.set("wxa_level", v, 1440, "/", "jd.com"), 0 == w || h || document.referrer || ($.cookie && $.cookie.del("wxapp_type", "/", "jd.com"), w = 0), f && window.JSON) {
                            var _ = {};
                            try {
                                _ = window.JSON.parse(decodeURIComponent(f))
                            } catch (e) {
                                _ = {}
                            }
                            _.wxapp_type && (w = _.wxapp_type)
                        }
                        return {
                            wxappType: w || 0,
                            urls: p,
                            transform: {
                                index: function(e) {
                                    return e.match(l) ? p.index : ""
                                },
                                detail: function(n, o) {
                                    var a = n.match(e);
                                    if (!a && (a = n.match(t)), !a && (a = n.match(r)), a) {
                                        var i = /ispg=1/.test(n),
                                            c = [],
                                            s = "",
                                            u = "";
                                        if (o && (s = o.getAttribute("item_name"), u = o.getAttribute("item_cover")), !s) {
                                            var l = n.match(/name=([^&#]*)/);
                                            l && l.length > 1 && l[1] && (s = l[1])
                                        }
                                        if (!u) {
                                            var d = n.match(/cover=([^&#]*)/);
                                            d && d.length > 1 && d[1] && (u = d[1])
                                        }
                                        if (s && c.push("name=" + s), u) {
                                            var m = decodeURIComponent(u);
                                            /^(https?:)?\/\//.test(m) ? (m = m.replace(/^http:/, "https:"), /^\/\//.test(m) && (m = "https:" + m), u = encodeURIComponent(m)) : u = encodeURIComponent("https:" + $.img.getScaleImg(m, 350, 350)), c.push("cover=" + u)
                                        }
                                        return (i ? p.pgitem : p.detail) + "?sku=" + a[1] + (c.length > 0 ? "&" + c.join("&") : "")
                                    }
                                    return ""
                                },
                                myindex: function(e) {
                                    return e.match(n) ? p.my : ""
                                },
                                search: function(e) {
                                    var t = e.match(o);
                                    return 2 == w ? t ? p.pgsearch + "?key=" + t[1] : "" : t ? p.search + "?key=" + t[1] : ""
                                },
                                cart: function(e) {
                                    return e.match(a) ? p.cart : ""
                                },
                                pgitem: function(e) {
                                    var t = e.match(c);
                                    return t ? p.pgitem + "?sku=" + t[1] : ""
                                },
                                pgdetail: function(e) {
                                    var t = e.match(s);
                                    return t ? p.pgdetail + t[1] : ""
                                },
                                gwqpage: function(e) {
                                    var t = e.match(u);
                                    return t && !t[1] ? p.gwqpage : ""
                                },
                                cpslink: function(e) {
                                    return d.test(e) ? p.proxy + "?spreadUrl=" + encodeURIComponent(e) : ""
                                },
                                buy: function(e) {
                                    var t = e.match(i);
                                    if (t) {
                                        var r = [],
                                            n = "";
                                        n = e.replace(i, ""), (t[1] ? "global" == t[1] : !!n.match(/globalbuy=/i)) && r.push("category=global");
                                        var o = /commlist=([^&]*)/i,
                                            a = n.match(o);
                                        if (a) {
                                            var c = a[1].split(",");
                                            r.push("sku=" + c[3] || c[0]), r.push("num=" + c[2] || "1"), c.length > 7 && r.push("zp=" + c[7]), r.push("commlist=" + a[1])
                                        }
                                        var s = /ybcommlist=([^&]*)/i,
                                            u = n.match(s);
                                        u && r.push("ybcommlist=" + u[1]);
                                        var l = /activeid=([^&]*)/i,
                                            d = n.match(l),
                                            m = /bizkey=([^&]*)/i,
                                            g = n.match(m),
                                            f = /bizval=([^&]*)/i,
                                            w = n.match(f);
                                        return d && r.push("activeid=" + d[1]), g && r.push("bizkey=" + g[1]), w && r.push("bizval=" + w[1]), p.buy + "?" + r.join("&")
                                    }
                                    return ""
                                }
                            },
                            isWxapp: function(e) {
                                m ? e && e("1" == m) : h ? e && e(!0) : w ? e && e(!0) : g ? e && e(!0) : $.wxapi ? $.wxapi.ready(function() {
                                    e && e("miniprogram" == window.__wxjs_environment)
                                }) : e && e(!1)
                            },
                            goto: function(e, t) {
                                $.wxapi && $.wxapi.ready(function() {
                                    var r = e.replace(/\?.*$/, ""),
                                        n = ~r.indexOf(p.index) || ~r.indexOf(p.my) || ~r.indexOf(p.gwqpage) || ~r.indexOf(p.category) ? "switchTab" : "navigateTo";
                                    "switchTab" != n && (v >= 8 ? n = "redirectTo" : t && (n = t)), window.wx && window.wx.miniProgram ? window.wx && window.wx.miniProgram && window.wx.miniProgram[n]({
                                        url: addWxappCookies(e)
                                    }) : window.WeixinJSBridge && window.WeixinJSBridge && window.WeixinJSBridge.invoke("invokeMiniProgramAPI", {
                                        name: n,
                                        arg: {
                                            url: addWxappCookies(e)
                                        }
                                    })
                                })
                            }
                        }
                    }(), checkCookie(), checkWebp(), checkTime(), setOpenid(), hideWxworkMenu();
                    try {
                        document.referrer && sessionStorage.setItem("refer", document.referrer)
                    } catch (e) {}
                    window[name] = $
                }("JD"),
                function(e, t) {
                    e.waObjectName = t, e[t] = e[t] || function() {
                        for (var r = 0; r < arguments.length; r++) "object" == typeof arguments[r] && (arguments[r] = JSON.parse(JSON.stringify(arguments[r])));
                        (e[t].q = e[t].q || []).push(arguments)
                    }, e[t].l = 1 * new Date
                }(window, "wa"),
                function(e) {
                    function t(t) {
                        if (e && e.JD && e.JD.device && e._unsearch) {
                            var r = 1 == t ? "11" : "14";
                            "weixin" == e.JD.device.scene ? r = 1 == t ? "9" : "12" : "qq" == e.JD.device.scene && (r = 1 == t ? "10" : "13");
                            try {
                                e.jd && e.jd.smartbox && 1 == e.jd.smartbox._status ? e.JD.report.umpBiz({
                                    bizid: "36",
                                    operation: r,
                                    result: "0",
                                    source: "0",
                                    message: "smartbox component loaded success(" + t + ")"
                                }) : e.JD.report.umpBiz({
                                    bizid: "36",
                                    operation: r,
                                    result: "1",
                                    source: "0",
                                    message: "smartbox component loaded fail(" + t + ")"
                                })
                            } catch (e) {}
                        }
                    }
                    if (e.closeSearchEntrance = e.GLOBAL_WXSQ_HEADERCONFIG.CLOSE_SMARTBOX, e.closeSearchEntrance_m = e.GLOBAL_WXSQ_HEADERCONFIG.CLOSE_SMARTBOX_M, e.smartboxGrayStrategy = parseInt(e.GLOBAL_WXSQ_HEADERCONFIG.SMARTBOX_GRAY || 99, 10), e.smartboxGrayMtoStatic = parseInt(e.GLOBAL_WXSQ_HEADERCONFIG.SMARTBOX_GRAY_M || 0, 10), e._staticItemLinkRate = parseInt(e.GLOBAL_WXSQ_HEADERCONFIG.STATIC_ITEM_LINK || 0, 10), e._staticItemLinkMRate = parseInt(e.GLOBAL_WXSQ_HEADERCONFIG.STATIC_ITEM_LINK_M || 0, 10), e._searchWhiteList = e.GLOBAL_WXSQ_HEADERCONFIG.SEARCH_WHITE_LIST, e.__itemGray = parseInt((JD.cookie.get("visitkey") || "0").substr(-1), 10) < e._staticItemLinkRate, e.__itemMGray = parseInt((JD.cookie.get("visitkey") || "0").substr(-1), 10) < e._staticItemLinkMRate, e.getItemLink = function(t, r) {
                            var n = t.replace("//wq.jd.com/", "//wqitem.jd.com/"),
                                o = "//wqitem.jd.com/item/view";
                            if (parseInt(t) == t) {
                                var a = o + "?sku=";
                                window.__itemGray && (a = "//wqs.jd.com/item/jd.shtml?sku="), n = a + t
                            } else window.__itemGray && (n = n.replace(o, "//wqs.jd.com/item/jd.shtml"));
                            var i = e.JD.url.getUrlParam("sceneval");
                            return i && (n = e.JD.url.addUrlParam(n, {
                                sceneval: i
                            })), r && (n = e.JD.url.addUrlParam(n, {
                                ptag: r
                            })), n
                        }, e.getMItemLink = function(t, r) {
                            var n = "";
                            if (parseInt(t) == t) n = window.__itemMGray ? "//wqs.jd.com/item/jd.shtml?sku=" + t : "//item.m.jd.com/product/" + t + ".html";
                            else {
                                if (n = t, /\/\/(?:wq|wqs|wqitem|wqmitem)\.jd\.com\//.test(n)) {
                                    var o = e.JD.url.getUrlParam("sku", n);
                                    n = n.replace(/\/\/(?:wq|wqs|wqitem|wqmitem)\.jd\.com.*sku=\d+\&?/, "//item.m.jd.com/product/" + o + ".html?")
                                }
                                if (window.__itemMGray) {
                                    var a = n.match(/\/(\d+)\./);
                                    a && a.length > 0 && (n = "//wqs.jd.com/item/jd.shtml?sku=" + a[1]), n = e.JD.url.addUrlParam(n, {
                                        sceneval: "2"
                                    })
                                }
                            }
                            if (n && !window.__itemMGray) {
                                var i = e.JD.url.getUrlParam("sid", n),
                                    c = e.JD.url.getUrlParam("sf", n);
                                i || (n = e.JD.url.addUrlParam(n, {
                                    sid: e.JD.cookie.get("sid")
                                })), c || (n = e.JD.url.addUrlParam(n, {
                                    sf: "newM"
                                }))
                            }
                            var s = e.JD.url.getUrlParam("sceneval");
                            return s && (n = e.JD.url.addUrlParam(n, {
                                sceneval: s
                            })), r && (n = e.JD.url.addUrlParam(n, {
                                ptag: r
                            })), n
                        }, window.setTimeout(function() {
                            t(1)
                        }, 2e3), window.setTimeout(function() {
                            t(2)
                        }, 5e3), e.closeSearchEntrance) {
                        var r = document.querySelector(".mod_searchbar");
                        r && (r.style.display = "none")
                    }
                    e._unsearch && !/\/\/wqs?(?:ou)?\.jd\.com\/search\//.test(location.href) && function() {
                        var t = "//wq.360buyimg.com/js/common/dest/wq.headsearchbar.min.js?t=" + (window.GLOBAL_WXSQ_HEADERCONFIG ? window.GLOBAL_WXSQ_HEADERCONFIG.SMARTBOX : "201903201038");
                        e.JD && e.JD.sendJs(t)
                    }()
                }(window),
                function(e) {
                    function t(e, t, r) {
                        var n = new RegExp("(^|[~\\W])" + e + "\\.([^-]*)", "i"),
                            o = t.match(n),
                            a = r.match(n);
                        return a && a.length > 0 ? r = o && o.length > 1 ? r.replace(n, "$1" + e + "." + o[2]) : r.replace(n, "") : o && o.length > 1 && (r += (r ? "-" : "") + e + "." + o[2]), r
                    }

                    function r() {
                        var r = {
                                PPRD_P: 4320,
                                visitkey: 518400,
                                __wga: 259200,
                                __jdv: 1440,
                                __jda: 1440,
                                unpl: 1440,
                                wq_addr: 999999,
                                wxapp_type: 0,
                                pinStatus: 4320,
                                appkey: 0,
                                customerinfo: 0,
                                source: 0
                            },
                            n = JD.url.getHashParam("cookie");
                        !n && (n = JD.url.getUrlParam("cookie"));
                        var o = JD.url.getHashParam("sens");
                        if (!o && (o = JD.url.getUrlParam("sens")), (n || o) && e.JSON) {
                            var a = {},
                                i = {};
                            try {
                                a = e.JSON.parse(decodeURIComponent(n))
                            } catch (e) {
                                a = {}
                            }
                            try {
                                i = e.JSON.parse(decodeURIComponent(o))
                            } catch (e) {
                                i = {}
                            }
                            l(a, i);
                            for (var c in a) {
                                var s = a[c];
                                switch (c) {
                                    case "PPRD_P":
                                        var u = e.JD.cookie.get("PPRD_P") || "";
                                        u = t("WDSTAG", s, u = t("GROUP", s, u = t("LOGID", s, u = t("UUID", s, u = t("CT", s, u = t("EA", s, u)))))), e.JD.cookie.set(c, u, 0 === r[c] ? null : r[c] || 1440, "/", "jd.com");
                                        break;
                                    default:
                                        e.JD.cookie.set(c, s, 0 === r[c] ? null : r[c] || 1440, "/", "jd.com")
                                }
                            }
                        }
                        var d = JD.url.getHashParam("wxappSeries");
                        if (!d && (d = JD.url.getUrlParam("wxappSeries")), d && e.JSON) {
                            var p = {};
                            try {
                                p = e.JSON.parse(decodeURIComponent(d))
                            } catch (e) {
                                p = {}
                            }
                            p.uuid && e.JD.cookie.set("wxapp_uuid", p.uuid, 525600, "/", "jd.com")
                        }
                        var m = JD.url.getHashParam("wdref");
                        if (!m && (m = JD.url.getUrlParam("wdref")), m) try {
                            window.sessionStorage.setItem("refer", decodeURIComponent(m))
                        } catch (e) {
                            console.log("setItem fail")
                        }
                    }

                    function n() {
                        var e = !0,
                            t = !1,
                            r = document.body || document;
                        r.addEventListener("touchstart", function(e) {
                            t = !0
                        }, !0), r.addEventListener("touchmove", function(e) {
                            t = !1
                        }, !0), r.addEventListener("touchend", function(r) {
                            if (t) {
                                var n = a(r.target),
                                    i = n ? o(n) : "",
                                    c = "",
                                    l = "";
                                if (i) {
                                    if (JD.wxapp.wxappType < 2 && (!(l = JD.wxapp.transform.detail(i, n)) && (l = JD.wxapp.transform.index(i)), !l && (l = JD.wxapp.transform.myindex(i)), !l && (l = JD.wxapp.transform.search(i)), !l && (l = JD.wxapp.transform.cart(i)), !l && (l = JD.wxapp.transform.buy(i)), !l && (l = JD.wxapp.transform.pgitem(i)), !l && (l = JD.wxapp.transform.pgdetail(i)), !l && (l = JD.wxapp.transform.gwqpage(i)), !l && (l = JD.wxapp.transform.cpslink(i))), !l) {
                                        var d = s(i);
                                        d && (l = d.url || "", c = d.jtype || "")
                                    }
                                    l && (l = u(i, l), e && (e = !1, window.setTimeout(function() {
                                        e = !0
                                    }, 500), JD.wxapp.goto(l, c)), r.preventDefault(), r.stopPropagation())
                                }
                            }
                        }, !0)
                    }

                    function o(e) {
                        var t = "",
                            r = "";
                        if ("a" == e.tagName.toLowerCase() && e.href && !/^javascript/i.test(e.href)) t = e.href, r = "href";
                        else
                            for (var n = 0, o = p.length; n < o; ++n) {
                                var a = p[n];
                                if (t = e.getAttribute(a)) {
                                    r = a;
                                    break
                                }
                            }
                        if (t) try {
                            i(e, r, t)
                        } catch (e) {}
                        return t
                    }

                    function a(e) {
                        for (var t = 0; e && e.tagName && t < 6;) {
                            if (e.getAttribute("nowxa")) return null;
                            if ("a" == e.tagName.toLowerCase() && e.href && !/^javascript/i.test(e.href)) return e;
                            for (var r = 0, n = p.length; r < n; ++r) {
                                var o = p[r];
                                if (e.getAttribute(o)) return e
                            }
                            e = e.parentNode, t++
                        }
                        return null
                    }

                    function i(e, t, r) {
                        if (t && (/\/\/(?:pro\.m\.jd\.com|h5\.m\.jd\.com|h5static\.m\.jd\.com)\//.test(r) || /\/\/(?:sale\.jd\.com)\/(?:act|wq|m|app)\//.test(r))) {
                            /\/\/(?:pro\.m\.jd\.com)\/wq\//.test(r) && (r = r.replace(/\/wq\//, "/mini/"));
                            var n = r.split("#"),
                                o = n[0],
                                a = n.length > 1 ? n[1] : "";
                            o += (~r.indexOf("?") ? "&" : "?") + "wxAppName=jd" + (a ? "#" + a : ""), "href" == t ? e.href = o : e.setAttribute(t, o)
                        }
                    }

                    function c() {
                        var e = 0 == JD.wxapp.wxappType ? "1" : JD.wxapp.wxappType,
                            t = {
                                1: "34020",
                                2: "34022",
                                3: "34274"
                            };
                        t[e] && (window["showPageData" + t[e]] = function(e) {
                            e.data && e.data.length > 0 && (d = e.data)
                        }, JD.sendJs("//wq.360buyimg.com/data/ppms/js/ppms.pagev" + t[e] + ".jsonp"))
                    }

                    function s(e) {
                        for (var t = d.length, r = 0; r < t; ++r) {
                            var n = d[r],
                                o = null;
                            o = 1 == n.regmatch ? new RegExp(n.url.replace(/\\\\/g, "\\")) : new RegExp(n.url.replace(/([\\\.\*\?\+\^\$\-\[\]\(\)\{\}])/g, "\\$1"));
                            var a = e.match(o);
                            if (a) {
                                var i = ~n.wxappurl.indexOf("?") ? "&" : "?",
                                    c = [];
                                if (n.params)
                                    for (var s = n.params.split("|"), u = 0, l = s.length; u < l; ++u) {
                                        var p = s[u];
                                        if (/=/.test(p)) {
                                            w = p.split("=");
                                            var m = parseInt(w[1].replace(/^\$/, "") || "0", 10);
                                            m > 0 && c.push(w[0] + "=" + a[m])
                                        } else {
                                            var g = p,
                                                f = p,
                                                w = p.split(":");
                                            w.length > 1 && (g = w[0], f = w[1]);
                                            var h = new RegExp("[?&]" + g + "=([^&#]*)"),
                                                v = e.match(h);
                                            v && c.push(f + "=" + v[1])
                                        }
                                    }
                                return {
                                    url: n.wxappurl + (c.length > 0 ? i + c.join("&") : ""),
                                    jtype: n.jumptype
                                }
                            }
                        }
                        return ""
                    }

                    function u(e, t) {
                        for (var r = t, n = ["ptag", "pps"], o = 0, a = n.length; o < a; ++o) {
                            var i = n[o],
                                c = new RegExp("[?&]" + i + "=", "i");
                            if (!c.test(t) && c.test(e)) {
                                var s = new RegExp("[?&]" + i + "=([^&#]*)", "i"),
                                    u = e.match(s),
                                    l = ~r.indexOf("?") ? "&" : "?";
                                u && u.length > 1 && (r += l + i + "=" + u[1])
                            }
                        }
                        return r
                    }

                    function l(e, t) {
                        var e = e || {},
                            t = t || {};
                        for (var r in t) e[r] = t[r]
                    }
                    var d = [];
                    e.JD && e.JD.wxapp && e.JD.wxapp.wxappType > 0 && e.JD.wxapp.isWxapp(function(e) {
                        if (e) try {
                            r(), n(), c()
                        } catch (e) {}
                    });
                    var p = ["data-href", "data-href-self", "data-url", "data-tourl", "tourl", "target_href", "target", "link"]
                }(window),
                function(e) {
                    function t() {
                        var t = e.location.href.replace(e.location.hash, ""),
                            r = document.cookie.match(/visitkey=([^;]*)/),
                            n = r && r[1] ? r[1] : "",
                            o = e.navigator.userAgent;
                        return [t, t.length, n, o, o.length, "23FrfsYf274dafnUfa-2-4B24534K21V"]
                    }

                    function r(e) {
                        for (var t = [], r = 0; r < e; r++) t.push(r);
                        var n = Math.floor(10 * Math.random());
                        return n < 5 && (n += 5), {
                            pick: t,
                            divisor: n,
                            remainder: Math.floor(Math.random() * n) % n
                        }
                    }

                    function n(e, t, r) {
                        for (var n = "", o = 0, i = 0; i < t.pick.length; i++) {
                            var c = t.pick[i];
                            o += Math.pow(2, c), n += e[c]
                        }
                        n += a[parseInt(r) - 1];
                        for (var s = t.divisor, u = t.remainder, l = [r, o.toString().length, o, s, u], d = u; d < n.length; d += s) l.push(n[d]);
                        return l.join("")
                    }

                    function o(t) {
                        if (e.btoa) return e.btoa(t);
                        for (var r, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), o = [], a = 0; a < t.length; a += 3) 3 === (r = t.substr(a, 3).split("").map(function(e) {
                            return e.charCodeAt()
                        })).length ? o.push(n[63 & r[0] >>> 2], n[63 & (r[0] << 4 | r[1] >>> 4)], n[63 & (r[1] << 2 | r[2] >>> 6)], n[63 & r[2]]) : 2 === r.length ? o.push(n[63 & r[0] >>> 2], n[63 & (r[0] << 4 | r[1] >>> 4)], n[63 & r[1] << 2], "=") : 1 === r.length && o.push(n[63 & r[0] >>> 2], n[63 & r[0] << 4], "=", "=");
                        return o.join("")
                    }
                    var a = ["QWYOREUOCDSIOHF)#U*HF&!(&)(H)RH)%", "HWYOREF)#U*Q)(H)RCDSHF&!(&)%UOIOH"],
                        i = "01";
                    try {
                        var c = function() {
                            var e = t();
                            return o(n(e, r(e.length), i))
                        }();
                        e.JD && e.JD.cookie && e.JD.cookie.set("wqmnx1", c, 60, "/", "jd.com")
                    } catch (e) {
                        console.log("js token err")
                    }
                }(window);
        