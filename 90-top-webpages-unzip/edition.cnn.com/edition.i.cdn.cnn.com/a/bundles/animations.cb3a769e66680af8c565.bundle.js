!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=89)}({89:function(e,t,n){n(90),n(91),CNN.INJECTOR.scriptComplete("animations")},90:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*! npm.im/iphone-inline-video 2.2.2 */window.CNN.enableInlineVideo=function(){"use strict";
/*! npm.im/intervalometer */function e(e,t,n){function i(i){n&&!n(e,t)||i.stopImmediatePropagation()}return e.addEventListener(t,i),i}function t(e,t,n,i){function r(e){n[t]=e}i&&r(e[t]),Object.defineProperty(e,t,{get:function(){return n[t]},set:r})}function i(e,t,n){n.addEventListener(t,(function(){return e.dispatchEvent(new Event(t))}))}function r(e,t){Promise.resolve().then((function(){e.dispatchEvent(new Event(t))}))}var a="object"===("undefined"==typeof document?"undefined":n(document))&&"object-fit"in document.head.style&&!matchMedia("(-webkit-video-playable-inline)").matches,o="bfred-it:iphone-inline-video",d="bfred-it:iphone-inline-video:event",u="bfred-it:iphone-inline-video:nativeplay",s="bfred-it:iphone-inline-video:nativepause";var c,l=[],p=0;function f(e,t,n){(c||0)+200<Date.now()&&(e[d]=!0,c=Date.now()),n||(e.currentTime=t),l[++p%3]=100*t|0}function m(e){return e.driver.currentTime>=e.video.duration}function v(e){this.video.readyState>=this.video.HAVE_FUTURE_DATA?(this.hasAudio||(this.driver.currentTime=this.video.currentTime+e*this.video.playbackRate/1e3,this.video.loop&&m(this)&&(this.driver.currentTime=0)),f(this.video,this.driver.currentTime)):this.video.networkState===this.video.NETWORK_IDLE&&0===this.video.buffered.length&&this.video.load(),this.video.ended&&(delete this.video[d],this.video.pause(!0))}function y(){var e=this[o];this.webkitDisplayingFullscreen?this[u]():("data:"!==e.driver.src&&e.driver.src!==this.src&&(f(this,0,!0),e.driver.src=this.src),this.paused&&(e.paused=!1,0===this.buffered.length&&this.load(),e.driver.play(),e.updater.start(),e.hasAudio||(r(this,"play"),e.video.readyState>=e.video.HAVE_ENOUGH_DATA&&r(this,"playing"))))}function h(e){var t=this[o];t.driver.pause(),t.updater.stop(),this.webkitDisplayingFullscreen&&this[s](),t.paused&&!e||(t.paused=!0,t.hasAudio||r(this,"pause"),this.ended&&!this.webkitDisplayingFullscreen&&(this[d]=!0,r(this,"ended")))}function g(e,t){var n={};e[o]=n,n.paused=!0,n.hasAudio=t,n.video=e,n.updater=function(e,t,n,i){var r,a;function o(n){r=t(o,i),e(n-(a||n)),a=n}return{start:function(){r||o(0)},stop:function(){n(r),r=null,a=0}}}(v.bind(n),requestAnimationFrame,cancelAnimationFrame),t?n.driver=function(e){var t=new Audio;return i(e,"play",t),i(e,"playing",t),i(e,"pause",t),t.crossOrigin=e.crossOrigin,t.src=e.src||e.currentSrc||"data:",t}(e):(e.addEventListener("canplay",(function(){e.paused||r(e,"playing")})),n.driver={src:e.src||e.currentSrc||"data:",muted:!0,paused:!0,pause:function(){n.driver.paused=!0},play:function(){n.driver.paused=!1,m(n)&&f(e,0)},get ended(){return m(n)}}),e.addEventListener("emptied",(function(){var i=!n.driver.src||"data:"===n.driver.src;n.driver.src&&n.driver.src!==e.src&&(f(e,0,!0),n.driver.src=e.src,i||!t&&e.autoplay?n.driver.play():n.updater.stop())}),!1),e.addEventListener("webkitbeginfullscreen",(function(){e.paused?t&&0===n.driver.buffered.length&&n.driver.load():(e.pause(),e[u]())})),t&&(e.addEventListener("webkitendfullscreen",(function(){n.driver.currentTime=e.currentTime})),e.addEventListener("seeking",(function(){l.indexOf(100*e.currentTime|0)<0&&(n.driver.currentTime=e.currentTime)})))}function b(e){var t=e[d];return delete e[d],!e.webkitDisplayingFullscreen&&!t}return function(n,i){if(void 0===i&&(i={}),!n[o]){if(!i.everywhere){if(!a)return;if(!(i.iPad||i.ipad?/iPhone|iPod|iPad/:/iPhone|iPod/).test(navigator.userAgent))return}n.pause();var r=n.autoplay;n.autoplay=!1,g(n,!n.muted),function(n){var i=n[o];n[u]=n.play,n[s]=n.pause,n.play=y,n.pause=h,t(n,"paused",i.driver),t(n,"muted",i.driver,!0),t(n,"playbackRate",i.driver,!0),t(n,"ended",i.driver),t(n,"loop",i.driver,!0),e(n,"seeking",(function(e){return!e.webkitDisplayingFullscreen})),e(n,"seeked",(function(e){return!e.webkitDisplayingFullscreen})),e(n,"timeupdate",b),e(n,"ended",b)}(n),n.classList.add("IIV"),n.muted&&r&&(n.play(),n.addEventListener("playing",(function e(){n.autoplay=!0,n.removeEventListener("playing",e)}))),/iPhone|iPod|iPad/.test(navigator.platform)||console.warn("iphone-inline-video is not guaranteed to work in emulated environments")}}}()},91:function(e,t){!function(e,t,n,i){"use strict";function r(e,t){return"string"==typeof t[e]&&t[e].length>0}t.ANIMATIONS=t.ANIMATIONS||{},t.ANIMATIONS.loadAnimation=function(a){i.iospre10&&t.ANIMATIONS.iphoneInlineAutoplay(a.animationId),a.cuts&&("article"!==a.pageType||a.isBackground?"section"===a.pageType||"special"===a.pageType?fastdom.measure((function(){var t=n(e.getElementById(a.animationId)).width(),i=a.url.replace("org","w_"+t);fastdom.mutate((function(){n(e.getElementById(a.animationId)).wrap('<a href="'+a.targetUrl+'"></a>'),n(e.getElementById(a.animationId)).html('<source src="'+i+'" type="video/mp4"></source>')}))})):a.isBackground&&fastdom.mutate((function(){n(e.getElementById(a.animationId)).html('<source src="'+a.cuts.dataSrcFull16x9+'" type="video/mp4"></source>')})):i.phone&&r("dataSrcPhonePageTop",a.cuts)?fastdom.mutate((function(){n(e.getElementById(a.animationId)).html('<source src="'+a.cuts.dataSrcPhonePageTop+'" type="video/mp4"></source>')})):!0===a.isPageTop?"standard"===a.appearance&&r("dataSrcMedium",a.cuts)?fastdom.mutate((function(){n(e.getElementById(a.animationId)).html('<source src="'+a.cuts.dataSrcMedium+'" type="video/mp4"></source>')})):"fullwidth"===a.appearance&&r("dataSrcLarge",a.cuts)&&fastdom.mutate((function(){n(e.getElementById(a.animationId)).html('<source src="'+a.cuts.dataSrcLarge+'" type="video/mp4"></source>')})):"fullwidth"===a.appearance&&r("dataSrcLarge",a.cuts)?fastdom.mutate((function(){n(e.getElementById(a.animationId)).html('<source src="'+a.cuts.dataSrcLarge+'" type="video/mp4"></source>')})):"standard"!==a.appearance&&"expandable"!==a.appearance||!r("dataSrcXsmall",a.cuts)||fastdom.mutate((function(){n(e.getElementById(a.animationId)).html('<source src="'+a.cuts.dataSrcXsmall+'" type="video/mp4"></source>')})))},t.ANIMATIONS.iphoneInlineAutoplay=function(i){fastdom.mutate((function(){var r=n(e.getElementById(i))[0];t.enableInlineVideo(r,!r.hasAttribute("muted"),!1)}))}}(document,CNN,jQuery,Modernizr)}});