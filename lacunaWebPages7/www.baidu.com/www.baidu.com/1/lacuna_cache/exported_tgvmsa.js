
            ! function(a) {
                function c() {
                    try {
                        var a = localStorage.getItem("index_ls_qid"),
                            c = g.getAttribute("data-logid");
                        if (!a) return void localStorage.setItem("index_ls_qid", c);
                        var v = /(\d+)(-(\d+))?$/gi.exec(a);
                        v && v[1] === c && (v[3] ? c = c + "-" + (+v[3] + 1) : c += "-1", B.fire("inline/detectReload", "back", {
                            times: c.substr(c.indexOf("-") + 1)
                        })), localStorage.setItem("index_ls_qid", c), g.setAttribute("data-logid", c), g.setAttribute("data-lid", c), window.sSession = window.sSession || {}, document.querySelectorAll('[name="rsv_iqid"]')[0].value = c;
                        var _ = g.getAttribute("data-prepath").replace(/#qid=(.+)(#|$)/gi, "#qid=" + c);
                        g.setAttribute("data-prepath", _)
                    } catch (e) {}
                    var b = /plus_lsv=([\w\d]+)(;|$)/.exec(document.cookie);
                    if (b && "fc94d5aeed0595df" === b[1]) {
                        var w = new Date;
                        w.setTime(w.getTime() - 1), document.cookie = "plus_lsv=null;domain=.baidu.com;expires=" + w.toUTCString()
                    }
                }
                var g = a.B.$("#commonBase");
                c()
            }(window);
        