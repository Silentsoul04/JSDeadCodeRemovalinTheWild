/*
 Nielsen SDK package v6.0.0.63 
 (c) 2017 The Nielsen Company 
*/
/* GLCFG build v5.5.5.2*/
window.NOLCMB.registerLib("GLCFG", function(n) {
    function e(n) {
        function e() {
            window[t] && window[t][a] && window[t][a].initialized ? (s[a].modules.allModInit = !0, s[a].modules.PLCMB = 2, s[a].modules.PLDPR = 2, s[a].emptyQueue()) : d < r && (d++, setTimeout(e, 2e3))
        }
        try {
            if (n) {
                var i = n.getConfigParams().ggParams,
                    a = n.name,
                    d = 0;
                i.nsdkv = "600", "NOLSDK" === o && (i.sdkUrl = "{{protocol}}//{{subdomain}}.{{domain}}/novms/js/nolsdk/nlsSDK{{nsdkv}}.bundle.min.js"), window[t].nlsQ(i.apid, a, i), setTimeout(e, 2e3)
            }
        } catch (n) {
            console && console.error && console.error("Nielsen SDK initialization error - " + n.message)
        }
    }
    var o = "NOLCMB",
        t = "NOLBUNDLE",
        i = "5.5.5.2",
        r = 5;
    window[o]._isBundle = !0,
        function(n, e) {
            n[e] = n[e] || {
                nlsQ: function(o, t, i, r, s, a) {
                    return s = n.document, r = s.createElement("script"), r.async = 1, r.src = ("http:" === n.location.protocol ? "http:" : "https:") + "//cdn-gl.imrworldwide.com/conf/" + o + ".js#name=" + t + "&ns=" + e, a = s.getElementsByTagName("script")[0], a.parentNode.insertBefore(r, a), n[e][t] = n[e][t] || {
                        g: i,
                        ggPM: function(o, i, r, s, a) {
                            (n[e][t].q = n[e][t].q || []).push([o, i, r, s, a])
                        }
                    }, n[e][t]
                }
            }
        }(window, t);
    var s = window[o].getInstances();
    return s && Object.keys(s).forEach(function(n) {
        e(s[n])
    }), {
        registerListener: function(n, i) {
            function r(r) {
                var s = i,
                    a = n;
                window[t] && window[t][i.name] ? window[t][i.name] && window[t][i.name].ggPM && window[t][i.name].ggPM(r.evtInfo.eventType, r.evtInfo.param1, r.evtInfo.param2, r.evtInfo.param3, r.evtInfo.param4) : e(window[o].getInstance(i.name))
            }
            i && "ggPM" === n && i.addListener(n, r)
        }
    }
});