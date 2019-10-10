import {
    a5 as e,
    a6 as t,
    a7 as i,
    a8 as a,
    a9 as o,
    aa as n,
    ab as r,
    _ as s,
    S as l,
    b as p,
    g as d,
    D as h,
    l as c,
    ac as g,
    ad as u,
    ae as m,
    a as f,
    a2 as b,
    k as v,
    af as T,
    ag as y,
    a4 as k,
    C,
    ah as D,
    U as W,
    a3 as w,
    ai as x,
    A as M
} from "./vanilla.common-chunks.esm.6e0de5cd.js";
var A = function(t) {
        var i = t - Date.now(),
            a = i > 0 ? Math.floor(i / e.hoursInMs) : 0,
            o = i > 0 ? Math.floor(i % e.hoursInMs / e.minutesInMs) : 0,
            n = o > 1 ? "mins" : "min";
        return a ? a + " " + (a > 1 ? "hrs" : "hr") + " " + o + " " + n : o + " " + n
    },
    I = function(l) {
        var p, d = parseInt(l.cutoffTime) * e.secondsInMs,
            h = parseInt(l.targetDate) * e.secondsInMs,
            c = {},
            g = t(d, h);
        switch (g) {
            case i:
                c.status = g, c.text = "It's past time for NextDay delivery by tomorrow.", c.link = "Refresh";
                break;
            case a:
                var u = o(d) + " on " + n(d),
                    m = n(h),
                    f = o(d);
                c.status = g, c.cutOffTimeStr = u, c.promiseDateStr = m, c.cutOffTime = f, c.text = "It's past time for NextDay delivery. Get it <strong>" + m + "</strong>. ";
                break;
            case r:
                var b = A(d);
                c.status = g, c.cutOffTimeStr = b, c.text = "Order in <strong>" + A(d) + "</strong> for <strong>NextDay delivery</strong>. ";
                break;
            default:
                c.status = g, c.text = "We're having trouble loading the delivery date.", c.link = "Refresh"
        }
        return p = c, "object" === s(window.postal) && "function" == typeof window.postal.publish && window.postal.publish({
            channel: "header",
            topic: "NDTicker",
            data: p
        }), c
    },
    L = "az_n",
    E = "az_k",
    S = function(e) {
        var t = l.get("GlobalHeader-NextDayToggleTooltipShown");
        try {
            t = JSON.parse(t) || {}
        } catch (e) {
            t = {}
        }
        var i = p().basePath;
        if (t[i]) return {
            init: function() {}
        };
        var a = {},
            o = function() {
                a.tooltip && a.tooltip.parentNode && a.tooltip.parentNode.removeChild(a.tooltip)
            };
        return a.dom = d(e, "dom", h.create()), a.beacon = d(e, "beacon", c("Header")), a.container = a.dom.getById("next-day-tooltip-root"), a.pageWrapper = a.dom.querySelector(".page-full-wrapper") || a.dom.querySelector(".js-footer"), a.init = function(e, o) {
            if (e.enabled) {
                a.tooltip = a.dom.createElement("div"), a.tooltip.innerHTML = e.nextDayTooltip;
                var n = a.tooltip.querySelector("[data-tl-id=header-next-day-tooltip]");
                if (n.innerHTML = o ? e.toggleOnText : e.toggleOffText, a.container) {
                    a.beacon.tagAction({
                        actionName: "NextDAY_TOOLTIP_SHOWN_FIRSTLOAD",
                        reportingId: "OVERLAY_VIEW",
                        attrs: [
                            ["co", {
                                nm: a.tooltip.innerHTML,
                                st: "impression"
                            }]
                        ]
                    }), a.container.appendChild(a.tooltip), a.setupAutoHide(e.tooltipDuration), t[i] = !0;
                    try {
                        l.set("GlobalHeader-NextDayToggleTooltipShown", JSON.stringify(t))
                    } catch (e) {}
                    a.pageWrapper.addEventListener("click", a.removeNextDayTooltip = a.handleOpenNextDayTooltip)
                }
            }
        }, a.setupAutoHide = function(e) {
            "number" != typeof e || e < 1 || a.dom.getWindow().setTimeout(function() {
                o()
            }, 1e3 * e)
        }, a.handleOpenNextDayTooltip = function() {
            o(), a.pageWrapper.removeEventListener("click", a.removeNextDayTooltip)
        }, a
    },
    B = function(e) {
        var t = {};
        return t.dom = d(e, "dom", h.create()), t.beacon = d(e, "beacon", c("Header")), t.container = t.dom.getById("temp-unavailable-tooltip-root"), t.pageWrapper = t.dom.querySelector(".page-full-wrapper") || t.dom.querySelector(".js-footer"), t.init = function(e) {
            t.tooltip = t.dom.createElement("div"), t.tooltip.setAttribute("hidden", !0), t.tooltip.setAttribute("data-tl-id", "temp-unavailalbe-tooltip-wrapper"), t.tooltip.innerHTML = e.tooltipMarkup, t.tooltip.querySelector("[data-tl-id=header-nd-temp-unavailable-tooltip]").innerHTML = e.tooltipText, t.container && (t.container.appendChild(t.tooltip), t.pageWrapper.addEventListener("click", t.handleOpenNextDayTooltip))
        }, t.toggleTooltip = function() {
            var e = t.tooltip;
            e.hasAttribute("hidden") ? e.removeAttribute("hidden") : e.setAttribute("hidden", !0)
        }, t.handleOpenNextDayTooltip = function(e) {
            "temp-unavailable-info" !== e.target.getAttribute("data-tl-id") && t.tooltip.setAttribute("hidden", !0)
        }, t
    },
    N = {
        location: {
            postalCode: "94066"
        },
        promptForZip: !1
    },
    O = function() {
        try {
            return w.parseLocationData(C.get("location-data"))
        } catch (e) {
            return N
        }
    };
