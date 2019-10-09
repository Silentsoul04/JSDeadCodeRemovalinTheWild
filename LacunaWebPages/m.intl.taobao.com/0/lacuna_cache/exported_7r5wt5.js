
        document.createElement = _backCreateElement;
        window.addEventListener("load", function() {
            setTimeout(function() {
                var e = document.createElement("script");
                e.src = "//g.alicdn.com/alilog/mlog/aplus_wap.js";
                e.async = !0;
                document.body.appendChild(e)
            }, 10)
        })
    