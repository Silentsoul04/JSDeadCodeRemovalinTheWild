
        ! function(e, t) {
            if (e.Ya = e.Ya || {}, Ya.Rum) throw new Error("Rum: interface is already defined");
            var n = e.performance,
                i = n && n.timing && n.timing.navigationStart || Ya.startPageLoad || +new Date,
                s = e.requestAnimationFrame;
            Ya.Rum = {
                enabled: !!n,
                vsStart: document.visibilityState,
                vsChanged: !1,
                _defTimes: [],
                _defRes: [],
                _deltaMarks: {},
                _settings: {},
                _vars: {},
                init: function(e, t) {
                    this._settings = e, this._vars = t
                },
                getTime: n && n.now ? function() {
                    return n.now()
                } : Date.now ? function() {
                    return Date.now() - i
                } : function() {
                    return new Date - i
                },
                time: function(e) {
                    this._deltaMarks[e] = [this.getTime()]
                },
                timeEnd: function(e, t) {
                    var n = this._deltaMarks[e];
                    n && 0 !== n.length && n.push(this.getTime(), t)
                },
                sendTimeMark: function(e, t, n, i) {
                    void 0 === t && (t = this.getTime()), this._defTimes.push([e, t, i]), this.mark(e, t)
                },
                sendResTiming: function(e, t) {
                    this._defRes.push([e, t])
                },
                sendRaf: function(e) {
                    var t = this.getSetting("forceFirstPaintTimeSending");
                    if (s && (t || !this.isVisibilityChanged())) {
                        var n = this,
                            i = "2616." + e;
                        s(function() {
                            !t && n.isVisibilityChanged() || (n.sendTimeMark(i + ".205"), s(function() {
                                !t && n.isVisibilityChanged() || n.sendTimeMark(i + ".1928")
                            }))
                        })
                    }
                },
                isVisibilityChanged: function() {
                    return this.vsStart && ("visible" !== this.vsStart || this.vsChanged)
                },
                mark: n && n.mark ? function(e, t) {
                    n.mark(e + (t ? ": " + t : ""))
                } : function() {},
                getSetting: function(e) {
                    var t = this._settings[e];
                    return null === t ? null : t || ""
                }
            }, document.addEventListener && document.addEventListener("visibilitychange", function a() {
                Ya.Rum.vsChanged = !0, document.removeEventListener("visibilitychange", a)
            })
        }(window),
        function() {
            "use strict";
            Ya.Rum.observeDOMNode = window.IntersectionObserver ? function(e, t, n) {
                var i = this,
                    s = Ya.Rum.getSetting("forceFirstPaintTimeSending");
                ! function a() {
                    if (s || !i.isVisibilityChanged()) {
                        var r = "string" == typeof t ? document.querySelector(t) : t;
                        r ? new IntersectionObserver(function(t, n) {
                            !s && i.isVisibilityChanged() || (Ya.Rum.sendTimeMark(e), n.unobserve(r))
                        }, n).observe(r) : setTimeout(a, 100)
                    }
                }()
            } : function() {}
        }(),
        function() {
            "use strict";
            if (window.PerformanceLongTaskTiming) {
                var e = Ya.Rum._tti = {
                    events: [],
                    observer: new PerformanceObserver(function(t) {
                        e.events = e.events.concat(t.getEntries()), e.events.length > 100 && e.events.shift()
                    })
                };
                e.observer.observe({
                    entryTypes: ["longtask"]
                })
            }
        }(),
        function() {
            "use strict";
            var e, t = [];

            function n() {
                var n = Ya.Rum.getSetting("clck"),
                    i = t.join("\r\n");
                if (t = [], e = null, n && !(navigator.sendBeacon && Ya.Rum.getSetting("beacon") && navigator.sendBeacon(n, i))) {
                    var s = new XMLHttpRequest;
                    s.open("POST", n), s.send(i)
                }
            }
            Ya.Rum.send = function(i, s, a, r, o, u, c) {
                clearTimeout(e);
                var d = function(e, t, n, i, s, a) {
                    var r = Ya.Rum.getSetting("slots");
                    return [a ? "/" + a.join("/") : "", "/path=" + t, r ? "/slots=" + r.join(";") : "", n ? "/vars=" + n : "", "/cts=" + (new Date).getTime(), "/*"]
                }(0, s, a, 0, 0, c);
                t.push("/reqid=" + Ya.Rum.getSetting("reqid") + d.join("")), t.length < 42 ? e = setTimeout(n, 15) : n()
            }
        }();
        Ya.Rum.init({
            "beacon": true,
            "reqid": "1570707295.68451.141014.321198",
            "slots": ["145711,0,10", "171230,0,62", "174841,0,22"],
            "clck": "https://yandex.ru/clck/click",
            "sendStaticLocation": false,
            "enablePaintPerformanceObserver": 1
        }, {
            "143": "28.15.1785",
            "287": "10466",
            "1961": 0,
            "1964": 1,
            "1965": 0,
            "-project": "morda",
            "-page": "geotouch",
            "-platform": "touch",
            "-env": "production",
            "-version": "2.2270",
            "-blocker": ""
        });
        Ya.Rum.observeDOMNode('2876', '.mini-suggest')
    