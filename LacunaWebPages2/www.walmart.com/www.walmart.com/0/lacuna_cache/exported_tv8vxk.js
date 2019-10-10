
        ! function() {
            "use strict";

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }
            var t = function() {
                    var e = {
                        createElement: function(t) {
                            return e.getDocument().createElement(t)
                        },
                        getById: function(t) {
                            return e.getDocument().getElementById(t)
                        },
                        getByTag: function(t) {
                            return e.getDocument().getElementsByTagName(t)
                        },
                        hasClass: function(e, t) {
                            return e.classList.contains(t)
                        },
                        addClass: function(e, t) {
                            e && t && e.classList.add(t)
                        },
                        removeClass: function(e, t) {
                            e && t && e.classList.remove(t)
                        },
                        querySelector: function(t) {
                            return e.getDocument().querySelector(t)
                        },
                        querySelectorAll: function(t) {
                            return e.getDocument().querySelectorAll(t)
                        },
                        getDataAttributes: function(e, t) {
                            return t.reduce(function(t, r) {
                                var a;
                                return t[(a = r, a.replace(/-([a-z])/g, function(e) {
                                    return e[1].toUpperCase()
                                }))] = e.getAttribute("data-" + r), t
                            }, {})
                        },
                        getDocument: function() {
                            return window.document
                        },
                        getWindow: function() {
                            return window
                        }
                    };
                    return e
                },
                r = function(e) {
                    return function(e, r) {
                        var a = t().getWindow().postal;
                        return r && a && e ? a.subscribe({
                            channel: "header",
                            topic: e,
                            callback: r
                        }) : null
                    }("searchBrowse", e)
                },
                a = function(e) {
                    return function(e, r) {
                        var a = t().getWindow().postal;
                        return r && a && e ? a.publish({
                            channel: "header",
                            topic: e,
                            data: r
                        }) : null
                    }("searchBrowse", e)
                },
                n = {
                    "": "Home",
                    home: "Home",
                    col: "Collection",
                    co: "Bundles",
                    nco: "BundlesNonChoice",
                    ip: "Product",
                    product: "Product Sellers",
                    easyreorder: "Account Reorder",
                    ideas: "Tips & Ideas",
                    cp: "Category",
                    list: "Lists & Registry",
                    store: "Local Store",
                    "order-ahead": "Order Ahead",
                    "all-departments": "All Departments",
                    search: "Search",
                    browse: "Browse",
                    cart: "Cart",
                    pac: "Pac",
                    checkout: "Checkout",
                    thankyou: "Thank you",
                    account: "Account",
                    return: "Account",
                    "associate-discount": "Account",
                    reviews: "Reviews",
                    tp: "Topic",
                    pharmacy: "Pharmacy",
                    nextdaydelivery: "NextDayDelivery",
                    errorpage: "Error Page"
                },
                o = ["Product", "Category"],
                c = function() {
                    var e = window.location.pathname.split("/"),
                        t = e[1],
                        r = {};
                    return r.basePath = t, window.location.origin.match(/dev.walmart.com/) || window.location.origin.match(/www-e16.walmart.com/) ? (r.basePath = t || "Test Pages", r) : window.location.pathname.match(/\/m\/deals/) ? (r.basePath = "Deals", r) : (r.basePath = n[t] || "Unknown", -1 !== o.indexOf(r.basePath) && (r.idKey = "Product" === r.basePath ? "itemId" : "categoryId", r.idValue = e.pop()), r)
                };

            function i(e, t, r) {
                return (t || "").split(".").reduce(function(e, t) {
                    return e && null !== e[t] && void 0 !== e[t] ? e[t] : r
                }, e)
            }
            var u, l, s = function() {
                    return "true" === i(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window, "_wml.config.ccm.search.isSearchCsrEnabled", "false")
                },
                d = "updateTypeahead",
                f = "search";
            u = function(e) {
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(e, t)
                }, l = function(e, t, r) {
                    var a;
                    t && "function" != typeof t && (r = t.context || r, a = t.setup, t = t.callback);
                    var n, o, c = document.createElement("script"),
                        i = !1,
                        l = function() {
                            i || (i = !0, o(), t && t.call(r, n))
                        },
                        s = function() {
                            n = new Error(e || "EMPTY"), l()
                        };
                    if (!c.readyState || "async" in c) o = function() {
                        c.onload = c.onerror = null
                    }, c.onerror = s, c.onload = l, c.async = !0, c.charset = "utf-8", a && a.call(r, c), c.src = e, u(c);
                    else {
                        var d = {
                                loaded: !0,
                                complete: !0
                            },
                            f = !1;
                        o = function() {
                            c.onreadystatechange = c.onerror = null
                        }, c.onreadystatechange = function() {
                            var e = c.readyState;
                            if (!n) {
                                if (!f && d[e] && (f = !0, u(c)), "loaded" === e && (c.children, "loading" === c.readyState)) return s();
                                "complete" === c.readyState && l()
                            }
                        }, c.onerror = s, a && a.call(r, c), c.src = e
                    }
                }, "object" == typeof exports && "object" == typeof module ? module.exports = l : "function" == typeof define && define.amd ? define([], function() {
                    return l
                }) : window._lload = l,
                function() {
                    var t = {
                            API_URL: "//www.walmart.com/search/autocomplete/v1/",
                            TYPEAHEAD_DELAY: 100,
                            MENU_HIDE_DELAY: 200,
                            CATEGORY_ID: "0",
                            CATEGORY_LABEL: "All Departments",
                            ROW_ID_PREFIX: "typeahead-row-"
                        },
                        o = {
                            QUERY: "query=",
                            CATEGORY: "cat_id=",
                            TYPEAHEAD: "typeahead="
                        },
                        u = {
                            FORM_ID: "#global-search-form",
                            INPUT_ID: "#global-search-input",
                            CATEGORY_DROPDOWN_ID: "#global-search-catid",
                            CATEGORY_DROPDOWN_LABEL: "#global-search-category-label",
                            CLEAR_BUTTON_ID: "#global-search-clear",
                            SUBMIT_BUTTON_ID: "#global-search-submit",
                            TYPEAHEAD_DROPDOWN_ID: "[data-tl-id=vh-typeahead-container]",
                            SUGGESTIONS_DROPDOWN_ID: "#global-search-dropdown",
                            RECENT_HISTORY_DROPDOWN_ID: ".mweb-Typeahead-recent",
                            ACCESSIBILITY_RESULTS_READER_ID: "[data-tl-id=vh-typeahead-results-reader]"
                        },
                        l = 9,
                        y = 38,
                        h = 40,
                        v = 13,
                        g = 27,
                        p = {
                            KEY: "typeahead_recent_history",
                            LIMIT: 12,
                            MAX_DISPLAYED: 3
                        },
                        m = {
                            MAX_DISPLAYED: 3
                        },
                        E = window,
                        A = i(E._wml, "headerConfig.ccm.header-footer-app.typeahead", {});
                    if ("true" === A.shouldApplyBiggerFontSizeAndCursorWithPadding) {
                        var _ = document.querySelector(".js-header");
                        _ && _.classList.add("bigger-fontsize-and-cursor-with-padding")
                    }
                    var D, S, T, b, I, O, L, R, C, w, N, P = E._wml && E._wml.typeAheadUrl ? E._wml.typeAheadUrl : t.API_URL,
                        Y = A.debounceTime || t.TYPEAHEAD_DELAY,
                        q = E.navigator && E.navigator.cookieEnabled && E.localStorage ? E.localStorage : {},
                        x = E._bcq || [],
                        k = document.createElement("div"),
                        B = {},
                        G = "",
                        H = "",
                        U = [],
                        M = [],
                        W = [],
                        X = [],
                        K = -1,
                        j = [],
                        F = !1;

                    function z() {
                        var e = c().basePath,
                            t = "";
                        switch (e.toLowerCase()) {
                            case n.search:
                                t = "SearchResults";
                                break;
                            case n.ip:
                                t = "Item";
                                break;
                            case n.store:
                                t = "LocalStore";
                                break;
                            case n.browse:
                            case n.cp:
                            case n.cart:
                            case n.account:
                            case n.checkout:
                                t = e;
                                break;
                            default:
                                t = "HomePage"
                        }
                        return "SearchBox_" + t
                    }

                    function J(e, r, a, n, o, c) {
                        var i = M.concat(W.concat(X)).map(function(e) {
                                return e.category && e.category !== t.CATEGORY_LABEL ? e.query + " in " + e.category : e.query
                            }),
                            u = {
                                es: e,
                                sk: j,
                                as: i,
                                qt: r
                            };
                        c && (u.tq = c);
                        var l = [o ? "_tagOutboundAction" : "_tagAction", G, "ON_SEARCHBOX_EXIT", "nav.src.slc.sbx", [
                            ["sbx", u],
                            ["ta", {
                                di: n,
                                nm: a
                            }]
                        ]];
                        o && l.push("https://www.walmart.com"), x.push(l), j = [], []
                    }

                    function Q(e, t) {
                        var r = {
                            nm: e,
                            lc: t
                        };
                        x.push(["_tagAction", G, "ON_LINK", "nav.non.slc.clc", [
                            ["li", r]
                        ]])
                    }

                    function $(e) {
                        e === O && (e.classList.add("vh-is-open"), "true" === A.isHighlightTypeahead && e.classList.add("highlight-typeahead")), e.removeAttribute("hidden")
                    }

                    function V(e) {
                        e === O && (N.innerHTML = "", e.classList.remove("vh-is-open"), T.removeAttribute("aria-activedescendant")), e.setAttribute("hidden", "")
                    }

                    function Z(e) {
                        return -1 !== e.className.indexOf("vf-is-open") || !e.getAttribute("hidden")
                    }

                    function ee(e) {
                        var r, a, n, o, c, i = [],
                            u = e.R,
                            l = ye(),
                            s = fe();
                        for (r = 0; r < u.length; r++)
                            if (0 === r && u[r] instanceof Array) {
                                for (o = u[r], a = 0; a < o.length; a++)
                                    if (0 === a) i.push({
                                        query: o[0],
                                        category: t.CATEGORY_LABEL,
                                        categoryId: t.CATEGORY_ID
                                    });
                                    else if (1 === a)
                                    for (c = o[a], n = 0; n < c.length; n++) i.push({
                                        query: o[0],
                                        category: c[n][0],
                                        categoryId: c[n][1]
                                    })
                            } else i.push({
                                query: u[r],
                                category: l,
                                categoryId: s
                            });
                        return i
                    }

                    function te(e) {
                        return (e = e || "") && ("innerText" in k ? k.innerText = e : k.textContent = e, e = k.innerHTML), e
                    }

                    function re(e) {
                        var t;
                        try {
                            t = encodeURIComponent(e)
                        } catch (e) {
                            t = ""
                        }
                        return t.replace(/'/g, "%27")
                    }

                    function ae(e, t) {
                        var r = e.query,
                            a = e.category,
                            n = t.query,
                            o = t.category;
                        return r === n && a === o
                    }

                    function ne(e, t) {
                        for (var r = 0; r < e.length; r++)
                            if (ae(e[r], t)) return !0;
                        return !1
                    }

                    function oe(e, t) {
                        Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set.call(e, t);
                        var r = new Event("input", {
                            bubbles: !0
                        });
                        e.dispatchEvent(r)
                    }

                    function ce(e) {
                        e && (B[e] ? be(B[e]) : (D && D.remove(), E._lload(ie(e), {
                            setup: function(e) {
                                D = e
                            }
                        })))
                    }

                    function ie(e) {
                        var t = fe();
                        if (e) return H = e, P + t + "/" + encodeURIComponent(e).replace(/\./g, "%2E").replace(/'/g, "%27").replace(/\//g, "%2F").replace(/%/g, "_")
                    }

                    function ue(e, r, a, n) {
                        var c = "",
                            i = document.querySelector(".js-header").getAttribute("data-origin") || "",
                            u = (r = r || fe()) !== t.CATEGORY_ID;
                        return void 0 !== e ? (c = o.QUERY + re(e), n || (c = "/search/?" + c), u && (c += "&" + o.CATEGORY + r), a && a !== e && (c += "&" + o.TYPEAHEAD + re(a))) : u && (c += "/cp/" + r), i + c
                    }

                    function le(e, t) {
                        for (var r = "", a = 0; a < e.length; a++) r += se(e[a], t);
                        return r
                    }

                    function se(e, r) {
                        var a = te(e.category) || t.CATEGORY_LABEL,
                            n = e.categoryId || t.CATEGORY_ID,
                            o = te(e.query),
                            c = a && a !== t.CATEGORY_DROPDOWN_LABEL ? o + " in " + a : o,
                            i = t.ROW_ID_PREFIX + o.replace(/\s/g, "") + (a ? "-" + a.replace(/\s/g, "") : ""),
                            u = o.replace(new RegExp("(" + H.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + ")", "g"), "<span>$&</span>"),
                            l = r ? "vhf-icn-remove" : "vhf-icn-pre-fill",
                            s = r ? "" : "",
                            d = '<li id="' + i + '" role="link" aria-label="' + c + '" title="' + c + '" tabindex="-1" data-query="' + o + '" data-category="' + a + '" data-category-id="' + n + '" class="typeahead-row" ><i class="' + (r ? "vhf-icn-history" : "vhf-icn-search") + ' typeahead-icon typeahead-icon-before">' + (r ? "" : "") + '</i><div class="typeahead-text">';
                        return a && a !== t.CATEGORY_LABEL ? d += u + " in " + a : d += u, d += '</div><button tabindex="-1" type="button" aria-hidden="true" class="' + l + ' typeahead-icon typeahead-icon-after" data-query="' + o + '" data-category="' + a + '" data-category-id="' + n + '">' + s + "</button></li>"
                    }

                    function de(e, t) {
                        T.removeAttribute("aria-activedescendant"), e && e.length && (-1 !== K && (e[K].removeAttribute("aria-selected"), e[K].className = e[K].className.replace(/\s?is-keyboard-hovered/g, "")), -1 !== t && (e[t].setAttribute("aria-selected", !0), e[t].className += " is-keyboard-hovered", T.setAttribute("aria-activedescendant", e[t].id), T.value = e[t].dataset.query), K = t)
                    }

                    function fe() {
                        var e = document.querySelector(u.CATEGORY_DROPDOWN_ID);
                        return e && e.value || t.CATEGORY_ID
                    }

                    function ye() {
                        var e = document.querySelector(u.CATEGORY_DROPDOWN_LABEL);
                        return e && e.innerText || t.CATEGORY_LABEL
                    }

                    function he(e, t) {
                        var r = e || "",
                            a = t || "",
                            n = ye(),
                            o = fe();
                        n !== r && o !== a && (I.textContent = r, oe(b, a), Q("searchbox_dept_select", "SearchDropdown"))
                    }

                    function ve(e, t, r) {
                        var a = {
                            query: e,
                            category: t,
                            categoryId: r
                        };
                        ne(U, a) || "" === e.trim() || (U.length >= p.LIMIT && U.pop(), U.unshift(a), q && ne(U, a) && q.setItem(p.KEY, JSON.stringify(U)))
                    }!0 === s(E) && c().basePath === n.search && window.addEventListener("load", function() {
                        r(function(t) {
                            "object" === e(t) && t.status === d && (T.value = t.query)
                        })
                    });
                    var ge = function() {
                            H = T.value, $(O), H ? (V(R), ce(H), $(C), $(L)) : (V(C), V(L), $(R))
                        },
                        pe = function(e) {
                            H = T.value, $(O), H ? (V(R), ce(H), $(C), $(L)) : (V(L), V(C), T.removeAttribute("aria-activedescendant"), N.innerHTML = "", $(R)), e.currentTarget === T && Q("searchbox_entry", "Searchbox")
                        },
                        me = function(e) {
                            e.relatedTarget === w || e.relatedTarget === C || S.contains(e.relatedTarget) || T.contains(e.relatedTarget) || L.contains(e.relatedTarget) || R.contains(e.relatedTarget) || (V(O), H ? ($(C), J("TNS", H, ye(), fe())) : (V(C), J("NS", "", ye(), fe())))
                        };
                    be.handleCsrNavigation = function(e, t) {
                        a({
                            status: f,
                            query: e,
                            catId: t
                        })
                    }, be.handleHeaderNavigation = function(e, t, r) {
                        !0 === s(E) && t && c().basePath === n.search ? (e && e.preventDefault(), be.handleCsrNavigation(t, r), T.value = t) : window.location.href = ue(t, r, H)
                    };
                    var Ee = function(e) {
                            var t = H || T.value,
                                r = ye(),
                                a = fe(),
                                n = r,
                                o = a,
                                c = document.querySelector(".is-keyboard-hovered"),
                                i = "SNT";
                            c && (t = c.dataset && c.dataset.query, n = c.dataset && c.dataset.category, o = c.dataset && c.dataset.categoryId, i = c.querySelector(".vhf-icn-remove") ? "SR" : n && o && o !== a ? "SC" : "ST", -1 !== K && (T.value = t));
                            ve(t, n, o), be.handleHeaderNavigation(e, t, o), -1 !== ["SR", "SC", "ST"].indexOf(i) ? J(i, H, n, o, !0, t) : (H || T.value) && J(i, H || T.value, n, o, !0)
                        },
                        Ae = function(e) {
                            var t = Z(L),
                                r = Z(R);
                            H && t ? _e(L, e) : r && _e(R, e)
                        },
                        _e = function(e, t) {
                            var r, a = [].slice.call(e.children),
                                n = document.querySelector(".is-keyboard-hovered"),
                                o = document.querySelector(".is-mouse-hovered");
                            if (o && -1 !== o.className.indexOf("is-mouse-hovered") && (o.className = o.className.replace(/\s?is-mouse-hovered/g, "")), K = 0 === a.indexOf(n) ? 0 : n && a.indexOf(n) || o && a.indexOf(o) || -1, t.keyCode === h) {
                                if ((r = K + 1) > a.length - 1) return void(r = -1);
                                de(a, r)
                            } else if (t.keyCode === y)(r = K - 1) < 0 ? r = a.length - 1 : de(a, r);
                            else if (t.keyCode === v) Ee();
                            else if (t.keyCode === g || t.keyCode === l) V(e);
                            else {
                                var c = {
                                    ks: t.keyCode,
                                    kt: Date.now()
                                };
                                j.push(c)
                            }
                        };

                    function De(e) {
                        var r = [].slice.call(e.children);
                        r && r.forEach(function(e) {
                            var r = e.dataset.query || "",
                                a = e.dataset.category || "",
                                n = e.dataset.categoryId || "",
                                o = "ST",
                                c = e.querySelector(".vhf-icn-pre-fill");
                            c && (a !== t.CATEGORY_LABEL && (o = "SC"), c.addEventListener("click", function(e) {
                                e.preventDefault(), e.stopPropagation(), Q("search_autocomplete", "typeahead"), !F && a && n && a !== t.CATEGORY_LABEL && he(a, n), oe(T, r), T.focus()
                            }));
                            var i = e.querySelector(".vhf-icn-remove");
                            i && (o = "SR", i.addEventListener("click", function(t) {
                                if (t.stopPropagation(), function(e, t, r) {
                                        var a = {
                                            query: e,
                                            category: t,
                                            categoryId: r
                                        };
                                        return !(!ne(U, a) || (U = U.filter(function(e) {
                                            return !ae(e, a)
                                        }), !q || ne(U, a)) || (q.setItem(p.KEY, JSON.stringify(U)), 0))
                                    }(r, a, n)) {
                                    e.parentNode.removeChild(e);
                                    var o = [].slice.call(R.children).filter(function(t) {
                                            return ae(e.dataset, t.dataset)
                                        }),
                                        c = o && o[0];
                                    c && c.parentNode.removeChild(c)
                                }
                            })), e.addEventListener("click", function(e) {
                                e.stopPropagation(), V(O), ve(r, a, n), J(o, H, a, n, !0, r), be.handleHeaderNavigation(e, r, n)
                            }), e.addEventListener("mouseenter", function() {
                                var t = document.querySelector(".is-keyboard-hovered");
                                t && (t.className = t.className.replace(/\s?is-keyboard-hovered/g, "")), -1 === e.className.indexOf("is-mouse-hovered") && (e.className += " is-mouse-hovered")
                            }), e.addEventListener("mouseleave", function() {
                                -1 !== e.className.indexOf("is-mouse-hovered") && (e.className = e.className.replace(/\s?is-mouse-hovered/g, ""))
                            })
                        })
                    }

                    function Se() {
                        S = null, T = null, b = null, I = null, L = null, R = null, C = null, w = null, N = null, B = {}, G = "", U = [], M = [], W = [], X = [], [], K = -1, j = []
                    }

                    function Te(e) {
                        var t, r, a;
                        (Se(), function() {
                            if (q)
                                if (q.getItem(p.KEY)) try {
                                    U = JSON.parse(q.getItem(p.KEY))
                                } catch (e) {
                                    if ("QuotaExceededError" !== e.name) throw e;
                                    q.clear()
                                } else q.setItem(p.KEY, "[]")
                        }(), G = z(), F = "mobile" === e, S = document.querySelector(u.FORM_ID), T = document.querySelector(u.INPUT_ID), b = document.querySelector(u.CATEGORY_DROPDOWN_ID), I = document.querySelector(u.CATEGORY_DROPDOWN_LABEL), C = document.querySelector(u.CLEAR_BUTTON_ID), w = document.querySelector(u.SUBMIT_BUTTON_ID), O = document.querySelector(u.TYPEAHEAD_DROPDOWN_ID), L = document.querySelector(u.SUGGESTIONS_DROPDOWN_ID), R = document.querySelector(u.RECENT_HISTORY_DROPDOWN_ID), N = document.querySelector(u.ACCESSIBILITY_RESULTS_READER_ID), T) && (R.innerHTML = le(U, !0), De(R), S.addEventListener("reset", function() {
                            M = [], W = [], X = [], [], j = [], K = -1, T.focus()
                        }), w.addEventListener("click", Ee), C.addEventListener("click", function() {
                            oe(T, ""), M = [], W = [], X = [], [], j = [], K = -1, V(L), $(R), Q("searchbox_clear", "Searchbox")
                        }), T.addEventListener("input", (t = ge, r = parseInt(Y), function() {
                            var e = this,
                                n = arguments;
                            clearTimeout(a), a = setTimeout(function() {
                                a = null, t.apply(e, n)
                            }, r)
                        })), T.addEventListener("focus", pe), F ? T.removeEventListener("blur", me) : T.addEventListener("blur", me, !0), T.addEventListener("keydown", Ae, !0))
                    }

                    function be(e) {
                        var r = fe(),
                            a = ee(e);
                        M = a.filter(function(e) {
                            return ne(U, e)
                        }), W = a.filter(function(e) {
                            return e.categoryId !== r && !ne(U, e)
                        }), X = a.filter(function(e) {
                            var t = H.trim();
                            return e.query.indexOf(t) > -1 && (!ne(M, e) && !ne(W, e))
                        }), W.length && r !== t.CATEGORY_ID && W.unshift({
                            query: H,
                            category: t.CATEGORY_LABEL,
                            categoryId: t.CATEGORY_ID
                        }), M.length > p.MAX_DISPLAYED && (M = M.slice(-p.MAX_DISPLAYED)), W.length > m.MAX_DISPLAYED && (W = W.slice(-m.MAX_DISPLAYED));
                        var n = le(M, !0) + le(W) + le(X);
                        N.innerHTML = e.length + " results", L.innerHTML = n, K = -1, De(L)
                    }

                    function Ie() {
                        T.value && B[T.value] && be(B[T.value])
                    }
                    be.init = Te, be.setCategory = he, be.renderSavedState = Ie, E.typeaheadResult = E.typeaheadResult || be, "undefined" != typeof exports && "undefined" != typeof module && module.exports ? (be.getPageContext = z, be.init = Te, be.buildRow = se, be.buildSearchLink = ue, be.reset = Se, be.flattenResults = ee, be.getScriptUrl = ie, be.getTypeaheadResults = ce, be.sanitize = te, be.getCategoryId = fe, be.getCategoryLabel = ye, be.setCategory = he, be.renderSavedState = Ie, be.typeaheadResults = be, module.exports = be) : Te()
                }()
        }();
    