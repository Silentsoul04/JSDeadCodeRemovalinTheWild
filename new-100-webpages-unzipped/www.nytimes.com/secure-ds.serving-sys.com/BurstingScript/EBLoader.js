/*EBLoader.js - v_2_39_0_0 - 2019-02-17*/
function ebGetParamValue(queryString, paramName) {
    var res = "";
    if ((queryString.length > 0) && (paramName.length > 0)) {
        var begin = queryString.search("[?|&]" + paramName + "=");
        if (begin != -1) {
            begin += paramName.length + 2;
            var end = (queryString.indexOf("&", begin) == -1) ? queryString.length : queryString.indexOf("&", begin);
            res = unescape(queryString.substring(begin, end));
        }
    }
    return res;
}
ebQueryString = window.ebQueryString || document.location.search || "";
ebHtml5Ver = ebGetParamValue(ebQueryString, 'v');
ebInstreamVer = ebGetParamValue(ebQueryString, 'vpaidV');
ebPreview = ebGetParamValue(ebQueryString, 'isPreview');
ebDivAd = ebGetParamValue(ebQueryString, 'divAd') || ebGetParamValue(ebQueryString, 'd');
ebScriptsHost = ebGetParamValue(ebQueryString, "sHost") || "ds.serving-sys.com";
ebNonCachedPath = ebGetParamValue(ebQueryString, "nonCached") || '';
ebStrProtocol = getScriptProtocol();
strScriptPrefix = "";

