
        ! function() {
            "use strict";

            function __extends(e, t) {
                function r() {
                    this.constructor = e
                }
                extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }

            function validateObjectProperties(e, t, r) {
                for (var n = 0, o = Object.keys(r); n < o.length; n++) {
                    var i = o[n];
                    if (!Object.prototype.hasOwnProperty.call(t, i)) throw new Error(e + " missing required property '" + i + "'");
                    var a = !1,
                        s = void 0,
                        l = r[i];
                    if (null !== l)
                        if ("object" == typeof l ? (s = l.kind, a = l.nullable) : s = l, a) {
                            if (null != t[i] && typeof t[i] !== s) throw new Error(e + " property '" + i + "' has incorrect type. Expected '" + s + "' or null, got '" + typeof t[i] + "'")
                        } else {
                            var c = typeof t[i];
                            if (c !== s) throw new Error(e + " property '" + i + "' has incorrect type. Expected '" + s + "', got '" + c + "'")
                        }
                }
            }

            function validatePageletConfig(e) {
                if (null == e) throw new Error("Pagelet config is null or undefined");
                if ("object" != typeof e) throw new Error("Pagelet config is not an object");
                switch (validateObjectProperties("Pagelet config", e, {
                    name: "string",
                    driver: "string"
                }), e.driver) {
                    case "simple":
                        _validateSimplePageletConfig(e);
                        break;
                    case "requirejs":
                    case "js_only":
                        _validateRequireJSPageletConfig(e);
                        break;
                    case "inline":
                        _validateInlinePageletConfig(e);
                        break;
                    default:
                        throw new Error("Unknown pagelet config driver '" + e.driver + "'")
                }
                return e
            }

            function _validateSimplePageletConfig(e) {
                if (validateObjectProperties("Pagelet config", e, {
                        html: "string",
                        script: {
                            kind: "string",
                            nullable: !0
                        },
                        stylesheets: null
                    }), !Array.isArray(e.stylesheets)) throw new Error("Pagelet config property 'stylesheets' has incorrect type. Expected 'Array' or null, got '" + typeof e.stylesheets + "'");
                for (var t = 0, r = e.stylesheets; t < r.length; t++) {
                    var n = r[t];
                    if ("string" != typeof n) throw new Error("Pagelet config property 'stylesheets' has an element of incorrect type. Expected 'string', got '" + typeof n + "'")
                }
            }

            function _validateRequireJSPageletConfig(e) {
                if (validateObjectProperties("Pagelet config", e, {
                        html: "string",
                        stylesheets: null
                    }), !Array.isArray(e.stylesheets)) throw new Error("Pagelet config property 'stylesheets' has incorrect type. Expected 'Array' or null, got '" + typeof e.stylesheets + "'");
                for (var t = 0, r = e.stylesheets; t < r.length; t++) {
                    var n = r[t];
                    if ("string" != typeof n) throw new Error("Pagelet config property 'stylesheets' has an element of incorrect type. Expected 'string', got '" + typeof n + "'")
                }
            }

            function _validateInlinePageletConfig(e) {
                validateObjectProperties("Pagelet config", e, {
                    html: "string",
                    style: {
                        kind: "string",
                        nullable: !0
                    },
                    script: {
                        kind: "string",
                        nullable: !0
                    }
                })
            }

            function validateUsers(e) {
                if (!Array.isArray(e)) throw new Error("users must be an array");
                for (var t = 0; t < e.length; t++) {
                    _validateUser(e[t])
                }
            }

            function _validateUser(e) {
                if (validateObjectProperties("User", e, {
                        userId: "number",
                        displayName: "string",
                        personalName: {
                            kind: "string",
                            nullable: !0
                        },
                        isActive: "boolean",
                        isTeam: "boolean",
                        teamName: {
                            kind: "string",
                            nullable: !0
                        },
                        teamSize: "number",
                        redirectUrl: {
                            kind: "string",
                            nullable: !0
                        },
                        role: "string"
                    }), -1 !== e.userId && !e.isTeam && null == e.personalName) throw new Error("Non-team user must have 'personalName' set");
                if (e.isTeam && null == e.teamName) throw new Error("Team user must have 'teamName' set");
                if (e.isTeam && -1 === e.teamSize) throw new Error("Team user must have 'teamSize' set");
                if (-1 === ["work", "personal"].indexOf(e.role)) throw new Error("role " + e.role + " is not recognized");
                if (-1 === e.userId && null == e.redirectUrl || -1 !== e.userId && null != e.redirectUrl) throw new Error("User property 'redirectUrl' must be set if and only if the user is not paired")
            }

            function consoleTimeStamp(e) {
                console.timeStamp && console.timeStamp(e)
            }

            function insertPagelet(e, t) {
                return e.innerHTML = t,
                    function(t) {
                        return _evaluateScripts(e, t)
                    }
            }

            function evaluateScript(e, t) {
                var r = document.createElement("div");
                return r.innerHTML = e, _evaluateScripts(r, t)
            }

            function _evaluateScripts(e, t) {
                for (var r = e.getElementsByTagName("script"), n = 0; n < r.length; n++) {
                    var o = r[n];
                    if (-1 !== ScriptTypes.indexOf(o.type)) {
                        var i = o.nonce || o.getAttribute("nonce"),
                            a = window.GlobalConstants.CSP_SCRIPT_NONCE;
                        if (a === i) {
                            if (o.src) throw new Error("Do not add scripts with src in the pagelet html, they should instead be loaded via requirejs or as pagelet dependencies");
                            eval.call(window, o.innerHTML)
                        } else t(a, i)
                    }
                }
            }

            function appendLinkTags(e, t, r) {
                for (var n = 0, o = t; n < o.length; n++) {
                    var i = o[n];
                    ! function(t) {
                        var n = _CSSElements[t];
                        if (n)
                            if (_loadedCSS[t]) r();
                            else {
                                var o = n.onload,
                                    i = n.onerror;
                                n.onload = function() {
                                    r(), o()
                                }, n.onerror = function() {
                                    r({
                                        resource: t,
                                        type: "stylesheet"
                                    }), i()
                                }
                            }
                        else {
                            var a = document.createElement("link");
                            a.href = t, a.rel = "stylesheet", a.onload = function() {
                                _loadedCSS[t] = !0, r()
                            }, a.onerror = function() {
                                r({
                                    resource: t,
                                    type: "stylesheet"
                                })
                            }, e.appendChild(a), _CSSElements[t] = a
                        }
                    }(i)
                }
            }

            function appendScriptTags(e, t, r) {
                var n;
                window.hasOwnProperty("_csp_external_script_nonce") && (n = window._csp_external_script_nonce);
                for (var o = 0, i = t; o < i.length; o++) {
                    var a = i[o];
                    ! function(t) {
                        var o = document.createElement("script");
                        o.src = t, o.type = "text/javascript", o.async = !0, o.onload = function() {
                            r()
                        }, o.onerror = function() {
                            r({
                                resource: t,
                                type: "script"
                            })
                        }, n && o.setAttribute("nonce", n), e.appendChild(o)
                    }(a)
                }
            }

            function doFrameBust(e) {
                if (e.mini_frame_bust) {
                    var t = !1;
                    try {
                        t = top.location.hostname === self.location.hostname
                    } catch (e) {}
                    if (self !== top && !t) {
                        setTimeout(function() {
                            window.DB_FRAME_BUST = !0, document.body.innerHTML = "<img src='https://cfl.dropboxstatic.com/static/images/logo.png' id='frame-bust-image'/>", document.getElementById("frame-bust-image").addEventListener("click", function(e) {
                                top.location.href = window.location.href
                            })
                        }, 4);
                        try {
                            top.location.replace(self.location.href)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }
                e.frame_bust && self === top && (document.body.style.display = "")
            }

            function reportNonceMismatch(e, t) {
                window.addRequireLoadCallback(function() {
                    var r = window.ensemble.isUsingWaaCServer ? "_" : "externals",
                        n = window.requireContexts[r].exceptionModule || "modules/core/exception";
                    requirejs.config({
                        context: r
                    })([n], function(r) {
                        r.reportStack("Refused to execute script from because GlobalConstants.CSP_SCRIPT_NONCE is defined and the nonce doesn't match.", {
                            exc_extra: {
                                page_nonce: e,
                                script_tag_nonce: t,
                                err_version: 2
                            },
                            tags: ["csp-nonce-error"]
                        })
                    })
                })
            }

            function registerEnsembleStopwatch() {
                jsStopwatch = new EnsembleStopwatch
            }

            function globalEval(script) {
                eval(script)
            }

            function removeServiceWorker() {
                navigator.serviceWorker && navigator.serviceWorker.getRegistration().then(function(e) {
                    e && e.unregister()
                })
            }
            var extendStatics = function(e, t) {
                    return (extendStatics = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                        })(e, t)
                },
                __assign = function() {
                    return __assign = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++) {
                            t = arguments[r];
                            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                        }
                        return e
                    }, __assign.apply(this, arguments)
                },
                PerfTimer = "object" == typeof performance && "function" == typeof performance.now ? performance : Date,
                FAST_FRAME_THRESHOLD = 20,
                SLOW_FRAME_THRESHOLD = 34,
                CPUIdleMonitor = function() {
                    function e() {
                        var e = this;
                        this.idleCPUTime = 0, this.busyCPUTime = 0, this.startedTracking = PerfTimer.now(), this.lastFrame = this.startedTracking, this.requestID = requestAnimationFrame(function() {
                            e.updateCPUTimes()
                        }), console.timeStamp && console.timeStamp("cpu_idle_tracking_started")
                    }
                    return e.prototype.updateCPUTimes = function(e) {
                        var t = this;
                        void 0 === e && (e = {
                            forceUpdate: !1,
                            currentCPUSpan: 0
                        });
                        var r = PerfTimer.now(),
                            n = r - this.lastFrame;
                        this.lastFrame = r;
                        var o;
                        o = n >= SLOW_FRAME_THRESHOLD ? 0 : n <= FAST_FRAME_THRESHOLD ? 1 : (SLOW_FRAME_THRESHOLD - n) / (SLOW_FRAME_THRESHOLD - FAST_FRAME_THRESHOLD);
                        var i = n * (1 - o);
                        e.forceUpdate && i < e.currentCPUSpan && (i = Math.min(n, e.currentCPUSpan)), this.busyCPUTime += i, this.idleCPUTime += n - i, e.forceUpdate || (this.requestID = requestAnimationFrame(function() {
                            t.updateCPUTimes()
                        }))
                    }, e.prototype.stop = function() {
                        null !== this.requestID && (console.timeStamp && console.timeStamp("cpu_idle_tracking_stopped"), cancelAnimationFrame(this.requestID), this.requestID = null)
                    }, e.prototype.getIdleCPUTime = function() {
                        return this.idleCPUTime
                    }, e.prototype.getCPUTimeSnapshot = function(e) {
                        return void 0 !== e && this.updateCPUTimes({
                            forceUpdate: !0,
                            currentCPUSpan: e
                        }), {
                            idleTime: this.idleCPUTime.toString(),
                            busyTime: this.busyCPUTime.toString()
                        }
                    }, e.prototype.getTotalTrackedTime = function() {
                        return this.idleCPUTime + this.busyCPUTime
                    }, e.prototype.getIdlePercentOfTracked = function() {
                        var e = this.idleCPUTime + this.busyCPUTime;
                        return 0 === e ? 0 : this.idleCPUTime / e
                    }, e.prototype.getUntrackedTimeSinceTTFB = function() {
                        if ("object" != typeof performance || "function" != typeof performance.now || "object" != typeof performance.timing || "number" != typeof performance.timing.responseStart || "number" != typeof performance.timing.navigationStart) return null;
                        var e = performance.timing.responseStart - performance.timing.navigationStart;
                        return this.startedTracking - e
                    }, e
                }(),
                hasPerfNow = !(!window.performance || !window.performance.now),
                EnsembleStopwatch = function() {
                    function e() {
                        this._data = {}
                    }
                    return e.prototype.getNow = function() {
                        if (hasPerfNow) return window.performance.now()
                    }, e.prototype.markSpan = function(e, t) {
                        if (void 0 === t && (t = {}), consoleTimeStamp(e), "number" != typeof t.startTime && (t.startTime = 0), "number" != typeof t.endTime) {
                            var r = this.getNow();
                            if (void 0 === r) return;
                            t.endTime = r
                        }
                        if (t.startTime = Math.round(t.startTime), t.endTime = Math.round(t.endTime), this._data[e]) return void console.error("stopwatch error: spanName has been used before: " + e);
                        this._data[e] = {
                            start: t.startTime,
                            end: t.endTime,
                            annotations: t.annotations || {}
                        }
                    }, e.prototype.getData = function() {
                        var e = {};
                        for (var t in this._data)
                            if (this._data.hasOwnProperty(t)) {
                                var r = this._data[t];
                                e[t] = {
                                    end: r.end,
                                    start: r.start,
                                    annotations: r.annotations
                                }
                            }
                        return e
                    }, e
                }(),
                ScriptTypes = ["text/javascript", "text/ecmascript", "application/javascript", "application/ecmascript", "", void 0],
                Viewer = function() {
                    function e(e) {
                        if (!e.users) throw new Error("Viewer config must contain users. Config: " + JSON.stringify(e));
                        validateUsers(e.users), this.users = e.users
                    }
                    return e.prototype.getActiveUser = function() {
                        for (var e = 0; e < this.users.length; e++)
                            if (this.users[e].isActive) return this.users[e];
                        return null
                    }, e.prototype.getUserById = function(e) {
                        for (var t = 0; t < this.users.length; t++) {
                            var r = this.users[t];
                            if (r.userId === e) return r
                        }
                        throw new Error("user " + e + " is not in the current viewer")
                    }, e.prototype.isValidRole = function(e) {
                        return -1 !== ["personal", "work"].indexOf(e)
                    }, e
                }(),
                _loadedCSS = {},
                _CSSElements = {},
                ResourceLoader = function() {
                    function e(e, t) {
                        if (this.totalResources = 0, this.loadedResources = 0, this.onLoadCallbacks = [], this.errors = [], e.stylesheets && (this.totalResources += e.stylesheets.length), e.scripts && (this.totalResources += e.scripts.length), t && this.onLoadCallbacks.push(t), 0 === this.totalResources) return void setTimeout(this.runCallbacks.bind(this), 0);
                        this.loadResources(e.stylesheets, e.scripts)
                    }
                    return e.prototype.isDoneLoading = function() {
                        return this.loadedResources === this.totalResources
                    }, e.prototype.addOnLoadCallback = function(e) {
                        if (this.isDoneLoading()) throw new Error("ResourceLoader error: added callback after resources have finished loading");
                        this.onLoadCallbacks.push(e)
                    }, e.prototype.loadResources = function(e, t) {
                        function r(e) {
                            this.loadedResources += 1, e && this.errors.push(e), this.loadedResources === this.totalResources && this.runCallbacks()
                        }
                        var n = r.bind(this),
                            o = document.createDocumentFragment();
                        e && appendLinkTags(o, e, n), t && appendScriptTags(o, t, n), document.body.appendChild(o)
                    }, e.prototype.runCallbacks = function() {
                        var e;
                        if (0 !== this.errors.length) {
                            e = {
                                failedStylesheets: [],
                                failedScripts: []
                            };
                            for (var t = 0, r = this.errors; t < r.length; t++) {
                                var n = r[t];
                                "stylesheet" === n.type ? e.failedStylesheets.push(n.resource) : "script" === n.type && e.failedScripts.push(n.resource)
                            }
                        }
                        for (var o = 0; o < this.onLoadCallbacks.length; o++) this.onLoadCallbacks[o](e)
                    }, e
                }(),
                TTITracker = function() {
                    function e() {
                        this._postTTICallbacks = [], this.ttiMarked = !1
                    }
                    return e.prototype.callAfterTTI = function(e) {
                        this.ttiMarked ? e() : this._postTTICallbacks.push(e)
                    }, e.prototype._triggerPostTTICallbacks = function() {
                        for (var e = 0, t = this._postTTICallbacks; e < t.length; e++) {
                            (0, t[e])()
                        }
                        this._postTTICallbacks = []
                    }, e.prototype.markTTI = function() {
                        var e = this;
                        clearTimeout(this.ttiTimeoutId), setTimeout(function() {
                            e.ttiMarked = !0, e._triggerPostTTICallbacks();
                            var t = document.createEvent("Event");
                            t.initEvent("TTI", !0, !0), window.dispatchEvent(t)
                        }, 0)
                    }, e.prototype.startTTITimeout = function(e, t) {
                        var r = this;
                        this.ttiTimeoutId = setTimeout(function() {
                            t && t(), r._triggerPostTTICallbacks()
                        }, e)
                    }, e
                }(),
                EventTracker = function() {
                    function e() {
                        this._postEventCallbacks = [], this._eventMarked = !1
                    }
                    return e.prototype.callAfterEvent = function(e) {
                        this._eventMarked ? e() : this._postEventCallbacks.push(e)
                    }, e.prototype._triggerPostEventCallbacks = function() {
                        for (var e = 0, t = this._postEventCallbacks; e < t.length; e++) {
                            (0, t[e])()
                        }
                        this._postEventCallbacks = []
                    }, e.prototype.markEvent = function() {
                        if (this._eventMarked) throw new Error("event can't be marked twice");
                        this._eventMarked = !0, this._triggerPostEventCallbacks()
                    }, e
                }(),
                cpuIdleMonitor = new CPUIdleMonitor,
                CLIENT_HANDLED_QUERY_PARAMS = {
                    role: !0,
                    email_just_verified: !0,
                    email_just_verified_and_changed: !0,
                    oref: !0,
                    always_show_progressbar: !0,
                    from_scl_sync_modal: !0
                },
                jsStopwatch, Pagelet = function() {
                    function e(e, t) {
                        this.name = e.name, this.driver = e.driver, this.exceptionInfo = t
                    }
                    return e.prototype.clearPlaceholder = function(e) {
                        if (e) {
                            var t = document.getElementById(e);
                            if (!t) throw new Error("Unable to find pagelet placeholderElementId '" + e + "'");
                            t.parentNode.removeChild(t)
                        }
                    }, e
                }(),
                SimplePagelet = function(e) {
                    function t(t, r) {
                        var n = e.call(this, t, r) || this;
                        return n.html = t.html, n.script = t.script, n.stylesheets = t.stylesheets, n
                    }
                    return __extends(t, e), t.prototype.initializeLoad = function(e, t, r, n, o) {
                        var i = this,
                            a = function() {
                                i.clearPlaceholder(t), i.renderHtml(e), r ? n.callAfterTTI(function() {
                                    return i.loadScript()
                                }) : i.loadScript(), o()
                            };
                        this.stylesheets && this.stylesheets.length > 0 ? new ResourceLoader({
                            stylesheets: this.stylesheets
                        }, a) : a()
                    }, t.prototype.renderHtml = function(e) {
                        var t = document.getElementById(e);
                        if (!t) throw new Error("Unable to find pagelet targetElementId '" + e + "'");
                        t.innerHTML = this.html
                    }, t.prototype.loadScript = function() {
                        null != this.script && globalEval(this.script)
                    }, t.prototype.getDOMInteractive = function() {
                        throw new Error("SimplePagelet does not track DOMInteractive")
                    }, t
                }(Pagelet),
                RequireJSPagelet = function(e) {
                    function t(t, r) {
                        var n = e.call(this, t, r) || this;
                        return n.html = t.html, n.stylesheets = t.stylesheets, n.delayRender = t.delayRender, n
                    }
                    return __extends(t, e), t.prototype.insertIntoDOM = function(e, t, r) {
                        var n = document.getElementById(e);
                        n.style.visibility = "hidden", n.style.position = "absolute";
                        var o = insertPagelet(n, this.html);
                        t ? r.callAfterTTI(function() {
                            return o(reportNonceMismatch)
                        }) : o(reportNonceMismatch), jsStopwatch.markSpan("dws_pagelet_render_on_page_" + e), jsStopwatch.markSpan("dws_pagelet_render_on_page_" + this.name), jsStopwatch.markSpan("dws_pagelet_render_on_page_uncached_" + this.name)
                    }, t.prototype._showPageletElement = function(e, t) {
                        var r = document.getElementById(e),
                            n = function() {
                                r.style.position = "", r.style.visibility = "visible"
                            };
                        if (!t) return void n();
                        var o = function() {
                            n();
                            var e = document.getElementById(t);
                            e && e.parentNode.removeChild(e)
                        };
                        this.delayRender ? window.ensemble.addPageletRenderCallback(e, o) : o()
                    }, t.prototype.initializeLoad = function(e, t, r, n, o) {
                        var i = this;
                        jsStopwatch.markSpan("dws_start_initialize_load_uncached_" + this.name), jsStopwatch.markSpan("dws_pagelet_payload_available_" + e), this.insertIntoDOM(e, r, n), this._domInteractive = (new Date).getTime(), console.timeStamp && console.timeStamp("DOMInteractive"), "embedded-app" === e && (window.ensemble.waitingForCss = !0), new ResourceLoader({
                            stylesheets: this.stylesheets
                        }, function() {
                            i._showPageletElement(e, t), "embedded-app" === e && (window.ensemble.waitingForCss = !1, window.ensemble.mark_tti_callback()), jsStopwatch.markSpan("dws_pagelet_css_loaded_" + e), jsStopwatch.markSpan("dws_pagelet_load_stylesheet_" + i.name), jsStopwatch.markSpan("dws_pagelet_load_stylesheet_uncached_" + i.name), o()
                        })
                    }, t.prototype.getDOMInteractive = function() {
                        if (!this._domInteractive) throw new Error("DOMInteractive has not been logged");
                        return this._domInteractive
                    }, t
                }(Pagelet),
                JSOnlyPagelet = function(e) {
                    function t(t, r) {
                        return e.call(this, __assign({}, t, {
                            driver: "requirejs",
                            html: ""
                        }), r) || this
                    }
                    return __extends(t, e), t.prototype._showPageletElement = function(e, t) {}, t.prototype.insertIntoDOM = function(e) {
                        jsStopwatch.markSpan("dws_pagelet_render_on_page_" + e), jsStopwatch.markSpan("dws_pagelet_render_on_page_" + this.name), jsStopwatch.markSpan("dws_pagelet_render_on_page_uncached_" + this.name)
                    }, t
                }(RequireJSPagelet),
                Ensemble = function() {
                    function e() {
                        var e = this;
                        this.bufferedEventEmitter = null, this.eventEmitter = null, this.ttiTracker = new TTITracker, this.ttiMarked = !1, this.ttiTracker.callAfterTTI(function() {
                            return e.ttiMarked = !0
                        }), this.pageletsByElemId = {}, this.pageletDisplayCallbacks = {}, this.displayedPagelets = {}, this.waitingForCss = !1, this.mark_tti_callback = function() {}, this.constModules = {}, this.constModuleCallbacks = {}, this.isUsingWaaCServer = !1, this._placeholderLoadedTrackerByElemId = {}, registerEnsembleStopwatch(), jsStopwatch.markSpan("dws_ensemble_constructor")
                    }
                    return e.prototype.init = function(e) {
                        var t = jsStopwatch.getNow();
                        if (jsStopwatch.markSpan("dws_ensemble_begin_init"), !e) throw new Error("Missing ensemble configuration");
                        if (!e.viewerData) throw new Error("Missing viewer data needed to initialize the Ajax calls afterwards");
                        if (!e.jsCsrfCookieName) throw new Error("Missing jsCsrfCookieName info for CSRF cookie");
                        if (!e.lastActiveRoleCookieName) throw new Error("Missing lastActiveRoleCookieName");
                        if (!e.frameProtection) throw new Error("Missing frameProtection");
                        if (!e.errorStrings) throw new Error("Missing errorStrings");
                        if (doFrameBust(e.frameProtection), !e.ttiTimeoutMS) throw new Error("Missing ttiTimeoutMS needed to ensure post-TTI pagelets always load");
                        this.ttiTracker.startTTITimeout(e.ttiTimeoutMS, function() {
                            return jsStopwatch.markSpan("dws_tti_timeout_expired")
                        }), jsStopwatch.markSpan("dws_tti_timeout_started"), this.viewer = new Viewer(e.viewerData), this.jsCsrfCookieName = e.jsCsrfCookieName, this._embeddedAppPagelet = null, this.isUsingWaaCServer = !!e.isUsingWaaCServer, this.errorStrings = e.errorStrings;
                        try {
                            this.switchedAccounts = !!sessionStorage.getItem("Ensemble.switchedAccounts"), sessionStorage.removeItem("Ensemble.switchedAccounts")
                        } catch (e) {
                            console.error(e), this.switchedAccounts = !1
                        }
                        removeServiceWorker(), this.prefetchedResourcesLoader = new ResourceLoader({
                            stylesheets: e.prefetchResources.stylesheets,
                            scripts: e.prefetchResources.scripts
                        }), window.addRequireLoadCallback(function() {
                            window.requireContexts.externals && window.requireContexts.externals.require(["jquery", "react", "external/react-dom"], function() {
                                jsStopwatch.markSpan("dws_core_externals_loaded")
                            })
                        });
                        var r = jsStopwatch.getNow(),
                            n = cpuIdleMonitor.getCPUTimeSnapshot(r && t ? r - t : void 0);
                        jsStopwatch.markSpan("dws_ensemble_init", {
                            annotations: n
                        })
                    }, e.prototype.markTTI = function() {
                        this.ttiTracker.markTTI()
                    }, e.prototype.stopwatchPagelet = function(e, t) {
                        var r = cpuIdleMonitor.getCPUTimeSnapshot(),
                            n = "dws_" + e + "_" + t;
                        console.timeStamp && console.timeStamp(n), jsStopwatch.markSpan(n, {
                            annotations: r
                        })
                    }, e.prototype.insertAfterTTI = function(e) {
                        this.ttiTracker.callAfterTTI(function() {
                            return evaluateScript(e, reportNonceMismatch)
                        })
                    }, e.prototype.snapshotTimingProfile = function() {
                        cpuIdleMonitor.stop();
                        var e = {
                                idleCPUTime: cpuIdleMonitor.getIdleCPUTime(),
                                totalTrackedCPUTime: cpuIdleMonitor.getTotalTrackedTime()
                            },
                            t = cpuIdleMonitor.getUntrackedTimeSinceTTFB();
                        return t && (e.untrackedTimeAfterFirstByte = t), e
                    }, e.prototype._markPageletRendered = function(e) {
                        if (this.displayedPagelets[e] = !0, e in this.pageletDisplayCallbacks) {
                            for (var t = 0, r = this.pageletDisplayCallbacks[e]; t < r.length; t++) {
                                (0, r[t])()
                            }
                            this.pageletDisplayCallbacks[e] = []
                        }
                    }, e.prototype.markPageletRenderedByDOMNode = function(e) {
                        for (; !e.getAttribute("data-pagelet-root");) {
                            if (null == e.parentElement) throw new Error("Cannot locate pagelet root element");
                            e = e.parentElement
                        }
                        this._markPageletRendered(e.getAttribute("data-pagelet-root"))
                    }, e.prototype.addPageletRenderCallback = function(e, t) {
                        if (e in this.displayedPagelets) return void t();
                        e in this.pageletDisplayCallbacks || (this.pageletDisplayCallbacks[e] = []), this.pageletDisplayCallbacks[e].push(t)
                    }, e.prototype.getAugmentedExceptionTags = function(e) {
                        return ["dws-js-exception"].concat(e.map(function(e) {
                            return "dws-js-exception:" + e
                        }))
                    }, e.prototype.showError = function(e) {
                        document.body.innerHTML = '\n      <link href="https://cfl.dropboxstatic.com/static/css/font_paper_atlas_grotesk.css" rel="stylesheet">\n    ';
                        var t = document.createElement("div");
                        t.id = "dws-error", t.innerHTML = '\n      <div class="embedded-app__error-state">\n        <img alt="" src="https://cfl.dropboxstatic.com/static/images/illustration_catalog/maestro_error-illo_m1.png"\n            srcset="https://cfl.dropboxstatic.com/static/images/illustration_catalog/maestro_error-illo_m1@2x.png 2x" />\n        <p>' + this.errorStrings.sorryForTheHiccup + '</p>\n        <p>\n          <a class="reload-link" href="#">\n            ' + this.errorStrings.tryRefreshingYourPage + '\n          </a>\n        </p>\n        <span id="debug_info"></span>\n      </div>\n    ', document.body.appendChild(t);
                        for (var r = document.querySelectorAll(".embedded-app__error-state .reload-link"), n = 0; n < r.length; n++) r[n].addEventListener("click", function() {
                            return window.location.reload()
                        })
                    }, e.prototype.setupPlaceholder = function(e, t, r) {
                        var n = new EventTracker;
                        this._placeholderLoadedTrackerByElemId[r] = n, this.setupPagelet(e, null, t, !1, function() {}, function() {
                            n.markEvent()
                        })
                    }, e.prototype.setupPagelet = function(e, t, r, n, o, i) {
                        var a = this;
                        if (!this.prefetchedResourcesLoader.isDoneLoading()) return void this.prefetchedResourcesLoader.addOnLoadCallback(function() {
                            a.setupPagelet(e, t, r, n, o, i)
                        });
                        var s = function() {
                                a._setupPagelet(e, t, r, n, o, function() {
                                    return i ? i() : null
                                })
                            },
                            l = this._placeholderLoadedTrackerByElemId[e];
                        null != l ? l.callAfterEvent(s) : s()
                    }, e.prototype._setupPagelet = function(e, t, r, n, o, i) {
                        var a = validatePageletConfig(r);
                        jsStopwatch.markSpan("dws_before_internal_setup_pagelet_uncached_" + a.name);
                        var s, l = {
                            pagelet_client_load_time: (new Date).getTime() / 1e3,
                            pagelet_element_id: e,
                            pagelet_name: r.name
                        };
                        switch (r.driver) {
                            case "requirejs":
                                s = new RequireJSPagelet(r, l);
                                break;
                            case "js_only":
                                s = new JSOnlyPagelet(r, l);
                                break;
                            case "simple":
                                s = new SimplePagelet(r, l);
                                break;
                            default:
                                throw new Error("unrecognized driver " + r.driver)
                        }
                        this.pageletsByElemId[e] = s, "embedded-app" === e && (this._embeddedAppPagelet = s), s.initializeLoad(e, t, n, this.ttiTracker, i), o && (n ? this.ttiTracker.callAfterTTI(o) : o())
                    }, e.prototype.loadCSS = function(e) {
                        new ResourceLoader({
                            stylesheets: e
                        })
                    }, e.prototype.getEmbeddedAppDOMInteractive = function() {
                        if (!this._embeddedAppPagelet) throw new Error("Cannot get DOMInteractive, embedded app is not initialized");
                        return this._embeddedAppPagelet.getDOMInteractive()
                    }, e.prototype.getPageletInfoForExceptionReporting = function() {
                        var e = [];
                        for (var t in this.pageletsByElemId) this.pageletsByElemId.hasOwnProperty(t) && e.push(this.pageletsByElemId[t].exceptionInfo);
                        return e
                    }, e.prototype.requestConstModule = function(e, t, r) {
                        this.constModules[t] || (this.constModules[t] = {}), this.constModuleCallbacks[t] || (this.constModuleCallbacks[t] = {}), e in this.constModules[t] ? r(this.constModules[t][e]) : (this.constModuleCallbacks[t][e] || (this.constModuleCallbacks[t][e] = []), this.constModuleCallbacks[t][e].push(r))
                    }, e.prototype.defineConstModule = function(e, t, r) {
                        if (this.constModules[t] || (this.constModules[t] = {}), !(e in this.constModules[t])) {
                            this.constModules[t][e] = r;
                            var n = this.constModuleCallbacks[t] && this.constModuleCallbacks[t][e];
                            if (n) {
                                for (var o = 0, i = n; o < i.length; o++) {
                                    (0, i[o])(r)
                                }
                                this.constModuleCallbacks[t][e] = []
                            }
                        }
                    }, e.prototype.processChunk = function(e, t, r) {
                        var n = window.performance && window.performance.mark && window.performance.measure && window.location.search.indexOf("show_debug_spans") > -1;
                        n && window.performance.mark(e + " " + t + " processChunk start");
                        var o = jsStopwatch.getNow();
                        r();
                        var i = jsStopwatch.getNow();
                        o && i && (cpuIdleMonitor.updateCPUTimes({
                            forceUpdate: !0,
                            currentCPUSpan: i - o
                        }), jsStopwatch.markSpan("dws-processChunk-" + e + "-" + t, {
                            startTime: o,
                            endTime: i,
                            annotations: cpuIdleMonitor.getCPUTimeSnapshot(i - o)
                        })), n && (window.performance.mark(e + " " + t + " processChunk end"), window.performance.measure(e + " " + t + " processChunk", e + " " + t + " processChunk start", e + " " + t + " processChunk end"))
                    }, e.prototype.preLoadJs = function(e, t) {
                        window.preLoadFile && window.preLoadFile(e)
                    }, e.prototype._hasOnlyClientHandledQueryParams = function(e) {
                        for (var t = e.split("&"), r = 0, n = t; r < n.length; r++) {
                            if (!(n[r].split("=")[0] in CLIENT_HANDLED_QUERY_PARAMS)) return !1
                        }
                        return !0
                    }, e.prototype._placeholderElementId = function(e) {
                        return e + "-placeholder"
                    }, e.prototype._getCookieValue = function(e) {
                        var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
                        return t ? t[2] : ""
                    }, e.prototype.getCsrfToken = function() {
                        return this._getCookieValue(this.jsCsrfCookieName)
                    }, e.prototype.getJSStopwatchData = function() {
                        var e = jsStopwatch.getData();
                        return window.timingCraftPrefetchStart && (e.craft_fast_prefetch_start = {
                            end: window.timingCraftPrefetchStart,
                            start: 0,
                            annotations: {}
                        }), window.timingCraftPrefetchDone && (e.craft_fast_prefetch_done = {
                            end: window.timingCraftPrefetchDone,
                            start: 0,
                            annotations: {}
                        }), e
                    }, e
                }();
            window.ensemble = new Ensemble
        }();
    