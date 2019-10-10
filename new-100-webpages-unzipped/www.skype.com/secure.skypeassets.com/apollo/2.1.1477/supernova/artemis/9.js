(window.webpackJsonp = window.webpackJsonp || []).push([
    [9], {
        364: function(s, a, o) {
            var d, _;
            void 0 === (_ = function() {
                "use strict";
                d = [o(0), o(95)], void 0 === (_ = function(s, a) {
                    var o = a.getPlatform(),
                        d = a.getBrowser(),
                        _ = function() {
                            var _ = null,
                                i = s("html");
                            switch (d) {
                                case "safari":
                                    i.addClass("safari");
                                    break;
                                case "chrome":
                                    i.addClass("chrome")
                            }
                            switch (o) {
                                case a.WINDOWS:
                                    _ = a.getWindowsSpecificPlatform(), i.hasClass("os_Windows10") ? _ === a.WINDOWS_AU || _ === a.WINDOWS_10_REDSTONE_2 ? i.addClass("os_Windows10_AU") : _ === a.WINDOWS_AU_NONE ? i.addClass("os_Windows10_AU_None") : i.addClass("os_Windows10_AU_Undetected") : (_ === a.WINDOWS_XP ? i.addClass("os_Windows_XP") : _ === a.WINDOWS_VISTA && i.addClass("os_Windows_Vista"), i.addClass("os_noWindows10"));
                                    break;
                                case a.MAC:
                                    i.addClass("os_noWindows");
                                    var n = a.getMacOsSpecificPlatform();
                                    null !== n && void 0 !== n && (n === a.MAC_OS_X_10_9_LOWER ? i.addClass("os_macos_10_9_lower") : n === a.MAC_OS_X_10_10_HIGHER && i.addClass("os_macos_10_10_higher"));
                                    break;
                                default:
                                    i.addClass("os_noWindows")
                            }
                        };
                    return _(), {
                        init: _
                    }
                }.apply(a, d)) || (s.exports = _)
            }.apply(a, d = [])) || (s.exports = _)
        }
    }
]);