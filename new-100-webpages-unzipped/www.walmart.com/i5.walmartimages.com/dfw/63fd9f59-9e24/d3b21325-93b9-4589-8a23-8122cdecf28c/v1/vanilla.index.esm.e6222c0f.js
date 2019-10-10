import {
    g as e,
    D as t,
    d as o,
    r as n,
    l as a,
    u as r,
    y as u,
    z as d,
    Z as i,
    $ as l,
    W as c,
    M as s,
    k as m,
    f as p,
    a0 as f,
    e as y,
    t as b,
    v as h,
    C as g,
    a as v,
    a1 as M
} from "./vanilla.common-chunks.esm.6e0de5cd.js";
var k = function(a) {
        var r = {};
        return r.dom = e(a, "dom", t.create()), r.backToMainButton = r.dom.querySelector("[data-tl-id=header-GlobalHeaderSparkMenu-backButton]"), r.sparkMainMenu = r.dom.getById("vh-spark-main-menu"), r.sparkSubMenu = r.dom.getById("vh-mobile-spark-submenus"), r.showMainMenu = function() {
            o(r.sparkSubMenu, {
                hidden: !0
            }), n(r.sparkMainMenu, ["hidden"]);
            var e = "[data-sub-depts-nav-target='" + r.backToMainButton.getAttribute("data-back-btn-for-sub-depts") + "']",
                t = document.querySelector(e);
            t && t.focus()
        }, r.hideMainMenu = function() {
            o(r.sparkMainMenu, {
                hidden: !0
            }), n(r.sparkSubMenu, ["hidden"])
        }, r
    },
    C = function(d) {
        var i = {};
        return i.dom = e(d, "dom", t.create()), i.beacon = e(d, "beacon", a("Header")), i.sparkMenuProxy = e(d, "sparkMenuProxy"), i.menu = i.dom.getById("vh-mobile-account-menu-root"), i.trigger = i.dom.getById("vh-mobile-account-button"), i.setup = function() {
            i.menu && i.trigger && (i.bindClickListeners(), i.trigger.addEventListener("click", i.show))
        }, i.bindClickListeners = function() {
            var e = i.dom.querySelector("#header-bubble-links");
            i.menu && e && i.menu.querySelectorAll("a").forEach(function(t) {
                t.setAttribute("data-section-title", t.dataset.tlId), r({
                    dom: i.dom,
                    beacon: i.beacon,
                    moduleInfo: i.dom.getDataAttributes(e, ["module-id", "module-name", "module-published-date", "module-type", "module-version", "module-zone"])
                })(t)
            })
        }, i.show = function() {
            n(i.menu, ["hidden"]), i.sparkMenuProxy && (o(i.sparkMenuProxy.backToMainButton, {
                "aria-describedby": "spark-menu-header-account"
            }), i.sparkMenuProxy.hideMainMenu(), i.sparkMenuProxy.backToMainButton.addEventListener("click", i.hide), i.sparkMenuProxy.backToMainButton.focus()), i.beacon.tagAction(u({
                name: "Account panel"
            }))
        }, i.hide = function() {
            o(i.menu, {
                hidden: !0
            }), i.sparkMenuProxy && (i.sparkMenuProxy.backToMainButton.removeEventListener("click", i.hide), i.sparkMenuProxy.showMainMenu(), n(i.sparkMenuProxy.backToMainButton, ["aria-describedby"]), i.trigger.focus())
        }, i
    },
    B = function(i) {
        var l = {};
        return l.dom = e(i, "dom", t.create()), l.beacon = e(i, "beacon", a("Header")), l.sparkMenuProxy = e(i, "sparkMenuProxy"), l.trigger = l.dom.getById("vh-mobile-location-button"), l.triggerZipCode = l.dom.querySelector("#vh-mobile-location-button .zipCode"), l.menu = l.dom.getById("vh-mobile-location-menu-root"), l.form = d.create({
            beacon: l.beacon,
            isMobile: !0
        }), l.updateButton = l.menu.querySelector("#zipcode-form-submit-button"), l.setup = function() {
            l.form.setup(), l.bindClickListeners(), l.menu && l.trigger && l.trigger.addEventListener("click", l.show), l.triggerZipCode && l.form.postalCode && !l.form.promptForZip && (l.triggerZipCode.innerHTML = l.form.postalCode), l.updateButton && l.updateButton.addEventListener("click", l.form.handleInputSubmit)
        }, l.bindClickListeners = function() {
            var e = l.dom.querySelector("#header-bubble-links");
            l.menu && e && l.menu.querySelectorAll("a").forEach(function(t) {
                t.setAttribute("data-section-title", t.dataset.tlId), r({
                    dom: l.dom,
                    beacon: l.beacon,
                    moduleInfo: l.dom.getDataAttributes(e, ["module-id", "module-name", "module-published-date", "module-type", "module-version", "module-zone"])
                })(t)
            })
        }, l.show = function() {
            n(l.menu, ["hidden"]), l.sparkMenuProxy && (o(l.sparkMenuProxy.backToMainButton, {
                "aria-describedby": "spark-menu-header-location"
            }), l.sparkMenuProxy.hideMainMenu(), l.sparkMenuProxy.backToMainButton.addEventListener("click", l.hide), l.sparkMenuProxy.backToMainButton.focus()), l.beacon.tagAction(u({
                name: "Location Panel"
            }))
        }, l.updateLocation = function() {
            l.form && l.form.refreshLocationData && l.form.refreshLocationData(), l.triggerZipCode && l.form.postalCode && !l.form.promptForZip && (l.triggerZipCode.innerHTML = l.form.postalCode)
        }, l.hide = function() {
            o(l.menu, {
                hidden: !0
            }), l.sparkMenuProxy && (l.sparkMenuProxy.backToMainButton.removeEventListener("click", l.hide), l.sparkMenuProxy.showMainMenu(), n(l.sparkMenuProxy.backToMainButton, ["aria-describedby"]), l.trigger.focus())
        }, l
    },
    I = function(u) {
        var d = {};
        return d.dom = e(u, "dom", t.create()), d.beacon = e(u, "beacon", a("Header")), d.moduleInfo = e(u, "moduleInfo", {}), d.sparkMenuProxy = e(u, "sparkMenuProxy"), d.backToMainButton = d.dom.querySelector("[data-tl-id=header-GlobalHeaderSparkMenu-backButton]"), d.querySelector = function(e) {
            return d.dom.querySelector("#vh-spark-menu " + e)
        }, d.querySelectorAll = function(e) {
            return d.dom.querySelectorAll("#vh-spark-menu " + e)
        }, d.wireBackButton = function(e) {
            if (!(e.length <= 0)) {
                var t = d.querySelectorAll("[data-back-btn-for-sub-depts='" + i(e) + "']");
                t && t.forEach(function(t) {
                    t.addEventListener("click", d.updateDisplayClick = function() {
                        d.updateDisplay(e)
                    })
                })
            }
        }, d.updateDisplay = function(e) {
            e.length > 0 ? (d.displaySubMenuContent(e), o(d.backToMainButton, {
                "data-back-btn-for-sub-depts": e[0]
            }), d.sparkMenuProxy && d.sparkMenuProxy.hideMainMenu()) : (d.hideAllNavs(), d.sparkMenuProxy && d.sparkMenuProxy.showMainMenu())
        }, d.hideAllNavs = function() {
            d.querySelectorAll("[data-sub-depts-nav-id]").forEach(function(e) {
                o(e, {
                    hidden: !0
                })
            })
        }, d.showSubNavGroup = function(e, t) {
            var o = d.querySelector("[data-sub-depts-nav-id=" + e[t] + "]");
            n(o, ["hidden"])
        }, d.showSubNav = function(e) {
            n(d.dom.getById("vh-mobile-department-menu-root"), ["hidden"]), e.forEach(function(t, o) {
                d.showSubNavGroup(e, o)
            })
        }, d.focus = function(e) {
            e && window.setTimeout(function() {
                e.focus()
            }, 50)
        }, d.displaySubMenuContent = function(e) {
            var t = e.length - 1;
            if (d.hideAllNavs(), d.showSubNav([i(e)]), t < 1) d.focus(d.dom.querySelector("[data-tl-id=header-GlobalHeaderSparkMenu-backButton]"));
            else {
                var o = "[data-sub-depts-nav-id='" + e[t] + "'] > div",
                    n = document.querySelector(o);
                d.focus(n)
            }
            if (e[e.length - 2], 1 === e.length) {
                var a = d.querySelector("[data-sub-depts-nav-id=" + e[e.length - 1] + "]");
                if (a) var r = d.dom.getDataAttributes(a, ["parent-dept-uid", "parent-dept-name", "parent-dept-asset-id"]);
                d.beacon.tagAction(l({
                    moduleId: d.moduleInfo.moduleId,
                    moduleType: d.moduleInfo.moduleType,
                    moduleName: d.moduleInfo.moduleName,
                    moduleVersion: d.moduleInfo.moduleVersion,
                    modulePublishedDate: d.moduleInfo.modulePublishedDate,
                    moduleZone: d.moduleInfo.moduleZone,
                    departmentUid: r.parentDeptUid,
                    departmentName: r.parentDeptName,
                    departmentAssetId: r.parentDeptAssetId
                }))
            }
        }, d.wireDepartmentsButtons = function(e) {
            var t = e.length + 1,
                o = [];
            e.length > 0 && (o = o.concat(e.map(function(e) {
                return "." + e
            }))), o.push("[data-dept-id=dept-nav-btn-lvl-" + t + "]"), d.querySelectorAll(o.join(" ")).forEach(function(t) {
                if (t) {
                    var o = e.concat([t.getAttribute("data-sub-depts-nav-target")]);
                    t.addEventListener("click", function() {
                        d.updateDisplay(o)
                    }), d.wireBackButton(o), d.wireDepartmentsButtons(o)
                }
            })
        }, d.setup = function() {
            var e = d.dom.querySelector("[data-tl-id=header-GlobalHeaderSparkMenu-backButton]");
            e && e.addEventListener("click", function() {
                d.updateDisplay([])
            }), d.wireDepartmentsButtons([]);
            var t = r({
                dom: d.dom,
                beacon: d.beacon,
                moduleInfo: d.moduleInfo
            });
            d.dom.querySelectorAll("#vh-mobile-department-menu-root a").forEach(function(e) {
                if (e.dataset.uid.match(/-DEPT-\d+/g)) {
                    var o = e.dataset.uid.replace(/-CAT-\d+/g, "");
                    e.setAttribute("data-section-title", d.dom.querySelector("[data-uid=" + o + "]").innerText)
                }
                t(e)
            }), d.dom.querySelectorAll("[data-tl-id=GlobalHeaderDepartmentsMenu-allLink]").forEach(t)
        }, d
    },
    T = function(u) {
        var d = {},
            b = !1;
        return d.dom = e(u, "dom", t.create()), d.beacon = e(u, "beacon", a("Header")), d.moduleInfo = e(u, "moduleInfo", {}), d.buttonsWrapper = d.dom.getById("vh-department-menu"), d.flyoutsWrapper = d.dom.getById("spark-menu-department-flyout"), d.allLinks = d.flyoutsWrapper.querySelectorAll("a"), d.setup = function() {
            d.buttonsWrapper.addEventListener("click", d.handleCategoryActivate), d.flyoutsWrapper.addEventListener("mouseleave", d.hideCategoryMenu), d.buttonsWrapper.addEventListener("mouseleave", d.handleCategoryMouseLeave), d.buttonsWrapper.addEventListener("mouseover", d.handleCategoryActivate), d.buttonsWrapper.addEventListener("touchstart", d.handleCategoryActivate), d.buttonsWrapper.addEventListener("keydown", d.handleKeydown);
            var e = r({
                dom: d.dom,
                beacon: d.beacon,
                moduleInfo: d.moduleInfo
            });
            d.allLinks.forEach(function(t) {
                if (t.dataset.uid.match(/-DEPT-\d+/g)) {
                    var o = t.dataset.uid.replace(/-CAT-\d+/g, "");
                    t.setAttribute("data-section-title", d.dom.querySelector("[data-uid=" + o + "]").innerText)
                }
                e(t)
            }), d.dom.querySelectorAll("[data-tl-id=GlobalHeaderDepartmentsMenu-allLink]").forEach(e), c.getDefaultInstance().onMeasuredResize(function(e) {
                s.isBreakpointBelow(e.breakpoint, "large") && d.activeCategory && d.hideCategoryMenu()
            })
        }, d.handleKeydown = function(e) {
            b = e.keyCode === m.SPACE || e.keyCode === m.ENTER
        }, d.handleCategoryActivate = function(e) {
            if ("touchstart" === e.type && (e.preventDefault(), e.stopPropagation(), e.target.focus()), [].slice.call(d.buttonsWrapper.children).indexOf(e.target) >= 0 >= 0) {
                var t = d.dom.getById(e.target.getAttribute("data-sub-depts-nav-target")),
                    o = d.activeCategory && d.activeCategory !== t,
                    n = d.activeCategory && !o;
                (o || "click" === e.type && n && b || "touchstart" === e.type && n) && (d.hideCategoryMenu(), b = !1), n || d.showCategoryMenu(t, e.target)
            }
        }, d.handleFlyoutFocusChange = function(e) {
            if (d.activeCategoryButton) {
                e.stopPropagation();
                var t = p(e.currentTarget),
                    o = t.indexOf(e.relatedTarget) < 0;
                if (e.target === f(t) && o) d.activeCategoryButton.focus();
                else if (e.target === i(t) && o) {
                    var n = d.activeCategoryButton.nextSibling;
                    if (n) n.focus();
                    else {
                        var a = d.dom.getById("vh-spark-main-menu"),
                            r = p(a),
                            u = r.indexOf(d.activeCategoryButton);
                        u >= 0 && u < r.length - 1 && r[u + 1].focus()
                    }
                    d.hideCategoryMenu()
                }
            }
        }, d.handleCategoryFocusChange = function(e) {
            if (d.activeCategory) {
                var t = p(d.buttonsWrapper),
                    o = e.relatedTarget === e.target.nextSibling,
                    n = e.target === i(t) && t.indexOf(e.relatedTarget) < 0;
                if (o || n) {
                    var a = p(d.activeCategory);
                    a.length && (e.stopPropagation(), f(a).focus()), d.removeEscHandler && (d.removeEscHandler(), d.removeEscHandler = null), d.removeEscHandler = y(d.flyoutsWrapper, function() {
                        d.activeCategoryButton.focus(), d.hideCategoryMenu()
                    })
                } else {
                    var r = p(d.dom.getById("vh-spark-main-menu")),
                        u = r.indexOf(d.activeCategoryButton);
                    r[u - 1] === e.relatedTarget && d.hideCategoryMenu()
                }
            }
        }, d.handleCategoryMouseLeave = function(e) {
            e.relatedTarget && "vh-spark-main-menu" !== e.relatedTarget.id && "spark-menu-department-flyout" !== e.relatedTarget.id && e.relatedTarget.firstElementChild && "header-spark-menu-content" !== e.relatedTarget.firstElementChild.id && d.hideCategoryMenu()
        }, d.hideCategoryMenu = function(e) {
            e && e.relatedTarget && ("vh-spark-main-menu" === e.relatedTarget.id || e.relatedTarget.firstElementChild && "header-spark-menu-content" === e.relatedTarget.firstElementChild.id) || (d.activeCategoryButton && (o(d.activeCategoryButton, {
                "aria-expanded": !1
            }), d.activeCategoryButton.removeEventListener("focusout", d.handleCategoryFocusChange), d.activeCategoryButton = null), d.removeEscHandler && (d.removeEscHandler(), d.removeEscHandler = null), d.activeCategory && (o(d.activeCategory, {
                hidden: !0
            }), d.activeCategory.removeEventListener("focusout", d.handleFlyoutFocusChange), d.activeCategory = null), o(d.flyoutsWrapper, {
                hidden: !0
            }))
        }, d.setMenuPosition = function() {
            if (d.activeCategoryButton && d.flyoutsWrapper) {
                var e = d.activeCategoryButton.getBoundingClientRect().top,
                    t = d.flyoutsWrapper.getBoundingClientRect().height,
                    o = t / 2,
                    n = d.dom.getWindow().innerHeight - t,
                    a = Math.min(Math.max(0, e - o), n);
                d.flyoutsWrapper.style.top = a + "px"
            }
        }, d.showCategoryMenu = function(e, t) {
            d.activeCategory = e, d.activeCategoryButton = t, t && (o(t, {
                "aria-expanded": !0
            }), t.addEventListener("focusout", d.handleCategoryFocusChange)), n(e, ["hidden"]), n(d.flyoutsWrapper, ["hidden"]), d.setMenuPosition(), d.removeEscHandler = y(d.buttonsWrapper, d.hideCategoryMenu), e.addEventListener("focusout", d.handleFlyoutFocusChange);
            var a = d.dom.getDataAttributes(e, ["parent-dept-uid", "parent-dept-name", "parent-dept-asset-id"]);
            d.beacon.tagAction(l({
                moduleId: d.moduleInfo.moduleId,
                moduleType: d.moduleInfo.moduleType,
                moduleName: d.moduleInfo.moduleName,
                moduleVersion: d.moduleInfo.moduleVersion,
                modulePublishedDate: d.moduleInfo.modulePublishedDate,
                moduleZone: d.moduleInfo.moduleZone,
                departmentUid: a.parentDeptUid,
                departmentName: a.parentDeptName,
                departmentAssetId: a.parentDeptAssetId
            }))
        }, d
    };
