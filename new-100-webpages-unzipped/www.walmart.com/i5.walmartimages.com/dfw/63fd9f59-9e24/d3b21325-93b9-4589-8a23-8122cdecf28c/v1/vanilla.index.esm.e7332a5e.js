import {
    D as e,
    l as t,
    B as s,
    M as i,
    al as o,
    x as a,
    am as d,
    X as n,
    an as l,
    r,
    F as c,
    e as u,
    T as h,
    d as m,
    g as b,
    U as f,
    V as p,
    C as v,
    ao as g,
    S,
    u as k,
    ap as E
} from "./vanilla.common-chunks.esm.6e0de5cd.js";
var M = "a0_e",
    y = {
        api: "/account/electrode/account/api/subscribe",
        render: function() {
            this.dom = e.create(), this.beacon = t("Footer"), this.bodyScroll = s.getDefaultInstance(), this.getElements(), this.handleSubmit = this.handleSubmit.bind(this), this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this), this.handleSubmitError = this.handleSubmitError.bind(this), this.handleModalClose = this.handleModalClose.bind(this), this.screenWidth = this.dom.getWindow().innerWidth, this.isMobile = "small" === i.getBreakpoint(this.screenWidth) || !1, this.input && (this.isMobile && (this.input.placeholder = "Email address"), this.input.addEventListener("change", this.removeErrorAttributes)), this.form && this.form.addEventListener("submit", this.handleSubmit)
        },
        getElements: function() {
            this.button = this.dom.getById("vf-email-signup-btn"), this.errorWrapper = this.dom.getById("vf-email-input-error"), this.form = this.dom.getById("vf-email-signup-form"), this.input = this.dom.getById("vf-email-input"), this.modal = this.dom.getById("vf-email-modal"), this.modalClose = this.dom.getById("vf-email-close-btn"), this.modalMobileClose = this.dom.getById("vf-email-m-close-btn"), this.modalEmail = this.dom.getById("vf-email-modal-email-id"), this.animatedField = o.create(this.input), this.template = this.dom.querySelector(".js-footer")
        },
        handleSubmit: function(e) {
            e.preventDefault(), this.email = this.input.value, this.hideError();
            var t = a(this.template, this.api);
            d.validate(this.email) ? (this.input.disabled = !0, n.fetch(t + "?email=" + this.email, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                format: "json",
                onSuccess: this.handleSubmitSuccess,
                onError: this.handleSubmitError
            })) : this.showError()
        },
        handleSubmitSuccess: function() {
            this.hideError(), this.showModal(), this.input.value = "", this.input.disabled = !1;
            var e = this.dom.getDataAttributes(this.form, ["campaign-id"]);
            this.beacon.tagAction(l({
                campaignId: e.campaignId
            }))
        },
        handleSubmitError: function() {
            this.showError(), this.input.disabled = !1
        },
        showModal: function() {
            r(this.modal, ["hidden"]), this.modalEmail.innerHTML = this.email, this.modalClose.addEventListener("click", this.handleModalClose), this.modalMobileClose.addEventListener("click", this.handleModalClose), this.focusTrap = c.create(this.modal.querySelector("[role=dialog]")), this.bodyScroll.lock(), this.removeEscHandler = u(this.dom.getDocument(), this.handleModalClose), this.removeCloseOnDialogModal = h(this.handleModalClose)
        },
        handleModalClose: function() {
            this.focusTrap(), this.modalMobileClose.removeEventListener("click", this.handleModalClose), m(this.modal, {
                hidden: "hidden"
            }), this.button.focus(), this.bodyScroll.unlock(), this.removeEscHandler && (this.removeEscHandler(), this.removeEscHandler = null), this.removeCloseOnDialogModal()
        },
        showError: function() {
            this.input.focus(), this.animatedField.showError(), this.dom.addClass(this.input, M), r(this.errorWrapper, ["hidden"]), m(this.errorWrapper, {
                role: "alert"
            }), m(this.input, {
                "aria-invalid": !0
            })
        },
        removeErrorAttributes: function() {
            r(this.input, ["aria-invalid"]), r(this.errorWrapper, ["role"])
        },
        hideError: function() {
            this.animatedField.hideError(), this.dom.removeClass(this.input, M), m(this.errorWrapper, {
                hidden: "hidden"
            }), this.removeErrorAttributes()
        }
    },
    I = "ag_c",
    B = {
        xs: "16px",
        l: "40px",
        base: "a6_a",
        appLink: "a6_b",
        socialLink: "a6_c",
        appLinkLabel: "a6_e"
    };
var C = "a5_e",
    L = "a5_f";
