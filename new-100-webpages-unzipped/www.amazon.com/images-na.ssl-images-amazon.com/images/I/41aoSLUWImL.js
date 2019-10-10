(function(H) {
    var E = window.AmazonUIPageJS || window.P,
        F = E._namespace || E.attributeErrors,
        p = F ? F("DetailPageMiraiAssets", "") : E;
    p.guardFatal ? p.guardFatal(H)(p, window) : p.execute(function() {
        H(p, window)
    })
})(function(H, E, F) {
    H.when("A", "jQuery", "ready").execute("mirai-core", function(p, c) {
        function z(a) {
            var d = a.data();
            d.asin && (d.asin = a.attr("data-asin"));
            return d
        }

        function W(a) {
            a.find(".shopbylook-btf-item-like").click(function() {
                var a = null,
                    b = null,
                    e = 0;
                c(this).hasClass("shopbylook-btf-desktop-left-section-b-right-img") &&
                    (a = c(this).closest(".shopbylook-btf-item-box-anchor"), b = c(this));
                null === a && (a = c(this).closest(".shopbylook-btf-item-box"), b = c(this).find(".shopbylook-btf-item-like-img"), e = a.index(), m || h.hideAnchor || e++);
                var f = z(a);
                t++;
                b.hasClass("active") ? (fa(a, f), Q(f, !0, "getRecommendationsForUnlikeDPX", e)) : (ga(a, f), X(a, f), Q(f, !0, "getRecommendationsForLikeDPX", e));
                R()
            });
            a.find(".shopbylook-btf-item-dislike").click(function() {
                var a = null,
                    b = null,
                    e = 0;
                c(this).hasClass("shopbylook-btf-desktop-left-section-b-left-img") &&
                    (a = c(this).closest(".shopbylook-btf-item-box-anchor"), b = c(this));
                null === a && (a = c(this).closest(".shopbylook-btf-item-box"), b = c(this).find(".shopbylook-btf-item-dislike-img"), e = a.index(), m || h.hideAnchor || e++);
                var f = z(a);
                t++;
                b.hasClass("active") ? (ga(a, f), Q(f, !1, "getRecommendationsForUndislikeDPX", e)) : (fa(a, f), -1 === q.indexOf("D" + f.asin) && (q.push("D" + f.asin), u.push({
                    asin: f.asin,
                    iteration: t
                })), a = c(a).find(".shopbylook-btf-item-dislike-img"), a.attr("src", ha), a.addClass("active"), Q(f, !1, "getRecommendationsForDislikeDPX",
                    e));
                R()
            })
        }

        function ta() {
            var a = g.find("#shopbylook-btf-items-section");
            g.find("#shopbylook-btf-mobile-show-more").click(function() {
                w++;
                a.addClass("shopbylook-btf-mobile-section-" + w);
                if (2 === w || a.find(".shopbylook-btf-item-box").length < 6 * (w + 1)) c(this).hide(), c("#shopbylook-btf-explore-more").show()
            })
        }

        function X(a, d) {
            -1 === q.indexOf("L" + d.asin) && (q.push("L" + d.asin), v.push({
                asin: d.asin,
                iteration: t
            }));
            var b = c(a).find(".shopbylook-btf-item-like-img");
            b.attr("src", ia);
            b.addClass("active")
        }

        function fa(a, d) {
            for (var b = !1, e = 0; e < v.length; e++)
                if (v[e].asin === d.asin) {
                    v.splice(e, 1);
                    b = !0;
                    break
                }
            for (e = 0; e < q.length; e++)
                if (q[e] === "L" + d.asin) {
                    q.splice(e, 1);
                    break
                }
            b && (b = c(a).find(".shopbylook-btf-item-like-img"), b.attr("src", Y), b.removeClass("active"))
        }

        function ga(a, d) {
            for (var b = !1, e = 0; e < u.length; e++)
                if (u[e].asin === d.asin) {
                    u.splice(e, 1);
                    b = !0;
                    break
                }
            for (e = 0; e < q.length; e++)
                if (q[e] === "D" + d.asin) {
                    q.splice(e, 1);
                    break
                }
            b && (b = c(a).find(".shopbylook-btf-item-dislike-img"), b.attr("src", Z), b.removeClass("active"))
        }

        function I() {
            k && (k.abort(),
                k = null);
            var a = v;
            0 === v.length && 0 === u.length && (a = [{
                asin: h.mainAsin,
                iteration: t
            }]);
            aa();
            k = c.ajax({
                type: "POST",
                url: "/discover/getRecommendationsDPX",
                data: JSON.stringify({
                    browseNode: h.browseNode,
                    anchorAsin: h.mainAsin,
                    positive: a,
                    negative: u,
                    count: m ? 20 : 100,
                    currentViewAsins: m ? [] : [h.mainAsin],
                    iteration: t,
                    filters: n,
                    isFilterChange: !0
                }),
                contentType: "application/json",
                dataType: "json",
                statusCode: {
                    200: function(a) {
                        c("#shopbylook-btf-no-results-section").hide();
                        var b = a.dpxRecommendationItemList;
                        x = a.nextStart;
                        a = g.find("#shopbylook-btf-items-section");
                        var e = a.find(".shopbylook-btf-item-box").first().clone();
                        e.removeClass("shopbylook-btf-item-box-flip");
                        a.empty();
                        for (var f = 0; f < b.length; f++) {
                            var C = e.clone(),
                                h = b[f];
                            J(C, h, !1); - 1 < q.indexOf("L" + h.asin) && X(C, h);
                            a.append(C)
                        }
                        W(a);
                        a.removeClass("shopbylook-btf-items-section-p-" + T());
                        1 === K(b.length) && a.addClass("shopbylook-btf-items-section-p-last");
                        L();
                        R();
                        m && 2 > w && (b.length < 6 * (w + 1) ? (g.find("#shopbylook-btf-mobile-show-more").hide(), g.find("#shopbylook-btf-explore-more").show()) : (g.find("#shopbylook-btf-mobile-show-more").show(),
                            g.find("#shopbylook-btf-explore-more").hide()))
                    },
                    204: function() {
                        c("#shopbylook-btf-no-results-section").show();
                        g.find("#shopbylook-btf-items-section").find(".shopbylook-btf-item-box:nth-child(n+2)").remove();
                        m ? (g.find("#shopbylook-btf-mobile-show-more").hide(), g.find("#shopbylook-btf-explore-more").show()) : g.find("#sbl-btf-desktop-pagination").text(h.desktopPagination.replace("${page}", 1).replace("${total}", 1))
                    }
                }
            }).always(function() {
                U();
                ja()
            })
        }

        function ua() {
            k && (k.abort(), k = null);
            var a = g.find("#shopbylook-btf-items-section"),
                d = a.find(".shopbylook-btf-item-box").length,
                b = T(),
                e = K(d);
            aa();
            if (100 <= d || -1 === x) {
                if ("last" === b || parseInt(b, 10) >= e) "last" !== b && (a.removeClass("shopbylook-btf-items-section-p-" + b), a.addClass("shopbylook-btf-items-section-p-last"));
                else {
                    var f = parseInt(b, 10) + 1,
                        f = f >= e ? "last" : f;
                    a.removeClass("shopbylook-btf-items-section-p-" + b);
                    a.addClass("shopbylook-btf-items-section-p-" + f)
                }
                L();
                U()
            } else f = v, 0 === v.length && 0 === u.length && (f = [{
                asin: h.mainAsin,
                iteration: t
            }]), k = c.ajax({
                type: "POST",
                url: "/discover/getRecommendationsDPX",
                data: JSON.stringify({
                    browseNode: h.browseNode,
                    anchorAsin: h.mainAsin,
                    positive: f,
                    negative: u,
                    currentViewAsins: ka(!1),
                    start: x,
                    count: 100 - d,
                    filters: n,
                    iteration: t
                }),
                contentType: "application/json",
                dataType: "json",
                statusCode: {
                    424: function() {}
                },
                success: function(b) {
                    if (b && b.dpxRecommendationItemList) {
                        var d = b.dpxRecommendationItemList;
                        x = b.nextStart;
                        b = a.find(".shopbylook-btf-item-box").filter(":visible").first().clone();
                        b.removeClass("shopbylook-btf-item-box-flip");
                        for (var c = 0; c < d.length; c++) {
                            var e = b.clone(),
                                f =
                                d[c];
                            J(e, f, !1); - 1 < q.indexOf("L" + f.asin) && X(e, f);
                            a.append(e);
                            W(e)
                        }
                    } else x = -1
                }
            }).always(function() {
                d = a.find(".shopbylook-btf-item-box").length;
                e = K(d);
                var c = parseInt(b, 10) + 1,
                    c = c >= e ? "last" : c;
                a.removeClass("shopbylook-btf-items-section-p-" + b);
                a.addClass("shopbylook-btf-items-section-p-" + c);
                L();
                U()
            })
        }

        function va() {
            k && (k.abort(), k = null);
            var a = T(),
                d = g.find("#shopbylook-btf-items-section"),
                b = d.find(".shopbylook-btf-item-box").length,
                b = K(b);
            aa();
            b = "last" === a || parseInt(a, 10) > b ? Math.max(1, b - 1) : Math.max(1, parseInt(a,
                10) - 1);
            d.removeClass("shopbylook-btf-items-section-p-" + a);
            d.addClass("shopbylook-btf-items-section-p-" + b);
            L();
            U()
        }

        function K(a) {
            var d = ba();
            return -1 !== x ? Math.min(la, Math.ceil(100 / d)) : Math.min(la, Math.ceil(a / d))
        }

        function Q(a, d, b, e) {
            k && (k.abort(), k = null);
            if (0 !== v.length || 0 !== u.length) {
                var f = ka(d),
                    C = ba(),
                    S;
                S = m ? d ? 2 : 1 : Math.ceil(.2 * C);
                var l = m && d ? 6 * (2 - w) : 0;
                k = c.ajax({
                    type: "POST",
                    url: "/discover/" + b,
                    data: JSON.stringify({
                        browseNode: h.browseNode,
                        anchorAsin: h.mainAsin,
                        asin: a.asin,
                        physicalId: a.physicalId,
                        positive: v,
                        negative: u,
                        currentViewAsins: f,
                        count: S + l,
                        filters: n,
                        iteration: t,
                        asinIndex: e
                    }),
                    contentType: "application/json",
                    dataType: "json",
                    statusCode: {
                        200: function(b) {
                            var e = b.sortedCurrentViewAsins,
                                f = b.dpxRecommendationItemList;
                            x = b.nextStart;
                            b = g.find("#shopbylook-btf-items-section").find(".shopbylook-btf-item-box").filter(":visible");
                            var h = b.first().index(),
                                n = S - 1,
                                q = 0,
                                k = 0;
                            d || (k = g.find("#shopbylook-btf-item-box-" + a.asin), J(k, f[n]) && n--);
                            for (; 0 <= n && q < e.length - 1;)
                                for (k = q; k < e.length; k++) {
                                    var q = k,
                                        t = g.find("#shopbylook-btf-item-box-" +
                                            e[k]),
                                        r = t,
                                        u = h,
                                        v = y ? u + C : u + C - 1;
                                    if (!r.find(".shopbylook-btf-item-like-img").hasClass("active") && r.index() >= u && r.index() < v && (m ? p.onScreen(r, 0) : 1) && J(t, f[n])) {
                                        n--;
                                        break
                                    }
                                }
                            if (0 < l)
                                for (e = 6 * (w + 1), k = S; k < f.length; k++) h = g.find(".shopbylook-btf-item-box").eq(e++), J(h, f[k], !1);
                            if (20 < b.length)
                                for (k = 20; k < b.length; k++) f = c(b[k]), f.hasClass("shopbylook-btf-item-explore-more") || f.remove()
                        }
                    }
                }).always(function() {})
            }
        }

        function ka(a) {
            var d = g.find(".shopbylook-btf-item-box"),
                b = d.map(function() {
                    return z(c(this)).asin
                }).get();
            m || (b.push(h.mainAsin), y && (b.length = Math.min(b.length, 1 + d.filter(":hidden").length + Math.min(20, d.filter(":visible").length))));
            return m && a ? b.splice(0, 6 * (w + 1)) : b
        }

        function J(a, d, b) {
            if (null === a || 0 === a.length || d === F) return !1;
            (b === F || b) && a.toggleClass("shopbylook-btf-item-box-flip");
            var c = a.find(".shopbylook-btf-item-price").children("span");
            b = a.find(".shopbylook-btf-item-ratings");
            var f = a.find(".shopbylook-btf-image-elem"),
                g = a.find(".shopbylook-btf-item-dislike-img"),
                k = a.find(".shopbylook-btf-item-like-img");
            a.attr("data-asin", d.asin);
            a.data("asin", d.asin);
            a.attr("data-physical-id", d.physicalId);
            a.data("physicalId", d.physicalId);
            a.attr("id", "shopbylook-btf-item-box-" + d.asin);
            f.attr("src", d.imageAddress);
            f.attr("alt", d.title);
            f.attr("title", d.title);
            a.find(".shopbylook-btf-item-image").children("a").attr("href", "/dp/" + d.asin + "/ref\x3dsbl_dpx_" + (m ? "m_" : "") + h.mainAsin + "_" + t);
            c.text(d.price);
            d.prime ? a.addClass("shopbylook-prime") : a.removeClass("shopbylook-prime");
            d = d.rating;
            if (!(0 >= a.find(".shopbylook-btf-item-ratings-row").length) &&
                b) {
                for (a = 0; 5 >= a; a++) b.removeClass("a-star-mini-" + a).removeClass("a-star-mini-" + a + "-5");
                !d || .5 > d ? b.addClass("shopbylook-ratings-hide") : (a = Math.floor(d), b.addClass("a-star-mini-" + a + (.5 <= d - a ? "-5" : "")), b.removeClass("shopbylook-ratings-hide"))
            }
            g.attr("src", Z);
            g.removeClass("active");
            k.attr("src", Y);
            k.removeClass("active");
            return !0
        }

        function ba() {
            if (m) return 6 * (w + 1);
            var a = g.find("#shopbylook-btf-items-section");
            return 2 * Math.floor(a.width() / a.children().eq(0).width())
        }

        function R() {
            var a = "/discover/bn/" +
                h.browseNode + "/ref\x3dsbl_dpe_" + (m ? "m_" : "") + h.mainAsin + "_" + t + "?displayAsins\x3d" + h.mainAsin + (0 < q.length ? "\x26asins\x3d" + q.slice(-50).join() : "") + (0 < n.length ? "\x26sblKeywords\x3d" + encodeURIComponent(n.join()) : "");
            g.find("#shopbylook-btf-explore-more").attr("href", a)
        }

        function aa() {
            g.find("#shopbylook-btf-loading-section").show()
        }

        function U() {
            g.find("#shopbylook-btf-loading-section").hide()
        }

        function wa() {
            g.find("#sbl-btf-refinement-row").find("input[type\x3dcheckbox], input[type\x3dradio]").click(function() {
                ma(c(this))
            })
        }

        function ma(a) {
            var d = a.prop("checked"),
                b = z(a.closest(".sbl-refinements-bn-list")),
                e = b.refinementType,
                f = "@" + e,
                g = z(a.closest(".refinement-row")).refinementValue,
                k = "",
                k = y && "browse" === b.refinementSource ? g : f + (g ? ":" + g : ""),
                l = a.closest(".sbl-refinements-bn-list").find("input[type\x3d'checkbox']:checked").length,
                b = n.indexOf(k);
            if (y) {
                f = z(a.closest(".refinement-row")).refinementIndex;
                c(".sbl_refinement_" + e + "_selected").each(function() {
                    p = c(this);
                    if ("review" === e) {
                        c(".review-checkbox").each(function() {
                            c(this).find("input[type\x3d'checkbox']:checked").prop("checked", !1)
                        });
                        for (var a = 0; a < n.length; a++)
                            if (/^@review/.test(n[a]) && n[a] !== k) {
                                n.splice(a, 1);
                                break
                            }
                        0 < l ? p.text(h.refinementStarsAndUp.replace("${count}", g)) : p.text("")
                    } else 0 < l ? p.text("(" + l + ")") : p.text("");
                    0 < l ? c("#sbl-refinement-item-" + e).addClass(m ? "sbl-refinement-item-mobile-selected" : "sbl-refinement-item-selected") : c("#sbl-refinement-item-" + e).removeClass(m ? "sbl-refinement-item-mobile-selected" : "sbl-refinement-item-selected")
                });
                c("." + e + "-" + f + "-checkbox").each(function() {
                    c(this).find("input[type\x3d'checkbox']").prop("checked",
                        d)
                });
                "prime" === e && (g = "prime");
                if ("review" === e && (0 < l ? c(".sbl_refinement_review_title").hide() : c(".sbl_refinement_review_title").show(), r))
                    for (var q = 0; 4 > q; q++) q !== f && c(".sbl-keyword-item-" + e + "-" + q).each(function() {
                        na(c(this))
                    }); - 1 < b ? n.splice(b, 1) : n.push(k);
                r && (b = c(".sbl-keyword-item-" + e + "-" + f), d && !b.length ? (b = c(".sbl-filter-keyword-hidden").clone(), b.appendTo("#sbl-keywords-row"), "review" === e ? b.find(".sbl-filter-keyword-text").text(h.refinementStarsAndUp.replace("${count}", g)) : "prime" !== e ? b.find(".sbl-filter-keyword-text").text(c(".sbl_refinement_" +
                    e + "_title")[0].textContent + ": " + a.closest("." + e + "-" + f + "-checkbox").text()) : a.closest(".refinement-row").find(".a-icon-prime").clone().addClass("sbl-keyword-prime-icon").appendTo(b.find(".sbl-filter-keyword-text")), xa(b, a, e, f)) : !d && b.length && b.each(function() {
                    na(c(this))
                }))
            } else {
                var p = c("#sbl_refinement_" + e + "_selected");
                if ("@review" === f) {
                    a.closest(".sbl-refinements-bn-list").find("input[type\x3d'checkbox']").prop("checked", !1);
                    a.prop("checked", d);
                    for (a = 0; a < n.length; a++)
                        if (/^@review/.test(n[a]) && n[a] !==
                            k) {
                            n.splice(a, 1);
                            break
                        }
                    0 < l ? (p.text(h.refinementStarsAndUp.replace("${count}", g)), c("#sbl_refinement_review_title").hide()) : (p.text(""), c("#sbl_refinement_review_title").show())
                } else 0 < l ? p.text("(" + l + ")") : p.text(""); - 1 < b ? n.splice(b, 1) : n.push(k)
            }
            m || I()
        }

        function L() {
            var a = g.find("#shopbylook-btf-items-section").find(".shopbylook-btf-item-box").length,
                a = x ? a : 100,
                d = T(),
                a = K(a),
                d = "last" === d || parseInt(d, 10) > a ? a : parseInt(d, 10),
                d = h.desktopPagination.replace("${page}", d).replace("${total}", a);
            g.find("#sbl-btf-desktop-pagination").text(d);
            m || (a = g.find("#shopbylook-btf-items-section").find(".shopbylook-btf-item-box"), d = a.filter(":hidden"), a = a.filter(":visible"), 0 < d.length ? g.find("#shopbylook-btf-prev-button").show() : g.find("#shopbylook-btf-prev-button").hide(), a.length <= ba() && x ? g.find("#shopbylook-btf-next-button").hide() : g.find("#shopbylook-btf-next-button").show())
        }

        function oa() {
            var a = null !== M && 0 < M.length && M.is(":visible") ? M : g;
            800 > Math.floor(a.width()) ? G.addClass("shopbylook-btf-remove-anchor") : G.removeClass("shopbylook-btf-remove-anchor");
            L();
            y && !m && null !== D && pa()
        }

        function T() {
            try {
                for (var a = g.find("#shopbylook-btf-items-section").attr("class"), a = a.split(" "), d = 0; d < a.length; d++)
                    if (a[d].includes("shopbylook-btf-items-section-p-")) return a[d].replace("shopbylook-btf-items-section-p-", "")
            } catch (b) {}
            return "1"
        }

        function ya(a) {
            var d = a.find("#sbl-refinements-list");
            N = a.find("#sbl-refinement-options");
            O = a.find("#refinement-divider");
            d.find(".refinement-filter").bind("click mouseover", function() {
                var a = d.find("#" + z(c(this)).filterDiv);
                !a || A &&
                    A.attr("id") === a.attr("id") || (B ? B.removeClass("sbl-selected") : O.show(), B = c(this), B.addClass("sbl-selected"), N.width(210), a.show(), A && A.hide(), A = a)
            })
        }

        function qa(a) {
            y ? (c(".refinement-button-selected-value").each(function() {
                c(this).text("")
            }), c(".sbl_refinement_review_title").show()) : c(".refinement-type-section").each(function() {
                var a = c(this),
                    b = z(a).refinementType,
                    e = a.closest("#sbl_refinement_" + b + "_selected");
                "review" === b && a.closest(".sbl_refinement_review_title").show();
                e.text("")
            });
            c(".refinement-row").find("input[type\x3d'checkbox']:checked").each(function() {
                c(this).prop("checked", !1)
            });
            r && (c(".sbl-filter-keyword-container:not(.sbl-filter-keyword-hidden)").remove(), m ? c(".sbl-refinement-item-mobile-selected").removeClass("sbl-refinement-item-mobile-selected") : c(".sbl-refinement-item-selected").removeClass("sbl-refinement-item-selected"));
            n = [];
            (a === F || a) && I()
        }

        function pa() {
            if (null === D) {
                D = c(".sbl-filter-top-section").length;
                V = c(".refinement-filter").length;
                for (var a = 0; a < D; a++) ca.push(c("#sbl-top-filter-" + a).width());
                da = c("#sbl-filter-selection").width();
                ea = c("#sbl-btf-desktop-pagination").width() +
                    c("#sbl-explore-more").width();
                r || c("#sbl-refinement-btn-clear").hide().removeClass("sbl-refinement-clear-text-hidden")
            }
            for (var a = c("#sbl-btf-refinement-row").width() - ea - da - 150, d = l = 0; l < D;) {
                d += ca[l];
                if (d > a) break;
                c("#sbl-top-filter-" + l).show();
                c("#sbl-refinement-" + l).hide();
                l++
            }
            l = 1 !== V - l ? l : l - 1;
            l === V ? c("#sbl-more-filters-popover").hide() : c("#sbl-more-filters-popover").show();
            P && 0 === l ? (c("#sbl-filter-title").show(), c("#sbl-filter-show-more").hide(), P = !1) : !P && 0 < l && (c("#sbl-filter-title").hide(), c("#sbl-filter-show-more").show(),
                P = !0);
            for (a = l; a < D; a++) c("#sbl-top-filter-" + a).hide(), c("#sbl-refinement-" + a).show();
            ja()
        }

        function ja() {
            if (y) {
                var a = n.length;
                r && !a && g.removeClass("sbl-filter-keywords-activate");
                if (!m)
                    if (a) {
                        if (r || c("#sbl-refinement-btn-clear").show(), 0 < l)
                            for (var d = 0; d < l; d++) a -= c(".sbl-top-checkbox-" + d).find("input[type\x3d'checkbox']:checked").length
                    } else r || c("#sbl-refinement-btn-clear").hide();
                0 < a ? (r && (m ? c("#sbl-refinement-item-all").addClass("sbl-refinement-item-mobile-selected") : c("#sbl-more-filters-popover").addClass("sbl-refinement-item-selected")),
                    c("#sbl-show-more-selected").text("(" + a + ")")) : (r && (m ? c("#sbl-refinement-item-all").removeClass("sbl-refinement-item-mobile-selected") : c("#sbl-more-filters-popover").removeClass("sbl-refinement-item-selected")), c("#sbl-show-more-selected").text(""))
            }
        }

        function za() {
            H.when("a-sheet").register("sbl-bottom-sheet", function(a) {
                function d(b, d) {
                    var f = b.toLowerCase(),
                        g = c("#refinement-" + f + "-sheet"),
                        f = c("#sbl-" + f + "-refinement-buttons").height(),
                        h = 0;
                    "All" === b ? (g.find(".sbl-refinement-expander").each(function() {
                        var a =
                            c(this);
                        h += 50;
                        a.find(".a-icon-section-collapse").length && (h += 35 * a.find(".refinement-row").length + 12)
                    }), r ? (h += 0 < f ? f : 60, f = 0) : f = 0 < f ? f : 105) : (h = 35 * g.find(".refinement-row").length + 40, f = 0 < f ? f : 60);
                    var k = Math.min(.8 * E.innerHeight - f - 12, h);
                    if (0 < k) {
                        g.find(".sbl-mobile-filters").height(k);
                        if (d) {
                            var l = a.get("sbl" + b + "Sheet");
                            if (l && !l._animating) {
                                l.changeHeight({
                                    duration: 0,
                                    height: k + f
                                });
                                return
                            }
                        }
                        g.closest(".a-sheet-web").height(k + f)
                    }
                }
                Aa.forEach(function(a) {
                    p.on("a:sheet:beforeShow:sbl" + a + "Sheet", function(c) {
                        d(a, !1)
                    });
                    p.on("a:sheet:beforeHide:sbl" + a + "Sheet", function(a) {
                        y && I()
                    })
                });
                if (r) c(".sbl-refinement-expander").each(function(a, c) {
                    p.on("a:expander:sbl-refinement-expander-" + a + ":toggle", function(a) {
                        d("All", !0)
                    })
                });
                else p.on("a:expander:toggle", function(a) {
                    a.expander.$expander.hasClass("sbl-refinement-expander") && d("All", !0)
                })
            })
        }

        function na(a) {
            m && I();
            p.animate(a, {
                width: "0",
                margin: "0",
                opacity: "0"
            }, 350, "ease-out", function() {
                a.remove()
            })
        }

        function xa(a, c, b, e) {
            a.addClass("sbl-keyword-item-" + b + "-" + e);
            g.addClass("sbl-filter-keywords-activate");
            a.click(function() {
                c.prop("checked", !1);
                ma(c)
            });
            a.removeClass("sbl-filter-keyword-hidden").width(a.width())
        }

        function ra() {
            g = c("#mirai-btf-shopbylook-row");
            if (0 < g.length) {
                G = c("#desktop-dp-btf-shopbylook");
                M = 0 < G.length ? G.find("h2") : null;
                var a = p.state("shopbylookStateData");
                a || g.hide();
                var d = z(g),
                    b = d.mainAsin;
                h && h.mainAsin === b || h && !b || !a || (h = a, h.mainAsin = b ? b : h.mainAsin, h.browseNode = d.browseNode ? d.browseNode : h.browseNode, v = [], u = [], q = [], w = t = 0, x = null, n = [], m = 0 < g.find(".shopbylook-btf-mobile-section").length,
                    Y = h.likeImage, ia = h.likeActiveImage, Z = h.dislikeImage, ha = h.dislikeActiveImage, R(), W(g), y = 0 < g.find("#sbl-refinement-btn-clear").length, r = 0 < c(".sbl-filter-keyword-container").length, m && (ta(), g.find(".sbl-refinement-btn-apply").click(I)), wa(), g.find("#shopbylook-btf-next-button").click(ua), g.find("#shopbylook-btf-prev-button").click(va), oa(), E.addEventListener("resize", oa), !y) || (ca = [], da = ea = null, P = !0, V = D = null, l = 0, B = O = N = A = null, g.find("#sbl-refinement-btn-clear").click(qa), m ? sa || (za(), sa = !0) : (ya(G), pa()),
                    qa(!1))
            } else h && (h.mainAsin = null)
        }
        var Z = "dislike.svg",
            ha = "dislike_active.svg",
            Y = "like.svg",
            ia = "like_active.svg",
            la = Math.floor(10),
            h, g, G, M, m = !1,
            y = !1,
            v = [],
            u = [],
            q = [],
            t = 0,
            w = 0,
            x = null,
            k = null,
            n = [],
            ca = [],
            ea = null,
            da = null,
            P = !0,
            D = null,
            V = null,
            l = 0,
            A = null,
            N = null,
            O = null,
            B = null,
            Aa = ["0", "1", "2", "All"],
            sa = !1,
            r = !1;
        p.on("a:popover:hide:refinementPreloads", function() {
            A && (A.hide(), A = null);
            N && N.width(0);
            O && O.hide();
            B && (B.removeClass("sbl-selected"), B = null)
        });
        p.on("a:pageUpdate", function() {
            ra()
        });
        ra()
    })
});