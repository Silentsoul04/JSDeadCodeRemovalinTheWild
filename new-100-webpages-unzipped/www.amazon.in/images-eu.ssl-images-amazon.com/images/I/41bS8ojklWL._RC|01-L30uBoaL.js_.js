(function(h) {
    var n = window.AmazonUIPageJS || window.P,
        y = n._namespace || n.attributeErrors,
        f = y ? y("DetailPageMobileInlineTwisterAssets", "") : n;
    f.guardFatal ? f.guardFatal(h)(f, window) : f.execute(function() {
        h(f, window)
    })
})(function(h, n, y) {
    h.when("A", "bottom-sheet-js-logger-service", "a-truncate").register("inline-twister-widgets-factory", function(f, g, b) {
        var e = f.$;
        String.prototype.replaceAll = function(a, c) {
            return this.replace(new RegExp(a, "g"), function() {
                return c
            })
        };
        var d = function() {
                return {
                    scrollTo: function(a, c,
                        l, e) {
                        if (a.length && c.length) {
                            var u = a.innerWidth(),
                                z = c.outerWidth();
                            c = c.position().left;
                            var t = Math.floor(c - (u - z) / 2),
                                z = a.scrollLeft();
                            c = a[0].scrollWidth - u;
                            t = Math.max(t, 0);
                            t = Math.min(t, c);
                            u = Math.abs(t - z) > u ? 800 : 300;
                            if (l) {
                                var b = a.find(".js-inline-ts-swatch-scroller");
                                a.scrollLeft(0);
                                b.css({
                                    left: -1 * z + "px"
                                });
                                f.animate(b, {
                                    left: -1 * t + "px"
                                }, u, "ease-out", function() {
                                    b.css({
                                        left: "",
                                        transform: "",
                                        "-moz-transform": "",
                                        "-webkit-transform": "",
                                        "-o-transform": "",
                                        "-ms-transform": "",
                                        transition: "",
                                        "-moz-transition": "",
                                        "-webkit-transition": "",
                                        "-o-transition": "",
                                        "-ms-transition": ""
                                    });
                                    a.scrollLeft(t);
                                    e()
                                })
                            } else a.scrollLeft(t)
                        }
                    },
                    alignTexts: function(a, c, l) {
                        var f = c ? ".inline-twister-truncate-text" : ".a-truncate";
                        a.find(f + ":visible:not([data-realheight])").each(function(a, c) {
                            c.dataset.realheight = parseInt(c.offsetHeight, 10)
                        });
                        a = a.find(f + ":visible");
                        if (0 < a.length && (!c || l)) {
                            var u = [].reduce.call(a, function(a, c) {
                                c = parseInt(c.dataset.realheight, 10);
                                return 0 === a.maxHeight ? {
                                    allEqual: !0,
                                    maxHeight: c
                                } : a.maxHeight < c ? {
                                    allEqual: !1,
                                    maxHeight: c
                                } : {
                                    allEqual: a.allEqual &&
                                        c === a.maxHeight,
                                    maxHeight: a.maxHeight
                                }
                            }, {
                                allEqual: !0,
                                maxHeight: 0
                            });
                            [].forEach.call(a, function(a) {
                                a = e(a);
                                !u.allEqual && a.height() < u.maxHeight / 2 + 1 ? a.css("line-height", a.css("max-height")) : c || (u.allEqual && a.data("realheight") < a.height() && a.css("line-height", ""), b.get(a).update())
                            })
                        }
                    }
                }
            }(b),
            v = function(a) {
                function c(a) {
                    this.hiResImage = a.hiResImage || a.image;
                    this.id = a.id;
                    this.unavailable = !!a.unavailable;
                    this.selected = !!a.selected;
                    this.showSlot = a.showSlot;
                    this.slotHtm = a.slotHtm;
                    this.isImageSwatch = !!this.hiResImage;
                    this.glow = !1;
                    this.LOG_LEVEL = g.LOG_LEVEL || {};
                    this.domNode = e("#" + a.id).closest(".js-inline-ts-swatch-onscroll");
                    this.slotIdentifier = ".inline-twister-ts-pp";
                    this.slotNode = this.domNode.find(".inline-twister-ts-pp");
                    this.toggleButton = this.domNode.find(".a-button-toggle");
                    this.showSlot && !this.slotNode.length && (g.logCounter("inlineTwister:InitialSwatchSlotEmpty", 1), g.logCounter("inlineTwister:twisterBTFSlotHtmlEmpty", 1))
                }
                c.prototype = {
                    setState: function(a) {
                        var c = this.getSlotNode();
                        this.glow && this.domNode.addClass("js-auto-select-start");
                        this.selected = !!a.selected;
                        this.updateAvailablity(a);
                        this.updateSlotNode(a);
                        this.domNode && this.showSlot && !this.getSlotNode().length && (g.logCounter("inlineTwister:twisterSlotMissing", 1), g.registerEvent("swatchSlotMissing", "swatch slot went missing after swatch update", this.LOG_LEVEL.WARN));
                        this.domNode && this.showSlot && c.length && !this.getSlotNode().length && (g.logCounter("inlineTwister:twisterSlotRemoved", 1), g.registerEvent("swatchSlotCorrupted", "slot content got corrupted after update:" + this.slotHtm,
                            this.LOG_LEVEL.WARN));
                        return this
                    },
                    getSlotNode: function() {
                        return this.domNode.find(this.slotIdentifier)
                    },
                    startGlow: function() {
                        this.glow = !0
                    },
                    endGlow: function() {
                        this.glow = !1;
                        this.domNode.removeClass("js-auto-select-start").addClass("js-auto-select")
                    },
                    cancelGlow: function() {
                        this.glow = !1;
                        this.domNode.removeClass("js-auto-select-start").removeClass("js-auto-select")
                    },
                    updateSlotNode: function(a) {
                        this.slotHtm !== a.slotHtm && (this.domNode.find(this.slotIdentifier).html(a.slotHtm), this.slotHtm = a.slotHtm)
                    },
                    updateAvailablity: function(a) {
                        this.unavailable !==
                            a.unavailable && ((this.unavailable = a.unavailable) ? (this.toggleButton.addClass("a-button-unavailable"), this.isImageSwatch && (a = this.toggleButton.find(".inline-twister-overlay-off"), a.addClass("inline-twister-overlay-on"), a.removeClass("inline-twister-overlay-off"))) : (this.toggleButton.removeClass("a-button-unavailable"), this.isImageSwatch && (a = this.toggleButton.find(".inline-twister-overlay-on"), a.addClass("inline-twister-overlay-off"), a.removeClass("inline-twister-overlay-on"))))
                    },
                    updateSelection: function() {
                        this.selected ?
                            this.toggleButton.addClass("a-button-selected") : this.toggleButton.removeClass("a-button-selected")
                    }
                };
                return c
            }(d),
            h = function(a, c) {
                function b(a, c) {
                    !a.isUserInteracting && a.selectedSwatch && a.selectedSwatch !== c ? (a.scrollTo(c || a.selectedSwatch, 1), c && (a.glowingSwatch && a.glowingSwatch.cancelGlow(), a.glowingSwatch = c, c.startGlow())) : a.isUserInteracting && c && a.scrollTo(c, 1)
                }

                function d(a) {
                    var k = this;
                    this.isTextSwatch = a.isTextSwatch;
                    this.name = a.name;
                    this.domNode = e(".inline-twister-scroller-" + a.name);
                    this.selectedSwatch =
                        null;
                    this.swatches = e.map(a.swatches, function(a, e) {
                        e = new c(a);
                        k.selectedSwatch = a.selected ? e : k.selectedSwatch;
                        return e
                    });
                    this.onChange = a.onChange;
                    this.isScrolling = this.isUserInteracting = !1;
                    this.pendingScroll = {};
                    this.glowingSwatch;
                    f.on("a:button-group:" + this.name + ":toggle", function(a) {
                        k.isUserInteracting = !0;
                        k.onChange && k.onChange(k.swatches, a.selectedButton)
                    })
                }
                d.prototype = {
                    setState: function(a) {
                        var k = this,
                            d, g = [];
                        e.each(a.swatches, function(a, e) {
                            k.swatches[a] ? (d = e.selected ? k.swatches[a] : d, k.swatches[a].selected = !!e.selected, g.push({
                                index: a,
                                data: e
                            })) : (k.swatches[a] = new c(e), k.rowContainer.append(k.swatches[a].domNode))
                        });
                        this.selectedSwatch && this.selectedSwatch.updateSelection();
                        d && d.updateSelection();
                        e.each(g, function(a, c) {
                            k.swatches[c.index].setState(c.data)
                        });
                        d && !f.objectIsEmpty(this.domNode) && this.domNode[0].scrollWidth > this.domNode.innerWidth() ? b(this, d) : this.disableInteraction(!1);
                        this.selectedSwatch = d;
                        this.isUserInteracting = !1;
                        return this
                    },
                    scrollTo: function(c, e) {
                        if (c) {
                            var b = this,
                                d = arguments;
                            b.isScrolling ?
                                (b.pendingScroll.status = !0, b.pendingScroll.args = d) : (b.isScrolling = !0, a.scrollTo(b.domNode, c.domNode, e, function() {
                                    b.isScrolling = !1;
                                    b.disableInteraction(!1);
                                    b.pendingScroll.status && (b.pendingScroll.status = !1, b.scrollTo.apply(b, b.pendingScroll.args));
                                    c.glow && c.endGlow()
                                }))
                        }
                    },
                    disableInteraction: function(a) {
                        var c = e("\x3cdiv/\x3e", {
                            "class": "dp-sheet-lightbox"
                        }).bind("click touchmove touch scroll", function(a) {
                            a.preventDefault();
                            a.stopPropagation()
                        }).prependTo(this.domNode);
                        c.width(this.domNode[0].scrollWidth +
                            "px");
                        this.disableInteraction = function(a) {
                            c[a ? "show" : "hide"]()
                        };
                        this.disableInteraction(a)
                    },
                    scrollToSelected: function() {
                        var a = 0;
                        if (this.selectedSwatch) {
                            var a = this.swatches.indexOf(this.selectedSwatch),
                                c = 0,
                                e = this,
                                k = this.domNode.innerWidth();
                            0 === a ? c = 0 : a === this.swatches.length - 1 ? (c = -this.partiallyVisible(!1), c += this.domNode.find(".js-inline-ts-swatch-scroller")[0].scrollWidth - k) : (a = this.selectedSwatch.domNode.outerWidth(), c = this.selectedSwatch.domNode.position().left - (k - a) / 2);
                            f.requestAnimationFrame(function() {
                                e.domNode.scrollLeft(c)
                            });
                            return this
                        }
                    },
                    partiallyVisible: function(a) {
                        for (var c = 0, k = e(n).width(), b, d, f, g = a ? 0 : this.swatches.length - 1; a ? g < this.swatches.length : 0 <= g;) {
                            b = this.swatches[g].domNode.outerWidth(!0);
                            d = this.swatches[g].domNode.outerWidth();
                            f = b - d;
                            c += b;
                            b = c - k - (a ? 0 : f);
                            if (0 <= b) {
                                if (15 > b) return b + f + 15;
                                if (b > d - 15) return b - (d - 15);
                                break
                            }
                            g += a ? 1 : -1
                        }
                        return 0
                    },
                    getSlotNodes: function(a) {
                        return e.map(this.swatches, function(a) {
                            return a.getSlotNode()
                        })
                    }
                };
                return d
            }(d, v),
            m = function(a) {
                function c(a) {
                    this.mainText = a.mainText;
                    this.subText = a.subText;
                    this.dimKey = a.dimKey;
                    this.titleSelectorPrefix = a.titleSelectorPrefix;
                    this.titleValueSelector = a.titleValueSelector;
                    this.domNode = e("." + this.titleSelectorPrefix + this.dimKey)
                }
                c.prototype = {
                    refresh: function() {
                        this.domNode.find("." + this.titleValueSelector).html(this.subText);
                        this.domNode.removeClass("inline-twister-dim-required inline-twister-dim-required-delay")
                    },
                    setState: function(a) {
                        return f.equals(a, e.extend({}, this)) ? this : (e.extend(this, a), this.refresh())
                    }
                };
                return c
            }(d),
            a = function(a, c, b) {
                function d(a,
                    k, f, g, v, h) {
                    this.title = f ? new c(f) : null;
                    this.toggleSwatch = g ? new b(g) : null;
                    this.domNode = e(e("." + a)[k - 1]);
                    this.showSlot = v;
                    this.enableTruncateTextByCSS = h
                }
                d.prototype = {
                    setState: function(a, c) {
                        a && this.title && this.title.setState(a);
                        c && this.toggleSwatch && this.toggleSwatch.setState(c);
                        g.logEvents("swatchSlotMissing", !0);
                        g.logEvents("swatchSlotCorrupted", !0)
                    },
                    scrollToSelected: function() {
                        this.toggleSwatch && this.toggleSwatch.scrollToSelected()
                    },
                    scrollTo: function(a) {
                        this.toggleSwatch && this.toggleSwatch.scrollTo(a, !0)
                    },
                    scrollToIngress: function() {
                        var c = e(".inline-twister-btn-hide-sideline"),
                            b = this.domNode.children(".inline-twister-scroller");
                        a.scrollTo(b, c, !0, function() {})
                    },
                    disableInteraction: function(a) {
                        this.toggleSwatch && this.toggleSwatch.disableInteraction(a)
                    },
                    alignAllSwatchTextsInRow: function() {
                        a.alignTexts(this.domNode, this.enableTruncateTextByCSS, this.showSlot)
                    }
                };
                return d
            }(d, m, h);
        return {
            Swatch: v,
            ToggleSwatch: h,
            Title: m,
            Row: a,
            utils: d
        }
    });
    "use strict";
    h.when("A", "mobile-inline-twister-data").register("mobile-inline-twister-page-state",
        function(f) {
            function g(b, d) {
                return f.state("mobile-inline-twister-" + b) || d
            }
            f.state.parse();
            var b = {
                dimCombinations: g("dims-to-asin-list"),
                dimtoValueMap: g("dim-val-list"),
                initDimCombination: function(b, d) {
                    return f.$.map(b.key, function(b) {
                        return {
                            dimKey: b,
                            val: b in d ? d[b] : -1
                        }
                    })
                }(g("dim-list"), g("selected-dimension")),
                dimensionInfo: function(b, d, g, h) {
                    var m = h.singletonDimensionKeys || [];
                    return f.$.map(b.key, function(a) {
                        var b = -1 !== f.indexOfArray(m, a) ? !0 : !1;
                        return {
                            dimKey: a,
                            isRequired: g[a] || !1,
                            size: d[a].length,
                            isSingleton: b
                        }
                    })
                }(g("dim-list"), g("dim-val-list"), g("dim-status-map", {}), g("singleton-dim", {})),
                dimensionList: g("dim-list", {}).key,
                dimensionDisplayText: g("dim-display-text"),
                config: function() {
                    var b = f.state("mobile-inline-twister-slot-config"),
                        d = f.state("detail-page-device-type") ? f.state("detail-page-device-type").deviceType : f.state("mobile-twister").deviceType || "";
                    return {
                        ajaxTimeout: 2E4,
                        ajaxUrlParams: b.ajaxUrlParams,
                        deviceType: d
                    }
                }(),
                variationData: function(b) {
                    var d = {};
                    d.parentAsin = b.parentAsin;
                    return d
                }(f.state("mobile-twister")),
                sideline: g("sideline-data", !1)
            };
            return f.copy(b)
        });
    "use strict";
    h.when("A").register("mobile-inline-twister-slot-manager", function(f) {
        function g(a, b, c) {
            this.twisterCore = a;
            this.batch = {};
            this.currentBatch;
            this.onAfterRender = b;
            this.minSlotHeight = this.maxSlotHeight = 0;
            this.dynamicStyle = c
        }

        function b(a, b) {
            var c = this.batch,
                e = this;
            c[a] = c[a] || [];
            c[a].push(b);
            clearTimeout(this.currentBatch);
            this.currentBatch = setTimeout(function() {
                var a = f.map(e.batch, function(a, c) {
                    return c
                });
                e.twisterCore.slotsDimSum.get(a, function(a) {
                    var c =
                        e.batch[a.ASIN];
                    c && (q.each(c, function(c, b) {
                        b(a)
                    }), delete e.batch[a.ASIN]);
                    h(e.batch) && e.updateSlotHeight()
                })
            }, 0)
        }

        function e(a, b) {
            e.uniqueCount = e.uniqueCount || 0;
            var c = "inline-twister-dimsum-loading-" + (e.uniqueCount += 1),
                d = '\x3cdiv id\x3d"' + c + '" class\x3d"' + (b ? "loading-indicator" : "") + '"\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e';
            for (b = b || 1; b - 1;) d += '\x3cdiv class\x3d"loading-indicator"\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e', --b;
            return {
                loadingHtm: d,
                promise: function(b) {
                    var e = q("#" + c).parent();
                    e.length && (e.html(b),
                        a && a(e))
                }
            }
        }

        function d(a) {
            return m.default.call(this, a.content.twisterSlotDiv).replace(/\n/g, "").replace(/[\t ]+\</g, "\x3c").replace(/\>[\t ]+\</g, "\x3e\x3c").replace(/\>[\t ]+$/g, "\x3e")
        }

        function h(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !1;
            return !0
        }
        var q = f.$,
            m = {
                default: function(a) {
                    a = q("\x3cdiv\x3e" + a + "\x3c/div\x3e");
                    var b = a.find("#ms3slot");
                    b && b.find(".a-icon-small").addClass("a-icon-mini").removeClass("a-icon-small");
                    b = a.find("#twisterAvailability");
                    b.length && (b.parent().append("\x3cdiv class\x3d'js-dummy-twister-availability'\x3e\x3c/div\x3e"),
                        b.closest(".a-size-small").removeClass("a-size-small"), b.closest(".a-size-mini").removeClass("a-size-mini"));
                    var c = a.find(".twister_swatch_price");
                    0 < c.length ? (c.addClass("inline-twister-swatch-price"), c.find(".a-size-medium").removeClass("a-size-medium"), c.find(".a-size-small").removeClass("a-size-small"), c.find(".a-size-mini").removeClass("a-size-mini"), b.addClass("availability-hidden")) : b.addClass("availability-alert");
                    a.find("#twisterAvailability").parent().next().remove();
                    return a.html()
                },
                availability: function(a,
                    b) {
                    return this.common(a, "#twisterAvailability", b)
                },
                common: function(a, b, c) {
                    c ? (a = q("\x3cdiv\x3e" + a + "\x3c/div\x3e"), a.find(b).remove(), a = a.html()) : a = (a = q("\x3cdiv\x3e" + a + "\x3c/div\x3e").find(b)[0]) && a.outerHTML;
                    return a || ""
                }
            };
        g.prototype = {
            get: function(a, f) {
                var c = this,
                    g = this.twisterCore.slotsDimSum.get([a]);
                if (g[a]) return d.call(c, g[a].Value);
                var h = e(function(a) {
                    c.setState(a, !0)
                }, f);
                b.call(this, a, function(a) {
                    h.promise(d.call(c, a.Value))
                });
                return h.loadingHtm
            },
            setState: function(a) {
                this.onAfterRender(a);
                var b = this.minSlotHeight;
                if (a && 0 !== a.length && !(0 < a.find(".loading-indicator").length) && 0 !== a.find(".defaultSlotUnavailable").length) {
                    var c = a[0].scrollHeight;
                    b < c && (b = c)
                }
                this.minSlotHeight = b;
                b = this.maxSlotHeight;
                !a || 0 === a.length || 0 < a.find(".loading-indicator").length || (a = a[0].scrollHeight, b < a && (b = a));
                this.maxSlotHeight = b;
                this.maxSlotHeight = this.maxSlotHeight > this.minSlotHeight ? this.maxSlotHeight : this.minSlotHeight
            },
            updateSlotHeight: function() {
                this.dynamicStyle.addCSSRules("slot-height", [".inline-twister-ts-pp {height:" +
                    this.maxSlotHeight + "px;}"
                ])
            },
            resetSlotHeight: function() {
                this.dynamicStyle.addCSSRules("slot-height", []);
                this.maxSlotHeight = 0
            },
            resetMinSlotHeight: function() {
                this.minSlotHeight = 0
            }
        };
        return g
    });
    "use strict";
    h.when("A", "sheet-view-utils").register("mobile-inline-twister-view", function(f, g) {
        var b = f.$;
        return function(e, d, h, q, m, a) {
            function k() {
                function k(a) {
                    var b = e.state();
                    return e.util.getAsinFromSelectionInfo(b) ? !0 : f.reduce(b, function(b, c) {
                        return c.dimKey !== a ? b && -1 !== c.val : b
                    }, !0)
                }

                function m(a, b, d) {
                    d = d ?
                        c.data.translatedSelect : c.data.translatedSelectToSeePrice;
                    return {
                        dimKey: a,
                        titleSelectorPrefix: "inline-twister-dim-title-",
                        titleValueSelector: "inline-twister-dim-title-value",
                        mainText: e.tvm.dimensionDisplayText[a],
                        subText: -1 !== b ? e.tvm.dimtoValueMap[a][b] : d.replaceAll("###RequiredDim", g.getDimensionDisplayText(e.tvm.dimensionDisplayText[a] || ""))
                    }
                }

                function q(a, d, f) {
                    return b.map(e.tvm.dimtoValueMap[a], function(b, e) {
                        var g = c.data.imageUrlMap[a + "::" + e];
                        return {
                            text: b,
                            image: g,
                            hiResImage: g ? c.data.hiResImageUrlMap[a +
                                "::" + e] : "",
                            name: e,
                            id: a + "_" + e,
                            selected: d === e,
                            slotHtm: "",
                            showSlot: f,
                            unavailable: !1
                        }
                    })
                }

                function n(a, d, g, f) {
                    var h = !(!d || !k(g));
                    d = e.util.getDimAvailability(g, f);
                    b.each(d.available, function(b, e) {
                        a[e.index] = a[e.index] || {};
                        b = a[e.index];
                        b.unavailable = !1;
                        b.slotHtm = h ? c.slotManager.get(e.asin, c.noOfLoadingIndicator) : ""
                    });
                    b.each(d.unavailable, function(b, e) {
                        a[e.index] = a[e.index] || {};
                        b = a[e.index];
                        b.unavailable = !0;
                        b.slotHtm = h ? c.data.defaultSlotUnavailable : ""
                    })
                }

                function t(a) {
                    var d = !0;
                    b.map(e.tvm.dimtoValueMap[a],
                        function(b, e) {
                            b = c.data.imageUrlMap[a + "::" + e];
                            d = d && !b
                        });
                    return d
                }

                function B(e, d) {
                    e && !b(".inline-twister-scroller .inline-twister-ts-pp").length && a.logWarning("inline-twister-ts-pp missing " + d, c.LOGGING_ID)
                }

                function C(a, e) {
                    var d = !0;
                    a && (c.slotManager.resetMinSlotHeight(), c.slotManager.resetSlotHeight(), a = e.toggleSwatch.getSlotNodes(), b.each(a, function(a, b) {
                        c.slotManager.setState(b);
                        d = d && 0 === b.find(".loading-indicator").length
                    }), d && c.slotManager.updateSlotHeight())
                }

                function G(a, c) {
                    var e;
                    e = b(".inline-twister-scroller-" +
                        a).find(".a-button-selected");
                    var d = {
                        updated: !1,
                        val: c
                    };
                    0 < e.length && (a = parseInt(e[0].id.replace(a + "_", "")), a !== c && (d.updated = !0, d.val = a));
                    return d
                }
                var D = e.state(),
                    A = 0,
                    E = {};
                b.each(D, function(a, b) {
                    E[b.dimKey] = b
                });
                b.each(c.orderedDimList, function(g, f) {
                    function k(b, c) {
                        if (c) {
                            var d = parseInt(c.buttonName, 10);
                            c = c.buttonGroupName;
                            b[d] && b[d].selected ? a.logSelectedSwatchClick() : r.disableInteraction(!0);
                            try {
                                var f = e.tvm.dimInfoMap[c];
                                if (f) {
                                    var g = f.dimOrder;
                                    a.logCounter("twisterSwatchClickedCoordinate_" + Math.min(g,
                                        4).toString() + "_" + Math.min(d, 4).toString());
                                    var h = e.tsm.currentState().selected().selInfo[g];
                                    if (h) {
                                        var l = d - h.val;
                                        4 < l ? l = 4 : -4 > l && (l = -4);
                                        a.logCounter("twisterSwatchClickedRelative_" + l.toString())
                                    } else a.logWarning("Twister swatch metrics does not have selNode; dimIdx\x3d" + g)
                                } else a.logWarning("Twister swatch metrics does not have dimInfo; dimKey\x3d" + c)
                            } catch (m) {
                                a.logWarning("Twister swatch metrics failed; error\x3d" + m)
                            }
                            F.dimensionChanged({
                                dimKey: c,
                                val: d
                            })
                        }
                    }
                    var l, p, w, x;
                    l = E[f].val;
                    A += 1;
                    g = G(f, l);
                    l = g.val;
                    p = !1;
                    if (e.util.isSingletonDim(f)) {
                        w = m(f, l, p);
                        var r = new h(d.twisterRowName, A, w, p, d.enableTruncateTextByCSS);
                        c.rows.push(r)
                    } else {
                        if (c.data.enableSlot === y || c.data.enableSlot) p = c.data.slotPosition === A;
                        x = q(f, l, p);
                        n(x, p, f, D);
                        w = t(f);
                        x = {
                            name: f,
                            swatches: x,
                            isTextSwatch: w,
                            onChange: k
                        };
                        w = m(f, l, p);
                        r = new h(d.twisterRowName, A, w, x, p, d.enableTruncateTextByCSS);
                        r.alignAllSwatchTextsInRow();
                        c.rows.push(r);
                        B(p, "after initialization of row");
                        C(p, r);
                        var F = e.registerActive({
                            viewAttribution: "DetailPage",
                            viewName: "MobileInlineTwisterRowView_" +
                                f
                        }, {
                            updateView: function(a, c) {
                                if ("VARIATION_CHANGE" === a) {
                                    c = c.selected().selectionInfo();
                                    var e = {};
                                    b.each(c, function(a, b) {
                                        e[b.dimKey] = b
                                    });
                                    var d = e[f].val;
                                    a = [];
                                    n(a, p, f, c);
                                    a[d] = a[d] || {};
                                    a[l] = a[l] || {};
                                    a[l].selected = !1;
                                    a[d].selected = !0;
                                    l = d;
                                    c = m(f, d, p);
                                    r.setState(c, {
                                        swatches: a
                                    });
                                    B(p, "in UPDATE_VIEW method");
                                    C(p, r)
                                }
                            }
                        });
                        b.each(r.toggleSwatch.swatches, function(a, b) {
                            b.selected && r.scrollTo(b)
                        });
                        g.updated && (r.title.refresh(), F.dimensionChanged({
                            dimKey: f,
                            val: l
                        }))
                    }
                })
            }
            var c = this;
            this.data = d;
            this.slotLineHeight = 0;
            this.noOfLoadingIndicator =
                2;
            this.deferedTasks = {};
            this.orderedDimList = c.data.dimensionOrderedList;
            this.logger = a;
            this.slotManager = new q(e, function(e) {
                c.slotLineHeight || (b(".inline-twister-scroller .inline-twister-ts-pp").length || a.logCounter("twisterSlotElementsMissing", 1), b(".inline-twister-scroller").length || a.logCounter("twisterScrollerContainerMissing", 1), c.slotLineHeight = parseInt(b(".inline-twister-scroller .inline-twister-ts-pp").css("line-height").replace("px", ""), 10))
            }, m);
            this.rows = [];
            this.LOGGING_ID = "twister-mobile-inline-twister";
            e.slotsDimSum.addDefaultQueryParameter("showFancyPrice", "false");
            (function() {
                var b = a.createFunctionTimerInstance("dpInlineTwisterInitTime");
                b.start();
                k();
                b.stop()
            })();
            "function" === typeof n.markFeatureInteractive && n.markFeatureInteractive("twister", {
                hasComponents: !0,
                components: [{
                    name: "twister-inlineTwister"
                }]
            })
        }
    });
    "use strict";
    h.when("A", "TwisterCore", "mobile-inline-twister-page-state", "page-refresh-view", "mobile-twister-logger", "cache").register("mobile-inline-twister", function(f, g, b, e, d, v) {
        var q =
            f.state("mobile-inline-twister-sheet-view-html-data"),
            m = new g(b, v),
            a = new d(m);
        h.when("mobile-inline-twister-view", "inline-twister-widgets-factory", "mobile-inline-twister-slot-manager", "twister-dynamic-style").register("mobile-inline-twister-creation", function(b, c, e, d) {
            return new b(m, q, c.Row, e, d, a)
        });
        (function(b) {
            a.addCSMTag("InlineTwister");
            if (b.dimensionList) {
                a.addCSMTag("variation_dimension:" + b.dimensionList.length);
                for (var c in b.dimensionList) a.addCSMTag(b.dimensionList[c])
            }
        })(b);
        a.logCSMDataOnLanding();
        return m
    });
    "use strict";
    h.when("A", "mobile-inline-twister", "mobile-inline-twister-page-state").execute(function(f, g, b) {
        var e = f.$;
        f.declarative("go-to-twister", ["click"], function() {
            var d = g.state(),
                a = b.dimensionInfo,
                h = [];
            e.each(d, function(b, d) {
                0 > d.val && a[b].isRequired && h.push(d.dimKey)
            });
            0 < h.length && (d = e(".inline-twister-dim-title-" + h[0]), f.onScreen(d, 0) || (e("html,body").animate({
                scrollTop: d.offset().top - e(n).height() / 2 + 50
            }, 150), d.addClass("inline-twister-dim-required-delay")), d.addClass("inline-twister-dim-required"))
        });
        var d = e("#inline-twister-experiment-container"),
            h = d.find(".inline-twister-img .loading-indicator"),
            q = d.find(".inline-twister-img-btn .defaultSlotUnavailable .loading-unavailable");
        h.bind("otransitionend transitionend webkitTransitionEnd", function() {
            h.remove()
        });
        h.addClass("hide-loading");
        q.remove();
        d.removeClass("shell-on");
        d.find(".inline-twister-txt-btn .label-only.loading-indicator").remove()
    });
    "use strict";
    h.when("A").execute(function() {
        "function" === typeof uet && uet("bb", "clickToInlineTwister", {
            wb: 1
        })
    });
    h.when("a-popover-base", "a-popover-ajax").execute(function() {
        "function" === typeof uet && uet("af", "clickToInlineTwister", {
            wb: 1
        })
    });
    h.when("TwisterCore").execute(function() {
        "function" === typeof uet && uet("bb", "clickToInlineTwisterDep", {
            wb: 1
        })
    });
    h.when("page-refresh-view").execute(function() {
        "function" === typeof uet && uet("cf", "clickToInlineTwisterDep", {
            wb: 1
        })
    });
    h.when("inline-twister-widgets-factory").execute(function() {
        "function" === typeof uet && uet("af", "clickToInlineTwisterDep", {
            wb: 1
        })
    });
    h.when("A",
        "mobile-inline-twister-data").execute(function(f) {
        "function" === typeof uet && uet("cf", "clickToInlineTwister", {
            wb: 1
        });
        var g = document.getElementById("inline-twister-experiment-container"),
            b = n.ue;
        g && (f.trigger("dp:click-to-buyable", {
                featureName: "twister"
            }), g.addEventListener("touchstart", function(e) {
                e.ack && (e.ack(), b && b.count && b.count("tnr-post-ack-inlineTwister", b.count("tnr-post-ack-inlineTwister") || 1))
            }), b && b.tag && (b.tag("tnr-inlineTwister-marked"), b.tag("tnr-inlineTwister-default-seen")), b && b.count &&
            (b.count("tnr-features-tracked", b.count("tnr-features-tracked") || 1), b.count("tnr-inlineTwister-element-exist", b.count("tnr-inlineTwister-element-exist") || 1)))
    });
    h.when("mobile-inline-twister").execute(function() {
        "function" === typeof uex && "function" === typeof uet && (uet("be", "clickToInlineTwister", {
            wb: 1
        }), uex("ld", "clickToInlineTwister", {
            wb: 1
        }), uet("cf", "inlineTwisterData", {
            wb: 1
        }), uex("ld", "inlineTwisterData", {
            wb: 1
        }), uex("ld", "clickToInlineTwisterDep", {
            wb: 1
        }))
    });
    h.when("A", "atf").register("inline-twister-btf-content-loader",
        function(f) {
            var g = f.$;
            return {
                loadImageManually: function(b) {
                    var e = "",
                        d = g(b);
                    "undefined" !== d && 0 !== d.length && (e = f.loadImageManually(d), d = g(b), d.each(function(b, d) {
                        b = new Image;
                        b.onload = function() {
                            g(d).parent().children(".loading-indicator-btf").remove()
                        };
                        b.src = g(this).attr("src")
                    }));
                    return e
                }
            }
        });
    h.when("inline-twister-btf-content-loader").execute(function(f) {
        f.loadImageManually("#inline-twister-experiment-container .inline-twister-manual-load.inline-twister-img-el")
    });
    "use strict";
    h.when("A", "mobile-inline-twister",
        "mobile-inline-twister-page-state", "page-refresh-view", "mobile-inline-twister-creation").execute("mobile-inline-twister-page-refresh", function(f, g, b, e, d) {
        n.updateCSMReqs = function(b, d) {
            n.CSMReqs = {
                af: {
                    c: 2,
                    p: "atf",
                    f: b
                },
                cf: {
                    c: 2,
                    p: "cf",
                    f: d
                }
            }
        };
        f.state("mobile-inline-twister-sheet-view-html-data");
        new e(g, d.logger, !1, b)
    })
});
/* ******** */
(function(c) {
    var b = window.AmazonUIPageJS || window.P,
        d = b._namespace || b.attributeErrors,
        a = d ? d("DetailPageMobileSoftlinesFeaturesAsset", "") : b;
    a.guardFatal ? a.guardFatal(c)(a, window) : a.execute(function() {
        c(a, window)
    })
})(function(c, b, d) {});
/* ******** */