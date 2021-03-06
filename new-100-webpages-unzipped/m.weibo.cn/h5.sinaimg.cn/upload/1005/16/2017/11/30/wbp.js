(function(global) {
    var deepExtend = function(out) {
        out = out || {};
        for (var i = 1; i < arguments.length; i++) {
            var obj = arguments[i];
            if (!obj) continue;
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === "object") {
                        out[key] = deepExtend(out[key], obj[key])
                    } else {
                        out[key] = obj[key]
                    }
                }
            }
        }
        return out
    };
    var _P = {
        options: {
            url: "https://m.weibo.cn/api/log/front",
            rate: .1,
            data: window.__wb_performance_data || {}
        },
        timing: {},
        data: {},
        check: function() {
            return window.performance && window.performance.timing && Math.random() < _P.options.rate
        },
        setup: function() {
            _P.timing = window.performance.timing;
            if (_P.setData(_P.timing)) {
                _P.send(_P.options.url, _P.data)
            }
        },
        setData: function(timing) {
            var startTime = timing.navigationStart || timing.fetchStart;
            var data = {
                t_unload: timing.unloadEventEnd - timing.unloadEventStart,
                t_redirect: timing.redirectEnd - timing.redirectStart,
                t_dns: timing.domainLookupEnd - timing.domainLookupStart,
                t_tcp: timing.connectEnd - timing.connectStart,
                t_request: timing.responseStart - timing.requestStart,
                t_response: timing.responseEnd - timing.responseStart,
                t_paint: _P.getFirstPaintTime() - startTime,
                t_dom: timing.domContentLoadedEventStart - timing.domLoading,
                t_domready: timing.domContentLoadedEventStart - startTime,
                t_load: timing.loadEventStart - timing.domLoading,
                t_onload: timing.loadEventStart - startTime,
                t_white: timing.responseStart - startTime,
                t_all: timing.loadEventEnd - startTime
            };
            for (var key in data) {
                if (data[key] <= 0 || data[key] >= 12e4) {
                    delete data[key]
                }
            }
            data["url"] = window.location.href;
            _P.data = deepExtend(_P.data, data, _P.options.data);
            return startTime > 0
        },
        getFirstPaintTime: function() {
            var firstPaintTime = 0;
            if (window.chrome && typeof window.chrome.loadTimes === "function") {
                firstPaintTime = window.chrome.loadTimes().firstPaintTime * 1e3
            } else if (typeof _P.timing.msFirstPaint === "number") {
                firstPaintTime = _P.timing.msFirstPaint
            }
            return Math.round(firstPaintTime)
        },
        send: function(url, data) {
            if (navigator.sendBeacon) {
                var formData = new FormData;
                formData.append("args", JSON.stringify(data));
                navigator.sendBeacon(url, formData)
            } else {
                var img = new Image;
                img.src = url + "?args=" + decodeURIComponent(JSON.stringify(data))
            }
        },
        log: function(options) {
            _P.options = deepExtend(_P.options, options);
            if (_P.check()) {
                if (window.performance.timing.loadEventEnd > 0) {
                    _P.setup()
                } else {
                    window.addEventListener("load", function() {
                        window.setTimeout(function() {
                            _P.setup()
                        }, 0)
                    })
                }
            }
        }
    };
    var tag = document.getElementById("__wb_performance_log");
    var rate = tag.getAttribute("data-rate");
    if (rate) {
        _P.log({
            rate: rate
        })
    } else {
        global.P = _p
    }
})(window);