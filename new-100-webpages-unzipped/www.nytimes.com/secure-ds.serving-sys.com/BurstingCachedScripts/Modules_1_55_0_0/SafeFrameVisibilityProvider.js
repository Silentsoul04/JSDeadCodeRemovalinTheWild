EBG.declareNamespace("RichModules");
EBG.RichModules.SafeFrameVisibilityProvider = function(resourceObjId, adConfig, options) {
    EBG.callSuperConstructor(EBG.RichModules.SafeFrameVisibilityProvider, this, [resourceObjId, adConfig, options]);
    this._initSafeFrameObject();
};
EBG.RichModules.SafeFrameVisibilityProvider.prototype = {
    name: "SafeFrame",
    isTimedBaseVisibility: true,
    _safeFrameObj: null,
    _intervalHandler: null,
    _lastPercentage: null,
    _lastViewport: null,
    _initSafeFrameObject: function() {
        this._safeFrameObj = window.$sf && $sf.ext;
    },
    _calculateVisibilityPercentage: function() {
        try {
            return EBG.adaptor.isPageVisible() ? this._safeFrameObj.inViewPercentage() : 0;
        } catch (e) {
            return 0;
        }
    },
    _getViewPortRect: function() {
        var geom = this._safeFrameObj.geom().win;
        return {
            w: parseInt(geom.w),
            h: parseInt(geom.h)
        };
    },
    _getViewPortMetrics: function() {
        var rect = this._getViewPortRect();
        return {
            Height: rect.h,
            Width: rect.w
        };
    },
    _isVisible: function() {
        return !!this._calculateVisibilityPercentage();
    },
    _checkVisibility: function() {
        var res = this._calculateVisibilityResult();
        if (this._lastPercentage != res.percentage || (!this._lastViewport || this._lastViewport.Height != res.viewPort.Height || this._lastViewport.Width != res.viewPort.Width)) {
            this._dispatchCheckVisibility(res);
            this._lastPercentage = res.percentage;
            this._lastViewport = res.viewPort;
        }
    },
    start: function() {
        EBG.callSuperFunction(EBG.RichModules.SafeFrameVisibilityProvider, this, "start");
        EBG.setInterval(this, this._checkVisibility, [], EBG.RichModules.VisibilityManager.VisibilityCheckInterval);
    }
};
EBG.declareClass(EBG.RichModules.SafeFrameVisibilityProvider, EBG.RichModules.BasicVisibilityProvider);