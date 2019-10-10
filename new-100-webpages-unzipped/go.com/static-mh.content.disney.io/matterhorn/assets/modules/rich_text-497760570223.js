Whiskers("modules.rich_text", {
        code: function(e, t, n) {
            "use strict";
            var r = this;
            return r.b(n = n || ""), r.s(r.d("style_options.font_color_override", e, t, 1), e, t, 0, 38, 154, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(' <style type="text/css"> #ref-'), n.b(n.v(n.f("ref", e, t, 0))), n.b(" .rich-text-output *{ color: "), n.b(n.v(n.d("style_options.font_color_override", e, t, 0))), n.b("; } </style> ")
            }), e.pop()), r.b(' <div class="bound"> '), r.s(r.f("header_data", e, t, 1), e, t, 0, 229, 247, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(n.rp("<module_header0", e, t, ""))
            }), e.pop()), r.b(' <div class="rich-text-container"> '), r.s(r.f("image", e, t, 1), e, t, 0, 308, 689, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b('<div class="rich_text_image '), n.b(n.v(n.f("position", e, t, 0))), n.b('_align"> '), n.s(n.f("imageLink", e, t, 1), e, t, 0, 371, 460, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('<a href="'), n.b(n.v(n.f("link", e, t, 0))), n.b('" class="cta-link ada-el-focus"'), n.s(n.f("new_tab", e, t, 1), e, t, 0, 431, 447, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(' target="_blank"')
                    }), e.pop()), n.b(">")
                }), e.pop()), n.b(" "), n.s(n.f("noscript", e, t, 1), e, t, 1, 0, 0, "") || (n.b('<img class="no-src" data-src="'), n.b(n.v(n.f("image", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('">')), n.b(" "), n.s(n.f("noscript", e, t, 1), e, t, 0, 575, 636, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('<noscript><img src="'), n.b(n.v(n.f("image", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('"></noscript>')
                }), e.pop()), n.b(" "), n.s(n.f("imageLink", e, t, 1), e, t, 0, 664, 668, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("</a>")
                }), e.pop()), n.b(" </div>")
            }), e.pop()), r.b(" "), r.b(" "), r.s(r.f("image", e, t, 1), e, t, 1, 0, 0, "") || (r.b(" "), r.s(r.f("style_options", e, t, 1), e, t, 0, 753, 1062, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.s(n.f("images", e, t, 1), e, t, 0, 764, 1051, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.s(n.f("foreground_image", e, t, 1), e, t, 0, 785, 1030, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.s(n.f("url", e, t, 1), e, t, 0, 793, 1022, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(' <div class="rich_text_image '), n.b(n.v(n.f("alignment", e, t, 0))), n.b('_align"> '), n.s(n.f("noscript", e, t, 1), e, t, 1, 0, 0, "") || (n.b('<img class="no-src" data-src="'), n.b(n.v(n.f("url", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('">')), n.b(" "), n.s(n.f("noscript", e, t, 1), e, t, 0, 942, 1001, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b('<noscript><img src="'), n.b(n.v(n.f("url", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("alt_text", e, t, 0))), n.b('"></noscript>')
                            }), e.pop()), n.b(" </div> ")
                        }), e.pop())
                    }), e.pop())
                }), e.pop())
            }), e.pop()), r.b(" ")), r.b(" "), r.s(r.f("rich_text", e, t, 1), e, t, 0, 1106, 1532, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(' <div class="rich_text_body rich-text-enabled'), n.s(n.f("image", e, t, 1), e, t, 0, 1161, 1190, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" has-image "), n.b(n.v(n.f("position", e, t, 0))), n.b("_align")
                }), e.pop()), n.b('"> <div class="rich-text-output">'), n.b(n.t(n.f("rich_text", e, t, 0))), n.b("</div> "), n.s(n.f("config_options", e, t, 1), e, t, 0, 1274, 1505, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.s(n.d("cta_buttons.length", e, t, 1), e, t, 0, 1298, 1481, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b(' <div class="cta-links-container'), n.s(n.f("cta_buttons_config", e, t, 1), e, t, 0, 1353, 1366, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(" "), n.b(n.v(n.f("position", e, t, 0)))
                        }), e.pop()), n.b('" data-cta-type="button"> '), n.s(n.f("cta_buttons", e, t, 1), e, t, 0, 1431, 1457, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b(" "), n.b(n.rp("<partials/cta_button1", e, t, "")), n.b(" ")
                        }), e.pop()), n.b(" </div> ")
                    }), e.pop()), n.b(" ")
                }), e.pop()), n.b(" </div> ")
            }), e.pop()), r.b(" </div> </div>"), r.fl()
        },
        partials: {
            "<module_header0": {
                name: "module_header",
                partials: {},
                subs: {}
            },
            "<partials/cta_button1": {
                name: "partials/cta_button",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("partials.cta_button", {
        code: function(e, t, n) {
            "use strict";
            var r = this;
            return r.b(n = n || ""), r.b('<span class="cta-item"> <span> <a href="'), r.b(r.v(r.f("href", e, t, 0))), r.b('" class="button large blue cta-link ada-el-focus'), r.s(r.f("button_style_overrides", e, t, 1), e, t, 0, 123, 188, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.s(n.f("secondary", e, t, 1), e, t, 0, 137, 147, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" secondary")
                }), e.pop()), n.s(n.f("type", e, t, 1), e, t, 0, 170, 179, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b(" "), n.b(n.v(n.f("type", e, t, 0)))
                }), e.pop())
            }), e.pop()), r.b('" '), r.s(r.f("button_style_overrides", e, t, 1), e, t, 0, 244, 459, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b(' style="'), n.s(n.f("background_color", e, t, 1), e, t, 0, 273, 311, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("background-color:"), n.b(n.v(n.f("background_color", e, t, 0))), n.b(";")
                }), e.pop()), n.b(" "), n.s(n.f("text_color", e, t, 1), e, t, 0, 348, 369, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("color:"), n.b(n.v(n.f("text_color", e, t, 0))), n.b(";")
                }), e.pop()), n.b(" "), n.s(n.f("text_transform", e, t, 1), e, t, 0, 404, 438, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("text-transform:"), n.b(n.v(n.f("text_transform", e, t, 0))), n.b(";")
                }), e.pop()), n.b('" ')
            }), e.pop()), r.b(" "), r.s(r.f("new_tab", e, t, 1), e, t, 0, 499, 514, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b('target="_blank"')
            }), e.pop()), r.b(' role="button" '), r.s(r.f("screenreader_title", e, t, 1), e, t, 0, 564, 599, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b('aria-label="'), n.b(n.v(n.f("screenreader_title", e, t, 0))), n.b('"')
            }), e.pop()), r.b(" "), r.s(r.f("event_value", e, t, 1), e, t, 0, 639, 672, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b('data-event-link="'), n.b(n.v(n.f("event_value", e, t, 0))), n.b('"')
            }), e.pop()), r.b(" "), r.s(r.f("nrt_promotion_id", e, t, 1), e, t, 0, 710, 754, "{{ }}") && (r.rs(e, t, function(e, t, n) {
                n.b('data-nrt-promotion-id="'), n.b(n.v(n.f("nrt_promotion_id", e, t, 0))), n.b('"')
            }), e.pop()), r.b(" >"), r.b(r.v(r.f("title", e, t, 0))), r.b("</a> </span> </span>"), r.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Grill,
            n = e.Whiskers,
            r = e.Backbone,
            i = e.Disney,
            a = i.Style.breakpoints,
            o = a.midHigh.toString(),
            s = e.devicePixelRatio > 1.5,
            l = e._;
        t.ModuleView.register("rich_text", {
            style_classes: ["rich-text-view"],
            breakpoints: o,
            template: n.modules.rich_text,
            required_template_sets: ["module_header"],
            included_components: {
                "partials/cta_button": n.partials.cta_button
            },
            initialize: function(e) {
                this.options = e || {};
                var t = this.model.get("style_options"),
                    n = t && t.columns ? "cols-" + t.columns : "cols-1",
                    r = t && t.additional_style_classes;
                r && r.push(n), i.guest && this.needsGuestContext() && i.guest.retain()
            },
            render: function() {
                var e, t = l.first(this.model.get("data")),
                    n = this.model.get("style_options"),
                    i = n && n.images && n.images.foreground_image,
                    o = !(!i || !i.url && !i.mobile_url),
                    c = r.Resize.width() >= a.midHigh;
                if (o) {
                    var u = s && i.retina_url ? i.retina_url : i.url,
                        d = s && i.mobile_retina_url ? i.mobile_retina_url : i.mobile_url;
                    e = c ? u : d
                }
                var f = l.extend({
                    data: t,
                    image: e,
                    imageLink: i && i.cta_link,
                    alt_text: i && i.alt_text,
                    position: o && i.alignment
                }, this.model);
                this.$el.html(this.template.render(f, this.ctx_additions()))
            },
            needsGuestContext: function() {
                var e = this.model.get("config_options"),
                    t = e && e.cta_buttons || [],
                    n = this;
                return l.any(t, function(e) {
                    return l.contains(n.GUEST_EVENT_VALUES, e.event_value)
                })
            },
            destroy: function() {
                i.guest && this.needsGuestContext() && i.guest.release()
            }
        })
    }(this);