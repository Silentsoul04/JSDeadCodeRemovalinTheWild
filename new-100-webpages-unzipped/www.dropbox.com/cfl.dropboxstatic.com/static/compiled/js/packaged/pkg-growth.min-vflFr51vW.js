define("modules/clean/growth/gating", ["require", "exports", "tslib", "modules/clean/ajax"], function(t, e, r, n) {
    "use strict";

    function i(t, e, i) {
        return void 0 === i && (i = {}), Promise.resolve().then(function() {
            return n.SilentBackgroundRequest(r.__assign({
                url: "/growth/gating_check",
                subject_user: t.id,
                data: {
                    experiment: e
                }
            }, i))
        }).then(function(t) {
            return JSON.parse(t)
        })
    }

    function o(t, e, r) {
        return void 0 === r && (r = {}), c(t, e, r, !0)
    }

    function c(t, r, n, o) {
        return void 0 === n && (n = {}), void 0 === o && (o = !1), o ? e.gatingCache.has(t.id, r) ? e.gatingCache.get(t.id, r) : e.gatingCache.set(t.id, r, i(t, r, n)) : i(t, r, n)
    }

    function s(t, r, n) {
        return void 0 === n && (n = {}), "personal" !== t.role || t.paid ? Promise.resolve(e.inactiveGatingStatus) : c(t, r, n)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    (function(t) {
        t.BASIC = "BASIC", t.PLUS = "PLUS", t.PRO = "PRO"
    })(e.GatingSku || (e.GatingSku = {})), e.inactiveGatingStatus = {
        is_active: !1,
        variant: "OFF"
    };
    var a = (function() {
        function t() {
            this.cache = {}
        }
        return t.prototype.clear = function() {
            this.cache = {}
        }, t.prototype.has = function(t, e) {
            return !!this.get(t, e)
        }, t.prototype.get = function(t, e) {
            return this.cache[t] && this.cache[t][e]
        }, t.prototype.set = function(t, e, r) {
            return this.cache[t] = this.cache[t] || {}, this.cache[t][e] = r, r
        }, t
    })();
    e.gatingCache = new a, e.gatingRequest = i, e.growthPrecacheGating = o, e.growthCheckGating = c, e.growthCheckBasicUserGating = s
}), define("modules/clean/growth/user_action/tracker", ["require", "exports", "tslib", "react", "hoist-non-react-statics", "modules/clean/api_v2/user_client", "modules/clean/react/helpers"], function(t, e, r, n, i, o, c) {
    "use strict";

    function s(t, e) {
        return function(o) {
            var s = (function(i) {
                function s(e) {
                    var r = i.call(this, e) || this;
                    return r.tracker = new a(r.props.user.id, {
                        project: t
                    }), r.track = r.tracker.track.bind(r.tracker), r
                }
                return r.__extends(s, i), s.prototype.componentDidMount = function() {
                    e && e.mount && this.tracker.track(e.mount)
                }, s.prototype.componentWillUnmount = function() {
                    e && e.unmount && this.tracker.track(e.unmount)
                }, s.prototype.render = function() {
                    return n.createElement(o, r.__assign({
                        track: this.track,
                        tracker: this.tracker
                    }, this.props))
                }, s.displayName = "WithGrowthTracking(" + c.getDisplayName(o), s
            })(n.Component);
            return i.default(s, o)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n = r.__importStar(n), i = r.__importDefault(i);
    var a = (function() {
        function t(t, e) {
            this.userId = t, this.timers = {}, e && e.project && (this.project = e.project), e && e.client ? this.client = e.client.ns("growth") : this.client = (new o.UserApiV2Client).ns("growth")
        }
        return t.prototype.startTimer = function(t) {
            this.timers[t] = {
                start: Date.now(),
                end: 0
            }
        }, t.prototype.stopTimer = function(t) {
            this.timers[t] && !this.timers[t].end && (this.timers[t].end = Date.now())
        }, t.prototype.clearTimer = function(t) {
            delete this.timers[t]
        }, t.prototype.getDuration = function(t) {
            return this.timers[t] ? this.timers[t].end ? this.timers[t].end - this.timers[t].start : Date.now() - this.timers[t].start : 0
        }, t.prototype.track = function(t, e) {
            return void 0 === e && (e = {}), this.client.rpc("track_user_action", {
                project: this.project,
                action: t,
                duration: this.getDuration(t),
                extra: JSON.stringify(e.extra || {}),
                endpoint: e.endpoint || void 0
            }, {
                subjectUserId: this.userId
            })
        }, t
    })();
    e.GrowthUserActionTracker = a, e.withGrowthTracking = s
});
//# sourceMappingURL=pkg-growth.min.js-vflGbYwQR.map