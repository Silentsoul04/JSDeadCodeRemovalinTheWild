define("modules/clean/user_education/react/user_education_effect", ["require", "exports", "tslib", "react", "modules/clean/user_education/user_education_interface", "modules/clean/user_education/user_education_client"], function(e, t, n, i, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = n.__importDefault(i);
    var s = (function() {
        function e(e, t) {
            var n = this;
            this.start = function() {
                n.isRunning = !0;
                var e = n.thunk,
                    t = n.fps,
                    i = -1,
                    o = -1,
                    a = 1e3 / t,
                    s = function(e, t) {
                        var n = Date.now(),
                            i = n - (t || 0);
                        return i > a && (e(), t = n - i % a), o = requestAnimationFrame(function() {
                            return s(e, t)
                        })
                    };
                i = requestAnimationFrame(function() {
                    return s(e)
                }), n.cleanup = function() {
                    cancelAnimationFrame(i), cancelAnimationFrame(o)
                }
            }, this.stop = function() {
                n.isRunning = !1, n.cleanup()
            }, this.thunk = e, this.fps = t, this.cleanup = function() {}, this.isRunning = !1
        }
        return e
    })();
    t.RenderAtFps = s;
    var r = {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: -1e3,
            width: 0
        },
        c = (function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.isActive = !1, n.container = i.default.createRef(), n
            }
            return n.__extends(t, e), t.prototype.activateElementObserver = function() {
                this.isActive = !0, this.updateRect(!0), this.startRectUpdateLoop()
            }, t.prototype.deactivateElementObserver = function() {
                this.stopRectUpdateLoop(), this.isActive = !1, this.activeRect = r
            }, t.prototype.componentDidMount = function() {
                a.UEClient.on(o.UEEffectChannel, this.handleUpdate, this), a.UEClient.send(o.UEEffectChannel, {
                    type: o.UEEffectEventType.EffectReady,
                    containerName: this.props.containerName,
                    elementName: this.props.name
                }), a.UEClient.sendEvent(this.props.containerName, this.props.name + ".componentDidMount", {})
            }, t.prototype.componentDidUpdate = function() {
                this.updateRect(!0)
            }, t.prototype.shouldUpdateActiveRect = function(e) {
                return !this.activeRect || !(this.activeRect.top === e.top && this.activeRect.bottom === e.bottom && this.activeRect.left === e.left && this.activeRect.right === e.right && this.activeRect.width === e.width && this.activeRect.height === e.height)
            }, t.prototype.updateRect = function(e) {
                if (this.isActive && this.container && this.container.current instanceof Element) {
                    var t = this.container.current.getBoundingClientRect();
                    t && (e || this.shouldUpdateActiveRect(t)) && (this.activeRect = t, this.notifyRectUpdate())
                }
            }, t.prototype.notifyRectUpdate = function() {
                this.isActive && a.UEClient.send(o.UEEffectChannel, {
                    type: o.UEEffectEventType.UpdateRect,
                    containerName: this.props.containerName,
                    elementName: this.props.name,
                    rect: this.activeRect
                })
            }, t.prototype.componentWillUnmount = function() {
                this.isActive && (this.activeRect = n.__assign({}, r), this.notifyRectUpdate(), this.deactivateElementObserver()), a.UEClient.removeListener(o.UEEffectChannel, this.handleUpdate, this)
            }, t.prototype.startRectUpdateLoop = function() {
                this.sizeObserver || (this.sizeObserver = new s(this.updateRect.bind(this), t.RectUpdateFrequencyPerSec)), this.sizeObserver.isRunning || this.sizeObserver.start()
            }, t.prototype.stopRectUpdateLoop = function() {
                this.sizeObserver && this.sizeObserver.stop()
            }, t.prototype.handleUpdate = function(e) {
                e.containerName === this.props.containerName && e.elementName === this.props.name && (e.type === o.UEEffectEventType.Activate ? this.activateElementObserver() : e.type === o.UEEffectEventType.Deactivate && this.deactivateElementObserver())
            }, t.prototype.render = function() {
                var e = "ue-effect-container uee-" + this.props.containerName + "-" + this.props.name;
                return this.props.useSpan ? i.default.createElement("span", {
                    ref: this.container,
                    className: e
                }, this.props.children) : i.default.createElement("div", {
                    ref: this.container,
                    className: e
                }, this.props.children)
            }, t.displayName = "UserEducationEffect", t.RectUpdateFrequencyPerSec = 15, t
        })(i.default.Component);
    t.UserEducationEffect = c
}), define("modules/clean/user_education/user_education_client", ["require", "exports", "tslib", "external/eventemitter3", "modules/clean/user_education/user_education_interface"], function(e, t, n, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = n.__importDefault(i), window.ensemble && !window.ensemble.eventEmitter && (window.ensemble.eventEmitter = new i.default);
    var a = window.ensemble && window.ensemble.eventEmitter ? window.ensemble.eventEmitter : new i.default,
        s = (function() {
            function e() {
                this.controllerReady = !1, this.eventQueue = [], this.stepCallback = {}, this.globalCallbacks = [], this.on(o.UEStateChannel, this.handleUpdate, this)
            }
            return e.prototype.init = function() {
                this._sendEvent({
                    containerName: "UEClient",
                    name: o.UEEventName.Subscribe,
                    data: {}
                })
            }, e.prototype.on = function(e, t, n) {
                a.on(e, t, n)
            }, e.prototype.removeListener = function(e, t, n) {
                a.removeListener(e, t, n)
            }, e.prototype.send = function(e, t) {
                this._isUserEducationDisabled() || a.emit(e, t)
            }, e.prototype.sendEvent = function(e, t, n) {
                if (void 0 === n && (n = {}), !this._isUserEducationDisabled()) {
                    var i = {
                        containerName: e,
                        name: t,
                        data: n
                    };
                    this.controllerReady ? this._sendEvent(i) : this.eventQueue.push(i)
                }
            }, e.prototype._sendEvent = function(e) {
                var t = this;
                this._isUserEducationDisabled() || (this._shouldSendEventAsynchronously() ? setTimeout(function() {
                    return t.send(o.UEEventChannel, e)
                }, 0) : this.send(o.UEEventChannel, e))
            }, e.prototype._isUserEducationDisabled = function() {
                return !window.ensemble
            }, e.prototype._shouldSendEventAsynchronously = function() {
                return !0
            }, e.prototype._registerCallbackForEducationStep = function(e, t, n) {
                var i = this._getKeyForStepCallback(e, t);
                this.stepCallback[i] || (this.stepCallback[i] = []), this.stepCallback[i].push(n)
            }, e.prototype.registerCallbackForEducationStep = function(e, t, n) {
                this._registerCallbackForEducationStep(e, t, n), this.sendEvent("UEClientCallback", o.UEEventName.Subscribe)
            }, e.prototype.registerBulkCallbackForEducationStep = function(e, t) {
                var n = this;
                e.forEach(function(e) {
                    n._registerCallbackForEducationStep(e.moduleName, e.stepName, t)
                }), this.sendEvent("UEClientCallback", o.UEEventName.Subscribe)
            }, e.prototype.registerForAllEducationSteps = function(e) {
                this.globalCallbacks.push(e), this.sendEvent("UEClientCallback", o.UEEventName.Subscribe)
            }, e.prototype.unregisterCallbackForEducationStep = function(e, t, n) {
                this.unregisterBulkCallbackForEducationStep([{
                    moduleName: e,
                    stepName: t
                }], n)
            }, e.prototype.unregisterBulkCallbackForEducationStep = function(e, t) {
                var n = this;
                e.forEach(function(e) {
                    var i = n._getKeyForStepCallback(e.moduleName, e.stepName);
                    if (n.stepCallback[i]) {
                        n.stepCallback[i].indexOf(t) !== -1 && (n.stepCallback[i].splice(n.stepCallback[i].indexOf(t), 1), 0 === n.stepCallback[i].length && delete n.stepCallback[i])
                    }
                })
            }, e.prototype.unregisterForAllEducationSteps = function(e) {
                var t = this.globalCallbacks.indexOf(e);
                t !== -1 && this.globalCallbacks.splice(t, 1)
            }, e.prototype._getKeyForStepCallback = function(e, t) {
                return e + "." + t
            }, e.prototype.handleUpdate = function(e) {
                if (e.state !== o.UEStateType.Ready || this.controllerReady) {
                    if (e.state === o.UEStateType.ShowStep && e.step && e.step.name) {
                        var t = this._getKeyForStepCallback(e.moduleName, e.step.name);
                        if (this.stepCallback[t]) {
                            for (var n = 0, i = this.stepCallback[t]; n < i.length; n++) {
                                var a = i[n];
                                a()
                            }
                            delete this.stepCallback[t]
                        }
                        for (var s = 0, r = this.globalCallbacks; s < r.length; s++) {
                            var a = r[s];
                            a(e)
                        }
                    }
                } else
                    for (this.controllerReady = !0; this.eventQueue.length > 0;) {
                        var c = this.eventQueue.shift();
                        c && this._sendEvent(c)
                    }
            }, e.prototype.sendError = function(e) {
                this.send(o.UEErrorChannel, e)
            }, e
        })();
    t.UserEducationClient = s, t.UEClient = new s, t.UEClient.init()
}), define("modules/clean/user_education/user_education_interface", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.UEEventChannel = "UE.event", t.UEStateChannel = "UE.state", t.UEEffectChannel = "UE.effect", t.UEErrorChannel = "UE.error", t.UEEventName = {
        Subscribe: "Subscribe",
        NextClicked: "nextClicked",
        ExitOnboarding: "exitOnboarding",
        EffectResponded: "effectResponded",
        OverlayClicked: "overlayClicked"
    };
    (function(e) {
        e.Ready = "Ready", e.ShowStep = "ShowStep", e.Finished = "Finished"
    })(t.UEStateType || (t.UEStateType = {}));
    (function(e) {
        e.Activate = "Activate", e.Deactivate = "Deactivate", e.EffectReady = "EffectReady", e.UpdateRect = "UpdateRect"
    })(t.UEEffectEventType || (t.UEEffectEventType = {}));
    (function(e) {
        e.EFFECT_TARGET_NOT_FOUND = "effect_target_not_found", e.REDIRECT_FAILED = "redirect_failed"
    })(t.UEErrorType || (t.UEErrorType = {}));
    (function(e) {
        e[e.Spotlight = 0] = "Spotlight", e[e.Pulsar = 1] = "Pulsar", e[e.ToolTip = 2] = "ToolTip", e[e.Modal = 3] = "Modal"
    })(t.UEEffectType || (t.UEEffectType = {}));
    (function(e) {
        e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large", e[e.XLarge = 4] = "XLarge"
    })(t.UESpotlightSize || (t.UESpotlightSize = {})), t.UEPulsarSize = 24;
    (function(e) {
        e[e.Center = 1] = "Center", e[e.LeftCenter = 2] = "LeftCenter", e[e.RightCenter = 3] = "RightCenter"
    })(t.UEEffectPosition || (t.UEEffectPosition = {}));
    (function(e) {
        e[e.TopLeft = 1] = "TopLeft", e[e.TopRight = 2] = "TopRight", e[e.BottomLeft = 3] = "BottomLeft", e[e.BottomRight = 4] = "BottomRight"
    })(t.UEToolTipPointerPosition || (t.UEToolTipPointerPosition = {}))
});
//# sourceMappingURL=pkg-user-education-client.min.js-vflpr_Hqe.map