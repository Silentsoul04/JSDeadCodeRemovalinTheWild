define("modules/clean/react/async/loadable", ["require", "exports", "tslib", "react", "modules/core/cancelable_promise"], function(e, t, n, o, r) {
    "use strict";

    function a(e) {
        var t = e.loader,
            a = e.loading;
        return (function(e) {
            function i() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    loaded: !1
                }, t
            }
            return n.__extends(i, e), i.prototype.componentDidMount = function() {
                return n.__awaiter(this, void 0, void 0, function() {
                    var e = this;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return this.loader = r.makeCancelable(t()), [4, this.loader.then(function(t) {
                                    e.loadedComponent = t, e.setState({
                                        loaded: !0
                                    })
                                })];
                            case 1:
                                return n.sent(), [2]
                        }
                    })
                })
            }, i.prototype.componentWillUnmount = function() {
                this.loader.cancel()
            }, i.prototype.render = function() {
                return this.state.loaded && null != this.loadedComponent ? o.default.createElement(this.loadedComponent, this.props) : a ? "function" == typeof a ? a(this.props) : a : null
            }, i.displayName = "LoadableComponent", i
        })(o.default.Component)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o), t.Loadable = a
}), define("modules/core/cancelable_promise", ["require", "exports"], function(e, t) {
    "use strict";

    function n(e) {
        var t = !1,
            n = new Promise(function(n, o) {
                e.then(function(e) {
                    return t ? o({
                        isCanceled: !0
                    }) : n(e)
                }, function(e) {
                    return o(t ? {
                        isCanceled: !0
                    } : e)
                })
            });
        return n.cancel = function() {
            t = !0
        }, n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.makeCancelable = n
});
//# sourceMappingURL=pkg-loadable.min.js-vflW5kDYe.map