define("@baidu/get-app-info/index", ["require", "@baidu/jssdk"], function(require) {
    function a(a) {
        var g = require("@baidu/jssdk");
        return g.data.get({
            name: "utils-appInfo",
            data: {
                scheme: a.scheme || "",
                pkg: a.pkg || ""
            }
        })
    }
    return {
        getAppInfo: a
    }
}), define("@baidu/get-app-info", ["@baidu/get-app-info/index"], function(mod) {
    return mod
});