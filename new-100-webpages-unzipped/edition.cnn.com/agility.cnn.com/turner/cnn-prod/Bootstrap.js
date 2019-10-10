(function ensightenInit() {
    var ensightenOptions = {
        client: "turner",
        clientId: 1511,
        publishPath: "cnn-prod",
        isPublic: 0,
        serverComponentLocation: "agility.cnn.com/turner/cnn-prod/serverComponent.php",
        staticJavascriptPath: "agility.cnn.com/turner/cnn-prod/code/",
        ns: 'Bootstrapper',
        nexus: "agility.cnn.com",
        scUseCacheBuster: "true",
        enableTagAuditBeacon: "false",
        enablePagePerfBeacon: "false",
        registryNs: "ensBootstraps",
        generatedOn: "Mon Sep 30 07:00:31 GMT 2019",
        beaconSamplingSeedValue: 11
    };
    if (!window[ensightenOptions.ns]) {
        window[ensightenOptions.registryNs] || (window[ensightenOptions.registryNs] = {});
        window[ensightenOptions.registryNs][ensightenOptions.ns] = window[ensightenOptions.ns] = function(f) {
            function l(a) {
                this.name = "DependencyNotAvailableException";
                this.message = "Dependency with id " + a + "is missing"
            }

            function m(a) {
                this.name = "BeaconException";
                this.message = "There was an error durring beacon initialization";
                a = a || {};
                this.lineNumber = a.lineNumber || a.line;
                this.fileName = a.fileName
            }

            function n() {
                for (var a = b.dataDefinitionIds.length, c = !0, d = 0; d < a; d++) {
                    var e = b.dataDefinitions[b.dataDefinitionIds[d]];
                    if (!e ||
                        null == e.endRegistration) {
                        c = !1;
                        break
                    }
                }
                c && b.callOnDataDefintionComplete()
            }
            var e = {},
                b = {};
            b.ensightenOptions = ensightenOptions;
            b.scDataObj = {};
            e.version = "1.26.0";
            e.nexus = f.nexus || "nexus.ensighten.com";
            e.rand = -1;
            e.currSec = (new Date).getSeconds();
            e.options = {
                interval: f.interval || 100,
                erLoc: f.errorLocation || e.nexus + "/error/e.gif",
                scLoc: f.serverComponentLocation || e.nexus + "/" + f.client + "/serverComponent.php",
                sjPath: f.staticJavascriptPath || e.nexus + "/" + f.client + "/code/",
                alLoc: f.alertLocation || e.nexus + "/alerts/a.gif",
                publishPath: f.publishPath,
                isPublic: f.isPublic,
                client: f.client,
                clientId: f.clientId,
                enableTagAuditBeacon: f.enableTagAuditBeacon,
                scUseCacheBuster: f.scUseCacheBuster,
                beaconSamplingSeedValue: f.beaconSamplingSeedValue || -1
            };
            e.ruleList = [];
            e.allDeploymentIds = [];
            e.runDeploymentIds = [];
            e.runRuleIds = [];
            e.exceptionList = [];
            e.ensightenVariables = {};
            e.test = function(a) {
                if (!(a.executionData.hasRun || a.executionData.runTime && 0 < a.executionData.runTime.length)) {
                    for (var c = 0; c < a.dependencies.length; c++)
                        if (!1 === a.dependencies[c]()) return;
                    a.execute()
                }
            };
            l.prototype = Error();
            l.prototype || (l.prototype = {});
            l.prototype.constructor = l;
            e.DependencyNotAvailableException = l;
            m.prototype = Error();
            m.prototype || (m.prototype = {});
            m.prototype.constructor = m;
            e.BeaconException = m;
            e.checkForInvalidDependencies = function(a, c, d, h) {
                for (a = 0; a < d.length; a++)
                    if ("DEPENDENCYNEVERAVAILABLE" === d[a]) return b.currentRuleId = this.id, b.currentDeploymentId = this.deploymentId, b.reportException(new e.DependencyNotAvailableException(h[a])), c && -1 !== c && e.allDeploymentIds.push(c), !0;
                return !1
            };
            b.currentRuleId = -1;
            b.currentDeploymentId = -1;
            b.reportedErrors = [];
            b.reportedAlerts = [];
            b.AF = [];
            b._serverTime = "";
            b._clientIP = "";
            b.sampleBeacon = function() {
                var a = !1;
                try {
                    var c = (e.currSec || 0) % 20,
                        b = e.options.beaconSamplingSeedValue; - 1 === b ? a = !0 : 0 !== c && 0 === b % c && (a = !0)
                } catch (h) {}
                return a
            };
            b.getServerComponent = function(a) {
                b.callOnGetServerComponent();
                b.insertScript(window.location.protocol + "//" + e.options.scLoc, !1, a || !0, e.options.scUseCacheBuster)
            };
            b.setVariable = function(a, c) {
                e.ensightenVariables[a] =
                    c
            };
            b.getVariable = function(a) {
                return a in e.ensightenVariables ? e.ensightenVariables[a] : null
            };
            b.testAll = function() {
                for (var a = 0; a < e.ruleList.length; a++) e.test(e.ruleList[a])
            };
            b.executionState = {
                DOMParsed: !1,
                DOMLoaded: !1,
                dataDefinitionComplete: !1,
                conditionalRules: !1,
                readyForServerComponent: !1
            };
            b.reportException = function(a) {
                a.timestamp = (new Date).getTime();
                e.exceptionList.push(a);
                a = window.location.protocol + "//" + e.options.erLoc + "?msg=" + encodeURIComponent(a.message || "") + "&lnn=" + encodeURIComponent(a.lineNumber ||
                    a.line || -1) + "&fn=" + encodeURIComponent(a.fileName || "") + "&cid=" + encodeURIComponent(e.options.clientId || -1) + "&client=" + encodeURIComponent(e.options.client || "") + "&publishPath=" + encodeURIComponent(e.options.publishPath || "") + "&rid=" + encodeURIComponent(b.currentRuleId || -1) + "&did=" + encodeURIComponent(b.currentDeploymentId || -1) + "&errorName=" + encodeURIComponent(a.name || "");
                a = b.imageRequest(a);
                a.timestamp = (new Date).getTime();
                this.reportedErrors.push(a)
            };
            b.Rule = function(a) {
                this.execute = function() {
                    this.executionData.runTime.push(new Date);
                    b.currentRuleId = this.id;
                    b.currentDeploymentId = this.deploymentId;
                    try {
                        this.code()
                    } catch (c) {
                        window[ensightenOptions.ns].reportException(c)
                    } finally {
                        this.executionData.hasRun = !0, -1 !== this.deploymentId && (e.runDeploymentIds.push(this.deploymentId), e.runRuleIds.push(this.id)), b.testAll()
                    }
                };
                this.id = a.id;
                this.deploymentId = a.deploymentId;
                this.dependencies = a.dependencies || [];
                this.code = a.code;
                this.executionData = {
                    hasRun: !1,
                    runTime: []
                }
            };
            b.registerRule = function(a) {
                if (b.getRule(a.id) && -1 !== a.id) return !1;
                e.ruleList.push(a); -
                1 !== a.deploymentId && e.allDeploymentIds.push(a.deploymentId);
                b.testAll();
                return !0
            };
            b.getRule = function(a) {
                for (var c = 0; c < e.ruleList.length; c++)
                    if (e.ruleList[c].id === a) return e.ruleList[c];
                return !1
            };
            b.getRuleList = function() {
                return e.ruleList
            };
            b.clearRuleList = function() {
                e.ruleList = []
            };
            b.getAllDeploymentIds = function() {
                return e.allDeploymentIds
            };
            b.getRunRuleIds = function() {
                return e.runRuleIds
            };
            b.getRunDeploymentIds = function() {
                return e.runDeploymentIds
            };
            b.hasRuleRun = function(a) {
                return (a = b.getRule(a)) ? a.executionData.hasRun :
                    !1
            };
            e.toTwoChar = function(a) {
                return (2 === a.toString().length ? "" : "0") + a
            };
            b.Alert = function(a) {
                var c = new Date;
                c = c.getFullYear() + "-" + e.toTwoChar(c.getMonth()) + "-" + e.toTwoChar(c.getDate()) + " " + e.toTwoChar(c.getHours()) + ":" + e.toTwoChar(c.getMinutes()) + ":" + e.toTwoChar(c.getSeconds());
                this.severity = a.severity || 1;
                this.subject = a.subject || "";
                this.type = a.type || 1;
                this.ruleId = a.ruleId || -1;
                this.severity = encodeURIComponent(this.severity);
                this.date = encodeURIComponent(c);
                this.subject = encodeURIComponent(this.subject);
                this.type = encodeURIComponent(this.type)
            };
            b.generateAlert = function(a) {
                a = b.imageRequest(window.location.protocol + "//" + e.options.alLoc + "?d=" + a.date + "&su=" + a.subject + "&se=" + a.severity + "&t=" + a.type + "&cid=" + e.options.clientId + "&client=" + e.options.client + "&publishPath=" + e.options.publishPath + "&rid=" + b.currentRuleId + "&did=" + b.currentDeploymentId);
                a.timestamp = (new Date).getTime();
                this.reportedAlerts.push(a)
            };
            b.imageRequest = function(a) {
                var c = new Image(0, 0);
                c.src = a;
                return c
            };
            b.insertScript = function(a, c, d, h) {
                var p =
                    document.getElementsByTagName("script"),
                    g;
                h = void 0 !== h ? h : !0;
                if (void 0 !== c ? c : 1)
                    for (g = 0; g < p.length; g++)
                        if (p[g].src === a && p[g].readyState && /loaded|complete/.test(p[g].readyState)) return;
                if (d) {
                    d = 1 == d && "object" == typeof b.scDataObj ? b.scDataObj : d;
                    e.rand = Math.random() * ("1E" + (10 * Math.random()).toFixed(0));
                    c = window.location.href;
                    "object" === typeof d && d.PageID && (c = d.PageID, delete d.PageID);
                    if ("object" === typeof d)
                        for (g in d) {
                            g = ~c.indexOf("#") ? c.slice(c.indexOf("#"), c.length) : "";
                            c = c.slice(0, g.length ? c.length - g.length :
                                c.length);
                            c += ~c.indexOf("?") ? "&" : "?";
                            for (k in d) c += k + "=" + d[k] + "&";
                            c = c.slice(0, -1) + g;
                            break
                        }
                    a += "?";
                    h && (a += "r=" + e.rand + "&");
                    a += "ClientID=" + encodeURIComponent(e.options.clientId) + "&PageID=" + encodeURIComponent(c)
                }(function(a, c, b) {
                    var d = c.head || c.getElementsByTagName("head");
                    setTimeout(function() {
                        if ("item" in d) {
                            if (!d[0]) {
                                setTimeout(arguments.callee, 25);
                                return
                            }
                            d = d[0]
                        }
                        var a = c.createElement("script");
                        a.src = b;
                        a.onload = a.onerror = function() {
                            this.addEventListener && (this.readyState = "loaded")
                        };
                        d.insertBefore(a,
                            d.firstChild)
                    }, 0)
                })(window, document, a)
            };
            b.loadScriptCallback = function(a, c, b) {
                var d = document.getElementsByTagName("script"),
                    e;
                b = d[0];
                for (e = 0; e < d.length; e++)
                    if (d[e].src === a && d[e].readyState && /loaded|complete/.test(d[e].readyState)) try {
                        c()
                    } catch (g) {
                        window[ensightenOptions.ns].reportException(g)
                    } finally {
                        return
                    }
                d = document.createElement("script");
                d.type = "text/javascript";
                d.async = !0;
                d.src = a;
                d.onerror = function() {
                    this.addEventListener && (this.readyState = "loaded")
                };
                d.onload = d.onreadystatechange = function() {
                    if (!this.readyState ||
                        "complete" === this.readyState || "loaded" === this.readyState) {
                        this.onload = this.onreadystatechange = null;
                        this.addEventListener && (this.readyState = "loaded");
                        try {
                            c.call(this)
                        } catch (g) {
                            window[ensightenOptions.ns].reportException(g)
                        }
                    }
                };
                b.parentNode.insertBefore(d, b)
            };
            b.insertPageFiles = function(a) {
                var b = 0,
                    d = 0,
                    e = function() {
                        d == a.length - 1 && window[ensightenOptions.ns].callOnPageSpecificCompletion();
                        d++
                    };
                for (b = 0; b < a.length; ++b) window[ensightenOptions.ns].loadScriptCallback(a[b], e)
            };
            b.unobtrusiveAddEvent = function(a,
                b, d) {
                try {
                    var c = a[b] ? a[b] : function() {};
                    a[b] = function() {
                        d.apply(this, arguments);
                        return c.apply(this, arguments)
                    }
                } catch (p) {
                    window[ensightenOptions.ns].reportException(p)
                }
            };
            b.anonymous = function(a, c) {
                return function() {
                    try {
                        b.currentRuleId = c ? c : "anonymous", a()
                    } catch (d) {
                        window[ensightenOptions.ns].reportException(d)
                    }
                }
            };
            b.setCurrentRuleId = function(a) {
                b.currentRuleId = a
            };
            b.setCurrentDeploymentId = function(a) {
                b.currentDeploymentId = a
            };
            b.bindImmediate = function(a, c, d) {
                if ("function" === typeof a) a = new b.Rule({
                    id: c || -1,
                    deploymentId: d || -1,
                    dependencies: [],
                    code: a
                });
                else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.bindDOMParsed = function(a, c, d) {
                if ("function" === typeof a) a = new b.Rule({
                    id: c || -1,
                    deploymentId: d || -1,
                    dependencies: [function() {
                        return window[ensightenOptions.ns].executionState.DOMParsed
                    }],
                    code: a
                });
                else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.bindDOMLoaded = function(a, c, d) {
                if ("function" === typeof a) a = new b.Rule({
                    id: c || -1,
                    deploymentId: d || -1,
                    dependencies: [function() {
                        return window[ensightenOptions.ns].executionState.DOMLoaded
                    }],
                    code: a
                });
                else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.bindPageSpecificCompletion = function(a, c, d) {
                if ("function" === typeof a) a = new b.Rule({
                    id: c || -1,
                    deploymentId: d || -1,
                    dependencies: [function() {
                        return window[ensightenOptions.ns].executionState.conditionalRules
                    }],
                    code: a
                });
                else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.bindOnGetServerComponent = function(a, c, d) {
                if ("function" === typeof a) a = new b.Rule({
                    id: c || -1,
                    deploymentId: d || -1,
                    dependencies: [function() {
                        return window[ensightenOptions.ns].executionState.readyForServerComponent
                    }],
                    code: a
                });
                else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.bindDataDefinitionComplete = function(a, c, d) {
                if ("function" === typeof a) a = new b.Rule({
                    id: c || -1,
                    deploymentId: d || -1,
                    dependencies: [function() {
                        return window[ensightenOptions.ns].executionState.dataDefinitionComplete
                    }],
                    code: a
                });
                else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.checkHasRun = function(a) {
                if (0 === a.length) return !0;
                for (var c, d = 0; d < a.length; ++d)
                    if (c = b.getRule(parseInt(a[d], 10)), !c || !c.executionData.hasRun) return !1;
                return !0
            };
            b.bindDependencyImmediate = function(a, c, d, h, f) {
                var g = [];
                if (!e.checkForInvalidDependencies(c, h, d, f)) {
                    g.push(function() {
                        return window[ensightenOptions.ns].checkHasRun(d)
                    });
                    if ("function" === typeof a) a = new b.Rule({
                        id: c || -1,
                        deploymentId: h || -1,
                        dependencies: g,
                        code: a
                    });
                    else if ("object" !== typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyDOMLoaded = function(a, c, d, h, f) {
                var g = [];
                if (!e.checkForInvalidDependencies(c, h, d, f)) {
                    g.push(function() {
                        return window[ensightenOptions.ns].executionState.DOMLoaded
                    });
                    g.push(function() {
                        return window[ensightenOptions.ns].checkHasRun(d)
                    });
                    if ("function" === typeof a) a = new b.Rule({
                        id: c || -1,
                        deploymentId: h || -1,
                        dependencies: g,
                        code: a
                    });
                    else if ("object" !== typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyDOMParsed = function(a, c, d, h, f) {
                var g = [];
                if (!e.checkForInvalidDependencies(c, h, d, f)) {
                    g.push(function() {
                        return window[ensightenOptions.ns].executionState.DOMParsed
                    });
                    g.push(function() {
                        return window[ensightenOptions.ns].checkHasRun(d)
                    });
                    if ("function" === typeof a) a = new b.Rule({
                        id: c || -1,
                        deploymentId: h || -1,
                        dependencies: g,
                        code: a
                    });
                    else if ("object" !==
                        typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyPageSpecificCompletion = function(a, c, d, h, f) {
                var g = [];
                if (!e.checkForInvalidDependencies(c, h, d, f)) {
                    g.push(function() {
                        return window[ensightenOptions.ns].executionState.conditionalRules
                    });
                    g.push(function() {
                        return window[ensightenOptions.ns].checkHasRun(d)
                    });
                    if ("function" === typeof a) a = new b.Rule({
                        id: c || -1,
                        deploymentId: h || -1,
                        dependencies: g,
                        code: a
                    });
                    else if ("object" !== typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyOnGetServerComponent = function(a,
                c, d, h, f) {
                var g = [];
                if (!e.checkForInvalidDependencies(c, h, d, f)) {
                    g.push(function() {
                        return window[ensightenOptions.ns].executionState.readyForServerComponent
                    });
                    g.push(function() {
                        return window[ensightenOptions.ns].checkHasRun(d)
                    });
                    if ("function" === typeof a) a = new b.Rule({
                        id: c || -1,
                        deploymentId: h || -1,
                        dependencies: g,
                        code: a
                    });
                    else if ("object" !== typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyPageSpecificCompletion = function(a, c, d, f, p) {
                var g = [];
                if (!e.checkForInvalidDependencies(c, f, d, p)) {
                    g.push(function() {
                        return window[ensightenOptions.ns].executionState.dataDefinitionComplete
                    });
                    g.push(function() {
                        return window[ensightenOptions.ns].checkHasRun(d)
                    });
                    if ("function" === typeof a) a = new b.Rule({
                        id: c || -1,
                        deploymentId: f || -1,
                        dependencies: g,
                        code: a
                    });
                    else if ("object" !== typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.dataDefintionIds = [];
            b.dataDefinitions = [];
            b.pageSpecificDataDefinitionsSet = !1;
            b.setPageSpecificDataDefinitionIds = function(a) {
                for (var c = a ? a.length : 0, d = 0; d < c; d++) {
                    var e = a[d];
                    if (Array.prototype.indexOf) - 1 == b.dataDefinitionIds.indexOf(e) && b.dataDefinitionIds.push(e);
                    else {
                        for (var f = !1, g =
                                b.dataDefinitionIds.length, l = 0; l < g; l++)
                            if (b.dataDefinitionIds[l] === e) {
                                f = !0;
                                break
                            }
                        f || b.dataDefinitionIds.push(e)
                    }
                }
                b.pageSpecificDataDefinitionsSet = !0;
                n()
            };
            b.DataDefinition = function(a, b) {
                this.id = a;
                this.registrationFn = b;
                this.endRegistrationTime = this.startRegistrationTime = null;
                this.startRegistration = function() {
                    this.startRegistrationTime = new Date
                };
                this.endRegistration = function() {
                    this.endRegistrationTime = new Date
                }
            };
            b.registerDataDefinition = function(a, c) {
                var d = b.dataDefinitions[c];
                d || (d = new b.DataDefinition(c,
                    a), b.dataDefinitions[c] = d);
                d.startRegistrationTime || (d.startRegistration(), d.registrationFn(), d.endRegistration());
                b.pageSpecificDataDefinitionsSet && n()
            };
            b.callOnDataDefintionComplete = function() {
                b.executionState.dataDefinitionComplete = !0;
                b.testAll()
            };
            b.callOnDOMParsed = function() {
                window[ensightenOptions.ns].executionState.DOMParsed = !0;
                window[ensightenOptions.ns].testAll()
            };
            b.callOnDOMLoaded = function() {
                window[ensightenOptions.ns].executionState.DOMParsed = !0;
                window[ensightenOptions.ns].executionState.DOMLoaded = !0;
                window[ensightenOptions.ns].testAll()
            };
            b.callOnPageSpecificCompletion = function() {
                for (var a = document.getElementsByTagName("script"), b = 0, d = a.length; b < d; b++)
                    if (a[b].src && a[b].src.match(/\.ensighten\.com\/(.+?)\/code\/.*/i) && "loaded" != a[b].readyState && "complete" != a[b].readyState) {
                        setTimeout(window[ensightenOptions.ns].callOnPageSpecificCompletion, 50);
                        return
                    }
                setTimeout(function() {
                    window[ensightenOptions.ns].executionState.conditionalRules = !0;
                    window[ensightenOptions.ns].testAll()
                }, 1)
            };
            b.callOnGetServerComponent =
                function() {
                    window[ensightenOptions.ns].executionState.readyForServerComponent = !0;
                    window[ensightenOptions.ns].testAll()
                };
            b.hasDOMParsed = function() {
                return window[ensightenOptions.ns].executionState.DOMParsed
            };
            b.hasDOMLoaded = function() {
                return window[ensightenOptions.ns].executionState.DOMLoaded
            };
            b.hasPageSpecificCompletion = function() {
                return window[ensightenOptions.ns].executionState.conditionalRules
            };
            var r = function() {
                var a = [],
                    b = !1,
                    d = !1;
                return {
                    add: function(c) {
                        b && !d ? c() : "function" == typeof c && (a[a.length] =
                            c)
                    },
                    exec: function() {
                        d = !0;
                        do {
                            var c = a;
                            a = [];
                            b = !0;
                            for (var e = 0; e < c.length; e++) try {
                                c[e].call(window)
                            } catch (g) {
                                window[ensightenOptions.ns].reportException(g)
                            }
                        } while (0 < a.length);
                        d = !1
                    },
                    haveRun: function() {
                        return b
                    }
                }
            };
            b.new_fArray = function() {
                return r()
            };
            e.timer = null;
            (function() {
                function a(a, b) {
                    return function() {
                        a.apply(b, arguments)
                    }
                }
                window.console || (window.console = {});
                var b = window.console;
                if (!b.log)
                    if (window.log4javascript) {
                        var d = log4javascript.getDefaultLogger();
                        b.log = a(d.info, d);
                        b.debug = a(d.debug, d);
                        b.info =
                            a(d.info, d);
                        b.warn = a(d.warn, d);
                        b.error = a(d.error, d)
                    } else b.log = function() {};
                b.debug || (b.debug = b.log);
                b.info || (b.info = b.log);
                b.warn || (b.warn = b.log);
                b.error || (b.error = b.log)
            })();
            document.addEventListener ? (-1 < navigator.userAgent.indexOf("AppleWebKit/") ? e.timer = window.setInterval(function() {
                /loaded|interactive|complete/.test(document.readyState) && (clearInterval(e.timer), b.callOnDOMParsed())
            }, 50) : document.addEventListener("DOMContentLoaded", b.callOnDOMParsed, !1), window.addEventListener("load", b.callOnDOMLoaded, !1)) : (setTimeout(function() {
                var a = window.document;
                (function() {
                    try {
                        if (!document.body) throw "continue";
                        a.documentElement.doScroll("left")
                    } catch (c) {
                        setTimeout(arguments.callee, 15);
                        return
                    }
                    window[ensightenOptions.ns].callOnDOMParsed()
                })()
            }, 1), window.attachEvent("onload", function() {
                window[ensightenOptions.ns].callOnDOMLoaded()
            }));
            document.readyState && "complete" === document.readyState && (b.executionState.DOMParsed = !0, b.executionState.DOMLoaded = !0);
            "true" === e.options.enableTagAuditBeacon && b.sampleBeacon() &&
                window.setTimeout(function() {
                    if (window[ensightenOptions.ns] && !window[ensightenOptions.ns].mobilePlatform) try {
                        for (var a = [], c, d, h, l, g = 0; g < e.ruleList.length; ++g) d = e.ruleList[g], h = d.executionData.hasRun ? "1" : "0", l = d.deploymentId.toString() + "|" + d.id.toString() + "|" + h, a.push(l);
                        c = "[" + a.join(";") + "]";
                        var m = window.location.protocol + "//" + e.nexus + "/" + encodeURIComponent(f.client) + "/" + encodeURIComponent(f.publishPath) + "/TagAuditBeacon.rnc?cid=" + encodeURIComponent(f.clientId) + "&data=" + c + "&idx=0&r=" + e.rand;
                        b.imageRequest(m)
                    } catch (q) {
                        b.currentRuleId = -1, b.currentDeploymentId = -1, a = new e.BeaconException(q), window[ensightenOptions.ns].reportException(a)
                    }
                }, 3E3);
            window.setInterval(b.testAll, e.options.interval);
            return b
        }(ensightenOptions);
        "true" === ensightenOptions.enablePagePerfBeacon && window[ensightenOptions.ns] && window[ensightenOptions.ns].sampleBeacon() && window[ensightenOptions.ns].bindDOMParsed(function() {
            if (!window[ensightenOptions.ns].mobilePlatform) {
                var f = window.performance;
                if (f) {
                    f = f.timing || {};
                    var l = f.navigationStart || 0,
                        m = {
                            connectEnd: "ce",
                            connectStart: "cs",
                            domComplete: "dc",
                            domContentLoadedEventEnd: "dclee",
                            domContentLoadedEventStart: "dcles",
                            domInteractive: "di",
                            domLoading: "dl",
                            domainLookupEnd: "dle",
                            domainLookupStart: "dls",
                            fetchStart: "fs",
                            loadEventEnd: "lee",
                            loadEventStart: "les",
                            redirectEnd: "rede",
                            redirectStart: "reds",
                            requestStart: "reqs",
                            responseStart: "resps",
                            responseEnd: "respe",
                            secureConnectionStart: "scs",
                            unloadEventStart: "ues",
                            unloadEventEnd: "uee"
                        };
                    var n = "&ns=" + encodeURIComponent(f.navigationStart);
                    for (var e in m)
                        if (void 0 !== f[e]) {
                            var b = f[e] - l;
                            n += "&" + m[e] + "=" + (0 < b ? encodeURIComponent(b) : 0)
                        } else n += "&" + m[e] + "=-1";
                    window[ensightenOptions.ns].timing = n;
                    e = ensightenOptions.nexus || "nexus.ensighten.com";
                    f = ensightenOptions.staticJavascriptPath ||
                        "";
                    n = f.indexOf("/", 0);
                    l = f.indexOf("/code/");
                    f = f.substring(n, l) + "/perf.rnc";
                    f += "?cid=" + encodeURIComponent(ensightenOptions.clientId) + window[ensightenOptions.ns].timing;
                    window[ensightenOptions.ns].imageRequest("//" + e + f)
                }
            }
        });

        /*
         MIT License (c) copyright 2013 original author or authors */
        window[ensightenOptions.ns].data || (window[ensightenOptions.ns].when = function() {
            function f(a, b, d, c) {
                return l(a).then(b, d, c)
            }

            function p(a) {
                this.then = a
            }

            function l(a) {
                return c(function(b) {
                    b(a)
                })
            }

            function c(b) {
                function g(a) {
                    k && (r = e(a), d(k, r), k = u)
                }

                function f(a) {
                    g(h(a))
                }

                function q(b) {
                    k && d(k, a(b))
                }
                var r, k = [];
                try {
                    b(g, f, q)
                } catch (E) {
                    f(E)
                }
                return new p(function(a, b, d) {
                    return c(function(c, g, e) {
                        k ? k.push(function(f) {
                            f.then(a, b, d).then(c, g, e)
                        }) : n(function() {
                            r.then(a, b, d).then(c, g, e)
                        })
                    })
                })
            }

            function e(a) {
                return a instanceof
                p ? a : a !== Object(a) ? m(a) : c(function(b, d, c) {
                    n(function() {
                        try {
                            var g = a.then;
                            "function" === typeof g ? z(g, a, b, d, c) : b(m(a))
                        } catch (y) {
                            d(y)
                        }
                    })
                })
            }

            function m(a) {
                var b = new p(function(d) {
                    try {
                        return "function" == typeof d ? e(d(a)) : b
                    } catch (D) {
                        return h(D)
                    }
                });
                return b
            }

            function h(a) {
                var b = new p(function(d, c) {
                    try {
                        return "function" == typeof c ? e(c(a)) : b
                    } catch (F) {
                        return h(F)
                    }
                });
                return b
            }

            function a(b) {
                var d = new p(function(c, g, e) {
                    try {
                        return "function" == typeof e ? a(e(b)) : d
                    } catch (y) {
                        return a(y)
                    }
                });
                return d
            }

            function d(a, b) {
                n(function() {
                    for (var d,
                            c = 0; d = a[c++];) d(b)
                })
            }

            function b(a, b, d, g, e) {
                q(2, arguments);
                return f(a, function(a) {
                    return c(function(d, c, g) {
                        function e(a) {
                            h(a)
                        }

                        function q(a) {
                            u(a)
                        }
                        var k;
                        var n = a.length >>> 0;
                        var t = Math.max(0, Math.min(b, n));
                        var w = [];
                        var x = n - t + 1;
                        var m = [];
                        if (t) {
                            var h = function(a) {
                                m.push(a);
                                --x || (u = h = r, c(m))
                            };
                            var u = function(a) {
                                w.push(a);
                                --t || (u = h = r, d(w))
                            };
                            for (k = 0; k < n; ++k) k in a && f(a[k], q, e, g)
                        } else d(w)
                    }).then(d, g, e)
                })
            }

            function t(a, b, d, c) {
                q(1, arguments);
                return k(a, w).then(b, d, c)
            }

            function k(a, b) {
                return f(a, function(a) {
                    return c(function(d,
                        c, g) {
                        var e, q;
                        var k = e = a.length >>> 0;
                        var r = [];
                        if (k) {
                            var n = function(a, e) {
                                f(a, b).then(function(a) {
                                    r[e] = a;
                                    --k || d(r)
                                }, c, g)
                            };
                            for (q = 0; q < e; q++) q in a ? n(a[q], q) : --k
                        } else d(r)
                    })
                })
            }

            function n(a) {
                1 === x.push(a) && A(g)
            }

            function g() {
                for (var a, b = 0; a = x[b++];) a();
                x = []
            }

            function q(a, b) {
                for (var d, c = b.length; c > a;)
                    if (d = b[--c], null != d && "function" != typeof d) throw Error("arg " + c + " must be a function");
            }

            function r() {}

            function w(a) {
                return a
            }
            f.defer = function() {
                var a, b;
                var d = {
                    promise: u,
                    resolve: u,
                    reject: u,
                    notify: u,
                    resolver: {
                        resolve: u,
                        reject: u,
                        notify: u
                    }
                };
                d.promise = a = c(function(c, g, e) {
                    d.resolve = d.resolver.resolve = function(d) {
                        if (b) return l(d);
                        b = !0;
                        c(d);
                        return a
                    };
                    d.reject = d.resolver.reject = function(d) {
                        if (b) return l(h(d));
                        b = !0;
                        g(d);
                        return a
                    };
                    d.notify = d.resolver.notify = function(a) {
                        e(a);
                        return a
                    }
                });
                return d
            };
            f.resolve = l;
            f.reject = function(a) {
                return f(a, h)
            };
            f.join = function() {
                return k(arguments, w)
            };
            f.all = t;
            f.map = k;
            f.reduce = function(a, b) {
                var d = z(B, arguments, 1);
                return f(a, function(a) {
                    var c = a.length;
                    d[0] = function(a, d, g) {
                        return f(a, function(a) {
                            return f(d,
                                function(d) {
                                    return b(a, d, g, c)
                                })
                        })
                    };
                    return G.apply(a, d)
                })
            };
            f.any = function(a, d, c, g) {
                return b(a, 1, function(a) {
                    return d ? d(a[0]) : a[0]
                }, c, g)
            };
            f.some = b;
            f.isPromise = function(a) {
                return a && "function" === typeof a.then
            };
            p.prototype = {
                otherwise: function(a) {
                    return this.then(u, a)
                },
                ensure: function(a) {
                    function b() {
                        return l(a())
                    }
                    return this.then(b, b).yield(this)
                },
                yield: function(a) {
                    return this.then(function() {
                        return a
                    })
                },
                spread: function(a) {
                    return this.then(function(b) {
                        return t(b, function(b) {
                            return a.apply(u, b)
                        })
                    })
                },
                always: function(a,
                    b) {
                    return this.then(a, a, b)
                }
            };
            var u;
            var x = [];
            var H = setTimeout;
            var A = "function" === typeof setImmediate ? "undefined" === typeof window ? setImmediate : setImmediate.bind(window) : "object" === typeof process && process.nextTick ? process.nextTick : function(a) {
                H(a, 0)
            };
            var v = Function.prototype;
            var C = v.call;
            var z = v.bind ? C.bind(C) : function(a, b) {
                return a.apply(b, B.call(arguments, 2))
            };
            v = [];
            var B = v.slice;
            var G = v.reduce || function(a) {
                var b = 0;
                var d = Object(this);
                var c = d.length >>> 0;
                var g = arguments;
                if (1 >= g.length)
                    for (;;) {
                        if (b in
                            d) {
                            g = d[b++];
                            break
                        }
                        if (++b >= c) throw new TypeError;
                    } else g = g[1];
                for (; b < c; ++b) b in d && (g = a(g, d[b], b, d));
                return g
            };
            return f
        }(), function() {
            function f(c, f) {
                return l.all(f || [], function(e) {
                    return c.apply(null, e)
                })
            }

            function p(e) {
                var m = c.call(arguments, 1);
                return function() {
                    return f(e, m.concat(c.call(arguments)))
                }
            }
            var l = window[ensightenOptions.ns].when;
            var c = [].slice;
            l.apply = f;
            l.call = function(e) {
                return f(e, c.call(arguments, 1))
            };
            l.lift = p;
            l.bind = p;
            l.compose = function(e) {
                var m = c.call(arguments, 1);
                return function() {
                    var h =
                        c.call(arguments);
                    h = f(e, h);
                    return l.reduce(m, function(a, d) {
                        return d(a)
                    }, h)
                }
            }
        }(), window[ensightenOptions.ns].data = function(f, p) {
            function l(a, d) {
                this.name = "DataDefinitionException";
                this.message = d || "Data definitions cannot be resolved as there are invalid id(s): " + a
            }
            var c = {
                    engines: {
                        memory: {
                            get: function(a) {
                                if (e.utils.isArray(a)) {
                                    for (var d = [], b = 0; b < a.length; b++) d.push(c.data[a[b]]);
                                    return f[ensightenOptions.ns].when.resolve(d)
                                }
                                d = c.dataDefinitions[a] || {
                                    storage: {
                                        get: function() {}
                                    }
                                };
                                d = d.storage.get(d);
                                c.data[a] =
                                    d;
                                return f[ensightenOptions.ns].when.resolve(c.data[a])
                            },
                            set: function(a, d) {
                                if (e.utils.isArray(a))
                                    for (var b in a) c.data[a[b]] = d[b];
                                else c.data[a] = d;
                                return f[ensightenOptions.ns].when.resolve(!0)
                            },
                            remove: function(a) {
                                if (e.utils.isArray(a))
                                    for (var d in a) delete c.data[a[d]];
                                else delete c.data[a];
                                return f[ensightenOptions.ns].when.resolve(!0)
                            },
                            clear: function(a) {
                                c.data = {};
                                c.definitions = {};
                                return f[ensightenOptions.ns].when.resolve(!0)
                            },
                            all: function() {
                                return f[ensightenOptions.ns].when.resolve(c.data)
                            }
                        }
                    },
                    normalizeInputArgs: function(a, d) {
                        var b = {
                                key: [],
                                val: p
                            },
                            c;
                        if (e.utils.isPlainObject(a))
                            for (c in b.val = [], a) b.key.push(c), b.val.push(a[c]);
                        else e.utils.isArray(a), b.key = a, b.val = d;
                        return b
                    },
                    definitions: {},
                    data: {}
                },
                e = {
                    utils: {
                        isPlainObject: function(a) {
                            return !!a && "[object Object]" === Object.prototype.toString.call(a)
                        },
                        isArray: function(a) {
                            return "[object Array]" === Object.prototype.toString.call(a)
                        },
                        escapeRegEx: function(a) {
                            try {
                                return a.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
                            } catch (d) {
                                return a
                            }
                        }
                    }
                },
                m = function() {
                    return f[ensightenOptions.ns].when.reject("Not Implemented.")
                };
            l.prototype = Error();
            l.prototype || (l.prototype = {});
            l.prototype.constructor = l;
            c.DataDefinitionException = l;
            c.checkForInvalidDataDefinitions = function(a) {
                e.utils.isArray(a) || (a = [a]);
                return a && 0 < a.length && (a = a.join(","), -1 < a.indexOf("invalid_id")) ? (f[ensightenOptions.ns].reportException(new c.DataDefinitionException(a)), !0) : !1
            };
            c.collectAvailableDataDefinitions = function(a) {
                for (var d = [], b = 0; b < a.length; b++) {
                    var t = parseInt(a[b], 10),
                        k = f[ensightenOptions.ns].dataDefinitions[t];
                    if (null === k || k === p)
                        if (k = e.storage.session.get({
                                id: t
                            }),
                            null !== k && k !== p) e.set(t, k), c.dataDefinitions[t] = {
                            id: t,
                            load: "visitor",
                            storage: e.storage.visitor,
                            missingDDFromCache: !0
                        }, d.push(f[ensightenOptions.ns].data.get("" + t));
                        else return f[ensightenOptions.ns].reportException(new c.DataDefinitionException(a, "Invalid data definition used: " + t)), {
                            promises: [],
                            isInvalid: !0
                        };
                    else d.push(f[ensightenOptions.ns].data.get("" + a[b]))
                }
                return {
                    promises: d,
                    isInvalid: !1
                }
            };
            c.getSync = function(a) {
                function d(a) {
                    var d = a.extract || t,
                        c = a.transform || k,
                        g = !1,
                        e = null,
                        f = null;
                    try {
                        e = d()
                    } catch (v) {
                        e =
                            null, g = !0
                    }
                    try {
                        f = c(e)
                    } catch (v) {
                        f = null, g = !0
                    }
                    g && b.push(a.id);
                    return f
                }
                var b = [],
                    t = function() {
                        return document
                    },
                    k = function(a) {
                        return null !== a && a !== p ? a.toString() : null
                    },
                    n = parseInt(a);
                a = "string" === typeof a ? a.split(".") : [];
                var g = {},
                    q = "";
                if (!isNaN(n) && "undefined" === typeof c.dataDefinitions[n]) return f[ensightenOptions.ns].reportException(new c.DataDefinitionException(n, "Error resolving data definition: " + n + ".  Does not exist on the page.")), "Data definition specified does not exist on the page";
                if (isNaN(n) &&
                    "undefined" === typeof c.dataDefinitionsBySourceCollName["" + a[0] + "." + a[1] + "." + a[2]]) return f[ensightenOptions.ns].reportException(new c.DataDefinitionException(a, "Error resolving data definition: " + a[0] + "." + a[1] + "." + a[2] + ".  Does not exist on the page.")), "Data definition specified does not exist on the page";
                isNaN(n) ? 3 == a.length && (g = e.getDataDefinitionBySourceCollectionName(a[0], a[1], a[2])) : g = e.getDataDefinitionById(n);
                q = g.load && g.load.match(/(session|visitor)/i) && g.storage && g.storage.get ? g.storage.get(g) :
                    d(g);
                0 < b.length && f[ensightenOptions.ns].reportException(new c.DataDefinitionException(b, "Error resolving data definitions synchronously: " + b));
                return q
            };
            c.dataDefinitions = {};
            c.dataDefinitionsBySourceCollName = {};
            e.defineEngine = function(a, d) {
                var b, e = ["get", "set", "remove", "clear", "all"];
                c.engines[a] = d;
                if (!d.returnsPromise)
                    for (b = 0; b < e.length; b++) {
                        var k = e[b];
                        d[k] = f[ensightenOptions.ns].when.lift(d[k])
                    }
            };
            e.storage = {
                instance: {
                    set: function(a, d) {},
                    get: function(a) {
                        return c.getSync(a.id)
                    }
                },
                page: {
                    set: function(a,
                        d) {},
                    get: function(a) {
                        return c.data[a.id]
                    }
                },
                session: {
                    set: function(a, d) {
                        var b = e.storage.session.get({
                                id: a
                            }),
                            c = new Date,
                            k = c.getTime();
                        c.setTime(k + 18E5);
                        null != b && (d = b);
                        f[ensightenOptions.ns].data.cookie.utils.set(a, d, {
                            expires: c.toGMTString()
                        });
                        b = {
                            expires: c.getTime(),
                            value: d
                        };
                        f[ensightenOptions.ns].data.local.utils.set(a, b)
                    },
                    get: function(a) {
                        var d = f[ensightenOptions.ns].data.cookie.utils.get(a.id),
                            b = f.JSON && f.JSON.stringify ? f.JSON : f[ensightenOptions.ns].JSON;
                        b = b || {};
                        var c = new Date;
                        c = c.getTime();
                        if (null ===
                            d) {
                            try {
                                var e = b.parse(f[ensightenOptions.ns].data.local.utils.get(a.id))
                            } catch (n) {
                                e = null
                            }
                            null != e && (e.expires = +e.expires, c <= e.expires ? d = e.value : "" == e.expires && e.value != p ? d = e.value : f[ensightenOptions.ns].data.local.utils.remove(a.id))
                        }
                        return d
                    }
                },
                visitor: {
                    set: function(a, d) {
                        var b = e.storage.session.get({
                            id: a
                        });
                        null != b && (d = b);
                        f[ensightenOptions.ns].data.cookie.utils.set(a, d);
                        f[ensightenOptions.ns].data.local.utils.set(a, {
                            expires: "",
                            value: d
                        })
                    },
                    get: function(a) {
                        return e.storage.session.get(a)
                    }
                }
            };
            e.getEngine =
                e.engine = function(a) {
                    return a ? c.engines[a] || {
                        get: m,
                        set: m,
                        remove: m,
                        clear: m,
                        all: m
                    } : c.engines
                };
            e.all = function(a) {
                return f[ensightenOptions.ns].data.engine(a || "memory").all()
            };
            e.get = function(a, d, b) {
                d = d || "memory";
                b = b || {}; - 1 < a.indexOf(",") ? (a = a.split(","), a = c.normalizeInputArgs(a)) : a = c.normalizeInputArgs(a);
                return b.wait ? c.getWait(a.key, f[ensightenOptions.ns].data.engine(d), b) : c.data && c.data.hasOwnProperty(a.key) ? f[ensightenOptions.ns].data.engine(d).get(a.key) : c.getWaitForKey(a.key, f[ensightenOptions.ns].data.engine(d),
                    b)
            };
            c.getWait = function(a, d, b) {
                var c = +new Date,
                    k = f[ensightenOptions.ns].when.defer(),
                    n = function() {
                        var c = d.get(a);
                        if (-1 === b.wait) return c;
                        c.then(function(a) {
                            b.setCheck(a) ? k.resolve(a) : setTimeout(g, b.interval)
                        }, function(a) {
                            setTimeout(g, b.interval)
                        })
                    },
                    g = function() {
                        var a = +new Date - c; - 1 !== b.wait && a < b.wait ? n() : k.reject("Timeout")
                    };
                b.interval = b.interval || 500;
                b.wait = b.wait || 5E3;
                e.utils.isArray(a) ? b.setCheck = b.setCheck || function(a) {
                        for (var b = !0, d = 0; d < a.length; d++) b = b && !!a[d];
                        return b
                    } : b.setCheck = b.setCheck ||
                    function(a) {
                        return !!a
                    };
                n();
                return k.promise
            };
            c.getWaitForKey = function(a, d, b) {
                var e = f[ensightenOptions.ns].when.defer(),
                    k = function() {
                        if (c.data && c.data.hasOwnProperty(a)) {
                            var g = d.get(a);
                            if (-1 === b.wait) return g;
                            g.then(function(a) {
                                e.resolve(a)
                            }, function(a) {
                                e.reject(a)
                            })
                        } else setTimeout(n, b.interval)
                    },
                    n = function() {
                        k()
                    };
                b.interval = b.interval || 100;
                b.wait = b.wait || 1;
                k();
                return e.promise
            };
            e.set = function(a, d, b) {
                var e = c.normalizeInputArgs(a, d);
                Array.prototype.slice.call(arguments);
                return f[ensightenOptions.ns].data.engine(b ||
                    "memory").set(e.key, e.val)
            };
            e.remove = function(a, d) {
                return f[ensightenOptions.ns].data.engine(d || "memory").remove(a)
            };
            e.clear = function(a) {
                return f[ensightenOptions.ns].data.engine(a || "memory").clear()
            };
            e.define = function(a, d) {
                d && (a.name = d.id || d.name);
                if (!a.name) return f[ensightenOptions.ns].when.reject(Error("Invalid parameters: missing 'name'"));
                a.id = a.name;
                var b = a.load || "page";
                a.load = a.load || "javascript";
                a.load = -1 < a.load.indexOf("javascript") ? a.load : a.load + ",javascript";
                a.trigger = a.trigger || function() {
                    return f[ensightenOptions.ns].when.resolve()
                };
                a.priv = a.priv || !1;
                a.collection = a.collection || "Data Layer";
                a.persist = f[ensightenOptions.ns].data.engine("memory");
                a.storage = e.storage[b.toLowerCase()] || e.storage.page;
                var h = a.extract || function() {
                        return document
                    },
                    k = a.transform || function(a) {
                        return a
                    },
                    n = function(b, d) {
                        var c = [];
                        c.push(a.persist.set(b, d));
                        a.storage.set(a.id, d);
                        "object" == typeof f[ensightenOptions.ns].data.dataExport && f[ensightenOptions.ns].data.dataExport(b, d, a.collection);
                        f[ensightenOptions.ns].when.all(c).then(function(a) {
                                g.resolve(a)
                            },
                            function(a) {
                                g.reject(a)
                            })
                    },
                    g = f[ensightenOptions.ns].when.defer();
                try {
                    var q = a.trigger()
                } catch (r) {
                    f[ensightenOptions.ns].reportException(new c.DataDefinitionException(null, '"' + r + '" error caught in Data Definition trigger: ' + a.dataDefName + ", ID:" + a.id + ". Using bottom of body trigger.")), q = f[ensightenOptions.ns].data.bottomOfBodyTrigger()
                }
                q.then(function() {
                    g.resolve(f[ensightenOptions.ns].when.reduce([function() {
                        try {
                            return h()
                        } catch (r) {
                            return f[ensightenOptions.ns].reportException(new c.DataDefinitionException(null,
                                '"' + r + '" error caught in Data Definition extractor: ' + a.dataDefName + ", ID:" + a.id + ".")), null
                        }
                    }(), function() {
                        try {
                            return k.apply(this, arguments)
                        } catch (r) {
                            return f[ensightenOptions.ns].reportException(new c.DataDefinitionException(null, '"' + r + '" error caught in Data Definition transformer: ' + a.dataDefName + ", ID " + a.id + ".")), null
                        }
                    }, n], function(b, d, c, e) {
                        if (1 == c) return d(b);
                        2 == c && d(a.name, b)
                    }))
                }, function(a) {
                    g.reject(a)
                });
                c.dataDefinitions[a.id] = a;
                c.dataDefinitionsBySourceCollName["" + a.source + "." + a.collection +
                    "." + a.dataDefName] = a;
                return g.promise
            };
            e.checkConditions = function(a) {
                var d, b = {
                    lt: function(a, b) {
                        var d = +a,
                            e = +b;
                        return isNaN(d) || isNaN(e) ? (f[ensightenOptions.ns].reportException(new c.DataDefinitionException(null, "Value(s) cannot be converted to number: compareWith: " + a + ", compareTo: " + b)), !1) : d < e
                    },
                    gt: function(a, b) {
                        var d = +a,
                            e = +b;
                        return isNaN(d) || isNaN(e) ? (f[ensightenOptions.ns].reportException(new c.DataDefinitionException(null, "Value(s) cannot be converted to number: compareWith: " + a + ", compareTo: " +
                            b)), !1) : d > e
                    },
                    eql: function(a, b) {
                        return a == b
                    },
                    exists: function(a, b) {
                        return null == a || a == p || "" == a ? !1 : !0
                    },
                    re: function(a, b, d) {
                        b = new RegExp(b, d ? "i" : "");
                        try {
                            return a.match(b)
                        } catch (q) {
                            return !1
                        }
                    },
                    starts: function(a, d, c) {
                        d = e.utils.escapeRegEx(d);
                        return b.re(a, "^" + d, c)
                    },
                    ends: function(a, d, c) {
                        d = e.utils.escapeRegEx(d);
                        return b.re(a, d + "$", c)
                    },
                    contains: function(a, d, c) {
                        d = e.utils.escapeRegEx(d);
                        return b.re(a, ".*" + d + ".*", c)
                    }
                };
                b.is = b.eql;
                b["starts with"] = b.starts;
                b["ends with"] = b.ends;
                b["is greater than"] = b.gt;
                b["is less than"] =
                    b.lt;
                b.matches = b.re;
                for (d = 0; d < a.values.length; d++) {
                    var h = (a.customComparator ? a.customComparator[d] ? a.customComparator[d] : b[a.comparators[d]] : b[a.comparators[d]])(a.values[d], a.compareTo[d], a.caseInsensitive ? a.caseInsensitive[d] || !1 : !1);
                    a.not[d] && (h = !h);
                    if (!h) return !1
                }
                return !0
            };
            e.triggerPromise = function(a, d, b) {
                b = b || 5E3;
                var c = +new Date,
                    e = f[ensightenOptions.ns].when.defer();
                (function() {
                    var f = a();
                    f != d ? e.resolve(f) : +new Date - c < b ? setTimeout(arguments.callee, 200) : e.reject("timed out")
                })();
                return e.promise
            };
            e.timeoutPromise = function(a, d) {
                var b = f[ensightenOptions.ns].when.defer();
                d = d || 800;
                a.then(b.resolve, b.reject);
                setTimeout(function() {
                    b.reject(Error("timed out"))
                }, d);
                return b.promise
            };
            e.delayTrigger = function(a) {
                a = a || 10;
                var d = f[ensightenOptions.ns].when.defer();
                setTimeout(function() {
                    d.resolve()
                }, a);
                return d.promise
            };
            e.delayUntilTrigger = function(a, d, b, c) {
                b = b || null;
                c = c || 200;
                var e = +new Date,
                    h = f[ensightenOptions.ns].when.defer();
                (function() {
                    var g = a();
                    g != d ? h.resolve(g) : b ? +new Date - e < b ? setTimeout(arguments.callee,
                        c) : h.reject("timed out") : setTimeout(arguments.callee, c)
                })();
                return h.promise
            };
            c.applyTrigger = function(a) {
                var d = f[ensightenOptions.ns].when.defer();
                a(function() {
                    d.resolve(!0)
                });
                return d.promise
            };
            e.immediateTrigger = function() {
                return c.applyTrigger(f[ensightenOptions.ns].bindImmediate)
            };
            e.bottomOfBodyTrigger = function() {
                return c.applyTrigger(f[ensightenOptions.ns].bindDOMParsed)
            };
            e.whenValueExistsTrigger = function() {
                return f[ensightenOptions.ns].when.resolve(this.extract())
            };
            e.afterEnsightenCompleteTrigger =
                function() {
                    return c.applyTrigger(f[ensightenOptions.ns].bindPageSpecificCompletion)
                };
            e.afterElementsDownloadedTrigger = function() {
                return c.applyTrigger(f[ensightenOptions.ns].bindDOMLoaded)
            };
            e.getAllDataDefinitionsOnCurrentPage = function() {
                return c.dataDefinitions
            };
            e.getAllDataDefinitionsOnCurrentPage_S_C_N = function() {
                return c.dataDefinitionsBySourceCollName
            };
            e.getDataDefinitionById = function(a) {
                return c.dataDefinitions[a || -1] || {}
            };
            e.getDataDefinitionBySourceCollectionName = function(a, d, b) {
                return c.dataDefinitionsBySourceCollName["" +
                    a + "." + d + "." + b] || {}
            };
            e.getDataDefinitionByPercentSyntax = function(a) {
                a = ("" + a).split("_");
                return 1 > a.length ? {} : c.dataDefinitions[a[1]] || {}
            };
            e.resolve = function(a, d) {
                var b = this,
                    h = null;
                if (!c.checkForInvalidDataDefinitions(a))
                    if (d) f[ensightenOptions.ns].bindDataDefinitionComplete(function() {
                        var e = c.collectAvailableDataDefinitions(a);
                        e.isInvalid || f[ensightenOptions.ns].when.all(e.promises).then(function(e) {
                            try {
                                d.apply(b, e)
                            } catch (r) {
                                f[ensightenOptions.ns].reportException(new c.DataDefinitionException(a, "Error resolving data definitions: " +
                                    a + ". Details: " + r))
                            }
                        }, function(b) {
                            f[ensightenOptions.ns].reportException(new c.DataDefinitionException(a, "Error resolving data definitions: " + a + ". Details: " + b))
                        })
                    });
                    else {
                        h = [];
                        var k = a;
                        e.utils.isArray(a) || (k = [a]);
                        for (var m = 0; m < k.length; m++) h.push(c.getSync(k[m]));
                        return h = e.utils.isArray(a) ? h : h[0]
                    }
            };
            e.extract = function(a, d) {
                var b = "",
                    c = function(a, b) {
                        var d = ~b.indexOf("#") ? b.split("#")[1] : "",
                            c = d ? 0 : ~b.indexOf("[") ? parseInt(b.match(/\[(\d+)\]/)[1]) : 0,
                            e = (d ? b.split("#")[0] : c ? b.split("[")[0] : b).toLowerCase();
                        if (a == document && "html" == e && 0 == c) return document.getElementsByTagName("html")[0];
                        if (~b.indexOf("#")) return document.getElementById(b.split("#")[1]);
                        var g = a.firstChild;
                        if (!g) return null;
                        var f = 0;
                        for (c = 0 != c ? c - 1 : c; g;) {
                            if (1 == g.nodeType) {
                                if (g.tagName.toLowerCase() == e && "" != d && g.id == d || g.tagName.toLowerCase() == e && f == c && "" == d) return g;
                                g.tagName.toLowerCase() == e && f++
                            }
                            g = g.nextSibling
                        }
                    },
                    e = function(a, b) {
                        a = a.split("/");
                        for (var d = c(b || document, a[1]), e = 2; e < a.length; e++) {
                            if (null == d) return null;
                            d = c(d, a[e])
                        }
                        return d
                    },
                    h = function() {
                        for (var a = {}, b = f.document.getElementsByTagName("META") || [], d = 0, c = b.length; d < c; d++) {
                            var e = b[d].name || b[d].getAttribute("property") || "";
                            0 !== e.length && (a[e] = b[d].content)
                        }
                        return a
                    }(),
                    g = function(a) {
                        var b = h[a];
                        if (b) return b;
                        b = f.document.getElementsByTagName("META") || [];
                        for (var d = 0, c = b.length; d < c; d++) {
                            var e = b[d].name || b[d].getAttribute("property") || "";
                            if (a == e) return b[d].content
                        }
                    },
                    q = function(a) {
                        return (val = (new RegExp("&" + a + "=([^&]*)")).exec(f.location.search.replace(/^\?/, "&"))) ? val[0].split("=")[1] :
                            ""
                    },
                    r = function(a) {
                        return (val = (new RegExp("^" + a + "=.*|;\\s*" + a + "=.*")).exec(f.document.cookie)) ? val[0].split("=")[1].split(";")[0] : ""
                    },
                    m = function(a) {
                        (a = l(a)) && a.nodeType && 1 == a.nodeType && (a = a.value || a.innerHTML || "");
                        return a.toString().replace(/\n|\r|\s\s+/g, "") || ""
                    },
                    l = function(a) {
                        var b = "";
                        if (0 == a.indexOf("/HTML/BODY")) b = e(a);
                        else try {
                            b = eval(a)
                        } catch (A) {
                            b = ""
                        }
                        return b
                    };
                try {
                    return d ? "meta" == d ? b = g(a) : "cookie" == d ? b = r(a) : "param" == d ? b = q(a) : "content" == d ? b = m(a) : "event" == d ? b = l(a) : "var" == d && (b = f[a]) : b = g(a) || r(a) ||
                        q(a) || m(a) || l(a) || f[a] || "", b || ""
                } catch (x) {
                    return ""
                }
            };
            if ("undefined" == typeof h) var h = {
                exports: {}
            };
            return e
        }(window), window[ensightenOptions.ns].data.defineEngine("store", function() {
            function f(a) {
                return function() {
                    var d = Array.prototype.slice.call(arguments, 0);
                    d.unshift(b);
                    k.appendChild(b);
                    b.addBehavior("#default#userData");
                    b.load(h);
                    d = a.apply(store, d);
                    k.removeChild(b);
                    return d
                }
            }

            function p(a) {
                return a.replace(l, "___")
            }
            var l = RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
                c = {},
                e = window,
                m = e.document,
                h = "localStorage",
                a, d = Array.isArray || function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                };
            c.set = function(a, b) {};
            c.get = function(a) {};
            c.remove = function(a) {};
            c.clear = function() {};
            try {
                if (h in e && e[h]) {
                    var b = e[h];
                    c.set = function(a, c) {
                        var e, g = window.JSON && window.JSON.stringify ? window.JSON : window[ensightenOptions.ns].JSON;
                        if (d(a)) {
                            var f = 0;
                            for (e = a.length; f < e; f++) b.setItem(a[f], "string" === typeof c[f] ? c[f] : g.stringify(c[f]))
                        } else b.setItem(a, "string" === typeof c ? c : g.stringify(c))
                    };
                    c.get = function(a) {
                        if (d(a)) {
                            var c = {},
                                e;
                            var f = 0;
                            for (e = a.length; f < e; f++) c[a[f]] = b.getItem(a[f]);
                            return c
                        }
                        return b.getItem(a)
                    };
                    c.remove = function(a) {
                        if (d(a)) {
                            var c;
                            var e = 0;
                            for (c = a.length; e < c; e++) b.removeItem(a[e])
                        } else b.removeItem(a)
                    };
                    c.clear = function() {
                        b.clear()
                    };
                    c.all = function() {
                        return b
                    }
                } else if ("globalStorage" in e && e.globalStorage) b = e.globalStorage[e.location.hostname], c.set = function(a, c) {
                    if (d(a)) {
                        var e;
                        var f = 0;
                        for (e = a.length; f < e; f++) b[a[f]] = c[f]
                    } else b[a] = c
                }, c.get = function(a) {
                    if (d(a)) {
                        var c = {},
                            e;
                        var f = 0;
                        for (e = a.length; f < e; f++) c[a[f]] =
                            b[a[f]] && b[a[f]].value;
                        return c
                    }
                    return b[a] && b[a].value
                }, c.remove = function(a) {
                    if (d(a)) {
                        var c;
                        var e = 0;
                        for (c = a.length; e < c; e++) delete b[a[e]]
                    } else delete b[a]
                }, c.clear = function() {
                    for (var a in b) delete b[a]
                }, c.all = function() {
                    return b
                };
                else if (m.documentElement.addBehavior) {
                    try {
                        var t = new ActiveXObject("htmlfile");
                        t.open();
                        t.write('<script>document.w=window\x3c/script><iframe src="/favicon.ico"></frame>');
                        t.close();
                        var k = t.w.frames[0].document;
                        b = k.createElement("div")
                    } catch (g) {
                        b = m.createElement("div"),
                            k = m.body
                    }
                    c.set = f(function(a, b, e) {
                        if (d(b)) {
                            var f;
                            var g = 0;
                            for (f = b.length; g < f; g++) {
                                fixedKey = p(b[g]);
                                if (void 0 === e[g]) return c.remove(fixedKey);
                                a.setAttribute(fixedKey, e[g]);
                                a.save(h)
                            }
                        } else {
                            fixedKey = p(b);
                            if (void 0 === e) return c.remove(fixedKey);
                            a.setAttribute(fixedKey, e);
                            a.save(h)
                        }
                    });
                    c.get = f(function(a, b) {
                        if (d(b)) {
                            var c = {},
                                e;
                            var f = 0;
                            for (e = b.length; f < e; f++) {
                                var g = p(b[f]);
                                c[b[f]] = a.getAttribute(g)
                            }
                            return c
                        }
                        b = p(b);
                        return a.getAttribute(b)
                    });
                    c.remove = f(function(a, b) {
                        if (d(b)) {
                            var c;
                            var e = 0;
                            for (c = b.length; e <
                                c; e++) a.removeAttribute(p(b[e])), a.save(h)
                        } else b = p(b), a.removeAttribute(b), a.save(h)
                    });
                    c.clear = f(function(a) {
                        var b = a.XMLDocument.documentElement.attributes;
                        a.load(h);
                        for (var d = 0, c; c = b[d]; d++) a.removeAttribute(c.name);
                        a.save(h)
                    });
                    c.all = f(function(a) {
                        for (var b = a.XMLDocument.documentElement.attributes, d = {}, c = 0, e; e = b[c]; ++c) {
                            var f = p(e.name);
                            d[e.name] = a.getAttribute(f)
                        }
                        return d
                    })
                }
            } catch (g) {}
            var n = {};
            for (a in c) n[a] = c[a];
            n.testStorage = function() {
                try {
                    var a = "tk_" + Math.ceil(5E7 * Math.random());
                    n.set(a, "test");
                    if ("test" === n.get(a)) return n.remove(a), !0
                } catch (q) {}
                return !1
            };
            c.utils = n;
            return window[ensightenOptions.ns].data.local = c
        }()), window[ensightenOptions.ns].data.defineEngine("cookie", function(f, p) {
            var l = function() {
                    return l.get.apply(l, arguments)
                },
                c = l.utils = {
                    isArray: Array.isArray || function(c) {
                        return "[object Array]" === Object.prototype.toString.call(c)
                    },
                    isPlainObject: window[ensightenOptions.ns].data.utils.isPlainObject,
                    toArray: function(c) {
                        return Array.prototype.slice.call(c)
                    },
                    getKeys: Object.keys || function(c) {
                        var e = [],
                            f = "";
                        for (f in c) c.hasOwnProperty(f) && e.push(f);
                        return e
                    },
                    escape: function(c) {
                        return String(c).replace(/[,;"\\=\s%]/g, function(c) {
                            return encodeURIComponent(c)
                        })
                    },
                    retrieve: function(c, f) {
                        return null == c ? f : c
                    },
                    getAllCookies: function() {
                        if ("" === f.cookie) return {};
                        for (var c = f.cookie.split("; "), m = {}, h = 0, a = c.length; h < a; h++) {
                            var d = c[h].split("=");
                            m[decodeURIComponent(d[0])] = decodeURIComponent(d[1])
                        }
                        return m
                    },
                    set: function(e, m, h) {
                        h = h || -1;
                        if (c.isPlainObject(e))
                            for (var a in e) e.hasOwnProperty(a) && l.set(a, e[a],
                                m);
                        else if (c.isArray(e)) {
                            var d;
                            a = 0;
                            for (d = e.length; a < d; a++) l.set(e[a], m[a], h)
                        } else {
                            a = h.expires !== p ? h.expires : l.defaults.expires || "";
                            "number" === typeof a && (a = new Date(a));
                            a = c.isPlainObject(a) && "toGMTString" in a ? ";expires=" + a.toGMTString() : c.isPlainObject(a) && a instanceof Date ? ";expires=" + a.toUTCString() : ";expires=" + a;
                            d = (d = h.path || l.defaults.path) ? ";path=" + d : "";
                            var b = h.domain || l.defaults.domain;
                            b = b ? ";domain=" + b : "";
                            h = h.secure || l.defaults.secure ? ";secure" : "";
                            f.cookie = c.escape(e) + "=" + c.escape(m) + a + d + b + h
                        }
                    },
                    get: function(e, f) {
                        f = f || p;
                        var h = c.getAllCookies();
                        if (c.isArray(e)) {
                            for (var a = {}, d = 0, b = e.length; d < b; d++) a[e[d]] = c.retrieve(h[e[d]], f), a[e[d]] === p && (a[e[d]] = null);
                            return a
                        }
                        a = c.retrieve(h[e], f);
                        return a === p ? null : a
                    },
                    getGMTString: function(c) {
                        var e = new Date;
                        e.setTime(e.getTime() + 864E5 * c);
                        return e.toGMTString()
                    }
                };
            l.defaults = {
                path: "/",
                expires: c.getGMTString(90)
            };
            l.set = function(e, f) {
                c.set(e, f)
            };
            l.remove = function(e) {
                e = c.isArray(e) ? e : c.toArray(arguments);
                for (var f = 0, h = e.length; f < h; f++) c.set(e[f], "", {
                    expires: -1
                })
            };
            l.clear = function() {
                return l.remove(c.getKeys(c.getAllCookies()))
            };
            l.get = function(e, f) {
                return c.get(e, f)
            };
            l.all = function() {
                return c.getAllCookies()
            };
            l.utils = c;
            return window[ensightenOptions.ns].data.cookie = l
        }(document)));

        window[ensightenOptions.ns].ensEvent || (window[ensightenOptions.ns].ensEvent = function(p, u) {
            var k = {
                queue: {},
                pollQueue: {},
                pushTrigger: function(b, c) {
                    if ("[object Array]" === Object.prototype.toString.call(b)) {
                        for (var g = 0; g < b.length; g++) k.pushTrigger(b[g], c);
                        return !0
                    }
                    if ("string" != typeof b) return !1;
                    this.queue[b] = this.queue[b] || {
                        fn: []
                    };
                    "function" == typeof c && this.queue[b].fn.push(c);
                    return !0
                },
                callTrigger: function(b, c, g) {
                    if ("string" != typeof b) return !1;
                    b = k.queue[b];
                    if ("object" == typeof b && b.fn && b.fn.length && (0 !=
                            b.fireOnFirstSet && c == u || c != u && 0 != b.fireOnUpdate))
                        for (c = 0; c < b.fn.length; c++) try {
                            b.fn[c].call(this)
                        } catch (n) {
                            p[ensightenOptions.ns].reportException(n)
                        }
                },
                setPollOptions: function(b, c, g) {
                    this.queue[b] = this.queue[b] || {
                        fn: []
                    };
                    this.queue[b].fireOnFirstSet = c;
                    this.queue[b].fireOnUpdate = g
                },
                callPoll: function(b, c, g, p, r) {
                    if ("string" == typeof b && c && c.length && !(1 > c.length)) {
                        for (var n = 0; n < c.length; n++) k.setPollOptions(c[n], p, r);
                        k.pushWatch(b, c, g)
                    }
                },
                pushWatch: function(b, c, g) {
                    this.pollQueue[b] || (this.pollQueue[b] = {
                        previousVal: u,
                        eventArr: [],
                        valueFn: g
                    });
                    this.pollQueue[b].eventArr = this.pollQueue[b].eventArr.concat(c);
                    this.pollQueue[b].valueFn = g
                },
                globalWatch: function() {
                    setInterval(function() {
                        for (var b in k.pollQueue) {
                            var c = k.pollQueue[b],
                                g = c.valueFn(b);
                            if (c.previousVal !== g && null !== g && "" !== g) {
                                for (var n = 0; n < c.eventArr.length; n++) k.callTrigger.call(p, c.eventArr[n], c.previousVal, g);
                                k.pollQueue[b].previousVal = g
                            }
                        }
                    }, 500)
                }
            };
            k.globalWatch();
            return {
                add: function(b, c) {
                    return k.pushTrigger(b, c)
                },
                get: function(b) {
                    return k.queue[b]
                },
                trigger: function(b,
                    c) {
                    return k.callTrigger.call(c || p, b)
                },
                poll: function(b, c, g, n, r) {
                    r = r || p[ensightenOptions.ns].data.resolve;
                    return k.callPoll(b, c, r, g, n)
                }
            }
        }(window), function(p, u, k) {
            u[p] = k()
        }("qwery", window[ensightenOptions.ns], function() {
            function p() {
                this.c = {}
            }

            function u(a) {
                return H.g(a) || H.s(a, "(^|\\s+)" + a + "(\\s+|$)", 1)
            }

            function k(a, d) {
                for (var e = 0, f = a.length; e < f; e++) d(a[e])
            }

            function b(a) {
                for (var d = [], e = 0, f = a.length; e < f; ++e) l(a[e]) ? d = d.concat(a[e]) : d[d.length] = a[e];
                return d
            }

            function c(a) {
                for (var d = 0, e = a.length, f = []; d <
                    e; d++) f[d] = a[d];
                return f
            }

            function g(a) {
                for (;
                    (a = a.previousSibling) && 1 != a.nodeType;);
                return a
            }

            function n(a, d, e, f, b, h, l, c, g, k, y) {
                var I, B, m;
                if (1 !== this.nodeType || d && "*" !== d && this.tagName && this.tagName.toLowerCase() !== d || e && (I = e.match(Q)) && I[1] !== this.id) return !1;
                if (e && (m = e.match(R)))
                    for (a = m.length; a--;)
                        if (!u(m[a].slice(1)).test(this.className)) return !1;
                if (g && v.pseudos[g] && !v.pseudos[g](this, y)) return !1;
                if (f && !l)
                    for (B in g = this.attributes, g)
                        if (Object.prototype.hasOwnProperty.call(g, B) && (g[B].name || B) ==
                            b) return this;
                return f && !x(h, S(this, b) || "", l) ? !1 : this
            }

            function r(a) {
                return J.g(a) || J.s(a, a.replace(T, "\\$1"))
            }

            function x(a, d, e) {
                switch (a) {
                    case "=":
                        return d == e;
                    case "^=":
                        return d.match(w.g("^=" + e) || w.s("^=" + e, "^" + r(e), 1));
                    case "$=":
                        return d.match(w.g("$=" + e) || w.s("$=" + e, r(e) + "$", 1));
                    case "*=":
                        return d.match(w.g(e) || w.s(e, r(e), 1));
                    case "~=":
                        return d.match(w.g("~=" + e) || w.s("~=" + e, "(?:^|\\s+)" + r(e) + "(?:\\s+|$)", 1));
                    case "|=":
                        return d.match(w.g("|=" + e) || w.s("|=" + e, "^" + r(e) + "(-|$)", 1))
                }
                return 0
            }

            function q(a,
                d) {
                var e = [],
                    f = [],
                    b, h, l = d,
                    c = C.g(a) || C.s(a, a.split(K)),
                    g = a.match(L);
                if (!c.length) return e;
                var m = (c = c.slice(0)).pop();
                c.length && (b = c[c.length - 1].match(M)) && (l = N(d, b[1]));
                if (!l) return e;
                var y = m.match(E);
                var v = l !== d && 9 !== l.nodeType && g && /^[+~]$/.test(g[g.length - 1]) ? function(a) {
                    for (; l = l.nextSibling;) 1 == l.nodeType && (y[1] ? y[1] == l.tagName.toLowerCase() : 1) && (a[a.length] = l);
                    return a
                }([]) : l.getElementsByTagName(y[1] || "*");
                b = 0;
                for (m = v.length; b < m; b++)
                    if (h = n.apply(v[b], y)) e[e.length] = h;
                if (!c.length) return e;
                k(e,
                    function(a) {
                        t(a, c, g) && (f[f.length] = a)
                    });
                return f
            }

            function t(a, d, e, b) {
                function l(a, b, c) {
                    for (; c = U[e[b]](c, a);)
                        if (f(c) && n.apply(c, d[b].match(E)))
                            if (b) {
                                if (h = l(c, b - 1, c)) return h
                            } else return c
                }
                var h;
                return (h = l(a, d.length - 1, a)) && (!b || z(h, b))
            }

            function f(a, d) {
                return a && "object" === typeof a && (d = a.nodeType) && (1 == d || 9 == d)
            }

            function h(a) {
                var d = [],
                    e;
                var f = 0;
                a: for (; f < a.length; ++f) {
                    for (e = 0; e < d.length; ++e)
                        if (d[e] == a[f]) continue a;
                    d[d.length] = a[f]
                }
                return d
            }

            function l(a) {
                return "object" === typeof a && isFinite(a.length)
            }

            function N(a, d, e) {
                return 9 === a.nodeType ? a.getElementById(d) : a.ownerDocument && ((e = a.ownerDocument.getElementById(d)) && z(e, a) && e || !z(a, a.ownerDocument) && F('[id="' + d + '"]', a)[0])
            }

            function v(a, d) {
                var e, h;
                var g = d ? "string" == typeof d ? v(d)[0] : !d.nodeType && l(d) ? d[0] : d : m;
                if (!g || !a) return [];
                if (a === window || f(a)) return !d || a !== window && f(g) && z(a, g) ? [a] : [];
                if (a && l(a)) return b(a);
                if (e = a.match(V)) {
                    if (e[1]) return (h = N(g, e[1])) ? [h] : [];
                    if (e[2]) return c(g.getElementsByTagName(e[2]));
                    if (W && e[3]) return c(g.getElementsByClassName(e[3]))
                }
                return F(a,
                    g)
            }

            function y(a, d) {
                return function(e) {
                    var f, b;
                    O.test(e) ? 9 !== a.nodeType && ((b = f = a.getAttribute("id")) || a.setAttribute("id", b = "__qwerymeupscotty"), d(a.parentNode || a, '[id="' + b + '"]' + e, !0), f || a.removeAttribute("id")) : e.length && d(a, e, !1)
                }
            }
            var m = document,
                D = m.documentElement,
                F, Q = /#([\w\-]+)/,
                R = /\.[\w\-]+/g,
                M = /^#([\w\-]+)$/,
                X = /^([\w]+)?\.([\w\-]+)$/,
                O = /(^|,)\s*[>~+]/,
                Y = /^\s+|\s*([,\s\+~>]|$)\s*/g,
                A = /[\s>\+~]/,
                P = /(?![\s\w\-\/\?&=:\.\(\)!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
                T = /([.*+?\^=!:${}()|\[\]\/\\])/g,
                V = new RegExp(M.source + "|" + /^([\w\-]+)$/.source + "|" + /^\.([\w\-]+)$/.source),
                L = new RegExp("(" + A.source + ")" + P.source, "g"),
                K = new RegExp(A.source + P.source),
                E = new RegExp(/^(\*|[a-z0-9]+)?(?:([\.#]+[\w\-\.#]+)?)/.source + "(" + /\[([\w\-]+)(?:([\|\^\$\*~]?=)['"]?([ \w\-\/\?&=:\.\(\)!,@#%<>\{\}\$\*\^]+)["']?)?\]/.source + ")?(" + /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/.source + ")?"),
                U = {
                    " ": function(a) {
                        return a && a !== D && a.parentNode
                    },
                    ">": function(a, d) {
                        return a && a.parentNode == d.parentNode && a.parentNode
                    },
                    "~": function(a) {
                        return a &&
                            a.previousSibling
                    },
                    "+": function(a, d, e, f) {
                        return a ? (e = g(a)) && (f = g(d)) && e == f && e : !1
                    }
                };
            p.prototype = {
                g: function(a) {
                    return this.c[a] || void 0
                },
                s: function(a, d, e) {
                    d = e ? new RegExp(d) : d;
                    return this.c[a] = d
                }
            };
            var H = new p,
                J = new p,
                w = new p,
                C = new p,
                z = "compareDocumentPosition" in D ? function(a, d) {
                    return 16 == (d.compareDocumentPosition(a) & 16)
                } : "contains" in D ? function(a, d) {
                    d = 9 === d.nodeType || d == window ? D : d;
                    return d !== a && d.contains(a)
                } : function(a, d) {
                    for (; a = a.parentNode;)
                        if (a === d) return 1;
                    return 0
                },
                S = function() {
                    var a = m.createElement("p");
                    return (a.innerHTML = '<a href="#x">x</a>', "#x" != a.firstChild.getAttribute("href")) ? function(a, e) {
                        return "class" === e ? a.className : "href" === e || "src" === e ? a.getAttribute(e, 2) : a.getAttribute(e)
                    } : function(a, e) {
                        return a.getAttribute(e)
                    }
                }(),
                W = !!m.getElementsByClassName,
                Z = m.querySelector && m.querySelectorAll,
                aa = function(a, d) {
                    var e = [],
                        f, b;
                    try {
                        if (9 === d.nodeType || !O.test(a)) return c(d.querySelectorAll(a));
                        k(f = a.split(","), y(d, function(a, d) {
                            b = a.querySelectorAll(d);
                            1 == b.length ? e[e.length] = b.item(0) : b.length && (e = e.concat(c(b)))
                        }));
                        return 1 < f.length && 1 < e.length ? h(e) : e
                    } catch (ba) {}
                    return G(a, d)
                },
                G = function(a, d) {
                    var e = [],
                        f, b;
                    a = a.replace(Y, "$1");
                    if (f = a.match(X)) {
                        var l = u(f[2]);
                        f = d.getElementsByTagName(f[1] || "*");
                        var c = 0;
                        for (b = f.length; c < b; c++) l.test(f[c].className) && (e[e.length] = f[c]);
                        return e
                    }
                    k(f = a.split(","), y(d, function(a, f, h) {
                        l = q(f, a);
                        c = 0;
                        for (b = l.length; c < b; c++)
                            if (9 === a.nodeType || h || z(l[c], d)) e[e.length] = l[c]
                    }));
                    return 1 < f.length && 1 < e.length ? h(e) : e
                };
            A = function(a) {
                "undefined" !== typeof a.useNativeQSA && (F = a.useNativeQSA ? Z ? aa : G :
                    G)
            };
            A({
                useNativeQSA: !0
            });
            v.configure = A;
            v.uniq = h;
            v.is = function(a, d, e) {
                if (f(d)) return a == d;
                if (l(d)) return !!~b(d).indexOf(a);
                for (var c = d.split(","), h; d = c.pop();)
                    if (h = C.g(d) || C.s(d, d.split(K)), d = d.match(L), h = h.slice(0), n.apply(a, h.pop().match(E)) && (!h.length || t(a, h, d, e))) return !0;
                return !1
            };
            v.pseudos = {};
            return v
        }), function() {
            function p(f, b, c) {
                n || (n = window[ensightenOptions.ns].qwery);
                var h = n;
                if ((h = h.call(c, b, c)) && 0 < h.length) {
                    if ("_root" == b) f = c;
                    else if (f === c) f = void 0;
                    else {
                        b: {
                            for (var l = h.length, g = 0; g < l; g++)
                                if (f ===
                                    h[g]) {
                                    h = !0;
                                    break b
                                }
                            h = !1
                        }
                        h || (f.parentNode ? (r++, f = p(f.parentNode, b, c)) : f = void 0)
                    }
                    return f
                }
                return !1
            }

            function u(f, b, c, g) {
                q[f.id] || (q[f.id] = {});
                q[f.id][b] || (q[f.id][b] = {});
                q[f.id][b][c] || (q[f.id][b][c] = []);
                q[f.id][b][c].push(g)
            }

            function k(f, b, c, g) {
                if (g || c)
                    if (g)
                        for (var h = 0; h < q[f.id][b][c].length; h++) {
                            if (q[f.id][b][c][h] === g) {
                                q[f.id][b][c].pop(h, 1);
                                break
                            }
                        } else delete q[f.id][b][c];
                    else q[f.id][b] = {}
            }

            function b(b, c, l) {
                if (q[b][l]) {
                    var f = c.target || c.srcElement,
                        h, k, m = {},
                        n = k = 0;
                    r = 0;
                    for (h in q[b][l]) q[b][l].hasOwnProperty(h) &&
                        (k = p(f, h, t[b].element)) && g.matchesEvent(l, t[b].element, k, "_root" == h, c) && (r++, q[b][l][h].match = k, m[r] = q[b][l][h]);
                    c.stopPropagation = function() {
                        c.cancelBubble = !0
                    };
                    for (k = 0; k <= r; k++)
                        if (m[k])
                            for (n = 0; n < m[k].length; n++) {
                                if (!1 === m[k][n].call(m[k].match, c)) {
                                    g.cancel(c);
                                    return
                                }
                                if (c.cancelBubble) return
                            }
                }
            }

            function c(c, h, l, n) {
                function f(c) {
                    return function(f) {
                        b(p, f, c)
                    }
                }
                c instanceof Array || (c = [c]);
                l || "function" != typeof h || (l = h, h = "_root");
                var p = this.id,
                    m;
                for (m = 0; m < c.length; m++) q[p] && q[p][c[m]] || g.addEvent(this, c[m],
                    f(c[m])), n ? k(this, c[m], h, l) : u(this, c[m], h, l);
                return this
            }

            function g(b, c, l, k) {
                if ("string" == typeof b && "function" == typeof c || "string" == typeof c) g(document).on(b, c, l, k || !1);
                if (!(this instanceof g)) {
                    for (var f in t)
                        if (t[f].element === b) return t[f];
                    x++;
                    t[x] = new g(b, x);
                    t[x]._on = t[x].on;
                    t[x].on = function(b, c, f, g) {
                        var h = "function" == typeof c ? c : f;
                        if ("function" == typeof c ? f : g) b = [b], "string" == typeof c && b.push(c), b.push(function(b) {
                            return function(c) {
                                c.defaultPrevented || window[ensightenOptions.ns].Delegate.load(this);
                                if (this.nodeName && "a" != this.nodeName.toLowerCase()) return b.call(this);
                                "undefined" != typeof c.preventDefault ? c.preventDefault() : c.returnValue = !1;
                                b.call(this)
                            }
                        }(h)), this._on.apply(this, b);
                        else return this._on.call(this, b, c, f)
                    };
                    return t[x]
                }
                this.element = b;
                this.id = c
            }
            var n, r = 0,
                x = 0,
                q = {},
                t = {};
            g.prototype.on = function(b, g, l) {
                return c.call(this, b, g, l)
            };
            g.prototype.off = function(b, g, l) {
                return c.call(this, b, g, l, !0)
            };
            g.cancel = function(b) {
                b.preventDefault();
                b.stopPropagation()
            };
            g.addEvent = function(b, c, g) {
                b.element.addEventListener(c,
                    g, "blur" == c || "focus" == c)
            };
            g.matchesEvent = function() {
                return !0
            };
            g.load = function(b) {
                setTimeout(function(b, c) {
                    return function() {
                        if (b.nodeName && "a" == b.nodeName.toLowerCase()) {
                            if (c && /^javascript\s*:/.test(c)) return (new Function(unescape(c))).call(window);
                            c && (window.location.href = c)
                        }
                    }
                }(b, b.href || ""), 750)
            };
            window[ensightenOptions.ns].Delegate = g
        }(), function(p) {
            var u = p.addEvent;
            p.addEvent = function(k, b, c) {
                if (k.element.addEventListener) return u(k, b, c);
                "focus" == b && (b = "focusin");
                "blur" == b && (b = "focusout");
                k.element.attachEvent("on" +
                    b, c)
            };
            p.cancel = function(k) {
                k.preventDefault && k.preventDefault();
                k.stopPropagation && k.stopPropagation();
                k.returnValue = !1;
                k.cancelBubble = !0
            }
        }(window[ensightenOptions.ns].Delegate), window[ensightenOptions.ns].on = window[ensightenOptions.ns].Delegate);
        Bootstrapper.dataDefinitionIds = [19706];
        /*
         ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

        Adobe Visitor API for JavaScript version: 3.3.0
        Copyright 2018 Adobe, Inc. All Rights Reserved
        More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
         A simple PubSub in JavaScript - v1.0.0 - 2014-01-12
         https://github.com/bdadam/PubSub
         The MIT License (MIT)
         Copyright (c) 2013 Adam Beres-Deak */
        Bootstrapper.bindDependencyImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            window.trackPageView = function() {
                Bootstrapper.bindPageSpecificCompletion(function() {
                    setTimeout(function() {
                        Bootstrapper.AF.push(["call", "s", "exec"])
                    }, 500)
                })
            };
            if (!Bootstrapper.Util.isDynamicPage() && !Bootstrapper.Util.isFavePage()) window.trackPageView()
        }, 3001016, [3011653], 588434, [578538]);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            var visitorObj = {
                "trackingServer": "metrics.cnn.com",
                "cookieLifetime": "",
                "cookieDomain": "",
                "disableIdSyncs": false
            };
            if ("smetrics.cnn.com") visitorObj.trackingServerSecure = "smetrics.cnn.com";
            if ("") visitorObj.marketingCloudServer = "";
            if ("") visitorObj.marketingCloudServerSecure = "";
            if ("") visitorObj.loadTimeout = "";
            if (typeof visitorObj != "undefined") visitorObj.disableIdSyncs = false;
            var e = function() {
                function e() {
                    return {
                        callbacks: {},
                        add: function(e, t) {
                            this.callbacks[e] = this.callbacks[e] || [];
                            var i = this.callbacks[e].push(t) - 1;
                            return function() {
                                this.callbacks[e].splice(i, 1)
                            }
                        },
                        execute: function(e, t) {
                            if (this.callbacks[e]) {
                                t = void 0 === t ? [] : t, t = t instanceof Array ? t : [t];
                                try {
                                    for (; this.callbacks[e].length;) {
                                        var i = this.callbacks[e].shift();
                                        "function" == typeof i ? i.apply(null, t) : i instanceof Array && i[1].apply(i[0], t)
                                    }
                                    delete this.callbacks[e]
                                } catch (e) {}
                            }
                        },
                        executeAll: function(e, t) {
                            (t || e && !v.isObjectEmpty(e)) &&
                            Object.keys(this.callbacks).forEach(function(t) {
                                var i = void 0 !== e[t] ? e[t] : "";
                                this.execute(t, i)
                            }, this)
                        },
                        hasCallbacks: function() {
                            return Boolean(Object.keys(this.callbacks).length)
                        }
                    }
                }

                function t(e) {
                    for (var t = /^\d+$/, i = 0, n = e.length; i < n; i++)
                        if (!t.test(e[i])) return !1;
                    return !0
                }

                function i(e, t) {
                    for (; e.length < t.length;) e.push("0");
                    for (; t.length < e.length;) t.push("0")
                }

                function n(e, t) {
                    for (var i = 0; i < e.length; i++) {
                        var n = parseInt(e[i], 10),
                            r = parseInt(t[i], 10);
                        if (n > r) return 1;
                        if (r > n) return -1
                    }
                    return 0
                }

                function r(e, r) {
                    if (e ===
                        r) return 0;
                    var a = e.toString().split("."),
                        s = r.toString().split(".");
                    return t(a.concat(s)) ? (i(a, s), n(a, s)) : NaN
                }
                var a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
                Object.assign = Object.assign || function(e) {
                    for (var t, i, n = 1; n < arguments.length; ++n) {
                        i = arguments[n];
                        for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t])
                    }
                    return e
                };
                var s = {
                        HANDSHAKE: "HANDSHAKE",
                        GETSTATE: "GETSTATE",
                        PARENTSTATE: "PARENTSTATE"
                    },
                    o = {
                        MCMID: "MCMID",
                        MCAID: "MCAID",
                        MCAAMB: "MCAAMB",
                        MCAAMLH: "MCAAMLH",
                        MCOPTOUT: "MCOPTOUT",
                        CUSTOMERIDS: "CUSTOMERIDS"
                    },
                    l = {
                        MCMID: "getMarketingCloudVisitorID",
                        MCAID: "getAnalyticsVisitorID",
                        MCAAMB: "getAudienceManagerBlob",
                        MCAAMLH: "getAudienceManagerLocationHint",
                        MCOPTOUT: "getOptOut"
                    },
                    d = {
                        CUSTOMERIDS: "getCustomerIDs"
                    },
                    c = {
                        MCMID: "getMarketingCloudVisitorID",
                        MCAAMB: "getAudienceManagerBlob",
                        MCAAMLH: "getAudienceManagerLocationHint",
                        MCOPTOUT: "getOptOut",
                        MCAID: "getAnalyticsVisitorID",
                        CUSTOMERIDS: "getCustomerIDs"
                    },
                    u = {
                        MC: "MCMID",
                        A: "MCAID",
                        AAM: "MCAAMB"
                    },
                    f = {
                        MCMID: "MCMID",
                        MCOPTOUT: "MCOPTOUT",
                        MCAID: "MCAID",
                        MCAAMLH: "MCAAMLH",
                        MCAAMB: "MCAAMB"
                    },
                    g = {
                        UNKNOWN: 0,
                        AUTHENTICATED: 1,
                        LOGGED_OUT: 2
                    },
                    m = {
                        GLOBAL: "global"
                    },
                    _ = {
                        MESSAGES: s,
                        STATE_KEYS_MAP: o,
                        ASYNC_API_MAP: l,
                        SYNC_API_MAP: d,
                        ALL_APIS: c,
                        FIELDGROUP_TO_FIELD: u,
                        FIELDS: f,
                        AUTH_STATE: g,
                        OPT_OUT: m
                    },
                    h = _.STATE_KEYS_MAP,
                    p = function(e) {
                        function t() {}

                        function i(t, i) {
                            var n = this;
                            return function() {
                                var t = e(0, h.MCMID),
                                    r = {};
                                return r[h.MCMID] = t, n.setStateAndPublish(r), i(t), t
                            }
                        }
                        this.getMarketingCloudVisitorID = function(e) {
                            e = e || t;
                            var n = this.findField(h.MCMID,
                                    e),
                                r = i.call(this, h.MCMID, e);
                            return void 0 !== n ? n : r()
                        }
                    },
                    C = _.MESSAGES,
                    S = _.ASYNC_API_MAP,
                    I = _.SYNC_API_MAP,
                    D = function() {
                        function e() {}

                        function t(e, t) {
                            var i = this;
                            return function() {
                                return i.callbackRegistry.add(e, t), i.messageParent(C.GETSTATE), ""
                            }
                        }

                        function i(i) {
                            this[S[i]] = function(n) {
                                n = n || e;
                                var r = this.findField(i, n),
                                    a = t.call(this, i, n);
                                return void 0 !== r ? r : a()
                            }
                        }

                        function n(t) {
                            this[I[t]] = function() {
                                return this.findField(t, e) || {}
                            }
                        }
                        Object.keys(S).forEach(i, this), Object.keys(I).forEach(n, this)
                    },
                    A = _.ASYNC_API_MAP,
                    M = function() {
                        Object.keys(A).forEach(function(e) {
                            this[A[e]] = function(t) {
                                this.callbackRegistry.add(e, t)
                            }
                        }, this)
                    },
                    v = function(e, t) {
                        return t = {
                            exports: {}
                        }, e(t, t.exports), t.exports
                    }(function(e, t) {
                        t.isObjectEmpty = function(e) {
                            return e === Object(e) && 0 === Object.keys(e).length
                        }, t.isValueEmpty = function(e) {
                            return "" === e || t.isObjectEmpty(e)
                        }, t.getIeVersion = function() {
                            if (document.documentMode) return document.documentMode;
                            for (var e = 7; e > 4; e--) {
                                var t = document.createElement("div");
                                if (t.innerHTML = "\x3c!--[if IE " + e + "]\x3e\x3cspan\x3e\x3c/span\x3e\x3c![endif]--\x3e",
                                    t.getElementsByTagName("span").length) return t = null, e;
                                t = null
                            }
                            return null
                        }, t.encodeAndBuildRequest = function(e, t) {
                            return e.map(encodeURIComponent).join(t)
                        }, t.isObject = function(e) {
                            return null !== e && "object" == typeof e && !1 === Array.isArray(e)
                        }
                    }),
                    y = (v.isObjectEmpty, v.isValueEmpty, v.getIeVersion, v.encodeAndBuildRequest, v.isObject, e),
                    b = _.MESSAGES,
                    T = {
                        0: "prefix",
                        1: "orgID",
                        2: "state"
                    },
                    k = function(e, t) {
                        this.parse = function(e) {
                            try {
                                var t = {};
                                return e.data.split("|").forEach(function(e, i) {
                                    if (void 0 !== e) t[T[i]] = 2 !== i ?
                                        e : JSON.parse(e)
                                }), t
                            } catch (e) {}
                        }, this.isInvalid = function(i) {
                            var n = this.parse(i);
                            if (!n || Object.keys(n).length < 2) return !0;
                            var r = e !== n.orgID,
                                a = !t || i.origin !== t,
                                s = -1 === Object.keys(b).indexOf(n.prefix);
                            return r || a || s
                        }, this.send = function(i, n, r) {
                            var a = n + "|" + e;
                            r && r === Object(r) && (a += "|" + JSON.stringify(r));
                            try {
                                i.postMessage(a, t)
                            } catch (e) {}
                        }
                    },
                    O = _.MESSAGES,
                    E = function(e, t, i, n) {
                        function r(e) {
                            Object.assign(m, e)
                        }

                        function s(e) {
                            Object.assign(m.state, e), m.callbackRegistry.executeAll(m.state)
                        }

                        function o(e) {
                            if (!C.isInvalid(e)) {
                                h = !1;
                                var t = C.parse(e);
                                m.setStateAndPublish(t.state)
                            }
                        }

                        function l(e) {
                            !h && _ && (h = !0, C.send(n, e))
                        }

                        function d() {
                            r(new p(i._generateID)), m.getMarketingCloudVisitorID(), m.callbackRegistry.executeAll(m.state, !0), a.removeEventListener("message", c)
                        }

                        function c(e) {
                            if (!C.isInvalid(e)) {
                                var t = C.parse(e);
                                h = !1, a.clearTimeout(m._handshakeTimeout), a.removeEventListener("message", c), r(new D(m)), a.addEventListener("message", o), m.setStateAndPublish(t.state), m.callbackRegistry.hasCallbacks() && l(O.GETSTATE)
                            }
                        }

                        function u() {
                            _ &&
                                postMessage ? (a.addEventListener("message", c), l(O.HANDSHAKE), m._handshakeTimeout = setTimeout(d, 250)) : d()
                        }

                        function f() {
                            a.s_c_in || (a.s_c_il = [], a.s_c_in = 0), m._c = "Visitor", m._il = a.s_c_il, m._in = a.s_c_in, m._il[m._in] = m, a.s_c_in++
                        }

                        function g() {
                            function e(e) {
                                0 !== e.indexOf("_") && "function" == typeof i[e] && (m[e] = function() {})
                            }
                            Object.keys(i).forEach(e), m.getSupplementalDataID = i.getSupplementalDataID
                        }
                        var m = this,
                            _ = t.whitelistParentDomain;
                        m.state = {}, m.version = i.version, m.marketingCloudOrgID = e, m.cookieDomain = i.cookieDomain ||
                            "", m._instanceType = "child";
                        var h = !1,
                            C = new k(e, _);
                        m.callbackRegistry = y(), m.init = function() {
                            f(), g(), r(new M(m)), u()
                        }, m.findField = function(e, t) {
                            if (m.state[e]) return t(m.state[e]), m.state[e]
                        }, m.messageParent = l, m.setStateAndPublish = s
                    },
                    L = _.MESSAGES,
                    P = _.ALL_APIS,
                    R = _.ASYNC_API_MAP,
                    F = _.FIELDGROUP_TO_FIELD,
                    w = function(e, t) {
                        function i() {
                            var t = {};
                            return Object.keys(P).forEach(function(i) {
                                var n = P[i],
                                    r = e[n]();
                                v.isValueEmpty(r) || (t[i] = r)
                            }), t
                        }

                        function n() {
                            var t = [];
                            return e._loading && Object.keys(e._loading).forEach(function(i) {
                                if (e._loading[i]) {
                                    var n =
                                        F[i];
                                    t.push(n)
                                }
                            }), t.length ? t : null
                        }

                        function r(t) {
                            return function i(r) {
                                var a = n();
                                if (a) {
                                    var s = R[a[0]];
                                    e[s](i, !0)
                                } else t()
                            }
                        }

                        function a(e, n) {
                            var r = i();
                            t.send(e, n, r)
                        }

                        function s(e) {
                            l(e), a(e, L.HANDSHAKE)
                        }

                        function o(e) {
                            r(function() {
                                a(e, L.PARENTSTATE)
                            })()
                        }

                        function l(i) {
                            function n(n) {
                                r.call(e, n), t.send(i, L.PARENTSTATE, {
                                    CUSTOMERIDS: e.getCustomerIDs()
                                })
                            }
                            var r = e.setCustomerIDs;
                            e.setCustomerIDs = n
                        }
                        return function(e) {
                            if (!t.isInvalid(e))(t.parse(e).prefix === L.HANDSHAKE ? s : o)(e.source)
                        }
                    },
                    V = function(e, t) {
                        function i(e) {
                            return function(i) {
                                n[e] =
                                    i, r++, r === a && t(n)
                            }
                        }
                        var n = {},
                            r = 0,
                            a = Object.keys(e).length;
                        Object.keys(e).forEach(function(t) {
                            var n = e[t];
                            if (n.fn) {
                                var r = n.args || [];
                                r.unshift(i(t)), n.fn.apply(n.context || null, r)
                            }
                        })
                    },
                    N = function(e) {
                        var t;
                        if (!e && a.location && (e = a.location.hostname), t = e)
                            if (/^[0-9.]+$/.test(t)) t = "";
                            else {
                                var i = ",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",
                                    n = t.split("."),
                                    r = n.length - 1,
                                    s = r - 1;
                                if (r > 1 && n[r].length <= 2 && (2 === n[r - 1].length || i.indexOf("," + n[r] + ",") < 0) && s--, s > 0)
                                    for (t = ""; r >= s;) t = n[r] + (t ? "." : "") + t, r--
                            }
                        return t
                    },
                    x = {
                        compare: r,
                        isLessThan: function(e, t) {
                            return r(e, t) < 0
                        },
                        areVersionsDifferent: function(e, t) {
                            return 0 !== r(e, t)
                        },
                        isGreaterThan: function(e, t) {
                            return r(e, t) > 0
                        },
                        isEqual: function(e, t) {
                            return 0 === r(e, t)
                        }
                    },
                    j = !!a.postMessage,
                    U = {
                        postMessage: function(e, t, i) {
                            var n = 1;
                            t && (j ? i.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : t && (i.location = t.replace(/#.*$/,
                                "") + "#" + +new Date + n++ + "\x26" + e))
                        },
                        receiveMessage: function(e, t) {
                            var i;
                            try {
                                j && (e && (i = function(i) {
                                    if ("string" == typeof t && i.origin !== t || "[object Function]" === Object.prototype.toString.call(t) && !1 === t(i.origin)) return !1;
                                    e(i)
                                }), a.addEventListener ? a[e ? "addEventListener" : "removeEventListener"]("message", i) : a[e ? "attachEvent" : "detachEvent"]("onmessage", i))
                            } catch (e) {}
                        }
                    },
                    H = function(e) {
                        var t, i, n = "0123456789",
                            r = "",
                            a = "",
                            s = 8,
                            o = 10,
                            l = 10;
                        if (1 == e) {
                            for (n += "ABCDEF", t = 0; 16 > t; t++) i = Math.floor(Math.random() * s), r += n.substring(i,
                                i + 1), i = Math.floor(Math.random() * s), a += n.substring(i, i + 1), s = 16;
                            return r + "-" + a
                        }
                        for (t = 0; 19 > t; t++) i = Math.floor(Math.random() * o), r += n.substring(i, i + 1), 0 === t && 9 == i ? o = 3 : (1 == t || 2 == t) && 10 != o && 2 > i ? o = 10 : 2 < t && (o = 10), i = Math.floor(Math.random() * l), a += n.substring(i, i + 1), 0 === t && 9 == i ? l = 3 : (1 == t || 2 == t) && 10 != l && 2 > i ? l = 10 : 2 < t && (l = 10);
                        return r + a
                    },
                    B = function(e, t) {
                        return {
                            corsMetadata: function() {
                                var e = "none",
                                    t = !0;
                                return "undefined" != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ("withCredentials" in new XMLHttpRequest ?
                                    e = "XMLHttpRequest" : "undefined" != typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (t = !1), Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor") > 0 && (t = !1)), {
                                    corsType: e,
                                    corsCookiesEnabled: t
                                }
                            }(),
                            getCORSInstance: function() {
                                return "none" === this.corsMetadata.corsType ? null : new a[this.corsMetadata.corsType]
                            },
                            fireCORS: function(t, i, n) {
                                function r(e) {
                                    var i;
                                    try {
                                        if ((i = JSON.parse(e)) !== Object(i)) return void s.handleCORSError(t, null, "Response is not JSON")
                                    } catch (e) {
                                        return void s.handleCORSError(t,
                                            e, "Error parsing response as JSON")
                                    }
                                    try {
                                        for (var n = t.callback, r = a, o = 0; o < n.length; o++) r = r[n[o]];
                                        r(i)
                                    } catch (e) {
                                        s.handleCORSError(t, e, "Error forming callback function")
                                    }
                                }
                                var s = this;
                                i && (t.loadErrorHandler = i);
                                try {
                                    var o = this.getCORSInstance();
                                    o.open("get", t.corsUrl + "\x26ts\x3d" + (new Date).getTime(), !0), "XMLHttpRequest" === this.corsMetadata.corsType && (o.withCredentials = !0, o.timeout = e.loadTimeout, o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.onreadystatechange = function() {
                                        4 === this.readyState &&
                                            200 === this.status && r(this.responseText)
                                    }), o.onerror = function(e) {
                                        s.handleCORSError(t, e, "onerror")
                                    }, o.ontimeout = function(e) {
                                        s.handleCORSError(t, e, "ontimeout")
                                    }, o.send(), e._log.requests.push(t.corsUrl)
                                } catch (e) {
                                    this.handleCORSError(t, e, "try-catch")
                                }
                            },
                            handleCORSError: function(t, i, n) {
                                e.CORSErrors.push({
                                    corsData: t,
                                    error: i,
                                    description: n
                                }), t.loadErrorHandler && ("ontimeout" === n ? t.loadErrorHandler(!0) : t.loadErrorHandler(!1))
                            }
                        }
                    },
                    G = {
                        POST_MESSAGE_ENABLED: !!a.postMessage,
                        DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                        MILLIS_PER_DAY: 864E5,
                        ADOBE_MC: "adobe_mc",
                        ADOBE_MC_SDID: "adobe_mc_sdid",
                        VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                        ADOBE_MC_TTL_IN_MIN: 5,
                        VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/
                    },
                    q = function(e, t) {
                        var i = a.document;
                        return {
                            THROTTLE_START: 3E4,
                            MAX_SYNCS_LENGTH: 649,
                            throttleTimerSet: !1,
                            id: null,
                            onPagePixels: [],
                            iframeHost: null,
                            getIframeHost: function(e) {
                                if ("string" == typeof e) {
                                    var t = e.split("/");
                                    return t[0] + "//" + t[2]
                                }
                            },
                            subdomain: null,
                            url: null,
                            getUrl: function() {
                                var t, n = "http://fast.",
                                    r = "?d_nsid\x3d" + e.idSyncContainerID +
                                    "#" + encodeURIComponent(i.location.origin);
                                return this.subdomain || (this.subdomain = "nosubdomainreturned"), e.loadSSL && (n = e.idSyncSSLUseAkamai ? "https://fast." : "https://"), t = n + this.subdomain + ".demdex.net/dest5.html" + r, this.iframeHost = this.getIframeHost(t), this.id = "destination_publishing_iframe_" + this.subdomain + "_" + e.idSyncContainerID, t
                            },
                            checkDPIframeSrc: function() {
                                var t = "?d_nsid\x3d" + e.idSyncContainerID + "#" + encodeURIComponent(i.location.href);
                                "string" == typeof e.dpIframeSrc && e.dpIframeSrc.length && (this.id =
                                    "destination_publishing_iframe_" + (e._subdomain || this.subdomain || (new Date).getTime()) + "_" + e.idSyncContainerID, this.iframeHost = this.getIframeHost(e.dpIframeSrc), this.url = e.dpIframeSrc + t)
                            },
                            idCallNotProcesssed: null,
                            doAttachIframe: !1,
                            startedAttachingIframe: !1,
                            iframeHasLoaded: null,
                            iframeIdChanged: null,
                            newIframeCreated: null,
                            originalIframeHasLoadedAlready: null,
                            iframeLoadedCallbacks: [],
                            regionChanged: !1,
                            timesRegionChanged: 0,
                            sendingMessages: !1,
                            messages: [],
                            messagesPosted: [],
                            messagesReceived: [],
                            messageSendingInterval: G.POST_MESSAGE_ENABLED ?
                                null : 100,
                            jsonForComparison: [],
                            jsonDuplicates: [],
                            jsonWaiting: [],
                            jsonProcessed: [],
                            canSetThirdPartyCookies: !0,
                            receivedThirdPartyCookiesNotification: !1,
                            readyToAttachIframePreliminary: function() {
                                return !(e.idSyncDisableSyncs || e.disableIdSyncs || e.idSyncDisable3rdPartySyncing || e.disableThirdPartyCookies || e.disableThirdPartyCalls)
                            },
                            readyToAttachIframe: function() {
                                return this.readyToAttachIframePreliminary() && (this.doAttachIframe || e._doAttachIframe) && (this.subdomain && "nosubdomainreturned" !== this.subdomain ||
                                    e._subdomain) && this.url && !this.startedAttachingIframe
                            },
                            attachIframe: function() {
                                function e() {
                                    r = i.createElement("iframe"), r.sandbox = "allow-scripts allow-same-origin", r.title = "Adobe ID Syncing iFrame", r.id = n.id, r.name = n.id + "_name", r.style.cssText = "display: none; width: 0; height: 0;", r.src = n.url, n.newIframeCreated = !0, t(), i.body.appendChild(r)
                                }

                                function t(e) {
                                    r.addEventListener("load", function() {
                                        r.className = "aamIframeLoaded", n.iframeHasLoaded = !0, n.fireIframeLoadedCallbacks(e), n.requestToProcess()
                                    })
                                }
                                this.startedAttachingIframe = !0;
                                var n = this,
                                    r = i.getElementById(this.id);
                                r ? "IFRAME" !== r.nodeName ? (this.id += "_2", this.iframeIdChanged = !0, e()) : (this.newIframeCreated = !1, "aamIframeLoaded" !== r.className ? (this.originalIframeHasLoadedAlready = !1, t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")) : (this.originalIframeHasLoadedAlready = !0, this.iframeHasLoaded = !0, this.iframe = r, this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),
                                    this.requestToProcess())) : e(), this.iframe = r
                            },
                            fireIframeLoadedCallbacks: function(e) {
                                this.iframeLoadedCallbacks.forEach(function(t) {
                                    "function" == typeof t && t({
                                        message: e || "The destination publishing iframe was attached and loaded successfully."
                                    })
                                }), this.iframeLoadedCallbacks = []
                            },
                            requestToProcess: function(t) {
                                function i() {
                                    r.jsonForComparison.push(t), r.jsonWaiting.push(t), r.processSyncOnPage(t)
                                }
                                var n, r = this;
                                if (t === Object(t) && t.ibs)
                                    if (n = JSON.stringify(t.ibs || []), this.jsonForComparison.length) {
                                        var a, s, o, l = !1;
                                        for (a = 0, s = this.jsonForComparison.length; a < s; a++)
                                            if (o = this.jsonForComparison[a], n === JSON.stringify(o.ibs || [])) {
                                                l = !0;
                                                break
                                            }
                                        l ? this.jsonDuplicates.push(t) : i()
                                    } else i();
                                if ((this.receivedThirdPartyCookiesNotification || !G.POST_MESSAGE_ENABLED || this.iframeHasLoaded) && this.jsonWaiting.length) {
                                    var d = this.jsonWaiting.shift();
                                    this.process(d), this.requestToProcess()
                                }
                                e.idSyncDisableSyncs || e.disableIdSyncs || !this.iframeHasLoaded || !this.messages.length || this.sendingMessages || (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function() {
                                    r.messageSendingInterval = G.POST_MESSAGE_ENABLED ? null : 150
                                }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages())
                            },
                            getRegionAndCheckIfChanged: function(t, i) {
                                var n = e._getField("MCAAMLH"),
                                    r = t.d_region || t.dcs_region;
                                return n ? r && (e._setFieldExpire("MCAAMLH", i), e._setField("MCAAMLH", r), parseInt(n, 10) !== r && (this.regionChanged = !0, this.timesRegionChanged++, e._setField("MCSYNCSOP", ""), e._setField("MCSYNCS", ""), n = r)) : (n = r) && (e._setFieldExpire("MCAAMLH", i), e._setField("MCAAMLH",
                                    n)), n || (n = ""), n
                            },
                            processSyncOnPage: function(e) {
                                var t, i, n, r;
                                if ((t = e.ibs) && t instanceof Array && (i = t.length))
                                    for (n = 0; n < i; n++) r = t[n], r.syncOnPage && this.checkFirstPartyCookie(r, "", "syncOnPage")
                            },
                            process: function(e) {
                                var t, i, n, r, a, s = encodeURIComponent,
                                    o = !1;
                                if ((t = e.ibs) && t instanceof Array && (i = t.length))
                                    for (o = !0, n = 0; n < i; n++) r = t[n], a = [s("ibs"), s(r.id || ""), s(r.tag || ""), v.encodeAndBuildRequest(r.url || [], ","), s(r.ttl || ""), "", "", r.fireURLSync ? "true" : "false"], r.syncOnPage || (this.canSetThirdPartyCookies ? this.addMessage(a.join("|")) :
                                        r.fireURLSync && this.checkFirstPartyCookie(r, a.join("|")));
                                o && this.jsonProcessed.push(e)
                            },
                            checkFirstPartyCookie: function(t, i, n) {
                                var r = "syncOnPage" === n,
                                    a = r ? "MCSYNCSOP" : "MCSYNCS";
                                e._readVisitor();
                                var s, o, l = e._getField(a),
                                    d = !1,
                                    c = !1,
                                    u = Math.ceil((new Date).getTime() / G.MILLIS_PER_DAY);
                                l ? (s = l.split("*"), o = this.pruneSyncData(s, t.id, u), d = o.dataPresent, c = o.dataValid, d && c || this.fireSync(r, t, i, s, a, u)) : (s = [], this.fireSync(r, t, i, s, a, u))
                            },
                            pruneSyncData: function(e, t, i) {
                                var n, r, a, s = !1,
                                    o = !1;
                                for (r = 0; r < e.length; r++) n =
                                    e[r], a = parseInt(n.split("-")[1], 10), n.match("^" + t + "-") ? (s = !0, i < a ? o = !0 : (e.splice(r, 1), r--)) : i >= a && (e.splice(r, 1), r--);
                                return {
                                    dataPresent: s,
                                    dataValid: o
                                }
                            },
                            manageSyncsSize: function(e) {
                                if (e.join("*").length > this.MAX_SYNCS_LENGTH)
                                    for (e.sort(function(e, t) {
                                            return parseInt(e.split("-")[1], 10) - parseInt(t.split("-")[1], 10)
                                        }); e.join("*").length > this.MAX_SYNCS_LENGTH;) e.shift()
                            },
                            fireSync: function(t, i, n, r, a, s) {
                                var o = this;
                                if (t) {
                                    if ("img" === i.tag) {
                                        var l, d, c, u, f = i.url,
                                            g = e.loadSSL ? "https:" : "http:";
                                        for (l = 0, d = f.length; l <
                                            d; l++) {
                                            c = f[l], u = /^\/\//.test(c);
                                            var m = new Image;
                                            m.addEventListener("load", function(t, i, n, r) {
                                                return function() {
                                                    o.onPagePixels[t] = null, e._readVisitor();
                                                    var s, l = e._getField(a),
                                                        d = [];
                                                    if (l) {
                                                        s = l.split("*");
                                                        var c, u, f;
                                                        for (c = 0, u = s.length; c < u; c++) f = s[c], f.match("^" + i.id + "-") || d.push(f)
                                                    }
                                                    o.setSyncTrackingData(d, i, n, r)
                                                }
                                            }(this.onPagePixels.length, i, a, s)), m.src = (u ? g : "") + c, this.onPagePixels.push(m)
                                        }
                                    }
                                } else this.addMessage(n), this.setSyncTrackingData(r, i, a, s)
                            },
                            addMessage: function(t) {
                                var i = encodeURIComponent,
                                    n = i(e._enableErrorReporting ?
                                        "---destpub-debug---" : "---destpub---");
                                this.messages.push((G.POST_MESSAGE_ENABLED ? "" : n) + t)
                            },
                            setSyncTrackingData: function(t, i, n, r) {
                                t.push(i.id + "-" + (r + Math.ceil(i.ttl / 60 / 24))), this.manageSyncsSize(t), e._setField(n, t.join("*"))
                            },
                            sendMessages: function() {
                                var e, t = this,
                                    i = "",
                                    n = encodeURIComponent;
                                this.regionChanged && (i = n("---destpub-clear-dextp---"), this.regionChanged = !1), this.messages.length ? G.POST_MESSAGE_ENABLED ? (e = i + n("---destpub-combined---") + this.messages.join("%01"), this.postMessage(e), this.messages = [], this.sendingMessages = !1) : (e = this.messages.shift(), this.postMessage(i + e), setTimeout(function() {
                                    t.sendMessages()
                                }, this.messageSendingInterval)) : this.sendingMessages = !1
                            },
                            postMessage: function(e) {
                                U.postMessage(e, this.url, this.iframe.contentWindow), this.messagesPosted.push(e)
                            },
                            receiveMessage: function(e) {
                                var t, i = /^---destpub-to-parent---/;
                                "string" == typeof e && i.test(e) && (t = e.replace(i, "").split("|"), "canSetThirdPartyCookies" === t[0] && (this.canSetThirdPartyCookies = "true" === t[1], this.receivedThirdPartyCookiesNotification = !0, this.requestToProcess()), this.messagesReceived.push(e))
                            },
                            processIDCallData: function(n) {
                                (null == this.url || n.subdomain && "nosubdomainreturned" === this.subdomain) && ("string" == typeof e._subdomain && e._subdomain.length ? this.subdomain = e._subdomain : this.subdomain = n.subdomain || "", this.url = this.getUrl()), n.ibs instanceof Array && n.ibs.length && (this.doAttachIframe = !0), this.readyToAttachIframe() && (e.idSyncAttachIframeOnWindowLoad ? (t.windowLoaded || "complete" === i.readyState || "loaded" === i.readyState) && this.attachIframe() :
                                    this.attachIframeASAP()), "function" == typeof e.idSyncIDCallResult ? e.idSyncIDCallResult(n) : this.requestToProcess(n), "function" == typeof e.idSyncAfterIDCallResult && e.idSyncAfterIDCallResult(n)
                            },
                            canMakeSyncIDCall: function(t, i) {
                                return e._forceSyncIDCall || !t || i - t > G.DAYS_BETWEEN_SYNC_ID_CALLS
                            },
                            attachIframeASAP: function() {
                                function e() {
                                    t.startedAttachingIframe || (i.body ? t.attachIframe() : setTimeout(e, 30))
                                }
                                var t = this;
                                e()
                            }
                        }
                    },
                    Y = {
                        audienceManagerServer: {},
                        audienceManagerServerSecure: {},
                        cookieDomain: {},
                        cookieLifetime: {},
                        cookieName: {},
                        disableThirdPartyCalls: {},
                        idSyncAfterIDCallResult: {},
                        idSyncAttachIframeOnWindowLoad: {},
                        idSyncContainerID: {},
                        idSyncDisable3rdPartySyncing: {},
                        disableThirdPartyCookies: {},
                        idSyncDisableSyncs: {},
                        disableIdSyncs: {},
                        idSyncIDCallResult: {},
                        idSyncSSLUseAkamai: {},
                        isCoopSafe: {},
                        loadSSL: {},
                        loadTimeout: {},
                        marketingCloudServer: {},
                        marketingCloudServerSecure: {},
                        overwriteCrossDomainMCIDAndAID: {},
                        resetBeforeVersion: {},
                        sdidParamExpiry: {},
                        serverState: {},
                        sessionCookieName: {},
                        secureCookie: {},
                        takeTimeoutMetrics: {},
                        trackingServer: {},
                        trackingServerSecure: {},
                        whitelistIframeDomains: {},
                        whitelistParentDomain: {}
                    },
                    X = {
                        getConfigNames: function() {
                            return Object.keys(Y)
                        },
                        getConfigs: function() {
                            return Y
                        }
                    },
                    W = function(e, t, i) {
                        function n(e) {
                            var t = e;
                            return function(e) {
                                var i = e || c.location.href;
                                try {
                                    var n = d._extractParamFromUri(i, t);
                                    if (n) return y.parsePipeDelimetedKeyValues(n)
                                } catch (e) {}
                            }
                        }

                        function r(e) {
                            function t(e, t) {
                                e && e.match(G.VALID_VISITOR_ID_REGEX) && t(e)
                            }
                            t(e[m], d.setMarketingCloudVisitorID), d._setFieldExpire(I, -1), t(e[C], d.setAnalyticsVisitorID)
                        }

                        function s(e) {
                            e = e || {}, d._supplementalDataIDCurrent = e.supplementalDataIDCurrent || "", d._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}, d._supplementalDataIDLast = e.supplementalDataIDLast || "", d._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {}
                        }

                        function o(e) {
                            function t(e, t, i) {
                                return i = i ? i += "|" : i, i += e + "\x3d" + encodeURIComponent(t)
                            }

                            function i(e, i) {
                                var n = i[0],
                                    r = i[1];
                                return null != r && r !== D && (e = t(n, r, e)), e
                            }
                            var n = e.reduce(i, "");
                            return function(e) {
                                var t = y.getTimestampInSeconds();
                                return e = e ? e += "|" : e, e += "TS\x3d" + t
                            }(n)
                        }

                        function l(e) {
                            var t = e.minutesToLive,
                                i = "";
                            return (d.idSyncDisableSyncs || d.disableIdSyncs) && (i = i || "Error: id syncs have been disabled"), "string" == typeof e.dpid && e.dpid.length || (i = i || "Error: config.dpid is empty"), "string" == typeof e.url && e.url.length || (i = i || "Error: config.url is empty"), void 0 === t ? t = 20160 : (t = parseInt(t, 10), (isNaN(t) || t <= 0) && (i = i || "Error: config.minutesToLive needs to be a positive number")), {
                                error: i,
                                ttl: t
                            }
                        }
                        if (!i || i.split("").reverse().join("") !==
                            e) throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");
                        var d = this;
                        d.version = "3.3.0";
                        var c = a,
                            u = c.Visitor;
                        u.version = d.version, u.AuthState = _.AUTH_STATE, u.OptOut = _.OPT_OUT, c.s_c_in || (c.s_c_il = [], c.s_c_in = 0), d._c = "Visitor", d._il = c.s_c_il, d._in = c.s_c_in, d._il[d._in] = d, c.s_c_in++, d._instanceType = "regular", d._log = {
                                requests: []
                            }, d.marketingCloudOrgID = e, d.cookieName = "AMCV_" + e, d.sessionCookieName = "AMCVS_" + e, d.cookieDomain = N(), d.cookieDomain === c.location.hostname && (d.cookieDomain = ""), d.loadSSL =
                            c.location.protocol.toLowerCase().indexOf("https") >= 0, d.loadTimeout = 3E4, d.CORSErrors = [], d.marketingCloudServer = d.audienceManagerServer = "dpm.demdex.net", d.sdidParamExpiry = 30;
                        var f = c.document,
                            g = null,
                            m = "MCMID",
                            h = "MCIDTS",
                            p = "A",
                            C = "MCAID",
                            S = "AAM",
                            I = "MCAAMB",
                            D = "NONE",
                            A = function(e) {
                                return !Object.prototype[e]
                            },
                            M = B(d);
                        d.FIELDS = _.FIELDS, d.cookieRead = function(e) {
                                e = encodeURIComponent(e);
                                var t = (";" + f.cookie).split(" ").join(";"),
                                    i = t.indexOf(";" + e + "\x3d"),
                                    n = i < 0 ? i : t.indexOf(";", i + 1);
                                return i < 0 ? "" : decodeURIComponent(t.substring(i +
                                    2 + e.length, n < 0 ? t.length : n))
                            }, d.cookieWrite = function(e, t, i) {
                                var n, r = d.cookieLifetime,
                                    a = "";
                                if (t = "" + t, r = r ? ("" + r).toUpperCase() : "", i && "SESSION" !== r && "NONE" !== r)
                                    if (n = "" !== t ? parseInt(r || 0, 10) : -60) i = new Date, i.setTime(i.getTime() + 1E3 * n);
                                    else {
                                        if (1 === i) {
                                            i = new Date;
                                            var s = i.getYear();
                                            i.setYear(s + 2 + (s < 1900 ? 1900 : 0))
                                        }
                                    }
                                else i = 0;
                                return e && "NONE" !== r ? (d.configs && d.configs.secureCookie && "https:" === location.protocol && (a = "Secure"), f.cookie = encodeURIComponent(e) + "\x3d" + encodeURIComponent(t) + "; path\x3d/;" + (i ? " expires\x3d" +
                                    i.toGMTString() + ";" : "") + (d.cookieDomain ? " domain\x3d" + d.cookieDomain + ";" : "") + a, d.cookieRead(e) === t) : 0
                            }, d.resetState = function(e) {
                                e ? d._mergeServerState(e) : s()
                            }, d._isAllowedDone = !1, d._isAllowedFlag = !1, d.isAllowed = function() {
                                return d._isAllowedDone || (d._isAllowedDone = !0, (d.cookieRead(d.cookieName) || d.cookieWrite(d.cookieName, "T", 1)) && (d._isAllowedFlag = !0)), d._isAllowedFlag
                            }, d.setMarketingCloudVisitorID = function(e) {
                                d._setMarketingCloudFields(e)
                            }, d._use1stPartyMarketingCloudServer = !1, d.getMarketingCloudVisitorID =
                            function(e, t) {
                                if (d.isAllowed()) {
                                    d.marketingCloudServer && d.marketingCloudServer.indexOf(".demdex.net") < 0 && (d._use1stPartyMarketingCloudServer = !0);
                                    var i = d._getAudienceManagerURLData("_setMarketingCloudFields"),
                                        n = i.url;
                                    return d._getRemoteField(m, n, e, t, i)
                                }
                                return ""
                            }, d.getVisitorValues = function(e, t) {
                                var i = {
                                        MCMID: {
                                            fn: d.getMarketingCloudVisitorID,
                                            args: [!0],
                                            context: d
                                        },
                                        MCOPTOUT: {
                                            fn: d.isOptedOut,
                                            args: [void 0, !0],
                                            context: d
                                        },
                                        MCAID: {
                                            fn: d.getAnalyticsVisitorID,
                                            args: [!0],
                                            context: d
                                        },
                                        MCAAMLH: {
                                            fn: d.getAudienceManagerLocationHint,
                                            args: [!0],
                                            context: d
                                        },
                                        MCAAMB: {
                                            fn: d.getAudienceManagerBlob,
                                            args: [!0],
                                            context: d
                                        }
                                    },
                                    n = t && t.length ? y.pluck(i, t) : i;
                                V(n, e)
                            }, d._currentCustomerIDs = {}, d._customerIDsHashChanged = !1, d._newCustomerIDsHash = "", d.setCustomerIDs = function(e) {
                                function t() {
                                    d._customerIDsHashChanged = !1
                                }
                                if (d.isAllowed() && e) {
                                    if (!v.isObject(e) || v.isObjectEmpty(e)) return !1;
                                    d._readVisitor();
                                    var i, n;
                                    for (i in e)
                                        if (A(i) && (n = e[i]))
                                            if ("object" == typeof n) {
                                                var r = {};
                                                n.id && (r.id = n.id), void 0 != n.authState && (r.authState = n.authState), d._currentCustomerIDs[i] =
                                                    r
                                            } else d._currentCustomerIDs[i] = {
                                                id: n
                                            };
                                    var a = d.getCustomerIDs(),
                                        s = d._getField("MCCIDH"),
                                        o = "";
                                    s || (s = 0);
                                    for (i in a) A(i) && (n = a[i], o += (o ? "|" : "") + i + "|" + (n.id ? n.id : "") + (n.authState ? n.authState : ""));
                                    d._newCustomerIDsHash = String(d._hash(o)), d._newCustomerIDsHash !== s && (d._customerIDsHashChanged = !0, d._mapCustomerIDs(t))
                                }
                            }, d.getCustomerIDs = function() {
                                d._readVisitor();
                                var e, t, i = {};
                                for (e in d._currentCustomerIDs) A(e) && (t = d._currentCustomerIDs[e], i[e] || (i[e] = {}), t.id && (i[e].id = t.id), void 0 != t.authState ? i[e].authState =
                                    t.authState : i[e].authState = u.AuthState.UNKNOWN);
                                return i
                            }, d.setAnalyticsVisitorID = function(e) {
                                d._setAnalyticsFields(e)
                            }, d.getAnalyticsVisitorID = function(e, t, i) {
                                if (!y.isTrackingServerPopulated() && !i) return d._callCallback(e, [""]), "";
                                if (d.isAllowed()) {
                                    var n = "";
                                    if (i || (n = d.getMarketingCloudVisitorID(function(t) {
                                            d.getAnalyticsVisitorID(e, !0)
                                        })), n || i) {
                                        var r = i ? d.marketingCloudServer : d.trackingServer,
                                            a = "";
                                        d.loadSSL && (i ? d.marketingCloudServerSecure && (r = d.marketingCloudServerSecure) : d.trackingServerSecure &&
                                            (r = d.trackingServerSecure));
                                        var s = {};
                                        if (r) {
                                            var o = "http" + (d.loadSSL ? "s" : "") + "://" + r + "/id",
                                                l = "d_visid_ver\x3d" + d.version + "\x26mcorgid\x3d" + encodeURIComponent(d.marketingCloudOrgID) + (n ? "\x26mid\x3d" + encodeURIComponent(n) : "") + (d.idSyncDisable3rdPartySyncing || d.disableThirdPartyCookies ? "\x26d_coppa\x3dtrue" : ""),
                                                c = ["s_c_il", d._in, "_set" + (i ? "MarketingCloud" : "Analytics") + "Fields"];
                                            a = o + "?" + l + "\x26callback\x3ds_c_il%5B" + d._in + "%5D._set" + (i ? "MarketingCloud" : "Analytics") + "Fields", s.corsUrl = o + "?" + l, s.callback =
                                                c
                                        }
                                        return s.url = a, d._getRemoteField(i ? m : C, a, e, t, s)
                                    }
                                }
                                return ""
                            }, d.getAudienceManagerLocationHint = function(e, t) {
                                if (d.isAllowed())
                                    if (d.getMarketingCloudVisitorID(function(t) {
                                            d.getAudienceManagerLocationHint(e, !0)
                                        })) {
                                        var i = d._getField(C);
                                        if (!i && y.isTrackingServerPopulated() && (i = d.getAnalyticsVisitorID(function(t) {
                                                d.getAudienceManagerLocationHint(e, !0)
                                            })), i || !y.isTrackingServerPopulated()) {
                                            var n = d._getAudienceManagerURLData(),
                                                r = n.url;
                                            return d._getRemoteField("MCAAMLH", r, e, t, n)
                                        }
                                    }
                                return ""
                            }, d.getLocationHint =
                            d.getAudienceManagerLocationHint, d.getAudienceManagerBlob = function(e, t) {
                                if (d.isAllowed())
                                    if (d.getMarketingCloudVisitorID(function(t) {
                                            d.getAudienceManagerBlob(e, !0)
                                        })) {
                                        var i = d._getField(C);
                                        if (!i && y.isTrackingServerPopulated() && (i = d.getAnalyticsVisitorID(function(t) {
                                                d.getAudienceManagerBlob(e, !0)
                                            })), i || !y.isTrackingServerPopulated()) {
                                            var n = d._getAudienceManagerURLData(),
                                                r = n.url;
                                            return d._customerIDsHashChanged && d._setFieldExpire(I, -1), d._getRemoteField(I, r, e, t, n)
                                        }
                                    }
                                return ""
                            }, d._supplementalDataIDCurrent =
                            "", d._supplementalDataIDCurrentConsumed = {}, d._supplementalDataIDLast = "", d._supplementalDataIDLastConsumed = {}, d.getSupplementalDataID = function(e, t) {
                                d._supplementalDataIDCurrent || t || (d._supplementalDataIDCurrent = d._generateID(1));
                                var i = d._supplementalDataIDCurrent;
                                return d._supplementalDataIDLast && !d._supplementalDataIDLastConsumed[e] ? (i = d._supplementalDataIDLast, d._supplementalDataIDLastConsumed[e] = !0) : i && (d._supplementalDataIDCurrentConsumed[e] && (d._supplementalDataIDLast = d._supplementalDataIDCurrent,
                                    d._supplementalDataIDLastConsumed = d._supplementalDataIDCurrentConsumed, d._supplementalDataIDCurrent = i = t ? "" : d._generateID(1), d._supplementalDataIDCurrentConsumed = {}), i && (d._supplementalDataIDCurrentConsumed[e] = !0)), i
                            }, d.getOptOut = function(e, t) {
                                if (d.isAllowed()) {
                                    var i = d._getAudienceManagerURLData("_setMarketingCloudFields"),
                                        n = i.url;
                                    return d._getRemoteField("MCOPTOUT", n, e, t, i)
                                }
                                return ""
                            }, d.isOptedOut = function(e, t, i) {
                                if (d.isAllowed()) {
                                    t || (t = u.OptOut.GLOBAL);
                                    var n = d.getOptOut(function(i) {
                                        var n = i === u.OptOut.GLOBAL ||
                                            i.indexOf(t) >= 0;
                                        d._callCallback(e, [n])
                                    }, i);
                                    return n ? n === u.OptOut.GLOBAL || n.indexOf(t) >= 0 : null
                                }
                                return !1
                            }, d._fields = null, d._fieldsExpired = null, d._hash = function(e) {
                                var t, i, n = 0;
                                if (e)
                                    for (t = 0; t < e.length; t++) i = e.charCodeAt(t), n = (n << 5) - n + i, n &= n;
                                return n
                            }, d._generateID = H, d._generateLocalMID = function() {
                                var e = d._generateID(0);
                                return T.isClientSideMarketingCloudVisitorID = !0, e
                            }, d._callbackList = null, d._callCallback = function(e, t) {
                                try {
                                    "function" == typeof e ? e.apply(c, t) : e[1].apply(e[0], t)
                                } catch (e) {}
                            }, d._registerCallback =
                            function(e, t) {
                                t && (null == d._callbackList && (d._callbackList = {}), void 0 == d._callbackList[e] && (d._callbackList[e] = []), d._callbackList[e].push(t))
                            }, d._callAllCallbacks = function(e, t) {
                                if (null != d._callbackList) {
                                    var i = d._callbackList[e];
                                    if (i)
                                        for (; i.length > 0;) d._callCallback(i.shift(), t)
                                }
                            }, d._addQuerystringParam = function(e, t, i, n) {
                                var r = encodeURIComponent(t) + "\x3d" + encodeURIComponent(i),
                                    a = y.parseHash(e),
                                    s = y.hashlessUrl(e);
                                if (-1 === s.indexOf("?")) return s + "?" + r + a;
                                var o = s.split("?"),
                                    l = o[0] + "?",
                                    d = o[1];
                                return l +
                                    y.addQueryParamAtLocation(d, r, n) + a
                            }, d._extractParamFromUri = function(e, t) {
                                var i = new RegExp("[\\?\x26#]" + t + "\x3d([^\x26#]*)"),
                                    n = i.exec(e);
                                if (n && n.length) return decodeURIComponent(n[1])
                            }, d._parseAdobeMcFromUrl = n(G.ADOBE_MC), d._parseAdobeMcSdidFromUrl = n(G.ADOBE_MC_SDID), d._attemptToPopulateSdidFromUrl = function(t) {
                                var i = d._parseAdobeMcSdidFromUrl(t),
                                    n = 1E9;
                                i && i.TS && (n = y.getTimestampInSeconds() - i.TS), i && i.SDID && i.MCORGID === e && n < d.sdidParamExpiry && (d._supplementalDataIDCurrent = i.SDID, d._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0)
                            }, d._attemptToPopulateIdsFromUrl = function() {
                                var t = d._parseAdobeMcFromUrl();
                                if (t && t.TS) {
                                    var i = y.getTimestampInSeconds(),
                                        n = i - t.TS;
                                    if (Math.floor(n / 60) > G.ADOBE_MC_TTL_IN_MIN || t.MCORGID !== e) return;
                                    r(t)
                                }
                            }, d._mergeServerState = function(e) {
                                if (e) try {
                                    if (e = function(e) {
                                            return y.isObject(e) ? e : JSON.parse(e)
                                        }(e), e[d.marketingCloudOrgID]) {
                                        var t = e[d.marketingCloudOrgID];
                                        ! function(e) {
                                            y.isObject(e) && d.setCustomerIDs(e)
                                        }(t.customerIDs), s(t.sdid)
                                    }
                                } catch (e) {
                                    throw new Error("`serverState` has an invalid format.");
                                }
                            },
                            d._timeout = null, d._loadData = function(e, t, i, n) {
                                t = d._addQuerystringParam(t, "d_fieldgroup", e, 1), n.url = d._addQuerystringParam(n.url, "d_fieldgroup", e, 1), n.corsUrl = d._addQuerystringParam(n.corsUrl, "d_fieldgroup", e, 1), T.fieldGroupObj[e] = !0, n === Object(n) && n.corsUrl && "XMLHttpRequest" === M.corsMetadata.corsType && M.fireCORS(n, i, e)
                            }, d._clearTimeout = function(e) {
                                null != d._timeout && d._timeout[e] && (clearTimeout(d._timeout[e]), d._timeout[e] = 0)
                            }, d._settingsDigest = 0, d._getSettingsDigest = function() {
                                if (!d._settingsDigest) {
                                    var e =
                                        d.version;
                                    d.audienceManagerServer && (e += "|" + d.audienceManagerServer), d.audienceManagerServerSecure && (e += "|" + d.audienceManagerServerSecure), d._settingsDigest = d._hash(e)
                                }
                                return d._settingsDigest
                            }, d._readVisitorDone = !1, d._readVisitor = function() {
                                if (!d._readVisitorDone) {
                                    d._readVisitorDone = !0;
                                    var e, t, i, n, r, a, s = d._getSettingsDigest(),
                                        o = !1,
                                        l = d.cookieRead(d.cookieName),
                                        c = new Date;
                                    if (null == d._fields && (d._fields = {}), l && "T" !== l)
                                        for (l = l.split("|"), l[0].match(/^[\-0-9]+$/) && (parseInt(l[0], 10) !== s && (o = !0), l.shift()),
                                            l.length % 2 == 1 && l.pop(), e = 0; e < l.length; e += 2) t = l[e].split("-"), i = t[0], n = l[e + 1], t.length > 1 ? (r = parseInt(t[1], 10), a = t[1].indexOf("s") > 0) : (r = 0, a = !1), o && ("MCCIDH" === i && (n = ""), r > 0 && (r = c.getTime() / 1E3 - 60)), i && n && (d._setField(i, n, 1), r > 0 && (d._fields["expire" + i] = r + (a ? "s" : ""), (c.getTime() >= 1E3 * r || a && !d.cookieRead(d.sessionCookieName)) && (d._fieldsExpired || (d._fieldsExpired = {}), d._fieldsExpired[i] = !0)));
                                    !d._getField(C) && y.isTrackingServerPopulated() && (l = d.cookieRead("s_vi")) && (l = l.split("|"), l.length > 1 && l[0].indexOf("v1") >=
                                        0 && (n = l[1], e = n.indexOf("["), e >= 0 && (n = n.substring(0, e)), n && n.match(G.VALID_VISITOR_ID_REGEX) && d._setField(C, n)))
                                }
                            }, d._appendVersionTo = function(e) {
                                var t = "vVersion|" + d.version,
                                    i = e ? d._getCookieVersion(e) : null;
                                return i ? x.areVersionsDifferent(i, d.version) && (e = e.replace(G.VERSION_REGEX, t)) : e += (e ? "|" : "") + t, e
                            }, d._writeVisitor = function() {
                                var e, t, i = d._getSettingsDigest();
                                for (e in d._fields) A(e) && d._fields[e] && "expire" !== e.substring(0, 6) && (t = d._fields[e], i += (i ? "|" : "") + e + (d._fields["expire" + e] ? "-" + d._fields["expire" +
                                    e] : "") + "|" + t);
                                i = d._appendVersionTo(i), d.cookieWrite(d.cookieName, i, 1)
                            }, d._getField = function(e, t) {
                                return null == d._fields || !t && d._fieldsExpired && d._fieldsExpired[e] ? null : d._fields[e]
                            }, d._setField = function(e, t, i) {
                                null == d._fields && (d._fields = {}), d._fields[e] = t, i || d._writeVisitor()
                            }, d._getFieldList = function(e, t) {
                                var i = d._getField(e, t);
                                return i ? i.split("*") : null
                            }, d._setFieldList = function(e, t, i) {
                                d._setField(e, t ? t.join("*") : "", i)
                            }, d._getFieldMap = function(e, t) {
                                var i = d._getFieldList(e, t);
                                if (i) {
                                    var n, r = {};
                                    for (n =
                                        0; n < i.length; n += 2) r[i[n]] = i[n + 1];
                                    return r
                                }
                                return null
                            }, d._setFieldMap = function(e, t, i) {
                                var n, r = null;
                                if (t) {
                                    r = [];
                                    for (n in t) A(n) && (r.push(n), r.push(t[n]))
                                }
                                d._setFieldList(e, r, i)
                            }, d._setFieldExpire = function(e, t, i) {
                                var n = new Date;
                                n.setTime(n.getTime() + 1E3 * t), null == d._fields && (d._fields = {}), d._fields["expire" + e] = Math.floor(n.getTime() / 1E3) + (i ? "s" : ""), t < 0 ? (d._fieldsExpired || (d._fieldsExpired = {}), d._fieldsExpired[e] = !0) : d._fieldsExpired && (d._fieldsExpired[e] = !1), i && (d.cookieRead(d.sessionCookieName) || d.cookieWrite(d.sessionCookieName,
                                    "1"))
                            }, d._findVisitorID = function(e) {
                                return e && ("object" == typeof e && (e = e.d_mid ? e.d_mid : e.visitorID ? e.visitorID : e.id ? e.id : e.uuid ? e.uuid : "" + e), e && "NOTARGET" === (e = e.toUpperCase()) && (e = D), e && (e === D || e.match(G.VALID_VISITOR_ID_REGEX)) || (e = "")), e
                            }, d._setFields = function(e, t) {
                                if (d._clearTimeout(e), null != d._loading && (d._loading[e] = !1), T.fieldGroupObj[e] && T.setState(e, !1), "MC" === e) {
                                    !0 !== T.isClientSideMarketingCloudVisitorID && (T.isClientSideMarketingCloudVisitorID = !1);
                                    var i = d._getField(m);
                                    if (!i || d.overwriteCrossDomainMCIDAndAID) {
                                        if (!(i =
                                                "object" == typeof t && t.mid ? t.mid : d._findVisitorID(t))) {
                                            if (d._use1stPartyMarketingCloudServer && !d.tried1stPartyMarketingCloudServer) return d.tried1stPartyMarketingCloudServer = !0, void d.getAnalyticsVisitorID(null, !1, !0);
                                            i = d._generateLocalMID()
                                        }
                                        d._setField(m, i)
                                    }
                                    i && i !== D || (i = ""), "object" == typeof t && ((t.d_region || t.dcs_region || t.d_blob || t.blob) && d._setFields(S, t), d._use1stPartyMarketingCloudServer && t.mid && d._setFields(p, {
                                        id: t.id
                                    })), d._callAllCallbacks(m, [i])
                                }
                                if (e === S && "object" == typeof t) {
                                    var n = 604800;
                                    void 0 !=
                                        t.id_sync_ttl && t.id_sync_ttl && (n = parseInt(t.id_sync_ttl, 10));
                                    var r = b.getRegionAndCheckIfChanged(t, n);
                                    d._callAllCallbacks("MCAAMLH", [r]);
                                    var a = d._getField(I);
                                    (t.d_blob || t.blob) && (a = t.d_blob, a || (a = t.blob), d._setFieldExpire(I, n), d._setField(I, a)), a || (a = ""), d._callAllCallbacks(I, [a]), !t.error_msg && d._newCustomerIDsHash && d._setField("MCCIDH", d._newCustomerIDsHash)
                                }
                                if (e === p) {
                                    var s = d._getField(C);
                                    s && !d.overwriteCrossDomainMCIDAndAID || (s = d._findVisitorID(t), s ? s !== D && d._setFieldExpire(I, -1) : s = D, d._setField(C,
                                        s)), s && s !== D || (s = ""), d._callAllCallbacks(C, [s])
                                }
                                if (d.idSyncDisableSyncs || d.disableIdSyncs) b.idCallNotProcesssed = !0;
                                else {
                                    b.idCallNotProcesssed = !1;
                                    var o = {};
                                    o.ibs = t.ibs, o.subdomain = t.subdomain, b.processIDCallData(o)
                                }
                                if (t === Object(t)) {
                                    var l, c;
                                    d.isAllowed() && (l = d._getField("MCOPTOUT")), l || (l = D, t.d_optout && t.d_optout instanceof Array && (l = t.d_optout.join(",")), c = parseInt(t.d_ottl, 10), isNaN(c) && (c = 7200), d._setFieldExpire("MCOPTOUT", c, !0), d._setField("MCOPTOUT", l)), d._callAllCallbacks("MCOPTOUT", [l])
                                }
                            }, d._loading =
                            null, d._getRemoteField = function(e, t, i, n, r) {
                                var a, s = "",
                                    o = y.isFirstPartyAnalyticsVisitorIDCall(e),
                                    l = {
                                        MCAAMLH: !0,
                                        MCAAMB: !0
                                    };
                                if (d.isAllowed()) {
                                    d._readVisitor(), s = d._getField(e, !0 === l[e]);
                                    if (function() {
                                            return (!s || d._fieldsExpired && d._fieldsExpired[e]) && (!d.disableThirdPartyCalls || o)
                                        }()) {
                                        if (e === m || "MCOPTOUT" === e ? a = "MC" : "MCAAMLH" === e || e === I ? a = S : e === C && (a = p), a) return !t || null != d._loading && d._loading[a] || (null == d._loading && (d._loading = {}), d._loading[a] = !0, d._loadData(a, t, function(t) {
                                            if (!d._getField(e)) {
                                                t &&
                                                    T.setState(a, !0);
                                                var i = "";
                                                e === m ? i = d._generateLocalMID() : a === S && (i = {
                                                    error_msg: "timeout"
                                                }), d._setFields(a, i)
                                            }
                                        }, r)), d._registerCallback(e, i), s || (t || d._setFields(a, {
                                            id: D
                                        }), "")
                                    } else s || (e === m ? (d._registerCallback(e, i), s = d._generateLocalMID(), d.setMarketingCloudVisitorID(s)) : e === C ? (d._registerCallback(e, i), s = "", d.setAnalyticsVisitorID(s)) : (s = "", n = !0))
                                }
                                return e !== m && e !== C || s !== D || (s = "", n = !0), i && n && d._callCallback(i, [s]), s
                            }, d._setMarketingCloudFields = function(e) {
                                d._readVisitor(), d._setFields("MC", e)
                            }, d._mapCustomerIDs =
                            function(e) {
                                d.getAudienceManagerBlob(e, !0)
                            }, d._setAnalyticsFields = function(e) {
                                d._readVisitor(), d._setFields(p, e)
                            }, d._setAudienceManagerFields = function(e) {
                                d._readVisitor(), d._setFields(S, e)
                            }, d._getAudienceManagerURLData = function(e) {
                                var t = d.audienceManagerServer,
                                    i = "",
                                    n = d._getField(m),
                                    r = d._getField(I, !0),
                                    a = d._getField(C),
                                    s = a && a !== D ? "\x26d_cid_ic\x3dAVID%01" + encodeURIComponent(a) : "";
                                if (d.loadSSL && d.audienceManagerServerSecure && (t = d.audienceManagerServerSecure), t) {
                                    var o, l, c = d.getCustomerIDs();
                                    if (c)
                                        for (o in c) A(o) &&
                                            (l = c[o], s += "\x26d_cid_ic\x3d" + encodeURIComponent(o) + "%01" + encodeURIComponent(l.id ? l.id : "") + (l.authState ? "%01" + l.authState : ""));
                                    e || (e = "_setAudienceManagerFields");
                                    var u = "http" + (d.loadSSL ? "s" : "") + "://" + t + "/id",
                                        f = "d_visid_ver\x3d" + d.version + "\x26d_rtbd\x3djson\x26d_ver\x3d2" + (!n && d._use1stPartyMarketingCloudServer ? "\x26d_verify\x3d1" : "") + "\x26d_orgid\x3d" + encodeURIComponent(d.marketingCloudOrgID) + "\x26d_nsid\x3d" + (d.idSyncContainerID || 0) + (n ? "\x26d_mid\x3d" + encodeURIComponent(n) : "") + (d.idSyncDisable3rdPartySyncing ||
                                            d.disableThirdPartyCookies ? "\x26d_coppa\x3dtrue" : "") + (!0 === g ? "\x26d_coop_safe\x3d1" : !1 === g ? "\x26d_coop_unsafe\x3d1" : "") + (r ? "\x26d_blob\x3d" + encodeURIComponent(r) : "") + s,
                                        _ = ["s_c_il", d._in, e];
                                    return i = u + "?" + f + "\x26d_cb\x3ds_c_il%5B" + d._in + "%5D." + e, {
                                        url: i,
                                        corsUrl: u + "?" + f,
                                        callback: _
                                    }
                                }
                                return {
                                    url: i
                                }
                            }, d.appendVisitorIDsTo = function(e) {
                                try {
                                    var t = [
                                        [m, d._getField(m)],
                                        [C, d._getField(C)],
                                        ["MCORGID", d.marketingCloudOrgID]
                                    ];
                                    return d._addQuerystringParam(e, G.ADOBE_MC, o(t))
                                } catch (t) {
                                    return e
                                }
                            }, d.appendSupplementalDataIDTo =
                            function(e, t) {
                                if (!(t = t || d.getSupplementalDataID(y.generateRandomString(), !0))) return e;
                                try {
                                    var i = o([
                                        ["SDID", t],
                                        ["MCORGID", d.marketingCloudOrgID]
                                    ]);
                                    return d._addQuerystringParam(e, G.ADOBE_MC_SDID, i)
                                } catch (t) {
                                    return e
                                }
                            };
                        var y = {
                            parseHash: function(e) {
                                var t = e.indexOf("#");
                                return t > 0 ? e.substr(t) : ""
                            },
                            hashlessUrl: function(e) {
                                var t = e.indexOf("#");
                                return t > 0 ? e.substr(0, t) : e
                            },
                            addQueryParamAtLocation: function(e, t, i) {
                                var n = e.split("\x26");
                                return i = null != i ? i : n.length, n.splice(i, 0, t), n.join("\x26")
                            },
                            isFirstPartyAnalyticsVisitorIDCall: function(e,
                                t, i) {
                                if (e !== C) return !1;
                                var n;
                                return t || (t = d.trackingServer), i || (i = d.trackingServerSecure), !("string" != typeof(n = d.loadSSL ? i : t) || !n.length) && (n.indexOf("2o7.net") < 0 && n.indexOf("omtrdc.net") < 0)
                            },
                            isObject: function(e) {
                                return Boolean(e && e === Object(e))
                            },
                            removeCookie: function(e) {
                                document.cookie = encodeURIComponent(e) + "\x3d; Path\x3d/; Expires\x3dThu, 01 Jan 1970 00:00:01 GMT;" + (d.cookieDomain ? " domain\x3d" + d.cookieDomain + ";" : "")
                            },
                            isTrackingServerPopulated: function() {
                                return !!d.trackingServer || !!d.trackingServerSecure
                            },
                            getTimestampInSeconds: function() {
                                return Math.round((new Date).getTime() / 1E3)
                            },
                            parsePipeDelimetedKeyValues: function(e) {
                                return e.split("|").reduce(function(e, t) {
                                    var i = t.split("\x3d");
                                    return e[i[0]] = decodeURIComponent(i[1]), e
                                }, {})
                            },
                            generateRandomString: function(e) {
                                e = e || 5;
                                for (var t = "", i = "abcdefghijklmnopqrstuvwxyz0123456789"; e--;) t += i[Math.floor(Math.random() * i.length)];
                                return t
                            },
                            parseBoolean: function(e) {
                                return "true" === e || "false" !== e && null
                            },
                            replaceMethodsWithFunction: function(e, t) {
                                for (var i in e) e.hasOwnProperty(i) &&
                                    "function" == typeof e[i] && (e[i] = t);
                                return e
                            },
                            pluck: function(e, t) {
                                return t.reduce(function(t, i) {
                                    return e[i] && (t[i] = e[i]), t
                                }, Object.create(null))
                            }
                        };
                        d._helpers = y;
                        var b = q(d, u);
                        d._destinationPublishing = b, d.timeoutMetricsLog = [];
                        var T = {
                            isClientSideMarketingCloudVisitorID: null,
                            MCIDCallTimedOut: null,
                            AnalyticsIDCallTimedOut: null,
                            AAMIDCallTimedOut: null,
                            fieldGroupObj: {},
                            setState: function(e, t) {
                                switch (e) {
                                    case "MC":
                                        !1 === t ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1) : this.MCIDCallTimedOut = t;
                                        break;
                                    case p:
                                        !1 ===
                                            t ? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1) : this.AnalyticsIDCallTimedOut = t;
                                        break;
                                    case S:
                                        !1 === t ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1) : this.AAMIDCallTimedOut = t
                                }
                            }
                        };
                        d.isClientSideMarketingCloudVisitorID = function() {
                                return T.isClientSideMarketingCloudVisitorID
                            }, d.MCIDCallTimedOut = function() {
                                return T.MCIDCallTimedOut
                            }, d.AnalyticsIDCallTimedOut = function() {
                                return T.AnalyticsIDCallTimedOut
                            }, d.AAMIDCallTimedOut = function() {
                                return T.AAMIDCallTimedOut
                            }, d.idSyncGetOnPageSyncInfo =
                            function() {
                                return d._readVisitor(), d._getField("MCSYNCSOP")
                            }, d.idSyncByURL = function(e) {
                                var t = l(e || {});
                                if (t.error) return t.error;
                                var i, n, r = e.url,
                                    a = encodeURIComponent,
                                    s = b;
                                return r = r.replace(/^https:/, "").replace(/^http:/, ""), i = v.encodeAndBuildRequest(["", e.dpid, e.dpuuid || ""], ","), n = ["ibs", a(e.dpid), "img", a(r), t.ttl, "", i], s.addMessage(n.join("|")), s.requestToProcess(), "Successfully queued"
                            }, d.idSyncByDataSource = function(e) {
                                return e === Object(e) && "string" == typeof e.dpuuid && e.dpuuid.length ? (e.url = "//dpm.demdex.net/ibs:dpid\x3d" +
                                    e.dpid + "\x26dpuuid\x3d" + e.dpuuid, d.idSyncByURL(e)) : "Error: config or config.dpuuid is empty"
                            }, d.publishDestinations = function(e, t, i) {
                                if (i = "function" == typeof i ? i : function() {}, "string" != typeof e || !e.length) return void i({
                                    error: "subdomain is not a populated string."
                                });
                                if (!(t instanceof Array && t.length)) return void i({
                                    error: "messages is not a populated array."
                                });
                                var n = b;
                                if (!n.readyToAttachIframePreliminary()) return void i({
                                    error: "The destination publishing iframe is disabled in the Visitor library."
                                });
                                var r = !1;
                                if (t.forEach(function(e) {
                                        "string" == typeof e && e.length && (n.addMessage(e), r = !0)
                                    }), !r) return void i({
                                    error: "None of the messages are populated strings."
                                });
                                n.iframe ? (i({
                                    message: "The destination publishing iframe is already attached and loaded."
                                }), n.requestToProcess()) : !d.subdomain && d._getField(m) ? (n.subdomain = e, n.doAttachIframe = !0, n.url = n.getUrl(), n.readyToAttachIframe() ? (n.iframeLoadedCallbacks.push(function(e) {
                                    i({
                                        message: "Attempted to attach and load the destination publishing iframe through this API call. Result: " +
                                            (e.message || "no result")
                                    })
                                }), n.attachIframe()) : i({
                                    error: "Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."
                                })) : n.iframeLoadedCallbacks.push(function(e) {
                                    i({
                                        message: "Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: " + (e.message || "no result")
                                    })
                                })
                            }, d._getCookieVersion = function(e) {
                                e = e || d.cookieRead(d.cookieName);
                                var t = G.VERSION_REGEX.exec(e);
                                return t && t.length > 1 ? t[1] : null
                            }, d._resetAmcvCookie =
                            function(e) {
                                var t = d._getCookieVersion();
                                t && !x.isLessThan(t, e) || y.removeCookie(d.cookieName)
                            }, d.setAsCoopSafe = function() {
                                g = !0
                            }, d.setAsCoopUnsafe = function() {
                                g = !1
                            }, d.init = function() {
                                ! function() {
                                    if (t && "object" == typeof t) {
                                        d.configs = Object.create(null);
                                        for (var e in t) A(e) && (d[e] = t[e], d.configs[e] = t[e]);
                                        d.idSyncContainerID = d.idSyncContainerID || 0, g = "boolean" == typeof d.isCoopSafe ? d.isCoopSafe : y.parseBoolean(d.isCoopSafe), d.resetBeforeVersion && d._resetAmcvCookie(d.resetBeforeVersion), d._attemptToPopulateIdsFromUrl(),
                                            d._attemptToPopulateSdidFromUrl(), d._readVisitor();
                                        var i = d._getField(h),
                                            n = Math.ceil((new Date).getTime() / G.MILLIS_PER_DAY);
                                        d.idSyncDisableSyncs || d.disableIdSyncs || !b.canMakeSyncIDCall(i, n) || (d._setFieldExpire(I, -1), d._setField(h, n)), d.getMarketingCloudVisitorID(), d.getAudienceManagerLocationHint(), d.getAudienceManagerBlob(), d._mergeServerState(d.serverState)
                                    } else d._attemptToPopulateIdsFromUrl(), d._attemptToPopulateSdidFromUrl()
                                }(),
                                function() {
                                    if (!d.idSyncDisableSyncs && !d.disableIdSyncs) {
                                        b.checkDPIframeSrc();
                                        var e = function() {
                                            var e = b;
                                            e.readyToAttachIframe() && e.attachIframe()
                                        };
                                        c.addEventListener("load", function() {
                                            u.windowLoaded = !0, e()
                                        });
                                        try {
                                            U.receiveMessage(function(e) {
                                                b.receiveMessage(e.data)
                                            }, b.iframeHost)
                                        } catch (e) {}
                                    }
                                }(),
                                function() {
                                    d.whitelistIframeDomains && G.POST_MESSAGE_ENABLED && (d.whitelistIframeDomains = d.whitelistIframeDomains instanceof Array ? d.whitelistIframeDomains : [d.whitelistIframeDomains], d.whitelistIframeDomains.forEach(function(t) {
                                        var i = new k(e, t),
                                            n = w(d, i);
                                        U.receiveMessage(n, t)
                                    }))
                                }()
                            }
                    };
                return W.getInstance =
                    function(e, t) {
                        if (!e) throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");
                        e.indexOf("@") < 0 && (e += "@AdobeOrg");
                        var i = function() {
                            var t = a.s_c_il;
                            if (t)
                                for (var i = 0; i < t.length; i++) {
                                    var n = t[i];
                                    if (n && "Visitor" === n._c && n.marketingCloudOrgID === e) return n
                                }
                        }();
                        if (i) return i;
                        var n = e,
                            r = n.split("").reverse().join(""),
                            s = new W(e, null, r);
                        t === Object(t) && t.cookieDomain && (s.cookieDomain = t.cookieDomain),
                            function() {
                                a.s_c_il.splice(--a.s_c_in, 1)
                            }();
                        var o = v.getIeVersion();
                        if ("number" == typeof o && o < 10) return s._helpers.replaceMethodsWithFunction(s,
                            function() {});
                        var l = function() {
                            try {
                                return a.self !== a.parent
                            } catch (e) {
                                return !0
                            }
                        }() && ! function(e) {
                            return e.cookieWrite("TEST_AMCV_COOKIE", "T", 1), "T" === e.cookieRead("TEST_AMCV_COOKIE") && (e._helpers.removeCookie("TEST_AMCV_COOKIE"), !0)
                        }(s) && a.parent ? new E(e, t, s, a.parent) : new W(e, t, r);
                        return s = null, l.init(), l
                    },
                    function() {
                        function e() {
                            W.windowLoaded = !0
                        }
                        a.addEventListener ? a.addEventListener("load", e) : a.attachEvent && a.attachEvent("onload", e), W.codeLoadEnd = (new Date).getTime()
                    }(), W.config = X, a.Visitor = W, W
            }();
            window.visitor = Visitor.getInstance("7FF852E2556756057F000101@AdobeOrg", visitorObj)
        }, 2988696, 578565);
        Bootstrapper.bindDependencyImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;

            function checkUserAuthentication() {
                var cnnauth = "";
                if (window.is_expansion);
                else if (typeof s.prop32 != "undefined" && s.prop32 == "adbp:interactive") cnnauth = Bootstrapper.Util.getCNNAuthenticated("authid", "displayname", "reg:logged in", "requires authentication", "reg:not logged in", "?");
                else if (typeof s.prop28 != "undefined" && s.prop28 == "watch cnn:activation") cnnauth = Bootstrapper.Util.getCNNAuthenticated("authid",
                    "displayname", "reg:logged in", "does not require authentication", "reg:not logged in", "?");
                else cnnauth = Bootstrapper.Util.getCNNAuthenticated("authid", "displayname", "reg:logged in", "anonymous", "reg:not logged in", "?");
                return cnnauth
            }
            PubSub.subscribe("dynamic-autoRefresh", function(data) {
                s.linkTrackVars = "events,eVar26,eVar27,eVar28,eVar29,eVar30,eVar32,eVar33,prop35,eVar35,eVar36,eVar37,prop44,eVar44,eVar45,prop46,eVar46,prop47,eVar47,prop69,eVar69,prop73,eVar73,list2";
                s.linkTrackEvents = "event60";
                s.events =
                    s.linkTrackEvents;
                s.eVar26 = s.pageName ? s.pageName : Bootstrapper.Util.getCNNPageName();
                s.eVar27 = s.channel ? s.channel : Bootstrapper.Util.getCNNSection(0);
                s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                s.eVar29 = Bootstrapper.Util.getADBPURL("domain");
                s.eVar30 = Bootstrapper.Util.getSiteSpecificSettings(1);
                s.eVar32 = Bootstrapper.Util.getCNNTemplateType("long");
                s.eVar33 = Bootstrapper.Util.getCNNContentType();
                s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                s.eVar36 = Bootstrapper.Util.getCNNKruxID();
                s.eVar37 = Bootstrapper.Util.getCNNPlatform();
                s.eVar44 = Bootstrapper.Util.getCNNVertical();
                s.prop46 = Bootstrapper.Util.getCNNTransactionID();
                s.prop47 = Bootstrapper.Util.getCNNGUID();
                s.prop69 = data;
                s.prop73 = Bootstrapper.Util.getCNNVisitorID("s_vi");
                s.tl(this, "o", "auto-refresh");
                s.clearVars()
            });
            PubSub.subscribe("dynamic-page", function(data) {
                if (Bootstrapper.Util.isElectionPage()) return window.trackPageView();
                s.manageVars("clearVars");
                s.linkTrackVars = "events,pageName,channel,hier1,prop2,eVar2,prop4,eVar4,prop11,eVar11,prop14,eVar14,prop15,eVar15,eVar22,prop23,eVar23,eVar27,prop28,eVar28,prop30,eVar30,prop32,eVar32,prop33,eVar33,prop35,eVar35,prop43,prop44,eVar44,prop50,prop64,eVar64,prop65,eVar65,prop73,eVar73,prop75,eVar75,list2";
                s.linkTrackEvents = "event26";
                s.events = s.linkTrackEvents;
                var co = data.clickObj || {};
                if (co.socialType) {
                    var pageName = s.pageName;
                    if (pageName.match(/\s\[.+\]$/)) {
                        var t1 = /(.+)\s\[.+\]$/.exec(pageName);
                        if (t1) pageName = t1[1]
                    }
                    s.pageName = pageName + " [" + co.socialType + "]"
                }
                if (data.pageURL) {
                    var domain1 = "";
                    try {
                        domain1 = data.pageURL.split("/")[2];
                        domain1 = domain1.replace("www.", "");
                        data.pageURL = data.pageURL.toLowerCase();
                        data.pageURL = data.pageURL.replace(/^.*\/\/[^\/]+/, "");
                        data.pageURL = data.pageURL.replace("/index.html",
                            "/")
                    } catch (e) {}
                    s.pageName = Bootstrapper.Util.getCNNPageName(data.pageURL)
                }
                s.pageURL = Bootstrapper.Util.getCNNPageURL();
                var p64 = Bootstrapper.Util.getCNNUIEngagement();
                if (p64 == "ngtv") {
                    s.prop57 = data.mvpd;
                    s.prop59 = data.adobe_hash_id
                }
                if (typeof data.headline !== "undefined") try {
                    window.CNN = window.CNN || {};
                    window.CNN.omniture = window.CNN.omniture || {};
                    window.CNN.omniture.section = data.section;
                    window.CNN.omniture.template_type = data.template_type;
                    window.CNN.omniture.branding_content_page = data.branding_content_page;
                    window.CNN.omniture.branding_social = data.branding_social;
                    window.CNN.omniture.cap_author = data.cap_author;
                    window.CNN.omniture.cap_genre = data.cap_genre;
                    window.CNN.omniture.cap_content_type = data.cap_content_type;
                    window.CNN.omniture.cap_topic = data.cap_topic;
                    window.CNN.contentModel = window.CNN.contentModel || {};
                    window.CNN.contentModel.analytics = window.CNN.contentModel.analytics || {};
                    window.CNN.contentModel.analytics.pageTop = data.page_top || {};
                    window.CNN.contentModel.analytics.isArticleVideoCollection = data.is_article_video_collection ||
                        false;
                    window.CNN.omniture.user_auth_state = data.user_auth_state;
                    s.pageName = Bootstrapper.Util.getCNNPageName();
                    var days = Bootstrapper.Util.getCNNDaysSinceLastPublish(data.publish_date);
                    s.prop10 = days + "";
                    var bcp = Bootstrapper.Util.getCNNBrandingPartner();
                    s.prop11 = bcp;
                    s.prop14 = data.branding_social;
                    if (s.prop14 && s.prop14 !== "") s.linkTrackEvents = "event24," + s.linkTrackEvents;
                    if (s.prop11 && s.prop11 !== "") s.linkTrackEvents = "event21," + s.linkTrackEvents;
                    var cctype = Bootstrapper.Util.getCNNCapContentType();
                    if (cctype ==
                        "article") s.linkTrackEvents = s.linkTrackEvents + ",event39";
                    s.events = s.linkTrackEvents;
                    s.prop16 = data.publish_date;
                    s.prop23 = data.headline.toLowerCase();
                    s.channel = data.section[0];
                    var subsection = data.section[0] + ":" + (data.section[1] ? data.section[1] : "nvs");
                    s.prop28 = subsection;
                    s.prop30 = Bootstrapper.Util.getSiteSpecificSettings(1);
                    s.prop32 = Bootstrapper.Util.getCNNTemplateType("long");
                    var rObj = Bootstrapper.Util.getADBPContentType("adbp:none");
                    s.prop33 = rObj.ct;
                    if (rObj.events !== "") {
                        s.events = s.events + "," + rObj.events;
                        s.linkTrackEvents = s.events
                    }
                    s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                    s.prop64 = Bootstrapper.Util.getCNNUIEngagement();
                    s.prop65 = Bootstrapper.Util.getCNNTopic();
                    s.prop2 = Bootstrapper.Util.getCNNAuthor();
                    s.prop4 = Bootstrapper.Util.getPageAttribution();
                    s.prop8 = Bootstrapper.Util.getCNNVisitNumber();
                    s.prop15 = Bootstrapper.Util.getCNNTrafficPartner("tryThing01");
                    s.eVar22 = Bootstrapper.Util.getCNNVideoOpportunity();
                    s.prop26 = Bootstrapper.Util.getCNNBaseURL();
                    s.server = s.eVar29 = Bootstrapper.Util.getADBPURL("domain");
                    s.eVar36 = Bootstrapper.Util.getCNNKruxID();
                    s.prop37 = Bootstrapper.Util.getCNNPlatform();
                    s.prop43 = Bootstrapper.Util.getCNNPostID();
                    s.prop44 = Bootstrapper.Util.getCNNSourceID();
                    s.prop50 = Bootstrapper.Util.getCNNPostTitle();
                    s.prop46 = Bootstrapper.Util.getCNNTransactionID();
                    s.prop47 = Bootstrapper.Util.getCNNGUID();
                    s.prop49 = Bootstrapper.Util.getCNNPreviousPageName();
                    s.prop56 = Bootstrapper.Util.getCNNOrientation();
                    s.prop57 = Bootstrapper.Util.getCNNMVPD();
                    s.prop59 = Bootstrapper.Util.getCNNAdobeID();
                    s.prop75 = Bootstrapper.Util.getCNNUserAuthState();
                    s.hier1 = Bootstrapper.Util.getCNNHierachy();
                    if (data.load_type && data.load_type == "lazy_load") {
                        s.events = "event26,event72";
                        s.linkTrackEvents = s.events
                    }
                    if (data.load_type && data.load_type == "refresh_load") {
                        s.events = "event26,event71";
                        s.linkTrackEvents = s.events
                    }
                } catch (e) {}
                s.t()
            });
            PubSub.subscribe("word-count", function(data) {});
            PubSub.subscribe("dynamic-link", function(data) {
                s.linkTrackVars = "events,prop35,eVar35,list2";
                s.linkTrackEvents = "event26";
                s.events = s.linkTrackEvents;
                try {
                    s.tl(this, "o", data.link_name)
                } catch (e) {}
                s.clearVars()
            });
            PubSub.subscribe("tab-page", function(data) {
                s.linkTrackVars = "events,pageName,server,channel,eVar26,eVar27,prop28,eVar28,eVar29,prop32,eVar32,prop33,eVar33,prop35,eVar35,prop44,list2";
                s.linkTrackEvents = "event26";
                s.events = s.linkTrackEvents;
                try {
                    s.pageName = "cnn:v:/video/" + data
                } catch (e) {}
                s.eVar26 = "D\x3dpageName";
                s.pageURL = Bootstrapper.Util.getCNNPageURL();
                s.t();
                s.clearVars()
            });
            PubSub.subscribe("search-results", function(data) {
                s.linkTrackVars = "events,server,channel,pageName,prop27,eVar27,prop32,eVar32,prop33,eVar33,prop35,eVar35,prop39,eVar39,prop44,list2";
                s.linkTrackEvents = "event27";
                s.events = s.linkTrackEvents;
                try {
                    s.channel = Bootstrapper.Util.getJObj(data, "section[0]")
                } catch (e) {}
                try {
                    s.prop27 = Bootstrapper.Util.getJObj(data, "search.number_results")
                } catch (e) {}
                s.prop32 = "other:search results";
                try {
                    s.prop33 = Bootstrapper.Util.getJObj(data, "content_type")
                } catch (e) {}
                try {
                    s.prop39 = Bootstrapper.Util.getJObj(data, "search.term")
                } catch (e) {}
                s.clearVars()
            });
            PubSub.subscribe("cnnsearch-results", function(data) {
                s.linkTrackVars = "events,server,channel,pageName,prop8,eVar8,eVar15,eVar22,prop26,eVar26,prop27,eVar27,prop28,eVar28,eVar29,prop30,eVar30,prop32,eVar32,prop33,eVar33,prop35,eVar35,eVar36,prop37,eVar37,prop39,eVar39,prop44,eVar44,prop46,eVar46,prop47,eVar47,prop59,eVar59,prop64,eVar64,prop73,eVar73,prop73,eVar73,hier1,list2";
                s.linkTrackEvents = "event26,event27";
                s.events = s.linkTrackEvents;
                s.pageName = Bootstrapper.Util.getCNNPageName();
                s.server = Bootstrapper.Util.getADBPURL("domain");
                s.prop8 = Bootstrapper.Util.getCNNVisitNumber(28);
                s.eVar15 = Bootstrapper.Util.getCNNTrafficPartner("tryThing01");
                s.eVar22 = Bootstrapper.Util.getCNNVideoOpportunity();
                s.prop26 = Bootstrapper.Util.getCNNBaseURL();
                s.channel = Bootstrapper.Util.getCNNSection(0);
                s.prop27 = data.search_results_count + "";
                s.prop28 = Bootstrapper.Util.getCNNSection(1);
                s.eVar29 = Bootstrapper.Util.getADBPURL("domain");
                s.prop30 = Bootstrapper.Util.getSiteSpecificSettings(1);
                s.prop32 = "other:search results";
                s.prop33 = Bootstrapper.Util.getCNNContentType("adbp:none");
                s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                s.eVar36 = Bootstrapper.Util.getCNNKruxID();
                s.prop37 = Bootstrapper.Util.getCNNPlatform();
                try {
                    data.search_term = data.search_term.replace(/\+/g, " ");
                    data.search_term = data.search_term.trim();
                    data.search_term = data.search_term || "empty search"
                } catch (e) {}
                s.prop39 = data.search_term;
                s.prop44 = Bootstrapper.Util.getCNNSourceID();
                if (!s.evar44) s.eVar44 = Bootstrapper.Util.getCNNVertical();
                s.prop46 = Bootstrapper.Util.getCNNTransactionID();
                s.prop47 = Bootstrapper.Util.getCNNGUID();
                s.prop49 = Bootstrapper.Util.getCNNPreviousPageName();
                s.prop56 = Bootstrapper.Util.getCNNOrientation();
                s.prop57 = Bootstrapper.Util.getCNNMVPD();
                s.prop59 = Bootstrapper.Util.getCNNAdobeID();
                s.prop64 = Bootstrapper.Util.getCNNUIEngagement();
                s.prop75 = Bootstrapper.Util.getCNNUserAuthState();
                s.hier1 = Bootstrapper.Util.getCNNHierachy();
                s.pageURL = Bootstrapper.Util.getCNNPageURL();
                s.t();
                s.clearVars()
            });
            PubSub.subscribe("weather-page", function(data) {
                s.linkTrackVars = "events,server,prop35,eVar35,prop44,list2";
                s.linkTrackEvents = "event62";
                s.events = s.linkTrackEvents;
                s.pageURL = Bootstrapper.Util.getCNNPageURL();
                s.t();
                s.clearVars()
            });
            PubSub.subscribe("dynamic-toggle", function(data) {
                s.linkTrackVars = "events,server,pageName,channel,server,eVar27,prop28,eVar28,eVar29,prop32,eVar32,prop33,eVar33,prop35,eVar35,prop44,list2";
                s.linkTrackEvents = "event26";
                s.events = s.linkTrackEvents;
                s.prop18 =
                    s.eVar18 = null;
                s.channel = s.eVar27 = null;
                s.prop28 = s.eVar28 = null;
                s.prop8 = s.eVar8 = null;
                s.prop26 = null;
                s.pageName = s.eVar26 = null;
                s.prop30 = s.eVar30 = null;
                s.prop32 = s.eVar32 = null;
                s.prop33 = s.eVar33 = null;
                s.prop34 = s.eVar34 = null;
                s.prop35 = s.eVar35 = null;
                s.prop40 = s.eVar40 = null;
                s.hier1 = null
            });
            PubSub.subscribe("dynamic-impressions", function(data) {
                s.linkTrackVars = "events,server,prop18,eVar18,list2";
                s.linkTrackEvents = "event26";
                s.events = s.linkTrackEvents;
                try {
                    s.prop18 = data.value
                } catch (e) {}
                s.eVar18 = "D\x3dc18";
                try {
                    s.tl(this,
                        "o", data.link_name + "")
                } catch (e) {}
                s.clearVars()
            });
            PubSub.subscribe("breaking-news", function(data) {
                s.linkTrackVars = "events,server,channel,pageName,prop4,eVar4,prop8,eVar8,prop16,eVar16,eVar22,eVar26,eVar27,prop28,eVar28,prop32,eVar32,prop33,eVar33,prop35,eVar35,eVar36,prop37,eVar37,prop46,eVar46,prop47,eVar47,prop56,eVar56,prop57,eVar57,prop59,eVar59,prop64,eVar64,prop69,eVar69,prop73,eVar73,prop75,eVar75,list2";
                var hp_loc = Bootstrapper.Util.getCNNBreakingNewsHP(s.prop32, s.channel);
                s.pageName = Bootstrapper.Util.getCNNPageName();
                s.pageURL = Bootstrapper.Util.getCNNPageURL();
                s.prop4 = hp_loc + data.headline.toLowerCase();
                s.evar36 = Bootstrapper.Util.getCNNKruxID();
                s.prop69 = data.item;
                s.manageVars("clearVars", "prop16,eVar16,prop44,eVar44,prop51,eVar51,prop55,eVar55", 1);
                if (data.domain && (data.domain == "cnn.com" || data.domain == "us.cnn.com" || data.domain == "sweet.next.cnn.com" || data.domain == "edition.cnn.com")) {
                    s.linkTrackEvents = "event26";
                    s.events = s.linkTrackEvents
                } else {
                    s.linkTrackEvents = "event76";
                    s.events = s.linkTrackEvents;
                    s.t()
                }
                s.clearVars()
            });
            PubSub.subscribe("picker-pageview", function(data) {
                s.linkTrackVars = "events,pageName,campaign,eVar26,channel,eVar27,prop28,eVar28,heir1,server,eVar29,prop30,eVar30,prop32,eVar32,prop33,eVar33,prop34,evar34,prop35,eVar35,eVar36,prop37,eVar37,prop44,prop46,eVar46,prop47,eVar47,prop56,eVar56,prop59,eVar59,eVar72,prop75,eVar75,list2";
                s.linkTrackEvents = "event26";
                s.events = s.linkTrackEvents;
                s.prop1 = s.eVar1 = s.prop2 = s.eVar2 = s.prop3 = s.eVar3 = s.prop4 = s.eVar4 = s.prop6 = s.eVar6 = s.prop8 = s.eVar8 = s.eVar10 = s.prop11 = s.eVar11 =
                    s.prop16 = s.eVar16 = s.prop18 = s.eVar18 = s.prop26 = s.prop31 = s.eVar31 = s.eVar41 = s.eVar44 = s.eVar53 = s.eVar54 = s.prop64 = s.eVar64 = s.prop67 = s.eVar67 = s.prop68 = s.eVar68 = s.prop69 = s.eVar69 = s.prop73 = s.eVar73 = "";
                try {
                    s.pageName = s.eVar26 = "cnn:o:[" + data.page_name + "]"
                } catch (e) {}
                s.channel = "tve";
                s.pageURL = Bootstrapper.Util.getCNNPageURL();
                s.prop34 = checkUserAuthentication();
                s.prop28 = "tve:picker";
                try {
                    s.prop72 = data.free_preview
                } catch (e) {}
                s.prop32 = "adbp:none";
                s.eVar72 = s.prop72;
                s.prop72 = "";
                if (s.pageName == "cnn:o:[tve: successful login]") {
                    s.prop7 =
                        s.eVar7 = s.prop10 = s.eVar10 = s.eVar22 = s.prop23 = s.eVar23 = s.prop25 = s.eVar25 = s.prop51 = s.eVar51 = s.prop65 = s.eVar65 = "";
                    s.eVar26 = s.pageName;
                    s.pageName = "";
                    s.eVar27 = s.channel;
                    s.channel = "";
                    s.eVar29 = s.server;
                    s.server = "";
                    s.linkTrackEvents = "event37";
                    s.events = s.linkTrackEvents;
                    s.eVar28 = s.prop28;
                    s.prop28 = "";
                    s.eVar30 = s.prop30;
                    s.prop30 = "";
                    s.prop32 = s.eVar32 = "";
                    s.prop33 = s.eVar33 = "";
                    s.eVar56 = s.prop56;
                    s.prop56 = "";
                    s.eVar57 = s.prop57;
                    s.prop57 = "";
                    s.eVar59 = s.prop59;
                    s.prop59 = "";
                    s.hier1 = ""
                } else {
                    s.prop57 = s.eVar57 = "";
                    s.prop59 = s.eVar59 =
                        ""
                }
                try {
                    s.prop75 = Bootstrapper.Util.getCNNUserAuthState()
                } catch (e) {}
                s.t();
                s.clearVars()
            });
            PubSub.subscribe("picker-click", function(data) {
                s.linkTrackVars = "events,pageName,prop14,eVar14,eVar26,eVar27,eVar28,eVar29,eVar30,prop34,eVar34,prop35,eVar35,eVar36,prop37,eVar37,prop46,eVar46,prop47,eVar47,eVar56,eVar57,eVar59,prop69,eVar69,eVar72,prop75,eVar75,list2";
                s.linkTrackEvents = "event76";
                s.events = s.linkTrackEvents;
                try {
                    s.pageName = s.eVar26 = "cnn:o:[" + data.page_name + "]"
                } catch (e) {}
                s.eVar27 = "tve";
                s.eVar28 = "tve:picker";
                s.eVar30 = s.prop30;
                s.prop30 = "";
                s.eVar56 = s.prop56;
                s.prop56 = "";
                try {
                    s.eVar57 = data.tve_mvpd;
                    s.prop69 = "tve:picker:" + data.tve_mvpd
                } catch (e) {}
                s.eVar59 = "no mvpd set";
                try {
                    s.eVar72 = data.free_preview
                } catch (e) {}
                s.prop73 = s.eVar73 = "";
                try {
                    s.prop75 = Bootstrapper.Util.getCNNUserAuthState()
                } catch (e) {}
                s.tl(this, "o", "picker-click:" + data.tve_mvpd);
                s.clearVars()
            });
            PubSub.subscribe("social-click", function(data) {
                var co = data.clickObj || {};
                var interactionType = "";
                s.linkTrackVars = "events,server,channel,pageName,prop14,eVar14,eVar26,eVar27,prop28,eVar28,eVar29,prop35,eVar35,eVar36,prop59,eVar59,prop69,eVar69,prop73,eVar73,list2";
                s.linkTrackEvents = "event76";
                s.events = s.linkTrackEvents;
                if (!s.prop28) s.prop28 = Bootstrapper.Util.getCNNSection(1);
                try {
                    if (data.interaction) interactionType = data.interaction;
                    else interactionType = co.socialType;
                    if (interactionType !== "" && interactionType.indexOf("social: ") !== -1) interactionType = interactionType.replace("social: ", "")
                } catch (e) {}
                try {
                    if (interactionType.indexOf("_click") == -1) interactionType = interactionType + "_click";
                    s.prop14 = co.branding_ad;
                    s.eVar14 = ""
                } catch (e) {}
                s.prop69 = "social:" + interactionType;
                try {
                    if (typeof co.isMainNav != "undefined" && co.isMainNav == true) s.tl(this, "o", "social-click:" + interactionType + "global");
                    else s.tl(this, "o", "social-click:" + interactionType)
                } catch (e) {}
                s.clearVars()
            });
            PubSub.subscribe("cnngallery-click", function(data) {
                s.linkTrackVars = "events,pageName,channel,list1,server,prop4,eVar4,prop6,eVar6,prop8,eVar8,prop10,eVar10,prop11,eVar11,eVar15,eVar22,prop23,eVar23,prop25,eVar25,prop26,eVar26,eVar27,prop28,eVar28,eVar29,prop30,eVar30,prop32,eVar32,prop33,eVar33,prop35,eVar35,eVar36,prop37,eVar37,prop44,eVar44,prop46,eVar46,prop47,eVar47,prop54,eVar54,prop56,eVar56,prop57,eVar57,prop59,eVar59,prop64,eVar64,prop65,prop73,eVar73,prop75,eVar75,hier1,list2";
                s.linkTrackEvents = "event26";
                s.events = s.linkTrackEvents;
                var g_name = "";
                if (typeof data.hpt !== "undefined") {
                    var hpt = data.hpt;
                    try {
                        if (hpt.indexOf("_") == -1) hpt = CNN.Utils.b64Decode(hpt)
                    } catch (e) {}
                    hpt = hpt.replace(/no-value-set/g, "nvs");
                    hpt = hpt.toLowerCase();
                    s.prop4 = hpt
                }
                s.eVar15 = Bootstrapper.Util.getCookie("tryThing01");
                try {
                    g_name = data.gallery_name;
                    if (typeof g_name !== "undefined" && g_name !== "") g_name = g_name.replace(/(no-value-set|no value set)/g, "nvs");
                    else g_name = "nvs"
                } catch (e) {
                    g_name = "nvs"
                }
                if (typeof data.hpt2 !==
                    "undefined") {
                    var hpt2 = data.hpt2;
                    try {
                        if (hpt2.indexOf("_") == -1) hpt2 = CNN.Utils.b64Decode(hpt2)
                    } catch (e) {}
                    hpt2 = hpt2.replace(/no-value-set/g, "nvs");
                    s.prop18 = hpt2
                }
                s.prop25 = g_name;
                s.prop25 = s.prop25.toLowerCase();
                try {
                    if (data.gallery_name && typeof data.gallery_name !== "undefined") {
                        s.prop6 = data.gallery_name.toLowerCase();
                        s.eVar6 = "D\x3dc6"
                    }
                } catch (e) {}
                s.prop54 = "photo gallery:";
                var isCarousel = 0;
                if (typeof data.gallery_type !== "undefined") {
                    s.prop33 = data.gallery_type;
                    if (data.gallery_type == "carousel") {
                        isCarousel = 1;
                        s.prop6 =
                            "";
                        s.eVar6 = "";
                        s.prop25 = "";
                        s.eVar25 = "";
                        var ctype = "";
                        try {
                            ctype = data.content_type.replace("carousel_", "")
                        } catch (e) {}
                        if (typeof data.carousel_type !== "undefined" || data.carousel_type == "jumbotron") {
                            s.prop33 = "jumbotron";
                            s.prop54 = "jumbotron:" + ctype
                        } else s.prop54 = "carousel:" + ctype
                    }
                }
                if (typeof data.pageURL !== "undefined") {
                    try {
                        data.pageURL = data.pageURL.toLowerCase();
                        data.pageURL = data.pageURL.replace(/^.*\/\/[^\/]+/, "");
                        data.pageURL = data.pageURL.replace("/index.html", "/")
                    } catch (e) {}
                    s.pageName = Bootstrapper.Util.getCNNPageName(data.pageURL)
                }
                if (typeof data.initial_page !=
                    "undefined" && data.initial_page == true) s.prop25 = s.eVar25 = "";
                else if (isCarousel == 1) {
                    s.linkTrackEvents = "event26,event67";
                    s.events = s.linkTrackEvents
                } else {
                    s.linkTrackEvents = "event5,event26";
                    s.events = s.linkTrackEvents
                }
                var rval = Bootstrapper.Util.getCNNBrandingPartner();
                if (rval != "" && rval != "nvs" && rval != "no value set" && rval != "no-value-set") {
                    s.linkTrackEvents = "event21," + s.linkTrackEvents;
                    s.events = s.linkTrackEvents
                }
                s.prop57 = "no mvpd set";
                s.prop59 = s.prop57;
                s.prop64 = Bootstrapper.Util.getCNNUIEngagement();
                if (s.prop64 ==
                    "ngtv") {
                    s.linkTrackEvents = "";
                    s.events = "";
                    s.prop32 = "adbp:gallery";
                    try {
                        s.prop57 = data.mvpd
                    } catch (e) {}
                    try {
                        s.prop57 = data.adobe_hash_id
                    } catch (e) {}
                }
                if (s.prop65) list1 = "D\x3dc65";
                var pDate = data.publish_date || "a";
                s.prop10 = Bootstrapper.Util.getCNNDaysSinceLastPublish(pDate);
                s.prop11 = Bootstrapper.Util.getCNNBrandingPartner();
                s.prop44 = Bootstrapper.Util.getCNNSourceID();
                s.eVar44 = Bootstrapper.Util.getCNNPageVertical();
                s.prop46 = Bootstrapper.Util.getCNNTransactionID();
                s.prop47 = Bootstrapper.Util.getCNNGUID();
                s.prop75 =
                    Bootstrapper.Util.getCNNUserAuthState();
                try {
                    s.t()
                } catch (e) {}
                s.clearVars()
            });
            PubSub.subscribe("photo-page", function(data) {
                s.linkTrackVars = "events,channel,server,prop4,eVar4,prop6,eVar6,prop8,eVar8,eVar15,eVar22,prop23,eVar23,prop25,eVar25,prop26,eVar26,eVar27,prop28,eVar28,eVar29,prop30,eVar30,prop32,eVar32,prop33,eVar33,prop35,eVar35,eVar36,prop37,eVar37,prop44,prop46,eVar46,prop47,eVar47,prop54,eVar54,prop56,eVar56,prop57,eVar57,prop59,eVar59,prop64,eVar64,prop65,prop73,eVar73,prop75,eVar75,hier1,list2";
                s.linkTrackEvents = "event26";
                s.events = s.linkTrackEvents;
                var is_full_gallery = 0;
                try {
                    if (window.cnn_metadata.full_gallery == "1") is_full_gallery = 1
                } catch (e) {}
                try {
                    if (window.CNN.omniture.full_gallery == "1") is_full_gallery = 1
                } catch (e) {}
                var gallery = "";
                try {
                    gallery = window.cnn_metadata.business.cnn.page.photo_gallery
                } catch (e) {}
                try {
                    gallery = window.CNN.omniture.gallery_name || gallery
                } catch (e) {}
                if (gallery) gallery = gallery.replace(/%20/g, " ");
                s.prop6 = gallery;
                if (Bootstrapper.isInit == true) {
                    s.prop25 = "";
                    if (is_full_gallery ==
                        1) {
                        s.linkTrackEvents = s.linkTrackEvents + "event9";
                        s.events = s.linkTrackEvents
                    }
                    Bootstrapper.isInit = false
                } else {
                    s.linkTrackEvents = null;
                    s.events = s.linkTrackEvents;
                    s.eVar6 = "";
                    var is_initial_gallery_call = 1;
                    try {
                        data.img = data.img + ""
                    } catch (e) {}
                    try {
                        data.before = data.before + ""
                    } catch (e) {}
                    if (data.img) {
                        s.prop25 = data.img + "";
                        s.linkTrackEvents = "event5";
                        s.events = s.linkTrackEvents;
                        is_initial_gallery_call = 0
                    } else if (data.before) {
                        s.prop25 = data.before + "";
                        s.linkTrackEvents = "event5";
                        s.events = s.linkTrackEvents;
                        is_initial_gallery_call =
                            0
                    }
                    if (is_full_gallery == 1) {
                        s.linkTrackEvents = s.linkTrackEvents + ",event9";
                        s.events = s.linkTrackEvents
                    } else if (is_initial_gallery_call == 1);
                    s.prop33 = "other:gallery"
                }
                s.prop25 = s.prop25.toLowerCase();
                s.eVar1 = s.eVar7 = s.eVar61 = s.eVar68 = s.eVar71 = s.eVar41 = "";
                if (data.title) s.tl(this, "o", "photo-page:" + data.title);
                else if (data.caption) s.tl(this, "o", "photo-page:" + data.caption);
                s.clearVars()
            });
            PubSub.subscribe("ngtv-interaction", function(data) {
                s.linkTrackVars = "events,campaign,eVar29,eVar32,eVar33,eVar34,prop35,eVar35,eVar36,eVar37,prop46,eVar46,prop47,eVar47,prop55,eVar55,eVar57,prop59,eVar59,eVar64,prop69,eVar69,list2";
                s.linkTrackEvents = "event76";
                s.events = s.linkTrackEvents;
                s.eVar32 = "other:interactive";
                s.eVar33 = "adbp:none";
                try {
                    s.eVar34 = data.auth_state
                } catch (e) {}
                try {
                    s.eVar57 = data.mvpd
                } catch (e) {}
                s.eVar64 = s.prop64;
                s.prop64 = "";
                try {
                    s.prop69 = data.interaction
                } catch (e) {}
                s.tl(this, "o", "ngtv-interaction:" + data.interaction);
                s.clearVars()
            });
            PubSub.subscribe("user-interaction", function(data) {
                s.linkTrackEvents = "event26";
                s.events = s.linkTrackEvents;
                var interactionType = data.branding_social == "priceless xi" ? ": priceless xi" : "";
                if (s.prop28 &&
                    s.prop28.indexOf("electoral college map") != -1) s.prop69 = data.interaction + "_click";
                else if (typeof data.interaction !== "undefined" && data.interaction == "comment-click:cronkite") {
                    interactionType = "time shift: on comment";
                    s.prop69 = "time shift: on comment"
                } else if (typeof data.interaction !== "undefined" && data.interaction == "Go-Live:cronkite") {
                    interactionType = "time shift: go live";
                    s.prop69 = "time shift: go live"
                } else if (typeof data.interaction !== "undefined" && data.interaction == "time shift: on video") {
                    interactionType =
                        "time shift: on video";
                    s.prop69 = "time shift: on video"
                } else if (typeof data.interaction !== "undefined" && data.interaction === "video carousel") s.prop69 = data.interaction + ":click";
                else s.prop69 = data.interaction;
                try {
                    s.prop14 = data.branding_social
                } catch (e) {}
                s.prop51 = Bootstrapper.Util.getCNNWidgetLoad();
                if (typeof data.pageURL != "undefined" && data.pageURL != "") {
                    var domain1 = "";
                    try {
                        domain1 = data.pageURL.split("/")[2];
                        domain1 = domain1.replace("www.", "");
                        data.pageURL = data.pageURL.toLowerCase();
                        data.pageURL = data.pageURL.replace(/^.*\/\/[^\/]+/,
                            "");
                        data.pageURL = data.pageURL.replace("/index.html", "/")
                    } catch (e) {}
                    s.pageName = Bootstrapper.Util.getCNNPageName(data.pageURL)
                }
                if (typeof data.interaction != undefined && (data.interaction == "travel:gallery:open" || data.interaction == "travel:gallery:viewall" || data.interaction == "style:gallery:open" || data.interaction == "style:gallery:viewall")) {
                    s.linkTrackEvents = s.linkTrackEvents + ",event30";
                    s.events = s.linkTrackEvents
                } else {
                    s.linkTrackEvents = s.linkTrackEvents + ",event76";
                    s.events = s.linkTrackEvents
                }
                if (typeof data.interaction !=
                    undefined && data.interaction == "politics:submit debate topics") {
                    s.prop69 = data.interaction;
                    interactionType = "debate topic submission"
                }
                if (typeof s.prop69 != "undefined" && s.prop69 !== "") {
                    s.eVar69 = "D\x3dc69";
                    if (s.prop69.indexOf("subscribe") !== -1) s.linkTrackVars = "events,eVar69,prop69,list2";
                    else if (s.prop28.indexOf("electoral college map") !== -1) s.linkTrackVars = "events,campaign,pageName,eVar26,server,eVar29,channel,eVar27,prop28,eVar28,prop35,eVar35,eVar36,prop59,eVar59,prop69,eVar69,prop73,eVar73,list2";
                    else if (s.prop28.indexOf("general elections 2016") !==
                        -1) s.linkTrackVars = "events,campaign,pageName,eVar26,server,eVar29,channel,eVar27,prop28,eVar28,prop35,eVar35,eVar36,prop69,eVar69,list2";
                    else if (s.prop69.indexOf("style:menu") !== -1) s.linkTrackVars = "events,campaign,pageName,eVar26,server,eVar29,channel,eVar27,prop28,eVar28,prop30,eVar30,prop35,eVar35,eVar36,prop59,eVar59,prop69,eVar69,prop73,eVar73,list2";
                    else if (s.prop69.indexOf("style:gallery:open") !== -1) s.linkTrackVars = "events,campaign,pageName,prop16,eVar16,eVar26,server,eVar29,channel,eVar27,prop28,eVar28,prop30,eVar30,prop33,eVar33,prop35,eVar35,eVar36,prop59,eVar59,prop69,eVar69,prop73,eVar73,list2";
                    else s.linkTrackVars = "events,campaign,pageName,eVar26,server,eVar29,channel,eVar27,prop28,eVar28,prop30,eVar30,prop35,eVar35,eVar36,prop51,eVar51,prop69,eVar69,prop73,eVar73,list2";
                    var event = s.events.split(",");
                    for (var e = 0; e <= event.length; e++)
                        if (event[e] === "event26" || event[e] === "event21" || event[e] === "event39") {
                            event.splice(e, 1);
                            e = 0
                        }
                    s.linkTrackEvents = event.toString();
                    s.events = s.linkTrackEvents
                }
                if (typeof data.bouncex != "undefined" && data.bouncex !== "") {
                    s.prop62 = data.bouncex;
                    s.linkTrackEvents = s.linkTrackEvents +
                        ",event20";
                    s.events = s.linkTrackEvents;
                    if (s.prop62 !== "") {
                        var event = s.events.split(",");
                        for (var e = 0; e <= event.length; e++)
                            if (event[e] === "event26" || event[e] === "event39" || event[e] === "event76" || event[e] === "event21") {
                                event.splice(e, 1);
                                e = 0
                            }
                        s.linkTrackEvents = event.toString();
                        s.events = s.linkTrackEvents;
                        s.linkTrackVars = "events,campaign,pageName,eVar26,server,eVar29,channel,eVar27,prop28,eVar28,prop35,eVar35,eVar36,eVar59,prop59,prop62,eVar62,eVar73,prop73,list2"
                    }
                }
                s.tl(this, "o", "user interaction:" + interactionType);
                s.clearVars()
            });
            PubSub.subscribe("election-click", function(data) {
                s.linkTrackVars = "events,server,channel,pageName,eVar26,eVar27,prop28,eVar28,prop32,eVar32,prop33,eVar33,prop35,eVar35,prop74,eVar74,prop75,eVar75,list2";
                s.linkTrackEvents = "event9";
                s.events = s.linkTrackEvents;
                s.pageURL = Bootstrapper.Util.getCNNPageURL();
                try {
                    s.pageName = s.pageName + " " + data.pagename
                } catch (e) {}
                s.eVar26 = "D\x3dpageName";
                try {
                    s.channel = data.section1
                } catch (e) {}
                s.eVar27 = "D\x3dchannel";
                try {
                    s.prop28 = data.section2
                } catch (e) {}
                try {
                    s.prop74 =
                        data.state
                } catch (e) {}
                try {
                    s.prop75 = data.racetype
                } catch (e) {}
                s.t();
                s.clearVars()
            });
            PubSub.subscribe("quiz-interaction", function(data) {
                s.linkTrackVars = "events,server,prop32,eVar32,prop33,eVar33,prop35,eVar35,prop69,eVar69,list2";
                s.linkTrackEvents = "event76";
                s.events = s.linkTrackEvents;
                var co = data.clickObj || {};
                s.prop32 = "other:interactive";
                s.prop33 = "other:quiz";
                try {
                    s.prop69 = co.action
                } catch (e) {}
                try {
                    s.tl(this, "o", "quiz-interaction:" + s.prop69)
                } catch (e) {}
                s.clearVars()
            });
            PubSub.subscribe("hp10-interaction", function(data) {
                s.linkTrackVars =
                    "events,eVar26,eVar27,eVar29,prop35,eVar35,eVar36,prop56,eVar56,prop69,eVar69,prop73,eVar73,list2";
                s.linkTrackEvents = "event76";
                s.eVar26 = s.pageName;
                s.pageName = "";
                s.eVar27 = s.channel;
                s.channel = "";
                s.eVar29 = s.server;
                s.server = "";
                s.events = s.linkTrackEvents;
                try {
                    s.prop69 = data.interaction
                } catch (e) {}
                try {
                    s.tl(this, "o", "hp10-interaction:" + s.prop69)
                } catch (e) {}
                s.clearVars()
            });
            PubSub.subscribe("exitlink-click", function(data) {
                s.linkTrackVars = "events,server,eVar14,eVar26,eVar27,eVar28,eVar32,list2";
                s.linkTrackEvents =
                    "event61";
                s.events = s.linkTrackEvents;
                s.eVar14 = s.prop14;
                s.prop14 = "";
                s.eVar26 = s.pageName;
                s.pageName = "";
                s.eVar27 = s.channel;
                s.channel = "";
                s.eVar28 = s.prop28;
                s.prop28 = "";
                s.eVar32 = s.prop32;
                s.prop32 = "";
                s.tl(this, "o", "exitlink-click");
                s.clearVars()
            });
            PubSub.subscribe("readmore-click", function(data) {
                s.linkTrackVars = "events,eVar23,eVar26,eVar27,eVar29,prop35,eVar35,eVar36,prop56,eVar56,prop59,eVar59,prop69,eVar69,prop73,eVar73,list2";
                s.linkTrackEvents = "event76";
                s.eVar23 = s.prop23;
                s.prop23 = "";
                if (s.pageName) {
                    s.eVar26 =
                        s.pageName;
                    s.pageName = ""
                } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                s.eVar27 = s.channel;
                s.channel = "";
                s.eVar29 = s.server;
                s.server = "";
                s.events = s.linkTrackEvents;
                try {
                    s.prop69 = data.interaction
                } catch (e) {}
                try {
                    s.tl(this, "o", "readmore-click:" + s.prop69)
                } catch (e) {}
                window.sendInteractionEvent("readmore-page", data.interaction);
                s.clearVars()
            });
            PubSub.subscribe("readmore-page", function(data) {
                s.linkTrackVars = "events,server,pageName,channel,prop2,eVar2,prop4,evar4,prop8,eVar8,eVar15,prop16,eVar16,eVar26,eVar27,prop28,eVar28,prop32,eVar32,prop33,eVar33,prop35,eVar35,prop44,eVar44,prop46,eVar46,prop47,eVar47,prop56,eVar56,prop57,eVar57,prop59,eVar59,prop64,eVar64,prop69,eVar69,prop73,eVar73,prop75,eVar75,list2";
                s.linkTrackEvents = "event26";
                var cctype = Bootstrapper.Util.getCNNCapContentType();
                if (cctype == "article") s.linkTrackEvents = s.linkTrackEvents + ",event39";
                s.pageURL = Bootstrapper.Util.getCNNPageURL();
                s.prop32 = Bootstrapper.Util.getCNNTemplateType("long");
                s.eVar3 = s.eVar7 = s.prop11 = s.eVar11 = s.prop34 = s.eVar34 = s.eVar41 = s.eVar42 = s.eVar66 = s.eVar67 = s.eVar68 = s.prop70 = s.eVar70 = s.eVar71 = "";
                s.events = s.linkTrackEvents;
                try {
                    s.prop69 = data.interaction
                } catch (e) {}
                s.t();
                s.clearVars()
            });
            PubSub.subscribe("ribbon-interaction", function(data) {
                s.linkTrackVars =
                    "events,server,channel,pageName,eVar26,eVar27,prop28,eVar28,eVar29,prop35,eVar35,eVar36,prop59,eVar59,prop69,eVar69,prop73,eVar73,list2";
                s.linkTrackEvents = "event76,event72";
                s.events = s.linkTrackEvents;
                s.pageName = Bootstrapper.Util.getCNNPageName();
                var interaction_type = data.interaction;
                try {
                    s.prop69 = data.interaction
                } catch (e) {}
                try {
                    if (typeof interaction_type == "string") interaction_type = interaction_type.replace(":", " ");
                    s.tl(this, "o", interaction_type)
                } catch (e) {}
                s.clearVars()
            });
            PubSub.subscribe("click-interaction",
                function(data) {
                    s.linkTrackVars = "events,server,channel,pageName,eVar26,eVar27,prop28,eVar28,eVar29,prop35,eVar35,eVar36,prop59,eVar59,prop69,eVar69,prop73,eVar73,list2";
                    s.linkTrackEvents = "event76";
                    s.events = s.linkTrackEvents;
                    s.pageName = Bootstrapper.Util.getCNNPageName();
                    try {
                        s.prop69 = data.interaction
                    } catch (e) {}
                    try {
                        s.tl(this, "o", "click-interaction:" + data.interaction)
                    } catch (e) {}
                    s.clearVars()
                });
            Bootstrapper.subscribersReady = true;
            setTimeout(function() {
                s.linkTrackVars = "events,eVar5,eVar6,eVar8,eVar22,eVar26,eVar27,eVar28,eVar29,eVar30,eVar32,eVar33,prop35,eVar35,eVar36,eVar37,prop46,eVar46,prop47,eVar47,eVar56,eVar57,eVar59,eVar64,eVar73,eVar75";
                s.linkTrackEvents = "event61";
                s.events = "event61";
                var arr = s.linkTrackVars.split(",");
                for (var i in arr) try {
                    var tVar = arr[i];
                    if (typeof tVar != "string") tVar = tVar.toString();
                    if (tVar.indexOf("eVar") !== -1) {
                        var evar = tVar;
                        var prop = evar.replace("eVar", "prop");
                        if (s[prop]) s[evar] = s[prop]
                    }
                } catch (e) {}
                if (s.pageName) {
                    s.eVar26 = s.pageName;
                    s.pageName = ""
                }
                if (s.channel) s.eVar27 = s.channel;
                if (s.server) s.eVar29 = s.server;
                if (s.prop35) s.eVar35 = "D\x3dc35";
                if (s.prop46) s.eVar46 = "D\x3dc46";
                if (s.prop47) s.eVar47 = "D\x3dc47"
            }, 1E3)
        }, 3011655, [3011656, 2988688], 579712, [578568, 578909]);
        Bootstrapper.bindDependencyImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.videoData = {};
            Bootstrapper.videoData.timeSpent = 0;
            Bootstrapper.isVideoCompleted = false;
            Bootstrapper.isLiveVid = false;
            Bootstrapper.live_interval = 0;
            Bootstrapper.setinterval_id = 0;
            Bootstrapper.isAd = false;
            Bootstrapper.adVidId = "";
            Bootstrapper.adRange = "";
            Bootstrapper.is_dvr = false;
            Bootstrapper.isLivePaused = false;
            Bootstrapper.isGoogleAmp = "";
            Bootstrapper.standardVideoMetadata = {};
            Bootstrapper.is_preroll_occur = false;
            if (!Bootstrapper.intervalID) Bootstrapper.intervalID = 0;
            var progTime = 0;
            var videoPlayer = new Array;
            Bootstrapper.capCNNTimeSpent = function(timeSpent, trt, liveInterval) {
                try {
                    var timeLimit = 0;
                    if (parseFloat(timeSpent) == parseInt(timeSpent) && !isNaN(timeSpent)) {
                        if (liveInterval && liveInterval > 0) timeLimit = liveInterval;
                        else {
                            timeLimit = 60;
                            if (trt && parseFloat(trt) > 0) timeLimit = parseFloat(trt) * 2
                        }
                        if (timeSpent > timeLimit) timeSpent = timeLimit;
                        else if (timeSpent < 0) timeSpent = 0
                    } else timeSpent =
                        0
                } catch (e) {
                    timeSpent = 0
                }
                return timeSpent
            };
            Bootstrapper.capCNNTimeSpent2 = function(timeSpent, trt) {
                try {
                    if (parseFloat(timeSpent) == parseInt(timeSpent) && !isNaN(timeSpent))
                        if (trt && !isNaN(trt) && parseFloat(trt) == parseInt(trt))
                            if (timeSpent > parseFloat(trt) * 2) timeSpent = parseFloat(trt) * 2;
                            else {
                                if (timeSpent < 0) timeSpent = 0
                            }
                    else timeSpent = 0;
                    else timeSpent = 0
                } catch (e) {
                    timeSpent = 0
                }
                return timeSpent
            };
            Bootstrapper.getCNNVideoCollection = function() {
                return {
                    get: function(i, p) {
                        var vplayer = videoPlayer;
                        for (var j = vplayer.length - 1; j >=
                            0; j--)
                            if (vplayer[j].containerId == i) return vplayer[j][p]
                    },
                    set: function(i, p, v) {
                        var vplayer = videoPlayer;
                        for (var j = vplayer.length - 1; j >= 0; j--)
                            if (vplayer[j].containerId == i) {
                                vplayer[j][p] = v;
                                break
                            }
                    },
                    toggle: function(i, p) {
                        var vplayer = videoPlayer;
                        for (var j = vplayer.length - 1; j >= 0; j--)
                            if (vplayer[j].containerId == i) {
                                var v = vplayer[j][p];
                                vplayer[j][p] = !v;
                                break
                            }
                    },
                    start: function(i, t) {
                        var vplayer = videoPlayer;
                        vplayer.push(new objVplayer(i, t));

                        function objVplayer(cid, videoTitle) {
                            this.containerId = cid;
                            this.videoTitle = videoTitle;
                            this.vidStarted = false;
                            this.hasScrubbed = false;
                            this.isAuto = false;
                            this.isTen = false;
                            this.isTwentyFive = false;
                            this.isHalf = false;
                            this.isSeventyFive = false;
                            this.isBuffering = false;
                            this.isPaused = false;
                            this.isMidrollStarted = false;
                            this.adNumber = 0;
                            this.startTime = (new Date).getTime();
                            this.currentTime = (new Date).getTime();
                            this.timeSpent = 0
                        }
                    },
                    pause: function(i) {
                        var vplayer = videoPlayer;
                        for (var j = vplayer.length - 1; j >= 0; j--)
                            if (vplayer[j].containerId == i) {
                                var p = vplayer[j].isPaused;
                                var b = vplayer[j].isBuffering;
                                if (!b)
                                    if (p) vplayer[j].startTime =
                                        (new Date).getTime();
                                    else {
                                        var playedTime = (new Date).getTime() - vplayer[j].startTime + vplayer[j].timeSpent;
                                        vplayer[j].timeSpent = playedTime
                                    }
                                vplayer[j].isPaused = !p;
                                break
                            }
                    },
                    buffer: function(i) {
                        var vplayer = videoPlayer;
                        for (var j = vplayer.length - 1; j >= 0; j--)
                            if (vplayer[j].containerId == i) {
                                var p = vplayer[j].isPaused;
                                var b = vplayer[j].isBuffering;
                                if (!p)
                                    if (b) vplayer[j].startTime = (new Date).getTime();
                                    else {
                                        var playedTime = (new Date).getTime() - vplayer[j].startTime + vplayer[j].timeSpent;
                                        vplayer[j].timeSpent = playedTime
                                    }
                                vplayer[j].isBuffering = !b;
                                break
                            }
                    },
                    progress: function(i) {
                        var vplayer = videoPlayer;
                        for (var j = vplayer.length - 1; j >= 0; j--)
                            if (vplayer[j].containerId == i) {
                                vplayer[j].currentTime = (new Date).getTime();
                                var playedTime = (vplayer[j].currentTime - vplayer[j].startTime + vplayer[j].timeSpent) / 1E3;
                                vplayer[j].startTime = (new Date).getTime();
                                vplayer[j].timeSpent = 0;
                                return Math.round(playedTime)
                            }
                    },
                    complete: function(i) {
                        var vplayer = videoPlayer;
                        for (var j = vplayer.length - 1; j >= 0; j--)
                            if (vplayer[j].containerId == i) {
                                var playedTime = ((new Date).getTime() - vplayer[j].startTime +
                                    vplayer[j].timeSpent) / 1E3;
                                vplayer[j].timeSpent = 0;
                                return Math.round(playedTime)
                            }
                    }
                }
            };
            Bootstrapper.isAMPVideos = function() {
                var hostName = window.location.hostname;
                return hostName.indexOf("fave.api.cnn.io") != -1 || hostName.indexOf("fave-api.cnn.com") != -1
            };
            Bootstrapper.isMoneyVideo = function(v) {
                return v.category && (v.category == "cnnmoney" || v.category == "business")
            };
            Bootstrapper.getAMPVideoTimeStamp = function() {
                var pathName = window.location.pathname;
                var ts = "";
                if (pathName.indexOf("/v1/amp") != -1 || pathName.indexOf("/v1/cnneamp") !=
                    -1 || pathName.indexOf("/v1/fbia") != -1 || pathName.indexOf("/v1/fbiaV2") != -1) ts = (new Date).getTime();
                return ts
            };
            Bootstrapper.trackMoneyVideoEvent = function(eventId, v) {
                s.origRSID = s.account;
                s.origLTV = s.linkTrackVars;
                s.origPageName = s.pageName;
                s.sa("aolturnercnnmoney-adbp-offsite");
                s.referrer = document.referrer;
                s.pageName = "";
                s.prop1 = "Video";
                s.prop2 = s.channel;
                var video_source = "";
                if (v.source) {
                    video_source = v.source.toUpperCase();
                    if (video_source == "CNN MONEY") video_source = "CNNMONEY"
                }
                s.prop8 = v.branding || "nvs";
                s.prop11 =
                    v.series || "nvs";
                s.prop15 = window.location.href.toLowerCase();
                s.eVar15 = "";
                s.prop16 = "cnn player";
                s.prop23 = "domestic";
                if (s.origRSID && s.origRSID.indexOf("cnn-adbp-intl") != -1) s.prop23 = "international";
                s.prop30 = "cnnmoney";
                if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                var linkId = eventId;
                switch (eventId) {
                    case "preroll":
                        if (Bootstrapper.isGoogleAmp == "google amp") {
                            s.timestamp = "";
                            s.linkTrackVars = "campaign,prop14,eVar14,prop23,eVar23,eVar41,eVar42,prop35,eVar35,prop46,eVar46,prop47,eVar47,events,list2"
                        } else s.linkTrackVars =
                            "campaign,prop23,eVar23,eVar41,eVar42,prop35,eVar35,prop46,eVar46,prop47,eVar47,events,list2";
                        Bootstrapper.isGoogleAmp = "";
                        s.linkTrackEvents = "event35";
                        break;
                    case "start":
                        if (Bootstrapper.isGoogleAmp == "google amp") {
                            s.timestamp = "";
                            s.linkTrackVars = "campaign,prop1,eVar1,prop2,eVar2,prop8,eVar8,prop11,eVar11,prop14,eVar14,prop15,eVar15,prop16,eVar16,prop23,eVar23,eVar27,prop28,eVar28,prop29,eVar41,server,eVar29,prop30,eVar30,prop32,eVar32,prop33,eVar33,prop35,eVar35,eVar42,prop46,eVar46,prop47,eVar47,events,list2"
                        } else s.linkTrackVars =
                            "campaign,prop1,eVar1,prop2,eVar2,prop8,eVar8,prop11,eVar11,prop15,eVar15,prop16,eVar16,prop23,eVar23,eVar27,prop28,eVar28,prop29,eVar41,server,eVar29,prop30,eVar30,prop32,eVar32,prop33,eVar33,prop35,eVar35,eVar42,prop46,eVar46,prop47,eVar47,events,list2";
                        Bootstrapper.isGoogleAmp = "";
                        s.linkTrackEvents = "event32";
                        s.prop33 = "adbp:video start";
                        break;
                    case "autostart":
                        if (Bootstrapper.isGoogleAmp == "google amp") {
                            s.timestamp = "";
                            s.linkTrackVars = "campaign,prop1,eVar1,prop2,eVar2,prop8,eVar8,prop11,eVar11,prop14,eVar14,prop15,eVar15,prop16,eVar16,prop23,eVar23,eVar27,prop28,eVar28,prop29,eVar41,server,eVar29,prop30,eVar30,prop32,eVar32,prop33,eVar33,prop35,eVar35,eVar42,prop46,eVar46,prop47,eVar47,events,list2"
                        } else s.linkTrackVars =
                            "campaign,prop1,eVar1,prop2,eVar2,prop8,eVar8,prop11,eVar11,prop15,eVar15,prop16,eVar16,prop23,eVar23,eVar27,prop28,eVar28,prop29,eVar41,server,eVar29,prop30,eVar30,prop32,eVar32,prop33,eVar33,prop35,eVar35,eVar42,prop46,eVar46,prop47,eVar47,events,list2";
                        Bootstrapper.isGoogleAmp = "";
                        s.linkTrackEvents = "event32,event34";
                        s.prop33 = "adbp:video start";
                        break;
                    case "fifty":
                        if (Bootstrapper.isGoogleAmp == "google amp") {
                            s.timestamp = "";
                            s.linkTrackVars = "campaign,prop1,eVar1,prop2,eVar2,prop14,eVar14,prop23,eVar23,eVar27,prop35,eVar35,prop46,eVar46,prop47,eVar47,events,products,list2"
                        } else s.linkTrackVars =
                            "campaign,prop1,eVar1,prop2,eVar2,prop23,eVar23,eVar27,prop35,eVar35,prop46,eVar46,prop47,eVar47,events,products,list2";
                        Bootstrapper.isGoogleAmp = "";
                        s.linkTrackEvents = "event29,event36";
                        linkId = "midpoint";
                        break;
                    case "complete":
                        if (Bootstrapper.isGoogleAmp == "google amp") {
                            s.timestamp = "";
                            s.linkTrackVars = "campaign,prop1,eVar1,prop2,eVar2,prop23,prop14,eVar14,eVar23,eVar27,prop35,eVar35,prop46,eVar46,prop47,eVar47,events,products,list2"
                        } else s.linkTrackVars = "campaign,prop1,eVar1,prop2,eVar2,prop23,eVar23,eVar27,prop35,eVar35,prop46,eVar46,prop47,eVar47,events,products,list2";
                        Bootstrapper.isGoogleAmp = "";
                        s.linkTrackEvents = "event33,event36";
                        break
                }
                s.events = s.linkTrackEvents;
                s.tl(this, "o", "cnnvideo-" + linkId + ": " + (v.title ? v.title : v.headline).toLowerCase());
                s.sa(s.origRSID);
                s.linkTrackVars = s.origLTV;
                s.pageName = s.origPageName
            };
            PubSub.subscribe("cnnvideo-preroll", function(data) {
                Bootstrapper.isAd = true;
                var v = Bootstrapper.Util.getVideoMetadata(data);
                Bootstrapper.videoCommonFunction.videoCommonData(v);
                Bootstrapper.adVidId = v.id;
                s.linkTrackVars = "events,server,channel,eVar1,eVar3,eVar4,eVar7,eVar8,eVar10,eVar11,eVar14,eVar16,eVar20,eVar22,eVar26,eVar27,eVar28,eVar29,eVar30,eVar31,eVar32,eVar33,eVar34,prop35,eVar35,eVar36,eVar37,eVar41,eVar42,prop44,prop46,eVar46,prop47,eVar47,prop49,eVar49,eVar52,eVar53,eVar54,eVar57,prop59,eVar59,eVar60,eVar64,prop65,eVar66,eVar67,eVar68,eVar70,eVar72,prop73,eVar73,prop75,eVar75,list1,list2";
                s.linkTrackEvents = "event35";
                s.events = "event35";
                if (v.category && v.category !== "live") Bootstrapper.isLiveVid = false;
                if (Bootstrapper.standardVideoMetadata.isCNNGo) s.eVar72 = v.free_preview;
                else s.eVar72 = "";
                s.eVar1 = s.prop1;
                s.prop1 = "";
                s.eVar3 = s.prop3;
                s.prop3 = "";
                if (s.prop4) {
                    s.eVar4 = s.prop4;
                    s.prop4 = ""
                } else s.eVar4 = "";
                s.eVar7 = s.prop7;
                s.prop7 = "";
                if (s.prop8) {
                    s.eVar8 = s.prop8;
                    s.prop8 = ""
                }
                s.eVar10 = s.prop10;
                s.prop10 = "";
                s.eVar11 = s.prop11;
                s.prop11 = "";
                s.eVar16 = s.prop16;
                s.prop16 = "";
                s.eVar23 = s.prop23 = "";
                if (s.pageName) {
                    s.eVar26 =
                        s.pageName;
                    s.pageName = ""
                } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                if (s.channel) {
                    s.eVar27 = s.channel;
                    s.channel = ""
                } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                if (s.prop28) {
                    s.eVar28 = s.prop28;
                    s.prop28 = ""
                } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                s.eVar30 = s.prop30;
                s.prop30 = "";
                if (!s.prop31) s.eVar31 = "";
                s.eVar32 = s.prop32;
                s.prop32 = "";
                s.eVar33 = s.prop33;
                s.prop33 = "";
                s.eVar34 = s.prop34;
                s.prop34 = "";
                if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                s.eVar37 = s.prop37;
                s.prop37 = "";
                s.eVar41 =
                    s.prop29;
                s.prop29 = "";
                s.eVar52 = s.prop52;
                s.prop52 = "";
                s.eVar54 = s.prop54;
                s.prop54 = "";
                s.eVar57 = s.prop57;
                s.prop57 = "";
                s.eVar60 = s.prop60;
                s.prop60 = "";
                s.eVar64 = s.prop64;
                s.prop64 = "";
                if (s.prop65) {
                    s.list1 = s.prop65;
                    s.prop65 = ""
                }
                s.eVar66 = s.prop66;
                s.prop66 = "";
                s.eVar68 = s.prop68;
                s.prop68 = "";
                s.eVar70 = s.prop70;
                s.prop70 = "";
                s.eVar71 = s.prop71;
                s.prop71 = "";
                if (Bootstrapper.isLiveVid == true && (v.isLive == true || v.isLive == "true")) {
                    if (v.adType && v.adType.toLowerCase() == "midroll")
                        if (Bootstrapper.setinterval_id) clearInterval(Bootstrapper.setinterval_id);
                    if (v.adType && v.adType.toLowerCase() == "preroll") {
                        s.linkTrackEvents = s.linkTrackEvents + ",event90";
                        s.events = s.linkTrackEvents;
                        Bootstrapper.is_preroll_occur = true
                    }
                } else {
                    s.linkTrackEvents = s.linkTrackEvents + ",event90";
                    s.events = s.linkTrackEvents;
                    Bootstrapper.is_preroll_occur = true
                }
                if (Bootstrapper.isAMPVideos) s.timestamp = Bootstrapper.getAMPVideoTimeStamp();
                if (Bootstrapper.isMoneyVideo(v)) Bootstrapper.trackMoneyVideoEvent("preroll", v);
                else {
                    s.eVar14 = s.prop14;
                    s.prop14 = "";
                    s.tl(this, "o", "cnnvideo-" + v.adType.toLowerCase() +
                        ":" + (v.title ? v.title : v.headline).toLowerCase())
                }
                try {
                    if (v.content_type1 && v.content_type1 == "tve") Bootstrapper.setinterval_id = setInterval(function() {
                        window.trackVideoProgress(v)
                    }, 6E4)
                } catch (e) {}
                s.clearVars()
            });
            PubSub.subscribe("cnnvideo-adcomplete", function(data) {
                var v = Bootstrapper.Util.getVideoMetadata(data);
                Bootstrapper.videoCommonFunction.videoCommonData(v);
                s.linkTrackVars = "events,server,channel,prop35,eVar35,prop44";
                s.linkTrackEvents = "event50";
                if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                if (v.adType.toLowerCase() == "midroll" || Bootstrapper.isLiveVid == true && v.adType.toLowerCase() == "preroll") {
                    if (v.player_type && (v.player_type == "tve" || v.player_type == "live player")) {
                        s.prop33 = "adbp:none";
                        s.tl(this, "o", "cnnvideo-adcomplete" + ":" + (v.title ? v.title : v.headline).toLowerCase())
                    }
                    if (Bootstrapper.setinterval_id) clearInterval(Bootstrapper.setinterval_id);
                    Bootstrapper.setinterval_id = setInterval(function() {
                        window.trackVideoProgress(v)
                    }, 6E4)
                }
                Bootstrapper.isAd = false;
                s.clearVars()
            });
            PubSub.subscribe("cnnvideo-midroll-complete",
                function(data) {
                    var v = Bootstrapper.Util.getVideoMetadata(data);
                    Bootstrapper.videoCommonFunction.videoCommonData(v);
                    s.linkTrackVars = "events,server,channel,prop35,eVar35,prop44";
                    s.linkTrackEvents = "event50";
                    s.events = "event50";
                    if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                    if (v.adType.toLowerCase() == "midroll" || Bootstrapper.isLiveVid == true && v.adType.toLowerCase() == "preroll")
                        if (v.player_type && (v.player_type == "tve" || v.player_type == "live player")) {
                            s.prop33 = "adbp:none";
                            s.tl(this, "o", "cnnvideo-adcomplete" +
                                ":" + v.title ? v.title : v.headline)
                        }
                    if (Bootstrapper.setinterval_id) clearInterval(Bootstrapper.setinterval_id);
                    Bootstrapper.setinterval_id = setInterval(function() {
                        window.trackVideoProgress(v)
                    }, 6E4);
                    Bootstrapper.isAd = false;
                    s.clearVars()
                });
            PubSub.subscribe("cnnvideo-start", function(data) {
                Bootstrapper.isAd = false;
                Bootstrapper.isLiveVid = false;
                var v = Bootstrapper.Util.getVideoMetadata(data);
                Bootstrapper.videoCommonFunction.videoCommonData(v);
                s.linkTrackVars = "events,server,channel,list1,prop1,eVar1,prop3,eVar3,prop4,eVar4,prop7,eVar7,prop8,eVar8,prop10,eVar10,prop11,eVar11,prop14,eVar14,prop16,eVar16,prop20,eVar20,eVar21,eVar22,eVar23,eVar26,eVar27,eVar28,prop29,eVar29,prop30,eVar30,prop31,eVar31,prop32,eVar32,prop33,eVar33,prop34,eVar34,prop35,eVar35,eVar36,prop37,eVar37,eVar41,eVar42,prop44,prop46,eVar46,prop47,eVar47,prop49,eVar49,prop52,eVar52,prop54,eVar54,eVar57,prop59,eVar59,prop60,eVar60,eVar61,prop64,eVar64,eVar54,prop65,prop66,eVar66,eVar67,prop68,eVar68,prop70,eVar70,prop71,eVar71,prop72,eVar72,prop73,eVar73,prop75,eVar75,list2";
                s.linkTrackEvents = "event32";
                s.events = "event32";
                if (typeof v.subcategory && v.subcategory && v.subcategory != "") {
                    s.linkTrackEvents = "event23," + s.linkTrackEvents;
                    s.events = s.linkTrackEvents
                }
                if (typeof v.metas !== "undefined" && v.metas.branding && v.metas.branding != "") {
                    s.linkTrackEvents = "event22," + s.linkTrackEvents;
                    s.events = s.linkTrackEvents
                }
                if (Bootstrapper.adVidId == v.id && Bootstrapper.adRange > 0) {
                    s.linkTrackEvents = "event3," + s.linkTrackEvents;
                    s.events = s.linkTrackEvents;
                    Bootstrapper.adVidId = ""
                }
                if (!Bootstrapper.is_preroll_occur) {
                    s.linkTrackEvents =
                        s.linkTrackEvents + ",event90";
                    s.events = s.linkTrackEvents
                }
                var vc = new Bootstrapper.getCNNVideoCollection;
                vc.start(v.playerid, v.title ? v.title : v.headline);
                if (Bootstrapper.standardVideoMetadata.isCNNGo) {
                    s.prop72 = v.free_preview;
                    s.eVar72 = "D\x3dc72"
                } else s.prop72 = s.eVar72 = "";
                if (s.prop4) s.eVar4 = "D\x3dc4";
                else s.eVar4 = "";
                s.eVar21 = Bootstrapper.Util.getCNNVideoSequence();
                s.eVar23 = s.prop23;
                s.prop23 = "";
                if (s.pageName) {
                    s.eVar26 = s.pageName;
                    s.pageName = ""
                } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                if (s.channel) {
                    s.eVar27 =
                        s.channel;
                    s.channel = ""
                } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                if (s.prop28) {
                    s.eVar28 = s.prop28;
                    s.prop28 = ""
                } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                if (!s.prop31) s.eVar31 = "";
                if (s.prop33) s.eVar33 = "D\x3dc33";
                if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                s.eVar47 = "D\x3dc47";
                s.eVar60 = s.prop60;
                s.prop60 = "";
                if (s.prop65) {
                    s.list1 = s.prop65;
                    s.prop65 = ""
                }
                if (Bootstrapper.isAMPVideos) s.timestamp = Bootstrapper.getAMPVideoTimeStamp();
                if (Bootstrapper.isMoneyVideo(v)) Bootstrapper.trackMoneyVideoEvent("start",
                    v);
                else {
                    s.tl(this, "o", "cnnvideo-start" + ":" + (v.title ? v.title : v.headline).toLowerCase());
                    vc.set(v.playerid, "vidStarted", true);
                    s.clearVars()
                }
            });
            PubSub.subscribe("cnnvideo-autostart", function(data) {
                Bootstrapper.isAd = false;
                Bootstrapper.isLiveVid = false;
                var v = Bootstrapper.Util.getVideoMetadata(data);
                Bootstrapper.videoCommonFunction.videoCommonData(v);
                s.linkTrackVars = "events,server,channel,list1,prop1,eVar1,prop3,eVar3,prop4,eVar4,prop7,eVar7,prop8,eVar8,prop10,eVar10,prop11,eVar11,prop14,eVar14,prop16,eVar16,prop20,eVar20,prop21,eVar21,eVar22,prop23,eVar23,eVar26,eVar27,eVar28,prop29,eVar29,prop30,eVar30,prop31,eVar31,prop32,eVar32,prop33,eVar33,prop34,eVar34,prop35,eVar35,eVar36,prop37,eVar37,eVar41,eVar42,prop44,prop46,eVar46,prop47,eVar47,prop49,eVar49,prop52,eVar52,prop54,eVar54,eVar57,prop59,eVar59,prop60,eVar60,eVar61,prop64,eVar64,prop65,prop66,eVar66,eVar67,prop68,eVar68,prop70,eVar70,prop71,eVar71,prop72,eVar72,prop73,eVar73,prop75,eVar75,list2";
                s.linkTrackEvents = "event32,event34";
                if (typeof v.subcategory && v.subcategory && v.subcategory != "") {
                    s.linkTrackEvents = "event23," + s.linkTrackEvents;
                    s.events = s.linkTrackEvents
                }
                if (typeof v.metas !== "undefined" && v.metas.branding && v.metas.branding != "") {
                    s.linkTrackEvents = "event22," + s.linkTrackEvents;
                    s.events = s.linkTrackEvents
                }
                if (Bootstrapper.adVidId == v.id && Bootstrapper.adRange > 0) {
                    s.linkTrackEvents = "event3," + s.linkTrackEvents;
                    s.events = s.linkTrackEvents;
                    Bootstrapper.adVidId = ""
                }
                if (!Bootstrapper.is_preroll_occur) {
                    s.linkTrackEvents =
                        s.linkTrackEvents + ",event90";
                    s.events = s.linkTrackEvents
                }
                var vc = new Bootstrapper.getCNNVideoCollection;
                vc.start(v.playerid, v.title ? v.title : v.headline);
                if (s.prop4) s.eVar4 = "D\x3dc4";
                else s.eVar4 = "";
                s.prop21 = "";
                s.eVar23 = data.headline;
                s.prop23 = "";
                if (s.pageName) {
                    s.eVar26 = s.pageName;
                    s.pageName = ""
                } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                if (s.channel) {
                    s.eVar27 = s.channel;
                    s.channel = ""
                } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                if (s.prop28) {
                    s.eVar28 = s.prop28;
                    s.prop28 = ""
                } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                s.eVar47 = "D\x3dc47";
                s.eVar60 = "D\x3dc60";
                s.prop64 = "";
                s.eVar64 = Bootstrapper.Util.getCNNUIEngagement();
                s.eVar21 = Bootstrapper.Util.getCNNVideoSequence();
                if (Bootstrapper.standardVideoMetadata.isCNNgo) {
                    s.prop72 = v.free_preview;
                    s.eVar72 = "D\x3dc72"
                } else s.prop72 = s.eVar72 = "";
                s.eVar23 = s.prop23 = "";
                if (!s.prop31) s.eVar31 = "";
                if (s.prop33) s.eVar33 = "D\x3dc33";
                if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                if (s.prop65) {
                    s.list1 = s.prop65;
                    s.prop65 = ""
                }
                vc.set(v.playerid, "vidStarted", true);
                if (Bootstrapper.isAMPVideos) s.timestamp =
                    Bootstrapper.getAMPVideoTimeStamp();
                if (Bootstrapper.isMoneyVideo(v)) Bootstrapper.trackMoneyVideoEvent("autostart", v);
                else s.tl(this, "o", "cnnvideo-autostart" + ":" + (v.title ? v.title : v.headline).toLowerCase());
                s.clearVars()
            });
            PubSub.subscribe("cnnvideo-live", function(data) {
                Bootstrapper.isAd = false;
                Bootstrapper.isLiveVid = true;
                Bootstrapper.is_dvr = false;
                var v = Bootstrapper.Util.getVideoMetadata(data);
                s.linkTrackVars = "events,server,channel,prop1,eVar1,prop3,eVar3,prop4,eVar4,prop7,eVar7,prop8,eVar8,prop14,evar14,prop20,eVar20,evar21,eVar22,eVar26,eVar27,eVar28,prop29,eVar29,prop30,eVar30,prop31,eVar31,prop32,eVar32,prop33,eVar33,prop34,eVar34,prop35,eVar35,eVar36,prop37,eVar37,eVar41,eVar42,prop44,prop46,eVar46,prop47,eVar47,prop52,eVar52,prop54,eVar54,eVar57,prop59,eVar59,prop64,prop65,list1,prop66,eVar66,eVar67,prop68,eVar68,prop70,eVar70,prop71,eVar71,prop72,eVar72,prop73,eVar73,prop75,eVar75,list2";
                s.linkTrackEvents = "event1,event32";
                s.events = "event1,event32";
                Bootstrapper.videoCommonFunction.videoCommonData(v);
                var vc = new Bootstrapper.getCNNVideoCollection;
                vc.start(v.playerid, v.title ? v.title : v.headline);
                try {
                    if (v.category == "live" && v.source.toLowerCase() == "cnn-unauth") s.prop57 = "no mvpd set"
                } catch (e) {}
                if (s.prop4) s.eVar4 = "D\x3dc4";
                else s.eVar4 = "";
                s.eVar29 = s.server ? s.server : Bootstrapper.Util.getADBPURL("domain");
                try {
                    s.prop59 = v.adobe_hash_id
                } catch (e) {}
                if (v.content_type2);
                else {
                    s.eVar42 = v.id;
                    s.prop70 =
                        "noautostart:live";
                    try {
                        if (typeof v.isAutoStart !== "undefined" && v.isAutoStart == true && v.is_autoplay_allowed == true) {
                            s.prop70 = "live tv autostart";
                            s.linkTrackEvents = s.linkTrackEvents + ",event34";
                            s.events = s.linkTrackEvents
                        }
                    } catch (e) {}
                }
                if (!Bootstrapper.is_preroll_occur) {
                    s.linkTrackEvents = s.linkTrackEvents + ",event90";
                    s.events = s.linkTrackEvents
                }
                if (!s.prop31) s.eVar31 = "";
                try {
                    if (typeof window.CNN.omniture.user_auth_state !== "undefined") {
                        var user_auth_state = v.user_auth_state ? v.user_auth_state : window.CNN.omniture.user_auth_state;
                        s.prop75 = user_auth_state
                    } else if (typeof v.mvpd !== "undefined" && (v.mvpd == "temppass_cnn10min" || v.mvpd == "TempPass_CNN10min")) s.prop75 = "new_temppass_go"
                } catch (e) {}
                if (typeof Bootstrapper.adVidId !== "undefined" && Bootstrapper.adVidId == v.id && Bootstrapper.adRange > 0) {
                    s.linkTrackEvents = s.linkTrackEvents + ",event3";
                    s.events = s.linkTrackEvents;
                    Bootstrapper.adVidId = ""
                }
                s.eVar23 = s.prop23 = "";
                if (s.pageName) {
                    s.eVar26 = s.pageName;
                    s.pageName = ""
                } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                if (s.channel) {
                    s.eVar27 = s.channel;
                    s.channel = ""
                } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                if (s.prop28) {
                    s.eVar28 = s.prop28;
                    s.prop28 = ""
                } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                if (s.prop65) {
                    s.list1 = s.prop65;
                    s.prop65 = ""
                }
                if (typeof v.isLive !== "undefined" && (v.isLive == true || v.isLive == "true")) {
                    if (Bootstrapper.setinterval_id) clearInterval(Bootstrapper.setinterval_id);
                    Bootstrapper.setinterval_id = setInterval(function() {
                        window.trackVideoProgress(v)
                    }, 6E4)
                }
                if (Bootstrapper.standardVideoMetadata.isCNNGo) s.prop72 =
                    v.free_preview;
                else s.prop72 = s.eVar72 = "";
                if (Bootstrapper.isAMPVideos) s.timestamp = Bootstrapper.getAMPVideoTimeStamp();
                s.tl(this, "o", "cnnvideo-live" + ":" + (v.title ? v.title : v.headline).toLowerCase());
                vc.set(v.playerid, "vidStarted", true);
                s.clearVars()
            });
            PubSub.subscribe("cnnvideo-episode", function(data) {
                Bootstrapper.isAd = false;
                var v = Bootstrapper.Util.getVideoMetadata(data);
                Bootstrapper.videoCommonFunction.videoCommonData(v);
                s.linkTrackVars = "events,server,channel,eVar26,eVar27,eVar28,prop35,eVar35,list2";
                s.linkTrackEvents = "event48";
                s.events = "event48";
                if (s.pageName) {
                    s.eVar26 = s.pageName;
                    s.pageName = ""
                } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                if (s.channel) {
                    s.eVar27 = s.channel;
                    s.channel = ""
                } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                if (s.prop28) {
                    s.eVar28 = s.prop28;
                    s.prop28 = ""
                } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                var vc = new Bootstrapper.getCNNVideoCollection;
                vc.start(v.playerid, v.title ? v.title : v.headline);
                s.tl(this, "o", "cnnvideo-episode" +
                    ":" + (v.title ? v.title : v.headline).toLowerCase());
                vc.set(v.playerid, "vidStarted", true);
                s.clearVars()
            });
            PubSub.subscribe("cnnvideo-autosegment", function(data) {
                Bootstrapper.isAd = false;
                var v = Bootstrapper.Util.getVideoMetadata(data);
                Bootstrapper.videoCommonFunction.videoCommonData(v);
                s.linkTrackVars = "events,server,channel,eVar26,eVar27,eVar28,prop35,eVar35,list2";
                s.linkTrackEvents = "event65";
                if (s.pageName) {
                    s.eVar26 = s.pageName;
                    s.pageName = ""
                } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                if (s.channel) {
                    s.eVar27 =
                        s.channel;
                    s.channel = ""
                } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                if (s.prop28) {
                    s.eVar28 = s.prop28;
                    s.prop28 = ""
                } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                var vc = new Bootstrapper.getCNNVideoCollection;
                vc.start(v.playerid, v.title ? v.title : v.headline);
                s.tl(this, "o", "cnnvideo-autosegment" + ":" + (v.title ? v.title : v.headline).toLowerCase());
                vc.set(v.playerid, "vidStarted", true);
                s.clearVars()
            });
            PubSub.subscribe("cnnvideo-pause", function(data) {
                var v =
                    Bootstrapper.Util.getVideoMetadata(data);
                var paused = typeof v.paused == "undefined" ? false : v.paused;
                Bootstrapper.isLivePaused = paused;
                var vc = new Bootstrapper.getCNNVideoCollection;
                var prevPaused = vc.get(v.playerid, "isPaused");
                if (paused != prevPaused) {
                    vc.pause(v.playerid);
                    if (Bootstrapper.isLiveVid == true && (v.isLive == true || v.isLive == "true")) {
                        if (Bootstrapper.setinterval_id) clearInterval(Bootstrapper.setinterval_id);
                        if (prevPaused) Bootstrapper.setinterval_id = setInterval(function() {
                                window.trackVideoProgress(v)
                            },
                            6E4);
                        else;
                    }
                }
                if (v.pause_status == "viewport pause" || v.pause_status == "viewport resume") {
                    var pauseStatus = v.pause_status.replace(" ", "_");
                    s.linkTrackVars = "events,server,channel,prop1,eVar1,prop3,eVar3,prop4,eVar4,prop7,eVar7,prop8,eVar8,prop14,evar14,prop20,eVar20,evar21,eVar22,eVar26,eVar27,eVar28,prop29,eVar29,prop30,eVar30,prop31,eVar31,prop32,evar32,prop33,eVar33,prop34,eVar34,prop35,eVar35,eVar36,prop37,eVar37,eVar41,eVar42,prop44,prop46,eVar46,prop47,eVar47,prop52,eVar52,prop54,eVar54,eVar57,prop59,eVar59,prop64,prop65,list1,prop66,eVar66,eVar67,prop68,eVar68,prop70,eVar70,prop71,eVar71,prop72,eVar72,prop73,eVar73,prop75,eVar75,list2";
                    if (pauseStatus == "viewport_pause") {
                        s.linkTrackEvents = "event88";
                        s.events = "event88"
                    } else {
                        s.linkTrackEvents = "event89";
                        s.events = "event89"
                    }
                    Bootstrapper.videoCommonFunction.videoCommonData(v);
                    s.eVar23 = s.prop23 = "";
                    if (s.pageName) {
                        s.eVar26 = s.pageName;
                        s.pageName = ""
                    } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                    if (s.channel) {
                        s.eVar27 = s.channel;
                        s.channel = ""
                    } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                    if (s.prop28) {
                        s.eVar28 = s.prop28;
                        s.prop28 = ""
                    } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                    if (s.prop33) s.eVar33 =
                        "D\x3dc33";
                    if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                    if (s.prop65) {
                        s.list1 = s.prop65;
                        s.prop65 = ""
                    }
                    s.tl(this, "o", "cnnvideo-" + pauseStatus + ":" + (v.title ? v.title : v.headline).toLowerCase());
                    s.clearVars()
                }
            });
            PubSub.subscribe("cnnvideo-buffer", function(data) {
                var v = Bootstrapper.Util.getVideoMetadata(data);
                var buffering = typeof v.buffering == "undefined" ? false : v.buffering;
                var vc = new Bootstrapper.getCNNVideoCollection;
                var prevBuffering = vc.get(v.playerid, "isBuffering");
                if (buffering != prevBuffering) {
                    vc.buffer(v.playerid);
                    if (Bootstrapper.isLiveVid == true && (v.isLive == true || v.isLive == "true")) {
                        if (Bootstrapper.setinterval_id) clearInterval(Bootstrapper.setinterval_id);
                        if (prevBuffering) Bootstrapper.setinterval_id = setInterval(function() {
                            window.trackVideoProgress(v)
                        }, 6E4);
                        else;
                    }
                }
            });
            PubSub.subscribe("cnnvideo-scrub", function(data) {
                var v = Bootstrapper.Util.getVideoMetadata(data);
                var vc = new Bootstrapper.getCNNVideoCollection;
                vc.set(v.playerid, "hasScrubbed", true);
                Bootstrapper.is_dvr = true
            });
            PubSub.subscribe("cnnvideo-progress", function(data) {
                var v =
                    Bootstrapper.Util.getVideoMetadata(data);
                Bootstrapper.videoCommonFunction.videoCommonData(v);
                var vc = new Bootstrapper.getCNNVideoCollection;
                var timeSpent = vc.progress(v.playerid);
                timeSpent = Bootstrapper.capCNNTimeSpent(timeSpent, v.trt, Bootstrapper.live_interval);
                s.linkTrackVars = "events,products,eVar1,eVar3,eVar4,eVar7,eVar8,eVar14,eVar20,eVar21,eVar26,eVar27,eVar28,eVar29,eVar30,eVar31,eVar32,eVar33,eVar34,prop35,eVar35,eVar36,eVar37,eVar41,eVar42,prop44,prop46,eVar46,prop47,eVar47,eVar52,eVar53,eVar54,eVar57,prop59,eVar59,prop64,eVar64,prop65,list1,eVar66,eVar67,eVar68,eVar71,eVar72,prop73,eVar73,prop75,eVar75,list2";
                s.linkTrackEvents = "event36";
                s.events = "event36";
                s.eVar1 = s.prop1;
                s.prop1 = "";
                s.eVar3 = s.prop3;
                s.prop3 = "";
                s.eVar4 = s.prop4;
                s.prop4 = "";
                s.eVar7 = s.prop7;
                s.prop7 = "";
                if (s.prop8) {
                    s.eVar8 = s.prop8;
                    s.prop8 = ""
                } else s.eVar8 = Bootstrapper.Util.getCNNVisitNumber(28);
                s.eVar10 = s.prop10;
                s.prop10 = "";
                s.eVar11 = s.prop11;
                s.prop11 = "";
                s.eVar14 = s.prop14;
                s.prop14 = "";
                s.eVar16 = s.prop16;
                s.prop16 = "";
                s.eVar20 = s.prop20;
                s.prop20 = "";
                s.eVar23 = s.prop23 = "";
                if (s.channel) {
                    s.eVar27 = s.channel;
                    s.channel = ""
                } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                if (s.prop28) {
                    s.eVar28 = s.prop28;
                    s.prop28 = ""
                } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                if (s.pageName) {
                    s.eVar26 = s.pageName;
                    s.pageName = ""
                } else s.eVar26 = Bootstrapper.Util.getADBPPageName();
                if (s.server) s.eVar29 = s.server;
                else s.eVar29 = Bootstrapper.Util.getADBPURL("domain");
                s.eVar30 = s.prop30;
                s.prop30 = "";
                s.eVar41 = s.prop29;
                s.eVar31 = s.prop31;
                s.prop31 = "";
                if (s.prop32) s.eVar32 = s.prop32;
                else s.eVar32 = Bootstrapper.Util.getCNNTemplateType();
                s.prop32 = "";
                if (s.prop33) {
                    s.eVar33 = s.prop33;
                    s.prop33 = ""
                }
                s.eVar34 = s.prop34;
                s.prop34 = "";
                if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                s.eVar37 = s.prop37;
                s.prop37 = "";
                s.eVar52 = s.prop52;
                s.prop52 = "";
                s.eVar53 = s.prop53;
                s.prop53 = "";
                s.eVar54 = s.prop54;
                s.prop54 = "";
                s.eVar57 = s.prop57;
                s.prop57 = "";
                s.eVar64 = s.prop64;
                s.prop64 = "";
                if (s.prop65) {
                    s.list1 = s.prop65;
                    s.prop65 = ""
                }
                s.eVar66 = s.prop66;
                s.prop66 = "";
                s.eVar68 = s.prop68;
                s.prop68 = "";
                s.eVar71 = s.prop71;
                s.prop71 = "";
                s.eVar72 = s.prop72;
                s.prop72 = "";
                s.products = ";;;;" + s.events + "\x3d" + timeSpent;
                if (Bootstrapper.isAMPVideos) s.timestamp = Bootstrapper.getAMPVideoTimeStamp();
                if (timeSpent == 60 && !Bootstrapper.isLivePaused) s.tl(this, "o", "cnnvideo-progress" + ":" + (v.title ? v.title : v.headline).toLowerCase());
                s.clearVars()
            });
            PubSub.subscribe("cnnvideo-ten", function(data) {
                Bootstrapper.isAd = false;
                var v = Bootstrapper.Util.getVideoMetadata(data);
                if (Bootstrapper.isMoneyVideo(v)) return;
                var vc = new Bootstrapper.getCNNVideoCollection;
                if (!vc.get(v.playerid, "isTen") && !vc.get(v.playerid, "hasScrubbed")) {
                    vc.set(v.playerid, "isTen", true);
                    var timeSpent = vc.progress(v.playerid);
                    Bootstrapper.videoCommonFunction.videoCommonData(v);
                    s.linkTrackVars = "events,server,channel,products,eVar1,eVar3,eVar4,eVar7,eVar8,eVar10,eVar11,eVar14,eVar16,eVar20,eVar22,prop23,eVar23,eVar26,eVar27,eVar28,eVar41,eVar29,eVar30,eVar31,eVar32,eVar33,eVar34,prop35,eVar35,eVar36,eVar37,eVar42,prop44,prop46,eVar46,prop47,eVar47,eVar52,eVar53,eVar54,eVar57,prop59,eVar59,eVar60,eVar64,prop65,eVar66,eVar67,eVar68,eVar70,eVar71,eVar72,prop73,eVar73,prop75,eVar75,list1,list2";
                    s.linkTrackEvents = "event40";
                    s.events = "event40";
                    s.products = "";
                    timeSpent = Bootstrapper.capCNNTimeSpent(timeSpent,
                        v.trt, Bootstrapper.live_interval);
                    if (timeSpent > 0) {
                        s.linkTrackEvents = "event40,event36";
                        s.events = "event40,event36";
                        s.products = ";;;;" + "event36" + "\x3d" + timeSpent
                    }
                    s.eVar1 = s.prop1;
                    s.prop1 = "";
                    s.eVar3 = s.prop3;
                    s.prop3 = "";
                    s.eVar4 = s.prop4;
                    s.prop4 = "";
                    s.eVar7 = s.prop7;
                    s.prop7 = "";
                    if (s.prop8) {
                        s.eVar8 = Bootstrapper.Util.getCNNVisitNumber(28);
                        s.prop8 = ""
                    }
                    s.eVar10 = s.prop10;
                    s.prop10 = "";
                    s.eVar11 = s.prop11;
                    s.prop11 = "";
                    s.eVar14 = s.prop14;
                    s.prop14 = "";
                    s.eVar16 = s.prop16;
                    s.prop16 = "";
                    s.eVar20 = s.prop20;
                    s.prop20 = "";
                    s.eVar23 = s.prop23;
                    s.prop23 = "";
                    if (s.pageName) {
                        s.eVar26 = s.pageName;
                        s.pageName = ""
                    } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                    if (s.channel) {
                        s.eVar27 = s.channel;
                        s.channel = ""
                    } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                    if (s.prop28) {
                        s.eVar28 = s.prop28;
                        s.prop28 = ""
                    } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                    s.eVar29 = s.server;
                    s.eVar30 = s.prop30;
                    s.prop30 = "";
                    s.eVar41 = s.prop29;
                    s.eVar31 = s.prop31;
                    s.prop31 = "";
                    s.eVar32 = s.prop32;
                    s.prop32 = "";
                    if (s.prop33) {
                        s.eVar33 = s.prop33;
                        s.prop33 = ""
                    }
                    s.eVar34 = s.prop34;
                    s.prop34 = "";
                    if (!s.prop35) s.prop35 =
                        Bootstrapper.Util.getCNNCodeVersion();
                    s.eVar37 = s.prop37;
                    s.prop37 = "";
                    s.eVar47 = "D\x3dc47";
                    s.eVar52 = s.prop52;
                    s.prop52 = "";
                    s.eVar53 = s.prop53;
                    s.prop53 = "";
                    s.eVar54 = s.prop54;
                    s.prop54 = "";
                    s.eVar57 = Bootstrapper.Util.getCNNMVPD();
                    s.prop57 = "";
                    s.eVar60 = s.prop60;
                    s.prop60 = "";
                    s.eVar64 = Bootstrapper.Util.getCNNUIEngagement();
                    s.prop64 = "";
                    if (s.prop65) {
                        s.list1 = s.prop65;
                        s.prop65 = ""
                    }
                    s.eVar66 = s.prop66;
                    s.prop66 = "";
                    s.eVar68 = s.prop68;
                    s.prop68 = "";
                    s.eVar70 = s.prop70;
                    s.prop70 = "";
                    s.eVar71 = s.prop71;
                    s.prop71 = "";
                    s.eVar72 = s.prop72;
                    s.prop72 =
                        "";
                    if (Bootstrapper.isAMPVideos) s.timestamp = Bootstrapper.getAMPVideoTimeStamp();
                    s.tl(this, "o", "cnnvideo-ten" + ":" + (v.title ? v.title : v.headline).toLowerCase());
                    s.clearVars()
                }
            });
            PubSub.subscribe("cnnvideo-twentyfive", function(data) {
                Bootstrapper.isAd = false;
                var v = Bootstrapper.Util.getVideoMetadata(data);
                if (Bootstrapper.isMoneyVideo(v)) return;
                var vc = new Bootstrapper.getCNNVideoCollection;
                if (!vc.get(v.playerid, "isTwentyFive") && !vc.get(v.playerid, "hasScrubbed")) {
                    vc.set(v.playerid, "isTwentyFive", true);
                    var timeSpent =
                        vc.progress(v.playerid);
                    Bootstrapper.videoCommonFunction.videoCommonData(v);
                    s.linkTrackVars = "events,server,channel,products,eVar1,eVar3,eVar4,eVar7,eVar8,eVar10,eVar11,eVar14,eVar16,eVar20,eVar22,prop23,eVar23,eVar26,eVar27,eVar28,eVar41,eVar29,eVar30,eVar31,eVar32,eVar33,eVar34,prop35,eVar35,eVar36,eVar37,eVar42,prop44,prop46,eVar46,prop47,eVar47,eVar52,eVar53,eVar54,eVar57,prop59,eVar59,eVar60,eVar64,prop65,eVar66,eVar67,eVar68,eVar70,eVar71,eVar72,prop73,eVar73,prop75,eVar75,list1,list2";
                    s.linkTrackEvents =
                        "event41";
                    s.events = "event41";
                    s.products = "";
                    timeSpent = Bootstrapper.capCNNTimeSpent(timeSpent, v.trt, Bootstrapper.live_interval);
                    if (timeSpent > 0) {
                        s.linkTrackEvents = "event41,event36";
                        s.events = "event41,event36";
                        s.products = ";;;;" + "event36" + "\x3d" + timeSpent
                    }
                    s.eVar1 = s.prop1;
                    s.prop1 = "";
                    s.eVar3 = s.prop3;
                    s.prop3 = "";
                    s.eVar4 = s.prop4;
                    s.prop4 = "";
                    s.eVar7 = s.prop7;
                    s.prop7 = "";
                    s.eVar8 = Bootstrapper.Util.getCNNVisitNumber(28);
                    s.eVar10 = s.prop10;
                    s.prop10 = "";
                    s.eVar11 = s.prop11;
                    s.prop11 = "";
                    s.eVar14 = s.prop14;
                    s.prop14 = "";
                    s.eVar16 =
                        s.prop16;
                    s.prop16 = "";
                    s.eVar20 = s.prop20;
                    s.prop20 = "";
                    s.eVar23 = s.prop23;
                    s.prop23 = "";
                    if (s.pageName) {
                        s.eVar26 = s.pageName;
                        s.pageName = ""
                    } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                    if (s.channel) {
                        s.eVar27 = s.channel;
                        s.channel = ""
                    } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                    if (s.prop28) {
                        s.eVar28 = s.prop28;
                        s.prop28 = ""
                    } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                    s.eVar29 = s.server;
                    s.eVar30 = s.prop30;
                    s.prop30 = "";
                    s.eVar41 = s.prop29;
                    s.eVar31 = s.prop31;
                    s.prop31 = "";
                    s.eVar32 = s.prop32;
                    s.prop32 = "";
                    if (s.prop33) {
                        s.eVar33 =
                            s.prop33;
                        s.prop33 = ""
                    }
                    s.eVar34 = s.prop34;
                    s.prop34 = "";
                    if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                    s.eVar37 = s.prop37;
                    s.prop37 = "";
                    s.eVar52 = s.prop52;
                    s.prop52 = "";
                    s.eVar53 = s.prop53;
                    s.prop53 = "";
                    s.eVar54 = s.prop54;
                    s.prop54 = "";
                    s.eVar57 = Bootstrapper.Util.getCNNMVPD();
                    s.prop57 = "";
                    s.eVar60 = s.prop60;
                    s.prop60 = "";
                    s.eVar64 = Bootstrapper.Util.getCNNUIEngagement();
                    s.prop64 = "";
                    if (s.prop65) {
                        s.list1 = s.prop65;
                        s.prop65 = ""
                    }
                    s.eVar66 = s.prop66;
                    s.prop66 = "";
                    s.eVar68 = s.prop68;
                    s.prop68 = "";
                    s.eVar70 = s.prop70;
                    s.prop70 =
                        "";
                    s.eVar71 = s.prop71;
                    s.prop71 = "";
                    s.eVar72 = s.prop72;
                    s.prop72 = "";
                    if (Bootstrapper.isAMPVideos) s.timestamp = Bootstrapper.getAMPVideoTimeStamp();
                    s.tl(this, "o", "cnnvideo-twentyfive" + ":" + (v.title ? v.title : v.headline).toLowerCase());
                    s.clearVars()
                }
            });
            PubSub.subscribe("cnnvideo-fifty", function(data) {
                Bootstrapper.isAd = false;
                var v = Bootstrapper.Util.getVideoMetadata(data);
                var vc = new Bootstrapper.getCNNVideoCollection;
                if (!vc.get(v.playerid, "isHalf") && !vc.get(v.playerid, "hasScrubbed")) {
                    vc.set(v.playerid, "isHalf",
                        true);
                    var timeSpent = vc.progress(v.playerid);
                    Bootstrapper.videoCommonFunction.videoCommonData(v);
                    s.linkTrackVars = "events,server,channel,products,eVar1,eVar3,eVar4,eVar7,eVar8,eVar10,eVar11,eVar14,eVar16,eVar20,eVar22,prop23,eVar23,eVar26,eVar27,eVar28,eVar41,eVar29,eVar30,eVar31,eVar32,eVar33,eVar34,prop35,eVar35,eVar36,eVar37,eVar42,prop44,prop46,eVar46,prop47,eVar47,eVar52,eVar53,eVar54,eVar57,prop59,eVar59,eVar60,eVar64,prop65,eVar66,eVar67,eVar68,eVar70,eVar71,eVar72,prop73,eVar73,prop75,eVar75,list1,list2";
                    s.linkTrackEvents = "event2";
                    s.events = "event2";
                    s.products = "";
                    timeSpent = Bootstrapper.capCNNTimeSpent(timeSpent, v.trt, Bootstrapper.live_interval);
                    if (timeSpent > 0) {
                        s.linkTrackEvents = "event2,event36";
                        s.events = "event2,event36";
                        s.products = ";;;;" + "event36" + "\x3d" + timeSpent
                    }
                    s.eVar1 = s.prop1;
                    s.prop1 = "";
                    s.eVar3 = s.prop3;
                    s.prop3 = "";
                    s.eVar4 = s.prop4;
                    s.prop4 = "";
                    s.eVar7 = s.prop7;
                    s.prop7 = "";
                    if (s.prop8) {
                        s.eVar8 = Bootstrapper.Util.getCNNVisitNumber(28);
                        s.prop8 = ""
                    }
                    s.eVar10 = s.prop10;
                    s.prop10 = "";
                    s.eVar11 = s.prop11;
                    s.prop11 = "";
                    s.eVar16 = s.prop16;
                    s.prop16 = "";
                    s.eVar20 = s.prop20;
                    s.prop20 = "";
                    s.eVar23 = s.prop23;
                    s.prop23 = "";
                    if (s.pageName) {
                        s.eVar26 = s.pageName;
                        s.pageName = ""
                    } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                    if (s.channel) {
                        s.eVar27 = s.channel;
                        s.channel = ""
                    } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                    if (s.prop28) {
                        s.eVar28 = s.prop28;
                        s.prop28 = ""
                    } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                    s.eVar29 = s.server;
                    s.eVar30 = s.prop30;
                    s.prop30 = "";
                    s.eVar41 = s.prop29;
                    s.eVar31 = s.prop31;
                    s.prop31 = "";
                    s.eVar32 = s.prop32;
                    s.prop32 = "";
                    if (s.prop33) {
                        s.eVar33 = s.prop33;
                        s.prop33 = ""
                    }
                    s.eVar34 = s.prop34;
                    s.prop34 = "";
                    if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                    s.eVar37 = s.prop37;
                    s.prop37 = "";
                    s.eVar47 = "D\x3dc47";
                    s.eVar52 = s.prop52;
                    s.prop52 = "";
                    s.eVar53 = s.prop53;
                    s.prop53 = "";
                    s.eVar54 = s.prop54;
                    s.prop54 = "";
                    s.eVar57 = Bootstrapper.Util.getCNNMVPD();
                    s.prop57 = "";
                    s.eVar60 = s.prop60;
                    s.prop60 = "";
                    s.eVar64 = Bootstrapper.Util.getCNNUIEngagement();
                    s.prop64 = "";
                    if (s.prop65) {
                        s.list1 = s.prop65;
                        s.prop65 = ""
                    }
                    s.eVar66 = s.prop66;
                    s.prop66 = "";
                    s.eVar68 = s.prop68;
                    s.prop68 = "";
                    s.eVar70 = s.prop70;
                    s.prop70 = "";
                    s.eVar71 = s.prop71;
                    s.prop71 = "";
                    s.eVar72 = s.prop72;
                    s.prop72 = "";
                    if (Bootstrapper.isAMPVideos) s.timestamp = Bootstrapper.getAMPVideoTimeStamp();
                    if (Bootstrapper.isMoneyVideo(v)) Bootstrapper.trackMoneyVideoEvent("fifty", v);
                    else {
                        s.eVar14 = s.prop14;
                        s.prop14 = "";
                        s.tl(this, "o", "cnnvideo-fifty" + ":" + (v.title ? v.title : v.headline).toLowerCase())
                    }
                    s.clearVars()
                }
            });
            PubSub.subscribe("cnnvideo-seventyfive", function(data) {
                Bootstrapper.isAd = false;
                var v = Bootstrapper.Util.getVideoMetadata(data);
                if (Bootstrapper.isMoneyVideo(v)) return;
                var vc = new Bootstrapper.getCNNVideoCollection;
                if (!vc.get(v.playerid, "isSeventyFive") && !vc.get(v.playerid, "hasScrubbed")) {
                    vc.set(v.playerid, "isSeventyFive", true);
                    var timeSpent = vc.progress(v.playerid);
                    Bootstrapper.videoCommonFunction.videoCommonData(v);
                    s.linkTrackVars = "events,server,channel,products,eVar1,eVar3,eVar4,eVar7,eVar8,eVar10,eVar11,eVar14,eVar16,eVar20,eVar22,prop23,eVar23,eVar26,eVar27,eVar28,eVar41,eVar29,eVar30,eVar31,eVar32,eVar33,eVar34,prop35,eVar35,eVar36,eVar37,eVar42,prop44,prop46,eVar46,prop47,eVar47,eVar52,eVar53,eVar54,eVar57,prop59,eVar59,eVar60,eVar64,eVar66,prop65,eVar67,eVar68,eVar70,eVar71,eVar72,prop73,eVar73,prop75,eVar75,list1,list2";
                    s.linkTrackEvents = "event42";
                    s.events = "event42";
                    s.products = "";
                    timeSpent = Bootstrapper.capCNNTimeSpent(timeSpent, v.trt, Bootstrapper.live_interval);
                    if (timeSpent > 0) {
                        s.linkTrackEvents = "event42,event36";
                        s.events = "event42,event36";
                        s.products = ";;;;" + "event36" + "\x3d" + timeSpent
                    }
                    s.eVar1 = s.prop1;
                    s.prop1 = "";
                    s.eVar3 = s.prop3;
                    s.prop3 = "";
                    s.eVar4 = s.prop4;
                    s.prop4 = "";
                    s.eVar7 = s.prop7;
                    s.prop7 = "";
                    if (s.prop8) {
                        s.eVar8 = Bootstrapper.Util.getCNNVisitNumber(28);
                        s.prop8 = ""
                    }
                    s.eVar10 = s.prop10;
                    s.prop10 = "";
                    s.eVar11 = s.prop11;
                    s.prop11 =
                        "";
                    s.eVar14 = s.prop14;
                    s.prop14 = "";
                    s.eVar16 = s.prop16;
                    s.prop16 = "";
                    s.eVar20 = s.prop20;
                    s.prop20 = "";
                    s.eVar23 = s.prop23;
                    s.prop23 = "";
                    if (s.pageName) {
                        s.eVar26 = s.pageName;
                        s.pageName = ""
                    } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                    if (s.channel) {
                        s.eVar27 = s.channel;
                        s.channel = ""
                    } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                    if (s.prop28) {
                        s.eVar28 = s.prop28;
                        s.prop28 = ""
                    } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                    s.eVar29 = s.server;
                    s.eVar30 = s.prop30;
                    s.prop30 = "";
                    s.eVar41 = s.prop29;
                    s.eVar31 = s.prop31;
                    s.prop31 =
                        "";
                    s.eVar32 = s.prop32;
                    s.prop32 = "";
                    if (s.prop33) {
                        s.eVar33 = s.prop33;
                        s.prop33 = ""
                    }
                    s.eVar34 = s.prop34;
                    s.prop34 = "";
                    if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                    s.eVar37 = s.prop37;
                    s.prop37 = "";
                    s.eVar47 = "D\x3dc47";
                    s.eVar52 = s.prop52;
                    s.prop52 = "";
                    s.eVar53 = s.prop53;
                    s.prop53 = "";
                    s.eVar54 = s.prop54;
                    s.prop54 = "";
                    s.eVar57 = Bootstrapper.Util.getCNNMVPD();
                    s.prop57 = "";
                    s.eVar60 = s.prop60;
                    s.prop60 = "";
                    s.eVar64 = Bootstrapper.Util.getCNNUIEngagement();
                    s.prop64 = "";
                    if (s.prop65) {
                        s.list1 = s.prop65;
                        s.prop65 = ""
                    }
                    s.eVar66 = s.prop66;
                    s.prop66 = "";
                    s.eVar68 = s.prop68;
                    s.prop68 = "";
                    s.eVar70 = s.prop70;
                    s.prop70 = "";
                    s.eVar71 = s.prop71;
                    s.prop71 = "";
                    s.eVar72 = s.prop72;
                    s.prop72 = "";
                    if (Bootstrapper.isAMPVideos) s.timestamp = Bootstrapper.getAMPVideoTimeStamp();
                    s.tl(this, "o", "cnnvideo-seventyfive" + ":" + (v.title ? v.title : v.headline).toLowerCase());
                    s.clearVars()
                }
            });
            PubSub.subscribe("cnnvideo-complete", function(data) {
                Bootstrapper.isAd = false;
                var v = Bootstrapper.Util.getVideoMetadata(data);
                var vc = new Bootstrapper.getCNNVideoCollection;
                var timeSpent = vc.complete(v.playerid);
                Bootstrapper.videoCommonFunction.videoCommonData(v);
                s.linkTrackVars = "events,server,channel,products,eVar1,eVar3,eVar4,eVar7,eVar8,eVar10,eVar11,eVar14,eVar16,eVar20,eVar22,prop23,eVar23,eVar26,eVar27,eVar28,eVar41,eVar29,eVar30,eVar31,eVar32,eVar33,eVar34,prop35,eVar35,eVar36,eVar37,eVar42,prop44,prop46,eVar46,prop47,eVar47,eVar52,eVar53,eVar54,eVar57,prop59,eVar59,eVar60,eVar64,prop65,eVar66,eVar67,eVar68,eVar70,eVar71,eVar72,prop73,eVar73,prop75,eVar75,list1,list2";
                s.linkTrackEvents = "event33";
                s.events =
                    "event33";
                timeSpent = Bootstrapper.capCNNTimeSpent(timeSpent, v.trt, Bootstrapper.live_interval);
                s.products = "";
                if (timeSpent > 0) {
                    s.linkTrackEvents = "event33,event36";
                    s.events = "event33,event36";
                    s.products = ";;;;" + "event36" + "\x3d" + timeSpent
                }
                s.eVar1 = s.prop1;
                s.prop1 = "";
                s.eVar3 = s.prop3;
                s.prop3 = "";
                s.eVar4 = s.prop4;
                s.prop4 = "";
                s.eVar7 = s.prop7;
                s.prop7 = "";
                s.eVar8 = Bootstrapper.Util.getCNNVisitNumber(28);
                s.eVar10 = s.prop10;
                s.prop10 = "";
                s.eVar11 = s.prop11;
                s.prop11 = "";
                s.eVar16 = s.prop16;
                s.prop16 = "";
                s.eVar20 = s.prop20;
                s.prop20 =
                    "";
                s.eVar23 = s.prop23;
                s.prop23 = "";
                if (s.pageName) {
                    s.eVar26 = s.pageName;
                    s.pageName = ""
                } else s.eVar26 = Bootstrapper.Util.getCNNPageName();
                if (s.channel) {
                    s.eVar27 = s.channel;
                    s.channel = ""
                } else s.eVar27 = Bootstrapper.Util.getCNNSection(0);
                if (s.prop28) {
                    s.eVar28 = s.prop28;
                    s.prop28 = ""
                } else s.eVar28 = Bootstrapper.Util.getCNNSection(1);
                s.eVar29 = s.server;
                s.eVar30 = s.prop30;
                s.prop30 = "";
                s.eVar41 = s.prop29;
                s.eVar31 = s.prop31;
                s.prop31 = "";
                if (s.prop32) {
                    s.eVar32 = s.prop32;
                    s.prop32 = ""
                }
                if (s.prop33) {
                    s.eVar33 = s.prop33;
                    s.prop33 = ""
                }
                s.eVar34 =
                    s.prop34;
                s.prop34 = "";
                if (!s.prop35) s.prop35 = Bootstrapper.Util.getCNNCodeVersion();
                s.eVar37 = s.prop37;
                s.prop37 = "";
                s.eVar47 = "D\x3dc47";
                s.eVar52 = s.prop52;
                s.prop52 = "";
                s.eVar53 = s.prop53;
                s.prop53 = "";
                s.eVar54 = s.prop54;
                s.prop54 = "";
                s.eVar57 = Bootstrapper.Util.getCNNMVPD();
                s.prop57 = "";
                s.eVar60 = s.prop60;
                s.prop60 = "";
                s.eVar64 = Bootstrapper.Util.getCNNUIEngagement();
                s.prop64 = "";
                if (s.prop65) {
                    s.list1 = s.prop65;
                    s.prop65 = ""
                }
                s.eVar66 = s.prop66;
                s.prop66 = "";
                s.eVar68 = s.prop68;
                s.prop68 = "";
                s.eVar70 = s.prop70;
                s.eVar70 = "";
                s.eVar71 =
                    s.prop71;
                s.prop71 = "";
                s.eVar72 = s.prop72;
                s.prop72 = "";
                if (typeof v.isLive !== "undefined" && (v.isLive == true || v.isLive == "true"))
                    if (Bootstrapper.setinterval_id) clearInterval(Bootstrapper.setinterval_id);
                if (Bootstrapper.isAMPVideos) s.timestamp = Bootstrapper.getAMPVideoTimeStamp();
                if (Bootstrapper.isMoneyVideo(v)) Bootstrapper.trackMoneyVideoEvent("complete", v);
                else {
                    s.eVar14 = s.prop14;
                    s.prop14 = "";
                    s.tl(this, "o", "cnnvideo-complete" + ":" + (v.title ? v.title : v.headline).toLowerCase())
                }
                vc.set(v.playerid, "vidStarted", false);
                vc.set(v.playerid, "hasScrubbed", false);
                vc.set(v.playerid, "isPaused", false);
                vc.set(v.playerid, "isBuffering", false);
                vc.set(v.playerid, "isHalf", false);
                vc.set(v.playerid, "isTen", false);
                vc.set(v.playerid, "isTwentyFive", false);
                vc.set(v.playerid, "isSeventyFive", false);
                s.clearVars()
            });
            Bootstrapper.videoCommonFunction = function() {
                return {
                    videoCommonData: function(data) {
                        Bootstrapper.standardVideoMetadata.isCNNGo = false;
                        if (typeof data.free_preview !== "undefined" && data.free_preview !== "") Bootstrapper.standardVideoMetadata.isCNNGo =
                            true;
                        if (data.video_player && data.video_player.indexOf("theo") !== -1)
                            if (data.isVr === true) {
                                s.prop52 = "theo360";
                                s.eVar52 = "D\x3dc52";
                                s.prop33 = "adbp:video:360";
                                s.eVar33 = "D\x3dc33"
                            } else {
                                s.prop52 = data.video_player;
                                s.eVar52 = "D\x3dc52";
                                s.prop33 = "adbp:video start";
                                s.eVar33 = "D\x3dc33";
                                if (typeof window.CNN.omniture !== "undefined") try {
                                    s.prop14 = CNN.omniture.branding_social || "";
                                    s.eVar14 = "D\x3dc14"
                                } catch (e) {}
                            }
                        if (!s.prop8) s.prop8 = Bootstrapper.Util.getCNNVisitNumber(28);
                        s.prop32 = Bootstrapper.Util.getCNNTemplateType("long");
                        if (s.prop32 && s.prop32 != "") s.eVar32 = "D\x3dc32";
                        s.prop37 = Bootstrapper.Util.getCNNPlatform();
                        if (s.prop37 && s.prop37 != "") s.eVar37 = "D\x3dc37";
                        s.list1 = Bootstrapper.Util.getCNNTopic();
                        s.prop72 = data.free_preview || "";
                        s.eVar72 = "D\x3dc72";
                        s.prop59 = Bootstrapper.Util.getCNNAdobeID();
                        s.eVar59 = "D\x3dc59";
                        if (typeof data.video_focus !== "undefined") {
                            s.prop66 = data.video_focus;
                            s.eVar66 = "D\x3dc66"
                        }
                        try {
                            Bootstrapper.standardVideoMetadata.player = CNN.omniture.video_player_type
                        } catch (e) {
                            Bootstrapper.standardVideoMetadata.player =
                                ""
                        }
                        if (typeof data.isLive !== "undefined" && (data.isLive == "true" || data.isLive == true)) {
                            Bootstrapper.standardVideoMetadata.player = "live player";
                            s.prop53 = data.live_stream_name ? data.live_stream_name : "cnn news";
                            s.eVar53 = "D\x3dc53"
                        }
                        if (!Bootstrapper.standardVideoMetadata.player) Bootstrapper.standardVideoMetadata.player = "vod player";
                        if (data.player_type && data.player_type != "") {
                            Bootstrapper.standardVideoMetadata.player = data.player_type;
                            if (data.player_type == "live") Bootstrapper.standardVideoMetadata.player = "live player";
                            if (data.player_type == "van") {
                                s.prop31 = "van";
                                s.eVar31 = "D\x3dc31";
                                s.prop32 = "adbp:video";
                                s.eVar32 = "D\x3dc32";
                                s.server = s.eVar29 = data.consumer || "";
                                s.prop71 = data.source.toLowerCase() || "";
                                s.eVar71 = "D\x3dc71"
                            } else if (data.player_type == "tve" || data.player_type == "live" || data.player_type == "live player") {
                                s.prop3 = data.category || "";
                                s.eVar3 = "D\x3dc3";
                                s.prop31 = "van";
                                s.eVar31 = "D\x3dc31";
                                s.prop53 = data.live_stream_name ? data.live_stream_name : "cnn news";
                                s.eVar53 = "D\x3dc53";
                                if (data.id == "cvplive/cnngo") {
                                    s.prop57 = Bootstrapper.Util.getCNNMVPD() ||
                                        "";
                                    s.eVar57 = "D\x3dc57"
                                }
                                s.prop59 = data.adobe_hash_id ? data.adobe_hash_id : Bootstrapper.standardVideoMetadata.adobe_hash_id;
                                s.eVar59 = "D\x3dc59"
                            }
                        }
                        var player = "";
                        try {
                            if (typeof window.CNN.omniture.video_player_type !== "undefined" && window.CNN.omniture.video_player_type != "") player = window.CNN.omniture.video_player_type;
                            else if (typeof data.isLive !== "undefined" && (data.isLive == "true" || data.isLive == true)) player = "live player";
                            else if (typeof data.player_type !== "undefined" && data.player_type != "") {
                                player = data.player_type;
                                if (player == "live") player = "live player"
                            }
                        } catch (e) {
                            player = ""
                        }
                        if (!player) player = "vod player";
                        s.prop1 = player;
                        s.eVar1 = "D\x3dc1";
                        try {
                            if ((window.location.href.indexOf("fave.api.cnn.io") > -1 || window.location.href.indexOf("fave-api.cnn.com") > -1) && (data.video_player && data.video_player.indexOf("theo") !== -1)) {
                                s.prop32 = "content:video:nocollection";
                                s.eVar32 = "D\x3dc32"
                            }
                        } catch (e) {}
                        try {
                            s.prop2 = window.CNN.omniture.cap_author || "";
                            s.eVar2 = "D\x3dc2"
                        } catch (e) {}
                        try {
                            s.prop3 = data.id.split("/")[0];
                            s.eVar3 = "D\x3dc3"
                        } catch (e) {}
                        try {
                            s.prop7 =
                                data.trt ? data.trt : "";
                            s.eVar7 = "D\x3dc7"
                        } catch (e) {}
                        var d = data.dateCreated && data.dateCreated.text ? data.dateCreated.text : "";
                        var p = d != "" ? d.split("/") : "";
                        if (p != "" && p[0].length != 4) d = "20" + p[2] + "/" + p[0] + "/" + p[1];
                        var days = Bootstrapper.Util.getCNNDaysSinceLastPublish(d);
                        var md = data.lastModified && data.lastModified.text ? data.lastModified.text : "";
                        var updated_date = d + "|" + md;
                        s.prop10 = days + "";
                        s.eVar10 = "D\x3dc10";
                        s.prop16 = updated_date;
                        s.eVar16 = "D\x3dc16";
                        try {
                            if (typeof data.subcategory !== "undefined" && data.subcategory ==
                                "default") {
                                if (typeof window.CNN.omniture.branding_content_page != "undefined") {
                                    s.prop11 = "v:" + window.CNN.omniture.branding_content_page;
                                    s.eVar11 = "D\x3dc11"
                                }
                            } else if (typeof data.sponsor !== "undefined" && data.sponsor) {
                                s.prop11 = "v:" + data.sponsor;
                                s.eVar11 = "D\x3dc11"
                            } else {
                                s.prop11 = "v:" + data.subcategory;
                                s.eVar11 = "D\x3dc11"
                            }
                        } catch (e) {}
                        var hostName = window.location.hostname;
                        if (hostName.indexOf("fave.api.cnn.io") != -1 || hostName.indexOf("fave-api.cnn.com") != -1) {
                            var pathName = window.location.pathname;
                            if (pathName.indexOf("/v1/amp") !=
                                -1) {
                                s.prop14 = "google amp";
                                s.eVar1 = "D\x3dc14"
                            }
                            if (pathName.indexOf("/v1/fav") != -1) {
                                s.prop14 = "embed";
                                s.eVar1 = "D\x3dc14"
                            }
                            if (pathName.indexOf("/v1/synacor") != -1) {
                                s.prop14 = "synacor player";
                                s.eVar1 = "D\x3dc14";
                                s.prop1 = "synacor player";
                                s.eVar1 = "D\x3dc1"
                            }
                        }
                        try {
                            if (typeof window.CNN.omniture !== "undefined" && window.CNN.omniture.fbia === true) {
                                s.prop14 = window.CNN.omniture.branding_social;
                                s.eVar1 = "D\x3dc14";
                                var page_name = CNN.omniture.vpage_name;
                                s.pageName = Bootstrapper.Util.getCNNPageName(page_name);
                                s.eVar26 = "D\x3dpageName"
                            }
                        } catch (e) {}
                        Bootstrapper.isGoogleAmp =
                            s.prop14;
                        try {
                            if (!data.title && typeof data.headline !== "undefined") data.title = data.headline.toLowerCase();
                            if (Bootstrapper.standardVideoMetadata.player == "van" && (typeof data.title != "undefined" || data.title != "" || data.title == "")) {
                                s.prop29 = "/video/" + data.title;
                                s.eVar41 = "D\x3dc29"
                            } else if (Bootstrapper.standardVideoMetadata.player == "vod player" && (typeof data.category != "undefined" || data.category != "") && data.category == "vr") {
                                s.prop29 = data.title;
                                s.eVar41 = "D\x3dc29"
                            } else {
                                s.prop29 = "/video/" + data.id;
                                s.eVar41 = "D\x3dc29"
                            }
                        } catch (e) {}
                        s.prop30 =
                            Bootstrapper.Util.getSiteSpecificSettings(1);
                        s.eVar30 = "D\x3dc30";
                        try {
                            s.prop31 = window.CNN.omniture.cap_show_name;
                            s.eVar31 = "D\x3dc31"
                        } catch (e) {}
                        s.prop34 = "does not require authentication";
                        s.eVar34 = "D\x3dc34";
                        try {
                            if (data.auth_state) {
                                s.prop34 = data.auth_state;
                                s.eVar34 = "D\x3dc34"
                            } else if (typeof v.mvpd !== "undefined" && (v.mvpd == "temppass_cnn10min" || v.mvpd == "TempPass_CNN10min")) {
                                s.prop34 = "requires authentication";
                                s.eVar34 = "D\x3dc34"
                            } else if (typeof v.mvpd !== "undefined" && typeof v.mvpd == "string") {
                                s.prop34 = "requires authentication";
                                s.eVar34 = "D\x3dc34"
                            }
                        } catch (e) {}
                        if (!s.eVar36) s.eVar36 = Bootstrapper.Util.getCNNKruxID();
                        if (Bootstrapper.standardVideoMetadata.player == "vod player" && (typeof data.category != "undefined" || data.category != "") && data.category == "vr") s.eVar42 = data.id;
                        else s.eVar42 = "/video/" + data.id;
                        if (!s.prop44) s.prop44 = Bootstrapper.Util.getCNNSourceID();
                        var vc_type1 = "vod",
                            vc_type2 = "non tve",
                            vc_type3 = "clip",
                            vc_type4 = "clip";
                        if (Bootstrapper.standardVideoMetadata.player.indexOf("live") != -1 && s.prop34 == "requires authentication") {
                            vc_type1 =
                                "live";
                            vc_type2 = "tve";
                            vc_type3 = "live";
                            vc_type4 = "live"
                        }
                        if (Bootstrapper.standardVideoMetadata.player.indexOf("live") != -1 && s.prop34 == "does not require authentication") {
                            vc_type1 = "live";
                            vc_type2 = "non tve";
                            vc_type3 = "live";
                            vc_type4 = "live"
                        }
                        if (Bootstrapper.standardVideoMetadata.player.indexOf("tve") != -1) {
                            vc_type1 = "live";
                            vc_type2 = "tve";
                            vc_type3 = "live";
                            vc_type4 = "live"
                        }
                        var vc_type5 = Bootstrapper.isAd ? "ad" : "content";
                        s.prop54 = "video:" + vc_type1 + ":" + vc_type2 + ":" + vc_type3 + ":" + vc_type4 + ":" + vc_type5;
                        s.eVar54 = "D\x3dc54";
                        try {
                            if (data.dateAired) {
                                var days2 = Bootstrapper.Util.gCNNDaysSinceLastPublish(data.dateAired);
                                s.prop58 = days2 + "";
                                s.eVar58 = "D\x3dc58"
                            }
                        } catch (e) {}
                        try {
                            if (window.CNN && window.CNN.omniture && window.CNN.omniture.cap_content_type == "article") {
                                s.prop70 = "noautostart:editorial";
                                s.eVar70 = "D\x3dc70"
                            } else if (data.isLive && (data.isLive == true || data.isLive == "true")) {
                                s.prop70 = "noautostart:live";
                                s.eVar70 = "D\x3dc70"
                            } else {
                                s.prop70 = "noautostart:vod";
                                s.eVar70 = "D\x3dc70"
                            }
                        } catch (e) {}
                        try {
                            if (window.location.pathname.match(/video\/playlists\/./)) {
                                var collection =
                                    /video\/playlists\/(.+)/.exec(window.location.pathname);
                                s.prop60 = collection[1].replace(/\//g, "");
                                s.eVar60 = "D\x3dc60";
                                s.prop70 = "noautostart:collection";
                                s.eVar70 = "D\x3dc70"
                            }
                            if (data.playerid != "player-one-tap-video") {
                                if (window.CNN.omniture.video_collection) {
                                    s.prop60 = window.CNN.omniture.video_collection;
                                    s.eVar60 = "D\x3dc60";
                                    s.prop70 = "autostart:collection";
                                    s.eVar70 = "D\x3dc70"
                                }
                                if (window.video_collection) {
                                    s.prop70 = "autostart:collection:sunrise";
                                    s.eVar70 = "D\x3dc70"
                                }
                            }
                            if (data.video_collection) {
                                s.prop60 = data.video_collection;
                                s.eVar60 = "D\x3dc60"
                            }
                            if (s.prop60 == "" || typeof s.prop60 == "undefined")
                                if (window.CNN.contentModel.analytics.pageTop.collectionHeadline) {
                                    s.prop60 = window.CNN.contentModel.analytics.pageTop.collectionHeadline;
                                    s.eVar60 = "D\x3dc60";
                                    s.prop70 = "autostart:collection";
                                    s.eVar70 = "D\x3dc70"
                                }
                            if (s.prop60 !== "") s.prop60 = s.prop60.toLowerCase()
                        } catch (e) {}
                        try {
                            if (data.iscmsIIimport) {
                                var airSynd = data.iscmsIIimport == "true" ? "secondary" : "primary";
                                s.prop61 = airSynd;
                                s.eVar61 = "D\x3dc61"
                            }
                            if (data.source) {
                                s.prop71 = data.source.toLowerCase();
                                s.eVar71 = "D\x3dc71"
                            }
                        } catch (e) {}
                        try {
                            if (data.ad_duration) {
                                Bootstrapper.adRange = Math.round(data.ad_duration).toString();
                                s.prop68 = Bootstrapper.adRange;
                                s.eVar68 = "D\x3dc68"
                            } else {
                                s.prop68 = "no ad present";
                                s.eVar68 = "D\x3dc68"
                            }
                        } catch (e) {}
                        try {
                            if (typeof data.id !== "undefined" && data.id.indexOf("cvplive/cnngo") != -1) s.prop64 = "ngtv"
                        } catch (e) {}
                        if (data.content_type2) {
                            s.prop1 = "ngtv";
                            s.eVar1 = "D\x3dc1";
                            s.prop2 = data.author;
                            s.eVar2 = "D\x3dc2";
                            if (data.content_type2 == "live" || data.content_type2 == "dvr") {
                                s.prop7 = s.eVar7 = "";
                                var livename =
                                    "cnn news";
                                if (data.live_stream_name) livename = data.live_stream_name;
                                s.prop53 = livename;
                                s.eVar53 = "D\x3dc53"
                            }
                            try {
                                if (data.dateCreated) {
                                    var days1 = Bootstrapper.Util.gCNNDaysSinceLastPublish(data.dateCreated);
                                    s.prop10 = days1 + "";
                                    s.eVar10 = "D\x3dc10";
                                    s.prop16 = data.dateCreated;
                                    s.eVar16 = "D\x3dc16"
                                }
                            } catch (e) {}
                            s.prop11 = s.eVar11 = "";
                            s.prop14 = s.eVar14 = "";
                            data.show_name = data.show_name || "";
                            data.episode_title = data.episode_title || "";
                            data.segment_name = data.segment_name || "";
                            if (data.content_type1 == "tve") {
                                data.title = data.show_name +
                                    ":" + data.episode_title + ":" + data.segment_name;
                                if (data.live_stream_name && data.live_stream_name == "hln news") data.title = "hln news";
                                s.prop29 = data.title;
                                s.prop32 = "adbp:video";
                                s.eVar33 = "D\x3dc33";
                                s.eVar33 = "D\x3dpageName"
                            }
                            if (!s.pageName) s.pageName = Bootstrapper.Util.getCNNPageName();
                            if (!s.channel) s.channel = Bootstrapper.Util.getCNNSection(0);
                            if (!s.prop28) s.prop28 = Bootstrapper.Util.getCNNSection(1);
                            s.prop31 = data.show_name;
                            s.eVar31 = "D\x3dc31";
                            s.prop33 = "adbp:video start";
                            s.eVar33 = "D\x3dc33";
                            s.eVar42 = data.id;
                            if (typeof data.isBreakingNews !=
                                "undefined" && data.isBreakingNews == true) s.eVar43 = "ngtv:breaking_news";
                            if (data.segment_type) s.eVar43 = data.segment_type;
                            data.content_type1 = data.content_type1 || "";
                            data.content_type2 = data.content_type2 || "";
                            data.content_type3 = data.content_type3 || "";
                            data.content_type4 = data.content_type4 || "";
                            data.content_type5 = Bootstrapper.isAd ? "ad" : "content";
                            s.prop54 = "video:" + v.content_type2 + ":" + v.content_type1 + ":" + v.content_type3 + ":" + v.content_type4 + ":" + v.content_type5;
                            s.prop57 = Bootstrapper.Util.getCNNMVPD();
                            s.eVar57 = "D\x3dc57";
                            if (data.content_type3 && data.content_type3 != "episode") s.prop58 = s.eVar58 = "";
                            s.prop59 = data.adobe_hash_id;
                            s.eVar59 = "D\x3dc59";
                            s.prop60 = s.eVar60 = "";
                            s.prop61 = s.eVar61 = "";
                            s.prop64 = s.eVar64 = "";
                            if (data.content_type1 == "non tve" && data.content_type2 == "vod" && data.content_type3 == "clip");
                            else {
                                s.prop68 = s.eVar68 = "";
                                s.prop71 = s.eVar71 = ""
                            }
                            s.prop70 = "noautostart:cnngo";
                            s.eVar70 = "D\x3dc70"
                        }
                        if (data.headline) {
                            s.prop23 = data.headline.toLowerCase();
                            s.eVar23 = "D\x3dc23"
                        }
                        if (!s.prop65) {
                            s.prop65 = Bootstrapper.Util.getCNNTopic();
                            s.list1 =
                                "D\x3dc65"
                        }
                        s.eVar67 = Bootstrapper.Util.getCNNPlayerState(data);
                        try {
                            window.CNN.omniture.gallery_name = ""
                        } catch (err) {}
                        try {
                            if (window.CNN && window.CNN.omniture != "undefined" && window.CNN.omniture.is_vision == true) {
                                s.prop71 = "cnn:vision";
                                s.eVar71 = "D\x3dc71"
                            }
                        } catch (e) {}
                        try {
                            s.prop4 = Bootstrapper.Util.getPageAttribution();
                            s.prop46 = Bootstrapper.Util.getCNNTransactionID();
                            s.prop47 = Bootstrapper.Util.getCookie("ug");
                            s.prop26 = Bootstrapper.Util.getCNNBaseURL()
                        } catch (e) {}
                    }
                }
            }()
        }, 3011652, [3011656, 2988688], 579117, [578568,
            578909
        ]);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function() {
                Bootstrapper.data.define({
                    extract: function() {
                        var domain = window.location.hostname.split(".");
                        if (domain[0] !== "www")
                            if (domain[2] === undefined) domain = domain[0] + "." + domain[1];
                            else domain = domain[0] + "." + domain[1] + "." + domain[2];
                        else domain = domain[1] + "." + domain[2];
                        return domain
                    },
                    load: "instance",
                    trigger: Bootstrapper.data.immediateTrigger,
                    dataDefName: "ADBP - server",
                    collection: "ADBP",
                    source: "Manage",
                    priv: "false"
                }, {
                    id: "19706"
                })
            }, 19706)
        }, -1, -1);
        Bootstrapper.bindDependencyImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.AF = function() {
                var i = {
                    data: {},
                    _dataConfig: {},
                    logHistory: [],
                    debug: !0,
                    dataObj: function(t) {
                        var i = t ? [] : "";
                        return i.finalized = !1, i.type = t, i
                    },
                    validateInput: function(t) {
                        return "object" != typeof t || "number" != typeof t.length ? this.log("Error, input must be type Array") : (/set|push|call|eval|finalize|join/.test(t[0]) || this.log("Error, '" + t[0] + "' is not a valid command"), !0)
                    },
                    storeData: function(t, i, o, e, n) {
                        return n = this.getConfig(i, o, n), i = this.data[i][o], n.finalized ? (this.log("Error, cannot modify finalized key '" + o + "'"), i) : void 0 !== i && n.multi ? ("join" == t ? i = i.concat(e) : i.push(e), i) : (n.multi ? (o = [e], "join" == t && (o = [].concat(e))) : o = e, o)
                    },
                    getConfig: function(t, i, o, e) {
                        return e = {}, void 0 === (t = this._dataConfig[t] || {})[i] ? (e.multi = o, e.finalized = !1, e) : t[i]
                    },
                    store: function(t, i, o, e, n) {
                        return this.data[i] = this.data[i] || {}, this.data[i][o] = this.storeData(t, i, o, e, n), this.data[i][o]
                    },
                    parseCode: function(t) {
                        return ((t || function() {}) + "").replace(/^functions*(s*)s*{|}$/g, "")
                    },
                    callFn: function(t, i, o, e) {
                        if ("function" == typeof t) {
                            if (!o) return t.apply(window, e);
                            void 0 !== window.execScript ? window.execScript(this.parseCode(t)) : t.call(window)
                        } else {
                            if ("function" != typeof this.data[t][i]) return this.log("Error, '" + i + "' is not a function");
                            if (!o) return e = "object" == typeof e && "number" == typeof e.length ? e : [], this.data[t][i].apply(this.data[t], e);
                            void 0 !== window.execScript ? window.execScript(this.parseCode(this.data[t][i])) :
                                this.data[t][i].call(window)
                        }
                    },
                    parse: function(t) {
                        if (this.validateInput(t)) {
                            var i = (t = Array.prototype.slice.call(t, 0)).shift(),
                                o = t.shift(),
                                e = t.shift(),
                                n = t[0];
                            if (/set|push|join/.test(i)) return this.store(i, o, e, n, /push|join/.test(i));
                            if (/call|eval/.test(i)) return this.callFn(o, e, "eval" == i, t);
                            if ("finalize" == i) return (t = (t = this._dataConfig[o] = this._dataConfig[o] || {})[e] || {
                                multi: !1
                            }).finalized = !0, this._dataConfig[o][e] = t
                        }
                    },
                    log: function(t) {
                        return this.logHistory.push(t), !(!this.debug || "object" != typeof console) &&
                            (console.log(t) && !1)
                    }
                };
                if ("object" == typeof Bootstrapper.AF && "[object Array]" !== Object.prototype.toString.call(Bootstrapper.AF)) return Bootstrapper.AF;
                if ("[object Array]" === Object.prototype.toString.call(Bootstrapper.AF))
                    for (var t = Bootstrapper.AF, o = 0; o < t.length; o++) i.parse(t[o]);
                return {
                    push: function(t) {
                        return i.parse(t)
                    }
                }
            }();
            Bootstrapper._SC = Bootstrapper._SC || {};
            Bootstrapper._SC.log = function(a) {
                if (Bootstrapper._SC.logEnabled) try {
                    console.log("AA App Log - " + a)
                } catch (f) {}
            };
            Bootstrapper.AF.push(["set",
                "SiteCatalyst", "block",
                function(a) {
                    this.ignore = this.ignore || {};
                    this.ignore[a] = 1
                }
            ]);
            Bootstrapper.AF.push(["set", "SiteCatalyst", "exec", function() {
                if (!this.ar) {
                    Bootstrapper.AF.push(["push", "SiteCatalyst", "ar", !0]);
                    for (var a = this.ns || [], f = {}, c = 0; c < a.length; c++) f[a[c]] = 1, Bootstrapper.AF.push(["set", a[c], "exec", function(a) {
                        return function() {
                            var c = this.dl || [],
                                b = this.DMFDelay || !1;
                            Bootstrapper._SC.log("Delay for DMF: " + b);
                            var f = function(c) {
                                    if ("object" != typeof window[a]) setTimeout.call(this, function() {
                                        f.call(this,
                                            c)
                                    }, 250);
                                    else {
                                        for (var g = ["pre", "post"], e = 0; e < g.length; e++) {
                                            var b = this[g[e]];
                                            if ("object" == typeof b)
                                                for (var k = 0; k < b.length; k++) {
                                                    var d = b[k],
                                                        h = window[a];
                                                    if ("object" == typeof d[0] && d[0].length) {
                                                        do h = h[d[0].shift()]; while (1 < d[0].length);
                                                        d[0] = d[0].shift()
                                                    }
                                                    if (d[1] && "function" == typeof d[1]) try {
                                                        h[d[0]] = d[1].call(this, c)
                                                    } catch (l) {} else h[d[0]] = d[1]
                                                }
                                        }
                                        window[a].t();
                                        Bootstrapper.AF.push(["set", a, "getCallbacks", function() {
                                            return this.callback || []
                                        }]);
                                        g = Bootstrapper.AF.push(["call", a, "getCallbacks"]);
                                        for (e = 0; e < g.length; e++) "function" ==
                                            typeof g[e] && g[e].call(window)
                                    }
                                },
                                l = function() {
                                    Bootstrapper.data ? Bootstrapper.data.resolve.call(this, c, function() {
                                        for (var a = {}, b = 0; b < c.length; b++) a[c[b]] = arguments[b];
                                        f.call(this, a)
                                    }) : f.call(this, {})
                                },
                                m = this;
                            b ? Bootstrapper.bindDOMParsed(function() {
                                l.call(m)
                            }) : l.call(this)
                        }
                    }(a[c])]);
                    var a = 0,
                        b;
                    for (b in f) this.ignore && b in this.ignore || (a ? setTimeout(function(a) {
                        return function() {
                            Bootstrapper.AF.push(["call", a, "exec"])
                        }
                    }(b), 250 * a) : Bootstrapper.AF.push(["call", b, "exec"]), a++)
                }
            }]);
            Bootstrapper.bindPageSpecificCompletion(function() {
                setTimeout(function() {
                    Bootstrapper.AF.push(["call",
                        "SiteCatalyst", "exec"
                    ])
                }, 250)
            });
            Bootstrapper.AF.push(["eval", function() {
                sObjectName = "s";
                window.sName = sObjectName;
                window.AppMeasurement = AppMeasurement;
                window[sObjectName + "_gi"] = sgiFn;
                window[sObjectName + "_pgicq"] = spgicqFn;

                function AppMeasurement(r) {
                    var a = this;
                    a.version = "2.11.0";
                    var k = window;
                    k.s_c_in || (k.s_c_il = [], k.s_c_in = 0);
                    a._il = k.s_c_il;
                    a._in = k.s_c_in;
                    a._il[a._in] = a;
                    k.s_c_in++;
                    a._c = "s_c";
                    var q = k.AppMeasurement.ac;
                    q || (q = null);
                    var p = k,
                        m, s;
                    try {
                        for (m = p.parent, s = p.location; m && m.location && s && "" + m.location !=
                            "" + s && p.location && "" + m.location != "" + p.location && m.location.host == s.host;) p = m, m = p.parent
                    } catch (u) {}
                    a.D = function(a) {
                        try {
                            console.log(a)
                        } catch (b) {}
                    };
                    a.Pa = function(a) {
                        return "" + parseInt(a) == "" + a
                    };
                    a.replace = function(a, b, d) {
                        return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d)
                    };
                    a.escape = function(c) {
                        var b, d;
                        if (!c) return c;
                        c = encodeURIComponent(c);
                        for (b = 0; 7 > b; b++) d = "+~!*()'".substring(b, b + 1), 0 <= c.indexOf(d) && (c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
                        return c
                    };
                    a.unescape = function(c) {
                        if (!c) return c;
                        c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
                        try {
                            return decodeURIComponent(c)
                        } catch (b) {}
                        return unescape(c)
                    };
                    a.Ib = function() {
                        var c = k.location.hostname,
                            b = a.fpCookieDomainPeriods,
                            d;
                        b || (b = a.cookieDomainPeriods);
                        if (c && !a.Ha && !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2, b = 2 < b ? b : 2, d = c.lastIndexOf("."), 0 <= d)) {
                            for (; 0 <= d && 1 < b;) d = c.lastIndexOf(".", d - 1), b--;
                            a.Ha = 0 < d ? c.substring(d) : c
                        }
                        return a.Ha
                    };
                    a.c_r = a.cookieRead = function(c) {
                        c = a.escape(c);
                        var b = " " + a.d.cookie,
                            d = b.indexOf(" " + c + "\x3d"),
                            f = 0 > d ? d : b.indexOf(";", d);
                        c = 0 >
                            d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
                        return "[[B]]" != c ? c : ""
                    };
                    a.c_w = a.cookieWrite = function(c, b, d) {
                        var f = a.Ib(),
                            e = a.cookieLifetime,
                            g;
                        b = "" + b;
                        e = e ? ("" + e).toUpperCase() : "";
                        d && "SESSION" != e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date, d.setTime(d.getTime() + 1E3 * g)) : 1 === d && (d = new Date, g = d.getYear(), d.setYear(g + 2 + (1900 > g ? 1900 : 0))));
                        return c && "NONE" != e ? (a.d.cookie = a.escape(c) + "\x3d" + a.escape("" != b ? b : "[[B]]") + "; path\x3d/;" + (d && "SESSION" != e ? " expires\x3d" + d.toUTCString() + ";" : "") +
                            (f ? " domain\x3d" + f + ";" : ""), a.cookieRead(c) == b) : 0
                    };
                    a.Fb = function() {
                        var c = a.Util.getIeVersion();
                        "number" === typeof c && 10 > c && (a.unsupportedBrowser = !0, a.tb(a, function() {}))
                    };
                    a.tb = function(a, b) {
                        for (var d in a) a.hasOwnProperty(d) && "function" === typeof a[d] && (a[d] = b)
                    };
                    a.M = [];
                    a.fa = function(c, b, d) {
                        if (a.Ia) return 0;
                        a.maxDelay || (a.maxDelay = 250);
                        var f = 0,
                            e = (new Date).getTime() + a.maxDelay,
                            g = a.d.visibilityState,
                            h = ["webkitvisibilitychange", "visibilitychange"];
                        g || (g = a.d.webkitVisibilityState);
                        if (g && "prerender" == g) {
                            if (!a.ga)
                                for (a.ga =
                                    1, d = 0; d < h.length; d++) a.d.addEventListener(h[d], function() {
                                    var c = a.d.visibilityState;
                                    c || (c = a.d.webkitVisibilityState);
                                    "visible" == c && (a.ga = 0, a.delayReady())
                                });
                            f = 1;
                            e = 0
                        } else d || a.o("_d") && (f = 1);
                        f && (a.M.push({
                            m: c,
                            a: b,
                            t: e
                        }), a.ga || setTimeout(a.delayReady, a.maxDelay));
                        return f
                    };
                    a.delayReady = function() {
                        var c = (new Date).getTime(),
                            b = 0,
                            d;
                        for (a.o("_d") ? b = 1 : a.za(); 0 < a.M.length;) {
                            d = a.M.shift();
                            if (b && !d.t && d.t > c) {
                                a.M.unshift(d);
                                setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                                break
                            }
                            a.Ia = 1;
                            a[d.m].apply(a, d.a);
                            a.Ia =
                                0
                        }
                    };
                    a.setAccount = a.sa = function(c) {
                        var b, d;
                        if (!a.fa("setAccount", arguments))
                            if (a.account = c, a.allAccounts)
                                for (b = a.allAccounts.concat(c.split(",")), a.allAccounts = [], b.sort(), d = 0; d < b.length; d++) 0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);
                            else a.allAccounts = c.split(",")
                    };
                    a.foreachVar = function(c, b) {
                        var d, f, e, g, h = "";
                        e = f = "";
                        if (a.lightProfileID) d = a.Q, (h = a.lightTrackVars) && (h = "," + h + "," + a.ka.join(",") + ",");
                        else {
                            d = a.g;
                            if (a.pe || a.linkType) h = a.linkTrackVars, f = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() +
                                a.pe.substring(1), a[e] && (h = a[e].Zb, f = a[e].Yb));
                            h && (h = "," + h + "," + a.G.join(",") + ",");
                            f && h && (h += ",events,")
                        }
                        b && (b = "," + b + ",");
                        for (f = 0; f < d.length; f++) e = d[f], (g = a[e]) && (!h || 0 <= h.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g)
                    };
                    a.q = function(c, b, d, f, e) {
                        var g = "",
                            h, l, k, n, m = 0;
                        "contextData" == c && (c = "c");
                        if (b) {
                            for (h in b)
                                if (!(Object.prototype[h] || e && h.substring(0, e.length) != e) && b[h] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + h + ","))) {
                                    k = !1;
                                    if (m)
                                        for (l = 0; l < m.length; l++) h.substring(0, m[l].length) == m[l] && (k = !0);
                                    if (!k && ("" == g && (g += "\x26" + c + "."), l = b[h], e && (h = h.substring(e.length)), 0 < h.length))
                                        if (k = h.indexOf("."), 0 < k) l = h.substring(0, k), k = (e ? e : "") + l + ".", m || (m = []), m.push(k), g += a.q(l, b, d, f, k);
                                        else if ("boolean" == typeof l && (l = l ? "true" : "false"), l) {
                                        if ("retrieveLightData" == f && 0 > e.indexOf(".contextData.")) switch (k = h.substring(0, 4), n = h.substring(4), h) {
                                            case "transactionID":
                                                h = "xact";
                                                break;
                                            case "channel":
                                                h = "ch";
                                                break;
                                            case "campaign":
                                                h = "v0";
                                                break;
                                            default:
                                                a.Pa(n) && ("prop" == k ? h = "c" + n : "eVar" == k ? h = "v" + n : "list" == k ? h = "l" + n : "hier" ==
                                                    k && (h = "h" + n, l = l.substring(0, 255)))
                                        }
                                        g += "\x26" + a.escape(h) + "\x3d" + a.escape(l)
                                    }
                                }
                            "" != g && (g += "\x26." + c)
                        }
                        return g
                    };
                    a.usePostbacks = 0;
                    a.Lb = function() {
                        var c = "",
                            b, d, f, e, g, h, l, k, n = "",
                            m = "",
                            p = e = "",
                            r = a.V();
                        if (a.lightProfileID) b = a.Q, (n = a.lightTrackVars) && (n = "," + n + "," + a.ka.join(",") + ",");
                        else {
                            b = a.g;
                            if (a.pe || a.linkType) n = a.linkTrackVars, m = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (n = a[e].Zb, m = a[e].Yb));
                            n && (n = "," + n + "," + a.G.join(",") + ",");
                            m && (m = "," + m + ",", n && (n += ",events,"));
                            a.events2 && (p += ("" != p ? "," : "") + a.events2)
                        }
                        if (r && a.xa() && r.getCustomerIDs) {
                            e = q;
                            if (g = r.getCustomerIDs())
                                for (d in g) Object.prototype[d] || (f = g[d], "object" == typeof f && (e || (e = {}), f.id && (e[d + ".id"] = f.id), f.authState && (e[d + ".as"] = f.authState)));
                            e && (c += a.q("cid", e))
                        }
                        a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.q("d", a.AudienceManagement.getEventCallConfigParams()));
                        for (d = 0; d < b.length; d++) {
                            e = b[d];
                            g = a[e];
                            f = e.substring(0, 4);
                            h = e.substring(4);
                            g || ("events" == e && p ? (g = p, p = "") : "marketingCloudOrgID" == e &&
                                r && a.K("ECID") && (g = r.marketingCloudOrgID));
                            if (g && (!n || 0 <= n.indexOf("," + e + ","))) {
                                switch (e) {
                                    case "customerPerspective":
                                        e = "cp";
                                        break;
                                    case "marketingCloudOrgID":
                                        e = "mcorgid";
                                        break;
                                    case "supplementalDataID":
                                        e = "sdid";
                                        break;
                                    case "timestamp":
                                        e = "ts";
                                        break;
                                    case "dynamicVariablePrefix":
                                        e = "D";
                                        break;
                                    case "visitorID":
                                        e = "vid";
                                        break;
                                    case "marketingCloudVisitorID":
                                        e = "mid";
                                        break;
                                    case "analyticsVisitorID":
                                        e = "aid";
                                        break;
                                    case "audienceManagerLocationHint":
                                        e = "aamlh";
                                        break;
                                    case "audienceManagerBlob":
                                        e = "aamb";
                                        break;
                                    case "authState":
                                        e =
                                            "as";
                                        break;
                                    case "pageURL":
                                        e = "g";
                                        255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0, 255));
                                        break;
                                    case "pageURLRest":
                                        e = "-g";
                                        break;
                                    case "referrer":
                                        e = "r";
                                        break;
                                    case "vmk":
                                    case "visitorMigrationKey":
                                        e = "vmt";
                                        break;
                                    case "visitorMigrationServer":
                                        e = "vmf";
                                        a.ssl && a.visitorMigrationServerSecure && (g = "");
                                        break;
                                    case "visitorMigrationServerSecure":
                                        e = "vmf";
                                        !a.ssl && a.visitorMigrationServer && (g = "");
                                        break;
                                    case "charSet":
                                        e = "ce";
                                        break;
                                    case "visitorNamespace":
                                        e = "ns";
                                        break;
                                    case "cookieDomainPeriods":
                                        e = "cdp";
                                        break;
                                    case "cookieLifetime":
                                        e = "cl";
                                        break;
                                    case "variableProvider":
                                        e = "vvp";
                                        break;
                                    case "currencyCode":
                                        e = "cc";
                                        break;
                                    case "channel":
                                        e = "ch";
                                        break;
                                    case "transactionID":
                                        e = "xact";
                                        break;
                                    case "campaign":
                                        e = "v0";
                                        break;
                                    case "latitude":
                                        e = "lat";
                                        break;
                                    case "longitude":
                                        e = "lon";
                                        break;
                                    case "resolution":
                                        e = "s";
                                        break;
                                    case "colorDepth":
                                        e = "c";
                                        break;
                                    case "javascriptVersion":
                                        e = "j";
                                        break;
                                    case "javaEnabled":
                                        e = "v";
                                        break;
                                    case "cookiesEnabled":
                                        e = "k";
                                        break;
                                    case "browserWidth":
                                        e = "bw";
                                        break;
                                    case "browserHeight":
                                        e = "bh";
                                        break;
                                    case "connectionType":
                                        e =
                                            "ct";
                                        break;
                                    case "homepage":
                                        e = "hp";
                                        break;
                                    case "events":
                                        p && (g += ("" != g ? "," : "") + p);
                                        if (m)
                                            for (h = g.split(","), g = "", f = 0; f < h.length; f++) l = h[f], k = l.indexOf("\x3d"), 0 <= k && (l = l.substring(0, k)), k = l.indexOf(":"), 0 <= k && (l = l.substring(0, k)), 0 <= m.indexOf("," + l + ",") && (g += (g ? "," : "") + h[f]);
                                        break;
                                    case "events2":
                                        g = "";
                                        break;
                                    case "contextData":
                                        c += a.q("c", a[e], n, e);
                                        g = "";
                                        break;
                                    case "lightProfileID":
                                        e = "mtp";
                                        break;
                                    case "lightStoreForSeconds":
                                        e = "mtss";
                                        a.lightProfileID || (g = "");
                                        break;
                                    case "lightIncrementBy":
                                        e = "mti";
                                        a.lightProfileID ||
                                            (g = "");
                                        break;
                                    case "retrieveLightProfiles":
                                        e = "mtsr";
                                        break;
                                    case "deleteLightProfiles":
                                        e = "mtsd";
                                        break;
                                    case "retrieveLightData":
                                        a.retrieveLightProfiles && (c += a.q("mts", a[e], n, e));
                                        g = "";
                                        break;
                                    default:
                                        a.Pa(h) && ("prop" == f ? e = "c" + h : "eVar" == f ? e = "v" + h : "list" == f ? e = "l" + h : "hier" == f && (e = "h" + h, g = g.substring(0, 255)))
                                }
                                g && (c += "\x26" + e + "\x3d" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
                            }
                            "pev3" == e && a.e && (c += a.e)
                        }
                        a.ja && (c += "\x26lrt\x3d" + a.ja, a.ja = null);
                        return c
                    };
                    a.C = function(a) {
                        var b = a.tagName;
                        if ("undefined" != "" + a.ec || "undefined" !=
                            "" + a.Ub && "HTML" != ("" + a.Ub).toUpperCase()) return "";
                        b = b && b.toUpperCase ? b.toUpperCase() : "";
                        "SHAPE" == b && (b = "");
                        b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A"));
                        return b
                    };
                    a.La = function(a) {
                        var b = k.location,
                            d = a.href ? a.href : "",
                            f, e, g;
                        f = d.indexOf(":");
                        e = d.indexOf("?");
                        g = d.indexOf("/");
                        d && (0 > f || 0 <= e && f > e || 0 <= g && f > g) && (e = a.protocol && 1 < a.protocol.length ? a.protocol : b.protocol ? b.protocol : "", f = b.pathname.lastIndexOf("/"), d = (e ? e + "//" : "") + (a.host ? a.host : b.host ? b.host :
                            "") + ("/" != d.substring(0, 1) ? b.pathname.substring(0, 0 > f ? 0 : f) + "/" : "") + d);
                        return d
                    };
                    a.N = function(c) {
                        var b = a.C(c),
                            d, f, e = "",
                            g = 0;
                        return b && (d = c.protocol, f = c.onclick, !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""), g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g = 3) : "IMAGE" == b && c.src && (e = c.src) : e = a.La(c), e) ? {
                                id: e.substring(0, 100),
                                type: g
                            } :
                            0
                    };
                    a.bc = function(c) {
                        for (var b = a.C(c), d = a.N(c); c && !d && "BODY" != b;)
                            if (c = c.parentElement ? c.parentElement : c.parentNode) b = a.C(c), d = a.N(c);
                        d && "BODY" != b || (c = 0);
                        c && (b = c.onclick ? "" + c.onclick : "", 0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = 0);
                        return c
                    };
                    a.Tb = function() {
                        var c, b, d = a.linkObject,
                            f = a.linkType,
                            e = a.linkURL,
                            g, h;
                        a.la = 1;
                        d || (a.la = 0, d = a.clickObject);
                        if (d) {
                            c = a.C(d);
                            for (b = a.N(d); d && !b && "BODY" != c;)
                                if (d = d.parentElement ? d.parentElement : d.parentNode) c = a.C(d), b = a.N(d);
                            b && "BODY" != c || (d = 0);
                            if (d && !a.linkObject) {
                                var l =
                                    d.onclick ? "" + d.onclick : "";
                                if (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink(")) d = 0
                            }
                        } else a.la = 1;
                        !e && d && (e = a.La(d));
                        e && !a.linkLeaveQueryString && (g = e.indexOf("?"), 0 <= g && (e = e.substring(0, g)));
                        if (!f && e) {
                            var m = 0,
                                n = 0,
                                p;
                            if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                                for (l = e.toLowerCase(), g = l.indexOf("?"), h = l.indexOf("#"), 0 <= g ? 0 <= h && h < g && (g = h) : g = h, 0 <= g && (l = l.substring(0, g)), g = a.linkDownloadFileTypes.toLowerCase().split(","), h = 0; h < g.length; h++)(p = g[h]) && l.substring(l.length - (p.length + 1)) == "." + p && (f = "d");
                            if (a.trackExternalLinks && !f && (l = e.toLowerCase(), a.Oa(l) && (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname), g = 0, a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(","), m = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")), g))) {
                                for (h = 0; h < g.length; h++) p = g[h], 0 <= l.indexOf(p) && (n = 1);
                                n ? m && (f = "e") : m || (f = "e")
                            }
                        }
                        a.linkObject = d;
                        a.linkURL = e;
                        a.linkType = f;
                        if (a.trackClickMap || a.trackInlineStats) a.e = "", d && (f = a.pageName, e = 1, d = d.sourceIndex, f || (f = a.pageURL,
                            e = 0), k.s_objectID && (b.id = k.s_objectID, d = b.type = 1), f && b && b.id && c && (a.e = "\x26pid\x3d" + a.escape(f.substring(0, 255)) + (e ? "\x26pidt\x3d" + e : "") + "\x26oid\x3d" + a.escape(b.id.substring(0, 100)) + (b.type ? "\x26oidt\x3d" + b.type : "") + "\x26ot\x3d" + c + (d ? "\x26oi\x3d" + d : "")))
                    };
                    a.Mb = function() {
                        var c = a.la,
                            b = a.linkType,
                            d = a.linkURL,
                            f = a.linkName;
                        b && (d || f) && (b = b.toLowerCase(), "d" != b && "e" != b && (b = "o"), a.pe = "lnk_" + b, a.pev1 = d ? a.escape(d) : "", a.pev2 = f ? a.escape(f) : "", c = 1);
                        a.abort && (c = 0);
                        if (a.trackClickMap || a.trackInlineStats || a.Pb()) {
                            var b = {},
                                d = 0,
                                e = a.ob(),
                                g = e ? e.split("\x26") : 0,
                                h, l, k, e = 0;
                            if (g)
                                for (h = 0; h < g.length; h++) l = g[h].split("\x3d"), f = a.unescape(l[0]).split(","), l = a.unescape(l[1]), b[l] = f;
                            f = a.account.split(",");
                            h = {};
                            for (k in a.contextData) k && !Object.prototype[k] && "a.activitymap." == k.substring(0, 14) && (h[k] = a.contextData[k], a.contextData[k] = "");
                            a.e = a.q("c", h) + (a.e ? a.e : "");
                            if (c || a.e) {
                                c && !a.e && (e = 1);
                                for (l in b)
                                    if (!Object.prototype[l])
                                        for (k = 0; k < f.length; k++)
                                            for (e && (g = b[l].join(","), g == a.account && (a.e += ("\x26" != l.charAt(0) ? "\x26" : "") + l,
                                                    b[l] = [], d = 1)), h = 0; h < b[l].length; h++) g = b[l][h], g == f[k] && (e && (a.e += "\x26u\x3d" + a.escape(g) + ("\x26" != l.charAt(0) ? "\x26" : "") + l + "\x26u\x3d0"), b[l].splice(h, 1), d = 1);
                                c || (d = 1);
                                if (d) {
                                    e = "";
                                    h = 2;
                                    !c && a.e && (e = a.escape(f.join(",")) + "\x3d" + a.escape(a.e), h = 1);
                                    for (l in b) !Object.prototype[l] && 0 < h && 0 < b[l].length && (e += (e ? "\x26" : "") + a.escape(b[l].join(",")) + "\x3d" + a.escape(l), h--);
                                    a.ub(e)
                                }
                            }
                        }
                        return c
                    };
                    a.ob = function() {
                        if (a.useLinkTrackSessionStorage) {
                            if (a.Ca()) return k.sessionStorage.getItem(a.R)
                        } else return a.cookieRead(a.R)
                    };
                    a.Ca = function() {
                        return k.sessionStorage ? !0 : !1
                    };
                    a.ub = function(c) {
                        a.useLinkTrackSessionStorage ? a.Ca() && k.sessionStorage.setItem(a.R, c) : a.cookieWrite(a.R, c)
                    };
                    a.Nb = function() {
                        if (!a.Xb) {
                            var c = new Date,
                                b = p.location,
                                d, f, e = f = d = "",
                                g = "",
                                h = "",
                                l = "1.2",
                                k = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                                m = "",
                                q = "";
                            if (c.setUTCDate && (l = "1.3", (0).toPrecision && (l = "1.5", c = [], c.forEach))) {
                                l = "1.6";
                                f = 0;
                                d = {};
                                try {
                                    f = new Iterator(d), f.next && (l = "1.7", c.reduce && (l = "1.8", l.trim && (l = "1.8.1", Date.parse && (l = "1.8.2", Object.create && (l = "1.8.5")))))
                                } catch (r) {}
                            }
                            d =
                                screen.width + "x" + screen.height;
                            e = navigator.javaEnabled() ? "Y" : "N";
                            f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
                            g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
                            h = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
                            try {
                                a.b.addBehavior("#default#homePage"), m = a.b.cc(b) ? "Y" : "N"
                            } catch (s) {}
                            try {
                                a.b.addBehavior("#default#clientCaps"), q = a.b.connectionType
                            } catch (t) {}
                            a.resolution = d;
                            a.colorDepth = f;
                            a.javascriptVersion = l;
                            a.javaEnabled = e;
                            a.cookiesEnabled = k;
                            a.browserWidth = g;
                            a.browserHeight = h;
                            a.connectionType = q;
                            a.homepage = m;
                            a.Xb = 1
                        }
                    };
                    a.S = {};
                    a.loadModule = function(c, b) {
                        var d = a.S[c];
                        if (!d) {
                            d = k["AppMeasurement_Module_" + c] ? new k["AppMeasurement_Module_" + c](a) : {};
                            a.S[c] = a[c] = d;
                            d.jb = function() {
                                return d.rb
                            };
                            d.vb = function(b) {
                                if (d.rb = b) a[c + "_onLoad"] = b, a.fa(c + "_onLoad", [a, d], 1) || b(a, d)
                            };
                            try {
                                Object.defineProperty ? Object.defineProperty(d, "onLoad", {
                                    get: d.jb,
                                    set: d.vb
                                }) : d._olc = 1
                            } catch (f) {
                                d._olc = 1
                            }
                        }
                        b && (a[c + "_onLoad"] = b, a.fa(c + "_onLoad", [a, d], 1) || b(a, d))
                    };
                    a.o = function(c) {
                        var b, d;
                        for (b in a.S)
                            if (!Object.prototype[b] &&
                                (d = a.S[b]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[c] && d[c]())) return 1;
                        return 0
                    };
                    a.Pb = function() {
                        return a.ActivityMap && a.ActivityMap._c ? !0 : !1
                    };
                    a.Qb = function() {
                        var c = Math.floor(1E13 * Math.random()),
                            b = a.visitorSampling,
                            d = a.visitorSamplingGroup,
                            d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""),
                            f = a.cookieRead(d);
                        if (b) {
                            b *= 100;
                            f && (f = parseInt(f));
                            if (!f) {
                                if (!a.cookieWrite(d, c)) return 0;
                                f = c
                            }
                            if (f % 1E4 > b) return 0
                        }
                        return 1
                    };
                    a.T = function(c, b) {
                        var d, f, e, g, h, k;
                        for (d = 0; 2 > d; d++)
                            for (f =
                                0 < d ? a.Da : a.g, e = 0; e < f.length; e++)
                                if (g = f[e], (h = c[g]) || c["!" + g]) {
                                    if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g])
                                        for (k in a[g]) h[k] || (h[k] = a[g][k]);
                                    a[g] = h
                                }
                    };
                    a.Za = function(c, b) {
                        var d, f, e, g;
                        for (d = 0; 2 > d; d++)
                            for (f = 0 < d ? a.Da : a.g, e = 0; e < f.length; e++) g = f[e], c[g] = a[g], b || c[g] || (c["!" + g] = 1)
                    };
                    a.Hb = function(a) {
                        var b, d, f, e, g, h = 0,
                            k, m = "",
                            n = "";
                        if (a && 255 < a.length && (b = "" + a, d = b.indexOf("?"), 0 < d && (k = b.substring(d + 1), b = b.substring(0, d), e = b.toLowerCase(), f = 0, "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0,
                                8) && (f += 8), d = e.indexOf("/", f), 0 < d && (e = e.substring(f, d), g = b.substring(d), b = b.substring(0, d), 0 <= e.indexOf("google") ? h = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (h = ",p,ei,"), h && k)))) {
                            if ((a = k.split("\x26")) && 1 < a.length) {
                                for (f = 0; f < a.length; f++) e = a[f], d = e.indexOf("\x3d"), 0 < d && 0 <= h.indexOf("," + e.substring(0, d) + ",") ? m += (m ? "\x26" : "") + e : n += (n ? "\x26" : "") + e;
                                m && n ? k = m + "\x26" + n : n = ""
                            }
                            d = 253 - (k.length - n.length) - b.length;
                            a = b + (0 < d ? g.substring(0, d) : "") + "?" + k
                        }
                        return a
                    };
                    a.cb = function(c) {
                        var b = a.d.visibilityState,
                            d = ["webkitvisibilitychange", "visibilitychange"];
                        b || (b = a.d.webkitVisibilityState);
                        if (b && "prerender" == b) {
                            if (c)
                                for (b = 0; b < d.length; b++) a.d.addEventListener(d[b], function() {
                                    var b = a.d.visibilityState;
                                    b || (b = a.d.webkitVisibilityState);
                                    "visible" == b && c()
                                });
                            return !1
                        }
                        return !0
                    };
                    a.ba = !1;
                    a.J = !1;
                    a.xb = function() {
                        a.J = !0;
                        a.H()
                    };
                    a.ca = !1;
                    a.U = !1;
                    a.yb = function(c) {
                        a.marketingCloudVisitorID = c.MCMID;
                        a.visitorOptedOut = c.MCOPTOUT;
                        a.analyticsVisitorID = c.MCAID;
                        a.audienceManagerLocationHint = c.MCAAMLH;
                        a.audienceManagerBlob = c.MCAAMB;
                        a.U = !0;
                        a.H()
                    };
                    a.bb = function(c) {
                        a.maxDelay || (a.maxDelay = 250);
                        return a.o("_d") ? (c && setTimeout(function() {
                            c()
                        }, a.maxDelay), !1) : !0
                    };
                    a.Z = !1;
                    a.I = !1;
                    a.za = function() {
                        a.I = !0;
                        a.H()
                    };
                    a.isReadyToTrack = function() {
                        var c = !0;
                        if (!a.nb() || !a.mb()) return !1;
                        a.xa() || (c = !1);
                        a.qb() || (c = !1);
                        return c
                    };
                    a.nb = function() {
                        a.ba || a.J || (a.cb(a.xb) ? a.J = !0 : a.ba = !0);
                        return a.ba && !a.J ? !1 : !0
                    };
                    a.mb = function() {
                        var c = a.va();
                        if (c)
                            if (a.ta || a.aa)
                                if (a.ta) {
                                    if (!c.isApproved(c.Categories.ANALYTICS)) return !1
                                } else return !1;
                        else return c.fetchPermissions(a.sb, !0), a.aa = !0, !1;
                        return !0
                    };
                    a.K = function(c) {
                        var b = a.va();
                        return b && !b.isApproved(b.Categories[c]) ? !1 : !0
                    };
                    a.va = function() {
                        return k.adobe && k.adobe.optIn ? k.adobe.optIn : null
                    };
                    a.xa = function() {
                        var c = a.V();
                        return c && a.K("ECID") && (a.ca || a.marketingCloudVisitorID || !c.getVisitorValues || (a.ca = !0, a.marketingCloudVisitorID ? a.U = !0 : c.getVisitorValues(a.yb)), a.ca && !a.U && !a.marketingCloudVisitorID) ? !1 : !0
                    };
                    a.V = function() {
                        var c = a.visitor;
                        c && !c.isAllowed() && (c = null);
                        return c
                    };
                    a.qb = function() {
                        a.Z || a.I || (a.bb(a.za) ? a.I = !0 :
                            a.Z = !0);
                        return a.Z && !a.I ? !1 : !0
                    };
                    a.aa = !1;
                    a.sb = function() {
                        a.aa = !1;
                        a.ta = !0
                    };
                    a.l = q;
                    a.r = 0;
                    a.callbackWhenReadyToTrack = function(c, b, d) {
                        var f;
                        f = {};
                        f.Cb = c;
                        f.Bb = b;
                        f.zb = d;
                        a.l == q && (a.l = []);
                        a.l.push(f);
                        0 == a.r && (a.r = setInterval(a.H, 100))
                    };
                    a.H = function() {
                        var c;
                        if (a.isReadyToTrack() && (a.wb(), a.l != q))
                            for (; 0 < a.l.length;) c = a.l.shift(), c.Bb.apply(c.Cb, c.zb)
                    };
                    a.wb = function() {
                        a.r && (clearInterval(a.r), a.r = 0)
                    };
                    a.lb = function(c) {
                        var b, d, f = q,
                            e = q;
                        if (!a.isReadyToTrack()) {
                            b = [];
                            if (c != q)
                                for (d in f = {}, c) f[d] = c[d];
                            e = {};
                            a.Za(e, !0);
                            b.push(f);
                            b.push(e);
                            a.callbackWhenReadyToTrack(a, a.track, b);
                            return !0
                        }
                        return !1
                    };
                    a.Jb = function() {
                        var c = a.cookieRead("s_fid"),
                            b = "",
                            d = "",
                            f;
                        f = 8;
                        var e = 4;
                        if (!c || 0 > c.indexOf("-")) {
                            for (c = 0; 16 > c; c++) f = Math.floor(Math.random() * f), b += "0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * e), d += "0123456789ABCDEF".substring(f, f + 1), f = e = 16;
                            c = b + "-" + d
                        }
                        a.cookieWrite("s_fid", c, 1) || (c = 0);
                        return c
                    };
                    a.t = a.track = function(c, b) {
                        var d, f = new Date,
                            e = "s" + Math.floor(f.getTime() / 108E5) % 10 + Math.floor(1E13 * Math.random()),
                            g = f.getYear(),
                            g = "t\x3d" + a.escape(f.getDate() + "/" + f.getMonth() + "/" + (1900 > g ? g + 1900 : g) + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + " " + f.getDay() + " " + f.getTimezoneOffset()),
                            h = a.V();
                        a.o("_s");
                        a.lb(c) || (b && a.T(b), c && (d = {}, a.Za(d, 0), a.T(c)), a.Qb() && !a.visitorOptedOut && (a.wa() || (a.fid = a.Jb()), a.Tb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(f.getTime() / 1E3)), f = k.location, a.pageURL || (a.pageURL = f.href ? f.href : f), a.referrer ||
                            a.$a || (f = a.Util.getQueryParam("adobe_mc_ref", null, null, !0), a.referrer = f || void 0 === f ? void 0 === f ? "" : f : p.document.referrer), a.$a = 1, a.referrer = a.Hb(a.referrer), a.o("_g")), a.Mb() && !a.abort && (h && a.K("TARGET") && !a.supplementalDataID && h.getSupplementalDataID && (a.supplementalDataID = h.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)), a.K("AAM") || (a.contextData["cm.ssf"] = 1), a.Nb(), g += a.Lb(), a.pb(e, g), a.o("_t"), a.referrer = ""))), c && a.T(d, 1));
                        a.abort = a.supplementalDataID = a.timestamp =
                            a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = 0
                    };
                    a.Ba = [];
                    a.registerPreTrackCallback = function(c) {
                        for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
                        "function" == typeof c ? a.Ba.push([c, b]) : a.debugTracking && a.D("DEBUG: Non function type passed to registerPreTrackCallback")
                    };
                    a.gb = function(c) {
                        a.ua(a.Ba, c)
                    };
                    a.Aa = [];
                    a.registerPostTrackCallback = function(c) {
                        for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
                        "function" == typeof c ? a.Aa.push([c, b]) : a.debugTracking && a.D("DEBUG: Non function type passed to registerPostTrackCallback")
                    };
                    a.fb = function(c) {
                        a.ua(a.Aa, c)
                    };
                    a.ua = function(c, b) {
                        if ("object" == typeof c)
                            for (var d = 0; d < c.length; d++) {
                                var f = c[d][0],
                                    e = c[d][1].slice();
                                e.unshift(b);
                                if ("function" == typeof f) try {
                                    f.apply(null, e)
                                } catch (g) {
                                    a.debugTracking && a.D(g.message)
                                }
                            }
                    };
                    a.tl = a.trackLink = function(c, b, d, f, e) {
                        a.linkObject = c;
                        a.linkType = b;
                        a.linkName = d;
                        e && (a.k = c, a.v = e);
                        return a.track(f)
                    };
                    a.trackLight = function(c, b, d, f) {
                        a.lightProfileID =
                            c;
                        a.lightStoreForSeconds = b;
                        a.lightIncrementBy = d;
                        return a.track(f)
                    };
                    a.clearVars = function() {
                        var c, b;
                        for (c = 0; c < a.g.length; c++)
                            if (b = a.g[c], "prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) || "hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" == b || "events" == b || "eventList" == b || "products" == b || "productList" == b || "purchaseID" == b || "transactionID" == b || "state" == b || "zip" == b || "campaign" == b) a[b] = void 0
                    };
                    a.tagContainerMarker = "";
                    a.pb = function(c, b) {
                        var d = a.hb() + "/" + c + "?AQB\x3d1\x26ndh\x3d1\x26pf\x3d1\x26" +
                            (a.ya() ? "callback\x3ds_c_il[" + a._in + "].doPostbacks\x26et\x3d1\x26" : "") + b + "\x26AQE\x3d1";
                        a.gb(d);
                        a.eb(d);
                        a.W()
                    };
                    a.hb = function() {
                        var c = a.ib();
                        return "http" + (a.ssl ? "s" : "") + "://" + c + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (a.ya() ? "10" : "1") + "/JS-" + a.version + (a.Wb ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "")
                    };
                    a.ya = function() {
                        return a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks
                    };
                    a.ib = function() {
                        var c = a.dc,
                            b = a.trackingServer;
                        b ? a.trackingServerSecure && a.ssl && (b = a.trackingServerSecure) :
                            (c = c ? ("" + c).toLowerCase() : "d1", "d1" == c ? c = "112" : "d2" == c && (c = "122"), b = a.kb() + "." + c + ".2o7.net");
                        return b
                    };
                    a.kb = function() {
                        var c = a.visitorNamespace;
                        c || (c = a.account.split(",")[0], c = c.replace(/[^0-9a-z]/gi, ""));
                        return c
                    };
                    a.Ya = /{(%?)(.*?)(%?)}/;
                    a.$b = RegExp(a.Ya.source, "g");
                    a.Gb = function(c) {
                        if ("object" == typeof c.dests)
                            for (var b = 0; b < c.dests.length; ++b) {
                                var d = c.dests[b];
                                if ("string" == typeof d.c && "aa." == d.id.substr(0, 3))
                                    for (var f = d.c.match(a.$b), e = 0; e < f.length; ++e) {
                                        var g = f[e],
                                            h = g.match(a.Ya),
                                            k = "";
                                        "%" == h[1] &&
                                            "timezone_offset" == h[2] ? k = (new Date).getTimezoneOffset() : "%" == h[1] && "timestampz" == h[2] && (k = a.Kb());
                                        d.c = d.c.replace(g, a.escape(k))
                                    }
                            }
                    };
                    a.Kb = function() {
                        var c = new Date,
                            b = new Date(6E4 * Math.abs(c.getTimezoneOffset()));
                        return a.j(4, c.getFullYear()) + "-" + a.j(2, c.getMonth() + 1) + "-" + a.j(2, c.getDate()) + "T" + a.j(2, c.getHours()) + ":" + a.j(2, c.getMinutes()) + ":" + a.j(2, c.getSeconds()) + (0 < c.getTimezoneOffset() ? "-" : "+") + a.j(2, b.getUTCHours()) + ":" + a.j(2, b.getUTCMinutes())
                    };
                    a.j = function(a, b) {
                        return (Array(a + 1).join(0) + b).slice(-a)
                    };
                    a.pa = {};
                    a.doPostbacks = function(c) {
                        if ("object" == typeof c)
                            if (a.Gb(c), "object" == typeof a.AudienceManagement && "function" == typeof a.AudienceManagement.isReady && a.AudienceManagement.isReady() && "function" == typeof a.AudienceManagement.passData) a.AudienceManagement.passData(c);
                            else if ("object" == typeof c && "object" == typeof c.dests)
                            for (var b = 0; b < c.dests.length; ++b) {
                                var d = c.dests[b];
                                "object" == typeof d && "string" == typeof d.c && "string" == typeof d.id && "aa." == d.id.substr(0, 3) && (a.pa[d.id] = new Image, a.pa[d.id].alt = "",
                                    a.pa[d.id].src = d.c)
                            }
                    };
                    a.eb = function(c) {
                        a.i || a.Ob();
                        a.i.push(c);
                        a.ia = a.B();
                        a.Wa()
                    };
                    a.Ob = function() {
                        a.i = a.Rb();
                        a.i || (a.i = [])
                    };
                    a.Rb = function() {
                        var c, b;
                        if (a.oa()) {
                            try {
                                (b = k.localStorage.getItem(a.ma())) && (c = k.JSON.parse(b))
                            } catch (d) {}
                            return c
                        }
                    };
                    a.oa = function() {
                        var c = !0;
                        a.trackOffline && a.offlineFilename && k.localStorage && k.JSON || (c = !1);
                        return c
                    };
                    a.Ma = function() {
                        var c = 0;
                        a.i && (c = a.i.length);
                        a.p && c++;
                        return c
                    };
                    a.W = function() {
                        if (a.p && (a.A && a.A.complete && a.A.F && a.A.ra(), a.p)) return;
                        a.Na = q;
                        if (a.na) a.ia > a.P && a.Ua(a.i),
                            a.qa(500);
                        else {
                            var c = a.Ab();
                            if (0 < c) a.qa(c);
                            else if (c = a.Ja()) a.p = 1, a.Sb(c), a.Vb(c)
                        }
                    };
                    a.qa = function(c) {
                        a.Na || (c || (c = 0), a.Na = setTimeout(a.W, c))
                    };
                    a.Ab = function() {
                        var c;
                        if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
                        c = a.B() - a.Sa;
                        return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c
                    };
                    a.Ja = function() {
                        if (0 < a.i.length) return a.i.shift()
                    };
                    a.Sb = function(c) {
                        if (a.debugTracking) {
                            var b = "AppMeasurement Debug: " + c;
                            c = c.split("\x26");
                            var d;
                            for (d = 0; d < c.length; d++) b += "\n\t" + a.unescape(c[d]);
                            a.D(b)
                        }
                    };
                    a.wa =
                        function() {
                            return a.marketingCloudVisitorID || a.analyticsVisitorID
                        };
                    a.Y = !1;
                    var t;
                    try {
                        t = JSON.parse('{"x":"y"}')
                    } catch (w) {
                        t = null
                    }
                    t && "y" == t.x ? (a.Y = !0, a.X = function(a) {
                        return JSON.parse(a)
                    }) : k.$ && k.$.parseJSON ? (a.X = function(a) {
                        return k.$.parseJSON(a)
                    }, a.Y = !0) : a.X = function() {
                        return null
                    };
                    a.Vb = function(c) {
                        var b, d, f;
                        a.wa() && 2047 < c.length && (a.ab() && (d = 1, b = new XMLHttpRequest), b && (a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks) && (a.Y ? b.Ea = !0 : b = 0));
                        !b && a.Xa && (c = c.substring(0, 2047));
                        !b &&
                            a.d.createElement && (0 != a.usePostbacks || a.AudienceManagement && a.AudienceManagement.isReady()) && (b = a.d.createElement("SCRIPT")) && "async" in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript", b.setAttribute("async", "async"), d = 2) : b = 0);
                        b || (b = new Image, b.alt = "", b.abort || "undefined" === typeof k.InstallTrigger || (b.abort = function() {
                            b.src = q
                        }));
                        b.Ta = Date.now();
                        b.Ga = function() {
                            try {
                                b.F && (clearTimeout(b.F), b.F = 0)
                            } catch (a) {}
                        };
                        b.onload = b.ra = function() {
                            b.Ta && (a.ja = Date.now() -
                                b.Ta);
                            a.fb(c);
                            b.Ga();
                            a.Eb();
                            a.da();
                            a.p = 0;
                            a.W();
                            if (b.Ea) {
                                b.Ea = !1;
                                try {
                                    a.doPostbacks(a.X(b.responseText))
                                } catch (d) {}
                            }
                        };
                        b.onabort = b.onerror = b.Ka = function() {
                            b.Ga();
                            (a.trackOffline || a.na) && a.p && a.i.unshift(a.Db);
                            a.p = 0;
                            a.ia > a.P && a.Ua(a.i);
                            a.da();
                            a.qa(500)
                        };
                        b.onreadystatechange = function() {
                            4 == b.readyState && (200 == b.status ? b.ra() : b.Ka())
                        };
                        a.Sa = a.B();
                        if (1 == d) f = c.indexOf("?"), d = c.substring(0, f), f = c.substring(f + 1), f = f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), b.open("POST", d, !0), b.withCredentials = !0, b.send(f);
                        else if (b.src = c, 2 == d) {
                            if (a.Qa) try {
                                f.removeChild(a.Qa)
                            } catch (e) {}
                            f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
                            a.Qa = a.A
                        }
                        b.F = setTimeout(function() {
                            b.F && (b.complete ? b.ra() : (a.trackOffline && b.abort && b.abort(), b.Ka()))
                        }, 5E3);
                        a.Db = c;
                        a.A = k["s_i_" + a.replace(a.account, ",", "_")] = b;
                        if (a.useForcedLinkTracking && a.L || a.v) a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250), a.ea = setTimeout(a.da, a.forcedLinkTrackingTimeout)
                    };
                    a.ab = function() {
                        return "undefined" !== typeof XMLHttpRequest && "withCredentials" in
                            new XMLHttpRequest ? !0 : !1
                    };
                    a.Eb = function() {
                        if (a.oa() && !(a.Ra > a.P)) try {
                            k.localStorage.removeItem(a.ma()), a.Ra = a.B()
                        } catch (c) {}
                    };
                    a.Ua = function(c) {
                        if (a.oa()) {
                            a.Wa();
                            try {
                                k.localStorage.setItem(a.ma(), k.JSON.stringify(c)), a.P = a.B()
                            } catch (b) {}
                        }
                    };
                    a.Wa = function() {
                        if (a.trackOffline) {
                            if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
                            for (; a.i.length > a.offlineLimit;) a.Ja()
                        }
                    };
                    a.forceOffline = function() {
                        a.na = !0
                    };
                    a.forceOnline = function() {
                        a.na = !1
                    };
                    a.ma = function() {
                        return a.offlineFilename + "-" + a.visitorNamespace +
                            a.account
                    };
                    a.B = function() {
                        return (new Date).getTime()
                    };
                    a.Oa = function(a) {
                        a = a.toLowerCase();
                        return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1
                    };
                    a.setTagContainer = function(c) {
                        var b, d, f;
                        a.Wb = c;
                        for (b = 0; b < a._il.length; b++)
                            if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
                                a.T(d);
                                if (d.lmq)
                                    for (b = 0; b < d.lmq.length; b++) f = d.lmq[b], a.loadModule(f.n);
                                if (d.ml)
                                    for (f in d.ml)
                                        if (a[f])
                                            for (b in c = a[f], f = d.ml[f], f) !Object.prototype[b] && ("function" != typeof f[b] ||
                                                0 > ("" + f[b]).indexOf("s_c_il")) && (c[b] = f[b]);
                                if (d.mmq)
                                    for (b = 0; b < d.mmq.length; b++) f = d.mmq[b], a[f.m] && (c = a[f.m], c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
                                if (d.tq)
                                    for (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
                                d.s = a;
                                break
                            }
                    };
                    a.Util = {
                        urlEncode: a.escape,
                        urlDecode: a.unescape,
                        cookieRead: a.cookieRead,
                        cookieWrite: a.cookieWrite,
                        getQueryParam: function(c, b, d, f) {
                            var e, g = "";
                            b || (b = a.pageURL ? a.pageURL : k.location);
                            d = d ? d : "\x26";
                            if (!c || !b) return g;
                            b = "" + b;
                            e = b.indexOf("?");
                            if (0 > e) return g;
                            b = d + b.substring(e + 1) + d;
                            if (!f || !(0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + "\x3d" + d))) {
                                e = b.indexOf("#");
                                0 <= e && (b = b.substr(0, e) + d);
                                e = b.indexOf(d + c + "\x3d");
                                if (0 > e) return g;
                                b = b.substring(e + d.length + c.length + 1);
                                e = b.indexOf(d);
                                0 <= e && (b = b.substring(0, e));
                                0 < b.length && (g = a.unescape(b));
                                return g
                            }
                        },
                        getIeVersion: function() {
                            if (document.documentMode) return document.documentMode;
                            for (var a = 7; 4 < a; a--) {
                                var b = document.createElement("div");
                                b.innerHTML = "\x3c!--[if IE " + a + "]\x3e\x3cspan\x3e\x3c/span\x3e\x3c![endif]--\x3e";
                                if (b.getElementsByTagName("span").length) return a
                            }
                            return null
                        }
                    };
                    a.G = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
                    a.g = a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
                    a.ka = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
                    a.Q = a.ka.slice(0);
                    a.Da = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
                    for (m = 0; 250 >= m; m++) 76 > m && (a.g.push("prop" + m), a.Q.push("prop" + m)), a.g.push("eVar" + m), a.Q.push("eVar" + m), 6 > m && a.g.push("hier" + m), 4 > m && a.g.push("list" + m);
                    m = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" ");
                    a.g = a.g.concat(m);
                    a.G = a.G.concat(m);
                    a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf("https");
                    a.charSet = "UTF-8";
                    a.contextData = {};
                    a.offlineThrottleDelay =
                        0;
                    a.offlineFilename = "AppMeasurement.offline";
                    a.R = "s_sq";
                    a.Sa = 0;
                    a.ia = 0;
                    a.P = 0;
                    a.Ra = 0;
                    a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
                    a.w = k;
                    a.d = k.document;
                    try {
                        if (a.Xa = !1, navigator) {
                            var v = navigator.userAgent;
                            if ("Microsoft Internet Explorer" == navigator.appName || 0 <= v.indexOf("MSIE ") || 0 <= v.indexOf("Trident/") && 0 <= v.indexOf("Windows NT 6")) a.Xa = !0
                        }
                    } catch (x) {}
                    a.da = function() {
                        a.ea && (k.clearTimeout(a.ea), a.ea = q);
                        a.k && a.L && a.k.dispatchEvent(a.L);
                        a.v && ("function" == typeof a.v ?
                            a.v() : a.k && a.k.href && (a.d.location = a.k.href));
                        a.k = a.L = a.v = 0
                    };
                    a.Va = function() {
                        a.b = a.d.body;
                        a.b ? (a.u = function(c) {
                            var b, d, f, e, g;
                            if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
                                if (a.Fa)
                                    if (a.useForcedLinkTracking) a.b.removeEventListener("click", a.u, !1);
                                    else {
                                        a.b.removeEventListener("click", a.u, !0);
                                        a.Fa = a.useForcedLinkTracking = 0;
                                        return
                                    }
                                else a.useForcedLinkTracking = 0;
                                a.clickObject = c.srcElement ? c.srcElement : c.target;
                                try {
                                    if (!a.clickObject || a.O && a.O == a.clickObject || !(a.clickObject.tagName ||
                                            a.clickObject.parentElement || a.clickObject.parentNode)) a.clickObject = 0;
                                    else {
                                        var h = a.O = a.clickObject;
                                        a.ha && (clearTimeout(a.ha), a.ha = 0);
                                        a.ha = setTimeout(function() {
                                            a.O == h && (a.O = 0)
                                        }, 1E4);
                                        f = a.Ma();
                                        a.track();
                                        if (f < a.Ma() && a.useForcedLinkTracking && c.target) {
                                            for (e = c.target; e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase();) e = e.parentNode;
                                            if (e && (g = e.href, a.Oa(g) || (g = 0), d = e.target, c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || k.name && d == k.name))) {
                                                try {
                                                    b = a.d.createEvent("MouseEvents")
                                                } catch (l) {
                                                    b =
                                                        new k.MouseEvent
                                                }
                                                if (b) {
                                                    try {
                                                        b.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)
                                                    } catch (m) {
                                                        b = 0
                                                    }
                                                    b && (b["s_fe_" + a._in] = b.s_fe = 1, c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.k = c.target, a.L = b)
                                                }
                                            }
                                        }
                                    }
                                } catch (n) {
                                    a.clickObject = 0
                                }
                            }
                        }, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.u) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") &&
                            a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && k.MouseEvent) && (a.Fa = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.u, !0)), a.b.addEventListener("click", a.u, !1))) : setTimeout(a.Va, 30)
                    };
                    a.Fb();
                    a.fc || (r ? a.setAccount(r) : a.D("Error, missing Report Suite ID in AppMeasurement initialization"), a.Va(), a.loadModule("ActivityMap"))
                }

                function sgiFn(r) {
                    var a, k = window.s_c_il,
                        q, p, m = r.split(","),
                        s, u, t = 0;
                    if (k)
                        for (q = 0; !t && q < k.length;) {
                            a = k[q];
                            if ("s_c" == a._c && (a.account || a.oun))
                                if (a.account &&
                                    a.account == r) t = 1;
                                else
                                    for (p = a.account ? a.account : a.oun, p = a.allAccounts ? a.allAccounts : p.split(","), s = 0; s < m.length; s++)
                                        for (u = 0; u < p.length; u++) m[s] == p[u] && (t = 1);
                            q++
                        }
                    t ? a.setAccount && a.setAccount(r) : a = new AppMeasurement(r);
                    return a
                }
                AppMeasurement.getInstance = s_gi;
                window.s_objectID || (window.s_objectID = 0);

                function spgicqFn() {
                    var r = window,
                        a = r.s_giq,
                        k, q, p;
                    if (a)
                        for (k = 0; k < a.length; k++) q = a[k], p = s_gi(q.oun), p.setAccount(q.un), p.setTagContainer(q.tagContainerName);
                    r.s_giq = 0
                }
                spgicqFn();
                var s_account = Bootstrapper.Util.getCNNRSID();
                var s = s_gi(s_account);
                s.visitor = Visitor.getInstance("7FF852E2556756057F000101@AdobeOrg");
                s.trackingServer = "metrics.cnn.com";
                s.trackingServerSecure = "smetrics.cnn.com";
                s.visitorNamespace = "cnn";
                s.currencyCode = "USD";
                s.trackDownloadLinks = true;
                s.trackExternalLinks = true;
                s.trackInlineStats = false;
                s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
                s.linkInternalFilters = "javascript:,.cnn.com,#,.ireport.com,i.cdn.turner.com,i.cnn.net,.i-report.com,.ireport.net,mailto:,i2.cdn.turner.com,cnn-international.massrel.io,.cnnv2.com,.facebook.com,.instagram.com,twitter.com,style.staging.cnn.io,style.dev-ngarcha.cnn.io,beta-cronkite.cnnlabs.com";
                s.linkLeaveQueryString = false;
                s.linkTrackVars = "None";
                s.linkTrackEvents = "None";
                s.usePlugins = true;
                s.doPlugins = function(s) {
                    if (!s.campaign) s.campaign = s.Util.getQueryParam("cid");
                    if (!s.campaign) s.campaign = s.Util.getQueryParam("iid");
                    if (!s.prop43) s.prop50 = "";
                    if (s.pageName) s.eVar26 = "D\x3dpageName";
                    if (s.channel) s.eVar27 = "D\x3dch";
                    if (s.server) s.eVar29 = "D\x3dserver";
                    if (s.prop1) s.eVar1 = "D\x3dc1";
                    if (s.prop2) s.eVar2 = "D\x3dc2";
                    if (s.prop4) s.eVar4 = "D\x3dc4";
                    if (s.prop6) s.eVar6 = "D\x3dc6";
                    if (s.prop8) s.eVar8 = "D\x3dc8";
                    if (s.prop11) s.eVar11 = "D\x3dc11";
                    if (s.prop10) s.eVar10 = "D\x3dc10";
                    if (s.prop13) s.eVar13 = "D\x3dc13";
                    if (s.prop14) s.eVar14 = "D\x3dc14";
                    if (s.prop15) s.eVar15 = "D\x3dc15";
                    if (s.prop16) s.eVar16 = "D\x3dc16";
                    if (s.prop23) s.eVar23 = "D\x3dc23";
                    if (s.prop28) s.eVar28 = "D\x3dc28";
                    if (s.prop30) s.eVar30 = "D\x3dc30";
                    if (s.prop32) s.eVar32 = "D\x3dc32";
                    if (s.prop33) s.eVar33 = "D\x3dc33";
                    if (s.prop35) s.eVar35 = "D\x3dc35";
                    if (s.prop37) s.eVar37 = "D\x3dc37";
                    if (s.prop39) s.eVar39 = "D\x3dc39";
                    if (s.prop46) s.eVar46 = "D\x3dc46";
                    if (s.prop47) s.eVar47 =
                        "D\x3dc47";
                    if (s.prop49) s.eVar49 = "D\x3dc49";
                    if (s.prop51) s.eVar51 = "D\x3dc51";
                    if (s.prop55) s.eVar55 = "D\x3dc55";
                    if (s.prop56) s.eVar56 = "D\x3dc56";
                    if (s.prop57) s.eVar57 = "D\x3dc57";
                    if (s.prop59) s.eVar59 = "D\x3dc59";
                    if (s.prop64) s.eVar64 = "D\x3dc64";
                    if (s.prop65) s.list1 = "D\x3dc65";
                    if (s.prop69) s.eVar69 = "D\x3dc69";
                    if (s.prop75) s.eVar75 = "D\x3dc75";
                    try {
                        window.optimizely = window.optimizely || [];
                        window.optimizely.push(["activateSiteCatalyst", {
                            "sVariable": s
                        }])
                    } catch (err) {}
                    try {
                        if (optimizely.get("custom/adobeIntegrator")) window.optimizely.get("custom/adobeIntegrator").assignCampaigns(s)
                    } catch (err) {}
                };
                s.getPreviousValue = new Function("v", "c", "el", "" + "var s\x3dthis,t\x3dnew Date,i,j,r\x3d'';t.setTime(t.getTime()+1800000);if(el" + "){if(s.events){i\x3ds.split(el,',');j\x3ds.split(s.events,',');for(x in i" + "){for(y in j){if(i[x]\x3d\x3dj[y]){if(s.c_r(c)) r\x3ds.c_r(c);v?s.c_w(c,v,t)" + ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r\x3ds.c_r(c);v?" + "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
                s.getTimeParting = new Function("h", "z", "" + "var s\x3dthis,od;od\x3dnew Date('1/1/2000');if(od.getDay()!\x3d6||od.getMont" +
                    "h()!\x3d0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da\x3d['" + "Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda" + "y'],d\x3dnew Date();z\x3dz?z:0;z\x3dparseFloat(z);if(s._tpDST){var dso\x3ds._tp" + "DST[d.getFullYear()].split(/,/);ds\x3dnew Date(dso[0]+'/'+d.getFullYea" + "r());de\x3dnew Date(dso[1]+'/'+d.getFullYear());if(h\x3d\x3d'n'\x26\x26d\x3eds\x26\x26d\x3cde)" + "{z\x3dz+1;}else if(h\x3d\x3d's'\x26\x26(d\x3ede||d\x3cds)){z\x3dz+1;}}d\x3dd.getTime()+(d.getT" + "imezoneOffset()*60000);d\x3dnew Date(d+(3600000*z));H\x3dd.getHours();M\x3dd" +
                    ".getMinutes();M\x3d(M\x3c10)?'0'+M:M;D\x3dd.getDay();U\x3d' AM';if(H\x3e\x3d12){U\x3d' P" + "M';H\x3dH-12;}if(H\x3d\x3d0){H\x3d12;}D\x3dda[D];tm\x3dH+':'+M+U;return(tm+'|'+D);}");
                s.apl = new Function("L", "v", "d", "u", "" + "var s\x3dthis,m\x3d0;if(!L)L\x3d'';if(u){var i,n,a\x3ds.split(L,d);for(i\x3d0;i\x3ca." + "length;i++){n\x3da[i];m\x3dm||(u\x3d\x3d1?(n\x3d\x3dv):(n.toLowerCase()\x3d\x3dv.toLowerCas" + "e()));}}if(!m)L\x3dL?L+d+v:v;return L");
                s.manageVars = new Function("c", "l", "f", "" + "var s\x3dthis,vl,la,vla;l\x3dl?l:'';f\x3df?f:1 ;if(!s[c])return false;vl\x3d'pa" +
                    "geName,purchaseID,channel,server,pageType,campaign,state,zip,events" + ",products,transactionID';for(var n\x3d1;n\x3c76;n++){vl+\x3d',prop'+n+',eVar" + "'+n+',hier'+n;}if(l\x26\x26(f\x3d\x3d1||f\x3d\x3d2)){if(f\x3d\x3d1){vl\x3dl;}if(f\x3d\x3d2){la\x3ds.spl" + "it(l,',');vla\x3ds.split(vl,',');vl\x3d'';for(x in la){for(y in vla){if(l" + "a[x]\x3d\x3dvla[y]){vla[y]\x3d'';}}}for(y in vla){vl+\x3dvla[y]?','+vla[y]:'';}" + "}s.pt(vl,',',c,0);return true;}else if(l\x3d\x3d''\x26\x26f\x3d\x3d1){s.pt(vl,',',c,0" +
                    ");return true;}else{return false;}");
                s.clearVars = new Function("t", "var s\x3dthis;s[t]\x3d'';");
                s.lowercaseVars = new Function("t", "" + "var s\x3dthis;if(s[t]\x26\x26t!\x3d'events'){s[t]\x3ds[t].toString();if(s[t].index" + "Of('D\x3d')!\x3d0){s[t]\x3ds[t].toLowerCase();}}");
                s.pt = function(x, d, f, a) {
                    var s = this,
                        t = x,
                        z = 0,
                        y, r;
                    while (t) {
                        y = t.indexOf(d);
                        y = y < 0 ? t.length : y;
                        t = t.substring(0, y);
                        r = s[f](t, a);
                        if (r) return r;
                        z += y + d.length;
                        t = x.substring(z, x.length);
                        t = z < x.length ? t : ""
                    }
                    return ""
                };
                s.split = new Function("l", "d", "" +
                    "var i,x\x3d0,a\x3dnew Array;while(l){i\x3dl.indexOf(d);i\x3di\x3e-1?i:l.length;a[x" + "++]\x3dl.substring(0,i);l\x3dl.substring(i+d.length);}return a")
            }]);
            Bootstrapper.AF.push(["call", "SiteCatalyst", "block", "s"]);
            Bootstrapper.AF.push(["push", "SiteCatalyst", "ns", "s"]);
            Bootstrapper.AF.push(["set", "SiteCatalyst", "clearData", function() {
                if (this.ns)
                    for (var i = 0; i < this.ns.length; i++) {
                        var sObj = this.ns[i];
                        Bootstrapper.AF.push(["set", sObj, "clearData", function() {
                            this.pre = []
                        }])
                    }
            }]);
            Bootstrapper.AF.push(["call",
                "SiteCatalyst", "clearData"
            ])
        }, 3011656, [3011653, 2988696], 578568, [578538, 578565]);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            ! function() {
                function a(a) {
                    if ("[object String]" !== Object.prototype.toString.call(a)) throw new TypeError("Event is not a string.");
                }

                function b(a) {
                    if ("function" != typeof a) throw new TypeError("Handler is not a function");
                }
                var c = {},
                    d = {};
                d.publish = d.pub = function(b) {
                        if (a(b), c[b])
                            for (var d = {
                                    event: b,
                                    args: Array.prototype.slice.call(arguments, 1)
                                }, e = 0, f = c[b].length; f > e; e++) c[b][e].apply(d,
                                d.args)
                    }, d.subscribe = d.sub = function(d, e) {
                        a(d), b(e), (c[d] = c[d] || []).push(e)
                    }, d.unsubscribe = d.unsub = function() {
                        var d, e, f, g, h = Array.prototype.slice.call(arguments);
                        if (h.length >= 2) {
                            if (d = h[0], e = h[1], a(d), b(e), !c[d]) return;
                            for (f = 0, g = c[d].length; g > f; f++) c[d][f] === e && c[d].splice(f, 1)
                        } else {
                            e = h[0], b(e);
                            for (d in c)
                                for (f = 0, g = c[d].length; g > f; f++) c[d][f] === e && c[d].splice(f, 1)
                        }
                    }, "function" == typeof define && define.amd ? define(function() {
                        return d
                    }) : "object" == typeof module && module.exports ? module.exports = d : window.PubSub =
                    d
            }();
            window.setJSMDVideoEvent = function(event, data) {
                if (event == "cnnvideo-pause" && !data.paused) event = "cnnvideo-resume";
                window.jsmdVideoEvent = {
                    name: event,
                    time: +new Date
                }
            };
            window.trackVideoProgress = function(vidInfo) {
                try {
                    setJSMDVideoEvent("cnnvideo-progress", vidInfo);
                    trackMetrics({
                        type: "cnnvideo-progress",
                        data: {
                            video: vidInfo
                        }
                    })
                } catch (e) {}
            };
            window.trackMetrics = function(action, data) {
                var realaction = action,
                    realdata = data;
                if (typeof action == "object") {
                    if (action.type != null) realaction = action.type;
                    if (action.action !=
                        null) realaction = action.action;
                    if (action.data != null) realdata = action.data
                }
                if (typeof realdata == "object")
                    if (realdata.data != null) realdata = realdata.data;
                var counter = 0;
                (function poll() {
                    setTimeout(function() {
                        if (Bootstrapper.subscribersReady || counter >= 10) PubSub.publish(realaction, realdata);
                        else {
                            counter++;
                            poll()
                        }
                    }, 100)
                })();
                try {
                    if (realaction == "cnnvideo-preroll" || realaction == "cnnvideo-adcreative-start") PubSub.publish("cs_video-preroll", realdata.video);
                    else if (realaction == "cnnvideo-adcomplete" || realaction == "cnnvideo-midroll-complete") PubSub.publish("cs_ad-complete",
                        realdata.video);
                    else if (realaction == "cnnvideo-start" || realaction == "cnnvideo-autostart" || realaction == "cnnvideo-live" || realaction == "cnnvideo-autosegment" || realaction == "cnnvideo-autoepisode" || realaction == "cnnvideo-episode") PubSub.publish("cs_video-play", realdata.video);
                    else if (realaction == "cnnvideo-pause" && typeof realdata.video.paused !== "undefined" && realdata.video.paused == true) PubSub.publish("cs_video-pause", realdata.video);
                    else if (realaction == "cnnvideo-pause" && typeof realdata.video.paused !== "undefined" &&
                        realdata.video.paused == false) PubSub.publish("cs_video-resume", realdata.video);
                    else if (realaction == "cnnvideo-complete") PubSub.publish("cs_video-complete", realdata.video)
                } catch (e) {}
            };
            window.trackVideoEvent = function(data, event, playerid) {
                try {
                    if (event !== "cnnvideo-progress") {
                        setJSMDVideoEvent(event, data);
                        var currVidObj = data;
                        currVidObj.playerid = playerid;
                        trackMetrics({
                            type: event,
                            data: {
                                video: currVidObj
                            }
                        })
                    }
                } catch (e) {}
            };
            window.sendInteractionEvent = function(event, data) {
                try {
                    trackMetrics({
                        type: event,
                        data: {
                            interaction: data
                        }
                    })
                } catch (e) {}
            };
            window.sendHP10Interaction = function(data) {
                sendInteractionEvent("hp10-interaction", "10minpreview:" + data)
            };
            window.sendGameInteraction = function(event, info) {
                try {
                    trackMetrics({
                        type: event,
                        data: {
                            value: info
                        }
                    })
                } catch (e) {}
            };
            window.sendVideoClick = function(info, event) {
                try {
                    trackMetrics({
                        type: event,
                        data: {
                            value: info
                        }
                    })
                } catch (e) {}
            };
            window.sendVideoEvent = function(data, event, playerid) {
                try {
                    var currVidObj = window.JSON.parse(data);
                    currVidObj.playerid = playerid;
                    trackMetrics({
                        type: event,
                        data: {
                            video: currVidObj
                        }
                    })
                } catch (e) {}
            };
            window.sendVideo2Event = function(data, event, playerid) {
                try {
                    var currVidObj = data;
                    currVidObj.playerid = playerid;
                    trackMetrics({
                        type: event,
                        data: {
                            video: currVidObj
                        }
                    })
                } catch (e) {}
            };
            window.sendAudioEvent = function(data, event, id) {
                try {
                    var action = event.type || "";
                    if (action == "audio-start") PubSub.publish("audio-start", data);
                    else if (action == "audio-autostart") PubSub.publish("audio-autostart", data);
                    else if (action == "audio-ten") PubSub.publish("audio-ten", data);
                    else if (action == "audio-twentyfive") PubSub.publish("audio-twentyfive",
                        data);
                    else if (action == "audio-fifty") PubSub.publish("audio-fifty", data);
                    else if (action == "audio-seventyfive") PubSub.publish("audio-seventyfive", data);
                    else if (action == "audio-complete") PubSub.publish("audio-complete", data)
                } catch (e) {}
            };
            window.sendNewsPulse = function(data) {
                try {
                    trackMetrics({
                        type: "dynamic-newsPulseOmniCall",
                        data: {
                            newspulse: {
                                query: data
                            }
                        }
                    })
                } catch (e) {}
            };
            window.sendHTML5Event = function(data, event) {
                if (data.contentType == "audio") trackMetrics("audio-start", data.headline, "adbp-audio");
                else {
                    data.metas = {
                        branding: "ireport"
                    };
                    try {
                        trackMetrics({
                            type: event,
                            data: {
                                video: data
                            }
                        })
                    } catch (e) {}
                }
            };
            window.sendOpenStoryPerspective = function(data) {
                try {
                    trackMetrics({
                        type: "ireport-openstory",
                        data: {
                            openstory: data
                        }
                    })
                } catch (e) {}
            }
        }, 2988688, 578909);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            window._jsmd = window._jsmd || {
                init: function() {
                    this.mdata = {
                        business: {
                            cnn: {
                                page: {
                                    author: Bootstrapper.Util.getCNNAuthor(),
                                    branding_content_partner: Bootstrapper.Util.getCNNBrandingPartner(),
                                    section: [Bootstrapper.Util.getCNNSection(0), Bootstrapper.Util.getCNNSection(1)]
                                }
                            }
                        }
                    };
                    return this
                },
                send: function() {
                    if (Bootstrapper.Util.isUnderscoredPage()) window.trackPageView()
                },
                trackMetrics: function(action,
                    data, map) {
                    setTimeout(function() {
                        window.trackMetrics(action, data)
                    }, 100)
                },
                plugin: {
                    gQuery: function(name) {
                        return Bootstrapper.getQueryParam(name)
                    },
                    gCNNVideoCollection: function() {
                        return Bootstrapper.getCNNVideoCollection()
                    }
                }
            }
        }, 2988692, 591548);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.AF.push(["push", "SiteCatalyst", "ns", "s"]);
            Bootstrapper.AF.push(["join", "s", "pre", [
                ["events", function anon() {
                    var rval = Bootstrapper.Util.getCNNBrandingPartner();
                    var tt = "";
                    var cctype = "";
                    if (typeof window.CNN !== "undefined" && typeof window.CNN.omniture !== "undefined" && typeof window.CNN.omniture.template_type !== "undefined") tt = window.CNN.omniture.template_type;
                    if (typeof window.CNN !==
                        "undefined" && typeof window.CNN.omniture !== "undefined" && typeof window.CNN.omniture.cap_content_type !== "undefined") cctype = window.CNN.omniture.cap_content_type;
                    var events = "";
                    if (rval == "" || rval == "nvs" || rval == "no value set" || rval == "no-value-set") events = "event26";
                    else events = "event21,event26";
                    if (tt == "article" || cctype == "article") events = events + ",event39";
                    return events
                }],
                ["prop35", function anon() {
                    return Bootstrapper.Util.getCNNCodeVersion()
                }],
                ["prop2", function anon() {
                    return Bootstrapper.Util.getCNNAuthor()
                }],
                ["pageName", function anon() {
                    return Bootstrapper.Util.getCNNPageName()
                }],
                ["prop10", function anon() {
                    var rval = Bootstrapper.Util.getCNNDaysSinceLastPublish("a");
                    var etype = ["content:", "other:live story"];
                    var rttype = Bootstrapper.Util.getCNNTemplateType("long");
                    var result = false;
                    for (var i in etype)
                        if (rttype.indexOf(etype[i]) != -1) result = true;
                    if (result) return rval;
                    else return ""
                }],
                ["prop26", function anon() {
                    return Bootstrapper.Util.getCNNBaseURL()
                }],
                ["prop44", function anon() {
                    return Bootstrapper.Util.getCNNSourceID()
                }],
                ["prop43", function anon() {
                    return Bootstrapper.Util.getCNNPostID()
                }],
                ["prop50", function anon() {
                    return Bootstrapper.Util.getCNNPostTitle()
                }],
                ["eVar22", function anon() {
                    var rval = "0";
                    var ttype = "";
                    try {
                        if (CNN && CNN.omniture && CNN.omniture.video_opportunity) rval = CNN.omniture.video_opportunity;
                        ttype = Bootstrapper.Util.getCNNTemplateType("long");
                        if (ttype.indexOf("adbp:index") > -1) rval = ""
                    } catch (e) {}
                    return rval
                }],
                ["prop14", function anon() {
                    return Bootstrapper.Util.getCNNBrandingSocial()
                }],
                ["prop13", function anon() {
                    return Bootstrapper.Util.getCNNCAPContentType()
                }],
                ["prop16", function anon() {
                    var rval = Bootstrapper.Util.getCNNPublishDate();
                    var etype = ["content:", "other:live story"];
                    var rttype = Bootstrapper.Util.getCNNTemplateType("long");
                    var result = false;
                    for (var i in etype)
                        if (rttype.indexOf(etype[i]) != -1) result = true;
                    if (result) return rval;
                    else return ""
                }],
                ["prop6", function anon() {
                    var rval = "";
                    if (typeof window.CNN !== "undefined" && typeof window.CNN.omniture !== "undefined" && typeof window.CNN.omniture.gallery_name !== "undefined") {
                        rval = window.CNN.omniture.gallery_name;
                        rval =
                            rval.toLowerCase()
                    }
                    return rval
                }],
                ["eVar44", function anon() {
                    var rval = "";
                    rval = Bootstrapper.Util.getCNNVertical();
                    return rval
                }],
                ["prop11", function anon() {
                    return Bootstrapper.Util.getCNNBrandingPartner()
                }],
                ["pageURL", function anon() {
                    return Bootstrapper.Util.getCNNPageURL()
                }],
                ["campaign", function anon() {
                    if (Bootstrapper.Util.isFBIAPage()) return "fbia";
                    return
                }],
                ["pageType", function anon() {
                    return Bootstrapper.Util.getCNNPageType()
                }],
                ["prop31", function anon() {
                    return Bootstrapper.Util.getCNNPageFranchise()
                }],
                ["prop33", function anon() {
                    return Bootstrapper.Util.getCNNContentType("adbp:none")
                }],
                ["channel", function anon() {
                    return Bootstrapper.Util.getCNNSection(0)
                }],
                ["server", function anon() {
                    return Bootstrapper.Util.getADBPURL("domain")
                }],
                ["eVar29", function anon() {
                    return Bootstrapper.Util.getADBPURL("domain")
                }],
                ["prop32", function anon() {
                    return Bootstrapper.Util.getCNNTemplateType("long")
                }],
                ["eVar36", function anon() {
                    return Bootstrapper.Util.getCNNKruxID()
                }],
                ["prop46", function anon() {
                    return Bootstrapper.Util.getCNNTransactionID()
                }],
                ["prop47", function anon() {
                    return Bootstrapper.Util.getCNNGUID()
                }],
                ["eVar44", function anon() {
                    return Bootstrapper.Util.getCNNPageVertical()
                }],
                ["prop51", function anon() {
                    return Bootstrapper.Util.getCNNWidgetLoad()
                }],
                ["prop64", function anon() {
                    return Bootstrapper.Util.getCNNUIEngagement()
                }],
                ["prop65", function anon() {
                    return Bootstrapper.Util.getCNNTopic()
                }],
                ["prop75", function anon() {
                    return Bootstrapper.Util.getCNNUserAuthState()
                }],
                ["prop56", function anon() {
                    return Bootstrapper.Util.getCNNOrientation()
                }],
                ["prop37", function anon() {
                    return Bootstrapper.Util.getCNNPlatform()
                }],
                ["prop30", function anon() {
                    return Bootstrapper.Util.getSiteSpecificSettings(1)
                }],
                ["prop8", function anon() {
                    return Bootstrapper.Util.getCNNVisitNumber(28)
                }],
                ["prop28", function anon() {
                    return Bootstrapper.Util.getCNNSection(1)
                }],
                ["prop23", function anon() {
                    return Bootstrapper.Util.getCNNPageHeadline()
                }],
                ["prop59", function anon() {
                    return Bootstrapper.Util.getCNNAdobeID()
                }],
                ["prop57", function anon() {
                    return Bootstrapper.Util.getCNNMVPD()
                }],
                ["prop49", function anon() {
                    return Bootstrapper.Util.getCNNPreviousPageName()
                }],
                ["prop4", function anon() {
                    return Bootstrapper.Util.getPageAttribution()
                }],
                ["eVar15", function anon() {
                    return Bootstrapper.Util.getCNNTrafficPartner("tryThing01")
                }]
            ]])
        }, 3011654, 578569);
        Bootstrapper.bindDependencyImmediate(function() {
                var Bootstrapper = window["Bootstrapper"];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                Bootstrapper.isPodCast = function() {
                    var podcast = "audio clip";
                    if (window.location.pathname.indexOf("podcast") > -1) podcast = "podcast";
                    return podcast
                };
                PubSub.subscribe("audio-start", function(data) {
                    var a = data.audio || {};
                    s.linkTrackVars = "events,prop1,eVar1,prop4,eVar4,prop7,eVar7,prop11,eVar11,prop14,eVar14,prop16,eVar16,eVar23,eVar26,eVar27,eVar28,prop29,eVar41,eVar29,prop30,eVar30,prop31,eVar31,prop32,eVar32,prop33,eVar33,prop35,eVar35,prop37,eVar37,eVar42,prop46,eVar46,prop47,eVar47,prop54,eVar54,prop59,eVar59,list1,eVar67,prop73,eVar73,list2";
                    s.linkTrackEvents = "event11";
                    s.events = "event11";
                    s.prop1 = Bootstrapper.isPodCast();
                    s.eVar1 = "D\x3dc1";
                    s.prop29 = a.title;
                    s.eVar41 = "D\x3dc29";
                    s.prop33 = "other:audio";
                    s.eVar33 = "D\x3dc33";
                    s.eVar42 = a.id;
                    s.eVar67 = a.state + "|" + (a.status ? a.status : "nvs") + "|" + (a.position ? a.position : "inline");
                    s.tl(this, "o", "audio-start:" + a.id);
                    s.clearVars()
                });
                PubSub.subscribe("audio-autostart", function(data) {
                    var a = data.audio || {};
                    s.linkTrackVars = "events,prop1,eVar1,prop4,eVar4,prop7,eVar7,prop11,eVar11,prop14,eVar14,prop16,eVar16,eVar23,eVar26,eVar27,eVar28,prop29,eVar41,eVar29,prop30,eVar30,prop31,eVar31,prop32,eVar32,prop33,eVar33,prop35,eVar35,prop37,eVar37,eVar42,prop46,eVar46,prop47,eVar47,prop54,eVar54,prop59,eVar59,list1,eVar67,prop73,eVar73,list2";
                    s.linkTrackEvents = "event11";
                    s.events = "event11";
                    s.prop1 = Bootstrapper.isPodCast();
                    s.eVar1 = "D\x3dc1";
                    s.prop29 = a.title;
                    s.eVar41 = "D\x3dc29";
                    s.prop33 = "other:audio";
                    s.eVar33 = "D\x3dc33";
                    s.eVar42 = a.id;
                    s.eVar67 = a.state + "|" + (a.status ? a.status : "nvs") + "|" + (a.position ? a.position : "inline");
                    s.tl(this, "o", "audio-start:" + a.id);
                    s.clearVars()
                });
                PubSub.subscribe("audio-ten", function(data) {
                    var a = data.audio || {};
                    s.linkTrackVars = "events,eVar1,eVar4,eVar7,eVar11,eVar14,eVar16,eVar23,eVar26,eVar27,eVar28,eVar41,eVar29,eVar30,eVar31,eVar32,eVar33,prop35,eVar35,eVar37,eVar42,prop46,eVar46,prop47,eVar47,prop54,eVar54,prop59,eVar59,list1,eVar67,eVar73,list2";
                    s.linkTrackEvents = "event82,event87";
                    s.events = "event82,event87";
                    s.eVar1 = Bootstrapper.isPodCast();
                    s.eVar4 = s.prop4;
                    s.prop4 = "";
                    s.eVar7 = s.prop7;
                    s.prop7 = "";
                    s.eVar11 = s.prop11;
                    s.prop11 = "";
                    s.eVar14 = s.prop14;
                    s.prop14 = "";
                    s.eVar16 = s.prop16;
                    s.prop16 = "";
                    s.eVar27 = s.channel;
                    s.channel = "";
                    s.eVar28 = s.prop28;
                    s.prop28 = "";
                    s.eVar41 = a.title;
                    s.eVar30 = s.prop30;
                    s.prop30 = "";
                    s.eVar31 = s.prop31;
                    s.prop31 = "";
                    s.eVar32 = s.prop32;
                    s.prop32 = "";
                    s.eVar33 = "other:audio";
                    s.eVar37 = s.prop37;
                    s.prop37 = "";
                    s.eVar42 = a.id;
                    s.eVar67 = a.state + "|" + (a.status ?
                        a.status : "nvs") + "|" + (a.position ? a.position : "inline");
                    s.eVar73 = s.prop73;
                    s.prop73 = "";
                    s.tl(this, "o", "audio-ten:" + a.id);
                    s.clearVars()
                });
                PubSub.subscribe("audio-twentyfive", function(data) {
                    var a = data.audio || {};
                    s.linkTrackVars = "events,eVar1,eVar4,eVar7,eVar11,eVar14,eVar16,eVar23,eVar26,eVar27,eVar28,eVar41,eVar29,eVar30,eVar31,eVar32,eVar33,prop35,eVar35,eVar37,eVar42,prop46,eVar46,prop47,eVar47,prop54,eVar54,prop59,eVar59,list1,eVar67,eVar73,list2";
                    s.linkTrackEvents = "event83,event87";
                    s.events = "event83,event87";
                    s.eVar1 = Bootstrapper.isPodCast();
                    s.eVar4 = s.prop4;
                    s.prop4 = "";
                    s.eVar7 = s.prop7;
                    s.prop7 = "";
                    s.eVar11 = s.prop11;
                    s.prop11 = "";
                    s.eVar14 = s.prop14;
                    s.prop14 = "";
                    s.eVar16 = s.prop16;
                    s.prop16 = "";
                    s.eVar27 = s.channel;
                    s.channel = "";
                    s.eVar28 = s.prop28;
                    s.prop28 = "";
                    s.eVar41 = a.title;
                    s.eVar30 = s.prop30;
                    s.prop30 = "";
                    s.eVar31 = s.prop31;
                    s.prop31 = "";
                    s.eVar32 = s.prop32;
                    s.prop32 = "";
                    s.eVar33 = "other:audio";
                    s.eVar37 = s.prop37;
                    s.prop37 = "";
                    s.eVar42 = a.id;
                    s.eVar67 = a.state + "|" + (a.status ? a.status : "nvs") + "|" + (a.position ? a.position : "inline");
                    s.tl(this,
                        "o", "audio-twentyfive:" + a.id);
                    s.clearVars()
                });
                PubSub.subscribe("audio-fifty", function(data) {
                    var a = data.audio || {};
                    s.linkTrackVars = "events,eVar1,eVar4,eVar7,eVar11,eVar14,eVar16,eVar23,eVar26,eVar27,eVar28,eVar41,eVar29,eVar30,eVar31,eVar32,eVar33,prop35,eVar35,eVar37,eVar42,prop46,eVar46,prop47,eVar47,prop54,eVar54,prop59,eVar59,list1,eVar67,eVar73,list2";
                    s.linkTrackEvents = "event84,event87";
                    s.events = "event84,event87";
                    s.eVar1 = Bootstrapper.isPodCast();
                    s.eVar4 = s.prop4;
                    s.prop4 = "";
                    s.eVar7 = s.prop7;
                    s.prop7 =
                        "";
                    s.eVar11 = s.prop11;
                    s.prop11 = "";
                    s.eVar14 = s.prop14;
                    s.prop14 = "";
                    s.eVar16 = s.prop16;
                    s.prop16 = "";
                    s.eVar27 = s.channel;
                    s.channel = "";
                    s.eVar28 = s.prop28;
                    s.prop28 = "";
                    s.eVar41 = a.title;
                    s.eVar30 = s.prop30;
                    s.prop30 = "";
                    s.eVar31 = s.prop31;
                    s.prop31 = "";
                    s.eVar32 = s.prop32;
                    s.prop32 = "";
                    s.eVar33 = "other:audio";
                    s.eVar37 = s.prop37;
                    s.prop37 = "";
                    s.eVar42 = a.id;
                    s.eVar67 = a.state + "|" + (a.status ? a.status : "nvs") + "|" + (a.position ? a.position : "inline");
                    s.tl(this, "o", "audio-fifty:" + a.id);
                    s.clearVars()
                });
                PubSub.subscribe("audio-seventyfive",
                    function(data) {
                        var a = data.audio || {};
                        s.linkTrackVars = "events,eVar1,eVar4,eVar7,eVar11,eVar14,eVar16,eVar23,eVar26,eVar27,eVar28,eVar41,eVar29,eVar30,eVar31,eVar32,eVar33,prop35,eVar35,eVar37,eVar42,prop46,eVar46,prop47,eVar47,prop54,eVar54,prop59,eVar59,list1,eVar67,eVar73,list2";
                        s.linkTrackEvents = "event85,event87";
                        s.events = "event85,event87";
                        s.eVar1 = Bootstrapper.isPodCast();
                        s.eVar4 = s.prop4;
                        s.prop4 = "";
                        s.eVar7 = s.prop7;
                        s.prop7 = "";
                        s.eVar11 = s.prop11;
                        s.prop11 = "";
                        s.eVar14 = s.prop14;
                        s.prop14 = "";
                        s.eVar16 = s.prop16;
                        s.prop16 = "";
                        s.eVar27 = s.channel;
                        s.channel = "";
                        s.eVar28 = s.prop28;
                        s.prop28 = "";
                        s.eVar41 = a.title;
                        s.eVar30 = s.prop30;
                        s.prop30 = "";
                        s.eVar31 = s.prop31;
                        s.prop31 = "";
                        s.eVar32 = s.prop32;
                        s.prop32 = "";
                        s.eVar33 = "other:audio";
                        s.eVar37 = s.prop37;
                        s.prop37 = "";
                        s.eVar42 = a.id;
                        s.eVar67 = a.state + "|" + (a.status ? a.status : "nvs") + "|" + (a.position ? a.position : "inline");
                        s.eVar73 = s.prop73;
                        s.prop73 = "";
                        s.tl(this, "o", "audio-seventyfive:" + a.id);
                        s.clearVars()
                    });
                PubSub.subscribe("audio-complete", function(data) {
                    var a = data.audio || {};
                    s.linkTrackVars =
                        "events,eVar1,eVar4,eVar7,eVar11,eVar14,eVar16,eVar23,eVar26,eVar27,eVar28,eVar41,eVar29,eVar30,eVar31,eVar32,eVar33,prop35,eVar35,eVar37,eVar42,prop46,eVar46,prop47,eVar47,prop54,eVar54,prop59,eVar59,list1,eVar67,eVar73,list2";
                    s.linkTrackEvents = "event86,event87";
                    s.events = "event86,event87";
                    s.eVar1 = Bootstrapper.isPodCast();
                    s.eVar4 = s.prop4;
                    s.prop4 = "";
                    s.eVar7 = s.prop7;
                    s.prop7 = "";
                    s.eVar11 = s.prop11;
                    s.prop11 = "";
                    s.eVar14 = s.prop14;
                    s.prop14 = "";
                    s.eVar16 = s.prop16;
                    s.prop16 = "";
                    s.eVar27 = s.channel;
                    s.channel = "";
                    s.eVar28 =
                        s.prop28;
                    s.prop28 = "";
                    s.eVar41 = a.title;
                    s.eVar30 = s.prop30;
                    s.prop30 = "";
                    s.eVar31 = s.prop31;
                    s.prop31 = "";
                    s.eVar32 = s.prop32;
                    s.prop32 = "";
                    s.eVar33 = "other:audio";
                    s.eVar37 = s.prop37;
                    s.prop37 = "";
                    s.eVar42 = a.id;
                    s.eVar67 = a.state + "|" + (a.status ? a.status : "nvs") + "|" + (a.position ? a.position : "inline");
                    s.eVar73 = s.prop73;
                    s.prop73 = "";
                    s.tl(this, "o", "audio-complete:" + a.id);
                    s.clearVars()
                });
                PubSub.subscribe("audio-pause", function(data) {});
                PubSub.subscribe("audio-buffer", function(data) {});
                PubSub.subscribe("audio-scrub", function(data) {})
            },
            2988691, [3011656, 2988688], 580848, [578568, 578909]);
        Bootstrapper.bindImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.AF = function() {
                var g = {
                    data: {},
                    _dataConfig: {},
                    logHistory: [],
                    debug: !0,
                    dataObj: function(a) {
                        var b = a ? [] : "";
                        b.finalized = !1;
                        b.type = a;
                        return b
                    },
                    validateInput: function(a) {
                        if ("object" !== typeof a || "number" !== typeof a.length) return this.log("Error, input must be type Array");
                        /set|push|call|eval|finalize|join/.test(a[0]) || this.log("Error, '" + a[0] + "' is not a valid command");
                        return !0
                    },
                    storeData: function(a, b, d, c, e) {
                        e = this.getConfig(b, d, e);
                        b = this.data[b][d];
                        if (e.finalized) return this.log("Error, cannot modify finalized key '" + d + "'"), b;
                        if ("undefined" !== typeof b && e.multi) return "join" == a ? b = b.concat(c) : b.push(c), b;
                        e.multi ? (d = [c], "join" == a && (d = [].concat(c))) : d = c;
                        return d
                    },
                    getConfig: function(a, b, d, c) {
                        a = this._dataConfig[a] || {};
                        c = {};
                        return "undefined" == typeof a[b] ? (c.multi = d, c.finalized = !1, c) : a[b]
                    },
                    store: function(a, b, d, c, e) {
                        this.data[b] = this.data[b] || {};
                        this.data[b][d] = this.storeData(a,
                            b, d, c, e);
                        return this.data[b][d]
                    },
                    parseCode: function(a) {
                        return ((a || function() {}) + "").replace(/^function\s*\(\s*\)\s*\{|\}$/g, "")
                    },
                    callFn: function(a, b, d, c) {
                        if ("function" == typeof a)
                            if (d) "undefined" != typeof window.execScript ? window.execScript(this.parseCode(a)) : eval.call(window, this.parseCode(a));
                            else return a.apply(window, c);
                        else if ("function" == typeof this.data[a][b])
                            if (d) "undefined" != typeof window.execScript ? window.execScript(this.parseCode(this.data[a][b])) : eval.call(window, this.parseCode(this.data[a][b]));
                            else return c = "object" == typeof c && "number" == typeof c.length ? c : [], this.data[a][b].apply(this.data[a], c);
                        else return this.log("Error, '" + b + "' is not a function")
                    },
                    parse: function(a) {
                        if (this.validateInput(a)) {
                            a = Array.prototype.slice.call(a, 0);
                            var b = a.shift(),
                                d = a.shift(),
                                c = a.shift(),
                                e = a[0];
                            if (/set|push|join/.test(b)) return this.store(b, d, c, e, /push|join/.test(b));
                            if (/call|eval/.test(b)) return this.callFn(d, c, "eval" == b, a);
                            if ("finalize" == b) return a = this._dataConfig[d] = this._dataConfig[d] || {}, a = a[c] || {
                                    multi: !1
                                },
                                a.finalized = !0, this._dataConfig[d][c] = a
                        }
                    },
                    log: function(a) {
                        this.logHistory.push(a);
                        return this.debug && "object" == typeof console ? console.log(a) && !1 : !1
                    }
                };
                if ("object" == typeof Bootstrapper.AF && "[object Array]" !== Object.prototype.toString.call(Bootstrapper.AF)) return Bootstrapper.AF;
                if ("[object Array]" === Object.prototype.toString.call(Bootstrapper.AF))
                    for (var h = Bootstrapper.AF, f = 0; f < h.length; f++) try {
                        g.parse(h[f])
                    } catch (k) {}
                return {
                    push: function(a) {
                        return g.parse(a)
                    }
                }
            }();
            (function() {
                window._log = window._log ||
                    function() {};
                var b = Bootstrapper,
                    d = b.data;
                if (d) {
                    d.calculated = {
                        data: {},
                        top: function(g, c) {
                            var c = c || ":",
                                a = [],
                                s = [],
                                r = [],
                                b;
                            if (g && ~g.indexOf(c)) {
                                b = Bootstrapper.data.calculated.all || {};
                                for (i in b) ~i.indexOf(g) && (a[i.split(c)[1].replace(/_/g, " ")] = b[i])
                            } else {
                                b = d.calculated.get(g).split(",");
                                for (i = 0; i < b.length; ++i) {
                                    if (!a[b[i]]) a[b[i]] = 0;
                                    ++a[b[i]]
                                }
                            }
                            for (i in a) s.push([i, a[i]]);
                            s.sort(function(a, b) {
                                return b[1] - a[1]
                            });
                            for (var i = 0, l = s.length; i < l; i++)
                                if (s[i][0] && s[i][0] != "") r.push(s[i][0]);
                            return r.join(",")
                        },
                        max: function(g,
                            c) {
                            return d.calculated.top(g, c).split(",")[0]
                        },
                        rec: function(g, c, b) {
                            b = "number" == typeof b ? b : 10;
                            var t = d.calculated,
                                a = t.get,
                                e = t.set,
                                a = a(g) || 0;
                            if (0 == a) return e(g, c), c;
                            a = a.split(",");
                            a.length == b && a.shift();
                            a.push(c);
                            a = a.join(",");
                            return e(g, a), a
                        },
                        avg: function(a, e) {
                            a = a.split(e || ",") || "";
                            if ("" != a && "object" == typeof a) {
                                if (1 < a.length) {
                                    var d = a.length,
                                        b = 0,
                                        c;
                                    for (i = 0; i < d; i++) c = parseInt("." == a[i].charAt(0) ? "0" + a[i] : a[i]), "number" == typeof c && (b += c);
                                    return Math.round(b / d)
                                }
                                return a.join("")
                            }
                            return ""
                        }
                    };
                    d.calculateData =
                        function(n, fn) {
                            try {
                                var $$LS = d.local;
                                var c = d.calculated,
                                    $$LS = $$LS.utils,
                                    $all = $$LS.all(),
                                    $name = n,
                                    $get = $$LS.get,
                                    $set = function(a, b) {
                                        $$LS.set(a, b);
                                        if (a.charAt(0) != "_") {
                                            d.calculated.data[a.replace("data.", "")] = b;
                                            _log("***PROFILE-UPDATED:" + a + "\x3d" + b)
                                        }
                                    },
                                    $value = $get(n) || "",
                                    $data = d.extract,
                                    $sess = $get("_data.session") || "",
                                    $session = $sess.split("-")[0],
                                    $time = (new Date).getTime(),
                                    $url = window.location.href,
                                    $top = c.top,
                                    $max = c.max,
                                    $record = c.rec,
                                    $avg = c.avg,
                                    $first = ($get("_data.firstPageOfSession") || "") == "true" ? !0 : !1;
                                c.get = $get;
                                c.set = $set;
                                c.all = $all;
                                if (~$sess.indexOf("-")) {
                                    var ts = $sess.split("-")[1];
                                    if ($time - ts > 18E5) {
                                        $set("_data.lastSession", $session);
                                        $sess = $time + "-" + $time;
                                        $session = $time
                                    } else $sess = $session + "-" + $time
                                } else {
                                    $sess = $time + "-" + $time;
                                    $session = $time;
                                    $set("_data.lastSession", $session)
                                }
                                $set("_data.session", $sess);
                                var $lastSession = $get("_data.lastSession") || $session;
                                if (n) {
                                    try {
                                        $val = fn.call(window, $name, $value, $all, $get, $set, $data, $session, $lastSession, $time, $url, $top, $max, $record, $avg, $first)
                                    } catch (e) {
                                        $val =
                                            $value
                                    }
                                    $val = $val == null || $val == undefined || typeof $val == "object" ? "" : $val;
                                    $set($name, $val);
                                    return $val
                                } else {
                                    var C = d.calculateData;
                                    if ($get("_data.visitStamp") != $session) C("data.visit", function(n, v, a, g, s, d, e, l, t, u, p, m, r, w, f) {
                                        var v = v || 0,
                                            x = 12,
                                            pv = g("data.sessionPageViews") || "",
                                            ts = g("data.timeOnSite") || "";
                                        s("data.landingPage", u);
                                        s("data.lastExitPage", g("_data.currPage") || "");
                                        s("data.uuid", d("uuid", "cookie") || "");
                                        r("_data.avgTime", g("data.timeOnSite") || "");
                                        r("_data.avgPageViews", g("data.sessionPageViews") ||
                                            "");
                                        if (l != "" && pv != "" && ts != "") r("_data.engagementTrend", l + "|" + pv + "|" + ts);
                                        s("data.averageTimeOnSite", w(g("_data.avgTime")) || "");
                                        s("data.averageSessionPageViews", w(g("_data.avgPageViews")) || "");
                                        s("data.visitorType", e != l ? "Returning" : "New");
                                        s("data.visitorGroup", g("data.visitorGroup") || Math.ceil(Math.random() * x));
                                        s("data.daysSinceLastVisit", e != l ? parseInt(((e - l) / (24 * 60 * 60 * 1E3)).toFixed(0)) : 0);
                                        s("_data.visitStamp", e);
                                        return ++v
                                    });
                                    C("data.sessionPageViews", function(n, v, a, g, s, d, e, l, t, u, p, m, r, w, f) {
                                        var v = v ||
                                            0,
                                            p = g("data.totalPageViews") || 0;
                                        s("data.totalPageViews", ++p);
                                        s("data.timeOnSite", ((t - e) / (60 * 1E3)).toFixed(0));
                                        s("_data.currPage", u);
                                        if (g("_data.sessionStamp") != e) {
                                            s("_data.sessionStamp", e);
                                            s("_data.firstPageOfSession", "true");
                                            return 1
                                        } else {
                                            s("_data.firstPageOfSession", "false");
                                            return ++v
                                        }
                                    })
                                }
                                if (window.performance && performance.timing) {
                                    var timing = performance.timing,
                                        websiteResponse = timing.responseEnd - timing.fetchStart,
                                        domInteractive = timing.domInteractive - timing.navigationStart,
                                        domLoaded = timing.domContentLoadedEventEnd -
                                        timing.navigationStart,
                                        fullyLoaded = timing.loadEventEnd - timing.navigationStart;
                                    $set("data.timingInitialResponse", websiteResponse);
                                    $set("data.timingDOMInteractive", domInteractive);
                                    $set("data.timingDOMLoaded", domLoaded);
                                    $set("data.timingFullyLoaded", fullyLoaded)
                                }
                            } catch (e) {
                                return "unsupported"
                            }
                        };
                    d.calculateData()
                }
            })();
            Bootstrapper.Cookies = function() {
                return {
                    domain: "" || location.hostname,
                    get: function(a, c) {
                        for (var b = document.cookie.split(";"), d = 0; d < b.length; d++) {
                            var e = b[d].replace(/^\s+/, "").split("\x3d");
                            if (e[0] == a) return c ? e[1] : decodeURIComponent(e[1])
                        }
                        return ""
                    },
                    set: function(a, c, b) {
                        document.cookie = a + "\x3d" + encodeURIComponent(c) + (b ? ";expires\x3d" + b : "") + ";path\x3d/;domain\x3d" + Bootstrapper.Cookies.domain + (/https:/.test(location.protocol) === true ? ";secure" : ";");
                        return Bootstrapper.Cookies.get(a) == c
                    },
                    test: function(a) {
                        return this.get(a) ? !0 : !1
                    }
                }
            }();
            Bootstrapper.getQueryParam = function(key, loc) {
                if (!this.params || loc) {
                    var search = loc || window.location.search;
                    var params = search.replace(/^\?/, ""),
                        paramObj = {};
                    params =
                        params.split("\x26");
                    for (var i = 0; i < params.length; i++) {
                        var t = params[i].split("\x3d");
                        paramObj[t[0]] = t[1]
                    }
                    if (!loc) this.params = paramObj;
                    else return paramObj[key] || ""
                }
                return this.params[key] || ""
            };
            Bootstrapper.Util = function() {
                return {
                    loadCustomVariables: function() {
                        window.is_expansion = true;
                        Bootstrapper.CNNBuildVersion = 9;
                        Bootstrapper.subscribersReady = false;
                        Bootstrapper.hpt_set = 0;
                        Bootstrapper.buffer_count = 0;
                        Bootstrapper.is_podcast = 0;
                        Bootstrapper.is_scrubbed = false;
                        if (window.cnn_metadata) window.is_expansion =
                            false
                    },
                    isSearchPage: function() {
                        return window.location.pathname === "/search/"
                    },
                    isRefreshPage: function() {
                        return Bootstrapper.getQueryParam("refresh")
                    },
                    isUnderscoredPage: function() {
                        return window.cnn_d && cnn_d.omniture && cnn_d.omniture.section && cnn_d.omniture.section[0] === "cnn-underscored"
                    },
                    isElectionPage: function() {
                        return window.CNN && CNN.omniture && CNN.omniture.section && CNN.omniture.section[0] === "politics" && CNN.omniture.section[1].indexOf("election") !== -1
                    },
                    isLiveStoryPage: function() {
                        return window.location.pathname.indexOf("live-news") !==
                            -1
                    },
                    isSpeedyPage: function() {
                        return window.location.hostname.indexOf("-m.cnn.com") !== -1
                    },
                    isDynamicPage: function() {
                        return this.isSearchPage() || this.isRefreshPage() || this.isUnderscoredPage() || this.isElectionPage() || this.isLiveStoryPage() || this.isSpeedyPage()
                    },
                    isFavePage: function() {
                        return window.location.hostname.indexOf("fave.api.cnn.io") !== -1 || window.location.hostname.indexOf("fave-api.cnn.com") !== -1
                    },
                    isFBIAPage: function() {
                        try {
                            if (window.CNN.omniture.fbia && (window.CNN.omniture.fbia === true || window.CNN.omniture.fbia ===
                                    "true")) return true;
                            else return false
                        } catch (e) {
                            return false
                        }
                    },
                    isEmpty: function(obj) {
                        for (var key in obj)
                            if (obj.hasOwnProperty(key)) return false;
                        return true
                    },
                    getVideoMetadata: function(data) {
                        if (!this.isEmpty(data.video)) return data.video;
                        else return data
                    },
                    sendImagePixel: function(url) {
                        var image = new Image;
                        image.src = url;
                        image.style.display = "none";
                        image.width = 1;
                        image.height = 1
                    },
                    getCookie: function(param, flag) {
                        var r = Bootstrapper.Cookies.get(param);
                        if (flag === "c" || flag === 1) Bootstrapper.Cookies.set(param, "-", -1E3);
                        return unescape(r)
                    },
                    getCNNBusinessName: function() {
                        return "cnn"
                    },
                    getCNNDomainName: function() {
                        var hostname = window.location.hostname.toLowerCase();
                        hostname = hostname.replace("www.", "");
                        return hostname
                    },
                    getCNNPageURL: function() {
                        var rval = window.location.href.toLowerCase(),
                            loc = "";
                        if (Bootstrapper.Util.isFBIAPage()) {
                            loc = rval;
                            rval = "";
                            if (loc.indexOf("ofs\x3dfbia") > -1) loc = loc.replace("ofs\x3dfbia", "csr\x3dfbiacnn");
                            var jj = loc.indexOf("?") != -1 ? "\x26" : "?";
                            if (loc.indexOf("csr\x3dfbiacnn") > -1) rval = loc + "";
                            else rval =
                                loc + jj + "csr\x3dfbiacnn"
                        }
                        return rval
                    },
                    getCNNPageType: function() {
                        var rval = "";
                        try {
                            var title = document.title.toLowerCase();
                            if (title.indexOf("page not found") !== -1 || Bootstrapper.Util.getCNNTemplateType() == "adbp:error" || title == "error") rval = "errorPage"
                        } catch (err) {}
                        return rval
                    },
                    getCNNAuthor: function() {
                        var rval = "";
                        if (window.is_expansion) {
                            try {
                                rval = window.cnn_d.omniture.cap_author
                            } catch (e) {}
                            try {
                                rval = window.CNN.omniture.cap_author
                            } catch (e) {}
                        } else {
                            rval = window.cnn_metadata.business.cnn.page.author;
                            if (!rval)
                                if (document.getElementsByName("AUTHOR").item(0)) rval =
                                    document.getElementsByName("AUTHOR").item(0).content;
                                else if (document.getElementsByName("author").item(0)) rval = document.getElementsByName("author").item(0).content
                        }
                        if (typeof rval === "undefined" || rval == "no-value-set" || rval == "nvs") rval = "";
                        return rval.toLowerCase()
                    },
                    getPageAttribution: function() {
                        var rval = "";
                        var ishptCookie = false;
                        var hptcookie = Bootstrapper.Util.getCookie("hpt");
                        var linkTrackingCookie = Bootstrapper.Util.getCookie("linkTracking");
                        var regex = new RegExp("^[A-Za-z0-9\x3d]+$");
                        if ((typeof linkTrackingCookie ==
                                "undefined" || linkTrackingCookie == "") && typeof hptcookie !== "undefined") ishptCookie = true;
                        var attributionCookie = linkTrackingCookie || hptcookie;
                        if (typeof attributionCookie != "undefined" && attributionCookie != "" && attributionCookie.indexOf("breaking:") != -1 || !regex.test(attributionCookie)) rval = attributionCookie;
                        else if (document.referrer.indexOf("cnn.com") !== -1) {
                            rval = Bootstrapper.getQueryParam("linkTracking") || Bootstrapper.getQueryParam("hpt");
                            try {
                                rval = rval.replace(/no\-value\-set/g, "")
                            } catch (e) {}
                            var prev_rval =
                                rval;
                            try {
                                if (attributionCookie) {
                                    rval = attributionCookie;
                                    if (attributionCookie.indexOf("_") === -1 && attributionCookie.indexOf("|") === -1 && typeof window.CNN.Utils.b64Decode(attributionCookie) !== "undefined") rval = window.CNN.Utils.b64Decode(attributionCookie)
                                }
                            } catch (e) {}
                            if (rval) Bootstrapper.hpt_set = 1;
                            else rval = prev_rval
                        }
                        if (window.is_expansion != 0) {
                            if (Bootstrapper.getQueryParam("cnnapp") && Bootstrapper.getQueryParam("cnnapp") != null) rval = "cnnapp:" + Bootstrapper.getQueryParam("cnnapp");
                            if (Bootstrapper.getQueryParam("eref") &&
                                Bootstrapper.getQueryParam("eref") != null) rval = "eref:" + Bootstrapper.getQueryParam("eref");
                            if (Bootstrapper.getQueryParam("iref") && Bootstrapper.getQueryParam("iref") != null) rval = "iref:" + Bootstrapper.getQueryParam("iref");
                            if (Bootstrapper.getQueryParam("refresh") && Bootstrapper.getQueryParam("refresh") != null) rval = "auto-refresh"
                        }
                        if (rval !== "") {
                            rval = rval.replace(/no-value-set/g, "nvs");
                            rval = rval.toLowerCase()
                        }
                        if (ishptCookie) document.cookie = "hpt\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 GMT; path\x3d/; domain\x3d.cnn.com;";
                        else document.cookie = "linkTracking\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 GMT; path\x3d/; domain\x3d.cnn.com;";
                        return rval
                    },
                    getCNNVisitNumber: function(rollday) {
                        rollday = rollday || 28;
                        var todaydate = (new Date).getTime();
                        if (typeof Storage !== "undefined") {
                            if (localStorage.startdate) {
                                if (sessionStorage.online) {
                                    var daysinceonline = Math.ceil((todaydate - sessionStorage.online) / 864E5);
                                    if (daysinceonline > 1) {
                                        localStorage.visittype = "repeat";
                                        localStorage.visitnum = Number(localStorage.visitnum) + 1;
                                        sessionStorage.online =
                                            todaydate
                                    }
                                } else {
                                    localStorage.visittype = "repeat";
                                    localStorage.visitnum = Number(localStorage.visitnum) + 1;
                                    sessionStorage.online = todaydate
                                }
                                var daysincestart = Math.ceil((todaydate - localStorage.startdate) / 864E5);
                                if (daysincestart > Number(rollday)) {
                                    localStorage.startdate = todaydate;
                                    localStorage.visittype = "new";
                                    localStorage.visitnum = 1
                                }
                            } else {
                                localStorage.startdate = todaydate;
                                localStorage.visittype = "new";
                                localStorage.visitnum = 1;
                                sessionStorage.online = todaydate
                            }
                            return localStorage.visittype + ":" + localStorage.visitnum
                        } else return "new:1"
                    },
                    getCNNCapMediaType: function() {
                        var rval = "nvs";
                        try {
                            if (window.CNN && window.CNN.omniture && window.CNN.omniture.cap_media_type)
                                if (window.CNN.omniture.cap_media_type === "no-value-set") rval = "nvs";
                                else rval = window.CNN.omniture.cap_media_type;
                            rval = rval.toLowerCase()
                        } catch (e) {}
                        return rval
                    },
                    getCNNPublishDate: function() {
                        var rval = "";
                        try {
                            rval = window.cnn_metadata.business.cnn.page.publish_date
                        } catch (e) {}
                        try {
                            if (window.CNN && window.CNN.omniture && window.CNN.omniture.publish_date && window.CNN.omniture.last_updated_date) rval =
                                window.CNN.omniture.publish_date + "|" + window.CNN.omniture.last_updated_date
                        } catch (e) {}
                        try {
                            rval = window.cnn_d.omniture.publish_date || rval
                        } catch (e) {}
                        return rval
                    },
                    getCNNDaysSinceLastPublish: function(d) {
                        var e = new Date;
                        var p;
                        var j;
                        if (d == "a") {
                            try {
                                d = window.cnn_metadata.business.cnn.page.publish_date
                            } catch (err) {}
                            try {
                                d = window.CNN.omniture.publish_date || d
                            } catch (err) {}
                            j = new Date(d)
                        } else if (d.toString().indexOf("/") != -1) {
                            p = d.split("/");
                            if (p[0].length != 4) {
                                p[2] = "20" + p[2];
                                j = new Date(p[2] + "/" + p[0] + "/" + p[1])
                            } else j =
                                new Date(d)
                        } else j = new Date(d);
                        var ONE_DAY = 1E3 * 60 * 60 * 24;
                        var date1_ms = e.getTime();
                        var date2_ms = j.getTime();
                        var difference_ms = Math.abs(date1_ms - date2_ms);
                        var days = Math.round(difference_ms / ONE_DAY);
                        if (isNaN(days)) return "";
                        if (window.is_expansion != 0) return Math.round(difference_ms / ONE_DAY).toString();
                        else if (window.is_expansion == 0 && typeof window.cnn_metadata.days_since_publish !== "undefined") try {
                            return window.cnn_metadata.days_since_publish
                        } catch (e) {}
                    },
                    getCNNBrandingPartner: function() {
                        var rval = "";
                        var bp =
                            "";
                        try {
                            rval = cnn_metadata.business.cnn.page.branding_partner ? cnn_metadata.business.cnn.page.branding_partner : window.cnnOmniPartner || ""
                        } catch (e) {}
                        try {
                            if (typeof window.CNN.omniture.branding_content_page != "undefined") {
                                bp = window.CNN.omniture.branding_content_page;
                                bp = bp.replace("default", "");
                                if (bp) rval = "p:" + bp
                            }
                        } catch (e) {}
                        try {
                            if (window.CNN.omniture.branding_gallery || bp && window.CNN.contentModel.analytics.pageTop.type === "gallery") rval = "g:" + (window.CNN.omniture.branding_gallery ? window.CNN.omniture.branding_gallery :
                                bp)
                        } catch (e) {}
                        try {
                            if (typeof window.CNN.omniture.template_type != "undefined" && window.CNN.omniture.template_type == "error") rval = ""
                        } catch (e) {}
                        return rval.toLowerCase()
                    },
                    getCNNCapContentType: function() {
                        var rval = "";
                        try {
                            if (window.CNN.contentModel && window.CNN.contentModel.analytics.pageTop.type === "gallery") rval = "gallery";
                            else rval = window.CNN.omniture.cap_content_type;
                            rval = rval.toLowerCase()
                        } catch (e) {
                            rval = ""
                        }
                        return rval
                    },
                    getCNNBrandingSocial: function() {
                        var rval = "";
                        try {
                            if (window.CNN && window.CNN.omniture)
                                if (window.CNN.omniture.fbia ===
                                    true) rval = window.CNN.omniture.branding_social
                        } catch (err) {}
                        var hostName = window.location.hostname;
                        if (hostName.indexOf("fave.api.cnn.io") != -1 || hostName.indexOf("fave-api.cnn.com") != -1) {
                            var pathName = window.location.pathname;
                            if (pathName.indexOf("/v1/amp") != -1) rval = "google amp";
                            if (pathName.indexOf("/v1/fav") != -1) rval = "embed"
                        }
                        rval = rval.toLowerCase();
                        return rval
                    },
                    getCNNTrafficPartner: function(tp) {
                        var rval = Bootstrapper.Cookies.get(tp);
                        return rval
                    },
                    getIreportgetMember: function() {
                        var irptMember = Bootstrapper.Util.getCNNAuthenticated("authid",
                            "displayname", "member", "anonymous", "NonMember", "?");
                        if (window.location.host.indexOf("politics") == -1 && window.is_expansion != 0) return irptMember;
                        else return null
                    },
                    getCNNPageImpression: function() {
                        var rval = window.cnnPSproducts || "";
                        var hptcookie = Bootstrapper.Util.getCookie("hpt2");
                        if (document.referrer.indexOf("cnn.com") > -1) try {
                            if (hptcookie) {
                                rval = hptcookie;
                                if (hptcookie.indexOf("_") == -1) rval = CNN.Utils.b64Decode(hptcookie)
                            }
                        } catch (e) {} else if (hptcookie) document.cookie = "hpt2\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 GMT; path\x3d/; domain\x3d.cnn.com;";
                        rval = rval.replace(/no-value-set/g, "nvs");
                        rval = rval.toLowerCase();
                        return rval
                    },
                    getCNNVideoOpportunity: function() {
                        var rval = "0";
                        var ttype = "";
                        try {
                            rval = window.cnn_metadata.business.cnn.page.video_embed_count
                        } catch (e) {}
                        try {
                            rval = window.CNN.omniture.video_opportunity || "0"
                        } catch (e) {}
                        ttype = Bootstrapper.Util.getCNNTemplateType();
                        if (ttype.indexOf("adbp:index") > -1) rval = "";
                        return rval
                    },
                    getCNNPageHeadline: function() {
                        var rval = "nvs",
                            tt = "";
                        try {
                            rval = window.CNN.omniture.headline;
                            tt = window.CNN.omniture.template_type
                        } catch (e) {}
                        try {
                            if (typeof window.cnn_d !=
                                "undefined" && typeof window.cnn_d.omniture != "undefined" && window.cnn_d.omniture.headline != "undefined") {
                                rval = window.cnn_d.omniture.headline;
                                tt = window.cnn_d.omniture.template_type
                            }
                        } catch (e) {}
                        try {
                            if (rval == "no-value-set" || tt == "specials" || tt == "section front" || tt == "index") return null;
                            rval = rval.toLowerCase()
                        } catch (e) {
                            rval = ""
                        }
                        return rval
                    },
                    getCNNPageName: function(pname) {
                        var rval = Bootstrapper.Util.getADBPPageName(pname);
                        var ttype = "";
                        try {
                            if (typeof window.CNN.omniture !== "undefined" && typeof window.CNN.omniture.template_type !==
                                "undefined") ttype = window.CNN.omniture.template_type
                        } catch (e) {
                            ttype = ""
                        }
                        try {
                            if (ttype === "" && typeof window.cnn_d.omniture === "undefined" && typeof window.cnn_d.omniture.template_type !== "undefined") ttype = window.cnn_d.omniture.template_type
                        } catch (e) {}
                        var arr = rval.split(":");
                        if (arr.length == 4) {
                            arr[2] = arr[2].replace(/-m$/, "");
                            arr[2] = arr[2].replace("www", "");
                            arr[2] = arr[2].replace("us", "");
                            arr[2] = arr[2].replace(/\.$/, "");
                            if (arr[2] === "") arr.splice(2, 1)
                        }
                        rval = arr.join(":");
                        if (window.is_expansion && rval.match(/cnn:o:/)) {
                            var pn = {
                                "index": "in",
                                "video": "v",
                                "videos": "v",
                                "blog": "b",
                                "blogs": "b",
                                "game": "g",
                                "games": "g",
                                "interactive": "it",
                                "content": "c",
                                "error": "err",
                                "section": "sf",
                                "section front": "sf",
                                "gallery": "ga",
                                "show": "sh",
                                "shows": "sh",
                                "special": "sp",
                                "specials": "sp",
                                "topic": "t",
                                "profile": "p",
                                "article": "c"
                            }[ttype];
                            if (pn) rval = rval.replace("cnn:o:", "cnn:" + pn + ":")
                        }
                        if (rval && rval.slice(-1) != "/") rval = rval + "/";
                        if (rval && rval.match(/h_[a-z0-9]+\/$/)) rval = rval.replace(/h_[a-z0-9]+\/$/, "");
                        return rval
                    },
                    getCNNBaseURL: function() {
                        var hostname =
                            window.location.hostname;
                        var pathname = window.location.pathname;
                        pathname = pathname.replace(/([^\/]+\.[^\/]+$)/, "");
                        return hostname + pathname
                    },
                    getCNNSection: function(position) {
                        var rval = "";
                        try {
                            if (window.is_expansion) {
                                for (var i = 0; i <= position; i++) {
                                    if (i > 0) rval += ":";
                                    try {
                                        var s1 = window.CNN.omniture.section[i];
                                        if (s1.indexOf(":") && s1.indexOf("electoral college map") > -1) {
                                            var c1 = s1.split(":");
                                            rval += c1[0];
                                            return rval
                                        }
                                    } catch (e) {}
                                    if (typeof window.CNN != "undefined" && typeof window.CNN.omniture != "undefined")
                                        if (i == 1 && !window.CNN.omniture.section[1]) {
                                            window.CNN.omniture.section[1] =
                                                "no value set";
                                            try {
                                                if (window.CNN.omniture.friendly_name.toLowerCase() == "ngtv") window.CNN.omniture.section[1] = ""
                                            } catch (e) {}
                                        }
                                    if (window.cnn_d && window.cnn_d.omniture && window.cnn_d.omniture.section[i]) try {
                                        rval += window.cnn_d.omniture.section[i] || ""
                                    } catch (e) {} else try {
                                        rval += window.CNN.omniture.section[i] || ""
                                    } catch (e) {}
                                }
                                try {
                                    if (typeof window.CNN.omniture !== "undefined" && window.CNN.omniture.template_type == "list" && position == 0 && rval == "") rval = Bootstrapper.Util.gADBPURL("path", 1)
                                } catch (e) {}
                            } else {
                                window.cnn_metadata.section =
                                    typeof window.cnn_metadata.section != "string" ? window.cnn_metadata.section : window.JSON.parse(window.cnn_metadata.section);
                                rval = window.cnn_metadata.section[position] ? window.cnn_metadata.section[position] : ""
                            }
                        } catch (e) {}
                        return rval
                    },
                    getCNNPageFranchise: function() {
                        var rval = "";
                        try {
                            rval = cnn_metadata.business.cnn.page.broadcast_franchise || rval
                        } catch (e) {}
                        try {
                            rval = CNN.omniture.cap_show_name || rval
                        } catch (e) {}
                        rval = rval.toLowerCase();
                        return rval
                    },
                    getCNNTemplateType: function(lookupType) {
                        var hostName = window.location.hostname;
                        var rval = "";
                        if (window.is_expansion) {
                            var pfix = "other:";
                            if (typeof window.CNN !== "undefined" && typeof window.CNN.omniture !== "undefined" && typeof window.CNN.omniture.template_type !== "undefined" && window.CNN.omniture.template_type.match(/index|video|blog|game|interactive|content|error|section|gallery|show|special|topic|profile|article|calendar|candidate summary|state summary/)) pfix = "adbp:";
                            rval = pfix;
                            if (typeof window.CNN !== "undefined" && typeof window.CNN.omniture !== "undefined" && typeof window.CNN.omniture.template_type !==
                                "undefined" && window.CNN.omniture.template_type == "article")
                                if (typeof window.CNN.contentModel !== "undefined" && window.CNN.contentModel.analytics.pageTop.type === "gallery") rval = "content: gallery";
                                else if (typeof window.CNN.contentModel !== "undefined" && (window.CNN.contentModel.analytics.pageTop.type === "video" || window.CNN.contentModel.analytics.pageTop.type === "video360"))
                                if (typeof window.CNN.contentModel !== "undefined" && window.CNN.contentModel.analytics.isArticleVideoCollection) rval = "content:video:collection";
                                else rval = "content:video:nocollection";
                            else if (window.CNN.omniture.cap_content_type !== "undefined" && window.CNN.omniture.cap_content_type === "gallery") rval = "content: gallery";
                            else if (window.CNN.omniture.cap_media_type === "Video") rval = "content:video";
                            else rval = "content: no media";
                            else if (hostName.indexOf("fave.api.cnn.io") != -1 || hostName.indexOf("fave-api.cnn.com") != -1) rval = "adbp:content";
                            else if (typeof window.cnn_d !== "undefined" && typeof window.cnn_d.omniture !== "undefined") try {
                                if (window.cnn_d.omniture.section[0] ==
                                    "cnn-underscored") rval = "adbp:" + window.cnn_d.omniture.template_type
                            } catch (e) {} else {
                                rval = window.CNN.omniture.template_type;
                                if (rval && rval.indexOf("other") === -1) rval = pfix + rval
                            }
                        } else {
                            var templateTypeCode = "";
                            if (typeof CNN != "undefined" && typeof CNN.omniture != "undefined" && typeof CNN.omniture.template_type != "undefined") templateTypeCode = CNN.omniture.template_type;
                            else if (typeof cnn_metadata != "undefined") templateTypeCode = cnn_metadata.template_type;
                            else if (typeof window.cnn_d != "undefined" && typeof window.cnn_d.omniture !=
                                "undefined" && typeof window.cnn_d.omniture.template_type != "undefined") templateTypeCode = window.cnn_d.omniture.template_type;
                            var adbpprefix = "adbp:";
                            rval = ["o", "other"];
                            var lookup = {
                                    b: "blog",
                                    g: "game",
                                    it: "interactive",
                                    c: "content",
                                    "in": "index",
                                    err: "error",
                                    e: "ecom",
                                    s: "signup",
                                    v: "video",
                                    sf: "section front",
                                    sr: "search results",
                                    fm: "forum",
                                    o: "other",
                                    ir: "ireport",
                                    sp: "specials",
                                    pm: "perfect market",
                                    bf: "blog front",
                                    bc: "blog category",
                                    t: "topic",
                                    w: "weather",
                                    el: "election"
                                },
                                lookupRev = {
                                    "blog": "b",
                                    "game": "g",
                                    "interactive": "it",
                                    "content": "c",
                                    "index": "in",
                                    "error": "err",
                                    "ecom": "e",
                                    "signup": "s",
                                    "video": "v",
                                    "section front": "sf",
                                    "search results": "sr",
                                    "forum": "fm",
                                    "other": "o",
                                    "ireport": "ir",
                                    "specials": "sp",
                                    "perfect market": "pm",
                                    "blog front": "bf",
                                    "blog category": "bc",
                                    "topic": "t",
                                    "weather": "w",
                                    "election": "el"
                                };
                            if (lookup[templateTypeCode] != null) rval = [templateTypeCode, lookup[templateTypeCode]];
                            if (lookupRev[templateTypeCode] != null) rval = [lookupRev[templateTypeCode], templateTypeCode];
                            var parameters = {
                                c1: "ireport",
                                c2: "search results",
                                c3: "perfect market",
                                c4: "specials",
                                c5: "blog front",
                                c6: "blog category",
                                c7: "topic",
                                c8: "weather",
                                c9: "election"
                            };
                            for (var p in parameters)
                                if (templateTypeCode == parameters[p]) adbpprefix = "other:";
                            rval[1] = adbpprefix + rval[1];
                            if (lookupType == "short") rval = rval[0];
                            if (lookupType == "long") rval = rval[1]
                        }
                        return rval
                    },
                    getCNNContentType: function(defaultVal) {
                        var tt = "",
                            ct = "";
                        if (typeof window.cnn_d != "undefined" && typeof window.cnn_d.omniture != "undefined" && typeof window.cnn_d.omniture.template_type != "undefined") {
                            tt = window.cnn_d.omniture.template_type;
                            ct = "adbp:" + window.cnn_d.omniture.content_type
                        } else {
                            ct = window.CNN.omniture.content_type;
                            if (typeof ct !== "undefined" && ct == "none") ct = "adbp:none";
                            tt = window.CNN.omniture.template_type
                        }
                        var l = {
                            "adbp:blog": ["blog.read", "adbp:blog read"],
                            "adbp:content": ["article.read", "adbp:article read"],
                            "adbp:game": ["game.play", "adbp:game played"],
                            "other:ireport": ["other.ireport", "other:ireport"],
                            "other:photo wall": ["content.interactive", "other:photo wall"]
                        }[tt];
                        var m = {
                            "adbp:article read": "article.read"
                        }[ct];
                        if (m !== null)
                            if (typeof ct !==
                                "undefined" && ct.indexOf("pivit") !== -1) return tt + ":" + ct;
                            else return ct;
                        if (!l) return defaultVal;
                        return l[1]
                    },
                    getCNNAuthenticated: function(c1, c2, truevalue, falsevalue, neutralvalue, flag) {
                        var rValue = 0;
                        if (Bootstrapper.Util.getCookie(c1, flag)) rValue++;
                        if (Bootstrapper.Util.getCookie(c2, flag)) rValue++;
                        if (rValue == 0) return falsevalue;
                        else if (rValue == 1) return neutralvalue;
                        else return truevalue
                    },
                    getCNNCodeVersion: function() {
                        var rval = codeVersionMonth = codeVersionDate = codeVersionYear = publish_path = "";
                        publish_path =
                            Bootstrapper.ensightenOptions.publishPath;
                        publish_path = publish_path.replace("-", ".");
                        var date_last_publish = [];
                        date_last_publish = Bootstrapper.ensightenOptions.generatedOn.split(" ");
                        var map = {
                            "Jan": "01",
                            "Feb": "02",
                            "Mar": "03",
                            "Apr": "04",
                            "May": "05",
                            "Jun": "06",
                            "Jul": "07",
                            "Aug": "08",
                            "Sep": "09",
                            "Oct": "10",
                            "Nov": "11",
                            "Dec": "12"
                        };
                        codeVersionMonth = map[date_last_publish[1]];
                        codeVersionDate = date_last_publish[2];
                        codeVersionYear = date_last_publish[date_last_publish.length - 1];
                        rval = publish_path + "." + Bootstrapper.CNNBuildVersion +
                            "." + codeVersionYear + codeVersionMonth + codeVersionDate;
                        return rval
                    },
                    getCNNKruxID: function() {
                        var rval = "";
                        try {
                            rval = localStorage.kxkuid
                        } catch (err) {}
                        return rval
                    },
                    getCNNPlatform: function() {
                        var rval = "";
                        if (navigator.userAgent.match(/iPhone/i)) rval = "smartphone";
                        else if (navigator.userAgent.match(/iPad/i)) rval = "tablet";
                        else if (navigator.userAgent.match(/android/i))
                            if (navigator.userAgent.match(/mobile/i)) rval = "smartphone";
                            else rval = "tablet";
                        else rval = "desktop";
                        return rval ? rval : "no value set"
                    },
                    getCNNSearchInternalKeyword: function() {
                        var rval =
                            "";
                        try {
                            rval = Bootstrapper.getQueryParam("query")
                        } catch (e) {}
                        return rval
                    },
                    getCNNPostID: function() {
                        var rval = null;
                        var pathName = window.location.pathname;
                        try {
                            pathName = pathName.replace(/\/$/, "");
                            var path_array = pathName.split("/");
                            rval = path_array[path_array.length - 1];
                            if (rval.match(/(^h_)[a-z0-9]+$/) === null) rval = null
                        } catch (e) {}
                        try {
                            if (window.CNN && window.CNN.omniture && window.CNN.omniture.template_type && window.CNN.omniture.template_type !== "live story") rval = null
                        } catch (e) {}
                        return rval
                    },
                    getCNNPageVertical: function() {
                        var rval =
                            "";
                        try {
                            if (window.CNN && window.CNN.contentModel && window.CNN.contentModel.vertical) {
                                rval = CNN.contentModel.vertical;
                                rval = rval.toLowerCase()
                            }
                        } catch (e) {}
                        return rval
                    },
                    getCNNSourceID: function() {
                        var rval = "";
                        try {
                            if (typeof window.CNN != "undefined" && typeof window.CNN.omniture != "undefined" && window.CNN.omniture.sourceId) rval = window.CNN.omniture.sourceId;
                            else if (window.CNN && window.CNN.contentModel && window.CNN.contentModel.sourceId) rval = window.CNN.contentModel.sourceId;
                            rval = rval.toLowerCase()
                        } catch (e) {}
                        return rval
                    },
                    getCNNTransactionID: function() {
                        var rval = "";
                        try {
                            if (typeof window.cnnad_transactionID !== "undefined") rval = window.cnnad_transactionID;
                            else if (typeof window.cnnad_getTransactionID === "function") rval = cnnad_getTransactionID();
                            else rval = Math.round((new Date).getTime() / 1E3) + "" + Math.floor(Math.random() * 9007199254740992)
                        } catch (e) {}
                        return rval
                    },
                    getCNNGUID: function() {
                        var rval = "";
                        try {
                            if (typeof window.turner_getGuid === "function") rval = turner_getGuid("ug");
                            else rval = Bootstrapper.Cookies.get("ug")
                        } catch (e) {}
                        return rval
                    },
                    getCNNPreviousPageName: function() {
                        try {
                            var pName = window.document.referrer;
                            var pPath = pName.replace(/^.*\/\/[^\/]+/, "");
                            if (pPath && typeof pName != "undefined" && pName != "" && pName.indexOf(".cnn.com") != -1) return Bootstrapper.Util.getCNNPageName(pPath);
                            else return ""
                        } catch (e) {
                            return ""
                        }
                    },
                    getCNNPostTitle: function() {
                        var rval = document.title;
                        rval = rval.toLowerCase();
                        try {
                            var dom_obj = $x("//script[@type\x3d'application/ld+json']");
                            var post_obj = JSON.parse(rval[rval.length - 1]).innerHTML;
                            if (post_obj && post_obj.headline) return post_obj.headline
                        } catch (e) {}
                        try {
                            if (window.CNN &&
                                window.CNN.omniture && window.CNN.omniture.template_type && window.CNN.omniture.template_type !== "live story") rval = ""
                        } catch (e) {}
                        return rval
                    },
                    getCNNWidgetLoad: function() {
                        var rval = "";
                        try {
                            if (window.CNN.omniture.IsOlympicWidget === true) rval = window.CNN.omniture.TypeOlympicWidget;
                            rval = rval.toLowerCase()
                        } catch (err) {
                            return rval
                        }
                        return rval
                    },
                    getCNNBreakingNewsHP: function(ptt, chnl) {
                        var rval = "";
                        var tt = "";
                        try {
                            if (ptt.indexOf(":") != -1)
                                if (ptt.indexOf("adbp") != -1) {
                                    ptt = ptt.split(":");
                                    tt = ptt[1]
                                } else {
                                    ptt = ptt.split(":");
                                    tt =
                                        ptt[0]
                                }
                            else tt = ptt;
                            var abr = {
                                "index": "in",
                                "video": "v",
                                "videos": "v",
                                "blog": "b",
                                "blogs": "b",
                                "game": "g",
                                "games": "g",
                                "interactive": "it",
                                "content": "c",
                                "error": "err",
                                "section": "sf",
                                "section front": "sf",
                                "gallery": "ga",
                                "show": "sh",
                                "shows": "sh",
                                "special": "sp",
                                "specials": "sp",
                                "topic": "t",
                                "profile": "p",
                                "article": "c"
                            }[tt];
                            if (chnl && (chnl == "homepage" || chnl == "cnn homepage")) chnl = "index";
                            if (tt) rval = "breaking:" + chnl + ":" + abr + ":";
                            return rval
                        } catch (e) {}
                    },
                    getCNNOrientation: function() {
                        var rval = "no value set";
                        try {
                            var x =
                                0;
                            if (self.innerHeight) x = self.innerWidth;
                            else if (document.documentElement && document.documentElement.clientHeight) x = document.documentElement.clientWidth;
                            else if (document.body) x = document.body.clientWidth;
                            var y = 0;
                            if (self.innerHeight) y = self.innerHeight;
                            else if (document.documentElement && document.documentElement.clientHeight) y = document.documentElement.clientHeight;
                            else if (document.body) y = document.body.clientHeight;
                            rval = y > x ? "portrait" : "landscape"
                        } catch (e) {}
                        return rval
                    },
                    getCNNMVPD: function() {
                        try {
                            var mvpd_store =
                                Bootstrapper.Util.getCookie("CNNmvpd");
                            if (mvpd_store !== "nvs" && mvpd_store !== "")
                                if (mvpd_store !== null && typeof CNN.omniture.mvpd === "string") {
                                    document.cookie = "CNNmvpd\x3d" + CNN.omniture.mvpd + "; domain\x3d .cnn.com ;";
                                    mvpd_store = Bootstrapper.Util.getCookie("CNNmvpd");
                                    return mvpd_store
                                } else if (typeof mvpd_store === "string" && mvpd_store != "")
                                if (typeof CNN.omniture.mvpd === "string") {
                                    document.cookie = "CNNmvpd\x3d" + CNN.omniture.mvpd + ";  domain\x3d .cnn.com ;";
                                    mvpd_store = Bootstrapper.Util.getCookie("CNNmvpd");
                                    return mvpd_store
                                } else return mvpd_store;
                            else if (mvpd_store === null && typeof CNN.omniture.mvpd === "string") {
                                document.cookie = "CNNmvpd\x3d" + CNN.omniture.mvpd + ";  domain\x3d .cnn.com ;";
                                mvpd_store = Bootstrapper.Util.getCookie("CNNmvpd");
                                return mvpd_store
                            } else return "no mvpd set";
                            else return "no mvpd set"
                        } catch (err) {
                            return "no mvpd set"
                        }
                    },
                    getCNNAdobeID: function() {
                        try {
                            var adobe_hash_id_store = Bootstrapper.Cookies.get("adobe_hash_id");
                            if (adobe_hash_id_store !== "nvs" && adobe_hash_id_store !== "")
                                if (adobe_hash_id_store !== null && typeof CNN.omniture.adobe_hash_id ===
                                    "string") {
                                    document.cookie = "adobe_hash_id\x3d" + CNN.omniture.adobe_hash_id + "; domain\x3d .cnn.com;";
                                    adobe_hash_id_store = Bootstrapper.Cookies.get("adobe_hash_id");
                                    return adobe_hash_id_store
                                } else return "no mvpd set";
                            else return "no mvpd set"
                        } catch (err) {}
                    },
                    getCNNPlayerState: function(video) {
                        var screenState = "nvs",
                            playerState = "";
                        try {
                            if (CNN && CNN.omniture && CNN.omniture.screen_state) screenState = CNN.omniture.screen_state;
                            var audioState = "nvs";
                            if (video.muted === true) audioState = "muted";
                            else if (video.muted === false) audioState =
                                "audio on";
                            var screenPosition = "nvs";
                            playerState = screenState + "|" + audioState + "|" + screenPosition;
                            playerState = playerState.toLowerCase()
                        } catch (e) {}
                        return playerState
                    },
                    getCNNVisitorID: function(id) {
                        var rval = "";
                        try {
                            rval = Bootstrapper.Cookies.get(id);
                            rval = rval.replace(/\[(.+?)\]/g, "");
                            rval = rval.split("|")[1];
                            rval = rval.toLowerCase()
                        } catch (err) {}
                        return rval
                    },
                    getCNNHierachy: function() {
                        var rval = "";
                        return rval
                    },
                    getCNNUserAuthState: function() {
                        try {
                            var user_auth_state_store = localStorage.getItem("user_auth_state");
                            if (user_auth_state_store !== null && typeof window.CNN.omniture.user_auth_state === "string") {
                                localStorage.setItem("user_auth_state", window.CNN.omniture.user_auth_state);
                                user_auth_state_store = localStorage.getItem("user_auth_state");
                                return user_auth_state_store
                            } else if (typeof user_auth_state_store === "string")
                                if (typeof window.CNN.omniture.user_auth_state === "string") {
                                    localStorage.setItem("user_auth_state", window.CNN.omniture.user_auth_state);
                                    user_auth_state_store = localStorage.getItem("user_auth_state");
                                    return user_auth_state_store
                                } else return user_auth_state_store;
                            else if (user_auth_state_store === null && typeof window.CNN.omniture.user_auth_state === "string") {
                                localStorage.setItem("user_auth_state", window.CNN.omniture.user_auth_state);
                                user_auth_state_store = localStorage.getItem("user_auth_state");
                                return user_auth_state_store
                            } else return "nvs"
                        } catch (err) {
                            return ""
                        }
                    },
                    getCNNRSID: function() {
                        var hostName = window.location.hostname;
                        var pathName = window.location.pathname;
                        var setting = "";
                        var sites = {
                            "cnn": ["cnn-adbp-domestic"],
                            "cnnamp": ["cnn-adbp-googleamp-event"],
                            "cnndev": ["cnn-adbp-domestic-dev"],
                            "cnnintl": ["cnn-adbp-intl"],
                            "cnnintldev": ["cnn-adbp-intl-dev"],
                            "ireport": ["cnn-adbp-domestic,cnnireport-adbp"],
                            "ireportdev": ["cnn-adbp-domestic-dev,cnnireport-adbp-dev"],
                            "offsite": ["cnn-adbp-offsite-domestic"],
                            "nativead": ["cnn-adbp-domestic-nativead"],
                            "nativeaddev": ["cnn-adbp-domestic-nativead-dev"],
                            "epu": ["cnn-adbp-epu"]
                        };
                        try {
                            if (window.CNN.omniture.rs_flag.replace("no value set", "") && window.CNN.omniture.rs_flag != "prod") setting = sites.cnndev[0]
                        } catch (err) {}
                        if (hostName.indexOf("ireportqa.cnn.com") !=
                            -1) setting = sites.ireportdev[0];
                        else if (pathName.indexOf("cnn-underscored") != -1)
                            if (hostName.indexOf("edition") != -1) setting = hostName == "edition.cnn.com" ? sites.cnnintl[0] : sites.cnnintldev[0];
                            else setting = hostName == "www.cnn.com" || hostName == "us.cnn.com" ? sites.cnn[0] : sites.cnndev[0];
                        else if (hostName.indexOf("sponsorcontent.cnn.com") != -1) setting = sites.nativead[0];
                        else if (hostName.indexOf("video.next.cnn.com") !== -1 || hostName.indexOf("jcmsdev8.cnn.com") != -1 || hostName.indexOf("jcmsref.cnn.com") != -1 || hostName.indexOf("cnnpreview.cnn.com") !=
                            -1 || hostName.indexOf("cnnpreview.turner.com") != -1 || hostName.indexOf("ref.cnn.com") != -1 || hostName.indexOf("preview.cnn.com") != -1 || hostName.indexOf("dev.cnn.com") != -1 || hostName.indexOf("stage.cnngo.com") != -1 || hostName.indexOf("travel.cnngo.com") != -1 || hostName.indexOf("enable.next.cnn.com") != -1 || hostName.indexOf("stage.next.cnn.com") != -1 || hostName.indexOf("ref.next.cnn.com") != -1 || hostName.indexOf("terra.next.cnn.com") != -1 || hostName.indexOf("dev.cnnv2.com") != -1 || hostName.indexOf("ref.cnnv2.com") != -1 ||
                            hostName.match(/^(dev|qa|ref|stage).(www|us|edition)-m.cnn.com/)) {
                            var port = window.location.port;
                            if (port.indexOf("94") != -1 || hostName.indexOf("edition") != -1 || hostName.indexOf("cnnespanol") != -1 || hostName.indexOf("stage.cnngo.com") != -1 || hostName.indexOf("travel.cnngo.com") != -1) setting = sites.cnnintldev[0];
                            else setting = sites.cnndev[0]
                        } else if (hostName.indexOf("qai.cnn.com") != -1 || hostName.indexOf("cnn.staging.perfectmarket.com") != -1 || hostName.indexOf("cnn.staging2.perfectmarket.com") != -1 || hostName.indexOf("beta-cronkite.cnnlabs.com") !=
                            -1 || hostName.indexOf("darwin-dev.hope.ui") != -1 || hostName.indexOf("style.staging.cnn.io") != -1) setting = sites.cnndev[0];
                        else if (hostName.indexOf("sweet.next.cnn.com") != -1) setting = sites.cnndev[0];
                        else if (hostName.indexOf("ireport.cnn.com") != -1) setting = sites.ireport[0];
                        else if (hostName.indexOf("edition.cnn.com") != -1 || hostName.indexOf("cnnespanol.cnn.com") != -1 || hostName.indexOf("backstory.blogs.cnn.com") != -1 || hostName.indexOf("inthefield.blogs.cnn.com") != -1 || hostName.indexOf("securityfiles.blogs.cnn.com") !=
                            -1 || hostName.indexOf("thecnnfreedomproject.blogs.cnn.com") != -1 || hostName.indexOf("ukelection.blogs.cnn.com") != -1 || hostName.indexOf("amanpour.blogs.cnn.com") != -1 || hostName.indexOf("screeningroom.blogs.cnn.com") != -1 || hostName.indexOf("internationaldesk.blogs.cnn.com") != -1 || hostName.indexOf("newsstream.blogs.cnn.com") != -1 || hostName.indexOf("prism.blogs.cnn.com") != -1 || hostName.indexOf("thebrief.blogs.cnn.com") != -1 || hostName.indexOf("insidethemiddleeast.blogs.cnn.com") != -1 || hostName.indexOf("connecttheworld.blogs.cnn.com") !=
                            -1 || hostName.indexOf("business.blogs.cnn.com") != -1 || hostName.indexOf("questmeansbusiness.blogs.cnn.com") != -1 || hostName.indexOf("goalmouth.blogs.cnn.com") != -1 || hostName.indexOf("olympics.blogs.cnn.com") != -1 || hostName.indexOf("worldsport.blogs.cnn.com") != -1 || hostName.indexOf("bodareal.blogs.cnn.com") != -1 || hostName.indexOf("travel.cnn.com") != -1 || hostName.indexOf("footballclub.cnn.com") != -1 || hostName.indexOf("cnn-international.massrel.io") != -1 || hostName.indexOf("edition.cnnv2.com") != -1 || hostName.indexOf("edition-m.cnn.com") !=
                            -1) setting = sites.cnnintl[0];
                        else if (hostName.indexOf("cnn.com") != -1 || hostName.indexOf("cnnv2.com") != -1) setting = sites.cnn[0];
                        if (hostName.indexOf("fave.api.cnn.io") !== -1 || hostName.indexOf("fave-api.cnn.com") !== -1) {
                            setting = sites.cnnamp[0];
                            if (pathName.indexOf("/v1/fav") != -1) {
                                var queryString = window.location.search;
                                if (queryString.indexOf("?video\x3dlive/vr1") != -1) setting = sites.cnn[0];
                                else setting = sites.offsite[0]
                            } else if (pathName.indexOf("/v1/synacor") != -1) setting = sites.offsite[0];
                            else if (pathName.indexOf("/v1/epu") !=
                                -1) setting = sites.epu[0]
                        }
                        try {
                            if (window.CNN.omniture.rs_flag.match(/local|dev|ref|train|stage|sweet/)) {
                                if (typeof port == "undefined") port = "";
                                if (port.indexOf("94") != -1 || hostName.indexOf("edition") != -1 || hostName.indexOf("cnnespanol") != -1 || hostName.indexOf("stage.cnngo.com") != -1 || hostName.indexOf("travel.cnngo.com") != -1) setting = sites.cnnintldev[0];
                                else setting = sites.cnndev[0]
                            }
                        } catch (err) {}
                        try {
                            if (window.CNNIntlVideo) setting = sites.cnnintl[0]
                        } catch (err) {}
                        try {
                            if (window.CNNOffSitePartner) setting = sites.offsite[0]
                        } catch (err) {}
                        return setting
                    },
                    getCNNUIEngagement: function() {
                        var rval = "";
                        try {
                            rval = window.CNN.omniture.friendly_name.toLowerCase()
                        } catch (e) {}
                        if (rval != "ngtv") rval = "cnn news";
                        try {
                            if (typeof window.cnn_metadata.friendly_name != "undefined") rval = window.cnn_metadata.friendly_name
                        } catch (e) {}
                        return rval
                    },
                    getCNNTopic: function() {
                        var rval = "";
                        var cap_array = new Array;
                        try {
                            if (CNN && CNN.cep_topics && CNN.cep_topics.cep_brsf && CNN.cep_topics.cep_iabt && CNN.cep_topics.cep_sent && CNN.cep_topics.cep_tags) {
                                cap_array = cap_array.concat(CNN.cep_topics.cep_brsf,
                                    CNN.cep_topics.cep_iabt, CNN.cep_topics.cep_sent, CNN.cep_topics.cep_tags);
                                rval = cap_array.toString()
                            } else rval = window.CNN.omniture.cap_topic;
                            if (typeof rval == "undefined" || rval === "no-value-set" || rval == "") rval = "";
                            rval = rval.substring(0, 100)
                        } catch (e) {}
                        return rval.toLowerCase()
                    },
                    getSiteSpecificSettings: function(type, section) {
                        var hostName = window.location.hostname;
                        var port = window.location.port;
                        var setting;
                        var sites = {
                            "cnn": ["cnn-adbp-domestic", "cnn domestic", "cnn", "metrics.cnn.com", "smetrics.cnn.com", "us-100120",
                                "b01", "00001", "8587204"
                            ],
                            "cnndev": ["cnn-adbp-domestic-dev", "cnn domestic", "cnn", "metrics.cnn.com", "smetrics.cnn.com", "us-100120", "b01", "00001", "8587204"],
                            "cnnintl": ["cnn-adbp-intl", "cnn international", "cnn", "metrics.cnn.com", "smetrics.cnn.com", "us-100120", "b01", "00002", "8587278"],
                            "cnnintldev": ["cnn-adbp-intl-dev", "cnn international", "cnn", "metrics.cnn.com", "smetrics.cnn.com", "us-100120", "b01", "00002", "8587278"],
                            "ireport": ["cnnireport-adbp", "cnn ireport", "cnnireport", "metrics.cnn.com", "smetrics.cnn.com",
                                "us-702210", "c01", "00001", "3002212"
                            ],
                            "ireportdev": ["cnnireport-adbp-dev", "cnn ireport", "cnnireport", "metrics.cnn.com", "smetrics.cnn.com", "us-702210", "c01", "00001", "3002212"]
                        };
                        var c4 = {
                            val1: ["cnn homepage", "8587211", "8587278"],
                            val2: ["crime", "8587220"],
                            val3: ["us", "8587228"],
                            val4: ["world", "8587235"],
                            val5: ["entertainment", "8587242"],
                            val6: ["politics", "8587248"],
                            val7: ["health", "8587254"],
                            val8: ["tech", "8587261"],
                            val9: ["living", "8587266"],
                            val10: ["opinion", "8587272"],
                            val11: ["watch cnn", "8587204"]
                        };
                        if (section &&
                            section != "") {
                            var x = 0;
                            for (x in c4)
                                if (c4[x][0] == section) {
                                    setting = c4[x][1];
                                    if (section == "cnn homepage")
                                        if (hostName.indexOf("edition.cnn.com") != -1) setting = c4[x][2];
                                        else if (hostName.indexOf("jcmsdev8.cnn.com") != -1 || hostName.indexOf("jcmsref.cnn.com") != -1 || hostName.indexOf("cnnpreview.cnn.com") != -1 || hostName.indexOf("ref.cnn.com") != -1 || hostName.indexOf("preview.cnn.com") != -1)
                                        if (port.indexOf("94") != -1 || hostName.indexOf("edition") != -1) setting = c4[x][2];
                                    break
                                }
                        } else if (hostName.indexOf("ireportqa.cnn.com") !=
                            -1) setting = sites.ireportdev[type];
                        else if (hostName.indexOf("jcmsdev8.cnn.com") != -1 || hostName.indexOf("jcmsref.cnn.com") != -1 || hostName.indexOf("cnnpreview.cnn.com") != -1 || hostName.indexOf("ref.cnn.com") != -1 || hostName.indexOf("preview.cnn.com") != -1 || hostName.indexOf("dev.cnn.com") != -1 || hostName.indexOf("stage.cnngo.com") != -1 || hostName.indexOf("travel.cnngo.com") != -1 || hostName.indexOf("edition.stage.next.cnn.com") != -1 || hostName.indexOf("cnnpreview.turner.com") != -1 || hostName.indexOf("dev.cnnv2.com") !=
                            -1 || hostName.indexOf("ref.cnnv2.com") != -1 || hostName.match(/^(dev|qa|stage).(www|us|edition)-m.cnn.com/) || hostName.indexOf("edition.enable.next.cnn.com") != -1 || hostName.indexOf("terra.next.cnn.com") != -1)
                            if (port.indexOf("94") != -1 || hostName.indexOf("edition") != -1 || hostName.indexOf("cnnespanol") != -1 || hostName.indexOf("stage.cnngo.com") != -1 || hostName.indexOf("travel.cnngo.com") != -1) setting = sites.cnnintldev[type];
                            else setting = sites.cnndev[type];
                        else if (hostName.indexOf("qai.cnn.com") != -1) setting = sites.cnndev[type];
                        else if (hostName.indexOf("cnn.staging.perfectmarket.com") != -1 || hostName.indexOf("cnn.staging2.perfectmarket.com") != -1 || hostName.indexOf("beta-cronkite.cnnlabs.com") != -1) setting = sites.cnndev[type];
                        else if (hostName.indexOf("darwin-dev.hope.ui") != -1) setting = sites.cnndev[type];
                        else if (hostName.indexOf("ireport.cnn.com") != -1) setting = sites.ireport[type];
                        else if (hostName.indexOf("edition.cnn.com") != -1 || hostName.indexOf("cnnespanol.cnn.com") != -1 || hostName.indexOf("backstory.blogs.cnn.com") != -1 || hostName.indexOf("inthefield.blogs.cnn.com") !=
                            -1 || hostName.indexOf("securityfiles.blogs.cnn.com") != -1 || hostName.indexOf("thecnnfreedomproject.blogs.cnn.com") != -1 || hostName.indexOf("ukelection.blogs.cnn.com") != -1 || hostName.indexOf("amanpour.blogs.cnn.com") != -1 || hostName.indexOf("screeningroom.blogs.cnn.com") != -1 || hostName.indexOf("internationaldesk.blogs.cnn.com") != -1 || hostName.indexOf("newsstream.blogs.cnn.com") != -1 || hostName.indexOf("prism.blogs.cnn.com") != -1 || hostName.indexOf("thebrief.blogs.cnn.com") != -1 || hostName.indexOf("insidethemiddleeast.blogs.cnn.com") !=
                            -1 || hostName.indexOf("connecttheworld.blogs.cnn.com") != -1 || hostName.indexOf("business.blogs.cnn.com") != -1 || hostName.indexOf("questmeansbusiness.blogs.cnn.com") != -1 || hostName.indexOf("goalmouth.blogs.cnn.com") != -1 || hostName.indexOf("olympics.blogs.cnn.com") != -1 || hostName.indexOf("worldsport.blogs.cnn.com") != -1 || hostName.indexOf("bodareal.blogs.cnn.com") != -1 || hostName.indexOf("travel.cnn.com") != -1 || hostName.indexOf("footballclub.cnn.com") != -1 || hostName.indexOf("edition.cnnv2.com") != -1 || hostName.indexOf("edition-m.cnn.com") !=
                            -1) setting = sites.cnnintl[type];
                        else if (hostName.indexOf("cnn.com") != -1 || hostName.indexOf("cnnv2.com") != -1) setting = sites.cnn[type];
                        else if (hostName.indexOf("fave.api.cnn.io") != -1 || hostName.indexOf("fave-api.cnn.com") != -1) setting = sites.cnn[type];
                        else if (hostName.indexOf("style.staging.cnn.io") != -1) setting = sites.cnndev[type];
                        else setting = sites.cnn[type];
                        try {
                            if (window.CNNIntlVideo) setting = sites.cnnintl[type]
                        } catch (e) {}
                        return setting
                    },
                    getJObj: function(objectRef, attribute) {
                        objectRef = typeof objectRef == "string" ?
                            window[objectRef] : objectRef;
                        var rval = objectRef != null && attribute != null && attribute.indexOf(".") == -1 && attribute.indexOf("[") == -1 ? objectRef[attribute] : objectRef;
                        if (rval === objectRef && (typeof attribute !== "undefined" || attribute != null)) {
                            var attribs = attribute.split("."),
                                len = attribs.length,
                                reArray = /([^\[]+)\[(\d+)\]/,
                                t, t2;
                            rval = objectRef;
                            for (var i = 0; i < len; i++) {
                                t = attribs[i];
                                if ((t2 = reArray.exec(t)) != null) rval = rval[t2[1]][parseInt(t2[2])];
                                else rval = rval[t]
                            }
                        }
                        return rval
                    },
                    getADBPContentType: function(defaultVal) {
                        var tt =
                            Bootstrapper.Util.getCNNTemplateType("long") || "";
                        var ct = Bootstrapper.Util.getCNNContentType() | "";
                        var rObj = {};
                        var l = {
                            "adbp:blog": ["event38", "adbp:blog read"],
                            "adbp:content": ["event39", "adbp:article read"]
                        }[tt];
                        var m = {
                            "adbp:article read": "event39"
                        }[ct];
                        if (m != null) {
                            rObj.events = m;
                            rObj.content_type = ct;
                            return rObj
                        }
                        if (!l) {
                            rObj.events = "";
                            rObj.ct = defaultVal;
                            return rObj
                        }
                        rObj.events = l[0];
                        rObj.ct = l[1];
                        return rObj
                    },
                    getADBPURL: function(type, lvl) {
                        var hostname = window.location.hostname.toLowerCase();
                        var pathname =
                            window.location.pathname.toLowerCase();
                        var path_array = "";
                        pathname = pathname.replace(/([^\/]+\.[^\/]+$)/, "");
                        var rval;
                        switch (type) {
                            case "domain":
                                hostname = hostname.replace("www.", "");
                                if (lvl == parseFloat(lvl)) {
                                    var domain_array = hostname.split(".");
                                    var currentPointer = domain_array.length - lvl;
                                    var currentDomainLevel = currentPointer >= 0 ? domain_array[currentPointer] : "";
                                    rval = currentDomainLevel
                                } else rval = hostname;
                                break;
                            case "path":
                                var pathname2 = pathname.substring(1);
                                path_array = pathname2.split("/");
                                if (lvl == parseFloat(lvl) &&
                                    lvl >= 1) {
                                    var currentPathname = path_array.length >= lvl ? path_array[lvl - 1] : "";
                                    rval = currentPathname
                                } else rval = pathname;
                                break;
                            case "hier":
                                hostname = hostname.replace("www.", "");
                                path_array = pathname.substring(1).split("/");
                                var h1 = hostname + "/" + path_array[0];
                                var h2 = h1;
                                if (path_array[1]) h2 = h2 + "/" + path_array[1];
                                rval = [h1, h2];
                                break;
                            default:
                                rval = hostname + pathname
                        }
                        return rval
                    },
                    getADBPPageName: function(pathname, delimiter) {
                        var s_pageName = "",
                            templateTypeSmall = "";
                        if (!delimiter) delimiter = ":";
                        var ttbefore = Bootstrapper.Util.getCNNTemplateType("long");
                        if (ttbefore) {
                            ttbefore = ttbefore.replace(/adbp./, "");
                            templateTypeSmall = Bootstrapper.Util.getADBPTranslateTemplateType(ttbefore, "short")
                        } else templateTypeSmall = "o";
                        var buc_p32 = Bootstrapper.Util.getCNNBusinessName() + delimiter + templateTypeSmall;
                        var thirdLevelDomain = Bootstrapper.Util.getADBPURL("domain", 3);
                        var fullDomain = Bootstrapper.Util.getADBPURL("domain");
                        var lastTwoDomain = /(\.\w+\.\w+)$/.exec(fullDomain);
                        if (lastTwoDomain) thirdLevelDomain = fullDomain.replace(lastTwoDomain[0], "");
                        if (!pathname) {
                            var p =
                                window.location.pathname.toLowerCase();
                            var a = p.split("/");
                            var l = a.length;
                            var r = /^index./;
                            pathname = r.test(a[l - 1]) ? p.replace(/([^\/]+\.[^\/]+$)/, "") : p;
                            r = /([^\/]+\.[^\/]+$)/;
                            if (!r.test(pathname)) {
                                l = pathname.length;
                                if (pathname.charAt(l - 1) !== "/") pathname = pathname + "/"
                            }
                        }
                        var pageNameLen, r_len;
                        if (thirdLevelDomain == "") {
                            pageNameLen = buc_p32.length + 1 + pathname.length;
                            if (pageNameLen <= 100) s_pageName = buc_p32 + delimiter + pathname;
                            else {
                                r_len = pageNameLen - 100;
                                s_pageName = buc_p32 + delimiter + pathname.substring(r_len)
                            }
                        } else {
                            pageNameLen =
                                buc_p32.length + 1 + thirdLevelDomain.length + 1 + pathname.length;
                            if (pageNameLen <= 100) s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname;
                            else if (thirdLevelDomain.length <= 5) {
                                r_len = pageNameLen - 100;
                                s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname.substring(r_len)
                            } else {
                                thirdLevelDomain = thirdLevelDomain.substring(0, 5);
                                pageNameLen = buc_p32.length + 1 + thirdLevelDomain.length + 1 + pathname.length;
                                if (pageNameLen <= 100) s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname;
                                else {
                                    r_len =
                                        pageNameLen - 100;
                                    s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname.substring(r_len)
                                }
                            }
                        }
                        return s_pageName
                    },
                    getIreportgetMember: function() {
                        var irptMember = Bootstrapper.Util.getCNNAuthenticated("authid", "displayname", "member", "anonymous", "NonMember", "?");
                        if (window.location.host.indexOf("politics") == -1 && window.is_expansion != 0) return irptMember;
                        else return null
                    },
                    getCNNVideoSequence: function() {
                        return "1"
                    },
                    getCNNVertical: function() {
                        var rval = "";
                        try {
                            if (window.CNN.contentModel.vertical && window.CNN.contentModel.vertical !==
                                "") rval = window.CNN.contentModel.vertical
                        } catch (e) {}
                        return rval
                    },
                    getADBPTranslateTemplateType: function(templateTypeCode, lookupType) {
                        var adbpprefix = "adbp:",
                            rval = ["o", "other"];
                        var lookup = {
                                b: "blog",
                                g: "game",
                                it: "interactive",
                                c: "content",
                                "in": "index",
                                err: "error",
                                e: "ecom",
                                s: "signup",
                                v: "video",
                                sf: "section front",
                                o: "other"
                            },
                            lookupRev = {
                                "blog": "b",
                                "game": "g",
                                "interactive": "it",
                                "content": "c",
                                "index": "in",
                                "error": "err",
                                "ecom": "e",
                                "signup": "s",
                                "video": "v",
                                "section front": "sf",
                                "other": "o"
                            };
                        if (lookup[templateTypeCode] !=
                            null) rval = [templateTypeCode, lookup[templateTypeCode]];
                        if (lookupRev[templateTypeCode] != null) rval = [lookupRev[templateTypeCode], templateTypeCode];
                        rval[1] = adbpprefix + rval[1];
                        if (lookupType == "short") rval = rval[0];
                        if (lookupType == "long") rval = rval[1];
                        return rval
                    }
                }
            }();
            Bootstrapper.Util.loadCustomVariables()
        }, 3011653, 578538);
        Bootstrapper.bindDependencyImmediate(function() {
            var Bootstrapper = window["Bootstrapper"];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.comscorePageBeacon = function() {
                var c_id = "6035748";
                var cs_ucfr = "1";
                var _comscore = window._comscore = _comscore || [];
                _comscore.push({
                    c1: "2",
                    c2: c_id,
                    cs_ucfr: cs_ucfr
                });
                try {
                    if (window.COMSCORE) COMSCORE.beacon(_comscore[0]);
                    else {
                        var protocol = document.location.protocol == "https:" ? "https://sb" : "http://b";
                        Bootstrapper.insertScript(protocol + ".scorecardresearch.com/beacon.js")
                    }
                } catch (e) {}
            };
            PubSub.subscribe("dynamic-page", function(data) {
                Bootstrapper.comscorePageBeacon()
            });
            PubSub.subscribe("tab-page", function(data) {
                Bootstrapper.comscorePageBeacon()
            });
            PubSub.subscribe("cnnsearch-results", function(data) {
                Bootstrapper.comscorePageBeacon()
            });
            PubSub.subscribe("weather-page", function(data) {
                Bootstrapper.comscorePageBeacon()
            });
            PubSub.subscribe("picker-pageview", function(data) {
                Bootstrapper.comscorePageBeacon()
            });
            PubSub.subscribe("election-click", function(data) {
                Bootstrapper.comscorePageBeacon()
            });
            PubSub.subscribe("readmore-page", function(data) {
                Bootstrapper.comscorePageBeacon()
            });
            PubSub.subscribe("breaking-news", function(data) {
                if (data.domain && (data.domain == "cnn.com" || data.domain == "us.cnn.com" || data.domain == "sweet.next.cnn.com" || data.domain == "edition.cnn.com"));
                else Bootstrapper.comscorePageBeacon()
            });
            if (!Bootstrapper.Util.isDynamicPage() && !Bootstrapper.Util.isFavePage()) Bootstrapper.comscorePageBeacon()
        }, 3001032, [2988688], 615925, [578909]);
        Bootstrapper.getServerComponent(Bootstrapper.getExtraParams ? Bootstrapper.getExtraParams() : undefined);
    }
})();