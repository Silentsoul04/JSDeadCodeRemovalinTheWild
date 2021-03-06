webpackJsonp([16], {
    0: function(e, t, i) {
        i(1482), i(1517), i(1518), i(1519), i(1520), e.exports = i(1521)
    },
    289: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(187),
            a = new n({
                setUpSelector: function(e) {
                    e.on("change", o.bind(this.__select_change, this))
                },
                __select_change: function(e) {
                    var t = s(e.currentTarget);
                    this.__update_select(t)
                },
                __update_select: function(e) {
                    var t = e.siblings("label");
                    t.text(e.find(":selected").text())
                }
            });
        e.exports = a
    },
    1197: function(e, t, i) {
        "use strict";
        var s = i(1198);
        e.exports = s
    },
    1198: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(219),
            n = i(130),
            a = i(230),
            r = i(136),
            l = i(1199),
            _ = i(1200),
            c = i(1201),
            d = o.extend({
                mixins: [a],
                templateAttributes: {
                    __: n,
                    formKey: s("#tumblr_form_key").attr("content")
                },
                initialize: function(e) {
                    e = e || {}, this.set("complete", !1), this.fieldValidation = new _({
                        el: this.$el
                    }), this.imageUpload = new l({
                        el: this.$el
                    }), this.errortags = new c({
                        mobileMode: "undefined" != typeof e.mobileMode && e.mobileMode
                    }), this._bindEvents()
                },
                _bindEvents: function() {
                    this.listenTo(r, "drawer:close", this._teardown), this.listenTo(r, "drawerform:validation", this._updateCompleteStatus)
                },
                _updateCompleteStatus: function(e) {
                    this.set("complete", e.status)
                },
                _teardown: function() {
                    this.fieldValidation.remove(), this.imageUpload.remove(), this.errortags.remove()
                },
                isAndroidKitKatWebView: function(e) {
                    if (null == e) return !1;
                    e = e.toLowerCase();
                    var t = e.indexOf("android 4.4") !== -1,
                        i = e.indexOf("version/") !== -1;
                    return t && i
                },
                supportsFileChooser: function() {
                    return !this.isAndroidKitKatWebView(navigator.userAgent)
                }
            });
        e.exports = d
    },
    1199: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(130),
            a = i(219),
            r = i(136),
            l = 15e6,
            _ = a.extend({
                events: {
                    "change .image-upload": "onImageUploadClick",
                    "click .btn-remove-uploaded": "onRemoveImageClick"
                },
                onImageUploadClick: function(e) {
                    var t = e.currentTarget;
                    if (this.imageUploadEl = s(".image-upload-input"), this.imagePreviewEl = s(".image-upload-preview"), t.files && t.files[0]) {
                        if (t.files[0].size > l) return r.trigger("drawerform:errortag:show", {
                            field: this.imageUploadEl,
                            text: n("File is too big.")
                        }), void s(t).replaceWith(s(t).val("").clone(!0));
                        r.trigger("drawerform:errortag:remove", {
                            field: this.imageUploadEl
                        }), this.imageUploadEl.addClass("hidden");
                        var i = new FileReader;
                        i.readAsDataURL(t.files[0]), i.onload = o.bind(function(e) {
                            this.imagePreviewEl.removeClass("hidden"), e.target.result && e.target.result.length ? (this.imagePreviewEl.find("img").attr("src", e.target.result), this.imagePreviewEl.addClass("shown")) : this.imageUploadEl.removeClass("hidden")
                        }, this)
                    }
                },
                onRemoveImageClick: function(e) {
                    e.preventDefault();
                    var t = s(".image-upload-input input");
                    t.replaceWith(t.val("").clone(!0)), s(".image-upload-input input").trigger("change"), this.imagePreviewEl.removeClass("shown"), this.imageUploadEl.removeClass("hidden")
                }
            });
        e.exports = _
    },
    1200: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(130),
            a = i(219),
            r = i(136),
            l = i(980),
            _ = 5e3,
            c = 350,
            d = 20,
            u = a.extend({
                events: {
                    'change [data-validate-input="dropdown"]': "fieldValidationHandler",
                    'keyup [data-validate-input="name"]': "fieldValidationHandler",
                    'blur [data-validate-input="name"]': "fieldValidationHandler",
                    'keyup [data-validate-input="email"]': "fieldValidationHandler",
                    'blur [data-validate-input="email"]': "fieldValidationHandler",
                    'keyup [data-validate-input="text"]': "fieldValidationHandler",
                    'blur [data-validate-input="text"]': "fieldValidationHandler",
                    'keyup [data-validate-input="text-abuse-form"]': "fieldValidationHandler",
                    'blur [data-validate-input="text-abuse-form"]': "fieldValidationHandler",
                    'keyup [data-validate-input="url"]': "fieldValidationHandler",
                    'blur [data-validate-input="url"]': "fieldValidationHandler",
                    'keyup [data-validate-input="tumblr_url"]': "fieldValidationHandler",
                    'blur [data-validate-input="tumblr_url"]': "fieldValidationHandler",
                    'change [data-validate-input="file"]': "fieldValidationHandler",
                    'change [data-validate-input="checkbox"]': "validateAllFields",
                    'keyup [data-validate-input="blog"]': "fieldValidationHandler",
                    'blur [data-validate-input="blog"]': "fieldValidationHandler"
                },
                validationErrorMessages: {
                    name: "Name length has to be within 1 ~ " + d.toString() + " characters",
                    text: "Under 5000 characters, please",
                    "text-abuse-form": "Under 350 characters, please",
                    email: "We gotta write you back, though",
                    url: "Invalid URL",
                    tumblr_url: "Invalid Tumblr post/media permalink",
                    blog: "Please enter your blog name or blog URL"
                },
                initialize: function() {
                    this.listenTo(r, "drawerform:validation:trigger", this.validateAllFields)
                },
                validateAllFields: function() {
                    var e = s("[data-validate-input]"),
                        t = e.length > 0;
                    o.each(e, function(e) {
                        var i = s(e),
                            o = i.data("validate-input"),
                            n = i.val(),
                            a = i.prop("required");
                        if (!this.isFieldValid(n, o, a)) return t = !1, !1
                    }, this), r.trigger("drawerform:validation", {
                        status: t
                    })
                },
                fieldValidationHandler: function(e) {
                    var t = s(e.target),
                        i = t.val().trim(),
                        o = t.data("validate-input"),
                        a = t.prop("required");
                    this.isFieldValid(i, o, a) ? (t.hasClass("error") && t.removeClass("error"), r.trigger("drawerform:errortag:remove", {
                        field: t
                    }), "focusout" !== e.type || "url" !== o && "tumblr_url" !== o || !i.length || 0 === i.indexOf("http") || s(e.target).val("http://" + i)) : "focusout" === e.type && (t.addClass("error"), r.trigger("drawerform:errortag:show", {
                        field: t,
                        text: n(this.validationErrorMessages[o])
                    })), this.validateAllFields()
                },
                isFieldValid: function(e, t, i) {
                    var s;
                    if (i = "undefined" != typeof i && i, l.isBlank(e)) return !i;
                    switch (t) {
                        case "name":
                            s = l.maxLength(e, d);
                            break;
                        case "email":
                            s = l.isEmail(e);
                            break;
                        case "text":
                            s = l.maxLength(e, _);
                            break;
                        case "text-abuse-form":
                            s = l.maxLength(e, c);
                            break;
                        case "file":
                            s = !0;
                            break;
                        case "dropdown":
                            s = !0;
                            break;
                        case "url":
                            s = l.isUrl(e);
                            break;
                        case "tumblr_url":
                            s = l.isTumblrUrl(e) || l.isTumblrUrl(decodeURIComponent(e));
                            break;
                        case "checkbox":
                            s = this.isAtLeastOneChecked();
                            break;
                        case "blog":
                            s = l.maxLength(e, _)
                    }
                    return s
                },
                isAtLeastOneChecked: function() {
                    var e = s('input[type="checkbox"]:checked');
                    return e.length > 0
                }
            });
        e.exports = u
    },
    1201: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(130),
            a = i(230),
            r = i(219),
            l = i(136),
            _ = i(235),
            c = r.extend({
                mixins: [a],
                el: ".form-container",
                defaultText: "A few details, please",
                initialize: function(e) {
                    this.set("mobileMode", !("undefined" == typeof e || !e.mobileMode) && e.mobileMode), this.errorTags = {}, this.listenTo(l, "drawerform:errortag:show", this.showErrorTag), this.listenTo(l, "drawerform:errortag:remove", this.removeErrorTag), this.listenTo(l, "drawerform:errortag:removeall", this.removeAllErrorTags)
                },
                showErrorTag: function(e) {
                    if ("undefined" != typeof e && e.field) {
                        var t = e.field,
                            i = e.text || n(this.defaultText),
                            a = t.attr("name");
                        if (!this.errorTags[a])
                            if (this.errorTags[a] = s("<div>").addClass("drawer-error-tag").text(i), this.get("mobileMode")) {
                                this.groupName && this.labelName || (this.formClass = t.parents(".form").parent().attr("class"), "help-form" === this.formClass ? (this.groupName = ".form-group", this.labelName = ".group-label") : "abuse-form" === this.formClass && (this.groupName = ".form-row", this.labelName = ".row-label"));
                                var r = t.parents(this.groupName),
                                    l = r.find(this.labelName);
                                this.errorTags[a].addClass(a).appendTo(l), _.animate(this.errorTags[a], "fadeIn", {
                                    duration: 100,
                                    easing: "easeInOut"
                                }), _.animate(this.errorTags[a], "fadeOut", {
                                    duration: 100,
                                    easing: "easeIn",
                                    delay: 3e3,
                                    complete: o.bind(function() {
                                        this.removeErrorTag({
                                            field: t
                                        })
                                    }, this)
                                })
                            } else "undefined" == typeof this.drawer && (this.$drawer = s(".drawer"), this.$drawer.on("scroll", o.bind(this.updateErrortagPosition, this))), this.errorTags[a].css({
                                top: t.offset().top,
                                right: this.$drawer.width()
                            }).insertAfter(this.$drawer), _.animate(this.errorTags[a], {
                                translateX: ["-5px", "0px"]
                            }, {
                                duration: 100,
                                easing: "easeInOut"
                            })
                    }
                },
                removeErrorTag: function(e) {
                    var t = e.field,
                        i = t.attr("name");
                    "undefined" != typeof this.errorTags && this.errorTags[i] && (this.errorTags[i].remove(), delete this.errorTags[i])
                },
                removeAllErrorTags: function() {
                    "undefined" != typeof this.errorTags && this.errorTags && o.each(this.errorTags, function(e, t) {
                        e && (e.remove(), e = "", delete this.errorTags[t])
                    }, this)
                },
                updateErrortagPosition: function() {
                    "undefined" != typeof this.errorTags && this.errorTags && o.each(this.errorTags, function(e, t) {
                        var i = s('.form-container [name="' + t + '"]');
                        i.length || (i = s('form [name="' + t + '"]')), i ? e.css({
                            top: i.offset().top
                        }) : (e.remove(), this.removeErrorTag({
                            field: i
                        }))
                    }, this)
                },
                remove: function() {
                    return this.removeAllErrorTags(), "undefined" != typeof this.$drawer && this.$drawer.off("scroll", o.bind(this.updateErrortagPosition, this)), r.prototype.remove.apply(this)
                }
            });
        e.exports = c
    },
    1213: function(e, t, i) {
        "use strict";
        var s = i(226),
            o = i(136),
            n = i(3),
            a = i(8),
            r = s.extend({
                defaults: {
                    target: "g-recaptcha",
                    sitekey: ""
                },
                initialize: function(e) {
                    this.options = e || {};
                    var t = document.createElement("script");
                    t.src = "//www.google.com/recaptcha/api.js?render=explicit&onload=onNocaptchaCallback", window.onNocaptchaCallback = n.bind(this.setupCaptcha, this);
                    var i = document.getElementsByTagName("script")[0];
                    i.parentNode.insertBefore(t, i)
                },
                setupCaptcha: function() {
                    this.sitekey = a(".g-recaptcha").data("sitekey"), window.grecaptcha.render(this.options.target || "g-recaptcha", {
                        callback: this.options.callback || function() {},
                        theme: this.options.theme || "light",
                        type: this.options.type || "image",
                        sitekey: this.options.sitekey || a(".g-recaptcha").data("sitekey")
                    }), o && o.on("abouttumblr:change", function(e) {
                        0 !== e && 5 !== e || window.grecaptcha.reset()
                    })
                },
                refresh: function() {
                    window.grecaptcha.reset()
                }
            });
        e.exports = r
    },
    1292: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(214),
            a = i(1293),
            r = n.extend({
                name: "MobileAppBanner",
                defaults: {
                    type: "download-banner"
                },
                initialize: function(e) {
                    this.options = o.extend(this.defaults, e || {})
                },
                render: function() {
                    return this.data && (o.extend(this.data, this.options), (this.data.has_app || "app-gate" === this.options.type) && (this.bannerView = new a(this.data).render().el), s(this.options.attachTo).append(this.bannerView)), this
                }
            });
        e.exports = r
    },
    1293: function(e, t, i) {
        "use strict";
        var s = i(3),
            o = i(219),
            n = i(342),
            a = i(8),
            r = i(276),
            l = i(230),
            _ = i(1294),
            c = i(1295),
            d = i(1297),
            u = i(1299),
            p = o.extend({
                className: "mobile-app-banner",
                mixins: [r, l],
                events: {
                    "click .open.mobile-banner-button": "__clickOpen",
                    "click .mobile-banner-close": "__clickClose"
                },
                template: _,
                __clickOpen: function(e) {
                    if (this.isIos() && !this.isAtLeastIos9()) {
                        e.preventDefault();
                        var t = e.target.href;
                        this.openInAppOrStore(t)
                    }
                },
                __clickClose: function(e) {
                    e.preventDefault(), this.closeBanner(), this.setCookie(), this.hideBanner()
                },
                closeBanner: function() {
                    this.$el.remove()
                },
                setCookie: function() {
                    var e = new Date;
                    e.setDate(e.getDate() + 3), n.set("hide_download_app_prompt", "1", e)
                },
                showBanner: function() {
                    a(document.documentElement).addClass("mobile-app-banner-visible")
                },
                hideBanner: function() {
                    a(document.documentElement).removeClass("mobile-app-banner-visible")
                },
                isIos: function() {
                    var e = this.attributes.handset;
                    return "iphone" === e || "ipad" === e
                },
                getMajorIosVersion: function() {
                    var e = /\bOS ([0-9]+)/g.exec(navigator.userAgent);
                    return !!(this.isIos() && e && 2 === e.length && e[1]) && parseInt(e[1], 10)
                },
                isAtLeastIos9: function() {
                    return this.getMajorIosVersion() >= 9
                },
                openInAppOrStore: function(e) {
                    var t = "itms-apps://itunes.com/apps/tumblr/tumblr",
                        i = document.getElementById("app_protocol_check") || document.createElement("iFrame");
                    i.setAttribute("id", "app_protocol_check"), i.style.display = "none", document.body.appendChild(i), i.src = e, setTimeout(function() {
                        document.location.href = t
                    }, 1e3)
                },
                initialize: function(e) {
                    s.extend(this.attributes, e), this.$el.addClass(this.get("type")), "app-gate" === this.get("type") ? this.get("has_app") ? this.subViews.bannerInternals = new d(e) : this.subViews.bannerInternals = new u(e) : this.subViews.bannerInternals = new c(e)
                },
                render: function() {
                    return !n.get("hide_download_app_prompt") && (this.showBanner(), this.$el.html(this.template(this.toJSON())), this.attachSubViews(), this)
                }
            });
        e.exports = p
    },
    1294: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="mobile-banner banner-context-dashboard ' + __e(banner_class) + '"><div class="mobile-banner-inner"><div class="mobile-banner-full"><div data-subview="bannerInternals"></div></div></div></div>';
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1295: function(e, t, i) {
        "use strict";
        var s = i(3),
            o = i(219),
            n = i(230),
            a = i(1296),
            r = o.extend({
                mixins: [n],
                template: a,
                initialize: function(e) {
                    s.extend(this.attributes, e)
                },
                render: function() {
                    return this.set("install_url", this.get("install_url").replace("campaign_name", "mobile_banner_dashboard")), this.set("open_url", this.get("open_url") + "&referrer=mobile_banner_dashboard"), this.$el.html(this.template(this.toJSON())), this
                }
            });
        e.exports = r
    },
    1296: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape,
                __j = Array.prototype.join;
            with(obj) __p += '<div class="mobile-banner-body"><span class="mobile-banner-heading">' + __e(__("Use the Tumblr app!")) + '</span><span class="mobile-banner-subheading">' + __e(__("It's faster and a zillion times better.")) + '</span></div><div class="mobile-banner-controls"><a href="' + __e(open_url) + '" class="open mobile-banner-button secondary-cta tx-button" role="button">' + __e(__("Open")) + '</a><a href="' + __e(install_url) + '" class="install mobile-banner-button primary-cta tx-button white" role="button">' + __e(__("Install the app")) + "</a> ", show_close_button && (__p += ' <a href="#" class="mobile-banner-close"></a> '), __p += " </div>";
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1297: function(e, t, i) {
        "use strict";
        var s = i(3),
            o = i(219),
            n = i(230),
            a = i(1298),
            r = o.extend({
                mixins: [n],
                template: a,
                initialize: function(e) {
                    s.extend(this.attributes, e)
                },
                render: function() {
                    return this.set("install_url", this.get("install_url") + "?referrer=mobile_gate"), this.set("open_url", this.get("open_url") + "&referrer=mobile_gate"), this.$el.html(this.template(this.toJSON())), this
                }
            });
        e.exports = r
    },
    1298: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="mobile-banner-body"><span class="mobile-banner-heading">' + __e(__("Want to see more stuff?")) + '</span><span class="mobile-banner-subheading">' + __e(__("Use the Tumblr app!")) + '</span></div><div class="mobile-banner-controls"><a href="' + __e(open_url) + '" class="open mobile-banner-button mobile-banner-open secondary-cta tx-button" role="button">' + __e(__("Open")) + '</a><a href="' + __e(install_url) + '" class="install mobile-banner-button mobile-banner-install primary-cta tx-button blue" role="button">' + __e(__("Install the app")) + "</a></div>";
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1299: function(e, t, i) {
        "use strict";
        var s = i(3),
            o = i(219),
            n = i(230),
            a = i(1300),
            r = o.extend({
                mixins: [n],
                template: a,
                initialize: function(e) {
                    s.extend(this.attributes, e)
                },
                render: function() {
                    return this.$el.html(this.template(this.toJSON())), this
                }
            });
        e.exports = r
    },
    1300: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="mobile-banner-body"><span class="mobile-banner-heading">' + __e(__("Want to see more stuff?")) + '</span></div><div class="mobile-banner-controls"><a href="/register" class="mobile-banner-button signup primary-cta tx-button blue">' + __e(__("Sign up")) + '</a><a href="/login" class="mobile-banner-button login secondary-cta tx-button white">' + __e(__("Log in")) + "</a></div>";
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1467: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(214),
            a = i(136),
            r = i(831),
            l = i(232),
            _ = i(1468),
            c = n.extend({
                name: "HelpForm",
                mixins: [l],
                keycommands: {
                    "keydown:shift+h": "open"
                },
                initialize: function() {
                    this.drawerManager = r(), this.bindEvents()
                },
                bindEvents: function() {
                    this.listenTo(a, "helpform:open", this.open), this.listenTo(a, "helpform:close", this.close), this.listenTo(this.drawerManager, "open:helpform", this.openEventHandler), this.listenTo(this.drawerManager, "open:helpform:terminated", o.partial(this.openEventHandler, {
                        category: "terminated"
                    })), this.listenTo(this.drawerManager, "open:helpform:login", o.partial(this.openEventHandler, {
                        category: "login"
                    }))
                },
                close: function() {
                    this.drawerManager.close(), a.trigger("helpform:closed")
                },
                openEventHandler: function(e) {
                    this.open(e), a.trigger("Kraken:helpform:opened:withButton")
                },
                open: function(e) {
                    var t = s(document.activeElement).is("input,textarea,div[contenteditable]");
                    this.drawerManager.canOpen() && !t ? this.drawerManager.open(_, e) : this.drawerManager.close()
                }
            });
        e.exports = c
    },
    1468: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(129),
            a = i(136),
            r = i(180),
            l = i(230),
            _ = i(289),
            c = i(1469),
            d = i(1470),
            u = i(1471),
            p = i(1472),
            h = i(1473),
            m = i(1197),
            f = i(1213),
            g = m.extend({
                mixins: [l, _],
                templates: {
                    helpForm: c,
                    suggestions: d,
                    suggestionItem: h,
                    ticketCreated: u,
                    errorMessage: p
                },
                events: {
                    "click .help-form-next": "onFormNextClick",
                    "click .help-form-submit": "onFormSubmitClick",
                    "click .help-form-dismiss": "dismissForm",
                    "click .suggestion.with-link": "onSuggestionClick",
                    "change [data-validate-input]": "onFieldInputChange",
                    "change .category": "onCategoryChange"
                },
                className: "help-form",
                initialize: function(e) {
                    try {
                        m.prototype.initialize.call(this, e), this.set("suggestionsShown", !1), this.on("change:complete", this.updateSubmitButton), this.set("wasFormTouched", !1), this.set("wasFaqLoaded", !1), this.set("mobileMode", e.mobileMode || !1), a.on("drawer:close", o.bind(this.teardown, this));
                        var t = n.get("Components/HelpForm");
                        this.templateAttributes.email = t.email, this.templateAttributes.tumblelogs = t.tumblelogs, this.templateAttributes.languageNotice = t.language_notice, this.templateAttributes.categories = t.category_opt, this.templateAttributes.preSelectedCategory = e && e.category ? e.category : "", this.templateAttributes.supportsFileChooser = this.supportsFileChooser(), this.templateAttributes.recaptcha = t.recaptcha, this.captcha = new f, this.lang = t.lang, this.setUpResponseHandler(), r.bool("static_help_form") && (s(".contact_button_static").remove(), s(".static_help_form").remove())
                    } catch (e) {
                        this.onCatchFallBack(e)
                    }
                },
                onCatchFallBack: function(e) {
                    r.bool("static_help_form") && window.location && (this.get("mobileMode") && "/help" !== window.location.pathname ? o.defer(function() {
                        s(".help-form").remove()
                    }) : "/support" !== window.location.pathname ? window.location = "/support" : o.defer(function() {
                        a.trigger("helpform:close"), a.trigger("Kraken:helpform:close")
                    }))
                },
                dismissForm: function() {
                    this.logEvent("foundItClicked"), this.get("mobileMode") ? "undefined" != typeof window.history && window.history.length > 2 ? window.history.go(-1) : window.location = "/dashboard" : (a.trigger("helpform:close"), a.trigger("Kraken:helpform:close"))
                },
                setUpResponseHandler: function() {
                    window.help_modal = {}, window.help_modal.evaluate_response = o.bind(function(e) {
                        e.meta && 201 === e.meta.status ? this.onRequestSuccess() : this.onRequestFail(e)
                    }, this)
                },
                getFaqs: function() {
                    var e = s.ajax({
                        url: "/svc/faqs/" + this.lang
                    });
                    e.then(o.bind(this.onFaqRequestSuccess, this), o.bind(this.onFaqRequestFail, this))
                },
                onFaqRequestSuccess: function(e) {
                    "undefined" != typeof e.response.faqs ? this.prepareFaqIndex(e.response.faqs) : this.prepareFaqIndex([])
                },
                onFaqRequestFail: function() {
                    this.prepareFaqIndex([])
                },
                prepareFaqIndex: function(e) {
                    this.keywordIndex = {}, this.faqList = {};
                    var t;
                    "undefined" != typeof e && e.length > 0 && o.each(e, function(e) {
                        o.each(e.keywords.split(","), function(i) {
                            this.faqList[e.id] = {}, this.faqList[e.id].question = e.question, this.faqList[e.id].answer = e.answer, t = e.question.match('(https?://[^"]+)'), this.faqList[e.id].faqLink = null !== t && t[0], "undefined" == typeof this.keywordIndex[i] && (this.keywordIndex[i] = []), this.keywordIndex[i].push(e.id)
                        }, this)
                    }, this), this.set("wasFaqLoaded", !0)
                },
                updateSubmitButton: function() {
                    this.get("complete") === !0 ? this.nextFormButton.removeAttr("disabled") : this.nextFormButton.attr("disabled", "disabled")
                },
                onCategoryChange: function() {
                    this.updateReleventBlogRequired(), this.fieldValidation.validateAllFields()
                },
                updateReleventBlogRequired: function() {
                    "explicit" === this.categoryField.val() || "appeal" === this.categoryField.val() ? (this.tumblelogField.attr("required", "required"), this.blogOptionalIndicator.addClass("not-shown"), this.get("mobileMode") && this.blogOptionalIndicator.addClass("hidden")) : (this.tumblelogField.removeClass("error"), a.trigger("drawerform:errortag:remove", {
                        field: this.tumblelogField
                    }), this.tumblelogField.removeAttr("required"), this.blogOptionalIndicator.removeClass("not-shown"), this.get("mobileMode") && this.blogOptionalIndicator.removeClass("hidden"))
                },
                onRequestSuccess: function() {
                    this.$el.html(this.templates.ticketCreated(this.templateAttributes)), this.resetScroll(), this.logEvent("submit:success"), a.trigger("drawer:disableCloseConfirmation"), setTimeout(function() {
                        a.trigger("helpform:close"), a.trigger("Kraken:helpform:close")
                    }, 5e3)
                },
                onRequestFail: function(e) {
                    var t = s(this.get("suggestionsShown") ? ".help-form-submit" : ".help-form-next"),
                        i = o.clone(this.templateAttributes),
                        n = s(".error-message");
                    n && n.remove(), e.response && e.response.errors && o.extend(i, e.response), s(this.templates.errorMessage(i)).insertBefore(t.closest(".form-group")), t.removeClass("loading"), this.logEvent("submit:error", {
                        error: e
                    })
                },
                onFormNextClick: function(e) {
                    if (e.target && e.preventDefault(), a.trigger("drawerform:errortag:removeall"), !this.get("wasFaqLoaded")) return this.nextFormButton.addClass("loading"), void this.once("change:wasFaqLoaded", this.onFormNextClick, this);
                    var t = this.getSuggestions();
                    t.length > 0 ? (this.set("suggestionsShown", !0), this.form.addClass("not-shown"), this.get("mobileMode") && this.form.addClass("hidden"), this.$el.prepend(this.templates.suggestions(o.extend(this.templateAttributes))), this.fillInSuggestions(t), this.resetScroll(), this.logEvent("suggestions:found", {
                        suggestions: t
                    })) : (this.form.find("form").submit(), this.nextFormButton.addClass("loading"), this.logEvent("suggestions:notfound")), this.sendLogQuery()
                },
                onSuggestionClick: function(e) {
                    var t = s(e.target);
                    this.logEvent("suggestions:clicked", {
                        faqLink: t.attr("href")
                    })
                },
                onFieldInputChange: function(e) {
                    this.get("wasFormTouched") || (this.set("wasFormTouched", !0), a.trigger("drawer:enableCloseConfirmation"), this.getFaqs())
                },
                resetScroll: function() {
                    var e;
                    this.get("mobileMode") ? e = s("body") : ("undefined" == typeof this.drawer && (this.drawer = this.$el.closest(".drawer")), e = this.drawer), o.defer(function() {
                        e.scrollTop(0)
                    })
                },
                logEvent: function(e, t) {
                    if (e && e.length) {
                        var i = {
                            category: this.categoryField.val() || "",
                            query: this.bodyField.val() || ""
                        };
                        o.extend(i, t), a.trigger("Kraken:helpform:" + e, {
                            loggingData: i
                        })
                    }
                },
                fillInSuggestions: function(e) {
                    var t = s(".suggestions-list");
                    o.each(e, function(e) {
                        e.faqLink ? s("<a></a>").attr({
                            href: e.faqLink,
                            target: "_blank",
                            class: "suggestion with-link"
                        }).html(this.templates.suggestionItem(e)).appendTo(t) : s("<div></div>").attr({
                            class: "suggestion"
                        }).html(this.templates.suggestionItem(e)).appendTo(t)
                    }, this)
                },
                onFormSubmitClick: function() {
                    this.form.find("form").submit(), this.$el.find(".help-form-submit").addClass("loading")
                },
                sendLogQuery: function() {
                    s.ajax({
                        url: "/help/query",
                        type: "POST",
                        data: {
                            query: this.bodyField.val(),
                            matched: this.get("suggestionsShown") ? 1 : 0
                        }
                    })
                },
                getSuggestions: function() {
                    var e = this.bodyField.val().trim().toLowerCase(),
                        t = {},
                        i = [];
                    return o.each(this.keywordIndex, function(i, s) {
                        (0 === e.indexOf(s) || e.indexOf(" " + s) > 0) && o.each(i, function(e, i) {
                            "undefined" == typeof t[e] && (t[e] = 0), t[e] += i < 10 ? .05 * (10 - i) : 0
                        }, this)
                    }, this), t = o.chain(t).map(function(e, t) {
                        return {
                            name: t,
                            score: e
                        }
                    }).sortBy(function(e) {
                        return e.score
                    }).reverse().filter(function(e, t) {
                        return t < 5
                    }).value(), o.each(t, function(e) {
                        i.push(this.faqList[e.name])
                    }, this), i
                },
                render: function() {
                    return this.$el.html(this.templates.helpForm(this.templateAttributes)), this.form = this.$el.find(".form-container.form"), this.bodyField = this.$el.find(".body"), this.categoryField = this.$el.find(".category"), this.nextFormButton = this.$el.find(".help-form-next"), this.tumblelogField = this.$el.find(".tumblelog"), this.blogOptionalIndicator = this.$el.find("#blog_optional_indicator"), this.setUpSelector(this.$el.find(".category")), this.setUpSelector(this.$el.find(".tumblelog")), this
                },
                teardown: function() {
                    window.location && "/support" === window.location.pathname && (a.trigger("helpform:navigateBackToHelp"), a.trigger("Kraken:helpform:navigateBackToHelp"))
                }
            });
        e.exports = g
    },
    1469: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape,
                __j = Array.prototype.join;
            with(obj) __p += '<div class="form-container form"><div class="form-header with-border"><h1 class="form-heading">' + (null == (__t = __("Help me, Tumblr")) ? "" : __t) + '</h1><div class="form-description"><p> ' + (null == (__t = __("You got it. Describe the problem you're having as best you can, and a member of our Support team will be in touch with you as soon as possible.")) ? "" : __t) + " </p><br><p> " + (null == (__t = __("%1$sNote:%2$s This form is for technical issues and general weirdness. If you're reporting a violation of our Community Guidelines, use %3$sthis other form%4$s instead.", "<strong>", "</strong>", '<a href="/abuse">', "</a>")) ? "" : __t) + ' </p></div></div><form action="/support/ticket/new" src="" method="POST" enctype="multipart/form-data" target="help_form_target"><iframe id="help_form_target" name="help_form_target" style="width:0;height:0;border:none;margin:0;padding:0"></iframe><input type="hidden" name="jsonp" value="help_modal.evaluate_response"> <input type="hidden" name="support_type" id="support_form_support_type" value="support"> <input type="hidden" name="form_key" id="support_form_form_key" value="' + (null == (__t = formKey) ? "" : __t) + '"> ', languageNotice && (__p += ' <div class="form-group"><div class="group-row"><span class="language-notice">' + (null == (__t = __("Just so you know, we're not yet able to address queries that are written in [language]. You can still use this form to contact our Support team, but you'll need to fill it out in English. Sorry about that, and thanks for your patience.")) ? "" : __t) + "</span></div></div> "), __p += ' <div class="form-group"><div class="group-label"><h3 class="settings_subheading">' + (null == (__t = __("What's going on?")) ? "" : __t) + '</h3></div><div class="group-content"><div class="flat_select attached"> ', preSelectedCategory ? (__p += ' <select aria-label="' + __e(__("Select a category for the problem you are experiencing")) + '" name="subject" id="category" class="category" data-validate-input="dropdown"><option value="' + (null == (__t = __("Category")) ? "" : __t) + '" disabled="disabled">' + (null == (__t = __("Category")) ? "" : __t) + "</option> ", _.each(categories, function(e, t) {
                __p += " ", __p += t === preSelectedCategory ? ' <option value="' + (null == (__t = t) ? "" : __t) + '" selected="selected">' + (null == (__t = __(e)) ? "" : __t) + "</option> " : ' <option value="' + (null == (__t = t) ? "" : __t) + '">' + (null == (__t = __(e)) ? "" : __t) + "</option> ", __p += " "
            }), __p += ' </select><label aria-hidden="true" for="category" class="current_selection">' + (null == (__t = categories[preSelectedCategory]) ? "" : __t) + "</label> ") : (__p += ' <select aria-label="' + __e(__("Select a category for the problem you are experiencing")) + '" name="subject" id="category" class="category" data-validate-input="dropdown" required><option value="' + (null == (__t = __("Category")) ? "" : __t) + '" disabled="disabled" selected="selected">' + (null == (__t = __("Category")) ? "" : __t) + "</option> ", _.each(categories, function(e, t) {
                __p += ' <option value="' + (null == (__t = t) ? "" : __t) + '">' + (null == (__t = __(e)) ? "" : __t) + "</option> "
            }), __p += ' </select><label aria-hidden="true" for="category" class="current_selection">' + (null == (__t = __("Category")) ? "" : __t) + "</label> "), __p += ' <i aria-hidden="true" class="icon"></i></div><textarea aria-label="' + __e(__("Please provide some information about the problem")) + '" class="body" data-validate-input="text" required name="body" cols="30" rows="5" placeholder="' + (null == (__t = __("The more details, the better")) ? "" : __t) + '"></textarea></div></div> ', supportsFileChooser && (__p += ' <div class="form-group"><div class="group-label"><h3 class="settings_subheading">' + (null == (__t = __("Attachment")) ? "" : __t) + '</h3><div class="sub-label">' + (null == (__t = __("Optional")) ? "" : __t) + '</div></div><div class="group-content"><div class="image-upload-input"><input aria-label="' + __e(__("Please upload any screenshots that might be relevant")) + '" id="image-upload" class="image-upload" type="file" name="attachments[]" accept="image/*"><label aria-hidden="true" class="image-upload" for="image-upload"></label></div><div class="image-upload-preview"><img title="' + __e(__("Uploaded image")) + '" src=""> <button aria-label="' + __e(__("Remove image")) + '" class="btn_remove btn-remove-uploaded" data-tooltip="' + (null == (__t = __("Remove image")) ? "" : __t) + '"></button></div></div></div> '), __p += ' <div class="form-group"><div class="group-label"><h3 class="settings_subheading">' + (null == (__t = __("Relevant blog")) ? "" : __t) + '</h3><div id="blog_optional_indicator" class="sub-label">' + __e(__("Optional")) + '</div><div class="sub-label">' + __e(__("Let us know which blog you need help with.")) + '</div></div><div class="group-content"> ', tumblelogs && _.size(tumblelogs) >= 1 ? (__p += ' <div class="flat_select"><select aria-label="' + __e(__("Please select the blog that has the problem, if applicable")) + '" name="support_form_blog" id="tumblelog" class="tumblelog" data-validate-input="dropdown"><option value="" selected="selected">' + (null == (__t = __("None selected")) ? "" : __t) + "</option> ", _.each(tumblelogs, function(e) {
                __p += ' <option value="' + __e(e.name) + '">' + __e(e.name) + "</option> "
            }), __p += ' </select><label aria-hidden="true" for="tumblelog" class="current_selection">' + (null == (__t = __("None selected")) ? "" : __t) + '</label><i aria-hidden="true" class="icon"></i></div> ') : __p += ' <input aria-label="' + __e(__("Please let us know which blog has the problem, if applicable")) + '" id="tumblelog" class="text_field tumblelog" data-validate-input="blog" name="support_form_blog" placeholder="' + __e(__("Blog name")) + '"> ', __p += ' </div></div><div class="form-group"><div class="group-label"><h3 class="settings_subheading">' + __e(__("Account email")) + '</h3><div class="sub-label">' + __e(__("If you have access to it. If not, we can get started with another address.")) + '</div></div><div class="group-content"><input aria-label="' + __e(__("Please provide the email address where we should contact you")) + '" class="text_field" data-validate-input="email" required name="user_email" placeholder="' + (null == (__t = __("Email address")) ? "" : __t) + '" value="' + (null == (__t = email) ? "" : __t) + '"></div></div> ' + (null == (__t = recaptcha) ? "" : __t) + ' <div class="form-group"><button class="chrome big blue right help-form-next" disabled="disabled"><span class="label">' + (null == (__t = __("Next")) ? "" : __t) + '</span><span class="Knight-Rider-loader animate"><span class="Knight-Rider-bar"></span><span class="Knight-Rider-bar"></span><span class="Knight-Rider-bar"></span></span></button></div></form></div>';
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1470: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            with(obj) __p += '<div class="form-container suggestions"><div class="form-header with-border"><h1 class="form-heading">' + (null == (__t = __("Does any of this help?")) ? "" : __t) + '</h1></div><div class="suggestions-list"></div><div class="form-group"><button class="chrome big left help-form-dismiss"> ' + (null == (__t = __("Yep, found it")) ? "" : __t) + ' </button> <button class="chrome big blue right help-form-submit"><span class="label">' + (null == (__t = __("No, send my thing")) ? "" : __t) + '</span><span class="Knight-Rider-loader animate"><span class="Knight-Rider-bar"></span><span class="Knight-Rider-bar"></span><span class="Knight-Rider-bar"></span></span></button></div></div>';
            return __p
        }.toString()).apply(void 0, _values(_imports));
    },
    1471: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            with(obj) __p += '<div class="form-container success"><div class="success-message"><h1 class="message-title"> ' + (null == (__t = __("Got it")) ? "" : __t) + ' </h1><p class="message-text"> ' + (null == (__t = __("Our Support team will be emailing you shortly.")) ? "" : __t) + " <br> " + (null == (__t = __("And thanks for bringing this thing to our attention.")) ? "" : __t) + " </p></div></div>";
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1472: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape,
                __j = Array.prototype.join;
            with(obj) __p += '<div class="error-message"><div class="error-text"> ', errors ? (__p += " ", _.each(errors, function(e) {
                __p += " <div>" + __e(e.error) + "</div> "
            }), __p += " ") : __p += " " + (null == (__t = __("Oops. There was an error. Try again.")) ? "" : __t) + " ", __p += " </div></div>";
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1473: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            with(obj) __p += '<div class="question">' + (null == (__t = question) ? "" : __t) + '</div><div class="answer">' + (null == (__t = answer) ? "" : __t) + "</div>";
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1482: function(e, t, i) {
        "use strict";
        var s = i(1483);
        s.start()
    },
    1483: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(5),
            a = i(136),
            r = i(1467),
            l = i(1484),
            _ = i(1501),
            c = i(1512).HeaderView,
            d = i(1514),
            u = i(1292),
            p = i(180),
            h = n.extend({
                root: "/",
                routes: {
                    register: "register",
                    login: "login",
                    "register/pick-a-name": "pickAname",
                    "openid/connect/register": "openIdConnect",
                    "*default": "register"
                },
                __aboutTumblrChange: function(e) {
                    0 === e ? this.headerView.hideLogo() : this.headerView.showLogo()
                },
                _createAboutTumblr: function(e) {
                    this.isLoggedIn || this.isMobile || (this.aboutTumblr = new l({
                        isLogin: e
                    }).render(), a.on("abouttumblr:change", o.bind(this.__aboutTumblrChange, this)))
                },
                initialize: function() {
                    this.helpForm = new r, this.headerView = new c;
                    var e = s("body");
                    this.isMobile = e.hasClass("is_mobile"), this.isLoggedIn = e.hasClass("logged_in"), !this.isLoggedIn && this.isMobile && (this.mobileAppBanner = new u({
                        type: "download-banner",
                        attachTo: '[prima-component="MobileAppBanner"]'
                    }), this.mobileAppBanner.render())
                },
                register: function() {
                    this._createAboutTumblr(!1), p.bool("discovery_hub_access") && (this.exploreButton = new d({
                        el: s(".signup_forms")
                    }))
                },
                login: function() {
                    this._createAboutTumblr(!0)
                },
                openIdConnect: function() {
                    this.aboutTumblr = new l({
                        isLogin: !1
                    }).render(), a.on("abouttumblr:change", o.bind(this.__aboutTumblrChange, this))
                },
                pickAname: function() {
                    this.suggestedBlogNames = (new _).append()
                }
            });
        e.exports = h
    },
    1484: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(214),
            a = i(136),
            r = i(1485),
            l = n.extend({
                name: "AboutTumblr",
                defaults: {
                    activeSlideIndex: 0
                },
                __logoClick: function(e) {
                    0 !== this.defaults.activeSlideIndex && e.preventDefault(), this.showcaseView.setSection(0)
                },
                __signupClick: function(e) {
                    e.preventDefault(), this.showcaseView.setSection(0)
                },
                __aboutTumblrChange: function(e, t) {
                    this.defaults.activeSlideIndex = e, this.$lastSlideInput.length && 0 !== e && this.$lastSlideInput.val(t)
                },
                initialize: function(e) {
                    this.options = o.extend({}, this.defaults, e), this.$lastSlideInput = s("#about_tumblr_slide"), this.showcaseView = new r({
                        componentData: this.getOwnData()
                    }), this.listenTo(a, "loggedoutheader:logoclick", this.__logoClick), this.listenTo(a, "abouttumblr:change", this.__aboutTumblrChange), this.options.isLogin ? this.listenTo(a, "loggedoutheader:loginclick", this.__signupClick) : this.listenTo(a, "loggedoutheader:signupclick", this.__signupClick)
                },
                render: function() {
                    return this.showcaseView.render(), this
                },
                remove: function() {
                    return this.showcaseView.teardown(), this
                }
            });
        e.exports = l
    },
    1485: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(219),
            a = i(136),
            r = i(181),
            l = i(232),
            _ = i(1486),
            c = i(1488),
            d = i(1499),
            u = n.extend({
                el: ".about-tumblr-showcase",
                defaults: {
                    scrollSpeed: 700
                },
                mixins: [l],
                keycommands: {
                    "keydown:j": "__keydown",
                    "keydown:down": "__keydown",
                    "keydown:k": "__keydown",
                    "keydown:up": "__keydown"
                },
                __navigateTo: function(e) {
                    this.setSection(e)
                },
                __keydown: function(e) {
                    var t = s(e.target);
                    if (!t.is(":input") && !t.hasClass("result_link")) switch (e.which) {
                        case 40:
                        case 74:
                            this.nextSection();
                            break;
                        case 38:
                        case 75:
                            this.previousSection()
                    }
                },
                __resize: function() {
                    this.slideshowHeight = r.rect().windowHeight
                },
                __mousewheel: function(e) {
                    if (e.preventDefault(), e.stopPropagation(), e = e.originalEvent, this.isScrolling) return !1;
                    var t = Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY || -e.detail));
                    return t < 0 ? this.nextSection() : this.previousSection(), !1
                },
                _setUpSections: function() {
                    this.$sections.each(o.bind(function(e, t) {
                        var i = s(t),
                            o = i.data("section"),
                            n = _[o];
                        n ? this.sectionViews[o] = new n({
                            componentData: this.componentData,
                            slideName: o,
                            slideIndex: e
                        }) : this.sectionViews[o] = new c({
                            el: i,
                            componentData: this.componentData,
                            slideName: o,
                            slideIndex: e
                        }), i.css("z-index", this.totalSections - e)
                    }, this))
                },
                _resetScrolling: function() {
                    var e = o.bind(function() {
                        this.isScrolling = !1, this.$el.removeClass("animating")
                    }, this);
                    setTimeout(e, 320)
                },
                _setActiveSection: function() {
                    this.$sections.removeClass("active"), this.$sections.eq(this.activeSectionIndex).addClass("active"), this.activeSectionView && this.activeSectionView.showSlide()
                },
                _unsetActiveSection: function() {
                    this.$el.removeClass("show-" + this.activeSection)
                },
                initialize: function(e) {
                    this.options = o.extend({}, this.defaults, e), this.$html = s("html"), this.$body = s("body"), this.$header = s(".logged-out-header"), this.$logo = s("#logo"), this.$showcase = this.$(".showcase"), this.$sections = this.$(".section"), this.activeSection = "", this.activeSectionIndex = -1, this.activeSectionView = null, this.totalSections = this.$sections.length, this.sectionViews = {}, this.componentData = this.options.componentData, this.slideshowHeight = 1.2 * r.rect().windowHeight, this.activeSlideTimeout = null, this.scrollTimeout = null, this.isScrolling = !1, this.paginationView = new d({
                        slides: this.$sections.map(function() {
                            return s(this).data("section-title")
                        }).get()
                    }), this.listenTo(a, "abouttumblr:navigate", this.__navigateTo), this.listenTo(a, "DOMEventor:flatresize", this.__resize), this.__resize(), this._setUpSections(), this.$el.addClass("ready"), this.$html.addClass("show-about-tumblr")
                },
                nextSection: function() {
                    this.activeSectionIndex < this.totalSections - 1 && this.setSection(this.activeSectionIndex + 1)
                },
                previousSection: function() {
                    this.activeSectionIndex > 0 && this.setSection(this.activeSectionIndex - 1)
                },
                setSection: function(e) {
                    var t = this.$sections.eq(e);
                    e !== this.activeSectionIndex && t.length && (0 !== this.activeSectionIndex && this.activeSectionIndex !== t.length && 0 !== e && e !== t.length || this.$el.addClass("animating"), this._unsetActiveSection(), this.activeSection = t.data("section"), this.activeSectionIndex = e, this.activeSectionView = this.sectionViews[this.activeSection], this.isScrolling = !0, this.paginationView.update(e), this.$sections.removeClass("old-hat").filter(":lt(" + this.activeSectionIndex + ")").addClass("old-hat"), this.activeSlideTimeout && (clearTimeout(this.activeSlideTimeout), this.activeSlideTimeout = null), this.scrollTimeout && (clearTimeout(this.scrollTimeout), this.scrollTimeout = null), this.activeSlideTimeout = setTimeout(o.bind(function() {
                        this._resetScrolling(), this._setActiveSection()
                    }, this), this.options.scrollSpeed), a.trigger("abouttumblr:change", this.activeSectionIndex, this.activeSection), o.delay(o.bind(function() {
                        this.$el.addClass("show-" + this.activeSection)
                    }, this), 50))
                },
                render: function() {
                    if (!this.$sections.length) return this;
                    this.$el.append(this.paginationView.render().el), this.setSection(0), this.paginationView.update(0);
                    var e = o.throttle(o.bind(this.__mousewheel, this), 1e3, {
                        trailing: !1
                    });
                    return this.$el.on("wheel mousewheel", e), a.trigger("abouttumblr:start", this.activeSectionIndex), this
                },
                teardown: function() {
                    return a.trigger("abouttumblr:remove"), o.each(this.sectionViews, function(e) {
                        e.remove()
                    }), this.$html.removeClass("show-about-tumblr"), this.$logo.off(".about-tumblr"), this.$el.off(), this.remove(), this
                }
            });
        e.exports = u
    },
    1486: function(e, t, i) {
        "use strict";
        "use script";
        e.exports = {
            about: i(1487),
            blogs: i(1489),
            create: i(1491),
            dashboard: i(1493),
            login: i(1496),
            welcome: i(1497)
        }
    },
    1487: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(235),
            a = i(1488),
            r = a.extend({
                el: ".about-section",
                defaults: {
                    introDelay: 500,
                    introDuration: 1500
                },
                iconAnimationPositions: [{
                    selector: ".audio-a",
                    x: "100%",
                    y: "90%"
                }, {
                    selector: ".audio-b",
                    x: "-30%",
                    y: "-70%"
                }, {
                    selector: ".chat-a",
                    x: "80%",
                    y: "-10%"
                }, {
                    selector: ".chat-b",
                    x: "0",
                    y: "-70%"
                }, {
                    selector: ".chat-c",
                    x: "-110%",
                    y: "90%"
                }, {
                    selector: ".follow-a",
                    x: "140%",
                    y: "-50%"
                }, {
                    selector: ".follow-b",
                    x: "130%",
                    y: "0"
                }, {
                    selector: ".follow-c",
                    x: "-60%",
                    y: "40%"
                }, {
                    selector: ".like-a",
                    x: "10%",
                    y: "-70%"
                }, {
                    selector: ".like-b",
                    x: "-80%",
                    y: "10%"
                }, {
                    selector: ".like-c",
                    x: "-50%",
                    y: "90%"
                }, {
                    selector: ".link-a",
                    x: "60%",
                    y: "-100%"
                }, {
                    selector: ".link-b",
                    x: "-60%",
                    y: "0"
                }, {
                    selector: ".photo-a",
                    x: "40%",
                    y: "140%"
                }, {
                    selector: ".photo-b",
                    x: "-150%",
                    y: "-30%"
                }, {
                    selector: ".quote-a",
                    x: "140%",
                    y: "10%"
                }, {
                    selector: ".quote-b",
                    x: "-125%",
                    y: "20%"
                }, {
                    selector: ".reblog-a",
                    x: "-60%",
                    y: "-100%"
                }, {
                    selector: ".reblog-b",
                    x: "25%",
                    y: "100%"
                }, {
                    selector: ".text-a",
                    x: "120%",
                    y: "-15%"
                }, {
                    selector: ".video-a",
                    x: "70%",
                    y: "-110%"
                }, {
                    selector: ".video-b",
                    x: "-80%",
                    y: "-90%"
                }],
                initialize: function(e) {
                    a.prototype.initialize.call(this, e), this.$graphic = this.$(".about-graphic")
                },
                showSlide: function() {
                    return this.$graphic.length && o.forEach(this.iconAnimationPositions, o.bind(function(e) {
                        var t = s(e.selector).css("opacity", 0);
                        n.animate(t, "stop"), n.animate(t, {
                            opacity: 1,
                            translateX: [0, e.x],
                            translateY: [0, e.y]
                        }, {
                            delay: this.options.introDelay,
                            duration: this.options.introDuration + 300 * Math.random(),
                            easing: "easeOutQuart"
                        })
                    }, this)), a.prototype.showSlide.call(this, arguments)
                }
            });
        e.exports = r
    },
    1488: function(e, t, i) {
        "use strict";
        var s = i(3),
            o = i(219),
            n = o.extend({
                initialize: function(e) {
                    this.options = s.extend({}, this.defaults, e), this.componentData = this.options.componentData, this.slideName = this.options.slideName, this.slideIndex = this.options.slideIndex, this.$wrapper = this.$(".section-wrapper"), this.render()
                },
                render: function() {
                    var e = this.$wrapper.length ? this.$wrapper : this.$el;
                    return this.template && s.has(this.componentData, this.slideName) && e.append(this.template(this.componentData[this.slideName])), this
                },
                showSlide: function() {}
            });
        e.exports = n
    },
    1489: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(1488),
            a = i(1490),
            r = n.extend({
                el: ".blogs-section",
                template: a,
                initialize: function(e) {
                    n.prototype.initialize.call(this, e)
                },
                render: function() {
                    return s.ajax({
                        url: "/about_tumblr/slide_data/blogs",
                        success: o.bind(function(e) {
                            this.componentData.blogs = e.response, n.prototype.render.call(this)
                        }, this)
                    }), this
                }
            });
        e.exports = r
    },
    1490: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape,
                __j = Array.prototype.join;
            with(obj)
            "undefined" != typeof posts && (__p += ' <div class="blogs-graphic"><div class="blogs-post-column"> ', _.each(posts, function(e, t) {
                __p += " ", t > 0 && t % 3 === 0 && (__p += ' </div><div class="blogs-post-column"> '), __p += ' <div class="blogs-post"><div class="post-top"><div class="ui-avatar" style="background-image:url(' + __e(e.avatar) + ')"></div><a class="ui-username" href="' + __e(e.post_url) + '" target="_blank">' + __e(e.tumblelog_name) + '</a></div><img class="post-image" src="' + __e(e.post_image) + '" alt=""><div class="post-bottom"><div class="ui-notes">' + __e(e.notes) + '</div><div class="post_controls"><div class="post_controls_inner"><div class="post_control post-control-icon share"></div><div class="post_control post-control-icon reblog"></div><div class="post_control post-control-icon like"></div></div></div></div></div> '
            }), __p += " </div></div> ");
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1491: function(e, t, i) {
        "use strict";
        var s = i(1488),
            o = i(1492),
            n = s.extend({
                el: ".create-section",
                template: o,
                render: function() {
                    return this.$wrapper.prepend(o()), this
                }
            });
        e.exports = n
    },
    1492: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="create-graphic"><div class="post-icon text-icon"><span class="icon-label">' + __e(__("Text")) + '</span></div><div class="post-icon photo-icon"><span class="icon-label">' + __e(__("Photo")) + '</span></div><div class="post-icon quote-icon"><span class="icon-label">' + __e(__("Quote")) + '</span></div><div class="post-icon link-icon"><span class="icon-label">' + __e(__("Link")) + '</span></div><div class="post-icon chat-icon"><span class="icon-label">' + __e(__("Chat")) + '</span></div><div class="post-icon audio-icon"><span class="icon-label">' + __e(__("Audio")) + '</span></div><div class="post-icon video-icon"><span class="icon-label">' + __e(__("Video")) + "</span></div></div>";
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1493: function(e, t, i) {
        "use strict";
        var s = i(3),
            o = i(1488),
            n = i(1494),
            a = i(1495),
            r = o.extend({
                el: ".dashboard-section",
                template: n,
                render: function() {
                    o.prototype.render.call(this);
                    var e = this.componentData[this.slideName];
                    if (s.isEmpty(e)) return this;
                    var t = this.$(".post-top-wrapper"),
                        i = this.$(".post-bottom-wrapper");
                    return t.length && !s.isEmpty(e.post_top) && t.html(a(e.post_top)), i.length && !s.isEmpty(e.post_bottom) && i.html(a(e.post_bottom)), this
                }
            });
        e.exports = r
    },
    1494: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape,
                __j = Array.prototype.join;
            with(obj) __p += '<div class="dashboard-graphic"> ', "undefined" != typeof post_form && (__p += ' <div class="post_container new_post_buttons_container" id="new_post_buttons"><div class="new_post_buttons post post_full is_mine with_avatar new_post" id="new_post"><div class="post_buttons clearfix"><a href="#" class="new_post_label"><i class="icon_post_text"></i> <span class="new_post_label_text">' + __e(__("Text")) + '</span></a><a href="#" class="new_post_label"><i class="icon_post_photo"></i> <span class="new_post_label_text">' + __e(__("Photo")) + '</span></a><a href="#" class="new_post_label"><i class="icon_post_quote"></i> <span class="new_post_label_text">' + __e(__("Quote")) + '</span></a><a href="#" class="new_post_label"><i class="icon_post_link"></i> <span class="new_post_label_text">' + __e(__("Link")) + '</span></a><a href="#" class="new_post_label"><i class="icon_post_chat"></i> <span class="new_post_label_text">' + __e(__("Chat")) + '</span></a><a href="#" class="new_post_label"><i class="icon_post_audio"></i> <span class="new_post_label_text">' + __e(__("Audio")) + '</span></a><a href="#" class="new_post_label"><i class="icon_post_video"></i> <span class="new_post_label_text">' + __e(__("Video")) + '</span></a></div><div class="post_avatar"><div class="post_avatar_link" style="background-image:url(\'' + __e(post_form.avatar) + '\')"><img class="post_avatar_image" src="' + __e(post_form.avatar) + '" height="64" width="64"></div></div></div></div> '), __p += ' <div class="post-top-wrapper"></div> ', "undefined" != typeof notification && (__p += ' <div class="notification single_notification alt notification_like can_ignore"><div class="notification_inner clearfix"><div class="notification_sentence"><div class="hide_overflow"> ' + (null == (__t = sprintf(__("%1$s liked your photo"), '<span class="username">' + notification.username + "</span>")) ? "" : __t) + ' </div></div></div><div class="control avatar_frame"><img alt="" class="avatar" src="' + __e(notification.avatar) + '"></div><div class="control notification_right"><div class="preview_frame"><img src="' + __e(notification.preview) + '"></div></div></div> '), __p += ' <div class="post-bottom-wrapper"></div></div>';
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1495: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="post post_full"><div class="post_avatar faded_sub_avatar"><div class="post_avatar_link" style="background-image: url(' + __e(avatar) + ')"><img class="post_avatar_image" src="' + __e(avatar) + '" width="64" height="64"></div></div><div class="post_wrapper"><div class="post_header"><div class="post_info"><span class="post_info_link">' + __e(username) + '</span></div></div><div class="post_content clearfix"><div class="post_content_inner clearfix"><div class="post_media"><img class="post_media_photo image" alt="" src="' + __e(post_image) + '"></div></div></div><div class="post_footer clearfix"><div class="post_notes"><div class="post_notes_inner"><div class="post_notes_label note_count"><span class="note_link_current">' + __e(notes) + '</span></div></div></div><div class="post_controls"><div class="post_controls_inner"><div class="post_control post-control-icon share"></div><div class="post_control post-control-icon reblog"></div><div class="post_control post-control-icon like"></div></div></div></div></div></div>';
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1496: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(136),
            n = i(1488),
            a = n.extend({
                el: ".login-section",
                events: {
                    "click .about-tumblr-btn": "__aboutButtonClick"
                },
                __aboutButtonClick: function(e) {
                    e.preventDefault(), o.trigger("abouttumblr:navigate", 1)
                },
                initialize: function(e) {
                    n.prototype.initialize.call(this, e), this.$emailInput = s("#signup_email")
                },
                showSlide: function() {
                    this.$emailInput.attr("disabled") || this.$emailInput.attr("readonly") || this.$emailInput.focus()
                }
            });
        e.exports = a
    },
    1497: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(1488),
            n = i(1498),
            a = o.extend({
                el: ".welcome-section",
                template: n,
                initialize: function(e) {
                    o.prototype.initialize.call(this, e), this.$emailInput = s("#signup_email")
                },
                showSlide: function() {
                    this.$emailInput.attr("disabled") || this.$emailInput.attr("readonly") || this.$emailInput.focus()
                }
            });
        e.exports = a
    },
    1498: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape,
                __j = Array.prototype.join;
            with(obj)
            "undefined" != typeof post && (__p += ' <div class="fullscreen_post_bg" style="background-image:url(' + __e(post.post_image) + ')"></div><div class="fullscreen_post_footer"><div class="fullscreen_post_posted_by show"><a href="' + __e(post.tumblelog_url) + '" target="_blank" rel="nofollow" title="' + __e(__("Posted by")) + " " + __e(post.tumblelog_name) + '">' + __e(__("Posted by")) + "&nbsp;<strong>" + __e(post.tumblelog_name) + '</strong></a><a href="' + __e(post.tumblelog_url) + '" target="_blank" rel="nofollow" title="' + __e(post.tumblelog_name) + '" class="post_avatar root_tumblelog" style="background-image:url(' + __e(post.avatar) + ')"><img src="' + __e(post.avatar) + '" alt="' + __e(post.tumblelog_name) + '"></a></div></div> ');
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1499: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(219),
            a = i(136),
            r = i(1500),
            l = n.extend({
                className: "showcase-pagination",
                defaults: {
                    slides: []
                },
                events: {
                    "click .dot": "__dotClick"
                },
                template: r,
                __dotClick: function(e) {
                    e.preventDefault();
                    var t = s(e.currentTarget);
                    t.hasClass("active") || (this.$dots.removeClass("active"), t.addClass("active"), a.trigger("abouttumblr:navigate", t.index()))
                },
                initialize: function(e) {
                    this.options = o.extend({}, this.defaults, e), this.$dots = s()
                },
                render: function() {
                    return this.$el.html(this.template({
                        slides: this.options.slides
                    })), this.$dots = this.$(".dot"), this
                },
                update: function(e) {
                    this.$dots.removeClass("active"), this.$dots.eq(e).addClass("active")
                }
            });
        e.exports = l
    },
    1500: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape,
                __j = Array.prototype.join;
            with(obj) _.each(slides, function(e) {
                __p += ' <div class="dot" title="' + __e(e) + '"></div> '
            });
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1501: function(e, t, i) {
        "use strict";
        var s = i(214),
            o = i(1502),
            n = s.extend({
                name: "SuggestedBlogNames",
                selector: "body",
                autoAppend: !0,
                initialize: function() {
                    this.view = new o({
                        randomUsernames: this.data.random_username_suggestions,
                        formKey: this.data.formKey,
                        maxUsernameLength: this.data.max_username_length
                    })
                }
            });
        e.exports = n
    },
    1502: function(e, t, i) {
        "use strict";
        var s = i(226),
            o = i(1503),
            n = i(1507),
            a = i(969),
            r = i(1511),
            l = s.extend({
                className: "fill_container center_wrap",
                template: r,
                initialize: function(e) {
                    this.formComponent = new o(e), this.formContainer = this.subviews.formContainer = this.formComponent.view, e.mobileMode || (this.namePickerComponent = new n(e), this.namePicker = this.subviews.namePicker = this.namePickerComponent.view), this.subviews.confetti = new a({
                        amount: 30,
                        autoParty: !0,
                        colors: ["#D95E40", "#F2992E", "#529ECC", "#A77DC2", "#748089", "#56BC8A"],
                        speed: .3
                    }), e.mobileMode || (this.listenTo(this.formContainer, "form:focus", this.onFocusListener), this.listenTo(this.formContainer, "form:username:empty", this.displayNamePicker), this.listenTo(this.formContainer, "form:username:notempty", this.hideNamePicker), this.listenTo(this.formContainer, "form:list:usernames", this.refreshNamePicker), this.listenTo(this.namePicker.view, "namePicker:clickItem", this.onClickUsername))
                },
                refreshNamePicker: function(e) {
                    this.namePicker.view.refreshView(e), this.displayNamePicker()
                },
                onFocusListener: function() {
                    this.formContainer.isUsernameEmpty() && (this.displayNamePicker(), this.formContainer.insertNameInField(this.namePicker.view.getFirstName()))
                },
                displayNamePicker: function() {
                    this.namePicker.show()
                },
                hideNamePicker: function() {
                    this.namePicker.hide()
                },
                onClickUsername: function(e) {
                    this.hideNamePicker(), this.formContainer.insertNameInField(e)
                }
            });
        e.exports = l
    },
    1503: function(e, t, i) {
        "use strict";
        var s = i(214),
            o = i(1504),
            n = s.extend({
                name: "FormComponent",
                initialize: function(e) {
                    this.view = new o(e)
                }
            });
        e.exports = n
    },
    1504: function(e, t, i) {
        "use strict";
        var s = i(226),
            o = i(1505),
            n = i(8),
            a = i(1506),
            r = s.extend({
                className: "form",
                template: o,
                events: {
                    submit: "submitForm",
                    "focus .form-control": "onInputFocus",
                    "keyup .form-control": "checkKey",
                    "click #form-submit": "submitToValidation"
                },
                initialize: function(e) {
                    this.formKey = e.formKey, this.maxUsernameLength = e.maxUsernameLength, this.model = new a, this.listenTo(this.model, "form:state", this.stateForm)
                },
                submitForm: function(e) {
                    e.preventDefault()
                },
                submitToValidation: function() {
                    this.$errorTag.css("display", "none");
                    var e = {};
                    e.username = this.getUsernameVal(), e.formKey = this.formKey, this.model.trigger("form:validation", e)
                },
                onInputFocus: function() {
                    this.trigger("form:focus")
                },
                getUsernameVal: function() {
                    return this.$username.val()
                },
                isUsernameEmpty: function() {
                    return !this.$username.val()
                },
                cacheSelectors: function() {
                    this.$username = this.$("#signup_username"), this.$form = this.$("#form"), this.$errorTag = n("<div>", {
                        class: "error"
                    }), this.$submitButton = this.$(".chrome")
                },
                appendError: function(e) {
                    "undefined" != typeof e && (this.$errorTag.html(e), this.$errorTag.insertBefore(this.$submitButton).css("display", "block"))
                },
                stateForm: function(e) {
                    e.reject_reason && this.appendError(e.reject_reason), e.usernames && this.trigger("form:list:usernames", e.usernames)
                },
                insertNameInField: function(e) {
                    this.$username.val(e)
                },
                render: function() {
                    return this.$el.html(this.template({
                        formKey: this.formKey,
                        maxUsernameLength: this.maxUsernameLength
                    })), this.cacheSelectors(), this
                },
                checkKey: function(e) {
                    13 === e.which ? this.submitToValidation() : this.isUsernameEmpty() ? this.trigger("form:username:empty") : this.trigger("form:username:notempty")
                },
                afterRender: function() {
                    this.delegateEvents()
                }
            });
        e.exports = r
    },
    1505: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div id="form-container" class="form-panel clearfix"><form class="form" method="POST" id="form" action="/register/validate-blogname"><input area-hidden="true" type="hidden" id="form_key" name="form_key" value="' + __e(formKey) + '"><div class="input-container"><div class="form-row username"><input tabindex="1" aria-label="' + __e(__("Please enter a blog name")) + '" class="form-control" type="text" name="tumblelog[name]" data-js-textinput placeholder="' + __e(__("Username")) + '" id="signup_username" maxlength="' + __e(maxUsernameLength) + '" autocorrect="off" autocapitalize="off" autofocus="autofocus"></div></div><button tabindex="2" class="chrome big touchy blue" id="form-submit"><span class="account-btn">' + __e(__("Continue")) + "</span></button></form></div>";
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1506: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(3),
            n = i(185),
            a = n.extend({
                url: "/register/validate-blogname",
                defaults: {
                    username: "",
                    actionUrl: "",
                    usernameValid: !1,
                    errorMessage: ""
                },
                initialize: function() {
                    this.listenTo(this, "form:validation", this.validation)
                },
                validation: function(e) {
                    var t = {};
                    this.username = t.username = e.username, this.formKey = e.formKey, t.username.length && (this.pw_xhr && this.pw_xhr.abort(), this.pw_xhr = s.ajax({
                        url: this.url,
                        dataType: "json",
                        type: "POST",
                        withFormKey: !0,
                        data: t
                    }), this.pw_xhr.done(o.bind(function(e) {
                        this.stateForm(e.response), delete this.pw_xhr
                    }, this)))
                },
                stateForm: function(e) {
                    e.reject_reason ? (this.set("usernameValid", !1), this.set("errorMessage", e.reject_reason)) : this.save(), this.trigger("form:state", e)
                },
                save: function() {
                    var e = {};
                    e["tumblelog[name]"] = this.username, e.form_key = this.formKey, e.page = "tumblelog", this.username.length && (this.save_xhr && this.save_xhr.abort(), this.save_xhr = s.ajax({
                        url: "/settings/save",
                        dataType: "json",
                        type: "POST",
                        withFormKey: !0,
                        data: e
                    }), this.save_xhr.done(o.bind(function(e) {
                        window.location.href = "/getting_to_know_tumblr", delete this.save_xhr
                    }, this)))
                }
            });
        e.exports = a
    },
    1507: function(e, t, i) {
        "use strict";
        var s = i(214),
            o = i(1508),
            n = s.extend({
                name: "NamePickerComponent",
                initialize: function(e) {
                    this.view = new o(e)
                }
            });
        e.exports = n
    },
    1508: function(e, t, i) {
        "use strict";
        var s = i(8),
            o = i(226),
            n = i(1509),
            a = o.extend({
                className: "popover--name-picker info_popover popover_gradient popover",
                initialize: function(e) {
                    this.view = new n(e)
                },
                render: function() {
                    return this.element = this.$el, this.$wrapper = s("<div />").addClass("popover-inner popover_inner").appendTo(this.$el), this.$wrapper.html(this.view.render().$el), this
                },
                getView: function() {
                    return this.view
                },
                show: function() {
                    this.element.addClass("shown")
                },
                hide: function() {
                    this.element.removeClass("shown")
                }
            });
        e.exports = a
    },
    1509: function(e, t, i) {
        "use strict";
        var s = i(226),
            o = i(8),
            n = i(3),
            a = i(1510),
            r = s.extend({
                tagName: "ul",
                template: a,
                events: {
                    "click [data-js-username]": "clickOnItem"
                },
                initialize: function(e) {
                    n.extend(this.attributes, n.pick(e, n.keys(this.defaults))), this.randomUsernames = e.randomUsernames
                },
                render: function() {
                    return this.$el.html(this.template({
                        randomUsernames: this.randomUsernames
                    })), this
                },
                refreshView: function(e) {
                    this.randomUsernames = e, this.render()
                },
                clickOnItem: function(e) {
                    var t = o(e.currentTarget),
                        i = t.attr("data-js-username");
                    e.preventDefault(), n.isEmpty(i) || this.trigger("namePicker:clickItem", i)
                },
                getFirstName: function() {
                    return this.randomUsernames[0]
                },
                afterRender: function() {
                    this.delegateEvents()
                }
            });
        e.exports = r
    },
    1510: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape,
                __j = Array.prototype.join;
            with(obj) _.each(randomUsernames, function(e) {
                __p += ' <li><a href="#" data-js-username="' + __e(e) + '">' + __e(e) + "</a></li> "
            });
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1511: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="suggested-blog-name-container center_item"><div class="confetti-wrapper"><div data-subview="confetti"></div></div><div class="form-header"><h1 class="form-heading">' + __e(__("Welcome to Tumblr")) + '</h1><div class="form-description"><p>' + __e(__("Real quick - what should we call you?")) + "</p><p>" + __e(__("You can change it any time.")) + '</p></div></div><div data-subview="formContainer"></div><div class="center_item name-picker-container" data-subview="namePicker"></div></div>';
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1512: function(e, t, i) {
        "use strict";
        e.exports = {
            HeaderView: i(1513)
        }
    },
    1513: function(e, t, i) {
        "use strict";
        var s = i(3),
            o = i(219),
            n = i(136),
            a = o.extend({
                el: ".logged-out-header",
                events: {
                    "click .logo": "__logoClick",
                    "click .login-button": "__loginButtonClick",
                    "click .signup-button": "__signupButtonClick"
                },
                __logoClick: function(e) {
                    n.trigger("loggedoutheader:logoclick", e)
                },
                __loginButtonClick: function(e) {
                    n.trigger("loggedoutheader:loginclick", e)
                },
                __signupButtonClick: function(e) {
                    n.trigger("loggedoutheader:signupclick", e)
                },
                initialize: function(e) {
                    this.options = s.extend({}, this.defaults, e)
                },
                hideLogo: function() {
                    this.$el.addClass("hide-logo")
                },
                showLogo: function() {
                    this.$el.removeClass("hide-logo")
                }
            });
        e.exports = a
    },
    1514: function(e, t, i) {
        "use strict";
        e.exports = i(1515)
    },
    1515: function(e, t, i) {
        "use strict";
        var s = i(3),
            o = i(8),
            n = i(219),
            a = i(1516),
            r = n.extend({
                events: {
                    "click .explore": "onClick"
                },
                keyFields: ["#signup_email", "#signup_password", "#signup_username"],
                initialize: function(e) {
                    s.forEach(this.keyFields, function(e) {
                        o(e).on("keyup", this.boundInputChanged)
                    }, this), this.render()
                },
                remove: function() {
                    s.forEach(this.keyFields, function(e) {
                        o(e).off("keyup", this.boundInputChanged)
                    }, this), n.prototype.remove.apply(this)
                },
                render: function() {
                    this.$el.append(a())
                },
                hasEnteredInfo: function() {
                    return s.some(this.keyFields, function(e) {
                        if (o(e).val()) return !0
                    })
                }
            });
        e.exports = r
    },
    1516: function(module, exports, __webpack_require__) {
        var _ = __webpack_require__(3),
            _imports = "undefined" != typeof _ ? _.templateSettings.imports : {},
            _keys = _.keys,
            _values = _.values;
        module.exports = Function(_keys(_imports), "return " + function(obj) {
            obj || (obj = {});
            var __t, __p = "";
            with(obj) __p += '<a class="explore" href="/explore"><span class="explore_icon"></span>' + (null == (__t = __("Here's what's trending")) ? "" : __t) + "</a>";
            return __p
        }.toString()).apply(void 0, _values(_imports))
    },
    1517: function(e, t) {},
    1518: function(e, t) {},
    1519: function(e, t) {},
    1520: function(e, t) {},
    1521: function(e, t) {}
});