define(["require","exports","modules/core/i18n","modules/clean/react/business/bermuda/zeus/types"],function(e,r,t,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){return e===s.SEMVariant.T61?"sem_t61":e===s.SEMVariant.T68?"sem_t68":"biz"};r.getZeusPreFooterContent=function(e){return{headline:t._("Bring the smart workspace to your business"),cta:{text:e===s.SEMVariant.T61?t._("Try it for free"):t._("Try free for 30 days"),href:"/business/try",trackingId:n(e)+"_prefooter_try_zeus"},ctaSubtext:[{text:t._("or <a>purchase now</a>"),href:"/business/buy",trackingId:n(e)+"_prefooter_buy_zeus"}]}}});
//# sourceMappingURL=pre_footer.min.js-vflUNftto.map