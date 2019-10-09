
        window.batUsePost = true
        window.g_config = window.g_config || {};
        window.g_config.language = "zh-CN";
        window.g_config.regionID = "GLOBAL";
        window.g_config.swSwitch = true;
        window._isApp = false

        var div = document.createElement("div");
        var _backCreateElement = document.createElement;
        document.createElement = function() {
            return div;
        };
    