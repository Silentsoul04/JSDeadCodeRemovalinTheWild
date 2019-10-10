(function(C) {
    var G = window.AmazonUIPageJS || window.P,
        H = G._namespace || G.attributeErrors,
        n = H ? H("INRetargetingAsset") : G;
    n.guardFatal ? n.guardFatal(C)(n, window) : n.execute(function() {
        C(n, window)
    })
})(function(C, G, H) {
    (function() {
        function n() {
            var e = {
                pageStatusFlag: !1,
                checkMyReadyState: null,
                parse: function(b) {
                    var a = document,
                        d = encodeURIComponent,
                        m = "",
                        P = a.location.protocol + "//" + a.location.host,
                        g = {},
                        Q = !1,
                        n = !1,
                        p = "",
                        l = a.URL,
                        u = 1,
                        f = "",
                        J = "",
                        v = "",
                        I = "",
                        q = "",
                        C = "",
                        h = "",
                        x = "",
                        H = "",
                        R = "",
                        w = "",
                        O = "",
                        S = "",
                        D = "",
                        E, A = "",
                        t = "",
                        T = "",
                        F = "",
                        K = "",
                        M = "",
                        U = "",
                        c = 0,
                        r = [],
                        N = 0,
                        B = e.getCookieValue("visitCount");
                    "" === B && (B = 0);
                    try {
                        e.checkMyReadyState = setInterval(function() {
                            e.pageloadStatus();
                            if (!0 === e.pageStatusFlag) {
                                if (e.isDetailPage() && "DetailAW" !== b.pageType) {
                                    f = a.getElementById("ASIN");
                                    "undefined" !== typeof f && null !== f && null !== f.getAttribute("value") && (E = f.getAttribute("value"));
                                    f = a.getElementById("divsinglecolumnminwidth");
                                    if ("undefined" !== typeof f && null !== f)
                                        for (h = f.getElementsByTagName("div"), c = 0; c < h.length; c++)
                                            if ("undefined" !== typeof h[c] &&
                                                null === h[c].getAttribute("id") && "bucket" === h[c].className && (x = h[c].getElementsByTagName("h2")[0], "undefined" !== typeof x && "Look for similar items by category" === x.innerHTML)) {
                                                q = h[c].getElementsByTagName("a");
                                                J = q[q.length - 1];
                                                "undefined" !== typeof q[0] && null !== q[0] && null !== q[0].innerHTML && (C = e.trimInend(q[0].innerHTML), "Electronics" === C ? "undefined" !== typeof q[1] && null !== q[1] && null !== q[1].innerHTML && (w = e.trimInend(q[1].innerHTML)) : w = C);
                                                "undefined" !== typeof J && null !== J && null !== J.innerHTML && (H = e.decodeAmpersand(e.trimInend(J.innerHTML)));
                                                I = h[c].getElementsByTagName("li");
                                                if ("undefined" !== typeof I && null !== I)
                                                    for (var k = 0; k < I.length; k++) {
                                                        g["ecomm_ProductCatTree" + k] = I[k].textContent || I[k].innerText;
                                                        var y = I[k].getElementsByTagName("a");
                                                        "undefined" !== typeof y && null !== y && 0 < y.length && (g["browsernodeid" + k] = e.getQueryParamFromUrl("node", y[y.length - 1].getAttribute("href")))
                                                    }
                                                break
                                            }
                                    if ("" === w || null === w) f = a.getElementById("searchDropdownBox"), "undefined" !== typeof f && null !== f && (w = f.options[f.selectedIndex].text, w = e.trimInend(w));
                                    h = a.getElementById("handleBuy");
                                    if ("undefined" !== typeof h && null !== h) {
                                        f = h.getElementsByTagName("div");
                                        t = h.getElementsByTagName("span");
                                        v = h.getElementsByTagName("a");
                                        for (c = 0; c < f.length; c++)
                                            if ("undefined" !== typeof f[c] && null === f[c].getAttribute("id") && "buying" === f[c].className && (x = f[c].getElementsByTagName("h1")[0], "undefined" !== typeof x && "parseasinTitle" === x.className)) {
                                                D = f[c].innerHTML;
                                                D = e.trimInEndAndReplaceSpecialChars(D, "_");
                                                D = D.replace(/\s*/g, ""); - 1 !== D.indexOf("_by_") && (q = f[c].getElementsByTagName("a"), "undefined" !== typeof q[0] &&
                                                    null !== q[0] && null !== q[0].innerHTML && (R = e.decodeAmpersand(e.trimInend(q[0].innerHTML))));
                                                break
                                            }
                                        for (c = 0; c < t.length; c++)
                                            if ("undefined" !== typeof t[c] && null === t[c].getAttribute("id") && "availGreen" === t[c].className) {
                                                D = t[c].innerHTML;
                                                U = e.trimInEndAndReplaceSpecialChars(D, "");
                                                break
                                            }
                                        for (c = 0; c < v.length; c++)
                                            if ("undefined" !== typeof v[c] && null !== v[c].getAttribute("href") && -1 < v[c].getAttribute("href").indexOf("/gp/help/seller")) {
                                                g.ecomm_seller = v[c].textContent || v[c].innerText;
                                                break
                                            }
                                    }
                                    t = a.getElementById("productTitle");
                                    "undefined" !== typeof t && null !== t && (A = t.innerHTML, A = e.decodeAmpersand(e.trimInEndAndReplaceSpecialChars(A, "")));
                                    T = -1 !== l.indexOf("?") ? l.substring(0, l.indexOf("?")) : l;
                                    F = e.getImageSource("prodImage");
                                    if ("" === F || null === F)
                                        if (F = e.getImageSource("main-image"), "" === F || null === F)
                                            for (f = a.getElementsByTagName("img"), c = 0; c < f.length; c++)
                                                if ("undefined" !== typeof f[c] && "prod_image_selector" === f[c].className) {
                                                    F = f[c].getAttribute("src");
                                                    break
                                                }
                                    K = e.getPriceValue("listPriceValue");
                                    M = e.getPriceValue("actualPriceValue");
                                    if (null === K || "" === K) K = M;
                                    w = e.decodeAmpersand(w);
                                    O = w + "_" + H;
                                    S = O + "_" + R;
                                    g.ecomm_pagetype = "ProductDetail";
                                    g.ecomm_prodid = E;
                                    g.ecomm_price = M.replace(/,/g, "");
                                    g.ecomm_pcat = w;
                                    g.ecomm_pname = A;
                                    g.searchterm = e.getParamFromQuery("field-keywords", a.location.search);
                                    5 < B && 10 >= B ? u = 2 : 10 < B && (u = 3);
                                    p = "e300";
                                    m = m + u + "&param=" + p + "&pid=" + E + "&catid=" + d(d(w)) + "&subcat1id=" + d(d(O)) + "&subcat2id=" + d(d(S)) + "&pname=" + d(d(A)) + "&lp=" + d(d(T)) + "&image=" + d(d(F)) + "&old=" + K + "&new=" + M + "&misc=" + d(d(U))
                                } else if (-1 !== l.indexOf("gp/huc/view.html") ||
                                    -1 !== l.indexOf("/gp/product/handle-buy-box/")) {
                                    h = a.getElementById("hlb-page-container");
                                    if ("undefined" !== typeof h && null !== h)
                                        for (f = h.getElementsByTagName("a"), c = 0; c < f.length; c++)
                                            if ("undefined" !== typeof f[c] && -1 !== f[c].className.indexOf("hlb-item-link hlb-asin-")) {
                                                E = f[c].className.split("hlb-item-link hlb-asin-")[1];
                                                break
                                            }
                                    g.ecomm_prodid = E;
                                    g.ecomm_pagetype = "ShoppingCart";
                                    p = "e400";
                                    m = m + u + "&param=" + p + "&pid1=" + E + "&pid2=&pid3="
                                } else if (-1 !== l.indexOf("gp/cart")) {
                                    h = a.getElementById("activeCartViewForm");
                                    if ("undefined" !==
                                        typeof h && null !== h)
                                        for (f = h.getElementsByTagName("div"), c = N = 0; c < f.length; c++) "undefined" !== typeof f[c] && "cart-item" === f[c].className && null !== f[c].getAttribute("asin") && (r.push(f[c].getAttribute("asin")), g["pid" + N] = r[N], N++);
                                    for (c = 0; 3 > c; c++) "undefined" === typeof r[c] && (r[c] = "");
                                    p = "e400";
                                    u = 2;
                                    g.ecomm_pagetype = "ShoppingCart";
                                    m = m + u + "&param=" + p + "&pid1=" + r[0] + "&pid2=" + r[1] + "&pid3=" + r[2]
                                } else if (-1 !== l.indexOf("/gp/buy/thankyou/") && -1 !== l.indexOf("viewId=ThankYouCart")) {
                                    var k = "",
                                        z = location.search.substring(1),
                                        y = function(a) {
                                            return decodeURIComponent(a.replace(/\+/g, " "))
                                        };
                                    if ("" !== z && null !== z && -1 !== z.indexOf("&") && (z = z.split("&"), 0 < z.length))
                                        for (c = 0; c < z.length; c++)
                                            if ("" !== z[c] && null !== z[c]) {
                                                var L = z[c].split("=");
                                                1 < L.length && ("asins" === y(L[0]) ? r.push(y(L[1])) : "orderId" === y(L[0]) && (k = y(L[1])))
                                            }
                                    for (c = 0; c < r.length; c++) g["pid" + c] = r[c];
                                    for (c = 0; 3 > c; c++) "undefined" === typeof r[c] && (r[c] = "");
                                    g.ecomm_pagetype = "CheckoutThankYou";
                                    g.orderid = k;
                                    p = "e500";
                                    m = m + u + "&param=" + p + "&pid1=" + r[0] + "&pid2=" + r[1] + "&pid3=" + r[2] + "&orderid=" +
                                        k
                                } else -1 !== l.indexOf("ap/signin") || -1 !== l.indexOf("ap/register") || -1 !== l.indexOf("buy/addressselect") || -1 !== l.indexOf("buy/gift") || -1 !== l.indexOf("buy/shipoptionselect") || -1 !== l.indexOf("buy/pipeline") || -1 !== l.indexOf("buy/spc") ? (p = "e400", u = 3, m = m + u + "&param=" + p) : -1 !== l.indexOf("/b/ref") ? (p = "e200", m = m + u + "&param=" + p + "&catid=&subcat1id=&subcat2id=", g.ecomm_pagetype = "Browse", g.ecomm_ProductCatTree = e.processBreadCrumb(), g.browsernodeid = e.getParamFromQuery("node", a.location.search)) : -1 !== l.indexOf("/s/ref") ?
                                    (p = "e200", m = m + u + "&param=" + p + "&catid=&subcat1id=&subcat2id=", g.ecomm_pagetype = "Search", g.searchterm = e.getParamFromQuery("field-keywords", a.location.search), g.ecomm_ProductCatTree = "", h = a.getElementsByClassName("fstRow"), "undefined" !== typeof h && null !== h && 0 < h.length && (x = h[0].getElementsByTagName("h3"), "undefined" !== typeof x && null !== x && 0 < x.length && (v = x[0].getElementsByTagName("a"), "undefined" !== typeof v && null !== v && 0 < v.length && (k = v[0].getAttribute("href"), "undefined" !== typeof k && null !== k && (k = k.split("/ref")[0],
                                        k = k.split("/dp/"), 1 < k.length && 10 === k[1].length && (g.ecomm_prodid = k[1])))))) : G.uept && "Gateway" === G.uept.pageType || l === P || l === P + "/" && !b.isMobile ? (g.ecomm_pagetype = "Gateway", n = !0, p = "e100", m = m + u + "&param=" + p) : "ShoppingCartAW" === b.pageType || "CartAW" === b.pageType ? g.ecomm_pagetype = "Msite_ShoppingCart" : "DetailAW" === b.pageType ? (pidArray = document.URL.match(/(((gp\/(aw)\/(d|product)|dp))|(gp\/product))\/([a-zA-Z0-9]+)/i), null !== pidArray && (E = pidArray[pidArray.length - 1]), t = a.getElementById("title"), "undefined" !==
                                        typeof t && null !== t && (A = t.innerHTML, A = e.decodeAmpersand(e.trimInEndAndReplaceSpecialChars(A, ""))), g.ecomm_pagetype = "Msite_ProductDetail", g.ecomm_prodid = E, g.ecomm_pname = A) : "gateway-phone-web" !== b.pageType && "GatewayAW" !== b.pageType && "Gateway" !== b.pageType || !b.isMobile ? (p = "e100", m = m + u + "&param=" + p) : g.ecomm_pagetype = "Msite_Gateway";
                                n = !0;
                                0 !== B ? (B = parseInt(B, 10) + 1, e.setCookie("visitCount", B, 30)) : e.setCookie("visitCount", 1, 30);
                                n && !Q && (b.fireGooglePixel && "undefined" !== typeof g.ecomm_pagetype && (k = e.getGCustomParamString(g,
                                    b.isSignedIn), e.callGoogleService(k, b.pageType)), b.fireVizuryPixel && e.callVizuryService(m), Q = !0)
                            }
                        }, 3E3, "Javascript")
                    } catch (V) {
                        e.callVizuryService("&param=999")
                    }
                },
                isDetailPage: function() {
                    var b = "",
                        b = document.getElementById("addToCartSpan");
                    if ("undefined" !== typeof b && null !== b && (b = document.getElementById("bb_atc_button"), "undefined" !== typeof b && null !== b && "Add to Shopping Cart" === b.getAttribute("alt"))) return !0;
                    var b = document.URL,
                        a = "",
                        a = "";
                    return -1 !== b.indexOf("/ref") && (a = b.split("/ref")[0], a = a.split("/"),
                        10 === a[a.length - 1].length) ? !0 : e.isASINPresent(b, "dp/") || e.isASINPresent(b, "gp/product/") ? !0 : !1
                },
                isASINPresent: function(b, a) {
                    var d = ""; - 1 !== b.indexOf(a) && (d = b.split(a)[1]);
                    1 !== d.indexOf("/") && (d = d.split("/")[0]);
                    1 !== d.indexOf("?") && (d = d.split("?")[0]);
                    return 10 === d.length ? !0 : !1
                },
                getGCustomParamString: function(b, a) {
                    var d = function(a) {
                            return 10 > a ? "0" + a : a
                        },
                        e = function(a) {
                            return a.getUTCFullYear() + "-" + d(a.getUTCMonth() + 1) + "-" + d(a.getUTCDate()) + "T" + d(a.getUTCHours()) + ":" + d(a.getUTCMinutes()) + ":" + d(a.getUTCSeconds()) +
                                "." + (a.getUTCMilliseconds() / 1E3).toFixed(3).slice(2, 5) + "Z"
                        },
                        n = new Date;
                    b.CURRENT_TIME = Date.prototype.toISOString ? n.toISOString() : e(n);
                    var e = "",
                        g;
                    for (g in b) b.hasOwnProperty(g) && (e = e + g + "=" + b[g] + ";");
                    return encodeURIComponent(e + "SignedIn=" + (a ? "Y" : "N"))
                },
                processBreadCrumb: function() {
                    var b = "",
                        a = "",
                        a = document.getElementById("refinements");
                    if ("undefined" !== typeof a && null !== a && (a = a.getElementsByClassName("categoryRefinementsSection"), "undefined" !== typeof a && null !== a && 0 < a.length && (a = a[0], "undefined" !== typeof a &&
                            null !== a && (a = a.getElementsByTagName("li"), "undefined" !== typeof a && null !== a && 0 < a.length))))
                        for (var d = 0; d < a.length; d++) b = b.concat((a[d].textContent || a[d].innerText).trim()), d != a.length - 1 && (b = b.concat(" > "));
                    return b
                },
                getQueryParamFromUrl: function(b, a) {
                    if ("undefined" !== typeof a && null !== a && -1 < a.indexOf("?")) {
                        var d = a.substring(a.indexOf("?"));
                        return e.getParamFromQuery(b, d)
                    }
                    return ""
                },
                getParamFromQuery: function(b, a) {
                    if ("undefined" !== typeof a && null !== a && 0 < a.length)
                        for (var d = "", e = a.substring(1).split("&"),
                                n = 0; n < e.length; n++)
                            if (d = e[n].split("="), 0 < d.length && d[0] === b) return d[1];
                    return ""
                },
                pageloadStatus: function() {
                    "interactive" === document.readyState || "complete" === document.readyState ? (e.pageStatusFlag = !0, clearInterval(e.checkMyReadyState)) : e.pageStatusFlag = !1
                },
                setCookie: function(b, a, d) {
                    if (-1 !== d) {
                        var e = new Date;
                        e.setDate(e.getDate() + d);
                        a = encodeURIComponent(a) + (null === d ? "" : "; expires=" + e.toUTCString()) + "; path=/; domain=.amazon.in"
                    }
                    document.cookie = b + "=" + a
                },
                getCookieValue: function(b) {
                    var a = document.cookie;
                    if (0 < a.length) {
                        var d = a.indexOf(b + "=");
                        if (-1 !== d && (d = d + b.length + 1, b = a.indexOf(";", d), -1 === b && (b = a.length), a = decodeURIComponent(a.substring(d, b)), a !== H && null !== a)) return a
                    }
                    return ""
                },
                getImageSource: function(b) {
                    var a = "",
                        d = "";
                    "undefined" !== typeof b && "" !== b && null !== b && (d = document.getElementById(b), "undefined" !== typeof d && null !== d && null !== d.getAttribute("src") && (a = d.getAttribute("src")));
                    return a
                },
                getPriceValue: function(b) {
                    var a = "";
                    b = document.getElementById(b);
                    "undefined" !== typeof b && null !== b && (a = b.innerHTML,
                        a = e.trimInEndAndReplaceSpecialChars(a).replace(/[^0-9.,]/g, ""), "." === a.charAt(0) && (a = a.substr(1)));
                    return a
                },
                trimInend: function(b) {
                    return "undefined" !== typeof b && "" !== b && null !== b ? (b = b.replace(/(^\s*)|(\s*$)/gi, ""), b = b.replace(/[ ]{2,}/gi, " "), b = b.replace(/\n /, "\n")) : ""
                },
                trimInEndAndReplaceSpecialChars: function(b, a) {
                    return e.trimInend(b.replace(/(<([^>]+)>)/ig, a))
                },
                decodeAmpersand: function(b) {
                    return b.replace(/&amp;/g, "&")
                },
                callVizuryService: function(b) {
                    var a = ("https:" === document.location.protocol ?
                            "https://ssl" : "http://www") + ".vizury.com/analyze/analyze.php",
                        d = document.createElement("iframe");
                    d.src = a + "?account_id=VIZVRM1256&section=1&level=" + b;
                    d.scrolling = "no";
                    d.width = 1;
                    d.height = 1;
                    d.marginheight = 0;
                    d.marginwidth = 0;
                    d.frameborder = 0;
                    d.style.display = "block";
                    b = document.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(d, b)
                },
                callGoogleService: function(b, a) {
                    var d = new Image;
                    d.src = "CheckoutThankYou" == a || "CheckoutThankYouAW" == a ? "//www.googleadservices.com/pagead/conversion/956747825/?label=qk7XCM_duG4QsaCbyAM&guid=ON&script=0" :
                        "//googleads.g.doubleclick.net/pagead/viewthroughconversion/984527532/?value=1&label=r_58CJXm0gIQw9iz3gM&guid=ON&script=0&data=" + b
                }
            };
            return e
        }
        G.P && C.register("inRetargeting", n)
    })()
});