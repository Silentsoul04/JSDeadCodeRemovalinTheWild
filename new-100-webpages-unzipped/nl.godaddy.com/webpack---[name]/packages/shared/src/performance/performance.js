const stringHelper = require('@exp/exp-utils/helper/string');
const browserHelper = require('@exp/exp-utils/helper/browser');
const object = require('@exp/exp-utils/helper/object');
const configHelper = require('../helpers/config');

const logger = require('@exp/exp-utils/helper/logger');

const maxToSend = 10;
let performanceLib;

function _obtainMarksAndMeasures(perfObject) {
    if (performanceLib.getEntriesByType) {
        const theMarks = performanceLib.getEntriesByType('mark');
        if (theMarks.length || theMarks.length > 0) {
            perfObject.marks = stringHelper.stringifyArray(theMarks, maxToSend, (mark) => {
                return encodeURIComponent(mark.name) + ',' + mark.startTime.toFixed(0);
            });

            const theMeasures = performanceLib.getEntriesByType('measure');
            if (theMeasures.length && theMeasures.length > 0) {
                perfObject.measures = stringHelper.stringifyArray(theMeasures, maxToSend, (measure) => {
                    return encodeURIComponent(measure.name) + ',' + measure.duration.toFixed(0);
                });
            }
        }
    }
}

const _paintMetrics = {
    'first-paint': 'fp',
    'first-contentful-paint': 'fcp'
};

function _obtainPaintMetrics(perfObject) {
    if (performanceLib.getEntriesByType) {
        const paintEntries = performanceLib.getEntriesByType('paint');
        if (paintEntries) {
            paintEntries.forEach((entry) => {
                perfObject[_paintMetrics[entry.name]] = Math.round(entry.startTime);
            });
        }
    }
}

const _navTimingMetrics = [
    'connectEnd',
    'connectStart',
    'domComplete',
    'domContentLoadedEventEnd',
    'domContentLoadedEventStart',
    'domInteractive',
    'domLoading',
    'domainLookupEnd',
    'domainLookupStart',
    'fetchStart',
    'navigationStart',
    'requestStart',
    'responseEnd',
    'responseStart',
    'loadEventStart',
    'loadEventEnd'
];

const _navPayloadMetrics = [
    'transferSize',
    'encodedBodySize',
    'decodedBodySize'
];

function _extractNavigationMetrics(perfObject, array, keys) {
    for (let i = 0; i < keys.length; i++) {
        perfObject[keys[i]] = array[keys[i]] || 0;
    }
}

function _obtainPageNavTimings(perfObject) {
    // Fetch the timing metrics from performance.timing
    _extractNavigationMetrics(perfObject, performanceLib.timing, _navTimingMetrics);

    if (!performanceLib.getEntriesByName) return;

    // Look for the navigation performance entry to fetch information about the payload size
    let navigationEntry = performanceLib.getEntriesByName(browserHelper.getDocument().location.href)[0];

    // If we can't find the entry using the current URL, use the most recent navigation entry
    if (!navigationEntry && performanceLib.getEntriesByType) {
        const navigationEntries = performanceLib.getEntriesByType('navigation');
        navigationEntry = navigationEntries[navigationEntries.length - 1];
    }
    if (navigationEntry) {
        _extractNavigationMetrics(perfObject, navigationEntry, _navPayloadMetrics);

        // Navigation type is a string: "reload", "back_forward", etc.
        perfObject.navigationType = navigationEntry.type;
    }
}

function _collect(initiator) {
    const perfObject = {
        tccin: initiator || 'na'
    };

    // Get a sample
    try {
        performanceLib = browserHelper.getWindow().performance;
        if (!performanceLib || !performanceLib.timing) {
            perfObject.tccperfapi = 'not supported';
        } else {
            _obtainPageNavTimings(perfObject);
            _obtainMarksAndMeasures(perfObject);
            _obtainPaintMetrics(perfObject);
        }
    } catch (ex) {
        logger.error('_collect unable to get performance data', ex);
    }
    if (process.env.NODE_ENV !== 'production') {
        logger.debug('_collect', perfObject);
    }

    return perfObject;
}

