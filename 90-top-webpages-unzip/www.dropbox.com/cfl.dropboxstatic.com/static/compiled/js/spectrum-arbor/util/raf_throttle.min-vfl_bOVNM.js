define(["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=(function(){function t(t){var e=this;this.request=function(){e.ticking||(e.ticking=!0,e.currentRequestId=requestAnimationFrame(function(){e.thunk(),e.ticking=!1}))},this.cancelPending=function(){cancelAnimationFrame(e.currentRequestId)},this.thunk=t}return t})();e.RafThrottle=n});
//# sourceMappingURL=raf_throttle.min.js-vfl_HwNz1.map