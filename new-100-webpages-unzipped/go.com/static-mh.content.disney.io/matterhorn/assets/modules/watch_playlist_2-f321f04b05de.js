! function(e) {
    "use strict";
    var t = e.jQuery,
        i = e._,
        n = e.Backbone,
        r = e.location,
        a = e.Math,
        s = n.Collection,
        o = function(e, t) {
            var i, n = new Array(e);
            if (t !== n[0])
                for (i = 0; i < e; ++i) n[i] = t;
            return n
        },
        l = function(e) {
            return {
                models: e
            }
        };
    n.LazyCollection = s.extend({
        params: {
            limit: "limit",
            offset: "offset",
            draft_id: "draft_id"
        },
        constructor: function(e, t) {
            t || (t = {}), this.count = t.count, this.min = t.min || e && e.length || 1, t.params && (this.params = i.defaults(t.params, this.params)), s.call(this, e, t)
        },
        ensure: function(e) {
            var i, n, s = this,
                o = s.count,
                l = s.length,
                c = s._ensure,
                u = s.params,
                d = a.min(e - l, s.min),
                h = /[&?]draft_id=([^&]+)/.exec(r.search);
            return o && (e = a.min(e, o)), e <= l ? n = t.when() : c ? (n = t.Deferred(), c.always(function() {
                s.ensure(e).then(function() {
                    n.resolveWith(arguments)
                }, function() {
                    n.rejectWith(arguments)
                })
            })) : (i = {}, i[u.limit] = d, i[u.offset] = l, h && (i[u.draft_id] = h[1]), s.trigger("loading", s, !0), n = s._ensure = s.fetch({
                add: !0,
                remove: !1,
                data: i
            }).then(function() {
                s.length < l + d && (s.count = s.length)
            }).always(function() {
                s._ensure = null, s.trigger("loading", s, !1)
            })), n
        },
        remaining: function() {
            var e = this.count;
            return e ? e - this.length : null
        },
        loading: function() {
            return !!this._ensure
        },
        pages: function(e, t) {
            var n, r, s = [],
                c = t && t.whole,
                u = t && t.pad,
                d = t && t.nest,
                h = t && t.fill;
            for (e = +e || 1, r = 0; r < this.length; r += e) s.push(this.models.slice(r, r + e));
            if (r = s.length - 1, c && r > 0 && s[r].length < e && (--r, s.pop()), u && (r >= 0 && (s[r] = s[r].concat(o(e - s[r].length, h))), n = o(e, h)), d && (s = i.map(s, l), n = l(n)), u) {
                for (r = a.floor(this.count / e); s.length < r;) s.push(n);
                r = this.count - r * e, r > 0 && !c && (n = o(r, h), s.push(d ? l(n) : n))
            }
            return s
        },
        peeking: function() {
            return !0
        },
        page: function(e, t) {
            return this.pages(t, {
                nest: !0
            })
        },
        lastIndex: function(e) {
            return this.pages(e, {
                nest: !0
            }).length - 1
        }
    }), n.LazySliderCollection = n.LazyCollection.extend({
        constructor: function(e, t) {
            this.loadedPageCounter = [], this.pageOptions = {
                nest: !0
            }, i.each(e, function(e) {
                e.set("hidden", !0)
            }), n.LazyCollection.call(this, e, t)
        },
        startingIndex: 0,
        lastIndex: function(e) {
            return this.pages(e, this.pageOptions).length - 1
        },
        page: function(e, t, n, r) {
            var a = this.pages(t, this.pageOptions);
            if (i.each(a[e].models, function(e) {
                    e && e.set("hidden", !1)
                }), this.nextPeek(e, a)) {
                var s = a[e + 1];
                i(n).times(function(e) {
                    var t = s.models[e * r];
                    t && t.set("hidden", !1)
                })
            }
            return i.contains(this.loadedPageCounter, e) || this.loadedPageCounter.push(e), a
        },
        loadedPages: function() {
            return this.loadedPageCounter.length
        },
        peeking: function(e) {
            return this.length > e
        },
        nextPeek: function(e, t) {
            return e < t.length - 1
        }
    }), n.LazyFilterCollection = n.LazyCollection.extend({
        parse: function(e) {
            return this.count = e.count, e.next ? this.nextFilter = e.next : this.nextFilter = null, e.data
        },
        next: function() {
            this.nextFilter && (this.url = this.baseUrl + this.nextFilter)
        }
    })
}(this), Whiskers("modules.slider", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.b(' <div class="bound '), n.b(n.v(n.f("type", e, t, 0))), n.b(" "), n.b(n.v(n.f("entity_type", e, t, 0))), n.s(n.f("peeking", e, t, 1), e, t, 1, 0, 0, "") || n.b(" no-peek"), n.b('"> '), n.s(n.d("style_options.overlay_styles", e, t, 1), e, t, 0, 188, 222, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<div class="module_overlay"></div>')
            }), e.pop()), n.b(" "), n.s(n.f("header_data", e, t, 1), e, t, 0, 272, 290, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.rp("<module_header0", e, t, ""))
            }), e.pop()), n.b(" "), n.b(' <div class="slides peek-'), n.b(n.v(n.f("rpp", e, t, 0))), n.s(n.d("header_data.icon_type", e, t, 1), e, t, 0, 383, 414, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" icon-"), i.b(i.v(i.d("header_data.icon_type", e, t, 0)))
            }), e.pop()), n.s(n.f("show_episode_info", e, t, 1), e, t, 0, 462, 469, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" series")
            }), e.pop()), n.b('"> <ol class="slider-list peek-'), n.b(n.v(n.f("rpp", e, t, 0))), n.b('"> '), n.s(n.f("pages", e, t, 1), e, t, 0, 542, 661, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <li class="slider-page"> <ul class="col-container cols-'), i.b(i.v(i.f("cols", e, t, 0))), i.b(" rows-"), i.b(i.v(i.f("rows", e, t, 0))), i.b('"> '), i.b(i.rp("<partials/slider_page1", e, t, "")), i.b(" </ul> </li> ")
            }), e.pop()), n.b(' </ol> <div class="peek"></div> '), n.b(" </div> </div>"), n.fl()
        },
        partials: {
            "<module_header0": {
                name: "module_header",
                partials: {},
                subs: {}
            },
            "<partials/slider_page1": {
                name: "partials/slider_page",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("partials.slider_page", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.b('<ul class="col-container cols-'), n.b(n.v(n.f("cols", e, t, 0))), n.b(" rows-"), n.b(n.v(n.f("rows", e, t, 0))), n.b('"> '), n.s(n.f("models", e, t, 1), e, t, 0, 66, 293, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <li class="col item'), i.s(i.f("widthClass", e, t, 1), e, t, 0, 101, 116, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(" "), i.b(i.v(i.f("widthClass", e, t, 0)))
                }), e.pop()), i.s(i.f("hidden", e, t, 1), e, t, 0, 142, 156, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(" lazy-deferred")
                }), e.pop()), i.b('"> '), i.b(" "), i.b(i.rp("<partials/slider_item0", e, t, "")), i.b(" </li> ")
            }), e.pop()), n.b(" </ul>"), n.fl()
        },
        partials: {
            "<partials/slider_item0": {
                name: "partials/slider_item",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("partials.slider_item", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.s(n.f("is_ad", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.rp("<entity_container0", e, t, "")), n.b(" "), n.s(n.f("is_ad", e, t, 1), e, t, 0, 52, 66, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.t(i.f("adMarkup", e, t, 0)))
            }), e.pop()), n.fl()
        },
        partials: {
            "<entity_container0": {
                name: "entity_container",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Grill,
            i = e.Disney,
            n = e.Backbone,
            r = n.View,
            a = e.Whiskers,
            s = e.Tracker,
            o = e.jQuery,
            l = e._,
            c = i.Style.breakpoints,
            u = i.Style.custom_breakpoints,
            d = l.values(c),
            h = n.Resize.width,
            f = i.Ads || {},
            p = f.ShareThroughAds,
            m = function(e) {
                return null != e && (e = o.trim(e).toLowerCase().replace(/[^a-z0-9_:, \-]/gi, "").replace(/\s+/g, "_")), e
            },
            b = e.SwipeView = t.ModuleView.extend({
                style_classes: ["slider-view", "pagination-styles"],
                required_template_sets: ["module_header", "entities"],
                breakpoints: d.join(" "),
                template: a.modules.slider,
                events: {
                    slide: function(e, t, i) {
                        e.preventDefault(), this.$(".slides").toggleClass("peeking", t !== this.collection.lastIndex(this.rpp()));
                        var n = this.rpp() * (t + 1),
                            r = this.cols(),
                            a = n + r,
                            s = this.collection.first(a);
                        if (this.$pages && t > 0) {
                            var c = o(this.$pages[t]).find(".item"),
                                u = o(this.$pages[t + 1]).find(".item").slice(0, this.rows()),
                                d = c.add(u);
                            d.enableLazyLoad().loadLazyImages()
                        }
                        t > i ? this.trackSlide("next", e) : t < i && this.trackSlide("prev", e), l.each(s, function(e) {
                            e.set({
                                hidden: !1
                            })
                        })
                    }
                },
                trackSlide: function(e) {
                    if (s) {
                        var t = "arrow_" + e,
                            i = this.$el.data("module"),
                            n = o(".module").index(this.$el),
                            r = this.ctoTitle();
                        s.event({
                            engagementType: t,
                            engagementMeta: r + "/" + i + "/mod" + (n + 1)
                        })
                    }
                },
                ctoTitle: function() {
                    var e = this.model.get("title");
                    return m(e)
                },
                initialize: function(e) {
                    this.options = e || {};
                    var t = this.model.get("config_options"),
                        r = this.model.get("style_options");
                    this.model.data.set(this.model.data.models.filter(function(e) {
                        return "Recommendation" !== e.get("type")
                    })), this.collection = new n.LazySliderCollection(this.model.data.models), t && t.native_ads && p && !this.options.cds && (this.shareThrough = new p, this.shareThrough.loadScriptError || (this.shareThrough.insertModel(this.collection, 0), this.shareThrough.scriptElem.addEventListener("scriptLoadError", function() {
                        this.removeEmptyAdSlot()
                    }.bind(this))));
                    var a = l.chain(this.collection.pluck("entity_type")).compact().uniq().first().value();
                    l.extend(this, {
                        entity_type: a || this.model.get("type"),
                        lastPage: 0,
                        startingCount: this.index = this.collection.startingIndex,
                        slideTime: 500,
                        init: !1,
                        translations: this.model.get("translations") || {}
                    }), this.collection.on("remove", function() {
                        this.resize()
                    }, this), this.needsGuestContext() && i.guest.retain(), this.configureData && this.configureData(), this.stylePack = this.model.collection && this.model.collection.style, this.customSliderStyles = this.stylePack && this.stylePack.custom_slider_styles, this.customSliderStyles && (this.sliderLeftPeek = this.customSliderStyles.slider_left_peek, this.leftArrowSvg = this.customSliderStyles.left_arrow_svg), this.sliderLeftPeek ? this.align_arrows_vert = "thumbnail" : this.customSliderStyles && this.customSliderStyles.align_arrows_vert ? this.align_arrows_vert = this.customSliderStyles.align_arrows_vert : r && r.custom_arrow_options && r.custom_arrow_options.align_arrows_vert ? this.align_arrows_vert = r.custom_arrow_options.align_arrows_vert : this.align_arrows_vert || (this.align_arrows_vert = "content")
                },
                destroy: function() {
                    this.needsGuestContext() && i.guest && i.guest.release()
                },
                peekAmount: function() {
                    return .25 / Math.sqrt(this.cols() / .3)
                },
                wide: function() {
                    return h() >= c.midHigh
                },
                getItemsPerRow: function(e) {
                    var t = h();
                    return e && t <= c.max ? Math.min(e, 4) : e && t <= c.midHigh ? Math.min(e, 2) : e
                },
                render: function() {
                    var e = this,
                        t = e.model,
                        i = e.cols(),
                        n = e.rows(),
                        r = e.rpp();
                    e.pages = this.collection.page(this.index, r, n, i), this.formatFeatured && this.formatFeatured();
                    var a = l.extend({
                        rpp: r,
                        cols: i,
                        rows: n,
                        peeking: this.peeking(r),
                        entity_type: e.entity_type,
                        seeAll: t.get("seeAll")
                    }, this.options.ads.helpers(this.model.toJSON(), this.getAdPosition()), this.model);
                    e.length = e.pages.length, e.$el.html(e.template.render(a, this.ctx_additions())), this.renderPages(), this.adListeners()
                },
                renderPages: function() {
                    var e = this,
                        t = e.cols(),
                        i = e.rows(),
                        n = e.rpp();
                    e.rppVal = n, e.pageViews = [], e.itemViews = [], e.pages && (e.itemViews = e.createItemViews(), e.pages.forEach(function(r, a) {
                        var s = e.createPageView(t, i);
                        e.pageViews.push(s), e.appendPageView(s);
                        var o = e.itemViews.slice(a * n, (a + 1) * n);
                        o.forEach(function(e) {
                            s.appendItemView(e)
                        })
                    }))
                },
                ready: function() {
                    var t = e.window.innerWidth > c.midLow,
                        n = t && this.$(".slider-page").length > 1,
                        r = !(!n || !this.sliderLeftPeek),
                        a = this.peekAmount(),
                        s = this.translations || {};
                    if (this.$(".dots").remove(), this.init = !0, this.$(".slides ol").swipeasaurus({
                            arrows: !0,
                            prevLabel: s.previous_slide || "Previous",
                            nextLabel: s.next_slide || "Next",
                            loop: !1,
                            right: a,
                            left: r ? a : 0,
                            index: this.index,
                            speed: this.slideTime,
                            rtl: i.rtl,
                            dots: this.show_dots
                        }), this.init = !1, this.$pages = this.$(".slides ol > li"), r) {
                        var o = 100 * a + "%";
                        this.alignArrowsHoriz(o), this.alignHeaderLeft(o)
                    }
                    this.leftArrowSvg && t && this.injectLeftArrowSvg(), "thumbnail" === this.align_arrows_vert && this.rows() < 2 && this.alignArrowsVert();
                    var l = this.$(".entity-link.title-link");
                    l.attr("tabindex", -1)
                },
                resize: function() {
                    var e = this,
                        t = e.pages,
                        i = e.cols(),
                        n = e.rows(),
                        r = e.rpp(),
                        a = e.rppVal || r,
                        s = 0,
                        o = 0;
                    e.rppVal = r, e.pages = e.collection.page(e.index, r, n, i), s = Math.max(0, e.pages.length - t.length), o = Math.max(0, t.length - e.pages.length), s && l.times(s, function() {
                        var t = e.createPageView(i, n);
                        e.appendPageView(t), e.pageViews.push(t)
                    }), e.pages.forEach(function(t, a) {
                        var s = e.itemViews.slice(a * r, (a + 1) * r);
                        s.forEach(function(t) {
                            e.pageViews[a].appendItemView(t).updateColRows(i, n)
                        })
                    }), o && l.times(o, function() {
                        var t = e.pageViews.pop();
                        t.remove()
                    }), r && a && r !== a && e.$(".slides, .slides ol").removeClass("peek-" + a).addClass("peek-" + r), e.ready()
                },
                peeking: function(e) {
                    return !!this.collection.peeking && this.collection.peeking(e)
                },
                rows: function() {
                    var e = this.model.get("config_options") || {};
                    return e.num_rows || 1
                },
                rpp: function() {
                    return this.cols() * this.rows()
                },
                cols: function() {
                    var e = h(),
                        t = this.wide(),
                        i = this.collection.first(),
                        n = i && i.get("entity_config"),
                        r = n && n.aspect_ratio,
                        a = this.model.get("style_options").items_per_row_override;
                    if (a && t) return this.getItemsPerRow(a);
                    switch (r) {
                        case "poster":
                        case "dvd_case":
                        case "letter":
                            return t ? 4 : e >= c.midLow ? 3 : 2;
                        case "baseball_card":
                            return e >= c.max ? 5 : t ? 4 : e >= c.midLow ? 3 : 2;
                        case "square":
                            return e >= c.max ? 4 : t ? 3 : 2;
                        case "16x9":
                        case "4x3":
                        case "poster_landscape":
                            return t ? 3 : e >= c.midLow ? 2 : 1;
                        case "widescreen":
                            return e >= c.midHigh ? 2 : 1;
                        default:
                            return t ? 3 : 2
                    }
                },
                createPageView: function(e, t) {
                    return new g({
                        cols: e,
                        rows: t
                    })
                },
                appendPageView: function(e) {
                    this.$(".slides ol").append(e.$el)
                },
                createItemViews: function() {
                    var e = this;
                    return e.collection.map(function(t) {
                        var i = {
                            model: t,
                            translations: e.translations
                        };
                        if (e.shareThrough && e.shareThrough.shouldRenderSlot(t, e.model)) {
                            var n = e.shareThrough.getPlacementKey(e.model);
                            n && (i.adMarkup = e.options.ads.tagWithTargeting("native", {
                                strnativekey: n
                            }))
                        }
                        return new v(i)
                    })
                },
                adListeners: function() {
                    var e = this,
                        t = this.$(".gpt");
                    if (t.length) {
                        var i = this.options.ads.findSlotById(t.attr("id"));
                        i && i.events.on("slotRenderEnded", function(t) {
                            t.isEmpty && e.removeEmptyAdSlot()
                        })
                    } else e.removeEmptyAdSlot()
                },
                getAdPosition: function() {
                    if (!this.options.cds) return this.options.ads && this.options.ads.setAdPosition && this.options.ads.setAdPosition(this.model)
                },
                removeEmptyAdSlot: function() {
                    var e = l.find(this.itemViews, function(e) {
                        return e.model.get("is_ad") === !0
                    });
                    if (e) {
                        var t = this.itemViews.indexOf(e);
                        t >= 0 && this.itemViews.splice(t, 1), this.collection.remove(e.model)
                    }
                },
                alignArrowsHoriz: function(e) {
                    var t = this.$(".next"),
                        n = this.$(".prev"),
                        r = this.model.get("data")[0].item_titles_below;
                    r && this.$(".entity-details").addClass("visible"), i.rtl ? (t.css("left", e), n.css("right", e)) : (t.css("right", e), n.css("left", e))
                },
                alignArrowsVert: function() {
                    var e = this.$(".next"),
                        t = this.$(".prev"),
                        i = this.$(".slider-page").first(),
                        n = i.outerHeight(),
                        r = parseInt(i.css("padding-top"), 10),
                        a = this.$(".slider-page img").first().outerHeight(),
                        s = n - a;
                    e.add(t).css("margin-top", r - s / 2)
                },
                alignHeaderLeft: function(e) {
                    var t = this.$(".module_header");
                    t.closest(".slider-view").hasClass("header-center") || this.$(".module_header").css("left", e)
                },
                injectLeftArrowSvg: function() {
                    if (!this.leftArrowInjected) {
                        var e, t = o("button.prev, button.next", this.el),
                            i = this.customSliderStyles.slider_color_theme,
                            n = this.customSliderStyles.button_color_override,
                            r = this.customSliderStyles.arrow_color_override;
                        if (i && t.addClass(i), r) e = r;
                        else if ("main-background" === i) {
                            var a = this.stylePack.page_background_styles && this.stylePack.page_background_styles.bg_color;
                            e = a ? a : "#1938ce"
                        }
                        n && (t.removeClass(i), t.css("background-color", n)), o.get(this.leftArrowSvg, function(i) {
                            var n = o(i).find("svg")[0];
                            n && (e ? o(n).find("[fill]").attr("fill", e) : o(n).find("[fill]").prop("fill", !1), t.html(n))
                        }, "xml"), this.leftArrowInjected = !0
                    }
                }
            }),
            v = r.extend({
                template: a.partials.slider_item,
                tagName: "li",
                className: "col item",
                initialize: function(e) {
                    this.options = e || {}, this.model = this.options.model, this.model.on("remove", function() {
                        this.remove()
                    }, this), this.render(), this.addCssClasses()
                },
                render: function() {
                    var e = {
                            item: a.entities.item,
                            entity_container: a.entities.entity_container,
                            "entities/entity_play_icon": a.entities.entity_play_icon,
                            "entities/entity_overlay_video": a.entities.entity_overlay_video,
                            "entities/entity_item_count": a.entities.entity_item_count,
                            image_attributes: a.partials.image_attributes,
                            href_attributes: a.partials.href_attributes
                        },
                        t = l.extend(this.model.toJSON(), this.options);
                    this.$el.html(this.template.render(t, e))
                },
                addCssClasses: function() {
                    var e = [];
                    this.model.get("hidden") && e.push("lazy-deferred"), this.model.get("widthClass") && e.push(this.model.get("widthClass")), e.length && this.$el.addClass(e.join(" "))
                }
            }),
            g = r.extend({
                template: a.partials.slider_page,
                tagName: "li",
                className: "slider-page",
                initialize: function(e) {
                    this.options = e || {}, l.defaults(this.options, {
                        cols: 1,
                        rows: 1
                    }), this.render()
                },
                updateColRows: function(e, t) {
                    e && e !== this.options.cols && (this.updateClass("cols", this.options.cols, e), this.options.cols = e), t && t !== this.options.rows && (this.updateClass("rows", this.options.rows, t), this.options.rows = t)
                },
                updateClass: function(e, t, i) {
                    this.$el.children("ul").removeClass(e + "-" + t).addClass(e + "-" + i)
                },
                appendItemView: function(e) {
                    return this.$("ul").append(e.$el), this
                },
                render: function() {
                    this.$el.html(this.template.render(this.options))
                }
            });
        b.register("slider", {}), b.register("seo_link_slider", {}), b.register("grid", {
            peeking: function() {
                return !1
            },
            rows: function() {
                return 2
            }
        }), b.register("characters", {
            cols: function() {
                var e = h(),
                    t = this.wide();
                return e >= c.max ? 5 : t ? 4 : e >= c.midLow ? 3 : 2
            }
        }), b.register("slider_rfy", {
            cols: function() {
                var e = this.wide(),
                    t = this.model.get("style_options").items_per_row_override;
                return t && e ? this.getItemsPerRow(t) : e ? 3 : 2
            },
            initialize: function(e) {
                this.options = e || {}, l.extend(this, {
                    entityType: "video",
                    index: 0,
                    lastPage: 0,
                    startingCount: this.loadedPages = 1,
                    slideTime: 500,
                    init: !1
                }), this.$el.addClass("temp-hidden"), this.collection = this.model.data, this.fetchData()
            },
            fetchData: function() {
                var e = this,
                    t = i.Recommender,
                    n = this.collection.first(),
                    r = n && n.toJSON() || {};
                l.extend(r, {
                    entity_overrides: {
                        title_overlay: !1
                    }
                }), t.getRecommendations(r).done(function(t) {
                    e.renderFetchedData(t)
                }).fail(function() {
                    var t = e.model.get("data").slice(1);
                    t.length && e.renderFetchedData(t)
                })
            },
            renderFetchedData: function(e) {
                var t = new n.Collection(e);
                this.collection = new n.LazySliderCollection(t.models), this.render(), this.ready(), this.$el.removeClass("temp-hidden").loadLazyImages()
            }
        }), b.register("featured_promo_slider", {
            numFeatured: 1,
            configureData: function() {
                var e = this;
                i.geo(function(t, i, r) {
                    var a = e.numFeatured,
                        s = e.placeholders = [];
                    if (r) {
                        var o = e.collection.where({
                            location: r
                        });
                        e.collection.remove(o), e.collection.add(o, {
                            at: 0
                        })
                    }
                    if (a)
                        for (var l = {
                                widthClass: "featured",
                                featured: !0
                            }, c = new n.Model({
                                widthClass: "empty_placeholder"
                            }), u = 0; u < a; u++) s.push(c), e.collection.at(u).set(l)
                })
            },
            formatFeatured: function() {
                var e = this.wide();
                this.collection.each(function(t) {
                    if (t.get("featured") && e) {
                        var i = t.get("promo_featured");
                        t.set("thumb_data", {
                            src: i
                        })
                    } else {
                        var n = t.get("promo");
                        t.set("thumb_data", {
                            src: n
                        })
                    }
                }), e ? this.collection.add(this.placeholders, {
                    at: 1
                }) : this.collection.remove(this.placeholders)
            },
            cols: function() {
                return this.wide() ? 4 : 2
            },
            render: function() {
                b.prototype.render.call(this), this.resize()
            }
        }), b.register("junior_nav_slider", {
            breakpoints: [c.max, c.midHigh, u.juniorNavMin].join(" "),
            cols: function() {
                var e = h();
                return e >= c.max ? 6 : e >= c.midHigh ? 5 : e >= u.juniorNavMin ? 4 : 3
            },
            peekAmount: function() {
                return .25 / Math.sqrt(this.rpp() / .2)
            }
        }), b.register("incredibles_slider", {
            show_dots: !0,
            align_arrows_vert: "thumbnail",
            peeking: function() {
                return !1
            },
            peekAmount: function() {
                return 0
            },
            wide: function() {
                return h() >= c.max
            },
            cols: function() {
                var e = h(),
                    t = this.wide(),
                    i = this.model.get("style_options"),
                    n = i.items_per_row_override,
                    r = i.mobile_columns;
                return n && t ? n : t ? 4 : e >= c.midHigh ? 2 : r ? parseInt(r, 10) : 1
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            i = e.Tracker,
            n = e._,
            r = e.jQuery,
            a = t.Style.breakpoints,
            s = t.Style.video_breakpoints;
        e.VideoSwipeView = e.SwipeView.extend({
            initialize: function(e) {
                this.options = e || {}, this.translations = this.options.translations, this.render()
            },
            breakpoints: n.values(a).join(" ") + " " + n.values(s).join(" "),
            resize: function() {
                this.render()
            },
            rows: function() {
                return 1
            },
            cols: function() {
                var t = e.window.innerWidth;
                if (this.options.companion) {
                    var i = a.contentMax,
                        n = s.videoDesktopMid,
                        r = s.videoDesktopLow;
                    return t < s.videoDesktopHigh && t >= n ? 5 : t < n && t >= i ? 4 : t < i && t >= r ? 3 : t < r ? 2 : 6
                }
                return t >= a.midHigh ? 4 : 3
            },
            render: function() {
                var e = this,
                    t = e.cols(),
                    i = e.rows(),
                    n = e.rpp(),
                    r = {
                        rpp: n,
                        cols: t,
                        rows: i,
                        peeking: !0,
                        entity_type: "video",
                        show_episode_info: !(!this.options.collection_type || "series" !== this.options.collection_type.toLowerCase()),
                        seeAll: !1
                    };
                e.options.companion && e.options.translations && (e.options.translations.show_episode_info = r.show_episode_info), e.$el.html(e.template.render(r, this.ctx_additions())), e.pages = e.collection.page(0, n, i, t), this.renderPages(), this.ready()
            },
            ready: function() {
                var e, i, n = .05,
                    r = this.$(".slider-page"),
                    a = r.first(),
                    s = a.find(".item"),
                    o = a.next().find(".item").first(),
                    l = s.length,
                    c = 0,
                    u = this.collection.models,
                    d = this;
                r.each(function(t, n) {
                    e = d.$(n).find(".item"), e.map(function(e, r) {
                        i = t * l + e, u[i].get("nowPlaying") && u[i].get("id") === d.$(r).find("a").data("core-id") && (c = t, s = d.$(n).find(".item"), o = s.next().find(".item").first())
                    })
                }), this.$(".slides ol").swipeasaurus({
                    arrows: !0,
                    loop: !1,
                    right: n,
                    left: n,
                    index: c,
                    speed: 500,
                    rtl: t.rtl
                }), this.$pages = this.$(".slides ol > li"), s.add(o).enableLazyLoad().loadLazyImages()
            },
            trackSlide: function(e, t) {
                if (i) {
                    var n = r(t.currentTarget).closest(".module"),
                        a = n.data("module"),
                        s = r(".module").index(n) + 1;
                    i.event({
                        engagementType: "video_slider_arrow_" + e,
                        engagementMeta: "related_videos/" + a + "/mod" + s
                    })
                }
            }
        })
    }(this), Whiskers("shared.contenttoolbar", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.b('<div id="toolbar"> <div id="metadata" class="bound '), n.b(n.v(n.f("adSystem", e, t, 0))), n.b('"> <div class="module_body"> <div class="contentarea col-container"> <div class="content"> <div class="item"> '), n.s(n.f("contentToolbarTitleLink", e, t, 1), e, t, 0, 201, 341, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" "), i.s(i.f("asset_desktop_image", e, t, 1), e, t, 0, 226, 316, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' <a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('" class="icon"> <img src="'), i.b(i.v(i.f("asset_desktop_image", e, t, 0))), i.b('" alt="'), i.b(i.v(i.f("title", e, t, 0))), i.b('"> </a> ')
                }), e.pop()), i.b(" ")
            }), e.pop()), n.b(' <div class="productlink"> <h1>'), n.b(n.v(n.f("title", e, t, 0))), n.b("</h1> "), n.s(n.f("badge", e, t, 1), e, t, 0, 425, 504, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <span class="watch_icon"> <img src="'), i.b(i.v(i.f("badge", e, t, 0))), i.b('" class="watchpageicon"> </span> ')
            }), e.pop()), n.b(" "), n.s(n.f("contentToolbarTitleLink", e, t, 1), e, t, 0, 543, 574, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('">'), i.b(i.v(i.f("title", e, t, 0))), i.b("</a>")
            }), e.pop()), n.b(' </div> </div> <p itemprop="description">'), n.b(n.v(n.f("description", e, t, 0))), n.b(n.v(n.f("rating", e, t, 0))), n.b("</p> "), n.s(n.f("cds", e, t, 1), e, t, 1, 0, 0, "") || (n.b(" "), n.s(n.f("use_deprecated_social", e, t, 1), e, t, 0, 708, 846, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <ul id="social-links"'), i.s(i.f("linksInverted", e, t, 1), e, t, 0, 748, 765, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' class="inverted"')
                }), e.pop()), i.b("> "), i.s(i.f("socialLinks", e, t, 1), e, t, 0, 801, 823, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(i.rp("<socialLinkPartial0", e, t, ""))
                }), e.pop()), i.b(" </ul> ")
            }), e.pop()), n.b(" "), n.s(n.f("use_deprecated_social", e, t, 1), e, t, 1, 0, 0, "") || (n.b(" "), n.s(n.f("suppress_social", e, t, 1), e, t, 1, 0, 0, "") || (n.b(" "), n.b(n.rp("<socialLinkPartial1", e, t, "")), n.b(" ")), n.b(" ")), n.b(" ")), n.b(" "), n.s(n.f("contentToolbarPromoLink", e, t, 1), e, t, 0, 1029, 1393, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('" class="watch_icon item" data-title="'), i.b(i.v(i.f("title", e, t, 0))), i.b('"> <div class="messageLink"> '), i.s(i.f("asset_desktop_image", e, t, 1), e, t, 0, 1146, 1231, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' <div class="watch-icon"> <img src="'), i.b(i.v(i.f("asset_desktop_image", e, t, 0))), i.b('" alt="'), i.b(i.v(i.f("title", e, t, 0))), i.b('"> </div> ')
                }), e.pop()), i.b(' <div class="copy'), i.s(i.f("asset_desktop_image", e, t, 1), e, t, 1, 0, 0, "") || i.b(" noImage "), i.b('"> <p aria-hidden="true">'), i.b(i.v(i.f("description", e, t, 0))), i.b("</p> </div> </div> </a> ")
            }), e.pop()), n.b(" "), n.s(n.f("purchase", e, t, 1), e, t, 0, 1435, 1533, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <div id="purchase" class="bound"> <p> <a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('" target="_blank">'), i.b(i.v(i.f("text", e, t, 0))), i.b("</a> </p> </div> ")
            }), e.pop()), n.b(" </div> </div> "), n.s(n.f("cds", e, t, 1), e, t, 1, 0, 0, "") || (n.b(' <div class="ad-container"> '), n.s(n.f("showCompanion", e, t, 1), e, t, 0, 1615, 1663, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<div class="companionad">'), i.b(i.t(i.f("companionAd", e, t, 0))), i.b("</div>")
            }), e.pop()), n.b(" "), n.s(n.f("showCompanion", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.t(n.f("mobileAd", e, t, 0))), n.b(" </div> ")), n.b(" </div> </div> </div>"), n.fl()
        },
        partials: {
            "<socialLinkPartial0": {
                name: "socialLinkPartial",
                partials: {},
                subs: {}
            },
            "<socialLinkPartial1": {
                name: "socialLinkPartial",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("shared.contenttoolbar2", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.b(' <div id="toolbar"> <div id="metadata" class="bound"> <div class="module_body '), n.s(n.f("contentToolbarTitleLink", e, t, 1), e, t, 0, 150, 162, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("has-prodlink")
            }), e.pop()), n.b(" "), n.s(n.f("cds", e, t, 1), e, t, 1, 0, 0, "") || n.s(n.f("suppress_social", e, t, 1), e, t, 1, 0, 0, "") || n.b("has-social"), n.b(" "), n.s(n.f("purchase", e, t, 1), e, t, 0, 271, 283, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("has-purchase")
            }), e.pop()), n.b(' "> <div class="contentarea col-container"> <div class="content"> <h1>'), n.b(n.v(n.f("title", e, t, 0))), n.b('</h1> <p itemprop="description">'), n.b(n.v(n.f("description", e, t, 0))), n.b(n.v(n.f("rating", e, t, 0))), n.b('</p> </div> </div> <div class="secondary-content"> <div class="promo-social-wrapper"> <div class="meta-content"> <div class="productlink"> '), n.s(n.f("contentToolbarTitleLink", e, t, 1), e, t, 0, 599, 739, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" "), i.s(i.f("asset_desktop_image", e, t, 1), e, t, 0, 624, 714, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' <a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('" class="icon"> <img src="'), i.b(i.v(i.f("asset_desktop_image", e, t, 0))), i.b('" alt="'), i.b(i.v(i.f("title", e, t, 0))), i.b('"> </a> ')
                }), e.pop()), i.b(" ")
            }), e.pop()), n.b(" "), n.s(n.f("sponsored_content_type", e, t, 1), e, t, 0, 795, 867, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <span class="watch_icon watch_icon_'), i.b(i.v(i.f("sponsored_content_type", e, t, 0))), i.b('"></span> ')
            }), e.pop()), n.b(" "), n.s(n.f("contentToolbarTitleLink", e, t, 1), e, t, 0, 923, 975, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <a class="icon_title" href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('">'), i.b(i.v(i.f("title", e, t, 0))), i.b("</a> ")
            }), e.pop()), n.b(" </div> "), n.s(n.f("cds", e, t, 1), e, t, 1, 0, 0, "") || n.s(n.f("suppress_social", e, t, 1), e, t, 1, 0, 0, "") || (n.b(" "), n.b(n.rp("<socialLinkPartial0", e, t, "")), n.b(" ")), n.b(" "), n.s(n.f("purchase", e, t, 1), e, t, 0, 1105, 1187, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <div id="purchase"> <p><a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('" target="_blank">'), i.b(i.v(i.f("text", e, t, 0))), i.b("</a></p> </div> ")
            }), e.pop()), n.b(" </div> </div> </div> </div> "), n.s(n.f("cds", e, t, 1), e, t, 1, 0, 0, "") || (n.b(' <div class="ad-container"> '), n.s(n.f("showCompanion", e, t, 1), e, t, 0, 1283, 1331, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<div class="companionad">'), i.b(i.t(i.f("companionAd", e, t, 0))), i.b("</div>")
            }), e.pop()), n.b(" "), n.s(n.f("showCompanion", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.t(n.f("mobileAd", e, t, 0))), n.b(" </div> ")), n.b(" </div> </div>"), n.fl()
        },
        partials: {
            "<socialLinkPartial0": {
                name: "socialLinkPartial",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("partials.social_link", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.b('<li class="social-dropdown-btn '), n.b(n.v(n.f("share_type", e, t, 0))), n.b('"> <div class="label" role="button">'), n.b(n.v(n.f("share_text", e, t, 0))), n.b('</div> <!-- dropdown area --> <div class="dropdown-panel"> <span class="dropdown-label">'), n.b(n.v(n.f("output_label", e, t, 0))), n.b(':</span> <textarea rows="1" class="text-output">'), n.b(n.v(n.f("output_content", e, t, 0))), n.b("</textarea> </div> </li>"), n.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("partials.social_btn", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.b('<button type="button" class="social-link-btn ada-el-focus'), n.s(n.f("social_btn_text_lightness", e, t, 1), e, t, 0, 87, 122, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" text-"), i.b(i.v(i.f("social_btn_text_lightness", e, t, 0)))
            }), e.pop()), n.b('" data-source="'), n.s(n.f("shareOverrides", e, t, 1), e, t, 0, 186, 209, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.v(i.d("shareOverrides.href", e, t, 0)))
            }), e.pop()), n.s(n.f("shareOverrides", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.v(n.f("href", e, t, 0))), n.b('" '), n.s(n.f("content_collection_id", e, t, 1), e, t, 0, 302, 345, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('data-collection="'), i.b(i.v(i.f("content_collection_id", e, t, 0))), i.b('"')
            }), e.pop()), n.b(' data-thumb="'), n.b(n.v(n.f("thumb", e, t, 0))), n.b('" data-title="'), n.s(n.f("shareOverrides", e, t, 1), e, t, 0, 426, 450, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.v(i.d("shareOverrides.title", e, t, 0)))
            }), e.pop()), n.s(n.f("shareOverrides", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.v(n.f("title", e, t, 0))), n.b('" '), n.s(n.f("embedURL", e, t, 1), e, t, 0, 531, 562, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' data-embed-url="'), i.b(i.v(i.f("embedURL", e, t, 0))), i.b('" ')
            }), e.pop()), n.b(" "), n.b(' id="share-btn-'), n.b(n.v(n.f("uid", e, t, 0))), n.b('" aria-label="'), n.b(n.v(n.d("translations.share", e, t, 0))), n.b('"> <span class="icon-social"></span> <span class="social-share-title">'), n.b(n.v(n.d("translations.share", e, t, 0))), n.b("</span> </button> "), n.s(n.f("showMoreLess", e, t, 1), e, t, 0, 836, 909, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<a class="show-more-mobile visible"></a> <a class="show-less-mobile"></a>')
            }), e.pop()), n.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.jQuery,
            i = e.document,
            n = e.Tracker;
        t(function() {
            var r = e.location;
            t(i).on("click", ".social-dropdown-btn .label", function() {
                var i = t(this).closest(".social-dropdown-btn"),
                    a = function(e) {
                        t(e).removeClass("active"), t("body").off("click.watch"), t(e).hasClass("active") && (t(e).removeClass("active"), s(e))
                    },
                    s = function(i) {
                        n && n.event({
                            eventCategory: "socialelement",
                            action: "embed",
                            label: e.location.href
                        }), t(i).addClass("active"), t("body").on("click.watch", function(e) {
                            var n = t(e.target);
                            0 === n.closest(".dropdown-panel").length && 0 === n.closest(".social-dropdown-btn").length && a(i)
                        })
                    };
                i.hasClass("active") ? a(i) : (t.each(t(".social-dropdown-btn.active"), function(e, t) {
                    a(t)
                }), r = e.location, s(i))
            });
            var a = t(".dropdown-panel");
            t(i).on("click", a, function() {
                t(this).find(".text-output").trigger("select")
            })
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            i = e.Backbone,
            n = e._,
            r = e.Whiskers;
        t.ContentToolbarView = i.View.extend({
            initialize: function(e) {
                this.options = e || {}, this.render()
            },
            render: function() {
                var e = this.options.ads,
                    a = this.options.use_deprecated_social,
                    s = a ? r.partials.social_link : r.partials.social_btn,
                    o = this.model.get("translations") || {},
                    l = this.options.template || r.shared.contenttoolbar,
                    c = this.model.get("data"),
                    u = n.extend({
                        use_deprecated_social: a,
                        translations: o,
                        disclaimer_copy: this.options.disclaimer_copy,
                        cds: this.options.cdsMode && !e.showCDSAds(),
                        socialLinks: this.options.socialLinks,
                        adSystem: e.adSystem,
                        showMoreLess: "watch_basic" === this.model.get("view"),
                        showCompanion: "dfp" === e.adSystem && ["activitykit", "activitykit2", "game"].indexOf(this.model.get("type")) > -1 || i.Resize.width() > t.Style.breakpoints.midHigh,
                        companionAd: function() {
                            return e.tag(this.type.toLowerCase() + "Companion")
                        }
                    }, "activitykit" === this.model.get("type") && c[1] ? c[1] : c[0], e ? e.helpers(this.model.toJSON()) : {});
                this.$el.html(l.render(u, {
                    socialLinkPartial: s
                }))
            }
        })
    }(this), Whiskers("modules.watch", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.b('<div id="video_watch_container" '), n.s(n.f("skinClass", e, t, 1), e, t, 0, 46, 81, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('class="skin-override-'), i.b(i.v(i.f("skinClass", e, t, 0))), i.b('"')
            }), e.pop()), n.b('> <div id="video_wrapper" class="inverted"> '), n.s(n.f("header_data", e, t, 1), e, t, 0, 155, 173, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.rp("<module_header0", e, t, ""))
            }), e.pop()), n.b(' <div class="bound"> <div class="scaler"></div> <div id="frame"> '), n.s(n.f("data", e, t, 1), e, t, 0, 263, 649, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <!-- Hidden header grill-tracker to correctly identify linkPos --> <h1 class="module_header hide">'), i.b(i.v(i.f("title", e, t, 0))), i.b('</h1> <div id="player" class="player"> '), i.s(i.f("expired", e, t, 1), e, t, 1, 0, 0, "") || (i.b(' <noscript> <div class="player_error">'), i.b(i.v(i.d("translations.no_javascript", e, t, 0))), i.b("</div> </noscript> ")), i.b(" "), i.s(i.f("expired", e, t, 1), e, t, 0, 534, 599, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' <div class="orphan"><p>'), i.b(i.v(i.d("translations.video_expired", e, t, 0))), i.b("</p></div> ")
                }), e.pop()), i.b(" </div> <!-- /Orphan video markup --> ")
            }), e.pop()), n.b(' </div> </div> </div> <!-- End of video_wrapper --> <div class="content-toolbar-container"> <div id="toolbar" class="inverted"> <div id="meta"></div> </div> <!-- End of toolbar --> </div> <!-- End of bound --> '), n.s(n.f("contentToolbarPromoLink", e, t, 1), e, t, 0, 896, 1299, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.s(i.f("message_below", e, t, 1), e, t, 0, 914, 1281, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' <a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('" class="watch_icon item" data-title="'), i.b(i.v(i.f("title", e, t, 0))), i.b('"> <div class="messageLink"> '), i.s(i.f("asset_desktop_image", e, t, 1), e, t, 0, 1031, 1119, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                        i.b(' <div class="watch-icon"> <img src="'), i.b(i.v(i.f("asset_desktop_image", e, t, 0))), i.b('" alt="'), i.b(i.v(i.f("alt_text", e, t, 0))), i.b('"> </div> ')
                    }), e.pop()), i.b(' <div class="copy'), i.s(i.f("asset_desktop_image", e, t, 1), e, t, 1, 0, 0, "") || i.b(" noImage "), i.b('"> <p aria-hidden="true">'), i.b(i.v(i.f("description", e, t, 0))), i.b("</p> </div> </div> </a> ")
                }), e.pop())
            }), e.pop()), n.b(" </div> <!-- End -->"), n.fl()
        },
        partials: {
            "<module_header0": {
                name: "module_header",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("partials.watch_companion_list", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.b(" "), n.s(n.f("VideoSwipeView", e, t, 1), e, t, 0, 61, 279, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <div class="featured"> <h3>'), i.b(i.t(i.f("title", e, t, 0))), i.b("</h3> <h4>"), i.b(i.t(i.f("length", e, t, 0))), i.b(" "), i.b(i.v(i.d("translations.videos", e, t, 0))), i.s(i.f("collectionUrl", e, t, 1), e, t, 0, 164, 227, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' - <a href="'), i.b(i.t(i.f("collectionUrl", e, t, 0))), i.b('">'), i.b(i.t(i.d("translations.see_all", e, t, 0))), i.b("</a>")
                }), e.pop()), i.b("</h4> </div> "), i.b(i.t(i.f("VideoSwipeView", e, t, 0))), i.b(" ")
            }), e.pop()), n.fl()
        },
        partials: {},
        subs: {}
    }), Whiskers("shared.contenttoolbar3", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.b('<div id="metadata" class="bound"> <div class="module_body '), n.s(n.f("contentToolbarTitleLink", e, t, 1), e, t, 0, 86, 98, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("has-prodlink")
            }), e.pop()), n.b(" "), n.s(n.f("cds", e, t, 1), e, t, 1, 0, 0, "") || n.s(n.f("suppress_social", e, t, 1), e, t, 1, 0, 0, "") || n.b("has-social"), n.b(" "), n.s(n.f("purchase", e, t, 1), e, t, 0, 207, 219, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("has-purchase")
            }), e.pop()), n.b(' "> <div class="contentarea col-container"> <div class="content"> <div class="flex-content"> <h1>'), n.b(n.v(n.f("title", e, t, 0))), n.b("</h1> "), n.s(n.f("cds", e, t, 1), e, t, 1, 0, 0, "") || n.s(n.f("suppress_social", e, t, 1), e, t, 1, 0, 0, "") || (n.b(" "), n.b(n.rp("<socialLinkPartial0", e, t, "")), n.b(" ")), n.b(' </div> </div> </div> <div class="secondary-content"> <div class="promo-social-wrapper"> <div class="meta-content"> <p class="description" itemprop="description">'), n.b(n.v(n.f("description", e, t, 0))), n.b(n.v(n.f("rating", e, t, 0))), n.b("</p> "), n.s(n.f("showMoreLess", e, t, 1), e, t, 0, 633, 728, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<a class="show-more"><span>Show More</span></a> <a class="show-less"><span>Show Less</span></a>')
            }), e.pop()), n.b(" "), n.s(n.f("contentToolbarTitleLink", e, t, 1), e, t, 0, 774, 976, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" <div> "), i.s(i.f("asset_desktop_image", e, t, 1), e, t, 0, 805, 893, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' <a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('" class="icon"><img src="'), i.b(i.v(i.f("asset_desktop_image", e, t, 0))), i.b('" alt="'), i.b(i.v(i.f("title", e, t, 0))), i.b('"></a> ')
                }), e.pop()), i.b(' <a class="icon_title" href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('">'), i.b(i.v(i.f("title", e, t, 0))), i.b("</a> </div> ")
            }), e.pop()), n.b(' <div class="productlink"> '), n.s(n.f("contentToolbarPromoLink", e, t, 1), e, t, 0, 1059, 1199, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" "), i.s(i.f("asset_desktop_image", e, t, 1), e, t, 0, 1084, 1174, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' <a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('" class="icon"> <img src="'), i.b(i.v(i.f("asset_desktop_image", e, t, 0))), i.b('" alt="'), i.b(i.v(i.f("title", e, t, 0))), i.b('"> </a> ')
                }), e.pop()), i.b(" ")
            }), e.pop()), n.b(" "), n.s(n.f("contentToolbarPromoLink", e, t, 1), e, t, 0, 1256, 1308, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <a class="icon_title" href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('">'), i.b(i.v(i.f("title", e, t, 0))), i.b("</a> ")
            }), e.pop()), n.b(" "), n.s(n.f("sponsored_content_type", e, t, 1), e, t, 0, 1364, 1436, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <span class="watch_icon watch_icon_'), i.b(i.v(i.f("sponsored_content_type", e, t, 0))), i.b('"></span> ')
            }), e.pop()), n.b(" </div> "), n.s(n.f("purchase", e, t, 1), e, t, 0, 1484, 1566, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <div id="purchase"> <p><a href="'), i.b(i.v(i.f("url", e, t, 0))), i.b('" target="_blank">'), i.b(i.v(i.f("text", e, t, 0))), i.b("</a></p> </div> ")
            }), e.pop()), n.b(" </div> </div> </div> </div> "), n.s(n.f("cds", e, t, 1), e, t, 1, 0, 0, "") || (n.b(' <div class="ad-container"> '), n.s(n.f("showCompanion", e, t, 1), e, t, 0, 1662, 1710, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<div class="companionad">'), i.b(i.t(i.f("companionAd", e, t, 0))), i.b("</div>")
            }), e.pop()), n.b(" "), n.s(n.f("showCompanion", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.t(n.f("mobileAd", e, t, 0))), n.b(" </div> ")), n.b(" </div>"), n.fl()
        },
        partials: {
            "<socialLinkPartial0": {
                name: "socialLinkPartial",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }), Whiskers("modules.catalog", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.s(n.f("data", e, t, 1), e, t, 0, 9, 2691, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" "), i.s(i.d("style_options.text_color", e, t, 1), e, t, 0, 39, 260, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' <style type="text/css"> #ref-'), i.b(i.v(i.f("ref", e, t, 0))), i.b(" .title h1, #ref-"), i.b(i.v(i.f("ref", e, t, 0))), i.b(" .title .desc, #ref-"), i.b(i.v(i.f("ref", e, t, 0))), i.b(" .title .meta, #ref-"), i.b(i.v(i.f("ref", e, t, 0))), i.b(" .title .meta-title, #ref-"), i.b(i.v(i.f("ref", e, t, 0))), i.b(" .title .watch_message { color: "), i.b(i.v(i.d("style_options.text_color", e, t, 0))), i.b("; } </style> ")
                }), e.pop()), i.b(' <div class="bound '), i.b(i.v(i.f("type", e, t, 0))), i.b('"> '), i.s(i.d("header_data.is_ad", e, t, 1), e, t, 0, 341, 396, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b('<div class="ad-module-notice">'), i.b(i.v(i.d("translations.ad", e, t, 0))), i.b("</div>")
                }), e.pop()), i.b(' <div class="container" data-title="'), i.b(i.v(i.f("title", e, t, 0))), i.b('"> <div class="poster-container'), i.s(i.f("watch_message", e, t, 1), e, t, 0, 512, 526, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(" watch-padding")
                }), e.pop()), i.b('"> <div class="poster-inner poster-box"> <div class="poster '), i.s(i.f("isMobile", e, t, 1), e, t, 0, 617, 625, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b("isMobile")
                }), e.pop()), i.b('"> '), i.s(i.f("is_printable", e, t, 1), e, t, 0, 658, 730, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b('<a href="'), i.b(i.v(i.f("printable_asset", e, t, 0))), i.b('" rel="noopener noreferrer" target="_blank">')
                }), e.pop()), i.b(" "), i.s(i.f("noscript", e, t, 1), e, t, 1, 0, 0, "") || (i.b('<img data-src="'), i.b(i.v(i.f("catalogImage", e, t, 0))), i.b('" class="no-src" alt="'), i.b(i.v(i.f("alt_text", e, t, 0))), i.b('" width="100%">')), i.b(" "), i.s(i.f("noscript", e, t, 1), e, t, 0, 868, 949, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b('<noscript><img src="'), i.b(i.v(i.f("catalogImage", e, t, 0))), i.b('" alt="'), i.b(i.v(i.f("alt_text", e, t, 0))), i.b('" width="100%"></noscript>')
                }), e.pop()), i.b(" "), i.s(i.f("is_printable", e, t, 1), e, t, 0, 980, 984, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b("</a>")
                }), e.pop()), i.b(" "), i.s(i.f("sponsor_banner", e, t, 1), e, t, 0, 1021, 1315, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(" "), i.s(i.f("noscript", e, t, 1), e, t, 1, 0, 0, "") || (i.b('<img class="sponsor-banner no-src" data-src="'), i.b(i.v(i.f("sponsor_banner", e, t, 0))), i.b('" title="'), i.b(i.v(i.f("title", e, t, 0))), i.b('" alt="'), i.b(i.v(i.f("alt_text", e, t, 0))), i.b('" width="100%">')), i.b(" "), i.s(i.f("noscript", e, t, 1), e, t, 0, 1177, 1301, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                        i.b('<noscript><img class="sponsor-banner" src="'), i.b(i.v(i.f("sponsor_banner", e, t, 0))), i.b('" title="'), i.b(i.v(i.f("title", e, t, 0))), i.b('" alt="'), i.b(i.v(i.f("alt_text", e, t, 0))), i.b('" width="100%"></noscript>')
                    }), e.pop()), i.b(" ")
                }), e.pop()), i.b(' </div> </div> </div> <div class="title '), i.s(i.d("style_options.text_lightness", e, t, 1), e, t, 0, 1407, 1444, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b("text-"), i.b(i.v(i.d("style_options.text_lightness", e, t, 0)))
                }), e.pop()), i.b('"> <h1>'), i.b(i.v(i.f("title", e, t, 0))), i.b('</h1> <p class="desc"> '), i.b(i.v(i.f("desc", e, t, 0))), i.b(" "), i.s(i.f("price", e, t, 1), e, t, 0, 1535, 1571, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b('<span class="price">'), i.b(i.v(i.f("price", e, t, 0))), i.b("</span>")
                }), e.pop()), i.b(" </p> "), i.s(i.f("watch_message", e, t, 1), e, t, 0, 1605, 1697, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' <div class="watch_message"> <div class="watch_message_text">'), i.b(i.v(i.f("watch_message", e, t, 0))), i.b("</div> </div> ")
                }), e.pop()), i.b(" "), i.s(i.f("meta", e, t, 1), e, t, 0, 1725, 2212, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b('<p class="meta"> '), i.s(i.f("rating", e, t, 1), e, t, 0, 1753, 1825, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                        i.b(' <span class="meta-title">'), i.b(i.v(i.d("translations.rated", e, t, 0))), i.b(":</span> "), i.b(i.v(i.f("rating", e, t, 0))), i.b("<br> ")
                    }), e.pop()), i.b(" "), i.s(i.f("release", e, t, 1), e, t, 0, 1849, 2072, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                        i.b(' <span class="meta-title">'), i.s(i.f("reRelease", e, t, 1), e, t, 0, 1889, 1907, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                            i.b(i.v(i.f("reReleasedText", e, t, 0)))
                        }), e.pop()), i.s(i.f("reRelease", e, t, 1), e, t, 1, 0, 0, "") || (i.b(i.v(i.d("translations.release_date", e, t, 0))), i.b(":")), i.b("</span> "), i.s(i.f("reRelease", e, t, 1), e, t, 1, 0, 0, "") || i.b(i.v(i.f("release", e, t, 0))), i.s(i.f("reRelease", e, t, 1), e, t, 0, 2040, 2053, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                            i.b(i.v(i.f("reRelease", e, t, 0)))
                        }), e.pop()), i.b("<br> ")
                    }), e.pop()), i.b(" "), i.s(i.f("platform_data", e, t, 1), e, t, 0, 2103, 2189, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                        i.b(' <span class="meta-title">'), i.b(i.v(i.d("translations.available_on", e, t, 0))), i.b(":</span> "), i.b(i.v(i.f("platform_data", e, t, 0))), i.b("<br> ")
                    }), e.pop()), i.b(" </p>")
                }), e.pop()), i.b(' <div class="movie-actions"> '), i.s(i.f("is_printable", e, t, 1), e, t, 0, 2267, 2371, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b('<a href="'), i.b(i.v(i.f("printable_asset", e, t, 0))), i.b('" target="_blank" class="button blue large print">'), i.b(i.v(i.d("translations.print", e, t, 0))), i.b("</a>")
                }), e.pop()), i.b(" "), i.s(i.f("retailerData", e, t, 1), e, t, 1, 0, 0, "") || (i.b(" "), i.s(i.f("buttons", e, t, 1), e, t, 0, 2419, 2564, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' <a href="'), i.b(i.v(i.f("href", e, t, 0))), i.b('" class="button large '), i.b(i.v(i.f("type", e, t, 0))), i.b(" "), i.b(i.v(i.f("button_color", e, t, 0))), i.b(' ada-el-focus"'), i.s(i.f("convert", e, t, 1), e, t, 0, 2510, 2537, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                        i.b(' data-convert="'), i.b(i.v(i.f("convert", e, t, 0))), i.b('"')
                    }), e.pop()), i.b(">"), i.b(i.v(i.f("title", e, t, 0))), i.b("</a> ")
                }), e.pop()), i.b(" ")), i.b(" "), i.s(i.f("retailerData", e, t, 1), e, t, 0, 2612, 2645, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' <div class="retail-link"></div> ')
                }), e.pop()), i.b(" </div> </div> </div> </div> ")
            }), e.pop()), n.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Disney;
        t.Style.AssetPaths = {
            theme_stylesheets: {
                junior: "https://static-mh.content.disney.io/matterhorn/assets/themes/junior/application-929000723044.css",
                junior_emea: "https://static-mh.content.disney.io/matterhorn/assets/themes/junior/emea/application-b12707599c57.css",
                marvelkids: "https://static-mh.content.disney.io/matterhorn/assets/themes/marvelkids/application-453fa0512efd.css",
                marvelkids_home: "https://static-mh.content.disney.io/matterhorn/assets/themes/marvelkids/home/application-a5e720def892.css",
                marvelkids_avengers: "https://static-mh.content.disney.io/matterhorn/assets/themes/marvelkids/avengers/application-b9795568b3fc.css",
                "marvelkids_spider-man": "https://static-mh.content.disney.io/matterhorn/assets/themes/marvelkids/spider-man/application-4ace12274aca.css"
            },
            supported_videoplayer_skins: {
                junior: "https://static-mh.content.disney.io/matterhorn/assets/videoplayer/skins/junior_videoplayer-e475ad2b9f39.swf"
            },
            nav_logos: {
                light: {
                    non_retina: "https://static-mh.content.disney.io/matterhorn/assets/logos/nav_logo-89193ebe6563.png",
                    retina: "https://static-mh.content.disney.io/matterhorn/assets/logos/nav_logo@2x-25d10ad375dd.png"
                },
                dark: {
                    non_retina: "https://static-mh.content.disney.io/matterhorn/assets/logos/nav_logo_dark-cdc4f0768098.png",
                    retina: "https://static-mh.content.disney.io/matterhorn/assets/logos/nav_logo_dark@2x-8096506f0cde.png"
                }
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t, i = [],
            n = "unknown",
            r = e.Disney.age = function(e) {
                i ? i.push(e) : e(n)
            },
            a = function() {
                if (i) {
                    for (var r = 0; r < i.length; ++r) i[r](n);
                    e.clearTimeout(t), i = t = null
                }
            };
        r.known = function(e) {
            n = "string" == typeof e && e || "unknown", a()
        }, t = e.setTimeout(a, 5e3)
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney;
        t.language = t.language || function(e) {
            var t = e && e[0],
                i = t && t.replace(/-.*$/, "");
            return i || "en"
        }(t.locales)
    }(this),
    function(e) {
        "use strict";
        var t = e.console,
            i = e.Disney,
            n = i.Ads = i.Ads || {},
            r = e._;
        n.MessageBus = function() {
            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    if (n) try {
                        n.callback(e)
                    } catch (e) {
                        u(e)
                    }
                }
            }

            function a(e, t) {
                var i = {
                        name: e,
                        body: t
                    },
                    r = (o[e] || []).slice(0);
                n(i, r), r = (o["*"] || []).slice(0), n(i, r)
            }

            function s(e, t, i) {
                r.each(c, function(n) {
                    if (n !== i) try {
                        n.bus[n.functionName](e, t)
                    } catch (e) {}
                })
            }
            var o = {},
                l = this,
                c = {},
                u = function(i) {
                    var n = e.onerror;
                    t && t.error && t.error("MessageBus:: " + i.stack || "MessageBus:: " + i.toString()), n && n("MessageBus:: " + i.toString())
                };
            "undefined" == typeof i.Ads.MessageBus.Connections && (i.Ads.MessageBus.Connections = {}), this.addConnection = function(e, t, n) {
                if (!n) {
                    var r = e + "_" + Math.round(1e6 * Math.random()),
                        o = "Disney.Ads.MessageBus.Connections." + r,
                        u = r + "_primarySendMessage",
                        d = r + "_secondarySendMessage",
                        h = function(e, t) {
                            a(e, t), s(e, t, p)
                        },
                        f = {
                            id: e,
                            bus: l,
                            "function": h,
                            functionName: u,
                            uniqueId: r,
                            globalId: o
                        };
                    i.Ads.MessageBus.Connections[r] = {}, i.Ads.MessageBus.Connections[r][u] = h, l[u] = h;
                    var p = {
                        id: e,
                        bus: {
                            sendMessage: t.sendMessage,
                            addMessageListener: t.addMessageListener,
                            removeMessageListener: t.removeMessageListener,
                            addConnection: t.addConnection,
                            removeConnection: t.removeConnection
                        },
                        functionName: d,
                        uniqueId: r,
                        globalId: o
                    };
                    n = {
                        primary: f,
                        secondary: p
                    }, i.Ads.MessageBus.Connections[r].connection = n, c[e] = p;
                    try {
                        t.addConnection(e, l, n)
                    } catch (e) {}
                    p.bus = t
                }
            }, this.removeConnection = function(e) {
                var t = c[e];
                if (t) {
                    var n = i.Ads.MessageBus.Connections[t.uniqueId].connection;
                    l[n.primary.functionName] = null, i.Ads.MessageBus.Connections[t.uniqueId] = null, c[e] = null, t && t.bus && t.bus.removeConnection && t.bus.removeConnection(e)
                }
            }, this.sendMessage = function(e, t) {
                a(e, t), s(e, t)
            }, this.addMessageListener = function(e, t) {
                var i = {
                    name: e,
                    callback: t
                };
                o[e] || (o[e] = []), o[e].push(i)
            }, this.removeMessageListener = function(e, t) {
                for (var i = o[e] || [], n = 0; n < i.length; n++) {
                    var r = i[n];
                    r && r.name === e && r.callback === t && (i[n] = null)
                }
            }, this.destroy = function() {
                r.each(c, function(e) {
                    l.removeConnection(e)
                }), c = null, r.each(o, function(e) {
                    l.removeMessageListener(e.name, e.callback)
                }), o = null, l = null
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t = "https://pubads.g.doubleclick.net/gampad/ads?sz=768x432&iu=&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&correlator=[timestamp]&cmsid=604",
            i = e.Disney,
            n = i.Ads = i.Ads || {},
            r = e.jQuery,
            a = e._,
            s = a.extend,
            o = function() {},
            l = function(e) {
                var t = this,
                    i = function() {
                        t.apply(this, arguments)
                    };
                return o.prototype = this.prototype, i.prototype = new o, s(i.prototype, e), i.sub = this.sub, i
            },
            c = n.AbstractAdPlayer = function(e, i) {
                this.config = {
                    adTagUrl: t + n.isMobile ? "&m_ast=vast" : ""
                }, e || this.init(e, i)
            };
        c.sub = l, c.prototype = {
            id: null,
            config: null,
            messageBus: null,
            analytics: null,
            init: function(e, t) {
                this.id = e, r.extend(this.config, t)
            },
            destroy: function() {
                this.messageBus && (this.messageBus.destroy(), this.messageBus = null), this.analytics && (this.analytics.destroy(), this.analytics = null)
            }
        }
    }(this),
    function(e) {
        "use strict";

        function t() {
            De.ajax(Ae, {
                dataType: "script",
                cache: !0,
                success: i,
                error: n
            })
        }

        function i() {
            he = e.google.ima, he.settings.setLocale(Ee.language), r()
        }

        function n() {
            Se.messageBus.sendMessage("adOpportunityEnd")
        }

        function r() {
            a(), s(), Ie.mobile || ce()
        }

        function a() {
            var e = De("#" + Se.id);
            e.html('<div class="adPlayer"><div class="overlay adStartButton"><img width="100%" src="//img.lum.dolimg.com/v1/game_container/img/playButton.png" /></div><div class="overlay adControls" style="display:none;z-index:6"><div class="adCountdown"><h3>' + Se.config.translations.advertisement + '</h3></div><div class="rightControls"><div class="adSkipButton"><h3>' + Se.config.translations.skip_ad + '</h3></div><a href title="ad mute button" class="adMuteButton muted"></a></div></div><div class="overlay playControls" style="z-index:3;"><div class="playButton"></div></div><div class="overlay adClickTarget" style="z-index:4;"></div><video style="display:none" class="playerElement" poster="' + Se.config.poster + '" autoplay="true" width="100%" oncontextmenu="return false;"></video><div class="adsContainer"></div></div>')
        }

        function s() {
            o(), c(), T(), x(), d(), f(), m(), M(), P(), k()
        }

        function o() {
            be = De("#" + Se.id + " .adControls")[0], ye = De("#" + Se.id + " .adStartButton")[0]
        }

        function l() {
            be = null
        }

        function c() {
            xe = De("#" + Se.id + " .playControls"), xe.on("click", R)
        }

        function u() {
            xe && (xe.off("click", R), xe = null)
        }

        function d() {
            pe = De("#" + Se.id + " .adClickTarget")[0]
        }

        function h() {
            pe && (pe = null)
        }

        function f() {
            De("#" + Se.id + " .adSkipButton").on("click", v)
        }

        function p() {
            De("#" + Se.id + " .adSkipButton").off("click", v)
        }

        function m() {
            De("#" + Se.id + " .adMuteButton").on("click", g)
        }

        function b() {
            De("#" + Se.id + " .adMuteButton").off("click", g)
        }

        function v() {
            we && we.skip()
        }

        function g(e) {
            e.preventDefault(), we && (y(), De(e.currentTarget).toggleClass("muted", Ye))
        }

        function y() {
            var e = we.getVolume();
            we.setVolume(0 === e ? 1 : 0), Ye = !!e
        }

        function _() {
            _e = new he.AdsLoader(ge), _e.addEventListener(he.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, oe, !1), _e.addEventListener(he.AdErrorEvent.Type.AD_ERROR, le, !1)
        }

        function w() {
            _e && (_e.removeEventListener(he.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, oe, !1), _e.removeEventListener(he.AdErrorEvent.Type.AD_ERROR, le, !1), _e = null)
        }

        function k() {
            Ie.mobile && De(".adPlayer").addClass("hide-controls")
        }

        function x() {
            Ie.mobile && (De(ye).addClass("fulloverlay"), De(ye).on("click", A))
        }

        function S() {
            De(ye).off("click", A)
        }

        function T() {
            Ce = De("#" + Se.id + " .playerElement")[0], Ie.mobile && (Ce.style.display = "inline"), Ce && Ce instanceof Oe && De(Ce).on("click", A)
        }

        function C() {
            Ce && Ce instanceof Oe && (De(Ce).off("click", A), Ce.hasOwnProperty("pause") && Ce.pause(), Ce = null)
        }

        function A() {
            ce()
        }

        function M() {
            ve = De("#" + Se.id + " .adsContainer")[0], ge = new he.AdDisplayContainer(ve, Ce, pe)
        }

        function L() {
            ve = null, ge = null
        }

        function P() {
            Ee.Utilities.onFullScreenChange(D)
        }

        function E() {
            Ee.Utilities.offFullScreenChange(D)
        }

        function D() {
            var e = O(),
                t = e.width,
                i = e.height,
                n = e.viewMode;
            I(t, i), we.resize(t, i, n)
        }

        function O() {
            var e = Le,
                t = Pe,
                i = he.ViewMode.NORMAL;
            return Ee.Utilities.isFullScreen() && (e = je.innerWidth, t = je.innerHeight, i = he.ViewMode.FULLSCREEN), {
                width: e,
                height: t,
                viewMode: i
            }
        }

        function I(e, t) {
            De("#" + Se.id).parent().width(e).height(t)
        }

        function R() {
            return me ? void(me = !1) : Be && (Be = !1, Ie.kindle) ? void ce() : (F(), z(), void(we.isCustomPlaybackUsed() ? Ce.play() : we.resume()))
        }

        function j() {
            w(), ae(), l(), u(), h(), p(), b(), L(), E(), C(), S()
        }

        function F() {
            we.isCustomClickTrackingUsed() && De(pe).addClass("fulloverlay")
        }

        function N() {
            De(pe).removeClass("fulloverlay")
        }

        function B() {
            De(xe[0]).addClass("fulloverlay")
        }

        function z() {
            De(xe[0]).removeClass("fulloverlay")
        }

        function Y() {
            be.style.display = "inline"
        }

        function U() {
            be.style.display = "none"
        }

        function H() {
            F()
        }

        function q() {
            ke && Se.messageBus.sendMessage("adEnd"), Se.messageBus.sendMessage("adOpportunityEnd"), N(), z(), U()
        }

        function W() {
            me = !0, fe = !0, Ie.mobile && (N(), B()), Re(K, 0)
        }

        function $() {
            Se.messageBus.sendMessage("paused")
        }

        function V(t) {
            var i = t.getAd().getAdPodInfo().getIsBumper(),
                n = Math.round(t.getAd().getDuration());
            ze = !1, J(), !i && n > Me && (Y(), G(), ke = !0, Se.messageBus.sendMessage("adStart"), Te = e.setInterval(G, 1e3), Se.messageBus.sendMessage("played"))
        }

        function G() {
            var e = Math.round(we.getRemainingTime());
            De("#" + Se.id + " .adCountdown h3").html(Se.config.translations.advertisement + ": " + e)
        }

        function J() {
            De("#" + Se.id + " .adSkipButton").toggle(ze)
        }

        function K() {
            me = !1
        }

        function Q() {
            H()
        }

        function X() {
            Te && e.clearInterval(Te), Re(q, 0)
        }

        function Z() {
            if (Ie.mobile && !we.isCustomPlaybackUsed()) {
                Ce && (Ce.style.visibility = "hidden");
                var e = ve && ve.firstChild;
                e && (e.style.top = 0, e.style.width = "100%", e.style.height = "100%")
            }
        }

        function ee() {
            Se.messageBus.sendMessage("adProgress")
        }

        function te() {}

        function ie() {
            we && (ze = we.getAdSkippableState(), J())
        }

        function ne(t) {
            e.console.error(t.getError().getInnerError().getMessage())
        }

        function re(e) {
            var t = {
                currentTime: 0
            };
            try {
                we = e.getAdsManager(t)
            } catch (e) {}
            we && (we.addEventListener(he.AdEvent.Type.CLICK, te), we.addEventListener(he.AdEvent.Type.LOADED, Z), we.addEventListener(he.AdEvent.Type.CONTENT_PAUSE_REQUESTED, te), we.addEventListener(he.AdEvent.Type.CONTENT_RESUME_REQUESTED, te), we.addEventListener(he.AdErrorEvent.Type.AD_ERROR, ne), we.addEventListener(he.AdEvent.Type.FIRST_QUARTILE, ee), we.addEventListener(he.AdEvent.Type.MIDPOINT, ee), we.addEventListener(he.AdEvent.Type.THIRD_QUARTILE, ee), we.addEventListener(he.AdEvent.Type.COMPLETE, ee), we.addEventListener(he.AdEvent.Type.ALL_ADS_COMPLETED, te), we.addEventListener(he.AdEvent.Type.STARTED, V), we.addEventListener(he.AdEvent.Type.PAUSED, $), we.addEventListener(he.AdEvent.Type.CLICK, W), we.addEventListener(he.AdEvent.Type.CONTENT_PAUSE_REQUESTED, Q), we.addEventListener(he.AdEvent.Type.CONTENT_RESUME_REQUESTED, X), we.addEventListener(he.AdEvent.Type.SKIPPABLE_STATE_CHANGED, ie), we.addEventListener(he.AdEvent.Type.SKIPPED, te))
        }

        function ae() {
            if (we) {
                we.removeEventListener(he.AdEvent.Type.CLICK, te), we.removeEventListener(he.AdEvent.Type.LOADED, Z), we.removeEventListener(he.AdEvent.Type.CONTENT_PAUSE_REQUESTED, te), we.removeEventListener(he.AdEvent.Type.CONTENT_RESUME_REQUESTED, te), we.removeEventListener(he.AdErrorEvent.Type.AD_ERROR, ne), we.removeEventListener(he.AdEvent.Type.FIRST_QUARTILE, ee), we.removeEventListener(he.AdEvent.Type.MIDPOINT, ee), we.removeEventListener(he.AdEvent.Type.THIRD_QUARTILE, ee), we.removeEventListener(he.AdEvent.Type.COMPLETE, ee), we.removeEventListener(he.AdEvent.Type.ALL_ADS_COMPLETED, te), we.removeEventListener(he.AdEvent.Type.STARTED, V), we.removeEventListener(he.AdEvent.Type.PAUSED, $), we.removeEventListener(he.AdEvent.Type.CLICK, W), we.removeEventListener(he.AdEvent.Type.CONTENT_PAUSE_REQUESTED, Q), we.removeEventListener(he.AdEvent.Type.CONTENT_RESUME_REQUESTED, X), we.removeEventListener(he.AdEvent.Type.SKIPPABLE_STATE_CHANGED, ie), we.removeEventListener(he.AdEvent.Type.SKIPPED, te);
                try {
                    we.destroy()
                } catch (e) {}
                we = null
            }
        }

        function se() {
            var e = O(),
                t = e.width,
                i = e.height,
                n = e.viewMode;
            I(t, i), we.init(t, i, n), 1 === we.getVolume() && y()
        }

        function oe(e) {
            if (re(e), we) try {
                se(), we.start()
            } catch (e) {}
        }

        function le() {
            q()
        }

        function ce() {
            De(ye).removeClass("fulloverlay"), ue()
        }

        function ue() {
            if (!_e && (_(), Se.messageBus.sendMessage("adOpportunityStart"), _e.requestAds(de()), ge.initialize(), !Ie.kindle)) {
                var e = Ce.play();
                "undefined" != typeof e && e.then(function() {
                    Ce.pause()
                })
            }
        }

        function de() {
            var e = new he.AdsRequest;
            return e.adTagUrl = Se.config.adTagUrl, e.adType = "video", e.linearAdSlotWidth = Le, e.linearAdSlotHeight = Pe, e.nonLinearAdSlotWidth = Le, e.nonLinearAdSlotHeight = Pe, e
        }
        var he, fe, pe, me, be, ve, ge, ye, _e, we, ke, xe, Se, Te, Ce, Ae = "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
            Me = 6,
            Le = 750,
            Pe = 500,
            Ee = e.Disney,
            De = e.jQuery,
            Oe = e.HTMLVideoElement,
            Ie = e.Modernizr,
            Re = e.setTimeout,
            je = e.window,
            Fe = Ee.Ads = Ee.Ads || {},
            Ne = Fe.AbstractAdPlayer,
            Be = !0,
            ze = !1,
            Ye = !1;
        Fe.HTMLAdPlayer = Ne.sub({
            init: function(e, i) {
                e && (Se = this, Ne.prototype.init.call(this, e, i), Se.messageBus.sendMessage("adOpportunityStart"), t())
            },
            destroy: function() {
                j(), ae(), w();
                var e = De("#" + Se.id);
                e.empty(), Se = null, Ne.prototype.destroy.call(this)
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            i = t.Ads = t.Ads || {},
            n = i.HTMLAdPlayer;
        t.Ads.AdPlayer = function(e, i) {
            var r;
            return r = new n, r.messageBus = new t.Ads.MessageBus, i && !i.poster && (i.poster = ""), r.init(e, i), r
        }
    }(this),
    function(e) {
        "use strict";

        function t(e) {
            return l.Deferred(function(t) {
                r.age(function(i) {
                    "unknown" !== i && e.setTargeting("age", i), t.resolve()
                })
            }).promise()
        }

        function i() {
            return e.ActiveXObject && "undefined" != typeof d.documentElement.style.opacity
        }
        var n, r = e.Disney,
            a = r.Ads = r.Ads || {},
            s = e.Modernizr,
            o = e.Backbone,
            l = e.jQuery,
            c = e._,
            u = e.location.host,
            d = e.document,
            h = c.each,
            f = c.extend,
            p = e.location.href.indexOf("gameVideoAd=true") > -1;
        e.googletag = {
            cmd: []
        };
        var m = function(t) {
                e.googletag.cmd.push(function() {
                    t(e.googletag)
                })
            },
            b = function() {
                return "production" !== r.env ? u = u.match(/\.local\.diznee\.net/) ? u.split(".").slice(0, -3).join(".") : u.replace(/-.+\.fe\.mh\.disney\.io/, "").replace(/_/g, ".") : u.match(/\.pre\.matterhorn\.disney\.io/) && (u = u.replace(/\.pre\.matterhorn\.disney\.io/, "").replace(/_/g, ".")), u.replace("www.", "")
            },
            v = function() {
                var e = /^(?:[a-z0-9-]+\.)*?([a-z0-9-]+(?:\.com?)?(?:\.[a-z]{2})?)$/;
                return b().match(e)[1]
            },
            g = function() {},
            y = function(e) {
                var t = this,
                    i = function() {
                        t.apply(this, arguments)
                    };
                return g.prototype = this.prototype, i.prototype = new g, f(i.prototype, e), i.sub = this.sub, i
            },
            _ = function(e, t, i, n) {
                var r = this;
                this.id || (this.id = c.uniqueId("gpt-")), c.isArray(i[0]) || (i = [i]), r._w = i[0][0], r._h = i[0][1], r.name || (r.name = e), r._d = i, r.events = c.extend({}, o.Events), m(function(e) {
                    r.define(e, t, n)
                })
            };
        _.sub = y, _.prototype = {
            define: function(e, t, i) {
                var n = this._s = e.defineSlot(t, this._d, this.id);
                h(i, function(e, t) {
                    n.setTargeting(t, e)
                }), n.addService(e.pubads())
            },
            tag: function() {
                return '<aside class="gpt ' + this.name + '" id="' + this.id + '" style="' + this.style() + '"></aside>'
            },
            style: function() {
                return "width:" + this._w + "px;height:" + this._h + "px"
            },
            ready: function() {
                var e = this;
                e._$ = l("#" + this.id), m(function() {
                    n(), t(e._s).then(function() {
                        U(e.id)
                    })
                })
            },
            restore: function() {
                this._$ && !this._$.closest("html").length && l("#" + this.id).remove()
            },
            remove: function() {
                this._$.remove()
            },
            refresh: function() {
                var e = this._s;
                e && m(function(t) {
                    t.pubads().refresh([e])
                })
            },
            sizes: function() {
                return c.map(this._d, function(e) {
                    return e[0] + "x" + e[1]
                })
            }
        };
        var w, k, x = _.sub({
                ready: function() {
                    _.prototype.ready.call(this);
                    var t = this._$,
                        i = function() {
                            l.contains(d.body, t[0]) ? t.children().length ? ("inline-block" === t.css("display") && t.css("width", ""), t.css("height", "")) : e.setTimeout(i, 100) : t = null
                        };
                    i()
                }
            }),
            S = "gpt-companion",
            T = "companion",
            C = _.sub({
                id: S,
                name: T,
                define: function() {},
                ready: function() {
                    var e = this;
                    m(function() {
                        n(), e._s = w
                    }), _.prototype.ready.call(this)
                }
            }),
            A = _.sub({
                name: T
            }),
            M = _.sub({
                adPlayed: !1,
                style: function() {
                    return s.mobile ? "" : "width:" + this._w + "px;height:" + this._h + "px"
                },
                tag: function() {
                    return '<aside class="gpt" id="' + this.id + '-container" style="margin:0px auto;' + this.style() + '"><div class="' + this.name + '" id="' + this.id + '" style="' + this.style() + '"></div><div class="' + this.name + '" id="' + this.id + '-video" style="' + this.style() + ';display:none"></div></aside>'
                },
                ready: function() {
                    var i = this;
                    i._$ = l("#" + this.id + "-container"), m(function() {
                        n(), t(i._s).then(function() {
                            U(i.id), p && e.setTimeout(function() {
                                e.disableAutoUnload(), i.videoMode()
                            }, 0)
                        })
                    })
                },
                remove: function() {
                    r.Ads.setPlayer(null), this.adPlayer && (this.adPlayer.messageBus && this.adPlayer.messageBus.removeMessageListener("adStart", this.onAdStart), this.adPlayer.destroy(), this.adPlayer = null), _.prototype.remove.call(this)
                },
                getId: function() {
                    return this.id
                },
                videoMode: function() {
                    l("#" + this.id).hide(), l("#" + this.id + "-video").show();
                    var e = {
                        poster: this.poster,
                        adTagUrl: this.context.getVideoAdTagUrl(),
                        translations: this.context.translations
                    };
                    this.onAdStart = c.bind(function() {
                        this.adPlayed = !0
                    }, this), this.adPlayer = new r.Ads.AdPlayer(this.id + "-video", e), this.adPlayer.messageBus.addMessageListener("adStart", this.onAdStart), r.Ads.setPlayer(this.adPlayer)
                }
            }),
            L = _.sub({
                tag: function() {
                    return '<div class="gpt ' + this.name + '" id="' + this.id + '"></div>'
                }
            }),
            P = _.sub({
                define: function(e, t, i) {
                    var n = this._s = e.defineOutOfPageSlot(t, this.id);
                    h(i, function(e, t) {
                        n.setTargeting(t, e)
                    }), n.addService(e.pubads())
                },
                tag: function() {
                    return '<div class="gpt ' + this.name + '" id="' + this.id + '"></div>'
                }
            }),
            E = [300, 60];
        s.mobile ? (k = {
            banner: [_, [320, 50]],
            rectAll: [_, [320, 50]],
            gameCompanion: [_, [300, 250]],
            activitykit2Companion: [_, [300, 250]],
            searchResults: [_, [300, 250]],
            gameLoader: [M, [750, 500]],
            modalInterstitial: [_, [300, 254]],
            pushdown: [x, [320, 50]],
            mobile: [_, [320, 50]],
            votingLeaderboard: [_, [320, 50]],
            votingMrec: [_, [300, 250]],
            votingSponsor: [_, [120, 60]],
            "native": [L, [2, 2]],
            overlay: [P, [320, 356]]
        }, o.Resize.width() >= 728 && (l("html").addClass("tablet-ads"), k.videoCompanion = [C, E], k.pushdown = [_, [728, 90]], k.rectAll = [_, [300, 250]], k.overlay = [P, [728, 425]])) : k = {
            videoCompanion: [C, E],
            activitykitCompanion: [A, E],
            activitykit2Companion: [_, [300, 250]],
            gameLoader: [M, [750, 500]],
            pushdown: [x, [
                [970, 90],
                [970, 66],
                [728, 90],
                [970, 250]
            ]],
            rectangle: [_, [300, 250]],
            rectAll: [_, [300, 250]],
            gameCompanion: [_, [300, 250]],
            searchResults: [_, [300, 250]],
            banner: [_, [320, 50]],
            modalInterstitial: [_, [300, 254]],
            votingLeaderboard: [_, [728, 90]],
            votingMrec: [_, [300, 250]],
            votingSponsor: [_, [160, 80]],
            "native": [L, [2, 2]],
            overlay: [P, [924, 545]]
        };
        var D, O, I, R = a.DoubleClickAdContext = function(e) {
                var t = this;
                t.adData = e, t.slots = I = {}, t.adCounts = {}, t.translations = {
                    advertisement: "Advertisement",
                    skip_ad: "Skip Ad"
                }, t.unit = D = s.mobile && t.adData.config.mobile || t.adData.config.web, t._t = O = t.adData.config.targeting, t.adSystem = "dfp", t.companion = "gpt-companion:300:60", t.ageReady = l.Deferred(function(e) {
                    r.age(e.resolve)
                }).promise(), t.status = function() {
                    return t.ageReady
                }, t.useAdPattern = function() {
                    return !0
                }, t.iterateRegistryName = function(e) {
                    var i = t.adCounts[e] || 0,
                        n = e;
                    return i > 0 && (n = e + "-" + i), t.adCounts[e] = i + 1, n
                }, this.bindGptEventListeners()
            },
            j = function(e) {
                var t = e.externals || [],
                    i = t.length > 0 ? t[0] : {};
                return i
            },
            F = function(e, t) {
                return (c.find(t, function(t) {
                    return t.kaltura_act_id === e.account && (!t.kaltura_group || t.kaltura_group === e.group)
                }) || {
                    cms_id: 2044
                }).cms_id
            };
        R.prototype = {
            noAds: function() {
                return !this.unit
            },
            tag: function(e, t, i) {
                var n, r = k[e];
                return r ? (n = r[0], r = new n(e, i || this.unit, r[1], f({}, this._t, t)), r.context = this, this.slots[this.iterateRegistryName(e)] = r, r.tag()) : ""
            },
            showCDSAds: function() {
                return !1
            },
            cds: function() {
                return !!this.adData.cds
            },
            refresh: function() {
                var t = this;
                m(function(i) {
                    r.age(function() {
                        e.setTimeout(function() {
                            i.pubads().refresh(c.pluck(t.slots, "_s"))
                        }, 0)
                    })
                })
            },
            ready: function() {
                h(this.slots, function(e) {
                    e.ready()
                }), this.refresh()
            },
            helpers: function(e, t, i) {
                var n = this,
                    r = {};
                return h(k, function(e, a) {
                    r[a + "Ad"] = function() {
                        return n.tagWithTargeting(a, t, i)
                    }
                }, this), r
            },
            tagWithTargeting: function(e, t, i) {
                return this.tag(e, f({}, t, this.adTargeting), i)
            },
            setAdPosition: function(e, t) {
                var i, n, r, a, s, o = this.getPageTemplate(),
                    l = e.attributes;
                return r = "ref-" + l.ref, a = this.getAbbrModuleMap()[l.view] || l.view, s = t ? t : this.getPositionInSection(l.view) || "", n = (o + "/" + r + "/" + a + "/" + s).replace(/\/$/, ""), i = {
                    pos: n
                }
            },
            getPageTemplate: function() {
                var e, t = this.adData.config.web,
                    i = t.match("dcom(?:-mobile)?/([^/]*)"),
                    n = null !== i && i.length > 1,
                    r = this.adData.adTargeting.siteSection && this.adData.adTargeting.siteSection.toLowerCase() || null,
                    a = this.adData.adTargeting.contentType,
                    s = this.getAdUnitTemplateMap();
                if (i = !!n && i[1], i && s[i]) {
                    var o = s[i];
                    e = "section" === a && o.siteSectionMap && o.siteSectionMap[r] ? o.siteSectionMap[r] : o.contentTypeMap[a] ? o.contentTypeMap[a] : o.key + "-" + a
                }
                return e ? e : r
            },
            getAdUnitTemplateMap: function() {
                return this.adUnitTemplateMap || (this.adUnitTemplateMap = {
                    video: {
                        key: "vid",
                        siteSectionMap: {
                            movies: "vid-movs-home"
                        },
                        contentTypeMap: {
                            homepage: "vid-home",
                            video: "vid-watch",
                            collection: "vid-coll"
                        }
                    },
                    movies: {
                        key: "movs",
                        contentTypeMap: {
                            homepage: "movs-home"
                        }
                    },
                    lol: {
                        key: "lol",
                        siteSectionMap: {
                            games: "lol-games",
                            video: "lol-vid",
                            characters: "lol-chars"
                        },
                        contentTypeMap: {
                            homepage: "lol-home"
                        }
                    },
                    shows: {
                        key: "shows",
                        contentTypeMap: {
                            homepage: "shows-home"
                        }
                    },
                    search: {
                        key: "search",
                        contentTypeMap: {
                            homepage: "search-home"
                        }
                    }
                }), this.adUnitTemplateMap
            },
            getAbbrModuleMap: function() {
                return this.abbrModuleMap || (this.abbrModuleMap = {
                    video_playlist_inline: "vid_play_in",
                    sidekick_one_up: "sidek_1_up",
                    sidekick_two_up: "sidek_2_up",
                    sidekick_featured: "sidek_feat",
                    sidekick_product: "sidek_prod"
                }), this.abbrModuleMap
            },
            getPositionInSection: function(e) {
                var t, i = ["video_playlist_inline", "stream", "sidekick_one_up", "sidekick_featured", "sidekick_video"],
                    n = "sidekick_two_up" === e;
                return i.indexOf(e) > -1 ? t = "pos-2" : n && (t = "pos-3"), t
            },
            setTranslation: function(e, t) {
                this.translations[e] = t
            },
            setTargeting: function(e, t) {
                this._t[e] = t
            },
            sizes: function() {
                return c.union.apply(c, c.invoke(this.slots, "sizes"))
            },
            getVideoAdTagUrl: function(e) {
                e = e || {};
                var t = e.adId ? e.adId : "",
                    i = this.adData.cmsIdKalturaMap || [{}],
                    n = F(j(e), i),
                    a = encodeURIComponent(r.Ads.getAdUnit()),
                    o = encodeURIComponent(r.Ads.getCompanionSizesString()),
                    l = encodeURIComponent(r.Ads.getTargetingString(e)),
                    c = encodeURIComponent(r.Ads.getAdRule()),
                    u = encodeURIComponent(r.Ads.getDescriptionUrl()),
                    d = "https://pubads.g.doubleclick.net/gampad/ads?sz=768x432|1920x480&adRule=" + c + "&iu=" + a + "&ciu_szs=" + o + "&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&correlator=[timestamp]&cmsid=" + n + "&cust_params=" + l + "&description_url=" + u;
                return t && t.length > 0 && (d += "&vid=" + t), s.mobile && (d += "&m_ast=vast"), d
            },
            gptSlotLookupAndTrigger: function(e, t) {
                var i = c.find(this.slots, function(e) {
                    return e._s === t.slot
                });
                i && i.events.trigger(e, t)
            },
            bindGptEventListeners: function() {
                var e = this;
                m(function(t) {
                    ["slotRenderEnded"].forEach(function(i) {
                        t.pubads().addEventListener(i, function(t) {
                            e.gptSlotLookupAndTrigger.call(e, i, t)
                        })
                    })
                })
            },
            findSlotById: function(e) {
                return c.find(this.slots, function(t) {
                    return t.id === e
                })
            }
        }, h(["restore", "remove"], function(e) {
            R.prototype[e] = function() {
                h(this.slots, function(t) {
                    t[e]()
                })
            }
        });
        var N = function(e) {
                return e.replace(/[^\w\|]/gi, "")
            },
            B = function() {
                return e.location.hostname
            },
            z = function() {
                var e = r.abn && r.abn.testcase();
                return e ? N(e.id + "|" + e.group) : ""
            },
            Y = function() {
                var t = z(),
                    i = function(t, i) {
                        e.googletag.pubads().setTargeting(t, i)
                    };
                i("tstHostname", B()), t && i("abTest", encodeURIComponent(t)), i("url", e.window.location.href), e.document.referrer && i("refUrl", e.document.referrer)
            };
        n = c.once(function() {
            var t = e.googletag,
                i = t.pubads();
            Y(), w = t.defineSlot(D, E, S), w.addService(t.companionAds()).addService(i), t.companionAds().setRefreshUnfilledSlots(!0), i.enableAsyncRendering(), i.collapseEmptyDivs(), i.disableInitialLoad(), t.enableServices()
        });
        var U = function(t) {
            e.googletag.display(t);
            var i = new e.MutationObserver(function(e) {
                    e.forEach(function(e) {
                        for (var t = e.target.querySelectorAll("iframe"), i = 0; i < t.length; i++) t[i].setAttribute("tabindex", "-1")
                    })
                }),
                n = {
                    childList: !0,
                    subtree: !0
                },
                r = d.getElementById(t);
            r && i.observe(r, n)
        };
        e.sendJSEvent = function(e) {
            try {
                "pauseVideo" === e ? r.Ads.getPlayer().messageBus.sendMessage("pause") : "playVideo" === e && r.Ads.getPlayer().messageBus.sendMessage("resume")
            } catch (e) {}
        };
        var H, q = function(e) {
                if (d.createEvent) {
                    var t = d.createEvent("Event");
                    t.initEvent(e, !0, !0), d.dispatchEvent(t)
                }
            },
            W = function() {
                d.attachEvent && !i() ? d.documentElement.fakePlayEvent++ : q("DisneyMediaPlayerPlay")
            },
            $ = function() {
                d.attachEvent && !i() ? d.documentElement.fakePauseEvent++ : q("DisneyMediaPlayerStop");
            };
        l("document").ready(function() {
            d.attachEvent && !i() && (d.documentElement.fakePlayEvent = 0, d.documentElement.fakePauseEvent = 0)
        }), c.extend(a, {
            isMobile: s.mobile,
            setPlayer: function(e) {
                H && H.messageBus && (H.messageBus.removeMessageListener("played", W), H.messageBus.removeMessageListener("paused", $)), H = e, H && H.messageBus && (H.messageBus.addMessageListener("played", W), H.messageBus.addMessageListener("paused", $))
            },
            getPlayer: function() {
                return H
            },
            getAdUnit: function() {
                return D
            },
            getTargeting: function() {
                return O
            },
            getTargetingString: function(e) {
                var t = "",
                    i = z(),
                    n = e.duration_sec ? e.duration_sec : null;
                O && !O.tstHostname && (O.tstHostname = B()), i && (O.abTest = i), n && n < 60 && (O.duration = "under60");
                var r = e.ads ? e.ads.targeting : null,
                    a = c.extend({}, O, r);
                return c.each(a, function(e, i) {
                    i && e && (t += encodeURIComponent(i) + "=" + encodeURIComponent(e) + "&")
                }), t.slice(0, t.length - 1)
            },
            getCompanionSizes: function() {
                return [E]
            },
            getCompanionSizesString: function() {
                var e = r.Ads.getCompanionSizes(),
                    t = "";
                return c.each(e, function(e) {
                    e && (t += e[0] + "x" + e[1] + ",")
                }), t.slice(0, t.length - 1)
            },
            getAdRule: function() {
                var e = r.Ads.getAdContext(),
                    t = e.adData || {},
                    i = 0 === t.dfpAdRule ? 0 : 1;
                return i
            },
            getDescriptionUrl: function() {
                return "https://" + v()
            }
        })
    }(this), window.Modernizr = function(e, t, i) {
        function n(e) {
            g.cssText = e
        }

        function r(e, t) {
            return typeof e === t
        }

        function a(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function s(e, t) {
            for (var n in e) {
                var r = e[n];
                if (!a(r, "-") && g[r] !== i) return "pfx" != t || r
            }
            return !1
        }

        function o(e, t, n) {
            for (var a in e) {
                var s = t[e[a]];
                if (s !== i) return n === !1 ? e[a] : r(s, "function") ? s.bind(n || t) : s
            }
            return !1
        }

        function l(e, t, i) {
            var n = e.charAt(0).toUpperCase() + e.slice(1),
                a = (e + " " + x.join(n + " ") + n).split(" ");
            return r(t, "string") || r(t, "undefined") ? s(a, t) : (a = (e + " " + S.join(n + " ") + n).split(" "), o(a, t, i))
        }
        var c, u, d, h = "2.7.1",
            f = {},
            p = !0,
            m = t.documentElement,
            b = "modernizr",
            v = t.createElement(b),
            g = v.style,
            y = ":)",
            _ = {}.toString,
            w = " -webkit- -moz- -o- -ms- ".split(" "),
            k = "Webkit Moz O ms",
            x = k.split(" "),
            S = k.toLowerCase().split(" "),
            T = {
                svg: "http://www.w3.org/2000/svg"
            },
            C = {},
            A = [],
            M = A.slice,
            L = function(e, i, n, r) {
                var a, s, o, l, c = t.createElement("div"),
                    u = t.body,
                    d = u || t.createElement("body");
                if (parseInt(n, 10))
                    for (; n--;) o = t.createElement("div"), o.id = r ? r[n] : b + (n + 1), c.appendChild(o);
                return a = ["&#173;", '<style id="s', b, '">', e, "</style>"].join(""), c.id = b, (u ? c : d).innerHTML += a, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(d)), s = i(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), m.style.overflow = l), !!s
            },
            P = function(t) {
                var i = e.matchMedia || e.msMatchMedia;
                if (i) return i(t).matches;
                var n;
                return L("@media " + t + " { #" + b + " { position: absolute; } }", function(t) {
                    n = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
                }), n
            },
            E = {}.hasOwnProperty;
        d = r(E, "undefined") || r(E.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return E.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var i = M.call(arguments, 1),
                n = function() {
                    if (this instanceof n) {
                        var r = function() {};
                        r.prototype = t.prototype;
                        var a = new r,
                            s = t.apply(a, i.concat(M.call(arguments)));
                        return Object(s) === s ? s : a
                    }
                    return t.apply(e, i.concat(M.call(arguments)))
                };
            return n
        }), C.canvas = function() {
            var e = t.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        }, C.touch = function() {
            var i;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? i = !0 : L(["@media (", w.join("touch-enabled),("), b, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                i = 9 === e.offsetTop
            }), i
        }, C.geolocation = function() {
            return "geolocation" in navigator
        }, C.borderradius = function() {
            return l("borderRadius")
        }, C.csstransitions = function() {
            return l("transition")
        }, C.fontface = function() {
            var e;
            return L('@font-face {font-family:"font";src:url("https://")}', function(i, n) {
                var r = t.getElementById("smodernizr"),
                    a = r.sheet || r.styleSheet,
                    s = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "";
                e = /src/i.test(s) && 0 === s.indexOf(n.split(" ")[0])
            }), e
        }, C.generatedcontent = function() {
            var e;
            return L(["#", b, "{font:0/0 a}#", b, ':after{content:"', y, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
                e = t.offsetHeight >= 3
            }), e
        }, C.video = function() {
            var e = t.createElement("video"),
                i = !1;
            try {
                (i = !!e.canPlayType) && (i = new Boolean(i), i.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (e) {}
            return i
        }, C.audio = function() {
            var e = t.createElement("audio"),
                i = !1;
            try {
                (i = !!e.canPlayType) && (i = new Boolean(i), i.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (e) {}
            return i
        }, C.localstorage = function() {
            try {
                return localStorage.setItem(b, b), localStorage.removeItem(b), !0
            } catch (e) {
                return !1
            }
        }, C.svg = function() {
            return !!t.createElementNS && !!t.createElementNS(T.svg, "svg").createSVGRect
        }, C.svgclippaths = function() {
            return !!t.createElementNS && /SVGClipPath/.test(_.call(t.createElementNS(T.svg, "clipPath")))
        };
        for (var D in C) d(C, D) && (u = D.toLowerCase(), f[u] = C[D](), A.push((f[u] ? "" : "no-") + u));
        return f.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var n in e) d(e, n) && f.addTest(n, e[n]);
                else {
                    if (e = e.toLowerCase(), f[e] !== i) return f;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof p && p && (m.className += " " + (t ? "" : "no-") + e), f[e] = t
                }
                return f
            }, n(""), v = c = null,
            function(e, t) {
                function i(e, t) {
                    var i = e.createElement("p"),
                        n = e.getElementsByTagName("head")[0] || e.documentElement;
                    return i.innerHTML = "x<style>" + t + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                }

                function n() {
                    var e = g.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function r(e) {
                    var t = v[e[m]];
                    return t || (t = {}, b++, e[m] = b, v[b] = t), t
                }

                function a(e, i, n) {
                    if (i || (i = t), u) return i.createElement(e);
                    n || (n = r(i));
                    var a;
                    return a = n.cache[e] ? n.cache[e].cloneNode() : p.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e), !a.canHaveChildren || f.test(e) || a.tagUrn ? a : n.frag.appendChild(a)
                }

                function s(e, i) {
                    if (e || (e = t), u) return e.createDocumentFragment();
                    i = i || r(e);
                    for (var a = i.frag.cloneNode(), s = 0, o = n(), l = o.length; s < l; s++) a.createElement(o[s]);
                    return a
                }

                function o(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(i) {
                        return g.shivMethods ? a(i, e, t) : t.createElem(i)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(g, t.frag)
                }

                function l(e) {
                    e || (e = t);
                    var n = r(e);
                    return !g.shivCSS || c || n.hasCSS || (n.hasCSS = !!i(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || o(e, n), e
                }
                var c, u, d = "3.7.0",
                    h = e.html5 || {},
                    f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    b = 0,
                    v = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (e) {
                        c = !0, u = !0
                    }
                }();
                var g = {
                    elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: d,
                    shivCSS: h.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: h.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: a,
                    createDocumentFragment: s
                };
                e.html5 = g, l(t)
            }(this, t), f._version = h, f._prefixes = w, f._domPrefixes = S, f._cssomPrefixes = x, f.mq = P, f.testProp = function(e) {
                return s([e])
            }, f.testAllProps = l, f.testStyles = L, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + A.join(" ") : ""), f
    }(this, this.document),
    /**
     * @license
     * jQuery Tools @VERSION / Flashembed - New wave Flash embedding
     *
     * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
     *
     * http://flowplayer.org/tools/toolbox/flashembed.html
     *
     * Since : March 2008
     * Date  : @DATE
     */
    function() {
        function e(e, t) {
            if (t)
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e
        }

        function t(e, t) {
            var i = [];
            for (var n in e) e.hasOwnProperty(n) && (i[n] = t(e[n]));
            return i
        }

        function i(t, i, a) {
            if (l.isSupported(i.version)) t.innerHTML = l.getHTML(i, a);
            else if (i.expressInstall && l.isSupported([6, 65])) t.innerHTML = l.getHTML(e(i, {
                src: i.expressInstall
            }), {
                MMredirectURL: location.href,
                MMplayerType: "PlugIn",
                MMdoctitle: document.title
            });
            else if (t.innerHTML.replace(/\s/g, "") || (t.innerHTML = "<h2>Flash version " + i.version + " or greater is required</h2><h3>" + (c[0] > 0 ? "Your version is " + c : "You have no flash plugin installed") + "</h3>" + ("A" == t.tagName ? "<p>Click here to download latest version</p>" : "<p>Download latest version from <a href='" + r + "'>here</a></p>"), "A" == t.tagName && (t.onclick = function() {
                    location.href = r
                })), i.onFail) {
                var s = i.onFail.call(this);
                "string" == typeof s && (t.innerHTML = s)
            }
            n && (window[i.id] = document.getElementById(i.id)), e(this, {
                getRoot: function() {
                    return t
                },
                getOptions: function() {
                    return i
                },
                getConf: function() {
                    return a
                },
                getApi: function() {
                    return t.firstChild
                }
            })
        }
        var n = document.all,
            r = "https://www.adobe.com/go/getflashplayer",
            a = "function" == typeof jQuery,
            s = /(\d+)[^\d]+(\d+)[^\d]*(\d*)/,
            o = {
                width: "100%",
                height: "100%",
                id: "_" + ("" + Math.random()).slice(9),
                allowfullscreen: !0,
                allowscriptaccess: "always",
                quality: "high",
                version: [3, 0],
                onFail: null,
                expressInstall: null,
                w3c: !1,
                cachebusting: !1
            };
        window.attachEvent && window.attachEvent("onbeforeunload", function() {
            __flash_unloadHandler = function() {}, __flash_savedUnloadHandler = function() {}
        }), window.flashembed = function(t, n, r) {
            if ("string" == typeof t && (t = document.getElementById(t.replace("#", ""))), t) return "string" == typeof n && (n = {
                src: n
            }), new i(t, e(e({}, o), n), r)
        };
        var l = e(window.flashembed, {
                conf: o,
                getVersion: function() {
                    var e, t;
                    try {
                        t = navigator.plugins["Shockwave Flash"].description.slice(16)
                    } catch (i) {
                        try {
                            e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), t = e && e.GetVariable("$version")
                        } catch (i) {
                            try {
                                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), t = e && e.GetVariable("$version")
                            } catch (e) {}
                        }
                    }
                    return t = s.exec(t), t ? [t[1], t[3]] : [0, 0]
                },
                asString: function(e) {
                    if (null === e || void 0 === e) return null;
                    var i = typeof e;
                    switch ("object" == i && e.push && (i = "array"), i) {
                        case "string":
                            return e = e.replace(new RegExp('(["\\\\])', "g"), "\\$1"), e = e.replace(/^\s?(\d+\.?\d*)%/, "$1pct"), '"' + e + '"';
                        case "array":
                            return "[" + t(e, function(e) {
                                return l.asString(e)
                            }).join(",") + "]";
                        case "function":
                            return '"function()"';
                        case "object":
                            var n = [];
                            for (var r in e) e.hasOwnProperty(r) && n.push('"' + r + '":' + l.asString(e[r]));
                            return "{" + n.join(",") + "}"
                    }
                    return String(e).replace(/\s/g, " ").replace(/\'/g, '"')
                },
                getHTML: function(t, i) {
                    t = e({}, t);
                    var r = '<object width="' + t.width + '" height="' + t.height + '" id="' + t.id + '" name="' + t.id + '"';
                    t.cachebusting && (t.src += (t.src.indexOf("?") != -1 ? "&" : "?") + Math.random()), r += t.w3c || !n ? ' data="' + t.src + '" type="application/x-shockwave-flash"' : ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', r += ">", (t.w3c || n) && (r += '<param name="movie" value="' + t.src + '" />'), t.width = t.height = t.id = t.w3c = t.src = null, t.onFail = t.version = t.expressInstall = null;
                    for (var a in t) t[a] && (r += '<param name="' + a + '" value="' + t[a] + '" />');
                    var s = "";
                    if (i) {
                        for (var o in i)
                            if (i[o]) {
                                var c = i[o];
                                s += o + "=" + encodeURIComponent(/function|object/.test(typeof c) ? l.asString(c) : c) + "&"
                            }
                        s = s.slice(0, -1), r += '<param name="flashvars" value=\'' + s + "' />"
                    }
                    return r += "</object>"
                },
                isSupported: function(e) {
                    return c[0] > e[0] || c[0] == e[0] && c[1] >= e[1]
                }
            }),
            c = l.getVersion();
        a && (jQuery.tools = jQuery.tools || {
            version: "@VERSION"
        }, jQuery.tools.flashembed = {
            conf: o
        }, jQuery.fn.flashembed = function(e, t) {
            return this.each(function() {
                jQuery(this).data("flashembed", flashembed(this, e, t))
            })
        })
    }(),
    function(e) {
        "use strict";
        var t = e.Modernizr,
            i = e.flashembed,
            n = [11, 0];
        t.addTest({
            multi_input: function() {
                return e.navigator.maxTouchPoints > 0 || e.navigator.msMaxTouchPoints > 0
            },
            mobile: function() {
                var t = e.navigator.userAgent || e.navigator.vendor || e.window.opera;
                return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((e.navigator.userAgent || e.navigator.vendor || e.window.opera).substr(0, 4))
            },
            flash: function() {
                return i.isSupported(n)
            },
            ios: function() {
                return e.navigator.userAgent.match(/(ipod|iphone|ipad)/i)
            },
            android: function() {
                return e.navigator.userAgent.match(/(android)/i)
            },
            kindle: function() {
                return e.navigator.userAgent.match(/(kindle|silk)/i)
            },
            scrolling_text: function() {
                return t.csstransitions && t.canvas
            },
            cssfilters: function() {
                var i = e.document.createElement("div");
                return i.style.cssText = t._prefixes.join("filter:blur(2px); "), !!i.style.length && (void 0 === e.document.documentMode || e.document.documentMode > 9)
            },
            cssgrid: function() {
                var i = e.document.createElement("div");
                return i.style.cssText = t._prefixes.join("display:grid; "), !!i.style.length && (void 0 === e.document.documentMode || e.document.documentMode > 9)
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            i = e.Modernizr,
            n = t.Ads = t.Ads || {},
            r = e.jQuery,
            a = e._,
            s = a.extend,
            o = e.location.href.indexOf("gameVideoAd=true") > -1,
            l = e.location,
            c = !0,
            u = function(t) {
                e.googletag.cmd.push(function() {
                    t(e.googletag)
                })
            },
            d = function() {
                var e = l.hostname;
                return "production" !== t.env ? e = e.match(/\.local\.diznee\.net/) ? e.split(".").slice(0, -3).join(".") : e.replace(/-.+\.fe\.mh\.disney\.io/, "").replace(/_/g, ".") : e.match(/\.pre\.matterhorn\.disney\.io/) && (e = e.replace(/\.pre\.matterhorn\.disney\.io/, "").replace(/_/g, ".")), e.replace("www.", "")
            },
            h = function() {
                var e = a.map(t.locales, function(e) {
                        return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                    }).join("|"),
                    i = new RegExp("^(?:[a-z0-9-]+.)*?((?:(?:" + e + ").)?[a-z0-9-]+(?:.com?)?(?:.[a-z]{2})?)$", "i");
                return d().match(i)[1]
            },
            f = function() {
                return d() === h()
            },
            p = function() {
                return d().replace("." + h(), "")
            },
            m = function() {
                return l.pathname.split("/")
            },
            b = function() {
                var e = m();
                return f() ? "" === e[1] ? "homepage" : e[1] : p()
            },
            v = function(e) {
                return a.find(e, function(e) {
                    return ["watch", "watch_2", "watch_3", "sidekick_video", "trailer"].indexOf(e.get("view")) > -1
                })
            },
            g = function(e) {
                return "kaltura" === e.source ? "27176231" : "matterhorn-player"
            },
            y = function(e, t) {
                return (a.find(t, function(t) {
                    return t.kaltura_act_id === e.account && (!t.kaltura_group || t.kaltura_group === e.group)
                }) || {
                    cms_id: M.cmsid
                }).cms_id
            },
            _ = function(e) {
                var t = v(e),
                    i = t ? t.get("data") : null;
                return i && i[0] ? i[0] : null
            },
            w = function(e) {
                var t = m();
                return t[f() ? e : e + 1]
            },
            k = function() {
                return w(0)
            },
            x = function() {
                return w(1)
            },
            S = function() {
                return w(2)
            },
            T = function() {
                var e = new RegExp("(/" + k() + "/|/$)", "g");
                return l.pathname.replace(e, "")
            },
            C = function() {
                var t = e.window;
                return t.location !== t.parent.location
            },
            A = function(e, t) {
                var i = e.adTargeting || {};
                return {
                    actor: i.actor,
                    bucode: t.buCode,
                    buid: t.buId,
                    character: i.character,
                    characterId: i.characterId,
                    country: t.country,
                    disneycms: t.cmsId,
                    pagename: C() ? T() : i.pgn,
                    property: t.property,
                    propertyId: t.propertyId,
                    product: i.product,
                    contenttype: t.contentType || i.contentType,
                    contentid: i.contentId,
                    hub: h(),
                    gamegenre: i.gameGenre,
                    gamename: i.gameTitle,
                    gametype: i.gameType,
                    keywords: i.tag,
                    moviegenre: i.movieGenre,
                    movierating: i.movieRating,
                    movietitle: i.movieTitle,
                    site: b(),
                    section: k(),
                    slug1: x(),
                    slug2: S(),
                    sitesection: b()
                }
            },
            M = {
                cmsid: 2044,
                disneycms: "MH"
            },
            L = {
                manual: !0,
                position: ["oop", "overlay", "top-mpu", "top-head", "inline-head", "lower-head", "rich-head", "logo", "video-mpu", "lower-head", "lower-mpu", "games-video"].join(",")
            },
            P = {
                sdk: 1,
                vid: "vid",
                output: "vast"
            },
            E = "https://analytics.disneyinternational.com/ads/tagsv2/",
            D = function(e) {
                var t = E + "video/";
                return [t, r.param(a.defaults(e || {}, M, P))].join("?")
            },
            O = function(e) {
                var t = E + "json/";
                return [t, r.param(a.defaults(e || {}, M, L))].join("?")
            },
            I = function(e, t) {
                var i = e.advertisement_placement_id;
                if (t = t || e.advertisement_type, "leaderboard" === t) switch (i) {
                    case "top":
                        return "top-head";
                    case "mid1":
                        return "inline-head";
                    case "rich":
                        return "rich-head";
                    default:
                        return "lower-head"
                } else {
                    if ("mpu" !== t) return "inline-head";
                    switch (i) {
                        case "top":
                            return "top-mpu";
                        case "lower":
                            return "lower-mpu";
                        case "video":
                            return "video-mpu";
                        default:
                            return "top-mpu"
                    }
                }
            },
            R = function() {},
            j = function(e) {
                var t = this,
                    i = function() {
                        t.apply(this, arguments)
                    };
                return R.prototype = this.prototype, i.prototype = new R, s(i.prototype, e), i.sub = this.sub, i
            },
            F = function(e, t) {
                this.id = e, this.element_id = a.uniqueId("am-"), this.type = t
            };
        F.sub = j, F.prototype = {
            tag: function() {
                return '<div class="admaster ' + this.id + '-container"><div class="' + this.id + ' aside" id="' + this.element_id + '"></div></div>'
            },
            ready: function() {
                this._$ = r("#" + this.element_id), this.setAdTabindex()
            },
            setAdTabindex: function() {
                var t = new e.MutationObserver(function(e) {
                        e.forEach(function(e) {
                            for (var t = e.target.querySelectorAll("iframe"), i = 0; i < t.length; i++) t[i].setAttribute("tabindex", "-1")
                        })
                    }),
                    i = {
                        childList: !0,
                        subtree: !0
                    },
                    n = e.document.getElementById(this.element_id);
                n && t.observe(n, i)
            },
            define: function(e) {
                var t = this;
                u(function(i) {
                    var n, a = e.mappingSizes[t.id] || {},
                        s = a.slotSizes || null,
                        o = a.defaults || [],
                        l = a.targeting || {},
                        c = e.viewports || {},
                        u = e.adUnitPath || "",
                        d = ["pubads"];
                    if (a.service && d.push(a.service), n = "oop" === t.id ? i.defineOutOfPageSlot(u, t.element_id) : i.defineSlot(u, o, t.element_id)) {
                        var h, f, p, m, b = i.sizeMapping();
                        if (s) {
                            for (m in c) null !== (h = c[m]) && (b = b.addSize(h, s[m]));
                            n.defineSizeMapping(b.build())
                        }
                        for (m in l) null !== (f = l[m]) && n.setTargeting(m, [f]);
                        for (m in d) null !== (p = d[m]) && r.isFunction(i[p]) && n.addService(i[p]());
                        t.gptslot = n
                    }
                })
            },
            display: function() {
                var e = this;
                u(function(t) {
                    t.display(e.element_id)
                })
            },
            restore: function() {
                this._$ && this._$.length && !this._$.closest("html").length && this._$.remove()
            },
            remove: function() {
                this._$.appendTo("body").empty().remove()
            },
            refresh: function() {
                var e = this;
                u(function(t) {
                    t.pubads().refresh([e.gptslot])
                })
            }
        };
        var N, B = F.sub({
                ready: function() {
                    var e = this;
                    e._$ = r("#" + e.element_id), u(function(t) {
                        r.getJSON(O(a.extend({}, e.context.baseParams, {
                            position: e.id
                        })) + "&callback=?", function(i) {
                            var n, r, a = i.targetings || {},
                                s = t.pubads();
                            e.define(i);
                            for (n in a) null !== (r = a[n]) && s.setTargeting(n, r);
                            e.display(), t.pubads().refresh([e.gptslot])
                        })
                    })
                }
            }),
            z = F.sub({
                adPlayed: !1,
                tag: function() {
                    return '<aside class="admaster" id="' + this.element_id + '-container" style="margin:0px auto;' + this.style() + '"><div class="' + this.id + '" id="' + this.element_id + '" style="' + this.style() + '"></div><div class="' + this.id + '" id="' + this.element_id + '-video" style="' + this.style() + ';display:none"></div></aside>'
                },
                style: function() {
                    return i.mobile ? "" : "width:750px;height:500px"
                },
                ready: function() {
                    var t = this;
                    t._$ = r("#" + this.element_id + "-container"), u(function() {
                        o && e.setTimeout(function() {
                            e.disableAutoUnload(), t.videoMode()
                        }, 0)
                    })
                },
                remove: function() {
                    t.Ads.setPlayer(null), this.adPlayer && (this.adPlayer.messageBus && this.adPlayer.messageBus.removeMessageListener("adStart", this.onAdStart), this.adPlayer.destroy(), this.adPlayer = null), F.prototype.remove.call(this)
                },
                getId: function() {
                    return this.element_id
                },
                videoMode: function() {
                    var e = this.context || {},
                        i = e.adTagPreUrl || "",
                        n = a.isEmpty(i) ? e.adTagUrl : i,
                        s = {
                            adTagUrl: n,
                            translations: e.translations,
                            poster: this.poster
                        },
                        o = this.element_id,
                        l = o + "-video";
                    r("#" + o).hide(), r("#" + l).show(), this.onAdStart = a.bind(function() {
                        this.adPlayed = !0
                    }, this), this.adPlayer = new t.Ads.AdPlayer(l, s), this.adPlayer.messageBus.addMessageListener("adStart", this.onAdStart), t.Ads.setPlayer(this.adPlayer)
                }
            }),
            Y = r("body"),
            U = n.AdMasterAdContext = function(t, i) {
                var n = this;
                if (n.adData = t, n.slots = N || {}, n.translations = {
                        advertisement: "Advertisement",
                        skip_ad: "Skip Ad"
                    }, n.adCounts = {}, n.adSystem = "admaster", n.companion = "div-video-mpu:300:250", n.adTagUrl = "", n.adTagPreUrl = "", n.adTagPostUrl = "", n.adTagReady = r.Deferred(), n.status = function() {
                        return n.adTagReady
                    }, C()) {
                    var a = e.document,
                        s = a.createElement("a");
                    s.href = a.referrer, l = {
                        href: s.href,
                        hostname: s.hostname,
                        pathname: s.pathname
                    }
                }
                i.cto && i.video && this.getVideoAdTagUrl(t, i.cto, i.video).done(function(e) {
                    n.adTagUrl = e, n.adTagReady.resolve({
                        adTagUrl: e
                    })
                }), n.iterateRegistryName = function(e) {
                    var t = this.adCounts[e] || 0,
                        i = e;
                    return t > 0 && (i = e + "-" + t), this.adCounts[e] = t + 1, i
                }, u(function(e) {
                    var t = e.pubads(),
                        i = e.companionAds();
                    t.collapseEmptyDivs(!0), t.enableVideoAds(!0), t.enableSingleRequest(), i.setRefreshUnfilledSlots(!0), t.disableInitialLoad(), t.enableAsyncRendering(), e.enableServices()
                })
            };
        U.prototype = {
            tag: function(e, t) {
                var i;
                return "games-video" === e ? (e = "games-video", t = "gameLoader", i = new z(e, t)) : "modalInterstitial" === e ? (e = "top-mpu", t = "modalInterstitial", i = new B(e, t)) : (t = t || e, i = new F(e, t)), i.context = this, this.slots[this.iterateRegistryName(t)] = i, i.tag()
            },
            getVideoAdTagUrl: function(e, t, i, n) {
                var s = A(e, t),
                    o = e.cmsIdKalturaMap || [{}],
                    c = 0 === e.dfpAdRule ? 0 : 1,
                    u = i.externals && i.externals[0] || {},
                    d = a.extend(s, {
                        vid: i.adId,
                        sdk: c,
                        cmsid: y(u, o),
                        player: g(u),
                        url: l.href,
                        description_url: "https://" + h()
                    }, n),
                    f = D(d);
                return r.get(f).fail(this.adTagReady.resolve)
            },
            ready: function(t, i) {
                var n = t ? t.collection : {},
                    s = i ? i.collection : {},
                    o = s.cto || n.cto || {},
                    l = s.adData || n.adData || this.adData || {},
                    d = 0 === l.dfpAdRule ? 0 : 1,
                    h = this,
                    f = _(n.models) || this.video || {};
                h.view = t, h.dfpAdRule = d, h.baseParams = A(l, o), "undefined" != typeof t && "burger" === r(h.view.el).attr("id") && (l.showOop && Y.append(h.tag("oop")), l.showOverlay && Y.append(h.tag("overlay")));
                var p;
                p = 0 === d ? r.when(h.getVideoAdTagUrl(l, o, f, {
                    vpos: "preroll"
                }), h.getVideoAdTagUrl(l, o, f, {
                    vpos: "postroll"
                })).then(function(e, t) {
                    return h.adTagPreUrl = e[0], h.adTagPostUrl = t[0], {
                        adTagPreUrl: h.adTagPreUrl,
                        adTagPostUrl: h.adTagPreUrl
                    }
                }) : h.getVideoAdTagUrl(l, o, f).then(function(e) {
                    return h.adTagUrl = e, {
                        adTagUrl: e
                    }
                }), p.done(function(e) {
                    h.adTagReady.resolve(e)
                }), u(function(t) {
                    r.ajax({
                        url: O(a.extend({}, h.baseParams, {
                            position: a.map(h.slots, function(e) {
                                return e.id
                            }).join(",")
                        })),
                        dataType: "jsonp",
                        cache: !0,
                        jsonpCallback: "adMasterCallback",
                        success: function(i) {
                            var n, s, o = i.targetings || {},
                                l = t.pubads();
                            a.each(h.slots, function(e) {
                                e.ready(), e.define(i)
                            });
                            for (n in o) null !== (s = o[n]) && l.setTargeting(n, s);
                            a.each(h.slots, function(e) {
                                e.display()
                            });
                            var u = a.map(h.slots, function(e) {
                                return e.gptslot
                            });
                            c ? r(e.window).on("load", function() {
                                c = !1, t.pubads().refresh(u)
                            }) : t.pubads().refresh(u)
                        }
                    })
                })
            },
            cds: function() {
                return !1
            },
            noAds: function() {
                return !1
            },
            useAdPattern: function() {
                return !1
            },
            setTranslation: function(e, t) {
                this.translations[e] = t
            },
            helpers: function(e) {
                var t = this,
                    i = e,
                    n = i ? I(i, "mpu") : "top-mpu";
                return {
                    pushdownAd: function() {
                        return t.tag("top-head", "pushdown")
                    },
                    rectangleAd: function() {
                        return t.tag(n, "rectangle")
                    },
                    rectAllAd: function() {
                        return t.tag(n, "rectAll")
                    },
                    companionAd: function() {
                        var e = i && i.view;
                        return "watch" === e || "play" === e ? t.tag("video-mpu", "companionAd") : "watch_2" === e ? t.tag("video-comp-2", "companionAd") : t.tag(n, "companionAd")
                    },
                    gameLoaderAd: function() {
                        return t.tag("games-video", "gameLoader")
                    },
                    bannerAd: function() {
                        return i && "ad_banner" === i.view ? t.tag(I(i), "bannerAd-" + I(i)) : t.tag("inline-head", "bannerAd")
                    }
                }
            },
            remove: function() {
                a.each(this.slots, function(e) {
                    e.remove()
                })
            }
        }, a.each(["restore"], function(e) {
            U.prototype[e] = function() {
                a.each(this.slots, function(t) {
                    t[e]()
                })
            }
        })
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            i = t.Ads || {},
            n = e.Backbone,
            r = e.document,
            a = e.window,
            s = e._,
            o = null,
            l = i.ShareThroughAds = function() {
                return o ? o : (this.init(), o = this, this)
            };
        l.prototype = {
            init: function() {
                var e = r.createElement("script");
                e.src = "//native.sharethrough.com/assets/sfp.js", e.type = "text/javascript", e.charset = "utf-8", e.dataset.strDisableTracking = "true", e.onerror = this.onScriptError.bind(this), this.scriptElem = e, a.top.document.getElementsByTagName("body")[0].appendChild(e)
            },
            onScriptError: function() {
                l.prototype.loadScriptError = !0;
                var t = e.document.createEvent("Event");
                t.initEvent("scriptLoadError", !0, !0), this.scriptElem.dispatchEvent(t)
            },
            newModel: function() {
                return new n.Model({
                    is_ad: !0
                })
            },
            insertModel: function(e, t) {
                return e.length ? (t = t > e.length ? e.length : t, void e.add(this.newModel(), {
                    at: t
                })) : e
            },
            shouldRenderSlot: function(e, t) {
                var i = t.get("config_options");
                return !!s.isObject(i) && (i.native_ads && e.get("is_ad"))
            },
            getPlacementKey: function(e) {
                var t = e.get("config_options");
                return s.isObject(t) ? t.native_ad_placement_key : ""
            },
            removeModel: function(e) {
                var t = e.find(function(e) {
                    return e.get("is_ad") === !0
                });
                t && e.remove(t)
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t = e.Disney,
            i = t.Ads = t.Ads || {},
            n = function() {
                return {}
            },
            r = e.jQuery,
            a = i.NoAdContext = function(e) {
                var t = r.Deferred().resolve().promise();
                this.cds = function() {
                    return e.cds
                }, this.noAds = function() {
                    return !0
                }, this.status = function() {
                    return t
                }
            };
        a.prototype = {
            adSystem: "noads",
            showCDSAds: function() {
                return !1
            },
            helpers: n,
            ready: n,
            refresh: n,
            restore: n,
            remove: n,
            setTargeting: n,
            setTranslation: n,
            tag: function() {
                return ""
            },
            sizes: function() {
                return []
            }
        }
    }(this),
    function(e) {
        "use strict";
        var t, i = e.Disney,
            n = i.consentPolicy || {},
            r = i.Ads,
            a = e._,
            s = e.jQuery;
        s(function() {
            var e = "true" === n.use_tealium_for_gpt_loading;
            !e && a.contains(["dfp", "admaster"], i.adSystem) && s.ajax("//www.googletagservices.com/tag/js/gpt.js", {
                dataType: "script",
                cache: !0
            })
        }), i.Ads.AdContext = function(e) {
            var i = e.adData;
            switch (i.adSystem) {
                case "dfp":
                    t = new r.DoubleClickAdContext(i);
                    break;
                case "admaster":
                    t = new r.AdMasterAdContext(i, {
                        cto: e.cto,
                        video: e.video
                    });
                    break;
                default:
                    t = new r.NoAdContext(i)
            }
            return t
        }, a.extend(r, {
            getAdSlots: function() {
                return i.top ? i.top.current.ads.slots : t
            },
            getAdContext: function() {
                return i.top ? i.top.current.ads : t
            }
        })
    }(this), Whiskers("partials.watch_side_list", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.s(n.f("playlistContent", e, t, 1), e, t, 0, 20, 615, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" "), i.s(i.f("noLink", e, t, 1), e, t, 1, 0, 0, "") || (i.b("<a "), i.s(i.f("href", e, t, 1), e, t, 0, 44, 59, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b('href="'), i.b(i.v(i.f("href", e, t, 0))), i.b('"')
                }), e.pop()), i.b(' class="playlist-item playlist-link" data-id="'), i.b(i.v(i.f("id", e, t, 0))), i.b('" data-index="'), i.b(i.v(i.f("index", e, t, 0))), i.b('">')), i.b(" "), i.s(i.f("noLink", e, t, 1), e, t, 0, 168, 235, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b('<div class="playlist-item" data-id="'), i.b(i.v(i.f("id", e, t, 0))), i.b('" data-index="'), i.b(i.v(i.f("index", e, t, 0))), i.b('">')
                }), e.pop()), i.b(' <img src="'), i.b(i.v(i.f("thumb_list", e, t, 0))), i.b('" class="thumbnail" alt="'), i.b(i.v(i.f("alt_text", e, t, 0))), i.b('" /> <span class="thumbnail-overlay"></span> <span class="playlist-item-info"> <h3 class="video-title">'), i.b(i.v(i.f("title", e, t, 0))), i.b("</h3> "), i.s(i.f("nowPlaying", e, t, 1), e, t, 0, 441, 502, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b('<span class="now-playing">'), i.b(i.v(i.d("translations.now_playing", e, t, 0))), i.b("</span>")
                }), e.pop()), i.b(' <h4 class="desc">'), i.b(i.v(i.f("ptitle", e, t, 0))), i.b("</h4> </span> "), i.s(i.f("noLink", e, t, 1), e, t, 0, 570, 576, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b("</div>")
                }), e.pop()), i.b(" "), i.s(i.f("noLink", e, t, 1), e, t, 1, 0, 0, "") || i.b("</a>"), i.b(" ")
            }), e.pop()), n.fl()
        },
        partials: {},
        subs: {}
    }),
    function(e) {
        "use strict";
        var t, i = e.Disney,
            n = e.Grill,
            r = e._,
            a = e.jQuery,
            s = e.Whiskers,
            o = e.Math,
            l = i.Utilities,
            c = n.WatchModuleView = n.ModuleView.extend({
                style_classes: ["full-width", "full-height", "skip-top-border"],
                required_template_sets: ["module_header", "entities"],
                visibilityThreshold: 200,
                assets: {
                    scripts: ["https://static-mh.content.disney.io/matterhorn/assets/videoplayer-d91daf2efd22.js"]
                },
                initialize: function(t) {
                    this.options = t || {};
                    var n = this,
                        s = this.model.get("config_options") || {},
                        o = this.model.collection && this.model.collection.style,
                        l = o && o.video_player_skin_override;
                    if (r.extend(n.options, s), l && "matterhorn" !== l) {
                        var c = i.Style.AssetPaths.supported_videoplayer_skins;
                        r.extend(this.playerConfig, {
                            skinUrl: c[l]
                        }), this.skinClass = l
                    }
                    if (n.playVideoInline) {
                        var u = this.model.get("data")[0];
                        u.hideTitle = !0, u.hideShare = !0, u.hideLogo = !0, n.model.set("currentVideo", u)
                    }
                    n.h = a(e).on("resize." + n.cid, r.throttle(function() {
                        var t = a(e).height();
                        t !== n.h && (n.h = t, n.layout())
                    }, 100)).height()
                },
                render: function() {
                    var e = r.first(this.model.get("data")),
                        i = this.hidePromoLink ? null : e.contentToolbarPromoLink,
                        n = r.extend({
                            tags: e.tags,
                            contenttype: e.contenttype,
                            contentToolbarPromoLink: i,
                            cds: this.options.cds,
                            skinClass: this.skinClass,
                            message_below: this.message_below,
                            includePlaylist: this.includePlaylist,
                            includeLeaderboard: this.options.hide_leaderboard ? !this.options.hide_leaderboard : this.includeLeaderboard,
                            sideList: this.sideList
                        }, this.options.ads.helpers(this.model.toJSON(), this.getAdPosition()), this.model.toJSON());
                    this.$el.html(this.template.render(n, this.ctx_additions())), t = n.data[0], this.layout(), this.includePlaylist && "side" === this.playlistPosition && this.bindToScroll()
                },
                ready: function() {
                    var t, i, n = this,
                        a = n.options,
                        s = r.first(n.model.get("data")),
                        o = n.model.get("translations");
                    if (n.loadContentToolBarView(), n.loadItemsWithinModule && e.location.hash) {
                        var c = /(idx\/)([a-z0-9]*)/,
                            u = c.exec(e.location.hash);
                        u && u[2] && u[2] !== s.id && (t = u[2], n.player = null)
                    }
                    if (s.ads = s.ads || {}, s.ads.context = a.ads, s.ads.targeting = this.getAdPosition(), s.content_collection_id) l.fetchContentCollection(s.content_collection_id).then(function(e) {
                        e.content_collection && (r.extend(s, e), i = r.last(s.content_collection), s.content_collection.forEach(function(e, t) {
                            e.id === s.id && (e.nowPlaying = !0, s.id !== i.id && (s.next_in_slider = s.content_collection[t + 1], a.disable_endcard = !0)), e.href = e.href + "?collection=" + s.content_collection_id
                        }), s.hasOwnProperty("next_in_slider") && n.prefetchNextVideoPage(s.next_in_slider.href)), n.configurePlayer(n, s, a, o)
                    }, function() {
                        n.configurePlayer(n, s, a, o)
                    });
                    else {
                        var d = this.model.get("data"),
                            h = this.filterSlider(d, "video");
                        if (d) {
                            var f = this.filterSlider(d, "videoseries");
                            if (s.collection_url = f && f[0] && f[0].href || "", h && h.length > 1) {
                                var p = this.sortSlider(h);
                                s.collection_type = p.series ? "series" : "", d = p.slider, i = r.last(d), s.id !== i.id && (a.disable_endcard = !0), d.forEach(function(e, t) {
                                    e.id === s.id && (e.nowPlaying = !0, s.id !== i.id && (s.next_in_slider = d[t + 1]))
                                }), s.hasOwnProperty("next_in_slider") ? n.prefetchNextVideoPage(s.next_in_slider.href) : s.hasOwnProperty("next") && n.prefetchNextVideoPage(s.next[0].href)
                            }
                        }
                        this.configurePlayer(this, s, a, o)
                    }
                },
                prefetchNextVideoPage: function(e) {
                    l.ajaxRequest(e)
                },
                filterSlider: function(e, t) {
                    return e.filter(function(e) {
                        return e.type && e.type.toLowerCase() === t
                    })
                },
                sortSlider: function(e) {
                    var t = [],
                        i = [];
                    return t = e.filter(function(e) {
                        return e.episode_number
                    }), i = e.filter(function(e) {
                        return !e.episode_number
                    }), t.length > 1 && (t = r(t).chain().sortBy(function(e) {
                        return e.episode_number || 1
                    }).sortBy(function(e) {
                        return e.season_number
                    }).value()), i.length > 1 && (i = r(i).sortBy(function(e) {
                        return e.content_date || e.created_at
                    }).reverse()), {
                        series: 0 !== t.length,
                        slider: t.concat(i)
                    }
                },
                configurePlayer: function(e, t, n, a) {
                    r.extend(e.playerConfig, {
                        video: t,
                        autoPlay_mute: n.autoplay_mute,
                        showEndCard: !n.disable_endcard,
                        ads: {
                            enabled: !n.cds && !n.noAds
                        },
                        translations: a
                    }), "undefined" == typeof itemToPlayOnLoad && (e.player = new i.MatterhornVideoPlayer("player", e.playerConfig)), e.postReady && e.postReady()
                },
                bindToScroll: function() {
                    this.$(".playlist-item-container").on("scroll." + this.cid, r.debounce(r.bind(this.onScroll, this), 300))
                },
                onScroll: function() {
                    var e = this.$(".playlist-gradient"),
                        t = this.$(".playlist-item").last();
                    l.setElementVisibility(t, this.visibilityThreshold), t.data("visibility") ? e.fadeOut() : e.fadeIn()
                },
                loadContentToolBarView: function() {
                    var e, t = this,
                        n = t.options,
                        r = t.$("#meta"),
                        a = t.model.get("data")[0],
                        s = a.not_embeddable,
                        o = t.use_deprecated_social,
                        l = t.model.get("translations");
                    if (o && (e = [{
                            share_type: "share",
                            share_text: l.share,
                            output_label: l.quick_link,
                            output_content: a.href
                        }], s !== !0)) {
                        var c = t.model.collection,
                            u = c && c.title,
                            d = u || a.title,
                            h = '<iframe width="560" height="315" src="' + a.embedURL + '"  frameborder="0" allowfullscreen scrolling="no"></iframe><br/><a href="' + a.href + '">' + d + "</a>";
                        e.unshift({
                            share_type: "embed",
                            share_text: l.embed,
                            output_label: l.embed,
                            output_content: h
                        })
                    }
                    if (t.$(".module_header").addClass("hide"), t.tb = new i.ContentToolbarView({
                            el: r,
                            template: t.toolbar_template,
                            use_deprecated_social: t.use_deprecated_social,
                            model: t.model,
                            socialLinks: e,
                            cdsMode: n.cds,
                            ads: n.ads
                        }), "watch_basic" === this.model.get("view")) {
                        var f = t.$(".description"),
                            p = parseInt(f.css("fontSize").replace("px", ""), 10),
                            m = parseInt(f.css("margin-bottom").replace("px", ""), 10),
                            b = t.$(".show-more, .show-more-mobile"),
                            v = t.$(".show-less, .show-less-mobile");
                        f.height() > p + m && (f.addClass("expand"), t.$(".show-more").addClass("visible")), b.add(v).on("click", function(e) {
                            e.preventDefault(), b.hasClass("visible") ? (b.removeClass("visible"), v.addClass("visible"), f.removeClass("expand").addClass("contract")) : (f.removeClass("contract").addClass("expand"), v.removeClass("visible"), b.addClass("visible"))
                        })
                    }
                },
                layout: function() {
                    var e = this.$("#video_wrapper .bound");
                    e.css("maxWidth", o.min(1024, o.max(320, o.ceil((this.h - 120) / .5625))))
                },
                remove: function() {
                    this.removePlayer(), n.BunView.prototype.remove.call(this), a(e).off("resize." + this.cid), this.tb.remove()
                },
                removePlayer: function() {
                    this.player && (this.player.destroy(), this.player = null)
                },
                getAdPosition: function() {
                    if (!this.options.cds) return this.options.ads && this.options.ads.setAdPosition && this.options.ads.setAdPosition(this.model)
                }
            });
        c.register("watch", {
            template: s.modules.watch,
            toolbar_template: s.shared.contenttoolbar,
            use_deprecated_social: !0,
            message_below: !1,
            playerConfig: {
                autoPlay: !0,
                clickToPlay: !1
            }
        }), c.register("watch_2", {
            template: s.modules.watch,
            toolbar_template: s.shared.contenttoolbar2,
            use_deprecated_social: !1,
            message_below: !0,
            playerConfig: {
                autoPlay: !0,
                clickToPlay: !1,
                loadVideoInline: !1
            }
        }), c.register("watch2_inline", {
            template: s.modules.watch,
            className: "bun module full-width full-height watch_2",
            toolbar_template: s.shared.contenttoolbar2,
            use_deprecated_social: !1,
            message_below: !0,
            playerConfig: {
                autoPlay: !0,
                clickToPlay: !1,
                showEndCard: !1
            },
            loadItemsWithinModule: !0,
            hidePromoLink: !0,
            catalogEntityType: "Game"
        })
    }(this), Whiskers("modules.watch_playlist", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.s(n.f("cds", e, t, 1), e, t, 1, 0, 0, "") || (n.b(" "), n.s(n.f("includeLeaderboard", e, t, 1), e, t, 0, 32, 94, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <div class="watch-module-leaderboard">'), i.b(i.t(i.f("pushdownAd", e, t, 0))), i.b("</div> ")
            }), e.pop()), n.b(" ")), n.b(' <div id="video_watch_container" class="'), n.s(n.f("skinClass", e, t, 1), e, t, 0, 180, 207, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("skin-override-"), i.b(i.v(i.f("skinClass", e, t, 0)))
            }), e.pop()), n.b(' bound"> <div class="player-section"> <div id="video_wrapper" class="inverted"> '), n.s(n.f("header_data", e, t, 1), e, t, 0, 317, 335, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.rp("<module_header0", e, t, ""))
            }), e.pop()), n.b(' <div class="scaler"></div> <div id="frame"> '), n.s(n.f("currentVideo", e, t, 1), e, t, 0, 413, 837, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" "), i.b(' <h1 class="module_header hide">'), i.b(i.v(i.f("title", e, t, 0))), i.b('</h1> <div id="player" class="player"> '), i.s(i.f("expired", e, t, 1), e, t, 1, 0, 0, "") || (i.b(' <noscript> <div class="player_error">'), i.b(i.v(i.d("translations.no_javascript", e, t, 0))), i.b("</div> </noscript> ")), i.b(" "), i.s(i.f("expired", e, t, 1), e, t, 0, 715, 780, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(' <div class="orphan"><p>'), i.b(i.v(i.d("translations.video_expired", e, t, 0))), i.b("</p></div> ")
                }), e.pop()), i.b(" </div> "), i.b(" ")
            }), e.pop()), n.b(" </div> </div>"), n.b(' <div class="content-toolbar-container watch_3"> <div id="toolbar" class="inverted"> <div id="meta"> '), n.b(" "), n.s(n.f("noscript", e, t, 1), e, t, 0, 1107, 1172, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" "), i.s(i.f("current_video", e, t, 1), e, t, 0, 1126, 1153, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b(i.rp("<shared/contenttoolbar31", e, t, ""))
                }), e.pop()), i.b(" ")
            }), e.pop()), n.b(" </div> </div>"), n.b(" </div>"), n.b(" </div>"), n.b(" "), n.s(n.f("sideList", e, t, 1), e, t, 0, 1334, 1537, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <div class="playlist"> <div class="scaler"></div> <div class="up-next"> <h3>'), i.b(i.v(i.d("translations.up_next", e, t, 0))), i.b('</h3> </div> <div class="playlist-item-container"></div> <div class="playlist-gradient"></div> </div> ')
            }), e.pop()), n.b(" </div> <!-- End bound--> "), n.s(n.f("sideList", e, t, 1), e, t, 1, 0, 0, "") || n.b(' <div class="playlist companion"> <div class="playlist-item-container"></div> <div class="playlist-gradient"></div> </div> '), n.fl()
        },
        partials: {
            "<module_header0": {
                name: "module_header",
                partials: {},
                subs: {}
            },
            "<shared/contenttoolbar31": {
                name: "shared/contenttoolbar3",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Disney,
            i = e.Grill,
            n = e._,
            r = e.Whiskers,
            a = e.Backbone,
            s = i.PlaylistModuleView = i.WatchModuleView.extend({
                template: r.modules.watch_playlist,
                toolbar_template: r.shared.contenttoolbar3,
                use_deprecated_social: !1,
                message_below: !0,
                includePlaylist: !0,
                playlistPosition: "side",
                playVideoInline: !0,
                playerConfig: {
                    autoPlay: !0,
                    clickToPlay: !1,
                    loadVideoInline: !1
                },
                playlist: [],
                getSimilarPlaylist: function(e) {
                    return t.Recommender.getRecommendations(e).then(function(e) {
                        return e
                    })
                },
                renderSideList: function() {
                    this.playlist.forEach(function(e, t) {
                        e.index = t
                    });
                    var e = this.$(".playlist-item-container"),
                        t = {
                            translations: this.model.get("translations"),
                            playlistContent: this.playlist
                        };
                    e.html(r.partials.watch_side_list.render(t))
                },
                renderCompanionList: function() {
                    var i, n = this.model.get("data")[0],
                        s = !1,
                        o = this;
                    if (n.content_collection_id && n.content_collection && n.content_collection.length > 0 ? (i = new a.Collection(n.content_collection), s = !0) : this.playlist && this.playlist.length > 1 && (this.playlist = this.sortSlider(this.playlist).slider, i = new a.Collection(this.playlist), s = !0), s) {
                        var l = o.$(".playlist-item-container"),
                            c = new e.VideoSwipeView({
                                className: "slider-view pagination-styles",
                                companion: !0,
                                collection_type: n.collection_type,
                                translations: o.model.get("translations"),
                                collection: new a.LazySliderCollection(i.models)
                            }),
                            u = {
                                collectionUrl: n.collection_url,
                                translations: o.model.get("translations"),
                                title: n.content_collection_title,
                                length: i.length,
                                type: o.model.get("type"),
                                VideoSwipeView: t.placeHtml(c)
                            };
                        l.append(r.partials.watch_companion_list.render(u)), t.placeSwap(o, c)
                    }
                },
                postReady: function() {
                    if (this.includePlaylist) {
                        var e = this,
                            t = n.groupBy(this.model.get("data"), "entity_type");
                        e.playlistPosition && "underneath" === e.playlistPosition ? (this.playlist = t.video, e.renderCompanionList()) : (this.playlist = t.video && t.video.slice(1), e.renderSideList()), t.recommendation && e.playlistPosition && "underneath" !== e.playlistPosition && this.getSimilarPlaylist(t.recommendation[0]).then(function(t) {
                            e.playlist = e.playlist.concat(t), e.renderSideList()
                        }).fail(function() {
                            var i = t.video && t.video[0];
                            i && i.next && i.suggested && (e.playlist = i.next.concat(i.suggested)), e.renderSideList.call(e)
                        })
                    }
                }
            });
        s.register("watch_3", {
            style_classes: ["full-width", "full-height", "skip-top-border", "watch-side-playlist-view"],
            sideList: !0
        }), s.register("watch_basic", {
            style_classes: ["full-width", "full-height", "skip-top-border", "watch-basic-view", "span-full-screen"],
            includePlaylist: !0,
            playlistPosition: "underneath",
            includeLeaderboard: !0
        })
    }(this), Whiskers("modules.watch_playlist_2", {
        code: function(e, t, i) {
            "use strict";
            var n = this;
            return n.b(i = i || ""), n.b('<div class="bound"> <div id="video_watch_container" itemprop="video" itemscope itemtype="http://schema.org/VideoObject" '), n.s(n.f("skinClass", e, t, 1), e, t, 0, 134, 169, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('class="skin-override-'), i.b(i.v(i.f("skinClass", e, t, 0))), i.b('"')
            }), e.pop()), n.b('> <div id="video_wrapper_2" class="video_wrapper_2"> '), n.s(n.f("header_data", e, t, 1), e, t, 0, 252, 270, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.rp("<module_header0", e, t, ""))
            }), e.pop()), n.b(' <div class="scaler"></div> <div id="frame"> '), n.s(n.f("currentVideo", e, t, 1), e, t, 0, 348, 977, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <!-- Orphan video markup --> <meta itemprop="duration" content="'),
                    i.b(i.v(i.f("duration_iso", e, t, 0))), i.b('"> <meta itemprop="thumbnail" content="'), i.b(i.v(i.f("thumb", e, t, 0))), i.b('"> <meta itemprop="name" content="'), i.b(i.v(i.f("title", e, t, 0))), i.b('"> <meta itemprop="description" content="'), i.b(i.v(i.f("description", e, t, 0))), i.b('"> <meta itemprop="URL" content="'), i.b(i.v(i.f("href", e, t, 0))), i.b('"> '), i.s(i.f("embedURL", e, t, 1), e, t, 0, 633, 684, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                        i.b(' <meta itemprop="embedURL" content="'), i.b(i.v(i.f("embedURL", e, t, 0))), i.b('"> ')
                    }), e.pop()), i.b(' <div id="'), i.b(i.v(i.f("player_id", e, t, 0))), i.b('" class="player"> '), i.s(i.f("expired", e, t, 1), e, t, 1, 0, 0, "") || (i.b(' <noscript> <div class="player_error">'), i.b(i.v(i.d("translations.no_javascript", e, t, 0))), i.b("</div> </noscript> ")), i.b(" "), i.s(i.f("expired", e, t, 1), e, t, 0, 862, 927, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                        i.b(' <div class="orphan"><p>'), i.b(i.v(i.d("translations.video_expired", e, t, 0))), i.b("</p></div> ")
                    }), e.pop()), i.b(" </div> <!-- /Orphan video markup --> ")
            }), e.pop()), n.b(' </div> </div><!-- End of video_wrapper --> </div><!-- End #video_watch_container--> <div class="playlist"> <div class="scaler"></div> <div class="up-next"> <h3>'), n.b(n.v(n.d("translations.up_next", e, t, 0))), n.b('</h3> </div> <div class="playlist-item-container"></div> <div class="playlist-gradient"></div> </div> </div><!-- End of bound -->'), n.fl()
        },
        partials: {
            "<module_header0": {
                name: "module_header",
                partials: {},
                subs: {}
            }
        },
        subs: {}
    }),
    function(e) {
        "use strict";
        var t = e.Disney,
            i = e.Grill,
            n = e._,
            r = e.jQuery,
            a = e.Whiskers,
            s = e.Math,
            o = e.Tracker;
        i.PlaylistModuleView.register("watch_playlist_2", {
            playerConfig: {
                autoPlay: !1,
                clickToPlay: !1,
                showEndCard: !1,
                continuousPlay: !0
            },
            style_classes: ["full-width", "full-height", "skip-top-border"],
            required_template_sets: ["module_header", "entities"],
            template: a.modules.watch_playlist_2,
            assets: {
                scripts: ["https://static-mh.content.disney.io/matterhorn/assets/videoplayer-d91daf2efd22.js"]
            },
            playlist: [],
            currentIndex: 0,
            xhrStarted: !1,
            adCache: [],
            events: {
                "click .playlist-item": function(e) {
                    if (e.preventDefault(), parseInt(e.currentTarget.dataset.index, 10) !== this.currentIndex) {
                        var t = r(e.currentTarget),
                            i = t.data("index") || 0;
                        this.player.endCard && this.player.endCard.playerCardOut(), this.trackPlaylistItem(t.data("id"), !1), this.handleNextVideo(i)
                    }
                }
            },
            initialize: function(i) {
                this.options = i || {};
                var a = n.groupBy(this.model.get("data")[0].video_list, "entity_type");
                this.playlist = a.video || [], this.recommendationOpts = a.recommendation && a.recommendation[0], this.playlistId = this.model.get("data")[0].id, this.playlist.forEach(function(e, t) {
                    e.index = t
                });
                var s = this,
                    o = this.model.collection && this.model.collection.style,
                    l = o && o.video_player_skin_override,
                    c = this.playlist[this.currentIndex];
                if (s.model.set("currentVideo", c), n.extend(s.options, this.model.get("config_options")), l && "matterhorn" !== l) {
                    var u = t.Style.AssetPaths.supported_videoplayer_skins;
                    n.extend(this.playerConfig, {
                        skinUrl: u[l]
                    }), this.skinClass = l
                }
                s.h = r(e).on("resize." + s.cid, n.throttle(function() {
                    var t = r(e).height();
                    t !== s.h && (s.h = t, s.layout())
                }, 100)).height(), this.player_id = "player_playlist" + this.model.get("ref").replace("-", "")
            },
            render: function() {
                var e = this.playlist[this.currentIndex],
                    t = n.extend({
                        tags: e.tags,
                        contenttype: e.contenttype,
                        cds: this.options.cds,
                        skinClass: this.skinClass,
                        playlist: this.playlist,
                        player_id: this.player_id
                    }, this.options.ads.helpers(this.model.toJSON(), this.getAdPosition()), this.model.toJSON());
                this.$el.html(this.template.render(t, this.ctx_additions())), this.layout(), this.bindToScroll()
            },
            postReady: null,
            ready: function() {
                var i, r = this,
                    a = r.options,
                    s = this.playlist[this.currentIndex],
                    o = r.model.get("translations"),
                    l = {
                        noLink: !0,
                        nowPlaying: !0
                    };
                if (this.recommendationOpts ? (this.recommendationOpts.core_id = s.id, r.getSimilarPlaylist(this.recommendationOpts).then(function(e) {
                        r.playlist = r.playlist.concat(e), r.renderSideList.call(r, l)
                    })) : (this.renderSideList(l), r.$(".playlist-item-container .playlist-item").first().addClass("current")), r.loadItemsWithinModule && e.location.hash) {
                    var c = /(idx\/)([a-z0-9]*)/,
                        u = c.exec(e.location.hash);
                    u && u[2] && u[2] !== s.id && (i = u[2], r.player = null)
                }
                s.ads = {
                    enabled: !a.cds && !a.noAds,
                    context: a.ads,
                    targeting: this.getAdPosition()
                }, n.extend(this.playerConfig, {
                    video: s,
                    autoPlay_mute: this.options.autoplay_mute,
                    autoPlay: this.model.get("autoplay"),
                    translations: o,
                    playlist: {
                        id: this.playlistId
                    },
                    showEndCard: !this.options.disable_endcard,
                    showPauseCard: !this.options.disable_pausecard,
                    parentView: r
                }), "undefined" == typeof i && (this.player = new t.MatterhornVideoPlayer(this.player_id, this.playerConfig), this.initPlayerListeners()), r.postReady && r.postReady()
            },
            getAdTagPrefixes: function() {
                var e = {},
                    t = this.options.ads.adData;
                return t && (t.web_override_prefix && n.extend(e, {
                    adtag_desk: t.web_override_prefix
                }), t.mobile_override_prefix && n.extend(e, {
                    adtag_mobile: t.mobile_override_prefix
                })), e
            },
            getAdPosition: function() {
                if (!this.options.cds) return this.options.ads && this.options.ads.setAdPosition && this.options.ads.setAdPosition(this.model)
            },
            getNextGrillData: function(t) {
                var i = this,
                    n = r.Deferred();
                if (t = s.min(t, this.playlist.length - 1), this.adCache[t]) n.resolve(i.adCache[t]);
                else {
                    var a = e.document.createElement("a");
                    a.href = this.playlist[t].href;
                    var o = "/_grill/ads/" + a.hostname + "/" + a.pathname.replace(/^\//, ""),
                        l = this.getAdTagPrefixes();
                    r.getJSON(o, l).done(function(e) {
                        i.adCache[t] = e, n.resolve(e)
                    })
                }
                return n
            },
            initPlayerListeners: function() {
                var t = this,
                    i = this.player;
                this.player.messageBus.addMessageListener("progress", function() {
                    var n = i.info.getPosition() / i.info.getDuration();
                    n > .3 && e.isFinite(n) && !t.xhrStarted && (t.getNextGrillData(t.currentIndex + 1), t.xhrStarted = !0)
                }), this.player.messageBus.addMessageListener("playComplete", function() {
                    t.handleNextVideo(t.currentIndex + 1), t.trackPlaylistItem(t.playlist[t.currentIndex].id, !0)
                })
            },
            handleNextVideo: function(e) {
                this.currentIndex = s.min(e, this.playlist.length - 1);
                var i = this,
                    n = i.playlist[i.currentIndex];
                i.xhrStarted = !1, i.$(".playlist-item-container > .playlist-item").removeClass("current").eq(i.currentIndex).addClass("current"), i.getNextGrillData(i.currentIndex).done(function(r) {
                    i.player.config.continuousPlay = i.currentIndex < i.playlist.length - 1;
                    var a = i.options.ads && i.options.ads.adData && i.options.ads.adData.config || {};
                    r.adData && r.adData.config && (r.adData.config.web = a.web || "", r.adData.config.mobile = a.mobile || ""), (n.ads = n.ads || {}).context = new t.Ads.AdContext(r), e < i.playlist.length && (i.player.loadVideoByObject(n), n.ads.context.ready())
                })
            },
            trackPlaylistItem: function(e, t) {
                o.video({
                    analyticsData: {
                        PLAYLISTID: this.playlistId,
                        KDPEVNT: "playlistLink",
                        KDPDAT_VALUE: e,
                        AUTO: t + ""
                    }
                })
            }
        })
    }(this);