(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        10: function(e, n, t) {
            "use strict";
            var i = t(18),
                a = t.n(i),
                r = t(0),
                o = function(e) {
                    return e.trim().toLowerCase()
                },
                c = t(44),
                s = t(32),
                u = t(8),
                d = t(4),
                l = t(60),
                p = t(3),
                h = t(14),
                m = t(6),
                f = t(5),
                g = function(e, n) {
                    return e ? function(e, n) {
                        return e.split(n).map(function(e) {
                            return e.trim()
                        }).filter(Boolean)
                    }(e, n) : []
                },
                v = function(e) {
                    return "string" == typeof e && "true" === e.toLowerCase().trim()
                },
                b = t(7),
                y = t(61),
                w = t.n(y),
                _ = '\n    <div id="epic-ticker" class="js-epic-ticker epic-ticker is-hidden">\n    \n        <div class="js-ticker-amounts">\n            <div class="js-ticker-so-far epic-ticker__so-far">\n                <div class="js-ticker-count epic-ticker__count"></div>\n                <div class="js-ticker-label epic-ticker__count-label is-hidden">contributed</div>\n            </div>\n            \n            <div class="js-ticker-goal epic-ticker__goal">\n                <div class="js-ticker-count epic-ticker__count">'.concat(Object(f.f)(), '0</div>\n                <div class="js-ticker-label epic-ticker__count-label">our goal</div>\n            </div>\n        </div>\n        \n        <div class="epic-ticker__progress-container">\n            <div class="epic-ticker__progress">\n                <div class="js-ticker-filled-progress epic-ticker__filled-progress"></div>\n            </div>\n            <div class="js-ticker-goal-marker epic-ticker__goal-marker is-hidden"></div>\n        </div>\n    </div>\n'),
                k = t(40),
                j = t(43),
                O = t(72),
                T = {
                    heading: "Since you’re here &hellip;",
                    paragraphs: ["&hellip; we have a small favour to ask. More people are reading the Guardian than ever but advertising revenues across the media are falling fast. And unlike many news organisations, we haven’t put up a paywall &ndash; we want to keep our journalism as open as we can. So you can see why we need to ask for your help.", "The Guardian is editorially independent, meaning we set our own agenda. Our journalism is free from commercial bias and not influenced by billionaire owners, politicians or shareholders. No one edits our Editor. No one steers our opinion. This is important because it enables us to give a voice to the voiceless, challenge the powerful and hold them to account. It’s what makes us different to so many others in the media, at a time when factual, honest reporting is critical.", "If everyone who reads our reporting, who likes it, helps to support it, our future would be much more secure."],
                    highlightedText: "For as little as ".concat(Object(f.f)(), "1, you can support the Guardian &ndash; and it only takes a minute. Thank you.")
                },
                C = t(28),
                A = t.n(C),
                I = !1,
                S = function(e, n, t) {
                    var i = function() {
                        var e = document.getElementsByClassName("block"),
                            n = document.getElementsByClassName("js-insert-epic-after"),
                            t = document.getElementsByClassName("is-epic"),
                            i = e.length > 4;
                        if (n.length || t.length || !i) return Array.from(n);
                        var a = e[Math.floor(3 * Math.random())];
                        return Array.from(n).concat(a)
                    }().map(function(e) {
                        return [e, function(e) {
                            var n = e.querySelector("time"),
                                t = e.querySelector(".block-time__absolute");
                            if (n && t) {
                                var i = n.parentNode,
                                    a = i instanceof HTMLAnchorElement ? i.href : "";
                                return {
                                    datetime: n.getAttribute("datetime") || "",
                                    title: n.getAttribute("title") || "",
                                    date: n.innerHTML,
                                    time: t.innerHTML,
                                    blockHref: a
                                }
                            }
                        }(e)]
                    });
                    return p.a.write(function() {
                        i.forEach(function(i) {
                            var a = A()(i, 2),
                                r = a[0],
                                o = a[1];
                            if (o) {
                                var s = u.a.create(e);
                                s.insertAfter(r), m.a.emit(t.insertEvent), Object(u.a)(r).removeClass("js-insert-epic-after"),
                                    function(e, n) {
                                        var t = e.querySelector("time"),
                                            i = e.querySelector(".block-time__absolute");
                                        if (t && i) {
                                            var a = t.parentNode;
                                            a instanceof HTMLAnchorElement && (a.href = n.blockHref), t.setAttribute("datetime", n.datetime), t.setAttribute("title", n.title), t.innerHTML = n.date, i.innerHTML = n.time
                                        }
                                    }(s[0], o),
                                    function(e, n, t) {
                                        Object(l.a)(e, window, {
                                            top: 18
                                        }).on("firstview", function() {
                                            Object(c.b)(n.id), m.a.emit(t.viewEvent, {
                                                componentType: t.componentType,
                                                campaignCode: n.campaignCode
                                            })
                                        })
                                    }(r, n, t)
                            }
                        })
                    })
                },
                E = function(e, n, t) {
                    S(e, n, t), I || (m.a.on("modules:autoupdate:updates", function() {
                        S(e, n, t)
                    }), I = !0)
                },
                x = t(15),
                N = [{
                    section: "football"
                }, {
                    section: "money"
                }, {
                    section: "education"
                }, {
                    section: "games"
                }, {
                    section: "teacher-network"
                }, {
                    section: "careers"
                }, {
                    keywordIds: ["guardian-masterclasses/guardian-masterclasses"]
                }],
                M = function(e, n) {
                    return !n.some(function(n) {
                        var t = !n.section || n.section === e.section,
                            i = !n.toneIds || n.toneIds.every(function(n) {
                                return e.toneIds.includes(n)
                            }),
                            a = !n.keywordIds || n.keywordIds.every(function(n) {
                                return e.keywordIds.includes(n)
                            });
                        return t && i && a
                    })
                },
                R = t(169);
            t.d(n, "e", function() {
                return re
            }), t.d(n, "c", function() {
                return oe
            }), t.d(n, "f", function() {
                return ce
            }), t.d(n, "j", function() {
                return q
            }), t.d(n, "i", function() {
                return ne
            }), t.d(n, "d", function() {
                return P
            }), t.d(n, "g", function() {
                return L
            }), t.d(n, "h", function() {
                return B
            }), t.d(n, "b", function() {
                return te
            }), t.d(n, "a", function() {
                return ie
            });
            var L = function(e) {
                    switch (e) {
                        case "GB":
                            return "united-kingdom";
                        case "US":
                            return "united-states";
                        case "AU":
                            return "australia";
                        default:
                            return "rest-of-world"
                    }
                },
                B = function() {
                    return d.a.get("gu.alreadyVisited") || 0
                },
                U = function(e, n) {
                    return e.replace(/%%COUNTRY_NAME%%/g, n)
                },
                G = {
                    days: 30,
                    count: 4,
                    minDaysBetweenViews: 0
                },
                P = function(e, n) {
                    return function(e) {
                        var n = e.supportUrl,
                            t = void 0 === n ? "" : n,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Support The Guardian",
                            a = b.b ? w.a.markup : "",
                            o = '\n        <div>\n            <a class="component-button component-button--primary component-button--hasicon-right contributions__contribute--epic-member"\n              href="'.concat(t, '"\n              target="_blank">\n                ').concat(i, '\n                <svg\n                class="svg-arrow-right-straight"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 20 17.89"\n                preserveAspectRatio="xMinYMid"\n                aria-hidden="true"\n                focusable="false"\n                >\n                    <path d="M20 9.35l-9.08 8.54-.86-.81 6.54-7.31H0V8.12h16.6L10.06.81l.86-.81L20 8.51v.84z" />\n                </svg>\n            </a>\n        </div>'),
                            c = '<div class="contributions__payment-logos contributions__contribute--epic-member">\n        <img src="'.concat(r.a.get("images.acquisitions.payment-methods", ""), '" alt="Accepted payment methods: Visa, Mastercard, American Express and Paypal">\n        ').concat(a, "\n    </div>");
                        return '\n        <div class="contributions__buttons">\n            '.concat(o, "\n            ").concat(c, "\n        </div>")
                    }(e, n)
                },
                D = function(e, n) {
                    return function(e) {
                        var n, t, i, a = e.copy,
                            r = a.heading,
                            o = void 0 === r ? "" : r,
                            c = a.paragraphs,
                            s = a.highlightedText,
                            u = a.footer,
                            d = e.componentName,
                            l = e.epicClassNames,
                            p = void 0 === l ? [] : l,
                            h = e.buttonTemplate,
                            m = e.wrapperClass,
                            f = void 0 === m ? "" : m,
                            g = e.showTicker,
                            v = void 0 !== g && g,
                            b = e.backgroundImageUrl,
                            y = (b ? p.concat(["contributions__epic--with-image"]) : p).join(" ");
                        return '<div class="contributions__epic '.concat(y, '" data-component="').concat(d, '" data-link-name="epic">\n        <div class="').concat(f, '">\n            <div>\n                ').concat(v ? _ : "", "\n                \n                ").concat(b ? (i = b, '<div class="contributions__epic-image">\n        <img src="'.concat(i, '" alt="Image for Guardian contributions message"/>\n    </div>')) : "", '\n\n                <h2 class="contributions__title">\n                    ').concat(o, "\n                </h2>\n                ").concat((n = c, t = s ? ' <strong><span class="contributions__highlight">'.concat(s, "</span></strong>") : "", n.map(function(e, i) {
                            return i + 1 === n.length ? "".concat(e).concat(t) : e
                        })).map(function(e) {
                            return "<p>".concat(e, "</p>")
                        }).join(""), "\n            </div>\n    \n            ").concat(h || "", "\n            \n            ").concat(u ? '<div class="contributions__epic-footer">\n        '.concat(u.map(function(e) {
                            return "<h2>".concat(e, "</h2>")
                        }).join(""), "\n    </div>") : "", "\n        </div>\n    </div>")
                    }({
                        copy: n,
                        componentName: e.componentName,
                        buttonTemplate: e.buttonTemplate ? e.buttonTemplate({
                            supportUrl: e.supportURL,
                            subscribeUrl: e.subscribeURL
                        }, e.ctaText) : void 0,
                        epicClassNames: e.classNames,
                        showTicker: e.showTicker,
                        backgroundImageUrl: e.backgroundImageUrl
                    })
                },
                H = function(e, n) {
                    return function(e) {
                        var n = e.copy,
                            t = e.supportURL;
                        return '<div class="block block--content is-epic" data-component="'.concat(e.componentName, '">\n        <p class="block-time published-time">\n            <a href="#" itemprop="url" class="block-time__link">\n                <time data-relativeformat="med" itemprop="datePublished" class="js-timestamp"></time>\n                <span class="block-time__absolute"></span>\n            </a>\n        </p>\n        <div class="block-elements block-elements--no-byline">\n            ').concat(n.paragraphs.map(function(e) {
                            return "<p><em>".concat(e, "</em></p>")
                        }).join(""), "\n            <p><em>").concat(function(e, n) {
                            return "".concat(e ? '<span className="contributions__highlight">'.concat(e, "</span>") : "", '\n    <a href="').concat(n, '" target="_blank" class="u-underline">Make a contribution</a> - The Guardian')
                        }(n.highlightedText, t), "</em></p>\n        </div>\n    </div>")
                    }({
                        copy: n,
                        componentName: e.componentName,
                        supportURL: e.supportURL
                    })
                },
                V = function(e) {
                    return "Article" === e.contentType && !e.isMinuteArticle && M(e, N)
                },
                F = function(e) {
                    return "LiveBlog" === e.contentType && M(e, N)
                },
                q = function() {
                    return r.a.get("page.shouldHideReaderRevenue") || "paid-content" === r.a.get("page.sponsorshipType")
                },
                K = function(e) {
                    switch (e) {
                        case "PostAskPauseSingleContributors":
                            return Object(k.i)() && !Object(k.l)();
                        case "AllExistingSupporters":
                            return Object(k.l)();
                        case "AllNonSupporters":
                            return !Object(k.l)();
                        case "Everyone":
                        default:
                            return !0
                    }
                },
                Y = function(e) {
                    var n = e.pageCheck(r.a.get("page")),
                        t = function(e) {
                            return !e.useTargetingTool || function(e) {
                                return function(e) {
                                    try {
                                        return r.a.get("page.campaigns", []).filter(function(n) {
                                            return n.fields && o(n.fields.campaignId) === o(e)
                                        })
                                    } catch (e) {
                                        return []
                                    }
                                }(e.campaignId).length > 0
                            }(e)
                        }(e);
                    return !q() && n && K(e.userCohort) && t
                },
                W = function(e, n, t) {
                    return "".concat(e, "_").concat(n, "_").concat(t)
                },
                z = function(e, n) {
                    return "".concat(e, ":").concat(n)
                },
                Z = function(e) {
                    return e.some(function(e) {
                        return "".concat(r.a.get("page.keywordIds"), ",").concat(r.a.get("page.nonKeywordTagIds")).includes(e)
                    })
                },
                J = function(e, n) {
                    var t = n ? Object(f.a)(n).toUpperCase() : void 0;
                    return e.some(function(e) {
                        return t === e.toUpperCase()
                    })
                },
                Q = function(e) {
                    return e.some(function(e) {
                        return r.a.get("page.section") === e
                    })
                },
                X = function(e) {
                    return !!e && e.includes("%%")
                },
                $ = function(e, n) {
                    return !e || !!Object(f.c)(n)
                },
                ee = function(e, n, t) {
                    var i = "epic_".concat(t.campaignId),
                        a = W(t.campaignPrefix, t.campaignId, e.id),
                        r = W(t.campaignPrefix, t.campaignId, e.id),
                        o = e.deploymentRules || G;
                    return {
                        id: e.id,
                        componentName: "mem_acquisition_".concat(i, "_").concat(e.id),
                        campaignCode: r,
                        supportURL: Object(s.b)({
                            base: e.supportBaseURL ? Object(j.a)(e.supportBaseURL) : Object(j.b)(),
                            componentType: t.componentType,
                            componentId: a,
                            campaignCode: r,
                            abTest: {
                                name: t.id,
                                variant: e.id
                            }
                        }),
                        subscribeURL: Object(s.b)({
                            base: j.d,
                            componentType: t.componentType,
                            componentId: a,
                            campaignCode: r,
                            abTest: {
                                name: t.id,
                                variant: e.id
                            }
                        }),
                        template: n,
                        buttonTemplate: e.buttonTemplate,
                        ctaText: e.ctaText,
                        copy: e.copy,
                        classNames: e.classNames || [],
                        showTicker: e.showTicker || !1,
                        backgroundImageUrl: e.backgroundImageUrl,
                        deploymentRules: o,
                        countryGroups: e.countryGroups || [],
                        tagIds: e.tagIds || [],
                        sections: e.sections || [],
                        excludedTagIds: e.excludedTagIds || [],
                        excludedSections: e.excludedSections || [],
                        canRun: function() {
                            var e, n, i, a, r, s, u, d = this,
                                l = "AlwaysAsk" === o || (n = (e = o).count, i = e.days, a = e.minDaysBetweenViews, r = t.useLocalViewLog ? t.id : void 0, s = Object(c.c)(i, r) < n, u = 0 === Object(c.c)(a, r), s && u),
                                p = 0 === this.countryGroups.length || J(this.countryGroups, t.geolocation),
                                h = 0 === this.tagIds.length && 0 === this.sections.length || Z(this.tagIds) || Q(this.sections),
                                m = !Z(this.excludedTagIds),
                                f = !Q(this.excludedSections);
                            return l && p && h && m && f && (!d.copy || !X(d.copy.heading) && !d.copy.paragraphs.some(X) && !X(d.copy.highlightedText))
                        },
                        test: function() {
                            var n = this;
                            (this.copy && Promise.resolve(this.copy) || Object(O.c)().then(function(e) {
                                return function(e) {
                                    var n = e && e[0];
                                    if (!(n && n.heading && n.paragraphs && n.highlightedText)) throw new Error("Required data from the Google Doc was missing. Got row: ".concat(n));
                                    return {
                                        heading: n.heading,
                                        paragraphs: e.map(function(e) {
                                            return e.paragraphs
                                        }),
                                        highlightedText: n.highlightedText.replace(/%%CURRENCY_SYMBOL%%/g, Object(f.f)())
                                    }
                                }(e)
                            }).catch(function(e) {
                                return Object(h.a)(new Error("Could not fetch control epic copy from Google Doc. ".concat(e.message, ". Stack: ").concat(e.stack)), {
                                    feature: "epic"
                                }, !1), T
                            })).then(function(e) {
                                return n.template(n, e)
                            }).then(function(a) {
                                if (!e.test) {
                                    var o = u.a.create(a);
                                    return m.a.emit("register:begin", i), p.a.write(function() {
                                        var n, a = (".submeta", (n = Array.from(document.querySelectorAll(".submeta"))).length ? [n[0]] : []);
                                        return new Promise(function(e) {
                                            m.a.on("module:clickstream:click", function(n) {
                                                !0 !== n && !1 !== n && n.tags.find(function(e) {
                                                    return "epic" === e
                                                }) && e()
                                            })
                                        }).then(function() {
                                            return Object(s.c)({
                                                component: {
                                                    componentType: t.componentType,
                                                    products: e.products,
                                                    campaignCode: r,
                                                    id: r
                                                },
                                                abTest: {
                                                    name: t.id,
                                                    variant: e.id
                                                }
                                            })
                                        }), a.length > 0 && (o.insertBefore(a), m.a.emit(t.insertEvent, {
                                            componentType: t.componentType,
                                            products: e.products,
                                            campaignCode: r
                                        }), o.each(function(n) {
                                            Object(l.a)(n, window, {
                                                top: 18
                                            }).on("firstview", function() {
                                                Object(c.b)(t.id), m.a.emit(t.viewEvent, {
                                                    componentType: t.componentType,
                                                    products: e.products,
                                                    campaignCode: r
                                                }), m.a.emit("register:end", i), e.showTicker && Object(R.a)(".js-epic-ticker")
                                            })
                                        })), o[0]
                                    })
                                }
                                var d = t;
                                e.test(a, n, d)
                            })
                        },
                        impression: function(n) {
                            return m.a.once(t.insertEvent, function() {
                                Object(s.e)({
                                    component: {
                                        componentType: t.componentType,
                                        products: e.products,
                                        campaignCode: r,
                                        id: r
                                    },
                                    abTest: {
                                        name: t.id,
                                        variant: e.id
                                    }
                                }), n()
                            })
                        },
                        success: function(n) {
                            return m.a.once(t.viewEvent, function() {
                                Object(s.f)({
                                    component: {
                                        componentType: t.componentType,
                                        products: e.products,
                                        campaignCode: r,
                                        id: r
                                    },
                                    abTest: {
                                        name: t.id,
                                        variant: e.id
                                    }
                                }), n()
                            })
                        }
                    }
                },
                ne = function(e) {
                    var n = e.id,
                        t = e.start,
                        i = e.expiry,
                        a = e.author,
                        r = e.idealOutcome,
                        o = e.campaignId,
                        c = e.description,
                        s = e.audience,
                        u = e.audienceOffset,
                        d = e.successMeasure,
                        l = e.audienceCriteria,
                        p = e.variants,
                        h = e.geolocation,
                        m = e.highPriority,
                        f = e.campaignPrefix,
                        g = void 0 === f ? "gdnwb_copts_memco" : f,
                        v = e.useLocalViewLog,
                        b = void 0 !== v && v,
                        y = e.useTargetingTool,
                        w = void 0 !== y && y,
                        _ = e.userCohort,
                        k = void 0 === _ ? "AllNonSupporters" : _,
                        j = e.testHasCountryName,
                        O = void 0 !== j && j,
                        T = e.pageCheck,
                        C = void 0 === T ? V : T,
                        A = e.template,
                        I = void 0 === A ? D : A,
                        S = e.canRun,
                        E = void 0 === S ? function() {
                            return !0
                        } : S,
                        x = {
                            showForSensitive: !0,
                            geolocation: h,
                            highPriority: m,
                            canRun: function() {
                                return E() && $(O, h) && Y(this)
                            },
                            componentType: "ACQUISITIONS_EPIC",
                            insertEvent: z(n, "insert"),
                            viewEvent: z(n, "view"),
                            variants: [],
                            id: n,
                            start: t,
                            expiry: i,
                            author: a,
                            description: c,
                            audience: s,
                            audienceOffset: u,
                            successMeasure: d,
                            audienceCriteria: l,
                            idealOutcome: r,
                            campaignId: o,
                            campaignPrefix: g,
                            useLocalViewLog: b,
                            userCohort: k,
                            pageCheck: C,
                            useTargetingTool: w
                        };
                    return x.variants = p.map(function(e) {
                        return ee(e, I, x)
                    }), x
                },
                te = function(e, n, t) {
                    var i = e.heading,
                        a = function(e, n) {
                            if (Array.isArray(n) && n.length > 0) return n;
                            throw new Error("".concat("paragraphs", " is empty"))
                        }(0, e.paragraphs),
                        r = n ? Object(f.c)(t) : void 0;
                    return {
                        heading: i && r ? U(i, r) : i,
                        paragraphs: a && r ? a.map(function(e) {
                            return U(e, r)
                        }) : a,
                        highlightedText: e.highlightedText ? e.highlightedText.replace(/%%CURRENCY_SYMBOL%%/g, Object(f.e)(t)) : void 0,
                        footer: g(e.footer, "\n")
                    }
                },
                ie = function(e, n, t) {
                    var i = n ? Object(f.c)(t) : void 0;
                    return i ? U(e, i) : e
                },
                ae = function(e) {
                    var n, t = Object(f.g)(),
                        i = e.locations,
                        r = e.tagIds,
                        o = e.sections,
                        c = e.excludedTagIds,
                        s = e.excludedSections,
                        u = e.alwaysAsk ? "AlwaysAsk" : e.maxViews ? {
                            days: e.maxViews.maxViewsDays,
                            count: e.maxViews.maxViewsCount,
                            minDaysBetweenViews: e.maxViews.minDaysBetweenViews
                        } : G;
                    return ne(a()({
                        id: e.name,
                        campaignId: e.name,
                        geolocation: t,
                        highPriority: e.highPriority,
                        start: "2018-01-01",
                        expiry: "2025-01-01",
                        author: "Epic test tool",
                        description: "Epic test tool",
                        successMeasure: "AV2.0",
                        idealOutcome: "Epic test tool",
                        audienceCriteria: "All",
                        audience: parseFloat(e.audience) ? e.audience : 1,
                        audienceOffset: parseFloat(e.audienceOffset) ? e.audienceOffset : 0,
                        useLocalViewLog: e.useLocalViewLog,
                        userCohort: e.userCohort && (n = e.userCohort, ["AllExistingSupporters", "AllNonSupporters", "Everyone", "PostAskPauseSingleContributors"].includes(n)) ? e.userCohort : "AllNonSupporters"
                    }, e.isLiveBlog ? {
                        template: H,
                        pageCheck: F
                    } : {
                        template: D,
                        pageCheck: V
                    }, {
                        testHasCountryName: e.hasCountryName,
                        variants: e.variants.map(function(n) {
                            return a()({
                                id: n.name
                            }, e.isLiveBlog ? {
                                test: E
                            } : {}, n.cta ? {
                                buttonTemplate: P,
                                ctaText: n.cta.text,
                                supportBaseURL: n.cta.baseURL
                            } : {}, {
                                copy: te(n, e.hasCountryName, t),
                                classNames: ["contributions__epic--".concat(e.name), "contributions__epic--".concat(e.name, "-").concat(n.name)],
                                showTicker: v(n.showTicker),
                                backgroundImageUrl: (d = n.backgroundImageUrl, d && d.trim().length > 0 ? d.trim() : void 0),
                                deploymentRules: u,
                                countryGroups: i,
                                tagIds: r,
                                sections: o,
                                excludedTagIds: c,
                                excludedSections: s
                            });
                            var d
                        })
                    }))
                },
                re = function() {
                    return (e = r.a.get("page.isDev") ? "https://support.code.dev-theguardian.com/epic-tests.json" : "https://support.theguardian.com/epic-tests.json", Object(x.a)(e, {
                        mode: "cors"
                    })).then(function(e) {
                        var n = "#show-draft-epics" === window.location.hash;
                        return e.tests ? e.tests.filter(function(e) {
                            return e.isOn || n
                        }).map(ae) : []
                    }).catch(function(e) {
                        return Object(h.a)(new Error("Error getting multiple configured epic tests. ".concat(e.message, ". Stack: ").concat(e.stack)), {
                            feature: "epic"
                        }, !1), []
                    });
                    var e
                },
                oe = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "AllNonSupporters",
                        t = B() >= e,
                        i = q();
                    return t && !i && K(n)
                },
                ce = function() {
                    return Object(O.d)(O.a).then(function(e) {
                        var n = e && e.sheets;
                        return n ? Object.keys(n).filter(function(e) {
                            return e.endsWith("__ON")
                        }).map(function(e) {
                            var t = n[e],
                                i = e.split("__ON")[0],
                                a = t.some(function(e) {
                                    return v(e.hasCountryName)
                                }),
                                r = t.find(function(e) {
                                    return void 0 !== e.locations && "" !== e.locations
                                }),
                                o = r ? g(r.locations, ",") : [],
                                c = Object(f.g)();
                            return {
                                id: i,
                                campaignId: i,
                                componentType: "ACQUISITIONS_ENGAGEMENT_BANNER",
                                start: "2018-01-01",
                                expiry: "2020-01-01",
                                author: "Google Docs",
                                description: "Google Docs",
                                successMeasure: "AV2.0",
                                idealOutcome: "Google Docs",
                                audienceCriteria: "All",
                                audience: 1,
                                audienceOffset: 0,
                                geolocation: c,
                                canRun: function() {
                                    var e = 0 === o.length || J(o, c);
                                    return $(a, c) && e
                                },
                                variants: t.map(function(e) {
                                    var n = e.leadSentence ? ie(e.leadSentence.trim(), a, c) : void 0,
                                        t = ie(e.messageText.trim(), a, c),
                                        i = '<span class="engagement-banner__highlight"> '.concat(e.ctaText.replace(/%%CURRENCY_SYMBOL%%/g, Object(f.e)(c)), "</span>");
                                    return {
                                        id: e.name.trim().toLowerCase(),
                                        products: [],
                                        test: function() {},
                                        engagementBannerParams: {
                                            leadSentence: n,
                                            messageText: t,
                                            ctaText: i,
                                            buttonCaption: e.buttonCaption.trim(),
                                            linkUrl: e.linkUrl.trim(),
                                            hasTicker: !1
                                        },
                                        canRun: function() {
                                            return oe() && !X(n) && !X(t) && !X(i)
                                        }
                                    }
                                })
                            }
                        }) : []
                    }).catch(function(e) {
                        return Object(h.a)(new Error("Error getting multiple engagement banner tests from Google Docs. ".concat(e.message, ". Stack: ").concat(e.stack)), {
                            feature: "engagement-banner"
                        }, !1), []
                    })
                }
        },
        114: function(e, n, t) {
            "use strict";
            var i = t(70),
                a = t.n(i),
                r = t(57),
                o = t.n(r),
                c = t(71),
                s = t.n(c),
                u = t(61),
                d = t.n(u),
                l = t(0),
                p = t(7),
                h = t(5),
                m = '\n    <div id="banner-ticker" class="js-engagement-banner-ticker engagement-banner-ticker is-hidden">\n        \n        <div class="js-ticker-under-goal is-hidden">\n            <div class="js-ticker-so-far engagement-banner-ticker__so-far">\n                <div class="js-ticker-count engagement-banner-ticker__count">'.concat(Object(h.f)(), '0</div>\n                <div class="engagement-banner-ticker__count-label">contributed</div>\n            </div>\n            \n            <div class="js-ticker-goal engagement-banner-ticker__goal">\n                <div class="js-ticker-count engagement-banner-ticker__count">').concat(Object(h.f)(), '0</div>\n                <div class="engagement-banner-ticker__count-label">our goal</div>\n            </div>\n        </div>\n        \n        <div class="js-ticker-over-goal is-hidden">\n            <div class="engagement-banner-ticker__thankyou">\n                <div>Help us beat our goal - thank you</div>\n                <div>Please keep contributing into the new year</div>\n            </div>\n            \n            <div class="js-ticker-exceeded engagement-banner-ticker__exceeded">\n                <div class="js-ticker-count engagement-banner-ticker__count">').concat(Object(h.f)(), '0</div>\n                <div class="engagement-banner-ticker__count-label">contributed</div>\n            </div>\n        </div>\n        \n        <div class="engagement-banner-ticker__progress-container">\n            <div class="engagement-banner-ticker__progress">\n                <div class="js-ticker-filled-progress engagement-banner-ticker__filled-progress ticker__filled-progress-under"></div>\n            </div>\n            <div class="js-ticker-goal-marker engagement-banner-ticker__goal-marker is-hidden"></div>\n        </div>\n    </div>\n');
            t.d(n, "a", function() {
                return f
            });
            var f = function(e) {
                var n = p.b ? d.a.markup : "";
                return '\n        <div class="engagement-banner__close">\n            <div class="engagement-banner__roundel hide-until-phablet">\n                '.concat(a.a.markup, '\n            </div>\n            <button tabindex="4" class="button engagement-banner__close-button js-site-message-close js-engagement-banner-close-button" data-link-name="hide release message">\n                <span class="u-h">Close the support banner</span>\n                ').concat(o.a.markup, '\n            </button>\n        </div>\n        <div class="engagement-banner__container">\n            <div class="engagement-banner__text">\n                ').concat(e.leadSentence ? '<div class="engagement-banner__header">\n                        '.concat(e.leadSentence, "\n                    </div>") : "", "\n                ").concat(e.messageText).concat(e.ctaText, "\n                ").concat(e.hasTicker ? m : "", '\n            </div>\n            <div class="engagement-banner__cta">\n                <a tabindex="3" class="button engagement-banner__button" href="').concat(e.linkUrl, '">\n                    ').concat(e.buttonCaption).concat(s.a.markup, '\n                </a>\n                <div class="engagement-banner__payment-logos">\n                    <img\n                        src="').concat(l.a.get("images.acquisitions.payment-methods", ""), '"\n                        alt="Accepted payment methods: Visa, Mastercard, American Express and Paypal"\n                    >\n                    ').concat(n, '\n                </div>\n            </div>\n        </div>\n        <a\n            aria-hidden="true"\n            class="u-faux-block-link__overlay"\n            target="_blank"\n            href="').concat(e.linkUrl, '"\n        ></a>\n    ')
            }
        },
        119: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            });
            var i = {
                id: "CommercialIabCompliant",
                start: "2018-08-13",
                expiry: "2019-10-30",
                author: "Ricardo Costa",
                description: "0% participation AB test for the IAB compliant CMP",
                audience: 0,
                audienceOffset: 0,
                successMeasure: "Our CMP is compliant with TCF IAB standards",
                audienceCriteria: "n/a",
                dataLinkNames: "n/a",
                idealOutcome: "CMP is compliant",
                showForSensitive: !0,
                canRun: function() {
                    return !0
                },
                variants: [{
                    id: "variant",
                    test: function() {}
                }]
            }
        },
        121: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            });
            var i = {
                id: "CommercialPrebidSafeframe",
                start: "2018-06-29",
                expiry: "2019-10-18",
                author: "Jerome Eteve",
                description: "This test will serve prebid ads via safeframe line items",
                audience: .01,
                audienceOffset: 0,
                successMeasure: "Measurement of prebid ads yield",
                audienceCriteria: "n/a",
                dataLinkNames: "n/a",
                idealOutcome: "No difference between safeframe and standard",
                canRun: function() {
                    return !0
                },
                variants: [{
                    id: "control",
                    test: function() {}
                }, {
                    id: "variant",
                    test: function() {}
                }]
            }
        },
        122: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            });
            var i = {
                id: "CommercialXaxisAdapter",
                start: "2019-09-24",
                expiry: "2020-07-30",
                author: "Ioanna Kyprianou",
                description: "Test new implementation of xaxis adapter with multiple placement ids",
                audience: 0,
                audienceOffset: 0,
                successMeasure: "Xaxis adapter works with multiple placement ids",
                audienceCriteria: "n/a",
                dataLinkNames: "n/a",
                idealOutcome: "No significant impact to performance as well as higher ad yield",
                showForSensitive: !0,
                canRun: function() {
                    return !0
                },
                variants: [{
                    id: "control",
                    test: function() {}
                }, {
                    id: "variant",
                    test: function() {}
                }]
            }
        },
        128: function(e, n, t) {
            "use strict";
            t.d(n, "d", function() {
                return c
            }), t.d(n, "b", function() {
                return s
            }), t.d(n, "c", function() {
                return u
            }), t.d(n, "a", function() {
                return o
            }), t.d(n, "e", function() {
                return r
            });
            var i = t(2),
                a = t(344),
                r = {
                    label: "Third party tracking",
                    cookie: "GU_TK"
                },
                o = [r],
                c = function(e, n) {
                    var t = [n ? "1" : "0", Date.now()].join(".");
                    Object(i.a)(e.cookie, t, 540, !0), Object(a.a)(e, n)
                },
                s = function(e) {
                    var n = Object(i.d)(e.cookie);
                    if (!n) return null;
                    var t = n.split(".")[0];
                    return "1" === t || "0" !== t && null
                },
                u = function() {
                    return o.map(function(e) {
                        return {
                            consent: e,
                            state: s(e)
                        }
                    })
                }
        },
        158: function(e, n, t) {
            "use strict";
            t.d(n, "c", function() {
                return r
            }), t.d(n, "e", function() {
                return o
            }), t.d(n, "d", function() {
                return c
            }), t.d(n, "a", function() {
                return s
            }), t.d(n, "b", function() {
                return u
            });
            var i = t(2),
                a = function(e) {
                    return Object(i.a)("GU_mvt_id", String(e), 365)
                },
                r = function() {
                    return Number(Object(i.d)("GU_mvt_id"))
                },
                o = function() {
                    Object(i.d)("GU_mvt_id") || Object(i.a)("GU_mvt_id", "1")
                },
                c = function() {
                    var e = parseInt(Object(i.d)("GU_mvt_id"), 10);
                    e && a(1e6 === e ? 1 : e + 1)
                },
                s = function() {
                    var e = parseInt(Object(i.d)("GU_mvt_id"), 10);
                    e && a(0 === e ? 1e6 : e - 1)
                },
                u = function() {
                    return Number(1e6)
                }
        },
        169: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return l
            });
            var i, a, r = t(5),
                o = t(15),
                c = {},
                s = function() {
                    return a >= i
                },
                u = function(e, n) {
                    var t = document.querySelector(e);
                    t && t instanceof HTMLElement && (s() && t.classList.add("epic-ticker__goal-reached"), function(e, n) {
                        var t = e.querySelector(".js-ticker-goal");
                        if (t) {
                            var o = t.querySelector(".js-ticker-count"),
                                c = t.querySelector(".js-ticker-label");
                            if (o && c) {
                                var u = s() && "unlimited" === n ? a : i;
                                o.innerHTML = "".concat(Object(r.f)()).concat(u.toLocaleString()), s() && (c.innerHTML = "contributed")
                            }
                        }
                    }(t, n), window.setTimeout(function() {
                        c[e] = 0, window.requestAnimationFrame(function() {
                                return function(e, n, t) {
                                    var i = n.querySelector(".js-ticker-amounts .js-ticker-count"),
                                        o = n.querySelector(".js-ticker-amounts .js-ticker-label");
                                    i && o && (s() ? (i.innerHTML = "We’ve met our goal — thank you", "unlimited" === t && (o.innerHTML = "Contributions are still being accepted", o.classList.remove("is-hidden"))) : (o.classList.remove("is-hidden"), function e(n, t) {
                                        var i = c[n] + Math.floor(a / 100);
                                        i <= c[n] || i >= a ? t.innerHTML = "".concat(Object(r.f)()).concat(a.toLocaleString()) : (c[n] = i, t.innerHTML = "".concat(Object(r.f)()).concat(c[n].toLocaleString()), window.requestAnimationFrame(function() {
                                            return e(n, t)
                                        }))
                                    }(e, i)))
                                }(e, t, n)
                            }),
                            function(e, n) {
                                var t = e.querySelector(".js-ticker-filled-progress");
                                if (t && t instanceof HTMLElement) {
                                    var r = "unlimited" === n && a > i ? a + .15 * a : i,
                                        o = function(e) {
                                            var n = a / r * 100 - 100;
                                            return n >= 0 ? 0 : n
                                        }();
                                    if (t.style.transform = "translate3d(".concat(o, "%, 0, 0)"), r > i) {
                                        var c = e.querySelector(".js-ticker-goal-marker");
                                        if (c) {
                                            c.classList.remove("is-hidden");
                                            var s = i / r * 100 - 100;
                                            c.style.transform = "translate3d(".concat(s, "%, 0, 0)")
                                        }
                                    }
                                }
                            }(t, n)
                    }, 500), t.classList.add("epic-ticker__".concat(n)), t.classList.remove("is-hidden"))
                },
                d = function() {
                    return !(Number.isNaN(Number(a)) || Number.isNaN(Number(i)))
                },
                l = function(e, n) {
                    ! function(e, n) {
                        d() ? u(e, n) : Object(o.a)("https://support.theguardian.com/ticker.json", {
                            mode: "cors"
                        }).then(function(t) {
                            a = parseInt(t.total, 10), i = parseInt(t.goal, 10), d() && u(e, n)
                        })
                    }(e, n || "unlimited")
                }
        },
        178: function(e, n) {
            e.exports = {
                markup: '<span class="inline-arrow-down inline-icon"><svg width="24" height="18" viewBox="-0.525 -4 24 18" overflow="visible" enable-background="new -0.525 -4 24 18"><path d="M23.2.7L12.7 9.1l-1.1.9-1.1-.898L0 .7.5 0l11.1 6.3L22.7 0l.5.7z"/></svg></span>'
            }
        },
        196: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            });
            var i = function(e, n, t) {
                var i = e;
                return n && (Array.isArray(n) ? i = i.replace(/class="/, 'class="'.concat(n.join(" "), " ")) : window.console && window.console.error && window.console.error("Classes for inlineSvg must be an array: ".concat(n))), t ? i.replace(/<span /, '<span title="'.concat(t, '" ')) : i
            }
        },
        209: function(e, n) {
            e.exports = {
                markup: '<span class="inline-cross inline-icon"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M7.5 9l-6.5-7 1-1 7 6.5 7-6.5 1 1-6.5 7 6.5 7-1 1-7-6.5-7 6.5-1-1 6.5-7z"/></svg></span>'
            }
        },
        210: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            }), t.d(n, "b", function() {
                return o
            });
            var i = t(4),
                a = t(26),
                r = function(e) {
                    if (i.a.isAvailable() && !1 !== e) {
                        var n = i.a.get("gu.ads.userSegmentsData");
                        if (n) {
                            var t = Object(a.i)();
                            if (t && n.userHash === t.id % 9999) return n.segments;
                            i.a.remove("gu.ads.userSegmentsData")
                        }
                    }
                    return []
                },
                o = function() {
                    i.a.isAvailable() && null === i.a.get("gu.ads.userSegmentsData") && Object(a.i)() && Object(a.g)(function(e) {
                        if (e && e.adData) {
                            var n = [];
                            Object.keys(e.adData).forEach(function(t) {
                                n.push(t + e.adData[t])
                            }), i.a.set("gu.ads.userSegmentsData", {
                                segments: n,
                                userHash: e.id % 9999
                            }, {
                                expires: (new Date).getTime() + 864e5
                            })
                        }
                    })
                }
        },
        240: function(e, n) {
            e.exports = {
                markup: '<span class="inline-arrow inline-icon"><svg width="24" height="10" viewBox="0 0 24 10"><path d="M0 .7l10.5 8.4 1.1.9 1.1-.9 10.5-8.4-.5-.7-11.1 6.3-11-6.3-.6.7z"/></svg></span>'
            }
        },
        241: function(e, n) {
            e.exports = {
                markup: '<span class="inline-external-link inline-icon"><svg width="14" height="10" viewBox="0 0 14 10"><path d="M12 1.1L8.27 4.83l.902.9L13 2.07 13.2 5h.8V.4l-.4-.4H9v.8zM11.7 6.625V8.7H1.2V2.2h5l.8-.6V1H.6l-.6.6v7.8l.6.6h11.8l.6-.6V6h-.7z"/></svg></span>'
            }
        },
        32: function(e, n, t) {
            "use strict";
            t.d(n, "d", function() {
                return u
            }), t.d(n, "e", function() {
                return d
            }), t.d(n, "f", function() {
                return l
            }), t.d(n, "c", function() {
                return p
            }), t.d(n, "a", function() {
                return h
            }), t.d(n, "b", function() {
                return m
            });
            var i = t(18),
                a = t.n(i),
                r = t(30),
                o = t.n(r),
                c = t(0),
                s = t(20),
                u = function(e) {
                    o.a.record({
                        componentEvent: e
                    })
                },
                d = function(e) {
                    return u(a()({}, e, {
                        action: "INSERT"
                    }))
                },
                l = function(e) {
                    return u(a()({}, e, {
                        action: "VIEW"
                    }))
                },
                p = function(e) {
                    return u(a()({}, e, {
                        action: "CLICK"
                    }))
                },
                h = function(e) {
                    return a()({}, e, {
                        referrerPageviewId: c.a.get("ophan.pageViewId"),
                        referrerUrl: window.location.href.split("?")[0]
                    })
                },
                m = function(e) {
                    var n = e.base,
                        t = e.componentType,
                        i = e.componentId,
                        a = e.campaignCode,
                        r = e.abTest,
                        o = h({
                            source: "GUARDIAN_WEB",
                            componentId: i,
                            componentType: t,
                            campaignCode: a,
                            abTest: r
                        }),
                        u = {
                            REFPVID: c.a.get("ophan.pageViewId") || "not_found",
                            INTCMP: a,
                            acquisitionData: JSON.stringify(o)
                        };
                    return "".concat(n).concat(n.includes("?") ? "&" : "?").concat(Object(s.b)(u))
                }
        },
        344: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return u
            }), t.d(n, "b", function() {
                return d
            }), t.d(n, "c", function() {
                return s
            });
            var i = t(30),
                a = t.n(i),
                r = t(80),
                o = "first-pv-consent.lifetime-views",
                c = function() {
                    return parseInt(r.a.get(o) || 0, 10)
                },
                s = function() {
                    r.a.set(o, c() + 1), a.a.record({
                        component: "privacy-prefs",
                        value: "lifetime-alert-views : ".concat(c())
                    })
                },
                u = function(e, n) {
                    a.a.record({
                        component: "privacy-prefs",
                        value: "set : ".concat(String(n), " : ").concat(e.cookie.toLowerCase())
                    }), r.a.set(o, 0)
                },
                d = function(e) {
                    e.forEach(function(e) {
                        a.a.record({
                            component: "privacy-prefs",
                            value: "pv : ".concat(String(e.state), " : ").concat(e.consent.cookie.toLowerCase())
                        })
                    })
                }
        },
        359: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return d
            });
            var i = t(16),
                a = t.n(i),
                r = t(21),
                o = t.n(r),
                c = t(1),
                s = t.n(c),
                u = t(6),
                d = function() {
                    function e() {
                        var n = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                        if (a()(this, e), s()(this, "component", void 0), s()(this, "controls", void 0), t) {
                            var i = Array.from(t.querySelectorAll("[data-toggle]"));
                            this.component = t, this.controls = i, u.a.on("module:clickstream:click", function(e) {
                                n.reset(e ? e.target : null)
                            })
                        }
                    }
                    return o()(e, [{
                        key: "init",
                        value: function() {
                            this.controls.forEach(this.prepareControl, this)
                        }
                    }, {
                        key: "toggle",
                        value: function(e) {
                            var n = this;
                            this.controls.forEach(function(t) {
                                t === e ? t.classList.contains("is-active") ? n.close(t) : n.open(t) : n.close(t)
                            })
                        }
                    }, {
                        key: "reset",
                        value: function(e) {
                            var n = ["js-search-old", "js-search-new"];
                            this.controls.filter(function(t) {
                                return !(e === t || n.includes(t.getAttribute("data-toggle")))
                            }).forEach(this.close, this)
                        }
                    }, {
                        key: "prepareControl",
                        value: function(e) {
                            var n = this,
                                t = document.querySelector(".js-profile-nav"),
                                i = t && t.classList.contains("is-signed-in");
                            e.classList.contains("js-toggle-ready") || this.getTarget(e) && (i || "true" !== e.getAttribute("data-toggle-signed-in")) && (e.classList.add("js-toggle-ready"), e.addEventListener("click", function(t) {
                                t.preventDefault(), n.toggle(e)
                            }))
                        }
                    }, {
                        key: "getTarget",
                        value: function(e) {
                            var n = e.getAttribute("data-toggle");
                            if (n && this.component) return this.component.querySelector(".".concat(n))
                        }
                    }, {
                        key: "open",
                        value: function(e) {
                            var n = this.getTarget(e);
                            e.classList.add("is-active"), n && n.classList.remove("is-off")
                        }
                    }, {
                        key: "close",
                        value: function(e) {
                            var n = this.getTarget(e);
                            e.classList.remove("is-active"), n && n.classList.add("is-off")
                        }
                    }]), e
                }()
        },
        40: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return u
            }), t.d(n, "g", function() {
                return T
            }), t.d(n, "h", function() {
                return v
            }), t.d(n, "l", function() {
                return k
            }), t.d(n, "k", function() {
                return g
            }), t.d(n, "b", function() {
                return h
            }), t.d(n, "e", function() {
                return b
            }), t.d(n, "f", function() {
                return y
            }), t.d(n, "i", function() {
                return _
            }), t.d(n, "j", function() {
                return j
            }), t.d(n, "d", function() {
                return O
            }), t.d(n, "c", function() {
                return C
            });
            var i = t(2),
                a = t(0),
                r = t(15),
                o = t(26),
                c = t(62),
                s = !!window.location.hash.match(/[#&]noadsaf(&.*)?$/),
                u = function() {
                    return Object(i.d)("gu_action_required_for")
                },
                d = function() {
                    var e = Object(i.d)("GU_AF1");
                    return !Number.isNaN(parseInt(e, 10))
                },
                l = function(e) {
                    var n = new Date;
                    return n.setDate(n.getDate() + e), n.getTime().toString()
                },
                p = function(e) {
                    Object(i.a)("gu_user_features_expiry", l(1)), Object(i.a)("gu_paying_member", e.contentAccess.paidMember), Object(i.a)("gu_recurring_contributor", e.contentAccess.recurringContributor), Object(i.a)("gu_digital_subscriber", e.contentAccess.digitalPack), Object(i.a)("gu_hide_support_messaging", !e.showSupportMessaging), e.oneOffContributionDate && Object(i.a)("gu_one_off_contribution_date", e.oneOffContributionDate), Object(i.e)("gu_action_required_for"), "alertAvailableFor" in e && Object(i.a)("gu_action_required_for", e.alertAvailableFor), !d() || s || e.contentAccess.digitalPack || Object(i.e)("GU_AF1"), e.contentAccess.digitalPack && Object(i.a)("GU_AF1", l(2))
                },
                h = function() {
                    Object(i.e)("gu_user_features_expiry"), Object(i.e)("gu_paying_member"), Object(i.e)("gu_recurring_contributor"), Object(i.e)("GU_AF1"), Object(i.e)("gu_action_required_for"), Object(i.e)("gu_digital_subscriber"), Object(i.e)("gu_hide_support_messaging"), Object(i.e)("gu_one_off_contribution_date")
                },
                m = function(e) {
                    var n = Object(i.d)(e),
                        t = parseInt(n, 10);
                    return (new Date).getTime() >= t
                },
                f = function() {
                    return a.a.get("switches").adFreeStrictExpiryEnforcement && m("GU_AF1")
                },
                g = function() {
                    return Object(o.l)() && (!Object(i.d)("gu_user_features_expiry") || m("gu_user_features_expiry") || d() && f()) ? Object(r.a)("".concat(a.a.get("page.userAttributesApiUrl"), "/me"), {
                        mode: "cors",
                        credentials: "include"
                    }).then(p).catch(function() {}) : (!Object(o.l)() && !!(Object(i.d)("gu_action_required_for") || Object(i.d)("gu_user_features_expiry") || Object(i.d)("gu_paying_member") || Object(i.d)("gu_recurring_contributor") || Object(i.d)("gu_one_off_contribution_date") || Object(i.d)("GU_AF1") || Object(i.d)("gu_digital_subscriber") || Object(i.d)("gu_hide_support_messaging")) && !s && h(), Promise.resolve())
                },
                v = function() {
                    return Object(o.l)() && "false" !== Object(i.d)("gu_paying_member")
                },
                b = function() {
                    return function() {
                        var e = Object(i.d)("gu.contributions.contrib-timestamp");
                        if (e) {
                            var n = parseInt(e, 10);
                            if (Number.isInteger(n)) return n
                        }
                        return null
                    }() || function() {
                        var e = Object(i.d)("gu_one_off_contribution_date");
                        if (e) {
                            var n = Date.parse(e);
                            if (Number.isInteger(n)) return n
                        }
                        return null
                    }()
                },
                y = function() {
                    var e = Object(i.d)("gu.contributions.recurring.contrib-timestamp.Monthly"),
                        n = Object(i.d)("gu.contributions.recurring.contrib-timestamp.Annual"),
                        t = e ? parseInt(e, 10) : null,
                        a = n ? parseInt(n, 10) : null,
                        r = t && Number.isInteger(t) ? t : null,
                        o = a && Number.isInteger(a) ? a : null;
                    return r || o ? r && o ? Math.max(r, o) : r || o || null : null
                },
                w = function() {
                    var e = b();
                    return null === e ? null : Object(c.a)(e, Date.now())
                },
                _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 90,
                        n = w();
                    return null !== n && n > e
                },
                k = function() {
                    return "true" === Object(i.d)("gu_hide_support_messaging") || function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 90,
                            n = w();
                        return null !== n && n <= e
                    }() || Object(o.l)() && "false" !== Object(i.d)("gu_recurring_contributor") || null != Object(i.d)("gu.contributions.recurring.contrib-timestamp.Monthly") || null != Object(i.d)("gu.contributions.recurring.contrib-timestamp.Annual")
                },
                j = ["gu_paying_member", "gu_digital_subscriber", "gu_recurring_contributor", "gu.contributions.recurring.contrib-timestamp.Monthly", "gu.contributions.recurring.contrib-timestamp.Annual", "gu.contributions.contrib-timestamp", "gu_hide_support_messaging"],
                O = function() {
                    Object(i.a)("gu.contributions.contrib-timestamp", Date.now().toString())
                },
                T = function() {
                    return "true" === Object(i.d)("gu_digital_subscriber") || d() && !f()
                },
                C = function() {
                    var e = Object(i.d)("gu.contributions.contrib-timestamp");
                    if (e) {
                        var n = parseInt(e, 10);
                        if (Number.isInteger(n)) {
                            var t = 365 - Object(c.a)(n, Date.now());
                            Object(i.a)("gu.contributions.contrib-timestamp", n.toString(), t)
                        }
                    }
                }
        },
        43: function(e, n, t) {
            "use strict";
            t.d(n, "d", function() {
                return r
            }), t.d(n, "b", function() {
                return o
            }), t.d(n, "c", function() {
                return c
            }), t.d(n, "a", function() {
                return a
            });
            var i = t(5),
                a = function(e) {
                    var n = Object(i.d)();
                    if (n) {
                        var t = Object(i.b)(n);
                        return e.replace(/(support.theguardian.com)\/(contribute|subscribe)/, function(e, n, i) {
                            return "".concat(n, "/").concat(t.toLowerCase(), "/").concat(i)
                        })
                    }
                    return e
                },
                r = "https://support.theguardian.com/subscribe",
                o = function() {
                    return a("https://support.theguardian.com/contribute")
                },
                c = function() {
                    return "".concat(a(r), "/digital")
                }
        },
        44: function(e, n, t) {
            "use strict";
            t.d(n, "b", function() {
                return o
            }), t.d(n, "c", function() {
                return c
            }), t.d(n, "a", function() {
                return s
            });
            var i = t(4),
                a = "gu.contributions.views",
                r = i.a.get(a) || [],
                o = function(e) {
                    r.push({
                        date: (new Date).getTime(),
                        testId: e
                    }), i.a.set(a, r.slice(-50))
                },
                c = function(e, n) {
                    var t = 1e3 * e * 60 * 60 * 24,
                        i = (new Date).getTime();
                    return r.filter(function(e) {
                        return (!n || e.testId === n) && e.date > i - t
                    }).length
                },
                s = function() {
                    i.a.remove(a)
                }
        },
        5: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return p
            }), t.d(n, "b", function() {
                return h
            }), t.d(n, "d", function() {
                return c
            }), t.d(n, "g", function() {
                return d
            }), t.d(n, "f", function() {
                return f
            }), t.d(n, "e", function() {
                return g
            }), t.d(n, "h", function() {
                return u
            }), t.d(n, "i", function() {
                return s
            }), t.d(n, "c", function() {
                return b
            });
            var i = t(15),
                a = t(0),
                r = t(4),
                o = {
                    UK: "GB",
                    US: "US",
                    AU: "AU"
                },
                c = function() {
                    return r.a.get("gu.geolocation")
                },
                s = function(e) {
                    var n = new Date;
                    r.a.set("gu.geolocation", e, {
                        expires: n.setDate(n.getDate() + 10)
                    })
                },
                u = function() {
                    new Promise(function(e, n) {
                        var t = c();
                        if (t) return e(t);
                        Object(i.a)("/geolocation", {
                            mode: "cors"
                        }).then(function(t) {
                            t.country ? e(t.country) : n(new Error("No country in geolocation response"))
                        }).catch(n)
                    }).then(s)
                },
                d = function() {
                    return c() || function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "UK";
                        return o[e]
                    }(a.a.get("page.edition"))
                },
                l = {
                    GBPCountries: {
                        name: "United Kingdom",
                        currency: "GBP",
                        countries: ["GB", "FK", "GI", "GG", "IM", "JE", "SH"],
                        supportInternationalisationId: "uk"
                    },
                    UnitedStates: {
                        name: "United States",
                        currency: "USD",
                        countries: ["US"],
                        supportInternationalisationId: "us"
                    },
                    AUDCountries: {
                        name: "Australia",
                        currency: "AUD",
                        countries: ["AU", "KI", "NR", "NF", "TV"],
                        supportInternationalisationId: "au"
                    },
                    EURCountries: {
                        name: "Europe",
                        currency: "EUR",
                        countries: ["AD", "AL", "AT", "BA", "BE", "BG", "BL", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FO", "FR", "GF", "GL", "GP", "GR", "HR", "HU", "IE", "IT", "LI", "LT", "LU", "LV", "MC", "ME", "MF", "IS", "MQ", "MT", "NL", "NO", "PF", "PL", "PM", "PT", "RE", "RO", "RS", "SE", "SI", "SJ", "SK", "SM", "TF", "TR", "WF", "YT", "VA", "AX"],
                        supportInternationalisationId: "eu"
                    },
                    International: {
                        name: "International",
                        currency: "USD",
                        countries: ["AE", "AF", "AG", "AI", "AM", "AO", "AQ", "AR", "AS", "AW", "AZ", "BB", "BD", "BF", "BH", "BI", "BJ", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CC", "CD", "CF", "CG", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "DJ", "DM", "DO", "DZ", "EC", "EG", "EH", "ER", "ET", "FJ", "FM", "GA", "GD", "GE", "GH", "GM", "GN", "GQ", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HT", "ID", "IL", "IN", "IO", "IQ", "IR", "JM", "JO", "JP", "KE", "KG", "KH", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LK", "LR", "LS", "LY", "MA", "MD", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MR", "MS", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NG", "NI", "NP", "NU", "OM", "PA", "PE", "PG", "PH", "PK", "PN", "PR", "PS", "PW", "PY", "QA", "RU", "RW", "SA", "SB", "SC", "SD", "SG", "SL", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TT", "TW", "TZ", "UA", "UG", "UM", "UY", "UZ", "VC", "VE", "VG", "VI", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"],
                        supportInternationalisationId: "int"
                    },
                    NZDCountries: {
                        name: "New Zealand",
                        currency: "NZD",
                        countries: ["NZ", "CK"],
                        supportInternationalisationId: "nz"
                    },
                    Canada: {
                        name: "Canada",
                        currency: "CAD",
                        countries: ["CA"],
                        supportInternationalisationId: "ca"
                    }
                },
                p = function(e) {
                    var n = null;
                    return Object.keys(l).forEach(function(t) {
                        l[t].countries.includes(e) && (n = t)
                    }), n || "International"
                },
                h = function(e) {
                    return l[p(e)].supportInternationalisationId
                },
                m = {
                    GBPCountries: "£",
                    UnitedStates: "$",
                    AUDCountries: "$",
                    Canada: "CA$",
                    EURCountries: "€",
                    NZDCountries: "NZ$",
                    International: "$"
                },
                f = function() {
                    return m[p(d())] || "£"
                },
                g = function(e) {
                    return e && m[p(e)] || "£"
                },
                v = {
                    GB: "the UK",
                    US: "the US",
                    AU: "Australia",
                    CA: "Canada",
                    DE: "Germany",
                    NZ: "New Zealand",
                    FR: "France",
                    NL: "the Netherlands",
                    IE: "Ireland",
                    SE: "Sweden",
                    CH: "Switzerland",
                    NO: "Norway",
                    BE: "Belgium",
                    IT: "Italy",
                    IN: "India",
                    ES: "Spain",
                    DK: "Denmark",
                    SG: "Singapore",
                    AT: "Austria",
                    FI: "Finland",
                    HK: "Hong Kong",
                    LU: "Luxembourg",
                    PT: "Portugal",
                    AE: "the UAE",
                    MX: "Mexico",
                    BR: "Brazil",
                    ZA: "South Africa",
                    TW: "Taiwan",
                    IL: "Israel",
                    JP: "Japan",
                    CZ: "the Czech Republic",
                    GR: "Greece",
                    IS: "Iceland",
                    TH: "Thailand",
                    MY: "Malaysia",
                    RO: "Romania",
                    PL: "Poland",
                    HU: "Hungary",
                    TR: "Turkey",
                    KR: "Korea",
                    SI: "Slovenia",
                    CL: "Chile",
                    CO: "Colombia",
                    QA: "Qatar",
                    HR: "Croatia",
                    SK: "Slovakia",
                    ID: "Indonesia",
                    VN: "Vietnam",
                    CN: "China",
                    MT: "Malta",
                    AR: "Argentina",
                    KE: "Kenya",
                    PR: "Puerto Rico",
                    RU: "Russia",
                    EE: "Estonia",
                    CR: "Costa Rica",
                    PA: "Panama"
                },
                b = function(e) {
                    return e ? v[e] : void 0
                }
        },
        51: function(e, n, t) {
            "use strict";
            t.d(n, "g", function() {
                return x
            }), t.d(n, "h", function() {
                return N
            }), t.d(n, "i", function() {
                return B
            }), t.d(n, "j", function() {
                return G
            }), t.d(n, "k", function() {
                return U
            }), t.d(n, "c", function() {
                return S
            }), t.d(n, "a", function() {
                return C
            }), t.d(n, "f", function() {
                return A
            }), t.d(n, "d", function() {
                return P
            }), t.d(n, "e", function() {
                return D
            }), t.d(n, "b", function() {
                return H
            });
            var i, a, r, o, c, s, u = t(12),
                d = t.n(u),
                l = t(8),
                p = t(4),
                h = t(20),
                m = t(25),
                f = t.n(m),
                g = ["uk", "us", "au"],
                v = ["business", "commentisfree", "culture", "environment", "media", "money", "sport", "technology"],
                b = [{
                    tid: "section",
                    tname: "sectionName"
                }, {
                    tid: "keywordIds",
                    tname: "keywords"
                }, {
                    tid: "seriesId",
                    tname: "series"
                }, {
                    tid: "authorIds",
                    tname: "author"
                }],
                y = [{
                    type: "content",
                    indexInRecord: 1
                }, {
                    type: "front",
                    indexInRecord: 2
                }],
                w = Math.floor(Date.now() / 864e5),
                _ = (1 !== (a = (i = new Date).getDay() || 7) && i.setHours(-24 * (a - 1)), Math.floor(i.getTime() / 864e5)),
                k = !1,
                j = function(e) {
                    o = e, p.a.set("gu.history.summary", e)
                },
                O = function() {
                    return r = r || p.a.get("gu.history") || []
                },
                T = function() {
                    return o || (o = p.a.get("gu.history.summary"), f()(o) && f()(o.tags) && "number" == typeof o.periodEnd || (o = {
                        periodEnd: w,
                        tags: {},
                        showInMegaNav: !0
                    })), o
                },
                C = function(e) {
                    var n = T();
                    delete n.tags[e], j(n)
                },
                A = function(e) {
                    var n = O().find(function(n) {
                        return n[0] === e
                    });
                    return !!(n && n[1] > 1)
                },
                I = function(e) {
                    var n = new RegExp("^(".concat(g.join("|"), ")/(").concat(v.join("|"), ")$")),
                        t = new RegExp("^(".concat(g.join("|"), ")/"));
                    if (e) {
                        var i = e.replace(/^\/|\/$/g, "");
                        i.match(n) && (i = i.replace(t, ""));
                        var a = i.split("/");
                        return 2 === a.length && a[0] === a[1] && (i = [a[0]].join("/")), i
                    }
                    return ""
                },
                S = function(e) {
                    var n = e && e.flush;
                    return c = !n && c || function(e) {
                        var n = T().tags,
                            t = Object.keys(n),
                            i = Object.assign({}, {
                                number: 100,
                                weights: {},
                                thresholds: {}
                            }, e);
                        return i.whitelist && (t = t.filter(function(e) {
                            return i.whitelist.includes(e)
                        })), i.blacklist && (t = t.filter(function(e) {
                            return !i.blacklist.includes(e)
                        })), t.map(function(e) {
                            var t = n[e],
                                a = y.reduce(function(e, n) {
                                    return e + function(e) {
                                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                            i = 0,
                                            a = e.reduce(function(e, t) {
                                                var a = t[0],
                                                    r = t[1];
                                                return i += r, e + n * (9 + r) * (90 - a)
                                            }, 0);
                                        return i < t ? 0 : a
                                    }(t[n.indexInRecord], i.weights[n.type], i.thresholds[n.type])
                                }, 0);
                            return {
                                idAndName: [e, t[0]],
                                rank: a
                            }
                        }).filter(Boolean).sort(function(e, n) {
                            return e.rank - n.rank
                        }).slice(-i.number).map(function(e) {
                            return e.idAndName
                        }).reverse()
                    }({
                        blacklist: s = s || Object(l.a)(".js-navigation-header .js-top-navigation a").map(function(e) {
                            return I(Object(h.c)(Object(l.a)(e).attr("href")))
                        }),
                        number: 10,
                        weights: {
                            content: 1,
                            front: 5
                        },
                        thresholds: {
                            content: 5,
                            front: 1
                        }
                    })
                },
                E = function(e) {
                    return (e || "").split(",")[0]
                },
                x = function(e) {
                    var n, t = e.pageId,
                        i = 0;
                    e.isFront || ((n = O().filter(function(e) {
                        var n = Array.isArray(e),
                            a = n && e[0] === t;
                        return i = a ? e[1] : i, n && !a
                    })).unshift([t, i + 1]), function(e) {
                        r = e, p.a.set("gu.history", e)
                    }(n.slice(0, 50)))
                },
                N = function(e, n) {
                    var t = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w,
                                t = n - e.periodEnd;
                            return 0 !== t && (e.periodEnd = n, Object.keys(e.tags).forEach(function(n) {
                                var i = e.tags[n],
                                    a = y.map(function(e) {
                                        if (i[e.indexInRecord]) {
                                            var n = i[e.indexInRecord].map(function(e) {
                                                var n = e[0] + t;
                                                return n < 90 && n >= 0 && [n, e[1]]
                                            }).filter(Boolean);
                                            return n.length > 1 || 1 === n.length && n[0][0] < 10 ? n : []
                                        }
                                        return []
                                    });
                                a.some(function(e) {
                                    return e.length
                                }) ? e.tags[n] = [i[0]].concat(a) : delete e.tags[n]
                            })), e
                        }(T(), n),
                        i = I(e.pageId),
                        a = !1,
                        r = b.reduceRight(function(n, t) {
                            var r = I(E(e[t.tid])),
                                o = r && E(e[t.tname]);
                            return r && o && (n[r] = o), a = a || r === i, n
                        }, {});
                    Object.keys(r).forEach(function(e) {
                        var n = r[e],
                            i = t.tags[e] || [];
                        y.forEach(function(e) {
                            i[e.indexInRecord] = i[e.indexInRecord] || []
                        }), i[0] = n;
                        var o = i[a ? 2 : 1],
                            c = o.find(function(e) {
                                return 0 === e[0]
                            });
                        c ? c[1] += 1 : o.unshift([0, 1]), t.tags[e] = i
                    }), j(t)
                },
                M = function() {
                    return Object(l.a)(".js-global-navigation")
                },
                R = function() {
                    M().each(function(e) {
                        d.a.write(function() {
                            Object(l.a)(".js-global-navigation__section--history", e).remove()
                        })
                    }), k = !1
                },
                L = function(e, n) {
                    return '<li class="inline-list__item">\n        <a href="/'.concat(e[0], '" class="button button--small button--tag button--secondary" data-link-name="').concat(n + 1, " | ").concat(e[1], '">').concat(e[1], "</a>\n    </li>")
                },
                B = function() {
                    var e;
                    if (!1 !== T().showInMegaNav) {
                        k && R();
                        var n = S();
                        n.length && (e = '<li class="global-navigation__section js-global-navigation__section--history" data-link-name="shortcuts">\n                        <span class="global-navigation__title global-navigation__title--history">recently visited</span>\n                        <ul class="global-navigation__children global-navigation__children--history">\n                            '.concat(n.map(L).join(""), '\n                            <a class="button button--small button--tag button--tertiary" href="/preferences" data-link-name="edit">edit these</a>\n                        </ul>\n                    </li>'), d.a.write(function() {
                            M().prepend(e)
                        }), k = !0)
                    }
                },
                U = function() {
                    return !1 !== T().showInMegaNav
                },
                G = function(e) {
                    var n = T();
                    n.showInMegaNav = e, n.showInMegaNav ? B() : R(), j(n)
                },
                P = function(e) {
                    if (!e.isFront) {
                        var n = p.a.get("gu.history.dailyArticleCount") || [];
                        if (n[0] && n[0].day && n[0].day === w) n[0].count += 1;
                        else {
                            n.unshift({
                                day: w,
                                count: 1
                            });
                            var t = w - 60,
                                i = n.findIndex(function(e) {
                                    return e.day && e.day < t
                                });
                            i > 0 && n.splice(i)
                        }
                        p.a.set("gu.history.dailyArticleCount", n)
                    }
                },
                D = function(e) {
                    if (!e.isFront) {
                        var n = p.a.get("gu.history.weeklyArticleCount") || [];
                        if (n[0] && n[0].week && n[0].week === _) n[0].count += 1;
                        else {
                            n.unshift({
                                week: _,
                                count: 1
                            });
                            var t = _ - 365,
                                i = n.findIndex(function(e) {
                                    return e.week && e.week < t
                                });
                            i > 0 && n.splice(i)
                        }
                        p.a.set("gu.history.weeklyArticleCount", n)
                    }
                },
                H = function(e) {
                    var n = p.a.get("gu.history.dailyArticleCount") || [],
                        t = w - e,
                        i = n.findIndex(function(e) {
                            return e.day && e.day <= t
                        });
                    return (i >= 0 ? n.slice(0, i) : n).reduce(function(e, n) {
                        return n.count + e
                    }, 0)
                }
        },
        52: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return f
            }), t.d(n, "b", function() {
                return g
            }), t.d(n, "d", function() {
                return v
            }), t.d(n, "c", function() {
                return b
            });
            var i = t(28),
                a = t.n(i),
                r = t(1),
                o = t.n(r),
                c = t(18),
                s = t.n(c),
                u = t(0),
                d = t(243),
                l = t.n(d),
                p = t(244),
                h = t.n(p),
                m = t(58),
                f = function(e) {
                    return u.a.get("switches.ab".concat(e), !1)
                },
                g = function(e) {
                    return e.reduce(function(e, n) {
                        var t = n.id,
                            i = n.variantToRun;
                        return s()({}, e, o()({}, t, {
                            variant: i.id
                        }))
                    }, {})
                },
                v = function(e) {
                    var n = l()(e).filter(function(e) {
                        var n = a()(e, 2),
                            t = n[0];
                        return n[1].variant === m.a && function(e) {
                            return "NOT_FOUND" !== u.a.get("switches.ab".concat(e), "NOT_FOUND")
                        }(t)
                    });
                    return h()(n)
                },
                b = function(e, n) {
                    var t = n[e.id];
                    return t ? t.variant === m.a ? m.b : e.variants.find(function(e) {
                        return e.id === t.variant
                    }) : null
                }
        },
        57: function(e, n) {
            e.exports = {
                markup: '<span class="inline-close-central inline-icon"><svg width="30" height="30"><path d="M21 9.8l-.8-.8-5.2 4.8-5.2-4.8-.8.8 4.8 5.2-4.8 5.2.8.8 5.2-4.8 5.2 4.8.8-.8-4.8-5.2 4.8-5.2"/></svg></span>'
            }
        },
        58: function(e, n, t) {
            "use strict";
            t.d(n, "c", function() {
                return i
            }), t.d(n, "a", function() {
                return a
            }), t.d(n, "b", function() {
                return r
            });
            var i = "gu.ab.participations",
                a = "notintest",
                r = {
                    id: a,
                    test: function() {}
                }
        },
        60: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return s
            });
            var i = t(23),
                a = t.n(i),
                r = t(55),
                o = t.n(r),
                c = t(95),
                s = function(e, n, t) {
                    var i = !1,
                        r = {
                            firstview: c.a
                        };
                    return a.a.on(n, "scroll", o()(function() {
                        var n = function(e, n) {
                            var t = Object.assign({}, {
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0
                                }, n),
                                i = e.getBoundingClientRect(),
                                a = window.innerHeight,
                                r = window.innerWidth,
                                o = i.top + t.top,
                                c = i.bottom - t.bottom,
                                s = i.left - t.left,
                                u = i.right + t.right;
                            return o < a && c > 0 && s < r && u > 0
                        }(e, t);
                        r.firstview && n && !i && (i = !0, r.firstview(e))
                    }, 200)), {
                        on: function(e, n) {
                            r[e] = n
                        }
                    }
                }
        },
        61: function(e, n) {
            e.exports = {
                markup: '<span class="inline-apple-pay-mark inline-acquisitions"><svg xmlns="http://www.w3.org/2000/svg" width="165.5" height="106" viewBox="0 0 165.5 106"><path d="M150.7 0H13.1a75.8 75.8 0 0 0-4.5.3 10.5 10.5 0 0 0-3 1 10 10 0 0 0-4.3 4.3 10.5 10.5 0 0 0-1 3c-.2 1-.2 2-.3 3.1a70.2 70.2 0 0 0 0 1.4v78a481.1 481.1 0 0 0 0 3.2l.3 3a10.5 10.5 0 0 0 1 3A9.9 9.9 0 0 0 3 103a9.9 9.9 0 0 0 2.5 1.8c1 .5 2 .8 3 1a21 21 0 0 0 4.5.3H152.4a76.2 76.2 0 0 0 4.5-.3 10.5 10.5 0 0 0 3-1 10 10 0 0 0 4.3-4.4c.5-1 .8-1.9 1-3a20.6 20.6 0 0 0 .3-4.5v-78-1.7a63 63 0 0 0 0-1.4c0-1 0-2-.3-3.1a10.4 10.4 0 0 0-1-3 10 10 0 0 0-4.3-4.3 10.5 10.5 0 0 0-3-1l-3-.3a71.4 71.4 0 0 0-1.5 0h-1.7z"/><path fill="#FFF" d="M150.7 3.5h1.7a68.9 68.9 0 0 1 4 .3 7 7 0 0 1 1.9.6 6.4 6.4 0 0 1 2.8 2.8c.3.6.5 1.3.6 2a17.5 17.5 0 0 1 .3 4v79.6a60.8 60.8 0 0 1-.3 4 6.9 6.9 0 0 1-.6 2 6.4 6.4 0 0 1-2.8 2.7 7 7 0 0 1-2 .7 18 18 0 0 1-4 .2H13.2a75 75 0 0 1-1.3 0c-.8 0-1.7 0-2.6-.2a7 7 0 0 1-2-.7 6.3 6.3 0 0 1-1.6-1.1 6.4 6.4 0 0 1-1.2-1.7 7 7 0 0 1-.6-2c-.2-.8-.2-1.7-.2-2.5a66 66 0 0 1 0-1.4V13.1a66.7 66.7 0 0 1 0-1.3c0-.8 0-1.7.2-2.6a7 7 0 0 1 .6-2c.3-.6.7-1.1 1.2-1.6a6.4 6.4 0 0 1 1.6-1.2 7 7 0 0 1 2-.6 17.8 17.8 0 0 1 4-.3h137.5"/><path d="M43.5 35.8a9.1 9.1 0 0 0 2.1-6.5 9 9 0 0 0-8.2 9.3c2.4.2 4.7-1.1 6.1-2.8m2 3.3c-3.3-.2-6.1 1.9-7.7 1.9-1.6 0-4-1.8-6.7-1.8-3.5 0-6.7 2-8.4 5.1-3.6 6.2-1 15.4 2.5 20.5 1.7 2.5 3.8 5.2 6.5 5.1 2.5 0 3.5-1.6 6.6-1.6 3.1 0 4 1.6 6.7 1.6 2.8 0 4.6-2.5 6.3-5 2-2.9 2.7-5.6 2.8-5.8 0 0-5.4-2-5.5-8.2 0-5.2 4.2-7.6 4.4-7.8a9.6 9.6 0 0 0-7.4-4M79 32c7.3 0 12.3 5 12.3 12.3 0 7.4-5.2 12.4-12.5 12.4h-8v12.8h-5.9V32.1h14zM70.7 52h6.7c5 0 8-2.7 8-7.4 0-4.8-3-7.5-8-7.5h-6.7v15zm22 10c0-4.9 3.7-7.6 10.5-8l7.2-.5v-2c0-3-2-4.8-5.5-4.8-3 0-5 1.5-5.5 3.9H94c.2-4.9 4.7-8.4 11-8.4 6.6 0 11 3.4 11 8.9v18.6h-5.5v-4.5c-1.6 3-5 4.8-8.7 4.8-5.4 0-9.1-3.2-9.1-8zm17.7-2.5v-2l-6.4.3c-3.7.3-5.6 1.6-5.6 4 0 2.3 2 3.8 5.1 3.8 4 0 7-2.6 7-6zM121 79.7v-4.5h1.7c2.6 0 4-1 4.9-3.8l.5-1.7-9.8-27.3h6l7 22.2 7-22.2h5.8L134 71.1c-2.3 6.6-5 8.7-10.7 8.7l-2.2-.1z"/></svg></span>'
            }
        },
        62: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            }), t.d(n, "b", function() {
                return a
            });
            var i = function(e, n) {
                    var t = n - e;
                    return Math.floor(t / 864e5)
                },
                a = function(e) {
                    return (new Date).setHours(0, 0, 0, 0) > new Date(e)
                }
        },
        63: function(e, n, t) {
            "use strict";
            t.d(n, "g", function() {
                return i
            }), t.d(n, "f", function() {
                return a
            }), t.d(n, "a", function() {
                return r
            }), t.d(n, "b", function() {
                return o
            }), t.d(n, "c", function() {
                return c
            }), t.d(n, "e", function() {
                return s
            }), t.d(n, "d", function() {
                return u
            }), t.d(n, "h", function() {
                return d
            }), t.d(n, "i", function() {
                return l
            });
            var i = "euconsent",
                a = 33696e3,
                r = "__cmp",
                o = 112,
                c = 1,
                s = 1,
                u = "GU_TK",
                d = {
                    storeConsentGlobally: !1,
                    storePublisherData: !1,
                    logging: !1,
                    gdprApplies: !0
                },
                l = [{
                    version: 1,
                    fields: [{
                        name: "cookieVersion",
                        type: "int",
                        numBits: 6
                    }, {
                        name: "created",
                        type: "date",
                        numBits: 36
                    }, {
                        name: "lastUpdated",
                        type: "date",
                        numBits: 36
                    }, {
                        name: "cmpId",
                        type: "int",
                        numBits: 12
                    }, {
                        name: "cmpVersion",
                        type: "int",
                        numBits: 12
                    }, {
                        name: "consentScreen",
                        type: "int",
                        numBits: 6
                    }, {
                        name: "consentLanguage",
                        type: "6bitchar",
                        numBits: 12
                    }, {
                        name: "vendorListVersion",
                        type: "int",
                        numBits: 12
                    }, {
                        name: "purposeIdBitString",
                        type: "bits",
                        numBits: 24
                    }, {
                        name: "maxVendorId",
                        type: "int",
                        numBits: 16
                    }, {
                        name: "isRange",
                        type: "bool",
                        numBits: 1
                    }, {
                        name: "vendorIdBitString",
                        type: "bits",
                        numBits: function(e) {
                            return e.maxVendorId
                        },
                        validator: function(e) {
                            return !e.isRange
                        }
                    }, {
                        name: "defaultConsent",
                        type: "bool",
                        numBits: 1,
                        validator: function(e) {
                            return e.isRange
                        }
                    }, {
                        name: "numEntries",
                        numBits: 12,
                        type: "int",
                        validator: function(e) {
                            return e.isRange
                        }
                    }, {
                        name: "vendorRangeList",
                        type: "list",
                        listCount: function(e) {
                            return e.numEntries
                        },
                        validator: function(e) {
                            return e.isRange
                        },
                        fields: [{
                            name: "isRange",
                            type: "bool",
                            numBits: 1
                        }, {
                            name: "startVendorId",
                            type: "int",
                            numBits: 16
                        }, {
                            name: "endVendorId",
                            type: "int",
                            numBits: 16,
                            validator: function(e) {
                                return e.isRange
                            }
                        }]
                    }]
                }].reduce(function(e, n) {
                    return e[n.version] = n, e
                }, {})
        },
        64: function(e, n, t) {
            "use strict";
            var i = t(18),
                a = t.n(i),
                r = t(13),
                o = t.n(r),
                c = t(0),
                s = t(31),
                u = t.n(s),
                d = t(158),
                l = t(62),
                p = t(84),
                h = t(1),
                m = t.n(h),
                f = t(28),
                g = t.n(f),
                v = t(52),
                b = function() {
                    return window.location.hash.startsWith("#ab") ? window.location.hash.replace("#ab-", "").split(",").reduce(function(e, n) {
                        var t = n.split("="),
                            i = g()(t, 2),
                            r = i[0],
                            o = i[1];
                        return a()({}, e, m()({}, r, {
                            variant: o
                        }))
                    }, {}) : {}
                },
                y = t(58),
                w = function(e) {
                    var n, t = function(e) {
                            return Object(v.c)(e, b())
                        }(e),
                        i = Object(p.c)(e),
                        r = function(e) {
                            var n = Object(d.b)() * e.audienceOffset,
                                t = n + Object(d.b)() * e.audience,
                                i = Number(Object(d.c)());
                            return i && i > n && i <= t ? e.variants[i % e.variants.length] : null
                        }(e),
                        o = t || i || r;
                    return function(e) {
                        var n = Object(l.b)(e.expiry),
                            t = c.a.get("page.isSensitive"),
                            i = !!e.showForSensitive,
                            a = Object(v.a)(e.id),
                            r = !e.canRun || e.canRun();
                        return (!t || i) && a && !n && r
                    }(e) && o && (!(n = o).canRun || n.canRun()) && n.id !== y.a ? a()({}, e, {
                        variantToRun: o
                    }) : null
                },
                _ = function(e) {
                    return e.map(function(e) {
                        return w(e)
                    }).find(function(e) {
                        return null !== e
                    })
                },
                k = t(95),
                j = t(14),
                O = t(30),
                T = t.n(O),
                C = function(e) {
                    return T.a.record({
                        abTestRegister: e
                    })
                },
                A = function(e, n) {
                    var t = {
                        variantName: e.id,
                        complete: n
                    };
                    return e.campaignCode && (t.campaignCodes = [e.campaignCode]), t
                },
                I = function(e) {
                    return e.variants.every(function(e) {
                        return "function" == typeof e.impression
                    })
                },
                S = function(e) {
                    return function(n) {
                        var t = n.variantToRun,
                            i = (e ? t.success : t.impression) || k.a;
                        try {
                            i(function(e, n, t) {
                                var i = m()({}, e.id, A(n, String(t)));
                                return function() {
                                    return C(i)
                                }
                            }(n, t, e))
                        } catch (e) {
                            Object(j.a)(e, {}, !1)
                        }
                    }
                },
                E = function(e) {
                    return e.forEach(S(!0))
                },
                x = function(e) {
                    return e.filter(I).forEach(S(!1))
                },
                N = function(e) {
                    return C(function(e) {
                        try {
                            var n = {},
                                t = Object.keys(c.a.get("tests")).filter(function(e) {
                                    return !!c.a.get("tests.".concat(e))
                                });
                            return e.filter((i = I, function() {
                                return !i.apply(void 0, arguments)
                            })).forEach(function(e) {
                                n[e.id] = A(e.variantToRun, "false")
                            }), t.forEach(function(e) {
                                n["ab".concat(e)] = A({
                                    id: "inTest",
                                    test: function() {}
                                }, "false")
                            }), n
                        } catch (e) {
                            return Object(j.a)(e, {}, !1), {}
                        }
                        var i
                    }(e))
                },
                M = t(67),
                R = t(10);
            t.d(n, "b", function() {
                return L
            }), t.d(n, "a", function() {
                return B
            }), t.d(n, "c", function() {
                return G
            }), t.d(n, "d", function() {
                return P
            }), t.d(n, "e", function() {
                return D
            });
            var L = u()(function() {
                    var e = M.c.filter(function(e) {
                            return e.highPriority
                        }),
                        n = M.c.filter(function(e) {
                            return !e.highPriority
                        });
                    return c.a.get("switches.useConfiguredEpicTests") ? Object(R.e)().then(function(t) {
                        t.forEach(function(e) {
                            return c.a.set("switches.ab".concat(e.id), !0)
                        });
                        var i = t.filter(function(e) {
                                return e.highPriority
                            }),
                            a = t.filter(function(e) {
                                return !e.highPriority
                            });
                        return _(o()(i).concat(o()(e), o()(a), o()(n)))
                    }) : Promise.resolve(_(o()(e).concat(o()(n))))
                }),
                B = u()(function() {
                    return c.a.get("switches.engagementBannerTestsFromGoogleDocs") ? Object(R.f)().then(function(e) {
                        return e.forEach(function(e) {
                            return c.a.set("switches.ab".concat(e.id), !0)
                        }), _(o()(M.b).concat(o()(e)))
                    }) : Promise.resolve(_(M.b))
                }),
                U = u()(function() {
                    return M.a.reduce(function(e, n) {
                        var t = w(n);
                        return t ? o()(e).concat([t]) : e
                    }, [])
                }),
                G = function() {
                    return Object(v.b)(U())
                },
                P = function(e, n) {
                    return U().some(function(t) {
                        return t.id === e.id && t.variantToRun.id === n
                    })
                },
                D = function() {
                    var e = U();
                    e.forEach(function(e) {
                        return e.variantToRun.test(e)
                    }), x(e), E(e), N(e);
                    var n = Object(v.d)(a()({}, Object(p.b)(), b()));
                    return Object(p.d)(a()({}, Object(v.b)(e), n)), Promise.all([L(), B()]).then(function(e) {
                        return e.filter(Boolean)
                    }).then(function(e) {
                        e.forEach(function(e) {
                            return e.variantToRun.test(e)
                        }), x(e), E(e), N(e), Object(p.d)(a()({}, Object(p.b)(), Object(v.b)(e)))
                    })
                }
        },
        67: function(e, n, t) {
            "use strict";
            var i = t(121),
                a = t(119),
                r = t(10),
                o = t(5),
                c = Object(r.i)({
                    id: "ContributionsEpicAskFourEarning",
                    campaignId: "kr1_epic_ask_four_earning",
                    geolocation: Object(o.g)(),
                    highPriority: !1,
                    start: "2017-01-24",
                    expiry: "2020-01-27",
                    author: "Jonathan Rankin",
                    description: "This places the epic on all articles for all users, with a limit of 4 impressions in any given 30 days",
                    successMeasure: "Conversion rate",
                    idealOutcome: "Acquires many Supporters",
                    audienceCriteria: "All",
                    audience: 1,
                    audienceOffset: 0,
                    variants: [{
                        id: "control",
                        products: ["CONTRIBUTION", "MEMBERSHIP_SUPPORTER"],
                        buttonTemplate: r.d
                    }]
                }),
                s = t(51),
                u = Object(s.b)(30),
                d = "Support The Guardian from as little as %%CURRENCY_SYMBOL%%1 – and it only takes a minute. Thank you.",
                l = {
                    heading: "Since you’re here...",
                    paragraphs: ["... we have a small favour to ask. More people are reading and supporting The Guardian’s independent, investigative journalism than ever before. And unlike many new organisations, we have chosen an approach that allows us to keep our journalism accessible to all, regardless of where they live or what they can afford. But we need your ongoing support to keep working as we do.", "The Guardian will engage with the most critical issues of our time – from the escalating climate catastrophe to widespread inequality to the influence of big tech on our lives. At a time when factual information is a necessity, we believe that each of us, around the world, deserves access to accurate reporting with integrity at its heart.", "Our editorial independence means we set our own agenda and voice our own opinions. Guardian journalism is free from commercial and political bias and not influenced by billionaire owners or shareholders. This means we can give a voice to those less heard, explore where others turn away, and rigorously challenge those in power.", "We need your support to keep delivering quality journalism, to maintain our openness and to protect our precious independence. Every reader contribution, big or small, is so valuable."],
                    highlightedText: d
                },
                p = {
                    heading: "More people in %%COUNTRY_NAME%%...",
                    paragraphs: ["... like you, are reading and supporting The Guardian’s independent, investigative journalism than ever before. And unlike many new organisations, we have chosen an approach that allows us to keep our journalism accessible to all, regardless of where they live or what they can afford. But we need your ongoing support to keep working as we do.", "The Guardian will engage with the most critical issues of our time – from the escalating climate catastrophe to widespread inequality to the influence of big tech on our lives. At a time when factual information is a necessity, we believe that each of us, around the world, deserves access to accurate reporting with integrity at its heart.", "Our editorial independence means we set our own agenda and voice our own opinions. Guardian journalism is free from commercial and political bias and not influenced by billionaire owners or shareholders. This means we can give a voice to those less heard, explore where others turn away, and rigorously challenge those in power.", "We need your support to keep delivering quality journalism, to maintain our openness and to protect our precious independence. Every reader contribution, big or small, is so valuable."],
                    highlightedText: d
                },
                h = Object(o.g)(),
                m = ["GB", "US"].includes(h),
                f = Object(r.i)({
                    id: "ContributionsEpicArticlesViewedMonth",
                    campaignId: "epic_articles_viewed_month",
                    start: "2019-06-24",
                    expiry: "2020-01-27",
                    author: "Tom Forbes",
                    description: "States how many articles a user has viewed in the epic",
                    successMeasure: "Conversion rate",
                    idealOutcome: "Acquires many Supporters",
                    audienceCriteria: "All",
                    audience: 1,
                    audienceOffset: 0,
                    geolocation: h,
                    highPriority: !0,
                    canRun: function() {
                        return u >= 5 && !!Object(o.c)(h)
                    },
                    variants: [{
                        id: "control",
                        buttonTemplate: r.d,
                        products: [],
                        copy: Object(r.b)(m ? l : p, !m, h)
                    }, {
                        id: "variant",
                        buttonTemplate: r.d,
                        products: [],
                        copy: Object(r.b)({
                            heading: "You’ve read ".concat(u, " articles..."),
                            paragraphs: ["... in the last month. If you’ve enjoyed reading, we hope you will consider supporting our independent, investigative journalism today. More people around the world are reading and supporting The Guardian than ever before. And unlike many new organisations, we have chosen an approach that allows us to keep our journalism accessible to all, regardless of where they live or what they can afford. But we need your ongoing support to keep working as we do.", "The Guardian will engage with the most critical issues of our time – from the escalating climate catastrophe to widespread inequality to the influence of big tech on our lives. At a time when factual information is a necessity, we believe that each of us, around the world, deserves access to accurate reporting with integrity at its heart.", "Our editorial independence means we set our own agenda and voice our own opinions. Guardian journalism is free from commercial and political bias and not influenced by billionaire owners or shareholders. This means we can give a voice to those less heard, explore where others turn away, and rigorously challenge those in power.", "We need your support to keep delivering quality journalism, to maintain our openness and to protect our precious independence. Every reader contribution, big or small, is so valuable."],
                            highlightedText: d
                        }, !1, h)
                    }]
                }),
                g = Object(o.g)(),
                v = Object(r.i)({
                    id: "ContributionsEpicCountryName",
                    campaignId: "epic_country_name",
                    start: "2019-06-24",
                    expiry: "2020-01-27",
                    author: "Tom Forbes",
                    description: "Displays country name in the epic",
                    successMeasure: "Conversion rate",
                    idealOutcome: "Acquires many Supporters",
                    audienceCriteria: "All",
                    audience: 1,
                    audienceOffset: 0,
                    geolocation: g,
                    highPriority: !0,
                    canRun: function() {
                        return "US" !== g && "GB" !== g && !!Object(o.c)(g)
                    },
                    variants: [{
                        id: "control",
                        buttonTemplate: r.d,
                        products: [],
                        copy: Object(r.b)({
                            heading: "More people in %%COUNTRY_NAME%%…",
                            paragraphs: ["... like you, are reading and supporting The Guardian’s independent, investigative journalism than ever before. And unlike many new organisations, we have chosen an approach that allows us to keep our journalism accessible to all, regardless of where they live or what they can afford. But we need your ongoing support to keep working as we do.", "The Guardian will engage with the most critical issues of our time – from the escalating climate catastrophe to widespread inequality to the influence of big tech on our lives. At a time when factual information is a necessity, we believe that each of us, around the world, deserves access to accurate reporting with integrity at its heart.", "Our editorial independence means we set our own agenda and voice our own opinions. Guardian journalism is free from commercial and political bias and not influenced by billionaire owners or shareholders. This means we can give a voice to those less heard, explore where others turn away, and rigorously challenge those in power.", "We need your support to keep delivering quality journalism, to maintain our openness and to protect our precious independence. Every reader contribution, big or small, is so valuable."],
                            highlightedText: "Support The Guardian from as little as %%CURRENCY_SYMBOL%%1 – and it only takes a minute. Thank you."
                        }, !0, g)
                    }]
                }),
                b = Object(r.i)({
                    id: "AcquisitionsEpicAlwaysAskIfTagged",
                    campaignId: "epic_always_ask_if_tagged",
                    geolocation: Object(o.g)(),
                    highPriority: !1,
                    start: "2017-05-23",
                    expiry: "2020-01-27",
                    author: "Jonathan Rankin",
                    description: "This guarantees that any on any article that is tagged with a tag that is on the allowed list of tags as set by the tagging tool, the epic will be displayed",
                    successMeasure: "Conversion rate",
                    idealOutcome: "We can always show the epic on articles with a pre selected tag",
                    audienceCriteria: "All",
                    audience: 1,
                    audienceOffset: 0,
                    useTargetingTool: !0,
                    pageCheck: function(e) {
                        return "Article" === e.contentType || "Interactive" === e.contentType
                    },
                    variants: [{
                        id: "control",
                        products: ["CONTRIBUTION", "MEMBERSHIP_SUPPORTER"],
                        deploymentRules: "AlwaysAsk",
                        buttonTemplate: r.d
                    }]
                }),
                y = t(40),
                w = t(43),
                _ = t(0),
                k = "".concat(Object(w.c)(), "?acquisitionData=%7B%22componentType%22%3A%22ACQUISITIONS_OTHER%22%2C%22source%22%3A%22GUARDIAN_WEB%22%2C%22campaignCode%22%3A%22shady_pie_open_2019%22%2C%22componentId%22%3A%22shady_pie_open_2019%22%7D&INTCMP=shady_pie_open_2019"),
                j = '\n<div class="contributions__adblock">\n    <div class="contributions__adblock-content">\n        <div class="contributions__adblock-header">\n            <h2>\n                Editorially<br>\n                independent,<br>\n                open to everyone\n            </h2>\n        </div>\n        <div class="contributions__adblock-sub">\n            We chose a different approach —<br>\n            will you support it?\n        </div>\n        <a class="contributions__adblock-button" href="'.concat(k, '">\n            <span class="component-button__content">Find out more</span>\n            <svg class="svg-arrow-right-straight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17.89" preserveAspectRatio="xMinYMid">\n                <path d="M20 9.35l-9.08 8.54-.86-.81 6.54-7.31H0V8.12h16.6L10.06.81l.86-.81L20 8.51v.84z"></path>\n            </svg>\n        </a>\n    </div>\n</div>\n'),
                O = {
                    id: "AdblockAsk",
                    start: "2019-02-20",
                    expiry: "2020-02-20",
                    author: "Tom Forbes",
                    description: "Places a contributions ask underneath the right-hand ad slot on articles.",
                    audience: 1,
                    audienceOffset: 0,
                    successMeasure: "",
                    audienceCriteria: "",
                    showForSensitive: !0,
                    canRun: function() {
                        return !Object(y.l)() && !Object(r.j)() && !_.a.get("page.hasShowcaseMainElement")
                    },
                    variants: [{
                        id: "control",
                        test: function() {
                            var e = document.querySelector(".js-aside-slot-container");
                            e && (e.innerHTML += j)
                        }
                    }]
                },
                T = t(114),
                C = Object(s.b)(30),
                A = Object(o.g)(),
                I = ["GB", "US", "AU"].includes(A),
                S = "Unlike many news organisations, we made a choice to keep our journalism free and available for all. At a time when factual information is a necessity, we believe that each of us, around the world, deserves access to accurate reporting with integrity at its heart. Every contribution, big or small, is so valuable – it is essential in protecting our editorial independence.",
                E = '<span class="engagement-banner__highlight"> Support The Guardian from as little as '.concat(Object(o.e)(A), "1</span>"),
                x = {
                    id: "ContributionsBannerArticlesViewed",
                    campaignId: "contributions_banner_articles_viewed",
                    start: "2019-07-10",
                    expiry: "2020-10-30",
                    author: "Tom Forbes",
                    description: "show number of articles viewed in contributions banner",
                    audience: 1,
                    audienceOffset: 0,
                    successMeasure: "AV per impression",
                    audienceCriteria: "All",
                    idealOutcome: "variant design performs at least as well as control",
                    canRun: function() {
                        return C >= 5 && !!Object(o.c)(A)
                    },
                    showForSensitive: !0,
                    componentType: "ACQUISITIONS_ENGAGEMENT_BANNER",
                    geolocation: A,
                    variants: [{
                        id: "control",
                        test: function() {},
                        engagementBannerParams: {
                            leadSentence: Object(r.a)(I ? "We chose a different approach. Will you support it?" : "More people in %%COUNTRY_NAME%%, like you, are reading and supporting The Guardian’s independent, investigative journalism.", !I, A),
                            messageText: S,
                            ctaText: E,
                            template: T.a
                        }
                    }, {
                        id: "variant",
                        test: function() {},
                        engagementBannerParams: {
                            leadSentence: "You’ve read ".concat(C, " Guardian articles in the last month – if you’ve enjoyed reading, we hope you will consider supporting us today."),
                            messageText: S,
                            ctaText: E,
                            template: T.a
                        }
                    }]
                },
                N = t(97),
                M = t(7),
                R = t(61),
                L = t.n(R),
                B = Object(s.b)(30),
                U = Object(o.g)(),
                G = {
                    heading: "Since you’re here...",
                    paragraphs: ["... we have a small favour to ask. More people are reading and supporting The Guardian’s independent, investigative journalism than ever before. And unlike many new organisations, we have chosen an approach that allows us to keep our journalism accessible to all, regardless of where they live or what they can afford. But we need your ongoing support to keep working as we do.", "The Guardian will engage with the most critical issues of our time – from the escalating climate catastrophe to widespread inequality to the influence of big tech on our lives. At a time when factual information is a necessity, we believe that each of us, around the world, deserves access to accurate reporting with integrity at its heart.", "Our editorial independence means we set our own agenda and voice our own opinions. Guardian journalism is free from commercial and political bias and not influenced by billionaire owners or shareholders. This means we can give a voice to those less heard, explore where others turn away, and rigorously challenge those in power.", "We need your support to keep delivering quality journalism, to maintain our openness and to protect our precious independence. Every reader contribution, big or small, is so valuable."],
                    highlightedText: "Support The Guardian from as little as %%CURRENCY_SYMBOL%%1 – and it only takes a minute. Thank you."
                },
                P = Object(r.i)({
                    id: "ContributionsEpicLearnMoreCta",
                    campaignId: "epic_learn_more_cta",
                    start: "2019-06-24",
                    expiry: "2020-01-27",
                    author: "Joshua Lieberman",
                    description: "Encourages users ",
                    successMeasure: "AV & CTA click-through rate",
                    idealOutcome: "Acquires many Supporters and audience demonstrating engagement",
                    audienceCriteria: "Not Australia",
                    audience: 1,
                    audienceOffset: 0,
                    geolocation: U,
                    highPriority: !1,
                    canRun: function() {
                        return B < 5 && "AU" !== U
                    },
                    variants: [{
                        id: "control",
                        buttonTemplate: r.d,
                        products: [],
                        copy: Object(r.b)(G, !1, U)
                    }, {
                        id: "variant",
                        buttonTemplate: function(e, n) {
                            return function(e) {
                                var n = e.supportUrl,
                                    t = void 0 === n ? "" : n,
                                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Support The Guardian",
                                    a = M.b ? L.a.markup : "",
                                    r = '\n            <a class="component-button component-button--primary component-button--hasicon-right contributions__contribute--epic-member"\n              href="'.concat(t, '"\n              target="_blank">\n                ').concat(i, '\n                <svg\n                class="svg-arrow-right-straight"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 20 17.89"\n                preserveAspectRatio="xMinYMid"\n                aria-hidden="true"\n                focusable="false"\n                >\n                    <path d="M20 9.35l-9.08 8.54-.86-.81 6.54-7.31H0V8.12h16.6L10.06.81l.86-.81L20 8.51v.84z" />\n                </svg>\n            </a>'),
                                    o = '<div class="contributions__payment-logos contributions__contribute--epic-member">\n        <img src="'.concat(_.a.get("images.acquisitions.payment-methods", ""), '" alt="Accepted payment methods: Visa, Mastercard, American Express and Paypal">\n        ').concat(a, "\n    </div>");
                                return '\n        <div class="contributions__buttons">\n            '.concat(r, "\n            ").concat('\n            <a class="component-button component-button--greyHollow component-button--greyHollow--for-epic component-button--hasicon-right contributions__contribute--epic-member contributions__learn-more contributions__learn-more--epic"\n              href="https://www.theguardian.com/membership/2018/nov/15/support-guardian-readers-future-journalism?INTCMP=why_support_us"\n              target="_blank">\n              Why support matters\n              <svg\n                class="svg-arrow-right-straight"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 20 17.89"\n                preserveAspectRatio="xMinYMid"\n                aria-hidden="true"\n                focusable="false"\n                >\n                    <path d="M20 9.35l-9.08 8.54-.86-.81 6.54-7.31H0V8.12h16.6L10.06.81l.86-.81L20 8.51v.84z" />\n                </svg>\n            </a>', "\n            ").concat(o, "\n        </div>")
                            }(e, n)
                        },
                        products: [],
                        copy: Object(r.b)(G, !1, U)
                    }]
                }),
                D = t(70),
                H = t.n(D),
                V = t(57),
                F = t.n(V),
                q = t(71),
                K = t.n(q),
                Y = function(e) {
                    return '\n    <div class="engagement-banner__close">\n        <div class="engagement-banner__roundel hide-until-phablet">\n            '.concat(H.a.markup, '\n        </div>\n        <button tabindex="4" class="button engagement-banner__close-button js-site-message-close js-engagement-banner-close-button" data-link-name="hide release message">\n            <span class="u-h">Close the moment banner</span>\n            ').concat(F.a.markup, '\n        </button>\n    </div>\n    \n    <div class="moment-banner__container">\n        <div class="moment-banner__graphic-container">\n            <img class="moment-banner__graphic"\n                srcset="https://media.guim.co.uk/7c8c1babaaaf1003eccec9edf53a6b9a06e1ce5d/0_0_279_420/279.png, \n                https://media.guim.co.uk/0e1afbf2f142b1eb9a686dc389236702740834b6/0_0_558_840/558.png 2x" \n                src="https://media.guim.co.uk/7c8c1babaaaf1003eccec9edf53a6b9a06e1ce5d/0_0_279_420/279.png" \n                alt="Support the Guardian" \n            />\n        </div>\n        \n        <div class="moment-banner__text-container"> \n            <div class="moment-banner__titles">\n                ').concat(e.titles && e.titles[0] ? '<h2 class="moment-banner__title-one">'.concat(e.titles[0], "</h2>") : "", "\n                ").concat(e.titles && e.titles[1] ? '<h2 class="moment-banner__title-two">'.concat(e.titles[1], "</h2>") : "", '\n            </div>\n            \n            <div class="moment-banner__copy">\n                \x3c!-- Render bold lead sentence if it exists --\x3e\n                ').concat(e.leadSentence ? '<span class="moment-banner__copy-in-bold">'.concat(e.leadSentence, "</span>") : "", '\n                \n                \x3c!-- Render main message text --\x3e\n                <span class="hide-until-tablet">').concat(e.messageText, "</span>\n                \n                \x3c!-- Render mobile text if it exists, else render main text --\x3e\n                ").concat(e.mobileMessageText ? '<span class="hide-from-tablet">'.concat(e.mobileMessageText, "</span>") : '<span class="hide-from-tablet">'.concat(e.messageText, "</span>"), "\n                \n                \x3c!-- Render bold closing sentence if it exists--\x3e\n                ").concat(e.closingSentence ? '<span class="moment-banner__copy-in-bold">'.concat(e.closingSentence, "</span>") : "", '\n            </div>\n\n            <div class="moment-banner__buttons">\n                <div class="engagement-banner__cta">\n                    <a tabindex="3" class="button  engagement-banner__button  engagement-banner__button--moment-link" href="').concat(e.linkUrl, '">\n                        Read our pledge\n                    </a>\n                </div>\n                \n                <div class="engagement-banner__cta">\n                    <a tabindex="3" class="button engagement-banner__button" href="').concat(e.linkUrl, '">\n                    ').concat(e.buttonCaption).concat(K.a.markup, "\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    ")
                },
                W = Object(o.g)(),
                z = "AllNonSupporters",
                Z = "AllExistingSupporters",
                J = {
                    id: "ContributionsBannerEnvironmentMomentNonSupporters",
                    start: "2019-01-01",
                    expiry: "2020-09-30",
                    author: "Joshua Lieberman",
                    description: "environment moment",
                    audience: 1,
                    audienceOffset: 0,
                    successMeasure: "AV per impression",
                    audienceCriteria: "All",
                    idealOutcome: "best AV possible",
                    canRun: function() {
                        return !0
                    },
                    showForSensitive: !0,
                    campaignId: "environment_campaign",
                    componentType: "ACQUISITIONS_ENGAGEMENT_BANNER",
                    geolocation: W,
                    variants: [{
                        id: "control",
                        test: function() {},
                        engagementBannerParams: {
                            leadSentence: "The climate emergency is the defining issue of our times. ",
                            messageText: "This is The Guardian’s pledge: we will be truthful, resolute and undeterred in pursuing our journalism on the environment. We will give global heating, wildlife extinction and pollution the urgent attention they demand. Our independence means we can interrogate inaction by those in power. It means our reporting will always be grounded in scientific facts, never in commercial or political interests. Support from our readers makes this work possible.",
                            mobileMessageText: "This is The Guardian’s pledge: we will be truthful, resolute and undeterred in pursuing our journalism on the environment. Support from our readers makes this work possible.",
                            template: Y,
                            bannerModifierClass: "moment-banner",
                            minArticlesBeforeShowingBanner: 0,
                            userCohort: z,
                            titles: ["We will not be quiet ", "on the climate crisis"]
                        },
                        canRun: function() {
                            return Object(r.c)(0, z)
                        }
                    }]
                },
                Q = {
                    id: "ContributionsBannerEnvironmentMomentSupporters",
                    start: "2019-01-01",
                    expiry: "2020-09-30",
                    author: "Joshua Lieberman",
                    description: "environment moment",
                    audience: 1,
                    audienceOffset: 0,
                    successMeasure: "AV per impression",
                    audienceCriteria: "All",
                    idealOutcome: "best AV possible",
                    canRun: function() {
                        return !0
                    },
                    showForSensitive: !0,
                    campaignId: "environment_campaign",
                    componentType: "ACQUISITIONS_ENGAGEMENT_BANNER",
                    geolocation: W,
                    variants: [{
                        id: "control",
                        test: function() {},
                        engagementBannerParams: {
                            messageText: "The climate emergency is the defining issue of our times. This is The Guardian’s pledge: we will be truthful, resolute and undeterred in pursuing our journalism on the environment. We will give global heating, wildlife extinction and pollution the urgent attention they demand. Our independence means we can interrogate inaction by those in power. ",
                            closingSentence: "Thank you for supporting The Guardian – readers from around the world, like you, make this work possible.",
                            mobileMessageText: "The climate emergency is the defining issue of our times. This is The Guardian’s pledge: we will be truthful, resolute and undeterred in pursuing our journalism on the environment. ",
                            buttonCaption: "Support us again",
                            template: Y,
                            bannerModifierClass: "moment-banner moment-banner-thank-you",
                            minArticlesBeforeShowingBanner: 0,
                            userCohort: Z,
                            titles: ["We will not be quiet ", "on the climate crisis"]
                        },
                        canRun: function() {
                            return Object(r.c)(0, Z)
                        }
                    }]
                },
                X = t(122),
                $ = t(98);
            t.d(n, "a", function() {
                return ee
            }), t.d(n, "c", function() {
                return ne
            }), t.d(n, "b", function() {
                return te
            });
            var ee = [i.a, a.a, O, N.a, X.a, $.a],
                ne = [f, P, v, c, b],
                te = [x, J, Q]
        },
        70: function(e, n) {
            e.exports = {
                markup: '<span class="inline-marque-36 inline-icon"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="#000" d="M18 0a18 18 0 1 0 0 36 18 18 0 0 0 0-36"/><path fill="#FFF" d="M21.2 4.4c2.3.4 5.3 2 6.3 3.1v5.2H27L21.2 5v-.6zm-2.2.4c-4 0-6.3 5.6-6.3 13.2 0 7.7 2.2 13.3 6.3 13.3v.6c-6 .4-14.4-4.2-14-13.8A13.3 13.3 0 0 1 19 4v.7zm10.4 14.4l-1.9.9v8.6c-1 1-3.8 2.6-6.3 3.1V19.9l-2.2-.7v-.6h10.4v.6z"/></svg></span>'
            }
        },
        71: function(e, n) {
            e.exports = {
                markup: '<span class="inline-arrow-white-right inline-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path fill="#fff" d="M22.8 14.6L15.2 7l-.7.7 5.5 6.6H6v1.5h14l-5.5 6.6.7.7 7.6-7.6v-.9"/></svg></span>'
            }
        },
        72: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return a
            }), t.d(n, "d", function() {
                return r
            }), t.d(n, "c", function() {
                return c
            }), t.d(n, "b", function() {
                return s
            });
            var i = t(15),
                a = t(0).a.get("page.isDev") ? "https://interactive.guim.co.uk/docsdata-test/19AGJYaPL8XpchykYlzqdKqNHxrHBILFktzM8vc5iShc.json" : "https://interactive.guim.co.uk/docsdata/1IEVVHU5ZObCzyPV-BLQczaSzxe7pawLcH8_lvFD0Csk.json",
                r = function(e) {
                    return Object(i.a)(e, {
                        mode: "cors"
                    })
                },
                o = function(e, n) {
                    return r(e).then(function(e) {
                        return e.sheets[n]
                    })
                },
                c = function() {
                    return o("https://interactive.guim.co.uk/docsdata/1fy0JolB1bf1IEFLHGHfUYWx-niad7vR9K954OpTOvjE.json", "control")
                },
                s = function() {
                    return o("https://interactive.guim.co.uk/docsdata/1CIHCoe87hyPHosXx1pYeVUoohvmIqh9cC_kNlV-CMHQ.json", "control")
                }
        },
        76: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return g
            });
            var i = t(21),
                a = t.n(i),
                r = t(1),
                o = t.n(r),
                c = t(16),
                s = t.n(c),
                u = t(23),
                d = t.n(u),
                l = t(11),
                p = t.n(l),
                h = t(15),
                m = t(22),
                f = t.n(m),
                g = function() {
                    function e() {
                        s()(this, e), o()(this, "useBem", void 0), o()(this, "templateName", void 0), o()(this, "componentClass", void 0), o()(this, "endpoint", void 0), o()(this, "classes", void 0), o()(this, "elem", void 0), o()(this, "template", void 0), o()(this, "rendered", void 0), o()(this, "destroyed", void 0), o()(this, "elems", void 0), o()(this, "options", void 0), o()(this, "defaultOptions", void 0), o()(this, "responseDataKey", void 0), o()(this, "autoupdated", void 0), o()(this, "updateEvery", void 0), o()(this, "fetchData", void 0), o()(this, "manipulationType", void 0), o()(this, "t", void 0), this.useBem = !1, this.templateName = null, this.componentClass = null, this.endpoint = null, this.classes = null, this.elem = null, this.template = null, this.rendered = !1, this.destroyed = !1, this.elems = null, this.options = {}, this.defaultOptions = {}, this.responseDataKey = "html", this.autoupdated = !1, this.updateEvery = 60, this.fetchData = null, this.manipulationType = "append", this.t = null
                    }
                    return a()(e, [{
                        key: "attachTo",
                        value: function(e) {
                            this.checkAttached(), this.elem = e, this._prerender(), this._ready()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                            this.checkAttached();
                            var n = this.template;
                            if (!n && this.templateName) {
                                var t = document.getElementById("tmpl-".concat(this.templateName));
                                t && (n = t.innerHTML)
                            }
                            return n && (this.elem = p.a.create(n)[0], this._prerender(), p()(e)[this.manipulationType](this.elem)), this._ready(), this
                        }
                    }, {
                        key: "checkAttached",
                        value: function() {
                            if (this.rendered) throw new function e(n) {
                                return s()(this, e), new Error("Component: ".concat(n))
                            }("Already rendered")
                        }
                    }, {
                        key: "fetch",
                        value: function(e, n) {
                            var t = this;
                            return this.checkAttached(), n && (this.responseDataKey = n), this._fetch().then(function(n) {
                                t.elem = p.a.create(n[t.responseDataKey])[0], t._prerender(), t.destroyed || (p()(e)[t.manipulationType](t.elem), t._ready(t.elem))
                            }).catch(function(e) {
                                return t.error(e)
                            })
                        }
                    }, {
                        key: "_fetch",
                        value: function() {
                            var e = this,
                                n = "function" == typeof this.endpoint ? this.endpoint() : this.endpoint;
                            return "string" == typeof n && Object.keys(this.options).forEach(function(t) {
                                var i = e.options[t];
                                n && i && (n = n.replace(":".concat(t), i))
                            }), n ? Object(h.a)(n, {
                                mode: "cors",
                                body: this.fetchData
                            }).then(function(n) {
                                return e.fetched(n), n
                            }) : Promise.resolve({})
                        }
                    }, {
                        key: "_ready",
                        value: function(e) {
                            this.destroyed || (this.rendered = !0, this._autoupdate(), this.ready(e))
                        }
                    }, {
                        key: "_prerender",
                        value: function() {
                            this.elems = {}, this.prerender()
                        }
                    }, {
                        key: "_autoupdate",
                        value: function() {
                            var e = this,
                                n = function() {
                                    e.t = setTimeout(function() {
                                        return t()
                                    }, 1e3 * e.updateEvery)
                                },
                                t = function() {
                                    e._fetch().then(function(t) {
                                        e.autoupdate(p.a.create(t[e.responseDataKey])[0]), e.autoupdated && n()
                                    }).catch(function() {
                                        n()
                                    })
                                };
                            this.autoupdated && n()
                        }
                    }, {
                        key: "prerender",
                        value: function() {}
                    }, {
                        key: "ready",
                        value: function(e) {}
                    }, {
                        key: "error",
                        value: function(e, n) {}
                    }, {
                        key: "fetched",
                        value: function(e) {}
                    }, {
                        key: "autoupdate",
                        value: function(e) {
                            var n = this.elem;
                            this.elem = e, this._prerender(), p()(n).replaceWith(this.elem)
                        }
                    }, {
                        key: "dispose",
                        value: function() {}
                    }, {
                        key: "on",
                        value: function(e, n, t) {
                            if ("function" == typeof n) {
                                var i = n;
                                d.a.on(this.elem, e, i.bind(this))
                            } else if ("function" == typeof t) {
                                var a = n.length ? n : [n];
                                d.a.on(this.elem, e, a, t.bind(this))
                            }
                            return this
                        }
                    }, {
                        key: "emit",
                        value: function(e, n) {
                            d.a.fire(this.elem, e, n)
                        }
                    }, {
                        key: "getElem",
                        value: function(e) {
                            if (this.elems && this.elems[e]) return this.elems[e];
                            var n = f()(this.getClass(e), this.elem)[0];
                            return n && this.elems && (this.elems[e] = n), n
                        }
                    }, {
                        key: "getClass",
                        value: function(e) {
                            return (arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "" : ".") + (this.useBem && this.componentClass ? "".concat(this.componentClass, "__").concat(e) : this.classes && this.classes[e] || "")
                        }
                    }, {
                        key: "setState",
                        value: function(e, n) {
                            var t = n ? this.getElem(n) : this.elem,
                                i = p()(t);
                            this.componentClass && i.addClass("".concat(this.componentClass + (n ? "__".concat(n) : ""), "--").concat(e))
                        }
                    }, {
                        key: "removeState",
                        value: function(e, n) {
                            var t = n ? this.getElem(n) : this.elem,
                                i = p()(t);
                            this.componentClass && i.removeClass("".concat(this.componentClass + (n ? "__".concat(n) : ""), "--").concat(e))
                        }
                    }, {
                        key: "toggleState",
                        value: function(e, n) {
                            var t = n ? this.getElem(n) : this.elem,
                                i = p()(t);
                            this.componentClass && i.toggleClass("".concat(this.componentClass + (n ? "__".concat(n) : ""), "--").concat(e))
                        }
                    }, {
                        key: "hasState",
                        value: function(e, n) {
                            var t = n ? this.getElem(n) : this.elem,
                                i = p()(t);
                            return !!this.componentClass && i.hasClass("".concat(this.componentClass + (n ? "__".concat(n) : ""), "--").concat(e))
                        }
                    }, {
                        key: "setOptions",
                        value: function(e) {
                            this.options = Object.assign({}, this.defaultOptions, this.options, e)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.elem && (p()(this.elem).remove(), delete this.elem), this.t && window.clearTimeout(this.t), this.t = null, this.autoupdated = !1, d.a.off(this.elem), this.destroyed = !0, this.rendered = !1
                        }
                    }]), e
                }()
        },
        8: function(e, n, t) {
            "use strict";
            var i = t(11),
                a = t.n(i),
                r = t(22),
                o = t.n(r);
            a.a.aug({
                height: function() {
                    return this.dim().height
                }
            });
            var c = function(e, n) {
                return a()(o()(e, n))
            };
            c.create = function(e) {
                return a()(a.a.create(e))
            }, c.ancestor = function(e, n) {
                return null == e || "html" === e.nodeName.toLowerCase() ? null : !e.parentNode || a()(e.parentNode).hasClass(n) ? e.parentNode : c.ancestor(e.parentNode, n)
            }, c.forEachElement = function(e, n) {
                var t = o()(e);
                return t.forEach(n), t
            }, n.a = c
        },
        84: function(e, n, t) {
            "use strict";
            t.d(n, "b", function() {
                return o
            }), t.d(n, "c", function() {
                return c
            }), t.d(n, "a", function() {
                return s
            }), t.d(n, "d", function() {
                return u
            });
            var i = t(4),
                a = t(58),
                r = t(52),
                o = function() {
                    return i.a.get(a.c) || {}
                },
                c = function(e) {
                    return Object(r.c)(e, o())
                },
                s = function() {
                    i.a.remove(a.c)
                },
                u = function(e) {
                    i.a.set(a.c, e)
                }
        },
        85: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            });
            var i = function(e, n) {
                return document.querySelector('script[src="'.concat(e, '"]')) ? Promise.resolve() : new Promise(function(t, i) {
                    var a = document.scripts[0],
                        r = document.createElement("script");
                    r.src = e, n && Object.assign(r, n), r.onload = t, r.onerror = function() {
                        i(new Error("Failed to load script ".concat(e)))
                    }, a.parentNode && a.parentNode.insertBefore(r, a)
                })
            }
        },
        95: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            });
            var i = function() {}
        },
        97: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return a
            });
            var i = t(5),
                a = {
                    id: "CommercialPrebidTripleLiftAdapter",
                    start: "2019-07-30",
                    expiry: "2020-07-30",
                    author: "Ioanna Kyprianou",
                    description: "This is to test triplelift adapter in prebid",
                    audience: .1,
                    audienceOffset: 0,
                    successMeasure: "We can see triplelift bids in prebid",
                    audienceCriteria: "n/a",
                    dataLinkNames: "n/a",
                    idealOutcome: "No significant impact to performance as well as higher ad yield",
                    showForSensitive: !0,
                    canRun: function() {
                        return ["US", "CA"].includes(Object(i.g)())
                    },
                    variants: [{
                        id: "control",
                        test: function() {}
                    }, {
                        id: "variant",
                        test: function() {}
                    }]
                }
        },
        98: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return o
            });
            var i = t(5),
                a = t(33),
                r = t.n(a)()(function() {
                    return Object(i.g)()
                }),
                o = {
                    id: "CommercialPangaeaAdapter",
                    start: "2019-10-08",
                    expiry: "2020-07-30",
                    author: "Ioanna Kyprianou",
                    description: "Test adding pangaea in prebid for US",
                    audience: 0,
                    audienceOffset: 0,
                    successMeasure: "Pangaea adapter works in prebid for US",
                    audienceCriteria: "n/a",
                    dataLinkNames: "n/a",
                    idealOutcome: "Pangaea adapter delivers in prebid for US",
                    showForSensitive: !0,
                    canRun: function() {
                        return ["US", "CA"].includes(r())
                    },
                    variants: [{
                        id: "control",
                        test: function() {}
                    }, {
                        id: "variant",
                        test: function() {}
                    }]
                }
        }
    }
]);
//# sourceMappingURL=graun.commercial~enhanced.js.map