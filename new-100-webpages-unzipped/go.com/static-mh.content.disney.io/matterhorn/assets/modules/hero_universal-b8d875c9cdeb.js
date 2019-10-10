Whiskers("modules.hero_universal", {
        code: function(e, t, n) {
            "use strict";
            var r = this;
            return r.b(n = n || ""), r.b('<div class="bound"> <div class="carousel'), r.s(r.f("identity", e, t, 1), e, t, 0, 53, 100, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(" identity"), n.s(n.f("hasThumbs", e, t, 1), e, t, 1, 0, 0, "") || n.b(" no-thumbs")
            }), e.pop()), r.b(" "), r.b(r.v(r.f("heroSize", e, t, 0))), r.b(' universal"> <ul class="slides"> '), r.s(r.f("slides", e, t, 1), e, t, 0, 170, 195, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(" <li>"), n.b(n.rp("<heroSlide0", e, t, "")), n.b("</li> ")
            }), e.pop()), r.b(" </ul> </div> "), r.s(r.f("identity", e, t, 1), e, t, 0, 233, 260, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(n.rp("<identityOverlayPartial1", e, t, ""))
            }), e.pop()), r.b(" </div>"), r.fl()
        },
        partials: {
            "<heroSlide0": {
                name: "heroSlide",
                partials: {},
                subs: {}
            },
            "<identityOverlayPartial1": {
                name: "identityOverlayPartial",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("modules.rich_image", {
        code: function(e, t, n) {
            "use strict";
            var r = this;
            return r.b(n = n || ""), r.s(r.f("image_data", e, t, 1), e, t, 0, 15, 1153, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(' <div class="bound"> '), n.b(" "), n.s(n.f("link_data", e, t, 1), e, t, 0, 99, 312, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' <a href="'), n.b(n.v(n.f("href", e, t, 0))), n.b('" title="'), n.b(n.v(n.f("title", e, t, 0))), n.b('" '), n.s(n.f("event_value", e, t, 1), e, t, 0, 153, 186, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b('data-event-link="'), n.b(n.v(n.f("event_value", e, t, 0))), n.b('"')
                    }), e.pop()), n.s(n.f("nrt_promotion_id", e, t, 1), e, t, 0, 223, 269, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(' data-nrt-promotion-id="'), n.b(n.v(n.f("nrt_promotion_id", e, t, 0))), n.b('" ')
                    }), e.pop()), n.b(n.rp("<href_attributes0", e, t, "")), n.b("> ")
                }), e.pop()), n.b(" "), n.b(" "), n.s(n.f("aspect_ratio_pct", e, t, 1), e, t, 0, 464, 546, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('<div class="aspect background-image" style="padding-bottom:'), n.b(n.v(n.f("aspect_ratio_pct", e, t, 0))), n.b(';">')
                }), e.pop()), n.b(" "), n.s(n.f("noscript", e, t, 1), e, t, 1, 0, 0, "") || (n.b('<img class="no-src'), n.s(n.f("aspect_ratio_pct", e, t, 1), e, t, 1, 0, 0, "") || n.b(" relative"), n.b('" data-src="'), n.b(n.v(n.f("src", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('">')), n.b(" "), n.s(n.f("noscript", e, t, 1), e, t, 0, 717, 776, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('<noscript><img src="'), n.b(n.v(n.f("src", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('"></noscript>')
                }), e.pop()), n.b(" "), n.s(n.f("aspect_ratio_pct", e, t, 1), e, t, 0, 811, 817, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("</div>")
                }), e.pop()), n.b(" "), n.b(" "), n.s(n.f("link_data", e, t, 1), e, t, 0, 884, 888, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("</a>")
                }), e.pop()), n.b(" "), n.s(n.f("dismissible", e, t, 1), e, t, 0, 919, 1129, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' <a class="dismiss-contain"> <div class="dismiss" href="#" '), n.s(n.f("link_data", e, t, 1), e, t, 0, 992, 1054, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(' title="'), n.b(n.v(n.d("link_data.title", e, t, 0))), n.b('" data-title="'), n.b(n.v(n.d("link_data.title", e, t, 0))), n.b('" ')
                    }), e.pop()), n.b("> "), n.b(" <span>Close</span> </div> </a> ")
                }), e.pop()), n.b(" </div> ")
            }), e.pop()), r.fl()
        },
        partials: {
            "<href_attributes0": {
                name: "href_attributes",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("partials.hero_slide", {
        code: function(e, t, n) {
            "use strict";
            var r = this;
            return r.b(n = n || ""), r.b('<div class="branding"> <div class="scaler"></div> '), r.s(r.f("overlayLeft", e, t, 1), e, t, 0, 66, 144, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(' <div class="left-overlay overlay"> <img src="'), n.b(n.v(n.f("overlayLeft", e, t, 0))), n.b('" alt=""> </div> ')
            }), e.pop()), r.b(" "), r.s(r.f("overlayRight", e, t, 1), e, t, 0, 178, 258, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(' <div class="right-overlay overlay"> <img src="'), n.b(n.v(n.f("overlayRight", e, t, 0))), n.b('" alt=""> </div> ')
            }), e.pop()), r.b(" "), r.s(r.f("href", e, t, 1), e, t, 0, 285, 318, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b('<a href="'), n.b(n.v(n.f("href", e, t, 0))), n.b('" tabindex="-1">')
            }), e.pop()), r.b(' <div class="background"> '), r.s(r.f("slide_image", e, t, 1), e, t, 0, 369, 483, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(' <img src="'), n.b(n.v(n.f("slide_image", e, t, 0))), n.b('" '), n.s(n.f("event_value", e, t, 1), e, t, 0, 413, 446, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('data-event-link="'), n.b(n.v(n.f("event_value", e, t, 0))), n.b('"')
                }), e.pop()), n.b(' alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('"> ')
            }), e.pop()), r.b(" "), r.s(r.f("noscript", e, t, 1), e, t, 0, 513, 573, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b('<noscript><img src="'), n.b(n.v(n.f("hero", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('"></noscript>')
            }), e.pop()), r.b(" </div> "), r.s(r.f("show_data", e, t, 1), e, t, 0, 608, 1340, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(" "), n.s(n.f("section", e, t, 1), e, t, 0, 621, 665, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('<h2 class="channel_section">'), n.b(n.v(n.f("section", e, t, 0))), n.b("</h2>")
                }), e.pop()), n.b(' <div class="channel_mini_hero"> <div class="featured_channel_img"> <img src="'), n.b(n.v(n.f("asset_logo_image", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('"> <p>'), n.b(n.v(n.f("watch_message", e, t, 0))), n.b("</p> </div> "), n.s(n.f("featured_channel_shortDesc", e, t, 1), e, t, 0, 860, 1042, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(' <a href="'), n.b(n.v(n.f("href", e, t, 0))), n.b('" class="featured_link"> <div class="featured_channel"> <img src="'), n.b(n.v(n.f("featured_content_image", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('"> <p>'), n.b(n.v(n.f("featured_channel_shortDesc", e, t, 0))), n.b("</p> </div> </a> ")
                }), e.pop()), n.b(" "), n.s(n.f("featured_channel_shortDesc", e, t, 1), e, t, 1, 0, 0, "") || n.b('<div class="no_desc_box"></div>'), n.b(' <div class="cds_box '), n.s(n.f("featured_channel_shortDesc", e, t, 1), e, t, 1, 0, 0, "") || n.b("notxt"), n.s(n.f("featured_channel_shortDesc", e, t, 1), e, t, 0, 1286, 1293, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" hastxt")
                }), e.pop()), n.b('"></div> </div> ')
            }), e.pop()), r.b(" "), r.s(r.f("animated", e, t, 1), e, t, 0, 1368, 1423, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.s(n.f("noVideoSupport", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.rp("<videoPartial0", e, t, ""))
            }), e.pop()), r.b(" "), r.s(r.f("href", e, t, 1), e, t, 0, 1446, 1450, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b("</a>")
            }), e.pop()), r.b(" </div> "), r.s(r.f("show_data", e, t, 1), e, t, 1, 0, 0, "") || (r.b(' <div class="content '), r.b(r.v(r.f("contentPosition", e, t, 0))), r.b('"> <div class="logo"> '), r.s(r.f("featured_content_image", e, t, 1), e, t, 0, 1570, 1654, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(' <a href="'), n.b(n.v(n.f("href", e, t, 0))), n.b('"> <img src="'), n.b(n.v(n.f("featured_content_image", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('"> </a> ')
            }), e.pop()), r.b(' <a href="'), r.b(r.v(r.f("href", e, t, 0))), r.b('" class="heading" tabindex="-1"> <h2 class="'), r.b(r.v(r.f("editorialColor", e, t, 0))), r.b('" '), r.s(r.f("headerColor", e, t, 1), e, t, 0, 1779, 1810, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b('style="color: '), n.b(n.v(n.f("headerColor", e, t, 0))), n.b(';"')
            }), e.pop()), r.b(">"), r.b(r.v(r.f("section", e, t, 0))), r.b('</h2> <h3 class="'), r.b(r.v(r.f("editorialColor", e, t, 0))), r.b('">'), r.b(r.v(r.f("featured_channel_shortDesc", e, t, 0))), r.b("</h3> </a> "), r.s(r.f("buttons", e, t, 1), e, t, 0, 1928, 2592, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(' <a href="'), n.b(n.v(n.f("href", e, t, 0))), n.b('" class="button large blue ada-el-focus" style="background-color: '), n.b(n.v(n.f("bg_top_color", e, t, 0))), n.b("; background-image: -webkit-gradient(linear, left top, left bottom, from("), n.b(n.v(n.f("bg_bottom_color", e, t, 0))), n.b("), to("), n.b(n.v(n.f("bg_top_color", e, t, 0))), n.b(")); background-image: -webkit-linear-gradient(top, "), n.b(n.v(n.f("bg_bottom_color", e, t, 0))), n.b(", "), n.b(n.v(n.f("bg_top_color", e, t, 0))), n.b("); background-image: -moz-linear-gradient(top, "), n.b(n.v(n.f("bg_bottom_color", e, t, 0))), n.b(", "), n.b(n.v(n.f("bg_top_color", e, t, 0))), n.b("); background-image: -o-linear-gradient(top, "), n.b(n.v(n.f("bg_bottom_color", e, t, 0))), n.b(", "), n.b(n.v(n.f("bg_top_color", e, t, 0))), n.b("); background-image: linear-gradient(to bottom, "), n.b(n.v(n.f("bg_bottom_color", e, t, 0))), n.b(", "), n.b(n.v(n.f("bg_top_color", e, t, 0))), n.b("); "), n.s(n.f("border_color", e, t, 1), e, t, 0, 2501, 2536, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("border: 1px solid "), n.b(n.v(n.f("border_color", e, t, 0))), n.b(";")
                }), e.pop()), n.b(" color: "), n.b(n.v(n.f("text_color", e, t, 0))), n.b(';">'), n.b(n.v(n.f("title", e, t, 0))), n.b("</a> ")
            }), e.pop()), r.b(" </div> </div> ")), r.fl()
        },
        partials: {
            "<videoPartial0": {
                name: "videoPartial",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("partials.hero_video", {
        code: function(e, t, n) {
            "use strict";
            var r = this;
            return r.b(n = n || ""), r.b('<!-- begin video partial--> <div class="video-wrapper '), r.s(r.f("loopOption", e, t, 1), e, t, 0, 69, 76, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b("looping")
            }), e.pop()), r.b(" "), r.s(r.f("loopOption", e, t, 1), e, t, 1, 0, 0, "") || r.b("single-play"), r.b('" '), r.s(r.f("event_value", e, t, 1), e, t, 0, 151, 184, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b('data-event-link="'), n.b(n.v(n.f("event_value", e, t, 0))), n.b('"')
            }), e.pop()), r.b("> <video "), r.s(r.f("loopOption", e, t, 1), e, t, 0, 224, 228, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b("loop")
            }), e.pop()), r.b('> <source src="'), r.b(r.v(r.f("mp4", e, t, 0))), r.b('" type="video/mp4"> <img src="'), r.b(r.v(r.f("fallback", e, t, 0))), r.b('"> </video> <!--<a class="sound-toggle on"></a>--> '), r.s(r.f("loopOption", e, t, 1), e, t, 1, 0, 0, "") || (r.b('<div class="replay-button-box '), r.b(r.v(r.f("contentPosition", e, t, 0))), r.b(" "), r.b(r.v(r.f("editorialColor", e, t, 0))), r.b('-theme"><a class="button transparent large replay" style="">Replay</a></div>')), r.b(" </div><!-- end video partial -->"), r.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("partials.hero_identity_overlay", {
        code: function(e, t, n) {
            "use strict";
            var r = this;
            return r.b(n = n || ""), r.b('<div class="personality-details '), r.b(r.v(r.f("contentPosition", e, t, 0))), r.b(" "), r.b(r.v(r.f("portal", e, t, 0))), r.b(" "), r.b(r.v(r.f("editorialColor", e, t, 0))), r.s(r.f("style_options", e, t, 1), e, t, 0, 99, 128, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(" "), n.b(n.v(n.d("style_options.text_style", e, t, 0)))
            }), e.pop()), r.b('" style="background-color: '), r.b(r.v(r.f("darkColor", e, t, 0))), r.b(';"> <h1 class="skip-text-styles" '), r.s(r.f("headerColor", e, t, 1), e, t, 0, 235, 266, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b('style="color: '), n.b(n.v(n.f("headerColor", e, t, 0))), n.b(';"')
            }), e.pop()), r.b(">"), r.b(r.v(r.f("title", e, t, 0))), r.b("</h1> "), r.s(r.f("hasThumbs", e, t, 1), e, t, 0, 312, 624, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(' <div class="headshot entity-container ratio-square"> <div class="personality-box entity-box"> <div class="aspect"> '), n.s(n.f("noscript", e, t, 1), e, t, 1, 0, 0, "") || (n.b('<img class="no-src" data-src="'), n.b(n.v(n.f("thumb", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('">')), n.b(" "), n.s(n.f("noscript", e, t, 1), e, t, 0, 528, 589, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('<noscript><img src="'), n.b(n.v(n.f("thumb", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('"></noscript>')
                }), e.pop()), n.b(" </div> </div> </div> ")
            }), e.pop()), r.b(' <p class="desc '), r.b(r.v(r.f("contentPosition", e, t, 0))), r.b(' skip-text-styles">'), r.b(r.v(r.f("description", e, t, 0))), r.b("</p> </div>"), r.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Grill.ModuleView,
            n = e.Disney,
            r = e.Grill,
            i = e.Whiskers,
            a = e.Modernizr,
            s = e.jQuery,
            o = e._,
            l = e.Backbone,
            c = e.devicePixelRatio > 1.5,
            u = n.Style.breakpoints,
            d = u.midHigh.toString(),
            h = r.ModuleView.extend({
                style_classes: ["skip-styles", "skip-bottom-border", "skip-top-border", "full-height", "full-width"],
                template: i.modules.hero_universal,
                breakpoints: d,
                heroImg: "hero",
                currentPlayer: void 0,
                current: void 0,
                oldPlayer: void 0,
                mergedObj: null,
                darkColor: null,
                identityThumbs: null,
                slideDelay: 3e3,
                delayAfterVideo: 4e3,
                showArrows: !0,
                showDots: !0,
                hidden: !1,
                topBorder: !1,
                initialize: function(e) {
                    this.options = e || {}, this.model.get("slide_timer") && (this.slideDelay = 1e3 * this.model.get("slide_timer"));
                    var t = this.model.get("data"),
                        r = this.model.get("style_options"),
                        a = this.model.get("config_options"),
                        o = this.model.collection.style,
                        l = null;
                    if (a && (a.show_arrows || a.show_dots) && (a.show_arrows && (this.showArrows = !0), a.show_dots && (this.showDots = !0)), t.length > 0 && "Hero" === t[0].type) this.darkColor = o && o.secondary_theme && o.secondary_theme.background_color, this.mergedObj = {
                        heroes: t
                    }, "Hero" !== s(t).slice(-1)[0].type && (l = s(t).slice(-1)[0], this.mergedObj.heroes.pop(), this.identityThumbs = "Character" === l.type || "Artist" === l.type), this.mergedObj.identity = l;
                    else if (this.template = i.modules.rich_image, this.$el.addClass("rich_image"), this.rich_image = !0, r && r.images && r.images.foreground_image) {
                        var c = n.ForegroundHelper.processRichImageData(this);
                        c.link_data = t, this.model.set(c)
                    }
                    this.needsGuestContext() && n.guest.retain()
                },
                destroy: function() {
                    this.needsGuestContext() && n.guest && n.guest.release()
                },
                render: function() {
                    var t = this,
                        r = this.model,
                        d = r.get("data"),
                        h = o.first(r.get("data")),
                        f = r.get("style_options"),
                        p = l.Resize.width(),
                        m = p >= u.midHigh,
                        g = p >= u.max,
                        v = this.rich_image && n.ForegroundHelper.getRichImageData(this),
                        b = !!this.options.cds,
                        y = o.extend({
                            data: d,
                            desktop: g,
                            image_data: v,
                            cds: b,
                            noVideoSupport: !a.video || a.mobile,
                            darkColor: t.darkColor,
                            heroSize: h ? h.heroSize : null,
                            layout: f.layout,
                            contentPosition: h ? h.contentPosition : null,
                            slides: d,
                            identity: function() {
                                if (t.mergedObj.identity) return o.extend(t.mergedObj.identity, {
                                    darkColor: t.darkColor,
                                    hasThumbs: t.identityThumbs,
                                    editorialColor: o.first(t.mergedObj.heroes).editorialColor,
                                    headerColor: o.first(t.mergedObj.heroes).titleColor || o.first(t.mergedObj.heroes).editorialColor
                                }), t.mergedObj.identity
                            },
                            slide_image: function() {
                                var e = this.image_assets;
                                if (e) {
                                    var t = c ? e.retina : e.non_retina;
                                    return m ? t.wide_src : t.mobile_src
                                }
                            },
                            headerColor: function() {
                                return this.titleColor
                            }
                        }, this.options.ads.helpers(), r);
                    this.$el.html(t.template.render(y, {
                        heroSlide: i.partials.hero_slide,
                        videoPartial: i.partials.hero_video,
                        identityOverlayPartial: i.partials.hero_identity_overlay,
                        href_attributes: i.partials.href_attributes
                    })), this.$(".slides").swipeasaurus({
                        effect: p >= u.max ? "fade" : t.mergedObj && t.mergedObj.heroes && t.mergedObj.heroes.length > 1 ? "slide" : "fade",
                        dots: this.showDots,
                        arrows: this.showArrows
                    }), s(e).on("scroll." + this.cid, o.throttle(o.bind(this.scrollCheck, this), 300)), this.$el.loadLazyImages()
                },
                resize: function() {
                    var t = this.$(".slides"),
                        n = this,
                        r = (t.data("swipeasaurus") || {}).index / s("li", t).length,
                        i = [];
                    this.$(".slides li.finished").each(function(e, t) {
                        i.push(s(t).index())
                    }), t = n.$(".slides"), t.swipeasaurus("slide", e.Math.floor(r * s("li", t).length), !0), this.options.ads.restore(), t.swipeasaurus("stop"), this.render(), s(i).each(function(e) {
                        s(n.$(".slides li")[e]).addClass("finished")
                    }), this.geoReady()
                },
                geoReady: function() {
                    this.takeover(0);
                    var e = l.Resize.width();
                    if (this.mergedObj && this.mergedObj.identity && this.mergedObj.identity.headerColor && (e < u.midHigh ? this.$(".details h1").css("color", "#fff") : this.$(".details h1").css("color", this.mergedObj.identity.headerColor)), !(e < u.midHigh)) {
                        var t = this.$(".slides"),
                            n = this.$(".button.replay"),
                            r = this;
                        r.current = s(".dot.active")[0] ? s(".dot.active").index() : 0, n.on("click", function(e) {
                            e.preventDefault();
                            var n = s(e.target).parent(".content").siblings(".branding").find("video")[0];
                            s(n).closest("li").removeClass("finished"), t.swipeasaurus("stop"), r.resetSlide(s(e.target).closest(".slides li").index(), !0)
                        }), t.on("slide", function(e, t) {
                            l.Resize.width() >= u.max && r.takeover(t)
                        }).swipeasaurus("start", r.slideDelay), r.onNewSlide(r.current);
                        var i = function(e, t) {
                            t === r.current
                        };
                        t.on("slideEnd", i), r.scrollCheck()
                    }
                },
                scrollCheck: function() {
                    var t = this,
                        n = this.$(".slides"),
                        r = s(e).height(),
                        i = t.$el.height(),
                        a = t.$el.offset().top,
                        o = s(e).scrollTop();
                    t.hidden ? ("below" === t.hidden && r + o > a + i / 5 || "above" === t.hidden && o < a + i) && (t.hidden = !1, t.currentPlayer && ("loop" === s(t.currentPlayer).attr("loop") ? t.currentPlayer.play() : t.onNewSlide(t.current)), n.swipeasaurus("resume")) : o > a + i ? (t.hidden = "above", t.currentPlayer && "loop" === s(t.currentPlayer).attr("loop") && t.currentPlayer.pause(), n.swipeasaurus("pause")) : r + o < a && (t.hidden = "below", t.currentPlayer && "loop" === s(t.currentPlayer).attr("loop") && t.currentPlayer.pause(), n.swipeasaurus("pause"))
                },
                pauseAndRewind: function(e) {
                    e.pause(), e.currentTime = 0
                },
                startVideo: function(e) {
                    var t = this;
                    e && (e.play(), s(e).on("ended", function() {
                        s(e).closest("li").addClass("finished"), t.showEndcard(e)
                    }))
                },
                showEndcard: function(e) {
                    var t = this;
                    s(e).closest("li").hasClass("finished") ? l.Resize.width() > u.midHigh && t.$(".slides").swipeasaurus("start", t.delayAfterVideo) : (e.currentTime = e.duration, s(e).closest("li").addClass("finished"))
                },
                resetSlide: function(e, t) {
                    var n = this;
                    s(n.$(".slides li")[e]).removeClass("finished");
                    var r = s(n.$(".slides li")[e]).find("video")[0];
                    r && (n.pauseAndRewind(r), t && n.startVideo(r))
                },
                onNewSlide: function(e) {
                    var t = this,
                        n = t.$(".slides");
                    t.current = e, l.Resize.width() > u.midHigh && (t.oldPlayer && t.oldPlayer !== t.currentPlayer && (s(t.oldPlayer).closest("li").hasClass("finished") || (t.pauseAndRewind(t.oldPlayer), s(t.oldPlayer).closest(".video-wrapper").hasClass("single-play") && t.showEndcard(t.oldPlayer))), s(t.$(".slides > li")[e]).find("video") && (t.currentPlayer = s(t.$(".slides > li")[e]).find("video")[0]), t.oldPlayer = t.currentPlayer, t.hidden === !1 && (t.currentPlayer ? s(t.currentPlayer).closest("li").hasClass("finished") || "loop" === s(t.currentPlayer).attr("loop") ? ("loop" === s(t.currentPlayer).attr("loop") && t.startVideo(t.currentPlayer), n.swipeasaurus("start", t.slideDelay)) : (n.swipeasaurus("stop"), t.startVideo(t.currentPlayer)) : n.swipeasaurus("start", t.slideDelay)), l.Resize.width() >= u.max && t.takeover(e))
                },
                takeover: function(e) {
                    var t = this.model.get("data"),
                        r = t[e].takeover_styles;
                    r ? n.Style.applyTakeoverStyles(r, !0) : n.Style.removeModuleTakoverStyles()
                },
                remove: function() {
                    t.prototype.remove.call(this), s(e).off("scroll." + this.cid)
                }
            });
        h.register("hero_universal", {}), h.register("minihero", {
            heroImg: "minihero"
        }), h.register("channel_hero", {}), h.register("hero_slider", {}), h.register("empty_takeover", {}), h.register("rich_media", {
            className: "module bun full-height full-width",
            takeover: function() {},
            showArrows: !1,
            showDots: !1,
            hidden: "below",
            topBorder: !0
        })
    }(this);