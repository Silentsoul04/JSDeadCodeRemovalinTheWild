define("@baidu/jssdk/index", ["require", "@searchfe/promise", "@searchfe/user-agent", "@baidu/Boxjs-search"], function(require) {
    function a() {
        return c.reject("api not support")
    }
    var c = require("@searchfe/promise"),
        h = {
            data: {
                get: a,
                set: a
            },
            ui: {
                open: a,
                close: a,
                update: a
            },
            media: {
                video: a,
                audio: a,
                tts: a
            },
            view: {
                open: a,
                close: a,
                update: a
            },
            message: {
                send: a
            }
        },
        j = require("@searchfe/user-agent");
    return j.isBaiduBox() && (h = require("@baidu/Boxjs-search")), h
}), define("@baidu/jssdk", ["@baidu/jssdk/index"], function(mod) {
    return mod
});