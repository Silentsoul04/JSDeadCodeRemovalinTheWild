import {
    g as e,
    D as n,
    a,
    c as t,
    B as o,
    b as r,
    P as i,
    s as l,
    F as c,
    d,
    r as u,
    e as s,
    k as p,
    f as m,
    h,
    S as g,
    i as f,
    _ as v,
    j as b,
    l as y,
    p as k,
    u as M,
    m as C,
    L as E,
    n as w,
    o as S,
    q as A,
    t as L,
    v as T,
    w as B,
    C as D,
    x as I,
    y as H,
    z as x,
    A as O,
    W,
    E as R,
    G as N,
    H as q,
    I as F,
    J as _,
    K as P,
    M as G,
    N as U,
    O as z,
    Q as Y
} from "./vanilla.common-chunks.esm.6e0de5cd.js";
var j = function(t) {
        var o = {};
        return o.dom = e(t, "dom", n.create()), o.setupTriggers = function(n) {
            var t = e(n, "handleSparkClicked", function() {}),
                r = e(n, "handleAccountClicked", function() {}),
                i = e(n, "handleLocationClicked", function() {}),
                l = o.dom.getById("header-account-toggle"),
                c = o.dom.getById("header-location-toggle"),
                d = a("header-Header-sparkButton", o.dom),
                u = !1,
                s = !1,
                p = !1,
                m = function() {
                    t(d), u = !0
                },
                h = function() {
                    r(l), s = !0
                },
                g = function() {
                    i(c), p = !0
                };
            d && (o.setupDemandLoad(d, n, "onDemandSparkLoad"), u && d.removeEventListener("click", m), d.addEventListener("click", m)), l && (s && d.removeEventListener("click", h), l.addEventListener("click", h)), c && (p && d.removeEventListener("click", g), c.addEventListener("click", g))
        }, o.setupDemandLoad = function(n, a, t) {
            var o = !1,
                r = e(a, t, null);
            if (r) {
                var i = function e() {
                    o || (n.removeEventListener("mouseover", e), n.removeEventListener("touchstart", e), r(), o = !0)
                };
                n.addEventListener("mouseover", i), n.addEventListener("touchstart", i)
            }
        }, o
    },
    K = window._wml && (window._wml.headerConfig || window._wml.config) || {},
    J = K.ccm && K.ccm["header-footer-app"],
    Q = J && J.searchTypeAheadApi,
    V = t(window),
    Z = function() {
        var e = {
            dom: n.create(),
            init: function(n) {
                e.isMobile = n, e.bodyScroll = o.getDefaultInstance(), e.getElements(), e.deptOpen = !1, e.handleKeyDown = e.handleKeyDown, e.chevronClicked = e.chevronClicked, e.openListMenu = e.openListMenu, e.wireButtons = e.wireButtons, e.setTypeAheadQuery = e.setTypeAheadQuery, e.typeaheadUpdateCCM = Q && "true" === Q.enableUpdate || document.cookie.indexOf("enableNewRS=true") > -1, e.wireButtons(), e.setTypeAheadQuery(), e.setTypeAheadDepartment(), document.activeElement === e.inputEl && e.handleFocus({
                    target: document.activeElement
                }), !0 === V && r().basePath === i.search && window.addEventListener("load", function() {
                    l(function(n) {
                        "object" !== v(n) || n.status !== b.UPDATE_TYPEAHEAD && n.status !== b.SEARCH || (e.setTypeAheadDepartment(n.catId), e.setSearchCategory(e.getTypAheadDepartmentFromId(n.catId)), e._onCancelSearch(), window.scrollTo(0, 0))
                    })
                })
            },
            getElements: function() {
                e.categoryMenuEl = e.dom.getById("SearchDropdown-list"), e.categoryToggleEl = e.dom.getById("global-search-dropdown-toggle"), e.clearBttnEl = e.dom.getById("global-search-clear"), e.dropdownOptions = e.categoryMenuEl.querySelectorAll("button[role=menuitem]"), e.formEl = e.dom.getById("global-search-form"), e.inputEl = e.dom.getById("global-search-input"), e.pageWrapper = e.dom.getById("search-category-bg"), e.toggleText = e.dom.getById("global-search-category-label"), e.dropdown = e.formEl.querySelector("#global-search-dropdown"), e.resultReader = a("vh-typeahead-results-reader", e.formEl), e.typeaheadContainer = a("vh-typeahead-container", e.formEl), e.mobileFormEl = e.dom.querySelector(".mweb-Typeahead-list")
            },
            handleFocus: function(n) {
                "global-search-submit" === n.target.id && e.inputEl.value.trim() || "global-search-clear" !== n.target.id && (e.dom.addClass(e.formEl, "vh-is-focused"), e.isMobile && !e.searchInputFocusTrap && (e.bodyScroll.lock(), e.searchInputFocusTrap = c.create(e.formEl), window.scrollTo(0, 0)))
            },
            handleBlur: function() {
                e.typeaheadUpdateCCM || e.isMobile || e.dom.removeClass(e.formEl, "vh-is-focused")
            },
            hideDropdown: function() {
                -1 === document.activeElement.className.indexOf("header-Typeahead-row") && (e.resultReader.innerHTML = "", e.typeaheadContainer.classList.remove("vh-is-open"), e.inputEl.setAttribute("aria-activedescendant", ""), e.dropdown.setAttribute("hidden", !0))
            },
            openListMenu: function() {
                d(e.categoryToggleEl, {
                    "aria-expanded": !0
                }), u(e.categoryMenuEl, ["hidden"]), u(e.inputEl, ["placeholder"]), e.dom.addClass(e.formEl, "vh-is-focused"), e.formEl.addEventListener("keydown", function(n) {
                    e.handleKeyDown(n)
                }), e.removeEscHandler = s(e.formEl, e.handleOpenList), e.pageWrapper.addEventListener("click", e.closeListMenuEvent = e.handleOpenList), e.categoryMenuElFocusTrap = c.create(e.categoryMenuEl)
            },
            handleOpenList: function() {
                e.closeListMenu(), e.pageWrapper.removeEventListener("click", e.closeListMenuEvent), e.categoryToggleEl.focus()
            },
            closeListMenu: function() {
                d(e.categoryToggleEl, {
                    "aria-expanded": !1
                }), d(e.categoryMenuEl, {
                    hidden: !0
                }), d(e.inputEl, {
                    placeholder: "Search"
                }), e.formEl.removeEventListener("keydown", function(n) {
                    e.handleKeyDown(n)
                }), e.pageWrapper.removeEventListener("click", e.closeListMenuEvent), e.removeEscHandler && (e.removeEscHandler(), e.removeEscHandler = null), e.categoryMenuElFocusTrap && (e.categoryMenuElFocusTrap(), e.categoryMenuElFocusTrap = null)
            },
            listMenuItem: function(n) {
                if ("menuitem" === n.target.getAttribute("role")) {
                    var a = e.dom.getById("global-search-catid");
                    a.value = n.target.getAttribute("data-catid"), 0 === parseInt(a.value) ? e.clearSearchCategory() : e.setSearchCategory(n.target.innerText), e.closeListMenu()
                }
            },
            handleKeyDown: function(n) {
                if ([p.DOWN, p.UP].indexOf(n.keyCode) >= 0) {
                    n.preventDefault(), n.stopPropagation();
                    var a = m(e.categoryMenuEl),
                        t = a.indexOf(n.target);
                    n.target === e.categoryToggleEl && n.keyCode === p.DOWN ? a[0].focus() : t >= 0 && a[(t + (n.keyCode === p.DOWN ? 1 : -1) + a.length) % a.length].focus()
                }
            },
            clearSearchCategory: function() {
                e.toggleText.innerText = "", d(e.categoryToggleEl, {
                    "aria-label": "Search Category All Departments"
                }), e.inputEl.focus()
            },
            clearInput: function() {
                h(function() {
                    e.inputEl.value = ""
                })
            },
            setSearchCategory: function(n) {
                e.toggleText.innerText = n, d(e.categoryToggleEl, {
                    "aria-label": "Search Category " + n
                }), e.inputEl.focus()
            },
            setTypeAheadQuery: function() {
                var n = document.location.search.match(/query=([^&=]+)/i);
                if (n && n[1]) {
                    var a = decodeURIComponent(n[1]).split("+").join(" ");
                    e.inputEl.value = a
                }
            },
            setTypeAheadDepartment: function(n) {
                var a;
                if (n) a = n;
                else {
                    var t = document.location.search.match(/cat_id=([^&=]+)/i);
                    t && t[1] && (a = t[1])
                }
                var o = e.getTypAheadDepartmentFromId(a);
                e.toggleText.innerText = o || "All Departments"
            },
            getTypAheadDepartmentFromId: function(n) {
                if (n)
                    for (var a = 0; a < e.dropdownOptions.length; a++)
                        if (e.dropdownOptions[a].dataset.catid === n) return e.dropdownOptions[a].innerText || "All Departments";
                return "All Departments"
            },
            chevronClicked: function() {
                var n = e.categoryMenuEl.hasAttribute("hidden");
                h(function() {
                    n ? e.openListMenu() : e.closeListMenu()
                })
            },
            inHistory: function(e, n) {
                for (var a = -1, t = 0; t < e.length; t++) e[t].query === n && (a = t);
                return a
            },
            sessionSetItem: function(e) {
                try {
                    e = e ? JSON.stringify(e) : "", g.set("typeahead", e)
                } catch (e) {
                    throw e
                }
            },
            saveRecent: function(n, a) {
                if (n && a) {
                    var t = g.get("typeahead"),
                        o = t ? JSON.parse(t) : t,
                        r = {
                            query: n,
                            url: a
                        };
                    if (o) {
                        if (e.inHistory(o, n) >= 0) return;
                        o.length >= 6 && o.pop(), o.unshift(r)
                    } else(o = []).push(r);
                    e.sessionSetItem(o)
                }
            },
            wireButtons: function() {
                if (!e.buttonsWired) {
                    var n = e.dom.getById("global-search-submit");
                    e.formEl && (e.formEl.addEventListener("focus", e.handleFocus, !0), e.formEl.addEventListener("blur", e.handleBlur, !0)), e.clearBttnEl && (e.clearBttnEl.addEventListener("click", e.clearInput), e.isMobile || e.typeaheadUpdateCCM || e.clearBttnEl.addEventListener("focus", f(e.hideDropdown, 200))), e.categoryToggleEl && e.categoryToggleEl.addEventListener("click", e.chevronClicked), e.categoryMenuEl && e.categoryMenuEl.addEventListener("click", e.listMenuItem), !e.typeaheadUpdateCCM && n && n.addEventListener("click", function(n) {
                        if (n.preventDefault(), e.inputEl.value.trim()) {
                            var a = e.inputEl.value.trim(),
                                t = e.formEl.action + "?query=" + encodeURIComponent(a) + "&cat_id=0";
                            e.saveRecent(a, t), e.formEl.submit(n)
                        }
                    }), e.isMobile || !e.inputEl || e.typeaheadUpdateCCM || e.inputEl.addEventListener("blur", f(e.hideDropdown, 200)), e.buttonsWired = !0
                }
                window.MWEB_TYPEAHEAD && window.MWEB_TYPEAHEAD.init("MWEB_TYPEAHEAD"), e.wireButtonsMobile()
            },
            wireButtonsMobile: function() {
                e.mobileButtonsWired || (e.cancelMobileSearchLink = e.dom.querySelector("[data-tl-id=mweb-typeahead-cancel]"), e.cancelMobileSearchLink.addEventListener("click", e._onCancelSearch), e.mobileButtonsWired = !0)
            },
            _onCancelSearch: function() {
                e.dom.removeClass(e.formEl, "vh-is-focused"), e.dom.removeClass(e.mobileFormEl, "vh-is-open"), e._removeSearchFocusTrap(), e.bodyScroll.unlock(), e.inputEl.blur()
            },
            _removeSearchFocusTrap: function() {
                e.searchInputFocusTrap && (e.searchInputFocusTrap(), e.searchInputFocusTrap = null)
            }
        };
        return e
    },
    X = {
        "360-view": "e9ac",
        "add-to-cart": "e91d",
        "add-to-list": "e925",
        "add-user": "e914",
        add: "e94a",
        "angle-left": "e945",
        "angle-right": "e964",
        "angle-up": "e947",
        article: "e989",
        "auto-care-center": "e93b",
        "bag-nav": "e904",
        bag: "e918",
        "ban-circle": "e956",
        bank: "e98b",
        "blu-ray": "e966",
        "bra-style": "e972",
        cake: "e92b",
        calendar: "e929",
        camera: "e987",
        card: "e950",
        "caret-down": "e943",
        "caret-up": "e944",
        "cart-nav": "e902",
        cart: "e91c",
        "cash-a-check": "e9a9",
        category: "e983",
        check: "e9b1",
        "checkbox-checked": "e9b7",
        checkbox: "e9b6",
        classroom: "e975",
        clock: "e954",
        comment: "e930",
        configuration: "e9d0",
        "connect-pharmacy": "e99c",
        "continue-arrow": "e979",
        coupon: "e977",
        "credit-card": "e94c",
        crop: "e991",
        deli: "e93d",
        direction: "e95a",
        "down-arrow": "e946",
        download: "e92c",
        dvd: "e967",
        easyreorder: "e911",
        edit: "e92e",
        egg: "e9c2",
        "exclamation-circle": "e958",
        "express-pickup": "e976",
        "eyewear-frame-style": "e970",
        "fabric-care": "e96f",
        "fabric-content": "e96e",
        "facebook-secondary": "e95e",
        facebook: "e95e",
        "fav-nav-filled": "e9b0",
        "fav-nav": "e9af",
        fedex: "e980",
        filter: "e982",
        "find-store": "e95b",
        "firmness-level": "e9bc",
        "fit-guide": "e971",
        flag: "e936",
        flu: "e917",
        "fresh-bakery": "e93c",
        "gas-station": "e93e",
        "generic-gift-card": "e9ae",
        "generic-shield": "e9cc",
        "gift-alt": "e937",
        "gift-card": "e94d",
        gift: "e937",
        globe: "e959",
        "google-plus": "e960",
        graduate: "e91a",
        grid: "e924",
        "grocery-alt": "e90d",
        "grocery-nav": "e968",
        grocery: "e90d",
        "hair-salon": "e98c",
        heart: "e92f",
        help: "e953",
        hide: "e990",
        "high-fiber": "e9c4",
        "high-protein": "e9c5",
        history: "e996",
        holiday: "e96a",
        home: "e919",
        idea: "e921",
        info: "e957",
        "insta-watch": "e984",
        instagram: "e961",
        laptop: "e94b",
        "light-bulb": "e921",
        link: "e974",
        "list-nav": "e909",
        list: "e925",
        lock: "e920",
        "low-calorie": "e9c6",
        "low-sodium": "e9c7",
        magazine: "e9a6",
        mail: "e94e",
        "mattress-type": "e9bd",
        membership: "e94f",
        menu: "e907",
        "microphone-mute": "e99e",
        microphone: "e99d",
        minus: "e962",
        mobile: "e91f",
        modal: "e927",
        "model-size": "e96d",
        "money-services": "e93f",
        "monthly-payment-plan": "e9c0",
        more: "e963",
        "nail-salon": "e98e",
        "new-window": "e928",
        "next-day": "e9ba",
        "no-dairy": "e9c8",
        "no-gluten": "e9c9",
        "no-gmo": "e9ca",
        "no-nut": "e9cb",
        "no-sugar": "e9d2",
        note: "e9a7",
        notification: "e995",
        ok: "e948",
        onesie: "e91b",
        organic: "e9ce",
        package: "e90e",
        pause: "e97a",
        pause2: "e926",
        paybill: "e9a8",
        payment: "e97e",
        "pharmacy-pin": "e90c",
        pharmacy: "e916",
        phone: "e942",
        photo: "e940",
        "pin-nav-alt": "e90a",
        "pin-nav": "e905",
        pin: "e90b",
        pinterest: "e95d",
        plane: "e933",
        "play-alt": "e97c",
        "play-circle": "e955",
        play: "e97b",
        "pre-fill": "e992",
        "prescription-history": "e99f",
        prescription: "e9a0",
        print: "e923",
        promotion: "e9a5",
        pumpkin: "e9c3",
        "qr-code": "e999",
        quote: "e978",
        "radio-checked": "e9b9",
        radio: "e9b8",
        receipt: "e988",
        "receive-money": "e985",
        "refill-and-view-prescription": "e9a2",
        registry: "e937",
        remove: "e949",
        "reorder-nav": "e900",
        restaurant: "e98d",
        restroom: "e9a4",
        rollback: "e98a",
        "savings-catcher": "e912",
        "scan-and-go": "e981",
        scan: "e99a",
        "search-nav": "e908",
        search: "e938",
        "send-money": "e986",
        services: "e993",
        settings: "e994",
        share: "e998",
        "shoe-style": "e973",
        shuffle: "e9bb",
        "sign-in": "e951",
        "sign-out": "e952",
        snowflake: "e92d",
        spark: "e935",
        "star-rating": "e969",
        star: "e934",
        "start-a-return": "e9b4",
        "store-finder-nav": "e906",
        "store-map": "e9ad",
        "store-nav": "e903",
        "store-solid": "e97f",
        store: "e910",
        subscribe: "e9c1",
        "tech-repair": "e98f",
        thickness: "e9be",
        "thumbs-alt-down": "e932",
        "thumbs-alt-up": "e931",
        "thumbs-down": "e932",
        "thumbs-up": "e931",
        "top-type": "e9bf",
        "transfer-prescription": "e9a1",
        trash: "e922",
        tree: "e96c",
        trophy: "e91e",
        truck: "e90f",
        twitter: "e95c",
        "up-arrow": "e947",
        upgrade: "e997",
        "user-alt": "e913",
        "user-nav": "e901",
        user: "e913",
        vegan: "e9cf",
        video: "e9d1",
        vision: "e941",
        vod: "e965",
        "vudu-alt": "e915",
        vudu: "e915",
        wallet: "e97e",
        "walmart-associate": "e9a3",
        "walmart-credit-card": "e97d",
        "walmart-ebooks": "e9b5",
        "walmart-pay": "e99b",
        "wedding-rings": "e96b",
        "weekly-ad": "e92a",
        wifi: "e9aa",
        "wpp-shield-alt": "e9b3",
        "wpp-shield": "e9b2",
        youtube: "e95f",
        "zoom-in-loupe": "e93a",
        "zoom-in": "e93a",
        "zoom-out-loupe": "e939",
        "zoom-out": "e939",
        zoom: "e93a"
    },
    $ = function() {
        return {
            tries: 0,
            maxTries: 3,
            init: function(e, t) {
                var o, r, i;
                e.header = e.header || {}, o = e.header.GlobalAlertBar, r = t, i = {
                    beacon: y("Header"),
                    dom: n.create(),
                    setData: function(e) {
                        var n = e.configs && e.configs.globalAlertBarPersonalized,
                            a = e.configs && e.configs.globalAlertBar,
                            t = k().location.state,
                            o = i._filterPersonalizedAlertBar(n, t) || a,
                            r = o.uid;
                        "true" !== g.get("GlobalAlertBarShown") && o.link && (i.bannerConfig = {
                            backgroundColor: o.backgroundColor,
                            color: o.messageColor,
                            iconName: o.iconName,
                            link: o.link,
                            uid: r
                        }, i.createElements(), i.createBanner(e), i.showBanner())
                    },
                    createElements: function() {
                        i.bannerWrapper = a("vh-global-alert"), i.bannerMessageContainer = a("vh-global-alert-text")
                    },
                    createBanner: function(e) {
                        i.addMessage(e), i.addCloseButton(), void 0 !== i.bannerWrapper.style && (i.bannerWrapper.style.backgroundColor = i.bannerConfig.backgroundColor, i.bannerWrapper.style.color = i.bannerConfig.color)
                    },
                    addIcon: function() {
                        a("vh-global-alert-icon").innerText = unescape("%u" + X[i.bannerConfig.iconName])
                    },
                    addLink: function(e) {
                        var n = a("vh-global-alert-link");
                        if (void 0 !== n.setAttribute) {
                            n.setAttribute("href", i.bannerConfig.link.clickThrough.value), n.setAttribute("title", i.bannerConfig.link.title), n.setAttribute("data-uid", i.bannerConfig.link.uid);
                            var t = {
                                moduleId: e.moduleId,
                                moduleType: e.type,
                                moduleName: e.name,
                                moduleVersion: e.version,
                                moduleZone: "headerZone4"
                            };
                            M({
                                dom: i.dom,
                                beacon: i.beacon,
                                moduleInfo: t
                            })(n)
                        }
                    },
                    addMessage: function(e) {
                        a("vh-global-alert-text").innerHTML = i.bannerConfig.link.linkText, i.addIcon(), i.addLink(e)
                    },
                    addCloseButton: function() {
                        var e = a("vh-global-alert-button");
                        void 0 !== e.addEventListener && e.addEventListener("click", i.hideBanner)
                    },
                    hideBanner: function() {
                        i.beacon.tagAction(C()), g.set("GlobalAlertBarShown", "true"), d(i.bannerWrapper, {
                            hidden: !0
                        }), r("remove", "isAlertActive"), setTimeout(function() {
                            i.bannerWrapper.parentNode.removeChild(i.bannerWrapper)
                        }, 500)
                    },
                    showBanner: function() {
                        r("add", "isAlertActive"), u(i.bannerWrapper, ["hidden"])
                    },
                    _filterPersonalizedAlertBar: function(e, n) {
                        var a;
                        if (Array.isArray(e))
                            for (var t = 0; t < e.length; t++)
                                if (0 !== e[t].state.length)
                                    for (var o = 0; o < e[t].state.length; o++)
                                        if (e[t].state[o] === n) {
                                            a = e[t];
                                            break
                                        }
                        return a
                    }
                }, o && i.setData(o), e.isMobile && function(e, a) {
                    var t = n.create(),
                        o = function() {
                            var e = new Date;
                            return Math.floor(e.getTime() / 1e3 / 60)
                        },
                        r = {
                            beacon: y("Header"),
                            isIOSHidden: !1,
                            isIosSafari: !1,
                            negativeScroll: !1,
                            bannerHasBeenRemoved: !1,
                            setData: function(e) {
                                if (e.configs && r.shouldDisplay(E.get("ab-closed"))) {
                                    var n = e.configs;
                                    r.bannerConfig = {
                                        backgroundColor: n.backgroundColor || "#FFFFFF",
                                        iconName: n.iconName || "spark",
                                        bannerText: n.bannerText,
                                        uid: n.uid
                                    }, r.container = t.getById("vh-app-container"), r.header = t.getById("vh-header"), r.addMessage(), r.addCloseButton(), r.isMobileSafariCheck(), r.showBanner()
                                }
                            },
                            shouldDisplay: function(e) {
                                return !e || o() - 21600 > e && !E.get("ab-closed")
                            },
                            createElements: function() {},
                            addMessage: function() {
                                r.message = t.createElement("span");
                                var e = t.getById("vh-app-message");
                                e.setAttribute("title", r.bannerConfig.bannerText), e.setAttribute("href", w()), r.message.innerHTML = r.bannerConfig.bannerText, e.appendChild(r.message), r.message.addEventListener("click", r.hideOnClick = r.handleInstall)
                            },
                            addCloseButton: function() {
                                t.getById("vh-app-close").addEventListener("click", r.hideBanner)
                            },
                            handleInstall: function(e) {
                                e.preventDefault(), r.message.removeEventListener("click", r.hideOnClick), r.beacon.tagAction(S()), r.hideBanner({
                                    type: "install"
                                }), t.getWindow().location.href = w()
                            },
                            hideBanner: function(e) {
                                e && ("install" !== e.type && r.beacon.tagAction(A()), E.set("ab-closed", o())), r.container.setAttribute("hidden", "true"), a("remove", "isAppActive")
                            },
                            isMobileSafariCheck: function() {
                                var e = window.navigator.userAgent,
                                    n = !!e.match(/iPhone/i),
                                    a = !!e.match(/WebKit/i),
                                    t = n && a && !e.match(/CriOS/i);
                                r.isIosSafari = t
                            },
                            showBanner: function() {
                                var e = f(r.handleScroll, 250);
                                r.isIosSafari ? a("add", "isAppActive", !r.bannerHasBeenRemoved && e) : a("add", "isAppActive"), r.container.removeAttribute("hidden")
                            },
                            handleScroll: function() {
                                var e = 0 === window.pageYOffset && window.document.querySelector("HTML").offsetHeight !== window.innerHeight;
                                !r.bannerHasBeenRemoved && e ? (r.bannerHasBeenRemoved = !0, r.hideBanner()) : r.bannerHasBeenRemoved && !e && (r.showBanner(), r.bannerHasBeenRemoved = !1)
                            }
                        };
                    e && r.setData(e)
                }(e.header.GlobalAppBanner, t)
            }
        }
    },
    ee = function(t) {
        var r = {};
        return r.dom = e(t, "dom", n.create()), r.bodyScroll = e(t, "bodyScroll", o.getDefaultInstance()), r.activeTrigger = null, r.activeMenu = null, r.activeRegion = null, r.handleOverlayClicked = function() {
            r.activeMenu && r.activeRegion && ("bubble" === r.activeRegion ? r.hideBubbleMenu(r.activeMenu) : "spark" === r.activeRegion && r.hideSparkMenu(r.activeMenu)), r.overlay && r.overlay.removeEventListener("click", r.handleOverlayClicked)
        }, r.showMenu = function(e, n, t) {
            var o = r.dom.getById("header-" + t + "-menu");
            r.overlay = a("vh-menu-bg", o), r.activeTrigger = e, r.activeMenu = n, r.activeRegion = t, r.dom.removeClass(o, "vh-menu-hidden"), n.show(), setTimeout(function() {
                s(r.dom.getDocument(), r.handleOverlayClicked), r.bodyScroll.lock(), r.overlay && r.overlay.addEventListener("click", r.handleOverlayClicked), "mobile" === n.fetchTemplate ? r.stopFocusTrap = c.create(o) : r.stopFocusTrap = c.create(n.menu || o)
            }, 150)
        }, r.hideMenu = function(e) {
            e.hide(), r.activeTrigger && r.activeTrigger.focus(), r.activeTrigger = null, r.activeMenu = null, r.activeRegion = null, r.bodyScroll.unlock(), r.stopFocusTrap && r.stopFocusTrap()
        }, r.showSparkMenu = function(e, n) {
            r.showMenu(e, n, "spark"), r.dom.getById("vh-spark-main-menu").scrollTop = 0
        }, r.hideSparkMenu = function(e) {
            var n = r.dom.getById("header-spark-menu");
            n && r.dom.addClass(n, "vh-menu-hidden"), r.hideMenu(e)
        }, r.showBubbleMenu = function(e, n) {
            r.showMenu(e, n, "bubble")
        }, r.hideBubbleMenu = function(e) {
            var n = r.dom.getById("header-bubble-menu");
            n && r.dom.addClass(n, "vh-menu-hidden"), r.hideMenu(e)
        }, r
    },
    ne = function(a) {
        var t = {};
        return t.data = a.data, t.dom = e(a, "dom", n.create()), t.beacon = e(a, "beacon", y("Header")), t.onClose = e(a, "onClose", function() {}), t.container = t.dom.getById("header-bubble-menu-content"), t.menu = t.container.querySelector("#vh-account-menu-root"), t.menuContentReady = L.create(), t.addUserNameToHeader = function() {
            var e = T();
            if (e) {
                var n = t.menu.querySelector("[data-tl-id=header-account-menu-icon]"),
                    a = t.menu.querySelector("[data-tl-id=header-account-menu-title]");
                n && e.initials && (n.innerHTML = e.initials), a && e.fullName && (a.innerHTML = e.fullName)
            }
        }, t.fetch = function(e) {
            if (t.menu ? (t.isAccountMenuHidden = t.menu.getAttribute("hidden"), t.menu.remove()) : t.isAccountMenuHidden = !0, t.menu = t.dom.createElement("div"), d(t.menu, B({
                    id: "vh-account-menu-root"
                }, t.isAccountMenuHidden ? {
                    hidden: !0
                } : null)), t.menu.innerHTML = e, t.container)
                if (t.container.appendChild(t.menu), t.addUserNameToHeader(), "1" === D.get("hasCID")) {
                    var n = t.menu.querySelector("#signed-out");
                    n && n.remove()
                } else {
                    var a = t.menu.querySelector("#signed-in");
                    a && a.remove()
                }
            t.setup(), t.menuContentReady.resolve()
        }, t.setup = function() {
            var e = t.menu.querySelector("#account-menu-close-button");
            e && e.addEventListener("click", t.onClose);
            var n = t.menu.querySelector('a[title="Sign In"]');
            if (n && n.href) {
                var a = t.dom.querySelector(".js-header"),
                    o = n.href.replace(n.protocol + "//" + n.host, "");
                n.href = I(a, o)
            }
            t.bindClickListeners()
        }, t.bindClickListeners = function() {
            t.menu && t.menu.querySelectorAll("a").forEach(function(e) {
                e.setAttribute("data-section-title", e.dataset.tlId), M({
                    dom: t.dom,
                    beacon: t.beacon,
                    moduleInfo: t.dom.getDataAttributes(e, ["module-id", "module-published-date", "module-type", "module-zone"])
                })(e)
            })
        }, t.cleanup = function() {}, t.show = function() {
            t.menuContentReady.then(function() {
                t.beacon.tagAction(H({
                    name: "Account panel"
                })), u(t.menu, ["hidden"])
            })
        }, t.hide = function() {
            d(t.menu, {
                hidden: !0
            })
        }, t
    },
    ae = function(a) {
        var t = {};
        return t.dom = e(a, "dom", n.create()), t.beacon = e(a, "beacon", y("Header")), t.onClose = e(a, "onClose", function() {}), t.container = t.dom.getById("header-bubble-menu-content"), t.menu = t.container.querySelector("#vh-location-menu-root"), t.menuContentReady = L.create(), t.fetch = function(e) {
            t.menu ? (t.isLocationMenuHidden = t.menu.getAttribute("hidden"), t.menu.remove()) : t.isLocationMenuHidden = !0, t.menu = t.dom.createElement("div"), d(t.menu, B({
                id: "vh-location-menu-root"
            }, t.isLocationMenuHidden ? {
                hidden: !0
            } : null)), t.menu.innerHTML = e, t.container && t.container.appendChild(t.menu), t.setup(), t.menuContentReady.resolve()
        }, t.bindClickListeners = function() {
            t.menu && t.menu.querySelectorAll("a").forEach(function(e) {
                e.setAttribute("data-section-title", e.dataset.tlId), M({
                    dom: t.dom,
                    beacon: t.beacon,
                    moduleInfo: t.dom.getDataAttributes(e, ["module-id", "module-published-date", "module-type", "module-zone"])
                })(e)
            })
        }, t.setup = function() {
            t.form = x.create({
                beacon: t.beacon,
                isMobile: !1,
                onCloseLocationMenu: this.onClose
            }), t.form.setup(), t.bindClickListeners();
            var e = t.menu.querySelector("#location-menu-close-button"),
                n = t.menu.querySelector("#zipcode-form-submit-button");
            e && e.addEventListener("click", t.onClose), n && n.addEventListener("click", t.form.handleInputSubmit)
        }, t.show = function() {
            t.menuContentReady.then(function() {
                t.form && t.form.refreshLocationData && t.form.refreshLocationData(), u(t.menu, ["hidden"]), t.beacon.tagAction(H({
                    name: "Location Panel"
                }))
            })
        }, t.cleanup = function() {}, t.hide = function() {
            d(t.menu, {
                hidden: !0
            })
        }, t
    },
    te = function(a) {
        var t = {},
            o = k(),
            i = D.get("nd_sess"),
            l = O(i),
            c = g.get("GlobalHeader-NextDayToggleTooltipShown");
        try {
            c = JSON.parse(c) || {}
        } catch (e) {
            c = {}
        }
        var d = r().basePath,
            u = g.get("GlobalHeader-GroceryTooltipShown"),
            s = function() {
                t.tooltip && t.tooltip.parentNode && t.tooltip.parentNode.removeChild(t.tooltip)
            };
        if (u || function(e) {
                return "NextDayDelivery" === e || "Home" === e
            }(d) && l && !c[d]) return {
            init: function() {}
        };
        t.dom = e(a, "dom", n.create()), t.beacon = e(a, "beacon", y("Header")), t.container = t.dom.getById("grocery-tooltip-root"), t.pageWrapper = t.dom.querySelector(".page-full-wrapper") || t.dom.querySelector(".js-footer");
        var p = t.dom.querySelector(".js-global-header-wrapper");
        return t.url = I(p, "/globalnav/api/render/grocery-tooltip"), t.init = function(n) {
            t.tooltip = t.dom.createElement("div"), t.tooltip.innerHTML = n.groceryTooltip;
            var a = t.tooltip.querySelector("[data-tl-id=header-grocery-tooltip]"),
                r = o.nearbyStoreServiceTypes || [],
                i = !1;
            t.tooltip && (r.indexOf("GROCERY_PICKUP_DELIVERY") > -1 ? a.innerHTML = e(n, "groceryLabels.tooltipTextPD", "") : r.indexOf("GROCERY_PICKUP") > -1 && (a.innerHTML = e(n, "groceryLabels.tooltipText", "")), "" !== a.innerHTML && (i = !0)), t.container && i && (t.beacon.tagAction({
                actionName: "GROCERY_TOOLTIP_SHOWN_FIRSTLOAD",
                reportingId: "OVERLAY_VIEW",
                attrs: [
                    ["co", {
                        nm: t.tooltip.innerHTML,
                        st: "impression"
                    }]
                ]
            }), t.container.appendChild(t.tooltip), t.setupAutoHide(n.groceryTooltipDuration), g.set("GlobalHeader-GroceryTooltipShown", !0), t.pageWrapper.addEventListener("click", t.removeGroceryTooltip = t.handleOpenGroceryTooltip))
        }, t.setupAutoHide = function(e) {
            "number" != typeof e || e < 1 || t.dom.getWindow().setTimeout(function() {
                s()
            }, 1e3 * e)
        }, t.handleOpenGroceryTooltip = function() {
            s(), t.pageWrapper.removeEventListener("click", t.removeGroceryTooltip)
        }, t.cleanup = function() {}, t
    },
    oe = "ak_e",
    re = function() {
        var e = {
            dom: n.create(),
            beacon: y("Header"),
            widthWatcher: W.getDefaultInstance(),
            menuManager: ee(),
            isMobileLayout: !0,
            isMobileSparkMenu: !0,
            currentBreakpoint: null,
            search: Z(),
            data: !1,
            sparkMenuData: !1,
            mounted: !1,
            activeBanners: 0,
            sparkMenuReady: L.create(),
            showMenuSpinner: R("ccm.header-footer-app.appearance.showMenuSpinner"),
            loadOnDemand: N(),
            reset: function() {
                e.dom.getWindow().removeEventListener("scroll", e.handleScrolling)
            },
            setup: function() {
                e.reset();
                var n = j(),
                    a = {
                        handleSparkClicked: e.handleSparkMenuClicked,
                        handleAccountClicked: e.handleAccountMenuClicked,
                        handleLocationClicked: e.handleLocationMenuClicked
                    };
                e.loadOnDemand && (a.onDemandSparkLoad = e.handleSparkMenuLoad), n.setupTriggers(a), e.widthWatcher.getMeasurement(e.handleMeasurement), e.widthWatcher.onMeasuredResize(function(n) {
                    e.currentBreakpoint !== n.breakpoint && e.handleMeasurement(n)
                }), e.setupBubbleLinksAnalytics(), e.setupSparkMenuAnalytics()
            },
            setMainData: function(n) {
                e.data = n, e.render(), e.renderSparkMenu()
            },
            setSparkMenuData: function(n) {
                e.sparkMenuData = n, e.renderSparkMenu()
            },
            render: function() {
                var n = encodeURIComponent(e.dom.getWindow().location.pathname + e.dom.getWindow().location.search);
                e.readCartCount(), q(e.setCartCount), e.setLoginInitials(), e.accountMenu = ne({
                    onClose: function() {
                        e.menuManager.hideBubbleMenu(e.accountMenu)
                    }
                }), e.locationMenu = ae({
                    onClose: function() {
                        e.menuManager.hideBubbleMenu(e.locationMenu)
                    }
                }), !e.mounted && $().init(e.data, e.handleBannerChange), e.mounted = !0, e.groceryTooltip = te(), e.groceryTooltip.init(e.data.groceryTooltip), e.data.accountMenu = e.data.accountMenu.replace("account/login?tid=0&amp;returnUrl=/", "account/login?tid=0&amp;returnUrl=".concat(n)), e.accountMenu.fetch(e.data.accountMenu), e.locationMenu.fetch(e.data.locationMenu), e.handleNextDay()
            },
            setupSparkMenuAnalytics: function() {
                var n = e.dom.getById("vh-home-link");
                d(n, {
                    "aria-label": "Walmart Homepage",
                    role: "link",
                    "data-uid": "header-walmart-logo-link",
                    title: "Walmart Homepage",
                    "data-index": "LHN open/close spark click"
                }), M({
                    dom: e.dom,
                    beacon: e.beacon,
                    moduleInfo: {
                        moduleId: "this-is-a-header-spark-link",
                        moduleType: "HeaderSparkLogo",
                        moduleName: "Global Header Spark Link",
                        moduleVersion: 1,
                        moduleZone: "headerZone0"
                    }
                })(n)
            },
            setupBubbleLinksAnalytics: function() {
                var n = e.dom.getById("header-bubble-links"),
                    a = e.dom.getDataAttributes(n, ["module-id", "module-published-date", "module-name", "module", "module-zone", "module-version"]);
                a.moduleType = a.module;
                var t = M({
                    dom: e.dom,
                    beacon: e.beacon,
                    moduleInfo: a
                });
                n.querySelectorAll("a").forEach(t)
            },
            setSpinner: function(n, a, t) {
                e.showMenuSpinner && (n.hidden = t, a.hidden = !t)
            },
            handleSparkMenuLoad: function() {
                e.sparkMenuData || F("sparkMenu", e.setSparkMenuData)
            },
            handleSparkMenuClicked: function(n) {
                e.beacon.tagAction(_());
                var a = P(oe, n.parentNode);
                e.menuManager && (e.setSpinner(n, a, !0), e.sparkMenuReady.then(function() {
                    e.setSpinner(n, a, !1), e.menuManager.showSparkMenu(n, e.sparkMenu)
                }))
            },
            handleAccountMenuClicked: function(n) {
                e.menuManager && e.accountMenu && e.menuManager.showBubbleMenu(n, e.accountMenu)
            },
            handleLocationMenuClicked: function(n) {
                e.menuManager && e.locationMenu && e.menuManager.showBubbleMenu(n, e.locationMenu)
            },
            readCartCount: function() {
                e.setCartCount({
                    totalCount: D.get("cart-item-count")
                })
            },
            setCartCount: function(n) {
                var a = n.totalCount;
                "string" == typeof a && (a = parseInt(a || 0, 10));
                var t = e.dom.querySelector("[data-tl-id=header-cart-tooltip]"),
                    o = a && a > 99 ? "99+" : a;
                if (o) {
                    var r = e.dom.querySelector("[data-tl-id=BubbleButtonheader-GlobalHeaderBubblesNav-Cart]");
                    d(r, {
                        "aria-label": "Cart contains " + o + " items"
                    }), u(t, ["hidden"]), t.innerHTML = o, D.set("cart-item-count", a)
                } else d(t, {
                    hidden: !0
                })
            },
            setLoginInitials: function() {
                var n = "1" === D.get("hasCID"),
                    a = D.get("customer");
                if (n && a.length) {
                    try {
                        a = JSON.parse(a)
                    } catch (e) {
                        a = {
                            firstName: "",
                            lastNameInitial: ""
                        }
                    }
                    var t = (a.firstName[0] || "") + (a.lastNameInitial || ""),
                        o = e.dom.querySelector("#header-account-toggle .vh-bubble-button-icon-slide");
                    o && (o.innerHTML = "<span data-tl-id='GlobalHeaderBubblesNav-Account-Initials'>" + t + "</span>")
                }
            },
            changeHeaderColorOnScroll: function() {
                e.dom.getById("vh-header") && (e.handleScrolling(), e.dom.getWindow().addEventListener("scroll", e.handleScrolling))
            },
            handleScrolling: function() {
                var n = e.dom.getById("vh-header");
                return e.isAppActive || e.isAlertActive ? (e.bannerScroll(), null) : (e.dom.getWindow().pageYOffset > n.offsetHeight ? e.dom.addClass(n, "vh-sticky") : e.dom.getWindow().pageYOffset <= n.offsetHeight && e.dom.removeClass(n, "vh-sticky"), null)
            },
            bannerScroll: function() {
                var n = e.dom.getById("vh-header"),
                    t = a("vh-global-alert"),
                    o = e.dom.getById("vh-app-container"),
                    r = n ? n.offsetHeight : 0,
                    i = (t ? t.offsetHeight : 0) + (o ? o.offsetHeight : 0) + r;
                e.currentClass && (e.dom.removeClass(n, e.currentClass), e.currentClass = void 0), e.dom.getWindow().pageYOffset >= i && !e.initial ? !e.data.mobile && e.dom.addClass(n, "vh-sticky") : e.showBanner(n), e.appCallBack && e.appCallBack()
            },
            showBanner: function(n) {
                e.isAlertActive && e.isAppActive ? e.dom.addClass(n, "vh-bannersActive") : (e.isAlertActive && e.dom.addClass(n, "vh-alertActive"), e.isAppActive && e.dom.addClass(n, "vh-appActive")), e.currentClass = n.classList[n.classList.length - 1], e.initial = !1, !e.data.mobile && e.dom.removeClass(n, "vh-sticky")
            },
            handleBannerChange: function(n, a, t) {
                var o = e.dom.getById("vh-header");
                return e[a] = "remove" !== n, e.isAlertActive || e.isAppActive ? ("add" === n && (e.initial = e.isAlertActive ? !e.isAppActive : e.isAppActive), t && (e.appCallBack = t), e.handleScrolling(), null) : (o.style.top = null, e.dom.removeClass(o, e.currentClass), null)
            },
            handleMeasurement: function(n) {
                e.currentBreakpoint = n.breakpoint, e.isMobileLayout = G.isBreakpointBelow(n.breakpoint, "medium"), e.isMobileSparkMenu = G.isBreakpointBelow(n.breakpoint, "large"), e.changeHeaderColorOnScroll(e.isMobileLayout), e.renderSparkMenu()
            },
            renderSparkMenu: function() {
                e.currentBreakpoint && e.data && e.sparkMenuData &&
                    import ("./vanilla.index.esm.e6222c0f.js").then(function(n) {
                        var a = n.default;
                        e.sparkMenu = a.create({
                            onClose: function() {
                                e.menuManager.hideSparkMenu(e.sparkMenu)
                            }
                        }), e.sparkMenu.setUseMobileTemplate(e.isMobileSparkMenu), e.sparkMenu.setEmbedBubbleMenus(e.isMobileLayout), e.sparkMenu.init({
                            accountMenu: e.data.accountMenu,
                            locationMenu: e.data.locationMenu,
                            sparkMenu: e.sparkMenuData.sparkMenu,
                            sparkMenuDepartmentsFlyout: e.sparkMenuData.sparkMenuDepartmentsFlyout,
                            sparkMenuDepartmentsSubNav: e.sparkMenuData.sparkMenuDepartmentsSubNav
                        }), e.sparkMenuReady.resolved || e.sparkMenuReady.resolve()
                    })
            },
            handleNextDay: function() {
                var n, a = D.get("nd_sess"),
                    t = O(a),
                    o = (n = !1, function(a) {
                        n ? e.nextDayLocationModal.toggle({
                            ctaSrcElSelector: a
                        }) : import ("./vanilla.index.esm.631229f1.js").then(function(t) {
                            var o = t.default;
                            n = !0, e.nextDayLocationModal = o.create(), e.nextDayLocationModal.toggle({
                                ctaSrcElSelector: a
                            })
                        })
                    });
                U(function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    o(e.ctaSrcElSelector)
                }), t && (
                    import ("./vanilla.index.esm.2d5799dd.js").then(function(n) {
                        var a = n.default;
                        e.nextDayToggleBar = a().init({
                            onLocationCtaClick: function() {
                                o("[data-tl-id='nd-toggle-bar'] [data-tl-id='nd-zip']")
                            },
                            nextDayTooltipData: e.data.nextDayTooltip,
                            tempUnavailableTooltipData: e.data.tempUnavailableInfoTooltip
                        })
                    }),
                    import ("./vanilla.index.esm.358c938d.js").then(function(n) {
                        var a = n.default;
                        e.nextDayMessageBox = a(e.setCartCount)
                    }))
            }
        };
        return e
    }(),
    ie = W.getDefaultInstance();
void 0 === window.postal && (window.postal = z), ie.getMeasurement(function(e) {
    re.search.init(G.isBreakpointBelow(e.breakpoint, "medium"))
});
var le = function() {
        re.setup(), window.document.querySelector(".js-header") && F("all", re.setMainData)
    },
    ce = function() {
        N() || re.handleSparkMenuLoad()
    };
Y({
    onDOMContentLoaded: le,
    onLoad: ce
});
export {
    le as onDOMContentLoaded, ce as onLoad
};
//# sourceMappingURL=http://127.0.0.1:3000/js/header-vanilla-js.esm.156a5d91.js.map