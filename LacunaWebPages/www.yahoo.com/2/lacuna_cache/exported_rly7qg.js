
            !function(o,c){var a,t,i,n,e=[],r={passive:!0,capture:!0},p=new Date,f="pointerup",u="pointercancel",d=window;function m(n,e){a||(a=e,t=n,i=new Date,M(c),w())}function w(){0<=t&&t<i-p&&(e.forEach(function(n){n(t,a)}),e=[])}function s(n){if(n.cancelable){var e=(1e12<n.timeStamp?new Date:d.performance.now())-n.timeStamp;"pointerdown"===n.type?function(n,e){function a(){m(n,e),i()}function t(){i()}function i(){c(f,a,r),c(u,t,r)}o(f,a,r),o(u,t,r)}(e,n):m(e,n)}}function M(e){["click","mousedown","keydown","touchstart","pointerdown"].forEach(function(n){e(n,s,r)})}d.performance&&d.performance.now&&M(o),n=function(n,e){var a=d.YAHOO&&d.YAHOO.i13n&&d.YAHOO.i13n.rapidInstance||d.YMedia&&d.YMedia.My&&d.YMedia.My.App&&d.YMedia.My.App.getRapidTracker&&d.YMedia.My.App.getRapidTracker()||d.rapidInstance,t=Math.round(n);a&&a.beaconPerformanceData&&0<t&&(t={utm:{yaft_fid:t}},a.beaconPerformanceData({perf_usertime:t}))},e.push(n),w()}(addEventListener,removeEventListener);

                        function yaftPreProcess() {
                // collect ad load times call YAFT.triggerCustomTiming right before the AFT calculation finished
                var darlaAdTimings = [];
                var adTiming;
                var whiteListedAds = {"LREC":"my-adsLREC-base","MAST":"my-adsMAST","LDRB":"my-adsLDRB","UBALDRB":"my-adsUBALDRB","TL1":"my-adsTL1","TXTL":"my-adsTXTL","LREC-0":"hl-ad-LREC-0","MON-0":"hl-ad-MON-0","MAST-0":"hl-ad-MAST-0","LDRB-0":"hl-ad-LDRB-0","SPL2-0":"hl-ad-SPL2-0","SPL-0":"hl-ad-SPL-0","LDRB-1":"viewer-LDRB","MON-1":"viewer-MON","LREC-1":"viewer-LREC","LREC-2":"viewer-LREC2"};
                var w = window;
                var aft2StartRender = w.YAFT.AFT2.getAFT2StartRender() - 800;
                if (typeof w._adLT !== 'undefined' && w.performance && w.performance.now) {
                    for (var i = 0; i < w._adLT.length; i++) {
                        adTiming = w._adLT[i];
                        var adIdAction = adTiming[0];
                        var adTime = adTiming[1];
                        var adAction = adIdAction.indexOf('ADSTART_') > -1 ? 'start' : 'end';
                        var adId = '';

                        if (adAction === 'start') {
                            adId = adIdAction.replace('ADSTART_', '');
                            darlaAdTimings[adId] = {
                                started: adTime,
                                loaded: 0
                            };
                        } else {
                            adId = adIdAction.replace('ADEND_', '');
                            if (typeof darlaAdTimings[adId] !== 'undefined') {
                                darlaAdTimings[adId].loaded = adTime;
                            }
                        }
                    }

                    for (var adObj in darlaAdTimings) {
                        if (darlaAdTimings.hasOwnProperty(adObj) && typeof whiteListedAds[adObj] !== undefined) {
                            var adStartTime = darlaAdTimings[adObj].started;
                            var adLoadTime = darlaAdTimings[adObj].loaded || w.performance.now();
                            if (aft2StartRender > adStartTime) {continue;}
                            w.YAFT.triggerCustomTiming(whiteListedAds[adObj], adStartTime, adLoadTime);
                        }
                    }
                }

                // calculate custom video timing
                if (typeof w._videoLT !== 'undefined' && w.YAFT && w.YAFT.isInitialized() && w.performance && typeof w.performance.now === 'function') {
                    Object.getOwnPropertyNames(window._videoLT).forEach(function(key) {
                        w.YAFT.triggerCustomTiming(key, window._videoLT[key].startTime, window._videoLT[key].loadTime || w.performance.now());
                    });
                }
            }

            function yaftInit(e) {
                if (window.YAFT !== undefined) {
                    var __yaftConfig = {
                        modules: ["applet_p_50000321","applet_p_50000323","applet_p_50000316","applet_p_50000315"],
                        modulesExclude: null,
                        canShowVisualReport: false,
                        useNormalizeCoverage: true,
                        includeOnlyAft2: false,
                        useNativeStartRender : true,
                        useNativeStartRenderMeaningful : true,
                        customReportModules: [],
                        
                        maxWaitTime: 1500,
                        preProcess: yaftPreProcess,
                        preferDataModNameOverId: false
                    };
                    __yaftConfig.plugins = [];
                    
                    
                    window.YAFT.init(__yaftConfig, function(data, error) {
                        var i;
                        if (!error) {
                            try {
                                        var rapidInstance = YAHOO.i13n.rapidInstance ? YAHOO.i13n.rapidInstance : (YMedia.My && YMedia.My.App && YMedia.My.App.getRapidTracker) ? YMedia.My.App.getRapidTracker() : null;
        if(rapidInstance) {
            var initialPageLoad = {
                AFT: Math.round(data.aft),
                AFT1: Math.round(data.aft),
                STR: Math.round(data.startRender),
                VIC: data.visuallyComplete,
                PLT: data.pageLoadTime,
                DOMC: data.domElementsCount,
                HTTPC: data.httpRequests.count,
                CP: Math.round(data.totalCoveragePercentage),
                NCP: Math.round(data.normTotalCoveragePercentage)
            };

            if(data.aftNoAd) {
                initialPageLoad.AFTNOAD = Math.round(data.aftNoAd);
            }

            var customPerfData = {},
                pagePerfData = {},
                results = [];

            var yaftResults = [0], yaftModule = '', yaftIndex = '';
            // Find costly resource time
            for (yaftModule in data.modulesReport) {
                for (yaftIndex in data.modulesReport[yaftModule].resources) {
                    yaftResults.push(Math.round(data.modulesReport[yaftModule].resources[yaftIndex].durationFromNStart));
                }
            }
            pagePerfData['COSTLY_RESOURCE'] = Math.max.apply(null, yaftResults);
            pagePerfData['X_FB1'] = 14;
            pagePerfData['X_FBN'] = 27;

            // Log ad perf data to rapid perf metric
            if (window.FPAD_rendered) {
                pagePerfData['xAFT'] = data.aft;
                pagePerfData['xPLT'] = data.pageLoadTime;
                if (window.rtFpadAdStart) {
                    pagePerfData['ADSTART_FPAD'] = Math.round(window.rtFpadAdStart);
                    if (window.rtAdStart) {
                         pagePerfData['ADCSTART_FPAD'] = Math.round(window.rtAdStart);
                    }
                    var adEndTime = window.rtAdDone ? window.rtAdDone : (window.performance && window.performance.now && window.performance.now());
                    pagePerfData['ADEND_FPAD'] = Math.round(adEndTime);
                }
            }

            // Track ad metrics
            if ( window._adLT) {
                for (var i = 0; i< _adLT.length; i++) {
                    pagePerfData[_adLT[i][0]]  = _adLT[i][1];
                }
            }

            // Track video metrics
            if (window._videoLT) {
                Object.getOwnPropertyNames(window._videoLT).forEach(function(key, index) {
                    var videoStartKey = 'VIDEO_' + (index + 1) + '_START';
                    var videoEndKey = 'VIDEO_' + (index + 1) + '_END';
                    pagePerfData[videoStartKey] = Math.round(window._videoLT[key].startTime);
                    pagePerfData[videoEndKey] = Math.round(window._videoLT[key].loadTime || 99999);
                });
            }
            

            // Track user connection type
            var navConnection = navigator && (navigator.connection || navigator.mozConnection || navigator.webkitConnection) || {};
            pagePerfData['CONNECTION_TYPE'] = navConnection.effectiveType || 'unknown';

            customPerfData['utm'] = pagePerfData;
            var perfData = {
                perf_commontime: {initialPageLoad: initialPageLoad},
                perf_usertime: customPerfData
            };
            rapidInstance.beaconPerformanceData(perfData);
        }
                            } catch (e) {}
                        }
                   });
                }
            }
            if (window.addEventListener) {
                window.addEventListener('DOMContentLoaded', yaftInit, false);
                var _yaftScrollingTimer,
    _yaftIsScrolling = false,
    _yaftIsDone = false,
    _yaftMaxScroll = 5,
    _yaftScrollingTimerDelay = 66,
    _yaftScrollCounter = 1,
    YMedia = YMedia || null,
    rapidInstance = (YAHOO && YAHOO.i13n && YAHOO.i13n.rapidInstance) || (YMedia && YMedia.My && YMedia.My.App && YMedia.My.App.getRapidTracker && YMedia.My.App.getRapidTracker()) || null;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {
    if (_yaftScrollCounter > _yaftMaxScroll) {
        return;
    }
    if (!_yaftIsScrolling) {
        window.YAFT.FPS.start('FPSIndex');
        _yaftIsScrolling = true;
    }
    // Clear our timeout throughout the scroll
    window.clearTimeout(_yaftScrollingTimer);

    // Set a timeout to run after scrolling ends
    _yaftScrollingTimer = setTimeout(function() {
        _yaftIsScrolling = false;
        window.YAFT.FPS.stop('FPSIndex', function(err, data) {
            var payload;
            if (!err) {
                payload = {
                   utm: {
                       fps_average_index: Math.round(data.avgFps),
                       fps_lowest_index: Math.round(data.worse)
                   }
                };
                _yaftScrollCounter++;
                if (rapidInstance) {
                    rapidInstance.beaconPerformanceData({perf_usertime: payload});
                }
            }
        });
    }, _yaftScrollingTimerDelay);

}, false);
            } else if (window.attachEvent) {
                window.attachEvent('DOMContentLoaded', yaftInit);
            }
            

      