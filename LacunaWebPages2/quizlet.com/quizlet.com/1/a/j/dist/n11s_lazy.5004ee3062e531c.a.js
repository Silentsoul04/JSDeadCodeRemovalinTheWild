(window.QJP = window.QJP || []).push([
    [74], {
        WKau: function(t, n, i) {
            "use strict";
            i.r(n);
            var e, o = i("Vg22"),
                a = i("YDJX"),
                r = i("WHvC"),
                c = i("JPcv"),
                s = i.n(c),
                u = i("q1tI"),
                l = i.n(u),
                p = i("VbXa"),
                d = i.n(p),
                f = i("og3H"),
                m = i("goAZ"),
                h = i("Ilu8"),
                N = i("PHlw"),
                E = i("zK28"),
                A = i("bBvF").default,
                C = ["Upgrade/success"],
                v = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    d()(n, t);
                    var i = n.prototype;
                    return i.componentDidMount = function() {
                        var t; - 1 === C.indexOf(E.a.actionString) && E.a.didJustUpgrade && this.props.user && this.props.user.type !== f.Eb.NO_UPGRADE && (this.props.user.type === f.Eb.GO ? t = A("en-US", "Quizlet Go") : this.props.user.type === f.Eb.PLUS ? t = A("en-US", "Quizlet Plus") : this.props.user.type === f.Eb.TEACHER && (t = A("en-US", "Quizlet Teacher")), Object(h.a)({
                            duration: m.a.DEFAULT,
                            icon: "check",
                            isDismissible: !1,
                            message: A("en-US", "You have successfully subscribed to {upgradeType}!", {
                                upgradeType: t
                            })
                        }))
                    }, i.render = function() {
                        return null
                    }, n
                }(u.Component),
                I = Object(o.connect)(function(t) {
                    var n = t.get("core"),
                        i = n ? Object(N.k)(n) : null;
                    return {
                        user: i ? i.toJS() : null
                    }
                })(v),
                O = i("mEm4"),
                y = Object(O.a)("NOTIFICATIONS", {
                    ADD_NOTIFICATION: null,
                    REMOVE_NOTIFICATION: null
                }),
                T = ((e = {})[y.ADD_NOTIFICATION] = function(t, n) {
                    var i = n.payload;
                    return t.update("notifications", function(t) {
                        return t.push(i)
                    })
                }, e[y.REMOVE_NOTIFICATION] = function(t, n) {
                    var i = n.payload;
                    return t.update("notifications", function(t) {
                        return t.filter(function(t) {
                            return !(i.id && i.id === t.get("id") || i.type && i.type === t.get("type"))
                        })
                    })
                }, e),
                b = Object(a.createAction)(y.ADD_NOTIFICATION, function(t) {
                    return s.a.Map({
                        priority: m.b.DEFAULT,
                        duration: m.a.DEFAULT
                    }).merge(t).set("id", Math.random().toString())
                }),
                g = Object(a.createAction)(y.REMOVE_NOTIFICATION),
                U = i("pVnL"),
                L = i.n(U),
                P = i("pn57"),
                D = i("sfiu"),
                H = i("JxFz"),
                S = i("bvRJ"),
                _ = i("a08m"),
                F = function(t) {
                    function n(n) {
                        var i;
                        return (i = t.call(this, n) || this).handlePrimaryClickAction = function(t) {
                            i.props.onClickPrimaryAction && i.props.onClickPrimaryAction(t), i.handleHide()
                        }, i.handleSecondaryClickAction = function(t) {
                            i.props.onClickSecondaryAction && i.props.onClickSecondaryAction(t), i.handleHide()
                        }, i.handleClose = function() {
                            i.props.onClose && i.props.onClose(), i.handleHide()
                        }, i.handleHide = function() {
                            i.props.onHide && i.props.onHide({
                                id: i.props.id
                            })
                        }, i.props.duration > 0 && (i.autoHideTimeout = window.setTimeout(i.handleHide, i.props.duration)), i
                    }
                    d()(n, t);
                    var i = n.prototype;
                    return i.componentWillUnmount = function() {
                        clearTimeout(this.autoHideTimeout)
                    }, i.renderActions = function() {
                        return l.a.createElement("div", {
                            className: "UINotification-actions"
                        }, this.props.primaryActionLabel ? l.a.createElement("div", {
                            className: "UINotification-primaryAction"
                        }, l.a.createElement(H.a, {
                            onClick: this.handlePrimaryClickAction
                        }, this.props.primaryActionLabel)) : null, this.props.secondaryActionLabel ? l.a.createElement("div", {
                            className: "UINotification-secondaryAction"
                        }, l.a.createElement(_.a, {
                            onClick: this.handleSecondaryClickAction
                        }, this.props.secondaryActionLabel)) : null)
                    }, i.render = function() {
                        return l.a.createElement("div", {
                            className: "UINotification"
                        }, this.props.icon ? l.a.createElement("div", {
                            className: "UINotification-iconWrap"
                        }, l.a.createElement(S.a, {
                            className: "UINotification-icon",
                            icon: this.props.icon
                        })) : null, l.a.createElement("div", {
                            className: "UINotification-content"
                        }, l.a.createElement("div", {
                            className: "UINotification-message"
                        }, this.props.message), this.renderActions()), this.props.isDismissible ? l.a.createElement("div", {
                            className: "UINotification-hideIconWrap",
                            onClick: this.handleClose
                        }, l.a.createElement(S.a, {
                            className: "UINotification-hideIcon",
                            icon: "x-inverse"
                        })) : null)
                    }, n
                }(l.a.PureComponent);
            F.defaultProps = {
                isDismissible: !1
            };
            var R = i("FdmV"),
                k = function(t) {
                    function n() {
                        for (var n, i = arguments.length, e = new Array(i), o = 0; o < i; o++) e[o] = arguments[o];
                        return (n = t.call.apply(t, [this].concat(e)) || this).handleHide = function(t) {
                            var i = t.id;
                            n.props.actions.removeNotification({
                                id: i
                            })
                        }, n.handleClose = function() {
                            if (n.props.notification) {
                                var t = n.props.notification.get("onClose");
                                t && t()
                            }
                        }, n
                    }
                    d()(n, t);
                    var i = n.prototype;
                    return i.componentDidMount = function() {
                        E.a.NotificationContainer = {
                            addNotification: this.props.actions.addNotification,
                            removeNotification: this.props.actions.removeNotification
                        }, QLoad("Quizlet.NotificationContainer")
                    }, i.renderNotification = function() {
                        return l.a.createElement(F, L()({}, this.props.notification.toJS(), {
                            key: this.props.notification.get("id"),
                            onClose: this.handleClose,
                            onHide: this.handleHide
                        }))
                    }, i.render = function() {
                        return l.a.createElement("div", {
                            className: "NotificationContainer"
                        }, l.a.createElement(D.a, {
                            transitionEnterTimeout: 600,
                            transitionLeaveTimeout: 300,
                            transitionName: "NotificationContainer-notification-"
                        }, this.props.notification ? [this.renderNotification()] : []))
                    }, n
                }(u.PureComponent),
                j = Object(R.a)("notifications", {
                    notification: function(t) {
                        return t.get("notifications").reduce(function(t, n) {
                            return n.get("priority") > t.get("priority") ? n : t
                        })
                    }
                }),
                w = Object(o.connect)(j, function(t) {
                    return {
                        actions: Object(P.bindActionCreators)({
                            addNotification: b,
                            removeNotification: g
                        }, t)
                    }
                })(k),
                M = i("xhj2");
            i.d(n, "default", function() {
                return G
            });
            var J = function() {
                return s.a.Map({
                    notifications: s.a.List()
                })
            };

            function G() {
                var t = Object(a.handleActions)(T, J());
                M.a.register({
                    notifications: t
                });
                var n = window.document.createElement("div");
                window.document.body.appendChild(n), Object(r.a)(l.a.createElement(o.Provider, {
                    store: M.b
                }, l.a.createElement(u.Fragment, null, l.a.createElement(w, null), l.a.createElement(I, null))), n)
            }
        },
        goAZ: function(t, n, i) {
            "use strict";
            i.d(n, "a", function() {
                return o
            }), i.d(n, "b", function() {
                return a
            }), i.d(n, "c", function() {
                return r
            });
            var e = i("mEm4"),
                o = {
                    DEFAULT: 5e3,
                    LONG: 2e4,
                    PERSISTENT: 0
                },
                a = {
                    LOW: 0,
                    DEFAULT: 100,
                    MEDIUM: 500,
                    HIGH: 1e3
                },
                r = Object(e.a)("TYPE", {
                    CREATE_SET__SYNC_ERROR: null,
                    GLOBAL__BRAZIL_PROMPT: null,
                    GLOBAL__TEACHER_PROMPT: null
                })
        }
    }
]);
//# sourceMappingURL=n11s_lazy.5004ee3062e531c.a.js.map