
        window.batUsePost = true
        window.addEventListener('load', function() {
                setTimeout(function() {
                    TES && TES.entries && TES.entries()
                }, 100) //时间自定义
            })

            //bat.js
            ! function() {
                function e(e) {
                    var t = function() {
                        setTimeout(e, 10)
                    };
                    if (window.__windvane__)
                        if (window._WindVaneReady) e();
                        else {
                            var n = function() {
                                window._WindVaneReady = !0, document.removeEventListener("WindVaneReady", n), e()
                            };
                            document.addEventListener("WindVaneReady", n)
                        }
                    else "complete" === document.readyState ? t() : window.addEventListener("load", t)
                }

                function t(e, t, n) {
                    if ("string" == typeof e) {
                        "object" == typeof t && (n = t, t = "bat"), t = "bat" === e ? "" : t || "bat", n = n || {}, n.module = n.module || "", n.type = n.type || "normal", n.msg = n.msg || "", n.version = n.version || "", L || (L = e);
                        var o = +new Date;
                        _[e] = o;
                        var r = e === L ? 0 : o - (_[t || L] || _[L]);
                        "error" === n.type ? this.pushFull([e + "_" + n.module, e, t, n.module, n.version, n.msg, Math.max(r, 0), 1]) : this.push([e + "_" + n.module, e, t, n.module, n.version, n.msg, Math.max(r, 0), 0])
                    }
                }

                function n(e, t) {
                    var n = {};
                    for (var o in e) n[o] = e[o];
                    for (var o in t) n[o] = t[o];
                    return n
                }

                function o(e, t) {
                    return t = t || "", e ? o(--e, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(60 * Math.random())) + t) : t
                }

                function r(e, t, n) {
                    return e.split(t).join(n)
                }

                function i(e, t) {
                    for (var n in e) e.hasOwnProperty(n) && t.call(e, e[n], n)
                }

                function a() {
                    if (C) return C;
                    var e = "",
                        t = "";
                    if (window.goldlog && window.goldlog.spm_ab) return e = window.goldlog.spm_ab.join(".").split("/")[0], e = e.split("-")[0];
                    e = document.getElementsByTagName("meta");
                    for (var n = e.length; n-- && ("spm-id" !== e[n].name && "data-spm" !== e[n].name););
                    return (e = e[n]) ? (e = e.content.split("/")[0], (e = e.split("-")[0]) ? (t = document.body && document.body.getAttribute("data-spm"), t = t ? "." + t : "", e + t) : "") : void 0
                }

                function u(e) {
                    var t, n, o, i = [];
                    for (t = 0, n = e.length; t < n; t++) o = e[t], "object" == typeof o ? i.push(JSON.stringify(o)) : null === o || o === undefined ? i.push("") : i.push(o + "");
                    for (t = i.length; t--;) i[t] = r(r(i[t], "|", "\u4e28"), ";", "\uff1b");
                    return i
                }

                function s() {
                    for (var e = 0, t = new Array(256), n = 0; 256 !== n; ++n) {
                        e = n;
                        for (var o = 8; o--;) e = 1 & e ? -306674912 ^ e >>> 1 : e >>> 1;
                        t[n] = e
                    }
                    return "undefined" != typeof Int32Array ? new Int32Array(t) : t
                }

                function d(e) {
                    for (var t, n, o = -1, r = 0, i = e.length; r < i;) t = e.charCodeAt(r++), t < 128 ? o = o >>> 8 ^ R[255 & (o ^ t)] : t < 2048 ? (o = o >>> 8 ^ R[255 & (o ^ (192 | t >> 6 & 31))], o = o >>> 8 ^ R[255 & (o ^ (128 | 63 & t))]) : t >= 55296 && t < 57344 ? (t = 64 + (1023 & t), n = 1023 & e.charCodeAt(r++), o = o >>> 8 ^ R[255 & (o ^ (240 | t >> 8 & 7))], o = o >>> 8 ^ R[255 & (o ^ (128 | t >> 2 & 63))], o = o >>> 8 ^ R[255 & (o ^ (128 | n >> 6 & 15 | (3 & t) << 4))], o = o >>> 8 ^ R[255 & (o ^ (128 | 63 & n))]) : (o = o >>> 8 ^ R[255 & (o ^ (224 | t >> 12 & 15))], o = o >>> 8 ^ R[255 & (o ^ (128 | t >> 6 & 63))], o = o >>> 8 ^ R[255 & (o ^ (128 | 63 & t))]);
                    return -1 ^ o
                }

                function l() {
                    try {
                        if (!Q) return [];
                        H = window.localStorage.getItem("bat"), H = H ? JSON.parse(H) : {};
                        var e = [];
                        i(H, function(t, n) {
                            A - t.time > N && e.push(n)
                        });
                        for (var t = e.length; t--;) delete H[e[t]];
                        window.localStorage.setItem("bat", JSON.stringify(H))
                    } catch (n) {
                        H = {}
                    }
                }

                function c(e) {
                    return (H[E] || {})[e] || []
                }

                function f(e, t) {
                    try {
                        if (!Q) return [];
                        var n = H[E] = H[E] || {};
                        n[e] = t, n.time = +new Date, window.localStorage.setItem("bat", JSON.stringify(H))
                    } catch (o) {}
                }

                function h(e) {
                    var t = document.createElement("script");
                    t.src = e, t.onload = function() {
                        this.remove()
                    }, document.getElementsByTagName("head")[0].appendChild(t)
                }

                function p(e) {
                    var t = this;
                    this.version = "5.0.9", this.api = e.api || "", this.chksum = e.chksum || "", this.name = e.name || "none", this.sender = e.sender || function() {}, this.windowOnloaded = !1, this.queueName = e.name + "_queue", this.fullQueueName = e.name + "_full_queue", this.sendingTask = null, this.extra = {}, this.onloadFns = [], this.unloadFns = [], this.bindEvent(), this.setQueue(window[this.queueName] || []);
                    try {
                        this.setFullQueue([].concat(c(this.fullQueueName)).concat(window[this.fullQueueName] || []))
                    } catch (n) {
                        this.setFullQueue([].concat(window[this.fullQueueName] || []))
                    }
                    window[e.name + "Track"] = function() {
                        t.sender.apply(t, Array.prototype.slice.call(arguments))
                    }, window[e.name + "TrackIme"] = function() {
                        t.sender.apply(t, Array.prototype.slice.call(arguments)), t.sendQueue()
                    }
                }

                function w(e) {
                    return e.replace(/^\s+|\s+$/g, "")
                }

                function m(e) {
                    e = e || "", e = e.split("\n").slice(1, 3);
                    for (var t = e.length; t--;) e[t] = w(e[t]).replace(/\((.*)\)/, function(e, t) {
                        return t = t.split(":"), "(" + [Number(t[2]) || 0, Number(t[3]) || 0].join(":") + ")"
                    });
                    return e.join("^")
                }

                function g(e) {
                    e = e || "";
                    var t = e.split(",");
                    return t.length <= 2 ? e : [t[0], "...", t[t.length - 1]].join(",")
                }

                function v(e, t, n, o, r) {
                    try {
                        "string" == typeof e ? window.batTrack("jserror", "bat", {
                            "type": "error",
                            "msg": [e, g(t), n, o, m(r && r.stack)].join("^")
                        }) : window.batTrack("jserror", "bat", {
                            "type": "error",
                            "msg": [e.message, g(e && e.filename), e && e.lineno, e && e.colno, m(e && e.error && e.error.stack)].join("^")
                        })
                    } catch (e) {}
                }

                function y(e) {
                    if (e) try {
                        var t = "";
                        "string" == typeof e ? t = e : "message" == typeof e.reason ? t = e.reason : "object" == typeof e.reason ? t = e.reason.message : "string" == typeof e.message && (t = e.message), window.batTrack("jserror", "bat", {
                            "type": "error",
                            "msg": [t, "", 0, 0, ""].join("^")
                        })
                    } catch (e) {}
                }
                if ("function" != typeof window.batTrack) {
                    var b = window.batSamplingFile || "",
                        k = !!window.batUsePost,
                        T = window.batIntervalAfterOnload || 1500,
                        x = window.batIntervalPageLiving || 5e3,
                        S = window.batProxy || "",
                        Q = !1;
                    try {
                        localStorage.batLocalTest = 0, "0" === localStorage.batLocalTest && (Q = !0, localStorage.removeItem("batLocalTest"))
                    } catch (W) {}
                    var j = 1700,
                        E = window.location.host + window.location.pathname,
                        F = ("file:" === window.location.protocol ? "http:" : window.location.protocol) + "//gm.mmstat.com",
                        I = encodeURIComponent,
                        A = +new Date,
                        L = "",
                        _ = {},
                        N = 864e5,
                        P = 0,
                        O = /(iPhone|iPad|iPod|iOS|Android)/i.test(window.navigator.userAgent),
                        M = o(20),
                        C = "",
                        q = [],
                        B = null,
                        H = {};
                    if (l(), b) {
                        var D = b.split("/");
                        window[D[D.length - 1]] = function(e) {
                            B = e || null;
                            for (var t = 0; t < q.length; t++) q[t]();
                            delete window[D[D.length - 1]]
                        }, h(b + "?wh_callback=true")
                    }
                    window.setCtkSpm = window.setBatSpm = function(e) {
                        C = e
                    }, window.setCtkProxy = window.setBatProxy = function(e) {
                        S = e
                    };
                    var R = s();
                    p.prototype.mergeExtra = function(e) {
                        e = e || {}, this.extra = n(this.extra, e)
                    }, p.prototype.replaceExtra = function(e) {
                        e = e || {}, this.extra = n(e, {})
                    }, p.prototype.push = function(e) {
                        this.queue.push(e)
                    }, p.prototype.pushFull = function(e) {
                        this.fullQueue.push(e)
                    }, p.prototype.setQueue = function(e) {
                        window[this.queueName] = this.queue = e
                    }, p.prototype.setFullQueue = function(e, t) {
                        window[this.fullQueueName] = this.fullQueue = e, t && f(this.fullQueueName, e)
                    }, p.prototype.addOnloadListener = function(e) {
                        this.onloadFns.push(e)
                    }, p.prototype.removeOnloadListener = function(e) {
                        var t = this.onloadFns.indexOf(e); - 1 !== t && this.onloadFns.splice(t, 1)
                    }, p.prototype.addUnloadListener = function(e) {
                        this.unloadFns.push(e)
                    }, p.prototype.removeUnloadListener = function(e) {
                        var t = this.unloadFns.indexOf(e); - 1 !== t && this.unloadFns.splice(t, 1)
                    }, p.prototype.bindEvent = function() {
                        function t() {
                            var e, t;
                            for (e = 0, t = r.onloadFns.length; e < t; e++)(0, r.onloadFns[e])();
                            r.onloadFns = [], r.windowOnloaded = !0, setTimeout(function() {
                                r.waitSendStart()
                            }, T)
                        }

                        function n() {
                            var e, t;
                            for (e = 0, t = r.unloadFns.length; e < t; e++)(0, r.unloadFns[e])();
                            r.unloadFns = [], r.sendQueue()
                        }
                        var o, r = this;
                        if (e(t), window.addEventListener) {
                            var i = ["blur", "beforeunload", "unload"];
                            for (o = i.length; o--;) window.addEventListener(i[o], n);
                            var a = ["WV.Event.APP.Background", "pause", "mozvisibilitychange", "msvisibilitychange", "visibilitychange", "webkitvisibilitychange"];
                            for (o = a.length; o--;) document.addEventListener(a[o], n)
                        } else window.attachEvent && (window.attachEvent("onload", t), window.attachEvent("onbeforeunload", n))
                    }, p.prototype.sendStart = function() {
                        function e() {
                            t.sendQueue(), t.sendingTask = null, t.waitSendStart()
                        }
                        var t = this;
                        t.sendingTask || (t.sendingTask = setTimeout(function() {
                            window.requestIdleCallback ? window.requestIdleCallback(e, {
                                "timeout": x
                            }) : e()
                        }, x))
                    }, p.prototype.waitSendStart = function() {
                        var e = this;
                        b && !B ? q.push(function() {
                            e.sendStart()
                        }) : e.sendStart()
                    }, p.prototype.sendQueue = function() {
                        this.setQueue(this.formatQueue(this.queue)), this.setFullQueue(this.formatQueue(this.fullQueue)), this.sendNormalQueue(), this.sendFullQueue()
                    }, p.prototype.formatQueue = function(e) {
                        for (var t = [], n = 0, o = e.length; n < o; n++) {
                            var r = e[n];
                            "[object array]" === Object.prototype.toString.call(r).toLowerCase() ? t.push({
                                "length": 1,
                                "point": r
                            }) : t.push(r)
                        }
                        return t
                    }, p.prototype.mergeQueue = function(e) {
                        var t, n, o, r, a = [],
                            u = {};
                        for (t = 0, n = e.length; t < n; t++) {
                            r = e[t];
                            try {
                                o = r.point[0], u[o] = u[o] || {
                                    "point": null,
                                    "length": 0
                                }, u[o].length += r.length, Math.random() * u[o].length <= r.length && (u[o].point = r.point)
                            } catch (W) {
                                continue
                            }
                        }
                        return i(u, function(e) {
                            a.push(e)
                        }), a
                    }, p.prototype.sendNormalQueue = function() {
                        var e, t = [],
                            n = [],
                            o = 0;
                        if (t = this.mergeQueue(this.queue), t.length) {
                            for (t.sort(function() {
                                    return Math.random() - .5
                                }), e = t.length; e--;) try {
                                var r = I(u([].concat(t[e].point.slice(1)).concat([1e3])).join("|")).length;
                                if (o + r > j) break;
                                if (b) {
                                    var i = B && B.normal && B.normal[t[e].point[0]] || 1;
                                    Math.random() < 1 / i && (t[e].length = t[e].length * i, n.push(t[e]), o += r)
                                } else n.push(t[e]), o += r
                            } catch (W) {
                                continue
                            }
                            for (e = n.length; e--;) n[e] = u([].concat(n[e].point.slice(1)).concat([n[e].length * Math.round(t.length / n.length)])).join("|");
                            this.trySend(n.join(";")), this.setQueue([])
                        }
                    }, p.prototype.sendFullQueue = function() {
                        var e, t = [],
                            n = [],
                            o = 0;
                        if (t = [].concat(this.fullQueue), t.length) {
                            for (; t.length;) try {
                                var r = t[0],
                                    i = I(u([].concat(r.point.slice(1)).concat([r.length])).join("|")).length;
                                if (i > j && !k) {
                                    t.shift();
                                    continue
                                }
                                if (o + i > j && !k) break;
                                if (b) {
                                    var a = B && B.full && B.full[t[0].point[0]] || 1;
                                    Math.random() < 1 / a ? (t[0].length = t[0].length * a, n.push(t.shift()), o += i) : t.shift()
                                } else n.push(t.shift()), o += i
                            } catch (W) {
                                t.shift();
                                continue
                            }
                            for (e = n.length; e--;) n[e] = u([].concat(n[e].point.slice(1)).concat([n[e].length])).join("|");
                            this.trySend(n.join(";")), this.setFullQueue(t, !0)
                        }
                    }, p.prototype.trySend = function(e) {
                        var t = this;
                        if (!1 === navigator.onLine) {
                            var n;
                            window.addEventListener("online", n = function(o) {
                                window.removeEventListener("online", n), t.send(e)
                            })
                        } else t.send(e)
                    }, p.prototype.send = function(e) {
                        if (e) {
                            var t = a();
                            if (t) {
                                var n = ["msg=" + I(e), "hash=" + d(e), "spm=" + t, "client=" + (O ? "h5" : "pc"), "token=" + M, "proxy=" + S];
                                for (var o in this.extra) this.extra.hasOwnProperty(o) && n.push(o + "=" + this.extra[o]);
                                var r = n.join("&");
                                if (window.goldlog && window.goldlog.record && "function" == typeof window.goldlog.record) window.goldlog.record(this.api, "EXP", r, k ? "POST" : "GET");
                                else {
                                    var o = "__CT_image_" + P++,
                                        i = window[o] = new Image;
                                    i.onload = i.onerror = function() {
                                        window[o] = null, delete window[o]
                                    }, i.src = F + this.api + "?" + r
                                }
                            }
                        }
                    };
                    var J = new p({
                            "name": "bat",
                            "sender": t,
                            "api": "/codetrack.1.1",
                            "chksum": "H46836965"
                        }),
                        U = new p({
                            "name": "tes",
                            "sender": function(e, t, n) {
                                t = t || [], n = n || !1, e && (n ? this.pushFull([].concat([e]).concat(t)) : this.push([].concat([e]).concat(t)))
                            },
                            "api": "/codetrack.1.3",
                            "chksum": "H46836988"
                        }),
                        V = new p({
                            "name": "dom",
                            "sender": function(e, t, n, o, r) {
                                t = t || "", n = n || "", o = o || "", r = r || !1;
                                var i = [e + "_" + t + "_" + n + "_" + o, e, t, n, o];
                                r ? this.pushFull(i) : this.push(i)
                            },
                            "api": "/codetrack.1.4",
                            "chksum": "H46836989"
                        });
                    window.addEventListener ? (window.addEventListener("error", v, !1), window.addEventListener("unhandledrejection", y, !1)) : window.attachEvent("error", v), window.batTrack("bat", ""), window.batIns = {
                        "bat": J,
                        "tes": U,
                        "dom": V
                    }
                }
            }(),
            function(e, t) {
                "function" == typeof define && define.amd ? define("@ali/mui-bat/index", [], function() {
                    return e.bat = t()
                }) : "object" == typeof module && module.exports ? module.exports = t() : e.bat = t()
            }(window, function() {
                return {
                    "domTrack": window.domTrack,
                    "batTrack": window.batTrack,
                    "tesTrack": window.tesTrack,
                    "domTrackIme": window.domTrackIme,
                    "batTrackIme": window.batTrackIme,
                    "tesTrackIme": window.tesTrackIme,
                    "setBatSpm": window.setBatSpm,
                    "setBatProxy": window.setBatProxy
                }
            });

        //--tes.js--
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            WindowTes = function(e) {
                function t(i) {
                    if (n[i]) return n[i].exports;
                    var o = n[i] = {
                        "exports": {},
                        "id": i,
                        "loaded": !1
                    };
                    return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
                }
                var n = {};
                return t.m = e, t.c = n, t.p = "", t(0)
            }([function(e, t, n) {
                function i(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }
                n(1), n(2), n(7), n(8), n(9), n(10), n(11), n(13), n(14), n(16), (0, i(n(15))["default"])(function() {
                    -1 === navigator.userAgent.indexOf("AliApp(") && TES.timing(), ["longTask", "tsl", "animFPS", "eventTiming", "invalidClick", "scrollFPS"].forEach(function(e) {
                        var t = .01;
                        window["TES_SAMPLING_" + e] !== undefined ? t = window["TES_SAMPLING_" + e] : window.TES_SAMPLING !== undefined && (t = TES_SAMPLING), Math.random() < t && TES[e]()
                    })
                })
            }, function(e, t) {
                window.TES = {
                    "navigationStart": window.performance && performance.timing && performance.timing.navigationStart
                }, TES.send = function(e, t, n, i) {
                    if (!this._initNet) {
                        this._initNet = !0;
                        var o = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                        if (o && window.batIns && batIns.tes) {
                            var r = function() {
                                window.batIns.tes.mergeExtra({
                                    "net_t": o.type || "",
                                    "net_et": o.effectiveType || ""
                                })
                            };
                            r(), o.addEventListener("change", r)
                        }
                    }
                    if (i && window.tesTrackIme) tesTrackIme(e + t[0], [e].concat(t), n);
                    else {
                        var a = "tes_queue";
                        n && (a = "tes_full_queue"), (window[a] || (window[a] = [])).push([e + t[0], e].concat(t))
                    }
                }, TES.record = function(e, t, n, i, o, r) {
                    this.send(t, ["normal", e, n, i], o, r)
                }, TES.monitor = function(e, t, n, i, o, r) {
                    this.send(t, ["monitor", e, n, i], o, r)
                }, TES.error = function(e, t, n, i, o, r) {
                    this.send(t, ["error", e, n, i], !1 !== o, r)
                }
            }, function(e, t, n) {
                function i(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function o(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }
                var r = n(3),
                    a = i(r),
                    u = n(4),
                    s = n(5),
                    c = i(s),
                    d = n(6),
                    f = i(d),
                    l = {
                        "min": function(e) {
                            return e.reduce(function(e, t) {
                                return e ? t < e ? t : e : t
                            })
                        },
                        "max": function(e) {
                            return e.reduce(function(e, t) {
                                return e ? t > e ? t : e : t
                            })
                        },
                        "avg": function(e) {
                            return e.reduce(function(e, t) {
                                return e + t
                            }, 0) / e.length
                        },
                        "majority": function(e) {
                            for (var t = {}, n = e[0], i = 1, o = 0; o < e.length; o++) {
                                var r = e[o];
                                null == t[r] ? t[r] = 1 : t[r]++, t[r] > i && (n = r, i = t[r])
                            }
                            return n
                        },
                        "median": function(e) {
                            e = [].concat(e), e.sort();
                            var t = Math.floor((e.length - 1) / 2),
                                n = Math.ceil((e.length - 1) / 2);
                            return (e[t] + e[n]) / 2
                        }
                    },
                    m = window.requestAnimationFrame || window.webkitRequestAnimationFrame,
                    p = window.cancelAnimationFrame || window.webkitCancelAnimationFrame,
                    v = {},
                    g = {},
                    w = function() {
                        return window.performance && performance.now ? performance.now() : Date.now()
                    },
                    h = function(e) {
                        var t = e.map(function(e) {
                            return Math.round(1e3 / e)
                        });
                        return [l.min(t), l.max(t), Math.round(l.avg(t)), l.median(t), l.majority(t)]
                    };
                TES._fps = function(e, t) {
                    if (m && !v[e]) {
                        var n, i = function i() {
                            var o = w();
                            if (!n) return n = o, void(v[e] = m(i));
                            t && t(o - n), n = o, v[e] = m(i)
                        };
                        v[e] = m(i)
                    }
                }, TES.fps = function(e) {
                    g[e] = [], this._fps(e, function(t) {
                        g[e].push(t)
                    })
                }, TES.fpsEnd = function(e) {
                    if (p) {
                        p(v[e]);
                        var t = g[e];
                        t && t.length && this.send(e, ["fps"].concat(o(h(t)))), delete g[e], delete v[e]
                    }
                }, TES.scrollFPS = function() {
                    if (u.supportPageHideEvent) {
                        var e, t = [];
                        TES._fps("scroll", function(n) {
                            var i = window.pageYOffset;
                            e && i === e || (e = i, t.length > 1e4 && t.shift(), t.push(n))
                        }), (0, a["default"])(function() {
                            t && t.length > 50 && (TES.send("scroll", ["fps"].concat(o(h(t))), !1, !0), t = [])
                        })
                    }
                }, TES.animFPS = function() {
                    var e = {};
                    document.addEventListener("transitionstart", function(t) {
                        var n, i = Math.random(),
                            o = t.target,
                            r = [];
                        TES._fps(i, function(e) {
                            r.length > 1e3 && r.shift(), r.push(e)
                        }), o.addEventListener("transitionend", n = function(t) {
                            o.removeEventListener("transitionend", n), p(v[i]), delete v[i], r.length && (0, f["default"])(function() {
                                var n = (0, c["default"])(t.path || t.target) + "%transition%" + t.propertyName;
                                if (!e[n]) {
                                    e[n] = !0;
                                    var i = 1e3 / 60,
                                        o = Math.floor(1e3 * t.elapsedTime / i);
                                    TES.send(n, ["animFPS", (o - r.length) / o, 1e3 / l.avg(r)])
                                }
                            })
                        })
                    }), document.addEventListener("animationstart", function(t) {
                        var n, i = Math.random(),
                            o = t.target,
                            r = [];
                        TES._fps(i, function(e) {
                            r.length > 1e3 && r.shift(), r.push(e)
                        }), o.addEventListener("animationend", n = function(t) {
                            o.removeEventListener("animationend", n), p(v[i]), delete v[i], r.length && (0, f["default"])(function() {
                                var n = (0, c["default"])(t.path || t.target) + "%animation%" + t.animationName;
                                if (!e[n]) {
                                    e[n] = !0;
                                    var i = 1e3 / 60,
                                        o = Math.floor(1e3 * t.elapsedTime / i);
                                    TES.send(n, ["animFPS", (o - r.length) / o, 1e3 / l.avg(r)])
                                }
                            })
                        })
                    })
                }
            }, function(e, t, n) {
                var i = n(4);
                e.exports = function(e, t) {
                    var n, o = Date.now(),
                        r = function() {
                            var t = Date.now();
                            t - o > 10 && e(), o = t
                        };
                    if (window.addEventListener("pagehide", n = function(e) {
                            e && window.removeEventListener("pagehide", n), r()
                        }), i.supportVisiblityChange) {
                        var a;
                        document.addEventListener(i.visibilitychangeMap.visibilityChange, a = function(e) {
                            t && document.removeEventListener(i.visibilitychangeMap.visibilityChange, a), document[i.visibilitychangeMap.hidden] && r()
                        })
                    }
                }
            }, function(e, t) {
                var n = function() {
                        return document.hidden !== undefined ? {
                            "hidden": "hidden",
                            "visibilityChange": "visibilitychange"
                        } : document.msHidden !== undefined ? {
                            "hidden": "msHidden",
                            "visibilityChange": "msvisibilitychange"
                        } : document.webkitHidden !== undefined ? {
                            "hidden": "webkitHidden",
                            "visibilityChange": "webkitvisibilitychange"
                        } : void 0
                    }(),
                    i = !!n,
                    o = i || "onpagehide" in window;
                e.exports = {
                    "visibilitychangeMap": n,
                    "supportVisiblityChange": i,
                    "supportPageHideEvent": o
                }
            }, function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    "value": !0
                }), t["default"] = function(e) {
                    if ("[object Array]" === Object.prototype.toString.apply(e)) return n(e);
                    for (var t = [], i = e; i;) t.push(i), i = i.parentNode;
                    return n(t)
                };
                var n = function(e) {
                    return e.reverse().filter(function(e) {
                        return e !== window && e !== document
                    }).map(function(e) {
                        return e.id ? "#" + e.id : e.className && "string" == typeof e.className ? "." + e.className.split(" ").filter(function(e) {
                            return !!e
                        }).join(".") : e.nodeName
                    }).join(" ")
                }
            }, function(e, t) {
                e.exports = function(e) {
                    window.requestIdleCallback ? requestIdleCallback(e, {
                        "timeout": 1e3
                    }) : setTimeout(e, 0)
                }
            }, function(e, t, n) {
                function i(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }
                var o = n(5),
                    r = i(o),
                    a = n(3),
                    u = i(a);
                TES.invalidClick = function() {
                    var e = navigator.userAgent.match(/iPhone OS (\d+_\d+)/);
                    if (!e || "9_3" !== e[1]) {
                        var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        if (t) {
                            var n = function(e) {
                                var n, i = e.target,
                                    o = new t(function(e) {
                                        clearTimeout(n), o.disconnect()
                                    });
                                o.observe(document.documentElement, {
                                    "attributes": !0,
                                    "childList": !0,
                                    "characterData": !0,
                                    "subtree": !0
                                }), n = setTimeout(function() {
                                    if (o.disconnect(), ! function() {
                                            var e = i;
                                            if ("INPUT" === e.nodeName || "SELECT" === e.nodeName || "TEXTAREA" === e.nodeName || "CANVAS" === e.nodeName) return !0
                                        }()) {
                                        var t, n = (0, r["default"])(e.path || e.target);
                                        (0, u["default"])(function() {
                                            clearTimeout(t)
                                        }, !0), t = setTimeout(function() {
                                            TES.record("experience.invalidClick", n, "", {
                                                "id": n
                                            }, !0)
                                        }, 500)
                                    }
                                }, 100)
                            };
                            if ("ontouchstart" in document) {
                                var i, o;
                                document.addEventListener("touchstart", function(e) {
                                    i = e.touches[0], o = Date.now()
                                }, {
                                    "capture": !0,
                                    "passive": !0
                                }), document.addEventListener("touchend", function(e) {
                                    var t = e.changedTouches[0];
                                    t && i && Math.abs(i.pageX - t.pageX) < 30 && Math.abs(i.pageY - t.pageY) < 30 && Date.now() - o < 250 && n(e)
                                }, {
                                    "capture": !0,
                                    "passive": !0
                                })
                            } else document.addEventListener("click", n, !0)
                        }
                    }
                }
            }, function(e, t) {
                TES.time = function(e) {
                    this._timeRecord || (this._timeRecord = {}), this._timeRecord[e] = Date.now()
                }, TES.timeEnd = function(e) {
                    this._timeRecord[e] && !isNaN(this.navigationStart) && (this.send(e, ["time", this._timeRecord[e] - this.navigationStart, Date.now() - this._timeRecord[e]]), delete this._timeRecord[e])
                }
            }, function(e, t) {
                TES.timeStamp = function(e, t) {
                    isNaN(this.navigationStart) || this.send(e, ["timeStamp", (t || Date.now()) - this.navigationStart])
                }
            }, function(e, t) {
                TES.timing = function() {
                    this.navigationStart && TES.send("timing", ["perf", performance.timing])
                }
            }, function(e, t, n) {
                function i(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }
                var o = n(12),
                    r = i(o),
                    a = n(5),
                    u = i(a),
                    s = n(6),
                    c = i(s);
                TES.longTask = function() {
                    if (window.PerformanceLongTaskTiming) {
                        var e = 0;
                        new PerformanceObserver(function(t) {
                            t.getEntries().forEach(function(t) {
                                var n = (0, r["default"])();
                                (0, c["default"])(function() {
                                    TES.send("longtask_" + e, ["longtask", t.startTime, t.duration, n ? (0, u["default"])(n.path || n.target) : ""]), e++
                                })
                            })
                        }).observe({
                            "entryTypes": ["longtask"]
                        })
                    }
                }
            }, function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    "value": !0
                }), t["default"] = function() {
                    return n
                };
                var n = void 0;
                ["pointerdown", "touchstart", "mousedown", "keydown"].forEach(function(e) {
                    document.addEventListener(e, function(e) {
                        n = e
                    }, {
                        "capture": !0,
                        "passive": !0
                    })
                })
            }, function(e, t, n) {
                function i(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }
                var o = n(3),
                    r = i(o);
                TES.tsl = function() {
                    if (window.PerformanceTouchScrollLatencyTiming) {
                        var e = 0,
                            t = 0;
                        new PerformanceObserver(function(n) {
                            n.getEntries().forEach(function(n) {
                                t++, n.duration > 100 && (e++, TES.send("tsl_" + e, ["tsl", n.name, n.startTime, n.duration, t, e]))
                            })
                        }).observe({
                            "entryTypes": ["touchscrolllatency"]
                        });
                        var n;
                        (0, r["default"])(function() {
                            t > 0 && n !== t && (TES.send("tsl_" + e, ["tsl", "", "", "", t, e]), n = t)
                        })
                    }
                }
            }, function(e, t, n) {
                function i(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }
                var o = n(15),
                    r = i(o);
                TES.entries = function(e) {
                    (0, r["default"])(function() {
                        var t = TES,
                            n = t.send,
                            i = n === undefined ? function() {} : n,
                            o = window,
                            r = o.performance;
                        if (r.getEntries) {
                            var a = r.getEntries(e);
                            a.length && a.map(function(e) {
                                return i("entries", ["perf", e], !0)
                            })
                        }
                    })
                }
            }, function(e, t) {
                e.exports = function(e) {
                    var t = function() {
                        setTimeout(e, 10)
                    };
                    if (window.__windvane__)
                        if (window._WindVaneReady) e();
                        else {
                            var n = void 0;
                            document.addEventListener("WindVaneReady", n = function() {
                                window._WindVaneReady = !0, document.removeEventListener("WindVaneReady", n), e()
                            })
                        }
                    else "complete" === document.readyState ? t() : window.addEventListener("load", t)
                }
            }, function(e, t, n) {
                function i(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }
                var o = n(12),
                    r = i(o),
                    a = n(5),
                    u = i(a),
                    s = n(6),
                    c = i(s);
                TES.eventTiming = function() {
                    if (window.PerformanceEventTiming) {
                        var e = 0;
                        new PerformanceObserver(function(t) {
                            var n = t.getEntries().filter(function(e) {
                                return e.processingEnd - e.processingStart > 1
                            }).sort(function(e, t) {
                                return t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart)
                            })[0];
                            if (n) {
                                var i = (0, r["default"])();
                                (0, c["default"])(function() {
                                    TES.send("eventTiming_" + e, ["eventTiming", n.name, n.duration, n.processingEnd - n.processingStart, i ? (0, u["default"])(i.path || i.target) : "", n.startTime]), e++
                                })
                            }
                        }).observe({
                            "entryTypes": ["event"]
                        })
                    }
                }
            }]);
        ! function(e, t) {
            "function" == typeof define && define.amd ? define("@ali/mui-tes/index", [], function() {
                return e.TES = t()
            }) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.TES = t()
        }(window, function() {
            return window.TES
        });
    