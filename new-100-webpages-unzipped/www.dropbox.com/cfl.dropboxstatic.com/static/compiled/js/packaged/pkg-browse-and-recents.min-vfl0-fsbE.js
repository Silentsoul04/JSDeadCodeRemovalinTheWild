define("modules/clean/react/sticky/container", ["require", "exports", "tslib", "react", "external/react-dom", "external/classnames", "modules/clean/react/sticky/utils"], function(t, e, n, i, r, a, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), i = n.__importDefault(i), r = n.__importStar(r), a = n.__importDefault(a);
    var s = (function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n.__extends(e, t), e.prototype.render = function() {
                var t = this,
                    e = this.props.children ? i.default.Children.map(this.props.children, function(e) {
                        return e && i.default.cloneElement(e, {
                            nativeSupport: !0,
                            containerOffsetTop: t.props.offsetTop,
                            hasParent: !0
                        })
                    }) : null,
                    r = {
                        position: "relative"
                    },
                    o = this.props,
                    s = o.stickHeight,
                    l = o.id;
                s && (r.height = s);
                var p = {
                    style: r,
                    className: a.default("native-sticky-container", this.props.className)
                };
                return l && (p.key = l), i.default.createElement("div", n.__assign({}, p), e)
            }, e.displayName = "NativeStickyContainer", e
        })(i.default.PureComponent),
        l = (function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.changeEvents = ["resize", "scroll", "touchstart", "touchmove", "touchend"], e._currentAnimationRequestId = null, e._ticking = !1, e.state = {
                    top: 0,
                    bottom: 0
                }, e._requestTick = function() {
                    e._ticking || (e._ticking = !0, e._currentAnimationRequestId = window.requestAnimationFrame(function() {
                        e._updateMeasurements(), e._ticking = !1
                    }))
                }, e
            }
            return n.__extends(e, t), e.prototype.componentDidMount = function() {
                var t = this;
                this.changeEvents.forEach(function(e) {
                    window.addEventListener(e, t._requestTick)
                }), this._requestTick()
            }, e.prototype.componentWillUnmount = function() {
                var t = this;
                window.cancelAnimationFrame(this._currentAnimationRequestId), this.changeEvents.forEach(function(e) {
                    window.removeEventListener(e, t._requestTick)
                })
            }, e.prototype._updateMeasurements = function() {
                var t = r.findDOMNode(this).getBoundingClientRect(),
                    e = t.top,
                    n = t.bottom;
                this.setState({
                    top: e,
                    bottom: this.props.useWindowToDetermineBottom ? window.innerHeight : n
                })
            }, e.prototype.render = function() {
                var t = this,
                    e = this.props.children ? i.default.Children.map(this.props.children, function(e) {
                        return e && i.default.cloneElement(e, {
                            nativeSupport: !1,
                            containerTop: t.state.top,
                            containerBottom: t.state.bottom,
                            containerOffsetTop: t.props.offsetTop,
                            hasParent: !0
                        })
                    }) : null,
                    r = this.props,
                    o = r.stickHeight,
                    s = r.id,
                    l = {
                        position: "relative"
                    };
                o && (l.height = o);
                var p = {
                    style: l,
                    className: a.default("shim-sticky-container", this.props.className)
                };
                return s && (p.key = s), i.default.createElement("div", n.__assign({}, p), e)
            }, e.displayName = "ShimStickyContainer", e
        })(i.default.PureComponent),
        p = (function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    nativeSupport: !1
                }, n
            }
            return n.__extends(e, t), e.prototype.componentDidMount = function() {
                var t = this.props.useNativeSticky !== !0 && o.isCssDeclarationSupported("position", "sticky");
                t !== this.state.nativeSupport && this.setState({
                    nativeSupport: t
                })
            }, e.prototype.render = function() {
                return this.state.nativeSupport ? i.default.createElement(s, n.__assign({}, this.props)) : i.default.createElement(l, n.__assign({}, this.props))
            }, e
        })(i.default.PureComponent);
    e.StickyContainer = p
}), define("modules/clean/react/sticky/sticky", ["require", "exports", "tslib", "react", "external/react-dom", "external/prop-types", "external/react-addons-pure-render-mixin", "external/create-react-class", "external/classnames", "spectrum/vertically_fixed", "modules/clean/react/sticky/utils"], function(t, e, n, i, r, a, o, s, l, p, h) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), i = n.__importDefault(i), r = n.__importStar(r), a = n.__importStar(a), o = n.__importStar(o), s = n.__importDefault(s), l = n.__importDefault(l);
    var c = s.default({
            displayName: "NativeSticky",
            mixins: [o],
            propTypes: {
                containerOffsetTop: a.number,
                children: a.oneOfType([a.arrayOf(a.element), a.element, a.func])
            },
            getDefaultProps: function() {
                return {
                    containerOffsetTop: 0
                }
            },
            _renderChildren: function() {
                var t = this.props.children;
                return "function" == typeof t ? t() : t
            },
            render: function() {
                var t = this.props.className,
                    e = h.getPrefixedCssPropertyValue("position", "sticky"),
                    n = {
                        top: this.props.containerOffsetTop,
                        position: e
                    },
                    r = l.default("native-sticky", t);
                return i.default.createElement("div", {
                    style: n,
                    className: r
                }, this._renderChildren())
            }
        }),
        d = s.default({
            displayName: "ShimSticky",
            _animationTimeoutId: null,
            propTypes: {
                containerTop: a.number,
                containerBottom: a.number,
                containerOffsetTop: a.number,
                offsetHeight: a.number,
                slideDownDuration: a.number,
                children: a.oneOfType([a.arrayOf(a.element), a.element, a.func])
            },
            getInitialState: function() {
                return {
                    translateY: 0,
                    transitionDuration: 0
                }
            },
            getDefaultProps: function() {
                return {
                    containerTop: 0,
                    containerBottom: 0,
                    containerOffsetTop: 0,
                    offsetHeight: 0,
                    slideDownDuration: 300
                }
            },
            componentDidMount: function() {
                var t = r.findDOMNode(this).getBoundingClientRect().top,
                    e = this.props.containerOffsetTop - t,
                    n = this.props.offsetHeight,
                    i = this.props.slideDownDuration,
                    a = e < n ? -e : -n;
                e > 0 && this._performSlideDownAnimation(a, i)
            },
            componentWillUnmount: function() {
                clearTimeout(this._animationTimeoutId)
            },
            shouldComponentUpdate: function(t, e) {
                var n = this.props.containerOffsetTop,
                    i = this.props.containerTop,
                    r = this.props.containerBottom,
                    a = this.props.offsetHeight,
                    o = this.props.children,
                    s = this.state.translateY,
                    l = this.state.transitionDuration,
                    p = t.containerOffsetTop,
                    h = t.containerTop,
                    c = t.containerBottom,
                    d = t.offsetHeight,
                    u = t.children,
                    f = e.translateY,
                    m = e.transitionDuration,
                    v = i < n,
                    _ = h < p,
                    y = r - a < n,
                    g = c - d < p;
                return t.allowStickyOnLoad && (v = i <= n, _ = h <= p, y = r - a <= n, g = c - d <= p), s !== f || l !== m || a !== d || n !== p || v !== _ || y !== g || o !== u
            },
            _performSlideDownAnimation: function(t, e) {
                var n = this;
                this.setState({
                    translateY: t,
                    transitionDuration: 0
                }), this._animationTimeoutId = setTimeout(function() {
                    n.setState({
                        translateY: 0,
                        transitionDuration: e
                    })
                }, 0)
            },
            _renderChildren: function(t) {
                var e = this.props.children;
                return "function" == typeof e ? e(t) : e
            },
            render: function() {
                var t = this.props.className,
                    e = this.props.containerOffsetTop,
                    n = this.props.containerTop,
                    r = this.props.containerBottom,
                    a = this.props.offsetHeight,
                    o = n < e,
                    s = r - a < e;
                this.props.allowStickyOnLoad && (o = n <= e, s = r - a <= e);
                var h = this.state.translateY,
                    c = this.state.transitionDuration,
                    d = o && !s,
                    u = {},
                    f = {},
                    m = ["shim-sticky"];
                o && (u = {
                    height: a
                }, s ? (f = {
                    position: "absolute",
                    bottom: 0
                }, m.push("shim-sticky--stuck")) : (f = {
                    position: "fixed",
                    top: e,
                    transitionProperty: "transform",
                    transitionDuration: c + "ms",
                    transform: "translateY(" + h + "px)"
                }, m.push("shim-sticky--fixed")));
                var v = this._renderChildren(d),
                    _ = d ? i.default.createElement(p.VerticallyFixed, {
                        style: f,
                        className: "shim-sticky__sticky"
                    }, v) : i.default.createElement("div", {
                        style: f,
                        className: "shim-sticky__sticky"
                    }, v);
                return i.default.createElement("div", {
                    className: l.default(m, t)
                }, i.default.createElement("div", {
                    style: u,
                    className: "shim-sticky__stub"
                }), _)
            }
        });
    e.Sticky = s.default({
        displayName: "Sticky",
        mixins: [o],
        propTypes: {
            nativeSupport: a.bool,
            containerTop: a.number,
            containerBottom: a.number,
            containerOffsetTop: a.number,
            hasParent: a.bool
        },
        getDefaultProps: function() {
            return {
                hasParent: !1,
                nativeSupport: !1
            }
        },
        render: function() {
            return this.props.hasParent ? this.props.nativeSupport ? i.default.createElement(c, n.__assign({}, this.props)) : i.default.createElement(d, n.__assign({}, this.props)) : i.default.createElement("div", {
                className: "sticky__placeholder"
            })
        }
    })
}), define("modules/clean/react/sticky/utils", ["require", "exports"], function(t, e) {
    "use strict";

    function n(t, e) {
        var n = t + ":";
        if (!document || !document.createElement) return "";
        var i = document.createElement("test");
        return i.style.cssText = n + ["-webkit-", "-moz-", "-ms-", "-o-", ""].join(e + ";" + n) + (e + ";"), i.style[t] || ""
    }

    function i(t, e) {
        return n(t, e).indexOf(e) !== -1
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getPrefixedCssPropertyValue = n, e.isCssDeclarationSupported = i
}), define("spectrum/icon_partners/bundle", ["require", "exports"], function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ICONS = {
        dlink: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<path d="M4.222 12.914a4.5 4.5 0 0 0 6.364 6.364l2.475-2.475-1.414-1.414-2.475 2.475a2.5 2.5 0 0 1-3.536-3.536l3.536-3.535a2.5 2.5 0 0 1 3.535 0l1.061 1.06 1.414-1.414-1.06-1.06a4.5 4.5 0 0 0-6.364 0l-3.536 3.535z" fill="#637282"></path><path d="M19.778 10.086a4.5 4.5 0 0 0-6.364-6.364L10.94 6.197l1.414 1.414 2.475-2.475a2.5 2.5 0 0 1 3.535 3.536l-3.535 3.535a2.5 2.5 0 0 1-3.536 0l-1.06-1.06-1.415 1.414 1.06 1.06a4.5 4.5 0 0 0 6.365 0l3.535-3.535z" fill="#637282"></path>'
        },
        dropbox_paper: {
            attrs: {
                width: "30",
                height: "30",
                viewBox: "0 0 30 30"
            },
            dangerouslySetInnerIconHtml: '<path fill="none" d="M0 0h30v30H0z"></path><path fill="none" d="M4 3h22.883v24H4z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 19.71L15.441 27l11.442-7.29-11.441-7.288L4 19.712z" fill="#B6D2EA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 10.288l11.442 7.29 11.441-7.29L15.442 3 4 10.288z" fill="#0061FF"></path>'
        },
        dropbox_paper_template: {
            attrs: {
                width: "30",
                height: "30",
                viewBox: "0 0 30 30"
            },
            dangerouslySetInnerIconHtml: '<path fill="none" d="M0 0h30v30H0z"></path><path fill="none" d="M4 3h22.883v24H4z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 19.71L15.441 27l11.442-7.29-11.441-7.288L4 19.712z" fill="#6A7C8F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 10.288l11.442 7.29 11.441-7.29L15.442 3 4 10.288z" fill="#1B2733"></path>'
        },
        dropbox_paper_binder: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<g clip-path="url(#mc-partners-dropbox_paper_binder-a)" fill-rule="evenodd" clip-rule="evenodd" fill="#0061FF"><path d="M11.92 22.107l-8.402-5.361-1.491.95L11.92 24l9.894-6.303-1.484-.951-8.41 5.36z"></path><path d="M11.92 18.303l-8.402-5.352-1.491.95 9.893 6.304 9.894-6.303-1.484-.951-8.41 5.352z"></path><path d="M11.92 14.508l-8.402-5.36-1.491.95 9.893 6.304 9.894-6.304-1.484-.95-8.41 5.36z"></path><path d="M2.027 6.303l9.893 6.304 9.894-6.304L11.92 0 2.027 6.303z"></path></g><defs><clipPath id="mc-partners-dropbox_paper_binder-a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs>'
        },
        google_gdoc: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<rect x="3" y="3" width="18" height="18" rx="2" fill="#4285F4"></rect><path d="M18 7H6v2h12V7zM18 11H6v2h12v-2zM14 15H6v2h8v-2z" fill="#fff"></path>'
        },
        google_gsheet: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<rect x="3" y="3" width="18" height="18" rx="2" fill="#0F9D58"></rect><path fill="#fff" d="M9 5h2v14H9z"></path><path fill="#fff" d="M5 9h14v2H5z"></path>'
        },
        google_gslides: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<rect x="3" y="3" width="18" height="18" rx="2" fill="#F4B400"></rect><path fill="#fff" d="M5 8h14v8H5z"></path>'
        },
        microsoft_docx: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<path d="M1 3l13-2v21L1 20V3z" fill="#2B579A"></path><path d="M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z" fill="#2B579A"></path><path fill="#fff" d="M14 4h8v15h-8z"></path><path fill="#2B579A" d="M13 6h7v1h-7zM13 9h7V8h-7zM13 11h7v-1h-7zM13 13h7v-1h-7zM13 15h7v-1h-7zM13 17h7v-1h-7z"></path><path d="M12 8l-1.687 7H8.72l-1.06-4.49a4.084 4.084 0 0 1-.102-.787H7.54c-.027.32-.065.581-.116.786L6.338 15h-1.66L3 8h1.571l.9 4.662c.038.198.066.465.084.8h.027c.011-.25.054-.524.129-.82L6.868 8h1.54l1.046 4.7c.039.173.073.424.102.753h.018c.012-.258.043-.518.094-.781L10.549 8H12z" fill="#fff"></path>'
        },
        microsoft_pptx: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<path d="M1 3l13-2v21L1 20V3z" fill="#D24726"></path><path d="M7 13v3H5V7h2.897C9.966 7 11 7.956 11 9.868c0 .904-.298 1.636-.893 2.197A3.388 3.388 0 0 1 7.73 13H7zm0-4.444v2.806h.576c.985 0 1.477-.473 1.477-1.418 0-.925-.492-1.388-1.477-1.388H7z" fill="#fff"></path><path d="M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z" fill="#D24726"></path><path fill="#fff" d="M14 4h8v15h-8z"></path><path fill="#D24726" d="M14 15h6v-1h-6zM14 17h6v-1h-6z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 13a3 3 0 0 0 3-3h-3V7a3 3 0 0 0 0 6z" fill="#D24726"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 9a3 3 0 0 0-3-3v3h3z" fill="#D24726"></path>'
        },
        microsoft_xlsx: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<path d="M1 3l13-2v21L1 20V3z" fill="#217346"></path><path d="M13 3h9a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-9V3z" fill="#217346"></path><path fill="#fff" d="M14 4h8v15h-8z"></path><path fill="#217346" d="M14 14h2v-1h-2zM14 16h2v-1h-2zM14 10h2V9h-2zM14 12h2v-1h-2zM14 8h2V7h-2zM17 14h3v-1h-3zM17 16h3v-1h-3zM17 10h3V9h-3zM17 12h3v-1h-3zM17 8h3V7h-3z"></path><path d="M6 7H4l2 4.5L4 16h2l1-3 1 3h2l-2-4.5L10 7H8l-1 3-1-3z" fill="#fff"></path>'
        },
        shortcut: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<path fill-rule="evenodd" clip-rule="evenodd" d="M13 18v-3.016a1.2 1.2 0 0 0-.965-1.177l-.358-.072a1.799 1.799 0 0 1-1.053-.64 4.984 4.984 0 0 0-.335-.666 1.84 1.84 0 0 1-.024-.106l-.168-.836a1.2 1.2 0 0 0-.51-.763l-.567-.377a1.167 1.167 0 0 1-.52-.972.875.875 0 0 0-.875-.875H6.46c-.183.477-.315.98-.39 1.5H4.056A9.001 9.001 0 0 1 22 11a9 9 0 0 1-11 8.777V17.71c.634.189 1.305.29 2 .29zm7-7a6.968 6.968 0 0 1-1.21 3.935 3 3 0 0 0-2.949-2.435h-2.24a.6.6 0 0 1-.6-.6V9.974c0-.29.163-.556.423-.686a1.915 1.915 0 0 0 1.058-1.741l-.05-3.4A7.002 7.002 0 0 1 20 11z" fill="#0061FF"></path><path d="M8.499 12H2.443l2.253 2.253c-3.513 3.711-2.712 7.364-2.367 8.434.03.095.165.086.192-.01.24-.852 1.147-3.317 4.174-6.425L8.943 18.5v-6.056A.444.444 0 0 0 8.499 12z" fill="#717781"></path>'
        }
    }
}), define("spectrum/icon_partners", ["require", "exports", "tslib", "tslib", "react", "spectrum/icon_templates/stateless", "spectrum/svg_icon_bundle", "spectrum/icon_partners/bundle"], function(t, e, n, i, r, a, o, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), i = n.__importStar(i), r = n.__importStar(r), e.ICONS = s.ICONS, e.IconPartners = function(t) {
        var e = t.name,
            n = r.createElement(o.SvgIconBundle, {
                focusable: "false",
                icon: s.ICONS[e]
            });
        return r.createElement(a.Component, i.__assign({
            icon: n
        }, t))
    }, e.IconPartners.displayName = "IconPartners"
});
//# sourceMappingURL=pkg-browse-and-recents.min.js-vflgrJHtc.map