window._ndDataPublish = function(e) {
    window.postal.publish({
        channel: "header",
        topic: "nextDayData",
        data: e
    })
};
export default function() {
    return {
        tries: 0,
        maxTries: 3,
        init: function(t) {
            var o, n, s, w, A = t.onLocationCtaClick,
                N = t.nextDayTooltipData,
                U = t.tempUnavailableTooltipData,
                H = (o = h.create(), n = C.get("nd_sess"), s = x(n), w = M(n), {
                    beacon: c("Header"),
                    setup: function(e, t, i) {
                        this.createElements(), this.addToggle(t), this.addZipCode(e), this.tempUnavailableTooltipData = i, g(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.addMessage(e), this.showToggleBar(e.tempUnavailable)
                        }.bind(this)), u(function() {
                            if (this.zipCodeWrapper) {
                                var e = O();
                                this.zipCodeWrapper.innerHTML = e.location.postalCode
                            }
                        }.bind(this)), m(function(e) {
                            this.changeTypeaheadText(e)
                        }.bind(this)), window._ndData && window._ndDataPublish(window._ndData)
                    },
                    createElements: function() {
                        w && (this.toggleBarWrapper = f("nd-toggle-bar"), this.toggleZipWrapper = f("toggle-zip-wrapper"), this.toggleWrapper = f("nd-switch"), this.zipCodeWrapper = f("nd-zip"), this.tempUnavailableBanner = f("nd-unavailable-banner"), this.tempUnavailableMessage = f("nd-unavailable-banner-content"), this.tempUnavailableCloseBtn = f("nd-close-btn"), this.tempUnavailableInfo = f("temp-unavailable-info")), s && (this.ndMessageWrapperContainer = f("nd-message-wrapper"), this.messageWrapper = f("nd-message"), this.messageLink = f("message-link"), this.timerIcon = f("timer-icon"), this.infoModal = f("next-day-info-modal"), this.infoCloseButton = f("info-close-button"), this.infoCloseButtonMobile = f("info-close-button-mobile"))
                    },
                    addToggle: function(e) {
                        if (this.toggleWrapper) {
                            var t = p().basePath,
                                i = o.createElement("input"),
                                a = o.createElement("label"),
                                n = o.createElement("div");
                            n.setAttribute("id", "next-day-tooltip-root"), i.setAttribute("aria-hidden", "true"), i.setAttribute("type", "checkbox"), s && i.setAttribute("checked", s), i.setAttribute("id", "nd-toggle"), a.setAttribute("for", "nd-toggle"), o.addClass(i, "nd-toggle"), o.addClass(a, "label-nd-toggle"), this.switch = i, this.switch.onclick = function(e) {
                                e.stopPropagation()
                            }, this.toggleWrapper.setAttribute("tabIndex", "0"), this.toggleWrapper.onclick = function() {
                                this.toggleWrapper.style.pointerEvents = "none";
                                var e = {
                                    link: {
                                        location: "top",
                                        name: s ? "toggle_off" : "toggle_on"
                                    },
                                    pageTitle: t
                                };
                                this.beacon.tagAction(b(e)), setTimeout(this.toggleOnClick, 500)
                            }.bind(this), this.toggleWrapper.onkeypress = function(e) {
                                e.keyCode !== v.ENTER && e.keyCode !== v.SPACE || (e.preventDefault(), this.switch.click(), this.toggleWrapper.click())
                            }.bind(this), this.toggleWrapper.appendChild(i), this.toggleWrapper.appendChild(a), this.toggleWrapper.appendChild(n), "Home" !== t && "NextDayDelivery" !== t || (this.nextDayTooltip = S(), this.nextDayTooltip.init(e, s))
                        }
                    },
                    toggleOnClick: function() {
                        var e = p();
                        if ("Search" === e || "Deals" === e) {
                            var t = this.window.location.href.replace(/page=[0-9]*/gi, "");
                            history.replaceState({}, this.window.location.href, t)
                        }
                        T({
                            key: "nd_en",
                            value: !s,
                            redirect: !0
                        })
                    },
                    addZipCode: function(e) {
                        if (this.zipCodeWrapper) {
                            var t = O();
                            this.zipCodeWrapper.innerHTML = t.location.postalCode, this.zipCodeWrapper.onclick = e
                        }
                    },
                    addMessage: function(t) {
                        var o = function() {
                            var e = I(t);
                            if (this.messageWrapper && (this.messageWrapper.innerHTML = e.text + " ", this.messageLink && (e.status === i || e.status === y ? (this.messageWrapper.appendChild(this.messageLink), this.messageLink.removeAttribute("hidden"), this.messageLink.innerHTML = e.link, this.messageLink.onclick = this.linkOnClick, this.messageLink.onkeypress = function(e) {
                                    e.keyCode !== v.ENTER && e.keyCode !== v.SPACE || (e.preventDefault(), this.messageLink.click())
                                }.bind(this)) : this.messageLink.setAttribute("hidden", "hidden")), this.timerIcon))
                                if (this.status = e.status, (window.innerWidth || document.documentElement.clientWidth) > 360 && (e.status === r || e.status === a)) {
                                    var o = this.infoModal.querySelector("." + k.bg);
                                    o && o.addEventListener("click", this.closeInfoModal.bind(this)), this.infoCloseButton && this.infoCloseButton.addEventListener("click", this.closeInfoModal.bind(this)), this.infoCloseButtonMobile && this.infoCloseButtonMobile.addEventListener("click", this.closeInfoModal.bind(this)), this.messageWrapper.appendChild(this.timerIcon), this.timerIcon.removeAttribute("hidden"), this.timerIcon.onclick = this.infoOnClick.bind(this), this.timerIcon.onkeypress = function(e) {
                                        e.keyCode !== v.ENTER && e.keyCode !== v.SPACE || (e.preventDefault(), this.timerIcon.click())
                                    }.bind(this)
                                } else this.timerIcon.setAttribute("hidden", "hidden")
                        }.bind(this);
                        o(), setInterval(function() {
                            o()
                        }, e.minutesInMs)
                    },
                    linkOnClick: function() {
                        window.location.reload()
                    },
                    infoOnClick: function() {
                        if (this.infoModal) {
                            var e = {
                                cart: {
                                    em: 0 === parseInt(C.get("cart-count"))
                                },
                                message: "More information about NextDay delivery",
                                postCutoff: this.status === i || this.status === a,
                                pageTitle: p().basePath
                            };
                            this.beacon.tagAction(D(e)), this.infoModal.removeAttribute("hidden")
                        }
                    },
                    closeInfoModal: function() {
                        this.infoModal && this.infoModal.setAttribute("hidden", "hidden")
                    },
                    changeTypeaheadText: function(e) {
                        if (s) {
                            var t = f("header-search-input"),
                                i = e ? "Search NextDay delivery" : "Search";
                            t.placeholder = i, t.setAttribute("aria-label", i);
                            var a = e ? "Search NextDay delivery Category All Departments" : "Search Category All Departments";
                            f("SearchDropdown-toggle").setAttribute("aria-label", a)
                        }
                    },
                    showToggleBar: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = "Product Sellers" === p().basePath;
                        if (w && !t && !1 === e) o.addClass(this.toggleBarWrapper, E), this.changeTypeaheadText(!0);
                        else if (e) {
                            if (l.get("GlobalHeader-TempUnavailableBarClosed")) return void this.toggleBarWrapper.remove();
                            o.addClass(this.toggleBarWrapper, E), o.addClass(this.toggleBarWrapper, L), this.toggleZipWrapper && this.toggleZipWrapper.remove(), this.ndMessageWrapperContainer && this.ndMessageWrapperContainer.remove();
                            var i = d(W, "ccm.header-footer-app.nextDay.tempUnavailableMessage", "");
                            "" !== i && (this.tempUnavailableMessage.innerText = i);
                            var a = o.createElement("div");
                            a.setAttribute("id", "temp-unavailable-tooltip-root"), this.tempUnavailableInfo.appendChild(a), this.ndTempUnavailableInfoTooltip = B(), this.ndTempUnavailableInfoTooltip.init(this.tempUnavailableTooltipData), this.tempUnavailableBanner.removeAttribute("hidden"), this.tempUnavailableInfo.addEventListener("click", this.ndTempUnavailableInfoTooltip.toggleTooltip), this.tempUnavailableCloseBtn && this.tempUnavailableCloseBtn.addEventListener("click", this.hideToggleBar.bind(this))
                        }
                    },
                    hideToggleBar: function() {
                        this.toggleBarWrapper && (this.toggleBarWrapper.remove(), l.set("GlobalHeader-TempUnavailableBarClosed", !0))
                    }
                });
            return H.setup(A, N, U), H
        }
    }
}
//# sourceMappingURL=http://127.0.0.1:3000/js/vanilla.index.esm.2d5799dd.js.map