function getScriptProtocol() {
    try {
        if (location.ancestorOrigins) {
            if (location.ancestorOrigins[0] && location.ancestorOrigins[0] == location.origin && window.parent && window.parent.ebPtcl) {
                return window.parent.ebPtcl;
            }
        } else if (window.parent && window.parent.ebPtcl) {
            return window.parent.ebPtcl;
        }
    } catch (e) {}
    if (document.location.protocol == "http:") {
        return "http://";
    }
    return "https://";
}
if (document.location.protocol == "data:") {
    window.EBModulesConfig = window.EBModulesConfig ? window.EBModulesConfig : {};
    EBModulesConfig.localMode = true;
    ebStrProtocol = "https://";
}
if (ebStrProtocol == "https://" && ebScriptsHost.indexOf("ds.serving-sys") == 0) {
    ebScriptsHost = "secure-" + ebScriptsHost;
}
ebCachePath = ebStrProtocol + ebScriptsHost + "/" + strScriptPrefix + "BurstingCachedScripts/";
VpaidHTML5 = (ebInstreamVer ? ebInstreamVer : 'VPAID/HTML5_1_13_0_33');
EBModules = {
    basePath: ebCachePath,
    relPath: 'HTML5Res',
    version: (ebHtml5Ver ? ebHtml5Ver : '_2_104_1_0'),
    modules: {
        EB: {
            scriptName: 'EB.js'
        },
        Video: {
            scriptName: 'EBV.js'
        },
        MRAID: {
            scriptName: 'EBCMD.js'
        },
        EBCMD: {
            scriptName: 'EBCMD.js'
        },
        SV: {
            scriptName: 'EBSV.js'
        },
        SVCAT: {
            scriptName: 'EBCat.js'
        },
        EBAPI: {
            scriptName: 'EB_api.js'
        },
        Comm: {
            scriptName: 'EBComm.js'
        },
        VPAID: {
            basePath: ebCachePath,
            relPath: '',
            scriptName: 'EBVPAID.js',
            version: VpaidHTML5 || ''
        }
    }
};
ebArrModulesToTrigger = [];
(function() {
    function createPreloadedModules() {
        EBG = window.EBG || {};
        EBG.EventName = EBG.EventName || {
            EB_INITIALIZED: "ebinitialized"
        };
        EB = window.EB || (EBG.EBC ? new EBG.EBC : {
            _subscriptions: {},
            addEventListener: function(eventName, callback, callbackBinding) {
                try {
                    if (!this._subscriptions[eventName]) this._subscriptions[eventName] = [];
                    var subscription = {
                        eventName: eventName,
                        callback: callback,
                        callbackBinding: callbackBinding
                    };
                    this._subscriptions[eventName].push(subscription);
                    return subscription;
                } catch (e) {}
            },
            isInitialized: function() {
                return false;
            }
        });
    }

    function buildModulesList(list) {
        if (!list || !list.length) {
            return ["EB"];
        }
        var res = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i] != "EB" && list[i] != "EBCMD") {
                res.push(list[i]);
            }
        }
        if (list.indexOf("EBCMD") != -1) {
            res.push("EBCMD");
        } else {
            res.push("EB");
        }
        return res;
    }

    function format(str) {
        for (var i = 1; i < arguments.length; i++) {
            str = str.replace('{' + (i - 1) + '}', "" + arguments[i]);
        }
        return str;
    }

    function loadScript(src) {
        try {
            var parent = document.getElementsByTagName('head')[0] || document.documentElement;
            var httpRequest = new XMLHttpRequest();
            httpRequest.open('GET', src, false);
            httpRequest.send();
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = httpRequest.responseText;
            parent.appendChild(script);
        } catch (e) {}
    }

    function getDataFromRemoteServer(url, cbFunc, cbBinding) {
        if (!url || EBG.isOfflineDemo) {
            return false;
        }
        cbBinding = cbBinding || window;
        var xdrSuccess = function() {
            try {
                cbFunc.call(cbBinding, xdr.responseText);
            } catch (e) {
                cbFunc.call(cbBinding);
            }
        };
        var handled = false;
        try {
            if (window.document.documentMode != 9) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                handled = true;
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            cbFunc.call(cbBinding, xhr.responseText);
                        } else {
                            cbFunc.call(cbBinding);
                        }
                    }
                };
                xhr.send();
            } else if (window.XDomainRequest) {
                var xdr = new XDomainRequest();
                if (xdr) {
                    xdr.onerror = function() {
                        cbFunc.call(cbBinding);
                    };
                    xdr.ontimeout = function() {
                        cbFunc.call(cbBinding);
                    };
                    xdr.onload = xdrSuccess;
                    xdr.onprogress = function() {};
                    xdr.open("get", url);
                    xdr.send();
                    handled = true;
                }
            }
        } catch (e) {
            handled = false;
        }
        return handled;
    }

    function getModuleURL(moduleName) {
        var url = null;
        if (moduleName && EBModules.modules[moduleName]) {
            var module = EBModules.modules[moduleName];
            if (module.basePath) {
                url = format("{0}{1}{2}/{3}", module.basePath, module.relPath, module.version, module.scriptName);
            } else {
                url = format("{0}{1}{2}/{3}", EBModules.basePath, EBModules.relPath, EBModules.version, module.scriptName);
            }
        } else {
            var mwrapper = {
                modulesConfig: null,
                moduleName: moduleName,
                url: null,
                init: function(adConfig) {
                    moduleConfig = adConfig.moduleInfo;
                    if (moduleConfig[moduleName]) {
                        this.url = format("{0}{1}/{2}", ebStrProtocol, ebScriptsHost, moduleConfig[moduleName]);
                        moduleName = moduleConfig[moduleName];
                    }
                    if (moduleName.indexOf("http://") == 0 || moduleName.indexOf("https://") == 0) {
                        this.url = moduleName;
                        if (this.url.indexOf("http://") == 0 && ebStrProtocol == "https") {
                            this.url = url.replace("http://", "https://");
                        }
                    }
                    if (this.url) {
                        loadScript(this.url);
                    }
                }
            };
            ebArrModulesToTrigger.push(mwrapper);
        }
        return url;
    }

    function loadModulesNew(inModuleList) {
        var results = {};
        var count = inModuleList.length;

        function done() {
            var head = document.getElementsByTagName('head');
            var parent = (head && head[0]) || document.documentElement;
            for (var i = 0; i < inModuleList.length; i++) {
                if (results[inModuleList[i]]) {
                    var script = document.createElement("SCRIPT");
                    script.type = 'text/javascript';
                    script.text = results[inModuleList[i]];
                    parent.appendChild(script);
                }
            }
        }
        for (var i = 0; i < inModuleList.length; i++) {
            (function(name) {
                getDataFromRemoteServer(getModuleURL(name), function(result) {
                    count--;
                    results[name] = result;
                    if (count == 0) {
                        done();
                    }
                });
            })(inModuleList[i]);
        }
    }

    function loadModules(inModuleList) {
        var loadEB = true;
        if (typeof(inModuleList) != 'undefined' && inModuleList instanceof Array) {
            for (var i = 0; i < inModuleList.length; i++) {
                var moduleName = inModuleList[i];
                if (moduleName == "EB") {
                    continue;
                } else if (moduleName == "EBCMD") {
                    loadEB = false;
                }
                var moduleUrl = getModuleURL(moduleName);
                if (moduleUrl) {
                    loadScript(moduleUrl);
                }
            }
        }
        if (loadEB) {
            var moduleUrl = getModuleURL("EB");
            if (moduleUrl) {
                loadScript(moduleUrl);
            }
        }
    }
    if (ebQueryString.indexOf("&n=1") != -1) {
        window.shouldModernizrNew = true;
        createPreloadedModules();
        loadModulesNew(buildModulesList(window.EBModulesToLoad));
    } else {
        if (typeof(EBModulesToLoad) == 'undefined') {
            EBModulesToLoad = [];
        }
        loadModules(EBModulesToLoad);
    }
})();