export default {
    create: function(o) {
        var d = {};
        return d.dom = b(o, "dom", e.create()), d.beacon = b(o, "beacon", t("Footer")), d.screenWidth = d.dom.getWindow().innerWidth, d.isMobile = "small" === i.getBreakpoint(d.screenWidth) || "medium" === i.getBreakpoint(d.screenWidth) || !1, d.FEEDBACK_COLLAPSED_SESSION_KEY = "isFeedbackTabCollapsed", d.isFeedbackTabCollapsed = S.get(d.FEEDBACK_COLLAPSED_SESSION_KEY), d.footerWrapper = d.dom.getById("js-global-footer-wrapper") || d.dom.querySelector(".js-footer"), d.setupFooterLinksAnalytics = function() {
            d.dom.querySelectorAll(".vf-footer-links-list").forEach(function(e) {
                var t = d.dom.getDataAttributes(e, ["module-id", "module-type", "module-version", "module-published-date", "module-name", "module-zone"]),
                    s = k({
                        dom: d.dom,
                        beacon: d.beacon,
                        moduleInfo: t
                    });
                e.querySelectorAll(".vf-footer-link").forEach(function(e) {
                    if (e.dataset.tlId) {
                        var t = e.dataset.tlId.replace(/-link-\d\-+/g, "");
                        e.setAttribute("data-section-title", "Footer - " + d.dom.querySelector("[data-tl-id=" + t + "]").innerText)
                    }
                    s(e)
                })
            })
        }, d.setUpSisterBrandsAnalytics = function() {
            d.dom.getById("vf-sister-brands-links-list").addEventListener("click", function(e) {
                var t = e.target.parentNode;
                d.beacon.tagAction(E({
                    uid: t.getAttribute("data-uid"),
                    name: t.getAttribute("title")
                }))
            })
        }, d.loadSisterBrandImages = function() {
            var e = d.dom.querySelectorAll("." + C);
            e && d.dom.getWindow().addEventListener("scroll", function t() {
                d.dom.getWindow().removeEventListener("scroll", t), e.forEach(function(e) {
                    var t = d.dom.getDataAttributes(e, ["src"]);
                    m(e, t), d.dom.removeClass(e, L)
                })
            })
        }, d.render = function() {
            d.footerWrapper && (y.render(), function() {
                var t = {
                    feedbackText: null,
                    surveyType: null,
                    render: function() {
                        t.dom = e.create(), t.getElements(), t.bodyScroll = s.getDefaultInstance(), t.button && t.button.addEventListener("click", t.showInputModal)
                    },
                    getElements: function() {
                        t.button = t.dom.getById("vf-feedback-fixed-link"), t.cancelButton = t.dom.getById("vf-feedback-modal-cancel"), t.closeButton = t.dom.getById("vf-feedback-close-btn"), t.inputModal = t.dom.getById("vf-feedback-modal"), t.issueSelect = t.dom.getById("vf-feedback-issue-select"), t.issueTextareaLabel = t.dom.getById("vf-feedback-comments-lbl"), t.issueTextarea = t.dom.getById("vf-feedback-comments"), t.mobileCloseButton = t.dom.getById("vf-feedback-m-close-btn"), t.submitButton = t.dom.getById("vf-feedback-modal-submit"), t.successModal = t.dom.getById("vf-feedback-success-modal"), t.successModalClose = t.dom.getById("vf-feedback-success-close-btn"), t.successModalMobileClose = t.dom.getById("vf-feedback-success-m-close-btn"), t.successModalOK = t.dom.getById("vf-feedback-success-modal-ok"), t.template = t.dom.querySelector(".js-footer"), t.issueSelect.addEventListener("change", function() {
                            t.surveyID = t.issueSelect.value, "d4CXZvBO" === t.surveyID ? (t.surveyType = "Website", t.enableFields()) : "Is0Dnegk" === t.surveyID ? (t.surveyType = "Store", t.enableFields()) : t.disableFields()
                        }), t.issueTextarea.addEventListener("change", function() {
                            t.feedbackText = t.issueTextarea.value
                        })
                    },
                    showInputModal: function(e) {
                        e.preventDefault(), e.stopPropagation(), t.removeEscHandler = u(t.inputModal, t.hideInputModal), t.bodyScroll.lock(), t.inputModal.removeAttribute("hidden"), t.focusTrap = c.create(t.inputModal.querySelector("[role=dialog]")), t.cancelButton.addEventListener("click", t.handleCancel), t.closeButton.addEventListener("click", t.hideInputModal), t.mobileCloseButton.addEventListener("click", t.hideInputModal), t.submitButton.addEventListener("click", t.handleSubmit), t.removeCloseOnDialogModal = h(t.hideInputModal)
                    },
                    hideInputModal: function() {
                        t.focusTrap(), t.removeEscHandler(), t.bodyScroll.unlock(), t.closeButton.removeEventListener("click", t.hideInputModal), t.mobileCloseButton.removeEventListener("click", t.hideInputModal), t.inputModal.setAttribute("hidden", "hidden"), t.resetFields(), t.removeCloseOnDialogModal()
                    },
                    showSuccessModal: function() {
                        t.successModal.removeAttribute("hidden"), t.successModalFocusTrap = c.create(t.successModal.querySelector("[role=dialog]")), t.successModalClose && t.successModalClose.addEventListener("click", t.hideSuccessModal), t.successModalMobileClose && t.successModalMobileClose.addEventListener("click", t.hideSuccessModal), t.successModalOK && t.successModalOK.addEventListener("click", t.hideSuccessModal)
                    },
                    hideSuccessModal: function(e) {
                        e.preventDefault(), t.successModal.setAttribute("hidden", "hidden"), t.successModalClose.removeEventListener("click", t.hideSuccessModal), t.successModalMobileClose.removeEventListener("click", t.hideSuccessModal), t.successModalOK.removeEventListener("click", t.hideSuccessModal), "function" == typeof t.successModalFocusTrap && t.successModalFocusTrap()
                    },
                    handleCancel: function() {
                        t.hideInputModal(), t.cancelButton.removeEventListener("click", t.handleCancel)
                    },
                    enableFields: function() {
                        t.submitButton.disabled = !1, t.issueTextarea.disabled = !1, t.dom.removeClass(t.issueTextareaLabel, I)
                    },
                    disableFields: function() {
                        t.submitButton.disabled = !0, t.issueTextarea.disabled = !0, t.dom.addClass(t.issueTextareaLabel, I)
                    },
                    resetFields: function() {
                        t.issueSelect.value = "", t.issueTextarea.value = "", t.surveyID = null, t.feedbackText = null, t.disableFields()
                    },
                    handleSubmit: function(e) {
                        e.preventDefault();
                        var s = b(f, "ccm.header-footer-app.feedbackApi.fixedFeedbackSubmitUrl", "/customer-survey/submit");
                        if (null !== (s = a(t.template, s))) {
                            var i = {
                                    payload: {
                                        comment: t.feedbackText,
                                        context: p("footerLink"),
                                        pageType: "globalpage",
                                        submitDate: new Date,
                                        survey: {
                                            "Where is the issue?": t.surveyType
                                        },
                                        surveyId: "1ef1959e-f7e8-4065-85fa-266f9e872ee8"
                                    }
                                },
                                o = v.get("vtc");
                            o && "" !== o && (i.payload.visitorId = o), n.fetch(s, {
                                method: "POST",
                                format: "json",
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json"
                                },
                                body: JSON.stringify(i),
                                onSuccess: t.handleSubmitSuccess,
                                onError: t.handleSubmitError
                            })
                        } else t.handleSubmitError()
                    },
                    handleSubmitSuccess: function() {
                        t.submitButton.removeEventListener("click", t.handleSubmit), t.hideInputModal(), t.showSuccessModal()
                    },
                    handleSubmitError: function() {
                        t.submitButton.removeEventListener("click", t.handleSubmit), t.hideInputModal()
                    }
                };
                return t
            }().render(), function(s) {
                var i = {
                    beacon: (s = Object.assign({}, {
                        beacon: t("Footer")
                    }, s)).beacon
                };
                return i.dom = e.create(), i.links = i.dom.querySelectorAll(".".concat(B.socialLink)), i.setupBeaconClickHandler = function(e) {
                    e.addEventListener("click", i.handleLinkClicks.bind(this, e))
                }, i.handleLinkClicks = function(e) {
                    i.beacon.tagAction(g({
                        uid: e.getAttribute("data-uid"),
                        name: e.getAttribute("title")
                    }))
                }, i.setupAnalytics = function() {
                    i.links.forEach(i.setupBeaconClickHandler)
                }, i
            }().setupAnalytics(), d.setupFooterLinksAnalytics(), d.setUpSisterBrandsAnalytics(), d.loadSisterBrandImages(), d.isFeedbackTabCollapsed && d.isMobile && d.dom.getById("vf-feedback-tab-text").remove())
        }, d
    }
};
//# sourceMappingURL=http://127.0.0.1:3000/js/vanilla.index.esm.e7332a5e.js.map