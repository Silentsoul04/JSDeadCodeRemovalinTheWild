define(["require", "exports", "tslib", "react", "modules/clean/react/css", "spectrum/util/debounce", "spectrum/util/raf_throttle", "modules/clean/react/image", "modules/clean/react/index/components/rebrand_navigation", "spectrum-arbor/atoms/arbor_grid_element", "spectrum-arbor/atoms/arbor_grid_container", "spectrum-arbor/atoms/arbor_headline", "spectrum-arbor/atoms/arbor_copy"], function(e, t, n, r, a, i, o, l, s, c, d, u, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var p = (function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.updateIsPlankScrolledTo = function() {
                    !n.state.plankScrolledTo && n.isPlankScrolledTo() && n.setState(function() {
                        return {
                            plankScrolledTo: !0
                        }
                    })
                }, n.isPlankScrolledTo = function() {
                    var e = n.plankElement.getBoundingClientRect().top,
                        t = window.innerHeight;
                    return e < Math.max(.5 * t, t - 500)
                }, n.state = {
                    plankScrolledTo: !1
                }, n.scrollThrottle = new o.RafThrottle(n.updateIsPlankScrolledTo), n
            }
            return n.__extends(t, e), t.prototype.componentDidMount = function() {
                document.addEventListener("scroll", this.scrollThrottle.request), window.addEventListener("resize", i.debounce(this.updateIsPlankScrolledTo, 500)), this.updateIsPlankScrolledTo()
            }, t.prototype.render = function() {
                var e = this,
                    t = this.props.content,
                    n = t.headline,
                    a = t.nav,
                    i = "product-tour__section" + (this.props.isInternetExplorer ? " product-tour__section--internet-explorer" : "");
                return r.default.createElement(d.ArborGridContainer, {
                    className: i,
                    containerRelative: !0,
                    direction: "column",
                    alignment: "flex-start",
                    childSpacing: "flex-start",
                    bottomPaddingSize: "none",
                    verticalPaddingSize: {
                        base: "xl",
                        medium: "xxl"
                    },
                    backgroundColor: "sapphire",
                    widthType: "full",
                    setContainerRef: function(t) {
                        e.plankElement = t
                    }
                }, r.default.createElement(s.RebrandNavigation, {
                    theme: "sapphire-french-vanilla"
                }), r.default.createElement(g, {
                    headline: n,
                    isAnimationStarted: this.state.plankScrolledTo
                }), r.default.createElement(h, {
                    nav: a,
                    isAnimationStarted: this.state.plankScrolledTo,
                    firstPageScrollToTarget: this.plankElement,
                    isInternetExplorer: this.props.isInternetExplorer
                }), r.default.createElement(c.ArborGridElement, {
                    className: "product-tour-rule__container",
                    columnWidth: {
                        base: 10,
                        medium: 20
                    },
                    marginLeftColumns: {
                        base: 1,
                        medium: 2
                    },
                    marginTopSize: "xl"
                }, r.default.createElement("hr", {
                    className: "product-tour-rule"
                })))
            }, t
        })(r.default.PureComponent),
        g = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t.prototype.render = function() {
                return r.default.createElement(v, {
                    elementClassName: "headline",
                    isStarted: this.props.isAnimationStarted
                }, r.default.createElement(d.ArborGridContainer, {
                    className: "product-tour-headline__container",
                    backgroundColor: "sapphire",
                    topPaddingSize: "none",
                    bottomPaddingSize: "small",
                    direction: "row",
                    alignment: "flex-start",
                    childSpacing: "flex-start",
                    widthType: "full"
                }, r.default.createElement(c.ArborGridElement, {
                    className: "product-tour-headline",
                    columnWidth: {
                        base: 10,
                        medium: 10,
                        large: 12
                    },
                    marginLeftColumns: {
                        base: 1,
                        medium: 2
                    }
                }, r.default.createElement(u.ArborHeadline, {
                    className: "product-tour-headline__text",
                    tag: "h2",
                    color: "french-vanilla"
                }, this.props.headline))))
            }, t
        })(r.default.PureComponent),
        h = (function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.navItems = [], a.imagePages = [], a.updateNormalizedScrollPosition = function() {
                    a.state.isTransitionEnded && a.setState(function() {
                        return {
                            normalizedImageScrollPosition: a.getNormalizedImageScrollPosition()
                        }
                    })
                }, a.handleScroll = function() {
                    return a.updateNormalizedScrollPosition()
                }, a.handleResize = function() {
                    window.innerWidth <= 800 || a.props.isInternetExplorer ? a.handleImageTransitionEnd() : a.setState(function() {
                        return {
                            stickyNavHeight: a.stickyNav.offsetHeight
                        }
                    }, function() {
                        a.stickyNav.style.top = a.getStickyNavTop() + "px", a.updateNormalizedScrollPosition()
                    })
                }, a.getStickyNavTop = function() {
                    var e = window.innerHeight,
                        t = Math.min(1e3, e) - 90;
                    return Math.min(300, Math.max(0, (t - a.state.stickyNavHeight) / 2) + 90)
                }, a.getPageInnerStyle = function(e) {
                    return !a.state.isMounted || window.innerWidth <= 800 || a.props.isInternetExplorer ? {} : {
                        height: a.getPageInnerHeight(e)
                    }
                }, a.getPageInnerHeight = function(e) {
                    return 0 === e ? Math.max(window.innerHeight - a.getStickyNavTop(), 670) : 2 === e ? Math.max(a.getStickyNavTop() + a.state.stickyNavHeight, 670) : Math.max(window.innerHeight - 90, 670)
                }, a.handleImageTransitionEnd = function() {
                    a.setState(function() {
                        return {
                            isTransitionEnded: !0
                        }
                    }), a.updateNormalizedScrollPosition()
                }, a.getNormalizedImageScrollPosition = function() {
                    var e = a.stickyNav.getBoundingClientRect().top - a.imageContainer.getBoundingClientRect().top;
                    e -= a.getStickyNavTop() - 90, e = Math.max(e, 0);
                    var t = a.getPageInnerHeight(0),
                        n = a.getPageInnerHeight(1);
                    return e < t ? e / t : Math.min(1 + (e - t) / n, 2)
                }, a.getScrollBarPositionAndSize = function(e) {
                    var t, n, r = a.navItems.map(function(e) {
                            return e.offsetHeight + 20
                        }),
                        i = r[0],
                        o = r[1],
                        l = r[2];
                    return e <= 1 ? (t = e * i, n = (1 - e) * i + e * o) : (t = i + o * (e - 1), n = (2 - e) * o + (e - 1) * l), t += 32, n -= 30, {
                        pos: t,
                        size: n
                    }
                }, a.handleClickNavItem = function(e) {
                    var t = e.currentTarget.id.match(/[0-9]+$/g);
                    if (t) {
                        var n = Number(t[0]);
                        (0 === n ? a.props.firstPageScrollToTarget : a.imagePages[n]).scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                }, a.getNavItemClassName = function(e, t) {
                    var n = "product-tour-sticky-nav__item",
                        r = e - t;
                    return r >= -.7 && r <= .3 ? n + "--active" : n + "--inactive"
                }, a.renderImagePage = function(e) {
                    return r.default.createElement(d.ArborGridContainer, {
                        className: "product-tour-image__page-inner-container",
                        alignment: "center",
                        childSpacing: "center",
                        direction: "column",
                        verticalPaddingSize: "none",
                        widthType: "full"
                    }, r.default.createElement(c.ArborGridElement, {
                        className: "product-tour-image__item" + (e.imgSrc.match(/home-producttour-insync/) ? " product-tour-image__item--scale-down" : ""),
                        alignment: "center",
                        childSpacing: "center",
                        marginTopSize: {
                            base: "large",
                            medium: "none"
                        }
                    }, r.default.createElement(l.Image, {
                        src: e.imgSrc,
                        srcHiRes: e.imgSrcHiRes
                    })), r.default.createElement(c.ArborGridElement, {
                        className: "product-tour-image__description",
                        columnWidth: 10,
                        marginTopSize: "medium"
                    }, r.default.createElement(f, n.__assign({}, e))))
                }, a.state = {
                    normalizedImageScrollPosition: 0,
                    isTransitionEnded: !1,
                    stickyNavHeight: 500,
                    isMounted: !1
                }, a.scrollThrottle = new o.RafThrottle(a.handleScroll), a
            }
            return n.__extends(t, e), t.prototype.componentDidMount = function() {
                document.addEventListener("scroll", this.scrollThrottle.request), window.addEventListener("resize", i.debounce(this.handleResize, 500)), this.setState(function() {
                    return {
                        isMounted: !0
                    }
                }, this.handleResize)
            }, t.prototype.render = function() {
                var e = this,
                    t = this.state.isMounted ? this.getScrollBarPositionAndSize(this.state.normalizedImageScrollPosition) : {
                        pos: 0,
                        size: 0
                    },
                    a = t.pos,
                    i = t.size;
                return r.default.createElement(d.ArborGridContainer, {
                    className: "product-tour-nav__container",
                    backgroundColor: "sapphire",
                    verticalPaddingSize: "none",
                    direction: "row",
                    alignment: "flex-start",
                    childSpacing: "flex-start",
                    widthType: "full"
                }, r.default.createElement(c.ArborGridElement, {
                    className: "product-tour-sticky-nav__container",
                    columnWidth: {
                        base: 12,
                        medium: 8,
                        large: 6
                    },
                    childSpacing: "center",
                    marginLeftColumns: {
                        base: 0,
                        medium: 2
                    },
                    marginRightColumns: {
                        base: 0,
                        medium: 1
                    },
                    setRef: function(t) {
                        e.stickyNav = t
                    }
                }, r.default.createElement(v, {
                    elementClassName: "sticky-nav",
                    isStarted: this.props.isAnimationStarted
                }, this.props.nav.map(function(t, a) {
                    return r.default.createElement("div", {
                        role: "button",
                        ref: function(t) {
                            t && (e.navItems[a] = t)
                        },
                        className: "product-tour-sticky-nav__item " + e.getNavItemClassName(e.state.normalizedImageScrollPosition, a),
                        id: "product-tour-sticky-nav-item-" + a,
                        key: "product-tour-sticky-nav-item-" + a,
                        onClick: e.handleClickNavItem
                    }, r.default.createElement(f, n.__assign({}, t)))
                }), r.default.createElement("div", {
                    className: "product-tour-sticky-nav-scroll__container"
                }, r.default.createElement("div", {
                    className: "product-tour-sticky-nav-scroll__bar",
                    style: {
                        transform: "translateY(" + a + "px) scaleY(" + i / 161 + ")"
                    }
                })))), r.default.createElement(c.ArborGridElement, {
                    className: "product-tour-image__container",
                    columnWidth: {
                        base: 12,
                        medium: 11,
                        large: 13
                    },
                    marginRightColumns: {
                        base: 0,
                        medium: 2
                    }
                }, r.default.createElement(d.ArborGridContainer, {
                    alignment: "center",
                    backgroundColor: "sapphire",
                    verticalPaddingSize: "none",
                    direction: "column",
                    widthType: "full",
                    setContainerRef: function(t) {
                        e.imageContainer = t
                    }
                }, this.props.nav.map(function(t, n) {
                    return r.default.createElement("div", {
                        key: "product-tour-image-" + n,
                        className: "product-tour-image__page",
                        style: e.getPageInnerStyle(n)
                    }, r.default.createElement(c.ArborGridElement, {
                        className: "product-tour-image__page-content",
                        childSpacing: 0 === n ? "flex-start" : "center",
                        setRef: function(t) {
                            e.imagePages[n] = t
                        }
                    }, r.default.createElement(v, {
                        elementClassName: "image",
                        isStarted: e.props.isAnimationStarted,
                        onTransitionEnd: e.handleImageTransitionEnd
                    }, e.renderImagePage(t))))
                }))))
            }, t
        })(r.default.PureComponent),
        f = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.className,
                    n = e.heading,
                    a = e.text;
                return r.default.createElement("div", {
                    className: t ? "product-tour-description " + t : "product-tour-description"
                }, r.default.createElement(u.ArborHeadline, {
                    className: "product-tour-description__heading",
                    tag: "h3",
                    color: "panda-white",
                    marginTopSize: "none",
                    marginBottomSize: "small"
                }, n), r.default.createElement(m.ArborCopy, {
                    className: "product-tour-description__text",
                    color: "panda-white"
                }, a))
            }, t
        })(r.default.PureComponent),
        v = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getTransitionClassNames = function(e, t) {
                    var n = "product-tour__transition";
                    return n + " " + n + "--" + e + (t ? "" : " " + n + "--init " + n + "--" + e + "-init")
                }, t
            }
            return n.__extends(t, e), t.prototype.render = function() {
                return r.default.createElement("div", {
                    className: this.getTransitionClassNames(this.props.elementClassName, this.props.isStarted),
                    onTransitionEnd: this.props.onTransitionEnd
                }, this.props.children)
            }, t
        })(r.default.Component);
    t.ProductTour = a.requireCssWithComponent(p, ["/static/css/index/planks/product_tour-vfljRHfxQ.css"])
});
//# sourceMappingURL=product_tour.min.js-vflX5t9If.map