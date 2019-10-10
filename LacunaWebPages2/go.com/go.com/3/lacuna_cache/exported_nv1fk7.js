
        document.addEventListener("DOMContentLoaded", function() {
            if (o = "disney-tou", !(i = document.cookie.match("(^|;) ?" + o + "=([^;]*)(;|$)")) || !i[2]) {
                var e = document.createElement("div"),
                    t = document.createElement("a");
                t.href = "javascript:void(0)", t.setAttribute("aria-label", "Close"), t.onclick = function() {
                    document.body.removeChild(e), t = "disney-tou", o = !0, i = 30, n = new Date, r = location.hostname.split("."), r = r.slice(r.length - 2).join("."), n.setTime(n.getTime() + 864e5 * i), document.cookie = t + "=" + o + ";domain=" + r + ";expires=" + n.toGMTString();
                    var t, o, i, n, r
                }, t.innerText = "X";
                t.setAttribute("style", "position:absolute;right:1vw;top:50%;transform: translate(0, -50%);padding:10px;font-size: 16px; color: black; font-weight: 500; font-family: sans-serif; text-decoration:none");
                e.setAttribute("style", "position: fixed; background-color: #FFF; color: #121; font-size: 12px; bottom: 0px; line-height:18px; z-index:999; left: 0px; right: 0px; margin-bottom: 0px; text-align: center; padding: 19px 5px; box-shadow:0px 0 6px rgba(0, 0, 0, 0.2)"), e.innerHTML = '<div style="width:90%; display:inline-block; text-align: center; padding-right: 10px;"> Please review our <a style="color:#121; text-decoration: underline;" href="https://disneytermsofuse.com/" target="_blank" rel="noopener">Terms of Use</a> which changed on <span style="white-space: nowrap">September 26, 2019.</span></div>', e.appendChild(t), document.body.insertBefore(e, document.body.firstChild)
            }
            var o, i
        });
    