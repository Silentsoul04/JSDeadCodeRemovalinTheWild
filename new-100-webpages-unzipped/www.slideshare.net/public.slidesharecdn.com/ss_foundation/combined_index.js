function ModalShare(e) {
    this.config = e, e && this.init()
}

function ListPageModalShare(e) {
    this.config = e, e && this.init()
}

function MobileModalShare(e) {
    this.config = e, this.shareTracker = new slideshare_object.ShareTracker, this.init()
}
ModalShare.prototype.init = function() {
        this.$container = $(this.config.el), this.$shareBtn = $(this.config.btnShare), this.$shareEmailMsg = this.$container.find(".j-share-email-msg"), this.$addMsgButton = this.$container.find(".j-add-msg"), this.$emailSentButton = this.$container.find(".j-email-sent"), this.$shareEmailSend = this.$container.find("#share-email-send"), this.$shareEmailForm = this.$container.find(".j-share-email-form"), this.$linkURLInput = this.$container.find(".j-share-link-url"), this.$close = this.$container.find(".j-modal-close"), this.$contentWrapper = this.$container.find(".modal-content-wrapper"), this.gaTrackCategory = this.$container.data("ga-track-category"), this.gaTrackAction = this.$container.data("ga-track-action"), this.shareTracker = new slideshare_object.ShareTracker, this.createShareHash(), slideshare_object && slideshare_object.user && slideshare_object.user.loggedin === !0 && null !== slideshare_object.user.login && this.$container.find(".j-share-email-name").val(slideshare_object.user.login), this.bindModalToShareButtons(), this.bindModalEvents(), this.bindCustomModalEvents(), this.adjustShareModalTop()
    }, ModalShare.prototype.get_viral_share_url = function(e) {
        $elem = $("li." + e + " a");
        var t = this.data.ssLink;
        return $elem.length > 0 && (t = $.param($elem.data()), !t && (t = this.data.ssLink)), this.SHARE_HASH[e] + t
    }, ModalShare.prototype.get_viral_share_urls = function() {
        return {
            facebook: this.get_viral_share_url("facebook"),
            linkedin: this.get_viral_share_url("linkedin"),
            twitter: this.get_viral_share_url("twitter"),
            wordpress: this.get_viral_share_url("wordpress"),
            pinterest: this.get_viral_share_url("pinterest")
        }
    }, ModalShare.prototype.sharePopup = function(e) {
        var t = 626,
            a = 436,
            i = this.data.social[e];
        if (void 0 !== i) {
            if ("facebook" === e) {
                if (window.FB) return void this.postToFacebook()
            } else if ("linkedin" === e && window.IN && window.IN.UI) return IN.UI.Share().params({
                url: this.data.ssLink
            }).place(), void this.saveShare(e);
            window.open(i, "shareDialog", "width=" + t + ",height=" + a), this.saveShare(e)
        }
    }, ModalShare.prototype.show = function() {
        this.reset(), this.$container.show(), this.shareGATracking("modalOpen")
    }, ModalShare.prototype.close = function() {
        this.reset(), this.$container.hide()
    }, ModalShare.prototype.reset = function() {
        this.$container.find(".j-embed-use-ssl-cbox").prop("checked", !1), $(".j-modal-popup").scrollTop(0), this.clearEmailFields(), this.$shareEmailForm.show(), this.$emailSentButton.hide(), this.collapseAllSections()
    }, ModalShare.prototype.updateEmbed = function() {
        var e = this.$container.find(".j-share-embed-link"),
            t = e.val(),
            a = this.$container.find(".j-embed-size-picker").val(),
            i = this.$container.find(".j-embed-size-picker :selected").data("width") || this.config.embed_sizes.presets[a].size.width,
            o = this.$container.find(".j-embed-size-picker :selected").data("height") || this.config.embed_sizes.presets[a].size.height,
            n = t.match(/src="([^"]+)"/)[1].split("?")[0],
            r = this.$container.find(".j-embed-start-picker").prop("selectedIndex") + 1 || 1;
        n += r > 1 ? "?startSlide=" + r : "", t = t.replace(/src="[^"]+"/, 'src="' + n + '"'), t = t.replace("http:", ""), t = t.replace("https:", ""), t = t.replace(/height="\d+"/, 'height="' + o + '"'), t = t.replace(/width="\d+"/, 'width="' + i + '"'), e.val(t)
    }, ModalShare.prototype.clearEmailErrorAlerts = function() {
        $(".error").removeClass("error")
    }, ModalShare.prototype.clearEmailFields = function() {
        this.$container.find(".j-email-clear").val(""), this.$shareEmailSend.prop("disabled", !1), this.clearEmailErrorAlerts()
    }, ModalShare.prototype.sendShareEmail = function(e) {
        this.shareGATracking("share_email", "send");
        var t = this,
            a = this.$container.find(".j-share-email-to").val(),
            i = this.$container.find(".j-share-email-name").val(),
            o = this.$shareEmailMsg.val(),
            n = !1;
        t.$shareEmailSend.val(""), t.$shareEmailSend.addClass("sending"), t.$shareEmailSend.prop("disabled", !0), t.clearEmailErrorAlerts(), n || (n = !0, $.post("/w/list/email_share", {
            data: {
                id: this.data.ssId,
                name: i,
                recipients: a,
                msg: o
            },
            dataType: "json"
        }).done(function(e) {
            if (0 === e.respCode) t.clearEmailFields(), t.$shareEmailForm.slideUp(400), t.collapseAllSections(), t.$container.find("#email-sent").slideDown(400), setTimeout(function() {
                t.$container.find("#email-sent").slideUp(400), t.$shareEmailForm.slideDown(400)
            }, 2e3), t.$contentWrapper.removeClass("email-expanded"), t.trackShareEvent({
                entityId: t.data.ssId,
                shareType: "email",
                entityAuthorId: t.data.authorId,
                isEmbed: t.config.isEmbed || !1
            });
            else {
                var a = t.$container.find(".j-email-flash");
                switch (a.text(e.resp).show(), e.respCode) {
                    case 1:
                        t.$container.find(".j-share-email-to").addClass("error");
                        break;
                    case 2:
                        t.$container.find(".j-share-email-name").addClass("error")
                }
                setTimeout(function() {
                    a.fadeOut(400)
                }, 5e3)
            }
            n = !1, t.$shareEmailSend.val("Send"), t.$shareEmailSend.removeClass("sending"), t.$shareEmailSend.prop("disabled", !1)
        }).fail(function(e, a, i) {
            n = !1, t.$shareEmailSend.val("Send"), t.$shareEmailSend.removeClass("sending"), t.$shareEmailSend.prop("disabled", !1)
        }))
    }, ModalShare.prototype.shareGATracking = function(e, t) {
        var a = window._gaq || [];
        e = this.gaTrackAction ? this.gaTrackAction + "_" + e : e, a.push(["_trackEvent", this.gaTrackCategory, e, t])
    }, ModalShare.prototype.renderSlideStartOptions = function() {
        for (var e = "", t = 0; t < this.data.totalSlides; t++) {
            var a = "slide " + (t + 1);
            e += "<option ", 0 === t && (e += ' selected="selected"'), e += ">" + a + "</option>"
        }
        var i = this.$container.find(".j-embed-start-picker, .j-share-start-picker");
        i.empty(), i.append(e), this.updateStartSlide()
    }, ModalShare.prototype.renderDefaultEmbedOptions = function() {
        var e, t = {
            0: {
                small: [344, 292],
                medium: [429, 357],
                large: [514, 422],
                "default": [599, 487]
            },
            1: {
                small: [386, 410],
                medium: [481, 512],
                large: [576, 614],
                "default": [672, 716]
            },
            3: {
                small: [340, 191],
                medium: [425, 239],
                large: [510, 287],
                "default": [595, 335]
            }
        };
        e = 3 === this.data.ssType ? t[3] : t[this.data.ssType % 2];
        var a = "";
        for (var i in e) {
            var o = e[i][0] + " x " + e[i][1];
            a += '<option value="' + i + '" data-width="' + e[i][0] + '" data-height="' + e[i][1] + '"', "default" === i && (a += " selected"), a += ">" + o + "</option>"
        }
        var n = this.$container.find(".j-embed-size-picker");
        n.empty(), n.append(a), this.$container.find(".j-embed-start-picker").prop("selecteIndex", 1), this.$container.find(".j-share-embed-wp").val(this.data.social.wordpress), this.$container.find(".j-share-embed-link").text(this.data.embedCode)
    }, ModalShare.prototype.toggleAddMessageHeight = function(e) {
        this.$shareEmailMsg.toggleClass("msg-expanded", e)
    }, ModalShare.prototype.collapseAllSections = function() {
        $(".j-share-expand").slideUp(), $("#share-embed-link").scrollTop(0), $(".j-triggered").removeClass("j-triggered"), this.toggleAddMessageHeight(!1)
    }, ModalShare.prototype.triggerExpand = function(e) {
        this.collapseAllSections(), $(e).addClass("j-triggered"), $(e).siblings(".j-share-expand").slideDown(400, this.adjustShareModalTop.bind(this)), this.$contentWrapper.removeClass("email-expanded embed-expanded"), $(e).hasClass("j-share-email-to") ? this.$contentWrapper.addClass("email-expanded") : $(e).hasClass("j-share-embed-link") && this.$contentWrapper.addClass("embed-expanded")
    }, ModalShare.prototype.getNewSlideURL = function(e, t) {
        var a = document.createElement("a");
        a.href = e;
        var i = a.pathname.split("/");
        i[0] || i.shift();
        for (var o = i.length, n = i[o - 1]; !n && o > 0;) i.pop(), o--, n = i[o - 1];
        return parseInt(n, 10) && o > 2 && i.pop(), t > 1 && i.push(t), a.pathname = i.join("/"), a.href
    }, ModalShare.prototype.getSlideImageURL = function(e) {
        return $('#svPlayerId .slide[data-index="' + e + '"] .slide_image').data("full")
    }, ModalShare.prototype.bindModalEvents = function() {
        var e = this;
        this.$close.bind("click", function() {
            e.close()
        }), this.$container.find(".j-share-start-picker").change(function(t) {
            e.updateStartSlide(), e.shareGATracking("share_social", $(this).data("ga"))
        }), this.$shareEmailForm.submit(function(t) {
            t.preventDefault(), t.stopPropagation(), e.sendShareEmail()
        }), this.$shareEmailMsg.click(function() {
            e.toggleAddMessageHeight(!0)
        }), this.$container.find(".j-share-email-to, .j-share-email-name").click(function(t) {
            e.toggleAddMessageHeight(!1)
        }), this.$container.find(".j-share-social-list li").click(function(t) {
            e.sharePopup($(this).data("network")), e.trackShareEvent({
                entityId: e.data.ssId,
                shareType: $(this).data("network"),
                entityAuthorId: e.data.authorId,
                isEmbed: e.config.isEmbed || !1
            }), t.preventDefault()
        }), this.$container.find(".j-update-embed").change(function() {
            e.updateEmbed()
        }), this.$container.find(".j-share-embed-link, .j-share-embed-wp, .j-last-screen-ssurl").bind("click", function() {
            this.select()
        }), this.$container.find(".j-share-link-url").click(function() {
            this.select(), e.shareGATracking("share_social", $(this).data("ga"))
        }), this.$container.find(".j-share-email-form input, .j-share-email-form textarea, .j-add-msg, .j-send-another-email").click(function(t) {
            "send" !== $(this).data("ga") && e.shareGATracking("share_email", $(this).data("ga"))
        }), this.$container.find(".j-embed-use-ssl-cbox, .j-embed-related-cbox, .j-embed-size-picker, .j-embed-start-picker").click(function() {
            e.shareGATracking("share_embed", $(this).data("ga"))
        }), this.$container.find(".j-share-expand-trigger").focus(function() {
            $(this).siblings(".j-share-expand:visible").length > 0 || e.triggerExpand(this)
        }), $(window).resize(function() {
            e.adjustShareModalTop()
        }), $(document).keydown(function(t) {
            27 === t.which && (t.preventDefault(), e.close())
        }), $(".j-modal-popup").on("scroll", function(t) {
            e.$close.css("top", 8 + $(this).scrollTop() + "px")
        })
    }, ModalShare.prototype.bindCustomModalEvents = function() {}, ModalShare.prototype.createShareHash = function() {
        this.SHARE_HASH = {
            facebook: "https://www.facebook.com/sharer/sharer.php?",
            linkedin: "https://www.linkedin.com/cws/share?trk=SLIDESHARE&",
            twitter: "https://twitter.com/share?",
            wordpress: "",
            pinterest: "https://pinterest.com/pin/create/button/?"
        }
    }, ModalShare.prototype.getSSId = function(e) {
        return e.length ? e.data("slideshowid") : slideshare_object.modal_player.get_ss_id()
    }, ModalShare.prototype.bindModalToShareButtons = function() {}, ModalShare.prototype.trackShareEvent = function(e) {
        var t = e || {},
            a = t.isEmbed || !1,
            i = t.entityAuthorId && window.slideshare_object.user && t.entityAuthorId === window.slideshare_object.user.id || !1;
        this.shareTracker.shareSlideShow({
            entityId: t.entityId,
            shareType: t.shareType,
            isOwner: i,
            isEmbed: a
        })
    }, ModalShare.prototype.saveShare = function(e) {
        var t = this;
        $.get("/account/get_form_authenticity_token").done(function(a) {
            $.post("/share/viralshare", {
                data: {
                    id: t.data.ssId,
                    network: e
                },
                authenticity_token: a.auth_token
            })
        })
    }, ModalShare.prototype.showLikeUsModal = function() {}, ModalShare.prototype.postToFacebook = function() {
        var e = this;
        if (window.FB) {
            var t = function(t) {
                t && t.post_id && e.saveShare("facebook")
            };
            FB.ui({
                method: "feed",
                display: "popup",
                link: this.data.ssLink
            }, t)
        }
    }, ModalShare.prototype.adjustShareModalTop = function() {}, ModalShare.prototype.updateStartSlide = function() {}, ListPageModalShare.prototype = new ModalShare, ListPageModalShare.prototype.bindCustomModalEvents = function() {
        this.$container.find(".j-modal-content").click(function(e) {
            e.stopPropagation()
        })
    }, ListPageModalShare.prototype.bindModalToShareButtons = function() {
        var e = this,
            t = !1,
            a = this.$container.find(".j-modal-popup");
        $(this.config.parentEl).on("click", this.config.btnShare, function(i) {
            var o = $(this).closest(".iso_slideshow").length > 0 ? $(this).closest(".iso_slideshow") : $("#modal_player");
            a.hide(), e.$container.fadeIn(200), data = {
                authorId: o.data("slideshowauthorid"),
                embedCode: o.data("embedcode"),
                totalSlides: o.data("totalslides"),
                ssLink: o.data("sslink"),
                title: o.data("title"),
                ssType: o.data("sstype"),
                ssId: o.data("slideshowid"),
                social: {
                    linkedin: o.data("linkedinshareurl"),
                    facebook: o.data("facebookshareurl"),
                    twitter: o.data("twittershareurl"),
                    pinterest: o.data("pinterestshareurl"),
                    wordpress: o.data("wordpressshareurl"),
                    email: "mailto:?subject=Check out this SlideShare " + o.data("sstypeasstring") + "&body=" + o.data("sslink")
                }
            }, e.data = data, a.show(), e.show(), e.adjustShareModalTop(), e.$linkURLInput.val(e.data.ssLink), e.renderDefaultEmbedOptions(), e.renderSlideStartOptions(), t || ($(".iso_slideshow_link").attr("title", ""), t = !0), i.preventDefault()
        })
    }, ListPageModalShare.prototype.close = function() {
        this.reset(), this.$container.hide(), this.shareGATracking("modalClose")
    }, ListPageModalShare.prototype.adjustShareModalTop = function() {
        var e = $("#homepage-modal-share, #new-list-modal-share"),
            t = e.find(".j-modal-popup");
        e.length > 0 && t.length > 0 && t.animate({
            top: (e.height() - t.height()) / 2 + "px"
        }, 400)
    }, MobileModalShare.prototype = {}, MobileModalShare.prototype.IOS4REGEX = /["iPhone"|"iPad"].+i?OS [4|3].+Safari/, MobileModalShare.prototype.isIpadAndChrome = function() {
        return /ipad.*crios|crios.*ipad|ipad.*chrome|chrome.*ipad/i.test(navigator.userAgent)
    }, MobileModalShare.prototype.init = function() {
        this.$modalShare = $(this.config.el), this.$overlay = this.$modalShare.find(".share-overlay"), this.$shareList = this.$modalShare.find(".mobile-share-list"), this.$linkShare = this.$modalShare.find(".link-share"), this.gaCategory = this.$modalShare.data("ga"), this.bindModalEvents(), this.bindModalToShareBtns(), this.populateShareLinks(), this.applyAppropriateOrientationCSS()
    }, MobileModalShare.prototype.getDeviceOrientation = function() {
        var e;
        if (window.orientation) e = 0 === window.orientation ? "portrait" : "landscape";
        else {
            var t = window.innerWidth || screen.width,
                a = window.innerHeight || screen.height;
            e = t > a ? "landscape" : "portrait"
        }
        return e
    }, MobileModalShare.prototype.open = function() {
        this.gaTracking("open"), this.$modalShare.fadeIn(), $("body").addClass("no_scroll")
    }, MobileModalShare.prototype.close = function() {
        this.gaTracking("close"), this.$modalShare.fadeOut(), $("body").removeClass("no_scroll")
    }, MobileModalShare.prototype.populateShareLinks = function() {
        this.isIpadAndChrome() || $.each(this.$shareList.find("li > a"), function() {
            $(this).attr("href", $(this).data("url"))
        })
    }, MobileModalShare.prototype.gaTracking = function(e, t) {
        if (t) {
            var a = window._gaq || [];
            e = "mobile_" + e, a.push(["_trackEvent", this.gaCategory, e, t])
        }
    }, MobileModalShare.prototype.viralshareTracking = function(e, t) {
        e && t && $.get("account/get_form_authenticity_token").done(function(a) {
            $.post("/share/viralshare", {
                data: {
                    id: e,
                    network: t
                },
                authenticity_token: a.auth_token
            })
        })
    }, MobileModalShare.prototype.repositionShareModal = function() {
        this.$overlay.css("position", "static")
    }, MobileModalShare.prototype.applyAppropriateOrientationCSS = function() {
        this.orientation = this.getDeviceOrientation(), "portrait" === this.orientation ? this.$modalShare.removeClass("landscape") : this.$modalShare.addClass("landscape")
    }, MobileModalShare.prototype.trackShareEvent = function(e) {
        var t = e || {},
            a = t.isEmbed || !1,
            i = t.entityAuthorId && window.slideshare_object.user && t.entityAuthorId === window.slideshare_object.user.id || !1;
        this.shareTracker.shareSlideShow({
            entityId: t.entityId,
            shareType: t.shareType,
            isOwner: i,
            isEmbed: a
        })
    }, MobileModalShare.prototype.bindModalEvents = function() {
        var e = this;
        this.$shareList.on("click", "li", function() {
            e.gaTracking("social", $(this).data("ga")), e.trackShareEvent({
                entityId: e.data.ssId,
                shareType: $(this).data("ga"),
                entityAuthorId: e.data.authorId,
                isEmbed: !1
            })
        }), window.slideshare_mobile_object && e.$shareList.data("slideshow-id", slideshare_mobile_object.slideshow.slideshowId), this.$shareList.on("click", "[data-network]", function() {
            e.viralshareTracking(e.$shareList.data("slideshow-id"), $(this).data("network"))
        }), "undefined" == typeof $mainNav && this.isIpadAndChrome() && this.$shareList.on("click", "a", function() {
            window.open($(this).data("url"), "_blank")
        }), this.$modalShare.find(".btn, .share-overlay, .j-close").click(function() {
            e.close()
        }), $(window).on("resize orientationchange", function() {
            e.applyAppropriateOrientationCSS()
        })
    }, MobileModalShare.prototype.bindModalToShareBtns = function() {
        var e = this;
        $(this.config.parentEl).on("click", this.config.shareBtn, function() {
            var t, a = $(this).closest(".iso_slideshow"),
                i = a.length ? a : $(".mobile-swipe-wrapper").find(".player"),
                o = i.data("slideshowid");
            if (o && (t = {
                    ssId: i.data("slideshowid"),
                    authorId: i.data("slideshowauthorid"),
                    ssLink: i.data("sslink"),
                    social: {
                        linkedin: i.data("linkedinshareurl"),
                        facebook: i.data("facebookshareurl"),
                        twitter: i.data("twittershareurl"),
                        sms: i.data("smsshareurl"),
                        whatsapp: i.data("whatsappshareurl"),
                        email: i.data("emailshareurl"),
                        pinterest: i.data("pinterestshareurl")
                    }
                }, e.data = t), window.mobilePlayer) return void e.open();
            if (o) {
                var n = t.social.linkedin,
                    r = t.social.facebook,
                    s = t.social.twitter,
                    d = t.social.email,
                    l = t.social.sms,
                    h = t.social.whatsapp,
                    c = t.social.pinterest;
                e.$linkShare.attr("href", t.ssLink), e.$linkShare.html(t.ssLink), e.$shareList.find(".li-share-btn > a").attr("href", n), e.$shareList.find(".fb-share-btn > a").attr("href", r), e.$shareList.find(".tw-share-btn > a").attr("href", s), e.$shareList.find(".whatsapp-share-btn > a").attr("href", h), e.$shareList.find(".email-share-btn > a").attr("href", d), e.$shareList.find(".sms-share-btn > a").attr("href", l), e.$shareList.find(".pinterest-share-btn > a").attr("href", c), e.$shareList.data("slideshow-id", o), e.open()
            }
        })
    },
    function(e, t) {
        function a(e) {
            this.config = e, this.init()
        }
        var i = e.utils.i18n;
        a.prototype.init = function() {
            this.modalId = this.config.modalElementId, this.modalMessages = null, this.fromType = null, this.fromSource = null, this.iFrameElement = null, t.event.trigger("modalSignupLoaded"), this.initModal(), this.bindTriggers(), this.bindEvents(), e.registerMessageReceiver(t.proxy(this.messageReceiver, this))
        }, a.prototype.initModal = function() {
            var e;
            if (null !== window.location.href.match("/upload")) {
                var a = 'a[href*="/login?"], a[href$="/login"],a[href*="/signup?"], a[href$="/signup"], a[href*="/upload?"],a[href$="/upload"]';
                e = t(a).filter(":not(.void_fancybox, .smt-link)")
            } else {
                var i = 'a[href*="/login?"], a[href$="/login"],a[href*="/signup?"], a[href$="/signup"], button[href*="/signup"]';
                e = t(i).filter(":not(.void_fancybox, .smt-link)")
            }
            e.attr("data-toggle", "modal"), e.attr("data-target", "#" + this.modalId), t("body").append('<div class="modal fade FBlogin login-wrapper hide" id="' + this.modalId + '" style="width:470px;height:347px;"></div>'), this.modalElement = t("#" + this.modalId)
        }, a.prototype.appendHeader = function(e) {
            e.push(this.fromType), t("#modal-login-heading").text(i(e.join(".")))
        }, a.prototype.bindTriggers = function(e) {
            t(document).on("click", "a[data-toggle=modal], button[data-toggle=modal]", t.proxy(function(e) {
                var a = t(e.currentTarget);
                if (href = a.attr("href"), href && href.length > 0 || (href = a.data("href")), e.currentTarget && href && href.length > 0 && !a.hasClass("j-pro-hero-slideshow")) {
                    e.preventDefault();
                    var i = a.data("tracking-id");
                    i && (href = addUrlVar(href, "tracking-id", i)), this.open(href, a.attr("data-target"))
                }
            }, this))
        }, a.prototype.bindEvents = function() {
            t(".modal-header .close").on("click", t.proxy(this.closedHandler, this)), t("#fb-login-modalbox").on("click", function() {
                e.ga("Signup", "fancybox_fblogin_clicked")
            })
        }, a.prototype.open = function(e, a) {
            this.openModal(), this.url = e.replace("/login", "/account/render_iframe_login"), this.url = this.url.replace("/signup", "/account/render_iframe_login"), this.url = this.url || "/account/render_iframe_login", a = a || "#" + this.modalId, this.fromType = getUrlVar("from", this.url), this.fromSource = getUrlVar("from_source", this.url);
            var i = a;
            t(i).load(this.url, t.proxy(function() {
                this.appendHeader(["ajax_signup.login"])
            }, this)), this.appendHeader(["ajax_signup.login"])
        }, a.prototype.openModal = function(e, a) {
            t("#" + this.modalId).modal("show")
        }, a.prototype.closedHandler = function(t) {
            return e.isDownloadUrl(this.url) ? e.ga("Signup", "thickbox_closed", "download") : e.ga("Signup", "thickbox_closed"), !0
        }, a.prototype.modalLoginCallBack = function() {
            if (e.isDownloadUrl(this.url) || e.ga("Login", "ss_login", "ss_login_from_fancybox"), window.location.pathname.startsWith("/upload") === !0 && (e.ga("Upload", "ss_login_successful"), /loggedout_/.test(window.location.href))) return window.location.replace(window.location.href.replace("loggedout_", "loggedin_loggedout_")), !1;
            var t = jQuery.inArray(this.fromType, ["business", "upload", "download", "favorite", "clip"]) !== -1,
                a = decodeURIComponent(this.fromSource);
            t && this.fromSource && this.fromSource.length > 1 && isInternalRedirect(this.fromSource) && window.location.href !== a ? window.location.href = a : window.location.reload()
        }, "undefined" != typeof Foundation && (a.prototype.initModal = function() {
            t("body").append('<div class="modal-login-wrapper reveal-modal" id="' + this.modalId + '" data-reveal></div>'), this.modalElement = t("#" + this.modalId)
        }, a.prototype.bindTriggers = function(a) {
            t(document).on("click", "a[data-reveal-id=" + this.modalId + "], button[data-reveal-id=" + this.modalId + "]", t.proxy(function(a) {
                if (!e.user || !e.user.loggedin) {
                    var i = t(a.currentTarget);
                    if (a.currentTarget && (href = i.attr("href")) && href.length > 0) {
                        a.preventDefault();
                        var o = i.data("tracking-id");
                        o && (href = addUrlVar(href, "tracking-id", o)), this.open(href, i.attr("reveal-id"))
                    }
                }
            }, this))
        }, a.prototype.bindEvents = function() {
            t(document).on("closed.fndtn.reveal", this.modalElement, t.proxy(this.closedHandler, this))
        }, a.prototype.messageReceiver = function(e) {
            switch (e) {
                case "Signup_show_from_iframe":
                    this.appendHeader(["ajax_signup.signup"]), slideshare_object.ga("Signup", "Signup_loaded");
                    break;
                case "login_show_from_iframe":
                    this.appendHeader(["ajax_signup.login"]), slideshare_object.ga("Signup", "Login_clicked");
                    break;
                case "fbconnectNewUser":
                case "fbconnectExistingUser":
                    window.location.replace("/fbconnect/landingpage?from=" + this.fromSource);
                    break;
                case "fbconnectExistingUserWithLinkedAccount":
                    var a = getUrlVar("from", this.url),
                        i = decodeURIComponent(this.fromSource);
                    void 0 !== getUrlVars(this.fromSource).from_logout && "undefined" == typeof a ? window.location.replace("/?ss") : window.location.pathname.startsWith("/upload") && /loggedout_/.test(window.location.href) ? window.location.replace(window.location.href.replace("loggedout_", "loggedin_loggedout_")) : isInternalRedirect(this.fromSource) && window.location.href !== i ? window.location.href = decodeURIComponent(this.fromSource) : window.location.reload();
                    break;
                case "fbconnectFailed":
                    this.closeModal();
                    break;
                case "fbconnectSuspendedUser":
                    this.closeModal();
                    break;
                case "fbconnectDefault":
                    window.location.reload();
                    break;
                case "modalLoginSubmit":
                    this.modalLoginCallBack();
                    break;
                case "hideSpinner":
                    t(".frame-loading").hide();
                    break;
                case "forgotPassword":
                    window.location.href = t("#forgot-password-url").val()
            }
        }, a.prototype.openModal = function() {
            this.modalElement.foundation("reveal", "open")
        }, a.prototype.closeModal = function() {
            this.modalElement.foundation("reveal", "close")
        }), t(document).ready(function() {
            if (!e.user.loggedin) {
                var t = new a({
                    iFrameSelector: "#modal_login_iframe",
                    modalElementId: "login_modal"
                });
                window.initiate_login_modal = function(e, a) {
                    t.open(e, a)
                }
            }
        }), window.initiate_login_modal = function(e, t) {
            error("Login modal initialization cannot be performed")
        }
    }(slideshare_object, jQuery),
    function(e, t, a) {
        function i(e, t) {
            t = t || {}, this.downloadAction = $(e || ".j-download, .j-save"), this._shouldClickPropagate = t.propagate, this._showClippingModal = t.showClippingModal, this.bindEvents()
        }
        var o = 12e4,
            n = t.getPageKey();
        i.prototype = {
            constructor: i,
            _init_loggedout: function() {
                this.downloadAction.on("click", function() {
                    var e = new Date;
                    e.setTime(e.getTime() + o), $.cookie("logout_action", "save", {
                        path: "/",
                        expires: e
                    }), $.cookie("download_start_location", n, {
                        path: "/",
                        expires: e
                    }), $(".player").hasClass("fullscreen") && $.slideshareEventManager && $.slideshareEventManager.trigger("leavefullscreen")
                })
            },
            _init: function() {
                var a = this._shouldClickPropagate;
                this.downloadAction.on("click", function(o) {
                    var n = e.location;
                    o.preventDefault(), a || o.stopPropagation(), n.origin || (n.origin = n.protocol + "//" + n.hostname + (n.port ? ":" + n.port : "")), t.user && i.postDownloadRequest($(this))
                })
            },
            bindEvents: function() {
                a.isUserAuthenticated() ? this._init() : this._init_loggedout()
            },
            unbindEvents: function() {
                this.downloadAction.off("click")
            }
        }, i.download = function(e) {
            a.isUserAuthenticated() ? i.postDownloadRequest($(".j-action-download, .j-download, .j-save")) : e && e.url && (i.downloadFile(e.url), e.record_url && $.ajax({
                url: e.record_url,
                type: "POST",
                complete: function(e) {
                    t.dev && console.log(e)
                },
                crossDomain: !0,
                xhrFields: {
                    withCredentials: !0
                }
            }))
        }, i.postDownloadRequest = function(e) {
            e.attr("disabled", !0), e.find(".j-download-loading-spinner").show(), $.post(e.attr("href"), function(t) {
                var a = !0;
                t.success ? t.download_ss_url ? ("CLEAN" === t.scan_result || "NO_SCAN" === t.scan_result || confirm(e.data("dangerous-download-confirmation"))) && i.downloadFile(t.download_ss_url) : "DIRTY" === t.scan_result ? i.showAlertModal(e.data("cant-download-alert")) : (setTimeout(function() {
                    i.postDownloadRequest(e)
                }, 1e3 * parseInt(e.data("poll-interval-seconds"))), a = !1) : i.showAlertModal(t.notice), a && (e.find(".j-download-loading-spinner").hide(), e.removeAttr("disabled"))
            })
        }, i.showAlertModal = function(t) {
            var a = $("#alert-modal");
            a.find("p").text(t), a.foundation("reveal", "open"), e._gaq.push(["_trackEvent", "savedfiles", "download_validation_failed"])
        }, i.downloadFile = function(t) {
            var a = $("#j-downloading-alert");
            e._gaq.push(["_trackEvent", "savedfiles", "download_started_from_loggedin", n]), a.show(), setTimeout(function() {
                a.hide()
            }, 3e3), $("#download").attr("src", t)
        }, t.download_interaction = i, a.exports("Downloader", i)
    }(window, window.slideshare_object, window.slideshare_object.utils), $(document).ready(function() {
        setTimeout(function() {
            $(".hero_top_unit").toggleClass("show")
        }, 1200)
    });