function _sendDataToTcc(perfObject) {
    // Push this async to avoid recursive behaviors
    setTimeout(() => {
        if (browserHelper.getWindow()._expDataLayer) {
            browserHelper.getWindow()._expDataLayer.push({
                schema: 'add_perf',
                version: 'v1',
                data: {
                    type: 'pageperf',
                    properties: object.merge(perfObject, {
                        nav_type: 'hard'
                    })
                }
            });
        }
    }, 0);
}

function _isReady() {
    // If we have no performance API, just let collection occur for error send
    performanceLib = browserHelper.getWindow().performance;
    return (!performanceLib || !performanceLib.timing || (performanceLib.timing.loadEventStart > 0));
}

let perfSent = false;

function getPerformanceData(initiator) {
    // only send perf data once (unless manual request like synthetic event)
    if (initiator !== 'manual' && perfSent) {
        return;
    }
    perfSent = true;

    if (_isReady()) {
        _sendDataToTcc(_collect(initiator));
    } else {
        // Wait for the performance data to become available
        const delay = configHelper.get('tcc.perfDelayMs');
        const interval = setInterval(() => {
            if (_isReady()) {
                clearInterval(interval);
                _sendDataToTcc(_collect(initiator));
            }
        }, delay);
    }
}

const _logResourceTiming = (resourceTiming) => {
    if (resourceTiming && resourceTiming.name) {
        let hostname = resourceTiming.name;

        if (hostname.indexOf('//') >= 0) {
            hostname = hostname.split('/')[2];
        } else {
            hostname = hostname.split('/')[0];
        }

        hostname = hostname.split('?')[0];
        hostname = hostname.split(':')[0];

        if (browserHelper.isCorporateHost(hostname)) {
            browserHelper.getWindow()._expDataLayer = browserHelper.getWindow()._expDataLayer || [];

            browserHelper.getWindow()._expDataLayer.push({
                schema: 'add_event',
                version: 'v1',
                data: {
                    type: 'timing',
                    eid: 'traffic.tcc.instrumentation.performance.resource.timing',
                    properties: {
                        initiatorType: resourceTiming.initiatorType,
                        encodedBodySize: resourceTiming.encodedBodySize,
                        decodedBodySize: resourceTiming.decodedBodySize,
                        duration: resourceTiming.duration,
                        connectEnd: resourceTiming.connectEnd,
                        connectStart: resourceTiming.connectStart,
                        domainLookupEnd: resourceTiming.domainLookupEnd,
                        domainLookupStart: resourceTiming.domainLookupStart,
                        fetchStart: resourceTiming.fetchStart,
                        redirectEnd: resourceTiming.redirectEnd,
                        redirectStart: resourceTiming.redirectStart,
                        requestStart: resourceTiming.requestStart,
                        responseEnd: resourceTiming.responseEnd,
                        responseStart: resourceTiming.responseStart,
                        secureConnectionStart: resourceTiming.secureConnectionStart,
                        startTime: resourceTiming.startTime,
                        transferSize: resourceTiming.transferSize,
                        resourceLocation: resourceTiming.name.split('?')[0]
                    }
                }
            });
        }
    }
};

let _currentResourceIndex = 0;
const checkResourceAPI = () => {
    if (browserHelper.getWindow().performance && browserHelper.getWindow().performance.getEntriesByType) {
        const entries = browserHelper.getWindow().performance.getEntriesByType('resource');
        for (_currentResourceIndex; _currentResourceIndex < entries.length - 1; _currentResourceIndex++) {
            if (entries[_currentResourceIndex] &&
                (entries[_currentResourceIndex].initiatorType === 'xmlhttprequest' ||
                    entries[_currentResourceIndex].initiatorType === 'fetch' ||
                    entries[_currentResourceIndex].initiatorType === 'other')) {
                _logResourceTiming(entries[_currentResourceIndex]);
            }
        }
    }
    setTimeout(checkResourceAPI, 10);
};

let _initialized = false;

function init() {
    if (!_initialized) {
        _initialized = true;
        if (browserHelper.getWindow().performance.setResourceTimingBufferSize) {
            browserHelper.getWindow().performance.setResourceTimingBufferSize(600);
        }
        checkResourceAPI();
    }
}

let internalExports = {};
if (process.env.NODE_ENV !== 'production') {
    internalExports = {
        _isReady: _isReady,
        _collect: _collect
    };
}
module.exports = object.merge({
        getPerformanceData: getPerformanceData,
        init: init
    },
    internalExports
);