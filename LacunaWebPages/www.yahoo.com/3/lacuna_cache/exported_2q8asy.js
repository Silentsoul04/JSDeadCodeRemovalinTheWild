
                window.Y = window.Y || {};
                window.Y.utils = window.Y.utils || {};
                window.Y.utils.ready = function ready(callback) {
                    if (!callback) {
                        return;
                    }
                    if (!(!document.attachEvent || typeof document.attachEvent === "undefined")) {
                        document.attachEvent("onreadystatechange", function () {
                            if (document.readyState === "interactive") {
                                callback();
                            }
                        });
                    } else {
                        if (document.readyState === "loading") {
                            window.addEventListener("DOMContentLoaded", callback, { capture: false, passive: true });
                        } else {
                            callback();
                        }
                    }
                };
                (function () {
                    function _waferJSReady () {
                        // wait till wafer js is loaded
                        if (window.wafer) {
                            var rapidInstance = window.YAHOO && window.YAHOO.i13n && window.YAHOO.i13n.rapidInstance;
                            if (rapidInstance) {
                                var beaconClick = rapidInstance.beaconClick;
                                window.wafer.on("toggle:change", function waferChangeHandler(payload) {
                                    var payloadElem = payload.elem;
                                    if (payloadElem && payloadElem.getAttribute) {
                                        var target = payload.meta.target;
                                        if (target.matches('.weather-daily-toast-overlay-wrapper')) {
                                            if (target.classList.contains('is-active')) {
                                                document.body.classList.add('yhm-toaster-open');
                                            } else {
                                                document.body.classList.remove('yhm-toaster-open');
                                            }
                                            return;
                                        }
                                        // instrument user swipes
                                        // 'add' will indicate swipe open
                                        if (payload && payload.meta && payload.meta.action === 'add') {
                                            if (payload.meta.target.matches('.user-intent') && payload.meta.eventName === 'swipeleft') {
                                                var cpos = Number(payloadElem.getAttribute('data-cpos'));
                                                // cpos starts at 1
                                                if (cpos) {
                                                    var linkElem = payloadElem.querySelector('a');
                                                    var uuid = linkElem && linkElem.getAttribute('data-uuid');
                                                    var rapidParams = {
                                                        cpos: cpos,
                                                        elm: 'showless',
                                                        elmt: 'swipe',
                                                        g: uuid,
                                                        itc: 1
                                                    };
                                                    beaconClick('strm', 'swipe', '', rapidParams);
                                                }
                                            }
                                            if (payload.meta.target.matches('.headerwafer') && payload.meta.eventName === 'onLoad') {
                                                setTimeout(function() {
                                                    var header =  document.querySelector('.headerwafer');
                                                    if (header) {
                                                        header && header.classList && header.classList.remove('header-tooltip-show');
                                                    }
                                                }, 5000)
                                            }
                                        }
                                    }
                                });
                                // instrument the drawer swipes in user intent "show more/less" bucket
                                window.wafer.on("drawer:change", function waferChangeHandler(payload)  {
                                    // instrument user swipes in the user intent drawer
                                    var elem = payload && payload.elem;
                                    if (elem && elem.classList.contains('user-intent')) {
                                        var cpos = Number(elem.getAttribute('data-cpos'));
                                        var elmt;
                                        var elm;
                                        var rapidParams = {};
                                        if (cpos) {
                                            var drawerState = payload.meta && payload.meta._state && payload.meta._state.drawerState;
                                            var linkElem = elem.querySelector('a[data-uuid]');
                                            var uuid = linkElem && linkElem.getAttribute('data-uuid');

                                            if (drawerState === 'open-right') {
                                                elmt = 'swipe-left';
                                                elm = 'swipe-showless';
                                            } else if (drawerState === 'open-left') {
                                                elmt = 'swipe-right';
                                                elm = 'swipe-showmore';
                                            } else if (drawerState === 'closed') {
                                                elm = 'swipe-closed';
                                                elmt = 'swipe';
                                            }
                                            rapidParams = {
                                                cpos: cpos,
                                                elm: elm,
                                                elmt: elmt,
                                                g: uuid,
                                                itc: 1
                                            }
                                            beaconClick('strm', 'swipe', '', rapidParams);
                                        }
                                    }
                                });
                                // fire swipe beacon for scrollview
                                window.wafer.on("scrollview:change", function waferScrollviewSwipeHandler(payload) {
                                    var payloadMeta = payload && payload.meta;
                                    if (payloadMeta && payloadMeta.index >= 0 && payloadMeta.prevIndex >= 0) {
                                        var direction = payloadMeta.prevIndex > payloadMeta.index ? 'left' : 'right';
                                        var rapidParams = {
                                            cpos: 1,
                                            elm: 'swipe',
                                            itc: 1,
                                            pkgt: 'need_to_know',
                                            pos: payloadMeta.index,
                                            sec: 'strm',
                                            subsec: 'needtoknow'
                                        };
                                        beaconClick('strm', direction, '', rapidParams);
                                    }
                                });
                                
                            }
                            window.wafer.on("error", function waferErrHandler(wferror) {
                                // if image fails to load
                                if (wferror) {
                                    if (wferror.name === "WaferImage") {
                                        var errElem = wferror.elem;
                                        if (!errElem) {
                                            return;
                                        }
                                        if (errElem.classList.contains("wafer-image-err-hideparent") && window.wafer.utils) {
                                            // look for parent element with class wafer-image-err-hide
                                            errElem = window.wafer.utils.findAncestor(errElem, "wafer-image-err-hide");
                                        }
                                        if (errElem && errElem.classList.contains("wafer-image-err-hide")) {
                                            errElem.style.display = "none";
                                        }
                                    }
                                    var connection = (navigator.connection || navigator.mozConnection || navigator.webkitConnection) || {};
                                    var connectionMeta = {
                                        downlink: connection.downlink || "",
                                        downlinkMax: connection.downlinkMax || "",
                                        effectiveType: connection.effectiveType || "",
                                        rtt: connection.rtt || "",
                                        saveData: connection.saveData || "",
                                        type: connection.type || ""
                                    };
                                    var connectionSaveData = connection.saveData || "";
                                    var connectionEffectiveType = connection.effectiveType || "";
                                    var errorMessage = (wferror.stack && wferror.stack.message) || "";
                                    // beacon error
                                    var beaconUrl = "/p.gif?err=" + wferror.name + "&beaconType=wafer_err&info=" + escape(JSON.stringify(wferror.meta)) + "&stack=" + errorMessage + "&rid=6b82cvpepq23l" + "&bucket=FPVIDBACK01,FPRIVEN02" + "&apptype=default" + "&connection=" + escape(JSON.stringify(connectionMeta));

                                    window.wafer.utils.fireBeacon(beaconUrl);
                                }
                            });
                            window.wafer.on("log", function waferLogHandler(wfData) {
                                if (wfData) {
                                    var name = wfData.name;
                                    // beacon log
                                    var beaconUrl = "/p.gif?for=" + name + "&beaconType=wafer_log&info=" + escape(JSON.stringify(wfData.meta)) + "&rid=6b82cvpepq23l" + "&bucket=FPVIDBACK01,FPRIVEN02" + "&apptype=default";

                                    window.wafer.utils.fireBeacon(beaconUrl);
                                    if (name === 'IDB-connection-success') {
                                        window.wafer.base.clearOldCache({
                                            "timeDiffToDelete": 1382400000
                                        });
                                    }
                                }
                            });
                        }
                    }
                    function _logBCookie() {
                        var rawCookie = document.cookie;
                        var bCookieValue = '';
                        var bCookieTs;
                        var storedCookieValue;
                        rawCookie && rawCookie.split(';').some(function(cookie) {
                            cookie = cookie && typeof cookie === 'string' && cookie.trim();
                            if (cookie && cookie.startsWith('B=')) {
                                bCookieValue = cookie.slice(2);
                                bCookieTs = Date.now();
                                return !!bCookieValue;
                            }
                        });
                        storedBCookieValue = window.localStorage && window.localStorage.getItem('bCookieValue');
                        if (!storedCookieValue || (storedBCookieValue && bCookieValue && storedBCookieValue !== bCookieValue)) {
                            if (typeof window.localStorage === 'object') {
                                var storage = window.localStorage;
                                storage.setItem('bCookieValue', bCookieValue);
                                storage.setItem('bCookieTs', bCookieTs);
                                if (storedBCookieValue && storedBCookieValue !== bCookieValue) {
                                    // fire p.gif
                                    var bCookieTs = storage.getItem('bCookieTs');
                                    var timeElapsed = bCookieTs ? Date.now() - bCookieTs : 'unknown';
                                    var beaconUrl =  '/p.gif?beaconType=bCookieChurn&newBCookieValue=' + bCookieValue + '&oldBCookieValue=' + storedBCookieValue + '&secElapsed=' + timeElapsed + "&rid=6b82cvpepq23l" + "&bucket=FPVIDBACK01,FPRIVEN02";

                                    if (window.wafer && window.wafer.utils && window.wafer.utils.fireBeacon) {
                                        window.wafer.utils.fireBeacon(beaconUrl);
                                    }
                                }
                            }
                        }
                    }
                    window.Y.utils.ready(_waferJSReady);
                    window.Y.utils.ready(_logBCookie);
                }());
            