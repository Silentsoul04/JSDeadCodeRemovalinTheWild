define("modules/clean/auth_event_logger", ["require", "exports", "tslib", "modules/clean/api_v2/noauth_client", "modules/core/browser"], function(e, t, n, a, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), t.AuthEventLogger = {
        log_web_login_intent: function() {
            i({
                ".tag": "web_login_intent"
            })
        },
        log_web_signup_intent: function() {
            i({
                ".tag": "web_signup_intent"
            })
        },
        log_web_login_captcha: function() {
            i({
                ".tag": "web_login_captcha"
            })
        },
        log_web_signup_captcha: function() {
            i({
                ".tag": "web_signup_captcha"
            })
        }
    };
    var i = function(e) {
        (new a.NoAuthApiV2Client).ns("auth_logger").rpc("log_auth_event", {
            event_name: e,
            event_url: o.get_href()
        }, {})
    }
}), define("modules/clean/react/flag", ["require", "exports", "tslib", "external/classnames", "react", "external/react-dom-factories", "external/prop-types", "modules/clean/react/css"], function(e, t, n, a, o, i, r, _) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a), o = n.__importDefault(o), i = n.__importStar(i), r = n.__importStar(r);
    var s = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e, t, n = (e = {
                    "o-flag": !0
                }, e["o-flag--" + this.props.alignment] = this.props.alignment, e),
                o = (t = {
                    "o-flag__flex": !0
                }, t["u-pad-left-" + this.props.spacing] = this.props.spacing && this.props.leftAttachment, t["u-pad-right-" + this.props.spacing] = this.props.spacing && this.props.rightAttachment, t),
                r = this.props.leftAttachment ? i.div({
                    className: "o-flag__fix"
                }, this.props.leftAttachment) : void 0,
                _ = this.props.rightAttachment ? i.div({
                    className: "o-flag__fix"
                }, this.props.rightAttachment) : void 0;
            return i.div({
                className: a.default(n)
            }, r, i.div({
                className: a.default(o)
            }, this.props.children), _)
        }, t.displayName = "Flag", t.propTypes = {
            alignment: r.oneOf(["top", "middle", "bottom"]),
            leftAttachment: r.oneOfType([r.element, r.node]),
            rightAttachment: r.oneOfType([r.element, r.node]),
            spacing: r.oneOf(["xs", "s", "m", "l", "xl"]),
            children: r.oneOfType([r.element, r.node])
        }, t.defaultProps = {
            alignment: "middle"
        }, t
    })(o.default.Component);
    t.FlagWithoutCss = s;
    var l = _.requireCssWithComponent(s, ["/static/css/scooter/scooter-scoped-vflFpCY2P.css"]);
    t.Flag = l
}), define("modules/clean/react/paper/paper_log", ["require", "exports", "tslib", "modules/clean/ajax", "modules/core/browser"], function(e, t, n, a, o) {
    "use strict";

    function i(e, t, i, r) {
        if (void 0 === t && (t = {}), void 0 === r && (r = {}), t.pathname = o.get_pathname(), i) return void a.SilentBackgroundRequest(n.__assign({
            url: "/log/paper",
            data: {
                event_type: e,
                extra_params: JSON.stringify(t)
            },
            success: i,
            error: i
        }, r));
        a.SilentBackgroundBeaconRequest(n.__assign({
            url: "/log/paper",
            data: {
                event_type: e,
                extra_params: JSON.stringify(t)
            }
        }, r))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importStar(a), o = n.__importStar(o), t.PaperEventTypes = {
        VIDEO_PLAY: "main_video_play",
        VIDEO_PERCENT_PLAYED: "main_video_percent_played",
        CLICK: "click",
        CTA_CLICK: "cta_click",
        CTA_SEEN: "cta_seen",
        AUTH: "auth",
        FAQ_INTERACTION: "faq-interaction",
        IOS_BUTTON_CLICK: "ios_button_click",
        ANDROID_BUTTON_CLICK: "android_button_click",
        ROTATOR_NEXT_CLICK: "rotator_next_click",
        ROTATOR_PREVIOUS_CLICK: "rotator_previous_click",
        ROTATOR_DOT_CLICK: "rotator_dot_click",
        BALLET_VIDEO_PLAY: "ballet_video_play",
        LES_LUNES_VIDEO_PLAY: "les_lunes_video_play",
        LONELY_PLANET_VIDEO_PLAY: "lonely_planet_video_play"
    }, t.paperLog = i
});
//# sourceMappingURL=pkg-login-pages.min.js-vfli1raGL.map