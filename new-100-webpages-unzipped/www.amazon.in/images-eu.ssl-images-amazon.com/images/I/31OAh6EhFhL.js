(function(g) {
    var k = window.AmazonUIPageJS || window.P,
        h = k._namespace || k.attributeErrors,
        c = h ? h("DetailPageMediaMatrixFullBottomSheetAssets", "") : k;
    c.guardFatal ? c.guardFatal(g)(c, window) : c.execute(function() {
        g(c, window)
    })
})(function(g, k, h) {
    g.when("A", "media-matrix-full-bottom-sheet-constants", "MediaMatrixFullBottomSheet", "AjaxUrlSanitizer").register("MediaMatrixFullBottomSheetAjax", function(c, d, b, a) {
        return {
            loadMetabinding: function(e, f) {
                document.getElementById(e + d.AJAX_BUTTONS_SUFFIX) && (f = a.unescapeAmpersandInUrl(f),
                    c.get(f, {
                        withCredentials: !0,
                        success: function() {
                            c.state.parse();
                            var a = c.state(d.PAGE_STATE_SELECTED_SWATCH_DATA).originalAsin;
                            (a = c.state(a)) && a.metabinding === e && (b.updateUIWithDataForItem(a), b.bringSelectedItemIntoView());
                            b.manuallyLoadImagesForMetabinding(e)
                        }
                    }))
            },
            loadAllMetabindings: function() {
                var a = c.state(d.PAGE_STATE_METABINDINGS);
                if (a)
                    for (var b in a) null !== b && b !== h && (a = c.state(b), a.ajaxUrl && this.loadMetabinding(b, a.ajaxUrl))
            },
            loadMediaMatrix: function() {
                var e = this,
                    f = c.state(d.PAGE_STATE_AJAX_DATA);
                f && (c.state(d.PAGE_STATE_AJAX_MEDIA_MATRIX_FEATURE_STATUS, d.AJAX_STATUS_ALREADY_INVOKED), f = a.unescapeAmpersandInUrl(f.url), c.get(f, {
                    withCredentials: !0,
                    success: function() {
                        c.state.parse();
                        b.initializeUI();
                        b.resizeExtraMessagesToMatchSwatchWidth();
                        b.adjustHeightToFitContents();
                        e.loadAllMetabindings()
                    }
                }))
            },
            hasAlreadyInvokedMediaMatrixAjax: function() {
                var a = c.state(d.PAGE_STATE_AJAX_MEDIA_MATRIX_FEATURE_STATUS);
                return a && d.AJAX_STATUS_ALREADY_INVOKED.status === a.status
            }
        }
    });
    "use strict";
    g.when("A", "media-matrix-full-bottom-sheet-constants").register("MediaMatrixFullBottomSheet",
        function(c, d) {
            return {
                initializeUI: function() {
                    this.bringSelectedFormatIntoView();
                    this.manuallyLoadImages()
                },
                isBottomSheetOpen: function() {
                    var b = c.$("." + d.BOTTOM_SHEET_CONTAINER_CLASS);
                    return 0 < b.length && !c.$(b).hasClass(d.HIDDEN_CLASS)
                },
                updateUIWithDataForItem: function(b) {
                    if (b) {
                        var a = b.metabinding,
                            c = b.price,
                            f = b.priceSecondary,
                            g = b.extraMessage,
                            l = b.swatchTitle,
                            k = b.asin,
                            h = b.contentType;
                        h || (h = b.title);
                        b = document.getElementById(a).getElementsByClassName(d.FORMAT_TITLE_CSS_CLASS);
                        if (0 < b.length) {
                            if (b = b[0]) b.innerHTML =
                                l;
                            if (b = document.getElementById(d.FORMAT_TEXT_FIELD_ID)) b.innerHTML = l
                        }
                        if (l = document.getElementById(d.ITEM_TEXT_FIELD_ID)) l.innerHTML = h;
                        if (h = document.getElementById(a + d.SWATCH_PRICE_ID_SUFFIX)) h.innerHTML = c ? c : d.MDASH;
                        if (c = document.getElementById(a + d.SWATCH_PRICE_SECONDARY_ID_SUFFIX)) c.innerHTML = f;
                        f = document.getElementById(k + d.ITEM_BADGE_SUFFIX);
                        k = document.getElementById(a + d.FORMAT_BADGE_SUFFIX);
                        f && k && (k.innerHTML = f.innerHTML);
                        if (a = document.getElementById(a + d.SWATCH_EXTRA_MESSAGE_SUFFIX)) a.innerHTML =
                            g
                    }
                },
                resizeExtraMessagesToMatchSwatchWidth: function() {
                    var b = c.state(d.PAGE_STATE_METABINDINGS);
                    if (b)
                        for (var a in b)
                            if (null !== a && a !== h) {
                                var e = a + d.SWATCH_EXTRA_MESSAGE_SUFFIX,
                                    b = c.$("#" + a),
                                    e = c.$("#" + e);
                                b.length && e.length && e.width(b.width())
                            }
                },
                adjustHeightToFitContents: function() {
                    var b = c.$("#media_matrix_full_bottom_sheet").innerHeight(),
                        a = parseInt(c.$("#media_matrix_full_bottom_sheet").padding),
                        a = b - 2 * a;
                    c.$(".full-bottom-sheet-scroller-content").height(a);
                    c.$(".a-sheet-web").height(b)
                },
                bringSelectedFormatIntoView: function() {
                    if (this.isBottomSheetOpen()) {
                        var b =
                            c.state(d.PAGE_STATE_SELECTED_ITEM);
                        if (b) {
                            var a = b.metabinding,
                                e = Math.max(document.documentElement.clientWidth, k.innerWidth || 0),
                                b = c.$("#" + d.FORMAT_SCROLLER_ID);
                            0 === c.$(b).scrollLeft() && (a = c.$("#" + a), a.length && (a = a.get(0).getBoundingClientRect(), e = a.left - (e - a.width) / 2, c.$(b).scrollLeft(e)))
                        }
                    }
                },
                bringSelectedItemIntoView: function() {
                    if (this.isBottomSheetOpen()) {
                        var b = c.state(d.PAGE_STATE_SELECTED_ITEM);
                        if (b) {
                            var a = b.asin,
                                e = Math.max(document.documentElement.clientWidth, k.innerWidth || 0),
                                b = c.$("#" + b.metabinding +
                                    d.ITEM_SCROLLER_ID_SUFFIX);
                            0 === c.$(b).scrollLeft() && (a = c.$("#" + a + d.ITEM_BUTTON_ID_SUFFIX), a.length && (a = a.get(0).getBoundingClientRect(), e = a.left - (e - a.width) / 2, c.$(b).scrollLeft(e)))
                        }
                    }
                },
                shouldAllowScrollingInBackgroundView: function(b) {
                    b ? c.$("html, body").css("position", "") : c.$("html, body").css("position", "fixed")
                },
                manuallyLoadImagesForMetabinding: function(b) {
                    function a(a) {
                        a.style.backgroundColor = "transparent"
                    }

                    function e(b) {
                        b instanceof HTMLImageElement && (b.complete ? a(b.parentNode) : (b.onload = function() {
                                a(b.parentNode)
                            },
                            b.onerror = function() {
                                a(b.parentNode)
                            }))
                    }
                    b = document.getElementById(b + d.ITEMS_DIV_SUFFIX);
                    if (null !== b) {
                        b = b.getElementsByClassName("a-manually-loaded");
                        for (var f = 0; f < b.length; f++) {
                            var g = b[f];
                            c.loadImageManually(c.$("#" + g.id));
                            e(document.getElementById(g.id))
                        }
                    }
                },
                manuallyLoadImages: function() {
                    var b = c.state(d.PAGE_STATE_METABINDINGS);
                    if (b)
                        for (var a in b) null !== a && a !== h && this.manuallyLoadImagesForMetabinding(a)
                }
            }
        });
    "use strict";
    g.when("A", "media-matrix-full-bottom-sheet-constants", "MediaMatrixFullBottomSheet",
        "MediaMatrixFullBottomSheetAjax").execute(function(c, d, b, a) {
        c.on("a:sheet:afterShow:media_matrix_full_bottom_sheet_view_div", function(a) {
            b.bringSelectedFormatIntoView();
            b.bringSelectedItemIntoView();
            b.resizeExtraMessagesToMatchSwatchWidth();
            b.adjustHeightToFitContents()
        });
        c.on("a:sheet:beforeShow:media_matrix_full_bottom_sheet_view_div", function(c) {
            a.hasAlreadyInvokedMediaMatrixAjax() || a.loadMediaMatrix();
            b.shouldAllowScrollingInBackgroundView(!1)
        });
        c.on("a:sheet:afterHide:media_matrix_full_bottom_sheet_view_div",
            function(a) {
                b.shouldAllowScrollingInBackgroundView(!0);
                a = c.state(d.PAGE_STATE_RENDERED_ITEM);
                var f = c.state(d.PAGE_STATE_SELECTED_ITEM);
                a && f && a.asin !== f.asin && (k.location.href = f.redirectUrl)
            })
    });
    "use strict";
    g.when("A", "media-matrix-full-bottom-sheet-constants", "MediaMatrixFullBottomSheet").execute(function(c, d, b) {
        c.declarative("media-matrix-item-selected", "click", function(a) {
            a = a.$target.get(0).name.replace(d.ITEM_BUTTON_ID_SUFFIX, "");
            if (a = c.state(a)) {
                c.state(d.PAGE_STATE_SELECTED_ITEM, a);
                var e = c.state(a.metabinding);
                e && (e.lastSelectedAsin = a.asin, c.state(a.metabinding, e));
                b.updateUIWithDataForItem(a)
            }
        })
    });
    "use strict";
    g.when("A", "media-matrix-full-bottom-sheet-constants", "MediaMatrixFullBottomSheet").execute(function(c, d, b) {
        c.declarative("media-matrix-swatch-selected", "click", function(a) {
            function e(a) {
                a = c.state(a.lastSelectedAsin);
                c.state(d.PAGE_STATE_SELECTED_ITEM, a)
            }
            var f = a.$target.get(0).name;
            a = c.state(f);
            (function() {
                var a = c.state(d.PAGE_STATE_SELECTED_SWATCH_DATA);
                if (a) {
                    document.getElementById(a.selectedSwatchContentName).style.display =
                        "none";
                    var b = f + "_buttons";
                    document.getElementById(b).style.display = "initial";
                    a.selectedSwatchContentName = b;
                    c.state(d.PAGE_STATE_SELECTED_SWATCH_DATA, a)
                }
            })();
            if (a) {
                var g = c.state(a.lastSelectedAsin);
                b.updateUIWithDataForItem(g);
                e(a)
            }
        })
    });
    "use strict";
    g.when("A", "media-matrix-full-bottom-sheet-constants", "AjaxUrlSanitizer").register("MediaMatrixSecondaryViewAjax", function(c, d, b) {
        return {
            loadSecondaryView: function() {
                var a = c.state(d.PAGE_STATE_SECONDARY_VIEW_AJAX_DATA);
                a && (c.state(d.PAGE_STATE_AJAX_MEDIA_MATRIX_FEATURE_STATUS,
                    d.AJAX_STATUS_ALREADY_INVOKED), a = b.unescapeAmpersandInUrl(a.url), c.get(a, {
                    withCredentials: !0,
                    success: function() {
                        c.state.parse()
                    }
                }))
            },
            hasAlreadyInvokedSecondaryViewAjax: function() {
                var a = c.state(d.PAGE_STATE_AJAX_MEDIA_MATRIX_FEATURE_STATUS);
                return a && d.AJAX_STATUS_ALREADY_INVOKED.status === a.status
            }
        }
    });
    "use strict";
    g.when("A", "media-matrix-full-bottom-sheet-constants", "a-secondary-view").register("MediaMatrixSecondaryView", function(c, d, b) {
        return {
            isSecondaryViewOpen: function() {
                var a = c.$("[data-a-secondary-view*\x3d'mediamatrixmobile_secondary_view_div']"),
                    a = b.get(a);
                return !!a && a.isActive()
            }
        }
    });
    "use strict";
    g.when("A", "media-matrix-full-bottom-sheet-constants", "MediaMatrixSecondaryViewAjax", "MediaMatrixSecondaryView").execute(function(c, d, b, a) {
        function e() {
            c.state(d.PAGE_STATE_SECONDARY_VIEW_AJAX_DATA) && !b.hasAlreadyInvokedSecondaryViewAjax() && b.loadSecondaryView()
        }
        c.on("a:popover:beforeShow:mediamatrixmobile_secondary_view_div", e);
        a.isSecondaryViewOpen() && e()
    });
    "use strict";
    g.when("A", "media-matrix-full-bottom-sheet-constants", "MediaMatrixFullBottomSheet",
        "MediaMatrixFullBottomSheetAjax", "ready").execute(function(c, d, b, a) {
        c.state(d.PAGE_STATE_AJAX_DATA) ? b.isBottomSheetOpen() && !a.hasAlreadyInvokedMediaMatrixAjax() && a.loadMediaMatrix() : c.state(d.PAGE_STATE_METABINDINGS) && (c.state(d.PAGE_STATE_AJAX_MEDIA_MATRIX_FEATURE_STATUS, d.AJAX_STATUS_ALREADY_INVOKED), b.initializeUI(), a.loadAllMetabindings())
    });
    "use strict";
    g.when("A").register("AjaxUrlSanitizer", function(c) {
        return {
            unescapeAmpersandInUrl: function(c) {
                null !== c && c !== h && (c = c.replace(/&amp;/g, "\x26"));
                return c
            }
        }
    });
    "use strict";
    g.register("media-matrix-full-bottom-sheet-constants", function() {
        return {
            SWATCH_PRICE_ID_SUFFIX: "_swatch_price",
            SWATCH_PRICE_SECONDARY_ID_SUFFIX: "_swatch_price_secondary",
            SWATCH_EXTRA_MESSAGE_SUFFIX: "_swatch_extra_message",
            BOTTOM_SHEET_DIV_ID: "media_matrix_full_bottom_sheet",
            BOTTOM_SHEET_NAME: "media_matrix_full_bottom_sheet_view_div",
            PAGE_STATE_SELECTED_SWATCH_DATA: "media_matrix_selected_swatch_data",
            PAGE_STATE_SELECTED_ITEM: "selected_media_matrix_item",
            PAGE_STATE_RENDERED_ITEM: "rendered_media_matrix_item",
            PAGE_STATE_METABINDINGS: "bottom_sheet_metabindings",
            PAGE_STATE_AJAX_DATA: "media_matrix_ajax_data",
            PAGE_STATE_SECONDARY_VIEW_AJAX_DATA: "media_matrix_secondary_view_ajax_data",
            PAGE_STATE_AJAX_MEDIA_MATRIX_FEATURE_STATUS: "media_matrix_feature_ajax_status",
            FORMAT_SCROLLER_ID: "media_matrix_full_bottom_sheet_format_button_scroller",
            ITEM_IMAGE_CLASS: "full-bottom-sheet-item-image",
            ITEM_SCROLLER_ID_SUFFIX: "_item_button_scroller",
            ITEM_BADGE_SUFFIX: "_item_badge",
            ITEM_EXTRA_MESSAGE_SUFFIX: "_item_extra_message",
            ITEM_BUTTON_ID_SUFFIX: "-item-button",
            ITEM_TEXT_FIELD_ID: "full-bottom-sheet-item-field",
            ITEMS_DIV_SUFFIX: "_item_button_scroller",
            FORMAT_TEXT_FIELD_ID: "full-bottom-sheet-format-field",
            FORMAT_BADGE_SUFFIX: "_badge",
            FORMAT_TITLE_CSS_CLASS: "full-bottom-sheet-swatch-title",
            BOTTOM_SHEET_CONTAINER_CLASS: "a-sheet-web",
            SECONDARY_VIEW_CONTAINER_CLASS: "a-popover-secondary",
            HIDDEN_CLASS: "aok-hidden",
            MDASH: "\x26nbsp;\x26nbsp;\x26mdash;\x26nbsp;\x26nbsp;",
            AJAX_STATUS_ALREADY_INVOKED: {
                status: "ALREADY_INVOKED"
            },
            AJAX_BUTTONS_SUFFIX: "_ajax_buttons"
        }
    })
});