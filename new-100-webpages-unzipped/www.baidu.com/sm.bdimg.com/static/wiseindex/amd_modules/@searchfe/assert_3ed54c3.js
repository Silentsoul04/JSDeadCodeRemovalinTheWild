define("@searchfe/assert/index", ["require"], function() {
    function a(a, c) {
        if (!a) throw new Error(c)
    }

    function c(c, h, w) {
        return a(c == h, w)
    }
    var h = a;
    return h.ok = a, h.equal = c, h
}), define("@searchfe/assert", ["@searchfe/assert/index"], function(mod) {
    return mod
});