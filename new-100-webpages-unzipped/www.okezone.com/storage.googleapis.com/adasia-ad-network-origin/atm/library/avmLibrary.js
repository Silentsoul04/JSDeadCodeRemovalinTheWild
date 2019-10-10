var adAsiaTM = {
    adAsiaUserIp: 0,
    dmpUserSegments: "",
    marketList: "id kh my ph sg th tw vn".split(" "),
    writeIpData: function(a) {
        adAsiaTM.setCookie("adAsiaUserIp", a.ip, 7);
        adAsiaTM.adAsiaUserIp = a.ip
    },
    init: function(a) {
        console.time("-- ATM info -- Performance check");
        var e = e || 0;
        0 < a.length && (window.adAsiaZoneList = a);
        adAsiaTM.adAsiaUserIp = adAsiaTM.getCookie("adAsiaUserIp") || 0;
        0 === adAsiaTM.adAsiaUserIp && (a = document.createElement("script"), a.type = "application/javascript", a.id = "sdk-atm-ip", a.async = !0, a.src = "https://api.ipify.org?format=jsonp&callback=adAsiaTM.writeIpData",
            document.head.appendChild(a));
        adAsiaTM.dmpUserSegments = adAsiaTM.getCookie("dmpUserSegments") || "";
        "undefined" === typeof jQuery && ("snapshot.canon-asia.com" === window.location.hostname ? (a = document.createElement("script"), a.type = "text/javascript", a.id = "sdk-atm-j", a.async = !0, a.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js") : (a = document.createElement("script"), a.type = "text/javascript", a.id = "sdk-atm-j", a.async = !0, a.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"),
            document.head.appendChild(a));
        0 === e && (a = document.createElement("script"), a.type = "application/javascript", a.id = "sdk-atm-apm", a.async = !0, a.src = "//ced.sascdn.com/tag/2060/smart.js", a.onload = function() {
            var a = document.createElement("script");
            a.id = "sdk-atm-apm-e";
            a.text = "var sas = sas || {};sas.cmd = sas.cmd || [];sas.cmd.push(function() {sas.setup({ networkid: 2060, domain: '//adnetwork.adasiaholdings.com', async: true });});";
            document.head.appendChild(a)
        }, document.head.appendChild(a));
        a = document.createElement("script");
        a.type = "text/javascript";
        a.id = "sdk-atm-sticky";
        a.async = !0;
        a.src = "https://storage.googleapis.com/adasia-ad-network-origin/atm/library/atmSticky.js";
        document.head.appendChild(a);
        a = document.createElement("script");
        a.type = "text/javascript";
        a.id = "sdk-atm-config";
        a.src = "https://storage.googleapis.com/adasia-ad-network-origin/atm/config/domain.js";
        a.onload = adAsiaTM.initGTM;
        document.head.appendChild(a)
    },
    initGTM: function() {
        var a = window.location.hostname;
        document.createElement("script");
        var e = 0,
            k = k || 0,
            p = adAsiaTM.marketList.length,
            b;
        for (b in adAsiaPGTM)
            if (a.match(new RegExp(".*" + b, "g"))) {
                e = adAsiaPGTM[b];
                break
            }
        window.adAsiaDataLayer = window.adAsiaDataLayer || [];
        adAsiaDataLayer.zones = [];
        adAsiaDataLayer.ips = [];
        a = document.createElement("script");
        a.type = "text/javascript";
        a.id = "sdk-atm-gam-lib";
        a.async = !0;
        a.src = "https://www.googletagservices.com/tag/js/gpt.js";
        document.head.appendChild(a);
        for (b = 0; b < p; b++) a = document.createElement("script"), a.type = "text/javascript", a.id = "sdk-atm-" + adAsiaTM.marketList[b] + "-key", a.async = !0, a.src = "https://storage.googleapis.com/adasia-ad-network-origin/atm/config/" +
            adAsiaTM.marketList[b] + "_block_keywords.js", document.head.appendChild(a);
        e && 0 === k ? (a = document.createElement("script"), a.type = "text/javascript", a.id = "sdk-atm-ui", a.text = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','adAsiaDataLayer','" + e +
            "');", document.head.appendChild(a), a = document.createElement("script"), a.type = "text/javascript", a.id = "sdk-atm-ui-e", a.text = "var googletag = googletag || {}; googletag.cmd = googletag.cmd || [];", document.head.appendChild(a)) : console.log("-- ATM info -- Domain is not defined")
    },
    toggleAnchor: function(a) {
        a = document.getElementById("adAsia_anchor_" + a);
        50 <= (a.clientHeight || 0) ? a.style.height = "0px" : a.style.height = "50px"
    },
    setCookie: function(a, e, k) {
        var p = new Date;
        k = k || 30;
        p.setTime(p.getTime() + 864E5 * k);
        k = "expires=" +
            p.toGMTString();
        window.document.cookie = a + "=" + e + "; " + k + "; path=/"
    },
    getCookie: function(a) {
        a += "=";
        for (var e = window.document.cookie.split(";"), k = 0; k < e.length; k++) {
            var p = e[k].trim();
            if (0 === p.indexOf(a)) return p.substring(a.length, p.length)
        }
        return ""
    },
    appendContainer: function(a) {
        var e = window.adAsiaDataLayer || [],
            k = window.adAsiaZoneList || [],
            p = [],
            b = e.zones || e[1] || [],
            t = e.market || 0,
            q = e.ips || [],
            g = e.browsers || [],
            y = e.keywords || [],
            O = b.length,
            m = q.length ? 1 : 0,
            n = g.length ? 1 : 0,
            w = 0,
            z = "",
            E = "",
            A = [];
        t && (y = e[t + "_keywords"]);
        e = y.length ? y.length : 0;
        m && adAsiaTM.adAsiaUserIp && -1 !== q.indexOf(adAsiaTM.adAsiaUserIp) && (w = 1, z = " by IP");
        if (n && 0 === w) {
            q = navigator.userAgent;
            m = g.length;
            for (var c = 0; c < m; c++)
                if (t = g[c].os, n = g[c].os_version.split(","), infoMatch = q.match(new RegExp("(" + t + "(?=/))/?\\s*(\\d+)", "i")) || [], t = infoMatch[2] ? infoMatch[2] : 0, infoMatch.length && t && -1 !== n.indexOf(t)) {
                    w = 1;
                    z = " by Browser";
                    break
                }
        }
        if (e && 0 === w)
            for (g = document.URL, q = document.title, m = document.querySelector("meta[name=description]") || document.querySelector("meta[name=Description]"),
                n = document.querySelector("meta[name=keywords]") || document.querySelector("meta[name=Keywords]"), t = document.body.innerText, pageUrl = g ? g.toLowerCase() : "", pageTitle = q ? q.toLowerCase() : "", pageDesc = m ? m.getAttribute("content").toLowerCase() : "", pageKeywords = n ? n.getAttribute("content").toLowerCase() : "", pageContent = t ? t.toLowerCase() : "", pageAllContent = pageUrl + " " + pageTitle + " " + pageDesc + " " + pageKeywords + " " + pageContent, c = 0; c < e; c++)
                if ((g = "" !== y[c] ? y[c].toLowerCase() : "") && (-1 !== pageAllContent.indexOf(" " + g) || -1 !==
                        pageAllContent.indexOf(" " + g + " ") || -1 !== pageAllContent.indexOf(g + " "))) {
                    w = 1;
                    E = g;
                    z = " by Keywords";
                    break
                }
        if (0 === w) {
            for (c = 0; c < O; c++) {
                var h = b[c].zoneType,
                    B = b[c].siteId || "",
                    u = b[c].pageId || "",
                    D = b[c].pageName || "",
                    C = b[c].slotId || "",
                    F = b[c].scriptFormat || "",
                    I = b[c].isContainerAuto || 0,
                    J = +b[c].positionAuto || 0,
                    d = b[c].containerType,
                    l = b[c].containerId,
                    P = b[c].paragraphNumber || 0;
                m = b[c].slotName || "";
                n = b[c].slotSizes || "";
                var r = b[c].slotId || "";
                t = b[c].AdomikEnable || 0;
                var Q = b[c].collapseEnable || 0,
                    K = b[c].mappingEnable ||
                    0,
                    G = b[c].mappingRule || "";
                y = b[c].isHiddenIframe || 0;
                w = b[c].isSticky || 0;
                z = b[c].stickyTopMargin || 0;
                var f = b[c].anchorPosition || 0;
                E = b[c].AdlooxEnable || 0;
                var x = b[c].scrollerAdsHeight || 0;
                q = b[c].refreshAdslot || 0;
                e = b[c].autoRefreshAds || 0;
                var L = b[c].articleSelector || "",
                    H = +b[c].minHeight || 0,
                    M = b[c].adsAlign || "center",
                    N = b[c].enableLazyLoad || 0,
                    R = b[c].lazyLoadOptions || "{fetchMarginPercent: 500,renderMarginPercent: 200,mobileScaling: 2.0}";
                g = "";
                if (void 0 !== a)
                    if (a === l) k.push(r);
                    else continue;
                if (0 < k.length && -1 === k.indexOf(r)) console.log("-- ATM info -- Skip slot: " +
                    r);
                else if (0 < H && "" !== L && +jQuery(L).height() < H) console.log("-- ATM info -- Min height:" + H);
                else {
                    "class" === d && (g = jQuery(jQuery("." + l)[P]));
                    "id" === d && (g = 0 < jQuery("#" + l).length ? jQuery("#" + l) : jQuery(document.getElementById(l)));
                    "position" === d && (g = jQuery("[position=" + l + "]"));
                    "dfp" === d && (g = jQuery("body"));
                    "apm" === h && (d = document.createElement("div"), d.id = "sas_" + C + "_container", d.style.width = "100%", d.style.position = "relative", l = document.createElement("div"), l.id = "sas_" + C, l.style.textAlign = M, l.style.width = "100%",
                        d.appendChild(l), I ? (count = g.contents().length, positionPercent = +J, idx = 0, 0 < positionPercent && 100 > positionPercent ? idx = Math.round(positionPercent * count / 100) : 100 === positionPercent && (idx = Math.round(count - 1)), jQuery(g.contents()[idx]).after(d)) : g.append(d), "agency_v2" === F ? (F = (new Date).getTime(), u = document.createElement("script"), u.type = "text/javascript", u.src = "https://cdnjs.cloudflare.com/ajax/libs/postscribe/2.0.8/postscribe.min.js", d.append(u), u = document.createElement("script"), u.type = "text/javascript",
                            u.text = "postscribe('#sas_" + C + '\', \'<script type="application/javascript" src="https://adnetwork.adasiaholdings.com/ac?out=js&nwid=2060&siteid=' + B + "&pgname=" + D + "&fmtid= " + C + "&tgt=[sas_target]&visit=m&tmstp=" + F + "&clcturl=[countgo]\">\x3c/script>')") : (D = "sas.cmd.push(function() {", D += 'sas.call("std",', D += " { siteId: " + B + ", pageId: " + u + ", formatId: " + C + ', target: "' + adAsiaTM.dmpUserSegments.replace(",", ";") + '" });});', u = document.createElement("script"), u.type = "application/javascript", u.text = D), d.append(u),
                        x && A.push({
                            id: "sas_" + C,
                            height: x,
                            type: "apm"
                        }));
                    if ("dfp" === h) {
                        d = document.createElement("div");
                        d.id = r + "_container";
                        d.style.position = "relative";
                        l = document.createElement("div");
                        l.id = r;
                        l.style.textAlign = M;
                        d.appendChild(l);
                        if ("top" === f || "bottom" === f) {
                            var v = document.createElement("div");
                            v.id = "adAsia_anchor_" + f;
                            v.className = "adAsia_anchor_" + f;
                            g.append(v);
                            d = document.createElement("a");
                            d.id = "adAsia_anchor_btn_" + f;
                            d.className = "adAsia_anchor_btn";
                            d.href = "#";
                            d.setAttribute("ref", "nofollow");
                            d.innerHTML = '<img src="https://storage.googleapis.com/adasia-ad-network-origin/atm/img/anchor_btn.png"/>';
                            h = document.createElement("style");
                            h.type = "text/css";
                            B = ".adAsia_anchor_" + f + " {" + f + ":0px;position:fixed;max-width: 1024px;z-index: 9999;padding: 5px 0 0;box-sizing: border-box;width: 100%;height:auto; background: #f2f2f2;left:0;-webkit-transition:all .5s;-moz-transition:all .5s;-ms-transition:all .5s;-o-transition:all .5s;transition:all .5s;}";
                            B += ".adAsia_anchor_" + f + " .adAsia_anchor_btn {position: absolute; " + ("top" === f ? "bottom" : "top") + ": -10px;padding: 10px;z-index: 888;left: 50%;margin-left: -20px;background: #f2f2f2; border-radius: 50%; text-align:center; " +
                                ("top" === f ? "padding-bottom" : "padding-top") + ":5px;} .adAsia_anchor_" + f + " .adAsia_anchor_btn img {vertical-align: " + ("top" === f ? "bottom" : "top") + "; width:70% }";
                            h.styleSheet ? h.styleSheet.cssText = B : h.appendChild(document.createTextNode(B));
                            document.head.appendChild(h);
                            v.append(d);
                            l.style.position = "relative";
                            l.style.zIndex = "999";
                            v.append(l);
                            d.addEventListener("click", function(a, c) {
                                var b = v.clientHeight || 0,
                                    d = document.getElementById(a),
                                    e = +d.clientHeight || 50;
                                b >= e ? (v.style.height = "0px", "top" === c ? d.style.top = -1 * (e + 20) + "px" : d.style.bottom = -1 * (e + 20) + "px") : (v.style.height = "auto", "top" === c ? d.style.top = "0px" : d.style.bottom = "0px")
                            }.bind(null, r, f), !1);
                            d = v
                        } else I ? (count = g.contents().length, positionPercent = +J, idx = 0, 0 < positionPercent && 100 > positionPercent ? idx = Math.round(positionPercent * count / 100) : 100 === positionPercent && (idx = Math.round(count - 1)), jQuery(g.contents()[idx]).after(d)) : g.append(d);
                        x && A.push({
                            id: r,
                            height: x,
                            type: "dfp"
                        });
                        x = document.createElement("script");
                        h = "";
                        f = Math.round(1E6 * Math.random());
                        x.type = "text/javascript";
                        h += "var ads_" + f + "; ";
                        h += "googletag.cmd.push(function() {";
                        K && (G ? h += "var mapping_" + f + " = googletag.sizeMapping()." + G + ".build(); " : console.log("-- ATM info -- Missing mapping rule"));
                        h += "ads_" + f + " = googletag.defineSlot('" + m + "', " + n + ", '" + r + "')";
                        K && (G ? h += ".defineSizeMapping(mapping_" + f + ")" : console.log("-- ATM info -- Missing mapping rule"));
                        t && (0 === (window.Adomik || 0) && function(a, c, b) {
                            var d = a.getElementsByTagName(c)[0];
                            a.getElementById(b) || (a = a.createElement(c), a.id = b, a.type = "application/javascript",
                                a.text = 'window.Adomik = window.Adomik || {}; Adomik.randomAdGroup = function() {var rand = Math.random();switch (false) {case !(rand < 0.09): return "ad_ex" + (Math.floor(100 * rand));case !(rand < 0.10): return "ad_bc";default: return "ad_opt";}};', d.parentNode.insertBefore(a, d))
                        }(document, "script", "atm-sdk-adomik"), h += ".setTargeting('ad_group', Adomik.randomAdGroup())");
                        Q && 0 === N && (h += ".setCollapseEmptyDiv(true)");
                        h += ".addService(googletag.pubads()); ";
                        N && (h += "googletag.pubads().enableLazyLoad(" +
                            R + ");");
                        h += "googletag.enableServices(); ";
                        h += "});";
                        x.text = h;
                        d.append(x);
                        m = document.createElement("script");
                        n = "";
                        m.type = "text/javascript";
                        n += "googletag.cmd.push(function() {";
                        n += 'googletag.display("' + r + '"); ';
                        q && (n += "googletag.pubads().refresh([ads_" + f + "]); ");
                        n += "});";
                        m.text = n;
                        d.append(m);
                        e && (q = document.createElement("script"), m = "", q.type = "text/javascript", m = "var counter_ads" + f + " = 0 ; setInterval(function() {if (document.hasFocus()) { counter_ads" + f + "++;} if (counter_ads" + f + " == " + e + ") { googletag.pubads().refresh([ads_" +
                            f + ']); console.log("-- ATM info -- Refresh: ' + f + " after " + e + 's"); counter_ads' + f + " = 0;}},1000);", q.text = m, d.append(q))
                    }
                    y && g.find("iframe").length && g.find("iframe").hide();
                    w && (new Sticky("#" + r + "_container", {
                        marginTop: z
                    }), jQuery("#" + r + "_container").css("z-index", 1E6));
                    E && p.push(r)
                }
            }
            a = A.length;
            k = function(a) {
                var c = document.getElementById(a.id + "_container"),
                    b = document.getElementById(a.id),
                    d = +b.clientHeight;
                b.getBoundingClientRect();
                var e = +b.getBoundingClientRect().bottom;
                c.style.height = d + a.height + "px";
                a = +c.clientWidth;
                var g = +c.clientHeight,
                    f = +c.getBoundingClientRect().top;
                c = +c.getBoundingClientRect().bottom;
                0 > f && (b.style.width = a + "px", b.style.position = "fixed", b.style.top = "0px");
                f + e > c && (b.style.position = "absolute", b.style.bottom = "", b.style.top = "0px");
                0 > f + (g - d) && (b.style.position = "absolute", b.style.bottom = "0px", b.style.top = "");
                0 < f && (b.style.width = a + "px", b.style.position = "", b.style.top = "")
            };
            b = function(a) {
                document.getElementById(a.id + "_container").style = "display:none!important"
            };
            for (c = 0; c < a; c++) "apm" ===
                A[c].type && window.addEventListener("adEnd", b.bind(null, A[c]), !1), window.addEventListener("scroll", k.bind(null, A[c]), !1);
            console.timeEnd("-- ATM info -- Performance check");
            setTimeout(function() {
                var a = p.length;
                for (c = 0; c < a; c++) {
                    var b = +adAsiaTM.getCookie("noImps") || 0,
                        d = document.getElementById(p[c]),
                        e = "none";
                    d && (e = d.style.display);
                    "none" !== e && (b++, adAsiaTM.setCookie("noImps", b, 30), 4 === b && (b = document.createElement("script"), b.type = "text/javascript", b.src = "//as.adlooxtracking.com/ads/js/tfav_adl_152.js#platform=78&scriptname=adl_152&tagid=95&typejs=tvaf&fwtype=2&creatype=2&targetelt=" +
                        r + "&custom1area=50&custom1sec=1&custom2area=0&custom2sec=0&id11=&id1=%eadv!&id2=%ebuy!&id3=%epid!&id4=%esid!&id5=%ecid!", d.append(b), adAsiaTM.setCookie("noImps", 0, 30)))
                }
            }, 3E3)
        } else console.log("-- ATM info -- Block Ads:" + z + " " + E), console.timeEnd("-- ATM info -- Performance check")
    }
};