(window.webpackJsonp = window.webpackJsonp || []).push([
    ["b-e24174c948c4d0e8bce37c4717cc3761"], {
        "+cqQ": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = Object.assign(i, {
                kind: function() {
                    var e = {};
                    return function(t) {
                        return e[t] || (e[t] = i())
                    }
                }
            });

            function i() {
                var e = [],
                    t = function() {
                        var e = this,
                            t = arguments;
                        if ("function" != typeof t[0]) {
                            for (var n = e.length, r = !1, i = 0; i < n; i++) !0 === e[i].apply(null, t) && (r = !0);
                            return r
                        }
                        Array.prototype.slice.call(t).forEach(function(t) {
                            return e.push(t)
                        })
                    }.bind(e);
                return t.off = function(e) {
                    e ? function(e, t) {
                        for (;;) {
                            var n = e.indexOf(t);
                            if (!(n >= 0)) break;
                            e.splice(n, 1)
                        }
                    }(this, e) : this.length = 0
                }.bind(e), t._fns = e, t
            }
            t.default = r, window.befall = i
        },
        "1By4": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("2mXy");

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var o = {
                html: s,
                render: function(e) {
                    if (g(e)) return e;
                    return s(e)
                },
                wrap: function(e) {
                    return e ? {
                        __raw__: e
                    } : null
                },
                handle: function() {
                    var e = E(arguments[0]),
                        t = Array.prototype.slice.call(arguments, 1),
                        n = e[0];
                    if (!n) return;
                    g(n) || console.warn('Invalid handler "'.concat(n, '"'));
                    var r = P(window, n);
                    if (!w(r)) return void console.warn("`".concat(n, "` is not a function"));
                    r.apply(null, e.slice(1).concat(t))
                },
                handle2: function(e, t) {
                    var n = Array.prototype.slice.call(arguments, 2),
                        r = e[0];
                    if (!r) return;
                    g(r) || console.warn('Invalid handler "'.concat(r, '"'));
                    var i = P(window, r);
                    if (!w(i)) return void console.warn("`".concat(r, "` is not a function"));
                    for (var o = e.slice(1), a = 0, u = o.length; a < u; a++)
                        if ("event" === o[a]) {
                            o[a] = t;
                            break
                        }
                    i.apply(null, o.concat(n))
                },
                elem: function(e) {
                    return e ? ceFromString(s(e)) : ""
                },
                preact: function(e, t) {
                    return function e(t, n) {
                        return function(n) {
                            var o = w(t) ? t(n) : t;
                            if (o) {
                                if ("string" == typeof o || "number" == typeof o) return o;
                                o.children = o.inner, delete o.inner, m(o.children) ? (o.children = flatArray(o.children), o.children = o.children.map(function(t) {
                                    return e(t)()
                                })) : o.children && o.children.inner && (o.children.children = o.children.inner, delete o.children.inner), o && o.children && "string" == typeof o.children.children && (o.children = (0, r.createElement)(o.children.tag || "div", o.children.props, o.children.children));
                                var a = i({}, n, o, {
                                    className: o.class || o.className
                                });
                                return delete a.class, m(a.className) && (a.className = flatArray(a.className).filter(function(e) {
                                    return !!e
                                }), a.className = a.className.join(",")), (0, r.createElement)(o.tag || "div", a, o.children)
                            }
                        }
                    }(function(t) {
                        return e(t)
                    })(t)
                },
                hydrate: function(e, t, n) {
                    return (0, r.hydrate)((0, r.createElement)(e, t), n)
                },
                class: f
            };
            t.default = o;
            var a = ["tag", "inner", "attrs", "innerHTML", "outerHTML"],
                u = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"],
                c = ["abort", "auxclick", "beforecopy", "beforecut", "beforepaste", "blur", "cancel", "canplay", "canplaythrough", "change", "click", "close", "contextmenu", "copy", "cuechange", "cut", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "error", "focus", "gotpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadeddata", "loadedmetadata", "loadstart", "lostpointercapture", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "paste", "pause", "play", "playing", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointermove", "pointerout", "pointerover", "pointerup", "progress", "ratechange", "reset", "resize", "scroll", "search", "seeked", "seeking", "select", "selectstart", "stalled", "submit", "suspend", "timeupdate", "toggle", "touchcancel", "touchend", "touchmove", "touchstart", "volumechange", "waiting", "wheel"].map(function(e) {
                    return "on".concat(e)
                });

            function s(e) {
                if (g(e)) return e ? {
                    __raw__: e
                } : null;
                if (m(e)) return e.map(s).join("");
                if (!y(e)) throw "Invalid input, object is expected";
                if ("outerHTML" in e) {
                    var t = e.outerHTML;
                    if (g(t)) return t;
                    if (_(t)) return t.toString();
                    if (t) throw "Invalid outerHTML";
                    return ""
                }
                var n = function(e) {
                        if ("tag" in e) {
                            var t = e.tag;
                            if (g(t) && /^[\w-]+$/.test(t)) return t;
                            throw "Invalid tag name"
                        }
                        if (b(e.href)) return "a";
                        return "div"
                    }(e),
                    r = function(e) {
                        if ("innerHTML" in e) {
                            var t = e.innerHTML;
                            if (g(t)) return t;
                            if (_(t)) return t.toString();
                            if (t) throw "Invalid innerHTML";
                            return ""
                        }
                        if ("inner" in e) return R(e.inner).map(l).join("");
                        return ""
                    }(e),
                    i = function(e) {
                        var t = "";
                        y(e.attrs) && Object.assign(e, e.attrs);
                        for (var n in e)
                            if (!v(n)) {
                                var r = e[n];
                                "class" === n ? r = f(r) : (a = n, c.includes(a.toLowerCase()) && (m(r) || g(o = r) && /^[\w.]+$/.test(o)) ? r = d(r) : r && (r = h(r)));
                                var i = S(n);
                                !0 === r ? t += " ".concat(i) : _(r) ? t += " ".concat(i, '="').concat(r, '"') : g(r) ? t += " ".concat(i, '="').concat(S(r), '"') : r && (r = r.__raw__ ? r.__raw__ : h(r)) && (t += " ".concat(i, '="').concat(r, '"'))
                            }
                        var o;
                        var a;
                        g(e.attrs) && (t += " ".concat(e.attrs.replace(/</g, "&lt;").replace(/>/g, "&gt;")));
                        return t
                    }(e);
                return function(e) {
                    return u.includes(e.toLowerCase())
                }(n) ? "<".concat(n).concat(i, " />") : "<".concat(n).concat(i, ">").concat(r, "</").concat(n, ">")
            }

            function l(e) {
                return _(e) ? e.toString() : g(e) ? S(e) : y(e) ? e.__raw__ ? e.__raw__ : s(e) : ""
            }

            function f(e) {
                return R(e).filter(b).join(" ").trim().replace(/\s+/g, " ")
            }

            function d(e) {
                if (!(e = E(e)).length) return null;
                var t = e[0];
                if (!g(t)) throw "Invalid handler";
                var n = e.slice(1).map(p).join(", ");
                return "".concat(t, "(").concat(n, ")")
            }

            function p(e) {
                return _(e) || "this" === e || "event" === e || void 0 === e ? e : S(JSON.stringify(e))
            }

            function h() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return e = "boolean" == typeof e ? e : _(e) ? e : g(e) ? S(e, !0) : m(e) ? e.__raw__ : S(JSON.stringify(e), !0)
            }

            function v(e) {
                return a.includes(e)
            }

            function _(e) {
                return "number" == typeof e && !isNaN(e)
            }

            function g(e) {
                return "string" == typeof e
            }

            function m(e) {
                return Array.isArray(e)
            }

            function y(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function w(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }

            function b(e) {
                return g(e) && e
            }

            function E(e) {
                return m(e) ? e : [e]
            }

            function S(e, t) {
                return t ? e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : (e = e.replace(/&(?!(#\d{0,4};|quot;|lt;|gt;|amp;))/g, "&amp;", e)).replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function R(e) {
                return m(e) ? function e(t) {
                    var n = [];
                    t.forEach(function(t) {
                        m(t) ? n = n.concat(e(t)) : n.push(t)
                    });
                    return n
                }(e) : [e]
            }

            function P(e, t) {
                for (var n = t.split("."), r = n.length, i = e, o = 0; o < r; o++) try {
                    i = i[n[o]]
                } catch (e) {
                    return
                }
                return i
            }
        },
        "2C1Z": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(n("TYsd")),
                i = o(n("z9sQ"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = function(e) {
                var t = e.class || e.mix;
                return r.default.html({
                    class: [t, i.default.class("Loading", {
                        white: e.white,
                        large: e.large
                    })],
                    inner: {
                        class: "Loading__items",
                        inner: [{
                            class: "Loading__item Loading__item_0"
                        }, {
                            class: "Loading__item Loading__item_1"
                        }, {
                            class: "Loading__item Loading__item_2"
                        }]
                    }
                })
            };
            t.default = a
        },
        "50sn": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = function() {
                if (!("fetch" in window)) return function() {};
                var e = ["standalone", "fullscreen", "minimal-ui"],
                    t = "#f8f9fa",
                    n = 128,
                    i = 48,
                    o = 32,
                    a = navigator.vendor && -1 !== navigator.vendor.indexOf("Apple");

                function u(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = c(e);
                    if ((r.drawImage(e, 0, 0), !n) && 255 == r.getImageData(0, 0, 1, 1).data[3]) return null;
                    return r.globalCompositeOperation = "destination-over", r.fillStyle = t, r.fillRect(0, 0, e.width, e.height), r.canvas.toDataURL()
                }

                function c() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            width: 1,
                            height: 1
                        },
                        t = e.width,
                        n = e.height,
                        r = document.createElement("canvas");
                    return r.width = t, r.height = n, r.getContext("2d")
                }
                return function() {
                    if (a) {
                        var s = document.head.querySelector('link[rel="manifest"]'),
                            l = s ? s.href : "",
                            f = function(e) {
                                for (var t = function(t) {
                                        var n = e[t];
                                        try {
                                            return new URL("", n), {
                                                v: function(e) {
                                                    return new URL(e, n).toString()
                                                }
                                            }
                                        } catch (e) {}
                                    }, n = 0; n < e.length; ++n) {
                                    var i = t(n);
                                    if ("object" === r(i)) return i.v
                                }
                                return function(e) {
                                    return e
                                }
                            }([l, window.location]);
                        Promise.resolve().then(function() {
                            if (!l) throw 'can\'t find <link rel="manifest" href=".." />\'';
                            var e = {};
                            return "use-credentials" === l.crossOrigin && (e.credentials = "include"), window.fetch(l, e)
                        }).then(function(e) {
                            return e.json()
                        }).then(function(r) {
                            return function(r, a) {
                                var s = r.icons || [];
                                s.sort(function(e, t) {
                                    return parseInt(t.sizes, 10) - parseInt(e.sizes, 10)
                                });
                                var l = s.map(function(e) {
                                        return function(e, t) {
                                            var n = document.createElement(e);
                                            for (var r in t) n.setAttribute(r, t[r]);
                                            return n
                                        }("link", {
                                            rel: "apple-touch-icon",
                                            href: a(e.src),
                                            sizes: e.sizes
                                        })
                                    }),
                                    f = r.display,
                                    d = -1 !== e.indexOf(f);
                                p = r.background_color || t, h = function(e) {
                                    var t = c();
                                    return t.fillStyle = e, t.fillRect(0, 0, 1, 1), t.getImageData(0, 0, 1, 1).data
                                }(p).map(function(e) {
                                    var t = e / 255;
                                    return t < .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                                }), v = .2126 * h[0] + .7152 * h[1] + .0722 * h[2], Math.abs(1.05 / (v + .05)), r.name || r.short_name || document.title;
                                var p, h, v;
                                navigator.standalone || (_ = "apple-mobile-web-app-capable", (g = d) && (!0 === g && (g = "yes"), function(e, t) {
                                    var n = document.createElement(e);
                                    for (var r in t) n.setAttribute(r, t[r]);
                                    document.head.appendChild(n)
                                }("meta", {
                                    name: _,
                                    content: g
                                })));
                                var _, g;

                                function m(e, a, u) {
                                    var s = e.width,
                                        l = e.height,
                                        f = window.devicePixelRatio,
                                        d = c({
                                            width: s * f,
                                            height: l * f
                                        });
                                    if (d.scale(f, f), d.fillStyle = r.background_color || t, d.fillRect(0, 0, s, l), d.translate(s / 2, (l - o) / 2), u) {
                                        var p = u.width / f,
                                            h = u.height / f;
                                        h > n && (p /= h / n, h = n), p >= i && h >= i && (d.drawImage(u, p / -2, h / -2, p, h), d.translate(0, h / 2 + o))
                                    }
                                    var v = document.createElement("link");
                                    return v.setAttribute("rel", "apple-touch-startup-image"), v.setAttribute("media", "(orientation: ".concat(a, ")")), v.setAttribute("href", d.canvas.toDataURL()), v
                                }
                                var y = new Set;

                                function w(e) {
                                    var t = m(window.screen, "portrait", e),
                                        n = m({
                                            width: window.screen.height,
                                            height: window.screen.width
                                        }, "landscape", e);
                                    y.forEach(function(e) {
                                        return e.remove()
                                    }), document.head.appendChild(t), document.head.appendChild(n), y.add(t), y.add(n)
                                }
                                if (w(null), !l.length) return;
                                var b = l[0],
                                    E = new Image;
                                E.crossOrigin = "anonymous", E.onload = function() {
                                    if (w(E), r.background_color) {
                                        var e = u(E, r.background_color);
                                        null !== e && (b.href = e, l.slice(1).forEach(function(e) {
                                            var t = new Image;
                                            t.crossOrigin = "anonymous", t.onload = function() {
                                                var n = u(t, r.background_color, !0);
                                                e.href = n
                                            }, t.src = e.href
                                        }))
                                    }
                                }, E.src = b.href
                            }(r, f)
                        }).catch(function(e) {
                            return console.warn("pwacompat.js error", e)
                        })
                    }
                }
            }();
            t.default = i
        },
        "8gd1": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = n("W9Tc"),
                o = n("m0RZ"),
                a = n("W0P9"),
                u = (r = n("Xrg9")) && r.__esModule ? r : {
                    default: r
                };

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var l = function() {
                function e(t, n) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.sw = t, this.SWClient = n, vk.id && this.canBeEnabled().then(function(e) {
                        e && (r.listenPermission(), r.loadEndpoint() && r.update().then(r.checkMessageState.bind(r)))
                    })
                }
                var t, n, r;
                return t = e, r = [{
                    key: "getPermission",
                    value: function() {
                        return Notification.permission
                    }
                }], (n = [{
                    key: "cleanNotification",
                    value: function() {
                        this.sw.action("cleanNotification")
                    }
                }, {
                    key: "canBeEnabled",
                    value: function() {
                        return Promise.resolve(this.isSupported())
                    }
                }, {
                    key: "isSupported",
                    value: function() {
                        return "PushManager" in window && "Notification" in window && this.SWClient.isSupported()
                    }
                }, {
                    key: "loadEndpoint",
                    value: function() {
                        return u.default.get("push_notifier_endpoint" + vk.id) || !1
                    }
                }, {
                    key: "saveEndpoint",
                    value: function(e) {
                        u.default.set("push_notifier_endpoint" + vk.id, e || !1)
                    }
                }, {
                    key: "action",
                    value: function(e, t) {
                        return this.sw.action(e, t)
                    }
                }, {
                    key: "_needupdate",
                    value: function(e) {
                        var t = Date.now(),
                            n = this.loadEndpoint(),
                            r = u.default.get("push_notifier_subscribed_ts" + vk.id),
                            i = !1;
                        return (n !== e.endpoint || !r || t - r > 6e4) && (u.default.set("push_notifier_subscribed_ts" + vk.id, t), i = !0), i
                    }
                }, {
                    key: "listenPermission",
                    value: function() {
                        var e = this;
                        (0, i.partConfigEnabled)("push_notifier") && navigator.permissions && navigator.permissions.query && navigator.permissions.query({
                            name: "notifications"
                        }).then(function(t) {
                            t.onchange = function() {
                                return e.update()
                            }
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = this;
                        return this.updatePermission().then(function(n) {
                            return n === e.PUSH_NOTIFIER_PERMISSION_GRANTED ? t.subscribe().catch(function(t) {
                                t !== e.SUBSCRIBE_ERROR_NETWORK && t("can not update subscribe")
                            }) : Promise.reject("premession_not_granted")
                        }).catch(a.error)
                    }
                }, {
                    key: "updatePermission",
                    value: function() {
                        var t = e.getPermission();
                        if (t !== e.PUSH_NOTIFIER_PERMISSION_GRANTED) {
                            var n = this.loadEndpoint();
                            if (n) return this.unsubscribe(n).then(function() {
                                return t
                            })
                        }
                        return Promise.resolve(t)
                    }
                }, {
                    key: "processSubscribe",
                    value: function(t) {
                        return t.subscribe({
                            userVisibleOnly: !0,
                            applicationServerKey: (0, o.urlBase64ToUint8Array)(e.SERVER_KEY)
                        })
                    }
                }, {
                    key: "setupSubscription",
                    value: function() {
                        var t = this;
                        return new Promise(function(n, r) {
                            var i = e.getPermission(),
                                o = function() {
                                    t.subscribe(!0).then(function() {
                                        n()
                                    }).catch(function() {
                                        r()
                                    })
                                };
                            i !== e.PUSH_NOTIFIER_PERMISSION_DENIED ? i !== e.PUSH_NOTIFIER_PERMISSION_GRANTED ? i === e.PUSH_NOTIFIER_PERMISSION_DEFAULT && t.requestPermission().then(function(t) {
                                t === e.PUSH_NOTIFIER_PERMISSION_GRANTED ? o() : r()
                            }) : o() : r(e.PUSH_NOTIFIER_BLOCKED_BY_BROWSER_SETTINGS)
                        })
                    }
                }, {
                    key: "subscribe",
                    value: function(t) {
                        var n = this;
                        return this.sw.getRegistration().then(function(e) {
                            var t = e.pushManager;
                            return t.getSubscription().then(function(e) {
                                if (e) {
                                    var r = e.expirationTime;
                                    return r && Date.now() > r - 432e6 ? n.unsubscribe(n.loadEndpoint()).then(function() {
                                        return n.processSubscribe(t)
                                    }) : e
                                }
                                return n.processSubscribe(t)
                            })
                        }).then(function(r) {
                            return new Promise(function(i, o) {
                                if (t || n._needupdate(r)) {
                                    var a = r.getKey("p256dh"),
                                        u = r.getKey("auth");
                                    window.ajax.post(e.SERVER_URL, {
                                        act: "a_subscribe",
                                        endpoint: r.endpoint,
                                        key: a ? btoa(String.fromCharCode.apply(null, new Uint8Array(r.getKey("p256dh")))) : null,
                                        token: u ? btoa(String.fromCharCode.apply(null, new Uint8Array(r.getKey("auth")))) : null
                                    }, {
                                        onDone: function(e) {
                                            e ? (n.saveEndpoint(r.endpoint), i()) : o()
                                        },
                                        onFail: function() {
                                            return o(e.SUBSCRIBE_ERROR_NETWORK), !0
                                        }
                                    })
                                } else i()
                            })
                        })
                    }
                }, {
                    key: "unsubscribe",
                    value: function(t) {
                        var n = this;
                        return this.sw.register().then(function(r) {
                            return r.pushManager.getSubscription().then(function(r) {
                                return r ? r.unsubscribe().then(function(r) {
                                    return r ? new Promise(function(r, i) {
                                        ajax.post(e.SERVER_URL, {
                                            act: "a_unsubscribe",
                                            endpoint: t
                                        }, {
                                            onDone: function(e) {
                                                e ? (n.saveEndpoint(!1), r()) : i()
                                            }
                                        })
                                    }) : Promise.reject("ERROR: can not unsubscribe")
                                }) : (n.saveEndpoint(!1), Promise.reject("ERROR: no subscription"))
                            })
                        })
                    }
                }, {
                    key: "requestPermission",
                    value: function() {
                        var t = e.getPermission();
                        return t === e.PUSH_NOTIFIER_PERMISSION_DEFAULT ? new Promise(function(e, t) {
                            var n = Notification.requestPermission(function(t) {
                                e(t)
                            });
                            n instanceof Promise && n.then(e, t)
                        }) : Promise.resolve(t)
                    }
                }, {
                    key: "checkMessageState",
                    value: function() {
                        var t = this;
                        return new Promise(function(e) {
                            return setTimeout(e, 5e3)
                        }).then(function() {
                            return t.action("getMessagesMetaData")
                        }).then(function(t) {
                            return "object" === c(t) && Object.keys(t).length ? new Promise(function(n, r) {
                                window.ajax.post(e.SERVER_URL, {
                                    act: "a_update_messages_state",
                                    data: Object.entries(t)
                                }, {
                                    onDone: function(e) {
                                        e ? n(e) : r("ERROR: act error")
                                    },
                                    onFail: function() {
                                        return r("ERROR: network error"), !0
                                    }
                                })
                            }) : Promise.resolve({})
                        }).then(function(e) {
                            try {
                                return JSON.parse(e)
                            } catch (e) {
                                return {}
                            }
                        }).then(function(e) {
                            return t.action("updateMessageNotifications", e)
                        }).catch(function(e) {
                            return (0, a.error)(e)
                        })
                    }
                }]) && s(t.prototype, n), r && s(t, r), e
            }();
            l.SERVER_KEY = "BPrntRk2W1_ISFwlgY-vz9tQDg9i1oSQ3-N8xyjdbNAbIOdZIGFdh5FlO7zn730UwU9Sayoec-Fpqq4JZFTyv60", l.SERVER_URL = "push_notifier", l.PUSH_NOTIFIER_PERMISSION_GRANTED = "granted", l.PUSH_NOTIFIER_PERMISSION_DEFAULT = "default", l.PUSH_NOTIFIER_PERMISSION_DENIED = "denied", l.PUSH_NOTIFIER_BLOCKED_BY_BROWSER_SETTINGS = "BLOCKED_BY_BROWSER_SETTINGS", l.SUBSCRIBE_ERROR_NETWORK = "SUBSCRIBE_ERROR_NETWORK";
            var f = l;
            t.default = f
        },
        BoyB: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n("2C1Z")) && r.__esModule ? r : {
                default: r
            };
            var o = i.default;
            t.default = o, window.Loading = i.default
        },
        OGfC: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("8gd1")),
                i = n("PovR"),
                o = a(n("Xrg9"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function l(e, t, n) {
                return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value
                    }
                })(e, t, n || e)
            }

            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var p = function(e) {
                function t(e, n) {
                    var r, i, o;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), i = this, o = f(t).call(this, e, n), r = !o || "object" !== u(o) && "function" != typeof o ? s(i) : o, vk.id && r.canBeEnabled().then(function(e) {
                        e && (r.updateHeadClass(), r.handlerMessagesLP = r.handlerMessagesLP.bind(s(r)), page.onChange(function() {
                            return r.updateHeadClass()
                        }))
                    }), r
                }
                var n, i, a;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(t, r["default"]), n = t, (i = [{
                    key: "canBeEnabled",
                    value: function() {
                        var e = this;
                        return l(f(t.prototype), "canBeEnabled", this).call(this).then(function(t) {
                            return t ? e.isNativeAppInstalled().then(function(e) {
                                return !e
                            }) : Promise.resolve(!1)
                        })
                    }
                }, {
                    key: "isSupported",
                    value: function() {
                        return l(f(t.prototype), "isSupported", this).call(this) && (browser.chrome || browser.mozilla)
                    }
                }, {
                    key: "updateHeadClass",
                    value: function() {
                        var e = r.default.getPermission();
                        document.head && (removeClass(document.head, "push_notifier_" + r.default.PUSH_NOTIFIER_PERMISSION_GRANTED), removeClass(document.head, "push_notifier_" + r.default.PUSH_NOTIFIER_PERMISSION_DENIED), removeClass(document.head, "push_notifier_" + r.default.PUSH_NOTIFIER_PERMISSION_DEFAULT), e && addClass(document.head, "push_notifier_" + e), addClass(document.head, "push_notifier_supported"))
                    }
                }, {
                    key: "handlerMessagesLP",
                    value: function(e, t) {
                        this.sw.action("removeMessageNotification", {
                            peerId: t,
                            msgId: e
                        })
                    }
                }, {
                    key: "cleanNotification",
                    value: function() {
                        this.sw.action("cleanNotification")
                    }
                }, {
                    key: "removeLongPollListener",
                    value: function() {
                        this.lp && this.lp.off(), this.lp = null
                    }
                }, {
                    key: "addLongPollListener",
                    value: function() {
                        window.isNewMail && window.isNewLongpoll && !this.lp && (this.lp = window.im.onMsgReadByMe(this.handlerMessagesLP))
                    }
                }, {
                    key: "isNativeAppInstalled",
                    value: function() {
                        var e = Date.now(),
                            n = o.default.get(t.PUSH_NOTIFIER_LS_KEY_RELATED_APPS_TS),
                            r = o.default.get(t.PUSH_NOTIFIER_LS_KEY_RELATED_APPS);
                        return new Promise(function(i) {
                            null !== r && n && e - n < t.PUSH_NOTIFIER_LS_TTL_RELATED_APPS ? i(!!r) : "getInstalledRelatedApps" in navigator ? navigator.getInstalledRelatedApps().then(function(n) {
                                var r = Object.values(n).some(function(e) {
                                    return "com.vkontakte.android" === e.id
                                });
                                o.default.set(t.PUSH_NOTIFIER_LS_KEY_RELATED_APPS_TS, e), o.default.set(t.PUSH_NOTIFIER_LS_KEY_RELATED_APPS, r), i(r)
                            }).catch(function() {
                                i(!1)
                            }) : i(!1)
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = this;
                        return l(f(t.prototype), "update", this).call(this).then(function() {
                            e.updateHeadClass(), e.addLongPollListener()
                        })
                    }
                }, {
                    key: "unsubscribe",
                    value: function(e) {
                        var n = this;
                        return l(f(t.prototype), "unsubscribe", this).call(this, e).then(function() {
                            return n.removeLongPollListener()
                        })
                    }
                }]) && c(n.prototype, i), a && c(n, a), t
            }();
            p.PUSH_NOTIFIER_LS_KEY_RELATED_APPS = "push_notifier_related_apps", p.PUSH_NOTIFIER_LS_KEY_RELATED_APPS_TS = "push_notifier_related_apps_ts", p.PUSH_NOTIFIER_LS_TTL_RELATED_APPS = i.HOUR / 2;
            var h = p;
            t.default = h
        },
        PovR: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PUSH_NOTIFIER_PERMISSION_DENIED = t.PUSH_NOTIFIER_PERMISSION_DEFAULT = t.PUSH_NOTIFIER_PERMISSION_GRANTED = t.DAY = t.HOUR = t.MINUTE = t.SECOND = void 0;
            t.SECOND = 1e3;
            t.MINUTE = 6e4;
            t.HOUR = 36e5;
            t.DAY = 864e5;
            t.PUSH_NOTIFIER_PERMISSION_GRANTED = "granted";
            t.PUSH_NOTIFIER_PERMISSION_DEFAULT = "default";
            t.PUSH_NOTIFIER_PERMISSION_DENIED = "denied"
        },
        TYsd: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n("1By4")) && r.__esModule ? r : {
                default: r
            };
            var o = i.default;
            t.default = o, window.Wd = i.default
        },
        W0P9: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.log = a, t.warn = function() {
                var e;
                o() && (window.console.warn ? (e = window.console).warn.apply(e, arguments) : a.apply(void 0, arguments))
            }, t.error = function() {
                var e;
                o() && (window.console.error ? (e = window.console).error.apply(e, arguments) : a.apply(void 0, arguments))
            }, t.debug = function() {
                var e;
                o() && (window.console.debug ? (e = window.console).debug.apply(e, arguments) : a.apply(void 0, arguments))
            };
            var r = n("W9Tc"),
                i = "js_console_logs";

            function o() {
                return window.console && (0, r.partConfigEnabled)(i)
            }

            function a() {
                var e;
                o() && (window.console.log && (e = window.console).log.apply(e, arguments))
            }
        },
        eGQV: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.init = l, t.isStandalone = function() {
                return s
            }, t.isOfflineCapable = f;
            var r = a(n("i/4A")),
                i = a(n("50sn")),
                o = a(n("OGfC"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u, c = new r.default;
            window.sw_client = c, window.SWClient = r.default, window.initPushNotifier = function() {
                try {
                    window.PushNotifier = o.default, window.pushNotifier = new o.default(c, r.default)
                } catch (e) {}
            };
            var s = !1;

            function l() {
                window.addEventListener && (! function() {
                    if (s = !0 === navigator.standalone || window.matchMedia && matchMedia("(display-mode: standalone)").matches, !history.replaceState) return;
                    var e = location.search;
                    if ((e = (e = (e = e.replace(/(\?|&)mode\=([^&]+)(&)?/, "$1")).replace(/(\?|&)__appshell_fallback\=([^&]+)(&)?/, "$1")).replace(/(\?|&)+$/, "")) !== location.search) {
                        var t = location.pathname + e + location.hash;
                        history.replaceState(null, "", t)
                    }
                }(), function() {
                    if (!r.default.isSupported()) return;
                    c.listenMessages(), navigator.serviceWorker.addEventListener("message", function(e) {
                        var t = e.data;
                        t && t.action && "update-ready" === t.action && (hasUpdate = !0)
                    })
                }(), window.addEventListener("beforeinstallprompt", function(e) {
                    e.preventDefault()
                }), window.addEventListener("appinstalled", function() {
                    statlogsValueEvent("pwa_installed_event", 1)
                }), "complete" === document.readyState ? d() : window.addEventListener("load", function() {
                    d()
                }))
            }

            function f() {
                return void 0 === u && (u = !(!r.default.isSupported() || !navigator.serviceWorker.controller)), u
            }

            function d() {
                window.vk && window.vk.sw && (c.register(window.vk.sw).then(function(e) {}, function(e) {
                    if (e !== r.default.SW_NOT_AVAILABLE_ERROR) throw e
                }), r.default.isSupported() && navigator.serviceWorker.getRegistration().then(function(e) {
                    ! function(e) {
                        if (!f()) return;
                        e && e.active && e.installing && e.installing.postMessage({
                            action: "activate"
                        })
                    }(e)
                }), (0, i.default)())
            }
            l()
        },
        "i/4A": function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.registration = null, this._handlers = []
                }
                var t, n, i;
                return t = e, i = [{
                    key: "isSupported",
                    value: function() {
                        try {
                            return !(!window.fetch || !navigator.serviceWorker)
                        } catch (e) {
                            return !1
                        }
                    }
                }], (n = [{
                    key: "listenMessages",
                    value: function() {
                        navigator.serviceWorker.addEventListener("message", this._onmessage.bind(this))
                    }
                }, {
                    key: "register",
                    value: function(t) {
                        if (!e.isSupported()) return Promise.reject("SW: serviceWorker is unavailable");
                        var n = t && t.url;
                        return n ? navigator.serviceWorker.register(n, {
                            scope: "/",
                            updateViaCache: "none"
                        }).then(function(e) {
                            return this.registration || (this.registration = e), e
                        }.bind(this)) : Promise.reject("SW: incorrect url")
                    }
                }, {
                    key: "getRegistration",
                    value: function() {
                        return e.isSupported() ? navigator.serviceWorker.ready.then(function(e) {
                            return this.registration || (this.registration = e), e
                        }.bind(this)) : Promise.reject("SW: serviceWorker is unavailable")
                    }
                }, {
                    key: "unregister",
                    value: function() {
                        this.registration && this.registration.unregister(), this._handlers.forEach(function(e) {
                            return e[0].removeEventListener(e[1], e[2])
                        }), this._handlers = []
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.registration && this.registration.update()
                    }
                }, {
                    key: "_addEventListener",
                    value: function(e, t, n) {
                        var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            i = !1;
                        this._handlers.forEach(function(r) {
                            r[0] === e && r[1] === t && r[2] === n && (i = !0)
                        }), i && !r || (this._handlers.push([e, t, n]), e.addEventListener(t, n))
                    }
                }, {
                    key: "action_devicePixelRatio",
                    value: function() {
                        return window.devicePixelRatio
                    }
                }, {
                    key: "action",
                    value: function(e, t) {
                        var n = null;
                        return n = Array.isArray(e) ? e : [
                            [e, t]
                        ], this._message({
                            actions: n
                        }).then(function(e) {
                            return e.answers ? Promise.resolve(1 === n.length ? e.answers[0] : e.answers) : Promise.reject(new Error("ServiceWorker answer is incorrect"))
                        })
                    }
                }, {
                    key: "_message",
                    value: function(e) {
                        var t = this;
                        return this.getRegistration().then(function() {
                            return new Promise(function(t, n) {
                                var r = new MessageChannel;
                                r.port1.onmessage = function(e) {
                                    this._messageCheck(e) ? t(e.data.data) : n(new Error("ServiceWorker message is incorrect"))
                                }.bind(this), this.registration.active.postMessage(this._messageWrap(e), [r.port2])
                            }.bind(t))
                        })
                    }
                }, {
                    key: "_onmessage",
                    value: function(e) {
                        if (this._messageCheck(e)) {
                            var t = e.data.data;
                            if (t.actions && Array.isArray(t.actions)) {
                                var n = [];
                                t.actions.forEach(function(t) {
                                    var r = "action_" + t[0],
                                        i = t[1],
                                        o = this[r] ? this[r](i, e) : void 0;
                                    o instanceof Promise || (o = Promise.resolve(o)), n.push(o)
                                }.bind(this)), Promise.all(n).then(function(t) {
                                    var n = {};
                                    t.forEach(function(e, t) {
                                        void 0 !== e && (n[t] = e)
                                    }), Object.keys(n).length && e.ports[0].postMessage(this._messageWrap({
                                        answers: n
                                    }))
                                }.bind(this))
                            }
                        }
                    }
                }, {
                    key: "_messageCheck",
                    value: function(e) {
                        return ("" === e.origin || e.origin.match(/^https:\/\/([a-zA-Z0-9\-\.]+\.)?vk\.com$/)) && e.data && e.data.data && "sw" === e.data.type
                    }
                }, {
                    key: "_messageWrap",
                    value: function(e) {
                        return {
                            type: "sw",
                            data: e
                        }
                    }
                }]) && r(t.prototype, n), i && r(t, i), e
            }();
            t.default = i, i.SW_NOT_AVAILABLE_ERROR = "SW: serviceWorker is unavailable"
        },
        iHpm: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            n("OcsD");
            var r = {
                class: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_",
                        r = [e];
                    return Object.keys(t).forEach(function(o) {
                        if (i(o)) {
                            var a = t[o];
                            !0 === a ? r.push("".concat(e).concat(n).concat(o)) : i(a) && r.push("".concat(e).concat(n).concat(o).concat(n).concat(a))
                        }
                    }), r.join(" ")
                },
                setMod: function(e, t, n) {
                    var r, o = new RegExp("\\s*".concat(t, "(_[-a-zA-Z]+)?"));
                    r = !0 === n ? " ".concat(t) : i(n) ? " ".concat(t, "_").concat(n) : "";
                    o.test(e.className) ? e.className = e.className.replace(o, r) : e.className += r
                }
            };

            function i(e) {
                return "number" == typeof e || "string" == typeof e && e
            }
            t.default = r
        },
        izth: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setDocumentDomain = function() {
                var e = (document.domain || "").match(/(m\.)?([a-zA-Z]+\.[a-zA-Z]+\.?)$/);
                window.locDomain = "https:" === location.protocol ? e[2] : e[0];
                var t = navigator.userAgent.toLowerCase();
                !/opera/i.test(t) && /msie 6/i.test(t) && document.domain === window.locDomain || (document.domain = window.locDomain)
            }
        },
        j80l: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeUrl = o, t.parseURL = function(e) {
                var t = window.ce("a", {
                        href: e
                    }),
                    n = a.reduce(function(e, n) {
                        return e[n] = t[n], e
                    }, {});
                return n.requestUri = "".concat(n.pathname).concat(n.search), n
            }, t.default = void 0;
            var i = window.Url = {
                make: o
            };

            function o(e, t) {
                var n = need("nav");
                if (!t) return e;
                var i = r(e.split("?"), 2),
                    o = i[0],
                    a = i[1],
                    u = {},
                    c = [];
                return a && a.split("&").map(function(e) {
                    var n = r(e.split("="), 2),
                        i = n[0],
                        o = n[1];
                    i in t || (t[i] = o)
                }), Object.keys(t).forEach(function(e) {
                    var r, i = t[e];
                    !0 === i && (i = n.getQuery(e)), ("string" == typeof(r = i) && r || function(e) {
                        return "number" == typeof e && !isNaN(e)
                    }(i)) && (u[e] = i)
                }), Object.keys(u).forEach(function(e) {
                    c.push("".concat(e, "=").concat(encodeURIComponent(u[e])))
                }), 0 === c.length ? o : "".concat(o, "?").concat(c.join("&"))
            }
            t.default = i;
            var a = ["protocol", "hostname", "host", "pathname", "port", "search", "hash", "href"]
        },
        m0RZ: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.urlBase64ToUint8Array = function(e) {
                for (var t = "=".repeat((4 - e.length % 4) % 4), n = (e + t).replace(/\-/g, "+").replace(/_/g, "/"), r = window.atob(n), i = new Uint8Array(r.length), o = 0; o < r.length; ++o) i[o] = r.charCodeAt(o);
                return i
            }
        },
        z9sQ: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n("iHpm")) && r.__esModule ? r : {
                default: r
            };
            var o = i.default;
            t.default = o, window.Bem = i.default
        }
    }
]);