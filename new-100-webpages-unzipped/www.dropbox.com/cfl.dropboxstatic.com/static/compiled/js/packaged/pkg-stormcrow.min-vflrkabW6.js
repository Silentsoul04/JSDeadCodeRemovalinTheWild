define("modules/clean/stormcrow/experiment", ["require", "exports"], function(r, t) {
    "use strict";

    function e(r) {
        return new i(r)
    }

    function n(r) {
        return new u(r)
    }

    function o() {
        for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
        return new(a.bind.apply(a, [void 0].concat(r)))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function() {
        function r(r) {
            this.variant = void 0 !== r ? r : ""
        }
        return Object.defineProperty(r.prototype, "isActive", {
            get: function() {
                return "" !== this.variant && !this.variantIn("OFF", "CONTROL")
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.variantIs = function(r) {
            return this.variant === r
        }, r.prototype.variantIn = function() {
            for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
            return !!(this.variant && r && r.length) && r.indexOf(this.variant) !== -1
        }, r
    })();
    t.StormcrowExperiment = i;
    var u = (function() {
        function r(r) {
            this.isOn = void 0 !== r && ("string" == typeof r ? "ON" === r : !!r)
        }
        return r
    })();
    t.StormcrowGate = u;
    var a = (function() {
        function r() {
            for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
            this.experiments = r.map(function(r) {
                return new i(r)
            })
        }
        return r.prototype.hasVariant = function(r) {
            return this.experiments.some(function(t) {
                return t.variantIs(r)
            })
        }, r.prototype.hasVariantIn = function() {
            for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
            return this.experiments.some(function(t) {
                return t.variantIn.apply(t, r)
            })
        }, r
    })();
    t.StormcrowExperimentGroup = a, t.Experiment = e, t.Gate = n, t.ExperimentGroup = o
}), define("modules/clean/stormcrow/stormcrow_exposure_logger", ["require", "exports", "tslib", "modules/clean/ajax"], function(r, t, e, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = e.__importStar(n);
    var o = (function() {
        function r() {
            this.exposures = {}
        }
        return r.prototype.logExposure = function(r, t) {
            n.SilentBackgroundRequest({
                url: "/log/stormcrow_exposures",
                data: {
                    stormcrow_name: r,
                    variant: t
                }
            })
        }, r.prototype.logExposuresOnce = function(r) {
            var t = this;
            Object.keys(r).forEach(function(e) {
                if (!(e in t.exposures)) {
                    var n = r[e];
                    e && n && (t.exposures[e] = n, t.logExposure(e, n))
                }
            })
        }, r
    })();
    t.StormcrowExposureLogger = o, t.logVariantExposure = function(r, t) {
        return !(!t || "OFF" === t) && n.SilentBackgroundRequest({
            url: "/log/stormcrow_exposures",
            data: {
                stormcrow_name: r,
                variant: t
            }
        })
    }
});
//# sourceMappingURL=pkg-stormcrow.min.js-vflU2fKiv.map