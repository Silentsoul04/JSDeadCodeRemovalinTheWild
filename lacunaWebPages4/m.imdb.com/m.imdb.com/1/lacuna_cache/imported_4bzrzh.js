(window.webpackJsonpBoomer=window.webpackJsonpBoomer||[]).push([["npm.timers-browserify"],{Mu2eQLIQub:function(e,t,i){___jdce_logger("lacuna_cache/imported_4bzrzh.js", 102, 1186);(function(e){___jdce_logger("lacuna_cache/imported_4bzrzh.js", 119, 1157);var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,n=Function.prototype.apply;function l(e,t){___jdce_logger("lacuna_cache/imported_4bzrzh.js", 218, 261);this._id=e,this._clearFn=t}t.setTimeout=function(){___jdce_logger("lacuna_cache/imported_4bzrzh.js", 274, 343);return new l(n.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){___jdce_logger("lacuna_cache/imported_4bzrzh.js", 358, 429);return new l(n.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){___jdce_logger("lacuna_cache/imported_4bzrzh.js", 461, 486);e&&e.close()},l.prototype.unref=l.prototype.ref=function(){___jdce_logger("lacuna_cache/imported_4bzrzh.js", 521, 533);},l.prototype.close=function(){___jdce_logger("lacuna_cache/imported_4bzrzh.js", 552, 594);this._clearFn.call(o,this._id)},t.enroll=function(e,t){___jdce_logger("lacuna_cache/imported_4bzrzh.js", 604, 666);clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){___jdce_logger("lacuna_cache/imported_4bzrzh.js", 678, 739);clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){___jdce_logger("lacuna_cache/imported_4bzrzh.js", 764, 908);clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){___jdce_logger("lacuna_cache/imported_4bzrzh.js", 863, 903);e._onTimeout&&e._onTimeout()},t))},i("HtNaIRzYkf"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,i("qv/MW4HMFk"))}}]);