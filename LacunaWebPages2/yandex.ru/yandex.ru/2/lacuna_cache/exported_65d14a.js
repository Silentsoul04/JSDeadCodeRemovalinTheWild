
        function Detector() {
            "use strict";
            return {
                checkDataURLSupport: function(e) {
                    var t = new Image;
                    t.onload = t.onerror = function() {
                        e(1 === this.width && 1 === this.height)
                    }, t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
                },
                isSVGSupported: function() {
                    if ("opera" in window) return !1;
                    var e = document.createElement("svg");
                    return e.innerHTML = "<svg/>", e.firstChild && "http://www.w3.org/2000/svg" === e.firstChild.namespaceURI
                },
                checkFlex: function() {
                    var e = document.documentElement.style;
                    return "flexWrap" in e || "webkitFlexWrap" in e ? "modern" : "msFlexPack" in e ? "2012" : "webkitBoxOrient" in e ? "old" : "no"
                }
            }
        }
        var detector = new Detector;
        ! function() {
            var e, t;
            e = detector.isSVGSupported() ? "i-ua_inlinesvg_yes m-svg" : "i-ua_inlinesvg_no no-data-url", detector.checkDataURLSupport(function(e) {
                e || (document.documentElement.className += " no-data-url")
            }), e += " i-ua_flex_" + detector.checkFlex(), this.document && this.document.documentElement && ((t = this.document.documentElement).className = t.className.replace("i-ua_js_no", "i-ua_js_yes") + " " + e)
        }();
    