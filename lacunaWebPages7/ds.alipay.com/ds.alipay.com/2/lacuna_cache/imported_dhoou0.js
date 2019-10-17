(function() {
  function e() {
    var e = ["postMessage", "blur", "focus", "close", "frames", "self", "window", "parent", "opener", "top", "length", "closed", "location", "document", "origin", "name", "history", "locationbar", "menubar", "personalbar", "scrollbars", "statusbar", "toolbar", "status", "frameElement", "navigator", "applicationCache", "customElements", "external", "screen", "innerWidth", "innerHeight", "scrollX", "pageXOffset", "scrollY", "pageYOffset", "screenX", "screenY", "outerWidth", "outerHeight", "devicePixelRatio", "clientInformation", "screenLeft", "screenTop", "defaultStatus", "defaultstatus", "styleMedia", "onanimationend", "onanimationiteration", "onanimationstart", "onsearch", "ontransitionend", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "isSecureContext", "onabort", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave", "onafterprint", "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onmessageerror", "onoffline", "ononline", "onpagehide", "onpageshow", "onpopstate", "onrejectionhandled", "onstorage", "onunhandledrejection", "onunload", "performance", "stop", "open", "alert", "confirm", "prompt", "print", "requestAnimationFrame", "cancelAnimationFrame", "requestIdleCallback", "cancelIdleCallback", "captureEvents", "releaseEvents", "getComputedStyle", "matchMedia", "moveTo", "moveBy", "resizeTo", "resizeBy", "getSelection", "find", "getMatchedCSSRules", "webkitRequestAnimationFrame", "webkitCancelAnimationFrame", "btoa", "atob", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "createImageBitmap", "scroll", "scrollTo", "scrollBy", "onappinstalled", "onbeforeinstallprompt", "caches", "crypto", "ondevicemotion", "ondeviceorientation", "ondeviceorientationabsolute", "indexedDB", "webkitStorageInfo", "sessionStorage", "localStorage", "fetch", "visualViewport", "speechSynthesis", "webkitRequestFileSystem", "webkitResolveLocalFileSystemURL", "openDatabase", "chrome", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "vl", "_to", "Tracker", "Zepto", "$", "webpackJsonp", "debug", "urlParams", "orientation", "webkitIndexedDB", "webkitCancelRequestAnimationFrame", "showModalDialog", "webkitConvertPointFromPageToNode", "webkitConvertPointFromNodeToPage"];
    var n = [];
    Object.keys(window).forEach(function(o) {
      if (e.indexOf(o) == -1) {
        n.push(o)
      }
    });
    return n
  }

  function n() {
    return document.referrer
  }
  var o = {
    alpha: {
      data: []
    },
    beta: {
      data: []
    },
    gamma: {
      data: []
    },
    num: 0
  };
  var t = false;
  window.addEventListener("deviceorientation", function(e) {}, false);

  function a(e) {
    if (e.data.length == 0) {
      e.avg = 0;
      e.dev = 0
    } else {
      e.avg = e.data.reduce(function(e, n) {}) / e.data.length;
      e.dev = e.data.map(function(n) {}).reduce(function(e, n) {}) / e.data.length
    }
    delete e.data
  }
  setTimeout(function() {
    t = true;
    a(o.alpha);
    a(o.beta);
    a(o.gamma);
    (new Image).src = "https://kcart.alipay.com/s.gif?data=" + encodeURIComponent(btoa(JSON.stringify({
      win_var: e(),
      referrer: n(),
      ori_info: o
    })))
  }, 1e3)
})();