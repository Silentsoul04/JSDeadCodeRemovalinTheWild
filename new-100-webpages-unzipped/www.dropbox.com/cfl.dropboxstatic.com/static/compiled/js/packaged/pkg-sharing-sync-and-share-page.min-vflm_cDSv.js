define("modules/clean/avatar/overflow_count_pill", ["require", "exports", "tslib", "react", "external/react-dom-factories", "external/prop-types", "modules/clean/avatar/size", "modules/clean/avatar/style", "modules/clean/css", "modules/core/i18n"], function(e, t, n, r, a, s, o, i, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), a = n.__importStar(a), s = n.__importStar(s), l = n.__importStar(l);
    var u = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.componentDidMount = function() {
            return l.require_css("/static/css/scooter/scooter-scoped-vflFpCY2P.css")
        }, t.prototype.render = function() {
            var e = " +" + this.props.count + " ",
                t = c.ungettext("%(count)s more member", "%(count)s more members", this.props.count).format({
                    count: this.props.count
                });
            return null != this.props.onClick ? a.button({
                className: i.getClassName(this.props.dimension, ["overflow-pill c-avatar--meta u-unbutton"]),
                onClick: this.props.onClick
            }, a.span({
                "aria-hidden": !0
            }, e), a.span({
                className: "ax-visually-hidden"
            }, t)) : a.div({
                className: i.getClassName(this.props.dimension, ["overflow-pill c-avatar--meta"])
            }, a.span({
                "aria-hidden": !0
            }, e), a.span({
                className: "ax-visually-hidden"
            }, t))
        }, t.displayName = "OverflowCountPill", t.propTypes = {
            dimension: s.oneOf(o.VALID_AVATAR_DIMENSIONS).isRequired,
            count: s.number.isRequired,
            onClick: s.func
        }, t
    })(r.default.Component);
    t.default = u
}), define("modules/clean/sharing/ui_notifications_util", ["require", "exports", "tslib", "react", "modules/clean/em_string", "modules/clean/react_format", "modules/clean/react/snackbar", "modules/clean/sharing/constants", "modules/core/i18n"], function(e, t, n, r, a, s, o, i, l) {
    "use strict";

    function c(e) {
        return o.Snackbar.fail(e, "sharing-notification")
    }

    function u(e) {
        return o.Snackbar.generic(e, "sharing-notification")
    }

    function p(e) {
        return o.Snackbar.complete(e, "sharing-notification")
    }

    function m(e) {
        return s.reactFormat(_("Shared <st>%(folder_name)s</st>."), {
            st: r.default.createElement("strong", null),
            folder_name: a.Emstring.em_snippet(e, i.SNIPPET_SIZES.FILENAME)
        })
    }

    function d(e) {
        o.Snackbar.complete(m(e), "sharing-notification")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), l = n.__importStar(l);
    var _ = l.i18n_default_project("sharing")._;
    t.sharingNotificationError = c, t.sharingNotificationInfo = u, t.sharingNotificationSuccess = p, t.showInBandShareSuccessSnackbar = d
}), define("modules/clean/sharing/views/hover_close_button", ["require", "exports", "tslib", "external/classnames", "react", "external/prop-types", "modules/clean/react/sprite", "modules/core/i18n"], function(e, t, n, r, a, s, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), a = n.__importDefault(a), s = n.__importStar(s), i = n.__importStar(i);
    var l = i.i18n_default_project("sharing")._,
        c = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    hover: !1
                }, t
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = this,
                    t = l("Close Modal");
                return a.default.createElement("button", n.__assign({}, this.props, {
                    "aria-label": t,
                    className: r.default("c-borderless-button", this.props.className),
                    onMouseOut: function() {
                        return e.setState({
                            hover: !1
                        })
                    },
                    onMouseOver: function() {
                        return e.setState({
                            hover: !0
                        })
                    }
                }), a.default.createElement(o.Sprite, {
                    group: "web",
                    name: this.state.hover ? "xclose" : "xclose_light_gray",
                    alt: t
                }))
            }, t.displayName = "HoverCloseButton", t.propTypes = {
                className: s.string
            }, t
        })(a.default.Component);
    t.default = c
}), define("spectrum-sharing/components/sharing_modal_banner", ["require", "exports", "tslib", "spectrum-sharing/components/sharing_modal_banner/sharing_modal_banner"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.__exportStar(r, t)
}), define("spectrum-sharing/components/sharing_modal_banner/sharing_modal_banner", ["require", "exports", "tslib", "classnames", "react"], function(e, t, n, r, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.typeClassName = function() {
            return "scl-sharing-modal-banner--" + this.props.type
        }, t.prototype.render = function() {
            var e, t = this.props,
                n = t.borderHidden,
                s = t.className,
                o = t.message,
                i = r("scl-sharing-modal-banner", this.typeClassName(), s, (e = {}, e["scl-sharing-modal-banner--bottom-border"] = !n, e));
            return a.createElement("div", {
                className: i
            }, o)
        }, t.defaultProps = {
            type: "default"
        }, t
    })(a.PureComponent);
    t.SharingModalBanner = s
});
//# sourceMappingURL=pkg-sharing-sync-and-share-page.min.js-vflRHUve6.map