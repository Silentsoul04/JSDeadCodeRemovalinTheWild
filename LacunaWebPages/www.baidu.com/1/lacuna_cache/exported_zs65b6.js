// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

        window.lsNowVersion = "f197ee21ffd230fd";
        ! function() {
            function a(a, c, _, v) {
                g.cookie = [a + "=" + c, "domain=" + (v || ".baidu.com"), "path=/", "expires=" + _.toGMTString()].join(";")
            }

            function c(a, c, _, v) {
                g.cookie = [a + "=" + c, "domain=" + (v || ".baidu.com"), "path=/", "expires=" + _.toUTCString()].join(";")
            }

            function _(_) {
                var g = new Date;
                if (g.setTime(g.getTime() + 18e5), c("reload", _, g, S.location.hostname), a("plus_lsv", "", v, S.location.hostname), S.location.hostname.indexOf(".m.baidu.com") > -1 && a("plus_lsv", "", v, ".m.baidu.com"), S.stop(), window.navigator.cookieEnabled) location.reload();
                else {
                    var h = S.location.search,
                        w = h + (~h.indexOf("?") ? "&" : "?") + "iscookie=0";
                    S.location.search = w
                }
            }
            var g = document,
                v = new Date,
                S = window;
            try {
                localStorage.setItem("_t", 1), localStorage.removeItem("_t"), S.lsNowVersion !== localStorage.getItem("nindex_ls_version") && _("lsDiff:_" + localStorage.length + "_" + S.lsNowVersion + "_" + localStorage.getItem("nindex_ls_version"))
            } catch (e) {
                v.setTime(+v + 6048e5), a("lssp", "no", v), _("lsCatch")
            }
            S.LSToHtml = function(a) {lacuna_lazy_load("lacuna_cache/exported_zs65b6.js[1502:1800]", functionData => eval(functionData))}
        }();;
    