export default {
    create: function(n) {
        var u = {};
        return u.dom = e(n, "dom", t.create()), u.beacon = e(n, "beacon", a("Header")), u.onClose = e(n, "onClose", function() {}), u.onReady = e(n, "onReady", function() {}), u.moduleInfo = {}, u.fetchTemplate = "mobile", u.embedBubbleMenus = !0, u.rootEl = u.dom.getById("header-spark-menu-content"), u.globalHeaderWrapper = u.dom.querySelector(".js-global-header-wrapper"), u.isExternal = !1, u.url = "/globalnav/api/render/spark-menu/", u.globalHeaderWrapper && (u.isExternal = "true" === u.globalHeaderWrapper.getAttribute("data-is-external"), u.isExternal && (u.url = "https://www.walmart.com" + u.url)), u.menuContentReady = b.create(), u.setUseMobileTemplate = function(e) {
            u.fetchTemplate = e ? "mobile" : "desktop"
        }, u.setEmbedBubbleMenus = function(e) {
            u.embedBubbleMenus = e
        }, u.addUserNameToAccountMenu = function() {
            var e = h();
            if ("mobile" === u.fetchTemplate && e) {
                var t = u.container.querySelector("#vh-mobile-account-button-label"),
                    n = u.container.querySelector("[data-tl-id='header-account-menu-title']");
                if (t && e.fullName) {
                    var a = "Account, " + e.fullName;
                    t.innerHTML = e.fullName, o(t, {
                        "aria-label": a
                    })
                }
                n && e.fullName && (n.innerHTML = e.fullName)
            }
        }, u.init = function(e) {
            if (u.rootEl.innerHTML = e.sparkMenu, u.container = u.rootEl.querySelector("#vh-spark-menu"), "mobile" === u.fetchTemplate)
                if (e.accountMenu && (u.dom.getById("vh-mobile-account-menu-root").innerHTML = e.accountMenu), e.locationMenu && (u.dom.getById("vh-mobile-location-menu-root").innerHTML = e.locationMenu), e.sparkMenuDepartmentsSubNav && (u.dom.getById("vh-mobile-department-menu-root").innerHTML = e.sparkMenuDepartmentsSubNav), u.addUserNameToAccountMenu(), "1" === g.get("hasCID")) {
                    var t = u.container.querySelector("#vh-mobile-account-menu-root").querySelector("#signed-out");
                    t && t.remove()
                } else {
                    var o = u.container.querySelector("#vh-mobile-account-menu-root").querySelector("#signed-in");
                    o && o.remove()
                }
            else e.sparkMenuDepartmentsFlyout && (u.menuContainer = u.dom.getById("header-spark-menu"), v("vh-menu-bg", u.menuContainer).innerHTML = e.sparkMenuDepartmentsFlyout);
            u.setup(), u.onReady(), u.menuContentReady.resolve()
        }, u.setup = function() {
            u.moduleInfo = u.dom.getDataAttributes(u.container, ["module-id", "module-type", "module-name", "module-version", "module-published-date", "module-zone"]);
            var e = u.dom.getById("spark-menu-close-button");
            e && e.addEventListener("click", u.onClose);
            var t = k();
            u.embedBubbleMenus ? (u.accountMenu = C({
                sparkMenuProxy: t
            }), u.accountMenu.setup(), u.locationMenu = B({
                sparkMenuProxy: t
            }), u.locationMenu.setup()) : (u.accountMenu = null, u.locationMenu = null), "mobile" === u.fetchTemplate ? (u.departmentFlyouts = null, u.departmentTree = I({
                moduleInfo: u.moduleInfo,
                sparkMenuProxy: t
            }), u.departmentTree.setup()) : (u.departmentTree = null, u.departmentFlyouts = T({
                moduleInfo: u.moduleInfo
            }), u.departmentFlyouts.setup());
            var o = r({
                dom: u.dom,
                beacon: u.beacon,
                moduleInfo: u.moduleInfo
            });
            [].slice.call(u.dom.querySelectorAll("[data-tl-id^=header-GlobalHeaderSparkMenu-optionalTopLinks]")).concat([].slice.call(u.dom.querySelectorAll("[data-tl-id^=header-GlobalHeaderSparkMenu-optionalBottomLinks]"))).forEach(function(e) {
                e.setAttribute("data-section-title", "Header"), o(e)
            })
        }, u.show = function() {
            u.menuContentReady.then(function() {
                u.locationMenu && u.locationMenu.updateLocation(), u.beacon.addData([
                    ["li", "dummyLinkKey", {
                        lc: 0,
                        pi: 0
                    }]
                ]).tagAction(M({
                    moduleId: u.moduleInfo.moduleId,
                    moduleType: u.moduleInfo.moduleType,
                    moduleVersion: u.moduleInfo.moduleVersion,
                    modulePublishedDate: u.moduleInfo.modulePublishedDate
                }))
            })
        }, u.hide = function() {
            u.departmentFlyouts && u.departmentFlyouts.hideCategoryMenu(), u.accountMenu && u.accountMenu.hide(), u.locationMenu && u.locationMenu.hide(), u.departmentTree && u.departmentTree.updateDisplay([])
        }, u
    }
};
//# sourceMappingURL=http://127.0.0.1:3000/js/vanilla.index.esm.e6222c0f.js.map