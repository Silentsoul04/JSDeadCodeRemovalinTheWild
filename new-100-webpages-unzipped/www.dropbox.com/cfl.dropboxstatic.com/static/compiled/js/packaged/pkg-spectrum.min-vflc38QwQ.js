define("modules/clean/redux/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.Fetch = "Fetch", e.Request = "Request", e.Success = "Success", e.Error = "Error"
    })(t.ApiClientStatus || (t.ApiClientStatus = {}))
}), define("spectrum/icon_inline/bundle", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ICONS = {
        edit: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><g fill-rule="nonzero" fill="#637282"><path d="M9.499 12.498L14.502 7.5l1.999 2-5 5.003zM8.454 13.137l2.43 2.407-1.388.958-2.496.5.498-2.5z"></path></g></g>'
        },
        info: {
            attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            },
            dangerouslySetInnerIconHtml: '<g fill="none" fill-rule="evenodd"><path d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#B4BBC2"></path><path stroke="#B4BBC2" d="M11.5 12h1v3.5h-1zM11.5 8.5h1v1h-1z"></path></g>'
        }
    }
}), define("spectrum/icon_inline", ["require", "exports", "tslib", "tslib", "react", "spectrum/icon_templates/stateless", "spectrum/svg_icon_bundle", "spectrum/icon_inline/bundle"], function(e, t, n, o, i, s, r, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), i = n.__importStar(i), t.ICONS = l.ICONS, t.IconInline = function(e) {
        var t = e.name,
            n = i.createElement(r.SvgIconBundle, {
                focusable: "false",
                icon: l.ICONS[t]
            });
        return i.createElement(s.Component, o.__assign({
            icon: n
        }, e))
    }, t.IconInline.displayName = "IconInline"
}), define("spectrum/portal", ["require", "exports", "tslib", "spectrum/portal/portal"], function(e, t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(o, t)
}), define("spectrum/portal/portal", ["require", "exports", "tslib", "tslib", "react", "react-dom"], function(e, t, n, o, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), i = n.__importStar(i), s = n.__importStar(s);
    var r = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.componentWillUnmount = function() {
            this.portalRootElement && this.unMountPortal()
        }, t.prototype.componentWillMount = function() {
            !this.portalRootElement && this.props.isShowInitially && this.mountPortal()
        }, t.prototype.mountPortal = function(e) {
            var t = this;
            if (!this.portalRootElement) {
                this.portalRootElement = document.createElement("div");
                (this.props.parentElement || document.body).appendChild(this.portalRootElement);
                var n = i.createElement("div", {
                    "aria-hidden": !1,
                    className: this.props.className || "mc-portal-content",
                    id: this.props.id,
                    role: this.props.role,
                    ref: function(e) {
                        return t.portalContentElementRef = e
                    }
                }, this.props.children);
                s.render(n, this.portalRootElement, e)
            }
        }, t.prototype.unMountPortal = function() {
            if (this.portalRootElement) {
                s.unmountComponentAtNode(this.portalRootElement);
                (this.props.parentElement || document.body).removeChild(this.portalRootElement), this.portalRootElement = null, this.portalContentElementRef = null
            }
        }, t.prototype.render = function() {
            return null
        }, t
    })(i.Component);
    t.Portal = r
}), define("spectrum/positioned_portal", ["require", "exports", "tslib", "spectrum/positioned_portal/positioned_portal", "spectrum/positioned_portal/utils"], function(e, t, n, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(o, t), n.__exportStar(i, t)
}), define("spectrum/positioned_portal/positioned_portal", ["require", "exports", "tslib", "tslib", "react", "spectrum/positioned_portal/utils", "spectrum/portal"], function(e, t, n, o, i, s, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), i = n.__importStar(i);
    var l = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleMouseOver = n.handleMouseOver.bind(n), n.handleMouseOut = n.handleMouseOut.bind(n), n.handleOnFocus = n.handleOnFocus.bind(n), n.handleOnBlur = n.handleOnBlur.bind(n), n.handleClick = n.handleClick.bind(n), n.closePortal = n.closePortal.bind(n), n.handleKeyEvent = n.handleKeyEvent.bind(n), n.handleScrollEvent = n.handleScrollEvent.bind(n), n.state = {
                isShown: !!t.isShowInitially
            }, n
        }
        return o.__extends(t, e), t.prototype.componentDidMount = function() {
            var e = this;
            this.state.isShown && this.portalInstance.mountPortal(function() {
                e.resolvePortalPosition()
            })
        }, t.prototype.componentDidUpdate = function() {
            var e = this;
            this.state.isShown && this.portalInstance ? (this.mountListeners(), this.props.onWillShow && this.props.onWillShow(), this.portalInstance.mountPortal(function() {
                e.props.onDidShow && e.props.onDidShow(), e.resolvePortalPosition()
            })) : this.portalInstance && (this.unMountListeners(), this.props.onWillClose && this.props.onWillClose(), this.portalInstance.unMountPortal(), this.wrapperElementRef = null)
        }, t.prototype.componentWillUnmount = function() {
            this.portalInstance && this.portalInstance.unMountPortal()
        }, t.prototype.mountListeners = function() {
            document.addEventListener("keydown", this.handleKeyEvent, !1), document.addEventListener("scroll", this.handleScrollEvent, !1)
        }, t.prototype.unMountListeners = function() {
            document.removeEventListener("keydown", this.handleKeyEvent, !1), document.removeEventListener("scroll", this.handleScrollEvent, !1)
        }, t.prototype.handleOnFocus = function(e) {
            this.props.showOnClick || this.showPortal()
        }, t.prototype.handleOnBlur = function(e) {
            this.props.closeOnBlur && this.closePortal()
        }, t.prototype.handleMouseOver = function(e) {
            this.props.showOnMouseMove && this.showPortal()
        }, t.prototype.handleMouseOut = function(e) {
            this.props.showOnMouseMove && this.hidePortal()
        }, t.prototype.handleClick = function(e) {
            this.props.showOnClick && this.showPortal()
        }, t.prototype.handleKeyEvent = function(e) {
            27 === e.keyCode && this.closePortal()
        }, t.prototype.handleScrollEvent = function() {
            this.state.isShown && this.resolvePortalPosition()
        }, t.prototype.closePortal = function() {
            this.hidePortal(), this.props.onDidClose && this.props.onDidClose()
        }, t.prototype.showPortal = function() {
            this.setState({
                isShown: !0
            })
        }, t.prototype.hidePortal = function() {
            this.setState({
                isShown: !1
            })
        }, t.prototype.resolvePortalPosition = function() {
            if (this.portalInstance && this.wrapperElementRef) {
                var e = this.wrapperElementRef.childElementCount < 2 && this.wrapperElementRef.firstElementChild || this.wrapperElementRef,
                    t = s.calculatePosition(e, this.portalInstance.portalContentElementRef, this.props.positioning || "above", this.props.positionOffset);
                this.portalInstance.portalContentElementRef.style.top = t.top + "px", this.portalInstance.portalContentElementRef.style.left = t.left + "px"
            }
        }, t.prototype.render = function() {
            var e = this;
            return i.createElement("div", {
                "aria-describedby": this.props.id,
                onMouseOver: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
                onFocusCapture: this.handleOnFocus,
                onBlur: this.handleOnBlur,
                onClick: this.handleClick,
                className: this.props.wrapperClassName ? this.props.wrapperClassName : "mc-positioned-portal-wrapper",
                ref: function(t) {
                    return e.wrapperElementRef = t
                }
            }, i.createElement(r.Portal, {
                ref: function(t) {
                    return e.portalInstance = t
                },
                className: "mc-positioned-portal-content",
                parentElement: this.props.portalParentElement
            }, this.props.renderContent && this.props.renderContent() || null), this.props.children)
        }, t
    })(i.Component);
    t.PositionedPortal = l
}), define("spectrum/positioned_portal/utils", ["require", "exports"], function(e, t) {
    "use strict";

    function n(e, t, n, o) {
        void 0 === o && (o = 0);
        var i = {
                top: 0,
                left: 0
            },
            s = e.getBoundingClientRect(),
            r = t.getBoundingClientRect();
        switch (n) {
            case "below":
                i = {
                    top: s.top + s.height + o,
                    left: s.left + s.width / 2 - r.width / 2
                };
                break;
            case "left":
                i = {
                    top: s.top + s.height / 2 - r.height / 2,
                    left: s.left - r.width - o
                };
                break;
            case "right":
                i = {
                    top: s.top + s.height / 2 - r.height / 2,
                    left: s.left + s.width + o
                };
                break;
            case "above":
                i = {
                    top: s.top - r.height - o,
                    left: s.left + s.width / 2 - r.width / 2
                }
        }
        return i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.calculatePosition = n
}), define("spectrum/suggestions_list", ["require", "exports", "tslib", "spectrum/suggestions_list/suggestions_list"], function(e, t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(o, t)
}), define("spectrum/suggestions_list/suggestions_list", ["require", "exports", "tslib", "tslib", "classnames", "react", "react-dom", "spectrum/culled_list"], function(e, t, n, o, i, s, r, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), i = n.__importDefault(i), s = n.__importStar(s), r = n.__importStar(r);
    var a = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.requestedNextPage = !1, n.updatedFromNextPage = !1, n.renderSuggestionRow = function(e, t, o) {
                var r = n.props,
                    l = r.selectedIndex,
                    a = void 0 === l ? 0 : l,
                    p = r.listItemHeight,
                    u = void 0 === p ? 64 : p,
                    c = Array.isArray(u) ? u[t] : u,
                    d = t === a ? i.default("mc-suggestions-list-suggestion", "selected") : i.default("mc-suggestions-list-suggestion");
                return s.createElement("li", {
                    onMouseDown: function(e) {
                        return e.preventDefault()
                    },
                    onClick: function() {
                        return n.props.onSelect(e, t)
                    },
                    className: d,
                    style: {
                        position: "absolute",
                        top: o,
                        height: c
                    }
                }, n.props.renderSuggestion(e))
            }, n.onRangeInView = function(e, t) {
                var o = n.props,
                    i = o.onNextPageRequested,
                    s = o.suggestionsBuffer,
                    r = void 0 === s ? 10 : s;
                o.suggestions.length - 1 - t <= r && !n.requestedNextPage && i && (n.updatedFromNextPage = !0, i(), n.requestedNextPage = !0)
            }, n.cachedSuggestions = t.suggestions, n
        }
        return o.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
            var t = this.props.suggestions;
            this.cachedSuggestions = e.suggestions, t.length !== e.suggestions.length && (this.requestedNextPage = !1);
            var n = t !== e.suggestions,
                o = this.props.selectedIndex !== e.selectedIndex;
            !n && o && (this.cachedSuggestions = this.cachedSuggestions.slice())
        }, t.prototype.componentDidUpdate = function() {
            if (this.culledListInstance) {
                var e = r.findDOMNode(this.culledListInstance);
                if (e instanceof Element) {
                    var t = this.props,
                        n = t.listItemHeight,
                        o = void 0 === n ? 64 : n,
                        i = t.selectedIndex,
                        s = void 0 === i ? 0 : i,
                        l = 0,
                        a = 0;
                    if (Array.isArray(o)) {
                        for (var p = 0; p < s; p++) l += o[p];
                        a = l + o[s]
                    } else l = o * s, a = o * (s + 1);
                    var u = a - (e.scrollTop + this.props.height);
                    u > 0 && (e.scrollTop += u);
                    var c = e.scrollTop - l;
                    this.updatedFromNextPage || c > 0 && (e.scrollTop = e.scrollTop - c)
                }
            }
            this.updatedFromNextPage = !1
        }, t.prototype.getRenderHeightForList = function() {
            var e = this.props,
                t = e.suggestions,
                n = e.height,
                o = e.listItemHeight,
                i = void 0 === o ? 64 : o;
            if (0 === t.length) return 0;
            var s = 0;
            if (Array.isArray(i))
                for (var r = 0, l = i; r < l.length; r++) {
                    var a = l[r];
                    if (s += a, s >= n) break
                } else s = i * t.length;
            return Math.min(s, n)
        }, t.prototype.render = function() {
            var e = this,
                t = this.props,
                n = t.listItemHeight,
                o = void 0 === n ? 64 : n,
                r = t.suggestionsBuffer,
                a = void 0 === r ? 10 : r,
                p = t.scrollThreshold,
                u = void 0 === p ? 1 : p,
                c = t.className,
                d = i.default("mc-suggestions-list", c);
            return s.createElement("div", {
                className: d
            }, s.createElement(l.CulledList, {
                ref: function(t) {
                    return e.culledListInstance = t
                },
                className: "mc-suggestions-list-culled-list",
                items: this.cachedSuggestions,
                listItemHeight: o,
                shouldUseWindowAsScrollContainer: !1,
                onRangeInView: this.onRangeInView,
                renderRow: this.renderSuggestionRow,
                scrollThreshold: u,
                itemBuffer: a,
                viewportHeight: this.getRenderHeightForList()
            }))
        }, t
    })(s.Component);
    t.SuggestionsList = a
}), define("spectrum/toggle", ["require", "exports", "tslib", "spectrum/toggle/toggle"], function(e, t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(o, t)
}), define("spectrum/toggle/toggle", ["require", "exports", "tslib", "tslib", "classnames", "react"], function(e, t, n, o, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), i = n.__importDefault(i), s = n.__importStar(s);
    var r = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleChange = function(e) {
                t.props.onCheckedChange && t.props.onCheckedChange(e.currentTarget.checked, e)
            }, t
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.disabled,
                n = e.interactive,
                r = e.checked,
                l = e.className,
                a = e.ariaLabel,
                p = e.labelContent,
                u = (e.onCheckedChange, e.inputProps),
                c = o.__rest(e, ["disabled", "interactive", "checked", "className", "ariaLabel", "labelContent", "onCheckedChange", "inputProps"]),
                d = i.default(l, "mc-toggle", {
                    "mc-toggle-checked": r,
                    "mc-toggle-disabled": t
                }),
                h = i.default(u ? u.className : "", "mc-toggle-input", {
                    "mc-toggle-input-interactive": !!n
                });
            return s.createElement("label", o.__assign({
                className: d,
                "aria-label": a
            }, c), p, s.createElement("span", {
                className: "mc-toggle-input-wrapper"
            }, s.createElement("input", o.__assign({
                type: "checkbox"
            }, u, {
                className: h,
                checked: r,
                disabled: t,
                onChange: this.handleChange
            })), s.createElement("i", {
                className: "mc-toggle-track"
            })))
        }, t.defaultProps = {
            interactive: !0
        }, t
    })(s.Component);
    t.Toggle = r
}), define("spectrum/token", ["require", "exports", "tslib", "spectrum/token/token"], function(e, t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(o, t)
}), define("spectrum/token/token", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum/tooltip"], function(e, t, n, o, i, s, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), i = n.__importDefault(i), s = n.__importStar(s), t.Token = function(e) {
        var t, n, l = e.children,
            a = e.className,
            p = e.focused,
            u = void 0 !== p && p,
            c = e.onClose,
            d = e.onClick,
            h = e.onKeyDown,
            m = e.onFocus,
            f = e.onBlur,
            g = e.selected,
            v = void 0 !== g && g,
            _ = e.variant,
            y = void 0 === _ ? "default" : _,
            S = e.tabIndex,
            b = void 0 === S ? -1 : S,
            k = e.tooltipContent,
            E = o.__rest(e, ["children", "className", "focused", "onClose", "onClick", "onKeyDown", "onFocus", "onBlur", "selected", "variant", "tabIndex", "tooltipContent"]),
            w = i.default(a, {
                "mc-token": !0,
                "mc-token-error": "error" === y,
                "mc-token-focused": u,
                "mc-token-selected": v,
                "mc-token-warning": "warning" === y
            }),
            C = function(e) {
                var t = e.key;
                "Backspace" === t && c && (e.preventDefault(), c(e)), "Enter" === t && d && d(e), h && h(e)
            },
            P = function(e) {
                c && c(e)
            },
            O = function(e) {
                var n = e.target;
                t === n || t.contains(n) || d && d(e)
            },
            x = function(e) {
                var o = e.target;
                t === o || t.contains(o) || (m && m(e), n && n.showTooltip())
            },
            I = function(e) {
                f && f(e), n && n.hideTooltip()
            },
            T = e.id ? "tooltip-for-" + e.id : void 0,
            M = s.createElement("svg", {
                width: 13,
                height: 13,
                viewBox: "0 0 24 24",
                className: "mc-token-close-icon"
            }, s.createElement("title", null, "Delete Token"), s.createElement("path", {
                className: "mc-token-close-icon-x",
                d: "M12 10.586l-4.95-4.95L5.636 7.05l4.95\n        4.95-4.95 4.95 1.414 1.414 4.95-4.95\n        4.95 4.95 1.414-1.414-4.95-4.95\n        4.95-4.95-1.414-1.414z",
                fillRule: "evenodd"
            }));
        return s.createElement("div", o.__assign({
            className: w,
            onKeyDown: C,
            role: "button",
            onClick: O,
            onFocus: x,
            onBlur: I,
            tabIndex: b
        }, E), s.createElement(r.Tooltip, {
            tooltipContent: k,
            ref: function(e) {
                return n = e
            },
            id: T
        }, s.createElement("div", {
            className: "mc-token-inner-wrapper"
        }, s.createElement("div", {
            className: "mc-token-content"
        }, l), s.createElement("button", {
            className: "mc-token-close",
            onClick: P,
            tabIndex: -1,
            ref: function(e) {
                return t = e
            }
        }, M))))
    }, t.Token.displayName = "Token"
}), define("spectrum/tokenized_input", ["require", "exports", "tslib", "spectrum/tokenized_input/tokenized_input"], function(e, t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(o, t)
}), define("spectrum/tokenized_input/tokenized_input", ["require", "exports", "tslib", "classnames", "react"], function(e, t, n, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o), i = n.__importStar(i);
    var s = function(e) {
            var t = e.currentTarget.selectionStart,
                n = e.currentTarget.selectionEnd,
                o = e.key;
            if (0 === t && n === t && ("ArrowLeft" === o || "Backspace" === o)) {
                e.preventDefault();
                var i = e.currentTarget.previousElementSibling;
                i && i.focus()
            }
        },
        r = function(e) {
            var t = e.key;
            if ("ArrowRight" === t) {
                var n = e.currentTarget.nextElementSibling;
                n && n.focus()
            }
            if ("ArrowLeft" === t) {
                var o = e.currentTarget.previousElementSibling;
                o && o.focus()
            }
        };
    t.TokenizedInput = function(e) {
        var t = e.className,
            n = e.inputElement,
            s = e.inputProps,
            l = e.tokens,
            a = o.default(t, {
                "mc-tokenized-input": !0
            }),
            p = l.map(function(e) {
                return i.cloneElement(e, {
                    onKeyDown: r
                })
            });
        return i.createElement("div", {
            className: a
        }, p, i.cloneElement(n, s))
    }, t.TokenizedInput.defaultProps = {
        inputElement: i.createElement("input", {
            className: "mc-tokenized-input-input",
            "aria-label": "typeAhead input",
            onKeyDown: s,
            placeholder: "Type here"
        }),
        tokens: []
    }, t.TokenizedInput.displayName = "TokenizedInput"
}), define("spectrum/tooltip", ["require", "exports", "tslib", "spectrum/tooltip/tooltip"], function(e, t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(o, t)
}), define("spectrum/tooltip/tooltip", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum/positioned_portal", "spectrum/util/uuid_generator"], function(e, t, n, o, i, s, r, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), i = n.__importDefault(i), s = n.__importStar(s), t.TOOLTIP_OFFSETS = {
        above: 12,
        below: 12,
        left: 14,
        right: 14
    };
    var a = 0,
        p = (function(e) {
            function n(t) {
                var n = e.call(this, t) || this;
                return n.renderContent = n.renderContent.bind(n), n.handlePortalWillClose = n.handlePortalWillClose.bind(n), n.handlePortalWillShow = n.handlePortalWillShow.bind(n), n.handleAnimationEnd = n.handleAnimationEnd.bind(n), n.tooltipWasVisible = !1, n.showTooltip = n.showTooltip.bind(n), n.hideTooltip = n.hideTooltip.bind(n), n
            }
            return o.__extends(n, e), n.prototype.handleAnimationEnd = function(e) {
                "delayed-tooltip" === e.animationName && (a = Date.now(), this.tooltipWasVisible = !0, this.props.onDidShow && this.props.onDidShow())
            }, n.prototype.shouldShowDelayed = function() {
                return a < Date.now() - 3e3
            }, n.prototype.handlePortalWillShow = function() {
                document.addEventListener("animationend", this.handleAnimationEnd), this.props.onWillShow && this.props.onWillShow()
            }, n.prototype.handlePortalWillClose = function() {
                document.removeEventListener("animationend", this.handleAnimationEnd), this.tooltipWasVisible && (a = Date.now()), this.tooltipWasVisible = !1, this.props.onWillClose && this.props.onWillClose()
            }, n.prototype.showTooltip = function() {
                this.positionedPortalEl.showPortal()
            }, n.prototype.hideTooltip = function() {
                this.positionedPortalEl.hidePortal()
            }, n.prototype.renderContent = function() {
                if (this.props.tooltipContent) {
                    var e = this.props,
                        t = e.positioning,
                        n = void 0 === t ? "above" : t,
                        o = e.forceSingleLine,
                        r = void 0 !== o && o,
                        l = e.className,
                        a = this.shouldShowDelayed(),
                        p = i.default({
                            "mc-tooltip": !0,
                            "mc-tooltip-bottom": "below" === n,
                            "mc-tooltip-top": "above" === n,
                            "mc-tooltip-left": "left" === n,
                            "mc-tooltip-right": "right" === n,
                            "mc-tooltip-delay": a,
                            "mc-tooltip-no-delay": !a,
                            "mc-tooltip-single-line": r
                        }, l);
                    return s.createElement("div", {
                        className: p
                    }, s.createElement("div", {
                        className: "mc-tooltip-body"
                    }, this.props.tooltipContent))
                }
                return null
            }, n.prototype.render = function() {
                var e = this,
                    n = this.props,
                    i = n.renderContent,
                    a = void 0 === i ? this.renderContent : i,
                    p = n.showOnMouseMove,
                    u = void 0 === p || p,
                    c = n.closeOnBlur,
                    d = void 0 === c || c,
                    h = n.showOnClick,
                    m = void 0 !== h && h,
                    f = n.positioning,
                    g = void 0 === f ? "above" : f,
                    v = n.id,
                    _ = void 0 === v ? l.generateUUID("tooltip") : v,
                    y = (n.className, o.__rest(n, ["renderContent", "showOnMouseMove", "closeOnBlur", "showOnClick", "positioning", "id", "className"]));
                return s.createElement(r.PositionedPortal, o.__assign({
                    renderContent: a,
                    showOnMouseMove: u,
                    closeOnBlur: d,
                    showOnClick: m,
                    positioning: g,
                    positionOffset: t.TOOLTIP_OFFSETS[g],
                    id: _
                }, y, {
                    onWillShow: this.handlePortalWillShow,
                    onWillClose: this.handlePortalWillClose,
                    role: "tooltip",
                    ref: function(t) {
                        return e.positionedPortalEl = t
                    }
                }), this.props.children)
            }, n
        })(s.Component);
    t.Tooltip = p
}), define("spectrum/typeahead", ["require", "exports", "tslib", "spectrum/typeahead/typeahead"], function(e, t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(o, t)
}), define("spectrum/typeahead/typeahead", ["require", "exports", "tslib", "tslib", "classnames", "react", "spectrum/suggestions_list", "spectrum/token", "spectrum/tokenized_input"], function(e, t, n, o, i, s, r, l, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), i = n.__importDefault(i), s = n.__importStar(s), t.KeyCodes = {
        TAB: 9,
        ENTER: 13,
        SPACE: 32
    };
    var p = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                suggestionsListSelectedIndex: 0,
                selectedToken: {
                    content: null,
                    key: "",
                    variant: "default"
                },
                suggestionListVisible: !1,
                inputValue: ""
            }, t.handleOnClick = function(e) {
                t.setState({
                    selectedToken: e
                })
            }, t.handleOnTokenBlur = function() {
                t.setState({
                    selectedToken: {
                        content: null,
                        key: "",
                        variant: "default"
                    }
                })
            }, t.handleInputBlur = function() {
                t.setState({
                    suggestionListVisible: !1
                })
            }, t.handleInputFocus = function() {
                t.setState({
                    suggestionListVisible: !0
                })
            }, t.handleTokenFocus = function(e) {
                t.setState({
                    selectedToken: e
                })
            }, t.handleOnSelect = function(e, n) {
                t.props.onSelect(e, n, t.state.inputValue), t.setState({
                    inputValue: ""
                })
            }, t.handleKeyDown = function(e) {
                var n = t.props,
                    o = n.suggestions,
                    i = n.tokenizeKeyCodes,
                    s = t.state.suggestionsListSelectedIndex,
                    r = e.currentTarget.selectionStart,
                    l = e.currentTarget.selectionEnd,
                    a = e.key,
                    p = e.which;
                if (0 === r && l === r && ("ArrowLeft" === a || "Backspace" === a)) {
                    e.preventDefault();
                    var u = e.currentTarget.previousElementSibling;
                    u && u.focus()
                }(!i && "Enter" === a || i && i.indexOf(p) !== -1) && (o.length ? t.handleOnSelect(o[s], s) : t.handleOnSelect(null, -1), t.setState({
                    suggestionsListSelectedIndex: 0
                })), "ArrowUp" === a && t.setState({
                    suggestionsListSelectedIndex: Math.max(s - 1, 0)
                }), "ArrowDown" === a && t.setState({
                    suggestionsListSelectedIndex: Math.min(s + 1, o.length - 1)
                })
            }, t.handleOnChange = function(e) {
                var n = e.currentTarget.value;
                t.setState({
                    suggestionsListSelectedIndex: 0,
                    inputValue: n
                }), t.props.onChange(n)
            }, t.handleOnRemove = function(e, n) {
                t.setState({
                    selectedToken: {
                        content: null,
                        key: "",
                        variant: "default"
                    }
                }), t.props.onRemoveToken(n.content);
                var o = e.currentTarget.previousElementSibling,
                    i = e.currentTarget.nextElementSibling;
                o ? o.focus() : i && i.focus()
            }, t
        }
        return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
            0 === e.suggestions.length && this.setState({
                suggestionsListSelectedIndex: 0
            })
        }, t.prototype.renderTokens = function() {
            var e = this;
            return this.props.tokens.map(function(t) {
                return s.createElement(l.Token, o.__assign({}, e.props.tokenProps, {
                    key: t.key,
                    onClick: function() {
                        return e.handleOnClick(t)
                    },
                    onClose: function(n) {
                        return e.handleOnRemove(n, t)
                    },
                    onBlur: e.handleOnTokenBlur,
                    onFocus: function() {
                        return e.handleTokenFocus(t)
                    },
                    selected: t.key === e.state.selectedToken.key,
                    variant: t.variant
                }), e.props.renderTokenContent(t.content))
            })
        }, t.prototype.renderSuggestionsList = function() {
            var e = this;
            if (!this.state.suggestionListVisible) return null;
            var t = this.props,
                n = t.suggestions,
                o = t.renderSuggestion,
                i = t.height,
                l = t.onNextPageRequested,
                a = t.listItemHeight,
                p = this.state.suggestionsListSelectedIndex;
            return 0 === n.length ? null : s.createElement(r.SuggestionsList, {
                suggestions: n,
                onSelect: function(t, n) {
                    return e.handleOnSelect(t, n)
                },
                renderSuggestion: o,
                height: i,
                listItemHeight: a,
                selectedIndex: p,
                onNextPageRequested: l
            })
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                n = void 0 === t ? "" : t,
                r = e.inputElement,
                l = e.inputProps,
                p = this.state.inputValue;
            return s.createElement("div", {
                className: i.default("mc-typeahead", n)
            }, s.createElement(a.TokenizedInput, {
                inputElement: r,
                tokens: this.renderTokens(),
                inputProps: o.__assign({}, l, {
                    onFocus: this.handleInputFocus,
                    onBlur: this.handleInputBlur,
                    onChange: this.handleOnChange,
                    onKeyDown: this.handleKeyDown,
                    value: p
                })
            }), this.renderSuggestionsList())
        }, t
    })(s.Component);
    t.Typeahead = p
});
//# sourceMappingURL=pkg-spectrum.min.js-vflFH58X5.map